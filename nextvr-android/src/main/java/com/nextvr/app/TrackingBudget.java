package com.nextvr.app;

/**
 * Adaptive hand-input resolution only. Frame cadence is owned by Camera2 and the single-flight
 * admission flag in PassthroughCamera; this class must never impose an independent FPS ceiling.
 *
 * The widths are the ANALYSIS sizes the light tracker segments (see com.nextvr.lighttrack): 256 px
 * wide is ~55 000 pixels of chroma test, majority cleanup, flood fill and palm fit — under a
 * millisecond on a mid-range phone, which is why the tracker now follows the camera frame rate
 * instead of being the thing that limits it. 192 px is the fallback that a busy device (a WebView
 * app open, thermal throttling) steps down to: a hand at arm's length still has fingers ~4 px wide
 * there, which is what the profile needs.
 *
 * Stepping down needs a sustained mean above [PRESSURE_MS]; stepping back up needs a much longer
 * stretch of headroom, and the mean restarts after every step so the new size gets a fair chance.
 */
public final class TrackingBudget {
    /**
     * 256 px first: fast enough to track every camera frame, and still wide enough for the
     * thumb-index loop and the finger profile. 192 px is the relief step.
     */
    private static final int[] WIDTHS = {256, 192};
    /** Mean tracking cost above this is "the tracker is not keeping up with the camera". */
    private static final double PRESSURE_MS = 5;
    /** Mean cost below this is headroom to spend on precision again. */
    private static final double RELIEF_MS = 2.5;
    /** Consecutive results required, so one slow frame (GC, app opening) never changes the input. */
    private static final int PRESSURE_FRAMES = 6, RELIEF_FRAMES = 90;
    /** The starting point of the mean, and where it returns after a step (see changeStep). */
    private static final double SEED_AVERAGE_MS = 3;

    private int step, slow, fast;
    private double averageMs = SEED_AVERAGE_MS;

    public synchronized int width() { return WIDTHS[step]; }

    /** Height for the current width, keeping the camera's aspect ratio. */
    public synchronized int height(int frameWidth, int frameHeight) {
        int width = WIDTHS[step];
        if (frameWidth <= 0 || frameHeight <= 0) return width * 3 / 4;
        return Math.max(1, width * frameHeight / frameWidth);
    }

    /** Which step is active, for the log. */
    public synchronized int step() { return step; }

    public synchronized double averageMs() { return averageMs; }

    public synchronized void completed(long inferenceMs) {
        averageMs = .8 * averageMs + .2 * Math.min(500, Math.max(1, inferenceMs));
        slow = averageMs > PRESSURE_MS ? slow + 1 : 0;
        fast = averageMs < RELIEF_MS ? fast + 1 : 0;
        if (slow >= PRESSURE_FRAMES && step < WIDTHS.length - 1) changeStep(step + 1);
        else if (fast >= RELIEF_FRAMES && step > 0) changeStep(step - 1);
    }

    /**
     * A step changes the thing being measured, so the old mean no longer describes it: restart the
     * average from the neutral seed. Without this, one sustained slow stretch walks the width down
     * two levels in twelve frames and the smaller input never gets a fair chance to catch up.
     */
    private void changeStep(int nextStep) {
        step = nextStep; slow = fast = 0; averageMs = SEED_AVERAGE_MS;
    }

    public synchronized void reset() { step = 0; slow = fast = 0; averageMs = SEED_AVERAGE_MS; }
}

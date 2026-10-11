package com.nextvr.app;

/**
 * Adaptive hand-input resolution only. Frame cadence is owned by Camera2 and the single-flight
 * admission flag in PassthroughCamera; this class must never impose an independent FPS ceiling.
 *
 * What the width is actually worth was measured (tools/bench/hand_input_policy_bench.py, the shipped
 * `hand_landmarker.task`, the app's own portrait geometry):
 *  - the model does not care: detect_for_video costs the same at 1280 px and at 256 px of analysis
 *    width (within noise), so a smaller input never made the tracker faster in the way this class
 *    used to assume;
 *  - detection recall does not care either: a hand filling 12 % of the frame height is found at
 *    every width from 640 down to 128, and the only size that loses hands (8 %) is already lost at
 *    640 - that limit is the palm detector, not the input;
 *  - precision degrades slowly and stays sub-pixel: against a 1280 px reference on the upright
 *    720x1280 grid, mean landmark error is 0.9 px at 640, 1.0 at 512, 1.2 at 448 (the One Euro
 *    dead zone is already ~1 px).
 *
 * So the width is a lever on the CAMERA thread (the filtered resample and the analysis bitmap are
 * proportional to the output pixels) and on memory traffic, not on the inference. It is therefore
 * stepped down earlier than before - 85 ms of inference meant ~12 Hz, at which point the previous
 * policy had already given up on the frame rate - and it steps back up one level at a time.
 */
public final class TrackingBudget {
    /** Best precision first. 448 is the measured floor below which sub-pixel precision starts to go. */
    private static final int[] WIDTHS = {640, 512, 448};
    /** Mean inference above this is "the tracker is not keeping up with the camera" (~20 Hz). */
    private static final double PRESSURE_MS = 50;
    /** Mean inference below this is headroom to spend on precision again. */
    private static final double RELIEF_MS = 26;
    /** Consecutive results required, so one slow frame (GC, app opening) never changes the input. */
    private static final int PRESSURE_FRAMES = 6, RELIEF_FRAMES = 90;
    /** The starting point of the mean, and where it returns after a step (see changeStep). */
    private static final double SEED_AVERAGE_MS = 40;

    private int step, slow, fast;
    private double averageMs = SEED_AVERAGE_MS;

    public synchronized int width() { return WIDTHS[step]; }

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

package com.nextvr.app;

/**
 * Decides whether a camera frame still needs an analysis copy for hand tracking.
 *
 * The camera callback produces TWO bitmaps per frame: the upright display bitmap (shared with the
 * passthrough view) and a scaled analysis copy published to the {@link LatestFrameSlot}. The
 * tracker takes the newest waiting frame when its inference finishes; while an inference is longer
 * than the camera period - exactly the saturated case on low-end devices - every callback used to
 * rescale and publish a frame that superseded an unread one (`dropped` in the perf log): filtered
 * resample plus a multi-megabyte ARGB allocation per frame, on the thread whose cost is the ceiling
 * of the tracking rate, for pixels nobody ever looks at.
 *
 * The gate skips producing the copy while the slot already holds a frame younger than
 * {@code maxPendingAgeMs}: that pending frame is what the tracker will analyse next, and it is
 * recent enough that waiting for the following camera frame costs at most the gate in staleness.
 * When the tracker keeps up (slot empty at callback time, the healthy case on any device) the gate
 * never fires and the pipeline behaves exactly as before; when it is saturated the gate converts
 * `dropped` into `skips` (tools/bench/pipeline_sim.py, variant "after + age-gated analysis
 * resample": at 90/45 ms inferences over 60 s, 411 wasted resamples became skips, track rate and
 * p95 unchanged, shown age +8 ms).
 *
 * Frame age is measured in CAMERA timestamps (both stamps come from Image.getTimestamp()), never
 * against elapsedRealtime: sensor clocks may have another epoch, and camera time is exactly the
 * axis on which "a newer frame exists" is defined.
 *
 * Pure Java, no Android types: the policy is unit-tested on the JVM (AnalysisGateTest).
 */
public final class AnalysisGate {
    /**
     * A pending frame younger than this makes a new resample redundant. 40 ms is ~1.2 camera
     * periods at 30 fps: the pending frame the tracker drains is then at most one period older
     * than the newest camera frame, while a callback that arrives one period after the pending
     * frame still skips its resample.
     */
    public static final long DEFAULT_MAX_PENDING_AGE_MS = 34L;

    private final long maxPendingAgeMs;

    public AnalysisGate(long maxPendingAgeMs) {
        if (maxPendingAgeMs < 0) throw new IllegalArgumentException("gate age must not be negative");
        this.maxPendingAgeMs = maxPendingAgeMs;
    }

    /**
     * @param stampMs        camera timestamp of the frame arriving now
     * @param pendingStampMs camera timestamp of the frame waiting in the slot, or a negative value
     *                       when the slot is empty
     */
    public boolean shouldProduce(long stampMs, long pendingStampMs) {
        return pendingStampMs < 0 || stampMs - pendingStampMs > maxPendingAgeMs;
    }
}

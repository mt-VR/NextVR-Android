package com.nextvr.app;

import android.os.Debug;
import android.os.Process;
import android.os.SystemClock;
import android.util.Log;

/**
 * Separates the rates that matter for hand tracking, so they can be measured on a phone instead of
 * inferred from the UI frame rate:
 *
 *   adb logcat -v time -s NextVR-Perf
 *
 * camera / render  : frame rates of the camera callback and the GL thread (the app's FPS)
 * cam_work         : MEAN MILLISECONDS THE CAMERA CALLBACK ITSELF SPENDS PER FRAME (YUV conversion,
 *                    the analysis resample and the hand-offs). This is the ceiling on how often
 *                    tracking can be fed, because the tracking input is produced on that thread.
 *                    Compare with 1000/camera: if cam_work approaches it, the camera thread, not
 *                    the model, is what limits the landmark rate.
 * handoff          : ms the camera thread spent waiting to hand the frame to the renderer
 * track            : EFFECTIVE hand-landmark rate (results completed per second)
 * infer_*          : MediaPipe primary inference time on the tracking thread
 * capture_to_landmark : sensor capture time to landmark result (only when the camera reports
 *                    REALTIME timestamps, so the clocks are comparable); acquire_to_landmark is
 *                    always available
 * publish          : tracking-thread completion until the WebView script ran on the main thread
 * replayed         : hand frames evaluated per WebView drain (>1.5 means the UI is falling behind
 *                    the tracker, which is when hand input lags although the picture is smooth)
 * stale            : hand frames that had lost their native validity by the time the WebView could
 *                    run them; each one is a cancelled press, so a growing count is "clicks vanish
 *                    under load"
 * dropped          : camera frames superseded before the tracker took them
 * skips            : camera frames whose analysis copy was never produced because the slot already
 *                    held a frame young enough (AnalysisGate): the same waste as `dropped`, avoided.
 *                    Zero on a device fast enough that the slot is empty at every camera callback.
 * loss             : results that observed NO hand right after one that did - real tracking losses,
 *                    as opposed to a slow/skipping tracker, which shows in gap_max/track_jitter
 * empty_ms         : milliseconds of the window spent in a lost-hand run (after a loss, until the
 *                    hand is back); the cost of a loss to the user, not of the initial palm search
 * gap_max          : longest interval between two results in the window (scheduler stalls, GC)
 * track_jitter     : stddev of the intervals between results - rate stability, independent of rate
 * camera_retries   : camera frames that failed and were retried on the next frame instead of
 *                    tearing the camera down on the first one; five in a row still do (the guard
 *                    in TrackingFailureGuard, mirrored by hand_retries on the tracking thread)
 * hand_retries     : hand-tracking frames that failed and were retried instead of ending the
 *                    session's hand tracking; five in a row still stop the hands and report it.
 *                    A burst with the hands still tracked is a flaky delegate, not an outage.
 * cpu_pct          : process CPU time over wall time, all threads
 * native_mb / java_mb : memory, for long-session stability
 *
 * Steady-state cost: a few field updates per frame plus one summary line every 3 s.
 * tools/perf/summarize_logcat.py turns a captured log into the table used in the investigation.
 */
public final class PerfLog {
    private static final String TAG = "NextVR-Perf";
    private static final long WINDOW_MS = 3000L;
    private static long windowStartMs = -1, windowStartCpuMs = -1;
    private static long cameraFrames, renderFrames, results, dropped;
    private static long replayedFrames, replayedBatches, staleFrames, coalescedFrames;
    private static long analysisSkips;
    private static double inferSum, inferMax, camWorkSum, camWorkMax, handoffSum, handoffMax;
    private static double captureSum, acquireSum, publishSum;
    private static long captureCount, acquireCount, publishCount;
    /** Tracking-loss separation: results that OBSERVED no hand after a result that had one are
     * real losses; a tracker that is merely slow or skipping shows up as gap/jitter instead. */
    private static long losses;
    /** Per-frame failures retried instead of ending the path on the spot (TrackingFailureGuard). */
    private static long cameraRetries, handRetries;
    private static int lastHands = -1;
    private static long emptySinceMs = -1;
    private static double emptyMs;
    private static long lastResultMs = -1, gapMaxMs;
    private static double intervalSum, intervalSqSum;
    private static long intervalCount;
    private static String delegate = "none";
    private PerfLog() {}

    /** Camera callback delivered a frame (before any tracking work). */
    public static synchronized void cameraFrame() { cameraFrames++; }

    /** Work the Camera2 callback thread spent on one frame; it gates tracking admission too. */
    public static synchronized void cameraWork(double ms) {
        camWorkSum += ms;
        camWorkMax = Math.max(camWorkMax, ms);
    }

    /** How long handing a frame to the renderer took the camera thread. Non-zero and growing means
     * the camera thread is waiting on the display path, which throttles tracking with it. */
    public static synchronized void cameraHandoff(double ms) {
        handoffSum += ms;
        handoffMax = Math.max(handoffMax, ms);
    }

    /** The GL thread drew a frame. Also emits the summary when the window is complete. */
    public static synchronized void renderFrame() {
        renderFrames++;
        long now = SystemClock.elapsedRealtime();
        if (windowStartMs < 0) { windowStartMs = now; windowStartCpuMs = Process.getElapsedCpuTime(); return; }
        if (now - windowStartMs >= WINDOW_MS) emit(now);
    }

    /** A camera frame was superseded by a newer one before the tracker could take it. */
    public static synchronized void droppedFrame() { dropped++; }

    /** A camera frame whose analysis copy was NOT produced: the slot already held a frame young
     * enough that this one would have been superseded unread (AnalysisGate). Counts the camera
     * thread work and the analysis bitmaps the gate saved; compare with `dropped`, which is the
     * same waste WITHOUT the gate. */
    public static synchronized void analysisSkipped() { analysisSkips++; }

    /** A camera-callback frame failed and is being retried on the next frame instead of tearing the
     * camera down on the first one; five consecutive failures still do (TrackingFailureGuard). */
    public static synchronized void cameraRetry() { cameraRetries++; }

    /** A hand-tracking frame failed and is being retried on the next frame instead of ending the
     * session's hand tracking; five consecutive failures still stop the hands (TrackingFailureGuard). */
    public static synchronized void handRetry() { handRetries++; }

    /** Which landmarker is doing the primary inference, for A/B runs ("GPU" or "CPU"). */
    public static synchronized void delegate(String name) { delegate = name; }

    /**
     * One WebView drain evaluated [frames] hand frames; [stale] of them had lost native validity and
     * [coalesced] superseded poses were dropped by the drain budget.
     */
    public static synchronized void handDrain(int frames, int stale, int coalesced) {
        replayedBatches++;
        replayedFrames += frames;
        staleFrames += stale;
        coalescedFrames += coalesced;
    }

    /**
     * A tracking result is ready. [inferenceMs] is the primary inference; [captureNs] the sensor
     * capture time on the elapsedRealtime clock or a negative value when it is not comparable;
     * [acquiredNs] when the frame was taken from the camera; [completedNs] when landmarks exist;
     * [hands] how many hands the merged result carries, so the log can separate a real tracking
     * loss (a result that saw no hand after one that did: `loss`, `empty_ms`) from a tracker that
     * is merely slow or skipping (long `gap_max` / `track_jitter` with the hand intact).
     */
    public static synchronized void result(long inferenceMs, long captureNs, long acquiredNs,
            long completedNs, int hands) {
        results++;
        inferSum += inferenceMs;
        inferMax = Math.max(inferMax, inferenceMs);
        acquireSum += (completedNs - acquiredNs) / 1e6;
        acquireCount++;
        if (captureNs > 0) {
            captureSum += (completedNs - captureNs) / 1e6;
            captureCount++;
        }
        long now = SystemClock.elapsedRealtime();
        if (lastResultMs >= 0) {
            long gap = now - lastResultMs;
            gapMaxMs = Math.max(gapMaxMs, gap);
            intervalSum += gap;
            intervalSqSum += (double) gap * gap;
            intervalCount++;
        }
        lastResultMs = now;
        if (hands == 0) {
            // The palm search before the first hand of a session is not a loss.
            if (emptySinceMs < 0 && lastHands > 0) {
                emptySinceMs = now;
                losses++;
            }
        } else if (emptySinceMs >= 0) {
            emptyMs += now - emptySinceMs;
            emptySinceMs = -1;
        }
        lastHands = hands;
    }

    /** The landmark result was evaluated by the WebView on the main thread. */
    public static synchronized void published(long completedNs) {
        publishSum += (SystemClock.elapsedRealtimeNanos() - completedNs) / 1e6;
        publishCount++;
    }

    /**
     * Emits the summary for the window that just ended. The line is diagnostics only, so a failure
     * to build it is reported and the window still closes: the caller is the GL thread's render
     * callback, where an escaping exception aborts the whole session. The window is reset either
     * way so one bad line cannot turn into a per-frame retry.
     */
    private static void emit(long now) {
        try {
            emitLine(now);
        } catch (RuntimeException e) {
            Log.w(TAG, "perf summary dropped: " + e);
        } finally {
            closeWindow(now);
        }
    }

    /** Starts the next window and forgets every count the next summary reports on. */
    private static void closeWindow(long now) {
        windowStartMs = now;
        windowStartCpuMs = Process.getElapsedCpuTime();
        cameraFrames = renderFrames = results = dropped = 0;
        replayedFrames = replayedBatches = staleFrames = coalescedFrames = 0;
        cameraRetries = handRetries = 0;
        analysisSkips = 0;
        losses = 0; emptyMs = 0; gapMaxMs = 0;
        intervalSum = intervalSqSum = 0; intervalCount = 0;
        inferSum = inferMax = camWorkSum = camWorkMax = handoffSum = handoffMax = 0;
        captureSum = acquireSum = publishSum = 0;
        captureCount = acquireCount = publishCount = 0;
    }

    /** Formats and logs the summary line for the window ending at [now]. */
    private static void emitLine(long now) {
        double seconds = (now - windowStartMs) / 1000.0;
        long cpu = Process.getElapsedCpuTime();
        double cpuPct = windowStartCpuMs < 0 ? -1 : 100.0 * (cpu - windowStartCpuMs) / Math.max(1L, now - windowStartMs);
        Runtime rt = Runtime.getRuntime();
        double javaMb = (rt.totalMemory() - rt.freeMemory()) / 1048576.0;
        double nativeMb = Debug.getNativeHeapAllocatedSize() / 1048576.0;
        if (emptySinceMs >= 0) {
            emptyMs += now - emptySinceMs;   // still lost: keep counting into the next window
            emptySinceMs = now;
        }
        double intervalMean = intervalCount == 0 ? -1 : intervalSum / intervalCount;
        double jitter = intervalCount == 0 ? -1
            : Math.sqrt(Math.max(0.0, intervalSqSum / intervalCount - intervalMean * intervalMean));
        Log.i(TAG, String.format(java.util.Locale.US,
            "window=%.1fs camera=%.1f render=%.1f track=%.1f cam_work=%.1f cam_work_max=%.1f "
                + "handoff=%.1f handoff_max=%.1f infer_mean=%.1f infer_max=%.1f "
                + "capture_to_landmark=%.1f acquire_to_landmark=%.1f publish=%.1f "
                + "replayed=%.2f stale=%d coalesced=%d dropped=%d skips=%d "
                + "camera_retries=%d hand_retries=%d "
                + "loss=%d empty_ms=%.0f gap_max=%d track_jitter=%.1f "
                + "cpu_pct=%.1f native_mb=%.1f java_mb=%.1f delegate=%s",
            seconds,
            cameraFrames / seconds,
            renderFrames / seconds,
            results / seconds,
            cameraFrames == 0 ? -1.0 : camWorkSum / cameraFrames,
            cameraFrames == 0 ? -1.0 : camWorkMax,
            cameraFrames == 0 ? -1.0 : handoffSum / cameraFrames,
            cameraFrames == 0 ? -1.0 : handoffMax,
            results == 0 ? -1.0 : inferSum / results,
            results == 0 ? -1.0 : inferMax,
            captureCount == 0 ? -1.0 : captureSum / captureCount,
            acquireCount == 0 ? -1.0 : acquireSum / acquireCount,
            publishCount == 0 ? -1.0 : publishSum / publishCount,
            replayedBatches == 0 ? -1.0 : replayedFrames / (double) replayedBatches,
            staleFrames, coalescedFrames,
            dropped, analysisSkips,
            cameraRetries, handRetries,
            losses, emptyMs, gapMaxMs, jitter,
            cpuPct, nativeMb, javaMb, delegate));
    }
}

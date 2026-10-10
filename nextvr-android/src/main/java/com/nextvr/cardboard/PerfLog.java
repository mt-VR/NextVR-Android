package com.nextvr.cardboard;

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
 * slots            : hand slots the primary graph processed, mean over the window (1 = one hand
 *                    tracked, the cheap path; 2 = searching, or two hands really up)
 * narrow/wide/probe: frames of each kind since the log started - how much of the window was the
 *                    cheap one-slot path, and how many second-hand re-checks were paid for
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
 * rescues          : crop rescues finished (found: how many of them produced a hand)
 * recoverySkips    : YOLO rounds shed because the primary inference was already the bottleneck
 * cpu_pct          : process CPU time over wall time, all threads
 * native_mb / java_mb : memory, for long-session stability
 *
 * Steady-state cost: a few field updates per frame plus one summary line every 3 s.
 * tools/perf/summarize_logcat.py turns a captured log into the table used in the investigation.
 */
public final class PerfLog {
    private static final long WINDOW_MS = 3000L;
    private static long windowStartMs = -1, windowStartCpuMs = -1;
    private static long cameraFrames, renderFrames, results, dropped, rescues, rescuesFound;
    private static long recoverySkips, replayedFrames, replayedBatches, staleFrames, coalescedFrames;
    private static long narrowFrames, wideFrames, probeCount;
    private static double slotSum;
    private static double inferSum, inferMax, camWorkSum, camWorkMax, handoffSum, handoffMax;
    private static double captureSum, acquireSum, publishSum;
    private static long captureCount, acquireCount, publishCount;
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

    /** A crop rescue finished on its worker thread; [found] when it produced a hand. */
    public static synchronized void rescueDone(boolean found) { rescues++; if (found) rescuesFound++; }

    /** A YOLO recovery round was shed because the primary inference was already slow. */
    public static synchronized void recoverySkipped() { recoverySkips++; }

    /** Which landmarker is doing the primary inference, for A/B runs ("GPU" or "CPU"). */
    public static synchronized void delegate(String name) { delegate = name; }

    /**
     * Hand slots the primary graph just processed (1 = the cheap single-hand path, 2 = searching or
     * two hands really tracked), plus how many frames of each kind and how many second-hand rechecks
     * happened *in this window*. The landmarker counts since its graphs were built, so the caller
     * passes differences; summing them keeps the printed numbers per window like every other field.
     */
    public static synchronized void handSlots(int slots, long narrow, long wide, long probes) {
        slotSum += slots;
        narrowFrames += narrow; wideFrames += wide; probeCount += probes;
    }

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
     * [acquiredNs] when the frame was taken from the camera; [completedNs] when landmarks exist.
     */
    public static synchronized void result(long inferenceMs, long captureNs, long acquiredNs, long completedNs) {
        results++;
        inferSum += inferenceMs;
        inferMax = Math.max(inferMax, inferenceMs);
        acquireSum += (completedNs - acquiredNs) / 1e6;
        acquireCount++;
        if (captureNs > 0) {
            captureSum += (completedNs - captureNs) / 1e6;
            captureCount++;
        }
    }

    /** The landmark result was evaluated by the WebView on the main thread. */
    public static synchronized void published(long completedNs) {
        publishSum += (SystemClock.elapsedRealtimeNanos() - completedNs) / 1e6;
        publishCount++;
    }

    private static void emit(long now) {
        double seconds = (now - windowStartMs) / 1000.0;
        long cpu = Process.getElapsedCpuTime();
        double cpuPct = windowStartCpuMs < 0 ? -1 : 100.0 * (cpu - windowStartCpuMs) / Math.max(1L, now - windowStartMs);
        Runtime rt = Runtime.getRuntime();
        double javaMb = (rt.totalMemory() - rt.freeMemory()) / 1048576.0;
        double nativeMb = Debug.getNativeHeapAllocatedSize() / 1048576.0;
        Log.i("NextVR-Perf", String.format(java.util.Locale.US,
            "window=%.1fs camera=%.1f render=%.1f track=%.1f cam_work=%.1f cam_work_max=%.1f "
                + "handoff=%.1f handoff_max=%.1f infer_mean=%.1f infer_max=%.1f slots=%.2f narrow=%d wide=%d probe=%d "
                + "capture_to_landmark=%.1f acquire_to_landmark=%.1f publish=%.1f "
                + "replayed=%.2f stale=%d coalesced=%d dropped=%d rescues=%d rescue_found=%d recovery_skips=%d "
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
            results == 0 ? -1.0 : slotSum / results,
            narrowFrames, wideFrames, probeCount,
            captureCount == 0 ? -1.0 : captureSum / captureCount,
            acquireCount == 0 ? -1.0 : acquireSum / acquireCount,
            publishCount == 0 ? -1.0 : publishSum / publishCount,
            replayedBatches == 0 ? -1.0 : replayedFrames / (double) replayedBatches,
            staleFrames, coalescedFrames,
            dropped, rescues, rescuesFound, recoverySkips,
            cpuPct, nativeMb, javaMb, delegate));
        windowStartMs = now;
        windowStartCpuMs = cpu;
        cameraFrames = renderFrames = results = dropped = rescues = rescuesFound = 0;
        recoverySkips = replayedFrames = replayedBatches = staleFrames = coalescedFrames = 0;
        slotSum = 0; narrowFrames = wideFrames = probeCount = 0;
        inferSum = inferMax = camWorkSum = camWorkMax = handoffSum = handoffMax = 0;
        captureSum = acquireSum = publishSum = 0;
        captureCount = acquireCount = publishCount = 0;
    }
}

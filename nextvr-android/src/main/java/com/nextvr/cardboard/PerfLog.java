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
 * track            : EFFECTIVE hand-landmark rate (results completed per second)
 * infer_*          : MediaPipe primary inference time on the tracking thread
 * capture_to_landmark : sensor capture time to landmark result (only when the camera reports
 *                    REALTIME timestamps, so the clocks are comparable); acquire_to_landmark is
 *                    always available
 * publish          : tracking-thread completion until the WebView script ran on the main thread
 * dropped          : camera frames superseded before the tracker took them
 * cpu_pct          : process CPU time over wall time, all threads
 * native_mb / java_mb : memory, for long-session stability
 *
 * Steady-state cost: a few field updates per frame plus one summary line every 3 s.
 * tools/perf/summarize_logcat.py turns a captured log into the table used in the investigation.
 */
public final class PerfLog {
    private static final long WINDOW_MS = 3000L;
    private static long windowStartMs = -1, windowStartCpuMs = -1;
    private static long cameraFrames, renderFrames, results, dropped, rescues;
    private static double inferSum, inferMax;
    private static double captureSum, acquireSum, publishSum;
    private static long captureCount, acquireCount, publishCount;
    private static String delegate = "none";
    private PerfLog() {}

    /** Camera callback delivered a frame (before any tracking work). */
    public static synchronized void cameraFrame() { cameraFrames++; }

    /** The GL thread drew a frame. Also emits the summary when the window is complete. */
    public static synchronized void renderFrame() {
        renderFrames++;
        long now = SystemClock.elapsedRealtime();
        if (windowStartMs < 0) { windowStartMs = now; windowStartCpuMs = Process.getElapsedCpuTime(); return; }
        if (now - windowStartMs >= WINDOW_MS) emit(now);
    }

    /** A camera frame was superseded by a newer one before the tracker could take it. */
    public static synchronized void droppedFrame() { dropped++; }

    /** A crop rescue finished on its worker thread (one landmark run on a crop). */
    public static synchronized void rescueDone() { rescues++; }

    /** Which landmarker is doing the primary inference, for A/B runs ("GPU" or "CPU"). */
    public static synchronized void delegate(String name) { delegate = name; }

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
            "window=%.1fs camera=%.1f render=%.1f track=%.1f infer_mean=%.1f infer_max=%.1f "
                + "capture_to_landmark=%.1f acquire_to_landmark=%.1f publish=%.1f "
                + "dropped=%d rescues=%d cpu_pct=%.1f native_mb=%.1f java_mb=%.1f delegate=%s",
            seconds,
            cameraFrames / seconds,
            renderFrames / seconds,
            results / seconds,
            results == 0 ? -1.0 : inferSum / results,
            results == 0 ? -1.0 : inferMax,
            captureCount == 0 ? -1.0 : captureSum / captureCount,
            acquireCount == 0 ? -1.0 : acquireSum / acquireCount,
            publishCount == 0 ? -1.0 : publishSum / publishCount,
            dropped, rescues, cpuPct, nativeMb, javaMb, delegate));
        windowStartMs = now;
        windowStartCpuMs = cpu;
        cameraFrames = renderFrames = results = dropped = rescues = 0;
        inferSum = inferMax = 0;
        captureSum = acquireSum = publishSum = 0;
        captureCount = acquireCount = publishCount = 0;
    }
}

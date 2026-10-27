package com.nextvr.app;

import android.util.Log;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.time.Duration;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;
import org.robolectric.shadows.ShadowLog;
import org.robolectric.shadows.ShadowLog.LogItem;
import org.robolectric.shadows.ShadowSystemClock;
import static org.junit.Assert.*;

/**
 * PerfLog is driven from GLSurfaceView's render callback, so anything escaping it ends the session.
 * These tests close a real window instead of only poking the counters: a summary specifier that did
 * not match its argument threw IllegalFormatConversionException on the GL thread, so the app died
 * three seconds after every launch while every other test still passed.
 */
@RunWith(RobolectricTestRunner.class)
@Config(sdk = {28}, manifest = Config.NONE)
public class PerfLogTest {
    private static final String TAG = "NextVR-Perf";
    private static final Set<String> SENTINELS = new HashSet<>(Arrays.asList(
            "windowStartMs", "windowStartCpuMs", "emptySinceMs", "lastResultMs", "lastHands"));

    @Before public void freshCounters() throws Exception {
        ShadowLog.clear();
        for (Field f : PerfLog.class.getDeclaredFields()) {
            if (!Modifier.isStatic(f.getModifiers()) || Modifier.isFinal(f.getModifiers())) continue;
            f.setAccessible(true);
            Class<?> t = f.getType();
            if (t == String.class) { f.set(null, "none"); continue; }
            // The shell's status sink is a field like any other: a listener left behind by one test
            // must not be called by the next one.
            if (t == java.util.function.Consumer.class) { f.set(null, null); continue; }
            if (t == int.class) f.setInt(null, SENTINELS.contains(f.getName()) ? -1 : 0);
            else if (t == long.class) f.setLong(null, SENTINELS.contains(f.getName()) ? -1L : 0L);
            else if (t == double.class) f.setDouble(null, 0.0);
        }
    }

    @Test public void aFinishedWindowIsSummarizedOnTheRenderCallback() {
        // Two results 50 ms apart, so the window carries a real gap to report.
        PerfLog.result(31L, -1L, 0L, 40_000_000L, 1);
        ShadowSystemClock.advanceBy(Duration.ofMillis(50));
        PerfLog.result(29L, -1L, 0L, 80_000_000L, 1);
        PerfLog.cameraFrame();
        PerfLog.cameraWork(5.0);
        PerfLog.handDrain(1, 0, 0);
        PerfLog.renderFrame();                       // opens the window

        ShadowSystemClock.advanceBy(Duration.ofMillis(3100));
        PerfLog.cameraFrame();
        PerfLog.renderFrame();                       // closes it, on the render callback

        String line = summary();
        assertNotNull("a completed window must be summarized, not dropped", line);
        assertTrue(line, line.contains("gap_max=50"));
        assertTrue(line, line.contains("track_jitter=0.0"));
        // No hand frame was dropped or retried in this window; the summary must still carry both
        // counters (the detector-specific slot/rescue fields were removed with the PhoneXR pipeline).
        assertTrue(line, line.contains("dropped=0 skips=0 camera_retries=0 hand_retries=0"));
        assertTrue(line, line.contains("delegate=none"));
        assertTrue("whole-millisecond fields must stay integral: " + line,
                Pattern.compile("\\bgap_max=\\d+ ").matcher(line).find());
    }

    @Test public void aLostHandRunIsSummarizedAndTheWindowStillCloses() {
        PerfLog.result(30L, -1L, 0L, 0L, 1);
        ShadowSystemClock.advanceBy(Duration.ofMillis(20));
        PerfLog.result(30L, -1L, 0L, 0L, 0);
        PerfLog.renderFrame();

        ShadowSystemClock.advanceBy(Duration.ofMillis(3100));
        PerfLog.renderFrame();

        String line = summary();
        assertNotNull("a window containing a tracking loss must still be summarized", line);
        assertTrue(line, line.contains("loss=1"));
        assertTrue(line, Pattern.compile("\\bempty_ms=\\d+ ").matcher(line).find());
        // The next window must start from zero rather than repeat the loss.
        ShadowSystemClock.advanceBy(Duration.ofMillis(3100));
        PerfLog.renderFrame();
        String next = summary();
        assertNotNull(next);
        assertTrue(next, next.contains("loss=0"));
        assertNotEquals("a dropped line must not be retried on every frame", line, next);
    }

    @Test public void backToBackWindowsEachProduceOneLine() {
        PerfLog.renderFrame();
        for (int window = 0; window < 3; window++) {
            ShadowSystemClock.advanceBy(Duration.ofMillis(3100));
            PerfLog.renderFrame();
        }
        int lines = 0;
        for (LogItem item : ShadowLog.getLogsForTag(TAG)) if (item.type == Log.INFO) lines++;
        assertEquals("one summary per closed window", 3, lines);
    }

    @Test public void eachWindowPublishesAStatusForTheShellCounter() {
        java.util.concurrent.atomic.AtomicReference<String> status = new java.util.concurrent.atomic.AtomicReference<>();
        PerfLog.setStatusListener(status::set);
        try {
            PerfLog.result(40L, -1L, 0L, 0L, 1);
            PerfLog.lightTrackSize(320, 240);
            PerfLog.lightTrack(2L, 7680, 1);
            PerfLog.lightTrack(1L, 0, 0);
            PerfLog.renderFrame();
            ShadowSystemClock.advanceBy(Duration.ofMillis(3100));
            PerfLog.renderFrame();

            assertNotNull("a closed window must publish its status", status.get());
            assertTrue(status.get(), status.get().contains("\"track\":0.3"));
            assertTrue(status.get(), status.get().contains("\"infer\":40.0"));
            assertTrue("the light tracker's own cost and skin share must reach the screen: " + status.get(),
                    status.get().contains("\"light\":1.50") && status.get().contains("\"skin\":5.0")
                        && status.get().contains("\"size\":\"320x240\""));
            assertTrue(status.get(), status.get().contains("\"delegate\":\"none\""));
        } finally { PerfLog.setStatusListener(null); }
    }

    @Test public void aBrokenStatusListenerCannotDropTheWindow() {
        PerfLog.setStatusListener(s -> { throw new IllegalStateException("no shell"); });
        try {
            PerfLog.renderFrame();
            ShadowSystemClock.advanceBy(Duration.ofMillis(3100));
            PerfLog.renderFrame();

            assertNotNull("the summary line must still be logged", summary());
        } finally { PerfLog.setStatusListener(null); }
    }

    /** The last INFO line: the summary, never the WARN that reports a dropped one. */
    private static String summary() {
        String last = null;
        for (LogItem item : ShadowLog.getLogsForTag(TAG)) if (item.type == Log.INFO) last = item.msg;
        return last;
    }
}

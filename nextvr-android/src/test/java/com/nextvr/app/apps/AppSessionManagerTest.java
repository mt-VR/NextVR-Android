package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

/**
 * The window list: what happens when the user opens a fourth app, minimizes, restores, rotates and
 * closes — all without touching a display, which is why this is unit-tested and the display code is
 * not. What a window's screen is (this phone's, in the app's shape) is decided before the session
 * exists and never changes afterwards: the last test in this file is the one that pins that.
 */
public class AppSessionManagerTest {
    /** Host that records the calls the manager makes instead of creating displays. */
    private static final class FakeHost implements AppSessionManager.Host {
        final List<String> calls = new ArrayList<>();

        @Override public void start(AppSession session) { calls.add("start:" + session.packageName); }
        @Override public void setVisible(AppSession session, boolean visible) {
            calls.add("visible:" + session.packageName + ":" + visible);
        }
        @Override public void stop(AppSession session) { calls.add("stop:" + session.packageName); }
    }

    private final FakeHost host = new FakeHost();
    private final AppSessionManager manager = new AppSessionManager(host, 2);

    /** The canvas the tests host on: a phone screen, the size and density AppWindowShape produces. */
    private static final AppDisplaySpec CANVAS = AppDisplaySpec.forCanvas(1080, 2400, 420);

    private AppSession openRunning(String pkg) {
        AppSession session = manager.open(pkg, pkg, AppSession.Mode.VIRTUAL_DISPLAY,
                AppWindowShape.PORTRAIT, CANVAS);
        manager.settle(pkg, true, null);
        return session;
    }

    @Test public void aNewWindowStartsTheHostAndShowsUpAsRequested() {
        manager.setListener(() -> { });
        AppSession session = manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, AppWindowShape.PORTRAIT, CANVAS);
        assertEquals(AppSession.State.CREATING_DISPLAY, session.state);
        // The canvas, not a window size: the app is hosted on a phone screen.
        assertEquals(1080, session.width);
        assertEquals(2400, session.height);
        assertEquals(420, session.density);
        assertEquals(AppWindowShape.PORTRAIT, session.shape);
        assertEquals(1, manager.sessions().size());
        assertEquals(0, manager.runningCount());          // not running until the display is ready
        assertEquals(1, host.calls.size());
        assertTrue(host.calls.get(0).startsWith("start:"));
    }

    @Test public void markingTheDisplayReadyAndSettlingMovestheSessionForward() {
        AppSession session = manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, AppWindowShape.PORTRAIT, CANVAS);
        manager.markDisplayReady("com.a", 7, 1080, 2400, 420);
        assertEquals(AppSession.State.LAUNCHING, session.state);
        manager.markLaunching("com.a");            // idempotent while launching
        assertEquals(AppSession.State.LAUNCHING, session.state);
        manager.settle("com.a", true, null);
        assertEquals(AppSession.State.RUNNING, session.state);
        assertEquals(7, session.displayId);
        assertEquals(420, session.density);
        assertEquals(1, manager.runningCount());
    }

    @Test public void aFailureIsVisibleAndRetriedByReopening() {
        AppSession session = manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, AppWindowShape.PORTRAIT, CANVAS);
        manager.settle("com.a", false, "display_refused");
        assertEquals(AppSession.State.FAILED, session.state);
        assertEquals("display_refused", session.error);
        assertEquals(0, manager.runningCount());

        manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, AppWindowShape.PORTRAIT, CANVAS);
        assertEquals(AppSession.State.CREATING_DISPLAY, session.state);
        assertNull(session.error);
        assertEquals(2, host.calls.size());
    }

    @Test public void minimizingDetachesTheSurfaceAndRestoringBringsItBack() {
        AppSession session = openRunning("com.a");
        assertTrue(manager.minimize("com.a"));
        assertEquals(AppSession.State.SUSPENDED, session.state);
        assertEquals(1, manager.runningCount());
        assertTrue(host.calls.contains("visible:com.a:false"));

        // Minimizing twice is a no-op: nothing to detach anymore.
        assertFalse(manager.minimize("com.a"));

        assertTrue(manager.restore("com.a"));
        assertEquals(AppSession.State.RUNNING, session.state);
        assertTrue(host.calls.contains("visible:com.a:true"));
    }

    @Test public void openingAMinimizedAppRestoresItInsteadOfCreatingASecondWindow() {
        openRunning("com.a");
        manager.minimize("com.a");
        AppSession same = manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, AppWindowShape.PORTRAIT, CANVAS);
        assertEquals(AppSession.State.RUNNING, same.state);
        assertEquals(1, manager.sessions().size());
    }

    @Test public void theOldestWindowLeavesWhenTheCapacityIsFull() {
        AppSession first = openRunning("com.a");
        AppSession second = openRunning("com.b");
        first.focusAtMs = 1;
        second.focusAtMs = 2;

        openRunning("com.c");
        assertEquals(AppSession.State.STOPPED, first.state);
        assertTrue(host.calls.contains("stop:com.a"));
        assertEquals(2, manager.runningCount());
        assertEquals("capacity", first.stopReason);

        // Closing removes the display and marks the session, but the entry stays until forgotten.
        manager.forgetStopped();
        assertEquals(2, manager.sessions().size());
    }

    @Test public void closingTheFocusedWindowNeverTakesAnotherOneWithIt() {
        AppSession first = openRunning("com.a");
        openRunning("com.b");
        assertTrue(manager.close("com.a", "window_closed"));
        assertEquals(AppSession.State.STOPPED, first.state);
        assertEquals(-1, first.displayId);
        assertNotNull(manager.find("com.b"));
        assertEquals(1, manager.runningCount());
        assertFalse(manager.close("com.zzz", "window_closed"));
    }

    @Test public void aHostedCanvasIsNeverReshapedWhileTheAppRuns() {
        AppSession session = openRunning("com.a");
        manager.markDisplayReady("com.a", 5, 1080, 2400, 420);

        // The canvas is what the session was created with — this phone's screen in the shape the app
        // asked for — and nothing else in the session's life changes it: the manager exposes no resize,
        // the host has no resize to call, and there is no half-applied state left to get wrong. That is
        // the whole of the round-6 fix, from this side of the bridge.
        assertEquals(1080, session.width);
        assertEquals(2400, session.height);
        assertEquals(420, session.density);
        assertEquals(AppWindowShape.PORTRAIT, session.shape);

        // Everything the shell can do to a running session, and the canvas after each one: minimize and
        // restore only detach and re-attach the output surface — the app keeps running on the same
        // screen, and nothing in the session's own state changes shape.
        assertTrue(manager.minimize("com.a"));
        assertEquals(AppSession.State.SUSPENDED, session.state);
        assertTrue(manager.restore("com.a"));
        assertEquals(AppSession.State.RUNNING, session.state);
        assertEquals(3, host.calls.size(), "start, setVisible(false), setVisible(true): " + host.calls);
        assertEquals(1080, session.width);
        assertEquals(2400, session.height);
        assertEquals(420, session.density);

        // A session of the other shape is a different canvas, and it is decided at open, not later.
        AppSession landscape = manager.open("com.b", "B", AppSession.Mode.VIRTUAL_DISPLAY,
                AppWindowShape.LANDSCAPE, AppDisplaySpec.forCanvas(2400, 1080, 420));
        assertEquals(2400, landscape.width);
        assertEquals(1080, landscape.height);
        assertEquals(AppWindowShape.LANDSCAPE, landscape.shape);
        assertEquals(1080, session.width, "opening another window does not touch this one");
    }

    @Test public void aDeadAppBecomesAFailureWithAReason() {
        AppSession session = openRunning("com.a");
        manager.markDied("com.a");
        assertEquals(AppSession.State.FAILED, session.state);
        assertEquals("app_not_running", session.error);
    }

    @Test public void closingEverythingLeavesNoDisplayBehind() {
        openRunning("com.a");
        openRunning("com.b");
        manager.closeAll("activity_paused");
        assertEquals(0, manager.runningCount());
        assertTrue(host.calls.contains("stop:com.a"));
        assertTrue(host.calls.contains("stop:com.b"));
        assertEquals("activity_paused", manager.find("com.a").stopReason);
    }

    @Test public void anUnknownPackageIsNeverInvented() {
        assertNull(manager.find("com.none"));
        assertFalse(manager.minimize("com.none"));
        assertFalse(manager.restore("com.none"));
        assertFalse(manager.close("com.none", "x"));
        assertEquals(0, manager.runningCount());
    }
}

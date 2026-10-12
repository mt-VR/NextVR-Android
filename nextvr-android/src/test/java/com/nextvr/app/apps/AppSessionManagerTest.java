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
 * The window list: what happens when the user opens a fourth app, minimizes, restores, resizes and
 * closes — all without touching a display, which is why this is unit-tested and the display code is
 * not.
 */
public class AppSessionManagerTest {
    /** Host that records the calls the manager makes instead of creating displays. */
    private static final class FakeHost implements AppSessionManager.Host {
        final List<String> calls = new ArrayList<>();

        @Override public void start(AppSession session) { calls.add("start:" + session.packageName); }
        @Override public void resize(AppSession session) { calls.add("resize:" + session.packageName); }
        @Override public void setVisible(AppSession session, boolean visible) {
            calls.add("visible:" + session.packageName + ":" + visible);
        }
        @Override public void stop(AppSession session) { calls.add("stop:" + session.packageName); }
    }

    private final FakeHost host = new FakeHost();
    private final AppSessionManager manager = new AppSessionManager(host, 2);

    private AppSession openRunning(String pkg) {
        AppSession session = manager.open(pkg, pkg, AppSession.Mode.VIRTUAL_DISPLAY, 1040, 616, 240);
        manager.settle(pkg, true, null);
        return session;
    }

    @Test public void aNewWindowStartsTheHostAndShowsUpAsRequested() {
        manager.setListener(() -> { });
        AppSession session = manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, 1040, 616, 240);
        assertEquals(AppSession.State.CREATING_DISPLAY, session.state);
        assertEquals(1040, session.width);
        assertEquals(616, session.height);
        assertEquals(240, session.density);
        assertEquals(1, manager.sessions().size());
        assertEquals(0, manager.runningCount());          // not running until the display is ready
        assertEquals(1, host.calls.size());
        assertTrue(host.calls.get(0).startsWith("start:"));
    }

    @Test public void markingTheDisplayReadyAndSettlingMovestheSessionForward() {
        AppSession session = manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, 1040, 616, 240);
        manager.markDisplayReady("com.a", 7, 1040, 616, 320);
        assertEquals(AppSession.State.LAUNCHING, session.state);
        manager.markLaunching("com.a");            // idempotent while launching
        assertEquals(AppSession.State.LAUNCHING, session.state);
        manager.settle("com.a", true, null);
        assertEquals(AppSession.State.RUNNING, session.state);
        assertEquals(7, session.displayId);
        assertEquals(320, session.density);
        assertEquals(1, manager.runningCount());
    }

    @Test public void aFailureIsVisibleAndRetriedByReopening() {
        AppSession session = manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, 1040, 616, 240);
        manager.settle("com.a", false, "display_refused");
        assertEquals(AppSession.State.FAILED, session.state);
        assertEquals("display_refused", session.error);
        assertEquals(0, manager.runningCount());

        manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, 1040, 616, 240);
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
        AppSession same = manager.open("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY, 1040, 616, 240);
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

    @Test public void aResizeOnlyReachesTheDisplayWhenItMatters() {
        AppSession session = openRunning("com.a");
        // The display has to exist first: a window whose display is not up yet never resizes.
        manager.windowResized("com.a", 1046, 616, 240);
        assertEquals(0, countOf("resize:"));

        manager.markDisplayReady("com.a", 5, 1040, 616, 240);
        int before = host.calls.size();
        manager.windowResized("com.a", 1046, 616, 240);
        assertEquals("a small reshape must not interrupt the app", before, host.calls.size());

        manager.windowResized("com.a", 616, 1040, 240);
        assertTrue(host.calls.contains("resize:com.a"));
        // Until the display confirms the new shape the session still reports the one it really has:
        // the picture and the touch mapping are derived from it, and a size the display never took
        // would put every touch in the wrong place.
        assertEquals(1040, session.width);
        assertEquals(616, session.height);

        manager.resizeApplied("com.a");
        assertTrue(session.height > session.width);
        assertEquals(1040, session.height);
    }

    @Test public void aRefusedResizeKeepsTheSizeTheDisplayReallyHas() {
        AppSession session = openRunning("com.a");
        manager.markDisplayReady("com.a", 5, 1040, 616, 240);
        manager.windowResized("com.a", 616, 1040, 240);
        manager.resizeFailed("com.a");

        assertEquals("the window must not claim a size the display refused", 1040, session.width);
        assertEquals(616, session.height);
        assertTrue(session.resizeRefused);
        assertNull("a window that kept its size still works: this is not a failure", session.error);
        assertEquals(AppSession.State.RUNNING, session.state);

        // It is not asked again: from here the picture scales inside the window.
        int before = host.calls.size();
        manager.windowResized("com.a", 500, 1200, 240);
        assertEquals(before, host.calls.size());
    }

    private int countOf(String prefix) {
        int count = 0;
        for (String call : host.calls) if (call.startsWith(prefix)) count++;
        return count;
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

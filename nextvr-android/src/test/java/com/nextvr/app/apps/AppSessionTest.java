package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.junit.Test;

/** One app window's own state machine, including the transitions that must be rejected. */
public class AppSessionTest {
    private static AppSession session() {
        return new AppSession("com.a", "A", AppSession.Mode.VIRTUAL_DISPLAY);
    }

    @Test public void theHappyPathIsRequestedDisplayLaunchRun() {
        assertTrue(AppSession.canTransition(AppSession.State.REQUESTED, AppSession.State.CREATING_DISPLAY));
        assertTrue(AppSession.canTransition(AppSession.State.CREATING_DISPLAY, AppSession.State.LAUNCHING));
        assertTrue(AppSession.canTransition(AppSession.State.LAUNCHING, AppSession.State.RUNNING));
        assertTrue(AppSession.canTransition(AppSession.State.RUNNING, AppSession.State.SUSPENDED));
        assertTrue(AppSession.canTransition(AppSession.State.SUSPENDED, AppSession.State.RUNNING));
        assertTrue(AppSession.canTransition(AppSession.State.FAILED, AppSession.State.CREATING_DISPLAY));
    }

    @Test public void aWindowNeverJumpsBackwardsOrBecomesRunningOnItsOwn() {
        assertFalse(AppSession.canTransition(AppSession.State.RUNNING, AppSession.State.LAUNCHING));
        assertFalse(AppSession.canTransition(AppSession.State.LAUNCHING, AppSession.State.SUSPENDED));
        assertFalse(AppSession.canTransition(AppSession.State.STOPPED, AppSession.State.RUNNING));
        assertFalse(AppSession.canTransition(AppSession.State.REQUESTED, AppSession.State.RUNNING));
    }

    @Test public void anIllegalTransitionThrowsInsteadOfSilentlyLeavingAStaleWindow() {
        AppSession session = session();
        session.moveTo(AppSession.State.CREATING_DISPLAY);
        session.moveTo(AppSession.State.LAUNCHING);
        session.moveTo(AppSession.State.RUNNING);
        try {
            session.moveTo(AppSession.State.LAUNCHING);
            fail("RUNNING -> LAUNCHING must be rejected");
        } catch (IllegalStateException expected) {
            assertTrue(expected.getMessage().contains("com.a"));
        }
        session.moveTo(AppSession.State.RUNNING);      // same state: a no-op, not an error
        assertEquals(AppSession.State.RUNNING, session.state);
    }

    @Test public void aliveAndRenderingAnswerDifferentQuestions() {
        AppSession session = session();
        assertFalse(session.alive());
        assertFalse(session.rendering());
        session.moveTo(AppSession.State.CREATING_DISPLAY);
        session.moveTo(AppSession.State.LAUNCHING);
        session.moveTo(AppSession.State.RUNNING);
        assertTrue(session.alive());
        assertTrue(session.rendering());
        session.moveTo(AppSession.State.SUSPENDED);
        assertTrue(session.alive());                   // the app is still there, just not on screen
        assertFalse(session.rendering());
        session.moveTo(AppSession.State.STOPPED);
        assertFalse(session.alive());
    }

    @Test public void focusOrderIsWhatTheEvictionAndTheDockUse() {
        AppSession session = session();
        long before = session.focusAtMs;
        session.touchFocus();
        assertTrue(session.focusAtMs >= before);
    }

    @Test public void theVisibleAspectFollowsTheDisplayRotation() {
        AppSession session = session();
        session.width = 1920;
        session.height = 1080;
        assertEquals(1920f / 1080f, session.visibleAspect(), 1e-4f);
        session.rotation = 90;
        assertEquals(1080f / 1920f, session.visibleAspect(), 1e-4f);
    }

    @Test public void noDisplayMeansNoDisplayIdToRelease() {
        AppSession session = session();
        assertFalse(session.hasDisplay());
        session.displayId = 3;
        assertTrue(session.hasDisplay());
    }
}

package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * The routing rule, pinned. The bug these tests describe cost a user their trust: a tap on an
 * installed app opened the app on the phone and asked for a screen capture, on a device where
 * Shizuku was authorized and working, because the routing question was asked as "is the shell user
 * service bound at this instant?" instead of "is NextVR allowed to use it?".
 */
public class AppHostPolicyTest {

    @Test public void anAuthorizedShizukuHostsEvenBeforeTheServiceAnswers() {
        // The service process has to be forked and the APK loaded into it; during that window the
        // honest answer is "hosting, wait a moment", never "capture the phone's screen".
        assertEquals(AppHostPolicy.Route.HOSTED, AppHostPolicy.route(ShizukuStatus.State.SERVICE_DOWN));
        assertEquals(AppHostPolicy.Route.HOSTED, AppHostPolicy.route(ShizukuStatus.State.READY));
        assertTrue(AppHostPolicy.hosted(ShizukuStatus.State.SERVICE_DOWN));
        assertTrue(AppHostPolicy.hosted(ShizukuStatus.State.READY));
    }

    @Test public void authorizedButNotBoundStillWaitsInsteadOfFallingBack() {
        // SERVICE_DOWN is exactly "permission granted, service not answering (yet)".
        assertTrue(AppHostPolicy.waitsForService(ShizukuStatus.State.SERVICE_DOWN));
        assertFalse(AppHostPolicy.route(ShizukuStatus.State.SERVICE_DOWN) == AppHostPolicy.Route.CAPTURE);
    }

    @Test public void thePermissionDialogIsTheOnlyThingAskedBeforeHosting() {
        assertEquals(AppHostPolicy.Route.NEEDS_PERMISSION,
                AppHostPolicy.route(ShizukuStatus.State.NEEDS_PERMISSION));
        assertTrue("the user is asked for Shizuku, and the hosted session waits for the service",
                AppHostPolicy.hosted(ShizukuStatus.State.NEEDS_PERMISSION));
    }

    @Test public void aShizukuThatCannotHostAtAllIsTheOnlyCaseThatCaptures() {
        assertEquals(AppHostPolicy.Route.CAPTURE, AppHostPolicy.route(ShizukuStatus.State.NOT_INSTALLED));
        assertEquals(AppHostPolicy.Route.CAPTURE, AppHostPolicy.route(ShizukuStatus.State.NOT_RUNNING));
        assertEquals(AppHostPolicy.Route.CAPTURE, AppHostPolicy.route(ShizukuStatus.State.OLD_VERSION));
        assertEquals(AppHostPolicy.Route.CAPTURE, AppHostPolicy.route(ShizukuStatus.State.DENIED));
        assertEquals(AppHostPolicy.Route.CAPTURE, AppHostPolicy.route(ShizukuStatus.State.UNKNOWN));
        assertFalse(AppHostPolicy.hosted(ShizukuStatus.State.NOT_RUNNING));
    }

    @Test public void anUnknownStateIsCaptureAndNeverACrash() {
        assertEquals(AppHostPolicy.Route.CAPTURE, AppHostPolicy.route(null));
        assertFalse(AppHostPolicy.hosted(null));
    }

    @Test public void everyRouteHasAStableIdForTheShellToRender() {
        assertEquals("hosted", AppHostPolicy.Route.HOSTED.id);
        assertEquals("permission", AppHostPolicy.Route.NEEDS_PERMISSION.id);
        assertEquals("capture", AppHostPolicy.Route.CAPTURE.id);
        for (ShizukuStatus.State state : ShizukuStatus.State.values()) {
            AppHostPolicy.Route route = AppHostPolicy.route(state);
            assertTrue("no route for " + state, route == AppHostPolicy.Route.HOSTED
                    || route == AppHostPolicy.Route.NEEDS_PERMISSION
                    || route == AppHostPolicy.Route.CAPTURE);
        }
    }
}

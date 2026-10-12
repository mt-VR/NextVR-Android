package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * The state the dock shows and the setup steps it offers. The {@code id} strings asserted here are
 * the tokens {@code web/src/android-apps.js} maps to localized text, so this test is also the
 * contract test between the two sides.
 */
public class ShizukuStatusTest {
    @Test public void everyPlatformCombinationMapsToExactlyOneState() {
        assertEquals(ShizukuStatus.State.NOT_INSTALLED,
                ShizukuStatus.resolve(false, false, false, -2, false));
        assertEquals(ShizukuStatus.State.NOT_RUNNING,
                ShizukuStatus.resolve(true, false, false, -2, false));
        assertEquals(ShizukuStatus.State.UNKNOWN,
                ShizukuStatus.resolve(false, true, false, -2, false));
        assertEquals(ShizukuStatus.State.OLD_VERSION,
                ShizukuStatus.resolve(true, true, true, 0, false));
        assertEquals(ShizukuStatus.State.NEEDS_PERMISSION,
                ShizukuStatus.resolve(true, true, false, -1, false));
        assertEquals(ShizukuStatus.State.NEEDS_PERMISSION,
                ShizukuStatus.resolve(true, true, false, -2, false));
        assertEquals(ShizukuStatus.State.DENIED,
                ShizukuStatus.resolve(true, true, false, -2, true));
        assertEquals(ShizukuStatus.State.READY,
                ShizukuStatus.resolve(true, true, false, ShizukuStatus.PERMISSION_GRANTED, false));
    }

    @Test public void readyIsTheOnlyStateThatCanOpenAWindow() {
        assertTrue(new ShizukuStatus(ShizukuStatus.State.READY, "").ready());
        for (ShizukuStatus.State state : ShizukuStatus.State.values()) {
            if (state == ShizukuStatus.State.READY) continue;
            assertFalse(state.id, new ShizukuStatus(state, "").ready());
        }
    }

    @Test public void onlyThePermissionStateOffersTheShizukuDialog() {
        assertTrue(new ShizukuStatus(ShizukuStatus.State.NEEDS_PERMISSION, "").permissionRequestable());
        assertFalse(new ShizukuStatus(ShizukuStatus.State.DENIED, "").permissionRequestable());
        assertFalse(new ShizukuStatus(ShizukuStatus.State.NOT_RUNNING, "").permissionRequestable());
    }

    @Test public void theStatesThatNeedShizukuItselfPointTheUserAtIt() {
        assertTrue(new ShizukuStatus(ShizukuStatus.State.NOT_INSTALLED, "").needsShizukuApp());
        assertTrue(new ShizukuStatus(ShizukuStatus.State.NOT_RUNNING, "").needsShizukuApp());
        assertTrue(new ShizukuStatus(ShizukuStatus.State.OLD_VERSION, "").needsShizukuApp());
        assertTrue(new ShizukuStatus(ShizukuStatus.State.DENIED, "").needsShizukuApp());
        assertFalse(new ShizukuStatus(ShizukuStatus.State.NEEDS_PERMISSION, "").needsShizukuApp());
        assertFalse(new ShizukuStatus(ShizukuStatus.State.READY, "").needsShizukuApp());
    }

    @Test public void theTokensTheWebLayerLocalizesAreStable() {
        assertEquals("install", ShizukuStatus.State.NOT_INSTALLED.id);
        assertEquals("start", ShizukuStatus.State.NOT_RUNNING.id);
        assertEquals("update", ShizukuStatus.State.OLD_VERSION.id);
        assertEquals("ask", ShizukuStatus.State.NEEDS_PERMISSION.id);
        assertEquals("denied", ShizukuStatus.State.DENIED.id);
        assertEquals("rebind", ShizukuStatus.State.SERVICE_DOWN.id);
        assertEquals("ready", ShizukuStatus.State.READY.id);
        assertEquals("unknown", ShizukuStatus.State.UNKNOWN.id);
    }

    @Test public void anUnknownStateNeverLooksReady() {
        ShizukuStatus status = new ShizukuStatus(null, null);
        assertEquals(ShizukuStatus.State.UNKNOWN, status.state);
        assertEquals("", status.detail);
        assertFalse(status.ready());
        assertEquals("unknown", status.toString());
        assertEquals("ready (uid=2000 v13)", new ShizukuStatus(ShizukuStatus.State.READY, "uid=2000 v13").toString());
    }
}

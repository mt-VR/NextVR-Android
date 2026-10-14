package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * The canvas an app is hosted on: the phone's own screen pixels and the density that turns them into
 * the dp box the app lays out in.
 *
 * <p>The bug these tests exist for: the canvas used to be derived from the <em>window</em> (585x1040 or
 * 1040x585, density clamped to 320), which is a 292x520 dp screen — 350 dp shorter than the phone the
 * app was designed for, and the reason most apps opened with their bottom cut off.
 */
public class AppDisplaySpecTest {
    @Test public void theCanvasIsThePhonesScreenInBothPixelsAndDp() {
        // This phone: 1080x2400 at 420 dpi is 411x914 dp for the app.
        AppDisplaySpec spec = AppDisplaySpec.forCanvas(1080, 2400, 420);
        assertEquals(1080, spec.width);
        assertEquals(2400, spec.height);
        assertEquals(420, spec.density);
        assertEquals(411, spec.widthDp());
        assertEquals(914, spec.heightDp());
        assertEquals(1080f / 2400f, spec.aspect(), 1e-6f);
    }

    @Test public void theSizeIsTakenAsGivenExceptForNonsense() {
        assertEquals(2, AppDisplaySpec.forCanvas(0, -100, 420).width);
        assertEquals(2, AppDisplaySpec.forCanvas(0, -100, 420).height);
        // A canvas of an odd size is rounded up: buffer strides and video paths prefer even numbers.
        assertEquals(0, AppDisplaySpec.forCanvas(585, 1041, 420).width % 2);
        assertEquals(0, AppDisplaySpec.forCanvas(585, 1041, 420).height % 2);
        // Nothing is clamped to a "window shape": the canvas is the app's screen, whatever it is.
        assertEquals(2400, AppDisplaySpec.forCanvas(2400, 1080, 420).width);
    }

    @Test public void densityIsTheDevicesOwnWithinBelievableBounds() {
        assertEquals(420, AppDisplaySpec.forCanvas(1080, 2400, 420).density);
        assertEquals(AppDisplaySpec.MIN_DENSITY, AppDisplaySpec.forCanvas(1080, 2400, 10).density);
        assertEquals(AppDisplaySpec.MAX_DENSITY, AppDisplaySpec.forCanvas(1080, 2400, 2000).density);
        // An unknown density must not make the app lay out for a tablet (or a watch).
        assertEquals(AppDisplaySpec.DEFAULT_DENSITY, AppDisplaySpec.forCanvas(1080, 2400, 0).density);
    }

    @Test public void aCanvasIsComparedByWhatTheAppWouldSee() {
        AppDisplaySpec phone = AppDisplaySpec.forCanvas(1080, 2400, 420);
        assertTrue(phone.sameCanvas(AppDisplaySpec.forCanvas(1080, 2400, 420)));
        assertFalse(phone.sameCanvas(AppDisplaySpec.forCanvas(1080, 1920, 420)));
        assertFalse(phone.sameCanvas(AppDisplaySpec.forCanvas(1080, 2400, 320)));
        assertFalse(phone.sameCanvas(null));
    }

    @Test public void theDiagnosticLineSaysWhatTheAppSees() {
        assertEquals("1080x2400@420 411x914dp", AppDisplaySpec.forCanvas(1080, 2400, 420).toString());
    }

    @Test public void aPhoneCanvasIsBiggerThanAnyWindowTheShellCanComposite() {
        // The window element has to fit the shell's 4096x4096 atlas (1040x660 per window), and the
        // canvas must not: if the two were the same number, the app would be laid out for a screen far
        // smaller than the phone — which is precisely what used to happen.
        AppDisplaySpec canvas = AppDisplaySpec.forCanvas(1080, 1920, 420);
        assertTrue("the canvas is a phone screen, not a window", canvas.width > 1040);
        assertTrue(canvas.height > 660);
        assertTrue(canvas.heightDp() >= 640);
    }
}

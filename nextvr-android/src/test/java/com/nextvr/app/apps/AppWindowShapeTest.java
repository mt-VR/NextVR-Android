package com.nextvr.app.apps;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * The shape of an app's window and the canvas that goes with it.
 *
 * <p>This is where the "bottom cut" bug lived, so the numbers below are the contract: an app must be
 * hosted on a canvas at least as big as a phone screen, in the orientation it asked for, and the window
 * must take that canvas' shape.
 */
public class AppWindowShapeTest {
    /** This phone: 1080x2400 at 420 dpi, i.e. 411x914 dp — the box the app is laid out in. */
    private static final int SCREEN_W = 1080, SCREEN_H = 2400;

    @Test public void aPortraitAppGetsAPortraitCanvasAtThePhonesOwnSize() {
        int[] portrait = AppWindowShape.canvas(AppWindowShape.PORTRAIT, SCREEN_W, SCREEN_H);
        assertArrayEquals(new int[]{1080, 2400}, portrait);
        AppDisplaySpec spec = AppDisplaySpec.forCanvas(portrait[0], portrait[1], 420);
        // The dp box is the phone's own: an app that pins something to the bottom of the screen has
        // the room it has on the phone.
        assertEquals(411, spec.widthDp());
        assertEquals(914, spec.heightDp());
    }

    @Test public void aLandscapeAppGetsTheSameScreenTurned() {
        int[] landscape = AppWindowShape.canvas(AppWindowShape.LANDSCAPE, SCREEN_W, SCREEN_H);
        assertArrayEquals(new int[]{2400, 1080}, landscape);
        AppDisplaySpec spec = AppDisplaySpec.forCanvas(landscape[0], landscape[1], 420);
        assertEquals(914, spec.widthDp());
        assertEquals(411, spec.heightDp());
    }

    @Test public void aScreenSmallerThan1080pIsRaisedToIt() {
        // PhoneXR's numbers are the floor: a 720x1280 phone hosts an app in a 1080x1920 canvas instead
        // of a 720p one, and the app is laid out for a phone screen either way.
        assertArrayEquals(new int[]{1080, 1920}, AppWindowShape.canvas(AppWindowShape.PORTRAIT, 720, 1280));
        assertArrayEquals(new int[]{1920, 1080}, AppWindowShape.canvas(AppWindowShape.LANDSCAPE, 720, 1280));
        // A screen reported in landscape (the phone is held sideways when the app opens) is the same
        // screen: the short side still goes across in portrait.
        assertArrayEquals(new int[]{1080, 2400}, AppWindowShape.canvas(AppWindowShape.PORTRAIT, 2400, 1080));
    }

    @Test public void theCanvasIsEvenAndNeverDegenerate() {
        int[] odd = AppWindowShape.canvas(AppWindowShape.PORTRAIT, 1443, 3121);
        assertEquals(0, odd[0] % 2);
        assertEquals(0, odd[1] % 2);
        assertTrue(odd[1] > odd[0]);
        int[] nothing = AppWindowShape.canvas(AppWindowShape.LANDSCAPE, 0, 0);
        assertArrayEquals(new int[]{1920, 1080}, nothing);
    }

    @Test public void anUndeclaredAppGetsWhatThePhoneWouldGiveIt() {
        // Nothing declared is the common case, and on a phone it means portrait.
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.of("", ""));
        // Declared wins over the default...
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.of("", "landscape"));
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.of("", "portrait"));
        // ...the game category is the one thing that turns "declares nothing" into landscape...
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.of("", "", true));
        // ...and what the user chose beats everything, which is the point of remembering it.
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.of("landscape", "portrait", false));
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.of("portrait", "landscape", true));
        // An unknown shape string is not a choice: it is ignored, not obeyed.
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.of("sideways", "portrait", true));
    }

    @Test public void rotatingIsASwapOfTheSameScreen() {
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.other(AppWindowShape.PORTRAIT));
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.other(AppWindowShape.LANDSCAPE));
        // A shape that is not a shape is treated as "not portrait", which is the same rule the shell
        // uses (android-apps.js: current === 'portrait' ? 'landscape' : 'portrait').
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.other("nonsense"));
        assertTrue(AppWindowShape.isShape(AppWindowShape.PORTRAIT));
        assertFalse(AppWindowShape.isShape(""));
        // The canvas of the two shapes is the same screen: the same number of pixels, turned.
        int[] portrait = AppWindowShape.canvas(AppWindowShape.PORTRAIT, SCREEN_W, SCREEN_H);
        int[] landscape = AppWindowShape.canvas(AppWindowShape.LANDSCAPE, SCREEN_W, SCREEN_H);
        assertEquals(portrait[0], landscape[1]);
        assertEquals(portrait[1], landscape[0]);
        assertEquals(AppWindowShape.aspect(AppWindowShape.LANDSCAPE, SCREEN_W, SCREEN_H),
                1f / AppWindowShape.aspect(AppWindowShape.PORTRAIT, SCREEN_W, SCREEN_H), 1e-6f);
    }

    @Test public void theDeclaredOrientationIsReadFromTheActivity() {
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.fromOrientation(1));   // portrait
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.fromOrientation(9));   // reversePortrait
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.fromOrientation(7));   // sensorPortrait
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.fromOrientation(12));  // userPortrait
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.fromOrientation(0));  // landscape
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.fromOrientation(8));  // reverseLandscape
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.fromOrientation(6));  // sensorLandscape
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.fromOrientation(11)); // userLandscape
        // unspecified, sensor, fullSensor, user, nosensor, locked: the app adapts, so it gets the
        // shape the phone would give it rather than a guess.
        assertEquals("", AppWindowShape.fromOrientation(-1));
        assertEquals("", AppWindowShape.fromOrientation(4));
        assertEquals("", AppWindowShape.fromOrientation(10));
    }

    @Test public void aCanvasAtThePhonesSizeIsNeverLetterboxedInItsOwnWindow() {
        // The window body is the canvas' shape (the shell scales it down to what it can composite), so
        // the fit inside a body of that aspect is the whole body: no bars, no crop, nothing cut. This
        // is the arithmetic behind both reported symptoms.
        for (String shape : new String[]{AppWindowShape.PORTRAIT, AppWindowShape.LANDSCAPE}) {
            int[] canvas = AppWindowShape.canvas(shape, SCREEN_W, SCREEN_H);
            AppDisplaySpec spec = AppDisplaySpec.forCanvas(canvas[0], canvas[1], 420);
            float aspect = spec.aspect();
            float[] fit = AppInputGeometry.fit(aspect, 1000f, 1000f / aspect);
            // The fit rounds to whole pixels, so half a pixel of tolerance is exactly "landed on 0 (or
            // on the full width)": anything else would be a bar on screen.
            assertTrue(shape + " must fill its window", Math.abs(fit[0]) <= 0.5f);
            assertTrue(shape + " must fill its window", Math.abs(fit[1]) <= 0.5f);
            assertTrue(shape + " must fill its window", Math.abs(fit[2] - 1000f) <= 0.5f);
            assertTrue(shape + " must fill its window", Math.abs(fit[3] - 1000f / aspect) <= 0.5f);
        }
    }
}

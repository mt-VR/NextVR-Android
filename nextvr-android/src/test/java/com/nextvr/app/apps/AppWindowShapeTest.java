package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * The shape of an app's window, and the two things it must never do: put a portrait app in a wide
 * window (Android letterboxes it in the middle, which is the "app adjusted to the left half" the user
 * reported) or lose what the user chose for an app between two opens.
 */
public class AppWindowShapeTest {
    @Test public void aPortraitAppGetsAPortraitWindowAndALandscapeAppALandscapeOne() {
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.of("", "portrait"));
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.of("", "landscape"));

        int[] portrait = AppWindowShape.box(AppWindowShape.PORTRAIT);
        assertEquals(585, portrait[0]);
        assertEquals(1040, portrait[1]);
        assertTrue("portrait is taller than it is wide", portrait[1] > portrait[0]);

        int[] landscape = AppWindowShape.box(AppWindowShape.LANDSCAPE);
        assertEquals(1040, landscape[0]);
        assertEquals(585, landscape[1]);
        assertEquals("landscape is exactly 16:9", 16f / 9f, (float) landscape[0] / landscape[1], 1e-4f);
        assertEquals("portrait is exactly 9:16", 9f / 16f, (float) portrait[0] / portrait[1], 1e-4f);
    }

    @Test public void bothShapesAreTheSameNumbersSwappedSoARotationIsASwap() {
        int[] portrait = AppWindowShape.box(AppWindowShape.PORTRAIT);
        int[] landscape = AppWindowShape.box(AppWindowShape.LANDSCAPE);
        assertEquals(portrait[0], landscape[1]);
        assertEquals(portrait[1], landscape[0]);
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.other(AppWindowShape.PORTRAIT));
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.other(AppWindowShape.LANDSCAPE));
    }

    @Test public void whatTheUserChoseBeatsWhatTheAppDeclares() {
        // An app that adapts to any shape: the user's rotation is the only preference there is.
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.of("portrait", ""));
        // And when the user rotated an app that declares an orientation, the choice still wins: the
        // platform letterboxes the app inside the new shape, which is a readable outcome the user
        // asked for, instead of us ignoring the tap.
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.of("landscape", "portrait"));
    }

    @Test public void anythingUnknownStartsLandscape() {
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.of("", ""));
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.of(null, null));
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.of("sideways", "diagonal"));
        assertFalse(AppWindowShape.isShape(""));
        assertFalse(AppWindowShape.isShape(null));
        assertTrue(AppWindowShape.isShape(AppWindowShape.PORTRAIT));
    }

    @Test public void theDeclaredOrientationGroupsAreReadFromAndroidConstants() {
        // ActivityInfo.SCREEN_ORIENTATION_* (repeated in AppWindowShape so it stays Android-free).
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.fromOrientation(1));    // portrait
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.fromOrientation(9));    // reversePortrait
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.fromOrientation(7));    // sensorPortrait
        assertEquals(AppWindowShape.PORTRAIT, AppWindowShape.fromOrientation(12));   // userPortrait
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.fromOrientation(0));   // landscape
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.fromOrientation(8));   // reverseLandscape
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.fromOrientation(6));   // sensorLandscape
        assertEquals(AppWindowShape.LANDSCAPE, AppWindowShape.fromOrientation(11));  // userLandscape
        // Apps that adapt to whatever shape they are given: no shape is imposed on them.
        assertEquals("", AppWindowShape.fromOrientation(4));    // sensor
        assertEquals("", AppWindowShape.fromOrientation(10));   // fullSensor
        assertEquals("", AppWindowShape.fromOrientation(-1));   // unspecified
        assertEquals("", AppWindowShape.fromOrientation(2));    // user
        assertEquals("", AppWindowShape.fromOrientation(5));    // nosensor
    }

    @Test public void thePortraitShapeFitsInsideTheDisplayLimits() {
        int[] box = AppWindowShape.box(AppWindowShape.PORTRAIT);
        AppDisplaySpec spec = AppDisplaySpec.forBox(box[0], box[1], 240);
        // The display really is the portrait window's shape: no clamping, no letterbox of the app
        // inside its own display.
        assertEquals((float) box[0] / box[1], spec.aspect(), 0.01f);
        assertTrue(spec.height <= AppDisplaySpec.MAX_HEIGHT);
        assertTrue(spec.height >= AppDisplaySpec.MIN_HEIGHT);
    }
}

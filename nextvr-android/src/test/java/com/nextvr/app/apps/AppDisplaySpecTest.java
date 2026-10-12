package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * The display a window body asks for: same shape as the window, sized in phone pixels, and only
 * reshaped when the change is big enough to be worth interrupting the app with a configuration
 * change.
 */
public class AppDisplaySpecTest {
    @Test public void displayTakesTheWindowShapeInPhonePixels() {
        AppDisplaySpec spec = AppDisplaySpec.forBox(1040, 616, 240);
        assertEquals(1040, spec.width);
        assertEquals(616, spec.height);
        assertEquals(240, spec.density);
        assertEquals(1040f / 616f, spec.aspect(), 1e-4f);
    }

    @Test public void heightIsClampedToWhatAPhoneAppCanRender() {
        assertEquals(AppDisplaySpec.MAX_HEIGHT, AppDisplaySpec.forBox(200, 2000, 240).height);
        assertEquals(AppDisplaySpec.MIN_HEIGHT, AppDisplaySpec.forBox(-5, 100, 240).height);
    }

    @Test public void anUnmeasurableWindowFallsBackToSixteenByNine() {
        AppDisplaySpec spec = AppDisplaySpec.forBox(0, 0, 0);
        assertEquals(1280, spec.width);
        assertEquals(720, spec.height);
        assertEquals(240, spec.density);
        assertEquals(16f / 9f, AppDisplaySpec.aspect(0, 0), 1e-4f);
    }

    @Test public void aspectIsClampedSoATallWindowCannotAskForAnImpossibleDisplay() {
        assertEquals(AppDisplaySpec.MIN_ASPECT, AppDisplaySpec.aspect(200, 2000), 1e-4f);
        assertEquals(AppDisplaySpec.MAX_ASPECT, AppDisplaySpec.aspect(4000, 600), 1e-4f);
    }

    @Test public void widthIsAlwaysEven() {
        AppDisplaySpec spec = AppDisplaySpec.forBox(1041, 616, 240);
        assertEquals(0, spec.width % 2);
        AppDisplaySpec narrow = AppDisplaySpec.forBox(-5, 100, 50);
        assertEquals(0, narrow.width % 2);
        // The density a device reports is clamped into the range a phone app expects.
        assertEquals(160, narrow.density);
        assertEquals(320, AppDisplaySpec.forBox(1040, 616, 900).density);
    }

    @Test public void aSmallReshapeDoesNotRestartTheApp() {
        AppDisplaySpec current = AppDisplaySpec.forBox(1040, 616, 240);
        assertFalse(current.needsResize(AppDisplaySpec.forBox(1046, 616, 240)));
        assertFalse(current.needsResize(null));
        assertTrue(current.needsResize(AppDisplaySpec.forBox(1040, 900, 240)));
        assertTrue(current.needsResize(AppDisplaySpec.forBox(616, 1040, 240)));
    }

    @Test public void resizedKeepsTheDensityTheAppAlreadyHad() {
        AppDisplaySpec current = AppDisplaySpec.forBox(1040, 616, 320);
        assertEquals(320, current.density);
        AppDisplaySpec next = current.resized(800, 600);
        assertEquals(320, next.density);
        assertEquals(800, next.width);
        assertEquals(600, next.height);
        assertEquals(800f / 600f, next.aspect(), 1e-4f);
        assertNotSame(current, next);
    }
}

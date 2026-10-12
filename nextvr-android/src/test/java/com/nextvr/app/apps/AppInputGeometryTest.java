package com.nextvr.app.apps;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * The geometry the shader and the touch path share. The same numbers are asserted by the JS test
 * {@code tests/app-window-fit.test.mjs}: if one side changes its rounding, one of the two suites
 * fails, which is the point of keeping both.
 */
public class AppInputGeometryTest {
    @Test public void aNormalizedPointIsClampedInsteadOfTrusted() {
        assertEquals(.5f, AppInputGeometry.clampUnit(Float.NaN), 0f);
        assertEquals(0f, AppInputGeometry.clampUnit(-2f), 0f);
        assertEquals(1f, AppInputGeometry.clampUnit(7f), 0f);
        assertEquals(.25f, AppInputGeometry.clampUnit(.25f), 0f);
    }

    @Test public void displayPixelsNeverLeaveTheDisplay() {
        assertEquals(0f, AppInputGeometry.toDisplayX(0f, 1000), 0f);
        assertEquals(500f, AppInputGeometry.toDisplayX(.5f, 1000), 0f);
        assertEquals(999f, AppInputGeometry.toDisplayX(1f, 1000), 0f);
        assertEquals(499f, AppInputGeometry.toDisplayY(1f, 500), 0f);
        assertEquals(0f, AppInputGeometry.toDisplayX(.5f, 0), 0f);
    }

    @Test public void aDisplayWithTheWindowShapeFillsTheWindow() {
        assertArrayEquals(new float[]{0, 0, 1040, 616}, AppInputGeometry.fit(0, 1040, 616), 0f);
    }

    @Test public void aWiderDisplayLetterboxesHorizontally() {
        // 16:9 inside a 1040x616 window: full width, 585 tall, centred (15.5 rounds to 16).
        assertArrayEquals(new float[]{0, 16, 1040, 585}, AppInputGeometry.fit(16f / 9f, 1040, 616), 0f);
    }

    @Test public void aTallerDisplayPillarboxesVertically() {
        assertArrayEquals(new float[]{335, 0, 370, 616}, AppInputGeometry.fit(.6f, 1040, 616), 0f);
    }

    @Test public void aWindowTallerThanAPhoneDisplayPillarboxesTheOverWideDisplay() {
        // A 616x1040 body is narrower than the 3:5 limit, so the display is sized 624x1040 and is
        // therefore wider than the window: the fit has to use the body's own aspect, or the picture
        // would be drawn wider than the window it lives in and the touch would land beside it.
        assertArrayEquals(new float[]{0, 7, 616, 1027}, AppInputGeometry.fit(.6f, 616, 1040), 0f);
    }

    @Test public void rotationIsUndoneInTheSameDirectionsTheCompositorAppliedIt() {
        assertArrayEquals(new float[]{.25f, .75f}, AppInputGeometry.forRotation(.25f, .75f, 0), 0f);
        assertArrayEquals(new float[]{.75f, .75f}, AppInputGeometry.forRotation(.25f, .75f, 90), 0f);
        assertArrayEquals(new float[]{.75f, .25f}, AppInputGeometry.forRotation(.25f, .75f, 180), 0f);
        assertArrayEquals(new float[]{.25f, .25f}, AppInputGeometry.forRotation(.25f, .75f, 270), 0f);
        // Negative and over-turned values normalize instead of falling through to identity.
        assertArrayEquals(new float[]{.75f, .75f}, AppInputGeometry.forRotation(.25f, .75f, -270), 0f);
        assertArrayEquals(new float[]{.75f, .75f}, AppInputGeometry.forRotation(.25f, .75f, 450), 0f);
    }

    @Test public void theVisibleAspectFollowsTheRotation() {
        assertEquals(1920f / 1080f, AppInputGeometry.visibleAspect(1920, 1080, 0), 1e-4f);
        assertEquals(1080f / 1920f, AppInputGeometry.visibleAspect(1920, 1080, 90), 1e-4f);
        assertEquals(1080f / 1920f, AppInputGeometry.visibleAspect(1920, 1080, 270), 1e-4f);
        assertEquals(16f / 9f, AppInputGeometry.visibleAspect(0, 0, 0), 1e-4f);
    }
}

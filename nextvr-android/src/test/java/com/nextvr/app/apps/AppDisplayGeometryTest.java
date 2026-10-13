package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * The study this class exists for: when an app asks Android for another orientation on a display we
 * created, does the platform rotate the display or letterbox the app? The two answers put the picture
 * in a different shape, and getting it wrong is what makes an app appear in the left half of a window
 * or lose its lower half.
 *
 * <p>The rule under test is that <b>the logical size is the truth</b>, and the reported rotation is
 * believed only when the logical size is the rotation of the natural one.
 */
public class AppDisplayGeometryTest {
    @Test public void aDisplayThatKeptItsSizeIsNotRotated() {
        // What almost every app window is: created for the window's shape, no orientation request, so
        // the platform reports rotation 0 and the same size to the apps.
        AppDisplayGeometry.Visible visible = AppDisplayGeometry.visible(1040, 585, 1040, 585, 0);
        assertEquals(1040, visible.width);
        assertEquals(585, visible.height);
        assertEquals(0, visible.rotation);
        assertFalse(visible.rotated);
        assertEquals(16f / 9f, visible.aspect(), 1e-4f);
    }

    @Test public void aDisplayThePlatformTurnedIsFittedWithTheSwappedAspect() {
        // rotation 90 and a logical size that is the natural size turned: the content is rotated, the
        // window must be filled with the portrait shape and the touch mapped back through the same
        // quarter turn.
        AppDisplayGeometry.Visible visible = AppDisplayGeometry.visible(1040, 585, 585, 1040, 90);
        assertEquals(585, visible.width);
        assertEquals(1040, visible.height);
        assertEquals(90, visible.rotation);
        assertTrue(visible.rotated);
        assertEquals(9f / 16f, visible.aspect(), 1e-4f);
    }

    @Test public void aLetterboxedAppIsNotARotatedDisplay() {
        // The platform reports a rotation but the size apps see did not change: that is not a turned
        // picture, it is an app drawn inside the display it kept (the letterbox case). Believing the
        // rotation here would fit the picture with an aspect it does not have — the exact bug this
        // rule prevents.
        AppDisplayGeometry.Visible visible = AppDisplayGeometry.visible(1040, 585, 1040, 585, 90);
        assertEquals(1040, visible.width);
        assertEquals(585, visible.height);
        assertEquals(0, visible.rotation);
        assertFalse(visible.rotated);
    }

    @Test public void oneHundredEightyDegreesKeepsTheShapeAndDropsTheRotation() {
        // A half turn is not expressible as a swap, so it is treated as "the picture is the logical
        // size": Android's own compatibility scaling already drew it upright in that space.
        AppDisplayGeometry.Visible visible = AppDisplayGeometry.visible(1040, 585, 1040, 585, 180);
        assertEquals(1040, visible.width);
        assertEquals(585, visible.height);
        assertEquals(0, visible.rotation);
        assertFalse(visible.rotated);
    }

    @Test public void aDisplayResizedByTheSystemIsAdoptedAsItIs() {
        // Nothing rotated, but the display is no longer the size it was created with (the platform or
        // another component resized it): the size apps see is what the window must fit.
        AppDisplayGeometry.Visible visible = AppDisplayGeometry.visible(1040, 585, 640, 480, 0);
        assertEquals(640, visible.width);
        assertEquals(480, visible.height);
        assertFalse(visible.rotated);
    }

    @Test public void missingNumbersFallBackInsteadOfProducingAZeroSizedPicture() {
        AppDisplayGeometry.Visible onlyLogical = AppDisplayGeometry.visible(0, 0, 585, 1040, 90);
        assertEquals(585, onlyLogical.width);
        assertEquals(1040, onlyLogical.height);

        AppDisplayGeometry.Visible onlyNatural = AppDisplayGeometry.visible(1040, 585, 0, 0, 0);
        assertEquals(1040, onlyNatural.width);
        assertEquals(585, onlyNatural.height);

        AppDisplayGeometry.Visible nothing = AppDisplayGeometry.visible(0, 0, 0, 0, 0);
        assertEquals(0, nothing.width);
        assertEquals(0, nothing.height);
        assertFalse(nothing.rotated);
    }

    @Test public void anOutOfRangeRotationIsNormalised() {
        assertEquals(90, AppDisplayGeometry.visible(1040, 585, 585, 1040, 450).rotation);
        assertEquals(90, AppDisplayGeometry.visible(1040, 585, 585, 1040, -270).rotation);
    }
}

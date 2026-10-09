package com.samrat.orangehanding

import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertNull
import org.junit.Test

class RescueMergerTest {
    private val now = 10_000L
    private val w = 640
    private val h = 480

    /** A 21-point hand whose wrist (index 0) sits at ([x], [y]); other points are irrelevant to merging. */
    private fun hand(x: Float, y: Float): List<NormalizedLandmark> =
        List(21) { NormalizedLandmark.create(x, y, 0f) }

    private fun rescue(x: Float, y: Float, atMs: Long = now, width: Int = w, height: Int = h) =
        RescueMerger.RescuedHand(hand(x, y), emptyList(), emptyList(), width, height, atMs)

    private fun base(vararg wrists: Pair<Float, Float>): FusionHands.Result =
        FusionHands.Result(
            stamp = 42L,
            hands = wrists.map { hand(it.first, it.second) },
            world = emptyList(),
            sides = emptyList(),
        )

    @Test fun noRescuesLeavesPrimaryResultUntouched() {
        assertNull(RescueMerger.merge(base(), emptyList(), now, w, h))
    }

    @Test fun freshUncoveredRescueIsAddedToEmptyPrimary() {
        val merged = RescueMerger.merge(base(), listOf(rescue(.5f, .5f)), now, w, h)
        assertNotNull(merged)
        assertEquals(1, merged!!.landmarks().size)
        assertEquals(42L, merged.timestampMs()) // the primary frame's stamp is kept
    }

    @Test fun rescueOlderThanMaxAgeIsIgnored() {
        val stale = rescue(.5f, .5f, atMs = now - RescueMerger.MAX_AGE_MS - 1)
        assertNull(RescueMerger.merge(base(), listOf(stale), now, w, h))
    }

    @Test fun rescueExactlyAtMaxAgeIsStillMerged() {
        val edge = rescue(.5f, .5f, atMs = now - RescueMerger.MAX_AGE_MS)
        assertNotNull(RescueMerger.merge(base(), listOf(edge), now, w, h))
    }

    @Test fun rescueForDifferentFrameSizeIsIgnored() {
        val otherSize = rescue(.5f, .5f, width = 1280, height = 720)
        assertNull(RescueMerger.merge(base(), listOf(otherSize), now, w, h))
    }

    @Test fun rescueNearExistingWristIsTreatedAsSameHand() {
        // Within the .1 coverage radius of the primary wrist: the same hand, never double-counted.
        val primary = base(.5f to .5f)
        assertNull(RescueMerger.merge(primary, listOf(rescue(.55f, .52f)), now, w, h))
    }

    @Test fun rescueJustOutsideCoverageRadiusIsAdded() {
        val primary = base(.5f to .5f)
        val merged = RescueMerger.merge(primary, listOf(rescue(.61f, .5f)), now, w, h)
        assertNotNull(merged)
        assertEquals(2, merged!!.landmarks().size)
    }

    @Test fun neverReportsMoreThanTwoHands() {
        val primary = base(.2f to .2f)
        val merged = RescueMerger.merge(
            primary,
            listOf(rescue(.6f, .6f), rescue(.9f, .1f)),
            now, w, h,
        )
        assertNotNull(merged)
        assertEquals(2, merged!!.landmarks().size)
    }

    @Test fun primaryWithTwoHandsIsNeverExtended() {
        val primary = base(.2f to .2f, .8f to .8f)
        assertNull(RescueMerger.merge(primary, listOf(rescue(.5f, .5f)), now, w, h))
    }

    @Test fun coveredRescueIsSkippedButLaterUncoveredOneIsKept() {
        val primary = base(.5f to .5f)
        val merged = RescueMerger.merge(
            primary,
            listOf(rescue(.52f, .5f), rescue(.1f, .9f)),
            now, w, h,
        )
        assertNotNull(merged)
        assertEquals(2, merged!!.landmarks().size)
        assertEquals(.1f, merged.landmarks()[1][0].x(), 1e-6f)
    }
}

package com.nextvr.lighttrack

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Test
import kotlin.math.PI
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.hypot
import kotlin.math.sin

/**
 * The silhouette tracker against pictures whose answer is known: a hand drawn as a palm disc plus
 * five straight fingers, in skin chroma on a grey background.
 *
 * These are the scenes the geometry was designed on (heavily used during the JS exploration of the
 * algorithm), now run through the real Kotlin pipeline: chroma mask, blob, inscribed palm disc,
 * radial profile, 21 landmarks. They pin the things the engine downstream depends on - a hand is
 * found at all, the fingers that are drawn are the ones reported out, a closed hand is a fist, and
 * a thumb touching the index (a loop in the silhouette) is a pinch.
 */
class LightHandTrackerTest {
    private val w = 104
    private val h = 104
    /** BT.601 skin: Cb 112 (-16), Cr 148 (+20), comfortably inside the window. */
    private val skinY = 150
    private val skinCb = 112
    private val skinCr = 148
    private val palmR = 14f

    /** Angles in image space (y down), matching what PalmFit and HandSkeleton use. */
    /** 20 degrees apart, like a splayed hand: adjacent humps stay distinguishable. */
    private val fingerAngles = floatArrayOf(-110f, -90f, -70f, -50f)
    private val thumbAngle = -145f

    private fun scene(paint: (Float, Float) -> Boolean): LightFrame {
        val frame = LightFrame(w, h)
        for (y in 0 until h) {
            for (x in 0 until w) {
                val i = y * w + x
                val on = paint(x + .5f, y + .5f)
                frame.y[i] = (if (on) skinY else 40).toByte()
                frame.cb[i] = (if (on) skinCb else 128).toByte()
                frame.cr[i] = (if (on) skinCr else 128).toByte()
            }
        }
        frame.scaleX = 1f
        frame.scaleY = 1f
        return frame
    }

    private fun degrees(dx: Float, dy: Float): Float = (atan2(dy, dx) * 180.0 / PI).toFloat()

    /** |a - b| in degrees, wrapped. */
    private fun angleGap(a: Float, b: Float): Float {
        var d = a - b
        while (d > 180f) d -= 360f
        while (d < -180f) d += 360f
        return kotlin.math.abs(d)
    }

    private fun segmentDistance(px: Float, py: Float, ax: Float, ay: Float, bx: Float, by: Float): Float {
        val vx = bx - ax
        val vy = by - ay
        val len = vx * vx + vy * vy
        if (len <= 1e-4f) return hypot(px - ax, py - ay)
        val t = (((px - ax) * vx + (py - ay) * vy) / len).coerceIn(0f, 1f)
        return hypot(px - (ax + vx * t), py - (ay + vy * t))
    }

    /**
     * A right hand pointing up, centred on ([cx], [cy]): palm disc, four fingers at the canonical
     * spread, one shorter thumb. [link] draws the thumb tip onto the index tip, which is exactly the
     * loop a real pinch closes in the silhouette.
     */
    private fun hand(
        cx: Float = 60f,
        cy: Float = 58f,
        fingerLen: Float = 32f,
        thumbLen: Float = 24f,
        link: Boolean = false,
    ): LightFrame {
        val indexTipX = cx + cos(Math.toRadians(fingerAngles[0].toDouble())).toFloat() * fingerLen
        val indexTipY = cy + sin(Math.toRadians(fingerAngles[0].toDouble())).toFloat() * fingerLen
        val thumbTipX = cx + cos(Math.toRadians(thumbAngle.toDouble())).toFloat() * thumbLen
        val thumbTipY = cy + sin(Math.toRadians(thumbAngle.toDouble())).toFloat() * thumbLen
        return scene { x, y ->
            val dx = x - cx
            val dy = y - cy
            val d = hypot(dx, dy)
            var on = d <= palmR
            if (!on) {
                val a = degrees(dx, dy)
                for (f in fingerAngles) if (angleGap(a, f) <= 6f && d <= fingerLen) on = true
                if (angleGap(a, thumbAngle) <= 9f && d <= thumbLen) on = true
            }
            if (!on && link) {
                // A 3 px stroke between the two tips seals the pocket the thumb-index loop makes.
                on = segmentDistance(x, y, indexTipX, indexTipY, thumbTipX, thumbTipY) <= 1.6f
            }
            on
        }
    }

    /** A closed hand: the same palm, every finger folded back to just past the palm edge. */
    private fun fist(): LightFrame = hand(fingerLen = 17f, thumbLen = 17f)

    private fun tracker() = LightHandTracker(w, h)

    @Test fun anOpenHandIsFoundWithItsFourFingersOut() {
        val tracker = tracker()
        val frame = hand()
        assertEquals(1, tracker.process(frame))
        val hand = tracker.hands[0]
        assertEquals("the four long fingers are out, the thumb is not counted", 4, hand.extended)
        assertFalse("an open hand is never a fist", hand.fist)
        assertTrue("an open hand has no pinch: ${hand.pinchGap}", hand.pinchGap >= .6f)
        assertTrue("palm width must be a plausible share of the picture: ${hand.palmWidth}", hand.palmWidth > .15f)
        assertTrue("distance must stay in the plausible range: ${hand.distance}", hand.distance in .12f..0.90f)
        assertTrue("the tracker found the hand where it was drawn: ${hand.palmX}", kotlin.math.abs(hand.palmX - 60f / w) < .1f)
        assertFalse("the hand sits on the right of the picture, i.e. the user's right", hand.left)
        // Every landmark is on the picture and the wrist is below the fingertips (y grows downward).
        for (i in 0 until 21) {
            val u = hand.image[i * 3]
            val v = hand.image[i * 3 + 1]
            assertTrue("landmark $i on the picture: $u,$v", u in 0f..1f && v in 0f..1f)
        }
        assertTrue("wrist below the middle knuckle", hand.image[1] > hand.image[28])
        assertTrue("skin pixels cover the drawn hand: ${tracker.skinPixels}", tracker.skinPixels > 500)
    }

    /**
     * The same hand with a forearm: skin, attached, usually the biggest thing in the picture, and
     * leaving the frame on the wrist side. It used to be averaged into the finger direction, which
     * drew the whole skeleton rotated and made it swing as the arm moved.
     */
    private fun armed(rot: Float = 0f, armBelow: Boolean = true): LightFrame {
        val cx = 52f
        val cy = 52f
        return scene { x, y ->
            val dx = x - cx
            val dy = y - cy
            val d = hypot(dx, dy)
            var on = d <= palmR
            if (!on) {
                val a = degrees(dx, dy) - rot
                for (f in fingerAngles) if (angleGap(a, f) <= 6f && d <= 32f) on = true
                if (angleGap(a, thumbAngle) <= 9f && d <= 24f) on = true
            }
            if (!on) {
                // A wrist-wide column leaving the frame under (or above) the hand.
                val along = if (armBelow) y > cy + 8f else y < cy - 8f
                if (along && kotlin.math.abs(x - cx) <= 8f) on = true
            }
            on
        }
    }

    @Test fun theForearmIsNotMistakenForFingers() {
        val tracker = tracker()
        assertEquals(1, tracker.process(armed()))
        val hand = tracker.hands[0]
        // The hand is drawn with the fingers up and the arm down: the fingertips must be ABOVE the
        // wrist, whatever the arm is doing. This is the check the spinning silhouette failed.
        assertTrue("wrist below the palm: ${hand.image[1]} vs ${hand.palmY}", hand.image[1] > hand.palmY)
        assertTrue("fingertip above the palm: ${hand.image[25]} vs ${hand.palmY}", hand.image[25] < hand.palmY)
        assertEquals("an arm in frame must not eat the fingers", 4, hand.extended)
    }

    @Test fun oneFlippedFrameCannotTurnTheHandAround() {
        val tracker = tracker()
        tracker.process(armed())
        val first = tracker.hands[0]
        assertTrue("fingers up, wrist down", first.image[25] < first.image[1])
        // A hand cannot turn 180 degrees between two frames: a single contradictory reading (the
        // arm sliding out, a finger grazing the border) must hold the orientation instead.
        tracker.process(armed(rot = 180f, armBelow = false))
        val held = tracker.hands[0]
        assertTrue("one flipped frame is ignored", held.image[25] < held.image[1])
        // Two frames in a row are a real turn, and are followed.
        tracker.process(armed(rot = 180f, armBelow = false))
        val turned = tracker.hands[0]
        assertTrue("a confirmed turn is followed", turned.image[25] > turned.image[1])
    }

    @Test fun aClosedHandIsAFist() {
        val tracker = tracker()
        // A grab is a hand that closes: the tracker has just seen it open. (A closed hand alone,
        // with no forearm in the picture, is deliberately not accepted from a cold start - see
        // theRoomIsNeverPublishedAsAHand.)
        assertEquals(1, tracker.process(hand()))
        assertEquals(1, tracker.process(fist()))
        val hand = tracker.hands[0]
        assertEquals("no finger reaches past the palm", 0, hand.extended)
        assertTrue("a compact closed hand is a fist", hand.fist)
        assertTrue("a fist is not a pinch: ${hand.pinchGap}", hand.pinchGap >= .6f)
    }

    @Test fun aClosedHandWithItsForearmIsFoundFromCold() {
        val tracker = tracker()
        // A closed hand raised in front of a phone brings the forearm into the picture.
        val frame = scene { x, y ->
            val dx = x - 52f
            val dy = y - 46f
            val d = hypot(dx, dy)
            var on = d <= palmR
            if (!on && d <= palmR * .55f) {
                val a = degrees(dx, dy)
                for (f in fingerAngles) if (angleGap(a, f) <= 6f) on = true
                if (angleGap(a, thumbAngle) <= 9f) on = true
            }
            if (!on && y > 54f && kotlin.math.abs(x - 52f) <= 9f) on = true
            on
        }
        assertEquals(1, tracker.process(frame))
        assertTrue("a closed hand over its forearm is a fist", tracker.hands[0].fist)
    }

    /**
     * The bug this guards: in a lit room a beige wardrobe, a door or a sheet passes the chroma
     * skin window exactly like a hand does, and the tracker published the furniture - a huge
     * silhouette, rotating, hanging in mid-air over the room.
     */
    private fun panel(x0: Float, y0: Float, x1: Float, y1: Float): LightFrame =
        scene { x, y -> x in x0..x1 && y in y0..y1 }

    @Test fun theRoomIsNeverPublishedAsAHand() {
        val cases = listOf(
            "a wardrobe leaving the frame" to panel(0f, 0f, w.toFloat(), h * .6f),
            "a wall on the right" to panel(w * .55f, 0f, w.toFloat(), h.toFloat()),
            "a door panel in the middle" to panel(w * .3f, h * .3f, w * .7f, h * .7f),
        )
        for ((name, frame) in cases) {
            val tracker = tracker()
            assertEquals("$name must not be a hand", 0, tracker.process(frame))
            assertTrue(tracker.hands.isEmpty())
        }
    }

    /**
     * A shadow between the fingers, a ring or a sleeve splits the silhouette in two. The two pieces
     * are ONE hand, and used to be drawn as two skeletons over the same hand.
     */
    @Test fun aSplitBlobIsStillOneHand() {
        val tracker = tracker()
        val frame = scene { x, y ->
            val dx = x - 44f
            val dy = y - 52f
            val d = hypot(dx, dy)
            var on = d <= palmR
            if (!on) {
                val a = degrees(dx, dy)
                for (f in fingerAngles) if (angleGap(a, f) <= 6f && d <= 30f) on = true
                if (angleGap(a, thumbAngle) <= 9f && d <= 22f) on = true
            }
            // A second, separate patch of skin right beside the palm: a watch, a ring, a shadow gap.
            if (!on && hypot(x - 68f, y - 52f) <= palmR * .55f) on = true
            on
        }
        assertEquals("two near blobs are one hand", 1, tracker.process(frame))
        assertEquals("and it is the palm that wins", true, tracker.hands[0].palmX < .6f)
    }

    /** A blob with a long thin spike (a sleeve edge, a reflection) must not draw a spear. */
    @Test fun aFingerIsNeverDrawnLongerThanAFinger() {
        val tracker = tracker()
        val frame = scene { x, y ->
            val dx = x - 52f
            val dy = y - 52f
            val d = hypot(dx, dy)
            var on = d <= palmR
            // One absurd protrusion: a 4-palm-long, 2 px wide spike straight up.
            if (!on && kotlin.math.abs(x - 52f) <= 1.5f && y <= 52f) on = true
            on
        }
        assertEquals(1, tracker.process(frame))
        val hand = tracker.hands[0]
        val palm = hand.palmWidth
        var longest = 0f
        for (i in 0 until 21) {
            val dx = hand.image[i * 3] - hand.palmX
            val dy = hand.image[i * 3 + 1] - hand.palmY
            val d = hypot(dx, dy)
            if (d > longest) longest = d
        }
        // palmWidth is 2.13 radii, and the longest finger is capped at MAX_FINGER_REACH radii.
        val limit = palm / 2.13f * (LightHandConfig.MAX_FINGER_REACH + 1.4f)
        assertTrue("no landmark may fly off the hand: $longest vs $limit", longest < limit)
    }

    @Test fun aThumbTouchingTheIndexIsAPinch() {
        val tracker = tracker()
        assertEquals(1, tracker.process(hand(link = true)))
        val hand = tracker.hands[0]
        assertTrue("the thumb-index loop is the pinch: ${hand.pinchGap}", hand.pinchGap < .35f)
        // The picture agrees with the gesture: the thumb tip is drawn onto the index tip.
        val gap = hypot(hand.image[12] - hand.image[24], hand.image[13] - hand.image[25])
        val palm = hypot(hand.image[15] - hand.image[51], hand.image[16] - hand.image[52])
        assertTrue("thumb tip on the index tip: $gap vs palm $palm", gap < palm * .6f)
    }

    @Test fun twoHandsAreFoundAndNeverShareASide() {
        val both = scene { x, y ->
            val leftDx = x - 34f
            val leftDy = y - 58f
            val rightDx = x - 70f
            val rightDy = y - 58f
            val dl = hypot(leftDx, leftDy)
            val dr = hypot(rightDx, rightDy)
            fun finger(dx: Float, dy: Float, d: Float, angles: FloatArray, len: Float): Boolean {
                if (d <= 9f) return true
                val a = degrees(dx, dy)
                for (f in angles) if (angleGap(a, f) <= 8f && d <= len) return true
                return false
            }
            finger(leftDx, leftDy, dl, fingerAngles, 24f) || finger(rightDx, rightDy, dr, fingerAngles, 24f)
        }
        val tracker = tracker()
        assertEquals(2, tracker.process(both))
        assertEquals("the two hands must be one left and one right", 2, tracker.hands.map { it.left }.toSet().size)
    }

    @Test fun aFrameWithNoSkinFindsNoHand() {
        val tracker = tracker()
        val empty = scene { _, _ -> false }
        assertEquals(0, tracker.process(empty))
        assertEquals(0, tracker.skinPixels)
    }

    @Test fun theAnalysisSizeMustMatchTheFrame() {
        val other = LightHandTracker(48, 48)
        assertEquals("a tracker never reads a frame of another size", 0, other.process(hand()))
    }

    @Test fun theYuvSamplerReadsThePlanesInOrderAndTurnsThem() {
        // 4x4 picture: luma carries the column index, so a quarter turn is visible in the output.
        val srcW = 4
        val srcH = 4
        val y = java.nio.ByteBuffer.allocateDirect(srcW * srcH)
        val u = java.nio.ByteBuffer.allocateDirect(srcW * srcH)
        val v = java.nio.ByteBuffer.allocateDirect(srcW * srcH)
        for (row in 0 until srcH) {
            for (col in 0 until srcW) {
                y.put(row * srcW + col, (10 + col * 10).toByte())
                u.put(row * srcW + col, 120.toByte())
                v.put(row * srcW + col, 140.toByte())
            }
        }
        val upright = LightFrame(4, 4)
        assertTrue(YuvSkinSampler.fill(upright, y, u, v, srcW, srcH, srcW, srcW, srcW, 1, 1, 0))
        assertEquals(10.toByte(), upright.y[0])
        assertEquals(40.toByte(), upright.y[3])
        assertEquals(120.toByte(), upright.cb[0])
        assertEquals(140.toByte(), upright.cr[0])

        // 90 degrees: destination column 0 is the source's bottom row, so the values must transpose.
        val turned = LightFrame(4, 4)
        assertTrue(YuvSkinSampler.fill(turned, y, u, v, srcW, srcH, srcW, srcW, srcW, 1, 1, 90))
        // 90 deg maps the source row to a destination column, so the value carried by each source
        // column is now constant down each destination row.
        for (row in 0 until 4) {
            for (col in 0 until 4) {
                assertEquals(
                    "the quarter turn must keep the luma of column $col",
                    (10 + col * 10).toByte(),
                    turned.y[row * 4 + col],
                )
            }
        }
        assertFalse("an impossible turn is rejected, not thrown", YuvSkinSampler.fill(turned, y, u, v, srcW, srcH, srcW, srcW, srcW, 1, 1, 45))
    }

    @Test fun theTrackerPublishesNothingBeforeItHasBuffers() {
        val tracker = tracker()
        assertNotNull(tracker.hands)
        assertEquals(0, tracker.process(scene { _, _ -> false }))
        assertTrue(tracker.hands.isEmpty())
        tracker.reset()
        assertEquals(0, tracker.skinPixels)
    }
}

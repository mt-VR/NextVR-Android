package com.nextvr.lighttrack

import kotlin.math.PI
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.hypot
import kotlin.math.min
import kotlin.math.sin

/**
 * The hand tracker: chroma mask -> blobs -> palm disc -> radial profile -> 21 landmarks.
 *
 * Cost per frame at the 320x240 analysis size: one compare per pixel for the mask (~77k), the 3x3
 * majority through an integral image, one flood fill over the skin pixels, a chamfer pass over each
 * blob's box, 90 radial scans and a fixed 21-point geometry — no model file, no tensor, no delegate
 * and no allocation once the buffers exist. That is a fraction of a millisecond against the tens of
 * milliseconds the landmark model it replaces needed.
 *
 * Everything the old pipeline derived from the model is still produced: two hands, handedness, 21
 * landmarks per hand in image and metric space, palm width, distance, pinch and fist.
 */
class LightHandTracker(val width: Int, val height: Int) {
    private val mask = SkinMask(width, height)
    private val blobs = BlobFinder(width, height)
    private val fits = Array(LightHandConfig.MAX_HANDS) { PalmFit() }
    private val pool = Array(LightHandConfig.MAX_HANDS) { LightHand() }

    /** Hands found by the last [process], at most [LightHandConfig.MAX_HANDS]. */
    val hands = ArrayList<LightHand>()

    /** Skin pixels the last frame produced, for the perf line. */
    var skinPixels = 0
        private set
    /** Blobs the last frame segmented, before any hand test. */
    var blobCount = 0
        private set

    /** Side of the last single hand, so a hand over the middle of the view keeps its identity. */
    private var lastLeft = false
    private var haveSide = false

    /** Segments [frame] and returns the number of hands written to [hands]. */
    fun process(frame: LightFrame): Int {
        hands.clear()
        if (frame.width != width || frame.height != height) return 0
        skinPixels = mask.build(frame)
        if (skinPixels < LightHandConfig.MIN_AREA) return 0
        blobCount = blobs.find(mask.clean, LightHandConfig.MIN_AREA)
        val minRadius = LightHandConfig.MIN_PALM_RADIUS * width
        var found = 0
        for (b in 0 until blobs.blobs.size) {
            if (found >= LightHandConfig.MAX_HANDS) break
            val blob = blobs.blobs[b]
            val fit = fits[found]
            if (!fit.fit(blobs, blob)) continue
            if (fit.radius < minRadius) continue
            val hand = pool[found]
            // The rear camera looks forward, so the picture's right is the user's right.
            hand.left = fit.cx < width * 0.5f
            hand.confidence = (fit.radius / (width * LightHandConfig.MIN_PALM_RADIUS * 3f)).coerceIn(0f, 1f)
            measure(hand, fit, blob)
            hands.add(hand)
            found++
        }
        // Two blobs can never be the same physical hand: when both fall on one side of the view, the
        // one nearer the middle is the other side. Without this the wire format would carry two
        // "left" hands and the web layer could not tell their presses apart.
        if (hands.size == 2 && hands[0].left == hands[1].left) {
            if (abs(hands[0].palmX - 0.5f) <= abs(hands[1].palmX - 0.5f)) {
                hands[0].left = !hands[0].left
            } else {
                hands[1].left = !hands[1].left
            }
        } else if (hands.size == 1) {
            // A hand waving across the middle of the view must not swap identity: the side is held
            // while it is still near the centre.
            val hand = hands[0]
            if (haveSide && hand.left != lastLeft && abs(hand.palmX - 0.5f) < SIDE_HOLD_BAND) hand.left = lastLeft
            lastLeft = hand.left
            haveSide = true
        }
        for (i in 0 until hands.size) {
            val hand = hands[i]
            val fit = fits[i]
            HandSkeleton.build(fit, hand, hand.left, width, height, frame.scaleX, frame.scaleY)
            // A closed hand is a compact mass with no finger humps: both halves of that have to
            // agree, so a hand seen edge-on (compact, but with a finger out) is not a fist.
            hand.fist = hand.extended <= LightHandConfig.FIST_FINGERS && fit.fill >= LightHandConfig.FIST_FILL
        }
        return hands.size
    }

    /** Pinch, confidence and side for one blob, before the landmarks are placed. */
    private fun measure(hand: LightHand, fit: PalmFit, blob: SkinBlob) {
        val r = fit.radius
        // The palm centre is needed to name the sides BEFORE the landmarks exist, so it is set here
        // and the skeleton writes the same values again when it places them.
        hand.palmX = fit.cx / width
        hand.palmY = fit.cy / height
        // The thumb-index loop: the one pinch measurement that does not need to know which hump is
        // which finger, and the one that appears exactly when the fingertips really touch.
        var hole = 0
        if (blob.bboxW > 5 && blob.bboxH > 5) {
            val pixels = blobs.holeArea(blob)
            if (pixels >= LightHandConfig.HOLE_MIN_PIXELS) {
                val dx = blobs.holeX - fit.cx
                val dy = blobs.holeY - fit.cy
                // Near the palm, and on the finger side of it: a gap by the wrist, under the arm
                // or between the forearm and the body is not a pinch.
                if (hypot(dx, dy) <= r * LightHandConfig.HOLE_MAX_OFFSET &&
                    dx * cos(fit.fanAngle) + dy * sin(fit.fanAngle) > r * LightHandConfig.HOLE_FINGER_OFFSET) {
                    hole = pixels
                }
            }
        }
        val disc = (PI * r * r).toFloat().coerceAtLeast(1f)
        val share = (hole / (disc * LightHandConfig.HOLE_FULL)).coerceIn(0f, 1f)
        val gapHole = 1f - 0.75f * share

        // A second opinion from the silhouette, for the hand seen edge-on that keeps the tips
        // together but loses the enclosed loop. It may only make the gap SMALLER when it is already
        // very small: an open hand sits at ~0.45 by this measure, and that must never read as a
        // pinch.
        val mid = fit.fanAngle
        val spread = if (hand.left) -1f else 1f
        val angle = LightHandConfig.FINGER_ANGLE
        val a0 = mid + spread * angle[0]
        val a1 = mid + spread * angle[1]
        val reachThumb = fit.reachAt(a0)
        val reachIndex = fit.reachAt(a1)
        // ...and only for a hand that HAS the two fingers out: a fist also keeps five fingertips
        // within a third of a palm of each other, and measuring that would read as a closed pinch.
        var gapTips = 1f
        val tipsOut = reachThumb > r * LightHandConfig.THUMB_REACH &&
            reachIndex > r * LightHandConfig.FINGER_REACH
        if (tipsOut && fit.palmPx > 1f) {
            val dx = cos(a0) * reachThumb - cos(a1) * reachIndex
            val dy = sin(a0) * reachThumb - sin(a1) * reachIndex
            gapTips = (hypot(dx, dy) / fit.palmPx).coerceIn(0f, 1f)
        }
        hand.pinchGap = if (gapTips < CLOSE_TIPS) min(gapHole, gapTips) else gapHole
    }

    /** Frees per-frame state so a stopped tracker holds nothing. */
    fun reset() {
        hands.clear()
        skinPixels = 0
        blobCount = 0
        haveSide = false
    }

    private companion object {
        /** Distance from the middle of the view where a single hand keeps its previous side. */
        const val SIDE_HOLD_BAND = 0.10f
        /** Tip distance (palm widths) that only a closed pinch can produce. */
        const val CLOSE_TIPS = 0.30f
    }
}

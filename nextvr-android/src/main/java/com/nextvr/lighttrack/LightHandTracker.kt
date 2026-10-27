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
    /**
     * The fan (finger) direction of each slot on the previous frame.
     *
     * The orientation is the one thing in this tracker that is inferred rather than measured, and a
     * few degrees of jitter in it are enough for the silhouette to flutter; a wrong reading draws
     * the whole hand rotated. So it is filtered: the shortest angular path to the new measurement,
     * strong smoothing while it agrees, a fast catch-up when the hand really turns. The angle is
     * what "the hand spins on screen" was: nothing else in the skeleton moves that way.
     */
    /** Palms published on the previous frame, normalized, for the fingerless-fist test. */
    private val lastX = FloatArray(LightHandConfig.MAX_HANDS) { Float.NaN }
    private val lastY = FloatArray(LightHandConfig.MAX_HANDS) { Float.NaN }
    private var lastHands = 0
    /** Camera time of the last published hand, or -1 when there never was one. */
    private var lastSeenMs = -1L
    private val smoothFan = FloatArray(LightHandConfig.MAX_HANDS) { Float.NaN }
    /** Palm radius (the skeleton's scale) per slot on the previous frame. */
    private val smoothRadius = FloatArray(LightHandConfig.MAX_HANDS) { Float.NaN }
    /** A frame whose fan was too far from the last one to believe it, kept to see if it repeats. */
    private val pendingFan = FloatArray(LightHandConfig.MAX_HANDS) { Float.NaN }

    /** Segments [frame] and returns the number of hands written to [hands]. */
    fun process(frame: LightFrame): Int {
        hands.clear()
        if (frame.width != width || frame.height != height) return 0
        skinPixels = mask.build(frame)
        if (skinPixels < LightHandConfig.MIN_AREA) return 0
        // Fast path for a phone pointed at a beige room: more skin than not means furniture, and
        // there is nothing to segment. Cheaper than the flood fill that would find only walls.
        if (skinPixels > (width * height * LightHandConfig.MAX_SKIN_SHARE).toInt()) {
            blobCount = 0
            return 0
        }
        blobCount = blobs.find(mask.clean, LightHandConfig.MIN_AREA)
        val minRadius = LightHandConfig.MIN_PALM_RADIUS * width
        val maxRadius = LightHandConfig.MAX_PALM_RADIUS * width
        val maxArea = (LightHandConfig.MAX_BLOB_AREA_SHARE * width * height).toInt()
        var found = 0
        // Continuity first: with two blobs on screen, the one nearest the palm tracked a moment ago
        // IS that hand. Slot 0 keeps one hand's orientation filter, pinch latch and side across
        // frames, so letting the blobs swap places (which their areas do whenever an arm slides in
        // or out) made a hand jump to the other side of the view for one frame.
        if (blobs.blobs.size == 2 && lastHands > 0) {
            val a = blobs.blobs[0]
            val b = blobs.blobs[1]
            if (nearer(b) < nearer(a)) {
                blobs.blobs[0] = b
                blobs.blobs[1] = a
            }
        }
        for (b in 0 until blobs.blobs.size) {
            if (found >= LightHandConfig.MAX_HANDS) break
            val blob = blobs.blobs[b]
            // A hand is an object a few centimetres across in front of the phone. A beige wall, a
            // wardrobe door or a sheet passes the chroma test just as well, and used to be drawn
            // as a giant hand in mid-air; the size of the palm and of the blob is what rules it out.
            if (blob.area > maxArea) continue
            val fit = fits[found]
            if (!fit.fit(blobs, blob)) continue
            if (fit.radius < minRadius || fit.radius > maxRadius) continue
            // A hand leaves the corners of its bounding box to the background; a wall, a door or a
            // sheet does not.
            if (fit.fill > LightHandConfig.MAX_HAND_FILL) continue
            // Skin leaving the picture for more than a forearm's width is background, not an arm.
            if (fit.armRun > fit.radius * LightHandConfig.MAX_ARM_RUN) continue
            if (!isHand(fit, frame.stampMs)) continue
            // One hand, one hand: a shadow between the fingers, a ring or a sleeve splits the
            // silhouette into pieces, and each piece used to be published as its own hand - two
            // skeletons drawn over one hand, which is exactly what "the hand looks broken" was.
            if (isSameHand(found, fit)) continue
            steady(found, fit)
            val hand = pool[found]
            // The rear camera looks forward, so the picture's right is the user's right.
            hand.left = fit.cx < width * 0.5f
            hand.confidence = fit.handiness(width)
            measure(hand, fit, blob)
            hands.add(hand)
            found++
        }
        remember(found, frame.stampMs)
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

    /** True when [fit] sits on top of a hand already accepted in this frame. */
    private fun isSameHand(found: Int, fit: PalmFit): Boolean {
        for (i in 0 until found) {
            val other = fits[i]
            val d = hypot(fit.cx - other.cx, fit.cy - other.cy)
            if (d < maxOf(other.radius, fit.radius) * LightHandConfig.SAME_HAND_RADII) return true
        }
        return false
    }

    /** Distance from [blob] to the nearest palm published on the previous frame, normalized. */
    private fun nearer(blob: SkinBlob): Float {
        val cx = blob.cx / width
        val cy = blob.cy / height
        var best = Float.MAX_VALUE
        for (i in 0 until lastHands) {
            val d = hypot(cx - lastX[i], cy - lastY[i])
            if (d < best) best = d
        }
        return best
    }

    /**
     * Shape evidence: is this blob a hand at all?
     *
     * A hand shows at least one NARROW protrusion - a finger - and the tracker's hump count
     * measures exactly that. A closed hand has none, so it is accepted only when its forearm is in
     * the picture (a short contact with the border, not a wall's) or when it is where a hand was
     * tracked a moment ago. Anything else is the room.
     */
    private fun isHand(fit: PalmFit, stampMs: Long): Boolean {
        if (fit.humps >= 1) return fit.handiness(width) >= LightHandConfig.MIN_HANDINESS
        if (fit.fill < LightHandConfig.FIST_FILL) return false
        // A forearm in the picture is what a raised closed hand looks like from a phone: short
        // contact with the border, palm-sized.
        if (fit.hasArm) return true
        // No fingers and no forearm: only believable next to where a hand was just tracked. A
        // beige door, a sheet or a wardrobe front has exactly this shape, and one of them appears
        // out of nowhere in a room where nobody has ever put a hand.
        val age = stampMs - lastSeenMs
        if (lastSeenMs < 0L || age > RECENT_HAND_MS) return false
        val radius = FOLLOW_RADIUS + (FOLLOW_FAR_RADIUS - FOLLOW_RADIUS) * (age.toFloat() / RECENT_HAND_MS)
        val cx = fit.cx / width
        val cy = fit.cy / height
        for (i in 0 until lastHands) {
            if (hypot(cx - lastX[i], cy - lastY[i]) <= radius) return true
        }
        return false
    }

    /** Keeps the palms that were published, so the next frame can recognise a fingerless fist. */
    private fun remember(count: Int, stampMs: Long) {
        lastHands = count.coerceAtMost(LightHandConfig.MAX_HANDS)
        for (i in 0 until lastHands) {
            lastX[i] = hands[i].palmX
            lastY[i] = hands[i].palmY
        }
        // The palms outlive the frame they were found in, so a closed hand keeps being recognised
        // for as long as its owner could plausibly have turned one into a fist.
        if (lastHands > 0) lastSeenMs = stampMs
    }

    /**
     * Filters the fan direction of [slot] and keeps the wrist consistent with it: the arm when it
     * is in frame, straight away from the fingers when it is not.
     */
    private fun steady(slot: Int, fit: PalmFit) {
        // The palm radius is the SCALE of the whole skeleton: a wobbling radius made the hand grow
        // and shrink every frame, which reads as the hand flying away from itself. Filtered the
        // same way as the orientation (short lag, no freeze).
        val previousRadius = smoothRadius[slot]
        fit.radius = if (previousRadius.isNaN()) fit.radius
            else previousRadius + (fit.radius - previousRadius) * RADIUS_GAIN
        smoothRadius[slot] = fit.radius
        fit.palmPx = LightHandConfig.PALM_PER_RADIUS * fit.radius
        val previous = smoothFan[slot]
        var fan = fit.fanAngle
        if (!previous.isNaN()) {
            val delta = wrap(fan - previous)
            if (abs(delta) > FLIP_RAD) {
                val pending = pendingFan[slot]
                if (!pending.isNaN() && abs(wrap(fan - pending)) < FLIP_CONFIRM) {
                    // The hard reading repeated: the hand really is oriented that way now.
                    pendingFan[slot] = Float.NaN
                } else {
                    // One frame cannot turn a hand around. A border-grazing finger or the arm
                    // leaving the picture flips the reading for a frame or two; holding the last
                    // orientation is the difference between a silhouette that stays on the hand
                    // and one that spins.
                    pendingFan[slot] = fan
                    fan = previous
                }
            } else {
                pendingFan[slot] = Float.NaN
                fan = blend(previous, fan)
            }
        } else {
            pendingFan[slot] = Float.NaN
        }
        smoothFan[slot] = fan
        fit.fanAngle = fan
        // The wrist is always the far side of the fingers: a filtered fan can then never draw the
        // wrist and the fingertips on the same side of the palm.
        fit.wristAngle = fan + PI.toFloat()
    }

    /** Signed angle wrapped to (-PI, PI]. */
    private fun wrap(angle: Float): Float {
        var v = angle
        while (v > PI.toFloat()) v -= TWO_PI
        while (v < -PI.toFloat()) v += TWO_PI
        return v
    }

    /** Moves [prev] towards [next] along the shortest arc, faster when the hand really turned. */
    private fun blend(prev: Float, next: Float): Float {
        var delta = next - prev
        while (delta > PI.toFloat()) delta -= TWO_PI
        while (delta < -PI.toFloat()) delta += TWO_PI
        val k = if (abs(delta) > TURN_RAD) FAST_TURN_GAIN else TURN_GAIN
        return prev + delta * k
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
        lastHands = 0
        lastSeenMs = -1L
        for (i in smoothFan.indices) {
            smoothFan[i] = Float.NaN
            pendingFan[i] = Float.NaN
            smoothRadius[i] = Float.NaN
        }
    }

    private companion object {
        /** Distance from the middle of the view where a single hand keeps its previous side. */
        const val SIDE_HOLD_BAND = 0.10f
        /** Tip distance (palm widths) that only a closed pinch can produce. */
        const val CLOSE_TIPS = 0.30f
        /** Per-frame share of the way to the measured fan direction while it agrees with the last. */
        const val TURN_GAIN = 0.32f
        /** ... and the share when the measurement jumped, i.e. the hand really changed orientation. */
        const val FAST_TURN_GAIN = 0.65f
        /** Jump (radians) above which a frame is treated as a real turn, not jitter. */
        const val TURN_RAD = 0.9f
        /** Jump (radians) that cannot be a hand turning between two frames: it must repeat. */
        const val FLIP_RAD = 1.6f
        /** How close a repeat has to be to the rejected reading for it to be accepted. */
        const val FLIP_CONFIRM = 0.75f
        const val TWO_PI = 6.2831855f
        /** Per-frame share of the way to the measured palm radius: kills the grow/shrink wobble. */
        const val RADIUS_GAIN = 0.35f
        /** How far a fingerless blob may be from a hand of the previous frame to be that hand. */
        const val FOLLOW_RADIUS = 0.18f
        /** A closed hand is recognised this long after one was tracked. */
        const val RECENT_HAND_MS = 1500L
        /** ... and it may be this far from where the hand was, which a fist can, a wall cannot. */
        const val FOLLOW_FAR_RADIUS = 0.38f
    }
}

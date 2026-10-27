package com.nextvr.app.hands

import kotlin.math.PI
import kotlin.math.abs
import kotlin.math.sqrt

/**
 * Quest-style hand gestures from 21 landmarks, and the filters that keep tracking calm.
 *
 * The landmarks now come from the light silhouette tracker (com.nextvr.lighttrack) instead of a
 * learned model, so they arrive as a flat 63-float array - x, y, z per landmark, image normalized -
 * rather than a list of landmark objects. The rules below are unchanged: they were always pure
 * geometry over those 21 points.
 */
object HandGestures {
    private val FOLDED_TIPS = intArrayOf(12, 16, 20)
    private val FOLDED_PIPS = intArrayOf(10, 14, 18)

    /**
     * Hysteresis for a deliberate pinch click. Looser than the PhoneXR reference on purpose: a
     * pinch here is a click, and a strict close threshold made small gaps hard to hit. Releasing
     * still needs a clearly open hand, so the gap between the two is wide.
     */
    const val PINCH_CLOSE_GAP = .38f
    const val PINCH_OPEN_GAP = .56f
    /**
     * Smallest palm (index to pinky base, in image widths) a landmark set may have and still be
     * measured. The pinch gap is a RATIO to the palm, so a collapsed or sub-pixel palm turns it into
     * 0/0.02 = 0 and every threshold reads "fully closed": a glitch (or a hand the tracker returns
     * as a single point) used to arrive at the web layer as a phantom pinch - a click with no hand.
     * Real hands are far above this floor even at the detection limit, so nothing legitimate is lost.
     */
    const val MIN_PALM = .008f

    data class Shape(
        /** Thumb and index tips together: click. */
        val pinch: Boolean,
        /** How close to a pinch, 0 (open) to 1 (touching). */
        val pinchStrength: Float,
        /** Fingers curled into a fist: grab and move. */
        val fist: Boolean,
        /** The palm faces the user (the camera sees the back of the hand): system menu when pinching. */
        val palmToFace: Boolean,
        /** Point between thumb and index tips, image coordinates 0..1. */
        val pinchX: Float,
        val pinchY: Float,
        /** Palm width in image widths; bigger is closer to the camera. */
        val palmWidth: Float,
        /**
         * Aim point between the thumb and index bases: follows the hand but not the fingertips, so
         * the cursor stays put while the fingers pinch (a pinch no longer "jumps" the click).
         */
        val aimX: Float = pinchX,
        val aimY: Float = pinchY,
        /** Thumb-index distance in palm widths; feed it to a [PinchLatch] for a steady click. */
        val pinchGap: Float = 1f,
        /** Fingertip cursor and pose used for tablet-like direct touch on app windows. */
        val indexX: Float = aimX,
        val indexY: Float = aimY,
        val indexExtended: Boolean = false,
        /** Middle of the palm (wrist and knuckles), image coordinates: where a fist grabs. */
        val palmX: Float = aimX,
        val palmY: Float = aimY,
        /** Index out, middle and ring folded: the pose that presses. An open hand never does. */
        val pointing: Boolean = false,
    )

    /**
     * [physicalLeft] is the user's real hand. The tracker labels a hand from the side of the view it
     * is on (the rear camera looks forward, so the picture's right is the user's right).
     */
    fun shape(p: FloatArray, physicalLeft: Boolean): Shape {
        if (p.size < 63) return Shape(false, 0f, false, false, .5f, .5f, MIN_PALM)
        fun d(a: Int, b: Int): Float {
            val dx = p[a * 3] - p[b * 3]
            val dy = p[a * 3 + 1] - p[b * 3 + 1]
            return sqrt(dx * dx + dy * dy)
        }
        val palmRaw = d(5, 17)
        val palm = palmRaw.coerceAtLeast(.02f)
        // Pinch hysteresis is applied by the caller; here only the distance relative to the palm.
        // A palm below [MIN_PALM] is not a measurement at all: report the hand open instead of
        // letting the degenerate ratio close a pinch nobody made.
        val gap = if (palmRaw < MIN_PALM) 1f else d(4, 8) / palm
        val strength = ((.9f - gap) / .6f).coerceIn(0f, 1f)
        var others = 0
        for (i in FOLDED_TIPS.indices) if (d(0, FOLDED_TIPS[i]) < d(0, FOLDED_PIPS[i]) * 1.04f) others++
        val indexCurled = d(0, 8) < d(0, 6) * 1.04f
        // When pinching sideways or at an angle (IMG_20261021_143724.jpg), the index finger bends
        // toward the thumb while the fingertips stay out in front of the knuckles and touch closely.
        val sidewaysPinchPose = gap < .42f && d(0, 8) > d(0, 5) * .72f && d(4, 8) < d(8, 12) * .92f
        // A fist has every finger folded. A pinch with the index bent and the other fingers open
        // (or closed) is not a fist.
        val fist = indexCurled && others >= 2 && !sidewaysPinchPose
        // Winding of wrist -> index base -> pinky base: for the back camera, a right hand shows its
        // back (palm toward the user) when this turns clockwise in image space.
        val ax = p[15] - p[0]
        val ay = p[16] - p[1]
        val bx = p[51] - p[0]
        val by = p[52] - p[1]
        val cross = ax * by - ay * bx
        val palmToFace = if (physicalLeft) cross < 0 else cross > 0
        return Shape(
            pinch = !fist && gap < .42f,
            pinchStrength = strength,
            fist = fist,
            palmToFace = palmToFace && abs(cross) > palm * palm * .06f,
            pinchX = (p[12] + p[24]) / 2,
            pinchY = (p[13] + p[25]) / 2,
            palmWidth = palm,
            aimX = p[6] * .3f + p[15] * .45f + (p[12] + p[24]) / 2 * .25f,
            aimY = p[7] * .3f + p[16] * .45f + (p[13] + p[25]) / 2 * .25f,
            pinchGap = gap,
            indexX = p[24],
            indexY = p[25],
            indexExtended = d(0, 8) > d(0, 6) * 1.12f,
            pointing = d(0, 8) > d(0, 6) * 1.12f && d(0, 12) < d(0, 10) * 1.08f && d(0, 16) < d(0, 14) * 1.08f,
            palmX = (p[0] + p[15] + p[27] + p[51]) / 4,
            palmY = (p[1] + p[16] + p[28] + p[52]) / 4,
        )
    }

    /**
     * The hand in 3D around the head, in metres (x right, y up, -z ahead), for WebXR pages:
     * the hand's shape from the tracker's metric landmarks, placed at the distance its size on the
     * picture says, along the ray through the middle knuckle. 63 floats, or null.
     */
    fun headPoints(image: FloatArray, world: FloatArray?, scaleX: Float, scaleY: Float): FloatArray? {
        if (image.size < 63 || world == null || world.size < 63) return null
        var metres = 0f
        var tangent = 0f
        for (k in DEPTH_BONES.indices step 2) {
            val a = DEPTH_BONES[k]
            val b = DEPTH_BONES[k + 1]
            metres += kotlin.math.hypot(world[a * 3] - world[b * 3], world[a * 3 + 1] - world[b * 3 + 1])
            tangent += kotlin.math.hypot(
                (image[a * 3] - image[b * 3]) * 2f * scaleX,
                (image[a * 3 + 1] - image[b * 3 + 1]) * 2f * scaleY,
            )
        }
        if (tangent < 1e-4f) return null
        val distance = (metres / tangent).coerceIn(.12f, 1.2f)
        val ax = (image[27] - .5f) * 2f * scaleX * distance
        val ay = (.5f - image[28]) * 2f * scaleY * distance
        val out = FloatArray(63)
        for (i in 0 until 21) {
            out[i * 3] = ax + (world[i * 3] - world[27])
            out[i * 3 + 1] = ay - (world[i * 3 + 1] - world[28])
            out[i * 3 + 2] = -distance - (world[i * 3 + 2] - world[29])
        }
        return out
    }

    private val DEPTH_BONES = intArrayOf(0, 5, 0, 17, 5, 17, 0, 9, 5, 9, 9, 13, 13, 17)

    /**
     * Tablet-like touch in the air, as a push: the pointing fingertip presses when it moves forward
     * by a share of its distance ([push], about 14 % — some 6–7 cm at arm's length) from where it
     * has been resting, and lets go when it comes back half of that. Measured against the hand's own
     * resting place, it needs no calibration and works whatever unit the distance is in, and a
     * hand that is merely raised or held out never presses anything.
     */
    class TouchLatch(private val push: () -> Float) {
        var touching = false
            private set
        /** 0 (resting) .. 1 (pressing): how far into a press the fingertip is. */
        var closeness = 0f
            private set
        private var baseline = 0f
        private var frames = 0

        fun update(depth: Float, pointing: Boolean): Boolean {
            if (depth <= 0f || !pointing) {
                reset()
                return false
            }
            if (frames++ == 0) baseline = depth
            val share = push()
            if (!touching) {
                // The resting place drifts with the hand (about a second), but not while pressing.
                baseline += (depth - baseline) * .06f
                // A few frames to settle after the hand appears or starts pointing.
                touching = frames > 6 && depth > baseline * (1f + share)
            } else {
                touching = depth > baseline * (1f + share * .5f)
                if (!touching) baseline = depth
            }
            closeness = ((depth / baseline - 1f) / share).coerceIn(0f, 1f)
            return touching
        }

        fun reset() {
            touching = false
            closeness = 0f
            frames = 0
        }
    }

    /**
     * A pinch that starts when the fingers really touch and ends only once they clearly open, so a
     * click does not flicker on and off when the fingers hover near each other.
     */
    class PinchLatch(
        private val close: Float = PINCH_CLOSE_GAP,
        private val open: Float = PINCH_OPEN_GAP,
    ) {
        var pinching = false
            private set

        fun update(shape: Shape): Boolean {
            pinching = if (shape.fist) false else if (pinching) shape.pinchGap < open else shape.pinchGap < close
            return pinching
        }

        fun reset() {
            pinching = false
        }
    }

    /**
     * One Euro filter (Casiez et al.): strong smoothing when the hand is still, little lag when it
     * moves fast. This is what keeps the cursor and controllers from shaking.
     *
     * The derivative is measured on the RAW signal (the classic formulation), not on the filter's
     * own lag error. The lag-error variant made the adaptive cutoff depend on the frame rate —
     * the same hand speed was smoothed more on a slow tracker (big dt) than on a fast one — and
     * inflated the velocity estimate whenever the filter lagged behind, which read as drift until
     * the next sample pulled it back. With the raw derivative the cutoff follows the hand's true
     * speed: heavy smoothing at rest, near-zero added lag at speed, and the state always converges
     * to the measurement (no positional error accumulates).
     */
    class OneEuro(
        private val minCutoff: Float = 1.2f,
        private val beta: Float = .6f,
        private val derivativeCutoff: Float = 1f,
        /** Changes smaller than this are ignored while the hand rests: no tremor at all when still. */
        private val deadZone: Float = 0f,
    ) {
        private var value = Float.NaN
        private var shown = Float.NaN
        private var raw = Float.NaN
        private var derivative = 0f
        private var lastNs = 0L

        fun filter(sample: Float, timeNs: Long): Float {
            if (value.isNaN() || lastNs == 0L) {
                value = sample
                shown = sample
                raw = sample
                lastNs = timeNs
                return shown
            }
            // A stale or replayed stamp must never run the filter backwards in time; hold instead.
            if (timeNs <= lastNs) return shown
            val dt = ((timeNs - lastNs) / 1e9f).coerceIn(1e-3f, .2f)
            lastNs = timeNs
            val rawDerivative = (sample - raw) / dt
            raw = sample
            derivative += alpha(derivativeCutoff, dt) * (rawDerivative - derivative)
            val cutoff = minCutoff + beta * abs(derivative)
            value += alpha(cutoff, dt) * (sample - value)
            // Hysteresis: the output follows only once the filtered value leaves the dead zone.
            val gap = value - shown
            if (abs(gap) > deadZone) shown = value - deadZone * kotlin.math.sign(gap)
            return shown
        }

        fun reset() {
            value = Float.NaN
            shown = Float.NaN
            raw = Float.NaN
            derivative = 0f
            lastNs = 0L
        }

        private fun alpha(cutoff: Float, dt: Float): Float {
            val tau = 1f / (2f * PI.toFloat() * cutoff)
            return 1f / (1f + tau / dt)
        }
    }
}

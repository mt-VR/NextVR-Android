package com.nextvr.lighttrack

import kotlin.math.cos
import kotlin.math.min
import kotlin.math.sin

/**
 * Turns a [PalmFit] into the 21 landmarks the rest of the engine speaks.
 *
 * The palm disc gives the wrist, the knuckle ring and the palm width; each finger is measured at
 * its canonical direction on the radial profile and drawn at the length the silhouette actually
 * reaches, or folded back over the palm when it does not reach past it - which is exactly what the
 * distance-based gesture rules in HandGestures read as "curled". Nothing here is a learned model:
 * the only prior is the angular spread of the five fingers.
 *
 * The pinch is the other way round: it is MEASURED first (the thumb-index loop, or failing that the
 * two tips' own distance) and the thumb is then drawn closed onto the index tip, so the picture and
 * the wire format agree with the gesture the engine reports.
 */
object HandSkeleton {
    /**
     * Fills [out] from [fit]. [out.pinchGap] and [out.fist] must be set by the caller first: the
     * thumb is drawn to the index tip when the measured gap says the fingers are closed.
     */
    fun build(fit: PalmFit, out: LightHand, left: Boolean, width: Int, height: Int, scaleX: Float, scaleY: Float) {
        out.left = left
        val spread = if (left) -1f else 1f
        val mid = fit.fanAngle
        val r = fit.radius
        val knuckle = r * 1.05f
        val wristR = r * 1.25f
        val angle = LightHandConfig.FINGER_ANGLE

        out.palmX = fit.cx / width
        out.palmY = fit.cy / height

        // Each finger is measured at its own canonical direction: a hand whose fingers touch
        // reads as one wide hump there, and every one of them still counts as out; a folded finger
        // does not reach past the palm at all. No hump-to-finger matching is needed.
        val assigned = FloatArray(5) { -1f }
        // A finger is drawn no longer than a finger can be: the profile follows the blob up to
        // PROFILE_REACH radii, and a blob that includes a sleeve or the arm would otherwise put a
        // spike through the picture instead of a finger on the hand.
        val maxFinger = r * LightHandConfig.MAX_FINGER_REACH
        assigned[0] = min(fit.reachAt(mid + spread * angle[0]), r * LightHandConfig.MAX_THUMB_REACH)
        for (i in 1..4) assigned[i] = min(fit.reachAt(mid + spread * angle[i]), maxFinger)
        var extended = 0
        for (i in 1..4) if (assigned[i] >= r * LightHandConfig.FINGER_REACH) extended++
        out.extended = extended
        for (i in 1..4) {
            if (assigned[i] < r * LightHandConfig.FINGER_REACH) assigned[i] = -1f
        }
        if (assigned[0] < r * LightHandConfig.THUMB_REACH) assigned[0] = -1f

        val px = FloatArray(21)
        val py = FloatArray(21)

        // 0: the wrist, on the narrow side of the palm.
        px[0] = fit.cx + cos(fit.wristAngle) * wristR
        py[0] = fit.cy + sin(fit.wristAngle) * wristR

        // 1..4: thumb, base of the palm out to the tip.
        val thumbAngle = mid + spread * angle[0]
        val thumbReach = if (assigned[0] > 0f) min(maxOf(assigned[0], r * 0.95f), r * LightHandConfig.MAX_THUMB_REACH)
            else r * 0.80f
        setPolar(fit, px, py, 1, thumbAngle, r * 0.45f)
        setPolar(fit, px, py, 2, thumbAngle, r * 0.85f)
        setPolar(fit, px, py, 3, thumbAngle, thumbReach * 0.72f)
        setPolar(fit, px, py, 4, thumbAngle, thumbReach)

        // 5..20: index, middle, ring, pinky.
        for (i in 1..4) {
            val a = mid + spread * angle[i]
            val base = 5 + (i - 1) * 4
            val reach = assigned[i]
            if (reach > 0f) {
                setPolar(fit, px, py, base, a, knuckle)
                setPolar(fit, px, py, base + 1, a, knuckle + (reach - knuckle) * 0.42f)
                setPolar(fit, px, py, base + 2, a, knuckle + (reach - knuckle) * 0.74f)
                setPolar(fit, px, py, base + 3, a, reach)
            } else {
                // Folded: the tip comes back over the palm, so every distance-based rule reads it
                // as curled (d(wrist, tip) < d(wrist, knuckle)).
                setPolar(fit, px, py, base, a, knuckle)
                setPolar(fit, px, py, base + 1, a, r * 0.95f)
                setPolar(fit, px, py, base + 2, a, r * 0.60f)
                setPolar(fit, px, py, base + 3, a, r * 0.42f)
            }
        }

        // A measured pinch closes the loop on the picture too.
        if (out.pinchGap < 0.45f) {
            val blend = ((0.45f - out.pinchGap) / 0.25f).coerceIn(0f, 1f) * 0.85f
            px[4] += (px[8] - px[4]) * blend
            py[4] += (py[8] - py[4]) * blend
            px[3] += (px[4] - px[3]) * blend * 0.5f
            py[3] += (py[4] - py[3]) * blend * 0.5f
        }

        val focal = width * LightHandConfig.FOCAL_PER_WIDTH
        val distance = if (fit.palmPx > 1f) {
            (focal * LightHandConfig.PALM_METRES / fit.palmPx)
                .coerceIn(LightHandConfig.MIN_DISTANCE, LightHandConfig.MAX_DISTANCE)
        } else {
            LightHandConfig.MAX_DISTANCE
        }
        out.distance = distance
        out.palmWidth = fit.palmPx / width
        for (i in 0 until 21) {
            val u = px[i] / width
            val v = py[i] / height
            out.image[i * 3] = u
            out.image[i * 3 + 1] = v
            out.image[i * 3 + 2] = 0f
            out.world[i * 3] = (u - 0.5f) * 2f * scaleX * distance
            out.world[i * 3 + 1] = (0.5f - v) * 2f * scaleY * distance
            out.world[i * 3 + 2] = 0f
        }
    }

    private fun setPolar(fit: PalmFit, xs: FloatArray, ys: FloatArray, index: Int, angle: Float, radius: Float) {
        xs[index] = fit.cx + cos(angle) * radius
        ys[index] = fit.cy + sin(angle) * radius
    }
}

package com.nextvr.lighttrack

import kotlin.math.PI
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.min
import kotlin.math.sin

/**
 * The palm of one hand blob: where it is, how big it is, and how far the fingers stick out.
 *
 * The palm is found as the LARGEST INSCRIBED DISC of the blob (a chamfer distance transform, two
 * passes, no allocation). Fingers are thin and the wrist is narrow, so the biggest disc a hand
 * contains is inside its palm — that is the whole hand detector, and it needs neither a model nor a
 * set of candidate scales.
 *
 * From the disc centre the silhouette is then followed in 90 directions (4 degrees apart) to the
 * farthest blob pixel. That radial profile answers the three questions the gesture rules ask:
 *  - which way the fingers point ([fanAngle]): the weighted mean of the protrusions that are not
 *    the forearm;
 *  - which side the wrist is on ([wristAngle]): the forearm when it is in frame (its scan runs into
 *    the border), else straight away from the fingers;
 *  - how far each finger reaches ([reachAt]): sampled at the five canonical finger directions, so
 *    fingers that touch each other (one wide hump) still read as extended, and folded ones do not.
 *
 * Pinch is measured separately, from the HOLE the thumb and index make when they touch (see
 * [BlobFinder.holeArea]): a loop that appears in the silhouette is a pinch nobody can fake.
 */
class PalmFit {
    /** Palm disc centre, image pixels. */
    var cx = 0f
    var cy = 0f
    /** Inscribed disc radius, pixels. */
    var radius = 0f
    /** Palm width in pixels: index base to pinky base, 2.13 radii (see PALM_PER_RADIUS). */
    var palmPx = 0f
    /** Direction (radians, image space, y down) of the wrist: where landmark 0 goes. */
    var wristAngle = 0f
    /** Direction the fingers point. */
    var fanAngle = 0f
    /** How much of the blob's bounding box is skin: a fist is compact, an open hand is not. */
    var fill = 0f
    /** Farthest protrusion found, in pixels: 0 when the blob is a closed fist with no fingers out. */
    var maxReach = 0f

    private var dist = IntArray(0)
    private val reach = FloatArray(LightHandConfig.BINS)
    private val smooth = FloatArray(LightHandConfig.BINS)
    /** True where the scan left the picture while still on skin: the forearm, not a finger. */
    private val clipped = BooleanArray(LightHandConfig.BINS)

    /** Fits [blob]; false when it is too small or shapeless to be a hand. */
    fun fit(blobs: BlobFinder, blob: SkinBlob): Boolean {
        val bw = blob.bboxW
        val bh = blob.bboxH
        if (bw < 3 || bh < 3) return false
        val need = bw * bh
        if (dist.size < need) dist = IntArray(need)
        // Chamfer distance to the background, weighted 3 orthogonal / 4 diagonal (1/3 px units).
        val far = 1 shl 20
        for (y in 0 until bh) {
            val row = (blob.minY + y) * blobs.width + blob.minX
            for (x in 0 until bw) {
                dist[y * bw + x] = if (blobs.labels[row + x] == blob.id) far else 0
            }
        }
        for (y in 0 until bh) {
            for (x in 0 until bw) {
                val i = y * bw + x
                if (dist[i] == 0) continue
                var v = dist[i]
                if (x > 0) v = min(v, dist[i - 1] + 3)
                if (y > 0) {
                    v = min(v, dist[i - bw] + 3)
                    if (x > 0) v = min(v, dist[i - bw - 1] + 4)
                    if (x < bw - 1) v = min(v, dist[i - bw + 1] + 4)
                }
                dist[i] = v
            }
        }
        for (y in bh - 1 downTo 0) {
            for (x in bw - 1 downTo 0) {
                val i = y * bw + x
                if (dist[i] == 0) continue
                var v = dist[i]
                if (x < bw - 1) v = min(v, dist[i + 1] + 3)
                if (y < bh - 1) {
                    v = min(v, dist[i + bw] + 3)
                    if (x < bw - 1) v = min(v, dist[i + bw + 1] + 4)
                    if (x > 0) v = min(v, dist[i + bw - 1] + 4)
                }
                dist[i] = v
            }
        }
        var best = 0
        for (y in 0 until bh) {
            for (x in 0 until bw) {
                val d = dist[y * bw + x]
                if (d > best) best = d
            }
        }
        if (best <= 0) return false
        radius = best / 3f
        // The deepest point can sit on a knuckle ridge; the core of the disc is the palm proper.
        val floor = (best * LightHandConfig.DISC_CORE).toInt()
        var sumX = 0f
        var sumY = 0f
        var count = 0
        for (y in 0 until bh) {
            for (x in 0 until bw) {
                if (dist[y * bw + x] >= floor) {
                    sumX += x
                    sumY += y
                    count++
                }
            }
        }
        if (count == 0) return false
        cx = blob.minX + sumX / count
        cy = blob.minY + sumY / count
        palmPx = LightHandConfig.PALM_PER_RADIUS * radius
        fill = blob.area.toFloat() / (bw * bh)
        profile(blobs, blob)
        directions()
        return radius >= 2f
    }

    /** Farthest blob pixel along each of the 90 directions, in pixels from the centre. */
    private fun profile(blobs: BlobFinder, blob: SkinBlob) {
        val start = radius * 0.85f
        val end = radius * LightHandConfig.PROFILE_REACH
        val step = 0.75f
        val w = blobs.width
        val h = blobs.height
        maxReach = 0f
        for (b in 0 until LightHandConfig.BINS) {
            val a = b * (2f * PI.toFloat()) / LightHandConfig.BINS
            val dx = cos(a)
            val dy = sin(a)
            var last = 0f
            var edge = false
            var t = start
            while (t <= end) {
                val px = (cx + dx * t).toInt()
                val py = (cy + dy * t).toInt()
                if (px < 0 || py < 0 || px >= w || py >= h) {
                    edge = true
                    break
                }
                if (blobs.labels[py * w + px] == blob.id) last = t
                t += step
            }
            clipped[b] = edge && last > start
            reach[b] = last
            if (last > maxReach) maxReach = last
        }
        // ±2 bins of smoothing: a finger is ~4 bins wide at arm's length, a jagged chrome edge is 1.
        for (b in 0 until LightHandConfig.BINS) {
            var sum = 0f
            for (k in -2..2) sum += reach[index(b + k)]
            smooth[b] = sum / 5f
        }
    }

    /**
     * The wrist side, and the direction the fingers point.
     *
     * The wrist and the fingers are collinear with the forearm, so when the forearm is in the
     * picture (its scan leaves the frame) the hand's axis is simply its opposite — that is stable
     * whatever the fingers are doing, which matters for the pointing pose, where only one finger
     * sticks out and a "mean of the protrusions" would land on that one finger. Without the forearm
     * in frame the protrusions themselves are the best evidence there is.
     */
    private fun directions() {
        val threshold = radius * LightHandConfig.FINGER_REACH
        var armX = 0f
        var armY = 0f
        var armCount = 0
        for (b in 0 until LightHandConfig.BINS) {
            if (!clipped[b]) continue
            val a = angle(b)
            armX += cos(a)
            armY += sin(a)
            armCount++
        }
        if (armCount > 0) {
            wristAngle = atan2(armY, armX)
            fanAngle = wristAngle + PI.toFloat()
            return
        }
        // No forearm: the fingers are whatever sticks out past the palm.
        var fanX = 0f
        var fanY = 0f
        for (b in 0 until LightHandConfig.BINS) {
            val w = smooth[b] - threshold
            if (w <= 0f) continue
            val a = angle(b)
            fanX += cos(a) * w
            fanY += sin(a) * w
        }
        fanAngle = if (fanX == 0f && fanY == 0f) -PI.toFloat() / 2f else atan2(fanY, fanX)
        wristAngle = fanAngle + PI.toFloat()
    }

    private fun angle(bin: Int): Float = bin * (2f * PI.toFloat()) / LightHandConfig.BINS

    private fun index(bin: Int): Int {
        var b = bin % LightHandConfig.BINS
        if (b < 0) b += LightHandConfig.BINS
        return b
    }

    /**
     * Farthest silhouette point within ±12 degrees of [angle], in pixels (0 when it is empty).
     *
     * The window is wide enough that a splayed hand putting a canonical direction between two
     * fingers still finds one, and narrow enough that a folded finger does not borrow its
     * neighbour's reach: adjacent fingers are 16-25 degrees apart, folded ones are next to the
     * index that IS out, and the pointing pose has to tell those apart.
     */
    fun reachAt(angle: Float): Float {
        val bin = (angle / (2f * PI.toFloat()) * LightHandConfig.BINS).toInt()
        var best = 0f
        for (k in -3..3) {
            val r = reach[index(bin + k)]
            if (r > best) best = r
        }
        return best
    }

    /** Signed angle wrapped to (-PI, PI]. */
    fun wrap(angle: Float): Float {
        var a = angle
        val twoPi = 2f * PI.toFloat()
        while (a > PI.toFloat()) a -= twoPi
        while (a <= -PI.toFloat()) a += twoPi
        return a
    }
}

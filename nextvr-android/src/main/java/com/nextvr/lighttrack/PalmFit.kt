package com.nextvr.lighttrack

import kotlin.math.PI
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.hypot
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
 *  - which side the wrist is on ([wristAngle]): the ARM. A forearm is skin too, and it is usually
 *    the biggest thing in the picture, so it must be identified before anything else - it is the
 *    part of the blob that leaves the frame ([armAngle], read off the blob's contact with the
 *    picture border);
 *  - which way the fingers point ([fanAngle]): the weighted mean of the protrusions in the half
 *    plane OPPOSITE the arm. The arm is a long protrusion and used to drag the mean with it, which
 *    rotated the whole skeleton (the silhouette spun on the hand);
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
    /** Farthest protrusion found, in pixels (0 when the blob has no protrusion at all). */
    var maxReach = 0f
    /** Direction of the forearm, when it is in the picture. */
    var armAngle = 0f
    /** True when the blob leaves the picture, i.e. the forearm is in frame. */
    var hasArm = false
    /** How much of the blob touches the picture border, in pixels: a hand alone reads 0. */
    var armPixels = 0
    /** Longest uninterrupted run of blob pixels along one border, in pixels. */
    var armRun = 0
    /**
     * Narrow protrusions in the radial profile: how many fingers the silhouette really shows.
     *
     * A finger is a thin spike of skin — a run of at most a few tens of degrees past the palm. A
     * wardrobe, a wall or a sheet also has protrusions (corners), but they are broad arcs: this
     * count is 0 for them, and that is what stops the tracker publishing the room as a hand.
     */
    var humps = 0

    private var dist = IntArray(0)
    private val reach = FloatArray(LightHandConfig.BINS)
    private val smooth = FloatArray(LightHandConfig.BINS)
    private val above = BooleanArray(LightHandConfig.BINS)

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
                dist[y * bw + x] = when {
                    blobs.labels[row + x] != blob.id -> 0
                    // The bounding box is TIGHT, so a blob pixel on its border always has
                    // background beside it: the distance transform starts at one pixel there.
                    // Without this the "far" sentinel survived on the first row and column of a
                    // solid blob (a wardrobe, a door) and the largest distance - the palm radius -
                    // came back as thousands of pixels.
                    x == 0 || y == 0 || x == bw - 1 || y == bh - 1 -> 3
                    else -> far
                }
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
        arm(blobs, blob)
        profile(blobs, blob)
        directions()
        return radius >= 2f
    }

    /**
     * Where the blob leaves the picture: the forearm.
     *
     * A forearm is skin, it is usually the largest skin thing in the picture, and every pixel test
     * below treats it as part of the hand. What tells them apart is geometry the mask already has:
     * the arm goes OUT of the frame (a hand in front of a phone is fully visible, the arm behind it
     * is not). So the blob's contact with the picture border is the arm, and its direction is the
     * mean direction of those pixels from the palm. When nothing touches the border there is no arm
     * in frame and the fingers are all the evidence there is.
     */
    private fun arm(blobs: BlobFinder, blob: SkinBlob) {
        hasArm = false
        armPixels = 0
        armRun = 0
        val w = blobs.width
        val h = blobs.height
        var sx = 0f
        var sy = 0f
        var n = 0
        var far = 0f
        var longest = 0
        // Each edge of the picture the blob reaches: one contiguous run per row/column, and the
        // longest run of the four decides. Fingers touching the edge are several NARROW runs; a
        // forearm is one run at least as wide as the wrist.
        fun row(row: Int) {
            var run = 0
            var lastEnd = -2
            for (x in blob.minX..blob.maxX) {
                if (blobs.labels[row * w + x] != blob.id) continue
                if (x - 1 != lastEnd) run = 0
                run++
                lastEnd = x
                if (run > longest) longest = run
                val dx = x - cx
                val dy = row - cy
                sx += dx
                sy += dy
                n++
                far = maxOf(far, hypot(dx, dy))
            }
        }
        fun column(col: Int) {
            var run = 0
            var lastEnd = -2
            for (y in blob.minY..blob.maxY) {
                if (blobs.labels[y * w + col] != blob.id) continue
                if (y - 1 != lastEnd) run = 0
                run++
                lastEnd = y
                if (run > longest) longest = run
                val dx = col - cx
                val dy = y - cy
                sx += dx
                sy += dy
                n++
                far = maxOf(far, hypot(dx, dy))
            }
        }
        if (blob.minY == 0) row(0)
        if (blob.maxY == h - 1) row(h - 1)
        if (blob.minX == 0) column(0)
        if (blob.maxX == w - 1) column(w - 1)
        armPixels = n
        armRun = longest
        if (n < 3) return
        // A single narrow run is a fingertip grazing the edge; the arm is at least wrist-wide.
        if (longest < radius * 0.6f) return
        if (hypot(sx, sy) / n < radius * 1.2f) return
        if (far < radius * 1.4f) return
        armAngle = atan2(sy, sx)
        hasArm = true
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
            var t = start
            while (t <= end) {
                val px = (cx + dx * t).toInt()
                val py = (cy + dy * t).toInt()
                if (px < 0 || py < 0 || px >= w || py >= h) break
                if (blobs.labels[py * w + px] == blob.id) last = t
                t += step
            }
            reach[b] = last
            if (last > maxReach) maxReach = last
        }
        // ±2 bins of smoothing: a finger is ~4 bins wide at arm's length, a jagged chrome edge is 1.
        for (b in 0 until LightHandConfig.BINS) {
            var sum = 0f
            for (k in -2..2) sum += reach[index(b + k)]
            smooth[b] = sum / 5f
        }
        humps = countHumps(radius * LightHandConfig.FINGER_REACH)
    }

    /**
     * Narrow protrusions in the smoothed profile: [threshold] is passed by a finger and by a wall
     * alike, so the width of the run decides. Each run of bins still above the threshold that is
     * no wider than [LightHandConfig.MAX_HUMP_BINS] is one finger.
     */
    private fun countHumps(threshold: Float): Int {
        val bins = LightHandConfig.BINS
        // On the RAW profile: the ±2 bin smoothing deliberately bridges the gap between two
        // fingers that are held together, and it would equally bridge four splayed ones into a
        // single wide arc - the very shape this test has to tell apart from a wall.
        for (b in 0 until bins) above[b] = reach[b] >= threshold
        var found = 0
        for (b in 0 until bins) {
            if (!above[b] || above[index(b - 1)]) continue
            var len = 0
            var i = b
            while (len < bins && above[index(i)]) {
                len++
                i++
            }
            if (len <= LightHandConfig.MAX_HUMP_BINS) found++
        }
        return found
    }

    /**
     * 0..1: how much this blob looks like a hand rather than like the room.
     *
     * Chroma alone cannot tell a lit wall from a palm — the classic skin window matches beige
     * furniture — so the size of the palm, the width of the protrusions and the density of the
     * blob are what separate the two. A hand shows thin fingers; a wall shows a broad arc.
     */
    fun handiness(width: Int): Float {
        val share = if (width > 0) radius / width else 0f
        val size = when {
            share < LightHandConfig.MIN_PALM_RADIUS * .9f -> 0f
            share < LightHandConfig.MIN_PALM_RADIUS * 1.6f -> .6f
            share <= LightHandConfig.MAX_PALM_RADIUS -> 1f
            share <= LightHandConfig.MAX_PALM_RADIUS * 1.2f -> .4f
            else -> 0f
        }
        val fingers = when {
            humps >= 3 -> 1f
            humps == 2 -> .92f
            humps == 1 -> .74f
            // No finger out at all: only a closed hand, and only if it is dense enough to be one.
            fill >= LightHandConfig.FIST_FILL -> .58f
            else -> 0f
        }
        val density = when {
            fill < .28f -> .4f
            fill <= .90f -> 1f
            else -> .6f
        }
        return (.5f * fingers + .3f * size + .2f * density).coerceIn(0f, 1f)
    }

    /**
     * Which way the fingers point, and which way the wrist is.
     *
     * The protrusions are weighted by how far they reach past the palm, and CAP the reach so one
     * long protrusion cannot outvote the rest; when the arm is in frame its half of the circle is
     * left out entirely (see [arm]). Without that subtraction the mean sat between the fingers and
     * the forearm, which drew the whole hand rotated and made it swing as the arm moved.
     */
    private fun directions() {
        val threshold = radius * LightHandConfig.FINGER_REACH
        val cap = radius * 2.6f
        val axis = armAngle + PI.toFloat()
        var fx = 0f
        var fy = 0f
        for (b in 0 until LightHandConfig.BINS) {
            val a = angle(b)
            if (hasArm && cos(a - axis) <= 0f) continue
            val w = min(smooth[b], cap) - threshold
            if (w <= 0f) continue
            fx += cos(a) * w
            fy += sin(a) * w
        }
        fanAngle = when {
            fx != 0f || fy != 0f -> atan2(fy, fx)
            hasArm -> axis
            // A closed hand with no arm in frame: keep the last plausible orientation instead of
            // spinning to an arbitrary one.
            else -> -PI.toFloat() / 2f
        }
        wristAngle = if (hasArm) armAngle else fanAngle + PI.toFloat()
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

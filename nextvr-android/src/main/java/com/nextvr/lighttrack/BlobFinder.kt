package com.nextvr.lighttrack

/** One connected region of skin pixels, with the statistics the palm fit needs. */
class SkinBlob {
    var id = 0
    var area = 0
    var minX = 0
    var minY = 0
    var maxX = 0
    var maxY = 0
    var sumX = 0L
    var sumY = 0L
    var sumXX = 0L
    var sumYY = 0L
    var sumXY = 0L

    val cx: Float get() = if (area <= 0) 0f else sumX.toFloat() / area
    val cy: Float get() = if (area <= 0) 0f else sumY.toFloat() / area
    val bboxW: Int get() = maxX - minX + 1
    val bboxH: Int get() = maxY - minY + 1

    fun reset() {
        id = 0; area = 0; minX = Int.MAX_VALUE; minY = Int.MAX_VALUE
        maxX = -1; maxY = -1
        sumX = 0; sumY = 0; sumXX = 0; sumYY = 0; sumXY = 0
    }
}

/**
 * 4-connected component labelling of the skin mask, with per-component statistics and a label map
 * the palm fit can query.
 *
 * A flood fill with an explicit stack, not recursion: the stack is a preallocated IntArray and the
 * whole pass is one scan plus one visit per skin pixel, which is why a 240x180 mask costs a
 * fraction of a millisecond on the tracking thread. No allocation per frame.
 */
class BlobFinder(val width: Int, val height: Int) {
    /** 0 = background, otherwise the component id (1-based). */
    val labels = IntArray(width * height)
    /** Components found by the last [find], largest first, at most [LightHandConfig.MAX_HANDS]. */
    val blobs = ArrayList<SkinBlob>()

    private val stack = IntArray(width * height)
    private val pool = Array(LightHandConfig.MAX_COMPONENTS) { SkinBlob() }
    private var used = 0

    private var holeScratch = ByteArray(0)
    private var holeStack = IntArray(0)

    /** Result of the last [holeArea] call: enclosed background pixels and their centroid. */
    var holePixels = 0
        private set
    /** Centroid of the enclosed pixels, in image pixels; meaningless when [holePixels] is 0. */
    var holeX = 0f
        private set
    var holeY = 0f
        private set

    /**
     * Labels [mask] and fills [blobs] with the components of at least [minArea] pixels, largest
     * first.
     */
    fun find(mask: ByteArray, minArea: Int): Int {
        java.util.Arrays.fill(labels, 0)
        used = 0
        var nextId = 1
        val n = width * height
        for (start in 0 until n) {
            if (mask[start].toInt() == 0 || labels[start] != 0) continue
            val blob = takeBlob() ?: break
            blob.reset()
            blob.id = nextId
            nextId++
            var area = 0
            var minX = Int.MAX_VALUE
            var minY = Int.MAX_VALUE
            var maxX = -1
            var maxY = -1
            var sumX = 0L
            var sumY = 0L
            var sumXX = 0L
            var sumYY = 0L
            var sumXY = 0L
            var top = 0
            stack[top++] = start
            labels[start] = blob.id
            while (top > 0) {
                val i = stack[--top]
                val x = i % width
                val y = i / width
                area++
                sumX += x
                sumY += y
                sumXX += (x * x).toLong()
                sumYY += (y * y).toLong()
                sumXY += (x * y).toLong()
                if (x < minX) minX = x
                if (x > maxX) maxX = x
                if (y < minY) minY = y
                if (y > maxY) maxY = y
                if (x > 0) {
                    val j = i - 1
                    if (mask[j].toInt() != 0 && labels[j] == 0) { labels[j] = blob.id; stack[top++] = j }
                }
                if (x < width - 1) {
                    val j = i + 1
                    if (mask[j].toInt() != 0 && labels[j] == 0) { labels[j] = blob.id; stack[top++] = j }
                }
                if (y > 0) {
                    val j = i - width
                    if (mask[j].toInt() != 0 && labels[j] == 0) { labels[j] = blob.id; stack[top++] = j }
                }
                if (y < height - 1) {
                    val j = i + width
                    if (mask[j].toInt() != 0 && labels[j] == 0) { labels[j] = blob.id; stack[top++] = j }
                }
            }
            blob.area = area
            blob.minX = minX
            blob.minY = minY
            blob.maxX = maxX
            blob.maxY = maxY
            blob.sumX = sumX
            blob.sumY = sumY
            blob.sumXX = sumXX
            blob.sumYY = sumYY
            blob.sumXY = sumXY
        }

        blobs.clear()
        for (i in 0 until used) {
            val blob = pool[i]
            if (blob.area >= minArea) blobs.add(blob)
        }
        blobs.sortByDescending { it.area }
        while (blobs.size > LightHandConfig.MAX_HANDS) blobs.removeAt(blobs.size - 1)
        return blobs.size
    }

    private fun takeBlob(): SkinBlob? {
        if (used >= pool.size) return null
        return pool[used++]
    }

    /**
     * Area of background pixels enclosed by [blob] inside its bounding box — the hole a thumb and
     * index finger make when they touch.
     *
     * A flood fill of the box's background seeded from the box border, with two reusable scratch
     * buffers: the pixels the fill never reaches are enclosed by skin, i.e. a closed pinch loop.
     * One pass over the box, allocation-free in steady state.
     */
    fun holeArea(blob: SkinBlob): Int {
        holePixels = 0
        val bw = blob.bboxW
        val bh = blob.bboxH
        if (bw < 4 || bh < 4) return 0
        val need = bw * bh
        if (holeScratch.size < need) {
            holeScratch = ByteArray(need)
            holeStack = IntArray(need)
        }
        java.util.Arrays.fill(holeScratch, 0, need, 0.toByte())
        var top = 0
        for (x in 0 until bw) {
            top = seed(blob, x, 0, bw, bh, top)
            top = seed(blob, x, bh - 1, bw, bh, top)
        }
        for (y in 1 until bh - 1) {
            top = seed(blob, 0, y, bw, bh, top)
            top = seed(blob, bw - 1, y, bw, bh, top)
        }
        while (top > 0) {
            val i = holeStack[--top]
            val x = i % bw
            val y = i / bw
            if (x > 0) top = seed(blob, x - 1, y, bw, bh, top)
            if (x < bw - 1) top = seed(blob, x + 1, y, bw, bh, top)
            if (y > 0) top = seed(blob, x, y - 1, bw, bh, top)
            if (y < bh - 1) top = seed(blob, x, y + 1, bw, bh, top)
        }
        var hole = 0
        var sumX = 0L
        var sumY = 0L
        for (y in 0 until bh) {
            val row = (blob.minY + y) * width + blob.minX
            for (x in 0 until bw) {
                val inside = labels[row + x] == blob.id
                if (!inside && holeScratch[y * bw + x].toInt() == 0) {
                    hole++
                    sumX += x
                    sumY += y
                }
            }
        }
        holePixels = hole
        holeX = if (hole == 0) 0f else blob.minX + sumX.toFloat() / hole
        holeY = if (hole == 0) 0f else blob.minY + sumY.toFloat() / hole
        return hole
    }

    /** Pushes a box-local background pixel if it is neither skin nor flooded yet. */
    private fun seed(blob: SkinBlob, x: Int, y: Int, bw: Int, bh: Int, top: Int): Int {
        if (x < 0 || y < 0 || x >= bw || y >= bh) return top
        val i = y * bw + x
        if (holeScratch[i].toInt() != 0) return top
        if (labels[(blob.minY + y) * width + blob.minX + x] == blob.id) return top
        holeScratch[i] = 1
        holeStack[top] = i
        return top + 1
    }
}

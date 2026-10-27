package com.nextvr.lighttrack

/**
 * Skin segmentation of a [LightFrame], in chroma space, with a cheap morphological cleanup.
 *
 * Why chroma: skin is a compact cluster in Cb/Cr and that cluster barely moves with illumination,
 * while luma changes completely between a lamp, a window and the phone's own screen. One compare
 * per plane per pixel is all this costs; there is no model, no tensor and no inference call.
 *
 * Thresholds are the classic BT.601 skin window (slightly widened, since a phone camera in a dark
 * room delivers compressed chroma), plus a luma floor so black plastic and shadow are not skin.
 */
class SkinMask(val width: Int, val height: Int) {
    /** Raw skin test, one byte per pixel (0 or 1). */
    val mask = ByteArray(width * height)
    /** Majority-filtered mask: 3x3, at least 5 of 9 neighbours skin. */
    val clean = ByteArray(width * height)

    private val integral = IntArray((width + 1) * (height + 1))
    private var skin = 0

    /** Number of skin pixels found by the last [build] (raw test, before cleanup). */
    fun skinPixels(): Int = skin

    /** Segments [frame] and writes [mask] and [clean]. Returns the raw skin pixel count. */
    fun build(frame: LightFrame): Int {
        val n = width * height
        if (frame.y.size < n) return 0
        var count = 0
        for (i in 0 until n) {
            val luma = frame.y[i].toInt() and 0xff
            if (luma < LightHandConfig.MIN_LUMA) {
                mask[i] = 0
                continue
            }
            val cb = (frame.cb[i].toInt() and 0xff) - 128
            val cr = (frame.cr[i].toInt() and 0xff) - 128
            val isSkin = cb in LightHandConfig.CB_MIN..LightHandConfig.CB_MAX &&
                cr in LightHandConfig.CR_MIN..LightHandConfig.CR_MAX &&
                cb * cb + cr * cr >= LightHandConfig.MIN_CHROMA2
            mask[i] = if (isSkin) 1 else 0
            if (isSkin) count++
        }
        skin = count
        majority()
        return count
    }

    /**
     * 3x3 majority through an integral image: O(1) per pixel instead of nine neighbour reads, so
     * the cleanup stays far below the segmentation cost itself.
     */
    private fun majority() {
        val stride = width + 1
        for (x in 0..width) integral[x] = 0
        for (y in 0 until height) {
            var rowSum = 0
            val base = (y + 1) * stride
            val prev = y * stride
            integral[base] = 0
            for (x in 0 until width) {
                rowSum += mask[y * width + x].toInt()
                integral[base + x + 1] = integral[prev + x + 1] + rowSum
            }
        }
        for (y in 0 until height) {
            val y0 = if (y > 0) y - 1 else 0
            val y1 = if (y < height - 1) y + 1 else height - 1
            val r0 = y0 * stride
            val r1 = (y1 + 1) * stride
            for (x in 0 until width) {
                val x0 = if (x > 0) x else 0
                val x1 = if (x < width - 1) x + 1 else width - 1
                val sum = integral[r1 + x1 + 1] - integral[r1 + x0] - integral[r0 + x1 + 1] + integral[r0 + x0]
                var total = (x1 - x0 + 1) * (y1 - y0 + 1)
                if (total < 5) total = 5
                val need = (total * 5 + 8) / 9
                clean[y * width + x] = if (sum >= need) 1 else 0
            }
        }
    }
}

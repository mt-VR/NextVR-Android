package com.nextvr.lighttrack

/**
 * One analysis frame for the light tracker: a small YCbCr image at [width] x [height].
 *
 * The heavy tracker that used to ship here needed an ARGB bitmap per frame plus a 7.5 MB model and
 * a TFLite graph to interpret it. This frame is the whole input instead: the camera thread
 * resamples the Y/U/V planes straight into these three byte arrays (no Bitmap, no colour
 * conversion, no allocation per frame once the buffers exist) and the tracking thread segments it.
 *
 * The frame is *upright*: [YuvSkinSampler] applies the same quarter-turn the native ARGB pass does,
 * so a hand at the top of the picture is at the top of this image too.
 */
class LightFrame(@JvmField val width: Int, @JvmField val height: Int) {
    val y = ByteArray(width * height)
    val cb = ByteArray(width * height)
    val cr = ByteArray(width * height)

    /**
     * The fields below are read and written by the camera pipeline on the camera thread
     * (PassthroughCamera.java), so they are plain JVM fields instead of getter/setter pairs.
     */
    /** Camera timestamp in milliseconds (the time base of the One Euro filters upstream). */
    @JvmField var stampMs = 0L
    /** Sensor capture timestamp on the elapsedRealtime clock, or -1 when it is not comparable. */
    @JvmField var captureNs = -1L
    /** When the camera callback took the frame. */
    @JvmField var acquiredNs = 0L
    /** Camera generation the frame belongs to. */
    @JvmField var token = 0
    /** Lens mapping handed to the shell (see web/src/hands.js screenSpan). */
    @JvmField var scaleX = 1f
    @JvmField var scaleY = 1f

    fun sameSize(other: LightFrame?): Boolean = other != null && other.width == width && other.height == height
}

/**
 * Resamples a Camera2 YUV_420_888 frame into a [LightFrame], applying the quarter turn in the same
 * pass (write-index remap, exactly like the native ARGB conversion: 90 deg maps
 * (x,y) -> (x, h-1-y), 270 deg maps (x,y) -> (w-1-x, y)).
 *
 * Reading the planes here instead of a Bitmap saves the whole ARGB round trip on the camera
 * thread: a 240x180 analysis image costs ~43k luma reads and ~11k chroma reads, with zero
 * allocations once the [LightFrame] exists.
 */
object YuvSkinSampler {
    /**
     * Fills [out] from the camera planes. Returns false when the geometry cannot be used (the
     * caller then skips the frame instead of throwing inside the camera loop).
     *
     * [yPlane] must be positioned at the start of the plane's buffer; only absolute reads are used.
     */
    @JvmStatic fun fill(
        out: LightFrame,
        yPlane: java.nio.ByteBuffer,
        uPlane: java.nio.ByteBuffer,
        vPlane: java.nio.ByteBuffer,
        srcW: Int,
        srcH: Int,
        yRowStride: Int,
        uRowStride: Int,
        vRowStride: Int,
        uPixelStride: Int,
        vPixelStride: Int,
        rotation: Int,
    ): Boolean {
        if (srcW <= 0 || srcH <= 0 || out.width <= 0 || out.height <= 0) return false
        val rot = ((rotation % 360) + 360) % 360
        if (rot != 0 && rot != 90 && rot != 180 && rot != 270) return false
        val upW = if (rot == 90 || rot == 270) srcH else srcW
        val upH = if (rot == 90 || rot == 270) srcW else srcH
        if (upW <= 0 || upH <= 0) return false
        val yBuf = yPlane.duplicate()
        val uBuf = uPlane.duplicate()
        val vBuf = vPlane.duplicate()
        val yLimit = yBuf.capacity() - 1
        val uLimit = uBuf.capacity() - 1
        val vLimit = vBuf.capacity() - 1
        val ps = if (uPixelStride > 0) uPixelStride else 1
        val vps = if (vPixelStride > 0) vPixelStride else 1
        val w = out.width
        val h = out.height
        var di = 0
        for (dy in 0 until h) {
            // Destination row -> upright row -> sensor row.
            val uy = ((dy.toLong() * upH) / h).toInt().coerceIn(0, upH - 1)
            val sy = when (rot) {
                90 -> srcH - 1 - uy
                180 -> srcH - 1 - uy
                270 -> uy
                else -> uy
            }
            val chromaRowU = (sy shr 1) * uRowStride
            val chromaRowV = (sy shr 1) * vRowStride
            val lumaRow = sy * yRowStride
            for (dx in 0 until w) {
                val ux = ((dx.toLong() * upW) / w).toInt().coerceIn(0, upW - 1)
                val sx = when (rot) {
                    90 -> ux
                    180 -> srcW - 1 - ux
                    270 -> srcW - 1 - ux
                    else -> ux
                }
                val yIdx = lumaRow + sx
                out.y[di] = if (yIdx in 0..yLimit) yBuf.get(yIdx) else 16.toByte()
                val cIdx = (sx shr 1)
                val uIdx = chromaRowU + cIdx * ps
                val vIdx = chromaRowV + cIdx * vps
                out.cb[di] = if (uIdx in 0..uLimit) uBuf.get(uIdx) else 128.toByte()
                out.cr[di] = if (vIdx in 0..vLimit) vBuf.get(vIdx) else 128.toByte()
                di++
            }
        }
        return true
    }
}

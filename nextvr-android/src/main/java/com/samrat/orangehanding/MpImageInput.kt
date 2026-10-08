package com.samrat.orangehanding

import android.graphics.Bitmap
import com.google.mediapipe.framework.image.BitmapImageBuilder
import com.google.mediapipe.framework.image.MPImage

/**
 * MediaPipe 0.10.35 closes/recycles a BitmapImageBuilder's backing bitmap with MPImage.close().
 * Borrowed camera frames therefore need a copy; a uniquely-owned, per-inference bitmap can instead
 * be transferred directly to MediaPipe and avoids the otherwise redundant full input copy.
 */
internal object MpImageInput {
    fun copyOf(frame: Bitmap): MPImage {
        val owned = checkNotNull(frame.copy(Bitmap.Config.ARGB_8888, false))
        return takeOwnership(owned)
    }

    /** The caller must not read, reuse, or recycle [frame] after this transfer. */
    fun takeOwnership(frame: Bitmap): MPImage = try {
        BitmapImageBuilder(frame).build()
    } catch (error: Throwable) {
        if (!frame.isRecycled) frame.recycle()
        throw error
    }
}

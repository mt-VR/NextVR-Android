package com.samrat.orangehanding

import android.graphics.Bitmap
import com.google.mediapipe.framework.image.BitmapImageBuilder
import com.google.mediapipe.framework.image.MPImage

/** MPImage.close() recycles its backing bitmap in MediaPipe 0.10.35. FusionHands borrows the
 * camera worker's bitmap: YOLO/crops and a GPU -> CPU retry must still be able to read it.
 * Give MediaPipe an independently owned copy, never the caller's still-live frame.
 */
internal object MpImageInput {
    fun copyOf(frame: Bitmap): MPImage {
        val owned = checkNotNull(frame.copy(Bitmap.Config.ARGB_8888, false))
        return try { BitmapImageBuilder(owned).build() }
        catch(error: Throwable) { owned.recycle();throw error }
    }
}

package com.samrat.orangehanding

import android.graphics.Bitmap
import android.graphics.Color
import android.graphics.RectF
import com.google.mediapipe.framework.image.BitmapExtractor
import org.junit.Assert.*
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [28], manifest = Config.NONE)
class MpImageInputTest {
    @Test fun closingMediaPipeInputDoesNotRecycleFrameNeededForRescueOrRetry() {
        val frame=Bitmap.createBitmap(16,16,Bitmap.Config.ARGB_8888)
        frame.eraseColor(Color.RED)
        try {
            val image=MpImageInput.copyOf(frame)
            val owned=BitmapExtractor.extract(image)
            assertNotSame(frame,owned)
            image.close()
            assertTrue(owned.isRecycled) // Test the actual MediaPipe close contract, not a mock.
            assertFalse(frame.isRecycled)
            // Both downstream consumers used to receive the recycled bitmap.
            val yolo=Bitmap.createScaledBitmap(frame,8,8,true)
            assertEquals(Color.RED,yolo.getPixel(4,4));yolo.recycle()
            val crop=checkNotNull(Crops.square(frame,RectF(0f,0f,16f,16f),8))
            assertFalse(crop.bitmap.isRecycled);crop.bitmap.recycle()
            val cpuRetry=MpImageInput.copyOf(frame)
            assertEquals(Color.RED,BitmapExtractor.extract(cpuRetry).getPixel(4,4))
            cpuRetry.close();assertFalse(frame.isRecycled)
        } finally { frame.recycle() }
    }
}

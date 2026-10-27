package com.nextvr.handtrack

import android.graphics.Bitmap
import android.graphics.Color
import com.google.mediapipe.framework.image.BitmapExtractor
import org.junit.Assert.*
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [28], manifest = Config.NONE)
class MpImageInputTest {
    @Test fun reusableAnalysisBufferNeverAliasesTheOwnedInferenceImage() {
        val frame=Bitmap.createBitmap(16,16,Bitmap.Config.ARGB_8888)
        try {
            frame.eraseColor(Color.RED)
            val first=MpImageInput.copyOf(frame)
            frame.eraseColor(Color.BLUE)
            assertEquals(Color.RED,BitmapExtractor.extract(first).getPixel(4,4))
            first.close();assertFalse(frame.isRecycled)
            val next=MpImageInput.copyOf(frame)
            assertEquals(Color.BLUE,BitmapExtractor.extract(next).getPixel(4,4))
            next.close();assertFalse(frame.isRecycled)
        } finally { frame.recycle() }
    }

    @Test fun uniquelyOwnedAnalysisBitmapTransfersWithoutAnAliasCopy() {
        val frame=Bitmap.createBitmap(16,16,Bitmap.Config.ARGB_8888)
        frame.eraseColor(Color.GREEN)
        val image=MpImageInput.takeOwnership(frame)
        assertEquals(Color.GREEN,BitmapExtractor.extract(image).getPixel(4,4))
        image.close()
        assertTrue(frame.isRecycled)
    }

    @Test fun closingMediaPipeInputDoesNotRecycleTheBorrowedFrame() {
        // The borrowed analysis buffer must survive the inference that just read it: on a failed
        // owned inference the retry bitmap is derived from it, and Camera2 retries the frame on CPU.
        val frame=Bitmap.createBitmap(16,16,Bitmap.Config.ARGB_8888)
        frame.eraseColor(Color.RED)
        try {
            val image=MpImageInput.copyOf(frame)
            val owned=BitmapExtractor.extract(image)
            assertNotSame(frame,owned)
            image.close()
            assertTrue(owned.isRecycled) // Test the actual MediaPipe close contract, not a mock.
            assertFalse(frame.isRecycled)
            val cpuRetry=MpImageInput.copyOf(frame)
            assertEquals(Color.RED,BitmapExtractor.extract(cpuRetry).getPixel(4,4))
            cpuRetry.close();assertFalse(frame.isRecycled)
        } finally { frame.recycle() }
    }
}

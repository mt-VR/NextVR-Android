package com.samrat.orangehanding

import android.content.Context
import com.google.mediapipe.tasks.core.BaseOptions
import com.google.mediapipe.tasks.core.Delegate
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker

/**
 * One graph construction for both engines (A/B). The options are the PhoneXR ones, kept in a single
 * place so the comparison is fair: switching engines must not change the model, the running mode or
 * any threshold — only the pipeline around them.
 */
internal object HandModels {
    fun landmarker(context: Context, model: String, gpu: Boolean, mode: RunningMode,
        confidence: Float, numHands: Int): HandLandmarker {
        val base = BaseOptions.builder().setModelAssetPath(model)
            .setDelegate(if (gpu) Delegate.GPU else Delegate.CPU).build()
        val options = HandLandmarker.HandLandmarkerOptions.builder()
            .setBaseOptions(base)
            .setRunningMode(mode)
            .setNumHands(numHands)
            .setMinHandDetectionConfidence(confidence)
            .setMinHandPresenceConfidence(confidence)
            .setMinTrackingConfidence(.35f)
            .build()
        return HandLandmarker.createFromOptions(context, options)
    }
}

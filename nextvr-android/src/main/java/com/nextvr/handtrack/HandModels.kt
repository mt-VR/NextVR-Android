package com.nextvr.handtrack

import android.content.Context
import com.google.mediapipe.tasks.core.BaseOptions
import com.google.mediapipe.tasks.core.Delegate
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker

/**
 * The single place a landmarker graph is built, so the steady and hunting graphs of [HandTracker]
 * cannot drift apart in anything except the detection confidence that separates them: same model,
 * same running mode, same tracking confidence.
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

package com.nextvr.handtrack

import android.content.Context
import com.google.mediapipe.tasks.core.BaseOptions
import com.google.mediapipe.tasks.core.Delegate
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker

/**
 * The single place a landmarker graph is built, so the search and tracking graphs of [HandTracker]
 * cannot drift apart in anything except the two options that separate them: the number of hand
 * slots and the detection/presence confidence. Same model, same running mode, same tracking
 * confidence - and the same delegate, since both graphs are created for the delegate the camera
 * chose (see DelegateWatch).
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
            .setMinTrackingConfidence(.42f)
            .build()
        return HandLandmarker.createFromOptions(context, options)
    }
}

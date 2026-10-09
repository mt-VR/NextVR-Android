package com.samrat.orangehanding

import com.google.mediapipe.tasks.components.containers.Category
import com.google.mediapipe.tasks.components.containers.Landmark
import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult
import kotlin.math.hypot

/**
 * Decides whether a crop rescue that finished on its own thread still belongs in the current
 * primary result. The inference itself runs off the tracking thread (see [FusionHands]); this
 * object is pure, so the rules are unit-tested without a device.
 */
internal object RescueMerger {
    /** A hand found by the rescue landmarker on a crop, mapped back to full-frame coordinates. */
    class RescuedHand(
        val landmarks: List<NormalizedLandmark>,
        val world: List<Landmark>,
        val side: List<Category>,
        val width: Int,
        val height: Int,
        /** When the crop was taken (elapsedRealtime ms). Age is measured from here. */
        val atMs: Long,
    )

    /**
     * How long a finished rescue may still be merged. A crop describes where a hand WAS; beyond
     * this age it would lag behind the primary landmarks and make the hand jitter.
     */
    const val MAX_AGE_MS = 250L

    /**
     * [base] plus every fresh rescued hand that MediaPipe still has no hand for. Null when nothing
     * changes, so the caller returns the untouched primary result.
     */
    fun merge(
        base: HandLandmarkerResult,
        rescued: List<RescuedHand>,
        nowMs: Long,
        frameWidth: Int,
        frameHeight: Int,
    ): HandLandmarkerResult? {
        if (rescued.isEmpty() || base.landmarks().size >= 2) return null
        val landmarks = ArrayList(base.landmarks())
        val world = ArrayList(base.worldLandmarks())
        val sides = ArrayList(base.handedness())
        for (hand in rescued) {
            if (landmarks.size >= 2) break
            // Only merge rescues computed for this frame size, while still fresh.
            if (hand.width != frameWidth || hand.height != frameHeight) continue
            if (nowMs - hand.atMs > MAX_AGE_MS) continue
            // A wrist near a hand already present is that same hand: never double-count it.
            val covered = landmarks.any { found ->
                hypot(found[0].x() - hand.landmarks[0].x(), found[0].y() - hand.landmarks[0].y()) < .1f
            }
            if (covered) continue
            landmarks += hand.landmarks
            world += hand.world
            sides += hand.side
        }
        if (landmarks.size == base.landmarks().size) return null
        return FusionHands.Result(base.timestampMs(), landmarks, world, sides)
    }
}

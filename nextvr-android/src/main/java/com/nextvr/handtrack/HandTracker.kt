package com.nextvr.handtrack

import android.content.Context
import android.graphics.Bitmap
import com.google.mediapipe.tasks.vision.core.ImageProcessingOptions
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult

/**
 * The hand detector: one MediaPipe pipeline, written for NextVR. Nothing of the PhoneXR fork is
 * behind it — the vendored `com.samrat.orangehanding` package (FusionHands, YOLO11 wrist recovery,
 * rescue crops, hand-slot policy, recovery budget, crop merger) was REMOVED with it.
 *
 * What replaces that machinery:
 *
 *  - **One two-hand graph per frame.** `numHands = 2` in VIDEO mode, every frame. The fork's
 *    adaptive one/two-slot pair is gone: it saved inference time while a single hand was tracked by
 *    processing one hand slot, at the cost of an entire policy (slot decision, 150 ms second-hand
 *    probe, ROI history per graph) and of a second hand entering unseen until a probe. Here the
 *    second hand is found by the inference that is already running.
 *  - **A second, more sensitive graph instead of YOLO.** MediaPipe's palm detector misses small,
 *    blurred or edge-on hands. The fork answered with YOLO11-pose wrist detection plus a cropped
 *    landmarker on a low-priority thread (an 11.7 MB AGPL model, a second executor and a merge
 *    policy). This engine answers with the same model at a lower detection confidence
 *    ([HUNT_CONFIDENCE]): while NOTHING is tracked, the frame is processed by the hunting graph;
 *    the first hand found switches back to [STEADY_CONFIDENCE]. A hand that is visible at all is
 *    therefore looked for with a lower bar, and no second inference, no crop and no extra model are
 *    involved.
 *  - **No background work at all.** No YOLO thread, no rescue thread, no merge queue: the tracking
 *    thread runs the frame, and the post-processing ([com.nextvr.cardboard.hands.PhoneXrHands])
 *    is the only thing after it. On a phone that also means no CPU competing with the frame the
 *    user is waiting for.
 *
 * Cost of the trade: a tracked hand no longer gets the cheap single-slot path (the graph always
 * processes two hand slots), and the hunting graph re-acquires from a cold region-of-interest
 * history — which is precisely the situation it runs in (nothing tracked). Both are measurable in
 * the perf log, and the engine is deliberately small enough to be read end to end.
 */
class HandTracker @JvmOverloads constructor(
    context: Context,
    useGpu: Boolean = false,
    handModel: String = "hand_landmarker.task",
) : AutoCloseable {
    private val steady: HandLandmarker =
        HandModels.landmarker(context, handModel, useGpu, RunningMode.VIDEO, STEADY_CONFIDENCE, MAX_HANDS)
    private val hunt: HandLandmarker =
        HandModels.landmarker(context, handModel, useGpu, RunningMode.VIDEO, HUNT_CONFIDENCE, MAX_HANDS)
    private var lastTimestamp = -1L
    /** Consecutive frames with no hand in the result, and whether the hunting graph is the active one. */
    private var misses = 0
    private var hunting = false

    /** Detect without taking ownership; the caller keeps and reuses [bitmap]. */
    fun detect(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int = 0): HandLandmarkerResult =
        infer(bitmap, timestampMs, rotationDegrees, takeOwnership = false)

    /** Detect a unique per-frame bitmap and transfer it to MediaPipe (no extra pixel copy). */
    fun detectOwned(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int = 0): HandLandmarkerResult =
        infer(bitmap, timestampMs, rotationDegrees, takeOwnership = true)

    private fun infer(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int,
        takeOwnership: Boolean): HandLandmarkerResult {
        // MediaPipe VIDEO mode rejects a timestamp that does not advance.
        val stamp = maxOf(timestampMs, lastTimestamp + 1)
        lastTimestamp = stamp
        val image = if (takeOwnership) MpImageInput.takeOwnership(bitmap) else MpImageInput.copyOf(bitmap)
        try {
            val active = if (hunting) hunt else steady
            // The upright pipeline feeds rotation 0 every frame: the plain overload is the same graph
            // with an identity transform, without building ImageProcessingOptions per inference.
            val result = if (rotationDegrees == 0) active.detectForVideo(image, stamp)
                else active.detectForVideo(image,
                    ImageProcessingOptions.builder().setRotationDegrees(rotationDegrees).build(), stamp)
            if (result.landmarks().isEmpty()) {
                // Nothing tracked: look again with the lower bar, so a hand the strict graph cannot
                // see (far away, blurred, edge-on at the frame border) still gets acquired.
                if (++misses >= MISSES_BEFORE_HUNT) hunting = true
            } else {
                // A hand is on screen: back to the strict graph, whose region-of-interest history
                // keeps tracking it through the frames where a fresh detection would fail.
                misses = 0
                hunting = false
            }
            return result
        } catch (error: RuntimeException) {
            if (!takeOwnership) throw error
            // Preserve the frame only on a failed owned inference, so the camera can retry on CPU.
            val retry = bitmap.copy(Bitmap.Config.ARGB_8888, false) ?: throw error
            throw RetryableInferenceException(retry, error)
        } finally {
            // In owned mode this releases the unique analysis bitmap; borrowed mode releases only
            // MpImageInput's defensive copy.
            image.close()
        }
    }

    override fun close() {
        steady.close()
        hunt.close()
    }

    companion object {
        /** Both hands: the second one is found by the inference already running, no probe graph. */
        const val MAX_HANDS = 2
        /** The graph used while a hand is tracked: MediaPipe's default-quality threshold. */
        const val STEADY_CONFIDENCE = .45f
        /** The graph used while NOTHING is tracked: lower bar for a hard-to-see hand, still high
         * enough that noise is not promoted to a hand (the fork's crop rescue used .3 on a crop). */
        const val HUNT_CONFIDENCE = .25f
        /** ~0.2 s at 30 fps of no hands before the lower bar is used; the palm search of a new
         * session starts hunting almost immediately, a single dropped frame does not. */
        const val MISSES_BEFORE_HUNT = 6
    }
}

package com.samrat.orangehanding

import android.content.Context
import android.graphics.Bitmap
import com.google.mediapipe.tasks.vision.core.ImageProcessingOptions
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult

/**
 * Engine B of the A/B: MediaPipe alone, with NONE of the PhoneXR pipeline around it.
 *
 * One VIDEO graph, `numHands = 2`, one inference per frame: no [HandSlotPolicy] (nothing to decide
 * per frame), no YOLO wrist recovery, no rescue crops, no [RecoveryBudget], no delegate verdict —
 * and therefore no background CPU work competing with the frame the user is waiting for. What it
 * costs is the other half of the trade: every frame processes two hand slots, so it is the slower
 * and more predictable of the two, and a hand that the primary inference cannot see stays lost
 * until the next frame sees it (PhoneXR's rescue would hunt for it with a second landmarker).
 *
 * It exists to be COMPARED on the device (Configurações → Hand tracking → Motor de mãos): same
 * model, same thresholds ([HandModels]), same post-processing ([com.nextvr.cardboard.hands
 * .PhoneXrHands]), and the perf log tags every result with the engine that produced it.
 */
class DirectHands @JvmOverloads constructor(
    context: Context,
    useGpu: Boolean = false,
    handModel: String = "hand_landmarker.task",
) : HandEngine {
    private val landmarker: HandLandmarker =
        HandModels.landmarker(context, handModel, useGpu, RunningMode.VIDEO, .45f, 2)
    private var lastTimestamp = -1L
    private var frames = 0L

    /** No YOLO in this engine: a lost hand is only found again by the next primary inference. */
    override val fused = false

    /** The single graph always processes both hand slots. */
    override fun currentSlots() = 2

    /** Every frame here is a two-slot frame, so it is the `wide` half of the perf log. */
    override fun narrowFrames() = 0L

    override fun wideFrames() = frames

    override fun probes() = 0L

    override fun recoverySkips() = 0

    override fun resetSlots() {}

    override fun detect(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int) =
        infer(bitmap, timestampMs, rotationDegrees, takeOwnership = false)

    override fun detectOwned(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int) =
        infer(bitmap, timestampMs, rotationDegrees, takeOwnership = true)

    private fun infer(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int,
        takeOwnership: Boolean): HandLandmarkerResult {
        // MediaPipe VIDEO mode rejects a stamp that does not advance, the same way FusionHands guards it.
        val stamp = maxOf(timestampMs, lastTimestamp + 1)
        lastTimestamp = stamp
        val image = if (takeOwnership) MpImageInput.takeOwnership(bitmap) else MpImageInput.copyOf(bitmap)
        try {
            // The upright pipeline feeds rotation 0 every frame: the plain overload is the same graph
            // with an identity transform, without building ImageProcessingOptions per inference.
            val result = if (rotationDegrees == 0) landmarker.detectForVideo(image, stamp)
                else landmarker.detectForVideo(image,
                    ImageProcessingOptions.builder().setRotationDegrees(rotationDegrees).build(), stamp)
            frames++
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

    override fun close() = landmarker.close()
}

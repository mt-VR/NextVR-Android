package com.samrat.orangehanding

import android.graphics.Bitmap
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult

/**
 * The contract `PassthroughCamera` programs against, so the TWO hand-tracking engines can be
 * swapped at runtime and compared on the same device (Configurações → Hand tracking → Motor de mãos):
 *
 *  - [FusionHands] — PhoneXR's pipeline: one/two hand slots, YOLO wrist recovery and rescue crops;
 *  - [DirectHands] — the simple path: a single two-hand graph, no slots and no rescue.
 *
 * The post-processing is identical for both ([com.nextvr.cardboard.hands.PhoneXrHands] filters,
 * prediction and gestures), so an A/B run isolates the DETECTOR: the web layer cannot tell which
 * engine produced a frame, and the perf log tags each result with the engine it came from.
 */
interface HandEngine : AutoCloseable {
    /** The engine can still recover a lost hand (YOLO rescue available). */
    val fused: Boolean

    /** Hand slots the graph is currently processing (1 or 2), for the perf log. */
    fun currentSlots(): Int

    fun narrowFrames(): Long

    fun wideFrames(): Long

    /** Second-hand re-checks paid for while narrow (0 when the engine has no slots). */
    fun probes(): Long

    /** Recovery rounds shed because the primary inference was already the bottleneck. */
    fun recoverySkips(): Int

    /** Hand tracking is being paused: forget the slot decision. */
    fun resetSlots()

    /** Detect without taking ownership; the caller keeps and reuses [bitmap]. */
    fun detect(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int = 0): HandLandmarkerResult

    /** Detect a unique per-frame bitmap and transfer it to MediaPipe (no extra pixel copy). */
    fun detectOwned(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int = 0): HandLandmarkerResult

    /**
     * Neither engine's close() can actually fail: closing a landmarker and shutting the worker
     * executors down is local. The redeclaration matters for the JAVA caller — `AutoCloseable`
     * declares `close() throws Exception`, and Kotlin emits overrides WITHOUT the checked
     * exception, so `PassthroughCamera` can close the detector outside a try/catch (the rebuild
     * paths) instead of wrapping three harmless statements. Both engines narrow it the same way.
     */
    override fun close()
}

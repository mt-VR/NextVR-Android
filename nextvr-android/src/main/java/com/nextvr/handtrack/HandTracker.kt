package com.nextvr.handtrack

import android.content.Context
import android.graphics.Bitmap
import com.google.mediapipe.tasks.vision.core.ImageProcessingOptions
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult

/**
 * Two-hand VIDEO tracking with an adaptive one-hand fast path.
 *
 *  - **Search graph** ([wide]): two slots and a lower detection threshold. It finds either hand and
 *    can report both at once. It runs while searching, whenever tracking is lost, and continuously
 *    while two hands are present.
 *  - **Tracking graph** ([narrowGraph]): one slot and the stricter threshold. Once search finds
 *    exactly one hand, this graph handles the ordinary single-hand case. A two-slot probe runs
 *    every [PROBE_FRAMES] so a second hand is discovered promptly without paying the two-slot cost
 *    on every one-hand frame.
 *
 * The second-hand probe is a real two-hand frame, not a second always-on model or background task.
 * If it sees two hands, the wide graph stays active until the scene returns to one hand. The next
 * single-hand frame is handed back to the one-slot graph; a miss returns to search immediately.
 */
class HandTracker @JvmOverloads constructor(
    private val context: Context,
    private val useGpu: Boolean = false,
    private val handModel: String = "hand_landmarker.task",
) : AutoCloseable {
    /** Graphs built by this tracker, for the owner's delegate bookkeeping (see [graphGenerations]).
     *  Declared before [wide]: property initializers run in declaration order, and building a graph
     *  counts one. */
    private var generations = 0
    /** The graph of the search: two slots, lower bar. Always built (it is the graph that must be). */
    private val wide: HandLandmarker = build(SEARCH_CONFIDENCE, WIDE_HANDS)
    /** The one-slot graph. Pre-warmed at construction so switching to 1-hand tracking never stalls. */
    private var narrow: HandLandmarker? = build(TRACK_CONFIDENCE, NARROW_HANDS)
    private var lastTimestamp = -1L
    /** Pure slot/cadence policy, also covered by JVM tests without constructing MediaPipe. */
    private val slots = HandSlotPolicy(WIDE_HANDS, PROBE_MS, PROBE_FRAMES)
    /** Which graph processed the last frame, for the perf log. */
    private var lastFrameNarrow = false

    /** Detect without taking ownership; the caller keeps and reuses [bitmap]. */
    fun detect(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int = 0): HandLandmarkerResult =
        infer(bitmap, timestampMs, rotationDegrees, takeOwnership = false)

    /** Detect a unique per-frame bitmap and transfer it to MediaPipe (no extra pixel copy). */
    fun detectOwned(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int = 0): HandLandmarkerResult =
        infer(bitmap, timestampMs, rotationDegrees, takeOwnership = true)

    /** True when the last frame went through the one-slot graph (see [narrowGraph]). */
    fun narrowFrame(): Boolean = lastFrameNarrow

    /**
     * How many landmarker graphs this tracker has built. Each build's first results are the delegate
     * compiling shaders rather than steady state, so the owner re-arms its delegate bookkeeping
     * whenever this number changes (see DelegateWatch.rebuilt).
     */
    fun graphGenerations(): Int = generations

    private fun infer(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int,
        takeOwnership: Boolean): HandLandmarkerResult {
        // MediaPipe VIDEO mode rejects a timestamp that does not advance.
        val stamp = maxOf(timestampMs, lastTimestamp + 1)
        lastTimestamp = stamp
        val image = if (takeOwnership) MpImageInput.takeOwnership(bitmap) else MpImageInput.copyOf(bitmap)
        try {
            // The two-slot graph is also the live graph while both hands are present. With one
            // hand, a periodic two-slot probe keeps the other hand discoverable without taxing the
            // common single-hand tracking frames. The probe is bounded by processed frames as well
            // as by camera time: on a slow device the camera clock runs far ahead of the tracker,
            // and a camera-time probe alone would fire on every frame and never reach the one-slot
            // graph (the split's whole reason to exist).
            val searching = slots.useWide(stamp)
            val active = if (searching) wide else narrowGraph()
            // The upright pipeline feeds rotation 0 every frame: the plain overload is the same graph
            // with an identity transform, without building ImageProcessingOptions per inference.
            val result = if (rotationDegrees == 0) active.detectForVideo(image, stamp)
                else active.detectForVideo(image,
                    ImageProcessingOptions.builder().setRotationDegrees(rotationDegrees).build(), stamp)
            val hands = result.landmarks().size
            // What the NEXT frame should be. A search frame that found exactly one hand hands over to
            // the one-slot graph, which is where the 2.47x is; two hands keep the two-slot graph,
            // because tracking both of them is what the frame is then for. A tracking frame that
            // lost its hand goes straight back to the search graph - that graph's region-of-interest
            // history is the one that found the hand in the first place, and its lower bar is what
            // re-acquires a hand that is hard to see. A miss is not retried on the one-slot graph:
            // oscillating between the graphs would cost a detection frame on every switch and pay
            // two slots on half of them, which is worse than searching properly until the hand is
            // back (the hand being tracked keeps its silhouette through the miss either way, see
            // PhoneXrHands' prediction bridge).
            slots.onResult(searching, hands)
            lastFrameNarrow = !searching
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

    /**
     * The one-slot graph, created the first time it is needed. It is built on the calling thread -
     * the tracking thread that owns the landmarkers, which is also where the GPU delegate must be
     * created - and the frame that triggers the build is the first frame of the hand that was just
     * found by the search graph, so the hand is on screen while this happens.
     */
    private fun narrowGraph(): HandLandmarker {
        narrow?.let { return it }
        val graph = build(TRACK_CONFIDENCE, NARROW_HANDS)
        narrow = graph
        return graph
    }

    /** The single place a graph is created, so [generations] cannot miss one. */
    private fun build(confidence: Float, slots: Int): HandLandmarker {
        generations++
        return HandModels.landmarker(context, handModel, useGpu, RunningMode.VIDEO, confidence, slots)
    }

    override fun close() {
        wide.close()
        narrow?.close()
        narrow = null
    }

    companion object {
        /** Search graph can acquire and continuously report both hands. */
        const val WIDE_HANDS = 2
        /** The tracking graph's slots: the hand being tracked, and nothing else. */
        const val NARROW_HANDS = 1
        /** The graph used while a hand is tracked: MediaPipe's default-quality threshold. */
        const val TRACK_CONFIDENCE = .50f
        /** The graph used while NOTHING is tracked: lower bar for a hard-to-see hand, still high
         * enough that noise is not promoted to a hand (the fork's crop rescue used .3 on a crop). */
        const val SEARCH_CONFIDENCE = .38f
        /**
         * Find a second hand while keeping one-hand frames on the fast graph: at most one two-slot
         * frame in this many processed frames.
         *
         * Counted in frames, not milliseconds. The camera keeps producing frames while the tracker
         * is busy, so on a slow device the camera clock runs far ahead of the results: a probe
         * paced in camera time alone fires on EVERY processed frame there, the two-slot graph runs
         * on every frame, and the one-slot fast path - 2.47x cheaper for a single tracked hand -
         * never runs at all. Frames keep the two-slot share of the work bounded on every device.
         */
        const val PROBE_FRAMES = 4
        /** Camera-time interval a second-hand probe also has to respect. */
        const val PROBE_MS = 250L
    }
}

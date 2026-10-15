package com.nextvr.handtrack

import android.content.Context
import android.graphics.Bitmap
import com.google.mediapipe.tasks.vision.core.ImageProcessingOptions
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult

/**
 * The hand detector: two MediaPipe graphs for the two jobs a frame can have, chosen per frame from
 * what the last result found.
 *
 *  - **The search graph** ([wide]): what a frame is processed by while NOTHING is tracked. Two hand
 *    slots, because it has to be able to find either hand - and both at once - and the lower
 *    detection bar ([SEARCH_CONFIDENCE]), so a hand the strict graph cannot see (far away, blurred,
 *    edge-on at the frame border) is still acquired. This is the only graph that ever reports two
 *    hands.
 *  - **The tracking graph** ([narrowGraph], built on first need): what the frames are processed by
 *    once exactly one hand has been found. One hand slot, the strict bar ([TRACK_CONFIDENCE]), and
 *    the graph that holds the region-of-interest history of the hand being tracked.
 *
 * Why the split, and what it costs: `numHands = 2` makes the palm detector and the landmark stage
 * work two slots on EVERY frame, and that tax is paid on the frames of the common case - one hand
 * raised. Measured on the shipped model (tools/bench/hand_input_policy_bench.py, round 7): one
 * tracked hand costs **2.47x more** with two slots than with one (29.1 vs 11.8 ms mean, p95 35.7 vs
 * 14.3), while the palm search costs the same either way - an asymmetry an engine has to exploit
 * rather than ignore. Round 9 removed the adaptive policy together with the PhoneXR engine and ran
 * two slots on every frame, giving that saving back. The split is back, inside this engine and
 * without a second always-on graph: [wide] is the graph that used to be the hunting graph, and
 * [narrowGraph] is built the first time a hand is actually found.
 *
 * What a one-slot graph cannot do is see a SECOND hand, so a two-hand gesture would only start
 * working when the first hand left the frame. A search frame is therefore forced every [PROBE_MS]
 * while tracking, which is the cadence the earlier `HandSlotPolicy` engine used: at 30 fps that is
 * one two-slot frame in about four, and round 7's end-to-end simulator put the result of exactly
 * this policy at 31.7 -> 16.1 ms/frame with one hand raised (~2x cheaper, 75% of the frames on the
 * one-slot graph) while a second hand still appears within ~150 ms of entering the frame.
 *
 * No background work at all: no rescue thread, no second model, no crop. The tracking thread runs
 * the frame, and the post-processing ([com.nextvr.app.hands.PhoneXrHands]) is the only thing after
 * it - on a phone that also means no CPU competing with the frame the user is waiting for.
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
    /** The one-slot graph. Built the first time a hand is found; a session that only searches pays nothing. */
    private var narrow: HandLandmarker? = null
    private var lastTimestamp = -1L
    /** True while the last result carried a hand: the next frame is a tracking frame. */
    private var tracking = false
    /** Camera stamp of the last search frame, for the [PROBE_MS] cadence while tracking. */
    private var searchStamp = -1L
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
            val track = if (tracking) narrowGraph() else null
            // With a hand held, one frame in ~PROBE_MS is a search frame instead: that is what keeps
            // a second hand discoverable (a one-slot graph can never report one).
            val searching = track == null || searchStamp < 0L || stamp - searchStamp >= PROBE_MS
            val active = if (searching) wide else track!!
            if (searching) searchStamp = stamp
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
            tracking = if (searching) hands == 1 else hands > 0
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
        /** The search graph's slots: BOTH hands, because this is the only graph that can report two.
         *  It must stay at 2 - with a single slot a frame could never contain a second hand, so
         *  two-hand gestures only ever started working once the first hand left the frame. */
        const val WIDE_HANDS = 2
        /** The tracking graph's slots: the hand being tracked, and nothing else. */
        const val NARROW_HANDS = 1
        /** The graph used while a hand is tracked: MediaPipe's default-quality threshold. */
        const val TRACK_CONFIDENCE = .45f
        /** The graph used while NOTHING is tracked: lower bar for a hard-to-see hand, still high
         * enough that noise is not promoted to a hand (the fork's crop rescue used .3 on a crop). */
        const val SEARCH_CONFIDENCE = .25f
        /** One two-slot search frame while tracking, every this many milliseconds of camera time. */
        const val PROBE_MS = 500L
    }
}

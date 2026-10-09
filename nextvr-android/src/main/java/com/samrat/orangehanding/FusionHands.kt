package com.samrat.orangehanding

import android.content.Context
import android.graphics.Bitmap
import android.graphics.RectF
import com.google.mediapipe.framework.image.BitmapImageBuilder
import com.google.mediapipe.tasks.components.containers.Category
import com.google.mediapipe.tasks.components.containers.Landmark
import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import com.google.mediapipe.tasks.core.BaseOptions
import com.google.mediapipe.tasks.core.Delegate
import com.google.mediapipe.tasks.vision.core.ImageProcessingOptions
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult
import java.util.concurrent.RejectedExecutionException
import java.util.concurrent.atomic.AtomicBoolean
import kotlin.math.hypot
import kotlin.math.max

/**
 * Hands by MediaPipe, rescued by YOLO11. MediaPipe's palm detector misses small, blurred or
 * partly hidden hands; YOLO11-pose still sees the arm. When YOLO finds a wrist that MediaPipe has
 * no hand for, a square around that wrist (pushed along the forearm) is cut out, and a second
 * MediaPipe landmarker looks at that crop.
 *
 * Thread ownership (this is what keeps the primary rate up):
 *  - [detectInternal] runs on the caller's tracking thread and only does the PRIMARY VIDEO
 *    inference, cheap crop/copy work, and merging of already-finished rescues.
 *  - The rescue landmarker is a CPU inference of ~20 ms on a desktop-class CPU, and more on a
 *    phone. It runs on its own low-priority thread, one job in flight at a time (latest wins).
 *  - YOLO runs on its own executor, as before.
 * A rescued hand is merged into the next primary results while it is still fresh
 * ([RescueMerger.MAX_AGE_MS]); the result stamp is always the primary frame's capture stamp.
 *
 * The result is an ordinary [HandLandmarkerResult], so everything written for MediaPipe keeps working.
 */
class FusionHands(
    context: Context,
    useGpu: Boolean = false,
    handModel: String = "hand_landmarker.task",
    /** How often YOLO looks for lost hands, at most (it only runs while a hand is missing). */
    private val yoloEveryMs: Long = 250,
) : AutoCloseable {
    /** A unique input was consumed by a failed delegate; this copy is only made on that rare path. */
    class RetryableInferenceException(val retryBitmap: Bitmap, cause: RuntimeException) :
        RuntimeException("Hand inference failed; retry bitmap retained", cause)

    private val video: HandLandmarker = landmarker(context, handModel, useGpu, RunningMode.VIDEO, .45f)
    private val appContext = context.applicationContext
    private val model = handModel
    @Volatile private var yoloFailed = false
    private var yolo: Yolo11Pose? = null // Created/used/closed on the background YOLO executor.
    private val recoveryBudget = RecoveryBudget(yoloEveryMs)
    /** YOLO runs here, never on the tracking thread: hands come out as fast as MediaPipe alone. */
    private val yoloThread = java.util.concurrent.Executors.newSingleThreadExecutor { Thread(it, "PhoneXR YOLO11").apply { priority = Thread.MIN_PRIORITY } }
    private val yoloBusy = AtomicBoolean(false)
    /** The rescue landmarker runs here; it is a CPU inference and must not stall primary tracking. */
    private val rescueThread = java.util.concurrent.Executors.newSingleThreadExecutor { Thread(it, "PhoneXR Rescue").apply { priority = Thread.MIN_PRIORITY } }
    private val rescueBusy = AtomicBoolean(false)
    @Volatile private var rescueFailed = false
    private var rescue: HandLandmarker? = null // Created, used and closed on the rescue thread.
    /** Latest finished rescues (at most two), oldest first. Guarded by itself. */
    private val rescued = ArrayList<RescueMerger.RescuedHand>()
    /** Tracking-thread only: when the last crop was handed to the rescue thread (elapsedRealtime ms). */
    private var lastRescueStart = Long.MIN_VALUE / 2
    private var lastTimestamp = -1L
    /** Wrists YOLO saw most recently (x, y, elbow x, elbow y, physical left, person width) and when. */
    @Volatile private var wrists: List<FloatArray> = emptyList()
    @Volatile private var wristsAt = 0L

    /** Recovery is enabled (possibly still lazy-loading) unless the model failed. */
    val fused get() = !yoloFailed

    /** Detect without taking ownership; useful to callers that keep/reuse [bitmap]. */
    fun detect(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int = 0): HandLandmarkerResult =
        detectInternal(bitmap, timestampMs, rotationDegrees, takeOwnership = false)

    /** Detect a unique per-frame bitmap and transfer it to MediaPipe (no extra pixel copy). */
    fun detectOwned(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int = 0): HandLandmarkerResult =
        detectInternal(bitmap, timestampMs, rotationDegrees, takeOwnership = true)

    private fun detectInternal(bitmap: Bitmap, timestampMs: Long, rotationDegrees: Int,
        takeOwnership: Boolean): HandLandmarkerResult {
        val stamp = maxOf(timestampMs, lastTimestamp + 1)
        lastTimestamp = stamp
        val image = if (takeOwnership) MpImageInput.takeOwnership(bitmap) else MpImageInput.copyOf(bitmap)
        try {
            val options = ImageProcessingOptions.builder().setRotationDegrees(rotationDegrees).build()
            val base = video.detectForVideo(image, options, stamp)
            if (yoloFailed || rotationDegrees != 0) return base
            val now = android.os.SystemClock.elapsedRealtime()
            // Ask YOLO (in the background, on a small copy) where the wrists are, a few times a second.
            if (recoveryBudget.shouldRun(now, base.landmarks().size, yoloBusy.get()) && yoloBusy.compareAndSet(false, true)) {
                val copy = runCatching {
                    val w = 320
                    Bitmap.createBitmap(w, w * bitmap.height / bitmap.width, Bitmap.Config.ARGB_8888).also {
                        android.graphics.Canvas(it).drawBitmap(bitmap, null, android.graphics.Rect(0, 0, it.width, it.height), android.graphics.Paint(android.graphics.Paint.FILTER_BITMAP_FLAG))
                    }
                }.getOrNull()
                if (copy == null) yoloBusy.set(false)
                else yoloThread.execute {
                    val started = android.os.SystemClock.elapsedRealtime()
                    try {
                        if (yolo == null) yolo = Yolo11Pose(appContext, threads = 1)
                        wrists = findWrists(copy)
                        wristsAt = now // Age the sampled image, not the completion of a potentially slow inference.
                    } catch (error: Exception) {
                        yoloFailed = true; wrists = emptyList()
                        android.util.Log.w("NextVR-Hands", "YOLO recovery disabled after failure; primary tracking continues", error)
                    } finally {
                        recoveryBudget.completed(android.os.SystemClock.elapsedRealtime() - started)
                        copy.recycle()
                        yoloBusy.set(false)
                    }
                }
            }
            // Start a background rescue for a wrist MediaPipe still misses. Never blocks this thread.
            if (!rescueFailed && base.landmarks().size < 2) scheduleRescue(bitmap, base, now)
            // Merge rescues that finished in the meantime, while they are still fresh.
            val finished = synchronized(rescued) {
                rescued.removeAll { now - it.atMs > RescueMerger.MAX_AGE_MS }
                rescued.toList()
            }
            return RescueMerger.merge(base, finished, now, bitmap.width, bitmap.height) ?: base
        } catch (error: RuntimeException) {
            if (!takeOwnership) throw error
            // Preserve the frame only on a failed owned inference, so Camera2 can retry on CPU.
            val retry = bitmap.copy(Bitmap.Config.ARGB_8888, false) ?: throw error
            throw RetryableInferenceException(retry, error)
        } finally {
            // In owned mode this releases the unique analysis bitmap; borrowed mode releases only
            // MpImageInput's defensive copy. The crop above was taken before this point.
            image.close()
        }
    }

    private fun findWrists(bitmap: Bitmap): List<FloatArray> {
        val people = yolo?.detect(bitmap) ?: return emptyList()
        val out = ArrayList<FloatArray>()
        for (person in people.take(1)) {
            for ((wrist, elbow, left) in listOf(
                Triple(Yolo11Pose.LEFT_WRIST, Yolo11Pose.LEFT_ELBOW, true),
                Triple(Yolo11Pose.RIGHT_WRIST, Yolo11Pose.RIGHT_ELBOW, false),
            )) {
                if (person.confidence(wrist) < .45f) continue
                out += floatArrayOf(person.x(wrist), person.y(wrist), person.x(elbow), person.y(elbow), if (left) 1f else 0f,
                    person.width.coerceAtLeast(.05f))
            }
        }
        return out
    }

    /**
     * Crops the first fresh wrist that the primary result does not cover, and gives the crop to the
     * rescue thread. Only one rescue is in flight; a new one starts at most every [RESCUE_MIN_INTERVAL_MS].
     * The crop is a copy made here, so the frame bitmap can be recycled as soon as this call returns.
     */
    private fun scheduleRescue(frame: Bitmap, base: HandLandmarkerResult, now: Long) {
        val seen = wrists
        if (seen.isEmpty() || now - wristsAt > 500) return
        if (now - lastRescueStart < RESCUE_MIN_INTERVAL_MS) return
        if (!rescueBusy.compareAndSet(false, true)) return
        val missing = seen.firstOrNull { wrist ->
            base.landmarks().none { hand -> hypot(hand[0].x() - wrist[0], hand[0].y() - wrist[1]) < .1f }
        }
        val crop = missing?.let { cropAround(frame, it) }
        if (crop == null) { rescueBusy.set(false); return }
        lastRescueStart = now
        try {
            rescueThread.execute { runRescue(crop, frame.width, frame.height, now) }
        } catch (rejected: RejectedExecutionException) {
            crop.bitmap.recycle()
            rescueBusy.set(false)
        }
    }

    private fun cropAround(frame: Bitmap, wrist: FloatArray): Crops.Crop? {
        // The hand lies past the wrist, along the forearm.
        val fx = wrist[0] - wrist[2]
        val fy = wrist[1] - wrist[3]
        val cx = wrist[0] + fx * .45f
        val cy = wrist[1] + fy * .45f
        val forearm = hypot(fx * frame.width, fy * frame.height)
        val side = max(forearm * 1.6f, wrist[5] * frame.width * .45f).coerceIn(48f, max(frame.width, frame.height).toFloat())
        val box = RectF(cx * frame.width - side / 2, cy * frame.height - side / 2, cx * frame.width + side / 2, cy * frame.height + side / 2)
        return Crops.square(frame, box, 224)
    }

    /** Rescue thread: landmarks on the crop, mapped back to frame coordinates, kept for merging. */
    private fun runRescue(crop: Crops.Crop, width: Int, height: Int, requestedAtMs: Long) {
        try {
            val detector = rescue ?: landmarker(appContext, model, false, RunningMode.IMAGE, .3f).also { rescue = it }
            val image = BitmapImageBuilder(crop.bitmap).build()
            val result = try { detector.detect(image) } finally { image.close() } // closing recycles crop.bitmap
            val hand = result.landmarks().firstOrNull()
            if (hand != null) {
                val mapped = hand.map { p ->
                    val (x, y) = crop.toFrame(p.x(), p.y(), width, height)
                    NormalizedLandmark.create(x, y, p.z() * crop.side / width)
                }
                synchronized(rescued) {
                    rescued.add(RescueMerger.RescuedHand(mapped, result.worldLandmarks().first(),
                        result.handedness().first(), width, height, requestedAtMs))
                    while (rescued.size > 2) rescued.removeAt(0)
                }
            }
            com.nextvr.cardboard.PerfLog.rescueDone()
        } catch (error: Exception) {
            rescueFailed = true
            android.util.Log.w("NextVR-Hands", "Hand rescue disabled after failure; primary tracking continues", error)
        } finally {
            if (!crop.bitmap.isRecycled) crop.bitmap.recycle()
            rescueBusy.set(false)
        }
    }

    override fun close() {
        video.close()
        // Interpreter and landmarker destruction are queued after their last inference.
        yoloThread.execute { yolo?.close() }
        yoloThread.shutdown()
        rescueThread.execute { rescue?.close() }
        rescueThread.shutdown()
        synchronized(rescued) { rescued.clear() }
    }

    /** A MediaPipe result put together from the primary landmarker and finished rescues. */
    internal class Result(
        private val stamp: Long,
        private val hands: List<List<NormalizedLandmark>>,
        private val world: List<List<Landmark>>,
        private val sides: List<List<Category>>,
    ) : HandLandmarkerResult() {
        override fun timestampMs() = stamp
        override fun landmarks() = hands
        override fun worldLandmarks() = world
        override fun handedness() = sides
        override fun handednesses() = sides
    }

    companion object {
        /** Lower bound between two rescue crops; one primary frame at 30 fps. */
        private const val RESCUE_MIN_INTERVAL_MS = 33L

        private fun landmarker(context: Context, model: String, gpu: Boolean, mode: RunningMode, confidence: Float): HandLandmarker {
            val base = BaseOptions.builder().setModelAssetPath(model).setDelegate(if (gpu) Delegate.GPU else Delegate.CPU).build()
            val options = HandLandmarker.HandLandmarkerOptions.builder()
                .setBaseOptions(base)
                .setRunningMode(mode)
                .setNumHands(2)
                .setMinHandDetectionConfidence(confidence)
                .setMinHandPresenceConfidence(confidence)
                .setMinTrackingConfidence(.35f)
                .build()
            return HandLandmarker.createFromOptions(context, options)
        }
    }
}

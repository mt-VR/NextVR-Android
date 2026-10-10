package com.nextvr.cardboard.hands

import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult

/** Adapted from mt-VR/NextVR b878d8b VrHomeActivity.onHands/LandmarkSmoother.
 * Detection, smoothing, shapes, pinch and shoulder rays are native. The HTML shell only hit-tests
 * these rays against its own window geometry. No reference-prototype gesture heuristics remain.
 */
class PhoneXrHands {
    companion object { /** Prediction is only trusted within one normal tracking interval (~250 ms). */
        const val MAX_PREDICT_GAP_NS = 250_000_000L }
    data class Hand(val left: Boolean, val points: FloatArray, val head: FloatArray?,
                    val shape: HandGestures.Shape, val baseX: Float, val baseY: Float,
                    val aimX: Float, val aimY: Float, val pinching: Boolean, val grabX: Float, val grabY: Float)
    data class Frame @JvmOverloads constructor(val hands: List<Hand>, val timestampNs: Long,
        val completedNs: Long = timestampNs, val validForNs: Long = 500_000_000L,
        val frameAgeNs: Long = (completedNs - timestampNs).coerceAtLeast(0),
        val previous: Frame? = null) {
        fun isFresh(nowNs: Long) = nowNs >= completedNs && nowNs - completedNs <= validForNs
        // Presentation-only temporal prediction, the same idea Quest uses to keep hands fluid at
        // display rate while tracking runs slower (e.g. GPU contention with an open app's WebView):
        // extrapolate the last detection along its own velocity, at most one tracking interval.
        // At the detection instant it shows the detection exactly (zero added latency); gestures
        // (pinch/fist) always come from the newest detection and are never extrapolated.
        private var predictBucket = -1L
        private var predictCache: Frame? = null
        fun predicted(nowNs: Long): Frame {
            val bucket = nowNs / 2_000_000L
            if (bucket == predictBucket) return predictCache ?: this
            val result = predictedUncached(nowNs)
            predictBucket = bucket; predictCache = result
            return result
        }
        private fun predictedUncached(nowNs: Long): Frame {
            val prev = previous ?: return this
            if (hands.isEmpty() || prev.hands.isEmpty()) return this
            val gap = completedNs - prev.completedNs
            // Never extrapolate across a long gap: a hand reappearing after a dropout must show
            // up exactly where it was detected, not drift along a stale velocity.
            if (gap <= 0L || gap > MAX_PREDICT_GAP_NS) return this
            val dt = ((nowNs - completedNs).toDouble() / gap).toFloat().coerceIn(0f, 1f)
            if (dt <= 0f) return this
            val t = 1f + dt
            val byId = prev.hands.associateBy { it.left }
            val predicted = hands.map { h ->
                val p = byId[h.left] ?: return@map h
                Hand(h.left, lerp(p.points, h.points, t), lerpNullable(p.head, h.head, t), h.shape,
                    lerp(p.baseX, h.baseX, t), lerp(p.baseY, h.baseY, t),
                    lerp(p.aimX, h.aimX, t), lerp(p.aimY, h.aimY, t),
                    h.pinching, lerp(p.grabX, h.grabX, t), lerp(p.grabY, h.grabY, t))
            }
            return Frame(predicted, timestampNs, completedNs, validForNs, frameAgeNs)
        }
        private fun lerp(a: FloatArray, b: FloatArray, t: Float): FloatArray {
            if (a.size != b.size) return b
            val out = FloatArray(a.size)
            for (i in a.indices) out[i] = a[i] + (b[i] - a[i]) * t
            return out
        }
        // Named separately: FloatArray and FloatArray? erase to the same JVM type, so two lerp
        // overloads differing only in nullability would be a platform declaration clash.
        private fun lerpNullable(a: FloatArray?, b: FloatArray?, t: Float): FloatArray? =
            if (a == null || b == null) b else lerp(a, b, t)
        private fun lerp(a: Float, b: Float, t: Float) = a + (b - a) * t
        fun json(): String {
            // Hand-rolled instead of org.json: this runs on the TRACKING thread between two
            // inferences, and JSONArray(listOf(...)) boxes every one of the 63+63 floats per hand
            // into a Double plus an ArrayList - ~600 short-lived objects per frame at 30 Hz, which
            // is exactly the allocation that turns into a GC pause inside the tracking loop. The
            // text is the same JSON, with float (not double) digits, which is smaller for the WebView
            // to parse and far below the sub-pixel resolution of a landmark.
            val sb = StringBuilder(1024)
            sb.append("{\"hands\":[")
            for ((index, h) in hands.withIndex()) {
                if (index > 0) sb.append(',')
                sb.append("{\"id\":\"").append(if (h.left) "left" else "right").append('"')
                    .append(",\"left\":").append(h.left)
                    .append(",\"points\":")
                appendFloats(sb, h.points)
                sb.append(",\"head\":")
                val head = h.head
                if (head == null) sb.append("null") else appendFloats(sb, head)
                sb.append(",\"base\":[").append(h.baseX).append(',').append(h.baseY).append(']')
                    .append(",\"aim\":[").append(h.aimX).append(',').append(h.aimY).append(']')
                    .append(",\"pinching\":").append(h.pinching)
                    .append(",\"fist\":").append(h.shape.fist)
                    .append(",\"palm\":[").append(h.shape.palmX).append(',').append(h.shape.palmY).append(']')
                    .append(",\"grab\":[").append(h.grabX).append(',').append(h.grabY).append(']')
                    .append(",\"menuEligible\":").append(!h.shape.fist && (PalmMenuPose.eligible(head, h.left) || h.shape.palmToFace))
                    .append(",\"menuPoint\":[").append(h.shape.pinchX).append(',').append(h.shape.pinchY).append(']')
                    .append(",\"palmWidth\":").append(h.shape.palmWidth)
                    .append(",\"palmToFace\":").append(h.shape.palmToFace)
                    .append('}')
            }
            return sb.append("],\"timestampNs\":").append(timestampNs)
                .append(",\"validForMs\":").append(validForNs / 1_000_000L)
                .append(",\"inferenceMs\":").append(frameAgeNs.coerceAtLeast(0) / 1_000_000L)
                .append('}').toString()
        }

        private fun appendFloats(sb: StringBuilder, values: FloatArray): StringBuilder {
            sb.append('[')
            for (i in values.indices) {
                if (i > 0) sb.append(',')
                appendFinite(sb, values[i])
            }
            return sb.append(']')
        }

        /** Matches org.json, which writes null for a value a JSON consumer could not use. */
        private fun appendFinite(sb: StringBuilder, value: Float) {
            if (value.isFinite()) sb.append(value) else sb.append("null")
        }
    }
    private class State {
        val landmarks = Array(63) { i ->
            if(i % 3 == 2) HandGestures.OneEuro(minCutoff=.8f, beta=1.2f)
            else HandGestures.OneEuro(minCutoff=1.4f, beta=12f, deadZone=.0008f)
        }
        val x = HandGestures.OneEuro(minCutoff=.9f, beta=3f, deadZone=.0015f)
        val y = HandGestures.OneEuro(minCutoff=.9f, beta=3f, deadZone=.0015f)
        val pinch = HandGestures.PinchLatch()
        var fist = false
        val grabX = HandGestures.OneEuro(minCutoff=.6f,beta=1f)
        val grabY = HandGestures.OneEuro(minCutoff=.6f,beta=1f)
    }
    private val states = HashMap<Boolean, State>()
    private var previous: Frame? = null
    fun reset() { states.clear(); previous = null }
    @JvmOverloads fun process(result: HandLandmarkerResult, scaleX: Float, scaleY: Float,
        completedNs: Long = result.timestampMs() * 1_000_000L, frameAgeNs: Long? = null): Frame {
        // MediaPipe/filter time is the camera capture timestamp. It is deliberately kept separate
        // from elapsedRealtime, since Camera2 timestamps are not guaranteed to share that clock.
        val stamp = result.timestampMs() * 1_000_000L
        val present = HashSet<Boolean>()
        val seen = result.landmarks().mapIndexedNotNull { index, raw ->
            if(raw.size != 21) return@mapIndexedNotNull null
            // MediaPipe assumes mirrored selfie input. Our upright rear camera is NOT mirrored.
            val left = result.handednesses().getOrNull(index)?.firstOrNull()?.categoryName().equals("Right", true)
            present += left
            val state = states.getOrPut(left) { State() }
            val points = raw.mapIndexed { i,p -> NormalizedLandmark.create(
                state.landmarks[i*3].filter(p.x(),stamp), state.landmarks[i*3+1].filter(p.y(),stamp),
                state.landmarks[i*3+2].filter(p.z(),stamp)) }
            val imageShape = HandGestures.shape(points,left)
            val world = result.worldLandmarks().getOrNull(index)
            // The 2D gap can look open when the hand is rotated and the fingertips separate in
            // camera depth. Prefer MediaPipe's metric 3D thumb-index distance when available;
            // keep the filtered-image measurement as a safe fallback for results without world
            // landmarks. PinchLatch still provides close/open hysteresis for either measurement.
            val metricGap = world?.let { HandGestures.pinchGap3d(it) }?.takeIf { it.isFinite() }
            val shape = if (metricGap == null) imageShape else imageShape.copy(
                pinch = !imageShape.fist && metricGap < .35f,
                pinchStrength = ((.9f - metricGap) / .6f).coerceIn(0f, 1f),
                pinchGap = metricGap,
            )
            if(!shape.fist || !state.fist){state.grabX.reset();state.grabY.reset()}
            state.fist=shape.fist
            val head = world?.let { HandGestures.headPoints(points,it,scaleX,scaleY) }
            val bx = (shape.aimX-.5f)*2f*scaleX
            val by = (.5f-shape.aimY)*2f*scaleY
            val rightSide = head?.let { it[0]>0f } ?: (bx>0f)
            val shoulder = if(rightSide) .45f else -.45f
            Hand(left,FloatArray(63) { i -> when(i%3) { 0->points[i/3].x();1->points[i/3].y();else->points[i/3].z() } },
                head,shape,bx,by,state.x.filter(bx+(bx-shoulder)*.25f,stamp),
                state.y.filter(by+(by+1f)*.25f,stamp),state.pinch.update(shape),state.grabX.filter(shape.palmX,stamp),state.grabY.filter(shape.palmY,stamp))
        }
        states.keys.retainAll(present)
        // Capture time drives One Euro dt; expiry uses measured frame age on the elapsedRealtime
        // clock instead. Camera2 sensor timestamps may have a different epoch from that clock.
        val ageNs = (frameAgeNs ?: (completedNs - stamp)).coerceAtLeast(0)
        val validity = (ageNs.coerceAtMost(675_000_000L) * 2 + 150_000_000L)
            .coerceIn(500_000_000L, 1_500_000_000L)
        // Chain the previous detection so the renderer can predict positions to display time.
        // A frame without hands keeps the old chain (retention handles dropouts) but does not
        // replace it, so a reappearing hand never extrapolates across a long gap.
        // Prediction needs only the immediately preceding sample. Do not retain the whole session's
        // landmark history through Frame.previous (which would grow without bound at camera FPS).
        val prior = previous?.copy(previous = null)
        val frame = Frame(seen,stamp,completedNs,validity,ageNs,prior)
        if (seen.isNotEmpty()) previous = frame
        return frame
    }
}

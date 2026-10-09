package com.nextvr.cardboard.hands

import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult
import org.json.JSONArray
import org.json.JSONObject

/** Adapted from mt-VR/NextVR b878d8b VrHomeActivity.onHands/LandmarkSmoother.
 * Detection, smoothing, shapes, pinch and shoulder rays are native. The HTML shell only hit-tests
 * these rays against its own window geometry. No reference-prototype gesture heuristics remain.
 */
class PhoneXrHands {
    data class Hand(val left: Boolean, val points: FloatArray, val head: FloatArray?,
                    val shape: HandGestures.Shape, val baseX: Float, val baseY: Float,
                    val aimX: Float, val aimY: Float, val pinching: Boolean, val grabX: Float, val grabY: Float)
    data class Frame @JvmOverloads constructor(val hands: List<Hand>, val timestampNs: Long,
        val completedNs: Long = timestampNs, val validForNs: Long = 500_000_000L,
        val frameAgeNs: Long = (completedNs - timestampNs).coerceAtLeast(0)) {
        fun isFresh(nowNs: Long) = nowNs >= completedNs && nowNs - completedNs <= validForNs
        fun json(): String {
            val a = JSONArray()
            for (h in hands) a.put(JSONObject().put("id", if(h.left) "left" else "right")
                .put("left", h.left).put("points", JSONArray(h.points.toList()))
                .put("head", h.head?.let { JSONArray(it.toList()) } ?: JSONObject.NULL)
                .put("base", JSONArray(listOf(h.baseX, h.baseY))).put("aim", JSONArray(listOf(h.aimX, h.aimY)))
                .put("pinching", h.pinching).put("fist", h.shape.fist)
                .put("palm", JSONArray(listOf(h.shape.palmX, h.shape.palmY)))
                .put("grab", JSONArray(listOf(h.grabX,h.grabY)))
                .put("menuEligible", !h.shape.fist && (PalmMenuPose.eligible(h.head,h.left) || h.shape.palmToFace))
                .put("menuPoint", JSONArray(listOf(h.shape.pinchX,h.shape.pinchY)))
                .put("palmWidth", h.shape.palmWidth).put("palmToFace", h.shape.palmToFace))
            return JSONObject().put("hands", a).put("timestampNs", timestampNs)
                .put("validForMs", validForNs / 1_000_000L)
                .put("inferenceMs", frameAgeNs.coerceAtLeast(0) / 1_000_000L).toString()
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
    fun reset() = states.clear()
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
            val shape = HandGestures.shape(points,left)
            if(!shape.fist || !state.fist){state.grabX.reset();state.grabY.reset()}
            state.fist=shape.fist
            val head = result.worldLandmarks().getOrNull(index)?.let { HandGestures.headPoints(points,it,scaleX,scaleY) }
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
        return Frame(seen,stamp,completedNs,validity,ageNs)
    }
}

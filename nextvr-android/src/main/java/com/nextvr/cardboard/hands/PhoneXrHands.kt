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
                    val aimX: Float, val aimY: Float, val pinching: Boolean, val palmFacesEyes: Boolean)
    data class Frame(val hands: List<Hand>, val timestampNs: Long) {
        fun json(): String {
            val a = JSONArray()
            for (h in hands) a.put(JSONObject().put("id", if(h.left) "left" else "right")
                .put("left", h.left).put("points", JSONArray(h.points.toList()))
                .put("head", h.head?.let { JSONArray(it.toList()) } ?: JSONObject.NULL)
                .put("base", JSONArray(listOf(h.baseX, h.baseY))).put("aim", JSONArray(listOf(h.aimX, h.aimY)))
                .put("pinching", h.pinching).put("fist", h.shape.fist)
                .put("palm", JSONArray(listOf(h.shape.palmX, h.shape.palmY)))
                .put("palmWidth", h.shape.palmWidth).put("palmFacesEyes", h.palmFacesEyes))
            return JSONObject().put("hands", a).put("timestampNs", timestampNs).toString()
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
    }
    private val states = HashMap<Boolean, State>()
    fun reset() = states.clear()
    fun process(result: HandLandmarkerResult, scaleX: Float, scaleY: Float): Frame {
        val stamp = result.timestampMs() * 1_000_000L
        val present = HashSet<Boolean>()
        val seen = result.landmarks().mapIndexedNotNull { index, raw ->
            if(raw.size != 21) return@mapIndexedNotNull null
            // MediaPipe assumes mirrored selfie input. Our upright rear camera is NOT mirrored.
            val left = result.handedness()[index].first().categoryName().equals("Right", true)
            present += left
            val state = states.getOrPut(left) { State() }
            val points = raw.mapIndexed { i,p -> NormalizedLandmark.create(
                state.landmarks[i*3].filter(p.x(),stamp), state.landmarks[i*3+1].filter(p.y(),stamp),
                state.landmarks[i*3+2].filter(p.z(),stamp)) }
            val shape = HandGestures.shape(points,left)
            val head = result.worldLandmarks().getOrNull(index)?.let { HandGestures.headPoints(points,it,scaleX,scaleY) }
            val bx = (shape.aimX-.5f)*2f*scaleX
            val by = (.5f-shape.aimY)*2f*scaleY
            val rightSide = head?.let { it[0]>0f } ?: (bx>0f)
            val shoulder = if(rightSide) .45f else -.45f
            Hand(left,FloatArray(63) { i -> when(i%3) { 0->points[i/3].x();1->points[i/3].y();else->points[i/3].z() } },
                head,shape,bx,by,state.x.filter(bx+(bx-shoulder)*.25f,stamp),
                state.y.filter(by+(by+1f)*.25f,stamp),state.pinch.update(shape),facesEyes(head,left))
        }
        states.keys.retainAll(present)
        return Frame(seen,stamp)
    }
    private fun facesEyes(p: FloatArray?, left: Boolean): Boolean {
        p ?: return false
        fun v(i:Int)=floatArrayOf(p[i*3],p[i*3+1],p[i*3+2])
        val w=v(0); val index=v(5); val pinky=v(17); val m=v(9)
        val a=FloatArray(3){index[it]-w[it]}; val b=FloatArray(3){pinky[it]-w[it]}
        val sign=if(left)-1f else 1f
        val n=floatArrayOf(sign*(a[1]*b[2]-a[2]*b[1]),sign*(a[2]*b[0]-a[0]*b[2]),sign*(a[0]*b[1]-a[1]*b[0]))
        val c=FloatArray(3){(w[it]+m[it])/2}; val up=FloatArray(3){m[it]-w[it]}
        fun len(v:FloatArray)=kotlin.math.sqrt(v.sumOf { (it*it).toDouble() }.toFloat()).coerceAtLeast(1e-6f)
        val facing=-(n[0]*c[0]+n[1]*c[1]+n[2]*c[2])/(len(n)*len(c))
        return facing>.6f && up[1]/len(up)>.55f
    }
}

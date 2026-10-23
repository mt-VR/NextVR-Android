package com.nextvr.app

import android.opengl.GLES20
import android.os.SystemClock
import com.nextvr.app.hands.PhoneXrHands
import org.json.JSONArray
import org.json.JSONObject
import java.nio.ByteBuffer
import java.nio.ByteOrder
import kotlin.math.abs
import kotlin.math.hypot

/** PhoneXR VrHomeActivity b878d8b silhouette and pointer routines, retained below.
 * The old HTML skeleton/ring is not used. Stencil makes each translucent silhouette blend once.
 *
 * Smoothness/flicker rules:
 *  - the silhouette follows the per-display-frame predicted pose (Quest-style presentation
 *    prediction), rebuilt in place with pooled buffers — no stepping at the detection rate;
 *  - a stalled detector or a brief miss retains the last pose and fades it out at the end of
 *    the retention window instead of blinking the hand off and on while an app is open;
 *  - presses and ray lines come only from live tracking, never from a retained pose.
 */
class PhoneXrHandRenderer {
    /** Dark translucent hand silhouette with thin crisp white contour (fits snugly on the hand). */
    private companion object {
        const val HAND_FILL_R = .03f
        const val HAND_FILL_G = .03f
        const val HAND_FILL_B = .04f
        const val HAND_CONTOUR_R = .96f
        const val HAND_CONTOUR_G = .97f
        const val HAND_CONTOUR_B = 1f
        const val HAND_FILL_ALPHA = .35f
        const val HAND_OUTLINE_ALPHA = .70f
        const val HAND_PINCH_ALPHA = .94f
        const val POINTER_DROP_ALPHA = .82f
        const val POINTER_CLICK_ALPHA = .95f
        const val POINTER_RAY_ALPHA = .82f
        const val TOUCH_FILL_R = .24f
        const val TOUCH_FILL_G = .24f
        const val TOUCH_FILL_B = .25f
        const val IDLE_FILL_R = .18f
        const val IDLE_FILL_G = .18f
        const val IDLE_FILL_B = .19f
    }
    private val colorProgram=SpatialRenderer.link(
        "attribute vec3 aPosition; uniform mat4 uMatrix; varying vec2 vPos; void main(){gl_Position=uMatrix*vec4(aPosition,1.); vPos=aPosition.xy;}",
        "precision highp float; uniform vec4 uColor; uniform vec2 uWrist; uniform vec2 uKnuckle; uniform float uUseGrad; varying vec2 vPos; void main(){ if(uUseGrad<.5){ gl_FragColor=uColor; return; } vec2 axis=uWrist-uKnuckle; float t=dot(vPos-uKnuckle,axis)/max(dot(axis,axis),1e-6); if(uUseGrad>2.5){ float fade=1.-smoothstep(.92,1.06,t); vec3 skin=mix(uColor.rgb*1.05,uColor.rgb*.86,clamp(t*.75+.15,0.,1.)); float cuff=smoothstep(.76,.83,t); vec3 col=uUseGrad>3.5?mix(uColor.rgb,vec3(.09,.15,.42),cuff):mix(skin,vec3(.14,.23,.58),cuff); gl_FragColor=vec4(col,uColor.a*fade); return; } float fade=uUseGrad>1.5?(1.-smoothstep(.82,1.02,t)):(1.-smoothstep(.34,.86,t)); gl_FragColor=vec4(uColor.rgb,uColor.a*fade); }")
    private val matrixUniform=GLES20.glGetUniformLocation(colorProgram,"uMatrix")
    private val colorUniform=GLES20.glGetUniformLocation(colorProgram,"uColor")
    private val wristUniform=GLES20.glGetUniformLocation(colorProgram,"uWrist")
    private val knuckleUniform=GLES20.glGetUniformLocation(colorProgram,"uKnuckle")
    private val gradUniform=GLES20.glGetUniformLocation(colorProgram,"uUseGrad")
    private var targetsText:String?=null
    private var targets=JSONArray()
    private var vertexBuffer=ByteBuffer.allocateDirect(65536).order(ByteOrder.nativeOrder()).asFloatBuffer()
    private val position=GLES20.glGetAttribLocation(colorProgram,"aPosition")
    private lateinit var frame: PhoneXrHands.Frame
    private var handPoints=emptyList<FloatArray>()
    private var viewScaleX=1f
    private var viewScaleY=1f
    private val presentation=com.nextvr.app.hands.HandPresentation()
    fun resetPresentation() {
        presentation.reset()
        meshes=emptyList()
        meshPoints=emptyList()
    }
    /** Primitive builder: a hand mesh is tens of thousands of floats per result frame. */
    private class FloatBuilder(initialCapacity:Int) {
        var values=FloatArray(maxOf(3,initialCapacity)); private set
        var count=0; private set
        fun vertex(x:Float,y:Float,z:Float) {
            if(count+3>values.size)values=values.copyOf(maxOf(count+3,values.size*2))
            values[count++]=x;values[count++]=y;values[count++]=z
        }
        fun reset(){count=0}
        fun toFloatArray()=values.copyOf(count)
    }
    /** One pooled buffer per pass and hand; refilled in place on every shape change. */
    private class Mesh(initialCapacity:Int) {
        val vertices=FloatBuilder(initialCapacity)
        val color=FloatArray(4)
        val wrist=FloatArray(2)
        val knuckle=FloatArray(2)
        var touching=false
        var blueOutline=false
    }
    private val meshPool=ArrayList<Mesh>()
    private var meshes=emptyList<Mesh>()
    private var meshPoints=emptyList<FloatArray>()
    private var meshBuiltAt=0L
    private var meshScaleX=0f
    private var meshScaleY=0f
    private val hasStencil=true
    private var touching=false
    @Volatile var showPointer=false
    @Volatile var virtualEnv=false
    @Volatile var gameHandMode=false
    private val CURSOR_R=.016f
    private val RAY_SHOWN=.55f
    /** Normalized landmark delta that forces a mesh rebuild (~0.4 px at 640 px analysis width).
     * Any real motion rebuilds; the One Euro dead zone keeps a resting hand fully cached. */
    private val MESH_REBUILD_EPSILON=.0003f
    /** Even a slowly drifting hand refreshes its silhouette at least this often. */
    private val MESH_REBUILD_MAX_NS=35_000_000L
    private val RING_STEPS=40
    /** Reused per-frame scratch on the GL thread: the beam/ring path used to allocate a 720-float
     *  ring array plus ~30 small arrays per hand per eye per frame — GC churn exactly under load. */
    private val ringData=FloatArray(RING_STEPS*18)
    private val beamEnd=FloatArray(3)
    private val beamLine=FloatArray(7)
    private val acrossA=FloatArray(3)
    private val acrossB=FloatArray(3)
    private val quad=FloatArray(18)
    /** Scratch boundary polygon for the palm fan (x,y pairs), reused: the rebuild allocates nothing. */
    private val palmRing=FloatArray(40)
    /** Scratch sample points for the two wrist-border curves (x,y pairs; slot 0 is the start). */
    private val radialChain=FloatArray(16)
    private val ulnarChain=FloatArray(16)
    /** Samples along each wrist border, not counting the start point. */
    private val CHAIN_STEPS=4
    /** Wrist breadth as a fraction of palm breadth (MCP5 -> MCP17) - adult anthropometry. */
    private val WRIST_BREADTH=.44f
    /** The virtual (estimated) wrist, past landmark 0, as a fraction of knuckle->wrist length. */
    private val WRIST_EXTEND=.40f
    /** Fraction of the wrist half-width carried as a centre offset; the rest is chain radius. */
    private val STUB_TAPER=.50f
    /** How far each wrist border bows away from the palm axis (hypothenar / thenar flesh). */
    private val ULNAR_BULGE=.10f
    private val RADIAL_BULGE=.13f
    /** Radial (thumb-side) border handles. Deliberately unequal: a short handle at the wrist keeps
     * the lower half essentially straight, and the long one at the thumb end means the curve only
     * develops from about half the palm upwards - the real thenar shape, not a symmetric arc. */
    private val RAD_T_WRIST=.18f
    private val RAD_T_THUMB=.55f
    /** Web handle lengths as a fraction of the web span. They differ on purpose: a long handle at
     * the index end leaves the knuckle shallowly and a short one at the thumb end drops steeply
     * into the thumb - the asymmetric "slope" of a real first web space, not a symmetric arc. */
    private val WEB_T_THUMB=.24f
    private val WEB_T_INDEX=.46f
    /** Gradient begins here along the knuckle->virtual-wrist axis; it reaches zero at the wrist. */
    private val FADE_START=.46f

    /** Writes one Bezier sample into out[slot] as an x,y pair. */
    private fun cubicAt(out:FloatArray,slot:Int,
        x0:Float,y0:Float,x1:Float,y1:Float,x2:Float,y2:Float,x3:Float,y3:Float,t:Float) {
        val u=1f-t
        out[slot*2]=u*u*u*x0+3f*u*u*t*x1+3f*u*t*t*x2+t*t*t*x3
        out[slot*2+1]=u*u*u*y0+3f*u*u*t*y1+3f*u*t*t*y2+t*t*t*y3
    }

    /** Fills out[0..steps] with a bezier from p0 to p3 that bows toward (bdx,bdy). */
    private fun sampleChain(out:FloatArray,p0x:Float,p0y:Float,p3x:Float,p3y:Float,
        bdx:Float,bdy:Float,bulge:Float,steps:Int,t0:Float=1f/3f,t1:Float=1f/3f) {
        out[0]=p0x; out[1]=p0y
        val dx=p3x-p0x; val dy=p3y-p0y
        val d=hypot(dx,dy).coerceAtLeast(1e-4f)
        val ux=dx/d; val uy=dy/d
        val b=bulge*d
        val c1x=p0x+ux*d*t0+bdx*b; val c1y=p0y+uy*d*t0+bdy*b
        val c2x=p3x-ux*d*t1+bdx*b; val c2y=p3y-uy*d*t1+bdy*b
        for (s in 1..steps) cubicAt(out,s,p0x,p0y,c1x,c1y,c2x,c2y,p3x,p3y,s/steps.toFloat())
    }
    private val beamShape=FloatBuilder(96*3)

    fun draw(frame: PhoneXrHands.Frame,sx:Float,sy:Float,projection:FloatArray,view:FloatArray,targetsJson:String,showSilhouette:Boolean) {
        val now=SystemClock.elapsedRealtimeNanos()
        val visible=presentation.silhouette(frame,now)
        // Predict one shared two-hand pose for the silhouette and pointer pass. The per-hand
        // confidence travels with that hand, so a brief miss fades only the missing hand instead
        // of dimming its still-live neighbour.
        val visual=visible?.predicted(now)
        // Live tracking drives presses; a retained or motion-model-predicted pose is visual only.
        val live=frame.hands.isNotEmpty() && frame.isFresh(now)
        val fade=if(visible==null)0f else presentation.fade(visible,now)
        viewScaleX=sx;viewScaleY=sy
        if(targetsText!=targetsJson){
            targets=runCatching { JSONArray(targetsJson) }.getOrElse { JSONArray() }
            targetsText=targetsJson
        }
        GLES20.glUseProgram(colorProgram)
        GLES20.glUniformMatrix4fv(matrixUniform,1,false,projection,0)
        GLES20.glEnable(GLES20.GL_BLEND);GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA,GLES20.GL_ONE_MINUS_SRC_ALPHA)
        GLES20.glDisable(GLES20.GL_DEPTH_TEST)
        GLES20.glStencilMask(0xff);GLES20.glClearStencil(0);GLES20.glClear(GLES20.GL_STENCIL_BUFFER_BIT)
        if(showSilhouette && visual!=null) {
            this.frame=visual
            // Predicted to display time: the silhouette tracks the render rate even when the
            // detection rate drops (app open, GPU contention) — no stepping, no flicker.
            meshes=meshesFor(visual,sx,sy,now)
            for((idx, m) in meshes.withIndex()) {
                val hPose=visual.hands.getOrNull(idx/2)
                val hId=if(hPose?.left==true) "left" else "right"
                var tObj:JSONObject?=null
                for(i in 0 until targets.length()) { val o=targets.optJSONObject(i);if(o!=null&&o.optString("id")==hId){tObj=o;break} }
                m.touching = (hPose?.pinching == true) ||
                    (tObj?.optBoolean("touching") == true) ||
                    (tObj?.optBoolean("fingerHover") == true) ||
                    (tObj?.optBoolean("direct") == true) ||
                    (tObj?.optBoolean("down") == true) ||
                    (tObj?.optJSONArray("end") != null)
                m.blueOutline = (tObj?.optBoolean("blueOutline") == true)
            }
            drawHandSkeletons(position,fade)
        } else { meshes=emptyList();meshPoints=emptyList();meshPool.clear() }
        // Missing/stalled tracking keeps a short visual outline and cursor, never a held click.
        if(visual==null)return
        if(!showPointer) {
            for((hIdx, hand) in visual.hands.withIndex()) {
                val id=if(hand.left) "left" else "right"
                var target:JSONObject?=null
                for(i in 0 until targets.length()) { val o=targets.optJSONObject(i);if(o!=null&&o.optString("id")==id){target=o;break} }
                if(target?.optBoolean("hidden")==true) continue
                if(target?.optBoolean("fingerHover")==true) {
                    val pts=handPoints.getOrNull(hIdx) ?: hand.points
                    if(pts.size>=26) {
                        val hFade=fade*hand.confidence.coerceIn(0f,1f)
                        val fx=(pts[24]-.5f)*2f*sx
                        val fy=(.5f-pts[25])*2f*sy
                        GLES20.glUniform1f(gradUniform,0f)
                        GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA,GLES20.GL_ONE_MINUS_SRC_ALPHA)
                        GLES20.glUniform4f(colorUniform,HAND_CONTOUR_R,HAND_CONTOUR_G,HAND_CONTOUR_B,.94f*hFade)
                        ring3d(fx,fy,-1f,.022f,.0185f,position)
                    }
                }
            }
            GLES20.glDisable(GLES20.GL_STENCIL_TEST)
            GLES20.glBlendFunc(GLES20.GL_ONE,GLES20.GL_ONE_MINUS_SRC_ALPHA)
            return
        }
        // Beam positions are predicted to display time; pinch state is always the live one.
        for(hand in visual.hands) {
            val id=if(hand.left) "left" else "right"
            var target:JSONObject?=null
            for(i in 0 until targets.length()) { val o=targets.optJSONObject(i);if(o!=null&&o.optString("id")==id){target=o;break} }
            if(target?.optBoolean("hidden")==true) continue
            val noBeam=target?.optBoolean("noBeam")==true
            val fingerHover=target?.optBoolean("fingerHover")==true
            val direct=target?.optBoolean("direct")==true
            val hFade=fade*hand.confidence.coerceIn(0f,1f)
            if(fingerHover && hand.points.size>=26) {
                val fx=(hand.points[24]-.5f)*2f*sx
                val fy=(.5f-hand.points[25])*2f*sy
                GLES20.glUniform1f(gradUniform,0f)
                GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA,GLES20.GL_ONE_MINUS_SRC_ALPHA)
                GLES20.glUniform4f(colorUniform,HAND_CONTOUR_R,HAND_CONTOUR_G,HAND_CONTOUR_B,.94f*hFade)
                ring3d(fx,fy,-1f,.022f,.0185f,position)
            }
            // A predicted hand may keep the beam visible but can never press: no gesture is ever
            // triggered by the motion model, only by a live detection.
            val down=live && !hand.predicted && (target?.optBoolean("down") ?: hand.pinching)
            val end=target?.optJSONArray("end")
            val length=kotlin.math.sqrt(hand.aimX*hand.aimX+hand.aimY*hand.aimY+1f)
            val e=beamEnd
            if(end!=null && end.length()==3) {
                val wx=end.optDouble(0,Double.NaN).toFloat()
                val wy=end.optDouble(1,Double.NaN).toFloat()
                val wz=end.optDouble(2,Double.NaN).toFloat()
                // World -> this eye's space, matching the panel's view transformation. Without
                // this step the ring drifts in stereo even though the input hit-test was correct.
                val ex=view[0]*wx+view[4]*wy+view[8]*wz+view[12]
                val ey=view[1]*wx+view[5]*wy+view[9]*wz+view[13]
                val ez=view[2]*wx+view[6]*wy+view[10]*wz+view[14]
                val ew=view[3]*wx+view[7]*wy+view[11]*wz+view[15]
                if(ew>1e-4f && ez<-.05f) { e[0]=ex;e[1]=ey;e[2]=ez }
                else { e[0]=hand.aimX/length*1.2f;e[1]=hand.aimY/length*1.2f;e[2]=-1.2f/length }
            } else { e[0]=hand.aimX/length*1.2f;e[1]=hand.aimY/length*1.2f;e[2]=-1.2f/length }
            if(!e[0].isFinite()||!e[1].isFinite()||!e[2].isFinite()||e[2]>=-.05f)continue
            touching=direct && down
            val b=beamLine
            b[0]=if(direct)0f else hand.baseX;b[1]=if(direct)0f else hand.baseY;b[2]=if(direct)0f else -1f
            b[3]=e[0];b[4]=e[1];b[5]=e[2];b[6]=if(end!=null && !fingerHover)1f else 0f
            drawBeam(b,down,noBeam,position,hFade)
        }
        GLES20.glDisable(GLES20.GL_STENCIL_TEST)
        GLES20.glBlendFunc(GLES20.GL_ONE,GLES20.GL_ONE_MINUS_SRC_ALPHA)
    }
    /** Rebuild the hand meshes in place whenever the predicted pose moves. The tessellation
     * writes into pooled builders with zero per-frame allocation: a resting hand reuses the
     * exact same buffers and a moving hand rebuilds every display frame, so the silhouette
     * glides with the prediction instead of stepping at the detection rate. */
    private fun meshesFor(frame:PhoneXrHands.Frame,sx:Float,sy:Float,nowNs:Long):List<Mesh> {
        val points=frame.hands.map { hand ->
            val hId=if(hand.left) "left" else "right"
            var stickArr:JSONArray?=null
            for(i in 0 until targets.length()) {
                val o=targets.optJSONObject(i)
                if(o!=null && o.optString("id")==hId) { stickArr=o.optJSONArray("stick"); break }
            }
            val rawPts=hand.points
            if(stickArr!=null && stickArr.length()>=2 && rawPts.size>=26) {
                val sxRaw=stickArr.optDouble(0,Double.NaN).toFloat()
                val syRaw=stickArr.optDouble(1,Double.NaN).toFloat()
                if(sxRaw.isFinite() && syRaw.isFinite()) {
                    val copy=rawPts.copyOf()
                    val dx=(sxRaw-copy[24]).coerceIn(-.042f,.042f)
                    val dy=(syRaw-copy[25]).coerceIn(-.042f,.042f)
                    copy[24]+=dx*.70f; copy[25]+=dy*.70f
                    copy[21]+=dx*.42f; copy[22]+=dy*.42f
                    copy[18]+=dx*.18f; copy[19]+=dy*.18f
                    copy
                } else rawPts
            } else rawPts
        }
        val moved=points.size!=meshPoints.size || sx!=meshScaleX || sy!=meshScaleY || points.indices.any { i ->
            val a=points[i];val b=meshPoints[i];var j=0;var d=0f
            while(j<a.size) { val delta=abs(a[j]-b[j]);if(delta>d)d=delta;j++ }
            d>MESH_REBUILD_EPSILON
        }
        if(!moved && nowNs-meshBuiltAt<MESH_REBUILD_MAX_NS)return meshes
        handPoints=points;meshPoints=points;meshBuiltAt=nowNs;meshScaleX=sx;meshScaleY=sy
        buildHandMeshes()
        return meshes
    }
    private fun drawArray(data:FloatArray,mode:Int,position:Int)=drawArray(data,data.size,mode,position)
    private fun drawArray(builder:FloatBuilder,mode:Int,position:Int)=drawArray(builder.values,builder.count,mode,position)
    private fun drawArray(data:FloatArray,count:Int,mode:Int,position:Int) {
        if(vertexBuffer.capacity()<count)vertexBuffer=ByteBuffer.allocateDirect(count*8).order(ByteOrder.nativeOrder()).asFloatBuffer()
        val buffer=vertexBuffer
        buffer.clear();buffer.put(data,0,count);buffer.flip()
        GLES20.glEnableVertexAttribArray(position)
        GLES20.glVertexAttribPointer(position,3,GLES20.GL_FLOAT,false,0,buffer)
        GLES20.glDrawArrays(mode,0,count/3)
        GLES20.glDisableVertexAttribArray(position)
    }
private fun drawHandSkeletons(position: Int, fade: Float) {
        val color=colorUniform
        val isVirt=virtualEnv
        GLES20.glEnable(GLES20.GL_STENCIL_TEST)
        GLES20.glStencilMask(0xff)
        GLES20.glStencilFunc(GLES20.GL_GREATER,1,0xff)
        GLES20.glStencilOp(GLES20.GL_KEEP,GLES20.GL_KEEP,GLES20.GL_REPLACE)
        for(mesh in meshes) {
            GLES20.glUniform2f(wristUniform,mesh.wrist[0],mesh.wrist[1])
            GLES20.glUniform2f(knuckleUniform,mesh.knuckle[0],mesh.knuckle[1])
            val isOutline = mesh.color[0] > .5f
            if (isVirt) {
                GLES20.glUniform1f(gradUniform,if(isOutline) 4f else 3f)
                if (isOutline) {
                    val alpha = (if (mesh.touching) .96f else .92f) * fade
                    GLES20.glUniform4f(color,.66f*.94f,.48f*.94f,.36f*.94f,alpha)
                } else {
                    val alpha = (if (mesh.touching) .99f else .97f) * fade
                    GLES20.glUniform4f(color,.88f,.70f,.56f,alpha)
                }
            } else {
                GLES20.glUniform1f(gradUniform,if(isOutline) 2f else 1f)
                if (isOutline) {
                    val alpha = if (mesh.touching) .84f else mesh.color[3]
                    val cr = mesh.color[0]
                    val cg = mesh.color[1]
                    val cb = mesh.color[2]
                    GLES20.glUniform4f(color,cr,cg,cb,alpha*fade)
                } else {
                    val r = HAND_FILL_R
                    val g = HAND_FILL_G
                    val b = HAND_FILL_B
                    val alpha = if (mesh.touching) .42f else mesh.color[3]
                    GLES20.glUniform4f(color,r,g,b,alpha*fade)
                }
            }
            drawArray(mesh.vertices,GLES20.GL_TRIANGLES,position)
        }
        GLES20.glDisable(GLES20.GL_STENCIL_TEST)
    }

    // Same PhoneXR tessellation and colors, refilled in place per detection, not per eye/frame.
    private fun buildHandMeshes() {
            val hands = handPoints
            val result=ArrayList<Mesh>()
            var used=0
            fun mesh(): Mesh {
                val m=if(used<meshPool.size)meshPool[used] else Mesh(8192).also{meshPool.add(it)}
                used++
                m.vertices.reset()
                return m
            }
            for ((handIndex, hand) in hands.withIndex()) {
                val handPose = frame.hands.getOrNull(handIndex)
                val pinching = handPose?.pinching == true
                val handConfidence = (handPose?.confidence ?: 1f).coerceIn(0f, 1f)
                fun x(i: Int) = (hand[i * 3] - .5f) * 2f * viewScaleX
                fun y(i: Int) = (.5f - hand[i * 3 + 1]) * 2f * viewScaleY
                val palm = hypot(x(9) - x(0), y(9) - y(0))
                if (palm < 1e-4f) continue
                val r = palm * .12f
                val edge = if (pinching) maxOf(palm * .022f, .002f) else maxOf(palm * .012f, .0014f)
                // Gradient axis = palm knuckles -> the VIRTUAL (estimated) wrist, not the landmark.
                // MediaPipe gives a wrist point but no forearm, so the silhouette is carried a
                // little past landmark 0 along the palm axis and dissolves there: the hand stays
                // solid across the whole palm and the fade lands on an estimated wrist. The axis
                // is hand-local, so it rotates with the hand instead of dragging a fixed point
                // around when the wrist bends.
                val kcx = (x(5) + x(9) + x(13) + x(17)) / 4f
                val kcy = (y(5) + y(9) + y(13) + y(17)) / 4f
                // Palm axis (knuckles -> forearm) and its perpendicular, signed towards the thumb.
                var axX = x(0) - kcx; var axY = y(0) - kcy
                val axL = hypot(axX, axY).coerceAtLeast(1e-4f)
                axX /= axL; axY /= axL
                var nx = -axY; var ny = axX
                if ((x(1) - x(0)) * nx + (y(1) - y(0)) * ny < 0f) { nx = -nx; ny = -ny }
                // Virtual wrist cross-section; wrist breadth is ~0.55 of palm breadth.
                val wristHalf = .5f * WRIST_BREADTH * maxOf(hypot(x(17) - x(5), y(17) - y(5)), palm * .48f)
                val virtX = x(0) + axX * axL * WRIST_EXTEND
                val virtY = y(0) + axY * axL * WRIST_EXTEND
                val eh = wristHalf * STUB_TAPER
                val ueX = virtX - nx * eh; val ueY = virtY - ny * eh
                val reX = virtX + nx * eh; val reY = virtY + ny * eh
                // The two wrist borders, sampled once per hand (they do not depend on the pass).
                // They are curves, not landmark chords: a straight chord from the pinky MCP to the
                // wrist left the pinky-side flesh uncovered, and that chord's grown outline then
                // crossed the grown border and printed a visible step.
                sampleChain(ulnarChain, x(17), y(17), ueX, ueY, -nx, -ny, ULNAR_BULGE, CHAIN_STEPS)
                sampleChain(radialChain, reX, reY, x(1), y(1), nx, ny, RADIAL_BULGE, CHAIN_STEPS,
                    RAD_T_WRIST, RAD_T_THUMB)
                // Boundary polygon: it follows the SAME samples as the border capsules, so the fan
                // reaches exactly their centreline. The capsules then add the flesh outside it and
                // their grown ring becomes the contour - nothing uncovered, nothing drawn twice.
                var pn = 0
                palmRing[0] = reX; palmRing[1] = reY; pn = 1
                for (s in 1..CHAIN_STEPS) {
                    palmRing[pn * 2] = radialChain[s * 2]
                    palmRing[pn * 2 + 1] = radialChain[s * 2 + 1]
                    pn++
                }
                palmRing[pn * 2] = x(2); palmRing[pn * 2 + 1] = y(2); pn++
                // Thumb web: thumb MCP -> index MCP, tangent-continuous at both ends so the
                // notch is a smooth scoop instead of the hard V one straight edge produced, and
                // asymmetric so it leaves the index shallowly and steepens into the thumb.
                val w0x = x(2); val w0y = y(2); val w3x = x(5); val w3y = y(5)
                val wd = hypot(w3x - w0x, w3y - w0y).coerceAtLeast(1e-4f)
                var tix = w0x - x(1); var tiy = w0y - y(1)
                var til = hypot(tix, tiy).coerceAtLeast(1e-4f)
                tix /= til; tiy /= til
                var tox = x(9) - w3x; var toy = y(9) - w3y
                var tol = hypot(tox, toy).coerceAtLeast(1e-4f)
                tox /= tol; toy /= tol
                for (s in 0 until 2) {
                    val t = (s + 1) / 3f
                    cubicAt(palmRing, pn, w0x, w0y,
                        w0x + tix * wd * WEB_T_THUMB, w0y + tiy * wd * WEB_T_THUMB,
                        w3x - tox * wd * WEB_T_INDEX, w3y - toy * wd * WEB_T_INDEX, w3x, w3y, t)
                    pn++
                }
                for (i in intArrayOf(5, 9, 13, 17)) {
                    palmRing[pn * 2] = x(i); palmRing[pn * 2 + 1] = y(i); pn++
                }
                for (s in 1..CHAIN_STEPS) {
                    palmRing[pn * 2] = ulnarChain[s * 2]
                    palmRing[pn * 2 + 1] = ulnarChain[s * 2 + 1]
                    pn++
                }
                // With a stencil: fill first (it marks its pixels), then the outline only where the
                // fill is not. Without one: the outline first and the solid fill over it.
                for (pass in 0..1) {
                    val outline = if (hasStencil) pass == 1 else pass == 0
                    val grow = if (outline) edge else 0f
                    val m = mesh()
                    val shape = m.vertices
                    fun disc(i: Int, radius: Float) = handDisc(shape, x(i), y(i), radius + grow)
                    fun bone(i: Int, j: Int, ri: Float, rj: Float) {
                        handBone(shape, x(i), y(i), x(j), y(j), ri + grow, rj + grow)
                        disc(i, ri); disc(j, rj)
                    }
                    // A tapered capsule chain along precomputed samples: flesh AND contour from one
                    // shape, so a border can never be filled by one and outlined by another.
                    fun chain(pts: FloatArray, ra: Float, rb: Float) {
                        var px = pts[0]; var py = pts[1]
                        for (k in 1..CHAIN_STEPS) {
                            val qx = pts[k * 2]; val qy = pts[k * 2 + 1]
                            val rr = ra + (rb - ra) * (k / CHAIN_STEPS.toFloat()) + grow
                            handBone(shape, px, py, qx, qy, rr, rr)
                            if (k < CHAIN_STEPS) handDisc(shape, qx, qy, rr)
                            px = qx; py = qy
                        }
                    }
                    val cx = (x(0) + x(1) + x(2) + x(5) + x(9) + x(13) + x(17)) / 7f
                    val cy = (y(0) + y(1) + y(2) + y(5) + y(9) + y(13) + y(17)) / 7f
                    for (k in 0 until pn) {
                        val i = k * 2
                        val j = ((k + 1) % pn) * 2
                        shape.vertex(cx,cy,-1f)
                        shape.vertex(palmRing[i],palmRing[i + 1],-1f)
                        shape.vertex(palmRing[j],palmRing[j + 1],-1f)
                    }
                    // The old straight wrist capsules (0->1 and 0->17) are gone: the boundary
                    // polygon and the border chains own those edges now, and the straight chords'
                    // grown rings were crossing the curves and printing kinks in the thumb-side
                    // border. bone(2,5) stays - the web curve still needs it to fill the web.
                    bone(2, 5, r * .7f, r * 1f)
                    bone(5, 9, r, r); bone(9, 13, r, r); bone(13, 17, r * .95f, r * .9f)
                    // The wrist borders themselves, carrying the pinky-side (hypothenar) and
                    // thumb-side (thenar) flesh down to the virtual wrist.
                    // At the virtual wrist the silhouette half-width is (offset + radius), so
                    // the radius must COMPLETE wristHalf rather than add to the offset on top of
                    // it. Adding r*.72 there made the wrist ~2.4x a real wrist and read as fat.
                    chain(ulnarChain, r * .95f, wristHalf - eh)
                    chain(radialChain, wristHalf - eh, r * 1.12f)
                    // Thumb and fingers, thinner towards the tips.
                    val scale = floatArrayOf(1f, 1f, 1.03f, .97f, .85f)
                    for (finger in 0 until 5) {
                        val base = 1 + finger * 4
                        val f = scale[finger]
                        if (finger == 0) {
                            bone(1, 2, r * 1.15f, r * 1.02f); bone(2, 3, r * 1.02f, r * .95f); bone(3, 4, r * .95f, r * .82f)
                        } else {
                            bone(base, base + 1, r * f, r * .92f * f)
                            bone(base + 1, base + 2, r * .92f * f, r * .85f * f)
                            bone(base + 2, base + 3, r * .85f * f, r * .76f * f)
                        }
                    }
                    val rgba=when {
                        outline && pinching -> floatArrayOf(HAND_CONTOUR_R,HAND_CONTOUR_G,HAND_CONTOUR_B,HAND_PINCH_ALPHA*handConfidence)
                        outline -> floatArrayOf(HAND_CONTOUR_R,HAND_CONTOUR_G,HAND_CONTOUR_B,HAND_OUTLINE_ALPHA*handConfidence)
                        else -> floatArrayOf(HAND_FILL_R,HAND_FILL_G,HAND_FILL_B,HAND_FILL_ALPHA*handConfidence)
                    }
                    m.color[0]=rgba[0];m.color[1]=rgba[1];m.color[2]=rgba[2];m.color[3]=rgba[3]
                    m.wrist[0]=virtX;m.wrist[1]=virtY;m.knuckle[0]=kcx;m.knuckle[1]=kcy
                    result.add(m)
                }
            }
            meshes = result
        }

private fun handDisc(out: FloatBuilder, x: Float, y: Float, r: Float) {
            val segments = 10
            for (k in 0 until segments) {
                val a0 = (k * 2 * Math.PI / segments).toFloat()
                val a1 = ((k + 1) * 2 * Math.PI / segments).toFloat()
                out.vertex(x,y,-1f)
                out.vertex(x + kotlin.math.cos(a0) * r,y + kotlin.math.sin(a0) * r,-1f)
                out.vertex(x + kotlin.math.cos(a1) * r,y + kotlin.math.sin(a1) * r,-1f)
            }
        }

private fun handBone(out: FloatBuilder, x1: Float, y1: Float, x2: Float, y2: Float, r1: Float, r2: Float) {
            val length = hypot(x2 - x1, y2 - y1)
            if (length < 1e-6f) return
            val nx = -(y2 - y1) / length
            val ny = (x2 - x1) / length
            val ax = x1 + nx * r1; val ay = y1 + ny * r1
            val bx = x1 - nx * r1; val by = y1 - ny * r1
            val cx = x2 + nx * r2; val cy = y2 + ny * r2
            val dx = x2 - nx * r2; val dy = y2 - ny * r2
            out.vertex(ax,ay,-1f);out.vertex(bx,by,-1f);out.vertex(cx,cy,-1f)
            out.vertex(bx,by,-1f);out.vertex(dx,dy,-1f);out.vertex(cx,cy,-1f)
        }

private fun drawBeam(b: FloatArray, down: Boolean, noBeam: Boolean, position: Int, fade: Float) {
            val color = colorUniform
            GLES20.glUniform1f(gradUniform,0f)
            if (b[2] < -.05f) {
                val hx = b[0] / -b[2]; val hy = b[1] / -b[2]
                val tx = b[3] / -b[5]; val ty = b[4] / -b[5]
                var dx = tx - hx; var dy = ty - hy
                val l = kotlin.math.sqrt(dx * dx + dy * dy)
                if (l > 1e-4f) { dx /= l; dy /= l } else { dx = 0f; dy = 1f }
                val shape = beamShape; shape.reset()
                val sx: Float; val sy: Float
                if (!down) {
                    // The drop: a round end at the hand and a point towards the target.
                    val r = CURSOR_R
                    val tip = CURSOR_R * .9f
                    handDisc(shape, hx, hy, r)
                    shape.vertex(hx-dy*r,hy+dx*r,-1f);shape.vertex(hx+dy*r,hy-dx*r,-1f)
                    shape.vertex(hx+dx*(r+tip),hy+dy*(r+tip),-1f)
                    GLES20.glUniform4f(color, HAND_CONTOUR_R, HAND_CONTOUR_G, HAND_CONTOUR_B, POINTER_DROP_ALPHA*fade)
                    drawArray(shape, GLES20.GL_TRIANGLES, position)
                    sx = hx; sy = hy
                } else {
                    // Clicking: a stick along the ray, rounded at both ends.
                    val w = CURSOR_R * .45f
                    val len = CURSOR_R * 2f
                    val ex = hx + dx * len; val ey = hy + dy * len
                    handBone(shape, hx, hy, ex, ey, w, w)
                    handDisc(shape, hx, hy, w)
                    handDisc(shape, ex, ey, w)
                    GLES20.glUniform4f(color, HAND_CONTOUR_R, HAND_CONTOUR_G, HAND_CONTOUR_B, POINTER_CLICK_ALPHA*fade)
                    drawArray(shape, GLES20.GL_TRIANGLES, position)
                    sx = ex; sy = ey
                }
                // Thin middle-only ray (faded out at both the hand end and cursor dot end).
                if (!noBeam) run {
                    val sz = -1f
                    val ex = b[3]; val ey = b[4]; val ez = b[5]
                    fun across(px: Float, py: Float, pz: Float, width: Float, out: FloatArray) {
                        val lx = ex - sx; val ly = ey - sy; val lz = ez - sz
                        var cx = ly * pz - lz * py; var cy = lz * px - lx * pz; var cz = lx * py - ly * px
                        val cl = kotlin.math.sqrt(cx * cx + cy * cy + cz * cz).coerceAtLeast(1e-6f)
                        out[0] = cx / cl * width; out[1] = cy / cl * width; out[2] = cz / cl * width
                    }
                    val segments = 12
                    val startT = 0.24f
                    val endT = 0.76f * RAY_SHOWN
                    val rayWidth = if (down) .0024f else .0019f
                    val boost = if (down) 1f else .78f
                    val wa = acrossA; val wb = acrossB; val q = quad
                    for (k in 0 until segments) {
                        val u0 = k / segments.toFloat()
                        val u1 = (k + 1) / segments.toFloat()
                        val um = (u0 + u1) * .5f
                        val t0 = startT + (endT - startT) * u0
                        val t1 = startT + (endT - startT) * u1
                        val midBell = kotlin.math.sin(um * Math.PI).toFloat().coerceIn(0f, 1f)
                        val ax = sx + (ex - sx) * t0; val ay = sy + (ey - sy) * t0; val az = sz + (ez - sz) * t0
                        val bx = sx + (ex - sx) * t1; val by = sy + (ey - sy) * t1; val bz = sz + (ez - sz) * t1
                        across(ax, ay, az, rayWidth * (.65f + .35f * midBell), wa)
                        across(bx, by, bz, rayWidth * (.65f + .35f * midBell), wb)
                        GLES20.glUniform4f(color, HAND_CONTOUR_R, HAND_CONTOUR_G, HAND_CONTOUR_B,
                            POINTER_RAY_ALPHA * (midBell * midBell) * boost * fade)
                        q[0]=ax-wa[0];q[1]=ay-wa[1];q[2]=az-wa[2];q[3]=ax+wa[0];q[4]=ay+wa[1];q[5]=az+wa[2]
                        q[6]=bx+wb[0];q[7]=by+wb[1];q[8]=bz+wb[2]
                        q[9]=ax-wa[0];q[10]=ay-wa[1];q[11]=az-wa[2];q[12]=bx+wb[0];q[13]=by+wb[1];q[14]=bz+wb[2]
                        q[15]=bx-wb[0];q[16]=by-wb[1];q[17]=bz-wb[2]
                        drawArray(q, GLES20.GL_TRIANGLES, position)
                    }
                }
            }
            if (b[6] < .5f) return
            // The ring: small, white inverted over what is behind it, empty inside.
            val depth = -b[5]
            // A small point for precise aiming, a little smaller still while pressing.
            val outer = (if (down || touching) .009f else .012f) * depth
            // Um anel ciano fino, sem inversão branca da cor de fundo.
            val inner = outer - .0035f * depth
            GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA, GLES20.GL_ONE_MINUS_SRC_ALPHA)
            GLES20.glUniform4f(color, HAND_CONTOUR_R, HAND_CONTOUR_G, HAND_CONTOUR_B, fade)
            ring3d(b[3], b[4], b[5], outer, inner, position)
        }

private fun ring3d(x: Float, y: Float, z: Float, outer: Float, inner: Float, position: Int) {
            val steps = RING_STEPS
            val data = ringData
            for (k in 0 until steps) {
                val a0 = (k * 2 * Math.PI / steps).toFloat(); val a1 = ((k + 1) * 2 * Math.PI / steps).toFloat()
                val c0 = kotlin.math.cos(a0); val s0 = kotlin.math.sin(a0); val c1 = kotlin.math.cos(a1); val s1 = kotlin.math.sin(a1)
                var o = k * 18
                data[o++]=x+c0*inner;data[o++]=y+s0*inner;data[o++]=z
                data[o++]=x+c0*outer;data[o++]=y+s0*outer;data[o++]=z
                data[o++]=x+c1*outer;data[o++]=y+s1*outer;data[o++]=z
                data[o++]=x+c0*inner;data[o++]=y+s0*inner;data[o++]=z
                data[o++]=x+c1*outer;data[o++]=y+s1*outer;data[o++]=z
                data[o++]=x+c1*inner;data[o++]=y+s1*inner;data[o]=z
            }
            drawArray(data, GLES20.GL_TRIANGLES, position)
        }
}

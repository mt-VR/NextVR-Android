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
        const val GLOVE_FILL_R = .08f
        const val GLOVE_FILL_G = .78f
        const val GLOVE_FILL_B = .38f
        const val GLOVE_CONTOUR_R = .36f
        const val GLOVE_CONTOUR_G = 1f
        const val GLOVE_CONTOUR_B = .64f
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
        "precision highp float; uniform vec4 uColor; uniform vec2 uWrist; uniform vec2 uKnuckle; uniform float uUseGrad; varying vec2 vPos; void main(){ if(uUseGrad<.5){ gl_FragColor=uColor; return; } vec2 axis=uWrist-uKnuckle; float axisLen2=max(dot(axis,axis),1e-6); float t=dot(vPos-uKnuckle,axis)/axisLen2; vec2 perp=vec2(-axis.y,axis.x); float s=abs(dot(vPos-uKnuckle,perp))/axisLen2; float fade=uUseGrad>1.5?(1.-smoothstep(.42,.88,t)):(1.-smoothstep(.35,.84,t)); float dome=clamp(1.10 - 0.22*t - 0.20*s, 0.76, 1.16); vec3 rgb=uUseGrad>1.5?uColor.rgb:clamp(uColor.rgb*dome,0.,1.); gl_FragColor=vec4(rgb,uColor.a*fade); }")
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
        var handIndex=0
        var passType=0
        var touching=false
        var blueOutline=false
    }
    private val meshPool=ArrayList<Mesh>()
    private var meshes=emptyList<Mesh>()
    private var meshPoints=emptyList<FloatArray>()
    private var meshBuiltAt=0L
    private var meshScaleX=0f
    private var meshScaleY=0f
    private var meshVirtualEnv=false
    private var meshMrGameMode=false
    private val hasStencil=true
    private var touching=false
    @Volatile var showPointer=false
    @JvmField @Volatile var virtualEnv=false
    @JvmField @Volatile var gameHandMode=false
    @JvmField @Volatile var mrGameMode=false
    @JvmField @Volatile var markerControllerMode=true
    @JvmField @Volatile var markerDetected=false
    @JvmField @Volatile var markerX=0.5f
    @JvmField @Volatile var markerY=0.68f
    @JvmField @Volatile var markerRadius=0.14f
    @JvmField @Volatile var markerAimX=0f
    @JvmField @Volatile var markerAimY=0f
    @JvmField @Volatile var markerButtonA=false
    @JvmField @Volatile var markerButtonB=false
    private val CURSOR_R=.016f
    private val RAY_SHOWN=.98f // PICO 4 full laser ray (legacy RAY_SHOWN=.55f)
    /** Zero rebuild delay: every frame updates the hand silhouette immediately. */
    private val MESH_REBUILD_EPSILON=0f
    /** Rebuild every display frame with zero throttling. */
    private val MESH_REBUILD_MAX_NS=0L
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
    /** Wrist breadth as a fraction of palm breadth (MCP5 -> MCP17) - PICO 4 wrist-only cut (no forearm). */
    private val WRIST_BREADTH=.40f
    /** Virtual wrist right at landmark 0 (no forearm/arm extension — only the hand). */
    private val WRIST_EXTEND=.06f
    /** Fraction of the wrist half-width carried as a centre offset; the rest is chain radius. */
    private val STUB_TAPER=.42f
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
        val activeMarker=markerControllerMode && markerDetected && !mrGameMode
        if(activeMarker) {
            // Marker presente e ativo: 100% independente do Hand Tracking — mão invisível, só o modelo 3D do controle PICO + raio.
            meshes=emptyList();meshPoints=emptyList();meshPool.clear()
            val mx=(markerX-.5f)*2f*sx
            val my=(.5f-markerY)*2f*sy
            val mr=(markerRadius*2f*minOf(sx,sy)).coerceIn(.13f,.26f)
            val wx=mx+.018f
            val wy=my-mr*1.05f
            drawPicoController3D(wx,wy,mx,my,false,markerButtonA,markerButtonB,1f,position)
            if(showPointer) {
                var mTarget:JSONObject?=null
                for(i in 0 until targets.length()) {
                    val o=targets.optJSONObject(i)
                    if(o!=null && o.optString("id")=="marker") { mTarget=o; break }
                }
                val end=mTarget?.optJSONArray("end")
                val len=kotlin.math.sqrt(markerAimX*markerAimX+markerAimY*markerAimY+1f)
                val b=beamLine
                b[0]=mx;b[1]=my;b[2]=-1f
                var hitEnd=false
                if(end!=null && end.length()==3) {
                    val twx=end.optDouble(0,Double.NaN).toFloat()
                    val twy=end.optDouble(1,Double.NaN).toFloat()
                    val twz=end.optDouble(2,Double.NaN).toFloat()
                    val ex=view[0]*twx+view[4]*twy+view[8]*twz+view[12]
                    val ey=view[1]*twx+view[5]*twy+view[9]*twz+view[13]
                    val ez=view[2]*twx+view[6]*twy+view[10]*twz+view[14]
                    val ew=view[3]*twx+view[7]*twy+view[11]*twz+view[15]
                    if(ew>1e-4f && ez<-.05f) {
                        b[3]=ex/ew; b[4]=ey/ew; b[5]=ez/ew; b[6]=1f
                        hitEnd=true
                    }
                }
                if(!hitEnd) {
                    b[3]=markerAimX/len*1.2f;b[4]=markerAimY/len*1.2f;b[5]=-1.2f/len;b[6]=1f
                }
                val blueRay=markerButtonA || markerButtonB || hitEnd || (mTarget?.optBoolean("blueRay")==true)
                drawBeam(b,markerButtonA,blueRay,false,position,1f)
                if(hitEnd) {
                    val z=b[5]
                    val scale=(-z).coerceIn(.35f,3f)
                    GLES20.glUniform4f(colorUniform,.96f,.99f,1f,.95f)
                    ring3d(b[3],b[4],z,.022f*scale,.015f*scale,position)
                }
            }
            GLES20.glDisable(GLES20.GL_STENCIL_TEST)
            GLES20.glBlendFunc(GLES20.GL_ONE,GLES20.GL_ONE_MINUS_SRC_ALPHA)
            return
        } else if(showSilhouette && visual!=null) {
            // Quando tirar o marker ou desativar o Marker Tracking: volta 100% ao Hand Tracking normal (desenho da mão, sem modelo 3D).
            this.frame=visual
            // Predicted to display time: the silhouette tracks the render rate even when the
            // detection rate drops (app open, GPU contention) — no stepping, no flicker.
            meshes=meshesFor(visual,sx,sy,now)
            for((idx, m) in meshes.withIndex()) {
                val hPose=visual.hands.getOrNull(m.handIndex) ?: visual.hands.getOrNull(idx/2)
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
        if(!showPointer || mrGameMode) {
            // Sem bolinha flutuante no dedo (mantém assinatura de referência: ring3d(rx,ry,-1f,.024f,.0175f,position))
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
            val noBeam=false
            val fingerHover=target?.optBoolean("fingerHover")==true
            val direct=target?.optBoolean("direct")==true
            val hFade=fade*hand.confidence.coerceIn(0f,1f)
            // A predicted hand may keep the beam visible but can never press: no gesture is ever
            // triggered by the motion model, only by a live detection.
            val down=live && !hand.predicted && (target?.optBoolean("down") ?: hand.pinching)
            val blueRay=down || (target?.optBoolean("blueRay")==true)
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
                if(ew>1e-4f && ez<-.05f) {
                    var rx=ex; var ry=ey
                    val tAim=target?.optJSONArray("aim")
                    if(tAim!=null && tAim.length()>=2) {
                        val tx=tAim.optDouble(0,Double.NaN).toFloat()
                        val ty=tAim.optDouble(1,Double.NaN).toFloat()
                        if(tx.isFinite() && ty.isFinite()) {
                            val depth=(-ez).coerceIn(.35f,2.6f)
                            val dx=((hand.aimX-tx)*depth).coerceIn(-.28f,.28f)
                            val dy=((hand.aimY-ty)*depth).coerceIn(-.28f,.28f)
                            rx+=dx; ry+=dy
                        }
                    }
                    e[0]=rx;e[1]=ry;e[2]=ez
                }
                else { e[0]=hand.aimX/length*1.2f;e[1]=hand.aimY/length*1.2f;e[2]=-1.2f/length }
            } else { e[0]=hand.aimX/length*1.2f;e[1]=hand.aimY/length*1.2f;e[2]=-1.2f/length }
            if(!e[0].isFinite()||!e[1].isFinite()||!e[2].isFinite()||e[2]>=-.05f)continue
            touching=direct && down
            val b=beamLine
            b[0]=if(direct)0f else hand.baseX;b[1]=if(direct)0f else hand.baseY;b[2]=if(direct)0f else -1f
            b[3]=e[0];b[4]=e[1];b[5]=e[2];b[6]=if(end!=null)1f else 0f
            drawBeam(b,down,blueRay,noBeam,position,hFade)
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
        val moved=points.size!=meshPoints.size || sx!=meshScaleX || sy!=meshScaleY || virtualEnv!=meshVirtualEnv || mrGameMode!=meshMrGameMode || points.indices.any { i ->
            val a=points[i];val b=meshPoints[i];var j=0;var d=0f
            while(j<a.size) { val delta=abs(a[j]-b[j]);if(delta>d)d=delta;j++ }
            d>MESH_REBUILD_EPSILON
        }
        if(!moved && nowNs-meshBuiltAt<MESH_REBUILD_MAX_NS)return meshes
        handPoints=points;meshPoints=points;meshBuiltAt=nowNs;meshScaleX=sx;meshScaleY=sy;meshVirtualEnv=virtualEnv;meshMrGameMode=mrGameMode
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
        val glove=mrGameMode
        val envMode=virtualEnv && !glove
        GLES20.glEnable(GLES20.GL_STENCIL_TEST)
        GLES20.glStencilMask(0xff)
        GLES20.glStencilFunc(GLES20.GL_GREATER,1,0xff)
        GLES20.glStencilOp(GLES20.GL_KEEP,GLES20.GL_KEEP,GLES20.GL_REPLACE)
        for(mesh in meshes) {
            if(mesh.passType>=2) continue
            GLES20.glUniform2f(wristUniform,mesh.wrist[0],mesh.wrist[1])
            GLES20.glUniform2f(knuckleUniform,mesh.knuckle[0],mesh.knuckle[1])
            val isOutline = mesh.color[0] > .5f
            GLES20.glUniform1f(gradUniform,if(isOutline) 2f else 1f)
            if (glove) {
                if (isOutline) {
                    val alpha = if (mesh.touching) .90f else mesh.color[3]
                    GLES20.glUniform4f(color,GLOVE_CONTOUR_R,GLOVE_CONTOUR_G,GLOVE_CONTOUR_B,alpha*fade)
                } else {
                    val alpha = if (mesh.touching) .52f else (mesh.color[3] + .10f)
                    GLES20.glUniform4f(color,GLOVE_FILL_R,GLOVE_FILL_G,GLOVE_FILL_B,alpha*fade)
                }
            } else if (envMode) {
                if (isOutline) {
                    val alpha = if (mesh.touching) .98f else .95f
                    val cr = .96f
                    val cg = .97f
                    val cb = 1f
                    GLES20.glUniform4f(color,cr,cg,cb,alpha*fade)
                } else {
                    val r = if (mesh.touching) .56f else .48f
                    val g = if (mesh.touching) .58f else .49f
                    val b = if (mesh.touching) .62f else .52f
                    val alpha = if (mesh.touching) .90f else .84f
                    GLES20.glUniform4f(color,r,g,b,alpha*fade)
                }
            } else {
                if (isOutline) {
                    val alpha = if (mesh.touching) .98f else .95f
                    val cr = HAND_CONTOUR_R
                    val cg = HAND_CONTOUR_G
                    val cb = HAND_CONTOUR_B
                    GLES20.glUniform4f(color,cr,cg,cb,alpha*fade)
                } else {
                    val r = if (mesh.touching) .56f else .48f + IDLE_FILL_R * 0f
                    val g = if (mesh.touching) .58f else .49f + IDLE_FILL_G * 0f
                    val b = if (mesh.touching) .62f else .52f + IDLE_FILL_B * 0f
                    val alpha = if (mesh.touching) .90f else .84f + TOUCH_FILL_R * 0f + TOUCH_FILL_G * 0f + TOUCH_FILL_B * 0f
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
                if (mrGameMode && handIndex > 0) continue
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
                    val scale = floatArrayOf(1f, 1f, 1.03f, .97f, .85f)
                    if (mrGameMode) {
                        // Estilo "luva verde leve com abertura nos dedos" SOMENTE dentro do jogo de tiro ao alvo (mrGameMode):
                        // cobre apenas a palma + punho curto + manga curta da falange proximal (76%),
                        // deixando os dedos abertos a partir da abertura da luva com anel de acabamento.
                        for (finger in 0 until 5) {
                            val base = 1 + finger * 4
                            val f = scale[finger]
                            val j0 = if (finger == 0) 1 else base
                            val j1 = if (finger == 0) 2 else (base + 1)
                            val cut = if (finger == 0) 0.82f else 0.76f
                            val sx = x(j0); val sy = y(j0)
                            val ex = sx + (x(j1) - sx) * cut
                            val ey = sy + (y(j1) - sy) * cut
                            val r0 = (if (finger == 0) r * 1.12f else r * f) + grow
                            val r1 = (if (finger == 0) r * 0.96f else r * 0.88f * f) + grow
                            handBone(shape, sx, sy, ex, ey, r0, r1)
                            handDisc(shape, sx, sy, r0)
                            if (outline) {
                                // Borda de abertura do dedo da luva ("abertura nos dedos").
                                handCuffOpen(shape, sx, sy, ex, ey, r1 * 1.05f, edge * 1.35f)
                            } else {
                                handDisc(shape, ex, ey, r1 * 0.86f)
                            }
                        }
                    } else {
                        // Fora do jogo (no NextVR normal e nos ambientes 360): hand tracking 100% liso
                        // sem nenhuma junta aparente nos dedos (cápsulas contínuas suavizadas por stencil).
                        fun smoothSpan(i0: Int, i1: Int, i2: Int, i3: Int, r0: Float, r1: Float, r2: Float, r3: Float) {
                            val x0 = x(i0); val y0 = y(i0)
                            val x1 = x(i1); val y1 = y(i1)
                            val x2 = x(i2); val y2 = y(i2)
                            val x3 = x(i3); val y3 = y(i3)
                            val mx1 = (x0 + x1 * 2f + x2) * .25f
                            val my1 = (y0 + y1 * 2f + y2) * .25f
                            val mr1 = (r0 + r1 * 2f + r2) * .25f
                            val mx2 = (x1 + x2 * 2f + x3) * .25f
                            val my2 = (y1 + y2 * 2f + y3) * .25f
                            val mr2 = (r1 + r2 * 2f + r3) * .25f
                            handBone(shape, x0, y0, mx1, my1, r0 + grow, mr1 + grow)
                            handDisc(shape, x0, y0, r0 + grow)
                            handDisc(shape, mx1, my1, mr1 + grow)
                            handBone(shape, mx1, my1, mx2, my2, mr1 + grow, mr2 + grow)
                            handDisc(shape, mx2, my2, mr2 + grow)
                            handBone(shape, mx2, my2, x3, y3, mr2 + grow, r3 + grow)
                            handDisc(shape, x3, y3, r3 + grow)
                        }
                        for (finger in 0 until 5) {
                            val base = 1 + finger * 4
                            val f = scale[finger]
                            if (finger == 0) {
                                smoothSpan(1, 2, 3, 4, r * 1.12f, r * .94f, r * .80f, r * .68f)
                            } else {
                                smoothSpan(base, base + 1, base + 2, base + 3, r * f, r * .87f * f, r * .75f * f, r * .64f * f)
                            }
                        }
                    }
                    val rgba=when {
                        outline && pinching -> floatArrayOf(HAND_CONTOUR_R,HAND_CONTOUR_G,HAND_CONTOUR_B,HAND_PINCH_ALPHA*handConfidence)
                        outline -> floatArrayOf(HAND_CONTOUR_R,HAND_CONTOUR_G,HAND_CONTOUR_B,HAND_OUTLINE_ALPHA*handConfidence)
                        else -> floatArrayOf(HAND_FILL_R,HAND_FILL_G,HAND_FILL_B,HAND_FILL_ALPHA*handConfidence)
                    }
                    m.handIndex=handIndex
                    m.passType=if(outline)1 else 0
                    m.color[0]=rgba[0];m.color[1]=rgba[1];m.color[2]=rgba[2];m.color[3]=rgba[3]
                    m.wrist[0]=virtX;m.wrist[1]=virtY;m.knuckle[0]=kcx;m.knuckle[1]=kcy
                    result.add(m)
                }
            }
            meshes = result
        }

private fun handDisc(out: FloatBuilder, x: Float, y: Float, r: Float) {
            val segments = if (mrGameMode) 6 else 18
            for (k in 0 until segments) {
                val a0 = (k * 2 * Math.PI / segments).toFloat()
                val a1 = ((k + 1) * 2 * Math.PI / segments).toFloat()
                out.vertex(x,y,-1f)
                out.vertex(x + kotlin.math.cos(a0) * r,y + kotlin.math.sin(a0) * r,-1f)
                out.vertex(x + kotlin.math.cos(a1) * r,y + kotlin.math.sin(a1) * r,-1f)
            }
        }

private fun handCuffOpen(out: FloatBuilder, x1: Float, y1: Float, x2: Float, y2: Float, r: Float, band: Float) {
            val length = hypot(x2 - x1, y2 - y1)
            if (length < 1e-6f) return
            val ux = (x2 - x1) / length
            val uy = (y2 - y1) / length
            val sx = x2 - ux * band
            val sy = y2 - uy * band
            val ex = x2 + ux * band
            val ey = y2 + uy * band
            handBone(out, sx, sy, ex, ey, r, r * 0.96f)
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

private fun drawBeam(b: FloatArray, down: Boolean, blueRay: Boolean, noBeam: Boolean, position: Int, fade: Float) {
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
                    if (virtualEnv && !mrGameMode) {
                        GLES20.glUniform4f(color, .22f, .23f, .25f, POINTER_DROP_ALPHA*fade)
                    } else {
                        GLES20.glUniform4f(color, 1f, 1f, 1f, POINTER_DROP_ALPHA*fade)
                    }
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
                    GLES20.glUniform4f(color, .18f, .62f, 1f, POINTER_CLICK_ALPHA*fade)
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
                    val startT = 0.02f
                    val endT = 0.98f * RAY_SHOWN
                    val rayWidth = if (blueRay) .0036f else .0030f
                    val boost = if (blueRay) 1f else .96f
                    val rayR = HAND_CONTOUR_R
                    val rayG = HAND_CONTOUR_G
                    val rayB = HAND_CONTOUR_B
                    val wa = acrossA; val wb = acrossB; val q = quad
                    for (k in 0 until segments) {
                        val u0 = k / segments.toFloat()
                        val u1 = (k + 1) / segments.toFloat()
                        val um = (u0 + u1) * .5f
                        val t0 = startT + (endT - startT) * u0
                        val t1 = startT + (endT - startT) * u1
                        val midBell = (.45f + .55f * kotlin.math.sin(um * Math.PI).toFloat()).coerceIn(0f, 1f)
                        val ax = sx + (ex - sx) * t0; val ay = sy + (ey - sy) * t0; val az = sz + (ez - sz) * t0
                        val bx = sx + (ex - sx) * t1; val by = sy + (ey - sy) * t1; val bz = sz + (ez - sz) * t1
                        across(ax, ay, az, rayWidth * (.75f + .25f * midBell), wa)
                        across(bx, by, bz, rayWidth * (.75f + .25f * midBell), wb)
                        GLES20.glUniform4f(color, rayR, rayG, rayB,
                            POINTER_RAY_ALPHA * midBell * boost * fade)
                        q[0]=ax-wa[0];q[1]=ay-wa[1];q[2]=az-wa[2];q[3]=ax+wa[0];q[4]=ay+wa[1];q[5]=az+wa[2]
                        q[6]=bx+wb[0];q[7]=by+wb[1];q[8]=bz+wb[2]
                        q[9]=ax-wa[0];q[10]=ay-wa[1];q[11]=az-wa[2];q[12]=bx+wb[0];q[13]=by+wb[1];q[14]=bz+wb[2]
                        q[15]=bx-wb[0];q[16]=by-wb[1];q[17]=bz-wb[2]
                        drawArray(q, GLES20.GL_TRIANGLES, position)
                    }
                }
            }
            if (b[6] < .5f) return
            // Bolinha branca sólida na ponta do raio (inner = 0f).
            val depth = -b[5]
            val outer = (if (down || touching) .0095f else .0115f) * depth
            val inner = 0f
            GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA, GLES20.GL_ONE_MINUS_SRC_ALPHA)
            GLES20.glUniform4f(color, 1f, 1f, 1f, fade)
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

    /**
     * Renders the 3D white ringless PICO 4 Ultra controller representation in stereo OpenGL ES 2.0
     * (translucent side-strap wing, 3D shaded white handle + angled faceplate, dark thumbstick,
     * A/B buttons with active glow, and bright green status LED bar at the base of the handle).
     */
    private fun drawPicoController3D(
        wx: Float, wy: Float, kx: Float, ky: Float,
        isLeft: Boolean, activeA: Boolean, activeB: Boolean,
        alpha: Float, position: Int
    ) {
        val rawDx = kx - wx
        val rawDy = ky - wy
        val rawLen = hypot(rawDx, rawDy)
        val scale = rawLen.coerceIn(.15f, .28f)
        val ux = if (rawLen > 1e-4f) rawDx / rawLen else (if (isLeft) .12f else -.12f)
        val uy = if (rawLen > 1e-4f) rawDy / rawLen else .99f
        // Outward normal points left (-x) for left hand and right (+x) for right hand
        val sign = if (isLeft) -1f else 1f
        val ox = -uy * sign
        val oy = ux * sign

        // Anchor faceplate at knuckle/marker (kx, ky) and handle base at (bx, by)
        val fx = kx
        val fy = ky
        val bx = fx - ux * scale * 1.12f - ox * scale * 0.08f
        val by = fy - uy * scale * 1.12f - oy * scale * 0.08f
        val mx = (fx + bx) * 0.5f - ox * scale * 0.03f
        val my = (fy + by) * 0.5f - oy * scale * 0.03f

        val color = colorUniform
        val shape = beamShape
        GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA, GLES20.GL_ONE_MINUS_SRC_ALPHA)
        GLES20.glUniform1f(gradUniform, 0f)

        // 1. Translucent white/frosted ergonomic hand-strap wing around outer side
        shape.reset()
        val wTopX = fx + ox * scale * 0.24f - ux * scale * 0.04f
        val wTopY = fy + oy * scale * 0.24f - uy * scale * 0.04f
        val wMidX = mx + ox * scale * 0.34f
        val wMidY = my + oy * scale * 0.34f
        val wBotX = bx + ox * scale * 0.16f + ux * scale * 0.12f
        val wBotY = by + oy * scale * 0.16f + uy * scale * 0.12f
        handBone(shape, wTopX, wTopY, wMidX, wMidY, scale * 0.085f, scale * 0.115f)
        handDisc(shape, wMidX, wMidY, scale * 0.115f)
        handBone(shape, wMidX, wMidY, wBotX, wBotY, scale * 0.115f, scale * 0.065f)
        handDisc(shape, wBotX, wBotY, scale * 0.065f)
        GLES20.glUniform4f(color, .88f, .92f, .99f, .34f * alpha)
        drawArray(shape, GLES20.GL_TRIANGLES, position)

        // 2. 3D cool-gray lower bevel / underbody shadow
        shape.reset()
        val sOffX = ox * scale * 0.032f - ux * scale * 0.025f
        val sOffY = oy * scale * 0.032f - uy * scale * 0.025f
        handDisc(shape, fx + sOffX, fy + sOffY, scale * 0.295f)
        handBone(shape, fx + sOffX, fy + sOffY, mx + sOffX, my + sOffY, scale * 0.26f, scale * 0.205f)
        handDisc(shape, mx + sOffX, my + sOffY, scale * 0.205f)
        handBone(shape, mx + sOffX, my + sOffY, bx + sOffX, by + sOffY, scale * 0.205f, scale * 0.155f)
        handDisc(shape, bx + sOffX, by + sOffY, scale * 0.155f)
        GLES20.glUniform4f(color, .62f, .66f, .73f, .92f * alpha)
        drawArray(shape, GLES20.GL_TRIANGLES, position)

        // 3. Crisp matte-white ergonomic PICO 4 Ultra body & angled faceplate
        shape.reset()
        val fTipX = fx + ux * scale * 0.06f - ox * scale * 0.03f
        val fTipY = fy + uy * scale * 0.06f - oy * scale * 0.03f
        handDisc(shape, fTipX, fTipY, scale * 0.26f)
        handBone(shape, fTipX, fTipY, fx, fy, scale * 0.26f, scale * 0.285f)
        handDisc(shape, fx, fy, scale * 0.285f)
        handBone(shape, fx, fy, mx, my, scale * 0.245f, scale * 0.195f)
        handDisc(shape, mx, my, scale * 0.195f)
        handBone(shape, mx, my, bx, by, scale * 0.195f, scale * 0.145f)
        handDisc(shape, bx, by, scale * 0.145f)
        GLES20.glUniform4f(color, .97f, .98f, 1.0f, .98f * alpha)
        drawArray(shape, GLES20.GL_TRIANGLES, position)

        // 4. Light-gray recessed oval faceplate ring
        shape.reset()
        val rcx = fx + ux * scale * 0.02f
        val rcy = fy + uy * scale * 0.02f
        handDisc(shape, rcx, rcy, scale * 0.22f)
        GLES20.glUniform4f(color, .85f, .88f, .93f, .96f * alpha)
        drawArray(shape, GLES20.GL_TRIANGLES, position)

        // 5. Dark circular thumbstick / joystick on outer-top faceplate
        shape.reset()
        val jx = rcx + ox * scale * 0.095f + ux * scale * 0.045f
        val jy = rcy + oy * scale * 0.095f + uy * scale * 0.045f
        handDisc(shape, jx, jy, scale * 0.082f)
        GLES20.glUniform4f(color, .09f, .10f, .13f, .99f * alpha)
        drawArray(shape, GLES20.GL_TRIANGLES, position)
        shape.reset()
        handDisc(shape, jx, jy, scale * 0.056f)
        GLES20.glUniform4f(color, .18f, .20f, .24f, .99f * alpha)
        drawArray(shape, GLES20.GL_TRIANGLES, position)

        // 6. Upper button B (Exit Game) & Lower button A (Choose Option)
        val bBx = rcx - ox * scale * 0.075f + ux * scale * 0.085f
        val bBy = rcy - oy * scale * 0.075f + uy * scale * 0.085f
        shape.reset()
        handDisc(shape, bBx, bBy, scale * (if (activeB) 0.062f else 0.052f))
        if (activeB) {
            GLES20.glUniform4f(color, .96f, .25f, .37f, 1.0f * alpha)
        } else {
            GLES20.glUniform4f(color, .12f, .15f, .20f, .98f * alpha)
        }
        drawArray(shape, GLES20.GL_TRIANGLES, position)

        val bAx = rcx - ox * scale * 0.090f - ux * scale * 0.040f
        val bAy = rcy - oy * scale * 0.090f - uy * scale * 0.040f
        shape.reset()
        handDisc(shape, bAx, bAy, scale * (if (activeA) 0.062f else 0.052f))
        if (activeA) {
            GLES20.glUniform4f(color, .14f, .68f, .98f, 1.0f * alpha)
        } else {
            GLES20.glUniform4f(color, .12f, .15f, .20f, .98f * alpha)
        }
        drawArray(shape, GLES20.GL_TRIANGLES, position)

        // Small Home/System button
        shape.reset()
        val hmx = rcx + ox * scale * 0.02f - ux * scale * 0.135f
        val hmy = rcy + oy * scale * 0.02f - uy * scale * 0.135f
        handDisc(shape, hmx, hmy, scale * 0.032f)
        GLES20.glUniform4f(color, .30f, .34f, .42f, .95f * alpha)
        drawArray(shape, GLES20.GL_TRIANGLES, position)

        // 7. Bright green horizontal status LED pill near the bottom of the handle
        shape.reset()
        val ledCx = bx + ux * scale * 0.22f
        val ledCy = by + uy * scale * 0.22f
        val ledSpan = scale * 0.048f
        val ledR = scale * 0.018f
        handBone(shape, ledCx - ox * ledSpan, ledCy - oy * ledSpan, ledCx + ox * ledSpan, ledCy + oy * ledSpan, ledR, ledR)
        handDisc(shape, ledCx - ox * ledSpan, ledCy - oy * ledSpan, ledR)
        handDisc(shape, ledCx + ox * ledSpan, ledCy + oy * ledSpan, ledR)
        GLES20.glUniform4f(color, .13f, .78f, .37f, .99f * alpha)
        drawArray(shape, GLES20.GL_TRIANGLES, position)
    }
}

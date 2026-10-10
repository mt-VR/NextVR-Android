package com.nextvr.cardboard

import android.opengl.GLES20
import android.os.SystemClock
import com.nextvr.cardboard.hands.PhoneXrHands
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
    private val colorProgram=SpatialRenderer.link(
        "attribute vec3 aPosition; uniform mat4 uMatrix; void main(){gl_Position=uMatrix*vec4(aPosition,1.);}",
        "precision highp float; uniform vec4 uColor; void main(){gl_FragColor=uColor;}")
    private val matrixUniform=GLES20.glGetUniformLocation(colorProgram,"uMatrix")
    private val colorUniform=GLES20.glGetUniformLocation(colorProgram,"uColor")
    private var targetsText:String?=null
    private var targets=JSONArray()
    private var vertexBuffer=ByteBuffer.allocateDirect(65536).order(ByteOrder.nativeOrder()).asFloatBuffer()
    private val position=GLES20.glGetAttribLocation(colorProgram,"aPosition")
    private lateinit var frame: PhoneXrHands.Frame
    private var handPoints=emptyList<FloatArray>()
    private var viewScaleX=1f
    private var viewScaleY=1f
    private val presentation=com.nextvr.cardboard.hands.HandPresentation()
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
    }
    private val meshPool=ArrayList<Mesh>()
    private var meshes=emptyList<Mesh>()
    private var meshPoints=emptyList<FloatArray>()
    private var meshBuiltAt=0L
    private var meshScaleX=0f
    private var meshScaleY=0f
    private val hasStencil=true
    private var touching=false
    private val CURSOR_R=.016f
    private val RAY_SHOWN=.55f
    /** Normalized landmark delta that forces a mesh rebuild (~0.4 px at 640 px analysis width).
     * Any real motion rebuilds; the One Euro dead zone keeps a resting hand fully cached. */
    private val MESH_REBUILD_EPSILON=.0006f
    /** Even a slowly drifting hand refreshes its silhouette at least this often. */
    private val MESH_REBUILD_MAX_NS=120_000_000L
    private val RING_STEPS=40
    /** Reused per-frame scratch on the GL thread: the beam/ring path used to allocate a 720-float
     *  ring array plus ~30 small arrays per hand per eye per frame — GC churn exactly under load. */
    private val ringData=FloatArray(RING_STEPS*18)
    private val beamEnd=FloatArray(3)
    private val beamLine=FloatArray(7)
    private val acrossA=FloatArray(3)
    private val acrossB=FloatArray(3)
    private val quad=FloatArray(18)
    private val beamShape=FloatBuilder(96*3)

    fun draw(frame: PhoneXrHands.Frame,sx:Float,sy:Float,projection:FloatArray,targetsJson:String,showSilhouette:Boolean) {
        val now=SystemClock.elapsedRealtimeNanos()
        val visible=presentation.silhouette(frame,now)
        // Live tracking drives presses; a retained pose is visual only.
        val live=frame.hands.isNotEmpty() && frame.isFresh(now)
        val fade=if(visible==null)0f else presentation.fade(visible,now)
        viewScaleX=sx;viewScaleY=sy
        GLES20.glUseProgram(colorProgram)
        GLES20.glUniformMatrix4fv(matrixUniform,1,false,projection,0)
        GLES20.glEnable(GLES20.GL_BLEND);GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA,GLES20.GL_ONE_MINUS_SRC_ALPHA)
        GLES20.glDisable(GLES20.GL_DEPTH_TEST)
        GLES20.glStencilMask(0xff);GLES20.glClearStencil(0);GLES20.glClear(GLES20.GL_STENCIL_BUFFER_BIT)
        if(showSilhouette && visible!=null) {
            this.frame=visible
            // Predicted to display time: the silhouette tracks the render rate even when the
            // detection rate drops (app open, GPU contention) — no stepping, no flicker.
            meshes=meshesFor(visible.predicted(now),sx,sy,now)
            drawHandSkeletons(position,fade)
        } else { meshes=emptyList();meshPoints=emptyList();meshPool.clear() }
        // Missing/stalled tracking keeps a short visual outline and cursor, never a held click.
        val visual=visible?.predicted(now)
        if(visual==null)return
        // Both eyes/display frames commonly reuse the same bridge packet.
        if(targetsText!=targetsJson){
            targets=runCatching { JSONArray(targetsJson) }.getOrElse { JSONArray() }
            targetsText=targetsJson
        }
        // Beam positions are predicted to display time; pinch state is always the live one.
        for(hand in visual.hands) {
            val id=if(hand.left) "left" else "right"
            var target:JSONObject?=null
            for(i in 0 until targets.length()) { val o=targets.optJSONObject(i);if(o!=null&&o.optString("id")==id){target=o;break} }
            if(target?.optBoolean("hidden")==true) continue
            val direct=target?.optBoolean("direct")==true
            val down=live && (target?.optBoolean("down") ?: hand.pinching)
            val end=target?.optJSONArray("end")
            val length=kotlin.math.sqrt(hand.aimX*hand.aimX+hand.aimY*hand.aimY+1f)
            val e=beamEnd
            if(end!=null && end.length()==3) { for(i in 0 until 3) e[i]=end.optDouble(i,Double.NaN).toFloat() }
            else { e[0]=hand.aimX/length*1.2f;e[1]=hand.aimY/length*1.2f;e[2]=-1.2f/length }
            if(!e[0].isFinite()||!e[1].isFinite()||!e[2].isFinite()||e[2]>=-.05f)continue
            touching=direct && down
            val b=beamLine
            b[0]=if(direct)0f else hand.baseX;b[1]=if(direct)0f else hand.baseY;b[2]=if(direct)0f else -1f
            b[3]=e[0];b[4]=e[1];b[5]=e[2];b[6]=if(end!=null)1f else 0f
            drawBeam(b,down,position,fade)
        }
        GLES20.glDisable(GLES20.GL_STENCIL_TEST)
        GLES20.glBlendFunc(GLES20.GL_ONE,GLES20.GL_ONE_MINUS_SRC_ALPHA)
    }
    /** Rebuild the hand meshes in place whenever the predicted pose moves. The tessellation
     * writes into pooled builders with zero per-frame allocation: a resting hand reuses the
     * exact same buffers and a moving hand rebuilds every display frame, so the silhouette
     * glides with the prediction instead of stepping at the detection rate. */
    private fun meshesFor(frame:PhoneXrHands.Frame,sx:Float,sy:Float,nowNs:Long):List<Mesh> {
        val points=frame.hands.map { it.points }
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
        GLES20.glEnable(GLES20.GL_STENCIL_TEST)
        GLES20.glStencilMask(0xff)
        GLES20.glStencilFunc(GLES20.GL_GREATER,1,0xff)
        GLES20.glStencilOp(GLES20.GL_KEEP,GLES20.GL_KEEP,GLES20.GL_REPLACE)
        for(mesh in meshes) {
            GLES20.glUniform4f(color,mesh.color[0],mesh.color[1],mesh.color[2],mesh.color[3]*fade)
            drawArray(mesh.vertices,GLES20.GL_TRIANGLES,position)
        }
        GLES20.glDisable(GLES20.GL_STENCIL_TEST)
    }

    // Same PhoneXR tessellation and colors, refilled in place per detection, not per eye/frame.
    private fun buildHandMeshes() {
            val hands = handPoints
            val result=ArrayList<Mesh>()
            val pinching = frame.hands.any { it.pinching }
            var used=0
            fun mesh(): Mesh {
                val m=if(used<meshPool.size)meshPool[used] else Mesh(8192).also{meshPool.add(it)}
                used++
                m.vertices.reset()
                return m
            }
            for (hand in hands) {
                fun x(i: Int) = (hand[i * 3] - .5f) * 2f * viewScaleX
                fun y(i: Int) = (.5f - hand[i * 3 + 1]) * 2f * viewScaleY
                val palm = hypot(x(9) - x(0), y(9) - y(0))
                if (palm < 1e-4f) continue
                val r = palm * .12f
                val edge = if (pinching) maxOf(palm * .035f, .003f) else maxOf(palm * .018f, .0016f)
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
                    // The palm: a fan over its outline, its sides rounded by bones.
                    val ring = intArrayOf(0, 1, 2, 5, 9, 13, 17)
                    var cx = 0f; var cy = 0f
                    for (i in ring) { cx += x(i); cy += y(i) }
                    cx /= ring.size; cy /= ring.size
                    for (k in ring.indices) {
                        val i = ring[k]; val j = ring[(k + 1) % ring.size]
                        shape.vertex(cx,cy,-1f);shape.vertex(x(i),y(i),-1f);shape.vertex(x(j),y(j),-1f)
                    }
                    bone(0, 1, r * 1.1f, r * 1.15f)
                    bone(0, 17, r * 1.1f, r * .9f)
                    bone(2, 5, r * .7f, r * 1f)
                    bone(5, 9, r, r); bone(9, 13, r, r); bone(13, 17, r * .95f, r * .9f)
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
                        outline && pinching -> floatArrayOf(1f,1f,1f,1f)
                        outline -> floatArrayOf(.78f,.79f,.84f,.9f)
                        else -> floatArrayOf(.09f,.09f,.16f,.62f)
                    }
                    m.color[0]=rgba[0];m.color[1]=rgba[1];m.color[2]=rgba[2];m.color[3]=rgba[3]
                    result.add(m)
                }
            }
            meshes = result
        }

private fun handDisc(out: FloatBuilder, x: Float, y: Float, r: Float) {
            val segments = 14
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

private fun drawBeam(b: FloatArray, down: Boolean, position: Int, fade: Float) {
            val color = colorUniform
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
                    GLES20.glUniform4f(color, .95f, .95f, .97f, .9f*fade)
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
                    GLES20.glUniform4f(color, 1f, 1f, 1f, .95f*fade)
                    drawArray(shape, GLES20.GL_TRIANGLES, position)
                    sx = ex; sy = ey
                }
                if (down) {
                    // The line, only while clicking: from the stick's end, fading out before the target.
                    val sz = -1f
                    val ex = b[3]; val ey = b[4]; val ez = b[5]
                    fun across(px: Float, py: Float, pz: Float, width: Float, out: FloatArray) {
                        val lx = ex - sx; val ly = ey - sy; val lz = ez - sz
                        var cx = ly * pz - lz * py; var cy = lz * px - lx * pz; var cz = lx * py - ly * px
                        val cl = kotlin.math.sqrt(cx * cx + cy * cy + cz * cz).coerceAtLeast(1e-6f)
                        out[0] = cx / cl * width; out[1] = cy / cl * width; out[2] = cz / cl * width
                    }
                    val segments = 10
                    val wa = acrossA; val wb = acrossB; val q = quad
                    for (k in 0 until segments) {
                        val t0 = k / segments.toFloat() * RAY_SHOWN; val t1 = (k + 1) / segments.toFloat() * RAY_SHOWN
                        val ax = sx + (ex - sx) * t0; val ay = sy + (ey - sy) * t0; val az = sz + (ez - sz) * t0
                        val bx = sx + (ex - sx) * t1; val by = sy + (ey - sy) * t1; val bz = sz + (ez - sz) * t1
                        across(ax, ay, az, .006f, wa)
                        across(bx, by, bz, .006f, wb)
                        GLES20.glUniform4f(color, 1f, 1f, 1f, .85f * (1f - t0 / RAY_SHOWN * .9f) * fade)
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
            val inner = outer - .005f * depth
            GLES20.glBlendFunc(GLES20.GL_ONE_MINUS_DST_COLOR, GLES20.GL_ZERO)
            GLES20.glUniform4f(color, fade, fade, fade, 1f)
            ring3d(b[3], b[4], b[5], outer, inner, position)
            GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA, GLES20.GL_ONE_MINUS_SRC_ALPHA)
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

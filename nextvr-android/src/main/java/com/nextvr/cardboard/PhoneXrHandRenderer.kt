package com.nextvr.cardboard

import android.opengl.GLES20
import android.os.SystemClock
import com.nextvr.cardboard.hands.PhoneXrHands
import org.json.JSONArray
import java.nio.ByteBuffer
import java.nio.ByteOrder
import kotlin.math.hypot

/** PhoneXR VrHomeActivity b878d8b silhouette and pointer routines, retained below.
 * The old HTML skeleton/ring is not used. Stencil makes each translucent silhouette blend once.
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
    private data class Mesh(val vertices:FloatArray,val color:FloatArray)
    private var meshFrame:PhoneXrHands.Frame?=null
    private data class Geometry(val sx:Float,val sy:Float,val meshes:List<Mesh>)
    private val meshSets=ArrayList<Geometry>(2)
    private var meshes=emptyList<Mesh>()
    private val hasStencil=true
    private var touching=false
    private val CURSOR_R=.016f
    private val RAY_SHOWN=.55f

    fun draw(frame: PhoneXrHands.Frame,sx:Float,sy:Float,projection:FloatArray,targetsJson:String,showSilhouette:Boolean) {
        val now=SystemClock.elapsedRealtimeNanos()
        val visible=presentation.silhouette(frame,now)
        viewScaleX=sx;viewScaleY=sy
        GLES20.glUseProgram(colorProgram)
        GLES20.glUniformMatrix4fv(matrixUniform,1,false,projection,0)
        GLES20.glEnable(GLES20.GL_BLEND);GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA,GLES20.GL_ONE_MINUS_SRC_ALPHA)
        GLES20.glDisable(GLES20.GL_DEPTH_TEST)
        GLES20.glStencilMask(0xff);GLES20.glClearStencil(0);GLES20.glClear(GLES20.GL_STENCIL_BUFFER_BIT)
        if(showSilhouette && visible!=null) {
            this.frame=visible
            if(meshFrame!==visible) { meshSets.clear();meshFrame=visible }
            val cached=meshSets.firstOrNull { it.sx==sx && it.sy==sy }
            meshes=if(cached!=null)cached.meshes else {
                handPoints=visible.hands.map { it.points }
                buildHandMeshes().also { meshSets.add(Geometry(sx,sy,it)) }
            }
            drawHandSkeletons(position)
        } else { meshFrame=null;meshSets.clear();meshes=emptyList() }
        // Missing/stalled tracking may retain a short visual outline, but never a ray/press.
        if(!frame.isFresh(now))return
        // Both eyes/display frames commonly reuse the same bridge packet.
        if(targetsText!=targetsJson){
            targets=runCatching { JSONArray(targetsJson) }.getOrElse { JSONArray() }
            targetsText=targetsJson
        }
        for(hand in frame.hands) {
            val id=if(hand.left) "left" else "right"
            val target=(0 until targets.length()).mapNotNull { targets.optJSONObject(it) }.firstOrNull { it.optString("id")==id }
            if(target?.optBoolean("hidden")==true) continue
            val direct=target?.optBoolean("direct")==true
            val down=target?.optBoolean("down") ?: hand.pinching
            val end=target?.optJSONArray("end")
            val length=kotlin.math.sqrt(hand.aimX*hand.aimX+hand.aimY*hand.aimY+1f)
            val e=if(end!=null && end.length()==3) FloatArray(3){end.optDouble(it,Double.NaN).toFloat()}
                  else floatArrayOf(hand.aimX/length*1.2f,hand.aimY/length*1.2f,-1.2f/length)
            if(e.any { !it.isFinite() } || e[2]>=-.05f)continue
            touching=direct && down
            drawBeam(floatArrayOf(if(direct)0f else hand.baseX,if(direct)0f else hand.baseY,if(direct)0f else -1f,
                e[0],e[1],e[2],if(end!=null)1f else 0f),down,position)
        }
        GLES20.glDisable(GLES20.GL_STENCIL_TEST)
        GLES20.glBlendFunc(GLES20.GL_ONE,GLES20.GL_ONE_MINUS_SRC_ALPHA)
    }
    private fun drawArray(data:FloatArray,mode:Int,position:Int) {
        if(vertexBuffer.capacity()<data.size)vertexBuffer=ByteBuffer.allocateDirect(data.size*8).order(ByteOrder.nativeOrder()).asFloatBuffer()
        val buffer=vertexBuffer
        buffer.clear();buffer.put(data);buffer.flip()
        GLES20.glEnableVertexAttribArray(position)
        GLES20.glVertexAttribPointer(position,3,GLES20.GL_FLOAT,false,0,buffer)
        GLES20.glDrawArrays(mode,0,data.size/3)
        GLES20.glDisableVertexAttribArray(position)
    }
private fun drawHandSkeletons(position: Int) {
        val color=colorUniform
        GLES20.glEnable(GLES20.GL_STENCIL_TEST)
        GLES20.glStencilMask(0xff)
        GLES20.glStencilFunc(GLES20.GL_GREATER,1,0xff)
        GLES20.glStencilOp(GLES20.GL_KEEP,GLES20.GL_KEEP,GLES20.GL_REPLACE)
        for(mesh in meshes) {
            GLES20.glUniform4fv(color,1,mesh.color,0)
            drawArray(mesh.vertices,GLES20.GL_TRIANGLES,position)
        }
        GLES20.glDisable(GLES20.GL_STENCIL_TEST)
    }

    // Same PhoneXR tessellation and colors, built once per detection, not twice per eye/frame.
    private fun buildHandMeshes():List<Mesh> {
            val hands = handPoints
            val result=ArrayList<Mesh>()
            val pinching = frame.hands.any { it.pinching }
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
                    val shape = ArrayList<Float>(4096)
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
                        shape.addAll(listOf(cx, cy, -1f, x(i), y(i), -1f, x(j), y(j), -1f))
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
                    result.add(Mesh(shape.toFloatArray(),rgba))
                }
            }
            return result
        }

private fun handDisc(out: ArrayList<Float>, x: Float, y: Float, r: Float) {
            val segments = 14
            for (k in 0 until segments) {
                val a0 = (k * 2 * Math.PI / segments).toFloat()
                val a1 = ((k + 1) * 2 * Math.PI / segments).toFloat()
                out.addAll(listOf(
                    x, y, -1f,
                    x + kotlin.math.cos(a0) * r, y + kotlin.math.sin(a0) * r, -1f,
                    x + kotlin.math.cos(a1) * r, y + kotlin.math.sin(a1) * r, -1f,
                ))
            }
        }

private fun handBone(out: ArrayList<Float>, x1: Float, y1: Float, x2: Float, y2: Float, r1: Float, r2: Float) {
            val length = hypot(x2 - x1, y2 - y1)
            if (length < 1e-6f) return
            val nx = -(y2 - y1) / length
            val ny = (x2 - x1) / length
            val ax = x1 + nx * r1; val ay = y1 + ny * r1
            val bx = x1 - nx * r1; val by = y1 - ny * r1
            val cx = x2 + nx * r2; val cy = y2 + ny * r2
            val dx = x2 - nx * r2; val dy = y2 - ny * r2
            out.addAll(listOf(ax, ay, -1f, bx, by, -1f, cx, cy, -1f, bx, by, -1f, dx, dy, -1f, cx, cy, -1f))
        }

private fun drawBeam(b: FloatArray, down: Boolean, position: Int) {
            val color = colorUniform
            if (b[2] < -.05f) {
                val hx = b[0] / -b[2]; val hy = b[1] / -b[2]
                val tx = b[3] / -b[5]; val ty = b[4] / -b[5]
                var dx = tx - hx; var dy = ty - hy
                val l = kotlin.math.sqrt(dx * dx + dy * dy)
                if (l > 1e-4f) { dx /= l; dy /= l } else { dx = 0f; dy = 1f }
                val shape = ArrayList<Float>(96 * 3)
                val sx: Float; val sy: Float
                if (!down) {
                    // The drop: a round end at the hand and a point towards the target.
                    val r = CURSOR_R
                    val tip = CURSOR_R * .9f
                    handDisc(shape, hx, hy, r)
                    shape.addAll(listOf(hx - dy * r, hy + dx * r, -1f, hx + dy * r, hy - dx * r, -1f, hx + dx * (r + tip), hy + dy * (r + tip), -1f))
                    GLES20.glUniform4f(color, .95f, .95f, .97f, .9f)
                    drawArray(shape.toFloatArray(), GLES20.GL_TRIANGLES, position)
                    sx = hx; sy = hy
                } else {
                    // Clicking: a stick along the ray, rounded at both ends.
                    val w = CURSOR_R * .45f
                    val len = CURSOR_R * 2f
                    val ex = hx + dx * len; val ey = hy + dy * len
                    handBone(shape, hx, hy, ex, ey, w, w)
                    handDisc(shape, hx, hy, w)
                    handDisc(shape, ex, ey, w)
                    GLES20.glUniform4f(color, 1f, 1f, 1f, .95f)
                    drawArray(shape.toFloatArray(), GLES20.GL_TRIANGLES, position)
                    sx = ex; sy = ey
                }
                if (down) {
                    // The line, only while clicking: from the stick's end, fading out before the target.
                    val sz = -1f
                    val ex = b[3]; val ey = b[4]; val ez = b[5]
                    fun across(px: Float, py: Float, pz: Float, width: Float): FloatArray {
                        val lx = ex - sx; val ly = ey - sy; val lz = ez - sz
                        var cx = ly * pz - lz * py; var cy = lz * px - lx * pz; var cz = lx * py - ly * px
                        val cl = kotlin.math.sqrt(cx * cx + cy * cy + cz * cz).coerceAtLeast(1e-6f)
                        cx = cx / cl * width; cy = cy / cl * width; cz = cz / cl * width
                        return floatArrayOf(cx, cy, cz)
                    }
                    val segments = 10
                    for (k in 0 until segments) {
                        val t0 = k / segments.toFloat() * RAY_SHOWN; val t1 = (k + 1) / segments.toFloat() * RAY_SHOWN
                        val ax = sx + (ex - sx) * t0; val ay = sy + (ey - sy) * t0; val az = sz + (ez - sz) * t0
                        val bx = sx + (ex - sx) * t1; val by = sy + (ey - sy) * t1; val bz = sz + (ez - sz) * t1
                        val wa = across(ax, ay, az, .006f)
                        val wb = across(bx, by, bz, .006f)
                        GLES20.glUniform4f(color, 1f, 1f, 1f, .85f * (1f - t0 / RAY_SHOWN * .9f))
                        drawArray(floatArrayOf(
                            ax - wa[0], ay - wa[1], az - wa[2], ax + wa[0], ay + wa[1], az + wa[2], bx + wb[0], by + wb[1], bz + wb[2],
                            ax - wa[0], ay - wa[1], az - wa[2], bx + wb[0], by + wb[1], bz + wb[2], bx - wb[0], by - wb[1], bz - wb[2],
                        ), GLES20.GL_TRIANGLES, position)
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
            GLES20.glUniform4f(color, 1f, 1f, 1f, 1f)
            ring3d(b[3], b[4], b[5], outer, inner, position)
            GLES20.glBlendFunc(GLES20.GL_SRC_ALPHA, GLES20.GL_ONE_MINUS_SRC_ALPHA)
        }

private fun ring3d(x: Float, y: Float, z: Float, outer: Float, inner: Float, position: Int) {
            val steps = 40
            val data = FloatArray(steps * 18)
            for (k in 0 until steps) {
                val a0 = (k * 2 * Math.PI / steps).toFloat(); val a1 = ((k + 1) * 2 * Math.PI / steps).toFloat()
                val c0 = kotlin.math.cos(a0); val s0 = kotlin.math.sin(a0); val c1 = kotlin.math.cos(a1); val s1 = kotlin.math.sin(a1)
                val o = k * 18
                floatArrayOf(
                    x + c0 * inner, y + s0 * inner, z, x + c0 * outer, y + s0 * outer, z, x + c1 * outer, y + s1 * outer, z,
                    x + c0 * inner, y + s0 * inner, z, x + c1 * outer, y + s1 * outer, z, x + c1 * inner, y + s1 * inner, z,
                ).copyInto(data, o)
            }
            drawArray(data, GLES20.GL_TRIANGLES, position)
        }
}

package com.nextvr.app

import android.graphics.Color
import android.opengl.GLES20
import android.opengl.Matrix
import android.util.Base64
import org.json.JSONArray
import java.nio.ByteBuffer
import java.nio.ByteOrder
import java.nio.FloatBuffer
import java.nio.ShortBuffer

/**
 * Mundo 3D jogável (plataforma de jogos nativa do NextVR).
 *
 * Desenha os objetos da cena do jogo no MESMO passe GLES2 do Cardboard que desenha as janelas, a
 * câmera e as mãos — não há WebXR nem segundo contexto. A divisão de trabalho:
 *  - a casca (three.js) gera a geometria de cada tipo e manda UMA vez, em base64 ([offerMesh]);
 *  - a casca manda a cena (matriz 4x4 + cor + seleção de cada objeto) a cada mudança ([offerObjects]);
 *  - aqui só existem VBOs e um draw call por objeto, com profundidade ligada, então os objetos
 *    ocluem e são ocluídos pelas janelas de verdade.
 *
 * Threading: `offerMesh`/`offerObjects` rodam na thread do bridge do WebView e só guardam estado;
 * todo GL acontece em [draw], na thread de render.
 */
class GameSceneRenderer {
    private val program = SpatialRenderer.link(
        "attribute vec3 aPosition; attribute vec3 aNormal; uniform mat4 uMvp; uniform mat4 uModel; varying vec3 vNormal; void main(){vNormal=normalize((uModel*vec4(aNormal,0.)).xyz);gl_Position=uMvp*vec4(aPosition,1.);}",
        "precision mediump float; varying vec3 vNormal; uniform vec4 uColor; uniform float uSelected; void main(){vec3 n=normalize(vNormal); float key=max(dot(n,normalize(vec3(.42,.78,.46))),0.); float fill=max(dot(n,normalize(vec3(-.55,.25,-.6))),0.)*.22; float light=.36+.64*key+fill; vec3 c=uColor.rgb*light; c=mix(c,vec3(1.),uSelected*.16); gl_FragColor=vec4(c*uColor.a,uColor.a);}")
    private val aPosition = GLES20.glGetAttribLocation(program, "aPosition")
    private val aNormal = GLES20.glGetAttribLocation(program, "aNormal")
    private val uMvp = GLES20.glGetUniformLocation(program, "uMvp")
    private val uModel = GLES20.glGetUniformLocation(program, "uModel")
    private val uColor = GLES20.glGetUniformLocation(program, "uColor")
    private val uSelected = GLES20.glGetUniformLocation(program, "uSelected")

    private class Mesh(val vbo: Int, val ibo: Int, val indices: Int)

    private class Obj(val kind: String, val matrix: FloatArray, val color: FloatArray, val selected: Boolean)

    /** Malhas já subidas para a GL, por tipo. O contexto EGL vive enquanto o renderer viver. */
    private val meshes = HashMap<String, Mesh>()

    /** Geometria recebida da casca e ainda não subida (a subida é na thread de render). */
    private val pending = LinkedHashMap<String, Array<String>>()

    @Volatile
    private var objects: List<Obj> = emptyList()

    private val mvp = FloatArray(16)

    /**
     * Geometria de um tipo: posições e normais (float32 LE, base64) e índices (uint16 LE, base64).
     * O mesmo formato que `Float32Array`/`Uint16Array` do three.js produz, sem conversão de ordem
     * de bytes: Android é little-endian.
     */
    fun offerMesh(kind: String, positions: String, normals: String, indices: String) {
        if (!KINDS.contains(kind)) return
        synchronized(pending) { pending[kind] = arrayOf(positions, normals, indices) }
    }

    /** Cena: `[{k:tipo, m:[16], c:"#rrggbb", s:0|1}, …]`. Matriz column-major, como no three.js. */
    fun offerObjects(json: String) {
        objects = try {
            decode(json)
        } catch (e: Exception) {
            android.util.Log.w("NextVR", "Invalid game scene", e)
            emptyList()
        }
    }

    private fun decode(json: String): List<Obj> {
        val array = JSONArray(json)
        val limit = minOf(array.length(), MAX_OBJECTS)
        val out = ArrayList<Obj>(limit)
        for (i in 0 until limit) {
            val o = array.optJSONObject(i) ?: continue
            val kind = o.optString("k", "")
            if (!KINDS.contains(kind)) continue
            val m = o.optJSONArray("m") ?: continue
            if (m.length() < 16) continue
            val matrix = FloatArray(16)
            var finite = true
            for (k in 0 until 16) {
                val v = m.optDouble(k, 0.0).toFloat()
                if (!v.isFinite()) { finite = false; break }
                matrix[k] = v
            }
            if (!finite) continue
            val rgba = try { Color.parseColor(o.optString("c", "#a78bfa")) } catch (e: Exception) { 0xffa78bfa.toInt() }
            val color = floatArrayOf(
                Color.red(rgba) / 255f, Color.green(rgba) / 255f, Color.blue(rgba) / 255f,
                if (Color.alpha(rgba) == 0) 1f else Color.alpha(rgba) / 255f)
            out.add(Obj(kind, matrix, color, o.optInt("s", 0) != 0))
        }
        return out
    }

    private fun uploadPending() {
        val batch = synchronized(pending) {
            if (pending.isEmpty()) null else HashMap(pending).also { pending.clear() }
        } ?: return
        for ((kind, parts) in batch) {
            val mesh = upload(parts[0], parts[1], parts[2]) ?: continue
            meshes.remove(kind)?.let { release(it) }
            meshes[kind] = mesh
        }
    }

    private fun upload(positions: String, normals: String, indices: String): Mesh? {
        val pos = floats(positions) ?: return null
        val nrm = floats(normals) ?: return null
        val idx = shorts(indices) ?: return null
        val vertices = pos.limit() / 3
        if (vertices < 3 || nrm.limit() / 3 != vertices || idx.limit() < 3) return null
        // Interleaved pos+normal (24 bytes por vértice): um VBO só por tipo.
        val interleaved = ByteBuffer.allocateDirect(vertices * 24).order(ByteOrder.nativeOrder()).asFloatBuffer()
        for (i in 0 until vertices) {
            interleaved.put(pos.get(i * 3)).put(pos.get(i * 3 + 1)).put(pos.get(i * 3 + 2))
            interleaved.put(nrm.get(i * 3)).put(nrm.get(i * 3 + 1)).put(nrm.get(i * 3 + 2))
        }
        interleaved.position(0)
        idx.position(0)
        val buffers = IntArray(2)
        GLES20.glGenBuffers(2, buffers, 0)
        GLES20.glBindBuffer(GLES20.GL_ARRAY_BUFFER, buffers[0])
        GLES20.glBufferData(GLES20.GL_ARRAY_BUFFER, vertices * 24, interleaved, GLES20.GL_STATIC_DRAW)
        GLES20.glBindBuffer(GLES20.GL_ELEMENT_ARRAY_BUFFER, buffers[1])
        GLES20.glBufferData(GLES20.GL_ELEMENT_ARRAY_BUFFER, idx.limit() * 2, idx, GLES20.GL_STATIC_DRAW)
        GLES20.glBindBuffer(GLES20.GL_ARRAY_BUFFER, 0)
        GLES20.glBindBuffer(GLES20.GL_ELEMENT_ARRAY_BUFFER, 0)
        return Mesh(buffers[0], buffers[1], idx.limit())
    }

    private fun floats(base64: String): FloatBuffer? = try {
        ByteBuffer.wrap(Base64.decode(base64, Base64.DEFAULT)).order(ByteOrder.nativeOrder()).asFloatBuffer()
    } catch (e: Exception) { null }

    private fun shorts(base64: String): ShortBuffer? = try {
        ByteBuffer.wrap(Base64.decode(base64, Base64.DEFAULT)).order(ByteOrder.nativeOrder()).asShortBuffer()
    } catch (e: Exception) { null }

    private fun release(mesh: Mesh) {
        GLES20.glDeleteBuffers(2, intArrayOf(mesh.vbo, mesh.ibo), 0)
    }

    /**
     * Desenha a cena do jogo. Chamado entre o passe opaco e o passe translúcido das janelas: assim
     * os objetos ficam atrás do vidro das janelas e na frente do que é opaco, com profundidade real.
     */
    fun draw(view: FloatArray, projection: FloatArray) {
        uploadPending()
        val scene = objects
        if (scene.isEmpty() || meshes.isEmpty()) return
        GLES20.glUseProgram(program)
        GLES20.glEnable(GLES20.GL_DEPTH_TEST)
        GLES20.glDepthFunc(GLES20.GL_LEQUAL)
        GLES20.glDepthMask(true)
        // Painéis de vidro são de mão dupla; os sólidos do jogo também são vistos de dentro.
        GLES20.glDisable(GLES20.GL_CULL_FACE)
        GLES20.glBlendFunc(GLES20.GL_ONE, GLES20.GL_ONE_MINUS_SRC_ALPHA)
        GLES20.glEnableVertexAttribArray(aPosition)
        GLES20.glEnableVertexAttribArray(aNormal)
        for (o in scene) {
            val mesh = meshes[o.kind] ?: continue
            Matrix.multiplyMM(mvp, 0, projection, 0, view, 0)
            Matrix.multiplyMM(mvp, 0, mvp, 0, o.matrix, 0)
            GLES20.glUniformMatrix4fv(uMvp, 1, false, mvp, 0)
            GLES20.glUniformMatrix4fv(uModel, 1, false, o.matrix, 0)
            GLES20.glUniform4f(uColor, o.color[0], o.color[1], o.color[2], o.color[3])
            GLES20.glUniform1f(uSelected, if (o.selected) 1f else 0f)
            GLES20.glBindBuffer(GLES20.GL_ARRAY_BUFFER, mesh.vbo)
            GLES20.glVertexAttribPointer(aPosition, 3, GLES20.GL_FLOAT, false, 24, 0)
            GLES20.glVertexAttribPointer(aNormal, 3, GLES20.GL_FLOAT, false, 24, 12)
            GLES20.glBindBuffer(GLES20.GL_ELEMENT_ARRAY_BUFFER, mesh.ibo)
            GLES20.glDrawElements(GLES20.GL_TRIANGLES, mesh.indices, GLES20.GL_UNSIGNED_SHORT, 0)
        }
        GLES20.glDisableVertexAttribArray(aPosition)
        GLES20.glDisableVertexAttribArray(aNormal)
        GLES20.glBindBuffer(GLES20.GL_ARRAY_BUFFER, 0)
        GLES20.glBindBuffer(GLES20.GL_ELEMENT_ARRAY_BUFFER, 0)
    }

    companion object {
        /** Os tipos que a casca sabe gerar (ver `KINDS` em web/src/game.js). */
        private val KINDS = setOf("box", "sphere", "cylinder", "cone", "plate")
        private const val MAX_OBJECTS = 256
    }
}

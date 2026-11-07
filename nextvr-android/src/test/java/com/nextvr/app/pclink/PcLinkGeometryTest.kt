package com.nextvr.app.pclink

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test
import kotlin.math.sqrt

/**
 * The arithmetic that turns a camera image into a pose the PC can use.
 *
 * <p>These tests are the reason PC Link's hand positions are not a guess: the projection is a pinhole
 * model, the depth comes from the size of the palm, and both are checked against numbers that can be
 * worked out by hand. A sign error here is a hand behind the user's head — visible in a game, hard to
 * see in a log.
 */
class PcLinkGeometryTest {

    private val geometry = PcLinkGeometry(hfovDeg = 60f, aspect = 0.75f)

    private fun assertVector(expected: FloatArray, actual: FloatArray, tolerance: Float = 1e-5f) {
        assertEquals(expected.size, actual.size)
        for (i in expected.indices) assertEquals("component $i", expected[i], actual[i], tolerance)
    }

    @Test
    fun `a distancia sai do tamanho da palma`() {
        // d = 0.085 / (2 · palmWidth · tan(30°)) — uma palma que ocupa 8,5% da largura fica a ~0,87 m.
        assertEquals(0.866f, geometry.palmDistance(0.085f), 2e-3f)
        // Palma maior = mais perto. Este é o único sinal que importa e o único que a câmera dá.
        assertTrue(geometry.palmDistance(0.17f) < geometry.palmDistance(0.085f))
        assertTrue(geometry.palmDistance(0.04f) > geometry.palmDistance(0.085f))
        // Nada de infinito: uma palma degenerada cai no limite, não numa pose absurda.
        assertEquals(PcLinkGeometry.MIN_DISTANCE, geometry.palmDistance(0f), 1e-6f)
        assertEquals(PcLinkGeometry.MAX_DISTANCE, geometry.palmDistance(0.001f), 1e-6f)
        assertEquals(PcLinkGeometry.MIN_DISTANCE, geometry.palmDistance(0.9f), 1e-6f)
    }

    @Test
    fun `o centro da imagem e o eixo da camera, em metros`() {
        val out = FloatArray(3)
        geometry.project(0.5f, 0.5f, 0.8f, out, 0)
        assertVector(floatArrayOf(0f, 0f, -0.8f), out)
        // +x na imagem é +x no espaço; +y na imagem é -y (a imagem cresce para baixo).
        geometry.project(0.75f, 0.25f, 1f, out, 0)
        assertTrue(out[0] > 0f)
        assertTrue(out[1] > 0f)
        assertEquals(-1f, out[2], 1e-6f)
        // No limite da imagem, o deslocamento é d·tan(hfov/2).
        geometry.project(1f, 0.5f, 1f, out, 0)
        assertEquals(0.57735f, out[0], 1e-3f)
    }

    @Test
    fun `girar por um quaternion de 90 graus roda para o lado certo`() {
        // 90° em torno de Y: +X vai para -Z (direita -> frente).
        val half = (Math.PI / 4.0).toFloat()
        val q = floatArrayOf(0f, kotlin.math.sin(half), 0f, kotlin.math.cos(half))
        val out = FloatArray(3)
        PcLinkGeometry.rotateByQuat(q, floatArrayOf(1f, 0f, 0f), out)
        assertVector(floatArrayOf(0f, 0f, -1f), out)
        // A identidade não muda nada.
        PcLinkGeometry.rotateByQuat(floatArrayOf(0f, 0f, 0f, 1f), floatArrayOf(0.2f, -0.3f, 0.4f), out)
        assertVector(floatArrayOf(0.2f, -0.3f, 0.4f), out)
    }

    @Test
    fun `compor rotacoes mantem o quaternion unitario`() {
        val a = floatArrayOf(0f, 0.3826834f, 0f, 0.9238795f)   // 45° em Y
        val b = floatArrayOf(0.3826834f, 0f, 0f, 0.9238795f)   // 45° em X
        val out = FloatArray(4)
        PcLinkGeometry.quaternionMultiply(a, b, out)
        val n = sqrt(out[0] * out[0] + out[1] * out[1] + out[2] * out[2] + out[3] * out[3])
        assertEquals(1f, n, 1e-5f)
    }

    @Test
    fun `a quaternicao da basis respeita a ordem dos eixos`() {
        val identity = FloatArray(4)
        PcLinkGeometry.quaternionFromBasis(
            floatArrayOf(1f, 0f, 0f), floatArrayOf(0f, 1f, 0f), floatArrayOf(0f, 0f, 1f), identity,
        )
        assertVector(floatArrayOf(0f, 0f, 0f, 1f), identity)
        // 90° em Z: X vira Y.
        val rotated = FloatArray(4)
        PcLinkGeometry.quaternionFromBasis(
            floatArrayOf(0f, 1f, 0f), floatArrayOf(-1f, 0f, 0f), floatArrayOf(0f, 0f, 1f), rotated,
        )
        assertEquals(0.7071068f, rotated[2], 1e-5f)
        assertEquals(0.7071068f, rotated[3], 1e-5f)
    }

    @Test
    fun `a rotacao da cabeca sai da inversa da view`() {
        // A view de uma cabeça virada 30° para a direita, escrita como a inversa (que é o que o
        // renderer guarda): rotação de -30° em Y nos três primeiros eixos da matriz.
        val angle = Math.toRadians(-30.0).toFloat()
        val c = kotlin.math.cos(angle)
        val s = kotlin.math.sin(angle)
        val m = FloatArray(16)
        m[0] = c; m[2] = -s
        m[5] = 1f
        m[8] = s; m[10] = c
        m[15] = 1f
        val q = FloatArray(4)
        PcLinkGeometry.headQuaternion(m, q)
        val n = sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3])
        assertEquals(1f, n, 1e-5f)
        // Rotação em torno de Y: só y e w são diferentes de zero.
        assertEquals(0f, q[0], 1e-6f)
        assertEquals(kotlin.math.sin(angle / 2f), q[1], 1e-5f)
        assertEquals(0f, q[2], 1e-6f)
        assertEquals(kotlin.math.cos(angle / 2f), q[3], 1e-5f)
    }
}

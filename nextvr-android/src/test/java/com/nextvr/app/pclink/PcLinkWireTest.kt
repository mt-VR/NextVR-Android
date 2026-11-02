package com.nextvr.app.pclink

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test
import java.nio.ByteBuffer
import java.nio.ByteOrder

/**
 * The byte table, checked field by field against `pclink/wire.mjs`.
 *
 * <p>These are the tests that catch the class of bug a phone and a PC can disagree about for weeks: an
 * offset that is right on one side and wrong on the other, a packet that is 648 bytes on paper and 652
 * on the wire, a video header whose size quietly changed. `tests/pclink-protocol.test.mjs` checks the
 * JavaScript side and the C++ layout; this one checks the Android side, and both read the same
 * `pclink/PROTOCOL.md`.
 */
class PcLinkWireTest {

    private fun hand() = PcLinkWire.HandPacket()

    private fun packet(
        left: PcLinkWire.HandPacket = hand(),
        right: PcLinkWire.HandPacket = hand(),
        seq: Long = 7,
        head: Boolean = true,
    ): ByteArray {
        val buffer = ByteArray(PcLinkWire.TRACKING_BYTES)
        val written = PcLinkWire.encodeTracking(
            into = buffer,
            seq = seq,
            captureNs = 1_234_567_890L,
            headValid = head,
            headPos = floatArrayOf(0.1f, 1.7f, -0.2f),
            headRot = floatArrayOf(0f, 0.3826834f, 0f, 0.9238795f),
            ipd = 0.064f,
            userHeight = 1.78f,
            worldScale = 1.25f,
            left = left,
            right = right,
        )
        assertEquals(PcLinkWire.TRACKING_BYTES, written)
        return buffer
    }

    @Test
    fun `o pacote tem 648 bytes e o magic certo`() {
        // 88 bytes de cabeçalho + 2 mãos × (3 + 4 + 21 × 3) floats.
        assertEquals(648, PcLinkWire.TRACKING_BYTES)
        assertEquals(88 + 2 * 280, PcLinkWire.TRACKING_BYTES)
        assertEquals(280, PcLinkWire.HAND_BYTES)
        val bytes = packet()
        assertEquals("NVRT", String(bytes, 0, 4, Charsets.US_ASCII))
    }

    @Test
    fun `o cabecalho fica exatamente onde o JavaScript e o C++ dizem`() {
        val b = ByteBuffer.wrap(packet()).order(ByteOrder.LITTLE_ENDIAN)
        assertEquals(1, b.getShort(4).toInt() and 0xffff)            // versão
        assertEquals(7L, b.getInt(8).toLong() and 0xffffffffL)        // seq
        assertEquals(1_234_567_890L, b.getLong(12))                   // captureNs
        assertEquals(0.1f, b.getFloat(20), 1e-7f)                     // cabeça x
        assertEquals(1.7f, b.getFloat(24), 1e-7f)                     // cabeça y
        assertEquals(-0.2f, b.getFloat(28), 1e-7f)                    // cabeça z
        assertEquals(0.3826834f, b.getFloat(36), 1e-7f)               // rotação y
        assertEquals(0.064f, b.getFloat(48), 1e-7f)                   // IPD
        assertEquals(1.78f, b.getFloat(52), 1e-7f)                    // altura
        assertEquals(1.25f, b.getFloat(56), 1e-7f)                    // escala do mundo
        assertEquals(0f, b.getFloat(60), 0f)                          // reservado
    }

    @Test
    fun `as maos comecam no byte 88 e a direita no 368`() {
        val left = hand()
        left.present = true
        left.palm[0] = 0.25f; left.palm[1] = 1.30f; left.palm[2] = -0.40f
        left.joints[3] = 11f                 // joint 1, eixo x
        left.joints[62] = 22f                // joint 20, eixo z
        val right = hand()
        right.present = true
        right.palm[0] = -0.25f
        val bytes = packet(left = left, right = right)
        val b = ByteBuffer.wrap(bytes).order(ByteOrder.LITTLE_ENDIAN)
        // Palma da esquerda: 3 floats de posição, 4 de rotação, depois 63 de joints.
        assertEquals(0.25f, b.getFloat(88), 1e-7f)
        assertEquals(1.30f, b.getFloat(92), 1e-7f)
        assertEquals(-0.40f, b.getFloat(96), 1e-7f)
        assertEquals(11f, b.getFloat(88 + 28 + 3 * 4), 1e-7f)
        assertEquals(22f, b.getFloat(88 + 28 + 62 * 4), 1e-7f)
        assertEquals(-0.25f, b.getFloat(368), 1e-7f)
        assertEquals(368 + 280, PcLinkWire.TRACKING_BYTES)
    }

    @Test
    fun `os flags dizem qual mao esta presente e se a cabeca vale`() {
        val left = hand().apply { present = true; confidence = 0.9f }
        val right = hand().apply { present = false; predicted = true; confidence = 0.2f }
        val b = ByteBuffer.wrap(packet(left = left, right = right)).order(ByteOrder.LITTLE_ENDIAN)
        val flags = b.getShort(6).toInt() and 0xffff
        assertTrue("cabeça presente", flags and PcLinkWire.FLAG_HEAD != 0)
        assertTrue("mão esquerda presente", flags and PcLinkWire.FLAG_LEFT_PRESENT != 0)
        assertTrue("mão direita ausente", flags and PcLinkWire.FLAG_RIGHT_PRESENT == 0)
        assertTrue("mão direita predita", flags and PcLinkWire.FLAG_RIGHT_PREDICTED != 0)
        assertTrue("só a esquerda é confiável", flags and PcLinkWire.FLAG_LEFT_CONFIDENT != 0)
        assertTrue(flags and PcLinkWire.FLAG_RIGHT_CONFIDENT == 0)
        // Sem cabeça, o primeiro bit cai: o driver não publica pose que não recebeu.
        val noHead = ByteBuffer.wrap(packet(head = false)).order(ByteOrder.LITTLE_ENDIAN)
        assertEquals(0, noHead.getShort(6).toInt() and PcLinkWire.FLAG_HEAD)
    }

    @Test
    fun `quaternion invalido vira identidade em vez de NaN`() {
        val left = hand().apply {
            present = true
            rot[0] = Float.NaN; rot[1] = 0f; rot[2] = 0f; rot[3] = 0f
        }
        val b = ByteBuffer.wrap(packet(left = left)).order(ByteOrder.LITTLE_ENDIAN)
        assertEquals(0f, b.getFloat(88 + 12), 0f)
        assertEquals(1f, b.getFloat(88 + 24), 0f)
        // E um quaternion não unitário chega normalizado, porque o PC não deve normalizar por conta.
        val tilted = hand().apply { rot[0] = 0f; rot[1] = 0f; rot[2] = 0f; rot[3] = 4f }
        val n = ByteBuffer.wrap(packet(left = tilted)).order(ByteOrder.LITTLE_ENDIAN)
        assertEquals(1f, n.getFloat(88 + 24), 1e-6f)
    }

    @Test
    fun `o cabecalho de video tem 28 bytes e le os campos de volta`() {
        assertEquals(28, PcLinkWire.VIDEO_HEADER_BYTES)
        assertEquals(1200, PcLinkWire.VIDEO_MTU)
        val fragment = ByteArray(28 + 5)
        val b = ByteBuffer.wrap(fragment).order(ByteOrder.LITTLE_ENDIAN)
        b.put("NVRV".toByteArray(Charsets.US_ASCII))
        b.putShort(1)
        b.put(PcLinkWire.CODEC_HEVC.toByte())
        b.put((PcLinkWire.VIDEO_FLAG_KEYFRAME or PcLinkWire.VIDEO_FLAG_STEREO).toByte())
        b.putInt(4242)
        b.putLong(999_000_000L)
        b.putShort(3)
        b.putShort(9)
        b.putInt(5)
        val header = PcLinkWire.parseVideoHeader(fragment, fragment.size)
        assertNotNull(header)
        header!!
        assertEquals(PcLinkWire.CODEC_HEVC, header.codec)
        assertTrue(header.keyframe)
        assertTrue(header.stereo)
        assertEquals(4242, header.frameId)
        assertEquals(999_000_000L, header.captureNs)
        assertEquals(3, header.index)
        assertEquals(9, header.count)
        assertEquals(5, header.payloadBytes)
        // Qualquer outra coisa na porta 44702 é descartada sem exceção: a rede é compartilhada.
        assertNull(PcLinkWire.parseVideoHeader(ByteArray(28), 28))
        assertNull(PcLinkWire.parseVideoHeader(fragment, 12))
    }

    @Test
    fun `remonta um quadro fora de ordem e conta os pedacos`() {
        val assembler = PcLinkWire.VideoAssembler()
        val pieces = listOf(byteArrayOf(1, 2, 3), byteArrayOf(4, 5), byteArrayOf(6))
        val packets = pieces.mapIndexed { index, payload ->
            fragment(payload, frameId = 10, index = index, count = pieces.size)
        }
        assertNull(assembler.push(packets[2], packets[2].size))
        assertNull(assembler.push(packets[0], packets[0].size))
        val frame = assembler.push(packets[1], packets[1].size)
        assertNotNull(frame)
        assertEquals(0, assembler.dropped)
        assertEquals(1, assembler.completed)
        assertEquals(byteArrayOf(1, 2, 3, 4, 5, 6).toList(), frame!!.payload.toList())
        assertEquals(10, frame.frameId)
    }

    @Test
    fun `um quadro novo joga fora o antigo incompleto`() {
        val assembler = PcLinkWire.VideoAssembler()
        val first = fragment(byteArrayOf(1, 2), frameId = 20, index = 0, count = 2)
        val second = fragment(byteArrayOf(3, 4), frameId = 21, index = 0, count = 1)
        assertNull(assembler.push(first, first.size))
        val frame = assembler.push(second, second.size)
        assertNotNull(frame)
        assertEquals(21, frame!!.frameId)
        assertEquals(1, assembler.dropped)
        assertEquals(2, frame.payload.toList().size)
    }

    @Test
    fun `o pedido de descoberta e reconhecivel e curto`() {
        val request = PcLinkWire.discoveryRequest()
        assertEquals("NVRD1 ?", String(request, Charsets.US_ASCII))
        assertTrue(PcLinkWire.isDiscoveryReply(request, request.size))
        assertTrue(!PcLinkWire.isDiscoveryReply(ByteArray(8), 8))
    }

    @Test
    fun `o perfil de qualidade e o mesmo do pc`() {
        // Os três números que o PC Bridge e o perfil mostram. Se mudarem lá, mudam aqui.
        assertEquals("video/avc", PcLinkWire.codecMime(PcLinkWire.CODEC_H264))
        assertEquals("video/hevc", PcLinkWire.codecMime(PcLinkWire.CODEC_HEVC))
        assertEquals(2, PcLinkWire.codecId("hevc"))
        assertEquals(1, PcLinkWire.codecId("h264"))
        assertEquals(1, PcLinkWire.codecId(null))
    }

    /** One video datagram. `payloadBytes` is the length of THIS slice, like `fragmentFrame` writes. */
    private fun fragment(payload: ByteArray, frameId: Int, index: Int, count: Int): ByteArray {
        val out = ByteArray(PcLinkWire.VIDEO_HEADER_BYTES + payload.size)
        val b = ByteBuffer.wrap(out).order(ByteOrder.LITTLE_ENDIAN)
        b.put("NVRV".toByteArray(Charsets.US_ASCII))
        b.putShort(1)
        b.put(PcLinkWire.CODEC_H264.toByte())
        b.put(PcLinkWire.VIDEO_FLAG_STEREO.toByte())
        b.putInt(frameId)
        b.putLong(0L)
        b.putShort(index.toShort())
        b.putShort(count.toShort())
        b.putInt(payload.size)
        b.put(payload)
        return out
    }
}

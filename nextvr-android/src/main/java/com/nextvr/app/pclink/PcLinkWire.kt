package com.nextvr.app.pclink

import java.nio.ByteBuffer
import java.nio.ByteOrder

/**
 * NextVR PC Link — the bytes that travel between the phone and the PC.
 *
 * <p>This is the Android side of `pclink/wire.mjs`, and both follow
 * `pclink/PROTOCOL.md`. The three channels exist because each one has a different requirement:
 *
 *  * <b>control</b> (TCP 44701) — JSON lines. Low volume, needs an answer and a reconnect; a lost
 *    request must not turn into a lying state.
 *  * <b>tracking</b> (UDP 44703) — binary, 648 bytes, up to 90 Hz. Only the NEWEST packet matters:
 *    a lost one is replaced 11 ms later, and the `seq` says which is new. Nothing is retransmitted.
 *  * <b>video</b> (UDP 44702) — compressed frames cut into pieces below the MTU, reassembled by
 *    `frameId`. Losing one piece loses exactly one frame, and that frame must not be waited for.
 *
 * <p>There is deliberately no Kotlin encoder for the 744-byte shared-state block: that one is
 * written by the PC Bridge for the SteamVR driver (`pc-bridge/src/state-writer.mjs`), and a second
 * implementation on the phone would only be a second thing to keep in sync. The phone sends 648-byte
 * tracking packets and reads JSON state.
 *
 * <p>Everything here is little-endian, allocation-free where it counts (the tracking path runs at
 * display rate on the tracking thread, and 648 bytes per packet at 90 Hz of fresh `ByteArray`s is
 * exactly the garbage that shows up as a stutter in the hand), and pure: no sockets, no threads, no
 * Android. That is what lets `PcLinkWireTest` check every offset against the JS table.
 */
object PcLinkWire {

    /** Version of the wire format. A side that does not know it says so instead of guessing. */
    const val VERSION = 1

    const val DISCOVERY_PORT = 44700
    const val CONTROL_PORT = 44701
    const val VIDEO_PORT = 44702
    const val TRACKING_PORT = 44703

    const val TRACKING_MAGIC = "NVRT"
    const val VIDEO_MAGIC = "NVRV"
    const val DISCOVERY_MAGIC = "NVRD"

    /** MediaPipe joints per hand — the 21 points NextVR's own tracker already produces. */
    const val JOINT_COUNT = 21
    const val SIDES = 2

    /** Header before the hands: magic, version, flags, seq, capture time, head, calibration. */
    const val HEADER_BYTES = 88
    /** Palm (position + rotation) plus 21 joints of one hand, in bytes. */
    const val HAND_BYTES = (7 + JOINT_COUNT * 3) * 4
    /** A whole tracking packet. */
    const val TRACKING_BYTES = HEADER_BYTES + SIDES * HAND_BYTES

    /** Header in front of every video fragment. */
    const val VIDEO_HEADER_BYTES = 28
    /** How much H.264/HEVC fits in one datagram without IP fragmentation. */
    const val VIDEO_MTU = 1200

    /** Tracking header flags. */
    const val FLAG_HEAD = 1 shl 0
    const val FLAG_LEFT_PRESENT = 1 shl 1
    const val FLAG_RIGHT_PRESENT = 1 shl 2
    const val FLAG_LEFT_PREDICTED = 1 shl 3
    const val FLAG_RIGHT_PREDICTED = 1 shl 4
    const val FLAG_LEFT_CONFIDENT = 1 shl 5
    const val FLAG_RIGHT_CONFIDENT = 1 shl 6

    /** Video flags. */
    const val VIDEO_FLAG_KEYFRAME = 1 shl 0
    const val VIDEO_FLAG_STEREO = 1 shl 1

    /** Codec identifiers on the wire; renaming a codec does not change the protocol. */
    const val CODEC_H264 = 1
    const val CODEC_HEVC = 2

    fun codecId(name: String?): Int = if ("hevc".equals(name, ignoreCase = true)) CODEC_HEVC else CODEC_H264
    fun codecMime(id: Int): String = if (id == CODEC_HEVC) "video/hevc" else "video/avc"

    /** Discovery request: small, fixed, recognisable. */
    fun discoveryRequest(): ByteArray = "$DISCOVERY_MAGIC$VERSION ?".toByteArray(Charsets.US_ASCII)

    fun isDiscoveryReply(packet: ByteArray, length: Int): Boolean {
        if (length < 5) return false
        for (i in DISCOVERY_MAGIC.indices) if (packet[i] != DISCOVERY_MAGIC[i].code.toByte()) return false
        return true
    }

    /**
     * One hand exactly as the phone will send it, in tracking space and metres.
     *
     * <p>Mutable and reused per frame on purpose: the sender keeps one instance per side and
     * overwrites it, because the alternative is 2 × 63 floats of garbage at up to 90 Hz.
     */
    class HandPacket {
        var present = false
        var predicted = false
        /** 0..1, from the tracker. Gates the `confident` flag at 0.5, like the PC expects. */
        var confidence = 0f
        var pinch = false
        var fist = false
        val palm = FloatArray(3)
        val rot = FloatArray(4) { if (it == 3) 1f else 0f }
        /** 21 joints × 3 floats, metres, same space as [palm]. */
        val joints = FloatArray(JOINT_COUNT * 3)

        fun clear() {
            present = false
            predicted = false
            confidence = 0f
            pinch = false
            fist = false
            palm.fill(0f)
            rot.fill(0f); rot[3] = 1f
            joints.fill(0f)
        }
    }

    /**
     * Writes a tracking packet into a buffer that the caller reuses.
     *
     * @param into at least [TRACKING_BYTES] long; the same array is safe to pass every frame.
     */
    fun encodeTracking(
        into: ByteArray,
        seq: Long,
        captureNs: Long,
        headValid: Boolean,
        headPos: FloatArray,
        headRot: FloatArray,
        ipd: Float,
        userHeight: Float,
        worldScale: Float,
        left: HandPacket,
        right: HandPacket,
    ): Int {
        require(into.size >= TRACKING_BYTES) { "tracking buffer too small: ${into.size}" }
        val b = ByteBuffer.wrap(into).order(ByteOrder.LITTLE_ENDIAN)
        b.put(TRACKING_MAGIC.toByteArray(Charsets.US_ASCII), 0, 4)
        b.putShort(VERSION.toShort())

        var flags = 0
        if (headValid) flags = flags or FLAG_HEAD
        if (left.present) flags = flags or FLAG_LEFT_PRESENT
        if (right.present) flags = flags or FLAG_RIGHT_PRESENT
        if (left.predicted) flags = flags or FLAG_LEFT_PREDICTED
        if (right.predicted) flags = flags or FLAG_RIGHT_PREDICTED
        if (left.confidence >= 0.5f) flags = flags or FLAG_LEFT_CONFIDENT
        if (right.confidence >= 0.5f) flags = flags or FLAG_RIGHT_CONFIDENT
        b.putShort(flags.toShort())

        b.putInt(seq.toInt())
        b.putLong(captureNs)

        for (i in 0 until 3) b.putFloat(headPos[i])
        putQuaternion(b, headRot)

        b.putFloat(ipd)
        b.putFloat(userHeight)
        b.putFloat(worldScale)
        b.putFloat(0f)                       // reserved: a future audio field

        b.putFloat(clamp01(left.confidence)); b.putFloat(clamp01(right.confidence))
        b.putFloat(if (left.pinch) 1f else 0f); b.putFloat(if (right.pinch) 1f else 0f)
        b.putFloat(if (left.fist) 1f else 0f); b.putFloat(if (right.fist) 1f else 0f)

        putHand(b, left)
        putHand(b, right)
        return TRACKING_BYTES
    }

    private fun putHand(b: ByteBuffer, hand: HandPacket) {
        for (i in 0 until 3) b.putFloat(hand.palm[i])
        putQuaternion(b, hand.rot)
        for (v in hand.joints) b.putFloat(v)
    }

    /** A quaternion is normalised on the wire: a garbage number becomes the identity, not NaN. */
    private fun putQuaternion(b: ByteBuffer, q: FloatArray) {
        val n = Math.sqrt((q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]).toDouble()).toFloat()
        if (!(n > 1e-6f) || n.isNaN() || n.isInfinite()) {
            b.putFloat(0f); b.putFloat(0f); b.putFloat(0f); b.putFloat(1f)
            return
        }
        b.putFloat(q[0] / n); b.putFloat(q[1] / n); b.putFloat(q[2] / n); b.putFloat(q[3] / n)
    }

    private fun clamp01(v: Float): Float = if (v < 0f) 0f else if (v > 1f) 1f else if (v.isNaN()) 0f else v

    // ------------------------------------------------------------------ video

    /** Header of one video fragment. */
    data class VideoHeader(
        val codec: Int,
        val keyframe: Boolean,
        val stereo: Boolean,
        val frameId: Int,
        val captureNs: Long,
        val index: Int,
        val count: Int,
        val payloadBytes: Int,
    )

    /** Reads a fragment header, or null when the datagram is not ours (the LAN carries lots of UDP). */
    fun parseVideoHeader(packet: ByteArray, length: Int): VideoHeader? {
        if (length < VIDEO_HEADER_BYTES) return null
        for (i in VIDEO_MAGIC.indices) if (packet[i] != VIDEO_MAGIC[i].code.toByte()) return null
        val b = ByteBuffer.wrap(packet, 0, VIDEO_HEADER_BYTES).order(ByteOrder.LITTLE_ENDIAN)
        b.position(4)
        if (b.short.toInt() and 0xffff != VERSION) return null
        val codec = b.get().toInt() and 0xff
        val flags = b.get().toInt() and 0xff
        return VideoHeader(
            codec = codec,
            keyframe = flags and VIDEO_FLAG_KEYFRAME != 0,
            stereo = flags and VIDEO_FLAG_STEREO != 0,
            frameId = b.int,
            captureNs = b.long,
            index = b.short.toInt() and 0xffff,
            count = b.short.toInt() and 0xffff,
            payloadBytes = b.int,
        )
    }

    /** A whole compressed frame, put back together. */
    class AssembledFrame(
        val codec: Int,
        val keyframe: Boolean,
        val stereo: Boolean,
        val frameId: Int,
        val captureNs: Long,
        val payload: ByteArray,
    )

    /**
     * Puts a frame back together from its fragments.
     *
     * <p>At most [maxPendingFrames] frames are in flight. A frame whose piece was lost is thrown away
     * as soon as a NEWER frame starts — waiting for a fragment that will never come is latency in the
     * decoder queue, and the next frame is already on its way. That rule, plus the `frameId`
     * comparison, is the same one `VideoAssembler` in `pclink/wire.mjs` uses, and it is tested on
     * both sides.
     */
    class VideoAssembler(private val maxPendingFrames: Int = 2) {
        private class Slot(val header: VideoHeader) {
            val parts = arrayOfNulls<ByteArray>(header.count)
            var received = 0
        }

        private val pending = LinkedHashMap<Int, Slot>(4)
        var completed = 0; private set
        var dropped = 0; private set
        var corrupt = 0; private set

        fun reset() {
            pending.clear()
        }

        /** Feeds one datagram; returns a frame when this datagram completed one. */
        fun push(packet: ByteArray, length: Int): AssembledFrame? {
            val header = parseVideoHeader(packet, length) ?: return null
            if (header.count <= 0 || header.index >= header.count) { corrupt++; return null }
            val payloadLength = minOf(header.payloadBytes, length - VIDEO_HEADER_BYTES)
            if (payloadLength <= 0) { corrupt++; return null }

            var slot = pending[header.frameId]
            if (slot == null) {
                slot = Slot(header)
                pending[header.frameId] = slot
                while (pending.size > maxPendingFrames) {
                    val oldest = pending.keys.minOrNull() ?: break
                    pending.remove(oldest)
                    dropped++
                }
                // A newer frame arrived before the previous one finished: the previous one lost a
                // piece, and insisting on it only burns memory everyone needs.
                val iterator = pending.keys.iterator()
                while (iterator.hasNext()) {
                    val id = iterator.next()
                    if (id == header.frameId) continue
                    // Unsigned distance, so the comparison still works when the id wraps.
                    val ahead = (header.frameId.toLong() - id.toLong()) and 0xffffffffL
                    if (ahead in 1 until 0x80000000L) { iterator.remove(); dropped++ }
                }
            }
            if (slot.parts[header.index] == null) {
                slot.parts[header.index] = packet.copyOfRange(VIDEO_HEADER_BYTES, VIDEO_HEADER_BYTES + payloadLength)
                slot.received++
            }
            if (slot.received < slot.header.count) return null
            pending.remove(header.frameId)
            completed++
            var total = 0
            for (part in slot.parts) total += part?.size ?: 0
            val payload = ByteArray(total)
            var offset = 0
            for (part in slot.parts) {
                if (part == null) { corrupt++; return null }
                System.arraycopy(part, 0, payload, offset, part.size)
                offset += part.size
            }
            return AssembledFrame(
                codec = header.codec,
                keyframe = header.keyframe,
                stereo = header.stereo,
                frameId = header.frameId,
                captureNs = header.captureNs,
                payload = payload,
            )
        }
    }
}

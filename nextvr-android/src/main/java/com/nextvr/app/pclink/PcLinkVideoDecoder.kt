package com.nextvr.app.pclink

import android.media.MediaCodec
import android.media.MediaFormat
import android.os.Build
import android.os.SystemClock
import android.view.Surface
import java.util.ArrayDeque

/**
 * Hardware decode of the PC's video into a `Surface`.
 *
 * <h2>Why the frame arrives as one buffer</h2>
 *
 * <p>The PC sends Annex-B NAL units (see `steamvr-driver/src/win/frame_sink_win.cpp`), with the
 * parameter sets in band before every keyframe. Android's decoders accept that, but they want the
 * SPS/PPS as `csd-0`/`csd-1` when the codec is configured: this class pulls them out of the first
 * keyframe, configures the decoder with them, and feeds that same keyframe as the first buffer. No
 * second pass, no "wait for the next keyframe" stall on start-up.
 *
 * <h2>Why there is a queue with a limit of four</h2>
 *
 * <p>Decode is asynchronous: frames arrive on the network thread, the decoder consumes them on its
 * own thread. A queue is required. What is not allowed is a queue that grows: if the decoder falls
 * behind, the right answer is to drop the oldest frame and show a newer one, never to build latency
 * that the user feels as a swimming world. Four frames is one frame of headroom beyond a
 * triple-buffered pipeline.
 *
 * <p>`releaseOutputBuffer(index, true)` hands the buffer straight to the `Surface`, so the image never
 * touches system memory on the way to the eye texture: this is the hardware path the user asked for,
 * and it is the same one the rest of the app uses for Android app windows.
 */
class PcLinkVideoDecoder {

    /** What the interface shows about the stream: real counters, not a guess. */
    class Stats {
        @Volatile var frames = 0L
        @Volatile var dropped = 0L
        @Volatile var fps = 0f
        @Volatile var codec = PcLinkWire.CODEC_H264
        @Volatile var stereo = true
        @Volatile var width = 0
        @Volatile var height = 0
        @Volatile var surfaceReady = false
        @Volatile var failure: String? = null
        @Volatile var decodeMs = 0f
        private var windowStart = 0L
        private var windowFrames = 0

        fun countFrame() {
            frames++
            windowFrames++
            val now = SystemClock.elapsedRealtime()
            if (windowStart == 0L) windowStart = now
            val elapsed = now - windowStart
            if (elapsed >= 1000L) {
                fps = windowFrames * 1000f / elapsed
                windowFrames = 0
                windowStart = now
            }
        }
    }

    val stats = Stats()

    @Volatile private var width = 1832
    @Volatile private var height = 1920

    private val lock = Any()
    private val queue = ArrayDeque<PcLinkWire.AssembledFrame>(8)
    private var surface: Surface? = null
    private var codec: MediaCodec? = null
    private var configuredMime: String? = null
    private var configuredWidth = 0
    private var configuredHeight = 0
    private var thread: Thread? = null
    @Volatile private var running = false
    private var pts = 0L

    private val info = MediaCodec.BufferInfo()

    fun setSurface(surface: Surface?, width: Int, height: Int) {
        synchronized(lock) {
            this.surface = surface
            this.width = width.coerceAtLeast(64)
            this.height = height.coerceAtLeast(64)
            stats.width = this.width
            stats.height = this.height
            stats.surfaceReady = surface != null
            // A new surface means a new codec: MediaCodec cannot be pointed at a different output
            // after configure(), and swapping the SurfaceTexture under it shows nothing at all.
            releaseCodecLocked()
        }
        if (surface != null) start()
    }

    fun setVideoSize(width: Int, height: Int) {
        val w = width.coerceIn(64, 8192)
        val h = height.coerceIn(64, 8192)
        if (w == this.width && h == this.height) return
        this.width = w
        this.height = h
        stats.width = w; stats.height = h
        synchronized(lock) { releaseCodecLocked() }
    }

    fun start() {
        if (running) return
        running = true
        thread = Thread({ loop() }, "NextVR-PcLink-Decode").apply {
            priority = Thread.MAX_PRIORITY
            isDaemon = true
            start()
        }
    }

    fun stop() {
        running = false
        thread?.let {
            try { it.join(300) } catch (_: InterruptedException) { Thread.currentThread().interrupt() }
        }
        thread = null
        synchronized(lock) {
            queue.clear()
            releaseCodecLocked()
        }
    }

    /** Called from the socket thread: never blocks on the decoder. */
    fun push(frame: PcLinkWire.AssembledFrame) {
        synchronized(lock) {
            if (surface == null) return
            if (queue.size >= 4) {
                // Drop the oldest frame that nobody can save; a keyframe is worth keeping because
                // without it every following frame is a smear.
                val oldest = queue.peekFirst()
                if (oldest != null && !oldest.keyframe) {
                    queue.removeFirst(); stats.dropped++
                } else {
                    queue.removeLast(); stats.dropped++
                }
            }
            queue.addLast(frame)
            lock.notifyAll()
        }
    }

    private fun loop() {
        while (running) {
            // A local `var` with an initial value: Kotlin refuses to initialise a captured `val`
            // inside a lambda, and the wait has to happen under the lock.
            var next: PcLinkWire.AssembledFrame? = null
            synchronized(lock) {
                while (running && queue.isEmpty()) {
                    try { lock.wait(200) } catch (_: InterruptedException) { Thread.currentThread().interrupt(); return }
                }
                if (running && queue.isNotEmpty()) next = queue.removeFirst()
            }
            val frame = next ?: continue
            try {
                decode(frame)
            } catch (e: Exception) {
                stats.failure = e.javaClass.simpleName + ": " + (e.message ?: "")
                synchronized(lock) { releaseCodecLocked() }
            }
        }
    }

    private fun decode(frame: PcLinkWire.AssembledFrame) {
        val target = synchronized(lock) { surface } ?: return
        val mime = PcLinkWire.codecMime(frame.codec)
        val decoder = synchronized(lock) {
            if (codec == null || configuredMime != mime || configuredWidth != width || configuredHeight != height) {
                releaseCodecLocked()
                val created = configureLocked(mime, target, frame)
                codec = created
                configuredMime = mime
                configuredWidth = width
                configuredHeight = height
                created
            } else {
                codec ?: return
            }
        }
        stats.codec = frame.codec
        stats.stereo = frame.stereo

        val started = SystemClock.elapsedRealtimeNanos()
        val inputIndex = decoder.dequeueInputBuffer(10_000)
        if (inputIndex >= 0) {
            val buffer = decoder.getInputBuffer(inputIndex) ?: return
            buffer.clear()
            buffer.put(frame.payload)
            pts = if (frame.captureNs > 0) frame.captureNs / 1000 else pts + 13_889
            decoder.queueInputBuffer(inputIndex, 0, frame.payload.size, pts, 0)
        }
        var produced = 0
        while (true) {
            val outputIndex = decoder.dequeueOutputBuffer(info, if (produced == 0) 10_000 else 0)
            if (outputIndex == MediaCodec.INFO_TRY_AGAIN_LATER) break
            if (outputIndex == MediaCodec.INFO_OUTPUT_FORMAT_CHANGED) {
                val format = decoder.outputFormat
                stats.width = format.getInteger(MediaFormat.KEY_WIDTH)
                stats.height = format.getInteger(MediaFormat.KEY_HEIGHT)
                continue
            }
            if (outputIndex < 0) continue
            // `true` = draw it into the Surface now; the eye texture picks it up on the next frame.
            decoder.releaseOutputBuffer(outputIndex, true)
            produced++
        }
        if (produced > 0) {
            stats.countFrame()
            stats.decodeMs = (SystemClock.elapsedRealtimeNanos() - started) / 1_000_000f
        }
    }

    private fun configureLocked(mime: String, target: Surface, frame: PcLinkWire.AssembledFrame): MediaCodec {
        val format = MediaFormat.createVideoFormat(mime, width, height)
        val csd = parameterSets(frame.payload, frame.codec)
        if (csd != null) {
            format.setByteBuffer("csd-0", java.nio.ByteBuffer.wrap(csd.first))
            if (csd.second != null) format.setByteBuffer("csd-1", java.nio.ByteBuffer.wrap(csd.second!!))
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            // The whole point of the feature: do not let the decoder buffer frames to be safe.
            format.setInteger(MediaFormat.KEY_LOW_LATENCY, 1)
        }
        val decoder = MediaCodec.createDecoderByType(mime)
        try {
            decoder.configure(format, target, null, 0)
            decoder.start()
        } catch (e: Exception) {
            try { decoder.release() } catch (_: Exception) { }
            throw e
        }
        return decoder
    }

    private fun releaseCodecLocked() {
        val live = codec ?: return
        codec = null
        configuredMime = null
        try { live.stop() } catch (_: Exception) { }
        try { live.release() } catch (_: Exception) { }
    }

    companion object {
        /**
         * Pulls the parameter sets out of a keyframe.
         *
         * <p>H.264: SPS (7) and PPS (8). HEVC: the three NALs 32/33/34, which Android wants as a
         * single `csd-0` in the order VPS, SPS, PPS. Returns `(csd0, csd1)` with the start codes
         * included — that is what `MediaFormat` expects.
         */
        fun parameterSets(payload: ByteArray, codec: Int): Pair<ByteArray, ByteArray?>? {
            val units = nalUnits(payload)
            if (units.isEmpty()) return null
            if (codec == PcLinkWire.CODEC_HEVC) {
                var combined: ByteArray? = null
                for (unit in units) {
                    val type = (unit.value[unit.headerOffset].toInt() shr 1) and 0x3f
                    if (type in 32..34) combined = if (combined == null) unit.toBytes() else combined + unit.toBytes()
                }
                return combined?.let { it to null }
            }
            val sps = units.firstOrNull { (it.value[it.headerOffset].toInt() and 0x1f) == 7 }
            val pps = units.firstOrNull { (it.value[it.headerOffset].toInt() and 0x1f) == 8 }
            if (sps == null) return null
            return sps.toBytes() to pps?.toBytes()
        }

        /**
         * One NAL unit inside an Annex-B buffer.
         *
         * @param from where the start code begins — `csd-0` has to carry it, MediaCodec parses the
         *     codec-specific data as complete NAL units.
         * @param headerOffset first byte after the start code, whose low bits are the NAL type.
         */
        class Unit(val value: ByteArray, val from: Int, val headerOffset: Int, val end: Int) {
            val type: Int get() = value[headerOffset].toInt() and 0x1f
            fun toBytes(): ByteArray = value.copyOfRange(from, end)
        }

        /** Splits Annex-B into NAL units (start code `00 00 01` or `00 00 00 01`). */
        fun nalUnits(payload: ByteArray): List<Unit> {
            val out = ArrayList<Unit>(8)
            var i = 0
            var from = -1
            var start = -1
            while (i + 3 < payload.size) {
                val three = payload[i].toInt() == 0 && payload[i + 1].toInt() == 0 && payload[i + 2].toInt() == 1
                val four = i + 4 < payload.size && payload[i].toInt() == 0 && payload[i + 1].toInt() == 0 &&
                    payload[i + 2].toInt() == 0 && payload[i + 3].toInt() == 1
                if (three || four) {
                    if (from >= 0) out.add(Unit(payload, from, start, i))
                    from = i
                    start = if (four) i + 4 else i + 3
                    i += if (four) 4 else 3
                } else {
                    i++
                }
            }
            if (from >= 0 && start < payload.size) out.add(Unit(payload, from, start, payload.size))
            // A unit is only really a unit if it has a header byte to inspect.
            return out.filter { it.end > it.headerOffset }
        }
    }
}

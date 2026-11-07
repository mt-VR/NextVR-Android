package com.nextvr.app.pclink

import android.os.SystemClock
import android.view.Surface
import com.nextvr.app.hands.PhoneXrHands
import org.json.JSONObject

/**
 * PC Link, as the rest of the app sees it: one object that owns the socket work, the geometry and the
 * decoder, and answers with JSON.
 *
 * <h2>What is real here, and what is not</h2>
 *
 * <p>Every number this class reports comes from something that happened: the phase is the state of
 * the control socket, the FPS is counted frames from the decoder, the latency is a measured
 * ping/pong, the hand state is the age of the last tracking packet. There is no placeholder and no
 * simulated value — if the PC is not there, the answer is "not connected", not a plausible screen.
 *
 * <p>The one thing this class cannot do alone is draw: the decoded image has to be shown to both eyes
 * by the renderer (`SpatialRenderer.pcLinkEyes`), and the surface it decodes into is created by
 * `NextVrActivity` on the GL thread. The interfaces passes it in with [setSurface].
 *
 * <h2>Hands</h2>
 *
 * <p>The frames come from `PassthroughCamera` — the same `PhoneXrHands` the app's own windows and
 * games already use. There is no second tracker, no second model and no synthetic hand: if the
 * camera does not see a hand, the packet says the hand is not present and SteamVR hides it. The
 * driver turns the 21 measured joints into the 31 OpenVR bones; nothing here animates anything.
 */
class PcLink(private val deviceName: String) : PcLinkClient.Sink {

    /** Vision presets, the same numbers the PC Bridge and the profile page use. */
    class Quality(val bitrateMbps: Int, val fps: Int, val width: Int, val height: Int)

    private val client = PcLinkClient(deviceName, this)
    private val decoder = PcLinkVideoDecoder()
    private val geometry = PcLinkGeometry()
    private val left = PcLinkWire.HandPacket()
    private val right = PcLinkWire.HandPacket()
    private val packet = ByteArray(PcLinkWire.TRACKING_BYTES)
    private val head = FloatArray(7)
    private val headPos = FloatArray(3)
    private val headRot = FloatArray(4)
    private var seq = 0

    @Volatile private var latest: PhoneXrHands.Frame? = null
    @Volatile private var ipd = 0.063f
    @Volatile private var userHeight = 1.75f
    @Volatile private var worldScale = 1f
    @Volatile private var quality = "medium"
    @Volatile private var codec = PcLinkWire.CODEC_H264
    @Volatile private var handTracking = true
    @Volatile private var lastPacketHands = 0
    @Volatile private var stereo = true

    /**
     * Reads the head pose (position and quaternion, app frame) into `out[0..6]`.
     *
     * <p>Set by the activity from the renderer: the pose has to come from the same matrix the eyes
     * were drawn with, or the game's world lags behind the user's head by whatever the two paths
     * disagree on.
     */
    @Volatile
    var headSource: PcLinkHeadSource? = null

    /** True while the whole session is on, from the interface's point of view. */
    fun running(): Boolean = client.isRunning()

    fun start(mode: PcLinkClient.Mode, host: String?) {
        client.trackingSource = { into -> encodeTracking(into) }
        client.start(mode, host)
        decoder.start()
        client.setConfig(codecName(), qualityOf().width, qualityOf().height, qualityOf().fps,
            qualityOf().bitrateMbps, handTracking)
        client.calibrate(ipd, userHeight, worldScale)
    }

    fun stop() {
        client.stop()
        decoder.stop()
        latest = null
    }

    fun setHost(address: String?) = client.setHost(address)

    /** A frame from the app's own tracker. Called on the tracking thread; stores and returns. */
    fun offer(frame: PhoneXrHands.Frame) {
        latest = frame
    }

    /** The GL side's eye texture. `null` releases the decoder. */
    fun setSurface(surface: Surface?, width: Int, height: Int) {
        decoder.setSurface(surface, width, height)
    }

    /** Starts or stops streaming. Starting always re-sends the video configuration. */
    fun setSession(active: Boolean, qualityName: String? = null) {
        if (qualityName != null) quality = qualityName
        if (active) {
            val q = qualityOf()
            client.setConfig(codecName(), q.width, q.height, q.fps, q.bitrateMbps, handTracking)
            client.calibrate(ipd, userHeight, worldScale)
        }
        client.setSession(active)
    }

    fun calibrate(ipdMetres: Float, heightMetres: Float, scale: Float) {
        ipd = ipdMetres.coerceIn(0.03f, 0.09f)
        userHeight = heightMetres.coerceIn(1f, 2.3f)
        worldScale = scale.coerceIn(0.5f, 2f)
        client.calibrate(ipd, userHeight, worldScale)
    }

    fun setHandTracking(enabled: Boolean) {
        handTracking = enabled
        client.setConfig(codecName(), qualityOf().width, qualityOf().height, qualityOf().fps,
            qualityOf().bitrateMbps, enabled)
    }

    fun setQuality(name: String) {
        quality = name
        val q = qualityOf()
        client.setConfig(codecName(), q.width, q.height, q.fps, q.bitrateMbps, handTracking)
    }

    /** Commands from the interface, one JSON object at a time. */
    fun command(json: String) {
        val message = try { JSONObject(json) } catch (_: Exception) { return }
        when (message.optString("action")) {
            "connect" -> start(
                mode = when (message.optString("mode", "wifi")) {
                    "usb" -> PcLinkClient.Mode.USB
                    "auto" -> PcLinkClient.Mode.AUTO
                    else -> PcLinkClient.Mode.WIFI
                },
                host = message.optString("host", "").ifBlank { null },
            )
            "disconnect" -> stop()
            "session" -> setSession(message.optBoolean("active", false), message.optString("quality", "").ifBlank { null })
            "quality" -> setQuality(message.optString("quality", "medium"))
            "codec" -> {
                codec = PcLinkWire.codecId(message.optString("codec", "h264"))
                val q = qualityOf()
                client.setConfig(codecName(), q.width, q.height, q.fps, q.bitrateMbps, handTracking)
            }
            "calibrate" -> calibrate(
                message.optDouble("ipd", ipd.toDouble()).toFloat(),
                message.optDouble("userHeight", userHeight.toDouble()).toFloat(),
                message.optDouble("worldScale", worldScale.toDouble()).toFloat(),
            )
            "hands" -> setHandTracking(message.optBoolean("enabled", true))
            "custom" -> message.optString("payload", "").let { if (it.isNotBlank()) client.sendRaw(it) }
            else -> Unit
        }
    }

    // -------------------------------------------------------------- tracking

    /**
     * Builds the newest tracking packet. Runs on the sender thread, 60 times a second.
     *
     * <p>Returns 0 when there is nothing to say yet — no head pose means no reliable place to put a
     * hand, and a packet with the head at the origin would snap the game's world to a wrong origin.
     */
    private fun encodeTracking(into: ByteArray): Int {
        val frame = latest ?: return 0
        val reader = headSource ?: return 0
        if (!reader.copyHeadPose(head)) return 0
        System.arraycopy(head, 0, headPos, 0, 3)
        System.arraycopy(head, 3, headRot, 0, 4)

        left.clear()
        right.clear()
        var hands = 0
        if (handTracking) {
            for (hand in frame.hands) {
                val side = if (hand.left) left else right
                // A predicted hand is published (the PC interpolates like the phone does) but its
                // confidence travels with it, so the driver knows it is not a fresh measurement.
                geometry.fill(hand, headPos, headRot, side)
                if (side.present) hands++
            }
        }
        lastPacketHands = hands
        seq++
        return PcLinkWire.encodeTracking(
            into = into,
            seq = seq.toLong(),
            captureNs = if (frame.completedNs > 0) frame.completedNs else SystemClock.elapsedRealtimeNanos(),
            headValid = true,
            headPos = headPos,
            headRot = headRot,
            ipd = ipd,
            userHeight = userHeight,
            worldScale = worldScale,
            left = left,
            right = right,
        )
    }

    // ---------------------------------------------------------------- video

    override fun onVideoFrame(frame: PcLinkWire.AssembledFrame) {
        stereo = frame.stereo
        decoder.push(frame)
    }

    override fun onVideoConfig(codec: Int, width: Int, height: Int) {
        decoder.setVideoSize(width, height)
    }

    // --------------------------------------------------------------- status

    /** Everything the interface shows, as one JSON object. Cheap: no I/O, no allocation of note. */
    fun statusJson(): String {
        val json = JSONObject()
        val stats = decoder.stats
        try {
            json.put("running", client.isRunning())
            json.put("phase", client.phase.name.lowercase())
            json.put("mode", client.mode.name.lowercase())
            json.put("host", client.host ?: "")
            json.put("message", client.message ?: "")
            json.put("session", client.sessionActive)
            json.put("device", deviceName)
            json.put("packets", client.packetsSent)
            json.put("sendFailures", client.sendFailures)
            json.put("rttMs", client.rttMs)
            json.put("handsInPacket", lastPacketHands)
            json.put("handTracking", handTracking)
            json.put("quality", quality)
            json.put("codec", if (codec == PcLinkWire.CODEC_HEVC) "hevc" else "h264")
            client.bridge?.let { bridge ->
                json.put("bridge", JSONObject()
                    .put("name", bridge.name)
                    .put("address", bridge.address)
                    .put("steamvr", bridge.steamvr)
                    .put("openxrHandTracking", bridge.openxrHandTracking ?: JSONObject.NULL)
                    .put("warnings", bridge.warnings.joinToString(" | ")))
            }
            json.put("welcome", client.welcomeJson?.let { safeObject(it) } ?: JSONObject.NULL)
            json.put("state", client.stateJson?.let { safeObject(it) } ?: JSONObject.NULL)
            json.put("video", JSONObject()
                .put("frames", stats.frames)
                .put("dropped", stats.dropped)
                .put("fps", stats.fps)
                .put("decodeMs", stats.decodeMs)
                .put("width", stats.width)
                .put("height", stats.height)
                .put("surface", stats.surfaceReady)
                .put("stereo", stereo)
                .put("packets", client.videoPackets)
                .put("lost", client.droppedFrames)
                .put("failure", stats.failure ?: ""))
            json.put("calibration", JSONObject()
                .put("ipd", ipd.toDouble())
                .put("userHeight", userHeight.toDouble())
                .put("worldScale", worldScale.toDouble()))
        } catch (_: Exception) { }
        return json.toString()
    }

    private fun safeObject(text: String): Any = try { JSONObject(text) } catch (_: Exception) { JSONObject.NULL }

    private fun qualityOf(): Quality = when (quality) {
        "low" -> Quality(20, 60, 1440, 1600)
        "high" -> Quality(80, 90, 2290, 2400)
        else -> Quality(40, 72, 1832, 1920)
    }

    private fun codecName(): String = if (codec == PcLinkWire.CODEC_HEVC) "hevc" else "h264"
}

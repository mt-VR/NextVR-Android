package com.nextvr.app.pclink

import android.os.SystemClock
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStream
import java.net.DatagramPacket
import java.net.DatagramSocket
import java.net.Inet4Address
import java.net.InetAddress
import java.net.InetSocketAddress
import java.net.NetworkInterface
import java.net.Socket
import java.net.SocketTimeoutException
import java.util.concurrent.atomic.AtomicBoolean

/**
 * The phone's half of a PC Link session: find the PC, hold the control channel open, push tracking,
 * receive video.
 *
 * <h2>Threads, and why there are four</h2>
 *
 * <ul>
 *   <li><b>control</b> — blocks on a socket `readLine`. A blocked read is fine on its own thread and
 *       disastrous on the render or tracking thread.</li>
 *   <li><b>sender</b> — a fixed 60 Hz tick. It re-encodes the newest tracker frame every tick instead
 *       of forwarding one packet per camera frame, because the head pose is read at tick time: the
 *       head has to update at the display rate even when the hand tracker is at 30 Hz, and a head
 *       that only moves when the camera produces a frame feels broken.</li>
 *   <li><b>video</b> — a UDP receive loop. Datagrams are cheap to read and must never wait behind
 *       anything else: one late read is one late frame.</li>
 *   <li><b>discovery</b> — broadcasts a request a couple of times a second until a PC answers. It
 *       goes quiet once connected and comes back when the control link drops.</li>
 * </ul>
 *
 * <p>Nothing here allocates on the send path (the packet buffer, the hand snapshots and the datagram
 * are reused), and every receive buffer is sized once.
 *
 * <h2>Wi-Fi and USB are the same code</h2>
 *
 * <p>There is no "USB protocol". USB tethering (RNDIS) puts an IP network on the cable, so the only
 * thing that changes is <em>which</em> interface the discovery goes out on and which address family
 * the sockets prefer: [Mode.USB] only looks at the tether interfaces (`rndis*`, `usb*`, `eth*`),
 * [Mode.WIFI] only at the wireless ones. `adb forward` is TCP-only and therefore cannot carry the
 * video or the tracking, which is why it is not a mode here — see docs/PC-LINK.md.
 */
class PcLinkClient(
    private val deviceName: String,
    private val sink: Sink,
) {
    /** Where video frames go once they are whole again. */
    interface Sink {
        fun onVideoFrame(frame: PcLinkWire.AssembledFrame)
        /** The PC reported a different codec or size: the decoder has to be rebuilt. */
        fun onVideoConfig(codec: Int, width: Int, height: Int)
    }

    enum class Mode { WIFI, USB, AUTO }

    enum class Phase { IDLE, DISCOVERING, CONNECTING, CONNECTED, FAILED }

    /** A PC that answered the discovery broadcast. */
    data class Bridge(
        val address: String,
        val name: String,
        val controlPort: Int,
        val videoPort: Int,
        val trackingPort: Int,
        val steamvr: String,
        val openxrHandTracking: String?,
        val warnings: List<String>,
    )

    private val running = AtomicBoolean(false)
    private var discoveryThread: Thread? = null
    private var controlThread: Thread? = null
    private var senderThread: Thread? = null
    private var videoThread: Thread? = null

    /** Chosen by the user; null means "whatever discovery finds". */
    @Volatile
    var host: String? = null
        private set

    @Volatile
    var mode: Mode = Mode.WIFI
        private set

    @Volatile
    var phase: Phase = Phase.IDLE
        private set

    /** Human-readable reason for the current phase, shown as-is by the interface. */
    @Volatile
    var message: String? = null
        private set

    /** The newest `state` object from the PC, as JSON text (2 Hz). Never edited here. */
    @Volatile
    var stateJson: String? = null
        private set

    /** The `welcome` object: what the PC is and what it can do. */
    @Volatile
    var welcomeJson: String? = null
        private set

    @Volatile
    var bridge: Bridge? = null
        private set

    /** Ports the phone listens on / sends to, overridable for tests. */
    @Volatile
    var controlPort = PcLinkWire.CONTROL_PORT
    @Volatile
    var videoPort = PcLinkWire.VIDEO_PORT
    @Volatile
    var trackingPort = PcLinkWire.TRACKING_PORT
    @Volatile
    var discoveryPort = PcLinkWire.DISCOVERY_PORT

    @Volatile
    var sessionActive = false
        private set

    @Volatile
    var packetsSent = 0L
        private set
    @Volatile
    var sendFailures = 0L
        private set
    @Volatile
    var videoPackets = 0L
        private set
    @Volatile
    var rttMs = -1f
        private set
    @Volatile
    var codec = PcLinkWire.CODEC_H264
        private set

    /** Fills [into] with the newest tracking packet and returns its length, or 0 for "nothing yet". */
    @Volatile
    var trackingSource: ((ByteArray) -> Int)? = null

    private var controlSocket: Socket? = null
    private var controlOut: OutputStream? = null
    private val writeLock = Any()
    private var videoSocket: DatagramSocket? = null
    private var trackingSocket: DatagramSocket? = null
    private val assembler = PcLinkWire.VideoAssembler()
    private var pingId = 0

    /** Start looking. Safe to call twice. */
    fun start(mode: Mode, host: String?) {
        this.mode = mode
        this.host = host?.takeIf { it.isNotBlank() }
        if (!running.compareAndSet(false, true)) {
            // Already running: a new mode or address only means "look again".
            if (this.host != null) reconnectSoon()
            return
        }
        phase = Phase.DISCOVERING
        message = null
        discoveryThread = thread("NextVR-PcLink-Discovery") { discoveryLoop() }
        controlThread = thread("NextVR-PcLink-Control") { controlLoop() }
        senderThread = thread("NextVR-PcLink-Sender") { senderLoop() }
        videoThread = thread("NextVR-PcLink-Video") { videoLoop() }
    }

    fun stop() {
        if (!running.getAndSet(false)) return
        phase = Phase.IDLE
        sessionActive = false
        for (socket in listOf(controlSocket, videoSocket, trackingSocket)) {
            try { socket?.close() } catch (_: Exception) { }
        }
        controlSocket = null; controlOut = null
        videoSocket = null; trackingSocket = null
        for (t in listOf(discoveryThread, controlThread, senderThread, videoThread)) {
            try { t?.join(400) } catch (_: InterruptedException) { Thread.currentThread().interrupt() }
        }
        discoveryThread = null; controlThread = null; senderThread = null; videoThread = null
        assembler.reset()
    }

    fun isRunning(): Boolean = running.get()

    /** Frames the assembler threw away because a piece was missing: a real network measurement. */
    val droppedFrames: Int get() = assembler.dropped

    // --------------------------------------------------------------- commands

    /** `session start` / `session stop`, as the interface sees it. */
    fun setSession(active: Boolean) {
        sessionActive = active
        if (!active) {
            write(JSONObject().put("t", "session").put("action", "stop"))
        } else {
            write(
                JSONObject().put("t", "session").put("action", "start")
                    .put("videoPort", videoPort)
            )
        }
    }

    /** Video configuration, in the same field names the PC Bridge documents. */
    fun setConfig(codecName: String, width: Int, height: Int, fps: Int, bitrateMbps: Int, handTracking: Boolean) {
        codec = PcLinkWire.codecId(codecName)
        write(
            JSONObject().put("t", "config")
                .put("codec", if (codec == PcLinkWire.CODEC_HEVC) "hevc" else "h264")
                .put("width", width).put("height", height).put("fps", fps)
                .put("bitrateMbps", bitrateMbps).put("handTracking", handTracking)
        )
    }

    fun calibrate(ipd: Float, userHeight: Float, worldScale: Float) {
        write(
            JSONObject().put("t", "calibrate")
                .put("ipd", ipd.toDouble()).put("userHeight", userHeight.toDouble())
                .put("worldScale", worldScale.toDouble())
        )
    }

    /** Sends one already-built JSON control line (used by the diagnostics field in the interface). */
    fun sendRaw(json: String): Boolean = writeRaw(json)

    // --------------------------------------------------------------- internals

    private fun thread(name: String, body: () -> Unit): Thread {
        // The lambda literal is what makes the SAM conversion work: a value of function type does not
        // convert to `Runnable` on its own.
        val t = Thread({ body() }, name)
        t.isDaemon = true
        t.start()
        return t
    }

    private fun discoveryLoop() {
        val socket = DatagramSocket()
        socket.broadcast = true
        socket.soTimeout = 400
        val request = PcLinkWire.discoveryRequest()
        val buffer = ByteArray(2048)
        try {
            while (running.get()) {
                if (phase == Phase.CONNECTED) { sleep(400); continue }
                val addresses = interfaces(mode)
                if (addresses.isEmpty() && host == null) {
                    message = when (mode) {
                        Mode.USB -> "Nenhuma rede USB (tethering) encontrada"
                        Mode.WIFI -> "Nem Wi-Fi nem USB: verifique a rede"
                        Mode.AUTO -> "Nenhuma rede utilizável"
                    }
                    phase = Phase.FAILED
                    sleep(700)
                    continue
                }
                for (target in broadcastTargets(addresses)) {
                    try {
                        socket.send(DatagramPacket(request, request.size, target, discoveryPort))
                    } catch (_: Exception) { }
                }
                val deadline = SystemClock.elapsedRealtime() + 600
                while (running.get() && phase != Phase.CONNECTED && SystemClock.elapsedRealtime() < deadline) {
                    try {
                        val packet = DatagramPacket(buffer, buffer.size)
                        socket.receive(packet)
                        if (!PcLinkWire.isDiscoveryReply(buffer, packet.length)) continue
                        val text = String(buffer, 0, packet.length, Charsets.UTF_8)
                        // The address comes from the datagram, never from the text: a reply is data
                        // from the network, and the socket already knows who sent it.
                        val reply = parseReply(text)?.copy(address = packet.address?.hostAddress ?: "") ?: continue
                        bridge = reply
                        controlPort = reply.controlPort
                        videoPort = reply.videoPort
                        trackingPort = reply.trackingPort
                        if (host == null) host = reply.address
                        break
                    } catch (_: SocketTimeoutException) {
                    } catch (_: Exception) { }
                }
            }
        } finally {
            try { socket.close() } catch (_: Exception) { }
        }
    }

    /** The interface remembered a PC: connect to it now, without waiting for the retry timer. */
    fun setHost(address: String?) {
        host = address?.takeIf { it.isNotBlank() }
        reconnectSoon()
    }

    private fun controlLoop() {
        var backoff = 300L
        while (running.get()) {
            val address = host
            if (address == null) {
                phase = Phase.DISCOVERING
                sleep(200)
                continue
            }
            phase = Phase.CONNECTING
            var socket: Socket? = null
            try {
                socket = Socket()
                socket.connect(InetSocketAddress(address, controlPort), 1500)
                socket.soTimeout = 4000
                socket.tcpNoDelay = true
                controlSocket = socket
                controlOut = socket.getOutputStream()
                val input = BufferedReader(InputStreamReader(socket.getInputStream(), Charsets.UTF_8), 4096)
                phase = Phase.CONNECTED
                message = null
                backoff = 300L
                write(JSONObject().put("t", "hello").put("device", deviceName))
                // Re-announce the session after a reconnect: the PC forgot it, the user did not.
                if (sessionActive) {
                    write(JSONObject().put("t", "session").put("action", "start").put("videoPort", videoPort))
                }
                while (running.get()) {
                    val line = input.readLine() ?: break
                    handle(line)
                }
                message = "O PC encerrou a conexão"
            } catch (e: Exception) {
                message = describe(e)
            } finally {
                controlSocket = null
                controlOut = null
                try { socket?.close() } catch (_: Exception) { }
                if (running.get()) {
                    phase = Phase.CONNECTING
                    sleep(backoff)
                    backoff = (backoff * 2).coerceAtMost(3000L)
                }
            }
        }
    }

    private fun handle(line: String) {
        if (line.length > 64000) return
        val json = try { JSONObject(line) } catch (_: Exception) { return }
        when (json.optString("t")) {
            "welcome" -> {
                welcomeJson = line
                val codecs = json.optJSONArray("codecs")
                // A PC that does not list HEVC gets H.264, whatever the user picked: asking for a
                // codec the other side does not have is a black screen, not a fallback.
                if (codecs != null) {
                    var hevc = false
                    for (i in 0 until codecs.length()) if (codecs.optString(i).equals("hevc", true)) hevc = true
                    if (!hevc) codec = PcLinkWire.CODEC_H264
                }
            }
            "state" -> {
                stateJson = line
                val video = json.optJSONObject("video")
                if (video != null) {
                    val width = video.optInt("width", 0)
                    val height = video.optInt("height", 0)
                    val name = video.optString("codec", "h264")
                    val id = PcLinkWire.codecId(name)
                    if (id != codec) codec = id
                    if (width > 0 && height > 0) sink.onVideoConfig(id, width, height)
                }
            }
            "pong" -> {
                val ts = json.optLong("ts", -1L)
                if (ts > 0) rttMs = (SystemClock.elapsedRealtime() - ts).toFloat()
            }
            "bye" -> {
                // The PC replaced this phone with another one, or stopped. Both mean "not streaming".
                sessionActive = false
                phase = Phase.CONNECTING
                message = "Outro celular assumiu a sessão"
            }
        }
    }

    private fun senderLoop() {
        val socket = try { DatagramSocket() } catch (e: Exception) { null }
        trackingSocket = socket
        val buffer = ByteArray(PcLinkWire.TRACKING_BYTES)
        var lastPing = 0L
        while (running.get()) {
            val source = trackingSource
            val target = host
            if (socket != null && source != null && target != null) {
                try {
                    val length = source(buffer)
                    if (length > 0) {
                        val packet = DatagramPacket(buffer, length, InetAddress.getByName(target), trackingPort)
                        socket.send(packet)
                        packetsSent++
                    }
                } catch (e: Exception) {
                    sendFailures++
                }
            }
            val now = SystemClock.elapsedRealtime()
            if (phase == Phase.CONNECTED && now - lastPing >= 1000) {
                lastPing = now
                pingId++
                write(JSONObject().put("t", "ping").put("id", pingId).put("ts", now))
            }
            // 60 Hz of "is anything new", which is also the rate the head pose is refreshed at.
            sleep(16)
        }
        try { socket?.close() } catch (_: Exception) { }
        trackingSocket = null
    }

    private fun videoLoop() {
        var socket: DatagramSocket? = null
        var boundPort = -1
        val buffer = ByteArray(4096)
        while (running.get()) {
            if (socket == null || boundPort != videoPort) {
                try { socket?.close() } catch (_: Exception) { }
                socket = try {
                    DatagramSocket(null).apply {
                        reuseAddress = true
                        receiveBufferSize = 4 * 1024 * 1024
                        bind(InetSocketAddress(videoPort))
                        soTimeout = 1000
                    }
                } catch (e: Exception) {
                    // Port taken: the interface keeps saying so instead of pretending to stream.
                    message = "Porta de video ${videoPort} indisponível: ${e.message}"
                    sleep(1000)
                    continue
                }
                videoSocket = socket
                boundPort = videoPort
                assembler.reset()
            }
            try {
                val packet = DatagramPacket(buffer, buffer.size)
                val live = socket ?: break
                live.receive(packet)
                videoPackets++
                val frame = assembler.push(buffer, packet.length) ?: continue
                codec = frame.codec
                sink.onVideoFrame(frame)
            } catch (_: SocketTimeoutException) {
            } catch (e: Exception) {
                if (!running.get()) break
            }
        }
        try { socket?.close() } catch (_: Exception) { }
        videoSocket = null
    }

    private fun write(message: JSONObject): Boolean {
        if (phase != Phase.CONNECTED) return false
        return writeRaw(message.toString())
    }

    private fun writeRaw(json: String): Boolean {
        val out = controlOut ?: return false
        return try {
            synchronized(writeLock) {
                out.write(json.toByteArray(Charsets.UTF_8))
                out.write('\n'.code)
                out.flush()
            }
            true
        } catch (e: Exception) {
            // The control thread will notice the dead socket and reconnect; a failed write here must
            // never take the caller (a tracking or UI thread) down with it.
            false
        }
    }

    private fun reconnectSoon() {
        try { controlSocket?.close() } catch (_: Exception) { }
    }

    private fun sleep(ms: Long) {
        try { Thread.sleep(ms) } catch (_: InterruptedException) { Thread.currentThread().interrupt() }
    }

    private fun describe(e: Exception): String = when (e) {
        is SocketTimeoutException -> "O PC não respondeu (tempo esgotado)"
        is java.net.ConnectException -> "Conexão recusada: o NextVR PC Bridge está rodando?"
        is java.net.NoRouteToHostException -> "Sem rota até o PC: mesma rede?"
        is java.net.UnknownHostException -> "Endereço inválido: ${e.message}"
        else -> e.javaClass.simpleName + ": " + (e.message ?: "")
    }

    companion object {
        /** The broadcast addresses of the interfaces this mode should use. */
        fun broadcastTargets(addresses: List<Pair<String, InetAddress>>): List<InetAddress> {
            val out = ArrayList<InetAddress>(addresses.size)
            for ((_, address) in addresses) {
                val short = address as? Inet4Address ?: continue
                val bytes = short.address.copyOf()
                bytes[3] = 0xff.toByte()
                try { out.add(InetAddress.getByAddress(bytes)) } catch (_: Exception) { }
            }
            return out
        }

        /**
         * Addresses of the interfaces a mode may use.
         *
         * <p>Tethering on Android shows up as `rndis0` (USB) or `usb0`/`eth0` (USB-Ethernet); Wi-Fi
         * is `wlan0` or `ap0`. Loopback and the cellular interface are never candidates: a phone's
         * LTE address cannot reach a PC on the LAN, and `adb forward` is TCP-only.
         */
        fun interfaces(mode: Mode): List<Pair<String, InetAddress>> {
            val out = ArrayList<Pair<String, InetAddress>>(4)
            val list = try { NetworkInterface.getNetworkInterfaces()?.toList() ?: emptyList() } catch (_: Exception) { emptyList() }
            for (nic in list) {
                try {
                    if (!nic.isUp || nic.isLoopback) continue
                    val name = nic.name.lowercase()
                    val tether = name.startsWith("rndis") || name.startsWith("usb") || name.startsWith("eth")
                    val wireless = name.startsWith("wlan") || name.startsWith("ap") || name.startsWith("swlan")
                    if (!tether && !wireless) continue
                    if (mode == Mode.USB && !tether) continue
                    if (mode == Mode.WIFI && !wireless) continue
                    for (address in nic.inetAddresses.toList()) {
                        if (address is Inet4Address && !address.isLoopbackAddress) out.add(name to address)
                    }
                } catch (_: Exception) { }
            }
            return out
        }

        /** Reads a discovery reply, or null when it is not one (or a version we do not speak). */
        fun parseReply(text: String): Bridge? {
            val json = try { JSONObject(text) } catch (_: Exception) { return null }
            if (json.optString("t") != "pclink") return null
            if (json.optInt("v", -1) != PcLinkWire.VERSION) return null
            val warnings = ArrayList<String>(2)
            val array = json.optJSONArray("warnings")
            if (array != null) for (i in 0 until array.length()) warnings.add(array.optString(i))
            return Bridge(
                address = json.optString("host", "").ifEmpty { json.optString("address", "") },
                name = json.optString("name", "NextVR PC Bridge"),
                controlPort = json.optInt("controlPort", PcLinkWire.CONTROL_PORT),
                videoPort = json.optInt("videoPort", PcLinkWire.VIDEO_PORT),
                trackingPort = json.optInt("trackingPort", PcLinkWire.TRACKING_PORT),
                steamvr = json.optString("steamvr", "unknown"),
                openxrHandTracking = if (json.isNull("openxrHandTracking")) null
                    else if (json.has("openxrHandTracking")) json.optBoolean("openxrHandTracking").toString()
                    else null,
                warnings = warnings,
            )
        }
    }
}

package com.nextvr.app.xr

import com.nextvr.app.hands.PhoneXrHands
import java.io.IOException
import java.net.DatagramPacket
import java.net.DatagramSocket
import java.net.InetAddress
import java.util.concurrent.atomic.AtomicBoolean
import kotlin.math.sqrt

/**
 * NextVR's own hand tracking, spoken in the PhoneXR runtime's language.
 *
 * <h2>Why this exists</h2>
 *
 * <p>NextVR already tracks hands with MediaPipe, filters them, latches pinches and draws them. The
 * PhoneXR runtime has no idea that exists: it expects a text packet on a loopback port and turns it
 * into two Oculus Touch controllers. This class is the whole translation, and it is the reason a game
 * running on the runtime can be driven by the same pinch the user pinches our own windows with — no
 * second camera pass, no second model, no second set of filters.
 *
 * <h2>What the runtime does with the numbers</h2>
 *
 * <p>Its hand driver maps the image-space fields to a position relative to the eyes, which is why
 * {@code x}/{@code y}/{@code z} are sent as the runtime expects to receive them and the arithmetic is
 * deliberately <em>not</em> done here: the runtime holds its own copy of those constants, and matching
 * them is what makes a hand land where the user sees it.
 *
 * <pre>
 *   position.x = (x - 0.5) * 1.15          x right, 0..1 in the camera image
 *   position.y = (0.60 - y) * 0.68         y down,  0..1
 *   position.z = -0.35 - z * 0.45          z 1 near .. 0 far
 * </pre>
 *
 * <p>Depth is measured the only way a single camera can measure it — from how big the hand is:
 * {@code palmWidth} is the index-to-pinky-base distance in image widths, and a palm that fills the
 * frame is a hand at the lens. The bounds below are the runtime's own, so a hand at reading distance
 * lands at the near end of the reach range rather than inside the user's face.
 *
 * <h2>Gesture mapping, and the one judgement call in it</h2>
 *
 * <ul>
 *   <li><b>pinch → trigger.</b> The runtime's trigger comes from the {@code fist} field, and a pinch
 *       is the gesture this app already uses for every other selection. A game therefore reacts to a
 *       pinch exactly as our windows do.</li>
 *   <li><b>fist → squeeze</em> (and the trigger stays released). Grab, drag, hold — the same fist the
 *       user already uses to move a window. Keeping the two separate is what lets a game be grabbed
 *       and aimed without the grab also being a click.</li>
 *   <li><b>hands-only mode</b> clears all three gesture fields and sets the flag, so fingers move the
 *       hand and press nothing. That is the mode for a game that wants to track hands itself.</li>
 * </ul>
 *
 * <p>A predicted hand is never allowed to start a press. Prediction exists so the silhouette stays
 * fluid between inferences; a pinch that only exists because the model was extrapolated would click
 * something the user did not touch. So {@code fist} follows the real latch, and a predicted hand
 * publishes its position and nothing else.
 *
 * <p>Sending runs on its own thread at a fixed 60 Hz on purpose. The camera runs at whatever rate it
 * manages; a game polling its input at frame rate wants the newest state, not a replay of a backlog,
 * and a stalled tracking thread must never stall the render loop.
 */
class XrHandBridge {

    /** What the user chose in settings, because it decides which gestures are buttons. */
    enum class Mode {
        /** A pinch is the trigger and a fist is the grip — Quest-style controller emulation. */
        CONTROLLERS,

        /** Fingers move the hand and press nothing. */
        HANDS,
    }

    private val running = AtomicBoolean(false)
    private var thread: Thread? = null
    private val socket = DatagramSocket()

    /** Newest frame from the tracker. Written on the tracking thread, read by the sender. */
    @Volatile
    private var frame: PhoneXrHands.Frame? = null

    @Volatile
    var mode: Mode = Mode.CONTROLLERS
        private set

    /**
     * Whether hand position comes from the camera image. True whenever the camera is doing the
     * tracking, which is the only way this app produces a position at all; the flag exists because a
     * game is entitled to ask "is this 6 DoF or is the hand hanging off a fixed shoulder?".
     */
    @Volatile
    private var cameraPosition: Boolean = true

    /**
     * Whether the game reads this stream at all. Off for a game that tracks hands itself.
     */
    @Volatile
    private var enabled: Boolean = false

    /**
     * The shell's pointer is currently over one of OUR windows (game menu, settings): a pinch out
     * there belongs to the window, so no button goes down in the game's stream while the hand keeps
     * moving. Tracked hand position keeps flowing exactly as before — a game's menus (its own) keep
     * reading where the hand is; what disappears is only the press.
     */
    @Volatile
    private var uiBlocked: Boolean = false

    /** Shell reported the pointer is over one of this app's windows: suppress presses, keep pose. */
    fun uiBlocked(blocked: Boolean) {
        uiBlocked = blocked
    }


    /** Packets actually put on the wire, for the diagnostics line. */
    @Volatile
    private var sent: Long = 0

    /** Why the sender is not running, or null while it is. */
    @Volatile
    private var senderFailure: String? = null

    /** Hands sent in the newest packet; the settings window shows them as a sanity check. */
    @Volatile
    private var sentHands: Int = 0

    /** Packets put on the wire since the feed started. */
    fun packetsSent(): Long = sent

    /** Why the sender is not running, or null while it is. */
    fun failure(): String? = senderFailure

    /** How many hands the newest packet carried. */
    fun handsSent(): Int = sentHands

    /** Whether the feed is currently sending. */
    fun sending(): Boolean = enabled && running.get()

    /** Hand position comes from the camera image. */
    fun cameraPosition(): Boolean = cameraPosition

    fun start(mode: Mode, cameraPosition: Boolean, enabled: Boolean) {
        this.mode = mode
        this.cameraPosition = cameraPosition
        this.enabled = enabled
        if (running.get()) return
        if (!running.compareAndSet(false, true)) return
        senderFailure = null
        thread = Thread({ loop() }, "NextVR-XrHands").apply {
            priority = Thread.MAX_PRIORITY
            isDaemon = true
            start()
        }
    }

    fun stop() {
        running.set(false)
        thread?.let { live ->
            live.interrupt()
            try {
                live.join(200)
            } catch (interrupted: InterruptedException) {
                Thread.currentThread().interrupt()
            }
        }
        thread = null
        frame = null
        sentHands = 0
        closeSocket()
    }

    /** The newest tracker output. Called from the tracking thread; never blocks. */
    fun offer(frame: PhoneXrHands.Frame?) {
        this.frame = frame
    }

    private fun closeSocket() {
        try {
            socket.close()
        } catch (ignored: IOException) {
            // Closing a socket that is already closed is not a problem worth reporting.
        }
    }

    private fun loop() {
        val loopback = try {
            InetAddress.getByName("127.0.0.1")
        } catch (error: IOException) {
            senderFailure = "loopback: " + error.message
            running.set(false)
            return
        }
        var next = System.nanoTime()
        while (running.get()) {
            try {
                Thread.sleep(PERIOD_MS)
            } catch (interrupted: InterruptedException) {
                Thread.currentThread().interrupt()
                break
            }
            if (!enabled) continue
            // A fixed cadence, not one packet per tracker frame: the tracker is the variable-rate
            // part, and the game reads whatever arrived most recently.
            next += PERIOD_MS * 1_000_000L
            val now = System.nanoTime()
            if (next < now) next = now
            val current = frame
            val hands = if (current == null) emptyList() else convert(current)
            // Sides, not presence: the only present hand may be the right one, and the absent side
            // is already a correct rest block, so each hand keeps its own controller.
            val left = hands.firstOrNull { it.left }?.hand ?: rest(REST_X)
            val right = hands.firstOrNull { !it.left }?.hand ?: rest(1f - REST_X)
            val flags = (if (cameraPosition) XrHandProtocol.FLAG_CAMERA_POSITION else 0) or
                (if (mode == Mode.HANDS) XrHandProtocol.FLAG_HANDS_ONLY else 0)
            val runtimePacket = XrHandProtocol.runtime(left, right, flags).toByteArray(Charsets.US_ASCII)
            socket.send(DatagramPacket(runtimePacket, runtimePacket.size, loopback, XrHandProtocol.RUNTIME_PORT))
            val sdkPacket = XrHandProtocol.sdk(left, right, flags).toByteArray(Charsets.US_ASCII)
            socket.send(DatagramPacket(sdkPacket, sdkPacket.size, loopback, XrHandProtocol.SDK_PORT))
            sent++
            sentHands = hands.count { it.present }
            senderFailure = null
        }
    }

    /** One hand, plus the side it was on, so left and right can be picked apart. */
    data class Side(val present: Boolean, val left: Boolean, val hand: XrHandProtocol.Hand)

    /**
     * Turns one tracker frame into at most two protocol hands. Always returns both sides, so a hand
     * that is not there is published as absent rather than omitted: the runtime reads a fixed two
     * blocks, and a missing block would shift every field after it.
     */
    fun convert(frame: PhoneXrHands.Frame): List<Side> {
        val out = ArrayList<Side>(2)
        var sawLeft = false
        var sawRight = false
        for (hand in frame.hands) {
            // A predicted hand carries a position worth showing and a gesture worth holding, but it
            // may not start one: a click the user never made is worse than a click one frame late.
            val live = !hand.predicted
            val handsOnly = mode == Mode.HANDS
            // Over one of the shell's own windows the shell keeps the pinch (the same rule that
            // gives the world's objects priority): the hand keeps its place in the view, but no
            // button can go down. A frame that arrives mid-menu still moves a gun's aim; it never
            // fires into this app's own UI. The `pinch` bit follows the same gate, because a game
            // that reads hands natively turns exactly that bit into its own click.
            val interactable = live && !uiBlocked
            val pressing = interactable && !handsOnly
            val fist = if (pressing) hand.pinching else false
            val buttons = if (pressing && hand.shape.fist) XrHandProtocol.BUTTON_SQUEEZE else 0
            val quaternion = hand.palmQuaternion()
            val curls = hand.fingerCurls()
            out.add(Side(true, hand.left, XrHandProtocol.Hand(
                present = true,
                fist = fist,
                index = false,
                thumb = false,
                x = hand.shape.palmX.coerceIn(0f, 1f),
                y = hand.shape.palmY.coerceIn(0f, 1f),
                z = depth(hand.shape.palmWidth),
                qx = quaternion[0],
                qy = quaternion[1],
                qz = quaternion[2],
                qw = if (quaternion[3] == 0f) 1f else quaternion[3],
                buttons = buttons,
                thumbCurl = curls[0],
                indexCurl = curls[1],
                middleCurl = curls[2],
                ringCurl = curls[3],
                pinkyCurl = curls[4],
                pinch = interactable && hand.pinching,
                palmToFace = hand.shape.palmToFace,
            )))
            if (hand.left) sawLeft = true else sawRight = true
        }
        // An absent hand rests where it belongs instead of at the centre, so the runtime's own
        // fallback pose does not matter and a controller never appears to jump across the view.
        if (!sawLeft) out.add(Side(false, true, rest(REST_X)))
        if (!sawRight) out.add(Side(false, false, rest(1f - REST_X)))
        return out
    }

    private fun rest(x: Float) = XrHandProtocol.Hand(
        present = false, fist = false, index = false, thumb = false,
        x = x, y = REST_Y, z = 0f, qx = 0f, qy = 0f, qz = 0f, qw = 1f)

    companion object {
        private const val PERIOD_MS = 16L

        /**
         * Where a hand rests in the image when it is not there: the sides, not the middle. A hand
         * that appears from the centre reads as the user's own hand teleporting; one that appears from
         * the side reads as their hand entering the view.
         */
        const val REST_X = .34f
        const val REST_Y = .5f

        /**
         * Closeness in the camera image, from how big the hand is: the palm (index base to pinky
         * base) projects wider the closer the hand is, and a hand at reading distance fills about
         * .17 of a phone camera's width. 0 at arm's length (a .04-wide palm), 1 at the near end.
         * Beyond either end it clamps rather than extrapolating, so a bad frame puts the hand at
         * the edge of reach instead of behind the user.
         */
        fun depth(palmWidth: Float): Float =
            ((palmWidth - FAR_PALM) / (NEAR_PALM - FAR_PALM)).coerceIn(0f, 1f)

        private const val NEAR_PALM = .17f
        private const val FAR_PALM = .04f
    }
}

/**
 * A hand's orientation, as the runtime wants it: a palm basis with the columns (side, up, forward).
 *
 * The landmarks arrive in image coordinates — x right, y down, and z toward the camera — so each axis
 * is flipped once here and the rest of the arithmetic is plain vector maths on a right-handed frame.
 * A hand pointing at the lens, the usual way a pinch is aimed, produces a basis whose forward axis
 * points away from the camera, which is the forward the runtime needs.
 */
internal fun PhoneXrHands.Hand.palmQuaternion(): FloatArray {
    val p = points
    fun axis(from: Int, to: Int): FloatArray {
        val dx = p[to * 3] - p[from * 3]
        val dy = p[to * 3 + 1] - p[from * 3 + 1]
        val dz = p[to * 3 + 2] - p[from * 3 + 2]
        val n = sqrt(dx * dx + dy * dy + dz * dz).coerceAtLeast(1e-6f)
        return floatArrayOf(dx / n, -dy / n, -dz / n)
    }
    fun cross(a: FloatArray, b: FloatArray) = floatArrayOf(
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0])
    // Side points from the pinky base to the index base on a left hand, and the other way round on a
    // right one, so the basis is right-handed for both.
    val side = if (left) axis(17, 5) else axis(5, 17)
    val palmUp = axis(0, 9)
    val forward = cross(side, palmUp)
    val up = cross(forward, side)
    return matrixQuaternion(side, up, forward)
}

/**
 * How bent each finger is: 0 straight, 1 fully closed.
 *
 * Each joint's cosine is remapped from its straight (-1) to fully folded (+1) range. Two joints per
 * finger are averaged, weighted towards the knuckle, because a fingertip's last joint folds first
 * when a finger closes and reading only it makes a pointing finger look half-curled.
 */
internal fun PhoneXrHands.Hand.fingerCurls(): FloatArray {
    val p = points
    fun jointCurl(a: Int, joint: Int, b: Int): Float {
        val ax = p[a * 3] - p[joint * 3]
        val ay = p[a * 3 + 1] - p[joint * 3 + 1]
        val az = p[a * 3 + 2] - p[joint * 3 + 2]
        val bx = p[b * 3] - p[joint * 3]
        val by = p[b * 3 + 1] - p[joint * 3 + 1]
        val bz = p[b * 3 + 2] - p[joint * 3 + 2]
        val length = sqrt((ax * ax + ay * ay + az * az) * (bx * bx + by * by + bz * bz)).coerceAtLeast(1e-6f)
        val cosine = (ax * bx + ay * by + az * bz) / length
        return ((cosine + CURL_STRAIGHT) / CURL_RANGE).coerceIn(0f, 1f)
    }
    fun finger(mcp: Int, pip: Int, dip: Int, tip: Int) =
        (jointCurl(mcp, pip, dip) * .55f + jointCurl(pip, dip, tip) * .45f).coerceIn(0f, 1f)
    return floatArrayOf(
        finger(1, 2, 3, 4),
        finger(5, 6, 7, 8),
        finger(9, 10, 11, 12),
        finger(13, 14, 15, 16),
        finger(17, 18, 19, 20),
    )
}

/** Cosine at a straight joint; [CURL_RANGE] spans it to the fully folded one. */
private const val CURL_STRAIGHT = .82f
private const val CURL_RANGE = 1.64f

/** Quaternion from a column-major orthonormal basis whose columns are (right, up, forward). */
private fun matrixQuaternion(right: FloatArray, up: FloatArray, forward: FloatArray): FloatArray {
    val m00 = right[0]; val m01 = up[0]; val m02 = forward[0]
    val m10 = right[1]; val m11 = up[1]; val m12 = forward[1]
    val m20 = right[2]; val m21 = up[2]; val m22 = forward[2]
    val trace = m00 + m11 + m22
    val q = FloatArray(4)
    if (trace > 0f) {
        val s = sqrt(trace + 1f) * 2f
        q[3] = .25f * s
        q[0] = (m21 - m12) / s
        q[1] = (m02 - m20) / s
        q[2] = (m10 - m01) / s
    } else if (m00 > m11 && m00 > m22) {
        val s = sqrt(1f + m00 - m11 - m22) * 2f
        q[3] = (m21 - m12) / s
        q[0] = .25f * s
        q[1] = (m01 + m10) / s
        q[2] = (m02 + m20) / s
    } else if (m11 > m22) {
        val s = sqrt(1f + m11 - m00 - m22) * 2f
        q[3] = (m02 - m20) / s
        q[0] = (m01 + m10) / s
        q[1] = .25f * s
        q[2] = (m12 + m21) / s
    } else {
        val s = sqrt(1f + m22 - m00 - m11) * 2f
        q[3] = (m10 - m01) / s
        q[0] = (m02 + m20) / s
        q[1] = (m12 + m21) / s
        q[2] = .25f * s
    }
    return q
}

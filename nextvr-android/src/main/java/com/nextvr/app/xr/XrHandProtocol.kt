package com.nextvr.app.xr

import java.util.Locale

/**
 * The PhoneXR input wire format, and nothing else: the packet text, field by field.
 *
 * <h2>What this is</h2>
 *
 * <p>The runtime and any game that uses the PhoneXR SDK learn about hands from a plain-text UDP packet
 * on loopback, at 60 Hz. Two ports, because a port has exactly one reader:
 *
 * <ul>
 *   <li>{@value #RUNTIME_PORT} — the runtime. It turns the packet into two synthetic Oculus Touch
 *       controllers, so <em>every OpenXR and VrApi game</em> gets hand input through the ordinary
 *       action system without knowing this protocol exists.</li>
 *   <li>{@value #SDK_PORT} — a game built for PhoneXR, which wants the raw gesture rather than a
 *       button. It also carries the per-finger curls that the runtime does not need.</li>
 * </ul>
 *
 * <p>Text, not binary, because the reader is a C {@code sscanf} in the runtime and a one-line parse in
 * three different engines on the other side. Two characters of version tag and space-separated
 * decimals is the cheapest format that all of them can read.
 *
 * <h2>Versions, and why both go out</h2>
 *
 * <p>The runtime build this app ships understands {@code PH5} (no per-finger curls). A game built
 * against a current PhoneXR SDK wants {@code PH6}, which adds them. So {@link #runtime} writes the
 * older tag and {@link #sdk} writes the newer one, from the same measurement. A reader that does not
 * recognise a tag falls back to the next one down, which is why the format was allowed to grow
 * without breaking installed games.
 *
 * <p>Pure and dependency-free so the exact bytes on the wire are unit-tested: this is the one place
 * where a typo is invisible on the device until a game silently stops receiving a button.
 */
object XrHandProtocol {

    /** Loopback port the runtime listens on. */
    const val RUNTIME_PORT = 42424

    /** Loopback port a PhoneXR SDK client listens on. */
    const val SDK_PORT = 42425

    /** Hand position is measured from the camera image rather than inferred from a pose. */
    const val FLAG_CAMERA_POSITION = 1

    /** Fingers move the hand and press nothing: plain hand tracking, no gesture buttons. */
    const val FLAG_HANDS_ONLY = 2

    /** Oculus Touch button bits, as the runtime reads them. */
    const val BUTTON_PRIMARY = 1 shl 0
    const val BUTTON_SECONDARY = 1 shl 1
    const val BUTTON_TRIGGER = 1 shl 2
    const val BUTTON_SQUEEZE = 1 shl 3
    const val BUTTON_MENU = 1 shl 4
    const val BUTTON_STICK_CLICK = 1 shl 5
    const val BUTTON_SYSTEM = 1 shl 6

    /** A hand as the protocol carries it: presence, three gestures, a place and a rotation. */
    data class Hand(
        val present: Boolean,
        /** Trigger: the runtime turns this into the whole click for a game. */
        val fist: Boolean,
        /** Secondary button (Y on the left, B on the right). */
        val index: Boolean,
        /** Primary button (X on the left, A on the right). */
        val thumb: Boolean,
        /** Palm centre in the camera image: x right, y down, both 0..1. */
        val x: Float,
        val y: Float,
        /** Closeness to the camera, 0 far .. 1 near. The runtime turns this into a distance. */
        val z: Float,
        val qx: Float,
        val qy: Float,
        val qz: Float,
        val qw: Float,
        val buttons: Int = 0,
        val stickX: Float = 0f,
        val stickY: Float = 0f,
        val thumbCurl: Float = 0f,
        val indexCurl: Float = 0f,
        val middleCurl: Float = 0f,
        val ringCurl: Float = 0f,
        val pinkyCurl: Float = 0f,
        /** Pinch, and palm turned to the face. PH5 and later only; PH6 appends the curls. */
        val pinch: Boolean = false,
        val palmToFace: Boolean = false,
    ) {
        /** A hand the runtime must not draw: no pose, no buttons, nothing pressed. */
        val absent: Boolean get() = !present
    }

    /** The packet the runtime reads. It has no curl fields, so they are not sent. */
    fun runtime(left: Hand, right: Hand, flags: Int): String = build("PH5", left, right, flags, false)

    /** The packet a PhoneXR SDK client reads, with the per-finger curls. */
    fun sdk(left: Hand, right: Hand, flags: Int): String = build("PH6", left, right, flags, true)

    private fun build(tag: String, left: Hand, right: Hand, flags: Int, curls: Boolean): String {
        val out = StringBuilder(320)
        out.append(tag)
        appendHand(out, left, curls)
        out.append(' ')
        appendHand(out, right, curls)
        out.append(' ').append(flags)
        out.append(' ').append(if (left.pinch) 1 else 0)
        out.append(' ').append(if (left.palmToFace) 1 else 0)
        out.append(' ').append(if (right.pinch) 1 else 0)
        out.append(' ').append(if (right.palmToFace) 1 else 0)
        return out.toString()
    }

    private fun appendHand(out: StringBuilder, hand: Hand, curls: Boolean) {
        bit(out, hand.present)
        bit(out, hand.fist)
        bit(out, hand.index)
        bit(out, hand.thumb)
        out.append(' ')
        float(out, hand.x, 4)
        float(out, hand.y, 4)
        float(out, hand.z, 4)
        out.append(' ')
        float(out, hand.qx, 5)
        float(out, hand.qy, 5)
        float(out, hand.qz, 5)
        float(out, hand.qw, 5)
        out.append(' ').append(hand.buttons)
        float(out, hand.stickX, 3)
        float(out, hand.stickY, 3)
        if (!curls) return
        out.append(' ')
        float(out, hand.thumbCurl, 3)
        float(out, hand.indexCurl, 3)
        float(out, hand.middleCurl, 3)
        float(out, hand.ringCurl, 3)
        float(out, hand.pinkyCurl, 3)
    }

    private fun bit(out: StringBuilder, value: Boolean) {
        out.append(' ').append(if (value) 1 else 0)
    }

    /**
     * Locale is pinned: this is parsed by {@code sscanf("%f")}, which follows the C locale and would
     * read a comma as nothing at all on a device set to a language that uses one. Four or five
     * decimals is far below a hand landmark's resolution and keeps the packet under ~300 bytes.
     */
    private fun float(out: StringBuilder, value: Float, decimals: Int) {
        val clean = if (value.isFinite()) value else 0f
        out.append(' ').append(String.format(Locale.US, "%.${decimals}f", clean))
    }
}

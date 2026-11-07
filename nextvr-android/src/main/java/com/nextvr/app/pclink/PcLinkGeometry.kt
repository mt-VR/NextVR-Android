package com.nextvr.app.pclink

import com.nextvr.app.hands.PhoneXrHands
import kotlin.math.sqrt
import kotlin.math.tan

/**
 * From a camera image to metres in the tracking space the PC uses.
 *
 * <h2>Why the arithmetic lives here and not in the sheet of numbers the app sends</h2>
 *
 * <p>The PhoneXR runtime (our own games inside this app) takes the screen position of a hand and does
 * the projection itself: one camera, one viewer, one set of constants. PC Link cannot do that — the
 * PC needs a 3D pose in metres, in the same frame as the head, because a SteamVR game is free to walk
 * the user around it and read the hand from any angle. So this class converts once, on the phone,
 * with real geometry:
 *
 *  * <b>Lateral position</b> from the pinhole model: a landmark `u` across the image is an angle
 *    `atan(2·(u-0.5)·tan(hfov/2))` off the axis; at distance `d` that is `d·2·(u-0.5)·tan(hfov/2)`
 *    metres to the side.
 *  * <b>Distance</b> from the size of the palm. A single camera has no other depth: the palm's
 *    index-to-pinky span (a real hand is ~8.5 cm across) subtends `2·palmWidth·tan(hfov/2)` … i.e.
 *    `d = PALM_WIDTH_M / (2·palmWidth·tan(hfov/2))`. MediaPipe's landmark `z` is relative and is not
 *    used — it is worse than useless as a depth: it would make the hand breathe.
 *  * <b>Orientation</b> from the measured joints, not from a lookup table.
 *
 * <h2>The frame</h2>
 *
 * <p>Output is in the app/SteamVR frame: metres, +X right, +Y up, +Z <b>behind</b> the user (so the
 * view direction is −Z), right-handed. That is the same frame the head pose in the tracking packet
 * uses, which is what lets the driver publish the joints untouched.
 *
 * <p>A hand is placed in <em>view</em> space first (flat, in front of the camera) and then rotated by
 * the head pose and moved to the head: the camera is rigidly attached to the phone, so that is
 * exactly the transform the physical hand goes through.
 *
 * <p>All the per-frame scratch buffers are fields: this runs at up to 90 Hz on the tracking thread,
 * and allocating three FloatArrays per hand per frame is the kind of garbage that shows up as a
 * stutter in the game, not as a memory warning.
 */
class PcLinkGeometry(
    /** Horizontal field of view of the tracking camera, in degrees. */
    private val hfovDeg: Float = DEFAULT_HFOV_DEG,
    /** Camera image aspect, width / height. Only used for the vertical axis. */
    private val aspect: Float = DEFAULT_ASPECT,
) {
    /** tan(hfov/2), the only camera constant the projection needs. */
    private val tanHalfX = tan(Math.toRadians(hfovDeg.toDouble() / 2.0)).toFloat()
    private val tanHalfY = tanHalfX / aspect

    /** Distance of the palm from the camera, in metres, clamped to arm's reach. */
    fun palmDistance(palmWidth: Float): Float {
        if (!(palmWidth > 1e-4f) || palmWidth.isNaN()) return MIN_DISTANCE
        val d = PALM_WIDTH_METRES / (2f * palmWidth * tanHalfX)
        return d.coerceIn(MIN_DISTANCE, MAX_DISTANCE)
    }

    /** Image landmark (0..1) at a distance, written into `out` at `offset` as view-space metres. */
    fun project(u: Float, v: Float, distance: Float, out: FloatArray, offset: Int) {
        out[offset] = (u - 0.5f) * 2f * tanHalfX * distance
        out[offset + 1] = (0.5f - v) * 2f * tanHalfY * distance
        out[offset + 2] = -distance
    }

    private val joints = FloatArray(PcLinkWire.JOINT_COUNT * 3)
    private val palmCentre = FloatArray(3)
    private val fingers = FloatArray(3)
    private val side = FloatArray(3)
    private val normal = FloatArray(3)
    private val axisX = FloatArray(3)
    private val quaternion = FloatArray(4)
    private val worldPoint = FloatArray(3)

    /**
     * Turns one tracker hand into the packet the PC reads.
     *
     * @param headPos head position in the app frame, metres.
     * @param headRot head orientation in the app frame (unit quaternion, x y z w).
     * @param cameraOffset where the camera sits relative to the head, in head space, metres. The
     *     default is "at the eyes": the rear camera's real offset is a few centimetres and is a
     *     per-device constant nobody has measured yet — see docs/PC-LINK.md.
     */
    fun fill(
        hand: PhoneXrHands.Hand,
        headPos: FloatArray,
        headRot: FloatArray,
        into: PcLinkWire.HandPacket,
        cameraOffset: FloatArray = NO_OFFSET,
    ) {
        val points = hand.points
        if (points.size < PcLinkWire.JOINT_COUNT * 3) {
            into.present = false
            return
        }
        val distance = palmDistance(hand.shape.palmWidth)
        for (j in 0 until PcLinkWire.JOINT_COUNT) {
            project(points[j * 3], points[j * 3 + 1], distance, joints, j * 3)
        }
        // The palm centre is the average of the wrist and the four knuckles: five measured points
        // instead of one, because a single landmark jitters with the detector while the average of a
        // rigid part of the hand does not.
        palmCentre.fill(0f)
        for (joint in PALM_JOINTS) {
            palmCentre[0] += joints[joint * 3]
            palmCentre[1] += joints[joint * 3 + 1]
            palmCentre[2] += joints[joint * 3 + 2]
        }
        for (i in 0 until 3) palmCentre[i] /= PALM_JOINTS.size

        orientation(hand.left)

        // View space -> tracking space: rotate by the head, then translate to where the head is.
        rotateByQuat(headRot, palmCentre, worldPoint)
        into.palm[0] = worldPoint[0] + headPos[0] + cameraOffset[0]
        into.palm[1] = worldPoint[1] + headPos[1] + cameraOffset[1]
        into.palm[2] = worldPoint[2] + headPos[2] + cameraOffset[2]
        // The palm rotation is composed with the head rotation: a hand in the same place relative to
        // the camera has to turn in the world when the user turns their head.
        quaternionMultiply(headRot, quaternion, into.rot)

        // Every joint goes through the same transform as the palm: rotate by the head, then move to
        // where the head is. Skipping the translation here (or rotating only the palm) is the classic
        // way a skeleton ends up detached from the device it belongs to.
        for (j in 0 until PcLinkWire.JOINT_COUNT) {
            rotateByQuat(headRot, joints, worldPoint, j * 3)
            into.joints[j * 3] = worldPoint[0] + headPos[0] + cameraOffset[0]
            into.joints[j * 3 + 1] = worldPoint[1] + headPos[1] + cameraOffset[1]
            into.joints[j * 3 + 2] = worldPoint[2] + headPos[2] + cameraOffset[2]
        }

        into.present = true
        into.predicted = hand.predicted
        into.confidence = hand.confidence.coerceIn(0f, 1f)
        into.pinch = hand.pinching
        into.fist = hand.shape.fist
    }

    /**
     * Palm basis from the measured joints.
     *
     * <p>+Y runs wrist → middle knuckle (the fingers), +Z leaves the palm (the palm normal, towards
     * the viewer when the palm faces the camera) and +X is the remaining axis. Building X from
     * `Y × Z` is what keeps the basis right-handed for both hands: mirroring the handedness by
     * flipping X would also mirror the fingers, and a mirrored skeleton is a broken skeleton.
     */
    private fun orientation(left: Boolean) {
        subtract(joints, 9 * 3, joints, 0, fingers)          // wrist -> middle knuckle
        normalize(fingers)
        subtract(joints, 5 * 3, joints, 17 * 3, side)         // pinky knuckle -> index knuckle
        normalize(side)
        cross(side, fingers, normal)
        normalize(normal)
        // Chirality: for a left palm facing the camera the cross already points at the viewer; for a
        // right one it points away, so it is flipped once, here, and nowhere else.
        if (!left) {
            normal[0] = -normal[0]; normal[1] = -normal[1]; normal[2] = -normal[2]
        }
        cross(fingers, normal, axisX)
        normalize(axisX)
        quaternionFromBasis(axisX, fingers, normal, quaternion)
    }

    companion object {
        /** Horizontal FOV assumed when nothing measured it. Typical rear camera, ~60° is 4:3-ish. */
        const val DEFAULT_HFOV_DEG = 62f
        const val DEFAULT_ASPECT = 0.75f
        /** Width across a hand from the index knuckle to the pinky knuckle, metres. */
        const val PALM_WIDTH_METRES = 0.085f
        /** Closer than this is inside the phone; further than this is not the user's hand. */
        const val MIN_DISTANCE = 0.18f
        const val MAX_DISTANCE = 1.60f
        private val PALM_JOINTS = intArrayOf(0, 5, 9, 13, 17)
        private val NO_OFFSET = FloatArray(3)

        /** Rotation of a view-inverse matrix (the inverse view is the head pose). */
        fun headQuaternion(viewInverse: FloatArray, out: FloatArray) {
            val m0 = viewInverse[0]; val m1 = viewInverse[1]; val m2 = viewInverse[2]
            val m4 = viewInverse[4]; val m5 = viewInverse[5]; val m6 = viewInverse[6]
            val m8 = viewInverse[8]; val m9 = viewInverse[9]; val m10 = viewInverse[10]
            fun normalizeColumn(cx: Float, cy: Float, cz: Float, dx: Float, dy: Float, dz: Float, o: FloatArray, at: Int) {
                val n = sqrt(cx * cx + cy * cy + cz * cz)
                if (n > 1e-6f) { o[at] = cx / n; o[at + 1] = cy / n; o[at + 2] = cz / n }
                else { o[at] = dx; o[at + 1] = dy; o[at + 2] = dz }
            }
            val x = FloatArray(3); val y = FloatArray(3); val z = FloatArray(3)
            normalizeColumn(m0, m1, m2, 1f, 0f, 0f, x, 0)
            normalizeColumn(m4, m5, m6, 0f, 1f, 0f, y, 0)
            normalizeColumn(m8, m9, m10, 0f, 0f, 1f, z, 0)
            quaternionFromBasis(x, y, z, out)
        }

        /** Quaternion (x y z w) from an orthonormal basis given as its three columns. */
        fun quaternionFromBasis(x: FloatArray, y: FloatArray, z: FloatArray, out: FloatArray) {
            val trace = x[0] + y[1] + z[2]
            if (trace > 0f) {
                val s = sqrt(trace + 1f) * 2f
                out[3] = 0.25f * s
                out[0] = (y[2] - z[1]) / s
                out[1] = (z[0] - x[2]) / s
                out[2] = (x[1] - y[0]) / s
            } else if (x[0] > y[1] && x[0] > z[2]) {
                val s = sqrt(1f + x[0] - y[1] - z[2]) * 2f
                out[3] = (y[2] - z[1]) / s
                out[0] = 0.25f * s
                out[1] = (x[1] + y[0]) / s
                out[2] = (z[0] + x[2]) / s
            } else if (y[1] > z[2]) {
                val s = sqrt(1f + y[1] - x[0] - z[2]) * 2f
                out[3] = (z[0] - x[2]) / s
                out[0] = (x[1] + y[0]) / s
                out[1] = 0.25f * s
                out[2] = (y[2] + z[1]) / s
            } else {
                val s = sqrt(1f + z[2] - x[0] - y[1]) * 2f
                out[3] = (x[1] - y[0]) / s
                out[0] = (z[0] + x[2]) / s
                out[1] = (y[2] + z[1]) / s
                out[2] = 0.25f * s
            }
        }

        /** out = q · v, with `v` read from [source] starting at [sourceOffset]. */
        fun rotateByQuat(q: FloatArray, source: FloatArray, out: FloatArray, sourceOffset: Int = 0) {
            val x = source[sourceOffset]; val y = source[sourceOffset + 1]; val z = source[sourceOffset + 2]
            val qx = q[0]; val qy = q[1]; val qz = q[2]; val qw = q[3]
            // t = 2 · (q_vec × v), out = v + qw·t + q_vec × t
            val tx = 2f * (qy * z - qz * y)
            val ty = 2f * (qz * x - qx * z)
            val tz = 2f * (qx * y - qy * x)
            out[0] = x + qw * tx + (qy * tz - qz * ty)
            out[1] = y + qw * ty + (qz * tx - qx * tz)
            out[2] = z + qw * tz + (qx * ty - qy * tx)
        }

        /** out = a · b, both unit quaternions, Hamiltonian product (a applied after b). */
        fun quaternionMultiply(a: FloatArray, b: FloatArray, out: FloatArray) {
            val ax = a[0]; val ay = a[1]; val az = a[2]; val aw = a[3]
            val bx = b[0]; val by = b[1]; val bz = b[2]; val bw = b[3]
            val x = aw * bx + ax * bw + ay * bz - az * by
            val y = aw * by - ax * bz + ay * bw + az * bx
            val z = aw * bz + ax * by - ay * bx + az * bw
            val w = aw * bw - ax * bx - ay * by - az * bz
            val n = sqrt(x * x + y * y + z * z + w * w)
            if (n > 1e-6f) { out[0] = x / n; out[1] = y / n; out[2] = z / n; out[3] = w / n }
            else { out[0] = 0f; out[1] = 0f; out[2] = 0f; out[3] = 1f }
        }

        private fun subtract(a: FloatArray, aOffset: Int, b: FloatArray, bOffset: Int, out: FloatArray) {
            out[0] = a[aOffset] - b[bOffset]
            out[1] = a[aOffset + 1] - b[bOffset + 1]
            out[2] = a[aOffset + 2] - b[bOffset + 2]
        }

        private fun cross(a: FloatArray, b: FloatArray, out: FloatArray) {
            val x = a[1] * b[2] - a[2] * b[1]
            val y = a[2] * b[0] - a[0] * b[2]
            val z = a[0] * b[1] - a[1] * b[0]
            out[0] = x; out[1] = y; out[2] = z
        }

        private fun normalize(v: FloatArray) {
            val n = sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2])
            if (n > 1e-6f) { v[0] /= n; v[1] /= n; v[2] /= n } else { v[0] = 0f; v[1] = 0f; v[2] = 1f }
        }
    }
}

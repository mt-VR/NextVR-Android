package com.nextvr.app.hands

import com.nextvr.lighttrack.LightHand

/** Adapted from mt-VR/NextVR b878d8b VrHomeActivity.onHands/LandmarkSmoother.
 * The hands come from the light silhouette tracker (com.nextvr.lighttrack); smoothing, shapes,
 * pinch and shoulder rays are native. The HTML shell only hit-tests
 * these rays against its own window geometry. No reference-prototype gesture heuristics remain.
 *
 * Temporal tracking (confidence-aware): a hand that briefly disappears from the detector — which on
 * slower phones is usually a late or skipped inference, not a real loss — keeps being published as
 * a predicted hand, extrapolated along its own velocity from the capture-timeline motion model,
 * with confidence decaying to zero over [PREDICT_HORIZON_NS]. Predictions bridge the gap instead
 * of blinking the hand away; they never start a pinch or a fist (gesture flags are held, never
 * created), and once the horizon passes the hand is hidden and the web layer cancels any press.
 * Reacquisition eases instead of snapping because the filter state survives brief misses
 * ([STATE_RETAIN_NS]) and the One Euro filters converge back to the measurement on their own.
 */
class PhoneXrHands {
    companion object {
        /** Velocity stays trustworthy across detection gaps up to one slow-tracking interval. */
        const val MAX_PREDICT_GAP_NS = 600_000_000L
        /** A missing hand is predicted for this long (confidence 1 → 0), then hidden for good. */
        const val PREDICT_HORIZON_NS = 600_000_000L
        /**
         * How long a hand's filter/gesture state survives its absence.
         *
         * Dropping the state on the first empty result makes a hand that blinks out for one or two
         * inferences - an occlusion, a frame the palm detector misses - reappear with its filters
         * RESET: the first sample after the dropout is shown raw, a visible snap to wherever the
         * hand now is. Keeping the state for this window lets the One Euro filters resume from
         * where they were and converge to the new position with their adaptive cutoff: the
         * reappearance is a smooth correction, not a jump. The dt clamp inside the filter (0.2 s)
         * already treats the gap as one long step instead of fast motion. The same window covers
         * the motion-model bridge below (PREDICT_HORIZON_NS), so a bridged hand is always backed
         * by live filter state.
         *
         * Beyond the window the state is dropped: a hand returning after seconds may be somewhere
         * else entirely, and resuming an old filter there would drag the silhouette across the
         * view. Pruning happens BEFORE a result may reuse state, so a hand that reappears after a
         * long silence also starts fresh instead of easing out of a pose from seconds ago.
         */
        const val STATE_RETAIN_NS = 1_500_000_000L
        /** One prediction step may never move a landmark further than this (normalized units). */
        const val MAX_PREDICT_STEP = .35f
        /** Per-sample weight of the velocity estimate from consecutive detections. */
        private const val VELOCITY_EMA = .65f
    }
    data class Hand(val left: Boolean, val points: FloatArray, val head: FloatArray?,
                    val shape: HandGestures.Shape, val baseX: Float, val baseY: Float,
                    val aimX: Float, val aimY: Float, val pinching: Boolean, val grabX: Float, val grabY: Float,
                    /** False for a real detection; true for a motion-model bridge between detections. */
                    val predicted: Boolean = false,
                    /** 1 for a fresh detection, decaying toward 0 as a prediction ages out. */
                    val confidence: Float = 1f)
    data class Frame @JvmOverloads constructor(val hands: List<Hand>, val timestampNs: Long,
        val completedNs: Long = timestampNs, val validForNs: Long = 500_000_000L,
        val frameAgeNs: Long = (completedNs - timestampNs).coerceAtLeast(0),
        val previous: Frame? = null) {
        fun isFresh(nowNs: Long) = nowNs >= completedNs && nowNs - completedNs <= validForNs
        // Presentation-only temporal prediction, the same idea Quest uses to keep hands fluid at
        // display rate while tracking runs slower (e.g. GPU contention with an open app's WebView):
        // extrapolate the last detection along its own velocity, at most one tracking interval.
        // At the detection instant it shows the detection exactly (zero added latency); gestures
        // (pinch/fist) always come from the newest detection and are never extrapolated.
        private var predictBucket = -1L
        private var predictCache: Frame? = null
        fun predicted(nowNs: Long): Frame {
            val bucket = nowNs / 1_000_000L
            if (bucket == predictBucket) return predictCache ?: this
            val result = predictedUncached(nowNs)
            predictBucket = bucket; predictCache = result
            return result
        }
        private fun predictedUncached(nowNs: Long): Frame {
            val prev = previous ?: return this
            if (hands.isEmpty() || prev.hands.isEmpty()) return this
            // Velocity is measured on the CAPTURE timeline. Completion gaps jitter with inference
            // latency (that is the frame timing that differs between devices), so using them made
            // the same hand motion extrapolate differently — and drift — on slower phones.
            val gap = timestampNs - prev.timestampNs
            // Never extrapolate across a long gap: a hand reappearing after a dropout must show
            // up exactly where it was detected, not drift along a stale velocity.
            if (gap <= 0L || gap > MAX_PREDICT_GAP_NS) return this
            val dt = ((nowNs - completedNs).toDouble() / gap).toFloat().coerceIn(0f, 1f)
            if (dt <= 0f) return this
            val t = 1f + dt
            val predicted = hands.map { h ->
                val p = prev.hands.firstOrNull { it.left == h.left } ?: return@map h
                Hand(h.left, lerp(p.points, h.points, t), lerpNullable(p.head, h.head, t), h.shape,
                    lerp(p.baseX, h.baseX, t), lerp(p.baseY, h.baseY, t),
                    lerp(p.aimX, h.aimX, t), lerp(p.aimY, h.aimY, t),
                    h.pinching, lerp(p.grabX, h.grabX, t), lerp(p.grabY, h.grabY, t),
                    h.predicted, h.confidence)
            }
            return Frame(predicted, timestampNs, completedNs, validForNs, frameAgeNs)
        }
        private fun lerp(a: FloatArray, b: FloatArray, t: Float): FloatArray {
            if (a.size != b.size) return b
            val out = FloatArray(a.size)
            for (i in a.indices) out[i] = a[i] + (b[i] - a[i]) * t
            return out
        }
        // Named separately: FloatArray and FloatArray? erase to the same JVM type, so two lerp
        // overloads differing only in nullability would be a platform declaration clash.
        private fun lerpNullable(a: FloatArray?, b: FloatArray?, t: Float): FloatArray? =
            if (a == null || b == null) b else lerp(a, b, t)
        private fun lerp(a: Float, b: Float, t: Float) = a + (b - a) * t
        fun json(): String {
            // Hand-rolled instead of org.json: this runs on the TRACKING thread between two
            // inferences, and JSONArray(listOf(...)) boxes every one of the 63+63 floats per hand
            // into a Double plus an ArrayList - ~600 short-lived objects per frame at 30 Hz, which
            // is exactly the allocation that turns into a GC pause inside the tracking loop. The
            // text is the same JSON, with float (not double) digits, which is smaller for the WebView
            // to parse and far below the sub-pixel resolution of a landmark.
            val sb = StringBuilder(1024)
            sb.append("{\"hands\":[")
            for ((index, h) in hands.withIndex()) {
                if (index > 0) sb.append(',')
                sb.append("{\"id\":\"").append(if (h.left) "left" else "right").append('"')
                    .append(",\"left\":").append(h.left)
                    .append(",\"points\":")
                appendFloats(sb, h.points)
                sb.append(",\"head\":")
                val head = h.head
                if (head == null) sb.append("null") else appendFloats(sb, head)
                sb.append(",\"base\":[").append(h.baseX).append(',').append(h.baseY).append(']')
                    .append(",\"aim\":[").append(h.aimX).append(',').append(h.aimY).append(']')
                    .append(",\"pinching\":").append(h.pinching)
                    .append(",\"pinch\":")
                appendFinite(sb, h.shape.pinchGap)
                sb.append(",\"fist\":").append(h.shape.fist)
                    .append(",\"palm\":[").append(h.shape.palmX).append(',').append(h.shape.palmY).append(']')
                    .append(",\"grab\":[").append(h.grabX).append(',').append(h.grabY).append(']')
                    .append(",\"menuEligible\":").append(!h.shape.fist && (PalmMenuPose.eligible(head, h.left) || h.shape.palmToFace))
                    .append(",\"menuPoint\":[").append(h.shape.pinchX).append(',').append(h.shape.pinchY).append(']')
                    .append(",\"palmWidth\":").append(h.shape.palmWidth)
                    .append(",\"palmToFace\":").append(h.shape.palmToFace)
                    .append(",\"predicted\":").append(h.predicted)
                    .append(",\"confidence\":")
                appendFinite(sb, h.confidence)
                sb.append('}')
            }
            return sb.append("],\"timestampNs\":").append(timestampNs)
                .append(",\"validForMs\":").append(validForNs / 1_000_000L)
                .append(",\"inferenceMs\":").append(frameAgeNs.coerceAtLeast(0) / 1_000_000L)
                .append('}').toString()
        }

        /** Lightweight JSON payload for VR games (skips 63-float head array and menu pose math). */
        fun gameJson(): String {
            val sb = StringBuilder(512)
            sb.append("{\"hands\":[")
            for ((index, h) in hands.withIndex()) {
                if (index > 0) sb.append(',')
                sb.append("{\"id\":\"").append(if (h.left) "left" else "right").append('"')
                    .append(",\"left\":").append(h.left)
                    .append(",\"points\":")
                appendFloats(sb, h.points)
                sb.append(",\"palm\":[").append(h.shape.palmX).append(',').append(h.shape.palmY).append(']')
                    .append(",\"palmWidth\":").append(h.shape.palmWidth)
                    .append(",\"pinching\":").append(h.pinching)
                    .append(",\"fist\":").append(h.shape.fist)
                    .append('}')
            }
            return sb.append("],\"timestampNs\":").append(timestampNs)
                .append(",\"validForMs\":").append(validForNs / 1_000_000L)
                .append('}').toString()
        }

        private fun appendFloats(sb: StringBuilder, values: FloatArray): StringBuilder {
            sb.append('[')
            for (i in values.indices) {
                if (i > 0) sb.append(',')
                appendFinite(sb, values[i])
            }
            return sb.append(']')
        }

        /** Matches org.json, which writes null for a value a JSON consumer could not use. */
        private fun appendFinite(sb: StringBuilder, value: Float) {
            if (value.isFinite()) sb.append(value) else sb.append("null")
        }
    }
    private class State {
        val landmarks = Array(63) { i ->
            when {
                i % 3 == 2 -> HandGestures.OneEuro(minCutoff=1.6f, beta=12.0f, deadZone=0.0007f)
                else -> HandGestures.OneEuro(minCutoff=1.8f, beta=15.0f, deadZone=0.0007f)
            }
        }
        val x = HandGestures.OneEuro(minCutoff=2.2f, beta=24.0f, derivativeCutoff=1.4f, deadZone=0.0010f)
        val y = HandGestures.OneEuro(minCutoff=2.2f, beta=24.0f, derivativeCutoff=1.4f, deadZone=0.0010f)
        val pinch = HandGestures.PinchLatch()
        var fist = false
        val grabX = HandGestures.OneEuro(minCutoff=2.2f, beta=22.0f, deadZone=0.0009f)
        val grabY = HandGestures.OneEuro(minCutoff=2.2f, beta=22.0f, deadZone=0.0009f)
        var openAimX = Float.NaN
        var openAimY = Float.NaN
        var pinchStartStampNs = 0L

        /* ---- lightweight constant-velocity motion model, on the capture timeline ---- */
        var sawDetection = false
        var consecutiveMisses = 0
        /** Capture time of the last real detection; pruning and prediction key off it. */
        var lastStampNs = 0L
        var lastHand: PhoneXrHands.Hand? = null
        val vPoints = FloatArray(63)
        val vHead = FloatArray(63)
        val vBase = FloatArray(2)
        val vAim = FloatArray(2)
        val vGrab = FloatArray(2)
        val vPalm = FloatArray(2)

        /** Feed the newest real detection: blend its velocity estimate, never snap the model. */
        fun noteDetection(stampNs: Long, hand: PhoneXrHands.Hand) {
            val previous = lastHand
            if (previous != null && stampNs > lastStampNs) {
                val dt = ((stampNs - lastStampNs) / 1e9f).coerceIn(.008f, .6f)
                fun blend(old: Float, now: Float, before: Float) =
                    old + ((now - before) / dt - old) * VELOCITY_EMA
                for (i in 0 until 63) {
                    vPoints[i] = blend(vPoints[i], hand.points[i], previous.points[i])
                    val nowHead = hand.head
                    val oldHead = previous.head
                    if (nowHead != null && oldHead != null && nowHead.size == oldHead.size && i < nowHead.size)
                        vHead[i] = blend(vHead[i], nowHead[i], oldHead[i])
                }
                vBase[0] = blend(vBase[0], hand.baseX, previous.baseX)
                vBase[1] = blend(vBase[1], hand.baseY, previous.baseY)
                vAim[0] = blend(vAim[0], hand.aimX, previous.aimX)
                vAim[1] = blend(vAim[1], hand.aimY, previous.aimY)
                vGrab[0] = blend(vGrab[0], hand.grabX, previous.grabX)
                vGrab[1] = blend(vGrab[1], hand.grabY, previous.grabY)
                vPalm[0] = blend(vPalm[0], hand.shape.palmX, previous.shape.palmX)
                vPalm[1] = blend(vPalm[1], hand.shape.palmY, previous.shape.palmY)
            } else {
                // First sample or a rewound stamp: the model starts from rest, never from a guess.
                vPoints.fill(0f); vHead.fill(0f); vBase.fill(0f)
                vAim.fill(0f); vGrab.fill(0f); vPalm.fill(0f)
            }
            lastStampNs = stampNs
            lastHand = hand
            sawDetection = true
            consecutiveMisses = 0
        }

        /**
         * The hand's pose between detections, extrapolated along its velocity, or null once the
         * prediction horizon has passed. The gesture flags are COPIED from the last detection —
         * a prediction can hold a pinch/fist that really started but can never begin a new one.
         */
        fun predict(stampNs: Long): PhoneXrHands.Hand? {
            val hand = lastHand ?: return null
            if (!sawDetection) return null
            consecutiveMisses++
            if (consecutiveMisses >= 2) return null
            val since = stampNs - lastStampNs
            if (since <= 0L || since > PREDICT_HORIZON_NS) return null
            val t = since / 1e9f
            fun step(velocity: Float) = (velocity * t).coerceIn(-MAX_PREDICT_STEP, MAX_PREDICT_STEP)
            val points = FloatArray(63) { i -> hand.points[i] + step(vPoints[i]) }
            val head = hand.head?.let { old -> FloatArray(old.size) { i -> old[i] + step(vHead[i]) } }
            val shape = hand.shape.copy(palmX = hand.shape.palmX + step(vPalm[0]),
                palmY = hand.shape.palmY + step(vPalm[1]))
            return PhoneXrHands.Hand(hand.left, points, head, shape,
                hand.baseX + step(vBase[0]), hand.baseY + step(vBase[1]),
                hand.aimX + step(vAim[0]), hand.aimY + step(vAim[1]),
                hand.pinching, hand.grabX + step(vGrab[0]), hand.grabY + step(vGrab[1]),
                predicted = true,
                confidence = 1f - since.toFloat() / PREDICT_HORIZON_NS)
        }
    }
    private val states = HashMap<Boolean, State>()
    private var previous: Frame? = null
    /** "both" (2 mãos), "right" (só mão direita), "left" (só mão esquerda), ou "one" (1 mão automática). */
    @JvmField @Volatile var singleHandMode: String = "both"
    fun reset() { states.clear(); previous = null }
    /**
     * Merges one tracking result into the published frame.
     *
     * [detected] comes from the light silhouette tracker: already-derived hands with 21 landmarks
     * each, a measured pinch gap and a fist flag. Everything this class does on top of that is
     * unchanged — the duplicate-id fix, the One Euro filters, the pinch latch, the aim anchor and
     * the motion-model bridge for a missed detection.
     */
    @JvmOverloads fun process(detected: List<LightHand>, timestampMs: Long, scaleX: Float, scaleY: Float,
        completedNs: Long = timestampMs * 1_000_000L, frameAgeNs: Long? = null): Frame {
        // Filter time is the camera capture timestamp. It is deliberately kept separate from
        // elapsedRealtime, since Camera2 timestamps are not guaranteed to share that clock.
        val stamp = timestampMs * 1_000_000L
        // Prune BEFORE this result may reuse any state: a hand that reappears after a long silence
        // must not resume a stale filter from where it vanished (see STATE_RETAIN_NS). A briefer
        // absence keeps its filters and is bridged by the motion model below.
        states.entries.removeAll { it.value.lastStampNs < stamp - STATE_RETAIN_NS }
        val seen = ArrayList<Hand>()
        val foundSides = HashSet<Boolean>()
        val twoHandSides: BooleanArray? = if (detected.size == 2 && singleHandMode == "both") {
            val r0 = detected[0].image
            val r1 = detected[1].image
            val sepDx = r0[0] - r1[0]
            val sepDy = r0[1] - r1[1]
            val sepSq = sepDx * sepDx + sepDy * sepDy
            val stL = states[true]?.takeIf { it.lastHand != null && stamp - it.lastStampNs in 1L..350_000_000L }?.lastHand
            val stR = states[false]?.takeIf { it.lastHand != null && stamp - it.lastStampNs in 1L..350_000_000L }?.lastHand
            if (sepSq > 0.001f && stL != null && stR != null) {
                fun dSq(raw: FloatArray, h: Hand): Float {
                    val dx = raw[0] - h.points[0]
                    val dy = raw[1] - h.points[1]
                    return dx * dx + dy * dy
                }
                val cost0L1R = dSq(r0, stL) + dSq(r1, stR)
                val cost0R1L = dSq(r0, stR) + dSq(r1, stL)
                if (cost0L1R <= cost0R1L) booleanArrayOf(true, false) else booleanArrayOf(false, true)
            } else if (sepSq > 0.001f && (stL != null || stR != null)) {
                val knownLeft = stL != null
                val knownHand = (stL ?: stR)!!
                val d0 = (r0[0] - knownHand.points[0]) * (r0[0] - knownHand.points[0]) +
                         (r0[1] - knownHand.points[1]) * (r0[1] - knownHand.points[1])
                val d1 = (r1[0] - knownHand.points[0]) * (r1[0] - knownHand.points[0]) +
                         (r1[1] - knownHand.points[1]) * (r1[1] - knownHand.points[1])
                if (d0 <= d1) booleanArrayOf(knownLeft, !knownLeft) else booleanArrayOf(!knownLeft, knownLeft)
            } else null
        } else null
        detected.forEachIndexed { index, raw ->
            // The tracker labels a hand by the side of the view it is on. With two hands on screen
            // the previous positions decide which is which (see below).
            var left = if (twoHandSides != null && index < twoHandSides.size) twoHandSides[index] else raw.left
            val mode = singleHandMode
            if (mode == "right") {
                if (detected.size == 1) left = false
                else if (left) return@forEachIndexed
            } else if (mode == "left") {
                if (detected.size == 1) left = true
                else if (!left) return@forEachIndexed
            } else if (mode == "one" && seen.isNotEmpty()) {
                return@forEachIndexed
            }
            if (detected.size == 1 && !states.containsKey(left)) {
                val other = states[!left]
                val lastH = other?.lastHand
                if (other != null && lastH != null && stamp - other.lastStampNs in 1L..280_000_000L) {
                    val dx = raw.image[0] - lastH.points[0]
                    val dy = raw.image[1] - lastH.points[1]
                    if (dx * dx + dy * dy < 0.032f) left = !left
                }
            }
            // Two hands in one image can never be the same physical side, but the side a silhouette
            // lands on can be wrong when the hands cross or are seen edge-on. That used to give the
            // second hand the same `id` on the wire AND the same filter/pinch state as the first:
            // one hand's samples then pulled the other's One Euro filters (a jittery cursor) and
            // updated its pinch latch (a release on a hand that never moved), and the web layer -
            // which owns presses and drags per `id` - could not tell the two apart. The duplicate
            // claim is moved to the free side, so each hand keeps its own state and its own id.
            if (!foundSides.add(left)) { left = !left; foundSides.add(left) }
            val state = states.getOrPut(left) { State() }
            val w0x = raw.image[0]
            val w0y = raw.image[1]
            val palmLen = kotlin.math.hypot(raw.image[27] - w0x, raw.image[28] - w0y)
            val maxReach = (palmLen * 2.35f).coerceAtLeast(0.06f)
            val ptsArray = FloatArray(63)
            for (i in 0 until 21) {
                var px = raw.image[i * 3]
                var py = raw.image[i * 3 + 1]
                if (i > 0 && palmLen > 0.015f) {
                    val rx = px - w0x
                    val ry = py - w0y
                    val rd = kotlin.math.hypot(rx, ry)
                    if (rd > maxReach && rd > 1e-4f) {
                        val s = maxReach / rd
                        px = w0x + rx * s
                        py = w0y + ry * s
                    }
                }
                val fx = state.landmarks[i * 3].filter(px, stamp)
                val fy = state.landmarks[i * 3 + 1].filter(py, stamp)
                val fz = state.landmarks[i * 3 + 2].filter(raw.image[i * 3 + 2], stamp)
                ptsArray[i * 3] = fx
                ptsArray[i * 3 + 1] = fy
                ptsArray[i * 3 + 2] = fz
            }
            val imageShape = HandGestures.shape(ptsArray, left)
            // Gesture decisions are measured on the RAW detection: the position filters exist to
            // steady the cursor and must never delay, smooth over, or drift a pinch edge. The
            // tracker's own gap (the thumb-index loop on the picture) is preferred where it is
            // tighter, since a hand seen edge-on loses the image gap but keeps the loop. PinchLatch
            // still provides close/open hysteresis for either measurement.
            val rawShape = HandGestures.shape(raw.image, left)
            val gap = when {
                rawShape.pinchGap < .32f -> minOf(raw.pinchGap, rawShape.pinchGap * 1.05f)
                else -> raw.pinchGap
            }
            val shape = imageShape.copy(
                pinch = !raw.fist && gap < .35f,
                pinchStrength = ((.9f - gap) / .6f).coerceIn(0f, 1f),
                pinchGap = gap,
                fist = raw.fist,
                palmWidth = raw.palmWidth,
                aimX = rawShape.aimX,
                aimY = rawShape.aimY,
            )
            if (!shape.fist || !state.fist) { state.grabX.reset(); state.grabY.reset() }
            state.fist = shape.fist
            val head = HandGestures.headPoints(ptsArray, raw.world, scaleX, scaleY)
            val bx = (rawShape.aimX - .5f) * 2f * scaleX
            val by = (.5f - rawShape.aimY) * 2f * scaleY
            val rightSide = head?.let { it[0] > 0f } ?: (bx > 0f)
            val shoulder = if (rightSide) .45f else -.45f
            var rawAimX = bx + (bx - shoulder) * .25f
            var rawAimY = by + (by + 1f) * .25f
            val pinchingNow = state.pinch.update(shape)
            if (!pinchingNow && shape.pinchGap >= .42f) {
                state.openAimX = rawAimX
                state.openAimY = rawAimY
                state.pinchStartStampNs = 0L
            } else if (state.sawDetection && !state.openAimX.isNaN()) {
                if (pinchingNow && state.pinchStartStampNs == 0L) state.pinchStartStampNs = stamp
                val inPinchAnchorWindow = !pinchingNow || (stamp - state.pinchStartStampNs in 0L..220_000_000L)
                val drift = kotlin.math.hypot(rawAimX - state.openAimX, rawAimY - state.openAimY)
                if (inPinchAnchorWindow && drift < .09f) {
                    val w = if (pinchingNow) .82f else .68f
                    rawAimX = state.openAimX * w + rawAimX * (1f - w)
                    rawAimY = state.openAimY * w + rawAimY * (1f - w)
                } else {
                    state.openAimX = rawAimX
                    state.openAimY = rawAimY
                }
            }
            val hand = Hand(left, ptsArray, head, shape, bx, by, state.x.filter(rawAimX, stamp),
                state.y.filter(rawAimY, stamp), pinchingNow, state.grabX.filter(shape.palmX, stamp),
                state.grabY.filter(shape.palmY, stamp))
            state.noteDetection(stamp, hand)
            seen.add(hand)
        }
        // Hands missing from this result are not gone: the detector blinked or the inference was
        // late. Bridge them with the motion model while confidence holds; a real, lasting loss ends
        // at the horizon with the hand simply absent — the web layer then cancels, never clicks.
        val iterator = states.entries.iterator()
        while (iterator.hasNext()) {
            val entry = iterator.next()
            if (entry.key in foundSides) continue
            if (singleHandMode == "right" && entry.key) { iterator.remove(); continue }
            if (singleHandMode == "left" && !entry.key) { iterator.remove(); continue }
            if (singleHandMode == "one" && seen.isNotEmpty()) continue
            val age = if (entry.value.sawDetection) stamp - entry.value.lastStampNs else Long.MAX_VALUE
            if (age > STATE_RETAIN_NS) {
                // Prolonged loss: forget the filter/motion state so a returning hand starts fresh
                // instead of easing out of a pose from seconds ago.
                iterator.remove()
                continue
            }
            val predicted = entry.value.predict(stamp) ?: continue
            seen.add(predicted)
        }
        // Capture time drives One Euro dt; expiry uses measured frame age on the elapsedRealtime
        // clock instead. Camera2 sensor timestamps may have a different epoch from that clock.
        val ageNs = (frameAgeNs ?: (completedNs - stamp)).coerceAtLeast(0)
        val validity = (ageNs.coerceAtMost(675_000_000L) * 2 + 150_000_000L)
            .coerceIn(500_000_000L, 1_500_000_000L)
        // Chain the previous DETECTION so the renderer can predict positions to display time.
        // A frame whose hands are all predicted keeps the old chain (retention handles dropouts)
        // but does not replace it, so velocities always come from real measurements and prediction
        // errors cannot compound. Prediction needs only the immediately preceding sample. Do not
        // retain the whole session's landmark history through Frame.previous (which would grow
        // without bound at camera FPS).
        val prior = previous?.copy(previous = null)
        val frame = Frame(seen,stamp,completedNs,validity,ageNs,prior)
        if (foundSides.isNotEmpty()) previous = frame
        return frame
    }
}

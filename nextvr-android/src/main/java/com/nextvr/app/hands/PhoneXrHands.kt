package com.nextvr.app.hands

import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult

/** Adapted from mt-VR/NextVR b878d8b VrHomeActivity.onHands/LandmarkSmoother.
 * Detection, smoothing, shapes and pinch are native. The HTML shell only hit-tests
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
        /**
         * Quantos resultados seguidos uma mão pode faltar e ainda ser desenhada pelo modelo de
         * movimento. Era 2 — ou seja, UMA falha e a mão sumia da tela até o detector voltar a vê-la.
         * Com as duas mãos em uso isso acontece o tempo todo (uma mão na borda da imagem, uma na
         * frente da outra, mão rápida), e o resultado era a segunda mão piscando. O horizonte de
         * tempo continua mandando: uma mão que sumiu de verdade desaparece sozinha.
         */
        const val MAX_PREDICT_MISSES = 4
        /** Per-sample weight of the velocity estimate from consecutive detections. */
        private const val VELOCITY_EMA = .65f
        /**
         * Duas mãos de verdade nunca estão com a palma praticamente no mesmo ponto da imagem.
         * Quando a predita cai dentro deste raio de uma mão detectada no MESMO resultado, elas
         * são a mesma mão física: o MediaPipe troca o rótulo esquerda/direita quando as mãos se
         * cruzam ou aparecem de perfil, e o resultado era uma SEGUNDA mão aparecendo do nada.
         * Raio em coordenadas normalizadas da imagem.
         */
        private const val GHOST_RADIUS = .09f
        /**
         * Solavanco de detector: um landmark que salta mais de 55 % do próprio raio (pulso →
         * landmark) em UM quadro não é movimento de mão — é ruído de profundidade ou oclusão. Ele é
         * segurado no raio anterior e a referência sobe devagar, em vez de esticar o dedo até o
         * limite duro e voltar no quadro seguinte (era isso que deformava e contorcia a mão).
         */
        private const val REACH_JUMP = 1.55f
        /** Até onde o raio de um solavanco pode ir num quadro antes de o landmark voltar ao normal. */
        const val REACH_JUMP_SOFT = 1.25f
        /** Palma (pulso → nós dos dedos) abaixo disto não dá para medir alcance. */
        private const val MIN_PALM_FOR_REACH = .015f
        /** Limite duro de alcance, em palmas: nenhuma mão real passa disso. */
        private const val HARD_REACH_FLOOR = .06f
        /** Quanto o pulso volta ao lugar antigo no primeiro quadro depois de uma falha. */
        private const val WRIST_REACQUIRE = .55f
        /** Ossos das cinco correntes de dedo: polegar, indicador, médio, anelar, mínimo. */
        private val BONES = intArrayOf(
            1, 2, 2, 3, 3, 4,
            5, 6, 6, 7, 7, 8,
            9, 10, 10, 11, 11, 12,
            13, 14, 14, 15, 15, 16,
            17, 18, 18, 19, 19, 20,
        )
        private val BONE_COUNT = BONES.size / 2
        /**
         * Esticar 25 % além do comprimento natural num quadro já é artefato (landmark pulando,
         * oclusão, ruído de profundidade) e é corrigido.
         *
         * ENCOLHER é permitido de propósito: na projeção da câmera um dedo que se dobra em direção
         * à lente encurta de verdade. Travar o comprimento para baixo faria o punho ser desfeito
         * pelo próprio corretor — a mão não conseguiria fechar.
         */
        private const val BONE_TOLERANCE = 1.25f
        /** Queda de comprimento de um quadro para o outro que só pode ser falha (dedo "sumindo"). */
        private const val BONE_COLLAPSE = .62f
        /** Quanto da correção é aplicada por quadro (o resto fica para os seguintes). */
        private const val BONE_CORRECTION = .55f
        /** A referência sobe rápido (dedo abrindo) e desce devagar (nunca aperta o dedo). */
        private const val BONE_LEARN_UP = .50f
        private const val BONE_LEARN_DOWN = .05f
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
            val inferLeadNs = if (completedNs > timestampNs) ((completedNs - timestampNs) + 14_000_000L).coerceAtMost(52_000_000L) else 0L
            val dt = (((nowNs - completedNs) + inferLeadNs).toDouble() / gap).toFloat().coerceIn(0f, 1f)
            if (dt <= 0f) return this
            val t = 1f + dt
            val byId = prev.hands.associateBy { it.left }
            val predicted = hands.map { h ->
                val p = byId[h.left] ?: return@map h
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
                    .append(",\"fist\":").append(h.shape.fist)
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
        /**
         * Os 63 landmarks da silhueta.
         *
         * Duas coisas erradas antes: o minCutoff de 150 Hz era, na prática, o filtro DESLIGADO (a 30
         * quadros/s ele passa ~97 % do valor cru), e o beta alto não distinguia tremor de movimento —
         * com ruído de ~1 px por quadro a derivada estimada já eleva o corte para ~30 Hz, então o
         * tremor passava direto. Agora o repouso fica realmente filtrado e há uma ZONA MORTA: o valor
         * filtrado só é publicado quando sai de ±0,0006 (≈1 px de 900) do que já está na tela, o que
         * mata o tremor residual de um filtro linear. Em movimento nada disso pesa: a mão sai da zona
         * morta no primeiro quadro e o beta devolve o valor cru.
         */
        val landmarks = Array(63) { i ->
            when {
                i % 3 == 2 -> HandGestures.OneEuro(minCutoff=1.6f, beta=6.0f, deadZone=0.0012f)
                else -> HandGestures.OneEuro(minCutoff=1.6f, beta=14.0f, deadZone=0.0006f)
            }
        }
        // O raio/cursor usa estes dois: beta alto = o raio chega junto com a mão, nunca fica
        // arrastando atrás dela; minCutoff baixo = para de tremer quando a mão para.
        val x = HandGestures.OneEuro(minCutoff=3.0f, beta=900.0f, deadZone=0f)
        val y = HandGestures.OneEuro(minCutoff=3.0f, beta=900.0f, deadZone=0f)
        val pinch = HandGestures.PinchLatch()
        var fist = false
        val grabX = HandGestures.OneEuro(minCutoff=4.0f,beta=200.0f, deadZone=0f)
        val grabY = HandGestures.OneEuro(minCutoff=4.0f,beta=200.0f, deadZone=0f)

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
        /**
         * Raio pulso → landmark do último quadro aceito, por landmark. É a referência que separa
         * movimento de mão (que muda o raio devagar) de solavanco do detector (que o dobra de uma
         * vez). Ver o limite de alcance em [process].
         */
        val reach = FloatArray(21)
        /**
         * Comprimento de cada osso do dedo como FRAÇÃO da palma, aprendido ao longo do tempo. Serve
         * para a consistência anatômica: um dedo que estica ou encurta de repente (landmark pulando
         * de posição, oclusão, ruído de profundidade) é puxado de volta ao comprimento natural em vez
         * de contorcer a mão. É fração da palma, então continua certo quando a mão se aproxima ou se
         * afasta da câmera.
         */
        val boneRatio = FloatArray(BONE_COUNT)
        /** Quantos quadros a referência de cada osso já viu (0 = ainda é a medida crua). */
        val boneSeen = IntArray(BONE_COUNT)
        /** Comprimento do osso no quadro anterior: é contra ele que se mede um colapso de 1 quadro. */
        val bonePrev = FloatArray(BONE_COUNT)

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
            if (consecutiveMisses >= MAX_PREDICT_MISSES) return null
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
    @JvmOverloads fun process(result: HandLandmarkerResult, scaleX: Float, scaleY: Float,
        completedNs: Long = result.timestampMs() * 1_000_000L, frameAgeNs: Long? = null): Frame {
        // MediaPipe/filter time is the camera capture timestamp. It is deliberately kept separate
        // from elapsedRealtime, since Camera2 timestamps are not guaranteed to share that clock.
        val stamp = result.timestampMs() * 1_000_000L
        // Prune BEFORE this result may reuse any state: a hand that reappears after a long
        // silence must not resume a stale filter from where it vanished (see STATE_RETAIN_NS).
        // A briefer absence keeps its filters and is bridged by the motion model below.
        states.entries.removeAll { it.value.lastStampNs < stamp - STATE_RETAIN_NS }
        val seen = ArrayList<Hand>()
        val detected = HashSet<Boolean>()
        result.landmarks().forEachIndexed { index, raw ->
            if(raw.size != 21) return@forEachIndexed
            // MediaPipe assumes mirrored selfie input. Our upright rear camera is NOT mirrored.
            var left = result.handednesses().getOrNull(index)?.firstOrNull()?.categoryName().equals("Right", true)
            val mode = singleHandMode
            if (mode == "right") {
                if (result.landmarks().size == 1) left = false
                else if (left) return@forEachIndexed
            } else if (mode == "left") {
                if (result.landmarks().size == 1) left = true
                else if (!left) return@forEachIndexed
            } else if (mode == "one" && seen.isNotEmpty()) {
                return@forEachIndexed
            }
            if (result.landmarks().size == 1 && !states.containsKey(left)) {
                val other = states[!left]
                val lastH = other?.lastHand
                if (other != null && lastH != null && stamp - other.lastStampNs in 1L..280_000_000L) {
                    val dx = raw[0].x() - lastH.points[0]
                    val dy = raw[0].y() - lastH.points[1]
                    if (dx * dx + dy * dy < 0.032f) left = !left
                }
            }
            // Two hands in one image can never be the same physical side, but the classifier does
            // label both the same when the hands cross or are seen edge-on. That used to give the
            // second hand the same `id` on the wire AND the same filter/pinch state as the first:
            // one hand's samples then pulled the other's One Euro filters (a jittery cursor) and
            // updated its pinch latch (a release on a hand that never moved), and the web layer -
            // which owns presses and drags per `id` - could not tell the two apart. The duplicate
            // claim is moved to the free side, so each hand keeps its own state and its own id.
            if (!detected.add(left)) { left = !left; detected.add(left) }
            val state = states.getOrPut(left) { State() }
            // O pulso publicado é o MESMO centro usado pelo limite de alcance. Antes o landmark 0
            // saía suavizado (misturado com o quadro anterior) e os outros eram limitados contra o
            // pulso CRU: numa falha de detecção o pulso ficava para trás e os dedos iam para a
            // frente, e a mão dobrava por dentro até parecer torcida.
            val rawWx = raw[0].x(); val rawWy = raw[0].y()
            // Reaparecer depois de uma falha NÃO pode deformar a mão: o ajuste é uma TRANSLACÃO da
            // mão inteira (o mesmo deslocamento em todos os 21 landmarks), não um pulo só do pulso.
            // Antes só o landmark 0 era misturado com o quadro anterior e os dedos ficavam no lugar
            // novo: a palma esticava e a mão parecia torcida por alguns quadros.
            var shiftX = 0f
            var shiftY = 0f
            if (state.consecutiveMisses > 0) {
                val prevPts = state.lastHand?.points
                if (prevPts != null && prevPts.size >= 2) {
                    shiftX = (prevPts[0] - rawWx) * (1f - WRIST_REACQUIRE)
                    shiftY = (prevPts[1] - rawWy) * (1f - WRIST_REACQUIRE)
                }
            }
            val w0x = rawWx + shiftX; val w0y = rawWy + shiftY
            val m9x = raw[9].x() + shiftX; val m9y = raw[9].y() + shiftY
            val palmLen = kotlin.math.hypot(m9x - w0x, m9y - w0y)
            val hardReach = (palmLen * 2.35f).coerceAtLeast(HARD_REACH_FLOOR)
            // 1) Limite de alcance: corta solavanco de um quadro contra o raio do quadro anterior.
            val fx = FloatArray(21)
            val fy = FloatArray(21)
            for (i in 0 until 21) {
                var px = raw[i].x() + shiftX
                var py = raw[i].y() + shiftY
                if (i > 0 && palmLen > MIN_PALM_FOR_REACH) {
                    val rx = px - w0x; val ry = py - w0y
                    val rd = kotlin.math.hypot(rx, ry)
                    if (rd > 1e-4f) {
                        // Um dedo que abre de verdade cresce aos poucos e passa direto; o limite duro
                        // continua como última barreira contra mão degenerada.
                        val previous = state.reach[i]
                        val jumpCap = if (previous > 0f) previous * REACH_JUMP else hardReach
                        if (rd > jumpCap) {
                            val limit = minOf(hardReach, if (previous > 0f) previous * REACH_JUMP_SOFT else hardReach)
                            val s = limit / rd
                            px = w0x + rx * s; py = w0y + ry * s
                            state.reach[i] = limit
                        } else {
                            state.reach[i] = rd
                        }
                    }
                }
                fx[i] = px; fy[i] = py
            }
            // 2) Consistência anatômica. Dois artefatos, dois remédios, nenhum congelamento:
            //    (a) um osso que de um quadro para o outro fica 25 % mais comprido que o natural
            //        (landmark saltando, profundidade errada) é puxado de volta — o dedo para de
            //        "esticar sozinho";
            //    (b) um osso que em UM quadro cai a menos de 62 % do que era (o dedo some e volta
            //        torto) é devolvido ao tamanho anterior — o dedo para de "encolher sozinho".
            //    Nos dois casos a DIREÇÃO atual é preservada: só o comprimento muda, então o dedo
            //    continua dobrando e girando normalmente. O natural é medido em fração da palma,
            //    o que mantém tudo válido com a mão perto ou longe da câmera.
            if (palmLen > MIN_PALM_FOR_REACH) {
                for (b in 0 until BONE_COUNT) {
                    val a = BONES[b * 2]; val c = BONES[b * 2 + 1]
                    var dx = fx[c] - fx[a]; var dy = fy[c] - fy[a]
                    val len = kotlin.math.hypot(dx, dy)
                    if (len < 1e-5f) continue
                    val ratio = len / palmLen
                    if (state.boneSeen[b] == 0) {
                        state.boneRatio[b] = ratio
                        state.bonePrev[b] = ratio
                        state.boneSeen[b] = 1
                        continue
                    }
                    val reference = state.boneRatio[b]
                    val previous = state.bonePrev[b]
                    val stretched = ratio > reference * BONE_TOLERANCE
                    val collapsed = !stretched && previous > 1e-6f && ratio < previous * BONE_COLLAPSE
                    val target = when {
                        stretched -> reference * 1.10f
                        collapsed -> previous
                        else -> ratio
                    }
                    val shown: Float
                    if (target != ratio) {
                        val wanted = target * palmLen
                        val corrected = len + (wanted - len) * BONE_CORRECTION
                        val k = corrected / len
                        dx *= k; dy *= k
                        fx[c] = fx[a] + dx; fy[c] = fy[a] + dy
                        shown = corrected / palmLen
                    } else {
                        shown = ratio
                    }
                    state.boneRatio[b] = if (shown > reference)
                        reference + (shown - reference) * BONE_LEARN_UP
                    else
                        reference + (shown - reference) * BONE_LEARN_DOWN
                    state.bonePrev[b] = shown
                    if (state.boneSeen[b] < 1000) state.boneSeen[b]++
                }
            }
            // 3) Suavização (One Euro com zona morta) e publicação dos 21 landmarks.
            val points = List(21) { i ->
                NormalizedLandmark.create(
                    state.landmarks[i*3].filter(fx[i],stamp), state.landmarks[i*3+1].filter(fy[i],stamp),
                    state.landmarks[i*3+2].filter(raw[i].z(),stamp))
            }
            val imageShape = HandGestures.shape(points,left)
            val world = result.worldLandmarks().getOrNull(index)
            // Gesture decisions are measured on the RAW detection: the position filters exist to
            // steady the cursor and must never delay, smooth over, or drift a pinch edge. PinchLatch
            // still provides close/open hysteresis for either measurement. The 2D gap can look open
            // when the hand is rotated and the fingertips separate in camera depth, so MediaPipe's
            // metric 3D thumb-index distance is preferred when world landmarks are available.
            val rawShape = HandGestures.shape(raw,left)
            val metricGap = world?.let { HandGestures.pinchGap3d(it) }?.takeIf { it.isFinite() }
            val gap = when {
                metricGap == null -> rawShape.pinchGap
                rawShape.pinchGap < .32f && metricGap < .48f -> minOf(metricGap, rawShape.pinchGap * 1.05f)
                else -> metricGap
            }
            val shape = imageShape.copy(
                pinch = !rawShape.fist && gap < .35f,
                pinchStrength = ((.9f - gap) / .6f).coerceIn(0f, 1f),
                pinchGap = gap,
            )
            if(!shape.fist || !state.fist){state.grabX.reset();state.grabY.reset()}
            state.fist=shape.fist
            val head = world?.let { HandGestures.headPoints(points,it,scaleX,scaleY) }
            // Aim = a própria mão. Era `bx+(bx-ombro)*.25`, ou seja o raio apontava 25% para além da
            // mão, e no eixo Y havia ainda um viés fixo de +25%: o resultado era o raio "saindo da
            // mão" e mirando alto. Agora o raio nasce e aponta exatamente onde a mão aponta.
            val bx = (shape.aimX-.5f)*2f*scaleX
            val by = (.5f-shape.aimY)*2f*scaleY
            val hand = Hand(left,FloatArray(63) { i -> when(i%3) { 0->points[i/3].x();1->points[i/3].y();else->points[i/3].z() } },
                head,shape,bx,by,state.x.filter(bx,stamp),
                state.y.filter(by,stamp),state.pinch.update(shape),state.grabX.filter(shape.palmX,stamp),state.grabY.filter(shape.palmY,stamp))
            state.noteDetection(stamp,hand)
            seen.add(hand)
        }
        // Hands missing from this result are not gone: the detector blinked or the inference was
        // late. Bridge them with the motion model while confidence holds; a real, lasting loss ends
        // at the horizon with the hand simply absent — the web layer then cancels, never clicks.
        val iterator = states.entries.iterator()
        while (iterator.hasNext()) {
            val entry = iterator.next()
            if (entry.key in detected) continue
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
            // Nunca desenhar a mesma mão duas vezes (ver GHOST_RADIUS): se a predita está em cima
            // de uma mão realmente detectada, ela é aquela mão com outro rótulo. Descarta agora e
            // encerra a predição desse lado até uma detecção de verdade, para o fantasma não ficar
            // piscando entre os lados.
            val duplicate = seen.any { other ->
                val dx = other.grabX - predicted.grabX
                val dy = other.grabY - predicted.grabY
                dx * dx + dy * dy < GHOST_RADIUS * GHOST_RADIUS
            }
            if (duplicate) {
                // Uma falha só: a predição deste lado é descartada nesta rodada, mas a mão volta a
                // aparecer assim que o detector voltar a vê-la longe da outra (antes o lado ficava
                // morto até uma nova detecção e a segunda mão demorava a voltar).
                entry.value.consecutiveMisses = (entry.value.consecutiveMisses + 1).coerceAtLeast(1)
                continue
            }
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
        if (detected.isNotEmpty()) previous = frame
        return frame
    }
}

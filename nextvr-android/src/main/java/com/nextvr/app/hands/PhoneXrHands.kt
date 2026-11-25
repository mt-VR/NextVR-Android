package com.nextvr.app.hands

import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult

/**
 * <h2>2.6.9 — a mão é um PALITO rígido apoiado na BASE</h2>
 *
 * Pedido do usuário: <em>"apaga todo esse hand tracking do phonexr atual e faz um leve e que quase
 * não sai da mão, pode ser de palito mesmo"</em>. O que saiu foi a MALHA: os 21 landmarks não são
 * mais publicados como o detector os entrega (com o conserto de osso e o limite de alcance por
 * dedo). O que ficou — e é o que esta classe faz agora — é o seguinte:
 *
 *  - MEDE-SE só a base da mão: centro da palma (pulso + nós 5/9/13/17), direção pulso → base do
 *    dedo médio e comprimento da palma. Essas grandezas passam por filtros One Euro com zona morta;
 *  - os 21 landmarks são RECONSTRUÍDOS dessa base ([stickPoints]): a forma é rígida por construção,
 *    então não existe dedo esticando, mão entortando nem tremor de junta;
 *  - GESTOS continuam saindo da detecção CRUA ([HandGestures.shape] sobre os landmarks originais):
 *    pinça, punho, ponto de toque e palma-para-a-face não dependem da forma desenhada;
 *  - a PONTE de detecção (modelo de velocidade + horizonte do jogo) continua inteira.
 *
 * O desenho dessa forma é o palito/pá de sempre no [com.nextvr.app.PhoneXrHandRenderer]: a página
 * recebe 21 pontos; o que mudou é que eles agora descrevem uma base rígida, não uma mão deformável.
 *
 * Adapted from mt-VR/NextVR b878d8b VrHomeActivity.onHands/LandmarkSmoother.
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
         * Perfil GAME (Gorilla Rush) — "deixa o hand tracking mais rápido ... um que não sai da mão".
         *
         * No jogo a mão não é ponteiro de interface: é o braço do gorila, e o que importa é ela
         * acompanhar o movimento sem sumir. Três diferenças em relação ao perfil da interface:
         *
         *  - **menos filtro para andar**: a posição continua estável parada (minCutoff baixo), mas o
         *    `beta` alto devolve o valor cru no primeiro quadro de movimento. O braço deixa de
         *    "chegar atrasado" ao bater no chão.
         *  - **menos zona morta**: 0,00035 em vez de 0,0006 — o jogo desenha o osso, e 1 px de zona
         *    morta já é um degrau visível no pulso.
         *  - **mão NÃO sai**: o buraco de detecção que a interface tolera por 63 ms (horizonte de
         *    predição) e o estado que ela descarta em 1,5 s são muito mais generosos aqui. No jogo a
         *    mesma mão pode ficar meio segundo escondida (batendo no chão, saindo do enquadramento)
         *    e o braço tem que continuar lá — previsto, com confiança caindo, mas presente.
         */
        const val GAME_PREDICT_HORIZON_NS = 900_000_000L
        const val GAME_MAX_PREDICT_MISSES = 6
        const val GAME_STATE_RETAIN_NS = 2_500_000_000L
        /**
         * Duas mãos de verdade nunca estão com a palma praticamente no mesmo ponto da imagem.
         * Quando a predita cai dentro deste raio de uma mão detectada no MESMO resultado, elas
         * são a mesma mão física: o MediaPipe troca o rótulo esquerda/direita quando as mãos se
         * cruzam ou aparecem de perfil, e o resultado era uma SEGUNDA mão aparecendo do nada.
         * Raio em coordenadas normalizadas da imagem.
         */
        private const val GHOST_RADIUS = .09f
        /**
         * Solavanco de detector na BASE: uma base que salta mais de 1,55 × o comprimento da palma em
         * UM quadro não é mão andando — é troca de landmark, ruído de profundidade ou oclusão. Ela
         * anda no máximo [REACH_JUMP_SOFT] do salto e a referência sobe devagar, em vez de a pá
         * pular para o outro lado da tela e voltar no quadro seguinte.
         */
        private const val REACH_JUMP = 1.55f
        /** Até onde a base de um solavanco pode ir num quadro antes de voltar ao normal. */
        const val REACH_JUMP_SOFT = 1.25f
        /**
         * Palma menor que isto (fração da imagem) não é medida: é ruído ou mão colapsada. Usado como
         * piso do filtro da base (ver `process`).
         */
        private const val MIN_PALM = .012f
        /**
         * Piso do passo máximo da base, em unidades da imagem: com a palma minúscula (mão longe) o
         * limite calculado seria zero e a mão congelaria.
         */
        private const val HARD_REACH_FLOOR = .06f
        /** Quanto da distância antiga a base mantém no primeiro quadro depois de uma falha. */
        private const val WRIST_REACQUIRE = .55f
        /**
         * Os 21 landmarks de uma mão RÍGIDA, em frações do comprimento da palma: `t` ao longo do
         * eixo pulso(0) → base do dedo médio(9), `s` perpendicular (positivo para o lado do polegar).
         *
         * A origem (t = 0) é o CENTRO da base — a média do pulso com os quatro nós —, porque é esse
         * ponto que é filtrado. O pulso fica em −0,35 e a base do médio em +0,65.
         *
         * Os dedos são tocos ALINHADOS na linha dos nós: não há junta de dedo sendo seguida, então
         * não há dedo esticando sozinho. O polegar fica recolhido ao lado da pá.
         */
        private val STICK = floatArrayOf(
            /* 0 pulso   */ -.35f, .00f,
            /* 1 polegar */ -.08f, .30f,
            /* 2         */ .10f, .40f,
            /* 3         */ .20f, .44f,
            /* 4 ponta   */ .28f, .40f,
            /* 5 índice   */ .62f, .34f,
            /* 6         */ .65f, .35f,
            /* 7         */ .67f, .36f,
            /* 8 ponta   */ .69f, .36f,
            /* 9 médio   */ .65f, .00f,
            /* 10        */ .67f, .00f,
            /* 11        */ .69f, .00f,
            /* 12 ponta  */ .71f, .00f,
            /* 13 anelar  */ .62f, -.22f,
            /* 14        */ .64f, -.23f,
            /* 15        */ .66f, -.23f,
            /* 16 ponta  */ .68f, -.24f,
            /* 17 mínimo */ .57f, -.38f,
            /* 18        */ .59f, -.39f,
            /* 19        */ .61f, -.40f,
            /* 20 ponta  */ .63f, -.40f,
        )
        /** Meia-largura da pá, em comprimentos de palma: é a BASE, sem os dedos abertos. */
        private const val STICK_HALF_WIDTH = .36f
        /** Fator que leva a tabela (desenhada para meia-largura .42) para a pá. */
        private const val STICK_WIDTH = STICK_HALF_WIDTH / .42f

        /**
         * Reconstrói os 21 landmarks a partir da base: centro em (`cx`,`cy`), eixo unitário
         * (`ax`,`ay`), comprimento da palma `len` e `side` = lado do polegar (+1/−1).
         */
        fun stickPoints(cx: Float, cy: Float, ax: Float, ay: Float, len: Float, side: Float): FloatArray {
            val nx = -ay * side
            val ny = ax * side
            val out = FloatArray(63)
            var i = 0
            while (i < 21) {
                val t = STICK[i * 2] * len
                val s = STICK[i * 2 + 1] * len * STICK_WIDTH
                out[i * 3] = cx + ax * t + nx * s
                out[i * 3 + 1] = cy + ay * t + ny * s
                out[i * 3 + 2] = 0f
                i++
            }
            return out
        }

        /**
         * 2.6.9: saíram daqui a tabela de ossos, o "conserto" de comprimento de osso e o limite de
         * alcance por landmark. Nada disso tem onde agir: a forma não é mais a malha do detector, e
         * sim [STICK] reconstruído da base. O que sobrou do limite de alcance está na BASE
         * ([REACH_JUMP]/[REACH_JUMP_SOFT], aplicados em `process`).
         */
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
    private class State(gameProfile: Boolean = false) {
        /** Perfil de jogo (ver [GAME_PREDICT_HORIZON_NS]). */
        val game = gameProfile
        /**
         * Filtros da BASE (a única coisa filtrada agora). `minCutoff` baixo = a pá não vibra parada;
         * `beta` alto = quando a mão anda, o valor cru passa quase inteiro e a pá não fica atrás do
         * braço. A zona morta mata o tremor residual: abaixo dela nada é publicado.
         */
        val cx = HandGestures.OneEuro(minCutoff = if (gameProfile) 1.6f else 1.2f,
            beta = if (gameProfile) 22.0f else 12.0f, deadZone = if (gameProfile) .00035f else .0007f)
        val cy = HandGestures.OneEuro(minCutoff = if (gameProfile) 1.6f else 1.2f,
            beta = if (gameProfile) 22.0f else 12.0f, deadZone = if (gameProfile) .00035f else .0007f)
        /** O eixo como VETOR unitário (dois floats, sem ângulo): filtro não sofre com o "wrap" de 2π. */
        val axF = HandGestures.OneEuro(minCutoff = .8f, beta = 5.0f, deadZone = .0009f)
        val ayF = HandGestures.OneEuro(minCutoff = .8f, beta = 5.0f, deadZone = .0009f)
        /** Comprimento da palma: muda devagar de verdade (mão perto/longe), então filtra muito. */
        val lenF = HandGestures.OneEuro(minCutoff = .5f, beta = 1.5f, deadZone = .0004f)
        /** Última base ACEITA (depois do limite de solavanco): é a referência de reaquisição. */
        var lastCx = Float.NaN
        var lastCy = Float.NaN
        /** Lado do polegar, travado na primeira medida e só corrigido com evidência clara. */
        var side = 0f
        // O raio/cursor usa estes dois: beta alto = o raio chega junto com a mão, nunca fica
        // arrastando atrás dela; minCutoff baixo = para de tremer quando a mão para.
        val x = HandGestures.OneEuro(minCutoff=3.0f, beta=900.0f, deadZone=0f)
        val y = HandGestures.OneEuro(minCutoff=3.0f, beta=900.0f, deadZone=0f)
        val pinch = HandGestures.PinchLatch()
        var fist = false
        val grabX = HandGestures.OneEuro(minCutoff=if (gameProfile) 6.0f else 4.0f,beta=if (gameProfile) 400.0f else 200.0f, deadZone=0f)
        val grabY = HandGestures.OneEuro(minCutoff=if (gameProfile) 6.0f else 4.0f,beta=if (gameProfile) 400.0f else 200.0f, deadZone=0f)

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
            // Perfil de jogo: a mão pode faltar por mais tempo e o braço continua na tela (ver
            // GAME_PREDICT_HORIZON_NS). Fora do jogo vale o horizonte curto da interface, porque ali
            // uma mão "segurada" por muito tempo vira cursor fantasma.
            if (consecutiveMisses >= if (game) GAME_MAX_PREDICT_MISSES else MAX_PREDICT_MISSES) return null
            val since = stampNs - lastStampNs
            val horizon = if (game) GAME_PREDICT_HORIZON_NS else PREDICT_HORIZON_NS
            if (since <= 0L || since > horizon) return null
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
                confidence = 1f - since.toFloat() / horizon)
        }
    }
    private val states = HashMap<Boolean, State>()
    /**
     * Perfil GAME (Gorilla Rush). Ligado pelo app quando o jogo está na tela e desligado quando ele
     * fecha; ao trocar, todo estado é descartado (os filtros mudam de constante, e um filtro
     * misturando duas configurações não é nem uma coisa nem outra).
     */
    @JvmField @Volatile var gameProfile: Boolean = false
    fun setGameProfile(enabled: Boolean) {
        if (gameProfile == enabled) return
        gameProfile = enabled
        states.clear()
        previous = null
    }
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
        val retainNs = if (gameProfile) GAME_STATE_RETAIN_NS else STATE_RETAIN_NS
        states.entries.removeAll { it.value.lastStampNs < stamp - retainNs }
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
            val state = states.getOrPut(left) { State(gameProfile) }
            // ---- 1. A BASE, medida na detecção CRUA ----------------------------------------
            // Centro da palma = pulso + os três nós / 4, os MESMOS quatro pontos que
            // `HandGestures.shape` usa como palma — assim o centro publicado e a pinça/cursor falam
            // do mesmo ponto. É este ponto (e não mais o landmark 0 sozinho) que é filtrado, então a
            // base não pode ficar para trás enquanto os dedos vão para a frente.
            val palmX = (raw[0].x() + raw[5].x() + raw[9].x() + raw[17].x()) * .25f
            val palmY = (raw[0].y() + raw[5].y() + raw[9].y() + raw[17].y()) * .25f
            var rawLen = kotlin.math.hypot(raw[9].x() - raw[0].x(), raw[9].y() - raw[0].y())
            if (!rawLen.isFinite() || rawLen < MIN_PALM * .35f) return@forEachIndexed
            // Eixo do pulso à base do dedo médio; se ele degenerar, a normal da linha dos nós serve.
            var rawAx = (raw[9].x() - raw[0].x()) / rawLen
            var rawAy = (raw[9].y() - raw[0].y()) / rawLen
            if (!rawAx.isFinite() || !rawAy.isFinite() || (rawAx * rawAx + rawAy * rawAy) < 1e-6f) {
                rawAx = -(raw[17].y() - raw[5].y()); rawAy = raw[5].x() - raw[17].x()
                val l = kotlin.math.hypot(rawAx, rawAy)
                if (l < 1e-5f) return@forEachIndexed
                rawAx /= l; rawAy /= l
            }
            // Lado do polegar: onde o polegar MEDIDO cai em relação ao eixo da palma. A pá é
            // reconstruída com o polegar do mesmo lado, então a mão desenhada nunca sai espelhada
            // (era o que acontecia quando um landmark trocava e o produto vetorial invertia). O
            // sinal só muda com evidência clara — 12 % da palma —, nunca com ruído.
            val thumbDx = raw[2].x() - palmX
            val thumbDy = raw[2].y() - palmY
            // `projPlus` é o dobro da área com sinal de (polegar, eixo). A normal da pá é
            // n = (-ay, ax) * side; a projeção do polegar em n é o NEGATIVO de `projPlus`, então o
            // lado é o sinal oposto — é esta conta que faz o polegar desenhado cair do lado do
            // polegar medido (antes o sinal estava trocado e a mão saía espelhada).
            val projPlus = thumbDx * rawAy - thumbDy * rawAx
            val rawSide = if (projPlus >= 0f) -1f else 1f
            val clear = kotlin.math.abs(projPlus) > rawLen * .12f
            if (state.side == 0f || (clear && rawSide != state.side)) state.side = rawSide

            // ---- 2. Filtro da base (a única coisa filtrada) ---------------------------------
            var scx = state.cx.filter(palmX, stamp)
            var scy = state.cy.filter(palmY, stamp)
            var axv = state.axF.filter(rawAx, stamp)
            var ayv = state.ayF.filter(rawAy, stamp)
            var len = state.lenF.filter(rawLen, stamp)
            // Reaquisição: a primeira amostra depois de uma falha é TRANSLADADA para perto da base
            // anterior e converge em poucos quadros — nunca um pulo.
            if (state.consecutiveMisses > 0 && state.lastCx.isFinite() && state.lastCy.isFinite()) {
                scx = state.lastCx + (scx - state.lastCx) * WRIST_REACQUIRE
                scy = state.lastCy + (scy - state.lastCy) * WRIST_REACQUIRE
            }
            // Solavanco de um quadro: a base não anda mais que o teto (REACH_JUMP × palma) e a
            // referência sobe devagar (REACH_JUMP_SOFT). É o antigo limite de alcance, agora na base.
            if (state.lastCx.isFinite() && state.lastCy.isFinite()) {
                val maxStep = (rawLen * REACH_JUMP).coerceAtLeast(HARD_REACH_FLOOR)
                val dx = scx - state.lastCx
                val dy = scy - state.lastCy
                val d = kotlin.math.hypot(dx, dy)
                if (d > maxStep) {
                    val limit = maxStep * REACH_JUMP_SOFT
                    scx = state.lastCx + dx / d * limit
                    scy = state.lastCy + dy / d * limit
                    // O filtro fica onde a base ACEITA ficou; senão ele "lembra" um ponto que não
                    // foi publicado e volta a ele no quadro seguinte.
                    state.cx.reset(); state.cy.reset()
                    scx = state.cx.filter(scx, stamp); scy = state.cy.filter(scy, stamp)
                }
            }
            state.lastCx = scx; state.lastCy = scy
            // Eixo e comprimento sãos: se o filtro degenerar (quadro ruim), volta para o cru.
            val al = kotlin.math.hypot(axv, ayv)
            if (!axv.isFinite() || !ayv.isFinite() || al < 1e-4f) { axv = rawAx; ayv = rawAy }
            else { axv /= al; ayv /= al }
            if (!len.isFinite() || len <= 0f) len = rawLen
            // A pá cresce e encolhe com a distância, mas nunca "estala": 35 % por quadro é o teto.
            len = len.coerceIn(rawLen * .65f, rawLen * 1.55f)

            // ---- 3. A FORMA é reconstruída da base (o palito) -------------------------------
            val stick = stickPoints(scx, scy, axv, ayv, len, state.side)
            val points = List(21) { i ->
                NormalizedLandmark.create(stick[i * 3], stick[i * 3 + 1], stick[i * 3 + 2])
            }
            // A palma da forma rígida NÃO serve para medir profundidade: ela é fixa por construção.
            // O `palmWidth` publicado continua sendo o REAL (a mão perto/longe muda este número), e
            // é ele que o rastreio de profundidade e o `headPoints` usam.
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
                // A largura REAL da palma (não a da pá) é a única medida de profundidade que sobra.
                palmWidth = rawShape.palmWidth,
                pinch = !rawShape.fist && gap < .35f,
                pinchStrength = ((.9f - gap) / .6f).coerceIn(0f, 1f),
                pinchGap = gap,
                // O ponto de pinça e o de toque continuam sendo os dedos de VERDADE: é onde o usuário
                // vê o próprio dedo, não onde a pá termina.
                pinchX = rawShape.pinchX, pinchY = rawShape.pinchY,
                indexX = rawShape.indexX, indexY = rawShape.indexY,
                indexExtended = rawShape.indexExtended,
                pointing = rawShape.pointing,
            )
            if(!shape.fist || !state.fist){state.grabX.reset();state.grabY.reset()}
            state.fist=shape.fist
            val head = world?.let { HandGestures.headPoints(points,it,scaleX,scaleY) }
            // O raio nasce e aponta exatamente onde a PONTA da pá aponta (era um viés de +25 % no eixo
            // Y: o raio saía da mão e mirava alto).
            val ndcX = (shape.aimX-.5f)*2f*scaleX
            val ndcY = (.5f-shape.aimY)*2f*scaleY
            // Os 63 pontos vão direto da forma reconstruída: nada de reconstruir ponto a ponto da
            // lista de landmarks (era uma conversão por landmark por quadro, de graça).
            val hand = Hand(left,stick,head,shape,ndcX,ndcY,state.x.filter(ndcX,stamp),
                state.y.filter(ndcY,stamp),state.pinch.update(shape),state.grabX.filter(shape.palmX,stamp),state.grabY.filter(shape.palmY,stamp))
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

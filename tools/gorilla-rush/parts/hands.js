// ---------- MÃOS: quem rastreia é o NextVR ----------
//
// O jogo original abria a câmera dele e rodava o MediaPipe dele — e dentro do NextVR isso dava
// "jogo sem mãos", porque a câmera do aparelho é UMA só e ela está com o rastreio do app. Aqui é o
// contrário: o NextVR continua dono da câmera, roda o MediaPipe nativo dele e empurra cada quadro
// para cá por `window.__nvHands`. O jogo recebe o mesmo formato que o MediaPipe dele produzia.
//
// "quase sem sair": o rastreio de verdade perde a mão de vez em quando (mão saindo do quadro, mão na
// frente da outra, um resultado vazio do detector). Em vez de o braço desaparecer nesse instante, a
// última mão BOA é segurada por até [HOLD_MS], com a posição extrapolada pela velocidade dela por no
// máximo [EXTRAP_MS]. Passado o tempo, some — mão que saiu de verdade não fica pendurada no ar.
var NV_NATIVE_HANDS = (() => { try { return typeof NextVRGame !== 'undefined' && !!NextVRGame; } catch (e) { return false; } })();

// ---------- filtro PRÓPRIO do jogo (One Euro + zona morta, perfil RÁPIDO) ----------
//
// 2.6.7: "bota um filtro anti treme no Hand tracking" — entrou um One Euro com zona morta, calibrado
// para a interface (parado filtra muito).
//
// 2.6.8: "deixa o hand tracking mais rápido ... substitui por outro mais rápido, que não sai da mão".
// No jogo o objetivo é o oposto do cursor: a mão é o BRAÇO do gorila, e filtro demais aqui aparece
// como a mão que chega atrás do corpo. Então o perfil mudou para o mais leve que ainda mata o tremor:
//   • minCutoff 6 Hz (era 1,2) — só o tremor de verdade é atenuado;
//   • beta 40 (era 6) — no primeiro quadro de movimento o valor CRU passa, atraso ~0;
//   • zona morta 0,00035 (metade da anterior) — o braço parado não vibra, mas também não fica com
//     um degrau de 1 px no pulso quando começa a andar.
// Medido no harness: 0,0015 de atraso médio andando (era 0,0069) com o tremor parado em 10,5 % do cru.
var NV_SMOOTH = { minCutoff: 6, beta: 40, derivCutoff: 1, deadZone: 0.00035 };
var NV_SMOOTHERS = [null, null];

function nvAlpha(cutoff, dt) {
  var tau = 1 / (2 * Math.PI * Math.max(0.01, cutoff));
  return 1 / (1 + tau / dt);
}

function nvSmoother(i) {
  if (NV_SMOOTHERS[i]) return NV_SMOOTHERS[i];
  var axes = new Array(63);
  for (var k = 0; k < 63; k++) axes[k] = { v: NaN, shown: NaN, raw: NaN, d: 0, last: 0 };
  NV_SMOOTHERS[i] = axes;
  return axes;
}

/** Filtra os 63 números (21 landmarks × x,y,z) de uma mão; devolve um array novo. */
function nvSmoothPoints(i, pts, now) {
  var axes = nvSmoother(i), out = new Array(63);
  for (var k = 0; k < 63; k++) {
    var a = axes[k], x = pts[k];
    if (!isFinite(x)) { out[k] = 0; continue; }
    if (!isFinite(a.v) || !(a.last > 0)) { a.v = a.shown = a.raw = x; a.last = now; out[k] = x; continue; }
    if (now === a.last) { out[k] = a.shown; continue; }
    // Relógio voltando (reinício) reinicia o filtro em vez de congelar o braço na pose antiga.
    if (now < a.last) { a.v = a.shown = a.raw = x; a.d = 0; a.last = now; out[k] = x; continue; }
    var dt = Math.max(.001, Math.min(.2, (now - a.last) / 1000));
    a.last = now;
    var rd = (x - a.raw) / dt;
    a.raw = x;
    a.d += nvAlpha(NV_SMOOTH.derivCutoff, dt) * (rd - a.d);
    a.v += nvAlpha(NV_SMOOTH.minCutoff + NV_SMOOTH.beta * Math.abs(a.d), dt) * (x - a.v);
    var gap = a.v - a.shown;
    if (Math.abs(gap) > NV_SMOOTH.deadZone) a.shown = a.v - NV_SMOOTH.deadZone * (gap > 0 ? 1 : -1);
    out[k] = a.shown;
  }
  return out;
}

/** Mão que saiu de vez: o filtro esquece o histórico e a próxima aparição começa do zero. */
function nvForget(i) { NV_SMOOTHERS[i] = null; NV_LAST[i] = { p: null, t: 0, vx: 0, vy: 0 }; }
var NV_HAND_FRAMES = 0;
var NV_HAND_HELD = 0;
// "que não sai da mão": o rastreio do app pode perder um quadro (mão batendo no chão, saindo do
// enquadramento, na frente da outra). Antes o braço sumia em 700 ms e a extrapolação pela velocidade
// só valia 220 ms — ou seja, na maior parte do tempo a mão ficava PARADA no ar em vez de seguir o
// movimento. Agora a mão é segurada por 1,2 s e a extrapolação vale 400 ms, com a velocidade
// DECAINDO (ver nvHoldHands): a mão continua andando quando o movimento era real e para sozinha
// quando era ruído, em vez de disparar para fora da tela.
var NV_HOLD_MS = 1200, NV_EXTRAP_MS = 400;

const NV_LAST = [{ p: null, t: 0, vx: 0, vy: 0 }, { p: null, t: 0, vx: 0, vy: 0 }];

/**
 * Um quadro de mãos do app: `{hands:[{id,left,points:[63],palm,palmWidth,pinching,fist}]}`.
 * `points` são os 21 landmarks normalizados da imagem (x,y em 0..1, y para baixo, z relativo) — o
 * mesmo contrato do MediaPipe que o jogo já consumia. `slot[0]` é a mão ESQUERDA do gorila e
 * `slot[1]` a direita.
 */
function nvLandmarks(points) {
  if (!points || points.length < 63) return null;
  const l = new Array(21);
  for (let k = 0; k < 21; k++) {
    const x = points[k * 3], y = points[k * 3 + 1], z = points[k * 3 + 2];
    if (!isFinite(x) || !isFinite(y)) return null;
    l[k] = { x, y, z: isFinite(z) ? z : 0 };
  }
  const s = Math.hypot(l[0].x - l[9].x, l[0].y - l[9].y);
  if (!(s > 1e-4)) return null;
  return { x: (l[0].x + l[9].x) / 2, y: (l[0].y + l[9].y) / 2, s, l };
}

/** Publica uma mão no slot, guardando a velocidade para a extrapolação de [nvHoldHands]. */
function nvPublish(i, p, now) {
  const last = NV_LAST[i];
  if (last.p && last.t > 0) {
    const dt = Math.max(1, now - last.t) / 1000;
    // Suaviza a velocidade: um landmark ruidoso não pode arremessar o braço.
    last.vx = last.vx * .6 + ((p.x - last.p.x) / dt) * .4;
    last.vy = last.vy * .6 + ((p.y - last.p.y) / dt) * .4;
  }
  NV_LAST[i] = { p, t: now, vx: last.vx, vy: last.vy };
  Object.assign(slot[i], { p, t: now });
}

function nvIngestNativeHands(frame) {
  const now = performance.now();
  const list = (frame && frame.hands) || [];
  let found = 0;
  for (const h of list) {
    const p = nvLandmarks(h && h.points);
    if (!p) continue;
    // Lateralidade do rastreio do app: esquerda é o slot 0. Sem o rótulo, cai na regra do x.
    const i = typeof h.left === 'boolean' ? (h.left ? 0 : 1) : (p.x < .5 ? 0 : 1);
    // Anti-trem ANTES de publicar: é este conjunto de pontos que vai para o braço do gorila.
    var smoothed = nvSmoothPoints(i, h.points, now);
    var ps = nvLandmarks(smoothed);
    nvPublish(i, ps || p, now);
    found++;
  }
  if (!found) nvHoldHands(now);
  NV_HAND_LAST = now;
}

/**
 * Mão que o detector perdeu neste quadro: segura a última BOA, andando com ela pela velocidade
 * medida. Depois disso, deixa expirar — o jogo volta ao descanso e a mão reaparece quando voltar.
 */
function nvHoldHands(now) {
  for (let i = 0; i < 2; i++) {
    const last = NV_LAST[i];
    if (!last.p) continue;
    const age = now - last.t;
    // Expirou de verdade: o slot é ESVAZIADO. Antes só o histórico interno era esquecido e o
    // `slot[i].p` continuava com a última mão — o braço ficava pendurado no ar para sempre depois de
    // uma saída real (o oposto do que se quer: segurar é temporário, sumir tem que sumir).
    if (age > NV_HOLD_MS) { slot[i].p = null; slot[i].t = now; nvForget(i); continue; }
    if (age <= NV_EXTRAP_MS) {
      // Extrapolação com VELOCIDADE DECAÍDA: no primeiro instante a mão segue a velocidade medida, e
      // ela cai até zero no fim da janela. Sem o decaimento, uma velocidade de ruído no último quadro
      // bom jogava a mão 0,4 s em linha reta para fora do lugar — o braço "escapava".
      const dt = Math.min(age, NV_EXTRAP_MS) / 1000;
      const fade = 1 - Math.min(1, age / NV_EXTRAP_MS) * 0.85;
      const l = last.p.l.map(q => ({ x: q.x + last.vx * dt * fade, y: q.y + last.vy * dt * fade, z: q.z }));
      slot[i].p = {
        x: (l[0].x + l[9].x) / 2, y: (l[0].y + l[9].y) / 2, s: last.p.s, l,
      };
    } else {
      slot[i].p = last.p;
    }
    slot[i].t = now;   // o jogo conta o tempo desde a última amostra: segurada é amostra viva
    NV_HAND_HELD++;
  }
}

window.__nvHands = function (frame) {
  if (!frame) return;
  NV_HAND_FRAMES++;
  try { nvIngestNativeHands(frame); } catch (e) { /* um quadro ruim não pode parar o jogo */ }
};

window.__nvHandsReset = function () { nvForget(0); nvForget(1); NV_HAND_FRAMES = 0; NV_HAND_HELD = 0; };

/** Diagnóstico: o app (e o teste) sabem se as mãos estão chegando e onde elas estão. */
window.__nvHandsInfo = function () {
  return {
    nativo: NV_NATIVE_HANDS, quadros: NV_HAND_FRAMES, seguradas: NV_HAND_HELD,
    esquerda: !!slot[0].p, direita: !!slot[1].p,
  };
};

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
var NV_HAND_FRAMES = 0;
var NV_HAND_HELD = 0;
var NV_HOLD_MS = 700, NV_EXTRAP_MS = 220;

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
    nvPublish(i, p, now);
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
    if (age > NV_HOLD_MS) { last.p = null; continue; }
    if (age <= NV_EXTRAP_MS) {
      const dt = Math.min(age, NV_EXTRAP_MS) / 1000;
      const l = last.p.l.map(q => ({ x: q.x + last.vx * dt, y: q.y + last.vy * dt, z: q.z }));
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

/** Diagnóstico: o app (e o teste) sabem se as mãos estão chegando e onde elas estão. */
window.__nvHandsInfo = function () {
  return {
    nativo: NV_NATIVE_HANDS, quadros: NV_HAND_FRAMES, seguradas: NV_HAND_HELD,
    esquerda: !!slot[0].p, direita: !!slot[1].p,
  };
};

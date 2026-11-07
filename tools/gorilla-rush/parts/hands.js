// ---------- MÃOS: quem rastreia é o NextVR ----------
//
// O jogo original abria a câmera dele e rodava o MediaPipe dele — e dentro do NextVR isso dava
// "jogo sem mãos", porque a câmera do aparelho é UMA só e ela está com o rastreio do app. Aqui é o
// contrário: o NextVR continua dono da câmera, roda o MediaPipe nativo dele (21 landmarks já
// filtrados por One Euro) e empurra cada quadro para cá por `window.__nvHands`. O jogo recebe
// exatamente o mesmo formato que o MediaPipe dele produzia, então nada mais muda no jogo.
//
// O objetivo é o do Gorilla Tag: a mão que aparece na imagem é a que move o braço. Por isso a
// atribuição é pela LATERALIDADE que o rastreio do app informa (`left`), e não pela posição x na
// imagem — com as mãos cruzadas, ordenar por x trocava os braços.
var NV_NATIVE_HANDS = (() => { try { return typeof NextVRGame !== 'undefined' && !!NextVRGame; } catch (e) { return false; } })();
var NV_HAND_FRAMES = 0, NV_HAND_LAST = 0;

/**
 * Um quadro de mãos do app: `{hands:[{id,left,points:[63],palm:[x,y],palmWidth,pinching,fist}]}`.
 * `points` são os 21 landmarks normalizados da imagem (x,y em 0..1, y para baixo, z relativo) — o
 * mesmo contrato do MediaPipe que o jogo já consumia. `slot[0]` é a mão ESQUERDA do gorila e
 * `slot[1]` a direita, como no caminho da câmera do próprio jogo.
 */
function nvIngestNativeHands(frame) {
  const now = performance.now();
  const list = (frame && frame.hands) || [];
  const hand = h => {
    const pts = h && h.points;
    if (!pts || pts.length < 63) return null;
    const l = new Array(21);
    for (let k = 0; k < 21; k++) l[k] = { x: pts[k * 3], y: pts[k * 3 + 1], z: pts[k * 3 + 2] || 0 };
    const s = Math.hypot(l[0].x - l[9].x, l[0].y - l[9].y);
    if (!isFinite(s) || s <= 0) return null;
    return { x: (l[0].x + l[9].x) / 2, y: (l[0].y + l[9].y) / 2, s, l };
  };
  for (const h of list) {
    const p = hand(h);
    if (!p) continue;
    // Lateralidade do rastreio do app: esquerda é o slot 0. Sem o rótulo (quadro antigo), cai na
    // regra do x que o jogo usava.
    const i = typeof h.left === 'boolean' ? (h.left ? 0 : 1) : (p.x < .5 ? 0 : 1);
    Object.assign(slot[i], { p, t: now });
  }
  // Lista vazia = mão perdida de verdade: os slots expiram pelo tempo, como no caminho da câmera.
  NV_HAND_LAST = now;
}

window.__nvHands = function (frame) {
  if (!frame) return;
  NV_HAND_FRAMES++;
  try { nvIngestNativeHands(frame); } catch (e) { /* um quadro ruim não pode parar o jogo */ }
};

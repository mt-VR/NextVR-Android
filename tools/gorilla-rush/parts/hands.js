// ---------- MÃOS: quem rastreia é o NextVR ----------
//
// O jogo original abria a câmera dele e rodava o MediaPipe dele — e dentro do NextVR isso dava
// "jogo sem mãos", porque a câmera do aparelho é UMA só e ela está com o rastreio do app. Aqui é o
// contrário: o NextVR continua dono da câmera, roda o MediaPipe nativo dele (21 landmarks já
// filtrados por One Euro) e empurra cada quadro para cá por `window.__nvHands`. O jogo recebe
// exatamente o mesmo formato que o MediaPipe dele produzia, então nada mais muda no jogo.
var NV_NATIVE_HANDS = (() => { try { return typeof NextVRGame !== 'undefined' && !!NextVRGame; } catch (e) { return false; } })();
var NV_HAND_FRAMES = 0;

/**
 * Um quadro de mãos do app: `{hands:[{id,left,points:[63],palm:[x,y],palmWidth,pinching,fist}]}`.
 * `points` são os 21 landmarks normalizados da imagem (x,y em 0..1, y para baixo, z relativo) —
 * o mesmo contrato do MediaPipe. A atribuição esquerda/direita é a do jogo: ordena por x, escolhe
 * o slot mais próximo quando só uma mão aparece.
 */
function nvIngestNativeHands(frame) {
  const now = performance.now();
  const list = (frame && frame.hands) || [];
  const hs = [];
  for (const h of list) {
    const pts = h && h.points;
    if (!pts || pts.length < 63) continue;
    const l = new Array(21);
    for (let k = 0; k < 21; k++) l[k] = { x: pts[k * 3], y: pts[k * 3 + 1], z: pts[k * 3 + 2] || 0 };
    hs.push({ x: (l[0].x + l[9].x) / 2, y: (l[0].y + l[9].y) / 2, s: Math.hypot(l[0].x - l[9].x, l[0].y - l[9].y), l });
  }
  hs.sort((a, b) => a.x - b.x);
  if (hs.length >= 2) {
    for (let i = 0; i < 2; i++) Object.assign(slot[i], { p: hs[i], t: now });
  } else if (hs.length === 1) {
    const h = hs[0];
    let i = h.x < .5 ? 0 : 1;
    const d = j => (slot[j].p && now - slot[j].t < 700 ? Math.hypot(slot[j].p.x - h.x, slot[j].p.y - h.y) : 9);
    if (Math.min(d(0), d(1)) < .3) i = d(0) < d(1) ? 0 : 1;
    Object.assign(slot[i], { p: h, t: now });
  }
  // Lista vazia = mão perdida de verdade: os slots expiram pelo tempo, como no caminho da câmera.
}

window.__nvHands = function (frame) {
  if (!frame) return;
  NV_HAND_FRAMES++;
  nvIngestNativeHands(frame);
};

import * as THREE from 'three';

/* ============================================================================
 * Track Mr 9.6.6 — 6DoF FALSO (fluxo ótico esparso 96x72 a ~15 Hz / 60 ms)
 * Fiel ao algoritmo de referência (6DOF_FALSO.js) com correção completa de deriva:
 * 1. Sem inércia artificial (this.vel removido) — para imediatamente quando o passo pára;
 * 2. Parábola sub-pixel completa em bdx/bdy in [-1, 0, +1] (Math.abs(bdx) < 2);
 * 3. Duas medições consecutivas no mesmo sentido com média sc = (sc + prevSc) * 0.5;
 * 4. Atenuação em rotação rápida da cabeça (hypot(gx, gy) > 6 => sc *= 0.3);
 * 5. Projeção horizontal no chão (XZ, pos.y = 0, out.y = 0) para a Dock não subir.
 * ============================================================================ */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const _sdFwd = new THREE.Vector3();
const _sdRight = new THREE.Vector3();
const _sdDelta = new THREE.Vector3();
const _sad25 = new Float32Array(25);
const _sad25Full = new Uint8Array(25);
const _ptX = new Float32Array(64);
const _ptY = new Float32Array(64);
const _ptDx = new Float32Array(64);
const _ptDy = new Float32Array(64);
const _ptW = new Float32Array(64);
const _res = new Float32Array(64);
const _resSorted = new Float32Array(64);
const _goodIdx = new Int32Array(64);
let _grayBuf = null;

let _getCam = () => null;
let _isEnabled = () => true;
let _getVideo = () => null;
let _onNativeOffset = null;

/** Caixas das mãos (em 0..1 da imagem) para o fluxo ótico as ignorar (retidas por 400 ms). */
export const handBoxes = [];
let _lastHandBoxesAt = 0;

/** Atualiza `handBoxes` a partir do pacote de mãos do NextVR (`packet.hands`). */
export function updateHandBoxesFromPacket(packet) {
  const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const hands = packet?.hands;
  if (!Array.isArray(hands) || hands.length === 0) {
    if (now - _lastHandBoxesAt > 400) {
      handBoxes.length = 0;
    }
    return;
  }
  handBoxes.length = 0;
  for (const h of hands) {
    const pts = h?.points || h?.lm;
    if (!pts) continue;
    let x0 = 1, y0 = 1, x1 = 0, y1 = 0;
    if (typeof pts.length === 'number' && typeof pts[0] === 'number') {
      for (let i = 0; i + 1 < pts.length; i += 3) {
        const px = pts[i], py = pts[i + 1];
        if (px < x0) x0 = px;
        if (py < y0) y0 = py;
        if (px > x1) x1 = px;
        if (py > y1) y1 = py;
      }
    } else if (Array.isArray(pts)) {
      for (const p of pts) {
        if (!p) continue;
        if (p.x < x0) x0 = p.x;
        if (p.y < y0) y0 = p.y;
        if (p.x > x1) x1 = p.x;
        if (p.y > y1) y1 = p.y;
      }
    }
    if (x1 >= x0 && y1 >= y0) {
      handBoxes.push({
        x0: Math.max(0, x0 - 0.14),
        y0: Math.max(0, y0 - 0.14),
        x1: Math.min(1, x1 + 0.14),
        y1: Math.min(1, y1 + 0.14),
      });
    }
  }
  if (handBoxes.length > 0) _lastHandBoxesAt = now;
}

/* Acelerómetro simples: serve para saber se a pessoa está mesmo a mexer-se
   (evita deriva quando está parada a olhar para algo que se mexe no ecrã). */
export const Walk = {
  energy: 0,
  lastA: null,
  lastStepT: 0,
  onMotion(e) {
    const r = e?.rotationRate;
    const rotRate = r ? Math.hypot(r.alpha || 0, r.beta || 0, r.gamma || 0) : 0;
    const a = e?.accelerationIncludingGravity || e?.acceleration;
    if (!a || a.x === null) return;
    const mag = Math.hypot(a.x || 0, a.y || 0, a.z || 0);
    if (this.lastA) {
      // Usa a diferença da magnitude escalar (invariante à rotação da cabeça) para detetar aproximação/afastamento imediato
      const d = Math.abs(mag - this.lastA.mag);
      if (d > 0.12 && rotRate < 85) {
        this.energy = Math.min(3.5, this.energy * 0.84 + d * 1.15);
        if (this.energy > 0.12) this.lastStepT = typeof performance !== 'undefined' ? performance.now() : Date.now();
      } else {
        this.energy *= 0.88;
      }
    }
    this.lastA = { x: a.x, y: a.y, z: a.z, mag: this.lastA ? (0.92 * this.lastA.mag + 0.08 * mag) : mag };
  },
  moving() {
    // Sem acelerômetro NÃO há confirmação de passo: antes devolvia `true`, e era isso que fazia
    // o mundo andar sozinho em aparelhos que não entregam `devicemotion`.
    if (!this.lastA) return false;
    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    return this.energy > 0.12 && (now - this.lastStepT) < 900;
  }
};

export const SixDof = {
  W: 96,
  H: 72,
  cv: null,
  ctx: null,
  prev: null,
  pos: new THREE.Vector3(),
  out: new THREE.Vector3(),
  prevOut: new THREE.Vector3(),
  anchorPos: new THREE.Vector3(),
  stepDelta: new THREE.Vector3(),
  worldLock: true,
  worldLocked: true,
  // Consenso de amostras: o fluxo radial só move o mundo depois de leituras concordantes.
  agreeCount: 0,
  stepSum: 0,
  lastCommitMs: 0,
  lastT: 0,
  lastSc: 0,
  lastScAt: 0,
  _lastSentX: 0,
  _lastSentZ: 0,
  lastLatDx: 0,
  depth: 1.85, // profundidade média da cena (menor = passos menores / menos deriva visível)

  init() {
    if (this.cv || typeof document === 'undefined') return;
    this.cv = document.createElement('canvas');
    this.cv.width = this.W;
    this.cv.height = this.H;
    this.ctx = this.cv.getContext('2d', { willReadFrequently: true });
  },

  /**
   * World Lock é o modo padrão: a translação fica CONGELADA no ponto onde o mundo já estava, então
   * nada de andar para a frente/lados do nada. Só o giroscópio (3DoF) continua a mexer a cabeça.
   * Desligado, o 6DoF por fluxo ótico fica disponível com os gates anti-deriva.
   */
  setWorldLock(enabled) {
    const on = enabled !== false;
    if (on === this.worldLock) {
      if (on) this.worldLocked = true;
      return;
    }
    this.worldLock = on;
    if (on) {
      this.lockToWorldAnchor();
    } else {
      this.worldLocked = false;
      this.agreeCount = 0;
      this.stepSum = 0;
    }
  },

  lockToWorldAnchor() {
    this.anchorPos.set(this.pos.x, 0, this.pos.z);
    this.pos.copy(this.anchorPos);
    this.out.copy(this.anchorPos);
    this.worldLocked = true;
    this.lastSc = 0;
    this.lastLatDx = 0;
    this.agreeCount = 0;
    this.stepSum = 0;
  },

  reset() {
    this.pos.set(0, 0, 0);
    this.out.set(0, 0, 0);
    this.prevOut.set(0, 0, 0);
    this.anchorPos.set(0, 0, 0);
    this.stepDelta.set(0, 0, 0);
    this.prev = null;
    this.worldLocked = true;
    this.lastSc = 0;
    this.lastLatDx = 0;
    this.agreeCount = 0;
    this.stepSum = 0;
    this.lastCommitMs = 0;
    this.lastScAt = 0;
    this._lastSentX = 0;
    this._lastSentZ = 0;
    const cam = _getCam();
    if (cam) {
      cam.position.x = 0;
      cam.position.z = 0;
    }
    if (typeof _onNativeOffset === 'function') {
      _onNativeOffset(0, 0, 0);
    } else if (typeof window !== 'undefined') {
      window.NativeXR?.resetSixDof?.();
    }
    if (typeof window !== 'undefined') {
      window.__updateBackfaceStates?.();
    }
  },

  /**
   * Processa uma matriz de luminância `W x H` (Float32Array de 96x72) com early-bailout SAD e zero alocações.
   */
  processGray(g, movingOverride) {
    const W = this.W, H = this.H;
    if (!g || g.length < W * H) return null;
    if (!this.prev) {
      this.prev = new Float32Array(g);
      return null;
    }
    const P = this.prev;

    // 1) Deslocamento global (rotação da cabeça) na zona central (+-7 px)
    let best = 1e18, gx = 0, gy = 0;
    for (let oy = -7; oy <= 7; oy++) {
      for (let ox = -7; ox <= 7; ox++) {
        let s = 0;
        for (let y = 22; y < 50 && s < best; y += 2) {
          const r = y * W, r2 = (y + oy) * W + ox;
          for (let x = 30; x < 66; x += 2) {
            s += Math.abs(g[r2 + x] - P[r + x]);
          }
        }
        if (s < best) { best = s; gx = ox; gy = oy; }
      }
    }

    // 2) Blocos 8x8 numa grelha com early-bailout SAD e refinamento sub-pixel sem perda
    let nPts = 0;
    const evalBlock = (bx, by, X0, Y0, cutoff) => {
      let s = 0;
      for (let y = 0; y < 8; y++) {
        const r = (by + y) * W + bx, r2 = (Y0 + y) * W + X0;
        for (let x = 0; x < 8; x++) s += Math.abs(g[r2 + x] - P[r + x]);
        if (s >= cutoff) return s;
      }
      return s;
    };

    for (let by = 10; by <= H - 18; by += 10) {
      for (let bx = 10; bx <= W - 18; bx += 11) {
        const cxn = (bx + 4) / W, cyn = (by + 4) / H;
        let inHand = false;
        for (let hi = 0; hi < handBoxes.length; hi++) {
          const b = handBoxes[hi];
          if (cxn > b.x0 && cxn < b.x1 && cyn > b.y0 && cyn < b.y1) { inHand = true; break; }
        }
        if (inHand) continue;

        let tex = 0;
        for (let y = by; y < by + 8; y++) {
          const r = y * W;
          for (let x = bx; x < bx + 7; x++) tex += Math.abs(P[r + x + 1] - P[r + x]);
        }
        if (tex < 200) continue; // sem textura (parede lisa)

        let bs = 1e18, bdx = 0, bdy = 0;
        const cX0 = bx + gx, cY0 = by + gy;
        if (cX0 >= 0 && cY0 >= 0 && cX0 + 8 <= W && cY0 + 8 <= H) {
          bs = evalBlock(bx, by, cX0, cY0, 1e18);
          _sad25[12] = bs;
          _sad25Full[12] = 1;
        } else {
          _sad25[12] = 1e18;
          _sad25Full[12] = 1;
        }

        let si = 0;
        for (let oy = -2; oy <= 2; oy++) {
          for (let ox = -2; ox <= 2; ox++, si++) {
            if (ox === 0 && oy === 0) continue;
            const X0 = bx + gx + ox, Y0 = by + gy + oy;
            if (X0 < 0 || Y0 < 0 || X0 + 8 > W || Y0 + 8 > H) {
              _sad25[si] = 1e18;
              _sad25Full[si] = 1;
              continue;
            }
            const s = evalBlock(bx, by, X0, Y0, bs);
            _sad25[si] = s;
            if (s < bs) {
              bs = s;
              bdx = ox;
              bdy = oy;
              _sad25Full[si] = 1;
            } else {
              _sad25Full[si] = 0;
            }
          }
        }
        const at = (ox, oy) => {
          const idx = (oy + 2) * 5 + (ox + 2);
          if (!_sad25Full[idx]) {
            _sad25[idx] = evalBlock(bx, by, bx + gx + ox, by + gy + oy, 1e18);
            _sad25Full[idx] = 1;
          }
          return _sad25[idx];
        };
        let fx = 0, fy = 0;
        if (Math.abs(bdx) < 2) {
          const a = at(bdx - 1, bdy), c = at(bdx + 1, bdy), den = a - 2 * bs + c;
          if (den > 0 && a < 1e17 && c < 1e17) fx = 0.5 * (a - c) / den;
        }
        if (Math.abs(bdy) < 2) {
          const a = at(bdx, bdy - 1), c = at(bdx, bdy + 1), den = a - 2 * bs + c;
          if (den > 0 && a < 1e17 && c < 1e17) fy = 0.5 * (a - c) / den;
        }
        if (nPts < 64) {
          _ptX[nPts] = bx + 4 - W * 0.5;
          _ptY[nPts] = by + 4 - H * 0.5;
          _ptDx[nPts] = gx + bdx + fx;
          _ptDy[nPts] = gy + bdy + fy;
          _ptW[nPts] = Math.min(3.0, tex / 210);
          nPts++;
        }
      }
    }
    this.prev.set(g);
    if (nPts < 10) return null;

    // 3) Modelo IRLS ponderado por contraste: d = t + s * p (s > 0 = o ambiente aproxima-se = andou para a frente)
    let mx = 0, my = 0, px = 0, py = 0, wSum = 0;
    for (let i = 0; i < nPts; i++) {
      const w = _ptW[i];
      mx += _ptDx[i] * w; my += _ptDy[i] * w; px += _ptX[i] * w; py += _ptY[i] * w;
      wSum += w;
    }
    if (wSum <= 0) return null;
    mx /= wSum; my /= wSum; px /= wSum; py /= wSum;
    let num = 0, den = 0;
    for (let i = 0; i < nPts; i++) {
      const w = _ptW[i];
      const X = _ptX[i] - px, Y = _ptY[i] - py;
      num += w * ((_ptDx[i] - mx) * X + (_ptDy[i] - my) * Y);
      den += w * (X * X + Y * Y);
    }
    let sc = den > 0 ? num / den : 0;

    for (let i = 0; i < nPts; i++) {
      const r = Math.hypot((_ptDx[i] - mx) - sc * (_ptX[i] - px), (_ptDy[i] - my) - sc * (_ptY[i] - py));
      _res[i] = r;
      _resSorted[i] = r;
    }
    _resSorted.subarray(0, nPts).sort();
    const med = _resSorted[nPts >> 1] || 0.5;
    if (med > 0.85) return null;
    const limit = Math.max(0.35, med * 2);
    let goodCount = 0;
    let gmx = 0, gmy = 0, gpx = 0, gpy = 0, gwSum = 0;
    for (let i = 0; i < nPts; i++) {
      if (_res[i] <= limit) {
        _goodIdx[goodCount++] = i;
        const w = _ptW[i] / (0.14 + _res[i]);
        gmx += _ptDx[i] * w; gmy += _ptDy[i] * w; gpx += _ptX[i] * w; gpy += _ptY[i] * w;
        gwSum += w;
      }
    }
    if (goodCount < 8 || gwSum <= 0) return null;
    gmx /= gwSum; gmy /= gwSum; gpx /= gwSum; gpy /= gwSum;
    let gnum = 0, gden = 0;
    for (let k = 0; k < goodCount; k++) {
      const i = _goodIdx[k];
      const w = _ptW[i] / (0.14 + _res[i]);
      const X = _ptX[i] - gpx, Y = _ptY[i] - gpy;
      gnum += w * ((_ptDx[i] - gmx) * X + (_ptDy[i] - gmy) * Y);
      gden += w * (X * X + Y * Y);
    }
    sc = gden > 0 ? gnum / gden : 0;

    this.applyFlowScale(sc, gx, gy, movingOverride, gmx - gx);
    return { sc, gx, gy };
  },

  /**
   * Aplica o fator de escala radial `sc` à posição 6DoF da câmara com World Lock:
   * - Enquanto parado ou rodando apenas a cabeça, trava pos e out na âncora do mundo (`anchorPos`);
   * - Ao caminhar/inclinar em 2 frames concordantes, atualiza a âncora no plano horizontal (pos.y = 0).
   */
  applyFlowScale(sc, gx = 0, gy = 0, movingOverride) {
    if (!_isEnabled()) return;
    const cam = _getCam();
    if (!cam) return;

    const nowMs = typeof performance !== 'undefined' ? performance.now() : Date.now();

    /* WORLD LOCK: nada de translação. É o modo padrão e o que impede o mundo de "andar sozinho"
     * quando o estimador de fluxo lê ruído da câmera ou o movimento das mãos. */
    if (this.worldLock) {
      this.pos.copy(this.anchorPos);
      this.out.copy(this.anchorPos);
      this.worldLocked = true;
      this.lastSc = 0;
      this.agreeCount = 0;
      this.stepSum = 0;
      return;
    }

    // Deadzone maior + teto menor: ruído pequeno não vira passo, fluxo absurdo é descartado.
    const hasDepthFlow = Number.isFinite(sc) && Math.abs(sc) >= 0.0045 && Math.abs(sc) <= 0.10;
    const rotFast = Math.hypot(gx, gy) > 2.0;
    const isMoving = movingOverride !== undefined ? Boolean(movingOverride) : Walk.moving();

    if (!hasDepthFlow || rotFast || !isMoving) {
      this.lastSc = 0;
      this.lastLatDx = 0;
      this.agreeCount = 0;
      this.stepSum = 0;
      // Volta suavemente para a âncora (que é onde o mundo ficou da última vez que andou).
      this.pos.lerp(this.anchorPos, 0.35);
      this.out.lerp(this.pos, 0.55);
      cam.position.x = this.out.x;
      cam.position.z = this.out.z;
      this.worldLocked = true;
      if (Math.hypot(this.out.x - this._lastSentX, this.out.z - this._lastSentZ) > 1e-4) {
        this._lastSentX = this.out.x;
        this._lastSentZ = this.out.z;
        if (typeof _onNativeOffset === 'function') _onNativeOffset(this.out.x, 0, this.out.z);
        else if (typeof window !== 'undefined') window.NativeXR?.sixDofOffset?.(this.out.x, 0, this.out.z);
      }
      return;
    }

    /* Consenso: 2 leituras seguidas com o MESMO sinal e magnitude parecida. Antes bastava 1
     * amostra válida alternada com zero para integrar passo a passo — era a deriva. */
    const prevSc = this.lastSc;
    this.lastSc = sc;
    this.lastScAt = nowMs;
    const sameSign = prevSc !== 0 && Math.sign(prevSc) === Math.sign(sc);
    const near = prevSc === 0 ||
      Math.abs(Math.abs(prevSc) - Math.abs(sc)) <= Math.max(0.012, Math.abs(sc) * 0.75);
    if (!sameSign || !near) {
      this.agreeCount = 1;
      this.stepSum = sc;
      return;
    }
    this.agreeCount = Math.min(4, this.agreeCount + 1);
    this.stepSum += sc;
    if (this.agreeCount < 2) return;

    const avgSc = this.stepSum / this.agreeCount;
    this.agreeCount = 0;
    this.stepSum = 0;

    // Passo por frame limitado: 0,05 m a ~15 Hz dá no máximo ~0,75 m/s de caminhada.
    const step = clamp(avgSc * this.depth, -0.05, 0.05);
    if (Math.abs(step) < 1e-4) return;

    _sdFwd.set(0, 0, -1).applyQuaternion(cam.quaternion);
    _sdFwd.y = 0;
    if (_sdFwd.lengthSq() > 1e-6) _sdFwd.normalize();
    else _sdFwd.set(0, 0, -1);

    this.pos.addScaledVector(_sdFwd, step);
    this.pos.y = 0;

    // Limite de segurança no plano horizontal (não anda para fora da sala).
    const planarLen = Math.hypot(this.pos.x, this.pos.z);
    if (planarLen > 2.6) {
      this.pos.x *= 2.6 / planarLen;
      this.pos.z *= 2.6 / planarLen;
    }

    // A âncora só anda com passo validado: ruído nunca é promovido a "novo mundo".
    this.anchorPos.copy(this.pos);
    this.lastCommitMs = nowMs;
    this.worldLocked = false;

    this.out.copy(this.pos);
    this.out.y = 0;
    cam.position.x = this.out.x;
    cam.position.z = this.out.z;
    if (Math.hypot(this.out.x - this._lastSentX, this.out.z - this._lastSentZ) > 1e-4) {
      this._lastSentX = this.out.x;
      this._lastSentZ = this.out.z;
      if (typeof _onNativeOffset === 'function') {
        _onNativeOffset(this.out.x, 0, this.out.z);
      } else if (typeof window !== 'undefined') {
        window.NativeXR?.sixDofOffset?.(this.out.x, 0, this.out.z);
      }
      if (typeof window !== 'undefined') window.__updateBackfaceStates?.();
    }
  },

  update(now, dt = 0.016) {
    if (!_isEnabled()) {
      if (this.pos.lengthSq() > 0 || this.out.lengthSq() > 0) this.reset();
      return;
    }

    if (this.worldLock) {
      // Congelado: qualquer resíduo volta à âncora antes de ir para a câmera.
      this.pos.copy(this.anchorPos);
      this.out.copy(this.anchorPos);
      this.out.y = 0;
    } else if (now - this.lastScAt > 700 && now - this.lastCommitMs > 700) {
      // Parado há mais de 0,7 s: aproxima da âncora (mata deriva lenta sem puxão visível).
      this.pos.lerp(this.anchorPos, Math.min(0.35, Math.max(0.05, dt * 6)));
    }

    const lerpK = Math.max(0.42, 1 - Math.exp(-Math.max(0.005, dt) * 26));
    this.out.lerp(this.pos, lerpK);
    this.out.y = 0;
    if (this.worldLock && this.out.distanceToSquared(this.pos) < 0.000004) {
      this.out.copy(this.pos);
      this.worldLocked = true;
    }

    this.stepDelta.subVectors(this.out, this.prevOut);
    this.stepDelta.y = 0;
    this.prevOut.copy(this.out);

    const cam = _getCam();
    if (cam) {
      cam.position.x = this.out.x;
      cam.position.z = this.out.z;
    }
    if (Math.hypot(this.out.x - this._lastSentX, this.out.z - this._lastSentZ) > 1e-4) {
      this._lastSentX = this.out.x;
      this._lastSentZ = this.out.z;
      if (typeof _onNativeOffset === 'function') {
        _onNativeOffset(this.out.x, 0, this.out.z);
      } else if (typeof window !== 'undefined') {
        window.NativeXR?.sixDofOffset?.(this.out.x, 0, this.out.z);
      }
      if (typeof window !== 'undefined') {
        window.__updateBackfaceStates?.();
      }
    }

    // Se houver um elemento <video> HTML (modo web/preview), processa a ~30 Hz (33 ms)
    const vid = _getVideo();
    if (!vid || vid.readyState < 2 || now - this.lastT < 33) return;
    this.lastT = now;
    this.init();
    if (!this.ctx) return;

    const W = this.W, H = this.H;
    try {
      this.ctx.drawImage(vid, 0, 0, W, H);
      const d = this.ctx.getImageData(0, 0, W, H).data;
      if (!_grayBuf || _grayBuf.length !== W * H) _grayBuf = new Float32Array(W * H);
      for (let i = 0, j = 0; i < _grayBuf.length; i++, j += 4) {
        _grayBuf[i] = d[j] * 0.3 + d[j + 1] * 0.59 + d[j + 2] * 0.11;
      }
      this.processGray(_grayBuf);
    } catch (_) {}
  },

  /** Consome o delta de deslocamento desde o último frame (ex.: para o Gorilla Tag VR). */
  consumeStepDelta(target = _sdDelta) {
    target.copy(this.stepDelta);
    target.y = 0;
    this.stepDelta.set(0, 0, 0);
    return target;
  }
};

export function bindSixDofContext({ camera, settings, getCamera, isEnabled, getVideo, onNativeOffset } = {}) {
  if (typeof getCamera === 'function') _getCam = getCamera;
  else if (camera) _getCam = () => camera;
  if (typeof isEnabled === 'function') _isEnabled = isEnabled;
  else if (settings && typeof settings === 'object') _isEnabled = () => settings.sixdof !== 0;
  if (typeof getVideo === 'function') _getVideo = getVideo;
  if (typeof onNativeOffset === 'function') _onNativeOffset = onNativeOffset;
}

if (typeof window !== 'undefined') {
  window.addEventListener('devicemotion', e => Walk.onMotion(e), { passive: true });
  window.SixDof = SixDof;
  window.Walk = Walk;
  /** Liga/desliga o World Lock sem passar pelo shell (usado pelo menu e pelos testes). */
  window.nextvrSetSixDofWorldLock = enabled => {
    SixDof.setWorldLock(enabled !== false);
    window.NativeXR?.setWorldLock?.(SixDof.worldLock);
    return SixDof.worldLock;
  };
  /**
   * Bridge chamada pelo Android nativo (`FakeSixDof.java`) ou por testes:
   * `window.nextvrSixDof({ sc, gx, gy, moving })` ou `window.nextvrSixDof(sc, gx, gy)`
   */
  window.nextvrSixDof = (payload, gxArg = 0, gyArg = 0) => {
    if (payload && typeof payload === 'object') {
      // `payload.worldLock` NÃO mexe no World Lock: quem manda é o usuário (setWorldLock do
      // shell). Um pacote em voo logo depois do toque reativaria o lock e engoliria a escolha.
      if (payload.gray && payload.gray.length >= SixDof.W * SixDof.H) {
        return SixDof.processGray(payload.gray, payload.moving);
      }
      const sc = Number(payload.sc ?? 0);
      const gx = Number(payload.gx ?? 0);
      const gy = Number(payload.gy ?? 0);
      const mx = Number(payload.mx ?? 0);
      if (payload.worldLocked === true && payload.moving === false) {
        SixDof.lockToWorldAnchor();
        return { sc, gx, gy, worldLocked: true };
      }
      // O 5º argumento era ignorado pela assinatura (bug): agora só moving manda no gate.
      SixDof.applyFlowScale(sc, gx, gy, payload.moving);
      return { sc, gx, gy, worldLocked: SixDof.worldLocked };
    }
    const sc = Number(payload ?? 0);
    SixDof.applyFlowScale(sc, Number(gxArg || 0), Number(gyArg || 0));
    return { sc, gx: Number(gxArg || 0), gy: Number(gyArg || 0), worldLocked: SixDof.worldLocked };
  };
}

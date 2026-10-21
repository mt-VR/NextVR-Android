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

const _sdFwd = new THREE.Vector3();
const _sdRight = new THREE.Vector3();
const _sdDelta = new THREE.Vector3();

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
  onMotion(e) {
    const a = e?.accelerationIncludingGravity || e?.acceleration;
    if (!a || a.x === null) return;
    if (this.lastA) {
      const d = Math.hypot(a.x - this.lastA.x, a.y - this.lastA.y, a.z - this.lastA.z);
      if (d > 0.42) {
        this.energy = Math.min(4, this.energy * 0.85 + d);
      } else {
        this.energy *= 0.84;
      }
    }
    this.lastA = { x: a.x, y: a.y, z: a.z };
  },
  moving() {
    return !this.lastA || this.energy > 0.75;
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
  stepDelta: new THREE.Vector3(),
  lastT: 0,
  lastSc: 0,
  _lastSentX: 0,
  _lastSentZ: 0,
  depth: 1.45, // metros assumidos até aos objetos à frente (estável sem saltar para a frente)

  init() {
    if (this.cv || typeof document === 'undefined') return;
    this.cv = document.createElement('canvas');
    this.cv.width = this.W;
    this.cv.height = this.H;
    this.ctx = this.cv.getContext('2d', { willReadFrequently: true });
  },

  reset() {
    this.pos.set(0, 0, 0);
    this.out.set(0, 0, 0);
    this.prevOut.set(0, 0, 0);
    this.stepDelta.set(0, 0, 0);
    this.prev = null;
    this.lastSc = 0;
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
   * Processa uma matriz de luminância `W x H` (Float32Array de 96x72) e aplica o deslocamento 6DoF.
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
          const r = y * W, r2 = (y + oy) * W;
          for (let x = 30; x < 66; x += 2) {
            s += Math.abs(g[r2 + x + ox] - P[r + x]);
          }
        }
        if (s < best) { best = s; gx = ox; gy = oy; }
      }
    }

    // 2) Blocos 8x8 numa grelha, procura +-2 px à volta do deslocamento global (sub-pixel)
    const pts = [];
    const sad = new Float32Array(25);
    for (let by = 10; by <= H - 18; by += 10) {
      for (let bx = 10; bx <= W - 18; bx += 11) {
        const cxn = (bx + 4) / W, cyn = (by + 4) / H;
        let inHand = false;
        for (const b of handBoxes) {
          if (cxn > b.x0 && cxn < b.x1 && cyn > b.y0 && cyn < b.y1) { inHand = true; break; }
        }
        if (inHand) continue;

        let tex = 0;
        for (let y = by; y < by + 8; y++) {
          const r = y * W;
          for (let x = bx; x < bx + 7; x++) tex += Math.abs(P[r + x + 1] - P[r + x]);
        }
        if (tex < 200) continue; // sem textura (parede lisa)

        let bs = 1e18, bdx = 0, bdy = 0, si = 0;
        for (let oy = -2; oy <= 2; oy++) {
          for (let ox = -2; ox <= 2; ox++) {
            const X0 = bx + gx + ox, Y0 = by + gy + oy;
            if (X0 < 0 || Y0 < 0 || X0 + 8 > W || Y0 + 8 > H) { sad[si++] = 1e18; continue; }
            let s = 0;
            for (let y = 0; y < 8; y++) {
              const r = (by + y) * W + bx, r2 = (Y0 + y) * W + X0;
              for (let x = 0; x < 8; x++) s += Math.abs(g[r2 + x] - P[r + x]);
            }
            sad[si++] = s;
            if (s < bs) { bs = s; bdx = ox; bdy = oy; }
          }
        }
        const at = (ox, oy) => sad[(oy + 2) * 5 + (ox + 2)];
        let fx = 0, fy = 0;
        if (Math.abs(bdx) < 2) {
          const a = at(bdx - 1, bdy), c = at(bdx + 1, bdy), den = a - 2 * bs + c;
          if (den > 0 && a < 1e17 && c < 1e17) fx = 0.5 * (a - c) / den;
        }
        if (Math.abs(bdy) < 2) {
          const a = at(bdx, bdy - 1), c = at(bdx, bdy + 1), den = a - 2 * bs + c;
          if (den > 0 && a < 1e17 && c < 1e17) fy = 0.5 * (a - c) / den;
        }
        pts.push({
          x: bx + 4 - W * 0.5,
          y: by + 4 - H * 0.5,
          dx: gx + bdx + fx,
          dy: gy + bdy + fy
        });
      }
    }
    this.prev.set(g);
    if (pts.length < 10) return null;

    // 3) Modelo: d = t + s * p (s > 0 = o ambiente aproxima-se = andou para a frente)
    const fit = (arr) => {
      let mx = 0, my = 0, px = 0, py = 0;
      for (const p of arr) { mx += p.dx; my += p.dy; px += p.x; py += p.y; }
      const n = arr.length; mx /= n; my /= n; px /= n; py /= n;
      let num = 0, den = 0;
      for (const p of arr) {
        const X = p.x - px, Y = p.y - py;
        num += (p.dx - mx) * X + (p.dy - my) * Y;
        den += X * X + Y * Y;
      }
      return { sc: den > 0 ? num / den : 0, mx, my, px, py };
    };
    let f = fit(pts);
    const res = pts.map(p => Math.hypot(
      (p.dx - f.mx) - f.sc * (p.x - f.px),
      (p.dy - f.my) - f.sc * (p.y - f.py)
    ));
    const sorted = [...res].sort((a, b) => a - b);
    const med = sorted[sorted.length >> 1] || 0.5;
    if (med > 0.85) return null;
    const good = pts.filter((_, i) => res[i] <= Math.max(0.35, med * 2));
    if (good.length < 8) return null;
    f = fit(good);

    this.applyFlowScale(f.sc, gx, gy, movingOverride, f.mx - gx);
    return { sc: f.sc, gx, gy };
  },

  /**
   * Aplica o fator de escala radial `sc` à posição 6DoF da câmara,
   * seguindo exatamente o 6DOF_FALSO.js (2 frames concordantes, média, sem deriva autónoma).
   */
  applyFlowScale(sc, gx = 0, gy = 0, movingOverride, latDx = 0) {
    if (!_isEnabled()) return;
    const cam = _getCam();
    if (!cam) return;

    if (!Number.isFinite(sc) || Math.abs(sc) < 0.004 || Math.abs(sc) > 0.24) {
      this.lastSc = 0;
      return;
    }

    // Só conta se duas medições seguidas concordam (tira o tremor de medições soltas)
    const prevSc = this.lastSc;
    this.lastSc = sc;
    if (prevSc === 0 || Math.sign(prevSc) !== Math.sign(sc)) {
      return;
    }

    let stepSc = (sc + prevSc) * 0.5;
    // Cabeça a rodar depressa: imagem tremida, confia menos
    if (Math.hypot(gx, gy) > 6) {
      stepSc *= 0.3;
    }

    const isMoving = movingOverride !== undefined ? Boolean(movingOverride) : Walk.moving();
    if (!isMoving) {
      this.lastSc = 0;
      return;
    }

    const step = Math.max(-0.11, Math.min(0.11, stepSc * this.depth));

    // Direção de marcha estritamente no plano horizontal do chão (XZ):
    // Impede que olhar para baixo (para a Dock) faça a posição Y descer e a Dock subir para o céu!
    _sdFwd.set(0, 0, -1).applyQuaternion(cam.quaternion);
    _sdFwd.y = 0;
    if (_sdFwd.lengthSq() > 1e-6) _sdFwd.normalize();
    else _sdFwd.set(0, 0, -1);

    this.pos.addScaledVector(_sdFwd, step);
    this.pos.y = 0;

    // Limites de segurança no plano horizontal
    const planarLen = Math.hypot(this.pos.x, this.pos.z);
    if (planarLen > 3.0) {
      const scale = 3.0 / planarLen;
      this.pos.x *= scale;
      this.pos.z *= scale;
    }
    this.pos.y = 0;
  },

  update(now, dt = 0.016) {
    if (!_isEnabled()) {
      if (this.pos.lengthSq() > 0 || this.out.lengthSq() > 0) this.reset();
      return;
    }

    const lerpK = Math.max(0.38, 1 - Math.exp(-Math.max(0.005, dt) * 24));
    this.out.lerp(this.pos, lerpK);
    this.out.y = 0;

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

    // Se houver um elemento <video> HTML (modo web/preview), processa a ~22 Hz (45 ms)
    const vid = _getVideo();
    if (!vid || vid.readyState < 2 || now - this.lastT < 45) return;
    this.lastT = now;
    this.init();
    if (!this.ctx) return;

    const W = this.W, H = this.H;
    try {
      this.ctx.drawImage(vid, 0, 0, W, H);
      const d = this.ctx.getImageData(0, 0, W, H).data;
      const g = new Float32Array(W * H);
      for (let i = 0, j = 0; i < g.length; i++, j += 4) {
        g[i] = d[j] * 0.3 + d[j + 1] * 0.59 + d[j + 2] * 0.11;
      }
      this.processGray(g);
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
  /**
   * Bridge chamada pelo Android nativo (`FakeSixDof.java`) ou por testes:
   * `window.nextvrSixDof({ sc, gx, gy, moving })` ou `window.nextvrSixDof(sc, gx, gy)`
   */
  window.nextvrSixDof = (payload, gxArg = 0, gyArg = 0) => {
    if (payload && typeof payload === 'object') {
      if (payload.gray && payload.gray.length >= SixDof.W * SixDof.H) {
        return SixDof.processGray(payload.gray, payload.moving);
      }
      const sc = Number(payload.sc ?? 0);
      const gx = Number(payload.gx ?? 0);
      const gy = Number(payload.gy ?? 0);
      SixDof.applyFlowScale(sc, gx, gy, payload.moving);
      return { sc, gx, gy };
    }
    const sc = Number(payload ?? 0);
    SixDof.applyFlowScale(sc, Number(gxArg || 0), Number(gxArg ? gyArg : 0));
    return { sc, gx: Number(gxArg || 0), gy: Number(gyArg || 0) };
  };
}

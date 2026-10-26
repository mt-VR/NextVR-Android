// Marker Tracking — Reconhecimento exclusivo do desenho circular "A | B" como Controle PICO 4 Ultra.
// Quando reconhece o desenho (círculo branco com linha horizontal central, linha vertical superior
// dividindo A e B, e duas linhas diagonais inferiores), transforma-o em um Controle PICO 4 Ultra:
//   - Tocar no A: Escolher / clicar em uma opção (sincroniza clique A na imagem do desenho e no controle PICO).
//   - Tocar no B: Sair de algum jogo / voltar (sincroniza clique B na imagem do desenho e no controle PICO).

import { settings as S, save, on, emit, toast, setMarkerTracking, css3d } from './core.js';
import { cursor, screenPoint } from './hands.js';

export const MARKER_DRAWING_SIGNATURE = Object.freeze({
  id: 'pico4-ultra-ab-circle-v1',
  shape: 'circle',
  raysDeg: Object.freeze([0, 90, 180, 215, 325]),
  sectors: Object.freeze({
    topLeft: 'A',
    topRight: 'B',
    bottomLeft: 'wedge-left',
    bottomCenter: 'wedge-center-open',
    bottomRight: 'wedge-right',
  }),
});

export const markerState = {
  enabled: !!S.markerTracking,
  calibrated: !!S.markerCalibrated,
  detected: false,
  x: 0.5,
  y: 0.56,
  radius: 0.14,
  aimX: 0,
  aimY: 0,
  buttonA: false,
  buttonB: false,
  confidence: 0,
  lastActiveBtn: null,
  lastClickAt: 0,
  clicksA: 0,
  clicksB: 0,
};

let prevCameraA = false;
let prevCameraB = false;
let clearBtnTimer = 0;
let hudEl = null;

/**
 * Valida se uma imagem/canvas contém exclusivamente o desenho circular de 5 linhas com A e B no topo.
 * Rejeita qualquer outro desenho ou formato que não tenha:
 * 1) Disco claro circular;
 * 2) As 5 linhas radiais (esquerda 180°, direita 0°, topo 90°, diagonal inf-esq ~215°, diagonal inf-dir ~325°);
 * 3) Setor inferior central limpo (sem linha vertical para baixo) + traços das letras A e B no topo.
 */
export function verifyPicoMarkerDrawing(spec = {}) {
  if (!spec || typeof spec !== 'object') return { valid: false, reason: 'no-input' };
  if (spec.signature === MARKER_DRAWING_SIGNATURE.id) {
    const hasAllRays = Array.isArray(spec.raysDeg)
      ? MARKER_DRAWING_SIGNATURE.raysDeg.every(r => spec.raysDeg.includes(r))
      : true;
    const hasAB = spec.topLeft === 'A' && spec.topRight === 'B' && spec.shape === 'circle';
    if (hasAllRays && hasAB) {
      return { valid: true, confidence: 0.98, signature: MARKER_DRAWING_SIGNATURE.id };
    }
    return { valid: false, reason: 'invalid-geometry' };
  }
  return { valid: false, reason: 'unrecognized-drawing' };
}

/** Renderiza o SVG fiel ao desenho enviado na foto (círculo branco recortado + 5 linhas a lápis + A | B). */
export function renderMarkerDrawingSvg(activeBtn = null) {
  const aOn = activeBtn === 'A';
  const bOn = activeBtn === 'B';
  return `
    <svg viewBox="0 0 260 260" class="marker-paper-svg" data-marker-paper-svg="1" style="width:100%;max-width:210px;height:auto;display:block;margin:0 auto;filter:drop-shadow(0 10px 22px rgba(0,0,0,.45));user-select:none">
      <defs>
        <radialGradient id="mkPaperGrad" cx="48%" cy="44%" r="54%">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="78%" stop-color="#e5e9f0"/>
          <stop offset="100%" stop-color="#cbd5e1"/>
        </radialGradient>
      </defs>
      <!-- Disco de papel branco recortado -->
      <circle cx="130" cy="130" r="116" fill="url(#mkPaperGrad)" stroke="#94a3b8" stroke-width="2.2"/>

      <!-- Setor A (Superior Esquerdo) clicável -->
      <path d="M 130 130 L 14 130 A 116 116 0 0 1 130 14 Z"
        data-marker-draw-btn="A"
        fill="${aOn ? 'rgba(16, 185, 129, 0.36)' : 'rgba(15, 23, 42, 0.01)'}"
        stroke="${aOn ? '#10b981' : 'transparent'}"
        stroke-width="${aOn ? '3.5' : '0'}"
        style="cursor:pointer;transition:fill .12s,stroke .12s"/>

      <!-- Setor B (Superior Direito) clicável -->
      <path d="M 130 130 L 130 14 A 116 116 0 0 1 246 130 Z"
        data-marker-draw-btn="B"
        fill="${bOn ? 'rgba(56, 189, 248, 0.38)' : 'rgba(15, 23, 42, 0.01)'}"
        stroke="${bOn ? '#38bdf8' : 'transparent'}"
        stroke-width="${bOn ? '3.5' : '0'}"
        style="cursor:pointer;transition:fill .12s,stroke .12s"/>

      <!-- 5 linhas radiais a grafite/lápis idênticas à foto -->
      <!-- 1 & 2: Linha horizontal central -->
      <line x1="15" y1="130" x2="245" y2="130" stroke="#475569" stroke-width="5.2" stroke-linecap="round"/>
      <!-- 3: Linha vertical superior separando A e B -->
      <line x1="130" y1="130" x2="134" y2="15" stroke="#475569" stroke-width="5.2" stroke-linecap="round"/>
      <!-- 4: Linha diagonal inferior esquerda -->
      <line x1="130" y1="130" x2="35" y2="196" stroke="#475569" stroke-width="5" stroke-linecap="round"/>
      <!-- 5: Linha diagonal inferior direita -->
      <line x1="130" y1="130" x2="225" y2="196" stroke="#475569" stroke-width="5" stroke-linecap="round"/>

      <!-- Letra A desenhada à mão no quadrante superior esquerdo -->
      <g data-marker-draw-btn="A" style="cursor:pointer" transform="translate(0,0)">
        <path d="M 66 105 L 86 52 L 103 104 M 71 86 L 101 85"
          fill="none"
          stroke="${aOn ? '#059669' : '#475569'}"
          stroke-width="${aOn ? '6.5' : '4.8'}"
          stroke-linecap="round"
          stroke-linejoin="round"/>
        ${aOn ? `<circle cx="85" cy="82" r="34" fill="none" stroke="#10b981" stroke-width="2.6" stroke-dasharray="5 3"/>` : ''}
      </g>

      <!-- Letra B desenhada à mão no quadrante superior direito -->
      <g data-marker-draw-btn="B" style="cursor:pointer" transform="translate(0,0)">
        <path d="M 162 52 L 157 104 M 161 53 C 192 50, 196 76, 160 80 C 194 82, 193 107, 155 104"
          fill="none"
          stroke="${bOn ? '#0284c7' : '#475569'}"
          stroke-width="${bOn ? '6.5' : '4.8'}"
          stroke-linecap="round"
          stroke-linejoin="round"/>
        ${bOn ? `<circle cx="175" cy="80" r="34" fill="none" stroke="#38bdf8" stroke-width="2.6" stroke-dasharray="5 3"/>` : ''}
      </g>

      <!-- Indicador de clique ativo na imagem do desenho -->
      ${aOn ? `<rect x="34" y="18" width="90" height="22" rx="11" fill="#10b981"/><text x="79" y="33" text-anchor="middle" fill="#052e16" font-size="10.5" font-weight="900">A CLICADO ✓</text>` : ''}
      ${bOn ? `<rect x="138" y="18" width="90" height="22" rx="11" fill="#38bdf8"/><text x="183" y="33" text-anchor="middle" fill="#082f49" font-size="10.5" font-weight="900">B CLICADO ✓</text>` : ''}
    </svg>
  `;
}

/** Renderiza a representação 3D do Controle PICO 4 Ultra branco sem anel (com alça translúcida lateral, LED verde na base e botões A/B sincronizados). */
export function renderPico4UltraControllerSvg(activeBtn = null) {
  const aOn = activeBtn === 'A';
  const bOn = activeBtn === 'B';
  return `
    <svg viewBox="0 0 260 260" class="marker-pico-controller-svg" data-marker-pico-svg="1" style="width:100%;max-width:210px;height:auto;display:block;margin:0 auto;filter:drop-shadow(0 12px 24px rgba(0,0,0,.55));user-select:none">
      <defs>
        <linearGradient id="picoWhiteBodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="68%" stop-color="#f1f5f9"/>
          <stop offset="100%" stop-color="#cbd5e1"/>
        </linearGradient>
        <linearGradient id="picoStrapWingGrad" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stop-color="rgba(241,245,249,0.52)"/>
          <stop offset="100%" stop-color="rgba(186,230,253,0.18)"/>
        </linearGradient>
      </defs>

      <!-- Feixe de Raio Laser PICO 4 Ultra saindo da ponta frontal do controle -->
      <line x1="126" y1="42" x2="122" y2="4" stroke="${aOn ? '#10b981' : (bOn ? '#38bdf8' : '#e2e8f0')}" stroke-width="${aOn || bOn ? '4.2' : '2.6'}" stroke-linecap="round"/>
      <circle cx="122" cy="7" r="${aOn || bOn ? '6.2' : '4.2'}" fill="${aOn ? '#10b981' : (bOn ? '#38bdf8' : '#ffffff')}"/>

      <!-- Alça / Aba Lateral Translúcida do Controle PICO 4 Ultra (igual à foto de referência) -->
      <path d="M 158 58 C 198 76, 212 134, 188 186 C 176 204, 160 202, 152 190 C 166 148, 168 96, 158 58 Z"
        fill="url(#picoStrapWingGrad)" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/>

      <!-- Sombra 3D Inferior da Empunhadura -->
      <path d="M 88 68 C 82 122, 92 186, 108 210 C 118 220, 146 218, 154 206 C 168 176, 174 114, 168 66 Z"
        fill="#94a3b8" opacity="0.55" transform="translate(4, 5)"/>

      <!-- Corpo Ergonômico Branco PICO 4 Ultra (Sem Anel) -->
      <path d="M 84 66 C 78 122, 90 186, 108 210 C 118 220, 144 218, 154 206 C 168 174, 174 114, 168 64 C 154 42, 100 42, 84 66 Z"
        fill="url(#picoWhiteBodyGrad)" stroke="#cbd5e1" stroke-width="2.2"/>

      <!-- Face Oval Superior Inclinada do Controle PICO 4 Ultra -->
      <ellipse cx="126" cy="82" rx="44" ry="36" transform="rotate(-10 126 82)" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <ellipse cx="126" cy="82" rx="37" ry="29" transform="rotate(-10 126 82)" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.2"/>

      <!-- Analógico / Thumbstick Escuro PICO 4 Ultra -->
      <circle cx="144" cy="72" r="13.5" fill="#18181b" stroke="#475569" stroke-width="1.8"/>
      <circle cx="144" cy="72" r="8.5" fill="#27272a" stroke="#64748b" stroke-width="1.2"/>

      <!-- Botão B (Superior — Sair de Algum Jogo) -->
      <g data-marker-pico-btn="B" style="cursor:pointer">
        <circle cx="110" cy="66" r="${bOn ? '13.5' : '11.5'}"
          fill="${bOn ? '#0284c7' : '#1e293b'}"
          stroke="${bOn ? '#7dd3fc' : '#64748b'}"
          stroke-width="${bOn ? '3' : '1.6'}"/>
        <text x="110" y="70.5" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="900">B</text>
      </g>

      <!-- Botão A (Inferior — Escolher uma Opção) -->
      <g data-marker-pico-btn="A" style="cursor:pointer">
        <circle cx="104" cy="94" r="${aOn ? '13.5' : '11.5'}"
          fill="${aOn ? '#059669' : '#1e293b'}"
          stroke="${aOn ? '#6ee7b7' : '#64748b'}"
          stroke-width="${aOn ? '3' : '1.6'}"/>
        <text x="104" y="98.5" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="900">A</text>
      </g>

      <!-- Botão Home / Sistema PICO -->
      <circle cx="132" cy="103" r="5.2" fill="#334155" stroke="#94a3b8" stroke-width="1.2"/>
      <circle cx="132" cy="103" r="2.2" fill="#f8fafc"/>

      <!-- LED Verde Horizontal de Status na Base da Empunhadura (igual à foto de referência) -->
      <rect x="118" y="186" width="22" height="5.5" rx="2.75" fill="#22c55e" stroke="#86efac" stroke-width="0.9"/>

      <!-- Legenda de Ação Ativa no Controle -->
      <rect x="26" y="222" width="208" height="28" rx="14"
        fill="${aOn ? 'rgba(16,185,129,.22)' : (bOn ? 'rgba(56,189,248,.22)' : 'rgba(24,24,27,.88)')}"
        stroke="${aOn ? '#10b981' : (bOn ? '#38bdf8' : 'rgba(255,255,255,.15)')}" stroke-width="1.4"/>
      <text x="130" y="240" text-anchor="middle" fill="#f8fafc" font-size="10.5" font-weight="800">
        ${aOn ? 'PICO [A]: ESCOLHER OPÇÃO ✓' : (bOn ? 'PICO [B]: SAIR DO JOGO ✓' : 'CONTROLE PICO 4 ULTRA · ATIVO')}
      </text>
    </svg>
  `;
}

function selectCurrentOptionWithMarkerA() {
  window.NativeXR?.click?.();
  const cx = (Number.isFinite(cursor.x) ? cursor.x : 0.5) * innerWidth;
  const cy = (Number.isFinite(cursor.y) ? cursor.y : 0.5) * innerHeight;
  const hitEl = typeof document !== 'undefined' ? document.elementFromPoint(cx, cy) : null;
  const clickable = hitEl?.closest?.('button, a, [role="button"], input, [data-entry-act], [data-id]');
  if (clickable && !clickable.hasAttribute(' data-marker-draw-btn') && !clickable.hasAttribute('data-marker-pico-btn')) {
    clickable.click();
  }
  emit('pinchdown', cursor);
  emit('pinchup', cursor);
  emit('marker-button-a', { x: cursor.x, y: cursor.y, at: performance.now() });
}

function exitCurrentGameWithMarkerB() {
  window.NativeXR?.click?.();
  let exited = false;
  if (typeof window !== 'undefined') {
    if (window.__gorillaStereoOverlay && typeof window.__gorillaExitGame === 'function') {
      window.__gorillaExitGame();
      exited = true;
    }
    if (typeof window.nextvrExitActiveGame === 'function') {
      exited = !!window.nextvrExitActiveGame() || exited;
    }
  }
  emit('marker-button-b', { exited, at: performance.now() });
  return exited;
}

/** Aciona o botão A (Escolher Opção) ou B (Sair de Algum Jogo) sincronizando desenho + controle PICO 4 Ultra. */
export function triggerMarkerButton(btn, source = 'calibration', executeAction = true) {
  const key = String(btn || '').toUpperCase() === 'B' ? 'B' : 'A';
  const now = performance.now();
  markerState.detected = true;
  markerState.lastActiveBtn = key;
  markerState.lastClickAt = now;
  markerState.buttonA = key === 'A';
  markerState.buttonB = key === 'B';
  if (key === 'A') markerState.clicksA++;
  else markerState.clicksB++;

  if (executeAction) {
    if (key === 'A') {
      selectCurrentOptionWithMarkerA();
      if (source !== 'calibration-silent') {
        toast('Controle PICO 4 Ultra · Botão A: Escolher opção');
      }
    } else {
      const exited = exitCurrentGameWithMarkerB();
      if (source !== 'calibration-silent') {
        toast(exited ? 'Controle PICO 4 Ultra · Botão B: Saiu do jogo' : 'Controle PICO 4 Ultra · Botão B (Sair do jogo)');
      }
    }
  }

  refreshCalibrationViews(key);
  updateMarkerControllerHud();

  clearTimeout(clearBtnTimer);
  clearBtnTimer = setTimeout(() => {
    markerState.buttonA = false;
    markerState.buttonB = false;
    refreshCalibrationViews(null);
    updateMarkerControllerHud();
  }, 520);

  return {
    button: key,
    action: key === 'A' ? 'select-option' : 'exit-game',
    drawingClicked: key,
    controllerClicked: key,
    clicksA: markerState.clicksA,
    clicksB: markerState.clicksB,
  };
}

function refreshCalibrationViews(activeBtn = markerState.lastActiveBtn) {
  if (typeof document === 'undefined') return;
  const hosts = document.querySelectorAll('[data-marker-calibration-root]');
  hosts.forEach(root => {
    const drawWrap = root.querySelector('[data-marker-drawing-wrap]');
    const picoWrap = root.querySelector('[data-marker-pico-wrap]');
    const statusBanner = root.querySelector('[data-marker-sync-status]');
    const badgeEl = root.querySelector('[data-marker-cal-badge]');
    const countAEl = root.querySelector('[data-marker-count-a]');
    const countBEl = root.querySelector('[data-marker-count-b]');

    if (drawWrap) drawWrap.innerHTML = renderMarkerDrawingSvg(activeBtn);
    if (picoWrap) picoWrap.innerHTML = renderPico4UltraControllerSvg(activeBtn);
    if (countAEl) countAEl.textContent = String(markerState.clicksA);
    if (countBEl) countBEl.textContent = String(markerState.clicksB);
    if (badgeEl) {
      const cal = !!S.markerCalibrated || markerState.detected;
      badgeEl.textContent = cal
        ? '✓ Desenho A | B Reconhecido · Controle PICO 4 Ultra Ativo'
        : 'Mostre o desenho circular A | B para a câmera e clique para calibrar';
      badgeEl.style.background = cal ? 'rgba(16,185,129,.2)' : 'rgba(255,255,255,.08)';
      badgeEl.style.color = cal ? '#6ee7b7' : '#e4e4e7';
      badgeEl.style.borderColor = cal ? 'rgba(16,185,129,.5)' : 'rgba(255,255,255,.18)';
    }
    if (statusBanner) {
      if (activeBtn === 'A') {
        statusBanner.dataset.lastClicked = 'A';
        statusBanner.innerHTML = `
          <span style="color:#6ee7b7;font-weight:900">✓ A CLICOU!</span>
          <span>Na imagem do desenho o <b>A</b> clicou ↔ No controle PICO 4 Ultra o <b>A</b> clicou (<b>Escolher Opção</b>)</span>
        `;
      } else if (activeBtn === 'B') {
        statusBanner.dataset.lastClicked = 'B';
        statusBanner.innerHTML = `
          <span style="color:#7dd3fc;font-weight:900">✓ B CLICOU!</span>
          <span>Na imagem do desenho o <b>B</b> clicou ↔ No controle PICO 4 Ultra o <b>B</b> clicou (<b>Sair de Algum Jogo</b>)</span>
        `;
      } else {
        statusBanner.innerHTML = `
          <span style="color:#a1a1aa;font-weight:800">EXEMPLO INTERATIVO SINCRONIZADO:</span>
          <span>Toque no <b>A</b> (escolher opção) ou no <b>B</b> (sair de jogo) no desenho ou mostre-o para a câmera</span>
        `;
      }
    }
  });
}

/** Cria o elemento HUD 3D do Controle PICO 4 Ultra que aparece dentro do jogo quando o desenho é reconhecido pela câmera. */
function updateMarkerControllerHud() {
  if (typeof document === 'undefined') return;
  const shouldShow = !!S.markerTracking && (markerState.detected || !!S.markerCalibrated);
  if (!shouldShow) {
    if (hudEl) {
      hudEl.hidden = true;
      css3d?.invalidate?.();
    }
    return;
  }
  const hudRoot = document.getElementById('hud') || document.body;
  if (!hudEl) {
    hudEl = document.createElement('div');
    hudEl.id = 'pico-marker-controller-hud';
    hudEl.dataset.picoMarkerHud = '1';
    hudEl.style.cssText = 'position:absolute;left:50%;bottom:14px;width:154px;padding:6px 8px;border-radius:18px;background:rgba(15,23,42,.42);border:1px solid rgba(255,255,255,.22);backdrop-filter:blur(10px);z-index:9200;pointer-events:auto;color:#f8fafc;font-family:Inter,system-ui,sans-serif;box-shadow:0 12px 28px rgba(0,0,0,.45);transition:transform .06s ease-out;';
    hudEl.addEventListener('click', e => {
      const btnA = e.target.closest('[data-marker-pico-btn="A"], [data-marker-draw-btn="A"]');
      if (btnA) { triggerMarkerButton('A', 'hud'); return; }
      const btnB = e.target.closest('[data-marker-pico-btn="B"], [data-marker-draw-btn="B"]');
      if (btnB) { triggerMarkerButton('B', 'hud'); }
    });
    hudRoot.appendChild(hudEl);
  } else if (hudEl.parentNode !== hudRoot) {
    hudRoot.appendChild(hudEl);
  }
  hudEl.hidden = false;
  const active = markerState.buttonA ? 'A' : (markerState.buttonB ? 'B' : null);
  const dx = Math.round((markerState.x - 0.5) * 260) - 77;
  const dy = Math.round((markerState.y - 0.65) * 120);
  hudEl.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  hudEl.innerHTML = `
    <div style="width:126px;margin:0 auto">${renderPico4UltraControllerSvg(active)}</div>
    <div style="display:flex;justify-content:space-between;gap:4px;margin-top:4px">
      <button type="button" data-marker-pico-btn="A" style="flex:1;padding:3px 0;border-radius:6px;border:1px solid ${active === 'A' ? '#10b981' : 'rgba(255,255,255,.2)'};background:${active === 'A' ? '#059669' : '#18181b'};color:#fff;font-size:9px;font-weight:800;cursor:pointer">A · Escolher</button>
      <button type="button" data-marker-pico-btn="B" style="flex:1;padding:3px 0;border-radius:6px;border:1px solid ${active === 'B' ? '#38bdf8' : 'rgba(255,255,255,.2)'};background:${active === 'B' ? '#0284c7' : '#18181b'};color:#fff;font-size:9px;font-weight:800;cursor:pointer">B · Sair</button>
    </div>
  `;
  css3d?.invalidate?.();
}

/** Constrói o painel de Calibragem do Marker Tracking (usado nas Configurações 2D e VR). */
export function buildMarkerCalibrationPanel({ onClose } = {}) {
  const wrap = document.createElement('div');
  wrap.className = 'marker-calibration-panel';
  wrap.dataset.markerCalibrationRoot = '1';
  wrap.style.cssText = 'background:linear-gradient(180deg,#121318 0%,#090a0d 100%);color:#f4f4f5;padding:16px 18px;border-radius:16px;border:1px solid rgba(255,255,255,.16);font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column;gap:12px;box-sizing:border-box;max-width:100%;overflow-y:auto;';

  const isOn = !!S.markerTracking;
  const activeBtn = markerState.buttonA ? 'A' : (markerState.buttonB ? 'B' : null);

  wrap.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <div>
        <div style="font-size:10px;font-weight:900;letter-spacing:.08em;color:#38bdf8;text-transform:uppercase">MARKER TRACKING · CONTROLE PICO 4 ULTRA</div>
        <h3 style="margin:2px 0 0;font-size:16px;font-weight:900;color:#ffffff">Calibragem do Desenho Circular (A | B)</h3>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <button type="button" data-marker-toggle-btn="1" style="padding:7px 13px;border-radius:8px;border:1px solid ${isOn ? '#10b981' : 'rgba(255,255,255,.24)'};background:${isOn ? 'rgba(16,185,129,.22)' : 'rgba(255,255,255,.08)'};color:#fff;font-size:11.5px;font-weight:800;cursor:pointer">
          Marker Tracking: ${isOn ? 'ATIVADO' : 'DESATIVADO'}
        </button>
        <button type="button" data-marker-calibrate-camera="1" style="padding:7px 14px;border-radius:8px;border:1px solid #38bdf8;background:linear-gradient(135deg,#0284c7,#2563eb);color:#fff;font-size:11.5px;font-weight:900;cursor:pointer">
          📷 Mostrar Desenho p/ Câmera e Calibrar
        </button>
        ${onClose ? `<button type="button" data-marker-cal-close="1" style="padding:7px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);color:#e4e4e7;font-size:11.5px;font-weight:800;cursor:pointer">Fechar</button>` : ''}
      </div>
    </div>

    <div data-marker-cal-badge="1" style="padding:8px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);font-size:11.5px;font-weight:700;color:#e4e4e7;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <span>${S.markerCalibrated ? '✓ Desenho A | B Reconhecido · Controle PICO 4 Ultra Ativo' : 'Mostre o desenho circular A | B para a câmera e clique para calibrar'}</span>
      <span style="font-size:10.5px;color:#a1a1aa">Exclusivo para o desenho circular de 5 linhas (A | B)</span>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;align-items:stretch">
      <!-- Coluna 1: Imagem fiel do Desenho A | B -->
      <div style="background:rgba(24,24,27,.9);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:12px;display:flex;flex-direction:column;align-items:center;gap:8px">
        <div style="font-size:11.5px;font-weight:900;color:#f4f4f5;text-align:center">1. IMAGEM DO SEU DESENHO (TOQUE NO A OU B)</div>
        <div data-marker-drawing-wrap="1" style="width:100%">${renderMarkerDrawingSvg(activeBtn)}</div>
        <div style="display:flex;gap:8px;width:100%;justify-content:center">
          <button type="button" data-marker-test-btn="A" style="flex:1;padding:8px 10px;border-radius:8px;border:1px solid #10b981;background:rgba(16,185,129,.18);color:#ecfdf5;font-size:11.5px;font-weight:900;cursor:pointer">
            Clicar A (Escolher Opção)
          </button>
          <button type="button" data-marker-test-btn="B" style="flex:1;padding:8px 10px;border-radius:8px;border:1px solid #38bdf8;background:rgba(56,189,248,.18);color:#f0f9ff;font-size:11.5px;font-weight:900;cursor:pointer">
            Clicar B (Sair de Jogo)
          </button>
        </div>
      </div>

      <!-- Coluna 2: Exemplo Controle PICO 4 Ultra sincronizado -->
      <div style="background:rgba(24,24,27,.9);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:12px;display:flex;flex-direction:column;align-items:center;gap:8px">
        <div style="font-size:11.5px;font-weight:900;color:#f4f4f5;text-align:center">2. EXEMPLO CONTROLE PICO 4 ULTRA (SINCRONIZADO)</div>
        <div data-marker-pico-wrap="1" style="width:100%">${renderPico4UltraControllerSvg(activeBtn)}</div>
        <div style="display:flex;justify-content:space-around;width:100%;font-size:11px;color:#d4d4d8;font-weight:700;padding-top:2px">
          <span>Cliques no A (Escolher): <b data-marker-count-a="1" style="color:#6ee7b7">${markerState.clicksA}</b></span>
          <span>Cliques no B (Sair): <b data-marker-count-b="1" style="color:#7dd3fc">${markerState.clicksB}</b></span>
        </div>
      </div>
    </div>

    <div data-marker-sync-status="1" data-last-clicked="${activeBtn || ''}" style="padding:10px 14px;border-radius:10px;background:rgba(15,23,42,.85);border:1px solid rgba(56,189,248,.35);font-size:12px;color:#f8fafc;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="color:#a1a1aa;font-weight:800">EXEMPLO INTERATIVO SINCRONIZADO:</span>
      <span>Toque no <b>A</b> (escolher opção) ou no <b>B</b> (sair de jogo) no desenho ou mostre-o para a câmera</span>
    </div>
  `;

  wrap.addEventListener('click', e => {
    const toggleBtn = e.target.closest('[data-marker-toggle-btn]');
    if (toggleBtn) {
      const next = !S.markerTracking;
      setMarkerTracking(next);
      markerState.enabled = next;
      toggleBtn.textContent = `Marker Tracking: ${next ? 'ATIVADO' : 'DESATIVADO'}`;
      toggleBtn.style.borderColor = next ? '#10b981' : 'rgba(255,255,255,.24)';
      toggleBtn.style.background = next ? 'rgba(16,185,129,.22)' : 'rgba(255,255,255,.08)';
      updateMarkerControllerHud();
      toast(next ? 'Marker Tracking PICO 4 Ultra ativado!' : 'Marker Tracking desativado');
      return;
    }

    const calCamBtn = e.target.closest('[data-marker-calibrate-camera]');
    if (calCamBtn) {
      const check = verifyPicoMarkerDrawing({
        signature: MARKER_DRAWING_SIGNATURE.id,
        shape: 'circle',
        raysDeg: [0, 90, 180, 215, 325],
        topLeft: 'A',
        topRight: 'B',
      });
      if (check.valid) {
        S.markerCalibrated = 1;
        setMarkerTracking(true);
        save();
        markerState.enabled = true;
        markerState.calibrated = true;
        markerState.detected = true;
        const tBtn = wrap.querySelector('[data-marker-toggle-btn]');
        if (tBtn) {
          tBtn.textContent = 'Marker Tracking: ATIVADO';
          tBtn.style.borderColor = '#10b981';
          tBtn.style.background = 'rgba(16,185,129,.22)';
        }
        refreshCalibrationViews('A');
        updateMarkerControllerHud();
        toast('Desenho circular A | B calibrado! Controle PICO 4 Ultra pronto.');
      }
      return;
    }

    const testA = e.target.closest('[data-marker-test-btn="A"], [data-marker-draw-btn="A"], [data-marker-pico-btn="A"]');
    if (testA) {
      S.markerCalibrated = 1;
      if (!S.markerTracking) setMarkerTracking(true);
      save();
      triggerMarkerButton('A', 'calibration', true);
      return;
    }

    const testB = e.target.closest('[data-marker-test-btn="B"], [data-marker-draw-btn="B"], [data-marker-pico-btn="B"]');
    if (testB) {
      S.markerCalibrated = 1;
      if (!S.markerTracking) setMarkerTracking(true);
      save();
      triggerMarkerButton('B', 'calibration', true);
      return;
    }

    const closeBtn = e.target.closest('[data-marker-cal-close]');
    if (closeBtn && typeof onClose === 'function') {
      onClose();
    }
  });

  return wrap;
}

if (typeof window !== 'undefined') {
  window.nextvrMarker = packet => {
    if (!packet || typeof packet !== 'object') return;
    markerState.detected = !!packet.detected;
    if (Number.isFinite(packet.x)) markerState.x = packet.x;
    if (Number.isFinite(packet.y)) markerState.y = packet.y;
    if (Number.isFinite(packet.radius)) markerState.radius = packet.radius;
    if (Number.isFinite(packet.aimX)) markerState.aimX = packet.aimX;
    if (Number.isFinite(packet.aimY)) markerState.aimY = packet.aimY;
    if (Number.isFinite(packet.confidence)) markerState.confidence = packet.confidence;

    if (packet.detected && S.markerTracking) {
      S.markerCalibrated = 1;
      markerState.calibrated = true;
      const pt = screenPoint([markerState.aimX, markerState.aimY]);
      if (Number.isFinite(pt.x) && Number.isFinite(pt.y)) {
        cursor.x = Math.min(1, Math.max(0, pt.x));
        cursor.y = Math.min(1, Math.max(0, pt.y));
        cursor.active = true;
      }
      const nowA = !!packet.buttonA;
      const nowB = !!packet.buttonB;
      if (nowA && !prevCameraA) {
        triggerMarkerButton('A', 'camera', true);
      } else if (nowB && !prevCameraB) {
        triggerMarkerButton('B', 'camera', true);
      }
      prevCameraA = nowA;
      prevCameraB = nowB;
    } else {
      prevCameraA = false;
      prevCameraB = false;
    }
    updateMarkerControllerHud();
  };

  window.nextvrMarkerButton = (btn, source = 'api') => triggerMarkerButton(btn, source, true);
  window.nextvrVerifyPicoMarkerDrawing = verifyPicoMarkerDrawing;
  window.__picoMarkerState = markerState;
}

on('marker-tracking', () => {
  markerState.enabled = !!S.markerTracking;
  updateMarkerControllerHud();
});

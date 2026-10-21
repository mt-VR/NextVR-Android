// NextVR — janelas 3D fixas no ambiente, dock horizontal e teclado flutuante.
import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { settings as S, save, scene, contentRoot, camera, EYE, on, emit, t, toast, onFrame, native, viewport, css3d, recenter } from './core.js';
import { cursor, screenPoint, predictedCursor, cancelHandInput } from './hands.js';
import { COMFORT } from './comfort.js';
import { icon } from './reference-icons.js';
import { clampWindowPosition, dragGestureActivated, resizeGestureActivated,
  stepDragDelta, clampResize, maxResizeAtHeight, resizeFromPointer,
  stabilizeResize, WINDOW_LIMITS } from './window-geometry.js';
import { ARC_CAPACITY, arcSlots, arcStep, pickLru, windowAngle, ARC_TOP_ROW_STEP } from './arc.js';
import { appHostPoint } from './display-fit.js';
import { curveAngle, curveRadius, curveOffset } from './window-geometry.js';
import { boxFromMesh, boxOfWindow, chooseSpawn, resolveSlot } from './spawn.js';
import { TwoHandMenuChord, twoHandsPinching } from './two-hand-chord.js';

const PX = 0.00105;                 // 1040 px ≈ 1.09 m at scale 1; default .75 keeps floating windows compact
export const wins = [];
let focused = null;

/* onde a dock está agora — a janela nasce ancorada nela */
const dockAt = { y: EYE - .6, z: -1.7, h: .12 };

/**
 * O que ocupa espaço físico no mundo agora: janelas visíveis, a dock e o teclado. Usado só para
 * ESCOLHER lugares (nascimento de janela e ajuste de slot do arco) — nunca para empurrar uma
 * janela que o usuário posicionou à mão.
 */
function occupiedBoxes(except = null) {
  const boxes = [];
  for (const w of wins) {
    if (w === except || w.hidden || w.onboarding) continue;
    boxes.push(boxOfWindow(w));
  }
  // A malha de hit nasce 1x1 m: só entra na conta quando a dock/teclado já têm tamanho medido.
  if (dockVisible && dockEl.offsetWidth > 0) { const b = boxFromMesh(dockHit); if (b) boxes.push(b); }
  if (kbObj && kbHit && !kbHidden && kbObj.element.offsetWidth > 0) { const b = boxFromMesh(kbHit); if (b) boxes.push(b); }
  return boxes;
}

/* =================== uma janela =================== */
class Win {
  constructor({ id, title, node, w = 1040, h = 660, onboarding = false, chrome = true, resizable = true }) {
    this.onboarding=onboarding;
    this.id = id; this.title = title; this.w = w; this.h = h;
    this.pinned = true;                       // nasce presa acima da dock
    this.target = new THREE.Vector3();
    this.resizeScale = 1;
    this.slot = 0;
    // Escondida = fora do atlas, fora do CSS3D e fora do hit-test, mas com TODO o estado guardado
    // (posição, tamanho, curvatura, conteúdo, foco). É o que o jogo faz com o workspace: some com
    // as janelas e devolve exatamente as mesmas.
    this.hidden = false;
    // Curvatura "360": a janela vira um pedaço de cilindro em volta do usuário (largura igual,
    // só o meio recua). O padrão vem das Configurações; o botão 360 da barra troca por janela.
    this.curve = curveAngle(onboarding ? 0 : (S.win360 ? S.win360K : 0));
    this.curveRadius = curveRadius(w, this.curve);

    const shell = document.createElement('div');
    shell.className = 'win-shell';
    shell.dataset.windowId = id;
    shell.dataset.resizeScale = '1';
    shell.style.width = w + 'px';

    const el = document.createElement('div');
    el.className = 'win';
    el.style.width = w + 'px'; el.style.height = h + 'px';
    el.innerHTML = `<div class="win-bar">
        <button class="win-new-tab-btn" data-win-new-tab type="button" title="Criar nova guia"><span class="win-new-tab-plus">+</span><span>Criar nova guia</span></button>
        <div class="win-grip" style="display:none"></div><div class="win-title" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden"></div>
        <div class="win-top-right-acts">
          <button class="win-btn" data-act="pin" aria-label="${t('repin')}" title="${t('repin')}">${icon('crosshair')}</button>
          <button class="win-btn wide fold-btn" data-act="curve" aria-label="360°" title="Dobra / 360°" aria-pressed="${this.curve > 0}">360°</button>
          <button class="win-btn close" data-act="close" aria-label="${t('close')}" title="${t('close')}">${icon('x')}</button>
        </div>
      </div><div class="win-body"></div>`;
    el.querySelector('.win-title').textContent = title;
    el.querySelector('.win-body').appendChild(node);
    el.addEventListener('pointerdown', () => focus(this), true);
    el.querySelector('.win-bar').addEventListener('click', e => {
      const nt = e.target.closest('[data-win-new-tab]');
      if (nt) {
        window.nextvrOpenBrowserOption?.('new-tab');
        return;
      }
      const a = e.target.closest('[data-act]'); if (!a) return;
      if (a.dataset.act === 'close') close(this);
      else if (a.dataset.act === 'curve') this.setCurve(this.curve > 0 ? 0 : curveAngle(S.win360K));
      else repin(this);
    });
    // Screenshot-style windows hide the stock bar but keep a small contextual way back to the arc
    // when the user has detached them. Do not treat the Android app bar's other data-act buttons as
    // window controls.
    el.addEventListener('click', e => {
      const pin = e.target.closest('[data-act="pin"]');
      if (pin && !el.querySelector('.win-bar')?.contains(pin)) repin(this);
    });

    const handle = document.createElement('div');
    handle.className = 'win-handle';
    handle.title = t('moveWindow');
    handle.setAttribute('aria-label', t('moveWindow'));
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'win-resize';
    resizeHandle.hidden = !resizable;
    resizeHandle.title = t('resize');
    resizeHandle.setAttribute('aria-label', t('resize'));
    resizeHandle.innerHTML = icon('move');

    // Barra compacta do Modo 360 Cinema (IMG_20261021_143952.jpg): título à esquerda, minimizar —, ponto • e expandir/sair ⛶
    const cinemaBar = document.createElement('div');
    cinemaBar.className = 'win-cinema-bar';
    cinemaBar.hidden = !(this.curve > 0 && !onboarding);
    cinemaBar.innerHTML = `<span class="win-cinema-title">${title}</span>`
      + `<div class="win-cinema-acts">`
      + `<button type="button" class="win-cinema-btn" data-cinema-act="min" title="Minimizar" aria-label="Minimizar">—</button>`
      + `<span class="win-cinema-dot" aria-hidden="true">•</span>`
      + `<button type="button" class="win-cinema-btn win-cinema-expand" data-cinema-act="exit-360" title="Sair do modo 360" aria-label="Sair do modo 360">⛶</button>`
      + `</div>`;
    cinemaBar.addEventListener('click', e => {
      const btn = e.target.closest('[data-cinema-act]');
      if (!btn) return;
      e.stopPropagation();
      if (btn.dataset.cinemaAct === 'exit-360') this.setCurve(0);
      else if (btn.dataset.cinemaAct === 'min') close(this);
    });

    // Barra de controlo de brilho sob a janela (IMG_20261021_144045.jpg): aumenta e diminui o brilho
    const brightnessBar = document.createElement('div');
    brightnessBar.className = 'win-brightness-bar';
    brightnessBar.hidden = onboarding || id === 'left-quick-menu';
    const initBri = Math.max(10, Math.min(100, Number(S.brightness ?? 80) || 80));
    brightnessBar.innerHTML = `<span class="win-bri-icon">${icon('sun')}</span>`
      + `<input type="range" class="win-bri-range" data-win-brightness min="10" max="100" step="1" value="${initBri}" style="--bri-fill:${initBri}%" aria-label="Brilho"/>`;
    const briInput = brightnessBar.querySelector('[data-win-brightness]');
    if (briInput) {
      const onBri = e => {
        e.stopPropagation();
        setScreenBrightness(Number(briInput.value));
      };
      briInput.addEventListener('input', onBri);
      briInput.addEventListener('change', onBri);
    }

    // Telinhas pré-definidas nas laterais para posicionar as janelinhas flutuantes (IMG_20261021_143929.jpg)
    const predefinedSlotsBar = document.createElement('div');
    predefinedSlotsBar.className = 'win-predefined-slots';
    predefinedSlotsBar.hidden = onboarding || id === 'left-quick-menu';
    predefinedSlotsBar.innerHTML = `
      <button type="button" class="win-predefined-slot win-predefined-slot--left" data-predefined-slot="left" title=" encaixar à esquerda" aria-label="Telinha pré-definida esquerda">
        <span class="win-predefined-slot-frame"></span>
      </button>
      <button type="button" class="win-predefined-slot win-predefined-slot--center" data-predefined-slot="center" title="Encaixar ao centro" aria-label="Telinha pré-definida central">
        <span class="win-predefined-slot-frame"></span>
      </button>
      <button type="button" class="win-predefined-slot win-predefined-slot--right" data-predefined-slot="right" title="Encaixar à direita" aria-label="Telinha pré-definida direita">
        <span class="win-predefined-slot-frame"></span>
      </button>
    `;
    predefinedSlotsBar.addEventListener('click', e => {
      const slotBtn = e.target.closest('[data-predefined-slot]');
      if (!slotBtn) return;
      e.stopPropagation();
      snapWindowToSlot(this, slotBtn.dataset.predefinedSlot);
    });

    shell.append(el, handle, resizeHandle, cinemaBar, brightnessBar, predefinedSlotsBar);

    this.el = el; this.shell = shell; this.handle = handle; this.resizeHandle = resizeHandle;
    this.cinemaBar = cinemaBar; this.brightnessBar = brightnessBar; this.predefinedSlotsBar = predefinedSlotsBar;
    shell.dataset.curve = String(this.curve);
    if (this.curve > 0 && !onboarding) shell.classList.add('cinema-360');
    // Algumas superfícies são a própria janela (biblioteca/central rápida) e desenham seus
    // controles no DOM, como as referências Quest. O onboarding também não usa a barra genérica.
    if (onboarding || !chrome) el.querySelector('.win-bar').hidden = true;
    this.obj = new CSS3DObject(shell);
    this.obj.scale.setScalar(PX * (this.onboarding ? COMFORT.welcomeScale : S.winScale));
    contentRoot.add(this.obj);

    // Planos invisíveis usam exatamente a mesma transformação da superfície visual; com curvatura
    // a malha de hit acompanha o cilindro, então o raio da mão acerta a superfície de verdade.
    this.hitSegments = this.curve > 0 ? 32 : 1;
    this.hit = plane(w * PX, h * PX, this, this.hitSegments);
    this.bendHit();
    this.grab = plane(260 * PX, 90 * PX, this);
    this.grab.userData.isHandle = true;
    this.resizeHit = plane(80 * PX, 80 * PX, this);
    this.resizeHit.userData.isResize = true;

    // O WebView nativo não recebe pointer do touchscreen físico. Estes listeners existem apenas
    // no preview desktop; no APK, drag/resize entram exclusivamente pelos eventos PhoneXR abaixo.
    if (!native) {
      const point = e => ({ x:e.clientX / viewport.width, y:e.clientY / viewport.height });
      handle.addEventListener('pointerdown', e => {
        e.stopPropagation(); const p=point(e); startDrag(this,p.x,p.y,'desktop');
        handle.setPointerCapture(e.pointerId);
      });
      handle.addEventListener('pointermove', e => { if (drag.win === this) { const p=point(e); dragTo(p.x,p.y); } });
      handle.addEventListener('pointerup', endDrag);
      handle.addEventListener('pointercancel', endDrag);
      resizeHandle.addEventListener('pointerdown', e => {
        e.stopPropagation(); const p=point(e); startResize(this,p.x,p.y);
        resizeHandle.setPointerCapture(e.pointerId);
      });
      resizeHandle.addEventListener('pointermove', e => { if (resizing.win === this) { const p=point(e); resizeTo(p.x,p.y); } });
      resizeHandle.addEventListener('pointerup', endResize);
      resizeHandle.addEventListener('pointercancel', endResize);
    }
  }

  /**
   * Changes the window's body size (used when an app window is rotated: the app surface and the
   * display change shape together).
   *
   * <p>The chrome is CSS — the bars keep their own heights and the body takes what is left — so this
   * only touches the two sizes the shell owns, plus the invisible planes that carry the hand's
   * drag/resize/touch: those were built in metres from the old size and are scaled by the ratio. The
   * 3D object itself is not touched, so the window does not move and does not scale.
   */
  setSize(w, h) {
    if (!(w > 0) || !(h > 0)) return;
    this.w = w; this.h = h;
    this.shell.style.width = w + 'px';
    this.el.style.width = w + 'px'; this.el.style.height = h + 'px';
    // The hit surface carries the hand's touch and drag: its geometry is in metres, built from the
    // window's size, so it is rebuilt (with the same curvature segments) instead of scaled — the
    // grab/resize handles are positioned from w/h by apply() and keep their own sizes.
    const segments = this.curve > 0 ? 32 : 1;
    this.hit.geometry.dispose();
    this.hit.geometry = new THREE.PlaneGeometry(this.w * PX, this.h * PX, segments, 1);
    this.hitSegments = segments;
    this.curveRadius = curveRadius(this.w, this.curve);
    this.bendHit();
    this.apply();
    layout();
    emit('wins', wins);
  }

  /**
   * Liga/desliga a curvatura 360 desta janela. A largura e o lugar no arco não mudam: só a
   * superfície — é por isso que o botão não precisa re-layoutar nada.
   */
  setCurve(angle) {
    this.curve = curveAngle(angle);
    this.curveRadius = curveRadius(this.w, this.curve);
    this.shell.dataset.curve = String(this.curve);
    const is360 = this.curve > 0 && !this.onboarding;
    this.shell.classList.toggle('cinema-360', is360);
    if (this.cinemaBar) this.cinemaBar.hidden = !is360;
    const button = this.el.querySelector('[data-act="curve"]');
    if (button) button.setAttribute('aria-pressed', String(this.curve > 0));
    if (is360) {
      document.documentElement.dataset.cinema360 = '1';
      window.NativeXR?.env?.('dark');
    } else if (!wins.some(w => w !== this && !w.hidden && !w.onboarding && w.curve > 0)) {
      delete document.documentElement.dataset.cinema360;
      if (document.documentElement.dataset.robloxBlackEnv !== '1') {
        window.NativeXR?.env?.(S.env || 'passthrough');
      }
    }
    // A malha de hit só é curvada quando há curvatura: plana continua sendo 1 segmento.
    const segments = this.curve > 0 ? 32 : 1;
    if (this.hitSegments !== segments) {
      this.hit.geometry.dispose();
      this.hit.geometry = new THREE.PlaneGeometry(this.w * PX, this.h * PX, segments, 1);
      this.hitSegments = segments;
    }
    this.bendHit();
    this.apply();
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
  }

  /** Deslocamento da superfície (metros) no px `x` da janela (0 = centro). */
  bulge(x) { return curveOffset(x, this.curveRadius) * PX; }

  /** Dobra a malha de hit no cilindro da curvatura (geometria em metros, escala 1). */
  bendHit() {
    const position = this.hit.geometry.attributes.position;
    if (this.curve <= 0) {
      for (let i = 0; i < position.count; i++) position.setZ(i, 0);
    } else {
      for (let i = 0; i < position.count; i++) position.setZ(i, curveOffset(position.getX(i) / PX, this.curveRadius) * PX);
    }
    position.needsUpdate = true;
    this.hit.geometry.computeBoundingSphere();
  }

  apply() {
    const o = this.obj;
    // Sem animação: a janela está onde deve estar já neste frame. O "voo" até o lugar roubava
    // frames do rastreamento das mãos (a cena inteira precisava ser reenviada enquanto deslizava)
    // e deixava a interface com cara de protótipo.
    o.position.copy(this.target);

    // rotação sai SÓ da posição da janela — a câmera não entra na conta
    const yaw = Math.atan2(-o.position.x, -o.position.z) * S.winCurve;
    const flat = Math.hypot(o.position.x, o.position.z) || .001;
    const pitch = Math.atan2(EYE - o.position.y, flat) * S.winTilt * -1;
    o.rotation.set(pitch, yaw, 0, 'YXZ');
    const scale=(this.onboarding ? COMFORT.welcomeScale : S.winScale) * this.resizeScale;
    o.scale.setScalar(PX * scale);

    this.hit.position.copy(o.position); this.hit.rotation.copy(o.rotation);
    this.hit.scale.setScalar(scale);

    // A alça de movimento fica fora; a de tamanho ocupa o canto inferior direito.
    const down = (this.h / 2 + 34) * PX * scale;
    this.grab.position.copy(o.position);
    this.grab.rotation.copy(o.rotation);
    this.grab.translateY(-down);
    this.grab.scale.setScalar(scale);

    this.resizeHit.position.copy(o.position);
    this.resizeHit.rotation.copy(o.rotation);
    // A alça de tamanho fica fora da borda, como o controle visual em .win-resize.
    const resizeOffset = 28;
    this.resizeHit.translateX((this.w / 2 + resizeOffset) * PX * scale);
    this.resizeHit.translateY(-(this.h / 2 + resizeOffset) * PX * scale);
    this.resizeHit.translateZ(this.bulge(this.w / 2) + .003);
    this.resizeHit.scale.setScalar(scale);

    o.updateMatrixWorld(true);
    this.hit.updateMatrixWorld(true);
    this.grab.updateMatrixWorld(true);
    this.resizeHit.updateMatrixWorld(true);
  }

  /**
   * Some/aparece a janela sem tocar em NADA do estado dela. Esconder tira a superfície do atlas (a
   * casca sai do fluxo e `obj.visible=false` faz o renderer nem criar painel) e do CSS3D. O
   * Raycaster do three NÃO olha `visible`, então o hit-test é cortado pelos filtros `w.hidden` em
   * hitAt/fistHit/toque próximo — nenhuma mão atravessa uma janela escondida.
   */
  setHidden(hidden) {
    const value = !!hidden;
    if (this.hidden === value) return;
    this.hidden = value;
    this.shell.hidden = value;              // sem pixels: nem no atlas, nem no CSS3D
    this.obj.visible = !value;              // o renderer nem cria painel para ela
    this.hit.visible = !value;
    this.grab.visible = !value && !this.onboarding;
    this.resizeHit.visible = !value && !this.onboarding;
    if (value && drag.win === this) endDrag();
    if (value && resizing.win === this) endResize();
    css3d.invalidate?.();                   // a cena mudou: reenvia o atlas neste frame
  }
}

function plane(w, h, win, segments = 1) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h, segments, 1), new THREE.MeshBasicMaterial({ visible: false }));
  m.userData.win = win; contentRoot.add(m); return m;
}

/* =================== layout — multitarefa em arco =================== */
/**
 * Multitarefa em arco: as janelas presas formam UMA fileira curva centrada, com até
 * ARC_CAPACITY (5) apps de vez — o arco é a superfície de multitarefa. Com mais de três apps a
 * quarta e a quinta vão para uma fileira superior centrada (arc.js), porque cinco janelas lado a
 * lado não cabem no campo de visão. Soltas (arrastadas) ficam onde o usuário largou.
 */
function layout() {
  const hasOpenAppWins = wins.some(w => !w.onboarding && !w.hidden && w.id !== 'left-quick-menu');
  for (const w of wins) {
    if (!w.onboarding) continue;
    if (w.id === 'spatial-launcher') {
      // Interface Library flutuante em tamanho amplo (igual à foto de referência 7e3d8ab40bd4dd3) a 0.84 m sobre a câmera traseira real.
      if (hasOpenAppWins) {
        w.resizeScale = 0.88;
        w.target.set(0, EYE - 0.22, -0.84);
      } else {
        w.resizeScale = 1.24;
        w.target.set(0, EYE - 0.01, -0.84);
      }
      w.apply();
    } else {
      w.target.set(0, EYE, -COMFORT.welcomeDistance);
    }
  }
  // Janela escondida (jogo em andamento) não entra no arco: ela volta exatamente para o lugar, o
  // tamanho e a curvatura que tinha quando o jogo começou.
  const pin = wins.filter(w => w.pinned && !w.onboarding && !w.hidden);
  const n = pin.length; if (!n) return;
  const dist = native?S.winDist:(-dockAt.z) + .5 + (S.winDist - 2.2);
  // A folga entre janelas vizinhas é de MEIA JANELA (arcStep), não os 8 cm de antes: com duas
  // janelas o passo antigo ainda era dividido por dois ([-passo/2, +passo/2]) e as duas se
  // sobrepunham. O passo é limitado pelo yaw alcançável do workspace, então com janelas grandes a
  // folga é a que couber; o arco do preview (mouse) mantém o passo próprio, menor.
  const widest = Math.max(...pin.map(w => w.w * w.resizeScale)) * PX * S.winScale;
  const step = native ? arcStep({ width: widest, dist, gap: .5, outerLimit: WINDOW_LIMITS.maxYaw - .06 })
    : Math.min(.78, Math.max(.52, .5 + n * .05));

  arcSlots(n, step).forEach(({ angle, row }, i) => {
    const w = pin[i];
    const hh = w.h * PX * S.winScale * w.resizeScale;
    // Keep the full window visibly above the dock in native Cardboard and desktop preview.
    // The 14 cm breathing gap is added to the dock's top edge before centring the window.
    const lift = dockAt.y + dockAt.h / 2 + .14 + hh / 2;
    const x = Math.sin(angle) * dist, z = -Math.cos(angle) * dist;
    // A fileira de cima sobe uma janela e meia e nunca passa do limite confortável do olhar.
    const y = row === 0 ? lift
      : Math.min(lift + hh * 2 * (ARC_TOP_ROW_STEP - 1) + hh, EYE + WINDOW_LIMITS.upperEdgeFromEye - hh);
    w.target.set(x, y, z);
  });

  if (!native) return;
  // Espaço livre: quando alguma coisa (uma janela solta que o usuário colocou ali, a dock, o
  // teclado) COBRE o lugar do arco, a janela presa desliza pelo mesmo arco até o lugar equivalente
  // mais próximo que esteja livre. Sem sobreposição o lugar do arco é devolvido intacto — o layout
  // de sempre não muda. Janelas soltas nunca são empurradas: quem escolheu aquele lugar foi o
  // usuário, e sobrepor de propósito continua sendo possível.
  const resolveStep = Math.min(step, windowAngle(widest, dist) * .6);
  for (const w of pin) {
    const halfW = w.w * PX * S.winScale * w.resizeScale / 2;
    const halfH = w.h * PX * S.winScale * w.resizeScale / 2;
    const spot = resolveSlot({
      desired: { x: w.target.x, y: w.target.y, z: w.target.z },
      occupied: occupiedBoxes(w), eye: EYE, step: resolveStep, distance: dist,
      halfWidth: halfW, halfHeight: halfH, outerLimit: WINDOW_LIMITS.maxYaw - .06, maxShift: 4,
    });
    w.target.set(spot.x, spot.y, spot.z);
  }
}
on('recenter', layout);
on('resize', layout);

export function open(spec) {
  const same = wins.find(w => w.id === spec.id);
  if (same) { focus(same); return same; }
  // Janelas escondidas pelo jogo não ocupam slot do arco e NUNCA são descartadas para dar lugar a
  // outra: posição, tamanho, curvatura e conteúdo delas têm que voltar exatamente iguais na saída.
  const apps = wins.filter(w => !w.onboarding && !w.hidden && w.id !== 'left-quick-menu');
  if (spec.id !== 'left-quick-menu' && apps.length >= ARC_CAPACITY) {
    // Multitarefa em arco: até 3 apps de vez. Com o arco cheio, o menos recente sai para o novo entrar.
    const lru = pickLru(apps);
    if (lru) { toast(`${t('arcFull')}: ${lru.title}`); close(lru); }
  }
  const w = new Win(spec);
  wins.push(w); layout(); focus(w);
  w.obj.position.copy(w.target);            // já nasce no lugar: nada de voar da dock
  // Janela fora do arco (`free`): nasce onde há espaço livre, para não cobrir a dock, o teclado ou
  // o que já está no mundo. É assim que o jogo posiciona o painel de ferramentas e o menu.
  if (spec.id === 'left-quick-menu') {
    w.pinned = false;
    w.shell.classList.add('free', 'lh-floating-win-shell');
    const at = spec.at || { x: -0.22, y: EYE - 0.04, z: -1.42 };
    w.target.set(at.x, at.y, at.z);
    w.obj.position.copy(w.target);
    w.resizeHandle.hidden = true;
    if (w.cinemaBar) w.cinemaBar.hidden = true;
    if (w.brightnessBar) w.brightnessBar.hidden = true;
    if (w.predefinedSlotsBar) w.predefinedSlotsBar.hidden = true;
  } else if (spec.free) {
    placeFree(w, spec.at);
  }
  if(w.onboarding){
    w.handle.hidden=true;w.resizeHandle.hidden=true;
    if(w.cinemaBar)w.cinemaBar.hidden=true;
    if(w.brightnessBar)w.brightnessBar.hidden=true;
    if(w.predefinedSlotsBar)w.predefinedSlotsBar.hidden=true;
  }
  w.apply();
  scene.updateMatrixWorld(true);
  css3d.invalidate?.();
  emit('wins', wins);
  return w;
}

/**
 * Lugar livre para uma janela fora do arco: avalia o que já ocupa o mundo (dock, teclado e o que
 * estiver visível) e escolhe o melhor lugar entre os candidatos do arco/anéis. Determinístico e
 * sem separação mínima forçada — só evita sobreposição e prefere o centro.
 */
function placeFree(w, at = null) {
  w.pinned = false;
  const halfW = w.w * PX * S.winScale * w.resizeScale / 2;
  const halfH = w.h * PX * S.winScale * w.resizeScale / 2;
  const lift = Number.isFinite(at?.y) ? at.y : dockAt.y + dockAt.h / 2 + .14 + halfH;
  const distance = Math.hypot(at?.x || 0, at?.z || -S.winDist) || S.winDist;
  const spot = chooseSpawn({
    occupied: occupiedBoxes(w), desired: { x: at?.x || 0, y: lift, z: at?.z ?? -S.winDist },
    eye: EYE, step: .8, distance, halfWidth: halfW, halfHeight: halfH,
    outerLimit: WINDOW_LIMITS.maxYaw - .06, lift, rings: 3, rows: 1,
  });
  if (spot) w.target.set(spot.x, spot.y, spot.z);
}

/** A mão está sobre alguma janela (superfície, alça de mover ou de tamanho) neste instante? */
export const windowUnder = (x, y) => hitAt(x, y) !== null;

export function close(w) {
  if (typeof w === 'string') w = wins.find(x => x.id === w);
  if (!w) return;
  const i = wins.indexOf(w); if (i < 0) return;
  // A janela dona do teclado acabou de sumir. Sem isto o teclado fica aberto apontando para um
  // campo destacado ou para uma superficie nativa que ja nao existe, e as teclas nao chegam em
  // lugar nenhum.
  const hosted = w.el.querySelector('[data-native-browser],[data-native-app]');
  const served = hosted?.dataset.nativeBrowser || (hosted ? 'app:' + hosted.dataset.nativeApp : null);
  if (kbTarget && (kbTarget.nativeId ? kbTarget.nativeId === served : w.el.contains(kbTarget))) keyboard(false);
  if (lastKbField && w.el.contains(lastKbField)) lastKbField = null;
  if (drag.win === w) endDrag();
  if (resizing.win === w) endResize();
  wins.splice(i, 1);
  w._cleanupQB?.();
  contentRoot.remove(w.obj); contentRoot.remove(w.hit); contentRoot.remove(w.grab); contentRoot.remove(w.resizeHit);
  w.shell.remove();
  if (focused === w) focused = wins[wins.length - 1] || null;
  if (!wins.some(x => !x.hidden && !x.onboarding && x.curve > 0)) {
    delete document.documentElement.dataset.cinema360;
    if (document.documentElement.dataset.robloxBlackEnv !== '1') {
      window.NativeXR?.env?.(S.env || 'passthrough');
    }
  }
  layout();
  css3d.invalidate?.();
  emit('wins', wins);
}
export function focus(w) {
  if (focused === w) return;
  focused = w;
  w.lastFocus = performance.now();          // ordem de foco = ordem de uso no arco (LRU)
  wins.forEach(x => x.el.classList.toggle('focus', x === focused));
}
/** Devolve a janela para cima da dock. */
function repin(w) {
  w.pinned = true;
  w.shell.classList.remove('free');
  layout();
  w.obj.position.copy(w.target);
  w.apply();
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
}
export const focusedWin = () => focused;

/* =================== mover e redimensionar =================== */
const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const drag = { win:null, source:null, hand:null, start:null, active:false, plane:null, anchor:null };
const resizing = { win:null, start:null, active:false, startScale:1, startDistance:1 };
const dockDrag = { source:null, start:null, active:false, plane:null, anchor:null };

const winDropSlotEl = document.createElement('div');
winDropSlotEl.className = 'win-drop-slot';
winDropSlotEl.dataset.windowId = 'drop-slot';
winDropSlotEl.hidden = true;
winDropSlotEl.innerHTML = `<div class="win-drop-slot-inner"><span class="win-drop-slot-badge"></span></div>`;
const winDropSlotObj = new CSS3DObject(winDropSlotEl);
winDropSlotObj.visible = false;
contentRoot.add(winDropSlotObj);
let dragSnapSlotPos = null;
let dragSnapReady = false;

function computePredefinedSlots(w) {
  const dist = native ? S.winDist : (-dockAt.z) + .5 + (S.winDist - 2.2);
  const hh = w.h * PX * S.winScale * w.resizeScale;
  const lift = dockAt.y + dockAt.h / 2 + .14 + hh / 2;
  const baseYaw = dockYaw || 0;
  const step = 0.56;
  return [0, -step, step].map(offset => {
    const a = baseYaw + offset;
    return new THREE.Vector3(Math.sin(a) * dist, lift, -Math.cos(a) * dist);
  });
}

export function setScreenBrightness(value) {
  const v = Math.max(10, Math.min(100, Math.round(Number(value) || 80)));
  S.brightness = v;
  save(S);
  const filterScale = (0.38 + (v / 100) * 0.62).toFixed(3);
  document.documentElement.style.setProperty('--nextvr-brightness', filterScale);
  document.documentElement.dataset.brightnessPercent = String(v);
  for (const inp of document.querySelectorAll('[data-win-brightness]')) {
    if (String(inp.value) !== String(v)) inp.value = String(v);
    inp.style.setProperty('--bri-fill', `${v}%`);
  }
  for (const inp of document.querySelectorAll('[data-lh-slider="brightness"], [data-q-range="brightness"]')) {
    if (String(inp.value) !== String(v)) inp.value = String(v);
    inp.style.setProperty('--fill', `${v}%`);
  }
  if (native) {
    window.NativeXR?.setBrightnessPercent?.(v);
    window.NativeXR?.setBrightness?.(v);
  }
  emit('brightness', v);
  css3d.invalidate?.();
  return v;
}
export const getScreenBrightness = () => Math.max(10, Math.min(100, Number(S.brightness ?? 80) || 80));

export function snapWindowToSlot(winOrId, slotKey = 'center') {
  const w = typeof winOrId === 'string'
    ? wins.find(x => x.id === winOrId)
    : (winOrId || focused || wins.find(x => !x.onboarding && !x.hidden));
  if (!w || w.onboarding) return null;
  const slots = computePredefinedSlots(w);
  const idx = slotKey === 'left' || slotKey === -1 ? 1
    : slotKey === 'right' || slotKey === 1 ? 2
    : 0;
  const targetPos = slots[idx] || slots[0];
  w.pinned = false;
  w.slotKey = idx === 1 ? 'left' : idx === 2 ? 'right' : 'center';
  w.shell.dataset.predefinedSlot = w.slotKey;
  w.shell.classList.add('free');
  w.target.copy(targetPos);
  w.obj.position.copy(w.target);
  w.apply();
  scene.updateMatrixWorld(true);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return { x: w.obj.position.x, y: w.obj.position.y, z: w.obj.position.z, slot: w.slotKey };
}
if (typeof window !== 'undefined') {
  window.nextvrSetScreenBrightness = setScreenBrightness;
  window.nextvrGetScreenBrightness = getScreenBrightness;
  window.nextvrSnapWindowToSlot = snapWindowToSlot;
}

function updateDropSlot(w) {
  if (!w || S.spatialLauncher || S.dockSnapSlot === 0) {
    hideDropSlot();
    return;
  }
  const slots = computePredefinedSlots(w);
  const others = wins.filter(x => x !== w && !x.onboarding && !x.hidden);
  const freeSlots = slots.filter(s => !others.some(o => o.obj.position.distanceTo(s) < 0.22));
  const pool = freeSlots.length ? freeSlots : slots;
  let best = pool[0], bestDist = w.obj.position.distanceTo(pool[0]);
  for (let i = 1; i < pool.length; i++) {
    const d = w.obj.position.distanceTo(pool[i]);
    if (d < bestDist) { best = pool[i]; bestDist = d; }
  }
  dragSnapSlotPos = best;
  const startLocal = drag.anchor?.center ? contentRoot.worldToLocal(drag.anchor.center.clone()) : w.obj.position;
  const movedEnough = w.obj.position.distanceTo(startLocal) > 0.04;
  dragSnapReady = movedEnough && bestDist <= 0.16;

  winDropSlotEl.style.width = w.w + 'px';
  winDropSlotEl.style.height = w.h + 'px';
  const badge = winDropSlotEl.querySelector('.win-drop-slot-badge');
  if (badge) badge.textContent = t('dockSnapHint');
  winDropSlotEl.classList.toggle('is-ready', dragSnapReady);
  winDropSlotEl.hidden = false;

  winDropSlotObj.position.copy(best);
  const yaw = Math.atan2(-best.x, -best.z) * S.winCurve;
  const flat = Math.hypot(best.x, best.z) || .001;
  const pitch = Math.atan2(EYE - best.y, flat) * S.winTilt * -1;
  winDropSlotObj.rotation.set(pitch, yaw, 0, 'YXZ');
  const scale = S.winScale * w.resizeScale;
  winDropSlotObj.scale.setScalar(PX * scale);
  winDropSlotObj.visible = true;
}

function hideDropSlot() {
  dragSnapSlotPos = null;
  dragSnapReady = false;
  if (winDropSlotObj.visible || !winDropSlotEl.hidden) {
    winDropSlotObj.visible = false;
    winDropSlotEl.hidden = true;
    winDropSlotEl.classList.remove('is-ready');
    css3d.invalidate?.();
  }
}

function setRay(nx, ny, target=ray) {
  camera.updateMatrixWorld(true); contentRoot.updateMatrixWorld(true);
  ndc.set(nx * 2 - 1, 1 - ny * 2);
  target.setFromCamera(ndc, camera);
  return target;
}
function halfHeight(w) { return w.h * PX * S.winScale * w.resizeScale / 2; }
function boundedPosition(w, point, radius=null) {
  const p=clampWindowPosition(point,halfHeight(w),EYE,radius);
  return new THREE.Vector3(p.x,p.y,p.z);
}
function startDrag(w, nx, ny, source='handle', hand=null) {
  if(w.onboarding || resizing.win)return false;
  if(drag.win)endDrag();
  focus(w);setRay(nx,ny);
  const center=w.obj.getWorldPosition(new THREE.Vector3());
  const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(ray.ray.direction.clone(),center);
  const hit=ray.ray.intersectPlane(plane,new THREE.Vector3());
  if(!hit)return false;
  // Âncora estável capturada NO MOMENTO DO GRAB: a janela segue deltas relativos a este ponto
  // fixo — nunca é reavaliada contra a posição defasada da janela nem contra o ponto onde o
  // gesto foi ativado (que já embutiria o salto que disparou o arrasto e o descartaria).
  //
  // O RAIO do grab também é capturado aqui: o plano do cursor é perpendicular ao olhar do momento
  // do grab, então uma janela fora do eixo andava por um plano inclinado em relação à esfera e
  // GANHAVA distância do olho — ela "ia para trás", longe da dock, enquanto era movida. Preso o
  // raio, mover só gira a janela em volta do usuário (mesma altura, mesma distância).
  const local=contentRoot.worldToLocal(center.clone());
  const radius=Math.hypot(local.x,local.z);
  Object.assign(drag,{win:w,source,hand,start:{x:nx,y:ny},active:false,plane,
    anchor:{hit:hit.clone(),center:center.clone(),radius,applied:new THREE.Vector3()}});
  return true;
}
function activateDrag() {
  const w=drag.win;if(!w || drag.active)return;
  drag.active=true;w.pinned=false;
  w.shell.classList.add('free','moving');
  layout();                               // só agora as outras janelas se reorganizam
  updateDropSlot(w);
}
function dragTo(nx, ny) {
  const w=drag.win;if(!w)return false;
  setRay(nx,ny);
  const hit=ray.ray.intersectPlane(drag.plane,new THREE.Vector3());
  if(!hit)return false;
  if(!drag.active) {
    if(!dragGestureActivated(drag.start,{x:nx,y:ny},viewport.width,viewport.height))return false;
    activateDrag();
  }
  const a=drag.anchor;
  const delta=hit.clone().sub(a.hit);
  a.applied.copy(stepDragDelta(a.applied,delta));
  // Delta relativo no espaço do mundo -> centro local; a âncora nunca é reavaliada contra o
  // estado defasado da janela, então não há retroalimentação (janela puxando de um lado para o
  // outro) nem acúmulo de erro: o mesmo delta devolve sempre a mesma posição.
  const world=a.center.clone().add(a.applied);
  // O raio do grab vai junto: mover nunca aproxima nem afasta a janela do olho (sem "ir pra trás").
  const limited=boundedPosition(w,contentRoot.worldToLocal(world),a.radius);
  w.target.copy(limited);
  w.obj.position.copy(w.target);           // a mão e a janela permanecem alinhadas
  updateDropSlot(w);
  return true;
}
function endDrag() {
  const w=drag.win;
  if(w){
    if(dragSnapReady && dragSnapSlotPos){
      w.target.copy(dragSnapSlotPos);
      w.obj.position.copy(w.target);
      w.apply();
    }
    w.shell.classList.remove('moving');
  }
  hideDropSlot();
  Object.assign(drag,{win:null,source:null,hand:null,start:null,active:false,plane:null,anchor:null});
}
function startDockDrag(nx,ny,source='pinch') {
  if(!dockVisible || drag.win || resizing.win)return false;
  if(dockDrag.start)endDockDrag();
  setRay(nx,ny);
  const center=dockObj.getWorldPosition(new THREE.Vector3());
  const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(ray.ray.direction.clone(),center);
  const hit=ray.ray.intersectPlane(plane,new THREE.Vector3());
  if(!hit)return false;
  Object.assign(dockDrag,{source,start:{x:nx,y:ny},active:false,plane,
    anchor:{hit:hit.clone(),center:center.clone(),applied:new THREE.Vector3()}});
  dockEl.classList.add('grab-armed');
  dockGrabEl.setAttribute('aria-pressed','true');
  return true;
}
function activateDockDrag() {
  if(!dockDrag.start || dockDrag.active)return;
  dockDrag.active=true;
  dockEl.classList.remove('grab-armed');
  dockEl.classList.add('moving');
}
function dockDragTo(nx,ny) {
  if(!dockDrag.start)return false;
  setRay(nx,ny);
  const hit=ray.ray.intersectPlane(dockDrag.plane,new THREE.Vector3());
  if(!hit)return false;
  if(!dockDrag.active) {
    if(!dragGestureActivated(dockDrag.start,{x:nx,y:ny},viewport.width,viewport.height))return false;
    activateDockDrag();
  }
  // Match window dragging: keep the grab anchor fixed and derive the dock center from the
  // current hand delta. Re-smoothing against the previous dock position added release lag.
  const a=dockDrag.anchor;
  const delta=hit.clone().sub(a.hit);
  a.applied.copy(stepDragDelta(a.applied,delta));
  const world=a.center.clone().add(a.applied);
  const local=contentRoot.worldToLocal(world);
  const stable=clampWindowPosition(local,dockAt.h/2,EYE);
  const safeDockY=Math.max(EYE-0.55,Math.min(EYE-0.08,stable.y));
  dockPlacement=new THREE.Vector3(stable.x,safeDockY,stable.z);
  dockYaw=Math.atan2(-stable.x,-stable.z);
  placeDock();
  return true;
}
function endDockDrag() {
  dockEl?.classList.remove('grab-armed','moving');
  dockGrabEl?.setAttribute('aria-pressed','false');
  Object.assign(dockDrag,{source:null,start:null,active:false,plane:null,anchor:null});
}

function pointerDistance(w,nx,ny) {
  camera.updateMatrixWorld(true);contentRoot.updateMatrixWorld(true);
  const center=w.obj.getWorldPosition(new THREE.Vector3()).project(camera);
  const cx=(center.x+1)/2,cy=(1-center.y)/2;
  return Math.hypot((nx-cx)*viewport.width,(ny-cy)*viewport.height);
}
function startResize(w,nx,ny) {
  if(w.onboarding || drag.win)return false;
  if(resizing.win)endResize();
  focus(w);
  Object.assign(resizing,{win:w,start:{x:nx,y:ny},active:false,startScale:w.resizeScale,
    startDistance:Math.max(1,pointerDistance(w,nx,ny))});
  return true;
}
function resizeTo(nx,ny) {
  const w=resizing.win;if(!w)return false;
  if(!resizing.active) {
    if(!resizeGestureActivated(resizing.start,{x:nx,y:ny},viewport.width,viewport.height))return false;
    resizing.active=true;w.shell.classList.add('resizing');
  }
  const baseHalf=w.h*PX*S.winScale/2;
  const maximum=Math.max(resizing.startScale,maxResizeAtHeight(w.obj.position.y,baseHalf,EYE));
  const wanted=resizeFromPointer(resizing.startScale,resizing.startDistance,pointerDistance(w,nx,ny),maximum);
  w.resizeScale=clampResize(stabilizeResize(w.resizeScale,wanted),maximum);
  w.shell.dataset.resizeScale=w.resizeScale.toFixed(3);
  return true;
}
function endResize() {
  if(resizing.win)resizing.win.shell.classList.remove('resizing');
  Object.assign(resizing,{win:null,start:null,active:false,startScale:1,startDistance:1});
}

/* =================== cursor da mão =================== */
function hitAt(x, y) {
  setRay(x,y);
  const list = [];
  // Resize/drag ficam antes da superfície e alguns milímetros à frente para não disputar o canto.
  // Janela escondida não existe para a mão: os planos ficam invisíveis e nem entram na lista.
  for (const w of wins) { if(w.hidden)continue; if(!w.onboarding)list.push(w.resizeHit,w.grab);list.push(w.hit); }
  const h = ray.intersectObjects(list, false)[0];
  if (!h) return null;
  const w = h.object.userData.win;
  if (h.object.userData.isResize) return { win:w, resize:true, distance:h.distance };
  if (h.object.userData.isHandle) return { win:w, handle:true, distance:h.distance };
  const local = h.object.worldToLocal(h.point.clone());
  const g = h.object.geometry.parameters;
  return { win: w, u: local.x / g.width + .5, v: .5 - local.y / g.height, distance:h.distance };
}
/** A janela sob o ponto, não só "há janela": o modo de jogo PhoneXR usa pra decidir entre UI e gatilho. */
export const windowHitAt = hitAt;
window.windowHitAt = hitAt;
let nativePress = null;
/* Pinch over window content: the DOWN is not sent yet — the click-vs-drag arbiter decides.
 * A still pinch becomes one clean tap on release; a sweeping one commits a drag (DOWN at the
 * pinch anchor, then moves). This is what keeps a YouTube click from arriving as a scrub. */
let pendingPress = null;
const activationTarget = el => el?.closest?.('button,a,input,textarea,select,[role="button"]') || el;
function shellPointer(press, action, x, y, target) {
  const currentTarget = target ? activationTarget(target) : null;
  if (action === 0) {
    press.target = currentTarget;
    press.activation = currentTarget;
  }
  const eventTarget = press.target || currentTarget;
  if (!eventTarget) return;
  const pointer = action === 0 ? 'pointerdown' : action === 1 ? 'pointerup' : action === 2 ? 'pointermove' : 'pointercancel';
  eventTarget.dispatchEvent(new PointerEvent(pointer, {
    bubbles: true, cancelable: true, pointerId: 1, pointerType: 'touch', isPrimary: true,
    button: 0, buttons: action === 0 || action === 2 ? 1 : 0, clientX: x, clientY: y,
  }));
  if (action === 1 && press.activation && press.activation === currentTarget) {
    // The shell is already executing in this WebView. Activate its own DOM directly instead of
    // round-tripping a synthetic Android touch through the atlas WebView: that path can leave
    // Chromium's touch target in :active without ever synthesizing click on some WebView builds.
    if (typeof press.activation.click === 'function') press.activation.click();
    if (press.activation.matches?.('input,textarea')) press.activation.focus();
  }
}
function sendPress(press, action, x = press.x, y = press.y, target = null) {
  if (press.id === 'shell' && press.win?.onboarding) shellPointer(press, action, x, y, target);
  else {
    window.NativeXR.handTouch(press.id, action, x, y);
    if (action === 1 && target) {
      const qbTile = target.closest?.('[data-qb-url],[data-qb-act]');
      if (qbTile) qbTile.click();
    }
  }
}
function pickInElement(root, u, v) {
  const rect = root.getBoundingClientRect();
  const clientX = rect.left + u * (rect.width || root.offsetWidth);
  const clientY = rect.top + v * (rect.height || root.offsetHeight);
  const fromPt = document.elementFromPoint(clientX, clientY);
  if (fromPt && root.contains(fromPt)) return fromPt;
  let best = null;
  const walk = node => {
    for (const c of node.children) {
      const r = c.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom) {
        best = c;
      }
      walk(c);
    }
  };
  walk(root);
  return best || root;
}
function applyLeftQuickSliderAtHit(hit, el) {
  const pill = el?.closest?.('.lh-vslider-pill');
  if (!pill || !hit?.win?.el) return false;
  const input = pill.querySelector('input[data-lh-slider]');
  if (!input) return false;
  const b = box(pill, hit.win.el);
  const py = hit.v * hit.win.el.offsetHeight;
  const frac = Math.max(0, Math.min(1, 1 - (py - b.t) / Math.max(1, b.b - b.t)));
  const min = Number.isFinite(Number(input.min)) ? Number(input.min) : 0;
  const max = Number.isFinite(Number(input.max)) ? Number(input.max) : 100;
  const val = Math.round(min + frac * (max - min));
  input.value = String(val);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
  return true;
}

function handTouch(hit, action) {
  const root = hit.win.el, px = hit.u * root.offsetWidth, py = hit.v * root.offsetHeight;
  const rect = root.getBoundingClientRect();
  const el = document.elementFromPoint(rect.left + px, rect.top + py) || deepPick(root, px, py);
  if (action === 0 || action === 2) {
    applyLeftQuickSliderAtHit(hit, el);
  }
  /*
   * O teclado segue o alvo do toque. Um campo assume o teclado; qualquer outra coisa na shell
   * (titulo, botao, fundo) solta. Reabrir no mesmo campo so reposiciona, entao o teclado nao
   * pisca ao pular de um input para outro da mesma janela. As superficies nativas ficam de fora
   * aqui: quem sabe o que de fato esta em foco dentro do WebView e o lado nativo, e ele decide.
   */
  if (action === 0 && !el?.closest('[data-native-browser],[data-native-app]')) {
    const f = editableField(el);
    if (f) keyboard(true, f); else keyboard(false);
  }
  /*
   * A hosted Android app window: the id the native side knows is "app:<package>" and the
   * coordinates it gets are normalized inside the app's display (the same rectangle the shader
   * samples). Touch is never synthesized into this DOM — everything here is forwarded to the real
   * app on the other side. A point on a letterbox bar is dropped instead of being forwarded.
   */
  /*
   * Um jogo de headset hospedado por NextVR: o shell NÃO manda toque pra ele. O quadro dele é o
   * render OpenXR do próprio jogo, movido pelo protocolo de controle do runtime PhoneXR — uma
   * pinça aqui já é o gatilho nesse fluxo (a ponte transforma o gesto de rastreamento em pacote
   * UDP). Sintetizar tap ou rotear coordenadas a uma WebView que não existe ia só causar um clique
   * numa superfície errada; a janela em si continua ganhando o gesto (mover pelo título, fechar),
   * que é este ramo saindo sem encaminhar nada.
   */
  const xr = el?.closest('[data-native-xr]');
  if (xr) { nativePress = null; return; }
  const app = el?.closest('[data-native-app]');
  if (app) {
    const ar = app.getBoundingClientRect();
    const point = appHostPoint(app.offsetWidth, app.offsetHeight,
      +(app.dataset.aspect || 0), rect.left + px - ar.left, rect.top + py - ar.top);
    if (action === 2 && !point && !nativePress) return;
    const id = 'app:' + app.dataset.nativeApp;
    if (nativePress && nativePress.id !== id) { sendPress(nativePress, 3); nativePress = null; }
    if (action === 0) { if (!point) return; nativePress = { id, win: hit.win, x: point.u, y: point.v }; }
    if (nativePress && nativePress.id === id) {
      if (point || action !== 2) {
        if (point) { nativePress.x = point.u; nativePress.y = point.v; }
        sendPress(nativePress, action, nativePress.x, nativePress.y);
      }
    }
    if (action === 1 || action === 3) nativePress = null;
    return;
  }
  const browser = el?.closest('[data-native-browser]');
  const br = browser?.getBoundingClientRect();
  const id = browser ? browser.dataset.nativeBrowser : 'shell';
  const x = rect.left + px - (br?.left || 0), y = rect.top + py - (br?.top || 0);
  if (nativePress && nativePress.id !== id) {
    sendPress(nativePress, 3);
    nativePress = null;
    if (action !== 0) return;
  }
  if (action === 0) nativePress = { id, win: hit.win, x, y };
  if (nativePress && nativePress.id === id) {
    nativePress.x = x; nativePress.y = y;
    sendPress(nativePress, action, x, y, el);
  }
  if (action === 1 || action === 3) nativePress = null;
}
function cancelPress() {
  if (nativePress) sendPress(nativePress, 3);
  nativePress = null; pendingPress = null; endDrag(); endResize(); endDockDrag();
}
on('pinchcancel', cancelPress);
function clickThrough(hit, type) {
  if (native) { handTouch(hit, type === 'down' ? 0 : 1); return; }
  const px = hit.u * hit.win.el.offsetWidth;
  const py = hit.v * hit.win.el.offsetHeight;
  const el = deepPick(hit.win.el, px, py); if (!el) return;
  if (type === 'down') { el.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })); hit.win._armed = el; }
  else {
    el.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
    if (hit.win._armed === el) {
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      // um pinch num campo de texto precisa focar, senão o teclado virtual nunca liga
      if (el.matches && el.matches('input,textarea')) el.focus();
    }
    hit.win._armed = null;
  }
}
function deepPick(root, px, py) {
  let best = null;
  const walk = node => {
    for (const c of node.children) {
      const o = box(c, root);
      if (px >= o.l && px <= o.r && py >= o.t && py <= o.b) { best = c; walk(c); }
    }
  };
  walk(root); return best || root;
}
function box(el, root) {
  let l = 0, t = 0, n = el;
  while (n && n !== root) { l += n.offsetLeft - n.scrollLeft; t += n.offsetTop - n.scrollTop; n = n.offsetParent; }
  return { l, t, r: l + el.offsetWidth, b: t + el.offsetHeight };
}

let winBrowserHoldTimer = null;
let winHoldConsumed = false;
let pinchOverridePt = null;
let pinchDirectConsumed = false;
const handOverAppByHand = new Map();
function clearWinBrowserHold() {
  if (winBrowserHoldTimer) {
    clearTimeout(winBrowserHoldTimer);
    winBrowserHoldTimer = null;
  }
}

const DIRECT_PINCH_SEL = 'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-nav],[data-spatial-act],[data-spatial-env],[data-store-launch],[data-install-gorilla],[data-launch-gorilla],.lib-tile,[data-qb-url],[data-fist-act],[data-fist-env],[data-entry-act],[data-entry-tab],[data-entry-env],[data-cinema-act],[data-win-brightness],[data-predefined-slot],[data-lh-app],[data-lh-act],[data-lh-slider],[data-q-range],[data-win-new-tab]';

function findDirectAppPoint(cx, cy) {
  if (typeof document !== 'undefined' && Number.isFinite(cx) && Number.isFinite(cy)) {
    const hudMenu = document.getElementById('left-hand-quick-menu');
    if (hudMenu && !hudMenu.hidden) {
      const fromHud = document.elementFromPoint(cx * viewport.width, cy * viewport.height);
      const lhMatch = fromHud?.closest?.('[data-lh-app],[data-lh-act],[data-lh-slider]');
      if (lhMatch) return { x: cx, y: cy, el: lhMatch, isHud: true };
    }
  }
  const dk = dockTest(cx, cy);
  if (dk) {
    const el = dk.popupOpt ? dk.el : dockBtns[dk.i];
    return { x: cx, y: cy, el: el || null, isDock: true };
  }
  const dkGrab = dockGrabTest(cx, cy);
  if (dkGrab) {
    return { x: cx, y: cy, el: null, isDockGrab: true };
  }
  const hit = hitAt(cx, cy);
  if (hit) {
    if (hit.handle || hit.resize) {
      return { x: cx, y: cy, el: null, hit, isWinControl: true };
    }
    const picked = pickInElement(hit.win.el, hit.u, hit.v);
    const matched = picked?.closest?.(DIRECT_PINCH_SEL) || null;
    if (matched) {
      return { x: cx, y: cy, el: matched, hit };
    }
  }
  return null;
}

function resolveDirectPinchPoint(handArg = null) {
  if (S.pinchOnApp === 0) return null;
  const h = handArg || cursor.hand;
  const p = h?.points;
  if (!p || p.length < 26) return null;
  if (Math.hypot(p[18] - p[15], p[19] - p[16]) <= 0.008 || Math.hypot(p[24] - p[18], p[25] - p[19]) <= 0.008) {
    return null;
  }
  const sx = Number(lastPhonePacket?.scaleX) || 1;
  const sy = Number(lastPhonePacket?.scaleY) || 1;
  const basePts = [];
  if (Number.isFinite(p[12]) && Number.isFinite(p[13]) && Number.isFinite(p[24]) && Number.isFinite(p[25])) {
    basePts.push([((p[12] + p[24]) * 0.5 - 0.5) * sx + 0.5, ((p[13] + p[25]) * 0.5 - 0.5) * sy + 0.5]);
  }
  if (Number.isFinite(p[24]) && Number.isFinite(p[25])) {
    basePts.push([(p[24] - 0.5) * sx + 0.5, (p[25] - 0.5) * sy + 0.5]);
  }
  if (p.length >= 30 && Number.isFinite(p[15]) && Number.isFinite(p[16]) && Number.isFinite(p[27]) && Number.isFinite(p[28])) {
    basePts.push([((p[15] + p[27]) * 0.5 - 0.5) * sx + 0.5, ((p[16] + p[28]) * 0.5 - 0.5) * sy + 0.5]);
  }
  if (Array.isArray(h.palm) && h.palm.length >= 2) {
    basePts.push([(h.palm[0] - 0.5) * sx + 0.5, (h.palm[1] - 0.5) * sy + 0.5]);
  }
  const offsets = [[0, 0], [0, -0.016], [0, 0.016], [-0.016, 0], [0.016, 0]];
  for (const [bx, by] of basePts) {
    for (const [ox, oy] of offsets) {
      const found = findDirectAppPoint(bx + ox, by + oy);
      if (found) return found;
    }
  }
  const recent = handOverAppByHand.get(h?.id || 'right');
  if (recent && (performance.now() - recent.at <= 380) && recent.el && document.body.contains(recent.el)) {
    return { x: recent.x, y: recent.y, el: recent.el };
  }
  return null;
}

let lastDragScrollPt = null;
function scrollDomContainerAt(win, u, v, dxNorm, dyNorm) {
  if (!win?.el) return false;
  const picked = pickInElement(win.el, u, v);
  let node = picked;
  let scrolled = false;
  while (node && node !== document.body) {
    if (node instanceof HTMLElement) {
      const canV = node.scrollHeight > node.clientHeight + 2;
      const canH = node.scrollWidth > node.clientWidth + 2;
      if (canV && Math.abs(dyNorm) > 1e-4) {
        node.scrollTop -= dyNorm * 1650;
        scrolled = true;
      }
      if (canH && Math.abs(dxNorm) > 1e-4) {
        node.scrollLeft -= dxNorm * 1650;
        scrolled = true;
      }
      if (scrolled) break;
    }
    if (node === win.el) break;
    node = node.parentElement;
  }
  if (!scrolled) {
    const track = win.el.querySelector('[data-spatial-scroll-track], .spatial-honeycomb, .st-quest-main, .st-main, .lib-grid, .set-body, .win-body');
    if (track instanceof HTMLElement) {
      if (track.scrollHeight > track.clientHeight + 2 && Math.abs(dyNorm) > 1e-4) {
        track.scrollTop -= dyNorm * 1650;
        scrolled = true;
      }
      if (track.scrollWidth > track.clientWidth + 2 && Math.abs(dxNorm) > 1e-4) {
        track.scrollLeft -= dxNorm * 1650;
        scrolled = true;
      }
    }
  }
  if (scrolled) css3d.invalidate?.();
  return scrolled;
}

on('pinchdown', () => {
  clearWinBrowserHold();
  winHoldConsumed = false;
  pinchOverridePt = null;
  pinchDirectConsumed = false;
  lastDragScrollPt = { x: cursor.x, y: cursor.y };
  let px = cursor.x, py = cursor.y;
  let h = hitAt(px, py);
  let kb = kbProbe(px, py);
  let dockGrab = dockGrabTest(px, py);
  let dk = dockTest(px, py);
  const hasDirectHit = Boolean(
    h?.resize ||
    h?.handle ||
    dockGrab ||
    dk ||
    (kb && kb.button) ||
    (h && pickInElement(h.win.el, h.u, h.v)?.closest?.('button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-store-launch],[data-launch-gorilla],.lib-tile,[data-qb-url],[data-fist-act],[data-fist-env],[data-native-app],[data-native-browser],[data-native-xr]'))
  );
  const alt = (S.fingerTouch !== 0 || !hasDirectHit) ? resolveDirectPinchPoint() : null;
  if (alt) {
    pinchOverridePt = alt;
    px = alt.x;
    py = alt.y;
    h = hitAt(px, py);
    kb = kbProbe(px, py);
    dockGrab = dockGrabTest(px, py);
    dk = dockTest(px, py);
    const isBrowserBtn = Boolean(
      alt.el?.dataset?.id === 'browser' ||
      alt.el?.dataset?.spatialBuiltin === 'browser' ||
      alt.el?.dataset?.app === 'browser'
    );
    if (!isBrowserBtn && alt.el && !h?.resize && !h?.handle && !dockGrab && !(kb && kb.button)) {
      if (triggerFingerTouchTap(alt.x, alt.y, alt.el)) {
        pinchDirectConsumed = true;
        fingerPokeFlashUntil = performance.now() + 220;
        return;
      }
    }
  }
  // The dock is intentionally in front of app windows. The keyboard follows the same rule: whoever
  // the ray reaches first takes the pinch, the other leaves the arbitration. Without it the
  // keyboard or dock was unreachable whenever a window sat behind it — especially when walking
  // close to the dock in bar mode.
  if (h?.resize) { startResize(h.win,px,py); return; }
  if (h?.handle) { startDrag(h.win,px,py,'handle',cursor.hand?.id); return; }
  if (dockGrab && (!h || dockGrab.distance <= (h.distance ?? Infinity) + 0.12) && (!kb || dockGrab.distance < kb.distance)) {
    startDockDrag(px,py,'pinch'); return;
  }
  if (dk && (!h || dk.distance <= (h.distance ?? Infinity) + 0.15) && (!kb || dk.distance < kb.distance)) {
    if (pinchOverridePt) { cursor.x = px; cursor.y = py; }
    dockPinch('down'); return;
  }
  if (kb && (!h || kb.distance < h.distance)) { kbPress(kb.button); return; }
  if (h) {
    focus(h.win);
    const picked = pickInElement(h.win.el, h.u, h.v);
    const browserTile = picked?.closest?.('[data-spatial-builtin="browser"], [data-app="browser"]');
    if (browserTile) {
      winBrowserHoldTimer = setTimeout(() => {
        winBrowserHoldTimer = null;
        winHoldConsumed = true;
        pendingPress = null;
        showBrowserTabMenu('spatial');
      }, 2000);
    }
    // Content press: hold the DOWN until the click-vs-drag arbiter classifies the gesture.
    pendingPress = { win: h.win, hit: h };
    return;
  }
  dockPinch('down');
});
on('pinchsample', () => {
  if (kbHeld) kbHold(performance.now());
  if (pendingPress && cursor.mode === 'drag' && !pinchOverridePt?.el) {
    clickThrough(pendingPress.hit, 'down');
    pendingPress = null;
  }
  if (cursor.mode === 'drag' && !pinchOverridePt?.el && !resizing.win && !drag.win && !dockDrag.start) {
    const prev = lastDragScrollPt || { x: cursor.x, y: cursor.y };
    const dx = cursor.x - prev.x;
    const dy = cursor.y - prev.y;
    lastDragScrollPt = { x: cursor.x, y: cursor.y };
    const hit = hitAt(cursor.x, cursor.y);
    if (hit && !hit.handle && !hit.resize) {
      scrollDomContainerAt(hit.win, hit.u, hit.v, dx, dy);
    }
  }
});
on('pinchup', () => {
  clearWinBrowserHold();
  lastDragScrollPt = null;
  if (pinchDirectConsumed) {
    pinchDirectConsumed = false;
    pinchOverridePt = null;
    pendingPress = null;
    return;
  }
  const ov = pinchOverridePt;
  pinchOverridePt = null;
  const px = ov ? ov.x : cursor.x;
  const py = ov ? ov.y : cursor.y;
  if (winHoldConsumed) {
    winHoldConsumed = false;
    pendingPress = null;
    return;
  }
  // The keyboard goes first: if it armed a key, this pinch belongs to it and nothing else sees the
  // release. Otherwise letting go of a key also clicked whatever window was behind it.
  if (kbHeld) { kbRelease(); return; }
  if (dockArmed >= 0 || dockArmedPopupOpt || dockHoldConsumed) {
    if (ov) { cursor.x = px; cursor.y = py; }
    dockPinch('up');
    return;
  }
  if (ov?.el && document.body.contains(ov.el)) {
    pendingPress = null;
    triggerFingerTouchTap(ov.x, ov.y, ov.el);
    return;
  }
  if (pendingPress && cursor.mode === 'drag') {
    // Classified a drag but the release beat the frame loop: commit the DOWN at the anchor now.
    clickThrough(pendingPress.hit, 'down'); pendingPress = null;
  }
  if (pendingPress) {
    // Click — or released before the decision window elapsed (a tap). DOWN and UP go out at the
    // SAME point so the page synthesizes a click, never a drag from between-sample movement.
    const h = hitAt(px, py);
    const target = (h && !h.handle && !h.resize && h.win === pendingPress.win) ? h : pendingPress.hit;
    pendingPress = null;
    clickThrough(target, 'down');
    clickThrough(target, 'up');
    return;
  }
  if (nativePress) {
    const h = hitAt(px, py);
    if (h && h.win === nativePress.win && !h.handle && !h.resize) handTouch(h, 1);
    else cancelPress();
    return;
  }
  if (resizing.win) { endResize(); return; }
  if (drag.win) { endDrag(); return; }
  if (dockDrag.start) {
    // Presentation prediction is useful while moving, but release must commit the latest real
    // hand sample so the dock cannot coast ahead after the pinch opens.
    dockDragTo(cursor.x,cursor.y);
    endDockDrag();
    return;
  }
  const dk = dockTest(px, py);
  const h = hitAt(px, py);
  if (dk && (!h || dk.distance <= (h.distance ?? Infinity) + 0.15)) {
    if (ov) { cursor.x = px; cursor.y = py; }
    dockPinch('up'); return;
  }
  if (h && !h.handle && !h.resize) { clickThrough(h, 'up'); return; }
  dockPinch('up');
});

/* =================== dock =================== */
const dockEl = document.createElement('div');
dockEl.className = 'dock';
const dockBrowserPopup = document.createElement('div');
dockBrowserPopup.className = 'browser-tab-popup dock-browser-popup';
dockBrowserPopup.dataset.browserTabMenu = 'dock';
dockBrowserPopup.hidden = true;
dockBrowserPopup.innerHTML = `
  <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
  <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA ANÔNIMA</button>
`;
dockBrowserPopup.addEventListener('click', e => {
  const optBtn = e.target.closest('[data-browser-opt]');
  if (!optBtn) return;
  e.stopPropagation();
  const mode = optBtn.dataset.browserOpt || 'new-tab';
  hideBrowserTabMenus();
  window.nextvrOpenBrowserOption?.(mode);
});
const dockGrabEl = document.createElement('button');
dockGrabEl.type = 'button';
dockGrabEl.className = 'dock-grab';
dockGrabEl.title = t('moveDock');
dockGrabEl.setAttribute('aria-label', t('moveDock'));
dockGrabEl.setAttribute('aria-pressed', 'false');
const dockObj = new CSS3DObject(dockEl);
contentRoot.add(dockObj);
const dockHit = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ visible: false }));
const dockMoveHit = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ visible: false }));
const dockPopupHit = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.14), new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide }));
contentRoot.add(dockHit, dockMoveHit, dockPopupHit);

export function hideBrowserTabMenus() {
  dockBrowserPopup.hidden = true;
  const sp = document.querySelector('[data-browser-tab-menu="spatial"]');
  if (sp) sp.hidden = true;
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
}

export function showBrowserTabMenu(where = 'dock') {
  if (where === 'spatial') {
    const sp = document.querySelector('[data-browser-tab-menu="spatial"]');
    if (sp) sp.hidden = false;
  } else {
    const b = dockButton('browser');
    if (b) {
      dockBrowserPopup.style.left = `${b.offsetLeft + b.offsetWidth / 2}px`;
    }
    dockBrowserPopup.hidden = false;
    placeDock();
  }
  window.NativeXR?.click?.();
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
}
if (typeof window !== 'undefined') {
  window.nextvrShowBrowserTabMenu = showBrowserTabMenu;
  window.nextvrHideBrowserTabMenus = hideBrowserTabMenus;
}
if (!native) {
  const point = e => ({ x:e.clientX / viewport.width, y:e.clientY / viewport.height });
  dockGrabEl.addEventListener('pointerdown', e => {
    e.preventDefault(); e.stopPropagation();
    const p=point(e);
    if (startDockDrag(p.x,p.y,'desktop')) dockGrabEl.setPointerCapture(e.pointerId);
  });
  dockGrabEl.addEventListener('pointermove', e => {
    if (dockDrag.source==='desktop') { const p=point(e); dockDragTo(p.x,p.y); }
  });
  dockGrabEl.addEventListener('pointerup', e => {
    if (dockDrag.source==='desktop') { endDockDrag(); if(dockGrabEl.hasPointerCapture(e.pointerId))dockGrabEl.releasePointerCapture(e.pointerId); }
  });
  dockGrabEl.addEventListener('pointercancel', endDockDrag);
}

/* Onboarding estilo Meta: enquanto não há idioma escolhido, SÓ a janelinha de idioma existe.
 * Esconder o CSS3DObject tira a dock do atlas (sem painel, sem pixels) e o gate em dockTest/
 * handTargets tira ela do hit-test da mão — a janela de idioma é a única superfície interativa.
 * Depois da escolha, a dock volta inteira com todas as funcionalidades e o idioma selecionado. */
let dockVisible = true;
let dockHidden = false;
export function setDockVisible(visible) {
  dockVisible = !!visible;
  dockObj.visible = dockVisible;
  if (!dockVisible) { dockArmed = -1; endDockDrag(); }
  css3d.invalidate?.();
}
export const dockShown = () => dockVisible;

/* Esconder para o jogo: a dock sai do atlas E do CSS3D sem perder o lugar onde estava. O elemento
 * tem `display:flex!important` na folha de estilo, então o inline precisa de !important também. */
export function setDockHidden(hidden) {
  const value = !!hidden;
  if (dockHidden === value) return dockHidden;
  dockHidden = value;
  dockEl.style.setProperty('display', value ? 'none' : '', 'important');
  dockHit.visible = dockMoveHit.visible = !value;
  setDockVisible(!value);
  css3d.invalidate?.();
  return dockHidden;
}
export const dockHiddenNow = () => dockHidden;

let dockItems = [], dockBtns = [];
// The dock is a CSS3D object; on first construction it is not in document yet.
export const dockButton = id => dockBtns.find(button => button.dataset.id === id) || null;
const dockWins = [];                       // { b, win } → ponto branco quando a janela está aberta

const WIFI_SVG = icon('wifi');
const BAT_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">'
  + '<rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/>'
  + '<rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>';
const AVATAR_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';

/**
 * items: { kind:'avatar'|'status'|'tool'|'sep' } ou app { id, svg|icon, bg, win, launcher }.
 * Tudo que tem `run` vira botão; só os botões entram no teste de toque da mão.
 */
export function buildDock(items) {
  dockItems = items; dockBtns = []; dockWins.length = 0;
  dockEl.innerHTML = '';

  for (const it of items) {
    if (it.kind === 'sep') { dockEl.appendChild(sep()); continue; }
    if (it.kind === 'spacer') { const sp = document.createElement('span'); sp.className = 'dock-spacer'; sp.style.width = '14px'; sp.style.display = 'inline-block'; dockEl.appendChild(sp); continue; }

    const b = document.createElement('button');
    b.dataset.id = it.id;
    b.title = it.label || '';
    b.setAttribute('aria-label', it.label || it.id);

    if (it.kind === 'avatar') {
      b.className = 'dock-av';
      b.innerHTML = S.profileAvatar
        ? `<img src="${S.profileAvatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`
        : AVATAR_SVG;
      if (S.profileName) b.title = S.profileName;
    } else if (it.kind === 'status') {
      b.className = 'dock-status';
      b.innerHTML = `<span class="dk-time">--:--</span><span class="dk-wifi">${WIFI_SVG}</span>`
        + `<span class="dk-bat">${BAT_SVG}<span class="dk-bat-percent"></span></span>`;
    } else if (it.kind === 'tool') {
      b.className = 'dock-tool'; b.innerHTML = it.svg;
    } else {
      b.className = 'dock-app' + (it.launcher ? ' dock-launcher' : '');
      if (it.bg) b.style.background = it.bg;
      b.innerHTML = it.launcher
        ? '<span class="dk-grid">' + '<i></i>'.repeat(9) + '</span>'
        : (it.svg || (it.icon ? `<img src="${it.icon}" alt="">` : `<span>${it.glyph || '•'}</span>`));
      if (it.win) {
        const d = document.createElement('i'); d.className = 'dock-dot'; b.appendChild(d);
        dockWins.push({ b, win: it.win });
      }
    }
    if (it.id === 'browser') {
      let ptrHoldTimer = null;
      b.addEventListener('pointerdown', () => {
        clearTimeout(ptrHoldTimer);
        ptrHoldTimer = setTimeout(() => {
          b.dataset.holdConsumed = '1';
          showBrowserTabMenu('dock');
        }, 2000);
      });
      const cancelPtrHold = () => { clearTimeout(ptrHoldTimer); ptrHoldTimer = null; };
      b.addEventListener('pointerup', cancelPtrHold);
      b.addEventListener('pointercancel', cancelPtrHold);
      b.addEventListener('pointerleave', cancelPtrHold);
    }
    b.addEventListener('click', () => {
      if (b.dataset.holdConsumed === '1') {
        b.dataset.holdConsumed = '0';
        return;
      }
      hideBrowserTabMenus();
      it.run();
    });
    dockEl.appendChild(b); dockBtns.push(b);
  }
  dockEl.appendChild(dockBrowserPopup);
  dockGrabEl.title = t('moveDock');
  dockGrabEl.setAttribute('aria-label', t('moveDock'));
  dockEl.appendChild(dockGrabEl);
  tick(); refreshNet(); paintBat(); syncDots(); placeDock();
}
function sep() { const s = document.createElement('span'); s.className = 'dock-sep'; return s; }

/* ponto branco sob o app aberto, como na dock do print */
function syncDots() {
  for (const { b, win } of dockWins) {
    const d = b.querySelector('.dock-dot');
    if (d) d.classList.toggle('on', wins.some(w => w.id === win));
  }
}
on('wins', syncDots);

/* Status do sistema: Date usa o relógio/fuso do Android WebView; bateria vem do sticky broadcast
 * nativo. A mesma cópia alimenta a dock e a Central de controle para não haver valores divergentes. */
const deviceStatus = { time: '--:--', date: '', batteryLevel: null, charging: false, online: navigator.onLine };
export const getDeviceStatus = () => ({ ...deviceStatus });
function publishDeviceStatus() { emit('device-status', getDeviceStatus()); }
function tick() {
  const c = dockEl.querySelector('.dk-time');
  const now = new Date();
  deviceStatus.time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  deviceStatus.date = now.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  if (c) c.textContent = deviceStatus.time;
  publishDeviceStatus();
}
tick();
setInterval(tick, 1000);

function refreshNet() {
  const w = dockEl.querySelector('.dk-wifi');
  deviceStatus.online = navigator.onLine;
  if (w) w.style.opacity = deviceStatus.online ? '1' : '.35';
  publishDeviceStatus();
}
addEventListener('online', refreshNet);
addEventListener('offline', refreshNet);

let batt = null;
function paintBat() {
  const el = dockEl.querySelector('.dk-bat');
  if (!batt) {
    if (el) el.style.display = 'none';
    deviceStatus.batteryLevel = null;
    deviceStatus.charging = false;
    publishDeviceStatus();
    return;
  }
  const level = Math.max(0, Math.min(1, Number(batt.level) || 0));
  const charging = !!batt.charging;
  deviceStatus.batteryLevel = level;
  deviceStatus.charging = charging;
  if (el) {
    el.style.display = '';
    const percent = el.querySelector('.dk-bat-percent');
    const f = el.querySelector('.fill');
    if (f) {
      f.setAttribute('width', String(Math.max(1.6, 13 * level)));
      f.setAttribute('fill', charging ? '#8de6c8' : (level < .2 ? '#ff6b6b' : 'currentColor'));
    }
    if (percent) percent.textContent = `${Math.round(level * 100)}%`;
    el.title = `${Math.round(level * 100)}%${charging ? ' · carregando' : ''}`;
  }
  publishDeviceStatus();
}
window.nextvrBattery = data => {
  try {
    const parsed = typeof data === 'string' ? JSON.parse(data) : data;
    if (parsed && typeof parsed.level === 'number') {
      batt = parsed;
      paintBat();
    }
  } catch {}
};
// In the APK the sticky-broadcast NativeXR value is authoritative; Chromium's Battery API may
// expose a synthetic 100% battery for the virtual WebView and must not overwrite it.
if (!native && navigator.getBattery) {
  navigator.getBattery().then(b => {
    batt = b;
    b.addEventListener('levelchange', paintBat);
    b.addEventListener('chargingchange', paintBat);
    paintBat();
  }).catch(() => {});
}

/** O teclado está aberto? (para o botão de teclado da dock) */
export const keyboardOpen = () => !!kbObj;

let dockArmed = -1;
let dockArmedPopupOpt = null;
let dockArmedPt = { x: -1, y: -1 };
let dockBrowserHoldTimer = null;
let dockHoldConsumed = false;
function clearDockBrowserHold() {
  if (dockBrowserHoldTimer) {
    clearTimeout(dockBrowserHoldTimer);
    dockBrowserHoldTimer = null;
  }
}
on('pinchcancel', () => {
  dockArmed = -1;
  dockArmedPopupOpt = null;
  dockHoldConsumed = false;
  clearDockBrowserHold();
  clearWinBrowserHold();
});
function dockPinch(type) {
  const r = dockTest(cursor.x, cursor.y);
  if (type === 'down') {
    clearDockBrowserHold();
    dockHoldConsumed = false;
    dockArmedPt = { x: cursor.x, y: cursor.y };
    if (r?.popupOpt) {
      dockArmed = -1;
      dockArmedPopupOpt = r.popupOpt;
      return;
    }
    dockArmedPopupOpt = null;
    dockArmed = r ? r.i : -1;
    if (dockArmed >= 0 && dockBtns[dockArmed]?.dataset?.id === 'browser') {
      dockBrowserHoldTimer = setTimeout(() => {
        dockBrowserHoldTimer = null;
        dockHoldConsumed = true;
        showBrowserTabMenu('dock');
      }, 2000);
    }
    return;
  }
  clearDockBrowserHold();
  if (dockHoldConsumed) {
    dockHoldConsumed = false;
    dockArmed = -1;
    dockArmedPopupOpt = null;
    return;
  }
  const armed = dockArmed;
  const armedPopup = dockArmedPopupOpt;
  dockArmed = -1;
  dockArmedPopupOpt = null;

  if (type === 'up') {
    const popupTarget = r?.popupOpt || armedPopup;
    if (popupTarget) {
      hideBrowserTabMenus();
      window.nextvrOpenBrowserOption?.(popupTarget);
      return;
    }
    let idx = (r && r.i === armed) ? r.i : -1;
    // Ao chegar perto da dock em bar, o movimento natural dos dedos ao soltar a pinça pode deslocar
    // ligeiramente o raio; se o utilizador soltou perto do ponto onde armou, confirma o clique no botão armado.
    if (idx < 0 && armed >= 0 && Math.hypot(cursor.x - dockArmedPt.x, cursor.y - dockArmedPt.y) < 0.085) {
      idx = armed;
    }
    if (idx < 0) return;
    const b = dockBtns[idx];
    if (b) {
      b.style.transform = 'scale(.88)';
      setTimeout(() => b.style.transform = '', 150);
      b.click();
    }
  }
}
function dockGrabTest(x,y) {
  if (!dockVisible || !dockGrabKey) return null;
  setRay(x,y);
  dockMoveHit.updateMatrixWorld(true);
  return ray.intersectObject(dockMoveHit,false)[0]||null;
}
function dockTest(x, y) {
  if (!dockVisible) return null;
  setRay(x,y);
  if (!dockBrowserPopup.hidden) {
    dockPopupHit.updateMatrixWorld(true);
    const pHit = ray.intersectObject(dockPopupHit, false)[0];
    if (pHit) {
      const pLocal = dockPopupHit.worldToLocal(pHit.point.clone());
      const popupOpt = pLocal.y >= 0 ? 'new-tab' : 'incognito-tab';
      const optEl = dockBrowserPopup.querySelector(`[data-browser-opt="${popupOpt}"]`);
      return { i: -1, popupOpt, el: optEl, distance: pHit.distance };
    }
  }
  dockHit.updateMatrixWorld(true);
  const hit = ray.intersectObject(dockHit, false)[0]; if (!hit) return null;
  const local = dockHit.worldToLocal(hit.point.clone());
  const g=dockHit.geometry.parameters;
  const px = (local.x / g.width + .5) * dockEl.offsetWidth;
  const py = (.5 - local.y / g.height) * dockEl.offsetHeight;
  for (let i = 0; i < dockBtns.length; i++) {
    const b = dockBtns[i];
    if (px >= b.offsetLeft - 4 && px <= b.offsetLeft + b.offsetWidth + 4
        && py >= b.offsetTop - 4 && py <= b.offsetTop + b.offsetHeight + 4) {
      return { i, distance: hit.distance, button: b };
    }
  }
  return null;
}

let dockKey = '', dockGrabKey='', dockYaw=0, dockPlacement=null;
on('recenter',()=>{
  dockYaw=0;kbPose.ready=false;dockPlacement=null;endDockDrag();
  for (const w of wins) {
    if (!w.onboarding && !w.hidden) {
      w.pinned = true;
      w.shell.classList.remove('free');
    }
  }
  placeDock();
  layout();
  for (const w of wins) if (!w.hidden) w.apply();
});
on('summon-dock',()=>{
  camera.updateMatrixWorld(true);contentRoot.updateMatrixWorld(true);
  const direction=camera.getWorldDirection(new THREE.Vector3()).transformDirection(contentRoot.matrixWorld.clone().invert());
  dockYaw=Math.atan2(-direction.x,-direction.z);
  kbPose.ready=false;              // o teclado sem dono vai junto com a dock; com dono, fica na janela
  dockPlacement=null;
  endDockDrag();
  placeDock(); // Deliberately no layout/recenter: existing windows remain anchored.
  window.NativeXR?.click();
});
function placeDock() {
  const land = viewport.width > viewport.height;
  const dist = (native?COMFORT.dockDistance:(land ? 1.42 : 1.75)) * S.dockDist;      // paisagem: mais perto
  const drop = native?-COMFORT.dockDrop:(land ? -.50 : -.60);
  const sc = PX * (native?COMFORT.dockScale:(land ? .74 : .88)) * S.dockSize;      // sem aumentar de tamanho

  if (dockPlacement) dockObj.position.copy(dockPlacement);
  else dockObj.position.set(-Math.sin(dockYaw)*dist, EYE + drop, -Math.cos(dockYaw)*dist);
  dockObj.rotation.set(.26, dockYaw, 0,'YXZ');
  dockObj.scale.setScalar(sc);

  const w = dockEl.offsetWidth * sc, h = dockEl.offsetHeight * sc;
  const key = w.toFixed(3) + 'x' + h.toFixed(3);
  if (w > 0 && key !== dockKey) {                       // só refaz quando muda de verdade
    dockKey = key;
    dockHit.geometry.dispose();
    dockHit.geometry = new THREE.PlaneGeometry(w, h);
    dockAt.h = h;
    if(!dockPlacement)layout();
  }
  const grabW=dockGrabEl.offsetWidth*sc, grabH=dockGrabEl.offsetHeight*sc;
  const grabKey=grabW.toFixed(3)+'x'+grabH.toFixed(3);
  if(grabW>0 && grabKey!==dockGrabKey) {
    dockGrabKey=grabKey;
    dockMoveHit.geometry.dispose();
    dockMoveHit.geometry=new THREE.PlaneGeometry(grabW,grabH);
  }
  dockHit.position.copy(dockObj.position);
  dockHit.rotation.copy(dockObj.rotation);
  dockPopupHit.position.copy(dockObj.position);
  dockPopupHit.rotation.copy(dockObj.rotation);
  const bBrowser = dockButton('browser');
  const bOffsetX = bBrowser && dockEl.offsetWidth > 0
    ? ((bBrowser.offsetLeft + bBrowser.offsetWidth * 0.5) - dockEl.offsetWidth * 0.5) * sc
    : 0;
  dockPopupHit.translateX(bOffsetX);
  dockPopupHit.translateY((dockEl.offsetHeight * 0.5 + 52) * sc);
  dockPopupHit.translateZ(0.005);
  dockMoveHit.position.copy(dockObj.position);
  dockMoveHit.rotation.copy(dockObj.rotation);
  dockMoveHit.translateY((dockEl.offsetHeight/2-dockGrabEl.offsetTop-dockGrabEl.offsetHeight/2)*sc);
  dockMoveHit.translateZ(.004);

  if (!dockPlacement && (dockAt.y !== dockObj.position.y || dockAt.z !== -dist)) {
    dockAt.y = dockObj.position.y; dockAt.z = -dist; layout();
  }
}

/* =================== teclado flutuante (estilo Meta Quest, deitado) =================== */
/* Layout Meta Quest (Screenshot_2026-10-20-19-10-52-394): 4 fileiras com números/símbolos sobrescritos,
 * tecla Enter branca arredondada à direita, Shift à esquerda e barra inferior com Ocultar, !123, Emoji, Espaço, Idioma e Ajustes. */
const ROWS = [
  ['q','w','e','r','t','y','u','i','o','p',{ k:'⌫', cls:'wide kb-bksp', icon:'backspace', label:'Apagar' }],
  ['a','s','d','f','g','h','j','k','l',{ k:'⏎', cls:'enter', icon:'enter', label:'Enter' }],
  [{ k:'⇧', cls:'wide kb-shift', icon:'shift', label:'Shift' },'z','x','c','v','b','n','m',',','.'],
  [{ k:'@close', cls:'util kb-hide', icon:'keyboard', label:'Fechar teclado' },
   { k:'@sym', cls:'util kb-sym', lbl:'!123', label:'Números e símbolos' },
   { k:'@emoji', cls:'util', icon:'smile', label:'Emoji' },
   { k:' ', cls:'space', lbl:' ' },
   { k:'@lang', cls:'util', icon:'globe', label:'Idioma' },
   { k:'@settings', cls:'util', icon:'settings', label:'Configurações' }],
];
const KEY_SUBS = {
  q:'1', w:'2', e:'3', r:'4', t:'5', y:'6', u:'7', i:'8', o:'9', p:'0',
  a:'@', s:'#', d:'$', f:'&', g:'*', h:'(', j:')', k:"'", l:'"',
  z:'%', x:'-', c:'+', v:'=', b:'/', n:';', m:':', ',':'!', '.':'?',
};
const EMOJI_CYCLE = ['🙂','😀','😂','❤️','👍','🙏','😍','😅'];
let emojiIndex = 0;
let kbObj = null, kbHit = null, kbTarget = null, kbOwner = null, kbShift = false, kbShiftLock = false, kbSym = false;
let kbHidden = false;
/**
 * O motor de digitacao (web/src/typing.js) entra por index.html antes deste bundle e e injetado
 * pelo lado nativo em cada pagina hospedada, com o MESMO arquivo. Os dois lados escrevem texto por
 * `key()`, entao cursor, beforeinput/input e Enter sao iguais num campo da casca e num campo de um
 * site real — o que a versao anterior nao era (aqui era `value +=`, la era commitText).
 */
const typing = window.__nextvrTyping;
const editableField = el => typing?.editable(el) || null;
/** Ultimo campo que recebeu texto: o botao do teclado na dock volta para ele, e nao para o vazio. */
let lastKbField = null;
/* Estados de tecla, os mesmos que web/src/typing.js expoe: 1 desce, 2 repete, 3 sobe. Uma tecla
 * inteira e 1+3, e o que um toque da. */
const KEY_DOWN = 1, KEY_REPEAT = 2, KEY_UP = 3;
/* Rastro das teclas no logcat (NextVR-HTML). Só no APK, e só no aperto e no keyup — nunca na
 * repetição, que a 11 Hz viraria hundreds de linhas por segundo. Num visor não há outra forma de ver
 * para onde a tecla foi, e é o que responde "por que não digitou?". */
const trace = native;

/**
 * Esconde/devolve o teclado flutuante sem destruir nada: o jogo some com ele junto com as janelas
 * e o devolve exatamente onde estava (posição, yaw, estado do shift).
 */
export function setKeyboardHidden(hidden) {
  kbHidden = !!hidden;
  if (!kbObj) return false;
  const value = !!hidden;
  kbObj.visible = !value;
  kbObj.element.style.setProperty('display', value ? 'none' : '', 'important');
  if (kbHit) kbHit.visible = !value;
  if (value) kbRelease();
  css3d.invalidate?.();
  return true;
}
export const keyboardShown = () => !!kbObj && kbObj.visible !== false;
export const keyboardHiddenNow = () => kbHidden;

/** A janela dona do teclado: e dela que ele tira o lugar e o azimute. */
function ownerWindow(target) {
  const node = target?.nativeId
    ? document.querySelector(target.nativeId.startsWith('app:')
        ? `[data-native-app="${target.nativeId.slice(4)}"]`
        : `[data-native-browser="${target.nativeId}"]`)
    : target;
  const shell = node?.closest?.('.win-shell');
  return shell ? wins.find(w => w.shell === shell) || null : null;
}

export function keyboard(on_, field) {
  if (!on_) {
    if (native) console.log('kb close; was serving', kbTarget?.nativeId || kbTarget?.tagName || 'nothing');
    // Solta a tecla segurada ANTES de esquecer o alvo: o keyup é o que faz um jogo parar de andar.
    kbRelease();
    if (kbObj) { contentRoot.remove(kbObj); contentRoot.remove(kbHit); kbObj.element.remove(); kbObj = null; }
    kbTarget = null; kbOwner = null; kbShift = kbShiftLock = kbSym = false;
    kbPose.ready = false;              // reabrir comecna do lugar da janela dona, sem correr de um lado
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    return;
  }
  /*
   * Sem alvo explicito (o botao da dock) o teclado volta para o ultimo campo em que se escreveu.
   * Sem nenhum dos dois ele abre assim mesmo: e o que a dock promete, e um teclado sem alvo ainda
   * e util para o usuario ver as teclas e escolher a proxima janela.
   */
  const wanted = field || lastKbField;
  // Um campo do DOM e focado e trazido para a vista; uma superficie nativa ja tem o campo em foco
  // do outro lado da ponte, e aqui so existe o endereco (`app:<pkg>` / id do browser).
  kbTarget = wanted && !wanted.nativeId ? typing?.focus(wanted) || null : wanted || null;
  if (kbTarget && !kbTarget.nativeId) lastKbField = kbTarget;
  kbOwner = ownerWindow(kbTarget);
  if (native) console.log('kb open for', kbTarget?.nativeId || kbTarget?.tagName || 'nothing',
    'in window', kbOwner?.id ?? 'none');
  if (kbObj) {
    placeKb();
    scene.updateMatrixWorld(true);
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    return;
  }   // ja aberto: so troca o alvo e deixa o teclado caminhar ate ele

  const el = document.createElement('div');
  el.className = 'kb';
  for (const row of ROWS) {
    const r = document.createElement('div'); r.className = 'kb-row';
    for (const item of row) {
      const k = typeof item === 'string' ? item : item.k;
      const b = document.createElement('button');
      b.className = 'key' + (typeof item === 'string' ? '' : ' ' + item.cls);
      if(typeof item==='string'){b.textContent=k; if(KEY_SUBS[k]) b.dataset.sub=KEY_SUBS[k];}
      else if(item.icon){b.innerHTML=icon(item.icon);b.setAttribute('aria-label',item.label);b.title=item.label;}
      else b.textContent=item.lbl||k;
      b.dataset.k = k;
      r.appendChild(b);
    }
    el.appendChild(r);
  }
  // Só no preview de desktop o teclado e um botão de verdade; no APK ele e um plano no mundo e quem
  // aperta e a mao (kbHold). O clique segue o mesmo ciclo pressionar/soltar da mao.
  el.addEventListener('click', e => {
    const b = e.target.closest('[data-k]'); if (!b) return;
    kbPress(b); kbRelease();
  });

  kbObj = new CSS3DObject(el);
  kbObj.scale.setScalar(PX * (native?COMFORT.keyboardScale:.9));
  contentRoot.add(kbObj);
  kbHit = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ visible: false }));
  contentRoot.add(kbHit);
  placeKb();
  scene.updateMatrixWorld(true);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
}

function shiftCycle() {
  // Meta Quest: um toque escreve em maiusculas uma vez; o segundo trava; o terceiro solta.
  if (!kbShift) { kbShift = true; kbShiftLock = false; }
  else if (!kbShiftLock) kbShiftLock = true;
  else { kbShift = false; kbShiftLock = false; }
  paintShift();
}

/** A tecla desceu, repetiu ou subiu. E o que faz som, pinta a tecla e escreve. */
function press(k, btn, phase, upShift) {
  // Shift e os utilitarios sao controles do proprio teclado: viram um caractere so na pagina se
  // fossem enviados, e `KeyboardEvent.key = '⇧'` nao e o Shift de um teclado de verdade. O shift
  // ja viaja junto de cada tecla, no flag.
  const writes = k !== '⇧' && !k.startsWith('@');
  const outKey = (writes && kbSym && KEY_SUBS[k]) ? KEY_SUBS[k] : k;
  if (phase === KEY_UP) {
    if (btn) btn.classList.remove('hot');
    // O keyup sai com o MESMO shift que o keydown, senão um jogo que compara os dois eventos vê a
    // tecla mudar de mão no meio do aperto.
    if (writes) type(outKey, outKey, !!upShift, KEY_UP);
    return;
  }
  if (phase === KEY_DOWN) {
    if (native) window.NativeXR.click();          // so o aperto estala
    if (btn) btn.classList.add('hot');
    if (k === '@close') { keyboard(false); return; }
    if (k === '⇧') { shiftCycle(); return; }
    if (k === '@sym') { kbSym = !kbSym; paintShift(); return; }
    if (k === '@lang' || k === '@settings') return;
    if (k === '@mic') { toast(t('micOff')); return; }
    if (k === '@emoji') { type(k, EMOJI_CYCLE[emojiIndex++ % EMOJI_CYCLE.length], false, KEY_DOWN); return; }
  }
  type(outKey, outKey, outKey === '⌫' || outKey === '⏎' || kbSym ? false : undefined, phase);
}

/**
 * Escreve UMA tecla. `ch` e o caractere a escrever (o emoji, quando a tecla e @emoji) e `shift` se a
 * tecla vai maiuscula. Os dois caminhos terminam no mesmo motor de digitacao: um campo do DOM e
 * resolvido aqui; uma superficie nativa vai por `NativeXR.key`, e o motor roda dentro do WebView.
 */
function type(k, ch, shift, phase) {
  if (!kbTarget) return false;
  const capital = shift === undefined ? kbShift : shift;
  if (kbTarget.nativeId) window.NativeXR.key(kbTarget.nativeId, ch, !!capital, phase || 0);
  else typing?.key(k, !!capital, phase || 0);
  if (trace && phase !== KEY_REPEAT) {
    /*
     * Uma linha por tecla apertada e uma por keyup (nunca por repetição): o console da casca sai no
     * logcat como NextVR-HTML, e num visor não há outra forma de ver para onde a tecla foi. Uma
     * tecla por digitação humana é ruído desprezível ao lado do PerfLog que já roda o tempo todo.
     */
    console.log('kb key ->', kbTarget.nativeId || (kbTarget.tagName + '.' + (kbTarget.type || '')),
      JSON.stringify(k), 'shift=' + !!capital, 'phase=' + (phase || 0));
  }
  // Shift avulso dura uma tecla; o travado permanece ate ser solto.
  if (phase !== KEY_UP && capital && kbShift && !kbShiftLock) { kbShift = false; paintShift(); }
  return true;
}
function paintShift() {
  if (!kbObj) return;
  for (const b of kbObj.element.querySelectorAll('[data-k="⇧"]'))
    b.dataset.state = !kbShift ? '' : kbShiftLock ? 'lock' : 'once';
  for (const b of kbObj.element.querySelectorAll('[data-k="@sym"]')) {
    b.textContent = kbSym ? 'ABC' : '!123';
    b.dataset.state = kbSym ? 'lock' : '';
  }
  for (const b of kbObj.element.querySelectorAll('[data-k]')) {
    const k = b.dataset.k;
    if (kbSym && KEY_SUBS[k]) {
      b.textContent = KEY_SUBS[k];
      b.dataset.sub = k;
    } else if (k.length === 1 && /[a-zç,.]/i.test(k)) {
      b.textContent = /[a-zç]/i.test(k) ? (kbShift ? k.toUpperCase() : k.toLowerCase()) : k;
      if (KEY_SUBS[k]) b.dataset.sub = KEY_SUBS[k];
    }
  }
}

let kbKey = '';
/** Inclinação do teclado deitado na direção do usuário (rad) — estilo Meta Quest. */
const KB_TILT = .35;
/** Azimute para onde o teclado caminha. `ready=false` = o proximo quadro e um teleporte seco. */
const kbPose = { yaw: 0, ready: false };
/** Diferença de angulo mais curta: −π..π, para o teclado nunca dar a volta completa no meio. */
const shortAngle = a => Math.atan2(Math.sin(a), Math.cos(a));

/**
 * Para onde o teclado vai: NA FRENTE da janela dona, na mesma direcao do olhar que a ve, sempre a
 * uma distancia confortavel do olho. Sem dona (o botao da dock), a frente da dock como antes. So o
 * azimute vem da janela — a altura e a distancia sao as de conforto, para o teclado nunca subir nem
 * descer junto com o titulo de uma janela arrastada.
 */
function kbAnchor() {
  const w = kbOwner;
  if (w && !w.hidden) {
    const { x, z } = w.obj.position;
    if (Math.hypot(x, z) > 1e-3) return Math.atan2(-x, -z);
  }
  return dockYaw;
}

function placeKb(dt = 0) {
  if (!kbObj) return;
  const wanted = kbAnchor();
  // O teleporte e curto, nao instantaneo: meio segundo e o teclado ja esta na frente da janela nova
  // e o olhar ainda sabe onde ele estava.
  if (!kbPose.ready) { kbPose.yaw = wanted; kbPose.ready = true; }
  else kbPose.yaw += shortAngle(wanted - kbPose.yaw) * (1 - Math.exp(-dt * 7));
  const yaw = kbPose.yaw;
  const distance=native?COMFORT.keyboardDistance:-dockAt.z-.35;
  kbObj.position.set(-Math.sin(yaw)*distance, EYE-(native?COMFORT.keyboardDrop:.68), -Math.cos(yaw)*distance);   // deitado como mesa, à frente do alvo
  // Deitado igual Meta Quest: -π/2 é o plano horizontal (teclado "deitado"), KB_TILT inclina
  // só o necessário na direção do usuário para ler e digitar. Aplicado a cada frame para
  // acompanhar a janela dona depois de arrastá-la, recenter ou summon.
  kbObj.rotation.set(-Math.PI / 2 + KB_TILT, yaw, 0, 'YXZ');
  const w = kbObj.element.offsetWidth * kbObj.scale.x, h = kbObj.element.offsetHeight * kbObj.scale.x;
  const key = w.toFixed(3) + 'x' + h.toFixed(3);
  if (w > 0 && key !== kbKey) {
    kbKey = key; kbHit.geometry.dispose();
    kbHit.geometry = new THREE.PlaneGeometry(w, h);
  }
  kbHit.position.copy(kbObj.position); kbHit.rotation.copy(kbObj.rotation);
}

/* =================== segurar a tecla: repeticao e deslize =================== */
/* Um teclado de verdade escreve quando o dedo DESCE, repete enquanto ele fica e só levanta no keyup.
 * A versao anterior so escrevia ao SOLTAR, o que tornava impossivel segurar uma tecla e exigia um
 * pinch inteiro por caractere. Repetir o caractere NAO e segurar a tecla: um jogo 3D no browser
 * anda no keydown e para no keyup, entao um keyup no meio do caminho e o personagem dando um passo
 * por letra. Aqui a tecla e armada no pinchdown, repete com keydown(repeat:true) e so sobe uma vez. */
const KB_REPEAT_DELAY = 700;   // ms com o dedo parado antes de repetir
const KB_REPEAT_RATE = 90;     // ms entre repeticoes
/** Estas teclas repetem; as de estado (shift) e as de utilitario nao. */
const repeats = k => k !== '⇧' && k !== '⏎' && !k.startsWith('@');
let kbHeld = null;             // { key, button, shift }
let kbRepeatAt = 0;

/** A tecla (ou o nada) sob o raio da mao, com a distancia para arbitrar contra as janelas. */
function kbProbe(x, y) {
  // O Raycaster do three nao liga para `visible`: o portao do teclado escondido e explicito.
  if (!kbObj || kbHidden) return null;
  ndc.set(x * 2 - 1, -(y * 2 - 1));
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObject(kbHit, false)[0]; if (!hit) return null;
  const local = kbHit.worldToLocal(hit.point.clone());
  const g = kbHit.geometry.parameters;
  const px = (local.x / g.width + .5) * kbObj.element.offsetWidth;
  const py = (.5 - local.y / g.height) * kbObj.element.offsetHeight;
  // A tecla e a ancora [data-k] do ponto, e nao o elemento mais fundo: as teclas de icone tem um
  // <svg> dentro, e apertar o icone de voltar/enter/shift tem de ser a mesma tecla que apertar o
  // fundo dela.
  return { distance: hit.distance, button: deepPick(kbObj.element, px, py)?.closest?.('[data-k]') || null };
}

/** O dedo desceu numa tecla: ela escreve na hora e fica segurada. */
function kbPress(button) {
  const key = button?.dataset?.k || null;
  kbRelease();                                   // solta o que estava preso antes
  if (!key) return false;
  // O shift fica preso no aperto: as repeticoes e o keyup falam com o mesmo modificador, senao um
  // `W` segurado viraria `w` no meio por causa do shift avulso.
  kbHeld = { key, button, shift: kbShift };
  press(key, button, KEY_DOWN);
  if (repeats(key)) kbRepeatAt = performance.now() + KB_REPEAT_DELAY;
  return true;
}
function kbRelease() {
  const held = kbHeld;
  kbHeld = null; kbRepeatAt = 0;
  // Só solta a tecla que estava apertada. O shift avulso é consumido na hora de escrever (type), e
  // limpá-lo aqui apagaria o shift travado que o usuário acabou de travar.
  if (held) press(held.key, held.button, KEY_UP, held.shift);
}
on('pinchcancel', kbRelease);

/**
 * Enquanto o dedo continua apertado: repete a tecla e troca quando o dedo desliza para outra. Só
 * solta quando o raio SAI do teclado — passar pelo vão entre duas teclas continua na mesma tecla,
 * como num teclado físico, em vez de engasgar a meio caminho.
 */
function kbHold(now) {
  if (!kbHeld) return false;
  const over = kbProbe(cursor.x, cursor.y);
  if (!over) { kbRelease(); return false; }
  const key = over.button?.dataset?.k || null;
  if (key && key !== kbHeld.key) { kbRelease(); return kbPress(over.button); }
  if (kbRepeatAt && now >= kbRepeatAt) {
    press(kbHeld.key, kbHeld.button, KEY_REPEAT);
    kbRepeatAt = now + KB_REPEAT_RATE;
  }
  return true;
}

/* =================== laço =================== */
let layoutSettings = '';
onFrame((dt, now) => {
  const nextSettings = `${S.winScale}:${S.winDist}`;
  if (layoutSettings !== nextSettings) { layoutSettings = nextSettings; layout(); }
  placeDock(); placeKb(dt);
  if (kbHeld) kbHold(now);   // o ciclo da tecla e do proprio teclado: nasce no pinchdown, morre no up
  if (pendingPress && cursor.mode === 'drag') {
    // Arbiter classified the held pinch as a drag: commit the content DOWN at the pinch anchor
    // exactly once; from here on the move stream below follows the hand.
    clickThrough(pendingPress.hit, 'down');
    pendingPress = null;
  }
  if (nativePress && cursor.active && cursor.down) {
    // DOM input follows the latest sample (a real detection or the native motion-model bridge) —
    // never the web-side display extrapolation (predictedCursor), which may overshoot.
    const h = hitAt(cursor.x, cursor.y);
    if (h && h.win === nativePress.win && !h.handle && !h.resize) handTouch(h, 2);
  }
  // World-space motion (drag/resize) follows the predicted cursor, so the window glides at the
  // display rate instead of stepping at the tracking rate — the same idea as native ray presentation.
  if ((resizing.win || (drag.win && drag.source!=='fist')) && cursor.active && cursor.down) {
    const p = predictedCursor(now);
    if (resizing.win) resizeTo(p.x,p.y);
    if (drag.win && drag.source!=='fist') dragTo(p.x,p.y);
  }
  if (dockDrag.start && cursor.active && cursor.down) {
    const p=predictedCursor(now); dockDragTo(p.x,p.y);
  }
  for (const w of wins) if(!w.hidden) w.apply();
  updateBackfaceStates();
});

function isCameraBehindObject(obj) {
  const m = obj.matrixWorld.elements;
  const dx = camera.position.x - m[12];
  const dz = camera.position.z - m[14];
  return (dx * m[8] + dz * m[10]) < 0;
}
function updateBackfaceStates() {
  scene.updateMatrixWorld(true);
  let changed = false;
  if (dockVisible && dockEl) {
    const nextDock = isCameraBehindObject(dockObj) ? '1' : '0';
    if (dockEl.dataset.backface !== nextDock) {
      dockEl.dataset.backface = nextDock;
      if (dockGrabEl) dockGrabEl.dataset.backface = nextDock;
      changed = true;
    }
  }
  if (kbObj && kbObj.visible !== false && kbObj.element) {
    const nextKb = isCameraBehindObject(kbObj) ? '1' : '0';
    if (kbObj.element.dataset.backface !== nextKb) {
      kbObj.element.dataset.backface = nextKb;
      changed = true;
    }
  }
  for (const w of wins) {
    if (w.hidden || !w.shell) continue;
    const nextWin = isCameraBehindObject(w.obj) ? '1' : '0';
    if (w.shell.dataset.backface !== nextWin) {
      w.shell.dataset.backface = nextWin;
      changed = true;
    }
  }
  if (changed) {
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
  }
}
if (typeof window !== 'undefined') window.__updateBackfaceStates = updateBackfaceStates;

const INTERACTIVE_SEL = 'button, .d-btn, .spatial-app-tile, .lib-tile, .st-card, .st-tab, .quick-control, .entry-card, .entry-seg-btn, .entry-btn, .entry-store-card, .entry-profile-box, .yt-link, [role="button"]';
let _choosingEl = null;

export function setNextvrChoosingElement(rawTarget) {
  const el = rawTarget?.closest?.(INTERACTIVE_SEL) || null;
  if (el === _choosingEl) return el;
  if (_choosingEl) _choosingEl.classList.remove('nextvr-choosing');
  _choosingEl = el;
  if (_choosingEl) _choosingEl.classList.add('nextvr-choosing');
  return _choosingEl;
}

export function playNextvrClickAnimation(rawTarget) {
  const el = rawTarget?.closest?.(INTERACTIVE_SEL) || (rawTarget instanceof HTMLElement ? rawTarget : null);
  if (!el) return null;
  setNextvrChoosingElement(el);
  el.classList.remove('nextvr-clicking');
  el.classList.add('nextvr-clicking');
  let ripple = el.querySelector(':scope > .nextvr-click-ripple');
  if (!ripple) {
    ripple = document.createElement('span');
    ripple.className = 'nextvr-click-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    el.appendChild(ripple);
  }
  ripple.classList.remove('is-active');
  ripple.classList.add('is-active');
  setTimeout(() => {
    el.classList.remove('nextvr-clicking');
    ripple?.remove();
  }, 340);
  return el;
}

if (typeof window !== 'undefined') {
  window.__nextvrChooseAnim = setNextvrChoosingElement;
  window.__nextvrClickAnim = playNextvrClickAnimation;
  document.addEventListener('pointerover', e => {
    if (e.target instanceof Element) setNextvrChoosingElement(e.target);
  }, { passive: true, capture: true });
  document.addEventListener('click', e => {
    if (e.target instanceof Element) playNextvrClickAnimation(e.target);
  }, { passive: true, capture: true });
}

if (native) {
  /** Chamado pelo nativo quando um toque cai numa superficie web.
 * `hasInput` diz se o elemento sob o dedo era um campo: com campo, o teclado abre (ou se
 * reposiciona, se ja estava aberto, seja no mesmo campo ou em outro da mesma pagina); sem
 * campo, fecha. Sem o segundo argumento (chamada antiga) assume que ha campo. */
window.nextvrBrowserFocus = (id, hasInput) => {
  if (hasInput !== false) keyboard(true, { nativeId: id });
  // Sem campo o teclado so fecha se NAO estiver servindo esta mesma pagina: tocar numa foto para
  // rolar a pagina nao pode derrubar o que se estava escrevendo nela.
  else if (kbTarget?.nativeId !== id) keyboard(false);
};
  /** Chamado pelo nativo quando o app de uma janela Android tem um editor em foco (backend de
   * acessibilidade ligado). E o equivalente ao acima para uma superficie que nao tem DOM. */
  window.nextvrAppFocus = id => keyboard(true, { nativeId: id });
  function updateBattery() { try { batt = JSON.parse(window.NativeXR.battery()); paintBat(); } catch {} }
  updateBattery(); setInterval(updateBattery, 10000);
  document.addEventListener('click', e => { if (e.target.closest('button')) window.NativeXR.click(); }, true);
}

/* PhoneXR spatial interaction adapter (VrHomeActivity b878d8b): fist grabs, metric NEAR touch,
 * edge highlights and FAR targets. Uses the existing Cardboard camera and reference window meshes;
 * none of these operations introduce head-position tracking. */
let nearContact = null;
const fistBefore = new Map();
/** Pinça segurada por 2 segundos com AS DUAS MÃOS recentra a dock/apps flutuantes e as janelas abertas (sem bolinha carregando). */
const recenterChord = new TwoHandMenuChord({ holdMs: 2000, graceMs: 260 });
/** Hands whose direct touch just ended while still pinched: the ray ignores them until the pinch opens. */
const pinchSuppressed = new Set();
let lastPhonePacket = { hands: [], consumed: new Set(), scaleX: 1, scaleY: 1 };
/** Sticky feedback windows: hand noise must not flash outlines or swap FAR/NEAR pointers. */
let hoverWin = null, hoverAt = 0;
const NEAR_HOVER_HOLD_MS = 350, NEAR_HOLD_MS = 240;
function phoneRay(x, y) {
  camera.updateMatrixWorld(true); contentRoot.updateMatrixWorld(true);
  const r = new THREE.Raycaster(); r.setFromCamera(new THREE.Vector2(x*2-1,1-y*2),camera); return r;
}
function palmScreen(h, packet, filtered=false) {
  const p=filtered?(h.grab||h.palm):h.palm;
  return { x:(p[0]-.5)*packet.scaleX+.5, y:(p[1]-.5)*packet.scaleY+.5 };
}
function windowPoint(w, point) {
  const local=w.obj.worldToLocal(point.clone()), scale=w.obj.getWorldScale(new THREE.Vector3());
  // Com curvatura 360 a superfície está à frente do plano z=0: `d` continua sendo a distância até
  // a superfície (é o que o toque direto compara), e u/v saem do x real do ponto.
  const surface=w.curve>0?curveOffset(local.x,w.curveRadius):0;
  return { local, scale, u:local.x/w.w+.5, v:.5-local.y/w.h, d:(local.z-surface)*scale.z };
}

/** Interseção do raio com a casca da janela: o plano z=0, ou o cilindro da curvatura 360. */
function surfaceHit(w, ray) {
  const center=w.obj.getWorldPosition(new THREE.Vector3());
  const normal=new THREE.Vector3(0,0,1).transformDirection(w.obj.matrixWorld);
  const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(normal,center);
  if(!(w.curve>0)) return ray.intersectPlane(plane,new THREE.Vector3());
  // Cilindro no espaço local da janela (px): x² + (z - raio)² = raio². O ramo da frente é o que
  // existe na tela; fora do arco a superfície segue reta na tangente e aí o plano responde.
  const inv=w.obj.matrixWorld.clone().invert();
  const origin=ray.origin.clone().applyMatrix4(inv);
  const direction=ray.origin.clone().add(ray.direction).applyMatrix4(inv).sub(origin).normalize();
  const R=w.curveRadius, a=direction.x*direction.x+direction.z*direction.z;
  if(a<1e-9) return ray.intersectPlane(plane,new THREE.Vector3());
  const b=2*(origin.x*direction.x+(origin.z-R)*direction.z);
  const c=origin.x*origin.x+(origin.z-R)*(origin.z-R)-R*R;
  const disc=b*b-4*a*c; if(disc<0) return ray.intersectPlane(plane,new THREE.Vector3());
  const root=Math.sqrt(disc);
  for(const t of [(-b-root)/(2*a),(-b+root)/(2*a)]) {
    if(!(t>0)) continue;
    const hit=origin.clone().addScaledVector(direction,t);
    if(Math.abs(hit.x)>R+1e-6 || hit.z>R) continue;
    return hit.applyMatrix4(w.obj.matrixWorld);
  }
  return ray.intersectPlane(plane,new THREE.Vector3());
}
function fistHit(r) {
  let best=null;
  for(const w of wins) {
    if(w.onboarding || w.hidden)continue;
    const center=w.obj.getWorldPosition(new THREE.Vector3());
    const hit=surfaceHit(w,r.ray);
    if(!hit)continue;
    const {local,scale}=windowPoint(w,hit);
    if(Math.abs(local.x)*scale.x>w.w*scale.x/2+.08 || Math.abs(local.y)*scale.y>w.h*scale.y/2+.08)continue;
    const distance=r.ray.origin.distanceTo(hit);
    if(!best || distance<best.distance) best={win:w,point:hit,distance};
  }
  return best;
}
const fingerPokeByHand = new Map();
let fingerPokeFlashUntil = 0;
let hoveredFingerEl = null;
let stickyFingerDotEl = null;

function updateStickyFingerDot(el, normX = null, normY = null) {
  if (typeof document === 'undefined') return;
  if (!el) {
    if (stickyFingerDotEl) stickyFingerDotEl.hidden = true;
    return;
  }
  const hud = document.getElementById('hud') || document.body;
  if (!stickyFingerDotEl || !document.body.contains(stickyFingerDotEl)) {
    stickyFingerDotEl = document.createElement('div');
    stickyFingerDotEl.id = 'finger-sticky-dot';
    stickyFingerDotEl.className = 'finger-sticky-dot';
    hud.appendChild(stickyFingerDotEl);
  }
  let xPct = Number.isFinite(normX) ? normX * 100 : 50;
  let yPct = Number.isFinite(normY) ? normY * 100 : 50;
  if (!Number.isFinite(normX) || !Number.isFinite(normY)) {
    const r = el.getBoundingClientRect?.();
    if (r && r.width > 0 && r.height > 0 && viewport.width > 0 && viewport.height > 0) {
      xPct = ((r.left + r.width * 0.5) / viewport.width) * 100;
      yPct = ((r.top + r.height * 0.5) / viewport.height) * 100;
    }
  }
  stickyFingerDotEl.style.left = `${Math.max(4, Math.min(96, xPct)).toFixed(1)}%`;
  stickyFingerDotEl.style.top = `${Math.max(4, Math.min(96, yPct)).toFixed(1)}%`;
  stickyFingerDotEl.hidden = false;
}

function setFingerHoverEl(nextEl, normX = null, normY = null) {
  if (hoveredFingerEl === nextEl) {
    if (hoveredFingerEl) updateStickyFingerDot(hoveredFingerEl, normX, normY);
    return;
  }
  if (hoveredFingerEl) {
    hoveredFingerEl.classList?.remove?.('finger-hover', 'finger-sticking');
  }
  hoveredFingerEl = nextEl || null;
  if (hoveredFingerEl) {
    hoveredFingerEl.classList?.add?.('finger-hover', 'finger-sticking');
    updateStickyFingerDot(hoveredFingerEl, normX, normY);
  } else {
    updateStickyFingerDot(null);
  }
}

function isIndexFingerPointing(h) {
  if (!h || h.pinching || h.fist || h.predicted) return false;
  const p = h.points;
  if (!p || p.length < 63) return false;
  if (Math.hypot(p[21] - p[18], p[22] - p[19]) < 0.005) return false;
  const wx = p[0], wy = p[1];
  const pipX = p[18], pipY = p[19];
  const tipX = p[24], tipY = p[25];
  const dTip = Math.hypot(tipX - wx, tipY - wy);
  const dPip = Math.hypot(pipX - wx, pipY - wy);
  return dTip > 0.045 && dTip > dPip * 1.05;
}

function resolvePointTarget(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  const kb = kbProbe(x, y);
  const h = hitAt(x, y);
  let dk = dockTest(x, y);
  if (!dk && dockVisible) {
    for (const dy of [-0.02, 0.02, -0.038, 0.038]) {
      dk = dockTest(x, y + dy);
      if (dk) break;
    }
  }
  if (kb && (!h || kb.distance < h.distance) && kb.button) {
    setNextvrChoosingElement(kb.button);
    return { kind: 'kb', x, y, el: kb.button, key: 'kb:' + (kb.button.dataset?.k || kb.button.textContent || '') };
  }
  if (dk && (!h || dk.distance <= (h.distance ?? Infinity) + 0.15)) {
    if (dk.popupOpt && dk.el) {
      setNextvrChoosingElement(dk.el);
      return { kind: 'dock-popup', x, y, el: dk.el, popupOpt: dk.popupOpt, key: 'dock-popup:' + dk.popupOpt };
    }
    if (dockBtns[dk.i]) {
      const b = dockBtns[dk.i];
      setNextvrChoosingElement(b);
      return { kind: 'dock', x, y, el: b, key: 'dock:' + (b.dataset?.id || dk.i) };
    }
  }
  if (h && !h.handle && !h.resize) {
    const targetEl = pickInElement(h.win.el, h.u, h.v);
    const clickable = targetEl?.closest?.('button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-spatial-env],[data-fist-act],[data-fist-env],[data-qb-url],[data-browser-opt],[data-id],[data-act],[data-lang]') || null;
    const nativeSurf = targetEl?.closest?.('[data-native-browser],[data-native-app],[data-native-xr]') || null;
    if (clickable) {
      setNextvrChoosingElement(clickable);
      const idAttr = clickable.dataset?.browserOpt || clickable.dataset?.spatialBuiltin || clickable.dataset?.spatialAndroid || clickable.dataset?.spatialXr || clickable.dataset?.spatialScroll || clickable.dataset?.spatialEnv || clickable.dataset?.fistAct || clickable.dataset?.fistEnv || clickable.dataset?.qbUrl || clickable.dataset?.id || clickable.dataset?.act || clickable.dataset?.lang || clickable.getAttribute('aria-label') || clickable.title || clickable.textContent?.trim()?.slice(0, 24) || 'btn';
      return { kind: 'win', x, y, el: clickable, hit: h, key: `win:${h.win.id}:${idAttr}` };
    }
    if (nativeSurf) {
      const qx = Math.round(h.u * 16), qy = Math.round(h.v * 12);
      return { kind: 'win-surf', x, y, el: nativeSurf, hit: h, key: `surf:${h.win.id}:${qx}:${qy}` };
    }
  }
  if (dk?.popupOpt && dk.el) {
    setNextvrChoosingElement(dk.el);
    return { kind: 'dock-popup', x, y, el: dk.el, popupOpt: dk.popupOpt, key: 'dock-popup:' + dk.popupOpt };
  }
  if (dk && dockBtns[dk.i]) {
    const b = dockBtns[dk.i];
    setNextvrChoosingElement(b);
    return { kind: 'dock', x, y, el: b, key: 'dock:' + (b.dataset?.id || dk.i) };
  }
  return null;
}

function resolveFingerTarget(h, packet) {
  const p = h.points;
  const sx = Number(packet?.scaleX) || 1;
  const sy = Number(packet?.scaleY) || 1;
  const offsets = [
    [0, 0],
    [0, 0.015],
    [0, -0.015],
    [0.015, 0],
    [-0.015, 0],
  ];
  if (p && p.length >= 26 && Number.isFinite(p[24]) && Number.isFinite(p[25])) {
    const tx = (p[24] - 0.5) * sx + 0.5;
    const ty = (p[25] - 0.5) * sy + 0.5;
    for (const [ox, oy] of offsets) {
      const hit = resolvePointTarget(tx + ox, ty + oy);
      if (hit) return hit;
    }
    if (Number.isFinite(p[12]) && Number.isFinite(p[13])) {
      const px = ((p[12] + p[24]) * 0.5 - 0.5) * sx + 0.5;
      const py = ((p[13] + p[25]) * 0.5 - 0.5) * sy + 0.5;
      for (const [ox, oy] of offsets) {
        const pinchHit = resolvePointTarget(px + ox, py + oy);
        if (pinchHit) return pinchHit;
      }
    }
    const dx = (p[21] - 0.5) * sx + 0.5;
    const dy = (p[22] - 0.5) * sy + 0.5;
    const dipHit = resolvePointTarget(dx, dy);
    if (dipHit) return dipHit;
  }
  if (Array.isArray(h.aim) && h.aim.length >= 2) {
    const aimPt = screenPoint(h.aim);
    for (const [ox, oy] of offsets) {
      const aimHit = resolvePointTarget(aimPt.x + ox, aimPt.y + oy);
      if (aimHit) return aimHit;
    }
  }
  return null;
}

function triggerFingerTouchTap(x, y, preferredEl = null) {
  if (preferredEl?.dataset?.browserOpt) {
    hideBrowserTabMenus();
    window.nextvrOpenBrowserOption?.(preferredEl.dataset.browserOpt);
    css3d.invalidate?.(); css3d.render?.(scene, camera);
    return true;
  }
  if (preferredEl && dockBtns.includes(preferredEl)) {
    preferredEl.classList.add('finger-pressed');
    preferredEl.style.transform = 'scale(.88)';
    setTimeout(() => { preferredEl.style.transform = ''; preferredEl.classList.remove('finger-pressed'); }, 160);
    playNextvrClickAnimation(preferredEl);
    preferredEl.click();
    css3d.invalidate?.(); css3d.render?.(scene, camera);
    return true;
  }
  const kb = kbProbe(x, y);
  const h = hitAt(x, y);
  const dk = dockTest(x, y);
  if (kb && (!h || kb.distance < h.distance)) {
    kbPress(kb.button);
    setTimeout(() => kbRelease(), 55);
    return true;
  }
  if (dk && (!h || dk.distance <= (h.distance ?? Infinity) + 0.15)) {
    if (dk.popupOpt) {
      hideBrowserTabMenus();
      window.nextvrOpenBrowserOption?.(dk.popupOpt);
      return true;
    }
    if (dockBtns[dk.i]) {
      const b = dockBtns[dk.i];
      b.classList.add('finger-pressed');
      b.style.transform = 'scale(.88)';
      setTimeout(() => { b.style.transform = ''; b.classList.remove('finger-pressed'); }, 160);
      playNextvrClickAnimation(b);
      b.click();
      css3d.invalidate?.(); css3d.render?.(scene, camera);
      return true;
    }
  }
  if (h && !h.handle && !h.resize) {
    focus(h.win);
    const targetEl = (preferredEl && h.win.el.contains(preferredEl)) ? preferredEl : pickInElement(h.win.el, h.u, h.v);
    if (applyLeftQuickSliderAtHit(h, targetEl)) {
      css3d.invalidate?.(); css3d.render?.(scene, camera);
      return true;
    }
    const clickable = targetEl?.closest?.('button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url],[data-lh-app],[data-lh-act],[data-lh-slider]') || targetEl;
    if (clickable?.classList) {
      clickable.classList.add('finger-pressed');
      setTimeout(() => clickable.classList?.remove?.('finger-pressed'), 180);
      playNextvrClickAnimation(clickable);
    }
    let clicked = false;
    const onClick = () => { clicked = true; };
    clickable?.addEventListener?.('click', onClick, { once: true });
    clickThrough(h, 'down');
    clickThrough(h, 'up');
    clickable?.removeEventListener?.('click', onClick);
    if (!clicked && clickable && (!clickable.closest?.('[data-native-browser],[data-native-app],[data-native-xr]') || clickable.matches?.('[data-qb-url],[data-qb-act]'))) {
      clickable.click?.();
    }
    css3d.invalidate?.(); css3d.render?.(scene, camera);
    return true;
  }
  if (dk?.popupOpt) {
    hideBrowserTabMenus();
    window.nextvrOpenBrowserOption?.(dk.popupOpt);
    return true;
  }
  if (dk && dockBtns[dk.i]) {
    const b = dockBtns[dk.i];
    b.classList.add('finger-pressed');
    b.style.transform = 'scale(.88)';
    setTimeout(() => { b.style.transform = ''; b.classList.remove('finger-pressed'); }, 160);
    playNextvrClickAnimation(b);
    b.click();
    css3d.invalidate?.(); css3d.render?.(scene, camera);
    return true;
  }
  if (preferredEl && typeof preferredEl.click === 'function' && document.body.contains(preferredEl)) {
    preferredEl.classList?.add?.('finger-pressed');
    setTimeout(() => preferredEl.classList?.remove?.('finger-pressed'), 160);
    playNextvrClickAnimation(preferredEl);
    preferredEl.click();
    css3d.invalidate?.(); css3d.render?.(scene, camera);
    return true;
  }
  return false;
}

function handBoneSpan2D(p) {
  if (!p || p.length < 63) return 0;
  return (
    Math.hypot(p[15] - p[0], p[16] - p[1]) +
    Math.hypot(p[51] - p[0], p[52] - p[1]) +
    Math.hypot(p[51] - p[15], p[52] - p[16]) +
    Math.hypot(p[27] - p[0], p[28] - p[1])
  );
}

const fingerScrollByHand = new Map();

function applyFingerTouchScroll(scrollSt, screenX, screenY, stepDx, stepDy) {
  const hit = hitAt(screenX, screenY) || scrollSt.winHit;
  if (!hit || !hit.win || hit.win.hidden) return false;
  scrollSt.winHit = hit;
  const winEl = hit.win.el;
  const picked = pickInElement(winEl, hit.u, hit.v);
  const nativeSurf = picked?.closest?.('[data-native-browser],[data-native-app]');
  if (nativeSurf) {
    if (!scrollSt.nativeDownSent) {
      scrollSt.nativeDownSent = true;
      handTouch(hit, 0);
    } else {
      handTouch(hit, 2);
    }
    return true;
  }
  let vEl = null, hEl = null;
  let node = picked;
  while (node && node !== document.body) {
    if (node instanceof HTMLElement) {
      if (!vEl && node.scrollHeight > node.clientHeight + 2) vEl = node;
      if (!hEl && node.scrollWidth > node.clientWidth + 2) hEl = node;
      if (vEl && hEl) break;
    }
    if (node === winEl) break;
    node = node.parentElement;
  }
  if (!vEl || !hEl) {
    const candidates = winEl.querySelectorAll('[data-spatial-scroll-track], .spatial-honeycomb, .st-quest-main, .st-main, .lib-grid, .set-body, .win-body');
    for (const c of candidates) {
      if (c instanceof HTMLElement) {
        if (!vEl && c.scrollHeight > c.clientHeight + 2) vEl = c;
        if (!hEl && c.scrollWidth > c.clientWidth + 2) hEl = c;
      }
    }
  }
  let didScroll = false;
  if (vEl && Math.abs(stepDy) > 1e-4) {
    if (scrollSt.dirY === 0) {
      // Se a página já está no topo (scrollTop <= 4) e o utilizador arrasta o dedo para baixo ("arrastar pra baixo"),
      // rola para baixo (+1); caso contrário usa arrasto natural (-1) para subir/descer livremente.
      scrollSt.dirY = (vEl.scrollTop <= 4 && (screenY - scrollSt.startScreenY) > 0.012) ? 1 : -1;
    }
    vEl.scrollTop += scrollSt.dirY * stepDy * 1850;
    didScroll = true;
  }
  if (hEl && Math.abs(stepDx) > 1e-4) {
    if (scrollSt.dirX === 0) {
      scrollSt.dirX = (hEl.scrollLeft <= 4 && (screenX - scrollSt.startScreenX) > 0.012) ? 1 : -1;
    }
    hEl.scrollLeft += scrollSt.dirX * stepDx * 1850;
    didScroll = true;
  }
  if (didScroll) css3d.invalidate?.();
  return didScroll;
}

function endFingerTouchScroll(handId) {
  const st = fingerScrollByHand.get(handId);
  if (st?.nativeDownSent && st.winHit) {
    handTouch(st.winHit, 1);
  }
  fingerScrollByHand.delete(handId);
}

function updateFingerPoke(h, packet, nowMs) {
  if (S.fingerTouch === 0) {
    fingerPokeByHand.delete(h?.id);
    endFingerTouchScroll(h?.id);
    setFingerHoverEl(null);
    return false;
  }
  const p = h?.points;
  const currentSt = fingerPokeByHand.get(h?.id);

  // Atualiza sempre a memória do app sob a mão para que a "pinça sem raio" abra o app ao fazer pinça encima dele
  if (p && p.length >= 26 && Math.hypot(p[18] - p[15], p[19] - p[16]) > 0.008) {
    const hoverTarget = resolveFingerTarget(h, packet);
    if (hoverTarget?.el) {
      handOverAppByHand.set(h.id || 'right', { x: hoverTarget.x, y: hoverTarget.y, el: hoverTarget.el, at: nowMs });
    }
  }

  if (!isIndexFingerPointing(h)) {
    const wasScrolling = fingerScrollByHand.get(h?.id)?.scrolling;
    endFingerTouchScroll(h?.id);
    if (
      !wasScrolling &&
      currentSt &&
      !currentSt.latched &&
      !h?.pinching &&
      !h?.fist &&
      !h?.predicted &&
      p &&
      p.length >= 26 &&
      (nowMs - currentSt.enterAt >= 40) &&
      (nowMs - currentSt.lastSeenAt <= 220) &&
      (nowMs - currentSt.lastTapAt >= 360) &&
      Math.hypot(p[0] - (currentSt.wristX ?? p[0]), p[1] - (currentSt.wristY ?? p[1])) <= 0.045
    ) {
      const tapped = triggerFingerTouchTap(currentSt.tapX, currentSt.tapY, currentSt.targetEl);
      fingerPokeByHand.delete(h?.id);
      setFingerHoverEl(null);
      if (tapped) {
        fingerPokeFlashUntil = nowMs + 220;
        return true;
      }
    }
    fingerPokeByHand.delete(h?.id);
    setFingerHoverEl(null);
    return false;
  }
  const tipX = (p && p.length >= 26) ? p[24] : 0.5;
  const tipY = (p && p.length >= 26) ? p[25] : 0.5;
  const sx = Number(packet?.scaleX) || 1;
  const sy = Number(packet?.scaleY) || 1;
  const screenX = (tipX - 0.5) * sx + 0.5;
  const screenY = (tipY - 0.5) * sy + 0.5;

  // Rolar para baixo/cima ou para os lados usando o toque sem pinça (arrastar a mão/dedo indicador)
  let scrollSt = fingerScrollByHand.get(h.id);
  const curWinHit = hitAt(screenX, screenY) || (Array.isArray(h.aim) && h.aim.length >= 2 ? hitAt(screenPoint(h.aim).x, screenPoint(h.aim).y) : null);
  if (!scrollSt) {
    scrollSt = {
      startTipX: tipX,
      startTipY: tipY,
      startWristX: p ? p[0] : tipX,
      startWristY: p ? p[1] : tipY,
      startScreenX: screenX,
      startScreenY: screenY,
      lastScreenX: screenX,
      lastScreenY: screenY,
      dirX: 0,
      dirY: 0,
      scrolling: false,
      nativeDownSent: false,
      winHit: curWinHit,
    };
    fingerScrollByHand.set(h.id, scrollSt);
  } else {
    const stepDx = screenX - scrollSt.lastScreenX;
    const stepDy = screenY - scrollSt.lastScreenY;
    scrollSt.lastScreenX = screenX;
    scrollSt.lastScreenY = screenY;
    if (curWinHit) scrollSt.winHit = curWinHit;
    const tipMove = Math.hypot(tipX - scrollSt.startTipX, tipY - scrollSt.startTipY);
    const wristMove = p ? Math.hypot(p[0] - scrollSt.startWristX, p[1] - scrollSt.startWristY) : 0;
    if (!scrollSt.scrolling && scrollSt.winHit && ((tipMove >= 0.022 && wristMove >= 0.012) || tipMove >= 0.036)) {
      scrollSt.scrolling = true;
    }
    if (scrollSt.scrolling) {
      applyFingerTouchScroll(scrollSt, screenX, screenY, stepDx, stepDy);
      if (currentSt) currentSt.latched = true;
      setFingerHoverEl(null);
      return true;
    }
  }
  const mcpY = (p && p.length >= 17) ? p[16] : tipY;
  const fingerLift = mcpY - tipY; // aumenta quando o dedo indicador se levanta em relação ao nó (MCP)
  const dTip = (p && p.length >= 26) ? Math.hypot(p[24] - p[0], p[25] - p[1]) : 0.1;
  const dPip = (p && p.length >= 20) ? Math.hypot(p[18] - p[0], p[19] - p[1]) : 0.08;
  const curIndexRatio = dTip / Math.max(1e-4, dPip);
  const tipHeadY = (h.head && h.head.length === 63) ? h.head[25] : 0;
  const tipDist = (h.head && h.head.length === 63)
    ? Math.hypot(h.head[24], h.head[25], h.head[26])
    : 0;
  const tipRelZ = (h.head && h.head.length === 63)
    ? (h.head[29] - h.head[26])
    : 0;
  const palm = Number(h.palmWidth) || 0;
  const boneSpan = handBoneSpan2D(h.points);

  let st = currentSt;
  const target = resolveFingerTarget(h, packet);

  const checkForwardPush = state => {
    if (!state) return false;
    const distPush = (tipDist > 0 && state.baseDist > 0) ? (tipDist - state.baseDist) : 0;
    const distRatio = (tipDist > 0 && state.baseDist > 0) ? (distPush / state.baseDist) : 0;
    const palmDropRatio = (palm > 0.012 && state.basePalm > 0.012) ? ((state.basePalm - palm) / state.basePalm) : 0;
    const spanDropRatio = (boneSpan > 0.02 && state.baseSpan > 0.02) ? ((state.baseSpan - boneSpan) / state.baseSpan) : 0;
    const tipRelPush = tipRelZ - state.baseTipRelZ;
    return (
      distPush >= 0.016 ||
      distRatio >= 0.036 ||
      palmDropRatio >= 0.042 ||
      spanDropRatio >= 0.042 ||
      (tipRelPush >= 0.014 && (distPush >= 0.006 || palmDropRatio >= 0.018 || spanDropRatio >= 0.018))
    );
  };

  // Quando passar o dedo ou ficar com o dedo encima vai escolher mas não vai abrir;
  // só abre no momento em que, com o dedo encima do app, o utilizador LEVANTA/AFASTA O DEDO (como nas fotos de referência).
  const checkFingerLift = state => {
    if (!state) return false;
    const tipLiftUp = (state.restTipY - tipY) >= 0.0075;
    const knuckleLiftUp = (fingerLift - state.restFingerLift) >= 0.0075;
    const headLiftUp = (tipHeadY - state.restHeadY) >= 0.0075;
    const indexFlexLift = state.maxIndexRatio > 1.08 && (state.maxIndexRatio - curIndexRatio) >= 0.08;
    const wx = (state.wristX ?? 0.5) - state.restTipX;
    const wy = (state.wristY ?? 0.7) - state.restTipY;
    const wLen = Math.hypot(wx, wy) || 1;
    const retractAlongFinger = ((tipX - state.restTipX) * (wx / wLen) + (tipY - state.restTipY) * (wy / wLen)) >= 0.0075;
    return tipLiftUp || knuckleLiftUp || headLiftUp || indexFlexLift || retractAlongFinger || checkForwardPush(state);
  };

  if (!target) {
    if (st && st.pendingBrowserTap && !st.holdMenuOpened && (nowMs - st.lastTapAt >= 360)) {
      st.pendingBrowserTap = false;
      if (triggerFingerTouchTap(st.tapX, st.tapY, st.targetEl)) {
        st.latched = true;
        st.lastTapAt = nowMs;
        fingerPokeFlashUntil = nowMs + 220;
        return true;
      }
    }
    const pulledOffTarget = st && (checkFingerLift(st) || Math.hypot(tipX - st.restTipX, tipY - st.restTipY) >= 0.006);
    if (st && (nowMs - st.lastSeenAt <= 180) && (nowMs - st.enterAt >= 40) && !st.latched && pulledOffTarget && (nowMs - st.lastTapAt >= 360)) {
      if (triggerFingerTouchTap(st.tapX, st.tapY, st.targetEl)) {
        st.latched = true;
        st.lastTapAt = nowMs;
        fingerPokeFlashUntil = nowMs + 220;
        return true;
      }
    }
    if (!st || nowMs - st.lastSeenAt > 180) {
      fingerPokeByHand.delete(h.id);
      setFingerHoverEl(null);
    }
    return false;
  }

  setFingerHoverEl(target.el, target.x, target.y);

  const liftingAlready = st && (nowMs - st.enterAt >= 40) && (target.key === st.targetKey) && checkFingerLift(st);
  if (!st || (target.key !== st.targetKey && !liftingAlready)) {
    if (st && !st.latched && (nowMs - st.enterAt >= 45) && (nowMs - st.lastSeenAt <= 120) && (st.lastTipY - tipY >= 0.010) && Math.abs(tipX - st.lastTipX) <= 0.018 && (nowMs - st.lastTapAt >= 360)) {
      if (triggerFingerTouchTap(st.tapX, st.tapY, st.targetEl)) {
        st.latched = true;
        st.lastTapAt = nowMs;
        fingerPokeFlashUntil = nowMs + 220;
        return true;
      }
    }
    st = {
      targetKey: target.key,
      targetEl: target.el,
      tapX: target.x,
      tapY: target.y,
      wristX: p[0],
      wristY: p[1],
      maxIndexRatio: curIndexRatio,
      restTipY: tipY,
      restFingerLift: fingerLift,
      restHeadY: tipHeadY,
      lastTipX: tipX,
      lastTipY: tipY,
      baseDist: tipDist,
      basePalm: palm,
      baseSpan: boneSpan,
      baseTipRelZ: tipRelZ,
      enterAt: nowMs,
      lastSeenAt: nowMs,
      latched: false,
      holdMenuOpened: false,
      pendingBrowserTap: false,
      lastTapAt: st?.lastTapAt ?? -1000,
    };
    fingerPokeByHand.set(h.id, st);
    return false;
  }

  if (target.key === st.targetKey) {
    st.tapX = target.x;
    st.tapY = target.y;
    st.targetEl = target.el;
    st.wristX = p[0];
    st.wristY = p[1];
    st.lastSeenAt = nowMs;
  }

  const isBrowserBtn = Boolean(
    st.targetEl?.dataset?.id === 'browser' ||
    st.targetEl?.dataset?.spatialBuiltin === 'browser' ||
    st.targetEl?.dataset?.app === 'browser'
  );

  // Segurar por 2 segundos (2000ms) no ícone do Navegador com Hand tracking de toque abre + NOVA GUIA / + GUIA ANÔNIMA
  if (isBrowserBtn && !st.holdMenuOpened && (nowMs - st.enterAt >= 2000)) {
    st.holdMenuOpened = true;
    st.pendingBrowserTap = false;
    st.latched = true;
    st.lastTapAt = nowMs;
    showBrowserTabMenu(st.targetEl?.dataset?.id === 'browser' ? 'dock' : 'spatial');
    fingerPokeFlashUntil = nowMs + 220;
    return true;
  }

  // Enquanto pousa o dedo no app (~40ms), apenas escolhe/destaca sem abrir e calibra a posição do dedo em cima do app
  if (nowMs - st.enterAt < 40) {
    st.restTipY = Math.max(st.restTipY, tipY);
    st.restFingerLift = Math.min(st.restFingerLift, fingerLift);
    st.restHeadY = Math.min(st.restHeadY, tipHeadY);
    st.maxIndexRatio = Math.max(st.maxIndexRatio || curIndexRatio, curIndexRatio);
    st.lastTipX = tipX;
    st.lastTipY = tipY;
    if (tipDist > 0) st.baseDist = st.baseDist > 0 ? (st.baseDist * 0.5 + tipDist * 0.5) : tipDist;
    if (palm > 0) st.basePalm = st.basePalm > 0 ? (st.basePalm * 0.5 + palm * 0.5) : palm;
    if (boneSpan > 0) st.baseSpan = st.baseSpan > 0 ? (st.baseSpan * 0.5 + boneSpan * 0.5) : boneSpan;
    st.baseTipRelZ = st.baseTipRelZ * 0.5 + tipRelZ * 0.5;
    return false;
  }

  const liftedFinger = checkFingerLift(st);
  st.lastTipX = tipX;
  st.lastTipY = tipY;

  if (!st.latched && liftedFinger && (nowMs - st.lastTapAt >= 360)) {
    if (isBrowserBtn && checkForwardPush(st) && !((st.restTipY - tipY) >= 0.0075 || (fingerLift - st.restFingerLift) >= 0.0075)) {
      st.pendingBrowserTap = true;
      st.latched = true;
      return false;
    }
    if (triggerFingerTouchTap(st.tapX, st.tapY, st.targetEl)) {
      st.latched = true;
      st.lastTapAt = nowMs;
      fingerPokeFlashUntil = nowMs + 220;
      return true;
    }
  } else if (st.latched) {
    const distPush = (tipDist > 0 && st.baseDist > 0) ? (tipDist - st.baseDist) : 0;
    const palmDropRatio = (palm > 0.012 && st.basePalm > 0.012) ? ((st.basePalm - palm) / st.basePalm) : 0;
    const spanDropRatio = (boneSpan > 0.02 && st.baseSpan > 0.02) ? ((stateSpan(st, boneSpan))) : 0;
    const settled = distPush <= 0.008 && palmDropRatio <= 0.022 && spanDropRatio <= 0.022 && Math.abs(st.restTipY - tipY) <= 0.006;
    if (settled) {
      if (st.pendingBrowserTap && !st.holdMenuOpened && (nowMs - st.lastTapAt >= 360)) {
        st.pendingBrowserTap = false;
        st.latched = false;
        st.lastTapAt = nowMs;
        fingerPokeFlashUntil = nowMs + 220;
        triggerFingerTouchTap(st.tapX, st.tapY, st.targetEl);
        return true;
      }
      st.latched = false;
      st.restTipY = tipY;
      st.restFingerLift = fingerLift;
      st.restHeadY = tipHeadY;
      st.maxIndexRatio = curIndexRatio;
      st.baseDist = tipDist;
      st.basePalm = palm;
      st.baseSpan = boneSpan;
      st.baseTipRelZ = tipRelZ;
    }
  } else {
    st.restTipY = Math.max(st.restTipY, tipY);
    st.restFingerLift = Math.min(st.restFingerLift, fingerLift);
    st.restHeadY = Math.min(st.restHeadY, tipHeadY);
    st.maxIndexRatio = Math.max(st.maxIndexRatio || curIndexRatio, curIndexRatio);
    if (tipDist > 0) st.baseDist = st.baseDist > 0 ? Math.min(st.baseDist, st.baseDist * 0.92 + tipDist * 0.08) : tipDist;
    if (palm > 0.012) st.basePalm = st.basePalm > 0 ? Math.max(st.basePalm, st.basePalm * 0.92 + palm * 0.08) : palm;
    if (boneSpan > 0.02) st.baseSpan = st.baseSpan > 0 ? Math.max(st.baseSpan, st.baseSpan * 0.92 + boneSpan * 0.08) : boneSpan;
  }
  return false;
}
function stateSpan(st, boneSpan) {
  return (st.baseSpan - boneSpan) / st.baseSpan;
}

/* =================== Gesto da Mão Direita & Esquerda (V/L "Arminha" na Palma -> Bolinha com Logos IMG_20261007_215701.png / 215728.png + Pinça Polegar+Indicador + Contorno Azul) =================== */
let bolinhaBubbleEl = null;
let bolinhaHideTimer = null;
let leftBolinhaBubbleEl = null;
let leftBolinhaHideTimer = null;
let rightHandBolinhaState = {
  frames: 0,
  armed: false,
  lastArmedAt: 0,
  lastTriggerAt: -2000,
  blueUntil: 0,
};
let leftHandBolinhaState = {
  frames: 0,
  armed: false,
  lastArmedAt: 0,
  lastTriggerAt: -2000,
  blueUntil: 0,
};

function isPalmTurnedForBolinha(h, isRightBolinha) {
  if (!h || !h.points || h.points.length < 63) return false;
  if (h.palmToFace === false || h.backOfHand === true) return false;
  if (h.palmToFace === true) return true;
  const p = h.points;
  // Na câmera traseira real (PhoneXrHands), quando o utilizador vira a palma da MÃO DIREITA para o rosto:
  // MediaPipe classifica a palma como "Right" e PhoneXrHands inverte para h.left = true (id = 'left'),
  // ficando o polegar (4, idx 12) à esquerda do indicador MCP (5, idx 15): p[12] <= p[15] + 0.015.
  // E quando o utilizador vira a palma da MÃO ESQUERDA para o rosto:
  // PhoneXrHands reporta h.left = false (id = 'right'), ficando o polegar à direita do indicador MCP: p[12] >= p[15] - 0.015.
  if (isRightBolinha) {
    if (p[12] > p[15] + 0.015 && p[15] > p[51]) return false;
    return p[12] <= p[15] + 0.015;
  } else {
    if (p[12] < p[15] - 0.015 && p[15] < p[51]) return false;
    return p[12] >= p[15] - 0.015;
  }
}

function isRightBolinhaHand(h) {
  return Boolean(h && (h.left === true || h.id === 'left'));
}

function isLeftBolinhaHand(h) {
  return Boolean(h && !h.left && (!h.id || h.id === 'right'));
}

function isVLArminhaPose(h, isRightBolinha) {
  if (!h || h.predicted || h.pinching || h.fist) return false;
  if (isRightBolinha ? !isRightBolinhaHand(h) : !isLeftBolinhaHand(h)) return false;
  const p = h.points;
  if (!p || p.length < 63) return false;
  if (!isPalmTurnedForBolinha(h, isRightBolinha)) return false;
  const dist = (a, b) => Math.hypot(p[a * 3] - p[b * 3], p[a * 3 + 1] - p[b * 3 + 1]);
  // Ignora mãos sintéticas de testes que têm juntas colapsadas no mesmo ponto
  if (dist(5, 6) < 0.008 || dist(14, 16) < 0.008 || dist(18, 20) < 0.008) return false;
  const palmLen = Math.max(0.042, dist(0, 9));
  // Indicador (8) esticado para cima
  const indexExtended = dist(0, 8) > dist(0, 6) * 1.12 && dist(0, 8) > palmLen * 1.24;
  // Polegar (4) aberto formando o gesto de "arminha" / V-L entre polegar e indicador (IMG_20261021_144958.jpg / 144416.jpg)
  const thumbExtended = dist(1, 4) > dist(1, 2) * 1.34 && dist(4, 8) > palmLen * 0.42 && dist(4, 5) > palmLen * 0.30;
  // Médio (12), Anelar (16) e Mindinho (20) dobrados na palma
  const midCurled = dist(0, 12) < dist(0, 10) * 1.14 || dist(0, 12) < dist(0, 8) * 0.82;
  const ringCurled = dist(0, 16) < dist(0, 14) * 1.14 || dist(0, 16) < dist(0, 8) * 0.80;
  const pinkyCurled = dist(0, 20) < dist(0, 18) * 1.16 || dist(0, 20) < dist(0, 8) * 0.78;
  return indexExtended && thumbExtended && midCurled && ringCurled && pinkyCurled;
}

function isRightHandBolinhaGesture(h) {
  return isVLArminhaPose(h, true);
}

function isLeftHandBolinhaGesture(h) {
  return isVLArminhaPose(h, false);
}

function isHandPinchFromBolinha(h, isRightBolinha) {
  if (!h || h.predicted) return false;
  if (isRightBolinha ? !isRightBolinhaHand(h) : !isLeftBolinhaHand(h)) return false;
  const p = h.points;
  if (!p || p.length < 63) return false;
  const dist = (a, b) => Math.hypot(p[a * 3] - p[b * 3], p[a * 3 + 1] - p[b * 3 + 1]);
  if (dist(5, 6) < 0.008) return false;
  const palmLen = Math.max(0.042, dist(0, 9));
  const midCurled = dist(0, 12) < dist(0, 10) * 1.16 || dist(0, 12) < palmLen * 1.15;
  const ringCurled = dist(0, 16) < dist(0, 14) * 1.16 || dist(0, 16) < palmLen * 1.12;
  const pinkyCurled = dist(0, 20) < dist(0, 18) * 1.18 || dist(0, 20) < palmLen * 1.10;
  if (!(midCurled && ringCurled && pinkyCurled)) return false;
  // Ativação por movimento de pinça entre o polegar (4) e o indicador (8) (IMG_20261021_145046.jpg / 145203.jpg)
  const thumbIndexPinch = h.pinching === true || dist(4, 8) < palmLen * 0.42;
  const indexClosed = h.fist === true || dist(0, 8) < dist(0, 6) * 1.10;
  return thumbIndexPinch || indexClosed;
}

function showBolinhaBubble(h, packet, fired = false) {
  if (bolinhaHideTimer) {
    clearTimeout(bolinhaHideTimer);
    bolinhaHideTimer = null;
  }
  const hud = document.getElementById('hud') || document.body;
  if (!bolinhaBubbleEl || !document.body.contains(bolinhaBubbleEl)) {
    bolinhaBubbleEl = document.createElement('div');
    bolinhaBubbleEl.id = 'gun-gesture-indicator';
    bolinhaBubbleEl.className = 'gun-logo-bubble';
    bolinhaBubbleEl.dataset.hand = 'right';
    bolinhaBubbleEl.innerHTML = `
      <div class="bolinha-card-inner">
        <img src="./icons/nextvr-bolinha-logo.png" alt="NextVR" class="gun-logo-img" draggable="false"/>
        <span class="bolinha-menu-lbl">Menu</span>
        <span class="bolinha-menu-bar"><span class="bolinha-menu-bar-fill"></span></span>
      </div>
    `;
    hud.appendChild(bolinhaBubbleEl);
  }
  const p = h.points;
  const sx = Number(packet?.scaleX) || 1;
  const sy = Number(packet?.scaleY) || 1;
  // Posiciona a bolinha entre o polegar (4, idx 12/13) e o indicador (8, idx 24/25) da mão direita (IMG_20261021_144958.jpg / 145046.jpg)
  const rawX = (p && p.length >= 26) ? (p[24] * 0.52 + p[12] * 0.48) : (h.palm?.[0] ?? 0.55);
  const rawY = (p && p.length >= 26) ? ((p[25] + p[13]) * 0.5 - 0.025) : ((h.palm?.[1] ?? 0.5) - 0.06);
  const normX = Math.max(0.08, Math.min(0.92, (rawX - 0.5) * sx + 0.5));
  const normY = Math.max(0.08, Math.min(0.90, (rawY - 0.5) * sy + 0.5));
  bolinhaBubbleEl.style.left = `${(normX * 100).toFixed(1)}%`;
  bolinhaBubbleEl.style.top = `${(normY * 100).toFixed(1)}%`;
  bolinhaBubbleEl.hidden = false;
  bolinhaBubbleEl.classList.toggle('fired', !!fired);
  bolinhaBubbleEl.classList.toggle('gun-triggered', !!fired);
  bolinhaBubbleEl.classList.toggle('bolinha-menu-card', !!fired);
}

function hideBolinhaBubble(delayMs = 0) {
  if (bolinhaHideTimer) {
    clearTimeout(bolinhaHideTimer);
    bolinhaHideTimer = null;
  }
  if (!bolinhaBubbleEl) return;
  if (delayMs > 0) {
    bolinhaHideTimer = setTimeout(() => {
      bolinhaHideTimer = null;
      bolinhaBubbleEl?.remove();
      bolinhaBubbleEl = null;
      if (document.documentElement.dataset.handBlueOutline === 'right') {
        delete document.documentElement.dataset.handBlueOutline;
      }
      css3d.invalidate?.();
    }, delayMs);
  } else {
    bolinhaBubbleEl.remove();
    bolinhaBubbleEl = null;
    if (document.documentElement.dataset.handBlueOutline === 'right') {
      delete document.documentElement.dataset.handBlueOutline;
    }
  }
}

function showLeftBolinhaBubble(h, packet, fired = false) {
  if (leftBolinhaHideTimer) {
    clearTimeout(leftBolinhaHideTimer);
    leftBolinhaHideTimer = null;
  }
  const hud = document.getElementById('hud') || document.body;
  if (!leftBolinhaBubbleEl || !document.body.contains(leftBolinhaBubbleEl)) {
    leftBolinhaBubbleEl = document.createElement('div');
    leftBolinhaBubbleEl.id = 'left-gesture-indicator';
    leftBolinhaBubbleEl.className = 'gun-logo-bubble left-logo-bubble';
    leftBolinhaBubbleEl.dataset.hand = 'left';
    leftBolinhaBubbleEl.innerHTML = `
      <div class="bolinha-card-inner">
        <img src="./icons/nextvr-bolinha-left.png" alt="NextVR Control" class="gun-logo-img left-logo-img" draggable="false"/>
        <span class="bolinha-menu-lbl">Menu</span>
        <span class="bolinha-menu-bar"><span class="bolinha-menu-bar-fill"></span></span>
      </div>
    `;
    hud.appendChild(leftBolinhaBubbleEl);
  }
  const p = h.points;
  const sx = Number(packet?.scaleX) || 1;
  const sy = Number(packet?.scaleY) || 1;
  const rawX = (p && p.length >= 26) ? (p[24] * 0.52 + p[12] * 0.48) : (h.palm?.[0] ?? 0.35);
  const rawY = (p && p.length >= 26) ? ((p[25] + p[13]) * 0.5 - 0.025) : ((h.palm?.[1] ?? 0.5) - 0.06);
  const normX = Math.max(0.08, Math.min(0.92, (rawX - 0.5) * sx + 0.5));
  const normY = Math.max(0.08, Math.min(0.90, (rawY - 0.5) * sy + 0.5));
  leftBolinhaBubbleEl.style.left = `${(normX * 100).toFixed(1)}%`;
  leftBolinhaBubbleEl.style.top = `${(normY * 100).toFixed(1)}%`;
  leftBolinhaBubbleEl.hidden = false;
  leftBolinhaBubbleEl.classList.toggle('fired', !!fired);
  leftBolinhaBubbleEl.classList.toggle('gun-triggered', !!fired);
  leftBolinhaBubbleEl.classList.toggle('bolinha-menu-card', !!fired);
}

function hideLeftBolinhaBubble(delayMs = 0) {
  if (leftBolinhaHideTimer) {
    clearTimeout(leftBolinhaHideTimer);
    leftBolinhaHideTimer = null;
  }
  if (!leftBolinhaBubbleEl) return;
  if (delayMs > 0) {
    leftBolinhaHideTimer = setTimeout(() => {
      leftBolinhaHideTimer = null;
      leftBolinhaBubbleEl?.remove();
      leftBolinhaBubbleEl = null;
      if (document.documentElement.dataset.handBlueOutline === 'left') {
        delete document.documentElement.dataset.handBlueOutline;
      }
      css3d.invalidate?.();
    }, delayMs);
  } else {
    leftBolinhaBubbleEl.remove();
    leftBolinhaBubbleEl = null;
    if (document.documentElement.dataset.handBlueOutline === 'left') {
      delete document.documentElement.dataset.handBlueOutline;
    }
  }
}

function updateRightHandBolinhaGesture(packet, nowMs) {
  if (S.gunGesture === 0) {
    rightHandBolinhaState.frames = 0;
    rightHandBolinhaState.armed = false;
    leftHandBolinhaState.frames = 0;
    leftHandBolinhaState.armed = false;
    hideBolinhaBubble(0);
    hideLeftBolinhaBubble(0);
    return false;
  }
  const gOv = document.getElementById('gorilla-overlay');
  if (gOv && gOv.style.display && gOv.style.display !== 'none') {
    rightHandBolinhaState.frames = 0;
    rightHandBolinhaState.armed = false;
    leftHandBolinhaState.frames = 0;
    leftHandBolinhaState.armed = false;
    hideBolinhaBubble(0);
    hideLeftBolinhaBubble(0);
    return false;
  }
  if (wins.some(w => (w.id === 'entry-menu' || w.id === 'language') && !w.hidden) || document.querySelector('.entry-menu-root')) {
    rightHandBolinhaState.frames = 0;
    rightHandBolinhaState.armed = false;
    leftHandBolinhaState.frames = 0;
    leftHandBolinhaState.armed = false;
    hideBolinhaBubble(0);
    hideLeftBolinhaBubble(0);
    return false;
  }
  if (drag.win || resizing.win || dockDrag.start) {
    rightHandBolinhaState.frames = 0;
    rightHandBolinhaState.armed = false;
    leftHandBolinhaState.frames = 0;
    leftHandBolinhaState.armed = false;
    hideBolinhaBubble(0);
    hideLeftBolinhaBubble(0);
    return false;
  }

  let anyActive = false;

  // 1. Mão direita física ("N" logo -> IMG_20261007_215701.png + Menu card + contorno azul + alternar Dock/Apps)
  const rightHand = (packet?.hands || []).find(h => isRightBolinhaHand(h));
  if (!rightHand) {
    if (!packet?.hands?.length || (nowMs - rightHandBolinhaState.lastArmedAt > 240 && nowMs >= rightHandBolinhaState.blueUntil)) {
      rightHandBolinhaState.frames = 0;
      rightHandBolinhaState.armed = false;
      rightHandBolinhaState.blueUntil = 0;
      hideBolinhaBubble(0);
    }
  } else if (!isPalmTurnedForBolinha(rightHand, true)) {
    rightHandBolinhaState.frames = 0;
    rightHandBolinhaState.armed = false;
    rightHandBolinhaState.blueUntil = 0;
    hideBolinhaBubble(0);
  } else if (isRightHandBolinhaGesture(rightHand)) {
    rightHandBolinhaState.frames += 1;
    if (rightHandBolinhaState.frames >= 2) {
      rightHandBolinhaState.armed = true;
      rightHandBolinhaState.lastArmedAt = nowMs;
      showBolinhaBubble(rightHand, packet, false);
      css3d.invalidate?.();
    }
    anyActive = anyActive || rightHandBolinhaState.armed;
  } else if (
    rightHandBolinhaState.armed &&
    (nowMs - rightHandBolinhaState.lastArmedAt <= 850) &&
    (nowMs - rightHandBolinhaState.lastTriggerAt >= 750) &&
    isHandPinchFromBolinha(rightHand, true)
  ) {
    const hKey = rightHand.id || 'left';
    rightHandBolinhaState.armed = false;
    rightHandBolinhaState.frames = 0;
    rightHandBolinhaState.lastTriggerAt = nowMs;
    rightHandBolinhaState.blueUntil = nowMs + 750;
    document.documentElement.dataset.handBlueOutline = 'right';
    S.handDraw = 1;
    window.NativeXR?.handVisuals?.(true);
    fistHoldByHand.delete(hKey);
    pinchSuppressed.add(hKey);
    packet.consumed.add(hKey);
    cancelHandInput();
    showBolinhaBubble(rightHand, packet, true);
    hideBolinhaBubble(420);
    window.nextvrToggleSpatialAndDockFromGesture?.();
    window.NativeXR?.click?.();
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    anyActive = true;
  } else if (nowMs - rightHandBolinhaState.lastArmedAt > 300 && nowMs >= rightHandBolinhaState.blueUntil) {
    rightHandBolinhaState.frames = 0;
    rightHandBolinhaState.armed = false;
    hideBolinhaBubble(0);
  }

  // 2. Mão esquerda física (Logo IMG_20261007_215728.png -> Pinça polegar+indicador abre/fecha a janelinha flutuante transparente de Brilho e Som)
  const leftHand = (packet?.hands || []).find(h => isLeftBolinhaHand(h));
  if (!leftHand) {
    if (!packet?.hands?.length || (nowMs - leftHandBolinhaState.lastArmedAt > 240 && nowMs >= leftHandBolinhaState.blueUntil)) {
      leftHandBolinhaState.frames = 0;
      leftHandBolinhaState.armed = false;
      leftHandBolinhaState.blueUntil = 0;
      hideLeftBolinhaBubble(0);
    }
  } else if (!isPalmTurnedForBolinha(leftHand, false)) {
    leftHandBolinhaState.frames = 0;
    leftHandBolinhaState.armed = false;
    leftHandBolinhaState.blueUntil = 0;
    hideLeftBolinhaBubble(0);
  } else if (isLeftHandBolinhaGesture(leftHand)) {
    leftHandBolinhaState.frames += 1;
    if (leftHandBolinhaState.frames >= 2) {
      leftHandBolinhaState.armed = true;
      leftHandBolinhaState.lastArmedAt = nowMs;
      showLeftBolinhaBubble(leftHand, packet, false);
      css3d.invalidate?.();
    }
    anyActive = anyActive || leftHandBolinhaState.armed;
  } else if (
    leftHandBolinhaState.armed &&
    (nowMs - leftHandBolinhaState.lastArmedAt <= 850) &&
    (nowMs - leftHandBolinhaState.lastTriggerAt >= 750) &&
    isHandPinchFromBolinha(leftHand, false)
  ) {
    const hKey = leftHand.id || 'right';
    leftHandBolinhaState.armed = false;
    leftHandBolinhaState.frames = 0;
    leftHandBolinhaState.lastTriggerAt = nowMs;
    leftHandBolinhaState.blueUntil = nowMs + 750;
    document.documentElement.dataset.handBlueOutline = 'left';
    S.handDraw = 1;
    window.NativeXR?.handVisuals?.(true);
    fistHoldByHand.delete(hKey);
    pinchSuppressed.add(hKey);
    packet.consumed.add(hKey);
    cancelHandInput();
    showLeftBolinhaBubble(leftHand, packet, true);
    hideLeftBolinhaBubble(420);
    window.nextvrToggleLeftHandQuickMenu?.();
    window.NativeXR?.click?.();
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    anyActive = true;
  } else if (nowMs - leftHandBolinhaState.lastArmedAt > 300 && nowMs >= leftHandBolinhaState.blueUntil) {
    leftHandBolinhaState.frames = 0;
    leftHandBolinhaState.armed = false;
    hideLeftBolinhaBubble(0);
  }

  return anyActive;
}

/* =================== Gesto de Soco por 2 Segundos (Fechar a mão toda por 2s abre o Menuzinho Rápido) =================== */
const fistHoldByHand = new Map();

function isClosedFistHand(h) {
  if (!h || h.predicted || h.pinching) return false;
  if (h.fist === true) return true;
  const p = h.points;
  if (!p || p.length < 63) return false;
  const dist = (a, b) => Math.hypot(p[a * 3] - p[b * 3], p[a * 3 + 1] - p[b * 3 + 1]);
  if (dist(5, 6) < 0.008 || dist(14, 16) < 0.008 || dist(18, 20) < 0.008) return false;
  const indexCurled = dist(0, 8) < dist(0, 6) * 1.08;
  const midCurled = dist(0, 12) < dist(0, 10) * 1.08;
  const ringCurled = dist(0, 16) < dist(0, 14) * 1.08;
  const pinkyCurled = dist(0, 20) < dist(0, 18) * 1.08;
  return indexCurled && midCurled && ringCurled && pinkyCurled;
}

function updateFistQuickMenu(packet, nowMs) {
  if (S.gunGesture === 0) {
    fistHoldByHand.clear();
    return false;
  }
  const gOv = document.getElementById('gorilla-overlay');
  if (gOv && gOv.style.display && gOv.style.display !== 'none') {
    fistHoldByHand.clear();
    return false;
  }
  if (wins.some(w => (w.id === 'entry-menu' || w.id === 'language') && !w.hidden) || document.querySelector('.entry-menu-root')) {
    fistHoldByHand.clear();
    return false;
  }
  if (resizing.win || dockDrag.start) {
    fistHoldByHand.clear();
    return false;
  }
  const handsList = packet?.hands || [];
  const seenKeys = new Set();
  for (const h of handsList) {
    if (!h) continue;
    const key = h.id || (h.left ? 'left' : 'right');
    seenKeys.add(key);
    const closed = isClosedFistHand(h);
    const p = palmScreen(h, packet, true);
    let st = fistHoldByHand.get(key);
    if (closed) {
      if (!st || !st.active) {
        st = {
          active: true,
          startAt: nowMs,
          lastSeenAt: nowMs,
          startX: p.x,
          startY: p.y,
          latched: false,
        };
        fistHoldByHand.set(key, st);
      } else {
        st.lastSeenAt = nowMs;
        if (Math.hypot(p.x - st.startX, p.y - st.startY) > 0.12) {
          st.startAt = nowMs;
          st.startX = p.x;
          st.startY = p.y;
        }
        if (!st.latched && (nowMs - st.startAt >= 2000)) {
          st.latched = true;
          hideBolinhaBubble(0);
          hideLeftBolinhaBubble(0);
          if (drag.win && drag.source === 'fist') endDrag();
          cancelHandInput();
          window.nextvrOpenFistQuickMenu?.();
          window.NativeXR?.click?.();
          css3d.invalidate?.();
          css3d.render?.(scene, camera);
          return true;
        }
      }
    } else if (st && (st.latched || nowMs < st.lastSeenAt || (nowMs - st.lastSeenAt > 260))) {
      fistHoldByHand.delete(key);
    }
  }
  for (const [k, st] of fistHoldByHand.entries()) {
    if (!seenKeys.has(k) && (st.latched || nowMs < st.lastSeenAt || (nowMs - st.lastSeenAt > 260))) {
      fistHoldByHand.delete(k);
    }
  }
  return false;
}

let circleLoaderEl = null;
let circleLoaderTimer = null;
function triggerCircleLoading(kind = 'env', label = '') {
  const hud = document.getElementById('hud') || document.body;
  if (!circleLoaderEl || !document.body.contains(circleLoaderEl)) {
    circleLoaderEl = document.createElement('div');
    circleLoaderEl.id = 'vr-circle-loader';
    circleLoaderEl.className = 'vr-circle-loader';
    circleLoaderEl.dataset.circleLoader = '1';
    circleLoaderEl.hidden = true;
    circleLoaderEl.innerHTML = `
      <div class="vr-circle-ring-wrap">
        <svg viewBox="0 0 84 84" class="vr-circle-ring-svg">
          <circle cx="42" cy="42" r="34" class="vr-circle-track"/>
          <circle cx="42" cy="42" r="34" class="vr-circle-progress"/>
        </svg>
        <div class="vr-circle-label"></div>
      </div>
    `;
    hud.appendChild(circleLoaderEl);
  }
  circleLoaderEl.dataset.kind = kind;
  const lbl = circleLoaderEl.querySelector('.vr-circle-label');
  if (lbl) {
    lbl.textContent = kind === 'env'
      ? `Carregando ambiente${label ? ' · ' + label : ''}…`
      : `Abrindo ${label || 'app'}…`;
  }
  circleLoaderEl.hidden = false;
  circleLoaderEl.classList.remove('active');
  void circleLoaderEl.offsetWidth;
  circleLoaderEl.classList.add('active');
  css3d.invalidate?.();
  if (circleLoaderTimer) clearTimeout(circleLoaderTimer);
  circleLoaderTimer = setTimeout(() => {
    if (circleLoaderEl) {
      circleLoaderEl.hidden = true;
      circleLoaderEl.classList.remove('active');
      css3d.invalidate?.();
    }
  }, 620);
}
window.nextvrShowCircleLoader = triggerCircleLoading;

function endNear(cancel=false, packet=lastPhonePacket) {
  const ended=nearContact;
  if(ended?.down) {
    handTouch({win:ended.win,u:ended.u,v:ended.v},cancel?3:1);
    // Leaving the near band can end contact before the smoothed depth release threshold is
    // sampled. Keep the same still-closed pinch from immediately becoming a second FAR press.
    if(!cancel && packet.hands.some(h=>h.id===ended.id&&h.pinching)) {
      pinchSuppressed.add(ended.id);packet.consumed.add(ended.id);
    }
  }
  nearContact=null;
}
on('phonehands', packet => {
  lastPhonePacket=packet;
  const ids=new Set(packet.hands.map(h=>h.id));
  if (!packet.hands.length) setFingerHoverEl(null);
  for(const id of fistBefore.keys())if(!ids.has(id))fistBefore.delete(id);
  for(const id of fingerPokeByHand.keys())if(!ids.has(id))fingerPokeByHand.delete(id);
  for(const id of pinchSuppressed) {
    const h=packet.hands.find(h=>h.id===id);
    if(!h || !h.pinching) pinchSuppressed.delete(id); else packet.consumed.add(id);
  }

  // Punho é um gesto válido de grab, mas só descola a janela depois do limiar de movimento.
  if(drag.win && drag.source==='fist') {
    const h=packet.hands.find(h=>h.id===drag.hand);
    if(!h || !h.fist || !wins.includes(drag.win) || drag.win?.hidden)endDrag();
    else { packet.consumed.add(h.id);const p=palmScreen(h,packet,true);dragTo(p.x,p.y); }
  }
  // The grab outline is sticky for a moment: palm noise must not flash the window border.
  const nowMs=performance.now();
  updateRightHandBolinhaGesture(packet, nowMs);
  updateFistQuickMenu(packet, nowMs);
  // Pinça por 2 segundos com AS DUAS MÃOS: recentra dock / apps flutuantes e janelas abertas para onde estiver olhando, sem bolinha carregando.
  if (!document.documentElement.classList.contains('xr-on') && !wins.some(w => w.id === 'entry-menu' && !w.hidden)) {
    if (drag.win || resizing.win || dockDrag.start || dockEl.classList.contains('grab-armed') || nearContact) {
      recenterChord.reset();
    } else {
      const pinching = (packet.hands || []).filter(h => h.pinching && !h.predicted);
      const both = twoHandsPinching(pinching);
      const st = recenterChord.update(nowMs, { left: both, right: both });
      if (st.opened) {
        recenterChord.reset();
        cancelHandInput();
        pendingPress = null;
        nativePress = null;
        dockArmed = -1;
        endDrag();
        endResize();
        endDockDrag();
        for (const h of pinching) {
          pinchSuppressed.add(h.id);
          packet.consumed.add(h.id);
        }
        recenter();
      } else if (both && st.progress > 0.15) {
        // Enquanto as duas mãos estão pinçando juntas, cancela clique de uma mão para não abrir app por acidente.
        cancelHandInput();
        pendingPress = null;
        nativePress = null;
        dockArmed = -1;
      }
    }
  } else {
    recenterChord.reset();
  }
  if(!(drag.win && drag.source==='fist')) {
    const h=packet.hands.find(h=>!h.fist);
    if(h) {
      const p=palmScreen(h,packet),hit=fistHit(phoneRay(p.x,p.y));
      if(hit) {
        const {local,scale}=windowPoint(hit.win,hit.point),w=hit.win;
        if(Math.abs(local.x)*scale.x>w.w*scale.x/2-.06 || Math.abs(local.y)*scale.y>w.h*scale.y/2-.06){
          hoverWin=hit.win;hoverAt=nowMs;
        }
      }
    }
  }
  for(const w of wins)if(w!==hoverWin||nowMs-hoverAt>NEAR_HOVER_HOLD_MS)w.shell.classList.remove('phone-grab-hover');
  if(hoverWin&&nowMs-hoverAt<=NEAR_HOVER_HOLD_MS)hoverWin.shell.classList.add('phone-grab-hover');
  else hoverWin=null;
  for(const h of packet.hands) {
    const before=fistBefore.get(h.id)||false;fistBefore.set(h.id,h.fist);
    if(!drag.win && !resizing.win && h.fist && !before) {
      const p=palmScreen(h,packet,true),hit=fistHit(phoneRay(p.x,p.y));
      if(hit) {
        if(cursor.hand?.id===h.id) cancelHandInput();
        if(startDrag(hit.win,p.x,p.y,'fist',h.id))packet.consumed.add(h.id);
      }
    }
  }
  // Metric hand landmarks are hand pose, not a head/room 6 DoF tracker.
  // The near-touch zone has wide hysteresis and a short hold: a resting hand in front of an open
  // window jitters across a naive depth threshold and used to blink the pointer between the FAR
  // ray and direct touch. Enter only when clearly close; stay until clearly away.
  let best=null;
  for(const h of packet.hands) {
    if(packet.consumed.has(h.id) || !h.head || h.head.length!==63)continue;
    if (Array.isArray(h.aim) && h.aim.length >= 2) {
      const pAim = screenPoint(h.aim);
      if (dockTest(pAim.x, pAim.y)) continue;
    }
    const tip=new THREE.Vector3().fromArray(h.head,24);
    if(tip.length()>.7)continue;
    tip.applyMatrix4(camera.matrixWorld);
    for(const w of wins) {
      if(w.hidden || w.id === 'spatial-launcher')continue;
      const p=windowPoint(w,tip),current=nearContact?.win===w && nearContact.id===h.id;
      // Hysteresis: a contact already engaged stays until clearly away (0.26 m / 8 cm margin).
      const margin=current?.08:.02;
      const dMax=current?.26:.11;
      if(p.d>dMax || p.d<-.12 || Math.abs(p.local.x)*p.scale.x>w.w*p.scale.x/2+margin || Math.abs(p.local.y)*p.scale.y>w.h*p.scale.y/2+margin)continue;
      if(!best || current || (!best.current && Math.abs(p.d)<Math.abs(best.d)))best={...p,id:h.id,win:w,point:tip,current};
    }
  }
  const runFingerPokes = () => {
    if (drag.win || resizing.win || dockDrag.start || dockEl.classList.contains('grab-armed')) return;
    for (const h of packet.hands) {
      if (packet.consumed.has(h.id)) continue;
      updateFingerPoke(h, packet, nowMs);
    }
  };
  // Brief near-band jitter keeps an existing contact, but never keeps a press after tracking loss.
  if(!best && nearContact && ids.has(nearContact.id) && wins.includes(nearContact.win)
      && !nearContact.win.hidden && nowMs-nearContact.lastSeen<=NEAR_HOLD_MS) {
    best={...nearContact,current:true,held:true};
  }
  if(!best) {
    endNear(!ids.has(nearContact?.id),packet);
    runFingerPokes();
    return;
  }
  if(!best.current) {
    endNear(false,packet);
    // A fingertip already behind the glass cannot press merely by entering the near zone.
    nearContact={...best,down:false,previousD:best.d,lastSeen:nowMs};
  } else {
    nearContact.d+=(best.d-nearContact.d)*.45;
    nearContact.u+=(best.u-nearContact.u)*.45;nearContact.v+=(best.v-nearContact.v)*.45;
    if(!best.held)nearContact.lastSeen=nowMs;
  }
  const n=nearContact,inside=n.u>=0&&n.u<=1&&n.v>=0&&n.v<=1;
  const hit={win:n.win,u:Math.max(0,Math.min(1,n.u)),v:Math.max(0,Math.min(1,n.v))};
  if(!n.down && inside && n.d<=.012 && n.previousD>.012){
    // A real push through the glass takes over from a FAR ray press already in progress.
    if(cursor.down)cancelHandInput();
    focus(n.win);handTouch(hit,0);n.down=true;
  }
  else if(n.down && (n.d>=.035 || !inside)){
    handTouch(hit,1);n.down=false;
    // Still pinched while pulling back: that pinch must not restart as a ray press on the same spot.
    if(packet.hands.some(h=>h.id===n.id&&h.pinching)){pinchSuppressed.add(n.id);packet.consumed.add(n.id);}
  }
  else if(n.down)handTouch(hit,2);
  n.previousD=n.d;
  // Only an actual press owns the hand. Hovering within reach leaves the FAR ray pinch working,
  // which is how the welcome window's language options (about 0.42 m away) are chosen.
  if(n.down){packet.blockFar=true;packet.consumed.add(n.id);}
  else runFingerPokes();
});
let lastTargetAt=0,lastTargets='';
onFrame((dt,now)=>{
  // 60 Hz: o anel/ponta do raio acompanha a predição da mão em vez de degraus de 30 Hz.
  if(!native || now-lastTargetAt<16)return;lastTargetAt=now;
  const packet=lastPhonePacket, targets=[], noBeam = S.fingerTouch !== 0;
  for(const h of packet.hands) {
    const fSt = fingerPokeByHand.get(h.id);
    const fingerHover = Boolean(fSt?.targetEl);
    const isRightBolinha = isRightBolinhaHand(h);
    const isLeftBolinha = isLeftBolinhaHand(h);
    const blueOutline = Boolean(
      (isRightBolinha && ((rightHandBolinhaState.armed && bolinhaBubbleEl && !bolinhaBubbleEl.hidden) || now < rightHandBolinhaState.blueUntil)) ||
      (isLeftBolinha && ((leftHandBolinhaState.armed && leftBolinhaBubbleEl && !leftBolinhaBubbleEl.hidden) || now < leftHandBolinhaState.blueUntil))
    );
    if(nearContact?.id===h.id && nearContact.down) {
      const n=nearContact;
      const point=new THREE.Vector3((n.u-.5)*n.win.w,(.5-n.v)*n.win.h,0).applyMatrix4(n.win.obj.matrixWorld);
      targets.push({id:h.id,end:camera.worldToLocal(point).toArray(),direct:true,touching:true,fingerHover:true,blueOutline,down:n.down,...(noBeam?{noBeam:true}:{})});continue;
    }
    if(packet.consumed.has(h.id) || packet.blockFar){targets.push({id:h.id,hidden:true,blueOutline});continue;}
    // A mão do cursor usa a posição predita (só apresentação): o raio desliza na taxa do display.
    const p=cursor.hand?.id===h.id?predictedCursor(now):screenPoint(h.aim);
    const r=phoneRay(p.x,p.y);
    const list=wins.filter(w=>!w.hidden).flatMap(w=>[w.resizeHit,w.grab,w.hit]);
    if(dockVisible){
      if(!dockBrowserPopup.hidden)list.push(dockPopupHit);
      list.push(dockMoveHit,dockHit);
    }
    if(kbHit && kbObj && !kbHidden)list.push(kbHit);
    const hit=r.intersectObjects(list,false)[0];
    const isDown=(cursor.hand?.id===h.id&&cursor.down) || now < fingerPokeFlashUntil;
    const isTouching=fingerHover || isDown || Boolean(hit) || Boolean(nearContact?.id===h.id);
    targets.push({id:h.id,...(hit?{end:hit.point.toArray()}:{}),down:isDown,touching:isTouching,fingerHover,blueOutline,...(noBeam?{noBeam:true}:{})});
  }
  const json=JSON.stringify(targets);
  if(json!==lastTargets){lastTargets=json;window.NativeXR.handTargets?.(json);}
});

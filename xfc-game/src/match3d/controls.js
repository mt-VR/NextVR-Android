// Controles da partida: analógico virtual fixo no canto inferior esquerdo e
// botões de ação à direita, como no FC Mobile e no eFootball (os prints de
// referência). Funciona com toque (o caso do Android) e também com o teclado,
// para jogar no navegador do computador.
//
// O analógico NÃO é flutuante: a base fica sempre no mesmo lugar (canto
// inferior esquerdo, como nos prints) e o vetor é medido a partir do centro
// dele.

import { el } from '../ui/dom.js';

const STICK_BASE = 128;   // diâmetro da base, em px do palco
const STICK_RADIUS = 44;  // alcance do knob, em px do palco
const DEAD_ZONE = 0.16;

const BUTTONS = [
  { id: 'pass', label: 'PASSE', className: 'ctrl-btn--pass' },
  { id: 'shoot', label: 'CHUTE', className: 'ctrl-btn--shoot' },
  { id: 'lob', label: 'ENFIADA', className: 'ctrl-btn--lob' },
  { id: 'dribble', label: 'PEDALADA', className: 'ctrl-btn--dribble' },
  { id: 'tackle', label: 'CARRINHO', className: 'ctrl-btn--tackle' },
  { id: 'switch', label: 'TROCAR', className: 'ctrl-btn--switch' },
  { id: 'rainbow', label: 'CHAPÉU', className: 'ctrl-btn--rainbow' },
  { id: 'super', label: 'SUPERCHUTE', className: 'ctrl-btn--super' },
  { id: 'sprint', label: 'CORRER', className: 'ctrl-btn--sprint' }
];

export function createControls({ onCommand, onMove, onSprint, root }) {
  const stick = el('div', { class: 'controls__stick' },
    el('span', { class: 'controls__stick-base' }),
    el('span', { class: 'controls__stick-knob' })
  );
  const zone = el('div', { class: 'controls__stick-zone' });

  // ------------------------------------------------- chute carregado --
  // Toque rápido: chute normal. Segura: carrega a força. Arrasta para baixo
  // durante o toque: chute colocado no ângulo (como no FC Mobile).
  const SHOOT_FULL_MS = 1050;
  const SHOOT_MIN_STRENGTH = 0.3;
  let shootCharge = null;
  let shootPointerId = null;
  let cancelActiveShot = () => {};
  const cancelActiveActions = [];
  let movementVector = { x: 0, z: 0 };
  let enabled = true;

  function shootUi(button, strength, kind, charging) {
    button.style.setProperty('--charge', String(charging ? 0.25 + strength * 0.75 : 0));
    button.classList.toggle('is-charging', Boolean(charging));
    for (const shotKind of ['placed', 'curved', 'power']) {
      button.classList.toggle(`is-${shotKind}`, Boolean(charging && kind === shotKind));
    }
    if (charging) button.dataset.shotType = kind || 'normal';
    else delete button.dataset.shotType;
  }

  function shotGesture(shot, event) {
    const dx = event.clientX - shot.startX;
    const dy = event.clientY - shot.startY;
    const distance = Math.hypot(dx, dy);
    if (distance < 28) return 'normal';

    // O arrasto para trás é medido contra a direção atual do analógico.
    // Sem direção, um swipe horizontal para a esquerda funciona como fallback.
    const dragX = dx / distance;
    const dragZ = -dy / distance;
    const moveLength = Math.hypot(movementVector.x, movementVector.z);
    const backward = moveLength > 0.28
      ? dragX * (movementVector.x / moveLength) + dragZ * (movementVector.z / moveLength) < -0.58
      : dx < -34 && Math.abs(dy) < Math.abs(dx) * 0.9;
    if (backward) return 'power';
    if (dy < -30) return 'curved';
    if (dy > 30) return 'placed';
    return 'normal';
  }

  function shotCurve(shot, event) {
    if (shot.kind !== 'curved') return 0;
    const dx = event.clientX - shot.startX;
    const swipeStrength = Math.min(1, Math.abs(dx) / 105);
    const stickStrength = Math.min(1, Math.hypot(movementVector.x, movementVector.z));
    const direction = Math.sign(dx)
      || Math.sign(movementVector.x)
      || -Math.sign(movementVector.z)
      || 1;
    // Quanto mais amplo o gesto lateral, maior o sidespin; o analógico serve
    // como direção/intensidade alternativa quando o swipe é quase vertical.
    return direction * (swipeStrength > 0.08
      ? Math.max(0.22, swipeStrength)
      : Math.max(0.3, stickStrength));
  }

  const buttons = BUTTONS.map(item => {
    const button = el('button', {
      class: `ctrl-btn ${item.className}`,
      type: 'button',
      dataset: { command: item.id },
      'aria-label': item.id === 'shoot'
        ? 'Chute: segure para carregar, arraste para cima para chute alto e curvado, para baixo para colocado ou para trás para superchute'
        : item.id === 'tackle'
          ? 'Carrinho: toque para tentar desarmar o adversário próximo'
          : item.label
    },
      el('span', { text: item.label }),
      item.id === 'shoot' && el('small', { class: 'ctrl-btn__gesture', text: '↑ CURVADO · ↓ COLOCADO' })
    );

    if (item.id === 'shoot') {
      button.addEventListener('pointerdown', event => {
        event.preventDefault();
        event.stopPropagation();
        if (!enabled || shootPointerId !== null) return;
        shootPointerId = event.pointerId;
        button.setPointerCapture?.(event.pointerId);
        shootCharge = {
          startX: event.clientX,
          startY: event.clientY,
          startedAt: performance.now(),
          strength: 0,
          kind: 'normal'
        };
        shootUi(button, 0, 'normal', true);
      });
      button.addEventListener('pointermove', event => {
        if (!shootCharge || event.pointerId !== shootPointerId) return;
        const elapsed = performance.now() - shootCharge.startedAt;
        shootCharge.strength = Math.max(0, Math.min(1, (elapsed - 130) / (SHOOT_FULL_MS - 130)));
        shootCharge.kind = shotGesture(shootCharge, event);
        shootUi(button, shootCharge.strength, shootCharge.kind, true);
      });
      const shootRelease = event => {
        if (!shootCharge || event.pointerId !== shootPointerId) return;
        const shot = shootCharge;
        if (event?.clientX !== undefined) shot.kind = shotGesture(shot, event);
        const payload = {
          strength: Math.max(SHOOT_MIN_STRENGTH, shot.strength),
          placed: shot.kind === 'placed',
          kind: shot.kind,
          curve: shotCurve(shot, event)
        };
        shootCharge = null;
        shootPointerId = null;
        shootUi(button, 0, 'normal', false);
        if (enabled) onCommand('shoot', payload);
      };
      const shootCancel = event => {
        if (event && shootPointerId !== null && event.pointerId !== shootPointerId) return;
        const activePointer = shootPointerId;
        shootCharge = null;
        shootPointerId = null;
        if (!event && activePointer !== null && button.hasPointerCapture?.(activePointer)) {
          button.releasePointerCapture?.(activePointer);
        }
        shootUi(button, 0, 'normal', false);
      };
      cancelActiveShot = shootCancel;
      button.addEventListener('pointerup', shootRelease);
      button.addEventListener('pointercancel', shootCancel);
      return button;
    }

    let actionPointerId = null;
    const cancelAction = () => {
      const activePointer = actionPointerId;
      actionPointerId = null;
      if (activePointer !== null && button.hasPointerCapture?.(activePointer)) {
        button.releasePointerCapture?.(activePointer);
      }
      if (item.id === 'sprint') {
        button.classList.remove('is-active');
        if (activePointer !== null) onSprint(false);
      }
    };
    cancelActiveActions.push(cancelAction);
    button.addEventListener('pointerdown', event => {
      event.preventDefault();
      event.stopPropagation();
      if (!enabled || actionPointerId !== null) return;
      actionPointerId = event.pointerId;
      button.setPointerCapture?.(event.pointerId);
      if (item.id === 'sprint') {
        onSprint(true);
        button.classList.add('is-active');
      } else {
        if(item.id==='super')onCommand('shoot',{kind:'power',strength:1});
        else onCommand(item.id);
      }
    });
    const release = event => {
      if (actionPointerId === null || (event?.pointerId !== undefined && event.pointerId !== actionPointerId)) return;
      actionPointerId = null;
      if (item.id === 'sprint') {
        onSprint(false);
        button.classList.remove('is-active');
      }
    };
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    return button;
  });

  const container = el('div', { class: 'controls' },
    zone,
    stick,
    el('div', { class: 'controls__buttons' }, buttons)
  );
  stick.classList.add('is-visible');
  root.appendChild(container);

  const knob = stick.querySelector('.controls__stick-knob');
  let pointerId = null;

  function stickCenter() {
    const box = stick.getBoundingClientRect();
    return { x: box.left + box.width / 2, y: box.top + box.height / 2, scale: box.width / STICK_BASE };
  }

  function resetStick(releaseCapture = false) {
    const activePointer = pointerId;
    pointerId = null;
    if (releaseCapture && activePointer !== null && zone.hasPointerCapture?.(activePointer)) {
      zone.releasePointerCapture?.(activePointer);
    }
    knob.style.transform = 'translate(-50%, -50%)';
    movementVector = { x: 0, z: 0 };
    onMove(0, 0);
  }

  function vectorFrom(event) {
    const center = stickCenter();
    let dx = (event.clientX - center.x) / center.scale;
    let dy = (event.clientY - center.y) / center.scale;
    const distance = Math.hypot(dx, dy);
    if (distance > STICK_RADIUS) {
      dx = (dx / distance) * STICK_RADIUS;
      dy = (dy / distance) * STICK_RADIUS;
    }
    return { dx, dy };
  }

  function applyVector(dx, dy) {
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    const nx = dx / STICK_RADIUS;
    const ny = dy / STICK_RADIUS;
    const magnitude = Math.hypot(nx, ny);
    if (magnitude < DEAD_ZONE) {
      movementVector = { x: 0, z: 0 };
      onMove(0, 0);
      return;
    }
    // "Para cima" no analógico é avançar (moveZ positivo).
    movementVector = { x: nx, z: -ny };
    onMove(nx, -ny);
  }

  zone.addEventListener('pointerdown', event => {
    if (!enabled || pointerId !== null) return;
    pointerId = event.pointerId;
    zone.setPointerCapture(event.pointerId);
    const { dx, dy } = vectorFrom(event);
    applyVector(dx, dy);
    event.preventDefault();
  });

  zone.addEventListener('pointermove', event => {
    if (event.pointerId !== pointerId) return;
    const { dx, dy } = vectorFrom(event);
    applyVector(dx, dy);
  });

  zone.addEventListener('pointerup', event => {
    if (event.pointerId !== pointerId) return;
    resetStick();
  });
  zone.addEventListener('pointercancel', event => {
    if (event.pointerId === pointerId) resetStick();
  });

  // ------------------------------------------------------------- teclado --

  const keys = new Set();
  const KEY_COMMANDS = {
    KeyJ: 'pass',
    Space: 'pass',
    KeyE: 'lob',
    KeyR: 'dribble',
    KeyC: 'rainbow',
    KeyV: 'super',
    KeyF: 'tackle',
    Tab: 'switch',
    KeyQ: 'switch'
  };
  let shootKeyStartedAt = null;

  function onKeyDown(event) {
    if (!enabled || event.repeat) return;
    keys.add(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') onSprint(true);
    if (event.code === 'KeyK' || event.code === 'KeyL') {
      if (shootKeyStartedAt === null) shootKeyStartedAt = performance.now();
      event.preventDefault();
      return;
    }
    const command = KEY_COMMANDS[event.code];
    if (command) {
      if(command==='super')onCommand('shoot',{kind:'power',strength:1});
      else onCommand(command);
      event.preventDefault();
    }
  }

  function onKeyUp(event) {
    keys.delete(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') onSprint(false);
    if (event.code === 'KeyK' || event.code === 'KeyL') {
      if (shootKeyStartedAt !== null) {
        const elapsed = performance.now() - shootKeyStartedAt;
        const strength = Math.max(SHOOT_MIN_STRENGTH, Math.min(1, (elapsed - 130) / (SHOOT_FULL_MS - 130)));
        shootKeyStartedAt = null;
        if (enabled) onCommand('shoot', { strength, placed: false });
      }
    }
  }

  function readKeyboard() {
    // Toque tem prioridade: o timer do teclado não pode zerar o analógico.
    if (pointerId !== null) return;
    if (!enabled) {
      movementVector = { x: 0, z: 0 };
      onMove(0, 0);
      return;
    }
    let x = 0;
    let z = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) z += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) z -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) x += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) x -= 1;
    movementVector = { x, z };
    onMove(x, z);
  }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  const keyboardTimer = setInterval(readKeyboard, 40);

  function setEnabled(value) {
    enabled = Boolean(value);
    container.classList.toggle('is-disabled', !enabled);
    if (!enabled) {
      resetStick(true);
      cancelActiveShot();
      for (const cancelAction of cancelActiveActions) cancelAction();
      keys.clear();
      shootKeyStartedAt = null;
      movementVector = { x: 0, z: 0 };
      onMove(0, 0);
      onSprint(false);
    }
  }

  return {
    node: container,
    /** Liga ou desliga os controles (pausa, resultado...). */
    setEnabled,
    dispose() {
      setEnabled(false);
      clearInterval(keyboardTimer);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      container.remove();
    }
  };
}

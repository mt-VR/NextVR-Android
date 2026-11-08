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
  { id: 'lob', label: 'DRIBLE', className: 'ctrl-btn--lob' },
  { id: 'tackle', label: 'DESARME', className: 'ctrl-btn--tackle' },
  { id: 'switch', label: 'TROCAR', className: 'ctrl-btn--switch' },
  { id: 'sprint', label: 'CORRER', className: 'ctrl-btn--sprint' }
];

export function createControls({ onCommand, onMove, onSprint, root }) {
  const stick = el('div', { class: 'controls__stick' },
    el('span', { class: 'controls__stick-base' }),
    el('span', { class: 'controls__stick-knob' })
  );
  const zone = el('div', { class: 'controls__stick-zone' });

  const buttons = BUTTONS.map(item => {
    const button = el('button', {
      class: `ctrl-btn ${item.className}`,
      type: 'button',
      dataset: { command: item.id }
    }, el('span', { text: item.label }));
    button.addEventListener('pointerdown', event => {
      event.preventDefault();
      event.stopPropagation();
      if (item.id === 'sprint') {
        onSprint(true);
        button.classList.add('is-active');
      } else {
        onCommand(item.id);
      }
    });
    const release = () => {
      if (item.id === 'sprint') {
        onSprint(false);
        button.classList.remove('is-active');
      }
    };
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    button.addEventListener('pointerleave', release);
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

  function resetStick() {
    pointerId = null;
    knob.style.transform = 'translate(-50%, -50%)';
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
      onMove(0, 0);
      return;
    }
    // "Para cima" no analógico é avançar (moveZ positivo).
    onMove(nx, -ny);
  }

  zone.addEventListener('pointerdown', event => {
    if (pointerId !== null) return;
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
  zone.addEventListener('pointercancel', resetStick);

  // ------------------------------------------------------------- teclado --

  const keys = new Set();
  const KEY_COMMANDS = {
    KeyJ: 'pass',
    Space: 'pass',
    KeyK: 'shoot',
    KeyL: 'shoot',
    KeyE: 'lob',
    KeyF: 'tackle',
    Tab: 'switch',
    KeyQ: 'switch'
  };

  function onKeyDown(event) {
    if (event.repeat) return;
    keys.add(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') onSprint(true);
    const command = KEY_COMMANDS[event.code];
    if (command) {
      onCommand(command);
      event.preventDefault();
    }
  }

  function onKeyUp(event) {
    keys.delete(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') onSprint(false);
  }

  function readKeyboard() {
    let x = 0;
    let z = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) z += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) z -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) x += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) x -= 1;
    if (x || z) onMove(x, z);
  }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  const keyboardTimer = setInterval(readKeyboard, 40);

  return {
    node: container,
    /** Liga ou desliga os controles (pausa, resultado...). */
    setEnabled(enabled) {
      container.classList.toggle('is-disabled', !enabled);
      if (!enabled) {
        resetStick();
        onSprint(false);
      }
    },
    dispose() {
      clearInterval(keyboardTimer);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      container.remove();
    }
  };
}

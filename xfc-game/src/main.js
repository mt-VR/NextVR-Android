// Bootstrap do XFC: monta o roteador de telas, o aviso rápido (toast) e o
// tratamento global de teclado. Cada tela exporta uma fábrica que devolve
// { node, onKey?, mount?, unmount? }.

import { createState, saveProfile } from './state.js';
import { el, clear } from './ui/dom.js';
import { introScreen } from './screens/intro.js';
import { menuScreen } from './screens/menu.js';
import { kickoffScreen } from './screens/kickoff.js';
import { squadScreen } from './screens/squad.js';
import { matchScreen } from './screens/match.js';

const host = document.getElementById('screen');
const toastHost = document.getElementById('toasts');

export const state = createState();

const registry = {
  intro: introScreen,
  menu: menuScreen,
  kickoff: kickoffScreen,
  squad: squadScreen,
  match: matchScreen
};

let current = null;

/** Mostra um aviso rápido no rodapé da tela. */
export function toast(message, { variant = 'info', duration = 2800 } = {}) {
  if (!toastHost) return;
  const node = el('div', { class: `toast${variant === 'warn' ? ' toast--warn' : ''}`, text: message });
  toastHost.appendChild(node);
  setTimeout(() => node.remove(), duration);
}

/** Troca de tela com um fade curto. */
export function go(name, params = {}) {
  const factory = registry[name];
  if (!factory) return;
  const ctx = { state, go, toast };
  const screen = factory(ctx, params);
  current?.unmount?.();
  clear(host);
  host.appendChild(screen.node);
  current = screen;
  state.lastScreen = name;
  requestAnimationFrame(() => screen.node.classList.add('is-visible'));
  screen.mount?.();
}

window.addEventListener('keydown', event => {
  if (!current) return;
  const handled = current.onKey?.(event);
  if (handled) event.preventDefault();
});

window.addEventListener('beforeunload', () => saveProfile(state));

go('intro');

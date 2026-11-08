// Bootstrap do XFC: monta o roteador de telas, o aviso rápido (toast), o
// tratamento global de teclado e o palco em paisagem.
//
// Cada tela exporta uma fábrica que devolve { node, onKey?, mount?, unmount? }.

import { createState, saveProfile } from './state.js';
import { el, clear } from './ui/dom.js';
import { introScreen } from './screens/intro.js';
import { menuScreen } from './screens/menu.js';
import { kickoffScreen } from './screens/kickoff.js';
import { squadScreen } from './screens/squad.js';
import { matchScreen } from './screens/match.js';

const app = document.querySelector('.app');
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

/* --------------------------------------------------------------- palco --- */

// O jogo é desenhado num palco fixo de 1280x720 e escalado para caber na
// tela. Num celular deitado (20:9) o palco fica mais largo que 1280 e as
// telas ganham espaço, em vez de ficarem apertadas.
const DESIGN_WIDTH = 1280;
const DESIGN_HEIGHT = 720;

function fitStage() {
  if (!app) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const scale = Math.min(width / DESIGN_WIDTH, height / DESIGN_HEIGHT);
  app.style.setProperty('--stage-scale', String(scale));
  app.style.setProperty('--stage-w', `${Math.round(width / scale)}px`);
}

window.addEventListener('resize', fitStage);
window.addEventListener('orientationchange', () => setTimeout(fitStage, 120));
fitStage();

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
  // A tela atual fica exposta no <body> para o app Android (botão "voltar")
  // saber se deve voltar uma tela do jogo ou fechar o aplicativo.
  document.body.dataset.screen = name;
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

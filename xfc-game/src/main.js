// Bootstrap do XFC: monta o roteador de telas, o aviso rápido (toast), o
// tratamento global de teclado e o palco em paisagem.
//
// Cada tela exporta uma fábrica que devolve { node, onKey?, mount?, unmount? }.

import { createState, saveProfile } from './state.js';
import { el, clear } from './ui/dom.js';
import { introScreen } from './screens/intro.js';
import { launchScreen } from './screens/launch.js';
import { menuScreen } from './screens/menu.js';
import { kickoffScreen } from './screens/kickoff.js';
import { kitsScreen } from './screens/kits.js';
import { squadScreen } from './screens/squad.js';
import { matchScreen } from './screens/match.js';
import { quickMatchScreen } from './screens/quickmatch.js';
import { playScreen } from './screens/play.js';
import { stadiumsScreen } from './screens/stadiums.js';
import { unlockAudio } from './audio.js';

// O áudio (apito, torcida) só pode começar após um gesto do usuário.
for (const eventName of ['pointerdown', 'keydown', 'touchstart']) {
  window.addEventListener(eventName, unlockAudio, { once: true, passive: true });
}

const app = document.querySelector('.app');
const host = document.getElementById('screen');
const toastHost = document.getElementById('toasts');

export const state = createState();

const registry = {
  intro: introScreen,
  launch: launchScreen,
  menu: menuScreen,
  kickoff: kickoffScreen,
  kits: kitsScreen,
  squad: squadScreen,
  match: matchScreen,
  quick: quickMatchScreen,
  play: playScreen,
  stadiums: stadiumsScreen
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

// Rede de segurança para o file://: quem abre o index.html descompactado com
// um duplo clique não consegue carregar módulos ES, e o watchdog do index.html
// injeta o bundle clássico (app.bundle.js). Se esse bundle já subiu o jogo, o
// módulo não repete listeners nem telas.
//
// `window.__xfcBooted` é a marca compartilhada entre os dois caminhos de boot.
function boot() {
  if (window.__xfcBooted) return;
  window.__xfcBooted = true;
  window.addEventListener('resize', fitStage);
  window.addEventListener('orientationchange', () => setTimeout(fitStage, 120));
  fitStage();
  window.addEventListener('keydown', event => {
    if (!current) return;
    const handled = current.onKey?.(event);
    if (handled) event.preventDefault();
  });
  window.addEventListener('beforeunload', () => saveProfile(state));
  go('intro');
}

boot();

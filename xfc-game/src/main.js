import {careerScreen} from './screens/career.js';
import {assetLibraryScreen} from './screens/asset-library.js';
// Bootstrap do XFC: monta o roteador de telas, o aviso rápido (toast), o
// tratamento global de teclado e o palco em paisagem.
//
// Cada tela exporta uma fábrica que devolve { node, onKey?, mount?, unmount? }.

import { createState, saveProfile } from './state.js';
import { el, clear } from './ui/dom.js';
import { introScreen } from './screens/intro.js';
import { launchScreen } from './screens/launch.js';
import { menuScreen } from './screens/menu.js';
import { teamSelectionScreen } from './screens/team-selection.js';
import { kickoffScreen } from './screens/kickoff.js';
import { kitsScreen } from './screens/kits.js';
import { squadScreen } from './screens/squad.js';
import { matchScreen } from './screens/match.js';
import { quickMatchScreen } from './screens/quickmatch.js';
import { playScreen } from './screens/play.js';
import { stadiumsScreen } from './screens/stadiums.js';
import { worldCupScreen } from './screens/worldcup.js';
import { modesScreen } from './screens/modes.js';
import { pvpScreen } from './screens/pvp.js';
import { competitionsScreen } from './screens/competitions.js';
import { customiseScreen } from './screens/customise.js';
import { ultimateTeamScreen } from './screens/ultimate.js';
import { trainingScreen } from './screens/training.js';
import { competitionScreen } from './screens/competition.js';
import { trophyCinematic } from './screens/trophy-cinematic.js';
import { unlockAudio } from './audio.js';
import { createGamepad } from './ui/gamepad.js';

// No Android, um toque longo em um botão abria o balão de "abrir/copiar" do
// WebView. O jogo usa botões reais; o menu de contexto é bloqueado apenas
// sobre controles da interface, sem atrapalhar campos de texto.
document.addEventListener('contextmenu', event => {
  if (event.target?.closest?.('button, [role="button"], .app')) event.preventDefault();
});

// O áudio (apito, torcida) só pode começar após um gesto do usuário.
for (const eventName of ['pointerdown', 'keydown', 'touchstart']) {
  window.addEventListener(eventName, unlockAudio, { once: true, passive: true });
}

const app = document.querySelector('.app');
const host = document.getElementById('screen');
const toastHost = document.getElementById('toasts');

export const state = createState();

const registry = {
  career:careerScreen,
  intro: introScreen,
  launch: launchScreen,
  menu: menuScreen,
  kickoff: kickoffScreen,
  friendly: (ctx,params={})=>teamSelectionScreen(ctx,{...params,selectionRoute:'friendly'}),
  kits: kitsScreen,
  squad: squadScreen,
  match: matchScreen,
  quick: quickMatchScreen,
  play: playScreen,
  stadiums: stadiumsScreen,
  modes: modesScreen,
  pvp: pvpScreen,
  competitions: competitionsScreen,
  customise: customiseScreen,
  'asset-library':assetLibraryScreen,
  worldcup: worldCupScreen,
  ultimate: ultimateTeamScreen,
  training: trainingScreen,
  competition: competitionScreen,
  // Comemoração de título (Champions, Copa, Libertadores, Brasileirão...):
  // cena 3D curta com a taça girando e o time com os braços erguidos.
  trophy: trophyCinematic
};

let current = null;

/* ------------------------------------------------------ controle console --- */

// Um único leitor de gamepad para o app inteiro, criado dentro do cenário em
// que o jogo roda (menus). O `.app` ganha a classe `has-gamepad`, que esconde
// os controles virtuais da partida e mostra o rodapé com os botões do controle.
export const gamepad = createGamepad({
  onMenuCommand: name => navigateWithPad(name)
});

function focusable() {
  const scope = host || document;
  return [...scope.querySelectorAll('button:not([disabled]), [tabindex="0"], select, input, a[href]')]
    .filter(node => node.offsetParent !== null && !node.closest('[hidden]'));
}

/** Move o foco para o próximo elemento na direção pedida (grade ou lista). */
function moveFocus(direction) {
  const items = focusable();
  if (!items.length) return;
  const active = document.activeElement;
  if (!items.includes(active)) { items[0].focus(); return; }
  const box = active.getBoundingClientRect();
  const cx = box.left + box.width / 2;
  const cy = box.top + box.height / 2;
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const sign = direction === 'right' || direction === 'down' ? 1 : -1;
  let best = null;
  let bestScore = Infinity;
  for (const node of items) {
    if (node === active) continue;
    const rect = node.getBoundingClientRect();
    const dx = rect.left + rect.width / 2 - cx;
    const dy = rect.top + rect.height / 2 - cy;
    const primary = axis === 'x' ? dx * sign : dy * sign;
    if (primary <= 4) continue;
    const secondary = axis === 'x' ? Math.abs(dy) : Math.abs(dx);
    // Prefere a mesma linha/coluna: o desvio lateral pesa mais que a distância.
    const score = primary + secondary * 2.2;
    if (score < bestScore) { bestScore = score; best = node; }
  }
  if (best) best.focus();
}

/** Navegação "tipo console" nos menus: direcional anda, A clica, B volta. */
let padNoticeShown = false;
export function navigateWithPad(name) {
  if (!current) return false;
  const active = document.activeElement;
  if (name === 'confirm') {
    if (active && active !== document.body && typeof active.click === 'function') {
      active.click();
      return true;
    }
    const items = focusable();
    if (items.length) { items[0].click(); return true; }
    return false;
  }
  if (name === 'back') {
    // B é o mesmo que Escape no teclado: cada tela já sabe o que fazer.
    const handled = current.onKey?.({ key: 'Escape', code: 'Escape', preventDefault() {} });
    if (!handled) {
      const back = host?.querySelector('.ref-back, [data-pad-back]');
      if (back) back.click();
    }
    return true;
  }
  if (name === 'tabLeft' || name === 'tabRight') {
    const tabs = [...(host?.querySelectorAll('[data-pad-tab]') || [])];
    if (!tabs.length) return false;
    const index = tabs.indexOf(active);
    const next = tabs[(index + (name === 'tabLeft' ? tabs.length - 1 : 1)) % tabs.length];
    next?.focus();
    return true;
  }
  if (['up', 'down', 'left', 'right'].includes(name)) {
    moveFocus(name);
    return true;
  }
  return false;
}

// Laço de navegação: roda só quando há controle conectado, para não gastar
// bateria em celulares sem gamepad.
let padFrame = 0;
let padLast = 0;
function padLoop(now) {
  padFrame = requestAnimationFrame(padLoop);
  const dt = Math.min(0.1, (now - padLast) / 1000 || 0.016);
  padLast = now;
  const onMatch = document.body.dataset.screen === 'play';
  gamepad.setMenuMode(!onMatch);
  const result = gamepad.poll(dt, { enabled: true });
  // Só mexe no DOM quando o estado muda: nada de tocar a árvore toda quadro.
  if (result.connected !== padWasConnected || result.family !== padWasFamily) {
    padWasConnected = result.connected;
    padWasFamily = result.family;
    document.querySelector('.app')?.classList.toggle('has-gamepad', result.connected);
    document.body.dataset.gamepad = result.connected ? result.family : '';
    if (result.connected && !padNoticeShown) { padNoticeShown = true; toast(`Controle ${result.family === 'playstation' ? 'PlayStation' : result.family === 'xbox' ? 'Xbox' : 'conectado'} detectado`, { variant: 'info', duration: 2200 }); }
  }
}
let padWasConnected = false;
let padWasFamily = '';
if (typeof requestAnimationFrame === 'function') padFrame = requestAnimationFrame(padLoop);

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
  // Pré-carrega o atleta glTF/Mixamo enquanto o jogador navega os menus: se
  // chegar a tempo, a partida já nasce com o modelo 3D real; se não, o rig
  // procedural entra no lugar e nada quebra.
  import('./match3d/models.js')
    .then(module => (module.gltfPlayersEnabled() ? module.preloadFootballerPack() : null))
    .catch(() => {});
  go('intro');
}

boot();

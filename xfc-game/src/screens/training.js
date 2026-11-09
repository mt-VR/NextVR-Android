// Centro de treino livre: um atacante controlável, um goleiro na linha,
// câmera Pro próxima ao jogador e os mesmos comandos usados nas partidas.

import { el } from '../ui/dom.js';
import { getTeam } from '../data/teams.js';
import { kitsOf } from '../data/kits.js';
import { createMatch } from '../match3d/match.js';
import { createControls } from '../match3d/controls.js';
import { createHud } from '../match3d/hud.js';
import { attachStadiumDome } from '../match3d/stadiums.js';

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;

function selectedTeam(ctx, side, fallback) {
  const requested = ctx.state.selection?.[side];
  return getTeam(requested) || getTeam(fallback);
}

export function trainingScreen(ctx, params = {}) {
  const returnTo = params.returnTo === 'modes' ? 'modes' : 'menu';
  const home = selectedTeam(ctx, 'home', 'fc-barcelona');
  let away = selectedTeam(ctx, 'away', 'real-madrid');
  if (!away || away.id === home.id) away = getTeam(home.id === 'real-madrid' ? 'fc-barcelona' : 'real-madrid');
  const homeKit = kitsOf(home.id)[ctx.state.selection?.homeKit ?? 0] || kitsOf(home.id)[0];
  const awayKit = kitsOf(away.id)[ctx.state.selection?.awayKit ?? 0] || kitsOf(away.id)[0];

  const canvas = el('canvas', {
    class: 'play__canvas training__canvas',
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    'aria-label': 'Campo de treino 3D em câmera Pro'
  });
  const shotsValue = el('b', { text: '0' });
  const goalsValue = el('b', { text: '0' });
  const savesValue = el('b', { text: '0' });
  const status = el('p', {
    class: 'training__status',
    'aria-live': 'polite',
    text: 'BOLA NO PÉ · DRIBLE PARA SE APROXIMAR E CHUTE NO GOL.'
  });
  const exitButton = el('button', {
    class: 'training__exit',
    type: 'button',
    'aria-label': 'Sair do centro de treino',
    onClick: () => ctx.go(returnTo)
  }, '‹  SAIR');
  const resetButton = el('button', {
    class: 'training__reset',
    type: 'button',
    'aria-label': 'Recomeçar o exercício',
    onClick: () => {
      match?.world.prepareTraining();
      status.textContent = 'EXERCÍCIO REINICIADO · A BOLA ESTÁ NO SEU PÉ.';
    }
  }, 'RECOMEÇAR');
  const header = el('header', { class: 'training__header' },
    exitButton,
    el('div', { class: 'training__title' },
      el('span', { class: 'training__eyebrow', text: 'XFC 27  ·  TREINO LIVRE' }),
      el('h1', { text: 'CENTRO DE TREINO' })
    ),
    el('div', { class: 'training__stats', 'aria-label': 'Estatísticas do treino' },
      el('div', { class: 'training__stat' }, shotsValue, el('span', { text: 'CHUTES' })),
      el('div', { class: 'training__stat' }, goalsValue, el('span', { text: 'GOLS' })),
      el('div', { class: 'training__stat' }, savesValue, el('span', { text: 'DEFESAS' }))
    ),
    resetButton
  );
  const instructions = el('div', { class: 'training__instructions' },
    el('span', { class: 'training__camera-badge', text: 'CÂMERA PRO' }),
    el('span', { text: 'ANALÓGICO: MOVIMENTAR' }),
    el('span', { text: 'DRIBLE: ARRANCADA' }),
    el('span', { text: 'CHUTE: SEGURE PARA CARREGAR' })
  );
  const stageBox = el('div', { class: 'play__stage training__stage' }, canvas, header, status, instructions);
  const node = el('div', { class: 'screen screen--play screen--training' }, stageBox);

  let match = null;
  let hud = null;
  let controls = null;
  let dome = null;
  let timer = 0;

  function showTrainingEvent(event) {
    if (event.type === 'shot') {
      status.textContent = 'CHUTE! TENTE MIRAR NOS CANTOS DO GOL.';
      hud?.showBanner('BOA FINALIZAÇÃO!', 'info', 1300);
    } else if (event.type === 'training-save') {
      status.textContent = 'DEFESA DO GOLEIRO · PEGUE A BOLA E TENTE DE NOVO.';
      hud?.showBanner('DEFESA DO GOLEIRO!', 'info', 1400);
    } else if (event.type === 'training-goal') {
      status.textContent = 'GOOOOL! A BOLA VOLTA PARA O SEU PÉ.';
      hud?.showBanner('GOOOOL!', 'goal', 1600);
    } else if (event.type === 'training-miss') {
      status.textContent = 'FOI PARA FORA · MUDE A DIREÇÃO E TENTE DE NOVO.';
      hud?.showBanner('TENTE OUTRO CHUTE', 'info', 1400);
    }
  }

  match = createMatch({
    canvas,
    home,
    away,
    homeKit,
    awayKit,
    minutes: 6,
    difficulty: 'easy',
    userSide: 'home',
    stadium: 0,
    training: true,
    onEvent: showTrainingEvent
  });
  hud = createHud({ root: stageBox, home, away });
  controls = createControls({
    root: stageBox,
    onCommand: (name, payload) => {
      if (name === 'dribble') status.textContent = 'PIQUE & FINTA · USE O ANALÓGICO PARA PASSAR PELO MARCADOR.';
      if (name === 'shoot') status.textContent = 'CHUTE! TENTE MIRAR NOS CANTOS DO GOL.';
      match.world.command(name, payload);
    },
    onMove: (x, z) => {
      match.world.input.moveX = x;
      match.world.input.moveZ = z;
    },
    onSprint: value => {
      match.world.input.sprint = value;
    }
  });
  controls.setEnabled(true);
  hud.node.classList.add('is-visible');
  dome = attachStadiumDome(match.engine.scene, 0);

  // O pontapé inicial padrão é substituído por um exercício repetível:
  // um atacante com a bola e somente o goleiro adversário em campo.
  match.start();
  match.engine.stop();
  match.world.setPaused(true);
  match.world.prepareTraining();
  match.world.setPaused(false);
  match.engine.start();
  window.__xfcMatch = match;
  window.__xfcTrainingMatch = match;

  const refresh = () => {
    if (!match) return;
    const player = match.world.members('home')[0] || null;
    const snapshot = match.world.snapshot();
    hud.update(snapshot, [], {
      x: match.ball.state.position.x,
      z: match.ball.state.position.z
    }, { player, visible: false, x: 0, y: 0, z: 0 });
    const stats = match.world.trainingStats;
    shotsValue.textContent = String(stats.shots);
    goalsValue.textContent = String(stats.goals);
    savesValue.textContent = String(stats.saves);
  };
  timer = setInterval(refresh, 120);
  refresh();

  function onKey(event) {
    if (event.key === 'Escape' || event.key === 'Backspace') {
      ctx.go(returnTo);
      return true;
    }
    return false;
  }

  return {
    node,
    onKey,
    unmount() {
      clearInterval(timer);
      controls?.dispose();
      hud?.dispose();
      dome?.dispose();
      match?.dispose();
      if (window.__xfcMatch === match) delete window.__xfcMatch;
      if (window.__xfcTrainingMatch === match) delete window.__xfcTrainingMatch;
    }
  };
}

// Três exercícios jogáveis: bola parada com barreira, pênalti e treino
// coletivo com companheiros ativos para passar, receber, combinar e finalizar.

import { el } from '../ui/dom.js';
import { modeHomeButton } from '../ui/mode-home.js';
import { getTeam } from '../data/teams.js';
import { kitsOf } from '../data/kits.js';
import { createMatch } from '../match3d/match.js';
import { createControls } from '../match3d/controls.js';
import { createHud } from '../match3d/hud.js';
import { attachStadiumDome } from '../match3d/stadiums.js';

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;

const DRILLS = [
  {
    id: 'freekick',
    number: '01',
    icon: '◉',
    title: 'FALTAS LIVRES',
    name: 'TREINO DE FALTAS LIVRES',
    description: 'Supere a barreira e o goleiro. As tentativas alternam distância e ângulo.',
    instruction: 'ANALÓGICO: AJUSTAR · CHUTE: BATER COLOCADO OU COM FORÇA',
    status: 'FALTA POSICIONADA · CONTORNE A BARREIRA E VENÇA O GOLEIRO.'
  },
  {
    id: 'penalty',
    number: '02',
    icon: '⚽',
    title: 'PÊNALTIS',
    name: 'TREINO DE PÊNALTIS',
    description: 'Bata da marca do pênalti, mire os cantos e enfrente um goleiro ativo.',
    instruction: 'ANALÓGICO: MIRAR · SEGURE CHUTE PARA CARREGAR',
    status: 'BOLA NA MARCA · ESCOLHA O CANTO E BATA O PÊNALTI.'
  },
  {
    id: 'team',
    number: '03',
    icon: '⌁',
    title: 'TREINO DE EQUIPE',
    name: 'TREINO DE EQUIPE',
    description: 'Use os companheiros ativos para trocar passes, fazer tabelas e concluir a jogada.',
    instruction: 'PASSE: J / BOTÃO · TROCAR: Q / BOTÃO · CHUTE: K / BOTÃO',
    status: 'TREINO COLETIVO · PROCURE UM COMPANHEIRO E ATAQUE EM CONJUNTO.'
  }
];

function selectedTeam(ctx, side, fallback) {
  const requested = ctx.state.selection?.[side];
  return getTeam(requested) || getTeam(fallback);
}

function returnTarget(params) {
  return params.returnTo === 'modes' ? 'modes' : 'menu';
}

export function trainingScreen(ctx, params = {}) {
  const drill = DRILLS.find(item => item.id === params.drill);
  if (!drill) return trainingSelectScreen(ctx, params);
  return trainingSessionScreen(ctx, params, drill);
}

function trainingSelectScreen(ctx, params = {}) {
  const returnTo = returnTarget(params);
  let focusIndex = 0;
  const choices = DRILLS.map((item, index) => el('button', {
    class: `training-select__choice${index === 0 ? ' is-focused' : ''}`,
    type: 'button',
    dataset: { drill: item.id },
    onClick() { startDrill(item); }
  },
    el('span', { class: 'training-select__number', text: `EXERCÍCIO ${item.number}` }),
    el('span', { class: 'training-select__icon', 'aria-hidden': 'true', text: item.icon }),
    el('b', { class: 'training-select__title', text: item.title }),
    el('span', { class: 'training-select__description', text: item.description }),
    el('span', { class: 'training-select__start', text: 'COMEÇAR TREINO  →' })
  ));
  const node = el('div', { class: 'screen screen--training-select' },
    modeHomeButton(ctx),
    el('header', { class: 'training-select__brand' },
      el('span', { class: 'training-select__eyebrow', text: 'XFC 27  ·  CENTRO DE TREINO' }),
      el('h1', { text: 'ESCOLHA SEU EXERCÍCIO' })
    ),
    el('section', { class: 'training-select__content' },
      el('p', { class: 'training-select__copy', text: 'Treine lances de bola parada ou entre em campo com seus companheiros. Cada exercício usa jogadores, posições e regras próprios.' }),
      el('div', { class: 'training-select__grid', role: 'group', 'aria-label': 'Exercícios de treinamento' }, ...choices)
    ),
    el('button', {
      class: 'training-select__back',
      type: 'button',
      onClick: () => ctx.go(returnTo)
    }, '‹  VOLTAR'),
    el('div', { class: 'training-select__footer' },
      el('b', { text: 'XFC TRAINING' }),
      el('span', { text: '  ·  3 EXERCÍCIOS JOGÁVEIS' })
    )
  );

  function startDrill(item) {
    ctx.go('training', { drill: item.id, returnTo });
  }

  function select(index) {
    focusIndex = (index + DRILLS.length) % DRILLS.length;
    choices.forEach((choice, choiceIndex) => {
      choice.classList.toggle('is-focused', choiceIndex === focusIndex);
      choice.setAttribute('aria-pressed', choiceIndex === focusIndex ? 'true' : 'false');
    });
  }
  choices.forEach((choice, index) => {
    choice.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
    choice.addEventListener('focus', () => select(index));
  });

  return {
    node,
    onKey(event) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        select(focusIndex + 1);
        choices[focusIndex].focus();
        return true;
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        select(focusIndex - 1);
        choices[focusIndex].focus();
        return true;
      }
      if (event.key === 'Enter' || event.key === ' ') {
        startDrill(DRILLS[focusIndex]);
        return true;
      }
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go(returnTo);
        return true;
      }
      return false;
    }
  };
}

function trainingSessionScreen(ctx, params, drill) {
  const returnTo = returnTarget(params);
  const home = selectedTeam(ctx, 'home', 'fc-barcelona');
  let away = selectedTeam(ctx, 'away', 'real-madrid');
  if (!away || away.id === home.id) away = getTeam(home.id === 'real-madrid' ? 'fc-barcelona' : 'real-madrid');
  const homeKit = kitsOf(home.id)[ctx.state.selection?.homeKit ?? 0] || kitsOf(home.id)[0];
  const awayKit = kitsOf(away.id)[ctx.state.selection?.awayKit ?? 0] || kitsOf(away.id)[0];

  const canvas = el('canvas', {
    class: 'play__canvas training__canvas',
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    'aria-label': `Campo 3D: ${drill.name.toLocaleLowerCase()}`
  });
  const shotsValue = el('b', { text: '0' });
  const goalsValue = el('b', { text: '0' });
  const savesValue = el('b', { text: '0' });
  const passesValue = el('b', { text: '0' });
  const combinationsValue = el('b', { text: '0' });
  const status = el('p', {
    class: 'training__status',
    'aria-live': 'polite',
    text: drill.status
  });
  const exitButton = el('button', {
    class: 'training__exit',
    type: 'button',
    'aria-label': 'Sair do exercício',
    onClick: () => ctx.go(returnTo)
  }, '‹  SAIR DO EXERCÍCIO');
  const resetButton = el('button', {
    class: 'training__reset',
    type: 'button',
    'aria-label': 'Recomeçar o exercício',
    onClick: () => {
      match?.world.prepareTraining();
      status.textContent = 'EXERCÍCIO REINICIADO · NOVA TENTATIVA PRONTA.';
    }
  }, 'RECOMEÇAR');
  const stat = (value, label) => el('div', { class: 'training__stat' }, value, el('span', { text: label }));
  const stats = el('div', { class: 'training__stats', 'aria-label': 'Estatísticas do treino' },
    stat(shotsValue, 'CHUTES'),
    stat(goalsValue, 'GOLS'),
    stat(savesValue, 'DEFESAS'),
    drill.id === 'team' ? stat(passesValue, 'PASSES') : null,
    drill.id === 'team' ? stat(combinationsValue, 'TABELAS') : null
  );
  const header = el('header', { class: 'training__header' },
    exitButton,
    el('div', { class: 'training__title' },
      el('span', { class: 'training__eyebrow', text: `XFC 27  ·  ${drill.title}` }),
      el('h1', { text: drill.name })
    ),
    stats,
    resetButton
  );
  const instructions = el('div', { class: 'training__instructions' },
    el('span', { class: 'training__camera-badge', text: 'CÂMERA PRO' }),
    el('span', { text: 'ANALÓGICO: MOVIMENTAR' }),
    el('span', { text: drill.instruction }),
    drill.id === 'team' ? el('span', { text: 'DRIBLE: ARRANCADA' }) : null
  );
  const roster = drill.id === 'team'
    ? el('div', { class: 'training__roster', text: '10 JOGADORES DE LINHA · PASSE · RECEPÇÃO · TABELA · FINALIZAÇÃO' })
    : null;
  const stageBox = el('div', {
    class: `play__stage training__stage${drill.id === 'team' ? ' training__stage--team' : ''}`,
    dataset: { drill: drill.id }
  }, canvas, modeHomeButton(ctx, 'mode-home-button--training'), header, status, instructions, roster);
  const node = el('div', { class: 'screen screen--play screen--training' }, stageBox);

  let match = null;
  let hud = null;
  let controls = null;
  let dome = null;
  let timer = 0;

  function showTrainingEvent(event) {
    if (event.type === 'shot') {
      status.textContent = drill.id === 'penalty'
        ? 'PÊNALTI BATIDO! OBSERVE O GOLEIRO E PREPARE A PRÓXIMA COBRANÇA.'
        : 'CHUTE! TENTE MIRAR NOS CANTOS DO GOL.';
      hud?.showBanner(drill.id === 'penalty' ? 'PÊNALTI BATIDO!' : 'BOA FINALIZAÇÃO!', 'info', 1300);
    } else if (event.type === 'pass' && drill.id === 'team') {
      status.textContent = 'PASSE EXECUTADO · MOVIMENTE-SE PARA RECEBER A DEVOLUÇÃO.';
    } else if (event.type === 'training-save') {
      status.textContent = 'DEFESA DO GOLEIRO · A PRÓXIMA TENTATIVA JÁ VEM.';
      hud?.showBanner('DEFESA DO GOLEIRO!', 'info', 1400);
    } else if (event.type === 'training-goal') {
      status.textContent = drill.id === 'penalty' ? 'PÊNALTI CONVERTIDO! NOVA COBRANÇA EM INSTANTES.' : 'GOOOOL! NOVA TENTATIVA EM INSTANTES.';
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
    trainingDrill: drill.id,
    onEvent: showTrainingEvent
  });
  hud = createHud({ root: stageBox, home, away });
  controls = createControls({
    root: stageBox,
    onCommand: (name, payload) => {
      if (name === 'dribble') status.textContent = 'PIQUE & FINTA · USE O ANALÓGICO PARA CRIAR ESPAÇO.';
      if (name === 'shoot') status.textContent = 'CHUTE! ESCOLHA UM CANTO E FINALIZE.';
      if (name === 'pass' && drill.id === 'team') status.textContent = 'PASSE · MOVIMENTE-SE PARA ABRIR UMA NOVA LINHA.';
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

  // A partida começa em um cenário preparado para o exercício selecionado.
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
    const player = match.controlled.home || null;
    const snapshot = match.world.snapshot();
    hud.update(snapshot, [], {
      x: match.ball.state.position.x,
      z: match.ball.state.position.z
    }, { player, visible: false, x: 0, y: 0, z: 0 });
    const trainingStats = match.world.trainingStats;
    shotsValue.textContent = String(trainingStats.shots);
    goalsValue.textContent = String(trainingStats.goals);
    savesValue.textContent = String(trainingStats.saves);
    passesValue.textContent = String(trainingStats.passes || 0);
    combinationsValue.textContent = String(trainingStats.combinations || 0);
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

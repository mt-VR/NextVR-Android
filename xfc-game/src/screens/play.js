import {getCareer,careerRoster,settleManager,managerTeam} from '../data/career-services.js';
import {plannedTeam} from '../data/game-plan.js';
import {settleCareer} from '../data/career.js';
import {createCareerRating} from '../data/career-rating.js';
import {graphicsSettings} from '../ui/graphics-settings.js';
// Tela da partida: a apresentação pré-jogo (cinematográfica), o jogo 3D em
// si e o resultado final.
//
// O módulo cuida da interface; o motor (regras, IA, física) fica em
// `src/match3d/match.js`.

import { el, padButton } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { getTeam } from '../data/teams.js';
import { kitsOf, kitSvg } from '../data/kits.js';
import { getNationalTeam, recordCampaignMatchResult } from '../data/worldcup.js';
import {
  getCompetition,
  competitionTeam,
  startingEleven,
  recordTournamentResult,
  nextTournamentFixture
} from '../data/tournament.js';
import { footballCard,enablePositionDrag,planToPitch,pitchToPlan,positionCard } from '../ui/game-plan.js';
import { saveProfile } from '../state.js';
import { ultimateMatchTeam, settleUtMatch } from '../data/ultimate.js';
import { flagSvg } from '../ui/flags.js';
import { createMatch } from '../match3d/match.js';
import { createControls } from '../match3d/controls.js';
import { createHud } from '../match3d/hud.js';
import * as THREE from '../../vendor/three.module.min.js';
import { cheer, whistle, kickSound, applause, boo } from '../audio.js';
import { STADIUMS, attachStadiumDome } from '../match3d/stadiums.js';

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;
const projection = new THREE.Vector3();

const NATIONAL_COLORS = {
  brazil: { primary: '#f6d61b', secondary: '#16733b', trim: '#ffffff', keeperPrimary: '#246bd1', keeperSecondary: '#10274b' },
  argentina: { primary: '#79c6e8', secondary: '#ffffff', trim: '#1a4f91', keeperPrimary: '#293444', keeperSecondary: '#f4c542' },
  france: { primary: '#173c78', secondary: '#e6424a', trim: '#ffffff', keeperPrimary: '#d5b52e', keeperSecondary: '#222222' },
  england: { primary: '#f4f4f4', secondary: '#19366f', trim: '#d23b4b', keeperPrimary: '#42a76b', keeperSecondary: '#173523' },
  spain: { primary: '#d92332', secondary: '#f5ca31', trim: '#f4f4f4', keeperPrimary: '#2963bd', keeperSecondary: '#13264a' },
  portugal: { primary: '#b82132', secondary: '#176b43', trim: '#f0c743', keeperPrimary: '#e0e3eb', keeperSecondary: '#343a47' },
  germany: { primary: '#f3f3f3', secondary: '#222222', trim: '#d6323b', keeperPrimary: '#f0bd32', keeperSecondary: '#222222' },
  italy: { primary: '#1566a5', secondary: '#f5f5f5', trim: '#1f8b58', keeperPrimary: '#e5d644', keeperSecondary: '#263238' }
};

function playableNationalTeam(team) {
  if (!team) return null;
  const colors = team.colors || NATIONAL_COLORS[team.id] || NATIONAL_COLORS.brazil;
  const players = (team.players || []).map((player, index) => {
    const rating = player.rating || 75;
    const position = player.position || 'CM';
    const forward = ['ST', 'LW', 'RW', 'CF'].includes(position);
    return {
      id: `${team.id}-${player.number || index + 1}-${index}`,
      name: player.name,
      fullName: player.name,
      number: player.number || index + 1,
      pos: position === 'AM' ? 'CAM' : position,
      ovr: rating,
      rating,
      photo: null,
      stats: {
        pace: Math.min(99, rating + (forward ? 2 : -2)),
        shooting: Math.min(99, Math.max(32, rating + (forward ? 2 : position === 'GK' ? -42 : -12))),
        passing: Math.min(99, Math.max(35, rating - (forward ? 1 : 0))),
        dribbling: Math.min(99, Math.max(34, rating + (forward ? 1 : -3))),
        defending: Math.max(25, rating - (position === 'CB' || position === 'GK' ? -2 : 16)),
        physical: Math.max(35, rating - 2)
      }
    };
  });
  return {
    ...team,
    isNationalTeam: true,
    shortName: team.name,
    crest: null,
    league: 'Copa do Mundo',
    formation: '4-3-3',
    colors,
    ratings: {
      att: team.ratings.ATT,
      mid: team.ratings.MID,
      def: team.ratings.DEF,
      ovr: Math.round((team.ratings.ATT + team.ratings.MID + team.ratings.DEF) / 3)
    },
    players
  };
}

function resolvePlayableTeam(id) {
  return getTeam(id) || playableNationalTeam(getNationalTeam(id)) || getTeam('fc-barcelona');
}

function kitForTeam(team, index = 0) {
  if (team.isNationalTeam || team.id==='xfc-ut') {
    return { name: `${team.name} Home`, colors: team.colors, pattern: 'solid' };
  }
  const kits = kitsOf(team.id);
  return kits[index] || kits[0];
}

function teamMark(team, className = 'team-mark') {
  if (team?.crest?.startsWith('assets/')) {
    return el('img', { class: className, src: team.crest, alt: `Escudo do ${team.name}` });
  }
  return el('span', { class: `${className} team-mark--flag`, 'aria-label': `Bandeira de ${team.name}` },
    flagSvg(team?.flagCode || 'br')
  );
}

/** Projeta um ponto do mundo 3D para as coordenadas do palco (1280x720). */
function projectToStage(camera, position) {
  projection.set(position.x, position.y, position.z).project(camera);
  return {
    x: (projection.x * 0.5 + 0.5) * STAGE_WIDTH,
    y: (-projection.y * 0.5 + 0.5) * STAGE_HEIGHT,
    visible: projection.z < 1 && projection.z > -1
  };
}

export function playScreen(ctx, params = {}) {
  const career=params.careerMatchId?getCareer(ctx.state.profile,params.careerKind||'player'):null;
  const careerManager=career?.kind==='manager';
  const careerClub=career&&career.pending?.id===params.careerMatchId?plannedTeam(careerRoster(career,careerManager?'manager':'player'),career.plan,careerManager?null:career.player.id):null;
  const isPlayerCareer=Boolean(careerClub&&!careerManager&&career);
  const heroId=isPlayerCareer?career.player.id:null;
  const rating=isPlayerCareer?createCareerRating():null;
  const careerPerformance={goals:0,shots:0,passes:0};
  const home = (careerClub?.id===params.home?careerClub:null) || (params.ultimateMatchId && ultimateMatchTeam(ctx.state.profile,params.ultimateMatchId)) || (careerManager&&managerTeam(career,params.home)) || resolvePlayableTeam(params.home || ctx.state.selection.home);
  const away = (careerClub?.id===params.away?careerClub:null) || (careerManager&&managerTeam(career,params.away)) || resolvePlayableTeam(params.away || ctx.state.selection.away || 'real-madrid');
  const homeKit = kitForTeam(home, params.homeKit ?? 0);
  const awayKit = kitForTeam(away, params.awayKit ?? 0);
  const userSide = params.userSide === 'away' ? 'away' : 'home';
  let matchReward = null;
  let rewarded = false;
  const minutes = params.minutes ?? 6;
  const difficulty = params.difficulty ?? 'normal';

  let stage = 'prematch';
  let paused = false;
  let lastSnapshot = { score: [0, 0], display: "0'00", half: 1, phase: 'kickoff' };
  // Expulsão do herói da carreira.
  let spectatorMode = false, dismissalShown = false;

  const canvas = el('canvas', {
    class: 'play__canvas',
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    'aria-label': 'Campo de futebol em 3D'
  });

  const overlay = el('div', { class: 'play__overlay' });
  const stageBox = el('div', { class: 'play__stage' }, canvas, overlay);
  const pauseButton = el('button', {
    class: 'play__pause-button',
    type: 'button',
    dataset: { pauseButton: 'true' },
    'aria-label': 'Pausar partida',
    'aria-hidden': 'true',
    disabled: true,
    onClick: () => showPause()
  },
    el('span', { class: 'play__pause-icon', 'aria-hidden': 'true', text: 'Ⅱ' }),
    el('span', { class: 'play__pause-label', text: 'PAUSAR' })
  );
  stageBox.appendChild(pauseButton);
  const node = el('div', { class: 'screen screen--play' }, stageBox);

  function setPauseButtonVisible(visible) {
    pauseButton.classList.toggle('is-visible', visible);
    pauseButton.disabled = !visible;
    pauseButton.setAttribute('aria-hidden', String(!visible));
  }

  // ---------------------------------------------------- pré-jogo imersivo --

  // Estádio escolhido nas telas anteriores (senão, sorteia um).
  const paramStadium = Number(params.stadium);
  let stadiumIndex = Number.isFinite(paramStadium) && paramStadium >= 0 && paramStadium < STADIUMS.length
    ? Math.floor(paramStadium)
    : Math.floor(Math.random() * STADIUMS.length);
  let dome = null;

  /** Uniforme do time para o pré-jogo (clube: blusa do kit; seleção: cores). */
  function kitArt(team, kit) {
    if (team.isNationalTeam) {
      const colors = kit?.colors || {};
      return `<svg viewBox="0 0 60 64" width="34" height="36" aria-hidden="true">
        <path d="M20 6l10 5 10-5 12 8-6 10-4-2v30H18V22l-4 2-6-10z"
          fill="${colors.primary || '#fff'}" stroke="${colors.secondary || '#111'}" stroke-width="2"/>
      </svg>`;
    }
    return kit ? kitSvg(kit, { width: 34 }) : '';
  }

  /** Escalação resumida de um lado do pré-jogo. */
  function lineupColumn(team, kit) {
    const players = startingEleven(team.id);
    const list = players.length
      ? players
      : (team.players || []).slice(0, 11).map((player, index) => ({
        name: player.name, number: player.number ?? index + 1, position: player.pos || 'CM'
      }));
    return el('section', { class: 'showcase__lineup' },
      el('header', { class: 'showcase__lineup-head' },
        teamMark(team, 'showcase__lineup-crest'),
        el('b', { text: team.shortName || team.name }),
        el('span', { class: 'showcase__lineup-kit', html: kitArt(team, kit) })
      ),
      el('ul', { class: 'showcase__lineup-list' },
        ...list.map(player => el('li', { class: 'showcase__lineup-player' },
          el('b', { class: 'showcase__lineup-number', text: String(player.number) }),
          el('span', { class: 'showcase__lineup-name', text: player.name }),
          el('i', { class: 'showcase__lineup-pos', text: player.position || '' })
        ))
      )
    );
  }

  /** Pré-jogo: a foto do estádio envolvendo o 3D — toque na tela entra. */
  function prematchShowcase() {
    const stadiumName = el('b', { class: 'showcase__name' });
    const stadiumTag = el('span', { class: 'showcase__tag' });
    const dots = el('div', { class: 'showcase__dots' },
      STADIUMS.map(() => el('i', { class: 'showcase__dot' }))
    );

    function refresh() {
      const stadium = STADIUMS[stadiumIndex];
      stadiumName.textContent = stadium.name;
      stadiumTag.textContent = stadium.tag;
      [...dots.children].forEach((dot, index) => {
        dot.classList.toggle('is-active', index === stadiumIndex);
      });
    }

    const arrow = (direction, symbol) => el('button', {
      class: 'showcase__arrow',
      type: 'button',
      'aria-label': direction === 1 ? 'Próximo estádio' : 'Estádio anterior',
      onClick: event => {
        event.stopPropagation();
        stadiumIndex = (stadiumIndex + direction + STADIUMS.length) % STADIUMS.length;
        dome?.setStadium(stadiumIndex);
        refresh();
      }
    }, symbol);

    refresh();

    const root = el('div', { class: 'prematch prematch--showcase', onClick: () => startMatch() },
      el('div', { class: 'showcase__chip', text: params.competition?.title || (params.worldCupMatchId ? 'XFC WORLD CUP™' : 'XFC MATCH DAY') }),
      el('div', { class: 'showcase__plaque' },
        el('span', { class: 'showcase__label', text: 'ESTÁDIO OFICIAL' }),
        stadiumName,
        stadiumTag,
        el('div', { class: 'showcase__matchup' },
          teamMark(home, 'showcase__crest'),
          el('span', { text: `${(home.shortName || home.name).toUpperCase()}  ×  ${(away.shortName || away.name).toUpperCase()}` }),
          teamMark(away, 'showcase__crest')
        ),
        dots
      ),
      el('div', { class: 'showcase__lineups' },
        lineupColumn(home, homeKit),
        lineupColumn(away, awayKit)
      ),
      el('div', { class: 'showcase__arrows' },
        arrow(-1, '‹'),
        arrow(1, '›')
      ),
      el('div', { class: 'showcase__enter', text: 'TOQUE PARA ENTRAR EM CAMPO' })
    );

    // O estádio escolhido toma a tela (a arte oficial atrás de tudo).
    const photoRefresh = () => {
      root.style.backgroundImage =
        'linear-gradient(180deg, rgba(2, 10, 18, 0.16) 0%, rgba(2, 10, 18, 0.08) 42%, rgba(2, 10, 18, 0.74) 100%), '
        + `url("${STADIUMS[stadiumIndex].file}")`;
    };
    photoRefresh();
    // As setas trocam o palco: o fundo acompanha a troca.
    root.querySelectorAll('.showcase__arrow').forEach(button => {
      button.addEventListener('click', () => photoRefresh());
    });
    return root;
  }

  // --------------------------------------------------------------- partida --

  let match = null;
  let hud = null;
  let controls = null;
  let timer = 0;
  let initializeFrame = 0;
  let initializeTimer = 0;
  let initialized = false;
  let unmounted = false;

  function buildMatch() {
    match = createMatch({
      playerLockId:careerClub&&!careerManager?career.player.id:null,
      graphicsQuality:ctx.state.profile.graphicsQuality,
      canvas,
      home,
      away,
      homeKit,
      awayKit,
      minutes,
      difficulty,
      userSide,
      onEvent: handleEvent,
      gamePlans:{home:home.plan || ctx.state.profile.gamePlans?.[home.id],away:away.plan || ctx.state.profile.gamePlans?.[away.id]},
      stadium: stadiumIndex
    });
    hud = createHud({
      root: stageBox,
      home,
      away,
      userSide,
      careerRating: isPlayerCareer,
      onSetPieceChange: options => match?.world.setPieceOptions(options)
    });
    hud?.setRating(rating ? rating.value : 6);
    controls = createControls({
      playerCareer:!!careerClub&&!careerManager,
      root: stageBox,
      onCharge:value=>match?.world.setShotCharge(value),
      onCommand: (name, payload) => {
        if (paused || stage !== 'live') return;
        if (name === 'pass') kickSound(0.5);
        else if (name === 'lob') kickSound(0.65);
        else if (name === 'shoot') kickSound(0.9);
        match.world.command(name, payload);
      },
      onMove: (x, z) => {
        if (paused || stage !== 'live') return;
        match.world.input.moveX = x;
        match.world.input.moveZ = z;
      },
      onSprint: value => {
        if (stage !== 'live') return;
        match.world.input.sprint = value;
      }
    });
    // Os controles só entram depois do pré-jogo.
    controls.setEnabled(false);
    match.start();
    // O jogo fica congelado no pré-jogo — o relógio só corre quando o
    // usuário toca para entrar em campo. O laço de render também para:
    // a arte do estádio está por cima do canvas, então cada quadro em
    // software cairia no vazio — e travaria o fio de eventos da página.
    match.world.setPaused(true);
    match.engine.stop();
    // Gancho de testes: permite inspecionar o motor da partida no navegador.
    window.__xfcMatch = match;
    // O estádio escolhido envolve o 3D (atrás da arquibancada).
    dome = attachStadiumDome(match.engine.scene, stadiumIndex);
  }

  function creditMatch(event) {
    if (rewarded) return;
    rewarded = true;
    const userGoals = userSide === 'home' ? event.score[0] : event.score[1];
    const rivalGoals = userSide === 'home' ? event.score[1] : event.score[0];
    if(careerClub){
      // Nota ao vivo (6→10) vira a nota oficial da partida na carreira.
      if(rating)careerPerformance.liveRating=rating.value;
      const result=careerManager?settleManager(career,params.careerMatchId,event.score):settleCareer(career,params.careerMatchId,event.score,careerPerformance);
      matchReward={coins:0,goals:result?.goals||0};saveProfile(ctx.state);return;
    }
    if(params.ultimateMatchId){
      const result=settleUtMatch(ctx.state.profile,params.ultimateMatchId,[userGoals,rivalGoals]);
      matchReward={coins:result.coins||0,goals:userGoals};saveProfile(ctx.state);return;
    }
    const outcomeBonus = userGoals > rivalGoals ? 45 : userGoals === rivalGoals ? 25 : 0;
    const coins = 65 + outcomeBonus + userGoals * 5;
    matchReward = { coins, goals: userGoals };
    ctx.state.profile.coins = Math.max(0, Number(ctx.state.profile.coins) || 0) + coins;
    ctx.state.profile.matchesPlayed = (Number(ctx.state.profile.matchesPlayed) || 0) + 1;
    ctx.state.profile.xp = (Number(ctx.state.profile.xp) || 0) + 120;

    if (params.worldCupMatchId && ctx.state.profile.worldCupCampaign) {
      recordCampaignMatchResult(
        ctx.state.profile.worldCupCampaign,
        params.worldCupMatchId,
        event.score[0],
        event.score[1]
      );
    }
    // Campeonatos (Champions, Libertadores, Copa América e Copa do Mundo):
    // o resultado entra na tabela, no calendário e na artilharia.
    if (params.tournamentMatchId && params.tournamentCompetitionId) {
      const tournament = ctx.state.profile.tournaments?.[params.tournamentCompetitionId];
      if (tournament) {
        recordTournamentResult(tournament, params.tournamentMatchId, event.score[0], event.score[1]);
      }
    }
    saveProfile(ctx.state);
  }

  function handleEvent(event) {
    if(event.type==='pass-request')controls?.passFeedback(event.reason,event.accepted);
    if(careerClub&&(event.player||event.scorer)?.rosterId===career.player.id){
      if(event.type==='goal')careerPerformance.goals++;
      if(event.type==='shot')careerPerformance.shots++;
      if(event.type==='pass')careerPerformance.passes++;
    }
    // Nota AO VIVO 0–10 (começa 6): gol +2, assistência +1, passe certo,
    // chute perigoso e drible concluído valem décimos.
    if(rating){
      if(event.type==='goal'){
        if(event.scorer?.rosterId===heroId)rating.award('goal');
        else if(event.assist?.rosterId===heroId)rating.award('assist');
      }else if(event.type==='shot'&&event.dangerous&&event.player?.rosterId===heroId)rating.award('shot');
      else if(event.type==='pass-completed'&&event.from?.rosterId===heroId)rating.award('pass');
      else if(event.type==='dribble'&&event.player?.rosterId===heroId)rating.award('dribble');
      hud?.setRating(rating.value);
    }
    // Herói expulso: oferece ENCERRAR ou ASSISTIR.
    if(isPlayerCareer&&event.type==='card'&&event.color==='red'&&event.player?.rosterId===heroId)showDismissal(event);
    if (!hud) return;
    switch (event.type) {
      case 'entrance-end': {
        beginLive();
        break;
      }
      case 'goal': {
        const team = event.team === 'home' ? home : away;
        const [homeScore, awayScore] = event.score;
        cheer({ duration: 2.8, peak: 0.55 });
        const scorerName = event.scorer?.name || (event.ownGoalBy ? `${event.ownGoalBy.name} (contra)` : 'GOL');
        // A comemoração fica no rodapé, com a camisa e o nome de quem fez o gol.
        hud.showGoalCard({
          number: event.scorer?.number,
          name: scorerName,
          score: `${homeScore} × ${awayScore}`
        });
        hud.pushEvent(`⚽ ${Math.floor(event.minute)}' ${team.name} — ${scorerName}`, 'goal');
        // A câmera fecha no autor, que corre com os braços erguidos; o nome
        // permanece sob a cabeça e no cartão da HUD durante a comemoração.
        try {
          const scorer = event.scorer?.side === event.team ? event.scorer : null;
          const celebration = event.celebration || 'classic';
          scorer?.model?.celebrate?.(3.4, celebration);
          const teammates = scorer ? (match?.teams?.[event.team]?.players || [])
            .filter(player => player.active && !player.isKeeper && player !== scorer)
            .sort((a, b) => Math.hypot(a.x - scorer.x, a.z - scorer.z)
              - Math.hypot(b.x - scorer.x, b.z - scorer.z))
            .slice(0, 2) : [];
          teammates.forEach((player, index) => {
            player.model.celebrate?.(2.6, index === 0 ? 'airplane' : 'point');
          });
        } catch { /* comemorações são detalhe visual */ }
        break;
      }
      case 'kickoff':
        break;
      case 'card': {
        const team = event.team === 'home' ? home : away;
        const color = event.color === 'red' ? '🟥' : '🟨';
        if (event.color === 'red') boo();
        else whistle('short');
        hud.pushEvent(`${color} ${Math.floor(event.minute)}' ${team.name} — ${event.player.name}`, event.color);
        break;
      }
      case 'offside': {
        whistle('double');
        hud.pushEvent('🚩 Impedimento', 'info');
        break;
      }
      case 'foul': {
        whistle(event.card === 'red' ? 'double' : 'short');
        const names = {
          slide: 'carrinho',
          challenge: 'entrada',
          charge: 'carga',
          'charge-from-behind': 'carga por trás',
          contact: 'contato irregular'
        };
        const label = names[event.kind] || 'contato irregular';
        // Sem aviso gigante: falta, pênalti e lateral aparecem só no feed.
        hud.pushEvent(`🚨 ${Math.floor(event.minute)}' ${event.player.name} • ${label}`, 'foul');
        break;
      }
      case 'restart': {
        if (event.team === userSide) {
          const instructions = {
            penalty: ['PÊNALTI • CHUTE OU PASSE', 'PÊNALTI • escolha CHUTE ou PASSE'],
            freekick: ['FALTA • PASSE OU CHUTE DIRETO', 'FALTA • escolha PASSE, ENFIADA ou CHUTE'],
            corner: ['ESCANTEIO • PASSE OU CRUZAMENTO', 'ESCANTEIO • escolha PASSE, ENFIADA ou CHUTE'],
            goalkick: ['TIRO DE META • PASSE OU LANÇAMENTO', 'TIRO DE META • escolha PASSE ou ENFIADA'],
            throwin: ['LATERAL • PASSE OU LANÇAMENTO', 'LATERAL • escolha PASSE ou ENFIADA']
          }[event.kind] || ['BOLA PARADA • PASSE OU CHUTE', 'BOLA PARADA • escolha PASSE ou CHUTE'];
          hud.pushEvent(instructions[1], 'restart');
        }
        break;
      }
      case 'halftime':
        whistle('double');
        hud.showBanner('INTERVALO', 'info', 2600);
        match?.world.setPaused(true);
        setTimeout(() => {
          if (stage !== 'result' && stage !== 'paused') showHalftime(event);
        }, 1200);
        break;
      case 'fulltime':
        // Resultado é DOM estático: não gastar GPU redesenhando o estádio
        // por baixo do painel (também evita atrasar o painel em WebViews lentos).
        match?.stop();
        whistle('long');
        creditMatch(event);
        match?.world.setPaused(true);
        controls?.setEnabled(false);
        setTimeout(() => {
          if (stage !== 'result' && stage !== 'paused') showResult(event);
        }, 900);
        break;
      default:
        break;
    }
  }

  function startMatch() {
    if (stage !== 'prematch') return;
    whistle('triple');
    stage = 'entrance';
    paused = false;
    overlay.classList.add('is-visible', 'is-entrance');
    overlay.replaceChildren(
      el('div', { class: 'entrance' },
        el('span', { class: 'entrance__eyebrow', text: STADIUMS[stadiumIndex]?.name || 'ESTÁDIO XFC' }),
        el('div', { class: 'entrance__teams' },
          el('div', { class: 'entrance__side' },
            teamMark(home, 'entrance__crest'),
            el('b', { text: home.name })
          ),
          el('span', { class: 'entrance__vs', text: '×' }),
          el('div', { class: 'entrance__side' },
            teamMark(away, 'entrance__crest'),
            el('b', { text: away.name })
          )
        ),
        el('span', { class: 'entrance__caption', text: 'OS TIMES ESTÃO ENTRANDO EM CAMPO' })
      )
    );
    match?.world.setPaused(false);
    match?.engine.start();
    const started = match?.world.startEntrance?.({ duration: 3.6 });
    if (!started) beginLive();
  }

  /** Fim da entrada: HUD, controles e a saída de bola. */
  function beginLive() {
    stage = 'live';
    overlay.replaceChildren();
    overlay.classList.remove('is-visible', 'is-entrance');
    setPauseButtonVisible(true);
    match?.world.setCameraMode('play');
    hud?.node.classList.add('is-visible');
    controls?.setEnabled(true);
  }

  function showHalftime(event) {
    stage = 'halftime';
    setPauseButtonVisible(false);
    match?.world.setPaused(true);
    controls?.setEnabled(false);
    overlay.replaceChildren(el('div', { class: 'pause' },
      el('h2', { class: 'pause__title', text: 'INTERVALO' }),
      el('div', { class: 'pause__score' },
        el('span', { text: home.name }),
        el('b', { text: `${event.score[0]} - ${event.score[1]}` }),
        el('span', { text: away.name })
      ),
      el('div', { class: 'pause__stats' },
        statLine('Finalizações', event.stats.home.shots, event.stats.away.shots),
        statLine('Posse de bola', `${event.stats.home.possession}%`, `${event.stats.away.possession}%`),
        statLine('Escanteios', event.stats.home.corners, event.stats.away.corners),
        statLine('Faltas', event.stats.home.fouls, event.stats.away.fouls),
        statLine('Cartões', event.stats.home.cards, event.stats.away.cards)
      ),
      el('button', {
        class: 'btn btn--primary',
        type: 'button',
        onClick: () => {
          stage = 'live';
          setPauseButtonVisible(true);
          match?.world.setPaused(false);
          overlay.replaceChildren();
          controls?.setEnabled(true);
        }
      }, 'SEGUNDO TEMPO')
    ));
    overlay.classList.add('is-visible');
  }

  function resultStatLine(label, homeValue, awayValue) {
    return el('div', { class: 'result__stat' },
      el('span', { text: String(homeValue) }),
      el('span', { class: 'result__stat-label', text: label }),
      el('span', { text: String(awayValue) })
    );
  }

  function statLine(label, homeValue, awayValue) {
    return el('div', { class: 'pause__stat' },
      el('span', { text: String(homeValue) }),
      el('span', { class: 'pause__stat-label', text: label }),
      el('span', { text: String(awayValue) })
    );
  }

  function showResult(event) {
    stage = 'result';
    setPauseButtonVisible(false);
    controls?.setEnabled(false);
    hud?.node.classList.remove('is-visible');
    applause();
    const [homeScore, awayScore] = event.score;
    const campaign = params.worldCupMatchId ? ctx.state.profile.worldCupCampaign : null;
    const campaignResult = campaign && campaign.lastResult?.matchId === params.worldCupMatchId
      ? campaign.lastResult
      : null;
    let winner = homeScore === awayScore ? null : homeScore > awayScore ? 'home' : 'away';
    if (!winner && campaignResult?.winner) winner = campaignResult.winner === home.id ? 'home' : 'away';
    const champion = winner === 'home' ? home : winner === 'away' ? away : null;

    overlay.replaceChildren(el('div', { class: 'result' },
      el('div', { class: 'result__flare' }),
      el('h2', { class: 'result__title', text: 'FIM DE JOGO' }),
      matchReward && el('div', { class: 'result__reward' },
        el('span', { class: 'result__reward-icon', text: '✦' }),
        el('b', { text: `+${matchReward.coins} MOEDAS` }),
        el('span', { text: 'adicionadas ao Ultimate Team' })
      ),
      campaignResult?.decidedBy === 'penalties' && el('div', { class: 'result__penalties', text: 'VITÓRIA NOS PÊNALTIS' }),
      el('div', { class: 'result__teams' },
        el('div', { class: `result__team${winner === 'home' ? ' is-winner' : ''}` },
          teamMark(home, 'result__crest'),
          el('b', { class: 'result__name', text: home.name })
        ),
        el('div', { class: 'result__score' },
          el('b', { text: String(homeScore) }),
          el('span', { text: '×' }),
          el('b', { text: String(awayScore) })
        ),
        el('div', { class: `result__team${winner === 'away' ? ' is-winner' : ''}` },
          el('b', { class: 'result__name', text: away.name }),
          teamMark(away, 'result__crest')
        )
      ),
      el('div', { class: 'result__stats' },
        resultStatLine('Posse de bola', `${event.stats?.home.possession ?? 50}%`, `${event.stats?.away.possession ?? 50}%`),
        resultStatLine('Finalizações', event.stats?.home.shots ?? 0, event.stats?.away.shots ?? 0),
        resultStatLine('Chutes ao gol', event.stats?.home.shotsOn ?? 0, event.stats?.away.shotsOn ?? 0),
        resultStatLine('Passes certos', event.stats?.home.passesOn ?? 0, event.stats?.away.passesOn ?? 0),
        resultStatLine('Defesas', event.stats?.home.saves ?? 0, event.stats?.away.saves ?? 0),
        resultStatLine('Escanteios', event.stats?.home.corners ?? 0, event.stats?.away.corners ?? 0),
        resultStatLine('Faltas', event.stats?.home.fouls ?? 0, event.stats?.away.fouls ?? 0),
        resultStatLine('Cartões', event.stats?.home.cards ?? 0, event.stats?.away.cards ?? 0)
      ),
      champion
        ? el('div', { class: 'result__winner' },
          el('span', { class: 'result__winner-label', text: 'VENCEDOR' }),
          el('b', { text: champion.name })
        )
        : el('div', { class: 'result__winner result__winner--draw' },
          el('span', { class: 'result__winner-label', text: 'EMPATE' })
        ),
      el('div', { class: 'result__actions' },
        params.tournamentMatchId
          ? el('button', {
            class: 'btn btn--primary',
            type: 'button',
            onClick: () => ctx.go('competition', {
              competitionId: params.tournamentCompetitionId,
              returnTo: params.tournamentReturnTo || 'modes',
              panel: 'play'
            })
          }, 'CONTINUAR CAMPEONATO')
          : params.worldCupMatchId
          ? el('button', {
            class: 'btn btn--primary',
            type: 'button',
            onClick: () => ctx.go('worldcup', {
              mode: params.worldCupMode || campaign?.mode || '2027',
              returnTo: params.worldCupReturnTo || 'modes'
            })
          }, 'CONTINUAR COPA')
          : careerClub ? el('button',{class:'btn btn--primary',type:'button',onClick:()=>ctx.go('career',{view:'hub',kind:careerManager?'manager':'player'})},'VOLTAR À CARREIRA')
          : params.ultimateMatchId ? el('button',{class:'btn btn--primary',type:'button',onClick:()=>ctx.go('ultimate')},'VOLTAR AO CLUBE')
          : el('button', {
            class: 'btn btn--primary',
            type: 'button',
            onClick: () => ctx.go('play', {
              home: home.id,
              away: away.id,
              homeKit: params.homeKit ?? 0,
              awayKit: params.awayKit ?? 0,
              minutes,
              difficulty,
              stadium: params.stadium,
              competition: params.competition || null,
              returnTo: params.returnTo || 'menu'
            })
          }, 'REJOGAR'),
        el('button', {
          class: 'btn',
          type: 'button',
          onClick: () => ctx.go(params.returnTo || 'menu')
        }, params.returnTo === 'modes' ? 'VOLTAR AOS MODOS' : 'VOLTAR AO MENU'),
        el('button', {
          class: 'btn',
          type: 'button',
          onClick: () => ctx.go('menu')
        }, 'VOLTAR AO INÍCIO')
      )
    ));
    overlay.classList.add('is-visible');
  }

  let pausePanel=null;
  function showPause() {
    stage='paused';paused=true;setPauseButtonVisible(false);
    match?.world.setPaused(true);match?.stop();controls?.setEnabled(false);
    if(match)Object.assign(match.world.input,{moveX:0,moveZ:0,sprint:false});
    stageBox.classList.add('is-paused');
    const snapshot=match?.world.snapshot()||lastSnapshot;
    const userTeam=userSide==='home'?home:away;
    const stats=snapshot.stats;
    const detail=el('section',{class:'pause-reference__detail',hidden:true});
    const closeDetail=()=>{detail.hidden=true;detail.replaceChildren();pausePanel=null;};
    const panel=(title,...children)=>{
      pausePanel=closeDetail;detail.hidden=false;
      detail.replaceChildren(el('header',{},el('h2',{text:title}),el('button',{type:'button',class:'pause-reference__back',onClick:closeDetail,text:'VOLTAR'})),...children);
    };
    function showPlan(){
      const pitch=el('div',{class:'game-plan__pitch','aria-label':'Campo do plano de jogo'},el('i',{class:'game-plan__circle'}));
      for(const entry of match.world.getGamePlan()){
        const player=userTeam.players.find(p=>p.id===entry.rosterId)||entry;
        const card=footballCard({...player,role:entry.role},{crest:userTeam.crest});
        let point=planToPitch(entry);positionCard(card,point);pitch.appendChild(card);
        card.dataset.playerId=entry.id;
        enablePositionDrag(card,pitch,{getPosition:()=>point,onChange:next=>{
          const base=pitchToPlan(next);
          if(!match.world.setGamePlan(entry.id,base))return;
          point=next;
          ctx.state.profile.gamePlans||={};ctx.state.profile.gamePlans[userTeam.id]||={};
          ctx.state.profile.gamePlans[userTeam.id][entry.rosterId]=base;
          if(params.ultimateMatchId&&ctx.state.profile.ut?.pending){
            const u=ctx.state.profile.ut;u.pending.squad.positions[entry.rosterId]=next;
            const saved=u.squads.find(s=>s.id===u.pending.squad.id);if(saved)saved.positions[entry.rosterId]=next;
            home.plan[entry.rosterId]=base;
          }
          saveProfile(ctx.state);
        }});
      }
      panel('PLANO DE JOGO',el('p',{text:'Arraste as cartinhas livremente. No teclado, selecione uma carta e use as setas. As novas posições orientam a equipe ao retomar, sem teletransportar o lance.'}),pitch);
    }
    const leave=()=>params.tournamentMatchId?ctx.go('competition',{competitionId:params.tournamentCompetitionId,returnTo:params.tournamentReturnTo||'modes',panel:'play'}):ctx.go(careerClub?'career':params.ultimateMatchId?'ultimate':'menu',careerClub?{view:'hub',kind:careerManager?'manager':'player'}:{});
    const confirm=(title,message,action)=>panel(title,el('p',{text:message}),el('button',{type:'button',class:'pause-reference__confirm',onClick:action,text:'CONFIRMAR'}));
    const actions=[
      ['resume','▶','CONTINUAR PARTIDA',resumeMatch],
      ['restart','↻','REINICIAR PARTIDA',()=>confirm('REINICIAR PARTIDA','Recomeçar este confronto do zero? O placar atual será descartado.',()=>ctx.go('play',{...params,home:home.id,away:away.id,homeKit:params.homeKit||0,awayKit:params.awayKit||0}))],
      ['settings','⚙','CONFIGURAÇÕES',()=>panel('CONFIGURAÇÕES',
        graphicsSettings(ctx.state),
        el('p',{text:'CHUTE: segure até a carga completa para superchute. CORRER: segure para correr; arraste para cima para chapéu ou para baixo para pedalada.'}),
        careerClub&&!careerManager ? el('p',{text:'Câmera Pro · acompanha seu atleta, como nos treinos.'}) : el('label',{class:'pause-reference__setting'},el('span',{text:'Câmera de transmissão'}),el('select',{'aria-label':'Distância da câmera',onChange:e=>match.world.setCameraZoom(Number(e.target.value))},
          el('option',{value:'1',selected:match.world.cameraZoom===1,text:'Padrão'}),el('option',{value:'1.2',selected:match.world.cameraZoom===1.2,text:'Mais aberta'}))),
        el('p',{text:'Teclado: WASD/setas para mover, Shift para correr, J/E para passar, K para carregar o chute e F para carrinho.'}),
        el('button',{type:'button',class:'pause-reference__back',dataset:{pauseAction:'plan'},onClick:showPlan,text:'PLANO DE JOGO'}))],
      ['facts','▥','ESTATÍSTICAS',()=>panel('ESTATÍSTICAS',el('div',{class:'pause-reference__stats'},
        ...[['Posse de bola',stats.home.possession+'%',stats.away.possession+'%'],['Finalizações',stats.home.shots,stats.away.shots],['Chutes ao gol',stats.home.shotsOn,stats.away.shotsOn],['Escanteios',stats.home.corners,stats.away.corners],['Faltas',stats.home.fouls,stats.away.fouls],['Cartões',stats.home.cards,stats.away.cards]].map(([label,a,b])=>statLine(label,a??0,b??0))))],
      ['end','⇥','SAIR DA PARTIDA',()=>confirm('SAIR DA PARTIDA','Sair sem registrar este resultado?',leave)]
    ];
    let selectedAction=resumeMatch;
    const menu=el('nav',{class:'pause-reference__menu','aria-label':'Partida pausada'},...actions.map(([id,icon,title,action],index)=>el('button',{
      type:'button',class:'pause-reference__item'+(index===0?' is-primary':''),dataset:{pauseAction:id},
      'aria-label':title,onClick:action,onFocus:()=>{selectedAction=action;}
    },el('img',{class:'pause-reference__row-art',src:`assets/ui/pause/${id}.png`,alt:'',draggable:'false'}))));
    const pause=el('div',{class:'pause-reference'},
      el('div',{class:'pause-reference__brand'},el('img',{src:'assets/ui/pause/brand.png',alt:'XFC 27',draggable:'false'})),
      menu,detail,el('footer',{class:'pause-reference__footer'},
        el('button',{type:'button','aria-label':'Selecionar',onClick:()=>selectedAction()},el('img',{src:'assets/ui/pause/select.png',alt:'',draggable:'false'})),
        el('button',{type:'button','aria-label':'Voltar',onClick:()=>pausePanel?pausePanel():resumeMatch()},el('img',{src:'assets/ui/pause/back.png',alt:'',draggable:'false'})))
    );
    overlay.replaceChildren(pause);overlay.classList.add('is-visible');
    menu.querySelector('button')?.focus({preventScroll:true});
  }

  function resumeMatch() {
    pausePanel=null;stage='live';paused=false;stageBox.classList.remove('is-paused');
    setPauseButtonVisible(true);match?.world.setPaused(false);
    overlay.replaceChildren();overlay.classList.remove('is-visible');
    if(!spectatorMode)controls?.setEnabled(true);
    match?.resumeRender();
  }

  // -------------------------------- expulsão do herói (carreira jogador) ----

  function showDismissal(event) {
    if (dismissalShown || !match) return;
    dismissalShown = true;
    match.stop();
    match.world.setPaused(true);
    controls?.setEnabled(false);
    setPauseButtonVisible(false);
    stage = 'dismissed';
    const choose = watch => {
      if (stage !== 'dismissed') return;
      if (watch) {
        spectatorMode = true;
        match.world.setSpectator(true);
        stage = 'live';
        overlay.replaceChildren();
        overlay.classList.remove('is-visible');
        setPauseButtonVisible(true);
        match.world.setPaused(false);
        match.resumeRender();
      } else {
        const snapshot = match.world.snapshot();
        const endEvent = {
          score: Array.isArray(snapshot.score) ? snapshot.score.slice() : [0, 0],
          stats: snapshot.stats,
          phase: 'fulltime'
        };
        match.stop();
        match.world.setPaused(true);
        controls?.setEnabled(false);
        creditMatch(endEvent);
        showResult(endEvent);
      }
    };
    overlay.replaceChildren(el('div', { class: 'play-dismissal' },
      el('div', { class: 'play-dismissal__card', 'aria-hidden': 'true' }),
      el('span', { class: 'play-dismissal__eyebrow', text: 'EXPULSÃO' }),
      el('h2', { class: 'play-dismissal__title', text: 'CARTÃO VERMELHO' }),
      el('p', { class: 'play-dismissal__text',
        text: `${event.player?.name || 'Seu jogador'} foi expulso. Quer encerrar a partida ou assistir o resto do jogo como espectador?` }),
      el('div', { class: 'play-dismissal__actions' },
        el('button', { class: 'btn btn--primary', type: 'button', text: 'ASSISTIR', onClick: () => choose(true) }),
        el('button', { class: 'btn', type: 'button', text: 'ENCERRAR PARTIDA', onClick: () => choose(false) })
      )
    ));
    overlay.classList.add('is-visible');
  }

  // ------------------------------------------------------------- montagem --

  // Primeiro publica uma tela estável. A criação do contexto WebGL, do estádio
  // e dos modelos pesa na CPU; ela acontece só depois que a tela anterior foi
  // retirada do host e o WebView já teve oportunidade de pintar este estado.
  overlay.replaceChildren(el('div', { class: 'play__loading' },
    el('b', { text: 'PREPARANDO O CAMPO' }),
    el('span', { text: 'Aguarde um instante para a partida carregar.' })
  ));
  overlay.classList.add('is-visible');

  const frame = () => {
    if (!match) return;
    const snapshot = match.world.snapshot();
    lastSnapshot = snapshot;
    // Etiquetas sobre a cabeça de TODOS os atletas (como no eFootball/FC Mobile).
    const all = match.world.members('home').concat(match.world.members('away'));
    const controlledPlayer = all.find(player => match.world.isUserControlled(player)) || null;
    // Projetar posição de todos os jogadores para o stage
    const projectedPlayers = all.map(player => {
      const point = projectToStage(match.engine.camera, {
        x: player.root.position.x,
        y: 2.32,
        z: player.root.position.z
      });
      // Verificar se está atrás do plano da câmera (não mostrar nome)
      const visible = point.z > 0 && point.x > 20 && point.x < 1260 && point.y > 20 && point.y < 700;
      return {
        id: player.id || `${player.side}-${player.number}`,
        number: player.number,
        name: player.name,
        side: player.side,
        active: player.active !== false,
        visible,
        x: point.x,
        y: point.y,
        z: point.z
      };
    });
    let controlled = null;
    if (controlledPlayer) {
      const point = projectToStage(match.engine.camera, {
        x: controlledPlayer.root.position.x,
        y: 2.32,
        z: controlledPlayer.root.position.z
      });
      controlled = { player: controlledPlayer, x: point.x, y: point.y, z: point.z, visible: point.z > 0 };
    }
    hud?.update(snapshot, projectedPlayers, {
      x: match.ball.state.position.x,
      z: match.ball.state.position.z
    }, controlled);
  };
  return {
    node,
    mount() {
      if (initialized || unmounted) return;
      initialized = true;
      // Um requestAnimationFrame + uma tarefa separada deixam o fundo e a
      // mensagem de carregamento aparecerem antes do trabalho pesado do WebGL.
      initializeFrame = requestAnimationFrame(() => {
        initializeTimer = setTimeout(() => {
          if (unmounted) return;
          try {
            buildMatch();
            overlay.replaceChildren(prematchShowcase());
            hud?.node.classList.remove('is-visible');
            timer = setInterval(frame, 120);
          } catch (error) {
            console.error('XFC: não foi possível preparar a partida 3D', error);
            overlay.replaceChildren(el('div', { class: 'play__loading play__loading--error' },
              el('b', { text: 'NÃO FOI POSSÍVEL ABRIR A PARTIDA' }),
              el('span', { text: 'Volte ao menu e tente novamente.' }),
              el('button', { class: 'btn btn--primary', type: 'button', onClick: () => ctx.go('menu') }, 'VOLTAR AO MENU')
            ));
          }
        }, 0);
      });
    },
    onKey(event) {
      if(stage==='paused'&&!pausePanel&&['ArrowUp','ArrowDown'].includes(event.key)){
        const items=[...overlay.querySelectorAll('.pause-reference__item')],index=items.indexOf(document.activeElement);
        items[(index+(event.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus();return true;
      }
      if (event.key === 'Escape' || event.key === 'Backspace') {
        if (stage === 'dismissed') { return true; } // exige escolha explícita
        if (stage === 'live') {
          showPause();
          return true;
        }
        if (stage === 'paused') {
          if(pausePanel){pausePanel();return true;}
          resumeMatch();
          return true;
        }
        if (stage === 'prematch') {
          ctx.go('menu');
          return true;
        }
        ctx.go('menu');
        return true;
      }
      return false;
    },
    unmount() {
      unmounted = true;
      cancelAnimationFrame(initializeFrame);
      clearTimeout(initializeTimer);
      clearInterval(timer);
      dome?.dispose();
      controls?.dispose();
      hud?.dispose();
      match?.dispose();
    }
  };
}

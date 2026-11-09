// Tela da partida: a apresentação pré-jogo (cinematográfica), o jogo 3D em
// si e o resultado final.
//
// O módulo cuida da interface; o motor (regras, IA, física) fica em
// `src/match3d/match.js`.

import { el, svg, ICONS, padButton } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { getTeam } from '../data/teams.js';
import { kitsOf } from '../data/kits.js';
import { createMatch } from '../match3d/match.js';
import { createControls } from '../match3d/controls.js';
import { createHud } from '../match3d/hud.js';
import * as THREE from '../../vendor/three.module.min.js';
import { cheer, whistle, kickSound, applause, boo } from '../audio.js';
import { STADIUMS, attachStadiumDome } from '../match3d/stadiums.js';

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;
const projection = new THREE.Vector3();

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
  const home = getTeam(params.home) || getTeam(ctx.state.selection.home);
  const away = getTeam(params.away) || getTeam(ctx.state.selection.away);
  const homeKit = kitsOf(home.id)[params.homeKit ?? 0] || kitsOf(home.id)[0];
  const awayKit = kitsOf(away.id)[params.awayKit ?? 0] || kitsOf(away.id)[0];
  const minutes = params.minutes ?? 6;
  const difficulty = params.difficulty ?? 'normal';

  let stage = 'prematch';
  let paused = false;
  let lastSnapshot = { score: [0, 0], display: "0'00", half: 1, phase: 'kickoff' };

  const canvas = el('canvas', {
    class: 'play__canvas',
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    'aria-label': 'Campo de futebol em 3D'
  });

  const overlay = el('div', { class: 'play__overlay' });
  const stageBox = el('div', { class: 'play__stage' }, canvas, overlay);
  const node = el('div', { class: 'screen screen--play' }, stageBox);

  // ---------------------------------------------------- pré-jogo imersivo --

  // Estádio escolhido nas telas anteriores (senão, sorteia um).
  const paramStadium = Number(params.stadium);
  let stadiumIndex = Number.isFinite(paramStadium) && paramStadium >= 0 && paramStadium < STADIUMS.length
    ? Math.floor(paramStadium)
    : Math.floor(Math.random() * STADIUMS.length);
  let dome = null;

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
      el('div', { class: 'showcase__chip', text: 'XF CHAMPIONS LEAGUE' }),
      el('div', { class: 'showcase__plaque' },
        el('span', { class: 'showcase__label', text: 'ESTÁDIO OFICIAL' }),
        stadiumName,
        stadiumTag,
        el('div', { class: 'showcase__matchup' },
          el('img', { src: home.crest, alt: '' }),
          el('span', { text: `${(home.shortName || home.name).toUpperCase?.() || home.name.toUpperCase()}  ×  ${(away.shortName || away.name).toUpperCase?.() || away.name.toUpperCase()}` }),
          el('img', { src: away.crest, alt: '' })
        ),
        dots
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

  function buildMatch() {
    match = createMatch({
      canvas,
      home,
      away,
      homeKit,
      awayKit,
      minutes,
      difficulty,
      onEvent: handleEvent,
      stadium: stadiumIndex
    });
    hud = createHud({ root: stageBox, home, away });
    controls = createControls({
      root: stageBox,
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

  function handleEvent(event) {
    if (!hud) return;
    switch (event.type) {
      case 'goal': {
        const team = event.team === 'home' ? home : away;
        const [homeScore, awayScore] = event.score;
        cheer({ duration: 2.8, peak: 0.55 });
        const scorerName = event.scorer?.name || 'GOL';
        hud.showBanner(`${scorerName.toUpperCase()}  •  GOOOL!  ${homeScore} × ${awayScore}`, 'goal', 3400);
        hud.pushEvent(`⚽ ${event.minute}' ${team.name} — ${scorerName}`, 'goal');
        // A câmera fecha no autor, que corre com os braços erguidos; o nome
        // permanece sob a cabeça e no cartão da HUD durante a comemoração.
        try {
          const scorer = event.scorer;
          if (scorer?.model?.celebrate) scorer.model.celebrate(3.4);
        } catch { /* comemoração é detalhe */ }
        break;
      }
      case 'card': {
        const team = event.team === 'home' ? home : away;
        const color = event.color === 'red' ? '🟥' : '🟨';
        if (event.color === 'red') boo();
        else whistle('short');
        hud.pushEvent(`${color} ${event.minute}' ${team.name} — ${event.player.name}`, event.color);
        break;
      }
      case 'offside': {
        whistle('double');
        hud.pushEvent('🚩 Impedimento', 'info');
        break;
      }
      case 'foul':
        hud.pushEvent(`🚨 ${Math.floor(event.minute)}' Falta de ${event.player.name}`, 'foul');
        break;
      case 'halftime':
        whistle('double');
        hud.showBanner('INTERVALO', 'info', 2600);
        match?.world.setPaused(true);
        setTimeout(() => {
          if (stage === 'live') showHalftime(event);
        }, 1200);
        break;
      case 'fulltime':
        whistle('long');
        setTimeout(() => {
          if (stage === 'live') showResult(event);
        }, 900);
        break;
      default:
        break;
    }
  }

  function startMatch() {
    whistle('triple');
    stage = 'live';
    match?.world.setPaused(false);
    match?.engine.start();
    overlay.replaceChildren();
    overlay.classList.remove('is-visible');
    match?.world.setCameraMode('play');
    hud?.node.classList.add('is-visible');
    controls?.setEnabled(true);
  }

  function showHalftime(event) {
    stage = 'halftime';
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
    controls?.setEnabled(false);
    hud?.node.classList.remove('is-visible');
    applause();
    const [homeScore, awayScore] = event.score;
    const winner = homeScore === awayScore ? null : homeScore > awayScore ? 'home' : 'away';
    const champion = winner === 'home' ? home : winner === 'away' ? away : null;

    overlay.replaceChildren(el('div', { class: 'result' },
      el('div', { class: 'result__flare' }),
      el('h2', { class: 'result__title', text: 'FIM DE JOGO' }),
      el('div', { class: 'result__teams' },
        el('div', { class: `result__team${winner === 'home' ? ' is-winner' : ''}` },
          el('img', { class: 'result__crest', src: home.crest, alt: `Escudo do ${home.name}` }),
          el('b', { class: 'result__name', text: home.name })
        ),
        el('div', { class: 'result__score' },
          el('b', { text: String(homeScore) }),
          el('span', { text: '×' }),
          el('b', { text: String(awayScore) })
        ),
        el('div', { class: `result__team${winner === 'away' ? ' is-winner' : ''}` },
          el('b', { class: 'result__name', text: away.name }),
          el('img', { class: 'result__crest', src: away.crest, alt: `Escudo do ${away.name}` })
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
        el('button', {
          class: 'btn btn--primary',
          type: 'button',
          onClick: () => ctx.go('play', {
            home: home.id,
            away: away.id,
            homeKit: params.homeKit ?? 0,
            awayKit: params.awayKit ?? 0,
            minutes,
            difficulty,
            stadium: params.stadium
          })
        }, 'REJOGAR'),
        el('button', { class: 'btn', type: 'button', onClick: () => ctx.go('menu') }, 'VOLTAR AO MENU')
      )
    ));
    overlay.classList.add('is-visible');
  }

  function showPause() {
    stage = 'paused';
    paused = true;
    match?.world.setPaused(true);
    controls?.setEnabled(false);
    overlay.replaceChildren(el('div', { class: 'pause' },
      el('h2', { class: 'pause__title', text: 'PAUSA' }),
      el('div', { class: 'pause__actions' },
        el('button', {
          class: 'btn btn--primary',
          type: 'button',
          onClick: () => {
            stage = 'live';
            paused = false;
            match?.world.setPaused(false);
            overlay.replaceChildren();
            controls?.setEnabled(true);
          }
        }, 'CONTINUAR'),
        el('button', { class: 'btn', type: 'button', onClick: () => ctx.go('menu') }, 'SAIR PARA O MENU')
      )
    ));
    overlay.classList.add('is-visible');
  }

  // ------------------------------------------------------------- montagem --

  buildMatch();
  overlay.replaceChildren(prematchShowcase());
  overlay.classList.add('is-visible');
  hud?.node.classList.remove('is-visible');

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
  const timer = setInterval(frame, 120);

  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        if (stage === 'live') {
          showPause();
          return true;
        }
        if (stage === 'prematch') {
          if (event.key === 'Escape' || event.key === 'Backspace') ctx.go('menu');
          else startMatch();
          return true;
        }
        ctx.go('menu');
        return true;
      }
      return false;
    },
    unmount() {
      clearInterval(timer);
      dome?.dispose();
      controls?.dispose();
      hud?.dispose();
      match?.dispose();
    }
  };
}

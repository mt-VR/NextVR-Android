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

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;

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

  // ------------------------------------------------------------- pré-jogo --

  function prematchOverlay() {
    return el('div', { class: 'prematch' },
      el('div', { class: 'prematch__teams' },
        el('div', { class: 'prematch__team prematch__team--home' },
          el('img', { class: 'prematch__crest', src: home.crest, alt: `Escudo do ${home.name}` }),
          el('b', { class: 'prematch__name', text: home.name })
        ),
        el('div', { class: 'prematch__x' },
          el('span', { class: 'prematch__x-mark', text: 'X' }),
          el('span', { class: 'prematch__vs', text: 'PARTIDA RÁPIDA' })
        ),
        el('div', { class: 'prematch__team prematch__team--away' },
          el('b', { class: 'prematch__name', text: away.name }),
          el('img', { class: 'prematch__crest', src: away.crest, alt: `Escudo do ${away.name}` })
        )
      ),
      el('div', { class: 'prematch__info' },
        el('span', { text: away.stadium }),
        el('span', { class: 'prematch__duration', text: `${minutes} MIN POR TEMPO` })
      ),
      el('button', {
        class: 'btn btn--primary prematch__cta',
        type: 'button',
        onClick: () => startMatch()
      }, 'COMEÇAR PARTIDA'),
      el('p', { class: 'prematch__hint', text: 'Analógico para mover · PASSE, CHUTE, ENFIADA, DESARME e TROCAR nos botões.' })
    );
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
      onEvent: handleEvent
    });
    hud = createHud({ root: stageBox, home, away });
    controls = createControls({
      root: stageBox,
      onCommand: name => {
        if (paused || stage !== 'live') return;
        match.world.command(name);
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
    // Gancho de testes: permite inspecionar o motor da partida no navegador.
    window.__xfcMatch = match;
  }

  function handleEvent(event) {
    if (!hud) return;
    switch (event.type) {
      case 'goal': {
        const team = event.team === 'home' ? home : away;
        hud.showBanner(`GOOOL! ${team.name}`, 'goal', 2600);
        hud.pushEvent(`⚽ ${event.minute}' ${team.name} — ${event.scorer?.name || ''}`, 'goal');
        break;
      }
      case 'card': {
        const team = event.team === 'home' ? home : away;
        const color = event.color === 'red' ? '🟥' : '🟨';
        hud.pushEvent(`${color} ${event.minute}' ${team.name} — ${event.player.name}`, event.color);
        break;
      }
      case 'foul':
        hud.pushEvent(`🚨 ${Math.floor(event.minute)}' Falta de ${event.player.name}`, 'foul');
        break;
      case 'offside':
        hud.pushEvent(`🚩 Impedimento`, 'info');
        break;
      case 'halftime':
        hud.showBanner('INTERVALO', 'info', 2600);
        match?.world.setPaused(true);
        setTimeout(() => {
          if (stage === 'live') showHalftime(event);
        }, 1200);
        break;
      case 'fulltime':
        setTimeout(() => {
          if (stage === 'live') showResult(event);
        }, 900);
        break;
      default:
        break;
    }
  }

  function startMatch() {
    stage = 'live';
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
          el('span', { text: 'X' }),
          el('b', { text: String(awayScore) })
        ),
        el('div', { class: `result__team${winner === 'away' ? ' is-winner' : ''}` },
          el('b', { class: 'result__name', text: away.name }),
          el('img', { class: 'result__crest', src: away.crest, alt: `Escudo do ${away.name}` })
        )
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
            difficulty
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
  overlay.replaceChildren(prematchOverlay());
  overlay.classList.add('is-visible');
  hud?.node.classList.remove('is-visible');

  const frame = () => {
    if (!match) return;
    const snapshot = match.world.snapshot();
    lastSnapshot = snapshot;
    hud?.update(snapshot, match.world.members('home').concat(match.world.members('away')), {
      x: match.ball.state.position.x,
      z: match.ball.state.position.z
    });
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
          startMatch();
          return true;
        }
        ctx.go('menu');
        return true;
      }
      return false;
    },
    unmount() {
      clearInterval(timer);
      controls?.dispose();
      hud?.dispose();
      match?.dispose();
    }
  };
}

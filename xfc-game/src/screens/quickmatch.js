// Tela "Partidas Rápidas": escolha dos dois clubes, dos uniformes e da
// duração da partida. É o atalho do menu para um confronto direto.

import { el, svg, ICONS, padButton } from '../ui/dom.js';
import { createContinueButton } from '../ui/continuebtn.js';
import { xfcWordmark } from '../ui/brand.js';
import { modeHomeButton } from '../ui/mode-home.js';
import { TEAMS, getTeam } from '../data/teams.js';
import { kitsOf, kitSvg, kitShirt } from '../data/kits.js';

const DURATIONS = [
  { id: 'curta', label: 'CURTA', minutes: 3 },
  { id: 'normal', label: 'NORMAL', minutes: 6 },
  { id: 'completa', label: 'COMPLETA', minutes: 10 }
];

const DIFFICULTIES = [
  { id: 'easy', label: 'FÁCIL' },
  { id: 'normal', label: 'NORMAL' },
  { id: 'hard', label: 'DIFÍCIL' }
];

export function quickMatchScreen(ctx) {
  const state = ctx.state;
  const selection = {
    home: state.selection.home && getTeam(state.selection.home) ? state.selection.home : 'fc-barcelona',
    away: state.selection.away && getTeam(state.selection.away) ? state.selection.away : 'real-madrid'
  };
  const kits = { ...state.kits };
  let duration = 'normal';
  let difficulty = 'normal';

  function clubArrow(side, delta) {
    return el('button', {
      class: 'picker-arrow picker-arrow--crest',
      type: 'button',
      'aria-label': delta < 0 ? 'Clube anterior' : 'Próximo clube',
      onClick(event) {
        event.stopPropagation();
        const index = TEAMS.findIndex(team => team.id === selection[side]);
        const next = (index + delta + TEAMS.length) % TEAMS.length;
        selection[side] = TEAMS[next].id;
        kits[selection[side]] ??= 0;
        paint();
      }
    }, svg(delta < 0 ? ICONS.chevronLeft : ICONS.chevronRight));
  }

  function kitTile(side, kit, index) {
    const teamId = selection[side];
    const selected = (kits[teamId] ?? 0) === index;
    const shirt = kitShirt(kit);
    return el('button', {
      class: `quick__kit${selected ? ' is-selected' : ''}`,
      type: 'button',
      onClick(event) {
        event.stopPropagation();
        kits[teamId] = index;
        paint();
      }
    },
      el('span', { class: 'quick__kit-preview' },
        shirt
          ? el('img', { src: shirt, alt: `Blusa ${kit.name}` })
          : el('span', { class: 'quick__kit-svg', html: kitSvg(kit, { width: 46 }) })
      ),
      el('span', { class: 'quick__kit-name', text: kit.name })
    );
  }

  function panel(side) {
    const team = getTeam(selection[side]);
    const teamKits = kitsOf(team.id);
    const current = kits[team.id] ?? 0;

    return el('section', { class: `quick__panel quick__panel--${side}` },
      el('span', { class: 'quick__label', text: side === 'home' ? 'HOME' : 'AWAY' }),
      el('div', { class: 'quick__crest-wrap' },
        clubArrow(side, -1),
        el('img', { class: 'quick__crest', src: team.crest, alt: `Escudo do ${team.name}` }),
        clubArrow(side, 1)
      ),
      el('b', { class: 'quick__name', text: team.name }),
      el('span', { class: 'quick__meta', text: `${team.league} · ${team.stadium}` }),
      el('div', { class: 'quick__kits' },
        teamKits.map((kit, index) => kitTile(side, kit, index))
      ),
      el('span', { class: 'quick__kit-current', text: `Uniforme: ${teamKits[current]?.name || 'Home'}` })
    );
  }

  function optionRow(options, current, onPick) {
    return el('div', { class: 'quick__options' },
      options.map(option => el('button', {
        class: `quick__option${option.id === current ? ' is-selected' : ''}`,
        type: 'button',
        onClick() {
          onPick(option.id);
          paint();
        }
      }, el('span', { text: option.label })))
    );
  }

  // CONTINUAR leva à escolha de estádios: a partida começa ao tocar a
  // galeria dos seis estádios.
  const continueButton = createContinueButton({
    onEnter() {
      const home = getTeam(selection.home);
      const away = getTeam(selection.away);
      if (home.id === away.id) {
        ctx.toast('Escolha dois clubes diferentes.', { variant: 'warn' });
        return;
      }
      const chosen = DURATIONS.find(item => item.id === duration) || DURATIONS[1];
      ctx.go('stadiums', {
        returnTo: 'quick',
        home: home.id,
        away: away.id,
        homeKit: kits[home.id] ?? 0,
        awayKit: kits[away.id] ?? 0,
        minutes: chosen.minutes,
        difficulty
      });
    }
  }).node;

  const node = el('div', { class: 'screen screen--quick' },
    modeHomeButton(ctx),
    el('header', { class: 'topbar' },
      el('span', { class: 'topbar__mark', html: xfcWordmark() }),
      el('span', { class: 'topbar__title', text: 'Classic Match' }),
      el('span', { class: 'topbar__sep', text: '|' }),
      el('span', { class: 'topbar__subtitle', text: 'Quick Match' })
    ),
    el('div', { class: 'quick__stage' },
      panel('home'),
      el('div', { class: 'quick__versus' },
        el('span', { class: 'quick__versus-x', text: 'X' }),
        el('div', { class: 'quick__settings' },
          el('span', { class: 'quick__settings-label', text: 'DURAÇÃO' }),
          optionRow(DURATIONS, duration, value => { duration = value; }),
          el('span', { class: 'quick__settings-label', text: 'DIFICULDADE' }),
          optionRow(DIFFICULTIES, difficulty, value => { difficulty = value; })
        )
      ),
      panel('away')
    ),
    el('footer', { class: 'footer' },
      el('div', { class: 'hints' },
        el('span', { class: 'hint' }, padButton('cross', 'Select'), el('span', { text: 'Select' })),
        el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Back' }))
      ),
      el('div', { class: 'quick__actions' },
        continueButton
      )
    )
  );

  function paint() {
    const home = getTeam(selection.home);
    const away = getTeam(selection.away);
    node.querySelector('.quick__panel--home .quick__name').textContent = home.name;
    node.querySelector('.quick__panel--away .quick__name').textContent = away.name;
    node.querySelector('.quick__panel--home .quick__crest').src = home.crest;
    node.querySelector('.quick__panel--away .quick__crest').src = away.crest;
    node.querySelector('.quick__panel--home .quick__meta').textContent = `${home.league} · ${home.stadium}`;
    node.querySelector('.quick__panel--away .quick__meta').textContent = `${away.league} · ${away.stadium}`;

    for (const side of ['home', 'away']) {
      const team = getTeam(selection[side]);
      const current = kits[team.id] ?? 0;
      const wrap = node.querySelector(`.quick__panel--${side} .quick__kits`);
      wrap.replaceChildren(...kitsOf(team.id).map((kit, index) => kitTile(side, kit, index)));
      const label = node.querySelector(`.quick__panel--${side} .quick__kit-current`);
      label.textContent = `Uniforme: ${kitsOf(team.id)[current]?.name || 'Home'}`;
    }

    for (const [group, current] of [['DURAÇÃO', duration], ['DIFICULDADE', difficulty]]) {
      const labels = node.querySelectorAll('.quick__options');
      const target = group === 'DURAÇÃO' ? labels[0] : labels[1];
      const options = group === 'DURAÇÃO' ? DURATIONS : DIFFICULTIES;
      target.replaceChildren(...options.map(option => el('button', {
        class: `quick__option${option.id === current ? ' is-selected' : ''}`,
        type: 'button',
        onClick() {
          if (group === 'DURAÇÃO') duration = option.id;
          else difficulty = option.id;
          paint();
        }
      }, el('span', { text: option.label }))));
    }
  }

  paint();

  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go('menu');
        return true;
      }
      if (event.key === 'Enter') {
        node.querySelector('.continue-btn')?.click();
        return true;
      }
      return false;
    }
  };
}

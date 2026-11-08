// Escolha de times do Kick Off: coluna HOME, coluna AWAY e o carousel com os
// dois clubes que existem no XFC por enquanto.

import { el, svg, ICONS, padButton, starRow } from '../ui/dom.js';
import { TEAMS, getTeam } from '../data/teams.js';

export function kickoffScreen(ctx) {
  const state = ctx.state;
  state.selection.home ||= TEAMS[0].id;
  state.selection.away ||= TEAMS[1].id;
  state.settings.focus ||= 'home';

  let focusSide = state.settings.focus === 'away' ? 'away' : 'home';
  let cursor = { home: 0, away: 1 };

  function teamIndexFor(side) {
    const current = state.selection[side];
    const index = TEAMS.findIndex(team => team.id === current);
    return index < 0 ? 0 : index;
  }

  function card(team, side) {
    const node = el('div', {
      class: `team-card${state.selection[side] === team.id ? ' is-selected' : ''}`,
      dataset: { teamId: team.id, side },
      role: 'button',
      tabindex: '0',
      onClick() {
        state.selection[side] = team.id;
        paint();
      }
    },
      el('img', { class: 'team-card__crest', src: team.crest, alt: `Escudo do ${team.name}` }),
      el('div', { class: 'team-card__name', text: team.name }),
      el('div', { class: 'team-card__stars' }, starRow(team.stars, { size: 20 })),
      el('div', { class: 'team-card__ratings' },
        el('div', { class: 'team-card__rating' }, el('b', { text: String(team.ratings.att) }), el('span', { text: 'ATT' })),
        el('div', { class: 'team-card__rating' }, el('b', { text: String(team.ratings.mid) }), el('span', { text: 'MID' })),
        el('div', { class: 'team-card__rating' }, el('b', { text: String(team.ratings.def) }), el('span', { text: 'DEF' }))
      ),
      el('div', { class: 'team-card__league', text: team.league })
    );
    return node;
  }

  function picker(side, label) {
    const arrowPrev = el('button', {
      class: 'picker-arrow', type: 'button', 'aria-label': `Time anterior (${label})`,
      onClick() {
        cursor[side] = (cursor[side] - 1 + TEAMS.length) % TEAMS.length;
        state.selection[side] = TEAMS[cursor[side]].id;
        paint();
      }
    }, svg(ICONS.chevronLeft));

    const arrowNext = el('button', {
      class: 'picker-arrow', type: 'button', 'aria-label': `Próximo time (${label})`,
      onClick() {
        cursor[side] = (cursor[side] + 1) % TEAMS.length;
        state.selection[side] = TEAMS[cursor[side]].id;
        paint();
      }
    }, svg(ICONS.chevronRight));

    return el('div', { class: 'team-picker', dataset: { picker: side } },
      arrowPrev,
      el('div', { class: 'team-card__slot', dataset: { slot: side } }),
      arrowNext
    );
  }

  const liveFormToggle = el('button', {
    class: 'toggle', type: 'button',
    onClick() {
      state.settings.liveForm = !state.settings.liveForm;
      paint();
    }
  }, el('span', { text: 'Live Form' }), el('span', { class: 'toggle__track' }));

  const options = el('div', { class: 'kickoff__options' },
    el('div', { class: 'kickoff__option' }, svg(ICONS.ball), el('span', { text: 'Off' })),
    el('div', { class: 'kickoff__option' }, svg(ICONS.gear), el('span', { text: 'Advantage Settings' })),
    liveFormToggle
  );

  const startButton = el('button', {
    class: 'btn btn--accent', type: 'button',
    onClick() {
      const home = getTeam(state.selection.home);
      const away = getTeam(state.selection.away);
      if (!home || !away) {
        ctx.toast('Escolha os dois times para começar.', { variant: 'warn' });
        return;
      }
      ctx.go('match', { home: home.id, away: away.id });
    }
  }, 'Iniciar partida');

  const squadButton = el('button', {
    class: 'btn', type: 'button',
    onClick() {
      const team = getTeam(state.selection[focusSide]);
      if (team) ctx.go('squad', { teamId: team.id });
    }
  }, 'Ver elenco');

  const body = el('div', { class: 'kickoff__body' },
    el('div', { class: 'kickoff__side' },
      el('span', { class: 'side-label', text: 'Home' }),
      picker('home', 'Home')
    ),
    options,
    el('div', { class: 'kickoff__side' },
      el('span', { class: 'side-label', text: 'Away' }),
      picker('away', 'Away')
    )
  );

  const footer = el('footer', { class: 'kickoff__footer' },
    el('div', { class: 'hints' },
      el('span', { class: 'hint' }, padButton('cross', 'Select'), el('span', { text: 'Select' })),
      el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Back' })),
      el('span', { class: 'hint' }, padButton('triangle', 'Randomise'), el('span', { text: 'Randomise' }))
    ),
    el('div', { class: 'kickoff__actions' }, squadButton, startButton)
  );

  const node = el('div', { class: 'screen screen--kickoff' },
    el('div', { class: 'kickoff__tabs' },
      el('span', { text: 'Kick Off' }),
      el('span', { class: 'kickoff__tabs-sep' }),
      el('span', { class: 'is-active', text: 'Classic Match' }),
      el('span', { class: 'kickoff__tabs-sep' }),
      el('span', { text: 'Select Teams' })
    ),
    body,
    footer
  );

  function paint() {
    for (const side of ['home', 'away']) {
      const slot = node.querySelector(`[data-slot="${side}"]`);
      if (!slot) continue;
      const team = TEAMS[cursor[side]] || TEAMS[0];
      slot.replaceChildren(card(team, side));
    }
    liveFormToggle.classList.toggle('is-on', state.settings.liveForm);
    node.dataset.focus = focusSide;
  }

  paint();

  return {
    node,
    onKey(event) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const step = event.key === 'ArrowLeft' ? -1 : 1;
        const side = focusSide;
        cursor[side] = (cursor[side] + step + TEAMS.length) % TEAMS.length;
        state.selection[side] = TEAMS[cursor[side]].id;
        paint();
        return true;
      }
      if (event.key === 'Tab') {
        focusSide = focusSide === 'home' ? 'away' : 'home';
        state.settings.focus = focusSide;
        paint();
        return true;
      }
      if (event.key === 'Enter') {
        const home = getTeam(state.selection.home);
        const away = getTeam(state.selection.away);
        if (home && away) ctx.go('match', { home: home.id, away: away.id });
        return true;
      }
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go('menu');
        return true;
      }
      return false;
    }
  };
}

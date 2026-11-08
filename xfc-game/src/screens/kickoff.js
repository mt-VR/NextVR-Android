// Escolha de times do Kick Off: a tela "Classic Match / Select Teams" do FC,
// com as colunas HOME e AWAY, o cartão do time (escudo, estrelas, ATT/MID/DEF)
// e a coluna do meio com Advantage Settings, Live Form e Randomise.

import { el, svg, ICONS, padButton, starRow } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { TEAMS, getTeam } from '../data/teams.js';
import { kitsOf, kitSvg } from '../data/kits.js';
import { flagSvg } from '../ui/flags.js';

export function kickoffScreen(ctx) {
  const state = ctx.state;
  state.selection.home ||= TEAMS[0].id;
  state.selection.away ||= TEAMS[1].id;
  state.settings.focus ||= 'home';

  let focusSide = state.settings.focus === 'away' ? 'away' : 'home';
  const cursor = { home: 0, away: 1 };

  function teamIndexFor(side) {
    const index = TEAMS.findIndex(team => team.id === state.selection[side]);
    return index < 0 ? 0 : index;
  }

  function card(team, side) {
    const kits = kitsOf(team.id);
    const kitIndex = Math.max(0, Math.min(kits.length - 1, state.kits[team.id] ?? 0));
    const kit = kits[kitIndex] || null;

    // As setas ao lado do escudo trocam de clube (como no jogo de referência).
    function clubArrow(delta) {
      return el('button', {
        class: 'picker-arrow picker-arrow--crest', type: 'button',
        'aria-label': delta < 0 ? `Time anterior (${team.name})` : `Próximo time (${team.name})`,
        onClick(event) {
          event.stopPropagation();
          const index = TEAMS.findIndex(item => item.id === state.selection[side]);
          const next = (index + delta + TEAMS.length) % TEAMS.length;
          cursor[side] = next;
          state.selection[side] = TEAMS[next].id;
          paint();
        }
      }, svg(delta < 0 ? ICONS.chevronLeft : ICONS.chevronRight));
    }

    // E as setas da linha de blusa trocam o uniforme do clube.
    function kitArrow(delta) {
      return el('button', {
        class: 'picker-arrow', type: 'button',
        'aria-label': delta < 0 ? `Blusa anterior (${team.name})` : `Próxima blusa (${team.name})`,
        onClick(event) {
          event.stopPropagation();
          if (!kits.length) return;
          state.kits[team.id] = (kitIndex + delta + kits.length) % kits.length;
          paint();
        }
      }, svg(delta < 0 ? ICONS.chevronLeft : ICONS.chevronRight));
    }

    return el('div', {
      class: `team-card${state.selection[side] === team.id ? ' is-selected' : ''}`,
      dataset: { teamId: team.id, side },
      role: 'button',
      tabindex: '0',
      onClick() {
        state.selection[side] = team.id;
        cursor[side] = teamIndexFor(side);
        paint();
      }
    },
      el('div', { class: 'team-card__name', text: team.name }),
      el('div', { class: 'team-card__crest-wrap' },
        clubArrow(-1),
        el('img', { class: 'team-card__crest', src: team.crest, alt: `Escudo do ${team.name}` }),
        clubArrow(1)
      ),
      el('div', { class: 'team-card__stars' }, starRow(team.stars, { size: 18 })),
      el('div', { class: 'team-card__ratings' },
        el('div', { class: 'team-card__rating' }, el('b', { text: String(team.ratings.att) }), el('span', { text: 'ATT' })),
        el('div', { class: 'team-card__rating' }, el('b', { text: String(team.ratings.mid) }), el('span', { text: 'MID' })),
        el('div', { class: 'team-card__rating' }, el('b', { text: String(team.ratings.def) }), el('span', { text: 'DEF' }))
      ),
      el('div', { class: 'team-card__league', text: team.league }),
      el('div', { class: 'team-card__kit' },
        kitArrow(-1),
        kit ? el('span', { class: 'team-card__kit-thumb', html: kitSvg(kit, { width: 44 }) }) : null,
        el('span', { text: kit ? `${kit.name} Kit` : 'Home Kit' }),
        kitArrow(1)
      )
    );
  }

  function side(sideName, label) {
    const column = el('div', { class: `kickoff__side kickoff__side--${sideName}` },
      el('div', { class: 'kickoff__tabs' },
        el('span', { class: 'kickoff__tab is-active' }, el('span', { class: 'kickoff__tab-dot' }), el('span', { text: "Men's Teams" })),
        el('span', { class: 'kickoff__tab' }, el('span', { text: "Women's Teams" }))
      ),
      el('div', { class: 'kickoff__country', dataset: { country: sideName } }),
      el('div', { class: 'kickoff__slot', dataset: { slot: sideName } })
    );
    column.dataset.side = label;
    return column;
  }

  const liveForm = el('button', {
    class: 'kickoff__option', type: 'button',
    onClick() {
      state.settings.liveForm = !state.settings.liveForm;
      paint();
    }
  },
    el('span', { text: 'Live Form' }),
    el('span', { class: 'kickoff__toggle' }, el('b', { class: 'kickoff__toggle-value', text: 'Off' }))
  );

  const middle = el('div', { class: 'kickoff__middle' },
    el('button', {
      class: 'kickoff__swap', type: 'button', 'aria-label': 'Trocar os times de lado',
      onClick() {
        const home = state.selection.home;
        state.selection.home = state.selection.away;
        state.selection.away = home;
        cursor.home = teamIndexFor('home');
        cursor.away = teamIndexFor('away');
        paint();
      }
    }, '⇄'),
    el('button', {
      class: 'kickoff__option', type: 'button',
      onClick() {
        ctx.toast('Advantage Settings chegam na próxima etapa.');
      }
    }, el('span', { text: 'Advantage' }), el('span', { text: 'Settings' })),
    liveForm,
    el('button', {
      class: 'kickoff__random', type: 'button',
      onClick() {
        state.selection.home = TEAMS[0].id;
        state.selection.away = TEAMS[1].id;
        cursor.home = 0;
        cursor.away = 1;
        paint();
      }
    }, 'RANDOMISE')
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

  const kitsButton = el('button', {
    class: 'btn btn--ghost', type: 'button',
    onClick() {
      ctx.go('kits', {
        home: state.selection.home,
        away: state.selection.away,
        focus: focusSide
      });
    }
  }, 'Blusas');

  const footer = el('footer', { class: 'footer' },
    el('div', { class: 'hints' },
      el('span', { class: 'hint' }, padButton('cross', 'Select'), el('span', { text: 'Select' })),
      el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Back' })),
      el('span', { class: 'hint' }, padButton('triangle', 'Randomise'), el('span', { text: 'Randomise' }))
    ),
    el('div', { class: 'hints' },
      el('span', { class: 'hint hint--muted' }, el('span', { class: 'hint__key', text: 'Hold' }), el('span', { text: 'Ver elenco' })),
      kitsButton,
      squadButton,
      startButton
    )
  );

  const node = el('div', { class: 'screen screen--kickoff' },
    el('header', { class: 'topbar' },
      el('span', { class: 'topbar__mark', html: xfcWordmark() }),
      el('span', { class: 'topbar__title', text: 'Classic Match' }),
      el('span', { class: 'topbar__sep', text: '|' }),
      el('span', { class: 'topbar__subtitle', text: 'Select Teams' })
    ),
    el('div', { class: 'kickoff__stage' },
      el('span', { class: 'kickoff__edge kickoff__edge--home', text: 'HOME' }),
      side('home', 'Home'),
      middle,
      side('away', 'Away'),
      el('span', { class: 'kickoff__edge kickoff__edge--away', text: 'AWAY' })
    ),
    footer
  );

  function paint() {
    for (const sideName of ['home', 'away']) {
      const slot = node.querySelector(`[data-slot="${sideName}"]`);
      if (!slot) continue;
      const team = TEAMS[cursor[sideName]] || TEAMS[0];
      slot.replaceChildren(card(team, sideName));
      const country = node.querySelector(`[data-country="${sideName}"]`);
      if (country) {
        country.replaceChildren(
          el('span', { text: team.country }),
          el('span', { class: 'kickoff__flag' }, flagSvg(team.flag || 'es'))
        );
      }
    }
    liveForm.querySelector('.kickoff__toggle-value').textContent = state.settings.liveForm ? 'On' : 'Off';
    node.dataset.focus = focusSide;
  }

  paint();

  return {
    node,
    onKey(event) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const step = event.key === 'ArrowLeft' ? -1 : 1;
        cursor[focusSide] = (cursor[focusSide] + step + TEAMS.length) % TEAMS.length;
        state.selection[focusSide] = TEAMS[cursor[focusSide]].id;
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

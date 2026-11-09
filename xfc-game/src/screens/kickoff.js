// Escolha de times do Kick Off: a tela "Classic Match / Select Teams" do FC.
//
// O desenho segue a referência: barra de abas (Men's / Women's Teams), a barra
// do país com a bandeira na direita, o cartão grande do clube (nome, escudo em
// destaque com as setas dos lados, estrelas, ATT/MID/DEF e a liga) e, embaixo,
// o emblema da liga e o trocador de blusa. No meio ficam o interruptor de
// mando de campo, Advantage Settings, a mentalidade e o Live Form; “HOME” e
// “AWAY” ficam na vertical nas pontas da tela.

import { el, svg, ICONS, padButton, starRow } from '../ui/dom.js';
import { createContinueButton } from '../ui/continuebtn.js';
import { xfcWordmark, leagueBadgeSvg } from '../ui/brand.js';
import { TEAMS, getTeam } from '../data/teams.js';
import { kitsOf, kitSvg, kitShirt } from '../data/kits.js';
import { flagSvg } from '../ui/flags.js';

const MENTALITIES = [
  { id: 'A', label: 'Ataque' },
  { id: 'D', label: 'Defesa' },
  { id: 'M', label: 'Meio-campo' }
];

export function kickoffScreen(ctx, params = {}) {
  const state = ctx.state;
  const competition = params.competition || null;
  const returnTo = params.returnTo || 'menu';
  state.selection.home ||= TEAMS[0].id;
  state.selection.away ||= TEAMS[1].id;
  state.settings.focus ||= 'home';
  state.settings.mentality ||= 'A';

  let focusSide = state.settings.focus === 'away' ? 'away' : 'home';
  let swapped = false;
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

    return el('div', {
      class: `team-card${focusSide === side ? ' is-focus' : ''}`,
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
      el('div', { class: 'team-card__stars' }, starRow(team.stars, { size: 16 })),
      el('div', { class: 'team-card__ratings' },
        el('div', { class: 'team-card__rating' },
          el('span', { class: 'team-card__rating-label', text: 'ATT' }),
          el('b', { text: String(team.ratings.att) })),
        el('div', { class: 'team-card__rating' },
          el('span', { class: 'team-card__rating-label', text: 'MID' }),
          el('b', { text: String(team.ratings.mid) })),
        el('div', { class: 'team-card__rating' },
          el('span', { class: 'team-card__rating-label', text: 'DEF' }),
          el('b', { text: String(team.ratings.def) }))
      ),
      el('div', { class: 'team-card__league', text: team.league })
    );
  }

  // Abaixo do cartão: o emblema da liga e o trocador de blusa do clube.
  function badge(team, side) {
    const kits = kitsOf(team.id);
    const kitIndex = Math.max(0, Math.min(kits.length - 1, state.kits[team.id] ?? 0));
    const kit = kits[kitIndex] || null;

    function kitArrow(delta) {
      return el('button', {
        class: 'picker-arrow picker-arrow--kit', type: 'button',
        'aria-label': delta < 0 ? `Blusa anterior (${team.name})` : `Próxima blusa (${team.name})`,
        onClick(event) {
          event.stopPropagation();
          if (!kits.length) return;
          state.kits[team.id] = (kitIndex + delta + kits.length) % kits.length;
          paint();
        }
      }, svg(delta < 0 ? ICONS.chevronLeft : ICONS.chevronRight));
    }

    return el('div', { class: 'kickoff__badge' },
      el('div', { class: 'kickoff__league-logo', html: leagueBadgeSvg(team.league) }),
      el('div', { class: 'kickoff__kit' },
        kitArrow(-1),
        kit
          ? el('span', { class: 'kickoff__kit-thumb' },
            kitShirt(kit)
              ? el('img', { src: kitShirt(kit), alt: `Blusa ${kit.name}` })
              : el('span', { class: 'kickoff__kit-svg', html: kitSvg(kit, { width: 24 }) })
          )
          : null,
        el('span', { class: 'kickoff__kit-name', text: kit ? `${kit.name} Kit` : 'Home Kit' }),
        kitArrow(1)
      )
    );
  }

  function side(sideName) {
    const column = el('div', { class: `kickoff__side kickoff__side--${sideName}` },
      el('div', { class: 'kickoff__tabs' },
        el('span', { class: 'kickoff__tab is-active' },
          el('span', { class: 'kickoff__tab-check' }),
          el('span', { text: "Men's Teams" })),
        el('span', { class: 'kickoff__tab' },
          el('span', { class: 'kickoff__tab-circle' }),
          el('span', { text: "Women's Teams" }))
      ),
      el('div', { class: 'kickoff__country', dataset: { country: sideName } }),
      el('div', { class: 'kickoff__slot', dataset: { slot: sideName } })
    );
    column.dataset.side = sideName;
    return column;
  }

  // Interruptor do meio: liga/desliga o mando de campo (troca os lados).
  const homeSwitch = el('button', {
    class: 'kickoff__switch', type: 'button',
    'aria-label': 'Trocar o mando de campo',
    onClick() {
      swapped = !swapped;
      const home = state.selection.home;
      state.selection.home = state.selection.away;
      state.selection.away = home;
      cursor.home = teamIndexFor('home');
      cursor.away = teamIndexFor('away');
      paint();
    }
  },
    el('span', { class: 'kickoff__switch-track' }, el('span', { class: 'kickoff__switch-knob' })),
    el('span', { class: 'kickoff__switch-value', text: 'Off' })
  );

  const mentalityButton = el('button', {
    class: 'kickoff__mentality', type: 'button',
    'aria-label': 'Mentalidade do time',
    onClick() {
      const index = MENTALITIES.findIndex(item => item.id === state.settings.mentality);
      const next = MENTALITIES[(index + 1) % MENTALITIES.length];
      state.settings.mentality = next.id;
      paint();
      ctx.toast(`Mentalidade: ${next.label}.`);
    }
  }, 'A');

  const liveForm = el('button', {
    class: 'kickoff__liveform', type: 'button',
    onClick() {
      state.settings.liveForm = !state.settings.liveForm;
      paint();
    }
  },
    el('span', { class: 'kickoff__liveform-label', text: 'Live Form' }),
    el('span', { class: 'kickoff__liveform-value', text: 'Off' })
  );

  const middle = el('div', { class: 'kickoff__middle' },
    el('div', { class: 'kickoff__middle-top' },
      homeSwitch,
      el('button', {
        class: 'kickoff__option', type: 'button',
        onClick() {
          ctx.toast('Advantage Settings chegam na próxima etapa.');
        }
      },
        el('span', { text: 'Advantage' }),
        el('span', { text: 'Settings' })
      )
    ),
    el('div', { class: 'kickoff__middle-bottom' },
      mentalityButton,
      liveForm
    )
  );

  function randomise() {
    const pool = TEAMS.map(team => team.id);
    const home = pool[Math.floor(Math.random() * pool.length)];
    let away = pool[Math.floor(Math.random() * pool.length)];
    if (away === home) away = pool[(pool.indexOf(home) + 1) % pool.length];
    state.selection.home = home;
    state.selection.away = away;
    cursor.home = teamIndexFor('home');
    cursor.away = teamIndexFor('away');
    paint();
  }

  // CONTINUAR leva à escolha de estádios: a partida começa ao tocar a
  // galeria dos seis estádios.
  const startButton = createContinueButton({
    onEnter() {
      const home = getTeam(state.selection.home);
      const away = getTeam(state.selection.away);
      if (!home || !away) {
        ctx.toast('Escolha os dois times para começar.', { variant: 'warn' });
        return;
      }
      ctx.go('stadiums', {
        returnTo: 'kickoff',
        home: home.id,
        away: away.id,
        competition,
        competitionReturnTo: returnTo
      });
    }
  }).node;

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
      el('button', {
        class: 'hint hint--action', type: 'button',
        onClick() {
          randomise();
        }
      }, svg(ICONS.square), el('span', { text: 'Randomise' }))
    ),
    el('div', { class: 'hints hints--center' },
      kitsButton,
      squadButton,
      startButton
    ),
    el('div', { class: 'hints' },
      el('span', { class: 'hint hint--muted' }, el('span', { class: 'hint__key', text: 'Hold' }), el('span', { text: 'L1' })),
      el('span', { class: 'hint hint--muted' }, svg(ICONS.info), el('span', { text: '1' })),
      el('span', { class: 'hint hint--muted' }, svg(ICONS.friends), el('span', { text: '0' }))
    )
  );

  const node = el('div', { class: 'screen screen--kickoff' },
    el('header', { class: 'topbar' },
      el('span', { class: 'topbar__mark', html: xfcWordmark() }),
      el('span', { class: 'topbar__title', text: competition?.title || 'Classic Match' }),
      el('span', { class: 'topbar__sep', text: '|' }),
      el('span', { class: 'topbar__subtitle', text: competition?.format || 'Select Teams' })
    ),
    el('div', { class: 'kickoff__stage' },
      el('span', { class: 'kickoff__edge kickoff__edge--home', text: 'HOME' }),
      side('home'),
      middle,
      side('away'),
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

      const column = node.querySelector(`.kickoff__side--${sideName}`);
      if (column) {
        const old = column.querySelector('.kickoff__badge');
        const next = badge(team, sideName);
        if (old) old.replaceWith(next);
        else column.appendChild(next);
      }

      const country = node.querySelector(`[data-country="${sideName}"]`);
      if (country) {
        country.replaceChildren(...[
          team.countryCrest
            ? el('img', { class: 'kickoff__country-crest', src: team.countryCrest, alt: `Escudo de ${team.country}` })
            : null,
          el('span', { class: 'kickoff__country-name', text: team.country }),
          el('span', { class: 'kickoff__flag' }, flagSvg(team.flag || 'es'))
        ].filter(Boolean));
      }
    }
    homeSwitch.querySelector('.kickoff__switch-value').textContent = swapped ? 'On' : 'Off';
    homeSwitch.classList.toggle('is-on', swapped);
    liveForm.querySelector('.kickoff__liveform-value').textContent = state.settings.liveForm ? 'On' : 'Off';
    liveForm.classList.toggle('is-on', state.settings.liveForm);
    mentalityButton.textContent = state.settings.mentality;
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
        node.querySelector('.continue-btn')?.click();
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

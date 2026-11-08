// Tela de elenco (Team Management): o campo com a formação, o banco de
// reservas e o painel de atributos do jogador selecionado.

import { el, svg, ICONS, padButton, avatar } from '../ui/dom.js';
import { getTeam, FORMATION_433, POSITION_LABELS } from '../data/teams.js';

const ATTRIBUTE_LABELS = [
  ['pace', 'Pace'],
  ['shooting', 'Shooting'],
  ['passing', 'Passing'],
  ['dribbling', 'Dribbling'],
  ['defending', 'Defending'],
  ['physical', 'Physical']
];

const PLAYSTYLES = ['F', 'T', 'P', 'L', 'S', 'C'];

function portrait(player, extraClass = '') {
  const node = el('div', { class: `pitch-player__portrait ${extraClass}`.trim() });
  node.appendChild(el('span', { class: 'pitch-player__ovr', text: String(player.ovr) }));
  node.appendChild(el('img', { src: player.photo, alt: `Retrato de ${player.fullName}` }));
  return node;
}

export function squadScreen(ctx, params = {}) {
  const team = getTeam(params.teamId) || getTeam(ctx.state.selection.home) || getTeam('fc-barcelona');
  const players = team.players;
  const substitutes = team.substitutes;

  let selectedId = players[0]?.id;
  let focusIndex = 0;

  const pitch = el('div', { class: 'pitch' },
    el('div', { class: 'pitch__lines' }),
    el('div', { class: 'pitch__box' }),
    el('div', { class: 'pitch__box pitch__box--top' })
  );

  const pitchCards = FORMATION_433.map((slot, index) => {
    const player = players[index];
    const card = el('div', {
      class: 'pitch-player',
      style: { left: `${slot.x}%`, top: `${slot.y}%` },
      dataset: { playerId: player.id },
      role: 'button',
      tabindex: '0',
      onClick() {
        focusIndex = index;
        selectedId = player.id;
        paint();
      }
    }, portrait(player), el('span', { class: 'pitch-player__name', text: player.name }));
    pitch.appendChild(card);
    return card;
  });

  const bench = el('div', { class: 'bench' }, substitutes.map(player => el('div', {
    class: 'bench__slot',
    dataset: { playerId: player.id },
    role: 'button',
    tabindex: '0',
    onClick() {
      selectedId = player.id;
      paint();
    }
  },
    el('div', { class: 'bench__portrait' },
      el('span', { class: 'bench__ovr', text: String(player.ovr) }),
      avatar(player)
    ),
    el('span', { class: 'bench__name', text: player.name })
  )));

  const panel = el('aside', { class: 'player-panel' });

  const tabs = el('div', { class: 'squad__tabs' },
    el('span', { text: 'Squad' }),
    el('span', { class: 'is-active', text: 'Team Management' }),
    el('span', { text: 'Tactics' }),
    el('span', { text: 'Assignments' })
  );

  const footer = el('footer', { class: 'squad__footer' },
    el('div', { class: 'hints' },
      el('span', { class: 'hint' }, padButton('cross', 'Select'), el('span', { text: 'Select' })),
      el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Back' })),
      el('span', { class: 'hint' }, padButton('triangle', 'Edit Active Tactic'), el('span', { text: 'Edit Active Tactic' })),
      el('span', { class: 'hint' }, padButton('square', 'Suggested Subs'), el('span', { text: 'Suggested Subs' }))
    ),
    el('div', { class: 'hints' },
      el('span', { class: 'hint' }, el('span', { text: team.name })),
      el('span', { class: 'hint' }, svg(ICONS.ball), el('span', { text: team.formation }))
    )
  );

  const node = el('div', { class: 'screen screen--squad' },
    tabs,
    el('div', { class: 'squad__body' },
      el('div', { class: 'squad__pitch-col' }, pitch, bench),
      panel
    ),
    footer
  );

  function paint() {
    const player = [...players, ...substitutes].find(item => item.id === selectedId) || players[0];
    pitchCards.forEach((card, index) => card.classList.toggle('is-focused', index === focusIndex && players[index].id === selectedId));

    const attrs = ATTRIBUTE_LABELS.map(([key, label]) => el('div', { class: 'attr' },
      el('span', { class: 'attr__label', text: label }),
      el('span', { class: 'attr__value', text: String(player.stats[key]) }),
      el('span', { class: 'attr__bar' }, el('span', {
        class: 'attr__fill',
        style: { width: `${Math.max(4, Math.min(100, player.stats[key]))}%` }
      }))
    ));

    panel.replaceChildren(
      el('div', { class: 'player-panel__head' },
        el('div', {},
          el('div', { class: 'player-panel__pos', text: `${player.pos} · ${POSITION_LABELS[player.pos] || ''}` }),
          el('h2', { class: 'player-panel__name', text: player.fullName })
        ),
        el('div', { class: 'player-panel__ratings' },
          el('div', { class: 'rating-box' }, el('b', { text: String(player.ovr) }), el('span', { text: 'OVR' })),
          el('div', { class: 'rating-box' }, el('b', { text: String(player.potential) }), el('span', { text: 'POT' }))
        )
      ),
      el('div', { class: 'player-panel__status' }, el('i'), el('span', { text: 'Ready to Play' })),
      el('div', { class: 'attr-list' }, attrs),
      el('div', { class: 'meta-grid' },
        el('div', { class: 'meta' }, el('span', { text: 'Age' }), el('b', { text: String(player.age) })),
        el('div', { class: 'meta' }, el('span', { text: 'Height' }), el('b', { text: `${player.height} cm` })),
        el('div', { class: 'meta' }, el('span', { text: 'Foot' }), el('b', { text: player.foot })),
        el('div', { class: 'meta' }, el('span', { text: 'Role' }), el('b', { text: player.role })),
        el('div', { class: 'meta' }, el('span', { text: 'Focus' }), el('b', { text: player.focus })),
        el('div', { class: 'meta' }, el('span', { text: 'Celebration' }), el('b', { text: player.celebration })),
        el('div', { class: 'meta' }, el('span', { text: 'Form' }), el('b', { text: player.form })),
        el('div', { class: 'meta' }, el('span', { text: 'Number' }), el('b', { text: `#${player.number}` }))
      ),
      el('div', {},
        el('div', { class: 'u-label', text: 'PlayStyles' }),
        el('div', { class: 'playstyles', style: { marginTop: '8px' } }, PLAYSTYLES.map((style, index) => el('span', { class: 'playstyle', text: style, style: { opacity: index < 3 ? 1 : 0.35 } })))
      )
    );
  }

  paint();

  return {
    node,
    onKey(event) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const step = event.key === 'ArrowRight' ? 1 : -1;
        focusIndex = (focusIndex + step + players.length) % players.length;
        selectedId = players[focusIndex].id;
        paint();
        return true;
      }
      if (event.key === 'ArrowDown') {
        focusIndex = (focusIndex + 1) % players.length;
        selectedId = players[focusIndex].id;
        paint();
        return true;
      }
      if (event.key === 'ArrowUp') {
        focusIndex = (focusIndex - 1 + players.length) % players.length;
        selectedId = players[focusIndex].id;
        paint();
        return true;
      }
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go('kickoff');
        return true;
      }
      return false;
    }
  };
}

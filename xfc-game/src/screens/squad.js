import {portraitFor} from '../data/asset-library.js';
// Tela de elenco (Team Management): as abas no topo, o campo com a formação
// 4-3-3, o banco de reservas e o painel do jogador selecionado à direita —
// no mesmo desenho da tela de elenco do FC.

import { el, svg, ICONS, padButton, starRow, initialsOf } from '../ui/dom.js';
import { footballCard,enablePositionDrag,planToPitch,pitchToPlan,positionCard } from '../ui/game-plan.js';
import { saveProfile } from '../state.js';
import { getTeam, FORMATION_433, POSITION_LABELS } from '../data/teams.js';

const ATTRIBUTE_LABELS = [
  ['pace', 'Ritmo'],
  ['shooting', 'Finalização'],
  ['shotPower', 'Potência'],
  ['passing', 'Passe'],
  ['dribbling', 'Condução'],
  ['defending', 'Defesa'],
  ['physical', 'Físico']
];

const PLAYSTYLES = ['F', 'T', 'P', 'L', 'S', 'C'];

/** Retrato do jogador (ou as iniciais, quando o elenco ainda não tem foto). */
function portraitOf(player) {
  if (!portraitFor(player)) {
    return el('span', { class: 'avatar avatar--empty' },
      el('span', { class: 'avatar__initials', text: initialsOf(player.name) }));
  }
  return el('img', { src: portraitFor(player), alt: `Retrato de ${player.fullName}` });
}

function starsFilled(value) {
  return Math.max(1, Math.min(5, Math.round(value / 20)));
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
    const saved=ctx.state.profile.gamePlans?.[team.id]?.[player.id];
    let point=saved?planToPitch(saved):{x:slot.x,y:slot.y};
    const card=footballCard(player,{className:'pitch-player',crest:team.crest});
    card.dataset.playerId=player.id;positionCard(card,point);
    card.addEventListener('click',()=>{focusIndex=index;selectedId=player.id;paint();});
    enablePositionDrag(card,pitch,{getPosition:()=>point,onChange:next=>{
      point=next;ctx.state.profile.gamePlans||={};ctx.state.profile.gamePlans[team.id]||={};
      ctx.state.profile.gamePlans[team.id][player.id]=pitchToPlan(next);saveProfile(ctx.state);
    }});
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
      portraitOf(player)
    ),
    el('span', { class: 'bench__name', text: player.name })
  )));

  const panel = el('aside', { class: 'player-panel' });

  const tabs = el('div', { class: 'squad__tabs' },
    el('span', { class: 'squad__tab is-active', text: 'ELENCO' }),
    el('span', { class: 'squad__tab', text: 'ESQUEMAS' }),
    el('span', { class: 'squad__tab', text: 'TÁTICAS' }),
    el('span', { class: 'squad__tab', text: 'FUNÇÕES' }),
    el('span', { class: 'squad__tab', text: 'INSTRUÇÕES' })
  );

  const footer = el('footer', { class: 'footer' },
    el('div', { class: 'hints' },
      el('span', { class: 'hint' }, padButton('cross', 'Select'), el('span', { text: 'Select' })),
      el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Back' })),
      el('span', { class: 'hint' }, padButton('triangle', 'Edit Active Tactic'), el('span', { text: 'Edit Active Tactic' })),
      el('span', { class: 'hint' }, padButton('square', 'Suggested Subs'), el('span', { text: 'Suggested Subs' }))
    ),
    el('div', { class: 'hints' },
      el('span', { class: 'hint' }, el('span', { text: team.name })),
      el('span', { class: 'hint' }, svg(ICONS.ball), el('span', { text: team.formation })),
      el('span', { class: 'hint hint--muted' }, el('span', { text: 'Full Profile' })),
      el('span', { class: 'hint hint--muted' }, el('span', { text: 'Quick Subs' })),
      el('span', { class: 'hint hint--muted' }, el('span', { text: 'Go to Squad Hub' }))
    )
  );

  const node = el('div', { class: 'screen screen--squad' },
    tabs,
    el('div', { class: 'squad__body' },
      el('div', { class: 'squad__left' },
        pitch,
        el('div', { class: 'squad__viewtabs' },
          el('span', { class: 'is-active', text: 'Without Ball' }),
          el('span', { text: 'Switch View' })
        ),
        bench
      ),
      panel
    ),
    footer
  );

  function paint() {
    const player = [...players, ...substitutes].find(item => item.id === selectedId) || players[0];
    pitchCards.forEach((card, index) => card.classList.toggle('is-selected', players[index].id === selectedId));
    node.querySelectorAll('.bench__slot').forEach(slot => {
      slot.classList.toggle('is-selected', slot.dataset.playerId === selectedId);
    });

    const attrs = ATTRIBUTE_LABELS.map(([key, label]) => {
      const value = key === 'shotPower'
        ? Math.round(player.stats.shooting * 0.88 + player.stats.physical * 0.12)
        : player.stats[key];
      return el('div', { class: 'attr' },
        el('span', { text: label }),
        el('b', { text: String(value) }),
        el('span', { class: 'attr__bar' }, el('span', { style: { width: `${Math.max(4, Math.min(100, value))}%` } }))
      );
    });

    panel.replaceChildren(
      el('div', { class: 'player-panel__head' },
        el('div', {},
          el('div', { class: 'player-panel__positions', text: `${player.pos} • ${POSITION_LABELS[player.pos] || ''}` }),
          el('h2', { class: 'player-panel__name', text: player.name }),
          el('div', { class: 'player-panel__positions', text: `${player.fullName} · #${player.number}` })
        ),
        el('div', { class: 'player-panel__ovr' },
          el('div', { class: 'ovr-box' }, el('b', { text: String(player.ovr) }), el('span', { text: 'OVR' })),
          el('div', { class: 'ovr-box' }, el('b', { text: String(player.potential) }), el('span', { text: 'POT' }))
        )
      ),
      el('div', { class: 'player-panel__status' },
        el('span', { text: 'Form' }),
        el('span', { class: 'is-good', text: `+${player.form || 0} OVR` }),
        el('span', { text: 'Morale' }),
        el('span', { class: 'is-good', text: 'Ready to Play' }),
        el('span', { text: 'Match Fitness' }),
        el('span', { class: 'is-good', text: '100%' })
      ),
      el('div', { class: 'player-panel__grid' }, attrs),
      el('div', { class: 'player-panel__meta' },
        el('span', { text: 'Age' }), el('b', { text: String(player.age) }),
        el('span', { text: 'Height' }), el('b', { text: `${player.height} cm` }),
        el('span', { text: 'Role' }), el('b', { text: player.role }),
        el('span', { text: 'Focus' }), el('b', { text: player.focus }),
        el('span', { text: 'Celebration Type' }), el('b', { text: player.celebration }),
        el('span', { text: 'Foot' }), el('b', { text: player.foot })
      ),
      el('div', { class: 'player-panel__stars' },
        el('span', {}, el('span', { text: 'Skill Moves' }), starRow(starsFilled(player.ovr + 6), { size: 13 })),
        el('span', {}, el('span', { text: 'Weak Foot' }), starRow(starsFilled(player.ovr - 6), { size: 13 }))
      ),
      el('div', { class: 'player-panel__styles' },
        PLAYSTYLES.map((style, index) => el('span', {
          class: `style-diamond${index < 3 ? ' is-on' : ''}`,
          title: style
        }))
      )
    );
  }

  paint();

  return {
    node,
    onKey(event) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const step = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
        focusIndex = (focusIndex + step + players.length) % players.length;
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

// Tela da Copa do Mundo XFC 27: mostra o grupo do Brasil, a classificação,
// os resultados das quartas, semis e final, e o troféu se o Brasil for campeão.
//
// Usa os dados de seleções de src/data/worldcup.js e as bandeiras de ui/flags.js.

import { el, svg, starRow } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { flagSvg } from '../ui/flags.js';
import {
  NATIONAL_TEAMS,
  drawGroups,
  computeGroupStandings,
  simulateKnockout,
  getNationalTeam,
  USER_NATIONAL_TEAM_ID
} from '../data/worldcup.js';

export function worldCupScreen(ctx, params = {}) {
  // Modo: 'live' (acompanhar edição atual) ou '2027' (liderar seleção)
  const mode = params.mode || '2027';

  // Semente fixa para reprodutibilidade
  const seed = mode === 'live' ? 12345 : 67890;

  // Sortear grupos
  const groups = drawGroups(NATIONAL_TEAMS);

  // Calcular classificação
  const standings = computeGroupStandings(NATIONAL_TEAMS, groups, seed);

  // Simular mata-mata
  const knockout = simulateKnockout(NATIONAL_TEAMS, groups, standings, seed);

  // Verificar se o Brasil venceu
  const brazilChampion = knockout.final.winner === USER_NATIONAL_TEAM_ID;

  // Encontrar o grupo do Brasil
  const brazilGroup = groups.A.includes(USER_NATIONAL_TEAM_ID) ? 'A' : 'B';
  const groupTeamIds = groups[brazilGroup];
  const groupTeams = groupTeamIds.map(id => getNationalTeam(id));

  // Classificação do grupo do Brasil
  const groupStandings = standings
    .filter(t => groupTeamIds.includes(t.id))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      const diffA = a.gf - a.ga;
      const diffB = b.gf - b.ga;
      if (diffB !== diffA) return diffB - diffA;
      return b.gf - a.gf;
    });

  // ------------------------------------------------------- helper: team card --
  function teamCard(team, opts = {}) {
    const { showRank = false, rank = null } = opts;
    return el('div', { class: 'worldcup__team' },
      showRank && rank !== null && el('span', { class: 'worldcup__team-rank', text: `${rank}` }),
      el('span', { class: 'worldcup__team-flag' }, flagSvg(team.flagCode)),
      el('span', { class: 'worldcup__team-name', text: team.name }),
      starRow(team.stars, { size: 14 })
    );
  }

  function standingsRow(entry, rank) {
    const team = getNationalTeam(entry.id);
    const diff = entry.gf - entry.ga;
    return el('div', { class: 'worldcup__standings-row' },
      el('span', { class: 'worldcup__standings-rank', text: `${rank}` }),
      flagSvg(team.flagCode),
      el('span', { class: 'worldcup__standings-name', text: team.name }),
      el('span', { class: 'worldcup__standings-played', text: `${entry.played}` }),
      el('span', { class: 'worldcup__standings-won', text: `${entry.won}` }),
      el('span', { class: 'worldcup__standings-drawn', text: `${entry.drawn}` }),
      el('span', { class: 'worldcup__standings-lost', text: `${entry.lost}` }),
      el('span', { class: 'worldcup__standings-gf', text: `${entry.gf}` }),
      el('span', { class: 'worldcup__standings-ga', text: `${entry.ga}` }),
      el('span', { class: 'worldcup__standings-diff', text: `${diff >= 0 ? '+' : ''}${diff}` }),
      el('span', { class: 'worldcup__standings-points', text: `${entry.points}` })
    );
  }

  function matchResultCard(match, result, opts = {}) {
    const homeTeam = getNationalTeam(match.home);
    const awayTeam = getNationalTeam(match.away);
    return el('div', { class: `worldcup__match${result.winner === match.home ? ' is-home-win' : result.winner === match.away ? ' is-away-win' : ''}` },
      el('div', { class: 'worldcup__match-team worldcup__match-home' },
        el('span', { class: 'worldcup__match-flag' }, flagSvg(homeTeam.flagCode)),
        el('span', { class: 'worldcup__match-name', text: homeTeam.name })
      ),
      el('div', { class: 'worldcup__match-score', text: `${result.homeGoals} - ${result.awayGoals}` }),
      el('div', { class: 'worldcup__match-team worldcup__match-away' },
        el('span', { class: 'worldcup__match-flag' }, flagSvg(awayTeam.flagCode)),
        el('span', { class: 'worldcup__match-name', text: awayTeam.name })
      )
    );
  }

  // ------------------------------------------------------- build screen ------
  const header = el('header', { class: 'topbar' },
    el('button', {
      class: 'topbar__back',
      type: 'button',
      onClick() { ctx.go('menu'); },
      html: '<svg viewBox="0 0 24 24"><path d="M15 4L7 12l8 8" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>'
    }),
    el('span', { class: 'topbar__mark', html: xfcWordmark() }),
    el('span', { class: 'topbar__title', text: 'Copa do Mundo' }),
    el('span', { class: 'topbar__sep', text: '|' }),
    el('span', { class: 'topbar__subtitle', text: mode === 'live' ? 'Live 2026' : '2027' })
  );

  const lead = el('p', {
    class: 'worldcup__lead',
    text: mode === 'live'
      ? 'Acompanhe a edição atual da Copa do Mundo. Veja o grupo do Brasil, a classificação e os resultados do mata-mata.'
      : 'Lidere a Seleção Brasileira até o título da Copa do Mundo 2027. Veja o grupo, a classificação e o caminho até a final.'
  });

  // Group section
  const groupSection = el('section', { class: 'worldcup__group' },
    el('h2', { class: 'worldcup__section-title', text: `Grupo ${brazilGroup}` }),
    el('div', { class: 'worldcup__group-teams' },
      ...groupTeams.map(t => teamCard(t, { showRank: true }))
    )
  );

  // Standings section
  const standingsSection = el('section', { class: 'worldcup__standings' },
    el('h2', { class: 'worldcup__section-title', text: `Tabela — Grupo ${brazilGroup}` }),
    el('div', { class: 'worldcup__standings-header' },
      el('span', { text: '#' }),
      el('span', { text: 'Seleção' }),
      el('span', { text: 'P' }),
      el('span', { text: 'V' }),
      el('span', { text: 'E' }),
      el('span', { text: 'D' }),
      el('span', { text: 'GF' }),
      el('span', { text: 'GC' }),
      el('span', { text: 'SG' }),
      el('span', { text: 'Pts' })
    ),
    ...groupStandings.map((entry, index) => standingsRow(entry, index + 1))
  );

  // Knockout section
  const knockoutSection = el('section', { class: 'worldcup__knockout' },
    el('h2', { class: 'worldcup__section-title', text: 'Fase Final' }),
    el('div', { class: 'worldcup__knockout-stage' },
      el('div', { class: 'worldcup__knockout-round' },
        el('h3', { class: 'worldcup__round-title', text: 'Quartas de Final' }),
        matchResultCard(knockout.quartas[0], knockout.quartasResults[0]),
        matchResultCard(knockout.quartas[1], knockout.quartasResults[1])
      ),
      el('div', { class: 'worldcup__knockout-round' },
        el('h3', { class: 'worldcup__round-title', text: 'Semifinais' }),
        matchResultCard(knockout.semis, knockout.semis)
      ),
      el('div', { class: 'worldcup__knockout-round' },
        el('h3', { class: 'worldcup__round-title', text: 'Final' }),
        matchResultCard(knockout.final, knockout.final)
      )
    )
  );

  // Trophy section (if Brazil won)
  const trophySection = brazilChampion
    ? el('section', { class: 'worldcup__trophy' },
        el('div', { class: 'worldcup__trophy-icon', html: trophySvg() }),
        el('h2', { class: 'worldcup__trophy-title', text: '🏆 Campeão Mundial!' }),
        el('p', { class: 'worldcup__trophy-sub', text: 'Brasil levanta a taça da Copa do Mundo 2027!' }),
        el('div', { class: 'worldcup__trophy-actions' },
          el('button', {
            class: 'worldcup__btn worldcup__btn--primary',
            type: 'button',
            onClick() { ctx.go('play', { home: 'brazil', away: knockout.final.away, minutes: 6, difficulty: 'normal', stadium: 2 }); }
          }, 'Jogar Final'),
          el('button', {
            class: 'worldcup__btn',
            type: 'button',
            onClick() { ctx.go('menu'); }
          }, 'Voltar ao Menu')
        )
      )
    : el('section', { class: 'worldcup__trophy worldcup__trophy--lost' },
        el('div', { class: 'worldcup__trophy-icon', html: trophySvg() }),
        el('h2', { class: 'worldcup__trophy-title', text: 'Finalista' }),
        el('p', { class: 'worldcup__trophy-sub', text: 'Brasil chegou à final mas não levou a taça. Tente novamente!' }),
        el('div', { class: 'worldcup__trophy-actions' },
          el('button', {
            class: 'worldcup__btn worldcup__btn--primary',
            type: 'button',
            onClick() { ctx.go('menu'); }
          }, 'Tentar Novamente'),
          el('button', {
            class: 'worldcup__btn',
            type: 'button',
            onClick() { ctx.go('menu'); }
          }, 'Voltar ao Menu')
        )
      );

  // ------------------------------------------------------- node assembly ----
  const node = el('div', { class: 'screen screen--worldcup' },
    header,
    lead,
    el('div', { class: 'worldcup__content' },
      groupSection,
      standingsSection,
      knockoutSection,
      trophySection
    ),
    el('div', { class: 'worldcup__hint', text: 'Pressione Esc para voltar ao menu' })
  );

  function onKey(event) {
    if (event.key === 'Escape' || event.key === 'Backspace') {
      ctx.go('menu');
      return true;
    }
    return false;
  }

  return { node, onKey };
}

/** SVG do troféu da Copa do Mundo. */
function trophySvg() {
  return `<svg viewBox="0 0 64 80" width="64" height="80" fill="none">
    <ellipse cx="32" cy="72" rx="20" ry="4" fill="rgba(0,0,0,0.3)"/>
    <path d="M18 12c0 6 8 10 14 10s14-4 14-10v6c0 8-6 14-14 14s-14-6-14-14v-6z" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
    <path d="M18 12c0 6 8 10 14 10s14-4 14-10" fill="none" stroke="#c89020" stroke-width="1.5"/>
    <path d="M14 18c-4 2-6 6-6 10 4 0 6-2 6-6" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
    <path d="M50 18c4 2 6 6 6 10-4 0-6-2-6-6" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
    <rect x="26" y="22" width="12" height="8" rx="2" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
    <path d="M24 30h16v4c0 4-4 6-8 6s-8-2-8-6z" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
    <path d="M26 36h12v8c0 6-3 10-6 10s-6-4-6-10z" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
    <path d="M28 44h8v8c0 3-2 6-4 6s-4-3-4-6z" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
    <circle cx="32" cy="10" r="3" fill="#ff4080"/>
  </svg>`;
}

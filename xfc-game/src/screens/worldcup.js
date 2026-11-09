// Campanha jogável da Copa do Mundo XFC 27: sorteio novo por campanha,
// partidas do Brasil em campo, tabela calculada pelos resultados e mata-mata.

import { el, starRow } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { flagSvg } from '../ui/flags.js';
import { saveProfile } from '../state.js';
import {
  createWorldCupCampaign,
  campaignStandings,
  nextCampaignMatch,
  recordCampaignMatchResult,
  getNationalTeam,
  USER_NATIONAL_TEAM_ID
} from '../data/worldcup.js';

const GROUP_LABELS = { A: 'Grupo A', B: 'Grupo B' };

export function worldCupScreen(ctx, params = {}) {
  const mode = params.mode || '2027';
  const profile = ctx.state.profile;
  let campaign = profile.worldCupCampaign;
  if (params.newCampaign || !isCampaignValid(campaign) || campaign.mode !== mode) {
    campaign = createWorldCupCampaign({
      mode,
      previousGroups: profile.worldCupCampaign?.groups || null
    });
    profile.worldCupCampaign = campaign;
    saveProfile(ctx.state);
  }

  const brazilGroup = campaign.groups.A.includes(USER_NATIONAL_TEAM_ID) ? 'A' : 'B';
  const groupTeams = campaign.groups[brazilGroup].map(getNationalTeam);
  const standings = campaignStandings(campaign, brazilGroup);
  const nextMatch = nextCampaignMatch(campaign);

  function teamFlag(team, className = '') {
    return el('span', { class: `worldcup__team-flag ${className}`.trim() }, flagSvg(team.flagCode));
  }

  function teamCard(team, rank) {
    return el('div', { class: `worldcup__team${team.id === USER_NATIONAL_TEAM_ID ? ' is-user-team' : ''}` },
      el('span', { class: 'worldcup__team-rank', text: String(rank) }),
      teamFlag(team),
      el('span', { class: 'worldcup__team-name', text: team.name }),
      starRow(team.stars, { size: 14 })
    );
  }

  function standingsRow(entry, rank) {
    const team = getNationalTeam(entry.id);
    const diff = entry.gf - entry.ga;
    return el('div', {
      class: `worldcup__standings-row${entry.id === USER_NATIONAL_TEAM_ID ? ' is-user-team' : ''}`,
      dataset: { teamId: entry.id }
    },
      el('span', { class: 'worldcup__standings-rank', text: String(rank) }),
      flagSvg(team.flagCode),
      el('span', { class: 'worldcup__standings-name', text: team.name }),
      el('span', { class: 'worldcup__standings-played', text: String(entry.played) }),
      el('span', { class: 'worldcup__standings-won', text: String(entry.won) }),
      el('span', { class: 'worldcup__standings-drawn', text: String(entry.drawn) }),
      el('span', { class: 'worldcup__standings-lost', text: String(entry.lost) }),
      el('span', { class: 'worldcup__standings-gf', text: String(entry.gf) }),
      el('span', { class: 'worldcup__standings-ga', text: String(entry.ga) }),
      el('span', { class: 'worldcup__standings-diff', text: `${diff > 0 ? '+' : ''}${diff}` }),
      el('span', { class: 'worldcup__standings-points', text: String(entry.points) })
    );
  }

  function matchSide(teamId, side) {
    const team = getNationalTeam(teamId);
    return el('div', { class: `worldcup__match-team worldcup__match-${side}` },
      teamFlag(team, 'worldcup__match-flag'),
      el('span', { class: 'worldcup__match-name', text: team.name })
    );
  }

  function matchRow(match, { allowPlay = false } = {}) {
    const played = match.played;
    const winnerClass = played && match.winner
      ? match.winner === match.home ? ' is-home-win' : ' is-away-win'
      : '';
    const row = el('div', {
      class: `worldcup__match${winnerClass}${match.id === nextMatch?.id ? ' is-next-match' : ''}`,
      dataset: { matchId: match.id }
    },
      matchSide(match.home, 'home'),
      el('div', { class: 'worldcup__match-score', text: played ? `${match.homeGoals} – ${match.awayGoals}` : 'VS' }),
      matchSide(match.away, 'away')
    );

    const status = played
      ? match.decidedBy === 'penalties' ? 'Decidido nos pênaltis' : match.stage === 'group' ? `Rodada ${match.round}` : 'Encerrado'
      : match.id === nextMatch?.id ? 'Sua próxima partida' : 'Aguardando';
    return el('article', { class: 'worldcup__fixture' },
      row,
      el('span', { class: `worldcup__fixture-status${match.id === nextMatch?.id ? ' is-next' : ''}`, text: status }),
      allowPlay && match.id === nextMatch?.id && el('button', {
        class: 'worldcup__play-match',
        type: 'button',
        dataset: { matchId: match.id },
        onClick() { openCampaignMatch(match); }
      }, 'JOGAR PARTIDA  →')
    );
  }

  function openCampaignMatch(match) {
    ctx.go('play', {
      home: match.home,
      away: match.away,
      homeKit: 0,
      awayKit: 0,
      minutes: 6,
      difficulty: 'normal',
      stadium: 2,
      userSide: match.home === USER_NATIONAL_TEAM_ID ? 'home' : 'away',
      worldCupMatchId: match.id,
      worldCupMode: campaign.mode
    });
  }

  const header = el('header', { class: 'topbar' },
    el('button', {
      class: 'topbar__back',
      type: 'button',
      'aria-label': 'Voltar aos modos',
      onClick() { ctx.go('modes'); },
      html: '<svg viewBox="0 0 24 24"><path d="M15 4L7 12l8 8" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>'
    }),
    el('span', { class: 'topbar__mark', html: xfcWordmark() }),
    el('span', { class: 'topbar__title', text: 'Copa do Mundo' }),
    el('span', { class: 'topbar__sep', text: '|' }),
    el('span', { class: 'topbar__subtitle', text: campaign.year })
  );

  const phaseCopy = {
    group: 'Jogue as três partidas do Brasil. Os outros resultados entram na tabela e definem quem avança.',
    semifinal: 'O Brasil avançou. Vença a semifinal para chegar à decisão.',
    final: 'A final chegou. Uma vitória coloca o Brasil no topo do mundo.',
    champion: 'Campanha perfeita: o Brasil é campeão mundial!',
    runnerup: 'O Brasil chegou à final. Uma nova campanha pode trazer a taça.',
    eliminated: 'A fase de grupos terminou. Crie outra campanha para tentar novamente.'
  };
  const lead = el('p', {
    class: 'worldcup__lead',
    text: phaseCopy[campaign.stage] || phaseCopy.group
  });

  const progressLabel = campaign.stage === 'group'
    ? `${campaign.groupMatches.filter(match => match.playable && match.played).length}/3 jogos do Brasil`
    : campaign.stage === 'semifinal' ? 'Semifinal' : campaign.stage === 'final' ? 'Final' : 'Campanha encerrada';
  const hero = el('section', { class: 'worldcup__campaign-hero' },
    el('div', { class: 'worldcup__campaign-copy' },
      el('span', { class: 'worldcup__eyebrow', text: `XFC WORLD CUP™ ${campaign.year} · CAMPANHA` }),
      el('h1', { class: 'worldcup__campaign-title', text: `Brasil · ${GROUP_LABELS[brazilGroup]}` }),
      el('p', { class: 'worldcup__campaign-progress', text: progressLabel })
    ),
    el('div', { class: 'worldcup__campaign-badge', 'aria-label': 'Seleção Brasileira' },
      flagSvg('br'),
      el('b', { text: 'BRASIL' }),
      el('span', { text: '★★★★★' })
    )
  );

  const groupSection = el('section', { class: 'worldcup__group' },
    el('div', { class: 'worldcup__section-heading' },
      el('h2', { class: 'worldcup__section-title', text: GROUP_LABELS[brazilGroup] }),
      el('span', { class: 'worldcup__section-note', text: 'Grupos sorteados para esta campanha' })
    ),
    el('div', { class: 'worldcup__group-teams' },
      ...groupTeams.map(team => teamCard(team, groupTeams.indexOf(team) + 1))
    )
  );

  const standingsSection = el('section', { class: 'worldcup__standings' },
    el('div', { class: 'worldcup__section-heading' },
      el('h2', { class: 'worldcup__section-title', text: `Classificação — ${GROUP_LABELS[brazilGroup]}` }),
      el('span', { class: 'worldcup__section-note', text: 'Os dois primeiros avançam' })
    ),
    el('div', { class: 'worldcup__standings-header' },
      el('span', { text: '#' }), el('span', { 'aria-hidden': 'true' }), el('span', { text: 'Seleção' }),
      el('span', { text: 'J' }), el('span', { text: 'V' }), el('span', { text: 'E' }), el('span', { text: 'D' }),
      el('span', { text: 'GF' }), el('span', { text: 'GC' }), el('span', { text: 'SG' }), el('span', { text: 'Pts' })
    ),
    ...standings.map((entry, index) => standingsRow(entry, index + 1))
  );

  const groupMatches = campaign.groupMatches
    .filter(match => match.group === brazilGroup)
    .sort((a, b) => a.round - b.round || a.id.localeCompare(b.id));
  const fixturesSection = el('section', { class: 'worldcup__fixtures' },
    el('div', { class: 'worldcup__section-heading' },
      el('h2', { class: 'worldcup__section-title', text: 'Jogos da fase de grupos' }),
      el('span', { class: 'worldcup__section-note', text: 'Todos os resultados contam para a tabela' })
    ),
    ...groupMatches.map(match => matchRow(match, { allowPlay: true }))
  );

  const knockoutMatches = campaign.knockoutMatches || [];
  const knockoutSection = el('section', { class: `worldcup__knockout${campaign.stage === 'group' ? ' is-locked' : ''}` },
    el('div', { class: 'worldcup__section-heading' },
      el('h2', { class: 'worldcup__section-title', text: 'Mata-mata' }),
      el('span', { class: 'worldcup__section-note', text: campaign.stage === 'group' ? 'Desbloqueado após a fase de grupos' : 'Semifinais e final' })
    ),
    campaign.stage === 'group'
      ? el('p', { class: 'worldcup__locked-copy', text: 'Conclua os três jogos do Brasil para conhecer os semifinalistas.' })
      : knockoutMatches.map(match => matchRow(match, { allowPlay: true }))
  );

  const finalCopy = campaign.stage === 'champion'
    ? ['🏆 Brasil campeão mundial!', 'A Seleção conquistou a Copa do Mundo. Comece uma nova campanha e faça outro sorteio.']
    : campaign.stage === 'runnerup'
      ? ['Brasil vice-campeão', 'A final foi decidida em campo. Tente novamente em uma nova campanha.']
      : campaign.stage === 'eliminated'
        ? ['Fim da campanha', 'O Brasil não avançou à próxima fase desta vez.']
        : null;
  const outcome = finalCopy && el('section', { class: 'worldcup__trophy' },
    el('div', { class: 'worldcup__trophy-icon', html: trophySvg() }),
    el('h2', { class: 'worldcup__trophy-title', text: finalCopy[0] }),
    el('p', { class: 'worldcup__trophy-sub', text: finalCopy[1] })
  );

  const newCampaign = el('button', {
    class: 'worldcup__new-campaign',
    type: 'button',
    onClick() {
      profile.worldCupCampaign = createWorldCupCampaign({ mode, previousGroups: campaign.groups });
      saveProfile(ctx.state);
      ctx.go('worldcup', { mode });
    }
  }, 'NOVA CAMPANHA  ↻');

  const node = el('div', { class: 'screen screen--worldcup' },
    header,
    lead,
    hero,
    el('div', { class: 'worldcup__content' },
      groupSection,
      standingsSection,
      fixturesSection,
      knockoutSection,
      outcome,
      newCampaign
    ),
    el('div', { class: 'worldcup__hint', text: 'ESC · VOLTAR AOS MODOS' })
  );

  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go('modes');
        return true;
      }
      return false;
    }
  };
}

function isCampaignValid(campaign) {
  return Boolean(campaign?.groups?.A?.length === 4
    && campaign?.groups?.B?.length === 4
    && Array.isArray(campaign.groupMatches)
    && campaign.groupMatches.length === 12);
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

// Tela da Copa do Mundo: escolha da seleção, sorteio aleatório dos grupos,
// classificação e chave jogável das oitavas até a final.

import { el, starRow } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { flagSvg } from '../ui/flags.js';
import { saveProfile } from '../state.js';
import {
  NATIONAL_TEAMS,
  GROUP_NAMES,
  createWorldCupCampaign,
  campaignStandings,
  nextCampaignMatch,
  recordCampaignMatchResult,
  getNationalTeam,
  findGroup
} from '../data/worldcup.js';

const GROUP_LABELS = Object.fromEntries(GROUP_NAMES.map(group => [group, `Grupo ${group}`]));
const STAGE_LABELS = {
  'round-of-16': 'Oitavas de final',
  quarterfinals: 'Quartas de final',
  semifinals: 'Semifinais',
  final: 'Final'
};

export function worldCupScreen(ctx, params = {}) {
  const mode = params.mode || '2027';
  const returnTo = params.returnTo || 'modes';
  const profile = ctx.state.profile;
  const campaign = profile.worldCupCampaign;
  if (params.newCampaign || !isCampaignValid(campaign) || campaign.mode !== mode) {
    return teamSelectionScreen(ctx, { mode, returnTo, previousCampaign: campaign });
  }
  return campaignScreen(ctx, { campaign, mode, returnTo });
}

function header(ctx, returnTo, subtitle) {
  const returnLabel = returnTo === 'menu' ? 'Voltar ao menu' : 'Voltar aos modos';
  return el('header', { class: 'topbar' },
    el('button', {
      class: 'topbar__back',
      type: 'button',
      'aria-label': returnLabel,
      onClick() { ctx.go(returnTo); },
      html: '<svg viewBox="0 0 24 24"><path d="M15 4L7 12l8 8" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>'
    }),
    el('span', { class: 'topbar__mark', html: xfcWordmark() }),
    el('span', { class: 'topbar__title', text: 'Copa do Mundo' }),
    el('span', { class: 'topbar__sep', text: '|' }),
    el('span', { class: 'topbar__subtitle', text: subtitle })
  );
}

function teamFlag(team, className = '') {
  return el('span', { class: `worldcup__team-flag ${className}`.trim() }, flagSvg(team.flagCode));
}

function teamSelectionScreen(ctx, { mode, returnTo, previousCampaign }) {
  const priorTeamId = getNationalTeam(previousCampaign?.userTeamId)?.id;
  let selectedTeamId = priorTeamId || 'brazil';
  const teamButtons = NATIONAL_TEAMS.map(team => el('button', {
    class: `worldcup__select-team${team.id === selectedTeamId ? ' is-selected' : ''}`,
    type: 'button',
    dataset: { teamId: team.id },
    'aria-pressed': team.id === selectedTeamId ? 'true' : 'false',
    onClick() { selectTeam(team.id); }
  },
    teamFlag(team),
    el('span', { class: 'worldcup__select-name', text: team.name }),
    el('span', { class: 'worldcup__select-stars', text: '★'.repeat(team.stars) })
  ));
  const selectionGrid = el('div', { class: 'worldcup__select-grid' }, ...teamButtons);
  const selectedPreview = el('div', { class: 'worldcup__selected-team' });
  const startButton = el('button', {
    class: 'worldcup__start-campaign',
    type: 'button',
    onClick() {
      const profile = ctx.state.profile;
      const campaign = createWorldCupCampaign({
        mode,
        teamId: selectedTeamId,
        previousGroups: previousCampaign?.groups || null
      });
      profile.worldCupCampaign = campaign;
      saveProfile(ctx.state);
      ctx.go('worldcup', { mode, returnTo });
    }
  }, 'SORTEAR GRUPOS E COMEÇAR  →');

  function selectTeam(teamId) {
    if (!getNationalTeam(teamId)) return;
    selectedTeamId = teamId;
    for (const button of teamButtons) {
      const selected = button.dataset.teamId === selectedTeamId;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    }
    const team = getNationalTeam(selectedTeamId);
    selectedPreview.replaceChildren(
      teamFlag(team, 'worldcup__selected-flag'),
      el('div', { class: 'worldcup__selected-copy' },
        el('span', { class: 'worldcup__eyebrow', text: 'SUA SELEÇÃO' }),
        el('b', { class: 'worldcup__selected-name', text: team.name }),
        el('span', { class: 'worldcup__selected-stars', text: '★'.repeat(team.stars) })
      )
    );
  }

  selectTeam(selectedTeamId);
  const returnLabel = returnTo === 'menu' ? 'Voltar ao menu' : 'Voltar aos modos';
  const node = el('div', { class: 'screen screen--worldcup worldcup--select' },
    header(ctx, returnTo, 'Escolha da seleção'),
    el('section', { class: 'worldcup__selection-hero' },
      el('span', { class: 'worldcup__eyebrow', text: `XFC WORLD CUP™ ${mode === 'live' ? '2026' : '2027'} · 32 SELEÇÕES` }),
      el('h1', { class: 'worldcup__selection-title', text: 'Quem você vai representar?' }),
      el('p', { class: 'worldcup__selection-copy', text: 'Escolha uma seleção. O jogo fará um sorteio novo e aleatório para definir o grupo dela.' })
    ),
    el('div', { class: 'worldcup__selection-layout' },
      selectionGrid,
      el('aside', { class: 'worldcup__selection-aside' },
        selectedPreview,
        el('p', { class: 'worldcup__draw-note', text: '32 seleções · 8 grupos · 4 equipes por grupo. Os dois primeiros avançam.' }),
        startButton
      )
    ),
    el('div', { class: 'worldcup__hint', text: `ESC · ${returnLabel.toUpperCase()}` })
  );

  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go(returnTo);
        return true;
      }
      if (event.key === 'Enter') {
        startButton.click();
        return true;
      }
      if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(event.key)) {
        const currentIndex = NATIONAL_TEAMS.findIndex(team => team.id === selectedTeamId);
        const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
        selectTeam(NATIONAL_TEAMS[(currentIndex + forward + NATIONAL_TEAMS.length) % NATIONAL_TEAMS.length].id);
        return true;
      }
      return false;
    }
  };
}

function campaignScreen(ctx, { campaign, mode, returnTo }) {
  const profile = ctx.state.profile;
  const userTeam = getNationalTeam(campaign.userTeamId);
  const userGroup = campaign.userGroup || findGroup(campaign.userTeamId, campaign.groups);
  const nextMatch = nextCampaignMatch(campaign);
  let selectedGroup = userGroup;

  function teamCard(team, rank) {
    return el('div', {
      class: `worldcup__team${team.id === campaign.userTeamId ? ' is-user-team' : ''}`
    },
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
      class: `worldcup__standings-row${entry.id === campaign.userTeamId ? ' is-user-team' : ''}`,
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

  function openCampaignMatch(match) {
    ctx.go('play', {
      home: match.home,
      away: match.away,
      homeKit: 0,
      awayKit: 0,
      minutes: 6,
      difficulty: 'normal',
      stadium: 2,
      userSide: match.home === campaign.userTeamId ? 'home' : 'away',
      worldCupMatchId: match.id,
      worldCupMode: campaign.mode,
      worldCupReturnTo: returnTo
    });
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

  const groupTabs = el('nav', { class: 'worldcup__group-tabs', 'aria-label': 'Grupos da Copa' },
    ...GROUP_NAMES.map(group => el('button', {
      class: `worldcup__group-tab${group === selectedGroup ? ' is-active' : ''}${group === userGroup ? ' is-user-group' : ''}`,
      type: 'button',
      dataset: { group },
      'aria-pressed': group === selectedGroup ? 'true' : 'false',
      onClick() { selectGroup(group); }
    }, `GRUPO ${group}`))
  );
  const groupPanel = el('div', { class: 'worldcup__group-panel' });

  function selectGroup(group) {
    if (!campaign.groups[group]) return;
    selectedGroup = group;
    for (const button of groupTabs.children) {
      const active = button.dataset.group === selectedGroup;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    }
    paintGroup();
  }

  function paintGroup() {
    const groupTeams = campaign.groups[selectedGroup].map(getNationalTeam);
    const standings = campaignStandings(campaign, selectedGroup);
    const groupMatches = campaign.groupMatches
      .filter(match => match.group === selectedGroup)
      .sort((first, second) => first.round - second.round || first.id.localeCompare(second.id));
    const groupSection = el('section', { class: 'worldcup__group' },
      el('div', { class: 'worldcup__section-heading' },
        el('h2', { class: 'worldcup__section-title', text: GROUP_LABELS[selectedGroup] }),
        el('span', { class: 'worldcup__section-note', text: selectedGroup === userGroup ? 'Grupo da sua seleção · sorteio aleatório' : 'Grupo sorteado' })
      ),
      el('div', { class: 'worldcup__group-teams' },
        ...groupTeams.map((team, index) => teamCard(team, index + 1))
      )
    );
    const standingsSection = el('section', { class: 'worldcup__standings' },
      el('div', { class: 'worldcup__section-heading' },
        el('h2', { class: 'worldcup__section-title', text: `Classificação — ${GROUP_LABELS[selectedGroup]}` }),
        el('span', { class: 'worldcup__section-note', text: 'Os dois primeiros avançam' })
      ),
      el('div', { class: 'worldcup__standings-header' },
        el('span', { text: '#' }), el('span', { 'aria-hidden': 'true' }), el('span', { text: 'Seleção' }),
        el('span', { text: 'J' }), el('span', { text: 'V' }), el('span', { text: 'E' }), el('span', { text: 'D' }),
        el('span', { text: 'GF' }), el('span', { text: 'GC' }), el('span', { text: 'SG' }), el('span', { text: 'Pts' })
      ),
      ...standings.map((entry, index) => standingsRow(entry, index + 1))
    );
    const fixturesSection = el('section', { class: 'worldcup__fixtures' },
      el('div', { class: 'worldcup__section-heading' },
        el('h2', { class: 'worldcup__section-title', text: 'Jogos da fase de grupos' }),
        el('span', { class: 'worldcup__section-note', text: 'Todos os resultados contam para a tabela' })
      ),
      ...groupMatches.map(match => matchRow(match, { allowPlay: true }))
    );
    groupPanel.replaceChildren(groupSection, standingsSection, fixturesSection);
  }

  paintGroup();

  const phaseCopy = {
    group: `Jogue os três jogos de ${userTeam.name}. Os resultados das outras partidas são simulados e atualizam a classificação do grupo.`,
    'round-of-16': `${userTeam.name} avançou. Vença as oitavas para chegar às quartas de final.`,
    quarterfinals: `${userTeam.name} venceu as oitavas. Agora disputa uma vaga na semifinal.`,
    semifinals: `${userTeam.name} chegou às semifinais. Mais uma vitória leva à decisão.`,
    final: `É a final. Uma vitória pode consagrar ${userTeam.name} campeã do mundo.`,
    champion: `${userTeam.name} é campeã do mundo! A campanha terminou com a taça.`,
    runnerup: `${userTeam.name} chegou à decisão e terminou como vice-campeã.`,
    eliminated: campaign.eliminatedIn === 'group'
      ? `${userTeam.name} não terminou entre as duas primeiras do grupo. A campanha termina aqui.`
      : `${userTeam.name} foi eliminada em ${STAGE_LABELS[campaign.eliminatedIn] || 'uma fase eliminatória'}. A campanha terminou.`
  };
  const phaseName = STAGE_LABELS[campaign.stage]
    || (campaign.stage === 'champion' ? 'Campeã' : campaign.stage === 'runnerup' ? 'Vice-campeã' : campaign.stage === 'eliminated' ? 'Eliminada' : campaign.stage);
  const playedGroupMatches = campaign.groupMatches.filter(match => match.playable && match.played).length;
  const progressLabel = campaign.stage === 'group'
    ? `${playedGroupMatches}/3 jogos · ${GROUP_LABELS[userGroup]}`
    : STAGE_LABELS[campaign.stage] || (campaign.stage === 'eliminated' ? `Eliminada · ${STAGE_LABELS[campaign.eliminatedIn] || 'fase de grupos'}` : 'Campanha encerrada');
  const hero = el('section', { class: 'worldcup__campaign-hero' },
    el('div', { class: 'worldcup__campaign-copy' },
      el('span', { class: 'worldcup__eyebrow', text: `XFC WORLD CUP™ ${campaign.year} · CAMPANHA` }),
      el('h1', { class: 'worldcup__campaign-title', text: `${userTeam.name} · ${GROUP_LABELS[userGroup]}` }),
      el('p', { class: 'worldcup__campaign-progress', text: progressLabel })
    ),
    el('div', { class: 'worldcup__campaign-badge', 'aria-label': userTeam.name },
      flagSvg(userTeam.flagCode),
      el('b', { text: userTeam.name.toUpperCase() }),
      el('span', { text: '★'.repeat(userTeam.stars) })
    )
  );
  const lead = el('p', { class: 'worldcup__lead', text: phaseCopy[campaign.stage] || phaseCopy.group });

  const knockoutMatches = campaign.knockoutMatches || [];
  const knockoutRounds = ['round-of-16', 'quarterfinals', 'semifinals', 'final']
    .map(stage => ({ stage, matches: knockoutMatches.filter(match => match.stage === stage) }))
    .filter(round => round.matches.length);
  const isGroupPhase = campaign.stage === 'group';
  const wasGroupElimination = campaign.stage === 'eliminated' && campaign.eliminatedIn === 'group';
  const knockoutNote = isGroupPhase
    ? 'Desbloqueado após a fase de grupos'
    : wasGroupElimination ? 'Campanha encerrada na fase de grupos' : 'Oitavas · quartas · semifinais · final';
  const knockoutSection = el('section', {
    class: `worldcup__knockout${isGroupPhase || wasGroupElimination ? ' is-locked' : ''}`
  },
    el('div', { class: 'worldcup__section-heading' },
      el('h2', { class: 'worldcup__section-title', text: 'Mata-mata' }),
      el('span', { class: 'worldcup__section-note', text: knockoutNote })
    ),
    isGroupPhase
      ? el('p', { class: 'worldcup__locked-copy', text: 'Conclua os três jogos da sua seleção para liberar as oitavas de final.' })
      : wasGroupElimination
        ? el('p', { class: 'worldcup__locked-copy', text: 'A campanha não avança porque a seleção ficou fora das duas primeiras posições.' })
        : knockoutRounds.map(round => el('div', { class: 'worldcup__knockout-round' },
          el('h3', { class: 'worldcup__round-title', text: STAGE_LABELS[round.stage] }),
          ...round.matches.map(match => matchRow(match, { allowPlay: true }))
        ))
  );

  const finalCopy = campaign.stage === 'champion'
    ? [`${userTeam.name} campeã mundial!`, 'A seleção conquistou a Copa. Comece uma nova campanha e faça outro sorteio.']
    : campaign.stage === 'runnerup'
      ? [`${userTeam.name} vice-campeã`, 'A final foi disputada em campo. Escolha outra seleção ou faça um novo sorteio.']
      : campaign.stage === 'eliminated'
        ? ['Fim da campanha', phaseCopy.eliminated]
        : null;
  const outcome = finalCopy && el('section', { class: 'worldcup__trophy' },
    el('div', { class: 'worldcup__trophy-icon', html: trophySvg() }),
    el('h2', { class: 'worldcup__trophy-title', text: finalCopy[0] }),
    el('p', { class: 'worldcup__trophy-sub', text: finalCopy[1] })
  );
  const newCampaign = el('button', {
    class: 'worldcup__new-campaign',
    type: 'button',
    onClick() { ctx.go('worldcup', { mode, returnTo, newCampaign: true }); }
  }, 'NOVA CAMPANHA  ↻');

  const returnLabel = returnTo === 'menu' ? 'Voltar ao menu' : 'Voltar aos modos';
  const node = el('div', { class: 'screen screen--worldcup' },
    header(ctx, returnTo, `${campaign.year} · ${phaseName}`),
    lead,
    hero,
    el('div', { class: 'worldcup__content' },
      el('section', { class: 'worldcup__all-groups' },
        el('div', { class: 'worldcup__section-heading' },
          el('h2', { class: 'worldcup__section-title', text: 'Fase de grupos' }),
          el('span', { class: 'worldcup__section-note', text: '32 seleções · 8 grupos · avance pelas abas' })
        ),
        groupTabs,
        groupPanel
      ),
      knockoutSection,
      outcome,
      newCampaign
    ),
    el('div', { class: 'worldcup__hint', text: `ESC · ${returnLabel.toUpperCase()}` })
  );

  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go(returnTo);
        return true;
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const currentIndex = GROUP_NAMES.indexOf(selectedGroup);
        const nextIndex = (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + GROUP_NAMES.length) % GROUP_NAMES.length;
        selectGroup(GROUP_NAMES[nextIndex]);
        return true;
      }
      return false;
    }
  };
}

function isCampaignValid(campaign) {
  if (!campaign || !getNationalTeam(campaign.userTeamId) || !Array.isArray(campaign.groupMatches)) return false;
  if (!GROUP_NAMES.every(group => Array.isArray(campaign.groups?.[group]) && campaign.groups[group].length === 4)) return false;
  const memberIds = GROUP_NAMES.flatMap(group => campaign.groups[group]);
  return memberIds.length === NATIONAL_TEAMS.length
    && new Set(memberIds).size === NATIONAL_TEAMS.length
    && memberIds.every(id => Boolean(getNationalTeam(id)))
    && findGroup(campaign.userTeamId, campaign.groups) !== null
    && campaign.groupMatches.length === 48;
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
    <rect x="20" y="39" width="24" height="6" rx="2" fill="#dcae35"/>
    <path d="M23 45h18v10H23z" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
    <rect x="15" y="55" width="34" height="6" rx="3" fill="#c89020"/>
    <rect x="11" y="61" width="42" height="7" rx="3" fill="#ffd84a" stroke="#c89020" stroke-width="1.5"/>
  </svg>`;
}

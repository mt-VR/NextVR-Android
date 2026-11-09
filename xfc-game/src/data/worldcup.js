// Seleções nacionais para a Copa do Mundo XFC 27.
// Cada seleção tem estrutura similar a TEAMS: {id, name, flagCode, crest, stars, ratings, players}.
// Usado pela tela worldcup para sorteio de grupos, fase de grupos, mata-mata e classificação.

export const NATIONAL_TEAMS = [
  {
    id: 'brazil',
    name: 'Brasil',
    flagCode: 'br',
    crest: '🇧🇷',
    stars: 5,
    ratings: { ATT: 89, MID: 88, DEF: 85 },
    players: [
      { name: 'Neymar Jr.', number: 10, position: 'LW', rating: 91 },
      { name: 'Vinícius Jr.', number: 7, position: 'LW', rating: 88 },
      { name: 'Raphinha', number: 11, position: 'RW', rating: 87 },
      { name: 'Rodrygo', number: 9, position: 'ST', rating: 85 },
      { name: 'Casemiro', number: 5, position: 'CM', rating: 86 },
      { name: 'Bruno Guimarães', number: 8, position: 'CM', rating: 87 },
      { name: 'Éder Militão', number: 3, position: 'CB', rating: 83 },
      { name: 'Marquinhos', number: 4, position: 'CB', rating: 85 },
      { name: 'Alisson', number: 1, position: 'GK', rating: 88 },
      { name: 'Danilo', number: 2, position: 'RB', rating: 82 },
      { name: 'Alex Sandro', number: 12, position: 'LB', rating: 81 },
      { name: 'Richarlison', number: 9, position: 'ST', rating: 84 }
    ]
  },
  {
    id: 'argentina',
    name: 'Argentina',
    flagCode: 'ar',
    crest: '🇦🇷',
    stars: 5,
    ratings: { ATT: 88, MID: 89, DEF: 84 },
    players: [
      { name: 'Messi', number: 10, position: 'RW', rating: 93 },
      { name: 'Julián Álvarez', number: 9, position: 'ST', rating: 87 },
      { name: 'Ángel Di María', number: 11, position: 'RW', rating: 86 },
      { name: 'Enzo Fernández', number: 24, position: 'CM', rating: 85 },
      { name: 'Mac Allister', number: 7, position: 'CM', rating: 85 },
      { name: 'De Paul', number: 5, position: 'CM', rating: 84 },
      { name: 'Martínez', number: 1, position: 'GK', rating: 89 },
      { name: 'Otamendi', number: 2, position: 'CB', rating: 84 },
      { name: 'Romero', number: 13, position: 'CB', rating: 83 },
      { name: 'Molina', number: 26, position: 'RB', rating: 82 },
      { name: 'Acuña', number: 8, position: 'LB', rating: 82 },
      { name: 'Lautaro Martínez', number: 22, position: 'ST', rating: 88 }
    ]
  },
  {
    id: 'france',
    name: 'França',
    flagCode: 'fr',
    crest: '🇫🇷',
    stars: 5,
    ratings: { ATT: 89, MID: 86, DEF: 86 },
    players: [
      { name: 'Mbappé', number: 10, position: 'LW', rating: 92 },
      { name: 'Griezmann', number: 7, position: 'ST', rating: 88 },
      { name: 'Giroud', number: 9, position: 'ST', rating: 86 },
      { name: 'Camavinga', number: 6, position: 'CM', rating: 85 },
      { name: 'Tchouaméni', number: 14, position: 'CM', rating: 85 },
      { name: 'Rabiot', number: 14, position: 'CM', rating: 83 },
      { name: 'Hernández', number: 22, position: 'LB', rating: 82 },
      { name: 'Konaté', number: 4, position: 'CB', rating: 84 },
      { name: 'Saliba', number: 2, position: 'CB', rating: 85 },
      { name: 'Maignan', number: 16, position: 'GK', rating: 87 },
      { name: 'Disasi', number: 5, position: 'RB', rating: 82 },
      { name: 'Kolo Muani', number: 12, position: 'ST', rating: 84 }
    ]
  },
  {
    id: 'england',
    name: 'Inglaterra',
    flagCode: 'en',
    crest: '🏴',
    stars: 4,
    ratings: { ATT: 86, MID: 85, DEF: 84 },
    players: [
      { name: 'Kane', number: 9, position: 'ST', rating: 89 },
      { name: 'Saka', number: 7, position: 'RW', rating: 86 },
      { name: 'Foden', number: 47, position: 'LW', rating: 86 },
      { name: 'Bellingham', number: 10, position: 'CM', rating: 87 },
      { name: 'Rice', number: 41, position: 'CM', rating: 86 },
      { name: 'Mount', number: 19, position: 'CM', rating: 83 },
      { name: 'Walker', number: 2, position: 'RB', rating: 83 },
      { name: 'Stones', number: 5, position: 'CB', rating: 85 },
      { name: 'Maguire', number: 6, position: 'CB', rating: 82 },
      { name: 'Pickford', number: 1, position: 'GK', rating: 86 },
      { name: 'Trippier', number: 12, position: 'LB', rating: 84 },
      { name: 'Watkins', number: 11, position: 'ST', rating: 85 }
    ]
  },
  {
    id: 'spain',
    name: 'Espanha',
    flagCode: 'es',
    crest: '🇪🇸',
    stars: 4,
    ratings: { ATT: 85, MID: 88, DEF: 84 },
    players: [
      { name: 'Yamal', number: 19, position: 'RW', rating: 88 },
      { name: 'Nico Williams', number: 10, position: 'LW', rating: 86 },
      { name: 'Morata', number: 7, position: 'ST', rating: 85 },
      { name: 'Pedri', number: 8, position: 'CM', rating: 87 },
      { name: 'Gavi', number: 6, position: 'CM', rating: 86 },
      { name: 'Rodri', number: 16, position: 'CM', rating: 88 },
      { name: 'Carvajal', number: 2, position: 'RB', rating: 84 },
      { name: 'Laporte', number: 3, position: 'CB', rating: 84 },
      { name: 'Cucurella', number: 12, position: 'LB', rating: 83 },
      { name: 'Unai Simón', number: 1, position: 'GK', rating: 86 },
      { name: 'Oyarzabal', number: 11, position: 'ST', rating: 84 },
      { name: 'Merino', number: 9, position: 'ST', rating: 84 }
    ]
  },
  {
    id: 'portugal',
    name: 'Portugal',
    flagCode: 'pt',
    crest: '🇵🇹',
    stars: 4,
    ratings: { ATT: 87, MID: 85, DEF: 83 },
    players: [
      { name: 'Ronaldo', number: 7, position: 'ST', rating: 88 },
      { name: 'Bruno Fernandes', number: 8, position: 'CM', rating: 86 },
      { name: 'Bernardo Silva', number: 10, position: 'CM', rating: 86 },
      { name: 'Félix', number: 11, position: 'LW', rating: 85 },
      { name: 'Leão', number: 17, position: 'LW', rating: 85 },
      { name: 'Palhinha', number: 14, position: 'CM', rating: 84 },
      { name: 'Cancelo', number: 2, position: 'RB', rating: 83 },
      { name: 'Rúben Dias', number: 4, position: 'CB', rating: 86 },
      { name: 'Pepe', number: 3, position: 'CB', rating: 83 },
      { name: 'Diogo Jota', number: 21, position: 'ST', rating: 84 },
      { name: 'Costa', number: 1, position: 'GK', rating: 84 },
      { name: 'Nélson Semedo', number: 12, position: 'RB', rating: 82 }
    ]
  },
  {
    id: 'germany',
    name: 'Alemanha',
    flagCode: 'de',
    crest: '🇩🇪',
    stars: 4,
    ratings: { ATT: 85, MID: 86, DEF: 85 },
    players: [
      { name: 'Musiala', number: 42, position: 'LW', rating: 88 },
      { name: 'Wirtz', number: 10, position: 'AM', rating: 87 },
      { name: 'Havertz', number: 9, position: 'ST', rating: 86 },
      { name: 'Kimmich', number: 6, position: 'CM', rating: 85 },
      { name: 'Goretzka', number: 8, position: 'CM', rating: 85 },
      { name: 'Klostermann', number: 2, position: 'CB', rating: 84 },
      { name: 'Rüdiger', number: 5, position: 'CB', rating: 85 },
      { name: 'Raum', number: 3, position: 'LB', rating: 83 },
      { name: 'Neuer', number: 1, position: 'GK', rating: 85 },
      { name: 'Sabitzer', number: 7, position: 'RW', rating: 82 },
      { name: 'Führich', number: 11, position: 'RW', rating: 83 },
      { name: 'Frimpong', number: 12, position: 'LB', rating: 83 }
    ]
  },
  {
    id: 'italy',
    name: 'Itália',
    flagCode: 'it',
    crest: '🇮🇹',
    stars: 4,
    ratings: { ATT: 84, MID: 86, DEF: 85 },
    players: [
      { name: 'Retegui', number: 9, position: 'ST', rating: 85 },
      { name: 'Chiesa', number: 10, position: 'RW', rating: 84 },
      { name: 'Pellegrini', number: 10, position: 'CM', rating: 84 },
      { name: 'Barella', number: 4, position: 'CM', rating: 86 },
      { name: 'Jorginho', number: 5, position: 'CM', rating: 85 },
      { name: 'Donnarumma', number: 1, position: 'GK', rating: 88 },
      { name: 'Bastoni', number: 3, position: 'CB', rating: 85 },
      { name: 'Acerbi', number: 15, position: 'CB', rating: 84 },
      { name: 'Dimarco', number: 2, position: 'LB', rating: 84 },
      { name: 'Calabria', number: 22, position: 'RB', rating: 83 },
      { name: 'Frattesi', number: 16, position: 'CM', rating: 83 },
      { name: 'Berardi', number: 11, position: 'LW', rating: 83 }
    ]
  }
];

/** Brasi é sempre a seleção do usuário. */
export const USER_NATIONAL_TEAM_ID = 'brazil';

/**
 * Sorteio de grupos de 8 seleções em 2 grupos de 4.
 * Semente estática para o sorteio ser reproduzível.
 */
export function drawGroups(teams, random = Math.random) {
  const remaining = [...teams];
  for (let index = remaining.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [remaining[index], remaining[swapIndex]] = [remaining[swapIndex], remaining[index]];
  }
  const groups = {
    A: remaining.slice(0, 4).map(t => t.id),
    B: remaining.slice(4, 8).map(t => t.id)
  };
  return groups;
}

/**
 * Retorna o grupo de uma seleção.
 */
export function findGroup(teamId, groups) {
  for (const [groupName, ids] of Object.entries(groups)) {
    if (ids.includes(teamId)) return groupName;
  }
  return null;
}

/**
 * Calcula a tabela de um grupo (pontos, saldo, gols).
 * Simula os resultados de cada partida do grupo.
 */
export function computeGroupStandings(teams, groups, seed = 12345) {
  const rng = mulberry32(seed);
  const standings = {};
  for (const groupName of Object.keys(groups)) {
    const groupTeamIds = groups[groupName];
    for (const id of groupTeamIds) {
      standings[id] = { id, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 };
    }
    // Simula partidas round-robin
    for (let i = 0; i < groupTeamIds.length; i++) {
      for (let j = i + 1; j < groupTeamIds.length; j++) {
        const homeId = groupTeamIds[i];
        const awayId = groupTeamIds[j];
        const homeRating = teams.find(t => t.id === homeId).ratings.ATT;
        const awayRating = teams.find(t => t.id === awayId).ratings.ATT;
        const diff = (homeRating - awayRating) / 10 + (rng() - 0.5) * 4;
        const homeGoals = Math.max(0, Math.round(diff + 1.2 + rng() * 2));
        const awayGoals = Math.max(0, Math.round(-diff + 1.0 + rng() * 2));

        standings[homeId].played++; standings[homeId].gf += homeGoals; standings[homeId].ga += awayGoals;
        standings[awayId].played++; standings[awayId].gf += awayGoals; standings[awayId].ga += homeGoals;

        if (homeGoals > awayGoals) {
          standings[homeId].won++; standings[homeId].points += 3;
          standings[awayId].lost++;
        } else if (homeGoals < awayGoals) {
          standings[awayId].won++; standings[awayId].points += 3;
          standings[homeId].lost++;
        } else {
          standings[homeId].drawn++; standings[homeId].points++;
          standings[awayId].drawn++; standings[awayId].points++;
        }
      }
    }
  }
  // Ordenar por pontos, saldo, gols
  return Object.values(standings).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    const diffA = a.gf - a.ga;
    const diffB = b.gf - b.ga;
    if (diffB !== diffA) return diffB - diffA;
    return b.gf - a.gf;
  });
}

/**
 * Simula os jogos da fase de mata-mata (quartas, semis, final).
 * Retorna { bracket, results } onde bracket é a estrutura de eliminatórias.
 */
export function simulateKnockout(teams, groups, standings, seed = 99991) {
  const rng = mulberry32(seed);

  // Top 2 de cada grupo
  const groupA = standings.filter(t => groups.A.includes(t.id));
  const groupB = standings.filter(t => groups.B.includes(t.id));
  const topA = groupA.slice(0, 2).map(t => t.id);
  const topB = groupB.slice(0, 2).map(t => t.id);

  // Quartas: A1 vs B2, B1 vs A2
  const quartas = [
    { home: topA[0], away: topB[1], homeGoals: 0, awayGoals: 0 },
    { home: topB[0], away: topA[1], homeGoals: 0, awayGoals: 0 }
  ];

  const quartasResults = simulateMatches(quartas, teams, rng);
  const semis = [
    { home: quartasResults[0].winner, away: quartasResults[1].winner, homeGoals: 0, awayGoals: 0 }
  ];
  const semisResults = simulateMatches(semis, teams, rng)[0];

  // Final: vencedor da semi vs o outro semifinalista
  const semisOther = semisResults.winner === semisResults.home ? semisResults.away : semisResults.home;
  const finalMatch = { home: semisResults.winner, away: semisOther, homeGoals: 0, awayGoals: 0 };
  const finalResult = simulateMatches([finalMatch], teams, rng)[0];

  return {
    quartas,
    quartasResults,
    semis: semisResults,
    final: finalResult
  };
}

function simulateMatches(matches, teams, rng) {
  return matches.map(m => {
    const homeTeam = teams.find(t => t.id === m.home);
    const awayTeam = teams.find(t => t.id === m.away);
    const homeRating = homeTeam ? homeTeam.ratings.ATT : 80;
    const awayRating = awayTeam ? awayTeam.ratings.ATT : 80;
    const diff = (homeRating - awayRating) / 10 + (rng() - 0.5) * 3;
    const homeGoals = Math.max(0, Math.round(diff + 1.0 + rng() * 2));
    const awayGoals = Math.max(0, Math.round(-diff + 1.0 + rng() * 2));
    m.homeGoals = homeGoals;
    m.awayGoals = awayGoals;
    return {
      ...m,
      winner: homeGoals > awayGoals ? m.home : (awayGoals > homeGoals ? m.away : m.home)
    };
  });
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function() {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Retorna os dados de uma seleção pelo ID.
 */
export function getNationalTeam(teamId) {
  return NATIONAL_TEAMS.find(t => t.id === teamId);
}

/**
 * Conversor de bandeira: usa flagSvg do ui/flags.js.
 */
export function getTeamFlag(teamId) {
  const team = getNationalTeam(teamId);
  return team ? team.flagCode : 'br';
}


/** Cria os seis jogos de grupo em três rodadas (todos contra todos). */
function roundRobinFixtures(ids, group) {
  const pairs = [
    [[ids[0], ids[1]], [ids[2], ids[3]]],
    [[ids[0], ids[2]], [ids[3], ids[1]]],
    [[ids[0], ids[3]], [ids[1], ids[2]]]
  ];
  return pairs.flatMap((games, index) => games.map(([home, away], gameIndex) => ({
    id: `${group}-${index + 1}-${gameIndex + 1}-${home}-${away}`,
    stage: 'group',
    group,
    round: index + 1,
    home,
    away,
    homeGoals: null,
    awayGoals: null,
    played: false,
    playable: home === USER_NATIONAL_TEAM_ID || away === USER_NATIONAL_TEAM_ID,
    winner: null
  })));
}

function nationalRating(teamId) {
  return getNationalTeam(teamId)?.ratings?.ATT || 80;
}

function simulateFixtureScore(home, away, random) {
  const difference = (nationalRating(home) - nationalRating(away)) / 12 + (random() - 0.5) * 3.2;
  return {
    homeGoals: Math.max(0, Math.round(1.15 + difference + random() * 1.7)),
    awayGoals: Math.max(0, Math.round(1.05 - difference + random() * 1.7))
  };
}

function tiedWinner(home, away, random) {
  const homeOdds = nationalRating(home) / Math.max(1, nationalRating(home) + nationalRating(away));
  return random() < homeOdds ? home : away;
}

function isSameDraw(first, second) {
  if (!first || !second) return false;
  const sortGroup = ids => [...ids].sort().join(',');
  const firstA = sortGroup(first.A || []);
  const firstB = sortGroup(first.B || []);
  const secondA = sortGroup(second.A || []);
  const secondB = sortGroup(second.B || []);
  return (firstA === secondA && firstB === secondB) || (firstA === secondB && firstB === secondA);
}

/**
 * Inicia uma campanha persistível: o Brasil joga seus três jogos de grupo,
 * enquanto os outros confrontos são simulados para compor a classificação.
 */
export function createWorldCupCampaign({ mode = '2027', seed = Math.floor(Math.random() * 0x7fffffff), previousGroups = null } = {}) {
  let groups;
  let campaignSeed = seed >>> 0;
  for (let attempt = 0; attempt < 12; attempt += 1) {
    groups = drawGroups(NATIONAL_TEAMS, mulberry32(campaignSeed));
    if (!isSameDraw(groups, previousGroups)) break;
    campaignSeed = (campaignSeed + 0x9e3779b9) >>> 0;
  }

  const random = mulberry32((campaignSeed ^ 0x85ebca6b) >>> 0);
  const groupMatches = [
    ...roundRobinFixtures(groups.A, 'A'),
    ...roundRobinFixtures(groups.B, 'B')
  ];
  for (const match of groupMatches) {
    if (match.playable) continue;
    Object.assign(match, simulateFixtureScore(match.home, match.away, random), { played: true });
    if (match.homeGoals !== match.awayGoals) match.winner = match.homeGoals > match.awayGoals ? match.home : match.away;
  }

  return {
    id: `worldcup-${campaignSeed.toString(36)}-${Date.now().toString(36)}`,
    seed: campaignSeed,
    mode,
    year: mode === 'live' ? '2026' : '2027',
    userTeamId: USER_NATIONAL_TEAM_ID,
    groups,
    groupMatches,
    knockoutMatches: [],
    stage: 'group',
    createdAt: Date.now(),
    completed: false,
    lastResult: null
  };
}

/** Classificação real, recalculada só com partidas já disputadas. */
export function campaignStandings(campaign, groupName) {
  const teamIds = campaign?.groups?.[groupName] || [];
  const table = new Map(teamIds.map(id => [id, {
    id, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0
  }]));
  for (const match of campaign?.groupMatches || []) {
    if (match.group !== groupName || !match.played) continue;
    const home = table.get(match.home);
    const away = table.get(match.away);
    if (!home || !away) continue;
    home.played += 1;
    away.played += 1;
    home.gf += match.homeGoals;
    home.ga += match.awayGoals;
    away.gf += match.awayGoals;
    away.ga += match.homeGoals;
    if (match.homeGoals > match.awayGoals) {
      home.won += 1; home.points += 3; away.lost += 1;
    } else if (match.awayGoals > match.homeGoals) {
      away.won += 1; away.points += 3; home.lost += 1;
    } else {
      home.drawn += 1; away.drawn += 1; home.points += 1; away.points += 1;
    }
  }
  return [...table.values()].sort((a, b) =>
    b.points - a.points || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf || nationalRating(b.id) - nationalRating(a.id)
  );
}

/** Próximo jogo que o usuário precisa disputar nesta campanha. */
export function nextCampaignMatch(campaign) {
  if (!campaign) return null;
  const matches = campaign.stage === 'group' ? campaign.groupMatches : campaign.knockoutMatches;
  return (matches || []).find(match => match.playable && !match.played) || null;
}

function addKnockoutFixture(campaign, home, away, stage, random, index) {
  const playable = home === campaign.userTeamId || away === campaign.userTeamId;
  const match = {
    id: `${stage}-${index}-${home}-${away}`,
    stage,
    group: null,
    round: null,
    home,
    away,
    homeGoals: null,
    awayGoals: null,
    played: false,
    playable,
    winner: null,
    decidedBy: null
  };
  if (!playable) {
    const score = simulateFixtureScore(home, away, random);
    Object.assign(match, score, { played: true });
    match.winner = score.homeGoals === score.awayGoals
      ? tiedWinner(home, away, random)
      : score.homeGoals > score.awayGoals ? home : away;
    if (score.homeGoals === score.awayGoals) match.decidedBy = 'penalties';
  }
  return match;
}

function prepareSemifinals(campaign) {
  const firstA = campaignStandings(campaign, 'A');
  const firstB = campaignStandings(campaign, 'B');
  const brazilRank = firstA.findIndex(team => team.id === campaign.userTeamId) >= 0
    ? firstA.findIndex(team => team.id === campaign.userTeamId)
    : firstB.findIndex(team => team.id === campaign.userTeamId);
  if (brazilRank < 0 || brazilRank > 1) {
    campaign.stage = 'eliminated';
    campaign.completed = true;
    return;
  }
  const random = mulberry32((campaign.seed ^ 0xc2b2ae35) >>> 0);
  campaign.knockoutMatches = [
    addKnockoutFixture(campaign, firstA[0].id, firstB[1].id, 'semifinal', random, 1),
    addKnockoutFixture(campaign, firstB[0].id, firstA[1].id, 'semifinal', random, 2)
  ];
  campaign.stage = 'semifinal';
  resolveSemifinals(campaign);
}

function resolveSemifinals(campaign) {
  const semis = campaign.knockoutMatches.filter(match => match.stage === 'semifinal');
  if (semis.length !== 2 || semis.some(match => !match.played)) return;
  const brazilSemi = semis.find(match => match.home === campaign.userTeamId || match.away === campaign.userTeamId);
  if (!brazilSemi || brazilSemi.winner !== campaign.userTeamId) {
    campaign.stage = 'eliminated';
    campaign.completed = true;
    return;
  }
  const otherSemi = semis.find(match => match !== brazilSemi);
  campaign.knockoutMatches.push({
    id: `final-${campaign.userTeamId}-${otherSemi.winner}`,
    stage: 'final',
    group: null,
    round: null,
    home: campaign.userTeamId,
    away: otherSemi.winner,
    homeGoals: null,
    awayGoals: null,
    played: false,
    playable: true,
    winner: null,
    decidedBy: null
  });
  campaign.stage = 'final';
}

/**
 * Registra o placar de uma partida jogada e avança a campanha pelos grupos,
 * semifinais e final. Empate eliminatório é decidido por disputa de pênaltis.
 */
export function recordCampaignMatchResult(campaign, matchId, homeGoals, awayGoals) {
  if (!campaign || campaign.completed) return campaign;
  const allMatches = [...(campaign.groupMatches || []), ...(campaign.knockoutMatches || [])];
  const match = allMatches.find(item => item.id === matchId);
  if (!match || match.played) return campaign;
  match.homeGoals = Math.max(0, Math.floor(Number(homeGoals) || 0));
  match.awayGoals = Math.max(0, Math.floor(Number(awayGoals) || 0));
  match.played = true;
  if (match.homeGoals !== match.awayGoals) {
    match.winner = match.homeGoals > match.awayGoals ? match.home : match.away;
  } else if (match.stage !== 'group') {
    match.winner = tiedWinner(match.home, match.away, mulberry32((campaign.seed ^ match.id.length ^ match.homeGoals) >>> 0));
    match.decidedBy = 'penalties';
  }
  campaign.lastResult = { matchId, homeGoals: match.homeGoals, awayGoals: match.awayGoals, winner: match.winner, decidedBy: match.decidedBy };

  if (match.stage === 'group') {
    const pending = campaign.groupMatches.some(item => item.playable && !item.played);
    if (!pending) prepareSemifinals(campaign);
  } else if (match.stage === 'semifinal') {
    resolveSemifinals(campaign);
  } else if (match.stage === 'final') {
    campaign.stage = match.winner === campaign.userTeamId ? 'champion' : 'runnerup';
    campaign.completed = true;
  }
  return campaign;
}

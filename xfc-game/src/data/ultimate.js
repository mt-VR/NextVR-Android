// Ultimate Team LOCAL: economia, instâncias de cartas, elencos e progressão.
// Sem rede, dinheiro real ou partidas falsamente apresentadas como multiplayer.
import { TEAMS } from "./teams.js";
import { NATIONAL_TEAMS } from "./worldcup.js";
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const norm = (s) =>
  String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
export const RARITIES = {
  bronze: "Bronze",
  silver: "Prata",
  gold: "Ouro",
  special: "Especial",
  totw: "TOTW",
  icon: "Ídolo XFC",
  hero: "Herói XFC",
};
const nations = new Map();
for (const n of NATIONAL_TEAMS)
  for (const p of n.players)
    nations.set(norm(p.name), { name: n.name, flag: n.flagCode });
const countries = {
  "fc-barcelona": [
    "de",
    "fr",
    "uy",
    "es",
    "es",
    "es",
    "nl",
    "es",
    "es",
    "br",
    "pl",
    "es",
    "es",
    "en",
    "de",
    "es",
    "es",
    "es",
  ],
  "real-madrid": [
    "be",
    "es",
    "de",
    "br",
    "fr",
    "uy",
    "fr",
    "en",
    "br",
    "fr",
    "br",
    "hr",
    "ma",
    "tr",
    "ar",
    "br",
    "at",
    "cr",
  ],
};
const countryNames = Object.fromEntries(
  NATIONAL_TEAMS.map((n) => [n.flagCode, n.name]),
);
Object.assign(countryNames, {
  en: "Inglaterra",
  at: "Áustria",
  ve: "Venezuela",
});
export const UT_CATALOG = [];
for (const team of TEAMS) {
  for (const [i, p] of [...team.players, ...team.substitutes].entries()) {
    const santosFlags = [
      "br",
      "br",
      "br",
      "br",
      "ar",
      "ve",
      "br",
      "br",
      "br",
      "br",
      "ar",
      "br",
      "br",
      "br",
      "br",
      null,
      "br",
      "ve",
    ];
    const flag =
      countries[team.id]?.[i] || (team.id === "santos" ? santosFlags[i] : null);
    const country = flag
      ? { flag, name: countryNames[flag] || flag }
      : nations.get(norm(p.fullName)) || nations.get(norm(p.name)) || null;
    const rarity = p.ovr < 65 ? "bronze" : p.ovr < 80 ? "silver" : "gold";
    UT_CATALOG.push({
      ...p,
      baseId: p.id,
      id: p.id,
      rarity,
      position: p.pos,
      rating: p.ovr,
      teamId: team.id,
      team: team.name,
      crest: team.crest,
      league: team.league,
      country,
      fictional:
        team.squadSource === "generated" ||
        team.id === "ibis-esporte" ||
        team.id === "parana-clube",
      edition: "Elenco local XFC",
      price: Math.max(150, Math.round(((p.ovr - 55) ** 2 * 1.5) / 10) * 10),
    });
  }
}
// Edições conceituais XFC: raridade de jogo, NÃO cartas oficiais/históricas EA.
for (const [i, rarity] of ["special", "totw", "icon", "hero"].entries())
  for (const p of UT_CATALOG.slice(0, 36).filter((_, j) => j % 4 === i)) {
    UT_CATALOG.push({
      ...p,
      id: `${p.baseId}:${rarity}`,
      rarity,
      rating: Math.min(99, p.rating + 3 + i),
      ovr: Math.min(99, p.rating + 3 + i),
      edition: "Edição conceitual XFC",
      price: p.price * (3 + i),
    });
  }
// Bronze inclui atletas fictícios identificados como tal, não rebaixa estrelas reais.
for (let i = 0; i < 18; i++) {
  const base =
    UT_CATALOG.find(
      (c) => c.teamId === "northampton-town" && c.number === i + 1,
    ) || UT_CATALOG.filter((c) => c.teamId === "northampton-town")[i];
  if (base)
    UT_CATALOG.push({
      ...base,
      id: `academy-${i}`,
      baseId: `academy-${i}`,
      name: `Academia ${i + 1}`,
      fullName: `Atleta fictício da Academia XFC ${i + 1}`,
      rating: 60 + (i % 5),
      ovr: 60 + (i % 5),
      rarity: "bronze",
      photo: null,
      fictional: true,
      edition: "Academia fictícia XFC",
      price: 150,
      country: null,
    });
}
const byId = new Map(UT_CATALOG.map((c) => [c.id, c]));
export const getUtCard = (id) => byId.get(id) || null;
export const FORMATIONS = {
  "4-3-3": ["GK", "LB", "CB", "CB", "RB", "CM", "CDM", "CM", "LW", "ST", "RW"],
  "4-4-2": ["GK", "LB", "CB", "CB", "RB", "LM", "CM", "CM", "RM", "ST", "ST"],
  "3-5-2": ["GK", "CB", "CB", "CB", "LM", "CM", "CDM", "CM", "RM", "ST", "ST"],
  "4-2-3-1": [
    "GK",
    "LB",
    "CB",
    "CB",
    "RB",
    "CDM",
    "CDM",
    "CAM",
    "CAM",
    "CAM",
    "ST",
  ],
};
export function formationPoints(name) {
  const roles = FORMATIONS[name] || FORMATIONS["4-3-3"];
  const lines =
    name === "3-5-2"
      ? [1, 3, 5, 2]
      : name === "4-4-2"
        ? [1, 4, 4, 2]
        : name === "4-2-3-1"
          ? [1, 4, 2, 3, 1]
          : [1, 4, 3, 3];
  const points = [];
  let n = 0;
  lines.forEach((count, row) => {
    for (let i = 0; i < count; i++)
      points.push({
        x: ((i + 1) * 100) / (count + 1),
        y: 90 - (row * 72) / (lines.length - 1),
        role: roles[n++],
      });
  });
  return points;
}
export const PACKS = {
  bronze: {
    name: "Pacote Academia",
    cost: 400,
    count: 3,
    odds: [["bronze", 1]],
  },
  gold: {
    name: "Pacote Ouro",
    cost: 1800,
    count: 3,
    odds: [
      ["gold", 0.8],
      ["silver", 0.15],
      ["special", 0.05],
    ],
  },
  premium: {
    name: "Pacote Destaques",
    cost: 4500,
    count: 3,
    odds: [
      ["gold", 0.55],
      ["special", 0.2],
      ["totw", 0.15],
      ["hero", 0.06],
      ["icon", 0.04],
    ],
  },
};
export const UT_MODES = {
  battles: { name: "Squad Battles", limit: 5, difficulty: "normal" },
  rivals: { name: "Division Rivals", limit: 20, difficulty: "hard" },
  champions: { name: "FUT Champions", limit: 10, difficulty: "hard" },
  event: { name: "Festival do Futebol", limit: 5, difficulty: "normal" },
};
const DAY = 86400000;
function periods(u, now) {
  const time = Math.max(u.lastTime || 0, Number(now) || Date.now());
  u.lastTime = time;
  const day = Math.floor(time / DAY),
    week = Math.floor((day + 3) / 7),
    season = Math.floor(day / 28);
  if (u.daily?.id !== day)
    u.daily = { id: day, played: 0, goals: 0, claimed: [] };
  if (u.weekly?.id !== week) {
    u.weekly = { id: week, played: 0, wins: 0, claimed: [] };
    u.modes = Object.fromEntries(
      Object.keys(UT_MODES).map((k) => [
        k,
        { played: 0, wins: 0, points: 0, claimed: false },
      ]),
    );
  }
  if (u.season?.id !== season) u.season = { id: season, xp: 0, claimed: [] };
}
export function ensureUltimate(profile, now = Date.now()) {
  if (!profile.ut || profile.ut.version !== 1) {
    profile.ut = {
      version: 1,
      nextId: 1,
      inventory: [],
      squads: [],
      active: "squad-1",
      history: [],
      completed: [],
      pending: null,
      reveal: null,
      evolution: null,
      lifetime: { played: 0, wins: 0, goals: 0 },
      dme: [],
      clubName: "Meu Clube XFC",
    };
    const u = profile.ut;
    const starter = TEAMS.find((t) => t.id === "fc-barcelona");
    const ids = [];
    for (const p of [...starter.players, ...starter.substitutes])
      ids.push(addUnit(u, p.id, false));
    for (const id of new Set(profile.ultimatePlayers || []))
      if (getUtCard(id)) addUnit(u, id, true);
    const lineup = ids.slice(0, 11);
    const ordered = FORMATIONS["4-3-3"].map((role) => {
      const at = lineup.findIndex(
        (id) =>
          getUtCard(u.inventory.find((x) => x.uid === id).cardId).position ===
          role,
      );
      return lineup.splice(at >= 0 ? at : 0, 1)[0];
    });
    u.squads.push({
      id: "squad-1",
      name: "Elenco principal",
      formation: "4-3-3",
      slots: ordered,
      bench: ids.slice(11),
      captain: ids[9],
      positions: {},
    });
  }
  const u = profile.ut;
  periods(u, now);
  profile.coins = Math.max(0, Math.floor(Number(profile.coins) || 0));
  return u;
}
function addUnit(u, cardId, tradeable = true) {
  const uid = `ut-${u.nextId++}`;
  u.inventory.push({ uid, cardId, level: 0, tradeable });
  return uid;
}
export function unitCard(u, uid) {
  const unit = u.inventory.find((x) => x.uid === uid),
    c = unit && getUtCard(unit.cardId);
  if (!c) return null;
  return {
    ...c,
    ...unit,
    rating: Math.min(99, c.rating + unit.level),
    ovr: Math.min(99, c.rating + unit.level),
    stats: Object.fromEntries(
      Object.entries(c.stats).map(([k, v]) => [
        k,
        Math.min(99, v + unit.level),
      ]),
    ),
  };
}
export const activeSquad = (u) =>
  u.squads.find((s) => s.id === u.active) || u.squads[0];
export function chemistry(u, s = activeSquad(u)) {
  const cards = s.slots.map((id) => unitCard(u, id));
  let total = 0;
  cards.forEach((c, i) => {
    if (!c) return;
    const peers = cards.filter((x) => x && x.uid !== c.uid);
    const links = peers.filter(
      (x) =>
        x.teamId === c.teamId ||
        (c.country && x.country?.flag === c.country.flag) ||
        x.league === c.league,
    ).length;
    total += Math.min(
      9,
      (c.position === FORMATIONS[s.formation][i] ? 4 : 1) + links,
    );
  });
  return Math.min(100, Math.round((total / 99) * 100));
}
export function squadReady(u) {
  const s = activeSquad(u);
  return (
    s.slots.length === 11 &&
    s.slots.every((id) => unitCard(u, id)) &&
    new Set(s.slots.map((id) => unitCard(u, id).baseId)).size === 11
  );
}
const locked = (u, id) =>
  u.squads.some((s) => s.slots.includes(id) || s.bench.includes(id)) ||
  u.evolution?.uid === id ||
  u.pending?.uids.includes(id);
function fail(text) {
  return { ok: false, message: text };
}
function success(message, extra = {}) {
  return { ok: true, message, ...extra };
}
export function buyUtPlayer(profile, id, now = Date.now()) {
  const u = ensureUltimate(profile, now),
    c = getUtCard(id);
  if (!c) return fail("Carta inexistente.");
  if (profile.coins < c.price) return fail("Moedas insuficientes.");
  profile.coins -= c.price;
  const uid = addUnit(u, id);
  u.history.unshift({
    type: "Compra",
    name: c.name,
    coins: -c.price,
    time: now,
  });
  u.history = u.history.slice(0, 50);
  return success(`${c.name} contratado.`, { uid });
}
export function sellUtPlayer(profile, uid, now = Date.now()) {
  const u = ensureUltimate(profile, now),
    c = unitCard(u, uid);
  if (!c) return fail("Carta não encontrada.");
  if (!c.tradeable) return fail("Carta inegociável do elenco inicial.");
  if (locked(u, uid))
    return fail(
      "Retire a carta de todos os elencos, reservas e evolução antes de vender.",
    );
  const value = Math.floor(c.price * 0.85);
  profile.coins += value;
  u.inventory = u.inventory.filter((x) => x.uid !== uid);
  u.history.unshift({
    type: "Venda ao mercado local",
    name: c.name,
    coins: value,
    time: now,
  });
  u.history = u.history.slice(0, 50);
  return success(`Vendida por ${value} moedas (taxa de 15%).`);
}
function rollPack(u, type, rng) {
  const pack = PACKS[type],
    ids = [];
  for (let i = 0; i < pack.count; i++) {
    let r = clamp(rng(), 0, 0.999999),
      rarity = pack.odds.at(-1)[0];
    for (const [k, chance] of pack.odds) {
      r -= chance;
      if (r < 0) {
        rarity = k;
        break;
      }
    }
    const pool = UT_CATALOG.filter((c) => c.rarity === rarity);
    ids.push(
      addUnit(u, pool[Math.floor(clamp(rng(), 0, 0.999999) * pool.length)].id),
    );
  }
  u.reveal = { type, uids: ids };
  return ids;
}
export function openUtPack(
  profile,
  type,
  { now = Date.now(), random = Math.random, free = false } = {},
) {
  const u = ensureUltimate(profile, now),
    pack = PACKS[type];
  if (!pack) return fail("Pacote inválido.");
  if (u.reveal) return fail("Conclua a revelação pendente primeiro.");
  // Só recompensas internas chamam rollPack; nunca há compra grátis pela UI.
  if (free) return fail("Pacotes grátis só são concedidos pelas recompensas.");
  if (profile.coins < pack.cost) return fail("Moedas insuficientes.");
  profile.coins -= pack.cost;
  const ids = rollPack(u, type, random);
  return success("Pacote aberto e cartas salvas.", { uids: ids });
}
export function assignUtPlayer(profile, uid, slot) {
  const u = ensureUltimate(profile),
    s = activeSquad(u),
    c = unitCard(u, uid);
  if (u.pending)
    return fail("Conclua ou abandone a partida antes de alterar o elenco.");
  if (!c || !Number.isInteger(slot) || slot < 0 || slot > 17)
    return fail("Escolha uma carta e uma vaga.");
  const field = slot < 11 ? s.slots : s.bench,
    index = slot < 11 ? slot : slot - 11;
  const target = field[index] || null;
  const same = s.slots.findIndex(
    (x) => x && unitCard(u, x)?.baseId === c.baseId,
  );
  if (slot < 11 && same >= 0 && s.slots[same] !== uid)
    return fail(
      "O mesmo atleta não pode aparecer duas vezes entre os titulares.",
    );
  const current = s.slots.includes(uid) ? s.slots : s.bench;
  const from = current.indexOf(uid);
  if (from >= 0) current[from] = target;
  field[index] = uid;
  delete s.positions[uid];
  if(!s.slots.includes(s.captain))s.captain=s.slots.find(Boolean)||null;
  return success("Escalação atualizada.");
}
export function removeUtPlayer(profile, uid) {
  const u = ensureUltimate(profile);
  if (u.pending) return fail("Existe partida em andamento.");
  const s = activeSquad(u);
  s.slots = s.slots.map((x) => (x === uid ? null : x));
  s.bench = s.bench.map((x) => (x === uid ? null : x));
  if (s.captain === uid) s.captain = s.slots.find(Boolean) || null;
  return success("Carta retirada deste elenco.");
}
export function saveUtSquad(profile, name) {
  const u = ensureUltimate(profile);
  if (u.squads.length >= 5) return fail("Limite de cinco elencos.");
  const s = JSON.parse(JSON.stringify(activeSquad(u)));
  s.id = `squad-${u.nextId++}`;
  s.name =
    String(name || "Novo elenco")
      .trim()
      .slice(0, 30) || "Novo elenco";
  u.squads.push(s);
  u.active = s.id;
  return success("Novo elenco salvo.");
}
export function setUtFormation(profile, name) {
  const u = ensureUltimate(profile);
  if (!FORMATIONS[name] || u.pending)
    return fail("Formação indisponível durante a partida.");
  activeSquad(u).formation = name;
  activeSquad(u).positions = {};
  return success("Formação atualizada.");
}
export function startEvolution(profile, uid) {
  const u = ensureUltimate(profile),
    c = unitCard(u, uid);
  if (!c || c.level >= 6)
    return fail("Escolha uma carta com evolução abaixo de +6.");
  if (u.evolution || u.pending)
    return fail("Conclua a evolução/partida em andamento.");
  if (profile.coins < 500) return fail("A evolução custa 500 moedas.");
  profile.coins -= 500;
  u.evolution = { uid, played: 0, required: 2 };
  return success(
    "Evolução iniciada: complete duas partidas com a carta titular.",
  );
}
export function claimEvolution(profile) {
  const u = ensureUltimate(profile),
    e = u.evolution;
  if (!e || e.played < e.required) return fail("Evolução ainda incompleta.");
  const c = u.inventory.find((x) => x.uid === e.uid);
  if (!c) return fail("Carta ausente.");
  c.level += 2;
  u.evolution = null;
  return success("Evolução concluída: +2 nos atributos e overall.");
}
export function submitDme(
  profile,
  ids,
  { now = Date.now(), random = Math.random } = {},
) {
  const u = ensureUltimate(profile, now);
  if (u.reveal) return fail("Conclua o pacote pendente.");
  const key = `foundation-${u.weekly.id}`;
  if (u.dme.includes(key)) return fail("Desafio semanal já concluído.");
  const cards = ids.map((id) => unitCard(u, id));
  if (
    ids.length !== 3 ||
    new Set(ids).size !== 3 ||
    cards.some((c) => !c) ||
    cards.some((c) => locked(u, c.uid))
  )
    return fail(
      "Selecione três cartas livres, fora dos elencos e da evolução.",
    );
  if (
    cards.reduce((a, c) => a + c.rating, 0) / 3 < 65 ||
    new Set(cards.map((c) => c.teamId)).size < 2
  )
    return fail("Exige média 65 e pelo menos dois clubes.");
  u.inventory = u.inventory.filter((x) => !ids.includes(x.uid));
  u.dme.push(key);
  u.dme = u.dme.slice(-12);
  rollPack(u, "gold", random);
  return success("Três cartas consumidas. Pacote Ouro recebido.");
}
export function objectiveList(profile, now = Date.now()) {
  const u = ensureUltimate(profile, now);
  return [
    {
      id: "daily-play",
      period: "daily",
      title: "Entre em campo",
      detail: "Complete 1 partida UT hoje",
      current: u.daily.played,
      target: 1,
      coins: 250,
      xp: 150,
    },
    {
      id: "daily-goals",
      period: "daily",
      title: "Artilheiro do dia",
      detail: "Marque 3 gols no UT hoje",
      current: u.daily.goals,
      target: 3,
      coins: 400,
      xp: 200,
    },
    {
      id: "weekly-play",
      period: "weekly",
      title: "Semana de futebol",
      detail: "Complete 5 partidas UT nesta semana",
      current: u.weekly.played,
      target: 5,
      coins: 1200,
      xp: 600,
    },
    {
      id: "weekly-wins",
      period: "weekly",
      title: "Sequência vencedora",
      detail: "Vença 3 partidas UT nesta semana",
      current: u.weekly.wins,
      target: 3,
      coins: 1500,
      xp: 700,
    },
  ].map((o) => ({ ...o, claimed: u[o.period].claimed.includes(o.id) }));
}
export function claimObjective(profile, id, now = Date.now()) {
  const u = ensureUltimate(profile, now),
    o = objectiveList(profile, now).find((o) => o.id === id);
  if (!o || o.claimed || o.current < o.target)
    return fail("Objetivo incompleto ou já resgatado.");
  u[o.period].claimed.push(id);
  profile.coins += o.coins;
  u.season.xp += o.xp;
  return success(`+${o.coins} moedas e ${o.xp} XP de temporada.`);
}
export function claimSeason(profile, level, now = Date.now()) {
  const u = ensureUltimate(profile, now);
  if (
    !Number.isInteger(level) ||
    level < 1 ||
    level > 20 ||
    u.season.xp < level * 500 ||
    u.season.claimed.includes(level)
  )
    return fail("Recompensa bloqueada ou já resgatada.");
  u.season.claimed.push(level);
  profile.coins += level % 5 === 0 ? 2500 : 350;
  return success("Recompensa da temporada resgatada.");
}
export function claimModeReward(profile, mode, now = Date.now()) {
  const u = ensureUltimate(profile, now),
    r = u.modes[mode],
    m = UT_MODES[mode];
  if (!r || r.claimed || r.played < m.limit)
    return fail("Conclua as partidas da série antes de resgatar.");
  r.claimed = true;
  const coins = 500 + r.wins * 250;
  profile.coins += coins;
  return success(`Série concluída: +${coins} moedas.`);
}
export function beginUtMatch(profile, mode, now = Date.now()) {
  const u = ensureUltimate(profile, now),
    m = UT_MODES[mode];
  if (!m) return fail("Modo inválido.");
  if (u.pending)
    return success("Retomando confronto pendente.", { match: u.pending });
  if (!squadReady(u))
    return fail("Escale onze atletas distintos antes de jogar.");
  if (u.modes[mode].played >= m.limit)
    return fail("Limite semanal atingido. Resgate a recompensa da série.");
  const s = activeSquad(u);
  u.pending = {
    id: `ut-match-${u.nextId++}`,
    mode,
    uids: [...s.slots],
    squad: JSON.parse(JSON.stringify(s)),
    opponent: TEAMS[(u.lifetime.played * 7 + 1) % TEAMS.length].id,
    started: now,
  };
  return success("Confronto contra IA preparado.", { match: u.pending });
}
export function settleUtMatch(
  profile,
  id,
  score,
  { now = Date.now(), abandoned = false } = {},
) {
  const u = ensureUltimate(profile, now),
    p = u.pending;
  if (
    !p ||
    p.id !== id ||
    u.completed.includes(id) ||
    !Array.isArray(score) ||
    score.length !== 2 ||
    score.some((n) => !Number.isInteger(n) || n < 0 || n > 99)
  )
    return fail("Resultado inválido ou já creditado.");
  const win = !abandoned && score[0] > score[1],
    coins = abandoned ? 0 : 120 + (win ? 100 : 0) + score[0] * 10;
  const record = u.modes[p.mode];
  record.played++;
  record.wins += Number(win);
  record.points += abandoned ? 0 : win ? 100 : score[0] === score[1] ? 40 : 15;
  if (!abandoned) {
    u.lifetime.played++;
    u.lifetime.wins += Number(win);
    u.lifetime.goals += score[0];
    u.daily.played++;
    u.daily.goals += score[0];
    u.weekly.played++;
    u.weekly.wins += Number(win);
    u.season.xp += 150 + (win ? 100 : 0);
    if (u.evolution && p.uids.includes(u.evolution.uid)) u.evolution.played++;
    profile.coins += coins;
    profile.matchesPlayed = (profile.matchesPlayed || 0) + 1;
  }
  u.completed.push(id);
  u.completed = u.completed.slice(-100);
  u.pending = null;
  return success(
    abandoned
      ? "Confronto abandonado (derrota, sem moedas)."
      : `Partida registrada: +${coins} moedas.`,
    { coins },
  );
}
export function ultimateMatchTeam(profile, id) {
  const u = ensureUltimate(profile),
    p = u.pending;
  if (!p || p.id !== id) return null;
  const s = p.squad;
  const player = (uid, i) => {
    const c = unitCard(u, uid);
    return (
      c && {
        ...c,
        id: uid,
        pos: FORMATIONS[s.formation][i] || c.position,
        number: i + 1,
        foot: c.foot || "Right",
        captain: uid === s.captain,
      }
    );
  };
  const players = s.slots.map(player);
  if (players.some((x) => !x)) return null;
  const boost = Math.floor(chemistry(u, s) / 34);
  for (const p of players)
    p.stats = Object.fromEntries(
      Object.entries(p.stats).map(([k, v]) => [k, Math.min(99, v + boost)]),
    );
  const points = formationPoints(s.formation),
    plan = {};
  s.slots.forEach((uid, i) => {
    const pt = s.positions[uid] || points[i];
    plan[uid] = { x: 50 - pt.y, z: (50 - pt.x) * 0.64 };
  });
  return {
    id: "xfc-ut",
    name: u.clubName,
    shortName: "XFC UT",
    crest: "assets/brand/xfc-icon.png",
    colors: { primary: "#5620a8", secondary: "#17132d", trim: "#eacf82" },
    ratings: {
      att: Math.round(players.slice(8).reduce((sum, p) => sum + p.ovr, 0) / 3),
      mid: Math.round(
        players.slice(5, 8).reduce((sum, p) => sum + p.ovr, 0) / 3,
      ),
      def: Math.round(
        players.slice(0, 5).reduce((sum, p) => sum + p.ovr, 0) / 5,
      ),
      ovr: Math.round(players.reduce((sum, p) => sum + p.ovr, 0) / 11),
    },
    stars: 4,
    formation: s.formation,
    players,
    substitutes: s.bench.map((id, i) => player(id, i + 11)).filter(Boolean),
    plan,
  };
}

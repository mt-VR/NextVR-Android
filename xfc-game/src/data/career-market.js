// Mercado da carreira de jogador: oito clubes europeus para negociar (50% de
// chance, como pedido), três ofertas por temporada e a troca de clube que
// mantém o save, o overall e o histórico do atleta. Tudo local e determinístico
// por temporada — nenhuma chamada de rede, nenhum resultado do catálogo global.
import {TEAMS, getTeam} from './teams.js';
import {careerOverall} from './career.js';
import {careerLeague} from './career.js';

/**
 * Os eight clubes europeus da tela de Transferências: antes eram oito
 * escolhidos a dedo; agora são os oito melhores do catálogo europeu (os
 * mesmos IDs continuam aceitos, então saves antigos não perdem a lista).
 */
const MERCADO = ['real-madrid', 'fc-barcelona', 'manchester-city', 'bayern-munich',
  'psg', 'liverpool', 'inter', 'arsenal'];
const EXTRA = ['eintracht-frankfurt', 'aston-villa', 'newcastle-united', 'celtic', 'panathinaikos'];
export const EUROPEAN_CLUBS = [...new Set([...MERCADO, ...EXTRA])]
  .filter(id => TEAMS.some(team => team.id === id)).slice(0, 8);

/** Teto histórico do pedido anterior (era 50% para todo mundo). */
export const NEGOTIATION_CHANCE = 0.5;

/**
 * Chance de um clube aceitar o SEU pedido: quanto maior o clube, menor a
 * chance. O seu overall também conta — um atleta fraco dificilmente entra no
 * Real Madrid, mas um 90 de overall tem boa porta. O piso/mínimo evita
 * impedir a jogabilidade: sempre existe uma chance real (3% a 85%).
 */
export function negotiationChance(career, clubId) {
  const club = getTeam(clubId);
  if (!club) return 0;
  const rating = Number(club.ratings?.ovr) || 75;
  const mine = career?.player ? careerOverall(career) : 60;
  // Curva logística na diferença entre o seu overall e o do clube: no nível do
  // clube a conversa é boa; seis pontos acima, quase certa; muito abaixo, some.
  // Ex.: OVR 88 x Real 88 = 82%; OVR 80 x Real = 38%; OVR 70 x Real = 5%;
  //      OVR 70 x Celtic (75) = 56%.
  const chance = 1 / (1 + Math.exp(-((mine - rating + 6) / 4.05)));
  return Math.max(0.03, Math.min(0.85, chance));
}

/** Chance em porcentagem para mostrar na tela do escritório/transferências. */
export function negotiationPercent(career, clubId) {
  return Math.round(negotiationChance(career, clubId) * 100);
}

/** Sorteio reprodutível (mulberry32) para não mudar entre renders do menu. */
function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const hash = text => [...String(text)].reduce((n, ch) => (n * 31 + ch.charCodeAt(0)) >>> 0, 7) >>> 0;

/**
 * As três ofertas da temporada. O clube atual nunca manda oferta; as outras
 * saem de `EUROPEAN_CLUBS` por sorteio com semente (temporada + clube), então
 * a mesma temporada mostra sempre as mesmas três ofertas.
 */
export function careerOffers(career) {
  if (!career?.player) return [];
  const others = EUROPEAN_CLUBS.filter(id => id !== career.clubId);
  const rng = seeded(hash(`${career.season}:${career.clubId}:offers`));
  const pool = [...others], picked = [];
  while (picked.length < Math.min(3, pool.length)) {
    picked.push(pool.splice(Math.floor(rng() * pool.length), 1)[0]);
  }
  const answered = career.market?.answered || {};
  return picked.map(clubId => ({
    clubId,
    season: career.season,
    decision: answered[`${career.season}:${clubId}`] || 'pending'
  }));
}

/** Marca a decisão do jogador sobre uma oferta (ficar ou ir). */
export function answerOffer(career, clubId, decision) {
  if (!career || !['accepted', 'declined'].includes(decision)) return false;
  const offer = careerOffers(career).find(item => item.clubId === clubId);
  if (!offer || offer.decision !== 'pending') return false;
  career.market ||= {};
  career.market.answered ||= {};
  career.market.answered[`${career.season}:${clubId}`] = decision;
  return true;
}

/**
 * Negociação direta com um dos oito clubes: 50% de aceite. `rng` é injetável
 * para o teste; no jogo é o `Math.random` normal.
 */
export function negotiateCareerClub(career, clubId, rng = Math.random) {
  if (!career?.player || career.pending) return {ok: false, reason: 'pending'};
  if (clubId === career.clubId) return {ok: false, reason: 'same'};
  if (!EUROPEAN_CLUBS.includes(clubId)) return {ok: false, reason: 'club'};
  const chance = negotiationChance(career, clubId);
  const attempt = {clubId, season: career.season, round: career.round,
    chance, accepted: rng() < chance};
  career.market ||= {};
  career.market.attempts = [...(career.market.attempts || []), attempt].slice(-20);
  career.market.lastAttempt = attempt;
  if (!attempt.accepted) return {ok: false, reason: 'refused', attempt};
  changeCareerClub(career, clubId, 'transfer');
  return {ok: true, attempt};
}

/**
 * Troca de clube no meio da temporada (negociação aceita ou oferta aceita).
 * Mantém overall, XP, pontos, estatísticas e histórico; a liga é sorteada de
 * novo para o clube novo e a rodada volta ao começo. A apresentação de
 * transferência é disparada pelo fluxo normal (`queueCareerPresentation`).
 */
export function changeCareerClub(career, clubId, reason = 'transfer') {
  if (!career?.player || !getTeam(clubId) || clubId === career.clubId) return false;
  const from = career.clubId;
  career.history = [...(career.history || []), {
    season: career.season, clubId: from, place: null, type: reason
  }].slice(-12);
  career.clubId = clubId;
  career.round = 0;
  career.league = careerLeague(clubId, career.season);
  career.lastResult = null;
  career.plan = null;
  career.pending = null;
  return true;
}

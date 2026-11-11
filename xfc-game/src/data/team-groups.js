import {TEAMS} from './teams.js';
// Agrupar na apresentação, sem reordenar o catálogo usado por saves/torneios.
const rank=c=>c==='Espanha'?0:c==='Brasil'?1:2;
export const TEAM_COUNTRIES=[...new Set(TEAMS.map(t=>t.country))].sort((a,b)=>rank(a)-rank(b)||a.localeCompare(b,'pt-BR'));
export function countryTeams(country){return TEAMS.filter(t=>t.country===country);}
export const GROUPED_TEAMS=TEAM_COUNTRIES.flatMap(countryTeams);

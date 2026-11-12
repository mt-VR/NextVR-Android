// Serviços locais compartilhados pelas carreiras. Nunca escreve no catálogo global.
import {getTeam} from './teams.js';
import {createCareer,currentCareer,careerTeam,careerTable,settleCareer} from './career.js';
export const careerKind=k=>k==='manager'?'manager':'player';
export function getCareer(profile,kind=profile.careerKind){return careerKind(kind)==='manager'?validManager(profile.managerCareer):currentCareer(profile);}
export function validManager(c){return c?.kind==='manager'&&currentCareer({career:c})?c:null;}
export function createManagerCareer(clubId,name='Técnico'){
 const c=createCareer({clubId,name});c.kind='manager';c.managerName=String(name).trim().slice(0,24)||'Técnico';c.budget=5000;c.transfers=[];c.plan=null;return c;
}
export function careerSchedule(c){
 // Datas da temporada do SAVE, não calendário oficial de um campeonato real.
 const base=Date.parse(c.startDate||'2026-08-01T18:00:00Z');
 return c.league.rounds.flatMap((games,round)=>games.filter(g=>g.home===c.clubId||g.away===c.clubId).map(g=>({...g,round,
  date:new Date(base+((c.season-1)*364+round*7)*86400000).toISOString(),competition:'Liga da carreira',stadiumIndex:({'real-madrid':6,'fc-barcelona':7,'bayern-munich':8,'river-plate':10,'sao-paulo':1,botafogo:2,flamengo:0,cruzeiro:5}[g.home]??[...g.home].reduce((n,ch)=>n+ch.charCodeAt(0),0)%6)})));
}
export function careerNews(c){
 const last=[...careerSchedule(c)].reverse().find(g=>g.score);
 if(!last)return ['Temporada iniciada',`${getTeam(c.clubId).name} se prepara para a estreia na liga local.`];
 const ours=last.home===c.clubId?last.score[0]:last.score[1],theirs=last.home===c.clubId?last.score[1]:last.score[0];
 const rank=careerTable(c).findIndex(r=>r.id===c.clubId)+1;
 return [`${getTeam(c.clubId).name} ${ours>theirs?'vence':ours===theirs?'empata':'perde'}`,`${last.score.join(' × ')} contra ${getTeam(last.home===c.clubId?last.away:last.home).name}. O clube ocupa o ${rank}º lugar da liga desta carreira.`];
}
export function managerTeam(c,id=c.clubId){
 const base=getTeam(id);if(!base)return null;
 let roster=[...base.players,...(base.substitutes||[])].map(p=>({...p,stats:{...p.stats}}));
 for(const t of c.transfers||[]){if(t.from===id)roster=roster.filter(p=>p.id!==t.player.id);if(t.to===id&&!roster.some(p=>p.id===t.player.id))roster.push({...t.player,stats:{...t.player.stats}});}
 return {...base,players:roster.slice(0,11),substitutes:roster.slice(11)};
}
export function careerRoster(c,kind){return careerKind(kind)==='manager'?managerTeam(c):careerTeam(c);}
export function transferPrice(player){return Math.round((player.ovr||60)**2/10);}
export function buyManagerPlayer(c,clubId,playerId){
 if(!validManager(c)||c.pending||clubId===c.clubId)return false;
 const source=managerTeam(c,clubId),ours=managerTeam(c);if(!source||ours.players.length+ours.substitutes.length>=25)return false;
 const roster=[...source.players,...source.substitutes],p=roster.find(p=>p.id===playerId);
 if(!p||roster.length<=11||p.pos==='GK'&&roster.filter(x=>x.pos==='GK').length<2)return false;
 const fee=transferPrice(p);if(c.budget<fee)return false;
 c.budget-=fee;c.transfers.push({from:clubId,to:c.clubId,player:JSON.parse(JSON.stringify(p)),fee,season:c.season,round:c.round});return true;
}
export function settleManager(c,id,score){
 if(!validManager(c))return null;const result=settleCareer(c,id,score);if(!result)return null;
 const game=c.league.rounds[c.round-1].find(g=>g.id===id);const home=game.home===c.clubId;const won=score[home?0:1]>score[home?1:0];
 c.budget+=100+(won?100:0);return result;
}
export function saveCareerSlot(profile,kind){
 const c=getCareer(profile,kind);if(!c)return false;profile.careerSlots||=[];
 profile.careerSlots.unshift({kind:careerKind(kind),savedAt:new Date().toISOString(),career:JSON.parse(JSON.stringify(c))});profile.careerSlots=profile.careerSlots.slice(0,5);return true;
}
export function loadCareerSlot(profile,index){
 const slot=profile.careerSlots?.[index];if(!slot)return false;const c=JSON.parse(JSON.stringify(slot.career));
 if(slot.kind==='manager'?!validManager(c):!currentCareer({career:c}))return false;
 profile[slot.kind==='manager'?'managerCareer':'career']=c;profile.careerKind=slot.kind;return true;
}

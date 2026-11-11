// Carreira local de UM atleta. Nunca muta o catálogo global nem as moedas do UT.
import {TEAMS,getTeam} from './teams.js';
export const CAREER_POSITIONS={ST:'Atacante',LW:'Ponta',CM:'Meio-campista',CB:'Zagueiro'};
const cap=(n,a,b)=>Math.max(a,Math.min(b,Number(n)||0));
export function careerLeague(clubId,season=1){
  const club=getTeam(clubId)||TEAMS[0];
  const pool=[club,...TEAMS.filter(t=>t.id!==club.id&&t.country===club.country),...TEAMS.filter(t=>t.country!==club.country)].slice(0,8).map(t=>t.id);
  let ring=[...pool],rounds=[];
  for(let r=0;r<7;r++){
    const games=[];for(let i=0;i<4;i++){const a=ring[i],b=ring[7-i];games.push({id:`s${season}-r${r+1}-g${i}`,home:r%2?a:b,away:r%2?b:a,score:null});}
    rounds.push(games);ring=[ring[0],ring[7],...ring.slice(1,7)];
  }
  rounds.push(...rounds.map((games,r)=>games.map((g,i)=>({id:`s${season}-r${r+8}-g${i}`,home:g.away,away:g.home,score:null}))));
  return {clubs:pool,rounds};
}
export function createCareer({name='Meu jogador',clubId=TEAMS[0].id,position='ST',number=9,foot='Right'}={}){
  if(!getTeam(clubId))clubId=TEAMS[0].id;
  return {version:1,player:{id:'career-player',name:String(name).trim().slice(0,24)||'Meu jogador',position:CAREER_POSITIONS[position]?position:'ST',number:Math.round(cap(number,1,99)),foot:foot==='Left'?'Left':'Right',level:1,xp:0,points:0,stats:{pace:68,shooting:65,passing:65,dribbling:65,defending:60,physical:66}},clubId,season:1,round:0,league:careerLeague(clubId),pending:null,history:[],totals:{matches:0,goals:0,shots:0,passes:0},lastResult:null};
}
export function currentCareer(profile){const c=profile?.career;return c?.version===1&&getTeam(c.clubId)&&c.player?.id==='career-player'&&Array.isArray(c.league?.rounds)&&c.player.stats&&c.totals?c:null;}
export function careerFixture(c){return c.league.rounds[c.round]?.find(g=>g.home===c.clubId||g.away===c.clubId)||null;}
export function careerTable(c){
 const rows=new Map(c.league.clubs.map(id=>[id,{id,played:0,points:0,wins:0,gf:0,ga:0}]));
 for(const round of c.league.rounds)for(const g of round){if(!g.score)continue;const a=rows.get(g.home),b=rows.get(g.away),[x,y]=g.score;a.played++;b.played++;a.gf+=x;a.ga+=y;b.gf+=y;b.ga+=x;if(x===y){a.points++;b.points++;}else{const w=x>y?a:b;w.points+=3;w.wins++;}}
 return [...rows.values()].sort((a,b)=>b.points-a.points||b.wins-a.wins||(b.gf-b.ga)-(a.gf-a.ga)||b.gf-a.gf||a.id.localeCompare(b.id));
}
export function careerTeam(c){
 const base=getTeam(c.clubId),player=c.player;const players=base.players.map(p=>({...p,stats:{...p.stats}}));
 let index=players.findIndex(p=>p.pos===player.position);if(index<0)index=players.findIndex(p=>p.pos!=='GK');
 const ovr=Math.round(Object.values(player.stats).reduce((a,b)=>a+b,0)/6);
 players[index]={...players[index],id:player.id,name:player.name,fullName:player.name,number:player.number,pos:player.position,foot:player.foot,ovr,rating:ovr,photo:null,stats:{...player.stats}};
 return {...base,players,substitutes:[...(base.substitutes||[])]};
}
export function beginCareerMatch(c){const g=careerFixture(c);if(!g||g.score)return null;c.pending||={id:g.id,clubId:c.clubId};return c.pending;}
export function settleCareer(c,id,score,performance={}){
 const g=careerFixture(c);if(!g||g.score||c.pending?.id!==id||g.id!==id||!Array.isArray(score)||score.length!==2||score.some(n=>!Number.isInteger(n)||n<0||n>99))return null;
 const home=g.home===c.clubId,won=score[home?0:1]>score[home?1:0];
 const goals=Math.floor(cap(performance.goals,0,score[home?0:1])),shots=Math.floor(cap(performance.shots,0,100)),passes=Math.floor(cap(performance.passes,0,300));
 const rating=Math.min(10,Math.round((6+goals*.9+Math.min(shots,6)*.1+Math.min(passes,20)*.04+(won?.5:0))*10)/10);
 const xp=80+goals*35+Math.min(passes,20)*2+(won?40:0);g.score=[...score];
 // Outros jogos da rodada: simulação local determinística, não resultados reais.
 for(const [i,game] of c.league.rounds[c.round].entries())if(!game.score)game.score=[(c.round*7+c.season+i*3)%4,(c.round*3+i+c.season)%3];
 c.player.xp+=xp;const level=Math.min(30,1+Math.floor(c.player.xp/250));c.player.points+=(level-c.player.level)*3;c.player.level=level;
 c.totals.matches++;c.totals.goals+=goals;c.totals.shots+=shots;c.totals.passes+=passes;
 c.lastResult={id,score:[...score],rating,xp,goals,shots,passes};c.round++;c.pending=null;return c.lastResult;
}
export function improveCareer(c,stat){if(c.pending||!Object.hasOwn(c.player.stats,stat)||c.player.points<1||c.player.stats[stat]>=95)return false;c.player.stats[stat]++;c.player.points--;return true;}
export function nextCareerSeason(c,clubId=c.clubId){if(c.round<c.league.rounds.length||c.pending||!getTeam(clubId))return false;c.history.push({season:c.season,clubId:c.clubId,place:careerTable(c).findIndex(t=>t.id===c.clubId)+1});c.history=c.history.slice(-10);c.clubId=clubId;c.season++;c.round=0;c.league=careerLeague(clubId,c.season);c.lastResult=null;return true;}

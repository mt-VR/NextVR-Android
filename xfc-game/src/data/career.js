import {queueCareerPresentation} from './career-presentations.js';
import {LAB_HAIR,GLOVE_LABELS,ACCESSORY_LABELS} from './player-customization.js';
// Carreira local de UM atleta. Nunca muta o catálogo global nem as moedas do UT.
import {TEAMS,getTeam} from './teams.js';
export const CAREER_POSITIONS={ST:'Atacante',LW:'Ponta',CM:'Meio-campista',CB:'Zagueiro'};
export const CAREER_HAIR={short:'Curto',curly:'Cacheado',afro:'Afro',mohawk:'Moicano',neymar:'Neymar',side:'Lateral',fade:'Degradê',long:'Longo',braids:'Tranças',dreads:'Dreads',bald:'Raspado',...LAB_HAIR};
export const CAREER_HAIR_COLORS={'#24180f':'Preto','#66452d':'Castanho claro','#432c20':'Castanho escuro','#c3a16a':'Loiro','#a3442b':'Ruivo','#eeeeee':'Loiro platinado','#ffffff':'Branco','#92969b':'Cinza','#ca2237':'Vermelho','#245dda':'Azul','#288b43':'Verde','#e85aaa':'Rosa','#8349b9':'Roxo'};
export const CAREER_BOOTS={'#171b20':'Preta','#f3f3ed':'Branca','#ee4235':'Vermelha','#b3ef36':'Verde-lima'};
export const CAREER_SKIN={'#e0b18d':'Tom 1','#bd8868':'Tom 2','#96613f':'Tom 3','#603d2c':'Tom 4'};
export const CAREER_NATIONS=['Brasil','Espanha','Argentina','Portugal','França','Inglaterra','Itália','Alemanha'];
export const CAREER_BEARD={none:'Sem barba',stubble:'Por fazer',full:'Cheia',goatee:'Cavanhaque'};
export const CAREER_FACE={natural:'Natural',slim:'Fino',broad:'Largo'};
export const CAREER_BODY={normal:'Equilibrado',lean:'Magro',strong:'Atlético'};
const pick=(list,value,fallback)=>Object.hasOwn(list,value)?value:fallback;
export function careerAppearance(value={}){return {
 hairStyle:pick(CAREER_HAIR,value.hairStyle,'short'),hairColor:pick(CAREER_HAIR_COLORS,value.hairColor,'#24180f'),
 bootColor:pick(CAREER_BOOTS,value.bootColor,'#171b20'),skinTone:pick(CAREER_SKIN,value.skinTone,'#bd8868'),
 beard:pick(CAREER_BEARD,value.beard,'none'),face:pick(CAREER_FACE,value.face,'natural'),body:pick(CAREER_BODY,value.body,'normal'),
 moustache:pick({none:1,classic:1},value.moustache,'none'),brows:pick({natural:1,thick:1},value.brows,'natural'),
 height:Math.round(cap(value.height??175,160,200)),weight:Math.round(cap(value.weight??68,55,100)),
 socks:pick({long:1,short:1},value.socks,'long'),gloves:pick(GLOVE_LABELS,value.gloves,'none'),gloveModel:pick({winter:1,pro:1},value.gloveModel,'winter'),
 wristband:pick(ACCESSORY_LABELS,value.wristband,'none'),wristbandSide:pick({left:1,right:1,both:1},value.wristbandSide,'left'),celebration:pick({arms:1,fist:1,wide:1},value.celebration,'arms')
};}
export function careerOverall(c){return Math.round(Object.values(c.player.stats).reduce((a,b)=>a+b,0)/6);}
export function customiseCareer(c,values={},opts={}){
 // Edição cosmética permitida mesmo com partida pendente quando chamada pela
 // tela de edição (opts.allowPending). O bloqueio padrão permanece para
 // chamadas diretas de progressão, preservando as regras de temporada.
 if(c.pending&&!opts.allowPending)return false;
 c.player.appearance=careerAppearance(values.appearance||c.player.appearance);
 if(Object.hasOwn(CAREER_POSITIONS,values.position))c.player.position=values.position;
 if(values.number!=null)c.player.number=Math.round(cap(values.number,1,99));
 if(values.foot)c.player.foot=values.foot==='Left'?'Left':'Right';
 if(CAREER_NATIONS.includes(values.nationality))c.player.nationality=values.nationality;
 return true;
}
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
export function createCareer({name='Meu jogador',clubId=TEAMS[0].id,position='ST',number=9,foot='Right',appearance={},nationality='Brasil'}={}){
  if(!getTeam(clubId))clubId=TEAMS[0].id;
  return {version:1,player:{id:'career-player',name:String(name).trim().slice(0,24)||'Meu jogador',position:Object.hasOwn(CAREER_POSITIONS,position)?position:'ST',number:Math.round(cap(number,1,99)),foot:foot==='Left'?'Left':'Right',appearance:careerAppearance(appearance),nationality:CAREER_NATIONS.includes(nationality)?nationality:'Brasil',level:1,xp:0,points:0,stats:{pace:60,shooting:57,passing:58,dribbling:60,defending:50,physical:57}},clubId,season:1,round:0,league:careerLeague(clubId),pending:null,history:[],totals:{matches:0,goals:0,shots:0,passes:0},lastResult:null};
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
 const ovr=careerOverall(c);
 players[index]={...players[index],id:player.id,name:player.name,fullName:player.name,number:player.number,pos:player.position,foot:player.foot,ovr,rating:ovr,photo:null,appearance:careerAppearance(player.appearance),height:careerAppearance(player.appearance).height,weight:careerAppearance(player.appearance).weight,stats:{...player.stats}};
 return {...base,players,substitutes:[...(base.substitutes||[])]};
}
export function beginCareerMatch(c){const g=careerFixture(c);if(!g||g.score)return null;c.pending||={id:g.id,clubId:c.clubId};return c.pending;}
export function settleCareer(c,id,score,performance={}){
 const g=careerFixture(c);if(!g||g.score||c.pending?.id!==id||g.id!==id||!Array.isArray(score)||score.length!==2||score.some(n=>!Number.isInteger(n)||n<0||n>99))return null;
 const home=g.home===c.clubId,won=score[home?0:1]>score[home?1:0];
 const goals=Math.floor(cap(performance.goals,0,score[home?0:1])),shots=Math.floor(cap(performance.shots,0,100)),passes=Math.floor(cap(performance.passes,0,300));
 // Nota AO VIVO da partida (6→10 por gols/assistências/passes/chutes/dribles).
 // Se não vier, mantém a média histórica para técnico e fluxos antigos.
 const live=performance.liveRating;
 const rating=Number.isFinite(live)
  ?Math.max(0,Math.min(10,Math.round(live*10)/10))
  :Math.min(10,Math.round((6+goals*.9+Math.min(shots,6)*.1+Math.min(passes,20)*.04+(won?.5:0))*10)/10);
 const xp=80+goals*35+Math.min(passes,20)*2+(won?40:0);g.score=[...score];
 // Outros jogos da rodada: simulação local determinística, não resultados reais.
 for(const [i,game] of c.league.rounds[c.round].entries())if(!game.score)game.score=[(c.round*7+c.season+i*3)%4,(c.round*3+i+c.season)%3];
 c.player.xp+=xp;const level=Math.min(30,1+Math.floor(c.player.xp/250));c.player.points+=(level-c.player.level)*3;c.player.level=level;
 c.totals.matches++;c.totals.goals+=goals;c.totals.shots+=shots;c.totals.passes+=passes;
 c.lastResult={id,score:[...score],rating,xp,goals,shots,passes};c.round++;c.pending=null;return c.lastResult;
}
export function improveCareer(c,stat){if(c.pending||!Object.hasOwn(c.player.stats,stat)||c.player.points<1||c.player.stats[stat]>=95)return false;c.player.stats[stat]++;c.player.points--;return true;}
export function nextCareerSeason(c,clubId=c.clubId){if(c.round<c.league.rounds.length||c.pending||!getTeam(clubId))return false;c.history.push({season:c.season,clubId:c.clubId,place:careerTable(c).findIndex(t=>t.id===c.clubId)+1});c.history=c.history.slice(-10);const previousClub=c.clubId;c.clubId=clubId;c.season++;c.round=0;c.league=careerLeague(clubId,c.season);c.lastResult=null;queueCareerPresentation(c,previousClub===clubId?'renewal':'transfer',previousClub);return true;}

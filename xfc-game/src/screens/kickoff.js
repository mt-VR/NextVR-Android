// Kick Off separado do Jogo Rápido: referência IMG_f3abe7f5, dados e controles vivos.
import {el,starRow} from '../ui/dom.js';
import {TEAMS,getTeam} from '../data/teams.js';
import {TEAM_COUNTRIES,countryTeams} from '../data/team-groups.js';
export function kickoffScreen(ctx,params={}){
 const {state}=ctx;let focus=state.settings.focus||'home';
 for(const [side,i]of [['home',0],['away',1]])state.selection[side]=getTeam(params[side]||state.selection[side])?.id||TEAMS[i].id;
 let minutes=params.minutes??state.settings.matchMinutes??6,difficulty=params.difficulty||state.settings.difficulty||'normal';
 const node=el('div',{class:'screen screen--kickoff kickoff-reference'},el('img',{class:'kickoff-art',src:'assets/ui/kickoff/teams.jpg',alt:'Kick Off · seleção de times',draggable:'false'}));
 const button=(text,click,props={})=>el('button',{type:'button',text,onClick:click,...props});
 const back=()=>ctx.go(params.returnTo||'menu');
 const selection=()=>({...params,home:state.selection.home,away:state.selection.away,minutes,difficulty});
 function select(side){focus=side;state.settings.focus=side;for(const s of ['home','away'])node.querySelector(`[data-slot="${s}"]`)?.classList.toggle('is-focused',s===focus);}
 function cycle(side,delta){const team=getTeam(state.selection[side]),pool=countryTeams(team.country),i=pool.findIndex(t=>t.id===team.id);state.selection[side]=pool[(i+delta+pool.length)%pool.length].id;focus=side;paint();}
 function random(){const a=Math.floor(Math.random()*TEAMS.length),b=(a+1+Math.floor(Math.random()*(TEAMS.length-1)))%TEAMS.length;state.selection.home=TEAMS[a].id;state.selection.away=TEAMS[b].id;paint();}
 function kits(){if(state.selection.home===state.selection.away){ctx.toast('Escolha dois clubes diferentes.',{variant:'warn'});return;}state.settings.matchMinutes=minutes;state.settings.difficulty=difficulty;ctx.go('kits',{...selection(),kickoffFlow:true,focus,returnTo:'kickoff',returnParams:selection()});}
 node.append(el('header',{class:'kickoff-header'},el('b',{text:'XFC'}),el('strong',{text:'KICK OFF'}),el('span',{text:params.competition?.title||'Classic Match'}),el('small',{text:'Select Teams'})),el('span',{class:'kickoff-edge kickoff-edge--home',text:'HOME'}),el('span',{class:'kickoff-edge kickoff-edge--away',text:'AWAY'}));
 const panels={};for(const side of ['home','away']){panels[side]=el('section',{class:`kickoff-column kickoff-column--${side}`,dataset:{slot:side},onPointerdown:()=>select(side)});node.append(panels[side]);}
 function paint(){for(const side of ['home','away']){
  const team=getTeam(state.selection[side]);panels[side].dataset.teamId=team.id;
  const country=el('select',{'aria-label':`País do ${side==='home'?'mandante':'visitante'}`,onChange:e=>{state.selection[side]=countryTeams(e.target.value)[0].id;paint();}},...TEAM_COUNTRIES.map(c=>el('option',{value:c,text:c,selected:c===team.country})));
  panels[side].replaceChildren(el('div',{class:'kickoff-category'},el('span',{text:'● Times masculinos'}),el('span',{text:'Clubes'})),el('div',{class:'kickoff-country'},country,team.flag?el('img',{src:`assets/flags/${team.flag}.svg`,alt:team.country}):null),
   el('div',{class:'kickoff-card'},button(team.name,()=>select(side),{class:'team-card__name','aria-label':`Selecionar ${team.name}`}),el('div',{class:'kickoff-crest-row'},button('‹',()=>cycle(side,-1),{'aria-label':`Time anterior (${side==='home'?'mandante':'visitante'})`}),el('img',{class:'team-card__crest',src:team.crest,alt:team.name}),button('›',()=>cycle(side,1),{'aria-label':`Próximo time (${side==='home'?'mandante':'visitante'})`})),starRow(team.stars||3),el('div',{class:'kickoff-ratings'},...['att','mid','def'].map(k=>el('span',{},el('small',{text:k.toUpperCase()}),el('b',{text:String(team.ratings?.[k]||team.ratings?.ovr||60)}))))),
   el('div',{class:'kickoff-league'},el('b',{text:team.league||team.country}),button('Ver elenco',()=>ctx.go('squad',{teamId:team.id,returnTo:'kickoff',returnParams:selection()}))));
 }select(focus);}
 const duration=el('select',{'aria-label':'Duração da partida',onChange:e=>{minutes=Number(e.target.value);state.settings.matchMinutes=minutes;}},...[[3,'3 min'],[6,'6 min'],[10,'10 min']].map(([value,text])=>el('option',{value,text,selected:value===minutes})));
 const level=el('select',{'aria-label':'Dificuldade',onChange:e=>{difficulty=e.target.value;state.settings.difficulty=difficulty;}},...Object.entries({easy:'Fácil',normal:'Normal',hard:'Difícil'}).map(([value,text])=>el('option',{value,text,selected:value===difficulty})));
 node.append(el('section',{class:'kickoff-options'},el('small',{text:'Configurações'}),duration,level,button('Uniformes →',kits,{class:'continue-btn'})),el('footer',{class:'kickoff-footer'},button('A · Selecionar',kits),button('B · Voltar',back),button('X · Sortear times',random)));
 paint();return {node,onKey(e){if(['Escape','Backspace'].includes(e.key)){back();return true;}if(document.activeElement?.matches('select,button'))return false;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){cycle(focus,e.key==='ArrowLeft'?-1:1);return true;}if(e.key==='ArrowUp'||e.key==='ArrowDown'){select(focus==='home'?'away':'home');return true;}if(e.key==='Enter'){kits();return true;}return false;}};
}

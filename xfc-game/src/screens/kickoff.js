// Kick Off separado do Jogo Rápido: referência IMG_f3abe7f5, dados e controles vivos.
import {el,starRow} from '../ui/dom.js';
import {TEAMS,getTeam} from '../data/teams.js';
import {TEAM_COUNTRIES,countryTeams} from '../data/team-groups.js';
import {KICKOFF_NATIONAL_TEAMS,getKickoffNationalTeam} from '../data/worldcup.js';

// Seleções no Kick Off: mesmo cartão do clube (nome, bandeira, escudo, notas).
const NATIONS=KICKOFF_NATIONAL_TEAMS.map(team=>({
  id:team.id,name:team.name,country:team.name,league:'Seleções',
  flag:team.flagCode,crest:team.crest||`assets/crests/nations/${team.flagCode}.png`,
  stars:team.stars||3,
  ratings:{att:team.ratings.ATT,mid:team.ratings.MID,def:team.ratings.DEF,
    ovr:Math.round((team.ratings.ATT+team.ratings.MID+team.ratings.DEF)/3)},
  isNationalTeam:true
}));
function nationLetter(name){
  const ch=(name||'').normalize('NFD').replace(/\p{Diacritic}/gu,'').trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(ch)?ch:'#';
}
const NATION_LETTERS=[...new Set(NATIONS.map(t=>nationLetter(t.name)))].sort();
const nationsByLetter=L=>NATIONS.filter(t=>nationLetter(t.name)===L).sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
/** Resolve clube OU seleção pelo id (os ids das seleções não colidem: país x clube). */
export function kickoffTeam(id){return getTeam(id)||NATIONS.find(t=>t.id===id)||null;}
/**
 * Mesmo time do cartão, mas com o ELENCO completo. O cartão do Kick Off só
 * carrega nome/bandeira/notas; a prévia de uniformes precisa dos jogadores
 * para escolher a aparência e não cair num atleta reserva genérico.
 */
export function fullKickoffTeam(id){
  const team=kickoffTeam(id);
  if(!team)return null;
  if(team.players?.length)return team;
  const nation=KICKOFF_NATIONAL_TEAMS.find(t=>t.id===team.id);
  return nation?{...team,...nation,isNationalTeam:true,country:team.country,league:'Seleções'}:team;
}
const poolFor=team=>team?.isNationalTeam?nationsByLetter(nationLetter(team.name)):countryTeams(team?.country||'Brasil');
export function kickoffScreen(ctx,params={}){
 const {state}=ctx;let focus=state.settings.focus||'home';
 for(const [side,i]of [['home',0],['away',1]])state.selection[side]=kickoffTeam(params[side]||state.selection[side])?.id||TEAMS[i].id;
 let minutes=params.minutes??state.settings.matchMinutes??6,difficulty=params.difficulty||state.settings.difficulty||'normal';
 const node=el('div',{class:'screen screen--kickoff kickoff-reference'},el('img',{class:'kickoff-art',src:'assets/ui/kickoff/teams.jpg',alt:'Kick Off · seleção de times',draggable:'false'}));
 const button=(text,click,props={})=>el('button',{type:'button',text,onClick:click,...props});
 const back=()=>ctx.go(params.returnTo||'menu');
 const selection=()=>({...params,home:state.selection.home,away:state.selection.away,minutes,difficulty});
 function select(side){focus=side;state.settings.focus=side;for(const s of ['home','away'])node.querySelector(`[data-slot="${s}"]`)?.classList.toggle('is-focused',s===focus);}
 function cycle(side,delta){const team=kickoffTeam(state.selection[side]),pool=poolFor(team),i=Math.max(0,pool.findIndex(t=>t.id===team.id));state.selection[side]=pool[(i+delta+pool.length)%pool.length].id;focus=side;paint();}
 function random(){const all=[...TEAMS,...NATIONS],a=Math.floor(Math.random()*all.length),b=(a+1+Math.floor(Math.random()*(all.length-1)))%all.length;state.selection.home=all[a].id;state.selection.away=all[b].id;paint();}
 function kits(){if(state.selection.home===state.selection.away){ctx.toast('Escolha dois clubes diferentes.',{variant:'warn'});return;}state.settings.matchMinutes=minutes;state.settings.difficulty=difficulty;ctx.go('kits',{...selection(),kickoffFlow:true,focus,returnTo:'kickoff',returnParams:selection()});}
 node.append(el('header',{class:'kickoff-header'},el('b',{text:'XFC'}),el('strong',{text:'KICK OFF'}),el('span',{text:params.competition?.title||'Classic Match'}),el('small',{text:'Select Teams'})),el('span',{class:'kickoff-edge kickoff-edge--home',text:'HOME'}),el('span',{class:'kickoff-edge kickoff-edge--away',text:'AWAY'}));
 const panels={};for(const side of ['home','away']){panels[side]=el('section',{class:`kickoff-column kickoff-column--${side}`,dataset:{slot:side},onPointerdown:()=>select(side)});node.append(panels[side]);}
 function paint(){for(const side of ['home','away']){
  const team=kickoffTeam(state.selection[side]);panels[side].dataset.teamId=team.id;
  // Clubes por país; seleções por LETRA (A–Z), não por confederação.
  const selected=team.isNationalTeam?`letter:${nationLetter(team.name)}`:team.country;
  const country=el('select',{'aria-label':`País do ${side==='home'?'mandante':'visitante'}`,onChange:e=>{
    const value=e.target.value;
    const list=value.startsWith('letter:')?nationsByLetter(value.slice(7)):countryTeams(value);
    state.selection[side]=list.find(t=>t.id===team.id)?.id||list[0].id;paint();
  }},
    el('optgroup',{label:'Clubes'},...TEAM_COUNTRIES.map(c=>el('option',{value:c,text:c,selected:c===selected}))),
    el('optgroup',{label:'Seleções por letra'},...NATION_LETTERS.map(L=>el('option',{value:`letter:${L}`,text:L,selected:`letter:${L}`===selected})))
  );
  panels[side].replaceChildren(el('div',{class:'kickoff-category'},el('span',{text:'● Times masculinos'}),el('span',{text:team.isNationalTeam?'Seleções':'Clubes'})),el('div',{class:'kickoff-country'},country,team.flag?el('img',{src:`assets/flags/${team.flag}.svg`,alt:team.country}):null),
   el('div',{class:'kickoff-card'},button(team.name,()=>select(side),{class:'team-card__name','aria-label':`Selecionar ${team.name}`}),el('div',{class:'kickoff-crest-row'},button('‹',()=>cycle(side,-1),{'aria-label':`Time anterior (${side==='home'?'mandante':'visitante'})`}),el('img',{class:'team-card__crest',src:team.crest,alt:team.name}),button('›',()=>cycle(side,1),{'aria-label':`Próximo time (${side==='home'?'mandante':'visitante'})`})),starRow(team.stars||3),el('div',{class:'kickoff-ratings'},...['att','mid','def'].map(k=>el('span',{},el('small',{text:k.toUpperCase()}),el('b',{text:String(team.ratings?.[k]||team.ratings?.ovr||60)}))))),
   el('div',{class:'kickoff-league'},el('b',{text:team.league||team.country}),button('Ver elenco',()=>ctx.go('squad',{teamId:team.id,returnTo:'kickoff',returnParams:selection()}))));
 }select(focus);}
 const duration=el('select',{'aria-label':'Duração da partida',onChange:e=>{minutes=Number(e.target.value);state.settings.matchMinutes=minutes;}},...[[3,'3 min'],[6,'6 min'],[10,'10 min']].map(([value,text])=>el('option',{value,text,selected:value===minutes})));
 // Atalho "Seleções": põe Brasil × Argentina de uma vez, sem caçar país por país.
 const nationsShortcut=button('Seleções · Brasil × Argentina',()=>{state.selection.home='brazil';state.selection.away='argentina';focus='home';paint();},{class:'kickoff-nations'});
 const level=el('select',{'aria-label':'Dificuldade',onChange:e=>{difficulty=e.target.value;state.settings.difficulty=difficulty;}},...Object.entries({easy:'Fácil',normal:'Normal',hard:'Difícil'}).map(([value,text])=>el('option',{value,text,selected:value===difficulty})));
 node.append(el('section',{class:'kickoff-options'},el('small',{text:'Configurações'}),duration,level,nationsShortcut,button('Uniformes →',kits,{class:'continue-btn'})),el('footer',{class:'kickoff-footer'},button('A · Selecionar',kits),button('B · Voltar',back),button('X · Sortear times',random)));
 paint();return {node,onKey(e){if(['Escape','Backspace'].includes(e.key)){back();return true;}if(document.activeElement?.matches('select,button'))return false;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){cycle(focus,e.key==='ArrowLeft'?-1:1);return true;}if(e.key==='ArrowUp'||e.key==='ArrowDown'){select(focus==='home'?'away':'home');return true;}if(e.key==='Enter'){kits();return true;}return false;}};
}

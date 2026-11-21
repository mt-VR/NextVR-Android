import {el} from '../ui/dom.js';
import {hotspot} from '../ui/reference-menu.js';
import {TEAM_COUNTRIES,countryTeams} from '../data/team-groups.js';
import {TEAMS,getTeam} from '../data/teams.js';
import {kitsOf,kitShirt,kitSvg} from '../data/kits.js';

export function teamSelectionScreen(ctx,params={}){
  const {state}=ctx, randomMode=!!params.randomMode, route=params.selectionRoute||(randomMode?'quick':'kickoff');
  const back=()=>ctx.go(params.returnTo||'menu');
  let focusSide=state.settings.focus||'home';
  let minutes=params.minutes??state.settings.matchMinutes??6;
  let difficulty=params.difficulty||state.settings.difficulty||'normal';
  for(const [side,index] of [['home',0],['away',1]])if(!getTeam(state.selection[side]))state.selection[side]=TEAMS[index].id;
  function randomise(){
    const a=Math.floor(Math.random()*TEAMS.length),b=(a+1+Math.floor(Math.random()*(TEAMS.length-1)))%TEAMS.length;
    state.selection.home=TEAMS[a].id;state.selection.away=TEAMS[b].id;
  }
  // Não sortear novamente ao voltar de estádios/uniformes.
  if(randomMode&&!params.home&&!params.restore)randomise();
  if(params.home)state.selection.home=params.home;
  if(params.away)state.selection.away=params.away;
  const node=el('div',{class:`screen screen--${route} selection-reference`},
    el('img',{class:'ref-art',src:'assets/ui/quick/field.png',alt:'XFC 27 · Jogo Rápido',draggable:'false'}));
  if(randomMode||params.competition)node.append(el('h1',{class:'selection-title',text:params.competition?.title||'Time Aleatório'}));
  const panels={};
  const returnParams=()=>({...params,home:state.selection.home,away:state.selection.away,minutes,difficulty,restore:true});
  function cycle(side,delta){const pool=countryTeams(getTeam(state.selection[side]).country),i=pool.findIndex(t=>t.id===state.selection[side]);state.selection[side]=pool[(i+delta+pool.length)%pool.length].id;paint();}
  function kitsDialog(side){
    focusSide=side;
    const team=getTeam(state.selection[side]),list=kitsOf(team.id);
    const dialog=el('section',{class:'selection-dialog',role:'dialog','aria-modal':'true','aria-label':`Uniformes · ${team.name}`},el('h2',{text:team.name}));
    const close=()=>{dialog.remove();panels[side].querySelector('.selection-shirt').focus();};
    dialog.append(el('div',{class:'selection-kit-grid'},...list.map((kit,i)=>el('button',{
      type:'button',class:'quick__kit','aria-pressed':String((state.kits[team.id]||0)===i),onClick(){state.kits[team.id]=i;paint();close();}},
      kitShirt(kit)?el('img',{src:kitShirt(kit),alt:''}):el('span',{html:kitSvg(kit,{width:90})}),el('span',{text:kit.name})))));
    dialog.append(el('button',{type:'button',text:'Fechar',onClick:close}));node.append(dialog);dialog.querySelector('button').focus();
  }
  for(const side of ['home','away']){
    panels[side]=el('section',{class:`selection-team selection-team--${side} quick__panel quick__panel--${side} kickoff__slot`,dataset:{slot:side,side}});
    node.append(panels[side]);
  }
  function paint(){
    for(const side of ['home','away']){
      const team=getTeam(state.selection[side]),kits=kitsOf(team.id),index=Math.min(kits.length-1,Math.max(0,state.kits[team.id]||0)),kit=kits[index];
      panels[side].dataset.teamId=team.id;
      const arrow=delta=>el('button',{type:'button',class:'picker-arrow picker-arrow--crest','aria-label':`${delta<0?'Time anterior':'Próximo time'} (${side==='home'?'mandante':'visitante'})`,onClick(){focusSide=side;state.settings.focus=side;cycle(side,delta);}},delta<0?'‹':'›');
      panels[side].replaceChildren(
        el('div',{class:'selection-crest-row'},arrow(-1),el('img',{class:'team-card__crest quick__crest',src:team.crest,alt:`Escudo do ${team.name}`}),arrow(1)),
        el('button',{type:'button',class:'team-card selection-name','aria-label':`Selecionar ${team.name}`,onClick(){focusSide=side;state.settings.focus=side;}},el('b',{class:'team-card__name quick__name',text:team.name})),
        el('select',{class:'selection-country', 'aria-label':`País do ${side==='home'?'mandante':'visitante'}`,onChange(e){state.selection[side]=countryTeams(e.target.value)[0].id;paint();}},...TEAM_COUNTRIES.map(c=>el('option',{value:c,selected:c===team.country,text:c}))),
        el('button',{type:'button',class:'selection-shirt','aria-label':`Escolher uniforme (${team.name})`,onClick:()=>kitsDialog(side)},
          kitShirt(kit)?el('img',{src:kitShirt(kit),alt:`Blusa ${kit.name}`}):el('span',{html:kitSvg(kit,{width:86})}),el('span',{text:kit?.name||'Principal'})),
        el('div',{class:'selection-uniform',text:`UNIFORME: ${kit?.name||'Principal'}`})
      );
    }
  }
  function start(){
    if(state.selection.home===state.selection.away){ctx.toast('Escolha dois clubes diferentes.',{variant:'warn'});return;}
    state.settings.matchMinutes=minutes;state.settings.difficulty=difficulty;
    ctx.go('stadiums',{returnTo:route,home:state.selection.home,away:state.selection.away,
      homeKit:state.kits[state.selection.home]||0,awayKit:state.kits[state.selection.away]||0,
      minutes,difficulty,competition:params.competition||null,competitionReturnTo:params.returnTo||'menu'});
  }
  const settings=el('div',{class:'selection-settings'});
  for(const [kind,y,choices] of [['duration',422,[[3,'CURTA'],[6,'NORMAL'],[10,'COMPLETA']]],['difficulty',511,[['easy','FÁCIL'],['normal','NORMAL'],['hard','DIFÍCIL']]]]){
    choices.forEach(([value,label],i)=>{
      const button=hotspot(label,[649+i*90,y,84,40],()=>{
        if(kind==='duration')minutes=value;else difficulty=value;
        state.settings.matchMinutes=minutes;state.settings.difficulty=difficulty;refresh();
      },{class:'ref-button quick__option selection-option',dataset:{kind,value:String(value)}});
      button.replaceChildren(document.createTextNode(label));settings.append(button);
    });
  }
  function refresh(){settings.querySelectorAll('button').forEach(b=>{const selected=b.dataset.value===String(b.dataset.kind==='duration'?minutes:difficulty);b.classList.toggle('is-selected',selected);b.setAttribute('aria-pressed',String(selected));});}
  node.append(settings,hotspot('Voltar ao Início',[1330,28,200,54],()=>ctx.go('menu')),
    hotspot('Selecionar',[58,789,144,57],start),hotspot('Voltar',[231,789,111,57],back),
    el('div',{class:'quick__actions'},hotspot('Continuar',[364,778,315,68],start,{class:'ref-button continue-btn'})),
    el('div',{class:'selection-tools'},
      el('button',{type:'button',text:'Sortear times',onClick(){randomise();paint();}}),
      el('button',{type:'button',class:'btn',text:'Blusas',onClick:()=>ctx.go('kits',{home:state.selection.home,away:state.selection.away,focus:focusSide,returnTo:route,returnParams:returnParams()})}),
      el('button',{type:'button',class:'btn',text:'Ver elenco',onClick:()=>ctx.go('squad',{teamId:state.selection[focusSide],returnTo:route,returnParams:returnParams()})})));
  paint();refresh();
  return {node,onKey(e){
    const dialog=node.querySelector('.selection-dialog');if(dialog){
      if(e.key==='Escape'){dialog.remove();panels[focusSide].querySelector('.selection-shirt').focus();return true;}
      if(e.key==='Tab'){const buttons=[...dialog.querySelectorAll('button')],i=buttons.indexOf(document.activeElement);buttons[(i+(e.shiftKey?-1:1)+buttons.length)%buttons.length].focus();return true;}return false;
    }
    if(['Escape','Backspace'].includes(e.key)){back();return true;}
    if(document.activeElement?.matches('select'))return false;
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){cycle(focusSide,e.key==='ArrowLeft'?-1:1);return true;}
    if(e.key==='Enter'&&!document.activeElement?.matches('button')){start();return true;}return false;
  }};
}

import {el} from '../ui/dom.js';
import {playerPreview} from '../ui/player-preview.js';
import {kickoffTeam,fullKickoffTeam} from './kickoff.js';
import {kitsOf,kitShirt,kitSvg,kitFigureSvg} from '../data/kits.js';
import {nationKits,nationColors} from '../data/nation-kits.js';
export function kickoffKitsScreen(ctx,params){
 // `fullKickoffTeam` traz o elenco junto (o time do cartão do Kick Off só tem
 // nome, bandeira e notas): a prévia 3D usa o elenco para a aparência e o
 // uniforme do atleta.
 const teams={home:fullKickoffTeam(params.home),away:fullKickoffTeam(params.away)},state=ctx.state;
 let focus=params.focus==='away'?'away':'home';const ready={home:false,away:false};
 const node=el('div',{class:'screen screen--kits kickoff-reference kickoff-kits'},el('img',{class:'kickoff-art',src:'assets/ui/kickoff/kits.jpg',alt:'Kick Off · seleção de uniformes',draggable:'false'}));
 const button=(text,click,props={})=>el('button',{type:'button',text,onClick:click,...props});
 const canvas=el('canvas',{class:'kickoff-models','aria-label':'Prévia 3D dos dois uniformes'}),preview=playerPreview(canvas);
  // Seleções não têm uniformes no banco de clubes: `nationKits` dá a camisa
  // de verdade de cada país (era tudo branco porque as 179 seleções geradas
  // compartilhavam o mesmo preenchimento claro).
  const kitFor=team=>{
   const custom=kitsOf(team.id);
   if(custom.length)return custom;
   return nationKits(team);
  };
 const listOf=side=>kitFor(teams[side]);
 const selected=side=>{const list=listOf(side);return list[Math.min(list.length-1,Math.max(0,state.kits[teams[side].id]||0))];};
 const back=()=>ctx.go('kickoff',params.returnParams||params);
 // Os kits de seleção são gerados (não estão no banco): o índice do clube não
 // serve, então o fluxo leva direto as cores nacionais escolhidas.
 function next(){ctx.go('stadiums',{...params,homeKit:state.kits[teams.home.id]||0,awayKit:state.kits[teams.away.id]||0,homeColors:teams.home.isNationalTeam?selected('home').colors:null,awayColors:teams.away.isNationalTeam?selected('away').colors:null,isNationalMatch:!!(teams.home.isNationalTeam&&teams.away.isNationalTeam),returnTo:'kits',competitionReturnTo:params.returnParams?.returnTo||'menu'});}
 function confirm(side){ready[side]=!ready[side];focus=side==='home'?'away':'home';paint(false);}
 function step(side,delta){const list=listOf(side);state.kits[teams[side].id]=((state.kits[teams[side].id]||0)+delta+list.length)%list.length;ready[side]=false;focus=side;paint();}
 node.append(el('header',{class:'kickoff-header'},el('b',{text:'XFC'}),el('strong',{text:'KICK OFF'}),el('span',{text:'Classic Match'}),el('small',{text:'Select Kits'})),canvas,el('span',{class:'kickoff-edge kickoff-edge--home',text:'HOME'}),el('span',{class:'kickoff-edge kickoff-edge--away',text:'AWAY'}));
 const panels={};for(const side of ['home','away']){panels[side]=el('section',{class:`kickoff-kit-picker kickoff-kit-picker--${side}`});node.append(panels[side]);}
 const start=button('Continuar →',next,{class:'kickoff-kits-next',disabled:true});
 function paint(updateModels=true){for(const side of ['home','away']){
  const team=teams[side],list=listOf(side),kit=selected(side),index=Math.max(0,list.indexOf(kit)),label=side==='home'?'mandante':'visitante';
  panels[side].replaceChildren(el('small',{text:side.toUpperCase()}),el('b',{text:team.name}),el('div',{class:'kickoff-kit-carousel'},button('‹',()=>step(side,-1),{'aria-label':`Uniforme anterior (${label})`}),...[-1,0,1].map(offset=>{const k=list[(index+offset+list.length)%list.length];return button('',()=>step(side,offset),{class:`kickoff-kit-shirt ${offset===0?'is-current':''}`,'aria-label':`${label}: ${k.name}`,html:kitShirt(k)?`<img src="${kitShirt(k)}" alt="">`:kitFigureSvg(k,{width:104})});}),button('›',()=>step(side,1),{'aria-label':`Próximo uniforme (${label})`})),el('span',{text:kit.name}),button(ready[side]?'READY ✓':'Confirmar uniforme',()=>confirm(side),{'aria-label':`Confirmar uniforme (${label})`,'aria-pressed':String(ready[side]),class:ready[side]?'is-ready':''}));
 }start.disabled=!(ready.home&&ready.away);if(updateModels)preview.show(['home','away'].map(side=>({team:teams[side],kit:selected(side)})));}
 node.append(start,el('footer',{class:'kickoff-footer'},button('A · Selecionar',()=>confirm(focus)),button('B · Voltar',back)));
 paint();return {node,unmount(){preview.dispose();},onKey(e){if(['Escape','Backspace'].includes(e.key)){back();return true;}if(document.activeElement?.matches('button'))return false;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){step(focus,e.key==='ArrowLeft'?-1:1);return true;}if(e.key==='ArrowUp'||e.key==='ArrowDown'){focus=focus==='home'?'away':'home';return true;}if(e.key==='Enter'){if(ready.home&&ready.away)next();else confirm(focus);return true;}return false;}};
}

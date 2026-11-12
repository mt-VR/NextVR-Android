import {el} from './dom.js';
import {xfcWordmark} from './brand.js';
import {getTeam} from '../data/teams.js';
export const button=(text,action,props={})=>el('button',{type:'button',text,onClick:action,...props});
export const label=(text,input)=>el('label',{},el('span',{text}),input);
export const select=(name,values,value)=>el('select',{'aria-label':name},...Object.entries(values).map(([v,text])=>el('option',{value:v,text,selected:String(v)===String(value)})));
export const crest=id=>el('img',{class:'season-crest',src:getTeam(id)?.crest,alt:getTeam(id)?.name||'',draggable:'false'});
export const panel=(title,...children)=>el('section',{class:'season-panel'},el('h2',{text:title}),...children);
export function icon(name){
 const paths={calendar:'M3 5h18v16H3z M3 10h18 M7 2v6 M17 2v6 M7 14h2 M12 14h2 M17 14h1 M7 18h2 M12 18h2',club:'M12 2l9 4v6c0 6-9 10-9 10S3 18 3 12V6z',transfer:'M3 7h17l-4-4 M21 17H4l4 4',settings:'M12 3v3 M12 18v3 M3 12h3 M18 12h3 M5 5l3 3 M16 16l3 3 M5 19l3-3 M16 8l3-3 M17 12a5 5 0 1 0-10 0a5 5 0 1 0 10 0',player:'M16 6a4 4 0 1 0-8 0a4 4 0 1 0 8 0 M4 22v-5c0-6 16-6 16 0v5z',shirt:'M8 3l-6 4 3 5 3-2v12h8V10l3 2 3-5-6-4c0 4-8 4-8 0z',office:'M3 7h18v14H3z M8 7V3h8v4 M3 12h18 M11 11h2v4h-2z',play:'M6 3l15 9-15 9z',save:'M3 3h15l3 3v15H3z M7 3v6h10V3 M7 21v-8h10v8',target:'M21 12a9 9 0 1 0-18 0a9 9 0 1 0 18 0 M16 12a4 4 0 1 0-8 0a4 4 0 1 0 8 0',boot:'M4 4h5v8l11 5v4H2v-7z',celebrate:'M3 3l4 7h10l4-7 M9 10v11 M15 10v11 M15 4a3 3 0 1 0-6 0a3 3 0 1 0 6 0'};
 return el('span',{class:'season-icon','aria-hidden':'true',html:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${paths[name]||paths.club}"/></svg>`});
}
export function tile(title,subtitle,name,action,props={}){return el('button',{type:'button',class:'season-tile',onClick:action,...props},icon(name),el('span',{},el('b',{text:title}),subtitle&&el('small',{text:subtitle})),el('span',{text:'›',class:'season-chevron'}));}
export function shell(ctx,{title,subtitle='',career,view='entry',back,go}){
 const node=el('div',{class:`screen screen--career season-screen season-${view}`});
 const header=el('header',{class:'season-header'},el('div',{class:'season-logo',html:xfcWordmark()}),el('nav',{'aria-label':'Carreira'}));
 const nav=header.querySelector('nav');
 for(const [text,target]of [['Início','entry'],['Central','hub'],['Meu Clube','club'],['Transferências','transfers'],['Escritório','office'],['Personalizar','custom']]){
  if(target==='custom'&&career?.kind==='manager')continue;
  nav.append(button(text,()=>go(target),{disabled:!career&&target!=='entry',class:target===view?'is-active':''}));
 }
 if(career)header.append(el('div',{class:'season-profile'},crest(career.clubId),el('div',{},el('b',{text:getTeam(career.clubId).name}),el('small',{text:career.kind==='manager'?`Técnico · Temporada ${career.season}`:`${career.player.name} · Nv. ${career.player.level} · XP ${career.player.xp}`}),el('progress',{value:career.player.xp%250,max:250,'aria-label':'Progresso da carreira'}))));
 const content=el('main',{class:'season-content'});node.append(header,el('div',{class:'season-heading'},el('h1',{text:title}),el('p',{text:subtitle})),content,el('footer',{class:'season-footer'},button('◯ Voltar',back),el('span',{text:'XFC 27 · MAIS QUE FUTEBOL'})));
 return {node,content};
}
export const fixtureNode=g=>el('div',{class:'season-fixture'},crest(g.home),el('div',{},el('strong',{text:g.score?g.score.join(' – '):'×'}),el('small',{text:`${getTeam(g.home).name} × ${getTeam(g.away).name}`})),crest(g.away));
export const dateLabel=date=>new Date(date).toLocaleDateString('pt-BR',{timeZone:'UTC',weekday:'short',day:'2-digit',month:'long'});

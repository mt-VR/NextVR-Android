import { el } from '../ui/dom.js';
import { STADIUMS, FEATURED_STADIUMS } from '../match3d/stadiums.js';
import { hotspot, referenceMenu, refNavigation } from '../ui/reference-menu.js';
export function stadiumsScreen(ctx, params={}) {
  const returnTo=params.returnTo||'menu';
  const node=referenceMenu('screen--stadiums','stadiums','Escolha de estádios');
  let page=0,selected=0;
  const pages=[FEATURED_STADIUMS,[1,2,3,4,5,0]];
  const back=()=>ctx.go(returnTo,{...params,returnTo:params.competitionReturnTo||'menu'});
  function enter(index=selected){ctx.go('play',{
    home:params.home||ctx.state.selection?.home||'fc-barcelona',away:params.away||ctx.state.selection?.away||'real-madrid',
    homeKit:params.homeKit??0,awayKit:params.awayKit??0,minutes:params.minutes??6,difficulty:params.difficulty||'normal',
    stadium:index,competition:params.competition||null,returnTo:params.competitionReturnTo||'menu'});}
  const info=el('section',{class:'ref-stadium-info',hidden:true,'aria-live':'polite'});
  const cards=pages[0].map((id,i)=>hotspot(STADIUMS[id].name,[63+i*239,571,235,190],()=>enter(pages[page][i]),
    {class:'ref-button stadiums__card',dataset:{stadium:String(id)}}));
  function select(index){selected=index;const s=STADIUMS[index];info.hidden=index===0&&page===0;
    info.replaceChildren(el('h2',{text:s.name}),el('p',{text:s.city}),el('p',{text:`Capacidade: ${s.capacity}`}),el('p',{text:s.tag}));
    cards.forEach((c,i)=>{const active=pages[page][i]===index;c.classList.toggle('ref-stadium-selected',active);c.setAttribute('aria-pressed',String(active));});
  }
  function changePage(delta){page=(page+delta+pages.length)%pages.length;
    cards.forEach((c,i)=>{const s=STADIUMS[pages[page][i]];c.dataset.stadium=String(pages[page][i]);c.setAttribute('aria-label',s.name);c.title=s.name;
      c.replaceChildren(...(page?[el('span',{class:'ref-stadium-replacement'},el('img',{src:s.file,alt:''}),el('span',{text:s.name}))]:[]));});select(pages[page][0]);
  }
  cards.forEach((c,i)=>{c.addEventListener('focus',()=>select(pages[page][i]));c.addEventListener('pointerenter',()=>select(pages[page][i]));});
  node.append(el('div',{class:'stadiums__grid'},...cards),info,hotspot('Estádios anteriores',[5,622,49,82],()=>changePage(-1)),hotspot('Mais estádios',[1512,622,50,82],()=>changePage(1)),
    hotspot('Selecionar estádio',[48,815,146,58],()=>enter()),hotspot('Visualizar estádio',[330,815,235,58],()=>{
      const s=STADIUMS[selected];const dialog=el('section',{class:'ref-dialog',role:'dialog','aria-label':s.name},el('h2',{text:s.name}),el('img',{src:s.file,alt:s.name,style:{height:'65%',objectFit:'contain'}}),el('button',{type:'button',text:'Jogar neste estádio',onClick:()=>enter()}),el('button',{type:'button',text:'Fechar',onClick:()=>dialog.remove()}));node.append(dialog);dialog.querySelector('button').focus();
    }));
  refNavigation(node,ctx,[['Início',258,82,'menu'],['Torneios',365,112,'modes'],['Treino',508,90,'training'],['Estádios',607,126,'stadiums'],['Configurações',751,164,'customise']],back);
  return {node,onKey(e){const dialog=node.querySelector('.ref-dialog');if(dialog){if(e.key==='Escape'){dialog.remove();return true;}return false;}
    if(e.key==='Escape'||e.key==='Backspace'){back();return true;}
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){let i=pages[page].indexOf(selected);i=(i+(e.key==='ArrowRight'?1:5))%6;select(pages[page][i]);cards[i].focus();return true;}
    if(e.key==='Enter'&&!document.activeElement?.matches('button')){enter();return true;}return false;}};
}

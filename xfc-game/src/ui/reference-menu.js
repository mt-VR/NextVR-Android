// Artes fornecidas pelo usuário; toda área de interação é um botão DOM.
import { el } from './dom.js';
export function hotspot(label, rect, onClick, attrs = {}) {
  const [x,y,w,h] = rect;
  return el('button', { type:'button', class:'ref-button', 'aria-label':label, title:label,
    style:{left:`${x/1568*100}%`,top:`${y/882*100}%`,width:`${w/1568*100}%`,height:`${h/882*100}%`},
    onClick, ...attrs }, el('span',{class:'ref-sr',text:label}));
}
export function referenceMenu(className, file, label) {
  return el('div',{class:`screen ${className} reference-screen`},
    el('img',{class:'ref-art',src:`assets/menus/${file}.jpg`,alt:label,draggable:'false'}));
}
export function refNavigation(node, ctx, links, back) {
  node.append(hotspot('Início',[45,22,165,65],()=>ctx.go('menu')));
  for(const [label,x,w,target] of links) node.append(hotspot(label,[x,26,w,57],()=>{if(node.classList.contains(`screen--${target}`)||(target==='training'&&node.classList.contains('screen--training-select')))return;ctx.go(target,{returnTo:'modes'});}));
  const p=ctx.state.profile;
  node.append(el('button',{class:'ref-profile',type:'button',onClick:()=>ctx.go('customise'), 'aria-label':'Perfil e configurações'},
    el('span',{text:p.name || 'Jogador 1'}),el('small',{text:`Nível ${p.level || 1}`})));
  node.append(hotspot('Voltar',[209,813,115,65],back,{class:'ref-button ref-back'}));
}
export function gridKeys(buttons, columns, back) {
  let focus=0;
  buttons.forEach((b,i)=>b.addEventListener('focus',()=>{focus=i;buttons.forEach(c=>c.classList.toggle('ref-current',c===b));}));
  return event=>{
    const delta={ArrowRight:1,ArrowLeft:-1,ArrowDown:columns,ArrowUp:-columns}[event.key];
    if(delta){focus=(focus+delta+buttons.length)%buttons.length;buttons[focus].focus();return true;}
    if(event.key==='Escape'||event.key==='Backspace'){back();return true;}
    if((event.key==='Enter'||event.key===' ') && !document.activeElement?.matches('button')){buttons[focus].click();return true;}
    return false;
  };
}

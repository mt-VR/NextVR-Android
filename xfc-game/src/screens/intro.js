// A própria arte enviada, sem logos redesenhados, filtros ou textos sobrepostos.
import { el } from '../ui/dom.js';
export function introScreen(ctx) {
  let timer=null;
  const advance=()=>{clearTimeout(timer);timer=null;ctx.go('launch');};
  const node=el('div',{class:'screen screen--intro intro-reference',onClick:advance},
    el('img',{class:'intro-reference__art',src:'assets/ui/quick/loading.png',alt:'XF Esportes · XFC',draggable:'false'}));
  return {node,mount(){timer=setTimeout(advance,4200);},unmount(){clearTimeout(timer);},
    onKey(e){if(['Enter',' ','Escape'].includes(e.key)){advance();return true;}return false;}};
}

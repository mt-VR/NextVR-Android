import {portraitFor} from '../data/asset-library.js';
// Editor de posições no toque/mouse e teclado. Só confirma ao soltar; cancelar
// restaura a posição. Coordenadas de tela vêm do retângulo escalado do campo.
import { el, initialsOf } from './dom.js';
export const clampPlan = (value, min, max) => Math.max(min, Math.min(max, value));
export function planToPitch(base) {
  return { x: clampPlan(50-base.z/64*100,7,93), y: clampPlan(50-base.x,7,93) };
}
export function pitchToPlan(point) {
  return { x: 50-clampPlan(point.y,7,93), z: (50-clampPlan(point.x,7,93))*64/100 };
}
export function positionCard(card,point){card.style.left=`${point.x}%`;card.style.top=`${point.y}%`;}
export function enablePositionDrag(card,pitch,{getPosition,onChange}) {
  let drag=null;
  const restore=()=>{if(!drag)return;positionCard(card,drag.origin);drag=null;card.classList.remove('is-dragging');card.setAttribute('aria-grabbed','false');};
  card.addEventListener('pointerdown',e=>{
    if(drag||e.button>0)return;
    e.preventDefault();card.focus({preventScroll:true});
    drag={id:e.pointerId,origin:{...getPosition()},point:{...getPosition()},x:e.clientX,y:e.clientY};
    card.setPointerCapture?.(e.pointerId);card.classList.add('is-dragging');card.setAttribute('aria-grabbed','true');
  });
  card.addEventListener('pointermove',e=>{
    if(!drag||drag.id!==e.pointerId)return;
    const b=pitch.getBoundingClientRect();
    drag.point={x:clampPlan(drag.origin.x+(e.clientX-drag.x)/b.width*100,7,93),y:clampPlan(drag.origin.y+(e.clientY-drag.y)/b.height*100,7,93)};
    positionCard(card,drag.point);
  });
  card.addEventListener('pointerup',e=>{
    if(!drag||drag.id!==e.pointerId)return;
    const point=drag.point;drag=null;card.classList.remove('is-dragging');card.setAttribute('aria-grabbed','false');onChange(point);
  });
  card.addEventListener('pointercancel',restore);card.addEventListener('lostpointercapture',restore);
  card.addEventListener('keydown',e=>{
    const dirs={ArrowLeft:[-2,0],ArrowRight:[2,0],ArrowUp:[0,-2],ArrowDown:[0,2]};
    if(e.key==='Escape'&&drag){e.stopPropagation();restore();return;}
    if(!dirs[e.key])return;
    e.preventDefault();e.stopPropagation();const p=getPosition(),d=dirs[e.key];
    const point={x:clampPlan(p.x+d[0],7,93),y:clampPlan(p.y+d[1],7,93)};positionCard(card,point);onChange(point);
  });
}
export function footballCard(player,{className='',crest=null}={}){
  return el('button',{type:'button',class:`football-card ${className}`,'aria-label':`${player.name} · ${player.pos||player.role} · arraste ou use as setas para mudar a posição`},
    el('b',{class:'football-card__rating',text:String(player.ovr||player.rating||'—')}),
    el('span',{class:'football-card__role',text:player.pos||player.role}),
    portraitFor(player)?el('img',{class:'football-card__portrait',src:portraitFor(player),alt:'',draggable:'false'}):el('span',{class:'football-card__initials',text:initialsOf(player.name)}),
    crest&&el('img',{class:'football-card__crest',src:crest,alt:'',draggable:'false'}),
    el('strong',{class:'football-card__name',text:player.name})
  );
}

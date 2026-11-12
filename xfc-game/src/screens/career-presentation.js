import {el} from '../ui/dom.js';
import {getTeam} from '../data/teams.js';
import {completeCareerPresentation,presentationShots} from '../data/career-presentations.js';
import {createCareerCinematic} from '../match3d/career-cinematic.js';
export function careerPresentation(ctx,{career,event,persist,go}){
 const club=getTeam(event.clubId),transfer=event.type==='transfer',renewal=event.type==='renewal',headline=transfer?'TRANSFERÊNCIA OFICIAL':renewal?'CONTRATO RENOVADO':'UM NOVO CAPÍTULO';
 const canvas=el('canvas',{'aria-label':'Apresentação cinematográfica do seu jogador',class:'career-film-canvas'}),title=el('h1',{text:headline}),subtitle=el('p',{text:`${event.player.name} • ${club.name} • Nº ${event.player.number}`}),phase=el('p',{class:'career-film-phase',text:'Preparando apresentação…','aria-live':'polite'}),progress=el('progress',{max:1,value:0,'aria-label':'Progresso da apresentação'}),badge=el('img',{src:club.crest,alt:`Escudo do ${club.name}`});
 let dead=false,finished=false,film=null,raf=0,last=0,elapsed=0,ready=false;
 const skip=el('button',{type:'button',class:'career-film-skip',text:'Pular apresentação',onClick:()=>finish(true)});
 const node=el('section',{class:'screen career-film',dataset:{eventId:event.id,eventType:event.type},'aria-label':headline},el('style',{text:styles}),canvas,el('div',{class:'career-film-vignette'}),el('header',{class:'career-film-header'},el('span',{text:'XFC 27 / CARREIRA DE JOGADOR'}),skip),el('div',{class:'career-film-title'},badge,el('div',{},title,subtitle)),el('footer',{class:'career-film-footer'},phase,progress));
 function finish(skipped){if(dead||finished)return;const previous=event.status;if(!completeCareerPresentation(career,event.id,skipped))return;if(!persist()){event.status=previous;phase.textContent='Não foi possível salvar. Tente continuar novamente.';skip.textContent='Continuar carreira';return;}finished=true;go('journey');}
 const duration=presentationShots(event.type).reduce((n,s)=>n+s.duration,0),reducedMotion=globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 function tick(now){if(dead)return;if(ready&&!document.hidden){if(last)elapsed+=Math.max(0,(now-last)/1000);const frame=film.setTime(elapsed);if(frame){if(phase.dataset.shot!==frame.id){phase.dataset.shot=frame.id;phase.textContent=frame.title;}progress.value=Math.min(1,elapsed/duration);node.dataset.shot=frame.id;const end=frame.id==='club';node.classList.toggle('is-finale',end);title.textContent=end?club.name:headline;
  // Pequeno fade nas trocas de plano; flash só afeta a luz 3D, nunca tela branca.
  const edge=Math.min(frame.progress*frame.duration,(1-frame.progress)*frame.duration);canvas.style.opacity=String(Math.min(1,edge/.18));if(frame.done){finish(false);return;}}}last=document.hidden?0:now;raf=requestAnimationFrame(tick);}
 function visibility(){last=0;}
 async function mount(){document.addEventListener('visibilitychange',visibility);try{const created=await createCareerCinematic(canvas,event,{reducedMotion});if(dead){created.dispose();return;}film=created;ready=true;node.dataset.ready='true';phase.textContent='ANÚNCIO OFICIAL';film.setTime(0);raf=requestAnimationFrame(tick);}catch(error){if(dead)return;node.dataset.fallback='true';phase.textContent='Apresentação 3D indisponível neste dispositivo. Seu contrato foi mantido.';skip.textContent='Continuar carreira';ctx.toast('Você pode continuar a carreira sem a apresentação 3D.',{variant:'warn'});}}
 return{node,mount,unmount(){dead=true;cancelAnimationFrame(raf);document.removeEventListener('visibilitychange',visibility);film?.dispose();},onKey(e){if(e.key==='Escape'){finish(true);return true;}return false;}};
}
const styles=`
.career-film{position:relative;width:100%;height:100%;overflow:hidden;background:#0b131e;color:#f5f4ef;font-family:Arial,sans-serif;isolation:isolate}
.career-film-canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.career-film-vignette{position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(5,12,22,.8),transparent 23%,transparent 65%,rgba(5,12,22,.94));box-shadow:inset 0 0 100px #07101b55}
.career-film-header{position:absolute;top:5%;left:4%;right:4%;display:flex;align-items:center;justify-content:space-between;font-size:clamp(10px,1.3vw,16px);letter-spacing:.16em}
.career-film-skip{border:1px solid #b3c4d280;background:#101d2ccc;color:#fff;border-radius:5px;padding:12px 20px;font:inherit;letter-spacing:0;cursor:pointer;min-height:44px}
.career-film-skip:focus-visible{outline:3px solid #e5ca86;outline-offset:4px}
.career-film-title{position:absolute;bottom:13%;left:5%;display:flex;align-items:center;gap:18px;pointer-events:none;transition:bottom .7s}
.career-film-title img{width:56px;height:64px;object-fit:contain;filter:drop-shadow(0 2px 10px #0008)}
.career-film-title h1{font-size:clamp(18px,2.9vw,38px);margin:0 0 7px;font-weight:800;letter-spacing:.02em}
.career-film-title p{font-size:clamp(12px,1.45vw,19px);margin:0;color:#d1dce5}
.career-film-footer{position:absolute;left:5%;right:5%;bottom:4%;display:flex;align-items:center;justify-content:space-between;gap:20px}
.career-film-phase{font-size:clamp(10px,1.1vw,14px);letter-spacing:.15em;margin:0;color:#e2c789}
.career-film-footer progress{width:20%;height:3px;appearance:none;border:0;background:#ffffff30}
.career-film-footer progress::-webkit-progress-bar{background:#ffffff30}.career-film-footer progress::-webkit-progress-value{background:#e2c789}
.career-film.is-finale .career-film-vignette{background:linear-gradient(90deg,#07101bea,#07101b66)}
.career-film.is-finale .career-film-title{bottom:40%}.career-film.is-finale .career-film-title img{width:100px;height:115px}
@media(prefers-reduced-motion:reduce){.career-film *{transition:none!important}}
`;

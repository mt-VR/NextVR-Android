// Orçamentos fixos por partida: não recriar framebuffer no meio do jogo mobile.
export const GRAPHICS_PRESETS=Object.freeze({
  low:Object.freeze({label:'Baixa',pixelRatio:.6,antialias:false,shadows:false,shadowSize:512,grass:0,surface:false,anisotropy:2}),
  medium:Object.freeze({label:'Média',pixelRatio:.85,antialias:false,shadows:false,shadowSize:512,grass:0,surface:true,anisotropy:4}),
  high:Object.freeze({label:'Alta',pixelRatio:1,antialias:true,shadows:true,shadowSize:1024,grass:16000,surface:true,anisotropy:4}),
  ultra:Object.freeze({label:'Ultra',pixelRatio:1.5,antialias:true,shadows:true,shadowSize:2048,grass:28000,surface:true,anisotropy:8})
});
export function graphicsPreset(value,lowPower=false){
  const id=Object.hasOwn(GRAPHICS_PRESETS,value)?value:lowPower?'low':'high';
  return {id,...GRAPHICS_PRESETS[id]};
}

// Reserva uma vaga para o controlado; o orçamento inclui ele, não soma +1.
export function selectShadowCasters(players,hero,ball,graphics){
  if(!graphics.shadows)return new Set();
  const active=players.filter(p=>p.active||p.dismissal);
  if(graphics.id==='ultra')return new Set(active);
  const distance=p=>Math.hypot(p.x-ball.x,p.z-ball.z);
  const near=active.filter(p=>p!==hero&&distance(p)<20).sort((a,b)=>distance(a)-distance(b));
  return new Set([...(active.includes(hero)?[hero]:[]),...near].slice(0,6));
}

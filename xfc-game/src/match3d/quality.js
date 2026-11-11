// Resolução fixa por partida; Ultra móvel limita custo sem redimensionar canvas em jogo.
export const GRAPHICS_PRESETS=Object.freeze({
  low:Object.freeze({label:'Baixa',pixelRatio:.6,antialias:false,shadows:false,shadowSize:512,shadowPlayers:0,shadowHz:0,grass:0,surface:false,anisotropy:2}),
  medium:Object.freeze({label:'Média',pixelRatio:.85,antialias:false,shadows:false,shadowSize:512,shadowPlayers:0,shadowHz:0,grass:0,surface:true,anisotropy:4}),
  high:Object.freeze({label:'Alta',pixelRatio:1,antialias:true,shadows:true,shadowSize:1024,shadowPlayers:6,shadowHz:30,grass:16000,surface:true,anisotropy:4}),
  ultra:Object.freeze({label:'Ultra',pixelRatio:1.25,antialias:true,shadows:true,shadowSize:1536,shadowPlayers:10,shadowHz:30,grass:20000,surface:true,anisotropy:8})
});
export function graphicsPreset(value,lowPower=false){
  const id=Object.hasOwn(GRAPHICS_PRESETS,value)?value:lowPower?'low':'high';
  const graphics={id,...GRAPHICS_PRESETS[id],mobile:lowPower,jerseySize:lowPower?512:1024};
  if(id==='ultra'&&lowPower)Object.assign(graphics,{pixelRatio:1,antialias:false,shadowSize:1024,shadowPlayers:6,shadowHz:20,grass:12000,anisotropy:4});
  return graphics;
}

// Controlado + atletas próximos, nunca o elenco todo indiscriminadamente.
export function selectShadowCasters(players,hero,ball,graphics){
  if(!graphics.shadows)return new Set();
  const active=players.filter(p=>p.active||p.dismissal);
  const distance=p=>Math.hypot(p.x-ball.x,p.z-ball.z);
  const near=active.filter(p=>p!==hero&&distance(p)<(graphics.id==='ultra'?30:20)).sort((a,b)=>distance(a)-distance(b));
  return new Set([...(active.includes(hero)?[hero]:[]),...near].slice(0,graphics.shadowPlayers??6));
}

/** Histerese: reduz detalhe secundário após 2 amostras lentas, recupera após 6 boas.
 * Nunca muda pixelRatio/framebuffer ou qualidade das malhas/materiais.
 */
export function createDetailGovernor(graphics){
  const base={grass:graphics.grass,shadowPlayers:graphics.shadowPlayers,shadowHz:graphics.shadowHz};
  let level=0,slow=0,fast=0;
  return {get level(){return level;},sample(fps){
    if(graphics.id!=='ultra'||!Number.isFinite(fps))return false;
    slow=fps<30?slow+1:0;fast=fps>52?fast+1:0;
    const next=slow>=2?Math.min(2,level+1):fast>=6?Math.max(0,level-1):level;
    if(next===level)return false;
    level=next;slow=fast=0;
    const factor=[1,.7,.4][level];
    graphics.grass=Math.round(base.grass*factor);
    graphics.shadowPlayers=Math.max(3,Math.round(base.shadowPlayers*factor));
    graphics.shadowHz=Math.max(10,Math.round(base.shadowHz*factor));
    return true;
  }};
}

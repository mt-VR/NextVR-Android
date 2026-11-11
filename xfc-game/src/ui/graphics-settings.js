import {el} from './dom.js';
import {saveProfile} from '../state.js';
import {GRAPHICS_PRESETS} from '../match3d/quality.js';
export function graphicsSettings(state){
  const select=el('select',{'aria-label':'Qualidade gráfica',onChange:e=>{state.profile.graphicsQuality=e.target.value;saveProfile(state);}},
    el('option',{value:'auto',selected:!state.profile.graphicsQuality||state.profile.graphicsQuality==='auto',text:'Automática (segura no celular)'}),
    ...Object.entries(GRAPHICS_PRESETS).map(([id,q])=>el('option',{value:id,selected:state.profile.graphicsQuality===id,text:q.label})));
  return el('div',{class:'graphics-settings'},el('label',{},el('span',{text:'Qualidade gráfica'}),select),
    el('p',{text:'Aplica na próxima partida. Alta/Ultra exigem mais GPU e bateria. Se houver lentidão, use Baixa ou Média; FPS não é garantido.'}));
}

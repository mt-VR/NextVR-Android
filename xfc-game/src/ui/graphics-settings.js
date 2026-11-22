import {el} from './dom.js';
import {saveProfile} from '../state.js';
import {GRAPHICS_PRESETS} from '../match3d/quality.js';
// Estilo do atleta: 'modern' usa a malha cheia da Micah (6.5 mil triângulos);
// 'low-poly-psp' troca por uma silhueta de ~320 triângulos presas aos mesmos
// ossos, no espírito do PES 2013 de PSP / Bomba Patch.
const PLAYER_STYLES=[
  ['modern','Moderno (detalhado)'],
  ['low-poly-psp','Low-poly PSP (PES 2013)']
];
export function graphicsSettings(state){
  const select=el('select',{'aria-label':'Qualidade gráfica',onChange:e=>{state.profile.graphicsQuality=e.target.value;saveProfile(state);}},
    el('option',{value:'auto',selected:!state.profile.graphicsQuality||state.profile.graphicsQuality==='auto',text:'Automática (segura no celular)'}),
    ...Object.entries(GRAPHICS_PRESETS).map(([id,q])=>el('option',{value:id,selected:state.profile.graphicsQuality===id,text:q.label})));
  const playerStyle=state.profile.playerStyle==='low-poly-psp'?'low-poly-psp':'modern';
  const styleSelect=el('select',{'aria-label':'Visual dos jogadores',onChange:e=>{state.profile.playerStyle=e.target.value;saveProfile(state);}},
    ...PLAYER_STYLES.map(([value,text])=>el('option',{value,selected:playerStyle===value,text})));
  return el('div',{class:'graphics-settings'},el('label',{},el('span',{text:'Qualidade gráfica'}),select),
    el('label',{},el('span',{text:'Visual dos jogadores'}),styleSelect),
    el('p',{text:'Aplica na próxima partida. Ultra limita resolução/sombras no celular e adapta grama e sombras se o FPS cair. Se houver lentidão, use Baixa ou Média; FPS não é garantido.'}),
    el('p',{text:'Low-poly PSP deixa o atleta com poucos polígonos e cores chapadas, como no PES 2013 de PSP com Bomba Patch. Também é a opção mais leve para celulares fracos.'}));
}

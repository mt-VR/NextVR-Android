import {el} from '../ui/dom.js';
import {ASSET_LIBRARY,LIBRARY_KITS,libraryAsset,setAssetChoice,assetChoice} from '../data/asset-library.js';
import {TEAMS} from '../data/teams.js';
import {saveProfile} from '../state.js';

const groups={all:'Todos',faces:'Faces / retratos',marks:'Escudos e bandeiras',kits:'Camisas / atlas',icons:'Ícones',other:'Outros recortes'};
export function assetLibraryScreen(ctx,params={}){
  let category=params.category||'faces',page=0,selected=null;
  const pageSize=36;
  const team=el('select',{'aria-label':'Time de destino'},TEAMS.map(t=>el('option',{value:t.id,text:t.name})));
  team.value=params.teamId||ctx.state.selection.home||TEAMS[0].id;
  const player=el('select',{'aria-label':'Jogador de destino'});
  function updatePlayers(){const t=TEAMS.find(t=>t.id===team.value);player.replaceChildren(...[...(t?.players||[]),...(t?.substitutes||[])].map(p=>el('option',{value:p.id,text:`${p.name} · ${p.pos||p.role||''}`})));if(params.playerId)player.value=params.playerId;}
  updatePlayers();team.addEventListener('change',()=>{updatePlayers();detail();});player.addEventListener('change',detail);
  const search=el('input',{type:'search',placeholder:'Número do recorte…','aria-label':'Buscar recorte',onInput:()=>{page=0;paint();}});
  const source=el('select',{'aria-label':'Origem',onChange:()=>{page=0;paint();}},el('option',{value:'',text:'Todas as origens'}),[1,2,3,4,5,6].map(n=>el('option',{value:n,text:`Imagem ${n}`})));
  const grid=el('div',{class:'asset-library__grid','aria-label':'Recortes enviados'}),status=el('p',{class:'asset-library__status','aria-live':'polite'}),preview=el('div',{class:'asset-library__preview'}),actions=el('div',{class:'asset-library__actions'});
  const tabs=el('nav',{'aria-label':'Tipos de asset'},Object.entries(groups).map(([id,name])=>el('button',{type:'button',text:name,'data-category':id,onClick:()=>{category=id;page=0;selected=null;paint();detail();}})));
  const prev=el('button',{type:'button',text:'← Anterior',onClick:()=>{page--;paint();}}),next=el('button',{type:'button',text:'Próxima →',onClick:()=>{page++;paint();}});
  function destination(){
    if(selected?.category==='faces')return ['faces',player.value];
    if(selected?.category==='marks')return ['crests',team.value];
    if(selected?.category==='icons')return ['icons','profile'];
    if(selected?.category==='kits'&&LIBRARY_KITS.some(k=>k.id===selected.id))return ['kits',team.value];
    return null;
  }
  function apply(value){
    const target=destination();if(!target)return;
    const previous=ctx.state.profile.assetOverrides?JSON.parse(JSON.stringify(ctx.state.profile.assetOverrides)):{};
    if(!setAssetChoice(ctx.state.profile,...target,value))return;
    if(!saveProfile(ctx.state)){ctx.state.profile.assetOverrides=previous;ctx.toast('Não foi possível salvar. A escolha não foi aplicada.');return;}
    ctx.toast(value===null?'Personalização removida.':'Asset aplicado e salvo.');detail();
  }
  function detail(){
    if(!selected){preview.replaceChildren(el('p',{text:'Selecione um recorte para ampliar e aplicar.'}));actions.replaceChildren();return;}
    const target=destination(),active=target?assetChoice(...target):null;
    preview.replaceChildren(el('img',{class:selected.transparent?'is-transparent':'',src:selected.file,alt:`Recorte ${selected.id}`,decoding:'async'}),el('h2',{text:`Recorte #${selected.id}`}),el('p',{text:`Imagem ${selected.source} · fonte ${selected.w} × ${selected.h} px${selected.transparent?' · PNG sem fundo':''}`}),el('small',{text:selected.transparent?'Fundo preto externo removido. Fonte original preservada; sem redesenhar o escudo.':'Imagem fornecida; não é uma face 3D nem identificação verificada.'}));
    const label=({faces:'Aplicar retrato no jogador',marks:'Usar escudo no time',kits:'Vestir uniforme no time',icons:'Usar ícone no perfil'})[selected.category];
    actions.replaceChildren(el('p',{text:target?`Escolha salva: ${active==='original'?'original':active?'#'+active:'padrão'}. Vale nos menus e na próxima partida.`:'Recorte de referência. Sem aplicação automática: imagem composta, fragmento ou atlas ainda não adaptado.'}));
    if(target)actions.append(el('button',{type:'button',class:'asset-library__apply',text:label,onClick:()=>apply(selected.id)}),el('button',{type:'button',text:'Restaurar padrão',onClick:()=>apply(selected.category==='marks'?'original':null)}));
    player.parentElement.hidden=selected.category!=='faces';
  }
  function paint(){
    const query=search.value.trim().replace('#','');
    const filtered=ASSET_LIBRARY.filter(a=>(category==='all'||a.category===category)&&(!source.value||a.source===Number(source.value))&&(!query||String(a.id).includes(query)));
    const pages=Math.max(1,Math.ceil(filtered.length/pageSize));page=Math.max(0,Math.min(pages-1,page));
    tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===category)));
    status.textContent=`${filtered.length} recortes · página ${page+1}/${pages} · ${ASSET_LIBRARY.length} no pacote`;
    prev.disabled=page===0;next.disabled=page>=pages-1;
    grid.replaceChildren(...filtered.slice(page*pageSize,(page+1)*pageSize).map(a=>el('button',{type:'button',class:'asset-library__item'+(a.transparent?' has-transparent-crest':''),'aria-label':`Selecionar recorte ${a.id}`,onClick:()=>{selected=a;detail();grid.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.getAttribute('aria-label')===`Selecionar recorte ${a.id}`)));}},el('img',{src:a.file,alt:'',loading:'lazy',decoding:'async',width:a.w,height:a.h}),el('span',{text:`#${a.id} · Imagem ${a.source}`}))));
  }
  const node=el('section',{class:'screen screen--asset-library'},
    el('header',{},el('div',{},el('small',{text:'XFC 27 / PERSONALIZAÇÃO'}),el('h1',{text:'Biblioteca enviada'})),el('button',{type:'button',text:'Voltar',onClick:()=>ctx.go(params.returnTo||'customise',params.returnParams||{})})),
    el('p',{class:'asset-library__intro',text:'Os logos originais do jogo são mantidos. A biblioteca só troca um escudo quando você escolhe aplicar. Faces são retratos 2D numerados, sem identidades inferidas.'}),tabs,
    el('div',{class:'asset-library__layout'},el('main',{},el('div',{class:'asset-library__filters'},search,source),status,grid,el('footer',{},prev,next)),
      el('aside',{},el('label',{},el('span',{text:'Time de destino'}),team),el('label',{},el('span',{text:'Jogador de destino'}),player),preview,actions)));
  paint();detail();
  return {node,onKey(e){if(e.key==='Backspace'&&e.target?.closest?.('input,textarea,select'))return false;if(e.key==='Escape'||e.key==='Backspace'){ctx.go(params.returnTo||'customise',params.returnParams||{});return true;}return false;}};
}

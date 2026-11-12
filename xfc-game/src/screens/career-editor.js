import {el} from '../ui/dom.js';
import {button,select,label,tile,panel,shell} from '../ui/career-ui.js';
import {playerPreview} from '../ui/player-preview.js';
import {kitsOf} from '../data/kits.js';
import {TEAM_COUNTRIES,countryTeams} from '../data/team-groups.js';
import {getTeam} from '../data/teams.js';
import {createManagerCareer,saveCareerSlot} from '../data/career-services.js';
import {createCareer,careerTeam,careerAppearance,customiseCareer,CAREER_POSITIONS,CAREER_HAIR,CAREER_HAIR_COLORS,CAREER_BOOTS,CAREER_SKIN,CAREER_NATIONS,CAREER_BEARD,CAREER_FACE,CAREER_BODY} from '../data/career.js';
export function careerEditor(ctx,{career:c,view,kind,go,persist,back}){
 const editing=view==='custom',manager=kind==='manager',blocked=editing&&!!c?.pending;
 if(editing&&(!c||manager)){return {node:el('div',{class:'screen season-screen'},button('Voltar à carreira',back)),onKey(e){if(e.key==='Escape'){back();return true;}return false;}};}
 const draft=JSON.parse(JSON.stringify(editing?c:createCareer())),look=careerAppearance(draft.player.appearance);
 const {node,content}=shell(ctx,{title:editing?'Personalizar Jogador':manager?'Nova Carreira de Técnico':'Nova Carreira de Jogador',subtitle:editing?'Deixe seu jogador do seu jeito. Alterações na prévia 3D; confirme para salvar.':'Escolha o clube inicial. Seus outros modos e cópias salvas serão preservados.',career:c,view:editing?'custom':'create',go,back});
 const form=el('form',{class:'season-editor'}),categories=el('div',{class:'season-categories'}),fields=el('div',{class:'season-editor-fields'}),canvas=el('canvas',{class:'season-player-preview','aria-label':'Prévia 3D do seu atleta'});
 let preview=manager?null:playerPreview(canvas),revision=0;
 const controls={};
 function choose(key,name,values,value){const input=select(name,values,value);controls[key]=input;input.disabled=blocked;input.addEventListener('change',()=>{sync();showPreview();});return label(name,input);}
 function number(key,name,value,min,max){const input=el('input',{type:'number',value,min,max,'aria-label':name,disabled:blocked});controls[key]=input;input.addEventListener('input',()=>{sync();showPreview();});return label(name,input);}
 const name=el('input',{'aria-label':manager?'Nome do técnico':'Nome do atleta',value:editing?draft.player.name:manager?'Meu técnico':'Meu jogador',maxLength:24,required:true,disabled:editing});
 controls.name=name;name.addEventListener('input',()=>{sync();showPreview();});
 const country=select('País do clube',Object.fromEntries(TEAM_COUNTRIES.map(t=>[t,t])),editing?getTeam(c.clubId).country:'Brasil'),clubs=select('Clube inicial',{},'');
 const fill=()=>{clubs.replaceChildren(...countryTeams(country.value).map(t=>el('option',{value:t.id,text:t.name,selected:t.id===(editing?c.clubId:'santos')})));};fill();
 country.addEventListener('change',()=>{fill();sync();rebuildKit();showPreview();});clubs.addEventListener('change',()=>{sync();rebuildKit();showPreview();});
 const kit=select('Uniforme',{},String(c?.kitIndex||0));controls.kit=kit;kit.disabled=blocked;
 function rebuildKit(){kit.replaceChildren(...kitsOf(editing?c.clubId:clubs.value).map((k,i)=>el('option',{value:i,text:k.name||`Uniforme ${i+1}`,selected:i===(draft.kitIndex||0)})));}rebuildKit();kit.addEventListener('change',()=>{sync();showPreview();});
 const appearance=[label('Nome',name),choose('position','Posição',CAREER_POSITIONS,draft.player.position),number('height','Altura (cm)',look.height,160,200),number('weight','Peso (kg)',look.weight,55,100),choose('body','Corpo',CAREER_BODY,look.body),choose('skinTone','Tom de pele',CAREER_SKIN,look.skinTone)];
 const head=[choose('hairStyle','Cabelo',CAREER_HAIR,look.hairStyle),choose('hairColor','Cor do cabelo',CAREER_HAIR_COLORS,look.hairColor),choose('face','Rosto',CAREER_FACE,look.face),choose('beard','Barba',CAREER_BEARD,look.beard),choose('moustache','Bigode',{none:'Sem bigode',classic:'Clássico'},look.moustache),choose('brows','Sobrancelhas',{natural:'Naturais',thick:'Espessas'},look.brows)];
 const uniform=[label('Uniforme',kit),number('number','Número da camisa',draft.player.number,1,99),choose('socks','Meião',{long:'Longo',short:'Curto'},look.socks)];
 const accessories=[choose('bootColor','Chuteira',CAREER_BOOTS,look.bootColor),choose('gloves','Luvas',{none:'Sem luvas',black:'Pretas',white:'Brancas'},look.gloves),choose('wristband','Munhequeira',{none:'Sem acessório',white:'Branca',black:'Preta'},look.wristband)];
 const animation=[choose('celebration','Comemoração',{arms:'Braços erguidos',fist:'Punho no alto',wide:'Braços abertos'},look.celebration),button('Testar comemoração',()=>preview?.celebrate())];
 const settings=[choose('foot','Pé preferido',{Right:'Direito',Left:'Esquerdo'},draft.player.foot),choose('nationality','Nacionalidade',Object.fromEntries(CAREER_NATIONS.map(t=>[t,t])),draft.player.nationality)];
 const groups={appearance,head,uniform,accessories,animation,settings};
 function sync(){
  if(!editing)draft.clubId=clubs.value;
  draft.player.name=name.value;draft.player.number=Number(controls.number.value);draft.player.position=controls.position.value;draft.player.foot=controls.foot.value;draft.player.nationality=controls.nationality.value;
  draft.player.appearance=careerAppearance(Object.fromEntries(Object.entries(controls).map(([k,input])=>[k,input.value])));draft.kitIndex=Number(kit.value)||0;
 }
 async function showPreview(){if(!preview)return;const r=++revision;sync();const team=careerTeam(draft);await preview.show([{team,kit:kitsOf(team.id)[draft.kitIndex]||kitsOf(team.id)[0],player:team.players.find(p=>p.id==='career-player')}]);if(r===revision)canvas.dataset.appearance=JSON.stringify(draft.player.appearance);}
 function showGroup(id){fields.replaceChildren(...groups[id]);for(const b of categories.children)b.classList.toggle('is-active',b.dataset.category===id);}
 for(const [id,title,subtitle,ico]of [['appearance','Aparência','Pele, corpo e medidas','shirt'],['head','Cabeça','Rosto, cabelo e barba','player'],['uniform','Uniforme','Camisa e meiões','shirt'],['accessories','Acessórios','Chuteiras, luvas e munhequeira','boot'],['animation','Animações','Sua comemoração','celebrate'],['settings','Configurações','Pé e nacionalidade','settings']])categories.append(tile(title,subtitle,ico,()=>showGroup(id),{dataset:{category:id}}));
 if(manager){form.append(label('Nome do técnico',name),label('País do clube',country),label('Clube inicial',clubs),el('p',{text:'Você controla a equipe inteira, define a escalação e contrata jogadores com o orçamento da carreira.'}));}
 else{if(!editing)form.append(el('div',{class:'season-club-selection'},label('País do clube',country),label('Clube inicial',clubs)));form.append(categories,fields);content.append(el('div',{class:'season-preview-wrap'},canvas,el('small',{text:'SEU ATLETA · MICAH IMPORTADO · MESMO MODELO DA PARTIDA'})));showGroup('appearance');}
 const save=el('button',{type:'submit',text:editing?'Salvar personalização':'Começar carreira',disabled:blocked,class:'season-primary'});form.append(el('div',{class:'season-editor-actions'},save,button('Cancelar',back)));if(blocked)form.append(el('p',{text:'Termine a partida pendente antes de editar seu atleta.'}));
 const commit=()=>{
  sync();if(editing){if(!customiseCareer(c,{...draft.player,position:draft.player.position}))return;c.kitIndex=draft.kitIndex;}
  else{saveCareerSlot(ctx.state.profile,kind);ctx.state.profile[manager?'managerCareer':'career']=manager?createManagerCareer(clubs.value,name.value):{...createCareer({name:draft.player.name,clubId:clubs.value,position:draft.player.position,number:draft.player.number,foot:draft.player.foot,nationality:draft.player.nationality,appearance:draft.player.appearance}),kitIndex:draft.kitIndex};}
  ctx.state.profile.careerKind=kind;if(persist())go('hub');
 };
 form.addEventListener('submit',e=>{e.preventDefault();if(blocked)return;if(c&&!editing){const dialog=el('dialog',{class:'season-dialog','aria-label':'Substituir carreira'},el('h2',{text:'Criar nova carreira?'}),el('p',{text:'Uma cópia da carreira atual será preservada em Carregar Carreira.'}),button('Confirmar nova carreira',()=>{dialog.close();commit();}),button('Cancelar',()=>{dialog.close();dialog.remove();}));node.append(dialog);dialog.showModal();}else commit();});
 content.append(form);if(!manager)showPreview();
 return {node,unmount(){revision++;preview?.dispose();preview=null;},onKey(e){if(e.key==='Escape'){if(node.querySelector('dialog[open]'))return false;back();return true;}return false;}};
}

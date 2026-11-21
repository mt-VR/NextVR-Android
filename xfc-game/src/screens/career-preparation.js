import {el} from '../ui/dom.js';
import {button,select,label,panel,shell,fixtureNode} from '../ui/career-ui.js';
import {footballCard,enablePositionDrag,positionCard,planToPitch,pitchToPlan} from '../ui/game-plan.js';
import {careerRoster,careerSchedule} from '../data/career-services.js';
import {careerFixture,beginCareerMatch} from '../data/career.js';
import {normalisePlan,plannedTeam,swapPlanPlayer,FORMATIONS,TACTICS} from '../data/game-plan.js';
export function careerPreparation(ctx,{career:c,kind,go,persist,back}){
 const team=careerRoster(c,kind),locked=kind==='player'?c.player.id:null;
 let draft=normalisePlan(team,c.plan),selected=draft.lineup[1],confirmed=false;
 const {node,content}=shell(ctx,{title:'Plano de Jogo',subtitle:'Arraste os atletas. Confirme a escalação antes de entrar em campo.',career:c,view:'plan',go,back});
 const tactics=panel('Táticas'),center=panel('Escalação'),details=panel('Detalhes da Tática');
 content.append(tactics,center,details);content.classList.add('season-plan-layout');
 const formation=select('Formação',Object.fromEntries(Object.keys(FORMATIONS).map(k=>[k,k])),draft.formation);
 formation.addEventListener('change',()=>{draft.formation=formation.value;draft.positions={};draft.roles={};confirmed=false;paint();});
 const presetButtons=[];for(const [id,tactic]of Object.entries(TACTICS)){
  const b=button(tactic.name,()=>{draft.preset=id;confirmed=false;paint();});presetButtons.push([id,b]);tactics.append(b);
 }
 tactics.append(label('Formação',formation),el('p',{text:'Mudanças alteram o posicionamento e o comportamento dos companheiros na próxima partida.'}),button('Restaurar plano salvo',()=>{draft=normalisePlan(team,c.plan);formation.value=draft.formation;confirmed=false;paint();}));
 const pitch=el('div',{class:'season-plan-pitch','aria-label':'Campo tático'}),bench=el('div',{class:'season-plan-bench'});center.append(pitch,el('h3',{text:'Reservas · selecione um titular e toque no reserva'}),bench);
 const notice=el('p',{role:'status'}),confirm=button('Confirmar escalação',()=>{c.plan=JSON.parse(JSON.stringify(draft));if(persist()){confirmed=true;notice.textContent='Escalação salva e confirmada.';launch.disabled=!careerFixture(c);}}),launch=button('Jogar partida',()=>{
  if(!confirmed)return;const fixture=careerFixture(c),pending=beginCareerMatch(c);if(!pending)return;
  if(!persist())return;const schedule=careerSchedule(c).find(g=>g.id===fixture.id);
  ctx.go('play',{home:fixture.home,away:fixture.away,minutes:3,difficulty:'normal',careerMatchId:pending.id,careerKind:kind,userSide:fixture.home===c.clubId?'home':'away',stadium:schedule.stadiumIndex,[fixture.home===c.clubId?'homeKit':'awayKit']:c.kitIndex||0,returnTo:'career'});
 },{class:'season-primary',disabled:true});
 const detailBody=el('div');details.append(detailBody,notice,confirm,launch,button('Voltar à Central',()=>go('hub')));
 function dirty(){confirmed=false;launch.disabled=true;notice.textContent='Alterações não confirmadas.';}
 function selection(){
  const roster=[...team.players,...team.substitutes],p=roster.find(p=>p.id===selected)||roster[0];
  const instruction=select('Instrução individual',{support:'Apoiar a construção',forward:'Avançar no ataque',hold:'Guardar posição'},draft.instructions[p.id]||'support');instruction.addEventListener('change',()=>{draft.instructions[p.id]=instruction.value;dirty();});
  const captain=select('Capitão',Object.fromEntries(roster.filter(p=>draft.lineup.includes(p.id)).map(p=>[p.id,p.name])),draft.captain);captain.addEventListener('change',()=>{draft.captain=captain.value;dirty();});
  const role=select('Função individual',{GK:'Goleiro',CB:'Zagueiro',LB:'Lateral esquerdo',RB:'Lateral direito',CDM:'Volante',CM:'Meio-campista',CAM:'Meia ofensivo',LW:'Ponta esquerda',RW:'Ponta direita',ST:'Atacante'},draft.roles?.[p.id]||p.pos);role.disabled=p.pos==='GK';role.addEventListener('change',()=>{draft.roles||={};draft.roles[p.id]=role.value;dirty();});
  detailBody.replaceChildren(el('h3',{text:TACTICS[draft.preset].name}),el('p',{text:TACTICS[draft.preset].description}),el('h3',{text:p.name}),el('p',{text:`${p.pos} · OVR ${p.ovr}`}),label('Função',role),label('Instrução',instruction),label('Capitão',captain),...(locked?[el('small',{text:'Seu atleta permanece titular na carreira de jogador.'})]:[]));
  for(const card of pitch.querySelectorAll('[data-player]'))card.classList.toggle('is-selected',card.dataset.player===selected);
 }
 function paint(){
  for(const [id,b]of presetButtons)b.classList.toggle('is-active',id===draft.preset);
  const planned=plannedTeam(team,draft,locked);pitch.replaceChildren(el('span',{class:'season-pitch-circle'}));bench.replaceChildren();
  for(const p of planned.players){
   const card=footballCard(p,{crest:team.crest});card.dataset.player=p.id;positionCard(card,planToPitch(planned.plan[p.id]));
   card.addEventListener('click',()=>{selected=p.id;selection();});
   enablePositionDrag(card,pitch,{getPosition:()=>planToPitch(draft.positions[p.id]||planned.plan[p.id]),onChange:point=>{draft.positions[p.id]=pitchToPlan(point);selected=p.id;dirty();selection();}});pitch.append(card);
  }
  for(const p of planned.substitutes)bench.append(button(`${p.name} · ${p.pos} · ${p.ovr}`,()=>{if(swapPlanPlayer(team,draft,selected,p.id,locked)){selected=p.id;dirty();paint();}else ctx.toast('Mantenha um goleiro e seu atleta titular. Selecione outro jogador.',{variant:'warn'});}));
  launch.disabled=!confirmed||!careerFixture(c);selection();
 }
 paint();const fixture=careerFixture(c);if(!fixture)notice.textContent='Temporada concluída. Você pode salvar o plano para a próxima.';
 return {node,onKey(e){if(e.key==='Escape'){back();return true;}return false;}};
}

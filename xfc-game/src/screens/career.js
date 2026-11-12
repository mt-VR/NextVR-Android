import {careerReference} from './career-reference.js';
// Telas distintas; apenas dados/roteamento compartilhados. Nenhum placar da arte é usado.
import {el} from '../ui/dom.js';
import {button,select,label,crest,panel,tile,shell,fixtureNode,dateLabel} from '../ui/career-ui.js';
import {getTeam,TEAMS} from '../data/teams.js';
import {careerFixture,careerTable,careerOverall,improveCareer,nextCareerSeason} from '../data/career.js';
import {getCareer,careerKind,careerSchedule,careerNews,careerRoster,saveCareerSlot,loadCareerSlot,buyManagerPlayer,managerTeam,transferPrice} from '../data/career-services.js';
import {saveProfile} from '../state.js';
import {STADIUMS} from '../match3d/stadiums.js';
import {careerEditor} from './career-editor.js';
import {careerPreparation} from './career-preparation.js';
export function careerScreen(ctx,params={}){
 const profile=ctx.state.profile,kind=careerKind(params.kind||profile.careerKind),c=getCareer(profile,kind);
 const view=params.view||'entry';
 const persist=()=>{if(!saveProfile(ctx.state)){ctx.toast('Não foi possível salvar neste dispositivo.',{variant:'warn'});return false;}return true;};
 const go=(target,extra={})=>ctx.go('career',{kind,view:target,back:target==='hub'?'journey':target==='journey'?'entry':view,...extra});
 const back=()=>view==='entry'?ctx.go('menu'):view==='custom-edit'?go('custom',{back:params.customReturnTo||'hub'}):go(params.back||({journey:'entry',hub:'journey','custom-edit':'custom'}[view])||(['create','load','objectives','settings'].includes(view)&&params.fromEntry?'entry':'hub'));
 if(view==='entry'||c&&(view==='journey'||kind==='player'&&['hub','custom'].includes(view)))return careerReference(ctx,{view,kind,career:c,go,back,persist,returnTo:params.back||'hub'});
 if(view==='create'||view==='custom-edit')return careerEditor(ctx,{...params,kind,career:c,go,persist,back:view==='create'?()=>go(params.back||'entry'):back});
 if(view==='plan'&&c)return careerPreparation(ctx,{career:c,kind,go,persist,back});
 const titles={entry:'Modo Carreira',hub:'Central da Carreira',agenda:'Agenda de Jogos',table:'Classificação',club:'Meu Clube',transfers:'Transferências',office:'Escritório',objectives:'Objetivos',settings:'Configurações',load:'Carregar Carreira',stats:'Estatísticas'};
 const {node,content}=shell(ctx,{title:titles[view]||titles.entry,subtitle:view==='entry'?'Construa sua história como jogador ou treinador.':c?`${kind==='manager'?'Carreira de Técnico':'Carreira de Jogador'} · Temporada ${c.season} · Liga local de 8 clubes`:'Progresso salvo neste dispositivo',career:c,view,back,go});
 const next=c&&careerFixture(c),schedule=c?careerSchedule(c):[],fixture=schedule.find(g=>g.id===next?.id);
 const play=()=>go(next?'plan':'office');
 function standings(limit=8){return el('table',{class:'season-table'},el('thead',{},el('tr',{},...['Clube','J','PTS','SG'].map(text=>el('th',{text})))),el('tbody',{},...careerTable(c).slice(0,limit).map((r,i)=>el('tr',{class:r.id===c.clubId?'is-club':''},el('td',{},el('span',{text:`${i+1}. `}),crest(r.id),el('span',{text:getTeam(r.id).name})),el('td',{text:r.played}),el('td',{text:r.points}),el('td',{text:r.gf-r.ga})))));}
 function nextPanel(){return panel('PRÓXIMO JOGO',fixture?fixtureNode(fixture):el('p',{text:'Temporada encerrada'}),fixture&&el('p',{text:`${dateLabel(fixture.date)} · 18:00 UTC · RODADA ${fixture.round+1}`}),fixture&&el('small',{text:`Liga da carreira · ${STADIUMS[fixture.stadiumIndex].name}`}),button(fixture?(c.pending?'Retomar preparação':'Vamos Jogar'):'Próxima temporada',play,{class:'season-primary'}));}
 function objectives(){
  if(!c){content.append(panel('Sua jornada',el('p',{text:'Jogador: disputar partidas, marcar gols e evoluir por XP. Técnico: administrar o elenco e buscar o título da liga local.'}),button('Escolher carreira',()=>go('entry'))));return;}
  const rank=careerTable(c).findIndex(r=>r.id===c.clubId)+1;
  const goals=kind==='manager'?[['Disputar a temporada',c.round,14],['Pontos na liga',careerTable(c).find(r=>r.id===c.clubId).points,30]]:[['Jogar partidas',c.totals.matches,5],['Marcar gols',c.totals.goals,3],['Completar passes',c.totals.passes,30],['Chegar ao nível 5',c.player.level,5]];
  content.append(panel('Objetivos da carreira',el('p',{text:`Posição atual: ${rank}º. Marcos de acompanhamento; XP vem das partidas, sem prêmio extra duplicado.`}),...goals.map(([text,n,target])=>el('div',{class:'season-objective'},el('p',{text:`${text} · ${Math.min(n,target)} / ${target}`}),el('progress',{max:target,value:Math.min(n,target)})))));
 }
 if(view==='load'){
  content.append(panel('Cópias salvas',el('p',{text:'Carregar restaura a cópia selecionada. Uma cópia automática do progresso atual é preservada.'}),...(profile.careerSlots||[]).map((s,i)=>tile(`${s.kind==='manager'?'Técnico':'Jogador'} · ${getTeam(s.career.clubId)?.name}`,`Temporada ${s.career.season} · rodada ${s.career.round+1} · ${new Date(s.savedAt).toLocaleString('pt-BR')}`,'save',()=>{
   // Guarda a referência antes de criar a cópia de segurança (muda os índices).
   const slot=JSON.parse(JSON.stringify(s));saveCareerSlot(profile,s.kind);profile.careerSlots.unshift(slot);if(loadCareerSlot(profile,0)){profile.careerSlots.shift();persist();ctx.go('career',{kind:s.kind,view:'journey'});}
  })),!(profile.careerSlots||[]).length&&el('p',{text:'Nenhuma cópia manual ainda. A carreira atual é salva automaticamente.'}),button('Voltar',back)));
 }else if(view==='settings'){
  content.append(panel('Opções',el('p',{text:'Salvamento automático neste dispositivo. Cada modo de carreira mantém seu próprio progresso.'}),c&&button('Salvar cópia da carreira',()=>{saveCareerSlot(profile,kind);if(persist())ctx.toast('Cópia salva. Acesse Carregar Carreira na entrada.');}),button('Configurações do jogo',()=>ctx.go('customise',{returnTo:'career',returnParams:{kind,view:'settings',fromEntry:params.fromEntry}})),button('Nova carreira',()=>go('create')),button('Carregar cópia',()=>go('load',{back:'settings'}))));
 }else if(view==='objectives'){objectives();
 }else if(!c){content.append(panel('Nenhuma carreira selecionada',button('Escolher carreira',()=>go('entry'))));
 }else if(view==='hub'){
  const last=[...schedule].reverse().find(g=>g.score),news=careerNews(c);
  node.append(el('img',{class:'season-neymar',src:'assets/ui/season/neymar.png',alt:'Neymar, arte do menu; não representa o atleta criado',draggable:'false'}));
  const left=el('div',{class:'season-hub-left'},panel('ÚLTIMO JOGO',last?fixtureNode(last):el('p',{text:'Sua temporada começa aqui.'}),last&&el('p',{text:`${dateLabel(last.date)} · Liga da carreira`}),button('Ver detalhes da partida',()=>go('stats'),{disabled:!last})),nextPanel());
  const right=el('div',{class:'season-hub-right'},panel('NOTÍCIAS',el('img',{class:'season-news-photo',src:STADIUMS[fixture?.stadiumIndex||0].file,alt:'Estádio da carreira'}),el('h3',{text:news[0]}),el('p',{text:news[1]}),el('small',{text:'Notícia gerada a partir deste save.'})),panel('CLASSIFICAÇÃO',standings(4),button('Ver tabela completa',()=>go('table'))));
  content.append(left,right,el('div',{class:'season-actions'},tile('Jogar Próxima Partida','Confirmar escalação','play',play),...[[ 'Calendário','calendar','agenda'],['Transferências','transfer','transfers'],['Meu Clube','club','club'],['Escritório','office','office'],['Configurações','settings','settings']].map(([text,ico,v])=>tile(text,'',ico,()=>go(v)))));
 }else if(view==='agenda'){
  let day=fixture?.date.slice(0,10)||schedule.at(-1)?.date.slice(0,10);const list=el('div',{class:'season-schedule'}),details=panel('Dia selecionado');
  const dayLabel=el('b');const changeDay=n=>{day=new Date(Date.parse(day+'T18:00:00Z')+n*86400000).toISOString().slice(0,10);renderDay();};
  const nav=el('div',{class:'season-day-nav'},button('‹ Dia anterior',()=>changeDay(-1)),dayLabel,button('Próximo dia ›',()=>changeDay(1)),button('Próximo jogo',()=>{day=fixture?.date.slice(0,10)||day;renderDay();}));
  function renderDay(){dayLabel.textContent=dateLabel(day+'T18:00:00Z');details.replaceChildren(el('h2',{text:'Dia selecionado'}));const game=schedule.find(g=>g.date.startsWith(day));if(game)details.append(fixtureNode(game),el('p',{text:`18:00 UTC · ${game.competition} · ${STADIUMS[game.stadiumIndex].name}`}),el('p',{text:game.score?'Partida encerrada':game.id===fixture?.id?'Próxima partida disponível':'Aguarde as rodadas anteriores'}),...(game.id===fixture?.id?[button('Preparar partida',play)]:[]));else details.append(el('p',{text:'Sem partida neste dia.'}));for(const row of list.children)row.classList.toggle('is-selected',row.dataset.day===day);}
  for(const g of schedule)list.append(el('button',{type:'button',class:`season-schedule-row ${g.id===fixture?.id?'is-next':''}`,dataset:{day:g.date.slice(0,10)},onClick:()=>{day=g.date.slice(0,10);renderDay();}},el('span',{text:`R${g.round+1} · ${dateLabel(g.date)} · 18:00 UTC`}),crest(g.home===c.clubId?g.away:g.home),el('b',{text:`${getTeam(g.home).name} × ${getTeam(g.away).name}`}),el('small',{text:`${g.competition} · ${STADIUMS[g.stadiumIndex].name}`}),el('strong',{text:g.score?g.score.join(' – '):g.id===fixture?.id?'PRÓXIMO':'A JOGAR'})));
  content.append(el('div',{class:'season-agenda'},nav,el('p',{text:'Calendário local desta carreira. Datas e sedes do jogo, não calendário oficial.'}),list),details);renderDay();
 }else if(view==='table')content.append(panel('Liga da carreira · classificação completa',standings(),button('Agenda de Jogos',()=>go('agenda'))));
 else if(view==='club'){
  const roster=careerRoster(c,kind);content.append(panel(getTeam(c.clubId).name,el('div',{class:'season-roster'},...[...roster.players,...roster.substitutes].map(p=>el('div',{},el('b',{text:`${p.number} · ${p.name}`}),el('span',{text:`${p.pos} · OVR ${p.ovr}`})))),button('Plano de Jogo',()=>go('plan')),kind==='player'&&button('Personalizar Jogador',()=>go('custom'))));
 }else if(view==='transfers'){
  if(kind==='manager'){
   const clubs=select('Clube vendedor',Object.fromEntries(TEAMS.filter(t=>t.id!==c.clubId).map(t=>[t.id,t.name])),TEAMS.find(t=>t.id!==c.clubId).id),offers=el('div',{class:'season-transfer-list'}),balance=el('p');
   const paint=()=>{balance.textContent=`Orçamento: ${c.budget} créditos locais. Receita: 100 por jogo + 100 por vitória. Limite: 25 atletas.`;const seller=managerTeam(c,clubs.value);offers.replaceChildren(...[...seller.players,...seller.substitutes].map(p=>tile(p.name,`${p.pos} · OVR ${p.ovr} · ${transferPrice(p)} créditos`,'transfer',()=>{if(buyManagerPlayer(c,clubs.value,p.id)){persist();paint();ctx.toast('Contratação concluída. Disponível no plano de jogo.');}else ctx.toast('Negociação indisponível: verifique saldo, limite do elenco e partida pendente.',{variant:'warn'});},{disabled:!!c.pending||c.budget<transferPrice(p)})));};clubs.addEventListener('change',paint);paint();content.append(panel('Contratações locais',balance,clubs,offers));
  }else content.append(panel('Transferência de clube',el('p',{text:'Seu contrato dura uma temporada. Ao completar as 14 rodadas, escolha o próximo clube no Escritório. Nenhuma transferência é aplicada no meio de uma partida.'}),button('Ver contrato / temporada',()=>go('office'))));
 }else if(view==='office'){
  const p=panel('Sua temporada',el('p',{text:`${kind==='manager'?c.managerName:c.player.name} · ${getTeam(c.clubId).name} · ${c.round}/14 jogos concluídos`}),button('Objetivos',()=>go('objectives')),button('Estatísticas',()=>go('stats')),button('Salvar cópia da carreira',()=>{saveCareerSlot(profile,kind);if(persist())ctx.toast('Cópia salva.');}));
  if(!next){const clubs=select('Clube da próxima temporada',Object.fromEntries(TEAMS.map(t=>[t.id,t.name])),c.clubId);p.append(el('h3',{text:'Contrato para a próxima temporada'}),clubs,button('Iniciar próxima temporada',()=>{if(nextCareerSeason(c,clubs.value)){c.plan=null;persist();go('hub');}}));}
  for(const h of c.history)p.append(el('p',{text:`Temporada ${h.season} · ${getTeam(h.clubId).name} · ${h.place}º lugar`}));content.append(p);
 }else if(view==='stats'){
  const p=panel('Estatísticas da carreira',el('p',{text:`Partidas: ${c.totals.matches}`}));if(kind==='player'){
   p.append(el('p',{text:`Gols pessoais: ${c.totals.goals} · Passes: ${c.totals.passes} · Chutes: ${c.totals.shots}`}),el('h3',{text:`${c.player.name} · OVR ${careerOverall(c)} · ${c.player.points} pontos disponíveis`}));
   const names={pace:'Ritmo',shooting:'Finalização',passing:'Passe',dribbling:'Drible',defending:'Defesa',physical:'Físico'};for(const [stat,value]of Object.entries(c.player.stats))p.append(el('div',{class:'season-stat'},el('span',{text:`${names[stat]}: ${value}`}),button('+1',()=>{if(improveCareer(c,stat)){persist();go('stats');}},{'aria-label':`Melhorar ${names[stat]}`,disabled:!!c.pending||c.player.points<1||value>=95})));
  }if(c.lastResult)p.append(el('p',{text:`Último jogo: ${c.lastResult.score.join(' × ')}${kind==='player'?` · nota ${c.lastResult.rating} · +${c.lastResult.xp} XP`:''}`}));content.append(p);
 }
 return {node,onKey(e){if(e.key==='Escape'){back();return true;}return false;}};
}

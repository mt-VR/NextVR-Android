import {el} from '../ui/dom.js';
import {getTeam} from '../data/teams.js';
import {TEAM_COUNTRIES,countryTeams} from '../data/team-groups.js';
import {createCareer,currentCareer,CAREER_POSITIONS,careerFixture,careerTable,beginCareerMatch,improveCareer,nextCareerSeason} from '../data/career.js';
import {saveProfile} from '../state.js';
export function careerScreen(ctx){
 const node=el('div',{class:'screen screen--career'});let creating=!currentCareer(ctx.state.profile);
 const persist=()=>{if(!saveProfile(ctx.state))ctx.toast('Não foi possível salvar neste dispositivo.',{variant:'warn'});};
 const button=(text,click,attrs={})=>el('button',{type:'button',text,onClick:click,...attrs});
 function paint(){
  node.replaceChildren(el('header',{},el('div',{},el('small',{text:'XFC 27 / LOCAL · CONTRA IA'}),el('h1',{text:'Carreira de jogador'})),button('Voltar ao início',()=>ctx.go('menu'))));
  const c=currentCareer(ctx.state.profile);
  if(creating){
   const name=el('input',{'aria-label':'Nome do atleta',maxLength:24,required:true,value:'Meu jogador'}),number=el('input',{'aria-label':'Número da camisa',type:'number',min:1,max:99,value:9});
   const position=el('select',{'aria-label':'Posição'},...Object.entries(CAREER_POSITIONS).map(([value,text])=>el('option',{value,text})));
   const foot=el('select',{'aria-label':'Pé preferido'},el('option',{value:'Right',text:'Direito'}),el('option',{value:'Left',text:'Esquerdo'}));
   const teams=el('select',{'aria-label':'Clube inicial'});const fill=country=>teams.replaceChildren(...countryTeams(country).map(t=>el('option',{value:t.id,text:t.name})));
   const countries=el('select',{'aria-label':'País do clube',onChange:e=>fill(e.target.value)},...TEAM_COUNTRIES.map(country=>el('option',{value:country,text:country})));fill(TEAM_COUNTRIES[0]);
   const label=(text,input)=>el('label',{},el('span',{text}),input);
   const form=el('form',{class:'career-create',onSubmit(e){e.preventDefault();ctx.state.profile.career=createCareer({name:name.value,position:position.value,clubId:teams.value,number:number.value,foot:foot.value});persist();creating=false;paint();}},
     el('h2',{text:'Seu nome. Sua camisa. Sua história.'}),el('p',{text:'Controle apenas o seu atleta. Os companheiros jogam com IA. Liga local de 8 clubes, 14 rodadas e evolução por desempenho.'}),
     el('div',{class:'career-form-grid'},label('Nome',name),label('Posição',position),label('Camisa',number),label('Pé preferido',foot),label('País',countries),label('Clube',teams)),
     el('button',{type:'submit',text:'Começar carreira'}));if(c)form.append(button('Cancelar',()=>{creating=false;paint();}));node.append(form);return;
  }
  const club=getTeam(c.clubId),fixture=careerFixture(c),main=el('main',{class:'career-grid'});
  const identity=el('section',{class:'career-identity'},el('img',{src:club.crest,alt:club.name}),el('small',{text:`TEMPORADA ${c.season} · ${club.country}`}),el('h2',{text:c.player.name}),el('p',{text:`${CAREER_POSITIONS[c.player.position]} · Nº ${c.player.number} · ${club.name}`}),el('strong',{text:`Nível ${c.player.level}`}),el('p',{text:`${c.player.xp} XP · ${c.player.points} pontos para evoluir`}),el('p',{text:`${c.totals.matches} partidas · ${c.totals.goals} gols · ${c.totals.passes} passes`}),el('p',{class:'career-hint',text:'Você controla só este jogador. TROCAR pede um passe quando um companheiro tem a bola. A carreira não altera elencos dos outros modos.'}));
  const next=el('section',{class:'career-next'},el('small',{text:fixture?`RODADA ${c.round+1} / 14`:'TEMPORADA ENCERRADA'}));
  if(fixture){next.append(el('h2',{text:`${getTeam(fixture.home).name} × ${getTeam(fixture.away).name}`}),el('p',{text:c.pending?'Partida pendente: recomeça do 0 × 0, sem prêmio duplicado.':'Partida de 3 minutos · dificuldade normal · estádio local'}),button(c.pending?'Retomar partida':'Jogar próxima partida',()=>{const pending=beginCareerMatch(c);if(!pending)return;persist();ctx.go('play',{home:fixture.home,away:fixture.away,minutes:3,difficulty:'normal',careerMatchId:pending.id,userSide:fixture.home===c.clubId?'home':'away',returnTo:'career'});},{class:'career-play'}));}
  else{const clubs=el('select',{'aria-label':'Clube da próxima temporada'},...TEAM_COUNTRIES.map(country=>el('optgroup',{label:country},...countryTeams(country).map(t=>el('option',{value:t.id,text:t.name,selected:t.id===c.clubId})))));next.append(el('h2',{text:`${careerTable(c).findIndex(t=>t.id===c.clubId)+1}º lugar na liga`}),el('p',{text:'Continue no clube ou escolha um novo desafio. Transferência livre entre temporadas nesta carreira local.'}),clubs,button('Iniciar próxima temporada',()=>{nextCareerSeason(c,clubs.value);persist();paint();}));}
  if(c.lastResult)next.append(el('div',{class:'career-report'},el('h3',{text:`Último jogo · nota ${c.lastResult.rating.toFixed(1)}`}),el('p',{text:`${c.lastResult.score.join(' × ')} · +${c.lastResult.xp} XP · ${c.lastResult.goals} gols pessoais`})));
  const progression=el('section',{},el('h2',{text:'Evolução'}));const names={pace:'Ritmo',shooting:'Finalização',passing:'Passe',dribbling:'Drible',defending:'Defesa',physical:'Físico'};
  for(const [stat,value]of Object.entries(c.player.stats))progression.append(el('div',{class:'career-attribute'},el('span',{text:names[stat]}),el('b',{text:String(value)}),button('+1',()=>{if(improveCareer(c,stat)){persist();paint();}},{'aria-label':`Melhorar ${names[stat]}`,disabled:c.pending||c.player.points<1||value>=95})));
  const table=el('section',{class:'career-table'},el('h2',{text:'Liga da carreira'}),el('p',{text:'8 clubes · turno e returno · outros jogos simulados. Não é uma liga oficial.'}));
  const rows=el('table',{},el('thead',{},el('tr',{},...['Clube','J','P','SG'].map(text=>el('th',{text})))),el('tbody',{},...careerTable(c).map((r,i)=>el('tr',{class:r.id===c.clubId?'is-club':''},el('td',{text:`${i+1}. ${getTeam(r.id).name}`}),el('td',{text:String(r.played)}),el('td',{text:String(r.points)}),el('td',{text:String(r.gf-r.ga)})))));table.append(rows);
  const calendar=el('details',{},el('summary',{text:'Calendário da temporada'}),...c.league.rounds.map((games,i)=>{const g=games.find(x=>x.home===c.clubId||x.away===c.clubId);return el('p',{text:`${i+1} · ${getTeam(g.home).name} × ${getTeam(g.away).name} · ${g.score?g.score.join(' × '):'A jogar'}`});}));
  table.append(calendar);if(c.history.length)table.append(el('details',{},el('summary',{text:'Histórico de temporadas'}),...c.history.map(h=>el('p',{text:`Temporada ${h.season} · ${getTeam(h.clubId).name} · ${h.place}º lugar`}))));
  main.append(identity,next,progression,table);node.append(main,button('Nova carreira',()=>{const dialog=el('section',{class:'career-confirm',role:'dialog','aria-label':'Substituir carreira'},el('h2',{text:'Substituir sua carreira salva?'}),el('p',{text:'Esta ação apaga somente a carreira atual, não os outros modos.'}),button('Confirmar nova carreira',()=>{creating=true;paint();}),button('Cancelar',()=>dialog.remove()));node.append(dialog);}));
 }
 paint();return {node,onKey(e){if(e.key==='Escape'){if(node.querySelector('.career-confirm'))node.querySelector('.career-confirm').remove();else ctx.go('menu');return true;}return false;}};
}

import {el} from '../ui/dom.js';
import {hotspot} from '../ui/reference-menu.js';
import {playerPreview} from '../ui/player-preview.js';
import {getTeam} from '../data/teams.js';
import {kitsOf} from '../data/kits.js';
import {TEAM_COUNTRIES,countryTeams} from '../data/team-groups.js';
import {createCareer,currentCareer,CAREER_POSITIONS,CAREER_HAIR,CAREER_HAIR_COLORS,CAREER_BOOTS,CAREER_SKIN,CAREER_NATIONS,careerAppearance,careerOverall,careerTeam,customiseCareer,careerFixture,careerTable,beginCareerMatch,improveCareer,nextCareerSeason} from '../data/career.js';
import {saveProfile} from '../state.js';
export function careerScreen(ctx){
 const node=el('div',{class:'screen screen--career reference-screen'});
 let creating=!currentCareer(ctx.state.profile),tab='home',preview=null;
 const persist=()=>{if(!saveProfile(ctx.state))ctx.toast('Não foi possível salvar neste dispositivo.',{variant:'warn'});};
 const button=(text,click,attrs={})=>el('button',{type:'button',text,onClick:click,...attrs});
 const crest=team=>el('img',{src:team.crest,alt:team.name});
 const open=value=>{tab=value;paint();};
 const select=(label,values,value)=>el('select',{'aria-label':label},...Object.entries(values).map(([v,text])=>el('option',{value:v,text,selected:v===value})));
 const label=(text,input)=>el('label',{},el('span',{text}),input);
 function play(c){const fixture=careerFixture(c),pending=beginCareerMatch(c);if(!pending){open('season');return;}persist();ctx.go('play',{home:fixture.home,away:fixture.away,minutes:3,difficulty:'normal',careerMatchId:pending.id,userSide:fixture.home===c.clubId?'home':'away',returnTo:'career'});}
 function editor(c){
  const editing=!creating,athlete=c?.player,look=careerAppearance(athlete?.appearance);
  const name=el('input',{'aria-label':'Nome do atleta',maxLength:24,required:true,value:editing?athlete.name:'Meu jogador',disabled:editing});
  const number=el('input',{'aria-label':'Número da camisa',type:'number',min:1,max:99,value:athlete?.number||9});
  const position=select('Posição',CAREER_POSITIONS,athlete?.position||'ST'),foot=select('Pé preferido',{Right:'Direito',Left:'Esquerdo'},athlete?.foot||'Right');
  const nationality=select('Nacionalidade',Object.fromEntries(CAREER_NATIONS.map(n=>[n,n])),athlete?.nationality||'Brasil');
  const hair=select('Cabelo',CAREER_HAIR,look.hairStyle),hairColor=select('Cor do cabelo',CAREER_HAIR_COLORS,look.hairColor),boots=select('Chuteira',CAREER_BOOTS,look.bootColor),skin=select('Tom de pele',CAREER_SKIN,look.skinTone);
  const teams=el('select',{'aria-label':'Clube inicial'}),fill=country=>teams.replaceChildren(...countryTeams(country).map(t=>el('option',{value:t.id,text:t.name,selected:t.id===(c?.clubId||'santos')})));
  const country=select('País do clube',Object.fromEntries(TEAM_COUNTRIES.map(n=>[n,n])),c?getTeam(c.clubId).country:'Brasil');fill(country.value);country.addEventListener('change',()=>{fill(country.value);updatePreview();});
  const values=()=>({name:name.value,position:position.value,number:number.value,foot:foot.value,nationality:nationality.value,clubId:editing?c.clubId:teams.value,appearance:{hairStyle:hair.value,hairColor:hairColor.value,bootColor:boots.value,skinTone:skin.value}});
  const canvas=el('canvas',{class:'career-model','aria-label':'Prévia 3D do seu atleta'});preview=playerPreview(canvas);
  const updatePreview=()=>{const draft=createCareer(values()),team=careerTeam(draft);preview?.show([{team,kit:kitsOf(team.id)[0],player:team.players.find(p=>p.id==='career-player')}]);};
  const fields=el('div',{class:'career-form-grid'},label('Nome',name),label('Posição',position),label('Camisa',number),label('Pé preferido',foot),label('Nacionalidade',nationality),label('Cabelo',hair),label('Cor do cabelo',hairColor),label('Chuteira',boots),label('Tom de pele',skin));
  if(!editing)fields.append(label('País do clube',country),label('Clube inicial',teams));
  const form=el('form',{class:'career-create career-surface',onSubmit(e){e.preventDefault();if(editing){if(!customiseCareer(c,values()))return;}else ctx.state.profile.career=createCareer(values());persist();creating=false;tab='home';paint();}},
   el('h2',{text:editing?'Personalização':'Crie sua carreira'}),el('p',{text:editing?'O mesmo atleta em campo. Neymar permanece na arte do menu.':'Escolha seu clube e comece com OVR 57. Você controla um único jogador; os companheiros jogam com IA.'}),
   fields,el('div',{class:'career-preview-wrap'},canvas,el('small',{text:'SEU ATLETA · MICAH 3D · 1,75 m'})),
   el('div',{class:'career-form-actions'},el('button',{type:'submit',text:editing?'Salvar personalização':'Começar carreira',disabled:editing&&!!c.pending}),button('Cancelar',()=>{if(c){creating=false;open('home');}else ctx.go('menu');})));
  if(editing&&c.pending)form.append(el('p',{text:'Termine a partida pendente para editar posição e aparência.'}));
  node.append(form);for(const control of form.querySelectorAll('input,select'))control.addEventListener('change',updatePreview);updatePreview();
 }
 function paint(){
  preview?.dispose();preview=null;
  const c=currentCareer(ctx.state.profile),club=c?getTeam(c.clubId):null;
  node.replaceChildren(el('img',{class:'ref-art',src:'assets/ui/career/reference.png',alt:'Menu de carreira XFC 27 com Neymar',draggable:'false'}));
  node.append(el('div',{class:'career-club'},club?crest(club):el('span',{text:'✦'}),el('div',{},el('b',{text:club?.name||'Escolha seu clube'}),el('progress',{value:c?(c.player.xp%250):0,max:250,'aria-label':'XP do próximo nível'}))));
  [['Início',333,105,'home'],['Meu Jogador',451,141,'player'],['Temporada',610,121,'season'],['Personalização',756,166,'custom']].forEach(([text,x,w,target])=>node.append(hotspot(text,[x,26,w,62],()=>{if(c){creating=false;open(target);}}, {class:`ref-button career-tab ${tab===target?'is-active':''}`})));
  node.append(hotspot('Voltar ao início',[196,813,114,57],()=>ctx.go('menu')),hotspot('Selecionar',[43,813,142,57],()=>{if(c)play(c);else node.querySelector('input')?.focus();}));
  if(creating||tab==='custom'){editor(c);return;}
  node.append(hotspot('Continuar carreira',[28,155,358,178],()=>play(c),{class:'ref-button career-continue'}));
  for(const [text,y,target]of [['Meu Jogador',345,'player'],['Estatísticas',419,'stats'],['Objetivos',492,'objectives'],['Agenda',565,'season'],['Configurações',640,'settings']])node.append(hotspot(text,[42,y,328,67],()=>open(target)));
  const identity=el('section',{class:'career-identity career-surface'},el('h2',{text:'Carreira de Jogador'}),
   el('div',{class:'career-club-row'},crest(club),el('div',{},el('b',{text:c.player.name}),el('span',{text:club.name})),el('i',{text:'XFC'})),
   el('div',{class:'career-name'},el('small',{text:'Seu Nome'}),el('h3',{text:c.player.name})),
   el('div',{class:'career-rating'},el('div',{},el('small',{text:'● OVR'}),el('strong',{text:String(careerOverall(c))})),el('div',{},el('b',{text:c.player.position}),el('span',{text:CAREER_POSITIONS[c.player.position]}))),
   el('div',{class:'career-details'},...[[String(c.player.number),'Número'],['1,75 m','Altura'],['68 kg','Peso'],[c.player.nationality||'Brasil','Nacionalidade']].map(([value,text])=>el('div',{},el('b',{text:value}),el('small',{text})))));
  const fixture=careerFixture(c),next=el('section',{class:'career-next career-surface'},el('h2',{text:'Próximo Jogo'}));
  if(fixture){const home=getTeam(fixture.home),away=getTeam(fixture.away);next.append(el('div',{class:'career-fixture'},crest(home),el('b',{text:'×'}),crest(away),el('span',{text:`RODADA ${c.round+1} / 14\nLiga local · 3 min`})),el('p',{text:`${home.name} × ${away.name}`}),button(c.pending?'Retomar partida':'Jogar próxima partida',()=>play(c),{class:'career-play'}));if(c.pending)next.append(el('small',{text:'Pendente: recomeça do 0 × 0, sem prêmio duplicado.'}));}
  else next.append(el('p',{text:'Temporada encerrada'}),button('Próxima temporada / trocar clube',()=>open('season')));
  node.append(identity,next);
  if(tab==='home')return;
  const panel=el('section',{class:'career-panel career-surface','aria-label':tab},button('×',()=>open('home'),{class:'career-close','aria-label':'Fechar painel'}));
  if(tab==='player'){
   panel.append(el('h2',{text:'Meu Jogador'}),el('p',{text:`${c.player.name} · OVR ${careerOverall(c)} · Nível ${c.player.level}`}),el('p',{text:`${c.player.xp} XP · ${c.player.points} pontos para evoluir`}),el('p',{text:'Só você controla este atleta. TROCAR pede passe aos companheiros.'}));
   const names={pace:'Ritmo',shooting:'Finalização',passing:'Passe',dribbling:'Drible',defending:'Defesa',physical:'Físico'};
   for(const [stat,value]of Object.entries(c.player.stats))panel.append(el('div',{class:'career-attribute'},el('span',{text:names[stat]}),el('b',{text:String(value)}),button('+1',()=>{if(improveCareer(c,stat)){persist();paint();}},{'aria-label':`Melhorar ${names[stat]}`,disabled:c.pending||c.player.points<1||value>=95})));
   panel.append(button('Editar aparência e posição',()=>open('custom')));
  }else if(tab==='season'){
   panel.append(el('h2',{text:`Temporada ${c.season}`}),el('p',{text:'Liga local · 8 clubes · 14 rodadas · não é uma liga oficial.'}),el('table',{class:'career-table'},el('thead',{},el('tr',{},...['Clube','J','P','SG'].map(text=>el('th',{text})))),el('tbody',{},...careerTable(c).map((r,i)=>el('tr',{class:r.id===c.clubId?'is-club':''},el('td',{text:`${i+1}. ${getTeam(r.id).name}`}),el('td',{text:String(r.played)}),el('td',{text:String(r.points)}),el('td',{text:String(r.gf-r.ga)}))))));
   if(!fixture){const clubs=select('Clube da próxima temporada',Object.fromEntries(TEAM_COUNTRIES.flatMap(country=>countryTeams(country).map(t=>[t.id,t.name]))),c.clubId);panel.append(clubs,button('Iniciar próxima temporada',()=>{if(nextCareerSeason(c,clubs.value)){persist();paint();}}));}
   panel.append(el('h3',{text:'Calendário da temporada'}),...c.league.rounds.map((games,i)=>{const g=games.find(x=>x.home===c.clubId||x.away===c.clubId);return el('p',{text:`${i+1} · ${getTeam(g.home).name} × ${getTeam(g.away).name} · ${g.score?g.score.join(' × '):'A jogar'}`});}));
   for(const h of c.history)panel.append(el('p',{text:`Temporada ${h.season} · ${getTeam(h.clubId).name} · ${h.place}º lugar`}));
  }else if(tab==='stats'){
   panel.append(el('h2',{text:'Estatísticas'}),...[[c.totals.matches,'Partidas'],[c.totals.goals,'Gols pessoais'],[c.totals.shots,'Chutes'],[c.totals.passes,'Passes'],[c.player.xp,'XP total']].map(([n,text])=>el('p',{text:`${text}: ${n}`})));
   if(c.lastResult)panel.append(el('h3',{text:`Último jogo · nota ${c.lastResult.rating.toFixed(1)}`}),el('p',{text:`${c.lastResult.score.join(' × ')} · +${c.lastResult.xp} XP`}));
  }else if(tab==='objectives'){
   panel.append(el('h2',{text:'Objetivos de evolução'}),el('p',{text:'Acompanhamento de marcos. XP vem das partidas, sem prêmio extra duplicado.'}));
   for(const [text,n,target] of [['Jogar partidas',c.totals.matches,5],['Marcar gols',c.totals.goals,3],['Completar passes',c.totals.passes,30],['Chegar ao nível 5',c.player.level,5]])panel.append(el('p',{text:`${text} · ${Math.min(n,target)} / ${target}`}),el('progress',{max:target,value:Math.min(n,target)}));
  }else if(tab==='settings'){
   panel.append(el('h2',{text:'Configurações'}),el('p',{text:'Progresso salvo neste dispositivo. Os outros modos não são alterados.'}),button('Personalização',()=>open('custom')),button('Configurações do jogo',()=>ctx.go('customise',{returnTo:'career'})),button('Nova carreira',()=>{const dialog=el('section',{class:'career-confirm',role:'dialog','aria-label':'Substituir carreira'},el('h2',{text:'Substituir sua carreira salva?'}),el('p',{text:'A carreira anterior só será substituída ao confirmar a criação.'}),button('Confirmar nova carreira',()=>{creating=true;paint();}),button('Cancelar',()=>dialog.remove()));node.append(dialog);}));
  }
  node.append(panel);
 }
 paint();return {node,unmount(){preview?.dispose();},onKey(e){if(e.key==='Escape'){const dialog=node.querySelector('.career-confirm');if(dialog)dialog.remove();else if(creating&&currentCareer(ctx.state.profile)){creating=false;open('home');}else if(tab!=='home')open('home');else ctx.go('menu');return true;}return false;}};
}

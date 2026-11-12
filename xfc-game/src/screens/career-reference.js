// As próprias quatro artes do usuário, não uma reinterpretação dos painéis.
// Só os dados variáveis são sobrepostos; os hotspots encaminham aos sistemas existentes.
import {el} from '../ui/dom.js';
import {hotspot,gridKeys} from '../ui/reference-menu.js';
import {crest,dateLabel} from '../ui/career-ui.js';
import {getTeam} from '../data/teams.js';
import {careerFixture,careerTable} from '../data/career.js';
import {getCareer,careerSchedule,careerNews} from '../data/career-services.js';
import {STADIUMS} from '../match3d/stadiums.js';
const ARTS={entry:'entry',journey:'agenda',hub:'hub',custom:'customise'};
const place=([x,y,w,h])=>({left:`${x/1568*100}%`,top:`${y/882*100}%`,width:`${w/1568*100}%`,height:`${h/882*100}%`});
export function careerReference(ctx,{view,kind,career:c,go,back,persist,returnTo='hub'}){
 const file=ARTS[view],node=el('div',{class:`screen screen--career career-reference season-${view}`,style:{backgroundImage:`url("assets/ui/season/backdrops/${file}.jpg")`}});
 const frame=el('div',{class:'career-reference-frame'},el('img',{class:'career-reference-art',src:`assets/ui/season/${file}.png`,alt:({entry:'Modo Carreira — entrada e carregamento',journey:'Continue sua jornada — Neymar',hub:'Central do jogador — Mbappé',custom:'Personalizar jogador — seis categorias'})[view],draggable:'false'}));node.append(frame);
 const buttons=[];
 const need=(target,extra={})=>()=>{if(c)go(target==='custom'&&kind==='manager'?'settings':target,extra);else ctx.toast('Escolha Carreira de Jogador ou Carreira de Técnico para começar.');};
 function hit(text,rect,action,attrs={}){const b=hotspot(text,rect,action,{...attrs,class:`ref-button career-reference-hit ${attrs.class||''}`});frame.append(b);buttons.push(b);return b;}
 function data(name,rect,...children){const block=el('div',{class:`career-reference-data ${name}`,style:place(rect)},...children);frame.append(block);return block;}
 const schedule=c?careerSchedule(c):[],next=c&&careerFixture(c),fixture=schedule.find(g=>g.id===next?.id),last=[...schedule].reverse().find(g=>g.score),club=c&&getTeam(c.clubId);
 const league='Liga da carreira';
 const text=(tag,value)=>el(tag,{text:value});
 function teams(g){return el('div',{class:'career-reference-fixture'},crest(g.home),text('strong',g.score?g.score.join(' – '):'×'),crest(g.away));}
 function profile(rect){data('career-reference-profile',rect,club?crest(c.clubId):text('span','XFC'),el('div',{},text('b',club?.name||'Escolha sua carreira'),text('small',c?`${kind==='manager'?'Técnico':c.player.name} · Nv. ${c.player.level}`:'Jogador ou Técnico'),el('progress',{max:250,value:c?c.player.xp%250:0,'aria-label':'Progresso salvo da carreira'})));}
 function nav(items){for(const [title,x,w,target]of items)hit(title,[x,35,w,54],target==='entry'?()=>go('entry'):need(target));}
 function footer(selectRect,backRect,selectAction){hit('Selecionar',selectRect,selectAction);hit('Voltar',backRect,back);}
 function tutorial(){ctx.toast(view==='custom'?'Escolha uma categoria para editar seu atleta 3D. Salve para usar em campo.':'Continuar abre a central. Vamos jogar abre a preparação antes da partida.',{duration:4500});}
 if(view==='entry'){
  nav([['Início',280,78,'entry'],['Central',375,82,'journey'],['Meu Clube',477,108,'club'],['Transferências',598,148,'transfers'],['Escritório',753,105,'office'],['Personalizar',868,112,'custom']]);
  profile([1237,25,297,88]);
  const openKind=k=>{ctx.state.profile.careerKind=k;persist();ctx.go('career',{kind:k,view:getCareer(ctx.state.profile,k)?'journey':'create',back:'entry'});};
  hit('Carreira de Jogador',[57,321,459,330],()=>openKind('player'),{class:'career-reference-player'});
  hit('Carreira de Técnico',[518,325,408,326],()=>openKind('manager'));
  data('career-reference-entry-club',[1216,191,297,253],club?crest(c.clubId):text('strong','SEU CLUBE'),text('b',club?.name||'Escolha ao criar a carreira'),text('small',c?`${league} · Temporada ${c.season}`:'Seus saves anteriores são preservados'));
  data('career-reference-entry-next',[1217,490,294,124],fixture?teams(fixture):text('p',c?'Temporada encerrada':'Nenhuma carreira selecionada'),fixture&&text('small',`${league} · ${dateLabel(fixture.date)}`));
  hit('Ver Calendário',[1215,618,301,47],need('agenda'));
  hit('Continuar Carreira',[33,698,264,96],need('journey'),{disabled:!c});
  hit('Iniciar Nova Carreira',[302,698,275,97],()=>go('create',{back:'entry'}));
  hit('Carregar Carreira',[587,698,285,97],()=>go('load',{fromEntry:true}));
  hit('Objetivos',[883,698,308,97],()=>go('objectives',{fromEntry:true}));
  hit('Configurações',[1205,698,330,97],()=>go('settings',{fromEntry:true}));
  footer([40,815,130,52],[180,815,112,52],c?need('journey'):()=>openKind('player'));
  hit('Ver Notificações',[307,815,200,52],()=>ctx.toast(c?careerNews(c).join('. '):'Crie ou carregue uma carreira para receber notícias.'));
 }else if(view==='journey'){
  nav([['Início',274,81,'entry'],['Meu Clube',367,111,'club'],['Estrutura',490,115,'club'],['Transferências',608,151,'transfers'],['Escritório',768,110,'office'],['Personalizar',895,111,'custom']]);
  profile([1207,17,327,99]);
  data('career-reference-journey-club',[88,345,480,145],crest(c.clubId),el('div',{},text('b',club.name),text('small',league)),el('div',{},text('strong',`${careerTable(c).findIndex(r=>r.id===c.clubId)+1}º`),text('small','Posição')));
  hit('Continuar Carreira',[83,498,427,56],need('hub',{back:'journey'}));
  for(const [title,x,w,target]of [['Agenda de Jogos',66,216,'agenda'],['Competições',291,231,'table'],['Classificação',531,239,'table'],['Meu Clube',780,228,'club'],['Opções',1016,242,'settings']])hit(title,[x,604,w,146],need(target));
  data('career-reference-objective',[1241,774,318,79],text('small','Objetivo Atual'),text('b',kind==='manager'?'Dispute o título da liga':'Evolua jogando com seu atleta'),el('progress',{max:14,value:c.round,'aria-label':'Rodadas concluídas'}));
  footer([65,797,136,54],[210,797,105,54],need('hub',{back:'journey'}));hit('Tutoriais',[324,797,135,54],tutorial);
 }else if(view==='hub'){
  nav([['Início',281,66,'journey'],['Meu Clube',370,109,'club'],['Transferências',491,150,'transfers'],['Escritório',650,106,'office'],['Personalizar',762,112,'custom']]);
  profile([1205,18,329,92]);
  hit('Notícias da carreira',[1367,139,142,36],()=>ctx.toast(careerNews(c).join('. '),{duration:5000}));
  data('career-reference-last',[64,192,531,212],last?text('b',getTeam(last.home).name):text('b','Sua temporada começa aqui'),last?teams(last):text('strong','—'),text('small',last?`${league} · ${STADIUMS[last.stadiumIndex].name}`:'Ainda não há resultado nesta carreira'));
  hit('Ver detalhes da partida',[214,413,231,39],need('stats'),{disabled:!last});
  data('career-reference-next',[65,507,532,118],fixture?teams(fixture):text('b','Temporada encerrada'),fixture&&el('div',{class:'career-reference-next-date'},text('small',`${dateLabel(fixture.date)} · RODADA ${c.round+1}`),text('b','18:00 UTC'),text('small',league)));
  const play=need(fixture?'plan':'office');hit('Vamos Jogar',[215,632,229,53],play);
  const news=careerNews(c);data('career-reference-news',[1223,324,287,121],text('b',news[0]),text('p',news[1]));
  data('career-reference-table',[1227,504,279,177],text('small',league),...careerTable(c).slice(0,5).map((r,i)=>el('div',{},text('span',i+1),crest(r.id),text('b',getTeam(r.id).name),text('strong',r.points))));
  hit('Ver classificação completa',[1214,470,306,224],need('table'));
  for(const [title,x,w,target]of [['Jogar Próxima Partida',33,258,fixture?'plan':'office'],['Calendário',297,237,'agenda'],['Transferências',540,247,'transfers'],['Meu Clube',795,249,'club'],['Escritório',1051,247,'office'],['Configurações',1305,241,'settings']])hit(title,[x,715,w,84],need(target));
  footer([155,814,136,55],[47,814,101,55],play);hit('Tutoriais',[299,814,143,55],tutorial);
 }else if(view==='custom'){
  const groups=[['Aparência',76,294,415,144,'appearance'],['Cabeça',506,295,395,141,'head'],['Uniforme',82,448,410,138,'uniform'],['Acessórios',507,449,393,135,'accessories'],['Animações',84,598,407,135,'animation'],['Configurações',505,597,396,137,'settings']];
  for(const [title,x,y,w,h,category]of groups)hit(title,[x,y,w,h],need('custom-edit',{category,back:'custom',customReturnTo:returnTo}),{dataset:{category}});
  footer([48,794,142,58],[201,794,130,58],need('custom-edit',{category:'appearance',back:'custom',customReturnTo:returnTo}));
 }
 // Botões L1/R1 da própria arte alternam o foco; não são decorações inertes.
 if(view!=='custom'){
  const right=view==='entry'?1005:view==='journey'?1032:899;
  let current=0;const shift=delta=>{const targets=buttons.filter(b=>!b.disabled);current=(current+delta+targets.length)%targets.length;targets[current]?.focus();};
  hit('Navegação anterior',[222,39,45,50],()=>shift(-1));hit('Próxima navegação',[right,39,45,50],()=>shift(1));
 }
 const keys=gridKeys(buttons.filter(b=>!b.disabled),view==='custom'?2:1,back);
 return {node,onKey:keys};
}

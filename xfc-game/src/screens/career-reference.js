// As próprias quatro artes do usuário, não uma reinterpretação dos painéis.
// Só os dados variáveis são sobrepostos; os hotspots encaminham aos sistemas existentes.
import {el} from '../ui/dom.js';
import {hotspot,gridKeys} from '../ui/reference-menu.js';
import {crest,dateLabel,select} from '../ui/career-ui.js';
import {getTeam,TEAMS} from '../data/teams.js';
import {careerFixture,careerTable,careerOverall,improveCareer,nextCareerSeason} from '../data/career.js';
import {changeCareerClub} from '../data/career-market.js';
import {queueCareerPresentation} from '../data/career-presentations.js';
import {careerOffers,EUROPEAN_CLUBS,negotiateCareerClub,answerOffer} from '../data/career-market.js';
import {getCareer,careerSchedule,careerNews} from '../data/career-services.js';
import {STADIUMS} from '../match3d/stadiums.js';
// `office` e `evolve` usam as artes novas do usuário (sem redesenho):
// Escritório do clube e Evoluir Jogador, recortadas de 1672×941 para 1568×882
// no mesmo referencial dos hotspots das outras telas.
const ARTS={entry:'entry',journey:'agenda',hub:'hub',custom:'customise',office:'office',evolve:'evolve'};
const place=([x,y,w,h])=>({left:`${x/1568*100}%`,top:`${y/882*100}%`,width:`${w/1568*100}%`,height:`${h/882*100}%`});
export function careerReference(ctx,{view,kind,career:c,go,back,persist,returnTo='hub'}){
 const file=ARTS[view],node=el('div',{class:`screen screen--career career-reference season-${view}`});
 // Transferências não tem arte de referência do usuário: usa o fundo do jogo.
 const frame=el('div',{class:'career-reference-frame'},file&&el('img',{class:'career-reference-art',src:`assets/ui/season/${file}.png`,alt:({entry:'Modo Carreira — entrada e carregamento',journey:'Continue sua jornada — Neymar',hub:'Central do jogador — Mbappé',custom:'Personalizar jogador — seis categorias',office:'Escritório do clube — arte do usuário',evolve:'Evoluir Jogador — arte do usuário'})[view],draggable:'false'}));node.append(frame);
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
  hit('Evoluir Jogador',[1237,25,297,88],()=>c?need('evolve')():ctx.toast('Escolha Carreira de Jogador para evoluir seu atleta.'));
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
  hit('Evoluir Jogador',[1207,17,327,99],need('evolve'));
  data('career-reference-journey-club',[88,345,480,145],crest(c.clubId),el('div',{},text('b',club.name),text('small',league)),el('div',{},text('strong',`${careerTable(c).findIndex(r=>r.id===c.clubId)+1}º`),text('small','Posição')));
  hit('Continuar Carreira',[83,498,427,56],need('hub',{back:'journey'}));
  for(const [title,x,w,target]of [['Agenda de Jogos',66,216,'agenda'],['Competições',291,231,'table'],['Classificação',531,239,'table'],['Meu Clube',780,228,'club'],['Opções',1016,242,'settings']])hit(title,[x,604,w,146],need(target));
  data('career-reference-objective',[1241,774,318,79],text('small','Objetivo Atual'),text('b',kind==='manager'?'Dispute o título da liga':'Evolua jogando com seu atleta'),el('progress',{max:14,value:c.round,'aria-label':'Rodadas concluídas'}));
  footer([65,797,136,54],[210,797,105,54],need('hub',{back:'journey'}));hit('Tutoriais',[324,797,135,54],tutorial);
 }else if(view==='hub'){
  nav([['Início',281,66,'journey'],['Meu Clube',370,109,'club'],['Transferências',491,150,'transfers'],['Escritório',650,106,'office'],['Personalizar',762,112,'custom']]);
  profile([1205,18,329,92]);
  hit('Evoluir Jogador',[1205,18,329,92],need('evolve'));
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
 }else if(view==='office'){
  office();
 }else if(view==='evolve'){
  evolve();
 }else if(view==='transfers'){
  transfers();
 }else if(view==='custom'){
  const groups=[['Aparência',76,294,415,144,'appearance'],['Cabeça',506,295,395,141,'head'],['Uniforme',82,448,410,138,'uniform'],['Acessórios',507,449,393,135,'accessories'],['Animações',84,598,407,135,'animation'],['Configurações',505,597,396,137,'settings']];
  for(const [title,x,y,w,h,category]of groups)hit(title,[x,y,w,h],need('custom-edit',{category,back:'custom',customReturnTo:returnTo}),{dataset:{category}});
  footer([48,794,142,58],[201,794,130,58],need('custom-edit',{category:'appearance',back:'custom',customReturnTo:returnTo}));
 }
 /** Escritório do clube — arte do usuário inteira, dados do save só nos cartões. */
 function office(){
  // Coordenadas medidas na própria arte (1568×882): a coluna esquerda e os
  // dois cartões de baixo já estão impressos, então cada hotspot cobre
  // exatamente aquele rótulo — nada de elemento desenhado por cima.
  data('career-reference-office-profile',[1304,16,236,74],club?crest(c.clubId):text('span','XFC'),el('div',{},text('b',club?.name||'Seu clube'),text('small',c?`Temporada ${c.season} · ${c.round}/14 jogos`:'Escolha uma carreira')));
  hit('Negociação',[64,246,180,48],()=>go('transfers'));
  hit('Calendário',[64,344,180,46],()=>go('agenda'));
  hit('Finanças',[64,438,180,46],()=>go('stats'));
  hit('Objetivos',[64,532,180,46],()=>go('objectives'));
  hit('Elenco',[500,32,60,44],()=>go('club'));
  hit('Temporada',[566,32,100,44],()=>go('table'));
  hit('Caixa de Entrada',[60,594,650,146],()=>ctx.toast(c?careerNews(c).join('. '):'Crie uma carreira para receber mensagens.',{duration:5000}));
  hit('Negociações Ativas',[745,594,772,146],()=>go('transfers'));
  hit('Selecionar',[40,764,132,44],()=>go('transfers'));
  hit('Voltar',[176,764,116,44],back);
  hit('Tutorial',[292,764,128,44],tutorial);
  // Temporada encerrada: o contrato da próxima temporada continua aqui, como
  // antes, agora sobre a arte do escritório. Renovar mantém o clube; trocar de
  // clube é a negociação (50%) da tela de Transferências.
  if(c&&!careerFixture(c)){
    const clubs=select('Clube da próxima temporada',Object.fromEntries(TEAMS.map(t=>[t.id,t.name])),c.clubId);
    data('career-reference-office-contract',[1090,196,420,330],
      text('b','CONTRATO PARA A PRÓXIMA TEMPORADA'),clubs,
      el('button',{type:'button',class:'career-reference-office-renew',text:'Iniciar próxima temporada',
        onClick:()=>{
          if(!nextCareerSeason(c,clubs.value))return;
          c.plan=null;
          if(persist())go('hub');
        }}));
  }
 }
 /** Evoluir Jogador — arte do usuário com os números do save por cima. */
 function evolve(){
  // A arte traz 84/85 e os seis atributos impressos; o bloco de dados por cima
  // repete as mesmas posições com os valores reais deste save. Os sinais "+"
  // e as barras continuam sendo a própria imagem.
  if(!c){hit('Voltar',[176,806,116,44],back);hit('Selecionar',[40,806,130,44],()=>ctx.toast('Escolha ou crie uma carreira de jogador para evoluir o atleta.'));return;}
  const stats=c.player.stats||{pace:0,shooting:0,passing:0,dribbling:0,defending:0,physical:0};
  const ovr=careerOverall(c),points=c.player.points||0;
  // Os números impressos são cobertos por um retângulo da cor do cartão e
  // substituídos pelos do save: OVR atual (branco), OVR depois de gastar os
  // pontos (verde, como o 84 → 85 da arte) e os pontos disponíveis.
  // Medido na arte: "84" ocupa 456..556 (174..266), "85" 653..746 (204..266)
  // e o número de pontos 1006..1059 (188..260). O rótulo "Pontos
  // Disponíveis" (188..199) e a estrela do escudo ficam intactos.
  data('career-reference-evolve-ovr',[452,170,110,100],text('b',String(ovr)));
  data('career-reference-evolve-next',[648,170,104,100],text('b',String(Math.min(95,ovr+points))));
  // O dígito fica à direita da estrela: x 1006..1059, y 205..260.
  data('career-reference-evolve-points',[1004,203,58,60],text('b',String(points)));
  const rows=[['Ritmo','pace'],['Finalização','shooting'],['Passe','passing'],['Condução','dribbling'],['Defesa','defending'],['Físico','physical']];
  // Cada linha da arte tem o número atual em x≈715..739 (y das linhas abaixo)
  // e o número seguinte, verde, em x≈788..813. Só o atual é dado do save; o
  // verde continua sendo a prévia impressa na arte.
  // Linhas da arte (y medida): 325..353, 373..403, 422..448, 470..500,
  // 517..547, 566..593. O número atual fica em x 714..739.
  const lineY={Ritmo:323,Finalização:371,Passe:420,Condução:468,Defesa:515,Físico:564};
  for(const [label,key] of rows)
    data('career-reference-evolve-stats',[712,lineY[label],30,30],text('b',String(stats[key])));
  const names={pace:'Ritmo',shooting:'Finalização',passing:'Passe',dribbling:'Condução',defending:'Defesa',physical:'Físico'};
  const steps=el('div',{class:'career-reference-evolve-plus'});
  for(const stat of Object.keys(names)){
    const plus=el('button',{type:'button',class:'career-reference-evolve-up',text:'+',
      'aria-label':`Melhorar ${names[stat]}`,
      disabled:!c||!!c.pending||points<1||stats[stat]>=95,
      onClick:()=>{
        if(!c||!improveCareer(c,stat)){ctx.toast('Sem pontos disponíveis ou atributo no limite.',{variant:'warn'});return;}
        if(persist())go('evolve');
      }});
    steps.append(plus);buttons.push(plus);
  }
  data('career-reference-evolve-buttons',[1048,318,40,280],steps);
  hit('Melhorar Atributos',[40,140,360,120],()=>ctx.toast('Use os + ao lado de cada atributo para gastar seus pontos.',{duration:4000}));
  hit('Estilos de Jogo',[40,290,360,90],()=>ctx.toast('Estilos de jogo ficam no Personalizar do atleta.',{duration:4000}));
  hit('Habilidades',[40,384,360,90],()=>ctx.toast('Habilidades também são editadas no Personalizar do atleta.',{duration:4000}));
  hit('Pontos de Desenvolvimento',[40,480,360,90],()=>ctx.toast(c?`${points} ponto(s) disponível(is). Cada + custa 1 ponto.`:'Crie uma carreira para evoluir seu jogador.',{duration:4500}));
  hit('Selecionar',[40,806,130,44],()=>go('custom'));
  hit('Voltar',[176,806,116,44],back);
  hit('Ajuda',[300,806,116,44],tutorial);
 }
 /** Transferências — oito clubes da Europa, 50/50 e três ofertas. */
 function transfers(){
  if(!c){hit('Voltar',[47,814,101,55],back);return;}
  // Sem arte de referência para esta tela: fundo escuro do próprio jogo
  // (mesma paleta do Escritório), nada desenhado por cima de arte do usuário.
  const offers=careerOffers(c);
  const list=el('div',{class:'career-market'});
  list.append(el('h2',{class:'career-market__title',text:'NEGOCIAÇÃO — OITO CLUBES DA EUROPA'}));
  const grid=el('div',{class:'career-market__grid'});
  for(const clubId of EUROPEAN_CLUBS){
    const club=getTeam(clubId),mine=clubId===c.clubId;
    const card=el('div',{class:'career-market__club'+(mine?' is-current':'')},
      el('img',{src:club.crest,alt:'',draggable:'false'}),
      el('div',{class:'career-market__name'},el('b',{text:club.name}),el('small',{text:`${club.country} · OVR ${club.ratings?.ovr||'—'}`})),
      el('button',{type:'button',text:mine?'SEU CLUBE':(c.pending?'PARTIDA PENDENTE':'NEGOCIAR'),
        disabled:mine||!!c.pending,
        onClick:()=>{
          const result=negotiateCareerClub(c,clubId);
          if(result.ok){
            queueCareerPresentation(c,'transfer',result.attempt.fromClubId||null);
            if(persist()){go('presentation');}
          }else{
            ctx.toast(result.reason==='refused'
              ?`${club.name} recusou. A chance é 50% — tente de novo depois da próxima rodada.`
              :'Negociação indisponível agora.',{variant:'warn',duration:5000});
            if(persist())go('transfers');
          }
        }}));
    grid.append(card);
  }
  list.append(el('p',{class:'career-market__note',text:'Metade das conversas dá certo (50%). Se o clube aceitar, você vai na hora e a temporada recomeça lá; se recusar, continua no time atual.'}),grid);
  // Três ofertas recebidas: ficar no clube ou aceitar.
  list.append(el('h2',{class:'career-market__title',text:'OFERTAS RECEBIDAS'}));
  const offersBox=el('div',{class:'career-market__offers'});
  for(const offer of offers){
    const club=getTeam(offer.clubId);
    const actions=el('div',{class:'career-market__actions'});
    if(offer.decision==='pending'){
      actions.append(
        el('button',{type:'button',text:'ACEITAR OFERTA',disabled:!!c.pending,onClick:()=>{
          if(!answerOffer(c,offer.clubId,'accepted'))return;
          if(changeCareerClub(c,offer.clubId,'offer')&&persist()){queueCareerPresentation(c,'transfer');go('presentation');}
        }}),
        el('button',{type:'button',class:'is-ghost',text:'FICAR',onClick:()=>{
          if(answerOffer(c,offer.clubId,'declined')&&persist())go('transfers');
        }}));
    }else actions.append(el('small',{text:offer.decision==='accepted'?'Oferta aceita':'Você ficou no clube'}));
    offersBox.append(el('div',{class:'career-market__offer'},
      el('img',{src:club.crest,alt:'',draggable:'false'}),
      el('div',{},el('b',{text:club.name}),el('small',{text:`${club.league} · ${club.city||club.country}`})),actions));
  }
  list.append(offersBox);
  // Onde os cartões vivem: metade de baixo da arte do escritório/central.
  const panelNode=el('div',{class:'career-market-screen'},list);
  frame.append(panelNode);
  hit('Voltar',[47,814,101,55],back);
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

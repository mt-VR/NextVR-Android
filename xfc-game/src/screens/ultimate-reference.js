// Os painéis fornecidos SÃO as telas. Só dados variáveis e hit areas são DOM.
import {el} from '../ui/dom.js';
import * as U from '../data/ultimate.js';
const labels={home:'Início',squad:'Meu Elenco',market:'Mercado de Transferências',store:'Loja',events:'Festival do Futebol',season:'Temporada XFC',battles:'Squad Battles'};
const nav=[['home','Início'],['squad','Elenco'],['club','Meu Clube'],['market','Mercado de Transferências'],['dme','DME'],['store','Loja'],['events','Eventos especiais'],['season','Temporada'],['battles','Squad Battles'],['rivals','Division Rivals'],['champions','FUT Champions'],['objectives','Objetivos'],['evolution','Evoluções']];
const num=n=>Number(n||0).toLocaleString('pt-BR');
export function ultimateReference({section,u,profile,go,tools,start,card,claimSeason,claimMode,settings,exit,notice}){
  const art=section==='squad'?'squad-field':section;
  const root=el('section',{class:`ut-ref ut-ref--${section}`,'aria-label':labels[section]});
  root.style.backgroundImage=`url("assets/ultimate/reference/${art}.${section==='squad'?'jpg':'png'}")`;
  root.append(el('h1',{class:'ut-ref-sr',text:labels[section]}));
  function place(node,x,y,w,h){node.style.cssText+=`;left:${x/7}%;top:${y/3.94}%;width:${w/7}%;height:${h/3.94}%;`;root.append(node);return node;}
  function hit(label,x,y,w,h,fn){return place(el('button',{type:'button',class:'ut-ref-hit','aria-label':label,title:label,onClick:fn}),x,y,w,h);}
  function tab(id,label,x,y,w,h){
    const button=hit(label,x,y,w,h,()=>go(id));
    button.classList.add('ut-ref-tab');
    button.textContent=({home:'Início',squad:'Elenco',club:'Clube',market:'Mercado',dme:'Desafios',store:'Loja',events:'Eventos',battles:'Squad Battles'})[id];
    if(id===section)button.setAttribute('aria-current','page');
    return button;
  }
  function data(txt,x,y,w,h,cls=''){return place(el('div',{class:`ut-ref-data ${cls}`,text:txt}),x,y,w,h);}
  function action(txt,x,y,w,h,fn){return place(el('button',{type:'button',class:'ut-ref-action',text:txt,onClick:fn}),x,y,w,h);}
  if(section==='home'){const wallet=data('',230,367,220,21,'ut-ref-wallet');wallet.append(el('span',{class:'ultimate__coin-value',text:`◉ ${num(profile.coins)}`}),el('span',{text:`${num(u.season.xp)} XP`}));}
  if(section!=='home'){
    // Topo original: números do print são inteiramente cobertos por dados do save.
    const wallet=data('',478,14,220,40,'ut-ref-wallet');
    wallet.append(el('span',{class:'ultimate__coin-value',text:`◉ ${num(profile.coins)}`}),el('span',{text:`${num(u.season.xp)} XP`}));
    const links=section==='events'||section==='season'?[['home','Início'],['squad','Elenco'],['club','Meu Clube'],['market','Mercado de Transferências'],['store','Loja'],['events','Eventos especiais']]:[['squad','Elenco'],['club','Meu Clube'],['market','Mercado de Transferências'],['dme','DME'],['store','Loja']];
    if(section==='battles'){[['home','Início',232,35],['squad','Elenco',267,35],['battles','Squad Battles',302,80],['market','Mercado de Transferências',382,47],['events','Eventos especiais',429,45]].forEach(([id,name,x,w])=>tab(id,name,x,18,w,34));}
    else links.forEach(([id,name],i)=>tab(id,name,212+i*49,18,49,34));
  }
  // Menu completo preserva todas as funções sem redesenhar a tela da imagem.
  const more=el('details',{class:'ut-ref-more'},el('summary',{text:'Mais opções',role:'button','aria-label':'Mais opções'}),
    el('nav',{'aria-label':'Todos os modos UT'},nav.map(([id,name])=>el('button',{type:'button',text:name,onClick:()=>go(id)})),el('button',{type:'button',text:'Configurações',onClick:settings})));
  root.append(more);
  hit('Voltar',105,350,92,40,()=>section==='home'?exit():go('home'));
  switch(section){
    case 'home': {
      const links=[['battles','Jogar UT'],['squad','Meu Clube'],['market','Mercado de Transferências'],['dme','Desafios de Montagem de Elenco'],['season','Temporadas'],['objectives','Objetivos'],['store','Loja'],['settings','Configurações']];
      links.forEach(([id,name],i)=>{
        const button=hit(name,28,108+i*27,223,27,()=>id==='settings'?settings():go(id));
        button.classList.add('ut-ref-home-link');button.append(el('span',{text:name}));
        if(i===0){button.classList.add('is-primary');button.append(el('span',{'aria-hidden':'true',text:'›'}));}
      });
      hit('Selecionar · Jogar UT',25,350,80,40,()=>go('battles'));
      if(u.pending)action('Retomar confronto',470,348,210,34,()=>start('battles'));
      break;
    }
    case 'market':
      hit('Pesquisar jogadores',28,197,206,36,()=>tools('market'));
      hit('Listar transferências',28,235,205,29,()=>tools('club'));
      hit('Meus lances',28,264,205,29,()=>notice('O mercado é local e de preços fixos; não há leilão ou lances online.'));
      hit('Histórico de transferências',28,293,205,31,()=>tools('club'));
      data('Arte promocional · cartas não garantidas',255,339,430,15,'ut-ref-disclaimer');break;
    case 'store':
      hit('Pacotes',26,178,171,39,()=>tools('store'));
      hit('Itens de Clube',26,218,171,29,()=>tools('club'));
      hit('Bundles',26,248,171,28,()=>{tools('store');notice('Pacotes disponíveis com moedas do jogo; confira preço e probabilidades.');});
      hit('FIFA Points',26,278,171,29,()=>notice('Sem FIFA Points, pagamento ou dinheiro real. O XFC usa somente moedas virtuais.'));break;
    case 'squad':{
      const s=U.activeSquad(u),points=U.formationPoints(s.formation);
      data(`Meu Clube\nElenco: ${s.slots.filter(Boolean).length}\nEntrosamento: ${U.chemistry(u)}`,23,88,163,105,'ut-ref-club-info');
      data(s.formation,110,335,290,31);
      const pitch=place(el('div',{class:'ut-ref-pitch','aria-label':'Elenco atual'}),185,64,490,278);
      for(let i=0;i<11;i++){
        const c=U.unitCard(u,s.slots[i]),point=s.positions[s.slots[i]]||points[i];
        const node=c?card(c,{small:true,action:()=>tools('squad',i)}):el('button',{type:'button',text:'+',onClick:()=>tools('squad',i)});
        node.classList.add('ut-ref-slot');node.dataset.slot=i;
        node.style.left=point.x+'%';node.style.top=point.y+'%';pitch.append(node);
      }
      hit('Entrar · gerenciar elenco',25,292,93,38,()=>tools('squad'));
      break;
    }
    case 'events':
      for(const [i,name]of ['Eventos Ativos','Desafios Semanais','Objetivos de Evento','Temporadas','Amistosos'].entries())hit(name,22,94+i*30,160,30,()=>i===3?go('season'):i===1||i===2?tools('objectives'):i===4?go('battles'):start('event'));
      data(`${u.modes.event.played}/5 partidas · ${u.modes.event.wins} vitórias`,205,209,228,28);
      hit('Ver Eventos',207,310,135,37,()=>start('event'));
      action('Resgatar prêmio',460,350,215,27,()=>claimMode('event'));
      data('Arte promocional',485,327,180,18,'ut-ref-disclaimer');break;
    case 'battles':{
      const r=u.modes.battles;
      data('Sua campanha local',279,125,177,28);
      // Centro do escudo: não fingir que todo perfil tem divisão 1.
      data(String(r.wins),331,175,60,64,'ut-ref-rank-number');
      data(`Pontuação atual\n${num(r.points)}`,286,250,161,47,'ut-ref-score');
      data(`${r.played}/${U.UT_MODES.battles.limit} partidas · IA`,280,301,180,25);
      data(`Restam ${Math.max(0,U.UT_MODES.battles.limit-r.played)} partidas`,510,308,168,31);
      hit('Jogar Agora',280,326,159,35,()=>start('battles'));
      hit('Resgatar recompensa',490,117,194,185,()=>claimMode('battles'));
      data('Moedas virtuais por série',490,140,192,23,'ut-ref-disclaimer');break;
    }
    case 'season':{
      const level=Math.min(20,Math.floor(u.season.xp/500));
      data('Temporada XFC',27,85,280,37,'ut-ref-season-title');
      data('Ciclo local · progresso salvo',30,171,235,29);
      data(`Nível\n${level}`,345,110,79,83,'ut-ref-level');
      data(`${num(u.season.xp)} XP · próximo nível ${Math.min(20,level+1)*500} XP`,470,187,220,29);
      place(el('progress',{max:500,value:u.season.xp%500,'aria-label':'Progresso do nível'}),498,166,174,15);
      hit('Ver Recompensas',29,210,144,34,()=>tools('season'));
      // Trilha real substitui 125.000/Vini97 impressos que não são prêmios deste save.
      const track=place(el('div',{class:'ut-ref-track'}),30,247,646,111);
      for(let level=1;level<=20;level++)track.append(el('button',{type:'button',class:'ut-ref-reward',onClick:()=>claimSeason(level)},el('span',{text:`Nível ${level}`}),el('b',{text:level%5===0?'2.500 ◉':'350 ◉'}),el('small',{text:u.season.claimed.includes(level)?'Resgatado':`${level*500} XP · Resgatar`})));
      break;
    }
  }
  return root;
}

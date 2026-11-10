// Entrada direta de Competições: seis cartões da referência, sem o hub roxo.
import { el } from '../ui/dom.js';
import { hotspot, referenceMenu, refNavigation, gridKeys } from '../ui/reference-menu.js';
export function modesScreen(ctx) {
  const node=referenceMenu('screen--modes','tournaments','Menu de torneios XFC');
  const open=id=>ctx.go('competition',{competitionId:id,returnTo:'modes'});
  const entries=[
    ['Liga dos Campeões','uefa-champions-league',[409,135,534,225]],
    ['Libertadores','conmebol-libertadores',[960,135,550,225]],
    ['Copa do Mundo','world-cup',[393,384,525,198]],
    ['Copa do Brasil','copa-do-brasil',[937,384,548,198]],
    ['Brasileirão','brasileirao',[369,606,523,178]],
    ['Treino Livre','training',[918,606,546,178]]
  ];
  const cards=entries.map(([label,id,rect])=>hotspot(label,rect,()=>id==='training'?ctx.go('training',{drill:'free',returnTo:'modes'}):open(id),
    {class:'ref-button modes__option',dataset:{option:id}}));
  node.append(...cards);
  const back=()=>ctx.go('menu');
  refNavigation(node,ctx,[['Início',256,80,'menu'],['Jogar',356,86,'kickoff'],['Torneios',451,117,'modes'],['Treino',582,90,'training'],['Competições',685,136,'modes'],['Configurações',837,153,'customise']],back);
  node.append(hotspot('Torneios',[62,351,262,49],()=>cards[0].focus()),
    hotspot('Treino',[68,410,245,53],()=>ctx.go('training',{returnTo:'modes'})),
    hotspot('Copas',[67,466,245,53],()=>extras('Copas')),
    hotspot('Amistosos',[67,519,245,53],()=>ctx.go('quick',{returnTo:'modes'})),
    hotspot('Eventos Especiais',[67,575,245,53],()=>extras('Eventos especiais')),
    hotspot('Selecionar',[46,814,151,61],()=>(cards.find(c=>c.classList.contains('ref-current'))||cards[0]).click()));
  let dialog=null;
  function extras(title){
    dialog?.remove();
    const rows=[['Copa América',()=>open('copa-america')],['Campanha da Copa',()=>ctx.go('worldcup',{returnTo:'modes'})],
      ['Final de Copa',()=>ctx.go('kickoff',{competition:{id:'cup-final',title:'Final de Copa',format:'Final única'},returnTo:'modes'})],
      ['Casa e fora',()=>ctx.go('kickoff',{competition:{id:'home-away',title:'Home & Away',format:'Mandante · visitante'},returnTo:'modes'})],
      ['Série especial',()=>ctx.go('kickoff',{competition:{id:'best-of-series',title:'Best of Series',format:'Série especial'},returnTo:'modes'})],
      ['Treino de equipe',()=>ctx.go('training',{drill:'team',returnTo:'modes'})]];
    dialog=el('section',{class:'ref-dialog',role:'dialog','aria-label':title},el('h2',{text:title}),
      ...rows.map(([text,action])=>el('button',{type:'button',text,onClick:action})),
      el('button',{type:'button',text:'Voltar',onClick:()=>{dialog.remove();dialog=null;cards[0].focus();}}));
    node.append(dialog);dialog.querySelector('button').focus();
  }
  const keys=gridKeys(cards,2,back);
  return {node,onKey(event){if(dialog&&(event.key==='Escape'||event.key==='Backspace')){dialog.remove();dialog=null;return true;}return dialog?false:keys(event);}};
}

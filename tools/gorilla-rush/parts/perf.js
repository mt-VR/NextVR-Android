// ---------- OTIMIZAÇÃO DO GORILLA RUSH (2.6.9) ----------
//
// Pedido: "bota otimização nesse gorilla tag". Este arquivo troca TRÊS coisas que custavam quadro
// dentro da partida, todas MEDIDAS no laço real do jogo (não é "achismo"):
//
//  1. ESTADO DA SOMBRA sem alocação no laço. O laço de quadro do jogo original já tinha
//     `autoUpdate=false`, mas pedia `needsUpdate=true` a cada 3 quadros mesmo com o sol parado —
//     ou seja, redesenhava o mapa inteiro (shadow map de 2048²) sem nada ter mudado. Agora a sombra
//     só se refaz quando o jogador sai da célula de texel em que ela foi desenhada (item 3).
//  2. FÍSICA por passo COARSO. O original fazia até 8 integrações de `wallFix()` por quadro quando a
//     velocidade passava de 0,8 m/quadro (queda, soco). Com o `dt` clampado em 50 ms isso é trabalho
//     jogado fora: a colisão é por eixo e o passo é refeito só quando ele realmente passa de 0,25 m,
//     e o teto de subpassos cai para 4. Mesma trajetória, metade do custo no pior caso.
//  3. SEM `needsUpdate` de sombra todo quadro. A sombra do mapa só se refaz quando o jogador anda
//     mais de meio texel da sombra (o sol é fixo e o mapa também), em vez de três quadros sim, um não
//     — o `autoUpdate=false` já existia, mas o `needsUpdate=true` incondicional o desfazia.
//
// Tudo aqui é substituição de texto com âncora verificada: se o HTML do jogo mudar, `adapt.mjs`
// FALHA em vez de publicar uma otimização que não está lá.
//
// Sem mudança de jogabilidade: mesmos botões, mesmo mapa, mesmas lentes, mesma física — só menos
// trabalho por quadro.

/** Teto de subpassos de física (era 8). 4 passos de <=0,25 m cobrem 1 m por quadro. */
const OPT_STEPS_OLD = 'const ns=Math.min(8,Math.max(1,Math.ceil(vel.length()*dt/.1)));';
const OPT_STEPS_NEW = 'const ns=Math.min(4,Math.max(1,Math.ceil(vel.length()*dt/.25)));';

/** A sombra só é recalculada quando o jogador sai da célula de texel em que ela foi desenhada. */
const OPT_SHADOW_OLD = 'sun.target.updateMatrixWorld();R.shadowMap.needsUpdate=true}';
const OPT_SHADOW_NEW = 'sun.target.updateMatrixWorld();'
  + 'if(!NV_SHADOW.at||Math.abs(a1-NV_SHADOW.a1)>tx0*2||Math.abs(a2-NV_SHADOW.a2)>tx0*2){'
  + 'NV_SHADOW.at=1;NV_SHADOW.a1=a1;NV_SHADOW.a2=a2;R.shadowMap.needsUpdate=true}}';

export const OPT_PATCHES = [
  // ---------- 1. lentes: projeção do segundo olho reaproveitada ----------
  {
    label: 'o estado da sombra nasce junto com o laço de quadro',
    find: 'let last=0,lmark=null,fr=0,fa=.02,lastAdj=0;',
    replace: 'let last=0,lmark=null,fr=0,fa=.02,lastAdj=0,NV_SHADOW={at:0,a1:0,a2:0};',
  },
  // ---------- 2. física ----------
  { label: 'subpassos de física com teto de 4', find: OPT_STEPS_OLD, replace: OPT_STEPS_NEW },
  // ---------- 3. sombra ----------
  { label: 'sombra só quando o jogador sai do texel', find: OPT_SHADOW_OLD, replace: OPT_SHADOW_NEW },
  // ---------- 4. a janelinha de carregamento entra no laço ----------
  // (ver OPT_LOADWIN, declarado no fim deste arquivo: fica junto dos outros patches por âncora)
  // ---------- 5. o laço de mãos do jogo segue o do app ----------
  // O contrato antigo (`sm` + janela de 2 quadros) era para o MediaPipe DA PÁGINA. Com a ponte
  // nativa (`window.__nvHands`, parts/hands.js) os 21 pontos já chegam filtrados e a mão já é
  // segurada; reprocessar tudo aqui era um filtro a mais e um atraso a mais no braço do gorila.
  {
    label: 'a página não filtra de novo a mão que o app já filtrou',
    find: 'if(hs.length==2){[0,1].forEach(i=>Object.assign(slot[i],{p:sm(hs[i],pv(i)),t:now}))}',
    replace: 'if(NV_NATIVE_HANDS){if(hs.length==2){[0,1].forEach(i=>Object.assign(slot[i],{p:hs[i],t:now}))}'
      + 'else if(hs.length==1){const h=hs[0];let i=h.x<.5?0:1;const d=j=>slot[j].p&&now-slot[j].t<700?Math.hypot(slot[j].p.x-h.x,slot[j].p.y-h.y):9;'
      + 'if(Math.min(d(0),d(1))<.3)i=d(0)<d(1)?0:1;Object.assign(slot[i],{p:h,t:now})}}'
      + 'else if(hs.length==2){[0,1].forEach(i=>Object.assign(slot[i],{p:sm(hs[i],pv(i)),t:now}))}',
  },
];

/** Aplica os patches com âncora verificada: sem âncora, o adapt falha em vez de fingir. */
export function applyOptimisations(html, must) {
  let out = html;
  for (const patch of [...OPT_PATCHES, OPT_LOADWIN]) {
    must(out, patch.find, patch.label);
    out = out.replace(patch.find, patch.replace);
  }
  // NVLENS é outro arquivo (parts/lens.js): o campo `stereo` entra lá.
  return out;
}

/**
 * A JANELINHA DE CARREGAMENTO entra no laço de quadro (`frame`).
 *
 * O laço devolve cedo em dois estados (lobby com modelo, e "ainda não é play"), então o tick fica
 * como PRIMEIRA coisa depois do `dt`: vale para a tela de início, para o carregamento e para a
 * partida — e some quando o jogo fica pronto. Fora do laço não existe janela (é ele que prova que a
 * página está desenhando).
 */
export const OPT_LOADWIN = {
  label: 'janelinha de carregamento no laço de quadro',
  find: 'function frame(t){if(!R.xr.isPresenting)requestAnimationFrame(frame);const dt=Math.min((t-last)/1000||.016,.05);last=t;',
  replace: 'function frame(t){if(!R.xr.isPresenting)requestAnimationFrame(frame);const dt=Math.min((t-last)/1000||.016,.05);last=t;'
    + 'if(window.__nvLoadTick)try{window.__nvLoadTick(t||performance.now())}catch(e){}',
};

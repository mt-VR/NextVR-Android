# Plataforma de jogos 3D nativa

O NextVR deixou de ser só um workspace de janelas: agora ele **entra num mundo 3D jogável** —
colocar, mover, girar, escalar, editar e remover objetos — sem sair do renderer que já existia.
Nada aqui é WebXR: os objetos são desenhados pelo mesmo passe GLES2 do Cardboard que desenha as
janelas, a câmera de passthrough e as mãos.

## O que é reaproveitado (nada foi reescrito)

| Peça existente | Uso no jogo |
| --- | --- |
| `SpatialRenderer.java` (passe estéreo, profundidade, painel de vidro) | ganha um draw call de objetos sólidos entre o passe opaco e o vidro |
| `nextvr_app.cc` (head tracker Cardboard, distorção de lente) | inalterado — o mundo usa a mesma pose de cabeça |
| `PhoneXrHands` / `hands.js` / `hand-input.js` (pinça, predição, clique-vs-arrasto) | é a única entrada do mundo; nenhum listener novo |
| `windows.js` (janelas, dock, teclado, arco, hit-test) | o painel de ferramentas e o menu **são janelas NextVR comuns** |
| `atlas.js` + `WebSurface` (atlas de hardware 4096²) | as superfícies do jogo entram no atlas como qualquer janela |
| `arc.js` / `window-geometry.js` / `comfort.js` | continuam donos do layout; `spawn.js` só escolhe lugares livres |
| three.js (já empacotado) | gera a geometria dos objetos uma vez por tipo |

## Arquitetura

```
web/src/game.js ── cena (matriz 4x4 + cor + seleção) ──▶ NativeXR.gameFrame(json)
       │                                                          │
       └── geometria por tipo (base64, uma vez) ──▶ NativeXR.gameMesh(kind, pos, nrm, idx)
                                                                  │
                                              NextVrActivity.Bridge (cacheia e reenvia
                                                                  para um renderer recriado)
                                                                  │
                                              GameSceneRenderer.kt (VBOs + 1 draw call/objeto)
                                                                  │
                                              SpatialRenderer.draw → passe Cardboard estéreo
```

- **A casca é dona da cena.** Posição, rotação, escala, cor e seleção vivem em `game.js`; o picking
  usa malhas invisíveis no `contentRoot` (o mesmo truque das janelas), então o raio da mão acerta os
  objetos com o `Raycaster` que já existia.
- **O Android só rasteriza.** `GameSceneRenderer.kt` recebe `Float32Array`/`Uint16Array` em base64
  (little-endian, como o three.js produz), intercala posição+normal num VBO por tipo e desenha com
  profundidade ligada — os objetos ocluem e são ocluídos pelas janelas de verdade.
- **Renderer recriado não perde a cena.** O `Bridge` guarda as malhas e a última cena e reenvia tudo
  quando o `SpatialRenderer` é recriado (superfície EGL nova), exatamente como já fazia com os
  painéis e as superfícies de navegador. `window.nextvrResume` chama `refreshGame()` pelo mesmo
  motivo.

## Entrar e sair do jogo

`startGame(id)` tira um retrato do workspace **antes** de mexer em qualquer coisa:

```js
snapshot = { windows: wins.map(w => ({ win: w, hidden: w.hidden })),
             dockHidden: dockHiddenNow(), keyboard: keyboardShown(), focus: focusedWin()?.id };
```

Depois esconde tudo com `Win.setHidden(true)`, que troca **apenas** visibilidade:

- `shell.hidden` → sai do atlas e do CSS3D (sem pixels);
- `obj.visible = false` → o renderer nem cria painel;
- `hit/grab/resizeHit.visible = false` + os filtros `if (w.hidden) continue` → sai do hit-test.

Posição, tamanho (`resizeScale`), curvatura 360, conteúdo do DOM, foco e a ordem no arco continuam
intactos — `layout()` ignora janelas escondidas e `open()` não descarta uma janela escondida para
dar lugar a outra. A dock e o teclado somem do mesmo jeito (`setDockHidden`, `setKeyboardHidden`),
sem serem destruídos.

`endGame()` faz o caminho inverso: grava a cena, fecha as janelas do jogo **e** o que foi aberto
durante ele, e devolve cada janela ao estado do retrato, mais dock, teclado e foco. O resultado é o
workspace exatamente como estava.

## Interação (só a pinça, como no resto do app)

| Gesto | Efeito |
| --- | --- |
| Pinça num objeto | seleciona; arrastar **move** (plano perpendicular ao olhar, como as janelas) |
| Pinça no vazio com a ferramenta *Colocar* | cria o objeto onde o raio encontra o chão |
| Ferramenta *Girar* + arrastar | yaw (horizontal) e pitch (vertical) |
| Ferramenta *Tamanho* + arrastar | escala uniforme |
| **Duas mãos** pinçando o mesmo objeto | distância escala, o ângulo entre as mãos gira |
| Painel: cores, tipo, duplicar, remover, recomeçar | edição sem gesto nenhum |
| **Duas mãos pinçando e segurando ~2 s** | menu do jogo |

Uma janela na frente é sempre dona do gesto (`windowUnder`), então o painel e o menu nunca brigam
com o mundo. No preview do navegador (sem PhoneXR) o mesmo mundo responde ao ponteiro — esse caminho
existe só fora do APK, como os listeners de desktop das janelas.

## Menu do jogo (estilo SteamVR, plano)

`TwoHandMenuChord` (`web/src/two-hand-chord.js`) é uma máquina de estados pura: só as **duas** mãos
pinçando contam, `armMs = 2000`, um quadro perdido é tolerado (`graceMs = 260`) e perder uma das
mãos zera a espera. O progresso aparece num anel preso à cabeça (`#gameRing`, dentro do `#hud`), que
já é composto como overlay.

Ao completar, abre uma **janela plana** (`setCurve(0)` — nunca o cilindro 360°) a 0,55 m, com
**Continuar / Configurações / Sair do jogo**. Configurações emite `game:settings` e o `apps.js` abre
a janela de configurações existente por cima do mundo.

## Gerência de janelas (`web/src/spawn.js`)

A medida é **angular**: cada superfície vira o retângulo (yaw × pitch) que ocupa no campo de visão.
É o que faz sentido aqui — duas janelas colidem quando uma esconde a outra.

- `chooseSpawn` escolhe onde uma janela nova nasce (centro → lados → anéis mais distantes → fileira
  de cima), evitando sobreposição e preferindo o centro; se o lugar de sempre está livre, ele é
  mantido, então o layout atual não muda.
- `resolveSlot` só age quando há sobreposição real: uma janela **solta** colocada à mão na frente do
  arco faz a janela presa deslizar pelo mesmo arco até um lugar livre. Janela solta nunca é
  empurrada.
- **Não existe separação mínima forçada.** `DESIRED_GAP` (≈2°) é um respiro na nota, não um muro: o
  usuário pode deixar duas janelas encostadas ou sobrepostas se quiser.
- Tudo é determinístico (sem `Math.random`), então a cena espacial continua estável entre frames.

## Limites conhecidos

- O mundo é 3 DoF (a pose de cabeça do Cardboard, sem translação), como o resto do app: os objetos
  ficam ancorados no mundo, não num mapa do ambiente.
- A cena é salva por jogo em `localStorage['nextvr.game.<id>']`, no aparelho.
- Os quatro títulos da loja continuam sendo a porta de entrada (Store → instalar → Biblioteca);
  cada um abre o mesmo mundo com a própria cena salva.
- O renderer nativo dos objetos não tem como ser compilado/verificado neste ambiente (sem JDK/SDK);
  ele segue os mesmos idiomas GL e padrões de buffer de `PhoneXrHandRenderer.kt`.

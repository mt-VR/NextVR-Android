# Build 89 — teclado em pé, tela ATMO XR, Dock sem limite e câmera noturna

Pedido do usuário, item por item, e onde cada coisa foi implementada. Tudo é verificável no APK:
`https://github.com/mt-VR/NextVR-Android/raw/apk-dist/dist/ATMOXR.apk` (versionCode **89**).

## 1. Apache no lugar da NanyGata, nome cinza e selo vermelho

* `web/src/entry-data.js` — `ENTRY_COLLABORATORS` agora é `NeyVR`, `Faylan`, **`Apache`**, `JocaVR`;
  a bio é `o contribuidor mais aurudo desse planeta majestoso` (o `(V)` que aparece na tela é o selo
  verificado, que é um SVG ao lado do nome, como nos outros).
* `web/src/entry-menu.js` — a lista de colaboradores não tem mais o destaque azul: todos usam
  `.entry-collab-name` cinza (`#d4d4d8`) e o selo vermelho `#fe2c55`.
* `web/index.html` — `.entry-collab-name` virou cinza e `.entry-collab-item--blue` perdeu a cor.

## 2. Verificado só com o nome Apache no perfil

`ENTRY_VERIFIED_NAMES` passou a ser `['Apache']` e `isVerifiedProfileName()` compara sem diferenciar
maiúsculas/espaços. O selo do Login/Perfil acende no `input` do campo (sem salvar), na dock e no
cartão do perfil. Qualquer outro nome (inclusive `NeyVR`, `Faylan`, `JocaVR`) não acende nada.

## 3. Teclado em pé, com a barrinha branca para mover

* `web/src/windows.js` — `placeKb()` não usa mais `-Math.PI / 2` (teclado deitado como mesa). Ele fica
  **em pé** na frente da janela dona, a `KB_STAND_DISTANCE` (0,62 m) do olho e `KB_STAND_DROP`
  (0,26 m) abaixo dele, com `KB_TILT = -0.12` (topo levemente para trás, como o teclado do Quest 3S).
* A barrinha branca saiu do topo (era um `::before`) e virou o elemento `.kb-grab` na **lateral
  direita**. Ela é atingida pelo raio da mão (`kbProbe` devolve `grab`) e o pinch nela abre
  `startKbDrag`/`kbDragTo`/`endKbDrag`, um arrasto num plano paralelo ao teclado — igual ao arrasto
  da Dock. A posição escolhida fica em `kbFreePos` e manda no `placeKb()` até o teclado ser fechado.
* Números: `KB_STAND_DISTANCE = 0.85 m`, `KB_STAND_DROP = 0.30 m`, `KB_TILT = -0.12 rad` — e o
  `keyboardScale`/`keyboardDistance`/`keyboardDrop` de `web/src/comfort.js` foram para 0.80 / 0.85 /
  0.30 para o teclado não nascer mais colado na cintura.

## 4. Tela de carregamento ATMO XR

`renderLoadingScreen()` foi reescrita com **a própria arte da referência** (`image-4.png`): ela foi
recortada (sem a barra de rolagem do print), reduzida para 1200 px e virou `web/assets/atmo-load.jpg`
→ `atmo-load.jpg` dentro do APK (`web/build.mjs`), usada como fundo da tela. O headset, os dois
controles, o wordmark **ATMO XR** e a pílula **REALIDADE VIRTUAL** são exatamente os do print. Por
cima da arte ficam a porcentagem, o status, a contagem regressiva, o CANCELAR e a barrinha de
progresso — os `data-entry-*` que os testes e o countdown usam foram mantidos.

## 5. Janelas flutuantes até 300%

* `web/src/window-geometry.js` — `maxResize: 3.00` (era 1.40) e `resizeOverscan: .60`: a faixa
  vertical do olhar ganha folga para o limite de altura não travar o redimensionamento antes dos
  300%. `maxResizeAtHeight()` continua limitando, só que com essa folga.
* `web/index.html` — `.win` ganhou cantos de 20 px, borda de vidro, brilho no topo e sombra mais
  suave, no acabamento da referência `Screenshot_2026-10-25-00-27-21`.

## 6. TikTok de verdade, 9:16

`openTikTokVr()` deixou de ser uma simulação em canvas. A janela `tiktok` (405×720 px = 9:16) carrega
`https://www.tiktok.com/` dentro de um **WebView nativo**: o retângulo com
`data-native-browser="tiktok"` + `data-url` é transformado numa superfície de navegador real por
`NextVrActivity.syncBrowsers`, o mesmo motor do navegador da Dock. Sobrou uma barra mínima com
recarregar e "abrir no navegador". No preview de desktop (sem app nativo) é um `<iframe>`.

## 7. Personagem 3D giratório

`openCharacterViewer()` (`web/src/apps.js`) abre a janela **Personagem 3D · Girar** (Dock → criar
personagem → “👁 Girar 3D”). É o mesmo motor do avatar (`drawCharacter2D` com `yaw`), então mostra
exatamente o boneco do jogo: girar 15°/45° com as setas, rodar sozinho no 360°, zoom, arrastar com o
dedo no palco e trocar **qualquer acessório** (headphone, coroa, mochila, aura), visor, traje, pose,
cabelo, pele — tudo salvo no perfil na hora.

## 8. Aba 3 das configurações: apps na Dock, sem limite

* `web/src/dock-catalog.js` (novo) — catálogo de apps + estado `S.dockExtraApps` (lista separada por
  vírgula, no mesmo formato dos outros campos de settings).
* `web/src/entry-menu.js` — **Aba 3 · Apps na Dock**: grade rolável com todos os apps de fábrica e os
  apps Android instalados (ícone real do sistema), com contador e “Limpar”.
* `web/src/apps.js` — `makeDock()` anexa os itens extras depois dos 9 tiles de sempre; a Dock é
  `width:max-content`, então ela cresce o quanto o usuário quiser (30, 50 apps) em vez de parar em 9.

## 9. Câmera noturna automática

* `PassthroughCamera.java` — mede a luminosidade média do quadro (512 amostras, ~2×/s) e
  `setNightMode()` sobe a exposição (`CONTROL_AE_EXPOSURE_COMPENSATION` no máximo do sensor) e troca o
  noise reduction para `HIGH_QUALITY`.
* `SpatialRenderer.java` — novo uniform `uNightCamera` nos dois shaders do passthrough (painéis e
  fundo): `pow(col, 1/1.82) * 1.28`, que levanta as sombras sem estourar as luzes.
* `web/src/night-camera.js` (novo) — lê `NativeXR.cameraLuma()` a cada 1,2 s, suaviza e liga com
  histerese (liga abaixo de 0,20, desliga acima de 0,30). Modo em Configurações → Aba 2:
  **Automática / Ligada / Desligada**.

## 10. Play Protect

Ver [`docs/PLAY-PROTECT.md`](PLAY-PROTECT.md). Resumo: o APK passou a sair da variante **release**
(não debuggable) assinada com a **mesma** chave do repositório, então instala por cima da Build 88 sem
apagar o perfil. O aviso de “app desconhecido” do Google é do Play Protect para qualquer app fora da
Play Store e não pode ser desligado pelo app — as instruções e os limites estão naquele documento.

# Gorilla Rush dentro do NextVR

O Gorilla Tag que o NextVR desenhava sozinho (`web/src/gorilla-tag.js`) **saiu do caminho**: a tile
da Biblioteca, o card da Loja e o atalho do menu inicial agora abrem o **Gorilla Rush** — o arquivo
HTML que o usuário entregou — em tela cheia, com o estéreo, o mapa e o rastreio de mão que já vêm
dentro dele.

## O arquivo do jogo é gerado, não editado

```
tools/gorilla-rush/adapt.mjs        transforma o HTML original no asset do APK
tools/gorilla-rush/parts/net.js     o online (substitui o PeerJS)
tools/gorilla-rush/parts/ingame.js  menu com mira pelo giroscópio + arranque
tools/gorilla-rush/parts/game.css   faixa de estado / aviso do gesto
tools/gorilla-rush/vendor/          SkeletonUtils do three r128 (o único que o Cockpit não traz)
```

Para regerar depois de uma nova versão do jogo:

```bash
npm run gorilla:adapt -- "caminho/LARP GORILA RUSH.html"
```

O script falha de propósito quando uma âncora do arquivo original não existe mais — é assim que a
gente descobre que o jogo mudou, em vez de gerar um asset silenciosamente errado. Ele também checa a
sintaxe do script gerado.

O que o adaptador muda, e só isso:

1. **Bibliotecas do APK, não da CDN.** `three`, `GLTFLoader`, `SkeletonUtils` e o MediaPipe vêm de
   `/ui/cockpit/libs/…` (as mesmas que o Cockpit VR já leva). Só o wasm do MediaPipe **sem SIMD**
   continua vindo da CDN, porque não cabe no pacote — sem internet, o jogo entra sem as mãos.
2. **O online é o nosso servidor.** O `new Peer(...)` sai; entra um WebSocket
   (`server/gorilla-rush/server.mjs`). O protocolo é o mesmo (`p` do convidado, `s` do anfitrião,
   `hello`/`full`/`promote` do servidor), então o resto da lógica do jogo não precisou mudar.
3. **O lobby do jogo sai da frente.** Ele só respondia a toque — dentro de um VR Box, inalcançável.
   A página entra direto no jogo com o que o NextVR escolheu.
4. **Menu dentro do jogo, mirado pelo giroscópio.** Um painel de verdade no mundo, 1,5 m à frente:
   a mira é o centro da visão, e ficar 0,9 s em cima de um botão aciona. Abre segurando as **duas
   mãos paradas** por 1,2 s, com **dois dedos** na tela, ou com a tecla **M**.
5. **Sem skin por padrão**: `myAcc` nasce vazio e as opções de acessório começam com "Nenhum".
6. Sem os scripts do Netlify (telemetria do site original).

## Os dois caminhos de entrada

| onde | o que acontece |
|---|---|
| Biblioteca de Apps / Loja / atalho do menu | **sozinho** (offline, sem sala) |
| Configurações → aba 4 → **ENTRAR (JOIN)** | **online**, na sala do código (ou sala pública se o campo estiver vazio) |

Sem servidor configurado, o JOIN **avisa** em vez de fingir; e o jogo, quando não consegue entrar,
joga sozinho e registra o motivo no diagnóstico e no app (nada é escrito por cima do jogo — pedido:
"tira os textos que fica na tela, é só o jogo").

## A aba 4 (Gorilla Tag) e a aba 5 (Acessórios)

`Configurações → Aba 4 · Gorilla Tag`:

* **Sala** — código (8 caracteres), modo (Casual / Pega-pego / Infecção), `ENTRAR (JOIN)` e
  `SALA PÚBLICA`.
* **Gorila** — gráficos (baixo/médio/alto), tela de dois olhos ou normal, movimento (só mãos ou
  mãos+toque), rastreio de mão (rápido/preciso).
* **O nosso servidor** — endereço (`ws://…`, aceita digitar só `IP:porta`) e o nome no jogo.

`Configurações → Aba 5 · Acessórios` — os acessórios do boneco **separados**, um campo por peça
(*cor*, *óculos*, *cabeça*, *roupa*), cada campo com todas as opções à vista (`data-entry-gorilla-acc-set`).
Nada de botão que gira entre as opções: escolhe-se direto, e a primeira opção de cada campo é
**Nenhum**.

As escolhas ficam em `localStorage.nextvrGorillaPrefs` (`web/src/gorilla-rush.js`) e viram a query
string montada em `NextVrActivity.gorillaQueryFromJson` (lista branca: sala, modo, cor, acessórios,
gráficos, tela, servidor, solo/quick).

## Ponte nativa

```
shell  --NativeXR.gorillaGame(json)-->  NextVrActivity.openHtmlGame("gorilla", query)
                                          └─ WebView tela cheia (a MESMA do Cockpit VR)
página --NextVRGame.stage('boot'|'play'|'menu')-->  watchdog de 12 s
página --NextVRGame.exit()-->  closeCockpitGame() → câmera e mãos do NextVR de volta
```

O `gameKind` ("cockpit" | "gorilla") decide a página que abre, a etapa que o watchdog espera
(`flight` x `play`) e o gancho da shell (`nextvrCockpitState` x `nextvrGorillaState`).

## Lentes e mãos (2.6.0)

* **Lentes:** o desenho do jogo passa por `NVLENS` (`tools/gorilla-rush/parts/lens.js`), com os
  MESMOS números da Cardboard 2015 que o NextVR usa (`web/src/gorilla-tag.js`): FOV 80° por olho,
  IPD 64 mm (32 mm por lado) e meia tela por olho.
  **O recorte é em unidades de CSS, sem multiplicar pelo `pixelRatio`** — o `WebGLRenderer` já faz
  `viewport × pixelRatio` internamente; multiplicar de novo transformava cada olho num quarto de
  tela, no canto inferior esquerdo (o defeito da 2.6.0). Não há pré-distorção: a correção é a lente
  do VR Box, como no resto do app.
* **Braços:** as mãos em repouso ficam à frente e abaixo (`hl=[V3(-.32,-.62,.5),…]`), dentro do
  campo de visão, como no Gorilla Tag. Sem isso (o original usava `-1.05` em `y` e `z 0.02`) não
  havia braço nenhum à vista enquanto nenhuma mão fosse detectada.
* **Robustez do laço:** o bloco por quadro que toca o modelo (`LM`) é guardado por `if(LM){…}` — o
  GLB carrega depois do primeiro quadro, e antes um quadro sem modelo quebrava o laço antes do
  `renderPlay()`. Se o modelo não chegar em 8 s, o jogo registra o motivo (`nvLog`), que o app mostra
  na janela de problema.
* **Mãos:** quem rastreia é o NextVR. O quadro de `PhoneXrHands.gameJson()` sai da thread de
  rastreio, espera um giro do main thread (`offerGorillaHands`/`flushGorillaHands`, um quadro
  pendente só) e chega à página em `window.__nvHands(json)`; `parts/hands.js` converte os 63 floats
  em 21 landmarks e preenche os mesmos `slot[]` que o MediaPipe da página preenchia. Com a ponte
  nativa (`NV_NATIVE_HANDS`) a câmera do jogo **não abre** — nem ao entrar, nem em
  `__nvRetryHands` — porque só existe uma câmera no aparelho e ela é do app.

## Limites conhecidos

* Como as mãos vêm do rastreio do app, o alcance e o enquadramento dependem da câmera do NextVR
  (mesma usada pela interface). Fora do APK — a página sozinha no navegador — o jogo ainda abre o
  MediaPipe dele, para não ficar sem mãos.
* O servidor é relé, não autoridade: quem simula o pega-pego é o cliente do anfitrião (como era no
  jogo original). Se o anfitrião sai, o servidor promove o próximo e a partida continua.
* Sem headset no ambiente de desenvolvimento: o que os testes garantem é o protocolo, a fiação da
  interface e o asset gerado — "ficou bom na tela" depende do teste no aparelho.

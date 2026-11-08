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

## Lentes e mãos (2.6.4)

* **Lentes:** o desenho do jogo passa por `NVLENS` (`tools/gorilla-rush/parts/lens.js`), com os
  MESMOS números da Cardboard 2015 que o NextVR usa (`web/src/gorilla-tag.js`): FOV 80° por olho,
  **IPD 67 mm** (33,5 mm por lado — era 64 mm até a 2.6.2) e meia tela por olho.
  **O recorte é em unidades de CSS, sem multiplicar pelo `pixelRatio`** — o `WebGLRenderer` já faz
  `viewport × pixelRatio` internamente; multiplicar de novo transformava cada olho num quarto de
  tela, no canto inferior esquerdo (o defeito da 2.6.0). O TAMANHO da textura, esse sim, é em pixels
  de device (meia tela × `pixelRatio`), porque um render target não passa por essa multiplicação.
* **Barril:** o passe de tela cheia aplica a distorção da lente Cardboard v1 com os coeficientes
  oficiais (`k1 = 0,441`, `k2 = 0,156`) — os mesmos do `game.html` do Cockpit VR. É a correção que a
  lente do VR Box desfaz; o que NÃO existe é uma segunda distorção por cima do desenho do jogo.
* **Tamanho e bordas (2.6.4):** a correção é a do SDK do Cardboard — `sdk/distortion_mesh.cc` mapeia
  conteúdo da textura em `DistortInverse(t)`, então para um pixel de tela em `tan s` a amostra é
  `t = s·(1+k1·s²+k2·s⁴)`: **multiplica** o raio. A imagem fica *menor* que a tela e o que passa da
  textura vira preto. A 2.6.3 dividia por `(1+k1+k2)`, o que **ampliava o centro em 1,6×** — era o
  "diminuí as lentes" do usuário. O círculo da imagem ocupa **86 % do raio do olho** (`LENS_FILL`),
  que é a proporção a que o próprio SDK chega para o Cardboard v1 e a mesma da interface do NextVR
  fora do jogo; em volta fica o anel preto com corte em curva (`smoothstep(0.92, 1.0, r)`), não em
  esquadro. Como a correção usa só a parte de dentro da textura, o olho é **desenhado mais aberto**
  (`renderFov`), com o `fov` vertical do three derivado do horizontal de 49,4°.
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
* **Mão grudada:** quando o rastreio perde a mão por um instante, o jogo continua com a última mão
  boa por até **700 ms** e, dentro desse tempo, projeta até **220 ms** de movimento pela velocidade —
  o braço segue o caminho em vez de despencar. Isso vive em `parts/hands.js`
  (`NV_HOLD_MS`/`NV_EXTRAP_MS`, `nvHoldHands`), não no laço de render: o jogo recebe quadro pronto.
* **Seta de direção:** `NVHEAD` (`parts/ingame.js`) desenha um pedaço de seta no chão, à frente do
  gorila (`P.y - 1.08`), com opacidade 0,42, seguindo a direção da cabeça. Ela só é desenhada com
  `state == 'play'`; no menu do jogo não aparece nada.
* **Sonda:** `window.__nvGorilla()` informa `seguradas` (mão mantida), `seta` e `lente` — é como se
  confere, no aparelho, que o desenho é o do NextVR e que a mão não está sendo descartada.

## Qualidade e fluidez do Cockpit VR (2.6.2)

* **Resolução do olho:** `RT_H=900` (era 560) e a textura de cada olho nasce com a **proporção da
  meia-tela** (`rtW()`), porque é para essa meia-tela que ela é esticada no `draw()`; com 1,26 fixo
  contra ~1,07 da tela a imagem saía alargada e ~15 % dos pixels eram jogados fora. A câmera de cada
  olho usa a mesma proporção (`eyeL.aspect = eyeR.aspect = aspE`) e a projeção é refeita na rotação.
* **Degraus, não passos:** a resolução adaptativa anda em `RT_STEPS = [1, .9, .8, .72, .64, .56, .5,
  .45]`, com histerese (`> 26 ms` desce, `< 17 ms` sobe) e **4 s entre decisões**. Antes ela mexia a
  cada 1,2 s em passos de 6 %, e cada mudança realoca duas texturas grandes — era esse o engasgo
  periódico. `applyRt()` não faz nada quando o tamanho não muda.
* **Calibragem em dois tempos:** nos primeiros 1,5 s de voo um único salto grosso põe a resolução no
  degrau que cabe no aparelho; depois só ajuste fino. Celular com ≤ 4 GB / ≤ 4 núcleos já começa em
  0,8 em vez de 1.
* **Rastreio de mão da página:** em voo roda a ~20 Hz (`handInt` 45 ms), cai para 12 Hz no menu, sobe
  para 80 ms quando o quadro passa de 26 ms e quase para (120 ms) quando não há mão há 3 s. É
  MediaPipe no thread principal: ele era o maior consumidor de quadro do voo.
* **Gráficos leves:** `lq` nasce **desligado** (cenário completo); continua sendo interruptor do
  menu, com teto de resolução (`rtCap`) para o adaptativo não subir acima do modo leve.
* **Sonda:** `window.__nvPerf()` no `game.html` devolve `olho`, `largura`, `degrau`, `msaa`,
  `quadroMs`, `maoMs`, `cullRaio` e `leve`. Nada é escrito na tela.
* **O que NÃO mudou:** o piso de emissão do 6DoF (`EMIT_MIN = 0.0028`, em `web/src/sixdof.js`) — a
  qualidade sobe pela resolução, não baixando o limiar do passo lento.

## O boneco: carga do modelo e corpo reserva (2.6.4)

**Corpo reserva (`parts/corpo.js`).** "Ainda tá sem modelo de gorilla": o GLB é um arquivo de 238 KB
com duas texturas embutidas, e se qualquer etapa dele falhar no aparelho o jogo ficava **sem corpo e
sem braços**, com o único aviso na janela de problema. Agora o corpo existe **desde o primeiro
quadro**, montado com primitivas (tronco, cabeça, olhos, braços, mãos) e com o **mesmo esqueleto por
nome** que o modelo real — `upper_arm_L`, `forearm_L`, `hand_L`, `head_02`, `body_01`, `palm_02_L`,
`f_index_01_L`, `f_middle_01_L`. Como os nomes são os mesmos, `rig()`, `arm2()`, `handPose()`,
`faceCam()`, `placeLab()` e `setBlob()` funcionam sem mudança: o boneco reserva **responde à IK das
mãos** igual ao original (teste do projeto roda a IK do próprio jogo e mede a mão no alvo). Quando o
GLB termina de carregar, `build()` chama `nvCorpoSai()` e o modelo de verdade entra no lugar. Ou é o
gorila original, ou é o reserva — nunca o vazio. A sonda `__nvGorilla()` mostra `corpo` e `reserva`.



O modelo do gorila vem embutido (`PLAYER_B64`) e é carregado em `parts/model.js`, em **três
caminhos** — o primeiro que funcionar monta o boneco:

1. **Bordas por `<img>`** (`TextureLoader`): o `GLTFLoader` do three prefere `ImageBitmapLoader`, que
   busca a textura embutida por `fetch()` de uma URL `blob:`; em WebView de celular esse fetch falha
   com mais frequência do que parece, e **uma textura que falha derruba o modelo inteiro**. Aqui o
   `createImageBitmap` é escondido só durante o parse (`delete window.createImageBitmap`), o three
   usa o `<img>` clássico e a textura carrega.
2. **Padrão do three** (com `ImageBitmap`), para o aparelho onde é o `<img>` que falha.
3. **Sem texturas**: o GLB é remontado sem `images`/`textures` (`nvSemTexturas`, com o BIN intacto) e
   o corpo, o esqueleto e os braços aparecem em branco — melhor um gorila branco do que nenhum.

O estado fica em `NV_MODEL` (ok · tentativas · modo · erro · desde) e a sonda `__nvGorilla().carga`
mostra isso no aparelho. **O aviso de 8 s saiu:** ele disparava por tempo, num celular que ainda
estava decodificando o mapa, e acusava "o modelo não carregou" sem haver falha. Agora só avisa quem
falhou de verdade — depois das três tentativas, com o motivo real — e existe um aviso separado de
"ainda carregando" aos 30 s.

## Limites conhecidos

* Como as mãos vêm do rastreio do app, o alcance e o enquadramento dependem da câmera do NextVR
  (mesma usada pela interface). Fora do APK — a página sozinha no navegador — o jogo ainda abre o
  MediaPipe dele, para não ficar sem mãos.
* O servidor é relé, não autoridade: quem simula o pega-pego é o cliente do anfitrião (como era no
  jogo original). Se o anfitrião sai, o servidor promove o próximo e a partida continua.
* Sem headset no ambiente de desenvolvimento: o que os testes garantem é o protocolo, a fiação da
  interface e o asset gerado — "ficou bom na tela" depende do teste no aparelho.

# NextVR PC Link — o celular como headset do SteamVR

O PC Link faz o que o espelhamento de tela nunca faz: o **celular é o headset**. O SteamVR trata o
aparelho como um HMD de verdade — o jogo roda no PC, o quadro é codificado no hardware do PC, chega
ao celular, é decodificado no hardware do celular e mostrado olho por olho; a pose da cabeça e as duas
mãos voltam pelo caminho contrário, a 60 Hz, e **movem a câmera do jogo**, não um vídeo numa janelinha.

Três peças, três programas separados, cada um com seu próprio ciclo de build:

| Peça | Onde roda | O que é | Diretório |
| --- | --- | --- | --- |
| **NextVR (app Android)** | celular | descobre o PC, manda rastreamento, recebe e decodifica o vídeo | `nextvr-android/src/main/java/com/nextvr/app/pclink/` |
| **NextVR PC Bridge** | Windows | descoberta, controle, vídeo fatiado, arquivo de estado para o driver | `pc-bridge/` |
| **NextVR SteamVR Driver** | Windows (dentro do SteamVR) | HMD virtual, duas mãos com Skeletal Input, fonte dos quadros | `steamvr-driver/` |

O protocolo dos bytes é uma tabela só: [`pclink/PROTOCOL.md`](../pclink/PROTOCOL.md). O JS
(`pclink/wire.mjs`, `pclink/state.mjs`) é o que o Bridge usa de verdade, o C++
(`steamvr-driver/core/state_layout.h`) é o que o driver lê, o Kotlin (`pclink/PcLinkWire.kt`) é o que o
celular escreve — e `tests/pclink-protocol.test.mjs` compara os três (offsets, tamanhos e uma sessão
real em loopback com um celular falso).

---

## 1. O que já funciona, e o que ainda não

Esta seção existe porque a regra do projeto é não apresentar função simulada como pronta.

| Etapa | Estado |
| --- | --- |
| Protocolo (controle, rastreamento, vídeo) | pronto e testado nas duas pontas |
| PC Bridge (descoberta, controle, vídeo, estado) | pronto; roda com `npm start`, `--check` conferido |
| Driver: HMD virtual, mãos, 31 ossos, Skeletal Input | escrito; **compila só no Windows** |
| Android: descoberta, controle, envio, decodificação | escrito; testes JVM dos bytes e da geometria |
| Passe de olho no renderer (metade por olho) | escrito |
| **Verificado em Windows + SteamVR + headset** | **não** — este ambiente não tem nada disso |
| `XR_EXT_hand_tracking` | **não implementado** — ver §7 |
| Áudio | não transmitido (o campo existe reservado) |

Ou seja: tudo nesta página é código que existe e roda, mas **nada foi executado contra um SteamVR de
verdade**. O primeiro teste em Windows é o item mais importante do roteiro (§9), e é onde vão aparecer
as correções de sinal, de orientação de lente e de tempo.

---

## 2. Rede: portas e canais

| Porta | Protocolo | Direção | Para quê |
| --- | --- | --- | --- |
| 44700 | UDP | celular → PC (broadcast) | descoberta |
| 44701 | TCP | celular → PC | controle, JSON por linha |
| 44702 | UDP | PC → celular | vídeo (fatias de 1200 B) |
| 44703 | UDP | celular → PC | rastreamento (648 B, 60 Hz) |
| 44790 | TCP loopback | driver → Bridge | quadro comprimido do compositor |

Nada de porta fixa no celular: ele manda o `videoPort` que escolheu no `session{start}`, e o Bridge
responde naquele endereço (o mesmo IP de onde veio o TCP de controle — o PC não adivinha).

### Wi-Fi

Mesma rede, mesmo roteador. O celular faz broadcast na sub-rede e o Bridge responde com nome, portas e
o que ele tem (SteamVR rodando, driver carregado, OpenXR, extensões). Se o roteador bloqueia
broadcast (comum em rede de visitante com "isolamento de clientes"), o campo de IP da janela resolve:
digite o IP do PC e o app vai direto nele.

### USB

Duas formas, e só uma serve:

1. **Tethering USB (RNDIS)** — ligue "Ancoragem USB" no celular. Isso põe uma rede IP **no cabo**; o
   Windows recebe um endereço da própria ancoragem. O app, no modo USB, procura a rede nas interfaces
   `rndis*`/`usb*`/`eth*` e ignora o Wi-Fi. Vídeo e rastreamento vão pelo cabo, sem Wi-Fi nenhum.
2. **`adb forward`** — **não serve**. `adb forward` é só TCP: o controle passaria, o vídeo e o
   rastreamento (UDP) não. Não é uma limitação deste código, é do adb. Usar
   `adb reverse tcp:44702 tcp:44702` também não resolve, pelo mesmo motivo.

O modo **automático** é o padrão: procura primeiro na rede USB, depois no Wi-Fi.

---

## 3. Como rodar

### 3.1 PC Bridge (Node ≥ 20, sem dependências)

```bash
cd pc-bridge
node bin/nextvr-pc-bridge.mjs --check          # diz o que o PC tem, sem abrir sessão
node bin/nextvr-pc-bridge.mjs                  # sobe e fica publicando estado
node bin/nextvr-pc-bridge.mjs --name "PC do escritório" --state-file C:\temp\nextvr.bin
```

Opções: `--control --video --tracking --discovery --state-file --no-discovery --check --state --json
--help`. `--check` imprime uma linha JSON com tudo que o Bridge consegue ver (SteamVR instalado? driver
na pasta? OpenXR? `XR_EXT_hand_tracking`?) e sai — é o primeiro comando a rodar quando algo não
conecta.

O Bridge escreve o **estado de 744 bytes** que o driver lê (magic `NVST`, cabeça, mãos, projeção,
nome da sessão) no arquivo indicado por `NEXTVR_PCLINK_STATE`, ou em
`%LOCALAPPDATA%\NextVR\pclink-state.bin`. Não é memória compartilhada nomeada porque o Node não cria
uma; um arquivo mapeado pelo driver é a mesma coisa, com a vantagem de poder ser inspecionado.

### 3.2 Driver SteamVR (Windows, MSVC 2022)

```bat
cd steamvr-driver
cmake -S . -B build -G "Visual Studio 17 2022" -A x64
cmake --build build --config Release
```

A DLL `driver_nextvr.dll` e o `driver.vrdrivermanifest` vão para
`C:\Program Files (x86)\Steam\steamapps\common\SteamVR\drivers\nextvr\`. Depois, no SteamVR:
*Configurações → Desenvolvedor → Ativar modo desenvolvedor* e reiniciar o SteamVR. O headset aparece
como **NextVR PC Link** e as mãos como **NextVR Left Hand** / **NextVR Right Hand**.

Autotestes que rodam **sem** SteamVR (montam o esqueleto de 31 ossos e conferem o layout do estado):

```bat
nextvr-selftest skeleton      :: 17 verificações; imprime o jitter antes e depois do filtro
nextvr-selftest layout        :: sizeof/offsetof contra pclink/state.mjs
nextvr-state-dump             :: lê o arquivo de estado e imprime o que o driver veria
```

Dependências: Visual C++ 2022, Windows SDK 10, OpenVR (`third_party/openvr/openvr_driver.h`, já no
repositório, com a licença ao lado). Nada além disso — sem NuGet, sem vcpkg.

### 3.3 Celular

O PC Link é uma janela do NextVR: **menu → PC Link**. Escolha Wi-Fi, USB ou automático, digite o IP se
a descoberta não achar, *Conectar*, e depois *Iniciar sessão*. A janela mostra, em tempo real: a fase
da conexão, o nome do PC, o estado do SteamVR, FPS e latência medidos, qualidade escolhida, estado do
hand tracking (**as duas mãos / uma / nenhuma**) e avisos do PC (por exemplo "driver não carregado").

Nada nessa janela é decorativo: os números vêm de `NativeXR.pcLinkState()`, que é o estado real dos
sockets, do decodificador e do último `state` recebido do PC.

---

## 4. Rastreamento da cabeça

A pose sai de `SpatialRenderer.copyHeadPose()` — a **mesma** matriz inversa de view com que os olhos
foram desenhados naquele quadro. Não há uma segunda fonte de orientação, não há integração de
giroscópio paralela: se a imagem do jogo treme no headset, a causa não é divergência entre dois
caminhos, porque só existe um.

O envio é a 60 Hz fixos, e **re-encoda** a cada tique em vez de repassar um pacote por quadro de
câmera: a cabeça tem que atualizar na taxa da tela mesmo com o rastreador de mãos a 30 Hz.

A pose da cabeça vem do olho esquerdo, então o centro fica meio IPD à esquerda do centro real (uns
3 cm). Como mãos e cabeça usam a mesma origem, a geometria relativa está certa; o que fica deslocado é
a posição absoluta dentro do espaço de rastreamento, que o SteamVR recentraliza no início da sessão.

---

## 5. Mãos: os 21 pontos viram 31 ossos

O rastreador é **o mesmo** que já move as janelas e os jogos dentro do NextVR (`PhoneXrHands`,
MediaPipe). Não há segunda câmera, segundo modelo, segundo filtro — nem mão sintética.

1. **Android** (`pclink/PcLinkGeometry.kt`) converte cada um dos 21 pontos em metros:
   * posição lateral pelo modelo pinhole (`d · 2·(u−0,5)·tan(hfov/2)`);
   * profundidade pelo **tamanho da palma** (uma mão adulta tem ~8,5 cm entre os nós do indicador e do
     mínimo), porque uma câmera só não mede distância. O `z` relativo do MediaPipe **não** é usado: ele
     faria a mão "respirar";
   * orientação a partir dos pontos medidos: `+Y` punho → nó do dedo médio, `+Z` normal da palma, `+X`
     o eixo que fecha a base (dextra para as duas mãos — espelhar trocaria os dedos);
   * a mão é girada pela pose da cabeça e levada para onde a cabeça está.
2. **Driver** (`steamvr-driver/core/hand_skeleton.cpp`) monta os **31 ossos** do OpenVR: 21 medidos, 5
   pontas de dedo estendidas a partir do último segmento medido (proporcional, a cada quadro) e 5
   "aux" na base dos metacarpos. Um osso derivado não é um osso animado: sai dos vizinhos reais no
   mesmo quadro. Sem mão na câmera, o esqueleto **não é publicado** em vez de ser preenchido com uma
   pose plausível.
3. **Suavização**: `SmoothSkeleton` interpola em slerp/lerp com um limite por quadro, e o
   `selftest` mede o jitter de um sinal com ruído: **0,007776 → 0,001726** por eixo.
4. **Botões**: por padrão a mão também publica `trigger` (pinça) e `grab` (punho) como entradas
   booleanas/analógicas, porque a maioria dos jogos do SteamVR só conhece controles. É **tradução de
   gesto medido**, não controle virtual animado — e desliga em `steamvr.vrsettings`, seção `nextvr`:

```json
{ "nextvr": { "controllerEmulation": false, "skeletalLevel": 1 } }
```

Com `controllerEmulation: false` só o Skeletal Input é publicado: jogos de mão nativa continuam
funcionando, jogos de controle deixam de reagir — que é a verdade, e a interface avisa.

---

## 6. Vídeo

* Codificação no PC: `frame_sink_win.cpp` pega a textura do compositor
  (`IVRVirtualDisplay::Present`) e entrega a um **MFT de hardware** (NVENC/AMF/QSV aparecem como MFTs
  de hardware): H.264, sem B-frames, taxa constante, modo de baixa latência.
* Transporte: o Bridge fatia cada quadro em datagramas de até 1200 B (`NVRV` + 28 B de cabeçalho). Um
  pedaço perdido perde **um** quadro, e o quadro velho é jogado fora assim que um mais novo começa —
  esperar um pedaço que não vem é atraso na fila do decodificador.
* Decodificação no celular: `MediaCodec` direto na `Surface` do olho (`KEY_LOW_LATENCY` quando existe),
  com SPS/PPS tirados do primeiro keyframe e uma fila de 4 quadros que descarta o mais antigo.
* Desenho: `SpatialRenderer.drawPcLinkEyes` põe a metade correspondente em cada viewport, no lugar do
  fundo de câmera/paisagem. As janelas e as mãos continuam por cima, porque o menu tem que existir
  durante o jogo.
* Precisões: o driver declara a lente do celular como a lente do headset virtual, então o compositor
  do SteamVR **já entrega a imagem pré-distorcida** e o celular só divide a metade. Se a lente do
  headset virtual não for a lente que está na frente dos olhos, a imagem fica com a distorção errada —
  isso é o primeiro ajuste a fazer no aparelho (§9).

Qualidade (mesmos números no app, no Bridge e no perfil):

| Preset | Bitrate | Taxa | Resolução por olho |
| --- | --- | --- | --- |
| baixa | 20 Mbps | 60 Hz | 1440 × 1600 |
| média | 40 Mbps | 72 Hz | 1832 × 1920 |
| alta | 80 Mbps | 90 Hz | 2290 × 2400 |

---

## 7. `XR_EXT_hand_tracking` — o que falta, e por que Skeletal Input não basta

**Skeletal Input é OpenVR. `XR_EXT_hand_tracking` é OpenXR.** Um jogo OpenXR que pede a extensão não
vê o esqueleto do OpenVR: ele pede `xrCreateHandTrackerEXT`, `xrLocateHandJointsEXT` e uma lista de
juntas no formato do OpenXR, que **não** é a lista de 31 ossos (o número e a ordem das juntas diferem).

O caminho é a camada OpenXR que traduz o nosso estado para o runtime, e ela **não está escrita**. O
que já existe para ela:

* o Bridge sabe se o runtime OpenXR em uso tem a extensão (`compat.mjs`, campo
  `openxrHandTracking`, que chega ao celular como `true`, `false` ou **`null` = não verificado**;
  virar `false` seria afirmar que não tem sem ter perguntado);
* o estado de 744 bytes tem as 21 juntas por mão em metros, que é a entrada de qualquer conversão;
* a `welcome` já diz ao celular o que o PC tem, e a janela mostra isso.

Duas decisões que a camada vai precisar tomar, e que ficam registradas aqui para não serem tomadas por
acidente: (a) `XR_EXT_hand_tracking` tem juntas que o MediaPipe não mede (por exemplo as do antebraço),
e o preenchimento tem que ser derivado explicitamente, como já é feito nos 10 ossos derivados do
OpenVR; (b) se o runtime não tiver a extensão, **o jogo não recebe mão** — e a interface diz isso, em
vez de publicar um controle no lugar.

---

## 8. Calibração

Na janela do PC Link: **IPD** (0,03–0,09 m), **altura do usuário** (1,0–2,3 m) e **escala do mundo**
(0,5–2,0). Os três vão no pacote de rastreamento e no `calibrate` do controle, e o driver publica IPD e
altura nas propriedades do HMD — é o que faz a câmera do jogo ficar na altura certa e o mundo ter o
tamanho certo. A centralização usa o próprio recentralizador do SteamVR (é ele que manda no espaço de
rastreamento); o NextVR manda pose absoluta, sem inventar offset.

O giroscópio é o do Cardboard, sempre rodando enquanto a sessão existe: não há gancho para desligá-lo
no meio do jogo.

---

## 9. Roteiro do primeiro teste em Windows (o que ainda não foi feito)

1. `node bin/nextvr-pc-bridge.mjs --check` e conferir `steamvr`, `driver`, `openxr`.
2. Copiar a DLL + manifesto para `SteamVR\drivers\nextvr\`, reiniciar o SteamVR, ver o HMD na lista.
3. `nextvr-selftest skeleton` e `nextvr-selftest layout` no PC (não precisam de SteamVR).
4. Abrir uma sala do SteamVR (o "void"), sem jogo: a imagem deve preencher os dois olhos e **girar**
   com a cabeça. É aqui que se ajustam a orientação da textura (`uTransform`) e a distorção.
5. Ver as mãos do SteamVR na sala — as do NextVR, não as do runtime.
6. Abrir um jogo com Skeletal Input (por exemplo um que mostre a mão) e conferir dedo por dedo.
7. Abrir um jogo só de controles e conferir `trigger` na pinça e `grab` no punho.
8. Só depois: FPS, latência, qualidade e os modos de rede (Wi-Fi → USB tethering).

Se um jogo recusar a mão nativa, o relato tem que ser "este jogo não aceita mão", com o motivo — não
uma mão falsa no lugar.

---

## 10. Limitações conhecidas (todas reais, nenhuma escondida)

* **Nada foi rodado em Windows/SteamVR/headset.** É o item 1 da lista acima, e o mais importante.
* **`XR_EXT_hand_tracking` não existe ainda** (§7). Skeletal Input não implica a extensão.
* **`adb forward` não carrega vídeo nem rastreamento** — é TCP, os dois canais são UDP. USB é
  tethering.
* **Broadcast pode estar bloqueado** no roteador; o campo de IP é a saída.
* **Áudio não é transmitido** (o campo está reservado no cabeçalho; o `state` diz `audio:
  "unavailable"`, que é a verdade).
* **A distorção de lente** depende de a lente declarada no driver ser a que está no headset; sem isso a
  imagem fica geométrica mas errada nas bordas.
* **A posição da câmera traseira em relação aos olhos** é tratada como "nos olhos". O deslocamento real
  é de poucos centímetros e varia por aparelho: é um ajuste por aparelho, não um valor inventado.
* **Uma sessão por vez**: o Bridge atende um celular; um segundo conectado toma o lugar do primeiro (o
  primeiro recebe `bye`).
* **Nenhuma promessa de compatibilidade universal.** Cada jogo é um jogo; quando um recusa a mão
  nativa, isso é dito na janela e no relatório, não maquiado.

---

## 11. Diagnóstico rápido

| Sintoma | Onde olhar |
| --- | --- |
| Janela diz "conexão recusada" | o Bridge não está rodando, ou o firewall do Windows bloqueou a 44701 |
| Conecta, mas o SteamVR não aparece | `--check`: driver fora da pasta, ou SteamVR sem modo desenvolvedor |
| FPS 0 e latência subindo | sessão iniciada no app mas o driver não está publicando quadros (jogo minimizado?) |
| Mãos "nenhuma" | luz baixa, mão fora do quadro da câmera, ou `handTracking` desligado no app |
| Imagem tremida só nas bordas | distorção de lente declarada ≠ lente real (§10) |
| Vídeo chega e a tela fica preta | `pcLinkVideo` não criou o slot de textura; reiniciar a janela do PC Link |

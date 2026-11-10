# AGENTS.md — XFC / NextVR

Guia para agentes de IA (e pessoas) que mexem neste repositório. Ele descreve a
arquitetura real do projeto hoje, as convenções de assets, o fluxo de decisão e
os critérios de qualidade/performance. Se o código e este arquivo divergirem,
o código vence: atualize o arquivo na mesma mudança.

---

## 1. O que existe no repositório

| Pasta | O que é |
| --- | --- |
| `xfc-game/` | O jogo de futebol (HTML + CSS + JavaScript puro, three.js local). É onde vive 90% do trabalho de gameplay. |
| `nextvr-android/`, `web/`, `tools/`, `java_api/` | Workspace espacial NextVR (Cardboard, passthrough, janelas flutuantes). Não misturar com o jogo. |
| `tests/` | Suítes `node --test` (jogo, workspace, APK). Rodam com `npm test`. |
| `.github/workflows/xfc-apk.yml` | CI que roda os testes, compila o APK e publica a release. |

### Regras gerais

1. **Não quebrar o que já funciona.** Ultimate Team, Kick-Off, Campanha da Copa,
   treino e o fluxo de partida têm testes; qualquer refatoração precisa
   mantê-los verdes.
2. **Sem build no jogo.** `xfc-game` roda direto do `index.html` com módulos ES.
   `app.bundle.js` é gerado por `xfc-game/tools/build-bundle.mjs` só para o caso
   `file://`; precisa ser regenerado a cada mudança em `src/`.
3. **Português** nos comentários, textos de UI e mensagens de commit (o produto
   é pt-BR).
4. **Tudo que é botão precisa funcionar.** Nada de imagem estática fingindo ser
   menu; hotspot invisível só é aceitável em arte de marca, com foco/hover
   visível.

---

## 2. Arquitetura do jogo

```
xfc-game/
  index.html            # palco, fontes, CSS e o boot
  src/main.js           # registry de telas, fitStage(), go(), toast()
  src/state.js          # perfil (localStorage xfc.profile.v1) e seleções
  src/screens/*.js      # uma tela por arquivo (menu, modes, competition, play, ...)
  src/data/*.js         # times, seleções, torneios, kits, elencos (puro, testável)
  src/ui/*.js           # helpers de DOM, marca, bandeiras, estrelas
  src/match3d/*.js      # motor 3D da partida (three.js)
  styles/*.css          # base, screens, frontend, match3d, competition
  assets/               # arte, escudos, retratos, estádios, texturas, competições
  vendor/               # three.js local (offline)
  tools/build-bundle.mjs
```

### Palco

* O jogo é desenhado num **palco de 720 px de altura**, com largura
  `max(1280, telaEscalada)` — `fitStage()` em `src/main.js` calcula
  `--stage-scale` e `--stage-w`.
* **Nada de barras laterais**: telas devem ocupar o palco inteiro. Em telas mais
  largas que 16:9, meça a horizontal em **porcentagem** (base 1280) e mantenha a
  vertical em px; a arte de fundo usa `background-size: 100% 100%` para
  acompanhar.
* `go(nome, params)` troca de tela; `document.body.dataset.screen` alimenta o
  botão voltar do Android.

### Camadas de dados (puro, sem DOM)

`src/data/tournament.js` é a API de campeonatos:

```
COMPETITIONS, getCompetition, competitionTeams, competitionTeam,
createTournament, isTournamentValid, allGroupTables, groupTable,
tournamentBracket, currentRound, nextTournamentFixture, simulateRound,
recordTournamentResult, tournamentScorers, tournamentStatus, stageLabel,
knockoutName, GROUP_LETTERS
```

`profile.tournaments[competitionId]` guarda o campeonato salvo (slug da Copa do
Mundo é `world-cup`).

### Motor 3D (`src/match3d/`)

| Módulo | Responsabilidade |
| --- | --- |
| `engine.js` | renderer, cena, câmeras, fog, tone mapping, helpers de textura |
| `constants.js` | medidas reais (campo, bola, gol, jogador) |
| `player.js` | **rig humanoide procedural** + uniformes + retratos + pose base e comemorações |
| `animation.js` | **camadas de animação**: máscaras, blend, eventos, IK de chão/bola e LOD (`window.__xfcAnim`) |
| `ball.js` | física da bola + malha/textura |
| `goalkeeper.js` | leitura do voo e posicionamento do goleiro |
| `ai.js` | decisões dos times controlados pela máquina |
| `movement.js`, `physics.js`, `sides.js` | locomoção, colisões e escalação em campo |
| `camera.js`, `controls.js` | câmera de transmissão e controles (toque + teclado) |
| `stadium.js`, `stadiums.js`, `grass.js` | estádio, arquibancada, grama e luzes |
| `hud.js` | placar, munição de jogadas, cartão de gol |
| `set-pieces.js` | faltas, pênaltis, laterais, tiros de meta |
| `match.js` | orquestra tudo e expõe `window.__xfcMatch` |

API viva em `window.__xfcMatch` (usada pelos testes):

```
match.world.setPaused(bool)
match.world.entrancePlayed        // true depois da entrada pelo túnel
match.world.entranceProgress      // 0..1
match.world.tick(dt)
match.clock.{half, minutes, added}
match.teams.home|away.{score, players[11].index}
match.phase.name
```

---

## 3. Pipeline 3D — estado atual e alvo

### Hoje

* Personagens são **gerados por código** (`player.js`): tronco, membros
  segmentados, mãos, shorts, meias, chuteiras, cabelo, rosto por textura e
  uniforme com escudo. Não há arquivos `.glb/.gltf/.fbx` no repositório — e o
  sandbox não alcança Mixamo/Sketchfab/Kenney/Poly Pizza (ver §4).
* Toda a animação é **procedural por osso**, em duas etapas por quadro:
  1. `updateBase()` escreve a **pose base** a partir do estado (parado,
     correndo, chutando, comemorando, defendendo, carrinho, cartão...). Ela
     sempre parte de uma pose neutra (`resetRigPose()`), então nada acumula
     entre quadros.
  2. `animation.update()` (em `animation.js`) aplica **camadas** por cima:
     máscaras, pesos, clipes de evento e IK.
* Iluminação em `stadium.js`: hemisférica + uma direcional com shadow map
  512/1024 (cascata limitada ao campo), dois preenchimentos e refletores sem
  sombra. Sombras dinâmicas só no protagonista e na bola (`setDynamicShadow`).

### `match3d/animation.js` — camadas, máscaras e IK

| Conceito | Como funciona |
| --- | --- |
| Máscara | `lower` (quadril/joelho/tornozelo), `upper` (tronco+braços), `head`, `arms`, `legs`, `torso`, `full`, e combinações `upper+head`. Aliases em português: `pernas`, `tronco`, `cabeca`. |
| Camada | `{ clip, weight → target, fade, mask, time }`. O peso sobe por `1 - e^(-3·dt/fade)`; o clipe entra **sem snap** e a camada zerada é descartada. |
| Blend tree | `locomotion(speed)` escolhe pesos de `idle`/`run` pela velocidade; qualquer clipe pode ser misturado com `blend(clip, peso)`. |
| Evento | `trigger(clip, { mask, duration, fade })` dispara uma vez, respeita a duração e se dissolve sozinho. |
| IK de chão | Só dobra o **joelho** (nunca o quadril) para o tornozelo ficar em `ANKLE_REST = 0,072`; o pé acompanha a inclinação. Correção limitada a `ikMaxStep` por quadro. |
| IK de bola | Com `ownsBall` e bola a ≤ 1,25 m, a perna dominante é resolvida em 2 ossos no plano sagital do atleta até o ponto de contato. |
| LOD | `distance > ikDistance (26 m)` desliga IK; `distance > farDistance (55 m)` não avalia nenhuma camada. |

Clipes disponíveis (`CLIPS`): `idle`, `run`, `jog`, `kick`/`shot`, `pass`,
`cross`, `header`, `celebrate`, `tackle`, `receive`, `jump`, `signal`.

API interna (LLM/console) — `window.__xfcAnim` após a partida subir:

```
__xfcAnim.clips / .masks / .model / .animation
__xfcAnim.setSpeed(1.4)                 // playback global das camadas
__xfcAnim.setMask('upper')              // máscara padrão dos próximos disparos
__xfcAnim.blend('celebrate', 0.6)       // mistura contínua com peso
__xfcAnim.trigger('kick', { mask: 'lower', duration: 0.4 })
__xfcAnim.stop('celebrate')             // remove um clipe (sem args: todos)
__xfcAnim.state()                       // camadas, pesos, máscara, IK e LOD
```

A API controla **só o protagonista** (`controlled[userSide]`). Joystick,
botões de ação e câmera continuam mandando no jogo normal: as camadas são um
verniz por cima da pose base, nunca um substituto do controle.

### Elenco estilizado (reserva procedural)

O atleta é 100% gerado por código — nada de modelo de terceiros, nada de
licença de imagem de jogador real. A cara do craque vem de geometria:

* `buildStylizedFace()` em `src/match3d/player.js`: olhos com íris, pupila e
  brilho, pálpebra, sobrancelha e boca (o rosto deixou de ser só uma textura
  pintada, que ficava chapada de perto).
* Cabeça 10% maior no modo estilizado (`stylized`, ligado por padrão): é o que
  dá leitura do rosto a poucos metros de câmera.
* Penteados: `short`, `curly` (cachos low-poly), `afro`, `mohawk`, `neymar`,
  `side`, `bob`, `bald` — sorteados por `lookFor()`.
* `stylized: false` volta ao rosto antigo (útil para quem usa retrato/foto).
* Ombros e deltoides foram afinados para o uniforme não parecer ombreira.
* `shapeHeadPoint()` / `headGeometry()`: o crânio é uma esfera deformada
  (mandíbula estreita, queixo à frente, maçãs do rosto, têmporas, occipital).
  `conformFacePatch()` mantém a máscara de sombra colada nesse formato.
* Tronco com peitoral, dorsais e trapézio em geometria (`-pec`, `-lat`,
  `-trapezius`) e perfil de anéis com cintura — o volume fica **dentro** da
  camisa (se puser para fora, aparece como bolha).
* Mão: palma achatada em anéis, tenar, 4 dedos em dois segmentos com curvatura
  de descanso (`xfc-player-fingers`, `xfc-player-fingertips`) + nós.
* Chuteira: `footShellGeometry()` empilha seções elípticas ao longo do pé
  (calcanhar, peito do pé, bico), com entressola, colarinho, língua, cadarços e
  seis travas. Nada de elipsoide com bolacha embaixo.

### Modelo glTF externo (padrão do jogo)

### Corpo humano de verdade (agora é o padrão)

O elenco é uma malha humana masculina rigada: `assets/players/models/footballer.glb`
(`Soldier.glb`, Mixamo Vanguard, dos exemplos do three.js — 49 ossos
`mixamorig*`, 11.376 triângulos, atlas de 2 imagens). O rig procedural continua
em `src/match3d/player.js` como reserva (`?models=2d` ou
`window.__XFC_GLTF = false`).

Regras aprendidas na marra:

* **Animação de locomoção: usar os clipes que vêm dentro do `.glb`**
  (`Idle`/`Walk`/`Run`). Eles são do mesmo esqueleto e sempre funcionam. O
  carregador mapeia esses nomes sozinho (`OWN_CLIPS`).
* **Gestos: escrever nos ossos, não retargetar** (`startGesture`/
  `applyGesture`): rotações locais aditivas depois do `mixer.update`, com
  envelope de entrada/saída. Foi a única forma de ter chute e comemoração
  corretos neste esqueleto.
* Retarget de clipe externo só compensa quando o repouso casa: `Michelle.glb`
  (6,3° de delta médio) roda os clipes do repositório inteiros; `Soldier.glb`
  (19,2°, com 180° no quadril e nas pernas) não roda — braços torcem nas três
  variantes testadas (delta local, retarget no espaço de mundo, clipe cru).
* Medir altura só com `bindPoseBounds()` usando `mesh.applyBoneTransform()`:
  `Box3.setFromObject` em `SkinnedMesh` mente e, sem o bind por junta, modelos
  em centímetros com `bindMatrix` escalado saem 100× maiores.
* Alguns exports são Z-up (`size.z > size.y · 1.25` → `rotation.x = -π/2`).
* Trilhas `.position` dos clipes Mixamo vêm em outro referencial e afundam o
  atleta — descartar sempre (só `.quaternion` interessa).
* O controlador glTF precisa expor `speed`, `mask`, `applyMask()`, `blend()`,
  `trigger()`, `stop()`, `state()` **e** `stats()` (usado por `animation.js`);
  sem `stats()` a API `window.__xfcAnim.state()` quebra.
* Cor do time = tinta no material (`white.lerp(cor, 0.55)`); não há malha de
  uniforme separada, então o time se diferencia pela cor da roupa do modelo.

### Nomenclatura de assets

```
assets/players/models/<slug>.glb          # elenco (opcional; fallback procedural)
assets/players/portraits/<slug>.jpg        # retrato (já usado no elenco/preview)
assets/animations/idle/<slug>.glb
assets/animations/run/<slug>.glb
assets/animations/kick/<slug>.glb
assets/animations/celebrate/<slug>.glb
assets/animations/tackle/<slug>.glb
assets/competitions/<competition>.jpg       # arte do menu da competição
assets/competitions/<competition>-news.jpg  # foto do cartão de notícias
```

Regras de nome: **kebab-case**, sem acento, singular para o tipo e slug igual ao
`id` do time/jogador em `src/data`. Clipes: `<personagem>-<ação>[_<variante>]`.

---

## 4. Fluxo de decisão da IA (como mudar o código)

1. **Leia antes de escrever**: o módulo alvo e seus consumidores (`grep` pelo
   nome exportado). Telas conversam por `ctx.go`, dados por imports puros.
2. **Escolha a camada certa**: regra de jogo → `src/data`; visual → `src/screens`
   + CSS; física/render → `src/match3d`.
3. **Mudança pequena e verificável**. Refatoração grande só com teste que a
   cubra, na mesma entrega.
4. **Rode `npm test`** (com `LD_LIBRARY_PATH=/tmp/al2023/lib` no sandbox para o
   Chromium). Nunca entregue com teste vermelho.
5. **Regenere** o bundle: `node xfc-game/tools/build-bundle.mjs`.
6. **Suba a versão** em `xfc-game/android/app/build.gradle` e no workflow
   (`.github/workflows/xfc-apk.yml`: `TAG`, título e notas) quando for release.
7. **Documente**: `AGENTS.md`, `CREDITS.md` e `CHANGELOG_PROMPT.md` quando a
   regra ou o pipeline mudar.

### Rede disponível para o agente

O sandbox só alcança **github.com, codeload.github.com, api.github.com,
registry.npmjs.org e pypi.org**. Mixamo, Sketchfab, Kenney e Poly Pizza **não
são acessíveis**: modelos externos precisam chegar por commit no repositório ou
por pacote npm. Registre a origem em `CREDITS.md` antes de usar.

---

## 5. Critérios de qualidade

### Visual

* Compor com a referência do produto (FC Mobile/eFootball + prints do cliente),
  mantendo a identidade de cada competição.
* Personagens legíveis a distância de câmera de transmissão; silhueta limpa,
  sem membros atravessando o corpo.
* Animação com antecipação, contato e recuperação; zero "snap" entre estados.
* UI: contraste alto, textos curtos em caixa alta nos rótulos, ícones coerentes.

### Performance (alvo: 60 FPS em celular mid-range)

* Orçamento por frame na partida: **≤ 16 ms**; no menu, estável.
* Sombras dinâmicas só no jogador controlado e na bola.
* LOD por distância para jogadores e arquibancada; grama instanciada.
* Texturas de UI ≤ 2048 px; arte de menu ≤ 1672 px de largura e ≤ 300 KB por
  arquivo em JPEG qualidade ~86.
* `backdrop-filter` é permitido em painéis estáticos; não usar em elementos que
  se movem a cada frame.

### Licenças

* Modelos/áudio/texturas externos: **CC0, CC-BY ou equivalente**; nada de
  licença não comercial ou "all rights reserved".
* Cada asset externo entra em `CREDITS.md` com autor, licença e URL.

---

## 6. Comandos úteis

```bash
# testes completos (Chromium precisa da lib no sandbox)
LD_LIBRARY_PATH=/tmp/al2023/lib npm test

# abrir o jogo localmente
node xfc-game/serve.mjs        # http://127.0.0.1:8080

# bundle para o file://
node xfc-game/tools/build-bundle.mjs

# build do APK (CI faz o mesmo)
cd xfc-game/android && ./gradlew assembleDebug
```

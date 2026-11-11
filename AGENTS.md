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
   menu; hotspots nas artes de referência precisam ser botões DOM com rótulos
   acessíveis, ações reais e foco/hover visível, testados nas áreas desenhadas.

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

* O padrão é **Micah masculino importado CC0** em
  `assets/players/models/footballer.glb`, conforme o pipeline abaixo.
  `player.js` é somente reserva se o glTF falhar. Não trocar/recriar/remodelar
  corpos para melhorar gráficos: materiais, iluminação e poses apenas.
* Toda a animação é **procedural por osso**, em duas etapas por quadro:
  1. `updateBase()` escreve a **pose base** a partir do estado (parado,
     correndo, chutando, comemorando, defendendo, carrinho, cartão...). Ela
     sempre parte de uma pose neutra (`resetRigPose()`), então nada acumula
     entre quadros.
  2. `animation.update()` (em `animation.js`) aplica **camadas** por cima:
     máscaras, pesos, clipes de evento e IK.
* Iluminação em `stadium.js`: hemisférica, direcional, preenchimentos e
  refletores. Baixa/Média só contato; Alta shadow map 1024, até seis atletas
  incluindo o controlado; Ultra 1536/10 no desktop e 1024/6 no móvel, com
  redução adaptativa de detalhe. `quality.js` centraliza
  os orçamentos; `profile.graphicsQuality` aplica na próxima partida/treino.

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

### Jogador importado: Micah / Innerscene (v0.5.16)

`assets/players/models/footballer.glb` agora é um jogador masculino **já
vestido na origem**, CC0: corpo, rosto, cabelo, camisa, short, meiões e
chuteiras do Innerscene/MakeHuman. Origem, licença e hashes estão em
`CREDITS.md` e `footballer.source.json`. Não voltar a Soldier, Michelle,
Xbot ou ao `buildKit()` removido: o usuário rejeitou essas substituições.

O arquivo de origem é estático. `tools/rig-footballer.py` preserva a malha e
adiciona rig/pesos + idle/walk/run; exige o SHA-256 do arquivo de entrada.
Para reproduzir, baixar o espelho GitHub **fixado** no manifesto, então:
`python3 xfc-game/tools/rig-footballer.py source.glb xfc-game/assets/players/models/footballer.glb`.
Em seguida: `node xfc-game/tools/optimize-footballer.mjs xfc-game/assets/players/models/footballer.glb`.
Python 3 + ImageMagick + npm ci; não gera um novo corpo/uniforme.
O resultado móvel tem 22.386 triângulos e ~1,81 MB. Separação das mãos
usa conectividade da malha: limiar apenas por coordenadas rasga dedos/short.

Regras de integração:
- **Frente verificada +Z**, e yaw do motor `atan2(vx, vz)`. A antiga afirmação
  "Mixamo sempre olha para -Z" era errada. Nunca aplicar PI sem medir/ver.
- Carregar somente os clipes do rig atual; não retargetar a biblioteca legada.
- Restaurar pose antes dos gestos aditivos a cada quadro, inclusive distante.
  `react('fall')` faz queda; `movement.lean` inclina nas curvas.
- Recolorir apenas `Micah | top` e `Micah | bottom`; preservar a pele/olhos.
- Medir SkinnedMesh via `applyBoneTransform`, não só Box3 da geometria.
- API de animação mantém speed/mask/blend/trigger/stop/state/stats.

**Gol e comemoração:** `lastTouch` serve às colisões e escanteios;
`lastIntentionalTouch` guarda posse/passe/chute e não muda no desvio do goleiro.
`resolveGoalCredit()` escolhe o atacante. Posse adversária deliberada encerra
esse vínculo; gol contra tem `ownGoalBy`, sem comemoração do defensor.
A tela ainda valida que o autor pertence ao time que marcou. Regressões em
`xfc-goal-credit.test.mjs` e `xfc-footballer-regression.test.mjs` (olhos/velocidade
nos quatro sentidos e gol com desvio, HUD/comemoração/controle corretos).

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

## Atualização v0.5.17 — aparência e menus

- `appearanceFor(player)` (`data/appearance.js`) é a fonte de pele/cabelo por
  identidade. Não usar `lookFor(index)` para simular atletas reais. Há perfis
  explícitos para os XI de Barcelona/Real Madrid e outros nomes conhecidos;
  desconhecidos/fictícios têm `source: default-unverified`, sem inferir etnia.
- `match3d/player-surface.js` adapta textura/UV/cabelo do Micah. Ao clonar
  texturas, criar **THREE.Source independente** antes de substituir pixels:
  `Texture.clone()` compartilha Source e contaminava a pele de outros atletas.
- Uniformes: atlas frente/costas sobre a camisa importada, com escudo/nome/
  número; short e meias separados. Configuração em `data/kits.js`. São
  reconstruções estilizadas, não uniformes oficiais licenciados de temporada.
- `modes` agora abre o seletor da arte diretamente. Não reintroduzir o hub roxo.
  Copa América/campanha/formatos especiais ficam em Copas/Eventos Especiais.
- Três artes novas em `assets/menus`; abertura Neymar/Brasil substitui a antiga.
  `reference-menu.js` fornece botões reais, foco e coordenadas proporcionais.
  Exceção de tamanho para estas referências: JPEG até 650 KB, sem rede externa.
- Sete cartões de treino + botão extra de equipe; não mapear todos ao mesmo
  exercício. `keeper` controla o goleiro, `corner` cruza, `dribble` usa cones.
- Não mudar os primeiros seis índices de STADIUMS: saves antigos dependem deles.
  FEATURED_STADIUMS escolhe a primeira página; os antigos continuam na segunda.
- Copa do Brasil/BR são edições compactas declaradas, não calendários oficiais:
  quatro clubes em mata-mata e seis em pontos corridos turno/returno.
- Ver `docs/v0.5.17.md` e `tests/xfc-reference-menus.test.mjs`.

## Atualização v0.5.18 — rede, relva e animação

- `net-physics.js`: molas/tensão escalar, bordas fixas, subpassos de 1/120 s,
  dt limitado e repouso automático. `goal-net.js`: quatro painéis por gol;
  perfil econômico tem 712 nós/gol, buffers só mudam após impulso.
- `ball.js` emite `onNetImpact` (lado/superfície/ponto/velocidade). `goalPocket`
  só captura bola que atravessou a boca; reset/chute/domínio limpam o estado.
- Não zerar a velocidade em `scoreGoal`: durante `goal`, atualizar bola sem
  jogadores e sem repetir regras. Treino também deixa a bola chegar à rede.
- Relva externa licenciada em CREDITS: uma amostra adicional no shader do
  campo, sem draw/passe adicional. Descartar `turfDetail` com o estádio.
- Preservar Android: pixel ratio fixo 0.6, sem MSAA/sombras/lâminas subpixel.
  Desktop mantém lâminas curtas e qualidade adaptativa. Não prometer 60 FPS
  em dispositivo físico só com resultados do Chromium do sandbox.
- Locomoção tem fase compartilhada de trote/corrida, blend exponencial e
  cadência limitada; gestos de chão atenuam o mixer para não correr deitado.
  Mergulho converte lado mundial para lateral local e trava giro durante ação.

## Atualização v0.5.19 — correções solicitadas em aparelho

- `football-actions.js`: passada usa IK de duas articulações, com pé até 32 cm
  à frente/atrás e sola nivelada; não restaurar o clipe que dobrava o joelho
  com a coxa estendida atrás. Micah importado continua sendo a malha do atleta.
- Treino `penalty`: joystick MIRA, não desloca batedor; câmera baixa fixa,
  `penaltyTarget` contínuo, direção/altura determinísticas. `penaltyDecision`
  escolhe um dos três lados por voo; IA não muda de lado seguindo a bola.
- CHAPÉU (`rainbow`, C), PEDALADA (`dribble`, R), SUPERCHUTE (V ou swipe antigo).
  Habilidades têm posse/recarga; pênalti mostra só mira/chute, não dribles.
- Reposição: `restart.preparation` transporta bola e baixa até o chão em 1,35 s;
  aceita comando humano só após concluir. A animação não cobra automaticamente.
- Placar compacto: estatísticas continuam na pausa → FATOS DA PARTIDA.
- Sustentação da arquibancada acompanha a inclinação, não uma caixa que atravessa
  as cadeiras; piso contínuo sob o estádio. Luvas usam máscara dos pesos Hand na geometria CLONADA do goleiro,
  capa de látex no shader e punhos locais; nunca alterar a geometria compartilhada.
- `fulltime` para renderização 3D; o painel de resultado é DOM, não precisa
  ficar gastando GPU nem atrasar em aparelho lento.


## Atualização v0.5.20 — coleção, reposições completas e controle

- `data/shirt-collection.js`: 69 camisas identificadas, 54 clubes; `teams.js`
  acrescenta somente IDs inexistentes (47). Total 69 clubes. Novos elencos são
  fictícios, sinalizados no seletor; não inventar rosters reais.
- `kits.js` acrescenta fotos sem mudar índices anteriores de saves. Seletores
  usam `shirt`; 3D continua reconstrução de cores/padrões. Origem, transformações
  e 27 omitidas em `docs/shirt-collection.md`, fontes dos escudos em CREDITS.
- Locomoção: apoio assimétrico (pé até 12 cm atrás / 30 cm à frente), recuperação
  suave, braços substituem as curvas antigas; Micah e todos os gestos preservados.
- `restart.preparation.stage`: seek → pickup → carry → place → retreat; posição
  inicial real do cobrador e ponto de saída da bola. Bola acompanha landmarks
  Hand após atualizar o modelo. Cobrança humana aguarda comando, depois runup.
  Ao acabar runup, a fase pode mudar dentro de updateRestartActors: não chamar
  setupRestart com restart nulo. IA também passa pela aproximação.
- `ball.state.rainbow`: arco de 1,18 s sobre o executor, origem fixa e distância
  por dribbling. Primeiros 0,62 s seguram o atleta durante o gesto; depois ele
  pode perseguir a bola. Não dar posse por distância remota; disputas continuam
  após o arco. Limpar trajetória em reset/kick/restart.
- `controls.readKeyboard` não toca no vetor enquanto há pointerId ativo. Mira
  do pênalti retém último vetor fora da zona morta e só reseta na próxima cobrança.
- Luz/relva clareadas sem subir resolução/sombras/passes no Android.


## Atualização v0.5.21 — pausa, gestos e plano de jogo

- Placar único em `hud.js`, topo direito, faixa escura e período inline. Pausa
  mantém o MESMO HUD/partida por baixo de um gradiente; não usar arte de partida
  fictícia nem um segundo placar. Novo menu `pause-reference` em `play.js`.
- `showPause` congela world E renderer; `resumeRender()` retoma sem kickoff/reset.
  Nunca usar `match.start()` para despausar (ele reinicia a saída!). Inputs são
  limpos para não ficar correndo após soltar o dedo durante a pausa.
- CHUTE: força pelo tempo real no release (inclusive dedo imóvel), carga total
  vira power. CORRER: pointer capturado; swipe ↑ rainbow / ↓ dribble confirmado
  somente no pointerup. Cancelamento/perda de captura/pausa não geram ação.
  Botões dribble/rainbow/super e teclas R/C/V foram retirados; K carregado é power.
- `ui/game-plan.js`: cartas e arrasto pelo bounding rect (palco escalado). Cancelar
  restaura; setas também movem. Posição em `profile.gamePlans[teamId][rosterId]`.
- `world.setGamePlan` exige pausa, jogador ativo do usuário e números finitos.
  Altera tacticalBase, NÃO a posição física. IA usa âncoras personalizadas sem
  forçar a antiga faixa por função. Papel/GK do atleta não muda pelo arrasto.
  Dados globais de formação/elenco não são mutados. Partidas novas leem o perfil.
- Nova locomoção elimina os 6 cm de abaixamento contínuo; apoio quase estendido,
  balanço distinto de andar/correr e correção de contato dos pés. Preservar todos
  os gestos anteriores e modelo importado; regressão visual ainda requer usuário.

### v0.5.22 — UT local e revisão de corrida

- `data/ultimate.js`: motor puro de economia/migração/pacotes/instâncias/elencos,
  objetivos, DME, evolução e séries locais. `profile.ut` dentro da mesma chave
  v1. Não apague `ultimatePlayers`: migração preserva compras negociáveis.
- `screens/ultimate.js` e `styles/ultimate.css`: UI DOM real, sem print fingindo
  sistema. Todos os modos claramente LOCAL/IA; não existe backend multiplayer.
- `beginUtMatch` salva snapshot/ID; `ultimateMatchTeam` constrói a equipe que o
  `play.js` envia a `createMatch`; `settleUtMatch` é idempotente. Não usar o
  caminho de recompensa comum junto do UT (duplicaria moedas/partidas).
- Carta inicial não é vendável; carta em qualquer elenco/banco/evolução/partida
  não pode ser vendida/consumida. Débito e cartas do pacote persistem antes da
  revelação. `unmount` cancela seus timers. DME exige confirmação de consumo.
- Agora placar BRANCO com relógio LIMA ABAIXO, não a faixa preta da v0.5.21.
- Corrida tem fase aérea e braços amplos alternados; NÃO nivelar pés ao chão
  em todos os frames (isso cancela o voo). O modelo importado não mudou.
- Artes brasileiras em `assets/competitions`, botões DOM sem texto duplicado
  por cima. Manter as competições compactas reais, saída e retorno corretos.
- Documentação e limitações em `xfc-game/docs/v0.5.22.md`. Testes de UI/modelo
  não substituem aprovação visual no aparelho. CI inclui UT e pausa/gestos.

### v0.5.23 — pedido de referência exata e reposição curta

- CSS final do HUD/pausa em `styles/reference-broadcast.css`: ao vivo branco/lima
  à esquerda; pausado faixa preta à direita. Mesmo DOM/dados, nunca placar fixo.
- `assets/ui/pause` contém apenas marca/letras/ícones recortados da referência
  fornecida. Campo continua sendo o renderer real congelado. Botões têm aria-label
  (não busque texto no PNG); menu principal tem CINCO linhas. Plano de jogo agora
  dentro de Configurações, não removido. Rodapé A/B é clicável.
- Pedido novo SUPERA o passeio físico da v0.5.20: escanteio/tiro de meta começam
  no ponto e só ajeitam a bola por 0,8 s. Não restaurar seek/pickup/carry/retreat
  nem corrida preparatória. Bola fica no solo; comandos bloqueados só no ajuste.

### v0.5.24 — pools ampliados, FIFA e referências UT

- `FIFA_NATIONAL_TEAMS` tem 211 associações; `NATIONAL_TEAMS` continua sendo os
  32 elencos da campanha clássica e do catálogo UT. Não substituir o array antigo
  globalmente: quebraria sorteios antigos e multiplicaria cartas fictícias no UT.
- Países novos têm `squadSource: fictional`, onze `Atleta N · País`, aviso explícito
  na seleção, atributos neutros e bandeira real local. Cadastro por confederação
  em `fifa-members.js`; SVGs MIT em `assets/flags`, mantendo a API SVG dos badges.
- Torneios novos salvam `rules`. Sem `rules`, aplicar formatos/terceiros antigos.
  `seedKnockout`/`byes` suportam até 256; passes entram junto dos vencedores, sem
  jogar contra null e sem eliminar ímpar. WORLD novo é mata-mata customizado 211;
  Copa clássica 32 segue acessível e saves dela continuam sendo retomados.
- Libertadores mista Brasil/Europa é escolha EXPRESSA do usuário, não bug de pool.
  Só Copa América usa exclusivamente as dez associações CONMEBOL.
- UI UT: fontes recortadas em `assets/ultimate/reference`, procedimento Python
  documentado. Não usar saldo/XP/nível/cartas das imagens como dados do save.
  Campo/palco/medalhão têm cópias limpas; cartas e nível são DOM do perfil.
- Corrida: fase pelo deslocamento real (`movement.x/z`), distância do ciclo pela
  escala/alcance/apoio. Não reintroduzir tempo fixo que anime corrida parado.
  Preview sem coordenadas usa integração de velocidade. Teleporte não é passada.

## v0.5.25 — painéis UT, materiais e replay

- Os painéis enviados são as próprias telas, não banners internos. Hotspots em
  `screens/ultimate-reference.js`; dados salvos sobrepostos. `tools:true` mantém
  as ferramentas detalhadas de elenco/mercado/pacotes sem perder funções.
- Fotos só quando há imagem correspondente. Neymar/Vini são recortes da arte
  fornecida, com procedência; fictícios não recebem retratos de outras pessoas.
- `quality.js` / `graphics-settings.js`: baixa/média/alta/ultra, mais automática.
  Perfis explícitos mantêm resolução fixa durante o jogo. Nenhum FPS garantido.
- `replay.js`: buffer circular limitado a 61 poses/10 Hz. Só pode começar com
  motor parado; registra poses/bola, não física/placar. Encerramento restaura
  pose/câmera pausadas com Float64, não retoma a partida sozinho. Não exporta vídeo.
- `tests/xfc-visual-upgrade.test.mjs` cobre quatro shaders/perfis, corpo inalterado,
  teto de sombras, replay sintético e na partida real, painéis e persistência.
- Alterações no fonte exigem regenerar `app.bundle.js` (é rastreado neste repo).
  Sem teste em telefone físico ou aprovação visual implícita em teste automatizado.

## v0.5.26 — continuidade de movimento e UT

- Limiar de orientação por velocidade 0,15 m/s (também no treino); cabeça usa
  diferença angular normalizada. Não adicionar rotação PI ao Micah: frente é +Z.
- CORRER só solta em pointerup/cancel/lostcapture, não na prévia do gesto.
- Assistência da bola gira mantendo módulo; atrito de rolamento em `physics.js`.
  Não reintroduzir aceleração mínima de bola parada ou meia-volta ao passar alvo.
- PNGs UT são recortes lossless nativos, não novos assets HD. Texto DOM sobre
  navegação, mesmos painéis/funções. Raridades das cartas usam variáveis de cor.
- `tests/xfc-motion-continuity.test.mjs` cobre baixa velocidade, input constante,
  gesto de sprint, física de rolamento e integração com posse; incluído no CI.

## v0.5.27 — biblioteca e Ultra móvel

- `asset-library.js` mantém escolhas de IDs no perfil e getters de escudo, sem
  URLs arbitrárias. `asset-library-catalog.js` tem só metadados; JPEGs externos,
  carregados sob demanda em páginas de 36. Não executar o HTML de origem.
- Não reconhecer identidades pelos rostos: recortes sem nomes são associados
  pelo usuário. Faces são retratos 2D; três atlas têm adaptação real de camisa.
- `graphicsPreset('ultra',true)` tem orçamento próprio móvel: ratio 1, shadow
  1024/6 casters/20Hz, 12000 lâminas, atlas de camisa 512×256. Desktop: 1,25,
  1536/10/30Hz, 20000 lâminas. Não voltar a todas as sombras/ratio1,5 no celular.
- `createDetailGovernor` reduz detalhes secundários com histerese; NÃO muda
  framebuffer durante a partida. Replay deve invalidar shadows quando renderiza.
- `tests/xfc-assets-performance.test.mjs` está no CI; testes desktop precisam
  declarar lowPower:false, caso contrário hardware do CI pode ser econômico.

## v0.5.28 — logos originais são o padrão

- Correção expressa do usuário: NÃO substituir automaticamente logos existentes
  pelos da biblioteca. `crestFor` só usa ID escolhido; fallback é o logo anterior.
  Ícone de perfil também mantém o original sem escolha explícita. Não apagar
  escolhas manuais do save para fazer essa reversão.
- `asset-library-clean.js` lista 82 derivados PNG transparentes revisados; o
  catálogo de exibição usa `sourceFile` para preservar acesso ao JPEG intacto.
  Script `clean-library-crests.py` remove só preto periférico; não chroma key
  global, nem remover preto das bandeiras/escudos sem revisar. Fontes originais
  em `assets/crests` não foram regravadas nem substituídas.

## v0.5.29 — referências de abertura/seleção e ajuste corporal autorizado

- `assets/ui/quick/loading.png` é o PNG INTACTO enviado; intro e pré-bootstrap
  usam a própria arte, sem redesenhar logo/adicionar texto. A resolução é
  1672×941, não 1568×882 (esta última é apenas a base de coordenadas dos hotspots).
- `team-selection.js` atende kickoff/quick. Quick agora sorteia clubes distintos;
  testes que exigem clubes específicos precisam passá-los. Kits/elenco retornam
  pela origem. Uniformes disponíveis ficam no modal da camisa, não todos no painel.
- Pedido explícito novo autoriza APENAS altura de 1,75 m e braços/pernas levemente
  grossos. `athleticLimbs` deriva/cacheia geometria radial (+7%/+9%) sem mudar
  topologia, UV, rig ou arquivo GLB. Não substituir Micah nem alterar rosto/tronco.
- Braços quietos ao andar, contralaterais na corrida. Recuperação de joelho até
  1,83 rad; dive dura 1,35 s, não mais 0,95. Alcance físico de defesa continua
  limitado ao voo; cooldown impede reinício visual antes da recuperação.
- Pênalti reposiciona todos os outros atletas fora da área/arco e árbitro na
  lateral; goleiro atacante retorna ao próprio gol. Ninguém é desativado.
- Marcador plano vermelho orientado pela câmera, inclusive replay; não cone azul.
- `tests/xfc-reference-motion.test.mjs` incluído no CI. Documentação e procedência
  em `docs/v0.5.29.md` e `assets/ui/quick/CREDITS.md`.

## v0.5.30 — países, carreira e confirmação do pênalti

- `team-groups.js`: só agrupamento da UI, não reordenar `TEAMS` global. Setas
  agora circulam no país; seletores Espanha/Brasil primeiro.
- `penaltyRunup` é estado separado de `restart.preparation`. Espera 50 cm;
  CHUTE snapshot de mira/força/canto independente do GK; .46 s de aproximação,
  só contato chama `releasePenalty`/conta tentativa. `update` respeita pausa e
  bloqueia comando duplicado; reset limpa estado. Não mexer nas reposições .8 s.
- Cadência de caminhada/corrida foi corrigida (ciclo antigo muito curto), mas
  fase continua baseada em distância real. Cotovelo agora ~10–33°, não ~22–56°.
- `career.js` é motor puro local; `profile.career` isolado, ID pendente/fixture
  para liquidação única. Liga customizada 8/14, transferência livre entre anos.
- `playerLockId` e `selectControlled` preservam protagonista mesmo fora de casa;
  não usar atribuição direta ao controlado nos fluxos comuns. Modo treino segue
  seu próprio controle. TROCAR pede passe; sem controle dos onze na carreira.
- Gol chega no campo `event.scorer`, não `event.player`: contabilizar corretamente
  o atleta criado. XP do modo não se mistura às moedas/XP gerais ou UT.
- Novos testes `xfc-career-penalty.test.mjs` no CI; documentação v0.5.30.md.

### v0.5.31 — referências da carreira e Kick Off

- `screens/career.js`: arte original em `assets/ui/career/reference.png`, Neymar
  fixo; dados e controles DOM por cima. Novas carreiras OVR 57, customização
  validada em `data/career.js`; saves anteriores conservam atributos/XP.
- `ui/player-preview.js` reaproveita Micah GLB em canvas transparente; não
  substituir o corpo nem confundir a arte de Neymar com a prévia 3D editável.
- `kickoff.js` e `kickoff-kits.js`: referência verde enviada, seleções reais,
  confirmação por lado. `friendly` mantém Jogo Rápido com `team-selection.js`;
  `quick` continua Time Aleatório. Não unificar novamente os dois visuais.
- Pênaltis em treino/partida/IA: 5 m, 1,35 s de aproximação depois de CHUTE.
  O prazo de encerramento por tempo começa no contato, não no comando.
- Proveniência nas duas pastas de assets; derivação reproduzível em
  `tools/prepare-career-kickoff.py`. Sem novas garantias de FPS/celular.

### v0.5.32 — câmera da carreira

Carreira integra `MENU_ITEMS`, sem `.career-entry` solto. `playerLockId` faz o
modo `play` retornar à câmera `pro`; a função dos treinos é compartilhada com
orientação `attackSign(userSide)` e entrada relativa ao mesmo eixo. Não restaurar
a câmera de transmissão na carreira ao terminar a entrada. Testes em casa/fora
em `xfc-career-penalty.test.mjs`; saves/arte da v0.5.31 continuam os mesmos.

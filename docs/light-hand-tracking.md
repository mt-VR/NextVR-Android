# Rastreamento de mãos leve (Build 83)

O rastreamento de mãos do PhoneXR era um modelo MediaPipe HandLandmarker (7,5 MB de
`assets/hand_landmarker.task`) rodando em TFLite: ~85–100 ms por quadro no CPU deste aparelho,
duas grafias (1 e 2 slots), delegate GPU, watchdog, política de slots e um bitmap ARGB de análise
por quadro. A Build 83 troca tudo isso por **segmentação de pele + palma + silhueta**, um motor
nativo de ~600 linhas que não tem modelo, tensor, delegate nem inferência.

## Por que é muito mais leve

| | antes (MediaPipe) | agora (lighttrack) |
|---|---|---|
| modelo no APK | 7,5 MB (`hand_landmarker.task`) | nenhum |
| dependências | `tasks-vision`, `litert`, `protobuf-javalite` | nenhuma |
| entrada | bitmap ARGB redimensionado (alocação por quadro) | `LightFrame` (Y/Cb/Cr) amostrado das planos da câmera |
| custo por quadro | 85–100 ms | fração de milissegundo (~1–2 ms com 320 px no lado menor) |
| threads/grafos | thread de inferência, 2 grafos, fila de slots | uma passada na thread de rastreamento |
| memória | bitmap + tensores + intérpretes | 3 `ByteArray` + buffers por resolução |

O que **não** mudou: duas mãos, `id` `left`/`right`, pinça = clique, punho = pegar/menu, dedo
apontando = toque direto, 21 landmarks, o formato JSON de 63 floats consumido por
`web/src/hands.js`, o filtro One Euro, o latch de pinça, o modelo de movimento para falhas curtas e
o renderizador nativo de silhueta (`PhoneXrHandRenderer`).

## Como funciona

1. **`SkinMask`** — Cb/Cr (BT.601, janela clássica de pele + piso de luma + piso de magnitude de
   croma) em cada pixel; limpeza por maioria 3×3 via imagem integral.
2. **`BlobFinder`** — rotulagem de componentes 4-conectados com pilha pré-alocada, estatísticas por
   componente, e a **área de buraco fechado** (o laço polegar-indicador) por flood fill na caixa do
   blob.
3. **`PalmFit`** — a palma é o **maior disco inscrito** do blob (transformada de distância chamfer,
   duas passadas). Dali sai o centro da palma, o raio (largura da palma = 2,13 raios) e um **perfil
   radial** em 90 direções: para onde os dedos apontam (oposto ao antebraço, cujo traço sai do
   quadro), onde está o punho e quanto cada dedo alcança.
4. **`HandSkeleton`** — monta os 21 landmarks no grid que o resto do motor fala: punho, polegar,
   quatro dedos (esticados até o alcance medido, ou dobrados sobre a palma), e fecha o polegar no
   indicador quando a pinça foi medida.
5. **`LightHandTracker`** — junta tudo, nomeia os lados (a câmera traseira olha para a frente, então
   a direita da imagem é a direita do usuário), garante que dois blobs nunca recebam o mesmo lado e
   decide punho (dedos dobrados + blob compacto).
6. **`PhoneXrHands`** — inalterado no comportamento: filtros, latch, âncora de mira e ponte de
   predição. Só a entrada mudou (`List<LightHand>` em vez de `HandLandmarkerResult`).

## Ajuste fino

Tudo em `LightHandConfig.kt`: janela de croma, área mínima de blob, `PALM_PER_RADIUS`,
`FINGER_REACH`/`THUMB_REACH` (o que conta como dedo esticado), `HOLE_FULL` (o tamanho do laço que
conta como pinça) e as constantes de profundidade (`PALM_METRES`, `FOCAL_PER_WIDTH`).

`PerfLog` mostra o custo do motor: `light_ms`, `light_max`, `skin_pct` e `light_size` na linha
`NextVR-Perf`. Se `skin_pct` está perto de zero num ambiente escuro, o problema é a imagem, não o
rastreador.

## Limitações conhecidas (e o que fazer)

- **Lado da mão por posição**: sem modelo, a silhueta não distingue esquerda de direita com uma mão
  só; o rastreador usa o lado da imagem (com histerese no meio da tela) e, com duas mãos, garante
  lados diferentes. É como os rastreadores por silhueta funcionam.
- **Pinça por laço fechado**: a pinça aparece quando o laço polegar-indicador se fecha de fato —
  dedos encostados, não pairando. Um `gapTips` muito pequeno ainda pode fechar a pinça com a mão de
  perfil.
- **Dedo apontando**: dois dedos muito juntos podem contar como esticados; a pinça (o clique) não
  depende disso.
- **Luz**: croma de pele em ambiente muito escuro perde saturação; `MIN_LUMA`/`MIN_CHROMA2`
  controlam o quanto.

## Medido na Build 83

| | Build 82 (MediaPipe) | Build 83 (lighttrack) |
|---|---|---|
| APK publicado | 79 133 357 B (75,5 MB) | **44 502 720 B (42,4 MB)** |
| modelo no APK | `assets/hand_landmarker.task` (7,5 MB) | nenhum |
| bibliotecas nativas do detector | `libmediapipe_tasks_jni.so`, `libtensorflowlite_jni.so` (armeabi-v7a + arm64-v8a) | nenhuma |

O CI confere isso a cada build (passo *Verify native camera library and the absence of the detector
runtimes*): se o modelo ou um dos runtimes do detector voltar para dentro do APK, a build falha.

Testes: 156 testes JVM + a suíte node (150 casos) verdes; `LightHandTrackerTest` roda o motor
inteiro — máscara de croma, blob, disco da palma, perfil radial e os 21 landmarks — contra cenas de
mão sintéticas (aberta com 4 dedos, punho fechado, laço de pinça e duas mãos).

## Build 84 — por que a silhueta girava (e o que mudou)

O motor da Build 83 acertava a posição da mão, mas a **orientação** saía errada e instável: a
silhueta girava sem parar em cima da mão e, quando não havia mão, um "fantasma" atravessava a tela.
Três causas, todas corrigidas:

1. **O antebraço entrava na conta dos dedos.** Pele é pele: o braço é o maior bloco de pele da
   imagem, e o perfil radial o lia como uma protrusão enorme. A média ponderada que definia "para
   onde os dedos apontam" caía entre os dedos e o braço, então o esqueleto inteiro era desenhado
   **rotacionado** — e como a área do braço no quadro muda, ele **girava** de quadro a quadro.
   Agora o braço é identificado pelo **contato do blob com a borda da imagem** (com largura de
   punho, não um dedo encostado) e o seu semicírculo fica fora do cálculo (`PalmFit.arm`).
2. **A orientação não tinha filtro.** Alguns graus de ruído já faziam a mão tremer; uma leitura
   errada de um quadro a virava. Agora a direção dos dedos é filtrada no arco mais curto
   (`LightHandTracker.steady`) e **um quadro não consegue virar uma mão 180°**: uma leitura suspeita
   é segurada até se repetir. O punho é sempre o lado oposto aos dedos, então ele nunca mais é
   desenhado do mesmo lado da palma.
3. **A previsão deformava a mão.** Entre duas detecções cada landmark era extrapolado com a própria
   velocidade; dois pontos da mesma mão se afastando (o que ruído de silhueta faz) **abriam os
   dedos** e a silhueta se dobrava/apagava pela tela — era o "bugado girando" quando a mão saía do
   quadro. Agora a previsão é **rígida**: a mão é transladada pela velocidade da palma e a pose é
   preservada (`PhoneXrHands.predicted` → `translate`).

`LightHandTrackerTest` cobre os três: `theForearmIsNotMistakenForFingers` (com braço na borda
inferior, dedos continuam sendo 4 e o punho fica abaixo da palma) e
`oneFlippedFrameCannotTurnTheHandAround` (um quadro invertido é ignorado, dois seguidos são
seguidos).

## Build 85 — a "mão fantasma" sobre o armário

O teste de croma de pele (a janela Cb/Cr clássica) aceita **qualquer superfície bege** — parede,
armário, porta, lençol. Num quarto iluminado isso significava que o rastreador publicava o móvel
como mão: uma silhueta enorme, girada e flutuando no ar, exatamente o que aparecia na tela.

A cor não distingue pele de móvel, então o rastreador passou a exigir **forma de mão**:

- **Dedo fino de verdade** (`PalmFit.humps`): conta as protrusões do perfil radial que são
  *estreitas* (≤ `MAX_HUMP_BINS`, ~52°). Uma mão tem dedos; uma parede tem arcos largos.
- **Tamanho de mão** (`MAX_PALM_RADIUS`, `MAX_BLOB_AREA_SHARE`): a palma tem ~4 cm; um bloco que
  ocupa meia tela não é uma mão.
- **Nada de retângulo** (`MAX_HAND_FILL` = 0.90): a mão nunca preenche a própria caixa delimitadora
  (dedos e polegar deixam cantos de fundo); um armário preenche.
- **Pele que sai da imagem demais não é braço** (`MAX_ARM_RUN` = 4 raios de palma): um antebraço tem
  largura de punho; uma parede encosta na borda por muito mais.
- **Punho sem dedo** só é aceito com o antebraço no quadro ou logo depois de a mão ter sido vista
  (`isHand`, `RECENT_HAND_MS`). Nada de "punho" nascendo do nada no meio da sala.

A pontuação resultante (`PalmFit.handiness`, 0..1) virou também o `confidence` publicado, então a
silhueta de uma detecção fraca já aparece esmaecida em vez de sólida.

`LightHandTrackerTest` cobre: `theRoomIsNeverPublishedAsAHand` (armário saindo do quadro, parede à
direita, painel no meio — todos 0 mãos), `aClosedHandIsAFist` (abre e fecha), e
`aClosedHandWithItsForearmIsFoundFromCold`.

## Build 86 — mão de palito, e mais FPS

O rastreio ainda custava caro no lugar errado: **desenhar**. A silhueta preenchida escreve a
poligonal da palma, duas cadeias de borda e duas passadas (contorno + preenchimento) a cada quadro
de exibição, mais o trabalho de stencil — e, quando a silhueta errava a forma, aparecia como um
borrão sobre o móvel.

A Build 86 desenha **palito** (`PhoneXrHandRenderer.stickFigure`, ligado por padrão): 24 cápsulas
finas + pontinhos nas 21 juntas, uma passada só, sem preenchimento e sem stencil extra. São ~1 300
vértices contra milhares, e os traços caem exatamente sobre os landmarks — a mão ou está na mão ou
não aparece, nunca "quase" na mão. A cor é a do contorno (branco), a pinça engrossa/clareia.

No rastreio:

- **análise menor** (`TrackingBudget` 256 → 192 px): ~55 mil pixels de croma + limpeza + flood fill
  + ajuste de palma, abaixo de 1 ms; o rastreio acompanha o quadro da câmera em vez de limitá-lo;
- **fast path de móvel** (`MAX_SKIN_SHARE` = 0.60): se a imagem é mais pele que não-pele é parede,
  armário ou lençol — sai antes do flood fill;
- **continuidade** (`LightHandTracker.nearer`): com dois blobs, o que está mais perto da palma do
  quadro anterior é aquela mão, então filtro de orientação, latch de pinça e lado não trocam de
  slot quando as áreas oscilam.

Testes: `TrackingBudgetTest` atualizado para 256/192 e a suíte node ganhou pins do palito
(`stickFigure=true`, `fun rod(`, `MAX_SKIN_SHARE`, `WIDTHS = {256, 192}`).

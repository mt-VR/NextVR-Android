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
| custo por quadro | 85–100 ms | fração de milissegundo (~1–2 ms a 320 px de largura) |
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

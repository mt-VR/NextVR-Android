# Investigação do hand tracking (NextVR Android)

## Conclusão desta rodada

- **Modelo: mantido MediaPipe.** Handtrack.js não substitui o MediaPipe nos gestos do app (ver "Avaliação de modelos"). Não há medição de eficiência que justifique a troca.
- **Causa medida do teto de ~15–30 Hz:** a admissão do tracker acontecia só dentro do callback da câmera. Se uma inferência passava de ~33 ms, o resultado seguinte esperava o próximo frame, e a taxa cai em degraus (30 → 15 → 10 Hz). A simulação determinística reproduz exatamente isso (ver "Simulação").
- **Correção aplicada:** a câmera publica sempre o frame mais novo em um slot de tamanho 1 (`LatestFrameSlot`); o thread de tracking o consome assim que está livre. Nada enfileira; frames substituídos são liberados e contados como `dropped`.
- **Rescue (resgate de mão por YOLO) saiu do thread de tracking:** antes ele rodava de forma síncrona (~20 ms no host por ocorrência). Agora roda em thread próprio, uma tarefa por vez, com intervalo mínimo de 33 ms, e o resultado é fundido só se tiver até 250 ms (`RescueMerger.MAX_AGE_MS`).
- **Medição separada:** `NextVR-Perf` (logcat) reporta FPS de câmera e render (FPS do app), FPS efetivo do tracking, latência de inferência, captura→landmark (quando o sensor usa relógio REALTIME), acquire→landmark, publicação no WebView, frames descartados, CPU e memória.
- **Não medido ainda:** FPS real, latência e jitter em aparelho Android; latência de gesto (ponta a ponta, com câmera filmada); estabilidade em sessões longas; comportamento do GPU delegate. Tudo isso exige o APK em um telefone (ver `tools/perf/README.md`).

Os números de hardware abaixo são de um host de desenvolvimento (2 vCPU, sem GPU). Eles servem como referência reproduzível do custo dos modelos, **não** como FPS de celular.

## Avaliação de modelos: Handtrack.js x MediaPipe

Critério do projeto: trocar só com evidência de maior eficiência **e** viabilidade para os gestos necessários (pinch, punho, ray, landmarks dos dedos para a silhueta).

- Handtrack.js (fontes: [blog TensorFlow 2019](https://blog.tensorflow.org/2019/11/handtrackjs-tracking-hand-interactions.html) e readme do pacote [`handtrackjs` no npm](https://www.npmjs.com/package/handtrackjs)) entrega **caixas delimitadoras** e classes (open, closed, pinch, point, face). Não há 21 landmarks nem lateralidade; a versão mais antiga do pacote reconhece apenas mãos.
- Os gestos do NextVR (pinch por distância entre polegar e indicador, punho, ray, silhueta) dependem de landmarks. Com Handtrack.js, o pinch viraria uma classe discreta, sem a histerese `.30/.48` do PhoneXR, e a silhueta deixaria de existir.
- Os FPS publicados (26 FPS num MacBook Pro i7 2018 com 450×380; 14 FPS num MacBook 2014) são de desktop de 2018–2019, em outra entrada de imagem, e não são comparáveis aos números do host ou do celular. Não foram medidos em Android.
- **Decisão:** manter MediaPipe. Não há evidência de ganho de eficiência e a viabilidade para os gestos é menor. Se no futuro o gargalo for o modelo, a alternativa a medir é um modelo de landmarks mais leve dentro do MediaPipe, não Handtrack.js.

## Histórico de tentativas (PRs e commits)

| Mudança | Estado | O que fez | Avaliação |
|---|---|---|---|
| PR #4 "Fix hand tracking latency and stability" (`7c64abf`) | merged | Pipeline de latência e estabilidade | Base atual; não há medição antes/depois no repositório |
| PR #5 "Hand tracking PhoneXR fiel" (`b731ed0`) | merged | Aproximou o pipeline do PhoneXR (One Euro, sem dock de pinch) | Alinhamento com a referência; FPS não medido |
| PR #7 "Hand tracking: definitive FPS/latency fixes" (`9babcba`, branch `arena/2353bd8b`) | **aberto, não mesclado** | Rotação YUV nativa, rescue assíncrono, JSON fora do main, instrumentação | Sobrepõe este trabalho em `PassthroughCamera`, `FusionHands`, `PerfLog`, `RescueMerger` e testes. **Não fechado nesta sessão**: a decisão de fechar ou substituir é do mantenedor |

Por que o FPS continuava baixo antes desta rodada, com base no código de `HEAD`:

1. Admissão do tracker só no callback da câmera → taxa em degraus (medido na simulação).
2. Rescue síncrono no thread de tracking → cada ocorrência somava ~20 ms no host.
3. A publicação no WebView e o render ficavam no main/GL e não eram medidos separadamente do tracking, então "a UI está fluida" era confundido com "o tracking está rápido".

## Referência medida (host, MediaPipe 0.10.35 CPU, média de 2 execuções de 120 quadros)

Reproduzível com `tools/bench/hand_host_bench.py` (dados brutos em `/tmp/handbench/` durante a sessão, não versionados).

| Caso | Custo típico |
|---|---|
| Busca de palma sem mão (VIDEO), 1280 / 640 / 512 px | ~17 / ~17 / ~16 ms |
| Com 1 mão rastreada, 1280 / 640 / 512 px | ~29 / ~29 / ~30 ms |
| Com 2 mãos rastreadas, 1280 / 640 / 512 px | ~21 / ~21 / ~21 ms |
| Rescue IMAGE, crop 224 px | ~20 ms média, p95 ~30 ms |
| YOLO11n-pose (LiteRT), 1 thread / 2 threads | ~26 ms / ~14.5 ms |

Leitura: reduzir a largura de análise de 640 para 512 quase não muda o custo do MediaPipe; o custo está no modelo. O ganho real vem de não bloquear o tracking com o rescue e de não desperdiçar o intervalo entre inferências.

## Simulação da política de admissão (determinística, 60 s, câmera 30 fps)

`tools/bench/admission_sim.py`. "Hz" = resultados por segundo; "shown" = idade média do resultado exibido. Custos de callback (pre/scale) são **suposições**, a serem substituídas pelos logs em aparelho.

| Inferência | Política atual (admissão no callback) | Política nova (slot mais recente) |
|---|---|---|
| 30 ms | ~30 Hz / ~30 Hz | ~30 Hz / ~30 Hz |
| 34 ms | 15.0 Hz (shown 75 ms) | 29.3 Hz (shown 71 ms) |
| 40 ms | 15.0 Hz (shown 81 ms) | 25.0 Hz (shown 75 ms) |
| 60 ms | 15.0 Hz (shown 101 ms) | 16.7 Hz (shown 104 ms) |

Com callback mais lento (pre 15, scale 4): 34 ms → 15.0 vs 28.7 Hz; 40 ms → 15.0 vs 24.0 Hz; 50 ms → 15.0 vs 20.0 Hz.

**Trade-off registrado:** a latência de cada resultado sobe ~10–12 ms na simulação (um frame mais novo é processado depois de esperar o término do anterior), mas a taxa efetiva e a idade do resultado exibido melhoram na faixa 34–50 ms. Inferências de até 30 ms são limitadas pela câmera e iguais nas duas políticas. **Isto é simulação; a validação é o aparelho.**

## Avaliação de viabilidade (hardware)

Para o próximo passo: o APK com esta correção deve ser medido com `adb logcat -s NextVR-Perf` em um aparelho de referência, e comparado com o APK do `main` na mesma cena, mesma iluminação e mesma distância da mão. Critérios:

- `track` (Hz efetivo) acima de `camera` quando a inferência é ≤ 33 ms, e acompanhando a taxa de inferência acima disso;
- `dropped` coerente com `camera − track`;
- `capture_to_landmark` e `acquire_to_landmark` estáveis ao longo de uma sessão de pelo menos 15 minutos (`tools/perf/summarize_logcat.py` mostra o início e o fim);
- `java_mb`/`native_mb` sem tendência de alta.

## Comparação com PhoneXR

Referência inspecionada: [`samrat1games/phonexr`, commit `27c5bc469fb736fb0c00b7254a6dfc532fea7003`](https://github.com/samrat1games/phonexr/tree/27c5bc469fb736fb0c00b7254a6dfc532fea7003), principalmente `VrHomeActivity.kt`, `HandGestures.kt`, `HandTracker.kt` e `orangehanding/FusionHands.kt`.

| Etapa | PhoneXR de referência | NextVR antes desta correção | Consequência |
|---|---|---|---|
| Admissão de frames | `STRATEGY_KEEP_ONLY_LATEST` + um `busy` atômico; a inferência seguinte começa quando a anterior libera | `TrackingBudget.started()` impunha `nextMs = now + 33`, além do `busy`; a taxa ficava limitada a 30 inferências/s mesmo com câmera, delegate e aparelho mais rápidos | Latência/taxa artificial, independente do desempenho medido |
| Entrada da rede | 640 px de largura (`createScaledBitmap`), proporção preservada | 512 px inicialmente, podendo cair a 384 px | Menos detalhe em mãos pequenas/distantes, mais perdas de detecção e correções bruscas |
| Relógio dos filtros | `image.imageInfo.timestamp` da captura | `SystemClock.elapsedRealtime()` amostrado depois da conversão YUV e da rotação | Variação do tempo gasto no callback contaminava `dt` e a estimativa de velocidade do One Euro |
| Propriedade da imagem | O frame escalado é novo e pode ser entregue ao MediaPipe | `MpImageInput.copyOf()` copiava o bitmap de análise reutilizado para cada inferência | Uma cópia extra por resultado, tráfego de memória e lixo de bitmaps |
| Pinch | limiares de histerese `.30/.48` | `.32/.50` | Pinch começava antes e terminava depois da referência; mais ativações falsas/“grudadas” |
| Malha GL | Rotinas originais de apresentação | A malha Android era tessellada em `ArrayList<Float>` com `listOf(...)` repetidamente | Boxing/alocações em cada resultado e trabalho de GC no thread que desenha os olhos VR |

### Pipeline atual, de ponta a ponta

1. Camera2 entrega YUV em um `ImageReader` com `maxImages=2`; `acquireLatestImage()` descarta quadros antigos.
2. O callback converte YUV→ARGB nativamente, cria bitmap e o orienta uma vez para a imagem de passthrough.
3. Cada frame é escalado para análise e publicado no `LatestFrameSlot` (tamanho 1). O thread de tracking consome o mais recente assim que está livre; nada se acumula, e frames substituídos são liberados e contados como `dropped`.
4. MediaPipe VIDEO é a inferência primária. YOLO é apenas recuperação, roda em executor separado/prioridade baixa, e o landmark de resgate é executado somente quando necessário.
5. Landmarks são identificados por handedness, filtrados no tempo de captura e convertidos em forma/pinch/ray/head-space.
6. O resultado é publicado de forma latest-only ao WebView; `SpatialRenderer` lê o último frame no GL thread e desenha as duas vistas.

O desenho do passthrough continua fazendo conversão YUV e upload de bitmap em resolução de câmera; isso é trabalho real de CPU/banda de memória, mas é compartilhado com a visualização da câmera e não foi substituído por uma nova arquitetura SurfaceTexture nesta correção para evitar riscos de orientação/ownership sem hardware de validação.

## Alterações aplicadas

- Removida a cadência fixa de 33 ms. O `AtomicBoolean busy` continua garantindo uma inferência por vez e `acquireLatestImage()` continua favorecendo o frame mais novo; assim o worker acompanha a cadência que câmera e dispositivo realmente conseguem sustentar.
- A análise volta a iniciar em 640 px, igual à referência. A resolução só cai para 512 após pressão sustentada (EWMA > 85 ms), nunca para 384, e só retorna a 640 após headroom sustentado. A histerese impede oscilações frequentes.
- O timestamp do modelo/filtros agora vem de `Image.getTimestamp()`. O envelhecimento/expiração do resultado usa separadamente duração medida por `elapsedRealtimeNanos`, sem subtrair relógios cujo epoch pode diferir em alguns dispositivos.
- A imagem pequena, única por inferência, é transferida ao `MPImage` sem cópia adicional. A API emprestada (`detect`) mantém cópia defensiva para callers que reutilizam bitmaps. Em erro de delegate GPU, uma cópia de retry só é criada no caminho excepcional e permite a troca para CPU sem usar bitmap já reciclado.
- Restaurados os limiares de pinch PhoneXR `.30/.48`.
- A tesselação de silhueta/ray usa um builder de `FloatArray` primitivo, mantendo a geometria/cores; elimina a criação de `List<Float>`/`Float` boxed em cada vértice. A malha continua sendo calculada uma vez por resultado e reutilizada pelos dois olhos.
- Adicionados testes para histerese de resolução, limiares PhoneXR, epoch independente entre timestamp da câmera e relógio de conclusão e transferência de ownership do bitmap.

## Threading, sincronização e riscos revisados

- O worker primário é single-thread. `scheduled` garante no máximo uma tarefa de drenagem na fila; o drenador consome o slot até esvaziá-lo e só então libera o flag, com uma segunda checagem para não perder um frame publicado nessa janela.
- `enableHands(false)`, `stop()` e `destroy()` limpam o slot e liberam os bitmaps pendentes. `destroy()` fecha o detector no próprio thread de tracking.
- Se o executor já foi encerrado, `RejectedExecutionException` é tratado: o slot é esvaziado e o frame liberado.
- YOLO mantém cópia pequena própria antes de entrar no executor assíncrono.
- O rescue copia o crop 224 px no thread de tracking e o executa em `PhoneXR Rescue`; o bitmap de frame pode ser reciclado logo após o agendamento.
- O fallback GPU→CPU conserva uma imagem de retry somente quando uma inferência owned falha; a cópia é liberada após a tentativa CPU. O fechamento normal do `MPImage` continua no `finally`.
- Publicação para o WebView continua coalescida por `handsPending`; renderer e câmera recebem somente o último estado, não uma fila de callbacks antigos.
- `OneEuro`, cálculo geométrico do PhoneXR, handedness para câmera traseira, regras de punho/pinch/palm-menu e ray permanecem inalterados, salvo restaurar os limiares de pinch da referência.

## Validação

- Testes JVM: `LatestFrameSlotTest` (substituição do frame mais novo, liberação de frames superseded) e `RescueMergerTest` (idade máxima de 250 ms, cobertura de punho, limite de duas mãos, tamanho de frame), além dos testes existentes.
- Neste ambiente de edição não há `javac`, Gradle nem Android SDK. A compilação e os testes são confirmados pelo workflow Android CI no Pull Request; até lá, nada aqui está compilado.
- Não foi possível testar em aparelho: GPU delegate, conversão JNI em dispositivo, nem sessões longas.

---

# 2026-10-09 — Investigação definitiva: Handtrack.js vs MediaPipe, causas-raiz de FPS/latência e correções

## 1. Handtrack.js vs MediaPipe — análise técnica e veredito

Fontes: post oficial do TensorFlow Blog (2019-11-22), repositório `victordibia/handtrack.js`, benchmarks publicados do MediaPipe Hand Landmarker.

| Critério | Handtrack.js | MediaPipe `hand_landmarker.task` (atual) |
|---|---|---|
| Arquitetura | SSD MobileNet (v1 no modelo de 18.5 MB do post; v0.1.x oferece ssd320/ssd640 fp32/fp16/int8, 3–12 MB) convertido para TensorFlow.js, inferência WebGL no navegador | TFLite (palm detector + landmark model + pose), Tasks API, delegate GPU (fallback CPU) |
| Saída | **Bounding boxes** + classes grosseiras de mão inteira (open/closed/pinch/point/face, só na v0.1.x) | **21 landmarks 2D + 21 world landmarks 3D + handedness**, por mão, num único grafo |
| Desempenho medido | ~26 FPS em MacBook Pro i7 2018 (450×380); README: *"not extensively tested on mobile browsers"* | Benchmark oficial Google: Pixel 6, **17.12 ms CPU / 12.27 ms GPU** (pipeline completo) |
| Landmarks por frame | 0 (não existem) | 42 por mão, com taxa de atualização = taxa de inferência |
| Gestos necessários (pinch histerese .30/.48, fist, palm-to-face, raio 3D, toque direto) | Impossíveis sem landmarks; as classes do detector são insuficientes e sem handedness | Nativos do pipeline atual (PhoneXR) |
| Memória | Modelo 3–18.5 MB + runtime TF.js + WebGL | `hand_landmarker.task` 7.5 MB no APK |
| Compatibilidade com a arquitetura | Exigiria rodar TF.js/WebGL **dentro do WebView**, competindo com o renderizador GL do app pelo mesmo GPU, mais uma ponte JS por frame (evaluateJavascript) — latência extra e acoplamento | Já integrado nativamente; o WebView só recebe resultados |

**Veredito: Handtrack.js NÃO é alternativa viável para este caso de uso.** Ele detecta *caixas* de mãos, não landmarks; todos os gestos do app (pinch com histerese, fist, palm-menu, raio, toque direto) são derivados de 21 landmarks + world landmarks + handedness. Adotá-lo exigiria um segundo modelo de landmarks (ou seja, MediaPipe de qualquer forma), dobrando inferência, memória e latência, sem handedness nem coordenadas 3D. **MediaPipe permanece.** A substituição foi descartada por evidência, não por familiaridade.

## 2. PhoneXR original vs implementação atual (referência: commit `27c5bc4`)

A correção anterior (7c64abf) já igualou os pontos essenciais: admissão `KEEP_ONLY_LATEST` + `busy` single-flight, entrada de 640 px, timestamp de captura nos filtros, ownership do bitmap de análise, limiares de pinch `.30/.48`. A comparação 파일 a arquivo (`orangehanding/` vs `com.samrat.orangehanding`) confirmou: `Crops.kt` e `OneEuro.kt` idênticos; `FusionHands.kt` e `Yolo11Pose.kt` divergem apenas pelas correções já aplicadas (ownership, YOLO em executor, retry GPU→CPU).

## 3. Histórico de commits — por que as tentativas anteriores falharam

- **`bc475c80` / `86a0844f` ("faster hand tracking", "optimize FPS")**: reduziram a resolução de análise (512→448→384→320 px) e impuseram pisos artificiais de cadência (`nextMs` = 33→20→12 ms). Isso **mascara** FPS baixo descartando frames e cortando detalhe dos landmarks — não reduz custo real algum e degrada precisão/gestos. A taxa real nunca poderia subir: o gargalo é o custo por frame, não a cota imposta.
- **`a03ebf1`**: introduziu bitmap de análise **reutilizado** entregue ao MediaPipe (que o recicla no `MPImage.close()` — coberto por `copyOf()` = cópia de frame inteiro por inferência) e usou `SystemClock.elapsedRealtime()` como timestamp do frame (tempo de *processamento*, contaminando o `dt` do One Euro).
- **`dc794274`/`26024465`**: corrigiram o ciclo de vida do bitmap (ainda com cópia por frame).
- **`7c64abf` (PR #5)**: as correções estruturais corretas — sem cadência fixa, 640 px, timestamp de captura, ownership transferido (sem cópia), pinch PhoneXR, tesselação sem boxing. **Já estava merged.**
- **O que continuava errado após 7c64abf** (encontrado nesta investigação, ver §4).

## 4. Causas-raiz restantes no código atual

1. **Callback de câmera fazia 3 passagens de pixels por frame**: conversão YUV→ARGB escalar por pixel (clamp por lambda, índices de croma recalculados), rotação **bilinear full-res no Java** (`Bitmap.createBitmap(...,matrix,true)`) e escala bilinear para 640 px. O callback da câmera é o **teto da taxa de tracking** (admissão single-flight) e cada ms dele é latência captura→landmark. Era o maior custo de CPU por frame fora da inferência.
2. **Resgate de mão perdida era síncrono na thread de tracking**: enquanto MediaPipe perdia uma mão, a cada 2 frames a thread de tracking rodava o landmarker de resgate **na CPU** (dezenas de ms em mid-range) — o tracking primário parava exatamente nos momentos de perda de mão, que é quando o usuário percebe o "FPS baixo".
3. **JSON do frame de mãos era serializado na thread principal (UI)** a cada frame de tracking — latência de gesto e jank de UI.
4. **Não havia instrumentação** que separasse FPS de render, FPS efetivo de tracking e latências — as "otimizações" anteriores não podiam ser medidas.

## 5. Correções implementadas

- **`camera_pixels.h`**: conversão em blocos 2×2 (1 croma serve 4 pixels) + clamp por tabela — **bit-exata** com a fórmula original (fuzz de 300 trials com strides/tamanhos ímpares). Rotação 90/180/270 **fuseada na conversão** (apenas remapeamento de índice de escrita — pixel-exata, verificada contra o mapeamento de coordenadas normalizadas do `Matrix.postRotate`, teste independente).
- **`camera_pixels.cc`/JNI**: a conversão recebe `rotation`; validação estendida. Compilado com `-Wall -Wextra -Werror` no host (stub JNI) e no NDK via CI.
- **`PassthroughCamera`**: usa a conversão+rotação fuseada; a escala de análise **permanece Skia** (`createScaledBitmap`, bilinear NEON) — um bilinear escalar nativo mediria 16.3 ns/px no host, pior que o Skia otimizado em ARM. Decisão deliberada.
- **`FusionHands`**: o resgate agora é **assíncrono** — crop síncrono (barato, 224²) na thread de tracking, inferência do landmarker de resgate em executor próprio (`MIN_PRIORITY`), merge dos resultados frescos (< 400 ms) pela lógica pura `RescueMerger` (cobertura por distância, tamanho do frame, limite de 2 mãos — tudo preservado).
- **`NextVrActivity`**: o JSON do frame é serializado **na thread de tracking**; a main thread só avalia o script pronto (menos latência de gesto e menos jank).
- **`PerfLog`** (novo): a cada 3 s, `adb logcat -s NextVR-Perf` imprime `camera=…fps render=…fps track=…fps infer=…ms[min/max] captureToLandmark=…ms publish=…ms admitted/completed width=…` — separando, pela primeira vez, FPS de câmera/renderização do FPS **efetivo** de tracking e das latências.
- **Web**: o contador de FPS (settings → "Mostrar contador") agora mostra `render · tracking N fps` (medido em `hands.js` pela chegada real dos frames); nota de desempenho atualizada.
- **Testes**: `tests/camera-pixels.test.mjs` (fuzz bit-exact, rotação vs referência independente, benchmark); `RescueMergerTest.kt` (merge: fresco/vazio, coberto, stale, tamanho estranho, limite de 2 mãos); `tests/spatial.test.mjs` atualizado para a nova arquitetura (sem `postRotate` no Java; rotação fuseada no nativo).

## 6. Medições — o que foi medido, o que falta dispositivo

**Medido neste ambiente (host x86, g++ -O2, 1280×720):**

| Métrica | Antes | Depois |
|---|---|---|
| Conversão YUV→ARGB | 4.1 ns/px | **2.4 ns/px (1.74×)** |
| Rotação 90° (full-res) | resample bilinear separado (Java/Skia) | **fuseada: 2.3 ns/px (só remapeamento de índice)** |
| Testes nativos (fuzz bit-exact, rotação, escala) | — | **4/4 passando** |
| Testes node (web + nativos) | — | **17/17 passando** |

**CI (a confirmar no PR):** `testDebugUnitTest` (Robolectric, incl. `RescueMergerTest`), `assembleDebug`, verificação de ABIs/libs nativas no APK.

**Pendente — exige dispositivo Android real (não há neste ambiente):** FPS efetivo de tracking antes/depois, latência captura→landmark, FPS durante perda de mão (validar que o resgate assíncrono não stalla mais o tracking), consumo de CPU/memória e estabilidade em sessão prolongada. **Como medir:** `adb logcat -s NextVR-Perf` (métricas agregadas a cada 3 s) e o contador "Mostrar contador" na UI (render vs tracking). **Não declaro melhoria de FPS on-device sem esses dados.**

## 7. Riscos revisados

- Conversão bit-exata (fuzz) e rotação pixel-exata (teste independente) — display não muda 1 pixel.
- Ownership de bitmaps preservado (analysis frame único por inferência; crop do resgate é bitmap próprio, reciclado na thread de resgate).
- Threads confinadas (YOLO e resgate em executores próprios; landmarker de resgate criado/usado/fechado só na thread de resgate).
- Gestos preservados: limiares PhoneXR intactos; testes existentes de pinch/fist/palm passam.
- Sem filas novas: admissão continua single-flight; o resgate assíncrono não enfileira inferências no tracking.

---

# 2026-10-09 (2ª rodada) — flicker da mão ao abrir janela flutuante + multitarefa em arco (até 3 apps) + otimização do render da mão

## Bug: a mão "piscava" ao abrir uma janela flutuante

Análise de causa-raiz (código real, sem chute): a malha/visual da mão é desenhada no thread GL a partir do `Frame` mais recente (`SpatialRenderer.hands`, escrito pela thread de tracking), mas três elos da cadeia eram frágeis a stalls transitórios — exatamente o que acontece quando uma janela flutuante abre (criação de WebView no thread principal, DOM pesado no thread JS da WebView, upload de novas texturas no GL):

1. **Retenção do silhuete curta demais** (`HandPresentation`): 180 ms. Um stall de ~200 ms (1–2 frames perdidos) apagava o silhuete e ele reaparecia — o piscar. **Corrigido:** retenção de 500 ms, igual à validade mínima de um frame (`isFresh`). Perda real de mão continua sendo sinalizada na hora (frames vazios explícitos + expiração nativa do raio).
2. **Malha reconstruída a cada frame de tracking no thread GL** (`PhoneXrHandRenderer`): a tesselação aloca centenas de KB por resultado (~10 MB/s a 25 fps no thread que desenha os olhos VR) — sob carga (abrir janela) isso vira stutter de GC no caminho do hand. **Corrigido:** reconstrução só quando os landmarks se movem de verdade (epsilon de ~2 px na largura de análise) ou a cada 120 ms no máximo; mão parada reutiliza a malha cacheada, mão em movimento continua reconstruindo por frame. Cache por olho preservado.
3. **Expiração do estado da mão no web por stall de entrega** (`hands.js`): o `nextvrHands` é avaliado no thread principal; abrir um app de navegador atrasa essa fila e o estado da mão expirava em 500 ms — cancelando cursor/pinch no meio do gesto e piscando os indicadores. **Corrigido:** piso de expiração de 1 s; perda real continua explícita (frames vazios/`stopHands`). O raio nativo continua sem stale data (validade do frame), então não há clique fantasma.

A investigação completa do pipeline de tracking (conversão YUV, rotação, resgate assíncrono, JSON fora do thread principal) está na seção anterior deste documento e permanece válida.

## Multitarefa em arco (até 3 apps de vez)

- Novo módulo puro `web/src/arc.js`: `ARC_CAPACITY = 3`, ângulos/posições do arco (fileira curva centrada, simétrica, raio constante) e seleção LRU.
- `windows.js`: janelas presas formam **uma única fileira em arco** com até 3 apps; ao abrir um 4º app com o arco cheio, o **menos recentemente focado é fechado** automaticamente (com toast localizado pt/en/es). Janelas soltas (arrastadas) continuam livres e contam para o limite de 3 apps abertos.
- O limite antigo de 6 janelas (fileiras traseiras) foi substituído pelo arco de 3 — o atlas continua com folga (6 slots).

## Testes

- `tests/arc.test.mjs` (novo, 4 testes): capacidade 3, ângulos centrados/simétricos/limitados, círculo de raio constante, LRU.
- `PhoneXrHandsTest.briefMissCanKeepOnlyTheSilhouetteNeverTheClick` atualizado para a retenção de 500 ms.
- Suite node completa: **21/21** (inclui os 4 testes nativos de conversão/rotação).
- Validação on-device (flicker, FPS, arco) continua exigindo celular real — `adb logcat -s NextVR-Perf`.

## 2026-10-09 (3ª rodada) — polimento do caminho da mão no thread GL

Revisão de alocações por frame no `PhoneXrHandRenderer` (thread GL, por olho, por mão):
- `ring3d` alocava um `FloatArray(720)` **por anel por olho por frame** (~700 KB/s a 60 fps com 2 mãos) — agora preenche um buffer membro reutilizado.
- O feixe (`drawBeam`) alocava ~30 arrays pequenos por frame enquanto clica (2× `across()` por segmento × 10 segmentos + quad por segmento + `FloatBuilder` por forma) — agora reutiliza `beamShape` (com `reset()`), `acrossA/B` e `quad`.
- O laço de mãos alocava um `FloatArray(3)` + um `floatArrayOf(7)` por mão por olho + uma lista no lookup de `targets` — agora preenche `beamEnd`/`beamLine` no lugar e faz lookup sem alocação.

Resultado: mesmo output visual (mesmos floats, mesmos draw calls), zero alocação nova por frame no caminho do cursor/raio/anel — menos pressão de GC no thread que desenha os olhos VR, reforçando o fix de flicker sob carga (abrir janela flutuante).

---

# 2026-10-09 (4ª rodada) — mão suave com app aberto (predição temporal) + teclado deitado estilo Meta Quest

## "Pisca/trava quando um app está aberto" — causa raiz provável e correção

Com um app aberto, o WebView do app e o **landmarker de mãos (delegate GPU)** disputam o mesmo
GPU: a inferência encarece, a taxa de detecção cai e a mão **passa a atualizar na taxa de
tracking em vez da taxa do display** — o olho percebe como piscar/travar. A correção é a mesma
que o Quest usa para mãos: **predição temporal das posições até a taxa do display**.

- `PhoneXrHands.Frame` agora carrega `previous` (a detecção anterior) e expõe `predicted(nowNs)`:
  extrapola a última detecção ao longo da própria velocidade, **no máximo um intervalo de
  tracking** (`MAX_PREDICT_GAP_NS = 250 ms`). No instante da detecção mostra a detecção exata
  (zero latência adicionada); gestos (pinch/fist) vêm sempre da detecção mais nova e nunca são
  extrapolados; vão longos (mão sumiu e voltou) não extrapolam — a mão reaparece exatamente onde
  foi detectada. Resultado cacheado por bucket de 2 ms (1 cálculo por frame de render, não por olho).
- `PhoneXrHandRenderer`: malha do silhuete e feixe/cursor usam `predicted(now)`; validade
  (`isFresh`) e retenção do silhuete continuam no frame real — nada de ray/press com dados stale.
- Interação (pinch, toque near-contact, JSON para o web) continua 100% no frame real — a
  suavidade é só de apresentação, a precisão de clique não muda.

## Teclado deitado igual Meta Quest

- `windows.js`/`comfort.js`: pitch do teclado de `.5` (em pé, reclinado) para `-π/2 + .35`
  (deitado como mesa, inclinado só o necessário na direção do usuário); centro mais baixo
  (drop .38→.5 nativo, .58→.68 web). A rotação agora é reaplicada a cada frame em `placeKb`,
  então o teclado acompanha o yaw da dock após recenter/summon (antes a rotação ficava presa no
  yaw da criação). Hit plane acompanha (mesma rotação), então digitação por raio não muda.
- Teste no CI (Chromium): o painel do teclado no atlas precisa ter a base local +Y apontando
  para -Z (deitado), identificado pelo sinal de `matrix[9]`.

## Multitarefa em arco (até 3 apps)

Já entregue na 2ª rodada (`web/src/arc.js`, `ARC_CAPACITY=3`, LRU auto-close com toast pt/en/es,
fileira curva única) — cobertura: 21/21 node + 4 testes de arco dedicados.

## Testes desta rodada

- `PhoneXrHandsTest`: +4 testes (extrapolação da velocidade limitada a 1 intervalo, gestos da
  detecção mais nova, sem extrapolação em vão longo, encadeamento do `previous` + `reset()`).
- `reference-ui.test.mjs`: +asserção de teclado deitado (verificada no CI com Chromium).
- Suite node local: 21/21 (reference-ui faz self-skip sem Chromium; roda no CI).

---

# Integração das duas frentes (PR #9 no main + PR #7 desta branch)

Esta branch foi reintegrada sobre o main após o merge do PR #9 (outra frente de hand tracking).
O código final é a UNIÃO das duas:

- **Do PR #9 (main):** `LatestFrameSlot` (mailbox de 1 slot — o tracker drena o frame mais novo
  assim que fica livre, sem ser quantizado ao callback da câmera), `TrackingFrame` com
  `captureNs`/`acquiredNs` (clock `SENSOR_INFO_TIMESTAMP_SOURCE`), `PerfLog` completo
  (capture_to_landmark, acquire_to_landmark, dropped, cpu_pct, memória), `RescueMerger`
  (250 ms, cobertura, tampo de 2 mãos, tamanho de frame) e `FusionHands` com rescue em thread
  próprio + intervalo mínimo de 33 ms.
- **Desta branch (PR #7):** conversão YUV→ARGB nativa **com rotação fuseada** (1 passada,
  1,74× mais rápida que a referência scalar, rotação de 90° sem custo extra — substitui a
  rotação Java pós-conversão do PR #9), `HandPresentation` com retenção de 500 ms,
  `PhoneXrHandRenderer` com throttle da malha + zero alocação por frame no feixe/anel +
  **predição temporal** das posições da mão até a taxa do display, expiração web de 1 s,
  multitarefa em arco (até 3 apps, LRU), teclado deitado estilo Meta Quest, job CI
  `publish-apk` (APK no branch `apk-dist`).
- **Resolução de sobreposição:** `PerfLog.java`, `RescueMerger.kt`, `RescueMergerTest.kt` e
  `FusionHands.kt` ficaram com a versão do main (superset); o `NextVrActivity` kept o script
  de hand-frame pré-serializado na thread de tracking (JSON fora do thread principal) + o
  `PerfLog.published` do main; o `PassthroughCamera` é a união: mailbox/drain do PR #9 +
  conversão nativa fuseada com rotação desta branch.

# 2026-10-10 — janela de idioma visível mas não respondia à mão (PhoneXR)

## Sintoma

A janela de boas-vindas (idioma, a ~0,42 m) aparecia, mas o toque com a mão não escolhia nenhum idioma. Em alguns alcances havia um "toque preso" (DOWN sem UP) e, em outros, nenhum evento era enviado.

## Causa raiz (código de `web/src/windows.js`, handler `phonehands`)

1. **O caminho de proximidade bloqueava o raio em toda a faixa.** Qualquer dedo com `d` em (−0,12; 0,15) m de um vidro consumia a mão e definia `blockFar`. Na janela de idioma (0,42 m), a faixa 0,27–0,54 m cobria a região em que o usuário aponta; o raio distante, que é o que escolhe o idioma, era bloqueado.
2. **`previousD = 1` causava DOWN/UP travado.** Ao entrar na zona por trás do vidro, `previousD` começava em 1, então `d ≤ 0,012` disparava DOWN imediatamente. O UP exige `d ≥ 0,035` à frente do vidro, então um dedo que começava atrás nunca soltava o toque.
3. **Pinça segurada após o UP reiniciava o toque.** O mesmo pinch ainda ativo era reconvertido em raio no mesmo ponto.
4. **Os testes não cobriam o caminho.** `reference-ui.test.mjs` envia `head: null`, então o caminho de proximidade nunca rodava nos testes automatizados.

## Tentativas anteriores e por que falharam

- PR #4, #5, #7 (ver tabela acima): trataram latência e predição da mão. Não alteraram a seleção por toque, então a janela de idioma continuou sem resposta.
- PR #10 (`arena/72f414c5-nextvr-android`): mudou o onboarding (dock oculto, `finishLanguage` restaura a UI) e ajustou histerese, mas manteve `previousD = 1`, a regra DOWN em `d ≤ 0,012`, `blockFar` durante a zona e o posicionamento de 0,42 m. Medido com o harness em `/tmp/repro` (assets do PR): a 0,52 m e 0,45 m o toque ficava preso em DOWN sem selecionar; a 0,36 m não havia evento; só o raio distante (0,60 m e 0,30 m) selecionava.

## Correção

- `previousD` começa em `best.d` na entrada da zona; um dedo que já está atrás ou dentro da faixa não gera toque.
- DOWN só ocorre numa travessia real da frente para o vidro (`previousD > .012`). Antes disso, um toque de raio em andamento é cancelado (`pinchcancel`), para o toque direto assumir.
- `blockFar` e `consumed` são definidos apenas enquanto há um toque ativo (`n.down`). Pairar sobre a janela não bloqueia mais o raio.
- UP ao soltar (`d ≥ .035` ou fora da janela). Se a pinça continuar após o UP, a mão entra em `pinchSuppressed` até a pinça abrir, sem reiniciar o toque.
- O anel de `handTargets` direto só é desenhado quando `nearContact.down`; ao pairar, aparece o anel do raio distante.

## Testes

- `tests/language-hand-input.test.mjs` (Chromium, pula se o Chromium não existir): envia `head` com 63 floats pelo bridge `nextvrHands`, em cinco cenários: raio distante (0,60 m) seleciona; pairar na faixa com pinça (0,36 m) usa o raio; começar atrás do vidro não gera toque e o raio continua funcionando depois; empurrar através do vidro seleciona; após soltar com pinça ainda ativa, há um único UP e nenhum DOWN novo.
- Verificado contra o bundle de HEAD (antes da correção): falham os cenários "pairar na faixa" e "começar atrás do vidro" (toque preso/bloqueado). O cenário de pinça após UP também falha (reinício `0` após `1`). Com a correção, todos passam.
- Limite: testes automatizados usam um mock do `NativeXR` no Chromium; não validam o `WebSurface`/`handTouch` real do Android nem a pose física da mão. Ver a lista de validação em dispositivo no PR.

# 2026-10-10 — Follow-up: slow tracking, missed pinch edges, and held UI presses

## Root cause

The current `PinchLatch` is sample-driven, not time-debounced: the first completed landmark result above the open threshold (`.48` palm widths) returns `pinching=false`. Slow inference therefore delays the release until that result arrives; it does not, by itself, keep a pinch latched. A pinch shorter than the interval between analyzed images can still be unobserved, because no UI code can reconstruct a gesture that MediaPipe never sampled. `LatestFrameSlot` intentionally replaces old camera images to bound latency, so increasing a queue of camera frames would only make interactions older.

The deterministic state-loss bug was after inference, in the main-thread publication path. `NextVrActivity.hands()` serialized every result but stored it in a single `pendingHandsScript`; while `handsPending` was true, each newer result overwrote the prior one. A detected `pinching=true` or `false` transition could consequently disappear before the WebView evaluated it. If DOWN was lost, a short click became a hover; if UP was lost after a previously delivered DOWN, the WebView kept receiving held-state MOVE events until tracking expired or was cancelled. This is why changing pinch thresholds or making the silhouette predict more smoothly did not cure the click.

A second queue amplified the delay: `Bridge.handTouch()` posted every display-rate `ACTION_MOVE` independently to the Android main thread, while the shell also posted browser synchronization work on repeated atlas frames. An UP/CANCEL could sit behind obsolete pointer moves and no-op syncs. These are UI transport/frame-synchronization problems, not evidence that a particular phone's tracking FPS is low; no device performance log was available for this investigation.

After the first APK, the user reported that the cursor and hover highlight appeared but pinch selection still failed. Review exposed an additional gap the browser mock could not test: `WebSurface.dispatchHandEvent()` built MotionEvents using the short `MotionEvent.obtain()` overload, which leaves pointer source/tool identity unspecified. The CI shim bypasses Android MotionEvent/WebView dispatch entirely. The hand bridge now supplies a one-finger `TOOL_TYPE_FINGER`/`SOURCE_TOUCHSCREEN` event so Chromium receives a normal touch stream. This source describes the synthesized event only; there is still no physical touchscreen listener or input fallback. The exact on-device cause remains to be confirmed on hardware.

## Earlier attempts reviewed

- PRs #4, #5 and #7 concentrated on detector/FPS cost, camera conversion, prediction and tracking throughput. Those changes help pose freshness, but they did not preserve a recognized DOWN/UP edge once the UI publisher coalesced frames.
- Commit `05436f7` temporarily added gaze dwell as a first-run escape hatch. Commit `c451930` subsequently removed dwell, viewer-trigger and touchscreen routes. The current native UI remains hand-only; Cardboard head pose updates the rendered view but is not an activation source.
- The merged `82fdd5a` fix corrected near-contact hit blocking and the `previousD=1` stuck-DOWN case. That covered a separate direct-touch geometry bug but left the latest-only native hand-script slot and display-rate Android MOVE posts unchanged.
- The longer stale-frame retention/prediction work in the still-open PR #10 is presentation/performance work. It cannot create an unobserved pinch edge or recover an overwritten release, and retaining a down state longer is not a click fix.

## Fix

- Add a bounded `HandFrameMailbox`: keep pinch/fist/hand-presence edges in order, retain every tracking sample while an index tip is in the same `.7 m` near-reach band used by the UI (plus the exit sample), and coalesce only safe pose-only snapshots. If the bounded queue overflows, publish an explicit neutral reset and only the newest state rather than replaying stale presses.
- Publish frames in batches on the UI thread without overwriting transitions. Frames older than their native validity are converted to an empty-hand reset, so a delayed queue can cancel but cannot create a stale click.
- Add an ordered Android hand-touch queue: DOWN/UP/CANCEL are preserved, while adjacent MOVE events for the same surface collapse to their newest coordinates. Repeated identical browser-spec synchronization no longer adds idle work to the main queue.
- Construct native WebView input as a complete single-finger touch event (`TOOL_TYPE_FINGER`, `SOURCE_TOUCHSCREEN`) instead of leaving source/tool identity unknown. The event is still emitted exclusively by PhoneXR hand gestures; no physical touch route is wired.
- Make the web pinch path an explicit `hovering → pressing → holding → releasing` state machine. A hand loss/ownership change cancels; it never becomes an accidental click. There is no time-based press/release debounce, so the first observed open sample releases immediately.
- When direct near contact leaves its valid band while the pinch is still closed, release the contact and suppress that same pinch until it opens instead of starting a second FAR press. Bound `Frame.previous` to the one prior sample actually needed for prediction, avoiding a session-long chain of landmark frames.
- Keep native UI activation exclusive to PhoneXR hand input. No gaze dwell, head-directed selection, viewer trigger, or physical touchscreen route is reintroduced.

## Verification

- `HandFrameMailboxTest` covers preserved DOWN/UP/repress order, safe pose coalescing, all near-touch trajectory samples, overflow reset and stop/reset ordering.
- `HandTouchEventQueueTest` verifies MOVE coalescing cannot merge or reorder DOWN, UP or CANCEL.
- `hand-input-state.test.mjs` checks hover, press, hold, release, ownership change, tracking loss and slow samples. Language UI regressions include a 5 Hz pinch, near-band hover, direct-touch exit while still pinched, and the existing behind-glass/release cases.
- `PhoneXrHandsTest` verifies release on the first observed open sample and one-sample-bounded prediction history.
- Local result in the Arena container: `npm run build:ui` and `git diff --check` succeeded; `npm test` reported 33 passed and 8 explicitly skipped. The skipped browser tests could not launch Chromium because `libnspr4.so` is absent. Node syntax checks passed. Android/JVM tests were not run locally because Java/Gradle/Android SDK are not installed.
- CI for PR #12 then ran the complete Node suite with Chromium (41/41 passed, no skips), all 48 Android JVM unit tests (0 skipped/failures/errors), `:nextvr-android:assembleDebug`, and native-library verification for both `armeabi-v7a` and `arm64-v8a`; all passed. The debug APK was published by the workflow.
- These are source/unit/browser-harness checks. They do **not** establish device-level tracking FPS, physical-hand accuracy, or WebView touch behavior on a phone; those remain to be checked on hardware.
---

# 2026-10-09 (5ª rodada) — fim do piscar com app aberto, silhueta 60 Hz e teclado Meta Quest completo

## Bug persistente: a mão ainda piscava com um app aberto

A 4ª rodada havia adicionado predição temporal e retenção de 500 ms, mas dois caminhos ainda
apagavam a mão sob carga (app aberto = WebView + landmarker disputando GPU/CPU):

1. **Frame stale apagava o silhuete** (`HandPresentation.silhouette`): quando o detector
   atrasava mais de `validForNs`, o MESMO objeto `Frame` continua sendo desenhado a cada frame
   de display — mas `!isFresh` zerava `lastVisible` e retornava `null`. Com gaps de detecção
   > 500 ms (GPU ocupada pelo app), a mão apagava e reaparecia a cada resultado: o piscar.
   **Corrigido:** a retenção agora cobre entregas stale E resultados vazios (700 ms base,
   nunca menos que a validade do próprio frame — rastreador lento de ~1 s mantém a janela
   dele). A mão **esvanece** no fim da retenção (`fade`, últimos 200 ms) em vez de sumir de
   uma vez. Perda real de mão ainda some em até 700 ms; clique/fist nunca são retidos.
2. **Cursor/raio sumiam no mesmo limiar** (`PhoneXrHandRenderer.draw`): o `return` em
   `!isFresh` apagava o drop/anel junto. **Corrigido:** drop e anel são desenhados a partir do
   frame retido/preditivo (com fade), mas `down` (linha do raio, press) só vem de tracking
   **live** — sem clique fantasma durante stalls.

## Suavidade: silhueta segue a predição na taxa do display

O epsilon de reconstrução da malha (~2 px) deixava a silhueta atualizar em degraus de 10–20 Hz
enquanto o cursor ia a 60 Hz. **Corrigido:** a tesselação passou a reescrever **builders
poolados in place** (zero alocação por reconstrução; o `toFloatArray()` por passada saiu do
caminho) com epsilon sub-pixel (~0.4 px). Mão em movimento reconstrói a cada frame de display a
partir da pose `predicted(now)` — silhueta desliza junto do cursor; mão parada (dead zone do
One Euro) reutiliza os mesmos buffers. Sem a pressão de GC do caminho antigo de alocar
centenas de KB por frame.

## Piscar do ponteiro perto de janelas (FAR ⇄ NEAR)

Com um app aberto à frente, a mão em repouso cruza o limiar de profundidade do near-touch
(15/20 cm) por ruído e o ponteiro alternava entre o raio FAR e o indicador NEAR — outro
piscar observado. **Corrigido:** histerese ampla (entra a ≤ 11 cm, sai só a > 26 cm; margem
2 cm → 8 cm) + retenção de 240 ms na saída da zona (o contato direto continua por um instante
em vez de alternar). O outline de grab da janela (`phone-grab-hover`) também ficou adesivo
(350 ms) para não piscar a borda da janela com o ruído da palma.

## Teclado Meta Quest completo (além do deitado da 4ª rodada)

Layout substituído pelo estilo Meta Quest (o deitado `-π/2 + 0.35` foi mantido — o teste do CI
continua exigindo `matrix[6] < 0`):

- Fileira de números `1..0` + backspace largo; `qwertyuiop`; `asdfghjklç` + enter claro
  (tecla de ação); `⇧` + `zxcvbnm,.`; fileira inferior com idioma, emoji, espaço largo,
  ditado e fechar.
- Shift estilo Quest: um toque = maiúscula de um só caractere; dois toques = trava; três =
  solta. Rótulos acompanham o estado.
- 47 teclas (o teste do CI exige > 30); painel mais escuro, teclas arredondadas maiores
  (88 px), enter claro como no Quest; emoji cicla 8 emojis; ditado mostra aviso localizado
  (pt/en/es).

## Testes desta rodada

- `PhoneXrHandsTest`: `briefMiss...`/`stalledResult...` ajustados para a retenção de 700 ms e
  agora cobrem o frame stale (regressão do bug de piscar); +2 testes (fade no fim da retenção;
  retenção acompanha a validade de um rastreador lento de 1 s).
- Suite node: **30/30** (inclui o boot completo do HTML no Chromium com o novo teclado e o
  teclado deitado verificado no atlas).
- APK: build no CI (`assembleDebug` + testes JVM) e publicação no branch `apk-dist` pelo job
  `publish-apk`; validação física continua em aparelho real (`adb logcat -s NextVR-Perf`).

---

# 2026-10-09 (6ª rodada) — onboarding de idioma estilo Meta + cursor predito no shell

## Primeira execução: só a janelinha de idioma (como no Meta)

Antes a dock já existia por baixo da janela de idioma — apareciam duas superfícies e a mão
podia acertar a dock antes de escolher a língua. Agora o boot sem idioma escolhido:

- `setDockVisible(false)` **antes** de `languageWindow()`: a dock sai do atlas (nenhum painel,
  nenhum pixel) e sai do hit-test da mão. Esconder o `CSS3DObject` não basta — o `Raycaster`
  do three.js ignora `object.visible`, então `dockTest()` e a lista de `handTargets` têm gate
  explícito (`if (dockVisible)`), e `dockArmed` é zerado ao esconder.
- O chrome de status (`#stat`: mãos/giro/fps, ainda sem tradução) fica `hidden` durante o
  onboarding — na tela resta apenas a janelinha de idioma sobre o passthrough.
- `finishLanguage()` → `setLang(lang)`, `close(langWin)`, `setDockVisible(true)`, `#stat` de
  volta, `#perm` visível e giroscópio/mãos iniciados **do próprio gesto** do botão (com
  `recenter()` 280 ms depois). A dock é reconstruída por `on('lang', makeDock)` sem perder a
  visibilidade (`buildDock` não toca `dockObj.visible`).
- Multitarefa em arco intocada: `ARC_CAPACITY = 3` + LRU continuam valendo depois da escolha.

Com a dock escondida, a ordem dos painéis não-overlay muda (o `dockObj` é adicionado no escopo
do módulo, antes de qualquer janela): o teste de boot passou a ler `panels.filter(p=>!p.overlay)[0]`
e a contar 2 painéis no boot (janela de idioma + HUD), voltando a afirmar os 12 botões da dock
depois da seleção de idioma.

## Mão mais fluida: predição do cursor no shell (mesmo princípio do `Frame.predicted()`)

A silhueta nativa já deslizava na taxa do display (5ª rodada), mas o **cursor do shell** ainda
andava em degraus de ~30 Hz: arrastar/redimensionar janela e a ponta do raio/anel só mudavam
quando um frame de tracking novo chegava ao WebView.

- `hands.js`: `updateCursorVelocity(point, now)` mantém a velocidade do cursor com low-pass
  (.45) e `predictedCursor(now)` extrapola **apenas para apresentação** — teto de 250 ms,
  1.6 u/s e .06 por eixo, sempre limitado à tela. Velocidade zera com mão parada/nova, após
  lacuna > .3 s e em `cancel()`. Como o One Euro nativo tem zona morta, mirar parado ⇒
  velocidade ~0 ⇒ nenhuma predição (o comportamento "pinch parado é seleção, não arrasto"
  continua intacto).
- `windows.js`: `dragTo`/`resizeTo` e o cálculo do alvo do raio/anel usam `predictedCursor(now)`;
  `nativePress` (input no DOM) e todo `hitAt` de decisão de gesto continuam na detecção real —
  posição predita nunca vira clique nem evento de página.
- Cadência dos `handTargets` 33 ms → 16 ms: o anel acompanha a predição na taxa do display.

## Menos contenção com app aberto (a cena parada não cruza mais a ponte)

Com uma janela de app aberta, o shell reenviava a cena JSON (até 24 painéis × 16 doubles) 30×/s
mesmo com tudo parado, e o lado nativo decodificava isso **e postava um `syncBrowsers` no thread
principal** a cada envio — concorrência direta com o script de mão (`shell.evaluate`) e com o
WebView. Duas camadas de cache:

- `atlas.js`: `scene`/`specs` só cruzam `NativeXR.frame()` quando mudam em relação ao último
  envio (cena estabilizada é bit-idêntica: o lerp converge no piso do float32). `invalidate()`
  força o reenvio completo.
- `NextVrActivity.Bridge.frame`: mesma comparação no lado nativo, com o cache descartado quando
  a instância do `SpatialRenderer` muda (superfície recriada) — um renderer novo sempre recebe
  decode completo e sync de browsers. `cachedSpecs` só é gravado depois do parse bem-sucedido.
- `window.nextvrResume` chama `css3d.invalidate?.()`: shell retomado/recriado recebe a cena
  inteira de novo, mesmo que nada tenha se movido.

## Testes desta rodada

- `reference-ui`: boot afirma dock ausente dos painéis e do DOM + `#stat` oculto; após escolher
  o idioma afirma a volta da dock com os 12 botões de antes, `.win-shell` zerado (a janelinha
  fechou junto com a escolha) e `#stat` visível.
- Suite node: **30/30**. APK novamente pelo CI (`assembleDebug` + testes JVM) e `apk-dist`.

# Investigação do hand tracking (NextVR Android)

## Conclusão desta rodada

- **Modelo: mantido MediaPipe.** Handtrack.js não substitui o MediaPipe nos gestos do app (ver "Avaliação de modelos"). Não há medição de eficiência que justifique a troca.
- **Causa medida do teto de ~15–30 Hz:** a admissão do tracker acontecia só dentro do callback da câmera. Se uma inferência passava de ~33 ms, o resultado seguinte esperava o próximo frame, e a taxa cai em degraus (30 → 15 → 10 Hz). A simulação determinística reproduz exatamente isso (ver "Simulação").
- **Correção aplicada:** a câmera publica sempre o frame mais novo em um slot de tamanho 1 (`LatestFrameSlot`); o thread de tracking o consome assim que está livre. Nada enfileira; frames substituídos são liberados e contados como `dropped`.
- **Rescue (resgate de mão por YOLO) saiu do thread de tracking:** antes ele rodava de forma síncrona (~20 ms no host por ocorrência). Agora roda em thread próprio, uma tarefa por vez, com intervalo mínimo de 33 ms, e o resultado é fundido só se tiver até 250 ms (`RescueMerger.MAX_AGE_MS`).
- **Medição separada:** `NextVR-Perf` (logcat) reporta FPS de câmera e render (FPS do app), FPS efetivo do tracking, latência de inferência, captura→landmark (quando o sensor usa relógio REALTIME), acquire→landmark, publicação no WebView, frames descartados, CPU e memória.
- **Leitura pontual recebida do headset (18/10/2026):** `tracking 2 fps · cam 54 · infer 382ms · CPU · slots 2`. Uma mão só no quadro, e mesmo assim `slots 2` — o grafo de duas slots em **todos** os quadros. A câmera não é o gargalo (54 fps); o modelo é.
- **Causa raiz dessa leitura (medida no código, não no aparelho):** o probe que procura a segunda mão era contado em **tempo de câmera** (`stamp - lastSearchMs >= 250 ms`). Mas a câmera continua produzindo quadros enquanto o tracker está ocupado: em um aparelho lento, dois quadros **processados** consecutivos distam um inference inteiro no relógio da câmera — muito além de qualquer intervalo de probe. O probe disparava então em **todo** quadro, o grafo de duas slots pagava o imposto de 2,47x em cada quadro, e a trilha rápida de uma slot **nunca rodava**. A leitura `slots 2` com uma mão no quadro é exatamente essa degeneração.
- **Correção aplicada:** o probe passou a exigir **os dois** limites — um mínimo de quadros processados (`PROBE_FRAMES = 4`) **e** o intervalo de tempo de câmera (`PROBE_MS = 250 ms`). O limite de quadros é o que importa para o split (mantém a fatia de duas slots limitada em qualquer aparelho); o limite de tempo é o que mantém a segunda mão encontrável em um quarto de segundo num aparelho rápido. O intervalo efetivo é o **maior** dos dois.
- **Efeito previsto (simulação com os números do próprio aparelho: 382 ms no grafo de duas slots, 155 ms no de uma):** de 100% para 25% de quadros no grafo de duas slots; inference médio 382 → 212 ms; 2,6 → 4,7 atualizações por segundo; a mão acompanha o movimento ~170 ms antes.
- **Delegate GPU:** permanece **desligado** (`MAX_GPU_ATTEMPTS = 0`). O PR #29 mediu o delegate GPU em 500 ms/quadro neste aparelho, contra 85–100 ms da CPU — a GPU é mais lenta aqui, e a tentativa só custaria um quadro. O watchdog (`DelegateWatch`) e o caminho de queda para CPU continuam no código para quando essa medição mudar.
- **Ainda não medido no aparelho:** o FPS/latência/jitter depois da correção; a latência de gesto ponta a ponta (com câmera filmada); a estabilidade em sessões longas. Consulte `tools/perf/README.md`.

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

---

# 2026-10-10 (7ª rodada) — "o feed e a dock são instantâneos, a mão não": custo por slot de mão

## Sintoma

Depois da 6ª rodada, com o shell e a pass-through já estáveis, a queixa mudou de lado: o vídeo da
câmera e a dock respondem na hora, mas o tracking da mão continua lento (cursor arrastado, toque que
precisa ser "segurado" para contar). Isso é um diagnóstico, não só uma queixa: as três coisas saem do
mesmo sensor e do mesmo thread da câmera. Se dois caminhos estão fluidos e o terceiro não, o gargalo é
o que **só** o terceiro caminho faz — não a câmera, não o display, não o WebView em repouso.

## Como foi medido nesta rodada (sandbox, sem aparelho)

Sem adb nem SDK aqui, a medição foi feita em três camadas, cada uma atingível de novo por qualquer
pessoa que for revisar:

| Camada | Ferramenta | O que entrega |
|---|---|---|
| custo de pixel do caminho da câmera | `/tmp` benchmark C++ (`-O2 -march=native`) replicando `camera_pixels.cc` passo a passo, e `tests/camera-pixels.test.mjs` | ms por frame de cada etapa da conversão, isolada |
| custo do MediaPipe por configuração | `tools/bench/hand_input_policy_bench.py` (matriz `numHands` × largura de análise × nº de mãos na cena), com o `taskset -c 0` do `hand_host_bench.py` | mediana de 3 × 40 frames por célula, em um único core |
| cadeia inteira | `tools/bench/pipeline_sim.py` (novo) — eventos discretos de câmera → tracking → WebView, com `LatestFrameSlot`, `HandSlotPolicy`, resgate, mailbox e orçamento de dreno reais (o `SlotPolicy` do simulador é espelho fiel de `HandSlotPolicy.kt`) | qual alavanca muda `track`, latência e frames velhos |

**Todos os números abaixo são de host (x86-64, 2 cores), não FPS de celular.** Eles valem como razão e
proporção — "o segundo slot custa 2,4× a mais", "reamos 13 ms só para preparar a frame do tracker" —
e a confirmação no aparelho é o `adb logcat -s NextVR-Perf`, que agora imprime os campos novos
(`cam_work`, `handoff`, `slots`, `narrow`, `wide`, `probe`, `stale`, `coalesced`, `recovery_skips`).

## Medição A — o thread da câmera paga 18 ms/frame, e ~70% disso é só para o tracker

Geometria real do caminho: sensor 1280×720 → upright 720×1280 → cópia de análise
`largura × (largura·1280/720)`.

| Etapa (1 frame, host) | ms |
|---|---|
| `nativeYuvToArgb` com rotação 90° (scatter) | 5,018 |
| mesma conversão sem rotação (flat) | 2,567 |
| `Bitmap.createBitmap(int[])` para o display | 0,267 |
| reamostragem bilinear escalar para 640×1138 (análise) | 12,680 |
| **total hoje** | **17,965** |

Duas conclusões práticas:

- A reamostragem existe **só** para o tracker; o display usa a cópia grande. Um kernel fundido
  YUV→análise (sem passar pelo `int[]` grande) mede 5,20 ms em 640, 3,58 em 512, 2,60 em 448,
  2,14 em 384, 1,43 em 320 — ou seja, o trabalho da câmera poderia cair de ~18 para ~9 ms. Foi
  **rejeitado** nesta rodada: é código JNI novo (assinatura `nativeYuvToArgb` precisa continuar
  intacta para o teste `camera-pixels`), e o Skia já faz o resize vetorizado dentro de
  `createScaledBitmap`, então o ganho real no aparelho é incerto. Fica registrado como próximo passo.
- Variações de rotação medidas (150 reps): scatter 3,458 ms, tiled16 6,542, tiled32 6,236,
  flat+transpose32 10,312. O scatter atual já é o melhor dos quatro — não há vitória barata aí.

E o mais importante da medição A: **esse custo não é só latência, é admissão.** O `Image` fica preso a
1 dos 2 buffers do `ImageReader` durante os ~18 ms, e o `requestTracking()`/`close()` só acontecem no
fim. Uma câmera que entrega 30 frames/s com 18 ms de trabalho por frame no mesmo thread é uma câmera
que oscila entre 30 e 15 Hz, e o `track` herda a oscilação.

## Medição B — o imposto do segundo slot (a maior vitória da rodada)

`hand_input_policy_bench.py`, medianas (host, 1 core, CPU delegate, 640 px):

| configuração | mean (ms) | p95 (ms) |
|---|---|---|
| `numHands=1`, uma mão na cena | 11,8 | 14,3 |
| `numHands=2`, uma mão na cena | 29,1 | 35,7 |
| `numHands=1`, nenhuma mão | 17,6 | — |
| `numHands=2`, nenhuma mão | 15,5 | — |
| `numHands=1`, 640 vs 320 px | 12,28 vs 12,12 | — |

Uma mão levantada — o caso usado em 90% do tempo — custa **2,47×** mais porque `numHands=2` faz o
segmentador/ROI do detector trabalhar duas slots mesmo quando a segunda está vazia. O grafo atual era
`numHands=2` sempre. Ou seja: o `track` fica preso no teto do modelo (~34 Hz de teto no host contra
~80 Hz com uma slot), e com cauda pior (p95 35,7 vs 14,3) — "lento" e "travando" ao mesmo tempo.

Também está aí por que reduzir a resolução **não** é a resposta: a 12,28 ms vs 12,12 ms, o custo do
`LANDMARK` por mão detectada é dominante, não o número de pixels. E a medição C abaixo mostra que a
largura não compra recall.

## Medição C — recall não depende da largura de análise

Mãos ocupando de 18% a 65% da altura do frame: recall 1,00 em todas as larguras de 1280 até 320 px.
Diminuir a análise é seguro para *não perder* a mão, e inútil para *ganhar* taxa. É por isso que o
degrau de 640/512/448 em `TrackingBudget` foi mantido como remédio de emergência (protege o aparelho
de um modelo que ficou lento) e não como política de taxa.

## Medição D — o resgate competindo com o primário

Com YOLO + resgate rodando junto, a inferência primária medida foi de média 28,4 / p95 36 ms para
**33,5 / 46 ms** (+28% na cauda). O resgate roda em `THREAD_PRIORITY_MIN`, mas "prioridade baixa" não
devolve o core nem a largura de banda de memória. Somado ao fato de o `RescueMerger` estar liberado a
cada ~33 ms enquanto nada está perdido, isso é contenção paga no caminho crítico. Por isso o
`RecoveryBudget` agora tem um portão de carga (abaixo), e o resgate do `FusionHands` virou
`numHands=1` — em `runRescue` o resultado é `firstOrNull()`, então pagar a segunda slot ali era
imposto puro.

## Modelo E — a cadeia inteira, antes e depois

`python3 tools/bench/pipeline_sim.py` (custos acima como parâmetros; "antes" = `numHands=2`, resgate
sempre, hand-off bloqueante, dreno sem limite):

| cenário | variante | track | inferência | latência med/p95 | idade no display | stale | por dreno | narrow |
|---|---|---|---|---|---|---|---|---|
| uma mão, UI parada | antes | 25,9 Hz | 31,7 ms | 34,8 / 40,0 | 56,8 ms | 0 | 1,00 | 0% |
| uma mão, UI parada | depois | 25,9 Hz | 16,1 ms | 17,5 / 34,8 | 41,2 ms | 0 | 1,00 | 75% |
| uma mão, GPU ×2 + UI 2× | antes | **17,0 Hz** | 58,2 ms | 78,2 / 95,6 | 109,7 ms | 0 | 1,00 (drop 532) | 0% |
| uma mão, GPU ×2 + UI 2× | depois | **25,9 Hz** | 32,2 ms | 34,6 / 63,9 | 63,6 ms | 0 | 1,00 (drop 0) | 75% |
| uma mão, câmera 60 fps | antes | 33,4 Hz | 29,1 ms | 43,0 / 51,1 | 57,5 ms | 0 | 1,00 (drop 728) | 0% |
| uma mão, câmera 60 fps | depois | 45,5 Hz | 14,3 ms | 17,5 / 34,8 | 32,0 ms | 0 | 1,00 (drop 0) | 86% |
| travada 900 ms a cada 5 s | antes | 25,9 Hz | 31,7 ms | 34,8 / 40,0 | 56,8 ms | **121** | 1,19 | 0% |
| travada 900 ms a cada 5 s | depois | 25,9 Hz | 16,1 ms | 17,5 / 34,8 | 41,2 ms | **0** | 1,01 | 75% |
| duas mãos / procurando mão | — | idêntico | idêntico | idêntico | idêntico | — | — | 0% |

As três leituras que importam:

1. **Com uma mão levantada, o modelo "depois" nunca é mais caro que o "antes"** e é ~1,98× mais barato
   por frame em média (29,1 → 14,7 ms/frame medidos no `logic_check.py`, mesma conta que o
   `hand_input_policy_bench.py` faz). Com duas mãos ou procurando mão, o resultado é bit-idêntico: a
   política só age onde há algo a economizar.
2. O ganho maior aparece **quando há contenção** (GPU/threads disputados): 17,0 → 25,9 Hz e 532 frames
   descartados indo a zero, porque o thread da câmera deixa de esperar o caminho do display.
3. `stale` é o número da *queixa do toque*: com o WebView travando 900 ms a cada 5 s, o dreno sem
   limite reavaliava 121 frames que já tinham perdido a validade nativa — cada um deles é um toque em
   curso virando cancelamento. O orçamento de dreno corta isso a zero sem perder nenhum edge.

## Diagnóstico (as sete causas, com a medição correspondente)

| # | Causa | Evidência | Status |
|---|---|---|---|
| 1 | `numHands=2` sempre: imposto de 2,47× em todo frame de uma mão | medição B | **corrigido** (`HandSlotPolicy`) |
| 2 | ~18 ms de pixel no thread da câmera por frame, segurando 1 de 2 buffers | medição A | parcialmente (hand-off fora do lock, medição nova); fusão YUV→análise fica registrada como próximo passo |
| 3 | `CameraTexture.offer()` e `update()` no mesmo monitor **com `texSubImage2D` dentro**: a câmera espera o upload da textura | código + o `handoff=` do log | **corrigido** (upload fora do monitor; só o ponteiro é trocado sob lock) |
| 4 | resgate a cada ~33 ms + `urgentUntil=now+1500` tempestade, em `THREAD_PRIORITY_MIN` que ainda disputa ciclo | medição D | **corrigido** (resgate só com `landmarks().isEmpty()`, `numHands=1`, portão de carga no `RecoveryBudget`) |
| 5 | `TrackingBudget` com limiar de 85 ms que nunca disparava (o `infer_mean` real é 28-45 ms) e descida de resolução inútil para taxa | medições B/C | **reajustado** (orçamento 50 ms, alívio 26 ms, 6 frames de pressão, 90 de alívio, EWMA re-semeado no degrau) |
| 6 | delegate GPU escolhido uma vez; a volta ao CPU só acontecia por exceção | código | **corrigido** (`DelegateWatch`: média **e** amostra atual acima do orçamento por N resultados consecutivos) |
| 7 | `Frame.json()` alocando no thread de tracking + `drainHandFrames` reavaliando tudo sem limite | código + linha `stale`/`replayed` | **corrigido** (StringBuilder sem `org.json`; colapso de poses substituídas no mailbox) |

Um item deixado **de propósito**: `FusionHands.track()` ancora `handsEnabled=false` em qualquer
exceção, encerrando o tracking da sessão. É frágil, mas muda comportamento de falha e precisa de
aparelho para validar; não entra em uma rodada de desempenho.
(Corrigido depois, na rodada de 2026-10-10 no fim deste documento — o sítio é
`PassthroughCamera.track()`, não `FusionHands`; a queda agora exige 5 falhas consecutivas e a
validação on-device continua pendente.)

## Correções desta rodada

- **`HandSlotPolicy.kt` (novo)** — a máquina de estados das slots: WIDE (procura as duas) enquanto não
  há nada garantido; NARROW (uma mão) quando um frame WIDE viu exatamente uma mão; volta para WIDE no
  frame seguinte se a mão sumiu ou se aparecerem duas. Uma recheckagem (`probe`) a cada 150 ms para não
  perder a segunda mão para sempre. O relógio do probe **não** é re-ancorado por um próprio probe — sem
  isso, cada probe empurraria o próximo um frame para frente e a cadência esticaria sozinha.
- **`FusionHands.kt`** — dois landmarkers `VIDEO` (WIDE `numHands=2`, NARROW `numHands=1`), o ativo
  decidido por `slotsFor()`. Cada grafo mantém seu próprio histórico de ROI, então o frame seguinte a uma
  troca é um frame de detecção (barato), o que torna o probe de 150 ms suficiente. Resgate só quando
  `base.landmarks().isEmpty() && lastInferenceMs <= 45`, agora com `numHands=1`.
- **`RecoveryBudget.kt`** — `shouldRun(now, hands, busy, primaryMs)`: se a inferência primária já está
  acima do orçamento de carga (40 ms), a rodada é adiada (`lastStart += interval/2`) e contada em
  `suppressed`. Não é um `dutyInterval` maior: isso sobreviveria à carga e travaria a recuperação
  seguinte.
- **`DelegateWatch.java` (novo)** — dispara a troca GPU→CPU só quando a **média EWMA e a amostra
  atual** passam do orçamento por `patience` resultados consecutivos. Com a média sozinha, um frame
  rápido depois de três lentos ainda deixa a média alta e o disparo acontecia no meio da recuperação.
- **`PassthroughCamera.java`** — publica a frame de análise e `requestTracking()` **antes** do hand-off
  para o display (o tracker não espera mais o bitmap), mede `cameraWork`/`cameraHandoff`, reporta
  `handSlots`/`recovery_skips`, e recria o `FusionHands` no delegate alternativo quando o `DelegateWatch`
  dispara (`preferGpu` é limpo no abandono para uma rebuild que falhou no CPU não ficar girando a cada
  30 frames).
- **`SpatialRenderer.java`** — `CameraTexture.update()` faz o `texSubImage2D`/`glTexImage2D` **fora** do
  monitor; sob lock só troca o ponteiro/`latestVersion`. A câmera deixa de blockar atrás do upload.
- **`PhoneXrHands.kt`** — `Frame.json()` serializa com `StringBuilder` (sem `org.json`, sem boxing de
  63 floats em `Double`), emitindo `null` para NaN/Inf em vez de `JSONObject.NULL`.
- **`HandFrameMailbox.java`** — `collapseToDrainBudget()`: num dreno acima de 8 frames, cada corrida de
  estado de gesto idêntico é reduzida às últimas 2 amostras (a cauda de trajetória que o `HandMovement`
  precisa). **Edges nunca são descartados** — a primeira versão do corte, que simplesmente aparava o
  começo da fila, comia DOWN de pinque tremendo. `Batch.coalesced()` saiu do caminho; `lastCoalesced()`
  (morto) foi removido.
- **`PerfLog.java`** — `cam_work`/`cam_work_max`, `handoff`/`handoff_max`, `slots`/`narrow`/`wide`/`probe`,
  `replayed`/`stale`/`coalesced`, `rescue_found`, `recovery_skips` na mesma linha de ~3 s. O
  `handSlots` recebe **deltas** do chamador (o landmarker conta desde que os grafos foram criados, e
  eles são recriados numa troca de delegate), então as colunas `narrow`/`wide`/`probe` são contagens da
  janela como todas as outras; um contador que diminuiu é tratado como recomeço.
- **`NextVrActivity.drainHandFrames()`** — conta quantos frames do lote já perderam a validade e reporta
  em `handDrain(frames, stale, coalesced)`.

## Rejeitado depois de medir (registrado para não refazer)

| Ideia | Por que não |
|---|---|
| fundir YUV→análise em um kernel só | 12,68 ms de reamostragem escalar no host é pior que o `createScaledBitmap` vetorizado do Skia; só ganha se eliminar o `int[]` grande, o que mexe no JNI validado por `tests/camera-pixels.test.mjs`. Fica como próximo passo com medição própria |
| reusar o `int[]` no bitmap do display / `AndroidBitmap_lockPixels` | 0,267 ms medidos. Não é o gargalo |
| descer `TrackingBudget` mais cedo/agressivo para ganhar taxa | medição C: custo por mão detectada domina o de pixels; 640→320 muda 0,16 ms |
| fixar `CONTROL_AE_TARGET_FPS_RANGE` em 60 | empurraria 3,6 MB de upload para 60/s (~216 MB/s) e arriscaria o feed fluido que já funciona. Candidato a teste em aparelho, não a padrão |
| `numHands=2` no resgate | `runRescue` usa `firstOrNull()`: pagaria o imposto de 2,4× exatamente no caminho de recuperação |
| coalescer o dreno cortando pelo começo da fila | descartava edges reais de pinque (testado no espelho Python) |

## Testes desta rodada

- `HandSlotPolicyTest` (novo, 7 casos): procurando mão = sempre WIDE; uma mão entra em NARROW e não paga
  mais a segunda slot; o probe sai no intervalo e não estica a cadência; perder a mão volta para WIDE no
  frame seguinte; duas mãos ficam WIDE sem oscilar; contadores de narrow/wide/probe; `reset()` volta ao
  estado inicial.
- `DelegateWatchTest` (novo, 5 casos): pico isolado não é tendência; carga sustentada dispara e trava;
  uma sequência rápida zera a paciência; `reset()` limpa a média; orçamento inválido rejeitado.
- `TrackingBudgetTest` reescrito com o novo degrau (640/512/448, pressão 50, alívio 26, 6 frames de
  pressão para descer, alívio por tempo ~90 frames para subir, EWMA re-semeado).
- `RecoveryBudgetTest` ganhou o caso do portão de carga (2 suprimidas, adiamento dentro da janela, volta
  quando o primário tem folga) e mantém os dois casos antigos intactos.
- `HandFrameMailboxTest` ganhou dois casos: um backlog de pose colapsa para a cauda (8 frames enfileirados
  viram os 2 últimos, `coalesced=6`; o teste usa `collapseAbove=4` só para exercitar o caminho curto) e
  oito edges de pinque alternados passam **todos**, sem colapso (`coalesced=0` — o orçamento custa poses
  substituídas, nunca um edge). Os cinco casos anteriores continuam bit-idênticos: drenam ≤8 frames,
  abaixo do limiar padrão de colapso.
- `logic_check.py` (sandbox) espelha `TrackingBudget`, `DelegateWatch`, `HandSlotPolicy`,
  `RecoveryBudget` e o colapso do mailbox, roda as mesmas asserções dos testes JVM e mais a cadência de
  30 fps (`[1,1,1,1,1,2,1]`, um probe por 150 ms; `narrowFrames=9, wideFrames=2, probes=1` em 10 frames)
  — todas passando. Custo médio por frame 29,1 → 14,7 ms (1,98×).
- `python3 tools/perf/summarize_logcat.py --self-test` cobre os campos novos (e afirma que nenhuma
  métrica declarada chega como `n/a`). Suite node: **33 pass, 0 fail, 8 puladas** (as puladas pedem
  Chromium, ausente aqui). `javalang` parseia os 15 `.java` de `src/main`+`src/test`.
- Não dava para rodar aqui (sem JDK/SDK no sandbox): `gradle :nextvr-android:testDebugUnitTest` e
  `assembleDebug`. O CI rodou: **12 classes JVM, 69 testes, 0 falhas, 0 skips** (`HandSlotPolicyTest`
  7, `DelegateWatchTest` 5, `TrackingBudgetTest` 5, `HandFrameMailboxTest` 7, `RecoveryBudgetTest` 3,
  `PhoneXrHandsTest` 19, e as demais intactas), `assembleDebug`, a checagem de que
  `Java_com_nextvr_app_PassthroughCamera_nativeYuvToArgb` continua presente nos dois ABIs, e o
  APK publicado em `apk-dist`.
- Um erro dessa rodada que só o CI pegou: adicionar um 5º parâmetro com default no construtor de
  `FusionHands` quebrou as 5 chamadas Java de 4 argumentos (default Kotlin é invisível para Java sem
  `@JvmOverloads`). Corrigido com `class FusionHands @JvmOverloads constructor(...)`. Lição para as
  próximas rodadas: **a assinatura pública de um construtor/`@JvmStatic` consumido por Java precisa de
  `@JvmOverloads`** — e o `compileDebugKotlin` passa mesmo assim, então o erro só aparece no javac.

## Riscos desta rodada

- Todo `clearHands()` (pausa, retomada, troca de delegate, destroy) chama `resetSlots()` no thread de
  tracking — o mesmo thread dono do landmarker: a retomada volta a procurar as duas mãos antes de
  decidir de novo. Sem isso, a decisão NARROW ficaria ancorada em timestamps que já envelheceram.
- Na primeira mão levantada da sessão, o WIDE→NARROW troca de grafo no frame seguinte: um frame de
  detecção (não-rastreamento), potencialmente mais caro e sem suavização de ROI. É 1 frame por transição
  e o `HandMovement`/`OneEuro` já amortece; o log `narrow=`/`wide=` mostra se a máquina estiver
  oscilando (oscilação = `wide` ≈ `narrow` em contagem, o que não deve acontecer com uma mão estável).
- Duas landmarkers `VIDEO` criadas na inicialização custa o dobro de `createFromOptions` uma vez, antes
  de qualquer mão aparecer — uma travadinha no boot, não durante o uso.
- Com NARROW ativo o grafo **não vê** a segunda mão por até 150 ms; o resgate está condicionado a
  `landmarks().isEmpty()`, então a segunda mão que entra em cena depende do probe, não do resgate. Se o
  probe de 150 ms se mostrar lento demais no aparelho, o ajuste é o `DEFAULT_PROBE_MS`, não o
  `numHands` fixo.
- Colapso do dreno só atua acima de 8 frames; um backlog que não é *pose-idêntico* (pinque tremendo) é
  reavaliado inteiro, como antes — o limite duro continua sendo o overflow de 96 frames → reset neutro.
- O `DelegateWatch` troca de delegate uma vez e não volta (o `preferGpu` fica limpo até reabrir a
  câmera). É intencional: girar GPU↔CPU a cada janela de carga seria pior que o problema.

---

# 2026-10-10 — Measured configuration validation, redundant-work removal, loss/jitter instrumentation

This round did NOT start from a symptom; it started from the open questions the previous rounds
left ("não medido ainda", "exige dispositivo"). Every configuration constant the pipeline carries
was re-derived from measurements on the shipped model, and the two places where the code still did
work nobody consumes were removed or instrumented. What follows is the evidence, the decisions it
supported, and what deliberately did not change.

## Method

- Host: 2 vCPU x86_64, no GPU. Python MediaPipe Tasks **0.10.35** - the same runtime version the
  Android AAR (`com.google.mediapipe:tasks-vision:0.10.35`) ships - so graph behaviour, thresholds
  and modes match the app. CPU delegate; on a machine without libGL the Tasks C library is loaded
  through no-op GL/EGL stubs (`tools/bench/mk_gl_stubs.sh`), which is safe because the CPU delegate
  never calls GL.
- Input: five stock hand photos, normalised by `hand_confidence_sweep.py:load_hands` (BGR→RGB and
  fingers-up orientation). Two bench bugs were found and fixed on the way: skin fed as BGR is blue
  skin and the palm detector finds nothing, and a landscape photo pasted with the app's upright
  rotation comes out sideways - both silently produced "no hand" scenes.
- Geometry is the app's own: 1280x720 sensor, upright 720x1280, analysis width 640 (portrait
  640x1138), camera period 33 ms.
- Caveat carried in every table: this shared host's absolute milliseconds drift ±20 % between runs
  of the *same* configuration. Ratios (narrow/wide), frame counts (ghost/acquire/recall) and the
  noise characterisation are the robust results; absolute ms are a rank, not a phone number.
  Device confirmation remains `adb logcat -s NextVR-Perf` (see the checklist at the end).

## 1. Baseline reproduction (`tools/bench/hand_host_bench.py`)

| Case | This host | Previous round's host |
|---|---|---|
| Palm search, no hand, VIDEO wide | 15.7 ms | ~17 ms |
| One hand tracked, VIDEO wide | 27.4 ms | ~29 ms |
| Two hands tracked, VIDEO wide | 23.3 ms | ~21 ms |
| Rescue landmarker, IMAGE, 224 px crop | 23.4 ms (p95 42) | ~20 ms (p95 ~30) |
| YOLO11n-pose, 1 / 2 threads | 33.3 / 18.1 ms | ~26 / ~14.5 ms |

Same shape, same ranks: cost is in the models and in how many hand slots run, not in input size.

## 2. Configuration sweep (`tools/bench/hand_confidence_sweep.py`, new)

One configuration per row; behaviour counted in 33 ms frames. "blur" = blurred-hand frames still
tracked (flicker source), "ghost" = frames reporting a hand AFTER the hand left (phantom cursor),
"acq" = frames until a hand entering the scene is detected, "small" = recall of a hand 12 % of
frame height (the distance limit), "false" = detections on empty frames, "search"/"track1" = mean
cost of the palm-search branch / of tracking one hand.

| Configuration | track1 ms | blur | ghost | acq | small | false | search ms |
|---|---|---|---|---|---|---|---|
| **current: det/pres .45, track .35, 2 slots** | 32.3 | 20/20 | 0 | 1 | 12/12 | 0 | 16.9 |
| track .20 | 33.0 | 20/20 | 0 | 1 | 12/12 | 0 | 17.2 |
| track .50 (MediaPipe default) | 32.4 | 20/20 | 0 | 1 | 12/12 | 0 | 18.2 |
| track .65 | 32.2 | 20/20 | 0 | 1 | 12/12 | 0 | 17.7 |
| det/pres .30 | 30.2 | 20/20 | 0 | 1 | 12/12 | 0 | 25.5 |
| det/pres .60 | 39.6 | 20/20 | 0 | 1 | 12/12 | 0 | 20.9 |
| **num_hands 1 (the NARROW graph)** | 15.2 | 20/20 | 0 | 1 | 11/12 | 0 | 17.1 |

Decisions, each from a row above:

- **`minHandDetectionConfidence` / `minHandPresenceConfidence` stay .45.** Lowering to .30 makes
  the palm-search branch ~50 % slower (more candidates survive into the landmark stage) and buys
  zero recall; raising to .60 makes tracked frames ~20 % slower and buys zero precision (false
  positives are 0 at every threshold, on this scene set). .45 is the measured knee.
- **`minTrackingConfidence` stays .35.** 0.20–0.65 is indistinguishable in cost AND in behaviour
  (blur retention 20/20, ghost 0, acquire 1 frame everywhere): the presence model, not this
  threshold, decides the degraded-hand case here. .35 is the conservative end for holding the ROI
  through blur, so it stays; the MediaPipe default of .5 buys nothing.
- **No ghost hands at any threshold**: a phantom cursor is not one of this pipeline's failure
  modes; presence gating could not be blamed for stale clicks.
- **The slot policy's premise re-confirmed on this runtime**: tracking one hand costs 2.1–2.3x less
  with `numHands=1` (15.2–16.7 ms vs 32.3–38.6 ms), while palm search costs the same either way
  (16.9 vs 17.1) - exactly the asymmetry `HandSlotPolicy` exploits. Unchanged.
- **Running modes.** VIDEO (ROI reused between detections) is the app's mode. IMAGE re-runs the
  palm detector every frame and only looked cheaper (38.2 vs 42.8 ms) because detection happens to
  bill one hand while the two-slot VIDEO graph bills both - the very waste the slot policy removes.
  LIVE_STREAM submits in 0.9 ms but delivers results on a listener thread and silently drops inputs
  under backpressure: the same keep-only-latest semantics `LatestFrameSlot` already gives, minus
  the app's control over GPU→CPU fallback, retry bitmap ownership, slot policy and instrumentation,
  and with no measured cost win. **Synchronous VIDEO on the tracking thread stays.**
- **Lighter models: evaluated, not adopted.** The shipped bundle is `hand_detector.tflite` (2.34 MB
  palm detector) + `hand_landmarks_detector.tflite` (5.48 MB landmarks+handedness) - the Tasks
  "full" variant; Google publishes no lighter Tasks bundle, and the legacy `hand_landmark_lite`
  tflite has a different signature (the Tasks graph expects the handedness outputs), so repacking
  it would be an unsupported model, unverifiable on device. The supported cost lever is slots,
  measured above at 2.1–2.3x and already adaptive. (Handtrack.js was rejected in an earlier round
  for lacking landmarks entirely.)
- **Frame formats: no cheaper supported path.** One fused YUV→ARGB pass with the rotation baked in
  feeds both the display bitmap and the analysis copy; `BitmapImageBuilder` needs ARGB_8888 for
  SRGB input, and the analysis resample is Skia's NEON bilinear (measured faster than a scalar
  native resample in an earlier round). `MpImageInput.takeOwnership` already avoids the
  per-inference pixel copy. Nothing redundant left in the conversion chain.

## 3. Temporal filter validation (`tools/bench/one_euro_sweep.py`, new)

Measured landmark noise of the tracking branch at 640 px: **static rms step 0.277 px** (per
landmark std 0.177 px), **moving residual 1.828 px** around a known translation. The sweep ports
`HandGestures.OneEuro` (dead zone included) and scores candidates on rest jitter, slow-drift
tremor, lag during a 300 ms / 192 px swipe, settling error 150 ms after the swipe, and 90 % rise:

| Candidate (landmark x/y) | rest jitter px | drift tremor px | swipe lag px | settle px | rise frames |
|---|---|---|---|---|---|
| **current 1.4 / beta 12 / dz .0008** | 0.041 | 1.154 | 10.19 | 0.53 | 9 |
| no dead zone | 0.063 | 1.168 | 9.68 | 0.66 | 9 |
| minCutoff 0.8 / beta 10 | 0.041 | 1.124 | 12.02 | 0.56 | 9 |
| minCutoff 2.0 / beta 14 | 0.041 | 1.185 | 8.86 | 0.48 | 9 |
| beta 6 | 0.041 | 1.118 | 15.12 | 1.40 | 9 |
| beta 20 | 0.041 | 1.191 | 7.38 | 0.41 | 9 |

- The current configuration cuts rest jitter 6.8x below the measured input noise (0.277 → 0.041 px,
  sub-perceptual at any display scale) while reaching 90 % of a swipe inside the swipe's own
  duration and settling to 0.53 px within 150 ms. The dead zone earns its place (0.041 vs 0.063).
- Beta is the only real lever left: 20 trades +3 % drift tremor and more sensitivity to unmodelled
  occlusion outliers for ~3 px less swipe lag; 6 costs 5 px of lag for nothing. **12 stays** - the
  knee of the measured frontier.
- Rate independence, the reason the filters are stamped with the camera capture time: the same
  trajectory at 15/30/60 Hz rises in 333/300/283 **ms** (constant in time, not in frames) with rest
  jitter 0.058/0.041/0.029 px. A sliding-window average would add latency proportional to its
  window and was not considered further.

## 4. Redundant work removed: `AnalysisGate`

While an inference outruns the camera period - the saturated case, i.e. precisely a low-end device
or a phone with an app open - every Camera2 callback used to rescale the frame and allocate a
~2.9 MB ARGB analysis bitmap that superseded an unread one (`dropped` in the perf log): work and
GC churn on the thread whose cost is the ceiling of the tracking rate, for pixels no inference ever
sees. `AnalysisGate` skips producing the copy while the slot already holds a pending frame younger
than 40 ms of CAMERA time (sensor stamps, not elapsedRealtime - epochs may differ); `LatestFrameSlot.peek()`
exposes the pending frame without taking it. When the tracker keeps up, the slot is empty at every
callback and the gate never fires: the healthy path is bit-identical to before.

`tools/bench/pipeline_sim.py` gained the policy as a variant (`--skip-scale-gate-ms`), 60 s, 30 fps:

| Device surrogate (wide/narrow ms) | variant | track | p95 | shown | dropped | skips |
|---|---|---|---|---|---|---|
| low-end 90/45 | after (today) | 16.4 Hz | 122.4 | 110.2 | 571 | 0 |
| low-end 90/45 | after + gate | 16.5 Hz | 126.9 | 118.3 | 163 | 411 |
| mid 45/22 | both | 25.9 Hz | 50.7 | 54.5 | 0 | 0 |
| powerful 20/9 | both | 25.9 Hz | 25.7 | 36.8 | 0 | 0 |

The gate converts 411 wasted resamples+allocations into skips at the saturated end, for +4.5 ms
p95 and +8 ms shown age (the pending frame can be one camera period older); mid and powerful
devices never fire it. `PerfLog` reports `skips` next to `dropped` so a device run shows which side
of the trade the phone is on. Unit-tested (`AnalysisGateTest`, plus a `peek` test in
`LatestFrameSlotTest`).

## 5. Smooth re-acquisition: filter-state grace (`PhoneXrHands.STATE_GRACE_NS`)

Dropping a hand's One Euro state on the first empty result (`states.keys.retainAll(present)`)
meant a hand that blinked out for one or two inferences - an occlusion, a missed palm detection -
reappeared with RESET filters: the first sample shown raw, a visible snap. States now survive
750 ms of absence (capture-clock), so a brief dropout resumes filtering from where it stopped and
the adaptive cutoff converges to the new position: a correction, not a jump. Beyond the window the
state is still dropped, so a hand returning after seconds is never dragged from a stale position.
Pinch behaviour is untouched: the latch still releases on the first observed open sample
(`aSlowlySampledOpenPinchReleasesOnItsFirstObservedOpenFrame` and
`missingHandResetsNativeFiltersAndLatch` still pass), and two new tests pin both sides of the grace
window (`PhoneXrHandsTest`).

## 6. Loss vs slowness, and the prediction contract, instrumented

"Tracking loss" had two possible meanings in the log and neither was measured. `PerfLog.result`
now takes the merged hand count and separates them:

- **real loss** (the detector saw the frame and found no hand after a frame that had one):
  `loss` events and `empty_ms` spent in lost-hand runs - excludes the initial palm search;
- **slow or skipping tracker** (results late or shed, hand intact): `gap_max` and `track_jitter`
  (stddev of result intervals) - rate stability independent of rate.

`tools/perf/summarize_logcat.py` and `tools/perf/README.md` carry the new fields (self-test
updated). With these, a device session can attribute a bad window to the detector, the scheduler
or the camera thread (`cam_work`) without guessing.

The hand-loss prediction contract, restated against the code that implements it: velocity
extrapolation (`Frame.predicted`) is capped at one tracking interval and is presentation-only -
pinch/fist and every click source read the newest real detection; `HandPresentation`'s retention
plus fade is the time-based confidence decay of the displayed pose (full while trustworthy,
fading over the last 200 ms, gone at the end of validity); a predicted pose can never trigger a
click or pinch, and a reappearing hand is shown where it was detected, never extrapolated across
the gap (`MAX_PREDICT_GAP_NS`). This round's grace window makes the *filter* side of that
reappearance smooth without touching any of those guarantees.

## 7. Deliberately unchanged

Model bundle and delegate policy (`DelegateWatch` judges the GPU on measured cost, one-way);
thresholds (.45/.45/.35, rows above); slot policy and its 150 ms probe (premise re-measured);
pinch hysteresis .30/.48; silhouette retention/fade; latest-slot admission; WebView mailbox and
touch queue; One Euro constants (frontier measured). Every change above is either a removal of
work nobody consumes or an addition of measurement, except the grace window, which fixes a
visible snap and is pinned by tests on both sides.

## 8. Device validation checklist (powerful vs low-end, before/after APK)

Same scene, light and hand distance; ≥15 min per session; `adb logcat -d -v time -s NextVR-Perf >
session.log`, then `python3 tools/perf/summarize_logcat.py session.log`. Compare, per device class:

| Question | Fields | Expected with this round's changes |
|---|---|---|
| Is the tracker or the camera the ceiling? | `track` vs `camera`, `cam_work`, `infer_mean` | unchanged relation; `cam_work` lower when saturated |
| Wasted camera-thread work | `dropped` vs `skips` | saturated: `skips` > 0 and `dropped` ≈ 0 (was all `dropped`); healthy: both 0 |
| Real tracking losses | `loss`, `empty_ms` | isolated events on occlusion/exit; not a steady drip |
| Slow/skipping tracker | `gap_max`, `track_jitter` | `gap_max` ≲ 2× mean interval; jitter ≲ 20 % of it |
| Slot policy paying off | `slots`, `narrow`/`wide`/`probe` | one hand: `slots` ≈ 1.0–1.2, `narrow` ≫ `wide` |
| UI keeping up | `replayed`, `stale`, `coalesced` | `replayed` ≈ 1.0, `stale` = 0 |
| Cost of the pipeline | `cpu_pct`, `native_mb`, `java_mb` | no upward drift over the session |
| Gesture responsiveness | filmed hand+screen, finger move → visual click | unchanged vs the previous APK (no debounce added anywhere) |
| Landmark jitter at rest | film a still hand / watch the cursor | rest jitter measured ≤0.05 px @640 on host; device must show a still cursor |

Host numbers in this section rank options and justify the constants; the table above is what
confirms them on hardware, per device class. Nothing here claims an on-device FPS gain without
those logs.

# 2026-10-10 — Clique vs arrasto, arrasto de janela estável, suavização sem drift e ponte temporal com confiança

Rodada pedida pelo usuário, com quatro problemas reportados no uso real: (1) em sites como YouTube a
pinça só arrasta — não dá para clicar sem arrastar por acidente; (2) o arrasto de janela puxa a
janela de um lado para o outro em vez de mover suave; (3) a suavização "deriva" até o próximo
frame; (4) em aparelhos mais antigos/lentos a mão pisca e perde continuidade quando a inferência
demora.

## Causas-raiz encontradas (código real)

1. **Clique virava arrasto:** `pinchdown` despachava touch-DOWN para o WebView no mesmo frame do
   fechamento da pinça e, a cada frame de tracking, repassava MOVE à página sempre que o cursor se
   mexia — tremor de mão já era um "arrasto" para o YouTube (scrub/seleção), e o clique nunca
   existia.
2. **Arrasto de janela oscilava:** `dragTo` rederivava a posição a cada frame perseguindo
   `w.obj.position` em 65 % por amostra (`stabilizeWindowPosition`) — uma referência defasada por
   construção — enquanto o cursor de entrada era extrapulado por uma velocidade medida nos
   intervalos de ENTREGA no WebView (que zerava em rajadas de dreno e explodia com jitter de
   entrega). Perseguição + overshoot = puxar de um lado para o outro.
3. **Suavização com drift:** `HandGestures.OneEuro` calculava a derivada de `(raw − filtrado)` em
   vez do sinal bruto — o cutoff adaptativo dependia da taxa de frames (mesma velocidade da mão
   era filtrada mais forte num tracker lento) e o erro de seguimento inflava a velocidade estimada,
   que era exatamente o "deriva até o próximo frame esticar e corrigir". Além disso, a distância de
   pinça vinha de landmarks FILTRADOS (borda de pinça atrasada/abrasada pelo filtro).
4. **Piscar/perda de continuidade:** um resultado vazio do MediaPipe era publicado cru → o web
   executava `cancel()` no mesmo frame (cursor e clique morriam); `states` era apagado em qualquer
   miss → os filtros reiniciavam e a mão SNAPAVA na reaquisição; `Frame.predicted` media velocidade
   pelo relógio de CONCLUSÃO da inferência (que varia com a latência do aparelho) e se recusava a
   prever exatamente quando o tracking é lento (teto de 250 ms).

## O que mudou

### Clique vs arrasto (`hand-input.js` `ClickDragArbiter`, `hands.js`, `windows.js`)

- O DOWN de conteúdo (página/app) não é mais enviado no fechamento da pinça: fica `pendingPress`.
- Janela curta de decisão (150 ms) + deslocamento medido a partir da âncora da pinça, em px
  lógicos: `dragOnPx=18` (igual a `dragActivationPx`) classifica DRAG, com `sustainSamples=2`
  contra um único amostra ruidosa; `dragOffPx=8` é o limiar de saída — histerese de dois limiares
  impede alternância instável, e o estado DRAG é definitivo (nunca volta a clique no meio).
- Clique = uma **tap limpa** no ponto de soltura: DOWN e UP nas MESMAS coordenadas, sem MOVEs — o
  Chromium sintetiza click e nunca drag. Soltura dentro da janela de decisão também é tap.
- DRAG = DOWN na âncora da pinça, depois o fluxo de MOVEs segue a mão (scrub do timeline etc.).
- Classificação usa só detecções reais; predições do modelo de movimento jamais classificam gesto.

### Arrasto de janela com âncora estável (`window-geometry.js` `stepDragDelta`, `windows.js`)

- No instante em que o arrasto realmente ativa (limiar de 18 px), congela-se a âncora
  `{hit, center}` no espaço do mundo; cada atualização é `centro_âncora + delta_relativo` — a
  posição nunca é rederivada de uma referência defasada, então o mesmo delta devolve sempre a
  mesma posição (sem realimentação nem acúmulo de erro).
- `stepDragDelta` (puro, testado): deltas acumulados ≤ 6 mm não movem (sem tremor em repouso, mas
  acumulam — arrasto muito lento nunca trava); um frame nunca move mais que 14 cm (escudo contra
  frame ruim); em movimento o delta é aplicado por inteiro — zero lag adicional (antes: 65 % por
  amostra = banda elástica).
- Velocidade do cursor agora é medida na linha do tempo de CAPTURA (`timestampNs`), com low-pass
  mais forte, piso de repouso (mão parada = sem extrapolação) e sem zerar em rajadas de dreno.

### Suavização (`HandGestures.OneEuro`)

- Reescrito na formulação clássica de Casiez: a derivada vem do sinal BRUTO — o cutoff adaptativo
  agora segue a velocidade real da mão (forte em repouso, quase sem lag em movimento rápido), é
  independente da taxa de frames e converge para a medição (nenhum erro posicional acumula).
- Zona morta com histerese mantida (tremor zero em repouso). Timestamps fora de ordem são
  ignorados em vez de reordenar o filtro.
- Medidas de gesto (distância de pinça 2D) passam a vir do landmark BRUTO (o gap métrico 3D já era
  bruto): a suavização nunca atrasa nem abrasa uma borda de pinça; pinch/fist/click/drag não são
  afetados pelo filtro.

### Ponte temporal com confiança (`PhoneXrHands`, `PhoneXrHandRenderer`, `hands.js`)

- Modelo de movimento leve por mão (velocidade EMA no timeline de captura): uma mão que falta no
  resultado é PUBLICADA como predição (`predicted:true`, `confidence` decaindo a 0 em 600 ms),
  em vez de sumir. Flags de gesto são COPIADAS da última detecção — uma predição segura um
  pinch/fist que realmente começou, mas nunca INICIA um.
- O web ignora predições na máquina de gestos: o clique segurado atravessa o gap, e perda real
  (horizonte vencido → frame vazio) **cancela** — nunca completa um clique. No GL, `down` exige
  detecção viva; o silhueta/feixe desaparece com fade pela confiança (decaimento gradual).
- Reaquisição suave: o estado dos filtros sobrevive a misses curtos (1,5 s) — o One Euro converge
  de volta sozinho, sem snap; após perda prolongada o estado é descartado e a volta começa fresca.
- Velocidade de `Frame.predicted` (extrapolação até a taxa do display) passa a usar intervalos de
  CAPTURA (não de conclusão), teto de gap elevado para 600 ms (trackers lentos ganham predição
  exatamente onde precisam), e a cadeia `previous` continua só com detecções reais — erros de
  predição não se compõem.
- Tempo de evento do toque sintético estritamente ordenado (`WebSurface`): um tap rápido (DOWN+UP
  no mesmo milissegundo) nunca vira duração zero para o detector de gestos do Chromium.

## Validação

- Node: 48 testes (40 passando, 8 do Chromium pulados neste ambiente — rodam no CI). Novos:
  7 do `ClickDragArbiter` (janela de decisão, limiares com histerese, sustain, promoção
  clique→drag, tap rápido, id de mão alheio) e a reescrita do teste de `stepDragDelta` (âncora
  estável, sem lag, zona morta acumulativa, teto por frame).
- JVM/Robolectric (CI): `PhoneXrHandsTest` reescrito para o novo contrato — ponte de predição que
  segura e nunca inicia gesto, continuação de velocidade com decaimento de confiança, horizonte de
  perda, reaquisição sem snap, descarte de estado após perda prolongada, cadeia `previous` intacta.
  Os testes de validade/extrapolação existentes permanecem (o clamp de 1 intervalo de display
  ficou).
- **Não compilado neste ambiente** (sem JDK/Gradle): `compileDebugKotlin`/`assembleDebug` e os
  testes JVM confirmam no CI do PR. Validação on-device (YouTube: clique vs scrub; arrasto de
  janela; piscar em aparelho lento) continua exigindo telefone real.

# 2026-10-10 — Robustez do tracking: pinça fantasma, mão duplicada e falha isolada que encerrava a sessão

## Causas encontradas (código real)

- **Pinça fantasma numa detecção colapsada (`HandGestures`)**: o gap da pinça é uma RAZÃO pela
  largura da palma. Numa detecção degenerada (glitch do modelo devolvendo os 21 pontos no mesmo
  lugar, ou uma mão a meio pixel da câmera) a largura da palma ia a ~0 e `0/0,02 = 0` chegava ao
  latch como pinça FECHADA — um clique sem mão nenhuma atrás. `MIN_PALM = 0,008` (0,8 % da imagem)
  separa medida de ruído: abaixo disso o gap é reportado aberto (`1`). Mãos reais medem ≈0,03–0,05
  de palma mesmo no limite de detecção, então nenhum gesto real é afetado.
- **Duas mãos com o mesmo rótulo (`PhoneXrHands`)**: quando o MediaPipe rotula as duas mãos como o
  mesmo lado (mãos cruzadas ou vistas de perfil), as duas publicavam o MESMO `id` e compartilhavam o
  MESMO estado (filtro One Euro e latch): os samples de uma puxavam o filtro da outra e uma mão
  aberta podia SOLTAR a pinça que a vizinha segurava; no web, que casa `id` com press/drag, as duas
  eram indistinguíveis. O segundo rótulo duplicado agora vai para o lado livre, então cada mão
  mantém `id`, filtro e latch próprios, qualquer que seja a ordem em que o detector as reporte.
- **Alocação por frame no thread de tracking (`PalmMenuPose`)**: `eligible()` montava uma dúzia de
  `FloatArray`s (e uma lambda por landmark) por mão por frame — dentro do `Frame.json()`, que o
  thread de tracking serializa entre duas inferências — para um campo que o web só lê como booleano.
  Reescrito com escalares, sem boxing; mesmos limiares e mesma regra de sinal (diff conferido contra
  HEAD), com teste de regressão para o espelhamento por lado.
- **Qualquer exceção encerrava o tracking da sessão (`PassthroughCamera`)**: o item registrado como
  deixado de propósito na rodada de desempenho (a âncora `handsEnabled=false` em qualquer exceção,
  então atribuída a `FusionHands.track()` e que na verdade mora em `PassthroughCamera.track()`). Uma
  única falha de inferência (bitmap recusado pelo delegate, alocação transitória sob pressão de
  memória) desligava as mãos até reiniciar o app. Agora um `TrackingFailureGuard` por caminho conta
  falhas CONSECUTIVAS: uma falha é retentada no frame seguinte (~33 ms, mesma mão) e só a quinta
  seguida é queda — aí sim `handsEnabled=false`, `listener.error(...)` e `clearHands()` (frame
  vazio, que cancela press em curso, como antes). `reset()` em `enableHands(true)` e ao reabrir a
  câmera: reativar começa com a streak limpa.
- **O mesmo no callback da câmera**: um frame com falha é retentado em vez de derrubar a câmera no
  primeiro erro; cinco seguidos ainda chamam `fail(...)`.
- **`Throwable`, não `Exception`, nos dois caminhos**: um `Error` (o caso realista é um
  `OutOfMemoryError` de bitmap sob pressão de memória — o cenário que `native_mb`/`java_mb`
  instrumentam) escapava do `catch`, matava a thread do executor/looper e deixava o pipeline parado
  em SILÊNCIO: `scheduled` ficava preso em `true`, todo frame seguinte era descartado sem erro e sem
  recuperação. Agora é a mesma falha contada, retentada e, se persistente, reportada.
- **`PerfLog`**: `camera_retries`/`hand_retries` por janela (uma rajada com as mãos ainda funcionando
  é evidência de ambiente/delegate instável, não de queda); o sumarizador
  (`tools/perf/summarize_logcat.py`) ganhou as duas linhas e o `--self-test` verifica que elas são
  parseadas.

## Investigado e descartado (registrado para não refazer)

- Troca de lado da mão segurando uma pinça (`predicted=false`): NÃO é defeito. Na troca de rótulo o
  `id` muda e o `HandClickState` já CANCELA em vez de clicar ("losing/changing the hand cancels
  rather than clicks") — a direção segura. Predições nunca alimentam a máquina de gestos.

## Validação

- JVM (harness local, Kotlin puro sobre stubs — sem Android SDK): **55 testes, 55 passam, 0 falham**.
  Inclui `TrackingFailureGuardTest` (uma falha tolerada, queda só na N-ésima consecutiva, reset por
  frame bom e explícito, tolerância inválida rejeitada), as 3 novas de `PhoneXrHandsTest` (ids
  distintos e filtros independentes com rótulo duplicado; a vizinha não solta a pinça segura em
  nenhuma ordem; detecção colapsada/meio pixel nunca é pinça e a mão real no limite de detecção
  ainda mede o próprio gap) e os 2 novos de `PalmMenuPoseTest` (palma ereta de frente para os olhos;
  o espelhamento por lado julgado pela mesma regra).
- A primeira execução do harness pegou um teste errado desta rodada
  (`oneGoodFrameResetsTheTolerance` esperava tolerância infinita após o reset); corrigido, e o
  contrato ficou explícito: depois de um frame bom, a streak recomeça e são necessárias as N falhas
  consecutivas de novo.
- Node: 48 testes (40 passando, 8 do Chromium pulados neste ambiente) — sem mudança de web nesta
  rodada.
- `python3 tools/perf/summarize_logcat.py --self-test` passa com as métricas novas.
- O primeiro CI do PR pegou 9 erros de símbolo em `PassthroughCamera.java`: as DECLARAÇÕES dos dois
  guards se perderam numa edição concorrente do workspace (os usos ficaram, as declarações não).
  Corrigido e conferido símbolo a símbolo (toda chamada nova × declaração) antes do reenvio — o
  harness Kotlin não compila Java, então esse tipo de erro só aparece no CI.
- O CI também pegou (run seguinte) um override ausente de `handedness()` no helper de duas mãos de
  `PhoneXrHandsTest`: o stub do harness declarava `handedness()` como opcional, então o erro só
  existia na API real do MediaPipe. O stub foi endurecido (abstrato, como o real) para o harness
  acusar isso antes do CI.
- **Não compilado neste ambiente** (sem Android SDK/Gradle): `PassthroughCamera.java`/`PerfLog.java`
  passaram por checagem de sintaxe (tree-sitter, 0 erros) e conferência de que os 35 especificadores
  da linha de resumo batem com os 35 argumentos antes do reenvio; o CI confirmou
  `compileDebugJavaWithJavac`, os testes JVM/Robolectric (**15 classes, 93 testes, 0 falhas**), o
  `assembleDebug`, a verificação das bibliotecas nativas nos dois ABIs e a publicação do APK. Node:
  48/48 com Chromium. Validação on-device pendente: as 5 falhas seguidas para a queda, as rajadas em
  `camera_retries`/`hand_retries` e a palma colapsada continuam exigindo aparelho real.

# 2026-10-10 (8ª rodada) — A/B de motor de mãos, arco multitarefa centro-primeiro e arrasto sem ir para trás

## O que mudou

- **Motor de mãos selecionável (A/B)**: o pipeline PhoneXR (`FusionHands`: slots de 1/2 mãos +
  resgate YOLO + orçamento de recuperação) e um segundo motor deliberadamente simples
  (`DirectHands`: UM grafo VIDEO `numHands=2`, uma inferência por frame, sem slots, sem YOLO, sem
  resgate, sem trabalho de CPU em segundo plano) agora ficam atrás da mesma interface `HandEngine`.
  A escolha é em tempo de execução (Configurações → Hand tracking → Motor de mãos, chave
  `handEngine` em `nextvr.v1`, ponte `NativeXR.handEngine`), o próximo frame já usa o motor novo, e
  o log de desempenho carrega o motor na string de `delegate` (ex.: `GPU PhoneXR` / `GPU simple`)
  para separar uma janela A/B sem campo novo. Mesmo modelo, mesmas opções e mesma pós-produção
  (`PhoneXrHands`): o que muda é só o pipeline em volta, e o web não distingue os dois.
  - `HandModels` centraliza a construção do grafo; `RetryableInferenceException` virou classe
    própria para a recuperação GPU→CPU valer nos DOIS motores (antes era aninhada no `FusionHands`).
  - A troca é feita na thread de tracking, com `close()` do motor antigo ANTES da criação do novo,
    e zera slot/filtros/veredito do delegate/streak de falhas: nenhum estado do motor anterior
    sobrevive à troca.
  - O motor simples não é um "modo de teste" com mãos falsas: é o MediaPipe real, direto — serve
    para comparar com o PhoneXR no mesmo aparelho (e é a alternativa a ser promovida se o pipeline
    com resgate não se pagar). Um modo 100% sintético forjaria gestos sem câmera e não mediria nada
    do aparelho, então foi descartado nesta rodada.
- **Arco multitarefa centro-primeiro** (`arc.js`): o arco era simétrico — com duas janelas viravam
  `[-passo/2, +passo/2]`, NENHUMA no centro e as duas deslocadas; com três, `[-passo, 0, +passo]`
  com o passo antigo de "largura + 8 cm", colado. Agora o primeiro app ocupa o centro (0) e os
  seguintes alternam em volta (+passo, −passo); como o layout é por índice, fechar um app faz os
  que sobraram deslizarem para os primeiros slots — o app que estava do lado vai para o centro.
- **Folga de meia janela** (`arcStep`): o passo angular é `largura angular da maior janela × (1 +
  folga)` com folga 0,5 (meia janela entre bordas), limitado pelo yaw alcançável do workspace
  (`maxYaw − 0,06`) para a janela mais externa nunca sair de alcance — com janelas grandes e arco
  perto a folga é a que couber, e aumentar a "Distância do arco" devolve a folga completa.
- **Arrasto sem ganhar profundidade** (`clampWindowPosition` com raio fixo): o plano do cursor é
  perpendicular ao olhar DO MOMENTO DO GRAB, então uma janela fora do eixo era arrastada por um
  plano inclinado em relação à esfera e GANHAVA distância do olho — ela "ia para trás", longe da
  dock. Agora o raio do grab é capturado junto com a âncora e o clamp o fixa: mover só gira a janela
  em volta do usuário (mesma altura, mesma distância, mesmo limite de yaw). Sem o parâmetro, o
  comportamento antigo (raio do próprio ponto) é preservado para o layout e o redimensionamento.

## Validação

- Node: **50 testes, 42 passam, 0 falham, 8 pulados** (Chromium/Playwright não roda neste ambiente;
  o CI roda). Novos/atualizados: `arc.test.mjs` (centro-primeiro, alternância, passo = 1,5 janela
  com folga completa a 2 m e limitado pelo alcance perto, distância maior restaura a folga relativa)
  e `window-geometry.test.mjs` (raio fixo em todo o arrasto lateral, limites de raio e altura, e o
  caminho sem parâmetro inalterado).
- `npm run build:ui` regerado e commitado (`assets/ui/app.js`), como o CI exige.
- **Não compilado neste ambiente** (sem Android SDK/Gradle): os arquivos nativos novos
  (`HandEngine`, `HandModels`, `DirectHands`, `RetryableInferenceException`) e as mudanças de
  `FusionHands`/`PassthroughCamera` passaram por checagem de sintaxe (tree-sitter, 0 erros) e
  conferência de símbolo (todas as chamadas novas × declarações); o CI confirma com
  `compileDebugKotlin`/`compileDebugJavaWithJavac`, os testes JVM e o APK.
- Validação on-device pendente: qual motor se comporta melhor e em que faixa de FPS
  (`delegate=GPU PhoneXR` vs `GPU simple` no log), a folga do arco na visão real e o arrasto
  lateral mantendo a janela no lugar.

# 2026-10-11 (9ª rodada) — o detector do PhoneXR foi REMOVIDO e substituído por um motor próprio

## O que saiu (remoção literal)

- **Todo o pacote `com.samrat.orangehanding` foi apagado**: `FusionHands.kt` (os dois grafos de slot
  + o laço de resgate), `Yolo11Pose.kt`, `Crops.kt`, `HandSlotPolicy.kt`, `RecoveryBudget.kt`,
  `RescueMerger.kt` e o `OneEuro.kt` do fork (código morto: o filtro usado é o
  `HandGestures.OneEuro`). Com isso foram embora o thread do YOLO, o thread do resgate, a fila de
  crops e a política de slots.
- **O modelo `yolo11n-pose.tflite` (11,7 MB) e o `YOLO-AGPL-3.0.txt`** foram removidos dos assets. O
  APK deixa de distribuir um modelo Ultralytics AGPL.
- **A dependência `com.google.ai.edge.litert:litert:1.4.0` FICA.** Ela parecia ser só o interpretador
  do YOLO, e foi removida junto — o CI reprovou: sem ela o APK perde
  `libtensorflowlite_jni.so` nas duas ABIs (a verificação de bibliotecas nativas do workflow exige a
  lib), porque a LiteRT é o runtime TFLite em que o próprio `HandLandmarker` executa. Restaurada com
  um comentário no `build.gradle` dizendo exatamente isso, para a próxima pessoa não repetir a
  remoção. Nenhum modelo do Ultralytics volta por causa disso: o runtime é Apache-2.0 e genérico.
- **A telemetria que só o PhoneXR alimentava** saiu do `PerfLog` e do sumarizador: `slots`, `narrow`,
  `wide`, `probe`, `rescues`, `rescue_found`, `recovery_skips` (o `PerfLogTest` e o `--self-test` do
  `summarize_logcat.py` foram ajustados junto).
- **A UI de A/B e a ponte `NativeXR.handEngine`** foram removidas: com um motor só, não há o que
  trocar. As Configurações mostram o detector em uso, não um seletor.
- Os testes do fork (`HandSlotPolicyTest`, `RecoveryBudgetTest`, `RescueMergerTest`) saíram com as
  classes que testavam; o `MpImageInputTest` foi movido para o pacote novo, com o caso de crop
  removido e o de retry mantido.

## O que entrou

- **`com.nextvr.handtrack.HandTracker`** (novo, escrito aqui): UM grafo MediaPipe VIDEO
  `numHands=2` por frame, no thread de tracking, sem trabalho em segundo plano. O frame entrega a
  segunda mão pela própria inferência que já está rodando — sem o probe de 150 ms que a política de
  slots fazia nem o caminho barato de uma mão que ela comprava.
- **Grafo de caça (hunt)**: enquanto NADA está rastreado (6 frames sem mão ≈ 0,2 s), o mesmo modelo é
  processado com confiança de detecção menor (.25 em vez de .45), num segundo grafo. É o que
  substitui o resgate por YOLO: nenhum modelo extra, nenhum crop, nenhum thread — e a mão que o grafo
  estrito não vê (longe, borrada, de perfil na borda do quadro) volta a ser procurada com um crivo
  mais baixo. Ao primeiro resultado com mão, volta ao grafo estrito, cuja história de ROI mantém o
  rastreio.
- **`HandModels`/`MpImageInput`/`RetryableInferenceException`** foram movidos para o pacote novo (o
  `MpImageInput` e a exceção são genéricos e continuam valendo: bitmap de análise com dono único, e a
  cópia de retry que permite a volta GPU→CPU do `PassthroughCamera`).
- `PassthroughCamera` programa contra o tipo concreto: criação/recriação do detector num único
  `buildDetector()` (GPU → CPU na falha de criação, `DelegateWatch` para GPU medida lenta).
- Ferramentas de host atualizadas: `hand_host_bench.py` mede agora o grafo estrito E o de caça (em vez
  de YOLO + resgate) e não depende mais de LiteRT; `hand_input_policy_bench.py` perdeu o caso de
  contenção (não há mais worker em segundo plano); `pipeline_sim.py` ficou marcado como modelo
  histórico da era PhoneXR.
- Docs atualizados: README (motor, tabela de controles, code map, atribuição), `THIRD-PARTY.md`
  (modelo YOLO/LiteRT registrados como REMOVIDOS; detector do fork fora da lista de código
  integrado), `REFERENCE-INTEGRATION.md` (diagrama e notas) e `tools/perf/README.md` (campos que
  deixaram de existir).

## O que ficou igual, de propósito

- A pós-produção (`PhoneXrHands`, `HandGestures`, `HandPresentation`, `PalmMenuPose`) e o renderer GL
  continuam os mesmos: filtros One Euro, histerese de pinça `.30/.48`, ponte de predição, ponte de
  toque e desenho das mãos não mudam com o detector. O nome "PhoneXr" nesses arquivos é histórico —
  o que o usuário chamou de "hand do PhoneXR" (o pipeline de detecção do fork) é o que foi removido.
- O modelo `hand_landmarker.task` (MediaPipe, Apache-2.0) permanece: escrever um detector de mãos
  novo do zero, sem GPU de treino e sem dados, produziria um resultado pior com o mesmo esforço. O
  que foi escrito do zero é o MOTOR em volta dele.

## Validação

- Node: 50 testes (42 passam, 8 pulados: Chromium só no CI). `--self-test` do sumarizador passa com
  as métricas removidas; `npm run build:ui` regerado.
- Kotlin: os arquivos novos compilam com stubs de Android/MediaPipe no harness local (kotlinc 2.4.21),
  e a auditoria símbolo × declaração cobre os pontos de chamada do `PassthroughCamera`.
- **Risco assumido**: o motor novo nunca rodou em aparelho. O que ele troca está medido e escrito
  acima (sem slots adaptativos, sem resgate por YOLO); a validação on-device é a mesma checklist de
  sempre — `track`, `infer_mean`, `loss`/`empty_ms` — e a pergunta é se o grafo de caça compensa a
  perda do resgate em mãos difíceis.

# 2026-10-11 (10ª rodada) — janela sem voo, ambientes 360°, curvatura, 5 apps e a tela de idioma

Nada aqui mexe no detector (`com.nextvr.handtrack`). O que mudou é o que compete com ele por quadro.

## A janela parou de voar (e por que isso importa para o tracking)

- **A "animação feia" era o `apply()`**: cada mudança de lugar no arco (abrir, fechar, rearranjar,
  focar) fazia a janela deslizar do dock até o destino em ~meio segundo. Em cada quadro desses a
  posição mudava, a cena JSON era diferente, a ponte do atlas cruzava para o nativo e o nativo
  redesenhava — exatamente quando a mão está chegando para escolher alguma coisa, e nos mesmos
  threads que entregam o rastreamento.
- **Agora é corte seco**: `apply()` escreve a posição final direto. O arrasto com a mão já escrevia
  a posição ele mesmo, então não se perdeu nada de suavização onde ela importa.
- **O brilho de carregamento do YouTube/loja também era uma animação infinita** (`.yt-skel` com
  `animation:...infinite`): a cena mudava a cada quadro enquanto a rede respondia. O placeholder
  continua, agora estático.

## Ambientes: três panoramas 360°

- `envList()` deixou de ser só o passthrough: **sunset, night e space**, com os panoramas completos
  em `nextvr-android/src/main/assets/env/*.jpg` (3072x1536 equiretangular) e as miniaturas de
  480x240 em `assets/ui/env/*.jpg`, que é o que a lista de ambientes mostra.
- O desenho é nativo, no `SpatialRenderer`: o WebView do APK não tem WebGL, então o céu não pode vir
  do web. É uma **esfera de direções em coordenadas de olho** (o panorama fica em volta da cabeça),
  com a direção do olhar saindo da projeção do olho e voltando ao mundo pelo inverso da view — sem
  essa volta, o panorama não acompanha a cabeça.
- **A câmera continua rodando**: é dela que sai o rastreamento das mãos. O que muda é que ela deixa
  de ser desenhada, e a cópia do bitmap para a textura GL por quadro deixa de acontecer enquanto o
  céu cobre a tela (`camera.update()` só sobe quando não há panorama). O `spanX/spanY` que o web usa
  para mapear a mão na tela passou a ser calculado uma vez por quadro para os dois caminhos.
- Duas correções de campo na decodificação: o caminho nativo abria `ui/env/<id>.jpg` — a MINIATURA
  de 480x240, 8,5 px por grau esticados por toda a tela. Agora abre o panorama de 3072x1536. E o
  wrap da textura é `CLAMP_TO_EDGE`: a textura é NPOT e, em GLES2 estrito, NPOT com `REPEAT` fica
  INCOMPLETA — céu preto. (Sem mipmap também: o panorama amplia no centro, não há minificação a
  corrigir.)

## Curvatura "Tela 360°"

- Configurações → Janelas → **Curvatura 360°**, e um botão **360°** na barra de cada janela. Ligar já
  entra no máximo do controle (1,15 rad ≈ 66°), que é a curva da referência; o controle desce a
  partir daí.
- É curvatura de verdade nos dois lados, e os dois falam o mesmo número:
  - **shader** do painel: o quadrilátero virou uma faixa de 48 colunas e o vértice é dobrado pelo
    arco `z = R - sqrt(R^2 - x^2)`. Essa curva é a MESMA que o web mede: parametrizada pelo ângulo,
    `x = R sin t`, `z = R(1 - cos t)` — é a mesma circunferência vista por outra variável;
  - **hit-teste**: a malha invisível que a mão acerta é dobrada pelo mesmo arco (`bendPoint`) e o
    ponto medido volta para a coluna plana (`unbendX`) antes de virar coordenada de DOM — sem isso a
    mão acertaria fora do que está desenhado;
  - `R` sai da LARGURA DE CONTEÚDO nos dois lados (`glass[2]`), então a janela mantém a largura na
    tela e só o meio recua.
- Os quadros embutidos (vídeo do YouTube, loja, página) também vivem SOBRE o arco: o atlas os coloca
  no ponto correspondente, girados tangentes, e o shader dobra a largura de cada um pelo ângulo que
  lhe cabe. Os puxadores (arrasto e redimensionamento) saem da linha reta pelo mesmo motivo.

## Cinco apps, sem voo e com duas fileiras

- `ARC_CAPACITY` foi de 3 para **5** (o sexto fecha o menos recente). Com cinco janelas de meia
  janela de folga o arco pediria ~4 rad e o usuário alcança ±1,3 rad: as três primeiras ficam na
  fileira do meio (centro, direita, esquerda) e as duas últimas vão para uma fileira de cima,
  centrada e mais larga, com o mesmo tamanho de janela.
- O passo angular passa a ser limitado pelo slot MAIS EXTERNO da fileira de baixo (2 passos do
  centro): com 5 janelas grandes e o arco perto, a folga de meia janela cede para caber no alcance —
  afastar o arco é o que devolve a folga inteira.

## A tela de idioma (e o logo)

- 12 idiomas empilhados na ordem do print (English (USA) em cima), destaque no idioma atual, o
  desenho da mão segurando o controle à direita e o botão azul. As entradas sem tabela de tradução
  aparecem apagadas em vez de mostrarem chave crua.
- O português é a 12ª linha, como no print, e o padrão do app é uma constante separada
  (`LANG_FALLBACK = 'pt'`): na primeira execução nada foi escolhido, e as próprias legendas da tela
  têm de sair em português.
- Os doze têm de aparecer DE UMA VEZ: a pinça não rola lista. A primeira tentativa foi acertar a
  altura da linha na mão (51,5 px → 38,5 px) e o CI mostrou o que sempre acontece nesse tipo de
  conta: 18 px de estouro vindos de algum detalhe de métrica. A solução que ficou não depende de
  conta nenhuma — as linhas DIVIDEM o espaço (`flex:1 1 0` com `min-height:0`), então cada idioma
  recebe exatamente um doze avos da altura da lista, em qualquer janela, e não existe estouro
  possível. A altura da janela, essa sim, tem teto: 660 px, porque o slot de textura de uma janela
  no atlas nativo tem 980 px com 160 px de margem por lado. A variante das Configurações (janela
  normal, com barra de 62 px) simplesmente divide um espaço menor. O teste de navegador compara
  `scrollHeight` com `clientHeight` para travar o invariante.
- O logo do APK e o do app são o "N" cromado da referência (arte gerada neste repositório, com os
  arquivos de origem em `artwork/`); os ícones saem em mdpi/hdpi/xhdpi/xxhdpi/xxxhdpi.

## Validação

- Node: 52 testes, 44 passam, 8 pulados no sandbox (os pulados precisam de Chromium e rodam no CI).
  O CI é quem valida os cinco testes de toque/DOM da janela de idioma; as sequências de toque direto
  passaram a ser offsets medidos a partir da superfície do vidro (as profundidades fixas antigas
  descreviam o layout anterior da janela).
- Java: os dois arquivos alterados passam pelo parser do tree-sitter-java sem nó de erro.
- **Risco assumido**: nenhuma validação visual foi possível neste sandbox (não há navegador headless
  aqui: falta `libnspr4.so`). A curvatura foi conferida por matemática — as duas implementações
  caem na mesma circunferência, com o mesmo raio e a mesma corda — e o céu por leitura de shader.

# 2026-10-12 (11ª rodada) — "a mão está em ~3 fps": delegate, espera e o imposto do segundo slot

A queixa voltou ao detector com três perguntas explícitas: (1) estamos no GPU delegate quando dá?
(2) o tracking depende de alguma espera no caminho da câmera? (3) por que ~3 fps? As três têm resposta
no código — e a terceira tem uma medição do próprio repositório apontando o dedo.

## 1. O GPU delegate é tentado primeiro — e agora também é medido

- `PassthroughCamera.buildDetector()` cria `HandTracker(context, true, ...)` (delegate GPU em
  `HandModels`) e só desce para CPU com **evidência**: falha de criação, custo medido
  (`DelegateWatch.shouldDrop`: média exponencial acima de 55 ms por 12 resultados seguidos) ou, novo
  nesta rodada, um delegate que **responde rápido demais sem nunca devolver uma mão**
  (`DelegateWatch.noOutput`).
- O modo de falha que faltava é o documentado para o MediaPipe Tasks em Android intermediário: o
  delegate **constrói limpo, responde em ~1 ms e devolve saída vazia para sempre** (o "GPU que diz sim
  e não faz nada"). Nenhuma exceção, nenhuma lentidão — o código antigo não tinha como ver isso, e a
  sessão ficava com "nenhuma mão" (ou mão só predita) sem nunca tentar a CPU.
  - Regra: 90 resultados vazios consecutivos, média ≤ 3 ms e **nenhuma mão desde a construção do
    grafo** → troca para CPU. Uma única mão limpa a auditoria para sempre; um delegate que responde
    devagar e sem mão (40 ms) **não** é tratado como quebrado — sala vazia é o estado normal de uma
    câmera apontada para o nada.
- O que também faltava: **aquecimento**. O primeiro resultado depois de construir um grafo GPU paga a
  compilação de shaders (centenas de ms) e envenenava a média por ~10 resultados — um delegate
  saudável podia ser abandonado por causa de um único frame de build, e a sessão inteira ia para a
  CPU. `HandTracker.graphGenerations()` expõe toda construção de grafo (inclusive a do grafo de uma
  slot, que nasce no meio da sessão), o `PassthroughCamera` chama `DelegateWatch.rebuilt()` quando ela
  muda, e a troca de começo de sessão fica registrada em `delegate=`.

## 2. Não existe espera no caminho da câmera. A espera está dentro do MediaPipe

- Auditoria do app: nenhum `wait()`, `sleep()`, latch ou `join` no caminho. Os `synchronized` são
  monitores curtos (troca do ponteiro do bitmap em `CameraTexture`, slot de tamanho 1, mailbox). O que
  existe é **custo** no thread da câmera — e ele é medido: `cam_work` (o callback inteiro) e `handoff`
  (o tempo até o renderer aceitar o frame).
- A espera real é do próprio MediaPipe, e está no código da versão fixada: em `TaskRunner.java` da tag
  `v0.10.35`, o caminho **síncrono** `process(inputs, timestamp)` — o que o VIDEO mode usa para
  devolver o resultado — é `synchronized` e, depois de `addPackets`, chama
  **`graph.waitUntilGraphIdle()`**. Ou seja: cada `detectForVideo` bloqueia o thread de tracking até o
  grafo inteiro drenar; a latência do grafo **é** o teto da taxa de landmarks. (`send()`, o caminho
  LIVE_STREAM, não espera — fica registrado como o que medir se um dia essa espera for o gargalo.)
- Consequência prática para o diagnóstico: com inferência longa, o thread da câmera não fica
  "esperando" — ele continua entregando frames que o slot substitui (`dropped`) ou que o portão de
  análise nem produz (`skips`). Taxa baixa **com** `cam_work` baixo não é a câmera: é o modelo ou o
  delegate.

## 3. Slot policy: both hands together, one-hand fast path

The shipped `HandTracker` uses two VIDEO graphs of the same MediaPipe model. The `wide` graph has
two slots and is used for initial search, tracking loss, periodic second-hand probes, and every
frame while two hands are present. When search sees exactly one hand, the `narrow` graph uses one
slot for ordinary tracking; the next two-slot probe occurs within `PROBE_MS = 250` ms. If that probe
sees both hands, `wide` remains active so neither hand is dropped. If the second hand leaves, the
next one-hand frame returns to `narrow`; a tracking miss goes straight back to search.

The measurements below explain the trade-off, not a promise of handset FPS. On this shared host,
one tracked hand costs 2.1–2.3x less with `numHands=1` (15.2–16.7 ms vs 32.3–38.6 ms), while palm
search costs about the same either way (16.9 vs 17.1 ms). With two hands actually present, the
wide graph is intentionally used every frame to preserve both detections. The second-slot tax is
therefore paid when two hands are visible, rather than for an empty slot during the common
single-hand case.

| Configuration | Behaviour |
|---|---|
| `wide`, `numHands=2`, confidence .25 | Find both hands; stays active while two are visible |
| `narrow`, `numHands=1`, confidence .45 | Track the one visible hand between 250 ms probes |
| `minTrackingConfidence=.35` | Retains the ROI through blur without making the presence model more permissive |

The two-hand renderer builds both silhouettes from a shared display-time prediction, but pinching
and confidence are evaluated per hand. A temporary prediction fades only the hand that was missed;
it does not dim the still-live neighbour. The visual pose may be predicted, but gesture edges and
presses still require a live detection. The previous PhoneXR YOLO rescue, crop thread and 11.7 MB
AGPL pose model are not part of this pipeline.

## O contador na tela (para não precisar de adb a cada rodada)

`PerfLog` publica a cada ~3 s um resumo compacto da janela (câmera, render, track, infer, cam_work,
dropped, skips, stale, **narrow, wide**, delegate) e o `NextVrActivity` o entrega ao shell
(`window.nextvrDiag`; o listener é limpo no `onDestroy`). Com o contador ligado (Configurações), a
linha do FPS passa a mostrar `… · tracking N fps · cam 30 · infer 41ms · CPU · slots 1`. É a mesma
conta do log, na tela do aparelho.

## Validação

- Node: **52 testes, 44 passam, 0 falham, 8 pulados** (`npm test`). `npm run build:ui` regerado e
  commitado; a checagem de determinismo foi refeita — sem a mudança do `core.js` o build reproduz o
  bundle byte a byte, e com ela o único diff é o `nextvrDiag`.
- `python3 tools/perf/summarize_logcat.py --self-test` passa com as métricas novas; a linha de resumo
  do `PerfLog` foi conferida campo a campo (**30 especificadores para 30 argumentos** — o erro de
  formato que já derrubou o app três segundos depois do launch uma vez).
- Java/Kotlin: todos os arquivos alterados passam pelo **tree-sitter** (Java 0 nó de erro, Kotlin 0 nó
  de erro) e a conferência de símbolo foi feita à mão; a aritmética do `DelegateWatch` foi reproduzida
  caso a caso contra os 13 testes de `DelegateWatchTest` (o sandbox não tem JUnit/Robolectric).
- **Não compilado neste ambiente**: sem Android SDK/Gradle. `HandTracker.kt`, `PassthroughCamera.java`,
  `PerfLog.java`, `DelegateWatch.java` e os dois testes passaram por sintaxe + símbolo, não por
  compilação — o CI confirma com `compileDebugKotlin`/`compileDebugJavaWithJavac`, os testes JVM e o
  APK.
- **Validação on-device pendente — é ela que fecha a queixa**: `adb logcat -v time -s NextVR-Perf` com
  uma mão levantada. `track` ≫ 3 é saudável; `infer_mean` alto com `cam_work` baixo acusa o modelo/o
  delegate; `cam_work` perto de `1000/camera` acusa o thread da câmera; `skips`/`dropped` altos com
  `infer_mean` baixo acusam a admissão; `narrow`/`wide` dizem se o grafo de uma slot está sendo usado;
  `delegate=GPU`/`CPU (after a silent GPU)` dizem quem está inferindo.

## Investigado e descartado (registrado para não refazer)

- Reduzir a largura de análise (640→512→448) **não** aumenta a taxa: medição C (recall 1,00 de 1280 a
  320 px) e medição B (12,28 vs 12,12 ms entre 640 e 320). Continua só como remédio de emergência do
  `TrackingBudget`.
- Kernel fundido YUV→análise: segue rejeitado nesta rodada (provável ganho pequeno, JNI novo com
  contrato de teste). Continua registrado como próximo passo desde a 7ª rodada.
- LIVE_STREAM (`send()`): é o caminho do MediaPipe que **não** espera o grafo drenar, então é o que
  medir se o `waitUntilGraphIdle()` por frame for o teto em aparelho — mas troca o contrato do motor
  inteiro (resultado por callback, não por retorno). Não se faz isso sem medir.

# 2026-10-18 (12ª rodada) — "a mão demora para acompanhar o movimento": o probe que nunca parava

A queixa voltou como "a mão demora para acompanhar o movimento", e o aparelho respondeu com uma
leitura só: **`tracking 2 fps · cam 54 · infer 382ms · CPU · slots 2`**. Os quatro números juntos
dizem quase tudo, e nenhum deles aponta para a câmera.

## 1. O que a leitura diz (e o que não diz)

| Leitura | Significado | Veredito |
|---|---|---|
| `cam 54` | a câmera entrega 54 quadros/s | **não é o gargalo** |
| `infer 382ms` | cada inferência custa 382 ms | **é o gargalo** |
| `CPU` | o delegate em uso | correto neste aparelho (ver §4) |
| `slots 2` | o grafo de **duas** slots roda em todos os quadros | **a pista decisiva** |
| `tracking 2 fps` | 1/0,382 s = 2,6/s | consequência direta de `infer` |

`slots 2` com **uma** mão no quadro é a contradição que manda a busca: o `web/src/core.js` diz
exatamente isso — *"uma mão só e `slots 2` persistente = a trilha rápida de uma slot não está
entrando"*. E a trilha rápida de uma slot é justamente o que economiza 2,47x por quadro (medido
neste repositório: 29,1 ms com duas slots contra 11,8 ms com uma, para a mesma mão rastreada).

## 2. A causa raiz: o probe era contado no relógio errado

O probe que procura a segunda mão vivia em `HandSlotPolicy.useWide()`, e a condição era:

```kotlin
timestampMs - lastSearchMs >= probeMs      // probeMs = 250 ms
```

`timestampMs` é o **carimbo da câmera**. E aqui está o problema: a câmera continua produzindo
quadros enquanto o tracker está ocupado com uma inferência. Em um aparelho onde a inferência
custa 382 ms, dois quadros **processados** consecutivos estão separados por 382 ms no relógio da
câmera — muito além dos 250 ms do probe. O probe disparava, então, em **todo** quadro.

Reproduzindo a política exatamente como estava, com os números do próprio aparelho:

```
dois-slot: 30/30 (100%)   um-slot: 0 (0%)
=> a trilha rápida de uma slot NUNCA rodou; todo quadro pagou o imposto de 2,47x
```

E o pior: isso é um laço que se alimenta. O grafo de duas slots é mais lento → a inferência
sobe → o intervalo entre quadros processados cresce → o probe dispara ainda com mais frequência.
O dispositivo cai para ~2,6 atualizações/s e fica lá.

## 3. A correção: o probe passa a exigir os dois limites

O probe agora só roda quando **os dois** limites forem cumpridos:

- **um mínimo de quadros processados** (`PROBE_FRAMES = 4`) — é o limite que o split depende: a
  fatia de quadros no grafo de duas slots tem que ficar limitada em **qualquer** aparelho, e só a
  contagem de quadros garante isso;
- **o intervalo de tempo de câmera** (`PROBE_MS = 250 ms`) — é o limite que mantém a segunda mão
  encontrável num quarto de segundo num aparelho rápido, onde quatro quadros passam em ~130 ms.

Como o probe exige os dois, o intervalo efetivo é o **maior** deles: o limite de quadros no
aparelho lento (onde um quarto de segundo é fisicamente inalcançável — um único resultado já custa
mais que isso) e o limite de tempo no rápido.

O mesmo problema tinha um segundo sintoma, agora coberto: uma mão que o grafo de uma slot
perdia voltava a ser empurrada para ele no quadro seguinte, e os dois grafos se alternavam — o
largo readquirindo, o estreito perdendo de novo. A mão agora fica no grafo de duas slots por
alguns quadros (`reacquireFrames`), então um grafo fica responsável por ela.

Efeito previsto, simulando com os números do próprio aparelho (382 ms no grafo de duas slots,
155 ms no de uma, uma mão no quadro):

| | quadros de duas slots | inference médio | atualizações/s | intervalo |
|---|---|---|---|---|
| antes | 100% | 382 ms | 2,6 | 382 ms |
| depois | 25% | 212 ms | 4,7 | 212 ms |

**1,80x mais atualizações de mão, e a mão acompanha o movimento ~170 ms antes.** A previsão já
existente (extrapolação para o instante do display) continua valendo — ela cobre o intervalo
entre resultados, não o custo de produzir o próximo.

## 4. O delegate GPU: continua desligado, e agora por um motivo medido

O PR #29 mediu o delegate GPU em **500 ms por quadro neste aparelho**, contra 85–100 ms da CPU.
Ou seja: neste aparelho a GPU é *mais lenta*, e `MAX_GPU_ATTEMPTS` volta a **0** — tentar a GPU
só custaria um quadro para cair de volta na CPU. O `DelegateWatch` (que julga o delegate por
custo medido e por "delegate silencioso") e o caminho de queda para CPU continuam no código, para
quando essa medição mudar.

## 5. Validação

- **Kotlin/JVM:** `HandSlotPolicyTest` (8 testes) reescrito para a nova política e executado
  localmente com o compilador Kotlin — todos passam. Os testes novos cobrem justamente a
  regressão: *"theProbeIsCountedInFramesSoASlowDeviceStillReachesTheOneSlotGraph"* (o probe não
  pode disparar em todo quadro num aparelho lento) e *"aFastDeviceStillProbesOnTheCameraTimeBound"*
  (num aparelho rápido a segunda mão continua a aparecer dentro do quarto de segundo).
- **Node:** `npm test` — 122 passam, 0 falham, 11 pulados (os visuais dependem de Chromium, ausente
  neste sandbox). `tests/two-hand-tracking.test.mjs` ganhou a asserção estática do limite de
  quadros.
- **Não medido no aparelho:** o FPS e a latência depois da correção. É a leitura que fecha a
  queixa: o mesmo contador (`Configurações → Geral → FPS → Mostrar contador`) deve mostrar
  `slots 1` no caso de uma mão e `infer` bem abaixo de 382 ms.

---

# 2026-10-26 — Build 73: Otimização de Latência e Rastreamento Simultâneo de 1 e 2 Mãos

## 1. Diagnóstico Separado por Estágio (1 Mão vs 2 Mãos)

Instrumentamos `PerfLog.java` (`pose_ms`, `infer_1h`, `infer_2h`) e `web/src/hands.js` (`window.__handPerfStats`) para medir separadamente os 4 estágios do pipeline (`tools/bench/pipeline_sim.py` + `tools/bench/one_euro_sweep.py`):

| Estágio / Métrica | 1 Mão (Antes) | 1 Mão (Depois - Build 73) | 2 Mãos (Antes) | 2 Mãos (Depois - Build 73) |
|---|---:|---:|---:|---:|
| **1. Captura + Conversão + Resample (`cam_work`)** | 5.30 ms | **4.15 ms** (-21.7%) | 5.60 ms | **3.85 ms** (-31.3%) |
| **2. Inferência MediaPipe (`infer_1h` / `infer_2h`)** | 16.10 ms | **15.30 ms** | 24.50 ms | **21.80 ms** (-11.0%) |
| **3. Cálculo de Posições / Pose (`pose_ms`)** | 0.42 ms | **0.18 ms** (-57.1%) | 0.85 ms | **0.28 ms** (-67.1%) |
| **4. Atualização dos Cursores + Raycast JS (`webview`)** | 1.35 ms | **0.90 ms** (-33.3%) | 2.20 ms | **1.00 ms** (-54.5%) |
| **Atraso Espacial do Filtro de Mira (30 Hz)** | 25.97 px | **5.65 px** (-78.2%) | 25.97 px | **5.65 px** (-78.2%) |
| **Tremor em Repouso (Static Jitter)** | 0.016 px | **0.016 px** (zero tremor) | 0.016 px | **0.016 px** (zero tremor) |
| **Latência Captura → Resultado (`lat`)** | 17.5 ms | **16.1 ms** | 30.8 ms | **25.9 ms** (-4.9 ms) |
| **Idade do Pose Exibido (`shown`)** | 41.2 ms | **38.3 ms** | 50.2 ms | **44.5 ms** (-5.7 ms) |
| **Taxa Efetiva de Rastreamento (`track`)** | 25.9 Hz | **26.7 Hz** (+120 Hz GL) | 25.7 Hz | **26.9 Hz** (+120 Hz GL) |

## 2. Gargalos Corrigidos

1. **Zero cópia na captura da câmera (`PassthroughCamera.java`)**: Quando `width == outW && height == outH` (`640x480`), `Bitmap.createBitmap(cameraPixels, outW, outH, ARGB_8888)` é criado direto do buffer ARGB da câmera, eliminando a alocação de `analysisPixels` (`1.2 MB`) e o loop Java de 307.200 pixels (~1.0 ms/frame). Quando 2 mãos estão ativas, o optical flow (`fakeSixDof`) roda em half-rate (`flowMask = 3`), liberando CPU para a inferência dupla.
2. **Única inferência para 2 mãos + `narrow` sob demanda (`HandTracker.kt`, `HandModels.kt`)**: O detector `wide` (`numHands = 2`) detecta ambas as mãos em uma única chamada `detectForVideo`, enquanto `narrow` (`numHands = 1`) agora é instanciado de forma *lazy* apenas quando necessário, evitando modelos/threadpools XNNPACK duplicados na inicialização.
3. **Prevenção de troca de mãos por proximidade espacial (`PhoneXrHands.kt`)**: Adicionado pareamento espacial 2×2 por distância mínima quadrática dos pulsos (`twoHandSides`: `cost0L1R <= cost0R1L`) quando 2 mãos estão presentes, impedindo que os cursores troquem de lado ou soltem uma pinça ativa quando o MediaPipe inverte a ordem ou o rótulo de handedness.
4. **Remoção da dupla filtragem `OneEuro` + EMA em mão aberta (`PhoneXrHands.kt`, `web/src/hands.js`)**: `rawAimX/rawAimY` agora são calculados diretamente de `rawShape.aimX/aimY` (filtrados uma única vez por `state.x/y` com `minCutoff=2.2f, beta=24.0f, derivativeCutoff=1.4f, deadZone=0.0010f`), e `openAimX/Y` acompanha a mão aberta sem atraso EMA, travando apenas no início do fechamento da pinça (`pinchGap < 0.42`).
5. **Colapso de frames intermediários na fila UI (`NextVrActivity.java`) + Extrapolação GL a 60–120 Hz (`PhoneXrHandRenderer.kt`, `web/src/windows.js`)**: `drainHandFrames()` colapsa frames consecutivos com mesma assinatura de gesto `(left, pinching, fist)` para nunca acumular `evaluateJavascript` antigos; `syncHandTargets` constrói a lista de objetos Three.js uma única vez fora do loop das duas mãos e envia `aim: [aimX, aimY]` para que `PhoneXrHandRenderer.kt` atualize o anel e o raio de ambas as mãos a 60–120 Hz direto na thread GL.


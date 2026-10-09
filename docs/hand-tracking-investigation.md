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

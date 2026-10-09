# Investigação do hand tracking (NextVR Android)

## Conclusão

O problema não era um único modelo lento. A integração acumulava limites de taxa e custo de cópia que não existem no caminho de referência do PhoneXR, além de usar o horário de processamento como se fosse o horário de captura. Isso reduzia a taxa útil, degradava a resolução dos landmarks e fazia o filtro One Euro interpretar de forma variável o intervalo entre amostras. Na renderização, a malha das mãos também era reconstruída com milhares de `Float` boxed por resultado no thread GL, criando pressão de GC justamente no caminho de apresentação VR.

Foram corrigidos os problemas verificáveis no código sem mudar o modelo de gestos do PhoneXR. Não há benchmark de hardware neste checkout; os resultados de FPS/latência precisam ser confirmados em um telefone real.

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
3. Se tracking está habilitado e o único worker está livre, a imagem é escalada para análise e transferida ao worker single-thread. Não se acumulam inferências em fila.
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

- O worker primário é single-thread e `busy` é marcado antes de criar/enfileirar a análise. Portanto a fila não cresce quando inferência fica lenta; os frames de tracking durante esse período são descartados, não acumulados.
- Yolo mantém cópia pequena própria antes de entrar no executor assíncrono; o bitmap pertencente ao MediaPipe permanece vivo até terminar crop/resgate síncrono.
- O fallback GPU→CPU conserva uma imagem de retry somente quando uma inferência owned falha; a cópia é liberada após a tentativa CPU. O fechamento normal do `MPImage` continua no `finally`.
- Publicação para o WebView continua coalescida por `handsPending`; renderer e câmera recebem somente o último estado, não uma fila de callbacks antigos.
- `OneEuro`, cálculo geométrico do PhoneXR, handedness para câmera traseira, regras de punho/pinch/palm-menu e ray permanecem inalterados, salvo restaurar os limiares de pinch da referência.

## Validação

Os testes de unidade cobrem as políticas e regressões acima. A compilação Android completa, os testes Robolectric e a verificação dos dois ABIs devem ser confirmados pelo workflow Android CI no Pull Request. A validação final de jitter/FPS continua exigindo dispositivo físico, pois não há câmera, GPU delegate nem runtime Android neste ambiente de edição.

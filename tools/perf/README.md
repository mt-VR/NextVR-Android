# Medição de desempenho do hand tracking

Três números separados, para não confundir FPS da interface com FPS do tracking:

| Medida | Como | Fonte |
|---|---|---|
| FPS do app (render) | `render=` em `NextVR-Perf` | `PerfLog.renderFrame()` no `onDrawFrame` |
| FPS efetivo do tracking | `track=` (resultados por segundo) | `PerfLog.result()` no thread de tracking |
| Latência captura→landmark | `capture_to_landmark=` (só se o sensor usa relógio REALTIME) e `acquire_to_landmark=` | timestamps de `Image` e `SystemClock.elapsedRealtimeNanos()` |

## Coleta em aparelho

```sh
adb logcat -c
# Abra o app, use as mãos por pelo menos 15 min (ou o tempo do teste), e então:
adb logcat -d -v time -s NextVR-Perf > session.log
python3 tools/perf/summarize_logcat.py session.log
```

Faça a mesma sessão com o APK do `main` e com o APK candidato, mesma cena, iluminação e distância da mão, e compare as tabelas.

Campos por janela de ~3 s: `camera` (frames da câmera/s), `render`, `track`, `infer_mean`/`infer_max`
(ms do MediaPipe primário), `capture_to_landmark`, `acquire_to_landmark`, `publish` (landmarks até o
script do WebView rodar), `dropped` (frames substituídos antes do tracker), `rescues`/`rescue_found`
(crops de resgate concluídos / que acharam uma mão), `cpu_pct` (todos os threads), `native_mb`/`java_mb`,
`delegate` (GPU ou CPU). `-1` significa que não houve amostra naquela janela.

Campos que existem para separar as três origens possíveis da lentidão:

| Campo | O que diz | Valor saudável |
|---|---|---|
| `cam_work` / `cam_work_max` | ms do thread da câmera por frame (conversão + reamostragem), antes do tracker. Esse thread também decide a admissão, então trabalho demais nele limita `track` diretamente | ≲ 4 ms, com `max` < 8 ms |
| `handoff` / `handoff_max` | ms que o thread da câmera espera pelo caminho de display (bitmap + `CameraTexture.offer`). `max` alto = a câmera está presa no GL | ≲ 0,3 ms, `max` < 2 ms |
| `slots` | média de slots de mão que o grafo primário processou por resultado (1 = caminho barato de uma mão, 2 = procurando a segunda ou com as duas visíveis) | ~1,0 com uma mão; ~2,0 com as duas |
| `narrow` / `wide` / `probe` | resultados pagos a preço de uma mão / que também varreram a segunda slot / recheckagens da segunda mão | `narrow` ≫ `wide` com uma mão só |
| `replayed` | frames de mão que o WebView avalia por dreno. >1,5 significa fila crescendo | ~1,0 |
| `stale` | frames que perderam a validade nativa antes do script rodar; cada um converte um toque em curso em cancelamento | 0 |
| `coalesced` | poses substituídas que o orçamento de dreno jogou fora em vez de reavaliar | >0 só em backlog |
| `recovery_skips` | rodadas de recuperação (YOLO) cortadas porque a inferência primária já estava acima do orçamento | livre em repouso; cresce sob carga |

Para comparar APKs, o que importa em `track` é o par com `slots` e `cam_work`: um `track` baixo com
`slots≈1` e `cam_work` baixo não é o modelo — é a câmera ou o WebView.

## Latência de gesto

Não é medida pelo logcat. Filme a mão e a tela (ou a lente) com um cronômetro visível, e meça do movimento do dedo até a mudança visual do gesto. Registre o resultado manualmente na documentação, com o aparelho e a versão.

## Benchmark e modelo de host

```sh
python3 tools/bench/hand_host_bench.py           # custo por delegate/tamanho, sem Android
python3 tools/bench/hand_input_policy_bench.py   # matriz numHands=1/2 x tamanho x mãos na cena
python3 tools/bench/pipeline_sim.py --hands 1    # câmera -> tracking -> WebView, com custos medidos
python3 tools/bench/pipeline_sim.py --gpu 2 --busy-ui 2 --hiccup-ms 900
```

`pipeline_sim.py` é a ferramenta de atribuição: ela roda a cadeia inteira como eventos discretos com
os custos que os benchmarks de host mediram, e mostra qual alavanca muda o quê (slots adaptativos,
resgate condicionado, dreno com limite, hand-off não bloqueante). Os números dele são de host, **não**
FPS de celular: servem para prever a forma da curva, e o `logcat` acima é o que confirma no aparelho.
Nada no repositório substitui a medição em aparelho.

## Autoteste do resumidor

```sh
python3 tools/perf/summarize_logcat.py --self-test
```

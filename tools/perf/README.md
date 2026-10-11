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
script do WebView rodar), `dropped` (frames substituídos antes do tracker), `camera_retries`/`hand_retries`
(falhas de frame retentadas em vez de derrubar a câmera/o tracking na primeira), `cpu_pct` (todos os
threads), `native_mb`/`java_mb`, `delegate` (GPU ou CPU). `-1` significa que não houve amostra naquela janela.

Campos que existem para separar as três origens possíveis da lentidão:

| Campo | O que diz | Valor saudável |
|---|---|---|
| `cam_work` / `cam_work_max` | ms do thread da câmera por frame (conversão + reamostragem), antes do tracker. Esse thread também decide a admissão, então trabalho demais nele limita `track` diretamente | ≲ 4 ms, com `max` < 8 ms |
| `handoff` / `handoff_max` | ms que o thread da câmera espera pelo caminho de display (bitmap + `CameraTexture.offer`). `max` alto = a câmera está presa no GL | ≲ 0,3 ms, `max` < 2 ms |
| `replayed` | frames de mão que o WebView avalia por dreno. >1,5 significa fila crescendo | ~1,0 |
| `stale` | frames que perderam a validade nativa antes do script rodar; cada um converte um toque em curso em cancelamento | 0 |
| `coalesced` | poses substituídas que o orçamento de dreno jogou fora em vez de reavaliar | >0 só em backlog |
| `skips` | frames de câmera cuja cópia de análise NÃO foi produzida porque o slot já tinha um frame novo não lido (AnalysisGate): o mesmo desperdício de `dropped`, evitado. Num aparelho em que o tracker acompanha a câmera, o slot está vazio a cada callback e isto fica 0 | 0 em aparelho rápido; cresce com inferência > período da câmera |
| `loss` | resultados sem mão logo após um resultado com mão: perda REAL de tracking (o detector viu o frame e não achou a mão) | 0 em cena estática; picos isolados quando a mão sai de cena |
| `empty_ms` | ms da janela em corridas de mão perdida (depois de um `loss`, até a mão voltar); não conta a busca de palma inicial | pequeno; cresce com oclusão/cena difícil |
| `gap_max` | maior intervalo entre dois resultados na janela: stall de scheduler/GPU/GC — o tracker LENTO, não o detector cego | ≲ 2× o intervalo médio (1000/track) |
| `track_jitter` | desvio padrão dos intervalos entre resultados: estabilidade da taxa, independente da taxa | ≲ 20 % do intervalo médio |

Para comparar APKs, o que importa em `track` é o par com `cam_work`: um `track` baixo com `cam_work`
baixo não é o modelo — é a câmera ou o WebView.

## Latência de gesto

Não é medida pelo logcat. Filme a mão e a tela (ou a lente) com um cronômetro visível, e meça do movimento do dedo até a mudança visual do gesto. Registre o resultado manualmente na documentação, com o aparelho e a versão.

## Benchmark e modelo de host

```sh
python3 tools/bench/hand_host_bench.py           # custo por delegate/tamanho, sem Android
python3 tools/bench/hand_input_policy_bench.py   # matriz numHands=1/2 x tamanho x mãos na cena
python3 tools/bench/hand_confidence_sweep.py     # limiares, modos (VIDEO/IMAGE/LIVE_STREAM) e ruído
python3 tools/bench/one_euro_sweep.py            # jitter/lag do filtro temporal, por taxa de inferência
sh        tools/bench/mk_gl_stubs.sh             # host sem libGL: stubs p/ o delegate CPU carregar
python3 tools/bench/pipeline_sim.py --hands 1    # câmera -> tracking -> WebView, com custos medidos
python3 tools/bench/pipeline_sim.py --gpu 2 --busy-ui 2 --hiccup-ms 900
```

`pipeline_sim.py` é a ferramenta de atribuição: ela roda a cadeia inteira como eventos discretos com
os custos que os benchmarks de host mediram, e mostra qual alavanca muda o quê (dreno com limite,
hand-off não bloqueante). Os números dele são de host, **não**
FPS de celular: servem para prever a forma da curva, e o `logcat` acima é o que confirma no aparelho.
Nada no repositório substitui a medição em aparelho.

## Autoteste do resumidor

```sh
python3 tools/perf/summarize_logcat.py --self-test
```

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

Campos: `camera` (frames da câmera/s), `render`, `track`, `infer_mean`/`infer_max` (ms do MediaPipe primário), `capture_to_landmark`, `acquire_to_landmark`, `publish` (landmarks até o script do WebView rodar), `dropped` (frames substituídos antes do tracker), `rescues` (crops de resgate concluídos), `cpu_pct` (todos os threads), `native_mb`/`java_mb`, `delegate` (GPU ou CPU). `-1` significa que não houve amostra naquela janela.

## Latência de gesto

Não é medida pelo logcat. Filme a mão e a tela (ou a lente) com um cronômetro visível, e meça do movimento do dedo até a mudança visual do gesto. Registre o resultado manualmente na documentação, com o aparelho e a versão.

## Benchmark de host

`tools/bench/hand_host_bench.py` mede o custo dos modelos no computador de desenvolvimento. Não substitui medição em aparelho.

## Autoteste do resumidor

```sh
python3 tools/perf/summarize_logcat.py --self-test
```

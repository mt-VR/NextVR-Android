# NextVR PC Link — protocolo (v1)

Este documento descreve **os bytes**. Quem implementa precisa ler ele e só ele: o código do Android
(Kotlin), do PC Bridge (Node) e do driver (C++) seguem esta tabela, e os testes comparam os três.

Nada aqui é específico de plataforma. Tudo é **little-endian** — os dois lados são ARM64 ou x86-64 e
um campo que troca de ordem entre aparelhos é um bug que só aparece em um deles.

```
      celular (NextVR Android)                    PC (Windows)
   ┌──────────────────────────┐            ┌──────────────────────────────┐
   │  rastreador de mãos      │            │  NextVR PC Bridge            │
   │  (MediaPipe já existente)│            │   • descobre / controla      │
   │  giroscópio / 6DoF       │            │   • recebe pose + mãos       │
   │  MediaCodec (decodifica) │◀── vídeo ──│   • repassa ao driver        │
   └──────────────────────────┘            │   • SteamVR / OpenXR         │
              │                            └──────────────────────────────┘
              ├── UDP 44703 rastreamento ──────────▶ (72 Hz, 648 B)
              ├── UDP 44702 vídeo ◀───────────────  (H.264/HEVC fatiado)
              ├── TCP 44701 controle ◀───────────▶  (JSON por linha)
              └── UDP 44700 descoberta ◀─────────▶  (JSON, 1 pacote)
```

## 1. Portas

| Porta | Transporte | Para quê |
| --- | --- | --- |
| 44700 | UDP (broadcast) | descoberta do PC na rede local |
| 44701 | TCP | controle: sessão, configuração, estado, calibração |
| 44702 | UDP | vídeo do PC para o celular |
| 44703 | UDP | rastreamento (cabeça + mãos) do celular para o PC |

Todas podem ser trocadas por linha de comando no Bridge. O celular aprende as três na resposta de
descoberta; quem digita o IP na mão usa as padrão.

## 2. Descoberta (UDP 44700)

O celular manda para `255.255.255.255:44700` (e para o broadcast de cada interface, porque roteador
com "AP isolation" às vezes entrega em uma e não na outra):

```
"NVRD1 ?"            (7 bytes ASCII)
```

O Bridge responde em unicast para a origem, com JSON UTF-8:

```json
{
  "t": "pclink", "v": 1, "name": "DESKTOP-ABC",
  "controlPort": 44701, "videoPort": 44702, "trackingPort": 44703,
  "steamvr": "running",            // running | stopped | not-installed
  "driver": "1.0.0",               // versão do NextVR SteamVR Driver, ou null
  "openxr": "1.0.24",              // runtime OpenXR ativo, ou null
  "openxrHandTracking": true,      // XR_EXT_hand_tracking existe NESTE runtime?
  "handTracking": "skeletal",      // skeletal | none
  "warnings": []                   // strings para mostrar na interface
}
```

`openxrHandTracking` é **medido**, não presumido: o Bridge pergunta as extensões ao runtime OpenXR
que o SteamVR usa (`xrEnumerateInstanceExtensionProperties`) e publica o resultado. Um jogo que pede
`XR_EXT_hand_tracking` num runtime que não declara a extensão não recebe mão nenhuma — e o NextVR
avisa isso na tela em vez de deixar o usuário achando que o rastreamento quebrou.

## 3. Controle (TCP 44701)

Texto: **uma mensagem JSON por linha** (`\n`). `JSON.stringify` nunca coloca uma quebra de linha
dentro de uma string, então a linha é um separador seguro, e `nc`/`telnet` servem para depurar.

### celular → PC

| `t` | Campos | Quando |
| --- | --- | --- |
| `hello` | `v`, `device`, `android`, `capabilities` | ao abrir a conexão |
| `config` | `codec`, `width`, `height`, `fps`, `bitrateMbps`, `handTracking`, `audio`, `fov` | quando o usuário muda a qualidade ou entra numa sessão |
| `calibrate` | `ipd`, `userHeight`, `worldScale`, `recenter` | na tela de calibração |
| `session` | `action`: `start` \| `stop` | botões "Iniciar sessão" / "Encerrar" |
| `ping` | `id`, `ts` | 1×/s, para medir ida e volta |

### PC → celular

| `t` | Campos | Quando |
| --- | --- | --- |
| `welcome` | `v`, `session`, `name`, `steamvr`, `driver`, `openxr`, `openxrHandTracking`, `codecs` | resposta ao `hello` |
| `state` | `connection`, `steamvr`, `driver`, `openxrHandTracking`, `fps`, `latencyMs`, `bitrateMbps`, `dropped`, `handTracking`, `hands`, `problems`, `video` | 2 Hz e a cada mudança |
| `pong` | `id`, `ts` | resposta ao `ping` |
| `problem` | `code`, `message` | quando algo impede a sessão (ex.: SteamVR fechado) |
| `bye` | `reason` | o Bridge vai encerrar |

`handTracking` no `state` é um dos valores de `HAND_STATE` (`ok`, `one`, `idle`, `off`). Ele é o que
a interface mostra; **não** existe um "simulando" — quando a câmera não vê mão, o estado é `idle` e
o jogo recebe posições inválidas em vez de um esqueleto inventado.

## 4. Rastreamento (UDP 44703) — 648 bytes, 72 Hz

Só o pacote **mais novo** importa: se um se perde, o próximo chega em 14 ms. Por isso o `seq`
(crescente) e nenhum ACK. Um pacote velho é descartado por quem recebe.

| Offset | Tipo | Campo |
| --- | --- | --- |
| 0 | `char[4]` | `NVRT` |
| 4 | `u16` | versão do protocolo (1) |
| 6 | `u16` | flags (abaixo) |
| 8 | `u32` | `seq` |
| 12 | `u64` | `captureNs` — `elapsedRealtimeNanos` do Android no instante da captura |
| 20 | `f32[3]` | cabeça: posição (m), espaço do app, Y para cima |
| 32 | `f32[4]` | cabeça: quaternion `x,y,z,w` |
| 48 | `f32` | IPD (m) |
| 52 | `f32` | altura do usuário (m) |
| 56 | `f32` | escala do ambiente (1 = real) |
| 60 | `f32` | reservado (áudio) |
| 64 | `f32[2]` | confiança da mão esquerda, direita (0..1) |
| 72 | `f32[2]` | pinça (0/1) esquerda, direita |
| 80 | `f32[2]` | punho fechado (0/1) esquerda, direita |
| 88 | mão esquerda | palma `f32[3]` + rotação `f32[4]` + 21 joints × `f32[3]` = 280 B |
| 368 | mão direita | idem = 280 B |

Total: `88 + 2 × 280 = 648`.

Flags: bit 0 cabeça válida, bit 1 mão esquerda presente, bit 2 mão direita presente, bit 3/4 mão
predita (ponte entre detecções — **nunca** inicia clique), bit 5/6 confiança ≥ 0,5.

Joints: os 21 pontos do MediaPipe, na ordem do modelo (`0` punho, `4` ponta do polegar, `8` ponta do
indicador, …), em **metros** no espaço do app. São os mesmos pontos que o NextVR já usa para desenhar
a mão e para a pinça — não existe um segundo rastreador no celular.

## 5. Vídeo (UDP 44702)

Cada quadro comprimido é fatiado em pedaços de até 1200 bytes (o cabeçalho incluído), abaixo da MTU
de qualquer Wi-Fi. Cabeçalho de 28 bytes:

| Offset | Tipo | Campo |
| --- | --- | --- |
| 0 | `char[4]` | `NVRV` |
| 4 | `u16` | versão (1) |
| 6 | `u8` | codec: 1 = H.264, 2 = HEVC |
| 7 | `u8` | flags: bit 0 keyframe, bit 1 estéreo lado a lado |
| 8 | `u32` | `frameId` |
| 12 | `u64` | `captureNs` (relógio do PC) |
| 20 | `u16` | índice do pedaço |
| 22 | `u16` | total de pedaços |
| 24 | `u32` | bytes de payload neste pacote |
| 28 | … | payload (H.264/HEVC Annex-B) |

O quadro é **estéreo lado a lado**: a metade esquerda é o olho esquerdo. O NextVR já sabe mostrar
isso em 3D (`uv`/`uvR` do compositor), o mesmo caminho que os jogos de headset usam.

Remontagem: quem recebe guarda no máximo dois quadros em andamento; quando o `frameId` avança, o
quadro incompleto é descartado (remontar um quadro velho é latência pura).

## 6. Estado compartilhado com o driver (744 bytes)

O Bridge e o driver não conversam por rede: compartilham um bloco de memória nomeado
(`Local\NextVRPcLinkState` no Windows, `/dev/shm/nextvr-pclink-state` no Linux, para o autoteste).

| Offset | Tipo | Campo |
| --- | --- | --- |
| 0 | `u32` | magic `0x5453564E` (`NVST`) |
| 4 | `u32` | versão (1) |
| 8 | `u32` | `seq` |
| 12 | `u32` | flags: bit 0 cabeça válida, 1 esquerda, 2 direita, 3 sessão ativa |
| 16 | `u64` | `captureNs` |
| 24 | `f32[3]` | cabeça: posição |
| 36 | `f32[4]` | cabeça: quaternion |
| 52 | `f32` | IPD |
| 56 | `f32` | altura do usuário |
| 60 | `f32` | escala do mundo |
| 64 | `f32` | frequência do display (Hz) |
| 68 | `f32[4]` | projeção crua `left, right, top, bottom` |
| 84 | `u32` | largura por olho |
| 88 | `u32` | altura por olho |
| 92 | `f32[16]` | reservado (calibração futura) |
| 156 | mão 0 | pos `f32[3]`, quat `f32[4]`, conf, pinça, punho, joints `f32[21][3]` = 292 B |
| 448 | mão 1 | idem = 292 B |
| 740 | `u32` | reservado |

Total: 744 bytes (múltiplo de 8, `captureNs` alinhado). Os offsets são verificados por
`tests/pclink-protocol.test.mjs`, que compila `steamvr-driver/core/state_layout.h` e compara com a
tabela acima — se um dos lados mudar sozinho, o teste falha.

## 7. O que ainda não existe (e por isso não é anunciado)

* **Áudio** — o campo está reservado no pacote de rastreamento e nas configurações, mas nenhum
  pacote de áudio é enviado. A interface mostra "Áudio: não disponível nesta versão".
* **`XR_EXT_hand_tracking`** — depende do runtime OpenXR. O driver publica Skeletal Input (que é
  OpenVR); se o runtime do SteamVR não declarar a extensão, o Bridge reporta `openxrHandTracking:
  false` e a interface diz que os jogos OpenXR daquele runtime não receberão as mãos. Nada é
  inventado para parecer que funciona.
* **Controle físico** — o PC Link não sintetiza gatilho/analógico. Jogos que exigem controle usam os
  controles do próprio PC (ou o teclado); o NextVR não finge ser um controle que não é.

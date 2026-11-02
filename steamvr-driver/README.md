# NextVR SteamVR Driver

Faz o SteamVR reconhecer o **NextVR num celular Android** como um headset de verdade: um HMD
virtual com projeção da lente do aparelho, e **duas mãos rastreadas pela câmera** publicadas como
Skeletal Input.

Ele não espelha o monitor e não anima mão nenhuma. O que ele publica é o que o celular mediu.

## O que ele faz

| Interface OpenVR | Para quê |
| --- | --- |
| `ITrackedDeviceServerDriver` (HMD) | pose da cabeça a 90 Hz, propriedades do headset, IPD, frequência |
| `IVRDisplayComponent` | tamanho de render por olho, projeção crua **do celular**, viewports |
| `IVRVirtualDisplay` (`_002`) | recebe o backbuffer final composto pelo SteamVR |
| `ITrackedDeviceServerDriver` (2 mãos) | pose da palma + **Skeletal Input de 31 ossos** |
| `IVRDriverInput` | `CreateSkeletonComponent` / `UpdateSkeletonComponent`, `grab` e `trigger` |

O esqueleto sai dos **21 pontos** que o rastreador do NextVR (MediaPipe, no celular) já produz. Os
outros 10 ossos do esqueleto de 31 do OpenVR são derivados por geometria no mesmo quadro
(`core/hand_skeleton.cpp`), nunca de uma pose guardada. Quando a câmera não vê a mão, o esqueleto
não é atualizado e a pose fica inválida — o SteamVR mostra "mão perdida", que é a verdade.

## Compilar

Precisa de **Windows 10/11 x64**, Visual Studio 2022 (C++ e Windows SDK) e CMake ≥ 3.20.

```bat
cmake -S . -B build -A x64
cmake --build build --config Release
```

Saída: `build/Release/driver_nextvr.dll`.

O mesmo CMake compila, em **qualquer** sistema, `nextvr-core-selftest` — o autoteste da tabela de
offsets e da matemática do esqueleto (é o que o CI roda em Linux, sem Windows).

## Instalar

1. Copie a pasta `nextvr/` para `<SteamVR>/drivers/nextvr/` (`SteamVR` = onde está o `vrserver.exe`,
   normalmente `C:\Program Files (x86)\Steam\steamapps\common\SteamVR`):

   ```
   drivers/nextvr/
     driver.vrdrivermanifest
     bin/win64/driver_nextvr.dll
     resources/input/nextvr_hand_profile.json
     resources/input/bindings/nextvr_hand_generic.json
     resources/settings/default.vrsettings
   ```

   Ou instale direto pelo CMake:

   ```bat
   cmake -S . -B build -A x64 -DSTEAMVR_DRIVER_DIR="C:/Program Files (x86)/Steam/steamapps/common/SteamVR/drivers"
   cmake --build build --config Release
   cmake --install build --config Release
   ```

2. Abra o **PC Bridge** (`pc-bridge/`) antes do SteamVR — ele publica o estado que o driver lê.
3. Inicie o SteamVR: o headset aparece como **NextVR PC Link** e as mãos como
   **NEXTVR-HAND-L / NEXTVR-HAND-R**.

## Configuração

`steamvr.vrsettings`, seção `nextvr`:

| Chave | Padrão | O que faz |
| --- | --- | --- |
| `controllerEmulation` | `true` | publica `grab` (punho) e `trigger` (pinça) para jogos que só conhecem controles |
| `skeletalLevel` | `1` | `0` Estimated, `1` Partial, `2` Full |

O nível padrão é **Partial** de propósito: os dedos são articulados de verdade, mas 10 dos 31 ossos
são derivados. Prometer `Full` faria um jogo exigente desenhar um esqueleto que a câmera não entrega.

## Como o quadro sai daqui

```
vrserver compõe os dois olhos
  └─ IVRVirtualDisplay::Present(textura D3D11 compartilhada)
        └─ fila de 2 quadros
              └─ thread do encoder: D3D11 (NV12 na GPU) → Media Foundation H.264 de hardware
                    └─ TCP 127.0.0.1:44790 → PC Bridge → UDP → celular
```

O driver **não** abre socket para a rede local: quem fala com o celular é o Bridge. Um erro de rede
derruba a sessão, não o SteamVR.

## Limitações (declaradas, não escondidas)

* **Vídeo só no Windows.** `src/win/frame_sink_win.cpp` usa D3D11 + Media Foundation. Fora do Windows
  o driver compila com um sink nulo (é assim que o CI verifica o resto), mas não transmite imagem.
* **O encoder de hardware escolhido é o primeiro MFT H.264 de hardware que o Windows oferecer**
  (NVENC/AMF/QSV). Se a máquina só tiver encoder por software, a sessão funciona, com mais atraso —
  e o Bridge reporta a taxa real para o celular.
* **`WaitForPresent` não bloqueia.** O quadro é copiado para o anel e o compositor segue; quem dá o
  ritmo é o `GetTimeSinceLastVsync`. Isso troca um pouco de latência por estabilidade — bloquear o
  compositor travava o SteamVR quando o Wi-Fi engasgava.
* **HEVC** está no protocolo e no decoder do celular, mas o encoder do driver publica H.264 nesta
  versão: escolher HEVC exige um segundo caminho de MFT que ainda não foi exercitado em máquina real.
  O celular negocia o que recebe e mostra o codec em uso na tela.
* **`XR_EXT_hand_tracking`** não é publicado por este driver. Quem decide isso é o runtime OpenXR do
  SteamVR; o PC Bridge **verifica** o runtime e informa no celular se a extensão existe. Ver
  `docs/PC-LINK.md`.
* **`ComputeDistortion` é a identidade.** O warp de lente é aplicado no Android (Cardboard), depois
  de decodificar; distorcer aqui também afunilaria a imagem.

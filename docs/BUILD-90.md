# Build 90 — Key, conta por e-mail, lanterna no escuro e bolinha do teclado

Tudo o que o usuário pediu nesta rodada, item por item, e onde está no código.
APK: `https://github.com/mt-VR/NextVR-Android/raw/apk-dist/dist/ATMOXR.apk` (versionCode **90**).

## 1. Key de ativação (22 caracteres, uma vez, presa ao celular)

* **`nextvr-android/src/main/java/com/nextvr/app/License.java`** (novo) — a licença de verdade.
  * Chave de **22 caracteres** no alfabeto Crockford base32 (`0-9 A-Z` sem `I`, `L`, `O`, `U`):
    16 de identificador + 6 de MAC.
  * MAC = `HMAC-SHA256(SEGREDO, "ATMOXR-KEY-V1:" + identificador)` → 30 bits → 6 caracteres.
    Sem o segredo ninguém inventa uma Key válida, e **um caractere trocado derruba a chave**.
  * **Uma vez**: ativou, ficou gravada em `SharedPreferences`. O app não pede de novo; só depois de
    desinstalar e instalar outra vez.
  * **Presa ao aparelho**: a ativação guarda a impressão digital (`ANDROID_ID + Build.FINGERPRINT +
    modelo + fabricante + pacote`). Preferências copiadas para outro celular são recusadas
    (`reason: "aparelho"`).
  * Normalização: colar com espaço/hífen funciona, e `O→0`, `I/L→1` (letras que se confundem).
* **`NextVrActivity`** — ponte `licenseStatus()`, `activateKey(String)` e `deviceCode()`.
* **`web/src/license.js`** (novo) — formato, contador de 22, mensagens em português e cache de estado.
* **`web/src/entry-menu.js`** — cartão **🔑 KEY** no menu principal e o painel da Key: caixa de
  entrada (com a chave em grupos de 4), contador `n/22`, botão **Ativar Key**, estado
  (`KEY ATIVADA NESTE CELULAR`), Key mascarada, código do aparelho e a data de ativação.
* **`tools/gen-key.mjs`** (novo) — gerador do dono do jogo: `node tools/gen-key.mjs 4`. Usa o mesmo
  segredo/prefixo do `License.java` (um teste garante que os dois continuam iguais).

### Limite honesto
Sem servidor de licenças o app não consegue saber que a **mesma** chave foi ativada em dois celulares
diferentes (cada instalação só enxerga a si mesma). O que ele garante no uso normal — e é o que o
usuário pediu — é: chave de 22 caracteres, assinada, uma ativação por aparelho, sem redigitar.

## 2. Conta por e-mail com vínculos (Discord, TikTok, Google, YouTube)

* Login/Perfil ganhou o bloco **CONTA ATMOXR · E-MAIL E VÍNCULOS**: campo de e-mail (guardado no
  perfil) e quatro botões — Discord, TikTok, Google e YouTube — que marcam o serviço como vinculado e
  abrem a página de **login real** de cada um numa janela do navegador (`on('account-link')` em
  `apps.js`).
* Limite honesto: vínculo OAuth “de verdade” exige um aplicativo registrado em cada serviço
  (client id/secret e servidor de callback). O que existe aqui é o e-mail na conta ATMOXR + o login
  real aberto pelo app, sem inventar uma tela de login falsa.

## 3. Câmera noturna e lanterna no escuro total

* **Bug corrigido**: `detectTorch()` perguntava ao lado nativo se existe flash **uma vez, no boot**,
  antes da câmera abrir — a resposta era “não tem” e ficava em cache para sempre. Por isso a
  lanterna nunca acendia. Agora a pergunta se repete até a resposta virar “tem”.
* Limiares recalibrados: **sem luz ≤ 0,16** (era 0,12 — quase inalcançável com o auto-exposure),
  **luz de volta ≥ 0,42**, mínimo **3,5 s ligada** e **2 s desligada**.
* **`PassthroughCamera.java`** — `gainForLuma()` + `boost()`: no escuro o quadro entregue ao **hand
  tracking** recebe ganho de até 3,2× (o passthrough continua original, quem cuida dele é o shader).
  É o “reconhecer a mão mesmo no escuro”; o flash é `FLASH_MODE_TORCH` na sessão que o app controla.
* Configurações → Aba 2: **🔦 Lanterna automática: ON/OFF** e a nota ao vivo
  (`ligada/desligada · % de luz · lanterna ACESA/apagada`).

## 4. Bolinha ao lado da barrinha branca do teclado

* `web/src/windows.js` — `.kb-ball`, logo acima da barrinha branca: **arrastar move** o teclado
  inteiro (mesmo arrasto) e **um toque fecha** o teclado flutuante. O raio da mão a alcança
  (`kbProbe` devolve `ball`), e o toque é distinguido do arrasto por `kbBallTap`.
* `web/index.html` — estilo da bolinha (26 px, branca, com o miolo escuro).

## 5. Barra de brilho das janelinhas: removida

`windows.js` não cria mais o `input range` de brilho embaixo de cada janela (nem o listener). Fica só
o contêiner vazio `win-brightness-off` (`display:none`) para os seletores antigos não quebrarem. O
brilho continua existindo **uma vez**, no painel de configurações do sistema.

## 6. “Apache (V)” no nome: removido

A bio já não tinha o `(V)` desde a rodada anterior; agora os comentários e a entrada de Updates
também não falam mais nele. Na tela ficam **nome cinza + selo vermelho desenhado + a frase**.

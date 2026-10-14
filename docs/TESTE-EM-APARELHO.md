# Teste no aparelho — roteiro curto (rodada 6)

Nada desta funcionalidade foi executado em aparelho real: não há JDK, SDK, `adb` nem aparelho no
ambiente onde o código foi escrito. O que existe é isto — um roteiro para rodar no celular e no
visor, na ordem, com o resultado esperado em cada passo. Onde está **anota isso**, é o que eu preciso
saber se der errado. O log de tudo sai com `adb logcat -s NextVR:W` (abra um terminal com isso rodando
antes de começar).

A rodada 6 corrige o sintoma que você relatou agora ("a maioria dos apps continua abrindo com a parte
de baixo cortada"): o **formato** da janela já era o do app, mas a **tela em que o app roda** era
dimensionada a partir da janela (585x1040 / 1040x585 com densidade 320 = uma tela de **292x520 dp**,
contra os 411x914 dp deste tipo de celular). O app era desenhado numa tela 350 dp mais baixa do que
aquela para a qual foi feito, e tudo que ele fixa no rodapé ficava fora. Agora o app roda numa tela do
tamanho do aparelho, no formato pedido, e a janela é essa tela flutuando. O que mudou, onde olhar e o que deve acontecer está
em `docs/ANDROID-APP-WINDOWS.md` (seção "Rodada 4"); aqui está só o que fazer com o aparelho na mão.

## O que instalar

```bash
git fetch --force origin apk-dist:refs/remotes/origin/apk-dist
git show origin/apk-dist:dist/app-debug.apk > app-debug.apk
git show origin/apk-dist:dist/build.txt        # de qual run e de qual commit veio, com md5 e tamanho
md5sum app-debug.apk                           # tem de bater com o md5 do build.txt
adb install -r app-debug.apk
```

Build de depuração **`versionCode` 7 / `versionName` 1.0.6** (a rodada 5 era `6` / `1.0.5`, a 4 era
`5` / `1.0.4` — se o aparelho mostrar 1.0.5 ou menos em *Configurações → Apps → NextVR*, o APK
instalado é o antigo, com a tela do app do tamanho da janela, que é o que cortava o rodapé). É o APK
que o próprio CI gerou, não uma build local.

**Anote antes de começar:** modelo do celular, versão do Android, se o Shizuku está instalado/parado/
autorizado, e se o serviço de acessibilidade do NextVR está ligado. Quase todo sintoma depende disso.

## 0. ADB e Shizuku: a verificação que não depende do visor

Faça isto **antes** de abrir a VR, porque é o que separa "o Shizuku não está funcionando" de "o
NextVR está escolhendo o caminho errado" — o erro que esta rodada corrige:

```bash
adb devices                       # o aparelho aparece como "device" (não "unauthorized")
adb shell id                      # uid=2000(shell) — a mesma identidade que o Shizuku empresta
adb shell getprop ro.build.version.sdk
adb shell pm list packages | grep -i shizuku     # moe.shizuku.privileged.api / moe.shizuku.manager
# iniciar o Shizuku (uma vez por reboot; o comando é o que o próprio app mostra):
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
adb shell pidof moe.shizuku.privileged.api       # o Shizuku está de pé?
```

Depois, **no visor**: menu de aplicações → **Testar Shizuku agora**. Ele roda o caminho
privilegiado inteiro dentro do serviço shell e devolve, no Diagnóstico, uma linha `device self-test`
com `"ok": true` e:

| Campo | O que precisa dizer |
| --- | --- |
| `uid` | `2000` (shell) |
| `identity` | algo como `uid=2000(shell) gid=2000(shell) groups=...` |
| `shellContext` | `true` (o `DisplayManagerService` rejeita um `packageName` que não seja do chamador) |
| `am` / `dumpsys` | `true` / `true` |
| `display` | `created and released` — é o portão da funcionalidade, e um display de teste 64×64 privado não aparece na tela |
| `injector`, `setDisplayId`, `injectInputEvent` | `InputManagerGlobal` (ou `InputManager`), `true`, `true` |
| `launcherQuery` | `com.android.settings/.Settings$...` |

**Anota isso:** o JSON inteiro, se `"ok"` vier `false`. Ele diz exatamente qual passo falhou — e é a
mesma verificação que eu faria por ADB, sem você precisar de computador.

## A. Com Shizuku autorizado (o caminho que estava quebrado)

1. Shizuku rodando e o NextVR autorizado nele (uma vez: o diálogo aparece no visor). Abra a VR e
   toque no **lançador de 9 pontos** na dock.
   → esperado: os apps instalados estão **na mesma grade**, com o ícone real de cada um; **não
   existe** menu “Apps do Android” separado nem botão “Espelhar” em tile nenhum; e a **linha de
   estado do Shizuku não aparece** (com a rota hospedada funcionando não há nada a avisar).
   **Anota isso:** se a linha aparecer, copie o **Diagnóstico** — ele traz a rota, o estado e o
   motivo.
2. Toque no tile de um app simples (calculadora, relógio, notas).
   → esperado: **nenhum diálogo de captura**, o app **não aparece na tela do celular** e a janela
   abre com o selo **APP DO ANDROID**, com a interface dele viva na janela. Enquanto o serviço shell
   sobe, a janela mostra “Conectando ao serviço shell do Shizuku (é só uma vez)…” em vez de um
   spinner mudo.
   **Anota isso:** se o diálogo de captura aparecer, é exatamente o bug desta rodada — abra o
   **Diagnóstico** e mande o texto (nele estão `route`, `bindError` e o erro do `am start`).
3. Toque com a mão dentro da janela → o app reage. Botões da barra: voltar, início, recentes, teclado.
4. Minimize, mexa na VR, restaure, redimensione e feche (o detalhe está nas seções C e D).
5. Abra um app que costuma falhar (banco com atestação, app que só roda na tela principal).
   → esperado: a janela diz o motivo devolvido pelo sistema, e o **Diagnóstico** mostra
   `display report:` com o display onde o shell viu o app (`Display #0` = a tela do celular; outro
   número = o display da janela). É essa a resposta para "o app foi parar no celular?" sem adivinhar.

## B. Sem Shizuku nenhum (o caminho sem privilégio, que continua valendo)

1. Shizuku parado (ou nem instalado). Menu de aplicações → um app da grade.
   → esperado: a linha de estado aparece e diz, com estas palavras, que **o app abre na tela do
   celular e a janela mostra a tela com a sua autorização de captura**. É o único caminho que resta,
   e ele é apresentado como o que é.
2. Toque no tile de um app simples.
   → esperado, nesta ordem: o app **abre na tela do celular**; o diálogo de captura do Android
   aparece (no Android 14+ ele oferece escolher **aquele** app); a janela abre com o nome do app na
   barra e o selo **ESPELHO DA TELA**, e a imagem está viva.
3. Com a mão, toque no botão do app dentro da janela.
   → esperado: o app do celular reage (o toque vai pela acessibilidade; sem ela a imagem aparece e o
   toque não chega — a linha de estado diz isso).
4. Feche a janela pelo ✕.
   → esperado: a notificação “O NextVR está capturando a tela do celular” sai da barra junto. Se ela
   ficar, **anota isso**.
5. Negue o diálogo de captura de propósito.
   → esperado: a janela diz que a captura não foi autorizada e oferece **“Abrir no celular”**. Nada de
   janela preta sem explicação.
6. Se a captura falhar por causa do serviço em primeiro plano, a janela diz **por que** ele não subiu
   (`capture service:` no Diagnóstico) em vez de mostrar o texto do `MediaProjection` cortado.

## B2. O rodapé não é mais cortado (rodada 6 — o item que importa)

1. Antes de qualquer app, abra o **Diagnóstico** (menu de aplicações → botão *Diagnóstico*).
   → esperado: em cada sessão aberta, uma linha `app <pacote>: shape=... canvas=1080x2400@<dpi>
   (<largura>x<altura>dp, running)`. Os **dp** têm de ser iguais (ou quase) aos que o aparelho usa
   na tela do celular: em um 1080x2400 @ 420, **411x914 dp**. Se aparecer algo como *292x520dp*, o APK
   instalado é o antigo. **Anota a linha.**
2. Abra um app que você sabe que **fixa o rodapé** — Instagram, um banco, WhatsApp, YouTube (qualquer
   um com barra de abas embaixo) e, de preferência, **o mesmo emulador de PS3 que cortava a metade de
   baixo**.
   → esperado: a janela nasce **retrato** (mais alta que larga) e o app aparece **inteiro**, com a
   barra de baixo visível, sem a faixa preta no meio e **sem a metade inferior faltando**. O app é
   desenhado na mesma caixa em dp que ele tem no celular; nada do layout dele fica fora.
   **Anota isso:** o nome do app e o que apareceu no lugar do rodapé cortado.
3. Toque com a mão no botão do **rodapé** do app (a aba de baixo, o botão central, o que houver).
   → esperado: o app reage e navega. É o teste que prova que o que está na tela é o app inteiro, e não
   só a parte de cima.
4. Abra um app **paisagem** (um jogo, o emulador) e, se ele tiver menu no rodapé ou no canto inferior,
   confira.
   → esperado: janela larga (2400x1080 neste aparelho) e o app inteiro; se ele desenhar um quadro de
   outra proporção, **as barras são decisão dele** (compat scaling do Android) e o `fixed` do
   Diagnóstico diz se ele declarou que não redimensiona.
5. Com a mão, toque em **girar** (ícone circular, na barra do app, à direita do teclado).
   → esperado: a janela troca de formato **na hora** (ela é a mesma tela girada), o app é reiniciado no
   novo formato em ~1 s e volta a **preencher** a janela — agora com o layout de paisagem do próprio
   app, que é o que aconteceria se você girasse o celular.
6. Feche a janela e abra o **mesmo** app de novo.
   → esperado: abre **girado**, como você deixou (a escolha é guardada por app).
7. Depois de girar, toque com a mão num botão do app (um do rodapé, se houver).
   → esperado: o toque cai exatamente onde você mirou — o encaixe da imagem, o recorte do shader e o
   toque saem todos do mesmo retângulo.
8. Abra um vídeo em **tela cheia** (o app pede outra orientação sozinho).
   → esperado: ou o display gira (a imagem acompanha de pé e a janela continua certa) ou o app é
   letterboxado pelo sistema — as duas são respostas do Android. **Anota o campo `display state:`** do
   Diagnóstico: é ele que diz qual das duas aconteceu, aparelho por aparelho.

## C. Arrastar e redimensionar a janela (o que mais quebrava)

> Mudou na rodada 6: arrastar a janela **não** redimensiona mais a tela do app — só a janela. A tela
> do app tem o tamanho do aparelho para sempre, do jeito que a PhoneXR faz; mudar a tela de um app em
> execução é a mesma coisa que girar o celular com o app aberto, e ele não deve ser obrigado a isso
> por causa de um gesto nosso.

1. Com um app hospedado aberto, arraste a alça da janela para deixá-la bem mais larga e depois bem
   mais alta.
   → esperado: a **imagem continua inteira** (sem corte) e o app **não reinicia**. Como a janela deixa
   de ter o formato da tela do app, aparecem tarjas **centradas** — a imagem é encaixada, nunca
   esticada, e o app continua desenhado na tela dele.
2. **O teste que importa:** depois de redimensionar, toque com a mão no **mesmo botão** que você tocou
   antes.
   → esperado: o toque acerta o mesmo botão. Um toque na **tarja** (fora da imagem) não deve fazer nada
   — ele é descartado de propósito e nunca chega ao app.
3. Minimize, restaure e redimensione de novo: continua funcionando.

## D. Rotação

1. Abra um app que só funciona em retrato (Instagram, banco — o que você tiver) numa janela.
   → esperado: o app roda girado dentro do display, a imagem é reajustada e o toque acompanha.
2. Toque nos **quatro cantos** da imagem, um por um.
   → esperado: cada toque cai no canto onde você mirou. **Anota isso:** qual canto errou.

## E. Shizuku caindo e voltando (o ciclo de vida desta rodada)

1. Com janelas de app abertas, pare o Shizuku (reinicie o celular, ou pare pelo próprio app).
2. Volte para a VR.
   → esperado: as janelas **não ficam pretas**; a linha de estado volta dizendo que o Shizuku está
   parado e qual passo falta.
3. Inicie o Shizuku de novo (item 0) e autorize, se ele pedir.
   → esperado: a linha de estado **desaparece** e o próximo toque num tile abre **hospedado**, sem
   diálogo de captura. Antes desta rodada, este era o momento em que o app passava a ir para o
   celular para sempre: o estado transitório do bind cancelava o próprio bind.
   **Anota isso:** o `Diagnóstico` (rota, `bound`, `binding`, `bindError`) no momento em que falhar.
4. Com o Shizuku já autorizado, toque num tile **imediatamente** depois de reabrir a VR (é o instante
   em que o serviço ainda está subindo): a janela deve abrir em alguns segundos com o selo **APP DO
   ANDROID**, e **nunca** com o diálogo de captura.

## F. Erro, e como o app explica (o que a rodada 4 acrescentou)

1. Em qualquer falha, toque em **Diagnóstico** na linha de estado do menu de aplicações (o bloco de
   texto aparece e, tocando nele, vai para a área de transferência).
   → esperado, nos campos: `route` (`hosted` / `permission` / `capture`), `shizuku` (`ready`,
   `rebind`, `ask`, `start`…), `shizuku bound`, `shizuku reason`, `launch backend`
   (`am start --display`), `launch error` (o texto do `am`), `display report`, `capture service`,
   `device self-test`.
2. **Me manda esse bloco copiado** junto com o passo do roteiro. Ele existe exatamente para não
   depender de adivinhação: cada linha é a resposta do sistema, não uma suposição do app.

## G. Anti-captura e anticheat (o teste da sua preocupação)

1. Abra um app com `FLAG_SECURE` (banco, streaming com DRM) numa janela de **captura** (sem Shizuku,
   para forçar esse caminho).
   → esperado: a área aparece **preta**. É a proteção do sistema funcionando e é respeitada — não é
   bug e não deve ser contornado.
2. Abra um jogo com anticheat **numa janela hospedada** (com Shizuku) e jogue alguns minutos,
   minimizando/restaurando no meio.
   → esperado: o jogo roda normalmente; nenhuma tela de aviso do anticheat. O NextVR não injeta
   código, não altera APK e não desenha sobre o app — o app roda íntegro num display a mais.
   **Anota isso:** se **qualquer** aviso aparecer, com o nome do jogo e o texto — nada será
   "contornado", vai ser documentado e o caminho revisto.

## H. Android antigo (se você tiver um aparelho com Android 8, 9 ou 10)

1. Instale e abra o menu de aplicações.
   → esperado: em Android 8/9/10 a **captura (ESPELHO DA TELA) funciona** e o app hospedado **não** —
   o serviço shell depende do *user service* do Shizuku, que existe a partir do Android 11, e a linha
   de estado diz que a versão é antiga para isso em vez de tentar para sempre. Antes do Android 14 a
   captura é a **tela inteira**: o app é trazido para a frente antes do diálogo, mas o que a janela
   mostra é a tela do celular.
2. Faça o teste B (sem Shizuku) nesse aparelho: é o caso “celular novo sem Shizuku”.
3. Se o aparelho não tiver a chave de “um app só” no diálogo de captura, é esperado — ela é do
   Android 14 em diante. **Anota a versão** para eu deixar isso escrito nas limitações.

## Quando algo falhar, me manda

* o **passo** (ex.: C2), o **modelo** e a **versão do Android**;
* o bloco do **Diagnóstico** (é o mais útil: rota, estado do Shizuku, erro do `am start`, onde o shell
  viu o app, self-test do aparelho);
* o que apareceu — print ou os dizeres exatos da janela/notificação;
* a saída de `adb logcat -s NextVR:W` desse momento.

## Sintoma → causa provável

| Sintoma | Leitura mais provável |
| --- | --- |
| App abre no celular **e** pede captura, com Shizuku autorizado | era o bug da rodada 4 (rota decidida no instante errado); se ainda acontecer, mande o Diagnóstico: `route` dirá `capture` e `shizuku` dirá por quê |
| Janela fica em “Conectando ao serviço shell” e não sai disso | `bindError`/`service self-test` no Diagnóstico: o serviço shell não subiu (Shizuku parado no meio, ou recusou o user service) |
| `display: SecurityException` no self-test | o Shizuku não está com a identidade de shell (reinicie pelo `start.sh` e autorize o NextVR) |
| Imagem preta em app de banco/DRM | `FLAG_SECURE` do próprio app: proteção do sistema, não é bug |
| Imagem viva e toque sem efeito | serviço de acessibilidade desligado (só no caminho de captura) |
| Toque acertando ao lado depois de redimensionar | me mande o caso, é o item C2 |
| Janela vazia, “abriu” sem interface | `display report:` no Diagnóstico diz em qual display o shell viu o app |
| App retrato aparecendo numa faixa no meio da janela | era o formato errado da janela (rodada 5); se ainda acontecer, mande o passo, o app e o `display state:` |
| App com o **rodapé cortado** (barra de baixo fora, diálogo cortado, teclado empurrando tudo) | era a tela do app do tamanho da janela (rodada 6). Mande a linha `app <pacote>: ... canvas=...dp` do Diagnóstico: se os dp forem menores que os do aparelho, o APK é antigo; se forem iguais, mande o app e a captura |
| Depois de girar, a imagem não preenche | a tela do app e o formato da janela discordaram: mande o `display state:` e a linha `canvas=` do Diagnóstico junto do passo |
| Toque deslocado **depois de girar** | é o par imagem/toque do item B2.5 — diga qual canto errou |
| Biblioteca com poucos apps | visibilidade de pacotes: **este APK já corrige**; se persistir, me diga quais apps faltam |
| Captura não abre (Android 14) | notificação de captura bloqueada/negada, ou o diálogo foi negado (a janela oferece “Abrir no celular”); `capture service:` no Diagnóstico diz se o serviço em primeiro plano subiu |
| Tile sem ícone (só as iniciais) | ícone não pôde ser lido pelo PackageManager; o tile mostra as iniciais de propósito — anota o nome do app |
| Tudo preto e nada responde depois de reiniciar o celular | Shizuku parado (comportamento dele): reabrir o passo indicado na linha de estado |

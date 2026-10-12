# Teste no aparelho — roteiro curto

Nada desta funcionalidade foi executado em aparelho real: não há JDK, SDK, `adb` nem aparelho no
ambiente onde o código foi escrito. O que existe é isto — um roteiro para você rodar no celular e no
visore, na ordem, com o resultado esperado em cada passo. Onde está **anota isso**, é o que eu preciso
saber se der errado. O log de tudo sai com `adb logcat -s NextVR:W` (abra um terminal com isso rodando
antes de começar).

## O que instalar

```bash
git fetch origin apk-dist
git show origin/apk-dist:dist/app-debug.apk > app-debug.apk
adb install -r app-debug.apk
```

Build de depuração, `versionCode` 4 / `versionName` 1.0.3, 48.021.716 bytes,
`md5 7671965e1a26406787d671858148fbad` (`md5sum app-debug.apk` para conferir). É o APK que o próprio
CI gerou do commit deste PR, não uma build local.

**Anote antes de começar:** modelo do celular, versão do Android, se o Shizuku está instalado/parado/
autorizado, e se o serviço de acessibilidade do NextVR está ligado. Quase todo sintoma depende disso.

## A. Sem Shizuku nenhum (o caminho novo desta rodada)

1. Shizuku parado (ou nem instalado). Abra a VR e toque no ícone de celular na dock (**Apps do
   Android**).
   → esperado: a linha do Shizuku explica o que falta, e **cada tile tem o botão “Espelhar”**.
2. Toque em **Espelhar** num app simples (calculadora, relógio, notas — evite banco e DRM por
   enquanto).
   → esperado, nesta ordem: o app **abre na tela do celular**; o diálogo de captura do Android
   aparece; no Android 14+ ele oferece para escolher **aquele** app; a janela abre com o **nome do
   app** na barra e o selo **ESPELHO DA TELA**; a imagem está viva (relógio andando, se for o
   relógio).
   **Anota isso:** o que apareceu de diferente nessa ordem, e a mensagem exata se o diálogo não veio.
3. Com a mão, toque no botão do app dentro da janela.
   → esperado: o app do celular reage (o toque é encaminhado pela acessibilidade).
   Se nada acontecer, confira se a acessibilidade está ligada (Configurações → Acessibilidade →
   NextVR). **Anota isso:** se a imagem veio e o toque não, é exatamente esse o sintoma.
4. Feche a janela pelo ✕.
   → esperado: a **notificação “O NextVR está espelhando a tela do celular” sai da barra** junto.
   Se ela ficar, é bug: **anota isso**.
5. De novo no mesmo tile, com o app que você quer **já aberto no celular**: use “Espelhar” e confirme
   que a janela mostra o que está na tela.

## B. Com Shizuku (o caminho hospedado)

1. Inicie o Shizuku (`adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh`) e
   autorize o NextVR no app do Shizuku. Volte para a VR.
   → esperado: a linha do Shizuku fica verde e os tiles perdem o botão “Espelhar”.
2. Abra um app pelo tile.
   → esperado: janela com selo **APP DO ANDROID**, a interface dele desenhada na janela
   (não é captura de tela: é o app rodando num display próprio), e o app **não** aparece na tela do
   celular.
   **Anota isso:** nome do app, se abriu, e o que a janela mostrou se não abriu.
3. Toque com a mão dentro da janela → o app reage. Os botões da barra da janela: voltar, início,
   recentes, teclado.
4. Minimize, mexa na VR, restaure.
   → esperado: minimizado o app continua rodando e **para de produzir quadros** (não é janela preta
   atualizando); restaurar religa a mesma superfície, sem recomeçar o app.
5. Feche a janela.
   → esperado: o app é encerrado (ele não continua rodando em segundo plano).

## C. Redimensionar (o que mais quebrava)

1. Com um app hospedado aberto, arraste a alça da janela para deixá-la bem mais larga e depois bem
   mais alta (é preciso passar de ~12% para o display ser realmente redimensionado).
   → esperado: a **imagem continua preenchendo a janela** (sem tarja preta e sem corte) e o app
   **não reinicia**.
2. **O teste que importa:** depois de redimensionar, toque com a mão no **mesmo botão** que você
   tocou antes.
   → esperado: o toque acerta o mesmo botão. Se acertar “deslocado”, a imagem e o toque
   discordaram do tamanho do display — **anota isso**, é o bug que esta rodada corrige.
3. Se um app recusar o novo tamanho (jogo, câmera, app que fixa orientação), a janela deve avisar que
   **manteve o tamanho** e continuar funcionando com a imagem encaixada, e o toque deve continuar
   certo.
4. Minimize, restaure e redimensione de novo: continua funcionando.

## D. Rotação

1. Abra um app que só funciona em retrato (Instagram, banco — o que você tiver) numa janela.
   → esperado: o app roda girado dentro do display, a imagem é reajustada e o toque acompanha.
2. Toque nos **quatro cantos** da imagem, um por um.
   → esperado: cada toque cai no canto onde você mirou. **Anota isso:** qual canto errou.

## E. Shizuku caindo no meio do uso

1. Com janelas de app abertas, pare o Shizuku (reinicie o celular, ou pare pelo próprio app).
2. Volte para a VR.
   → esperado: uma mensagem explica e as janelas **não ficam pretas**; a linha do Shizuku volta para
   “está parado” e aponta o passo que falta.
3. Toque de novo num tile: a lista continua utilizável, o tile que falhou **reabre** pelo próprio
   tile (não fica inerte) e, sem Shizuku, o caminho oferecido é o “Espelhar”.

## F. Um app que falhou não trava a lista

1. Abra um app que provavelmente vai falhar (banco com atestação, app que exige tela principal).
   → esperado: a janela mostra o motivo devolvido pelo sistema, em vez de ficar preta ou travada.
2. Toque no **mesmo** tile de novo.
   → esperado: ele tenta abrir outra vez.

## G. Anti-captura e anticheat (o teste da sua preocupação)

1. Abra um app com `FLAG_SECURE` (banco, streaming com DRM) numa janela de **espelho**.
   → esperado: a área aparece **preta**. Isso é a proteção do sistema funcionando e é respeitado —
   não é bug e não deve ser contornado.
2. Se você quiser, abra um jogo com anticheat **numa janela hospedada** (com Shizuku) e jogue alguns
   minutos, minimizando/restaurando no meio.
   → esperado: o jogo roda normalmente; nenhuma tela de aviso do anticheat. O NextVR não injeta
   código, não altera APK e não desenha sobre o app — o app roda íntegro num display a mais.
   **Anota isso:** se **qualquer** aviso aparecer, com o nome do jogo e o texto — nada será
   "contornado", vai ser documentado e o caminho revisto.

## H. Android antigo (se você tiver um aparelho com Android 8, 9 ou 10)

1. Instale e abra a biblioteca.
   → esperado: em Android 8/9/10 o **espelho funciona** e o app hospedado **não** — a linha do
   Shizuku deve explicar que a versão do Android é antiga para o serviço (o Shizuku só tem *user
   service* a partir do Android 11), em vez de ficar tentando para sempre.
2. Faça o teste A (sem Shizuku) nesse aparelho: é o caso de uso “celular novo sem Shizuku” da sua
   pergunta original, um Android por vez.

## Quando algo falhar, me manda

* o **passo** (ex.: C2), o **modelo** e a **versão do Android**;
* o que apareceu — print ou os dizeres exatos da janela/notificação;
* a saída de `adb logcat -s NextVR:W` desse momento (é tudo que o app registra, e cada mensagem vem
  do caminho que a produziu).

## Sintoma → causa provável

| Sintoma | Leitura mais provável |
| --- | --- |
| Imagem preta em app de banco/DRM | `FLAG_SECURE` do próprio app: proteção do sistema, não é bug |
| Imagem viva e toque sem efeito | serviço de acessibilidade desligado ou sem a permissão de gestos |
| Toque acertando ao lado depois de redimensionar | é o bug desta rodada — me mande o caso, é o item C2 |
| Janela vazia, “abriu” sem interface | app recusou o display virtual (ele devolve o motivo na janela) |
| Biblioteca com poucos apps | visibilidade de pacotes: **este APK já corrige**; se persistir, é outro caso, me diga quais apps faltam |
| Espelho não abre no Android 14 | notificação de captura bloqueada/negada nas configurações do app |
| Tudo preto e nada responde depois de reiniciar o celular | Shizuku parado (comportamento dele): reabrir o passo indicado na biblioteca |

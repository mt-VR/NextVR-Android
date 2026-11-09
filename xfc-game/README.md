# XFC — o jogo de futebol da XF Esports

Este diretório é o **XFC**: um jogo de futebol (não é VR) que vive dentro do
repositório NextVR como um subprojeto isolado. Ele não toca em nada do app de
realidade virtual — é uma pasta à parte, com os seus próprios assets, estilos e
testes.

O jogo é **deitado (paisagem)**, como nas referências do FC: as telas são
desenhadas num palco fixo de **1280x720** e escaladas pela JS para caber na
tela. Num celular deitado (20:9) o palco fica mais largo que 1280, então as
telas ganham espaço em vez de ficarem apertadas, e o app Android trava a
rotação em paisagem (`sensorLandscape`).

O XFC já reúne as telas principais e a partida de futebol em 3D:

1. **Intro e abertura** — marca XF Esports/XFC e a arte do atleta; Entrar leva ao menu.
2. **Menu inicial** — jogador em destaque por imagem estática (os jogadores controláveis continuam sendo modelos 3D), com atalhos para Play Modes, configurações e personalização.
3. **Personalização** — grade de oito opções para perfil, configurações, online, tempo de jogo, criação de atleta, elenco e trilha sonora; preferências de perfil ficam salvas localmente.
4. **Modos de jogo** — a Copa do Mundo (edição ao vivo e 2027), World Cup Kick Off e partidas rápidas estão acessíveis no seletor.
5. **Kick Off / Classic Match** — escolha de clubes, estádio, uniformes e elenco; o fluxo existente de blusas e gestão de equipe continua disponível.
6. **Partida 3D** — jogo em WebGL com estádio, torcida, jogadores, controles touch e HUD. O botão **TROCAR** muda o atleta sob controle; passe comum tem assistência de direção, enquanto **ENFIADA** mira um corredor à frente com bola rasteira (cruzamentos continuam sendo levantados).
7. **Comemoração de gol** — câmera fecha no autor, acompanha a corrida e destaca seu nome na chamada de gol e na HUD.

Os controles touch de PASSE e CORRER trocaram de posição, foram ampliados e aproximados; o joystick virtual permanece ancorado no mesmo ponto. Os modelos de atleta mantêm os personagens 3D existentes com anatomia de tronco e braços mais definida. A arquibancada procedural recebe torcida e bandeiras de seleção/clube.

Por enquanto existem **vinte e um times**. FC Barcelona e Real Madrid (com os
retratos reais dos jogadores), Ibis Esporte e Paraná Clube mantêm os elencos
com nomes reais; os outros catorze clubes (Aston Villa, Brentford,
Panathinaikos, River Plate, Levante, Huddersfield Town, Eintracht Frankfurt,
Queens Park Rangers, Wrexham, Sheffield United, Northampton Town, Rotherham
United, Wycombe Wanderers e RKC Waalwijk) entram com elencos gerados a partir
de pools de nomes de cada país.

## Estádios

As sete artes de estádio enviadas pelo estúdio viraram os palcos oficiais do
jogo (as repetidas foram descartadas). O estádio escolhido veste o pré-jogo
(tela cheia) e a cúpula do 3D:

| # | Nome | Arte |
|---|------|------|
| 1 | Coloseu Dourado | estadio-aereo.jpg |
| 2 | Arena do Sol | estadio-por-do-sol.jpg |
| 3 | Coloseu do Anoitecer | estadio-aereo-alto.jpg |
| 4 | Estádio da Vila | estadio-entardecer.jpg |
| 5 | Arena Rubro-Negra | estadio-rubro-negro.jpg |
| 6 | Arena Vermelha | estadio-arena-vermelha.jpg |
| 7 | Estádio Noturno | estadio-noturno.jpg |

No confronto e nas Partidas Rápidas, o próprio estádio é o botão de entrar;
no pré-jogo, as setas laterais trocam o palco antes de apitar.

Todos têm **escudo** e **três blusas** (principal, reserva e terceiro). As
blusas continuam sendo desenhadas em SVG pelo próprio jogo a partir das cores
dos escudos — nítidas em qualquer tela e sem pesar o pacote. Para os clubes
cuja foto de uniforme veio no **pacote de imagens do XFC**, a foto real do
jogador de corpo inteiro aparece na tela de escolher blusas e o recorte da
camisa vira a miniatura do uniforme na tela de escolha de times.


## Como rodar

```bash
# a partir da raiz do repositório
node xfc-game/serve.mjs            # http://127.0.0.1:8080
node xfc-game/serve.mjs --port 9000 --host 0.0.0.0
```

Não há build: o jogo é HTML + CSS + JavaScript (módulos ES) puro, servido
estaticamente. Abrir `index.html` direto pelo `file://` não roda os módulos
ES — por isso o `index.html` tem uma rede de segurança: se o módulo principal
não subir, ele injeta o `app.bundle.js` (o jogo empacotado num único script
clássico, que o CI gera com esbuild e inclui no zip). Na falta do bundle, a
página mostra as instruções em vez de ficar numa tela azul.

## App Android (APK)

`xfc-game/android/` é uma casca Android que embute o jogo no APK e o roda
offline em um WebView (os arquivos são servidos sob a origem virtual
`https://xfc.local/`, porque módulos ES não funcionam em `file://`). O ícone
do aplicativo é a arte oficial do XFC (Neymar Jr. com a camisa da seleção, em
`res/mipmap-*`, adaptativo para Android 8+).

```bash
# build isolado: não interfere no build do NextVR
./gradlew -p xfc-game/android assembleRelease
# → xfc-game/android/app/build/outputs/apk/release/app-release.apk
```

O workflow [`xfc-apk.yml`](../.github/workflows/xfc-apk.yml) faz esse build no
CI e publica:

| Arquivo | Link |
| --- | --- |
| APK | `https://raw.githubusercontent.com/mt-VR/NextVR-Android/xfc-dist/dist/xfc.apk` |
| Jogo em zip | `https://raw.githubusercontent.com/mt-VR/NextVR-Android/xfc-dist/dist/xfc-game.zip` |

A release [`xfc-menu-v1`](https://github.com/mt-VR/NextVR-Android/releases/tag/xfc-menu-v1)
também tem os dois arquivos anexados.

## Controles

| Ação | Teclado | Mouse |
| --- | --- | --- |
| Navegar | setas | clicar nos itens |
| Trocar de blusa | `←` `→` (com `Tab` entre HOME e AWAY) | setas do carrossel |
| Confirmar | `Enter` | clicar |
| Voltar | `Esc` / `Backspace` | — |

## Estrutura

```
xfc-game/
├── index.html            casca da página
├── serve.mjs             servidor estático (também usado pelos testes)
├── styles/               base.css (palco, tipografia, botões) e screens.css (telas)
├── src/
│   ├── main.js           roteador de telas + teclado global
│   ├── state.js          perfil, XP, seleção de times e blusas
│   ├── data/teams.js     os dezoito clubes, elencos, médias e formação
│   ├── data/kits.js      as blusas (SVG) de cada clube + as fotos do pacote
│   ├── ui/               helpers de DOM, as marcas e as bandeiras (SVG)
│   └── screens/          intro, menu, kickoff, kits, squad, match
├── vendor/               three.js r169 (offline; entra no APK e no zip — sem ele o jogo não sobe)
├── assets/
│   ├── bg/               fundos da intro e do menu
│   ├── brand/            ícones da marca
│   ├── crests/           escudos dos clubes
│   ├── fonts/            Inter (OFL)
│   └── players/          retratos dos jogadores e fotos de uniforme (kits/)
├── tools/build-bundle.mjs gera o app.bundle.js (IIFE) usado no zip para o file://
└── tools/screenshots.mjs captura das telas (tela grande e celular deitado)
```

O `app.bundle.js` não é commitado: quem o gera é o CI (passo “Build the
offline bundle” do workflow `xfc-apk.yml`), e ele entra apenas no zip do jogo.
Rodando `node xfc-game/tools/build-bundle.mjs` localmente, o arquivo aparece
na pasta do jogo (e é servido pelo `serve.mjs` como qualquer outro arquivo).

## Testes

```bash
npm test                       # roda a suíte inteira do repositório
node --test tests/xfc-game.test.mjs
```

Os testes do XFC verificam os dados dos elencos (times,Notas, retratos no
disco) e percorrem as telas no Chromium empacotado do projeto. Se o Chromium
não puder rodar na máquina, o teste de interface é pulado — os de dados
continuam valendo.

## Créditos das imagens

Retratos, escudos e fotos de uniforme têm origem externa e estão creditados
em [`assets/players/CREDITS.md`](assets/players/CREDITS.md) e
[`assets/crests/CREDITS.md`](assets/crests/CREDITS.md).

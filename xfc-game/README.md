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

Nesta primeira etapa o jogo tem **o menu**:

1. **Intro** — selo circular da XF Esports + logotipo XFC lado a lado sobre o
   fundo geométrico azul/verde.
2. **Menu principal** — marca no canto superior esquerdo, barra de XP à direita,
   lista de modos na coluna esquerda (KICK OFF liberado, os demais apagados),
   arte do jogador no gramado à direita, título *Dive straight into the action*
   e o botão *Enter Kick Off*.
3. **Kick Off / Classic Match** — colunas HOME e AWAY com país, escudo grande,
   estrelas, ATT/MID/DEF e liga; no meio, Advantage Settings, Live Form e
   RANDOMISE; “HOME” e “AWAY” na vertical nas pontas.
4. **Elenco (Team Management)** — abas no topo, o campo com a formação 4-3-3
   (retrato + nota + nome em cada posição), o banco de reservas embaixo e o
   painel do jogador à direita com OVR/POT, os seis atributos, idade, altura,
   papel, foco, pé, skill moves e weak foot.
5. **Preparação da partida** — mostra o confronto e avisa que as partidas,
   estádios e campeonato chegam na próxima etapa.

Por enquanto existem **dois times: FC Barcelona e Real Madrid**, com os
elenos, os escudos e os retratos dos jogadores.

## Como rodar

```bash
# a partir da raiz do repositório
node xfc-game/serve.mjs            # http://127.0.0.1:8080
node xfc-game/serve.mjs --port 9000 --host 0.0.0.0
```

Não há build: o jogo é HTML + CSS + JavaScript (módulos ES) puro, servido
estaticamente. Abrir `index.html` direto pelo `file://` não funciona — os
módulos ES exigem HTTP.

## App Android (APK)

`xfc-game/android/` é uma casca Android que embute o jogo no APK e o roda
offline em um WebView (os arquivos são servidos sob a origem virtual
`https://xfc.local/`, porque módulos ES não funcionam em `file://`).

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
│   ├── state.js          perfil, XP e seleção de times
│   ├── data/teams.js     os dois clubes, elencos, médias e formação
│   ├── ui/               helpers de DOM e as marcas (SVG)
│   └── screens/          intro, menu, kickoff, squad, match
├── assets/
│   ├── bg/               fundos da intro e do menu
│   ├── brand/            ícones da marca
│   ├── crests/           escudos dos clubes
│   ├── fonts/            Inter (OFL)
│   └── players/          retratos dos jogadores
└── tools/screenshots.mjs captura das telas (tela grande e celular deitado)
```

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

Retratos e escudos têm origem externa e estão creditados em
[`assets/players/CREDITS.md`](assets/players/CREDITS.md).

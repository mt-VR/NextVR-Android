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
3. **Kick Off / Classic Match (Select Teams)** — estádio escuro com o painel
   verde grande no centro; em cada lado, a barra `Men's Teams` / `Women's
   Teams`, a barra do país (nome no meio, bandeira na direita) e o cartão do
   clube: nome, **escudo em destaque** com as setas dos lados (que trocam de
   clube), estrelas, ATT/MID/DEF e a liga — tudo sobre um cartão levemente
   transparente, com o emblema da liga e o trocador de blusa logo abaixo. No
   meio, o interruptor de mando de campo, Advantage Settings, a mentalidade e
   o Live Form; “HOME” e “AWAY” na vertical nas pontas da tela.
4. **Escolher blusas (Select Kits)** — o jogador de cada lado veste o uniforme
   escolhido, o texto READY fica no centro e, ao lado, o carrossel com a blusa
   anterior, a atual e a próxima (as setas trocam; o Tab alterna entre HOME e
   AWAY).
5. **Elenco (Team Management)** — abas no topo, o campo com a formação 4-3-3
   (retrato + nota + nome em cada posição), o banco de reservas embaixo e o
   painel do jogador à direita com OVR/POT, os seis atributos, idade, altura,
   papel, foco, pé, skill moves e weak foot.
6. **Preparação da partida** — mostra o confronto; o botão *Iniciar partida*
   abre o jogo 3D de verdade, com os times e uniformes escolhidos.
7. **Partida 3D** — o mesmo jogo das Partidas Rápidas: câmera de transmissão
   **aérea inclinada, lateral** (como no EA Sports FC Mobile — não é atrás do
   jogador), acompanhando a bola e abraçando quase todo o gramado; placar de
   transmissão no canto superior esquerdo (escudo, sigla, gols e relógio);
   cartão do jogador controlado no canto inferior esquerdo (número, nome, OVR
   e condição) e o **adversário mais próximo da bola** no canto inferior
   direito; radar tático no centro inferior; quatro botões grandes
   (PASSE, CHUTE, DRIBLE e CORRER) com DESARME e TROCAR menores; **anel azul**
   sob o atleta controlado e **analógico fixo** no canto inferior esquerdo.
   Os bonecos de FC Barcelona e Real Madrid usam os **retratos reais** dos
   jogadores como rosto. Ao fim do tempo, a tela de resultado mostra os
   **escudos dos dois clubes** e o placar final sobre um fundo de estádio
   escuro, no estilo dos cartões de resultado.

Por enquanto existem **dezoito times**. FC Barcelona e Real Madrid (com os
retratos reais dos jogadores), Ibis Esporte e Paraná Clube mantêm os elencos
com nomes reais; os outros catorze clubes (Aston Villa, Brentford,
Panathinaikos, River Plate, Levante, Huddersfield Town, Eintracht Frankfurt,
Queens Park Rangers, Wrexham, Sheffield United, Northampton Town, Rotherham
United, Wycombe Wanderers e RKC Waalwijk) entram com elencos gerados a partir
de pools de nomes de cada país.

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

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
2. **Menu inicial** — hub de futebol com estádio em tela cheia, navegação vertical, Kick Off destacado, barra de XP e atalhos para os modos e configurações.
3. **Personalização** — grade de oito opções para perfil, configurações, online, tempo de jogo, criação de atleta, elenco e trilha sonora; preferências de perfil ficam salvas localmente.
4. **Modos e torneios** — carrossel com Copa do Mundo, UEFA Champions League, CONMEBOL Libertadores, final de copa, Home & Away, Best of Series, Copa América e partidas rápidas.
5. **Copa do Mundo jogável** — escolha uma das 32 seleções de 2022; o jogo sorteia aleatoriamente o grupo. Dispute os três jogos da fase de grupos; os dois primeiros de cada grupo avançam às oitavas, quartas, semifinais e final. A campanha termina se a seleção não se classificar.
6. **Kick Off / Classic Match** — escolha entre 22 clubes, incluindo Corinthians e Santos, selecione estádio e uniforme e consulte os elencos.
7. **Partida 3D** — jogo em WebGL com estádio, torcida, jogadores, controles touch e HUD. O botão **TROCAR** muda o atleta sob controle; passe comum tem assistência de direção, enquanto **ENFIADA** mira um corredor à frente com bola rasteira (cruzamentos continuam sendo levantados). Faltas fora da área geram tiros livres no ponto do incidente; dentro da área defensora, geram pênalti na marca penal. Antes de uma falta direta, o quadrado de contato ajusta curva e altura, e mostra a trajetória prevista e a chance de gol. Barreiras, goleiro e bola são posicionados antes da cobrança. Saídas e reposições humanas aguardam **PASSE**, **ENFIADA** ou **CHUTE**, sem comandos ofensivos automáticos.
8. **Comemoração de gol** — cinco estilos alternados; o autor e até dois companheiros próximos comemoram, enquanto a câmera acompanha a jogada e a HUD destaca o autor.

A simulação inclui árbitro 3D com apito, gestos, cartões e expulsão, contagem disciplinar na HUD e carrinho manual com colisão, recuperação e penalidades conforme a jogada. A IA não toma o controle do atleta humano nem executa carrinhos por ele. A câmera de transmissão enquadra a ação mais de perto e acompanha a bola suavemente; no centro de treino, a câmera Pro conserva o enquadramento e o yaw ao mover o atleta com o analógico. A iluminação em camadas do estádio combina luz principal quente e preenchimentos frios para um visual de transmissão. Os controles touch de PASSE e CORRER trocaram de posição, foram ampliados e aproximados; o botão CARRINHO é manual e o joystick virtual permanece ancorado no mesmo ponto. Todos os atletas usam o mesmo rig humanoide: tronco atlético, braços e pernas articulados, mãos com dedos e kit 3D, com tesselação reduzida no perfil móvel. A arquibancada procedural recebe torcida e bandeiras de seleção/clube.

O elenco reúne **22 clubes**: FC Barcelona e Real Madrid têm retratos de jogadores; Ibis Esporte, Paraná Clube, Flamengo, Palmeiras, Corinthians e Santos contam com elencos próprios (Corinthians e Santos usam os escudos enviados pelo usuário). Os outros catorze clubes (Aston Villa, Brentford, Panathinaikos, River Plate, Levante, Huddersfield Town, Eintracht Frankfurt, Queens Park Rangers, Wrexham, Sheffield United, Northampton Town, Rotherham United, Wycombe Wanderers e RKC Waalwijk) entram com elencos gerados a partir de pools de nomes de cada país. No Santos, Neymar tem um penteado 3D low-poly dedicado, inspirado na referência fornecida.

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

Não há build de desenvolvimento: o jogo é HTML + CSS + JavaScript (módulos ES)
puro, servido estaticamente. Abrir `index.html` direto pelo `file://` não roda
os módulos ES — por isso o `index.html` tem uma rede de segurança: se o módulo
principal não subir, ele injeta o `app.bundle.js` (um script clássico gerado
com esbuild). O bundle é mantido junto do código e regenerado no CI antes de
ser incluído no zip. Na falta dele, a página mostra instruções em vez de ficar
numa tela azul.

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
CI e publica uma release com download direto:

| Arquivo | Link |
| --- | --- |
| APK direto (Android) | `https://github.com/mt-VR/NextVR-Android/releases/download/xfc-gameplay-v0.5.6/xfc.apk` |
| Jogo em zip | `https://github.com/mt-VR/NextVR-Android/releases/download/xfc-gameplay-v0.5.6/xfc-game.zip` |

A release [`xfc-gameplay-v0.5.6`](https://github.com/mt-VR/NextVR-Android/releases/tag/xfc-gameplay-v0.5.6)
reúne o rig humanoide compartilhado e os modos anteriores, corrige o analógico do Treino Livre para seguir a câmera sem alterar partidas comuns, suaviza o acompanhamento da câmera e acrescenta animação de recepção. O perfil completo usa materiais com reflexos discretos para tecido e chuteiras; no celular, a tesselação e os materiais econômicos são mantidos. Também refina gramado, torcida, publicidade, fachadas e sombras para reduzir ruído visual (versionCode 12). O APK roda offline e o CI anexa o jogo web completo.

A versão [`xfc-gameplay-v0.5.5`](https://github.com/mt-VR/NextVR-Android/releases/tag/xfc-gameplay-v0.5.5)
continua disponível, assim como a release anterior [`xfc-gameplay-v0.5.4`](https://github.com/mt-VR/NextVR-Android/releases/tag/xfc-gameplay-v0.5.4).

## Controles

| Ação | Teclado | Mouse |
| --- | --- | --- |
| Navegar | setas | clicar nos itens |
| Trocar de blusa | `←` `→` (com `Tab` entre HOME e AWAY) | setas do carrossel |
| Confirmar | `Enter` | clicar |
| Voltar | `Esc` / `Backspace` | — |

Na partida: mova com `WASD` ou setas; `J`/`Espaço` passe, segure `K` ou `L` para carregar o chute, `E` para enfiada, `R` para drible, `F` para carrinho manual, `Tab`/`Q` para trocar de atleta e `Shift` para correr. No Android, as mesmas ações aparecem nos botões touch.

## Estrutura

```
xfc-game/
├── index.html            casca da página
├── serve.mjs             servidor estático (também usado pelos testes)
├── styles/               base.css (palco, tipografia, botões) e screens.css (telas)
├── src/
│   ├── main.js           roteador de telas + teclado global
│   ├── state.js          perfil, XP, seleção de times e blusas
│   ├── data/teams.js     os 22 clubes, elencos, médias e formação
│   ├── data/worldcup.js  seleções de 2022, grupos e progressão da campanha
│   ├── data/kits.js      as blusas (SVG) de cada clube + as fotos do pacote
│   ├── ui/               helpers de DOM, marcas e bandeiras (SVG)
│   └── screens/          intro, menu, modos, Copa, kickoff, partida
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

O `app.bundle.js` é mantido junto do código-fonte para suporte imediato ao
`file://`; o workflow `xfc-apk.yml` o regenera no passo “Build the offline
bundle” antes de anexar o zip. Para atualizá-lo localmente, rode
`node xfc-game/tools/build-bundle.mjs`; o servidor estático também o serve.

## Testes

```bash
npm test                       # roda a suíte inteira do repositório
node --test tests/xfc-game.test.mjs
```

Os testes do XFC verificam os dados dos elencos (times, notas, retratos no
disco) e percorrem as telas no Chromium empacotado do projeto. Se o Chromium
não puder rodar na máquina, o teste de interface é pulado — os de dados
continuam valendo.

## Créditos das imagens

Retratos, escudos e fotos de uniforme têm origem externa e estão creditados
em [`assets/players/CREDITS.md`](assets/players/CREDITS.md) e
[`assets/crests/CREDITS.md`](assets/crests/CREDITS.md).

### v0.5.25 — painéis UT, materiais e replay

[Notas e limites da versão](docs/v0.5.25.md). Quatro perfis gráficos persistidos,
mesmo corpo Micah, materiais/relva/gestos aprimorados e replay visual na pausa.
Os painéis enviados são as próprias telas UT, com hotspots e dados salvos.
Há retratos ainda ausentes; sem testes em aparelho físico ou promessa de nível AAA.

### v0.5.26 — direção, corrida e menu UT

[Diagnóstico e validação](docs/v0.5.26.md): orientação em baixa velocidade,
correção do gesto que desligava CORRER, assistência de passe sem frenagem
artificial, ajuste de rolamento/recepção e textos nítidos nos mesmos painéis UT.

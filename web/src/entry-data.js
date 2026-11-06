// Dados estáticos do menu de entrada NextVR v2.0.0.
export const ENTRY_VERSION = 'v2.0.0';
export const ENTRY_VERSION_ALPHA = 'v2.0.0 (Alpha)';
export const ENTRY_SUBTITLE = 'ENTRE EM OUTRO MUNDO';
export const ENTRY_TAGLINE_TOP = 'MAIS QUE UM APP';
export const ENTRY_TAGLINE_BOTTOM = 'UMA NOVA FORMA DE VER';

export const ENTRY_COLLABORATORS = Object.freeze([
  'NeyVR',
  'Faylan',
  'NanyGata',
  'JocaVR',
]);

export const ENTRY_VERIFIED_NAMES = Object.freeze([
  'NeyVR',
  'Faylan',
  'NanyGata',
  'JocaVR',
]);

export function isVerifiedProfileName(name) {
  const clean = String(name || '').trim().toLowerCase();
  if (!clean) return false;
  return ENTRY_VERIFIED_NAMES.some(v => v.toLowerCase() === clean);
}

export const ENTRY_COLLABORATOR_BIOS = Object.freeze({
  NeyVR: 'o Dono absoluto mais aurudo do planeta.',
  Faylan: 'o desenvolvedor mais sabido de todo o universo muita aura',
  NanyGata: '',
  JocaVR: 'o portador de jogos mais importante do planeta aurudo 67',
});

export const ENTRY_ABOUT_TITLE = 'NextVR — realidade aumentada';

export const ENTRY_ABOUT_PARAGRAPHS = Object.freeze([
  'O NextVR é um projeto de realidade virtual criado para transformar a maneira como você interage com o mundo digital usando apenas um celular e um VR Box.',
  'Nosso objetivo é aproximar a experiência de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.',
  'Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualização representa um novo passo rumo a uma experiência mais completa, interativa e acessível.',
  'NextVR — Mais que um app, uma nova forma de ver.',
]);

export const ENTRY_ABOUT_TEXT = [ENTRY_ABOUT_TITLE, ...ENTRY_ABOUT_PARAGRAPHS].join('\n\n');

export const ENTRY_UPDATES = Object.freeze([
  {
    id: 'cockpit-vr-planevr',
    tag: 'NOVO · COCKPIT VR (PLANEVR) NO NEXTVR: MENU PELAS MÃOS, VOO COM AS MÃOS DO JOGO',
    time: 'Agora',
    heading: 'O Cockpit VR Entrou no NextVR: Você Escolhe o Avião com as Mãos e o Jogo Assume a Câmera',
    desc: 'O COCKPIT VR (o jogo de avião do planeVR que você mandou) agora é um jogo do NextVR, na LOJA e na BIBLIOTECA. '
      + 'O MENU dele não é mais aquela tela cheia de "6DoF falso" e "Controle: NÃO": virou uma janela do NextVR, desenhada aqui dentro e operada pelo NOSSO rastreio de mão — aponte o feixe, faça a pinça e escolha entre os cinco aviões (Cessna 172, Super Tucano, F-22, F-117 e F-35), o modo (VR Cardboard ou tela única), o som, os gráficos leves, o assistente de voo, o motor ligado e o 6DoF do jogo (3DoF/6DoF e a força). '
      + 'NO VOO a tela é toda do jogo, como ele foi feito para rodar: ele desenha os dois olhos com a distorção da lente do VR Box e rastreia as mãos com o MediaPipe DELE, usando a câmera do aparelho. Enquanto isso o rastreio de mão do NextVR está DESLIGADO — sem feixe, sem cursor, sem mão desenhada — e a nossa câmera é fechada antes de a página abrir, senão o jogo receberia "câmera em uso por outro app". '
      + 'PARA SAIR: as duas mãos em pinça por dois segundos (o mesmo acorde de duas mãos que o NextVR já usa), o ✕ no alto da tela do jogo, ou o Voltar do Android — e o NextVR volta exatamente como estava, com a câmera e as mãos. O jogo precisa de internet na primeira abertura (three.js e MediaPipe vêm de CDN), e isso é avisado na tela dele.',
  },
  {
    id: 'ray-outside-6dof-dock-colors',
    tag: 'NOVO · RAIO FORA DA MÃO (ORDEM DE PINTURA), ÍCONE NOVO DO APP, TÁXI DRIVER NA LOJA, 6DOF EM PASSO LENTO',
    time: 'Agora',
    heading: 'O Raio Sai de Fora da Mão, o Ícone do App é a Arte Nova e o Táxi Driver Abre pela Loja',
    desc: 'O RAIO: o problema não era só onde ele começava. A mão e o feixe ficam no mesmo plano e o desenho é em ordem (profundidade desligada), então pintar o feixe DEPOIS da mão fazia a bolinha aparecer por cima dos dedos — dentro da mão. Agora a silhueta é pintada por ÚLTIMO, por cima do feixe: o que encostar nela fica escondido. E o começo do feixe é empurrado para fora da caixa da mão, medida nos 21 landmarks, com no mínimo 0,072 do plano do olho — a bolinha (raio 0,016) não tem como encostar no dedo. Os anéis de toque continuam por cima do dedo, que é onde eles precisam estar. '
      + 'O ÍCONE DO APP agora é a arte nova do NextVR (a que você mandou), gerada em todas as densidades do launcher. Ela NÃO fica na tela de entrada — a tela de entrada voltou a ser o logo de sempre, como era antes. '
      + 'O TÁXI DRIVER saiu do menu principal (o menu voltou a ter cinco cards) e continua na LOJA, com o selo VR BOX, e na BIBLIOTECA quando está instalado. E o "não abre" era um defeito de verdade: o botão só tentava abrir se o app já tivesse aparecido em alguma lista carregada, e no começo da sessão nenhuma lista chegou — então ele desistia calado. Agora quem decide é o próprio Android: o pedido vai para o lado nativo do NextVR, que pergunta ao sistema se existe a activity do jogo e a inicia; se não existir, aparece um aviso com o nome do pacote, em vez de o toque não fazer nada. '
      + 'O 6DOF: passo lento deixou de ser descartado (o resto fica guardado e sai somado no passo confirmado, com o mesmo limiar de 0,0028 — sem deriva nova) e a confirmação passou a ser em duas de três medições. As CORES DA DOCK nas configurações vão três por fileira, com folga.',
  },
  {
    id: 'cardboard-vr-box',
    tag: 'NOVO · JOGOS CARDBOARD / VR BOX (TÁXI DRIVER E CIA.) ABRINDO EM TELA CHEIA',
    time: 'Agora',
    heading: 'Jogos de Cardboard e VR Box: o Táxi Driver Abre no Seu Visor, e o NextVR Volta Igual',
    desc: 'O NextVR agora reconhece os jogos que desenham o próprio estéreo — Cardboard e Daydream, como o Táxi Driver VR — por quatro pistas do APK: as bibliotecas do SDK, a categoria de VR do manifesto, as classes com/google/cardboard dentro do dex de um build Unity e até o nome do pacote. '
      + 'Esses jogos NÃO viram janelinha: eles já trazem a correção de lente do VR Box dentro da imagem, e rodar isso dentro do nosso frame aplicaria a nossa correção por cima (borrão). Então eles recebem a TELA INTEIRA, do mesmo jeito que o ícone do app na gaveta do Android, e o NextVR volta exatamente como estava quando você sai. '
      + 'Na biblioteca a tile deles ganha o selo VR BOX (sem ✕, porque eles abrem), e em Configurações › PhoneXR › Cardboard & VR Box tem a lista dos seus apps instalados com “Abrir em tela cheia” — serve para qualquer jogo que o reconhecimento automático não pegar. Nada de runtime, nada de Shizuku: é o startActivity do próprio ícone.',
  },
  {
    id: 'orb-454-ray-tabs',
    tag: 'NOVO · ANEL 4-5-4 (TREZE APPS), ANEL EXCLUSIVO, TRÊS ABAS NAS CONFIGURAÇÕES & RAIO FORA DA MÃO',
    time: 'Agora',
    heading: 'Anel 4-5-4 com Treze Apps, Nada Flutuante por Cima Dele, Três Abas de Configurações e o Raio Saindo da Pinça',
    desc: 'O anel agora é 4 EM CIMA, 5 NO MEIO e 4 EMBAIXO — treze lugares, com muito mais ar entre os ícones (as fileiras de quatro abrem 110 px e a de cinco, 62 px), e o botão da dock passou a desenhar as mesmas treze bolinhas. '
      + 'O ANEL É EXCLUSIVO: ao abrir, todas as janelinhas flutuantes que estavam abertas fecham, e enquanto ele está na tela NENHUMA outra janela nasce — só os treze apps dele abrem (e eles fecham o anel antes de aparecer). '
      + 'As configurações do menu de entrada ganharam a ABA 3 (TELA & DOCK): idioma e modo espacial na aba 1, mãos e gestos na aba 2, e cor da dock, ordem de profundidade, ambiente MR, FPS e os panoramas na aba 3 — a terceira página também rola até a vista, que antes parava fora da tela. '
      + 'O centro de brilho ficou MENOR (escala 1.45 em vez de 1.68) e continua com um tamanho só, igual de perto e de longe. '
      + 'E o RAIO saiu de dentro da mão: ele nascia no X e no Y de um índice solto do array achatado de landmarks — que é a ponta do polegar, não o meio da palma — e por isso aparecia colado no dedão; agora nasce no ponto da PINÇA, entre a ponta do polegar e a do indicador, e o feixe sai da borda da mão em vez de brotar dentro dela.',
  },
  {
    id: 'palm-cursor',
    tag: 'CORRIGIDO · PALM CURSOR: PALMA PARA A CÂMERA ACENDE, DORSO APAGA (META QUEST 3S)',
    time: 'Agora',
    heading: 'Palm Cursor: Mais Nada de Bolinha Piscando, Sumindo ou Trocando de Lado',
    desc: 'A bolinha entre o polegar e o indicador aparece com a PALMA VOLTADA PARA A CÂMERA/HEADSET e '
      + 'some quando é o DORSO da mão que está voltado para lá — o gesto do Meta Quest, medido pela '
      + 'geometria da mão em 3D: a normal da palma (pulso, MCP do indicador e MCP do dedo mínimo) vezes '
      + 'a direção palma → olho. Nada de "a mão está alta, então está virada": altura, posição dos dedos '
      + 'e o desenho 2D não decidem nada. Antes eram dois juízes discordando a cada quadro — o sinal que '
      + 'vinha do rastreador e uma segunda decisão do lado da interface — e era isso que fazia a bolinha '
      + 'piscar, desaparecer com a mão parada e trocar de lado quando as mãos se cruzavam. O sentido da '
      + 'normal estava invertido na mão física (a bolinha nascia com o DORSO da mão voltado para a '
      + 'câmera) — e a regra 2D estava invertida no mesmo sentido, então os dois concordavam entre si e '
      + 'nenhum teste via: agora os dois seguem a mesma conta do menu de palma nativo, que já estava '
      + 'certa. E o centro de brilho passou a ter UM tamanho só, sempre o mesmo. Agora existe '
      + 'uma medida só, com suavização, histerese (acende num limiar, apaga em outro mais baixo), '
      + 'tolerância a falha curta e saída em fade. Cada mão tem o seu cursor. O gatilho de pinça da '
      + 'bolinha (Dock/Apps pela direita, Brilho e Som pela esquerda) não mudou.',
  },
  {
    id: 'hand-tracking-deep',
    tag: 'CORRIGIDO · RASTREAMENTO: SEM TREMOR, SEM DEDO CONTORCENDO',
    time: 'Agora',
    heading: 'Mãos Estáveis: o Tremor e a Deformação Foram Corrigidos na Raiz',
    desc: 'Três causas reais, medidas no código do rastreador: (1) o filtro One Euro dos 63 landmarks '
      + 'estava, na prática, desligado — 150 Hz a 30 quadros/s passa ~97 % do valor cru — e o ganho de '
      + 'velocidade não separava tremor de movimento, então o ruído de ~1 px por quadro elevava o corte '
      + 'e passava direto; agora o repouso é filtrado com zona morta (tremor abaixo dela não é publicado) '
      + 'e o movimento devolve o valor cru em um quadro. (2) O limite de alcance cortava cada landmark '
      + 'contra um teto fixo, então um solavanco de um quadro esticava o dedo e ele voltava no seguinte: '
      + 'agora o corte é contra o raio do quadro anterior e existe consistência anatômica — o comprimento '
      + 'de cada osso do dedo é aprendido em fração da palma e só é corrigido quando salta, sem congelar '
      + 'articulação nenhuma. (3) Reaparecer depois de uma falha virou TRANSLACÃO da mão inteira (antes '
      + 'só o pulso era misturado e a palma esticava). De brinde, a previsão deixou de ser feita duas '
      + 'vezes (no nativo e no shell), que era o que fazia a mão passar do ponto em movimento rápido.',
  },
  {
    id: 'direct-touch',
    tag: 'NOVO · TOQUE DIRETO: O DEDO TEM QUE ENCOSTAR E EMPURRAR (META QUEST)',
    time: 'Agora',
    heading: 'Toque Direto: Chega de Abrir App Só Passando o Dedo Por Cima',
    desc: 'O toque da mão virou uma máquina de estados de verdade: APROXIMAR acende o botão e não faz mais '
      + 'nada. ENCOSTAR mostra o contacto na ponta do dedo. EMPURRAR o vidro confirma a pressão e executa a '
      + 'ação, UMA vez por pressão. Segurar apertado não repete nada, e só depois de tirar o dedo da área de '
      + 'contacto é que existe outro clique. Saiu do código o caminho antigo — escolher o alvo por o dedo '
      + 'passar por cima e clicar quando o dedo fazia um movimento pequeno para cima (era isso que abria '
      + 'aplicativos por acidente, porque o tremor do rastreamento passava dos mesmos limiares). A profundidade '
      + 'agora é medida em metros contra o PLANO do alvo: a ponta precisa atravessar o vidro (6 mm) ou avançar '
      + '3 cm na direção dele, com 2 quadros de confirmação, e amostras preditas do rastreador não decidem mais '
      + 'nada — quem aperta é a detecção viva. Vale para a dock, os ícones, o teclado, as janelas e a superfície '
      + 'das janelas (apertar o vidro manda DOWN, arrastar manda MOVE e soltar manda UP, então slider, rolagem e '
      + 'arrasto continuam funcionando). De brinde: o anel da ponta do dedo e a bolinha do alvo crescem com a '
      + 'pressão, e a pinça com raio continua intacta — a pinça NÃO é o mecanismo de clique.',
  },
  {
    id: 'pc-link',
    tag: 'NOVO · PC LINK: O CELULAR VIRA HEADSET DO STEAMVR',
    time: 'Agora',
    heading: 'PC Link — o Jogo do PC no Seu Headset, com as Suas Mãos',
    desc: 'Entrou a janela PC Link: o celular deixa de ser uma tela e passa a ser o HEADSET de um PC com '
      + 'SteamVR. O jogo roda no PC, a imagem chega comprimida pelo hardware e é decodificada no hardware do '
      + 'celular, uma metade por olho, preenchendo o campo de visão — e a pose da sua cabeça volta para o PC a '
      + '60 Hz, então a câmera do jogo gira com você. As mãos são as MESMAS que já movem as janelas do NextVR: '
      + '21 articulações medidas viram 31 ossos de Skeletal Input no SteamVR, com pinça no gatilho e punho no '
      + 'grab. Na janela: Wi-Fi, USB (ancoragem) ou automático, campo de IP, estado da conexão, FPS e latência '
      + 'medidos de verdade, qualidade do vídeo, IPD, altura e escala. Do lado do PC vêm dois programas '
      + 'separados: o NextVR PC Bridge e o NextVR SteamVR Driver. Nada aqui foi testado em Windows/SteamVR '
      + 'ainda — e o app diz isso onde importa: sem PC, a janela mostra "sem conexão", nunca um número de '
      + 'fachada. Áudio e XR_EXT_hand_tracking ainda não estão implementados.',
  },
  {
    id: 'orb-logos-and-pages',
    tag: 'NOVO · LOGO DE VERDADE EM CADA APP DO ANEL, BOLINHAS DE PÁGINA & MAIS ESPAÇO',
    time: 'Agora',
    heading: 'Apps Gigantes com as Logos de Verdade, Bolinhas de Página e Mais Espaço',
    desc: 'Os apps gigantes deixaram de mostrar a inicial e agora mostram a LOGO DE VERDADE de cada serviço: YouTube, Twitch, Netflix, Prime Video, Discord, WhatsApp, Instagram, X, Facebook e Spotify, cada uma na cor da própria marca, centrada no quadrado do app. Embaixo dos apps entraram DUAS BOLINHAS pequenas que dizem em que página você está — a da página atual fica branca, e com uma página só elas nem aparecem. O espaço entre os apps também aumentou: 92 px entre as colunas e 38 px entre as fileiras, para os ícones respirarem de verdade. Tudo isso sem mexer nas outras telas: a biblioteca e o launcher continuam com os ícones que já tinham.',
  },
  {
    id: 'pinch-ray-panoramas-dock-lock',
    tag: 'NOVO · RAIO DA PINÇA COMPRIDO, SEIS PANORAMAS NOVOS & DOCK TRAVADA COM OS APPS GIGANTES',
    time: 'Agora',
    heading: 'Raio da Pinça Até o Alvo, Seis Panoramas Novos e a Dock Travada Atrás dos Apps Gigantes',
    desc: 'O raio da pinça estava um toco: ele saía da mão e morria a 42% do caminho do alvo. Agora ele vai quase até o alvo (94%) e, quando não há alvo, atravessa o ambiente até 3 metros — mais grosso e mais visível também. Entraram SEIS panoramas novos em 360°: estádio de futebol à noite, a cidade Tron, a avenida cyberpunk, a casa de vidro na floresta com banheira, a fábrica de carros e a cityline ao entardecer; todos com miniatura própria e 3072x1536 no APK. Os apps gigantes ficaram com mais ar entre eles (78 px entre as colunas, 34 px entre as fileiras). E, com os apps gigantes abertos, a DOCK FICA TRAVADA: nenhum app dela abre — só abre o que você tocar dentro dos apps gigantes. As duas bolinhas (o anel e a biblioteca) continuam respondendo, porque são elas que abrem e fecham o anel.',
  },
  {
    id: 'orb-apps-no-window',
    tag: 'NOVO · APPS SOLTOS NO AMBIENTE: SEM JANELINHA, SEM BARRA, SEM BRILHO, SEM ALÇA',
    time: 'Agora',
    heading: 'Os Apps Ficaram Soltos no Ambiente: Nada de Janelinha, Barra ou Alça em Volta',
    desc: 'Saiu tudo o que estava em volta dos apps: a barra de baixo (com o TODOS, o GIROSCÓPIO ATIVO, o perfil, a hora e a bateria), a barra de aumentar e diminuir o brilho, a alça branca para mover, as telinhas de encaixe do canto, a barra de cinema e o ✕. Agora os dez ícones ficam SOLTOS no ambiente, cada um no seu espaço, com folga de 56 px entre eles e o nome embaixo — o mundo escurece e eles ficam ali, do jeito do print. Fechar é pelo mesmo botão que abriu (tocar de novo) ou pelo voltar do Android, e segurar a bolinha da biblioteca continua abrindo a biblioteca completa. A dock não some: ela escurece junto com o ambiente e fica apagada atrás dos apps, com as mãos sempre por cima para escolher.',
  },
  {
    id: 'orb-print-fixes',
    tag: 'NOVO · ÍCONES MAIORES E MAIS SEPARADOS, DOCK ESCURA COM O AMBIENTE & CANTO DE CIMA LIMPO',
    time: 'Agora',
    heading: 'Apps Maiores e Mais Separados, a Dock Escura com o Ambiente e o Canto de Cima Arrumado',
    desc: 'Seguindo o print: os apps do anel ficaram MAIORES — cada ícone tem 150 px, com 48 px de folga entre eles, e o nome continua embaixo, agora em 15 px. O raio dos cantos acompanha o dos ícones do NextVR (34 px), então nenhum app fica com quadrado duro no meio dos outros. A DOCK FICA ESCURA COM O AMBIENTE: com o anel aberto ela não some nem clareia sozinha, escurece junto com o mundo e continua ali, apagada atrás da janelinha. No canto de cima, as três telinhas de encaixe e o ✕ deixaram de ser dois enfeites soltos e viraram UM conjunto: uma pílula de vidro escuro com os três encaixes e o fechar do mesmo tamanho, ao lado. A barra de brilho e a barra de cinema saíram da janelinha do anel — ela é só os apps e a barra de status, que também ficou mais densa e legível no passthrough.',
  },
  {
    id: 'orb-floating-window',
    tag: 'NOVO · ANEL EM JANELINHA INVISÍVEL, BOTÃO 3-4-3 NA DOCK & A DOCK QUE NÃO SOME',
    time: 'Agora',
    heading: 'Anel de Apps em Janelinha Invisível, Botão 3-4-3 na Dock e a Dock de Volta ao Lugar',
    desc: 'O anel de dez apps virou uma JANELINHA FLUTUANTE INVISÍVEL, do jeito da UI dos apps espaciais: sem moldura, sem barrinha branca para mover e sem fundo preto — o mundo escurecido aparece atrás, com dez ícones e o nome embaixo, três em cima, quatro no meio e três embaixo. A DOCK NÃO SOME MAIS: ela continua ali, por baixo, e as mãos são o último desenho do render, então continuam por cima de tudo para você escolher o app com a pinça. A dock ganhou um botão novo à esquerda da biblioteca com as dez bolinhas do anel (3-4-3); a bolinha da biblioteca abre a mesma janelinha. A barra de baixo é a da referência: um ponto, a contagem de apps, as setas de página, o TODOS, o chip do GIROSCÓPIO, o perfil, a hora, a bateria e a linha branca fina embaixo.',
  },
  {
    id: 'orb-visible-pinch-ray',
    tag: 'CORREÇÃO · OS APPS DO ANEL APARECEM, PINÇA COM RAIO & DUAS MÃOS',
    time: 'Agora',
    heading: 'Os Apps do Anel Aparecem no Headset, Pinça com Raio e Duas Mãos de Verdade',
    desc: 'O anel de 10 apps voltou a aparecer no headset: a camada estava centralizada na página inteira (4096x4096) em vez de dentro da HUD (1200x800), então o ambiente escurecia e os ícones ficavam fora do recorte — era o "os aplicativos não aparece". A pinça agora tem RAIO mesmo com o Toque Direto ligado (antes esse modo desligava o ponteiro e nenhum feixe era desenhado): o raio azul sai da palma e aponta para o alvo, inclusive quando o alvo é o anel ou a Dock. O rastreamento das DUAS mãos ficou estável: uma falha de um quadro não joga mais a segunda mão para o grafo de uma mão, e uma mão que some por alguns quadros continua desenhada em vez de piscar. E a biblioteca de apps não volta mais sozinha para o menu principal: o voltar do Android fecha a janela em foco primeiro (o segundo voltar, em até 2,5 s, vai para o menu inicial), a biblioteca nunca é descartada para abrir outro app e o carregamento de 6 s ganhou um botão PULAR.',
  },
  {
    id: 'orb-hud-redesign',
    tag: 'NOVO · ANEL NA HUD, DEZ POR PÁGINA & PERFIL NO LUGAR DA DOCK',
    time: 'Agora',
    heading: 'Anel Redesenhado: Apps Gigantes na Tela, Rolagem de Páginas, Perfil e Hora',
    desc: 'O anel de 10 apps agora é uma camada presa na sua visão (não é mais janela): nada de caixa escura atrás dos ícones. Os apps aparecem gigantes no desenho 3-4-3, só dez por vez, e a rolagem (roda, arrasto ou as setas laterais) passa para a próxima página com animação. O ambiente escurece de verdade — inclusive dentro do headset — mas continua visível, e a tela toda escurece um pouco para os apps brilharem. Ao abrir o anel a Dock sai de cena, e no lugar dela ficam o SEU PERFIL e a HORA sincronizados com o aparelho. O círculo do canto volta na hora para a Dock.',
  },
  {
    id: 'orb-dock-toggle-clean',
    tag: 'NOVO · ANEL SEM CAIXAS PRETAS, DOCK SÓ PERFIL & RELÓGIO, LIGA/DESLIGA',
    time: 'Agora',
    heading: 'Anel Limpo (Sem Fundo Preto), Dock que Sai de Cena & Interruptor do Anel',
    desc: 'O anel de 10 apps agora aparece sozinho na tela: as outras janelas saem de cena (nada de caixa preta atrás dos ícones), o ambiente escurece mas continua visível e os apps ficam gigantes, com aro claro e brilho próprio. Ao tocar na bolinha, a Dock desaparece e ficam só o perfil, o relógio e a bateria; quando o anel fecha, a Dock volta inteira. E quem preferir o jeito antigo pode DESATIVAR o anel em Configurações › Anel de 10 Apps (bolinha da Dock): a bolinha volta a abrir a biblioteca de sempre.',
  },
  {
    id: 'orb-ten-apps-envs-hands',
    tag: 'NOVO · ANEL DE 10 APPS, 4 PANORAMAS & RAIO NA MÃO',
    time: 'Agora',
    heading: 'Anel de 10 Apps, 4 Panoramas Novos, Raio na Mão & Fim das Mãos Duplicadas',
    desc: 'A bolinha da Dock abre o anel de 10 apps (apps do NextVR + apps do Android) com o ambiente escurecido mas ainda visível e os apps gigantes na tela, sem nenhum painel de fundo. Quatro panoramas novos (sala gamer neon, rua à noite, cidade flutuante e estúdio VR) e os duplicados saíram de vez. O raio agora sai da mão e aponta exatamente para onde a mão aponta, seguindo a mão em velocidade absurda no estilo Quest — e a mão não se multiplica mais do nada.',
  },
  {
    id: 'internal-rec-hand-zero',
    tag: 'NOVO · PAINTDRAWER, 6DOF FIXO & 0 DELAY ULTRA',
    time: 'Agora',
    heading: 'paintdrawer, 6DoF Sem Deriva Lateral/Frontal & Hand Tracking Ultra 0 Delay',
    desc: 'Jogo paintdrawer com nova logo! Todos os apps já vêm prontos no Spatial App e na Dock sem precisar instalar, 6DoF corrigido para nunca andar para os lados ou pra frente do nada, Hand Tracking ainda mais sem delay nas 2 mãos e arco invisível nas bordas das janelas!',
  },
  {
    id: 'quest-browser-env-hand',
    tag: 'NOVO · NAVEGADOR QUEST & GRAVAÇÃO INTERNA',
    time: 'Agora',
    heading: 'Meta Quest Browser, Gravação Interna 1 Lente & Raio de Longo Alcance',
    desc: 'Gravação Interna em Tela Cheia 16:9 de 1 lente (mantendo as 2 lentes ativas no celular) nas configurações dentro do jogo, interface Meta Quest Browser e raio com seleção de qualquer distância!',
  },
  {
    id: 'mr-pistol',
    tag: 'NOVO · SHOOTTHEDIE (MR)',
    time: 'Agora',
    heading: 'ShootTheDie: Mão Única 3D com Luva Preta Fingerless, Dedos de Pele & Smartwatch',
    desc: 'Mão única 3D com luva tática preta fingerless, dedos de pele realistas e relógio no pulso direito, G18 preta com cano cinza, 6 alvos 3D à distância e botão 3D atrás para sair!',
  },
  {
    id: 'green-glove',
    tag: 'ATUALIZADO · DOCK, CAMADAS & 6DOF ULTRA',
    time: 'Agora',
    heading: 'Cor da Dock, Tela Perto Sobre/Trás Embaixo, 6DoF Ultra & Bateria Real',
    desc: 'Escolha a cor da Dock, tela puxada pra perto fica sobre as outras, 6DoF World Lock Ultra a 70 Hz e bateria sincronizada em tempo real com o celular.',
  },
]);


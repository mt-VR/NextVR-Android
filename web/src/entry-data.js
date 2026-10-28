// Dados estáticos do menu de entrada NextVR v2.1.0.
export const ENTRY_VERSION = 'v2.1.0';
export const ENTRY_VERSION_ALPHA = 'v2.1.0 (Alpha)';
export const ENTRY_SUBTITLE = 'ENTRE EM OUTRO MUNDO';
export const ENTRY_TAGLINE_TOP = 'MAIS QUE UM APP';
export const ENTRY_TAGLINE_BOTTOM = 'UMA NOVA FORMA DE VER';

// Build 89: a NanyGata virou Apache. O nome dele aparece cinza igual aos outros, com o mesmo selo
// vermelho de verificado dos outros colaboradores, e a bio e' a que o usuario escreveu (com o (V)).
export const ENTRY_COLLABORATORS = Object.freeze([
  'NeyVR',
  'Faylan',
  'Apache',
  'JocaVR',
]);

// O verificado e' de TODOS os colaboradores, igual sempre foi: quem digitar o nome de qualquer um
// deles no perfil (NeyVR, Faylan, Apache ou JocaVR) ganha o selo vermelho na hora.
export const ENTRY_VERIFIED_NAMES = Object.freeze([
  'NeyVR',
  'Faylan',
  'Apache',
  'JocaVR',
]);

/** "Apache", "apache", " Apache " — maiúsculas e espaços não importam. Qualquer colaborador conta. */
export function isVerifiedProfileName(name) {
  const clean = String(name || '').trim().toLowerCase();
  if (!clean) return false;
  return ENTRY_VERIFIED_NAMES.some(v => v.toLowerCase() === clean);
}

export const ENTRY_COLLABORATOR_BIOS = Object.freeze({
  NeyVR: 'o Dono absoluto mais aurudo do planeta.',
  Faylan: 'o desenvolvedor mais sabido de todo o universo muita aura',
  // O "(V)" era só uma representação do selo. O selo é desenhado ao lado do nome, então a bio é
  // só o texto — nome cinza + selo vermelho + esta frase, igual aos outros colaboradores.
  Apache: 'o contribuidor mais aurudo desse planeta majestoso',
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
    id: 'build-89-atmo',
    tag: 'NOVO · BUILD 89 — ATMO XR, TECLADO EM PE, TIKTOK REAL, JANELAS 300% E CAMERA NOTURNA',
    time: 'Agora',
    heading: 'Build 89: Apache no lugar da NanyGata, Teclado em Pe, TikTok Real, Janelas ate 300%, Personagem 3D Giratorio e Camera Noturna',
    desc: 'A NanyGata virou Apache: nome cinza igual aos outros, selo vermelho de verificado em todos os colaboradores (digite NeyVR, Faylan, Apache ou JocaVR no perfil e o selo aparece) e a bio "o contribuidor mais aurudo desse planeta majestoso" (o selo é o desenho ao lado do nome). O teclado parou de ficar deitado: agora fica em PE, estilo Meta Quest 3S, com uma barrinha branca do lado para arrastar para qualquer lugar. Nova tela de carregamento ATMO XR. As janelas flutuantes aumentam ate 300% (perfeito para ver filme), ficaram encurvadas e brilhantes como no print, e o TikTok abre do tamanho certo rodando o TikTok de verdade. Personagem 3D que gira para ver os acessorios, terceira aba nas configuracoes para por QUALQUER app na Dock (sem limite) e camera noturna automatica quando o ambiente escurece (e a lanterna do celular acende quando nao ha luz nenhuma, apagando quando a luz volta). O APK agora sai assinado em release: instala por cima sem apagar o perfil.',
  },
  {
    id: 'worldlock-camera-paint',
    tag: 'NOVO · WORLD LOCK, CÂMERA COLORIDA & PAINTMR 3D CONSERTADO (BUILD 82)',
    time: 'Agora',
    heading: '6DoF sem deriva: World Lock, Câmera P&B ou Colorida e o paintMR 3D Refinado',
    desc: 'O mundo agora fica TRAVADO no lugar por padrão (World Lock): o 6DoF parou de ir para a frente e para os lados do nada, e tem botão de recentralizar. Escolha câmera P&B ou colorida dentro do jogo, no painel PICO 4 Ultra e nas configurações. O paintMR 3D foi consertado: ancoragem invertida, filtro One-Euro contra tremor, curvas suaves, borracha por direção, distância ajustável e botões de câmera/World Lock na paleta!',
  },
  {
    id: 'paint-mr-3d',
    tag: 'NOVO · PAINTDRAWER 3D EM MR — DESENHE NO AR COM AS MÃOS (BUILD 81)',
    time: 'Agora',
    heading: 'paintdrawer 3D: Traços Reais no Espaço, Pinça para Desenhar, Borracha 3D e Paleta Flutuante',
    desc: 'Reescrito do zero: cada traço é um objeto 3D preso no espaço (gira a cabeça e o desenho fica parado), a pinça da mão direita desenha e a borracha apaga pedaço por pedaço no ar; paleta flutuante com 10 cores, caneta/neon, grossura, desfazer, limpar, salvar e abrir; sem esqueleto de mão, só um cursor discreto!',
  },
  {
    id: 'internal-rec-hand-zero',
    tag: 'NOVO · PINTURA 3D MR INDEPENDENTE, CÂMERA P&B, PAINEL PICO 4 ULTRA & 6DOF RÁPIDO (BUILD 80)',
    time: 'Agora',
    heading: 'Pintura 3D MR Independente (Igual ShootTheDie), Câmera P&B, Gestão VR PICO 4 Ultra & 6DoF Rápido',
    desc: 'Jogo paintMR de Pintura 3D em Realidade Mista 100% independente igual ao ShootTheDie (sem ser em janelinha flutuante: mão esquerda com botão Paleta para abrir/fechar a paleta de 10 cores + borracha + grossura, mão direita seleciona com o raio e desenha/apaga com pinça), câmera P&B padrão, painel PICO 4 Ultra e 6DoF rápido!',
  },
  {
    id: 'quest-browser-env-hand',
    tag: 'NOVO · ÍCONE ATMO XR & PICO 4 ULTRA COMPLETO',
    time: 'Agora',
    heading: 'Novo Ícone ATMO XR, PICO Motion Tracker, TikTok VR Vertical, Spotify VR, PICO Browser & Store',
    desc: 'Novo ícone oficial ATMO XR! Adicionados PICO Motion Tracker (2 trackers 271297/271296 + avatar 183cm), PICO Explore Panorama 8K + Among Us 3D, PICO Browser (Shortcuts + Popular), PICO Store Search, TikTok VR Vertical, Spotify VR e Central de Notificações 27°C!',
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


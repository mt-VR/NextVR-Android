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
    id: 'internal-rec-hand-zero',
    tag: 'NOVO · DESENHO VR, 0 DELAY & MULTITAREFA',
    time: 'Agora',
    heading: 'Jogo Desenho VR em Tela Branca, Hand Tracking 0 Delay & Mão 100% Lisa',
    desc: 'Novo jogo Desenho VR na Tela Branca com Hand Tracking! Mão dos ambientes 100% lisa sem juntas aparentes, Hand Tracking com 0 delay, Multitarefa alinhada com alta qualidade e cores naturais, 2ª aba nas Configurações do menu 2D e Gravação Interna nas configurações dentro do jogo!',
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
    heading: 'ShootTheDie: Mãos 3D com Luva Preta Fingerless, Dedos de Pele & Smartwatch',
    desc: 'Novas mãos 3D com luva tática preta fingerless, dedos de pele realistas e relógio no pulso direito, G18 preta com cano cinza, 6 alvos 3D à distância e botão 3D atrás para sair!',
  },
  {
    id: 'green-glove',
    tag: 'ATUALIZADO · DOCK, CAMADAS & 6DOF ULTRA',
    time: 'Agora',
    heading: 'Cor da Dock, Tela Perto Sobre/Trás Embaixo, 6DoF Ultra & Bateria Real',
    desc: 'Escolha a cor da Dock, tela puxada pra perto fica sobre as outras, 6DoF World Lock Ultra a 70 Hz e bateria sincronizada em tempo real com o celular.',
  },
]);


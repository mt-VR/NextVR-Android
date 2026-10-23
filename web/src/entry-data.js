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
    id: 'mr-pistol',
    tag: 'NOVO · SHOOTTHEDIE (MR)',
    time: 'Agora',
    heading: 'ShootTheDie: G18 Preta/Cano Cinza, Alvos 3D & Saída Rápida',
    desc: 'Jogo MR ultra-otimizado com nova logo oficial: atire nos alvos 3D distantes com o gesto de arminha e saia fechando a mão esquerda ou pelo botão 3D atrás!',
  },
  {
    id: 'green-glove',
    tag: 'NOVO · LUVA 3D + BRILHO MAIOR',
    time: 'Agora',
    heading: 'Luva Verde 3D no ShootTheDie & Controle de Brilho Maior',
    desc: 'Luva Tática Verde 3D com abertura nos dedos exclusiva do ShootTheDie e Centro de Controle de Brilho da mão esquerda ampliado!',
  },
  {
    id: 'sixdof',
    tag: 'ATUALIZADO · 6DOF ULTRA',
    time: 'Agora',
    heading: '6DoF Ainda Melhor (World Lock Ultra & IRLS 70 Hz)',
    desc: 'Fluxo ótico ponderado por contraste a 70 Hz com trava imediata de âncora (World Lock) e interpolação adaptativa a 120 Hz sem drift.',
  },
  {
    id: 'battery-sync',
    tag: 'CORRIGIDO · SISTEMA',
    time: 'Agora',
    heading: 'Bateria 100% Sincronizada com o Celular',
    desc: 'Porcentagem real da bateria e status de carregamento sincronizados ao vivo com o celular no Menu Inicial, Dock, Library e Controles.',
  },
]);


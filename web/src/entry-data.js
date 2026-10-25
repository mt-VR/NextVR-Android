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
    tag: 'NOVO · ÍCONE ATMO XR & PICO 4 ULTRA COMPLETO (BUILD 68)',
    time: 'Agora',
    heading: 'Novo Ícone ATMO XR, PICO Motion Tracker, TikTok VR Vertical, Spotify VR, PICO Browser & Store',
    desc: 'Novo ícone oficial ATMO XR! Adicionados PICO Motion Tracker (2 trackers 271297/271296 + avatar 183cm), PICO Explore Panorama 8K + Among Us 3D, PICO Browser (Shortcuts + Popular), PICO Store Search, TikTok VR Vertical, Spotify VR com áudio real, Central de Notificações 27°C e círculos brancos de Hand Tracking acima dos dedos!',
  },
  {
    id: 'quest-browser-env-hand',
    tag: 'NOVO · PAINTDRAWER, 6DOF FIXO & 0 DELAY ULTRA',
    time: 'Agora',
    heading: 'paintdrawer, 6DoF Sem Deriva Lateral/Frontal & Hand Tracking Ultra 0 Delay',
    desc: 'Jogo paintdrawer com nova logo! Todos os apps já vêm prontos sem precisar instalar, 6DoF corrigido para nunca andar para os lados ou pra frente do nada e Hand Tracking ultra sem delay nas 2 mãos!',
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


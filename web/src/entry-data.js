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


// Menu principal do XFC 27: identidade visual vermelha/magenta neon,
// estádio com partículas, jogador 3D destacado (Neymar com camisa amarela
// do Brasil) no lado direito, logotipo XFC 27 no topo.
//
// Cada item do menu é funcional: Copa do Mundo Live, Copa do Mundo 2027,
// Kick Off, Torneio Online e Customise — cada um abre sua respectiva tela.

import { el, svg, ICONS } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { createEngine, THREE } from '../match3d/engine.js';
import { createPlayer3D } from '../match3d/player.js';

const STAGE_W = 1280;
const STAGE_H = 720;

const MENU_ITEMS = [
  {
    id: 'worldcup-live',
    icon: 'ball',
    label: 'Copa do Mundo Live',
    sub: 'Acompanhe a edição atual',
    target: 'worldcup'
  },
  {
    id: 'worldcup-2027',
    icon: 'hub',
    label: 'Copa do Mundo 2027',
    sub: 'Lidere sua seleção até o título',
    target: 'worldcup'
  },
  {
    id: 'kickoff',
    icon: 'cross',
    label: 'Kick Off',
    sub: 'Partida clássica',
    target: 'kickoff'
  },
  {
    id: 'tournament',
    icon: 'friends',
    label: 'Torneio Online',
    sub: 'Competição online',
    target: 'quick'
  },
  {
    id: 'customise',
    icon: 'gear',
    label: 'Customise',
    sub: 'Uniformes e elenco',
    target: 'kits'
  },
  {
    id: 'stadiums',
    icon: 'camera',
    label: 'Estádios',
    sub: 'Escolha a casa do jogo',
    target: 'stadiums'
  },
  {
    id: 'quick',
    icon: 'triangle',
    label: 'Partidas Rápidas',
    sub: 'Jogo direto',
    target: 'quick'
  }
];

export function menuScreen(ctx) {
  const state = ctx.state;
  let focusIndex = 0;

  // ------------------------------------------------------- particles canvas --
  const particlesCanvas = el('canvas', { class: 'menu__particles', width: STAGE_W, height: STAGE_H });
  const particleCtx = particlesCanvas.getContext('2d');
  const particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * STAGE_W,
      y: Math.random() * STAGE_H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? 330 : 300
    });
  }

  function drawParticles() {
    particleCtx.clearRect(0, 0, STAGE_W, STAGE_H);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -5) { p.y = STAGE_H + 5; p.x = Math.random() * STAGE_W; }
      if (p.x < -5) p.x = STAGE_W + 5;
      if (p.x > STAGE_W + 5) p.x = -5;
      particleCtx.beginPath();
      particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      particleCtx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.alpha})`;
      particleCtx.shadowBlur = 8;
      particleCtx.shadowColor = `hsla(${p.hue}, 100%, 60%, 0.8)`;
      particleCtx.fill();
    }
    particleCtx.shadowBlur = 0;
  }

  // ------------------------------------------------------- 3D Neymar scene --
  const scene3d = el('div', { class: 'menu__scene3d' });
  const canvas3d = el('canvas', { width: 480, height: 720, 'aria-label': 'Neymar 3D' });
  scene3d.appendChild(canvas3d);

  let engine3d = null;
  let neymarModel = null;
  let neymarNameEl = null;
  let neymarNumEl = null;
  let sceneTime = 0;

  function setupNeymar3D() {
    engine3d = createEngine(canvas3d, {
      fov: 38,
      background: 0x000000,
      pixelRatio: Math.min(window.devicePixelRatio || 1, 1.25)
    });
    engine3d.renderer.setSize(480, 720, false);
    engine3d.renderer.setClearColor(0x000000, 0);
    engine3d.renderer.shadowMap.enabled = true;

    // Brasil kit: amarelo/verde/azul/branco
    const brazilKit = {
      primary: '#FFDF00',
      secondary: '#009B3A',
      accent: '#002776',
      pattern: 'solid'
    };

    neymarModel = createPlayer3D({
      kit: brazilKit,
      number: 10,
      isKeeper: false,
      skinTone: 0xc68a5e,
      hairColor: 0x1a1a1a,
      hairStyle: 'mohawk',
      heightScale: 1.05,
      photo: null
    });

    // Posição: centro da cena, ligeiramente à frente
    neymarModel.root.position.set(0, 0, 0);
    neymarModel.root.rotation.y = -0.3;
    engine3d.scene.add(neymarModel.root);

    // Iluminação: neon rosa/magenta vindo da esquerda, amarelo da direita
    const ambient = new THREE.AmbientLight(0x444444, 1.2);
    engine3d.scene.add(ambient);

    const pinkLight = new THREE.PointLight(0xff4080, 2.5, 300);
    pinkLight.position.set(-120, 100, 80);
    engine3d.scene.add(pinkLight);

    const goldLight = new THREE.PointLight(0xffd84a, 1.8, 300);
    goldLight.position.set(120, 80, 60);
    engine3d.scene.add(goldLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 200, -100);
    engine3d.scene.add(rimLight);

    // Piso reflexivo (plano simples)
    const floorGeo = new THREE.PlaneGeometry(800, 400);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x1a0210,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.4
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.8;
    floor.receiveShadow = true;
    engine3d.scene.add(floor);

    // Câmera: olhando para o jogador
    engine3d.camera.position.set(0, 1.2, 3.2);
    engine3d.camera.lookAt(0, 1.5, 0);

    // Iniciar render loop com callback de animação
    engine3d.start((dt) => {
      sceneTime += dt;
      // Animação do jogador: respirar/movimento suave
      const breathe = Math.sin(sceneTime * 1.2) * 0.03;
      neymarModel.root.position.y = breathe;
      neymarModel.root.rotation.y = -0.3 + Math.sin(sceneTime * 0.5) * 0.1;
    });
  }

  function addPlayerOverlays() {
    neymarNameEl = el('div', { class: 'menu__player-name', text: 'NEYMAR JR.' });
    neymarNumEl = el('div', { class: 'menu__player-num', text: '10' });
    scene3d.appendChild(neymarNumEl);
    scene3d.appendChild(neymarNameEl);
  }

  // ------------------------------------------------------- top bar ---------
  const topbar = el('div', { class: 'menu__topbar' },
    el('div', { class: 'menu__logo-xfc' },
      el('div', { html: xfcWordmark() }),
      el('span', { class: 'xfc-27-badge', text: 'XFC 27' })
    ),
    el('div', { class: 'menu__topbar-right' },
      el('div', { class: 'menu__coins' },
        svg('<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="900" fill="currentColor">★</text></svg>'),
        el('span', { text: `${state.profile.coins || 0}` })
      ),
      el('div', {
        class: 'menu__profile',
        role: 'button',
        tabindex: '0',
        onClick() { ctx.go('kits'); },
        onKeyDown(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ctx.go('kits'); } }
      },
        el('div', { class: 'menu__profile-avatar', text: (state.profile.name || 'P').slice(0, 1).toUpperCase() }),
        el('span', { text: state.profile.name || 'Perfil' })
      )
    )
  );

  // ------------------------------------------------------- rail icons ------
  const rail = el('div', { class: 'menu__rail' });

  function buildRail() {
    rail.replaceChildren();
    MENU_ITEMS.forEach((item, index) => {
      const iconBtn = el('button', {
        class: `menu__rail-icon${index === focusIndex ? ' is-active' : ''}`,
        type: 'button',
        'aria-label': item.label,
        onClick() {
          focusIndex = index;
          rebuildNav();
          rebuildRail();
        }
      }, svg(ICONS[item.icon] || ICONS.ball));
      rail.appendChild(iconBtn);
    });
  }

  function rebuildRail() {
    Array.from(rail.children).forEach((child, index) => {
      child.classList.toggle('is-active', index === focusIndex);
    });
  }

  // ------------------------------------------------------- nav items --------
  const nav = el('div', { class: 'menu__nav' });

  function rebuildNav() {
    nav.replaceChildren();
    MENU_ITEMS.forEach((item, index) => {
      const itemEl = el('div', {
        class: `menu__item${index === focusIndex ? ' is-focused' : ''}`,
        role: 'button',
        tabindex: '0',
        onClick() {
          ctx.go(item.target);
        },
        onKeyDown(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            ctx.go(item.target);
          }
        }
      },
        el('div', { class: 'menu__item-icon' }, svg(ICONS[item.icon] || ICONS.ball)),
        el('div', { class: 'menu__item-text' },
          el('span', { class: 'menu__item-label', text: item.label }),
          el('span', { class: 'menu__item-sub', text: item.sub })
        )
      );
      nav.appendChild(itemEl);
    });
  }

  // ------------------------------------------------------- hero text -------
  const hero = el('div', { class: 'menu__hero' },
    el('h2', { class: 'menu__hero-title', text: 'XFC 27' }),
    el('p', { class: 'menu__hero-sub', text: 'Copa do Mundo' })
  );

  // ------------------------------------------------------- footer ----------
  const footer = el('div', { class: 'menu__footer' },
    el('div', { class: 'menu__hub' },
      el('div', { class: 'menu__hub-item' }, svg(ICONS.hub), el('span', { text: 'XF Esports' })),
      el('div', { class: 'menu__hub-item' }, svg(ICONS.profile), el('span', { text: `${state.profile.level || 1}º` }))
    ),
    el('div', { class: 'menu__hints' },
      el('span', { class: 'menu__hint' }, el('kbd', { text: '↑↓' }), el('span', { text: ' navegar' })),
      el('span', { class: 'menu__hint' }, el('kbd', { text: 'Enter' }), el('span', { text: ' abrir' })),
      el('span', { class: 'menu__hint' }, el('kbd', { text: '←' }), el('span', { text: ' voltar' }))
    )
  );

  // ------------------------------------------------------- node assembly ---
  const node = el('div', { class: 'screen screen--menu' },
    particlesCanvas,
    scene3d,
    topbar,
    el('div', { class: 'menu__body' }, rail, nav, hero),
    footer
  );

  // ------------------------------------------------------- keyboard nav -----
  function onKey(event) {
    if (event.key === 'ArrowDown' || event.key === 'j') {
      focusIndex = (focusIndex + 1) % MENU_ITEMS.length;
      rebuildNav();
      rebuildRail();
      return true;
    }
    if (event.key === 'ArrowUp' || event.key === 'k') {
      focusIndex = (focusIndex - 1 + MENU_ITEMS.length) % MENU_ITEMS.length;
      rebuildNav();
      rebuildRail();
      return true;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      const item = MENU_ITEMS[focusIndex];
      ctx.go(item.target);
      return true;
    }
    if (event.key === 'Escape' || event.key === 'Backspace') {
      ctx.go('launch');
      return true;
    }
    return false;
  }

  // ------------------------------------------------------- lifecycle --------
  let particleRaf = null;

  function mount() {
    buildRail();
    rebuildNav();
    setupNeymar3D();
    addPlayerOverlays();

    // Particle loop
    function particleLoop() {
      drawParticles();
      particleRaf = requestAnimationFrame(particleLoop);
    }
    particleLoop();
  }

  function unmount() {
    if (particleRaf) cancelAnimationFrame(particleRaf);
    particleRaf = null;
    if (engine3d) {
      engine3d.stop();
      if (neymarModel) {
        neymarModel.dispose();
      }
      engine3d.dispose();
      engine3d = null;
    }
  }

  return { node, onKey, mount, unmount };
}

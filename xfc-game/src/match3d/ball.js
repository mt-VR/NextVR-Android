import {firstBallContact} from './ball-contact.js';
// A bola: física simples (gravidade, quique, atrito, arrasto e efeito Magnus)
// e a malha 3D com a textura clássica de gomos.

import { THREE, canvasTexture, softShadowTexture } from './engine.js';
import { BALL, PITCH, GOAL } from './constants.js';
import { applyBallAirForces, curveSpinRate, applyRollingResistance, guideBallVelocity } from './physics.js';


function drawBall(context, width, height) {
  context.fillStyle = '#f4f3ed';
  context.fillRect(0, 0, width, height);

  // Base perolada com relevo fino de microfibra; a iluminação 3D continua a
  // definir a forma esférica, a textura acrescenta apenas os gomos e costuras.
  const base = context.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, '#ffffff');
  base.addColorStop(0.46, '#f5f4ee');
  base.addColorStop(1, '#dedfd9');
  context.fillStyle = base;
  context.fillRect(0, 0, width, height);

  let seed = 0x27fc2026;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let index = 0; index < 2500; index += 1) {
    const x = random() * width;
    const y = random() * height;
    const radius = 0.35 + random() * 0.75;
    context.fillStyle = random() > 0.5 ? 'rgba(25,39,45,.07)' : 'rgba(255,255,255,.48)';
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  const hexPath = (cx, cy, rx, ry) => {
    context.beginPath();
    for (let corner = 0; corner < 6; corner += 1) {
      const angle = (Math.PI / 3) * corner + Math.PI / 6;
      const x = cx + Math.cos(angle) * rx;
      const y = cy + Math.sin(angle) * ry;
      if (corner === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.closePath();
  };

  // Gomos hexagonais com variação de branco e uma dupla costura em relevo.
  const columns = 8;
  const cellX = width / columns;
  const cellY = height / 6;
  for (let row = -1; row <= 6; row += 1) {
    for (let column = -1; column <= columns; column += 1) {
      const cx = column * cellX + (row % 2 ? cellX * 0.5 : 0) + cellX * 0.5;
      const cy = row * cellY + cellY * 0.5;
      hexPath(cx, cy, cellX * 0.49, cellY * 0.47);
      context.fillStyle = ['#fbfaf5', '#f0f1ec', '#f7f6f0'][(row - column + 12) % 3];
      context.fill();
      context.lineJoin = 'round';
      context.strokeStyle = 'rgba(12,24,30,.48)';
      context.lineWidth = Math.max(2.4, width * 0.0036);
      context.stroke();
      hexPath(cx, cy, cellX * 0.465, cellY * 0.445);
      context.strokeStyle = 'rgba(255,255,255,.82)';
      context.lineWidth = Math.max(0.8, width * 0.00115);
      context.stroke();
    }
  }

  // Arte original XFC: painéis largos em hélice, azul/noite, ciano e coral.
  // Sem logo/marca de fabricante licenciado; leitura nítida na câmera baixa.
  for(let row=0;row<3;row++)for(let col=-1;col<5;col++){
    const x=(col+(row%2)*.5)*width/4,y=(row+.5)*height/3;
    context.save();context.translate(x,y);context.rotate((row%2?.35:-.35));
    for(const [color,offset,size]of [['#102c50',0,1],['#11cfd4',.02,.67],['#ff5967',.045,.28]]){
      context.fillStyle=color;context.beginPath();
      context.moveTo(-width*.09,height*(offset-.065));
      context.quadraticCurveTo(0,-height*.14*size,width*.1,height*offset);
      context.lineTo(width*.055,height*(offset+.035));
      context.quadraticCurveTo(0,-height*.03,-width*.09,height*(offset-.065));context.fill();
    }
    context.restore();
  }

  // Discreet colored speed arcs and a tiny XFC mark add a current match-ball
  // finish without turning the entire ball into a flat graphic.
  context.save();
  context.globalAlpha = 0.78;
  context.strokeStyle = '#21bca1';
  context.lineWidth = Math.max(2, width * 0.003);
  for (const [cx, cy, direction] of [[0.31, 0.53, 1], [0.69, 0.23, -1], [0.88, 0.86, 1]]) {
    context.beginPath();
    context.moveTo(cx * width - 15, cy * height + direction * 8);
    context.quadraticCurveTo(cx * width, cy * height - direction * 12,
      cx * width + 17, cy * height + direction * 3);
    context.stroke();
  }
  context.restore();
  context.save();
  context.translate(width * 0.55, height * 0.51);
  context.rotate(-0.08);
  context.fillStyle = 'rgba(20, 99, 101, .9)';
  context.font = `900 ${Math.round(width * 0.018)}px Inter, sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText('XFC', 0, 0);
  context.restore();

  // Vinheta sutil dos polos, própria da projeção esférica UV.
  const poles = context.createLinearGradient(0, 0, 0, height);
  poles.addColorStop(0, 'rgba(28,42,48,.14)');
  poles.addColorStop(0.12, 'rgba(255,255,255,0)');
  poles.addColorStop(0.88, 'rgba(255,255,255,0)');
  poles.addColorStop(1, 'rgba(28,42,48,.12)');
  context.fillStyle = poles;
  context.fillRect(0, 0, width, height);
}

export function createBall(scene, { lowPower = false, onNetImpact = () => {} } = {}) {
  const texture = canvasTexture(lowPower ? 768 : 1024, lowPower ? 384 : 512, drawBall);
  texture.anisotropy = lowPower ? 2 : 8;
  const geometry = new THREE.SphereGeometry(BALL.radius, lowPower ? 36 : 56, lowPower ? 24 : 36);
  geometry.computeBoundingSphere();
  const material = lowPower
    ? new THREE.MeshPhongMaterial({ map: texture, shininess: 34, specular: 0x60676a })
    : new THREE.MeshPhysicalMaterial({
      map: texture, roughness: 0.34, metalness: 0.015, clearcoat: 0.18,
      clearcoatRoughness: 0.48, specularIntensity: 0.48, specularColor: 0xc8d4d8
    });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'xfc-match-ball';
  mesh.userData.spherical = true;
  mesh.userData.radius = BALL.radius;
  mesh.userData.panelTexture = 'xfc-pro-match-ball-v2';
  mesh.userData.design='xfc-orbit-cyan-coral-v3';
  mesh.castShadow = true;
  scene.add(mesh);
  const rollAxis = new THREE.Vector3();

  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(BALL.radius * 7.2, BALL.radius * 5.2),
    new THREE.MeshBasicMaterial({
      map: softShadowTexture(),
      color:0x07110a,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      toneMapped: false
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.018;
  scene.add(shadow);

  const state = {
    position: new THREE.Vector3(0, BALL.radius, 0),
    velocity: new THREE.Vector3(),
    spin: new THREE.Vector3(),
    owner: null,
    lastTouch: null,
    lastIntentionalTouch: null,
    // Evita que o mesmo jogador "mate" o chute em vários quadros seguidos.
    lastCollision: null,
    lastCollisionAt: -1,
    // Identifica cada passe/chute para que o goleiro não repita o mergulho
    // várias vezes durante a mesma trajetória.
    flightId: 0,
    guidance: null,
    goalPocket: 0,
    // Em falta/pênalti: segundos restantes em que NINGUÉM pode dominar a bola.
    // Contatos na barreira/goleiro só rebatem; zerado, o jogo volta ao normal.
    noAttachment: 0
  };

  function reset(x = 0, z = 0) {
    state.position.set(x, BALL.radius, z);
    state.velocity.set(0, 0, 0);
    state.spin.set(0, 0, 0);
    state.owner = null;
    state.goalPocket = 0;
    state.skillUntil = 0;
    state.rainbow = state.recovery = null;
    state.lastTouch = null;
    state.lastIntentionalTouch = null;
    state.guidance = null;
    state.passTarget=null;state.flightTime=0;state.offside=null;state.reception=null;
    state.noAttachment=0;state.lastPass=null;state.assistProvider=null;
    mesh.position.copy(state.position);
  }

  return {
    mesh,
    shadow,
    state,
    reset,
    /** Chute: aplica velocidade e um pouco de efeito. */
    kick(direction, power = 18, lift = 0.18, { guide = null, curve = 0 } = {}) {
      const speed = Math.max(0, Number(power) || 0);
      const dx = Number(direction?.x) || 0;
      const dz = Number(direction?.z) || 0;
      state.goalPocket = 0;
      state.offside=null;state.reception=null;
      state.rainbow = state.recovery = null;
      // Um novo chute/passe limpa qualquer proteção de bola parada anterior.
      // A falta/pênalti rearma a proteção logo depois (match.js).
      state.noAttachment = 0;
      state.flightId += 1;
      state.velocity.set(dx * speed, speed * lift, dz * speed);
      // X/Z representam a rotação de rolamento; Y guarda apenas o efeito lateral.
      // Separar o sidespin do rolamento evita forças verticais e curvas orbitais.
      state.spin.set(-dz * speed * 0.25, curveSpinRate(speed, curve), dx * speed * 0.25);
      state.guidance = guide ? { ...guide, elapsed: 0 } : null;
      state.passTarget=guide?.receiver||null;state.flightTime=0;
      state.owner = null;
    },
    /** Coloca a bola no pé de um jogador (domínio). */
    attachTo(player) {
      state.offside=null;state.reception=null;
      state.goalPocket = 0;
      state.noAttachment = 0;
      state.owner = player;
      state.passTarget=null;
      state.lastIntentionalTouch = player;
      state.velocity.set(0, 0, 0);
      state.guidance = null;
    },
    /**
     * Avança a física. `players` é a lista de quem pode tocar a bola.
     * Devolve o evento de borda (fora de campo / gol) quando acontecer.
     */
    update(dt, players = []) {
      const { position, velocity, spin } = state;
      state.flightTime=(state.flightTime||0)+dt;
      if(state.noAttachment>0)state.noAttachment=Math.max(0,state.noAttachment-dt);
      const previousX=position.x,previousY=position.y,previousZ=position.z;
      // Reposições/teletransportes administrativos podem mudar a posição sem
      // passar por kick/reset. Nunca levar o volume da rede para outra jogada.
      if(state.goalPocket && previousX*state.goalPocket<PITCH.halfLength)state.goalPocket=0;

      if (state.owner) {
        // A bola fica presa ao pé do dono, um pouco à frente.
        const owner = state.owner;
        const forward = owner.facing || new THREE.Vector3(0, 0, 1);
        position.set(
          (owner.x??owner.root.position.x) + forward.x * 0.45,
          BALL.radius,
          (owner.z??owner.root.position.z) + forward.z * 0.45
        );
        mesh.position.copy(position);
        shadow.position.set(position.x, 0.02, position.z);
        shadow.scale.setScalar(1);
        return null;
      }

      // Passe assistido: corrige suavemente o rumo para o espaço de recepção,
      // acompanhando a corrida do companheiro sem teletransportar a bola nem
      // impedir uma interceptação adversária.
      const guide = state.guidance;
      if (guide) {
        const receiver = guide.receiver;
        if (!receiver?.active || guide.elapsed > (guide.maxTime||2.4)) {
          state.guidance = null;
        } else {
          guide.elapsed += dt;
          const horizontalSpeed = Math.max(4, Math.hypot(velocity.x, velocity.z));
          const anchorX=guide.follow?receiver.x:guide.x,anchorZ=guide.follow?receiver.z:guide.z;
          const distance = Math.hypot(anchorX - position.x, anchorZ - position.z);
          const flightTime = Math.max(0.08, Math.min(0.7, distance / horizontalSpeed));
          const futureX = anchorX + (receiver.vx || 0) * flightTime * 0.45;
          const futureZ = anchorZ + (receiver.vz || 0) * flightTime * 0.45;
          const dx = futureX - position.x;
          const dz = futureZ - position.z;
          if(!guideBallVelocity(velocity,dx,dz,dt,guide.through?2.1:2.9))state.guidance=null;
        }
      }

      // Gravidade, resistência do ar e Magnus limitado. O sidespin modifica a
      // trajetória durante o voo sem substituir a velocidade de avanço.
      applyBallAirForces(velocity, spin, dt);
      position.addScaledVector(velocity, dt);

      // Quique no gramado.
      if (position.y <= BALL.radius) {
        position.y = BALL.radius;
        if (velocity.y < 0) velocity.y = -velocity.y * 0.58;
        if (Math.abs(velocity.y) < 0.6) velocity.y = 0;
        applyRollingResistance(velocity,dt);
        spin.multiplyScalar(1 - Math.min(1.6 * dt, 0.4));
      }

      // Contato contínuo: o primeiro jogador na trajetória domina, sem a bola
      // atravessar por causa da velocidade ou da ordem dos times no array.
      const contact=firstBallContact({x:previousX,y:previousY,z:previousZ},position,players,{
        radius:BALL.radius,ignore:state.flightTime<.2?state.lastIntentionalTouch:null
      });
      if(contact){
        const player=contact.player,from=state.lastIntentionalTouch,wasPass=!!state.passTarget;
        const protectedContact=state.noAttachment>0;
        position.set(contact.x,Math.max(BALL.radius,contact.y),contact.z);
        state.lastCollision=player;state.lastCollisionAt=performance.now()/1000;
        state.lastTouch=player;
        // Na falta/pênalti a bola NÃO gruda em ninguém (só no batedor, antes
        // do chute). Barreira e goleiro apenas rebatem e o jogo volta ao normal.
        if(!player.isKeeper&&!player.isGK&&!protectedContact){
          const offside=state.offside;
          this.attachTo(player);
          state.reception={player,from,wasPass,offside};
          state.offside=null;
          position.set((player.x??player.root.position.x)+(player.facing?.x||0)*.45,BALL.radius,(player.z??player.root.position.z)+(player.facing?.z||0)*.45);
          mesh.position.copy(position);shadow.position.set(position.x,.02,position.z);
          return null;
        }
        // Goleiro (e barreira/goleiro durante a proteção): contato físico rebate
        // para fora do corpo, em vez de só tirar 7% da velocidade e atravessá-lo.
        const px=player.x??player.root.position.x,pz=player.z??player.root.position.z;
        let nx=position.x-px,nz=position.z-pz,n=Math.hypot(nx,nz);
        if(n<.001){nx=-velocity.x;nz=-velocity.z;n=Math.hypot(nx,nz)||1;}nx/=n;nz/=n;
        const dot=velocity.x*nx+velocity.z*nz;
        if(dot<0){velocity.x-=1.55*dot*nx;velocity.z-=1.55*dot*nz;}
        const reach=(player.reach||.52)+BALL.radius+.025;position.x=px+nx*reach;position.z=pz+nz*reach;
        state.guidance=null;state.passTarget=null;
        if(protectedContact){
          // Já bateu: deixa só uma folga curta para a bola se afastar do corpo
          // e então retoma o domínio normal, sem grudar na barreira.
          state.noAttachment=Math.min(state.noAttachment,.28);
        }
      }

      // Traves e travessão.
      for (const side of [-1, 1]) {
        const goalX = side * PITCH.halfLength;
        if (Math.abs(position.x - goalX) < 0.4 && Math.abs(position.z) < GOAL.width / 2 + 0.2) {
          for (const z of [-GOAL.width / 2, GOAL.width / 2]) {
            // O poste só rebate a bola que passa raspando nele.
            if (Math.abs(position.z - z) < 0.18 && position.y < GOAL.height + 0.2) {
              position.z = z + Math.sign(position.z - z || 1) * 0.2;
              velocity.z = -velocity.z * 0.62;
            }
          }
          // O travessão: a bola rebate só se encostar na barra.
          if (Math.abs(position.z) < GOAL.width / 2 && Math.abs(position.y - GOAL.height) < 0.18) {
            position.y = GOAL.height + 0.2;
            velocity.y = -velocity.y * 0.55;
          }
        }
      }

      // Só captura uma bola que atravessou a BOCA do gol, nunca um chute
      // por fora. Teste varrido evita atravessar a rede em quadros lentos.
      if(!state.goalPocket && Math.abs(position.x)>=PITCH.halfLength && Math.abs(previousX)<=PITCH.halfLength){
        const side=Math.sign(position.x),denom=position.x-previousX;
        const t=denom?Math.max(0,Math.min(1,(side*PITCH.halfLength-previousX)/denom)):1;
        const y=previousY+(position.y-previousY)*t,z=previousZ+(position.z-previousZ)*t;
        if(y<GOAL.height && Math.abs(z)<GOAL.width/2)state.goalPocket=side;
      }
      if(state.goalPocket){
        const side=state.goalPocket,back=PITCH.halfLength+GOAL.depth-BALL.radius;
        const hit=(surface,speed)=>{if(speed>.25)onNetImpact({side,surface,speed,point:{x:position.x,y:position.y,z:position.z}});};
        if(Math.abs(position.x)>back){
          position.x=side*back;hit('back',Math.abs(velocity.x));velocity.x=-side*Math.abs(velocity.x)*.16;velocity.y*=.65;velocity.z*=.65;
        }
        const limit=GOAL.width/2-BALL.radius;
        if(Math.abs(position.z)>limit){
          const direction=Math.sign(position.z);position.z=direction*limit;hit(direction>0?'right':'left',Math.abs(velocity.z));velocity.z=-direction*Math.abs(velocity.z)*.22;
        }
        if(position.y>GOAL.height-BALL.radius){
          position.y=GOAL.height-BALL.radius;hit('top',Math.max(0,velocity.y));velocity.y=-Math.abs(velocity.y)*.18;
        }
        // A boca continua aberta: rebote pode sair de volta para o campo.
        if(position.x*side<PITCH.halfLength)state.goalPocket=0;
      }

      // Limites da arena (as laterais tratam as regras depois).
      position.x = Math.max(-PITCH.halfLength - 6, Math.min(PITCH.halfLength + 6, position.x));
      position.z = Math.max(-PITCH.halfWidth - 6, Math.min(PITCH.halfWidth + 6, position.z));

      mesh.position.copy(position);
      shadow.position.set(position.x, 0.02, position.z);
      const shadowScale = Math.max(0.55, 1 - position.y * 0.25);
      shadow.scale.setScalar(1+Math.min(1.5,position.y*.16));
      shadow.material.opacity = 0.9 * shadowScale;

      // A bola gira conforme anda.
      const speed = Math.hypot(velocity.x, velocity.z);
      if (speed > 0.05) {
        rollAxis.set(velocity.z, 0, -velocity.x).normalize();
        mesh.rotateOnWorldAxis(rollAxis, (speed * dt) / BALL.radius);
      }
      return null;
    },
    dispose() {
      mesh.geometry.dispose();
      mesh.material.map?.dispose();
      mesh.material.dispose();
      mesh.parent?.remove(mesh);
      shadow.geometry.dispose();
      shadow.material.dispose();
      shadow.parent?.remove(shadow);
    }
  };
}

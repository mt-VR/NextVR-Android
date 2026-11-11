import test from 'node:test';
import assert from 'node:assert/strict';
import {faceVelocity,steerPlayer} from '../xfc-game/src/match3d/movement.js';
import {guideBallVelocity,applyRollingResistance} from '../xfc-game/src/match3d/physics.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

test('corpo acompanha também caminhada lenta nos quatro sentidos, sem perseguir a bola',()=>{
  for(const fps of [30,60,120])for(const [vx,vz]of [[.5,0],[-.5,0],[0,.5],[0,-.5]]){
    const p={vx,vz,facingAngle:2*Math.PI+.7,root:{rotation:{y:0}},facing:{x:0,z:0},turnLean:0};
    for(let i=0;i<fps;i++)assert.equal(faceVelocity(p,1/fps),true);
    assert.ok((p.facing.x*vx+p.facing.z*vz)/.5>.999);
  }
});
test('corrida com comando constante acelera e mantém velocidade, sem queda periódica',()=>{
  for(const fps of [30,60,120]){
    const p={x:0,z:0,vx:0,vz:0};let previous=0;
    for(let i=0;i<fps*4;i++){
      const speed=steerPlayer(p,p.x+6,p.z,1/fps,7.2,{arrive:.2,turn:10});
      assert.ok(speed>=previous-1e-8);assert.ok(speed-previous<=9.5/fps+1e-8);previous=speed;
    }
    assert.ok(previous>7.19);
  }
});
test('assistência só vira o passe: não freia, acelera bola parada ou dá meia-volta',()=>{
  for(const fps of [30,60,120]){
    const v={x:12,y:0,z:0};
    for(let i=0;i<fps;i++){assert.ok(guideBallVelocity(v,10,7,1/fps));assert.ok(Math.abs(Math.hypot(v.x,v.z)-12)<1e-9);}
    const before={...v};assert.equal(guideBallVelocity(v,-10,-7,1/fps),false);assert.deepEqual(v,before);
  }
  const stopped={x:0,y:0,z:0};assert.equal(guideBallVelocity(stopped,10,0,.1),false);assert.deepEqual(stopped,{x:0,y:0,z:0});
  const roll={x:8,z:0};for(let i=0;i<60;i++)applyRollingResistance(roll,1/60);
  assert.ok(Math.abs(roll.x-6.65)<1e-8);
  for(let i=0;i<600;i++)applyRollingResistance(roll,1/60);
  assert.equal(roll.x,0);
});
test('CORRER permanece pressionado ao desviar/retornar o dedo e solta no cancelamento',{timeout:60000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage();await p.goto(url);const r=await p.evaluate(async()=>{
    const {createControls}=await import('/src/match3d/controls.js');const sprint=[],commands=[];
    const root=document.createElement('div');document.body.append(root);
    const controls=createControls({root,onCommand:x=>commands.push(x),onSprint:x=>sprint.push(x),onMove(){}});
    root.append(controls.node);const button=root.querySelector('.ctrl-btn--sprint');button.setPointerCapture=()=>{};
    const event=(type,y)=>button.dispatchEvent(new PointerEvent(type,{pointerId:41,clientX:120,clientY:y,bubbles:true}));
    event('pointerdown',200);event('pointermove',130);event('pointermove',200);
    const held=sprint.slice();event('pointerup',200);const released=sprint.slice();
    event('pointerdown',200);event('pointermove',130);event('pointerup',130);
    event('pointerdown',200);event('pointercancel',200);controls.dispose();root.remove();
    return{held,released,commands,last:sprint.at(-1)};
  });assert.deepEqual(r.held,[true]);assert.deepEqual(r.released,[true,false]);assert.deepEqual(r.commands,['rainbow']);assert.equal(r.last,false);
  }finally{await b.close();server.close();}
});
test('bola real rola sem freada brusca e direção da cabeça cruza -PI/PI pelos dois lados',{timeout:90000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage();await p.goto(url);const r=await p.evaluate(async()=>{
    const {THREE}=await import('/src/match3d/engine.js'),{createBall}=await import('/src/match3d/ball.js');
    const distances=[];
    for(const fps of [30,60,120]){
      const ball=createBall(new THREE.Scene());ball.reset(-25,20);ball.kick({x:1,z:0},8,0);
      let maxDrop=0,last=8,speedAfterOne;
      for(let i=0;i<fps*3;i++){ball.update(1/fps,[]);const speed=Math.hypot(ball.state.velocity.x,ball.state.velocity.z);maxDrop=Math.max(maxDrop,last-speed);last=speed;if(i===fps-1)speedAfterOne=speed;}
      distances.push({distance:ball.state.position.x+25,speedAfterOne,last,maxDrop});ball.dispose();
    }
    const {preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js');await preloadFootballerPack();const m=createGltfPlayer();
    const yaw=[];
    for(const angle of [2*Math.PI-.3,-2*Math.PI+.3]){m.root.rotation.y=angle;m.update(1/60,{speed:0});m.lookAt({x:0,y:0,z:10});yaw.push(m.bones.neck.rotation.y);}
    m.dispose();return{distances,yaw};
  });for(const row of r.distances){assert.ok(row.speedAfterOne>6);assert.ok(row.last>2);assert.ok(row.maxDrop<.07);assert.ok(row.distance>16&&row.distance<20);}
    assert.ok(Math.abs(r.distances[0].distance-r.distances[2].distance)<.2);assert.ok(r.yaw[0]>0&&r.yaw[1]<0);
  }finally{await b.close();server.close();}
});
test('partida: portador mantém sprint, vira devagar nos dois lados e recebe passe sem esperar parar',{timeout:90000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage();await p.goto(url);const r=await p.evaluate(async()=>{
    const {createMatch}=await import('/src/match3d/match.js'),{TEAMS}=await import('/src/data/teams.js');
    const {preloadFootballerPack}=await import('/src/match3d/models.js');await preloadFootballerPack();
    const m=createMatch({canvas:document.createElement('canvas'),home:TEAMS[0],away:TEAMS[1],graphicsQuality:'low'});
    m.start();m.stop();m.world.setPaused(false);m.phase.name='play';
    const hero=m.controlled.home;for(const team of Object.values(m.teams))for(const player of team.players)player.active=player===hero;
    hero.x=0;hero.z=0;hero.vx=hero.vz=0;hero.root.position.set(0,0,0);m.ball.attachTo(hero);
    Object.assign(m.world.input,{moveX:1,moveZ:0,sprint:true});let min=Infinity,max=0;
    for(let i=0;i<180;i++){m.world.tick(1/60);if(i>90){const v=Math.hypot(hero.vx,hero.vz);min=Math.min(min,v);max=Math.max(max,v);}}
    const dots=[];
    for(const x of [-.14,.14]){
      Object.assign(m.world.input,{moveX:x,sprint:false});
      for(let i=0;i<120;i++)m.world.tick(1/60);
      dots.push(hero.facing.x*Math.sign(x));
    }
    const mate=m.teams.home.players.find(p=>p!==hero&&!p.isKeeper);mate.active=true;mate.x=0;mate.z=0;mate.vx=mate.vz=0;mate.root.position.set(0,0,0);
    hero.x=-12;hero.z=10;hero.vx=hero.vz=0;hero.root.position.set(-12,0,10);
    Object.assign(m.world.input,{moveX:0,moveZ:0,sprint:false});m.ball.reset(-.75,0);
    m.ball.kick({x:1,z:0},12,0,{guide:{receiver:mate,x:0,z:0}});m.ball.state.lastTouch=hero;
    m.world.tick(1/120);
    const received=m.ball.state.owner===mate;
    m.dispose();return{min,max,dots,received};
  });assert.ok(r.min>7);assert.ok(r.max-r.min<.02);assert.ok(r.dots.every(d=>d>.99));assert.ok(r.received);
  }finally{await b.close();server.close();}
});

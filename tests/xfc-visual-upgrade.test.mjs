import test from 'node:test';
import assert from 'node:assert/strict';
import {GRAPHICS_PRESETS,graphicsPreset,selectShadowCasters} from '../xfc-game/src/match3d/quality.js';
import {kickPose} from '../xfc-game/src/match3d/football-actions.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';
test('quatro qualidades: orçamento crescente, fallback mobile seguro e sem alterar entrada',()=>{
  assert.deepEqual(Object.keys(GRAPHICS_PRESETS),['low','medium','high','ultra']);
  assert.equal(graphicsPreset('inválido',true).id,'low');assert.equal(graphicsPreset('ultra',true).id,'ultra');
  assert.equal(GRAPHICS_PRESETS.low.shadows,false);assert.equal(GRAPHICS_PRESETS.medium.surface,true);
  const players=Array.from({length:22},(_,i)=>({active:true,x:i,z:0})),hero=players[21],ball={x:0,z:0};
  const high=selectShadowCasters(players,hero,ball,GRAPHICS_PRESETS.high);
  assert.equal(high.size,6);assert.ok(high.has(hero));assert.ok(high.has(players[0]));assert.ok(!high.has(players[10]));
  assert.equal(selectShadowCasters(players,hero,ball,graphicsPreset('ultra')).size,10);
  assert.equal(selectShadowCasters(players,hero,ball,GRAPHICS_PRESETS.low).size,0);
  assert.ok(GRAPHICS_PRESETS.high.grass<GRAPHICS_PRESETS.ultra.grass);assert.ok(GRAPHICS_PRESETS.ultra.shadowSize<=2048);
});
test('preparação/contato/finalização contínuos, passe menor que chute forte',()=>{
  for(const kind of ['pass','power','shot']){let last;
    for(let i=0;i<=1000;i++){const pose=kickPose(i/1000,kind);assert.ok(Object.values(pose).every(Number.isFinite));if(last)assert.ok(Math.abs(last.hip-pose.hip)<.03);last=pose;}}
  assert.ok(Math.abs(kickPose(.6,'power').hip)>Math.abs(kickPose(.6,'pass').hip));
});
test('materiais, luz/relva e quatro perfis compilam no WebGL sem trocar o corpo',{timeout:120000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage({viewport:{width:960,height:540}}),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error'&&/THREE|WebGL|shader/i.test(m.text()))errors.push(m.text());});await p.goto(url);
    const r=await p.evaluate(async()=>{
      const {createEngine}=await import('/src/match3d/engine.js'),{buildStadium}=await import('/src/match3d/stadium.js'),{preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js');await preloadFootballerPack();
      const reports=[];
      for(const quality of ['low','medium','high','ultra']){
        const canvas=document.createElement('canvas'),engine=createEngine(canvas,{graphicsQuality:quality,lowPower:false});engine.resize(480,270);
        const stadium=buildStadium(engine.scene,{lowPower:engine.lowPower,graphics:engine.graphics,timeOfDay:'day'});
        const m=createGltfPlayer({name:'Neymar',number:10,graphics:engine.graphics});engine.scene.add(m.root);
        engine.camera.position.set(3,1.6,4);engine.camera.lookAt(0,1,0);m.update(1/60,{speed:6});
        await new Promise(r=>setTimeout(r,150));engine.renderer.render(engine.scene,engine.camera);
        const parts=[];m.body.traverse(o=>{if(o.isSkinnedMesh)parts.push([o.name,o.geometry.attributes.position.count]);});
        const pitch=engine.scene.getObjectByName('xfc-pitch'),blades=engine.scene.getObjectByName('xfc-procedural-grass');
        let cloth=false;m.body.traverse(o=>{if(o.material?.name==='Micah | top')cloth=Boolean(o.material.bumpMap);});
        reports.push({quality,pixel:engine.renderer.getPixelRatio(),shadows:engine.renderer.shadowMap.enabled,grass:blades?.count||0,pitchBump:Boolean(pitch.material.bumpMap),cloth,parts});
        m.dispose();stadium.dispose();engine.dispose();
      }return reports;
    });
    for(const row of r){const q=GRAPHICS_PRESETS[row.quality];assert.equal(row.pixel,q.pixelRatio);assert.equal(row.shadows,q.shadows);assert.equal(row.grass,q.grass);assert.equal(row.pitchBump,q.surface);assert.equal(row.cloth,q.surface);assert.deepEqual(row.parts,r[0].parts);}
    assert.deepEqual(errors,[]);
  }finally{await b.close();server.close();}
});
test('replay grava no máximo 61 poses e restaura câmera, ossos, bola e pausa',{timeout:90000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);await p.waitForSelector('.screen.is-visible');const r=await p.evaluate(async()=>{
    const {THREE}=await import('/src/match3d/engine.js'),{createVisualReplay}=await import('/src/match3d/replay.js');
    const root=new THREE.Group(),bone=new THREE.Bone();root.add(bone);const ball={mesh:new THREE.Object3D(),shadow:new THREE.Mesh(new THREE.PlaneGeometry(),new THREE.MeshBasicMaterial())};
    const camera=new THREE.PerspectiveCamera();camera.position.set(3,4,5);let renders=0;
    const engine={camera,running:false,scene:new THREE.Scene(),renderer:{render(){renders++;}}};
    const replay=createVisualReplay(engine,[{root,model:{bones:{bone}}}],ball);
    for(let i=0;i<90;i++){root.position.x=i;bone.rotation.x=i*.01;ball.mesh.position.z=i;ball.shadow.scale.setScalar(1+i*.03);ball.shadow.material.opacity=.33;replay.capture(.1);}
    const before={x:root.position.x,q:bone.quaternion.toArray(),ball:ball.mesh.position.toArray(),camera:camera.position.toArray(),scale:ball.shadow.scale.toArray(),opacity:ball.shadow.material.opacity};
    const count=replay.frameCount,started=replay.start();await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));const moved=root.position.x!==before.x;replay.stop();
    const after={x:root.position.x,q:bone.quaternion.toArray(),ball:ball.mesh.position.toArray(),camera:camera.position.toArray(),scale:ball.shadow.scale.toArray(),opacity:ball.shadow.material.opacity};replay.dispose();return{before,after,count,started,moved,renders,active:replay.active};
  });assert.deepEqual(errors,[]);assert.equal(r.count,61);assert.ok(r.started&&r.moved&&r.renders>0,JSON.stringify(r));assert.equal(r.active,false);assert.equal(r.before.x,r.after.x);assert.deepEqual(r.before.ball,r.after.ball);assert.deepEqual(r.before.camera,r.after.camera);assert.deepEqual(r.before.scale,r.after.scale);assert.equal(r.before.opacity,r.after.opacity);r.before.q.forEach((x,i)=>assert.ok(Math.abs(x-r.after.q[i])<1e-6));
  }finally{await b.close();server.close();}
});
test('UT usa o painel inteiro, retratos existentes, hotspots e qualidade persistida',{timeout:90000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage({viewport:{width:1280,height:720}});await p.goto(url);await p.evaluate(async()=>{(await import('/src/main.js')).go('ultimate');});
    assert.match(await p.locator('.ut-ref--home').evaluate(n=>getComputedStyle(n).backgroundImage),/\/home\.png/);
    const play=await p.getByRole('button',{name:'Jogar UT',exact:true}).boundingBox();assert.ok(play.x<60&&play.y>180&&play.y<210);
    await p.getByRole('button',{name:'Meu Clube',exact:true}).click();assert.equal(await p.locator('.ut-ref-slot').count(),11);assert.equal(await p.locator('.ut-ref-slot .avatar img').count(),11);
    await p.getByRole('button',{name:'Entrar · gerenciar elenco',exact:true}).click();assert.equal(await p.locator('.ut-slot').count(),11);await p.keyboard.press('Escape');await p.keyboard.press('Escape');
    await p.getByRole('button',{name:'Configurações',exact:true}).click();await p.getByLabel('Qualidade gráfica').selectOption('high');await p.reload();
    assert.equal(await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')).graphicsQuality),'high');
  }finally{await b.close();server.close();}
});
test('partida real: replay na pausa não altera placar, física nem perfil',{timeout:120000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.graphicsQuality='low';m.go('play',{home:'fc-barcelona',away:'real-madrid'});});await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
    await p.evaluate(()=>{const m=__xfcMatch;for(let i=0;i<180;i++){if(m.phase.name==='kickoff')m.world.command('pass');m.world.tick(1/60);}});await p.click('.play__pause-button');
    const snapshot=()=>p.evaluate(()=>({snapshot:__xfcMatch.world.snapshot(),positions:__xfcMatch.teams.home.players.map(x=>[x.x,x.z]),ball:__xfcMatch.ball.state.position.toArray(),profile:localStorage.getItem('xfc.profile.v1')}));
    assert.ok(await p.evaluate(()=>__xfcMatch.world.replay.frameCount>2));
    const before=await snapshot();await p.getByRole('button',{name:'CONFIGURAÇÕES',exact:true}).click();await p.getByRole('button',{name:'REVER ÚLTIMO LANCE',exact:true}).click();await p.waitForSelector('.play-replay');
    await p.getByRole('button',{name:'Voltar à pausa',exact:true}).click();assert.deepEqual(await snapshot(),before);assert.equal(await p.evaluate(()=>__xfcMatch.world.isPaused()),true);assert.equal(await p.evaluate(()=>__xfcMatch.engine.running),false);assert.deepEqual(errors,[]);
  }finally{await b.close();server.close();}
});

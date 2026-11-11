import test from 'node:test';
import assert from 'node:assert/strict';
import {stat,readFile} from 'node:fs/promises';
import {ASSET_LIBRARY,LIBRARY_KITS,LIBRARY_CRESTS,bindAssetProfile,setAssetChoice,portraitFor,crestFor,libraryKitFor,libraryProfileIcon} from '../xfc-game/src/data/asset-library.js';
import {TEAMS} from '../xfc-game/src/data/teams.js';
import {CLEAN_CRESTS} from '../xfc-game/src/data/asset-library-clean.js';
import {graphicsPreset,selectShadowCasters,createDetailGovernor} from '../xfc-game/src/match3d/quality.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

test('1976 recortes locais íntegros, sem scripts/URLs remotas; três atlas de camisa adaptados',async()=>{
  assert.equal(ASSET_LIBRARY.length,1976);assert.equal(new Set(ASSET_LIBRARY.map(a=>a.id)).size,1976);
  for(const asset of ASSET_LIBRARY){assert.match(asset.sourceFile||asset.file,/^assets\/library\/\d{4}\.jpg$/);const data=await readFile('xfc-game/'+(asset.sourceFile||asset.file));assert.equal(data.readUInt16BE(0),0xffd8);if(asset.transparent){assert.equal(asset.file,CLEAN_CRESTS[asset.id]);const png=await readFile('xfc-game/'+asset.file);assert.equal(png.subarray(1,4).toString(),'PNG');}assert.ok(asset.w>0&&asset.h>0);}
  assert.equal(LIBRARY_KITS.length,3);for(const k of LIBRARY_KITS){assert.ok((await stat('xfc-game/'+k.front)).size>100);assert.ok((await stat('xfc-game/'+k.back)).size>100);}
});
test('escolhas por ID validadas, sem atribuição automática de identidades; persistência e reversão',()=>{
  const profile={};bindAssetProfile(profile);const player={id:'test-player',photo:'old.jpg'};
  assert.equal(portraitFor(player),'old.jpg');assert.equal(setAssetChoice(profile,'faces',player.id,'https://x.test/a'),false);
  assert.equal(setAssetChoice(profile,'faces',player.id,211),false);assert.equal(setAssetChoice(profile,'faces',player.id,626),true);
  bindAssetProfile(JSON.parse(JSON.stringify(profile)));assert.match(portraitFor(player),/0626.jpg$/);
  setAssetChoice(profile,'faces',player.id,null);assert.equal(portraitFor(player),'old.jpg');
  assert.equal(crestFor('real-madrid','old.png'),'old.png');setAssetChoice(profile,'crests','real-madrid',211);assert.match(crestFor('real-madrid','old.png'),/clean\/0211.png$/);setAssetChoice(profile,'crests','real-madrid','original');assert.equal(crestFor('real-madrid','old.png'),'old.png');
  assert.equal(setAssetChoice(profile,'kits','real-madrid',2),true);assert.equal(libraryKitFor('real-madrid').id,2);assert.equal(setAssetChoice(profile,'kits','real-madrid',605),false);
  bindAssetProfile({});
});
test('Ultra móvel reduz pixels, atlas de camisa, grama e sombras sem alterar materiais/corpos',()=>{
  const q=graphicsPreset('ultra',true),desktop=graphicsPreset('ultra',false);
  assert.equal(q.id,'ultra');assert.ok(q.surface);assert.equal(q.pixelRatio,1);assert.equal(q.antialias,false);
  assert.equal(q.shadowSize,1024);assert.equal(q.jerseySize,512);assert.equal(q.grass,12000);assert.equal(q.shadowHz,20);
  assert.ok(desktop.pixelRatio>q.pixelRatio);assert.ok(q.pixelRatio**2/1.5**2<.45);
  const players=Array.from({length:22},(_,i)=>({active:true,x:i,z:0}));
  const set=selectShadowCasters(players,players[21],{x:0,z:0},q);assert.equal(set.size,6);assert.ok(set.has(players[21]));
});
test('proteção de Ultra tem histerese e recupera, sem redimensionar ou mudar mapa de sombras',()=>{
  const q=graphicsPreset('ultra',true),g=createDetailGovernor(q),base={...q};
  assert.equal(g.sample(20),false);assert.equal(g.sample(20),true);assert.equal(g.level,1);
  g.sample(20);g.sample(20);assert.equal(g.level,2);assert.ok(q.grass<base.grass/2);assert.equal(q.shadowPlayers,3);
  assert.equal(q.pixelRatio,base.pixelRatio);assert.equal(q.shadowSize,base.shadowSize);assert.equal(q.surface,true);
  for(let i=0;i<5;i++)assert.equal(g.sample(60),false);assert.equal(g.sample(60),true);assert.equal(g.level,1);
  for(let i=0;i<6;i++)g.sample(60);assert.equal(g.level,0);assert.equal(q.grass,base.grass);
});
test('biblioteca: paginação limitada, faces/escudos/kit aplicados, reload e uso no UT',{timeout:120000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
    await p.evaluate(async()=>{(await import('/src/main.js')).go('customise');});await p.getByRole('button',{name:'Biblioteca de faces, escudos e camisas',exact:true}).click();
    assert.ok(await p.locator('.asset-library__item').count()<=36);await p.getByLabel('Time de destino').selectOption('fc-barcelona');await p.getByLabel('Jogador de destino').selectOption('barca-ter-stegen');
    await p.getByLabel('Buscar recorte').fill('626');await p.getByLabel('Buscar recorte').press('Backspace');assert.equal(await p.getByLabel('Buscar recorte').inputValue(),'62');await p.getByLabel('Buscar recorte').fill('626');await p.getByRole('button',{name:'Selecionar recorte 626',exact:true}).click();await p.getByRole('button',{name:'Aplicar retrato no jogador'}).click();
    await p.getByRole('button',{name:'Camisas / atlas',exact:true}).click();await p.getByLabel('Buscar recorte').fill('2');await p.getByRole('button',{name:'Selecionar recorte 2',exact:true}).click();await p.getByRole('button',{name:'Vestir uniforme no time'}).click();
    await p.reload();const saved=await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')).assetOverrides);assert.equal(saved.faces['barca-ter-stegen'],626);assert.equal(saved.kits['fc-barcelona'],2);
    await p.evaluate(async()=>{(await import('/src/main.js')).go('ultimate',{section:'squad'});});assert.equal(await p.locator('.ut-ref-slot .avatar img[src="assets/library/0626.jpg"]').count(),1);
    await p.evaluate(async()=>{(await import('/src/main.js')).go('kits',{home:'fc-barcelona',away:'real-madrid'});});assert.ok(await p.locator('img[src="assets/library/kit-2-front.png"]').count()>0);assert.deepEqual(errors,[]);
  }finally{await b.close();server.close();}
});
test('textura enviada chega ao material da camisa existente no Ultra móvel, sem deformar corpo',{timeout:120000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error'&&/shader|WebGL|THREE/.test(m.text()))errors.push(m.text());});await p.goto(url);const result=await p.evaluate(async()=>{
    const {THREE,createEngine}=await import('/src/match3d/engine.js'),{preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js');const {LIBRARY_KITS}=await import('/src/data/asset-library.js');
    await preloadFootballerPack();const engine=createEngine(document.createElement('canvas'),{graphicsQuality:'ultra',lowPower:true});const k=LIBRARY_KITS[0];
    const m=createGltfPlayer({name:'Personalizado',number:10,graphics:engine.graphics,kit:{primary:'#fff',secondary:'#fff',libraryFront:k.front,libraryBack:k.back}});engine.scene.add(m.root);
    let shirt;m.body.traverse(o=>{if(o.material?.name==='Micah | top')shirt=o;});const initial=shirt.material.map.version;
    const until=performance.now()+5000;while(shirt.material.map.version<=initial+1&&performance.now()<until)await new Promise(r=>setTimeout(r,20));
    engine.camera.position.set(0,1.6,4);engine.camera.lookAt(0,1,0);engine.renderer.render(engine.scene,engine.camera);
    const data={version:shirt.material.map.version,initial,width:shirt.material.map.image.width,shadowSize:engine.graphics.shadowSize,root:m.root.userData.modelId};m.dispose();engine.dispose();return data;
  });assert.deepEqual(errors,[]);assert.ok(result.version>result.initial+1);assert.equal(result.width,512);assert.equal(result.shadowSize,1024);assert.equal(result.root,'xfc-footballer-glb');
  }finally{await b.close();server.close();}
});
test('motor aplica proteção ao Ultra sem recriar framebuffer; contagem da grama acompanha orçamento',{timeout:60000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage();await p.goto(url);const result=await p.evaluate(async()=>{
    const {createEngine,THREE}=await import('/src/match3d/engine.js');const e=createEngine(document.createElement('canvas'),{graphicsQuality:'ultra',lowPower:true});
    // Isolar governança, não medir FPS com renderizador de software.
    const grass=new THREE.Object3D();grass.name='xfc-procedural-grass';grass.count=12000;grass.instanceMatrix={count:12000};e.scene.add(grass);
    const ratio=e.renderer.getPixelRatio();let resizes=0,shadowPasses=0;const resize=e.renderer.setPixelRatio.bind(e.renderer);e.renderer.setPixelRatio=x=>{resizes++;resize(x);};
    e.renderer.render=()=>{if(e.renderer.shadowMap.needsUpdate)shadowPasses++;e.renderer.shadowMap.needsUpdate=false;};e.clock.getDelta=()=>.1;
    await new Promise(resolve=>{e.start(()=>{if(e.state.frames>=45){e.stop();resolve();}});});
    const r={level:e.state.detailLevel,grass:grass.count,budget:e.graphics.grass,resizes,ratio:e.renderer.getPixelRatio(),initialRatio:ratio,auto:e.renderer.shadowMap.autoUpdate};e.dispose();return r;
  });assert.equal(result.level,1);assert.equal(result.grass,8400);assert.equal(result.grass,result.budget);assert.equal(result.resizes,0);assert.equal(result.ratio,result.initialRatio);assert.equal(result.auto,false);
  }finally{await b.close();server.close();}
});

test('atualização mantém todos os logos antigos por padrão, inclusive saves v0.5.27 sem escolha',()=>{
  for(const profile of [{},{assetOverrides:{faces:{'barca-ter-stegen':626},kits:{'fc-barcelona':2}}}]){
    bindAssetProfile(profile);
    for(const id of Object.keys(LIBRARY_CRESTS))assert.equal(TEAMS.find(t=>t.id===id).crest,`assets/crests/${id}.png`);
    assert.equal(libraryProfileIcon(),null);
  }
  bindAssetProfile({});
});
test('PNG dos escudos: transparência externa, preto interno preservado e escolha explícita no jogo',{timeout:60000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage();await p.goto(url);
    const results=await p.evaluate(async()=>{
      const {CLEAN_CRESTS}=await import('/src/data/asset-library-clean.js');const results=[];
      for(const [id,path]of Object.entries(CLEAN_CRESTS)){
        const im=new Image();im.src=path;await im.decode();const canvas=document.createElement('canvas');canvas.width=im.width;canvas.height=im.height;const ctx=canvas.getContext('2d');ctx.drawImage(im,0,0);
        const d=ctx.getImageData(0,0,im.width,im.height).data;let transparent=0,black=0,opaque=0;
        for(let i=0;i<d.length;i+=4){if(d[i+3]===0)transparent++;if(d[i+3]>240){opaque++;if(Math.max(d[i],d[i+1],d[i+2])<50)black++;}}
        results.push({id:Number(id),transparent,black,opaque,total:d.length/4});
      }return results;
    });
    assert.equal(results.length,82);for(const r of results){assert.ok(r.transparent>r.total*.01,`sem alpha externo: ${r.id}`);assert.ok(r.opaque>r.total*.1,`escudo apagado: ${r.id}`);}
    assert.ok(results.find(r=>r.id===719).black>1000,'preto interno do Botafogo não é chroma key');
    await p.evaluate(async()=>{(await import('/src/main.js')).go('asset-library',{category:'marks',teamId:'real-madrid'});});
    await p.getByLabel('Buscar recorte').fill('211');await p.getByRole('button',{name:'Selecionar recorte 211',exact:true}).click();
    assert.match(await p.locator('.asset-library__preview img').getAttribute('src'),/clean\/0211.png$/);
    await p.getByRole('button',{name:'Usar escudo no time'}).click();
    assert.match(await p.evaluate(async()=>(await import('/src/data/teams.js')).getTeam('real-madrid').crest),/clean\/0211.png$/);
    await p.getByRole('button',{name:'Restaurar padrão'}).click();
    assert.equal(await p.evaluate(async()=>(await import('/src/data/teams.js')).getTeam('real-madrid').crest),'assets/crests/real-madrid.png');
  }finally{await b.close();server.close();}
});

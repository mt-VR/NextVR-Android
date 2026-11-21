import {THREE as T} from './engine.js';
import {preloadFootballerPack,createGltfPlayer} from './models.js';
import {CAREER_HAIR_ALIAS} from './hair-lab.js';

// Cutscene de conquista de título.
//
// A cena é curta de propósito (7 s): o estádio aparece no fundo, os atletas
// levantam os braços e a taça sobe girando na frente da câmera. É tudo
// geometria procedural — nenhum asset externo, nenhum estado da partida — para
// poder rodar logo depois do apito final, em qualquer aparelho.

const V=(x=0,y=0,z=0)=>new T.Vector3(x,y,z);
const ease=t=>t*t*(3-2*t);
const clamp01=t=>Math.min(1,Math.max(0,t));

/**
 * A taça em três formatos: continental (Champions), mundial (Copa) e nacional
 * (Brasileirão/Libertadores). O formato muda o corpo; a base é a mesma.
 */
function buildTrophy(kind, materials) {
  const group=new T.Group();
  const gold=materials.gold, dark=materials.dark, silver=materials.silver;
  const parts=[];
  const add=(geometry,material,position=[0,0,0],rotation=null)=>{
    const mesh=new T.Mesh(geometry,material);
    mesh.position.set(...position);
    if(rotation)mesh.rotation.set(...rotation);
    mesh.castShadow=true;mesh.receiveShadow=true;
    group.add(mesh);parts.push(mesh);return mesh;
  };
  // Base de mármore + anel dourado.
  add(new T.CylinderGeometry(.17,.20,.055,32),dark,[0,.0275,0]);
  add(new T.CylinderGeometry(.135,.155,.035,32),gold,[0,.0725,0]);
  if(kind==='worldcup'){
    // Copa do Mundo: corpo em "globo" segurado por duas mãos estilizadas.
    add(new T.SphereGeometry(.088,24,18),gold,[0,.245,0]);
    add(new T.CylinderGeometry(.055,.085,.075,24),gold,[0,.145,0]);
    for(const side of [-1,1]){
      const arm=add(new T.CapsuleGeometry(.018,.10,4,10),gold,[side*.085,.215,0]);
      arm.rotation.z=side*.55;
    }
  }else if(kind==='continental'){
    // Champions: corpo alto, orelhas curvas e alça.
    add(new T.CylinderGeometry(.062,.095,.16,24),silver,[0,.16,0]);
    const bowl=add(new T.SphereGeometry(.085,24,18,0,Math.PI*2,0,Math.PI*.55),silver,[0,.265,0]);
    bowl.scale.set(1,.9,1);
    for(const side of [-1,1]){
      const ear=add(new T.TorusGeometry(.055,.012,8,20,Math.PI),silver,[side*.095,.28,0]);
      ear.rotation.set(Math.PI/2,0,side*Math.PI/2);
    }
    add(new T.TorusGeometry(.07,.014,8,24),silver,[0,.34,0],[Math.PI/2,0,0]);
  }else{
    // Nacional: taça clássica de alças altas.
    add(new T.CylinderGeometry(.045,.075,.09,20),gold,[0,.125,0]);
    add(new T.CylinderGeometry(.10,.052,.13,24),gold,[0,.225,0]);
    for(const side of [-1,1]){
      const handle=add(new T.TorusGeometry(.045,.009,8,16,Math.PI*1.1),gold,[side*.10,.235,0]);
      handle.rotation.set(0,0,side*(Math.PI*.55));
    }
    add(new T.SphereGeometry(.022,16,12),gold,[0,.30,0]);
  }
  group.userData.parts=parts;
  return group;
}

/** Gramado + arquibancada em anéis, só como pano de fundo. */
function buildStadium(scene, materials, palette) {
  const field=new T.Mesh(new T.CircleGeometry(2.6,48),materials.grass);
  field.rotation.x=-Math.PI/2;field.receiveShadow=true;scene.add(field);
  // Listras do gramado, mais claras, para a câmera ter referência de chão.
  for(let i=0;i<7;i+=1){
    const stripe=new T.Mesh(new T.PlaneGeometry(2.2,.34),materials.grassLight);
    stripe.rotation.x=-Math.PI/2;
    stripe.position.set(0,.002,-1.5+i*.5);
    scene.add(stripe);
  }
  const ring=new T.Mesh(new T.CylinderGeometry(4.6,4.9,3.1,40,1,true),materials.stand);
  ring.position.y=1.5;ring.material.side=T.BackSide;scene.add(ring);
  // Torcida: pontos coloridos na arquibancada (InstancedMesh = uma chamada).
  const crowd=new T.InstancedMesh(new T.SphereGeometry(.062,6,5),materials.crowd,520);
  const matrix=new T.Matrix4();const color=new T.Color();
  for(let i=0;i<520;i+=1){
    const angle=(i/520)*Math.PI*2;
    const radius=4.45+((i*37)%13)*.011;
    matrix.setPosition(Math.cos(angle)*radius,1.15+((i*13)%22)*.085,Math.sin(angle)*radius);
    crowd.setMatrixAt(i,matrix);
    color.setHSL(((i*0.137)%1),.45,.42+((i%5)*.05));
    crowd.setColorAt(i,color);
  }
  crowd.instanceMatrix.needsUpdate=true;
  scene.add(crowd);
  return {field,ring,crowd};
}

/**
 * Cria a cutscene. Devolve a mesma interface do palco da carreira
 * (`render`, `resize`, `dispose`), então a tela pode tratá-la como qualquer
 * outro vídeo de apresentação.
 */
export async function createTrophyCinematic(canvas,event,{reducedMotion=false,quality='medium'}={}){
  if(!await preloadFootballerPack())throw Error('Modelo do atleta indisponível');
  const renderer=new T.WebGLRenderer({canvas,antialias:quality!=='low',alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(1.25,globalThis.devicePixelRatio||1));
  renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.06;
  renderer.shadowMap.enabled=quality!=='low';
  renderer.shadowMap.type=T.PCFSoftShadowMap;

  const scene=new T.Scene();
  scene.background=new T.Color('#0b1621');
  scene.fog=new T.Fog('#0b1621',7,18);
  const camera=new T.PerspectiveCamera(38,16/9,.05,60);

  const owned=[];
  const material=(color,options={})=>{const m=new T.MeshStandardMaterial({color,...options});owned.push(m);return m;};
  const materials={
    gold:material('#d8ab4f',{metalness:.85,roughness:.22,emissive:'#3a2708',emissiveIntensity:.35}),
    silver:material('#c9d3da',{metalness:.9,roughness:.18}),
    dark:material('#1d2530',{metalness:.25,roughness:.55}),
    grass:material('#1f6a3c',{roughness:.95}),
    grassLight:material('#2a8a4e',{roughness:.95}),
    stand:material('#101d2b',{roughness:1}),
    crowd:material('#ffffff',{roughness:.9})
  };
  const palette=event.colors||{primary:'#f2c94c'};
  const stadium=buildStadium(scene,materials,palette);

  scene.add(new T.HemisphereLight('#cfe6ff','#3a4a52',1.15));
  const key=new T.DirectionalLight('#fff3dc',3.1);
  key.position.set(1.6,4.2,2.6);
  key.castShadow=quality!=='low';
  key.shadow.mapSize.set(1024,1024);
  key.shadow.camera.left=-2.6;key.shadow.camera.right=2.6;
  key.shadow.camera.top=3.2;key.shadow.camera.bottom=-.4;
  key.shadow.camera.near=.1;key.shadow.camera.far=14;
  key.shadow.bias=-.0002;key.shadow.normalBias=.01;
  scene.add(key);
  const rim=new T.DirectionalLight('#9fc8ff',2.4);
  rim.position.set(-2.4,2.6,-2.2);
  scene.add(rim);
  const flashSpot=new T.SpotLight('#fffbe8',0,9,.42,.6,1.2);
  flashSpot.position.set(0,5.2,1.2);
  flashSpot.target.position.set(0,1.2,0);
  scene.add(flashSpot,flashSpot.target);

  // Taça no centro, na altura do peito dos atletas.
  const trophy=buildTrophy(event.trophy||'national',materials);
  trophy.position.set(0,1.86,0.44);
  trophy.scale.setScalar(0.92);
  scene.add(trophy);

  // Atletas: o herói da conquista + companheiros, todos de braços erguidos.
  const actors=[];
  const clubKit=event.kit||{primary:palette.primary||'#f2c94c',secondary:'#1a1a1a',shorts:'#1a1a1a',socks:'#1a1a1a'};
  const makeActor=(index,look)=>{
    try{
      const actor=createGltfPlayer({...look,simplified:true,graphics:{jerseySize:256}});
      if(!actor)return null;
      // Fileira atrás da taça (z negativo) e de frente para a câmera: antes o
      // círculo punha os atletas de costas e tapava a taça.
      const count=Math.max(1,event.squadSize||5);
      const spread=Math.min(1.55,0.52+count*0.19);
      const slot=count===1?0:(index/(count-1))-0.5;
      const x=slot*2*spread;
      const z=-0.78-Math.abs(slot)*0.30;
      actor.root.position.set(x,0,z);
      // Todos olham para a câmera (e para a taça, que está à frente deles,
      // na altura do peito). A leve abertura evita poses robóticas.
      actor.root.rotation.y=slot*0.22;
      scene.add(actor.root);
      actor.body.traverse(node=>{
        if(!node.isMesh)return;
        node.castShadow=node.isSkinnedMesh;
        for(const m of [].concat(node.material)){
          if(m.name==='Micah | anatomical body.body'){m.roughness=.88;}
          if(m.name==='Micah | top'){m.roughness=.92;}
        }
      });
      actors.push({actor,phase:index*.42,role:index===0?'lift':'cheer'});
      return actor;
    }catch{return null;}
  };
  const heroLook=event.player?.appearance||{};
  makeActor(0,{...heroLook,hairStyle:CAREER_HAIR_ALIAS[heroLook.hairStyle]||heroLook.hairStyle,kit:{...clubKit},gloves:'none',name:event.player?.name||'Capitão',number:event.player?.number||10});
  const squadSize=Math.max(1,Math.min(6,event.squadSize||5));
  for(let i=1;i<squadSize;i+=1){
    makeActor(i,{
      name:`Companheiro ${i}`,skinTone:['#96613f','#bd8868','#6b432a','#d7a882'][i%4],
      hairStyle:['lab-low-fade','lab-shaved','lab-curly-mid','lab-buzz'][i%4],
      hairColor:['#302821','#141414','#4a3527','#101010'][i%4],
      kit:{...clubKit},bootColor:'#141414',gloves:'none'
    });
  }

  let dead=false;
  let elapsed=0;
  const start=performance.now();
  const duration=reducedMotion?3.6:7.2;

  function poseActor(entry,time){
    const {actor,phase,role}=entry;
    if(!actor?.root)return;
    // Pulso de comemoração: sobe e desce, defasado por atleta.
    const beat=(time+phase)%1.45;
    const pulse=Math.sin(Math.PI*clamp01(beat/1.45));
    const B=actor.bones||{};
    if(role==='lift'){
      // O capitão é o que mais pula e olha de frente, mas os braços sobem na
      // mesma convenção dos companheiros — só um pouco mais abertos.
      const hold=clamp01(time/0.9);
      if(B.leftArm){B.leftArm.rotation.set(-2.30*hold-.12*pulse,0,.46+.10*pulse);}
      if(B.rightArm){B.rightArm.rotation.set(-2.30*hold-.12*pulse,0,-.46-.10*pulse);}
      if(B.leftForearm){B.leftForearm.rotation.set(-.06,.05,0);}
      if(B.rightForearm){B.rightForearm.rotation.set(-.06,-.05,0);}
      if(B.spine2){B.spine2.rotation.x=-.09*hold-.05*pulse;}
      if(B.head){B.head.rotation.x=.10*hold;}
      if(actor.root)actor.root.position.y=pulse*.075;
      return;
    }
    // Braços erguidos em V. No rig, o eixo Z é o que ABRE o braço para fora
    // (esquerda positiva, direita negativa); com o sinal trocado os braços
    // cruzavam na frente do rosto. O antebraço fica quase reto para a mão
    // ficar acima da cabeça, não na altura do queixo.
    const raise=role==='wide'?2.05:2.24;
    const spread=role==='wide'?.62:.36;
    if(B.leftArm){B.leftArm.rotation.set(-raise-.10*pulse,0,spread+.08*pulse);}
    if(B.rightArm){B.rightArm.rotation.set(-raise-.10*pulse,0,-spread-.08*pulse);}
    if(B.leftForearm){B.leftForearm.rotation.set(-.06,.04,0);}
    if(B.rightForearm){B.rightForearm.rotation.set(-.06,-.04,0);}
    if(B.spine2){B.spine2.rotation.x=-.06-.08*pulse;}
    if(B.head){B.head.rotation.x=.10+.05*pulse;}
    if(actor.root)actor.root.position.y=pulse*.05;
  }

  function render(dt=0){
    if(dead)return null;
    elapsed+=Math.min(.12,Math.max(0,dt||0));
    const time=elapsed;
    const p=clamp01(time/duration);
    // Câmera: começa baixa, sobe e se aproxima da taça (arco suave).
    // Câmera recuada: precisa caber a taça E a fileira de atletas atrás dela.
    const orbit=reducedMotion?0:.16*Math.sin(time*.5);
    const rise=ease(clamp01(p*1.25));
    camera.position.set(Math.sin(orbit)*0.55,1.50+rise*.38,3.62-rise*.58);
    const focusY=1.46+rise*.14;
    camera.lookAt(0,focusY,-0.24);
    // Taça gira e sobe um pouco, com brilho de estúdio piscando.
    trophy.rotation.y=time*(reducedMotion?.35:.9);
    trophy.position.y=1.34+Math.sin(time*1.6)*.018+(reducedMotion?0:.06*ease(clamp01(p*1.6)));
    materials.gold.emissiveIntensity=.28+.18*Math.sin(time*3.1);
    flashSpot.intensity=reducedMotion?0:Math.max(0,Math.sin(time*1.25))*1.6;
    for(const entry of actors)poseActor(entry,time);
    // Taça erguida no centro do grupo: fica entre a fileira de atletas e a
    // câmera, na altura das mãos levantadas, e oscila junto com a comemoração.
    trophy.position.set(0, 1.86+Math.sin(time*1.6)*.022+(reducedMotion?0:.06*ease(clamp01(p*1.4))), 0.44);
    renderer.render(scene,camera);
    return {progress:p,time,finished:p>=1};
  }

  return {
    render,
    time:()=>elapsed,
    duration,
    resize(width,height){
      if(dead||!width||!height)return;
      renderer.setSize(width,height,false);
      camera.aspect=width/height;
      camera.updateProjectionMatrix();
    },
    dispose(){
      if(dead)return;
      dead=true;
      for(const m of owned)m.dispose();
      scene.traverse(node=>{
        if(node.isMesh||node.isInstancedMesh){
          node.geometry?.dispose?.();
          for(const m of [].concat(node.material))if(!owned.includes(m))m.dispose?.();
        }
      });
      for(const entry of actors)entry.actor?.dispose?.();
      renderer.dispose();
      stadium.field.geometry.dispose();
      stadium.ring.geometry.dispose();
      stadium.crowd.geometry.dispose();
    },
    get dead(){return dead;}
  };
}

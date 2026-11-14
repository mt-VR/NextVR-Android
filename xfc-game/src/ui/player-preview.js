// Prévia usa o MESMO Micah importado da partida, nunca um corpo substituto.
import {THREE} from '../match3d/engine.js';
import {preloadFootballerPack,createGltfPlayer} from '../match3d/models.js';
import {appearanceFor} from '../data/appearance.js';
export function playerPreview(canvas){
 let renderer,scene,camera,models=[],dead=false,frame=0,revision=0,observer,focusMode='body',angle=-.16,testTime=-1,lastStage=-1,lastFrame=0;
 function disposeModels(){for(const m of models){scene.remove(m.root);m.dispose();}models=[];}
 async function show(entries){
  const token=++revision;
  if(!await preloadFootballerPack()||dead||token!==revision)return;
  if(!renderer){
   try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false});}catch{return;}
   renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;
   scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(32,1,.1,30);camera.position.set(0,1.1,4.2);camera.lookAt(0,.9,0);
   scene.add(new THREE.HemisphereLight(0xffffff,0x496657,2.2));const light=new THREE.DirectionalLight(0xffffff,2.6);light.position.set(-2,4,4);scene.add(light);
   observer=new ResizeObserver(resize);observer.observe(canvas);
   function render(now=0){if(dead)return;const dt=Math.min(.05,Math.max(0,(now-lastFrame)/1000));lastFrame=now;
    let speed=0;if(testTime>=0){testTime+=dt;const stage=testTime<2?0:testTime<4?1:testTime<5?2:testTime<6?3:testTime<9?4:5;speed=stage===0?2.5:stage===1?6:0;
     if(stage!==lastStage){lastStage=stage;canvas.dataset.motion=['walk','run','pass','dribble','celebrate','idle'][stage];models.forEach(m=>{if(stage===2)m.pass();if(stage===3)m.skill();if(stage===4)m.celebrate();});}if(stage===5)testTime=-1;}
    models.forEach(m=>m.update(dt,{speed,moving:speed>0}));renderer.render(scene,camera);frame=requestAnimationFrame(render);}frame=requestAnimationFrame(render);
  }
  disposeModels();
  for(const [i,{team,kit,player=team.players.find(p=>p.pos!=='GK')}] of entries.entries()){
   const colors=kit.colors,look=appearanceFor(player);
   const model=createGltfPlayer({kit:{...kit,...colors,accent:colors.trim||'#fff',shorts:kit.shorts||colors.primary,socks:kit.socks||colors.primary},
    ...look,isKeeper:player.pos==='GK',name:player.name,number:player.number,crest:team.crest,teamName:team.name,sponsor:kit.sponsor||team.sponsor||'',brand:kit.brand||'',simplified:true});
   model.root.position.x=entries.length===1?0:(i===0?-2.05:2.05);model.root.rotation.y=entries.length===1?angle:(i===0?.2:-.2);
   models.push(model);scene.add(model.root);
  }
  canvas.dataset.ready='true';focus(focusMode);resize();
 }
 function resize(){if(!renderer||dead)return;const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();if(models.length===2){const spread=Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.position.z*camera.aspect*.8;models[0].root.position.x=-spread;models[1].root.position.x=spread;}}
 function focus(mode){focusMode=mode;if(!camera)return;const head=mode==='head',hands=mode==='hands';camera.position.set(0,head?1.67:hands?1.06:1.1,head?1.12:hands?2.15:4.2);camera.lookAt(0,head?1.66:hands?.99:.9,0);}
 return {show,focus,rotate(){angle+=Math.PI/4;models.forEach(m=>m.root.rotation.y=angle);},testMotion(){testTime=0;lastStage=-1;},celebrate(){models.forEach(m=>m.celebrate());},dispose(){dead=true;revision++;cancelAnimationFrame(frame);observer?.disconnect();if(renderer){disposeModels();renderer.dispose();renderer.forceContextLoss();}}};
}

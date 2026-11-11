// Prévia usa o MESMO Micah importado da partida, nunca um corpo substituto.
import {THREE} from '../match3d/engine.js';
import {preloadFootballerPack,createGltfPlayer} from '../match3d/models.js';
import {appearanceFor} from '../data/appearance.js';
export function playerPreview(canvas){
 let renderer,scene,camera,models=[],dead=false,frame=0,revision=0,observer;
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
   function render(){if(dead)return;models.forEach(m=>m.update(1/30,{speed:0,moving:false}));renderer.render(scene,camera);frame=requestAnimationFrame(render);}frame=requestAnimationFrame(render);
  }
  disposeModels();
  for(const [i,{team,kit,player=team.players.find(p=>p.pos!=='GK')}] of entries.entries()){
   const colors=kit.colors,look=appearanceFor(player);
   const model=createGltfPlayer({kit:{...kit,...colors,accent:colors.trim||'#fff',shorts:kit.shorts||colors.primary,socks:kit.socks||colors.primary},
    ...look,name:player.name,number:player.number,crest:team.crest,teamName:team.name,sponsor:kit.sponsor||team.sponsor||'',brand:kit.brand||'',simplified:true});
   model.root.position.x=entries.length===1?0:(i===0?-2.05:2.05);model.root.rotation.y=entries.length===1?-.16:(i===0?.2:-.2);
   models.push(model);scene.add(model.root);
  }
  canvas.dataset.ready='true';resize();
 }
 function resize(){if(!renderer||dead)return;const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();if(models.length===2){const spread=Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.position.z*camera.aspect*.8;models[0].root.position.x=-spread;models[1].root.position.x=spread;}}
 return {show,dispose(){dead=true;revision++;cancelAnimationFrame(frame);observer?.disconnect();if(renderer){disposeModels();renderer.dispose();renderer.forceContextLoss();}}};
}

import {presentationHand} from './presentation-hand.js';
import {detailTexture,cinematicFocus} from './cinematic-detail.js';
// Palco exclusivo da carreira. Nenhum estado/câmera/estádio da partida é usado.
import {THREE as T} from './engine.js';
import {preloadFootballerPack,createGltfPlayer} from './models.js';
import {kitsOf} from '../data/kits.js';
import {getTeam} from '../data/teams.js';
import {CAREER_HAIR_ALIAS} from './hair-lab.js';
import {presentationFrame} from '../data/career-presentations.js';
const V=(x=0,y=0,z=0)=>new T.Vector3(x,y,z),ease=t=>t*t*(3-2*t),mix=T.MathUtils.lerp;
const CAMERAS={
 announcement:[[2.8,1.8,4.3],[2.5,1.72,4],[0,1.1,0],[0,1.2,0]],
 arrival:[[2.8,1.9,4.8],[2.2,1.8,4.3],[-.5,1.1,0],[0,1.2,0]],
 entrance:[[-2.3,1.65,3.4],[-1.6,1.6,3],[-.8,1.1,-.18],[0,1.1,-.18]],
 representatives:[[2.1,1.55,3.5],[1.8,1.5,3.3],[0,.95,0],[0,.95,0]],
 contract:[[.8,1.6,1.65],[.65,1.5,1.5],[.06,.84,.38],[.02,.84,.38]],
 signature:[[.38,1.18,.90],[.31,1.13,.86],[-.06,.87,.28],[-.04,.87,.28]],
 stand:[[.65,1.58,2.45],[.5,1.7,2.5],[0,1.1,0],[0,1.34,0]],
 shirt:[[.36,1.43,1.6],[.20,1.46,1.5],[0,1.19,.32],[0,1.20,.32]],
 photo:[[0,1.6,3.55],[0,1.62,3.35],[0,1.16,0],[0,1.16,0]],
 club:[[0,1.6,3.35],[0,1.65,3.45],[0,1.2,0],[0,1.2,0]]
};
// Solver de dois ossos no mundo. Preserva comprimentos, usa cotovelo/joelho
// guiado; não estica braços nem modifica o rig compartilhado.
function aim(bone,child,target){
 const p=bone.getWorldPosition(V()),current=child.getWorldPosition(V()).sub(p).normalize(),desired=target.clone().sub(p).normalize();
 const world=bone.getWorldQuaternion(new T.Quaternion()),delta=new T.Quaternion().setFromUnitVectors(current,desired),parent=bone.parent.getWorldQuaternion(new T.Quaternion());bone.quaternion.copy(parent.invert().multiply(delta.multiply(world)));bone.updateWorldMatrix(false,true);
}
function limb(a,b,end,target,pole){
 a.updateWorldMatrix(true,true);const start=a.getWorldPosition(V()),mid=b.getWorldPosition(V()),tip=end.getWorldPosition(V()),l1=start.distanceTo(mid),l2=mid.distanceTo(tip),dir=target.clone().sub(start),d=T.MathUtils.clamp(dir.length(),Math.abs(l1-l2)+.0001,l1+l2-.0001);dir.normalize();
 const along=(l1*l1-l2*l2+d*d)/(2*d),height=Math.sqrt(Math.max(0,l1*l1-along*along)),bend=pole.clone().sub(start);bend.addScaledVector(dir,-bend.dot(dir)).normalize();const elbow=start.clone().addScaledVector(dir,along).addScaledVector(bend,height);aim(a,b,elbow);aim(b,end,start.clone().addScaledVector(dir,d));
}
function arm(actor,side,target){const b=actor.bones;limb(b[side+'Arm'],b[side+'ForeArm'],b[side+'Hand'],target,V(side==='left'?.7:-.7,.86,.08));}
export async function createCareerCinematic(canvas,event,{reducedMotion=false,quality='medium'}={}){
 if(!await preloadFootballerPack())throw Error('Modelo do atleta indisponível');
 const renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false});renderer.setPixelRatio(Math.min(1.25,globalThis.devicePixelRatio||1));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.08;renderer.shadowMap.enabled=quality!=='low';renderer.shadowMap.type=T.PCFSoftShadowMap;
 const focusPass=['high','ultra'].includes(quality)?cinematicFocus(renderer):null;
 const scene=new T.Scene();scene.background=new T.Color('#101a26');const camera=new T.PerspectiveCamera(36,16/9,.03,60),club=getTeam(event.clubId);if(!club){renderer.dispose();throw Error('Clube inválido');}
 const raw=kitsOf(club.id)[0],kit={...raw,...raw.colors,accent:raw.colors.trim||'#fff',shorts:raw.shorts||raw.colors.primary,socks:raw.socks||raw.colors.primary},props=new T.Group(),room=new T.Group(),outside=new T.Group();scene.add(props,room,outside);
 const ownedGeometries=new Set(),ownedMaterials=new Set(),ownedTextures=new Set(),actors=[];let dead=false;
 const details=Object.fromEntries(['cloth','paper','wood','skin','leather'].map(k=>{const t=detailTexture(k);ownedTextures.add(t);return[k,t];}));
 const material=(color,roughness=.8)=>{const m=new T.MeshStandardMaterial({color,roughness});ownedMaterials.add(m);return m;};
 const navy=material('#172332'),metal=material('#5e7180',.5),wall=material('#d8dde0'),wood=material('#493629'),white=material('#e6e6e0'),accent=material(kit.primary),black=material('#15191c');
 wood.map=details.wood;wood.bumpMap=details.wood;wood.bumpScale=.002;wood.roughness=.55;navy.bumpMap=details.leather;navy.bumpScale=.0007;metal.metalness=.75;metal.roughness=.3;
 function mesh(parent,g,m,name,pos=[0,0,0]){ownedGeometries.add(g);const o=new T.Mesh(g,m);o.name=name;o.receiveShadow=true;o.position.set(...pos);parent.add(o);return o;}
 const box=(parent,name,size,pos,mat)=>mesh(parent,new T.BoxGeometry(...size),mat,name,pos);
 const textTexture=(w,h,draw)=>{const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;ownedTextures.add(map);return map;};
 function mapped(map){const m=new T.MeshStandardMaterial({map,roughness:.95});ownedMaterials.add(m);return m;}
 const pressMap=textTexture(1024,512,(ctx,w,h)=>{ctx.fillStyle='#142334';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#324354';for(let y=0;y<4;y++)for(let x=0;x<6;x++){ctx.strokeRect(x*w/6,y*h/4,w/6,h/4);ctx.fillStyle='#e2e9ee';ctx.font='bold 12px Arial';ctx.textAlign='center';ctx.fillText(club.name,x*w/6+w/12,y*h/4+105,150);ctx.font='10px Arial';ctx.fillStyle='#a8b6c3';ctx.fillText(raw.sponsor||club.sponsor||'XFC 27',x*w/6+w/12,y*h/4+121,150);}});
 const crestImage=new Image();crestImage.onload=()=>{if(dead)return;const ctx=pressMap.image.getContext('2d');for(let y=0;y<4;y++)for(let x=0;x<6;x++)ctx.drawImage(crestImage,x*1024/6+63,y*128+16,46,59);pressMap.needsUpdate=true;};crestImage.src=club.crest;
 box(room,'parede de imprensa',[5.8,2.6,.12],[0,1.3,-.95],mapped(pressMap));
 box(room,'piso',[12,.08,10],[0,-.06,1],material('#53606a'));
 box(room,'painel esquerdo',[.15,3.1,5],[-3.2,1.5,0],navy);box(room,'painel direito',[.15,3.1,5],[3.2,1.5,0],navy);
 for(const x of [-2.85,2.85]){box(room,'luz vertical',[.035,2.1,.04],[x,1.3,-.78],white);box(room,'rodapé do clube',[.22,2.6,.14],[x,1.3,-.85],accent);}
 const table=new T.Group();room.add(table);box(table,'mesa',[2.85,.07,.76],[0,.80,.47],wood);box(table,'frente da mesa',[2.7,.55,.05],[0,.48,.83],navy);for(const x of [-1.25,1.25])box(table,'pé da mesa',[.06,.78,.06],[x,.38,.45],metal);
 function chair(x){const g=new T.Group();room.add(g);box(g,'assento',[.44,.07,.42],[x,.43,-.25],navy);box(g,'encosto',[.44,.52,.065],[x,.73,-.47],navy);for(const dx of [-.17,.17])for(const z of [-.40,-.10])box(g,'pé da cadeira',[.025,.43,.025],[x+dx,.21,z],metal);return g;}
 chair(0);chair(-.94);chair(.94);
 // Centro de treinamento cenográfico independente de stadium.js.
 box(outside,'fachada CT',[8,3.5,.3],[0,1.7,-1.2],wall);box(outside,'passeio',[12,.08,9],[0,-.06,1],material('#7b858a'));box(outside,'porta de entrada',[1.2,2.5,.08],[0,1.25,-.99],material('#1e3a47',.2));
 for(const x of [-2.3,2.3])box(outside,'vidraça',[2.2,1.4,.09],[x,1.9,-1],material('#2e4c60',.25));
 const sign=textTexture(1024,128,ctx=>{ctx.fillStyle=kit.primary;ctx.fillRect(0,0,1024,128);ctx.fillStyle='#ffffff';ctx.font='bold 42px Arial';ctx.textAlign='center';ctx.fillText(club.name.toUpperCase(),512,58,980);ctx.font='23px Arial';ctx.fillText('CENTRO DE TREINAMENTO',512,101);});box(outside,'identificação CT',[5,.62,.1],[0,3.1,-.98],mapped(sign));
 scene.add(new T.HemisphereLight('#dceaff','#77746e',1.35));const key=new T.DirectionalLight('#fff0db',3);key.position.set(-2,4,4);key.castShadow=quality!=='low';key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-3;key.shadow.camera.right=3;key.shadow.camera.top=3;key.shadow.camera.bottom=-1;key.shadow.camera.near=.1;key.shadow.camera.far=12;key.shadow.bias=-.00015;key.shadow.normalBias=.008;key.shadow.radius=2;scene.add(key);const fill=new T.DirectionalLight('#b7d6ff',1.2);fill.position.set(3,2,1);scene.add(fill);const rim=new T.DirectionalLight('#e5f2ff',2);rim.position.set(-1,3,-2);scene.add(rim);
 const makeActor=(options,x=0)=>{const a=createGltfPlayer({...options,simplified:true,graphics:{jerseySize:512}});if(!a)throw Error('Atleta indisponível');a.root.position.set(x,0,-.20);scene.add(a.root);a.body.traverse(o=>{if(!o.isMesh)return;for(const m of [].concat(o.material)){if(m.name==='Micah | anatomical body.body'){m.bumpMap=details.skin;m.bumpScale=.0003;m.roughness=.88;}if(m.name==='Micah | top'){m.bumpMap=details.cloth;m.bumpScale=.001;m.roughness=.94;}}o.castShadow=o.isSkinnedMesh&&[].concat(o.material).some(m=>/anatomical body.body|Micah \| top|hair/.test(m.name));});
  actors.push(a);return a;};
 const player=event.player,look=player.appearance||{};
 const hero=makeActor({...look,gloves:'none',hairStyle:CAREER_HAIR_ALIAS[look.hairStyle]||look.hairStyle,kit,name:player.name,number:player.number,crest:club.crest,sponsor:raw.sponsor||club.sponsor||'',brand:raw.brand||''});
 const representatives=[makeActor({name:'Diretor',skinTone:'#96613f',hairStyle:'lab-low-fade',hairColor:'#302821',kit:{primary:'#253142',secondary:'#253142',shorts:'#253142',socks:'#253142'},bootColor:'#141414'},-.94),makeActor({name:'Presidente',skinTone:'#bd8868',hairStyle:'lab-shaved',hairColor:'#666666',kit:{primary:'#333c47',secondary:'#333c47',shorts:'#333c47',socks:'#333c47'},bootColor:'#141414'},.94)];
 // Roupa formal local aos dirigentes; o catálogo/GLB permanece intacto.
 for(const a of representatives){
  a.root.updateMatrixWorld(true);a.body.traverse(o=>{if(o.isMesh)for(const m of [].concat(o.material))if(m.name==='Micah | top'){m.map=null;m.color.set('#263344');m.needsUpdate=true;}});
  a.body.traverse(o=>{if(!o.isMesh)return;for(const m of [].concat(o.material))if(m.name==='Micah | anatomical body.body'){
   m.onBeforeCompile=shader=>{shader.vertexShader='varying vec3 vSuit;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvSuit=position;');shader.fragmentShader='varying vec3 vSuit;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\nfloat sleeve=step(.205,abs(vSuit.x))*step(1.078,vSuit.y)*(1.-step(1.47,vSuit.y));float trouser=(1.-step(1.06,vSuit.y))*(1.-step(.22,abs(vSuit.x)));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.017,.033,.057),max(sleeve,trouser));');};m.customProgramCacheKey=()=> 'cinematic-suit-v1';
  }});
  const lapels=new T.Group();a.root.add(lapels);
  function patch(points,mat){const shape=new T.Shape();points.forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();return mesh(lapels,new T.ShapeGeometry(shape),mat,'lapela',[0,0,.155]);}
  patch([[-.065,1.47],[.065,1.47],[.035,1.22],[-.035,1.22]],white);
  patch([[-.13,1.45],[-.055,1.49],[0,1.22]],black);patch([[.13,1.45],[.055,1.49],[0,1.22]],black);
  const tie=patch([[-.012,1.44],[.012,1.44],[.019,1.28],[0,1.25],[-.019,1.28]],material('#714b47'));tie.position.z=.162;
  a.root.updateMatrixWorld(true);a.bones.spine2.attach(lapels);
 }
 // Mãos articuladas exclusivas da cena, com juntas locais de dedos.
 // O rig compartilhado dos jogadores em campo permanece intacto.
 const handMode={value:0},gripHands={};
 hero.body.traverse(o=>{if(!o.isSkinnedMesh)return;const g=o.geometry.clone(),si=g.attributes.skinIndex,sw=g.attributes.skinWeight,mask=new Float32Array(si.count);let used=false;for(let i=0;i<si.count;i++)for(let j=0;j<4;j++)if(/Hand$/.test(o.skeleton.bones[si.getComponent(i,j)]?.name||'')){mask[i]+=sw.getComponent(i,j);used=true;}
  if(!used){g.dispose();return;}g.setAttribute('cinematicHand',new T.Float32BufferAttribute(mask,1));o.geometry=g;ownedGeometries.add(g);
  for(const m of [].concat(o.material)){const previous=m.onBeforeCompile,oldKey=m.customProgramCacheKey();m.onBeforeCompile=shader=>{previous.call(m,shader);shader.uniforms.cinematicGrip=handMode;shader.vertexShader='attribute float cinematicHand; varying vec3 vHandBind; varying float vHandMask;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvHandBind=position;vHandMask=cinematicHand;');shader.fragmentShader='uniform float cinematicGrip; varying vec3 vHandBind; varying float vHandMask;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nif(vHandMask>.001 && vHandBind.y<1.063 && (cinematicGrip>1.5 || (cinematicGrip>.5 && vHandBind.x<0.)))discard;');};m.customProgramCacheKey=()=>oldKey+':cinematic-grip';m.needsUpdate=true;}
 });
 for(const side of ['left','right'])gripHands[side]=presentationHand(hero,side,look.skinTone||'#bd8868');
 const gripOffsets={};
 hero.body.traverse(o=>{if(o.isSkinnedMesh&&o.name==='short01')for(const side of ['left','right']){const bone=hero.bones[side+'Hand'],i=o.skeleton.bones.indexOf(bone);gripOffsets[side]=V(side==='left'?.261:-.261,.973,.044).applyMatrix4(o.skeleton.boneInverses[i]);}});
 function grip(side,point){
  const hand=hero.bones[side+'Hand'];
  for(let i=0;i<5;i++){hero.root.updateMatrixWorld(true);const offset=hand.localToWorld(gripOffsets[side].clone()).sub(hand.getWorldPosition(V()));arm(hero,side,point.clone().sub(offset));}
 }
 const contractMap=textTexture(512,512,ctx=>{ctx.fillStyle='#fcfaf2';ctx.fillRect(0,0,512,512);ctx.fillStyle='#152434';ctx.font='bold 26px Arial';ctx.textAlign='center';ctx.fillText('CONTRATO PROFISSIONAL',256,65);ctx.font='18px Arial';ctx.fillText(club.name,256,102,460);ctx.fillText(player.name,256,140,460);ctx.fillText(`Temporada ${event.season} • Nº ${player.number}`,256,173);ctx.strokeStyle='#afb5bb';for(let y=215;y<365;y+=21){ctx.beginPath();ctx.moveTo(45,y);ctx.lineTo(467,y);ctx.stroke();}ctx.fillText('Assinatura do atleta',256,470);});
 const paper=mesh(room,new T.PlaneGeometry(.30,.32),mapped(contractMap),'contrato',[0,.842,.26]);paper.rotation.x=-Math.PI/2;paper.material.bumpMap=details.paper;paper.material.bumpScale=.00018;
 const paperEdge=box(paper,'espessura do papel',[.30,.32,.0008],[0,0,-.0004],white);
 const pen=mesh(room,new T.CylinderGeometry(.0036,.0031,.10,12).translate(0,.01,0),metal,'caneta');pen.rotation.z=-.6;const nib=mesh(pen,new T.ConeGeometry(.0031,.02,10),black,'ponta metálica',[0,-.05,0]);nib.rotation.z=Math.PI;box(pen,'presilha',[.0015,.035,.0015],[0,.030,.004],metal);mesh(pen,new T.CylinderGeometry(.0038,.0038,.004,12),metal,'tampa',[0,.059,0]);
 const ink=new T.Group();room.add(ink);
 const signaturePoint=u=>V(-.1+u*.16,.843,.34+Math.sin(u*22*1.9)*.01);
 for(let i=0;i<22;i++){const a=signaturePoint(i/22),b=signaturePoint((i+1)/22),line=mesh(ink,new T.CylinderGeometry(.0008,.0008,a.distanceTo(b),5),black,'traço de assinatura');line.position.copy(a).add(b).multiplyScalar(.5);line.quaternion.setFromUnitVectors(V(0,1,0),b.clone().sub(a).normalize());}
 // Camisa com recorte de mangas/gola e pequena espessura, não um cartaz retangular.
 const shirtMap=textTexture(512,512,ctx=>{paintShirt(ctx);});
 function paintShirt(ctx,image){ctx.fillStyle=kit.primary;ctx.fillRect(0,0,512,512);ctx.fillStyle=kit.secondary;if(kit.pattern==='stripes')for(let x=0;x<512;x+=100)ctx.fillRect(x,0,45,512);if(kit.pattern==='hoops')for(let y=0;y<512;y+=100)ctx.fillRect(0,y,512,45);if(kit.pattern==='halves')ctx.fillRect(256,0,256,512);if(kit.pattern==='sash'){ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(90,0);ctx.lineTo(512,512);ctx.lineTo(422,512);ctx.fill();}if(image)ctx.drawImage(image,0,0,512,512);
  ctx.textAlign='center';ctx.fillStyle=kit.print||kit.accent;ctx.strokeStyle=new T.Color(kit.primary).getHSL({}).l>.55?'#252934':'#eff2f4';ctx.lineWidth=2;ctx.font='bold 30px Arial';ctx.strokeText(player.name.toUpperCase(),256,116,300);ctx.fillText(player.name.toUpperCase(),256,116,300);ctx.font='bold 205px Arial';ctx.strokeText(String(player.number),256,345);ctx.fillText(String(player.number),256,345);ctx.strokeStyle='rgba(128,128,128,.55)';ctx.lineWidth=1;ctx.setLineDash([2,3]);for(const x of [95,417]){ctx.beginPath();ctx.moveTo(x,150);ctx.lineTo(x,500);ctx.stroke();}ctx.beginPath();ctx.moveTo(95,492);ctx.lineTo(417,492);ctx.stroke();ctx.setLineDash([]);}
 if(kit.libraryBack){const img=new Image();img.onload=()=>{if(dead)return;paintShirt(shirtMap.image.getContext('2d'),img);shirtMap.needsUpdate=true;};img.src=kit.libraryBack;}
 const outline=[[-.23,0],[.23,0],[.23,.32],[.32,.28],[.37,.41],[.25,.50],[.08,.50],[.055,.46],[-.055,.46],[-.08,.50],[-.25,.50],[-.37,.41],[-.32,.28],[-.23,.32]],shape=new T.Shape();outline.forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();
 const sg=new T.ExtrudeGeometry(shape,{depth:.008,bevelEnabled:false}),sp=sg.attributes.position,uv=sg.attributes.uv;for(let i=0;i<sp.count;i++){const x=sp.getX(i),y=sp.getY(i);uv.setXY(i,(x+.37)/.74,y/.5);sp.setZ(i,sp.getZ(i)+.012*Math.cos(x*28)*Math.sin(y*5));}sg.computeVertexNormals();const shirt=mesh(room,sg,mapped(shirtMap),'camisa apresentada',[0,.85,.34]);shirt.material.bumpMap=details.cloth;shirt.material.bumpScale=.0012;shirt.material.roughness=.96;shirt.userData={clubId:club.id,name:player.name,number:player.number,kitId:raw.id};
 // Câmeras dos fotógrafos no primeiro plano, fora dos enquadramentos próximos.
 for(const x of [-1.8,1.8]){const g=new T.Group();room.add(g);box(g,'câmera do fotógrafo',[.22,.15,.12],[x,1.25,2.2],black);const lens=mesh(g,new T.CylinderGeometry(.05,.05,.14,10),metal,'lente',[x,1.25,2.1]);lens.rotation.x=Math.PI/2;box(g,'flash',[.13,.07,.06],[x,1.39,2.2],white);
  // Fotógrafos vistos de costas nos planos abertos, junto às câmeras.
  const jacket=material('#202731'),skin=material('#ad7955');const torso=mesh(g,new T.CapsuleGeometry(.13,.29,3,7),jacket,'fotógrafo • tronco',[x,1.03,2.46]);torso.rotation.x=-.17;mesh(g,new T.SphereGeometry(.09,9,6),skin,'fotógrafo • cabeça',[x,1.39,2.38]);
  for(const side of [-1,1]){const armStart=V(x+side*.14,1.18,2.43),armEnd=V(x+side*.07,1.25,2.21),armMesh=mesh(g,new T.CylinderGeometry(.033,.044,armStart.distanceTo(armEnd),7),jacket,'fotógrafo • braço');armMesh.position.copy(armStart).add(armEnd).multiplyScalar(.5);armMesh.quaternion.setFromUnitVectors(V(0,1,0),armEnd.sub(armStart).normalize());box(g,'fotógrafo • perna',[.10,.68,.12],[x+side*.09,.43,2.5],black);}
for(const dx of [-.12,.12]){const leg=box(g,'tripé',[.025,1.2,.025],[x+dx,.6,2.2],metal);leg.rotation.z=dx*.8;}}
 function seat(a,amount){a.root.position.y=-.46*amount;a.root.updateMatrixWorld(true);for(const side of ['left','right']){const sign=side==='left'?1:-1,hip=a.bones[side+'UpLeg'],knee=a.bones[side+'Leg'],foot=a.bones[side+'Foot'];const standing=foot.getWorldPosition(V());const target=standing.lerp(V(a.root.position.x+sign*.13,.10,.19),amount);limb(hip,knee,foot,target,V(a.root.position.x+sign*.15,.65,.8));}a.root.updateMatrixWorld(true);}
 function resize(){const w=canvas.clientWidth||960,h=canvas.clientHeight||540;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();if(focusPass){const size=renderer.getDrawingBufferSize(new T.Vector2());focusPass.resize(size.x,size.y);}}
 const observer=new ResizeObserver(resize);observer.observe(canvas);resize();
 let lastTime=0;
 function setTime(time){
  if(dead)return null;const frame=presentationFrame(event.type,time),id=frame.id,p=ease(frame.progress),dt=Math.min(.1,Math.max(0,time-lastTime));lastTime=time;
  handMode.value=id==='signature'?1:['stand','shirt','photo','club'].includes(id)?2:0;gripHands.right.group.visible=handMode.value>0;gripHands.left.group.visible=handMode.value>1;
  const exterior=id==='arrival';outside.visible=exterior;room.visible=!exterior;props.visible=!exterior;const sitting=['representatives','contract','signature'].includes(id),standing=['shirt','photo','club'].includes(id),stand=id==='stand';
  for(const a of actors){a.root.rotation.set(0,0,0);a.root.position.y=0;a.update(dt,{speed:a===hero&&['arrival','entrance'].includes(id)?1.1:0,moving:['arrival','entrance'].includes(id)});}
  hero.root.position.set(id==='arrival'?mix(-1.3,0,p):id==='entrance'?mix(-1.6,0,p):0,0,-.04);hero.root.rotation.y=['arrival','entrance'].includes(id)?mix(Math.PI/2,0,p):0;
  for(const [i,a]of representatives.entries()){a.root.visible=!exterior;a.root.position.set(i===0?-.94:.94,0,-.20);seat(a,sitting?1:stand?1-p:0);if(sitting){arm(a,'left',V(a.root.position.x+.18,.89,.20));arm(a,'right',V(a.root.position.x-.18,.89,.20));}}
  seat(hero,sitting?1:stand?1-p:id==='entrance'?ease(T.MathUtils.clamp((frame.progress-.7)/.3,0,1)):0);hero.root.updateMatrixWorld(true);
  paper.visible=['contract','signature','stand','representatives'].includes(id);paper.position.x=id==='contract'?mix(.55,0,p):0;
  pen.visible=id==='signature'||id==='contract';ink.visible=id==='signature'||stand;for(const [i,o]of ink.children.entries())o.visible=id!=='signature'||i<Math.max(0,(frame.progress-.2)/.8)*ink.children.length;
  shirt.visible=standing||stand;shirt.position.set(0,mix(.62,.88,stand?p:1),.22);
  if(id==='signature'){
   const pickup=ease(T.MathUtils.clamp(frame.progress*5,0,1)),u=T.MathUtils.clamp((frame.progress-.2)/.8,0,1),tip=V(-.18,.843,.14).lerp(signaturePoint(u),pickup);pen.rotation.z=mix(Math.PI/2,-.55,pickup);pen.position.copy(tip).add(V(0,.06,0).applyQuaternion(pen.quaternion));grip('right',pen.position.clone());arm(hero,'left',V(.23,.89,.10));hero.bones.head.rotation.x=.24;
  }else if(id==='contract'){pen.position.set(-.18,.85,.22);pen.rotation.z=1.57;arm(hero,'left',V(.16,.88,.20));arm(hero,'right',V(-.18,.89,.17));arm(representatives[1],'right',V(paper.position.x+.10,.89,.30));}
  else if(sitting){arm(hero,'left',V(.18,.88,.18));arm(hero,'right',V(-.18,.88,.18));}
  if(shirt.visible){const y=shirt.position.y+.50;grip('left',V(.25,y,.23));grip('right',V(-.25,y,.23));hero.bones.head.rotation.y=.025*Math.sin(time*.8);}
  const track=CAMERAS[id],q=reducedMotion?.5:p;camera.position.copy(V(...track[0]).lerp(V(...track[1]),q));const target=V(...track[2]).lerp(V(...track[3]),q);camera.lookAt(target);
  // Close do rosto antes do plano de camisa, sem cortar a cabeça na animação.
  if(stand&&frame.progress>.65){const close=ease((frame.progress-.65)/.35);camera.position.lerp(V(.36,1.70,1.6),close);camera.lookAt(target.lerp(V(0,1.58,-.1),close));}
  const flash=!reducedMotion&&id==='photo'&&[.15,.48,.78].some(t=>Math.abs(frame.progress-t)<.013);fill.intensity=flash?4.3:1.2;
  gripHands.right.update(id==='signature'?T.MathUtils.smoothstep(frame.progress,0,.20):1,time,id==='signature');gripHands.left.update(1,time,false);scene.updateMatrixWorld(true);if(focusPass)focusPass.render(scene,camera,camera.position.distanceTo(target));else renderer.render(scene,camera);canvas.dataset.shot=id;canvas.dataset.time=String(time.toFixed(2));canvas.dataset.drawCalls=String(renderer.info.render.calls);canvas.dataset.triangles=String(renderer.info.render.triangles);return{...frame,flash};
 }
 return{setTime,scene,camera,hero,representatives,shirt,pen,paper,renderer,club,gripHands,focusPass,dispose(){if(dead)return;dead=true;observer.disconnect();focusPass?.dispose();for(const hand of Object.values(gripHands))hand.dispose();for(const a of actors)a.dispose();for(const g of ownedGeometries)g.dispose();for(const m of ownedMaterials)m.dispose();for(const t of ownedTextures)t.dispose();renderer.dispose();renderer.forceContextLoss();}};
}

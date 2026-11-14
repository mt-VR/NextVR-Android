// Mão de close com quinze juntas digitais locais. Não altera o rig da partida.
import {THREE as T} from './engine.js';
export function presentationHand(actor,side,color){
 const sign=side==='left'?1:-1,wrist=actor.bones[side+'Hand'],group=new T.Group();group.name='xfc-articulated-presentation-hand';
 actor.root.updateMatrixWorld(true);const bind=new T.Matrix4().makeTranslation(sign*.303,1.063,.030),local=wrist.matrixWorld.clone().invert().multiply(actor.body.matrixWorld).multiply(bind);local.decompose(group.position,group.quaternion,group.scale);wrist.add(group);
 const skin=new T.MeshStandardMaterial({color,roughness:.88}),nailMaterial=new T.MeshStandardMaterial({color:new T.Color(color).lerp(new T.Color('#dfbbab'),.28),roughness:.65}),sphere=new T.SphereGeometry(1,10,7);
 const palm=new T.Mesh(sphere,skin);palm.scale.set(.024,.046,.037);palm.position.set(-sign*.004,-.043,0);group.add(palm);
 const cuff=new T.Mesh(sphere,skin);cuff.scale.set(.036,.030,.039);cuff.position.y=-.004;group.add(cuff);
 const phalanx=new T.CapsuleGeometry(1,1,2,8),segments=new T.InstancedMesh(phalanx,skin,15),nails=new T.InstancedMesh(sphere,nailMaterial,5);segments.frustumCulled=nails.frustumCulled=false;segments.castShadow=palm.castShadow=true;group.add(segments,nails);
 const fingers=[],lengths=[.028,.023,.019],matrix=new T.Matrix4(),offset=new T.Matrix4(),scale=new T.Matrix4();
 for(let finger=0;finger<5;finger++){const thumb=finger===4,bones=[];let parent=group;for(let joint=0;joint<3;joint++){const bone=new T.Bone();bone.name=`${side}-${['index','middle','ring','little','thumb'][finger]}-${joint}`;if(joint===0)bone.position.set(thumb?-sign*.012:0,thumb?-.030:-.075,thumb?.034:[-.023,-.007,.010,.026][finger]);else bone.position.y=-lengths[joint-1]*(finger===3?.85:1);parent.add(bone);parent=bone;bones.push(bone);}fingers.push({bones,thumb,factor:finger===3?.85:1});}
 function update(close=1,time=0,writing=false){
  fingers.forEach(({bones,thumb},i)=>bones.forEach((b,j)=>{const base=thumb?[.25,.35,.45][j]:[.50,.95,1.02][j],motion=writing&&i<2?Math.sin(time*5+i)*.025:0;b.rotation.set(thumb&&j===0?.30:0,0,-sign*(base*(.3+.7*close)+motion));}));
  group.updateWorldMatrix(true,true);const inverse=group.matrixWorld.clone().invert();let index=0;
  fingers.forEach(({bones,factor},i)=>{bones.forEach((b,j)=>{const length=lengths[j]*factor;matrix.copy(inverse).multiply(b.matrixWorld).multiply(offset.makeTranslation(0,-length/2,0)).multiply(scale.makeScale(i===4?.009:.0075,length*.38,.008));segments.setMatrixAt(index++,matrix);});const tip=bones[2];matrix.copy(inverse).multiply(tip.matrixWorld).multiply(offset.makeTranslation(sign*.0075,-lengths[2]*factor*.65,0)).multiply(scale.makeScale(.0018,.006,.005));nails.setMatrixAt(i,matrix);});segments.instanceMatrix.needsUpdate=nails.instanceMatrix.needsUpdate=true;
 }
 group.userData.fingerJoints=15;update();return{group,fingers,update,dispose(){wrist.remove(group);sphere.dispose();phalanx.dispose();skin.dispose();nailMaterial.dispose();segments.dispose();nails.dispose();}};
}

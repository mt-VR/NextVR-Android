// Mechas finas sobre o cabelo importado. Mesmos ossos/posição de bind do GLB;
// uma malha compartilhada por corte, sem fios individuais/draw calls por fio.
import {THREE} from './engine.js';
const cache=new Map();let fiberMap;
function texture(){
 if(fiberMap)return fiberMap;
 const c=document.createElement('canvas');c.width=64;c.height=128;const ctx=c.getContext('2d');
 for(let i=0;i<16;i++){
  const x=2+i*3.8;ctx.strokeStyle=`rgba(${150+i%4*25},${150+i%4*25},${150+i%4*25},.85)`;ctx.lineWidth=.7+i%3*.3;ctx.beginPath();ctx.moveTo(x,128);ctx.quadraticCurveTo(x+3*Math.sin(i),62,32+(x-32)*.2,3+i%5*2);ctx.stroke();
 }
 fiberMap=new THREE.CanvasTexture(c);fiberMap.colorSpace=THREE.SRGBColorSpace;fiberMap.userData.shared=true;return fiberMap;
}
export function createHairFibers(hair,style,color){
 if(style==='bald')return null;
 const key=hair.geometry.uuid+':'+style;let geometry=cache.get(key);
 if(!geometry){
  const p=hair.geometry.attributes.position,n=hair.geometry.attributes.normal,si=hair.geometry.attributes.skinIndex,sw=hair.geometry.attributes.skinWeight;
  if(!si||!sw)return null;
  hair.geometry.computeBoundingBox();const maxY=hair.geometry.boundingBox.max.y;
  const positions=[],uv=[],indices=[],joints=[],weights=[];
  const curly=['curly','afro','dreads'].includes(style),length=style==='long'?.02:curly?.012:.009;
  const root=new THREE.Vector3(),normal=new THREE.Vector3(),tangent=new THREE.Vector3(),across=new THREE.Vector3(),point=new THREE.Vector3();
  let count=0;
  for(let i=0;i<p.count&&count<300;i+=3){
   root.fromBufferAttribute(p,i);if(root.y<1.76)continue;
   normal.fromBufferAttribute(n,i).normalize();if(normal.y<-.1)continue;
   tangent.set(style==='side'?.8:.15,.15,-1);tangent.addScaledVector(normal,-tangent.dot(normal)).normalize();across.crossVectors(normal,tangent).normalize();
   const base=positions.length/3,width=curly?.0025:.002,variation=.75+(i%17)/34;
   for(let step=0;step<=5;step++){
    const t=step/5,arc=curly?t*Math.PI*1.5:t*Math.PI;
    point.copy(root).addScaledVector(tangent,(curly?Math.sin(arc)*.6:t)*length*variation).addScaledVector(normal,.0005+(curly?(1-Math.cos(arc))*.09:Math.sin(arc)*.08)*length);
    for(const sign of [-1,1]){
     const v=point.clone().addScaledVector(across,sign*width*(1-t*.88));positions.push(v.x,Math.min(maxY,v.y),v.z);uv.push(sign<0?0:1,t);
     for(const component of ['getX','getY','getZ','getW']){joints.push(si[component](i));weights.push(sw[component](i));}
    }
    if(step<5){const a=base+step*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
   }count++;
  }
  geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(joints,4));geometry.setAttribute('skinWeight',new THREE.Float32BufferAttribute(weights,4));geometry.setIndex(indices);geometry.computeVertexNormals();geometry.computeBoundingSphere();geometry.userData.shared=true;cache.set(key,geometry);
 }
 const material=new THREE.MeshStandardMaterial({map:texture(),color,roughness:.62,metalness:0,alphaTest:.3,side:THREE.DoubleSide});
 const mesh=new THREE.SkinnedMesh(geometry,material);mesh.name='xfc-hair-fibers';mesh.bind(hair.skeleton,hair.bindMatrix);mesh.position.copy(hair.position);mesh.quaternion.copy(hair.quaternion);mesh.scale.copy(hair.scale);mesh.frustumCulled=false;mesh.castShadow=false;return mesh;
}

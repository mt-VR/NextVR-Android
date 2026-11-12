// Luvas são cascas skinned extraídas da mão atual: mesmos vértices/pesos,
// com folga exterior. O rig atual não possui ossos individuais de dedos.
import {THREE as T} from './engine.js';
import {ACCESSORY_COLORS} from '../data/player-customization.js';
export function addPlayerAccessories(model,options,materials,ownedGeometries){
 let body;model.traverse(o=>{if(o.isSkinnedMesh&&[].concat(o.material).some(m=>m.name==='Micah | anatomical body.body'))body=o;});if(!body)return;
 const gloveColor=options.gloves===undefined&&options.isKeeper?'white':options.gloves;
 const professional=options.gloveModel==='pro'||options.isKeeper&&options.gloveModel!=='winter';
 if(gloveColor&&gloveColor!=='none'){
  const source=body.geometry.index?body.geometry.toNonIndexed():body.geometry,attrs=source.attributes,p=attrs.position,n=attrs.normal,si=attrs.skinIndex,sw=attrs.skinWeight;
  const values={position:[],normal:[],uv:[],skinIndex:[],skinWeight:[]};
  const isHand=i=>{let w=0;for(let j=0;j<4;j++)if(/Hand$/.test(body.skeleton.bones[si.getComponent(i,j)]?.name||''))w+=sw.getComponent(i,j);return w>.55;};
  const read=i=>({p:new T.Vector3().fromBufferAttribute(p,i),n:new T.Vector3().fromBufferAttribute(n,i),uv:[attrs.uv.getX(i),attrs.uv.getY(i)],j:[0,1,2,3].map(k=>si.getComponent(i,k)),w:[0,1,2,3].map(k=>sw.getComponent(i,k))});
  function mix(a,b,t){const influence=new Map();for(const [v,f]of [[a,1-t],[b,t]])v.j.forEach((j,k)=>influence.set(j,(influence.get(j)||0)+v.w[k]*f));const list=[...influence].sort((a,b)=>b[1]-a[1]).slice(0,4);while(list.length<4)list.push([0,0]);const sum=list.reduce((s,p)=>s+p[1],0);return{p:a.p.clone().lerp(b.p,t),n:a.n.clone().lerp(b.n,t).normalize(),uv:a.uv.map((v,k)=>v+(b.uv[k]-v)*t),j:list.map(p=>p[0]),w:list.map(p=>p[1]/sum)};}
  for(let layer=0;layer<(professional?2:1);layer++)for(let i=0;i<p.count;i+=3){
   if(![i,i+1,i+2].some(isHand))continue;
   if(layer&&![i,i+1,i+2].every(j=>n.getZ(j)<-.2&&p.getY(j)>.91))continue;
   const tri=[read(i),read(i+1),read(i+2)],poly=[];
   for(let k=0;k<3;k++){const a=tri[k],b=tri[(k+1)%3],da=1.063-a.p.y,db=1.063-b.p.y;if(da>=0)poly.push(a);if((da>=0)!==(db>=0))poly.push(mix(a,b,da/(da-db)));}
   for(let k=1;k<poly.length-1;k++)for(const vertex of [poly[0],poly[k],poly[k+1]]){
    const padding=professional?.0045+layer*.0025:.002,out=vertex.p.clone().addScaledVector(vertex.n,padding);
    values.position.push(...out.toArray());values.normal.push(...vertex.n.toArray());values.uv.push(...vertex.uv);values.skinIndex.push(...vertex.j);values.skinWeight.push(...vertex.w);
   }
  }
  const g=new T.BufferGeometry();for(const [key,valuesArray]of Object.entries(values))g.setAttribute(key,key==='skinIndex'?new T.Uint16BufferAttribute(valuesArray,4):new T.Float32BufferAttribute(valuesArray,key==='uv'?2:key==='skinWeight'?4:3));
  const material=new T.MeshStandardMaterial({color:ACCESSORY_COLORS[gloveColor]||'#eeeede',roughness:professional?.83:1,metalness:0,side:T.DoubleSide});
  const gloves=new T.SkinnedMesh(g,material);gloves.name='xfc-fitted-gloves';gloves.userData={type:professional?'pro':'winter',padding:professional?.0045:.002};gloves.bind(body.skeleton,body.bindMatrix);gloves.frustumCulled=false;body.parent.add(gloves);materials.push(material);ownedGeometries.push(g);
  if(source!==body.geometry)source.dispose();
 }
 // Pulseiras elípticas, sem caixa azul/ciano sobre a luva. Podem combinar com ela.
 if(options.wristband&&options.wristband!=='none'){
  const sides=options.wristbandSide==='both'?['Left','Right']:options.wristbandSide==='right'?['Right']:['Left'];
  for(const side of sides){
   const hand=body.skeleton.bones.find(b=>b.name.endsWith(side+'Hand'));if(!hand)continue;
   const pos=body.geometry.attributes.position,sign=side==='Left'?1:-1,points=[];
   for(let i=0;i<pos.count;i++)if(pos.getX(i)*sign>.22&&Math.abs(pos.getY(i)-1.074)<.018)points.push([pos.getX(i),pos.getZ(i)]);
   const xs=points.map(p=>p[0]),zs=points.map(p=>p[1]),loX=xs.length?Math.min(...xs):sign*.29-.027,hiX=xs.length?Math.max(...xs):sign*.29+.027,loZ=zs.length?Math.min(...zs):.01,hiZ=zs.length?Math.max(...zs):.07;
   const rx=(hiX-loX)/2+.003,rz=(hiZ-loZ)/2+.003;
   const g=new T.CylinderGeometry(1,1,.026,12,1,true);g.scale(rx,1,rz);
   const material=new T.MeshStandardMaterial({color:ACCESSORY_COLORS[options.wristband]||'#eeeede',roughness:1,metalness:0,side:T.DoubleSide}),band=new T.Mesh(g,material);
   band.name=side==='Left'?'xfc-career-wristband':'xfc-career-wristband-right';const index=body.skeleton.bones.indexOf(hand);band.position.set((loX+hiX)/2,1.074,(loZ+hiZ)/2).applyMatrix4(body.skeleton.boneInverses[index]);band.rotation.z=side==='Left'?-.13:.13;hand.add(band);materials.push(material);ownedGeometries.push(g);
  }
 }
}

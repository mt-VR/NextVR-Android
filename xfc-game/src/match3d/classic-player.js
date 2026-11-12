// Direção clássica PS2: volumes fechados, textura difusa e silhuetas legíveis.
// Geometria autoral sobre a cabeça/rig CC0; nenhuma malha/textura extraída de PES.
import {THREE} from './engine.js';
const shapes=new Map(),faces=new Map(),textures=new Map();
export const CLASSIC_HAIR_STYLES=['short','fade','curly','afro','bald','mohawk','side','long','neymar','braids','dreads'];
export function classicIdentity(name='XFC'){
 let seed=2166136261;for(const c of String(name).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase())seed=Math.imul(seed^c.charCodeAt(0),16777619)>>>0;
 return seed%6;
}
const FACE_SHAPES=[
 {jaw:1,nose:1,chin:0}, {jaw:.88,nose:1.08,chin:-.003},
 {jaw:1.10,nose:.93,chin:.002}, {jaw:.95,nose:1.13,chin:.004},
 {jaw:1.06,nose:1.04,chin:-.004}, {jaw:.92,nose:.90,chin:.001}
];
export function classicFaceGeometry(mesh,identity=0){
 const key=mesh.geometry.uuid+':'+identity;if(faces.has(key))return faces.get(key);
 const g=mesh.geometry.clone(),p=g.attributes.position,shape=FACE_SHAPES[identity%6];
 for(let i=0;i<p.count;i++){
  const x=p.getX(i),y=p.getY(i),z=p.getZ(i);if(y<1.59||y>1.78||Math.abs(x)>.12)continue;
  const jaw=Math.max(0,1-Math.abs(y-1.635)/.055),front=Math.max(0,Math.min(1,(z-.045)/.07));
  const nose=Math.max(0,1-Math.abs(x)/.032)*Math.max(0,1-Math.abs(y-1.689)/.035)*front;
  p.setXYZ(i,x*(1+(shape.jaw-1)*jaw),y+shape.chin*jaw*front,z+(shape.nose-1)*.055*nose);
 }
 g.computeVertexNormals();g.computeBoundingBox();g.computeBoundingSphere();g.userData.classicFace=identity;
 faces.set(key,g);return g;
}
export function classicHairGeometry(mesh,style='short'){
 if(!CLASSIC_HAIR_STYLES.includes(style))style='short';
 // Todos os jogadores usam o mesmo rig; inclui o índice da cabeça no cache.
 const head=mesh.skeleton.bones.findIndex(b=>/Head$/.test(b.name)),key=style+':'+head;
 if(shapes.has(key))return shapes.get(key);
 const p=[],uv=[],skin=[],weight=[],indices=[],segments=32,rings=12;
 for(let r=0;r<=rings;r++)for(let s=0;s<=segments;s++){
  const u=s/segments,a=u*Math.PI*2,t=r/rings,front=Math.cos(a),side=Math.abs(Math.sin(a));
  let rim=front>0?1.12+(1-front)*.35:1.47+(-front)*.48;
  if(style==='fade'||style==='neymar')rim-=.035*side;
  if(style==='long')rim+=Math.max(0,-front)*.35;
  const theta=t*rim,top=Math.pow(Math.max(0,Math.cos(theta)),.7);
  const volumes={short:.016,fade:.011,curly:.036,afro:.075,bald:.001,mohawk:.013,side:.027,long:.04,neymar:.032,braids:.02,dreads:.047};
  let volume=volumes[style]*top;
  if(style==='afro')volume=(.035+.025*top)*(1-.7*Math.pow(t,6));
  if(style==='mohawk')volume+=.065*Math.exp(-Math.pow(Math.sin(a)*Math.sin(theta)/.22,2))*Math.pow(1-t*.7,2);
  if(style==='side')volume+=.012*Math.sin(a)*top*Math.sin(theta);
  if(style==='curly'||style==='afro')volume+=(style==='curly'?.011:.009)*Math.pow(Math.sin(a*9+theta*2)*Math.sin(theta*12),2)*Math.sin(theta)*Math.max(.1,top);
  if(style==='braids'||style==='dreads')volume+=Math.max(0,Math.cos(a*(style==='braids'?12:9)))*.009*Math.sin(theta);
  const radial=.002+volume;
  const x=(.086+radial)*Math.sin(theta)*Math.sin(a);
  const y=Math.min(style==='mohawk'?1.884:Infinity,1.695+(.127+radial)*Math.cos(theta));
  const z=.055+(.111+radial)*Math.sin(theta)*Math.cos(a);
  p.push(x,y,z);uv.push(u,1-t);skin.push(head,0,0,0);weight.push(1,0,0,0);
  if(r<rings&&s<segments){const i=r*(segments+1)+s;indices.push(i,i+segments+1,i+1,i+1,i+segments+1,i+segments+2);}
 }
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(skin,4));g.setAttribute('skinWeight',new THREE.Float32BufferAttribute(weight,4));g.setIndex(indices);g.computeVertexNormals();g.computeBoundingBox();g.computeBoundingSphere();g.userData.classicHair=style;shapes.set(key,g);return g;
}
function hairTexture(style,color,skinTone){
 const key=[style,color,skinTone].join(':');if(textures.has(key))return textures.get(key);
 const rgb=c=>{const hex=new THREE.Color(c).getHex();return[hex>>16,(hex>>8)&255,hex&255];},hair=rgb(color),skin=rgb(skinTone||'#ad7955');
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const c=canvas.getContext('2d'),data=c.createImageData(128,128);
 for(let y=0;y<128;y++)for(let x=0;x<128;x++){
  const grain=((Math.imul(x+3,73)^Math.imul(y+1,151))&31)/31;
  const curly=['curly','afro'].includes(style),flow=curly?Math.sin(x*.6+Math.sin(y*.6))*Math.cos(y*.55):Math.sin(x*1.5+y*.13);
  let value=173+flow*24+grain*20;
  // Degradê integrado ao volume, sem transparência ordenada nem hair cards.
  if(['fade','neymar'].includes(style))value+=Math.max(0,(y-78)/50)*28;
  const fade=style==='bald'?.75:['fade','neymar'].includes(style)?Math.max(0,(y-75)/53)*.8:0;
  const i=(y*128+x)*4;for(let k=0;k<3;k++)data.data[i+k]=(hair[k]*value/150)*(1-fade)+skin[k]*.68*fade;data.data[i+3]=255;
 }
 c.putImageData(data,0,0);const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.wrapS=THREE.RepeatWrapping;map.userData.shared=true;textures.set(key,map);return map;
}
export function classicHairMaterial(style,color,skinTone){
 const material=new THREE.MeshStandardMaterial({name:'XFC | classic solid hair',map:hairTexture(style,color,skinTone),color:0xffffff,roughness:1,metalness:0,side:THREE.DoubleSide});
 material.userData.classic=true;return material;
}
export function classicMaterial(material){
 // Textura + iluminação simples. Nada de poros, brilho de plástico ou fios finos.
 material.normalMap=null;material.bumpMap=null;material.roughnessMap=null;
 material.metalness=0;material.roughness=/low-poly/.test(material.name)?.65:1;
 material.userData.classic=true;return material;
}

// Variações sobre a malha importada: preserva os detalhes das texturas.
import { THREE } from './engine.js';
const tones=new Map();
export function recolorSurface(map, color, reference=.29) {
  if(!map?.image || typeof document==='undefined')return map;
  const key=`${map.uuid}:${color}:${reference}`;if(tones.has(key))return tones.get(key);
  const canvas=document.createElement('canvas');canvas.width=map.image.width;canvas.height=map.image.height;
  const c=canvas.getContext('2d',{willReadFrequently:true});c.drawImage(map.image,0,0);
  const data=c.getImageData(0,0,canvas.width,canvas.height),p=data.data;
  const target=new THREE.Color(color);const rgb=[target.r,target.g,target.b].map(v=>Math.round(THREE.MathUtils.clamp(v<=.0031308?v*12.92:1.055*Math.pow(v,1/2.4)-.055,0,1)*255));
  for(let i=0;i<p.length;i+=4){
    const l=(p[i]*.3+p[i+1]*.59+p[i+2]*.11)/255;
    const shade=Math.min(2.8,Math.max(.06,Math.pow(l/reference,.9)));
    for(let j=0;j<3;j++)p[i+j]=Math.min(255,rgb[j]*shade*(reference===.29?(.9+.1*p[i+j]/Math.max(1,l*255)):1));
  }
  c.putImageData(data,0,0);const texture=map.clone();texture.source=new THREE.Source(canvas);texture.needsUpdate=true;
  tones.set(key,texture);return texture;
}
// Suaviza juntas de UV no rosto sem alterar a anatomia/skin weights do GLB.
const skinShapes=new Map();
export function smoothSkinGeometry(mesh){
 if(skinShapes.has(mesh.geometry.uuid))return skinShapes.get(mesh.geometry.uuid);
 const g=mesh.geometry.clone();g.computeVertexNormals();
 const p=g.attributes.position,n=g.attributes.normal,groups=new Map();
 const key=i=>[p.getX(i),p.getY(i),p.getZ(i)].map(v=>Math.round(v*100000)).join(',');
 for(let i=0;i<p.count;i++){const k=key(i),v=groups.get(k)||new THREE.Vector3();v.add(new THREE.Vector3().fromBufferAttribute(n,i));groups.set(k,v);}
 for(const v of groups.values())v.normalize();
 for(let i=0;i<p.count;i++){const v=groups.get(key(i));n.setXYZ(i,v.x,v.y,v.z);}n.needsUpdate=true;
 skinShapes.set(mesh.geometry.uuid,g);return g;
}
const hairShapes=new Map();
export function hairstyleGeometry(mesh,style='short') {
  const key=`${mesh.geometry.uuid}:${style}`;if(hairShapes.has(key))return hairShapes.get(key);
  const g=mesh.geometry.clone();const pos=g.attributes.position;
  const height={short:1,curly:1.25,afro:1.55,mohawk:1.65,neymar:1.2,side:1.05,fade:.85,long:1.6,braids:1.12,dreads:1.45,bald:.18}[style]||1;
  for(let i=0;i<pos.count;i++){
    const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i);
    const rise=Math.max(0,y-1.70);
    const ridge=(style==='braids'||style==='dreads')?Math.sin(x*(style==='braids'?200:110))*.009:style==='curly'?Math.sin(x*70)*Math.cos(z*80)*.003:0;
    const drop=style==='long'&&z<.02?Math.min(.12,Math.abs(z)*.65):0;
    pos.setXYZ(i,x*(style==='afro'?1.22:style==='mohawk'?.4:1),y+Math.min(.075,rise*(height-1))+ridge-drop,z*(style==='afro'?1.1:1));
  }
  pos.needsUpdate=true;g.computeVertexNormals();g.computeBoundingSphere();hairShapes.set(key,g);return g;
}
// Projeção da camisa existente em atlas frente/costas. Não cria peças de roupa.
const shirtGeometries=new Map();
export function shirtGeometry(mesh){
  if(shirtGeometries.has(mesh.geometry.uuid))return shirtGeometries.get(mesh.geometry.uuid);
  // Costura de UV por triângulo: não atravessar frente/costas no mesmo triângulo
  // para não interpolar letras/números entre as duas metades do atlas.
  const g=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone(),p=g.attributes.position,n=g.attributes.normal;
  const uv=new Float32Array(p.count*2);
  for(let i=0;i<p.count;i+=3){
    const front=n.getZ(i)+n.getZ(i+1)+n.getZ(i+2)>=0;
    for(let j=i;j<i+3;j++){
      const u=THREE.MathUtils.clamp((p.getX(j)+.40)/.8,0,1);
      uv[j*2]=(front?u:1-u)*.5+(front?0:.5);
      uv[j*2+1]=THREE.MathUtils.clamp((p.getY(j)-.95)/.61,0,1);
    }
  }
  g.setAttribute('uv',new THREE.BufferAttribute(uv,2));shirtGeometries.set(mesh.geometry.uuid,g);return g;
}
export function jerseyTexture({kit,number,name,crest,sponsor,brand,simplified=false,graphics}){
  const canvas=document.createElement('canvas');canvas.width=graphics?.jerseySize||(simplified?512:1024);canvas.height=canvas.width/2;
  const c=canvas.getContext('2d');c.scale(canvas.width/1024,canvas.height/512);
  const texture=new THREE.CanvasTexture(canvas);texture.flipY=false;texture.colorSpace=THREE.SRGBColorSpace;
  const primary=kit.primary,secondary=kit.secondary,accent=kit.accent||'#fff';
  let badge=null,front=null,back=null;
  const draw=()=>{
    c.fillStyle=primary;c.fillRect(0,0,1024,512);
    for(let face=0;face<2;face++){
      const offset=face*512;c.save();c.translate(offset,0);
      if(kit.pattern==='stripes') {c.fillStyle=secondary;for(let x=0;x<512;x+=120)c.fillRect(x,0,56,512);}
      if(kit.pattern==='halves'){c.fillStyle=secondary;c.fillRect(256,0,256,512);}
      if(kit.pattern==='hoops') {c.fillStyle=secondary;for(let y=0;y<512;y+=100)c.fillRect(0,y,512,48);}
      if(kit.pattern==='sash'){c.strokeStyle=secondary;c.lineWidth=65;c.beginPath();c.moveTo(70,0);c.lineTo(420,512);c.stroke();}
      // Atlas is in glTF's top-left image convention: v=0 is the hem.
      c.translate(0,512);c.scale(1,-1);
      const panel=face===0?front:back;if(panel)c.drawImage(panel,0,0,512,512);
      c.fillStyle=accent;c.fillRect(135,42,5,80);c.fillRect(371,42,5,80);
      c.textAlign='center';c.fillStyle=kit.print||accent;
      if(face===0){
        if(badge)c.drawImage(badge,290,125,45,52);
        c.font='bold 15px Arial';c.fillText(brand||'',205,151);
        c.font='bold 25px Arial';c.fillText(sponsor||'',256,240,220);
      }else{
        c.font='bold 20px Arial';c.fillText(String(name||'').toUpperCase(),256,150,210);
        c.font='bold 140px Arial';c.fillText(String(number),256,315);
      }
      c.restore();
    }
    // Costuras/tecido na camisa já existente: seguem a projeção original do atlas.
    c.save();c.strokeStyle='rgba(255,255,255,.10)';c.lineWidth=1;
    for(let y=3;y<512;y+=4){c.beginPath();c.moveTo(0,y);c.lineTo(1024,y);c.stroke();}
    c.strokeStyle='rgba(0,0,0,.13)';c.setLineDash([3,3]);
    for(const x of [16,496,528,1008]){c.beginPath();c.moveTo(x,0);c.lineTo(x,512);c.stroke();}
    c.restore();texture.needsUpdate=true;
  };
  draw();
  for(const [side,path]of [['front',kit.libraryFront],['back',kit.libraryBack]])if(path){
    const image=new Image();image.onload=()=>{if(side==='front')front=image;else back=image;draw();};image.src=path;
  }
  if(crest){const image=new Image();image.onload=()=>{badge=image;draw();};image.src=crest;}
  return texture;
}

// Microrelevo/aspereza reais de material. Sem modificar vértices, UVs ou corpos.
const details=new Map();
export function surfaceDetail(kind='cloth'){
  if(details.has(kind))return details.get(kind);
  const c=document.createElement('canvas');c.width=c.height=256;
  const ctx=c.getContext('2d'),data=ctx.createImageData(256,256);
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    const i=(y*256+x)*4;
    const noise=((Math.imul(x+1,73856093)^Math.imul(y+1,19349663))>>>0)%29-14;
    const weave=kind==='cloth'?Math.sin(x*Math.PI/2)*11+Math.sin(y*Math.PI/2)*9:noise*.65;
    const fold=kind==='cloth'?18*Math.sin(x*Math.PI/32+y*Math.PI/64)*Math.sin(y*Math.PI/128):0;
    const v=Math.max(0,Math.min(255,128+weave+fold+noise*.3));
    data.data[i]=data.data[i+1]=data.data[i+2]=v;data.data[i+3]=255;
  }
  ctx.putImageData(data,0,0);const map=new THREE.CanvasTexture(c);
  map.wrapS=map.wrapT=THREE.RepeatWrapping;map.flipY=false;map.anisotropy=4;map.userData.shared=true;
  details.set(kind,map);return map;
}
export function refinePlayerMaterial(material,{surface=true}={}){
  const name=material.name||'';
  material.metalness=0;
  if(/top|bottom|socks/i.test(name)){
    material.roughness=.88;
    if(surface){material.bumpMap=surfaceDetail('cloth');material.bumpScale=/socks/i.test(name)?.0014:.003;}
  }else if(/body\.body/.test(name)){
    material.roughness=.76;
    if(surface){material.bumpMap=surfaceDetail('skin');material.bumpScale=.0006;}
  }else if(/short01/.test(name)){material.roughness=.68;material.alphaTest=.42;material.side=THREE.DoubleSide;if(surface){material.bumpMap=material.map;material.bumpScale=.0012;}}
  else if(/shoe|boot/i.test(name))material.roughness=.58;
  material.userData.surfaceDetail=Boolean(surface);return material;
}

// Pigmentação diretamente no material do rosto/meião importado. Coordenadas
// de bind do Micah; não substitui rosto, rig nem textura original do catálogo.
export function applyCareerSurface(material,look){
 const body=material.name==='Micah | anatomical body.body',socks=/socks/i.test(material.name);
 if(!body&&!socks)return;
 const enabled=body&&(look.beard&&look.beard!=='none'||look.moustache==='classic'||look.brows==='thick')||socks&&look.socks==='short';
 if(!enabled)return;
 // Pigmento facial independente: hairColor nunca chega ao shader da pele.
 const hair=new THREE.Color('#24180f'),skin=new THREE.Color(look.skinTone||'#bd8868');
 material.onBeforeCompile=shader=>{
  shader.vertexShader='varying vec3 vCareerBind; varying vec3 vCareerNormal;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvCareerBind=position; vCareerNormal=normal;');
  shader.fragmentShader='varying vec3 vCareerBind; varying vec3 vCareerNormal;\n'+shader.fragmentShader;
  const beard=look.beard==='full'?1:look.beard==='stubble'?.55:look.beard==='goatee'?.9:0;
  const mask=body?`
    float faceFront=smoothstep(.15,.6,vCareerNormal.z);
    float jaw=(1.-smoothstep(1.66,1.69,vCareerBind.y))*smoothstep(1.57,1.60,vCareerBind.y)*(1.-smoothstep(${look.beard==='goatee'?'.025,.04':'.07,.095'},abs(vCareerBind.x)));
    float moustache=(1.-smoothstep(.025,.045,abs(vCareerBind.x)))*(1.-smoothstep(.006,.012,abs(vCareerBind.y-1.685)))*${look.moustache==='classic'?'1.':'0.'};
    float brows=smoothstep(.012,.022,abs(vCareerBind.x))*(1.-smoothstep(.06,.075,abs(vCareerBind.x)))*(1.-smoothstep(.003,.008,abs(vCareerBind.y-1.741)))*${look.brows==='thick'?'1.':'0.'};
    float pigment=clamp(jaw*${beard.toFixed(2)}+moustache+brows,0.,.92)*faceFront;
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(${hair.r.toFixed(4)},${hair.g.toFixed(4)},${hair.b.toFixed(4)}),pigment);
  `:`diffuseColor.rgb=mix(diffuseColor.rgb,vec3(${skin.r.toFixed(4)},${skin.g.toFixed(4)},${skin.b.toFixed(4)}),smoothstep(.30,.315,vCareerBind.y));`;
  shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n'+mask);
 };
 material.customProgramCacheKey=()=>JSON.stringify({careerSurface:3,body,beard:look.beard,moustache:look.moustache,brows:look.brows,skin:look.skinTone,socks:look.socks});
}

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
    const shade=Math.min(1.5,Math.max(.22,Math.pow(l/reference,.72)));
    for(let j=0;j<3;j++)p[i+j]=Math.min(255,rgb[j]*shade);
  }
  c.putImageData(data,0,0);const texture=map.clone();texture.source=new THREE.Source(canvas);texture.needsUpdate=true;
  tones.set(key,texture);return texture;
}
const hairShapes=new Map();
export function hairstyleGeometry(mesh,style='short') {
  const key=`${mesh.geometry.uuid}:${style}`;if(hairShapes.has(key))return hairShapes.get(key);
  const g=mesh.geometry.clone();const pos=g.attributes.position;
  const height={short:1,curly:1.25,afro:1.55,neymar:1.2,side:1.05,bald:.5}[style]||1;
  for(let i=0;i<pos.count;i++){
    const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i);
    const rise=Math.max(0,y-1.70);
    pos.setXYZ(i,x*(style==='afro'?1.22:1),y+Math.min(.075,rise*(height-1)),z*(style==='afro'?1.1:1));
  }
  pos.needsUpdate=true;g.computeVertexNormals();g.computeBoundingSphere();hairShapes.set(key,g);return g;
}
// Projeção da camisa existente em atlas frente/costas. Não cria peças de roupa.
const shirtGeometries=new Map();
export function shirtGeometry(mesh){
  if(shirtGeometries.has(mesh.geometry.uuid))return shirtGeometries.get(mesh.geometry.uuid);
  const g=mesh.geometry.clone(),p=g.attributes.position,n=g.attributes.normal;
  const uv=new Float32Array(p.count*2);
  for(let i=0;i<p.count;i++){
    const front=n.getZ(i)>=0;
    const u=THREE.MathUtils.clamp((p.getX(i)+.40)/.8,0,1);
    uv[i*2]=(front?u:1-u)*.5+(front?0:.5);
    uv[i*2+1]=THREE.MathUtils.clamp((p.getY(i)-.95)/.61,0,1);
  }
  g.setAttribute('uv',new THREE.BufferAttribute(uv,2));shirtGeometries.set(mesh.geometry.uuid,g);return g;
}
export function jerseyTexture({kit,number,name,crest,sponsor,brand,simplified=false}){
  const canvas=document.createElement('canvas');canvas.width=simplified?512:1024;canvas.height=simplified?256:512;
  const c=canvas.getContext('2d');c.scale(canvas.width/1024,canvas.height/512);
  const texture=new THREE.CanvasTexture(canvas);texture.flipY=false;texture.colorSpace=THREE.SRGBColorSpace;
  const primary=kit.primary,secondary=kit.secondary,accent=kit.accent||'#fff';
  let badge=null;
  const draw=()=>{
    c.fillStyle=primary;c.fillRect(0,0,1024,512);
    for(let face=0;face<2;face++){
      const offset=face*512;c.save();c.translate(offset,0);
      if(kit.pattern==='stripes') {c.fillStyle=secondary;for(let x=0;x<512;x+=120)c.fillRect(x,0,56,512);}
      if(kit.pattern==='hoops') {c.fillStyle=secondary;for(let y=0;y<512;y+=100)c.fillRect(0,y,512,48);}
      if(kit.pattern==='sash'){c.strokeStyle=secondary;c.lineWidth=65;c.beginPath();c.moveTo(70,0);c.lineTo(420,512);c.stroke();}
      // Atlas is in glTF's top-left image convention: v=0 is the hem.
      c.translate(0,512);c.scale(1,-1);
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
    texture.needsUpdate=true;
  };
  draw();
  if(crest){const image=new Image();image.onload=()=>{badge=image;draw();};image.src=crest;}
  return texture;
}

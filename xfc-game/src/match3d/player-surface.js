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

// ------------------------------------------------------------- olho pintado --
// O modelo traz o globo ocular com íris pintada, mas SEM pálpebra: a esclerótica
// aparece em volta da íris nos 360° e o olho lê como bola de gude. Em low-poly
// isso não se conserta com peça de pálpebra — a borda da calota vira uma bolha.
// Conserta-se PINTANDO o olho inteiro na textura do globo, que é o que o PES faz:
// apaga o globo com a cor da pele e redesenha esclerótica + íris + pupila +
// linha da pálpebra superior. Custo: zero malha e zero textura extra.
const paintedEyes = new Map();
export function paintEyelidShadow(map, skinTone) {
  if (!map?.image || typeof document === 'undefined') return map;
  const key = `${map.uuid}:${skinTone}`;
  if (paintedEyes.has(key)) return paintedEyes.get(key);

  const width = map.image.width;
  const height = map.image.height;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.drawImage(map.image, 0, 0);

  const skin = new THREE.Color(skinTone || '#c98d5f');
  const skinCss = `rgb(${[skin.r, skin.g, skin.b].map(v => Math.round(
    255 * (v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055)
  )).join(',')})`;

  // Localiza as duas íris: pixels escuros com alfa, agrupados por distância.
  const frame = context.getImageData(0, 0, width, height);
  const pixels = frame.data;
  const seeds = [];
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      const lum = (pixels[i] * 0.3 + pixels[i + 1] * 0.59 + pixels[i + 2] * 0.11) / 255;
      if (pixels[i + 3] > 40 && lum < 0.35) seeds.push([x, y]);
    }
  }
  const groups = [];
  for (const [x, y] of seeds) {
    const near = groups.find(g => Math.hypot(g.x - x, g.y - y) < width * 0.16);
    if (near) { near.n += 1; near.sx += x; near.sy += y; }
    else groups.push({ x, y, sx: x, sy: y, n: 1 });
  }
  const discs = groups.filter(g => g.n > 24)
    .sort((a, b) => b.n - a.n)
    .slice(0, 2)
    .map(g => ({ x: g.sx / g.n, y: g.sy / g.n, iris: Math.max(8, Math.sqrt(g.n / Math.PI)) }));

  const drawEye = (cx, cy, irisR) => {
    // O globo é ~3x o raio da íris nesta textura (proporção de autor).
    const globe = irisR * 3.15;
    context.save();

    // 1) Apaga o globo inteiro com a pele da pálpebra.
    context.beginPath();
    context.arc(cx, cy, globe, 0, Math.PI * 2);
    context.fillStyle = skinCss;
    context.fill();

    // 2) Esclerótica em forma de AMÊNDOA (não círculo): dois arcos com o
    //    canto interno mais baixo. É a forma que dá leitura de olho humano.
    const halfW = irisR * 2.85;
    const rise = irisR * 1.10;
    const drop = irisR * 0.74;
    const tilt = irisR * 0.12;
    context.beginPath();
    context.moveTo(cx - halfW, cy + tilt);
    context.quadraticCurveTo(cx, cy - rise * 2.0, cx + halfW, cy - tilt);
    context.quadraticCurveTo(cx, cy + drop * 2.0, cx - halfW, cy + tilt);
    context.closePath();
    context.fillStyle = '#ddd3c6';
    context.fill();

    // 3) Íris e pupila, recortadas na amêndoa para não vazar.
    context.save();
    context.clip();
    const irisGrad = context.createRadialGradient(cx, cy, irisR * 0.30, cx, cy, irisR);
    irisGrad.addColorStop(0, '#5a3a22');
    irisGrad.addColorStop(0.55, '#42281a');
    irisGrad.addColorStop(1, '#20120c');
    context.beginPath();
    context.arc(cx, cy, irisR, 0, Math.PI * 2);
    context.fillStyle = irisGrad;
    context.fill();
    context.beginPath();
    context.arc(cx, cy, irisR * 0.46, 0, Math.PI * 2);
    context.fillStyle = '#0d0806';
    context.fill();
    // Brilho: um ponto claro no alto à esquerda, sempre no mesmo lado.
    context.beginPath();
    context.arc(cx - irisR * 0.34, cy - irisR * 0.36, irisR * 0.19, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255,255,255,0.82)';
    context.fill();
    // Sombra da pálpebra superior caindo sobre a íris.
    const shade = context.createLinearGradient(0, cy - rise, 0, cy + irisR * 0.20);
    shade.addColorStop(0, 'rgba(18,10,6,0.62)');
    shade.addColorStop(1, 'rgba(18,10,6,0)');
    context.fillStyle = shade;
    context.fillRect(cx - halfW, cy - rise, halfW * 2, rise * 1.2);
    context.restore();

    // Sombra suave sob a pálpebra inferior: sem isso o olho parece colado.
    const under = context.createLinearGradient(0, cy + drop * 1.1, 0, cy + drop * 1.9);
    under.addColorStop(0, 'rgba(24,14,8,0.30)');
    under.addColorStop(1, 'rgba(24,14,8,0)');
    context.save();
    context.beginPath();
    context.moveTo(cx - halfW, cy + tilt);
    context.quadraticCurveTo(cx, cy + drop * 2.0, cx + halfW, cy - tilt);
    context.quadraticCurveTo(cx, cy + drop * 1.1, cx - halfW, cy + tilt);
    context.closePath();
    context.fillStyle = under;
    context.fill();
    context.restore();

    // Limpa restos de esclerótica antiga fora da amêndoa. Sem isto sobra uma
    // cunha branca no canto externo (a textura do modelo pedindo passagem).
    context.save();
    context.beginPath();
    context.arc(cx, cy, globe, 0, Math.PI * 2);
    context.clip();
    context.beginPath();
    context.moveTo(cx - halfW, cy + tilt);
    context.quadraticCurveTo(cx, cy - rise * 2.0, cx + halfW, cy - tilt);
    context.quadraticCurveTo(cx, cy + drop * 2.0, cx - halfW, cy + tilt);
    context.closePath();
    // furo: preenche só o que está FORA da amêndoa e DENTRO do globo
    context.rect(cx - globe, cy - globe, globe * 2, globe * 2);
    context.fillStyle = skinCss;
    context.fill('evenodd');
    context.restore();

    // 4) Linha da pálpebra superior (define o olhar, mesmo de longe).
    context.beginPath();
    context.moveTo(cx - halfW, cy + tilt);
    context.quadraticCurveTo(cx, cy - rise * 2.0, cx + halfW, cy - tilt);
    context.strokeStyle = 'rgba(30,18,12,0.85)';
    context.lineWidth = Math.max(1.2, irisR * 0.13);
    context.lineCap = 'round';
    context.stroke();

    context.restore();
  };

  if (discs.length) {
    for (const d of discs) drawEye(d.x, d.y, d.iris);
  } else {
    const fallback = Math.min(width, height) * 0.09;
    drawEye(width * 0.30, height * 0.30, fallback);
    drawEye(width * 0.70, height * 0.66, fallback);
  }

  const texture = map.clone();
  texture.source = new THREE.Source(canvas);
  texture.needsUpdate = true;
  paintedEyes.set(key, texture);
  return texture;
}

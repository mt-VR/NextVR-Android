// Cabelos do protagonista: raízes projetadas sobre a cabeça real, famílias
// construídas separadamente. Materiais/coverage pertencem SOMENTE ao cabelo.
import {THREE as T} from './engine.js';
import {mergeGeometries} from '../../vendor/BufferGeometryUtils.js';
import {LAB_HAIR} from '../data/player-customization.js';
const cache=new Map(),V=(x=0,y=0,z=0)=>new T.Vector3(x,y,z),clamp=T.MathUtils.clamp;
export {CAREER_HAIR_ALIAS} from '../data/player-customization.js';
function context(body){
 const source=body.geometry,probe=new T.Mesh(source,new T.MeshBasicMaterial({side:T.DoubleSide})),ray=new T.Raycaster(),origin=V(0,1.70,.055),memo=new Map();probe.updateMatrixWorld();
 function surface(a,t,offset=0){
  const key=[a,t].join(':');let hit=memo.get(key);if(!hit){const d=V(Math.sin(t)*Math.sin(a),Math.cos(t),Math.sin(t)*Math.cos(a));ray.set(origin,d);const hits=ray.intersectObject(probe);const q=hits.find(h=>h.point.y>1.62&&Math.abs(h.point.x)<.13);if(q)hit={p:q.point.clone(),n:d};else{
   // Algumas coroas do GLB são abertas sob o cabelo: interpolar os vértices
   // reais mais próximos, sem inventar um elipsoide que atravessa o rosto.
   const pos=source.attributes.position,candidates=[];for(let i=0;i<pos.count;i++){const p=V().fromBufferAttribute(pos,i);if(p.y<1.72||Math.abs(p.x)>.12)continue;const delta=p.clone().sub(origin);candidates.push({p,score:delta.clone().normalize().dot(d),length:delta.length()});}candidates.sort((a,b)=>b.score-a.score);const top=candidates.slice(0,6),distance=top.reduce((s,q)=>s+q.length,0)/top.length;hit={p:origin.clone().addScaledVector(d,distance),n:d};
  }memo.set(key,hit);}return hit.p.clone().addScaledVector(hit.n,offset);
 }
 function scalp({raise=0,density=.8,design=false}={}){
  const g=source.index?source.toNonIndexed():source,p=g.attributes.position,n=g.attributes.normal,positions=[],uv=[],coverage=[];
  // Linha frontal acima das sobrancelhas/testa; nuca mais baixa, orelhas excluídas.
  const line=q=>1.675+.103*clamp((q.z+.065)/.225,0,1)+raise;
  for(let i=0;i<p.count;i+=3){let tri=[0,1,2].map(j=>({p:V().fromBufferAttribute(p,i+j),n:V().fromBufferAttribute(n,i+j)}));if(tri.some(q=>Math.abs(q.p.x)>.13)||tri.every(q=>q.p.y<1.65))continue;
   const poly=[];for(let j=0;j<3;j++){const a=tri[j],b=tri[(j+1)%3],da=a.p.y-line(a.p),db=b.p.y-line(b.p);if(da>=0)poly.push(a);if((da>=0)!==(db>=0)){const f=da/(da-db);poly.push({p:a.p.clone().lerp(b.p,f),n:a.n.clone().lerp(b.n,f).normalize()});}}
   for(let j=1;j<poly.length-1;j++)for(const q of [poly[0],poly[j],poly[j+1]]){positions.push(...q.p.clone().addScaledVector(q.n,.0015).toArray());uv.push(Math.atan2(q.p.x,q.p.z-.055)/Math.PI/2+.5,(q.p.y-1.65)/.2);let d=clamp((q.p.y-line(q.p))/.026,0,1)*density;if(design&&q.p.x>.055){const cut=Math.min(Math.abs(q.p.y-1.744-q.p.z*.16),Math.abs(q.p.y-1.758-q.p.z*.16));d*=T.MathUtils.smoothstep(cut,.001,.005);}coverage.push(d);}
  }
  if(g!==source)g.dispose();const out=new T.BufferGeometry();out.setAttribute('position',new T.Float32BufferAttribute(positions,3));out.setAttribute('uv',new T.Float32BufferAttribute(uv,2));out.setAttribute('coverage',new T.Float32BufferAttribute(coverage,1));out.computeVertexNormals();return out;
 }
 return{surface,scalp,dispose(){probe.material.dispose();}};
}
// Tapered elliptical bundles; tip collapses, never an upright rectangular block.
function strand(points,width,depth,steps=9,sides=5){
 const curve=new T.CatmullRomCurve3(points),frames=curve.computeFrenetFrames(steps,false),g=new T.TubeGeometry(curve,steps,1,sides,false),p=g.attributes.position;
 for(let i=0;i<=steps;i++){const t=i/steps,c=curve.getPointAt(t),taper=.12+.88*Math.pow(Math.sin(Math.PI*(.12+.88*t)),.55);for(let j=0;j<=sides;j++){const a=j/sides*Math.PI*2,q=c.clone().addScaledVector(frames.normals[i],Math.cos(a)*width*taper).addScaledVector(frames.binormals[i],Math.sin(a)*depth*taper);p.setXYZ(i*(sides+1)+j,q.x,q.y,q.z);}}
 g.computeVertexNormals();return g;
}
function swept(c,{count,rows=1,start=.8,end=-.75,volume=.018,wave=0,width=.012,part=0}){
 const out=[];for(let row=0;row<rows;row++)for(let i=0;i<count;i++){
  const x=(i-(count-1)/2)/count*1.3+.015*Math.sin(i*3.7),points=[];for(let k=0;k<6;k++){const u=k/5,t=start+(end-start)*u+.03*Math.sin(i*2.3)*(1-u),polar=Math.hypot(x,t),a=Math.atan2(x,t);const q=c.surface(a,polar,.003+volume*Math.sin(Math.PI*u)+row*.006);q.x+=wave*Math.sin(u*Math.PI*3+i*.45)+part*Math.sin(Math.PI*u);points.push(q);}out.push(strand(points,width*(.9+.12*Math.sin(i*2.7)),.004+volume*.10,8,5));
 }return out;
}
function curls(c,{count,extent,radius,coil}){
 const parts=[];for(let i=0;i<count;i++){
  const a=i*2.399963,t=Math.sqrt((i+.3)/count)*extent,p=c.surface(a,t,radius*.43),axis=p.clone().sub(V(0,1.70,.055)).normalize(),u=V(0,0,1).cross(axis).normalize(),w=axis.clone().cross(u),points=[];
  for(let j=0;j<=10;j++){const f=j/10,ang=f*Math.PI*coil+i*.8;points.push(p.clone().addScaledVector(u,Math.cos(ang)*radius).addScaledVector(w,Math.sin(ang)*radius*.72).addScaledVector(axis,Math.sin(Math.PI*f)*radius*.8));}
  parts.push(strand(points,radius*.49,radius*.42,8,5));
 }return parts;
}
// Mecha angular da referência: seção larga na raiz, planos facetados e ponta
// deslocada. Sem touca/volume de suporte, cada lâmina nasce no couro cabeludo.
function blade(root,tip,width,depth,lean=0){
 const p=[],uv=[],idx=[],ring=6;
 for(let r=0;r<3;r++){const t=[0,.46,.78][r],c=root.clone().lerp(tip,t);c.x+=Math.sin(Math.PI*t)*lean;const f=[1,.70,.31][r];for(let j=0;j<ring;j++){const a=j/ring*Math.PI*2;p.push(c.x+Math.cos(a)*width*f,c.y,c.z+Math.sin(a)*depth*f);uv.push(j/ring,t);if(r>0){const k=r*ring+j,b=(r-1)*ring+j,n=(j+1)%ring;idx.push(b,(r-1)*ring+n,k,k,(r-1)*ring+n,r*ring+n);}}}
 const end=p.length/3;p.push(...tip.toArray());uv.push(.5,1);for(let j=0;j<ring;j++)idx.push(12+j,12+(j+1)%ring,end);
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);const flat=g.toNonIndexed();g.dispose();flat.computeVertexNormals();return flat;
}
const BUILDERS={
 'lab-reference-mohawk':c=>{
  const parts=[];for(let i=0;i<9;i++){const t=1.10-i*.32,a=t<0?Math.PI:0,root=c.surface(a,Math.abs(t),.002),height=.065+.060*Math.sin((i+.5)/9*Math.PI);parts.push(blade(root,root.clone().add(V((i%2?1:-1)*.007,height,-.032)),.030,.027,.006));}
  for(const side of [-1,1])for(let i=0;i<4;i++){const t=.57-i*.34,x=side*.30,root=c.surface(Math.atan2(x,t),Math.hypot(x,t),.002);parts.push(blade(root,root.clone().add(V(side*.025,.060+i*.003,-.024)),.021,.022,side*.005));}return parts;
 },
 'lab-ragnarok':c=>{const parts=[c.scalp({raise:.012,density:.35})];for(let i=0;i<13;i++){const a=-1.25+i*.19,t=.30+(i%4)*.17,root=c.surface(a,t,.004),tip=c.surface(a+.8,t+.12,.02);tip.add(V(.035,.037+(i%3)*.009,-.045));parts.push(blade(root,tip,.017,.024,.026));}return parts;},
 'lab-long':c=>{const parts=[c.scalp({density:.85})];for(let i=0;i<20;i++){const a=i/20*Math.PI*2,front=Math.cos(a)>.55,root=c.surface(a,.23,.003),part=Math.sin(a)>=0?1:-1,flow=front?part*.95:a,side=c.surface(flow,1.15,.018),end=side.clone();end.y=front?1.60:1.49+.025*Math.sin(i*2.4);end.x+=Math.sin(flow)*.017;end.z+=Math.cos(flow)*.014;parts.push(strand([root,c.surface(flow,.7,.026),side,end],.017,.006,12,5));}return parts;},
 'lab-low-fade':c=>[c.scalp({density:.93}),...swept(c,{count:14,rows:1,start:.75,end:-.95,volume:.008,width:.008})],
 'lab-mid-fade':c=>[c.scalp({raise:.009,density:.8}),...swept(c,{count:12,start:.82,end:-.55,volume:.018,width:.012,part:.018})],
 'lab-high-fade':c=>[c.scalp({raise:.024,density:.7}),...curls(c,{count:29,extent:.88,radius:.009,coil:1.4})],
 'lab-american':c=>{
  // Topo plano com contorno próprio e laterais cônicas (não uma esfera escalada).
  const parts=[c.scalp({raise:.008,density:.7})],p=[],uv=[],idx=[],rings=5,sides=20;
  for(let r=0;r<=rings;r++)for(let i=0;i<=sides;i++){const a=i/sides*Math.PI*2,t=(rings-r)/rings,base=c.surface(a,.95,0),q=base.clone();q.x*=t;q.z=.045+(q.z-.045)*t;q.y=r===0?base.y:1.833+.0015*Math.sin(i*2.1)*t;p.push(...q.toArray());uv.push(i/sides,r/rings);if(r<rings&&i<sides){const k=r*(sides+1)+i;idx.push(k,k+sides+1,k+1,k+1,k+sides+1,k+sides+2);}}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();parts.push(g);return parts;
 },
 'lab-afro':c=>{
  // Volume crespo contínuo e irregular: não esferas/beads separadas.
  const p=[],uv=[],idx=[],sides=40,rings=18;
  for(let r=0;r<=rings;r++)for(let i=0;i<=sides;i++){const a=i/sides*Math.PI*2,t=.001+r/rings*1.36,noise=Math.sin(a*13+t*9)*Math.sin(t*18)+.5*Math.cos(a*21-t*14),volume=(.030+.008*noise*Math.sin(t))*(1-T.MathUtils.smoothstep(t,1.08,1.36)),q=c.surface(a,t,volume);p.push(...q.toArray());uv.push(i/sides,r/rings);if(r<rings&&i<sides){const k=r*(sides+1)+i;idx.push(k,k+sides+1,k+1,k+1,k+sides+1,k+sides+2);}}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return[c.scalp({density:.9}),g,...curls(c,{count:12,extent:1.25,radius:.008,coil:1.6})];
 },
 'lab-curly':c=>[c.scalp({density:.9}),...curls(c,{count:45,extent:.98,radius:.010,coil:1.8})],
 'lab-wavy':c=>[c.scalp({density:.85}),...swept(c,{count:14,start:1.0,end:-1.15,volume:.020,wave:.008,width:.012})],
 'lab-straight':c=>[c.scalp({density:.85}),...swept(c,{count:17,start:-.85,end:1.09,volume:.014,width:.010,part:-.013})],
 'lab-dreads':c=>{const parts=[c.scalp({density:.85})];for(let i=0;i<24;i++){const a=i*2.4,t=.30+Math.sqrt(i/24)*.85,p=c.surface(a,t,.004),d=V(Math.sin(a),0,Math.cos(a)),side=Math.cos(a)>.5;parts.push(strand([p,p.clone().addScaledVector(d,.024).add(V(0,.014,0)),c.surface(a,1.13,.028),c.surface(a,1.13,.028).add(V(.007*Math.sin(i),side?-.025:-.085,.004))],.008,.008,11,6));}return parts;},
 'lab-braids':c=>{const parts=[c.scalp({density:.4})];for(let row=0;row<7;row++)for(const phase of [0,Math.PI]){const pts=[];for(let j=0;j<=22;j++){const t=1.04-j/22*2.45,x=(row-3)*.20,q=c.surface(Math.atan2(x,t),Math.min(1.42,Math.hypot(x,t)),.005);q.x+=Math.sin(j*1.7+phase)*.003;q.y+=Math.cos(j*1.7+phase)*.002;pts.push(q);}parts.push(strand(pts,.0037,.0037,22,5));}return parts;},
 'lab-shaved':c=>[c.scalp({density:.47})],
 'lab-medium':c=>{const parts=[c.scalp({density:.9})];for(let i=0;i<18;i++){const a=i/18*Math.PI*2,p=c.surface(a,.28,.006),front=Math.cos(a)>.5,tip=c.surface(a,1.18,.018).add(V(.008*Math.sin(i),front?-.012:-.065,0));parts.push(strand([p,c.surface(a,.65,.024),c.surface(a,1.03,.025),tip],.016,.009,10,5));}return parts;},
 'lab-quiff':c=>[c.scalp({raise:.006,density:.8}),...swept(c,{count:13,start:.92,end:-.7,volume:.051,width:.012,part:.01})],
 'lab-design':c=>[c.scalp({density:.8,design:true}),...swept(c,{count:10,start:.74,end:-.85,volume:.012,width:.010,part:.02})]
};
export function labHairGeometry(mesh,style,body){
 if(style==='lab-none'||!Object.hasOwn(LAB_HAIR,style)||!body)return null;
 const head=mesh.skeleton.bones.findIndex(b=>/Head$/.test(b.name)),key=style+':'+head+':'+body.geometry.uuid;if(cache.has(key))return cache.get(key);
 const c=context(body);let pieces;try{pieces=BUILDERS[style](c);}finally{c.dispose();}
 const flat=pieces.map(p=>{if(!p.attributes.coverage)p.setAttribute('coverage',new T.Float32BufferAttribute(new Float32Array(p.attributes.position.count).fill(1),1));return p.index?p.toNonIndexed():p;});
 const g=mergeGeometries(flat,false);for(const p of new Set([...pieces,...flat]))p.dispose();const n=g.attributes.position.count,skin=new Uint16Array(n*4),weights=new Float32Array(n*4);for(let i=0;i<n;i++){skin[i*4]=head;weights[i*4]=1;}
 g.setAttribute('skinIndex',new T.Uint16BufferAttribute(skin,4));g.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));g.computeBoundingBox();g.computeBoundingSphere();g.userData={labHair:style,pieces:pieces.length,shared:true};cache.set(key,g);return g;
}
let texture;
export function labHairMaterial(color){
 if(!texture){const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d'),data=ctx.createImageData(128,128);for(let y=0;y<128;y++)for(let x=0;x<128;x++){const i=(y*128+x)*4,noise=((Math.imul(x+7,73)^Math.imul(y+11,151))&255)/255,grain=172+noise*36+Math.sin(x*2+y*.14)*26;data.data[i]=data.data[i+1]=data.data[i+2]=grain;data.data[i+3]=255;}ctx.putImageData(data,0,0);texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.userData.shared=true;}
 const m=new T.MeshStandardMaterial({name:'XFC | isolated hair',map:texture,color,roughness:.94,metalness:0,side:T.DoubleSide});
 m.onBeforeCompile=s=>{s.vertexShader='attribute float coverage; varying float vHairCoverage;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvHairCoverage=coverage;');s.fragmentShader='varying float vHairCoverage;\n'+s.fragmentShader;s.fragmentShader=s.fragmentShader.replace('#include <alphatest_fragment>',`#include <alphatest_fragment>\nfloat grain=fract(sin(dot(floor(vMapUv*512.),vec2(12.9898,78.233)))*43758.5453);if(vHairCoverage<grain)discard;`);};m.customProgramCacheKey=()=> 'xfc-isolated-hair-v2';m.userData.hairOnly=true;return m;
}

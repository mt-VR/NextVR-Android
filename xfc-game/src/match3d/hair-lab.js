// Peças construídas por famílias diferentes, não escala/deformação de uma touca.
// Coordenadas de bind da cabeça atual. Só IDs lab-* optam por este catálogo.
import {THREE as T} from './engine.js';
import {mergeGeometries} from '../../vendor/BufferGeometryUtils.js';
import {LAB_HAIR} from '../data/player-customization.js';
const cache=new Map();
const v=(x,y,z)=>new T.Vector3(x,y,z);
let scalpSource=null;
function shell({rim=1.5,gap=false,thickness=.002}={}){
 // Recorta o couro cabeludo da cabeça real. Não infere um crânio elipsoidal.
 const source=scalpSource.index?scalpSource.toNonIndexed():scalpSource,p=source.attributes.position,n=source.attributes.normal,positions=[],normals=[],uv=[];
 const height=q=>1.65+(q.z+.06)/.23*.10+(1.5-rim)*.022;
 for(let i=0;i<p.count;i+=3){
  let poly=[0,1,2].map(j=>({p:v(p.getX(i+j),p.getY(i+j),p.getZ(i+j)),n:v(n.getX(i+j),n.getY(i+j),n.getZ(i+j))}));
  if(poly.some(q=>Math.abs(q.p.x)>.13)||poly.every(q=>q.p.y<1.63))continue;
  const clipped=[];for(let j=0;j<3;j++){const a=poly[j],b=poly[(j+1)%3],da=a.p.y-height(a.p),db=b.p.y-height(b.p);if(da>=0)clipped.push(a);if((da>=0)!==(db>=0)){const t=da/(da-db);clipped.push({p:a.p.clone().lerp(b.p,t),n:a.n.clone().lerp(b.n,t).normalize()});}}poly=clipped;
  for(let j=1;j<poly.length-1;j++){
   const tri=[poly[0],poly[j],poly[j+1]];const cx=tri.reduce((s,q)=>s+q.p.x,0)/3,cy=tri.reduce((s,q)=>s+q.p.y,0)/3,cz=tri.reduce((s,q)=>s+q.p.z,0)/3;
   if(gap&&cx>.065&&((Math.abs(cy-(1.73+cz*.13))<.004)||(Math.abs(cy-(1.745+cz*.13))<.004)))continue;
   for(const q of tri){const out=q.p.clone().addScaledVector(q.n,thickness);positions.push(...out.toArray());normals.push(...q.n.toArray());uv.push(Math.atan2(q.p.x,q.p.z-.055)/Math.PI/2+.5,(q.p.y-1.64)/.2);}
  }
 }
 if(source!==scalpSource)source.dispose();const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('normal',new T.Float32BufferAttribute(normals,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));return g;
}
function tube(points,radius=.008,steps=9,sides=5){return new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>v(...p))),steps,radius,sides,false);}
function tuft(x,y,z,rx,ry,rz){const g=new T.SphereGeometry(1,7,5);g.scale(rx,ry,rz);g.translate(x,y,z);return g;}
function scalpAnchor(p){const d=[p[0]/.086,(p[1]-1.695)/.127,(p[2]-.055)/.111],n=Math.hypot(...d)||1;return[d[0]/n*.094,1.695+d[1]/n*.138,.055+d[2]/n*.126];}
function lock(points,width=.013,depth=.006){
 points=points.map(p=>p.slice());points[0]=scalpAnchor(points[0]);
 // Seção elíptica reduzida nas pontas, preservando a direção da mecha.
 const g=tube(points,1,8,6),p=g.attributes.position,curve=new T.CatmullRomCurve3(points.map(p=>v(...p))),frames=curve.computeFrenetFrames(8,false);
 for(let r=0;r<=8;r++){const c=curve.getPointAt(r/8),taper=.3+.7*Math.sin(Math.PI*(.12+.85*r/8));for(let j=0;j<=6;j++){const a=j/6*Math.PI*2,q=c.clone().addScaledVector(frames.normals[r],Math.cos(a)*width*taper).addScaledVector(frames.binormals[r],Math.sin(a)*depth*taper);p.setXYZ(r*7+j,q.x,q.y,q.z);}}
 g.computeVertexNormals();return g;
}
const BUILDERS={
 'lab-low-fade':()=>[shell({rim:1.65}),...Array.from({length:7},(_,i)=>lock([[(i-3)*.018,1.804,.12],[(i-3)*.018,1.845,.065],[(i-3)*.016,1.81,.005]],.012,.006))],
 'lab-mid-fade':()=>[shell({rim:1.36}),...Array.from({length:9},(_,i)=>lock([[-.07+i*.017,1.79,.14],[-.04+i*.012,1.858,.06],[.015+i*.007,1.82,-.01]],.014,.008))],
 'lab-high-fade':()=>[shell({rim:1.16}),...Array.from({length:6},(_,i)=>tuft((i-2.5)*.023,1.827,.066,.017,.028,.065))],
 'lab-american':()=>{
  const p=[],idx=[],uv=[];const levels=[[1.77,.075,.085],[1.845,.075,.08],[1.855,.061,.063]];
  for(let r=0;r<3;r++)for(let s=0;s<12;s++){const a=s/12*Math.PI*2;p.push(Math.sin(a)*levels[r][1],levels[r][0],.055+Math.cos(a)*levels[r][2]);uv.push(s/12,r/2);if(r<2){const n=(s+1)%12;idx.push(r*12+s,(r+1)*12+s,r*12+n,r*12+n,(r+1)*12+s,(r+1)*12+n);}}
  p.push(0,1.855,.055);uv.push(.5,.5);for(let i=0;i<12;i++)idx.push(36,24+i,24+(i+1)%12);
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return[shell({rim:1.3}),g];
 },
 'lab-afro':()=>{const parts=[shell({rim:1.5,thickness:.009})];for(let row=0;row<5;row++)for(let i=0;i<12;i++){const a=(i+row*.45)/12*Math.PI*2,t=.18+row*.28;parts.push(tuft(.098*Math.sin(t)*Math.sin(a),1.695+.143*Math.cos(t),.055+.125*Math.sin(t)*Math.cos(a),.017,.017,.017));}return parts;},
 'lab-curly':()=>{const parts=[shell({rim:1.45})];for(let i=0;i<22;i++){const a=i*2.4,t=.22+Math.sqrt(i/22)*1.03,x=.087*Math.sin(t)*Math.sin(a),y=1.695+.144*Math.cos(t),z=.055+.126*Math.sin(t)*Math.cos(a),points=[];for(let j=0;j<=12;j++){const q=j/12*Math.PI*2;points.push([x+.009*Math.cos(q),y+.006+j/12*.01,z+.009*Math.sin(q)]);}parts.push(tube(points,.005,12,5));}return parts;},
 'lab-wavy':()=>[shell(),...Array.from({length:8},(_,i)=>lock([[(i-3.5)*.019,1.79,.145],[(i-3.5)*.018+.012,1.843,.10],[(i-3.5)*.017-.008,1.852,.04],[(i-3.5)*.016,1.8,-.03]],.014,.009))],
 'lab-straight':()=>[shell({rim:1.4}),...Array.from({length:11},(_,i)=>lock([[(i-5)*.014,1.815,.01],[(i-5)*.014,1.842,.07],[(i-5)*.015,1.782,.151]],.011,.005))],
 'lab-mohawk':()=>[shell({rim:1.38,thickness:.0008}),...Array.from({length:8},(_,i)=>lock([[0,1.79,-.015+i*.021],[0,1.89+Math.sin(i/7*Math.PI)*.015,-.013+i*.021],[0,1.81,.003+i*.021]],.012,.012))],
 'lab-dreads':()=>{const parts=[shell({rim:1.4})];for(let i=0;i<18;i++){const a=i/18*Math.PI*2,x=Math.sin(a),z=Math.cos(a);parts.push(tube([[x*.06,1.81,.055+z*.07],[x*.099,1.82,.055+z*.12],[x*.113,1.69,.055+z*.136],[x*.108,1.62+(z>0?.12:0),.055+z*.13]],.009,10,6));}return parts;},
 'lab-braids':()=>{const parts=[shell({rim:1.46,thickness:.001})];for(let row=0;row<7;row++)for(const strand of [-1,1]){const points=[];for(let i=0;i<=16;i++){const t=i/16,theta=.72-t*2.5;const q=scalpAnchor([(row-3)*.023,1.695+.139*Math.cos(theta),.055+.119*Math.sin(theta)]);q[0]+=strand*.004*Math.sin(t*24);q[1]+=.003;points.push(q);}parts.push(tube(points,.0045,16,5));}return parts;},
 'lab-shaved':()=>[shell({rim:1.48,segments:28,rings:8,thickness:.0007})],
 'lab-medium':()=>[shell({rim:1.65}),...Array.from({length:12},(_,i)=>{const a=i/12*Math.PI*2,x=Math.sin(a),z=Math.cos(a);return lock([[x*.045,1.818,.055+z*.06],[x*.098,1.80,.055+z*.115],[x*.106,1.65+(z>0?.10:0),.055+z*.132]],.023,.008);})],
 'lab-quiff':()=>[shell({rim:1.37}),...Array.from({length:8},(_,i)=>lock([[(i-3.5)*.019,1.77,.148],[(i-3.5)*.018,1.90,.148],[(i-3.5)*.018,1.872,.07],[(i-3.5)*.016,1.812,.005]],.014,.010))],
 'lab-design':()=>[shell({rim:1.60,gap:true}),...Array.from({length:5},(_,i)=>lock([[(i-2)*.026,1.79,.14],[(i-2)*.025,1.851,.07],[(i-2)*.02,1.81,-.01]],.016,.009))]
};
export function labHairGeometry(mesh,style,body){
 if(style==='lab-none'||!Object.hasOwn(LAB_HAIR,style))return null;
 scalpSource=body?.geometry;if(!scalpSource)return null;
 const head=mesh.skeleton.bones.findIndex(b=>/Head$/.test(b.name)),key=style+':'+head+':'+scalpSource.uuid;if(cache.has(key))return cache.get(key);
 const pieces=BUILDERS[style](),flat=pieces.map(p=>p.index?p.toNonIndexed():p),g=mergeGeometries(flat,false);for(const p of new Set([...pieces,...flat]))p.dispose();
 const n=g.attributes.position.count,skin=new Uint16Array(n*4),weights=new Float32Array(n*4);for(let i=0;i<n;i++){skin[i*4]=head;weights[i*4]=1;}
 g.setAttribute('skinIndex',new T.Uint16BufferAttribute(skin,4));g.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));g.computeBoundingBox();g.computeBoundingSphere();
 g.userData={labHair:style,pieces:pieces.length,shared:true};cache.set(key,g);return g;
}

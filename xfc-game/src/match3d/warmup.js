// Figurantes dos reservas: sem colisões, IA de partida ou alteração do elenco.
import {THREE as T} from './engine.js';
import {preloadFootballerPack,createGltfPlayer} from './models.js';
import {appearanceFor} from '../data/appearance.js';
export const WARMUP_ROUTE={halfX:61,halfZ:42,radius:5};
const lines=[112,Math.PI*2.5,74,Math.PI*2.5,112,Math.PI*2.5,74,Math.PI*2.5];
export const WARMUP_LENGTH=lines.reduce((a,b)=>a+b,0);
export function warmupPose(distance){
 let d=((distance%WARMUP_LENGTH)+WARMUP_LENGTH)%WARMUP_LENGTH,i=0;while(d>lines[i])d-=lines[i++];const t=d/lines[i];let x,z,dx,dz;
 if(i===0){x=-56+t*112;z=-42;dx=1;dz=0;}else if(i===2){x=61;z=-37+t*74;dx=0;dz=1;}else if(i===4){x=56-t*112;z=42;dx=-1;dz=0;}else if(i===6){x=-61;z=37-t*74;dx=0;dz=-1;}else{const centers=[[56,-37],[56,37],[-56,37],[-56,-37]],k=(i-1)/2,a=-Math.PI/2+k*Math.PI/2+t*Math.PI/2;[x,z]=centers[k];x+=Math.cos(a)*5;z+=Math.sin(a)*5;dx=-Math.sin(a);dz=Math.cos(a);}
 return{x,z,yaw:Math.atan2(dx,dz)};
}
export function addWarmup(parent,entries=[],lowPower=false){
 const group=new T.Group();group.name='xfc-warmup';parent.add(group);const actors=[];let disposed=false,time=0,accumulator=0;
 entries=entries.filter(e=>e?.team?.players?.length);
 const ready=entries.length?preloadFootballerPack().then(ok=>{if(!ok||disposed)return;const count=lowPower?2:4;for(let i=0;i<count;i++){const entry=entries[i%entries.length],reserves=(entry.team.substitutes||entry.team.players.slice(11)).filter(p=>p.pos!=='GK'),p=reserves[Math.floor(i/entries.length)%reserves.length];if(!p)continue;const kit=entry.kit||{},colors=kit.colors||{primary:'#ffc72e',secondary:'#243849'},a=createGltfPlayer({...appearanceFor(p),kit:{...kit,...colors,primary:i%2?'#f9ba35':'#e55b37',shorts:colors.primary,socks:colors.primary},number:p.number,simplified:true});if(!a)continue;a.root.name='xfc-warmup-athlete';a.root.userData.role=i===0||i===3?'jog':'stretch';a.root.userData.rosterId=p.id;group.add(a.root);actors.push(a);}update(0);}):Promise.resolve();
 function update(dt){if(disposed)return;time+=dt;accumulator+=dt;const animate=accumulator>=(lowPower?1/20:1/30),step=accumulator;if(animate)accumulator=0;
  actors.forEach((a,i)=>{if(i===0||i===3){const q=warmupPose(time*2.2+(i===0?0:WARMUP_LENGTH/2));a.root.position.set(q.x,0,q.z);a.root.rotation.y=q.yaw;if(animate)a.update(step,{speed:2.2,moving:true,x:q.x,z:q.z});}else{a.root.position.set(i===1?-32:32,0,45.5);a.root.rotation.y=Math.PI;if(animate){a.update(step,{speed:0});const stretch=(Math.sin(time*.65+i)+1)*.5;a.bones.spine.rotation.z=.10*Math.sin(time*.65+i);a.bones.leftArm.rotation.z=.45+stretch*1.6;a.bones.rightArm.rotation.z=-.45-stretch*1.6;a.bones.leftForeArm.rotation.x=-.30;a.bones.rightForeArm.rotation.x=-.30;} } });
 }
 return{group,actors,ready,update,dispose(){disposed=true;for(const a of actors){group.remove(a.root);a.dispose();}actors.length=0;parent.remove(group);}};
}

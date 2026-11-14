// Primeiro corpo cruzado pelo segmento: independe do FPS e da ordem do elenco.
// Posições físicas x/z, nunca a malha do frame anterior.
export function firstBallContact(from,to,players,{radius=.11,ignore=null}={}){
 const dx=to.x-from.x,dz=to.z-from.z,dy=to.y-from.y,a=dx*dx+dz*dz;let best=null;
 for(const player of players){
  if(!player.active||player===ignore)continue;
  const x=player.x??player.root?.position.x,z=player.z??player.root?.position.z;
  if(!Number.isFinite(x)||!Number.isFinite(z))continue;
  const reach=(player.reach||.52)+radius,ox=from.x-x,oz=from.z-z,c=ox*ox+oz*oz-reach*reach;
  let enter=0,exit=1;
  if(a<1e-10){if(c>0)continue;}
  else{const b=2*(ox*dx+oz*dz),disc=b*b-4*a*c;if(disc<0)continue;const root=Math.sqrt(disc);enter=Math.max(0,(-b-root)/(2*a));exit=Math.min(1,(-b+root)/(2*a));}
  // Interseção vertical também contínua: bola descendente pode entrar pelo topo.
  const height=(player.reachHeight||1.8)+radius;
  if(Math.abs(dy)<1e-10){if(from.y>height||from.y<0)continue;}
  else{const low=-from.y/dy,high=(height-from.y)/dy;enter=Math.max(enter,Math.min(low,high));exit=Math.min(exit,Math.max(low,high));}
  if(enter>exit||enter>1||exit<0)continue;
  if(!best||enter<best.t)best={player,t:enter,x:from.x+dx*enter,z:from.z+dz*enter,y:from.y+dy*enter};
 }
 return best;
}

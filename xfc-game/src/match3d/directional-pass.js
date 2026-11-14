// Escolha por cone do analógico, inclusive para os lados e para trás.
export function directionalPassTarget(player,players,direction){
 const length=Math.hypot(direction.x,direction.z);if(length<.12)return null;
 let best=null,score=-Infinity;
 for(const mate of players){if(!mate.active||mate===player||mate.side!==player.side||mate.isKeeper||mate.isGK)continue;
  const dx=mate.x-player.x,dz=mate.z-player.z,distance=Math.hypot(dx,dz);if(distance<1||distance>65)continue;
  const alignment=(dx*direction.x+dz*direction.z)/(distance*length);if(alignment<.55)continue;
  const value=alignment*100-distance*.22;if(value>score){best=mate;score=value;}
 }return best;
}

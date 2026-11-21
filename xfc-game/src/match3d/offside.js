// Linha do PENÚLTIMO adversário, além da bola e somente no campo de ataque.
export function offsidePosition(player,ball,rivals,sign=1){
 if(!player?.active||!ball||player.x*sign<=.05)return false;
 let first=-Infinity,second=-Infinity,count=0;
 for(const rival of rivals){if(!rival.active)continue;count++;const x=rival.x*sign;if(x>first){second=first;first=x;}else if(x>second)second=x;}
 if(count<2)return false;
 return player.x*sign>Math.max(second,ball.x*sign)+.15;
}
export function offsideExempt(restart){return ['corner','throwin','goalkick','kickoff'].includes(restart);}

// Avaliação determinística e barata: pedido não força passe impossível.
export function evaluatePassRequest({owner,receiver,rivals=[],attackSign=1,offside=false}){
 const no=reason=>({accepted:false,reason});
 if(!owner?.active||!receiver?.active||owner===receiver||owner.side!==receiver.side)return no('Aguarde a posse de um companheiro');
 const dx=receiver.x-owner.x,dz=receiver.z-owner.z,distance=Math.hypot(dx,dz);
 if(distance<3)return no('Abra espaço para receber');
 if(distance>34)return no('Aproxime-se do companheiro');
 if(Math.abs(receiver.x)>50||Math.abs(receiver.z)>31)return no('Volte para dentro do campo');
 const defenders=rivals.filter(r=>r.active).map(r=>r.x*attackSign).sort((a,b)=>b-a);
 const beyondLine=defenders.length>=2&&receiver.x*attackSign>0&&dx*attackSign>.6&&receiver.x*attackSign>defenders[1]+.4;
 if(offside||beyondLine)return no('Saia da posição de impedimento');
 let marking=Infinity,pressure=Infinity,corridor=Infinity;
 for(const r of rivals){if(!r.active)continue;
  marking=Math.min(marking,Math.hypot(r.x-receiver.x,r.z-receiver.z));pressure=Math.min(pressure,Math.hypot(r.x-owner.x,r.z-owner.z));
  const t=((r.x-owner.x)*dx+(r.z-owner.z)*dz)/(distance*distance);
  if(t>.08&&t<.94)corridor=Math.min(corridor,Math.hypot(r.x-owner.x-t*dx,r.z-owner.z-t*dz));
 }
 if(marking<2)return no('Você está marcado');
 if(corridor<1.7+distance*.025)return no('Linha de passe bloqueada');
 const goalDistance=Math.hypot(52.5*attackSign-owner.x,owner.z);
 if(goalDistance<16&&Math.abs(owner.z)<10&&pressure>3&&dx*attackSign<2)return no('Companheiro em posição de finalizar');
 if(dx*attackSign<-16&&pressure>4)return no('Procure uma opção mais próxima');
 return {accepted:true,reason:'Passe solicitado',power:Math.max(12,Math.min(23,10+distance*.4)),distance};
}

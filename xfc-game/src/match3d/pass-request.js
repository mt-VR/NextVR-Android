// Pedido explícito do usuário: o companheiro atende, inclusive de longe.
// Impedimento não bloqueia o pedido; a arbitragem é resolvida ao receber.
export function evaluatePassRequest({owner,receiver}){
 if(!owner?.active||!receiver?.active||owner===receiver||owner.side!==receiver.side)return {accepted:false,reason:'Aguarde a posse de um companheiro'};
 const distance=Math.hypot(receiver.x-owner.x,receiver.z-owner.z);
 return {accepted:true,reason:distance>34?'Passe longo solicitado':'Passe solicitado',distance,power:Math.max(12,Math.min(36,10+distance*.35)),requested:true};
}

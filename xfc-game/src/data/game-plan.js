import {FORMATION_433} from '../match3d/constants.js';
export const TACTICS={balanced:{name:'Tática Padrão',description:'Equilíbrio entre ataque e defesa',height:0,press:1,pass:1},defensive:{name:'Defesa Sólida',description:'Bloco recuado e proteção do gol',height:-7,press:.65,pass:1},counter:{name:'Contra-Ataque',description:'Recuperar e acelerar a construção',height:-4,press:.9,pass:.75},possession:{name:'Posse de Bola',description:'Apoios próximos e mais passes',height:2,press:1,pass:1.9},press:{name:'Pressão Alta',description:'Bloco adiantado, pressão sobre a bola',height:7,press:1.4,pass:1.1}};
export const FORMATIONS={
 '4-3-3':FORMATION_433.map(p=>({...p,x:p.role==='GK'?-43:p.role==='ST'?30:['LW','RW'].includes(p.role)?23:['LB','RB','CB'].includes(p.role)?-27:p.role==='CDM'?-10:0,z:p.role==='CM'?-14:p.role==='CDM'?0:p.role==='CAM'?14:p.z})),
 '4-4-2':[{role:'GK',x:-48,z:0},{role:'LB',x:-28,z:-23},{role:'CB',x:-30,z:-8},{role:'CB',x:-30,z:8},{role:'RB',x:-28,z:23},{role:'LW',x:-4,z:-23},{role:'CM',x:-7,z:-8},{role:'CM',x:-7,z:8},{role:'RW',x:-4,z:23},{role:'ST',x:20,z:-8},{role:'ST',x:20,z:8}],
 '3-5-2':[{role:'GK',x:-48,z:0},{role:'CB',x:-30,z:-17},{role:'CB',x:-32,z:0},{role:'CB',x:-30,z:17},{role:'LW',x:-3,z:-25},{role:'CM',x:-7,z:-12},{role:'CM',x:-9,z:0},{role:'CM',x:-7,z:12},{role:'RW',x:-3,z:25},{role:'ST',x:20,z:-8},{role:'ST',x:20,z:8}]
};
export function newGamePlan(team){
 const players=team.players.slice(0,11),used=new Set();
 const lineup=FORMATION_433.map(slot=>{const p=players.find(p=>p.pos===slot.role&&!used.has(p.id));if(p)used.add(p.id);return p?.id;});
 for(let i=0;i<lineup.length;i++)if(!lineup[i]){const p=players.find(p=>!used.has(p.id));lineup[i]=p.id;used.add(p.id);}
 return {formation:'4-3-3',preset:'balanced',lineup,positions:{},roles:Object.fromEntries(players.map(p=>[p.id,p.pos])),instructions:{},captain:players.find(p=>p.captain)?.id||players[0].id};
}
export function normalisePlan(team,value){
 const plan={...newGamePlan(team),...JSON.parse(JSON.stringify(value||{}))},roster=[...team.players,...team.substitutes],ids=new Set(roster.map(p=>p.id));
 plan.lineup=[...new Set((plan.lineup||[]).filter(id=>ids.has(id)))];for(const p of roster)if(plan.lineup.length<11&&!plan.lineup.includes(p.id))plan.lineup.push(p.id);
 plan.lineup=plan.lineup.slice(0,11);const keeper=roster.find(p=>p.pos==='GK');if(keeper&&!plan.lineup.some(id=>roster.find(p=>p.id===id)?.pos==='GK'))plan.lineup[0]=keeper.id;
 const k=plan.lineup.findIndex(id=>roster.find(p=>p.id===id)?.pos==='GK');if(k>0)[plan.lineup[0],plan.lineup[k]]=[plan.lineup[k],plan.lineup[0]];
 if(!Object.hasOwn(FORMATIONS,plan.formation))plan.formation='4-3-3';if(!Object.hasOwn(TACTICS,plan.preset))plan.preset='balanced';
 plan.positions||={};plan.instructions||={};return plan;
}
export function plannedTeam(team,value,lockedId=null){
 const plan=normalisePlan(team,value),roster=[...team.players,...team.substitutes];
 if(lockedId&&!plan.lineup.includes(lockedId)&&roster.some(p=>p.id===lockedId))plan.lineup[10]=lockedId;
 const slots=FORMATIONS[plan.formation],positions={};
 const players=plan.lineup.map((id,i)=>{const p=roster.find(p=>p.id===id),custom=plan.positions[id];positions[id]={...slots[i],...(custom&&Number.isFinite(custom.x)&&Number.isFinite(custom.z)?{x:Math.max(-48,Math.min(43,custom.x)),z:Math.max(-29,Math.min(29,custom.z))}:{})};return {...p,pos:i===0?'GK':(['CB','LB','RB','CDM','CM','CAM','LW','RW','ST'].includes(plan.roles?.[id])?plan.roles[id]:slots[i].role),captain:id===plan.captain,instruction:['support','forward','hold'].includes(plan.instructions[id])?plan.instructions[id]:'support',stats:{...p.stats}};});
 return {...team,formation:plan.formation,players,substitutes:roster.filter(p=>!plan.lineup.includes(p.id)),plan:positions,tactics:{...TACTICS[plan.preset]},savedPlan:plan};
}
export function swapPlanPlayer(team,plan,a,b,lockedId){
 if(a===lockedId||b===lockedId)return false;
 const roster=[...team.players,...team.substitutes],pa=roster.find(p=>p.id===a),pb=roster.find(p=>p.id===b);if(!pa||!pb||(pa.pos==='GK')!==(pb.pos==='GK'))return false;
 const ia=plan.lineup.indexOf(a),ib=plan.lineup.indexOf(b);if(ia<0&&ib<0)return false;
 if(ia>=0)plan.lineup[ia]=b;if(ib>=0)plan.lineup[ib]=a;return true;
}

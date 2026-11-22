// Eventos locais duráveis. Não inferir uma contratação ao abrir saves antigos.
export function queueCareerPresentation(c,type='signing',fromClubId=null){
 if(!c?.player||c.kind==='manager'||c.pending||!['signing','transfer','renewal'].includes(type))return null;
 const id=`${c.season}:${c.clubId}:${type}`;
 if(c.presentation?.id===id)return c.presentation;
 c.presentation={id,type,clubId:c.clubId,fromClubId,season:c.season,status:'pending',player:{name:c.player.name,number:c.player.number,appearance:{...c.player.appearance}}};return c.presentation;
}
export function pendingCareerPresentation(c){const e=c?.presentation;return e?.status==='pending'&&e.clubId===c.clubId&&e.season===c.season?e:null;}
export function completeCareerPresentation(c,id,skipped=false){if(pendingCareerPresentation(c)?.id!==id)return false;c.presentation.status=skipped?'skipped':'played';return true;}
export const PRESENTATION_SHOTS=[
 {id:'announcement',duration:3,title:'ANÚNCIO OFICIAL'},
 {id:'arrival',duration:4,title:'CHEGADA AO CLUBE'},
 {id:'entrance',duration:3,title:'SALA DE IMPRENSA'},
 {id:'representatives',duration:3,title:'UM NOVO CAPÍTULO'},
 {id:'contract',duration:3,title:'O ACORDO'},
 {id:'signature',duration:5,title:'CONTRATO ASSINADO'},
 {id:'stand',duration:3,title:'BEM-VINDO'},
 {id:'shirt',duration:4,title:'NOME • NÚMERO • HISTÓRIA'},
 {id:'photo',duration:4,title:'APRESENTAÇÃO OFICIAL'},
 {id:'club',duration:3,title:'JUNTOS NA PRÓXIMA TEMPORADA'}
];
export function presentationShots(type){return PRESENTATION_SHOTS.filter(s=>!(type==='signing'&&s.id==='announcement')&&!(type==='renewal'&&['arrival','entrance'].includes(s.id)));}
export function presentationFrame(type,time){const shots=presentationShots(type);let start=0;for(const shot of shots){if(time<start+shot.duration)return{...shot,start,progress:Math.max(0,(time-start)/shot.duration),done:false};start+=shot.duration;}return{...shots.at(-1),start:start-shots.at(-1).duration,progress:1,done:true};}

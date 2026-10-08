// Native PhoneXR pose/pinch decisions only. An open palm arms the system button; entering the
// pose already pinching cannot steal a page click or repeatedly summon the dock.
export class PalmDockGesture {
  constructor(){this.states=new Map();}
  update(hands,now){
    const present=new Set(hands.map(h=>h.id));
    for(const id of this.states.keys())if(!present.has(id))this.states.delete(id);
    const buttons=[];
    for(const h of hands){
      if(!h.menuEligible || h.fist){this.states.delete(h.id);continue;}
      let state=this.states.get(h.id);
      if(!state){state={openSince:null,held:false};this.states.set(h.id,state);}
      let activate=false;
      if(!h.pinching){if(state.openSince===null)state.openSince=now;state.held=false;}
      else {
        activate=!state.held && state.openSince!==null && now-state.openSince>=150;
        state.held=true;state.openSince=null;
      }
      buttons.push({hand:h,activate});
    }
    return buttons;
  }
}

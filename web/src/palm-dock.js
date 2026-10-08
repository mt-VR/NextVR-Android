// Native PhoneXR pose/pinch decisions only. An open palm arms the system button; entering the
// pose already pinching cannot steal a page click or repeatedly summon the dock.
// During the open-palm → pinch transition the hand briefly passes through a fist-like shape
// (index curled + 2 other fingers curled). Deleting the state here would destroy the 80 ms
// open-palm timer right before the pinch completes, making the gesture nearly impossible.
// Instead: fist pauses the gesture but preserves state; the 300 ms grace period cleans up
// stale states when the fist is intentional (grab).
export class PalmDockGesture {
  constructor(){this.states=new Map();}
  update(hands,now){
    const present=new Set(hands.map(h=>h.id));
    for(const id of this.states.keys())if(!present.has(id))this.states.delete(id);
    const buttons=[];
    for(const h of hands){
      let state=this.states.get(h.id);
      if(h.fist){
        if(state)buttons.push({hand:h,activate:false});
        continue;
      }
      if(h.menuEligible){
        if(!state){state={openSince:null,held:false,eligibleUntil:0};this.states.set(h.id,state);}
        state.eligibleUntil=now+300;
      }
      if(!state)continue;
      const armed=now<state.eligibleUntil;
      if(!armed && !h.menuEligible){this.states.delete(h.id);continue;}
      let activate=false;
      if(!h.pinching){
        if(state.openSince===null && armed)state.openSince=now;
        state.held=false;
      }
      else {
        activate=!state.held && state.openSince!==null && now-state.openSince>=80 && armed;
        state.held=true;state.openSince=null;
      }
      buttons.push({hand:h,activate});
    }
    return buttons;
  }
}

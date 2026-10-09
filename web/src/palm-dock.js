// Palm dock via pinch has been removed. Dock invocation no longer depends on any pinch
// gesture. This stub remains to avoid import errors but does not produce any dock summon.
// Other PhoneXR hand gestures (pinch click, fist grab, direct touch, ray) are unchanged
// and continue to be handled by OrangeHanding / PhoneXrHands.
export class PalmDockGesture {
  constructor(){this.states=new Map();}
  update(hands, now){
    // No longer consumes hands or emits summon-dock. Return no buttons.
    // Kept for compatibility; previously required: open palm + pinch after 150ms.
    // Now intentionally disabled.
    return [];
  }
}

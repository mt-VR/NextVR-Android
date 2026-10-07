// Setup-only fallback. No synthetic hand gestures and no auto-click after a paused frame loop.
export class DwellSelection {
  constructor(duration=1200) { this.duration=duration;this.reset(); }
  reset() { this.target=null;this.start=0;this.last=0;this.fired=false;this.samples=0; }
  update(target,now) {
    if(!target) { this.reset();return {progress:0,activate:false}; }
    if(target!==this.target || now<this.last || now-this.last>750) {
      this.target=target;this.start=now;this.fired=false;this.samples=0;
    }
    this.last=now;this.samples++;
    const progress=Math.min(1,(now-this.start)/this.duration);
    const activate=progress===1 && this.samples>=4 && !this.fired;
    if(activate)this.fired=true;
    return {progress,activate};
  }
}

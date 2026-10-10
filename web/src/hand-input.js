/**
 * State transitions for a single PhoneXR pointing hand.
 *
 * A down edge is emitted once when a pinch begins, repeated pinched samples are holds, an observed
 * open pinch emits one release, and losing/changing the hand cancels rather than clicks. This is
 * deliberately sample-driven: it adds no minimum press duration that would punish slow tracking.
 */
export class HandClickState {
  constructor() {
    this.phase = 'hovering';
    this.handId = null;
  }

  get down() {
    return this.phase === 'pressing' || this.phase === 'holding';
  }

  update(handId, pinching) {
    if (handId == null) return this.cancel();

    const events = [];
    if (this.handId !== null && this.handId !== handId) {
      if (this.down) events.push('cancel');
      this.phase = 'hovering';
    }
    this.handId = handId;

    if (pinching) {
      if (this.down) this.phase = 'holding';
      else {
        this.phase = 'pressing';
        events.push('down');
      }
    } else if (this.down) {
      this.phase = 'releasing';
      events.push('up');
    } else {
      this.phase = 'hovering';
    }
    return events;
  }

  cancel() {
    const events = this.down ? ['cancel'] : [];
    this.phase = 'hovering';
    this.handId = null;
    return events;
  }
}

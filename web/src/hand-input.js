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

/**
 * Click versus drag for one held pinch, decided by how far the hand travels while pinched.
 *
 * The old behavior sent touch-DOWN the instant the pinch closed and forwarded every cursor move to
 * the page, so on sites like YouTube a tremor-laced click always arrived as a drag. Instead the
 * press stays undecided for a short decision window and the measured travel from the pinch anchor
 * classifies it:
 *
 *  - travel beyond `dragOnPx` (sustained over `sustainSamples`) classifies the gesture as a DRAG;
 *  - once the window elapses with travel below `dragOnPx` it is a CLICK — and a later, clearly
 *    deliberate sweep can still promote it to a drag before release;
 *  - hysteresis keeps the classification stable: "moving" enters at `dragOnPx` and only leaves
 *    below `dragOffPx`, a single noisy sample cannot flip the state (`sustainSamples`), and a
 *    gesture classified as drag never demotes back to a click mid-press.
 *
 * Positions are in logical pixels. Only REAL detections may be sampled — motion-model predictions
 * must never classify a gesture (they keep moving after the hand stops, which would fake a drag).
 */
export class ClickDragArbiter {
  constructor({ decideMs = 150, dragOnPx = 18, dragOffPx = 8, sustainSamples = 2 } = {}) {
    this.decideMs = decideMs;
    this.dragOnPx = dragOnPx;
    this.dragOffPx = dragOffPx;
    this.sustainSamples = sustainSamples;
    this.mode = 'idle';
    this.handId = null;
    this.anchorX = 0;
    this.anchorY = 0;
    this.startedAt = 0;
    this.moving = false;
    this.beyond = 0;
    this.maxDisp = 0;
  }

  begin(handId, px, py, nowMs) {
    this.mode = 'undecided';
    this.handId = handId;
    this.anchorX = px;
    this.anchorY = py;
    this.startedAt = nowMs;
    this.moving = false;
    this.beyond = 0;
    this.maxDisp = 0;
    return this.mode;
  }

  sample(handId, px, py, nowMs) {
    if (this.mode === 'idle' || handId !== this.handId) return this.mode;
    const disp = Math.hypot(px - this.anchorX, py - this.anchorY);
    if (disp > this.maxDisp) this.maxDisp = disp;
    if (disp >= this.dragOnPx) {
      if (++this.beyond >= this.sustainSamples) {
        this.moving = true;
        this.mode = 'drag';
      }
    } else if (disp <= this.dragOffPx) {
      this.beyond = 0;
      this.moving = false;
    }
    // In the grey zone between the thresholds the classification holds: no flapping.
    if (this.mode === 'undecided' && !this.moving && nowMs - this.startedAt >= this.decideMs)
      this.mode = 'click';
    return this.mode;
  }

  /** Classify the finished gesture: a pinch released before any decision is a click (a tap). */
  end() {
    if (this.mode === 'undecided' || this.mode === 'idle') this.mode = 'click';
    return this.mode;
  }

  reset() {
    this.mode = 'idle';
    this.handId = null;
    this.moving = false;
    this.beyond = 0;
    this.maxDisp = 0;
  }
}

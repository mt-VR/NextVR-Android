// Two-hand palm menu state machine. One open palm is the support surface; bringing the
// other hand into its near field summons the controls. Pinch selection itself is owned by the
// regular hand-input pipeline in windows.js (this module never synthesizes a pinch).
const DEFAULTS = Object.freeze({
  openDelayMs: 140,
  closeGraceMs: 260,
  cooldownMs: 420,
  rearmDelayMs: 180,
  nearPalmWidths: 1.15,
  minRadiusPx: 48,
  maxRadiusPx: 156,
  minConfidence: .35,
});

const finite = value => Number.isFinite(Number(value));
function point(value) {
  if (!Array.isArray(value) || value.length < 2 || !finite(value[0]) || !finite(value[1])) return null;
  return [Number(value[0]), Number(value[1])];
}
function landmark(hand, index) {
  const values = hand?.points;
  if (!Array.isArray(values) || values.length < index * 3 + 2) return null;
  return point([values[index * 3], values[index * 3 + 1]]);
}
function eligiblePalm(hand, allowPrediction, minConfidence) {
  if (!hand || !hand.menuEligible || hand.fist || hand.pinching) return false;
  if (!allowPrediction && hand.predicted) return false;
  const confidence = finite(hand.confidence) ? Number(hand.confidence) : 1;
  return confidence >= minConfidence && !!point(hand.palm);
}
function screenPoint(value, scaleX, scaleY) {
  const p = point(value);
  if (!p) return null;
  return [.5 + (p[0] - .5) * scaleX, .5 + (p[1] - .5) * scaleY];
}
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

/**
 * Proximity-triggered dock menu. `update` returns normalized screen placement plus transitions;
 * a candidate must remain near the palm briefly to prevent an accidental open as hands cross.
 */
export class PalmDockGesture {
  constructor(options = {}) {
    this.options = { ...DEFAULTS, ...options };
    this.state = 'idle';
    this.supportId = null;
    this.controlId = null;
    this.anchor = null;
    this.candidateSince = 0;
    this.lostSince = null;
    this.cooldownUntil = 0;
    this.separatedSince = null;
  }

  reset() {
    this.state = 'idle';
    this.supportId = this.controlId = null;
    this.anchor = null;
    this.candidateSince = this.cooldownUntil = 0;
    this.lostSince = this.separatedSince = null;
  }

  /** Close after a menu action and require the hands to separate before it can open again. */
  dismiss(now = 0) {
    this.state = 'cooldown';
    this.supportId = this.controlId = null;
    this.anchor = null;
    this.candidateSince = 0;
    this.lostSince = this.separatedSince = null;
    this.cooldownUntil = Number(now) + this.options.cooldownMs;
  }

  update(hands = [], now = 0, viewport = {}) {
    const time = finite(now) ? Number(now) : 0;
    const width = Math.max(1, Number(viewport.width) || 1200);
    const height = Math.max(1, Number(viewport.height) || 800);
    const scaleX = Math.max(.01, Number(viewport.scaleX) || 1);
    const scaleY = Math.max(.01, Number(viewport.scaleY) || 1);
    const frameHands = Array.isArray(hands) ? hands : [];
    const candidates = this.nearPair(frameHands, { width, height, scaleX, scaleY });
    const best = candidates[0] || null;
    const transitions = { opened: false, closed: false };

    if (this.state === 'open') {
      const support = frameHands.find(h => String(h.id) === this.supportId
        && eligiblePalm(h, true, this.options.minConfidence));
      if (support) {
        this.lostSince = null;
        this.anchor = this.projectedPalm(support, scaleX, scaleY);
      } else {
        if (this.lostSince == null) this.lostSince = time;
        if (time - this.lostSince >= this.options.closeGraceMs) {
          this.dismiss(time);
          transitions.closed = true;
        }
      }
      return this.snapshot(transitions);
    }

    if (this.state === 'cooldown') {
      if (!best) {
        if (this.separatedSince == null) this.separatedSince = time;
        if (time >= this.cooldownUntil && time - this.separatedSince >= this.options.rearmDelayMs) {
          this.state = 'idle';
          this.separatedSince = null;
        }
      } else {
        this.separatedSince = null;
      }
      return this.snapshot(transitions);
    }

    if (!best) {
      this.state = 'idle';
      this.supportId = this.controlId = null;
      this.candidateSince = 0;
      this.anchor = null;
      return this.snapshot(transitions);
    }

    const samePair = this.supportId === best.supportId && this.controlId === best.controlId;
    if (this.state !== 'arming' || !samePair) {
      this.state = 'arming';
      this.supportId = best.supportId;
      this.controlId = best.controlId;
      this.candidateSince = time;
    }
    const support = frameHands.find(h => String(h.id) === this.supportId);
    if (support) this.anchor = this.projectedPalm(support, scaleX, scaleY);
    if (time - this.candidateSince >= this.options.openDelayMs) {
      this.state = 'open';
      this.lostSince = null;
      transitions.opened = true;
    }
    return this.snapshot(transitions);
  }

  nearPair(hands, viewport) {
    const anchors = hands.filter(h => eligiblePalm(h, false, this.options.minConfidence));
    const pairs = [];
    for (const support of anchors) {
      const center = this.projectedPalm(support, viewport.scaleX, viewport.scaleY);
      if (!center) continue;
      const palmPixels = Number(support.palmWidth) * viewport.scaleX * viewport.width;
      const radius = clamp((finite(palmPixels) ? palmPixels : 0) * this.options.nearPalmWidths,
        this.options.minRadiusPx, this.options.maxRadiusPx);
      for (const control of hands) {
        if (String(control.id) === String(support.id) || control.predicted) continue;
        const points = [control.palm, control.menuPoint, landmark(control, 8)]
          .map(p => this.projectedPalm({ palm: p }, viewport.scaleX, viewport.scaleY)).filter(Boolean);
        if (!points.length) continue;
        const distance = Math.min(...points.map(p => Math.hypot(
          (p[0] - center[0]) * viewport.width,
          (p[1] - center[1]) * viewport.height,
        )));
        if (distance <= radius) pairs.push({ supportId: String(support.id), controlId: String(control.id), distance, radius });
      }
    }
    return pairs.sort((a, b) => a.distance / a.radius - b.distance / b.radius);
  }

  projectedPalm(hand, scaleX = 1, scaleY = 1) {
    return screenPoint(hand?.palm, scaleX, scaleY);
  }

  snapshot(transitions) {
    return {
      open: this.state === 'open',
      arming: this.state === 'arming',
      anchor: this.anchor ? [...this.anchor] : null,
      supportId: this.supportId,
      controlId: this.controlId,
      ...transitions,
    };
  }
}

export const PALM_MENU_DEFAULTS = DEFAULTS;

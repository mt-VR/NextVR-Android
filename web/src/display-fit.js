// Where a captured/hosted display sits inside a window body, and how a point inside that body maps
// back to the display. This is the JS half of AppInputGeometry.java: the shader is fed the fitted
// rectangle, the touch is fed the same rectangle's normalized point, and both sides are tested.

// Mirrors AppDisplaySpec: the narrow end has to accept a phone in portrait (9:16 = 0.5625, a tall
// phone 9:20 = 0.45), or a portrait app window would be letterboxed inside its own display.
export const MIN_ASPECT = 0.45;
export const MAX_ASPECT = 2.34;

/** The window body's own aspect, with the same fallback the native side uses for an unmeasured box. */
export function boxAspect(boxWidth, boxHeight) {
  return boxWidth > 0 && boxHeight > 0 ? boxWidth / boxHeight : 16 / 9;
}

/**
 * Aspect a display is *sized* to when the window has this shape. Mirrors AppDisplaySpec.aspect: a
 * phone cannot render a display narrower than 3:5, so the size is clamped — but the fit below is
 * computed against the body's real shape, otherwise a window taller than that limit would end up
 * with a picture wider than the window it lives in.
 */
export function specAspect(boxWidth, boxHeight) {
  const aspect = boxAspect(boxWidth, boxHeight);
  if (aspect < MIN_ASPECT) return MIN_ASPECT;
  if (aspect > MAX_ASPECT) return MAX_ASPECT;
  return aspect;
}

/**
 * Fitted rectangle of a display of `displayAspect` inside a `boxWidth`x`boxHeight` window body, in
 * box pixels, plus its normalized crop (u0,v0,uw,vh) for the shader's `uv`.
 *
 * The fit is centred and the box aspect used for the comparison is the clamped one (the same value
 * the native side used to size the display), so the picture and the touch agree by construction.
 */
export function fitDisplay(boxWidth, boxHeight, displayAspect) {
  const bodyAspect = boxAspect(boxWidth, boxHeight);
  const aspect = displayAspect > 0 ? displayAspect : bodyAspect;
  let width, height;
  if (aspect >= bodyAspect) { width = boxWidth; height = boxWidth / aspect; }
  else { height = boxHeight; width = boxHeight * aspect; }
  const x = Math.round((boxWidth - width) / 2);
  const y = Math.round((boxHeight - height) / 2);
  const w = Math.round(width);
  const h = Math.round(height);
  return {
    x, y, w, h,
    // Centred: the distance from the top equals the distance from the bottom, so the v crop and the
    // y offset are the same number — the native side relies on that too.
    u0: x / boxWidth, v0: y / boxHeight, uw: w / boxWidth, vh: h / boxHeight,
  };
}

/**
 * Point of the display under a click at (localX, localY) inside the app surface element, or null
 * when the point falls on a letterbox bar (the user aimed outside the picture — a touch there must
 * not be forwarded, or the app would receive a tap in a corner it does not show).
 */
export function appHostPoint(boxWidth, boxHeight, displayAspect, localX, localY) {
  const fit = fitDisplay(boxWidth, boxHeight, displayAspect);
  if (localX < fit.x || localY < fit.y || localX > fit.x + fit.w || localY > fit.y + fit.h) return null;
  return { u: (localX - fit.x) / fit.w, v: (localY - fit.y) / fit.h };
}

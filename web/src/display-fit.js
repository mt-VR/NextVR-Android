// Where the app's display (its canvas) sits inside a window body, and how a point inside that body
// maps back to the display. This is the JS half of AppInputGeometry.java: the shader is fed the
// fitted rectangle, the touch is fed the same rectangle's normalized point, and both sides are tested.
//
// There is no clamping anywhere: the canvas is the phone's own screen and the window body is that
// screen's shape, so the two aspects agree by construction and the fit fills the body. A window the
// user has resized by hand can be a different shape, and then the picture is letterboxed inside it —
// centred, never stretched, and the bars take no touch.

/** The window body's own aspect, with the same fallback the native side uses for an unmeasured box. */
export function boxAspect(boxWidth, boxHeight) {
  return boxWidth > 0 && boxHeight > 0 ? boxWidth / boxHeight : 16 / 9;
}

/**
 * Fitted rectangle of a display of `displayAspect` inside a `boxWidth`x`boxHeight` window body, in
 * box pixels, plus its normalized crop (u0,v0,uw,vh) for the shader's `uv`.
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

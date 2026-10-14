// The geometry of an Android app window, as pure functions: no DOM, no native bridge, so the numbers
// can be tested directly and used by the shell's layout code.
//
// Two pixel counts live here, and keeping them apart is the whole point:
//
//  * the *canvas* — the display the app is hosted on. It is this phone's own screen, in the shape the
//    app asked for, and it is decided by the native side (AppWindowShape.java); the session reports it
//    in `display.w/h`. This is what the app lays out for, which is why nothing pinned to the bottom of
//    an app's layout gets cut: it is the same dp box the app has on the phone.
//  * the *window element* — the canvas' shape, scaled down to what the shell can composite. Every
//    window is rasterized into one 4096x4096 hardware atlas whose cells are 1360x980 including a
//    160 px bleed (atlas.js:pack), so an element can be at most 1040x660; more than that and pack()
//    refuses the whole batch and the scene stops updating. The picture is sampled from the display
//    texture, not from this element, so scaling it changes how big the window is in front of the user
//    and nothing about what the app looks like.

const WIN_BAR = 62;          // .win-bar
const APP_BAR = 52;          // .app-bar
const WIN_BORDER = 2;        // .win's 1 px border on each side (box-sizing: border-box)
const WIN_CHROME = WIN_BAR + APP_BAR + WIN_BORDER;
/** The largest window element the atlas can pack (atlas.js:pack: a 1360x980 cell, minus its bleed). */
const ATLAS_WINDOW_W = 1040, ATLAS_WINDOW_H = 660;
const ATLAS_SURFACE_W = ATLAS_WINDOW_W - WIN_BORDER, ATLAS_SURFACE_H = ATLAS_WINDOW_H - WIN_CHROME;
/** The canvas used before the native side has answered: PhoneXR's 1080p phone screen. */
const FALLBACK_CANVAS = { landscape: { w: 1920, h: 1080 }, portrait: { w: 1080, h: 1920 } };

/** The canvas of a shape when nothing is known about the phone screen yet. */
export function canvasBox(shape) { return FALLBACK_CANVAS[shape] || FALLBACK_CANVAS.landscape; }

/**
 * The canvas an app is hosted on, in the shape the session is in now.
 *
 * <p>The session reports the display it was created with. When the shape matches that display's own
 * orientation, that is the canvas, exactly as it came from the native side. When it does not — the
 * window was just rotated and the native side has not restarted the app yet — the canvas of the new
 * shape is the same screen turned, which is a step the shell can take on its own: it is what makes the
 * rotation land in the same frame as the tap instead of after the round trip.
 *
 * <p>The fallback exists only for the first state, before any display exists.
 */
export function surfaceBox(session) {
  const display = session?.display;
  if (display && display.w > 0 && display.h > 0) {
    const landscape = display.w >= display.h;
    const wanted = session?.shape !== 'portrait';
    if (landscape === wanted) return { w: display.w, h: display.h };
    return { w: display.h, h: display.w };   // the same screen, turned
  }
  return canvasBox(session?.shape);
}

/**
 * The window's app surface in element pixels: the canvas' shape, at the largest size the atlas packs.
 * A canvas the element can already hold is never enlarged.
 */
export function windowSurface(canvas) {
  const scale = Math.min(ATLAS_SURFACE_W / canvas.w, ATLAS_SURFACE_H / canvas.h, 1);
  return { w: Math.max(2, Math.round(canvas.w * scale)), h: Math.max(2, Math.round(canvas.h * scale)) };
}

/** Window size for a session: its canvas' shape plus the two bars and the border. */
export function windowBox(session) {
  const surface = windowSurface(surfaceBox(session));
  // The border is part of the window's CSS box (box-sizing: border-box), so it is added here: the
  // measured app surface then equals the window pixels of that shape.
  return { w: surface.w + WIN_BORDER, h: surface.h + WIN_CHROME };
}

export { WIN_BAR, APP_BAR, WIN_BORDER, WIN_CHROME, ATLAS_WINDOW_W, ATLAS_WINDOW_H, FALLBACK_CANVAS };

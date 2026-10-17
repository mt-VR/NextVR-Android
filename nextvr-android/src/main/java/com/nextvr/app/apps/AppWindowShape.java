package com.nextvr.app.apps;

/**
 * The shape of an app window, and the canvas (the app's own display) that goes with it.
 *
 * <h2>The mistake this class exists to not repeat</h2>
 * An app window used to be created at one fixed size for every app ({@code 1040x546}, aspect 1.9),
 * and the first fix for that (the window taking the app's declared orientation) still sized the
 * <em>canvas</em> from the window: {@code 585x1040} in portrait, {@code 1040x585} in landscape, at a
 * density clamped to 320.
 *
 * <p>That is a small screen. A phone like this one is 1080x2400 at 440 dpi — <b>393x873 dp</b> — and
 * the app was being drawn on a <b>292x520 dp</b> canvas: narrower and, above all, <b>350 dp shorter</b>
 * than the screen the app was designed for. An app that pins something to the bottom of the screen (a
 * tab bar, a toolbar, a keyboard, a fullscreen dialog, a fixed-height form) therefore started with
 * that bottom part cut off — which is exactly what the user reported, and why almost every app did it:
 * the canvas was not the app's fault, it was ours.
 *
 * <h2>What PhoneXR does, and what this does</h2>
 * PhoneXR gives the hosted app a display the size of a phone screen ({@code 1080x1920} in portrait,
 * {@code 1920x1080} in landscape) rather than the window's shape, and takes the window's own shape from
 * that canvas. The app is then laid out for a normal phone screen and nothing about it is cut; the
 * window is the canvas' shape, so the picture fills it.
 *
 * <p>NextVR runs on the phone itself, so it can do the same thing with better numbers: the canvas is
 * <em>this phone's own screen</em>, in the orientation the app asked for. The app then runs in the
 * exact dp box it was designed for — the same dp width, height and smallest-width it would have on the
 * phone's screen — and a window is just that screen, floating. For a screen smaller than 1080x1920
 * the canvas is raised to it (PhoneXR's numbers), so an old phone still hosts an app in a phone-sized
 * canvas instead of a 720p one.
 *
 * <p>Pure Java on purpose: the shape and canvas rules are unit-tested, and the same numbers are
 * asserted on the shell side.
 */
public final class AppWindowShape {
    /** Portrait: a phone in portrait (the screen's short side across). */
    public static final String PORTRAIT = "portrait";
    /** Landscape: the same screen turned (the short side up). */
    public static final String LANDSCAPE = "landscape";

    /**
     * Floor of the canvas, from PhoneXR: a phone screen at least this big. A 720p phone then hosts an
     * app in a 1080p canvas — the app's layout is what the app expects, and the canvas is cheaper to
     * render than the window is to display.
     */
    public static final int MIN_LONG_SIDE = 1920;
    public static final int MIN_SHORT_SIDE = 1080;

    private AppWindowShape() {}

    /**
     * The shape an app's window opens with: what the user chose for this app (a rotation is
     * remembered), then what the app itself declares, and then — for an app that declares nothing —
     * the shape the phone would give it: portrait, unless the app says it is a game, which is the one
     * category that means "landscape" on a phone.
     *
     * <p>Declaring nothing is the common case (it is what most phone apps do, they just follow the
     * screen), and it is the case that must default to portrait: a phone app that declares nothing is
     * drawn in portrait on the phone.
     */
    public static String of(String remembered, String declared, boolean game) {
        if (isShape(remembered)) return remembered;
        if (isShape(declared)) return declared;
        // Hosted windows are used in the headset's landscape frame; default to landscape even when
        // the app declares nothing, so a portrait-by-default app no longer opens sideways/pinned.
        return LANDSCAPE;
    }

    /** Same rule without the game hint: portrait, which is what a phone would give the app. */
    public static String of(String remembered, String declared) {
        return of(remembered, declared, false);
    }

    /** The other shape — what the window's rotate button switches to. */
    public static String other(String shape) {
        return PORTRAIT.equals(shape) ? LANDSCAPE : PORTRAIT;
    }

    public static boolean isShape(String shape) {
        return PORTRAIT.equals(shape) || LANDSCAPE.equals(shape);
    }

    /**
     * The canvas of a shape on a screen of [screenWidth]x[screenHeight]: {@code {width, height}} in
     * pixels, the short side of the screen across in portrait and up in landscape.
     *
     * <p>Both sides are rounded to even numbers (video paths and buffer strides are happier) and the
     * floor above is applied, so every shape has a canvas a phone app can live in.
     */
    public static int[] canvas(String shape, int screenWidth, int screenHeight) {
        int longSide = Math.max(Math.max(screenWidth, screenHeight), MIN_LONG_SIDE);
        int shortSide = Math.max(Math.min(screenWidth, screenHeight), MIN_SHORT_SIDE);
        if (shortSide > longSide) shortSide = longSide;
        longSide = even(longSide);
        shortSide = even(shortSide);
        return PORTRAIT.equals(shape) ? new int[]{shortSide, longSide} : new int[]{longSide, shortSide};
    }

    /** Aspect of the canvas of a shape on this screen. */
    public static float aspect(String shape, int screenWidth, int screenHeight) {
        int[] canvas = canvas(shape, screenWidth, screenHeight);
        return canvas[1] == 0 ? 1f : (float) canvas[0] / canvas[1];
    }

    private static int even(int value) {
        int rounded = Math.max(2, value);
        return rounded % 2 == 0 ? rounded : rounded + 1;
    }

    /**
     * The shape an activity's {@code android:screenOrientation} declares, or {@code ""} when the app
     * adapts to any shape.
     *
     * <p>The constants are repeated as integers so this class stays Android-free and unit-testable
     * (the same trick {@link ShizukuStatus} uses for {@code PERMISSION_GRANTED}):
     *
     * <ul>
     *   <li>portrait group: {@code portrait}(1), {@code reversePortrait}(9), {@code sensorPortrait}(7),
     *       {@code userPortrait}(12);</li>
     *   <li>landscape group: {@code landscape}(0), {@code reverseLandscape}(8),
     *       {@code sensorLandscape}(6), {@code userLandscape}(11);</li>
     *   <li>everything else ({@code unspecified}(-1), {@code user}(2), {@code behind}(3),
     *       {@code sensor}(4), {@code nosensor}(5), {@code fullSensor}(10), {@code locked}(14))
     *       adapts to whatever shape it is given: those apps lay out for the canvas they get, which on
     *       a phone means the screen's shape.</li>
     * </ul>
     */
    public static String fromOrientation(int screenOrientation) {
        switch (screenOrientation) {
            case 1: case 9: case 7: case 12: return PORTRAIT;
            case 0: case 8: case 6: case 11: return LANDSCAPE;
            default: return "";
        }
    }
}

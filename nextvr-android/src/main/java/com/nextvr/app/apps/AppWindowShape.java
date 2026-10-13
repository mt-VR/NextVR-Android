package com.nextvr.app.apps;

/**
 * The shape an app window takes, and the display behind it.
 *
 * <h2>Why the window has a shape per app</h2>
 * An app window used to be created at one fixed size for every app ({@code 1040x546} of app surface,
 * aspect 1.9). Android then did what it is designed to do with a canvas that shape: an app that
 * declares it is portrait-only was letterboxed by the platform inside it (the app in the middle of a
 * wide window, using a third of the width), and an app that renders a fixed 16:9 frame (an emulator,
 * a game) drew it inside a canvas that is neither 16:9 nor its own shape. Nothing was stretched —
 * every picture was fitted — but the *window* was not the app's shape, so the app had space it could
 * not use and the user saw a window that did not look like the app.
 *
 * <p>The fix is to let the window take the shape the app itself asks for:
 *
 * <ul>
 *   <li>an app that declares {@code portrait} gets a portrait window ({@value #PORTRAIT_W}x{@value
 *       #PORTRAIT_H}, 9:16 — the shape of a phone in portrait);</li>
 *   <li>an app that declares {@code landscape} gets a landscape window ({@value #LANDSCAPE_W}x{@value
 *       #LANDSCAPE_H}, 16:9 — what almost every landscape app and game is drawn for);</li>
 *   <li>anything else ({@code unspecified}, {@code sensor}, {@code fullSensor}) adapts to any shape,
 *       so it starts landscape and the user's rotation of the window is remembered per app.</li>
 * </ul>
 *
 * <p>Both shapes are the same two numbers swapped, so a rotation is a swap and nothing else: the
 * window, the display and the touch all change together.
 *
 * <p>The values here are the <em>app surface</em> (the pixels the app draws into). The shell adds its
 * own window chrome on top of them; the native side never sees that arithmetic.
 *
 * <p>Pure Java on purpose: the shape rules are unit-tested, and the same numbers are asserted on the
 * shell side.
 */
public final class AppWindowShape {
    /** Portrait: a phone in portrait (9:16). */
    public static final String PORTRAIT = "portrait";
    /** Landscape: what a game or an emulator draws for (16:9). */
    public static final String LANDSCAPE = "landscape";

    public static final int LANDSCAPE_W = 1040, LANDSCAPE_H = 585;
    public static final int PORTRAIT_W = 585, PORTRAIT_H = 1040;

    private AppWindowShape() {}

    /**
     * The shape an app's window opens with: what the user chose for this app (a rotation is
     * remembered) over what the app itself declares, and landscape as the neutral default.
     */
    public static String of(String remembered, String declared) {
        if (isShape(remembered)) return remembered;
        if (isShape(declared)) return declared;
        return LANDSCAPE;
    }

    /** The other shape — what the window's rotate button switches to. */
    public static String other(String shape) {
        return PORTRAIT.equals(shape) ? LANDSCAPE : PORTRAIT;
    }

    public static boolean isShape(String shape) {
        return PORTRAIT.equals(shape) || LANDSCAPE.equals(shape);
    }

    /** App-surface pixels for a shape: {@code {width, height}}; landscape when unknown. */
    public static int[] box(String shape) {
        return PORTRAIT.equals(shape)
                ? new int[]{PORTRAIT_W, PORTRAIT_H}
                : new int[]{LANDSCAPE_W, LANDSCAPE_H};
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
     *       adapts to whatever shape it is given: those apps lay out for the canvas they get, and
     *       guessing an orientation for them would be worse than letting the user rotate.</li>
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

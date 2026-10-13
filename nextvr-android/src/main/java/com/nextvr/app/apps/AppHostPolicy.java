package com.nextvr.app.apps;

/**
 * Which mechanism an app window uses, decided in exactly one place and testable without a device.
 *
 * <h2>The bug this class exists to make impossible</h2>
 * The decision used to be "is the user service bound right now?", asked on the UI thread at the
 * moment the tile was tapped. Binding a Shizuku user service is asynchronous: the shell process is
 * forked, the APK is loaded and only then does the binder arrive — a window of hundreds of
 * milliseconds in which the honest answer is "not yet" while the wrong one is "not available". A tap
 * landing in that window was routed to the screen-capture path, which (necessarily) brings the app to
 * the phone's own screen and then asks Android for a capture consent. That is the reported behaviour:
 * the app opens on the phone and a screen-sharing error appears, on a device where Shizuku is
 * perfectly healthy.
 *
 * <h2>The rule</h2>
 * Shizuku's <em>permission state</em> decides the route, never the transient state of one bind call.
 * Permission granted ({@link ShizukuStatus.State#READY}) or granted-but-the-binding-died
 * ({@link ShizukuStatus.State#SERVICE_DOWN}) both mean "this app can host" — those cases wait for the
 * service instead of falling back. Only a Shizuku that cannot host at all (not installed, not
 * running, too old, permission refused) falls back to the capture path, and that path always asks for
 * consent because Android requires it — it is not a substitute for the privileged route, it is the
 * honest second best, and it is labelled as such in the window.
 */
public final class AppHostPolicy {
    /** What a tap on an installed app does. */
    public enum Route {
        /** The shell user service hosts the app on a display of its own: PhoneXR's route, no consent. */
        HOSTED("hosted"),
        /** Shizuku is alive and NextVR may be authorized in the next seconds: ask, then host. */
        NEEDS_PERMISSION("permission"),
        /** No privileged service is reachable: capture the phone's screen with the user's consent. */
        CAPTURE("capture");

        public final String id;

        Route(String id) { this.id = id; }
    }

    private AppHostPolicy() { }

    /** The route for a resolved Shizuku state. Never returns null. */
    public static Route route(ShizukuStatus.State state) {
        if (state == null) return Route.CAPTURE;
        switch (state) {
            case READY:
            case SERVICE_DOWN:
                // SERVICE_DOWN is "the permission is there and the service is not answering (yet)".
                // Waiting for it is the correct behaviour: it is a bind in flight or a Shizuku that
                // was restarted, and both end with a working service. Falling back here would send
                // the user to the phone screen for no reason.
                return Route.HOSTED;
            case NEEDS_PERMISSION:
                return Route.NEEDS_PERMISSION;
            default:
                // NOT_INSTALLED, NOT_RUNNING, OLD_VERSION, DENIED, UNKNOWN: Shizuku cannot host now.
                return Route.CAPTURE;
        }
    }

    /** Whether the hosted path is the one to take (hosting now, or about to). */
    public static boolean hosted(ShizukuStatus.State state) {
        Route route = route(state);
        return route == Route.HOSTED || route == Route.NEEDS_PERMISSION;
    }

    /** Whether the route boots the app on the host process side (a bind has to succeed first). */
    public static boolean waitsForService(ShizukuStatus.State state) {
        return hosted(state);
    }
}

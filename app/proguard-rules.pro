# Keep @JavascriptInterface methods exposed to the MetaMR / PotatoVR WebView bridge.
-keepclassmembers class com.metamr.potatovr.** {
    @android.webkit.JavascriptInterface <methods>;
}
-keepattributes JavascriptInterface

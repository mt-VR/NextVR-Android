# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

# ---- NextVR Android app windows -------------------------------------------------------------
# Shizuku instantiates the user service by class name in a separate process, so the class, its
# constructor and the AIDL stub must survive minification. The transaction ids of IDisplayService
# are fixed by the Shizuku server (destroy = 16777114) and the interface must keep them.
-keep class com.nextvr.app.apps.NextVrDisplayService { *; }
-keep class com.nextvr.app.apps.IDisplayService { *; }
-keep class com.nextvr.app.apps.IDisplayService$Stub { *; }
-keep class com.nextvr.app.apps.IDisplayService$Stub$Proxy { *; }
# The accessibility service is started by the system through the manifest.
-keep class com.nextvr.app.apps.NextVrAccessibilityService { *; }
# The JavaScript bridge is called by name from the shell WebView.
-keepclassmembers class com.nextvr.app.NextVrActivity$Bridge {
    @android.webkit.JavascriptInterface <methods>;
}

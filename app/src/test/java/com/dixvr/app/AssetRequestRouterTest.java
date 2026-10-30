package com.dixvr.app;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import org.junit.Test;

public class AssetRequestRouterTest {

    @Test
    public void resolvesSecureAppAssetsHostPaths() {
        assertEquals("index.html", AssetRequestRouter.resolveAssetPath("appassets.androidplatform.net", "/assets/index.html"));
        assertEquals("index.html", AssetRequestRouter.resolveAssetPath("appassets.androidplatform.net", "/"));
        assertEquals(
            "vendor/mediapipe/hands/hands_solution_simd_wasm_bin.wasm",
            AssetRequestRouter.resolveAssetPath(
                "appassets.androidplatform.net",
                "/assets/vendor/mediapipe/hands/hands_solution_simd_wasm_bin.wasm"
            )
        );
    }

    @Test
    public void interceptsThreeAndMediaPipeCdnUrlsForOfflinePlay() {
        assertEquals(
            "vendor/three/three.min.js",
            AssetRequestRouter.resolveAssetPath("cdnjs.cloudflare.com", "/ajax/libs/three.js/r128/three.min.js")
        );
        assertEquals(
            "vendor/three/CSS3DRenderer.js",
            AssetRequestRouter.resolveAssetPath("cdn.jsdelivr.net", "/npm/three@0.128.0/examples/js/renderers/CSS3DRenderer.js")
        );
        assertEquals(
            "vendor/mediapipe/hands/hand_landmark_lite.tflite",
            AssetRequestRouter.resolveAssetPath("cdn.jsdelivr.net", "/npm/@mediapipe/hands/hand_landmark_lite.tflite?v=1")
        );
        assertEquals(
            "vendor/mediapipe/camera_utils/camera_utils.js",
            AssetRequestRouter.resolveAssetPath("cdn.jsdelivr.net", "/npm/@mediapipe/camera_utils/camera_utils.js")
        );
    }

    @Test
    public void rejectsPathTraversalAndExternalSites() {
        assertNull(AssetRequestRouter.resolveAssetPath("appassets.androidplatform.net", "/assets/../../secret.txt"));
        assertNull(AssetRequestRouter.resolveAssetPath("www.google.com", "/search?q=vr"));
        assertNull(AssetRequestRouter.resolveAssetPath("m.youtube.com", "/"));
    }

    @Test
    public void returnsAccurateMimeTypesIncludingWasm() {
        assertEquals("text/html", AssetRequestRouter.mimeTypeFor("index.html"));
        assertEquals("application/javascript", AssetRequestRouter.mimeTypeFor("vendor/three/three.min.js"));
        assertEquals("application/wasm", AssetRequestRouter.mimeTypeFor("vendor/mediapipe/hands/hands_solution_simd_wasm_bin.wasm"));
        assertEquals("application/octet-stream", AssetRequestRouter.mimeTypeFor("vendor/mediapipe/hands/hand_landmark_lite.tflite"));
        assertEquals("UTF-8", AssetRequestRouter.encodingForMime("text/html"));
        assertNull(AssetRequestRouter.encodingForMime("application/wasm"));
    }
}

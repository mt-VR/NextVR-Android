package com.nextvr.app.xr

import com.nextvr.app.hands.HandGestures
import com.nextvr.app.hands.PhoneXrHands
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * The translation from this app's tracker frame to the PhoneXR runtime's controller packet.
 *
 * <p>The input mimics a real landmark run — a spread hand in image coordinates, in the fixture style
 * of [com.nextvr.app.hands.PhoneXrHandsTest] — and what is asserted is the contract the runtime side
 * depends on: which gesture turns into which button, the wire shape, the pinned decimal format. A
 * mismatch there is silent on the other end: the game simply stops noticing the hands.
 */
class XrHandBridgeTest {

    /** A hand laid across the camera image, pinch and fist state chosen by the test. */
    private fun hand(pinching: Boolean, fist: Boolean = false, predicted: Boolean = false,
                     left: Boolean = false) = PhoneXrHands.Hand(
        left = left, points = flatHand(), head = null,
        shape = Shape_(pinch = pinching, fist = fist, pinchX = .6f, pinchY = .4f, palmWidth = .16f),
        baseX = .55f, baseY = .42f, aimX = .58f, aimY = .4f,
        pinching = pinching, grabX = .55f, grabY = .42f, predicted = predicted)
    /** A [HandGestures.Shape] with only the fields the bridge reads filled in. */
    private fun Shape_(pinch: Boolean, fist: Boolean, pinchX: Float, pinchY: Float,
                       palmWidth: Float) = HandGestures.Shape(
        pinch = pinch, pinchStrength = if (pinch) 1f else 0f, fist = fist, palmToFace = false,
        pinchX = pinchX, pinchY = pinchY, palmWidth = palmWidth)

    /** 21 landmarks of a spread hand, image coordinates; a palm .2 image-widths wide. */
    private fun flatHand(): FloatArray {
        val points = FloatArray(63)
        fun put(i: Int, x: Float, y: Float) { points[i * 3] = x; points[i * 3 + 1] = y; points[i * 3 + 2] = 0f }
        // Wrist and the knuckle row; landmarks 5 and 17 are what depth() reads.
        put(0, .5f, .8f); put(1, .44f, .72f)
        put(5, .4f, .62f); put(9, .5f, .6f); put(13, .55f, .61f); put(17, .6f, .62f)
        // Every finger straight: the knuckle sits between tip and metacarpal on one line, so each
        // joint cosine reads "straight" (curl 0) and hands-only mode shows flat fingers.
        for ((mcp, x) in listOf(5 to .4f, 9 to .5f, 13 to .55f, 17 to .6f)) {
            put(mcp + 1, x, .52f); put(mcp + 2, x, .44f); put(mcp + 3, x, .38f)
        }
        put(2, .42f, .68f); put(3, .43f, .62f); put(4, .46f, .58f)
        return points
    }

    private fun frame(vararg hands: PhoneXrHands.Hand) =
        PhoneXrHands.Frame(listOf(*hands), System.nanoTime())

    private val bridge = XrHandBridge()
    private fun startControllers() = bridge.start(XrHandBridge.Mode.CONTROLLERS, true, false)
    private fun startHands() = bridge.start(XrHandBridge.Mode.HANDS, true, false)

    @Test
    fun aPinchIsTheTriggerAndNothingElseIsPressed() {
        startControllers()
        val right = bridge.convert(frame(hand(pinching = true))).first { it.present }
        assertEquals("pinch means trigger in the runtime's language", true, right.hand.fist)
        assertEquals("no squeeze without a fist", 0, right.hand.buttons)
        assertTrue(right.hand.pinch)
    }

    @Test
    fun aClosedFistIsTheGripAndDoesNotPressTheTrigger() {
        val left = bridge.convert(frame(hand(pinching = false, fist = true)))[0]
        assertFalse(left.hand.fist)
        assertEquals(XrHandProtocol.BUTTON_SQUEEZE, left.hand.buttons)
        assertFalse(left.hand.pinch)
    }

    @Test
    fun aPredictedHandNeverStartsAPress() {
        val left = bridge.convert(frame(hand(pinching = true, predicted = true)))[0]
        assertTrue("the pose is published, that is what prediction is for", left.present)
        assertFalse(left.hand.fist)
        assertFalse("a hand-native game clicks on this bit: a ghost hand must not click",
            left.hand.pinch)
        assertEquals(0, left.hand.buttons)
    }

    @Test
    fun handsOnlyModeMovesFingersAndPressesNothing() {
        startHands()
        val left = bridge.convert(frame(hand(pinching = true)))[0]
        assertFalse(left.hand.fist)
        assertEquals(0, left.hand.buttons)
        assertTrue("the pinch itself stays: hand-native games read it, buttons do not",
            left.hand.pinch)
    }

    @Test
    fun overOurOwnWindowsAPinchStopsBeingButtonsAndKeepsItsPose() {
        startControllers()
        val before = bridge.convert(frame(hand(pinching = true)))[0].hand
        assertTrue(before.fist)
        bridge.uiBlocked(true)
        val during = bridge.convert(frame(hand(pinching = true)))[0].hand
        assertFalse("our menu is under the hand: the trigger does not fire into it", during.fist)
        assertFalse("a hand-native game's click comes from this bit too", during.pinch)
        assertEquals(0, during.buttons)
        assertTrue("the hand itself keeps moving the aim exactly as before", during.present)
        assertEquals(before.x.toDouble(), during.x.toDouble(), 1e-4)
        assertEquals("and the rotation flows", before.qw.toDouble(), during.qw.toDouble(), 1e-4)
        bridge.uiBlocked(false)
        assertTrue(bridge.convert(frame(hand(pinching = true)))[0].hand.fist)
    }

    @Test
    fun anAbsentHandIsPublishedAsARestingSideNotOmitted() {
        val sides = bridge.convert(frame(hand(pinching = false))) // one hand only
        assertEquals(2, sides.size)
        val absent = sides.first { !it.present }
        assertEquals(!hand(true).left, absent.left)
        assertFalse(absent.hand.fist)
        assertFalse(absent.hand.pinch)
        assertTrue(absent.hand.qw != 0f)
    }

    @Test
    fun depthFollowsThePalmWidthTheCameraSees() {
        val near = bridge.convert(frame(hand(pinching = false)))[0].hand
        assertTrue("a palm .16 image widths wide is at the near end of the reach", near.z > .8f)
        val farHand = PhoneXrHands.Hand(false, flatHand(), null,
            Shape_(false, false, .5f, .5f, .02f), .5f, .5f, .5f, .5f, false, .5f, .5f)
        assertTrue("a tiny palm hangs far away", bridge.convert(frame(farHand))[0].hand.z < .2f)
    }

    @Test
    fun theTwoPacketsExistTheRuntimePH5AndTheSDKPH6WithTheCurls() {
        val a = XrHandProtocol.Hand(present = true, fist = true, index = false, thumb = false,
            x = .5f, y = .5f, z = 0f, qx = 0f, qy = 0f, qz = 0f, qw = 1f,
            buttons = XrHandProtocol.BUTTON_SQUEEZE, thumbCurl = .1f, indexCurl = .2f,
            middleCurl = .3f, ringCurl = .4f, pinkyCurl = .5f, pinch = true)
        val rest = XrHandProtocol.Hand(present = false, fist = false, index = false, thumb = false,
            x = .33f, y = .2f, z = 0f, qx = 0f, qy = 0f, qz = 0f, qw = 1f)
        val runtime = XrHandProtocol.runtime(a, rest, 1)
        assertTrue("the runtime's own tag", runtime.startsWith("PH5 "))
        assertFalse("sscanf(\"%f\") follows dot decimals in the C locale", runtime.contains(","))
        // PH6 is the same packet with each hand's block extended by its five curls right after that
        // hand's sticks, so a client that stops reading at PH5's field layout still gets every field.
        val sdk = XrHandProtocol.sdk(a, rest, 1)
        assertTrue(sdk.startsWith("PH6 "))
        val leftBlockEnd = runtime.indexOf(" 0 0 0 0") // where the second hand's presence bits begin
        /** Both packets past their tag: the payload is what can be equal here. */
        val runtimePayload = runtime.substring(4)
        val sdkPayload = sdk.substring(4)
        val firstHand = runtimePayload.substring(0, leftBlockEnd - 4)
        assertTrue("the first hand's block, down to its sticks, is the same in both packets",
            sdkPayload.startsWith(firstHand))
        assertTrue("and PH6 carries that hand's curls right after its sticks",
            sdkPayload.startsWith(firstHand + " 0.100 0.200 0.300 0.400 0.500 "))
        assertTrue("flags, then the pinch and palmToFace bits of each side, close the packet",
            runtime.endsWith(" 1 1 0 0 0"))
        assertTrue("the second hand's curls close its own block before the pinch bits",
            sdk.endsWith(" 0.000 0.000 0.000 0.000 0.000 1 1 0 0 0"))
    }
}

package com.nextvr.cardboard.hands
import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import com.google.mediapipe.tasks.components.containers.Landmark
import com.google.mediapipe.tasks.components.containers.Category
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult
import org.junit.Assert.*
import org.junit.Test

class PhoneXrHandsTest {
    private fun points(gap:Float,fist:Boolean=false):List<NormalizedLandmark> {
        val p=MutableList(21){NormalizedLandmark.create(.5f,.4f,0f)}
        fun set(i:Int,x:Float,y:Float){p[i]=NormalizedLandmark.create(x,y,0f)}
        set(0,.5f,.85f);set(2,.35f,.62f);set(5,.4f,.6f);set(17,.7f,.6f);set(9,.5f,.58f);set(13,.6f,.6f)
        set(6,.4f,.5f);set(10,.5f,.45f);set(14,.6f,.5f);set(18,.7f,.52f)
        set(12,.5f,.22f);set(16,.6f,.25f);set(20,.7f,.3f)
        val y=if(fist).75f else .35f
        set(4,.5f-gap*.15f,y);set(8,.5f+gap*.15f,y)
        if(fist){set(12,.5f,.75f);set(16,.55f,.75f);set(20,.6f,.75f)}
        return p
    }
    private fun result(p:List<NormalizedLandmark>?,stamp:Long,world:List<Landmark>?=null)=object:HandLandmarkerResult(){
        override fun timestampMs()=stamp
        override fun landmarks()=if(p==null) emptyList() else listOf(p)
        override fun worldLandmarks()=if(p==null||world==null) emptyList() else listOf(world)
        override fun handednesses()=handedness()
        override fun handedness()=if(p==null) emptyList() else listOf(listOf(Category.create(1f,0,"Right","Right")))
    }
    private fun worldPoints(indexGapX:Float,indexGapZ:Float):List<Landmark> {
        val points=MutableList(21){Landmark.create(0f,0f,0f)}
        fun set(i:Int,x:Float,y:Float=0f,z:Float=0f){points[i]=Landmark.create(x,y,z)}
        set(5,-.5f);set(17,.5f) // palm width = 1 metre in this normalized fixture
        set(4,0f);set(8,indexGapX,0f,indexGapZ)
        return points
    }
    /** A two-hand result: one landmark list per hand, one handedness label per hand. */
    private fun twoResults(hands:List<List<NormalizedLandmark>>,sides:List<String>,stamp:Long):HandLandmarkerResult {
        // handednesses() is deprecated and handedness() is the current member of the real abstract
        // class; the JVM harness stub used to make handedness() optional, which hid the override the
        // Android build demands. Both return the same list here.
        val labels=sides.map{listOf(Category.create(1f,0,it,it))}
        return object:HandLandmarkerResult(){
            override fun timestampMs()=stamp
            override fun landmarks()=hands
            override fun worldLandmarks()=emptyList<List<Landmark>>()
            override fun handednesses()=labels
            override fun handedness()=labels
        }
    }
    @Test fun twoHandsLabelledTheSameSideGetDistinctIdsAndTheirOwnGestures() {
        // MediaPipe labels both hands the same side when they cross or are seen edge-on. The two
        // hands must never share one published `id` - the web layer owns presses, drags and the
        // reach/consumed sets per id - nor one filter/pinch state: one hand's samples then pulled
        // the other's One Euro filters and updated its latch, so an open hand could release a
        // pinch that its neighbour was really holding.
        val engine=PhoneXrHands()
        val frame=engine.process(twoResults(listOf(points(.2f),points(.9f)),listOf("Right","Right"),1000),1f,1f)
        assertEquals(2,frame.hands.size)
        assertEquals(2,frame.hands.map{it.left}.toSet().size)
        assertEquals(2,frame.hands.map{it.pinching}.toSet().size)
        assertTrue(frame.hands.any{it.pinching})
        // The order the detector reports the two hands in must not change any of that.
        val reversed=PhoneXrHands().process(twoResults(listOf(points(.9f),points(.2f)),listOf("Right","Right"),1000),1f,1f)
        assertEquals(2,reversed.hands.map{it.left}.toSet().size)
        assertEquals(2,reversed.hands.map{it.pinching}.toSet().size)
    }
    @Test fun theNeighbourHandCannotReleaseAHeldPinch() {
        val engine=PhoneXrHands()
        repeat(4) { i ->
            val frame=engine.process(twoResults(listOf(points(.2f),points(.9f)),listOf("Right","Right"),1000+i*16L),1f,1f)
            // One hand stays pinched across every frame; the open neighbour never releases it.
            assertEquals(1,frame.hands.count{it.pinching})
        }
        repeat(4) { i ->
            val frame=engine.process(twoResults(listOf(points(.9f),points(.2f)),listOf("Right","Right"),2000+i*16L),1f,1f)
            assertEquals(1,frame.hands.count{it.pinching})
        }
    }
    @Test fun aCollapsedDetectionIsNeverAPinch() {
        // A model glitch can return every landmark on the same point. The pinch gap is a RATIO to
        // the palm, so 0/0.02 = 0 used to reach the latch as a fully closed pinch: a click with no
        // hand behind it. A sub-pixel palm is not a measurement, so the hand is reported open.
        val collapsed=MutableList(21){NormalizedLandmark.create(.5f,.5f,0f)}
        val shape=HandGestures.shape(collapsed,false)
        assertFalse(shape.pinch)
        assertFalse(shape.fist)
        assertEquals(1f,shape.pinchGap,0f)
        assertFalse(HandGestures.PinchLatch().update(shape))
        assertFalse(PhoneXrHands().process(result(collapsed,1000),1f,1f).hands.single().pinching)
        // A hand measured at half a pixel across (0.5 % of the image) reads the same.
        val speck=collapsed.map{NormalizedLandmark.create(.5f+(it.x()-.5f)*.005f,.5f,.0f)}
        assertEquals(1f,HandGestures.shape(speck,false).pinchGap,0f)
        // And a real hand at the detection limit still measures its own gap.
        assertTrue(HandGestures.shape(points(.2f).map{NormalizedLandmark.create(.5f+(it.x()-.5f)*.1f,.4f+(it.y()-.4f)*.1f,0f)},false).pinch)
    }
    @Test fun pinchThresholdsMatchPhoneXrAndRemainHysteretic() {
        val latch=HandGestures.PinchLatch()
        assertFalse(latch.update(HandGestures.shape(points(.31f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.29f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.47f),false)))
        assertFalse(latch.update(HandGestures.shape(points(.49f),false)))
    }
    @Test fun metricThreeDimensionalPinchWorksWhenCameraProjectionLooksOpen() {
        val engine=PhoneXrHands()
        // The image landmarks show a 0.4-palm-width gap (too wide for the 2D close threshold),
        // but depth separation makes the true 3D gap sqrt(.28^2 + .21^2) = .35; the normalized
        // metric gap is .28, so the rotated-hand pinch must register.
        val pressed=engine.process(result(points(.4f),1000,worldPoints(.28f,.21f)),1f,1f).hands.single()
        assertEquals(.28f,pressed.shape.pinchGap,1e-5f)
        assertTrue(pressed.pinching)

        val released=engine.process(result(points(.4f),1040,worldPoints(.6f,.45f)),1f,1f).hands.single()
        assertEquals(.6f,released.shape.pinchGap,1e-5f)
        assertFalse(released.pinching)
    }
    @Test fun fistIsNotAClick() {
        val shape=HandGestures.shape(points(.2f,true),false)
        assertTrue(shape.fist);assertFalse(HandGestures.PinchLatch().update(shape))
    }
    @Test fun aSlowlySampledOpenPinchReleasesOnItsFirstObservedOpenFrame() {
        val latch=HandGestures.PinchLatch()
        assertFalse(latch.update(HandGestures.shape(points(.8f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.2f),false)))
        // No elapsed-time or consecutive-frame debounce: the next completed inference is enough.
        assertFalse(latch.update(HandGestures.shape(points(.8f),false)))
        assertFalse(latch.pinching)
    }
    @Test fun nativeRearHandednessAndShoulderRayMatchFork() {
        val hand=PhoneXrHands().process(result(points(.2f),1000),1f,1f).hands.single()
        assertTrue(hand.left) // raw MediaPipe Right is physical Left for an unmirrored rear image
        val p=points(.2f);val expected=p[2].x()*.3f+p[5].x()*.45f+(p[4].x()+p[8].x())/2*.25f
        assertEquals(expected,hand.shape.aimX,1e-5f)
        assertNotEquals(hand.shape.pinchX,hand.shape.aimX)
        val shoulder=if(hand.baseX>0).45f else -.45f
        assertEquals(hand.baseX+(hand.baseX-shoulder)*.25f,hand.aimX,1e-5f)
        assertEquals(hand.baseY+(hand.baseY+1f)*.25f,hand.aimY,1e-5f)
    }
    @Test fun briefMissIsBridgedByAPredictionThatHoldsButNeverStartsAGesture() {
        val engine=PhoneXrHands()
        val pinching=engine.process(result(points(.2f),1000),1f,1f).hands.single()
        assertTrue(pinching.pinching);assertFalse(pinching.predicted)
        // A missed detection no longer blinks the hand away: the motion model bridges it, holding
        // the pinch that really started (continuity) and marking itself as a prediction.
        val bridged=engine.process(result(null,1016),1f,1f).hands.single()
        assertTrue(bridged.predicted)
        assertTrue(bridged.pinching)
        assertTrue(bridged.confidence>0f && bridged.confidence<1f)
        // Predictions never START a gesture: an open hand that blinks out stays open.
        val engine2=PhoneXrHands()
        engine2.process(result(points(.8f),1000),1f,1f)
        assertFalse(engine2.process(result(null,1016),1f,1f).hands.single().pinching)
        // A real detection still releases on its first observed open frame.
        assertFalse(engine.process(result(points(.8f),1032),1f,1f).hands.single().pinching)
    }
    @Test fun predictionContinuesTheLastMotionAndDecaysConfidence() {
        val engine=PhoneXrHands()
        var last=PhoneXrHands.Frame(emptyList(),0L)
        for ((i,stampMs) in listOf(1000L,1040L,1080L).withIndex()) {
            val p=points(.2f).map { NormalizedLandmark.create(it.x()+.04f*i,it.y(),it.z()) }
            last=engine.process(result(p,stampMs),1f,1f,stampMs*1_000_000L)
        }
        val third=last.hands.single()
        val bridged=engine.process(result(null,1160),1f,1f,1_160_000_000L).hands.single()
        assertTrue(bridged.predicted)
        // 80 ms into a 600 ms horizon: confidence has decayed but is still substantial.
        assertTrue(bridged.confidence>.5f && bridged.confidence<1f)
        // The bridge continues along the motion (+x here) without teleporting away.
        assertTrue(bridged.points[0]>third.points[0])
        assertTrue(bridged.points[0]<third.points[0]+.1f)
    }
    @Test fun prolongedLossHidesTheHandInsteadOfPredictingForever() {
        val engine=PhoneXrHands()
        engine.process(result(points(.2f),1000),1f,1f,1_000_000_000L)
        assertTrue(engine.process(result(null,1300),1f,1f,1_300_000_000L).hands.isNotEmpty())
        // Past the prediction horizon the hand is hidden outright; the web layer then cancels any
        // held press — it is never completed as a click by tracking loss.
        assertTrue(engine.process(result(null,1700),1f,1f,1_700_000_000L).hands.isEmpty())
    }
    @Test fun reacquisitionEasesInsteadOfSnapping() {
        val engine=PhoneXrHands()
        val before=engine.process(result(points(.8f),1000),1f,1f,1_000_000_000L).hands.single()
        engine.process(result(null,1100),1f,1f,1_100_000_000L) // brief miss keeps the filter state
        val moved=points(.8f).map { NormalizedLandmark.create(it.x()+.2f,it.y(),it.z()) }
        val back=engine.process(result(moved,1200),1f,1f,1_200_000_000L).hands.single()
        assertFalse(back.predicted)
        // The first reacquired sample lands strictly between the pre-loss pose and the raw one:
        // the One Euro state survived the miss, so the hand eases back instead of snapping.
        val rawX=moved[0].x()
        assertTrue(back.points[0]>before.points[0]+.01f)
        assertTrue(back.points[0]<rawX)
    }
    @Test fun prolongedLossDropsTheStateSoAReturningHandStartsFresh() {
        val engine=PhoneXrHands()
        assertTrue(engine.process(result(points(.2f),1000),1f,1f,1_000_000_000L).hands.single().pinching)
        // 2.6 s later the state is gone: no stale prediction and a fresh latch on return.
        assertTrue(engine.process(result(null,2600),1f,1f,2_600_000_000L).hands.isEmpty())
        val back=engine.process(result(points(.2f),2640),1f,1f,2_640_000_000L).hands.single()
        assertFalse(back.predicted)
        assertTrue(back.pinching)
    }
    @Test fun fistUsesTheForkGrabFilterNotTheFarPointerFilter() {
        val engine=PhoneXrHands()
        val first=engine.process(result(points(.2f,true),1000),1f,1f).hands.single()
        assertTrue(first.shape.fist)
        assertEquals(first.shape.palmX,first.grabX,0f)
        val moved=points(.2f,true).map { NormalizedLandmark.create(it.x()+.15f,it.y(),it.z()) }
        val next=engine.process(result(moved,1016),1f,1f).hands.single()
        assertTrue(next.grabX>first.grabX)
        assertTrue(next.grabX<next.shape.palmX)
    }
    @Test fun slowInferenceIsFreshOnCompletionNotOnCapture() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f,2_000_000_000L)
        assertEquals(1_000_000_000L,frame.timestampNs)
        assertTrue(frame.isFresh(2_100_000_000L)) // old renderer rejected this immediately
        assertTrue(frame.isFresh(2_700_000_000L)) // CPU cadence, not a hard 500 ms timer
        assertFalse(frame.isFresh(3_500_000_001L)) // stalled detector still expires
        assertEquals(1_500_000_000L,frame.validForNs)
    }
    @Test fun fastInferenceStillExpiresPromptly() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f,1_020_000_000L)
        assertEquals(500_000_000L,frame.validForNs)
        assertFalse(frame.isFresh(1_520_000_001L))
    }
    @Test fun cameraFrameAgeDoesNotAssumeTheSensorAndElapsedClocksShareAnEpoch() {
        // Capture timestamp is near zero here while completion is elapsedRealtime-like. Production
        // supplies the age measured from camera callback entry instead of subtracting these clocks.
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f,2_000_000_000L,300_000_000L)
        assertEquals(750_000_000L,frame.validForNs)
        assertTrue(frame.isFresh(2_700_000_000L))
        assertFalse(frame.isFresh(2_750_000_001L))
    }
    @Test fun briefMissKeepsOnlyTheSilhouetteNeverTheClick() {
        val engine=PhoneXrHands();val presentation=HandPresentation()
        val seen=engine.process(result(points(.2f),1000),1f,1f,1_050_000_000L)
        assertSame(seen,presentation.silhouette(seen,1_050_000_000L))
        // A missed detection is bridged by a prediction (the silhouette follows it), while the held
        // pinch is held — the miss itself never starts, completes, or cancels a click.
        val missing=engine.process(result(null,1050),1f,1f,1_100_000_000L)
        assertTrue(missing.hands.single().predicted)
        assertSame(missing,presentation.silhouette(missing,1_100_000_000L))
        // Past the horizon the frame is empty: retention keeps ONLY the fading silhouette while a
        // stalled detector runs out its window, and never a press.
        val gone=engine.process(result(null,1700),1f,1f,1_750_000_000L)
        assertTrue(gone.hands.isEmpty())
        assertNull(presentation.silhouette(gone,2_500_000_000L))
    }
    @Test fun stalledResultCannotKeepASilhouetteForever() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f)
        val presentation=HandPresentation()
        assertSame(frame,presentation.silhouette(frame,1_100_000_000L))
        // The bug this guards: the same frame object is drawn every display frame while the
        // detector is stalled (app open, GPU contention). A stale delivery must keep the last
        // pose instead of blinking the hand off until the next result arrives.
        assertSame(frame,presentation.silhouette(frame,1_600_000_000L))
        assertNull(presentation.silhouette(frame,1_750_000_000L))
    }
    @Test fun silhouetteFadesOutAtTheEndOfRetentionInsteadOfPopping() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f)
        val presentation=HandPresentation()
        assertSame(frame,presentation.silhouette(frame,1_100_000_000L))
        assertEquals(1f,presentation.fade(frame,1_500_000_000L),0f)      // full while recent
        assertEquals(.5f,presentation.fade(frame,1_600_000_000L),.01f)   // fading over the last 200 ms
        assertEquals(0f,presentation.fade(frame,1_750_000_000L),0f)
    }
    @Test fun slowTrackerKeepsItsOwnValidityAsMinimumRetention() {
        // A detector legitimately reporting every ~1 s (validForNs 1.5 s) must not be hidden
        // between results: retention stretches to the frame's own validity window.
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f,2_000_000_000L)
        assertEquals(1_500_000_000L,frame.validForNs)
        val presentation=HandPresentation()
        assertSame(frame,presentation.silhouette(frame,2_000_000_000L))
        assertSame(frame,presentation.silhouette(frame,3_100_000_000L))
        assertNull(presentation.silhouette(frame,3_501_000_000L))
    }
    @Test fun nativeFilterHasRestingDeadZone() {
        val filter=HandGestures.OneEuro(minCutoff=1.2f,beta=8f,deadZone=.0012f)
        assertEquals(.5f,filter.filter(.5f,1000000000),0f)
        assertEquals(.5f,filter.filter(.5001f,1016000000),0f)
        assertTrue(filter.filter(.8f,1032000000)>.6f)
    }
    @Test fun predictionExtendsTheLastVelocityAtMostOneInterval() {
        val engine=PhoneXrHands()
        val h0=engine.process(result(points(.2f),1000),1f,1f).hands.single()
        val a=h0.copy(points=FloatArray(63){.10f},baseX=.10f,aimX=.10f)
        val b=h0.copy(points=FloatArray(63){.20f},baseX=.20f,aimX=.20f)
        val first=PhoneXrHands.Frame(listOf(a),1_000_000_000L,1_000_000_000L)
        val second=PhoneXrHands.Frame(listOf(b),1_040_000_000L,1_040_000_000L,500_000_000L,0L,first)
        // At the detection instant: exactly the detection, zero added latency.
        assertArrayEquals(b.points,second.predicted(1_040_000_000L).hands.single().points,0f)
        // Half an interval later: halfway along the velocity.
        assertArrayEquals(FloatArray(63){.25f},second.predicted(1_060_000_000L).hands.single().points,1e-6f)
        // One full interval: the velocity endpoint.
        assertArrayEquals(FloatArray(63){.30f},second.predicted(1_080_000_000L).hands.single().points,1e-6f)
        assertEquals(.30f,second.predicted(1_080_000_000L).hands.single().baseX,1e-6f)
        // Far beyond one interval: clamped, the hand never runs away on a stale velocity.
        assertArrayEquals(FloatArray(63){.30f},second.predicted(1_500_000_000L).hands.single().points,1e-6f)
    }
    @Test fun predictionKeepsGesturesFromTheNewestDetectionAndNeedsNoHistory() {
        val engine=PhoneXrHands()
        val h0=engine.process(result(points(.2f),1000),1f,1f).hands.single()
        val pinching=h0.copy(pinching=true)
        val first=PhoneXrHands.Frame(listOf(h0),1_000_000_000L,1_000_000_000L)
        val second=PhoneXrHands.Frame(listOf(pinching),1_040_000_000L,1_040_000_000L,500_000_000L,0L,first)
        assertTrue(second.predicted(1_080_000_000L).hands.single().pinching)
        assertSame(first,first.predicted(1_500_000_000L))
    }
    @Test fun predictionNeverExtrapolatesAcrossALongGap() {
        val engine=PhoneXrHands()
        val h0=engine.process(result(points(.2f),1000),1f,1f).hands.single()
        val a=h0.copy(points=FloatArray(63){.10f})
        val b=h0.copy(points=FloatArray(63){.90f})
        val first=PhoneXrHands.Frame(listOf(a),1_000_000_000L,1_000_000_000L)
        // 2 s gap (hand lost and found again): show exactly where it was detected.
        val second=PhoneXrHands.Frame(listOf(b),3_000_000_000L,3_000_000_000L,500_000_000L,0L,first)
        assertArrayEquals(b.points,second.predicted(3_040_000_000L).hands.single().points,0f)
    }
    @Test fun aHandThatBlinksOutBrieflyResumesFilteredInsteadOfSnapping() {
        val engine=PhoneXrHands()
        repeat(6){ engine.process(result(points(.2f),1000+it*33L),1f,1f) }
        val settled=engine.process(result(points(.2f),1200),1f,1f).hands.single()
        // One missed inference (occlusion, palm-detector miss) is BRIDGED by the motion model -
        // the hand is never hidden while the prediction horizon holds.
        assertTrue(engine.process(result(null,1233),1f,1f).hands.single().predicted)
        val moved=points(.2f).map{ NormalizedLandmark.create(it.x()+.2f,it.y(),it.z()) }
        val back=engine.process(result(moved,1266),1f,1f).hands.single()
        val wristX=back.points[0]
        // Smooth correction: the resumed filter is between where the hand was and the raw sample,
        // not on it - a reset state would show the raw 0.7 and snap the silhouette. The measured
        // resumed sample for this 66 ms gap sits at ~0.67 with the beta=12 landmark filter: fast
        // enough to track real hand motion, but still short of the raw 0.7.
        assertTrue(wristX>settled.points[0]+.01f)
        assertTrue(wristX<moved[0].x()-.02f)
    }
    @Test fun aHandAbsentLongerThanTheGraceResumesFromTheRawDetection() {
        val engine=PhoneXrHands()
        repeat(6){ engine.process(result(points(.2f),1000+it*33L),1f,1f) }
        engine.process(result(points(.2f),1200),1f,1f)
        assertTrue(engine.process(result(null,1233),1f,1f).hands.single().predicted)
        val moved=points(.2f).map{ NormalizedLandmark.create(it.x()+.2f,it.y(),it.z()) }
        // 2 s absent: the hand may be anywhere; the old filter state must not drag it back.
        // (The bridge expires at the horizon; the state is pruned before this result may reuse it.)
        val back=engine.process(result(moved,3200),1f,1f).hands.single()
        assertEquals(moved[0].x(),back.points[0],1e-6f)
    }
    @Test fun processChainsThePreviousDetectionAndResetClearsIt() {
        val engine=PhoneXrHands()
        val first=engine.process(result(points(.2f),1000),1f,1f,1_000_000_000L)
        val second=engine.process(result(points(.2f),1040),1f,1f,1_040_000_000L)
        assertNotSame(first,second.previous)
        assertSame(first.hands,second.previous?.hands)
        assertNull(second.previous?.previous) // Prediction history stays one sample deep, not session-long.
        val third=engine.process(result(points(.2f),1080),1f,1f,1_080_000_000L)
        assertNotSame(second,third.previous)
        assertSame(second.hands,third.previous?.hands)
        assertNull(third.previous?.previous)
        engine.reset()
        val afterReset=engine.process(result(points(.2f),2000),1f,1f,2_000_000_000L)
        assertNull(afterReset.previous)
        // An empty result neither breaks nor replaces the chain: its bridged prediction is not a
        // detection, so the previous link still points at the last real sample.
        val engine2=PhoneXrHands()
        val a=engine2.process(result(points(.2f),1000),1f,1f,1_000_000_000L)
        val empty=engine2.process(result(null,1040),1f,1f,1_040_000_000L)
        assertTrue(empty.hands.single().predicted)
        val b=engine2.process(result(points(.2f),1080),1f,1f,1_080_000_000L)
        assertNotSame(a,b.previous)
        assertSame(a.hands,b.previous?.hands)
        assertNull(b.previous?.previous)
    }
}

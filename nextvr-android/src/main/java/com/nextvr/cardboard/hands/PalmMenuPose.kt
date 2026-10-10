package com.nextvr.cardboard.hands

/** PhoneXR palmFacesEyes: palm toward eyes AND fingers upright. Never a forward-pointing click.
 *
 * Allocation-free on purpose: this runs inside [PhoneXrHands.Frame.json], which the tracking
 * thread serializes between two inferences. The first version built a dozen small FloatArrays per
 * hand per frame (and a lambda per landmark) for a field the web layer only reads as a boolean, so
 * the geometry is now evaluated with scalars and no boxing at all.
 */
object PalmMenuPose {
    /** Check from 3D head-space landmarks (when world landmarks are available). */
    fun eligible(p:FloatArray?,left:Boolean):Boolean {
        if(p==null || p.size!=63)return false
        // Wrist (0), index base (5), pinky base (17) and middle knuckle (9), straight from the array.
        val wx=p[0];val wy=p[1];val wz=p[2]
        val ix=p[15];val iy=p[16];val iz=p[17]
        val px=p[51];val py=p[52];val pz=p[53]
        val mx=p[27];val my=p[28];val mz=p[29]
        val ax=ix-wx;val ay=iy-wy;val az=iz-wz
        val bx=px-wx;val by=py-wy;val bz=pz-wz
        val sign=if(left)-1f else 1f
        // n = sign * (a x b): the palm normal, as a scalar triple of the two base vectors.
        val nx=sign*(ay*bz-az*by);val ny=sign*(az*bx-ax*bz);val nz=sign*(ax*by-ay*bx)
        // c: the middle of the palm, the point the normal is weighed against.
        val cx=(wx+mx)/2;val cy=(wy+my)/2;val cz=(wz+mz)/2
        val upx=mx-wx;val upy=my-wy;val upz=mz-wz
        val nLength=length(nx,ny,nz)
        val cLength=length(cx,cy,cz)
        val facing=-(nx*cx+ny*cy+nz*cz)/(nLength*cLength)
        return facing>.15f && upy/length(upx,upy,upz)>.08f
    }

    private fun length(x:Float,y:Float,z:Float)=kotlin.math.sqrt(x*x+y*y+z*z).coerceAtLeast(1e-6f)
}

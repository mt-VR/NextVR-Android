(()=>{var Nv=0,Yf=1,Dv=2;var kg=1,kv=2,ds=3,Bi=0,qn=1,Un=2;var zs=0,ba=1,jf=2,Zf=3,Kf=4,Ov=5,br=100,Uv=101,Fv=102,Jf=103,Qf=104,Bv=200,zv=201,Hv=202,Vv=203,Od=204,Ud=205,Gv=206,Wv=207,qv=208,Xv=209,$v=210,Yv=211,jv=212,Zv=213,Kv=214,Jv=0,Qv=1,ex=2,nc=3,tx=4,nx=5,ix=6,sx=7,vh=0,rx=1,ax=2,Hs=0,ox=1,lx=2,cx=3,ux=4,dx=5,hx=6,em="attached",px="detached",Og=300,Sa=301,Ma=302,Fd=303,Bd=304,Nc=306,Ar=1e3,ii=1001,bo=1002,cn=1003,ic=1004;var mo=1005;var rn=1006,xh=1007;var Gs=1008;var Vs=1009,fx=1010,mx=1011,bh=1012,Ug=1013,Fs=1014,hs=1015,_o=1016,Fg=1017,Bg=1018,wr=1020,gx=1021,pi=1023,yx=1024,vx=1025,Sr=1026,Aa=1027,xx=1028,zg=1029,bx=1030,Hg=1031,Vg=1033,id=33776,sd=33777,rd=33778,ad=33779,tm=35840,nm=35841,im=35842,sm=35843,Gg=36196,rm=37492,am=37496,om=37808,lm=37809,cm=37810,um=37811,dm=37812,hm=37813,pm=37814,fm=37815,mm=37816,gm=37817,ym=37818,vm=37819,xm=37820,bm=37821,od=36492,_m=36494,wm=36495,_x=36283,Sm=36284,Mm=36285,Am=36286;var Ea=2300,Er=2301,ld=2302,Em=2400,Tm=2401,Rm=2402,wx=2500;var Wg=0,Dc=1,No=2,qg=3e3,Mr=3001,Sx=3200,Mx=3201,_h=0,Ax=1,fi="",Vt="srgb",un="srgb-linear",wh="display-p3",kc="display-p3-linear",sc="linear",kt="srgb",rc="rec709",ac="p3";var ea=7680;var Cm=519,Ex=512,Tx=513,Rx=514,Xg=515,Cx=516,Lx=517,Px=518,Ix=519,zd=35044;var Lm="300 es",Hd=1035,ps=2e3,oc=2001,Ws=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pm=1234567,go=Math.PI/180,Ta=180/Math.PI;function Ci(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function An(n,e,t){return Math.max(e,Math.min(t,n))}function Sh(n,e){return(n%e+e)%e}function Nx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Dx(n,e,t){return n!==e?(t-n)/(e-n):0}function yo(n,e,t){return(1-t)*n+t*e}function kx(n,e,t,i){return yo(n,e,1-Math.exp(-t*i))}function Ox(n,e=1){return e-Math.abs(Sh(n,e*2)-e)}function Ux(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Bx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zx(n,e){return n+Math.random()*(e-n)}function Hx(n){return n*(.5-Math.random())}function Vx(n){n!==void 0&&(Pm=n);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gx(n){return n*go}function Wx(n){return n*Ta}function Vd(n){return(n&n-1)===0&&n!==0}function qx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xx(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),m=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Do={DEG2RAD:go,RAD2DEG:Ta,generateUUID:Ci,clamp:An,euclideanModulo:Sh,mapLinear:Nx,inverseLerp:Dx,lerp:yo,damp:kx,pingpong:Ox,smoothstep:Ux,smootherstep:Fx,randInt:Bx,randFloat:zx,randFloatSpread:Hx,seededRandom:Vx,degToRad:Gx,radToDeg:Wx,isPowerOfTwo:Vd,ceilPowerOfTwo:qx,floorPowerOfTwo:lc,setQuaternionFromProperEuler:Xx,normalize:_t,denormalize:Fi},Ye=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],y=s[0],f=s[3],p=s[6],x=s[1],v=s[4],w=s[7],E=s[2],R=s[5],M=s[8];return r[0]=a*y+o*x+l*E,r[3]=a*f+o*v+l*R,r[6]=a*p+o*w+l*M,r[1]=c*y+u*x+d*E,r[4]=c*f+u*v+d*R,r[7]=c*p+u*w+d*M,r[2]=h*y+m*x+g*E,r[5]=h*f+m*v+g*R,r[8]=h*p+m*w+g*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,m=c*r-a*l,g=t*d+i*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(cd.makeScale(e,t)),this}rotate(e){return this.premultiply(cd.makeRotation(-e)),this}translate(e,t){return this.premultiply(cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cd=new rt;function $g(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $x(){let n=wo("canvas");return n.style.display="block",n}var Im={};function vo(n){n in Im||(Im[n]=!0,console.warn(n))}var Nm=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dm=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rl={[un]:{transfer:sc,primaries:rc,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:kt,primaries:rc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[kc]:{transfer:sc,primaries:ac,toReference:n=>n.applyMatrix3(Dm),fromReference:n=>n.applyMatrix3(Nm)},[wh]:{transfer:kt,primaries:ac,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Dm),fromReference:n=>n.applyMatrix3(Nm).convertLinearToSRGB()}},Yx=new Set([un,kc]),mt={enabled:!0,_workingColorSpace:un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Yx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Rl[e].toReference,s=Rl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Rl[n].primaries},getTransfer:function(n){return n===fi?sc:Rl[n].transfer}};function _a(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ud(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ta,cc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ta===void 0&&(ta=wo("canvas")),ta.width=e.width,ta.height=e.height;let i=ta.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ta}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_a(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_a(t[i]/255)*255):t[i]=_a(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jx=0,uc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dd(s[a].image)):r.push(dd(s[a]))}else r=dd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function dd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zx=0,_n=class n extends Ws{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ii,s=ii,r=rn,a=Gs,o=pi,l=Vs,c=n.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Ci(),this.name="",this.source=new uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mr?Vt:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?Mr:qg}set encoding(e){vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mr?Vt:fi}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Og;_n.DEFAULT_ANISOTROPY=1;var Mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],y=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,w=(m+1)/2,E=(p+1)/2,R=(u+h)/4,M=(d+y)/4,B=(g+f)/4;return v>w&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=M/i):w>E?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=R/s,r=B/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=M/r,s=B/r),this.set(i,s,r,t),this}let x=Math.sqrt((f-g)*(f-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-y)/x,this.z=(h-u)/x,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gd=class extends Ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(vo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mr?Vt:fi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class extends Gd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},dc=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wd=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==h||c!==m||u!==g){let f=1-o,p=l*h+c*m+u*g+d*y,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),R=Math.atan2(E,p*x);f=Math.sin(f*R)/E,o=Math.sin(o*R)/E}let w=o*x;if(l=l*f+h*w,c=c*f+m*w,u=u*f+g*w,d=d*f+y*w,f===1-o){let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-o*m,e[t+2]=c*g+u*m+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(km.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hd=new k,km=new nt,mi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Ll.subVectors(this.max,oo),na.subVectors(e.a,oo),ia.subVectors(e.b,oo),sa.subVectors(e.c,oo),Ns.subVectors(ia,na),Ds.subVectors(sa,ia),mr.subVectors(na,sa);let t=[0,-Ns.z,Ns.y,0,-Ds.z,Ds.y,0,-mr.z,mr.y,Ns.z,0,-Ns.x,Ds.z,0,-Ds.x,mr.z,0,-mr.x,-Ns.y,Ns.x,0,-Ds.y,Ds.x,0,-mr.y,mr.x,0];return!pd(t,na,ia,sa,Ll)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,na,ia,sa,Ll))?!1:(Pl.crossVectors(Ns,Ds),t=[Pl.x,Pl.y,Pl.z],pd(t,na,ia,sa,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},rs=[new k,new k,new k,new k,new k,new k,new k,new k],Ei=new k,Cl=new mi,na=new k,ia=new k,sa=new k,Ns=new k,Ds=new k,mr=new k,oo=new k,Ll=new k,Pl=new k,gr=new k;function pd(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){gr.fromArray(n,r);let o=s.x*Math.abs(gr.x)+s.y*Math.abs(gr.y)+s.z*Math.abs(gr.z),l=e.dot(gr),c=t.dot(gr),u=i.dot(gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Kx=new mi,lo=new k,fd=new k,si=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Kx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(fd)),this.expandByPoint(lo.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},as=new k,md=new k,Il=new k,ks=new k,gd=new k,Nl=new k,yd=new k,Tr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){md.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),ks.copy(this.origin).sub(md);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Il),o=ks.dot(this.direction),l=-ks.dot(Il),c=ks.lengthSq(),u=Math.abs(1-a*a),d,h,m,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(md).addScaledVector(Il,h),m}intersectSphere(e,t){as.subVectors(e.center,this.origin);let i=as.dot(this.direction),s=as.dot(as)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,i,s,r){gd.subVectors(t,e),Nl.subVectors(i,e),yd.crossVectors(gd,Nl);let a=this.direction.dot(yd),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ks.subVectors(this.origin,e);let l=o*this.direction.dot(Nl.crossVectors(ks,Nl));if(l<0)return null;let c=o*this.direction.dot(gd.cross(ks));if(c<0||l+c>a)return null;let u=-o*ks.dot(yd);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class n{constructor(e,t,i,s,r,a,o,l,c,u,d,h,m,g,y,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,m,g,y,f)}set(e,t,i,s,r,a,o,l,c,u,d,h,m,g,y,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=g,p[11]=y,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ra.setFromMatrixColumn(e,0).length(),r=1/ra.setFromMatrixColumn(e,1).length(),a=1/ra.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,m=a*d,g=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,m=l*d,g=c*u,y=c*d;t[0]=h+y*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,m=l*d,g=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,m=a*d,g=o*u,y=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,m=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=a*l,m=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jx,e,Qx)}lookAt(e,t,i){let s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Os.crossVectors(i,ei),Os.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Os.crossVectors(i,ei)),Os.normalize(),Dl.crossVectors(ei,Os),s[0]=Os.x,s[4]=Dl.x,s[8]=ei.x,s[1]=Os.y,s[5]=Dl.y,s[9]=ei.y,s[2]=Os.z,s[6]=Dl.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],y=i[6],f=i[10],p=i[14],x=i[3],v=i[7],w=i[11],E=i[15],R=s[0],M=s[4],B=s[8],_=s[12],b=s[1],I=s[5],D=s[9],U=s[13],L=s[2],T=s[6],N=s[10],z=s[14],W=s[3],G=s[7],K=s[11],Q=s[15];return r[0]=a*R+o*b+l*L+c*W,r[4]=a*M+o*I+l*T+c*G,r[8]=a*B+o*D+l*N+c*K,r[12]=a*_+o*U+l*z+c*Q,r[1]=u*R+d*b+h*L+m*W,r[5]=u*M+d*I+h*T+m*G,r[9]=u*B+d*D+h*N+m*K,r[13]=u*_+d*U+h*z+m*Q,r[2]=g*R+y*b+f*L+p*W,r[6]=g*M+y*I+f*T+p*G,r[10]=g*B+y*D+f*N+p*K,r[14]=g*_+y*U+f*z+p*Q,r[3]=x*R+v*b+w*L+E*W,r[7]=x*M+v*I+w*T+E*G,r[11]=x*B+v*D+w*N+E*K,r[15]=x*_+v*U+w*z+E*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],y=e[7],f=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*h+i*c*h+s*o*m-i*l*m)+y*(+t*l*m-t*c*h+r*a*h-s*a*m+s*c*u-r*l*u)+f*(+t*c*d-t*o*m-r*a*d+i*a*m+r*o*u-i*c*u)+p*(-s*o*u-t*l*d+t*o*h+s*a*d-i*a*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],y=e[13],f=e[14],p=e[15],x=d*f*c-y*h*c+y*l*m-o*f*m-d*l*p+o*h*p,v=g*h*c-u*f*c-g*l*m+a*f*m+u*l*p-a*h*p,w=u*y*c-g*d*c+g*o*m-a*y*m-u*o*p+a*d*p,E=g*d*l-u*y*l-g*o*h+a*y*h+u*o*f-a*d*f,R=t*x+i*v+s*w+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/R;return e[0]=x*M,e[1]=(y*h*r-d*f*r-y*s*m+i*f*m+d*s*p-i*h*p)*M,e[2]=(o*f*r-y*l*r+y*s*c-i*f*c-o*s*p+i*l*p)*M,e[3]=(d*l*r-o*h*r-d*s*c+i*h*c+o*s*m-i*l*m)*M,e[4]=v*M,e[5]=(u*f*r-g*h*r+g*s*m-t*f*m-u*s*p+t*h*p)*M,e[6]=(g*l*r-a*f*r-g*s*c+t*f*c+a*s*p-t*l*p)*M,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*m+t*l*m)*M,e[8]=w*M,e[9]=(g*d*r-u*y*r-g*i*m+t*y*m+u*i*p-t*d*p)*M,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*p+t*o*p)*M,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*m-t*o*m)*M,e[12]=E*M,e[13]=(u*y*s-g*d*s+g*i*h-t*y*h-u*i*f+t*d*f)*M,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*f-t*o*f)*M,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*h+t*o*h)*M,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,m=r*u,g=r*d,y=a*u,f=a*d,p=o*d,x=l*c,v=l*u,w=l*d,E=i.x,R=i.y,M=i.z;return s[0]=(1-(y+p))*E,s[1]=(m+w)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(m-w)*R,s[5]=(1-(h+p))*R,s[6]=(f+x)*R,s[7]=0,s[8]=(g+v)*M,s[9]=(f-x)*M,s[10]=(1-(h+y))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ra.set(s[0],s[1],s[2]).length(),a=ra.set(s[4],s[5],s[6]).length(),o=ra.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);let c=1/r,u=1/a,d=1/o;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ps){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s),m,g;if(o===ps)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===oc)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ps){let l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(a-r),h=(t+e)*c,m=(i+s)*u,g,y;if(o===ps)g=(a+r)*d,y=-2*d;else if(o===oc)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ra=new k,Ti=new Ae,Jx=new k(0,0,0),Qx=new k(1,1,1),Os=new k,Dl=new k,ei=new k,Om=new Ae,Um=new nt,ri=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},eb=0,Fm=new k,aa=new nt,os=new Ae,kl=new k,co=new k,tb=new k,nb=new nt,Bm=new k(1,0,0),zm=new k(0,1,0),Hm=new k(0,0,1),ib={type:"added"},sb={type:"removed"},Ot=class n extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new ri,i=new nt,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new rt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kl.copy(e):kl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(co,kl,this.up):os.lookAt(kl,co,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),aa.setFromRotationMatrix(os),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ib)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sb)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new k(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=new k,ls=new k,vd=new k,cs=new k,oa=new k,la=new k,Vm=new k,xd=new k,bd=new k,_d=new k,Ol=!1,ya=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ri.subVectors(e,t),s.cross(Ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ri.subVectors(s,t),ls.subVectors(i,t),vd.subVectors(e,t);let a=Ri.dot(Ri),o=Ri.dot(ls),l=Ri.dot(vd),c=ls.dot(ls),u=ls.dot(vd),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getUV(e,t,i,s,r,a,o,l){return Ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ol=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cs.x),l.addScaledVector(a,cs.y),l.addScaledVector(o,cs.z),l)}static isFrontFacing(e,t,i,s){return Ri.subVectors(i,t),ls.subVectors(e,t),Ri.cross(ls).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),Ri.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ol=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;oa.subVectors(s,i),la.subVectors(r,i),xd.subVectors(e,i);let l=oa.dot(xd),c=la.dot(xd);if(l<=0&&c<=0)return t.copy(i);bd.subVectors(e,s);let u=oa.dot(bd),d=la.dot(bd);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(oa,a);_d.subVectors(e,r);let m=oa.dot(_d),g=la.dot(_d);if(g>=0&&m<=g)return t.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(la,o);let f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Vm.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Vm,o);let p=1/(f+y+h);return a=y*p,o=h*p,t.copy(i).addScaledVector(oa,a).addScaledVector(la,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=Sh(e,1),t=An(t,0,1),i=An(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=wd(a,r,e+1/3),this.g=wd(a,r,e),this.b=wd(a,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=Yg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=ud(e.r),this.g=ud(e.g),this.b=ud(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return mt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(An(Mn.r*255,0,255))*65536+Math.round(An(Mn.g*255,0,255))*256+Math.round(An(Mn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Vt){mt.fromWorkingColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+t,Us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Us),e.getHSL(Ul);let i=yo(Us.h,Ul.h,t),s=yo(Us.s,Ul.s,t),r=yo(Us.l,Ul.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Pe;Pe.NAMES=Yg;var rb=0,Xn=class extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ba,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Ud,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Od&&(i.blendSrc=this.blendSrc),this.blendDst!==Ud&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ea&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ea&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ea&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},an=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var sn=new k,Fl=new Ye,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),e}};var hc=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var pc=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Fn=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}};var ab=0,hi=new Ae,Sd=new Ot,ca=new k,ti=new mi,uo=new mi,yn=new k,Bn=class n extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($g(e)?pc:hc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];uo.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(ti.min,uo.min),ti.expandByPoint(yn),yn.addVectors(ti.max,uo.max),ti.expandByPoint(yn)):(ti.expandByPoint(uo.min),ti.expandByPoint(uo.max))}ti.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yn.fromBufferAttribute(o,c),l&&(ca.fromBufferAttribute(e,c),yn.add(ca)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new k,u[b]=new k;let d=new k,h=new k,m=new k,g=new Ye,y=new Ye,f=new Ye,p=new k,x=new k;function v(b,I,D){d.fromArray(s,b*3),h.fromArray(s,I*3),m.fromArray(s,D*3),g.fromArray(a,b*2),y.fromArray(a,I*2),f.fromArray(a,D*2),h.sub(d),m.sub(d),y.sub(g),f.sub(g);let U=1/(y.x*f.y-f.x*y.y);isFinite(U)&&(p.copy(h).multiplyScalar(f.y).addScaledVector(m,-y.y).multiplyScalar(U),x.copy(m).multiplyScalar(y.x).addScaledVector(h,-f.x).multiplyScalar(U),c[b].add(p),c[I].add(p),c[D].add(p),u[b].add(x),u[I].add(x),u[D].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,I=w.length;b<I;++b){let D=w[b],U=D.start,L=D.count;for(let T=U,N=U+L;T<N;T+=3)v(i[T+0],i[T+1],i[T+2])}let E=new k,R=new k,M=new k,B=new k;function _(b){M.fromArray(r,b*3),B.copy(M);let I=c[b];E.copy(I),E.sub(M.multiplyScalar(M.dot(I))).normalize(),R.crossVectors(B,I);let U=R.dot(u[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=U}for(let b=0,I=w.length;b<I;++b){let D=w[b],U=D.start,L=D.count;for(let T=U,N=U+L;T<N;T+=3)_(i[T+0]),_(i[T+1]),_(i[T+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),y=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),m=0,g=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new It(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gm=new Ae,yr=new Tr,Bl=new si,Wm=new k,ua=new k,da=new k,ha=new k,Md=new k,zl=new k,Hl=new Ye,Vl=new Ye,Gl=new Ye,qm=new k,Xm=new k,$m=new k,Wl=new k,ql=new k,wt=class extends Ot{constructor(e=new Bn,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){zl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Md.fromBufferAttribute(d,e),a?zl.addScaledVector(Md,u):zl.addScaledVector(Md.sub(t),u))}t.add(zl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(r),yr.copy(e.ray).recast(e.near),!(Bl.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Bl,Wm)===null||yr.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(r).invert(),yr.copy(e.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let f=h[g],p=a[f.materialIndex],x=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let w=x,E=v;w<E;w+=3){let R=o.getX(w),M=o.getX(w+1),B=o.getX(w+2);s=Xl(this,p,e,i,c,u,d,R,M,B),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let f=g,p=y;f<p;f+=3){let x=o.getX(f),v=o.getX(f+1),w=o.getX(f+2);s=Xl(this,a,e,i,c,u,d,x,v,w),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let f=h[g],p=a[f.materialIndex],x=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let w=x,E=v;w<E;w+=3){let R=w,M=w+1,B=w+2;s=Xl(this,p,e,i,c,u,d,R,M,B),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let f=g,p=y;f<p;f+=3){let x=f,v=f+1,w=f+2;s=Xl(this,a,e,i,c,u,d,x,v,w),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function ob(n,e,t,i,s,r,a,o){let l;if(e.side===qn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Bi,o),l===null)return null;ql.copy(o),ql.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ql);return c<t.near||c>t.far?null:{distance:c,point:ql.clone(),object:n}}function Xl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ua),n.getVertexPosition(l,da),n.getVertexPosition(c,ha);let u=ob(n,e,t,i,ua,da,ha,Wl);if(u){s&&(Hl.fromBufferAttribute(s,o),Vl.fromBufferAttribute(s,l),Gl.fromBufferAttribute(s,c),u.uv=ya.getInterpolation(Wl,ua,da,ha,Hl,Vl,Gl,new Ye)),r&&(Hl.fromBufferAttribute(r,o),Vl.fromBufferAttribute(r,l),Gl.fromBufferAttribute(r,c),u.uv1=ya.getInterpolation(Wl,ua,da,ha,Hl,Vl,Gl,new Ye),u.uv2=u.uv1),a&&(qm.fromBufferAttribute(a,o),Xm.fromBufferAttribute(a,l),$m.fromBufferAttribute(a,c),u.normal=ya.getInterpolation(Wl,ua,da,ha,qm,Xm,$m,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};ya.getNormal(ua,da,ha,d.normal),u.face=d}return u}var qs=class n extends Bn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(d,2));function g(y,f,p,x,v,w,E,R,M,B,_){let b=w/M,I=E/B,D=w/2,U=E/2,L=R/2,T=M+1,N=B+1,z=0,W=0,G=new k;for(let K=0;K<N;K++){let Q=K*I-U;for(let se=0;se<T;se++){let q=se*b-D;G[y]=q*x,G[f]=Q*v,G[p]=L,c.push(G.x,G.y,G.z),G[y]=0,G[f]=0,G[p]=R>0?1:-1,u.push(G.x,G.y,G.z),d.push(se/M),d.push(1-K/B),z+=1}}for(let K=0;K<B;K++)for(let Q=0;Q<M;Q++){let se=h+Q+T*K,q=h+Q+T*(K+1),j=h+(Q+1)+T*(K+1),ne=h+(Q+1)+T*K;l.push(se,q,ne),l.push(q,j,ne),W+=6}o.addGroup(m,W,_),m+=W,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ra(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function On(n){let e={};for(let t=0;t<n.length;t++){let i=Ra(n[t]);for(let s in i)e[s]=i[s]}return e}function lb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jg(n){return n.getRenderTarget()===null?n.outputColorSpace:mt.workingColorSpace}var cb={clone:Ra,merge:On},ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ms=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ub,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ra(e.uniforms),this.uniformsGroups=lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fc=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=ps}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends fc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pa=-90,fa=1,qd=class extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(pa,fa,e,t);s.layers=this.layers,this.add(s);let r=new Gt(pa,fa,e,t);r.layers=this.layers,this.add(r);let a=new Gt(pa,fa,e,t);a.layers=this.layers,this.add(a);let o=new Gt(pa,fa,e,t);o.layers=this.layers,this.add(o);let l=new Gt(pa,fa,e,t);l.layers=this.layers,this.add(l);let c=new Gt(pa,fa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ps)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},mc=class extends _n{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Sa,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xd=class extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(vo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mr?Vt:fi),this.texture=new mc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qs(5,5,5),r=new ms({name:"CubemapFromEquirect",uniforms:Ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:zs});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===Gs&&(t.minFilter=rn),new qd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Ad=new k,hb=new k,pb=new rt,ni=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ad.subVectors(i,t).cross(hb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ad),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||pb.getNormalMatrix(e),s=this.coplanarPoint(Ad).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vr=new si,$l=new k,Mo=class{constructor(e=new ni,t=new ni,i=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ps){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],m=s[8],g=s[9],y=s[10],f=s[11],p=s[12],x=s[13],v=s[14],w=s[15];if(i[0].setComponents(l-r,h-c,f-m,w-p).normalize(),i[1].setComponents(l+r,h+c,f+m,w+p).normalize(),i[2].setComponents(l+a,h+u,f+g,w+x).normalize(),i[3].setComponents(l-a,h-u,f-g,w-x).normalize(),i[4].setComponents(l-o,h-d,f-y,w-v).normalize(),t===ps)i[5].setComponents(l+o,h+d,f+y,w+v).normalize();else if(t===oc)i[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if($l.x=s.normal.x>0?e.max.x:e.min.x,$l.y=s.normal.y>0?e.max.y:e.min.y,$l.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zg(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fb(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let d=c.array,h=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,d){let h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let y=0,f=g.length;y<f;y++){let p=g[y];t?n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}var Tn=class n extends Bn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,m=[],g=[],y=[],f=[];for(let p=0;p<u;p++){let x=p*h-a;for(let v=0;v<c;v++){let w=v*d-r;g.push(w,-x,0),y.push(0,0,1),f.push(v/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let v=x+c*p,w=x+c*(p+1),E=x+1+c*(p+1),R=x+1+c*p;m.push(v,w,R),m.push(w,E,R)}this.setIndex(m),this.setAttribute("position",new Fn(g,3)),this.setAttribute("normal",new Fn(y,3)),this.setAttribute("uv",new Fn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,s_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,L_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,P_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ow=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_w=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ow=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ww=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:mb,alphahash_pars_fragment:gb,alphamap_fragment:yb,alphamap_pars_fragment:vb,alphatest_fragment:xb,alphatest_pars_fragment:bb,aomap_fragment:_b,aomap_pars_fragment:wb,batching_pars_vertex:Sb,batching_vertex:Mb,begin_vertex:Ab,beginnormal_vertex:Eb,bsdfs:Tb,iridescence_fragment:Rb,bumpmap_pars_fragment:Cb,clipping_planes_fragment:Lb,clipping_planes_pars_fragment:Pb,clipping_planes_pars_vertex:Ib,clipping_planes_vertex:Nb,color_fragment:Db,color_pars_fragment:kb,color_pars_vertex:Ob,color_vertex:Ub,common:Fb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:zb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Vb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Wb,colorspace_fragment:qb,colorspace_pars_fragment:Xb,envmap_fragment:$b,envmap_common_pars_fragment:Yb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:l_,envmap_vertex:Kb,fog_vertex:Jb,fog_pars_vertex:Qb,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_fragment:i_,lightmap_pars_fragment:s_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:a_,lights_pars_begin:o_,lights_toon_fragment:c_,lights_toon_pars_fragment:u_,lights_phong_fragment:d_,lights_phong_pars_fragment:h_,lights_physical_fragment:p_,lights_physical_pars_fragment:f_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:y_,logdepthbuf_fragment:v_,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:__,map_fragment:w_,map_pars_fragment:S_,map_particle_fragment:M_,map_particle_pars_fragment:A_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:T_,morphcolor_vertex:R_,morphnormal_vertex:C_,morphtarget_pars_vertex:L_,morphtarget_vertex:P_,normal_fragment_begin:I_,normal_fragment_maps:N_,normal_pars_fragment:D_,normal_pars_vertex:k_,normal_vertex:O_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:H_,opaque_fragment:V_,packing:G_,premultiplied_alpha_fragment:W_,project_vertex:q_,dithering_fragment:X_,dithering_pars_fragment:$_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:K_,shadowmap_vertex:J_,shadowmask_pars_fragment:Q_,skinbase_vertex:ew,skinning_pars_vertex:tw,skinning_vertex:nw,skinnormal_vertex:iw,specularmap_fragment:sw,specularmap_pars_fragment:rw,tonemapping_fragment:aw,tonemapping_pars_fragment:ow,transmission_fragment:lw,transmission_pars_fragment:cw,uv_pars_fragment:uw,uv_pars_vertex:dw,uv_vertex:hw,worldpos_vertex:pw,background_vert:fw,background_frag:mw,backgroundCube_vert:gw,backgroundCube_frag:yw,cube_vert:vw,cube_frag:xw,depth_vert:bw,depth_frag:_w,distanceRGBA_vert:ww,distanceRGBA_frag:Sw,equirect_vert:Mw,equirect_frag:Aw,linedashed_vert:Ew,linedashed_frag:Tw,meshbasic_vert:Rw,meshbasic_frag:Cw,meshlambert_vert:Lw,meshlambert_frag:Pw,meshmatcap_vert:Iw,meshmatcap_frag:Nw,meshnormal_vert:Dw,meshnormal_frag:kw,meshphong_vert:Ow,meshphong_frag:Uw,meshphysical_vert:Fw,meshphysical_frag:Bw,meshtoon_vert:zw,meshtoon_frag:Hw,points_vert:Vw,points_frag:Gw,shadow_vert:Ww,shadow_frag:qw,sprite_vert:Xw,sprite_frag:$w},pe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ui={basic:{uniforms:On([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:On([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:On([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:On([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:On([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:On([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:On([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:On([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:On([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:On([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:On([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:On([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:On([pe.lights,pe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ui.physical={uniforms:On([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Yl={r:0,b:0,g:0};function Yw(n,e,t,i,s,r,a){let o=new Pe(0),l=r===!0?0:1,c,u,d=null,h=0,m=null;function g(f,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),x=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Nc)?(u===void 0&&(u=new wt(new qs(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:Ra(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=mt.getTransfer(v.colorSpace)!==kt,(d!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new wt(new Tn(2,2),new ms({name:"BackgroundMaterial",uniforms:Ra(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=mt.getTransfer(v.colorSpace)!==kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function y(f,p){f.getRGB(Yl,jg(n)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,y(o,l)},render:g}}function jw(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=f(null),c=l,u=!1;function d(L,T,N,z,W){let G=!1;if(a){let K=y(z,N,T);c!==K&&(c=K,m(c.object)),G=p(L,z,N,W),G&&x(L,z,N,W)}else{let K=T.wireframe===!0;(c.geometry!==z.id||c.program!==N.id||c.wireframe!==K)&&(c.geometry=z.id,c.program=N.id,c.wireframe=K,G=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,B(L,T,N,z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,T,N){let z=N.wireframe===!0,W=o[L.id];W===void 0&&(W={},o[L.id]=W);let G=W[T.id];G===void 0&&(G={},W[T.id]=G);let K=G[z];return K===void 0&&(K=f(h()),G[z]=K),K}function f(L){let T=[],N=[],z=[];for(let W=0;W<s;W++)T[W]=0,N[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:N,attributeDivisors:z,object:L,attributes:{},index:null}}function p(L,T,N,z){let W=c.attributes,G=T.attributes,K=0,Q=N.getAttributes();for(let se in Q)if(Q[se].location>=0){let j=W[se],ne=G[se];if(ne===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),j===void 0||j.attribute!==ne||ne&&j.data!==ne.data)return!0;K++}return c.attributesNum!==K||c.index!==z}function x(L,T,N,z){let W={},G=T.attributes,K=0,Q=N.getAttributes();for(let se in Q)if(Q[se].location>=0){let j=G[se];j===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let ne={};ne.attribute=j,j&&j.data&&(ne.data=j.data),W[se]=ne,K++}c.attributes=W,c.attributesNum=K,c.index=z}function v(){let L=c.newAttributes;for(let T=0,N=L.length;T<N;T++)L[T]=0}function w(L){E(L,0)}function E(L,T){let N=c.newAttributes,z=c.enabledAttributes,W=c.attributeDivisors;N[L]=1,z[L]===0&&(n.enableVertexAttribArray(L),z[L]=1),W[L]!==T&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,T),W[L]=T)}function R(){let L=c.newAttributes,T=c.enabledAttributes;for(let N=0,z=T.length;N<z;N++)T[N]!==L[N]&&(n.disableVertexAttribArray(N),T[N]=0)}function M(L,T,N,z,W,G,K){K===!0?n.vertexAttribIPointer(L,T,N,W,G):n.vertexAttribPointer(L,T,N,z,W,G)}function B(L,T,N,z){if(i.isWebGL2===!1&&(L.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let W=z.attributes,G=N.getAttributes(),K=T.defaultAttributeValues;for(let Q in G){let se=G[Q];if(se.location>=0){let q=W[Q];if(q===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let j=q.normalized,ne=q.itemSize,ee=t.get(q);if(ee===void 0)continue;let H=ee.buffer,oe=ee.type,de=ee.bytesPerElement,_e=i.isWebGL2===!0&&(oe===n.INT||oe===n.UNSIGNED_INT||q.gpuType===Ug);if(q.isInterleavedBufferAttribute){let Xe=q.data,X=Xe.stride,nn=q.offset;if(Xe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<se.locationSize;Ie++)E(se.location+Ie,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Ie=0;Ie<se.locationSize;Ie++)w(se.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Ie=0;Ie<se.locationSize;Ie++)M(se.location+Ie,ne/se.locationSize,oe,j,X*de,(nn+ne/se.locationSize*Ie)*de,_e)}else{if(q.isInstancedBufferAttribute){for(let Xe=0;Xe<se.locationSize;Xe++)E(se.location+Xe,q.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Xe=0;Xe<se.locationSize;Xe++)w(se.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Xe=0;Xe<se.locationSize;Xe++)M(se.location+Xe,ne/se.locationSize,oe,j,ne*de,ne/se.locationSize*Xe*de,_e)}}else if(K!==void 0){let j=K[Q];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(se.location,j);break;case 3:n.vertexAttrib3fv(se.location,j);break;case 4:n.vertexAttrib4fv(se.location,j);break;default:n.vertexAttrib1fv(se.location,j)}}}}R()}function _(){D();for(let L in o){let T=o[L];for(let N in T){let z=T[N];for(let W in z)g(z[W].object),delete z[W];delete T[N]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;let T=o[L.id];for(let N in T){let z=T[N];for(let W in z)g(z[W].object),delete z[W];delete T[N]}delete o[L.id]}function I(L){for(let T in o){let N=o[T];if(N[L.id]===void 0)continue;let z=N[L.id];for(let W in z)g(z[W].object),delete z[W];delete N[L.id]}}function D(){U(),u=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:U,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:w,disableUnusedAttributes:R}}function Zw(n,e,t,i){let s=i.isWebGL2,r;function a(u){r=u}function o(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Kw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,w=a||e.has("OES_texture_float"),E=v&&w,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:E,maxSamples:R}}function Jw(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ni,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,y=d.clipIntersection,f=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{let x=r?0:i,v=x*4,w=p.clippingState||null;l.value=w,w=u(g,h,v,m);for(let E=0;E!==v;++E)w[E]=t[E];p.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let y=d!==null?d.length:0,f=null;if(y!==0){if(f=l.value,g!==!0||f===null){let p=m+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,w=m;v!==y;++v,w+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function Qw(n){let e=new WeakMap;function t(a,o){return o===Fd?a.mapping=Sa:o===Bd&&(a.mapping=Ma),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fd||o===Bd)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Xd(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ca=class extends fc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},va=4,Ym=[.125,.215,.35,.446,.526,.582],_r=20,Ed=new Ca,jm=new Pe,Td=null,Rd=0,Cd=0,xr=(1+Math.sqrt(5))/2,ma=1/xr,Zm=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,xr,ma),new k(0,xr,-ma),new k(ma,0,xr),new k(-ma,0,xr),new k(xr,ma,0),new k(-xr,ma,0)],gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Td=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,Rd,Cd),e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sa||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:_o,format:pi,colorSpace:un,depthBuffer:!1},s=Km(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eS(r)),this._blurMaterial=tS(r,e,t)}return s}_compileMaterial(e){let t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ed)}_sceneToCubeUV(e,t,i,s){let o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(jm),u.toneMapping=Hs,u.autoClear=!1;let m=new an({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),g=new wt(new qs,m),y=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,y=!0):(m.color.copy(jm),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;jl(s,x*v,p>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Sa||e.mapping===Ma;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;jl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ed)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zm[(s-1)%Zm.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new wt(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_r-1),y=r/g,f=isFinite(r)?1+Math.floor(u*y):_r;f>_r&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${_r}`);let p=[],x=0;for(let M=0;M<_r;++M){let B=M/y,_=Math.exp(-B*B/2);p.push(_),M===0?x+=_:M<f&&(x+=2*_)}for(let M=0;M<p.length;M++)p[M]=p[M]/x;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let w=this._sizeLods[s],E=3*w*(s>v-va?s-v+va:0),R=4*(this._cubeSize-w);jl(t,E,R,3*w,2*w),l.setRenderTarget(t),l.render(d,Ed)}};function eS(n){let e=[],t=[],i=[],s=n,r=n-va+1+Ym.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-va?l=Ym[a-n+va-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,y=3,f=2,p=1,x=new Float32Array(y*g*m),v=new Float32Array(f*g*m),w=new Float32Array(p*g*m);for(let R=0;R<m;R++){let M=R%3*2/3-1,B=R>2?0:-1,_=[M,B,0,M+2/3,B,0,M+2/3,B+1,0,M,B,0,M+2/3,B+1,0,M,B+1,0];x.set(_,y*g*R),v.set(h,f*g*R);let b=[R,R,R,R,R,R];w.set(b,p*g*R)}let E=new Bn;E.setAttribute("position",new It(x,y)),E.setAttribute("uv",new It(v,f)),E.setAttribute("faceIndex",new It(w,p)),e.push(E),s>va&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Km(n,e,t){let i=new fs(n,e,t);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tS(n,e,t){let i=new Float32Array(_r),s=new k(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Jm(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Qm(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Fd||l===Bd,u=l===Sa||l===Ma;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new gc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new gc(n));let h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function iS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sS(n,e,t,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let f=0,p=y.length;f<p;f++)e.remove(y[f])}h.removeEventListener("dispose",a),delete s[h.id];let m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let y=m[g];for(let f=0,p=y.length;f<p;f++)e.update(y[f],n.ARRAY_BUFFER)}}function c(d){let h=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let x=m.array;y=m.version;for(let v=0,w=x.length;v<w;v+=3){let E=x[v+0],R=x[v+1],M=x[v+2];h.push(E,R,R,M,M,E)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,w=x.length/3-1;v<w;v+=3){let E=v+0,R=v+1,M=v+2;h.push(E,R,R,M,M,E)}}else return;let f=new($g(h)?pc:hc)(h,1);f.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,f)}function u(d){let h=r.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function rS(n,e,t,i){let s=i.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,g){n.drawElements(r,g,o,m*l),t.update(g,r,1)}function d(m,g,y){if(y===0)return;let f,p;if(s)f=n,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,o,m*l,y),t.update(g,r,y)}function h(m,g,y){if(y===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<y;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,y);let p=0;for(let x=0;x<y;x++)p+=g[x];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function aS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function oS(n,e){return n[0]-e[0]}function lS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function cS(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new Mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0,y=r.get(u);if(y===void 0||y.count!==g){let L=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],M=u.morphAttributes.color||[],B=0;x===!0&&(B=1),v===!0&&(B=2),w===!0&&(B=3);let _=u.attributes.position.count*B,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let I=new Float32Array(_*b*4*g),D=new dc(I,_,b,g);D.type=hs,D.needsUpdate=!0;let U=B*4;for(let T=0;T<g;T++){let N=E[T],z=R[T],W=M[T],G=_*b*4*T;for(let K=0;K<N.count;K++){let Q=K*U;x===!0&&(a.fromBufferAttribute(N,K),I[G+Q+0]=a.x,I[G+Q+1]=a.y,I[G+Q+2]=a.z,I[G+Q+3]=0),v===!0&&(a.fromBufferAttribute(z,K),I[G+Q+4]=a.x,I[G+Q+5]=a.y,I[G+Q+6]=a.z,I[G+Q+7]=0),w===!0&&(a.fromBufferAttribute(W,K),I[G+Q+8]=a.x,I[G+Q+9]=a.y,I[G+Q+10]=a.z,I[G+Q+11]=W.itemSize===4?a.w:1)}}y={count:g,texture:D,size:new Ye(_,b)},r.set(u,y),u.addEventListener("dispose",L)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];let p=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",p),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let m=h===void 0?0:h.length,g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<m;v++){let w=g[v];w[0]=v,w[1]=h[v]}g.sort(lS);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(oS);let y=u.morphAttributes.position,f=u.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let w=o[v],E=w[0],R=w[1];E!==Number.MAX_SAFE_INTEGER&&R?(y&&u.getAttribute("morphTarget"+v)!==y[E]&&u.setAttribute("morphTarget"+v,y[E]),f&&u.getAttribute("morphNormal"+v)!==f[E]&&u.setAttribute("morphNormal"+v,f[E]),s[v]=R,p+=R):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),f&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let x=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function uS(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var yc=class extends _n{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:Sr,u!==Sr&&u!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Sr&&(i=Fs),i===void 0&&u===Aa&&(i=wr),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kg=new _n,Jg=new yc(1,1);Jg.compareFunction=Xg;var Qg=new dc,e0=new Wd,t0=new mc,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),sg=new Float32Array(4);function Oa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=eg[s];if(r===void 0&&(r=new Float32Array(s),eg[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oc(n,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function pS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function fS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function mS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;sg.set(i),n.uniformMatrix2fv(this.addr,!1,sg),hn(t,i)}}function gS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;ig.set(i),n.uniformMatrix3fv(this.addr,!1,ig),hn(t,i)}}function yS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;ng.set(i),n.uniformMatrix4fv(this.addr,!1,ng),hn(t,i)}}function vS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function bS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function _S(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function wS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function MS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function AS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function ES(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Jg:Kg;t.setTexture2D(e||r,s)}function TS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||e0,s)}function RS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||t0,s)}function CS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qg,s)}function LS(n){switch(n){case 5126:return dS;case 35664:return hS;case 35665:return pS;case 35666:return fS;case 35674:return mS;case 35675:return gS;case 35676:return yS;case 5124:case 35670:return vS;case 35667:case 35671:return xS;case 35668:case 35672:return bS;case 35669:case 35673:return _S;case 5125:return wS;case 36294:return SS;case 36295:return MS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}function PS(n,e){n.uniform1fv(this.addr,e)}function IS(n,e){let t=Oa(e,this.size,2);n.uniform2fv(this.addr,t)}function NS(n,e){let t=Oa(e,this.size,3);n.uniform3fv(this.addr,t)}function DS(n,e){let t=Oa(e,this.size,4);n.uniform4fv(this.addr,t)}function kS(n,e){let t=Oa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OS(n,e){let t=Oa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function US(n,e){let t=Oa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FS(n,e){n.uniform1iv(this.addr,e)}function BS(n,e){n.uniform2iv(this.addr,e)}function zS(n,e){n.uniform3iv(this.addr,e)}function HS(n,e){n.uniform4iv(this.addr,e)}function VS(n,e){n.uniform1uiv(this.addr,e)}function GS(n,e){n.uniform2uiv(this.addr,e)}function WS(n,e){n.uniform3uiv(this.addr,e)}function qS(n,e){n.uniform4uiv(this.addr,e)}function XS(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Kg,r[a])}function $S(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||e0,r[a])}function YS(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||t0,r[a])}function jS(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Qg,r[a])}function ZS(n){switch(n){case 5126:return PS;case 35664:return IS;case 35665:return NS;case 35666:return DS;case 35674:return kS;case 35675:return OS;case 35676:return US;case 5124:case 35670:return FS;case 35667:case 35671:return BS;case 35668:case 35672:return zS;case 35669:case 35673:return HS;case 5125:return VS;case 36294:return GS;case 36295:return WS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return jS}}var $d=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LS(t.type)}},Yd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZS(t.type)}},jd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Ld=/(\w+)(\])?(\[|\.)?/g;function rg(n,e){n.seq.push(e),n.map[e.id]=e}function KS(n,e,t){let i=n.name,s=i.length;for(Ld.lastIndex=0;;){let r=Ld.exec(i),a=Ld.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rg(t,c===void 0?new $d(o,n,e):new Yd(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new jd(o),rg(t,d)),t=d}}}var wa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);KS(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function ag(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var JS=37297,QS=0;function eM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function tM(n){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n),i;switch(e===t?i="":e===ac&&t===rc?i="LinearDisplayP3ToLinearSRGB":e===rc&&t===ac&&(i="LinearSRGBToLinearDisplayP3"),n){case un:case kc:return[i,"LinearTransferOETF"];case Vt:case wh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function og(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+eM(n.getShaderSource(e),a)}else return s}function nM(n,e){let t=tM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function iM(n,e){let t;switch(e){case ox:t="Linear";break;case lx:t="Reinhard";break;case cx:t="OptimizedCineon";break;case ux:t="ACESFilmic";break;case hx:t="AgX";break;case dx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xa).join(`
`)}function rM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xa).join(`
`)}function aM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xa(n){return n!==""}function lg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(n){return n.replace(lM,uM)}var cM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function uM(n,e){let t=Ke[e];if(t===void 0){let i=cM.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(t)}var dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(n){return n.replace(dM,hM)}function hM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ds&&(e="SHADOWMAP_TYPE_VSM"),e}function fM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sa:case Ma:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ma:e="ENVMAP_MODE_REFRACTION";break}return e}function gM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vh:e="ENVMAP_BLENDING_MULTIPLY";break;case rx:e="ENVMAP_BLENDING_MIX";break;case ax:e="ENVMAP_BLENDING_ADD";break}return e}function yM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vM(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=pM(t),c=fM(t),u=mM(t),d=gM(t),h=yM(t),m=t.isWebGL2?"":sM(t),g=rM(t),y=aM(r),f=s.createProgram(),p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xa).join(`
`),p.length>0&&(p+=`
`),x=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xa).join(`
`),x.length>0&&(x+=`
`)):(p=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),x=[m,dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hs?"#define TONE_MAPPING":"",t.toneMapping!==Hs?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Hs?iM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,nM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=Zd(a),a=lg(a,t),a=cg(a,t),o=Zd(o),o=lg(o,t),o=cg(o,t),a=ug(a),o=ug(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=v+p+a,E=v+x+o,R=ag(s,s.VERTEX_SHADER,w),M=ag(s,s.FRAGMENT_SHADER,E);s.attachShader(f,R),s.attachShader(f,M),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function B(D){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(f).trim(),L=s.getShaderInfoLog(R).trim(),T=s.getShaderInfoLog(M).trim(),N=!0,z=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,R,M);else{let W=og(s,R,"vertex"),G=og(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+W+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||T==="")&&(z=!1);z&&(D.diagnostics={runnable:N,programLog:U,vertexShader:{log:L,prefix:p},fragmentShader:{log:T,prefix:x}})}s.deleteShader(R),s.deleteShader(M),_=new wa(s,f),b=oM(s,f)}let _;this.getUniforms=function(){return _===void 0&&B(this),_};let b;this.getAttributes=function(){return b===void 0&&B(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(f,JS)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QS++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=M,this}var xM=0,Kd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Jd(e),t.set(e,i)),i}},Jd=class{constructor(e){this.id=xM++,this.code=e,this.usedTimes=0}};function bM(n,e,t,i,s,r,a){let o=new So,l=new Kd,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function f(_,b,I,D,U){let L=D.fog,T=U.geometry,N=_.isMeshStandardMaterial?D.environment:null,z=(_.isMeshStandardMaterial?t:e).get(_.envMap||N),W=z&&z.mapping===Nc?z.image.height:null,G=g[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let K=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,Q=K!==void 0?K.length:0,se=0;T.morphAttributes.position!==void 0&&(se=1),T.morphAttributes.normal!==void 0&&(se=2),T.morphAttributes.color!==void 0&&(se=3);let q,j,ne,ee;if(G){let Nn=Ui[G];q=Nn.vertexShader,j=Nn.fragmentShader}else q=_.vertexShader,j=_.fragmentShader,l.update(_),ne=l.getVertexShaderID(_),ee=l.getFragmentShaderID(_);let H=n.getRenderTarget(),oe=U.isInstancedMesh===!0,de=U.isBatchedMesh===!0,_e=!!_.map,Xe=!!_.matcap,X=!!z,nn=!!_.aoMap,Ie=!!_.lightMap,He=!!_.bumpMap,Te=!!_.normalMap,zt=!!_.displacementMap,Qe=!!_.emissiveMap,P=!!_.metalnessMap,S=!!_.roughnessMap,Y=_.anisotropy>0,le=_.clearcoat>0,ae=_.iridescence>0,ue=_.sheen>0,Ce=_.transmission>0,be=Y&&!!_.anisotropyMap,Se=le&&!!_.clearcoatMap,Oe=le&&!!_.clearcoatNormalMap,et=le&&!!_.clearcoatRoughnessMap,re=ae&&!!_.iridescenceMap,bt=ae&&!!_.iridescenceThicknessMap,ot=ue&&!!_.sheenColorMap,Ge=ue&&!!_.sheenRoughnessMap,Ne=!!_.specularMap,Me=!!_.specularColorMap,Ze=!!_.specularIntensityMap,xt=Ce&&!!_.transmissionMap,Xt=Ce&&!!_.thicknessMap,it=!!_.gradientMap,he=!!_.alphaMap,F=_.alphaTest>0,ye=!!_.alphaHash,ve=!!_.extensions,Ue=!!T.attributes.uv1,De=!!T.attributes.uv2,Rt=!!T.attributes.uv3,Ct=Hs;return _.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ct=n.toneMapping),{isWebGL2:u,shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:j,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:de,instancing:oe,instancingColor:oe&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:un,map:_e,matcap:Xe,envMap:X,envMapMode:X&&z.mapping,envMapCubeUVHeight:W,aoMap:nn,lightMap:Ie,bumpMap:He,normalMap:Te,displacementMap:h&&zt,emissiveMap:Qe,normalMapObjectSpace:Te&&_.normalMapType===Ax,normalMapTangentSpace:Te&&_.normalMapType===_h,metalnessMap:P,roughnessMap:S,anisotropy:Y,anisotropyMap:be,clearcoat:le,clearcoatMap:Se,clearcoatNormalMap:Oe,clearcoatRoughnessMap:et,iridescence:ae,iridescenceMap:re,iridescenceThicknessMap:bt,sheen:ue,sheenColorMap:ot,sheenRoughnessMap:Ge,specularMap:Ne,specularColorMap:Me,specularIntensityMap:Ze,transmission:Ce,transmissionMap:xt,thicknessMap:Xt,gradientMap:it,opaque:_.transparent===!1&&_.blending===ba,alphaMap:he,alphaTest:F,alphaHash:ye,combine:_.combine,mapUv:_e&&y(_.map.channel),aoMapUv:nn&&y(_.aoMap.channel),lightMapUv:Ie&&y(_.lightMap.channel),bumpMapUv:He&&y(_.bumpMap.channel),normalMapUv:Te&&y(_.normalMap.channel),displacementMapUv:zt&&y(_.displacementMap.channel),emissiveMapUv:Qe&&y(_.emissiveMap.channel),metalnessMapUv:P&&y(_.metalnessMap.channel),roughnessMapUv:S&&y(_.roughnessMap.channel),anisotropyMapUv:be&&y(_.anisotropyMap.channel),clearcoatMapUv:Se&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(_.sheenRoughnessMap.channel),specularMapUv:Ne&&y(_.specularMap.channel),specularColorMapUv:Me&&y(_.specularColorMap.channel),specularIntensityMapUv:Ze&&y(_.specularIntensityMap.channel),transmissionMapUv:xt&&y(_.transmissionMap.channel),thicknessMapUv:Xt&&y(_.thicknessMap.channel),alphaMapUv:he&&y(_.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(Te||Y),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:De,vertexUv3s:Rt,pointsUvs:U.isPoints===!0&&!!T.attributes.uv&&(_e||he),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,useLegacyLights:n._useLegacyLights,decodeVideoTexture:_e&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===kt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Un,flipSided:_.side===qn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ve&&_.extensions.derivatives===!0,extensionFragDepth:ve&&_.extensions.fragDepth===!0,extensionDrawBuffers:ve&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)b.push(I),b.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(x(b,_),v(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function w(_){let b=g[_.type],I;if(b){let D=Ui[b];I=cb.clone(D.uniforms)}else I=_.uniforms;return I}function E(_,b){let I;for(let D=0,U=c.length;D<U;D++){let L=c[D];if(L.cacheKey===b){I=L,++I.usedTimes;break}}return I===void 0&&(I=new vM(n,b,_,r),c.push(I)),I}function R(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),_.destroy()}}function M(_){l.remove(_)}function B(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:w,acquireProgram:E,releaseProgram:R,releaseShaderCache:M,programs:c,dispose:B}}function _M(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function wM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,h,m,g,y,f){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:f},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=f),e++,p}function o(d,h,m,g,y,f){let p=a(d,h,m,g,y,f);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(d,h,m,g,y,f){let p=a(d,h,m,g,y,f);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||wM),i.length>1&&i.sort(h||hg),s.length>1&&s.sort(h||hg)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function SM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new pg,n.set(i,[a])):s>=r.length?(a=new pg,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function MM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Pe};break;case"SpotLight":t={position:new k,direction:new k,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function AM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var EM=0;function TM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RM(n,e){let t=new MM,i=AM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new k);let r=new k,a=new Ae,o=new Ae;function l(u,d){let h=0,m=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,f=0,p=0,x=0,v=0,w=0,E=0,R=0,M=0,B=0,_=0;u.sort(TM);let b=d===!0?Math.PI:1;for(let D=0,U=u.length;D<U;D++){let L=u[D],T=L.color,N=L.intensity,z=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=T.r*N*b,m+=T.g*N*b,g+=T.b*N*b;else if(L.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(L.sh.coefficients[G],N);_++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let K=L.shadow,Q=i.get(L);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=L.shadow.matrix,w++}s.directional[y]=G,y++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(T).multiplyScalar(N*b),G.distance=z,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,s.spot[p]=G;let K=L.shadow;if(L.map&&(s.spotLightMap[M]=L.map,M++,K.updateMatrices(L),L.castShadow&&B++),s.spotLightMatrix[p]=K.matrix,L.castShadow){let Q=i.get(L);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,s.spotShadow[p]=Q,s.spotShadowMap[p]=W,R++}p++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(T).multiplyScalar(N),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=G,x++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*b),G.distance=L.distance,G.decay=L.decay,L.castShadow){let K=L.shadow,Q=i.get(L);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,s.pointShadow[f]=Q,s.pointShadowMap[f]=W,s.pointShadowMatrix[f]=L.shadow.matrix,E++}s.point[f]=G,f++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(N*b),G.groundColor.copy(L.groundColor).multiplyScalar(N*b),s.hemi[v]=G,v++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=g;let I=s.hash;(I.directionalLength!==y||I.pointLength!==f||I.spotLength!==p||I.rectAreaLength!==x||I.hemiLength!==v||I.numDirectionalShadows!==w||I.numPointShadows!==E||I.numSpotShadows!==R||I.numSpotMaps!==M||I.numLightProbes!==_)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=x,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=R+M-B,s.spotLightMap.length=M,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=_,I.directionalLength=y,I.pointLength=f,I.spotLength=p,I.rectAreaLength=x,I.hemiLength=v,I.numDirectionalShadows=w,I.numPointShadows=E,I.numSpotShadows=R,I.numSpotMaps=M,I.numLightProbes=_,s.version=EM++)}function c(u,d){let h=0,m=0,g=0,y=0,f=0,p=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){let w=u[x];if(w.isDirectionalLight){let E=s.directional[h];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(w.isSpotLight){let E=s.spot[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let E=s.rectArea[y];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(w.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(w.isPointLight){let E=s.point[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),m++}else if(w.isHemisphereLight){let E=s.hemi[f];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:s}}function fg(n,e){let t=new RM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function CM(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new fg(n,e),t.set(r,[l])):a>=o.length?(l=new fg(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Qd=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eh=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},LM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IM(n,e,t){let i=new Mo,s=new Ye,r=new Ye,a=new Mt,o=new Qd({depthPacking:Mx}),l=new eh,c={},u=t.maxTextureSize,d={[Bi]:qn,[qn]:Bi,[Un]:Un},h=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:LM,fragmentShader:PM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Bn;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kg;let p=this.type;this.render=function(R,M,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let _=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),D=n.state;D.setBlending(zs),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=p!==ds&&this.type===ds,L=p===ds&&this.type!==ds;for(let T=0,N=R.length;T<N;T++){let z=R[T],W=z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let G=W.getFrameExtents();if(s.multiply(G),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,W.mapSize.y=r.y)),W.map===null||U===!0||L===!0){let Q=this.type!==ds?{minFilter:cn,magFilter:cn}:{};W.map!==null&&W.map.dispose(),W.map=new fs(s.x,s.y,Q),W.map.texture.name=z.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let K=W.getViewportCount();for(let Q=0;Q<K;Q++){let se=W.getViewport(Q);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),D.viewport(a),W.updateMatrices(z,Q),i=W.getFrustum(),w(M,B,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===ds&&x(W,B),W.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(_,b,I)};function x(R,M){let B=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fs(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(M,null,B,h,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(M,null,B,m,y,null)}function v(R,M,B,_){let b=null,I=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)b=I;else if(b=B.isPointLight===!0?l:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let D=b.uuid,U=M.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let T=L[U];T===void 0&&(T=b.clone(),L[U]=T,M.addEventListener("dispose",E)),b=T}if(b.visible=M.visible,b.wireframe=M.wireframe,_===ds?b.side=M.shadowSide!==null?M.shadowSide:M.side:b.side=M.shadowSide!==null?M.shadowSide:d[M.side],b.alphaMap=M.alphaMap,b.alphaTest=M.alphaTest,b.map=M.map,b.clipShadows=M.clipShadows,b.clippingPlanes=M.clippingPlanes,b.clipIntersection=M.clipIntersection,b.displacementMap=M.displacementMap,b.displacementScale=M.displacementScale,b.displacementBias=M.displacementBias,b.wireframeLinewidth=M.wireframeLinewidth,b.linewidth=M.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let D=n.properties.get(b);D.light=B}return b}function w(R,M,B,_,b){if(R.visible===!1)return;if(R.layers.test(M.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===ds)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);let U=e.update(R),L=R.material;if(Array.isArray(L)){let T=U.groups;for(let N=0,z=T.length;N<z;N++){let W=T[N],G=L[W.materialIndex];if(G&&G.visible){let K=v(R,G,_,b);R.onBeforeShadow(n,R,M,B,U,K,W),n.renderBufferDirect(B,null,U,K,R,W),R.onAfterShadow(n,R,M,B,U,K,W)}}}else if(L.visible){let T=v(R,L,_,b);R.onBeforeShadow(n,R,M,B,U,T,null),n.renderBufferDirect(B,null,U,T,R,null),R.onAfterShadow(n,R,M,B,U,T,null)}}let D=R.children;for(let U=0,L=D.length;U<L;U++)w(D[U],M,B,_,b)}function E(R){R.target.removeEventListener("dispose",E);for(let B in c){let _=c[B],b=R.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function NM(n,e,t){let i=t.isWebGL2;function s(){let F=!1,ye=new Mt,ve=null,Ue=new Mt(0,0,0,0);return{setMask:function(De){ve!==De&&!F&&(n.colorMask(De,De,De,De),ve=De)},setLocked:function(De){F=De},setClear:function(De,Rt,Ct,mn,Nn){Nn===!0&&(De*=mn,Rt*=mn,Ct*=mn),ye.set(De,Rt,Ct,mn),Ue.equals(ye)===!1&&(n.clearColor(De,Rt,Ct,mn),Ue.copy(ye))},reset:function(){F=!1,ve=null,Ue.set(-1,0,0,0)}}}function r(){let F=!1,ye=null,ve=null,Ue=null;return{setTest:function(De){De?de(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(De){ye!==De&&!F&&(n.depthMask(De),ye=De)},setFunc:function(De){if(ve!==De){switch(De){case Jv:n.depthFunc(n.NEVER);break;case Qv:n.depthFunc(n.ALWAYS);break;case ex:n.depthFunc(n.LESS);break;case nc:n.depthFunc(n.LEQUAL);break;case tx:n.depthFunc(n.EQUAL);break;case nx:n.depthFunc(n.GEQUAL);break;case ix:n.depthFunc(n.GREATER);break;case sx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=De}},setLocked:function(De){F=De},setClear:function(De){Ue!==De&&(n.clearDepth(De),Ue=De)},reset:function(){F=!1,ye=null,ve=null,Ue=null}}}function a(){let F=!1,ye=null,ve=null,Ue=null,De=null,Rt=null,Ct=null,mn=null,Nn=null;return{setTest:function(Lt){F||(Lt?de(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Lt){ye!==Lt&&!F&&(n.stencilMask(Lt),ye=Lt)},setFunc:function(Lt,Dn,Oi){(ve!==Lt||Ue!==Dn||De!==Oi)&&(n.stencilFunc(Lt,Dn,Oi),ve=Lt,Ue=Dn,De=Oi)},setOp:function(Lt,Dn,Oi){(Rt!==Lt||Ct!==Dn||mn!==Oi)&&(n.stencilOp(Lt,Dn,Oi),Rt=Lt,Ct=Dn,mn=Oi)},setLocked:function(Lt){F=Lt},setClear:function(Lt){Nn!==Lt&&(n.clearStencil(Lt),Nn=Lt)},reset:function(){F=!1,ye=null,ve=null,Ue=null,De=null,Rt=null,Ct=null,mn=null,Nn=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,y=[],f=null,p=!1,x=null,v=null,w=null,E=null,R=null,M=null,B=null,_=new Pe(0,0,0),b=0,I=!1,D=null,U=null,L=null,T=null,N=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,G=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=G>=2);let Q=null,se={},q=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),ne=new Mt().fromArray(q),ee=new Mt().fromArray(j);function H(F,ye,ve,Ue){let De=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(F,Rt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<ve;Ct++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(ye,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(ye+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Rt}let oe={};oe[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(n.DEPTH_TEST),l.setFunc(nc),Qe(!1),P(Yf),de(n.CULL_FACE),Te(zs);function de(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function _e(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Xe(F,ye){return m[F]!==ye?(n.bindFramebuffer(F,ye),m[F]=ye,i&&(F===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ye),F===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ye)),!0):!1}function X(F,ye){let ve=y,Ue=!1;if(F)if(ve=g.get(ye),ve===void 0&&(ve=[],g.set(ye,ve)),F.isWebGLMultipleRenderTargets){let De=F.texture;if(ve.length!==De.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Ct=De.length;Rt<Ct;Rt++)ve[Rt]=n.COLOR_ATTACHMENT0+Rt;ve.length=De.length,Ue=!0}}else ve[0]!==n.COLOR_ATTACHMENT0&&(ve[0]=n.COLOR_ATTACHMENT0,Ue=!0);else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function nn(F){return f!==F?(n.useProgram(F),f=F,!0):!1}let Ie={[br]:n.FUNC_ADD,[Uv]:n.FUNC_SUBTRACT,[Fv]:n.FUNC_REVERSE_SUBTRACT};if(i)Ie[Jf]=n.MIN,Ie[Qf]=n.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(Ie[Jf]=F.MIN_EXT,Ie[Qf]=F.MAX_EXT)}let He={[Bv]:n.ZERO,[zv]:n.ONE,[Hv]:n.SRC_COLOR,[Od]:n.SRC_ALPHA,[$v]:n.SRC_ALPHA_SATURATE,[qv]:n.DST_COLOR,[Gv]:n.DST_ALPHA,[Vv]:n.ONE_MINUS_SRC_COLOR,[Ud]:n.ONE_MINUS_SRC_ALPHA,[Xv]:n.ONE_MINUS_DST_COLOR,[Wv]:n.ONE_MINUS_DST_ALPHA,[Yv]:n.CONSTANT_COLOR,[jv]:n.ONE_MINUS_CONSTANT_COLOR,[Zv]:n.CONSTANT_ALPHA,[Kv]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(F,ye,ve,Ue,De,Rt,Ct,mn,Nn,Lt){if(F===zs){p===!0&&(_e(n.BLEND),p=!1);return}if(p===!1&&(de(n.BLEND),p=!0),F!==Ov){if(F!==x||Lt!==I){if((v!==br||R!==br)&&(n.blendEquation(n.FUNC_ADD),v=br,R=br),Lt)switch(F){case ba:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.ONE,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,E=null,M=null,B=null,_.set(0,0,0),b=0,x=F,I=Lt}return}De=De||ye,Rt=Rt||ve,Ct=Ct||Ue,(ye!==v||De!==R)&&(n.blendEquationSeparate(Ie[ye],Ie[De]),v=ye,R=De),(ve!==w||Ue!==E||Rt!==M||Ct!==B)&&(n.blendFuncSeparate(He[ve],He[Ue],He[Rt],He[Ct]),w=ve,E=Ue,M=Rt,B=Ct),(mn.equals(_)===!1||Nn!==b)&&(n.blendColor(mn.r,mn.g,mn.b,Nn),_.copy(mn),b=Nn),x=F,I=!1}function zt(F,ye){F.side===Un?_e(n.CULL_FACE):de(n.CULL_FACE);let ve=F.side===qn;ye&&(ve=!ve),Qe(ve),F.blending===ba&&F.transparent===!1?Te(zs):Te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);let Ue=F.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(F){D!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),D=F)}function P(F){F!==Nv?(de(n.CULL_FACE),F!==U&&(F===Yf?n.cullFace(n.BACK):F===Dv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),U=F}function S(F){F!==L&&(W&&n.lineWidth(F),L=F)}function Y(F,ye,ve){F?(de(n.POLYGON_OFFSET_FILL),(T!==ye||N!==ve)&&(n.polygonOffset(ye,ve),T=ye,N=ve)):_e(n.POLYGON_OFFSET_FILL)}function le(F){F?de(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function ae(F){F===void 0&&(F=n.TEXTURE0+z-1),Q!==F&&(n.activeTexture(F),Q=F)}function ue(F,ye,ve){ve===void 0&&(Q===null?ve=n.TEXTURE0+z-1:ve=Q);let Ue=se[ve];Ue===void 0&&(Ue={type:void 0,texture:void 0},se[ve]=Ue),(Ue.type!==F||Ue.texture!==ye)&&(Q!==ve&&(n.activeTexture(ve),Q=ve),n.bindTexture(F,ye||oe[F]),Ue.type=F,Ue.texture=ye)}function Ce(){let F=se[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function be(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(F){ne.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ne.copy(F))}function xt(F){ee.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Xt(F,ye){let ve=d.get(ye);ve===void 0&&(ve=new WeakMap,d.set(ye,ve));let Ue=ve.get(F);Ue===void 0&&(Ue=n.getUniformBlockIndex(ye,F.name),ve.set(F,Ue))}function it(F,ye){let Ue=d.get(ye).get(F);u.get(ye)!==Ue&&(n.uniformBlockBinding(ye,Ue,F.__bindingPointIndex),u.set(ye,Ue))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,se={},m={},g=new WeakMap,y=[],f=null,p=!1,x=null,v=null,w=null,E=null,R=null,M=null,B=null,_=new Pe(0,0,0),b=0,I=!1,D=null,U=null,L=null,T=null,N=null,ne.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:de,disable:_e,bindFramebuffer:Xe,drawBuffers:X,useProgram:nn,setBlending:Te,setMaterial:zt,setFlipSided:Qe,setCullFace:P,setLineWidth:S,setPolygonOffset:Y,setScissorTest:le,activeTexture:ae,bindTexture:ue,unbindTexture:Ce,compressedTexImage2D:be,compressedTexImage3D:Se,texImage2D:Ne,texImage3D:Me,updateUBOMapping:Xt,uniformBlockBinding:it,texStorage2D:ot,texStorage3D:Ge,texSubImage2D:Oe,texSubImage3D:et,compressedTexSubImage2D:re,compressedTexSubImage3D:bt,scissor:Ze,viewport:xt,reset:he}}function DM(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return m?new OffscreenCanvas(P,S):wo("canvas")}function y(P,S,Y,le){let ae=1;if((P.width>le||P.height>le)&&(ae=le/Math.max(P.width,P.height)),ae<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let ue=S?lc:Math.floor,Ce=ue(ae*P.width),be=ue(ae*P.height);d===void 0&&(d=g(Ce,be));let Se=Y?g(Ce,be):d;return Se.width=Ce,Se.height=be,Se.getContext("2d").drawImage(P,0,0,Ce,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ce+"x"+be+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function f(P){return Vd(P.width)&&Vd(P.height)}function p(P){return o?!1:P.wrapS!==ii||P.wrapT!==ii||P.minFilter!==cn&&P.minFilter!==rn}function x(P,S){return P.generateMipmaps&&S&&P.minFilter!==cn&&P.minFilter!==rn}function v(P){n.generateMipmap(P)}function w(P,S,Y,le,ae=!1){if(o===!1)return S;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=S;if(S===n.RED&&(Y===n.FLOAT&&(ue=n.R32F),Y===n.HALF_FLOAT&&(ue=n.R16F),Y===n.UNSIGNED_BYTE&&(ue=n.R8)),S===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ue=n.R8UI),Y===n.UNSIGNED_SHORT&&(ue=n.R16UI),Y===n.UNSIGNED_INT&&(ue=n.R32UI),Y===n.BYTE&&(ue=n.R8I),Y===n.SHORT&&(ue=n.R16I),Y===n.INT&&(ue=n.R32I)),S===n.RG&&(Y===n.FLOAT&&(ue=n.RG32F),Y===n.HALF_FLOAT&&(ue=n.RG16F),Y===n.UNSIGNED_BYTE&&(ue=n.RG8)),S===n.RGBA){let Ce=ae?sc:mt.getTransfer(le);Y===n.FLOAT&&(ue=n.RGBA32F),Y===n.HALF_FLOAT&&(ue=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ue=Ce===kt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function E(P,S,Y){return x(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function R(P){return P===cn||P===ic||P===mo?n.NEAREST:n.LINEAR}function M(P){let S=P.target;S.removeEventListener("dispose",M),_(S),S.isVideoTexture&&u.delete(S)}function B(P){let S=P.target;S.removeEventListener("dispose",B),I(S)}function _(P){let S=i.get(P);if(S.__webglInit===void 0)return;let Y=P.source,le=h.get(Y);if(le){let ae=le[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(P),Object.keys(le).length===0&&h.delete(Y)}i.remove(P)}function b(P){let S=i.get(P);n.deleteTexture(S.__webglTexture);let Y=P.source,le=h.get(Y);delete le[S.__cacheKey],a.memory.textures--}function I(P){let S=P.texture,Y=i.get(P),le=i.get(S);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(Y.__webglFramebuffer[ae]))for(let ue=0;ue<Y.__webglFramebuffer[ae].length;ue++)n.deleteFramebuffer(Y.__webglFramebuffer[ae][ue]);else n.deleteFramebuffer(Y.__webglFramebuffer[ae]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[ae])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ae=0;ae<Y.__webglFramebuffer.length;ae++)n.deleteFramebuffer(Y.__webglFramebuffer[ae]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,ue=S.length;ae<ue;ae++){let Ce=i.get(S[ae]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),a.memory.textures--),i.remove(S[ae])}i.remove(S),i.remove(P)}let D=0;function U(){D=0}function L(){let P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function T(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function N(P,S){let Y=i.get(P);if(P.isVideoTexture&&zt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){let le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Y,P,S);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+S)}function z(P,S){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+S)}function W(P,S){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,S);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+S)}function G(P,S){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ee(Y,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+S)}let K={[Ar]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[bo]:n.MIRRORED_REPEAT},Q={[cn]:n.NEAREST,[ic]:n.NEAREST_MIPMAP_NEAREST,[mo]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[xh]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},se={[Ex]:n.NEVER,[Ix]:n.ALWAYS,[Tx]:n.LESS,[Xg]:n.LEQUAL,[Rx]:n.EQUAL,[Px]:n.GEQUAL,[Cx]:n.GREATER,[Lx]:n.NOTEQUAL};function q(P,S,Y){if(Y?(n.texParameteri(P,n.TEXTURE_WRAP_S,K[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,K[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,K[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Q[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Q[S.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==ii||S.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,R(S.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==cn&&S.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===cn||S.minFilter!==mo&&S.minFilter!==Gs||S.type===hs&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===_o&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function j(P,S){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",M));let le=S.source,ae=h.get(le);ae===void 0&&(ae={},h.set(le,ae));let ue=T(S);if(ue!==P.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[ue].usedTimes++;let Ce=ae[P.__cacheKey];Ce!==void 0&&(ae[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(S)),P.__cacheKey=ue,P.__webglTexture=ae[ue].texture}return Y}function ne(P,S,Y){let le=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(le=n.TEXTURE_3D);let ae=j(P,S),ue=S.source;t.bindTexture(le,P.__webglTexture,n.TEXTURE0+Y);let Ce=i.get(ue);if(ue.version!==Ce.__version||ae===!0){t.activeTexture(n.TEXTURE0+Y);let be=mt.getPrimaries(mt.workingColorSpace),Se=S.colorSpace===fi?null:mt.getPrimaries(S.colorSpace),Oe=S.colorSpace===fi||be===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let et=p(S)&&f(S.image)===!1,re=y(S.image,et,!1,s.maxTextureSize);re=Qe(S,re);let bt=f(re)||o,ot=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type),Ne=w(S.internalFormat,ot,Ge,S.colorSpace,S.isVideoTexture);q(le,S,bt);let Me,Ze=S.mipmaps,xt=o&&S.isVideoTexture!==!0&&Ne!==Gg,Xt=Ce.__version===void 0||ae===!0,it=E(S,re,bt);if(S.isDepthTexture)Ne=n.DEPTH_COMPONENT,o?S.type===hs?Ne=n.DEPTH_COMPONENT32F:S.type===Fs?Ne=n.DEPTH_COMPONENT24:S.type===wr?Ne=n.DEPTH24_STENCIL8:Ne=n.DEPTH_COMPONENT16:S.type===hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Sr&&Ne===n.DEPTH_COMPONENT&&S.type!==bh&&S.type!==Fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Fs,Ge=r.convert(S.type)),S.format===Aa&&Ne===n.DEPTH_COMPONENT&&(Ne=n.DEPTH_STENCIL,S.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wr,Ge=r.convert(S.type))),Xt&&(xt?t.texStorage2D(n.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,ot,Ge,null));else if(S.isDataTexture)if(Ze.length>0&&bt){xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,it,Ne,Ze[0].width,Ze[0].height);for(let he=0,F=Ze.length;he<F;he++)Me=Ze[he],xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,ot,Ge,Me.data):t.texImage2D(n.TEXTURE_2D,he,Ne,Me.width,Me.height,0,ot,Ge,Me.data);S.generateMipmaps=!1}else xt?(Xt&&t.texStorage2D(n.TEXTURE_2D,it,Ne,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,ot,Ge,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,ot,Ge,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xt&&Xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,Ne,Ze[0].width,Ze[0].height,re.depth);for(let he=0,F=Ze.length;he<F;he++)Me=Ze[he],S.format!==pi?ot!==null?xt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,re.depth,ot,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ne,Me.width,Me.height,re.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,re.depth,ot,Ge,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ne,Me.width,Me.height,re.depth,0,ot,Ge,Me.data)}else{xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,it,Ne,Ze[0].width,Ze[0].height);for(let he=0,F=Ze.length;he<F;he++)Me=Ze[he],S.format!==pi?ot!==null?xt?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,ot,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,ot,Ge,Me.data):t.texImage2D(n.TEXTURE_2D,he,Ne,Me.width,Me.height,0,ot,Ge,Me.data)}else if(S.isDataArrayTexture)xt?(Xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,Ne,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ot,Ge,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,ot,Ge,re.data);else if(S.isData3DTexture)xt?(Xt&&t.texStorage3D(n.TEXTURE_3D,it,Ne,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ot,Ge,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,ot,Ge,re.data);else if(S.isFramebufferTexture){if(Xt)if(xt)t.texStorage2D(n.TEXTURE_2D,it,Ne,re.width,re.height);else{let he=re.width,F=re.height;for(let ye=0;ye<it;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ne,he,F,0,ot,Ge,null),he>>=1,F>>=1}}else if(Ze.length>0&&bt){xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,it,Ne,Ze[0].width,Ze[0].height);for(let he=0,F=Ze.length;he<F;he++)Me=Ze[he],xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,ot,Ge,Me):t.texImage2D(n.TEXTURE_2D,he,Ne,ot,Ge,Me);S.generateMipmaps=!1}else xt?(Xt&&t.texStorage2D(n.TEXTURE_2D,it,Ne,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Ge,re)):t.texImage2D(n.TEXTURE_2D,0,Ne,ot,Ge,re);x(S,bt)&&v(le),Ce.__version=ue.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ee(P,S,Y){if(S.image.length!==6)return;let le=j(P,S),ae=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);let ue=i.get(ae);if(ae.version!==ue.__version||le===!0){t.activeTexture(n.TEXTURE0+Y);let Ce=mt.getPrimaries(mt.workingColorSpace),be=S.colorSpace===fi?null:mt.getPrimaries(S.colorSpace),Se=S.colorSpace===fi||Ce===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,re=[];for(let he=0;he<6;he++)!Oe&&!et?re[he]=y(S.image[he],!1,!0,s.maxCubemapSize):re[he]=et?S.image[he].image:S.image[he],re[he]=Qe(S,re[he]);let bt=re[0],ot=f(bt)||o,Ge=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),Me=w(S.internalFormat,Ge,Ne,S.colorSpace),Ze=o&&S.isVideoTexture!==!0,xt=ue.__version===void 0||le===!0,Xt=E(S,bt,ot);q(n.TEXTURE_CUBE_MAP,S,ot);let it;if(Oe){Ze&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Me,bt.width,bt.height);for(let he=0;he<6;he++){it=re[he].mipmaps;for(let F=0;F<it.length;F++){let ye=it[F];S.format!==pi?Ge!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F,0,0,ye.width,ye.height,Ge,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F,Me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F,0,0,ye.width,ye.height,Ge,Ne,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F,Me,ye.width,ye.height,0,Ge,Ne,ye.data)}}}else{it=S.mipmaps,Ze&&xt&&(it.length>0&&Xt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Me,re[0].width,re[0].height));for(let he=0;he<6;he++)if(et){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,re[he].width,re[he].height,Ge,Ne,re[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Me,re[he].width,re[he].height,0,Ge,Ne,re[he].data);for(let F=0;F<it.length;F++){let ve=it[F].image[he].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F+1,0,0,ve.width,ve.height,Ge,Ne,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F+1,Me,ve.width,ve.height,0,Ge,Ne,ve.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ge,Ne,re[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Me,Ge,Ne,re[he]);for(let F=0;F<it.length;F++){let ye=it[F];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F+1,0,0,Ge,Ne,ye.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F+1,Me,Ge,Ne,ye.image[he])}}}x(S,ot)&&v(n.TEXTURE_CUBE_MAP),ue.__version=ae.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function H(P,S,Y,le,ae,ue){let Ce=r.convert(Y.format,Y.colorSpace),be=r.convert(Y.type),Se=w(Y.internalFormat,Ce,be,Y.colorSpace);if(!i.get(S).__hasExternalTextures){let et=Math.max(1,S.width>>ue),re=Math.max(1,S.height>>ue);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ue,Se,et,re,S.depth,0,Ce,be,null):t.texImage2D(ae,ue,Se,et,re,0,Ce,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Te(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ae,i.get(Y).__webglTexture,0,He(S)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,ae,i.get(Y).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(P,S,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let le=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||Te(S)){let ae=S.depthTexture;ae&&ae.isDepthTexture&&(ae.type===hs?le=n.DEPTH_COMPONENT32F:ae.type===Fs&&(le=n.DEPTH_COMPONENT24));let ue=He(S);Te(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,le,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,le,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){let le=He(S);Y&&Te(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,S.width,S.height):Te(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{let le=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ae=0;ae<le.length;ae++){let ue=le[ae],Ce=r.convert(ue.format,ue.colorSpace),be=r.convert(ue.type),Se=w(ue.internalFormat,Ce,be,ue.colorSpace),Oe=He(S);Y&&Te(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Se,S.width,S.height):Te(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Se,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Se,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let le=i.get(S.depthTexture).__webglTexture,ae=He(S);if(S.depthTexture.format===Sr)Te(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(S.depthTexture.format===Aa)Te(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function _e(P){let S=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");de(S.__webglFramebuffer,P)}else if(Y){S.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[le]),S.__webglDepthbuffer[le]=n.createRenderbuffer(),oe(S.__webglDepthbuffer[le],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),oe(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(P,S,Y){let le=i.get(P);S!==void 0&&H(le.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&_e(P)}function X(P){let S=P.texture,Y=i.get(P),le=i.get(S);P.addEventListener("dispose",B),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=S.version,a.memory.textures++);let ae=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Ce=f(P)||o;if(ae){Y.__webglFramebuffer=[];for(let be=0;be<6;be++)if(o&&S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[be]=[];for(let Se=0;Se<S.mipmaps.length;Se++)Y.__webglFramebuffer[be][Se]=n.createFramebuffer()}else Y.__webglFramebuffer[be]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)Y.__webglFramebuffer[be]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ue)if(s.drawBuffers){let be=P.texture;for(let Se=0,Oe=be.length;Se<Oe;Se++){let et=i.get(be[Se]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Te(P)===!1){let be=ue?S:[S];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Se=0;Se<be.length;Se++){let Oe=be[Se];Y.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Se]);let et=r.convert(Oe.format,Oe.colorSpace),re=r.convert(Oe.type),bt=w(Oe.internalFormat,et,re,Oe.colorSpace,P.isXRRenderTarget===!0),ot=He(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,bt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),q(n.TEXTURE_CUBE_MAP,S,Ce);for(let be=0;be<6;be++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)H(Y.__webglFramebuffer[be][Se],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Se);else H(Y.__webglFramebuffer[be],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(S,Ce)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){let be=P.texture;for(let Se=0,Oe=be.length;Se<Oe;Se++){let et=be[Se],re=i.get(et);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),q(n.TEXTURE_2D,et,Ce),H(Y.__webglFramebuffer,P,et,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),x(et,Ce)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?be=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,le.__webglTexture),q(be,S,Ce),o&&S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)H(Y.__webglFramebuffer[Se],P,S,n.COLOR_ATTACHMENT0,be,Se);else H(Y.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,be,0);x(S,Ce)&&v(be),t.unbindTexture()}P.depthBuffer&&_e(P)}function nn(P){let S=f(P)||o,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,ae=Y.length;le<ae;le++){let ue=Y[le];if(x(ue,S)){let Ce=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(ue).__webglTexture;t.bindTexture(Ce,be),v(Ce),t.unbindTexture()}}}function Ie(P){if(o&&P.samples>0&&Te(P)===!1){let S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,le=P.height,ae=n.COLOR_BUFFER_BIT,ue=[],Ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(P),Se=P.isWebGLMultipleRenderTargets===!0;if(Se)for(let Oe=0;Oe<S.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Oe=0;Oe<S.length;Oe++){ue.push(n.COLOR_ATTACHMENT0+Oe),P.depthBuffer&&ue.push(Ce);let et=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(et===!1&&(P.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Oe]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Se){let re=i.get(S[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,Y,le,0,0,Y,le,ae,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Oe=0;Oe<S.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,be.__webglColorRenderbuffer[Oe]);let et=i.get(S[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function He(P){return Math.min(s.maxSamples,P.samples)}function Te(P){let S=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function zt(P){let S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Qe(P,S){let Y=P.colorSpace,le=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Hd||Y!==un&&Y!==fi&&(mt.getTransfer(Y)===kt?o===!1?e.has("EXT_sRGB")===!0&&le===pi?(P.format=Hd,P.minFilter=rn,P.generateMipmaps=!1):S=cc.sRGBToLinear(S):(le!==pi||ae!==Vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=Xe,this.setupRenderTarget=X,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Te}function kM(n,e,t){let i=t.isWebGL2;function s(r,a=fi){let o,l=mt.getTransfer(a);if(r===Vs)return n.UNSIGNED_BYTE;if(r===Fg)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Bg)return n.UNSIGNED_SHORT_5_5_5_1;if(r===fx)return n.BYTE;if(r===mx)return n.SHORT;if(r===bh)return n.UNSIGNED_SHORT;if(r===Ug)return n.INT;if(r===Fs)return n.UNSIGNED_INT;if(r===hs)return n.FLOAT;if(r===_o)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===gx)return n.ALPHA;if(r===pi)return n.RGBA;if(r===yx)return n.LUMINANCE;if(r===vx)return n.LUMINANCE_ALPHA;if(r===Sr)return n.DEPTH_COMPONENT;if(r===Aa)return n.DEPTH_STENCIL;if(r===Hd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===xx)return n.RED;if(r===zg)return n.RED_INTEGER;if(r===bx)return n.RG;if(r===Hg)return n.RG_INTEGER;if(r===Vg)return n.RGBA_INTEGER;if(r===id||r===sd||r===rd||r===ad)if(l===kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===id)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sd)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rd)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ad)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===id)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sd)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rd)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ad)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tm||r===nm||r===im||r===sm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===im)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===rm||r===am)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===rm)return l===kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===am)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===om||r===lm||r===cm||r===um||r===dm||r===hm||r===pm||r===fm||r===mm||r===gm||r===ym||r===vm||r===xm||r===bm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===om)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===um)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ym)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===od||r===_m||r===wm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===od)return l===kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_m)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_x||r===Sm||r===Mm||r===Am)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===od)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Sm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Am)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var th=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},En=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},OM={type:"move"},xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,i),p=this._getHandJoint(c,y);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new En;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},nh=class extends Ws{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null,y=t.getContextAttributes(),f=null,p=null,x=[],v=[],w=new Ye,E=null,R=new Gt;R.layers.enable(1),R.viewport=new Mt;let M=new Gt;M.layers.enable(2),M.viewport=new Mt;let B=[R,M],_=new th;_.layers.enable(1),_.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=x[q];return j===void 0&&(j=new xo,x[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=x[q];return j===void 0&&(j=new xo,x[q]=j),j.getGripSpace()},this.getHand=function(q){let j=x[q];return j===void 0&&(j=new xo,x[q]=j),j.getHandSpace()};function D(q){let j=v.indexOf(q.inputSource);if(j===-1)return;let ne=x[j];ne!==void 0&&(ne.update(q.inputSource,q.frame,c||a),ne.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",L);for(let q=0;q<x.length;q++){let j=v[q];j!==null&&(v[q]=null,x[q].disconnect(j))}b=null,I=null,e.setRenderTarget(f),m=null,h=null,d=null,s=null,p=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new fs(m.framebufferWidth,m.framebufferHeight,{format:pi,type:Vs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,ne=null,ee=null;y.depth&&(ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?Aa:Sr,ne=y.stencil?wr:Fs);let H={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(H),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new fs(h.textureWidth,h.textureHeight,{format:pi,type:Vs,depthTexture:new yc(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let oe=e.properties.get(p);oe.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let j=0;j<q.removed.length;j++){let ne=q.removed[j],ee=v.indexOf(ne);ee>=0&&(v[ee]=null,x[ee].disconnect(ne))}for(let j=0;j<q.added.length;j++){let ne=q.added[j],ee=v.indexOf(ne);if(ee===-1){for(let oe=0;oe<x.length;oe++)if(oe>=v.length){v.push(ne),ee=oe;break}else if(v[oe]===null){v[oe]=ne,ee=oe;break}if(ee===-1)break}let H=x[ee];H&&H.connect(ne)}}let T=new k,N=new k;function z(q,j,ne){T.setFromMatrixPosition(j.matrixWorld),N.setFromMatrixPosition(ne.matrixWorld);let ee=T.distanceTo(N),H=j.projectionMatrix.elements,oe=ne.projectionMatrix.elements,de=H[14]/(H[10]-1),_e=H[14]/(H[10]+1),Xe=(H[9]+1)/H[5],X=(H[9]-1)/H[5],nn=(H[8]-1)/H[0],Ie=(oe[8]+1)/oe[0],He=de*nn,Te=de*Ie,zt=ee/(-nn+Ie),Qe=zt*-nn;j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qe),q.translateZ(zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let P=de+zt,S=_e+zt,Y=He-Qe,le=Te+(ee-Qe),ae=Xe*_e/S*P,ue=X*_e/S*P;q.projectionMatrix.makePerspective(Y,le,ae,ue,P,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function W(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;_.near=M.near=R.near=q.near,_.far=M.far=R.far=q.far,(b!==_.near||I!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,I=_.far);let j=q.parent,ne=_.cameras;W(_,j);for(let ee=0;ee<ne.length;ee++)W(ne[ee],j);ne.length===2?z(_,R,M):_.projectionMatrix.copy(R.projectionMatrix),G(q,_,j)};function G(q,j,ne){ne===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ne.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ta*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let K=null;function Q(q,j){if(u=j.getViewerPose(c||a),g=j,u!==null){let ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let ee=!1;ne.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let H=0;H<ne.length;H++){let oe=ne[H],de=null;if(m!==null)de=m.getViewport(oe);else{let Xe=d.getViewSubImage(h,oe);de=Xe.viewport,H===0&&(e.setRenderTargetTextures(p,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(p))}let _e=B[H];_e===void 0&&(_e=new Gt,_e.layers.enable(H),_e.viewport=new Mt,B[H]=_e),_e.matrix.fromArray(oe.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(oe.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(de.x,de.y,de.width,de.height),H===0&&(_.matrix.copy(_e.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ee===!0&&_.cameras.push(_e)}}for(let ne=0;ne<x.length;ne++){let ee=v[ne],H=x[ne];ee!==null&&H!==void 0&&H.update(ee,j,c||a)}K&&K(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let se=new Zg;se.setAnimationLoop(Q),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}};function UM(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,jg(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,x,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,w)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),y(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,x,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===qn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===qn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,x,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=v*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function y(f,p){let x=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FM(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){let w=v.program;i.uniformBlockBinding(x,w)}function c(x,v){let w=s[x.id];w===void 0&&(g(x),w=u(x),s[x.id]=w,x.addEventListener("dispose",f));let E=v.program;i.updateUBOMapping(x,E);let R=e.render.frame;r[x.id]!==R&&(h(x),r[x.id]=R)}function u(x){let v=d();x.__bindingPointIndex=v;let w=n.createBuffer(),E=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let v=s[x.id],w=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,M=w.length;R<M;R++){let B=Array.isArray(w[R])?w[R]:[w[R]];for(let _=0,b=B.length;_<b;_++){let I=B[_];if(m(I,R,_,E)===!0){let D=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],L=0;for(let T=0;T<U.length;T++){let N=U[T],z=y(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,D+L,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,L),L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,v,w,E){let R=x.value,M=v+"_"+w;if(E[M]===void 0)return typeof R=="number"||typeof R=="boolean"?E[M]=R:E[M]=R.clone(),!0;{let B=E[M];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return E[M]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(x){let v=x.uniforms,w=0,E=16;for(let M=0,B=v.length;M<B;M++){let _=Array.isArray(v[M])?v[M]:[v[M]];for(let b=0,I=_.length;b<I;b++){let D=_[b],U=Array.isArray(D.value)?D.value:[D.value];for(let L=0,T=U.length;L<T;L++){let N=U[L],z=y(N),W=w%E;W!==0&&E-W<z.boundary&&(w+=E-W),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=z.storage}}}let R=w%E;return R>0&&(w+=E-R),x.__size=w,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function f(x){let v=x.target;v.removeEventListener("dispose",f);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Rr=class{constructor(e={}){let{canvas:t=$x(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let m=new Uint32Array(4),g=new Int32Array(4),y=null,f=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Hs,this.toneMappingExposure=1;let v=this,w=!1,E=0,R=0,M=null,B=-1,_=null,b=new Mt,I=new Mt,D=null,U=new Pe(0),L=0,T=t.width,N=t.height,z=1,W=null,G=null,K=new Mt(0,0,T,N),Q=new Mt(0,0,T,N),se=!1,q=new Mo,j=!1,ne=!1,ee=null,H=new Ae,oe=new Ye,de=new k,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return M===null?z:1}let X=i;function nn(C,V){for(let Z=0;Z<C.length;Z++){let J=C[Z],$=t.getContext(J,V);if($!==null)return $}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ye,!1),X===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),X=nn(V,C),X===null)throw nn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ie,He,Te,zt,Qe,P,S,Y,le,ae,ue,Ce,be,Se,Oe,et,re,bt,ot,Ge,Ne,Me,Ze,xt;function Xt(){Ie=new iS(X),He=new Kw(X,Ie,e),Ie.init(He),Me=new kM(X,Ie,He),Te=new NM(X,Ie,He),zt=new aS(X),Qe=new _M,P=new DM(X,Ie,Te,Qe,He,Me,zt),S=new Qw(v),Y=new nS(v),le=new fb(X,He),Ze=new jw(X,Ie,le,He),ae=new sS(X,le,zt,Ze),ue=new uS(X,ae,le,zt),ot=new cS(X,He,P),et=new Jw(Qe),Ce=new bM(v,S,Y,Ie,He,Ze,et),be=new UM(v,Qe),Se=new SM,Oe=new CM(Ie,He),bt=new Yw(v,S,Y,Te,ue,h,l),re=new IM(v,ue,He),xt=new FM(X,zt,He,Te),Ge=new Zw(X,Ie,zt,He),Ne=new rS(X,Ie,zt,He),zt.programs=Ce.programs,v.capabilities=He,v.extensions=Ie,v.properties=Qe,v.renderLists=Se,v.shadowMap=re,v.state=Te,v.info=zt}Xt();let it=new nh(v,X);this.xr=it,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=Ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(T,N,!1))},this.getSize=function(C){return C.set(T,N)},this.setSize=function(C,V,Z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=C,N=V,t.width=Math.floor(C*z),t.height=Math.floor(V*z),Z===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(T*z,N*z).floor()},this.setDrawingBufferSize=function(C,V,Z){T=C,N=V,z=Z,t.width=Math.floor(C*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,V,Z,J){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,V,Z,J),Te.viewport(b.copy(K).multiplyScalar(z).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,V,Z,J){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,V,Z,J),Te.scissor(I.copy(Q).multiplyScalar(z).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){Te.setScissorTest(se=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(C=!0,V=!0,Z=!0){let J=0;if(C){let $=!1;if(M!==null){let we=M.texture.format;$=we===Vg||we===Hg||we===zg}if($){let we=M.texture.type,Le=we===Vs||we===Fs||we===bh||we===wr||we===Fg||we===Bg,ke=bt.getClearColor(),Be=bt.getClearAlpha(),tt=ke.r,We=ke.g,$e=ke.b;Le?(m[0]=tt,m[1]=We,m[2]=$e,m[3]=Be,X.clearBufferuiv(X.COLOR,0,m)):(g[0]=tt,g[1]=We,g[2]=$e,g[3]=Be,X.clearBufferiv(X.COLOR,0,g))}else J|=X.COLOR_BUFFER_BIT}V&&(J|=X.DEPTH_BUFFER_BIT),Z&&(J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Se.dispose(),Oe.dispose(),Qe.dispose(),S.dispose(),Y.dispose(),ue.dispose(),Ze.dispose(),xt.dispose(),Ce.dispose(),it.dispose(),it.removeEventListener("sessionstart",Nn),it.removeEventListener("sessionend",Lt),ee&&(ee.dispose(),ee=null),Dn.stop()};function he(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let C=zt.autoReset,V=re.enabled,Z=re.autoUpdate,J=re.needsUpdate,$=re.type;Xt(),zt.autoReset=C,re.enabled=V,re.autoUpdate=Z,re.needsUpdate=J,re.type=$}function ye(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){let V=C.target;V.removeEventListener("dispose",ve),Ue(V)}function Ue(C){De(C),Qe.remove(C)}function De(C){let V=Qe.get(C).programs;V!==void 0&&(V.forEach(function(Z){Ce.releaseProgram(Z)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Z,J,$,we){V===null&&(V=_e);let Le=$.isMesh&&$.matrixWorld.determinant()<0,ke=Cv(C,V,Z,J,$);Te.setMaterial(J,Le);let Be=Z.index,tt=1;if(J.wireframe===!0){if(Be=ae.getWireframeAttribute(Z),Be===void 0)return;tt=2}let We=Z.drawRange,$e=Z.attributes.position,Zt=We.start*tt,Qn=(We.start+We.count)*tt;we!==null&&(Zt=Math.max(Zt,we.start*tt),Qn=Math.min(Qn,(we.start+we.count)*tt)),Be!==null?(Zt=Math.max(Zt,0),Qn=Math.min(Qn,Be.count)):$e!=null&&(Zt=Math.max(Zt,0),Qn=Math.min(Qn,$e.count));let gn=Qn-Zt;if(gn<0||gn===1/0)return;Ze.setup($,J,ke,Z,Be);let ss,Ht=Ge;if(Be!==null&&(ss=le.get(Be),Ht=Ne,Ht.setIndex(ss)),$.isMesh)J.wireframe===!0?(Te.setLineWidth(J.wireframeLinewidth*Xe()),Ht.setMode(X.LINES)):Ht.setMode(X.TRIANGLES);else if($.isLine){let st=J.linewidth;st===void 0&&(st=1),Te.setLineWidth(st*Xe()),$.isLineSegments?Ht.setMode(X.LINES):$.isLineLoop?Ht.setMode(X.LINE_LOOP):Ht.setMode(X.LINE_STRIP)}else $.isPoints?Ht.setMode(X.POINTS):$.isSprite&&Ht.setMode(X.TRIANGLES);if($.isBatchedMesh)Ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ht.renderInstances(Zt,gn,$.count);else if(Z.isInstancedBufferGeometry){let st=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Qu=Math.min(Z.instanceCount,st);Ht.renderInstances(Zt,gn,Qu)}else Ht.render(Zt,gn)};function Rt(C,V,Z){C.transparent===!0&&C.side===Un&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,Tl(C,V,Z),C.side=Bi,C.needsUpdate=!0,Tl(C,V,Z),C.side=Un):Tl(C,V,Z)}this.compile=function(C,V,Z=null){Z===null&&(Z=C),f=Oe.get(Z),f.init(),x.push(f),Z.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),C!==Z&&C.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights(v._useLegacyLights);let J=new Set;return C.traverse(function($){let we=$.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){let ke=we[Le];Rt(ke,Z,$),J.add(ke)}else Rt(we,Z,$),J.add(we)}),x.pop(),f=null,J},this.compileAsync=function(C,V,Z=null){let J=this.compile(C,V,Z);return new Promise($=>{function we(){if(J.forEach(function(Le){Qe.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){$(C);return}setTimeout(we,10)}Ie.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ct=null;function mn(C){Ct&&Ct(C)}function Nn(){Dn.stop()}function Lt(){Dn.start()}let Dn=new Zg;Dn.setAnimationLoop(mn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(C){Ct=C,it.setAnimationLoop(C),C===null?Dn.stop():Dn.start()},it.addEventListener("sessionstart",Nn),it.addEventListener("sessionend",Lt),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(V),V=it.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,M),f=Oe.get(C,x.length),f.init(),x.push(f),H.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(H),ne=this.localClippingEnabled,j=et.init(this.clippingPlanes,ne),y=Se.get(C,p.length),y.init(),p.push(y),Oi(C,V,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(W,G),this.info.render.frame++,j===!0&&et.beginShadows();let Z=f.state.shadowsArray;if(re.render(Z,C,V),j===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(y,C),f.setupLights(v._useLegacyLights),V.isArrayCamera){let J=V.cameras;for(let $=0,we=J.length;$<we;$++){let Le=J[$];Vf(y,C,Le,Le.viewport)}}else Vf(y,C,V);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(v,C,V),Ze.resetDefaultState(),B=-1,_=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Oi(C,V,Z,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){J&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(H);let Le=ue.update(C),ke=C.material;ke.visible&&y.push(C,Le,ke,Z,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){let Le=ue.update(C),ke=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),de.copy(Le.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(H)),Array.isArray(ke)){let Be=Le.groups;for(let tt=0,We=Be.length;tt<We;tt++){let $e=Be[tt],Zt=ke[$e.materialIndex];Zt&&Zt.visible&&y.push(C,Le,Zt,Z,de.z,$e)}}else ke.visible&&y.push(C,Le,ke,Z,de.z,null)}}let we=C.children;for(let Le=0,ke=we.length;Le<ke;Le++)Oi(we[Le],V,Z,J)}function Vf(C,V,Z,J){let $=C.opaque,we=C.transmissive,Le=C.transparent;f.setupLightsView(Z),j===!0&&et.setGlobalState(v.clippingPlanes,Z),we.length>0&&Rv($,we,V,Z),J&&Te.viewport(b.copy(J)),$.length>0&&El($,V,Z),we.length>0&&El(we,V,Z),Le.length>0&&El(Le,V,Z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Rv(C,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let we=He.isWebGL2;ee===null&&(ee=new fs(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?_o:Vs,minFilter:Gs,samples:we?4:0})),v.getDrawingBufferSize(oe),we?ee.setSize(oe.x,oe.y):ee.setSize(lc(oe.x),lc(oe.y));let Le=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(U),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let ke=v.toneMapping;v.toneMapping=Hs,El(C,Z,J),P.updateMultisampleRenderTarget(ee),P.updateRenderTargetMipmap(ee);let Be=!1;for(let tt=0,We=V.length;tt<We;tt++){let $e=V[tt],Zt=$e.object,Qn=$e.geometry,gn=$e.material,ss=$e.group;if(gn.side===Un&&Zt.layers.test(J.layers)){let Ht=gn.side;gn.side=qn,gn.needsUpdate=!0,Gf(Zt,Z,J,Qn,gn,ss),gn.side=Ht,gn.needsUpdate=!0,Be=!0}}Be===!0&&(P.updateMultisampleRenderTarget(ee),P.updateRenderTargetMipmap(ee)),v.setRenderTarget(Le),v.setClearColor(U,L),v.toneMapping=ke}function El(C,V,Z){let J=V.isScene===!0?V.overrideMaterial:null;for(let $=0,we=C.length;$<we;$++){let Le=C[$],ke=Le.object,Be=Le.geometry,tt=J===null?Le.material:J,We=Le.group;ke.layers.test(Z.layers)&&Gf(ke,V,Z,Be,tt,We)}}function Gf(C,V,Z,J,$,we){C.onBeforeRender(v,V,Z,J,$,we),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(v,V,Z,J,C,we),$.transparent===!0&&$.side===Un&&$.forceSinglePass===!1?($.side=qn,$.needsUpdate=!0,v.renderBufferDirect(Z,V,J,$,C,we),$.side=Bi,$.needsUpdate=!0,v.renderBufferDirect(Z,V,J,$,C,we),$.side=Un):v.renderBufferDirect(Z,V,J,$,C,we),C.onAfterRender(v,V,Z,J,$,we)}function Tl(C,V,Z){V.isScene!==!0&&(V=_e);let J=Qe.get(C),$=f.state.lights,we=f.state.shadowsArray,Le=$.state.version,ke=Ce.getParameters(C,$.state,we,V,Z),Be=Ce.getProgramCacheKey(ke),tt=J.programs;J.environment=C.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(C.isMeshStandardMaterial?Y:S).get(C.envMap||J.environment),tt===void 0&&(C.addEventListener("dispose",ve),tt=new Map,J.programs=tt);let We=tt.get(Be);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===Le)return qf(C,ke),We}else ke.uniforms=Ce.getUniforms(C),C.onBuild(Z,ke,v),C.onBeforeCompile(ke,v),We=Ce.acquireProgram(ke,Be),tt.set(Be,We),J.uniforms=ke.uniforms;let $e=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=et.uniform),qf(C,ke),J.needsLights=Pv(C),J.lightsStateVersion=Le,J.needsLights&&($e.ambientLightColor.value=$.state.ambient,$e.lightProbe.value=$.state.probe,$e.directionalLights.value=$.state.directional,$e.directionalLightShadows.value=$.state.directionalShadow,$e.spotLights.value=$.state.spot,$e.spotLightShadows.value=$.state.spotShadow,$e.rectAreaLights.value=$.state.rectArea,$e.ltc_1.value=$.state.rectAreaLTC1,$e.ltc_2.value=$.state.rectAreaLTC2,$e.pointLights.value=$.state.point,$e.pointLightShadows.value=$.state.pointShadow,$e.hemisphereLights.value=$.state.hemi,$e.directionalShadowMap.value=$.state.directionalShadowMap,$e.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$e.spotShadowMap.value=$.state.spotShadowMap,$e.spotLightMatrix.value=$.state.spotLightMatrix,$e.spotLightMap.value=$.state.spotLightMap,$e.pointShadowMap.value=$.state.pointShadowMap,$e.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function Wf(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=wa.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function qf(C,V){let Z=Qe.get(C);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Cv(C,V,Z,J,$){V.isScene!==!0&&(V=_e),P.resetTextureUnits();let we=V.fog,Le=J.isMeshStandardMaterial?V.environment:null,ke=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:un,Be=(J.isMeshStandardMaterial?Y:S).get(J.envMap||Le),tt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,We=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),$e=!!Z.morphAttributes.position,Zt=!!Z.morphAttributes.normal,Qn=!!Z.morphAttributes.color,gn=Hs;J.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(gn=v.toneMapping);let ss=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ht=ss!==void 0?ss.length:0,st=Qe.get(J),Qu=f.state.lights;if(j===!0&&(ne===!0||C!==_)){let di=C===_&&J.id===B;et.setState(J,C,di)}let $t=!1;J.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Qu.state.version||st.outputColorSpace!==ke||$.isBatchedMesh&&st.batching===!1||!$.isBatchedMesh&&st.batching===!0||$.isInstancedMesh&&st.instancing===!1||!$.isInstancedMesh&&st.instancing===!0||$.isSkinnedMesh&&st.skinning===!1||!$.isSkinnedMesh&&st.skinning===!0||$.isInstancedMesh&&st.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&st.instancingColor===!1&&$.instanceColor!==null||st.envMap!==Be||J.fog===!0&&st.fog!==we||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==et.numPlanes||st.numIntersection!==et.numIntersection)||st.vertexAlphas!==tt||st.vertexTangents!==We||st.morphTargets!==$e||st.morphNormals!==Zt||st.morphColors!==Qn||st.toneMapping!==gn||He.isWebGL2===!0&&st.morphTargetsCount!==Ht)&&($t=!0):($t=!0,st.__version=J.version);let pr=st.currentProgram;$t===!0&&(pr=Tl(J,V,$));let Xf=!1,ao=!1,ed=!1,wn=pr.getUniforms(),fr=st.uniforms;if(Te.useProgram(pr.program)&&(Xf=!0,ao=!0,ed=!0),J.id!==B&&(B=J.id,ao=!0),Xf||_!==C){wn.setValue(X,"projectionMatrix",C.projectionMatrix),wn.setValue(X,"viewMatrix",C.matrixWorldInverse);let di=wn.map.cameraPosition;di!==void 0&&di.setValue(X,de.setFromMatrixPosition(C.matrixWorld)),He.logarithmicDepthBuffer&&wn.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wn.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,ao=!0,ed=!0)}if($.isSkinnedMesh){wn.setOptional(X,$,"bindMatrix"),wn.setOptional(X,$,"bindMatrixInverse");let di=$.skeleton;di&&(He.floatVertexTextures?(di.boneTexture===null&&di.computeBoneTexture(),wn.setValue(X,"boneTexture",di.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(wn.setOptional(X,$,"batchingTexture"),wn.setValue(X,"batchingTexture",$._matricesTexture,P));let td=Z.morphAttributes;if((td.position!==void 0||td.normal!==void 0||td.color!==void 0&&He.isWebGL2===!0)&&ot.update($,Z,pr),(ao||st.receiveShadow!==$.receiveShadow)&&(st.receiveShadow=$.receiveShadow,wn.setValue(X,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(fr.envMap.value=Be,fr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ao&&(wn.setValue(X,"toneMappingExposure",v.toneMappingExposure),st.needsLights&&Lv(fr,ed),we&&J.fog===!0&&be.refreshFogUniforms(fr,we),be.refreshMaterialUniforms(fr,J,z,N,ee),wa.upload(X,Wf(st),fr,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(wa.upload(X,Wf(st),fr,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wn.setValue(X,"center",$.center),wn.setValue(X,"modelViewMatrix",$.modelViewMatrix),wn.setValue(X,"normalMatrix",$.normalMatrix),wn.setValue(X,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let di=J.uniformsGroups;for(let nd=0,Iv=di.length;nd<Iv;nd++)if(He.isWebGL2){let $f=di[nd];xt.update($f,pr),xt.bind($f,pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pr}function Lv(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Pv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,V,Z){Qe.get(C.texture).__webglTexture=V,Qe.get(C.depthTexture).__webglTexture=Z;let J=Qe.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){let Z=Qe.get(C);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Z=0){M=C,E=V,R=Z;let J=!0,$=null,we=!1,Le=!1;if(C){let Be=Qe.get(C);Be.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(X.FRAMEBUFFER,null),J=!1):Be.__webglFramebuffer===void 0?P.setupRenderTarget(C):Be.__hasExternalTextures&&P.rebindTextures(C,Qe.get(C.texture).__webglTexture,Qe.get(C.depthTexture).__webglTexture);let tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);let We=Qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[V])?$=We[V][Z]:$=We[V],we=!0):He.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?$=Qe.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?$=We[Z]:$=We,b.copy(C.viewport),I.copy(C.scissor),D=C.scissorTest}else b.copy(K).multiplyScalar(z).floor(),I.copy(Q).multiplyScalar(z).floor(),D=se;if(Te.bindFramebuffer(X.FRAMEBUFFER,$)&&He.drawBuffers&&J&&Te.drawBuffers(C,$),Te.viewport(b),Te.scissor(I),Te.setScissorTest(D),we){let Be=Qe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,Z)}else if(Le){let Be=Qe.get(C.texture),tt=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,Z||0,tt)}B=-1},this.readRenderTargetPixels=function(C,V,Z,J,$,we,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Te.bindFramebuffer(X.FRAMEBUFFER,ke);try{let Be=C.texture,tt=Be.format,We=Be.type;if(tt!==pi&&Me.convert(tt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=We===_o&&(Ie.has("EXT_color_buffer_half_float")||He.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(We!==Vs&&Me.convert(We)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===hs&&(He.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&Z>=0&&Z<=C.height-$&&X.readPixels(V,Z,J,$,Me.convert(tt),Me.convert(We),we)}finally{let Be=M!==null?Qe.get(M).__webglFramebuffer:null;Te.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(C,V,Z=0){let J=Math.pow(2,-Z),$=Math.floor(V.image.width*J),we=Math.floor(V.image.height*J);P.setTexture2D(V,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,C.x,C.y,$,we),Te.unbindTexture()},this.copyTextureToTexture=function(C,V,Z,J=0){let $=V.image.width,we=V.image.height,Le=Me.convert(Z.format),ke=Me.convert(Z.type);P.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,J,C.x,C.y,$,we,Le,ke,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,J,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Le,V.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,J,C.x,C.y,Le,ke,V.image),J===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Z,J,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=C.max.x-C.min.x+1,Le=C.max.y-C.min.y+1,ke=C.max.z-C.min.z+1,Be=Me.convert(J.format),tt=Me.convert(J.type),We;if(J.isData3DTexture)P.setTexture3D(J,0),We=X.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)P.setTexture2DArray(J,0),We=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);let $e=X.getParameter(X.UNPACK_ROW_LENGTH),Zt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Qn=X.getParameter(X.UNPACK_SKIP_PIXELS),gn=X.getParameter(X.UNPACK_SKIP_ROWS),ss=X.getParameter(X.UNPACK_SKIP_IMAGES),Ht=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ht.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ht.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,C.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,C.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(We,$,V.x,V.y,V.z,we,Le,ke,Be,tt,Ht.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(We,$,V.x,V.y,V.z,we,Le,ke,Be,Ht.data)):X.texSubImage3D(We,$,V.x,V.y,V.z,we,Le,ke,Be,tt,Ht),X.pixelStorei(X.UNPACK_ROW_LENGTH,$e),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Zt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qn),X.pixelStorei(X.UNPACK_SKIP_ROWS,gn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ss),$===0&&J.generateMipmaps&&X.generateMipmap(We),Te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){E=0,R=0,M=null,Te.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===wh?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===kc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?Mr:qg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mr?Vt:un}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ih=class extends Rr{};ih.prototype.isWebGL1Renderer=!0;var vc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var La=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kn=new k,Eo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var mg=new k,gg=new Mt,yg=new Mt,BM=new k,vg=new Ae,Zl=new k,Pd=new si,xg=new Ae,Id=new Tr,xc=class extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=em,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Zl),this.boundingBox.expandByPoint(Zl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Zl),this.boundingSphere.expandByPoint(Zl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pd.copy(this.boundingSphere),Pd.applyMatrix4(s),e.ray.intersectsSphere(Pd)!==!1&&(xg.copy(s).invert(),Id.copy(e.ray).applyMatrix4(xg),!(this.boundingBox!==null&&Id.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Id)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===em?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===px?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;gg.fromBufferAttribute(s.attributes.skinIndex,e),yg.fromBufferAttribute(s.attributes.skinWeight,e),mg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=yg.getComponent(r);if(a!==0){let o=gg.getComponent(r);vg.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(BM.copy(mg).applyMatrix4(vg),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},To=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},sh=class extends _n{constructor(e=null,t=1,i=1,s,r,a,o,l,c=cn,u=cn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bg=new Ae,zM=new Ae,bc=class n{constructor(e=[],t=[]){this.uuid=Ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ae;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:zM;bg.multiplyMatrices(o,t[r]),bg.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new sh(t,e,e,pi,hs);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new To),this.bones.push(a),this.boneInverses.push(new Ae().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Cr=class extends It{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ga=new Ae,_g=new Ae,Kl=[],wg=new mi,HM=new Ae,ho=new wt,po=new si,_c=class extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,HM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ga),wg.copy(e.boundingBox).applyMatrix4(ga),this.boundingBox.union(wg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ga),po.copy(e.boundingSphere).applyMatrix4(ga),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ga),_g.multiplyMatrices(i,ga),ho.matrixWorld=_g,ho.raycast(e,Kl);for(let a=0,o=Kl.length;a<o;a++){let l=Kl[a];l.instanceId=r,l.object=this,t.push(l)}Kl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ro=class extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sg=new k,Mg=new k,Ag=new Ae,Nd=new Tr,Jl=new si,Pa=class extends Ot{constructor(e=new Bn,t=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Sg.fromBufferAttribute(t,s-1),Mg.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Sg.distanceTo(Mg);e.setAttribute("lineDistance",new Fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),Jl.radius+=r,e.ray.intersectsSphere(Jl)===!1)return;Ag.copy(s).invert(),Nd.copy(e.ray).applyMatrix4(Ag);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,d=new k,h=new k,m=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=p,w=x-1;v<w;v+=m){let E=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(f,E),u.fromBufferAttribute(f,R),Nd.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(h);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let v=p,w=x-1;v<w;v+=m){if(c.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),Nd.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Eg=new k,Tg=new k,wc=class extends Pa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Eg.fromBufferAttribute(t,s),Tg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Eg.distanceTo(Tg);e.setAttribute("lineDistance",new Fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Sc=class extends Pa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Co=class extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rg=new Ae,rh=new Tr,Ql=new si,ec=new k,Mc=class extends Ot{constructor(e=new Bn,t=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(s),Ql.radius+=r,e.ray.intersectsSphere(Ql)===!1)return;Rg.copy(s).invert(),rh.copy(e.ray).applyMatrix4(Rg);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,y=m;g<y;g++){let f=c.getX(g);ec.fromBufferAttribute(d,f),Cg(ec,f,l,s,e,t,this)}}else{let h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=h,y=m;g<y;g++)ec.fromBufferAttribute(d,g),Cg(ec,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Cg(n,e,t,i,s,r,a){let o=rh.distanceSqToPoint(n);if(o<t){let l=new k;rh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Ac=class extends _n{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ec=class n extends Bn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],m=[],g=0,y=[],f=i/2,p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Fn(d,3)),this.setAttribute("normal",new Fn(h,3)),this.setAttribute("uv",new Fn(m,2));function x(){let w=new k,E=new k,R=0,M=(t-e)/i;for(let B=0;B<=r;B++){let _=[],b=B/r,I=b*(t-e)+e;for(let D=0;D<=s;D++){let U=D/s,L=U*l+o,T=Math.sin(L),N=Math.cos(L);E.x=I*T,E.y=-b*i+f,E.z=I*N,d.push(E.x,E.y,E.z),w.set(T,M,N).normalize(),h.push(w.x,w.y,w.z),m.push(U,1-b),_.push(g++)}y.push(_)}for(let B=0;B<s;B++)for(let _=0;_<r;_++){let b=y[_][B],I=y[_+1][B],D=y[_+1][B+1],U=y[_][B+1];u.push(b,I,U),u.push(I,D,U),R+=6}c.addGroup(p,R,0),p+=R}function v(w){let E=g,R=new Ye,M=new k,B=0,_=w===!0?e:t,b=w===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,f*b,0),h.push(0,b,0),m.push(.5,.5),g++;let I=g;for(let D=0;D<=s;D++){let L=D/s*l+o,T=Math.cos(L),N=Math.sin(L);M.x=_*N,M.y=f*b,M.z=_*T,d.push(M.x,M.y,M.z),h.push(0,b,0),R.x=T*.5+.5,R.y=N*.5*b+.5,m.push(R.x,R.y),g++}for(let D=0;D<s;D++){let U=E+D,L=I+D;w===!0?u.push(L,L+1,U):u.push(L+1,L,U),B+=3}c.addGroup(p,B,w===!0?1:2),p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ia=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gi=class extends Ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return An(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Na=class extends Xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function tc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function VM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function GM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Lg(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function n0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Xs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ah=class extends Xs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Em,endingEnd:Em}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tm:r=e,o=2*t-i;break;case Rm:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Tm:a=e,l=2*i-t;break;case Rm:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),y=g*g,f=y*g,p=-h*f+2*h*y-h*g,x=(1+h)*f+(-1.5-2*h)*y+(-.5+h)*g+1,v=(-1-m)*f+(1.5+m)*y+.5*g,w=m*f-m*y;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+x*a[c+E]+v*a[l+E]+w*a[d+E];return r}},oh=class extends Xs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},lh=class extends Xs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tc(t,this.TimeBufferType),this.values=tc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:tc(e.times,Array),values:tc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ah(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ea:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case ld:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return ld}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&VM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ld,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Er;var $s=class extends yi{};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ea;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends yi{};Tc.prototype.ValueTypeName="color";var gs=class extends yi{};gs.prototype.ValueTypeName="number";var ch=class extends Xs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)nt.slerpFlat(r,0,a,c-o,a,c,l);return r}},zi=class extends yi{InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.DefaultInterpolation=Er;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends yi{};Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Ea;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends yi{};ys.prototype.ValueTypeName="vector";var Rc=class{constructor(e,t=-1,i,s=wx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(qM(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(yi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=GM(l);l=Lg(l,1,u),c=Lg(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new gs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,h,m,g,y){if(m.length!==0){let f=[],p=[];n0(m,f,p,g),f.length!==0&&y.push(new d(h,f,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let m={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)m[h[g].morphTargets[y]]=-1;for(let y in m){let f=[],p=[];for(let x=0;x!==h[g].morphTargets.length;++x){let v=h[g];f.push(v.time),p.push(v.morphTarget===y?1:0)}s.push(new gs(".morphTargetInfluence["+y+"]",f,p))}l=m.length*a}else{let m=".bones["+t[d].name+"]";i(ys,m+".position",h,"pos",s),i(zi,m+".quaternion",h,"rot",s),i(ys,m+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function WM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return Tc;case"quaternion":return zi;case"bool":case"boolean":return $s;case"string":return Ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function qM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=WM(n.type);if(n.times===void 0){let t=[],i=[];n0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Bs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},uh=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},XM=new uh,vs=class{constructor(e){this.manager=e!==void 0?e:XM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var us={},dh=class extends Error{constructor(e,t){super(e),this.response=t}},Lo=class extends vs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(us[e]!==void 0){us[e].push({onLoad:t,onProgress:i,onError:s});return}us[e]=[],us[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=us[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0,y=0,f=new ReadableStream({start(p){x();function x(){d.read().then(({done:v,value:w})=>{if(v)p.close();else{y+=w.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let R=0,M=u.length;R<M;R++){let B=u[R];B.onProgress&&B.onProgress(E)}p.enqueue(w),x()}})}}});return new Response(f)}else throw new dh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Bs.add(e,c);let u=us[e];delete us[e];for(let d=0,h=u.length;d<h;d++){let m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=us[e];if(u===void 0)throw this.manager.itemError(e),c;delete us[e];for(let d=0,h=u.length;d<h;d++){let m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var hh=class extends vs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=wo("img");function l(){u(),Bs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Da=class extends vs{constructor(e){super(e)}load(e,t,i,s){let r=new _n,a=new hh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ka=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Cc=class extends ka{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dd=new Ae,Pg=new k,Ig=new k,Po=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pg),Ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ig),t.updateMatrixWorld(),Dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ph=class extends Po{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Ta*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Lc=class extends ka{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ng=new Ae,fo=new k,kd=new k,fh=class extends Po{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fo.setFromMatrixPosition(e.matrixWorld),i.position.copy(fo),kd.copy(i.position),kd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kd),i.updateMatrixWorld(),s.makeTranslation(-fo.x,-fo.y,-fo.z),Ng.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ng)}},Pc=class extends ka{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},mh=class extends Po{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var js=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ic=class extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Bs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Bs.add(e,l),r.manager.itemStart(e)}};var Ah="\\[\\]\\.:\\/",$M=new RegExp("["+Ah+"]","g"),Eh="[^"+Ah+"]",YM="[^"+Ah.replace("\\.","")+"]",jM=/((?:WC+[\/:])*)/.source.replace("WC",Eh),ZM=/(WCOD+)?/.source.replace("WCOD",YM),KM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),JM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),QM=new RegExp("^"+jM+ZM+KM+JM+"$"),e1=["material","materials","bones","map"],gh=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($M,"")}static parseTrackName(e){let t=QM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);e1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=gh;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lT=new Float32Array(1);var Io=class{constructor(e,t,i=0,s=1/0){this.ray=new Tr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return yh(e,this,i,t),i.sort(Dg),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)yh(e[s],this,i,t);return i.sort(Dg),i}};function Dg(n,e){return n.distance-e.distance}function yh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)yh(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var $n=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function i0(n){if(n.comfortVersion===$n.version)return n;let e={...n,comfortVersion:$n.version,winDist:$n.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=$n.windowScale),e}function t1(n,e){return n>0&&e>0?n/e:16/9}function Oo(n,e,t){let i=t1(n,e),s=t>0?t:i,r,a;s>=i?(r=n,a=n/s):(a=e,r=e*s);let o=Math.round((n-r)/2),l=Math.round((e-a)/2),c=Math.round(r),u=Math.round(a);return{x:o,y:l,w:c,h:u,u0:o/n,v0:l/e,uw:c/n,vh:u/e}}function Th(n,e,t,i,s){let r=Oo(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var Hi=4096,Rn={width:1200,height:800},Zs=160;function n1(n,e=Hi){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let a=Math.ceil(t)+Zs*2,o=Math.ceil(i)+Zs*2,l=s==="window"?r%3*1360:s==="slot"?1360:0,c=s==="dock"?800:s==="keyboard"?3160:s==="slot"?0:1200+Math.floor(r/3)*980,u=s==="dock"?400:s==="keyboard"?936:980;if(r>5||a>(s==="window"||s==="slot"?1360:e)||o>u||l+a>e||c+o>e)throw new Error("Workspace texture is full; close a window first.");return[l,c,a,o]})}var Uc=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var d,h,m;if(window.__gorillaStereoOverlay){let g=2*Math.tan(Do.degToRad(36)),f=[{overlay:!0,matrix:new Ae().makeTranslation(0,0,-1).multiply(new Ae().makeScale(g*1.78,g*1.48,1)).toArray(),rect:[0,0,Rn.width/2,Rn.height],uvR:[Rn.width/2/Hi,1-Rn.height/Hi,Rn.width/2/Hi,Rn.height/Hi]}],p=JSON.stringify(f),x="[]";(p!==this.sent||x!==this.sentSpecs)&&(this.sent=p,this.sentSpecs=x,(h=(d=window.NativeXR)==null?void 0:d.frame)==null||h.call(d,p,x));return}e.updateMatrixWorld(!0);let t=[];e.traverse(g=>{g.isCSS3DObject&&g.visible&&t.push(g)});for(let g of t)g.element.parentNode!==this.domElement&&this.domElement.append(g.element),g.element.style.transform!=="none"&&(g.element.style.transform="none");for(let g of this.slots.keys())t.some(y=>y.id===g)||this.slots.delete(g);let i=t.map(g=>{let y=g.element.classList.contains("dock")?"dock":g.element.classList.contains("kb")?"keyboard":g.element.classList.contains("win-drop-slot")?"slot":"window";if(y==="window"&&!this.slots.has(g.id)){let x=new Set(this.slots.values()),v=0;for(;x.has(v);)v++;this.slots.set(g.id,v)}let f=y==="window"||y==="slot"?1040:Hi-Zs*2,p=(y==="dock"?400:y==="keyboard"?936:980)-Zs*2;return{width:Math.min(g.element.offsetWidth,f),height:Math.min(g.element.offsetHeight,p),kind:y,slot:this.slots.get(g.id)||0}}),s;try{s=n1(i)}catch(g){this.lastError!==g.message&&(this.lastError=g.message,(m=window.nextvrMessage)==null||m.call(window,g.message));return}let r=[],a=[];t.forEach((g,y)=>{let f=g.element,[p,x,v,w]=s[y],E=`${p+Zs}px`,R=`${x+Zs}px`;f.style.left!==E&&(f.style.left=E),f.style.top!==R&&(f.style.top=R);let M=g.matrixWorld.clone().multiply(new Ae().makeScale(v,w,1)),B=+(f.dataset.curve||0);r.push({id:f.dataset.windowId||(i[y].kind==="dock"?"dock":i[y].kind),matrix:M.toArray(),rect:s[y],curve:B,glass:[Zs/v,Zs/w,i[y].width/v,i[y].height/w]});let _=f.getBoundingClientRect();for(let b of f.querySelectorAll("[data-native-app]")){let I=b.getBoundingClientRect();if(!I.width||!I.height)continue;let D=+(b.dataset.aspect||0),U=Oo(I.width,I.height,D),L=g.matrixWorld.clone().multiply(new Ae().makeTranslation(I.left-_.left+U.x+U.w/2-i[y].width/2,i[y].height/2-(I.top-_.top+U.y+U.h/2),.5)).multiply(new Ae().makeScale(U.w,U.h,1));r.push({browser:"app:"+b.dataset.nativeApp,matrix:L.toArray(),rect:[0,0,Math.round(I.width),Math.round(I.height)],curve:+(f.dataset.curve||0),uv:[U.u0,U.v0,U.uw,U.vh]});let T=[U.u0,U.v0,U.uw,U.vh].map(N=>N.toFixed(5)).join(",");b.dataset.uv!==T&&(b.dataset.uv=T,this.last=0)}for(let b of f.querySelectorAll("[data-native-xr]")){let I=b.getBoundingClientRect();if(!I.width||!I.height)continue;let D="xr:"+b.dataset.nativeXr,U=+(b.dataset.aspect||0),L=Oo(I.width,I.height,U),T=g.matrixWorld.clone().multiply(new Ae().makeTranslation(I.left-_.left+L.x+L.w/2-i[y].width/2,i[y].height/2-(I.top-_.top+L.y+L.h/2),.5)).multiply(new Ae().makeScale(L.w,L.h,1));r.push({browser:D,matrix:T.toArray(),rect:[0,0,Math.round(I.width),Math.round(I.height)],curve:+(f.dataset.curve||0),uv:[L.u0,L.v0,L.uw/2,L.vh],uvR:[L.u0+L.uw/2,L.v0,L.uw/2,L.vh]})}for(let b of f.querySelectorAll("[data-native-browser]")){let I=b.getBoundingClientRect();if(!I.width||!I.height)continue;let D=b.dataset.nativeBrowser,U=b.dataset.url;if(!U)continue;let L=Math.round(I.width),T=Math.round(I.height),N={left:I.left,top:I.top,right:I.right,bottom:I.bottom};for(let K=b.parentElement;K&&K!==f;K=K.parentElement){let Q=getComputedStyle(K);if(/(auto|scroll|hidden)/.test(Q.overflow+Q.overflowY)){let se=K.getBoundingClientRect();N.left=Math.max(N.left,se.left),N.top=Math.max(N.top,se.top),N.right=Math.min(N.right,se.right),N.bottom=Math.min(N.bottom,se.bottom)}}a.push({id:D,url:U,width:L,height:T});let z=N.right-N.left,W=N.bottom-N.top;if(z<=0||W<=0)continue;let G=g.matrixWorld.clone().multiply(new Ae().makeTranslation(N.left-_.left+z/2-i[y].width/2,i[y].height/2-(N.top-_.top+W/2),.5)).multiply(new Ae().makeScale(z,W,1));r.push({browser:D,matrix:G.toArray(),rect:[0,0,L,T],curve:+(f.dataset.curve||0),homeOverlay:b.dataset.homeOverlay==="1",uv:[(N.left-I.left)/L,(I.bottom-N.bottom)/T,z/L,W/T]})}});let o=2*Math.tan(Do.degToRad(36)),l=new Ae().makeTranslation(0,0,-1).multiply(new Ae().makeScale(o*1.5,o,1));if(window.__gorillaStereoOverlay){let g=new Ae().makeTranslation(0,0,-1).multiply(new Ae().makeScale(o*1.78,o*1.48,1));r.push({overlay:!0,matrix:g.toArray(),rect:[0,0,Rn.width/2,Rn.height],uvR:[Rn.width/2/Hi,1-Rn.height/Hi,Rn.width/2/Hi,Rn.height/Hi]})}else r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,Rn.width,Rn.height]});let c=performance.now(),u=document.documentElement.dataset.qualityTier||document.documentElement.dataset.quality;if(c-this.last>=({low:32,medium:24,auto:24,high:16}[u]||24)){this.last=c;let g=JSON.stringify(r),y=JSON.stringify(a);(g!==this.sent||y!==this.sentSpecs)&&(this.sent=g,this.sentSpecs=y,window.NativeXR.frame(g,y))}}invalidate(){this.sent=this.sentSpecs=null,this.last=0}};var Ua=new k,pT=new k,i1=new k,Fo=()=>null,Fc=()=>!0,r0=()=>null,Uo=null,Fa=[],s0=0;function a0(n){let e=typeof performance<"u"?performance.now():Date.now(),t=n==null?void 0:n.hands;if(!Array.isArray(t)||t.length===0){e-s0>400&&(Fa.length=0);return}Fa.length=0;for(let i of t){let s=(i==null?void 0:i.points)||(i==null?void 0:i.lm);if(!s)continue;let r=1,a=1,o=0,l=0;if(typeof s.length=="number"&&typeof s[0]=="number")for(let c=0;c+1<s.length;c+=3){let u=s[c],d=s[c+1];u<r&&(r=u),d<a&&(a=d),u>o&&(o=u),d>l&&(l=d)}else if(Array.isArray(s))for(let c of s)c&&(c.x<r&&(r=c.x),c.y<a&&(a=c.y),c.x>o&&(o=c.x),c.y>l&&(l=c.y));o>=r&&l>=a&&Fa.push({x0:Math.max(0,r-.14),y0:Math.max(0,a-.14),x1:Math.min(1,o+.14),y1:Math.min(1,l+.14)})}Fa.length>0&&(s0=e)}var Bc={energy:0,lastA:null,onMotion(n){let e=(n==null?void 0:n.accelerationIncludingGravity)||(n==null?void 0:n.acceleration);if(!(!e||e.x===null)){if(this.lastA){let t=Math.hypot(e.x-this.lastA.x,e.y-this.lastA.y,e.z-this.lastA.z);t>.42?this.energy=Math.min(4,this.energy*.85+t):this.energy*=.84}this.lastA={x:e.x,y:e.y,z:e.z}}},moving(){return!this.lastA||this.energy>.75}},Wt={W:96,H:72,cv:null,ctx:null,prev:null,pos:new k,out:new k,prevOut:new k,stepDelta:new k,lastT:0,lastSc:0,_lastSentX:0,_lastSentZ:0,depth:1.45,init(){this.cv||typeof document>"u"||(this.cv=document.createElement("canvas"),this.cv.width=this.W,this.cv.height=this.H,this.ctx=this.cv.getContext("2d",{willReadFrequently:!0}))},reset(){var e,t,i;this.pos.set(0,0,0),this.out.set(0,0,0),this.prevOut.set(0,0,0),this.stepDelta.set(0,0,0),this.prev=null,this.lastSc=0,this._lastSentX=0,this._lastSentZ=0;let n=Fo();n&&(n.position.x=0,n.position.z=0),typeof Uo=="function"?Uo(0,0,0):typeof window<"u"&&((t=(e=window.NativeXR)==null?void 0:e.resetSixDof)==null||t.call(e)),typeof window<"u"&&((i=window.__updateBackfaceStates)==null||i.call(window))},processGray(n,e){let t=this.W,i=this.H;if(!n||n.length<t*i)return null;if(!this.prev)return this.prev=new Float32Array(n),null;let s=this.prev,r=1e18,a=0,o=0;for(let f=-7;f<=7;f++)for(let p=-7;p<=7;p++){let x=0;for(let v=22;v<50&&x<r;v+=2){let w=v*t,E=(v+f)*t;for(let R=30;R<66;R+=2)x+=Math.abs(n[E+R+p]-s[w+R])}x<r&&(r=x,a=p,o=f)}let l=[],c=new Float32Array(25);for(let f=10;f<=i-18;f+=10)for(let p=10;p<=t-18;p+=11){let x=(p+4)/t,v=(f+4)/i,w=!1;for(let U of Fa)if(x>U.x0&&x<U.x1&&v>U.y0&&v<U.y1){w=!0;break}if(w)continue;let E=0;for(let U=f;U<f+8;U++){let L=U*t;for(let T=p;T<p+7;T++)E+=Math.abs(s[L+T+1]-s[L+T])}if(E<200)continue;let R=1e18,M=0,B=0,_=0;for(let U=-2;U<=2;U++)for(let L=-2;L<=2;L++){let T=p+a+L,N=f+o+U;if(T<0||N<0||T+8>t||N+8>i){c[_++]=1e18;continue}let z=0;for(let W=0;W<8;W++){let G=(f+W)*t+p,K=(N+W)*t+T;for(let Q=0;Q<8;Q++)z+=Math.abs(n[K+Q]-s[G+Q])}c[_++]=z,z<R&&(R=z,M=L,B=U)}let b=(U,L)=>c[(L+2)*5+(U+2)],I=0,D=0;if(Math.abs(M)<2){let U=b(M-1,B),L=b(M+1,B),T=U-2*R+L;T>0&&U<1e17&&L<1e17&&(I=.5*(U-L)/T)}if(Math.abs(B)<2){let U=b(M,B-1),L=b(M,B+1),T=U-2*R+L;T>0&&U<1e17&&L<1e17&&(D=.5*(U-L)/T)}l.push({x:p+4-t*.5,y:f+4-i*.5,dx:a+M+I,dy:o+B+D})}if(this.prev.set(n),l.length<10)return null;let u=f=>{let p=0,x=0,v=0,w=0;for(let B of f)p+=B.dx,x+=B.dy,v+=B.x,w+=B.y;let E=f.length;p/=E,x/=E,v/=E,w/=E;let R=0,M=0;for(let B of f){let _=B.x-v,b=B.y-w;R+=(B.dx-p)*_+(B.dy-x)*b,M+=_*_+b*b}return{sc:M>0?R/M:0,mx:p,my:x,px:v,py:w}},d=u(l),h=l.map(f=>Math.hypot(f.dx-d.mx-d.sc*(f.x-d.px),f.dy-d.my-d.sc*(f.y-d.py))),m=[...h].sort((f,p)=>f-p),g=m[m.length>>1]||.5;if(g>.85)return null;let y=l.filter((f,p)=>h[p]<=Math.max(.35,g*2));return y.length<8?null:(d=u(y),this.applyFlowScale(d.sc,a,o,e,d.mx-a),{sc:d.sc,gx:a,gy:o})},applyFlowScale(n,e=0,t=0,i,s=0){if(!Fc())return;let r=Fo();if(!r)return;if(!Number.isFinite(n)||Math.abs(n)<.004||Math.abs(n)>.24){this.lastSc=0;return}let a=this.lastSc;if(this.lastSc=n,a===0||Math.sign(a)!==Math.sign(n))return;let o=(n+a)*.5;if(Math.hypot(e,t)>6&&(o*=.3),!(i!==void 0?!!i:Bc.moving())){this.lastSc=0;return}let c=Math.max(-.11,Math.min(.11,o*this.depth));Ua.set(0,0,-1).applyQuaternion(r.quaternion),Ua.y=0,Ua.lengthSq()>1e-6?Ua.normalize():Ua.set(0,0,-1),this.pos.addScaledVector(Ua,c),this.pos.y=0;let u=Math.hypot(this.pos.x,this.pos.z);if(u>3){let d=3/u;this.pos.x*=d,this.pos.z*=d}this.pos.y=0},update(n,e=.016){var o,l,c;if(!Fc()){(this.pos.lengthSq()>0||this.out.lengthSq()>0)&&this.reset();return}let t=Math.max(.38,1-Math.exp(-Math.max(.005,e)*24));this.out.lerp(this.pos,t),this.out.y=0,this.stepDelta.subVectors(this.out,this.prevOut),this.stepDelta.y=0,this.prevOut.copy(this.out);let i=Fo();i&&(i.position.x=this.out.x,i.position.z=this.out.z),Math.hypot(this.out.x-this._lastSentX,this.out.z-this._lastSentZ)>1e-4&&(this._lastSentX=this.out.x,this._lastSentZ=this.out.z,typeof Uo=="function"?Uo(this.out.x,0,this.out.z):typeof window<"u"&&((l=(o=window.NativeXR)==null?void 0:o.sixDofOffset)==null||l.call(o,this.out.x,0,this.out.z)),typeof window<"u"&&((c=window.__updateBackfaceStates)==null||c.call(window)));let s=r0();if(!s||s.readyState<2||n-this.lastT<45||(this.lastT=n,this.init(),!this.ctx))return;let r=this.W,a=this.H;try{this.ctx.drawImage(s,0,0,r,a);let u=this.ctx.getImageData(0,0,r,a).data,d=new Float32Array(r*a);for(let h=0,m=0;h<d.length;h++,m+=4)d[h]=u[m]*.3+u[m+1]*.59+u[m+2]*.11;this.processGray(d)}catch{}},consumeStepDelta(n=i1){return n.copy(this.stepDelta),n.y=0,this.stepDelta.set(0,0,0),n}};function zc({camera:n,settings:e,getCamera:t,isEnabled:i,getVideo:s,onNativeOffset:r}={}){typeof t=="function"?Fo=t:n&&(Fo=()=>n),typeof i=="function"?Fc=i:e&&typeof e=="object"&&(Fc=()=>e.sixdof!==0),typeof s=="function"&&(r0=s),typeof r=="function"&&(Uo=r)}typeof window<"u"&&(window.addEventListener("devicemotion",n=>Bc.onMotion(n),{passive:!0}),window.SixDof=Wt,window.Walk=Bc,window.nextvrSixDof=(n,e=0,t=0)=>{if(n&&typeof n=="object"){if(n.gray&&n.gray.length>=Wt.W*Wt.H)return Wt.processGray(n.gray,n.moving);let s=Number(n.sc??0),r=Number(n.gx??0),a=Number(n.gy??0);return Wt.applyFlowScale(s,r,a,n.moving),{sc:s,gx:r,gy:a}}let i=Number(n??0);return Wt.applyFlowScale(i,Number(e||0),Number(e?t:0)),{sc:i,gx:Number(e||0),gy:Number(t||0)}});var o0=new k,s1=new nt,l0=new k,Pr=class extends Ot{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Vi=new Ae,r1=new Ae,Hc=class{constructor(e={}){let t=this,i,s,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(y,f){let p=f.projectionMatrix.elements[5]*a;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let x,v;f.isOrthographicCamera&&(x=-(f.right+f.left)/2,v=(f.top+f.bottom)/2);let w=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,E=f.isOrthographicCamera?`scale( ${w} )scale(`+p+")translate("+d(x)+"px,"+d(v)+"px)"+h(f.matrixWorldInverse):`scale( ${w} )translateZ(`+p+"px)"+h(f.matrixWorldInverse),M=(f.isPerspectiveCamera?"perspective("+p+"px) ":"")+E+"translate("+r+"px,"+a+"px)";o.camera.style!==M&&(u.style.transform=M,o.camera.style=M),g(y,y,f,E)},this.setSize=function(y,f){i=y,s=f,r=i/2,a=s/2,l.style.width=y+"px",l.style.height=f+"px",c.style.width=y+"px",c.style.height=f+"px",u.style.width=y+"px",u.style.height=f+"px"};function d(y){return Math.abs(y)<1e-10?0:y}function h(y){let f=y.elements;return"matrix3d("+d(f[0])+","+d(-f[1])+","+d(f[2])+","+d(f[3])+","+d(f[4])+","+d(-f[5])+","+d(f[6])+","+d(f[7])+","+d(f[8])+","+d(-f[9])+","+d(f[10])+","+d(f[11])+","+d(f[12])+","+d(-f[13])+","+d(f[14])+","+d(f[15])+")"}function m(y){let f=y.elements;return"translate(-50%,-50%)"+("matrix3d("+d(f[0])+","+d(f[1])+","+d(f[2])+","+d(f[3])+","+d(-f[4])+","+d(-f[5])+","+d(-f[6])+","+d(-f[7])+","+d(f[8])+","+d(f[9])+","+d(f[10])+","+d(f[11])+","+d(f[12])+","+d(f[13])+","+d(f[14])+","+d(f[15])+")")}function g(y,f,p,x){if(y.isCSS3DObject){let v=y.visible===!0&&y.layers.test(p.layers)===!0;if(y.element.style.display=v===!0?"":"none",v===!0){y.onBeforeRender(t,f,p);let w;y.isCSS3DSprite?(Vi.copy(p.matrixWorldInverse),Vi.transpose(),y.rotation2D!==0&&Vi.multiply(r1.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(o0,s1,l0),Vi.setPosition(o0),Vi.scale(l0),Vi.elements[3]=0,Vi.elements[7]=0,Vi.elements[11]=0,Vi.elements[15]=1,w=m(Vi)):w=m(y.matrixWorld);let E=y.element,R=o.objects.get(y);if(R===void 0||R.style!==w){E.style.transform=w;let M={style:w};o.objects.set(y,M)}E.parentNode!==u&&u.appendChild(E),y.onAfterRender(t,f,p)}}for(let v=0,w=y.children.length;v<w;v++)g(y.children[v],f,p,x)}}};var me=!!window.NativeXR,Ft=me?Rn:{width:innerWidth,height:innerHeight},u0={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"sunset",panorama:"sunset",quality:"auto",showFps:0,wideCamera:0,spatialLauncher:0,dockSnapSlot:1,fingerTouch:1,gunGesture:1,sixdof:1,lateLatch:0,gorillaInstalled:0,profileName:"",profileAvatar:""},Bo={};try{Bo=JSON.parse(localStorage.getItem("nextvr.v1")||"{}")||{}}catch{}var je={...u0,...Bo};je.sunsetDefaultVersion||(!je.envChosen&&je.env==="passthrough"&&(!Bo.panorama||Bo.panorama==="lagoon")&&(je.env="sunset"),(!Bo.panorama||je.env==="sunset"&&!je.envChosen)&&(je.panorama=je.env==="passthrough"?"sunset":je.env),je.sunsetDefaultVersion=1);if(me){je=i0(je),je.handsOn=!0,je.handDrawSeen||(je.handDraw=u0.handDraw,je.handDrawSeen=1);try{localStorage.setItem("nextvr.v1",JSON.stringify(je))}catch{}}var A=je,qe=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(je))}catch{}},on={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",libAll:"Todos",libFilter:"Filtro",libGames:"Jogos",libGamesEmpty:"Os jogos de headset aparecem aqui quando o PhoneXR os encontra.",libRecentEmpty:"Os apps abertos recentemente aparecem aqui.",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"P\xF4r do sol \xB7 palmeiras",envDusk:"Crep\xFAsculo",envCinema:"Cinema",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.exit":"Sair do jogo","game.menu":"Menu do jogo","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",libAll:"All",libFilter:"Filter",libGames:"Games",libGamesEmpty:"Headset games appear here when PhoneXR finds them.",libRecentEmpty:"Recently opened apps will appear here.",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"Sunset \xB7 palms",envDusk:"Dusk",envCinema:"Cinema",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.exit":"Exit game","game.menu":"Game menu","game.continue":"Continue","game.settings":"Settings","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",libAll:"Todo",libFilter:"Filtro",libGames:"Juegos",libGamesEmpty:"Los juegos de realidad virtual aparecer\xE1n aqu\xED cuando PhoneXR los encuentre.",libRecentEmpty:"Las aplicaciones abiertas recientemente aparecer\xE1n aqu\xED.",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Atardecer \xB7 palmeras",envDusk:"Crep\xFAsculo",envCinema:"Cine",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.exit":"Salir del juego","game.menu":"Men\xFA del juego","game.continue":"Continuar","game.settings":"Ajustes","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}};Object.assign(on.pt,{dockSnapSlot:"Espa\xE7o pr\xE9-definido na Dock",dockSnapDesc:"Mostrar janela preta transparente ao mover janelas na Dock normal",dockSnapHint:"Solte aqui para encaixar no espa\xE7o pr\xE9-definido",fingerTouch:"Toque com indicador (sem pin\xE7a)",fingerTouchDesc:"Abrir apps na Dock ou Spatial levando o indicador \xE0 frente",qualityHigh:"Alta (1080p)",qualityMedium:"M\xE9dia (890p)",qualityLow:"Baixa (390p)",qualityAuto:"Autom\xE1tica"});Object.assign(on.en,{dockSnapSlot:"Pre-defined Dock Slot",dockSnapDesc:"Show semi-transparent black slot when moving windows in normal Dock",dockSnapHint:"Drop here to snap into pre-defined slot",fingerTouch:"Index Finger Touch (No Pinch)",fingerTouchDesc:"Open apps in Dock or Spatial by pushing your index finger forward",qualityHigh:"High (1080p)",qualityMedium:"Medium (890p)",qualityLow:"Low (390p)",qualityAuto:"Auto"});Object.assign(on.es,{dockSnapSlot:"Espacio predefinido en Dock",dockSnapDesc:"Mostrar ventana negra semitransparente al mover ventanas en el Dock normal",dockSnapHint:"Suelta aqu\xED para encajar en el espacio predefinido",fingerTouch:"Toque con \xEDndice (sin pinza)",fingerTouchDesc:"Abrir apps en el Dock o Spatial llevando el dedo \xEDndice hacia adelante",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Baja (390p)",qualityAuto:"Autom\xE1tica"});on.ja={...on.en,desktop:"\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",browser:"\u30D6\u30E9\u30A6\u30B6",youtube:"YouTube",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC",settings:"\u8A2D\u5B9A",menu:"\u30E1\u30CB\u30E5\u30FC",store:"\u30B9\u30C8\u30A2",env:"\u74B0\u5883",keyboard:"\u30AD\u30FC\u30DC\u30FC\u30C9",center:"\u6B63\u9762\u306B\u30EA\u30BB\u30C3\u30C8",search:"\u30A6\u30A7\u30D6\u3092\u691C\u7D22",searchYt:"\u52D5\u753B\u3092\u691C\u7D22",open:"\u958B\u304F",close:"\u9589\u3058\u308B",general:"\u4E00\u822C",hands:"\u30CF\u30F3\u30C9\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0",windows:"\u30A6\u30A3\u30F3\u30C9\u30A6",dock:"\u30C9\u30C3\u30AF",perf:"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",language:"\u8A00\u8A9E",on:"\u30AA\u30F3",off:"\u30AA\u30D5",sens:"\u611F\u5EA6",scale:"\u30B9\u30B1\u30FC\u30EB",dist:"\u8DDD\u96E2",curve:"\u30AB\u30FC\u30D6",size:"\u30B5\u30A4\u30BA",quality:"\u753B\u8CEA",apps:"\u30A2\u30D7\u30EA",recents:"\u6700\u8FD1",battery:"\u30D0\u30C3\u30C6\u30EA\u30FC",net:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",time:"\u6642\u523B",libAll:"\u3059\u3079\u3066",libFilter:"\u30D5\u30A3\u30EB\u30BF\u30FC",libGames:"\u30B2\u30FC\u30E0",centered:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",langChanged:"\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u3057\u305F",langTitle:"\u8A00\u8A9E",langContinue:"\u6B21\u3078",langPick:"\u8A00\u8A9E\u3092\u9078\u629E",notif:"\u901A\u77E5",noNotif:"\u65B0\u3057\u3044\u901A\u77E5\u306F\u3042\u308A\u307E\u305B\u3093",profile:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",dockSnapSlot:"\u30C9\u30C3\u30AF\u5B9A\u7FA9\u6E08\u307F\u30B9\u30ED\u30C3\u30C8",dockSnapDesc:"\u30A6\u30A3\u30F3\u30C9\u30A6\u79FB\u52D5\u6642\u306B\u534A\u900F\u660E\u306E\u9ED2\u67A0\u3092\u8868\u793A",dockSnapHint:"\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u914D\u7F6E",qualityHigh:"\u9AD8 (1080p)",qualityMedium:"\u4E2D (890p)",qualityLow:"\u4F4E (390p)",qualityAuto:"\u81EA\u52D5"};on.fr={...on.en,desktop:"Espace de travail",browser:"Navigateur",youtube:"YouTube",gallery:"Galerie",settings:"Param\xE8tres",menu:"Menu",store:"Boutique",env:"Environnements",keyboard:"Clavier",center:"Recentrer",search:"Rechercher sur le web",searchYt:"Rechercher des vid\xE9os",open:"Ouvrir",close:"Fermer",general:"G\xE9n\xE9ral",hands:"Suivi des mains",windows:"Fen\xEAtres",dock:"Dock",perf:"Performance",language:"Langue",on:"Activ\xE9",off:"D\xE9sactiv\xE9",sens:"Sensibilit\xE9",scale:"\xC9chelle",dist:"Distance",curve:"Courbure",size:"Taille",quality:"Qualit\xE9",apps:"Applications",recents:"R\xE9cents",battery:"Batterie",net:"R\xE9seau",time:"Heure",libAll:"Tout",libFilter:"Filtre",libGames:"Jeux",centered:"Espace recentr\xE9",langChanged:"Langue modifi\xE9e",langTitle:"Langue",langContinue:"Continuer",langPick:"Choisissez votre langue",notif:"Notifications",noNotif:"Aucune notification",profile:"Profil",dockSnapSlot:"Emplacement pr\xE9d\xE9fini du Dock",dockSnapDesc:"Afficher un cadre noir semi-transparent lors du d\xE9placement",dockSnapHint:"Rel\xE2chez ici pour placer la fen\xEAtre",qualityHigh:"Haute (1080p)",qualityMedium:"Moyenne (890p)",qualityLow:"Basse (390p)",qualityAuto:"Auto"};on.de={...on.en,desktop:"Arbeitsbereich",browser:"Browser",youtube:"YouTube",gallery:"Galerie",settings:"Einstellungen",menu:"Men\xFC",store:"Store",env:"Umgebungen",keyboard:"Tastatur",center:"Zentrieren",search:"Im Web suchen",searchYt:"Videos suchen",open:"\xD6ffnen",close:"Schlie\xDFen",general:"Allgemein",hands:"Hand-Tracking",windows:"Fenster",dock:"Dock",perf:"Leistung",language:"Sprache",on:"Ein",off:"Aus",sens:"Empfindlichkeit",scale:"Skalierung",dist:"Abstand",curve:"Kr\xFCmmung",size:"Gr\xF6\xDFe",quality:"Qualit\xE4t",apps:"Apps",recents:"Zuletzt",battery:"Akku",net:"Netzwerk",time:"Zeit",libAll:"Alle",libFilter:"Filter",libGames:"Spiele",centered:"Ansicht zentriert",langChanged:"Sprache ge\xE4ndert",langTitle:"Sprache",langContinue:"Weiter",langPick:"Sprache ausw\xE4hlen",notif:"Mitteilungen",noNotif:"Keine neuen Mitteilungen",profile:"Profil",dockSnapSlot:"Vordefinierter Dock-Platz",dockSnapDesc:"Halbtransparentes schwarzes Zielfenster beim Bewegen anzeigen",dockSnapHint:"Hier ablegen zum Einrasten",qualityHigh:"Hoch (1080p)",qualityMedium:"Mittel (890p)",qualityLow:"Niedrig (390p)",qualityAuto:"Automatisch"};on.ko={...on.en,desktop:"\uC791\uC5C5 \uACF5\uAC04",browser:"\uBE0C\uB77C\uC6B0\uC800",youtube:"YouTube",gallery:"\uAC24\uB7EC\uB9AC",settings:"\uC124\uC815",menu:"\uBA54\uB274",store:"\uC2A4\uD1A0\uC5B4",env:"\uD658\uACBD",keyboard:"\uD0A4\uBCF4\uB4DC",center:"\uC911\uC559 \uC815\uB82C",search:"\uC6F9 \uAC80\uC0C9",searchYt:"\uB3D9\uC601\uC0C1 \uAC80\uC0C9",open:"\uC5F4\uAE30",close:"\uB2EB\uAE30",general:"\uC77C\uBC18",hands:"\uD578\uB4DC \uD2B8\uB798\uD0B9",windows:"\uCC3D",dock:"\uB3C5",perf:"\uC131\uB2A5",language:"\uC5B8\uC5B4",on:"\uCF1C\uC9D0",off:"\uAEBC\uC9D0",sens:"\uAC10\uB3C4",scale:"\uD06C\uAE30 \uBE44\uC728",dist:"\uAC70\uB9AC",curve:"\uACE1\uB960",size:"\uD06C\uAE30",quality:"\uD654\uC9C8",apps:"\uC571",recents:"\uCD5C\uADFC \uD56D\uBAA9",battery:"\uBC30\uD130\uB9AC",net:"\uB124\uD2B8\uC6CC\uD06C",time:"\uC2DC\uAC04",libAll:"\uC804\uCCB4",libFilter:"\uD544\uD130",libGames:"\uAC8C\uC784",centered:"\uD654\uBA74\uC774 \uC911\uC559\uC5D0 \uB9DE\uCDB0\uC84C\uC2B5\uB2C8\uB2E4",langChanged:"\uC5B8\uC5B4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4",langTitle:"\uC5B8\uC5B4",langContinue:"\uACC4\uC18D",langPick:"\uC5B8\uC5B4 \uC120\uD0DD",notif:"\uC54C\uB9BC",noNotif:"\uC0C8 \uC54C\uB9BC \uC5C6\uC74C",profile:"\uD504\uB85C\uD544",dockSnapSlot:"\uB3C5 \uC0AC\uC804 \uC815\uC758 \uC2AC\uB86F",dockSnapDesc:"\uCC3D \uC774\uB3D9 \uC2DC \uBC18\uD22C\uBA85 \uAC80\uC740 \uC2AC\uB86F \uD45C\uC2DC",dockSnapHint:"\uC5EC\uAE30\uC5D0 \uB193\uC544 \uC2AC\uB86F\uC5D0 \uBC30\uCE58",qualityHigh:"\uB192\uC74C (1080p)",qualityMedium:"\uC911\uAC04 (890p)",qualityLow:"\uB0AE\uC74C (390p)",qualityAuto:"\uC790\uB3D9"};on.it={...on.en,desktop:"Spazio di lavoro",browser:"Browser",youtube:"YouTube",gallery:"Galleria",settings:"Impostazioni",menu:"Menu",store:"Store",env:"Ambienti",keyboard:"Tastiera",center:"Ricentra",search:"Cerca sul web",searchYt:"Cerca video",open:"Apri",close:"Chiudi",general:"Generale",hands:"Tracciamento mani",windows:"Finestre",dock:"Dock",perf:"Prestazioni",language:"Lingua",on:"Attivo",off:"Disattivo",sens:"Sensibilit\xE0",scale:"Scala",dist:"Distanza",curve:"Curvatura",size:"Dimensione",quality:"Qualit\xE0",apps:"App",recents:"Recenti",battery:"Batteria",net:"Rete",time:"Ora",libAll:"Tutti",libFilter:"Filtro",libGames:"Giochi",centered:"Ambiente centrato",langChanged:"Lingua modificata",langTitle:"Lingua",langContinue:"Continua",langPick:"Scegli la lingua",notif:"Notifiche",noNotif:"Nessuna notifica",profile:"Profilo",dockSnapSlot:"Slot predefinito Dock",dockSnapDesc:"Mostra finestra nera semitrasparente quando sposti le finestre",dockSnapHint:"Rilascia qui per agganciare",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Bassa (390p)",qualityAuto:"Automatica"};on.nl={...on.en,desktop:"Werkruimte",browser:"Browser",youtube:"YouTube",gallery:"Galerij",settings:"Instellingen",menu:"Menu",store:"Winkel",env:"Omgevingen",keyboard:"Toetsenbord",center:"Centreren",search:"Zoeken op het web",searchYt:"Video\u2019s zoeken",open:"Openen",close:"Sluiten",general:"Algemeen",hands:"Handtracking",windows:"Vensters",dock:"Dock",perf:"Prestaties",language:"Taal",on:"Aan",off:"Uit",sens:"Gevoeligheid",scale:"Schaal",dist:"Afstand",curve:"Kromming",size:"Grootte",quality:"Kwaliteit",apps:"Apps",recents:"Recent",battery:"Batterij",net:"Netwerk",time:"Tijd",libAll:"Alles",libFilter:"Filter",libGames:"Games",centered:"Omgeving gecentreerd",langChanged:"Taal gewijzigd",langTitle:"Taal",langContinue:"Doorgaan",langPick:"Kies je taal",notif:"Meldingen",noNotif:"Geen nieuwe meldingen",profile:"Profiel",dockSnapSlot:"Vooraf ingesteld Dock-vak",dockSnapDesc:"Toon halftransparant zwart vak tijdens verplaatsen van vensters",dockSnapHint:"Laat hier los om te plaatsen",qualityHigh:"Hoog (1080p)",qualityMedium:"Gemiddeld (890p)",qualityLow:"Laag (390p)",qualityAuto:"Automatisch"};on.ru={...on.en,desktop:"\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",browser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440",youtube:"YouTube",gallery:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",menu:"\u041C\u0435\u043D\u044E",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",env:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",keyboard:"\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",center:"\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0441\u0435\u0442\u0438",searchYt:"\u041F\u043E\u0438\u0441\u043A \u0432\u0438\u0434\u0435\u043E",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",general:"\u041E\u0431\u0449\u0438\u0435",hands:"\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0440\u0443\u043A",windows:"\u041E\u043A\u043D\u0430",dock:"\u0414\u043E\u043A",perf:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",language:"\u042F\u0437\u044B\u043A",on:"\u0412\u043A\u043B.",off:"\u0412\u044B\u043A\u043B.",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",scale:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431",dist:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",curve:"\u0418\u0437\u0433\u0438\u0431",size:"\u0420\u0430\u0437\u043C\u0435\u0440",quality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",apps:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",recents:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",battery:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F",net:"\u0421\u0435\u0442\u044C",time:"\u0412\u0440\u0435\u043C\u044F",libAll:"\u0412\u0441\u0435",libFilter:"\u0424\u0438\u043B\u044C\u0442\u0440",libGames:"\u0418\u0433\u0440\u044B",centered:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",langChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0451\u043D",langTitle:"\u042F\u0437\u044B\u043A",langContinue:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",langPick:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A",notif:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",noNotif:"\u041D\u0435\u0442 \u043D\u043E\u0432\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",profile:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",dockSnapSlot:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0442 \u0434\u043E\u043A\u0430",dockSnapDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u0447\u0451\u0440\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043E\u043A\u043E\u043D",dockSnapHint:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F",fingerTouch:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C (\u0431\u0435\u0437 \u0449\u0438\u043F\u043A\u0430)",fingerTouchDesc:"\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442; \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0443\u043A\u0438 \u0432\u043F\u0435\u0440\u0451\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 (\u0431\u0435\u0437 \u043B\u0443\u0447\u0430 \u0438 \u043A\u0440\u0443\u0436\u043A\u0430)",qualityHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qualityMedium:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qualityLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",qualityAuto:"\u0410\u0432\u0442\u043E"};var zo=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E",table:"ja"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",table:"ru"},{id:"de",label:"Deutsch",table:"de"},{id:"ko",label:"\uD55C\uAD6D\uC5B4",table:"ko"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano",table:"it"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands",table:"nl"},{id:"pt-PT",label:"Portugu\xEAs (Portugal)",table:"pt"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),a1="pt",Yc=n=>zo.find(e=>e.id===n)||zo.find(e=>e.id===a1);var Dh=()=>Yc(je.lang).table||"pt",O=n=>(on[Dh()]||on.pt)[n]||on.pt[n]||n,Nr=n=>zo.some(e=>e.id===n&&e.table)?(je.lang=n,qe(),Ee("lang"),!0):!1,Wc={},Ve=(n,e)=>((Wc[n]||(Wc[n]=[])).push(e),e),Ee=(n,e)=>(Wc[n]||[]).forEach(t=>t(e));function ht(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(ht._t),ht._t=setTimeout(()=>e.classList.remove("on"),2400)}var Fe=new La,xe=new Gt(72,1,.05,120);xe.rotation.order="YXZ";var St=new En;Fe.add(St);var qt=1.55;xe.position.set(0,qt,0);zc({settings:je,camera:xe,contentRoot:St});var za=me?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new Rr({antialias:!0,alpha:!0});me||(za.setClearColor(0,0),document.getElementById("gl").appendChild(za.domElement));var ce=me?new Uc:new Hc;document.getElementById("css3d").appendChild(ce.domElement);if(me){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}var Ph=Object.freeze({high:{id:"high",height:1080,label:"1080p",dpr:2},medium:{id:"medium",height:890,label:"890p",dpr:1.55},low:{id:"low",height:390,label:"390p",dpr:1}}),qc="medium",kh=()=>je.quality==="auto"?qc:Ph[je.quality]?je.quality:"medium",d0=()=>Ph[kh()]||Ph.medium;function h0(){let n=kh();return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.55)}function p0(){var t,i;let n=kh(),e=d0();document.documentElement.dataset.quality=je.quality,document.documentElement.dataset.qualityTier=n,document.documentElement.dataset.qualityRes=e.label,(i=(t=window.NativeXR)==null?void 0:t.setQuality)==null||i.call(t,n)}function jc(){p0(),me||(Ft.width=innerWidth,Ft.height=innerHeight);let n=Ft.width,e=Ft.height;xe.aspect=n/e,xe.updateProjectionMatrix(),za.setPixelRatio(h0()),za.setSize(n,e),ce.setSize(n,e),Ee("resize")}addEventListener("resize",jc);addEventListener("orientationchange",()=>setTimeout(jc,120));jc();Ve("quality",jc);var o1=Object.freeze(["passthrough","sunset","dusk","cinema","lagoon","virtual","palm","night","space","tropical","lakeside"]),Oh=()=>[{id:"sunset",name:O("envSunset"),thumb:"./env/sunset.jpg"},{id:"passthrough",name:O("envPass"),thumb:null},{id:"dusk",name:O("envDusk"),thumb:"./env/dusk.jpg"},{id:"palm",name:O("envPalm"),thumb:"./env/palm.jpg"},{id:"lagoon",name:O("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:O("envVirtual"),thumb:"./env/virtual.jpg"},{id:"night",name:O("envNight"),thumb:"./env/night.jpg"},{id:"space",name:O("envSpace"),thumb:"./env/space.jpg"},{id:"cinema",name:O("envCinema"),thumb:"./env/cinema.jpg"},{id:"tropical",name:O("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:O("envLakeside"),thumb:"./env/lakeside.jpg"}];function Gi(n){var e,t;je.env=o1.includes(n)?n:"passthrough",je.envChosen=1,je.env!=="passthrough"&&(je.panorama=je.env),qe(),Ee("env",je.env),(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,je.env)}var vi=n=>Gi(n?"passthrough":je.panorama),zn={ok:!1,has:!1,q:new nt,tmp:new nt,e:new ri},l1=new nt,c1=new nt(-Math.SQRT1_2,0,0,Math.SQRT1_2),u1=new k(0,0,1),Xc=Math.PI/180;function d1(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*Xc}function h1(n){n.alpha!=null&&(zn.has=!0,zn.e.set(n.beta*Xc,n.alpha*Xc,-n.gamma*Xc,"YXZ"),zn.tmp.setFromEuler(zn.e),zn.tmp.multiply(c1),zn.tmp.multiply(l1.setFromAxisAngle(u1,-d1())),zn.q.copy(zn.tmp))}async function Dr(){if(me)return zn.ok=zn.has=!0,Ee("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(ht("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",h1,!0),zn.ok=!0,setTimeout(()=>{zn.has||ht("Sem girosc\xF3pio: arraste para olhar")},1200),Ee("gyro",!0),!0)}catch{return ht("Girosc\xF3pio indispon\xEDvel"),!1}}var p1=()=>zn.ok&&zn.has,Ir=null,Ba=0,Ih=0;addEventListener("pointerdown",n=>{me||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Ir={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Ir&&(Ba-=(n.clientX-Ir.x)*.0032,Ih=Math.max(-1.2,Math.min(1.2,Ih-(n.clientY-Ir.y)*.0032)),Ir={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Ir=null);addEventListener("pointercancel",()=>Ir=null);function Wi(){Wt.reset();let n=new ri().setFromQuaternion(xe.quaternion,"YXZ");St.rotation.y=n.y,St.position.set(0,0,0),xe.position.set(0,qt,0),Ee("recenter"),ht(O("centered"))}var f0=[],Ho=n=>f0.push(n),c0=performance.now(),Vc=0,Rh=0,Ch=0,Gc=0,Lh=0,$c=0,Yn=null,m0=()=>{let n=performance.now();Ch>0&&(Gc+=(n-Ch)/1e3,Lh++,Gc>=1&&($c=Math.round(Lh/Gc),Gc=0,Lh=0)),Ch=n};function Nh(n){let e=Math.min((n-c0)/1e3,.05);if(c0=n,me||(p1()?(xe.quaternion.slerp(zn.q,1-Math.exp(-e*12)),Ba&&(xe.rotateY(Ba),Ba=0)):(xe.quaternion.setFromEuler(new ri(Ih,xe.rotation.y+Ba,0,"YXZ")),Ba=0)),Wt.update(n,e),xe.position.set(Wt.out.x,qt+Wt.out.y,Wt.out.z),window.__gorillaStereoOverlay){ce.render(Fe,xe),requestAnimationFrame(Nh);return}for(let t of f0)t(e,n);if(za.render(Fe,xe),ce.render(Fe,xe),Vc+=e,Rh++,Vc>=1){let t=Math.round(Rh/Vc);if(je.quality==="auto"){let s=me&&je.handsOn&&$c>=15?Math.min(t,$c*2):t,r=s>=52?"high":s>=34?"medium":"low";r!==qc&&(qc=r,p0(),za.setPixelRatio(h0()),Ee("quality-tier",qc))}let i=document.getElementById("fps");i.textContent=je.showFps?t+" fps \xB7 "+d0().label+(me&&je.handsOn?" \xB7 tracking "+$c+" fps":"")+(me&&je.handsOn?g1():""):"",Vc=0,Rh=0}requestAnimationFrame(Nh)}var f1=typeof location<"u"&&(new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1")),m1=typeof location<"u"&&location.hash.includes("onboarding=skip");f1||(requestAnimationFrame(Nh),m1&&!je.entryEnvChosen?vi(!0):Gi(je.env));if(me){let n=new Ae,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),xe.quaternion.setFromRotationMatrix(n),xe.position.set(Wt.out.x,qt+Wt.out.y,Wt.out.z),xe.updateMatrixWorld(!0),e&&(St.rotation.y=new ri().setFromQuaternion(xe.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=ht,window.nextvrDiag=t=>{Yn=t}}function g1(){if(!Yn)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n(Yn.camera);t!==null&&e.push("cam "+t);let i=n(Yn.infer);return i!==null&&e.push("infer "+i+"ms"),Yn.delegate&&e.push(String(Yn.delegate).split(" ")[0]),typeof Yn.narrow=="number"&&typeof Yn.wide=="number"&&Yn.narrow+Yn.wide>0&&e.push("slots "+(Yn.narrow>=Yn.wide?1:2)),n(Yn.stale)>0&&e.push("stale "+Math.round(Yn.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var Zc=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},Kc=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var xi=[],ge={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},Ks=new Zc,Ha=new Kc,Bh=Math.tan(36*Math.PI/180),v0=Bh*1.5,Qc=!1,eu=-1/0,Go=2*v0,Wo=2*Bh,Uh=null,x0=500;zc({getHands:()=>({list:xi,lastAt:eu})});var zh=()=>Qc;async function qi(){return me?(Qc=!0,window.NativeXR.hands(!0),Ee("hands",!0),!0):(ht("Hand tracking requires the Android camera pipeline."),!1)}function b0(n){for(let e of n)Ee(`pinch${e}`,ge)}function qo(){let n=Ks.cancel();Ha.reset(),ge.down=ge.active=!1,ge.phase=Ks.phase,ge.hand=null,ge.mode="idle",x1(),b0(n)}function Xo(){qo()}function Hh(){qo(),xi.length=0,Qc=!1,eu=-1/0,Ee("phonehands",{hands:[],consumed:new Set,scaleX:Go,scaleY:Wo}),me&&window.NativeXR.hands(!1),Ee("hands",!1)}function $o(n){let e=Go*2*v0,t=Wo*2*Bh;return{x:.5+n[0]/e,y:.5-n[1]/t}}var y1=250,g0=1.6,y0=.06,jn={x:0,y:0},Vo=0,Jc=0;function tu(n=performance.now()){if(!ge.active)return{x:ge.x,y:ge.y};let e=n-Vo;if(!(e>0)||e>y1)return{x:ge.x,y:ge.y};let t=e/1e3,i=s=>Math.max(-y0,Math.min(y0,s));return{x:Math.min(1,Math.max(0,ge.x+i(jn.x*t))),y:Math.min(1,Math.max(0,ge.y+i(jn.y*t)))}}function v1(n,e,t=0){let i=t>0&&Jc>0?(t-Jc)/1e9:Vo>0?(e-Vo)/1e3:-1;if(ge.active&&i>.004&&i<.3){let s=r=>Math.max(-g0,Math.min(g0,r));jn.x+=(s((n.x-ge.x)/i)-jn.x)*.35,jn.y+=(s((n.y-ge.y)/i)-jn.y)*.35,Math.hypot(jn.x,jn.y)<.12&&(jn.x=jn.y=0)}else i>=0&&i<=.004||(jn.x=jn.y=0);Vo=e,Jc=t>0?t:0}function x1(){jn.x=jn.y=0,Vo=0,Jc=0}me&&(window.nextvrHands=(n,e=1,t=1)=>{var u;if(!Qc)return;m0();let i=performance.now();if(Go=e,Wo=t,eu=i,x0=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),xi.splice(0,xi.length,...n.hands||[]),Ee("handframe",{...n,hands:xi}),window.__gorillaStereoOverlay){(u=window.__gorillaOnHands)==null||u.call(window,i);return}let r={hands:xi,consumed:new Set,scaleX:Go,scaleY:Wo};if(a0(r),Ee("phonehands",r),r.blockFar){qo();return}let a=xi.filter(d=>!r.consumed.has(d.id)),o=Ks.down&&a.find(d=>d.id===Ks.handId)||a.find(d=>d.pinching)||[...a].sort((d,h)=>h.palmWidth-d.palmWidth)[0];if(!o){qo();return}let l=$o(o.aim);v1(l,i,Number(n.timestampNs)||0),ge.x=l.x,ge.y=l.y,ge.active=!0,ge.hand=o;let c=o.predicted?[]:Ks.update(o.id,o.pinching);c.includes("down")?Ha.begin(o.id,l.x*Ft.width,l.y*Ft.height,i):c.includes("up")?Ha.end():c.includes("cancel")&&Ha.reset(),Ks.down&&!o.predicted&&Ha.sample(o.id,l.x*Ft.width,l.y*Ft.height,i),ge.mode=Ha.mode,ge.down=Ks.down,ge.phase=Ks.phase,b0(c),ge.down&&Ee("pinchsample",ge)});var Fh=document.getElementById("overlay");Fh.getContext("2d").clearRect(0,0,Fh.width,Fh.height);Ho(()=>{var n,e;!window.__gorillaStereoOverlay&&me&&Uh!==!!A.handDraw&&(Uh=!!A.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,Uh)),xi.length&&performance.now()-eu>x0&&(xi.length=0,qo(),Ee("phonehands",{hands:[],consumed:new Set,scaleX:Go,scaleY:Wo}))});var b1=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),_1=Object.freeze({gauge:'<path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 3-4"/><circle cx="12" cy="14" r="1"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',edit3:'<path d="M12 20h9M4 17.5l-.5 3.5 3.5-.5L19 8.5 15.5 5z"/><path d="m14 6.5 3.5 3.5"/>',zap:'<path d="M13 2 4 13h7l-1 9 10-12h-7z"/>',maximize:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',distance:'<path d="M6 12h12M9 9l-3 3 3 3M15 9l3 3-3 3"/>',curve:'<path d="M3 17c3-8 15-8 18 0"/><path d="M4 20h2M18 20h2"/>',appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',vision:'<path d="M4.2 8.6C4.7 6.5 6.4 5 8.6 5h6.8c2.2 0 3.9 1.5 4.4 3.6l.8 4.2c.3 1.8-1.1 3.5-3 3.5h-1.5c-.6 0-1.2-.2-1.7-.7l-1.3-1.1h-2.2l-1.3 1.1c-.5.5-1.1.7-1.7.7H6.4c-1.9 0-3.3-1.7-3-3.5z"/><path d="M3.6 9 1.8 8.2M20.4 9l1.8-.8M12 6.4v4.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="M20 12H5"/><path d="m12 19-7-7 7-7"/>',star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.3 12 2"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),w1=Object.freeze({..._1,...b1});function te(n,e="ui-icon"){let t=w1[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var Yt=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),Yo=(n,e,t)=>Math.max(e,Math.min(t,n)),Hn=n=>Number.isFinite(n)?n:0;function Vh(n,e=0,t=1.55,i=null){let s=Hn(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,a=Hn(n==null?void 0:n.z),o=Number.isFinite(i)?i:Math.hypot(s,a);o<1e-5&&(o=Yt.minDistance,s=0,a=-o);let l=Yo(Math.atan2(-s,-a),-Yt.maxYaw,Yt.maxYaw);o=Yo(o,Yt.minDistance,Yt.maxDistance);let c=Math.max(0,Hn(e)),u=t+Yt.lowerEdgeFromEye+c,d=t+Yt.upperEdgeFromEye-c;return r=u<=d?Yo(r,u,d):t,{x:-Math.sin(l)*o,y:r,z:-Math.cos(l)*o}}function _0(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((Hn(e.x)-Hn(n.x))*t,(Hn(e.y)-Hn(n.y))*i)}function Gh(n,e,t,i){return _0(n,e,t,i)>=Yt.dragActivationPx}function w0(n,e,t,i){return _0(n,e,t,i)>=Yt.resizeActivationPx}function Wh(n,e){let t=Hn(n==null?void 0:n.x),i=Hn(n==null?void 0:n.y),s=Hn(n==null?void 0:n.z),r=Hn(e==null?void 0:e.x)-t,a=Hn(e==null?void 0:e.y)-i,o=Hn(e==null?void 0:e.z)-s,l=Math.hypot(r,a,o);if(!Number.isFinite(l)||l<=Yt.motionDeadZone)return{x:t,y:i,z:s};let u=Math.min(l,Yt.maxMotionStep)/l;return{x:t+r*u,y:i+a*u,z:s+o*u}}var S1=Object.freeze({maxAngle:1.15});function jo(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(S1.maxAngle,e))}function nu(n,e){let t=jo(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function iu(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function Js(n,e=Yt.maxResize){let t=Yo(Hn(e),Yt.minResize,Yt.maxResize);return Yo(Number.isFinite(n)?n:1,Yt.minResize,t)}function S0(n,e,t=1.55){let i=Math.max(1e-5,Hn(e)),s=Math.min(n-(t+Yt.lowerEdgeFromEye),t+Yt.upperEdgeFromEye-n);return Js(s/i)}function M0(n,e,t,i){return!(e>1)||!Number.isFinite(t)?Js(n,i):Js(n*t/e,i)}function A0(n,e){let t=Js(n),s=Js(e)-t;return Math.abs(s)<.004?t:Js(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function E0(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let a=0;a<i;a++)r.push({angle:a===0?0:a%2?e:-e,row:0});for(let a=0;a<s;a++)r.push({angle:s===1?0:a===0?-e/2:e/2,row:1});return r}var T0=1.22;function qh(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function R0({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=qh(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function C0(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var Zo=n=>Number.isFinite(n)?n:0,L0=(n,e,t)=>Math.max(e,Math.min(t,n));function Va(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=Zo(n==null?void 0:n.x),a=Zo(n==null?void 0:n.y),o=Zo(n==null?void 0:n.z),l=a-s,c=Math.hypot(r,o),u=Math.hypot(r,l,o)||1e-6,d=Math.max(0,Zo(e)),h=Math.max(0,Zo(t));return{x:r,y:a,z:o,yaw:Math.atan2(-r,-o),pitch:c>1e-6?Math.atan2(l,c):l>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(d,c||1e-6),halfPitch:Math.atan2(h,u)}}function P0(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return Va(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function Xh(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return Va({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function M1(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,a=n.pitch-n.halfPitch,o=n.pitch+n.halfPitch,l=e.pitch-e.halfPitch,c=e.pitch+e.halfPitch,u=Math.min(i,r)-Math.max(t,s),d=Math.min(o,c)-Math.max(a,l);return u>0&&d>0?-Math.sqrt(u*d):Math.hypot(Math.max(-u,0),Math.max(-d,0))}function su(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,a=Number.isFinite(t.gap)?t.gap:.03,o=n.box||Va(n,n.hw||.5,n.hh||.35),l=0,c=0;for(let h of e){let m=M1(o,h);if(m<0){let g=m*m;l+=26e3*g+1e3,g>c&&(c=g)}else if(m<a){let g=a-m;l+=900*g*g}}let u=Math.hypot(o.x,o.z)||1e-6;l+=26*Math.abs(o.yaw),Math.abs(o.yaw)>r&&(l+=26*(Math.abs(o.yaw)-r)*40),u>s&&(l+=34*(u-s));let d=Number.isFinite(t.lift)?t.lift:o.y;return l+=Math.abs(o.y-d)*12,{score:l,overlap:c,yaw:o.yaw,radius:u}}function A1({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:a=3,ringStep:o=.16,rows:l=2,topRowStep:c=1.22}={}){let u=[],d=Number.isFinite(e)?e:n,h=[0];for(let m=1;m<=6;m++){let g=m*t;if(g>r+1e-9)break;h.push(g,-g)}for(let m=0;m<l;m++){let g=m===0?d:d+s*2*(c-1)+s;for(let y=0;y<a;y++){let f=i+y*o;for(let p of h){let x=L0(p,-r,r);u.push({x:Math.sin(x)*f,y:g,z:-Math.cos(x)*f,angle:x,row:m,radius:f})}}}return u}function I0({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,lift:l=null,rings:c=3,ringStep:u=.16,rows:d=2,gap:h=.03,topRowStep:m=1.22,improvement:g=1e-6}={}){let y={eye:t,desiredDistance:s,maxYaw:o,gap:h,lift:l??t},f=A1({eye:t,lift:l??t,step:i,distance:s,halfHeight:a,outerLimit:o,rings:c,ringStep:u,rows:d,topRowStep:m}),p=null;for(let x of f){let v=Va(x,r,a),{score:w,overlap:E}=su({...x,box:v},n,y),R={x:x.x,y:x.y,z:x.z,angle:x.angle,row:x.row,radius:x.radius,score:w,overlap:E,box:v};(!p||R.score<p.score-g)&&(p=R)}if(e){let x=Va(e,r,a),{score:v,overlap:w}=su({...e,box:x},n,y),E={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:v,overlap:w,box:x,desired:!0};(!p||E.score<=p.score+g)&&(p=E)}return p}function N0({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,gap:l=.03,maxShift:c=3}={}){let u={eye:t,desiredDistance:s,maxYaw:o,gap:l,lift:n.y},d=(f,p,x)=>Va({x:f,y:p,z:x},r,a),h=su({...n,box:d(n.x,n.y,n.z)},e,u);if(h.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:h.score,moved:!1,overlap:0};let m={x:n.x,y:n.y,z:n.z,score:h.score,overlap:h.overlap},g=Math.hypot(n.x,n.z)||s,y=Math.atan2(-n.x,-n.z);for(let f=1;f<=c;f++)for(let p of[1,-1]){let x=L0(y+p*f*i,-o,o),v=-Math.sin(x)*g,w=-Math.cos(x)*g,{score:E,overlap:R}=su({x:v,y:n.y,z:w,box:d(v,n.y,w)},e,u);E<m.score&&(m={x:v,y:n.y,z:w,score:E,overlap:R})}return{...m,moved:m.x!==n.x||m.z!==n.z}}var ru={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3};function au(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}var Ga=class{constructor({armMs:e=ru.armMs,graceMs:t=ru.graceMs,holdMs:i=ru.holdMs,progressHoldMs:s=ru.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,a=s&&r;if(this.open){if(a)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let o=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:o,active:!1}}if(a){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let o=i-this.startedAt;return o>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,o/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var vt=.00105,fe=[],Za=null,Vn={y:qt-.6,z:-1.7,h:.12};function $0(n=null){let e=[];for(let t of fe)t===n||t.hidden||t.onboarding||e.push(P0(t));if(Pi&&pt.offsetWidth>0){let t=Xh(_i);t&&e.push(t)}if(at&&Pn&&!ol&&at.element.offsetWidth>0){let t=Xh(Pn);t&&e.push(t)}return e}var tp=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:a=!1,chrome:o=!0,resizable:l=!0}){this.onboarding=a,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new k,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=jo(a?0:A.win360?A.win360K:0),this.curveRadius=nu(s,this.curve);let c=document.createElement("div");c.className="win-shell",c.dataset.windowId=e,c.dataset.resizeScale="1",c.style.width=s+"px";let u=document.createElement("div");u.className="win",u.style.width=s+"px",u.style.height=r+"px",u.innerHTML=`<div class="win-bar">
        <button class="win-new-tab-btn" data-win-new-tab type="button" title="Criar nova guia"><span class="win-new-tab-plus">+</span><span>Criar nova guia</span></button>
        <div class="win-grip" style="display:none"></div><div class="win-title" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden"></div>
        <div class="win-top-right-acts">
          <button class="win-btn" data-act="pin" aria-label="${O("repin")}" title="${O("repin")}">${te("crosshair")}</button>
          <button class="win-btn wide fold-btn" data-act="curve" aria-label="360\xB0" title="Dobra / 360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
          <button class="win-btn close" data-act="close" aria-label="${O("close")}" title="${O("close")}">${te("x")}</button>
        </div>
      </div><div class="win-body"></div>`,u.querySelector(".win-title").textContent=t,u.querySelector(".win-body").appendChild(i),u.addEventListener("pointerdown",()=>Kt(this),!0),u.querySelector(".win-bar").addEventListener("click",m=>{var f;if(m.target.closest("[data-win-new-tab]")){(f=window.nextvrOpenBrowserOption)==null||f.call(window,"new-tab");return}let y=m.target.closest("[data-act]");y&&(y.dataset.act==="close"?Nt(this):y.dataset.act==="curve"?this.setCurve(this.curve>0?0:jo(A.win360K)):D0(this))}),u.addEventListener("click",m=>{var y;let g=m.target.closest('[data-act="pin"]');g&&!((y=u.querySelector(".win-bar"))!=null&&y.contains(g))&&D0(this)});let d=document.createElement("div");d.className="win-handle",d.title=O("moveWindow"),d.setAttribute("aria-label",O("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.hidden=!l,h.title=O("resize"),h.setAttribute("aria-label",O("resize")),h.innerHTML=te("move"),c.append(u,d,h),this.el=u,this.shell=c,this.handle=d,this.resizeHandle=h,c.dataset.curve=String(this.curve),(a||!o)&&(u.querySelector(".win-bar").hidden=!0),this.obj=new Pr(c),this.obj.scale.setScalar(vt*(this.onboarding?$n.welcomeScale:A.winScale)),St.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=$h(s*vt,r*vt,this,this.hitSegments),this.bendHit(),this.grab=$h(260*vt,90*vt,this),this.grab.userData.isHandle=!0,this.resizeHit=$h(80*vt,80*vt,this),this.resizeHit.userData.isResize=!0,!me){let m=g=>({x:g.clientX/Ft.width,y:g.clientY/Ft.height});d.addEventListener("pointerdown",g=>{g.stopPropagation();let y=m(g);up(this,y.x,y.y,"desktop"),d.setPointerCapture(g.pointerId)}),d.addEventListener("pointermove",g=>{if(ut.win===this){let y=m(g);dp(y.x,y.y)}}),d.addEventListener("pointerup",_s),d.addEventListener("pointercancel",_s),h.addEventListener("pointerdown",g=>{g.stopPropagation();let y=m(g);J0(this,y.x,y.y),h.setPointerCapture(g.pointerId)}),h.addEventListener("pointermove",g=>{if(Bt.win===this){let y=m(g);Q0(y.x,y.y)}}),h.addEventListener("pointerup",ir),h.addEventListener("pointercancel",ir)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new Tn(this.w*vt,this.h*vt,i,1),this.hitSegments=i,this.curveRadius=nu(this.w,this.curve),this.bendHit(),this.apply(),Ii(),Ee("wins",fe)}setCurve(e){this.curve=jo(e),this.curveRadius=nu(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new Tn(this.w*vt,this.h*vt,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return iu(e,this.curveRadius)*vt}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,iu(e.getX(t)/vt,this.curveRadius)*vt);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*A.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(qt-e.position.y,i)*A.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?$n.welcomeScale:A.winScale)*this.resizeScale;e.scale.setScalar(vt*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let a=(this.h/2+34)*vt*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-a),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation);let o=28;this.resizeHit.translateX((this.w/2+o)*vt*r),this.resizeHit.translateY(-(this.h/2+o)*vt*r),this.resizeHit.translateZ(this.bulge(this.w/2)+.003),this.resizeHit.scale.setScalar(r),e.updateMatrixWorld(!0),this.hit.updateMatrixWorld(!0),this.grab.updateMatrixWorld(!0),this.resizeHit.updateMatrixWorld(!0)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&ut.win===this&&_s(),t&&Bt.win===this&&ir(),(s=(i=ce).invalidate)==null||s.call(i))}};function $h(n,e,t,i=1){let s=new wt(new Tn(n,e,i,1),new an({visible:!1}));return s.userData.win=t,St.add(s),s}function Ii(){let n=fe.some(o=>!o.onboarding&&!o.hidden);for(let o of fe)o.onboarding&&(o.id==="spatial-launcher"?(n?(o.resizeScale=.88,o.target.set(0,qt-.22,-.84)):(o.resizeScale=1.24,o.target.set(0,qt-.01,-.84)),o.apply()):o.target.set(0,qt,-$n.welcomeDistance));let e=fe.filter(o=>o.pinned&&!o.onboarding&&!o.hidden),t=e.length;if(!t)return;let i=me?A.winDist:-Vn.z+.5+(A.winDist-2.2),s=Math.max(...e.map(o=>o.w*o.resizeScale))*vt*A.winScale,r=me?R0({width:s,dist:i,gap:.5,outerLimit:Yt.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));if(E0(t,r).forEach(({angle:o,row:l},c)=>{let u=e[c],d=u.h*vt*A.winScale*u.resizeScale,h=Vn.y+Vn.h/2+.14+d/2,m=Math.sin(o)*i,g=-Math.cos(o)*i,y=l===0?h:Math.min(h+d*2*(T0-1)+d,qt+Yt.upperEdgeFromEye-d);u.target.set(m,y,g)}),!me)return;let a=Math.min(r,qh(s,i)*.6);for(let o of e){let l=o.w*vt*A.winScale*o.resizeScale/2,c=o.h*vt*A.winScale*o.resizeScale/2,u=N0({desired:{x:o.target.x,y:o.target.y,z:o.target.z},occupied:$0(o),eye:qt,step:a,distance:i,halfWidth:l,halfHeight:c,outerLimit:Yt.maxYaw-.06,maxShift:4});o.target.set(u.x,u.y,u.z)}}Ve("recenter",Ii);Ve("resize",Ii);function Jt(n){var s,r;let e=fe.find(a=>a.id===n.id);if(e)return Kt(e),e;let t=fe.filter(a=>!a.onboarding&&!a.hidden);if(t.length>=5){let a=C0(t);a&&(ht(`${O("arcFull")}: ${a.title}`),Nt(a))}let i=new tp(n);return fe.push(i),Ii(),Kt(i),i.obj.position.copy(i.target),n.free&&T1(i,n.at),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),(r=(s=ce).invalidate)==null||r.call(s),Ee("wins",fe),i}function T1(n,e=null){n.pinned=!1;let t=n.w*vt*A.winScale*n.resizeScale/2,i=n.h*vt*A.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Vn.y+Vn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-A.winDist)||A.winDist,a=I0({occupied:$0(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-A.winDist},eye:qt,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:Yt.maxYaw-.06,lift:s,rings:3,rows:1});a&&n.target.set(a.x,a.y,a.z)}function Nt(n){var s,r,a;if(typeof n=="string"&&(n=fe.find(o=>o.id===n)),!n)return;let e=fe.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);gt&&(gt.nativeId?gt.nativeId===i:n.el.contains(gt))&&oi(!1),il&&n.el.contains(il)&&(il=null),ut.win===n&&_s(),Bt.win===n&&ir(),fe.splice(e,1),(s=n._cleanupQB)==null||s.call(n),St.remove(n.obj),St.remove(n.hit),St.remove(n.grab),St.remove(n.resizeHit),n.shell.remove(),Za===n&&(Za=fe[fe.length-1]||null),Ii(),(a=(r=ce).invalidate)==null||a.call(r),Ee("wins",fe)}function Kt(n){Za!==n&&(Za=n,n.lastFocus=performance.now(),fe.forEach(e=>e.el.classList.toggle("focus",e===Za)))}function D0(n){var e,t,i,s;n.pinned=!0,n.shell.classList.remove("free"),Ii(),n.obj.position.copy(n.target),n.apply(),(t=(e=ce).invalidate)==null||t.call(e),(s=(i=ce).render)==null||s.call(i,Fe,xe)}var rl=()=>Za,li=new Io,cu=new Ye,ut={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},Bt={win:null,start:null,active:!1,startScale:1,startDistance:1},vn={source:null,start:null,active:!1,plane:null,anchor:null},ai=document.createElement("div");ai.className="win-drop-slot";ai.dataset.windowId="drop-slot";ai.hidden=!0;ai.innerHTML='<div class="win-drop-slot-inner"><span class="win-drop-slot-badge"></span></div>';var tr=new Pr(ai);tr.visible=!1;St.add(tr);var uu=null,du=!1;function R1(n){let e=me?A.winDist:-Vn.z+.5+(A.winDist-2.2),t=n.h*vt*A.winScale*n.resizeScale,i=Vn.y+Vn.h/2+.14+t/2,s=sr||0,r=.56;return[0,-r,r].map(a=>{let o=s+a;return new k(Math.sin(o)*e,i,-Math.cos(o)*e)})}function Y0(n){var g;if(!n||A.spatialLauncher||A.dockSnapSlot===0){j0();return}let e=R1(n),t=fe.filter(y=>y!==n&&!y.onboarding&&!y.hidden),i=e.filter(y=>!t.some(f=>f.obj.position.distanceTo(y)<.22)),s=i.length?i:e,r=s[0],a=n.obj.position.distanceTo(s[0]);for(let y=1;y<s.length;y++){let f=n.obj.position.distanceTo(s[y]);f<a&&(r=s[y],a=f)}uu=r;let o=(g=ut.anchor)!=null&&g.center?St.worldToLocal(ut.anchor.center.clone()):n.obj.position;du=n.obj.position.distanceTo(o)>.04&&a<=.16,ai.style.width=n.w+"px",ai.style.height=n.h+"px";let c=ai.querySelector(".win-drop-slot-badge");c&&(c.textContent=O("dockSnapHint")),ai.classList.toggle("is-ready",du),ai.hidden=!1,tr.position.copy(r);let u=Math.atan2(-r.x,-r.z)*A.winCurve,d=Math.hypot(r.x,r.z)||.001,h=Math.atan2(qt-r.y,d)*A.winTilt*-1;tr.rotation.set(h,u,0,"YXZ");let m=A.winScale*n.resizeScale;tr.scale.setScalar(vt*m),tr.visible=!0}function j0(){var n,e;uu=null,du=!1,(tr.visible||!ai.hidden)&&(tr.visible=!1,ai.hidden=!0,ai.classList.remove("is-ready"),(e=(n=ce).invalidate)==null||e.call(n))}function Gr(n,e,t=li){return xe.updateMatrixWorld(!0),St.updateMatrixWorld(!0),cu.set(n*2-1,1-e*2),t.setFromCamera(cu,xe),t}function C1(n){return n.h*vt*A.winScale*n.resizeScale/2}function L1(n,e,t=null){let i=Vh(e,C1(n),qt,t);return new k(i.x,i.y,i.z)}function up(n,e,t,i="handle",s=null){if(n.onboarding||Bt.win)return!1;ut.win&&_s(),Kt(n),Gr(e,t);let r=n.obj.getWorldPosition(new k),a=new ni().setFromNormalAndCoplanarPoint(li.ray.direction.clone(),r),o=li.ray.intersectPlane(a,new k);if(!o)return!1;let l=St.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(ut,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:a,anchor:{hit:o.clone(),center:r.clone(),radius:c,applied:new k}}),!0}function P1(){let n=ut.win;!n||ut.active||(ut.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Ii(),Y0(n))}function dp(n,e){let t=ut.win;if(!t)return!1;Gr(n,e);let i=li.ray.intersectPlane(ut.plane,new k);if(!i)return!1;if(!ut.active){if(!Gh(ut.start,{x:n,y:e},Ft.width,Ft.height))return!1;P1()}let s=ut.anchor,r=i.clone().sub(s.hit);s.applied.copy(Wh(s.applied,r));let a=s.center.clone().add(s.applied),o=L1(t,St.worldToLocal(a),s.radius);return t.target.copy(o),t.obj.position.copy(t.target),Y0(t),!0}function _s(){let n=ut.win;n&&(du&&uu&&(n.target.copy(uu),n.obj.position.copy(n.target),n.apply()),n.shell.classList.remove("moving")),j0(),Object.assign(ut,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function Z0(n,e,t="pinch"){if(!Pi||ut.win||Bt.win)return!1;vn.start&&Ms(),Gr(n,e);let i=Cn.getWorldPosition(new k),s=new ni().setFromNormalAndCoplanarPoint(li.ray.direction.clone(),i),r=li.ray.intersectPlane(s,new k);return r?(Object.assign(vn,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new k}}),pt.classList.add("grab-armed"),At.setAttribute("aria-pressed","true"),!0):!1}function I1(){!vn.start||vn.active||(vn.active=!0,pt.classList.remove("grab-armed"),pt.classList.add("moving"))}function hp(n,e){if(!vn.start)return!1;Gr(n,e);let t=li.ray.intersectPlane(vn.plane,new k);if(!t)return!1;if(!vn.active){if(!Gh(vn.start,{x:n,y:e},Ft.width,Ft.height))return!1;I1()}let i=vn.anchor,s=t.clone().sub(i.hit);i.applied.copy(Wh(i.applied,s));let r=i.center.clone().add(i.applied),a=St.worldToLocal(r),o=Vh(a,Vn.h/2,qt),l=Math.max(qt-.55,Math.min(qt-.08,o.y));return Fr=new k(o.x,l,o.z),sr=Math.atan2(-o.x,-o.z),Qa(),!0}function Ms(){pt==null||pt.classList.remove("grab-armed","moving"),At==null||At.setAttribute("aria-pressed","false"),Object.assign(vn,{source:null,start:null,active:!1,plane:null,anchor:null})}function K0(n,e,t){xe.updateMatrixWorld(!0),St.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new k).project(xe),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*Ft.width,(t-r)*Ft.height)}function J0(n,e,t){return n.onboarding||ut.win?!1:(Bt.win&&ir(),Kt(n),Object.assign(Bt,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,K0(n,e,t))}),!0)}function Q0(n,e){let t=Bt.win;if(!t)return!1;if(!Bt.active){if(!w0(Bt.start,{x:n,y:e},Ft.width,Ft.height))return!1;Bt.active=!0,t.shell.classList.add("resizing")}let i=t.h*vt*A.winScale/2,s=Math.max(Bt.startScale,S0(t.obj.position.y,i,qt)),r=M0(Bt.startScale,Bt.startDistance,K0(t,n,e),s);return t.resizeScale=Js(A0(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function ir(){Bt.win&&Bt.win.shell.classList.remove("resizing"),Object.assign(Bt,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function ws(n,e){Gr(n,e);let t=[];for(let o of fe)o.hidden||(o.onboarding||t.push(o.resizeHit,o.grab),t.push(o.hit));let i=li.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),a=i.object.geometry.parameters;return{win:s,u:r.x/a.width+.5,v:.5-r.y/a.height,distance:i.distance}}var ey=ws;window.windowHitAt=ws;var ct=null,pn=null,N1=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function D1(n,e,t,i,s){var l,c;let r=s?N1(s):null;e===0&&(n.target=r,n.activation=r);let a=n.target||r;if(!a)return;let o=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";a.dispatchEvent(new PointerEvent(o,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function Jo(n,e,t=n.x,i=n.y,s=null){var r,a;if(n.id==="shell"&&((r=n.win)!=null&&r.onboarding))D1(n,e,t,i,s);else if(window.NativeXR.handTouch(n.id,e,t,i),e===1&&s){let o=(a=s.closest)==null?void 0:a.call(s,"[data-qb-url],[data-qb-act]");o&&o.click()}}function pp(n,e,t){let i=n.getBoundingClientRect(),s=i.left+e*(i.width||n.offsetWidth),r=i.top+t*(i.height||n.offsetHeight),a=document.elementFromPoint(s,r);if(a&&n.contains(a))return a;let o=null,l=c=>{for(let u of c.children){let d=u.getBoundingClientRect();d.width>0&&d.height>0&&s>=d.left&&s<=d.right&&r>=d.top&&r<=d.bottom&&(o=u),l(u)}};return l(n),o||n}function zr(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),a=document.elementFromPoint(r.left+i,r.top+s)||fp(t,i,s);if(e===0&&!(a!=null&&a.closest("[data-native-browser],[data-native-app]"))){let g=W1(a);g?oi(!0,g):oi(!1)}if(a==null?void 0:a.closest("[data-native-xr]")){ct=null;return}let l=a==null?void 0:a.closest("[data-native-app]");if(l){let g=l.getBoundingClientRect(),y=Th(l.offsetWidth,l.offsetHeight,+(l.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!y&&!ct)return;let f="app:"+l.dataset.nativeApp;if(ct&&ct.id!==f&&(Jo(ct,3),ct=null),e===0){if(!y)return;ct={id:f,win:n.win,x:y.u,y:y.v}}ct&&ct.id===f&&(y||e!==2)&&(y&&(ct.x=y.u,ct.y=y.v),Jo(ct,e,ct.x,ct.y)),(e===1||e===3)&&(ct=null);return}let c=a==null?void 0:a.closest("[data-native-browser]"),u=c==null?void 0:c.getBoundingClientRect(),d=c?c.dataset.nativeBrowser:"shell",h=r.left+i-((u==null?void 0:u.left)||0),m=r.top+s-((u==null?void 0:u.top)||0);ct&&ct.id!==d&&(Jo(ct,3),ct=null,e!==0)||(e===0&&(ct={id:d,win:n.win,x:h,y:m}),ct&&ct.id===d&&(ct.x=h,ct.y=m,Jo(ct,e,h,m,a)),(e===1||e===3)&&(ct=null))}function ty(){ct&&Jo(ct,3),ct=null,pn=null,_s(),ir(),Ms()}Ve("pinchcancel",ty);function nr(n,e){if(me){zr(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=fp(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function fp(n,e,t){let i=null,s=r=>{for(let a of r.children){let o=k1(a,n);e>=o.l&&e<=o.r&&t>=o.t&&t<=o.b&&(i=a,s(a))}};return s(n),i||n}function k1(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}var el=null,hu=!1;function mp(){el&&(clearTimeout(el),el=null)}Ve("pinchdown",()=>{var s,r;mp(),hu=!1;let n=ws(ge.x,ge.y),e=yu(ge.x,ge.y),t=H1(ge.x,ge.y),i=Vr(ge.x,ge.y);if(n!=null&&n.resize){J0(n.win,ge.x,ge.y);return}if(n!=null&&n.handle){up(n.win,ge.x,ge.y,"handle",(s=ge.hand)==null?void 0:s.id);return}if(t&&(!n||t.distance<=(n.distance??1/0)+.12)&&(!e||t.distance<e.distance)){Z0(ge.x,ge.y,"pinch");return}if(i&&(!n||i.distance<=(n.distance??1/0)+.15)&&(!e||i.distance<e.distance)){nl("down");return}if(e&&(!n||e.distance<n.distance)){vu(e.button);return}if(n){Kt(n.win);let a=pp(n.win.el,n.u,n.v);((r=a==null?void 0:a.closest)==null?void 0:r.call(a,'[data-spatial-builtin="browser"], [data-app="browser"]'))&&(el=setTimeout(()=>{el=null,hu=!0,pn=null,al("spatial")},2e3)),pn={win:n.win,hit:n};return}nl("down")});Ve("pinchsample",()=>{Yi&&cy(performance.now()),pn&&ge.mode==="drag"&&(nr(pn.hit,"down"),pn=null)});Ve("pinchup",()=>{if(mp(),hu){hu=!1,pn=null;return}if(Yi){As();return}if(bi>=0||Or||ja){nl("up");return}if(pn&&ge.mode==="drag"&&(nr(pn.hit,"down"),pn=null),pn){let t=ws(ge.x,ge.y),i=t&&!t.handle&&!t.resize&&t.win===pn.win?t:pn.hit;pn=null,nr(i,"down"),nr(i,"up");return}if(ct){let t=ws(ge.x,ge.y);t&&t.win===ct.win&&!t.handle&&!t.resize?zr(t,1):ty();return}if(Bt.win){ir();return}if(ut.win){_s();return}if(vn.start){hp(ge.x,ge.y),Ms();return}let n=Vr(ge.x,ge.y),e=ws(ge.x,ge.y);if(n&&(!e||n.distance<=(e.distance??1/0)+.15)){nl("up");return}if(e&&!e.handle&&!e.resize){nr(e,"up");return}nl("up")});var pt=document.createElement("div");pt.className="dock";var wi=document.createElement("div");wi.className="browser-tab-popup dock-browser-popup";wi.dataset.browserTabMenu="dock";wi.hidden=!0;wi.innerHTML=`
  <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
  <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
`;wi.addEventListener("click",n=>{var i;let e=n.target.closest("[data-browser-opt]");if(!e)return;n.stopPropagation();let t=e.dataset.browserOpt||"new-tab";Hr(),(i=window.nextvrOpenBrowserOption)==null||i.call(window,t)});var At=document.createElement("button");At.type="button";At.className="dock-grab";At.title=O("moveDock");At.setAttribute("aria-label",O("moveDock"));At.setAttribute("aria-pressed","false");var Cn=new Pr(pt);St.add(Cn);var _i=new wt(new Tn(1,1),new an({visible:!1})),Li=new wt(new Tn(1,1),new an({visible:!1})),Xi=new wt(new Tn(.26,.14),new an({visible:!1,side:Un}));St.add(_i,Li,Xi);function Hr(){var e,t,i,s;wi.hidden=!0;let n=document.querySelector('[data-browser-tab-menu="spatial"]');n&&(n.hidden=!0),(t=(e=ce).invalidate)==null||t.call(e),(s=(i=ce).render)==null||s.call(i,Fe,xe)}function al(n="dock"){var e,t,i,s,r,a;if(n==="spatial"){let o=document.querySelector('[data-browser-tab-menu="spatial"]');o&&(o.hidden=!1)}else{let o=gu("browser");o&&(wi.style.left=`${o.offsetLeft+o.offsetWidth/2}px`),wi.hidden=!1,Qa()}(t=(e=window.NativeXR)==null?void 0:e.click)==null||t.call(e),(s=(i=ce).invalidate)==null||s.call(i),(a=(r=ce).render)==null||a.call(r,Fe,xe)}typeof window<"u"&&(window.nextvrShowBrowserTabMenu=al,window.nextvrHideBrowserTabMenus=Hr);if(!me){let n=e=>({x:e.clientX/Ft.width,y:e.clientY/Ft.height});At.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);Z0(t.x,t.y,"desktop")&&At.setPointerCapture(e.pointerId)}),At.addEventListener("pointermove",e=>{if(vn.source==="desktop"){let t=n(e);hp(t.x,t.y)}}),At.addEventListener("pointerup",e=>{vn.source==="desktop"&&(Ms(),At.hasPointerCapture(e.pointerId)&&At.releasePointerCapture(e.pointerId))}),At.addEventListener("pointercancel",Ms)}var Pi=!0,Ya=!1;function jt(n){var e,t;Pi=!!n,Cn.visible=Pi,Pi||(bi=-1,Ms()),(t=(e=ce).invalidate)==null||t.call(e)}var ny=()=>Pi;function Qt(n){var t,i;let e=!!n;return Ya===e||(Ya=e,pt.style.setProperty("display",e?"none":"","important"),_i.visible=Li.visible=!e,jt(!e),(i=(t=ce).invalidate)==null||i.call(t)),Ya}var mu=()=>Ya,O1=[],Ln=[],gu=n=>Ln.find(e=>e.dataset.id===n)||null,np=[],U1=te("wifi"),F1='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',B1='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function iy(n){O1=n,Ln=[],np.length=0,pt.innerHTML="";for(let e of n){if(e.kind==="sep"){pt.appendChild(z1());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",pt.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=A.profileAvatar?`<img src="${A.profileAvatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`:B1,A.profileName&&(t.title=A.profileName);else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${U1}</span><span class="dk-bat">${F1}<span class="dk-bat-percent"></span></span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),np.push({b:t,win:e.win})}if(e.id==="browser"){let i=null;t.addEventListener("pointerdown",()=>{clearTimeout(i),i=setTimeout(()=>{t.dataset.holdConsumed="1",al("dock")},2e3)});let s=()=>{clearTimeout(i),i=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s)}t.addEventListener("click",()=>{if(t.dataset.holdConsumed==="1"){t.dataset.holdConsumed="0";return}Hr(),e.run()}),pt.appendChild(t),Ln.push(t)}pt.appendChild(wi),At.title=O("moveDock"),At.setAttribute("aria-label",O("moveDock")),pt.appendChild(At),gp(),yp(),Ja(),sy(),Qa()}function z1(){let n=document.createElement("span");return n.className="dock-sep",n}function sy(){for(let{b:n,win:e}of np){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",fe.some(i=>i.id===e))}}Ve("wins",sy);var $i={time:"--:--",date:"",batteryLevel:null,charging:!1,online:navigator.onLine},Zi=()=>({...$i});function pu(){Ee("device-status",Zi())}function gp(){let n=pt.querySelector(".dk-time"),e=new Date;$i.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),$i.date=e.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n&&(n.textContent=$i.time),pu()}gp();setInterval(gp,1e3);function yp(){let n=pt.querySelector(".dk-wifi");$i.online=navigator.onLine,n&&(n.style.opacity=$i.online?"1":".35"),pu()}addEventListener("online",yp);addEventListener("offline",yp);var Ka=null;function Ja(){let n=pt.querySelector(".dk-bat");if(!Ka){n&&(n.style.display="none"),$i.batteryLevel=null,$i.charging=!1,pu();return}let e=Math.max(0,Math.min(1,Number(Ka.level)||0)),t=!!Ka.charging;if($i.batteryLevel=e,$i.charging=t,n){n.style.display="";let i=n.querySelector(".dk-bat-percent"),s=n.querySelector(".fill");s&&(s.setAttribute("width",String(Math.max(1.6,13*e))),s.setAttribute("fill",t?"#8de6c8":e<.2?"#ff6b6b":"currentColor")),i&&(i.textContent=`${Math.round(e*100)}%`),n.title=`${Math.round(e*100)}%${t?" \xB7 carregando":""}`}pu()}window.nextvrBattery=n=>{try{let e=typeof n=="string"?JSON.parse(n):n;e&&typeof e.level=="number"&&(Ka=e,Ja())}catch{}};!me&&navigator.getBattery&&navigator.getBattery().then(n=>{Ka=n,n.addEventListener("levelchange",Ja),n.addEventListener("chargingchange",Ja),Ja()}).catch(()=>{});var bi=-1,Or=null,Yh={x:-1,y:-1},tl=null,ja=!1;function ip(){tl&&(clearTimeout(tl),tl=null)}Ve("pinchcancel",()=>{bi=-1,Or=null,ja=!1,ip(),mp()});function nl(n){var s,r,a;let e=Vr(ge.x,ge.y);if(n==="down"){if(ip(),ja=!1,Yh={x:ge.x,y:ge.y},e!=null&&e.popupOpt){bi=-1,Or=e.popupOpt;return}Or=null,bi=e?e.i:-1,bi>=0&&((r=(s=Ln[bi])==null?void 0:s.dataset)==null?void 0:r.id)==="browser"&&(tl=setTimeout(()=>{tl=null,ja=!0,al("dock")},2e3));return}if(ip(),ja){ja=!1,bi=-1,Or=null;return}let t=bi,i=Or;if(bi=-1,Or=null,n==="up"){let o=(e==null?void 0:e.popupOpt)||i;if(o){Hr(),(a=window.nextvrOpenBrowserOption)==null||a.call(window,o);return}let l=e&&e.i===t?e.i:-1;if(l<0&&t>=0&&Math.hypot(ge.x-Yh.x,ge.y-Yh.y)<.085&&(l=t),l<0)return;let c=Ln[l];c&&(c.style.transform="scale(.88)",setTimeout(()=>c.style.transform="",150),c.click())}}function H1(n,e){return!Pi||!sp?null:(Gr(n,e),Li.updateMatrixWorld(!0),li.intersectObject(Li,!1)[0]||null)}function Vr(n,e){if(!Pi)return null;if(Gr(n,e),!wi.hidden){Xi.updateMatrixWorld(!0);let o=li.intersectObject(Xi,!1)[0];if(o){let c=Xi.worldToLocal(o.point.clone()).y>=0?"new-tab":"incognito-tab",u=wi.querySelector(`[data-browser-opt="${c}"]`);return{i:-1,popupOpt:c,el:u,distance:o.distance}}}_i.updateMatrixWorld(!0);let t=li.intersectObject(_i,!1)[0];if(!t)return null;let i=_i.worldToLocal(t.point.clone()),s=_i.geometry.parameters,r=(i.x/s.width+.5)*pt.offsetWidth,a=(.5-i.y/s.height)*pt.offsetHeight;for(let o=0;o<Ln.length;o++){let l=Ln[o];if(r>=l.offsetLeft-4&&r<=l.offsetLeft+l.offsetWidth+4&&a>=l.offsetTop-4&&a<=l.offsetTop+l.offsetHeight+4)return{i:o,distance:t.distance,button:l}}return null}var k0="",sp="",sr=0,Fr=null;Ve("recenter",()=>{sr=0,xs.ready=!1,Fr=null,Ms();for(let n of fe)!n.onboarding&&!n.hidden&&(n.pinned=!0,n.shell.classList.remove("free"));Qa(),Ii();for(let n of fe)n.hidden||n.apply()});Ve("summon-dock",()=>{var e;xe.updateMatrixWorld(!0),St.updateMatrixWorld(!0);let n=xe.getWorldDirection(new k).transformDirection(St.matrixWorld.clone().invert());sr=Math.atan2(-n.x,-n.z),xs.ready=!1,Fr=null,Ms(),Qa(),(e=window.NativeXR)==null||e.click()});function Qa(){let n=Ft.width>Ft.height,e=(me?$n.dockDistance:n?1.42:1.75)*A.dockDist,t=me?-$n.dockDrop:n?-.5:-.6,i=vt*(me?$n.dockScale:n?.74:.88)*A.dockSize;Fr?Cn.position.copy(Fr):Cn.position.set(-Math.sin(sr)*e,qt+t,-Math.cos(sr)*e),Cn.rotation.set(.26,sr,0,"YXZ"),Cn.scale.setScalar(i);let s=pt.offsetWidth*i,r=pt.offsetHeight*i,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==k0&&(k0=a,_i.geometry.dispose(),_i.geometry=new Tn(s,r),Vn.h=r,Fr||Ii());let o=At.offsetWidth*i,l=At.offsetHeight*i,c=o.toFixed(3)+"x"+l.toFixed(3);o>0&&c!==sp&&(sp=c,Li.geometry.dispose(),Li.geometry=new Tn(o,l)),_i.position.copy(Cn.position),_i.rotation.copy(Cn.rotation),Xi.position.copy(Cn.position),Xi.rotation.copy(Cn.rotation);let u=gu("browser"),d=u&&pt.offsetWidth>0?(u.offsetLeft+u.offsetWidth*.5-pt.offsetWidth*.5)*i:0;Xi.translateX(d),Xi.translateY((pt.offsetHeight*.5+52)*i),Xi.translateZ(.005),Li.position.copy(Cn.position),Li.rotation.copy(Cn.rotation),Li.translateY((pt.offsetHeight/2-At.offsetTop-At.offsetHeight/2)*i),Li.translateZ(.004),!Fr&&(Vn.y!==Cn.position.y||Vn.z!==-e)&&(Vn.y=Cn.position.y,Vn.z=-e,Ii())}var V1=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],O0={q:"1",w:"2",e:"3",r:"4",t:"5",y:"6",u:"7",i:"8",o:"9",p:"0",a:"@",s:"#",d:"$",f:"%",g:"&",h:"*",j:"-",k:"+",l:"(",\u00E7:")",z:"!",x:'"',c:"'",v:":",b:";",n:"/",m:"?"},U0=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],G1=0,at=null,Pn=null,gt=null,Xa=null,ji=!1,Br=!1,ol=!1,Ss=window.__nextvrTyping,W1=n=>(Ss==null?void 0:Ss.editable(n))||null,il=null,rp=1,ry=2,fu=3,q1=me;function rr(n){var t,i;if(ol=!!n,!at)return!1;let e=!!n;return at.visible=!e,at.element.style.setProperty("display",e?"none":"","important"),Pn&&(Pn.visible=!e),e&&As(),(i=(t=ce).invalidate)==null||i.call(t),!0}var ay=()=>!!at&&at.visible!==!1,oy=()=>ol;function X1(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&fe.find(s=>s.shell===t)||null}function oi(n,e){var s,r,a,o,l,c,u,d,h,m,g,y;if(!n){me&&console.log("kb close; was serving",(gt==null?void 0:gt.nativeId)||(gt==null?void 0:gt.tagName)||"nothing"),As(),at&&(St.remove(at),St.remove(Pn),at.element.remove(),at=null),gt=null,Xa=null,ji=Br=!1,xs.ready=!1,(r=(s=ce).invalidate)==null||r.call(s),(o=(a=ce).render)==null||o.call(a,Fe,xe);return}let t=e||il;if(gt=t&&!t.nativeId?(Ss==null?void 0:Ss.focus(t))||null:t||null,gt&&!gt.nativeId&&(il=gt),Xa=X1(gt),me&&console.log("kb open for",(gt==null?void 0:gt.nativeId)||(gt==null?void 0:gt.tagName)||"nothing","in window",(Xa==null?void 0:Xa.id)??"none"),at){ap(),Fe.updateMatrixWorld(!0),(c=(l=ce).invalidate)==null||c.call(l),(d=(u=ce).render)==null||d.call(u,Fe,xe);return}let i=document.createElement("div");i.className="kb";for(let f of V1){let p=document.createElement("div");p.className="kb-row";for(let x of f){let v=typeof x=="string"?x:x.k,w=document.createElement("button");w.className="key"+(typeof x=="string"?"":" "+x.cls),typeof x=="string"?(w.textContent=v,O0[v]&&(w.dataset.sub=O0[v])):x.icon?(w.innerHTML=te(x.icon),w.setAttribute("aria-label",x.label),w.title=x.label):w.textContent=x.lbl||v,w.dataset.k=v,p.appendChild(w)}i.appendChild(p)}i.addEventListener("click",f=>{let p=f.target.closest("[data-k]");p&&(vu(p),As())}),at=new Pr(i),at.scale.setScalar(vt*(me?$n.keyboardScale:.9)),St.add(at),Pn=new wt(new Tn(1,1),new an({visible:!1})),St.add(Pn),ap(),Fe.updateMatrixWorld(!0),(m=(h=ce).invalidate)==null||m.call(h),(y=(g=ce).render)==null||y.call(g,Fe,xe)}function $1(){ji?Br?(ji=!1,Br=!1):Br=!0:(ji=!0,Br=!1),ly()}function vp(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@");if(t===fu){e&&e.classList.remove("hot"),s&&jh(n,n,!!i,fu);return}if(t===rp){if(me&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){oi(!1);return}if(n==="\u21E7"){$1();return}if(n==="@lang")return;if(n==="@mic"){ht(O("micOff"));return}if(n==="@emoji"){jh(n,U0[G1++%U0.length],!1,rp);return}}jh(n,n,n==="\u232B"||n==="\u23CE"?!1:void 0,t)}function jh(n,e,t,i){if(!gt)return!1;let s=t===void 0?ji:t;return gt.nativeId?window.NativeXR.key(gt.nativeId,e,!!s,i||0):Ss==null||Ss.key(n,!!s,i||0),q1&&i!==ry&&console.log("kb key ->",gt.nativeId||gt.tagName+"."+(gt.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==fu&&s&&ji&&!Br&&(ji=!1,ly()),!0}function ly(){if(at){for(let n of at.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=ji?Br?"lock":"once":"";for(let n of at.element.querySelectorAll("[data-k]")){let e=n.dataset.k;e.length===1&&/[a-zç]/i.test(e)&&(n.textContent=ji?e.toUpperCase():e.toLowerCase())}}}var F0="",Y1=.35,xs={yaw:0,ready:!1},j1=n=>Math.atan2(Math.sin(n),Math.cos(n));function Z1(){let n=Xa;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return sr}function ap(n=0){if(!at)return;let e=Z1();xs.ready?xs.yaw+=j1(e-xs.yaw)*(1-Math.exp(-n*7)):(xs.yaw=e,xs.ready=!0);let t=xs.yaw,i=me?$n.keyboardDistance:-Vn.z-.35;at.position.set(-Math.sin(t)*i,qt-(me?$n.keyboardDrop:.68),-Math.cos(t)*i),at.rotation.set(-Math.PI/2+Y1,t,0,"YXZ");let s=at.element.offsetWidth*at.scale.x,r=at.element.offsetHeight*at.scale.x,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==F0&&(F0=a,Pn.geometry.dispose(),Pn.geometry=new Tn(s,r)),Pn.position.copy(at.position),Pn.rotation.copy(at.rotation)}var K1=700,J1=90,Q1=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),Yi=null,sl=0;function yu(n,e){var o,l;if(!at||ol)return null;cu.set(n*2-1,-(e*2-1)),li.setFromCamera(cu,xe);let t=li.intersectObject(Pn,!1)[0];if(!t)return null;let i=Pn.worldToLocal(t.point.clone()),s=Pn.geometry.parameters,r=(i.x/s.width+.5)*at.element.offsetWidth,a=(.5-i.y/s.height)*at.element.offsetHeight;return{distance:t.distance,button:((l=(o=fp(at.element,r,a))==null?void 0:o.closest)==null?void 0:l.call(o,"[data-k]"))||null}}function vu(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return As(),e?(Yi={key:e,button:n,shift:ji},vp(e,n,rp),Q1(e)&&(sl=performance.now()+K1),!0):!1}function As(){let n=Yi;Yi=null,sl=0,n&&vp(n.key,n.button,fu,n.shift)}Ve("pinchcancel",As);function cy(n){var i,s;if(!Yi)return!1;let e=yu(ge.x,ge.y);if(!e)return As(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==Yi.key?(As(),vu(e.button)):(sl&&n>=sl&&(vp(Yi.key,Yi.button,ry),sl=n+J1),!0)}var B0="";Ho((n,e)=>{let t=`${A.winScale}:${A.winDist}`;if(B0!==t&&(B0=t,Ii()),Qa(),ap(n),Yi&&cy(e),pn&&ge.mode==="drag"&&(nr(pn.hit,"down"),pn=null),ct&&ge.active&&ge.down){let i=ws(ge.x,ge.y);i&&i.win===ct.win&&!i.handle&&!i.resize&&zr(i,2)}if((Bt.win||ut.win&&ut.source!=="fist")&&ge.active&&ge.down){let i=tu(e);Bt.win&&Q0(i.x,i.y),ut.win&&ut.source!=="fist"&&dp(i.x,i.y)}if(vn.start&&ge.active&&ge.down){let i=tu(e);hp(i.x,i.y)}for(let i of fe)i.hidden||i.apply();uy()});function Zh(n){let e=n.matrixWorld.elements,t=xe.position.x-e[12],i=xe.position.z-e[14];return t*e[8]+i*e[10]<0}function uy(){var e,t,i,s;Fe.updateMatrixWorld(!0);let n=!1;if(Pi&&pt){let r=Zh(Cn)?"1":"0";pt.dataset.backface!==r&&(pt.dataset.backface=r,At&&(At.dataset.backface=r),n=!0)}if(at&&at.visible!==!1&&at.element){let r=Zh(at)?"1":"0";at.element.dataset.backface!==r&&(at.element.dataset.backface=r,n=!0)}for(let r of fe){if(r.hidden||!r.shell)continue;let a=Zh(r.obj)?"1":"0";r.shell.dataset.backface!==a&&(r.shell.dataset.backface=a,n=!0)}n&&((t=(e=ce).invalidate)==null||t.call(e),(s=(i=ce).render)==null||s.call(i,Fe,xe))}typeof window<"u"&&(window.__updateBackfaceStates=uy);var dy='button, .d-btn, .spatial-app-tile, .lib-tile, .st-card, .st-tab, .quick-control, .entry-card, .entry-seg-btn, .entry-btn, .entry-store-card, .entry-profile-box, .yt-link, [role="button"]',kr=null;function bs(n){var t;let e=((t=n==null?void 0:n.closest)==null?void 0:t.call(n,dy))||null;return e===kr?e:(kr&&kr.classList.remove("nextvr-choosing"),kr=e,kr&&kr.classList.add("nextvr-choosing"),kr)}function Ur(n){var i;let e=((i=n==null?void 0:n.closest)==null?void 0:i.call(n,dy))||(n instanceof HTMLElement?n:null);if(!e)return null;bs(e),e.classList.remove("nextvr-clicking"),e.classList.add("nextvr-clicking");let t=e.querySelector(":scope > .nextvr-click-ripple");return t||(t=document.createElement("span"),t.className="nextvr-click-ripple",t.setAttribute("aria-hidden","true"),e.appendChild(t)),t.classList.remove("is-active"),t.classList.add("is-active"),setTimeout(()=>{e.classList.remove("nextvr-clicking"),t==null||t.remove()},340),e}typeof window<"u"&&(window.__nextvrChooseAnim=bs,window.__nextvrClickAnim=Ur,document.addEventListener("pointerover",n=>{n.target instanceof Element&&bs(n.target)},{passive:!0,capture:!0}),document.addEventListener("click",n=>{n.target instanceof Element&&Ur(n.target)},{passive:!0,capture:!0}));if(me){let n=function(){try{Ka=JSON.parse(window.NativeXR.battery()),Ja()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?oi(!0,{nativeId:e}):(gt==null?void 0:gt.nativeId)!==e&&oi(!1)},window.nextvrAppFocus=e=>oi(!0,{nativeId:e}),n(),setInterval(n,1e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var yt=null,ou=new Map,lu=new Ga({holdMs:2e3,graceMs:260}),Qo=new Set,xp={hands:[],consumed:new Set,scaleX:1,scaleY:1},Ko=null,Kh=0,z0=350,eA=240;function op(n,e){xe.updateMatrixWorld(!0),St.updateMatrixWorld(!0);let t=new Io;return t.setFromCamera(new Ye(n*2-1,1-e*2),xe),t}function Jh(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function lp(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new k),s=n.curve>0?iu(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function tA(n,e){let t=n.obj.getWorldPosition(new k),i=new k(0,0,1).transformDirection(n.obj.matrixWorld),s=new ni().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new k);let r=n.obj.matrixWorld.clone().invert(),a=e.origin.clone().applyMatrix4(r),o=e.origin.clone().add(e.direction).applyMatrix4(r).sub(a).normalize(),l=n.curveRadius,c=o.x*o.x+o.z*o.z;if(c<1e-9)return e.intersectPlane(s,new k);let u=2*(a.x*o.x+(a.z-l)*o.z),d=a.x*a.x+(a.z-l)*(a.z-l)-l*l,h=u*u-4*c*d;if(h<0)return e.intersectPlane(s,new k);let m=Math.sqrt(h);for(let g of[(-u-m)/(2*c),(-u+m)/(2*c)]){if(!(g>0))continue;let y=a.clone().addScaledVector(o,g);if(!(Math.abs(y.x)>l+1e-6||y.z>l))return y.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new k)}function H0(n){let e=null;for(let t of fe){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new k),s=tA(t,n.ray);if(!s)continue;let{local:r,scale:a}=lp(t,s);if(Math.abs(r.x)*a.x>t.w*a.x/2+.08||Math.abs(r.y)*a.y>t.h*a.y/2+.08)continue;let o=n.ray.origin.distanceTo(s);(!e||o<e.distance)&&(e={win:t,point:s,distance:o})}return e}var er=new Map,Qs=0,Wa=null;function $a(n){var e,t,i,s;Wa!==n&&(Wa&&((t=(e=Wa.classList)==null?void 0:e.remove)==null||t.call(e,"finger-hover")),Wa=n||null,Wa&&((s=(i=Wa.classList)==null?void 0:i.add)==null||s.call(i,"finger-hover")))}function nA(n){if(!n||n.pinching||n.fist||n.predicted)return!1;let e=n.points;if(!e||e.length<63)return!1;let t=e[0],i=e[1],s=e[18],r=e[19],a=e[24],o=e[25],l=Math.hypot(a-t,o-i),c=Math.hypot(s-t,r-i);return l>.045&&l>c*1.05}function Qh(n,e){var r,a,o,l,c,u,d,h,m,g,y,f,p,x,v,w;if(!Number.isFinite(n)||!Number.isFinite(e))return null;let t=yu(n,e),i=ws(n,e),s=Vr(n,e);if(!s&&Pi){for(let E of[-.02,.02,-.038,.038])if(s=Vr(n,e+E),s)break}if(t&&(!i||t.distance<i.distance)&&t.button)return bs(t.button),{kind:"kb",x:n,y:e,el:t.button,key:"kb:"+(((r=t.button.dataset)==null?void 0:r.k)||t.button.textContent||"")};if(s&&(!i||s.distance<=(i.distance??1/0)+.15)){if(s.popupOpt&&s.el)return bs(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(Ln[s.i]){let E=Ln[s.i];return bs(E),{kind:"dock",x:n,y:e,el:E,key:"dock:"+(((a=E.dataset)==null?void 0:a.id)||s.i)}}}if(i&&!i.handle&&!i.resize){let E=pp(i.win.el,i.u,i.v),R=((o=E==null?void 0:E.closest)==null?void 0:o.call(E,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url],[data-browser-opt],[data-id],[data-act],[data-lang]'))||null,M=((l=E==null?void 0:E.closest)==null?void 0:l.call(E,"[data-native-browser],[data-native-app],[data-native-xr]"))||null;if(R){bs(R);let B=((c=R.dataset)==null?void 0:c.browserOpt)||((u=R.dataset)==null?void 0:u.spatialBuiltin)||((d=R.dataset)==null?void 0:d.spatialAndroid)||((h=R.dataset)==null?void 0:h.spatialXr)||((m=R.dataset)==null?void 0:m.spatialScroll)||((g=R.dataset)==null?void 0:g.qbUrl)||((y=R.dataset)==null?void 0:y.id)||((f=R.dataset)==null?void 0:f.act)||((p=R.dataset)==null?void 0:p.lang)||R.getAttribute("aria-label")||R.title||((v=(x=R.textContent)==null?void 0:x.trim())==null?void 0:v.slice(0,24))||"btn";return{kind:"win",x:n,y:e,el:R,hit:i,key:`win:${i.win.id}:${B}`}}if(M){let B=Math.round(i.u*16),_=Math.round(i.v*12);return{kind:"win-surf",x:n,y:e,el:M,hit:i,key:`surf:${i.win.id}:${B}:${_}`}}}if(s!=null&&s.popupOpt&&s.el)return bs(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(s&&Ln[s.i]){let E=Ln[s.i];return bs(E),{kind:"dock",x:n,y:e,el:E,key:"dock:"+(((w=E.dataset)==null?void 0:w.id)||s.i)}}return null}function iA(n,e){let t=n.points,i=Number(e==null?void 0:e.scaleX)||1,s=Number(e==null?void 0:e.scaleY)||1,r=[[0,0],[0,.015],[0,-.015],[.015,0],[-.015,0]];if(t&&t.length>=26&&Number.isFinite(t[24])&&Number.isFinite(t[25])){let a=(t[24]-.5)*i+.5,o=(t[25]-.5)*s+.5;for(let[d,h]of r){let m=Qh(a+d,o+h);if(m)return m}let l=(t[21]-.5)*i+.5,c=(t[22]-.5)*s+.5,u=Qh(l,c);if(u)return u}if(Array.isArray(n.aim)&&n.aim.length>=2){let a=$o(n.aim);for(let[o,l]of r){let c=Qh(a.x+o,a.y+l);if(c)return c}}return null}function qa(n,e,t=null){var a,o,l,c,u,d,h,m,g,y,f,p,x,v,w,E,R,M,B,_,b,I,D,U,L,T,N,z,W,G,K,Q,se,q,j,ne;if((a=t==null?void 0:t.dataset)!=null&&a.browserOpt)return Hr(),(o=window.nextvrOpenBrowserOption)==null||o.call(window,t.dataset.browserOpt),(c=(l=ce).invalidate)==null||c.call(l),(d=(u=ce).render)==null||d.call(u,Fe,xe),!0;if(t&&Ln.includes(t))return t.classList.add("finger-pressed"),t.style.transform="scale(.88)",setTimeout(()=>{t.style.transform="",t.classList.remove("finger-pressed")},160),Ur(t),t.click(),(m=(h=ce).invalidate)==null||m.call(h),(y=(g=ce).render)==null||y.call(g,Fe,xe),!0;let i=yu(n,e),s=ws(n,e),r=Vr(n,e);if(i&&(!s||i.distance<s.distance))return vu(i.button),setTimeout(()=>As(),55),!0;if(r&&(!s||r.distance<=(s.distance??1/0)+.15)){if(r.popupOpt)return Hr(),(f=window.nextvrOpenBrowserOption)==null||f.call(window,r.popupOpt),!0;if(Ln[r.i]){let ee=Ln[r.i];return ee.classList.add("finger-pressed"),ee.style.transform="scale(.88)",setTimeout(()=>{ee.style.transform="",ee.classList.remove("finger-pressed")},160),Ur(ee),ee.click(),(x=(p=ce).invalidate)==null||x.call(p),(w=(v=ce).render)==null||w.call(v,Fe,xe),!0}}if(s&&!s.handle&&!s.resize){Kt(s.win);let ee=t&&s.win.el.contains(t)?t:pp(s.win.el,s.u,s.v),H=((E=ee==null?void 0:ee.closest)==null?void 0:E.call(ee,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url]'))||ee;H!=null&&H.classList&&(H.classList.add("finger-pressed"),setTimeout(()=>{var _e,Xe;return(Xe=(_e=H.classList)==null?void 0:_e.remove)==null?void 0:Xe.call(_e,"finger-pressed")},180),Ur(H));let oe=!1,de=()=>{oe=!0};return(R=H==null?void 0:H.addEventListener)==null||R.call(H,"click",de,{once:!0}),nr(s,"down"),nr(s,"up"),(M=H==null?void 0:H.removeEventListener)==null||M.call(H,"click",de),!oe&&H&&(!((B=H.closest)!=null&&B.call(H,"[data-native-browser],[data-native-app],[data-native-xr]"))||(_=H.matches)!=null&&_.call(H,"[data-qb-url],[data-qb-act]"))&&((b=H.click)==null||b.call(H)),(D=(I=ce).invalidate)==null||D.call(I),(L=(U=ce).render)==null||L.call(U,Fe,xe),!0}if(r!=null&&r.popupOpt)return Hr(),(T=window.nextvrOpenBrowserOption)==null||T.call(window,r.popupOpt),!0;if(r&&Ln[r.i]){let ee=Ln[r.i];return ee.classList.add("finger-pressed"),ee.style.transform="scale(.88)",setTimeout(()=>{ee.style.transform="",ee.classList.remove("finger-pressed")},160),Ur(ee),ee.click(),(z=(N=ce).invalidate)==null||z.call(N),(G=(W=ce).render)==null||G.call(W,Fe,xe),!0}return t&&typeof t.click=="function"&&document.body.contains(t)?((Q=(K=t.classList)==null?void 0:K.add)==null||Q.call(K,"finger-pressed"),setTimeout(()=>{var ee,H;return(H=(ee=t.classList)==null?void 0:ee.remove)==null?void 0:H.call(ee,"finger-pressed")},160),Ur(t),t.click(),(q=(se=ce).invalidate)==null||q.call(se),(ne=(j=ce).render)==null||ne.call(j,Fe,xe),!0):!1}function sA(n){return!n||n.length<63?0:Math.hypot(n[15]-n[0],n[16]-n[1])+Math.hypot(n[51]-n[0],n[52]-n[1])+Math.hypot(n[51]-n[15],n[52]-n[16])+Math.hypot(n[27]-n[0],n[28]-n[1])}function rA(n,e,t){var B,_,b,I,D,U,L,T;if(A.fingerTouch===0)return er.delete(n==null?void 0:n.id),$a(null),!1;let i=n==null?void 0:n.points,s=er.get(n==null?void 0:n.id);if(!nA(n)){if(s&&!s.latched&&!(n!=null&&n.pinching)&&!(n!=null&&n.fist)&&!(n!=null&&n.predicted)&&i&&i.length>=26&&t-s.enterAt>=40&&t-s.lastSeenAt<=220&&t-s.lastTapAt>=360&&Math.hypot(i[0]-(s.wristX??i[0]),i[1]-(s.wristY??i[1]))<=.045){let N=qa(s.tapX,s.tapY,s.targetEl);if(er.delete(n==null?void 0:n.id),$a(null),N)return Qs=t+220,!0}return er.delete(n==null?void 0:n.id),$a(null),!1}let r=i&&i.length>=26?i[24]:.5,a=i&&i.length>=26?i[25]:.5,l=(i&&i.length>=17?i[16]:a)-a,c=i&&i.length>=26?Math.hypot(i[24]-i[0],i[25]-i[1]):.1,u=i&&i.length>=20?Math.hypot(i[18]-i[0],i[19]-i[1]):.08,d=c/Math.max(1e-4,u),h=n.head&&n.head.length===63?n.head[25]:0,m=n.head&&n.head.length===63?Math.hypot(n.head[24],n.head[25],n.head[26]):0,g=n.head&&n.head.length===63?n.head[29]-n.head[26]:0,y=Number(n.palmWidth)||0,f=sA(n.points),p=s,x=iA(n,e),v=N=>{if(!N)return!1;let z=m>0&&N.baseDist>0?m-N.baseDist:0,W=m>0&&N.baseDist>0?z/N.baseDist:0,G=y>.012&&N.basePalm>.012?(N.basePalm-y)/N.basePalm:0,K=f>.02&&N.baseSpan>.02?(N.baseSpan-f)/N.baseSpan:0,Q=g-N.baseTipRelZ;return z>=.016||W>=.036||G>=.042||K>=.042||Q>=.014&&(z>=.006||G>=.018||K>=.018)},w=N=>{if(!N)return!1;let z=N.restTipY-a>=.0075,W=l-N.restFingerLift>=.0075,G=h-N.restHeadY>=.0075,K=N.maxIndexRatio>1.08&&N.maxIndexRatio-d>=.09;return Math.abs(r-N.lastTipX)>Math.abs(a-N.lastTipY)*1.45&&Math.abs(r-N.lastTipX)>.012&&!v(N)&&!K?!1:z||W||G||K||v(N)};if(!x)return p&&p.pendingBrowserTap&&!p.holdMenuOpened&&t-p.lastTapAt>=360&&(p.pendingBrowserTap=!1,qa(p.tapX,p.tapY,p.targetEl))||p&&t-p.lastSeenAt<=180&&t-p.enterAt>=40&&!p.latched&&w(p)&&t-p.lastTapAt>=360&&qa(p.tapX,p.tapY,p.targetEl)?(p.latched=!0,p.lastTapAt=t,Qs=t+220,!0):((!p||t-p.lastSeenAt>180)&&(er.delete(n.id),$a(null)),!1);$a(x.el);let E=p&&t-p.enterAt>=40&&x.key===p.targetKey&&w(p);if(!p||x.key!==p.targetKey&&!E)return p&&!p.latched&&t-p.enterAt>=45&&t-p.lastSeenAt<=120&&p.lastTipY-a>=.01&&Math.abs(r-p.lastTipX)<=.018&&t-p.lastTapAt>=360&&qa(p.tapX,p.tapY,p.targetEl)?(p.latched=!0,p.lastTapAt=t,Qs=t+220,!0):(p={targetKey:x.key,targetEl:x.el,tapX:x.x,tapY:x.y,wristX:i[0],wristY:i[1],maxIndexRatio:d,restTipY:a,restFingerLift:l,restHeadY:h,lastTipX:r,lastTipY:a,baseDist:m,basePalm:y,baseSpan:f,baseTipRelZ:g,enterAt:t,lastSeenAt:t,latched:!1,holdMenuOpened:!1,pendingBrowserTap:!1,lastTapAt:(p==null?void 0:p.lastTapAt)??-1e3},er.set(n.id,p),!1);x.key===p.targetKey&&(p.tapX=x.x,p.tapY=x.y,p.targetEl=x.el,p.wristX=i[0],p.wristY=i[1],p.lastSeenAt=t);let R=((_=(B=p.targetEl)==null?void 0:B.dataset)==null?void 0:_.id)==="browser"||((I=(b=p.targetEl)==null?void 0:b.dataset)==null?void 0:I.spatialBuiltin)==="browser"||((U=(D=p.targetEl)==null?void 0:D.dataset)==null?void 0:U.app)==="browser";if(R&&!p.holdMenuOpened&&t-p.enterAt>=2e3)return p.holdMenuOpened=!0,p.pendingBrowserTap=!1,p.latched=!0,p.lastTapAt=t,al(((T=(L=p.targetEl)==null?void 0:L.dataset)==null?void 0:T.id)==="browser"?"dock":"spatial"),Qs=t+220,!0;if(t-p.enterAt<40)return p.restTipY=Math.max(p.restTipY,a),p.restFingerLift=Math.min(p.restFingerLift,l),p.restHeadY=Math.min(p.restHeadY,h),p.maxIndexRatio=Math.max(p.maxIndexRatio||d,d),p.lastTipX=r,p.lastTipY=a,m>0&&(p.baseDist=p.baseDist>0?p.baseDist*.5+m*.5:m),y>0&&(p.basePalm=p.basePalm>0?p.basePalm*.5+y*.5:y),f>0&&(p.baseSpan=p.baseSpan>0?p.baseSpan*.5+f*.5:f),p.baseTipRelZ=p.baseTipRelZ*.5+g*.5,!1;let M=w(p);if(p.lastTipX=r,p.lastTipY=a,!p.latched&&M&&t-p.lastTapAt>=360){if(R&&v(p)&&!(p.restTipY-a>=.0075||l-p.restFingerLift>=.0075))return p.pendingBrowserTap=!0,p.latched=!0,!1;if(qa(p.tapX,p.tapY,p.targetEl))return p.latched=!0,p.lastTapAt=t,Qs=t+220,!0}else if(p.latched){let N=m>0&&p.baseDist>0?m-p.baseDist:0,z=y>.012&&p.basePalm>.012?(p.basePalm-y)/p.basePalm:0,W=f>.02&&p.baseSpan>.02?aA(p,f):0;if(N<=.008&&z<=.022&&W<=.022&&Math.abs(p.restTipY-a)<=.006){if(p.pendingBrowserTap&&!p.holdMenuOpened&&t-p.lastTapAt>=360)return p.pendingBrowserTap=!1,p.latched=!1,p.lastTapAt=t,Qs=t+220,qa(p.tapX,p.tapY,p.targetEl),!0;p.latched=!1,p.restTipY=a,p.restFingerLift=l,p.restHeadY=h,p.maxIndexRatio=d,p.baseDist=m,p.basePalm=y,p.baseSpan=f,p.baseTipRelZ=g}}else p.restTipY=Math.max(p.restTipY,a),p.restFingerLift=Math.min(p.restFingerLift,l),p.restHeadY=Math.min(p.restHeadY,h),p.maxIndexRatio=Math.max(p.maxIndexRatio||d,d),m>0&&(p.baseDist=p.baseDist>0?Math.min(p.baseDist,p.baseDist*.92+m*.08):m),y>.012&&(p.basePalm=p.basePalm>0?Math.max(p.basePalm,p.basePalm*.92+y*.08):y),f>.02&&(p.baseSpan=p.baseSpan>0?Math.max(p.baseSpan,p.baseSpan*.92+f*.08):f);return!1}function aA(n,e){return(n.baseSpan-e)/n.baseSpan}var V0=new Map,G0=-2e3,Zn=null,ep=null;function oA(){if(Zn&&document.body.contains(Zn))return Zn;let n=document.getElementById("hud")||document.body;return Zn=document.createElement("div"),Zn.id="gun-gesture-indicator",Zn.className="gun-logo-bubble",Zn.dataset.gunBubble="1",Zn.hidden=!0,Zn.innerHTML='<img src="./gun-logo.jpg" alt="Gun Gesture Logo" class="gun-logo-img">',n.appendChild(Zn),Zn}function cp(n=.5,e=.5,t=!1){var a,o;let i=oA(),s=Math.max(.08,Math.min(.92,Number.isFinite(n)?n:.5)),r=Math.max(.08,Math.min(.92,Number.isFinite(e)?e:.5));i.style.left=`${(s*100).toFixed(1)}%`,i.style.top=`${(r*100).toFixed(1)}%`,i.hidden=!1,i.classList.toggle("gun-triggered",!!t),(o=(a=ce).invalidate)==null||o.call(a),ep&&clearTimeout(ep),ep=setTimeout(()=>{var l,c;Zn&&(Zn.hidden=!0,Zn.classList.remove("gun-triggered"),(c=(l=ce).invalidate)==null||c.call(l))},t?750:450)}window.nextvrShowGunLogoBubble=cp;function lA(n,e){var i,s,r,a,o,l,c,u,d;if(A.gunGesture===0||!((i=n==null?void 0:n.hands)!=null&&i.length))return!1;let t=document.getElementById("gorilla-overlay");if(t&&t.style.display&&t.style.display!=="none"||fe.some(h=>h.id==="entry-menu"||h.id==="language")||document.querySelector(".entry-menu-root")||ut.win||Bt.win||vn.start)return!1;for(let h of n.hands){if(!h||h.predicted||h.menuEligible)continue;let m=h.points;if(!m||m.length<63)continue;let g=(b,I)=>Math.hypot(m[b*3]-m[I*3],m[b*3+1]-m[I*3+1]);if(Math.hypot(m[27]-m[0],m[28]-m[1])<.04||g(14,16)<.01||g(18,20)<.01||g(5,6)<.01)continue;let f=g(0,16)<g(0,14)*.96,p=g(0,20)<g(0,18)*.96,x=g(0,4)>g(0,2)*1.06||m[7]-m[13]>.025,v=g(0,8)/Math.max(1e-4,g(0,6)),w=(m[12]+m[15])*.5,E=Math.min(m[13],m[16])-.045,R=h.id||(h.left?"left":"right"),M=V0.get(R);if(M||(M={armedUntil:0,maxIndexRatio:0,latched:!1},V0.set(R,M)),f&&p&&x&&v>=1.12&&!h.pinching&&!h.fist){M.armedUntil=e+1600,M.maxIndexRatio=Math.max(M.maxIndexRatio,v),M.latched=!1,cp(w,E,!1);continue}let _=f&&p&&x&&(v<=1.02||M.maxIndexRatio>=1.14&&M.maxIndexRatio-v>=.13);if(!M.latched&&e<=M.armedUntil&&_&&e-G0>=550){if(M.latched=!0,M.armedUntil=0,M.maxIndexRatio=0,G0=e,cp(w,E,!0),(r=(s=n.consumed)==null?void 0:s.add)==null||r.call(s,h.id),A.spatialLauncher){let b=fe.find(I=>I.id==="spatial-launcher");b&&b.setHidden(!b.hidden)}else{let b=!Ya;Qt(b),At&&(At.hidden=b)}return(o=(a=window.NativeXR)==null?void 0:a.click)==null||o.call(a),(c=(l=ce).invalidate)==null||c.call(l),(d=(u=ce).render)==null||d.call(u,Fe,xe),!0}}return!1}function W0(n=!1,e=xp){let t=yt;t!=null&&t.down&&(zr({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(Qo.add(t.id),e.consumed.add(t.id))),yt=null}Ve("phonehands",n=>{var l,c;xp=n;let e=new Set(n.hands.map(u=>u.id));n.hands.length||$a(null);for(let u of ou.keys())e.has(u)||ou.delete(u);for(let u of er.keys())e.has(u)||er.delete(u);for(let u of Qo){let d=n.hands.find(h=>h.id===u);!d||!d.pinching?Qo.delete(u):n.consumed.add(u)}if(ut.win&&ut.source==="fist"){let u=n.hands.find(d=>d.id===ut.hand);if(!u||!u.fist||!fe.includes(ut.win)||(l=ut.win)!=null&&l.hidden)_s();else{n.consumed.add(u.id);let d=Jh(u,n,!0);dp(d.x,d.y)}}let t=performance.now();if(!document.documentElement.classList.contains("xr-on")&&!fe.some(u=>u.id==="entry-menu"&&!u.hidden))if(ut.win||Bt.win||vn.start||pt.classList.contains("grab-armed")||yt)lu.reset();else{let u=(n.hands||[]).filter(m=>m.pinching&&!m.predicted),d=au(u),h=lu.update(t,{left:d,right:d});if(h.opened){lu.reset(),Xo(),pn=null,ct=null,bi=-1,_s(),ir(),Ms();for(let m of u)Qo.add(m.id),n.consumed.add(m.id);Wi()}else d&&h.progress>.15&&(Xo(),pn=null,ct=null,bi=-1)}else lu.reset();if(!(ut.win&&ut.source==="fist")){let u=n.hands.find(d=>!d.fist);if(u){let d=Jh(u,n),h=H0(op(d.x,d.y));if(h){let{local:m,scale:g}=lp(h.win,h.point),y=h.win;(Math.abs(m.x)*g.x>y.w*g.x/2-.06||Math.abs(m.y)*g.y>y.h*g.y/2-.06)&&(Ko=h.win,Kh=t)}}}for(let u of fe)(u!==Ko||t-Kh>z0)&&u.shell.classList.remove("phone-grab-hover");Ko&&t-Kh<=z0?Ko.shell.classList.add("phone-grab-hover"):Ko=null;for(let u of n.hands){let d=ou.get(u.id)||!1;if(ou.set(u.id,u.fist),!ut.win&&!Bt.win&&u.fist&&!d){let h=Jh(u,n,!0),m=H0(op(h.x,h.y));m&&(((c=ge.hand)==null?void 0:c.id)===u.id&&Xo(),up(m.win,h.x,h.y,"fist",u.id)&&n.consumed.add(u.id))}}let i=null;for(let u of n.hands){if(n.consumed.has(u.id)||!u.head||u.head.length!==63)continue;if(Array.isArray(u.aim)&&u.aim.length>=2){let h=$o(u.aim);if(Vr(h.x,h.y))continue}let d=new k().fromArray(u.head,24);if(!(d.length()>.7)){d.applyMatrix4(xe.matrixWorld);for(let h of fe){if(h.hidden||h.id==="spatial-launcher")continue;let m=lp(h,d),g=(yt==null?void 0:yt.win)===h&&yt.id===u.id,y=g?.08:.02,f=g?.26:.11;m.d>f||m.d<-.12||Math.abs(m.local.x)*m.scale.x>h.w*m.scale.x/2+y||Math.abs(m.local.y)*m.scale.y>h.h*m.scale.y/2+y||(!i||g||!i.current&&Math.abs(m.d)<Math.abs(i.d))&&(i={...m,id:u.id,win:h,point:d,current:g})}}}let s=()=>{if(!(ut.win||Bt.win||vn.start||pt.classList.contains("grab-armed"))&&!lA(n,t))for(let u of n.hands)n.consumed.has(u.id)||rA(u,n,t)};if(!i&&yt&&e.has(yt.id)&&fe.includes(yt.win)&&!yt.win.hidden&&t-yt.lastSeen<=eA&&(i={...yt,current:!0,held:!0}),!i){W0(!e.has(yt==null?void 0:yt.id),n),s();return}i.current?(yt.d+=(i.d-yt.d)*.45,yt.u+=(i.u-yt.u)*.45,yt.v+=(i.v-yt.v)*.45,i.held||(yt.lastSeen=t)):(W0(!1,n),yt={...i,down:!1,previousD:i.d,lastSeen:t});let r=yt,a=r.u>=0&&r.u<=1&&r.v>=0&&r.v<=1,o={win:r.win,u:Math.max(0,Math.min(1,r.u)),v:Math.max(0,Math.min(1,r.v))};!r.down&&a&&r.d<=.012&&r.previousD>.012?(ge.down&&Xo(),Kt(r.win),zr(o,0),r.down=!0):r.down&&(r.d>=.035||!a)?(zr(o,1),r.down=!1,n.hands.some(u=>u.id===r.id&&u.pinching)&&(Qo.add(r.id),n.consumed.add(r.id))):r.down&&zr(o,2),r.previousD=r.d,r.down?(n.blockFar=!0,n.consumed.add(r.id)):s()});var q0=0,X0="";Ho((n,e)=>{var a,o,l,c;if(!me||e-q0<16)return;q0=e;let t=xp,i=[],s=A.fingerTouch!==0;for(let u of t.hands){if((yt==null?void 0:yt.id)===u.id&&yt.down){let y=yt,f=new k((y.u-.5)*y.win.w,(.5-y.v)*y.win.h,0).applyMatrix4(y.win.obj.matrixWorld);i.push({id:u.id,end:xe.worldToLocal(f).toArray(),direct:!0,down:y.down,...s?{noBeam:!0}:{}});continue}if(t.consumed.has(u.id)||t.blockFar){i.push({id:u.id,hidden:!0});continue}let d=((a=ge.hand)==null?void 0:a.id)===u.id?tu(e):$o(u.aim),h=op(d.x,d.y),m=fe.filter(y=>!y.hidden).flatMap(y=>[y.resizeHit,y.grab,y.hit]);Pi&&(wi.hidden||m.push(Xi),m.push(Li,_i)),Pn&&at&&!ol&&m.push(Pn);let g=h.intersectObjects(m,!1)[0];i.push({id:u.id,...g?{end:g.point.toArray()}:{},down:((o=ge.hand)==null?void 0:o.id)===u.id&&ge.down||e<Qs,...s?{noBeam:!0}:{}})}let r=JSON.stringify(i);r!==X0&&(X0=r,(c=(l=window.NativeXR).handTargets)==null||c.call(l,r))});var hy={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function py(n){return hy[n]||hy.landscape}function fy(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return py(n==null?void 0:n.shape)}function cA(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function ll(n){let e=cA(fy(n));return{w:e.w+2,h:e.h+116}}var uA=400,by=3;function _p(n,e){if(e!=null&&e.shape)return e.shape;let t=en.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var Et={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:by,sdk:0,recents:[],library:0,launch:null},en={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},ci=new Map,bp=new Set,my=0,gy="";var wp=n=>Et.sessions.find(e=>e.pkg===n)||null,dA=()=>Et.sessions.filter(n=>n.alive),hA=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function Es(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{ht(O("appCommandFailed"))}}function pA(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Et.sessions=Array.isArray(e.sessions)?e.sessions:[],Et.shizuku=e.shizuku||Et.shizuku,Et.input=e.input||Et.input,Et.capacity=e.capacity||by,Et.recents=Array.isArray(e.recents)?e.recents:[],Et.sdk=e.sdk||Et.sdk,Et.launch=e.launch||null,Et.diagnostics=e.diagnostics||Et.diagnostics,e.icons!=null&&e.icons!==en.icons&&(en.icons=e.icons,en.loaded=!1),fA(),Ee("appsState"))}function fA(){var e,t,i,s;let n=new Set;for(let r of Et.sessions)if(r.state!=="stopped"){if(r.state==="suspended"){yy(r.pkg,!0);continue}n.add(r.pkg),ci.has(r.pkg)?_y(r):mA(r)}for(let r of[...ci.keys()])n.has(r)||yy(r,!0);(t=(e=ce).invalidate)==null||t.call(e),(s=(i=ce).render)==null||s.call(i,Fe,xe),bu(!0)}function mA(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?O("appMirrorBadge"):O("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(h,m,g)=>{let y=document.createElement("button");return y.className="app-key",y.title=m,y.setAttribute("aria-label",m),y.innerHTML=te(g),y.onclick=()=>Es({cmd:"key",pkg:n.pkg,key:h}),y},a=document.createElement("button");a.className="app-key",a.title=O("appKeyboard"),a.dataset.act="keys",a.innerHTML=te("keyboard"),a.onclick=()=>bA(n.pkg);let o=document.createElement("button");o.className="app-key",o.dataset.act="rotate",o.title=O("appRotate"),o.setAttribute("aria-label",O("appRotate")),o.innerHTML=te("rotate"),o.onclick=()=>vA(n.pkg),t.append(i,s,r("back",O("appBack"),"back"),r("home",O("appHome"),"top"),r("recents",O("appRecents"),"appGrid"),a,o);let l=document.createElement("div");l.className="app-surface",l.dataset.nativeApp=n.pkg,l.dataset.aspect=String(n.display&&n.display.aspect||16/9),l.dataset.shape=_p(n.pkg,n);let c=document.createElement("div");c.className="app-state",e.append(t,l),l.append(c);let u=ll(n),d=Jt({id:hA(n.pkg),title:n.title,node:e,w:u.w,h:u.h});ci.set(n.pkg,{win:d,surface:l,status:c,badge:i,session:n}),_y(n)}function _y(n){var r,a;let e=ci.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?O("appMirrorBadge"):O("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:O("appStarting"),creating:O("appStarting"),launching:O("appStarting"),running:"",failed:n.error?yA(n):O("appFailed")};n.mode==="display"&&((r=Et.shizuku)!=null&&r.binding||!((a=Et.shizuku)!=null&&a.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=O("appWaitingService"),i.creating=O("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=O("appMirrorStarting"),i.creating=O("appMirrorStarting"),i.launching=O("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&gA.has(n.error))){let o=document.createElement("button");o.className="app-state-btn",o.textContent=O("appOpenOnPhone"),o.onclick=()=>Es({cmd:"phone",pkg:n.pkg}),e.status.appendChild(o)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var gA=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function yA(n){let e={shizuku_unavailable:O("appNeedShizuku"),shizuku_denied:O("appShizukuDenied"),shizuku_blocked:O("appShizukuBlocked"),display_refused:O("appDisplayRefused"),display_failed:O("appDisplayFailed"),no_launcher_activity:O("appNoLauncher"),consent_denied:O("appConsentDenied"),mirror_stopped:O("appMirrorStopped"),mirror_failed:O("appMirrorFailed"),mirror_refused:O("appMirrorFailed"),projection_failed:O("appMirrorFailed"),display_empty:O("appDisplayEmpty"),app_not_running:O("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?O("appSurfaceFailed"):e[t]||`${O("appFailed")}: ${t}`}function yy(n,e){let t=ci.get(n);t&&(ci.delete(n),e&&bp.add(n),Nt(t.win),bp.delete(n))}Ve("wins",()=>{for(let n of[...ci.keys()]){let e=ci.get(n);bp.has(n)||fe.includes(e.win)||(ci.delete(n),Es({cmd:"close",pkg:n}))}Ee("appsState")});function xu(n){n&&Es({cmd:"open",pkg:n,shape:_p(n,wp(n))})}function vA(n){var a;let e=ci.get(n),t=wp(n),s=((e==null?void 0:e.surface.dataset.shape)||_p(n,t))==="portrait"?"landscape":"portrait",r=ll({shape:s,display:(t==null?void 0:t.display)||((a=e==null?void 0:e.session)==null?void 0:a.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),Es({cmd:"shape",pkg:n,shape:s}),bu(!0)}function vy(){Es({cmd:"shizuku"})}function xA(){en.loaded=!1,Es({cmd:"refresh"})}function bA(n){oi(!0,{nativeId:"app:"+n})}function Sp(n){var e,t;if(en.loaded&&!n)return en;en.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,en.query,en.showSystem),s=JSON.parse(i||'{"apps":[]}');en.apps=Array.isArray(s.apps)?s.apps:[],en.shown=s.shown||en.apps.length,en.total=s.total||en.apps.length,en.icons=s.icons||en.icons}catch{en.apps=[]}return Ee("appsState"),en}function bu(n){let e=[];for(let[i,s]of ci)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===gy||(gy=t,Es({cmd:"sync",windows:e}))}function _A(){my||(my=setInterval(()=>{ci.size&&bu(!1)},uA))}Ve("wins",()=>bu(!0));var xy={install:()=>O("shizukuInstall"),start:()=>O("shizukuStart"),update:()=>O("shizukuUpdate"),ask:()=>O("shizukuAsk"),denied:()=>O("shizukuDenied"),rebind:()=>O("shizukuRebind"),ready:()=>O("shizukuReady"),unknown:()=>O("shizukuUnknown")},wA=new Set(["hosted","permission","capture"]);function SA(){let n=Et.shizuku||{};return wA.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function wy(){var u;let n=Et.shizuku||{},e=SA(),t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>O("routeHosted"),permission:()=>O("routePermission"),capture:()=>O("routeCapture")};s.textContent=(r[e]||r.capture)();let a=document.createElement("small");if(a.textContent=(xy[n.state]||xy.unknown)(),s.appendChild(a),e==="capture"&&!((u=Et.input)!=null&&u.accessibility)){let d=document.createElement("small");d.textContent=O("appCaptureInput"),s.appendChild(d)}else if(n.detail){let d=document.createElement("small");d.textContent=n.detail,s.appendChild(d)}t.append(i,s);let o=document.createElement("button");o.className="az-btn",n.ask?(o.textContent=O("shizukuGrant"),o.onclick=()=>vy()):(o.textContent=O("shizukuRecheck"),o.onclick=()=>{xA(),vy()}),t.appendChild(o);let l=document.createElement("button");l.className="az-btn ghost",l.textContent=O("appSelfTest"),l.onclick=async()=>{var d;l.disabled=!0;try{await Es({cmd:"selftest"});let h=(d=Et.diagnostics)==null?void 0:d.selfTest;h&&ht(h.ok?O("appSelfTestOk"):O("appSelfTestFailed"))}catch{ht(O("appCommandFailed"))}finally{l.disabled=!1}},t.appendChild(l);let c=document.createElement("button");return c.className="az-btn ghost",c.textContent=O("appDiagnostics"),c.onclick=()=>{let d=t.querySelector(".az-caps");if(d){d.remove();return}let h=document.createElement("pre");h.className="az-caps",h.textContent=MA(),h.onclick=()=>AA(h.textContent),t.appendChild(h)},t.appendChild(c),t}function MA(){var i;let n=Et.shizuku||{},e=Et.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||Et.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...Et.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=Et.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||Et.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function AA(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&ht(O("appDiagnosticsCopied"));return}catch{}}var Ki=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Mp(n){let e=wp(n.pkg),t=`<span class="nm">${Ki((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${Ki(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${Ki(e.state==="suspended"?O("appMinimized"):O("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${Ki(O("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${Ki(n.pkg)}" data-session="${e?Ki(e.state):""}" data-pkg="${Ki(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${Ki(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${Ki(O("androidApps"))}">${te("device")}</span>`+r+s+`</span><span class="lib-label">${Ki(n.label||n.pkg)}</span></button>`}function _u(n){let e=ci.get(n);e&&Kt(e.win)}function Sy(){return dA().length}function My(){return en.apps}function Ay(){me&&(window.nextvrApps=pA,_A(),Ve("lang",()=>{en.loaded=!1,Ee("appsState")}))}var Mu="nextvr-xr-game",cl="nextvr-xr-menu",Dt={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},ar=[],EA=null,Tp=!1,Ty=()=>Dt,Ry=()=>ar,Cy=()=>Dt.hosting,ul=()=>Dt.runtime==="ready",Ly=()=>Dt.handMode,TA=()=>{var n;return((n=Dt.game)==null?void 0:n.package)||null};function Cs(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function Ey(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(Dt,e),Su=null,Dt.hosting&&((t=Dt.game)!=null&&t.package)?LA(Dt.game):PA(),Ee("xr",{...Dt,games:ar}))}function RA(n){let e;try{e=JSON.parse(n)}catch{e=null}ar=Array.isArray(e==null?void 0:e.games)?e.games:[],EA=(e==null?void 0:e.problem)||null,Tp=!0,Ee("xr",{...Dt,games:ar})}function Py(){var n,e;if(!(!me||window.nextvrXr)){window.nextvrXr=Ey,window.nextvrXrLibrary=RA;try{Ey(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}Ap(),Ve("lang",()=>{Ap(),Ee("xr",{...Dt,games:ar})})}}function Ap(){Cs({cmd:"library"})}function Iy(){Tp=!1,Cs({cmd:"refresh"}),Ap()}function Rp(n){!n||Dt.hosting||Cs({cmd:"open",package:n})}function Cp(){Dt.hosting&&Cs({cmd:"close"})}function CA(){Dt.hosting&&Cs({cmd:"minimize"})}function Ny(){Dt.hosting&&Cs({cmd:"restore"})}function Lp(){Cs({cmd:"runtime"})}function Dy(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}Dt.handMode=e,Ee("xr",{...Dt,games:ar})}function Pp(){Cs({cmd:"selftest"})}function Ip(){return ar.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function ky(n){let e=n.game,t=`<span class="nm">${Ts(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=TA()===e.package?`<span class="lib-open">${Ts(O("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${Ts(e.describe||O("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${Ts(e.package)}" aria-label="${Ts(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${Ts(O("xrTitle"))}">${te("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${Ts(e.label||e.package)}</span></button>`}var Ts=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Oy(){if(ul()||!Tp||!ar.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=Dt.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=Dt.runtimeBundled?O("xrMissing"):O("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=Dt.summary||Dt.problem||O("xrSummaryMissing"),t.appendChild(i),n.append(e,t),Dt.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=O("xrInstall"),r.onclick=()=>{Lp(),ht(O("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=O("xrSelfTest"),s.onclick=()=>Pp(),n.appendChild(s),n}var Rs=!1,Ep=null;function LA(n){var u;if(Rs)return;Ep={windows:fe.map(d=>({win:d,hidden:d.hidden})),dockHidden:mu(),keyboard:ay(),focus:((u=rl())==null?void 0:u.id)||null};for(let d of fe)d.setHidden(!0);rr(!0),Qt(!0),document.documentElement.classList.add("game-on","xr-on"),Rs=!0,Np.reset(),wu(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=O("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=Dt.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let a=document.createElement("span");a.className="app-bar-spacer";let o=document.createElement("button");o.className="app-key",o.title=O("appMinimize"),o.setAttribute("aria-label",O("appMinimize")),o.innerHTML=te("chevronDown"),o.onclick=()=>CA();let l=document.createElement("button");l.className="app-key",l.title=O("close"),l.setAttribute("aria-label",O("close")),l.innerHTML=te("x"),l.onclick=()=>Cp(),t.append(i,a,o,l),e.append(t,s);let c=ll({shape:"landscape",display:{w:r.w,h:r.h}});Jt({id:Mu,title:n.label||n.package,node:e,w:c.w,h:c.h})}function PA(){if(!Rs)return;Rs=!1,Su=null;for(let e of[...fe])(e.id===Mu||e.id===cl)&&Nt(e);document.documentElement.classList.remove("game-on","xr-on");let n=Ep;if(Ep=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...fe])!e.has(i)&&!i.onboarding&&Nt(i);Qt(n.dockHidden);for(let{win:i,hidden:s}of n.windows)fe.includes(i)&&i.setHidden(s);n.keyboard&&rr(!1);let t=fe.find(i=>i.id===n.focus);t&&Kt(t)}Np.reset(),wu(0)}Ve("wins",()=>{!Rs||!window.nextvrXr||fe.some(n=>n.id===Mu)||Cp()});var Np=new Ga,IA=()=>Rs&&fe.some(n=>n.id===cl);function NA(){if(!Rs||fe.some(i=>i.id===cl)||!Dt.game)return;let n=Dt.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${Ts(n.label||n.package)}</div>
    <p class="gm-sub">${Ts(O("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${O("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${te("settings")}<span>${O("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${O("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&(DA(),s.dataset.act==="exit"?Cp():s.dataset.act==="settings"&&Ee("game:settings"))});let t=Jt({id:cl,title:O("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:qt,z:-.55}});t==null||t.setCurve(0)}function DA(){let n=fe.find(e=>e.id===cl);n&&Nt(n)}function wu(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var Su=null;function kA(){let n=Rs?ey(ge.x,ge.y):null,e=!!n&&n.win.id!==Mu&&!n.win.onboarding;e!==Su&&(Su=e,Cs({cmd:"hands-ui",blocked:e}))}Ve("phonehands",n=>{if(!Rs)return;kA();let e=(n.hands||[]).filter(s=>s.pinching),t=au(e),i=Np.update(performance.now(),{left:t,right:t});wu(i.progress),i.opened&&NA(),i.closed&&!IA()&&wu(0)});var dl=null,Gn=null,Eu="",Au=0,or=new Set,OA='button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';function UA(){var i;let n=document.getElementById("entry-fullscreen");if(n&&!n.hidden)return n;let e=rl();if(e&&!e.hidden)return e.el;let t=document.querySelector(".dock");return t&&t.offsetWidth&&getComputedStyle(t).display!=="none"?t:((i=fe.find(s=>!s.hidden&&!s.onboarding))==null?void 0:i.el)||null}function Uy(){let n=UA();return n?[...n.querySelectorAll(OA)].filter(e=>{if(e.closest("[hidden],.win-shell[hidden]"))return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&getComputedStyle(e).visibility!=="hidden"}):[]}function Ls(n){Gn&&Gn!==n&&Gn.classList.remove("joycon-selected"),Gn=n||null,Gn&&(Gn.classList.add("joycon-selected"),Gn.focus({preventScroll:!0}))}function Dp(n){let e=Uy();if(!e.length){Ls(null);return}if(e.indexOf(Gn)<0){Ls(e[0]);return}let i=Gn.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2,a=n==="left"?[-1,0]:n==="right"?[1,0]:n==="up"?[0,-1]:[0,1],o=null,l=1/0;for(let c of e){if(c===Gn)continue;let u=c.getBoundingClientRect(),d=u.left+u.width/2-s,h=u.top+u.height/2-r,m=d*a[0]+h*a[1];if(m<=2)continue;let g=Math.abs(d*a[1]-h*a[0]),y=m+g*1.8;y<l&&(o=c,l=y)}o||(o=n==="left"||n==="up"?e.at(-1):e[0]),Ls(o)}function FA(){let n=Uy();n.length&&((!Gn||!n.includes(Gn))&&Ls(n[0]),Gn==null||Gn.click())}function BA(){var s;let n=document.querySelector('#entry-fullscreen [data-entry-act="back"]');if(n){n.click(),Ls(null);return}let e=rl(),t=(s=e==null?void 0:e.el)==null?void 0:s.querySelector('[data-entry-act="back"]');if(t){t.click(),Ls(null);return}if(e&&!e.onboarding){Nt(e),Ls(null);return}let i=document.activeElement;i&&i!==document.body&&i.blur()}function zA(){if(dl){let n=dl;dl=null;for(let{win:e,hidden:t}of n.windows)fe.includes(e)&&e.setHidden(t);Qt(n.dockHidden),jt(n.dockVisible),rr(n.keyboardHidden),Ls(null);return}dl={windows:fe.filter(n=>!n.onboarding).map(n=>({win:n,hidden:n.hidden})),dockHidden:mu(),dockVisible:ny(),keyboardHidden:oy()};for(let{win:n}of dl.windows)n.setHidden(!0);rr(!0),Qt(!0),Ls(null)}function HA(n,e){if(n==="home"){!or.has(n)&&e===0&&zA(),or.add(n);return}if(n==="left"||n==="right"||n==="up"||n==="down"){(!or.has(n)||e>0)&&Dp(n),or.add(n);return}or.has(n)||(or.add(n),n==="accept"?FA():n==="back"&&BA())}function VA(n,e,t=0){e?HA(n,t):or.delete(n)}function GA(n,e){return Math.abs(n)<.58&&Math.abs(e)<.58?"":Math.abs(n)>Math.abs(e)?n<0?"left":"right":e<0?"up":"down"}function WA(n,e){let t=GA(n,e);if(!t){Eu="",Au=0;return}let i=performance.now();t!==Eu?(Eu=t,Dp(t),Au=i+320):i>=Au&&(Dp(t),Au=i+170)}function Fy(){!me||window.__nextvrJoyconInstalled||(window.__nextvrJoyconInstalled=!0,window.__nextvrJoyconKey=VA,window.__nextvrJoyconAxes=WA,window.addEventListener("blur",()=>{or.clear(),Eu=""}),window.addEventListener("gamepadconnected",n=>{var t;let e=((t=n.gamepad)==null?void 0:t.id)||"Bluetooth gamepad";ht(/joy.?con/i.test(e)?"Joy-Con conectado":`Controle conectado: ${e}`)}))}var By="v2.0.0";var kp="ENTRE EM OUTRO MUNDO";var zy=Object.freeze(["NeyVR","Faylan","colaboradores do nextVR","JocaVR"]),Hy=Object.freeze({NeyVR:"o Dono absoluto mais aurudo do planeta.",Faylan:"o desenvolvedor mais sabido de todo o universo muita aura","colaboradores do nextVR":"",JocaVR:"o portador de jogos mais importante do planeta aurudo 67"}),Op="NextVR \u2014 realidade aumentada",Tu=Object.freeze(["O NextVR \xE9 um projeto de realidade virtual criado para transformar a maneira como voc\xEA interage com o mundo digital usando apenas um celular e um VR Box.","Nosso objetivo \xE9 aproximar a experi\xEAncia de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.","Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualiza\xE7\xE3o representa um novo passo rumo a uma experi\xEAncia mais completa, interativa e acess\xEDvel.","NextVR \u2014 Mais que um app, uma nova forma de ver."]),qA=[Op,...Tu].join(`

`);var XA=`
<svg viewBox="0 0 28 24" fill="none" class="entry-back-svg" aria-hidden="true">
  <path d="M11 5L4 12L11 19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19C21.8 12 24 14.2 24 17V19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,$A=`
<svg viewBox="0 0 36 36" fill="none" class="entry-reticle-svg" aria-hidden="true">
  <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M18 3V8M18 28V33M3 18H8M28 18H33" stroke="currentColor" stroke-width="2"/>
</svg>`,Vy=`
<svg viewBox="0 0 24 24" fill="currentColor" class="entry-user-svg" aria-hidden="true">
  <circle cx="12" cy="8.2" r="4.2"/>
  <path d="M4 20.5c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8z"/>
</svg>`,Gy=`
<svg viewBox="0 0 24 24" fill="none" class="entry-store-svg" aria-hidden="true">
  <path d="M6 8h12l-1.2 12H7.2L6 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,YA=`
<svg viewBox="0 0 24 24" class="entry-verified-svg" aria-hidden="true">
  <circle cx="12" cy="12" r="10.5" fill="#fe2c55" stroke="#ff6384" stroke-width="1"/>
  <path d="M7.6 12.4l3 3 5.8-6.2" fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,jA=[{id:"beat-vr",name:"Beat Saber",cat:"Modo VR Imediato \xB7 4.9 \u2605",bg:"#070814",img:"./beat-saber-logo.jpg"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"A\xE7\xE3o \xB7 Arena VR \xB7 4.8 \u2605",bg:"#0a1426",img:"./hyper-dash-logo.jpg"},{id:"roblox-vr",name:"Roblox",cat:"Ambiente Preto \xB7 4.8 \u2605",bg:"#090d16",img:"./roblox-logo.jpg"},{id:"tiktok",name:"TikTok",cat:"V\xEDdeos Curtos \xB7 4.9 \u2605",bg:"#000000",img:"./tiktok-logo.jpg"},{id:"youtube",name:"YouTube VR",cat:"V\xEDdeo \xB7 360\xB0 \xB7 4.8 \u2605",bg:"#dc2626",img:"./icons/youtube.svg"},{id:"discord",name:"Discord",cat:"Social \xB7 Voz \xB7 4.7 \u2605",bg:"#4f46e5",img:"./icons/discord.svg"},{id:"netflix",name:"Netflix",cat:"Cinema \xB7 TV \xB7 4.8 \u2605",bg:"#991b1b"},{id:"spotify",name:"Spotify",cat:"M\xFAsica \xB7 \xC1udio \xB7 4.8 \u2605",bg:"#059669",img:"./icons/spotify.svg"}],ZA=[{id:"chrome",label:"Chrome N",url:"./icons/nextvr-chrome-n.png"},{id:"purple",label:"Neon N",url:"./icons/nextvr-n.png"},{id:"cyber",label:"Cyber Blue",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><circle cx="40" cy="29" r="13" fill="#fff"/><path d="M16 68c0-13 11-21 24-21s24 8 24 21z" fill="#fff"/></svg>')},{id:"emerald",label:"Emerald VR",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><rect x="14" y="26" width="52" height="26" rx="10" fill="#fff"/><circle cx="30" cy="39" r="6" fill="#0f172a"/><circle cx="50" cy="39" r="6" fill="#0f172a"/></svg>')}];function Si(n){return String(n||"").replace(/[&<>"']/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":e===">"?"&gt;":e==='"'?"&quot;":"&#39;")}var Up={pt:{start:"Iniciar",startVr:"Iniciar VR",settings:"Configura\xE7\xF5es",basicSettings:"Configura\xE7\xF5es b\xE1sicas",handStyle:"Hand tracking style",handDrawn:"M\xE3o desenhada",handInvisible:"Invis\xEDvel",collaborators:"Colaboradores",about:"Sobre",back:"Voltar",store:"Store",storeTitle:"Store NextVR \u2014 Jogos & Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Ativado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"qualidade",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"M\xE9dia (890p)",qLow:"Baixa (390p)",ocularCell:"c\xE2mera grande ocular (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRILHO",handCell:"Hand tracking",fingerTouchOn:"Toque (Sem Pin\xE7a): ON",fingerTouchOff:"Toque (Sem Pin\xE7a): OFF",envTitle:"Ambiente",envAr:"C\xE2mera (AR)",envSunset:"P\xF4r do Sol",envNight:"Noite"},en:{start:"Start",startVr:"Start VR",settings:"Settings",basicSettings:"Basic Settings",handStyle:"Hand tracking style",handDrawn:"Drawn hand",handInvisible:"Invisible",collaborators:"Collaborators",about:"About",back:"Back",store:"Store",storeTitle:"NextVR Store \u2014 Games & Apps",langCell:"LANGUAGE",spatialCell:"SPATIAL APP",on:"Enabled",dock:"Dock",dockSnapOn:"Dock Slot: ON",dockSnapOff:"Dock Slot: OFF",qualityCell:"quality",qAuto:"Auto",qHigh:"High (1080p)",qMed:"Medium (890p)",qLow:"Low (390p)",ocularCell:"ultra-wide camera (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRIGHTNESS",handCell:"Hand tracking",fingerTouchOn:"Finger Touch: ON",fingerTouchOff:"Finger Touch: OFF",envTitle:"Environment",envAr:"Camera (AR)",envSunset:"Sunset",envNight:"Night"},es:{start:"Iniciar",startVr:"Iniciar VR",settings:"Ajustes",basicSettings:"Ajustes b\xE1sicos",handStyle:"Hand tracking style",handDrawn:"Mano dibujada",handInvisible:"Invisible",collaborators:"Colaboradores",about:"Acerca de",back:"Volver",store:"Tienda",storeTitle:"Tienda NextVR \u2014 Juegos y Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Activado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"calidad",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"Media (890p)",qLow:"Baja (390p)",ocularCell:"c\xE1mara gran angular (0.5x)",volumeCell:"VOLUMEN",brightnessCell:"BRILLO",handCell:"Hand tracking",fingerTouchOn:"Toque \xCDndice: ON",fingerTouchOff:"Toque \xCDndice: OFF",envTitle:"Entorno",envAr:"C\xE1mara (AR)",envSunset:"Atardecer",envNight:"Noche"},ja:{start:"\u958B\u59CB",startVr:"VR\u3092\u958B\u59CB",settings:"\u8A2D\u5B9A",basicSettings:"\u57FA\u672C\u8A2D\u5B9A",handStyle:"Hand tracking style",handDrawn:"\u624B\u3092\u8868\u793A",handInvisible:"\u975E\u8868\u793A",collaborators:"\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u30FC",about:"\u6982\u8981",back:"\u623B\u308B",store:"\u30B9\u30C8\u30A2",storeTitle:"NextVR \u30B9\u30C8\u30A2 \u2014 \u30B2\u30FC\u30E0\uFF06\u30A2\u30D7\u30EA",langCell:"\u8A00\u8A9E",spatialCell:"SPATIAL APP",on:"\u30AA\u30F3",dock:"\u30C9\u30C3\u30AF",dockSnapOn:"\u30B9\u30ED\u30C3\u30C8: ON",dockSnapOff:"\u30B9\u30ED\u30C3\u30C8: OFF",qualityCell:"\u753B\u8CEA",qAuto:"\u81EA\u52D5",qHigh:"\u9AD8 (1080p)",qMed:"\u4E2D (890p)",qLow:"\u4F4E (390p)",ocularCell:"\u8D85\u5E83\u89D2\u30AB\u30E1\u30E9 (0.5x)",volumeCell:"\u97F3\u91CF",brightnessCell:"\u660E\u308B\u3055",handCell:"Hand tracking",fingerTouchOn:"\u6307\u30BF\u30C3\u30C1: ON",fingerTouchOff:"\u6307\u30BF\u30C3\u30C1: OFF",envTitle:"\u74B0\u5883",envAr:"\u30AB\u30E1\u30E9 (AR)",envSunset:"\u5915\u66AE\u308C",envNight:"\u591C"},ru:{start:"\u041D\u0430\u0447\u0430\u0442\u044C",startVr:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C VR",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",basicSettings:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",handStyle:"Hand tracking style",handDrawn:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0443\u043A\u0430",handInvisible:"\u041D\u0435\u0432\u0438\u0434\u0438\u043C\u0430\u044F",collaborators:"\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",about:"\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",back:"\u041D\u0430\u0437\u0430\u0434",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",storeTitle:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D NextVR \u2014 \u0418\u0433\u0440\u044B \u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",langCell:"\u042F\u0417\u042B\u041A",spatialCell:"SPATIAL APP",on:"\u0412\u043A\u043B.",dock:"\u0414\u043E\u043A",dockSnapOn:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: ON",dockSnapOff:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: OFF",qualityCell:"\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",qAuto:"\u0410\u0432\u0442\u043E",qHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qMed:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",ocularCell:"\u0448\u0438\u0440\u043E\u043A\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430 (0.5x)",volumeCell:"\u0413\u0420\u041E\u041C\u041A\u041E\u0421\u0422\u042C",brightnessCell:"\u042F\u0420\u041A\u041E\u0421\u0422\u042C",handCell:"Hand tracking",fingerTouchOn:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: ON",fingerTouchOff:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: OFF",envTitle:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",envAr:"\u041A\u0430\u043C\u0435\u0440\u0430 (AR)",envSunset:"\u0417\u0430\u043A\u0430\u0442",envNight:"\u041D\u043E\u0447\u044C"},de:{start:"Starten",startVr:"VR starten",settings:"Einstellungen",basicSettings:"Grundeinstellungen",handStyle:"Hand tracking style",handDrawn:"Gezeichnete Hand",handInvisible:"Unsichtbar",collaborators:"Mitwirkende",about:"\xDCber",back:"Zur\xFCck",store:"Store",storeTitle:"NextVR Store \u2014 Spiele & Apps",langCell:"SPRACHE",spatialCell:"SPATIAL APP",on:"Aktiviert",dock:"Dock",dockSnapOn:"Dock-Slot: ON",dockSnapOff:"Dock-Slot: OFF",qualityCell:"Qualit\xE4t",qAuto:"Auto",qHigh:"Hoch (1080p)",qMed:"Mittel (890p)",qLow:"Niedrig (390p)",ocularCell:"Ultraweitwinkel (0.5x)",volumeCell:"LAUTST\xC4RKE",brightnessCell:"HELLIGKEIT",handCell:"Hand tracking",fingerTouchOn:"Finger-Touch: ON",fingerTouchOff:"Finger-Touch: OFF",envTitle:"Umgebung",envAr:"Kamera (AR)",envSunset:"Sonnenuntergang",envNight:"Nacht"}},Je=n=>(Up[Dh()]||Up.pt)[n]||Up.pt[n]||n;function Fp(n){return Je(n?"handDrawn":"handInvisible")}function Bp({onStart:n,onLaunchGorilla:e,getStatus:t,fullscreen:i=!1}={}){let s=document.createElement("div");s.className=i?"entry-menu-root entry-menu-root--fullscreen":"entry-menu-root",s.dataset.entryMenu="2.0.0",i&&(s.dataset.entryFullscreen="1");let r="home",a=6,o=0,l=null,c=null,u=["Carregando c\xE2mera AR...","Carregando Dock...","Otimizando Hand tracking...","Calibrando lentes 3D...","Carregando aplicativos espaciais...","Iniciando NextVR..."],d=D=>D<17?u[0]:D<35?u[1]:D<55?u[2]:D<75?u[3]:D<92?u[4]:u[5],h=()=>{l&&(clearInterval(l),l=null)},m=()=>{let D=s.querySelector("[data-entry-countdown]"),U=s.querySelector("[data-entry-load-pct]"),L=s.querySelector("[data-entry-load-bar]"),T=s.querySelector("[data-entry-load-status]"),N=s.querySelector("[data-entry-countdown-sub]");D&&(D.textContent=String(a)),U&&(U.textContent=`${o}%`),L&&(L.style.width=`${o}%`),T&&(T.textContent=d(o)),N&&(N.textContent=`COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...`)},g=()=>{h(),a=6,o=0,r="loading",b();let D=6e3,U=performance.now();l=setInterval(()=>{let L=Math.max(0,performance.now()-U);if(o=Math.min(100,Math.round(L/D*100)),a=Math.max(1,Math.ceil((D-L)/1e3)),L>=D){o=100,m(),h(),n==null||n();return}m()},60)},y=()=>{let D=t==null?void 0:t();if(D!=null&&D.clockText)return D.clockText;if(D!=null&&D.time&&D.time!=="--:--")return D.time;let U=new Date;return`${String(U.getHours()).padStart(2,"0")}:${String(U.getMinutes()).padStart(2,"0")}`},f=()=>{var U,L;try{let T=(L=(U=window.NativeXR)==null?void 0:U.battery)==null?void 0:L.call(U);if(T&&T!=="null"){let N=typeof T=="string"?JSON.parse(T):T;if(N&&typeof N.level=="number"){let z=Math.round(Math.max(0,Math.min(1,N.level))*100);return{percent:z,charging:!!N.charging,text:`${z}%${N.charging?" \u26A1":""}`}}}}catch{}let D=t==null?void 0:t();if(D&&typeof D.batteryLevel=="number"){let T=Math.round(Math.max(0,Math.min(1,D.batteryLevel))*100);return{percent:T,charging:!!D.charging,text:`${T}%${D.charging?" \u26A1":""}`}}return{percent:100,charging:!1,text:"100%"}},p=()=>{var D,U;A.handsOn=1,A.handDraw=A.handDraw?0:1,qe(A),(U=(D=window.NativeXR)==null?void 0:D.handVisuals)==null||U.call(D,!!A.handDraw),Ee("handDraw",!!A.handDraw)},x=()=>{let D=Fp(A.handDraw);return`
      <nav class="entry-cards-row" role="navigation" aria-label="Menu principal NextVR">
        <button type="button" class="entry-card entry-card--primary" data-entry-act="start">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("start")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="settings"?"entry-card--active":""}" data-entry-act="settings">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("settings")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${A.handDraw?"entry-card--hand-drawn":"entry-card--hand-invisible"}" data-entry-act="hand-style" data-hand-draw="${A.handDraw?"1":"0"}">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("handStyle")}</span>
            <span class="entry-card-state" data-hand-style-label>${D}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="collaborators"?"entry-card--active":""}" data-entry-act="collaborators">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("collaborators")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="about"?"entry-card--active":""}" data-entry-act="about">
          <span class="entry-card-body">
            <span class="entry-card-title">${Je("about")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>
      </nav>`},v=()=>`
      <div class="entry-brand-stage" data-entry-panel="brand">
        <div class="entry-brand-grid-bg" aria-hidden="true"></div>
        <div class="entry-updates-feed" data-entry-updates role="region" aria-label="Atualiza\xE7\xF5es NextVR">
          <div class="entry-updates-head">
            <span class="entry-updates-dot" aria-hidden="true"></span>
            <span class="entry-updates-title">ATUALIZA\xC7\xD5ES \xB7 NOTIFICA\xC7\xD5ES</span>
            <span class="entry-updates-badge">v2.0.0</span>
          </div>
          <div class="entry-updates-list">
            <article class="entry-notif-card" data-entry-notif="sixdof">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">AGORA \xB7 6DOF AR</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">6DoF Estabilizado &amp; Verso Branco Transl\xFAcido</strong>
              <p class="entry-notif-desc">Corrigido o avan\xE7o sozinho; travamento horizontal no ch\xE3o e verso da Dock branco transl\xFAcido ao passar por tr\xE1s.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="browser-hold">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">NOVO \xB7 NAVEGADOR (2S)</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">+ Nova Guia &amp; + Guia An\xF4nima</strong>
              <p class="entry-notif-desc">Segure por 2 segundos no app do Navegador (com Hand Tracking de Pin\xE7a ou Toque) para escolher + Nova Guia ou + Guia An\xF4nima.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="dock-pinch">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">CORRE\xC7\xC3O \xB7 HAND TRACKING</span>
                <span class="entry-notif-time">Ativo</span>
              </div>
              <strong class="entry-notif-heading">Pin\xE7a Calibrada Perto da Dock (em Bar)</strong>
              <p class="entry-notif-desc">Corrigida a sele\xE7\xE3o de apps com pin\xE7a ao aproximar-se da Dock em barra, com prioridade sobre janelas de fundo.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="spatial-library">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">GORILLA TAG VR \xB7 UPDATE</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">Contador de Moedas no Bra\xE7o Direito &amp; M\xE3os Corrigidas</strong>
              <p class="entry-notif-desc">Nova logo amarela do Gorilla Tag, contador de moedas 3D no bra\xE7o direito, m\xE3o direita/esquerda corrigidas e sa\xEDda autom\xE1tica desativada.</p>
            </article>
          </div>
        </div>
        <div class="entry-brand-store-dock">
          <div class="entry-brand-store-info" data-entry-act="store" role="button" tabindex="0">
            <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-brand-store-thumb" draggable="false" />
            <div class="entry-brand-store-meta">
              <span class="entry-brand-store-tag">STORE \xB7 EM DESTAQUE</span>
              <strong class="entry-brand-store-name">Gorilla Tag VR</strong>
            </div>
          </div>
          <div class="entry-brand-store-actions">
            <button type="button" class="entry-btn entry-btn--primary entry-brand-store-open" data-entry-act="store">
              ${Gy}<span>${Je("store")}</span>
            </button>
          </div>
        </div>
      </div>`,w=()=>{let D=!!A.gorillaInstalled,L=c!==null?`<button type="button" class="entry-btn entry-btn--primary" disabled>Baixando... ${c}%</button>`:D?`<span class="entry-store-badge-ok" data-entry-gorilla-installed>\u2713 Na Biblioteca</span>
         <button type="button" class="entry-btn entry-btn--primary" data-entry-play-gorilla>Jogar Gorilla Tag</button>`:'<button type="button" class="entry-btn entry-btn--primary" data-entry-install-gorilla>BAIXAR</button>';return`
      <div class="entry-subpanel entry-subpanel--store" data-entry-panel="store">
        <div class="entry-subpanel-head">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <h2 class="entry-subpanel-title">${Je("storeTitle")}</h2>
            <div style="display:inline-flex;gap:6px;flex-wrap:wrap">
              <span class="entry-store-card-pill" style="background:rgba(255,255,255,.16);color:#fff">P\xE1gina inicial</span>
              <span class="entry-store-card-pill">Jogos</span>
              <span class="entry-store-card-pill">Apps</span>
              <span class="entry-store-card-pill">Lista de desejos</span>
            </div>
          </div>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Je("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${Je("startVr")}</button>
          </div>
        </div>

        <div class="entry-store-body">
          <div class="entry-store-featured" data-entry-store-gorilla>
            <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-store-gorilla-logo" draggable="false" />
            <div class="entry-store-featured-info">
              <div class="entry-store-kicker">DESTAQUE VR \xB7 LENTES GOOGLE CARDBOARD 2015</div>
              <div class="entry-store-title">Gorilla Tag</div>
              <div class="entry-store-desc">Mapa da floresta 3D com locomo\xE7\xE3o f\xEDsica pelas m\xE3os e bra\xE7os de gorila em Hand Tracking. Ao baixar, vai para a Biblioteca de Apps.</div>
              <div class="entry-store-actions">
                ${L}
              </div>
            </div>
          </div>

          <div class="entry-store-section-label">NAVEGAR POR TUDO \xB7 JOGOS &amp; APPS NEXTVR</div>
          <div class="entry-store-grid">
            ${jA.map(T=>{let N=T.img?`<img src="${T.img}" alt="${Si(T.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block">`:T.name.slice(0,2).toUpperCase();return`
              <div class="entry-store-card" data-entry-store-app="${T.id}">
                <div class="entry-store-card-dot" style="background:${T.bg};overflow:hidden;padding:0">${N}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${Si(T.name)}</div>
                  <div class="entry-store-card-cat">${Si(T.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Gr\xE1tis</span>
              </div>`}).join("")}
          </div>
        </div>
      </div>`},E=()=>{let D=[{id:"passthrough",label:Je("envAr")},{id:"sunset",label:Je("envSunset")},{id:"night",label:Je("envNight")}],U=[{id:"auto",label:Je("qAuto")},{id:"high",label:Je("qHigh")},{id:"medium",label:Je("qMed")},{id:"low",label:Je("qLow")}],L=A.entryEnvChosen&&A.env&&A.env!=="passthrough"?A.env:"passthrough",T=A.quality==="med"?"medium":A.quality||"auto",N=!!A.wideCamera,z=!!A.spatialLauncher,W=A.dockSnapSlot!==0,G=A.lang||"pt",K=Number.isFinite(A.mediaVolume)?A.mediaVolume:70,Q=Number.isFinite(A.brightness)?A.brightness:75;return`
      <div class="entry-subpanel entry-subpanel--settings" data-entry-panel="settings">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${Je("basicSettings")}</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Je("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${Je("startVr")}</button>
          </div>
        </div>
        <div class="entry-bento-grid">
          <div class="entry-bento-cell entry-bento-cell--idioma">
            <div class="entry-bento-title">${Je("langCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${G==="pt"?"on":""}" data-entry-lang="pt">PT</button>
              <button type="button" class="entry-seg-btn ${G==="en"?"on":""}" data-entry-lang="en">EN</button>
              <button type="button" class="entry-seg-btn ${G==="es"?"on":""}" data-entry-lang="es">ES</button>
              <button type="button" class="entry-seg-btn ${G==="ja"?"on":""}" data-entry-lang="ja">JA</button>
              <button type="button" class="entry-seg-btn ${G==="ru"?"on":""}" data-entry-lang="ru">RU</button>
              <button type="button" class="entry-seg-btn ${G==="de"?"on":""}" data-entry-lang="de">DE</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--spatial">
            <div class="entry-bento-title">${Je("spatialCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${z?"on":""}" data-entry-spatial="1">${Je("on")}</button>
              <button type="button" class="entry-seg-btn ${z?"":"on"}" data-entry-spatial="0">${Je("dock")}</button>
              <button type="button" class="entry-seg-btn ${W?"on":""}" data-entry-dock-snap="${W?"1":"0"}" title="Espa\xE7o pr\xE9-definido ao mover janelas na Dock normal">${Je(W?"dockSnapOn":"dockSnapOff")}</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--qualidade">
            <div class="entry-bento-title">${Je("qualityCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              ${U.map(se=>`<button type="button" class="entry-seg-btn ${T===se.id?"on":""}" data-entry-quality="${se.id}">${se.label}</button>`).join("")}
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--ocular">
            <div class="entry-bento-title">${Je("ocularCell")} \xB7 3DoF / 6DoF</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${N?"on":""}" data-entry-wide-cam="1">0.5x</button>
              <button type="button" class="entry-seg-btn ${N?"":"on"}" data-entry-wide-cam="0">1.0x</button>
              <button type="button" class="entry-seg-btn ${A.sixdof===0?"on":""}" data-entry-dof="3dof" title="Modo 3DoF (rota\xE7\xE3o de cabe\xE7a)">3DoF</button>
              <button type="button" class="entry-seg-btn ${A.sixdof!==0?"on":""}" data-entry-dof="6dof" title="Modo 6DoF Falso (andar no espa\xE7o)">6DoF</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--volume">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${Je("volumeCell")}</span>
              <span class="entry-bento-val" data-vol-val>${K}%</span>
            </div>
            <input type="range" min="0" max="100" value="${K}" class="entry-slider" data-entry-volume />
          </div>

          <div class="entry-bento-cell entry-bento-cell--brilho">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${Je("brightnessCell")}</span>
              <span class="entry-bento-val" data-bri-val>${Q}%</span>
            </div>
            <input type="range" min="10" max="100" value="${Q}" class="entry-slider" data-entry-brightness />
          </div>

          <div class="entry-bento-cell entry-bento-cell--hand">
            <div class="entry-bento-title">${Je("handCell")}</div>
            <div class="entry-hand-col">
              <button type="button" class="entry-seg-btn ${A.handDraw?"on":""}" data-entry-hand-draw="1">${Je("handDrawn")}</button>
              <button type="button" class="entry-seg-btn ${A.handDraw?"":"on"}" data-entry-hand-draw="0">${Je("handInvisible")}</button>
              <button type="button" class="entry-seg-btn ${A.fingerTouch!==0?"on":""}" data-entry-finger-touch="${A.fingerTouch!==0?"1":"0"}" title="Toque com o indicador indo \xE0 frente sem precisar pin\xE7ar">${A.fingerTouch!==0?Je("fingerTouchOn"):Je("fingerTouchOff")}</button>
              <button type="button" class="entry-seg-btn ${A.gunGesture!==0?"on":""}" data-entry-gun-gesture="${A.gunGesture!==0?"1":"0"}" title="Fazer pose de arminha e fechar o indicador para ocultar/mostrar a Dock" style="display:inline-flex;align-items:center;justify-content:center;gap:6px"><img src="./gun-logo.jpg" alt="" style="width:15px;height:15px;border-radius:50%;object-fit:cover"><span>Arminha (Dock): ${A.gunGesture!==0?"ON":"OFF"}</span></button>
              <button type="button" class="entry-seg-btn ${A.showFps?"on":""}" data-entry-fps="1">FPS: ${A.showFps?"ON":"OFF"}</button>
              <div class="entry-hand-env-title">${Je("envTitle")}</div>
              ${D.map(se=>`<button type="button" class="entry-seg-btn ${L===se.id?"on":""}" data-entry-env="${se.id}">${se.label}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>`},R=()=>`
    <div class="entry-subpanel" data-entry-panel="collaborators">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title">${Je("collaborators")}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Je("back")}</button>
        </div>
      </div>
      <div class="entry-collab-list" role="list">
        ${zy.map(D=>{let U=Hy[D]||"",L=D==="colaboradores do nextVR";return`
          <div class="entry-collab-item ${L?"entry-collab-item--blue":""}" role="listitem" data-collaborator-name="${D}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name ${L?"entry-collab-name--blue":""}" ${L?'data-collab-blue="1"':""}>${D}</span>
              <span class="entry-collab-verified" data-collab-verified="${D}" title="Verificado">${YA}</span>
              ${U?`<span class="entry-collab-bio" data-collab-bio="${D}">${Si(U)}</span>`:""}
            </span>
          </div>`}).join("")}
      </div>
    </div>`,M=()=>`
    <div class="entry-subpanel entry-subpanel--about" data-entry-panel="about">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title" data-about-title>${Op}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
        </div>
      </div>
      <div class="entry-about-body" data-about-body>
        ${Tu.map((D,U)=>`
          <p class="entry-about-p ${U===Tu.length-1?"entry-about-p--closing":""}">${D}</p>
        `).join("")}
      </div>
    </div>`,B=()=>{let D=A.profileName||"",U=A.profileAvatar||"";return`
      <div class="entry-subpanel entry-subpanel--profile" data-entry-panel="profile">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">Login / Perfil NextVR</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
            <button type="button" class="entry-btn entry-btn--primary" data-profile-save>Salvar Login</button>
          </div>
        </div>
        <div class="entry-login-body">
          <div class="entry-login-left">
            <div class="entry-login-avatar-preview" data-profile-avatar-preview title="Toque para escolher foto da galeria">
              ${U?`<img src="${Si(U)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`:Vy}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK</span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${Si(D)}" />
            </label>
            <div class="entry-login-presets-wrap">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR</span>
              <div class="entry-login-presets">
                ${ZA.map(T=>`
                  <button type="button" class="entry-login-preset ${U===T.url?"on":""}" data-profile-preset="${Si(T.url)}" title="${Si(T.label)}">
                    <img src="${Si(T.url)}" alt="${Si(T.label)}" />
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>`},_=D=>{let U=d(o);return`
      <div class="entry-hud-screen" data-entry-panel="loading" role="status" aria-live="polite">
        <div class="entry-subtitle">${kp}</div>

        <header class="entry-hud-top">
          <div class="entry-hud-top-left" aria-hidden="true">
            <div class="entry-hud-sq-box"><div class="entry-hud-sq-inner"></div></div>
            <div class="entry-hud-lines">
              <span class="entry-hud-line-short"></span>
              <span class="entry-hud-line-long"></span>
            </div>
            <div class="entry-hud-vdiv"></div>
          </div>

          <div class="entry-hud-top-right">
            <div class="entry-hud-vdiv" aria-hidden="true"></div>
            <div class="entry-hud-rect" aria-hidden="true">
              <span>NEXTVR</span>
              <b data-entry-battery-top>${D.text}</b>
            </div>
            <button type="button" class="entry-hud-rect entry-hud-rect--btn" data-entry-cancel-countdown title="Cancelar">
              CANCELAR
            </button>
          </div>
        </header>

        <div class="entry-hud-center">
          <div class="entry-hud-frame-wrap">
            <svg class="entry-hud-frame-svg" viewBox="0 0 920 400" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <filter id="entryHudGlow" x="-15%" y="-15%" width="130%" height="130%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon points="274,14 646,14 628,32 292,32" fill="#00f2fe" filter="url(#entryHudGlow)" />
              <polygon points="292,368 628,368 646,386 274,386" fill="#00f2fe" filter="url(#entryHudGlow)" />
              <path d="M 68,14 L 256,14 L 284,42 L 636,42 L 664,14 L 852,14 L 876,66 L 868,78 Q 906,200 868,322 L 876,334 L 852,386 L 664,386 L 636,358 L 284,358 L 256,386 L 68,386 L 44,334 L 52,322 Q 14,200 52,78 L 44,66 Z"
                fill="rgba(4, 34, 58, 0.34)"
                stroke="#38bdf8"
                stroke-width="2.5"
                stroke-linejoin="round" />
            </svg>

            <div class="entry-hud-frame-content">
              <div class="entry-hud-brand">NextVR</div>
              <div class="entry-hud-pct-row">
                <span class="entry-hud-pct" data-entry-load-pct>${o}%</span>
                <span class="entry-hud-sec">(<b data-entry-countdown>${a}</b>s)</span>
              </div>
              <div class="entry-hud-status" data-entry-load-status>${U}</div>
              <div class="entry-hud-hint" data-entry-countdown-sub>COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...</div>
            </div>
          </div>
        </div>

        <footer class="entry-hud-bottom">
          <div class="entry-hud-bar-track">
            <div class="entry-hud-bar-fill" data-entry-load-bar style="width:${o}%"></div>
          </div>
        </footer>
      </div>`},b=()=>{let D=f();if(r==="loading"){s.innerHTML=_(D);let H=s.querySelector("[data-entry-cancel-countdown]");H&&(H.onclick=()=>{h(),r="home",b()});return}let U=r==="settings"?E():r==="collaborators"?R():r==="about"?M():r==="profile"?B():r==="store"?w():v(),L=A.profileName?Si(A.profileName):"NextVR (Login)",T=A.profileAvatar?`<img src="${Si(A.profileAvatar)}" alt="" class="entry-profile-q-img" />`:Vy;s.innerHTML=`
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">MAIN MENU</h1>
        <div class="entry-subtitle">${kp}</div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${r==="store"?"on":""}" data-entry-act="store" title="Abrir Store NextVR">
            ${Gy}
            <span>${Je("store")}</span>
          </button>
          <div class="entry-top-battery" data-entry-battery-pill title="Bateria sincronizada com o celular">
            <span class="entry-top-bat-bar"><i data-entry-battery-fill style="width:${D.percent}%"></i></span>
            <b data-entry-battery-top>${D.text}</b>
          </div>
        </div>
        <button type="button" class="entry-top-reticle" data-entry-act="gear" title="Configura\xE7\xF5es">${$A}</button>
      </header>

      <div class="entry-rail-backdrop" aria-hidden="true">
        <div class="entry-rail-lines"></div>
      </div>

      <div class="entry-layout">
        <aside class="entry-left-column">
          ${x()}

          <div class="entry-profile-box" data-entry-act="profile" role="button" tabindex="0" title="Clique para editar Nome e Foto de Perfil">
            <button type="button" class="entry-profile-q" data-entry-act="profile" title="Foto de Perfil / Login">${T}</button>
            <div class="entry-profile-info">
              <div class="entry-profile-name"><span data-profile-display-name>${L}</span> <small class="entry-profile-edit-tag">PERFIL</small></div>
              <div class="entry-profile-meta">Hand: <span data-profile-hand>${Fp(A.handDraw)}</span></div>
              <div class="entry-profile-meta">Hora: <span data-entry-clock>${y()}</span> \xB7 Bat: <span data-entry-battery>${D.text}</span></div>
            </div>
            <div class="entry-profile-ver">${By}</div>
          </div>
        </aside>

        <main class="entry-right-stage">
          ${U}
          ${r==="home"?`
            <button type="button" class="entry-corner-back" data-entry-act="start" title="Iniciar">
              ${XA}
            </button>
          `:""}
        </main>
      </div>
    `,s.querySelectorAll('[data-entry-act="start"]').forEach(H=>{H.onclick=()=>{i?g():n==null||n()}});let N=s.querySelector("[data-entry-cancel-countdown]");N&&(N.onclick=()=>{h(),r="home",b()}),s.querySelectorAll('[data-entry-act="settings"], [data-entry-act="gear"]').forEach(H=>{H.onclick=()=>{h(),r=r==="settings"?"home":"settings",b()}}),s.querySelectorAll('[data-entry-act="store"]').forEach(H=>{H.onclick=oe=>{oe.stopPropagation(),h(),r=r==="store"?"home":"store",b()}}),s.querySelectorAll('[data-entry-act="hand-style"]').forEach(H=>{H.onclick=()=>{p(),b()}}),s.querySelectorAll('[data-entry-act="collaborators"]').forEach(H=>{H.onclick=()=>{h(),r=r==="collaborators"?"home":"collaborators",b()}}),s.querySelectorAll('[data-entry-act="about"]').forEach(H=>{H.onclick=()=>{h(),r=r==="about"?"home":"about",b()}}),s.querySelectorAll('[data-entry-act="profile"]').forEach(H=>{H.onclick=oe=>{oe.stopPropagation(),h(),r=r==="profile"?"home":"profile",b()}}),s.querySelectorAll('[data-entry-act="back"]').forEach(H=>{H.onclick=()=>{h(),r="home",b()}});let z=s.querySelector("[data-entry-install-gorilla]");z&&(z.onclick=()=>{if(A.gorillaInstalled=1,qe(A),Ee("gorilla-installed",!0),window.__gorillaFastTest){c=null,b();return}c=45,b(),setTimeout(()=>{c=90,r==="store"&&b()},110),setTimeout(()=>{c=null,r==="store"&&b()},230)});let W=s.querySelector("[data-entry-play-gorilla]");W&&(W.onclick=()=>{A.gorillaInstalled=1,qe(A),Ee("gorilla-installed",!0),typeof e=="function"?e():n==null||n()});let G=s.querySelector("[data-profile-name-input]");G&&(G.oninput=()=>{A.profileName=G.value.trim(),qe(A);let H=s.querySelector("[data-profile-display-name]");H&&(H.textContent=A.profileName||"NextVR (Login)")});let K=s.querySelector("[data-profile-save]");K&&(K.onclick=()=>{G&&(A.profileName=G.value.trim()),qe(A),Ee("profile-updated",{name:A.profileName,avatar:A.profileAvatar}),r="home",b()}),s.querySelectorAll("[data-profile-preset]").forEach(H=>{H.onclick=()=>{G&&(A.profileName=G.value.trim()),A.profileAvatar=H.dataset.profilePreset,qe(A),Ee("profile-updated",{name:A.profileName,avatar:A.profileAvatar}),b()}});let Q=s.querySelector("[data-profile-upload]"),se=s.querySelector("[data-profile-avatar-preview]"),q=s.querySelector("[data-profile-file]"),j=()=>{var H;G&&(A.profileName=G.value.trim(),qe(A)),typeof((H=window.NativeXR)==null?void 0:H.pickProfilePhoto)=="function"?window.NativeXR.pickProfilePhoto():q&&q.click()};Q&&(Q.onclick=j),se&&(se.onclick=j),q&&(q.onchange=()=>{var de;let H=(de=q.files)==null?void 0:de[0];if(!H)return;let oe=new FileReader;oe.onload=()=>{let _e=new Image;_e.onload=()=>{let Xe=document.createElement("canvas");Xe.width=160,Xe.height=160;let X=Xe.getContext("2d"),nn=Math.min(_e.width,_e.height),Ie=(_e.width-nn)/2,He=(_e.height-nn)/2;X.drawImage(_e,Ie,He,nn,nn,0,0,160,160),G&&(A.profileName=G.value.trim()),A.profileAvatar=Xe.toDataURL("image/jpeg",.86),qe(A),Ee("profile-updated",{name:A.profileName,avatar:A.profileAvatar}),b()},_e.src=String(oe.result)},oe.readAsDataURL(H)}),s.querySelectorAll("[data-entry-hand-draw]").forEach(H=>{H.onclick=()=>{var oe,de;A.handsOn=1,A.handDraw=H.dataset.entryHandDraw==="1"?1:0,qe(A),(de=(oe=window.NativeXR)==null?void 0:oe.handVisuals)==null||de.call(oe,!!A.handDraw),Ee("handDraw",!!A.handDraw),b()}}),s.querySelectorAll("[data-entry-finger-touch]").forEach(H=>{H.onclick=()=>{var oe,de;A.fingerTouch=A.fingerTouch===0?1:0,qe(A),(de=(oe=window.NativeXR)==null?void 0:oe.setFingerTouch)==null||de.call(oe,!!A.fingerTouch),Ee("fingerTouch",!!A.fingerTouch),b()}}),s.querySelectorAll("[data-entry-gun-gesture]").forEach(H=>{H.onclick=()=>{A.gunGesture=A.gunGesture===0?1:0,qe(A),Ee("gunGesture",!!A.gunGesture),b()}}),s.querySelectorAll("[data-entry-env]").forEach(H=>{H.onclick=()=>{let oe=H.dataset.entryEnv;A.entryEnvChosen=1,oe==="passthrough"?(A.env="passthrough",qe(A),vi(!0)):Gi(oe),b()}}),s.querySelectorAll("[data-entry-quality]").forEach(H=>{H.onclick=()=>{var oe,de;A.quality=H.dataset.entryQuality==="med"?"medium":H.dataset.entryQuality,qe(A),Ee("quality",A.quality),(de=(oe=window.NativeXR)==null?void 0:oe.setQuality)==null||de.call(oe,A.quality),b()}}),s.querySelectorAll("[data-entry-dock-snap]").forEach(H=>{H.onclick=()=>{A.dockSnapSlot=A.dockSnapSlot===0?1:0,qe(A),Ee("dockSnapSlot",!!A.dockSnapSlot),b()}}),s.querySelectorAll("[data-entry-wide-cam]").forEach(H=>{H.onclick=()=>{var oe,de;A.wideCamera=H.dataset.entryWideCam==="1"?1:0,qe(A),(de=(oe=window.NativeXR)==null?void 0:oe.wideCamera)==null||de.call(oe,!!A.wideCamera),Ee("wideCamera",!!A.wideCamera),b()}}),s.querySelectorAll("[data-entry-dof]").forEach(H=>{H.onclick=()=>{var de,_e;let oe=H.dataset.entryDof==="6dof";A.sixdof=oe?1:0,qe(A),oe||Wt.reset(),(_e=(de=window.NativeXR)==null?void 0:de.setSixDofEnabled)==null||_e.call(de,oe),Ee("sixdof",oe),b()}}),s.querySelectorAll("[data-entry-spatial]").forEach(H=>{H.onclick=()=>{A.spatialLauncher=H.dataset.entrySpatial==="1"?1:0,A.spatialLauncher&&(A.env="passthrough",vi(!0)),qe(A),Ee("spatialLauncher",!!A.spatialLauncher),b()}}),s.querySelectorAll("[data-entry-lang]").forEach(H=>{H.onclick=()=>{Nr(H.dataset.entryLang),b()}}),s.querySelectorAll("[data-entry-fps]").forEach(H=>{H.onclick=()=>{A.showFps=A.showFps?0:1,qe(A),Ee("fps-toggle",A.showFps),b()}});let ne=s.querySelector("[data-entry-volume]");ne&&(ne.oninput=()=>{var de,_e;let H=Number(ne.value);A.mediaVolume=H,qe(A),me&&((_e=(de=window.NativeXR)==null?void 0:de.setMediaVolumePercent)==null||_e.call(de,H));let oe=s.querySelector("[data-vol-val]");oe&&(oe.textContent=`${H}%`)});let ee=s.querySelector("[data-entry-brightness]");ee&&(ee.oninput=()=>{var de,_e;let H=Number(ee.value);A.brightness=H,qe(A),me&&((_e=(de=window.NativeXR)==null?void 0:de.setBrightnessPercent)==null||_e.call(de,H));let oe=s.querySelector("[data-bri-val]");oe&&(oe.textContent=`${H}%`)})};return b(),s.resetToHome=()=>{h(),r="home",b()},Ve("handDraw",()=>{let D=Fp(A.handDraw),U=s.querySelector("[data-hand-style-label]"),L=s.querySelector("[data-profile-hand]"),T=s.querySelector('[data-entry-act="hand-style"]');U&&(U.textContent=D),L&&(L.textContent=D),T&&(T.dataset.handDraw=A.handDraw?"1":"0",T.classList.toggle("entry-card--hand-drawn",!!A.handDraw),T.classList.toggle("entry-card--hand-invisible",!A.handDraw))}),Ve("device-status",()=>{let D=s.querySelector("[data-entry-clock]");D&&(D.textContent=y());let U=f(),L=s.querySelector("[data-entry-battery]"),T=s.querySelector("[data-entry-battery-top]"),N=s.querySelector("[data-entry-battery-fill]");L&&(L.textContent=U.text),T&&(T.textContent=U.text),N&&(N.style.width=`${U.percent}%`)}),window.nextvrProfilePhoto=D=>{D&&(A.profileAvatar=String(D),qe(A),Ee("profile-updated",{name:A.profileName,avatar:A.profileAvatar}),b())},s}function zp(n,e){if(e===Wg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===No||e===Dc){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===No)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Ru=class extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $p(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new jp(t)}),this.register(function(t){return new Zp(t)}),this.register(function(t){return new Kp(t)}),this.register(function(t){return new Jp(t)}),this.register(function(t){return new Xp(t)}),this.register(function(t){return new Qp(t)}),this.register(function(t){return new Yp(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new Wp(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=js.extractUrlBase(e);a=js.resolveURL(c,this.path)}else a=js.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Yy){try{a[lt.KHR_BINARY_GLTF]=new lf(e)}catch(d){s&&s(d);return}r=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new mf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case lt.KHR_MATERIALS_UNLIT:a[d]=new qp;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[d]=new cf(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[d]=new uf;break;case lt.KHR_MESH_QUANTIZATION:a[d]=new df;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function KA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wp=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],un);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Lr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pc(u),c.distance=d;break;case"spot":c=new Lc(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,cr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},qp=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,i){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],un),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}},Xp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},$p=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(o,o)}return Promise.all(r)}},Yp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},jp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],un)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Vt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Zp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Kp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],un),Promise.all(r)}},Jp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Qp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],un),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Vt)),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},sf=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},rf=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},af=class{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(m),u,d,h,s.mode,s.filter),m})})}else return null}},of=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Mi.TRIANGLES&&c.mode!==Mi.TRIANGLE_STRIP&&c.mode!==Mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,m=[];for(let g of d){let y=new Ae,f=new k,p=new nt,x=new k(1,1,1),v=new _c(g.geometry,g.material,h);for(let w=0;w<h;w++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&x.fromBufferAttribute(l.SCALE,w),v.setMatrixAt(w,y.compose(f,p,x));for(let w in l)if(w==="_COLOR_0"){let E=l[w];v.instanceColor=new Cr(E.array,E.itemSize,E.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);Ot.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},Yy="glTF",hl=12,Wy={JSON:1313821514,BIN:5130562},lf=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,hl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-hl,r=new DataView(e,hl),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Wy.JSON){let c=new Uint8Array(e,hl+a,o);this.content=i.decode(c)}else if(l===Wy.BIN){let c=hl+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=pf[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=pf[u]||u.toLowerCase();if(a[u]!==void 0){let h=i.accessors[e.attributes[u]],m=eo[h.componentType];c[d]=m.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(m){for(let g in m.attributes){let y=m.attributes[g],f=l[g];f!==void 0&&(y.normalized=f)}d(m)},o,c,un,h)})})}},uf=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},df=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Cu=class extends Xs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,d=(i-t)/u,h=d*d,m=h*d,g=e*c,y=g-c,f=-2*m+3*h,p=m-h,x=1-f,v=p-h+d;for(let w=0;w!==o;w++){let E=a[y+w+o],R=a[y+w+l]*u,M=a[g+w+o],B=a[g+w]*u;r[w]=x*E+v*R+f*M+p*B}return r}},JA=new nt,hf=class extends Cu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return JA.fromArray(r).normalize().toArray(r),r}},Mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qy={9728:cn,9729:rn,9984:ic,9985:xh,9986:mo,9987:Gs},Xy={33071:ii,33648:bo,10497:Ar},Hp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QA={CUBICSPLINE:void 0,LINEAR:Er,STEP:Ea},Vp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ia({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),n.DefaultMaterial}function Wr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function cr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(i){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;a.push(h)}if(s){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;o.push(h)}if(r){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function nE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iE(n){let e,t=n.extensions&&n.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gp(t.attributes):e=n.indices+":"+Gp(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Gp(n.targets[i]);return e}function Gp(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ff(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var rE=new Ae,mf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new KA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Da(this.options.manager):this.textureLoader=new Ic(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Wr(r,o,s),cr(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(js.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Hp[s.type],o=eo[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new It(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Hp[s.type],c=eo[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,m=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,f;if(m&&m!==d){let p=Math.floor(h/m),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(x);v||(y=new c(o,p*m,s.count*m/u),v=new Ao(y,m/u),t.cache.add(x,v)),f=new Eo(v,l,h%m/u,g)}else o===null?y=new c(s.count*l):y=new c(o,h,s.count*l),f=new It(y,l,g);if(s.sparse!==void 0){let p=Hp.SCALAR,x=eo[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,E=new x(a[1],v,s.sparse.count*p),R=new c(a[2],w,s.sparse.count*l);o!==null&&(f=new It(f.array.slice(),f.itemSize,f.normalized));for(let M=0,B=E.length;M<B;M++){let _=E[M];if(f.setX(_,R[M*l]),l>=2&&f.setY(_,R[M*l+1]),l>=3&&f.setZ(_,R[M*l+2]),l>=4&&f.setW(_,R[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return u.magFilter=qy[h.magFilter]||rn,u.minFilter=qy[h.minFilter]||Gs,u.wrapS=Xy[h.wrapS]||Ar,u.wrapT=Xy[h.wrapT]||Ar,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(h,m){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){let f=new _n(y);f.needsUpdate=!0,h(f)}),t.load(js.resolveURL(d,r.path),g,void 0,m)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||sE(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Co,Xn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ro,Xn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ia}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){let d=s[lt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],un),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Vt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Un);let u=r.alphaMode||Vp.OPAQUE;if(u===Vp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Vp.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==an&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==an&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==an){let d=r.emissiveFactor;o.emissive=new Pe().setRGB(d[0],d[1],d[2],un)}return r.emissiveTexture!==void 0&&a!==an&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),cr(d,r),t.associations.set(d,{materials:e}),r.extensions&&Wr(s,d,r),d})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $y(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=iE(c),d=s[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=$y(new Bn,c,t),s[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?eE(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let m=0,g=u.length;m<g;m++){let y=u[m],f=a[m],p,x=c[m];if(f.mode===Mi.TRIANGLES||f.mode===Mi.TRIANGLE_STRIP||f.mode===Mi.TRIANGLE_FAN||f.mode===void 0)p=r.isSkinnedMesh===!0?new xc(y,x):new wt(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===Mi.TRIANGLE_STRIP?p.geometry=zp(p.geometry,Dc):f.mode===Mi.TRIANGLE_FAN&&(p.geometry=zp(p.geometry,No));else if(f.mode===Mi.LINES)p=new wc(y,x);else if(f.mode===Mi.LINE_STRIP)p=new Pa(y,x);else if(f.mode===Mi.LINE_LOOP)p=new Sc(y,x);else if(f.mode===Mi.POINTS)p=new Mc(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&nE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),cr(p,r),f.extensions&&Wr(s,p,f),t.assignFinalMaterial(p),d.push(p)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return r.extensions&&Wr(s,d[0],r),d[0];let h=new En;r.extensions&&Wr(s,h,r),t.associations.set(h,{meshes:e});for(let m=0,g=d.length;m<g;m++)h.add(d[m]);return h})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt(Do.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ca(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),cr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let h=new Ae;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bc(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){let m=s.channels[d],g=s.samplers[m.sampler],y=m.target,f=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let h=d[0],m=d[1],g=d[2],y=d[3],f=d[4],p=[];for(let x=0,v=h.length;x<v;x++){let w=h[x],E=m[x],R=g[x],M=y[x],B=f[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let _=i._createAnimationTracks(w,E,R,M,B);if(_)for(let b=0;b<_.length;b++)p.push(_[b])}return new Rc(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(h,rE)});for(let m=0,g=d.length;m<g;m++)u.add(d[m]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new To:c.length>1?u=new En:c.length===1?u=c[0]:u=new Ot,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),cr(u,r),r.extensions&&Wr(i,u,r),r.matrix!==void 0){let d=new Ae;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new En;i.name&&(r.name=s.createUniqueName(i.name)),cr(r,i),i.extensions&&Wr(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[h,m]of s.associations)(h instanceof Xn||h instanceof _n)&&d.set(h,m);return u.traverse(h=>{let m=s.associations.get(h);m!=null&&d.set(h,m)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];lr[r.path]===lr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(lr[r.path]){case lr.weights:c=gs;break;case lr.rotation:c=zi;break;case lr.position:case lr.scale:c=ys;break;default:switch(i.itemSize){case 1:c=gs;break;case 2:case 3:default:c=ys;break}break}let u=s.interpolation!==void 0?QA[s.interpolation]:Er,d=this._getArrayFromAccessor(i);for(let h=0,m=l.length;h<m;h++){let g=new c(l[h]+"."+lr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=ff(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof zi?hf:Cu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function aE(n,e,t){let i=e.attributes,s=new mi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){let u=ff(eo[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],m=h.min,g=h.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),h.normalized){let y=ff(eo[h.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new si;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function $y(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=pf[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return mt.workingColorSpace!==un&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),cr(n,e),aE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?tE(n,e.targets,t):n})}var es=Object.freeze({model:"Google Cardboard 2015",k1:.22,k2:.24,ipd:.064,fov:80}),Yr=[0,2,7],vf=.55,Lu=.14,jy=11.4,oE=1.42,to=1.04,Nu=!1,gl=!1,ft=null,ui=null,Ps=null,Ai=null,Kn=null,xn=null,tn=null,yl=null,vl=null,Ji=null,Zy=1,Pu=!1,pl=null,Iu=0,Du=0,rv=0,xf=[],xl=[],Ut=()=>new k,fn=Ut(),Mf=new k(Yr[0],.9,Yr[2]),ku=[],Qi=[null,null],fl=[null,null],bl=[0,0],qr=[Ut(),Ut()],lE=[Ut(),Ut()],Ni=[null,null],jr=[!1,!1],gf=[Ut(),Ut()],ur=null,Ky=[0,0],cE=0,dt={cs:1,T:null,n:0,mn:[0,0,0],d:[1,1,1],st:null,id:null,seen:null,stamp:0},Tt=[0,0,0],ze={x:0,y:0,z:0,d:0,nx:0,ny:1,nz:0,fx:0,fy:1,fz:0};function uE(n){let e=n.length/9|0;dt.T=n,dt.n=e;let t=[1e9,1e9,1e9],i=[-1e9,-1e9,-1e9];for(let c=0;c<n.length;c+=3)for(let u=0;u<3;u++){let d=n[c+u];d<t[u]&&(t[u]=d),d>i[u]&&(i[u]=d)}dt.mn=t,dt.d=[0,1,2].map(c=>Math.max(1,Math.ceil((i[c]-t[c])/dt.cs)+1));let s=dt.d[0]*dt.d[1]*dt.d[2],r=new Int32Array(s+1),a=dt.cs,o=c=>{let u=[1e9,1e9,1e9,-1e9,-1e9,-1e9];for(let d=0;d<3;d++)for(let h=0;h<3;h++){let m=n[c*9+d*3+h];m<u[h]&&(u[h]=m),m>u[h+3]&&(u[h+3]=m)}return[0,1,2].map(d=>[Math.floor((u[d]-t[d])/a),Math.floor((u[d+3]-t[d])/a)])},l=null;for(let c=0;c<2;c++){if(c===1){for(let u=0;u<s;u++)r[u+1]+=r[u];dt.st=r.slice(),dt.id=new Int32Array(r[s]),l=r.slice()}for(let u=0;u<e;u++){let d=o(u);for(let h=d[2][0];h<=d[2][1];h++)for(let m=d[1][0];m<=d[1][1];m++)for(let g=d[0][0];g<=d[0][1];g++){let y=(h*dt.d[1]+m)*dt.d[0]+g;c===0?r[y+1]++:dt.id[l[y]++]=u}}}dt.seen=new Int32Array(e)}function dE(n,e,t,i,s,r,a,o,l,c,u,d){let h=a-i,m=o-s,g=l-r,y=c-i,f=u-s,p=d-r,x=n-i,v=e-s,w=t-r,E=h*x+m*v+g*w,R=y*x+f*v+p*w;if(E<=0&&R<=0){Tt[0]=i,Tt[1]=s,Tt[2]=r;return}let M=n-a,B=e-o,_=t-l,b=h*M+m*B+g*_,I=y*M+f*B+p*_;if(b>=0&&I<=b){Tt[0]=a,Tt[1]=o,Tt[2]=l;return}let D=E*I-b*R;if(D<=0&&E>=0&&b<=0){let q=E/(E-b);Tt[0]=i+q*h,Tt[1]=s+q*m,Tt[2]=r+q*g;return}let U=n-c,L=e-u,T=t-d,N=h*U+m*L+g*T,z=y*U+f*L+p*T;if(z>=0&&N<=z){Tt[0]=c,Tt[1]=u,Tt[2]=d;return}let W=N*R-E*z;if(W<=0&&R>=0&&z<=0){let q=R/(R-z);Tt[0]=i+q*y,Tt[1]=s+q*f,Tt[2]=r+q*p;return}let G=b*z-N*I;if(G<=0&&I-b>=0&&N-z>=0){let q=(I-b)/(I-b+(N-z));Tt[0]=a+q*(c-a),Tt[1]=o+q*(u-o),Tt[2]=l+q*(d-l);return}let K=1/(G+W+D),Q=W*K,se=D*K;Tt[0]=i+h*Q+y*se,Tt[1]=s+m*Q+f*se,Tt[2]=r+g*Q+p*se}function Af(n,e,t,i){if(!dt.T)return!1;let s=dt.T,r=dt.cs,a=dt.mn,o=dt.d,l=i*i,c=!1,u=++dt.stamp,d=[0,1,2].map(g=>Math.max(0,Math.floor(([n,e,t][g]-i-a[g])/r))),h=[0,1,2].map(g=>Math.min(o[g]-1,Math.floor(([n,e,t][g]+i-a[g])/r)));for(let g=d[2];g<=h[2];g++)for(let y=d[1];y<=h[1];y++)for(let f=d[0];f<=h[0];f++){let p=(g*o[1]+y)*o[0]+f;for(let x=dt.st[p],v=dt.st[p+1];x<v;x++){let w=dt.id[x];if(dt.seen[w]===u)continue;dt.seen[w]=u;let E=w*9;dE(n,e,t,s[E],s[E+1],s[E+2],s[E+3],s[E+4],s[E+5],s[E+6],s[E+7],s[E+8]);let R=n-Tt[0],M=e-Tt[1],B=t-Tt[2],_=R*R+M*M+B*B;if(_<l){l=_,c=!0,ze.x=Tt[0],ze.y=Tt[1],ze.z=Tt[2];let b=s[E+3]-s[E],I=s[E+4]-s[E+1],D=s[E+5]-s[E+2],U=s[E+6]-s[E],L=s[E+7]-s[E+1],T=s[E+8]-s[E+2];ze.fx=I*T-D*L,ze.fy=D*U-b*T,ze.fz=b*L-I*U;let N=Math.hypot(ze.fx,ze.fy,ze.fz)||1;ze.fx/=N,ze.fy/=N,ze.fz/=N}}}if(!c)return!1;let m=Math.sqrt(l);return ze.d=m,m>1e-5?(ze.nx=(n-ze.x)/m,ze.ny=(e-ze.y)/m,ze.nz=(t-ze.z)/m):(ze.nx=ze.fx,ze.ny=ze.fy,ze.nz=ze.fz),!0}function Jy(n,e,t,i,s){if(!dt.T)return null;let r=dt.T,a=dt.cs,o=dt.mn,l=dt.d,c=Math.floor((n-o[0])/a),u=Math.floor((t-o[2])/a);if(c<0||u<0||c>=l[0]||u>=l[2])return null;let d=e,h=e+i*s,m=Math.floor((d-o[1])/a),g=Math.floor((h-o[1])/a),y=null;for(;i<0?m>=Math.max(g,0):m<=Math.min(g,l[1]-1);m+=i){if(m<0||m>=l[1])continue;let f=(u*l[1]+m)*l[0]+c;for(let p=dt.st[f],x=dt.st[f+1];p<x;p++){let v=dt.id[p]*9,w=r[v]-n,E=r[v+2]-t,R=r[v+3]-n,M=r[v+5]-t,B=r[v+6]-n,_=r[v+8]-t,b=(M-_)*(w-B)+(B-R)*(E-_);if(Math.abs(b)<1e-9)continue;let I=((M-_)*(0-B)+(B-R)*(0-_))/b,D=((_-E)*(0-B)+(w-B)*(0-_))/b,U=1-I-D;if(I<0||D<0||U<0)continue;let L=I*r[v+1]+D*r[v+4]+U*r[v+7];if(!((L-e)*i<=0||Math.abs(L-e)>s)&&(!y||Math.abs(L-e)<Math.abs(y.y-e))){let T=r[v+3]-r[v],N=r[v+4]-r[v+1],z=r[v+5]-r[v+2],W=r[v+6]-r[v],G=r[v+7]-r[v+1],K=r[v+8]-r[v+2],Q=z*W-T*K,se=Math.hypot(N*K-z*G,Q,T*G-N*W)||1;y={y:L,ny:Q/se}}}}return y}function hE(n,e,t,i){let s=(r,a)=>{let o=Jy(r,e+1.5,a,-1,8);if(!o)return null;let l=Math.abs(o.ny)>.6?o:null;if(!l)return null;let c=Jy(r,l.y+.05,a,1,3);if(c&&Math.abs(c.y-l.y)<2.2)return null;let u=l.y+i+.05;return Af(r,u,a,i-.02)?null:[r,u,a]};for(let r=0;r<=8;r++)for(let a=0;a<(r?16:1);a++){let o=a/16*6.2832,l=n+Math.cos(o)*r*.5,c=t+Math.sin(o)*r*.5,u=s(l,c);if(u)return u}return null}var pE=(n,e)=>{let t=n.attributes[e];if(t&&(t.isInterleavedBufferAttribute||!(t.array instanceof Float32Array))){let i=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)i[s*t.itemSize+r]=t.getComponent(s,r);n.setAttribute(e,new It(i,t.itemSize))}};function fE(n){let e=0,t=0;for(let u of n)e+=u.attributes.position.count,t+=u.index?u.index.count:u.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),a=new Uint32Array(t),o=0,l=0;for(let u of n){let d=u.attributes.position.count;if(i.set(u.attributes.position.array,o*3),s.set(u.attributes.normal.array,o*3),r.set(u.attributes.uv.array,o*2),u.index){let h=u.index.array;for(let m=0;m<h.length;m++)a[l++]=h[m]+o}else for(let h=0;h<d;h++)a[l++]=o+h;o+=d}let c=new Bn;return c.setAttribute("position",new It(i,3)),c.setAttribute("normal",new It(s,3)),c.setAttribute("uv",new It(r,2)),c.setIndex(new It(a,1)),c}function bf(n){return n?(n.generateMipmaps=!1,n.minFilter=rn,n.magFilter=rn,n.anisotropy=1,n):null}function mE(n){var o;n.updateMatrixWorld(!0);let e=[];n.traverse(l=>{l.isMesh&&l.geometry.attributes.position&&e.push(l)});let t=0;e.forEach(l=>{let c=l.geometry;t+=Math.floor((c.index?c.index.count:c.attributes.position.count)/3)});let i=new Float32Array(t*9),s=0,r=new Map,a=new Map;for(let l of e){let c=Array.isArray(l.material)?l.material[0]:l.material,u=l.geometry.clone();u.applyMatrix4(l.matrixWorld);let d=u.attributes.position,h=u.index,m=Math.floor((h?h.count:d.count)/3)*3;for(let f=0;f<m;f++){let p=h?h.getX(f):f;i[s++]=d.getX(p),i[s++]=d.getY(p),i[s++]=d.getZ(p)}u.attributes.normal||u.computeVertexNormals(),u.attributes.uv||u.setAttribute("uv",new It(new Float32Array(d.count*2),2));for(let f of Object.keys(u.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&u.deleteAttribute(f);["position","normal","uv"].forEach(f=>pE(u,f));let g=`${c.map?((o=c.map.source)==null?void 0:o.uuid)||c.map.uuid:"nomap"}|${c.color?c.color.getHexString():"fff"}|${c.transparent?1:0}|${c.alphaTest||0}|${c.side||0}`,y=a.get(g);y||(y=new Na({map:bf(c.map),color:c.color?c.color.clone():16777215,transparent:c.transparent,opacity:c.opacity,alphaTest:c.alphaTest,side:c.side,emissive:c.emissive?c.emissive.clone():0,emissiveMap:bf(c.emissiveMap)}),a.set(g,y)),r.has(g)||r.set(g,{m:y,l:[]}),r.get(g).l.push(u),l.geometry.dispose()}for(let l of r.values()){let c=l.l,u=null;try{let h=fE(c);h.computeBoundingSphere(),u=new wt(h,l.m)}catch{}(u?[u]:c.map(h=>new wt(h,l.m))).forEach(h=>{h.matrixAutoUpdate=!1,h.frustumCulled=!0,Kn.add(h)}),u&&c.forEach(h=>h.dispose())}return i.subarray(0,s)}function gE(n){ku.length=0,n.updateMatrixWorld(!0);let e=[];if(n.traverse(T=>{T.isSkinnedMesh&&e.push(T)}),!e.length)return;let t=e.reduce((T,N)=>N.geometry.attributes.position.count>T.geometry.attributes.position.count?N:T);e.forEach(T=>{T!==t&&(T.visible=!1)});let i=t.skeleton.bones,s=T=>T.name.toLowerCase().replace(/[^a-z]/g,""),r=T=>i.find(N=>T.test(s(N))),a={ur:r(/^upperarmr$/),lr:r(/^lowerarmr$/),hr:r(/^wristr$/),ul:r(/^upperarml$/),ll:r(/^lowerarml$/),hl:r(/^wristl$/),body:r(/^main$/),head:r(/^head$/)},o={};["r","l"].forEach(T=>{o[T]={pinky:r(new RegExp("^pinkyf?"+T+"$")),index:r(new RegExp("^pointerf?"+T+"$")),thumb:r(new RegExp("^thumb"+T+"$"))}});let l=new Set([a.ur,a.lr,a.hr,a.ul,a.ll,a.hl]);for(let T in o)for(let N in o[T])l.add(o[T][N]);let c=i.map(T=>l.has(T)),u=t.geometry,d=u.attributes.skinIndex,h=u.attributes.skinWeight,m=u.attributes.position.count,g=u.index,y=new Uint8Array(m);for(let T=0;T<m;T++){let N=0;for(let z=0;z<4;z++)c[d.getComponent(T,z)]&&(N+=h.getComponent(T,z));y[T]=N>.45?1:0}let f=[],p=g?g.count:m;for(let T=0;T<p;T+=3){let N=g?g.getX(T):T,z=g?g.getX(T+1):T+1,W=g?g.getX(T+2):T+2;y[N]&&y[z]&&y[W]&&f.push(N,z,W)}f.length>90&&(u.clearGroups(),u.setIndex(f));let x=Array.isArray(t.material)?t.material[0]:t.material;t.material=new Na({map:bf(x.map),color:x.color?x.color.clone():16777215,emissive:2236962}),t.frustumCulled=!1;let v=T=>T.getWorldPosition(Ut()),w=v(a.ur),E=v(a.ul),R=w.clone().sub(E).normalize(),M=v(a.head).sub(v(a.body)).normalize();M.addScaledVector(R,-M.dot(R)).normalize();let B=new k().crossVectors(R,M),_=new nt().setFromRotationMatrix(new Ae().makeBasis(R,M,B)).invert(),b=w.distanceTo(v(a.lr))+v(a.lr).distanceTo(v(a.hr)),I=to/b,D=w.clone().add(E).multiplyScalar(.5),U={};["r","l"].forEach(T=>{let N={};for(let K in o[T]){let Q=o[T][K];N[K]=Q?[{b:Q,bind:Q.quaternion.clone(),pos:Q.getWorldPosition(Ut()),wq:Q.getWorldQuaternion(new nt),Al:Ut(),cur:0}]:[]}let z=T==="r"?a.hr:a.hl,W=z.getWorldPosition(Ut()),G=W.clone().sub(D).dot(R)>0?1:-1;U[T]={hb:z,hbBind:z.quaternion.clone(),hpos:W,hwq:z.getWorldQuaternion(new nt),ch:N,nRest:R.clone().multiplyScalar(-G),qs:null}});function L(T,N){let z=T.nRest.clone().multiplyScalar(N),W=[T.ch.index[0],T.ch.pinky[0]].filter(Boolean).map(q=>q.pos),K=(W.length?W.reduce((q,j)=>q.add(j),Ut()).multiplyScalar(1/W.length):T.hpos.clone().addScaledVector(M,-.1)).sub(T.hpos).normalize(),Q=z.clone().addScaledVector(K,-z.dot(K)).normalize(),se=T.hwq.clone().invert();T.fl=K.clone().applyQuaternion(se),T.nl=Q.clone().applyQuaternion(se),T.QlInv=new nt().setFromRotationMatrix(new Ae().makeBasis(T.fl,Q.clone().applyQuaternion(se),new k().crossVectors(T.fl,T.nl))).invert();for(let q in T.ch)T.ch[q].forEach(j=>{j.Al.crossVectors(K,Q).normalize().applyQuaternion(j.wq.clone().invert())})}L(U.r,Zy),L(U.l,Zy),Ji&&Ji.parent&&Ji.parent.remove(Ji),Ji=new En,Ji.quaternion.copy(_),Ji.scale.setScalar(I),Ji.add(n),Ji.position.set(0,-.32,.1).sub(D.clone().applyQuaternion(_).multiplyScalar(I)),tn.add(Ji),tn.updateMatrixWorld(!0),[[a.ur,a.lr,a.hr,1],[a.ul,a.ll,a.hl,-1]].forEach(([T,N,z,W])=>{let G=tn.worldToLocal(v(T));ku.push({s:T,e:N,h:z,side:W,bs:T.quaternion.clone(),be:N.quaternion.clone(),sp:G,reach:to*.97,axis:z.position.clone().normalize(),info:U[W>0?"r":"l"]})})}function Qy(n,e,t,i){n.quaternion.copy(e),n.updateWorldMatrix(!0,!0);let s=n.getWorldPosition(Ut()),r=t.getWorldPosition(Ut()).sub(s).normalize(),a=i.clone().sub(s).normalize(),o=n.getWorldQuaternion(new nt),l=new nt().setFromUnitVectors(r,a),c=n.parent.getWorldQuaternion(new nt).invert();n.quaternion.copy(c.multiply(l).multiply(o)),n.updateWorldMatrix(!1,!0)}function yE(n,e){if(!n||!n.hb)return;let t=n.hb;if(t.quaternion.copy(n.hbBind),e){t.updateWorldMatrix(!0,!1);let s=t.getWorldQuaternion(new nt).clone().invert(),r=tn.getWorldQuaternion(new nt),a=e.f.clone().applyQuaternion(r).applyQuaternion(s).normalize(),o=e.n.clone().applyQuaternion(r).applyQuaternion(s);if(o.addScaledVector(a,-o.dot(a)),o.lengthSq()>1e-4){o.normalize(),n.nl&&o.dot(n.nl)<-.15&&o.negate();let l=new nt().setFromRotationMatrix(new Ae().makeBasis(a,o,new k().crossVectors(a,o))).multiply(n.QlInv);l.slerp(new nt,.35),n.qs?n.qs.slerp(l,.22):n.qs=l.clone(),t.quaternion.multiply(n.qs)}for(let l in n.ch){let c=Math.max(0,Math.min(.85,e.c[l]??0));n.ch[l].forEach(u=>{u.cur=u.cur*.72+c*.28,u.b.quaternion.copy(u.bind).multiply(new nt().setFromAxisAngle(u.Al,u.cur*.95))})}}else for(let i in n.ch)n.ch[i].forEach(s=>{s.cur*=.85,s.b.quaternion.copy(s.bind).multiply(new nt().setFromAxisAngle(s.Al,s.cur*1.15))});t.updateWorldMatrix(!1,!0)}function ev(n,e,t){n.s.quaternion.copy(n.bs),n.e.quaternion.copy(n.be),n.s.updateWorldMatrix(!0,!0);let i=n.s.getWorldPosition(Ut()),s=n.e.getWorldPosition(Ut()),r=n.h.getWorldPosition(Ut()),a=i.distanceTo(s),o=s.distanceTo(r),l=e.clone().sub(i),c=Math.min(Math.max(l.length(),Math.abs(a-o)+.01),(a+o)*.995);l.normalize();let u=Math.max(-1,Math.min(1,(a*a+c*c-o*o)/(2*a*c))),d=tn.getWorldQuaternion(new nt),h=new k(n.side*.45,-1,.35).normalize().applyQuaternion(d),m=h.clone().addScaledVector(l,-h.dot(l));m.lengthSq()<1e-4&&m.set(0,-1,0),m.normalize();let g=i.clone().addScaledVector(l,a*u).addScaledVector(m,a*Math.sqrt(Math.max(0,1-u*u)));if(Qy(n.s,n.bs,n.e,g),Qy(n.e,n.be,n.h,e),s=n.e.getWorldPosition(Ut()),r=n.h.getWorldPosition(Ut()),e.clone().sub(r).lengthSq()>1e-5){let f=n.e.parent.getWorldQuaternion(new nt).invert(),p=n.e.getWorldQuaternion(new nt),x=new nt().setFromUnitVectors(r.sub(s).normalize(),e.clone().sub(s).normalize());n.e.quaternion.copy(f.multiply(x).multiply(p)),n.e.updateWorldMatrix(!1,!0)}yE(n.info,t)}var Xr=(n,e)=>new k(n[e].x-.5,.5-n[e].y,-(n[e].z||0));function tv(n,e){let t=Xr(n,0),i=Xr(n,5),s=Xr(n,9),r=Xr(n,17),a=s.clone().sub(t).normalize(),o=i.clone().sub(t),l=r.clone().sub(t),c=e?new k().crossVectors(l,o):new k().crossVectors(o,l);c.addScaledVector(a,-c.dot(a)).normalize();let u=t.distanceTo(s)||.1,d=(m,g)=>Math.max(0,Math.min(1,1.55-Xr(n,m).distanceTo(t)/(Xr(n,g).distanceTo(t)||u)*.72)),h=Math.max(0,Math.min(1,1.4-Xr(n,4).distanceTo(r)/(i.distanceTo(r)||u)*.75));return{f:a,n:c,c:{index:d(8,5),pinky:d(20,17),thumb:h}}}var av="nextvr.gorilla.coins",Wn=(()=>{try{let n=localStorage.getItem(av);if(n!==null&&n!==""){let e=Number(n);if(Number.isFinite(e)&&e>=0)return Math.floor(e)}}catch{}return 100})(),In=null,dr=null,_f=null,no=null,wf=-1,yf=0;function Sf(n=1){let e=Math.max(0,Math.floor(Wn+n));if(e===Wn)return Wn;Wn=e;try{localStorage.setItem(av,String(Wn))}catch{}return ov(),ft&&(ft.dataset.gorillaRightArmCoins=String(Wn)),typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Wn),Wn}function ov(){if(!_f||!dr||wf===Wn)return;wf=Wn;let n=_f,e=dr.width,t=dr.height;n.clearRect(0,0,e,t),n.fillStyle="#0b1222",n.beginPath(),n.roundRect?n.roundRect(4,4,e-8,t-8,22):n.rect(4,4,e-8,t-8),n.fill(),n.lineWidth=5,n.strokeStyle="#facc15",n.stroke();let i=50,s=t/2,r=28,a=n.createRadialGradient(i-8,s-8,4,i,s,r);a.addColorStop(0,"#fef08a"),a.addColorStop(.55,"#facc15"),a.addColorStop(1,"#ca8a04"),n.fillStyle=a,n.beginPath(),n.arc(i,s,r,0,Math.PI*2),n.fill(),n.lineWidth=3,n.strokeStyle="#fef9c3",n.stroke(),n.fillStyle="#713f12",n.font="900 26px Inter, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("$",i,s+1),n.textAlign="left",n.fillStyle="#fde047",n.font="800 16px Inter, system-ui, sans-serif",n.fillText("MOEDAS",92,34),n.fillStyle="#ffffff",n.font="900 36px Inter, system-ui, sans-serif",n.fillText(String(Wn),92,74),no&&(no.needsUpdate=!0)}function vE(){if(In)return In;dr=document.createElement("canvas"),dr.width=256,dr.height=112,_f=dr.getContext("2d"),no=new Ac(dr),no.minFilter=rn,no.magFilter=rn,wf=-1,ov(),In=new En,In.name="gorilla-right-arm-coin-counter";let n=new an({color:1976635}),e=new wt(new qs(.088,.044,.072),n);e.position.set(0,0,-.02),In.add(e);let t=new an({color:15381256}),i=new wt(new qs(.148,.068,.012),t);i.position.set(0,0,-.004),In.add(i);let s=new an({map:no,transparent:!0,depthTest:!0,side:Un}),r=new wt(new Tn(.14,.062),s);return r.position.set(0,0,.004),In.add(r),typeof window<"u"&&(window.__gorillaRightArmCoinCounter={coins:Wn,attachedTo:"right-arm",side:1,visible:!0}),In}function lv(){if(!In||!tn)return;let n=ku[0],e=Ef(),t=new k(0,1,0).applyQuaternion(tn.getWorldQuaternion(new nt));if(n&&n.e&&n.h){let i=n.e.getWorldPosition(Ut()),s=n.h.getWorldPosition(Ut()),r=i.clone().lerp(s,.72),a=e.clone().sub(r);a.lengthSq()>1e-5&&(a.normalize(),r.addScaledVector(a,.065)),In.position.copy(r),In.up.copy(t),In.lookAt(e)}else{let i=tn.localToWorld(new k(.24,-.22,-.44));In.position.copy(i),In.up.copy(t),In.lookAt(e)}typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Wn,window.__gorillaRightArmCoinCounter.position=In.position.toArray())}function xE(n,e){if(!e||e.length<21||(n==null?void 0:n.physicalSide)==="right")return!0;if((n==null?void 0:n.physicalSide)==="left")return!1;if(e[9].x>=.54)return!0;if(e[9].x<=.46)return!1;if(e[9].y<e[0].y&&Math.abs(e[5].x-e[17].x)>.022)return e[5].x<e[17].x;let t=String((n==null?void 0:n.id)||(n==null?void 0:n.handedness)||"").toLowerCase();return typeof(n==null?void 0:n.left)=="boolean"?n.left===!0:t.includes("left")||t==="l"?!0:t.includes("right")||t==="r"?!1:e[9].x>=.5}function bE(n){fl[0]=null,fl[1]=null;let e=[];for(let t=0;t<xi.length;t++){let i=xi[t];if(!i||!i.points||i.points.length<63)continue;let s=i.points,r=new Array(21);for(let a=0;a<21;a++)r[a]={x:s[a*3],y:s[a*3+1],z:s[a*3+2]||0};e.push({th:i,lm:r})}if(e.length>=2){e.sort((t,i)=>t.lm[9].x-i.lm[9].x);for(let t=0;t<2;t++){let{lm:i}=e[t],s=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);Qi[t]={x:i[9].x,y:i[9].y,s,ori:tv(i,t===1),t:n},fl[t]=i}}else if(e.length===1){let{th:t,lm:i}=e[0],r=xE(t,i)?1:0,a=1-r,o=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);Qi[r]={x:i[9].x,y:i[9].y,s:o,ori:tv(i,r===1),t:n},fl[r]=i,Qi[a]=null,fl[a]=null,jr[a]=!1,Ni[a]=null}if(ur&&n-ur.t<450){let t=ur.idx;Qi[t]={x:ur.x,y:ur.y,s:ur.s,ori:null,t:n}}}var Ef=()=>tn.getWorldPosition(Ut());function Ou(){xn&&(xn.position.copy(Mf),fn.set(0,0,0),jr[0]=!1,jr[1]=!1,Ni[0]=null,Ni[1]=null,bl[0]=0,bl[1]=0,xn.updateMatrixWorld(!0))}var ml=()=>new Promise(n=>setTimeout(n,16));async function nv(n){let e=await fetch(n);if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.arrayBuffer(),i=new Uint8Array(t);if(i.length>=4&&i[0]===103&&i[1]===108&&i[2]===84&&i[3]===70)return t;let s=new DecompressionStream("gzip"),r=s.writable.getWriter();return r.write(i),r.close(),await new Response(s.readable).arrayBuffer()}function iv(n,e){return new Promise((t,i)=>n.parse(e,"",t,i))}function $r(n,e){ui&&(ui.querySelectorAll("[data-gorilla-splash-fill]").forEach(t=>{t.style.width=`${n}%`}),e&&ui.querySelectorAll("[data-gorilla-splash-step]").forEach(t=>{t.textContent=e}))}function _E(){if(Kn)return;Kn=new La,Kn.background=new Pe(8898815),Kn.fog=new vc(8898815,.0042),Kn.add(new Cc(14677247,4877115,.98));let n=new Lr(16773846,.92);n.position.set(30,60,20),Kn.add(n);let e=new Lr(10875900,.32);e.position.set(-28,34,-22),Kn.add(e),xn=new En,Kn.add(xn),tn=new Gt(es.fov,1200/2/800,.05,380),tn.position.set(0,0,0),xn.add(tn);let t=es.ipd*.5;yl=new Gt(es.fov,1200/2/800,.05,380),yl.position.set(-t,0,0),vl=new Gt(es.fov,1200/2/800,.05,380),vl.position.set(t,0,0),tn.add(yl,vl);let i=vE();i&&!i.parent&&Kn.add(i),lv(),xl.length=0;let s=new Ec(.24,.24,.055,18);s.rotateX(Math.PI*.5);let r=new Na({color:16498468,emissive:9584654}),a=[[0,1.35,4.8],[-2.2,1.45,3.6],[2.2,1.45,3.6],[-3.8,1.85,.8],[3.8,1.85,.8],[0,2.2,-2.5],[-1.8,1.6,8.8],[1.8,1.6,8.8]];for(let o=0;o<a.length;o++){let[l,c,u]=a[o],d=new wt(s,r);d.position.set(l,c,u),d.userData={baseY:c,phase:o*.85,cooldownUntil:0},Kn.add(d),xl.push(d)}try{Ai=new Rr({canvas:Ps,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),Ai.setPixelRatio(1),Ai.setSize(896,560,!1),Ai.setScissorTest(!0)}catch{Ai=null}}async function wE(){if(!Pu){if(pl)return pl;if(_E(),typeof window<"u"&&window.__gorillaFastTest){Pu=!0;return}return pl=(async()=>{var n;try{$r(18,"Descompactando mapa da floresta 3D..."),await ml();let e=new Ru;e.textureLoader=new Da((n=e.options)==null?void 0:n.manager);let[t,i]=await Promise.all([nv("./gorilla-map.task"),nv("./gorilla-rig.task")]);$r(45,"Carregando texturas e geometria..."),await ml();let[s,r]=await Promise.all([iv(e,t),iv(e,i)]);$r(68,"Otimizando malhas 3D (Lambert merge)..."),await ml();let a=mE(s.scene);$r(84,"Construindo grade f\xEDsica de colis\xE3o..."),await ml(),uE(a);let o=hE(Yr[0],Yr[1],Yr[2],vf)||[Yr[0],.9,Yr[2]];Mf.set(o[0],o[1],o[2]),$r(94,"Ativando bra\xE7os Gorilla 3D..."),await ml(),gE(r.scene),Ou(),Pu=!0,$r(100,"Pronto! Entrando no Gorilla Tag...")}catch(e){console.warn("Gorilla Tag load fallback:",e),Pu=!0}finally{pl=null}})(),pl}}function SE(){if(ft)return;let n=document.getElementById("hud")||document.body;ft=document.createElement("div"),ft.id="gorilla-overlay",ft.dataset.testid="gorilla-overlay",ft.dataset.cardboardLenses="2015",ft.dataset.gorillaStage="idle",ft.dataset.gorillaRightArmCoins=String(Wn),ft.dataset.lensModel=es.model,ft.dataset.lensK1=String(es.k1),ft.dataset.lensK2=String(es.k2),ft.style.cssText=["position:fixed","left:0","top:0","width:1200px","height:800px","z-index:9997","display:none","background:#050811","overflow:hidden","touch-action:none"].join(";"),Ps=document.createElement("canvas"),Ps.id="gorilla-canvas",Ps.width=896,Ps.height=560,Ps.style.cssText="position:absolute;left:0;top:0;width:1200px;height:800px;display:block;",ft.appendChild(Ps);let e=document.createElement("div");e.className="gorilla-cardboard-divider",e.style.cssText=["position:absolute","left:599px","top:0","width:2px","height:800px","background:rgba(255,255,255,.22)","pointer-events:none","z-index:4"].join(";"),ft.appendChild(e);let t=(r,a)=>{let o=document.createElement("div");return o.style.cssText=`position:absolute;left:${r+120}px;top:12px;width:360px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:6;pointer-events:auto;font-family:Inter,system-ui,sans-serif`,o.innerHTML=`
      <button type="button" data-gorilla-act="jump" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(251,191,36,.45);background:rgba(120,53,15,.82);color:#fde68a;font:700 10px Inter,sans-serif;cursor:pointer">Salto</button>
      <button type="button" data-gorilla-act="spawn" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Spawn</button>
      <button type="button" data-gorilla-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-gorilla-act="exit" ${a?'data-gorilla-exit="1"':""} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(153,27,27,.82);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `,o};ft.appendChild(t(0,!0)),ft.appendChild(t(600,!1)),ui=document.createElement("div"),ui.id="gorilla-splash",ui.dataset.testid="gorilla-splash",ui.style.cssText=["position:absolute","left:0","top:0","width:1200px","height:800px","z-index:10","display:none","flex-direction:row","align-items:stretch","justify-content:stretch","background:radial-gradient(circle at 50% 38%, #1e293b 0%, #090d16 70%, #030712 100%)","color:#f8fafc","font-family:Inter,system-ui,sans-serif","text-align:center","user-select:none"].join(";");let i=r=>`
    <div style="width:600px;height:800px;display:flex;align-items:center;justify-content:center;${r?"border-right:1px solid rgba(255,255,255,.15)":""}">
      <div style="padding:26px 32px;border-radius:24px;background:rgba(15,23,42,.90);border:1px solid rgba(56,189,248,.38);box-shadow:0 24px 64px rgba(0,0,0,.72);display:flex;flex-direction:column;align-items:center;gap:12px;max-width:460px">
        <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:88px;height:88px;border-radius:20px;object-fit:cover;box-shadow:0 12px 32px rgba(249,115,22,.45);border:2px solid rgba(255,255,255,.22)">
        <div class="gorilla-splash-title" ${r?'data-gorilla-entering="1"':""} style="font-size:23px;font-weight:800;letter-spacing:.02em;color:#f8fafc">Entrando no Gorilla Tag</div>
        <div class="gorilla-splash-sub" style="font-size:11.5px;font-weight:600;color:#94a3b8;letter-spacing:.08em;text-transform:uppercase">Lentes ${es.model} \xB7 Hand Tracking</div>
        <div data-gorilla-splash-step style="font-size:11.5px;font-weight:600;color:#38bdf8;margin-top:2px">Inicializando floresta 3D...</div>
        <div style="width:220px;height:7px;border-radius:999px;background:rgba(148,163,184,.2);overflow:hidden;margin-top:4px">
          <div data-gorilla-splash-fill style="width:15%;height:100%;border-radius:999px;background:linear-gradient(90deg,#f97316,#38bdf8);transition:width .2s ease"></div>
        </div>
      </div>
    </div>
  `;ui.innerHTML=i(!0)+i(!1),ft.appendChild(ui),ft.addEventListener("click",r=>{let a=r.target.closest("[data-gorilla-act]");if(!a)return;let o=a.dataset.gorillaAct;if(o==="exit")uv();else if(o==="spawn")Ou();else if(o==="jump"){let l=new k(0,0,-1).applyQuaternion(tn?tn.getWorldQuaternion(new nt):new nt);l.y=0,l.lengthSq()>1e-4&&l.normalize(),fn.x+=l.x*4.2,fn.z+=l.z*4.2,fn.y=Math.max(fn.y,4.8),Sf(1)}else o==="recenter"&&(rv=new ri().setFromQuaternion(xe.quaternion,"YXZ").y)});let s=r=>{let a=ft.getBoundingClientRect();if(!a.width||!a.height)return;let o=Math.max(0,Math.min(1,(r.clientX-a.left)/a.width)),l=Math.max(0,Math.min(1,(r.clientY-a.top)/a.height)),c=o>=.5?(o-.5)*2:o*2;ur={idx:c>=.5?1:0,x:c,y:l,s:r.buttons?.12:.18,t:performance.now()}};ft.addEventListener("pointerdown",s),ft.addEventListener("pointermove",r=>{r.buttons&&s(r)}),ft.addEventListener("pointerup",()=>{ur=null}),n.appendChild(ft)}function sv(){let n=Ef();for(let e=0;e<3&&Af(n.x,n.y,n.z,vf);e++){let t=vf-ze.d;xn.position.x+=ze.nx*t,xn.position.y+=ze.ny*t,xn.position.z+=ze.nz*t,n.x+=ze.nx*t,n.y+=ze.ny*t,n.z+=ze.nz*t;let i=fn.x*ze.nx+fn.y*ze.ny+fn.z*ze.nz;i<0&&(fn.x-=ze.nx*i,fn.y-=ze.ny*i,fn.z-=ze.nz*i,ze.ny>.5&&(fn.x*=.88,fn.z*=.88))}n.y<Mf.y-18&&Ou()}function cv(n){if(!Nu)return;Iu=requestAnimationFrame(cv);let e=Math.min((n-(Du||n))/1e3,.04)||.016;if(Du=n,!Kn||!xn||!tn)return;let t=new ri().setFromQuaternion(xe.quaternion,"YXZ");tn.quaternion.setFromEuler(new ri(t.x,t.y-rv,t.z,"YXZ")),bE(n);let i=Wt.consumeStepDelta();i.lengthSq()>1e-6&&(xn.position.x+=i.x,xn.position.z+=i.z,xn.position.y+=i.y*.25),fn.y-=9.8*e,fn.multiplyScalar(1-.14*e),xn.position.addScaledVector(fn,e),xn.updateMatrixWorld(!0),sv();for(let s=0;s<2;s++){Qi[s]&&n-Qi[s].t>220&&(Qi[s]=null);let r=Qi[s],a=ku[s?0:1];if(!r){if(jr[s]=!1,Ni[s]=null,bl[s]=0,a){let g=new k(s?.24:-.24,-.26,-.46);ev(a,tn.localToWorld(g),null)}continue}bl[s]++;let o=a?a.sp:Ut(),l=Ut();if(l.set((r.x-.5)*1.65,(.5-r.y)*1.8-.34,-Math.min(.95,Math.max(.25,.09/Math.max(r.s,.035)))),Ni[s]){let g=l.clone().sub(Ni[s]);g.length()>.32&&l.copy(Ni[s]).addScaledVector(g.normalize(),.32),l.lerp(Ni[s],.24)}let c=l.clone().sub(o);c.length()>to*.97&&l.copy(o).addScaledVector(c.setLength(to*.97),1),lE[s].copy(l);let u=tn.localToWorld(l.clone());if(bl[s]>=1&&Af(u.x,u.y,u.z,Lu)){let g=new k(ze.x+ze.nx*Lu,ze.y+ze.ny*Lu,ze.z+ze.nz*Lu);if(!jr[s])jr[s]=!0,gf[s].copy(g);else{let y=gf[s].clone().sub(u),f=y.length();if(f>.001){f>.28&&y.multiplyScalar(.28/f),xn.position.add(y),yf+=y.length(),yf>=.38&&(yf=0,Sf(1));let p=y.clone().multiplyScalar(oE/Math.max(e,.01));fn.lerp(p,.56),fn.length()>jy&&fn.setLength(jy),xn.updateMatrixWorld(!0),sv()}}qr[s].copy(gf[s])}else jr[s]=!1,qr[s].copy(u);let h=tn.worldToLocal(qr[s].clone()),m=h.clone().sub(o);m.length()>to*.97&&(h.copy(o).addScaledVector(m.setLength(to*.97),1),qr[s].copy(tn.localToWorld(h))),Ni[s]||(Ni[s]=Ut()),Ni[s].copy(h),a&&ev(a,qr[s],r.ori)}if(xl.length){let s=Ef();for(let r=0;r<xl.length;r++){let a=xl[r],o=a.userData;if(n<o.cooldownUntil){a.visible=!1;continue}a.visible=!0,a.rotation.y+=e*2.4,a.position.y=o.baseY+Math.sin(n*.003+o.phase)*.08;let l=a.position.distanceTo(s),c=Qi[0]?a.position.distanceTo(qr[0]):99,u=Qi[1]?a.position.distanceTo(qr[1]):99;(l<.85||c<.45||u<.45)&&(o.cooldownUntil=n+4500,a.visible=!1,Sf(5))}}if(lv(),Ai&&yl&&vl){xn.updateMatrixWorld(!0);let s=Ps.width,r=Ps.height,a=s>>1;Ai.setViewport(0,0,a,r),Ai.setScissor(0,0,a,r),Ai.render(Kn,yl),Ai.setViewport(a,0,a,r),Ai.setScissor(a,0,a,r),Ai.render(Kn,vl)}}function io(){var t,i,s,r,a,o;if(SE(),gl||Nu)return;gl=!0,window.__gorillaStereoOverlay=!0,window.__gorillaExit=uv,window.__gorillaOnHands=null,ft&&(ft.dataset.gorillaRightArmCoins=String(Wn)),A.handsOn=!0,qi().catch(()=>{});try{(i=(t=window.NativeXR)==null?void 0:t.handVisuals)==null||i.call(t,!1)}catch{}xf=fe.map(l=>({win:l,hidden:!!l.hidden}));for(let l of[...fe])typeof l.setHidden=="function"?l.setHidden(!0):l.shell&&(l.shell.style.display="none");rr(!0),jt(!1),Qt(!0),(r=(s=ce).invalidate)==null||r.call(s),(o=(a=ce).render)==null||o.call(a,Fe,xe),ft.dataset.gorillaStage="entering",ft.style.display="block",ui.style.display="flex",$r(15,"Iniciando Gorilla Tag...");let n=typeof window<"u"&&!!window.__gorillaFastTest,e=new Promise(l=>setTimeout(l,n?240:1200));Promise.all([wE(),e]).then(()=>{gl&&(gl=!1,Nu=!0,ft.dataset.gorillaStage="playing",ui.style.display="none",Ou(),Du=performance.now(),cv(Du))})}function uv(){var n,e,t,i,s,r;gl=!1,Nu=!1,window.__gorillaStereoOverlay=!1,window.__gorillaOnHands=null,Ky[0]=0,Ky[1]=0,cE=0,Iu&&(cancelAnimationFrame(Iu),Iu=0),ui&&(ui.style.display="none"),ft&&(ft.dataset.gorillaStage="idle",ft.style.display="none");try{(e=(n=window.NativeXR)==null?void 0:n.handVisuals)==null||e.call(n,!!A.handDraw)}catch{}for(let{win:a,hidden:o}of xf)fe.includes(a)&&(typeof a.setHidden=="function"?a.setHidden(o):a.shell&&(a.shell.style.display=""));xf=[],A.spatialLauncher||(Qt(!1),jt(!0)),(i=(t=ce).invalidate)==null||i.call(t),(r=(s=ce).render)==null||r.call(s,Fe,xe)}var ie=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var ME=n=>{if(me)return bn("browser-extra",O("browser"),n);try{window.open(n,"_blank","noopener")}catch{ht("Bloqueado pelo navegador")}},AE=[{name:"Google",url:"https://www.google.com/",bg:"#ffffff",color:"#4285F4",badge:"G"},{name:"YouTube",url:"https://www.youtube.com/",bg:"#ff0033",color:"#ffffff",badge:"\u25B6"},{name:"Roblox",url:"https://www.roblox.com/",bg:"#090d16",color:"#f8fafc",badge:"\u25C8",img:"./roblox-logo.jpg"},{name:"Discord",url:"https://discord.com/app",bg:"#5865F2",color:"#ffffff",badge:"D"},{name:"Instagram",url:"https://www.instagram.com/",bg:"linear-gradient(135deg,#feda75,#d62976,#4f5bd5)",color:"#ffffff",badge:"\u25CE"},{name:"Facebook",url:"https://www.facebook.com/",bg:"#1877F2",color:"#ffffff",badge:"f"},{name:"Beat Saber",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"#070814",color:"#ffffff",badge:"\u2694",img:"./beat-saber-logo.jpg"},{name:"TikTok",url:"https://www.tiktok.com/",bg:"#000000",color:"#25F4EE",badge:"\u266A",img:"./tiktok-logo.jpg"}],EE=[{title:"YouTube \xB7 V\xEDdeos 360\xB0 VR",domain:"youtube.com",url:"https://www.youtube.com/",bg:"linear-gradient(135deg,#7f1d1d,#ef4444)",badge:"\u25B6 YouTube"},{title:"Roblox \xB7 Mundos e Jogos",domain:"roblox.com",url:"https://www.roblox.com/",bg:"linear-gradient(135deg,#0f172a,#334155)",badge:"\u25C8 Roblox",img:"./roblox-logo.jpg"},{title:"Beat Saber \xB7 VR Imediato",domain:"moonrider.xyz",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"linear-gradient(135deg,#1e1b4b,#dc2626)",badge:"\u2694 Beat Saber",img:"./beat-saber-logo.jpg"},{title:"Hyper Dash \xB7 Arena VR",domain:"immersiveweb.dev",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0c4a6e,#0284c7)",badge:"\u26A1 Hyper Dash",img:"./hyper-dash-logo.jpg"}],TE=[{name:"Spotify",url:"https://open.spotify.com/",bg:"#121316",logoBg:"#1ED760",logoColor:"#000000",logoText:"Spotify",pill:!0},{name:"Music",url:"https://music.youtube.com/",bg:"#121316",logoBg:"#FF0033",logoColor:"#ffffff",logoText:"\u25C9 Music",pill:!0},{name:"Crunchyroll",url:"https://www.crunchyroll.com/",bg:"#121316",logoBg:"#F47521",logoColor:"#ffffff",logoText:"crunchyroll",pill:!1},{name:"HBO Max",url:"https://www.max.com/",bg:"#121316",logoBg:"#002BE7",logoColor:"#ffffff",logoText:"HBO max",pill:!1},{name:"Hulu",url:"https://www.hulu.com/",bg:"#121316",logoBg:"#1CE783",logoColor:"#050709",logoText:"hulu",pill:!1},{name:"Tubi",url:"https://tubitv.com/",bg:"#121316",logoBg:"#FA382F",logoColor:"#ffffff",logoText:"tubi",pill:!1},{name:"Paramount+",url:"https://www.paramountplus.com/",bg:"#121316",logoBg:"#0064FF",logoColor:"#ffffff",logoText:"Paramount+",pill:!1},{name:"Peacock",url:"https://www.peacocktv.com/",bg:"#121316",logoBg:"#000000",logoColor:"#ffffff",logoText:"peacock",pill:!1},{name:"Twitch",url:"https://www.twitch.tv/",bg:"#121316",logoBg:"#9146FF",logoColor:"#ffffff",logoText:"twitch",pill:!1},{name:"ESPN",url:"https://www.espn.com/",bg:"#121316",logoBg:"#CC0000",logoColor:"#ffffff",logoText:"ESPN",pill:!1}],RE=[{title:"Acima das Nuvens 360\xB0",sub:"Experi\xEAncia WebXR Panor\xE2mica",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0284c7,#1e1b4b)"},{title:"Explora\xE7\xE3o Espacial VR",sub:"Tour Orbital Interativo 3D",url:"https://eyes.nasa.gov/",bg:"linear-gradient(135deg,#311042,#090d16)"},{title:"Jogos WebXR Imersivos",sub:"Cat\xE1logo VR no Navegador",url:"https://constructarcade.com/",bg:"linear-gradient(135deg,#065f46,#0f172a)"}];function CE(){return`
    <div class="qb-home-scroll">
      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Populares</span></div>
        <div class="qb-pop-row">
          ${AE.map(n=>`
            <button type="button" class="qb-pop-item" data-qb-url="${Re(n.url)}" title="${Re(n.name)}">
              <span class="qb-pop-icon" style="background:${n.bg};color:${n.color};overflow:hidden;padding:0">${n.img?`<img src="${n.img}" alt="${Re(n.name)}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`:Re(n.badge)}</span>
              <span class="qb-pop-lbl">${Re(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Continuar navegando</span><span class="qb-sec-more">Ver mais</span></div>
        <div class="qb-cont-grid">
          ${EE.map(n=>`
            <button type="button" class="qb-cont-card" data-qb-url="${Re(n.url)}" title="${Re(n.title)}">
              <div class="qb-cont-thumb" style="background:${n.bg};overflow:hidden">${n.img?`<img src="${n.img}" alt="${Re(n.title)}" style="width:100%;height:100%;object-fit:cover;display:block">`:`<span>${Re(n.badge)}</span>`}</div>
              <div class="qb-cont-meta">
                <div class="qb-cont-ttl">${Re(n.title)}</div>
                <div class="qb-cont-dom">${Re(n.domain)}</div>
              </div>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Entretenimento</span></div>
        <div class="qb-ent-grid">
          ${TE.map(n=>`
            <button type="button" class="qb-ent-tile" data-qb-url="${Re(n.url)}" title="${Re(n.name)}">
              <div class="qb-ent-card" style="background:${n.bg}">
                <span class="qb-ent-logo" style="background:${n.logoBg};color:${n.logoColor}">${Re(n.logoText)}</span>
              </div>
              <span class="qb-ent-lbl">${Re(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Experi\xEAncias imersivas</span><span class="qb-sec-more">Explorar</span></div>
        <div class="qb-imm-grid">
          ${RE.map(n=>`
            <button type="button" class="qb-imm-card" data-qb-url="${Re(n.url)}" style="background:${n.bg}">
              <span class="qb-imm-badge">WEBXR</span>
              <span class="qb-imm-ttl">${Re(n.title)}</span>
              <span class="qb-imm-sub">${Re(n.sub)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `}function Yu(n,e,t="https://duckduckgo.com/",i={}){var L,T,N,z,W,G,K,Q,se,q;let s=(i==null?void 0:i.mode)==="incognito-tab"||i!=null&&i.incognito?"incognito-tab":"new-tab",r=s==="incognito-tab",a=r&&t==="https://duckduckgo.com/"?"https://duckduckgo.com/?kae=d&kp=-1":t,o=r?"Navegador \xB7 Guia An\xF4nima":(i==null?void 0:i.mode)==="new-tab"?"Navegador \xB7 Nova Guia":e||"Navegador",l=fe.find(j=>j.id==="browser");if(l){l.el.dataset.browserMode=s,l.el.dataset.incognito=r?"1":"0",l.shell&&(l.shell.dataset.browserMode=s,l.shell.dataset.incognito=r?"1":"0");let j=l.el.querySelector(".win-title");j&&(j.textContent=o);let ne=l.el.querySelector("[data-browser-incognito]");ne&&(ne.dataset.browserIncognito=r?"1":"0",ne.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",ne.style.background=r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)",ne.style.borderColor=r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)");let ee=l.el.querySelector("[data-native-browser], iframe"),H=l.el.querySelector(".qb-home-overlay"),oe=t==="https://duckduckgo.com/";H&&(H.hidden=!oe);let de=l.el.querySelector(".qb-urlfld");return de&&(de.value=a),ee&&(ee.dataset.homeOverlay=oe?"1":"0",me?(ee.dataset.url=a,(T=(L=window.NativeXR)==null?void 0:L.browserCmd)==null||T.call(L,"browser","go",a)):ee.src=a),Kt(l),(z=(N=ce).invalidate)==null||z.call(N),(G=(W=ce).render)==null||G.call(W,Fe,xe),l}let c=ie("div");c.style.cssText=`display:flex;flex-direction:column;height:100%;background:${r?"#120e1e":"#171a22"};color:#e9edf4`;let u=ie("div");u.style.cssText=`display:flex;align-items:center;gap:4px;padding:3px 6px;background:${r?"#0b0814":"#0e1117"};border-bottom:1px solid rgba(255,255,255,.08)`;let d=ie("button","qb-icn");d.innerHTML=te("back"),d.title="Voltar";let h=ie("button","qb-icn");h.innerHTML=te("enter"),h.style.transform="rotate(180deg)",h.title="Avan\xE7ar";let m=ie("button","qb-icn");m.innerHTML=te("refresh"),m.title="Recarregar";let g=ie("span","qb-mode-badge");g.dataset.browserIncognito=r?"1":"0",g.dataset.qbAct="home",g.title="In\xEDcio do Navegador",g.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",g.style.cssText=`cursor:pointer;font-size:10px;font-weight:800;letter-spacing:.04em;padding:3px 8px;border-radius:999px;white-space:nowrap;color:#f8fafc;background:${r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)"};border:1px solid ${r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)"}`;let y=ie("input","fld qb-urlfld");y.type="text",y.placeholder=r?"Pesquisa privada an\xF4nima ou URL":"Pesquisar ou inserir URL",y.value=a;let f=ie("button","qb-icn");f.innerHTML=te("star"),f.title="Favorito",u.append(d,h,m,g,y,f);let p=ie("div");p.style.cssText="flex:1;min-height:0;position:relative;background:#181a20";let x=t==="https://duckduckgo.com/",v=ie("div","qb-home-overlay",CE());v.hidden=!x;let w=ie(me?"div":"iframe");me?(w.dataset.nativeBrowser="browser",w.style.cssText="width:100%;height:100%;background:#181a20;position:relative;overflow:hidden",w.dataset.url=a,w.dataset.homeOverlay=x?"1":"0",w.appendChild(v),p.appendChild(w)):(w.style.cssText="width:100%;height:100%;border:0;background:#fff",w.referrerPolicy="no-referrer",w.sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation",w.src=a,w.dataset.homeOverlay=x?"1":"0",p.append(w,v));let E=ie("div","qb-dock"),R=document.createElement("button");R.className="dock-av",R.title="Perfil",R.setAttribute("aria-label","Perfil"),R.innerHTML=LE,E.appendChild(R);let M=document.createElement("button");M.className="dock-status",M.title="Status",M.innerHTML=`<span class="dock-time">--:--</span><span class="dock-wifi">${te("wifi")}</span><span class="dock-bat">${PE}</span>`,E.appendChild(M),c.append(u,p,E);function B(){let j=Zi(),ne=E.querySelector(".dock-time");if(ne&&(ne.textContent=j.time==="--:--"?new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):j.time),me&&j.batteryLevel!=null){let ee=E.querySelector(".dock-bat .b-fill");ee&&(ee.setAttribute("width",String(Math.max(2,13*j.batteryLevel))),ee.setAttribute("fill",j.charging?"#8de6c8":j.batteryLevel<.2?"#ff6b6b":"currentColor"))}}B();let _=setInterval(B,2e4);!me&&navigator.getBattery&&navigator.getBattery().then(j=>{function ne(){let ee=E.querySelector(".dock-bat .b-fill");ee&&(ee.setAttribute("width",String(Math.max(2,13*j.level))),ee.setAttribute("fill",j.charging?"#8de6c8":j.level<.2?"#ff6b6b":"currentColor"))}j.addEventListener("levelchange",ne),j.addEventListener("chargingchange",ne),ne()}).catch(()=>{});function b(){let j=E.querySelector(".dock-wifi");j&&(j.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",b),addEventListener("offline",b),b();function I(j){var ee,H,oe,de;let ne=(j||"").trim();ne&&(/^https?:\/\//i.test(ne)||(ne=/\.\w{2,}($|\/)/.test(ne)?"https://"+ne:"https://duckduckgo.com/?q="+encodeURIComponent(ne)),y.value=ne,v.hidden=!0,w.dataset.homeOverlay="0",me?(w.dataset.url=ne,(H=(ee=window.NativeXR)==null?void 0:ee.browserCmd)==null||H.call(ee,"browser","go",ne)):w.src=ne,(de=(oe=ce).invalidate)==null||de.call(oe))}function D(j,ne){var ee,H;me&&((H=(ee=window.NativeXR)==null?void 0:ee.browserCmd)==null||H.call(ee,"browser",j,ne||""))}v.addEventListener("click",j=>{let ne=j.target.closest("[data-qb-url]");if(!ne)return;j.stopPropagation();let ee=ne.dataset.qbUrl||"";if(ee.includes("roblox.com")){Ml();return}if(ee.includes("moonrider.xyz")){Zu();return}I(ee)}),g.onclick=()=>{var j,ne;v.hidden=!v.hidden,w.dataset.homeOverlay=v.hidden?"0":"1",(ne=(j=ce).invalidate)==null||ne.call(j)},y.addEventListener("keydown",j=>{j.key==="Enter"&&(I(y.value),y.blur())}),y.addEventListener("focus",()=>oi(!0,y)),d.onclick=()=>D("back"),h.onclick=()=>D("fwd"),m.onclick=()=>D("reload");let U=Jt({id:"browser",title:o,node:c});return U!=null&&U.el&&(U.el.dataset.browserMode=s,U.el.dataset.incognito=r?"1":"0"),U!=null&&U.shell&&(U.shell.dataset.browserMode=s,U.shell.dataset.incognito=r?"1":"0"),U._cleanupQB=()=>{clearInterval(_),removeEventListener("online",b),removeEventListener("offline",b)},U.obj.position.copy(U.target),U.apply(),Fe.updateMatrixWorld(!0),(Q=(K=ce).invalidate)==null||Q.call(K),(q=(se=ce).render)==null||q.call(se,Fe,xe),U}function yv(n="new-tab"){let e=n==="incognito-tab",t=Yu("browser",e?"Navegador \xB7 Guia An\xF4nima":"Navegador \xB7 Nova Guia",e?"https://duckduckgo.com/?kae=d&kp=-1":"https://duckduckgo.com/",{mode:e?"incognito-tab":"new-tab",incognito:e});return ht(e?"Guia An\xF4nima aberta":"Nova Guia aberta"),t}typeof window<"u"&&(window.nextvrOpenBrowserOption=yv);var LE='<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',PE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';function bn(n,e,t,i){if(n==="browser"||n==="youtube"||n==="netflix"||n==="prime"||n==="tiktok"||n==="twitch"||n==="discord")return Yu(n,e,t);let s=ie("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=ie("div","row browser-bar"),a=ie("input","fld");a.value=t,a.placeholder=O("search");let o=ie("button","go",te("enter"));o.setAttribute("aria-label",O("open")),o.title=O("open");let l=ie("button","go",te("external"));l.setAttribute("aria-label",O("open")),l.title=O("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(a,o,l);let c=ie("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let u=ie("div");u.style.cssText="flex:1;min-height:0;position:relative";let d=ie(me?"div":"iframe");me&&(d.dataset.nativeBrowser=n,d.style.cssText="width:100%;height:100%;background:#fff"),d.setAttribute("referrerpolicy","no-referrer"),d.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),u.appendChild(d),s.append(r,c,u);let h=g=>{let y=(g||"").trim();if(y){if(/^https?:\/\//i.test(y)||(y=/\.\w{2,}($|\/)/.test(y)?"https://"+y:"https://duckduckgo.com/?q="+encodeURIComponent(y)),a.value=y,me){d.dataset.url=y,c.style.display="none";return}d.src=y,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};o.onclick=()=>h(a.value),a.addEventListener("keydown",g=>{g.key==="Enter"&&h(a.value)}),a.addEventListener("focus",()=>oi(!0,a)),l.onclick=()=>ME(a.value),h(t);let m=Jt({id:n,title:e,node:s});return m.shell.classList.add("web-page-window"),m}var Re=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Uu=[];function Of(){let n=ie("div","pad"),e=ie("div");e.innerHTML=`<h2>${O("gallery")}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;let t=ie("div");t.style.marginTop="22px",t.innerHTML=`<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${O("env")}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;let i=ie("div","grid3"),s=()=>{i.innerHTML="";for(let d of Oh()){let h=ie("button","env"+(d.thumb?" env-pano":""));h.style.background=d.thumb?`url('${d.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",h.innerHTML=`<span>${d.name}</span>`,h.setAttribute("aria-pressed",A.env===d.id?"true":"false"),h.onclick=()=>{Gi(d.id),[...i.children].forEach(m=>m.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true"),ht("Ambiente: "+d.name)},i.appendChild(h)}};s(),Ve("env",s),t.appendChild(i);let r=ie("div");r.style.cssText="margin-top:26px;display:flex;align-items:center;gap:10px",r.innerHTML=`<h3 style="font-size:18px;margin:0;font-weight:700">${O("gallery")}</h3>`;let a=ie("button","go",O("pickPhotos")),o=ie("input");o.type="file",o.accept="image/*",o.multiple=!0,o.style.display="none",r.appendChild(a);let l=ie("div","grid4"),c=ie("div");c.style.cssText="margin-top:14px";let u=()=>{if(l.innerHTML="",!Uu.length){l.innerHTML=`<p class="sub" style="grid-column:1/-1">${O("noPhotos")}</p>`;return}Uu.forEach(d=>{let h=ie("button","thumb");h.innerHTML=`<img src="${d}" alt="">`,h.onclick=()=>{c.innerHTML=`<img src="${d}" style="width:100%;border-radius:16px">`},l.appendChild(h)})};return a.onclick=()=>o.click(),o.onchange=()=>{for(let d of o.files)Uu.push(URL.createObjectURL(d));u(),ht(Uu.length+" fotos")},u(),n.append(e,t,r,o,l,c),Jt({id:"gallery",title:O("gallery"),node:n})}function IE(){let n=ie("div","pad");n.innerHTML=`<h2>${O("env")}</h2><p class="sub">Troque sem fechar nada.</p>`;let e=ie("div","grid3");for(let t of Oh()){let i=ie("button","env"+(t.thumb?" env-pano":""));i.style.background=t.thumb?`url('${t.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",i.innerHTML=`<span>${t.name}</span>`,i.setAttribute("aria-pressed",A.env===t.id),i.onclick=()=>{Gi(t.id),[...e.children].forEach(s=>s.setAttribute("aria-pressed","false")),i.setAttribute("aria-pressed","true")},e.appendChild(i)}return n.appendChild(e),Jt({id:"env",title:O("env"),node:n})}function NE(n,e,t){let i=ie("div","opt");return i.append(ie("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function ln(n,e,t,i){let s=ie("div","yt-row"),r=ie("span","yt-ic");r.innerHTML=n;let a=ie("div","yt-txt");if(a.innerHTML=`<div class="yt-title">${e}</div>${t?`<div class="yt-sub">${t}</div>`:""}`,s.append(r,a),i){let o=ie("div","yt-ctl");o.appendChild(i),s.appendChild(o)}else{let o=ie("span","yt-ch");o.innerHTML="",s.appendChild(o)}return s}function so(n,e){let t=ie("button","yt-sw");t.type="button",t.setAttribute("role","switch");let i=()=>{t.dataset.on=A[n]?"1":"0",t.setAttribute("aria-checked",A[n]?"true":"false")};return i(),t.onclick=()=>{A[n]=A[n]?0:1,qe(),i(),e&&e(A[n])},t}function ro(n){let e=ie("div","yt-sec");return e.textContent=n,e}function Zr(n,e,t,i){let s=ie("input","yt-range");return s.type="range",s.min=e,s.max=t,s.step=i,s.value=A[n],s.oninput=()=>{A[n]=+s.value,qe()},s}function vv(n){n.innerHTML="";let e=Ty(),t=n,i=ie("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${O(ul()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=ie("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!ul()){let o=ie("button","go",O("xrInstall"));o.onclick=()=>{Lp()},s.append(o)}let r=ie("button","go",O("xrSelfTest"));r.onclick=()=>Pp(),s.append(r);let a=ie("div","seg");for(let[o,l,c]of[["controllers",O("xrModeControllers"),O("xrModeControllersSub")],["hands",O("xrModeHands"),O("xrModeHandsSub")]]){let u=ie("button",null,l);u.title=c,u.setAttribute("aria-pressed",String(Ly()===o)),u.onclick=()=>{Dy(o),[...a.children].forEach(d=>d.setAttribute("aria-pressed","false")),u.setAttribute("aria-pressed","true")},a.appendChild(u)}t.append(NE(O("xrHandMode"),O("xrHandModeSub"),a),s),t.append(ie("p","note",O("xrHandModeNote"))),!ul()&&!e.runtimeBundled&&t.append(ie("p","note",O("xrBundlingNote")))}function ju(){var B,_;let n=ie("div","quick-center"),e=ie("section","quick-panel"),t=ie("aside","quick-side"),i=ie("div","quick-status"),s=()=>{var I,D;try{let U=(D=(I=window.NativeXR)==null?void 0:I.battery)==null?void 0:D.call(I);if(U){let L=JSON.parse(U);if(L&&typeof L.level=="number")return L}}catch{}let b=Zi();return b&&typeof b.batteryLevel=="number"?{level:b.batteryLevel,charging:!!b.charging}:null},r=s(),a=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});i.innerHTML=`<div><strong>Controles r\xE1pidos</strong><span>${a}</span></div><div class="quick-battery">${te("battery")}<b data-cc-battery>${r?Math.round(r.level*100):"\u2014"}%</b></div>`,Ve("device-status",()=>{let b=i.querySelector("[data-cc-battery]");if(!b)return;let I=s();b.textContent=`${I?Math.round(I.level*100):"\u2014"}%`});let l=ie("button","quick-gear",te("settings"));l.type="button",l.title="Todas as configura\xE7\xF5es",l.setAttribute("aria-label","Todas as configura\xE7\xF5es"),l.onclick=()=>qu(),i.appendChild(l);let c=ie("div","quick-tiles"),u=(b,I,D,U,L=!1)=>{let T=ie("button",`quick-tile${L?" is-disabled":""}`);return T.type="button",T.innerHTML=`<span class="quick-tile-icon">${te(b)}</span><span><b>${I}</b><small>${D}</small></span>`,T.disabled=L,U&&(T.onclick=U),c.appendChild(T),T};u("wifi","Wi-Fi","Abrir conex\xF5es",()=>{var b;return(b=window.NativeXR)!=null&&b.systemPanel?window.NativeXR.systemPanel("internet"):ht("Conex\xF5es dispon\xEDveis no Android")}),u("bluetooth","Bluetooth","Dispositivos",()=>{var b;return(b=window.NativeXR)!=null&&b.systemPanel?window.NativeXR.systemPanel("bluetooth"):ht("Bluetooth dispon\xEDvel no Android")}),u("android","Apps Android","Abrir janela Shizuku",()=>Xu()),u("lock","Limite","Movimento protegido",null,!0),e.append(i,c);let d=ie("div","quick-section");d.innerHTML='<div class="quick-section-title"><b>Controles r\xE1pidos</b><span>Toque para ativar ou ajustar</span></div>';let h=ie("div","quick-controls"),m=A.env==="night"?"passthrough":A.env,g=!1,y=null,f=null,p=b=>{var I;g=!!b,(I=window.NativeXR)!=null&&I.audioEnabled&&window.NativeXR.audioEnabled(!g);for(let D of[y,f])D&&(D.classList.toggle("is-active",g),D.setAttribute("aria-pressed",String(g)));y&&(y.querySelector("small").textContent=g?"\xC1udio silenciado":"Som ativado")},x=(b,I,D,U,L=!1)=>{let T=ie("button",`quick-control${L?" is-active":""}`);return T.type="button",T.setAttribute("aria-pressed",String(L)),T.innerHTML=`<span>${te(b)}</span><b>${I}</b><small>${D}</small>`,T.onclick=()=>{let N=U(T);T.classList.toggle("is-active",!!N),T.setAttribute("aria-pressed",String(!!N))},h.appendChild(T),T};x("camera","Vis\xE3o do ambiente",A.env==="passthrough"?"C\xE2mera ativa":"C\xE2mera desligada",b=>{let I=A.env!=="passthrough";return vi(I),b.querySelector("small").textContent=I?"C\xE2mera ativa":"C\xE2mera desligada",I},A.env==="passthrough"),y=x("volumeoff","N\xE3o perturbe","Silenciar \xE1udio do app",()=>(p(!g),g)),x("crosshair","Recentralizar","Ajustar a vis\xE3o",()=>(Wi(),ht("Vis\xE3o recentralizada"),!1)),x("moon","Modo noturno",A.env==="night"?"Ativado":"Desativado",b=>{let I=A.env!=="night";return I?(m=A.env,Gi("night")):Gi(m==="night"?"passthrough":m),b.querySelector("small").textContent=I?"Ativado":"Desativado",I},A.env==="night"),x("settings","Mais configura\xE7\xF5es","Imagem, janelas e idioma",()=>(qu(),!1)),x("android","Apps do Android","Abrir launcher Shizuku",()=>(Xu(),!1)),x("appGrid","Spatial App",A.spatialLauncher?"Ativado (Sem Dock)":"Desativado (Dock normal)",b=>{let I=!A.spatialLauncher;return Hf(I),b.querySelector("small").textContent=I?"Ativado (Sem Dock)":"Desativado (Dock normal)",I},!!A.spatialLauncher),x("vision","C\xE2mera Grande Ocular",A.wideCamera?"Ativada":"Normal",b=>{var I,D;return A.wideCamera=A.wideCamera?0:1,qe(A),(D=(I=window.NativeXR)==null?void 0:I.wideCamera)==null||D.call(I,!!A.wideCamera),b.querySelector("small").textContent=A.wideCamera?"Ativada":"Normal",!!A.wideCamera},!!A.wideCamera),x("move",O("dockSnapSlot"),A.dockSnapSlot!==0?O("on"):O("off"),b=>(A.dockSnapSlot=A.dockSnapSlot===0?1:0,qe(A),b.querySelector("small").textContent=A.dockSnapSlot!==0?O("on"):O("off"),A.dockSnapSlot!==0),A.dockSnapSlot!==0),x("crosshair",O("fingerTouch"),A.fingerTouch!==0?O("on"):O("off"),b=>{var I,D;return A.fingerTouch=A.fingerTouch===0?1:0,qe(A),(D=(I=window.NativeXR)==null?void 0:I.setFingerTouch)==null||D.call(I,A.fingerTouch!==0),Ee("fingerTouch",A.fingerTouch!==0),b.querySelector("small").textContent=A.fingerTouch!==0?O("on"):O("off"),A.fingerTouch!==0},A.fingerTouch!==0),x("crosshair","Gesto de Arminha (Dock)",A.gunGesture!==0?"Ativado":"Desativado",b=>(A.gunGesture=A.gunGesture===0?1:0,qe(A),Ee("gunGesture",A.gunGesture!==0),b.querySelector("small").textContent=A.gunGesture!==0?"Ativado":"Desativado",A.gunGesture!==0),A.gunGesture!==0),x("move","Modo 3DoF / 6DoF",A.sixdof!==0?"6DoF Ativado":"3DoF Ativado",b=>{var I,D;return A.sixdof=A.sixdof===0?1:0,qe(A),A.sixdof||Wt.reset(),(D=(I=window.NativeXR)==null?void 0:I.setSixDofEnabled)==null||D.call(I,A.sixdof!==0),Ee("sixdof",A.sixdof!==0),b.querySelector("small").textContent=A.sixdof!==0?"6DoF Ativado":"3DoF Ativado",A.sixdof!==0},A.sixdof!==0),d.appendChild(h),e.append(d);let v=ie("div","quick-side-title","Ajustes"),w=ie("span","quick-side-icon",te("volume")),E=ie("input","quick-vertical");E.type="range",E.min="0",E.max="100",E.value=(B=window.NativeXR)!=null&&B.volume?window.NativeXR.volume():65,E.setAttribute("aria-label","Volume"),E.title=`Volume ${E.value}%`,E.oninput=()=>{var b,I;(I=(b=window.NativeXR)==null?void 0:b.setVolume)==null||I.call(b,+E.value),E.title=`Volume ${E.value}%`},f=ie("button","quick-side-button",te("volumeoff")),f.type="button",f.title="Silenciar \xE1udio",f.setAttribute("aria-label","Silenciar \xE1udio"),f.setAttribute("aria-pressed","false"),f.onclick=()=>p(!g);let R=ie("span","quick-side-icon",te("sun")),M=ie("input","quick-vertical");return M.type="range",M.min="10",M.max="100",M.value=(_=window.NativeXR)!=null&&_.brightness?window.NativeXR.brightness():70,M.setAttribute("aria-label","Brilho"),M.title=`Brilho ${M.value}%`,M.oninput=()=>{var b,I;(I=(b=window.NativeXR)==null?void 0:b.setBrightness)==null||I.call(b,+M.value),M.title=`Brilho ${M.value}%`},t.append(v,w,E,f,R,M),n.append(e,t),Jt({id:"control-center",title:"Configura\xE7\xF5es",node:n,w:980,h:640})}function qu(){let n=ie("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;";let e=ie("div");e.style.cssText="display:flex;align-items:center;gap:6px;padding:8px 8px 4px;";let t=ie("button","yt-back");t.innerHTML=te("back"),t.title="Voltar",t.setAttribute("aria-label","Voltar"),t.onclick=()=>{let p=fe.find(x=>x.id==="settings");p&&Nt(p)};let i=ie("div","yt-head-title");i.textContent=O("settings"),e.append(t,i);let s=ie("div");s.style.cssText="flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;";let r=null,a=()=>{r=Jt({id:"language-pick",title:O("langTitle"),w:320,h:420,node:Mv(A.lang||"pt",p=>{Nr(p),ht(O("langChanged")),Nt(r);let x=fe.find(v=>v.id==="settings");x&&Nt(x),qu()},!0)})};s.append(ro(O("general")));let o=ie("button","yt-link");o.append(ln(te("globe"),O("language"),Yc(A.lang||"pt").label)),o.onclick=a,s.append(o),s.append(ln(te("gauge"),"Contador de FPS","Mostrar taxa de quadros",so("showFps")));let l=ie("div");l.style.cssText="display:inline-flex;gap:6px;align-items:center;";let c=ie("button","entry-seg-btn"+(A.sixdof===0?" on":""),"3DoF");c.dataset.settingsDof="3dof";let u=ie("button","entry-seg-btn"+(A.sixdof!==0?" on":""),"6DoF");u.dataset.settingsDof="6dof";let d=()=>{c.classList.toggle("on",A.sixdof===0),u.classList.toggle("on",A.sixdof!==0)};c.onclick=()=>{var p,x;A.sixdof=0,qe(A),Wt.reset(),(x=(p=window.NativeXR)==null?void 0:p.setSixDofEnabled)==null||x.call(p,!1),Ee("sixdof",!1),d()},u.onclick=()=>{var p,x;A.sixdof=1,qe(A),(x=(p=window.NativeXR)==null?void 0:p.setSixDofEnabled)==null||x.call(p,!0),Ee("sixdof",!0),d()},l.append(c,u),s.append(ln(te("move"),"Modo 3DoF / 6DoF","Alternar entre 3DoF (rota\xE7\xE3o) e 6DoF (andar no espa\xE7o)",l));let h=ie("button","yt-link");h.append(ln(te("image"),"Ambiente","Trocar passthrough / panorama")),h.onclick=()=>{let p=fe.find(x=>x.id==="settings");p&&Nt(p),Of()},s.append(h),s.append(ro(O("hands"))),s.append(ln(te("user"),"Rastreamento","MediaPipe nativo \xB7 c\xE2mera traseira")),s.append(ln(te("edit3"),"Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",so("handDraw"))),s.append(ln(te("crosshair"),O("fingerTouch"),O("fingerTouchDesc"),so("fingerTouch",p=>{var x,v;(v=(x=window.NativeXR)==null?void 0:x.setFingerTouch)==null||v.call(x,!!p),Ee("fingerTouch",!!p)}))),s.append(ln('<img src="./gun-logo.jpg" alt="Arminha" style="width:22px;height:22px;border-radius:50%;object-fit:cover;display:block;border:1px solid rgba(56,189,248,.65)">',"Gesto de Arminha (Ocultar Dock)","Polegar erguido + fechar o indicador oculta/exibe a Dock com bolinha neon",so("gunGesture",p=>Ee("gunGesture",!!p)))),s.append(ln(te("zap"),"Sensibilidade","Pin\xE7a com histerese est\xE1vel")),s.append(ro(O("windows"))),s.append(ln(te("maximize"),"Tamanho","Escala das janelas",Zr("winScale",.6,1.6,.05))),s.append(ln(te("distance"),"Dist\xE2ncia","Dist\xE2ncia do arco",Zr("winDist",me?.6:1.5,me?1.8:3.4,.05))),s.append(ln(te("curve"),O("curve"),"Abertura do arco",Zr("winCurve",0,1,.05))),s.append(ln(te("curve"),O("win360"),O("win360k"),Zr("win360K",.2,1.15,.05))),s.append(ln(te("curve"),O("win360All"),"Novas janelas curvadas",so("win360"))),s.append(ln(te("move"),"Inclina\xE7\xE3o","Ajuste vertical das janelas",Zr("winTilt",0,1.5,.05))),s.append(ro(O("dock"))),s.append(ln(te("appGrid"),"Tamanho da dock",null,Zr("dockSize",.7,1.5,.05))),s.append(ln(te("distance"),"Dist\xE2ncia da dock",null,Zr("dockDist",.7,1.5,.05))),s.append(ln(te("move"),O("dockSnapSlot"),O("dockSnapDesc"),so("dockSnapSlot"))),s.append(ro(O("perf")));let m=ie("div","yt-seg");for(let[p,x]of[["low",O("qualityLow")],["medium",O("qualityMedium")],["high",O("qualityHigh")],["auto",O("qualityAuto")]]){let v=ie("button","yt-seg-btn");v.textContent=x,v.setAttribute("aria-pressed",A.quality===p),v.onclick=()=>{A.quality=p,qe(),Ee("quality"),[...m.children].forEach(w=>w.setAttribute("aria-pressed","false")),v.setAttribute("aria-pressed","true")},m.appendChild(v)}s.append(ln(te("settings"),O("quality"),"1080p \xB7 890p \xB7 390p \xB7 Auto",m)),s.append(ro(O("xrTitle")));let g=ie("button","yt-link");g.append(ln(te("controller"),O("xrTitle"),O("xrSub"))),g.setAttribute("aria-expanded","false");let y=ie("div","card");y.dataset.xrPage="",y.style.margin="0 16px 14px",y.hidden=!0,g.onclick=()=>{y.hidden=!y.hidden,g.setAttribute("aria-expanded",String(!y.hidden)),y.hidden||vv(y)},s.append(g,y);let f=ie("div","yt-foot");return f.textContent="NextVR \xB7 shell XR para Android \xB7 v1.0",s.append(f),n.append(e,s),Jt({id:"settings",title:O("settings"),node:n})}function DE(){let n=fe.find(h=>h.id==="quick-settings");if(n)return Kt(n),Pf(Zi()),n;let e=ie("div","quick-settings");e.innerHTML=`<section class="qs-panel">
    <header class="qs-top">
      <div class="qs-system">
        <span class="qs-battery" data-q-battery>${te("battery")}<span>--%</span></span>
        <span data-q-time>--:--</span><span class="qs-date" data-q-date></span>
      </div>
      <span class="qs-top-spacer"></span>
      <button class="qs-top-action" data-q-settings aria-label="Configura\xE7\xF5es NextVR">${te("settings")}<span>Configura\xE7\xF5es</span></button>
      <button class="qs-repin" data-act="pin" aria-label="Voltar ao arco">${te("crosshair")}</button>
      <button class="qs-close" data-q-close aria-label="Fechar">${te("x")}</button>
    </header>
    <div class="qs-ranges">
      <label class="qs-range" title="Volume de m\xEDdia"><input data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume"><span>${te("volume")}</span></label>
      <label class="qs-range" title="Brilho da tela"><input data-q-range="brightness" type="range" min="0" max="100" value="50" aria-label="Brilho"><span>${te("sun")}</span></label>
    </div>
    <div class="qs-cards">
      <div class="qs-card"><div class="qs-card-line">${te("wifi")}<span class="qs-card-title">Wi-Fi</span></div><span class="qs-card-sub" data-q-network>Verificando conex\xE3o</span></div>
      <div class="qs-card"><div class="qs-card-line">${te("bluetooth")}<span class="qs-card-title">Bluetooth</span></div><span class="qs-card-sub">Gerenciado pelo Android</span></div>
      <div class="qs-card"><div class="qs-card-line">${te("link")}<span class="qs-card-title">Link</span></div><span class="qs-card-sub">N\xE3o conectado</span></div>
      <div class="qs-card"><div class="qs-card-line">${te("boundary")}<span class="qs-card-title">Limite</span></div><span class="qs-card-sub">Desativado</span></div>
    </div>
    <div class="qs-tools">
      <button class="qs-tool" data-q-env>${te("scene")}<span>Vis\xE3o do ambiente</span></button>
      <button class="qs-tool" disabled title="O NextVR n\xE3o usa microfone">${te("mic")}<span>Microfone</span></button>
      <button class="qs-tool" data-q-recenter>${te("move")}<span>Redefinir visualiza\xE7\xE3o</span></button>
      <button class="qs-tool" data-q-night aria-pressed="false">${te("sun")}<span>Modo noturno</span></button>
      <button class="qs-tool" data-q-dnd aria-pressed="false">${te("moon")}<span>N\xE3o perturbe</span></button>
      <button class="qs-tool" disabled title="Espelhamento do sistema n\xE3o dispon\xEDvel nesta tela">${te("cast")}<span>Espelhar</span></button>
      <button class="qs-tool" disabled>${te("bug")}<span>Relatar problema</span></button>
      <button class="qs-tool" disabled>${te("lock")}<span>Modo viagem</span></button>
      <button class="qs-tool" disabled>${te("device")}<span>Remote Desktop</span></button>
    </div>
  </section>
  <aside class="qs-side" aria-label="Controles r\xE1pidos">
    <div class="qs-volume"><span class="qs-more"><i></i><i></i><i></i></span>
      <div class="qs-volume-slider-wrap"><input class="qs-v-range" data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume de m\xEDdia"></div>
      ${te("volume")}
    </div>
    <button class="qs-side-button" data-q-mute aria-pressed="false" aria-label="Silenciar m\xEDdia">${te("volumeoff")}</button>
    <button class="qs-side-button" data-q-night aria-pressed="false" aria-label="Modo noturno">${te("moon")}</button>
  </aside>`;let t=e,i={night:!1,dnd:!1,muted:!1,lastVolume:50};try{i={...i,...JSON.parse(localStorage.getItem("nextvr.quick-settings.v1")||"{}")}}catch{}let s=[...t.querySelectorAll("[data-q-range]")],r=(h,m)=>{var g,y;try{let f=Number((y=(g=window.NativeXR)==null?void 0:g[h])==null?void 0:y.call(g));return Number.isFinite(f)?Math.max(0,Math.min(100,f)):m}catch{return m}},a=me?r("mediaVolumePercent",50):50,o=me?r("brightnessPercent",50):50;a>0&&(i.lastVolume=a);function l(h,m){let g=Math.max(0,Math.min(100,Number(m)||0));for(let y of s.filter(f=>f.dataset.qRange===h))y.value=String(g),y.style.setProperty("--fill",`${g}%`);h==="volume"&&(a=g,g>0?(i.lastVolume=g,i.muted=!1):i.muted=!0)}function c(){try{localStorage.setItem("nextvr.quick-settings.v1",JSON.stringify(i))}catch{}}function u(){t.classList.toggle("night",!!i.night),t.querySelectorAll("[data-q-night]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.night))),t.querySelectorAll("[data-q-dnd]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.dnd))),t.querySelectorAll("[data-q-mute]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.muted)))}l("volume",a),l("brightness",o),u();for(let h of s)h.addEventListener("input",()=>l(h.dataset.qRange,h.value)),h.addEventListener("change",()=>{var m,g,y,f;me&&(h.dataset.qRange==="volume"&&((g=(m=window.NativeXR).setMediaVolumePercent)==null||g.call(m,a)),h.dataset.qRange==="brightness"&&((f=(y=window.NativeXR).setBrightnessPercent)==null||f.call(y,Number(h.value))),u(),c())});t.addEventListener("click",h=>{var g,y;let m=f=>h.target.closest(f);if(m("[data-q-close]")){Nt(fe.find(f=>f.id==="quick-settings"));return}if(m("[data-q-settings]")){qu();return}if(m("[data-q-env]")){IE();return}if(m("[data-q-recenter]")){Wi();return}if(m("[data-q-night]")){i.night=!i.night,u(),c();return}if(m("[data-q-dnd]")){i.dnd=!i.dnd,u(),c();return}m("[data-q-mute]")&&(i.muted=!i.muted,i.muted?(a>0&&(i.lastVolume=a),l("volume",0)):l("volume",i.lastVolume||50),me&&((y=(g=window.NativeXR).setMediaVolumePercent)==null||y.call(g,a)),u(),c())});let d=Jt({id:"quick-settings",title:"Configura\xE7\xF5es",node:e,w:1040,h:660,chrome:!1,resizable:!1});return Pf(Zi()),d}function Pf(n=Zi()){var a;let e=(a=fe.find(o=>o.id==="quick-settings"))==null?void 0:a.el.querySelector(".quick-settings");if(!e)return;let t=e.querySelector("[data-q-battery] span");t&&(t.textContent=n.batteryLevel==null?"--%":`${Math.round(n.batteryLevel*100)}%`);let i=e.querySelector("[data-q-time]");i&&(i.textContent=n.time||"--:--");let s=e.querySelector("[data-q-date]");s&&(s.textContent=n.date||"");let r=e.querySelector("[data-q-network]");r&&(r.textContent=n.online?"Conectado \xE0 internet":"Sem conex\xE3o")}Ve("device-status",Pf);var xv="nextvr.lib.recent.v1",kE=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},Sl=kE(xv),OE=()=>{try{localStorage.setItem(xv,JSON.stringify(Sl))}catch{}},bv=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">N</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X",label:"X",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],If={id:"gorilla-tag",name:"Gorilla Tag",label:"Gorilla Tag",bg:"#0b141a",html:'<img class="lx-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',kind:"app"},is=n=>{let e=fe.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null};function Ml(){var e,t,i,s,r,a,o,l;document.documentElement.dataset.robloxBlackEnv="1",(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,"black"),A.handDraw=1,(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!0),me&&!zh()&&qi();for(let c of fe)c.id!=="roblox"&&c.setHidden(!0);jt(!1),Qt(!0);let n=bn("roblox","Roblox","https://www.roblox.com/");return n&&(n.setHidden(!1),Kt(n)),(a=(r=ce).invalidate)==null||a.call(r),(l=(o=ce).render)==null||l.call(o,Fe,xe),n}Ve("wins",()=>{var n,e,t,i,s,r;if(document.documentElement.dataset.robloxBlackEnv==="1"&&!fe.some(a=>a.id==="roblox")){delete document.documentElement.dataset.robloxBlackEnv,(e=(n=window.NativeXR)==null?void 0:n.env)==null||e.call(n,A.env||"passthrough");for(let a of fe)a.id!=="spatial-launcher"&&a.setHidden(!1);A.spatialLauncher?$u():(Qt(!1),jt(!0)),(i=(t=ce).invalidate)==null||i.call(t),(r=(s=ce).render)==null||r.call(s,Fe,xe)}});function Zu(){var l,c,u,d,h,m,g,y,f,p;let n=fe.find(x=>x.id==="beat-saber");if(n)return n.setHidden(!1),Kt(n),(c=(l=ce).invalidate)==null||c.call(l),(d=(u=ce).render)==null||d.call(u,Fe,xe),n;A.spatialLauncher||(jt(!1),Qt(!0));let e=ie("div","beat-saber-vr-stage");e.dataset.beatSaberVr="1",e.style.cssText="position:relative;width:100%;height:100%;background:radial-gradient(circle at 50% 38%,#141838 0%,#060814 68%,#020308 100%);overflow:hidden;display:flex;flex-direction:column;color:#f8fafc",e.innerHTML=`
    <div class="bs-vr-hud" style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:rgba(6,8,20,.82);border-bottom:1px solid rgba(56,189,248,.28);z-index:3">
      <div style="display:flex;align-items:center;gap:12px">
        <img src="./beat-saber-logo.jpg" alt="Beat Saber" style="width:40px;height:40px;border-radius:10px;object-fit:cover;border:1px solid rgba(255,255,255,.22)">
        <div>
          <div style="display:flex;align-items:center;gap:8px">
            <strong style="font-size:16px;letter-spacing:.04em;color:#fff">BEAT SABER VR</strong>
            <span data-bs-vr-active="1" style="font-size:10px;font-weight:800;padding:2px 8px;border-radius:999px;background:linear-gradient(90deg,#ef4444,#06b6d4);color:#fff">MODO VR ATIVO</span>
          </div>
          <div style="font-size:11px;color:#94a3b8">Sabres Neon Vermelho &amp; Azul sincronizados com Hand Tracking</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:16px">
        <div style="text-align:right">
          <div style="font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em">Combo / Score</div>
          <strong data-bs-score style="font-size:18px;color:#38bdf8;font-variant-numeric:tabular-nums">4x \xB7 1.280</strong>
        </div>
        <button type="button" class="st-btn" data-bs-exit style="background:rgba(239,68,68,.24);border:1px solid rgba(248,113,113,.45);color:#fecaca;padding:7px 14px;border-radius:999px;font-size:12px;font-weight:800">SAIR DO VR</button>
      </div>
    </div>
    <div style="position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden">
      <canvas data-bs-canvas width="960" height="520" style="width:100%;height:100%;display:block"></canvas>
      <iframe src="https://moonrider.xyz/?mode=ride&vr=1" allow="xr-spatial-tracking; fullscreen; autoplay" style="position:absolute;inset:0;width:100%;height:100%;border:0;opacity:.92;pointer-events:auto" title="Beat Saber VR"></iframe>
    </div>
  `;let t=e.querySelector("[data-bs-canvas]"),i=(h=t==null?void 0:t.getContext)==null?void 0:h.call(t,"2d"),s=0,r=performance.now(),a=x=>{if(!i||!document.body.contains(e))return;let v=(x-r)*.001,w=t.width,E=t.height;i.fillStyle="#050712",i.fillRect(0,0,w,E),i.strokeStyle="rgba(56,189,248,0.28)",i.lineWidth=2;for(let I=-3;I<=3;I++)i.beginPath(),i.moveTo(w*.5+I*26,E*.28),i.lineTo(w*.5+I*155,E),i.stroke();let R=v*1.4%1,M=26+R*68,B=w*.5-50-R*120,_=E*.3+R*(E*.52);i.fillStyle="#ff1744",i.strokeStyle="#ff8a80",i.lineWidth=3,i.fillRect(B-M*.5,_-M*.5,M,M),i.strokeRect(B-M*.5,_-M*.5,M,M);let b=w*.5+50+R*120;i.fillStyle="#00e5ff",i.strokeStyle="#84ffff",i.fillRect(b-M*.5,_-M*.5,M,M),i.strokeRect(b-M*.5,_-M*.5,M,M),s=requestAnimationFrame(a)};s=requestAnimationFrame(a);let o=Jt({id:"beat-saber",title:"Beat Saber VR",node:e,w:1020,h:640});return o!=null&&o.shell&&(o.shell.dataset.beatSaberVr="1"),o!=null&&o.el&&(o.el.dataset.beatSaberVr="1"),(m=e.querySelector("[data-bs-exit]"))==null||m.addEventListener("click",()=>{cancelAnimationFrame(s),Nt(o),A.spatialLauncher||(Qt(!1),jt(!0))}),Kt(o),(y=(g=ce).invalidate)==null||y.call(g),(p=(f=ce).render)==null||p.call(f,Fe,xe),o}typeof window<"u"&&(window.nextvrOpenRobloxVr=Ml,window.nextvrOpenBeatSaberVr=Zu);var Uf={youtube:()=>bn("youtube","YouTube","https://m.youtube.com/"),browser:()=>bn("browser",O("browser"),"https://duckduckgo.com/"),store:()=>Ff(),gallery:()=>Of(),settings:()=>ju(),discord:()=>bn("discord","Discord","https://discord.com/app"),netflix:()=>bn("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>bn("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>bn("twitch","Twitch","https://www.twitch.tv/"),prime:()=>bn("prime","prime video","https://www.primevideo.com/"),whatsapp:()=>bn("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>bn("instagram","Instagram","https://www.instagram.com/"),x:()=>bn("x","X","https://x.com/"),facebook:()=>bn("facebook","Facebook","https://www.facebook.com/"),telegram:()=>bn("telegram","Telegram","https://web.telegram.org/"),spotify:()=>bn("spotify","Spotify","https://open.spotify.com/"),"gorilla-tag":()=>io(),"beat-vr":()=>Zu(),"roblox-vr":()=>Ml(),roblox:()=>Ml(),"hyper-vr":()=>Yu("browser","Hyper Dash VR","https://immersiveweb.dev/")},_l="apps",Fu="home",wl=null,UE=[["apps","Apps"],["horizon","Horizon+"]],FE=[{id:"gorilla-tag",name:"Gorilla Tag",cat:"games",rating:"4.9",reviews:"28 mil",tag:"VR \xB7 Hand Tracking",badge:"DESTAQUE",img:"./icons/gorilla-tag-logo.jpg",bg:"linear-gradient(135deg,#431407,#ea580c)"},{id:"beat-vr",name:"Beat Saber",cat:"games",rating:"4.9",reviews:"45 mil",tag:"Modo VR Imediato",badge:"VR",img:"./beat-saber-logo.jpg",bg:"linear-gradient(135deg,#450a0a,#0284c7)"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"games",rating:"4.8",reviews:"9,4 mil",tag:"A\xE7\xE3o \xB7 Arena VR",badge:"VR",img:"./hyper-dash-logo.jpg",bg:"linear-gradient(135deg,#082f49,#0284c7)"},{id:"roblox-vr",name:"Roblox",cat:"games",rating:"4.8",reviews:"64 mil",tag:"Ambiente Preto \xB7 Hand Tracking",badge:"NOVO",img:"./roblox-logo.jpg",bg:"linear-gradient(135deg,#090d16,#1e293b)"},{id:"tiktok",name:"TikTok",cat:"apps",rating:"4.9",reviews:"52 mil",tag:"V\xEDdeos \xB7 Social",badge:"APP",img:"./tiktok-logo.jpg",bg:"linear-gradient(135deg,#09090b,#18181b)"},{id:"youtube",name:"YouTube VR",cat:"apps",rating:"4.8",reviews:"31 mil",tag:"V\xEDdeo 360\xB0 \xB7 4K",badge:"APP",img:"./icons/youtube.svg",bg:"linear-gradient(135deg,#450a0a,#dc2626)",isSvg:!0},{id:"discord",name:"Discord",cat:"apps",rating:"4.7",reviews:"19 mil",tag:"Comunidade \xB7 Voz",badge:"APP",img:"./icons/discord.svg",bg:"linear-gradient(135deg,#312e81,#4f46e5)",isSvg:!0},{id:"netflix",name:"Netflix",cat:"apps",rating:"4.8",reviews:"22 mil",tag:"Cinema VR",badge:"APP",img:"",bg:"linear-gradient(135deg,#450a0a,#991b1b)",textLogo:"N"}];function BE(){let n=ie("div","st st-quest-store"),e=UE.map(([s,r])=>`<button class="st-tab" data-tab="${s}" aria-selected="${_l===s}" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden">${r}</button>`).join(""),t=[["home","P\xE1gina inicial"],["games","Jogos"],["apps","Apps"],["wishlist","Lista de desejos"]].map(([s,r])=>`<button type="button" class="st-quest-pill ${Fu===s&&_l!=="horizon"?"on":""}" data-qtab="${s}">${r}</button>`).join(""),i=`
    <div class="st-top st-quest-top">
      ${e}
      <div class="st-quest-nav-left">
        <button type="button" class="st-quest-search-btn" data-openlib title="Pesquisar na Loja">${te("search")}</button>
        <div class="st-quest-pills">${t}</div>
      </div>
      <div class="st-quest-nav-right">
        <button type="button" class="st-quest-icon-btn" data-openlib title="Biblioteca">${te("store")}</button>
        <button type="button" class="st-ava" data-ava aria-label="Perfil"><img src="./icons/nextvr-chrome-n.png" alt="Perfil" style="width:100%;height:100%;border-radius:50%;object-fit:cover"></button>
        <button type="button" class="st-x" data-x aria-label="Fechar">${te("x")}</button>
      </div>
    </div>`;if(_l==="horizon")i+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else{let s=!!A.gorillaInstalled,r=wl!==null?`<span class="st-quest-card-btn" style="background:rgba(251,146,60,.24);color:#fdba74">Baixando... ${wl}%</span>`:s?`<div style="display:flex;gap:6px;align-items:center">
             <span data-gorilla-installed="1" style="font-size:10px;font-weight:800;color:#4ade80;padding:3px 8px;border-radius:999px;background:rgba(34,197,94,.16);border:1px solid rgba(74,222,128,.35)">\u2713 Instalado</span>
             <button class="st-btn st-quest-card-btn" data-launch-gorilla style="background:#2563eb;color:#fff">ABRIR</button>
           </div>`:'<button class="st-btn st-quest-card-btn" data-install-gorilla style="background:#2563eb;color:#fff">BAIXAR</button>',o=FE.filter(l=>Fu==="games"?l.cat==="games":Fu==="apps"?l.cat==="apps":!0).map(l=>{let c=l.id==="gorilla-tag",u=l.textLogo?`<span style="font-size:38px;font-weight:900;color:#ef4444;letter-spacing:-.04em">${l.textLogo}</span>`:l.isSvg?`<img src="${l.img}" alt="${l.name}" style="width:48px;height:48px;object-fit:contain">`:`<img class="${c?"st-gorilla-logo":""}" src="${l.img}" alt="${l.name}" style="width:100%;height:100%;object-fit:cover;display:block">`,d=c?r:`<button type="button" class="st-btn st-quest-card-btn" data-store-launch="${l.id}" style="background:rgba(255,255,255,.12);color:#f8fafc">Abrir</button>`;return`
        <article class="st-quest-card ${c?"st-gorilla-card":""}" ${c?"data-store-gorilla":""} data-store-card="${l.id}">
          <div class="st-quest-card-art" style="background:${l.bg}" ${c?"":`data-store-launch="${l.id}"`}>
            ${u}
            <span class="st-quest-card-badge">${l.badge}</span>
          </div>
          <div class="st-quest-card-body">
            <div class="st-quest-card-title">${l.name}</div>
            <div class="st-quest-card-meta">
              <span class="st-quest-rating">${l.rating} \u2605 (${l.reviews})</span>
              <span class="st-quest-tag">${l.tag}</span>
            </div>
            <div class="st-quest-card-foot">
              <span class="st-quest-free">Gr\xE1tis</span>
              ${d}
            </div>
          </div>
        </article>`}).join("");i+=`
      <div class="st-quest-hero">
        <div class="st-quest-hero-copy">
          <span class="st-quest-hero-kicker">META QUEST \xB7 NEXTVR STORE</span>
          <h2 class="st-quest-hero-title">JOGOS E APPS EM DESTAQUE</h2>
          <p class="st-quest-hero-sub">Gorilla Tag (${es.model}), Beat Saber em modo VR imediato, Hyper Dash VR, Roblox com ambiente escuro e TikTok.</p>
          <div class="st-quest-hero-actions">
            <button type="button" class="st-btn st-quest-hero-cta" data-store-launch="beat-vr">Jogar Beat Saber VR</button>
            <button type="button" class="st-btn st-quest-hero-sec" data-openlib>Abrir Biblioteca</button>
          </div>
        </div>
        <div class="st-quest-hero-collage">
          <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="st-quest-hero-tile" data-launch-gorilla>
          <img src="./beat-saber-logo.jpg" alt="Beat Saber" class="st-quest-hero-tile" data-store-launch="beat-vr">
          <img src="./hyper-dash-logo.jpg" alt="Hyper Dash VR" class="st-quest-hero-tile" data-store-launch="hyper-vr">
          <img src="./roblox-logo.jpg" alt="Roblox" class="st-quest-hero-tile" data-store-launch="roblox-vr">
          <img src="./tiktok-logo.jpg" alt="TikTok" class="st-quest-hero-tile" data-store-launch="tiktok">
        </div>
      </div>

      <div class="st-quest-section-head">
        <h3 class="st-quest-section-title">Navegar por tudo</h3>
        <span class="st-quest-sort-pill">Ordenar por: Mais populares \u2304</span>
      </div>

      <div class="st-quest-grid">
        ${o}
      </div>
      <p class="st-note" style="font-size:11px;opacity:.75;margin:8px 0 0">Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>`}return n.innerHTML=i,n.addEventListener("click",s=>{let r=o=>s.target.closest(o),a;if(a=r("[data-tab]")){_l=a.dataset.tab,ns();return}if(a=r("[data-qtab]")){_l="apps",Fu=a.dataset.qtab,ns();return}if(r("[data-x]")){let o=fe.find(l=>l.id==="store");o&&Nt(o);return}if(r("[data-ava]")){ht("Perfil NextVR");return}if(r("[data-openlib]")){Bf();return}if(r("[data-install-gorilla]")){A.gorillaInstalled=1,qe(),Jr("gorilla-tag",!0),Jn(),wl=35,ns(),setTimeout(()=>{wl=80,ns()},120),setTimeout(()=>{wl=null,ns(),Jn(),ht("Gorilla Tag baixado! Adicionado \xE0 Biblioteca de Apps.")},260);return}if(r("[data-launch-gorilla]")){Jr("gorilla-tag"),io();return}if(a=r("[data-store-launch]")){let o=a.dataset.storeLaunch;Jr(o,!0);let l=Uf[o];l&&l();return}}),n}function ns(){var t,i,s;let n=is("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(BE()),n.querySelector(".st").scrollTop=e,(s=(i=ce).invalidate)==null||s.call(i)}function Ff(){var i,s,r,a;let n=fe.find(o=>o.id==="store");if(n)return ns(),Kt(n),(s=(i=ce).render)==null||s.call(i,Fe,xe),n;let e=ie("div");e.style.cssText="height:100%";let t=Jt({id:"store",title:"Store",node:e});return ns(),(a=(r=ce).render)==null||a.call(r,Fe,xe),t}var Gu="recent",ki="all",Nf="",Tf=["all","apps","games","recent"],zE=n=>({all:O("libAll"),apps:O("apps"),games:O("libGames"),recent:O("recents")})[n]||O("libAll");function Jr(n,e){Sl=[n,...Sl.filter(t=>t!==n)].slice(0,40),OE(),e||Jn()}function HE(){var s;!Ry().length&&((s=window.NativeXR)!=null&&s.xrLibrary)&&Iy();let e=[...Ip(),...bv.map(r=>({...r,kind:"app"})),...A.gorillaInstalled?[If]:[]];ki==="games"&&(e=e.filter(r=>r.kind==="xr")),ki==="games"&&A.gorillaInstalled&&(e=[...e,If]),ki==="apps"&&(e=e.filter(r=>r.kind==="app")),ki==="recent"&&(e=e.filter(r=>Sl.includes(r.id)));let t=Nf.trim().toLowerCase();if(t&&(e=e.filter(r=>(r.name+" "+(r.label||"")).toLowerCase().includes(t))),Gu==="az")return[...e].sort((r,a)=>r.name.localeCompare(a.name,"pt-BR"));let i=r=>{let a=Sl.indexOf(r.id);return a<0?1e6:a};return[...e].sort((r,a)=>i(r)-i(a))}function VE(n){let e=n.imgUrl?`<img class="logo" src="${n.imgUrl}" alt="" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">`:n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${te(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug&&!n.imgUrl?`${e}<span class="nm fb">${n.label||n.name}</span>`:t,s=n.id==="gorilla-tag"||n.imgUrl?' style="width:100%;height:100%;display:block"':"";return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand"${s}>${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function GE(){var l;let n=HE(),e=ie("div","lib"),t=zE(ki),i=fe.find(c=>c.id==="library"),s=ki==="games"?O("libGamesEmpty"):ki==="recent"?O("libRecentEmpty"):O("appNoResults"),r=(c,u,d)=>`<button class="lib-rail-btn" data-lib-nav="${c}"
    aria-label="${Re(u)}" title="${Re(u)}" aria-pressed="${ki===c}">${te(d)}</button>`;e.innerHTML=`<aside class="lib-rail" aria-label="${Re(O("apps"))}">
      ${r("all",O("libAll"),"appGrid")}
      ${r("games",O("libGames"),"controller")}
      ${r("recent",O("recents"),"timer")}
      <span class="lib-rail-spacer"></span>
      ${r("apps",O("apps"),"phone")}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${Re(O("apps"))}</h2>
        <div class="lib-searchbox">${te("search")}
          <input class="lib-search open" data-q aria-label="${Re(O("searchApps"))}"
            placeholder="${Re(O("searchApps"))}" value="${Re(Nf)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${Re(O("recents"))}">
          <span>${Gu==="az"?"A\u2013Z":Re(O("recents"))}</span>${te("chevronDown")}
        </button>
        <button class="lib-pill" data-filter aria-label="${Re(O("libFilter"))}">
          <span>${Re(O("libFilter"))} \xB7 ${Re(t)} <i>(${n.length})</i></span>${te("chevronDown")}
        </button>
        <button class="lib-curve" data-lib-curve aria-label="${Re(O("win360"))}"
          title="${Re(O("win360"))}" aria-pressed="${!!(i!=null&&i.curve)}">360\xB0</button>
        <button class="lib-close" data-lib-close aria-label="${Re(O("close"))}" title="${Re(O("close"))}">${te("x")}</button>
        <button class="lib-repin" data-act="pin" aria-label="${Re(O("repin"))}" title="${Re(O("repin"))}">${te("crosshair")}</button>
      </div>
      <div class="lib-scroll">
        <div class="lib-grid">
          ${n.map(c=>c.kind==="xr"?ky(c):c.kind==="android"?Mp(c.app):VE(c)).join("")}
          ${n.length?"":`<div class="lib-empty">${Re(s)}</div>`}
        </div>
      </div>
    </section>`;let a=Oy();a&&((l=e.querySelector(".lib-scroll"))==null||l.prepend(a));let o=e.querySelector('[data-q]:not([data-q="android"])');return o&&(o.addEventListener("input",()=>{var u;Nf=o.value,Jn(!0);let c=(u=is("library"))==null?void 0:u.querySelector("[data-q]");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),o.addEventListener("focus",()=>oi(!0,o))),e.addEventListener("click",c=>{let u=h=>c.target.closest(h),d;if(u("[data-lib-close]")){Nt(fe.find(h=>h.id==="library"));return}if(d=u("[data-lib-nav]")){ki=d.dataset.libNav,Jn();return}if(u("[data-lib-curve]")){let h=fe.find(m=>m.id==="library");h&&(h.setCurve(h.curve>0?0:A.win360K),Jn());return}if(u("[data-sort]")){Gu=Gu==="az"?"recent":"az",Jn();return}if(u("[data-filter]")){ki=Tf[(Tf.indexOf(ki)+1)%Tf.length],Jn();return}if(d=u("[data-android]")){let h=d.dataset.android;xu(h),_u(h);return}if(d=u("[data-xr]")){let h=d.dataset.xr;Cy()?Ny():Rp(h);return}if(d=u("[data-app]")){let h=[...bv,If].find(g=>g.id===d.dataset.app);if(!h)return;Jr(h.id);let m=Uf[h.id];m?m():ht(h.name+": sem endere\xE7o cadastrado");return}}),e}function Jn(n){var i,s,r;let e=is("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(GE()),e.querySelector(".lib-scroll").scrollTop=t,(r=(s=ce).invalidate)==null||r.call(s)}var Bu="Todos",Rf="",WE=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function qE(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function Df(n){var u;Sp(!1);let e=((u=n.querySelector(".android-app-scroll"))==null?void 0:u.scrollTop)||0;n.innerHTML="",n.classList.add("android-launcher");let t=ie("div","android-launcher-head");t.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${te("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${te("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${te("refresh")}</button></div>`,t.querySelector(".android-search input").value=Rf;let i=wy(),s=ie("div","android-categories"),r=WE.map(d=>`<button class="android-category" data-category="${d}" aria-pressed="${Bu===d}">${d}</button>`).join("");s.innerHTML=r;let a=ie("div","android-results");a.innerHTML='<b>APPS INSTALADOS</b><span class="android-results-count"></span>';let o=ie("div","android-app-scroll"),l=ie("div","android-app-grid"),c=()=>{let d=Rf.trim().toLocaleLowerCase("pt-BR"),h=My().filter(g=>{let y=Bu==="Todos"||qE(g)===Bu,f=!d||`${g.label||""} ${g.pkg||""}`.toLocaleLowerCase("pt-BR").includes(d);return y&&f}),m=a.querySelector(".android-results-count");m&&(m.textContent=`${h.length} ${h.length===1?"app":"apps"}`),l.innerHTML=h.length?h.map(g=>Mp(g)).join(""):`<div class="android-empty">${O("noAndroidApps")}</div>`};c(),o.appendChild(l),n.append(t),i&&n.appendChild(i),n.append(s,a,o),o.scrollTop=e,n.oninput=d=>{d.target.matches(".android-search input")&&(Rf=d.target.value,c())},n.onclick=d=>{let h=d.target.closest("[data-category]");if(h){Bu=h.dataset.category,s.querySelectorAll("[data-category]").forEach(g=>g.setAttribute("aria-pressed",String(g===h))),c();return}if(d.target.closest(".android-refresh")){Sp(!0),c();return}let m=d.target.closest("[data-android]");m&&(xu(m.dataset.android),_u(m.dataset.android))}}function Xu(){let n=is("shizuku");if(n)return Df(n),Kt(fe.find(t=>t.id==="shizuku"));let e=ie("div","android-launcher");return Df(e),Jt({id:"shizuku",title:"Apps do Android",node:e})}function Bf(){var i,s,r,a;let n=fe.find(o=>o.id==="library");if(n)return Jn(),Kt(n),(s=(i=ce).render)==null||s.call(i,Fe,xe),n;let e=ie("div");e.style.cssText="height:100%";let t=Jt({id:"library",title:O("apps"),node:e,w:1040,h:660,chrome:!1,resizable:!1});return Jn(),(a=(r=ce).render)==null||a.call(r,Fe,xe),t}var XE=[{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#818cf8,#6366f1)",icon:"compass"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",icon:"settings"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#1db954,#0b3b1e)",slug:"spotify"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#a855f7,#581c87)",slug:"twitch"},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#ffffff,#e2e8f0)",slug:"youtube",lightBg:!0},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b82f6,#1d4ed8)",slug:"facebook"},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",slug:"telegram"},{id:"x",name:"X",bg:"linear-gradient(145deg,#18181b,#050507)",slug:"x"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#6366f1,#4338ca)",slug:"discord"},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#22c55e,#15803d)",slug:"whatsapp"},{id:"shizuku",name:"My apps",bg:"linear-gradient(145deg,#f97316,#ea580c)",icon:"appGrid"}],$E=[{id:"gorilla-tag",name:"Gorilla Tag",bg:"#0d1b12",imgUrl:"./icons/gorilla-tag-logo.jpg",isGame:!0},{id:"roblox-vr",name:"Roblox VR",bg:"#090d16",imgUrl:"./roblox-logo.jpg",icon:"controller",isGame:!0,url:"https://www.roblox.com/"},{id:"beat-vr",name:"Beat Saber Web",bg:"#070814",imgUrl:"./beat-saber-logo.jpg",icon:"controller",isGame:!0,url:"https://moonrider.xyz/?mode=ride&vr=1"},{id:"hyper-vr",name:"Hyper Dash VR",bg:"#0a1426",imgUrl:"./hyper-dash-logo.jpg",icon:"controller",isGame:!0,url:"https://immersiveweb.dev/"},{id:"webxr-games",name:"WebXR Games",bg:"linear-gradient(145deg,#7c3aed,#4c1d95)",icon:"controller",isGame:!0,url:"https://constructarcade.com/"},{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#e50914,#7f1d1d)",slug:"netflix"},{id:"prime",name:"Prime Video",bg:"linear-gradient(145deg,#00a8e1,#0369a1)",slug:"prime"}],Di="all",Wu="recent",kf="",Cf=!1,dv='<svg class="ui-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',YE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M5 19h14"/></svg>',jE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="4 5 20 5 14 12 14 19 10 17 10 12 4 5"/></svg>',ZE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M4 12h7M4 17h4M17 7v11m0 0-3-3m3 3 3-3"/></svg>',KE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 14.5c0-3 2-5.5 4.2-5.5 1.8 0 3.3 1.8 4.8 4.2 1.5 2.4 2.6 3.3 4 3.3 1.4 0 2.5-1.2 2.5-3 0-2.5-1.6-4.5-3.6-4.5-1.5 0-2.7 1.1-4.2 3.4-1.5 2.3-2.9 4.1-4.8 4.1-1.7 0-2.9-.8-2.9-2z"/></svg>',JE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1.5"/><rect x="10" y="5" width="5" height="14" rx="1.5"/><rect x="17" y="5" width="4" height="14" rx="1.2"/></svg>';function QE(){var r;let n=XE.map(a=>({kind:"builtin",...a})),e=$E.map(a=>({kind:"builtin",...a})),t=(((r=Ip)==null?void 0:r())||[]).map(a=>({kind:"xr",pkg:a.packageName,name:a.label||a.packageName,iconUrl:a.icon||"",isGame:!0})),i;Di==="worlds"||Di==="downloads"?i=[...e.filter(a=>a.isGame),...t,...n]:Di==="apps"?i=[...n,...e.filter(a=>!a.isGame)]:i=[...n,...e,...t];let s=kf.trim().toLowerCase();return s&&(i=i.filter(a=>a.name.toLowerCase().includes(s))),Wu==="az"&&(i=[...i].sort((a,o)=>a.name.localeCompare(o.name,"pt-BR"))),i}function eT(n){if(n.kind==="xr"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Re(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-glyph">${te("controller")}</span><span class="spatial-app-init">${Re(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-xr="${Re(n.pkg)}" data-spatial-game="1" title="${Re(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--game">${i}</span>
      <span class="spatial-app-label">${Re(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}if(n.kind==="android"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Re(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-init">${Re(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-android="${Re(n.pkg)}" title="${Re(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--android">${i}</span>
      <span class="spatial-app-label">${Re(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}let e=n.imgUrl?`<img class="spatial-app-img" src="${Re(n.imgUrl)}" alt="" draggable="false">`:n.slug?`<img class="spatial-app-svg" src="./icons/${n.slug}.svg" alt="" draggable="false" onerror="this.remove()">`:n.icon?`<span class="spatial-app-glyph">${te(n.icon)}</span>`:n.html||`<span class="spatial-app-init">${Re(n.name.slice(0,2))}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-builtin="${Re(n.id)}" ${n.isGame?'data-spatial-game="1"':""} ${n.url?`data-spatial-url="${Re(n.url)}"`:""} title="${Re(n.name)}">
    <span class="spatial-app-circle ${n.lightBg?"spatial-app-circle--light":""}" style="background:${n.bg}">${e}</span>
    <span class="spatial-app-label">${Re(n.name)}</span>
    <i class="spatial-app-tick" aria-hidden="true"></i>
  </button>`}function tT(){let n=QE(),e=Zi(),t=Math.round(Math.max(0,Math.min(1,e.batteryLevel??.9))*100),i=e.time&&e.time!=="--:--"?e.time:"9:48",s=A.profileAvatar?`<img src="${Re(A.profileAvatar)}" alt="" class="spatial-hz-avatar-img" draggable="false" />`:te("user"),r=ie("div","spatial-launcher-root");r.innerHTML=`
    <header class="spatial-hz-header">
      <h2 class="spatial-hz-title">Library</h2>
      <label class="spatial-hz-search">
        ${te("search")}
        <input type="text" class="spatial-hz-search-input" data-spatial-search placeholder="Search" value="${Re(kf)}" aria-label="Search Library" />
      </label>
    </header>

    <div class="spatial-launcher-stage">
      <aside class="spatial-hz-rail" aria-label="Library navigation">
        <button type="button" class="spatial-hz-nav-item ${Di==="all"?"on":""}" data-spatial-nav="all">
          ${dv}<span>All</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Di==="apps"?"on":""}" data-spatial-nav="apps">
          ${te("appGrid")}<span>Apps</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Di==="worlds"?"on":""}" data-spatial-nav="worlds">
          ${te("location")}<span>Worlds</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Di==="horizon"?"on":""}" data-spatial-nav="horizon">
          ${te("refresh")}<span>Horizon+</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Di==="downloads"?"on":""}" data-spatial-nav="downloads">
          ${YE}<span>Downloads</span>
        </button>
        <div class="spatial-hz-rail-divider" aria-hidden="true"></div>
        <button type="button" class="spatial-hz-nav-item spatial-hz-nav-item--store" data-spatial-act="store">
          <span class="spatial-hz-store-badge">${te("store")}</span><span>Store</span>
        </button>
      </aside>

      <div class="spatial-honeycomb-wrap">
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--left" data-spatial-scroll="left" aria-label="Rolar para a esquerda" title="Rolar para a esquerda">\u2039</button>
        <div class="spatial-honeycomb" data-spatial-scroll-track role="list">
          ${n.map(eT).join("")}
        </div>
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--right" data-spatial-scroll="right" aria-label="Rolar para a direita" title="Rolar para a direita">\u203A</button>
      </div>

      <aside class="spatial-hz-filters" aria-label="Filters and sorting">
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="filter" title="Filter: Installed">
          ${jE}<span>Filter: Insta...</span>${te("chevronDown")}
        </button>
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="sort" title="Sort">
          ${ZE}<span>Sort: ${Wu==="az"?"A\u2013Z":"Recen..."}</span>${te("chevronDown")}
        </button>
      </aside>
    </div>

    <footer class="spatial-hz-bottom" aria-label="Horizon bar">
      <div class="spatial-hz-bot-left">
        <button type="button" class="spatial-hz-game-pill" data-spatial-act="store" title="Store">${te("controller")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="env" title="C\xE2mera Traseira (Ambiente Real)">${te("camera")}</button>
      </div>

      <div class="spatial-hz-bot-center">
        <div class="spatial-hz-bot-main">
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="recenter" title="Recentralizar">${KE}</button>
          <button type="button" class="spatial-hz-home-circle" data-spatial-nav="all" title="Library">${dv}</button>
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="close" title="Alternar para Dock">${JE}</button>
        </div>
        <div class="spatial-hz-bot-status">
          ${te("wifi")}
          <span data-spatial-clock>${Re(i)}</span>
          <span class="spatial-hz-bat-pill"><i style="width:${t}%"></i></span>
          <span data-spatial-bat>${t}%</span>
        </div>
      </div>

      <div class="spatial-hz-bot-right">
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="library" title="Biblioteca Completa">${te("notification")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="settings" title="Configura\xE7\xF5es">${te("sliders")}</button>
        <button type="button" class="spatial-hz-avatar-btn" data-spatial-act="settings" title="Perfil">${s}</button>
      </div>
    </footer>

    <div class="browser-tab-popup spatial-browser-popup" data-browser-tab-menu="spatial" hidden>
      <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
      <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
    </div>
  `;let a=r.querySelector("[data-spatial-search]");a&&a.addEventListener("input",()=>{kf=a.value,Kr()});let o=r.querySelector('[data-spatial-builtin="browser"]'),l=r.querySelector('[data-browser-tab-menu="spatial"]'),c=null;if(o&&l){o.addEventListener("pointerdown",()=>{clearTimeout(c),c=setTimeout(()=>{var h,m,g,y,f,p;o.dataset.holdConsumed="1",l.hidden=!1,(m=(h=window.NativeXR)==null?void 0:h.click)==null||m.call(h),(y=(g=ce).invalidate)==null||y.call(g),(p=(f=ce).render)==null||p.call(f,Fe,xe)},2e3)});let d=()=>{clearTimeout(c),c=null};o.addEventListener("pointerup",d),o.addEventListener("pointercancel",d),o.addEventListener("pointerleave",d)}let u=r.querySelector("[data-spatial-scroll-track]");if(u){let d=0,h=0,m=!1;u.addEventListener("pointerdown",g=>{d=g.clientX,h=u.scrollLeft,m=!1}),u.addEventListener("pointermove",g=>{var f,p;if(g.buttons!==1)return;let y=g.clientX-d;Math.abs(y)>6&&(m=!0,u.scrollLeft=h-y,(p=(f=ce).invalidate)==null||p.call(f))}),u.addEventListener("wheel",g=>{var y,f;Math.abs(g.deltaY)>Math.abs(g.deltaX)&&(u.scrollLeft+=g.deltaY,g.preventDefault()),(f=(y=ce).invalidate)==null||f.call(y)},{passive:!1}),u.addEventListener("scroll",()=>{var g,y;return(y=(g=ce).invalidate)==null?void 0:y.call(g)},{passive:!0}),u._wasDragging=()=>m}return r.addEventListener("click",d=>{var v,w,E,R,M;let h=d.target.closest("[data-spatial-scroll]");if(h&&u){d.stopPropagation();let B=h.dataset.spatialScroll==="left"?-1:1;u.scrollLeft=Math.max(0,u.scrollLeft+B*240),(w=(v=ce).invalidate)==null||w.call(v),(R=(E=ce).render)==null||R.call(E,Fe,xe);return}let m=d.target.closest("[data-browser-opt]");if(m){d.stopPropagation();let B=m.dataset.browserOpt||"new-tab";l&&(l.hidden=!0),yv(B);return}let g=d.target.closest("[data-spatial-xr]");if(g){let B=g.dataset.spatialXr;B&&Rp(B);return}let y=d.target.closest("[data-spatial-builtin]");if(y){if(y.dataset.holdConsumed==="1"){y.dataset.holdConsumed="0";return}l&&!l.hidden&&(l.hidden=!0);let B=y.dataset.spatialBuiltin;if(B==="shizuku"){Xu();return}if(B==="gorilla-tag"){io();return}if(B==="beat-vr"){Zu();return}if(B==="roblox-vr"||B==="roblox"){Ml();return}if(y.dataset.spatialUrl){Yu("browser",y.title||"Navegador",y.dataset.spatialUrl);return}let _=Uf[B];_&&_();return}let f=d.target.closest("[data-spatial-android]");if(f){let B=f.dataset.spatialAndroid;xu(B),_u(B);return}let p=d.target.closest("[data-spatial-nav]");if(p){Di=p.dataset.spatialNav||"all",Kr();return}let x=(M=d.target.closest("[data-spatial-act]"))==null?void 0:M.dataset.spatialAct;x==="settings"?ju():x==="store"?Ff():x==="library"?Bf():x==="recenter"?Wi():x==="sort"?(Wu=Wu==="az"?"recent":"az",Kr()):x==="filter"?(Di=Di==="downloads"?"all":"downloads",Kr()):x==="env"?(A.env="passthrough",qe(A),vi(!0)):x==="close"&&Hf(!1)}),r}function Kr(){var a,o,l,c,u,d;let n=is("spatial-launcher");if(!n)return;let e=n.querySelector(".spatial-honeycomb"),t=(e==null?void 0:e.scrollTop)||0,i=(e==null?void 0:e.scrollLeft)||0,s=((o=(a=n.querySelector(".finger-hover"))==null?void 0:a.dataset)==null?void 0:o.spatialBuiltin)||null;n.innerHTML="",n.appendChild(tT());let r=n.querySelector(".spatial-honeycomb");r&&(r.scrollTop=t,r.scrollLeft=i),s&&((c=(l=n.querySelector(`[data-spatial-builtin="${s}"]`))==null?void 0:l.classList)==null||c.add("finger-hover")),(d=(u=ce).invalidate)==null||d.call(u)}function $u(){var e,t,i,s;if(Cf)return;let n=fe.find(r=>r.id==="spatial-launcher");if(!(!A.spatialLauncher||!n)){Cf=!0;try{let r=fe.filter(o=>o.id!=="spatial-launcher"&&!o.onboarding&&!o.hidden);if(r.length>1){let o=r[r.length-1];for(let l of r)l!==o&&Nt(l)}let a=r.length>0;n.hidden!==a&&(n.setHidden(a),(t=(e=ce).invalidate)==null||t.call(e),(s=(i=ce).render)==null||s.call(i,Fe,xe))}finally{Cf=!1}}}Ve("wins",$u);function zf(){var i,s,r,a,o,l,c,u;A.env="passthrough",vi(!0);let n=fe.find(d=>d.id==="spatial-launcher");if(n)return Kr(),$u(),(s=(i=ce).invalidate)==null||s.call(i),(a=(r=ce).render)==null||a.call(r,Fe,xe),n;let e=ie("div","spatial-launcher-host"),t=Jt({id:"spatial-launcher",title:"Spatial App",node:e,w:1040,h:660,onboarding:!0,chrome:!1,resizable:!1});return t.handle.hidden=!0,t.resizeHandle.hidden=!0,Kr(),$u(),(l=(o=ce).invalidate)==null||l.call(o),(u=(c=ce).render)==null||u.call(c,Fe,xe),t}function Hf(n){var e,t,i,s;if(A.spatialLauncher=n?1:0,A.spatialLauncher&&(A.env="passthrough",vi(!0)),qe(A),A.spatialLauncher){for(let r of[...fe])r.id!=="spatial-launcher"&&!r.onboarding&&Nt(r);Qt(!0),jt(!1),zf()}else{let r=fe.find(a=>a.id==="spatial-launcher");r&&Nt(r),Qt(!1),!Qr&&!ts&&!Is&&jt(!0),(t=(e=ce).invalidate)==null||t.call(e),(s=(i=ce).render)==null||s.call(i,Fe,xe)}}Ve("spatialLauncher",n=>Hf(n));Ve("device-status",n=>{let e=is("spatial-launcher");if(!e)return;let t=e.querySelector("[data-spatial-clock]");t&&(n!=null&&n.time)&&n.time!=="--:--"&&(t.textContent=n.time);let i=e.querySelector("[data-spatial-bat]"),s=e.querySelector(".spatial-hz-bat-pill i");if(typeof(n==null?void 0:n.batteryLevel)=="number"){let r=Math.round(Math.max(0,Math.min(1,n.batteryLevel))*100);i&&(i.textContent=`${r}%`),s&&(s.style.width=`${r}%`)}});var hr=Object.freeze({compass:te("compass"),store:te("store"),people:te("people"),camera:te("camera"),gear:te("settings"),play:te("play"),shizuku:te("shizuku"),vision:te("vision")});function nT(){vi(A.env!=="passthrough")}function _v(){let n=gu("virtual-environment");if(!n)return;let e=A.env!=="passthrough";n.setAttribute("aria-pressed",String(e)),n.title=`${O("envVirtual")} \xB7 ${e?O("on"):O("off")}`}function Ku(){iy([{kind:"avatar",id:"profile",label:O("profile"),run:oT},{kind:"status",id:"status",label:O("settings"),run:DE},{kind:"tool",id:"virtual-environment",label:O("envVirtual"),svg:hr.vision,run:nT},{kind:"spacer"},{id:"browser",win:"browser",label:O("browser"),svg:hr.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>bn("browser",O("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:O("store"),svg:hr.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:Ff},{id:"discord",win:"discord",label:"Discord",svg:hr.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>bn("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:O("gallery"),svg:hr.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:Of},{id:"settings",win:"control-center",label:O("settings"),svg:hr.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:ju},{id:"youtube",win:"youtube",label:"YouTube",svg:hr.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>bn("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:O("shizuku"),svg:hr.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:Xu},{id:"library",win:"library",launcher:!0,label:O("apps"),run:Bf}]),_v()}Ve("env",_v);Ve("lang",Ku);function iT(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=Sy(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=ie("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}Ay();Fy();Py();Ve("appsState",()=>{iT(),wv()});Ve("xr",()=>{wv();let n=is("settings");n!=null&&n.querySelector("[data-xr-page]")&&vv(n.querySelector("[data-xr-page]"))});var Lf=0;function wv(){Lf||(Lf=setTimeout(()=>{Lf=0,is("library")&&Jn(),is("spatial-launcher")&&Kr();let n=is("shizuku");n&&Df(n)},500))}var sT=document.getElementById("boot"),VR=document.getElementById("bootGo"),Is=null;sT.hidden=!0;function Sv(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function Mv(n,e,t=!1){let i=ie("div",t?"langwin slim":"langwin"),s=a=>Yc(a).label;return(()=>{let a=t?"":`<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
         <p class="lq-tag">Aponte e pin\xE7a<br>para escolher.</p>
       </div>`;i.innerHTML=`${t?`<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${s(n)}</span></div>`:""}
      <div class="lq-main">
        ${a}
        <div class="lang-options" role="list">${zo.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${O("langSoon")}</i>`}</button>`).join("")}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${t?"Escolha o idioma.":"Aponte com a m\xE3o e fa\xE7a uma pin\xE7a."}</span>
        <button class="lq-go">${O("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>e(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function rT(){var e,t;let n=Jt({id:"language",title:"Next VR",w:390,h:500,onboarding:!0,node:Mv(A.lang||Sv(),aT)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}Ve("handframe",n=>{let e=Is==null?void 0:Is.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function aT(n){if(!Is)return;Nr(n),Is&&(Nt(Is),Is=null),jt(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=Dr(),t=A.handsOn?qi():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Wi(),280)}var Qr=null,ts=null,Ju=new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1");function Av(){var e;if(A.gorillaInstalled=1,qe(A),Jr("gorilla-tag",!0),Jn(),ns(),Ju&&me&&typeof((e=window.NativeXR)==null?void 0:e.startVrSession)=="function"){A.autoLaunchGorilla=1,qe(A),Al();return}Al(),io()}Ve("gorilla-installed",()=>{A.gorillaInstalled=1,qe(A),Jr("gorilla-tag",!0),Jn(),ns()});function Ev(){ts&&ts.remove();let n=document.createElement("div");return n.id="entry-fullscreen",n.appendChild(Bp({fullscreen:!0,onStart:Al,onLaunchGorilla:Av,getStatus:Zi})),document.body.appendChild(n),ts=n,n}function Tv(){return Jt({id:"entry-menu",title:"NextVR",w:840,h:525,chrome:!1,resizable:!1,onboarding:!0,node:Bp({fullscreen:!1,onStart:Al,onLaunchGorilla:Av,getStatus:Zi})})}async function Al(n=!1){var r,a,o,l,c,u,d,h,m,g,y,f,p;let e=n===!0;A.lang||Nr(Sv()||"pt");let t=!e&&Ju&&me&&typeof((r=window.NativeXR)==null?void 0:r.startVrSession)=="function";if(ts&&!t&&(ts.remove(),ts=null),Qr?(Nt(Qr),Qr=null):Nt("entry-menu"),A.spatialLauncher?(Qt(!0),jt(!1),zf()):(Nt("spatial-launcher"),Qt(!1),jt(!0)),document.getElementById("stat").hidden=!1,me||(document.getElementById("perm").hidden=!1),(o=(a=window.NativeXR)==null?void 0:a.handVisuals)==null||o.call(a,!!A.handDraw),(c=(l=window.NativeXR)==null?void 0:l.wideCamera)==null||c.call(l,!!A.wideCamera),e||(d=(u=window.NativeXR)==null?void 0:u.startVrSession)==null||d.call(u,JSON.stringify(A)),(m=(h=ce).invalidate)==null||m.call(h),(y=(g=ce).render)==null||y.call(g,Fe,xe),t){(p=(f=ts==null?void 0:ts.querySelector(".entry-menu-root"))==null?void 0:f.resetToHome)==null||p.call(f);return}let i=Dr(),s=A.handsOn?qi():Promise.resolve(!1);await Promise.allSettled([i,s]),me||setTimeout(()=>Wi(),280)}function oT(){var n;return me&&((n=window.NativeXR)!=null&&n.openEntryMenu)?(window.NativeXR.openEntryMenu(),null):(jt(!1),document.getElementById("stat").hidden=!0,Ju||!me?Ev():(Qr=Tv(),Qr))}var hv=!1;window.nextvrEnterWorkspace=n=>{var e,t,i,s,r,a,o,l,c,u;if(n)try{let d=typeof n=="string"?JSON.parse(n):n;d.handDraw!==void 0&&(A.handDraw=d.handDraw?1:0),d.showFps!==void 0&&(A.showFps=d.showFps?1:0),d.mediaVolume!==void 0&&(A.mediaVolume=d.mediaVolume),d.brightness!==void 0&&(A.brightness=d.brightness),d.quality!==void 0&&(A.quality=d.quality,Ee("quality")),d.wideCamera!==void 0&&(A.wideCamera=d.wideCamera?1:0),d.spatialLauncher!==void 0&&(A.spatialLauncher=d.spatialLauncher?1:0),d.dockSnapSlot!==void 0&&(A.dockSnapSlot=d.dockSnapSlot?1:0),d.fingerTouch!==void 0&&(A.fingerTouch=d.fingerTouch?1:0),d.sixdof!==void 0&&(A.sixdof=d.sixdof?1:0,A.sixdof||Wt.reset(),(t=(e=window.NativeXR)==null?void 0:e.setSixDofEnabled)==null||t.call(e,A.sixdof!==0)),d.gorillaInstalled!==void 0&&(A.gorillaInstalled=d.gorillaInstalled?1:0,A.gorillaInstalled&&(Jr("gorilla-tag",!0),Jn(),ns())),d.profileName!==void 0&&(A.profileName=d.profileName),d.profileAvatar!==void 0&&(A.profileAvatar=d.profileAvatar),d.lang&&Nr(d.lang),!A.spatialLauncher&&d.entryEnvChosen&&d.env&&d.env!=="passthrough"?Gi(d.env):(A.env="passthrough",vi(!0));let h=!!d.autoLaunchGorilla;A.autoLaunchGorilla&&(A.autoLaunchGorilla=0),qe(A),Ku(),(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!!A.handDraw),(a=(r=window.NativeXR)==null?void 0:r.wideCamera)==null||a.call(r,!!A.wideCamera),(l=(o=window.NativeXR)==null?void 0:o.setFingerTouch)==null||l.call(o,A.fingerTouch!==0),h&&setTimeout(()=>io(),120)}catch{}else me&&(vi(!0),(u=(c=window.NativeXR)==null?void 0:c.setFingerTouch)==null||u.call(c,A.fingerTouch!==0));Al(!0),hv||(hv=!0,setTimeout(()=>Wi(),220))};Ve("profile-updated",()=>Ku());document.getElementById("btnGyro").onclick=()=>Dr();document.getElementById("btnHand").onclick=()=>zh()?Hh():qi();Ve("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});Ve("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Ku();var pv=new URLSearchParams(location.search).get("onboarding")||(location.hash.includes("onboarding=language")?"language":location.hash.includes("onboarding=skip")?"skip":""),zu,fv,Hu,mv,Vu,gv;Ju?(jt(!1),document.getElementById("stat").hidden=!0,(fv=(zu=window.NativeXR)==null?void 0:zu.handVisuals)==null||fv.call(zu,!!A.handDraw),Ev()):pv==="language"?(jt(!1),document.getElementById("stat").hidden=!0,Is=rT()):pv==="skip"?(A.spatialLauncher?(Qt(!0),jt(!1),zf()):(Qt(!1),jt(!0)),me&&((mv=(Hu=window.NativeXR)==null?void 0:Hu.wideCamera)==null||mv.call(Hu,!!A.wideCamera),Dr(),A.handsOn&&qi()),document.getElementById("perm").hidden=!1,setTimeout(()=>Wi(),280)):(jt(!1),document.getElementById("stat").hidden=!0,me&&((gv=(Vu=window.NativeXR)==null?void 0:Vu.handVisuals)==null||gv.call(Vu,!!A.handDraw),Dr(),A.handsOn&&qi()),Qr=Tv());me&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=ce).invalidate)==null||e.call(n),Dr(),A.handsOn&&qi()},window.nextvrSuspend=()=>{Hh()},Ve("hands",()=>{document.getElementById("perm").hidden=!0}));Ve("game:settings",()=>ju());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

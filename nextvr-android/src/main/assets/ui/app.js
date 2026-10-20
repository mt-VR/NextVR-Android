(()=>{var Sv=0,Op=1,Av=2;var Mg=1,Ev=2,os=3,Fi=0,Gn=1,On=2;var Fs=0,ma=1,Up=2,Fp=3,Bp=4,Tv=5,yr=100,Rv=101,Cv=102,zp=103,Hp=104,Lv=200,Pv=201,Iv=202,Nv=203,Td=204,Rd=205,Dv=206,kv=207,Ov=208,Uv=209,Fv=210,Bv=211,zv=212,Hv=213,Vv=214,Gv=0,Wv=1,qv=2,Jl=3,Xv=4,$v=5,Yv=6,jv=7,ch=0,Zv=1,Kv=2,Bs=0,Jv=1,Qv=2,ex=3,tx=4,nx=5,ix=6,Vp="attached",sx="detached",Sg=300,va=301,xa=302,Cd=303,Ld=304,Tc=306,wr=1e3,ei=1001,po=1002,sn=1003,Ql=1004;var lo=1005;var Qt=1006,uh=1007;var Hs=1008;var zs=1009,rx=1010,ax=1011,dh=1012,Ag=1013,Os=1014,ls=1015,mo=1016,Eg=1017,Tg=1018,xr=1020,ox=1021,ui=1023,lx=1024,cx=1025,br=1026,ba=1027,ux=1028,Rg=1029,dx=1030,Cg=1031,Lg=1033,Yu=33776,ju=33777,Zu=33778,Ku=33779,Gp=35840,Wp=35841,qp=35842,Xp=35843,Pg=36196,$p=37492,Yp=37496,jp=37808,Zp=37809,Kp=37810,Jp=37811,Qp=37812,em=37813,tm=37814,nm=37815,im=37816,sm=37817,rm=37818,am=37819,om=37820,lm=37821,Ju=36492,cm=36494,um=36495,hx=36283,dm=36284,hm=36285,fm=36286;var _a=2300,Mr=2301,Qu=2302,pm=2400,mm=2401,gm=2402,fx=2500;var Ig=0,Rc=1,Ro=2,Ng=3e3,_r=3001,px=3200,mx=3201,hh=0,gx=1,di="",Vt="srgb",rn="srgb-linear",fh="display-p3",Cc="display-p3-linear",ec="linear",Dt="srgb",tc="rec709",nc="p3";var jr=7680;var ym=519,yx=512,vx=513,xx=514,Dg=515,bx=516,_x=517,wx=518,Mx=519,Pd=35044;var vm="300 es",Id=1035,cs=2e3,ic=2001,Vs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xm=1234567,co=Math.PI/180,wa=180/Math.PI;function Ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function Sn(n,e,t){return Math.max(e,Math.min(t,n))}function ph(n,e){return(n%e+e)%e}function Sx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ax(n,e,t){return n!==e?(t-n)/(e-n):0}function uo(n,e,t){return(1-t)*n+t*e}function Ex(n,e,t,i){return uo(n,e,1-Math.exp(-t*i))}function Tx(n,e=1){return e-Math.abs(ph(n,e*2)-e)}function Rx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Px(n,e){return n+Math.random()*(e-n)}function Ix(n){return n*(.5-Math.random())}function Nx(n){n!==void 0&&(xm=n);let e=xm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dx(n){return n*co}function kx(n){return n*wa}function Nd(n){return(n&n-1)===0&&n!==0}function Ox(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ux(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Co={DEG2RAD:co,RAD2DEG:wa,generateUUID:Ei,clamp:Sn,euclideanModulo:ph,mapLinear:Sx,inverseLerp:Ax,lerp:uo,damp:Ex,pingpong:Tx,smoothstep:Rx,smootherstep:Cx,randInt:Lx,randFloat:Px,randFloatSpread:Ix,seededRandom:Nx,degToRad:Dx,radToDeg:kx,isPowerOfTwo:Nd,ceilPowerOfTwo:Ox,floorPowerOfTwo:sc,setQuaternionFromProperEuler:Ux,normalize:_t,denormalize:Ui},Ze=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],x=s[1],v=s[4],w=s[7],T=s[2],R=s[5],C=s[8];return r[0]=a*y+o*x+l*T,r[3]=a*p+o*v+l*R,r[6]=a*m+o*w+l*C,r[1]=c*y+u*x+d*T,r[4]=c*p+u*v+d*R,r[7]=c*m+u*w+d*C,r[2]=h*y+f*x+g*T,r[5]=h*p+f*v+g*R,r[8]=h*m+f*w+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ed.makeScale(e,t)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ed=new st;function kg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fx(){let n=go("canvas");return n.style.display="block",n}var bm={};function ho(n){n in bm||(bm[n]=!0,console.warn(n))}var _m=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wm=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sl={[rn]:{transfer:ec,primaries:tc,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:Dt,primaries:tc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cc]:{transfer:ec,primaries:nc,toReference:n=>n.applyMatrix3(wm),fromReference:n=>n.applyMatrix3(_m)},[fh]:{transfer:Dt,primaries:nc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(wm),fromReference:n=>n.applyMatrix3(_m).convertLinearToSRGB()}},Bx=new Set([rn,Cc]),mt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Bx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Sl[e].toReference,s=Sl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sl[n].primaries},getTransfer:function(n){return n===di?ec:Sl[n].transfer}};function ga(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function td(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Zr,rc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=go("canvas")),Zr.width=e.width,Zr.height=e.height;let i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=go("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ga(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ga(t[i]/255)*255):t[i]=ga(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zx=0,ac=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nd(s[a].image)):r.push(nd(s[a]))}else r=nd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function nd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hx=0,vn=class n extends Vs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ei,s=ei,r=Qt,a=Hs,o=ui,l=zs,c=n.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Ei(),this.name="",this.source=new ac(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_r?Vt:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?_r:Ng}set encoding(e){ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_r?Vt:di}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Sg;vn.DEFAULT_ANISOTROPY=1;var Mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,w=(f+1)/2,T=(m+1)/2,R=(u+h)/4,C=(d+y)/4,B=(g+p)/4;return v>w&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=C/i):w>T?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=R/s,r=B/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=B/r),this.set(i,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-y)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dd=class extends Vs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_r?Vt:di),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ac(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},us=class extends Dd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},oc=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kd=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ot=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==h||c!==f||u!==g){let p=1-o,m=l*h+c*f+u*g+d*y,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let T=Math.sqrt(v),R=Math.atan2(T,m*x);p=Math.sin(p*R)/T,o=Math.sin(o*R)/T}let w=o*x;if(l=l*p+h*w,c=c*p+f*w,u=u*p+g*w,d=d*p+y*w,p===1-o){let T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},id=new D,Mm=new ot,fi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),El.subVectors(this.max,to),Kr.subVectors(e.a,to),Jr.subVectors(e.b,to),Qr.subVectors(e.c,to),Ps.subVectors(Jr,Kr),Is.subVectors(Qr,Jr),hr.subVectors(Kr,Qr);let t=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-hr.z,hr.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,hr.z,0,-hr.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-hr.y,hr.x,0];return!sd(t,Kr,Jr,Qr,El)||(t=[1,0,0,0,1,0,0,0,1],!sd(t,Kr,Jr,Qr,El))?!1:(Tl.crossVectors(Ps,Is),t=[Tl.x,Tl.y,Tl.z],sd(t,Kr,Jr,Qr,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ts=[new D,new D,new D,new D,new D,new D,new D,new D],Mi=new D,Al=new fi,Kr=new D,Jr=new D,Qr=new D,Ps=new D,Is=new D,hr=new D,to=new D,El=new D,Tl=new D,fr=new D;function sd(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){fr.fromArray(n,r);let o=s.x*Math.abs(fr.x)+s.y*Math.abs(fr.y)+s.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),u=i.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Vx=new fi,no=new D,rd=new D,ti=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(rd)),this.expandByPoint(no.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ns=new D,ad=new D,Rl=new D,Ns=new D,od=new D,Cl=new D,ld=new D,Sr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ad.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Ns.copy(this.origin).sub(ad);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Rl),o=Ns.dot(this.direction),l=-Ns.dot(Rl),c=Ns.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ad).addScaledVector(Rl,h),f}intersectSphere(e,t){ns.subVectors(e.center,this.origin);let i=ns.dot(this.direction),s=ns.dot(ns)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,i,s,r){od.subVectors(t,e),Cl.subVectors(i,e),ld.crossVectors(od,Cl);let a=this.direction.dot(ld),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ns.subVectors(this.origin,e);let l=o*this.direction.dot(Cl.crossVectors(Ns,Cl));if(l<0)return null;let c=o*this.direction.dot(od.cross(Ns));if(c<0||l+c>a)return null;let u=-o*Ns.dot(ld);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class n{constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,y,p)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ea.setFromMatrixColumn(e,0).length(),r=1/ea.setFromMatrixColumn(e,1).length(),a=1/ea.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,y=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gx,e,Wx)}lookAt(e,t,i){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ds.crossVectors(i,Kn),Ds.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ds.crossVectors(i,Kn)),Ds.normalize(),Ll.crossVectors(Kn,Ds),s[0]=Ds.x,s[4]=Ll.x,s[8]=Kn.x,s[1]=Ds.y,s[5]=Ll.y,s[9]=Kn.y,s[2]=Ds.z,s[6]=Ll.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],x=i[3],v=i[7],w=i[11],T=i[15],R=s[0],C=s[4],B=s[8],_=s[12],b=s[1],N=s[5],I=s[9],O=s[13],L=s[2],S=s[6],U=s[10],V=s[14],q=s[3],W=s[7],J=s[11],Q=s[15];return r[0]=a*R+o*b+l*L+c*q,r[4]=a*C+o*N+l*S+c*W,r[8]=a*B+o*I+l*U+c*J,r[12]=a*_+o*O+l*V+c*Q,r[1]=u*R+d*b+h*L+f*q,r[5]=u*C+d*N+h*S+f*W,r[9]=u*B+d*I+h*U+f*J,r[13]=u*_+d*O+h*V+f*Q,r[2]=g*R+y*b+p*L+m*q,r[6]=g*C+y*N+p*S+m*W,r[10]=g*B+y*I+p*U+m*J,r[14]=g*_+y*O+p*V+m*Q,r[3]=x*R+v*b+w*L+T*q,r[7]=x*C+v*N+w*S+T*W,r[11]=x*B+v*I+w*U+T*J,r[15]=x*_+v*O+w*V+T*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15];return g*(+r*l*d-s*c*d-r*o*h+i*c*h+s*o*f-i*l*f)+y*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+p*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*u-i*c*u)+m*(-s*o*u-t*l*d+t*o*h+s*a*d-i*a*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],x=d*p*c-y*h*c+y*l*f-o*p*f-d*l*m+o*h*m,v=g*h*c-u*p*c-g*l*f+a*p*f+u*l*m-a*h*m,w=u*y*c-g*d*c+g*o*f-a*y*f-u*o*m+a*d*m,T=g*d*l-u*y*l-g*o*h+a*y*h+u*o*p-a*d*p,R=t*x+i*v+s*w+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=x*C,e[1]=(y*h*r-d*p*r-y*s*f+i*p*f+d*s*m-i*h*m)*C,e[2]=(o*p*r-y*l*r+y*s*c-i*p*c-o*s*m+i*l*m)*C,e[3]=(d*l*r-o*h*r-d*s*c+i*h*c+o*s*f-i*l*f)*C,e[4]=v*C,e[5]=(u*p*r-g*h*r+g*s*f-t*p*f-u*s*m+t*h*m)*C,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*m-t*l*m)*C,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*f+t*l*f)*C,e[8]=w*C,e[9]=(g*d*r-u*y*r-g*i*f+t*y*f+u*i*m-t*d*m)*C,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*m+t*o*m)*C,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*f-t*o*f)*C,e[12]=T*C,e[13]=(u*y*s-g*d*s+g*i*h-t*y*h-u*i*p+t*d*p)*C,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*p-t*o*p)*C,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*h+t*o*h)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,y=a*u,p=a*d,m=o*d,x=l*c,v=l*u,w=l*d,T=i.x,R=i.y,C=i.z;return s[0]=(1-(y+m))*T,s[1]=(f+w)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(f-w)*R,s[5]=(1-(h+m))*R,s[6]=(p+x)*R,s[7]=0,s[8]=(g+v)*C,s[9]=(p-x)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ea.set(s[0],s[1],s[2]).length(),a=ea.set(s[4],s[5],s[6]).length(),o=ea.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Si.copy(this);let c=1/r,u=1/a,d=1/o;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,t.setFromRotationMatrix(Si),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=cs){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s),f,g;if(o===cs)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ic)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=cs){let l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(a-r),h=(t+e)*c,f=(i+s)*u,g,y;if(o===cs)g=(a+r)*d,y=-2*d;else if(o===ic)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ea=new D,Si=new Ae,Gx=new D(0,0,0),Wx=new D(1,1,1),Ds=new D,Ll=new D,Kn=new D,Sm=new Ae,Am=new ot,ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var yo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qx=0,Em=new D,ta=new ot,is=new Ae,Pl=new D,io=new D,Xx=new D,$x=new ot,Tm=new D(1,0,0),Rm=new D(0,1,0),Cm=new D(0,0,1),Yx={type:"added"},jx={type:"removed"},kt=class n extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new ni,i=new ot,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new st}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,t){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pl.copy(e):Pl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(io,Pl,this.up):is.lookAt(Pl,io,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),ta.setFromRotationMatrix(is),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,Xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,$x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};kt.DEFAULT_UP=new D(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=new D,ss=new D,cd=new D,rs=new D,na=new D,ia=new D,Lm=new D,ud=new D,dd=new D,hd=new D,Il=!1,ha=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ai.subVectors(e,t),s.cross(Ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ai.subVectors(s,t),ss.subVectors(i,t),cd.subVectors(e,t);let a=Ai.dot(Ai),o=Ai.dot(ss),l=Ai.dot(cd),c=ss.dot(ss),u=ss.dot(cd),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getUV(e,t,i,s,r,a,o,l){return Il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Il=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(a,rs.y),l.addScaledVector(o,rs.z),l)}static isFrontFacing(e,t,i,s){return Ai.subVectors(i,t),ss.subVectors(e,t),Ai.cross(ss).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Ai.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Il=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;na.subVectors(s,i),ia.subVectors(r,i),ud.subVectors(e,i);let l=na.dot(ud),c=ia.dot(ud);if(l<=0&&c<=0)return t.copy(i);dd.subVectors(e,s);let u=na.dot(dd),d=ia.dot(dd);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(na,a);hd.subVectors(e,r);let f=na.dot(hd),g=ia.dot(hd);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ia,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Lm.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Lm,o);let m=1/(p+y+h);return a=y*m,o=h*m,t.copy(i).addScaledVector(na,a).addScaledVector(ia,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function fd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=ph(e,1),t=Sn(t,0,1),i=Sn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=fd(a,r,e+1/3),this.g=fd(a,r,e),this.b=fd(a,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=Og[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=td(e.r),this.g=td(e.g),this.b=td(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return mt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Sn(Mn.r*255,0,255))*65536+Math.round(Sn(Mn.g*255,0,255))*256+Math.round(Sn(Mn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Vt){mt.fromWorkingColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ks),this.setHSL(ks.h+e,ks.s+t,ks.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ks),e.getHSL(Nl);let i=uo(ks.h,Nl.h,t),s=uo(ks.s,Nl.s,t),r=uo(ks.l,Nl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Ne;Ne.NAMES=Og;var Zx=0,Wn=class extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=ma,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Rd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ma&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},en=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new D,Dl=new Ze,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ls,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pd&&(e.usage=this.usage),e}};var lc=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var cc=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var hi=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Kx=0,ci=new Ae,pd=new kt,sa=new D,Jn=new fi,so=new fi,fn=new D,qn=class n extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kg(e)?cc:lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new hi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];so.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(Jn.min,so.min),Jn.expandByPoint(fn),fn.addVectors(Jn.max,so.max),Jn.expandByPoint(fn)):(Jn.expandByPoint(so.min),Jn.expandByPoint(so.max))}Jn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fn.fromBufferAttribute(o,c),l&&(sa.fromBufferAttribute(e,c),fn.add(sa)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new D,u[b]=new D;let d=new D,h=new D,f=new D,g=new Ze,y=new Ze,p=new Ze,m=new D,x=new D;function v(b,N,I){d.fromArray(s,b*3),h.fromArray(s,N*3),f.fromArray(s,I*3),g.fromArray(a,b*2),y.fromArray(a,N*2),p.fromArray(a,I*2),h.sub(d),f.sub(d),y.sub(g),p.sub(g);let O=1/(y.x*p.y-p.x*y.y);isFinite(O)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(f,-y.y).multiplyScalar(O),x.copy(f).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(O),c[b].add(m),c[N].add(m),c[I].add(m),u[b].add(x),u[N].add(x),u[I].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,N=w.length;b<N;++b){let I=w[b],O=I.start,L=I.count;for(let S=O,U=O+L;S<U;S+=3)v(i[S+0],i[S+1],i[S+2])}let T=new D,R=new D,C=new D,B=new D;function _(b){C.fromArray(r,b*3),B.copy(C);let N=c[b];T.copy(N),T.sub(C.multiplyScalar(C.dot(N))).normalize(),R.crossVectors(B,N);let O=R.dot(u[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=O}for(let b=0,N=w.length;b<N;++b){let I=w[b],O=I.start,L=I.count;for(let S=O,U=O+L;S<U;S+=3)_(i[S+0]),_(i[S+1]),_(i[S+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new It(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pm=new Ae,pr=new Sr,kl=new ti,Im=new D,ra=new D,aa=new D,oa=new D,md=new D,Ol=new D,Ul=new Ze,Fl=new Ze,Bl=new Ze,Nm=new D,Dm=new D,km=new D,zl=new D,Hl=new D,St=class extends kt{constructor(e=new qn,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(md.fromBufferAttribute(d,e),a?Ol.addScaledVector(md,u):Ol.addScaledVector(md.sub(t),u))}t.add(Ol)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(r),pr.copy(e.ray).recast(e.near),!(kl.containsPoint(pr.origin)===!1&&(pr.intersectSphere(kl,Im)===null||pr.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Pm.copy(r).invert(),pr.copy(e.ray).applyMatrix4(Pm),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let w=x,T=v;w<T;w+=3){let R=o.getX(w),C=o.getX(w+1),B=o.getX(w+2);s=Vl(this,m,e,i,c,u,d,R,C,B),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let x=o.getX(p),v=o.getX(p+1),w=o.getX(p+2);s=Vl(this,a,e,i,c,u,d,x,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=x,T=v;w<T;w+=3){let R=w,C=w+1,B=w+2;s=Vl(this,m,e,i,c,u,d,R,C,B),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let x=p,v=p+1,w=p+2;s=Vl(this,a,e,i,c,u,d,x,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Jx(n,e,t,i,s,r,a,o){let l;if(e.side===Gn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Fi,o),l===null)return null;Hl.copy(o),Hl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Hl);return c<t.near||c>t.far?null:{distance:c,point:Hl.clone(),object:n}}function Vl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ra),n.getVertexPosition(l,aa),n.getVertexPosition(c,oa);let u=Jx(n,e,t,i,ra,aa,oa,zl);if(u){s&&(Ul.fromBufferAttribute(s,o),Fl.fromBufferAttribute(s,l),Bl.fromBufferAttribute(s,c),u.uv=ha.getInterpolation(zl,ra,aa,oa,Ul,Fl,Bl,new Ze)),r&&(Ul.fromBufferAttribute(r,o),Fl.fromBufferAttribute(r,l),Bl.fromBufferAttribute(r,c),u.uv1=ha.getInterpolation(zl,ra,aa,oa,Ul,Fl,Bl,new Ze),u.uv2=u.uv1),a&&(Nm.fromBufferAttribute(a,o),Dm.fromBufferAttribute(a,l),km.fromBufferAttribute(a,c),u.normal=ha.getInterpolation(zl,ra,aa,oa,Nm,Dm,km,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};ha.getNormal(ra,aa,oa,d.normal),u.face=d}return u}var Gs=class n extends qn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hi(c,3)),this.setAttribute("normal",new hi(u,3)),this.setAttribute("uv",new hi(d,2));function g(y,p,m,x,v,w,T,R,C,B,_){let b=w/C,N=T/B,I=w/2,O=T/2,L=R/2,S=C+1,U=B+1,V=0,q=0,W=new D;for(let J=0;J<U;J++){let Q=J*N-O;for(let ie=0;ie<S;ie++){let G=ie*b-I;W[y]=G*x,W[p]=Q*v,W[m]=L,c.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[m]=R>0?1:-1,u.push(W.x,W.y,W.z),d.push(ie/C),d.push(1-J/B),V+=1}}for(let J=0;J<B;J++)for(let Q=0;Q<C;Q++){let ie=h+Q+S*J,G=h+Q+S*(J+1),j=h+(Q+1)+S*(J+1),te=h+(Q+1)+S*J;l.push(ie,G,te),l.push(G,j,te),q+=6}o.addGroup(f,q,_),f+=q,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ma(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function kn(n){let e={};for(let t=0;t<n.length;t++){let i=Ma(n[t]);for(let s in i)e[s]=i[s]}return e}function Qx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ug(n){return n.getRenderTarget()===null?n.outputColorSpace:mt.workingColorSpace}var eb={clone:Ma,merge:kn},tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ds=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=Qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},uc=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=cs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends uc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},la=-90,ca=1,Od=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(la,ca,e,t);s.layers=this.layers,this.add(s);let r=new Gt(la,ca,e,t);r.layers=this.layers,this.add(r);let a=new Gt(la,ca,e,t);a.layers=this.layers,this.add(a);let o=new Gt(la,ca,e,t);o.layers=this.layers,this.add(o);let l=new Gt(la,ca,e,t);l.layers=this.layers,this.add(l);let c=new Gt(la,ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===cs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},dc=class extends vn{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:va,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ud=class extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_r?Vt:di),this.texture=new dc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gs(5,5,5),r=new ds({name:"CubemapFromEquirect",uniforms:Ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:Fs});r.uniforms.tEquirect.value=t;let a=new St(s,r),o=t.minFilter;return t.minFilter===Hs&&(t.minFilter=Qt),new Od(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},gd=new D,ib=new D,sb=new st,Qn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=gd.subVectors(i,t).cross(ib.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(gd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sb.getNormalMatrix(e),s=this.coplanarPoint(gd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mr=new ti,Gl=new D,vo=class{constructor(e=new Qn,t=new Qn,i=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cs){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],y=s[10],p=s[11],m=s[12],x=s[13],v=s[14],w=s[15];if(i[0].setComponents(l-r,h-c,p-f,w-m).normalize(),i[1].setComponents(l+r,h+c,p+f,w+m).normalize(),i[2].setComponents(l+a,h+u,p+g,w+x).normalize(),i[3].setComponents(l-a,h-u,p-g,w-x).normalize(),i[4].setComponents(l-o,h-d,p-y,w-v).normalize(),t===cs)i[5].setComponents(l+o,h+d,p+y,w+v).normalize();else if(t===ic)i[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Gl.x=s.normal.x>0?e.max.x:e.min.x,Gl.y=s.normal.y>0?e.max.y:e.min.y,Gl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fg(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function rb(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let d=c.array,h=c.usage,f=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,d){let h=u.array,f=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),f.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let y=0,p=g.length;y<p;y++){let m=g[y];t?n.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}var En=class n extends qn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],y=[],p=[];for(let m=0;m<u;m++){let x=m*h-a;for(let v=0;v<c;v++){let w=v*d-r;g.push(w,-x,0),y.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let v=x+c*m,w=x+c*(m+1),T=x+1+c*(m+1),R=x+1+c*m;f.push(v,w,R),f.push(w,T,R)}this.setIndex(f),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(y,3)),this.setAttribute("uv",new hi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ob=`#ifdef USE_ALPHAHASH
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
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
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
#endif`,fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pb=`#ifdef USE_BATCHING
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
#endif`,mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xb=`#ifdef USE_IRIDESCENCE
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
#endif`,bb=`#ifdef USE_BUMPMAP
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cb=`#define PI 3.141592653589793
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
} // validated`,Lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ub=`
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
}`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$b=`#ifdef USE_GRADIENTMAP
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
}`,Yb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,r_=`struct PhysicalMaterial {
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
}`,a_=`
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g_=`#if defined( USE_POINTS_UV )
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
#endif`,y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
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
#endif`,__=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
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
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`#include <common>
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
}`,hw=`#if DEPTH_PACKING == 3200
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
}`,fw=`#define DISTANCE
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
}`,pw=`#define DISTANCE
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`uniform float scale;
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
}`,vw=`uniform vec3 diffuse;
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
}`,xw=`#include <common>
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
}`,bw=`uniform vec3 diffuse;
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
}`,_w=`#define LAMBERT
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
}`,ww=`#define LAMBERT
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
}`,Mw=`#define MATCAP
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
}`,Sw=`#define MATCAP
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
}`,Aw=`#define NORMAL
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
}`,Ew=`#define NORMAL
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
}`,Tw=`#define PHONG
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
}`,Rw=`#define PHONG
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
}`,Cw=`#define STANDARD
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
}`,Lw=`#define STANDARD
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
}`,Pw=`#define TOON
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
}`,Iw=`#define TOON
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
}`,Nw=`uniform float size;
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
}`,Dw=`uniform vec3 diffuse;
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
}`,kw=`#include <common>
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
}`,Ow=`uniform vec3 color;
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
}`,Uw=`uniform float rotation;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:ab,alphahash_pars_fragment:ob,alphamap_fragment:lb,alphamap_pars_fragment:cb,alphatest_fragment:ub,alphatest_pars_fragment:db,aomap_fragment:hb,aomap_pars_fragment:fb,batching_pars_vertex:pb,batching_vertex:mb,begin_vertex:gb,beginnormal_vertex:yb,bsdfs:vb,iridescence_fragment:xb,bumpmap_pars_fragment:bb,clipping_planes_fragment:_b,clipping_planes_pars_fragment:wb,clipping_planes_pars_vertex:Mb,clipping_planes_vertex:Sb,color_fragment:Ab,color_pars_fragment:Eb,color_pars_vertex:Tb,color_vertex:Rb,common:Cb,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Pb,displacementmap_pars_vertex:Ib,displacementmap_vertex:Nb,emissivemap_fragment:Db,emissivemap_pars_fragment:kb,colorspace_fragment:Ob,colorspace_pars_fragment:Ub,envmap_fragment:Fb,envmap_common_pars_fragment:Bb,envmap_pars_fragment:zb,envmap_pars_vertex:Hb,envmap_physical_pars_fragment:Qb,envmap_vertex:Vb,fog_vertex:Gb,fog_pars_vertex:Wb,fog_fragment:qb,fog_pars_fragment:Xb,gradientmap_pars_fragment:$b,lightmap_fragment:Yb,lightmap_pars_fragment:jb,lights_lambert_fragment:Zb,lights_lambert_pars_fragment:Kb,lights_pars_begin:Jb,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:a_,lights_fragment_maps:o_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:h_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:y_,metalnessmap_pars_fragment:v_,morphcolor_vertex:x_,morphnormal_vertex:b_,morphtarget_pars_vertex:__,morphtarget_vertex:w_,normal_fragment_begin:M_,normal_fragment_maps:S_,normal_pars_fragment:A_,normal_pars_vertex:E_,normal_vertex:T_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:I_,opaque_fragment:N_,packing:D_,premultiplied_alpha_fragment:k_,project_vertex:O_,dithering_fragment:U_,dithering_pars_fragment:F_,roughnessmap_fragment:B_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:V_,shadowmap_vertex:G_,shadowmask_pars_fragment:W_,skinbase_vertex:q_,skinning_pars_vertex:X_,skinning_vertex:$_,skinnormal_vertex:Y_,specularmap_fragment:j_,specularmap_pars_fragment:Z_,tonemapping_fragment:K_,tonemapping_pars_fragment:J_,transmission_fragment:Q_,transmission_pars_fragment:ew,uv_pars_fragment:tw,uv_pars_vertex:nw,uv_vertex:iw,worldpos_vertex:sw,background_vert:rw,background_frag:aw,backgroundCube_vert:ow,backgroundCube_frag:lw,cube_vert:cw,cube_frag:uw,depth_vert:dw,depth_frag:hw,distanceRGBA_vert:fw,distanceRGBA_frag:pw,equirect_vert:mw,equirect_frag:gw,linedashed_vert:yw,linedashed_frag:vw,meshbasic_vert:xw,meshbasic_frag:bw,meshlambert_vert:_w,meshlambert_frag:ww,meshmatcap_vert:Mw,meshmatcap_frag:Sw,meshnormal_vert:Aw,meshnormal_frag:Ew,meshphong_vert:Tw,meshphong_frag:Rw,meshphysical_vert:Cw,meshphysical_frag:Lw,meshtoon_vert:Pw,meshtoon_frag:Iw,points_vert:Nw,points_frag:Dw,shadow_vert:kw,shadow_frag:Ow,sprite_vert:Uw,sprite_frag:Fw},fe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Oi={basic:{uniforms:kn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:kn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:kn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:kn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:kn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:kn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:kn([fe.points,fe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:kn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:kn([fe.common,fe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:kn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:kn([fe.sprite,fe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:kn([fe.common,fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:kn([fe.lights,fe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Oi.physical={uniforms:kn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Wl={r:0,b:0,g:0};function Bw(n,e,t,i,s,r,a){let o=new Ne(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(p,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),x=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Tc)?(u===void 0&&(u=new St(new Gs(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:Ma(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=mt.getTransfer(v.colorSpace)!==Dt,(d!==v||h!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new En(2,2),new ds({name:"BackgroundMaterial",uniforms:Ma(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=mt.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,m){p.getRGB(Wl,Ug(n)),i.buffers.color.setClear(Wl.r,Wl.g,Wl.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:g}}function zw(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,u=!1;function d(L,S,U,V,q){let W=!1;if(a){let J=y(V,U,S);c!==J&&(c=J,f(c.object)),W=m(L,V,U,q),W&&x(L,V,U,q)}else{let J=S.wireframe===!0;(c.geometry!==V.id||c.program!==U.id||c.wireframe!==J)&&(c.geometry=V.id,c.program=U.id,c.wireframe=J,W=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,B(L,S,U,V),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,S,U){let V=U.wireframe===!0,q=o[L.id];q===void 0&&(q={},o[L.id]=q);let W=q[S.id];W===void 0&&(W={},q[S.id]=W);let J=W[V];return J===void 0&&(J=p(h()),W[V]=J),J}function p(L){let S=[],U=[],V=[];for(let q=0;q<s;q++)S[q]=0,U[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:U,attributeDivisors:V,object:L,attributes:{},index:null}}function m(L,S,U,V){let q=c.attributes,W=S.attributes,J=0,Q=U.getAttributes();for(let ie in Q)if(Q[ie].location>=0){let j=q[ie],te=W[ie];if(te===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),j===void 0||j.attribute!==te||te&&j.data!==te.data)return!0;J++}return c.attributesNum!==J||c.index!==V}function x(L,S,U,V){let q={},W=S.attributes,J=0,Q=U.getAttributes();for(let ie in Q)if(Q[ie].location>=0){let j=W[ie];j===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let te={};te.attribute=j,j&&j.data&&(te.data=j.data),q[ie]=te,J++}c.attributes=q,c.attributesNum=J,c.index=V}function v(){let L=c.newAttributes;for(let S=0,U=L.length;S<U;S++)L[S]=0}function w(L){T(L,0)}function T(L,S){let U=c.newAttributes,V=c.enabledAttributes,q=c.attributeDivisors;U[L]=1,V[L]===0&&(n.enableVertexAttribArray(L),V[L]=1),q[L]!==S&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,S),q[L]=S)}function R(){let L=c.newAttributes,S=c.enabledAttributes;for(let U=0,V=S.length;U<V;U++)S[U]!==L[U]&&(n.disableVertexAttribArray(U),S[U]=0)}function C(L,S,U,V,q,W,J){J===!0?n.vertexAttribIPointer(L,S,U,q,W):n.vertexAttribPointer(L,S,U,V,q,W)}function B(L,S,U,V){if(i.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let q=V.attributes,W=U.getAttributes(),J=S.defaultAttributeValues;for(let Q in W){let ie=W[Q];if(ie.location>=0){let G=q[Q];if(G===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let j=G.normalized,te=G.itemSize,ne=t.get(G);if(ne===void 0)continue;let H=ne.buffer,oe=ne.type,de=ne.bytesPerElement,be=i.isWebGL2===!0&&(oe===n.INT||oe===n.UNSIGNED_INT||G.gpuType===Ag);if(G.isInterleavedBufferAttribute){let qe=G.data,X=qe.stride,Kt=G.offset;if(qe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<ie.locationSize;Pe++)T(ie.location+Pe,qe.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Pe=0;Pe<ie.locationSize;Pe++)w(ie.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Pe=0;Pe<ie.locationSize;Pe++)C(ie.location+Pe,te/ie.locationSize,oe,j,X*de,(Kt+te/ie.locationSize*Pe)*de,be)}else{if(G.isInstancedBufferAttribute){for(let qe=0;qe<ie.locationSize;qe++)T(ie.location+qe,G.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let qe=0;qe<ie.locationSize;qe++)w(ie.location+qe);n.bindBuffer(n.ARRAY_BUFFER,H);for(let qe=0;qe<ie.locationSize;qe++)C(ie.location+qe,te/ie.locationSize,oe,j,te*de,te/ie.locationSize*qe*de,be)}}else if(J!==void 0){let j=J[Q];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ie.location,j);break;case 3:n.vertexAttrib3fv(ie.location,j);break;case 4:n.vertexAttrib4fv(ie.location,j);break;default:n.vertexAttrib1fv(ie.location,j)}}}}R()}function _(){I();for(let L in o){let S=o[L];for(let U in S){let V=S[U];for(let q in V)g(V[q].object),delete V[q];delete S[U]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;let S=o[L.id];for(let U in S){let V=S[U];for(let q in V)g(V[q].object),delete V[q];delete S[U]}delete o[L.id]}function N(L){for(let S in o){let U=o[S];if(U[L.id]===void 0)continue;let V=U[L.id];for(let q in V)g(V[q].object),delete V[q];delete U[L.id]}}function I(){O(),u=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:O,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:w,disableUnusedAttributes:R}}function Hw(n,e,t,i){let s=i.isWebGL2,r;function a(u){r=u}function o(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Vw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,w=a||e.has("OES_texture_float"),T=v&&w,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:R}}function Gw(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Qn,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let x=r?0:i,v=x*4,w=m.clippingState||null;l.value=w,w=u(g,h,v,f);for(let T=0;T!==v;++T)w[T]=t[T];m.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,w=f;v!==y;++v,w+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Ww(n){let e=new WeakMap;function t(a,o){return o===Cd?a.mapping=va:o===Ld&&(a.mapping=xa),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Cd||o===Ld)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ud(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Sa=class extends uc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fa=4,Om=[.125,.215,.35,.446,.526,.582],vr=20,yd=new Sa,Um=new Ne,vd=null,xd=0,bd=0,gr=(1+Math.sqrt(5))/2,ua=1/gr,Fm=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,gr,ua),new D(0,gr,-ua),new D(ua,0,gr),new D(-ua,0,gr),new D(gr,ua,0),new D(-gr,ua,0)],hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){vd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,xd,bd),e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===va||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:mo,format:ui,colorSpace:rn,depthBuffer:!1},s=Bm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(r)),this._blurMaterial=Xw(r,e,t)}return s}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,yd)}_sceneToCubeUV(e,t,i,s){let o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Um),u.toneMapping=Bs,u.autoClear=!1;let f=new en({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new St(new Gs,f),y=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,y=!0):(f.color.copy(Um),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;ql(s,x*v,m>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===va||e.mapping===xa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ql(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fm[(s-1)%Fm.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new St(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vr-1),y=r/g,p=isFinite(r)?1+Math.floor(u*y):vr;p>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vr}`);let m=[],x=0;for(let C=0;C<vr;++C){let B=C/y,_=Math.exp(-B*B/2);m.push(_),C===0?x+=_:C<p&&(x+=2*_)}for(let C=0;C<m.length;C++)m[C]=m[C]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let w=this._sizeLods[s],T=3*w*(s>v-fa?s-v+fa:0),R=4*(this._cubeSize-w);ql(t,T,R,3*w,2*w),l.setRenderTarget(t),l.render(d,yd)}};function qw(n){let e=[],t=[],i=[],s=n,r=n-fa+1+Om.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-fa?l=Om[a-n+fa-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,y=3,p=2,m=1,x=new Float32Array(y*g*f),v=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let R=0;R<f;R++){let C=R%3*2/3-1,B=R>2?0:-1,_=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];x.set(_,y*g*R),v.set(h,p*g*R);let b=[R,R,R,R,R,R];w.set(b,m*g*R)}let T=new qn;T.setAttribute("position",new It(x,y)),T.setAttribute("uv",new It(v,p)),T.setAttribute("faceIndex",new It(w,m)),e.push(T),s>fa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bm(n,e,t){let i=new us(n,e,t);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ql(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Xw(n,e,t){let i=new Float32Array(vr),s=new D(0,1,0);return new ds({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function zm(){return new ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function Hm(){return new ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function $w(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Cd||l===Ld,u=l===va||l===xa;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new hc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new hc(n));let h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Yw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jw(n,e,t,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)e.remove(y[p])}h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let p=0,m=y.length;p<m;p++)e.update(y[p],n.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let v=0,w=x.length;v<w;v+=3){let T=x[v+0],R=x[v+1],C=x[v+2];h.push(T,R,R,C,C,T)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,w=x.length/3-1;v<w;v+=3){let T=v+0,R=v+1,C=v+2;h.push(T,R,R,C,C,T)}}else return;let p=new(kg(h)?cc:lc)(h,1);p.version=y;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Zw(n,e,t,i){let s=i.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,g){n.drawElements(r,g,o,f*l),t.update(g,r,1)}function d(f,g,y){if(y===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,o,f*l,y),t.update(g,r,y)}function h(f,g,y){if(y===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<y;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,o,f,0,y);let m=0;for(let x=0;x<y;x++)m+=g[x];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function Kw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Jw(n,e){return n[0]-e[0]}function Qw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function eM(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new Mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,y=r.get(u);if(y===void 0||y.count!==g){let L=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[],B=0;x===!0&&(B=1),v===!0&&(B=2),w===!0&&(B=3);let _=u.attributes.position.count*B,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let N=new Float32Array(_*b*4*g),I=new oc(N,_,b,g);I.type=ls,I.needsUpdate=!0;let O=B*4;for(let S=0;S<g;S++){let U=T[S],V=R[S],q=C[S],W=_*b*4*S;for(let J=0;J<U.count;J++){let Q=J*O;x===!0&&(a.fromBufferAttribute(U,J),N[W+Q+0]=a.x,N[W+Q+1]=a.y,N[W+Q+2]=a.z,N[W+Q+3]=0),v===!0&&(a.fromBufferAttribute(V,J),N[W+Q+4]=a.x,N[W+Q+5]=a.y,N[W+Q+6]=a.z,N[W+Q+7]=0),w===!0&&(a.fromBufferAttribute(q,J),N[W+Q+8]=a.x,N[W+Q+9]=a.y,N[W+Q+10]=a.z,N[W+Q+11]=q.itemSize===4?a.w:1)}}y={count:g,texture:I,size:new Ze(_,b)},r.set(u,y),u.addEventListener("dispose",L)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];let m=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",m),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let f=h===void 0?0:h.length,g=i[u.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<f;v++){let w=g[v];w[0]=v,w[1]=h[v]}g.sort(Qw);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Jw);let y=u.morphAttributes.position,p=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let w=o[v],T=w[0],R=w[1];T!==Number.MAX_SAFE_INTEGER&&R?(y&&u.getAttribute("morphTarget"+v)!==y[T]&&u.setAttribute("morphTarget"+v,y[T]),p&&u.getAttribute("morphNormal"+v)!==p[T]&&u.setAttribute("morphNormal"+v,p[T]),s[v]=R,m+=R):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let x=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function tM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var fc=class extends vn{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:br,u!==br&&u!==ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===br&&(i=Os),i===void 0&&u===ba&&(i=xr),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bg=new vn,zg=new fc(1,1);zg.compareFunction=Dg;var Hg=new oc,Vg=new kd,Gg=new dc,Vm=[],Gm=[],Wm=new Float32Array(16),qm=new Float32Array(9),Xm=new Float32Array(4);function Pa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Vm[s];if(r===void 0&&(r=new Float32Array(s),Vm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lc(n,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function sM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function rM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function aM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Xm.set(i),n.uniformMatrix2fv(this.addr,!1,Xm),on(t,i)}}function oM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;qm.set(i),n.uniformMatrix3fv(this.addr,!1,qm),on(t,i)}}function lM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Wm.set(i),n.uniformMatrix4fv(this.addr,!1,Wm),on(t,i)}}function cM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function dM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function hM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function fM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function mM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function gM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function yM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?zg:Bg;t.setTexture2D(e||r,s)}function vM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vg,s)}function xM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gg,s)}function bM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hg,s)}function _M(n){switch(n){case 5126:return nM;case 35664:return iM;case 35665:return sM;case 35666:return rM;case 35674:return aM;case 35675:return oM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return uM;case 35668:case 35672:return dM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return bM}}function wM(n,e){n.uniform1fv(this.addr,e)}function MM(n,e){let t=Pa(e,this.size,2);n.uniform2fv(this.addr,t)}function SM(n,e){let t=Pa(e,this.size,3);n.uniform3fv(this.addr,t)}function AM(n,e){let t=Pa(e,this.size,4);n.uniform4fv(this.addr,t)}function EM(n,e){let t=Pa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TM(n,e){let t=Pa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RM(n,e){let t=Pa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CM(n,e){n.uniform1iv(this.addr,e)}function LM(n,e){n.uniform2iv(this.addr,e)}function PM(n,e){n.uniform3iv(this.addr,e)}function IM(n,e){n.uniform4iv(this.addr,e)}function NM(n,e){n.uniform1uiv(this.addr,e)}function DM(n,e){n.uniform2uiv(this.addr,e)}function kM(n,e){n.uniform3uiv(this.addr,e)}function OM(n,e){n.uniform4uiv(this.addr,e)}function UM(n,e,t){let i=this.cache,s=e.length,r=Lc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bg,r[a])}function FM(n,e,t){let i=this.cache,s=e.length,r=Lc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vg,r[a])}function BM(n,e,t){let i=this.cache,s=e.length,r=Lc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gg,r[a])}function zM(n,e,t){let i=this.cache,s=e.length,r=Lc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hg,r[a])}function HM(n){switch(n){case 5126:return wM;case 35664:return MM;case 35665:return SM;case 35666:return AM;case 35674:return EM;case 35675:return TM;case 35676:return RM;case 5124:case 35670:return CM;case 35667:case 35671:return LM;case 35668:case 35672:return PM;case 35669:case 35673:return IM;case 5125:return NM;case 36294:return DM;case 36295:return kM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}var Fd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}},Bd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HM(t.type)}},zd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},_d=/(\w+)(\])?(\[|\.)?/g;function $m(n,e){n.seq.push(e),n.map[e.id]=e}function VM(n,e,t){let i=n.name,s=i.length;for(_d.lastIndex=0;;){let r=_d.exec(i),a=_d.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$m(t,c===void 0?new Fd(o,n,e):new Bd(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new zd(o),$m(t,d)),t=d}}}var ya=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);VM(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Ym(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var GM=37297,WM=0;function qM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function XM(n){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n),i;switch(e===t?i="":e===nc&&t===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&t===nc&&(i="LinearSRGBToLinearDisplayP3"),n){case rn:case Cc:return[i,"LinearTransferOETF"];case Vt:case fh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+qM(n.getShaderSource(e),a)}else return s}function $M(n,e){let t=XM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function YM(n,e){let t;switch(e){case Jv:t="Linear";break;case Qv:t="Reinhard";break;case ex:t="OptimizedCineon";break;case tx:t="ACESFilmic";break;case ix:t="AgX";break;case nx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pa).join(`
`)}function ZM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pa).join(`
`)}function KM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function JM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function pa(n){return n!==""}function Zm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Km(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(n){return n.replace(QM,tS)}var eS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tS(n,e){let t=je[e];if(t===void 0){let i=eS.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hd(t)}var nS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(n){return n.replace(nS,iS)}function iS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function rS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case va:case xa:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xa:e="ENVMAP_MODE_REFRACTION";break}return e}function oS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Zv:e="ENVMAP_BLENDING_MIX";break;case Kv:e="ENVMAP_BLENDING_ADD";break}return e}function lS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function cS(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=sS(t),c=rS(t),u=aS(t),d=oS(t),h=lS(t),f=t.isWebGL2?"":jM(t),g=ZM(t),y=KM(r),p=s.createProgram(),m,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(pa).join(`
`),m.length>0&&(m+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(pa).join(`
`),x.length>0&&(x+=`
`)):(m=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),x=[f,Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bs?"#define TONE_MAPPING":"",t.toneMapping!==Bs?je.tonemapping_pars_fragment:"",t.toneMapping!==Bs?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,$M("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),a=Hd(a),a=Zm(a,t),a=Km(a,t),o=Hd(o),o=Zm(o,t),o=Km(o,t),a=Jm(a),o=Jm(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=v+m+a,T=v+x+o,R=Ym(s,s.VERTEX_SHADER,w),C=Ym(s,s.FRAGMENT_SHADER,T);s.attachShader(p,R),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function B(I){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(R).trim(),S=s.getShaderInfoLog(C).trim(),U=!0,V=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,R,C);else{let q=jm(s,R,"vertex"),W=jm(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+q+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||S==="")&&(V=!1);V&&(I.diagnostics={runnable:U,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:S,prefix:x}})}s.deleteShader(R),s.deleteShader(C),_=new ya(s,p),b=JM(s,p)}let _;this.getUniforms=function(){return _===void 0&&B(this),_};let b;this.getAttributes=function(){return b===void 0&&B(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,GM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}var uS=0,Vd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gd(e),t.set(e,i)),i}},Gd=class{constructor(e){this.id=uS++,this.code=e,this.usedTimes=0}};function dS(n,e,t,i,s,r,a){let o=new yo,l=new Vd,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function p(_,b,N,I,O){let L=I.fog,S=O.geometry,U=_.isMeshStandardMaterial?I.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||U),q=V&&V.mapping===Tc?V.image.height:null,W=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let J=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,Q=J!==void 0?J.length:0,ie=0;S.morphAttributes.position!==void 0&&(ie=1),S.morphAttributes.normal!==void 0&&(ie=2),S.morphAttributes.color!==void 0&&(ie=3);let G,j,te,ne;if(W){let In=Oi[W];G=In.vertexShader,j=In.fragmentShader}else G=_.vertexShader,j=_.fragmentShader,l.update(_),te=l.getVertexShaderID(_),ne=l.getFragmentShaderID(_);let H=n.getRenderTarget(),oe=O.isInstancedMesh===!0,de=O.isBatchedMesh===!0,be=!!_.map,qe=!!_.matcap,X=!!V,Kt=!!_.aoMap,Pe=!!_.lightMap,ze=!!_.bumpMap,Ee=!!_.normalMap,zt=!!_.displacementMap,Qe=!!_.emissiveMap,P=!!_.metalnessMap,M=!!_.roughnessMap,Y=_.anisotropy>0,le=_.clearcoat>0,ae=_.iridescence>0,ce=_.sheen>0,Re=_.transmission>0,xe=Y&&!!_.anisotropyMap,Me=le&&!!_.clearcoatMap,Oe=le&&!!_.clearcoatNormalMap,et=le&&!!_.clearcoatRoughnessMap,re=ae&&!!_.iridescenceMap,bt=ae&&!!_.iridescenceThicknessMap,at=ce&&!!_.sheenColorMap,He=ce&&!!_.sheenRoughnessMap,Ie=!!_.specularMap,Se=!!_.specularColorMap,Ye=!!_.specularIntensityMap,xt=Re&&!!_.transmissionMap,Xt=Re&&!!_.thicknessMap,nt=!!_.gradientMap,he=!!_.alphaMap,F=_.alphaTest>0,ye=!!_.alphaHash,ve=!!_.extensions,Ue=!!S.attributes.uv1,De=!!S.attributes.uv2,Rt=!!S.attributes.uv3,Ct=Bs;return _.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ct=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:G,fragmentShader:j,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:de,instancing:oe,instancingColor:oe&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:rn,map:be,matcap:qe,envMap:X,envMapMode:X&&V.mapping,envMapCubeUVHeight:q,aoMap:Kt,lightMap:Pe,bumpMap:ze,normalMap:Ee,displacementMap:h&&zt,emissiveMap:Qe,normalMapObjectSpace:Ee&&_.normalMapType===gx,normalMapTangentSpace:Ee&&_.normalMapType===hh,metalnessMap:P,roughnessMap:M,anisotropy:Y,anisotropyMap:xe,clearcoat:le,clearcoatMap:Me,clearcoatNormalMap:Oe,clearcoatRoughnessMap:et,iridescence:ae,iridescenceMap:re,iridescenceThicknessMap:bt,sheen:ce,sheenColorMap:at,sheenRoughnessMap:He,specularMap:Ie,specularColorMap:Se,specularIntensityMap:Ye,transmission:Re,transmissionMap:xt,thicknessMap:Xt,gradientMap:nt,opaque:_.transparent===!1&&_.blending===ma,alphaMap:he,alphaTest:F,alphaHash:ye,combine:_.combine,mapUv:be&&y(_.map.channel),aoMapUv:Kt&&y(_.aoMap.channel),lightMapUv:Pe&&y(_.lightMap.channel),bumpMapUv:ze&&y(_.bumpMap.channel),normalMapUv:Ee&&y(_.normalMap.channel),displacementMapUv:zt&&y(_.displacementMap.channel),emissiveMapUv:Qe&&y(_.emissiveMap.channel),metalnessMapUv:P&&y(_.metalnessMap.channel),roughnessMapUv:M&&y(_.roughnessMap.channel),anisotropyMapUv:xe&&y(_.anisotropyMap.channel),clearcoatMapUv:Me&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:at&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:He&&y(_.sheenRoughnessMap.channel),specularMapUv:Ie&&y(_.specularMap.channel),specularColorMapUv:Se&&y(_.specularColorMap.channel),specularIntensityMapUv:Ye&&y(_.specularIntensityMap.channel),transmissionMapUv:xt&&y(_.transmissionMap.channel),thicknessMapUv:Xt&&y(_.thicknessMap.channel),alphaMapUv:he&&y(_.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(Ee||Y),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:De,vertexUv3s:Rt,pointsUvs:O.isPoints===!0&&!!S.attributes.uv&&(be||he),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===Dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===On,flipSided:_.side===Gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ve&&_.extensions.derivatives===!0,extensionFragDepth:ve&&_.extensions.fragDepth===!0,extensionDrawBuffers:ve&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(x(b,_),v(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function w(_){let b=g[_.type],N;if(b){let I=Oi[b];N=eb.clone(I.uniforms)}else N=_.uniforms;return N}function T(_,b){let N;for(let I=0,O=c.length;I<O;I++){let L=c[I];if(L.cacheKey===b){N=L,++N.usedTimes;break}}return N===void 0&&(N=new cS(n,b,_,r),c.push(N)),N}function R(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),_.destroy()}}function C(_){l.remove(_)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:T,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:B}}function hS(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function fS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,h,f,g,y,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=y,m.group=p),e++,m}function o(d,h,f,g,y,p){let m=a(d,h,f,g,y,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(d,h,f,g,y,p){let m=a(d,h,f,g,y,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||fS),i.length>1&&i.sort(h||eg),s.length>1&&s.sort(h||eg)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function pS(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new tg,n.set(i,[a])):s>=r.length?(a=new tg,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function mS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function gS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yS=0;function vS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xS(n,e){let t=new mS,i=gS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);let r=new D,a=new Ae,o=new Ae;function l(u,d){let h=0,f=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let y=0,p=0,m=0,x=0,v=0,w=0,T=0,R=0,C=0,B=0,_=0;u.sort(vS);let b=d===!0?Math.PI:1;for(let I=0,O=u.length;I<O;I++){let L=u[I],S=L.color,U=L.intensity,V=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=S.r*U*b,f+=S.g*U*b,g+=S.b*U*b;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],U);_++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let J=L.shadow,Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=q,s.directionalShadowMatrix[y]=L.shadow.matrix,w++}s.directional[y]=W,y++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(S).multiplyScalar(U*b),W.distance=V,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[m]=W;let J=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&B++),s.spotLightMatrix[m]=J.matrix,L.castShadow){let Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[m]=Q,s.spotShadowMap[m]=q,R++}m++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(S).multiplyScalar(U),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=W,x++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),W.distance=L.distance,W.decay=L.decay,L.castShadow){let J=L.shadow,Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=L.shadow.matrix,T++}s.point[p]=W,p++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(U*b),W.groundColor.copy(L.groundColor).multiplyScalar(U*b),s.hemi[v]=W,v++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==y||N.pointLength!==p||N.spotLength!==m||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==R||N.numSpotMaps!==C||N.numLightProbes!==_)&&(s.directional.length=y,s.spot.length=m,s.rectArea.length=x,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=R+C-B,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=_,N.directionalLength=y,N.pointLength=p,N.spotLength=m,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=R,N.numSpotMaps=C,N.numLightProbes=_,s.version=yS++)}function c(u,d){let h=0,f=0,g=0,y=0,p=0,m=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){let w=u[x];if(w.isDirectionalLight){let T=s.directional[h];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(w.isSpotLight){let T=s.spot[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(w.isRectAreaLight){let T=s.rectArea[y];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(w.isPointLight){let T=s.point[f];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let T=s.hemi[p];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function ng(n,e){let t=new xS(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bS(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new ng(n,e),t.set(r,[l])):a>=o.length?(l=new ng(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Wd=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qd=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
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
}`;function MS(n,e,t){let i=new vo,s=new Ze,r=new Ze,a=new Mt,o=new Wd({depthPacking:mx}),l=new qd,c={},u=t.maxTextureSize,d={[Fi]:Gn,[Gn]:Fi,[On]:On},h=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:_S,fragmentShader:wS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new qn;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mg;let m=this.type;this.render=function(R,C,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let _=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Fs),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=m!==os&&this.type===os,L=m===os&&this.type!==os;for(let S=0,U=R.length;S<U;S++){let V=R[S],q=V.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let W=q.getFrameExtents();if(s.multiply(W),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,q.mapSize.y=r.y)),q.map===null||O===!0||L===!0){let Q=this.type!==os?{minFilter:sn,magFilter:sn}:{};q.map!==null&&q.map.dispose(),q.map=new us(s.x,s.y,Q),q.map.texture.name=V.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let J=q.getViewportCount();for(let Q=0;Q<J;Q++){let ie=q.getViewport(Q);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),I.viewport(a),q.updateMatrices(V,Q),i=q.getFrustum(),w(C,B,q.camera,V,this.type)}q.isPointLightShadow!==!0&&this.type===os&&x(q,B),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(_,b,N)};function x(R,C){let B=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new us(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,B,h,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,B,f,y,null)}function v(R,C,B,_){let b=null,N=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)b=N;else if(b=B.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let I=b.uuid,O=C.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let S=L[O];S===void 0&&(S=b.clone(),L[O]=S,C.addEventListener("dispose",T)),b=S}if(b.visible=C.visible,b.wireframe=C.wireframe,_===os?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let I=n.properties.get(b);I.light=B}return b}function w(R,C,B,_,b){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===os)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);let O=e.update(R),L=R.material;if(Array.isArray(L)){let S=O.groups;for(let U=0,V=S.length;U<V;U++){let q=S[U],W=L[q.materialIndex];if(W&&W.visible){let J=v(R,W,_,b);R.onBeforeShadow(n,R,C,B,O,J,q),n.renderBufferDirect(B,null,O,J,R,q),R.onAfterShadow(n,R,C,B,O,J,q)}}}else if(L.visible){let S=v(R,L,_,b);R.onBeforeShadow(n,R,C,B,O,S,null),n.renderBufferDirect(B,null,O,S,R,null),R.onAfterShadow(n,R,C,B,O,S,null)}}let I=R.children;for(let O=0,L=I.length;O<L;O++)w(I[O],C,B,_,b)}function T(R){R.target.removeEventListener("dispose",T);for(let B in c){let _=c[B],b=R.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function SS(n,e,t){let i=t.isWebGL2;function s(){let F=!1,ye=new Mt,ve=null,Ue=new Mt(0,0,0,0);return{setMask:function(De){ve!==De&&!F&&(n.colorMask(De,De,De,De),ve=De)},setLocked:function(De){F=De},setClear:function(De,Rt,Ct,dn,In){In===!0&&(De*=dn,Rt*=dn,Ct*=dn),ye.set(De,Rt,Ct,dn),Ue.equals(ye)===!1&&(n.clearColor(De,Rt,Ct,dn),Ue.copy(ye))},reset:function(){F=!1,ve=null,Ue.set(-1,0,0,0)}}}function r(){let F=!1,ye=null,ve=null,Ue=null;return{setTest:function(De){De?de(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(De){ye!==De&&!F&&(n.depthMask(De),ye=De)},setFunc:function(De){if(ve!==De){switch(De){case Gv:n.depthFunc(n.NEVER);break;case Wv:n.depthFunc(n.ALWAYS);break;case qv:n.depthFunc(n.LESS);break;case Jl:n.depthFunc(n.LEQUAL);break;case Xv:n.depthFunc(n.EQUAL);break;case $v:n.depthFunc(n.GEQUAL);break;case Yv:n.depthFunc(n.GREATER);break;case jv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=De}},setLocked:function(De){F=De},setClear:function(De){Ue!==De&&(n.clearDepth(De),Ue=De)},reset:function(){F=!1,ye=null,ve=null,Ue=null}}}function a(){let F=!1,ye=null,ve=null,Ue=null,De=null,Rt=null,Ct=null,dn=null,In=null;return{setTest:function(Lt){F||(Lt?de(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Lt){ye!==Lt&&!F&&(n.stencilMask(Lt),ye=Lt)},setFunc:function(Lt,Nn,ki){(ve!==Lt||Ue!==Nn||De!==ki)&&(n.stencilFunc(Lt,Nn,ki),ve=Lt,Ue=Nn,De=ki)},setOp:function(Lt,Nn,ki){(Rt!==Lt||Ct!==Nn||dn!==ki)&&(n.stencilOp(Lt,Nn,ki),Rt=Lt,Ct=Nn,dn=ki)},setLocked:function(Lt){F=Lt},setClear:function(Lt){In!==Lt&&(n.clearStencil(Lt),In=Lt)},reset:function(){F=!1,ye=null,ve=null,Ue=null,De=null,Rt=null,Ct=null,dn=null,In=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap,h={},f={},g=new WeakMap,y=[],p=null,m=!1,x=null,v=null,w=null,T=null,R=null,C=null,B=null,_=new Ne(0,0,0),b=0,N=!1,I=null,O=null,L=null,S=null,U=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=W>=2);let Q=null,ie={},G=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),te=new Mt().fromArray(G),ne=new Mt().fromArray(j);function H(F,ye,ve,Ue){let De=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(F,Rt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<ve;Ct++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(ye,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(ye+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Rt}let oe={};oe[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(n.DEPTH_TEST),l.setFunc(Jl),Qe(!1),P(Op),de(n.CULL_FACE),Ee(Fs);function de(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function be(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function qe(F,ye){return f[F]!==ye?(n.bindFramebuffer(F,ye),f[F]=ye,i&&(F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye)),!0):!1}function X(F,ye){let ve=y,Ue=!1;if(F)if(ve=g.get(ye),ve===void 0&&(ve=[],g.set(ye,ve)),F.isWebGLMultipleRenderTargets){let De=F.texture;if(ve.length!==De.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Ct=De.length;Rt<Ct;Rt++)ve[Rt]=n.COLOR_ATTACHMENT0+Rt;ve.length=De.length,Ue=!0}}else ve[0]!==n.COLOR_ATTACHMENT0&&(ve[0]=n.COLOR_ATTACHMENT0,Ue=!0);else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Kt(F){return p!==F?(n.useProgram(F),p=F,!0):!1}let Pe={[yr]:n.FUNC_ADD,[Rv]:n.FUNC_SUBTRACT,[Cv]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[zp]=n.MIN,Pe[Hp]=n.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(Pe[zp]=F.MIN_EXT,Pe[Hp]=F.MAX_EXT)}let ze={[Lv]:n.ZERO,[Pv]:n.ONE,[Iv]:n.SRC_COLOR,[Td]:n.SRC_ALPHA,[Fv]:n.SRC_ALPHA_SATURATE,[Ov]:n.DST_COLOR,[Dv]:n.DST_ALPHA,[Nv]:n.ONE_MINUS_SRC_COLOR,[Rd]:n.ONE_MINUS_SRC_ALPHA,[Uv]:n.ONE_MINUS_DST_COLOR,[kv]:n.ONE_MINUS_DST_ALPHA,[Bv]:n.CONSTANT_COLOR,[zv]:n.ONE_MINUS_CONSTANT_COLOR,[Hv]:n.CONSTANT_ALPHA,[Vv]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(F,ye,ve,Ue,De,Rt,Ct,dn,In,Lt){if(F===Fs){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(de(n.BLEND),m=!0),F!==Tv){if(F!==x||Lt!==N){if((v!==yr||R!==yr)&&(n.blendEquation(n.FUNC_ADD),v=yr,R=yr),Lt)switch(F){case ma:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Up:n.blendFunc(n.ONE,n.ONE);break;case Fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ma:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Up:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,T=null,C=null,B=null,_.set(0,0,0),b=0,x=F,N=Lt}return}De=De||ye,Rt=Rt||ve,Ct=Ct||Ue,(ye!==v||De!==R)&&(n.blendEquationSeparate(Pe[ye],Pe[De]),v=ye,R=De),(ve!==w||Ue!==T||Rt!==C||Ct!==B)&&(n.blendFuncSeparate(ze[ve],ze[Ue],ze[Rt],ze[Ct]),w=ve,T=Ue,C=Rt,B=Ct),(dn.equals(_)===!1||In!==b)&&(n.blendColor(dn.r,dn.g,dn.b,In),_.copy(dn),b=In),x=F,N=!1}function zt(F,ye){F.side===On?be(n.CULL_FACE):de(n.CULL_FACE);let ve=F.side===Gn;ye&&(ve=!ve),Qe(ve),F.blending===ma&&F.transparent===!1?Ee(Fs):Ee(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);let Ue=F.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(F){I!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),I=F)}function P(F){F!==Sv?(de(n.CULL_FACE),F!==O&&(F===Op?n.cullFace(n.BACK):F===Av?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),O=F}function M(F){F!==L&&(q&&n.lineWidth(F),L=F)}function Y(F,ye,ve){F?(de(n.POLYGON_OFFSET_FILL),(S!==ye||U!==ve)&&(n.polygonOffset(ye,ve),S=ye,U=ve)):be(n.POLYGON_OFFSET_FILL)}function le(F){F?de(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function ae(F){F===void 0&&(F=n.TEXTURE0+V-1),Q!==F&&(n.activeTexture(F),Q=F)}function ce(F,ye,ve){ve===void 0&&(Q===null?ve=n.TEXTURE0+V-1:ve=Q);let Ue=ie[ve];Ue===void 0&&(Ue={type:void 0,texture:void 0},ie[ve]=Ue),(Ue.type!==F||Ue.texture!==ye)&&(Q!==ve&&(n.activeTexture(ve),Q=ve),n.bindTexture(F,ye||oe[F]),Ue.type=F,Ue.texture=ye)}function Re(){let F=ie[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(F){te.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),te.copy(F))}function xt(F){ne.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ne.copy(F))}function Xt(F,ye){let ve=d.get(ye);ve===void 0&&(ve=new WeakMap,d.set(ye,ve));let Ue=ve.get(F);Ue===void 0&&(Ue=n.getUniformBlockIndex(ye,F.name),ve.set(F,Ue))}function nt(F,ye){let Ue=d.get(ye).get(F);u.get(ye)!==Ue&&(n.uniformBlockBinding(ye,Ue,F.__bindingPointIndex),u.set(ye,Ue))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,ie={},f={},g=new WeakMap,y=[],p=null,m=!1,x=null,v=null,w=null,T=null,R=null,C=null,B=null,_=new Ne(0,0,0),b=0,N=!1,I=null,O=null,L=null,S=null,U=null,te.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:de,disable:be,bindFramebuffer:qe,drawBuffers:X,useProgram:Kt,setBlending:Ee,setMaterial:zt,setFlipSided:Qe,setCullFace:P,setLineWidth:M,setPolygonOffset:Y,setScissorTest:le,activeTexture:ae,bindTexture:ce,unbindTexture:Re,compressedTexImage2D:xe,compressedTexImage3D:Me,texImage2D:Ie,texImage3D:Se,updateUBOMapping:Xt,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:He,texSubImage2D:Oe,texSubImage3D:et,compressedTexSubImage2D:re,compressedTexSubImage3D:bt,scissor:Ye,viewport:xt,reset:he}}function AS(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return f?new OffscreenCanvas(P,M):go("canvas")}function y(P,M,Y,le){let ae=1;if((P.width>le||P.height>le)&&(ae=le/Math.max(P.width,P.height)),ae<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let ce=M?sc:Math.floor,Re=ce(ae*P.width),xe=ce(ae*P.height);d===void 0&&(d=g(Re,xe));let Me=Y?g(Re,xe):d;return Me.width=Re,Me.height=xe,Me.getContext("2d").drawImage(P,0,0,Re,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Re+"x"+xe+")."),Me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return Nd(P.width)&&Nd(P.height)}function m(P){return o?!1:P.wrapS!==ei||P.wrapT!==ei||P.minFilter!==sn&&P.minFilter!==Qt}function x(P,M){return P.generateMipmaps&&M&&P.minFilter!==sn&&P.minFilter!==Qt}function v(P){n.generateMipmap(P)}function w(P,M,Y,le,ae=!1){if(o===!1)return M;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=M;if(M===n.RED&&(Y===n.FLOAT&&(ce=n.R32F),Y===n.HALF_FLOAT&&(ce=n.R16F),Y===n.UNSIGNED_BYTE&&(ce=n.R8)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ce=n.R8UI),Y===n.UNSIGNED_SHORT&&(ce=n.R16UI),Y===n.UNSIGNED_INT&&(ce=n.R32UI),Y===n.BYTE&&(ce=n.R8I),Y===n.SHORT&&(ce=n.R16I),Y===n.INT&&(ce=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(ce=n.RG32F),Y===n.HALF_FLOAT&&(ce=n.RG16F),Y===n.UNSIGNED_BYTE&&(ce=n.RG8)),M===n.RGBA){let Re=ae?ec:mt.getTransfer(le);Y===n.FLOAT&&(ce=n.RGBA32F),Y===n.HALF_FLOAT&&(ce=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ce=Re===Dt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function T(P,M,Y){return x(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){return P===sn||P===Ql||P===lo?n.NEAREST:n.LINEAR}function C(P){let M=P.target;M.removeEventListener("dispose",C),_(M),M.isVideoTexture&&u.delete(M)}function B(P){let M=P.target;M.removeEventListener("dispose",B),N(M)}function _(P){let M=i.get(P);if(M.__webglInit===void 0)return;let Y=P.source,le=h.get(Y);if(le){let ae=le[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(P),Object.keys(le).length===0&&h.delete(Y)}i.remove(P)}function b(P){let M=i.get(P);n.deleteTexture(M.__webglTexture);let Y=P.source,le=h.get(Y);delete le[M.__cacheKey],a.memory.textures--}function N(P){let M=P.texture,Y=i.get(P),le=i.get(M);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(Y.__webglFramebuffer[ae]))for(let ce=0;ce<Y.__webglFramebuffer[ae].length;ce++)n.deleteFramebuffer(Y.__webglFramebuffer[ae][ce]);else n.deleteFramebuffer(Y.__webglFramebuffer[ae]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[ae])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ae=0;ae<Y.__webglFramebuffer.length;ae++)n.deleteFramebuffer(Y.__webglFramebuffer[ae]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,ce=M.length;ae<ce;ae++){let Re=i.get(M[ae]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),a.memory.textures--),i.remove(M[ae])}i.remove(M),i.remove(P)}let I=0;function O(){I=0}function L(){let P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function S(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function U(P,M){let Y=i.get(P);if(P.isVideoTexture&&zt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){let le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,P,M);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function V(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function q(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function W(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let J={[wr]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[po]:n.MIRRORED_REPEAT},Q={[sn]:n.NEAREST,[Ql]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[uh]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},ie={[yx]:n.NEVER,[Mx]:n.ALWAYS,[vx]:n.LESS,[Dg]:n.LEQUAL,[xx]:n.EQUAL,[wx]:n.GEQUAL,[bx]:n.GREATER,[_x]:n.NOTEQUAL};function G(P,M,Y){if(Y?(n.texParameteri(P,n.TEXTURE_WRAP_S,J[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,J[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,J[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Q[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Q[M.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==ei||M.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,R(M.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==sn&&M.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===sn||M.minFilter!==lo&&M.minFilter!==Hs||M.type===ls&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===mo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function j(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));let le=M.source,ae=h.get(le);ae===void 0&&(ae={},h.set(le,ae));let ce=S(M);if(ce!==P.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[ce].usedTimes++;let Re=ae[P.__cacheKey];Re!==void 0&&(ae[P.__cacheKey].usedTimes--,Re.usedTimes===0&&b(M)),P.__cacheKey=ce,P.__webglTexture=ae[ce].texture}return Y}function te(P,M,Y){let le=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=n.TEXTURE_3D);let ae=j(P,M),ce=M.source;t.bindTexture(le,P.__webglTexture,n.TEXTURE0+Y);let Re=i.get(ce);if(ce.version!==Re.__version||ae===!0){t.activeTexture(n.TEXTURE0+Y);let xe=mt.getPrimaries(mt.workingColorSpace),Me=M.colorSpace===di?null:mt.getPrimaries(M.colorSpace),Oe=M.colorSpace===di||xe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let et=m(M)&&p(M.image)===!1,re=y(M.image,et,!1,s.maxTextureSize);re=Qe(M,re);let bt=p(re)||o,at=r.convert(M.format,M.colorSpace),He=r.convert(M.type),Ie=w(M.internalFormat,at,He,M.colorSpace,M.isVideoTexture);G(le,M,bt);let Se,Ye=M.mipmaps,xt=o&&M.isVideoTexture!==!0&&Ie!==Pg,Xt=Re.__version===void 0||ae===!0,nt=T(M,re,bt);if(M.isDepthTexture)Ie=n.DEPTH_COMPONENT,o?M.type===ls?Ie=n.DEPTH_COMPONENT32F:M.type===Os?Ie=n.DEPTH_COMPONENT24:M.type===xr?Ie=n.DEPTH24_STENCIL8:Ie=n.DEPTH_COMPONENT16:M.type===ls&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===br&&Ie===n.DEPTH_COMPONENT&&M.type!==dh&&M.type!==Os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Os,He=r.convert(M.type)),M.format===ba&&Ie===n.DEPTH_COMPONENT&&(Ie=n.DEPTH_STENCIL,M.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=xr,He=r.convert(M.type))),Xt&&(xt?t.texStorage2D(n.TEXTURE_2D,1,Ie,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ie,re.width,re.height,0,at,He,null));else if(M.isDataTexture)if(Ye.length>0&&bt){xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,nt,Ie,Ye[0].width,Ye[0].height);for(let he=0,F=Ye.length;he<F;he++)Se=Ye[he],xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,at,He,Se.data):t.texImage2D(n.TEXTURE_2D,he,Ie,Se.width,Se.height,0,at,He,Se.data);M.generateMipmaps=!1}else xt?(Xt&&t.texStorage2D(n.TEXTURE_2D,nt,Ie,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,at,He,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,re.width,re.height,0,at,He,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){xt&&Xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,Ie,Ye[0].width,Ye[0].height,re.depth);for(let he=0,F=Ye.length;he<F;he++)Se=Ye[he],M.format!==ui?at!==null?xt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,re.depth,at,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ie,Se.width,Se.height,re.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,re.depth,at,He,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ie,Se.width,Se.height,re.depth,0,at,He,Se.data)}else{xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,nt,Ie,Ye[0].width,Ye[0].height);for(let he=0,F=Ye.length;he<F;he++)Se=Ye[he],M.format!==ui?at!==null?xt?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,at,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ie,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,at,He,Se.data):t.texImage2D(n.TEXTURE_2D,he,Ie,Se.width,Se.height,0,at,He,Se.data)}else if(M.isDataArrayTexture)xt?(Xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,Ie,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,at,He,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,re.width,re.height,re.depth,0,at,He,re.data);else if(M.isData3DTexture)xt?(Xt&&t.texStorage3D(n.TEXTURE_3D,nt,Ie,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,at,He,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,re.width,re.height,re.depth,0,at,He,re.data);else if(M.isFramebufferTexture){if(Xt)if(xt)t.texStorage2D(n.TEXTURE_2D,nt,Ie,re.width,re.height);else{let he=re.width,F=re.height;for(let ye=0;ye<nt;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ie,he,F,0,at,He,null),he>>=1,F>>=1}}else if(Ye.length>0&&bt){xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,nt,Ie,Ye[0].width,Ye[0].height);for(let he=0,F=Ye.length;he<F;he++)Se=Ye[he],xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,at,He,Se):t.texImage2D(n.TEXTURE_2D,he,Ie,at,He,Se);M.generateMipmaps=!1}else xt?(Xt&&t.texStorage2D(n.TEXTURE_2D,nt,Ie,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,at,He,re)):t.texImage2D(n.TEXTURE_2D,0,Ie,at,He,re);x(M,bt)&&v(le),Re.__version=ce.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ne(P,M,Y){if(M.image.length!==6)return;let le=j(P,M),ae=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);let ce=i.get(ae);if(ae.version!==ce.__version||le===!0){t.activeTexture(n.TEXTURE0+Y);let Re=mt.getPrimaries(mt.workingColorSpace),xe=M.colorSpace===di?null:mt.getPrimaries(M.colorSpace),Me=M.colorSpace===di||Re===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Oe=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,re=[];for(let he=0;he<6;he++)!Oe&&!et?re[he]=y(M.image[he],!1,!0,s.maxCubemapSize):re[he]=et?M.image[he].image:M.image[he],re[he]=Qe(M,re[he]);let bt=re[0],at=p(bt)||o,He=r.convert(M.format,M.colorSpace),Ie=r.convert(M.type),Se=w(M.internalFormat,He,Ie,M.colorSpace),Ye=o&&M.isVideoTexture!==!0,xt=ce.__version===void 0||le===!0,Xt=T(M,bt,at);G(n.TEXTURE_CUBE_MAP,M,at);let nt;if(Oe){Ye&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Se,bt.width,bt.height);for(let he=0;he<6;he++){nt=re[he].mipmaps;for(let F=0;F<nt.length;F++){let ye=nt[F];M.format!==ui?He!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F,0,0,ye.width,ye.height,He,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F,0,0,ye.width,ye.height,He,Ie,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F,Se,ye.width,ye.height,0,He,Ie,ye.data)}}}else{nt=M.mipmaps,Ye&&xt&&(nt.length>0&&Xt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Se,re[0].width,re[0].height));for(let he=0;he<6;he++)if(et){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,re[he].width,re[he].height,He,Ie,re[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,re[he].width,re[he].height,0,He,Ie,re[he].data);for(let F=0;F<nt.length;F++){let ve=nt[F].image[he].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F+1,0,0,ve.width,ve.height,He,Ie,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F+1,Se,ve.width,ve.height,0,He,Ie,ve.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,He,Ie,re[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,He,Ie,re[he]);for(let F=0;F<nt.length;F++){let ye=nt[F];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F+1,0,0,He,Ie,ye.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,F+1,Se,He,Ie,ye.image[he])}}}x(M,at)&&v(n.TEXTURE_CUBE_MAP),ce.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function H(P,M,Y,le,ae,ce){let Re=r.convert(Y.format,Y.colorSpace),xe=r.convert(Y.type),Me=w(Y.internalFormat,Re,xe,Y.colorSpace);if(!i.get(M).__hasExternalTextures){let et=Math.max(1,M.width>>ce),re=Math.max(1,M.height>>ce);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ce,Me,et,re,M.depth,0,Re,xe,null):t.texImage2D(ae,ce,Me,et,re,0,Re,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ee(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ae,i.get(Y).__webglTexture,0,ze(M)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,ae,i.get(Y).__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(P,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer&&!M.stencilBuffer){let le=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||Ee(M)){let ae=M.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ls?le=n.DEPTH_COMPONENT32F:ae.type===Os&&(le=n.DEPTH_COMPONENT24));let ce=ze(M);Ee(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,le,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,le,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(M.depthBuffer&&M.stencilBuffer){let le=ze(M);Y&&Ee(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,M.width,M.height):Ee(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{let le=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ae=0;ae<le.length;ae++){let ce=le[ae],Re=r.convert(ce.format,ce.colorSpace),xe=r.convert(ce.type),Me=w(ce.internalFormat,Re,xe,ce.colorSpace),Oe=ze(M);Y&&Ee(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Me,M.width,M.height):Ee(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);let le=i.get(M.depthTexture).__webglTexture,ae=ze(M);if(M.depthTexture.format===br)Ee(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(M.depthTexture.format===ba)Ee(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function be(P){let M=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");de(M.__webglFramebuffer,P)}else if(Y){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]=n.createRenderbuffer(),oe(M.__webglDepthbuffer[le],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),oe(M.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(P,M,Y){let le=i.get(P);M!==void 0&&H(le.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&be(P)}function X(P){let M=P.texture,Y=i.get(P),le=i.get(M);P.addEventListener("dispose",B),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=M.version,a.memory.textures++);let ae=P.isWebGLCubeRenderTarget===!0,ce=P.isWebGLMultipleRenderTargets===!0,Re=p(P)||o;if(ae){Y.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[xe]=[];for(let Me=0;Me<M.mipmaps.length;Me++)Y.__webglFramebuffer[xe][Me]=n.createFramebuffer()}else Y.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)Y.__webglFramebuffer[xe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ce)if(s.drawBuffers){let xe=P.texture;for(let Me=0,Oe=xe.length;Me<Oe;Me++){let et=i.get(xe[Me]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Ee(P)===!1){let xe=ce?M:[M];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Me=0;Me<xe.length;Me++){let Oe=xe[Me];Y.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Me]);let et=r.convert(Oe.format,Oe.colorSpace),re=r.convert(Oe.type),bt=w(Oe.internalFormat,et,re,Oe.colorSpace,P.isXRRenderTarget===!0),at=ze(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,bt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),G(n.TEXTURE_CUBE_MAP,M,Re);for(let xe=0;xe<6;xe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)H(Y.__webglFramebuffer[xe][Me],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Me);else H(Y.__webglFramebuffer[xe],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);x(M,Re)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let xe=P.texture;for(let Me=0,Oe=xe.length;Me<Oe;Me++){let et=xe[Me],re=i.get(et);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),G(n.TEXTURE_2D,et,Re),H(Y.__webglFramebuffer,P,et,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),x(et,Re)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?xe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,le.__webglTexture),G(xe,M,Re),o&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)H(Y.__webglFramebuffer[Me],P,M,n.COLOR_ATTACHMENT0,xe,Me);else H(Y.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,xe,0);x(M,Re)&&v(xe),t.unbindTexture()}P.depthBuffer&&be(P)}function Kt(P){let M=p(P)||o,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,ae=Y.length;le<ae;le++){let ce=Y[le];if(x(ce,M)){let Re=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(ce).__webglTexture;t.bindTexture(Re,xe),v(Re),t.unbindTexture()}}}function Pe(P){if(o&&P.samples>0&&Ee(P)===!1){let M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,le=P.height,ae=n.COLOR_BUFFER_BIT,ce=[],Re=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(P),Me=P.isWebGLMultipleRenderTargets===!0;if(Me)for(let Oe=0;Oe<M.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Oe=0;Oe<M.length;Oe++){ce.push(n.COLOR_ATTACHMENT0+Oe),P.depthBuffer&&ce.push(Re);let et=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(et===!1&&(P.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),Me){let re=i.get(M[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,Y,le,0,0,Y,le,ae,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Oe=0;Oe<M.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);let et=i.get(M[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function ze(P){return Math.min(s.maxSamples,P.samples)}function Ee(P){let M=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function zt(P){let M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Qe(P,M){let Y=P.colorSpace,le=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Id||Y!==rn&&Y!==di&&(mt.getTransfer(Y)===Dt?o===!1?e.has("EXT_sRGB")===!0&&le===ui?(P.format=Id,P.minFilter=Qt,P.generateMipmaps=!1):M=rc.sRGBToLinear(M):(le!==ui||ae!==zs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=qe,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Ee}function ES(n,e,t){let i=t.isWebGL2;function s(r,a=di){let o,l=mt.getTransfer(a);if(r===zs)return n.UNSIGNED_BYTE;if(r===Eg)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Tg)return n.UNSIGNED_SHORT_5_5_5_1;if(r===rx)return n.BYTE;if(r===ax)return n.SHORT;if(r===dh)return n.UNSIGNED_SHORT;if(r===Ag)return n.INT;if(r===Os)return n.UNSIGNED_INT;if(r===ls)return n.FLOAT;if(r===mo)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ox)return n.ALPHA;if(r===ui)return n.RGBA;if(r===lx)return n.LUMINANCE;if(r===cx)return n.LUMINANCE_ALPHA;if(r===br)return n.DEPTH_COMPONENT;if(r===ba)return n.DEPTH_STENCIL;if(r===Id)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ux)return n.RED;if(r===Rg)return n.RED_INTEGER;if(r===dx)return n.RG;if(r===Cg)return n.RG_INTEGER;if(r===Lg)return n.RGBA_INTEGER;if(r===Yu||r===ju||r===Zu||r===Ku)if(l===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Yu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ju)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ku)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Yu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ju)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ku)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gp||r===Wp||r===qp||r===Xp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Gp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$p||r===Yp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===$p)return l===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Yp)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jp||r===Zp||r===Kp||r===Jp||r===Qp||r===em||r===tm||r===nm||r===im||r===sm||r===rm||r===am||r===om||r===lm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===jp)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zp)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kp)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jp)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qp)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===em)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tm)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nm)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===im)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sm)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rm)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===am)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===om)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lm)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ju||r===cm||r===um)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ju)return l===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===um)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hx||r===dm||r===hm||r===fm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ju)return o.COMPRESSED_RED_RGTC1_EXT;if(r===dm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Xd=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},An=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},TS={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TS)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$d=class extends Vs{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,y=t.getContextAttributes(),p=null,m=null,x=[],v=[],w=new Ze,T=null,R=new Gt;R.layers.enable(1),R.viewport=new Mt;let C=new Gt;C.layers.enable(2),C.viewport=new Mt;let B=[R,C],_=new Xd;_.layers.enable(1),_.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=x[G];return j===void 0&&(j=new fo,x[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=x[G];return j===void 0&&(j=new fo,x[G]=j),j.getGripSpace()},this.getHand=function(G){let j=x[G];return j===void 0&&(j=new fo,x[G]=j),j.getHandSpace()};function I(G){let j=v.indexOf(G.inputSource);if(j===-1)return;let te=x[j];te!==void 0&&(te.update(G.inputSource,G.frame,c||a),te.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",L);for(let G=0;G<x.length;G++){let j=v[G];j!==null&&(v[G]=null,x[G].disconnect(j))}b=null,N=null,e.setRenderTarget(p),f=null,h=null,d=null,s=null,m=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",O),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new us(f.framebufferWidth,f.framebufferHeight,{format:ui,type:zs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,te=null,ne=null;y.depth&&(ne=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?ba:br,te=y.stencil?xr:Os);let H={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(H),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new us(h.textureWidth,h.textureHeight,{format:ui,type:zs,depthTexture:new fc(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let oe=e.properties.get(m);oe.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(G){for(let j=0;j<G.removed.length;j++){let te=G.removed[j],ne=v.indexOf(te);ne>=0&&(v[ne]=null,x[ne].disconnect(te))}for(let j=0;j<G.added.length;j++){let te=G.added[j],ne=v.indexOf(te);if(ne===-1){for(let oe=0;oe<x.length;oe++)if(oe>=v.length){v.push(te),ne=oe;break}else if(v[oe]===null){v[oe]=te,ne=oe;break}if(ne===-1)break}let H=x[ne];H&&H.connect(te)}}let S=new D,U=new D;function V(G,j,te){S.setFromMatrixPosition(j.matrixWorld),U.setFromMatrixPosition(te.matrixWorld);let ne=S.distanceTo(U),H=j.projectionMatrix.elements,oe=te.projectionMatrix.elements,de=H[14]/(H[10]-1),be=H[14]/(H[10]+1),qe=(H[9]+1)/H[5],X=(H[9]-1)/H[5],Kt=(H[8]-1)/H[0],Pe=(oe[8]+1)/oe[0],ze=de*Kt,Ee=de*Pe,zt=ne/(-Kt+Pe),Qe=zt*-Kt;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Qe),G.translateZ(zt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let P=de+zt,M=be+zt,Y=ze-Qe,le=Ee+(ne-Qe),ae=qe*be/M*P,ce=X*be/M*P;G.projectionMatrix.makePerspective(Y,le,ae,ce,P,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;_.near=C.near=R.near=G.near,_.far=C.far=R.far=G.far,(b!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,N=_.far);let j=G.parent,te=_.cameras;q(_,j);for(let ne=0;ne<te.length;ne++)q(te[ne],j);te.length===2?V(_,R,C):_.projectionMatrix.copy(R.projectionMatrix),W(G,_,j)};function W(G,j,te){te===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(te.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=wa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let J=null;function Q(G,j){if(u=j.getViewerPose(c||a),g=j,u!==null){let te=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ne=!1;te.length!==_.cameras.length&&(_.cameras.length=0,ne=!0);for(let H=0;H<te.length;H++){let oe=te[H],de=null;if(f!==null)de=f.getViewport(oe);else{let qe=d.getViewSubImage(h,oe);de=qe.viewport,H===0&&(e.setRenderTargetTextures(m,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(m))}let be=B[H];be===void 0&&(be=new Gt,be.layers.enable(H),be.viewport=new Mt,B[H]=be),be.matrix.fromArray(oe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(oe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(de.x,de.y,de.width,de.height),H===0&&(_.matrix.copy(be.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ne===!0&&_.cameras.push(be)}}for(let te=0;te<x.length;te++){let ne=v[te],H=x[te];ne!==null&&H!==void 0&&H.update(ne,j,c||a)}J&&J(G,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let ie=new Fg;ie.setAnimationLoop(Q),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}};function RS(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Ug(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CS(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){let w=v.program;i.uniformBlockBinding(x,w)}function c(x,v){let w=s[x.id];w===void 0&&(g(x),w=u(x),s[x.id]=w,x.addEventListener("dispose",p));let T=v.program;i.updateUBOMapping(x,T);let R=e.render.frame;r[x.id]!==R&&(h(x),r[x.id]=R)}function u(x){let v=d();x.__bindingPointIndex=v;let w=n.createBuffer(),T=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let v=s[x.id],w=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,C=w.length;R<C;R++){let B=Array.isArray(w[R])?w[R]:[w[R]];for(let _=0,b=B.length;_<b;_++){let N=B[_];if(f(N,R,_,T)===!0){let I=N.__offset,O=Array.isArray(N.value)?N.value:[N.value],L=0;for(let S=0;S<O.length;S++){let U=O[S],V=y(U);typeof U=="number"||typeof U=="boolean"?(N.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,I+L,N.__data)):U.isMatrix3?(N.__data[0]=U.elements[0],N.__data[1]=U.elements[1],N.__data[2]=U.elements[2],N.__data[3]=0,N.__data[4]=U.elements[3],N.__data[5]=U.elements[4],N.__data[6]=U.elements[5],N.__data[7]=0,N.__data[8]=U.elements[6],N.__data[9]=U.elements[7],N.__data[10]=U.elements[8],N.__data[11]=0):(U.toArray(N.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,v,w,T){let R=x.value,C=v+"_"+w;if(T[C]===void 0)return typeof R=="number"||typeof R=="boolean"?T[C]=R:T[C]=R.clone(),!0;{let B=T[C];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return T[C]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(x){let v=x.uniforms,w=0,T=16;for(let C=0,B=v.length;C<B;C++){let _=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,N=_.length;b<N;b++){let I=_[b],O=Array.isArray(I.value)?I.value:[I.value];for(let L=0,S=O.length;L<S;L++){let U=O[L],V=y(U),q=w%T;q!==0&&T-q<V.boundary&&(w+=T-q),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=V.storage}}}let R=w%T;return R>0&&(w+=T-R),x.__size=w,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){let v=x.target;v.removeEventListener("dispose",p);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Ar=class{constructor(e={}){let{canvas:t=Fx(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Bs,this.toneMappingExposure=1;let v=this,w=!1,T=0,R=0,C=null,B=-1,_=null,b=new Mt,N=new Mt,I=null,O=new Ne(0),L=0,S=t.width,U=t.height,V=1,q=null,W=null,J=new Mt(0,0,S,U),Q=new Mt(0,0,S,U),ie=!1,G=new vo,j=!1,te=!1,ne=null,H=new Ae,oe=new Ze,de=new D,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return C===null?V:1}let X=i;function Kt(E,z){for(let Z=0;Z<E.length;Z++){let K=E[Z],$=t.getContext(K,z);if($!==null)return $}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ye,!1),X===null){let z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),X=Kt(z,E),X===null)throw Kt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Pe,ze,Ee,zt,Qe,P,M,Y,le,ae,ce,Re,xe,Me,Oe,et,re,bt,at,He,Ie,Se,Ye,xt;function Xt(){Pe=new Yw(X),ze=new Vw(X,Pe,e),Pe.init(ze),Se=new ES(X,Pe,ze),Ee=new SS(X,Pe,ze),zt=new Kw(X),Qe=new hS,P=new AS(X,Pe,Ee,Qe,ze,Se,zt),M=new Ww(v),Y=new $w(v),le=new rb(X,ze),Ye=new zw(X,Pe,le,ze),ae=new jw(X,le,zt,Ye),ce=new tM(X,ae,le,zt),at=new eM(X,ze,P),et=new Gw(Qe),Re=new dS(v,M,Y,Pe,ze,Ye,et),xe=new RS(v,Qe),Me=new pS,Oe=new bS(Pe,ze),bt=new Bw(v,M,Y,Ee,ce,h,l),re=new MS(v,ce,ze),xt=new CS(X,zt,ze,Ee),He=new Hw(X,Pe,zt,ze),Ie=new Zw(X,Pe,zt,ze),zt.programs=Re.programs,v.capabilities=ze,v.extensions=Pe,v.properties=Qe,v.renderLists=Me,v.shadowMap=re,v.state=Ee,v.info=zt}Xt();let nt=new $d(v,X);this.xr=nt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let E=Pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(S,U,!1))},this.getSize=function(E){return E.set(S,U)},this.setSize=function(E,z,Z=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=E,U=z,t.width=Math.floor(E*V),t.height=Math.floor(z*V),Z===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(S*V,U*V).floor()},this.setDrawingBufferSize=function(E,z,Z){S=E,U=z,V=Z,t.width=Math.floor(E*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,z,Z,K){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,z,Z,K),Ee.viewport(b.copy(J).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,z,Z,K){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,z,Z,K),Ee.scissor(N.copy(Q).multiplyScalar(V).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){Ee.setScissorTest(ie=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(E=!0,z=!0,Z=!0){let K=0;if(E){let $=!1;if(C!==null){let we=C.texture.format;$=we===Lg||we===Cg||we===Rg}if($){let we=C.texture.type,Ce=we===zs||we===Os||we===dh||we===xr||we===Eg||we===Tg,ke=bt.getClearColor(),Fe=bt.getClearAlpha(),tt=ke.r,Ge=ke.g,Xe=ke.b;Ce?(f[0]=tt,f[1]=Ge,f[2]=Xe,f[3]=Fe,X.clearBufferuiv(X.COLOR,0,f)):(g[0]=tt,g[1]=Ge,g[2]=Xe,g[3]=Fe,X.clearBufferiv(X.COLOR,0,g))}else K|=X.COLOR_BUFFER_BIT}z&&(K|=X.DEPTH_BUFFER_BIT),Z&&(K|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Me.dispose(),Oe.dispose(),Qe.dispose(),M.dispose(),Y.dispose(),ce.dispose(),Ye.dispose(),xt.dispose(),Re.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",In),nt.removeEventListener("sessionend",Lt),ne&&(ne.dispose(),ne=null),Nn.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=zt.autoReset,z=re.enabled,Z=re.autoUpdate,K=re.needsUpdate,$=re.type;Xt(),zt.autoReset=E,re.enabled=z,re.autoUpdate=Z,re.needsUpdate=K,re.type=$}function ye(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ve(E){let z=E.target;z.removeEventListener("dispose",ve),Ue(z)}function Ue(E){De(E),Qe.remove(E)}function De(E){let z=Qe.get(E).programs;z!==void 0&&(z.forEach(function(Z){Re.releaseProgram(Z)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Z,K,$,we){z===null&&(z=be);let Ce=$.isMesh&&$.matrixWorld.determinant()<0,ke=bv(E,z,Z,K,$);Ee.setMaterial(K,Ce);let Fe=Z.index,tt=1;if(K.wireframe===!0){if(Fe=ae.getWireframeAttribute(Z),Fe===void 0)return;tt=2}let Ge=Z.drawRange,Xe=Z.attributes.position,jt=Ge.start*tt,Zn=(Ge.start+Ge.count)*tt;we!==null&&(jt=Math.max(jt,we.start*tt),Zn=Math.min(Zn,(we.start+we.count)*tt)),Fe!==null?(jt=Math.max(jt,0),Zn=Math.min(Zn,Fe.count)):Xe!=null&&(jt=Math.max(jt,0),Zn=Math.min(Zn,Xe.count));let hn=Zn-jt;if(hn<0||hn===1/0)return;Ye.setup($,K,ke,Z,Fe);let es,Ht=He;if(Fe!==null&&(es=le.get(Fe),Ht=Ie,Ht.setIndex(es)),$.isMesh)K.wireframe===!0?(Ee.setLineWidth(K.wireframeLinewidth*qe()),Ht.setMode(X.LINES)):Ht.setMode(X.TRIANGLES);else if($.isLine){let it=K.linewidth;it===void 0&&(it=1),Ee.setLineWidth(it*qe()),$.isLineSegments?Ht.setMode(X.LINES):$.isLineLoop?Ht.setMode(X.LINE_LOOP):Ht.setMode(X.LINE_STRIP)}else $.isPoints?Ht.setMode(X.POINTS):$.isSprite&&Ht.setMode(X.TRIANGLES);if($.isBatchedMesh)Ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ht.renderInstances(jt,hn,$.count);else if(Z.isInstancedBufferGeometry){let it=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Wu=Math.min(Z.instanceCount,it);Ht.renderInstances(jt,hn,Wu)}else Ht.render(jt,hn)};function Rt(E,z,Z){E.transparent===!0&&E.side===On&&E.forceSinglePass===!1?(E.side=Gn,E.needsUpdate=!0,Ml(E,z,Z),E.side=Fi,E.needsUpdate=!0,Ml(E,z,Z),E.side=On):Ml(E,z,Z)}this.compile=function(E,z,Z=null){Z===null&&(Z=E),p=Oe.get(Z),p.init(),x.push(p),Z.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),E!==Z&&E.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);let K=new Set;return E.traverse(function($){let we=$.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){let ke=we[Ce];Rt(ke,Z,$),K.add(ke)}else Rt(we,Z,$),K.add(we)}),x.pop(),p=null,K},this.compileAsync=function(E,z,Z=null){let K=this.compile(E,z,Z);return new Promise($=>{function we(){if(K.forEach(function(Ce){Qe.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){$(E);return}setTimeout(we,10)}Pe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ct=null;function dn(E){Ct&&Ct(E)}function In(){Nn.stop()}function Lt(){Nn.start()}let Nn=new Fg;Nn.setAnimationLoop(dn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(E){Ct=E,nt.setAnimationLoop(E),E===null?Nn.stop():Nn.start()},nt.addEventListener("sessionstart",In),nt.addEventListener("sessionend",Lt),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(z),z=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,z,C),p=Oe.get(E,x.length),p.init(),x.push(p),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G.setFromProjectionMatrix(H),te=this.localClippingEnabled,j=et.init(this.clippingPlanes,te),y=Me.get(E,m.length),y.init(),m.push(y),ki(E,z,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(q,W),this.info.render.frame++,j===!0&&et.beginShadows();let Z=p.state.shadowsArray;if(re.render(Z,E,z),j===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(y,E),p.setupLights(v._useLegacyLights),z.isArrayCamera){let K=z.cameras;for(let $=0,we=K.length;$<we;$++){let Ce=K[$];Lp(y,E,Ce,Ce.viewport)}}else Lp(y,E,z);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,z),Ye.resetDefaultState(),B=-1,_=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function ki(E,z,Z,K){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){K&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);let Ce=ce.update(E),ke=E.material;ke.visible&&y.push(E,Ce,ke,Z,de.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){let Ce=ce.update(E),ke=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),de.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),de.copy(Ce.boundingSphere.center)),de.applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(ke)){let Fe=Ce.groups;for(let tt=0,Ge=Fe.length;tt<Ge;tt++){let Xe=Fe[tt],jt=ke[Xe.materialIndex];jt&&jt.visible&&y.push(E,Ce,jt,Z,de.z,Xe)}}else ke.visible&&y.push(E,Ce,ke,Z,de.z,null)}}let we=E.children;for(let Ce=0,ke=we.length;Ce<ke;Ce++)ki(we[Ce],z,Z,K)}function Lp(E,z,Z,K){let $=E.opaque,we=E.transmissive,Ce=E.transparent;p.setupLightsView(Z),j===!0&&et.setGlobalState(v.clippingPlanes,Z),we.length>0&&xv($,we,z,Z),K&&Ee.viewport(b.copy(K)),$.length>0&&wl($,z,Z),we.length>0&&wl(we,z,Z),Ce.length>0&&wl(Ce,z,Z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function xv(E,z,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let we=ze.isWebGL2;ne===null&&(ne=new us(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?mo:zs,minFilter:Hs,samples:we?4:0})),v.getDrawingBufferSize(oe),we?ne.setSize(oe.x,oe.y):ne.setSize(sc(oe.x),sc(oe.y));let Ce=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(O),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let ke=v.toneMapping;v.toneMapping=Bs,wl(E,Z,K),P.updateMultisampleRenderTarget(ne),P.updateRenderTargetMipmap(ne);let Fe=!1;for(let tt=0,Ge=z.length;tt<Ge;tt++){let Xe=z[tt],jt=Xe.object,Zn=Xe.geometry,hn=Xe.material,es=Xe.group;if(hn.side===On&&jt.layers.test(K.layers)){let Ht=hn.side;hn.side=Gn,hn.needsUpdate=!0,Pp(jt,Z,K,Zn,hn,es),hn.side=Ht,hn.needsUpdate=!0,Fe=!0}}Fe===!0&&(P.updateMultisampleRenderTarget(ne),P.updateRenderTargetMipmap(ne)),v.setRenderTarget(Ce),v.setClearColor(O,L),v.toneMapping=ke}function wl(E,z,Z){let K=z.isScene===!0?z.overrideMaterial:null;for(let $=0,we=E.length;$<we;$++){let Ce=E[$],ke=Ce.object,Fe=Ce.geometry,tt=K===null?Ce.material:K,Ge=Ce.group;ke.layers.test(Z.layers)&&Pp(ke,z,Z,Fe,tt,Ge)}}function Pp(E,z,Z,K,$,we){E.onBeforeRender(v,z,Z,K,$,we),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(v,z,Z,K,E,we),$.transparent===!0&&$.side===On&&$.forceSinglePass===!1?($.side=Gn,$.needsUpdate=!0,v.renderBufferDirect(Z,z,K,$,E,we),$.side=Fi,$.needsUpdate=!0,v.renderBufferDirect(Z,z,K,$,E,we),$.side=On):v.renderBufferDirect(Z,z,K,$,E,we),E.onAfterRender(v,z,Z,K,$,we)}function Ml(E,z,Z){z.isScene!==!0&&(z=be);let K=Qe.get(E),$=p.state.lights,we=p.state.shadowsArray,Ce=$.state.version,ke=Re.getParameters(E,$.state,we,z,Z),Fe=Re.getProgramCacheKey(ke),tt=K.programs;K.environment=E.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(E.isMeshStandardMaterial?Y:M).get(E.envMap||K.environment),tt===void 0&&(E.addEventListener("dispose",ve),tt=new Map,K.programs=tt);let Ge=tt.get(Fe);if(Ge!==void 0){if(K.currentProgram===Ge&&K.lightsStateVersion===Ce)return Np(E,ke),Ge}else ke.uniforms=Re.getUniforms(E),E.onBuild(Z,ke,v),E.onBeforeCompile(ke,v),Ge=Re.acquireProgram(ke,Fe),tt.set(Fe,Ge),K.uniforms=ke.uniforms;let Xe=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=et.uniform),Np(E,ke),K.needsLights=wv(E),K.lightsStateVersion=Ce,K.needsLights&&(Xe.ambientLightColor.value=$.state.ambient,Xe.lightProbe.value=$.state.probe,Xe.directionalLights.value=$.state.directional,Xe.directionalLightShadows.value=$.state.directionalShadow,Xe.spotLights.value=$.state.spot,Xe.spotLightShadows.value=$.state.spotShadow,Xe.rectAreaLights.value=$.state.rectArea,Xe.ltc_1.value=$.state.rectAreaLTC1,Xe.ltc_2.value=$.state.rectAreaLTC2,Xe.pointLights.value=$.state.point,Xe.pointLightShadows.value=$.state.pointShadow,Xe.hemisphereLights.value=$.state.hemi,Xe.directionalShadowMap.value=$.state.directionalShadowMap,Xe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xe.spotShadowMap.value=$.state.spotShadowMap,Xe.spotLightMatrix.value=$.state.spotLightMatrix,Xe.spotLightMap.value=$.state.spotLightMap,Xe.pointShadowMap.value=$.state.pointShadowMap,Xe.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=Ge,K.uniformsList=null,Ge}function Ip(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=ya.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Np(E,z){let Z=Qe.get(E);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function bv(E,z,Z,K,$){z.isScene!==!0&&(z=be),P.resetTextureUnits();let we=z.fog,Ce=K.isMeshStandardMaterial?z.environment:null,ke=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:rn,Fe=(K.isMeshStandardMaterial?Y:M).get(K.envMap||Ce),tt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!Z.morphAttributes.position,jt=!!Z.morphAttributes.normal,Zn=!!Z.morphAttributes.color,hn=Bs;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(hn=v.toneMapping);let es=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ht=es!==void 0?es.length:0,it=Qe.get(K),Wu=p.state.lights;if(j===!0&&(te===!0||E!==_)){let li=E===_&&K.id===B;et.setState(K,E,li)}let $t=!1;K.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Wu.state.version||it.outputColorSpace!==ke||$.isBatchedMesh&&it.batching===!1||!$.isBatchedMesh&&it.batching===!0||$.isInstancedMesh&&it.instancing===!1||!$.isInstancedMesh&&it.instancing===!0||$.isSkinnedMesh&&it.skinning===!1||!$.isSkinnedMesh&&it.skinning===!0||$.isInstancedMesh&&it.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&it.instancingColor===!1&&$.instanceColor!==null||it.envMap!==Fe||K.fog===!0&&it.fog!==we||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==et.numPlanes||it.numIntersection!==et.numIntersection)||it.vertexAlphas!==tt||it.vertexTangents!==Ge||it.morphTargets!==Xe||it.morphNormals!==jt||it.morphColors!==Zn||it.toneMapping!==hn||ze.isWebGL2===!0&&it.morphTargetsCount!==Ht)&&($t=!0):($t=!0,it.__version=K.version);let ur=it.currentProgram;$t===!0&&(ur=Ml(K,z,$));let Dp=!1,eo=!1,qu=!1,_n=ur.getUniforms(),dr=it.uniforms;if(Ee.useProgram(ur.program)&&(Dp=!0,eo=!0,qu=!0),K.id!==B&&(B=K.id,eo=!0),Dp||_!==E){_n.setValue(X,"projectionMatrix",E.projectionMatrix),_n.setValue(X,"viewMatrix",E.matrixWorldInverse);let li=_n.map.cameraPosition;li!==void 0&&li.setValue(X,de.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&_n.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&_n.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,eo=!0,qu=!0)}if($.isSkinnedMesh){_n.setOptional(X,$,"bindMatrix"),_n.setOptional(X,$,"bindMatrixInverse");let li=$.skeleton;li&&(ze.floatVertexTextures?(li.boneTexture===null&&li.computeBoneTexture(),_n.setValue(X,"boneTexture",li.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(_n.setOptional(X,$,"batchingTexture"),_n.setValue(X,"batchingTexture",$._matricesTexture,P));let Xu=Z.morphAttributes;if((Xu.position!==void 0||Xu.normal!==void 0||Xu.color!==void 0&&ze.isWebGL2===!0)&&at.update($,Z,ur),(eo||it.receiveShadow!==$.receiveShadow)&&(it.receiveShadow=$.receiveShadow,_n.setValue(X,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(dr.envMap.value=Fe,dr.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),eo&&(_n.setValue(X,"toneMappingExposure",v.toneMappingExposure),it.needsLights&&_v(dr,qu),we&&K.fog===!0&&xe.refreshFogUniforms(dr,we),xe.refreshMaterialUniforms(dr,K,V,U,ne),ya.upload(X,Ip(it),dr,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ya.upload(X,Ip(it),dr,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&_n.setValue(X,"center",$.center),_n.setValue(X,"modelViewMatrix",$.modelViewMatrix),_n.setValue(X,"normalMatrix",$.normalMatrix),_n.setValue(X,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let li=K.uniformsGroups;for(let $u=0,Mv=li.length;$u<Mv;$u++)if(ze.isWebGL2){let kp=li[$u];xt.update(kp,ur),xt.bind(kp,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function _v(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function wv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,z,Z){Qe.get(E.texture).__webglTexture=z,Qe.get(E.depthTexture).__webglTexture=Z;let K=Qe.get(E);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){let Z=Qe.get(E);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Z=0){C=E,T=z,R=Z;let K=!0,$=null,we=!1,Ce=!1;if(E){let Fe=Qe.get(E);Fe.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(X.FRAMEBUFFER,null),K=!1):Fe.__webglFramebuffer===void 0?P.setupRenderTarget(E):Fe.__hasExternalTextures&&P.rebindTextures(E,Qe.get(E.texture).__webglTexture,Qe.get(E.depthTexture).__webglTexture);let tt=E.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);let Ge=Qe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?$=Ge[z][Z]:$=Ge[z],we=!0):ze.isWebGL2&&E.samples>0&&P.useMultisampledRTT(E)===!1?$=Qe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?$=Ge[Z]:$=Ge,b.copy(E.viewport),N.copy(E.scissor),I=E.scissorTest}else b.copy(J).multiplyScalar(V).floor(),N.copy(Q).multiplyScalar(V).floor(),I=ie;if(Ee.bindFramebuffer(X.FRAMEBUFFER,$)&&ze.drawBuffers&&K&&Ee.drawBuffers(E,$),Ee.viewport(b),Ee.scissor(N),Ee.setScissorTest(I),we){let Fe=Qe.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+z,Fe.__webglTexture,Z)}else if(Ce){let Fe=Qe.get(E.texture),tt=z||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Fe.__webglTexture,Z||0,tt)}B=-1},this.readRenderTargetPixels=function(E,z,Z,K,$,we,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Qe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(ke=ke[Ce]),ke){Ee.bindFramebuffer(X.FRAMEBUFFER,ke);try{let Fe=E.texture,tt=Fe.format,Ge=Fe.type;if(tt!==ui&&Se.convert(tt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=Ge===mo&&(Pe.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ge!==zs&&Se.convert(Ge)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ls&&(ze.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-K&&Z>=0&&Z<=E.height-$&&X.readPixels(z,Z,K,$,Se.convert(tt),Se.convert(Ge),we)}finally{let Fe=C!==null?Qe.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(X.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(E,z,Z=0){let K=Math.pow(2,-Z),$=Math.floor(z.image.width*K),we=Math.floor(z.image.height*K);P.setTexture2D(z,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,E.x,E.y,$,we),Ee.unbindTexture()},this.copyTextureToTexture=function(E,z,Z,K=0){let $=z.image.width,we=z.image.height,Ce=Se.convert(Z.format),ke=Se.convert(Z.type);P.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),z.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,K,E.x,E.y,$,we,Ce,ke,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,K,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,K,E.x,E.y,Ce,ke,z.image),K===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,z,Z,K,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=E.max.x-E.min.x+1,Ce=E.max.y-E.min.y+1,ke=E.max.z-E.min.z+1,Fe=Se.convert(K.format),tt=Se.convert(K.type),Ge;if(K.isData3DTexture)P.setTexture3D(K,0),Ge=X.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)P.setTexture2DArray(K,0),Ge=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);let Xe=X.getParameter(X.UNPACK_ROW_LENGTH),jt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Zn=X.getParameter(X.UNPACK_SKIP_PIXELS),hn=X.getParameter(X.UNPACK_SKIP_ROWS),es=X.getParameter(X.UNPACK_SKIP_IMAGES),Ht=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ht.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ht.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,E.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,E.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,E.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(Ge,$,z.x,z.y,z.z,we,Ce,ke,Fe,tt,Ht.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ge,$,z.x,z.y,z.z,we,Ce,ke,Fe,Ht.data)):X.texSubImage3D(Ge,$,z.x,z.y,z.z,we,Ce,ke,Fe,tt,Ht),X.pixelStorei(X.UNPACK_ROW_LENGTH,Xe),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,jt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zn),X.pixelStorei(X.UNPACK_SKIP_ROWS,hn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,es),$===0&&K.generateMipmaps&&X.generateMipmap(Ge),Ee.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,Ee.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===fh?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===Cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?_r:Ng}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_r?Vt:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yd=class extends Ar{};Yd.prototype.isWebGL1Renderer=!0;var Aa=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},xo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new D,bo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ui(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ig=new D,sg=new Mt,rg=new Mt,LS=new D,ag=new Ae,Xl=new D,wd=new ti,og=new Ae,Md=new Sr,pc=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vp,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xl),this.boundingBox.expandByPoint(Xl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xl),this.boundingSphere.expandByPoint(Xl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wd.copy(this.boundingSphere),wd.applyMatrix4(s),e.ray.intersectsSphere(wd)!==!1&&(og.copy(s).invert(),Md.copy(e.ray).applyMatrix4(og),!(this.boundingBox!==null&&Md.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Md)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;sg.fromBufferAttribute(s.attributes.skinIndex,e),rg.fromBufferAttribute(s.attributes.skinWeight,e),ig.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=rg.getComponent(r);if(a!==0){let o=sg.getComponent(r);ag.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(LS.copy(ig).applyMatrix4(ag),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},_o=class extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},jd=class extends vn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=sn,u=sn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lg=new Ae,PS=new Ae,mc=class n{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ae;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:PS;lg.multiplyMatrices(o,t[r]),lg.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new jd(t,e,e,ui,ls);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new _o),this.bones.push(a),this.boneInverses.push(new Ae().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Er=class extends It{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},da=new Ae,cg=new Ae,$l=[],ug=new fi,IS=new Ae,ro=new St,ao=new ti,gc=class extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,IS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,da),ug.copy(e.boundingBox).applyMatrix4(da),this.boundingBox.union(ug)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,da),ao.copy(e.boundingSphere).applyMatrix4(da),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(i),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,da),cg.multiplyMatrices(i,da),ro.matrixWorld=cg,ro.raycast(e,$l);for(let a=0,o=$l.length;a<o;a++){let l=$l[a];l.instanceId=r,l.object=this,t.push(l)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var wo=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dg=new D,hg=new D,fg=new Ae,Sd=new Sr,Yl=new ti,Ea=class extends kt{constructor(e=new qn,t=new wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)dg.fromBufferAttribute(t,s-1),hg.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=dg.distanceTo(hg);e.setAttribute("lineDistance",new hi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),Yl.radius+=r,e.ray.intersectsSphere(Yl)===!1)return;fg.copy(s).invert(),Sd.copy(e.ray).applyMatrix4(fg);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,u=new D,d=new D,h=new D,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=m,w=x-1;v<w;v+=f){let T=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(p,T),u.fromBufferAttribute(p,R),Sd.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(h);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let v=m,w=x-1;v<w;v+=f){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Sd.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},pg=new D,mg=new D,yc=class extends Ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)pg.fromBufferAttribute(t,s),mg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+pg.distanceTo(mg);e.setAttribute("lineDistance",new hi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},vc=class extends Ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Mo=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gg=new Ae,Zd=new Sr,jl=new ti,Zl=new D,xc=class extends kt{constructor(e=new qn,t=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(s),jl.radius+=r,e.ray.intersectsSphere(jl)===!1)return;gg.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(gg);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,y=f;g<y;g++){let p=c.getX(g);Zl.fromBufferAttribute(d,p),yg(Zl,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,y=f;g<y;g++)Zl.fromBufferAttribute(d,g),yg(Zl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yg(n,e,t,i,s,r,a){let o=Zd.distanceSqToPoint(n);if(o<t){let l=new D;Zd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var bc=class extends vn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ta=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pi=class extends Ta{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var So=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Kl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function NS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function DS(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function vg(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function Wg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kd=class extends Ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pm,endingEnd:pm}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mm:r=e,o=2*t-i;break;case gm:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mm:a=e,l=2*i-t;break;case gm:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-h*p+2*h*y-h*g,x=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,v=(-1-f)*p+(1.5+f)*y+.5*g,w=f*p-f*y;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+x*a[c+T]+v*a[l+T]+w*a[d+T];return r}},Jd=class extends Ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Qd=class extends Ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},mi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kl(t,this.TimeBufferType),this.values=Kl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kl(e.times,Array),values:Kl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case Qu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&NS(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qu,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Mr;var qs=class extends mi{};qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=_a;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends mi{};_c.prototype.ValueTypeName="color";var hs=class extends mi{};hs.prototype.ValueTypeName="number";var eh=class extends Ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)ot.slerpFlat(r,0,a,c-o,a,c,l);return r}},Bi=class extends mi{InterpolantFactoryMethodLinear(e){return new eh(this.times,this.values,this.getValueSize(),e)}};Bi.prototype.ValueTypeName="quaternion";Bi.prototype.DefaultInterpolation=Mr;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends mi{};Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=_a;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends mi{};fs.prototype.ValueTypeName="vector";var wc=class{constructor(e,t=-1,i,s=fx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(OS(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(mi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=DS(l);l=vg(l,1,u),c=vg(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new hs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,h,f,g,y){if(f.length!==0){let p=[],m=[];Wg(f,p,m,g),p.length!==0&&y.push(new d(h,p,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)f[h[g].morphTargets[y]]=-1;for(let y in f){let p=[],m=[];for(let x=0;x!==h[g].morphTargets.length;++x){let v=h[g];p.push(v.time),m.push(v.morphTarget===y?1:0)}s.push(new hs(".morphTargetInfluence["+y+"]",p,m))}l=f.length*a}else{let f=".bones["+t[d].name+"]";i(fs,f+".position",h,"pos",s),i(Bi,f+".quaternion",h,"rot",s),i(fs,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function kS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return _c;case"quaternion":return Bi;case"bool":case"boolean":return qs;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function OS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=kS(n.type);if(n.times===void 0){let t=[],i=[];Wg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Us={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},th=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},US=new th,ps=class{constructor(e){this.manager=e!==void 0?e:US,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ps.DEFAULT_MATERIAL_NAME="__DEFAULT";var as={},nh=class extends Error{constructor(e,t){super(e),this.response=t}},Ao=class extends ps{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Us.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(as[e]!==void 0){as[e].push({onLoad:t,onProgress:i,onError:s});return}as[e]=[],as[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=as[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0,y=0,p=new ReadableStream({start(m){x();function x(){d.read().then(({done:v,value:w})=>{if(v)m.close();else{y+=w.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let R=0,C=u.length;R<C;R++){let B=u[R];B.onProgress&&B.onProgress(T)}m.enqueue(w),x()}})}}});return new Response(p)}else throw new nh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Us.add(e,c);let u=as[e];delete as[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=as[e];if(u===void 0)throw this.manager.itemError(e),c;delete as[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ih=class extends ps{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Us.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=go("img");function l(){u(),Us.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Ra=class extends ps{constructor(e){super(e)}load(e,t,i,s){let r=new vn,a=new ih(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ca=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Mc=class extends Ca{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ad=new Ae,xg=new D,bg=new D,Eo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;xg.setFromMatrixPosition(e.matrixWorld),t.position.copy(xg),bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bg),t.updateMatrixWorld(),Ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sh=class extends Eo{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=wa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Sc=class extends Ca{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new sh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_g=new Ae,oo=new D,Ed=new D,rh=class extends Eo{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),oo.setFromMatrixPosition(e.matrixWorld),i.position.copy(oo),Ed.copy(i.position),Ed.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ed),i.updateMatrixWorld(),s.makeTranslation(-oo.x,-oo.y,-oo.z),_g.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_g)}},Ac=class extends Ca{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ah=class extends Eo{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},La=class extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $s=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ec=class extends ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Us.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Us.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Us.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Us.add(e,l),r.manager.itemStart(e)}};var gh="\\[\\]\\.:\\/",FS=new RegExp("["+gh+"]","g"),yh="[^"+gh+"]",BS="[^"+gh.replace("\\.","")+"]",zS=/((?:WC+[\/:])*)/.source.replace("WC",yh),HS=/(WCOD+)?/.source.replace("WCOD",BS),VS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),GS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),WS=new RegExp("^"+zS+HS+VS+GS+"$"),qS=["material","materials","bones","map"],oh=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FS,"")}static parseTrackName(e){let t=WS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=oh;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JE=new Float32Array(1);var To=class{constructor(e,t,i=0,s=1/0){this.ray=new Sr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return lh(e,this,i,t),i.sort(wg),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)lh(e[s],this,i,t);return i.sort(wg),i}};function wg(n,e){return n.distance-e.distance}function lh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)lh(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Xn=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function qg(n){if(n.comfortVersion===Xn.version)return n;let e={...n,comfortVersion:Xn.version,winDist:Xn.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=Xn.windowScale),e}function XS(n,e){return n>0&&e>0?n/e:16/9}function Po(n,e,t){let i=XS(n,e),s=t>0?t:i,r,a;s>=i?(r=n,a=n/s):(a=e,r=e*s);let o=Math.round((n-r)/2),l=Math.round((e-a)/2),c=Math.round(r),u=Math.round(a);return{x:o,y:l,w:c,h:u,u0:o/n,v0:l/e,uw:c/n,vh:u/e}}function vh(n,e,t,i,s){let r=Po(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var zi=4096,Tn={width:1200,height:800},Ys=160;function $S(n,e=zi){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let a=Math.ceil(t)+Ys*2,o=Math.ceil(i)+Ys*2,l=s==="window"?r%3*1360:s==="slot"?1360:0,c=s==="dock"?800:s==="keyboard"?3160:s==="slot"?0:1200+Math.floor(r/3)*980,u=s==="dock"?400:s==="keyboard"?936:980;if(r>5||a>(s==="window"||s==="slot"?1360:e)||o>u||l+a>e||c+o>e)throw new Error("Workspace texture is full; close a window first.");return[l,c,a,o]})}var Pc=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var d,h,f;if(window.__gorillaStereoOverlay){let g=2*Math.tan(Co.degToRad(36)),p=[{overlay:!0,matrix:new Ae().makeTranslation(0,0,-1).multiply(new Ae().makeScale(g*1.78,g*1.48,1)).toArray(),rect:[0,0,Tn.width/2,Tn.height],uvR:[Tn.width/2/zi,1-Tn.height/zi,Tn.width/2/zi,Tn.height/zi]}],m=JSON.stringify(p),x="[]";(m!==this.sent||x!==this.sentSpecs)&&(this.sent=m,this.sentSpecs=x,(h=(d=window.NativeXR)==null?void 0:d.frame)==null||h.call(d,m,x));return}e.updateMatrixWorld(!0);let t=[];e.traverse(g=>{g.isCSS3DObject&&g.visible&&t.push(g)});for(let g of t)g.element.parentNode!==this.domElement&&this.domElement.append(g.element),g.element.style.transform!=="none"&&(g.element.style.transform="none");for(let g of this.slots.keys())t.some(y=>y.id===g)||this.slots.delete(g);let i=t.map(g=>{let y=g.element.classList.contains("dock")?"dock":g.element.classList.contains("kb")?"keyboard":g.element.classList.contains("win-drop-slot")?"slot":"window";if(y==="window"&&!this.slots.has(g.id)){let x=new Set(this.slots.values()),v=0;for(;x.has(v);)v++;this.slots.set(g.id,v)}let p=y==="window"||y==="slot"?1040:zi-Ys*2,m=(y==="dock"?400:y==="keyboard"?936:980)-Ys*2;return{width:Math.min(g.element.offsetWidth,p),height:Math.min(g.element.offsetHeight,m),kind:y,slot:this.slots.get(g.id)||0}}),s;try{s=$S(i)}catch(g){this.lastError!==g.message&&(this.lastError=g.message,(f=window.nextvrMessage)==null||f.call(window,g.message));return}let r=[],a=[];t.forEach((g,y)=>{let p=g.element,[m,x,v,w]=s[y],T=`${m+Ys}px`,R=`${x+Ys}px`;p.style.left!==T&&(p.style.left=T),p.style.top!==R&&(p.style.top=R);let C=g.matrixWorld.clone().multiply(new Ae().makeScale(v,w,1)),B=+(p.dataset.curve||0);r.push({id:p.dataset.windowId||(i[y].kind==="dock"?"dock":i[y].kind),matrix:C.toArray(),rect:s[y],curve:B,glass:[Ys/v,Ys/w,i[y].width/v,i[y].height/w]});let _=p.getBoundingClientRect();for(let b of p.querySelectorAll("[data-native-app]")){let N=b.getBoundingClientRect();if(!N.width||!N.height)continue;let I=+(b.dataset.aspect||0),O=Po(N.width,N.height,I),L=g.matrixWorld.clone().multiply(new Ae().makeTranslation(N.left-_.left+O.x+O.w/2-i[y].width/2,i[y].height/2-(N.top-_.top+O.y+O.h/2),.5)).multiply(new Ae().makeScale(O.w,O.h,1));r.push({browser:"app:"+b.dataset.nativeApp,matrix:L.toArray(),rect:[0,0,Math.round(N.width),Math.round(N.height)],curve:+(p.dataset.curve||0),uv:[O.u0,O.v0,O.uw,O.vh]});let S=[O.u0,O.v0,O.uw,O.vh].map(U=>U.toFixed(5)).join(",");b.dataset.uv!==S&&(b.dataset.uv=S,this.last=0)}for(let b of p.querySelectorAll("[data-native-xr]")){let N=b.getBoundingClientRect();if(!N.width||!N.height)continue;let I="xr:"+b.dataset.nativeXr,O=+(b.dataset.aspect||0),L=Po(N.width,N.height,O),S=g.matrixWorld.clone().multiply(new Ae().makeTranslation(N.left-_.left+L.x+L.w/2-i[y].width/2,i[y].height/2-(N.top-_.top+L.y+L.h/2),.5)).multiply(new Ae().makeScale(L.w,L.h,1));r.push({browser:I,matrix:S.toArray(),rect:[0,0,Math.round(N.width),Math.round(N.height)],curve:+(p.dataset.curve||0),uv:[L.u0,L.v0,L.uw/2,L.vh],uvR:[L.u0+L.uw/2,L.v0,L.uw/2,L.vh]})}for(let b of p.querySelectorAll("[data-native-browser]")){let N=b.getBoundingClientRect();if(!N.width||!N.height)continue;let I=b.dataset.nativeBrowser,O=b.dataset.url;if(!O)continue;let L=Math.round(N.width),S=Math.round(N.height),U={left:N.left,top:N.top,right:N.right,bottom:N.bottom};for(let J=b.parentElement;J&&J!==p;J=J.parentElement){let Q=getComputedStyle(J);if(/(auto|scroll|hidden)/.test(Q.overflow+Q.overflowY)){let ie=J.getBoundingClientRect();U.left=Math.max(U.left,ie.left),U.top=Math.max(U.top,ie.top),U.right=Math.min(U.right,ie.right),U.bottom=Math.min(U.bottom,ie.bottom)}}a.push({id:I,url:O,width:L,height:S});let V=U.right-U.left,q=U.bottom-U.top;if(V<=0||q<=0)continue;let W=g.matrixWorld.clone().multiply(new Ae().makeTranslation(U.left-_.left+V/2-i[y].width/2,i[y].height/2-(U.top-_.top+q/2),.5)).multiply(new Ae().makeScale(V,q,1));r.push({browser:I,matrix:W.toArray(),rect:[0,0,L,S],curve:+(p.dataset.curve||0),homeOverlay:b.dataset.homeOverlay==="1",uv:[(U.left-N.left)/L,(N.bottom-U.bottom)/S,V/L,q/S]})}});let o=2*Math.tan(Co.degToRad(36)),l=new Ae().makeTranslation(0,0,-1).multiply(new Ae().makeScale(o*1.5,o,1));if(window.__gorillaStereoOverlay){let g=new Ae().makeTranslation(0,0,-1).multiply(new Ae().makeScale(o*1.78,o*1.48,1));r.push({overlay:!0,matrix:g.toArray(),rect:[0,0,Tn.width/2,Tn.height],uvR:[Tn.width/2/zi,1-Tn.height/zi,Tn.width/2/zi,Tn.height/zi]})}else r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,Tn.width,Tn.height]});let c=performance.now(),u=document.documentElement.dataset.qualityTier||document.documentElement.dataset.quality;if(c-this.last>=({low:32,medium:24,auto:24,high:16}[u]||24)){this.last=c;let g=JSON.stringify(r),y=JSON.stringify(a);(g!==this.sent||y!==this.sentSpecs)&&(this.sent=g,this.sentSpecs=y,window.NativeXR.frame(g,y))}}invalidate(){this.sent=this.sentSpecs=null,this.last=0}};var Ia=new D,Io=new D,YS=new D,Do=()=>null,Ic=()=>!0,$g=()=>null,No=null,Na=[],Xg=0;function Yg(n){let e=typeof performance<"u"?performance.now():Date.now(),t=n==null?void 0:n.hands;if(!Array.isArray(t)||t.length===0){e-Xg>400&&(Na.length=0);return}Na.length=0;for(let i of t){let s=(i==null?void 0:i.points)||(i==null?void 0:i.lm);if(!s)continue;let r=1,a=1,o=0,l=0;if(typeof s.length=="number"&&typeof s[0]=="number")for(let c=0;c+1<s.length;c+=3){let u=s[c],d=s[c+1];u<r&&(r=u),d<a&&(a=d),u>o&&(o=u),d>l&&(l=d)}else if(Array.isArray(s))for(let c of s)c&&(c.x<r&&(r=c.x),c.y<a&&(a=c.y),c.x>o&&(o=c.x),c.y>l&&(l=c.y));o>=r&&l>=a&&Na.push({x0:Math.max(0,r-.08),y0:Math.max(0,a-.08),x1:Math.min(1,o+.08),y1:Math.min(1,l+.08)})}Na.length>0&&(Xg=e)}var Nc={energy:0,lastA:null,onMotion(n){let e=(n==null?void 0:n.accelerationIncludingGravity)||(n==null?void 0:n.acceleration);if(!(!e||e.x===null)){if(this.lastA){let t=Math.hypot(e.x-this.lastA.x,e.y-this.lastA.y,e.z-this.lastA.z);t>.15?this.energy=Math.min(4,this.energy*.88+t):this.energy*=.88}this.lastA={x:e.x,y:e.y,z:e.z}}},moving(){return!this.lastA||this.energy>.3}},Wt={W:96,H:72,cv:null,ctx:null,prev:null,pos:new D,out:new D,prevOut:new D,stepDelta:new D,lastT:0,lastSc:0,_lastSentX:0,_lastSentZ:0,depth:2.05,init(){this.cv||typeof document>"u"||(this.cv=document.createElement("canvas"),this.cv.width=this.W,this.cv.height=this.H,this.ctx=this.cv.getContext("2d",{willReadFrequently:!0}))},reset(){var e,t,i;this.pos.set(0,0,0),this.out.set(0,0,0),this.prevOut.set(0,0,0),this.stepDelta.set(0,0,0),this.prev=null,this.lastSc=0,this._lastSentX=0,this._lastSentZ=0;let n=Do();n&&(n.position.x=0,n.position.z=0),typeof No=="function"?No(0,0,0):typeof window<"u"&&((t=(e=window.NativeXR)==null?void 0:e.resetSixDof)==null||t.call(e)),typeof window<"u"&&((i=window.__updateBackfaceStates)==null||i.call(window))},processGray(n,e){let t=this.W,i=this.H;if(!n||n.length<t*i)return null;if(!this.prev)return this.prev=new Float32Array(n),null;let s=this.prev,r=1e18,a=0,o=0;for(let p=-7;p<=7;p++)for(let m=-7;m<=7;m++){let x=0;for(let v=22;v<50&&x<r;v+=2){let w=v*t,T=(v+p)*t;for(let R=30;R<66;R+=2)x+=Math.abs(n[T+R+m]-s[w+R])}x<r&&(r=x,a=m,o=p)}let l=[],c=new Float32Array(25);for(let p=10;p<=i-18;p+=10)for(let m=10;m<=t-18;m+=11){let x=(m+4)/t,v=(p+4)/i,w=!1;for(let O of Na)if(x>O.x0&&x<O.x1&&v>O.y0&&v<O.y1){w=!0;break}if(w)continue;let T=0;for(let O=p;O<p+8;O++){let L=O*t;for(let S=m;S<m+7;S++)T+=Math.abs(s[L+S+1]-s[L+S])}if(T<200)continue;let R=1e18,C=0,B=0,_=0;for(let O=-2;O<=2;O++)for(let L=-2;L<=2;L++){let S=m+a+L,U=p+o+O;if(S<0||U<0||S+8>t||U+8>i){c[_++]=1e18;continue}let V=0;for(let q=0;q<8;q++){let W=(p+q)*t+m,J=(U+q)*t+S;for(let Q=0;Q<8;Q++)V+=Math.abs(n[J+Q]-s[W+Q])}c[_++]=V,V<R&&(R=V,C=L,B=O)}let b=(O,L)=>c[(L+2)*5+(O+2)],N=0,I=0;if(Math.abs(C)<2){let O=b(C-1,B),L=b(C+1,B),S=O-2*R+L;S>0&&O<1e17&&L<1e17&&(N=.5*(O-L)/S)}if(Math.abs(B)<2){let O=b(C,B-1),L=b(C,B+1),S=O-2*R+L;S>0&&O<1e17&&L<1e17&&(I=.5*(O-L)/S)}l.push({x:m+4-t*.5,y:p+4-i*.5,dx:a+C+N,dy:o+B+I})}if(this.prev.set(n),l.length<10)return null;let u=p=>{let m=0,x=0,v=0,w=0;for(let B of p)m+=B.dx,x+=B.dy,v+=B.x,w+=B.y;let T=p.length;m/=T,x/=T,v/=T,w/=T;let R=0,C=0;for(let B of p){let _=B.x-v,b=B.y-w;R+=(B.dx-m)*_+(B.dy-x)*b,C+=_*_+b*b}return{sc:C>0?R/C:0,mx:m,my:x,px:v,py:w}},d=u(l),h=l.map(p=>Math.hypot(p.dx-d.mx-d.sc*(p.x-d.px),p.dy-d.my-d.sc*(p.y-d.py))),f=[...h].sort((p,m)=>p-m),g=f[f.length>>1]||.5;if(g>.85)return null;let y=l.filter((p,m)=>h[m]<=Math.max(.35,g*2));return y.length<8?null:(d=u(y),this.applyFlowScale(d.sc,a,o,e,d.mx-a),{sc:d.sc,gx:a,gy:o})},applyFlowScale(n,e=0,t=0,i,s=0){if(!Ic())return;let r=Do();if(!r)return;if(!Number.isFinite(n)||Math.abs(n)<.004||Math.abs(n)>.24){this.lastSc=0;return}let a=this.lastSc;if(this.lastSc=n,a===0||Math.sign(a)!==Math.sign(n))return;let o=(n+a)*.5;if(Math.hypot(e,t)>6&&(o*=.3),!(i!==void 0?!!i:Nc.moving())){this.lastSc=0;return}let c=Math.max(-.14,Math.min(.14,o*this.depth));if(Ia.set(0,0,-1).applyQuaternion(r.quaternion),Ia.y=0,Ia.lengthSq()>1e-6?Ia.normalize():Ia.set(0,0,-1),this.pos.addScaledVector(Ia,c),Number.isFinite(s)&&Math.abs(s)>.22&&Math.hypot(e,t)<=3&&(Io.set(1,0,0).applyQuaternion(r.quaternion),Io.y=0,Io.lengthSq()>1e-6)){Io.normalize();let d=Math.max(-.03,Math.min(.03,-s*.008));this.pos.addScaledVector(Io,d)}this.pos.y=0;let u=Math.hypot(this.pos.x,this.pos.z);if(u>3){let d=3/u;this.pos.x*=d,this.pos.z*=d}this.pos.y=0},update(n,e=.016){var o,l,c;if(!Ic()){(this.pos.lengthSq()>0||this.out.lengthSq()>0)&&this.reset();return}let t=Math.max(.38,1-Math.exp(-Math.max(.005,e)*24));this.out.lerp(this.pos,t),this.out.y=0,this.stepDelta.subVectors(this.out,this.prevOut),this.stepDelta.y=0,this.prevOut.copy(this.out);let i=Do();i&&(i.position.x=this.out.x,i.position.z=this.out.z),Math.hypot(this.out.x-this._lastSentX,this.out.z-this._lastSentZ)>1e-4&&(this._lastSentX=this.out.x,this._lastSentZ=this.out.z,typeof No=="function"?No(this.out.x,0,this.out.z):typeof window<"u"&&((l=(o=window.NativeXR)==null?void 0:o.sixDofOffset)==null||l.call(o,this.out.x,0,this.out.z)),typeof window<"u"&&((c=window.__updateBackfaceStates)==null||c.call(window)));let s=$g();if(!s||s.readyState<2||n-this.lastT<45||(this.lastT=n,this.init(),!this.ctx))return;let r=this.W,a=this.H;try{this.ctx.drawImage(s,0,0,r,a);let u=this.ctx.getImageData(0,0,r,a).data,d=new Float32Array(r*a);for(let h=0,f=0;h<d.length;h++,f+=4)d[h]=u[f]*.3+u[f+1]*.59+u[f+2]*.11;this.processGray(d)}catch{}},consumeStepDelta(n=YS){return n.copy(this.stepDelta),n.y=0,this.stepDelta.set(0,0,0),n}};function Dc({camera:n,settings:e,getCamera:t,isEnabled:i,getVideo:s,onNativeOffset:r}={}){typeof t=="function"?Do=t:n&&(Do=()=>n),typeof i=="function"?Ic=i:e&&typeof e=="object"&&(Ic=()=>e.sixdof!==0),typeof s=="function"&&($g=s),typeof r=="function"&&(No=r)}typeof window<"u"&&(window.addEventListener("devicemotion",n=>Nc.onMotion(n),{passive:!0}),window.SixDof=Wt,window.Walk=Nc,window.nextvrSixDof=(n,e=0,t=0)=>{if(n&&typeof n=="object"){if(n.gray&&n.gray.length>=Wt.W*Wt.H)return Wt.processGray(n.gray,n.moving);let s=Number(n.sc??0),r=Number(n.gx??0),a=Number(n.gy??0);return Wt.applyFlowScale(s,r,a,n.moving),{sc:s,gx:r,gy:a}}let i=Number(n??0);return Wt.applyFlowScale(i,Number(e||0),Number(e?t:0)),{sc:i,gx:Number(e||0),gy:Number(t||0)}});var jg=new D,jS=new ot,Zg=new D,Tr=class extends kt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Hi=new Ae,ZS=new Ae,kc=class{constructor(e={}){let t=this,i,s,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(y,p){let m=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(s/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let x,v;p.isOrthographicCamera&&(x=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);let w=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,T=p.isOrthographicCamera?`scale( ${w} )scale(`+m+")translate("+d(x)+"px,"+d(v)+"px)"+h(p.matrixWorldInverse):`scale( ${w} )translateZ(`+m+"px)"+h(p.matrixWorldInverse),C=(p.isPerspectiveCamera?"perspective("+m+"px) ":"")+T+"translate("+r+"px,"+a+"px)";o.camera.style!==C&&(u.style.transform=C,o.camera.style=C),g(y,y,p,T)},this.setSize=function(y,p){i=y,s=p,r=i/2,a=s/2,l.style.width=y+"px",l.style.height=p+"px",c.style.width=y+"px",c.style.height=p+"px",u.style.width=y+"px",u.style.height=p+"px"};function d(y){return Math.abs(y)<1e-10?0:y}function h(y){let p=y.elements;return"matrix3d("+d(p[0])+","+d(-p[1])+","+d(p[2])+","+d(p[3])+","+d(p[4])+","+d(-p[5])+","+d(p[6])+","+d(p[7])+","+d(p[8])+","+d(-p[9])+","+d(p[10])+","+d(p[11])+","+d(p[12])+","+d(-p[13])+","+d(p[14])+","+d(p[15])+")"}function f(y){let p=y.elements;return"translate(-50%,-50%)"+("matrix3d("+d(p[0])+","+d(p[1])+","+d(p[2])+","+d(p[3])+","+d(-p[4])+","+d(-p[5])+","+d(-p[6])+","+d(-p[7])+","+d(p[8])+","+d(p[9])+","+d(p[10])+","+d(p[11])+","+d(p[12])+","+d(p[13])+","+d(p[14])+","+d(p[15])+")")}function g(y,p,m,x){if(y.isCSS3DObject){let v=y.visible===!0&&y.layers.test(m.layers)===!0;if(y.element.style.display=v===!0?"":"none",v===!0){y.onBeforeRender(t,p,m);let w;y.isCSS3DSprite?(Hi.copy(m.matrixWorldInverse),Hi.transpose(),y.rotation2D!==0&&Hi.multiply(ZS.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(jg,jS,Zg),Hi.setPosition(jg),Hi.scale(Zg),Hi.elements[3]=0,Hi.elements[7]=0,Hi.elements[11]=0,Hi.elements[15]=1,w=f(Hi)):w=f(y.matrixWorld);let T=y.element,R=o.objects.get(y);if(R===void 0||R.style!==w){T.style.transform=w;let C={style:w};o.objects.set(y,C)}T.parentNode!==u&&u.appendChild(T),y.onAfterRender(t,p,m)}}for(let v=0,w=y.children.length;v<w;v++)g(y.children[v],p,m,x)}}};var me=!!window.NativeXR,Ft=me?Tn:{width:innerWidth,height:innerHeight},Jg={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"sunset",panorama:"sunset",quality:"auto",showFps:0,wideCamera:0,spatialLauncher:0,dockSnapSlot:1,fingerTouch:1,sixdof:1,lateLatch:0,gorillaInstalled:0,profileName:"",profileAvatar:""},ko={};try{ko=JSON.parse(localStorage.getItem("nextvr.v1")||"{}")||{}}catch{}var $e={...Jg,...ko};$e.sunsetDefaultVersion||(!$e.envChosen&&$e.env==="passthrough"&&(!ko.panorama||ko.panorama==="lagoon")&&($e.env="sunset"),(!ko.panorama||$e.env==="sunset"&&!$e.envChosen)&&($e.panorama=$e.env==="passthrough"?"sunset":$e.env),$e.sunsetDefaultVersion=1);if(me){$e=qg($e),$e.handsOn=!0,$e.handDrawSeen||($e.handDraw=Jg.handDraw,$e.handDrawSeen=1);try{localStorage.setItem("nextvr.v1",JSON.stringify($e))}catch{}}var A=$e,Ke=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify($e))}catch{}},tn={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",libAll:"Todos",libFilter:"Filtro",libGames:"Jogos",libGamesEmpty:"Os jogos de headset aparecem aqui quando o PhoneXR os encontra.",libRecentEmpty:"Os apps abertos recentemente aparecem aqui.",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"P\xF4r do sol \xB7 palmeiras",envDusk:"Crep\xFAsculo",envCinema:"Cinema",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.exit":"Sair do jogo","game.menu":"Menu do jogo","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",libAll:"All",libFilter:"Filter",libGames:"Games",libGamesEmpty:"Headset games appear here when PhoneXR finds them.",libRecentEmpty:"Recently opened apps will appear here.",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"Sunset \xB7 palms",envDusk:"Dusk",envCinema:"Cinema",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.exit":"Exit game","game.menu":"Game menu","game.continue":"Continue","game.settings":"Settings","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",libAll:"Todo",libFilter:"Filtro",libGames:"Juegos",libGamesEmpty:"Los juegos de realidad virtual aparecer\xE1n aqu\xED cuando PhoneXR los encuentre.",libRecentEmpty:"Las aplicaciones abiertas recientemente aparecer\xE1n aqu\xED.",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Atardecer \xB7 palmeras",envDusk:"Crep\xFAsculo",envCinema:"Cine",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.exit":"Salir del juego","game.menu":"Men\xFA del juego","game.continue":"Continuar","game.settings":"Ajustes","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}};Object.assign(tn.pt,{dockSnapSlot:"Espa\xE7o pr\xE9-definido na Dock",dockSnapDesc:"Mostrar janela preta transparente ao mover janelas na Dock normal",dockSnapHint:"Solte aqui para encaixar no espa\xE7o pr\xE9-definido",fingerTouch:"Toque com indicador (sem pin\xE7a)",fingerTouchDesc:"Abrir apps na Dock ou Spatial levando o indicador \xE0 frente",qualityHigh:"Alta (1080p)",qualityMedium:"M\xE9dia (890p)",qualityLow:"Baixa (390p)",qualityAuto:"Autom\xE1tica"});Object.assign(tn.en,{dockSnapSlot:"Pre-defined Dock Slot",dockSnapDesc:"Show semi-transparent black slot when moving windows in normal Dock",dockSnapHint:"Drop here to snap into pre-defined slot",fingerTouch:"Index Finger Touch (No Pinch)",fingerTouchDesc:"Open apps in Dock or Spatial by pushing your index finger forward",qualityHigh:"High (1080p)",qualityMedium:"Medium (890p)",qualityLow:"Low (390p)",qualityAuto:"Auto"});Object.assign(tn.es,{dockSnapSlot:"Espacio predefinido en Dock",dockSnapDesc:"Mostrar ventana negra semitransparente al mover ventanas en el Dock normal",dockSnapHint:"Suelta aqu\xED para encajar en el espacio predefinido",fingerTouch:"Toque con \xEDndice (sin pinza)",fingerTouchDesc:"Abrir apps en el Dock o Spatial llevando el dedo \xEDndice hacia adelante",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Baja (390p)",qualityAuto:"Autom\xE1tica"});tn.ja={...tn.en,desktop:"\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",browser:"\u30D6\u30E9\u30A6\u30B6",youtube:"YouTube",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC",settings:"\u8A2D\u5B9A",menu:"\u30E1\u30CB\u30E5\u30FC",store:"\u30B9\u30C8\u30A2",env:"\u74B0\u5883",keyboard:"\u30AD\u30FC\u30DC\u30FC\u30C9",center:"\u6B63\u9762\u306B\u30EA\u30BB\u30C3\u30C8",search:"\u30A6\u30A7\u30D6\u3092\u691C\u7D22",searchYt:"\u52D5\u753B\u3092\u691C\u7D22",open:"\u958B\u304F",close:"\u9589\u3058\u308B",general:"\u4E00\u822C",hands:"\u30CF\u30F3\u30C9\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0",windows:"\u30A6\u30A3\u30F3\u30C9\u30A6",dock:"\u30C9\u30C3\u30AF",perf:"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",language:"\u8A00\u8A9E",on:"\u30AA\u30F3",off:"\u30AA\u30D5",sens:"\u611F\u5EA6",scale:"\u30B9\u30B1\u30FC\u30EB",dist:"\u8DDD\u96E2",curve:"\u30AB\u30FC\u30D6",size:"\u30B5\u30A4\u30BA",quality:"\u753B\u8CEA",apps:"\u30A2\u30D7\u30EA",recents:"\u6700\u8FD1",battery:"\u30D0\u30C3\u30C6\u30EA\u30FC",net:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",time:"\u6642\u523B",libAll:"\u3059\u3079\u3066",libFilter:"\u30D5\u30A3\u30EB\u30BF\u30FC",libGames:"\u30B2\u30FC\u30E0",centered:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",langChanged:"\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u3057\u305F",langTitle:"\u8A00\u8A9E",langContinue:"\u6B21\u3078",langPick:"\u8A00\u8A9E\u3092\u9078\u629E",notif:"\u901A\u77E5",noNotif:"\u65B0\u3057\u3044\u901A\u77E5\u306F\u3042\u308A\u307E\u305B\u3093",profile:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",dockSnapSlot:"\u30C9\u30C3\u30AF\u5B9A\u7FA9\u6E08\u307F\u30B9\u30ED\u30C3\u30C8",dockSnapDesc:"\u30A6\u30A3\u30F3\u30C9\u30A6\u79FB\u52D5\u6642\u306B\u534A\u900F\u660E\u306E\u9ED2\u67A0\u3092\u8868\u793A",dockSnapHint:"\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u914D\u7F6E",qualityHigh:"\u9AD8 (1080p)",qualityMedium:"\u4E2D (890p)",qualityLow:"\u4F4E (390p)",qualityAuto:"\u81EA\u52D5"};tn.fr={...tn.en,desktop:"Espace de travail",browser:"Navigateur",youtube:"YouTube",gallery:"Galerie",settings:"Param\xE8tres",menu:"Menu",store:"Boutique",env:"Environnements",keyboard:"Clavier",center:"Recentrer",search:"Rechercher sur le web",searchYt:"Rechercher des vid\xE9os",open:"Ouvrir",close:"Fermer",general:"G\xE9n\xE9ral",hands:"Suivi des mains",windows:"Fen\xEAtres",dock:"Dock",perf:"Performance",language:"Langue",on:"Activ\xE9",off:"D\xE9sactiv\xE9",sens:"Sensibilit\xE9",scale:"\xC9chelle",dist:"Distance",curve:"Courbure",size:"Taille",quality:"Qualit\xE9",apps:"Applications",recents:"R\xE9cents",battery:"Batterie",net:"R\xE9seau",time:"Heure",libAll:"Tout",libFilter:"Filtre",libGames:"Jeux",centered:"Espace recentr\xE9",langChanged:"Langue modifi\xE9e",langTitle:"Langue",langContinue:"Continuer",langPick:"Choisissez votre langue",notif:"Notifications",noNotif:"Aucune notification",profile:"Profil",dockSnapSlot:"Emplacement pr\xE9d\xE9fini du Dock",dockSnapDesc:"Afficher un cadre noir semi-transparent lors du d\xE9placement",dockSnapHint:"Rel\xE2chez ici pour placer la fen\xEAtre",qualityHigh:"Haute (1080p)",qualityMedium:"Moyenne (890p)",qualityLow:"Basse (390p)",qualityAuto:"Auto"};tn.de={...tn.en,desktop:"Arbeitsbereich",browser:"Browser",youtube:"YouTube",gallery:"Galerie",settings:"Einstellungen",menu:"Men\xFC",store:"Store",env:"Umgebungen",keyboard:"Tastatur",center:"Zentrieren",search:"Im Web suchen",searchYt:"Videos suchen",open:"\xD6ffnen",close:"Schlie\xDFen",general:"Allgemein",hands:"Hand-Tracking",windows:"Fenster",dock:"Dock",perf:"Leistung",language:"Sprache",on:"Ein",off:"Aus",sens:"Empfindlichkeit",scale:"Skalierung",dist:"Abstand",curve:"Kr\xFCmmung",size:"Gr\xF6\xDFe",quality:"Qualit\xE4t",apps:"Apps",recents:"Zuletzt",battery:"Akku",net:"Netzwerk",time:"Zeit",libAll:"Alle",libFilter:"Filter",libGames:"Spiele",centered:"Ansicht zentriert",langChanged:"Sprache ge\xE4ndert",langTitle:"Sprache",langContinue:"Weiter",langPick:"Sprache ausw\xE4hlen",notif:"Mitteilungen",noNotif:"Keine neuen Mitteilungen",profile:"Profil",dockSnapSlot:"Vordefinierter Dock-Platz",dockSnapDesc:"Halbtransparentes schwarzes Zielfenster beim Bewegen anzeigen",dockSnapHint:"Hier ablegen zum Einrasten",qualityHigh:"Hoch (1080p)",qualityMedium:"Mittel (890p)",qualityLow:"Niedrig (390p)",qualityAuto:"Automatisch"};tn.ko={...tn.en,desktop:"\uC791\uC5C5 \uACF5\uAC04",browser:"\uBE0C\uB77C\uC6B0\uC800",youtube:"YouTube",gallery:"\uAC24\uB7EC\uB9AC",settings:"\uC124\uC815",menu:"\uBA54\uB274",store:"\uC2A4\uD1A0\uC5B4",env:"\uD658\uACBD",keyboard:"\uD0A4\uBCF4\uB4DC",center:"\uC911\uC559 \uC815\uB82C",search:"\uC6F9 \uAC80\uC0C9",searchYt:"\uB3D9\uC601\uC0C1 \uAC80\uC0C9",open:"\uC5F4\uAE30",close:"\uB2EB\uAE30",general:"\uC77C\uBC18",hands:"\uD578\uB4DC \uD2B8\uB798\uD0B9",windows:"\uCC3D",dock:"\uB3C5",perf:"\uC131\uB2A5",language:"\uC5B8\uC5B4",on:"\uCF1C\uC9D0",off:"\uAEBC\uC9D0",sens:"\uAC10\uB3C4",scale:"\uD06C\uAE30 \uBE44\uC728",dist:"\uAC70\uB9AC",curve:"\uACE1\uB960",size:"\uD06C\uAE30",quality:"\uD654\uC9C8",apps:"\uC571",recents:"\uCD5C\uADFC \uD56D\uBAA9",battery:"\uBC30\uD130\uB9AC",net:"\uB124\uD2B8\uC6CC\uD06C",time:"\uC2DC\uAC04",libAll:"\uC804\uCCB4",libFilter:"\uD544\uD130",libGames:"\uAC8C\uC784",centered:"\uD654\uBA74\uC774 \uC911\uC559\uC5D0 \uB9DE\uCDB0\uC84C\uC2B5\uB2C8\uB2E4",langChanged:"\uC5B8\uC5B4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4",langTitle:"\uC5B8\uC5B4",langContinue:"\uACC4\uC18D",langPick:"\uC5B8\uC5B4 \uC120\uD0DD",notif:"\uC54C\uB9BC",noNotif:"\uC0C8 \uC54C\uB9BC \uC5C6\uC74C",profile:"\uD504\uB85C\uD544",dockSnapSlot:"\uB3C5 \uC0AC\uC804 \uC815\uC758 \uC2AC\uB86F",dockSnapDesc:"\uCC3D \uC774\uB3D9 \uC2DC \uBC18\uD22C\uBA85 \uAC80\uC740 \uC2AC\uB86F \uD45C\uC2DC",dockSnapHint:"\uC5EC\uAE30\uC5D0 \uB193\uC544 \uC2AC\uB86F\uC5D0 \uBC30\uCE58",qualityHigh:"\uB192\uC74C (1080p)",qualityMedium:"\uC911\uAC04 (890p)",qualityLow:"\uB0AE\uC74C (390p)",qualityAuto:"\uC790\uB3D9"};tn.it={...tn.en,desktop:"Spazio di lavoro",browser:"Browser",youtube:"YouTube",gallery:"Galleria",settings:"Impostazioni",menu:"Menu",store:"Store",env:"Ambienti",keyboard:"Tastiera",center:"Ricentra",search:"Cerca sul web",searchYt:"Cerca video",open:"Apri",close:"Chiudi",general:"Generale",hands:"Tracciamento mani",windows:"Finestre",dock:"Dock",perf:"Prestazioni",language:"Lingua",on:"Attivo",off:"Disattivo",sens:"Sensibilit\xE0",scale:"Scala",dist:"Distanza",curve:"Curvatura",size:"Dimensione",quality:"Qualit\xE0",apps:"App",recents:"Recenti",battery:"Batteria",net:"Rete",time:"Ora",libAll:"Tutti",libFilter:"Filtro",libGames:"Giochi",centered:"Ambiente centrato",langChanged:"Lingua modificata",langTitle:"Lingua",langContinue:"Continua",langPick:"Scegli la lingua",notif:"Notifiche",noNotif:"Nessuna notifica",profile:"Profilo",dockSnapSlot:"Slot predefinito Dock",dockSnapDesc:"Mostra finestra nera semitrasparente quando sposti le finestre",dockSnapHint:"Rilascia qui per agganciare",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Bassa (390p)",qualityAuto:"Automatica"};tn.nl={...tn.en,desktop:"Werkruimte",browser:"Browser",youtube:"YouTube",gallery:"Galerij",settings:"Instellingen",menu:"Menu",store:"Winkel",env:"Omgevingen",keyboard:"Toetsenbord",center:"Centreren",search:"Zoeken op het web",searchYt:"Video\u2019s zoeken",open:"Openen",close:"Sluiten",general:"Algemeen",hands:"Handtracking",windows:"Vensters",dock:"Dock",perf:"Prestaties",language:"Taal",on:"Aan",off:"Uit",sens:"Gevoeligheid",scale:"Schaal",dist:"Afstand",curve:"Kromming",size:"Grootte",quality:"Kwaliteit",apps:"Apps",recents:"Recent",battery:"Batterij",net:"Netwerk",time:"Tijd",libAll:"Alles",libFilter:"Filter",libGames:"Games",centered:"Omgeving gecentreerd",langChanged:"Taal gewijzigd",langTitle:"Taal",langContinue:"Doorgaan",langPick:"Kies je taal",notif:"Meldingen",noNotif:"Geen nieuwe meldingen",profile:"Profiel",dockSnapSlot:"Vooraf ingesteld Dock-vak",dockSnapDesc:"Toon halftransparant zwart vak tijdens verplaatsen van vensters",dockSnapHint:"Laat hier los om te plaatsen",qualityHigh:"Hoog (1080p)",qualityMedium:"Gemiddeld (890p)",qualityLow:"Laag (390p)",qualityAuto:"Automatisch"};tn.ru={...tn.en,desktop:"\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",browser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440",youtube:"YouTube",gallery:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",menu:"\u041C\u0435\u043D\u044E",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",env:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",keyboard:"\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",center:"\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0441\u0435\u0442\u0438",searchYt:"\u041F\u043E\u0438\u0441\u043A \u0432\u0438\u0434\u0435\u043E",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",general:"\u041E\u0431\u0449\u0438\u0435",hands:"\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0440\u0443\u043A",windows:"\u041E\u043A\u043D\u0430",dock:"\u0414\u043E\u043A",perf:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",language:"\u042F\u0437\u044B\u043A",on:"\u0412\u043A\u043B.",off:"\u0412\u044B\u043A\u043B.",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",scale:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431",dist:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",curve:"\u0418\u0437\u0433\u0438\u0431",size:"\u0420\u0430\u0437\u043C\u0435\u0440",quality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",apps:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",recents:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",battery:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F",net:"\u0421\u0435\u0442\u044C",time:"\u0412\u0440\u0435\u043C\u044F",libAll:"\u0412\u0441\u0435",libFilter:"\u0424\u0438\u043B\u044C\u0442\u0440",libGames:"\u0418\u0433\u0440\u044B",centered:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",langChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0451\u043D",langTitle:"\u042F\u0437\u044B\u043A",langContinue:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",langPick:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A",notif:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",noNotif:"\u041D\u0435\u0442 \u043D\u043E\u0432\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",profile:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",dockSnapSlot:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0442 \u0434\u043E\u043A\u0430",dockSnapDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u0447\u0451\u0440\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043E\u043A\u043E\u043D",dockSnapHint:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F",fingerTouch:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C (\u0431\u0435\u0437 \u0449\u0438\u043F\u043A\u0430)",fingerTouchDesc:"\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442; \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0443\u043A\u0438 \u0432\u043F\u0435\u0440\u0451\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 (\u0431\u0435\u0437 \u043B\u0443\u0447\u0430 \u0438 \u043A\u0440\u0443\u0436\u043A\u0430)",qualityHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qualityMedium:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qualityLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",qualityAuto:"\u0410\u0432\u0442\u043E"};var Oo=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E",table:"ja"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",table:"ru"},{id:"de",label:"Deutsch",table:"de"},{id:"ko",label:"\uD55C\uAD6D\uC5B4",table:"ko"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano",table:"it"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands",table:"nl"},{id:"pt-PT",label:"Portugu\xEAs (Portugal)",table:"pt"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),KS="pt",Vc=n=>Oo.find(e=>e.id===n)||Oo.find(e=>e.id===KS);var Ah=()=>Vc($e.lang).table||"pt",k=n=>(tn[Ah()]||tn.pt)[n]||tn.pt[n]||n,Cr=n=>Oo.some(e=>e.id===n&&e.table)?($e.lang=n,Ke(),Te("lang"),!0):!1,Fc={},Ve=(n,e)=>((Fc[n]||(Fc[n]=[])).push(e),e),Te=(n,e)=>(Fc[n]||[]).forEach(t=>t(e));function ht(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(ht._t),ht._t=setTimeout(()=>e.classList.remove("on"),2400)}var We=new Aa,_e=new Gt(72,1,.05,120);_e.rotation.order="YXZ";var wt=new An;We.add(wt);var qt=1.55;_e.position.set(0,qt,0);Dc({settings:$e,camera:_e,contentRoot:wt});var ka=me?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new Ar({antialias:!0,alpha:!0});me||(ka.setClearColor(0,0),document.getElementById("gl").appendChild(ka.domElement));var ue=me?new Pc:new kc;document.getElementById("css3d").appendChild(ue.domElement);if(me){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}var wh=Object.freeze({high:{id:"high",height:1080,label:"1080p",dpr:2},medium:{id:"medium",height:890,label:"890p",dpr:1.55},low:{id:"low",height:390,label:"390p",dpr:1}}),Bc="medium",Eh=()=>$e.quality==="auto"?Bc:wh[$e.quality]?$e.quality:"medium",Qg=()=>wh[Eh()]||wh.medium;function e0(){let n=Eh();return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.55)}function t0(){var t,i;let n=Eh(),e=Qg();document.documentElement.dataset.quality=$e.quality,document.documentElement.dataset.qualityTier=n,document.documentElement.dataset.qualityRes=e.label,(i=(t=window.NativeXR)==null?void 0:t.setQuality)==null||i.call(t,n)}function Gc(){t0(),me||(Ft.width=innerWidth,Ft.height=innerHeight);let n=Ft.width,e=Ft.height;_e.aspect=n/e,_e.updateProjectionMatrix(),ka.setPixelRatio(e0()),ka.setSize(n,e),ue.setSize(n,e),Te("resize")}addEventListener("resize",Gc);addEventListener("orientationchange",()=>setTimeout(Gc,120));Gc();Ve("quality",Gc);var JS=Object.freeze(["passthrough","sunset","dusk","cinema","lagoon","virtual","palm","night","space","tropical","lakeside"]),Th=()=>[{id:"sunset",name:k("envSunset"),thumb:"./env/sunset.jpg"},{id:"passthrough",name:k("envPass"),thumb:null},{id:"dusk",name:k("envDusk"),thumb:"./env/dusk.jpg"},{id:"palm",name:k("envPalm"),thumb:"./env/palm.jpg"},{id:"lagoon",name:k("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:k("envVirtual"),thumb:"./env/virtual.jpg"},{id:"night",name:k("envNight"),thumb:"./env/night.jpg"},{id:"space",name:k("envSpace"),thumb:"./env/space.jpg"},{id:"cinema",name:k("envCinema"),thumb:"./env/cinema.jpg"},{id:"tropical",name:k("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:k("envLakeside"),thumb:"./env/lakeside.jpg"}];function Vi(n){var e,t;$e.env=JS.includes(n)?n:"passthrough",$e.envChosen=1,$e.env!=="passthrough"&&($e.panorama=$e.env),Ke(),Te("env",$e.env),(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,$e.env)}var gi=n=>Vi(n?"passthrough":$e.panorama),Un={ok:!1,has:!1,q:new ot,tmp:new ot,e:new ni},QS=new ot,e1=new ot(-Math.SQRT1_2,0,0,Math.SQRT1_2),t1=new D(0,0,1),zc=Math.PI/180;function n1(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*zc}function i1(n){n.alpha!=null&&(Un.has=!0,Un.e.set(n.beta*zc,n.alpha*zc,-n.gamma*zc,"YXZ"),Un.tmp.setFromEuler(Un.e),Un.tmp.multiply(e1),Un.tmp.multiply(QS.setFromAxisAngle(t1,-n1())),Un.q.copy(Un.tmp))}async function Lr(){if(me)return Un.ok=Un.has=!0,Te("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(ht("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",i1,!0),Un.ok=!0,setTimeout(()=>{Un.has||ht("Sem girosc\xF3pio: arraste para olhar")},1200),Te("gyro",!0),!0)}catch{return ht("Girosc\xF3pio indispon\xEDvel"),!1}}var s1=()=>Un.ok&&Un.has,Rr=null,Da=0,Mh=0;addEventListener("pointerdown",n=>{me||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Rr={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Rr&&(Da-=(n.clientX-Rr.x)*.0032,Mh=Math.max(-1.2,Math.min(1.2,Mh-(n.clientY-Rr.y)*.0032)),Rr={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Rr=null);addEventListener("pointercancel",()=>Rr=null);function Gi(){Wt.reset();let n=new ni().setFromQuaternion(_e.quaternion,"YXZ");wt.rotation.y=n.y,wt.position.set(0,0,0),_e.position.set(0,qt,0),Te("recenter"),ht(k("centered"))}var n0=[],Uo=n=>n0.push(n),Kg=performance.now(),Oc=0,xh=0,bh=0,Uc=0,_h=0,Hc=0,$n=null,i0=()=>{let n=performance.now();bh>0&&(Uc+=(n-bh)/1e3,_h++,Uc>=1&&(Hc=Math.round(_h/Uc),Uc=0,_h=0)),bh=n};function Sh(n){let e=Math.min((n-Kg)/1e3,.05);if(Kg=n,me||(s1()?(_e.quaternion.slerp(Un.q,1-Math.exp(-e*12)),Da&&(_e.rotateY(Da),Da=0)):(_e.quaternion.setFromEuler(new ni(Mh,_e.rotation.y+Da,0,"YXZ")),Da=0)),Wt.update(n,e),_e.position.set(Wt.out.x,qt+Wt.out.y,Wt.out.z),window.__gorillaStereoOverlay){ue.render(We,_e),requestAnimationFrame(Sh);return}for(let t of n0)t(e,n);if(ka.render(We,_e),ue.render(We,_e),Oc+=e,xh++,Oc>=1){let t=Math.round(xh/Oc);if($e.quality==="auto"){let s=me&&$e.handsOn&&Hc>=15?Math.min(t,Hc*2):t,r=s>=52?"high":s>=34?"medium":"low";r!==Bc&&(Bc=r,t0(),ka.setPixelRatio(e0()),Te("quality-tier",Bc))}let i=document.getElementById("fps");i.textContent=$e.showFps?t+" fps \xB7 "+Qg().label+(me&&$e.handsOn?" \xB7 tracking "+Hc+" fps":"")+(me&&$e.handsOn?o1():""):"",Oc=0,xh=0}requestAnimationFrame(Sh)}var r1=typeof location<"u"&&(new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1")),a1=typeof location<"u"&&location.hash.includes("onboarding=skip");r1||(requestAnimationFrame(Sh),a1&&!$e.entryEnvChosen?gi(!0):Vi($e.env));if(me){let n=new Ae,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),_e.quaternion.setFromRotationMatrix(n),_e.position.set(Wt.out.x,qt+Wt.out.y,Wt.out.z),_e.updateMatrixWorld(!0),e&&(wt.rotation.y=new ni().setFromQuaternion(_e.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=ht,window.nextvrDiag=t=>{$n=t}}function o1(){if(!$n)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n($n.camera);t!==null&&e.push("cam "+t);let i=n($n.infer);return i!==null&&e.push("infer "+i+"ms"),$n.delegate&&e.push(String($n.delegate).split(" ")[0]),typeof $n.narrow=="number"&&typeof $n.wide=="number"&&$n.narrow+$n.wide>0&&e.push("slots "+($n.narrow>=$n.wide?1:2)),n($n.stale)>0&&e.push("stale "+Math.round($n.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var Wc=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},qc=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var yi=[],pe={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},js=new Wc,Oa=new qc,Lh=Math.tan(36*Math.PI/180),a0=Lh*1.5,$c=!1,Yc=-1/0,Bo=2*a0,zo=2*Lh,Rh=null,o0=500;Dc({getHands:()=>({list:yi,lastAt:Yc})});var l0=()=>$c;async function ms(){return me?($c=!0,window.NativeXR.hands(!0),Te("hands",!0),!0):(ht("Hand tracking requires the Android camera pipeline."),!1)}function c0(n){for(let e of n)Te(`pinch${e}`,pe)}function Ho(){let n=js.cancel();Oa.reset(),pe.down=pe.active=!1,pe.phase=js.phase,pe.hand=null,pe.mode="idle",u1(),c0(n)}function Vo(){Ho()}function Ph(){Ho(),yi.length=0,$c=!1,Yc=-1/0,Te("phonehands",{hands:[],consumed:new Set,scaleX:Bo,scaleY:zo}),me&&window.NativeXR.hands(!1),Te("hands",!1)}function Go(n){let e=Bo*2*a0,t=zo*2*Lh;return{x:.5+n[0]/e,y:.5-n[1]/t}}var l1=250,s0=1.6,r0=.06,Yn={x:0,y:0},Fo=0,Xc=0;function jc(n=performance.now()){if(!pe.active)return{x:pe.x,y:pe.y};let e=n-Fo;if(!(e>0)||e>l1)return{x:pe.x,y:pe.y};let t=e/1e3,i=s=>Math.max(-r0,Math.min(r0,s));return{x:Math.min(1,Math.max(0,pe.x+i(Yn.x*t))),y:Math.min(1,Math.max(0,pe.y+i(Yn.y*t)))}}function c1(n,e,t=0){let i=t>0&&Xc>0?(t-Xc)/1e9:Fo>0?(e-Fo)/1e3:-1;if(pe.active&&i>.004&&i<.3){let s=r=>Math.max(-s0,Math.min(s0,r));Yn.x+=(s((n.x-pe.x)/i)-Yn.x)*.35,Yn.y+=(s((n.y-pe.y)/i)-Yn.y)*.35,Math.hypot(Yn.x,Yn.y)<.12&&(Yn.x=Yn.y=0)}else i>=0&&i<=.004||(Yn.x=Yn.y=0);Fo=e,Xc=t>0?t:0}function u1(){Yn.x=Yn.y=0,Fo=0,Xc=0}me&&(window.nextvrHands=(n,e=1,t=1)=>{var u;if(!$c)return;i0();let i=performance.now();if(Bo=e,zo=t,Yc=i,o0=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),yi.splice(0,yi.length,...n.hands||[]),Te("handframe",{...n,hands:yi}),window.__gorillaStereoOverlay){(u=window.__gorillaOnHands)==null||u.call(window,i);return}let r={hands:yi,consumed:new Set,scaleX:Bo,scaleY:zo};if(Yg(r),Te("phonehands",r),r.blockFar){Ho();return}let a=yi.filter(d=>!r.consumed.has(d.id)),o=js.down&&a.find(d=>d.id===js.handId)||a.find(d=>d.pinching)||[...a].sort((d,h)=>h.palmWidth-d.palmWidth)[0];if(!o){Ho();return}let l=Go(o.aim);c1(l,i,Number(n.timestampNs)||0),pe.x=l.x,pe.y=l.y,pe.active=!0,pe.hand=o;let c=o.predicted?[]:js.update(o.id,o.pinching);c.includes("down")?Oa.begin(o.id,l.x*Ft.width,l.y*Ft.height,i):c.includes("up")?Oa.end():c.includes("cancel")&&Oa.reset(),js.down&&!o.predicted&&Oa.sample(o.id,l.x*Ft.width,l.y*Ft.height,i),pe.mode=Oa.mode,pe.down=js.down,pe.phase=js.phase,c0(c),pe.down&&Te("pinchsample",pe)});var Ch=document.getElementById("overlay");Ch.getContext("2d").clearRect(0,0,Ch.width,Ch.height);Uo(()=>{var n,e;!window.__gorillaStereoOverlay&&me&&Rh!==!!A.handDraw&&(Rh=!!A.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,Rh)),yi.length&&performance.now()-Yc>o0&&(yi.length=0,Ho(),Te("phonehands",{hands:[],consumed:new Set,scaleX:Bo,scaleY:zo}))});var d1=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),h1=Object.freeze({gauge:'<path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 3-4"/><circle cx="12" cy="14" r="1"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',edit3:'<path d="M12 20h9M4 17.5l-.5 3.5 3.5-.5L19 8.5 15.5 5z"/><path d="m14 6.5 3.5 3.5"/>',zap:'<path d="M13 2 4 13h7l-1 9 10-12h-7z"/>',maximize:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',distance:'<path d="M6 12h12M9 9l-3 3 3 3M15 9l3 3-3 3"/>',curve:'<path d="M3 17c3-8 15-8 18 0"/><path d="M4 20h2M18 20h2"/>',appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',vision:'<path d="M4.2 8.6C4.7 6.5 6.4 5 8.6 5h6.8c2.2 0 3.9 1.5 4.4 3.6l.8 4.2c.3 1.8-1.1 3.5-3 3.5h-1.5c-.6 0-1.2-.2-1.7-.7l-1.3-1.1h-2.2l-1.3 1.1c-.5.5-1.1.7-1.7.7H6.4c-1.9 0-3.3-1.7-3-3.5z"/><path d="M3.6 9 1.8 8.2M20.4 9l1.8-.8M12 6.4v4.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="M20 12H5"/><path d="m12 19-7-7 7-7"/>',star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.3 12 2"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),f1=Object.freeze({...h1,...d1});function ee(n,e="ui-icon"){let t=f1[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var Yt=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),Wo=(n,e,t)=>Math.max(e,Math.min(t,n)),Fn=n=>Number.isFinite(n)?n:0;function Ih(n,e=0,t=1.55,i=null){let s=Fn(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,a=Fn(n==null?void 0:n.z),o=Number.isFinite(i)?i:Math.hypot(s,a);o<1e-5&&(o=Yt.minDistance,s=0,a=-o);let l=Wo(Math.atan2(-s,-a),-Yt.maxYaw,Yt.maxYaw);o=Wo(o,Yt.minDistance,Yt.maxDistance);let c=Math.max(0,Fn(e)),u=t+Yt.lowerEdgeFromEye+c,d=t+Yt.upperEdgeFromEye-c;return r=u<=d?Wo(r,u,d):t,{x:-Math.sin(l)*o,y:r,z:-Math.cos(l)*o}}function u0(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((Fn(e.x)-Fn(n.x))*t,(Fn(e.y)-Fn(n.y))*i)}function Nh(n,e,t,i){return u0(n,e,t,i)>=Yt.dragActivationPx}function d0(n,e,t,i){return u0(n,e,t,i)>=Yt.resizeActivationPx}function Dh(n,e){let t=Fn(n==null?void 0:n.x),i=Fn(n==null?void 0:n.y),s=Fn(n==null?void 0:n.z),r=Fn(e==null?void 0:e.x)-t,a=Fn(e==null?void 0:e.y)-i,o=Fn(e==null?void 0:e.z)-s,l=Math.hypot(r,a,o);if(!Number.isFinite(l)||l<=Yt.motionDeadZone)return{x:t,y:i,z:s};let u=Math.min(l,Yt.maxMotionStep)/l;return{x:t+r*u,y:i+a*u,z:s+o*u}}var p1=Object.freeze({maxAngle:1.15});function qo(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(p1.maxAngle,e))}function Zc(n,e){let t=qo(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function Kc(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function Zs(n,e=Yt.maxResize){let t=Wo(Fn(e),Yt.minResize,Yt.maxResize);return Wo(Number.isFinite(n)?n:1,Yt.minResize,t)}function h0(n,e,t=1.55){let i=Math.max(1e-5,Fn(e)),s=Math.min(n-(t+Yt.lowerEdgeFromEye),t+Yt.upperEdgeFromEye-n);return Zs(s/i)}function f0(n,e,t,i){return!(e>1)||!Number.isFinite(t)?Zs(n,i):Zs(n*t/e,i)}function p0(n,e){let t=Zs(n),s=Zs(e)-t;return Math.abs(s)<.004?t:Zs(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function m0(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let a=0;a<i;a++)r.push({angle:a===0?0:a%2?e:-e,row:0});for(let a=0;a<s;a++)r.push({angle:s===1?0:a===0?-e/2:e/2,row:1});return r}var g0=1.22;function kh(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function y0({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=kh(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function v0(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var Xo=n=>Number.isFinite(n)?n:0,x0=(n,e,t)=>Math.max(e,Math.min(t,n));function Ua(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=Xo(n==null?void 0:n.x),a=Xo(n==null?void 0:n.y),o=Xo(n==null?void 0:n.z),l=a-s,c=Math.hypot(r,o),u=Math.hypot(r,l,o)||1e-6,d=Math.max(0,Xo(e)),h=Math.max(0,Xo(t));return{x:r,y:a,z:o,yaw:Math.atan2(-r,-o),pitch:c>1e-6?Math.atan2(l,c):l>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(d,c||1e-6),halfPitch:Math.atan2(h,u)}}function b0(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return Ua(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function Oh(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return Ua({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function m1(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,a=n.pitch-n.halfPitch,o=n.pitch+n.halfPitch,l=e.pitch-e.halfPitch,c=e.pitch+e.halfPitch,u=Math.min(i,r)-Math.max(t,s),d=Math.min(o,c)-Math.max(a,l);return u>0&&d>0?-Math.sqrt(u*d):Math.hypot(Math.max(-u,0),Math.max(-d,0))}function Jc(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,a=Number.isFinite(t.gap)?t.gap:.03,o=n.box||Ua(n,n.hw||.5,n.hh||.35),l=0,c=0;for(let h of e){let f=m1(o,h);if(f<0){let g=f*f;l+=26e3*g+1e3,g>c&&(c=g)}else if(f<a){let g=a-f;l+=900*g*g}}let u=Math.hypot(o.x,o.z)||1e-6;l+=26*Math.abs(o.yaw),Math.abs(o.yaw)>r&&(l+=26*(Math.abs(o.yaw)-r)*40),u>s&&(l+=34*(u-s));let d=Number.isFinite(t.lift)?t.lift:o.y;return l+=Math.abs(o.y-d)*12,{score:l,overlap:c,yaw:o.yaw,radius:u}}function g1({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:a=3,ringStep:o=.16,rows:l=2,topRowStep:c=1.22}={}){let u=[],d=Number.isFinite(e)?e:n,h=[0];for(let f=1;f<=6;f++){let g=f*t;if(g>r+1e-9)break;h.push(g,-g)}for(let f=0;f<l;f++){let g=f===0?d:d+s*2*(c-1)+s;for(let y=0;y<a;y++){let p=i+y*o;for(let m of h){let x=x0(m,-r,r);u.push({x:Math.sin(x)*p,y:g,z:-Math.cos(x)*p,angle:x,row:f,radius:p})}}}return u}function _0({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,lift:l=null,rings:c=3,ringStep:u=.16,rows:d=2,gap:h=.03,topRowStep:f=1.22,improvement:g=1e-6}={}){let y={eye:t,desiredDistance:s,maxYaw:o,gap:h,lift:l??t},p=g1({eye:t,lift:l??t,step:i,distance:s,halfHeight:a,outerLimit:o,rings:c,ringStep:u,rows:d,topRowStep:f}),m=null;for(let x of p){let v=Ua(x,r,a),{score:w,overlap:T}=Jc({...x,box:v},n,y),R={x:x.x,y:x.y,z:x.z,angle:x.angle,row:x.row,radius:x.radius,score:w,overlap:T,box:v};(!m||R.score<m.score-g)&&(m=R)}if(e){let x=Ua(e,r,a),{score:v,overlap:w}=Jc({...e,box:x},n,y),T={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:v,overlap:w,box:x,desired:!0};(!m||T.score<=m.score+g)&&(m=T)}return m}function w0({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,gap:l=.03,maxShift:c=3}={}){let u={eye:t,desiredDistance:s,maxYaw:o,gap:l,lift:n.y},d=(p,m,x)=>Ua({x:p,y:m,z:x},r,a),h=Jc({...n,box:d(n.x,n.y,n.z)},e,u);if(h.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:h.score,moved:!1,overlap:0};let f={x:n.x,y:n.y,z:n.z,score:h.score,overlap:h.overlap},g=Math.hypot(n.x,n.z)||s,y=Math.atan2(-n.x,-n.z);for(let p=1;p<=c;p++)for(let m of[1,-1]){let x=x0(y+m*p*i,-o,o),v=-Math.sin(x)*g,w=-Math.cos(x)*g,{score:T,overlap:R}=Jc({x:v,y:n.y,z:w,box:d(v,n.y,w)},e,u);T<f.score&&(f={x:v,y:n.y,z:w,score:T,overlap:R})}return{...f,moved:f.x!==n.x||f.z!==n.z}}var Qc={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3};function eu(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}var Fa=class{constructor({armMs:e=Qc.armMs,graceMs:t=Qc.graceMs,holdMs:i=Qc.holdMs,progressHoldMs:s=Qc.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,a=s&&r;if(this.open){if(a)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let o=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:o,active:!1}}if(a){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let o=i-this.startedAt;return o>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,o/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var vt=.00105,ge=[],Wa=null,Bn={y:qt-.6,z:-1.7,h:.12};function O0(n=null){let e=[];for(let t of ge)t===n||t.hidden||t.onboarding||e.push(b0(t));if(Ri&&ft.offsetWidth>0){let t=Oh(xi);t&&e.push(t)}if(rt&&Ln&&!sl&&rt.element.offsetWidth>0){let t=Oh(Ln);t&&e.push(t)}return e}var Wh=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:a=!1,chrome:o=!0,resizable:l=!0}){this.onboarding=a,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new D,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=qo(a?0:A.win360?A.win360K:0),this.curveRadius=Zc(s,this.curve);let c=document.createElement("div");c.className="win-shell",c.dataset.windowId=e,c.dataset.resizeScale="1",c.style.width=s+"px";let u=document.createElement("div");u.className="win",u.style.width=s+"px",u.style.height=r+"px",u.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${k("repin")}" title="${k("repin")}">${ee("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${k("close")}" title="${k("close")}">${ee("x")}</button>
      </div><div class="win-body"></div>`,u.querySelector(".win-title").textContent=t,u.querySelector(".win-body").appendChild(i),u.addEventListener("pointerdown",()=>mn(this),!0),u.querySelector(".win-bar").addEventListener("click",f=>{let g=f.target.closest("[data-act]");g&&(g.dataset.act==="close"?Ot(this):g.dataset.act==="curve"?this.setCurve(this.curve>0?0:qo(A.win360K)):M0(this))}),u.addEventListener("click",f=>{var y;let g=f.target.closest('[data-act="pin"]');g&&!((y=u.querySelector(".win-bar"))!=null&&y.contains(g))&&M0(this)});let d=document.createElement("div");d.className="win-handle",d.title=k("moveWindow"),d.setAttribute("aria-label",k("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.hidden=!l,h.title=k("resize"),h.setAttribute("aria-label",k("resize")),h.innerHTML=ee("move"),c.append(u,d,h),this.el=u,this.shell=c,this.handle=d,this.resizeHandle=h,c.dataset.curve=String(this.curve),(a||!o)&&(u.querySelector(".win-bar").hidden=!0),this.obj=new Tr(c),this.obj.scale.setScalar(vt*(this.onboarding?Xn.welcomeScale:A.winScale)),wt.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=Uh(s*vt,r*vt,this,this.hitSegments),this.bendHit(),this.grab=Uh(260*vt,90*vt,this),this.grab.userData.isHandle=!0,this.resizeHit=Uh(80*vt,80*vt,this),this.resizeHit.userData.isResize=!0,!me){let f=g=>({x:g.clientX/Ft.width,y:g.clientY/Ft.height});d.addEventListener("pointerdown",g=>{g.stopPropagation();let y=f(g);Jh(this,y.x,y.y,"desktop"),d.setPointerCapture(g.pointerId)}),d.addEventListener("pointermove",g=>{if(ut.win===this){let y=f(g);Qh(y.x,y.y)}}),d.addEventListener("pointerup",vs),d.addEventListener("pointercancel",vs),h.addEventListener("pointerdown",g=>{g.stopPropagation();let y=f(g);H0(this,y.x,y.y),h.setPointerCapture(g.pointerId)}),h.addEventListener("pointermove",g=>{if(Bt.win===this){let y=f(g);V0(y.x,y.y)}}),h.addEventListener("pointerup",Qs),h.addEventListener("pointercancel",Qs)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new En(this.w*vt,this.h*vt,i,1),this.hitSegments=i,this.curveRadius=Zc(this.w,this.curve),this.bendHit(),this.apply(),Ci(),Te("wins",ge)}setCurve(e){this.curve=qo(e),this.curveRadius=Zc(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new En(this.w*vt,this.h*vt,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return Kc(e,this.curveRadius)*vt}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,Kc(e.getX(t)/vt,this.curveRadius)*vt);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*A.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(qt-e.position.y,i)*A.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?Xn.welcomeScale:A.winScale)*this.resizeScale;e.scale.setScalar(vt*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let a=(this.h/2+34)*vt*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-a),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation);let o=28;this.resizeHit.translateX((this.w/2+o)*vt*r),this.resizeHit.translateY(-(this.h/2+o)*vt*r),this.resizeHit.translateZ(this.bulge(this.w/2)+.003),this.resizeHit.scale.setScalar(r),e.updateMatrixWorld(!0),this.hit.updateMatrixWorld(!0),this.grab.updateMatrixWorld(!0),this.resizeHit.updateMatrixWorld(!0)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&ut.win===this&&vs(),t&&Bt.win===this&&Qs(),(s=(i=ue).invalidate)==null||s.call(i))}};function Uh(n,e,t,i=1){let s=new St(new En(n,e,i,1),new en({visible:!1}));return s.userData.win=t,wt.add(s),s}function Ci(){let n=ge.some(o=>!o.onboarding&&!o.hidden);for(let o of ge)o.onboarding&&(o.id==="spatial-launcher"?(n?(o.resizeScale=.88,o.target.set(0,qt-.22,-.84)):(o.resizeScale=1.24,o.target.set(0,qt-.01,-.84)),o.apply()):o.target.set(0,qt,-Xn.welcomeDistance));let e=ge.filter(o=>o.pinned&&!o.onboarding&&!o.hidden),t=e.length;if(!t)return;let i=me?A.winDist:-Bn.z+.5+(A.winDist-2.2),s=Math.max(...e.map(o=>o.w*o.resizeScale))*vt*A.winScale,r=me?y0({width:s,dist:i,gap:.5,outerLimit:Yt.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));if(m0(t,r).forEach(({angle:o,row:l},c)=>{let u=e[c],d=u.h*vt*A.winScale*u.resizeScale,h=Bn.y+Bn.h/2+.14+d/2,f=Math.sin(o)*i,g=-Math.cos(o)*i,y=l===0?h:Math.min(h+d*2*(g0-1)+d,qt+Yt.upperEdgeFromEye-d);u.target.set(f,y,g)}),!me)return;let a=Math.min(r,kh(s,i)*.6);for(let o of e){let l=o.w*vt*A.winScale*o.resizeScale/2,c=o.h*vt*A.winScale*o.resizeScale/2,u=w0({desired:{x:o.target.x,y:o.target.y,z:o.target.z},occupied:O0(o),eye:qt,step:a,distance:i,halfWidth:l,halfHeight:c,outerLimit:Yt.maxYaw-.06,maxShift:4});o.target.set(u.x,u.y,u.z)}}Ve("recenter",Ci);Ve("resize",Ci);function nn(n){var s,r;let e=ge.find(a=>a.id===n.id);if(e)return mn(e),e;let t=ge.filter(a=>!a.onboarding&&!a.hidden);if(t.length>=5){let a=v0(t);a&&(ht(`${k("arcFull")}: ${a.title}`),Ot(a))}let i=new Wh(n);return ge.push(i),Ci(),mn(i),i.obj.position.copy(i.target),n.free&&v1(i,n.at),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),(r=(s=ue).invalidate)==null||r.call(s),Te("wins",ge),i}function v1(n,e=null){n.pinned=!1;let t=n.w*vt*A.winScale*n.resizeScale/2,i=n.h*vt*A.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Bn.y+Bn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-A.winDist)||A.winDist,a=_0({occupied:O0(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-A.winDist},eye:qt,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:Yt.maxYaw-.06,lift:s,rings:3,rows:1});a&&n.target.set(a.x,a.y,a.z)}function Ot(n){var s,r,a;if(typeof n=="string"&&(n=ge.find(o=>o.id===n)),!n)return;let e=ge.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);gt&&(gt.nativeId?gt.nativeId===i:n.el.contains(gt))&&si(!1),el&&n.el.contains(el)&&(el=null),ut.win===n&&vs(),Bt.win===n&&Qs(),ge.splice(e,1),(s=n._cleanupQB)==null||s.call(n),wt.remove(n.obj),wt.remove(n.hit),wt.remove(n.grab),wt.remove(n.resizeHit),n.shell.remove(),Wa===n&&(Wa=ge[ge.length-1]||null),Ci(),(a=(r=ue).invalidate)==null||a.call(r),Te("wins",ge)}function mn(n){Wa!==n&&(Wa=n,n.lastFocus=performance.now(),ge.forEach(e=>e.el.classList.toggle("focus",e===Wa)))}function M0(n){var e,t,i,s;n.pinned=!0,n.shell.classList.remove("free"),Ci(),n.obj.position.copy(n.target),n.apply(),(t=(e=ue).invalidate)==null||t.call(e),(s=(i=ue).render)==null||s.call(i,We,_e)}var nl=()=>Wa,ri=new To,su=new Ze,ut={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},Bt={win:null,start:null,active:!1,startScale:1,startDistance:1},pn={source:null,start:null,active:!1,plane:null,anchor:null},ii=document.createElement("div");ii.className="win-drop-slot";ii.dataset.windowId="drop-slot";ii.hidden=!0;ii.innerHTML='<div class="win-drop-slot-inner"><span class="win-drop-slot-badge"></span></div>';var Ks=new Tr(ii);Ks.visible=!1;wt.add(Ks);var ru=null,au=!1;function x1(n){let e=me?A.winDist:-Bn.z+.5+(A.winDist-2.2),t=n.h*vt*A.winScale*n.resizeScale,i=Bn.y+Bn.h/2+.14+t/2,s=er||0,r=.56;return[0,-r,r].map(a=>{let o=s+a;return new D(Math.sin(o)*e,i,-Math.cos(o)*e)})}function U0(n){var g;if(!n||A.spatialLauncher||A.dockSnapSlot===0){F0();return}let e=x1(n),t=ge.filter(y=>y!==n&&!y.onboarding&&!y.hidden),i=e.filter(y=>!t.some(p=>p.obj.position.distanceTo(y)<.22)),s=i.length?i:e,r=s[0],a=n.obj.position.distanceTo(s[0]);for(let y=1;y<s.length;y++){let p=n.obj.position.distanceTo(s[y]);p<a&&(r=s[y],a=p)}ru=r;let o=(g=ut.anchor)!=null&&g.center?wt.worldToLocal(ut.anchor.center.clone()):n.obj.position;au=n.obj.position.distanceTo(o)>.04&&a<=.16,ii.style.width=n.w+"px",ii.style.height=n.h+"px";let c=ii.querySelector(".win-drop-slot-badge");c&&(c.textContent=k("dockSnapHint")),ii.classList.toggle("is-ready",au),ii.hidden=!1,Ks.position.copy(r);let u=Math.atan2(-r.x,-r.z)*A.winCurve,d=Math.hypot(r.x,r.z)||.001,h=Math.atan2(qt-r.y,d)*A.winTilt*-1;Ks.rotation.set(h,u,0,"YXZ");let f=A.winScale*n.resizeScale;Ks.scale.setScalar(vt*f),Ks.visible=!0}function F0(){var n,e;ru=null,au=!1,(Ks.visible||!ii.hidden)&&(Ks.visible=!1,ii.hidden=!0,ii.classList.remove("is-ready"),(e=(n=ue).invalidate)==null||e.call(n))}function zr(n,e,t=ri){return _e.updateMatrixWorld(!0),wt.updateMatrixWorld(!0),su.set(n*2-1,1-e*2),t.setFromCamera(su,_e),t}function b1(n){return n.h*vt*A.winScale*n.resizeScale/2}function _1(n,e,t=null){let i=Ih(e,b1(n),qt,t);return new D(i.x,i.y,i.z)}function Jh(n,e,t,i="handle",s=null){if(n.onboarding||Bt.win)return!1;ut.win&&vs(),mn(n),zr(e,t);let r=n.obj.getWorldPosition(new D),a=new Qn().setFromNormalAndCoplanarPoint(ri.ray.direction.clone(),r),o=ri.ray.intersectPlane(a,new D);if(!o)return!1;let l=wt.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(ut,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:a,anchor:{hit:o.clone(),center:r.clone(),radius:c,applied:new D}}),!0}function w1(){let n=ut.win;!n||ut.active||(ut.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Ci(),U0(n))}function Qh(n,e){let t=ut.win;if(!t)return!1;zr(n,e);let i=ri.ray.intersectPlane(ut.plane,new D);if(!i)return!1;if(!ut.active){if(!Nh(ut.start,{x:n,y:e},Ft.width,Ft.height))return!1;w1()}let s=ut.anchor,r=i.clone().sub(s.hit);s.applied.copy(Dh(s.applied,r));let a=s.center.clone().add(s.applied),o=_1(t,wt.worldToLocal(a),s.radius);return t.target.copy(o),t.obj.position.copy(t.target),U0(t),!0}function vs(){let n=ut.win;n&&(au&&ru&&(n.target.copy(ru),n.obj.position.copy(n.target),n.apply()),n.shell.classList.remove("moving")),F0(),Object.assign(ut,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function B0(n,e,t="pinch"){if(!Ri||ut.win||Bt.win)return!1;pn.start&&_s(),zr(n,e);let i=Rn.getWorldPosition(new D),s=new Qn().setFromNormalAndCoplanarPoint(ri.ray.direction.clone(),i),r=ri.ray.intersectPlane(s,new D);return r?(Object.assign(pn,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new D}}),ft.classList.add("grab-armed"),At.setAttribute("aria-pressed","true"),!0):!1}function M1(){!pn.start||pn.active||(pn.active=!0,ft.classList.remove("grab-armed"),ft.classList.add("moving"))}function ef(n,e){if(!pn.start)return!1;zr(n,e);let t=ri.ray.intersectPlane(pn.plane,new D);if(!t)return!1;if(!pn.active){if(!Nh(pn.start,{x:n,y:e},Ft.width,Ft.height))return!1;M1()}let i=pn.anchor,s=t.clone().sub(i.hit);i.applied.copy(Dh(i.applied,s));let r=i.center.clone().add(i.applied),a=wt.worldToLocal(r),o=Ih(a,Bn.h/2,qt),l=Math.max(qt-.55,Math.min(qt-.08,o.y));return kr=new D(o.x,l,o.z),er=Math.atan2(-o.x,-o.z),$a(),!0}function _s(){ft==null||ft.classList.remove("grab-armed","moving"),At==null||At.setAttribute("aria-pressed","false"),Object.assign(pn,{source:null,start:null,active:!1,plane:null,anchor:null})}function z0(n,e,t){_e.updateMatrixWorld(!0),wt.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new D).project(_e),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*Ft.width,(t-r)*Ft.height)}function H0(n,e,t){return n.onboarding||ut.win?!1:(Bt.win&&Qs(),mn(n),Object.assign(Bt,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,z0(n,e,t))}),!0)}function V0(n,e){let t=Bt.win;if(!t)return!1;if(!Bt.active){if(!d0(Bt.start,{x:n,y:e},Ft.width,Ft.height))return!1;Bt.active=!0,t.shell.classList.add("resizing")}let i=t.h*vt*A.winScale/2,s=Math.max(Bt.startScale,h0(t.obj.position.y,i,qt)),r=f0(Bt.startScale,Bt.startDistance,z0(t,n,e),s);return t.resizeScale=Zs(p0(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function Qs(){Bt.win&&Bt.win.shell.classList.remove("resizing"),Object.assign(Bt,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function xs(n,e){zr(n,e);let t=[];for(let o of ge)o.hidden||(o.onboarding||t.push(o.resizeHit,o.grab),t.push(o.hit));let i=ri.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),a=i.object.geometry.parameters;return{win:s,u:r.x/a.width+.5,v:.5-r.y/a.height,distance:i.distance}}var G0=xs;window.windowHitAt=xs;var ct=null,ln=null,S1=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function A1(n,e,t,i,s){var l,c;let r=s?S1(s):null;e===0&&(n.target=r,n.activation=r);let a=n.target||r;if(!a)return;let o=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";a.dispatchEvent(new PointerEvent(o,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function jo(n,e,t=n.x,i=n.y,s=null){var r,a;if(n.id==="shell"&&((r=n.win)!=null&&r.onboarding))A1(n,e,t,i,s);else if(window.NativeXR.handTouch(n.id,e,t,i),e===1&&s){let o=(a=s.closest)==null?void 0:a.call(s,"[data-qb-url],[data-qb-act]");o&&o.click()}}function tf(n,e,t){let i=n.getBoundingClientRect(),s=i.left+e*(i.width||n.offsetWidth),r=i.top+t*(i.height||n.offsetHeight),a=document.elementFromPoint(s,r);if(a&&n.contains(a))return a;let o=null,l=c=>{for(let u of c.children){let d=u.getBoundingClientRect();d.width>0&&d.height>0&&s>=d.left&&s<=d.right&&r>=d.top&&r<=d.bottom&&(o=u),l(u)}};return l(n),o||n}function Ur(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),a=document.elementFromPoint(r.left+i,r.top+s)||nf(t,i,s);if(e===0&&!(a!=null&&a.closest("[data-native-browser],[data-native-app]"))){let g=k1(a);g?si(!0,g):si(!1)}if(a==null?void 0:a.closest("[data-native-xr]")){ct=null;return}let l=a==null?void 0:a.closest("[data-native-app]");if(l){let g=l.getBoundingClientRect(),y=vh(l.offsetWidth,l.offsetHeight,+(l.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!y&&!ct)return;let p="app:"+l.dataset.nativeApp;if(ct&&ct.id!==p&&(jo(ct,3),ct=null),e===0){if(!y)return;ct={id:p,win:n.win,x:y.u,y:y.v}}ct&&ct.id===p&&(y||e!==2)&&(y&&(ct.x=y.u,ct.y=y.v),jo(ct,e,ct.x,ct.y)),(e===1||e===3)&&(ct=null);return}let c=a==null?void 0:a.closest("[data-native-browser]"),u=c==null?void 0:c.getBoundingClientRect(),d=c?c.dataset.nativeBrowser:"shell",h=r.left+i-((u==null?void 0:u.left)||0),f=r.top+s-((u==null?void 0:u.top)||0);ct&&ct.id!==d&&(jo(ct,3),ct=null,e!==0)||(e===0&&(ct={id:d,win:n.win,x:h,y:f}),ct&&ct.id===d&&(ct.x=h,ct.y=f,jo(ct,e,h,f,a)),(e===1||e===3)&&(ct=null))}function W0(){ct&&jo(ct,3),ct=null,ln=null,vs(),Qs(),_s()}Ve("pinchcancel",W0);function Js(n,e){if(me){Ur(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=nf(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function nf(n,e,t){let i=null,s=r=>{for(let a of r.children){let o=E1(a,n);e>=o.l&&e<=o.r&&t>=o.t&&t<=o.b&&(i=a,s(a))}};return s(n),i||n}function E1(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}var Ko=null,ou=!1;function sf(){Ko&&(clearTimeout(Ko),Ko=null)}Ve("pinchdown",()=>{var s,r;sf(),ou=!1;let n=xs(pe.x,pe.y),e=hu(pe.x,pe.y),t=I1(pe.x,pe.y),i=Br(pe.x,pe.y);if(n!=null&&n.resize){H0(n.win,pe.x,pe.y);return}if(n!=null&&n.handle){Jh(n.win,pe.x,pe.y,"handle",(s=pe.hand)==null?void 0:s.id);return}if(t&&(!n||t.distance<=(n.distance??1/0)+.12)&&(!e||t.distance<e.distance)){B0(pe.x,pe.y,"pinch");return}if(i&&(!n||i.distance<=(n.distance??1/0)+.15)&&(!e||i.distance<e.distance)){Qo("down");return}if(e&&(!n||e.distance<n.distance)){fu(e.button);return}if(n){mn(n.win);let a=tf(n.win.el,n.u,n.v);((r=a==null?void 0:a.closest)==null?void 0:r.call(a,'[data-spatial-builtin="browser"], [data-app="browser"]'))&&(Ko=setTimeout(()=>{Ko=null,ou=!0,ln=null,il("spatial")},2e3)),ln={win:n.win,hit:n};return}Qo("down")});Ve("pinchsample",()=>{Xi&&J0(performance.now()),ln&&pe.mode==="drag"&&(Js(ln.hit,"down"),ln=null)});Ve("pinchup",()=>{if(sf(),ou){ou=!1,ln=null;return}if(Xi){ws();return}if(vi>=0||Nr||Va){Qo("up");return}if(ln&&pe.mode==="drag"&&(Js(ln.hit,"down"),ln=null),ln){let t=xs(pe.x,pe.y),i=t&&!t.handle&&!t.resize&&t.win===ln.win?t:ln.hit;ln=null,Js(i,"down"),Js(i,"up");return}if(ct){let t=xs(pe.x,pe.y);t&&t.win===ct.win&&!t.handle&&!t.resize?Ur(t,1):W0();return}if(Bt.win){Qs();return}if(ut.win){vs();return}if(pn.start){ef(pe.x,pe.y),_s();return}let n=Br(pe.x,pe.y),e=xs(pe.x,pe.y);if(n&&(!e||n.distance<=(e.distance??1/0)+.15)){Qo("up");return}if(e&&!e.handle&&!e.resize){Js(e,"up");return}Qo("up")});var ft=document.createElement("div");ft.className="dock";var bi=document.createElement("div");bi.className="browser-tab-popup dock-browser-popup";bi.dataset.browserTabMenu="dock";bi.hidden=!0;bi.innerHTML=`
  <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
  <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
`;bi.addEventListener("click",n=>{var i;let e=n.target.closest("[data-browser-opt]");if(!e)return;n.stopPropagation();let t=e.dataset.browserOpt||"new-tab";Fr(),(i=window.nextvrOpenBrowserOption)==null||i.call(window,t)});var At=document.createElement("button");At.type="button";At.className="dock-grab";At.title=k("moveDock");At.setAttribute("aria-label",k("moveDock"));At.setAttribute("aria-pressed","false");var Rn=new Tr(ft);wt.add(Rn);var xi=new St(new En(1,1),new en({visible:!1})),Ti=new St(new En(1,1),new en({visible:!1})),Wi=new St(new En(.26,.14),new en({visible:!1,side:On}));wt.add(xi,Ti,Wi);function Fr(){var e,t,i,s;bi.hidden=!0;let n=document.querySelector('[data-browser-tab-menu="spatial"]');n&&(n.hidden=!0),(t=(e=ue).invalidate)==null||t.call(e),(s=(i=ue).render)==null||s.call(i,We,_e)}function il(n="dock"){var e,t,i,s,r,a;if(n==="spatial"){let o=document.querySelector('[data-browser-tab-menu="spatial"]');o&&(o.hidden=!1)}else{let o=du("browser");o&&(bi.style.left=`${o.offsetLeft+o.offsetWidth/2}px`),bi.hidden=!1,$a()}(t=(e=window.NativeXR)==null?void 0:e.click)==null||t.call(e),(s=(i=ue).invalidate)==null||s.call(i),(a=(r=ue).render)==null||a.call(r,We,_e)}typeof window<"u"&&(window.nextvrShowBrowserTabMenu=il,window.nextvrHideBrowserTabMenus=Fr);if(!me){let n=e=>({x:e.clientX/Ft.width,y:e.clientY/Ft.height});At.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);B0(t.x,t.y,"desktop")&&At.setPointerCapture(e.pointerId)}),At.addEventListener("pointermove",e=>{if(pn.source==="desktop"){let t=n(e);ef(t.x,t.y)}}),At.addEventListener("pointerup",e=>{pn.source==="desktop"&&(_s(),At.hasPointerCapture(e.pointerId)&&At.releasePointerCapture(e.pointerId))}),At.addEventListener("pointercancel",_s)}var Ri=!0,Ha=!1;function gn(n){var e,t;Ri=!!n,Rn.visible=Ri,Ri||(vi=-1,_s()),(t=(e=ue).invalidate)==null||t.call(e)}var q0=()=>Ri;function xn(n){var t,i;let e=!!n;return Ha===e||(Ha=e,ft.style.setProperty("display",e?"none":"","important"),xi.visible=Ti.visible=!e,gn(!e),(i=(t=ue).invalidate)==null||i.call(t)),Ha}var uu=()=>Ha,T1=[],Cn=[],du=n=>Cn.find(e=>e.dataset.id===n)||null,qh=[],R1=ee("wifi"),C1='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',L1='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function X0(n){T1=n,Cn=[],qh.length=0,ft.innerHTML="";for(let e of n){if(e.kind==="sep"){ft.appendChild(P1());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",ft.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=A.profileAvatar?`<img src="${A.profileAvatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`:L1,A.profileName&&(t.title=A.profileName);else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${R1}</span><span class="dk-bat">${C1}<span class="dk-bat-percent"></span></span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),qh.push({b:t,win:e.win})}if(e.id==="browser"){let i=null;t.addEventListener("pointerdown",()=>{clearTimeout(i),i=setTimeout(()=>{t.dataset.holdConsumed="1",il("dock")},2e3)});let s=()=>{clearTimeout(i),i=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s)}t.addEventListener("click",()=>{if(t.dataset.holdConsumed==="1"){t.dataset.holdConsumed="0";return}Fr(),e.run()}),ft.appendChild(t),Cn.push(t)}ft.appendChild(bi),At.title=k("moveDock"),At.setAttribute("aria-label",k("moveDock")),ft.appendChild(At),rf(),af(),Xa(),$0(),$a()}function P1(){let n=document.createElement("span");return n.className="dock-sep",n}function $0(){for(let{b:n,win:e}of qh){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",ge.some(i=>i.id===e))}}Ve("wins",$0);var qi={time:"--:--",date:"",batteryLevel:null,charging:!1,online:navigator.onLine},Yi=()=>({...qi});function lu(){Te("device-status",Yi())}function rf(){let n=ft.querySelector(".dk-time"),e=new Date;qi.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),qi.date=e.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n&&(n.textContent=qi.time),lu()}rf();setInterval(rf,1e3);function af(){let n=ft.querySelector(".dk-wifi");qi.online=navigator.onLine,n&&(n.style.opacity=qi.online?"1":".35"),lu()}addEventListener("online",af);addEventListener("offline",af);var qa=null;function Xa(){let n=ft.querySelector(".dk-bat");if(!qa){n&&(n.style.display="none"),qi.batteryLevel=null,qi.charging=!1,lu();return}let e=Math.max(0,Math.min(1,Number(qa.level)||0)),t=!!qa.charging;if(qi.batteryLevel=e,qi.charging=t,n){n.style.display="";let i=n.querySelector(".dk-bat-percent"),s=n.querySelector(".fill");s&&(s.setAttribute("width",String(Math.max(1.6,13*e))),s.setAttribute("fill",t?"#8de6c8":e<.2?"#ff6b6b":"currentColor")),i&&(i.textContent=`${Math.round(e*100)}%`),n.title=`${Math.round(e*100)}%${t?" \xB7 carregando":""}`}lu()}window.nextvrBattery=n=>{try{let e=typeof n=="string"?JSON.parse(n):n;e&&typeof e.level=="number"&&(qa=e,Xa())}catch{}};!me&&navigator.getBattery&&navigator.getBattery().then(n=>{qa=n,n.addEventListener("levelchange",Xa),n.addEventListener("chargingchange",Xa),Xa()}).catch(()=>{});var vi=-1,Nr=null,Fh={x:-1,y:-1},Jo=null,Va=!1;function Xh(){Jo&&(clearTimeout(Jo),Jo=null)}Ve("pinchcancel",()=>{vi=-1,Nr=null,Va=!1,Xh(),sf()});function Qo(n){var s,r,a;let e=Br(pe.x,pe.y);if(n==="down"){if(Xh(),Va=!1,Fh={x:pe.x,y:pe.y},e!=null&&e.popupOpt){vi=-1,Nr=e.popupOpt;return}Nr=null,vi=e?e.i:-1,vi>=0&&((r=(s=Cn[vi])==null?void 0:s.dataset)==null?void 0:r.id)==="browser"&&(Jo=setTimeout(()=>{Jo=null,Va=!0,il("dock")},2e3));return}if(Xh(),Va){Va=!1,vi=-1,Nr=null;return}let t=vi,i=Nr;if(vi=-1,Nr=null,n==="up"){let o=(e==null?void 0:e.popupOpt)||i;if(o){Fr(),(a=window.nextvrOpenBrowserOption)==null||a.call(window,o);return}let l=e&&e.i===t?e.i:-1;if(l<0&&t>=0&&Math.hypot(pe.x-Fh.x,pe.y-Fh.y)<.085&&(l=t),l<0)return;let c=Cn[l];c&&(c.style.transform="scale(.88)",setTimeout(()=>c.style.transform="",150),c.click())}}function I1(n,e){return!Ri||!$h?null:(zr(n,e),Ti.updateMatrixWorld(!0),ri.intersectObject(Ti,!1)[0]||null)}function Br(n,e){if(!Ri)return null;if(zr(n,e),!bi.hidden){Wi.updateMatrixWorld(!0);let o=ri.intersectObject(Wi,!1)[0];if(o){let c=Wi.worldToLocal(o.point.clone()).y>=0?"new-tab":"incognito-tab",u=bi.querySelector(`[data-browser-opt="${c}"]`);return{i:-1,popupOpt:c,el:u,distance:o.distance}}}xi.updateMatrixWorld(!0);let t=ri.intersectObject(xi,!1)[0];if(!t)return null;let i=xi.worldToLocal(t.point.clone()),s=xi.geometry.parameters,r=(i.x/s.width+.5)*ft.offsetWidth,a=(.5-i.y/s.height)*ft.offsetHeight;for(let o=0;o<Cn.length;o++){let l=Cn[o];if(r>=l.offsetLeft-4&&r<=l.offsetLeft+l.offsetWidth+4&&a>=l.offsetTop-4&&a<=l.offsetTop+l.offsetHeight+4)return{i:o,distance:t.distance,button:l}}return null}var S0="",$h="",er=0,kr=null;Ve("recenter",()=>{er=0,gs.ready=!1,kr=null,_s();for(let n of ge)!n.onboarding&&!n.hidden&&(n.pinned=!0,n.shell.classList.remove("free"));$a(),Ci();for(let n of ge)n.hidden||n.apply()});Ve("summon-dock",()=>{var e;_e.updateMatrixWorld(!0),wt.updateMatrixWorld(!0);let n=_e.getWorldDirection(new D).transformDirection(wt.matrixWorld.clone().invert());er=Math.atan2(-n.x,-n.z),gs.ready=!1,kr=null,_s(),$a(),(e=window.NativeXR)==null||e.click()});function $a(){let n=Ft.width>Ft.height,e=(me?Xn.dockDistance:n?1.42:1.75)*A.dockDist,t=me?-Xn.dockDrop:n?-.5:-.6,i=vt*(me?Xn.dockScale:n?.74:.88)*A.dockSize;kr?Rn.position.copy(kr):Rn.position.set(-Math.sin(er)*e,qt+t,-Math.cos(er)*e),Rn.rotation.set(.26,er,0,"YXZ"),Rn.scale.setScalar(i);let s=ft.offsetWidth*i,r=ft.offsetHeight*i,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==S0&&(S0=a,xi.geometry.dispose(),xi.geometry=new En(s,r),Bn.h=r,kr||Ci());let o=At.offsetWidth*i,l=At.offsetHeight*i,c=o.toFixed(3)+"x"+l.toFixed(3);o>0&&c!==$h&&($h=c,Ti.geometry.dispose(),Ti.geometry=new En(o,l)),xi.position.copy(Rn.position),xi.rotation.copy(Rn.rotation),Wi.position.copy(Rn.position),Wi.rotation.copy(Rn.rotation);let u=du("browser"),d=u&&ft.offsetWidth>0?(u.offsetLeft+u.offsetWidth*.5-ft.offsetWidth*.5)*i:0;Wi.translateX(d),Wi.translateY((ft.offsetHeight*.5+52)*i),Wi.translateZ(.005),Ti.position.copy(Rn.position),Ti.rotation.copy(Rn.rotation),Ti.translateY((ft.offsetHeight/2-At.offsetTop-At.offsetHeight/2)*i),Ti.translateZ(.004),!kr&&(Bn.y!==Rn.position.y||Bn.z!==-e)&&(Bn.y=Rn.position.y,Bn.z=-e,Ci())}var N1=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],A0={q:"1",w:"2",e:"3",r:"4",t:"5",y:"6",u:"7",i:"8",o:"9",p:"0",a:"@",s:"#",d:"$",f:"%",g:"&",h:"*",j:"-",k:"+",l:"(",\u00E7:")",z:"!",x:'"',c:"'",v:":",b:";",n:"/",m:"?"},E0=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],D1=0,rt=null,Ln=null,gt=null,za=null,$i=!1,Or=!1,sl=!1,bs=window.__nextvrTyping,k1=n=>(bs==null?void 0:bs.editable(n))||null,el=null,Yh=1,Y0=2,cu=3,O1=me;function tr(n){var t,i;if(sl=!!n,!rt)return!1;let e=!!n;return rt.visible=!e,rt.element.style.setProperty("display",e?"none":"","important"),Ln&&(Ln.visible=!e),e&&ws(),(i=(t=ue).invalidate)==null||i.call(t),!0}var j0=()=>!!rt&&rt.visible!==!1,Z0=()=>sl;function U1(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&ge.find(s=>s.shell===t)||null}function si(n,e){var s,r,a,o,l,c,u,d,h,f,g,y;if(!n){me&&console.log("kb close; was serving",(gt==null?void 0:gt.nativeId)||(gt==null?void 0:gt.tagName)||"nothing"),ws(),rt&&(wt.remove(rt),wt.remove(Ln),rt.element.remove(),rt=null),gt=null,za=null,$i=Or=!1,gs.ready=!1,(r=(s=ue).invalidate)==null||r.call(s),(o=(a=ue).render)==null||o.call(a,We,_e);return}let t=e||el;if(gt=t&&!t.nativeId?(bs==null?void 0:bs.focus(t))||null:t||null,gt&&!gt.nativeId&&(el=gt),za=U1(gt),me&&console.log("kb open for",(gt==null?void 0:gt.nativeId)||(gt==null?void 0:gt.tagName)||"nothing","in window",(za==null?void 0:za.id)??"none"),rt){jh(),We.updateMatrixWorld(!0),(c=(l=ue).invalidate)==null||c.call(l),(d=(u=ue).render)==null||d.call(u,We,_e);return}let i=document.createElement("div");i.className="kb";for(let p of N1){let m=document.createElement("div");m.className="kb-row";for(let x of p){let v=typeof x=="string"?x:x.k,w=document.createElement("button");w.className="key"+(typeof x=="string"?"":" "+x.cls),typeof x=="string"?(w.textContent=v,A0[v]&&(w.dataset.sub=A0[v])):x.icon?(w.innerHTML=ee(x.icon),w.setAttribute("aria-label",x.label),w.title=x.label):w.textContent=x.lbl||v,w.dataset.k=v,m.appendChild(w)}i.appendChild(m)}i.addEventListener("click",p=>{let m=p.target.closest("[data-k]");m&&(fu(m),ws())}),rt=new Tr(i),rt.scale.setScalar(vt*(me?Xn.keyboardScale:.9)),wt.add(rt),Ln=new St(new En(1,1),new en({visible:!1})),wt.add(Ln),jh(),We.updateMatrixWorld(!0),(f=(h=ue).invalidate)==null||f.call(h),(y=(g=ue).render)==null||y.call(g,We,_e)}function F1(){$i?Or?($i=!1,Or=!1):Or=!0:($i=!0,Or=!1),K0()}function of(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@");if(t===cu){e&&e.classList.remove("hot"),s&&Bh(n,n,!!i,cu);return}if(t===Yh){if(me&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){si(!1);return}if(n==="\u21E7"){F1();return}if(n==="@lang")return;if(n==="@mic"){ht(k("micOff"));return}if(n==="@emoji"){Bh(n,E0[D1++%E0.length],!1,Yh);return}}Bh(n,n,n==="\u232B"||n==="\u23CE"?!1:void 0,t)}function Bh(n,e,t,i){if(!gt)return!1;let s=t===void 0?$i:t;return gt.nativeId?window.NativeXR.key(gt.nativeId,e,!!s,i||0):bs==null||bs.key(n,!!s,i||0),O1&&i!==Y0&&console.log("kb key ->",gt.nativeId||gt.tagName+"."+(gt.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==cu&&s&&$i&&!Or&&($i=!1,K0()),!0}function K0(){if(rt){for(let n of rt.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=$i?Or?"lock":"once":"";for(let n of rt.element.querySelectorAll("[data-k]")){let e=n.dataset.k;e.length===1&&/[a-zç]/i.test(e)&&(n.textContent=$i?e.toUpperCase():e.toLowerCase())}}}var T0="",B1=.35,gs={yaw:0,ready:!1},z1=n=>Math.atan2(Math.sin(n),Math.cos(n));function H1(){let n=za;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return er}function jh(n=0){if(!rt)return;let e=H1();gs.ready?gs.yaw+=z1(e-gs.yaw)*(1-Math.exp(-n*7)):(gs.yaw=e,gs.ready=!0);let t=gs.yaw,i=me?Xn.keyboardDistance:-Bn.z-.35;rt.position.set(-Math.sin(t)*i,qt-(me?Xn.keyboardDrop:.68),-Math.cos(t)*i),rt.rotation.set(-Math.PI/2+B1,t,0,"YXZ");let s=rt.element.offsetWidth*rt.scale.x,r=rt.element.offsetHeight*rt.scale.x,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==T0&&(T0=a,Ln.geometry.dispose(),Ln.geometry=new En(s,r)),Ln.position.copy(rt.position),Ln.rotation.copy(rt.rotation)}var V1=700,G1=90,W1=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),Xi=null,tl=0;function hu(n,e){var o,l;if(!rt||sl)return null;su.set(n*2-1,-(e*2-1)),ri.setFromCamera(su,_e);let t=ri.intersectObject(Ln,!1)[0];if(!t)return null;let i=Ln.worldToLocal(t.point.clone()),s=Ln.geometry.parameters,r=(i.x/s.width+.5)*rt.element.offsetWidth,a=(.5-i.y/s.height)*rt.element.offsetHeight;return{distance:t.distance,button:((l=(o=nf(rt.element,r,a))==null?void 0:o.closest)==null?void 0:l.call(o,"[data-k]"))||null}}function fu(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return ws(),e?(Xi={key:e,button:n,shift:$i},of(e,n,Yh),W1(e)&&(tl=performance.now()+V1),!0):!1}function ws(){let n=Xi;Xi=null,tl=0,n&&of(n.key,n.button,cu,n.shift)}Ve("pinchcancel",ws);function J0(n){var i,s;if(!Xi)return!1;let e=hu(pe.x,pe.y);if(!e)return ws(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==Xi.key?(ws(),fu(e.button)):(tl&&n>=tl&&(of(Xi.key,Xi.button,Y0),tl=n+G1),!0)}var R0="";Uo((n,e)=>{let t=`${A.winScale}:${A.winDist}`;if(R0!==t&&(R0=t,Ci()),$a(),jh(n),Xi&&J0(e),ln&&pe.mode==="drag"&&(Js(ln.hit,"down"),ln=null),ct&&pe.active&&pe.down){let i=xs(pe.x,pe.y);i&&i.win===ct.win&&!i.handle&&!i.resize&&Ur(i,2)}if((Bt.win||ut.win&&ut.source!=="fist")&&pe.active&&pe.down){let i=jc(e);Bt.win&&V0(i.x,i.y),ut.win&&ut.source!=="fist"&&Qh(i.x,i.y)}if(pn.start&&pe.active&&pe.down){let i=jc(e);ef(i.x,i.y)}for(let i of ge)i.hidden||i.apply();Q0()});function zh(n){let e=n.matrixWorld.elements,t=_e.position.x-e[12],i=_e.position.z-e[14];return t*e[8]+i*e[10]<0}function Q0(){var e,t,i,s;We.updateMatrixWorld(!0);let n=!1;if(Ri&&ft){let r=zh(Rn)?"1":"0";ft.dataset.backface!==r&&(ft.dataset.backface=r,At&&(At.dataset.backface=r),n=!0)}if(rt&&rt.visible!==!1&&rt.element){let r=zh(rt)?"1":"0";rt.element.dataset.backface!==r&&(rt.element.dataset.backface=r,n=!0)}for(let r of ge){if(r.hidden||!r.shell)continue;let a=zh(r.obj)?"1":"0";r.shell.dataset.backface!==a&&(r.shell.dataset.backface=a,n=!0)}n&&((t=(e=ue).invalidate)==null||t.call(e),(s=(i=ue).render)==null||s.call(i,We,_e))}typeof window<"u"&&(window.__updateBackfaceStates=Q0);var ey='button, .d-btn, .spatial-app-tile, .lib-tile, .st-card, .st-tab, .quick-control, .entry-card, .entry-seg-btn, .entry-btn, .entry-store-card, .entry-profile-box, .yt-link, [role="button"]',Pr=null;function ys(n){var t;let e=((t=n==null?void 0:n.closest)==null?void 0:t.call(n,ey))||null;return e===Pr?e:(Pr&&Pr.classList.remove("nextvr-choosing"),Pr=e,Pr&&Pr.classList.add("nextvr-choosing"),Pr)}function Dr(n){var i;let e=((i=n==null?void 0:n.closest)==null?void 0:i.call(n,ey))||(n instanceof HTMLElement?n:null);if(!e)return null;ys(e),e.classList.remove("nextvr-clicking"),e.classList.add("nextvr-clicking");let t=e.querySelector(":scope > .nextvr-click-ripple");return t||(t=document.createElement("span"),t.className="nextvr-click-ripple",t.setAttribute("aria-hidden","true"),e.appendChild(t)),t.classList.remove("is-active"),t.classList.add("is-active"),setTimeout(()=>{e.classList.remove("nextvr-clicking"),t==null||t.remove()},340),e}typeof window<"u"&&(window.__nextvrChooseAnim=ys,window.__nextvrClickAnim=Dr,document.addEventListener("pointerover",n=>{n.target instanceof Element&&ys(n.target)},{passive:!0,capture:!0}),document.addEventListener("click",n=>{n.target instanceof Element&&Dr(n.target)},{passive:!0,capture:!0}));if(me){let n=function(){try{qa=JSON.parse(window.NativeXR.battery()),Xa()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?si(!0,{nativeId:e}):(gt==null?void 0:gt.nativeId)!==e&&si(!1)},window.nextvrAppFocus=e=>si(!0,{nativeId:e}),n(),setInterval(n,1e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var yt=null,tu=new Map,nu=new Fa({holdMs:2e3,graceMs:260}),Zo=new Set,lf={hands:[],consumed:new Set,scaleX:1,scaleY:1},$o=null,Hh=0,C0=350,q1=240;function Zh(n,e){_e.updateMatrixWorld(!0),wt.updateMatrixWorld(!0);let t=new To;return t.setFromCamera(new Ze(n*2-1,1-e*2),_e),t}function Vh(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function Kh(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new D),s=n.curve>0?Kc(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function X1(n,e){let t=n.obj.getWorldPosition(new D),i=new D(0,0,1).transformDirection(n.obj.matrixWorld),s=new Qn().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new D);let r=n.obj.matrixWorld.clone().invert(),a=e.origin.clone().applyMatrix4(r),o=e.origin.clone().add(e.direction).applyMatrix4(r).sub(a).normalize(),l=n.curveRadius,c=o.x*o.x+o.z*o.z;if(c<1e-9)return e.intersectPlane(s,new D);let u=2*(a.x*o.x+(a.z-l)*o.z),d=a.x*a.x+(a.z-l)*(a.z-l)-l*l,h=u*u-4*c*d;if(h<0)return e.intersectPlane(s,new D);let f=Math.sqrt(h);for(let g of[(-u-f)/(2*c),(-u+f)/(2*c)]){if(!(g>0))continue;let y=a.clone().addScaledVector(o,g);if(!(Math.abs(y.x)>l+1e-6||y.z>l))return y.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new D)}function L0(n){let e=null;for(let t of ge){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new D),s=X1(t,n.ray);if(!s)continue;let{local:r,scale:a}=Kh(t,s);if(Math.abs(r.x)*a.x>t.w*a.x/2+.08||Math.abs(r.y)*a.y>t.h*a.y/2+.08)continue;let o=n.ray.origin.distanceTo(s);(!e||o<e.distance)&&(e={win:t,point:s,distance:o})}return e}var Ga=new Map,Ir=0,Ba=null;function iu(n){var e,t,i,s;Ba!==n&&(Ba&&((t=(e=Ba.classList)==null?void 0:e.remove)==null||t.call(e,"finger-hover")),Ba=n||null,Ba&&((s=(i=Ba.classList)==null?void 0:i.add)==null||s.call(i,"finger-hover")))}function $1(n){if(!n||n.pinching||n.fist||n.predicted)return!1;let e=n.points;if(!e||e.length<63)return!1;let t=e[0],i=e[1],s=e[18],r=e[19],a=e[24],o=e[25],l=Math.hypot(a-t,o-i),c=Math.hypot(s-t,r-i);return l>.045&&l>c*1.05}function Gh(n,e){var r,a,o,l,c,u,d,h,f,g,y,p,m,x,v,w;if(!Number.isFinite(n)||!Number.isFinite(e))return null;let t=hu(n,e),i=xs(n,e),s=Br(n,e);if(!s&&Ri){for(let T of[-.02,.02,-.038,.038])if(s=Br(n,e+T),s)break}if(t&&(!i||t.distance<i.distance)&&t.button)return ys(t.button),{kind:"kb",x:n,y:e,el:t.button,key:"kb:"+(((r=t.button.dataset)==null?void 0:r.k)||t.button.textContent||"")};if(s&&(!i||s.distance<=(i.distance??1/0)+.15)){if(s.popupOpt&&s.el)return ys(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(Cn[s.i]){let T=Cn[s.i];return ys(T),{kind:"dock",x:n,y:e,el:T,key:"dock:"+(((a=T.dataset)==null?void 0:a.id)||s.i)}}}if(i&&!i.handle&&!i.resize){let T=tf(i.win.el,i.u,i.v),R=((o=T==null?void 0:T.closest)==null?void 0:o.call(T,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url],[data-browser-opt],[data-id],[data-act],[data-lang]'))||null,C=((l=T==null?void 0:T.closest)==null?void 0:l.call(T,"[data-native-browser],[data-native-app],[data-native-xr]"))||null;if(R){ys(R);let B=((c=R.dataset)==null?void 0:c.browserOpt)||((u=R.dataset)==null?void 0:u.spatialBuiltin)||((d=R.dataset)==null?void 0:d.spatialAndroid)||((h=R.dataset)==null?void 0:h.spatialXr)||((f=R.dataset)==null?void 0:f.spatialScroll)||((g=R.dataset)==null?void 0:g.qbUrl)||((y=R.dataset)==null?void 0:y.id)||((p=R.dataset)==null?void 0:p.act)||((m=R.dataset)==null?void 0:m.lang)||R.getAttribute("aria-label")||R.title||((v=(x=R.textContent)==null?void 0:x.trim())==null?void 0:v.slice(0,24))||"btn";return{kind:"win",x:n,y:e,el:R,hit:i,key:`win:${i.win.id}:${B}`}}if(C){let B=Math.round(i.u*16),_=Math.round(i.v*12);return{kind:"win-surf",x:n,y:e,el:C,hit:i,key:`surf:${i.win.id}:${B}:${_}`}}}if(s!=null&&s.popupOpt&&s.el)return ys(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(s&&Cn[s.i]){let T=Cn[s.i];return ys(T),{kind:"dock",x:n,y:e,el:T,key:"dock:"+(((w=T.dataset)==null?void 0:w.id)||s.i)}}return null}function Y1(n,e){let t=n.points,i=Number(e==null?void 0:e.scaleX)||1,s=Number(e==null?void 0:e.scaleY)||1,r=[[0,0],[0,.015],[0,-.015],[.015,0],[-.015,0]];if(t&&t.length>=26&&Number.isFinite(t[24])&&Number.isFinite(t[25])){let a=(t[24]-.5)*i+.5,o=(t[25]-.5)*s+.5;for(let[d,h]of r){let f=Gh(a+d,o+h);if(f)return f}let l=(t[21]-.5)*i+.5,c=(t[22]-.5)*s+.5,u=Gh(l,c);if(u)return u}if(Array.isArray(n.aim)&&n.aim.length>=2){let a=Go(n.aim);for(let[o,l]of r){let c=Gh(a.x+o,a.y+l);if(c)return c}}return null}function Yo(n,e,t=null){var a,o,l,c,u,d,h,f,g,y,p,m,x,v,w,T,R,C,B,_,b,N,I,O,L,S,U,V,q,W,J,Q,ie,G,j,te;if((a=t==null?void 0:t.dataset)!=null&&a.browserOpt)return Fr(),(o=window.nextvrOpenBrowserOption)==null||o.call(window,t.dataset.browserOpt),(c=(l=ue).invalidate)==null||c.call(l),(d=(u=ue).render)==null||d.call(u,We,_e),!0;if(t&&Cn.includes(t))return t.classList.add("finger-pressed"),t.style.transform="scale(.88)",setTimeout(()=>{t.style.transform="",t.classList.remove("finger-pressed")},160),Dr(t),t.click(),(f=(h=ue).invalidate)==null||f.call(h),(y=(g=ue).render)==null||y.call(g,We,_e),!0;let i=hu(n,e),s=xs(n,e),r=Br(n,e);if(i&&(!s||i.distance<s.distance))return fu(i.button),setTimeout(()=>ws(),55),!0;if(r&&(!s||r.distance<=(s.distance??1/0)+.15)){if(r.popupOpt)return Fr(),(p=window.nextvrOpenBrowserOption)==null||p.call(window,r.popupOpt),!0;if(Cn[r.i]){let ne=Cn[r.i];return ne.classList.add("finger-pressed"),ne.style.transform="scale(.88)",setTimeout(()=>{ne.style.transform="",ne.classList.remove("finger-pressed")},160),Dr(ne),ne.click(),(x=(m=ue).invalidate)==null||x.call(m),(w=(v=ue).render)==null||w.call(v,We,_e),!0}}if(s&&!s.handle&&!s.resize){mn(s.win);let ne=t&&s.win.el.contains(t)?t:tf(s.win.el,s.u,s.v),H=((T=ne==null?void 0:ne.closest)==null?void 0:T.call(ne,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url]'))||ne;H!=null&&H.classList&&(H.classList.add("finger-pressed"),setTimeout(()=>{var be,qe;return(qe=(be=H.classList)==null?void 0:be.remove)==null?void 0:qe.call(be,"finger-pressed")},180),Dr(H));let oe=!1,de=()=>{oe=!0};return(R=H==null?void 0:H.addEventListener)==null||R.call(H,"click",de,{once:!0}),Js(s,"down"),Js(s,"up"),(C=H==null?void 0:H.removeEventListener)==null||C.call(H,"click",de),!oe&&H&&(!((B=H.closest)!=null&&B.call(H,"[data-native-browser],[data-native-app],[data-native-xr]"))||(_=H.matches)!=null&&_.call(H,"[data-qb-url],[data-qb-act]"))&&((b=H.click)==null||b.call(H)),(I=(N=ue).invalidate)==null||I.call(N),(L=(O=ue).render)==null||L.call(O,We,_e),!0}if(r!=null&&r.popupOpt)return Fr(),(S=window.nextvrOpenBrowserOption)==null||S.call(window,r.popupOpt),!0;if(r&&Cn[r.i]){let ne=Cn[r.i];return ne.classList.add("finger-pressed"),ne.style.transform="scale(.88)",setTimeout(()=>{ne.style.transform="",ne.classList.remove("finger-pressed")},160),Dr(ne),ne.click(),(V=(U=ue).invalidate)==null||V.call(U),(W=(q=ue).render)==null||W.call(q,We,_e),!0}return t&&typeof t.click=="function"&&document.body.contains(t)?((Q=(J=t.classList)==null?void 0:J.add)==null||Q.call(J,"finger-pressed"),setTimeout(()=>{var ne,H;return(H=(ne=t.classList)==null?void 0:ne.remove)==null?void 0:H.call(ne,"finger-pressed")},160),Dr(t),t.click(),(G=(ie=ue).invalidate)==null||G.call(ie),(te=(j=ue).render)==null||te.call(j,We,_e),!0):!1}function j1(n){return!n||n.length<63?0:Math.hypot(n[15]-n[0],n[16]-n[1])+Math.hypot(n[51]-n[0],n[52]-n[1])+Math.hypot(n[51]-n[15],n[52]-n[16])+Math.hypot(n[27]-n[0],n[28]-n[1])}function Z1(n,e,t){var w,T,R,C,B,_,b,N;if(A.fingerTouch===0||!$1(n))return Ga.delete(n==null?void 0:n.id),iu(null),!1;let i=n.points,s=i&&i.length>=26?i[24]:.5,r=i&&i.length>=26?i[25]:.5,o=(i&&i.length>=17?i[16]:r)-r,l=n.head&&n.head.length===63?n.head[25]:0,c=n.head&&n.head.length===63?Math.hypot(n.head[24],n.head[25],n.head[26]):0,u=n.head&&n.head.length===63?n.head[29]-n.head[26]:0,d=Number(n.palmWidth)||0,h=j1(n.points),f=Ga.get(n.id),g=Y1(n,e),y=I=>{if(!I)return!1;let O=c>0&&I.baseDist>0?c-I.baseDist:0,L=c>0&&I.baseDist>0?O/I.baseDist:0,S=d>.012&&I.basePalm>.012?(I.basePalm-d)/I.basePalm:0,U=h>.02&&I.baseSpan>.02?(I.baseSpan-h)/I.baseSpan:0,V=u-I.baseTipRelZ;return O>=.016||L>=.036||S>=.042||U>=.042||V>=.014&&(O>=.006||S>=.018||U>=.018)},p=I=>{if(!I)return!1;let O=I.restTipY-r>=.0085,L=o-I.restFingerLift>=.0085,S=l-I.restHeadY>=.008;return Math.abs(s-I.lastTipX)>Math.abs(r-I.lastTipY)*1.45&&Math.abs(s-I.lastTipX)>.012&&!y(I)?!1:O||L||S||y(I)};if(!g)return f&&f.pendingBrowserTap&&!f.holdMenuOpened&&t-f.lastTapAt>=360&&(f.pendingBrowserTap=!1,Yo(f.tapX,f.tapY,f.targetEl))||f&&t-f.lastSeenAt<=180&&t-f.enterAt>=40&&!f.latched&&p(f)&&t-f.lastTapAt>=360&&Yo(f.tapX,f.tapY,f.targetEl)?(f.latched=!0,f.lastTapAt=t,Ir=t+220,!0):((!f||t-f.lastSeenAt>180)&&(Ga.delete(n.id),iu(null)),!1);iu(g.el);let m=f&&t-f.enterAt>=40&&g.key===f.targetKey&&p(f);if(!f||g.key!==f.targetKey&&!m)return f&&!f.latched&&t-f.enterAt>=45&&t-f.lastSeenAt<=120&&f.lastTipY-r>=.01&&Math.abs(s-f.lastTipX)<=.018&&t-f.lastTapAt>=360&&Yo(f.tapX,f.tapY,f.targetEl)?(f.latched=!0,f.lastTapAt=t,Ir=t+220,!0):(f={targetKey:g.key,targetEl:g.el,tapX:g.x,tapY:g.y,restTipY:r,restFingerLift:o,restHeadY:l,lastTipX:s,lastTipY:r,baseDist:c,basePalm:d,baseSpan:h,baseTipRelZ:u,enterAt:t,lastSeenAt:t,latched:!1,holdMenuOpened:!1,pendingBrowserTap:!1,lastTapAt:(f==null?void 0:f.lastTapAt)??-1e3},Ga.set(n.id,f),!1);g.key===f.targetKey&&(f.tapX=g.x,f.tapY=g.y,f.targetEl=g.el,f.lastSeenAt=t);let x=((T=(w=f.targetEl)==null?void 0:w.dataset)==null?void 0:T.id)==="browser"||((C=(R=f.targetEl)==null?void 0:R.dataset)==null?void 0:C.spatialBuiltin)==="browser"||((_=(B=f.targetEl)==null?void 0:B.dataset)==null?void 0:_.app)==="browser";if(x&&!f.holdMenuOpened&&t-f.enterAt>=2e3)return f.holdMenuOpened=!0,f.pendingBrowserTap=!1,f.latched=!0,f.lastTapAt=t,il(((N=(b=f.targetEl)==null?void 0:b.dataset)==null?void 0:N.id)==="browser"?"dock":"spatial"),Ir=t+220,!0;if(t-f.enterAt<40)return f.restTipY=Math.max(f.restTipY,r),f.restFingerLift=Math.min(f.restFingerLift,o),f.restHeadY=Math.min(f.restHeadY,l),f.lastTipX=s,f.lastTipY=r,c>0&&(f.baseDist=f.baseDist>0?f.baseDist*.5+c*.5:c),d>0&&(f.basePalm=f.basePalm>0?f.basePalm*.5+d*.5:d),h>0&&(f.baseSpan=f.baseSpan>0?f.baseSpan*.5+h*.5:h),f.baseTipRelZ=f.baseTipRelZ*.5+u*.5,!1;let v=p(f);if(f.lastTipX=s,f.lastTipY=r,!f.latched&&v&&t-f.lastTapAt>=360){if(x&&y(f)&&!(f.restTipY-r>=.0085||o-f.restFingerLift>=.0085))return f.pendingBrowserTap=!0,f.latched=!0,!1;if(Yo(f.tapX,f.tapY,f.targetEl))return f.latched=!0,f.lastTapAt=t,Ir=t+220,!0}else if(f.latched){let I=c>0&&f.baseDist>0?c-f.baseDist:0,O=d>.012&&f.basePalm>.012?(f.basePalm-d)/f.basePalm:0,L=h>.02&&f.baseSpan>.02?K1(f,h):0;if(I<=.008&&O<=.022&&L<=.022&&Math.abs(f.restTipY-r)<=.006){if(f.pendingBrowserTap&&!f.holdMenuOpened&&t-f.lastTapAt>=360)return f.pendingBrowserTap=!1,f.latched=!1,f.lastTapAt=t,Ir=t+220,Yo(f.tapX,f.tapY,f.targetEl),!0;f.latched=!1,f.restTipY=r,f.restFingerLift=o,f.restHeadY=l,f.baseDist=c,f.basePalm=d,f.baseSpan=h,f.baseTipRelZ=u}}else f.restTipY=Math.max(f.restTipY,r),f.restFingerLift=Math.min(f.restFingerLift,o),f.restHeadY=Math.min(f.restHeadY,l),c>0&&(f.baseDist=f.baseDist>0?Math.min(f.baseDist,f.baseDist*.92+c*.08):c),d>.012&&(f.basePalm=f.basePalm>0?Math.max(f.basePalm,f.basePalm*.92+d*.08):d),h>.02&&(f.baseSpan=f.baseSpan>0?Math.max(f.baseSpan,f.baseSpan*.92+h*.08):h);return!1}function K1(n,e){return(n.baseSpan-e)/n.baseSpan}var P0=new Map,I0=-2e3;function J1(n,e){var t,i,s,r,a,o,l,c,u;if(!((t=n==null?void 0:n.hands)!=null&&t.length)||ge.some(d=>d.id==="entry-menu"||d.id==="language")||document.querySelector(".entry-menu-root")||ut.win||Bt.win||pn.start)return!1;for(let d of n.hands){if(!d||d.predicted||d.menuEligible)continue;let h=d.points;if(!h||h.length<63)continue;let f=(C,B)=>Math.hypot(h[C*3]-h[B*3],h[C*3+1]-h[B*3+1]);if(Math.hypot(h[27]-h[0],h[28]-h[1])<.04||f(14,16)<.01||f(18,20)<.01||f(5,6)<.01)continue;let y=f(0,16)<f(0,14)*.96,p=f(0,20)<f(0,18)*.96,m=f(0,4)>f(0,2)*1.1,x=f(0,8)/Math.max(1e-4,f(0,6)),v=d.id||(d.left?"left":"right"),w=P0.get(v);if(w||(w={armedUntil:0,maxIndexRatio:0,latched:!1},P0.set(v,w)),y&&p&&m&&x>=1.14&&!d.pinching&&!d.fist){w.armedUntil=e+1400,w.maxIndexRatio=Math.max(w.maxIndexRatio,x),w.latched=!1;continue}let R=y&&p&&m&&(x<=.98||w.maxIndexRatio>=1.18&&w.maxIndexRatio-x>=.16);if(!w.latched&&e<=w.armedUntil&&R&&e-I0>=550){if(w.latched=!0,w.armedUntil=0,w.maxIndexRatio=0,I0=e,(s=(i=n.consumed)==null?void 0:i.add)==null||s.call(i,d.id),A.spatialLauncher){let C=ge.find(B=>B.id==="spatial-launcher");C&&C.setHidden(!C.hidden)}else{let C=!Ha;xn(C),At&&(At.hidden=C)}return(a=(r=window.NativeXR)==null?void 0:r.click)==null||a.call(r),(l=(o=ue).invalidate)==null||l.call(o),(u=(c=ue).render)==null||u.call(c,We,_e),!0}}return!1}function N0(n=!1,e=lf){let t=yt;t!=null&&t.down&&(Ur({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(Zo.add(t.id),e.consumed.add(t.id))),yt=null}Ve("phonehands",n=>{var l,c;lf=n;let e=new Set(n.hands.map(u=>u.id));n.hands.length||iu(null);for(let u of tu.keys())e.has(u)||tu.delete(u);for(let u of Ga.keys())e.has(u)||Ga.delete(u);for(let u of Zo){let d=n.hands.find(h=>h.id===u);!d||!d.pinching?Zo.delete(u):n.consumed.add(u)}if(ut.win&&ut.source==="fist"){let u=n.hands.find(d=>d.id===ut.hand);if(!u||!u.fist||!ge.includes(ut.win)||(l=ut.win)!=null&&l.hidden)vs();else{n.consumed.add(u.id);let d=Vh(u,n,!0);Qh(d.x,d.y)}}let t=performance.now();if(!document.documentElement.classList.contains("xr-on")&&!ge.some(u=>u.id==="entry-menu"&&!u.hidden))if(ut.win||Bt.win||pn.start||ft.classList.contains("grab-armed")||yt)nu.reset();else{let u=(n.hands||[]).filter(f=>f.pinching&&!f.predicted),d=eu(u),h=nu.update(t,{left:d,right:d});if(h.opened){nu.reset(),Vo(),ln=null,ct=null,vi=-1,vs(),Qs(),_s();for(let f of u)Zo.add(f.id),n.consumed.add(f.id);Gi()}else d&&h.progress>.15&&(Vo(),ln=null,ct=null,vi=-1)}else nu.reset();if(!(ut.win&&ut.source==="fist")){let u=n.hands.find(d=>!d.fist);if(u){let d=Vh(u,n),h=L0(Zh(d.x,d.y));if(h){let{local:f,scale:g}=Kh(h.win,h.point),y=h.win;(Math.abs(f.x)*g.x>y.w*g.x/2-.06||Math.abs(f.y)*g.y>y.h*g.y/2-.06)&&($o=h.win,Hh=t)}}}for(let u of ge)(u!==$o||t-Hh>C0)&&u.shell.classList.remove("phone-grab-hover");$o&&t-Hh<=C0?$o.shell.classList.add("phone-grab-hover"):$o=null;for(let u of n.hands){let d=tu.get(u.id)||!1;if(tu.set(u.id,u.fist),!ut.win&&!Bt.win&&u.fist&&!d){let h=Vh(u,n,!0),f=L0(Zh(h.x,h.y));f&&(((c=pe.hand)==null?void 0:c.id)===u.id&&Vo(),Jh(f.win,h.x,h.y,"fist",u.id)&&n.consumed.add(u.id))}}let i=null;for(let u of n.hands){if(n.consumed.has(u.id)||!u.head||u.head.length!==63)continue;if(Array.isArray(u.aim)&&u.aim.length>=2){let h=Go(u.aim);if(Br(h.x,h.y))continue}let d=new D().fromArray(u.head,24);if(!(d.length()>.7)){d.applyMatrix4(_e.matrixWorld);for(let h of ge){if(h.hidden||h.id==="spatial-launcher")continue;let f=Kh(h,d),g=(yt==null?void 0:yt.win)===h&&yt.id===u.id,y=g?.08:.02,p=g?.26:.11;f.d>p||f.d<-.12||Math.abs(f.local.x)*f.scale.x>h.w*f.scale.x/2+y||Math.abs(f.local.y)*f.scale.y>h.h*f.scale.y/2+y||(!i||g||!i.current&&Math.abs(f.d)<Math.abs(i.d))&&(i={...f,id:u.id,win:h,point:d,current:g})}}}let s=()=>{if(!(ut.win||Bt.win||pn.start||ft.classList.contains("grab-armed"))&&!J1(n,t))for(let u of n.hands)n.consumed.has(u.id)||Z1(u,n,t)};if(!i&&yt&&e.has(yt.id)&&ge.includes(yt.win)&&!yt.win.hidden&&t-yt.lastSeen<=q1&&(i={...yt,current:!0,held:!0}),!i){N0(!e.has(yt==null?void 0:yt.id),n),s();return}i.current?(yt.d+=(i.d-yt.d)*.45,yt.u+=(i.u-yt.u)*.45,yt.v+=(i.v-yt.v)*.45,i.held||(yt.lastSeen=t)):(N0(!1,n),yt={...i,down:!1,previousD:i.d,lastSeen:t});let r=yt,a=r.u>=0&&r.u<=1&&r.v>=0&&r.v<=1,o={win:r.win,u:Math.max(0,Math.min(1,r.u)),v:Math.max(0,Math.min(1,r.v))};!r.down&&a&&r.d<=.012&&r.previousD>.012?(pe.down&&Vo(),mn(r.win),Ur(o,0),r.down=!0):r.down&&(r.d>=.035||!a)?(Ur(o,1),r.down=!1,n.hands.some(u=>u.id===r.id&&u.pinching)&&(Zo.add(r.id),n.consumed.add(r.id))):r.down&&Ur(o,2),r.previousD=r.d,r.down?(n.blockFar=!0,n.consumed.add(r.id)):s()});var D0=0,k0="";Uo((n,e)=>{var a,o,l,c;if(!me||e-D0<16)return;D0=e;let t=lf,i=[],s=A.fingerTouch!==0;for(let u of t.hands){if((yt==null?void 0:yt.id)===u.id&&yt.down){let y=yt,p=new D((y.u-.5)*y.win.w,(.5-y.v)*y.win.h,0).applyMatrix4(y.win.obj.matrixWorld);i.push({id:u.id,end:_e.worldToLocal(p).toArray(),direct:!0,down:y.down,...s?{noBeam:!0}:{}});continue}if(t.consumed.has(u.id)||t.blockFar){i.push({id:u.id,hidden:!0});continue}let d=((a=pe.hand)==null?void 0:a.id)===u.id?jc(e):Go(u.aim),h=Zh(d.x,d.y),f=ge.filter(y=>!y.hidden).flatMap(y=>[y.resizeHit,y.grab,y.hit]);Ri&&(bi.hidden||f.push(Wi),f.push(Ti,xi)),Ln&&rt&&!sl&&f.push(Ln);let g=h.intersectObjects(f,!1)[0];i.push({id:u.id,...g?{end:g.point.toArray()}:{},down:((o=pe.hand)==null?void 0:o.id)===u.id&&pe.down||e<Ir,...s?{noBeam:!0}:{}})}let r=JSON.stringify(i);r!==k0&&(k0=r,(c=(l=window.NativeXR).handTargets)==null||c.call(l,r))});var ty={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function ny(n){return ty[n]||ty.landscape}function iy(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return ny(n==null?void 0:n.shape)}function Q1(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function rl(n){let e=Q1(iy(n));return{w:e.w+2,h:e.h+116}}var eA=400,cy=3;function uf(n,e){if(e!=null&&e.shape)return e.shape;let t=Zt.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var Et={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:cy,sdk:0,recents:[],library:0,launch:null},Zt={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},ai=new Map,cf=new Set,sy=0,ry="";var df=n=>Et.sessions.find(e=>e.pkg===n)||null,tA=()=>Et.sessions.filter(n=>n.alive),nA=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function Ms(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{ht(k("appCommandFailed"))}}function iA(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Et.sessions=Array.isArray(e.sessions)?e.sessions:[],Et.shizuku=e.shizuku||Et.shizuku,Et.input=e.input||Et.input,Et.capacity=e.capacity||cy,Et.recents=Array.isArray(e.recents)?e.recents:[],Et.sdk=e.sdk||Et.sdk,Et.launch=e.launch||null,Et.diagnostics=e.diagnostics||Et.diagnostics,e.icons!=null&&e.icons!==Zt.icons&&(Zt.icons=e.icons,Zt.loaded=!1),sA(),Te("appsState"))}function sA(){var e,t,i,s;let n=new Set;for(let r of Et.sessions)if(r.state!=="stopped"){if(r.state==="suspended"){ay(r.pkg,!0);continue}n.add(r.pkg),ai.has(r.pkg)?uy(r):rA(r)}for(let r of[...ai.keys()])n.has(r)||ay(r,!0);(t=(e=ue).invalidate)==null||t.call(e),(s=(i=ue).render)==null||s.call(i,We,_e),mu(!0)}function rA(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?k("appMirrorBadge"):k("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(h,f,g)=>{let y=document.createElement("button");return y.className="app-key",y.title=f,y.setAttribute("aria-label",f),y.innerHTML=ee(g),y.onclick=()=>Ms({cmd:"key",pkg:n.pkg,key:h}),y},a=document.createElement("button");a.className="app-key",a.title=k("appKeyboard"),a.dataset.act="keys",a.innerHTML=ee("keyboard"),a.onclick=()=>uA(n.pkg);let o=document.createElement("button");o.className="app-key",o.dataset.act="rotate",o.title=k("appRotate"),o.setAttribute("aria-label",k("appRotate")),o.innerHTML=ee("rotate"),o.onclick=()=>lA(n.pkg),t.append(i,s,r("back",k("appBack"),"back"),r("home",k("appHome"),"top"),r("recents",k("appRecents"),"appGrid"),a,o);let l=document.createElement("div");l.className="app-surface",l.dataset.nativeApp=n.pkg,l.dataset.aspect=String(n.display&&n.display.aspect||16/9),l.dataset.shape=uf(n.pkg,n);let c=document.createElement("div");c.className="app-state",e.append(t,l),l.append(c);let u=rl(n),d=nn({id:nA(n.pkg),title:n.title,node:e,w:u.w,h:u.h});ai.set(n.pkg,{win:d,surface:l,status:c,badge:i,session:n}),uy(n)}function uy(n){var r,a;let e=ai.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?k("appMirrorBadge"):k("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:k("appStarting"),creating:k("appStarting"),launching:k("appStarting"),running:"",failed:n.error?oA(n):k("appFailed")};n.mode==="display"&&((r=Et.shizuku)!=null&&r.binding||!((a=Et.shizuku)!=null&&a.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=k("appWaitingService"),i.creating=k("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=k("appMirrorStarting"),i.creating=k("appMirrorStarting"),i.launching=k("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&aA.has(n.error))){let o=document.createElement("button");o.className="app-state-btn",o.textContent=k("appOpenOnPhone"),o.onclick=()=>Ms({cmd:"phone",pkg:n.pkg}),e.status.appendChild(o)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var aA=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function oA(n){let e={shizuku_unavailable:k("appNeedShizuku"),shizuku_denied:k("appShizukuDenied"),shizuku_blocked:k("appShizukuBlocked"),display_refused:k("appDisplayRefused"),display_failed:k("appDisplayFailed"),no_launcher_activity:k("appNoLauncher"),consent_denied:k("appConsentDenied"),mirror_stopped:k("appMirrorStopped"),mirror_failed:k("appMirrorFailed"),mirror_refused:k("appMirrorFailed"),projection_failed:k("appMirrorFailed"),display_empty:k("appDisplayEmpty"),app_not_running:k("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?k("appSurfaceFailed"):e[t]||`${k("appFailed")}: ${t}`}function ay(n,e){let t=ai.get(n);t&&(ai.delete(n),e&&cf.add(n),Ot(t.win),cf.delete(n))}Ve("wins",()=>{for(let n of[...ai.keys()]){let e=ai.get(n);cf.has(n)||ge.includes(e.win)||(ai.delete(n),Ms({cmd:"close",pkg:n}))}Te("appsState")});function pu(n){n&&Ms({cmd:"open",pkg:n,shape:uf(n,df(n))})}function lA(n){var a;let e=ai.get(n),t=df(n),s=((e==null?void 0:e.surface.dataset.shape)||uf(n,t))==="portrait"?"landscape":"portrait",r=rl({shape:s,display:(t==null?void 0:t.display)||((a=e==null?void 0:e.session)==null?void 0:a.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),Ms({cmd:"shape",pkg:n,shape:s}),mu(!0)}function oy(){Ms({cmd:"shizuku"})}function cA(){Zt.loaded=!1,Ms({cmd:"refresh"})}function uA(n){si(!0,{nativeId:"app:"+n})}function hf(n){var e,t;if(Zt.loaded&&!n)return Zt;Zt.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,Zt.query,Zt.showSystem),s=JSON.parse(i||'{"apps":[]}');Zt.apps=Array.isArray(s.apps)?s.apps:[],Zt.shown=s.shown||Zt.apps.length,Zt.total=s.total||Zt.apps.length,Zt.icons=s.icons||Zt.icons}catch{Zt.apps=[]}return Te("appsState"),Zt}function mu(n){let e=[];for(let[i,s]of ai)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===ry||(ry=t,Ms({cmd:"sync",windows:e}))}function dA(){sy||(sy=setInterval(()=>{ai.size&&mu(!1)},eA))}Ve("wins",()=>mu(!0));var ly={install:()=>k("shizukuInstall"),start:()=>k("shizukuStart"),update:()=>k("shizukuUpdate"),ask:()=>k("shizukuAsk"),denied:()=>k("shizukuDenied"),rebind:()=>k("shizukuRebind"),ready:()=>k("shizukuReady"),unknown:()=>k("shizukuUnknown")},hA=new Set(["hosted","permission","capture"]);function fA(){let n=Et.shizuku||{};return hA.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function dy(){var u;let n=Et.shizuku||{},e=fA(),t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>k("routeHosted"),permission:()=>k("routePermission"),capture:()=>k("routeCapture")};s.textContent=(r[e]||r.capture)();let a=document.createElement("small");if(a.textContent=(ly[n.state]||ly.unknown)(),s.appendChild(a),e==="capture"&&!((u=Et.input)!=null&&u.accessibility)){let d=document.createElement("small");d.textContent=k("appCaptureInput"),s.appendChild(d)}else if(n.detail){let d=document.createElement("small");d.textContent=n.detail,s.appendChild(d)}t.append(i,s);let o=document.createElement("button");o.className="az-btn",n.ask?(o.textContent=k("shizukuGrant"),o.onclick=()=>oy()):(o.textContent=k("shizukuRecheck"),o.onclick=()=>{cA(),oy()}),t.appendChild(o);let l=document.createElement("button");l.className="az-btn ghost",l.textContent=k("appSelfTest"),l.onclick=async()=>{var d;l.disabled=!0;try{await Ms({cmd:"selftest"});let h=(d=Et.diagnostics)==null?void 0:d.selfTest;h&&ht(h.ok?k("appSelfTestOk"):k("appSelfTestFailed"))}catch{ht(k("appCommandFailed"))}finally{l.disabled=!1}},t.appendChild(l);let c=document.createElement("button");return c.className="az-btn ghost",c.textContent=k("appDiagnostics"),c.onclick=()=>{let d=t.querySelector(".az-caps");if(d){d.remove();return}let h=document.createElement("pre");h.className="az-caps",h.textContent=pA(),h.onclick=()=>mA(h.textContent),t.appendChild(h)},t.appendChild(c),t}function pA(){var i;let n=Et.shizuku||{},e=Et.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||Et.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...Et.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=Et.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||Et.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function mA(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&ht(k("appDiagnosticsCopied"));return}catch{}}var ji=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function ff(n){let e=df(n.pkg),t=`<span class="nm">${ji((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${ji(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${ji(e.state==="suspended"?k("appMinimized"):k("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${ji(k("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${ji(n.pkg)}" data-session="${e?ji(e.state):""}" data-pkg="${ji(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${ji(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${ji(k("androidApps"))}">${ee("device")}</span>`+r+s+`</span><span class="lib-label">${ji(n.label||n.pkg)}</span></button>`}function gu(n){let e=ai.get(n);e&&mn(e.win)}function hy(){return tA().length}function fy(){return Zt.apps}function py(){me&&(window.nextvrApps=iA,dA(),Ve("lang",()=>{Zt.loaded=!1,Te("appsState")}))}var xu="nextvr-xr-game",al="nextvr-xr-menu",Nt={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},nr=[],gA=null,gf=!1,gy=()=>Nt,yy=()=>nr,vy=()=>Nt.hosting,ol=()=>Nt.runtime==="ready",xy=()=>Nt.handMode,yA=()=>{var n;return((n=Nt.game)==null?void 0:n.package)||null};function Es(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function my(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(Nt,e),vu=null,Nt.hosting&&((t=Nt.game)!=null&&t.package)?bA(Nt.game):_A(),Te("xr",{...Nt,games:nr}))}function vA(n){let e;try{e=JSON.parse(n)}catch{e=null}nr=Array.isArray(e==null?void 0:e.games)?e.games:[],gA=(e==null?void 0:e.problem)||null,gf=!0,Te("xr",{...Nt,games:nr})}function by(){var n,e;if(!(!me||window.nextvrXr)){window.nextvrXr=my,window.nextvrXrLibrary=vA;try{my(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}pf(),Ve("lang",()=>{pf(),Te("xr",{...Nt,games:nr})})}}function pf(){Es({cmd:"library"})}function _y(){gf=!1,Es({cmd:"refresh"}),pf()}function yf(n){!n||Nt.hosting||Es({cmd:"open",package:n})}function vf(){Nt.hosting&&Es({cmd:"close"})}function xA(){Nt.hosting&&Es({cmd:"minimize"})}function wy(){Nt.hosting&&Es({cmd:"restore"})}function xf(){Es({cmd:"runtime"})}function My(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}Nt.handMode=e,Te("xr",{...Nt,games:nr})}function bf(){Es({cmd:"selftest"})}function _f(){return nr.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function Sy(n){let e=n.game,t=`<span class="nm">${Ss(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=yA()===e.package?`<span class="lib-open">${Ss(k("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${Ss(e.describe||k("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${Ss(e.package)}" aria-label="${Ss(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${Ss(k("xrTitle"))}">${ee("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${Ss(e.label||e.package)}</span></button>`}var Ss=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Ay(){if(ol()||!gf||!nr.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=Nt.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=Nt.runtimeBundled?k("xrMissing"):k("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=Nt.summary||Nt.problem||k("xrSummaryMissing"),t.appendChild(i),n.append(e,t),Nt.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=k("xrInstall"),r.onclick=()=>{xf(),ht(k("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=k("xrSelfTest"),s.onclick=()=>bf(),n.appendChild(s),n}var As=!1,mf=null;function bA(n){var u;if(As)return;mf={windows:ge.map(d=>({win:d,hidden:d.hidden})),dockHidden:uu(),keyboard:j0(),focus:((u=nl())==null?void 0:u.id)||null};for(let d of ge)d.setHidden(!0);tr(!0),xn(!0),document.documentElement.classList.add("game-on","xr-on"),As=!0,wf.reset(),yu(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=k("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=Nt.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let a=document.createElement("span");a.className="app-bar-spacer";let o=document.createElement("button");o.className="app-key",o.title=k("appMinimize"),o.setAttribute("aria-label",k("appMinimize")),o.innerHTML=ee("chevronDown"),o.onclick=()=>xA();let l=document.createElement("button");l.className="app-key",l.title=k("close"),l.setAttribute("aria-label",k("close")),l.innerHTML=ee("x"),l.onclick=()=>vf(),t.append(i,a,o,l),e.append(t,s);let c=rl({shape:"landscape",display:{w:r.w,h:r.h}});nn({id:xu,title:n.label||n.package,node:e,w:c.w,h:c.h})}function _A(){if(!As)return;As=!1,vu=null;for(let e of[...ge])(e.id===xu||e.id===al)&&Ot(e);document.documentElement.classList.remove("game-on","xr-on");let n=mf;if(mf=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...ge])!e.has(i)&&!i.onboarding&&Ot(i);xn(n.dockHidden);for(let{win:i,hidden:s}of n.windows)ge.includes(i)&&i.setHidden(s);n.keyboard&&tr(!1);let t=ge.find(i=>i.id===n.focus);t&&mn(t)}wf.reset(),yu(0)}Ve("wins",()=>{!As||!window.nextvrXr||ge.some(n=>n.id===xu)||vf()});var wf=new Fa,wA=()=>As&&ge.some(n=>n.id===al);function MA(){if(!As||ge.some(i=>i.id===al)||!Nt.game)return;let n=Nt.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${Ss(n.label||n.package)}</div>
    <p class="gm-sub">${Ss(k("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${k("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${ee("settings")}<span>${k("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${k("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&(SA(),s.dataset.act==="exit"?vf():s.dataset.act==="settings"&&Te("game:settings"))});let t=nn({id:al,title:k("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:qt,z:-.55}});t==null||t.setCurve(0)}function SA(){let n=ge.find(e=>e.id===al);n&&Ot(n)}function yu(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var vu=null;function AA(){let n=As?G0(pe.x,pe.y):null,e=!!n&&n.win.id!==xu&&!n.win.onboarding;e!==vu&&(vu=e,Es({cmd:"hands-ui",blocked:e}))}Ve("phonehands",n=>{if(!As)return;AA();let e=(n.hands||[]).filter(s=>s.pinching),t=eu(e),i=wf.update(performance.now(),{left:t,right:t});yu(i.progress),i.opened&&MA(),i.closed&&!wA()&&yu(0)});var ll=null,zn=null,_u="",bu=0,ir=new Set,EA='button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';function TA(){var i;let n=document.getElementById("entry-fullscreen");if(n&&!n.hidden)return n;let e=nl();if(e&&!e.hidden)return e.el;let t=document.querySelector(".dock");return t&&t.offsetWidth&&getComputedStyle(t).display!=="none"?t:((i=ge.find(s=>!s.hidden&&!s.onboarding))==null?void 0:i.el)||null}function Ey(){let n=TA();return n?[...n.querySelectorAll(EA)].filter(e=>{if(e.closest("[hidden],.win-shell[hidden]"))return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&getComputedStyle(e).visibility!=="hidden"}):[]}function Ts(n){zn&&zn!==n&&zn.classList.remove("joycon-selected"),zn=n||null,zn&&(zn.classList.add("joycon-selected"),zn.focus({preventScroll:!0}))}function Mf(n){let e=Ey();if(!e.length){Ts(null);return}if(e.indexOf(zn)<0){Ts(e[0]);return}let i=zn.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2,a=n==="left"?[-1,0]:n==="right"?[1,0]:n==="up"?[0,-1]:[0,1],o=null,l=1/0;for(let c of e){if(c===zn)continue;let u=c.getBoundingClientRect(),d=u.left+u.width/2-s,h=u.top+u.height/2-r,f=d*a[0]+h*a[1];if(f<=2)continue;let g=Math.abs(d*a[1]-h*a[0]),y=f+g*1.8;y<l&&(o=c,l=y)}o||(o=n==="left"||n==="up"?e.at(-1):e[0]),Ts(o)}function RA(){let n=Ey();n.length&&((!zn||!n.includes(zn))&&Ts(n[0]),zn==null||zn.click())}function CA(){var s;let n=document.querySelector('#entry-fullscreen [data-entry-act="back"]');if(n){n.click(),Ts(null);return}let e=nl(),t=(s=e==null?void 0:e.el)==null?void 0:s.querySelector('[data-entry-act="back"]');if(t){t.click(),Ts(null);return}if(e&&!e.onboarding){Ot(e),Ts(null);return}let i=document.activeElement;i&&i!==document.body&&i.blur()}function LA(){if(ll){let n=ll;ll=null;for(let{win:e,hidden:t}of n.windows)ge.includes(e)&&e.setHidden(t);xn(n.dockHidden),gn(n.dockVisible),tr(n.keyboardHidden),Ts(null);return}ll={windows:ge.filter(n=>!n.onboarding).map(n=>({win:n,hidden:n.hidden})),dockHidden:uu(),dockVisible:q0(),keyboardHidden:Z0()};for(let{win:n}of ll.windows)n.setHidden(!0);tr(!0),xn(!0),Ts(null)}function PA(n,e){if(n==="home"){!ir.has(n)&&e===0&&LA(),ir.add(n);return}if(n==="left"||n==="right"||n==="up"||n==="down"){(!ir.has(n)||e>0)&&Mf(n),ir.add(n);return}ir.has(n)||(ir.add(n),n==="accept"?RA():n==="back"&&CA())}function IA(n,e,t=0){e?PA(n,t):ir.delete(n)}function NA(n,e){return Math.abs(n)<.58&&Math.abs(e)<.58?"":Math.abs(n)>Math.abs(e)?n<0?"left":"right":e<0?"up":"down"}function DA(n,e){let t=NA(n,e);if(!t){_u="",bu=0;return}let i=performance.now();t!==_u?(_u=t,Mf(t),bu=i+320):i>=bu&&(Mf(t),bu=i+170)}function Ty(){!me||window.__nextvrJoyconInstalled||(window.__nextvrJoyconInstalled=!0,window.__nextvrJoyconKey=IA,window.__nextvrJoyconAxes=DA,window.addEventListener("blur",()=>{ir.clear(),_u=""}),window.addEventListener("gamepadconnected",n=>{var t;let e=((t=n.gamepad)==null?void 0:t.id)||"Bluetooth gamepad";ht(/joy.?con/i.test(e)?"Joy-Con conectado":`Controle conectado: ${e}`)}))}var Ry="v2.0.0";var Sf="ENTRE EM OUTRO MUNDO";var Cy=Object.freeze(["NeyVR","Faylan","colaboradores do nextVR","JocaVR"]),Ly=Object.freeze({NeyVR:"o Dono absoluto mais aurudo do planeta.",Faylan:"o desenvolvedor mais sabido de todo o universo muita aura","colaboradores do nextVR":"",JocaVR:"o portador de jogos mais importante do planeta aurudo 67"}),Af="NextVR \u2014 realidade aumentada",wu=Object.freeze(["O NextVR \xE9 um projeto de realidade virtual criado para transformar a maneira como voc\xEA interage com o mundo digital usando apenas um celular e um VR Box.","Nosso objetivo \xE9 aproximar a experi\xEAncia de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.","Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualiza\xE7\xE3o representa um novo passo rumo a uma experi\xEAncia mais completa, interativa e acess\xEDvel.","NextVR \u2014 Mais que um app, uma nova forma de ver."]),kA=[Af,...wu].join(`

`);var OA=`
<svg viewBox="0 0 28 24" fill="none" class="entry-back-svg" aria-hidden="true">
  <path d="M11 5L4 12L11 19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19C21.8 12 24 14.2 24 17V19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,UA=`
<svg viewBox="0 0 36 36" fill="none" class="entry-reticle-svg" aria-hidden="true">
  <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M18 3V8M18 28V33M3 18H8M28 18H33" stroke="currentColor" stroke-width="2"/>
</svg>`,Py=`
<svg viewBox="0 0 24 24" fill="currentColor" class="entry-user-svg" aria-hidden="true">
  <circle cx="12" cy="8.2" r="4.2"/>
  <path d="M4 20.5c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8z"/>
</svg>`,Iy=`
<svg viewBox="0 0 24 24" fill="none" class="entry-store-svg" aria-hidden="true">
  <path d="M6 8h12l-1.2 12H7.2L6 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,FA=`
<svg viewBox="0 0 24 24" class="entry-verified-svg" aria-hidden="true">
  <circle cx="12" cy="12" r="10.5" fill="#fe2c55" stroke="#ff6384" stroke-width="1"/>
  <path d="M7.6 12.4l3 3 5.8-6.2" fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,BA=[{id:"youtube",name:"YouTube VR",cat:"V\xEDdeo \xB7 360\xB0",bg:"#dc2626"},{id:"netflix",name:"Netflix",cat:"Cinema \xB7 TV",bg:"#991b1b"},{id:"discord",name:"Discord",cat:"Social \xB7 Voz",bg:"#4f46e5"},{id:"tiktok",name:"TikTok",cat:"V\xEDdeos Curtos",bg:"#0f172a"},{id:"twitch",name:"Twitch",cat:"Lives \xB7 Jogos",bg:"#7c3aed"},{id:"spotify",name:"Spotify",cat:"M\xFAsica \xB7 \xC1udio",bg:"#059669"}],zA=[{id:"chrome",label:"Chrome N",url:"./icons/nextvr-chrome-n.png"},{id:"purple",label:"Neon N",url:"./icons/nextvr-n.png"},{id:"cyber",label:"Cyber Blue",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><circle cx="40" cy="29" r="13" fill="#fff"/><path d="M16 68c0-13 11-21 24-21s24 8 24 21z" fill="#fff"/></svg>')},{id:"emerald",label:"Emerald VR",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><rect x="14" y="26" width="52" height="26" rx="10" fill="#fff"/><circle cx="30" cy="39" r="6" fill="#0f172a"/><circle cx="50" cy="39" r="6" fill="#0f172a"/></svg>')}];function Li(n){return String(n||"").replace(/[&<>"']/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":e===">"?"&gt;":e==='"'?"&quot;":"&#39;")}var Ef={pt:{start:"Iniciar",startVr:"Iniciar VR",settings:"Configura\xE7\xF5es",basicSettings:"Configura\xE7\xF5es b\xE1sicas",handStyle:"Hand tracking style",handDrawn:"M\xE3o desenhada",handInvisible:"Invis\xEDvel",collaborators:"Colaboradores",about:"Sobre",back:"Voltar",store:"Store",storeTitle:"Store NextVR \u2014 Jogos & Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Ativado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"qualidade",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"M\xE9dia (890p)",qLow:"Baixa (390p)",ocularCell:"c\xE2mera grande ocular (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRILHO",handCell:"Hand tracking",fingerTouchOn:"Toque (Sem Pin\xE7a): ON",fingerTouchOff:"Toque (Sem Pin\xE7a): OFF",envTitle:"Ambiente",envAr:"C\xE2mera (AR)",envSunset:"P\xF4r do Sol",envNight:"Noite"},en:{start:"Start",startVr:"Start VR",settings:"Settings",basicSettings:"Basic Settings",handStyle:"Hand tracking style",handDrawn:"Drawn hand",handInvisible:"Invisible",collaborators:"Collaborators",about:"About",back:"Back",store:"Store",storeTitle:"NextVR Store \u2014 Games & Apps",langCell:"LANGUAGE",spatialCell:"SPATIAL APP",on:"Enabled",dock:"Dock",dockSnapOn:"Dock Slot: ON",dockSnapOff:"Dock Slot: OFF",qualityCell:"quality",qAuto:"Auto",qHigh:"High (1080p)",qMed:"Medium (890p)",qLow:"Low (390p)",ocularCell:"ultra-wide camera (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRIGHTNESS",handCell:"Hand tracking",fingerTouchOn:"Finger Touch: ON",fingerTouchOff:"Finger Touch: OFF",envTitle:"Environment",envAr:"Camera (AR)",envSunset:"Sunset",envNight:"Night"},es:{start:"Iniciar",startVr:"Iniciar VR",settings:"Ajustes",basicSettings:"Ajustes b\xE1sicos",handStyle:"Hand tracking style",handDrawn:"Mano dibujada",handInvisible:"Invisible",collaborators:"Colaboradores",about:"Acerca de",back:"Volver",store:"Tienda",storeTitle:"Tienda NextVR \u2014 Juegos y Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Activado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"calidad",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"Media (890p)",qLow:"Baja (390p)",ocularCell:"c\xE1mara gran angular (0.5x)",volumeCell:"VOLUMEN",brightnessCell:"BRILLO",handCell:"Hand tracking",fingerTouchOn:"Toque \xCDndice: ON",fingerTouchOff:"Toque \xCDndice: OFF",envTitle:"Entorno",envAr:"C\xE1mara (AR)",envSunset:"Atardecer",envNight:"Noche"},ja:{start:"\u958B\u59CB",startVr:"VR\u3092\u958B\u59CB",settings:"\u8A2D\u5B9A",basicSettings:"\u57FA\u672C\u8A2D\u5B9A",handStyle:"Hand tracking style",handDrawn:"\u624B\u3092\u8868\u793A",handInvisible:"\u975E\u8868\u793A",collaborators:"\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u30FC",about:"\u6982\u8981",back:"\u623B\u308B",store:"\u30B9\u30C8\u30A2",storeTitle:"NextVR \u30B9\u30C8\u30A2 \u2014 \u30B2\u30FC\u30E0\uFF06\u30A2\u30D7\u30EA",langCell:"\u8A00\u8A9E",spatialCell:"SPATIAL APP",on:"\u30AA\u30F3",dock:"\u30C9\u30C3\u30AF",dockSnapOn:"\u30B9\u30ED\u30C3\u30C8: ON",dockSnapOff:"\u30B9\u30ED\u30C3\u30C8: OFF",qualityCell:"\u753B\u8CEA",qAuto:"\u81EA\u52D5",qHigh:"\u9AD8 (1080p)",qMed:"\u4E2D (890p)",qLow:"\u4F4E (390p)",ocularCell:"\u8D85\u5E83\u89D2\u30AB\u30E1\u30E9 (0.5x)",volumeCell:"\u97F3\u91CF",brightnessCell:"\u660E\u308B\u3055",handCell:"Hand tracking",fingerTouchOn:"\u6307\u30BF\u30C3\u30C1: ON",fingerTouchOff:"\u6307\u30BF\u30C3\u30C1: OFF",envTitle:"\u74B0\u5883",envAr:"\u30AB\u30E1\u30E9 (AR)",envSunset:"\u5915\u66AE\u308C",envNight:"\u591C"},ru:{start:"\u041D\u0430\u0447\u0430\u0442\u044C",startVr:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C VR",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",basicSettings:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",handStyle:"Hand tracking style",handDrawn:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0443\u043A\u0430",handInvisible:"\u041D\u0435\u0432\u0438\u0434\u0438\u043C\u0430\u044F",collaborators:"\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",about:"\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",back:"\u041D\u0430\u0437\u0430\u0434",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",storeTitle:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D NextVR \u2014 \u0418\u0433\u0440\u044B \u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",langCell:"\u042F\u0417\u042B\u041A",spatialCell:"SPATIAL APP",on:"\u0412\u043A\u043B.",dock:"\u0414\u043E\u043A",dockSnapOn:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: ON",dockSnapOff:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: OFF",qualityCell:"\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",qAuto:"\u0410\u0432\u0442\u043E",qHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qMed:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",ocularCell:"\u0448\u0438\u0440\u043E\u043A\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430 (0.5x)",volumeCell:"\u0413\u0420\u041E\u041C\u041A\u041E\u0421\u0422\u042C",brightnessCell:"\u042F\u0420\u041A\u041E\u0421\u0422\u042C",handCell:"Hand tracking",fingerTouchOn:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: ON",fingerTouchOff:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: OFF",envTitle:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",envAr:"\u041A\u0430\u043C\u0435\u0440\u0430 (AR)",envSunset:"\u0417\u0430\u043A\u0430\u0442",envNight:"\u041D\u043E\u0447\u044C"},de:{start:"Starten",startVr:"VR starten",settings:"Einstellungen",basicSettings:"Grundeinstellungen",handStyle:"Hand tracking style",handDrawn:"Gezeichnete Hand",handInvisible:"Unsichtbar",collaborators:"Mitwirkende",about:"\xDCber",back:"Zur\xFCck",store:"Store",storeTitle:"NextVR Store \u2014 Spiele & Apps",langCell:"SPRACHE",spatialCell:"SPATIAL APP",on:"Aktiviert",dock:"Dock",dockSnapOn:"Dock-Slot: ON",dockSnapOff:"Dock-Slot: OFF",qualityCell:"Qualit\xE4t",qAuto:"Auto",qHigh:"Hoch (1080p)",qMed:"Mittel (890p)",qLow:"Niedrig (390p)",ocularCell:"Ultraweitwinkel (0.5x)",volumeCell:"LAUTST\xC4RKE",brightnessCell:"HELLIGKEIT",handCell:"Hand tracking",fingerTouchOn:"Finger-Touch: ON",fingerTouchOff:"Finger-Touch: OFF",envTitle:"Umgebung",envAr:"Kamera (AR)",envSunset:"Sonnenuntergang",envNight:"Nacht"}},Je=n=>(Ef[Ah()]||Ef.pt)[n]||Ef.pt[n]||n;function Tf(n){return Je(n?"handDrawn":"handInvisible")}function Rf({onStart:n,onLaunchGorilla:e,getStatus:t,fullscreen:i=!1}={}){let s=document.createElement("div");s.className=i?"entry-menu-root entry-menu-root--fullscreen":"entry-menu-root",s.dataset.entryMenu="2.0.0",i&&(s.dataset.entryFullscreen="1");let r="home",a=6,o=0,l=null,c=null,u=["Carregando c\xE2mera AR...","Carregando Dock...","Otimizando Hand tracking...","Calibrando lentes 3D...","Carregando aplicativos espaciais...","Iniciando NextVR..."],d=I=>I<17?u[0]:I<35?u[1]:I<55?u[2]:I<75?u[3]:I<92?u[4]:u[5],h=()=>{l&&(clearInterval(l),l=null)},f=()=>{let I=s.querySelector("[data-entry-countdown]"),O=s.querySelector("[data-entry-load-pct]"),L=s.querySelector("[data-entry-load-bar]"),S=s.querySelector("[data-entry-load-status]"),U=s.querySelector("[data-entry-countdown-sub]");I&&(I.textContent=String(a)),O&&(O.textContent=`${o}%`),L&&(L.style.width=`${o}%`),S&&(S.textContent=d(o)),U&&(U.textContent=`COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...`)},g=()=>{h(),a=6,o=0,r="loading",b();let I=6e3,O=performance.now();l=setInterval(()=>{let L=Math.max(0,performance.now()-O);if(o=Math.min(100,Math.round(L/I*100)),a=Math.max(1,Math.ceil((I-L)/1e3)),L>=I){o=100,f(),h(),n==null||n();return}f()},60)},y=()=>{let I=t==null?void 0:t();if(I!=null&&I.clockText)return I.clockText;if(I!=null&&I.time&&I.time!=="--:--")return I.time;let O=new Date;return`${String(O.getHours()).padStart(2,"0")}:${String(O.getMinutes()).padStart(2,"0")}`},p=()=>{var O,L;try{let S=(L=(O=window.NativeXR)==null?void 0:O.battery)==null?void 0:L.call(O);if(S&&S!=="null"){let U=typeof S=="string"?JSON.parse(S):S;if(U&&typeof U.level=="number"){let V=Math.round(Math.max(0,Math.min(1,U.level))*100);return{percent:V,charging:!!U.charging,text:`${V}%${U.charging?" \u26A1":""}`}}}}catch{}let I=t==null?void 0:t();if(I&&typeof I.batteryLevel=="number"){let S=Math.round(Math.max(0,Math.min(1,I.batteryLevel))*100);return{percent:S,charging:!!I.charging,text:`${S}%${I.charging?" \u26A1":""}`}}return{percent:100,charging:!1,text:"100%"}},m=()=>{var I,O;A.handsOn=1,A.handDraw=A.handDraw?0:1,Ke(A),(O=(I=window.NativeXR)==null?void 0:I.handVisuals)==null||O.call(I,!!A.handDraw),Te("handDraw",!!A.handDraw)},x=()=>{let I=Tf(A.handDraw);return`
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
            <span class="entry-card-state" data-hand-style-label>${I}</span>
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
              ${Iy}<span>${Je("store")}</span>
            </button>
          </div>
        </div>
      </div>`,w=()=>{let I=!!A.gorillaInstalled,L=c!==null?`<button type="button" class="entry-btn entry-btn--primary" disabled>Baixando... ${c}%</button>`:I?`<span class="entry-store-badge-ok" data-entry-gorilla-installed>\u2713 Na Biblioteca</span>
         <button type="button" class="entry-btn entry-btn--primary" data-entry-play-gorilla>Jogar Gorilla Tag</button>`:'<button type="button" class="entry-btn entry-btn--primary" data-entry-install-gorilla>BAIXAR</button>';return`
      <div class="entry-subpanel entry-subpanel--store" data-entry-panel="store">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${Je("storeTitle")}</h2>
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

          <div class="entry-store-section-label">APPS DISPON\xCDVEIS NA STORE &amp; BIBLIOTECA</div>
          <div class="entry-store-grid">
            ${BA.map(S=>`
              <div class="entry-store-card" data-entry-store-app="${S.id}">
                <div class="entry-store-card-dot" style="background:${S.bg}">${S.name.slice(0,2).toUpperCase()}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${Li(S.name)}</div>
                  <div class="entry-store-card-cat">${Li(S.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Incluso</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>`},T=()=>{let I=[{id:"passthrough",label:Je("envAr")},{id:"sunset",label:Je("envSunset")},{id:"night",label:Je("envNight")}],O=[{id:"auto",label:Je("qAuto")},{id:"high",label:Je("qHigh")},{id:"medium",label:Je("qMed")},{id:"low",label:Je("qLow")}],L=A.entryEnvChosen&&A.env&&A.env!=="passthrough"?A.env:"passthrough",S=A.quality==="med"?"medium":A.quality||"auto",U=!!A.wideCamera,V=!!A.spatialLauncher,q=A.dockSnapSlot!==0,W=A.lang||"pt",J=Number.isFinite(A.mediaVolume)?A.mediaVolume:70,Q=Number.isFinite(A.brightness)?A.brightness:75;return`
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
              <button type="button" class="entry-seg-btn ${W==="pt"?"on":""}" data-entry-lang="pt">PT</button>
              <button type="button" class="entry-seg-btn ${W==="en"?"on":""}" data-entry-lang="en">EN</button>
              <button type="button" class="entry-seg-btn ${W==="es"?"on":""}" data-entry-lang="es">ES</button>
              <button type="button" class="entry-seg-btn ${W==="ja"?"on":""}" data-entry-lang="ja">JA</button>
              <button type="button" class="entry-seg-btn ${W==="ru"?"on":""}" data-entry-lang="ru">RU</button>
              <button type="button" class="entry-seg-btn ${W==="de"?"on":""}" data-entry-lang="de">DE</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--spatial">
            <div class="entry-bento-title">${Je("spatialCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${V?"on":""}" data-entry-spatial="1">${Je("on")}</button>
              <button type="button" class="entry-seg-btn ${V?"":"on"}" data-entry-spatial="0">${Je("dock")}</button>
              <button type="button" class="entry-seg-btn ${q?"on":""}" data-entry-dock-snap="${q?"1":"0"}" title="Espa\xE7o pr\xE9-definido ao mover janelas na Dock normal">${Je(q?"dockSnapOn":"dockSnapOff")}</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--qualidade">
            <div class="entry-bento-title">${Je("qualityCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              ${O.map(ie=>`<button type="button" class="entry-seg-btn ${S===ie.id?"on":""}" data-entry-quality="${ie.id}">${ie.label}</button>`).join("")}
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--ocular">
            <div class="entry-bento-title">${Je("ocularCell")} \xB7 3DoF / 6DoF</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${U?"on":""}" data-entry-wide-cam="1">0.5x</button>
              <button type="button" class="entry-seg-btn ${U?"":"on"}" data-entry-wide-cam="0">1.0x</button>
              <button type="button" class="entry-seg-btn ${A.sixdof===0?"on":""}" data-entry-dof="3dof" title="Modo 3DoF (rota\xE7\xE3o de cabe\xE7a)">3DoF</button>
              <button type="button" class="entry-seg-btn ${A.sixdof!==0?"on":""}" data-entry-dof="6dof" title="Modo 6DoF Falso (andar no espa\xE7o)">6DoF</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--volume">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${Je("volumeCell")}</span>
              <span class="entry-bento-val" data-vol-val>${J}%</span>
            </div>
            <input type="range" min="0" max="100" value="${J}" class="entry-slider" data-entry-volume />
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
              <button type="button" class="entry-seg-btn ${A.showFps?"on":""}" data-entry-fps="1">FPS: ${A.showFps?"ON":"OFF"}</button>
              <div class="entry-hand-env-title">${Je("envTitle")}</div>
              ${I.map(ie=>`<button type="button" class="entry-seg-btn ${L===ie.id?"on":""}" data-entry-env="${ie.id}">${ie.label}</button>`).join("")}
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
        ${Cy.map(I=>{let O=Ly[I]||"",L=I==="colaboradores do nextVR";return`
          <div class="entry-collab-item ${L?"entry-collab-item--blue":""}" role="listitem" data-collaborator-name="${I}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name ${L?"entry-collab-name--blue":""}" ${L?'data-collab-blue="1"':""}>${I}</span>
              <span class="entry-collab-verified" data-collab-verified="${I}" title="Verificado">${FA}</span>
              ${O?`<span class="entry-collab-bio" data-collab-bio="${I}">${Li(O)}</span>`:""}
            </span>
          </div>`}).join("")}
      </div>
    </div>`,C=()=>`
    <div class="entry-subpanel entry-subpanel--about" data-entry-panel="about">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title" data-about-title>${Af}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
        </div>
      </div>
      <div class="entry-about-body" data-about-body>
        ${wu.map((I,O)=>`
          <p class="entry-about-p ${O===wu.length-1?"entry-about-p--closing":""}">${I}</p>
        `).join("")}
      </div>
    </div>`,B=()=>{let I=A.profileName||"",O=A.profileAvatar||"";return`
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
              ${O?`<img src="${Li(O)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`:Py}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK</span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${Li(I)}" />
            </label>
            <div class="entry-login-presets-wrap">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR</span>
              <div class="entry-login-presets">
                ${zA.map(S=>`
                  <button type="button" class="entry-login-preset ${O===S.url?"on":""}" data-profile-preset="${Li(S.url)}" title="${Li(S.label)}">
                    <img src="${Li(S.url)}" alt="${Li(S.label)}" />
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>`},_=I=>{let O=d(o);return`
      <div class="entry-hud-screen" data-entry-panel="loading" role="status" aria-live="polite">
        <div class="entry-subtitle">${Sf}</div>

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
              <b data-entry-battery-top>${I.text}</b>
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
              <div class="entry-hud-status" data-entry-load-status>${O}</div>
              <div class="entry-hud-hint" data-entry-countdown-sub>COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...</div>
            </div>
          </div>
        </div>

        <footer class="entry-hud-bottom">
          <div class="entry-hud-bar-track">
            <div class="entry-hud-bar-fill" data-entry-load-bar style="width:${o}%"></div>
          </div>
        </footer>
      </div>`},b=()=>{let I=p();if(r==="loading"){s.innerHTML=_(I);let H=s.querySelector("[data-entry-cancel-countdown]");H&&(H.onclick=()=>{h(),r="home",b()});return}let O=r==="settings"?T():r==="collaborators"?R():r==="about"?C():r==="profile"?B():r==="store"?w():v(),L=A.profileName?Li(A.profileName):"NextVR (Login)",S=A.profileAvatar?`<img src="${Li(A.profileAvatar)}" alt="" class="entry-profile-q-img" />`:Py;s.innerHTML=`
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">MAIN MENU</h1>
        <div class="entry-subtitle">${Sf}</div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${r==="store"?"on":""}" data-entry-act="store" title="Abrir Store NextVR">
            ${Iy}
            <span>${Je("store")}</span>
          </button>
          <div class="entry-top-battery" data-entry-battery-pill title="Bateria sincronizada com o celular">
            <span class="entry-top-bat-bar"><i data-entry-battery-fill style="width:${I.percent}%"></i></span>
            <b data-entry-battery-top>${I.text}</b>
          </div>
        </div>
        <button type="button" class="entry-top-reticle" data-entry-act="gear" title="Configura\xE7\xF5es">${UA}</button>
      </header>

      <div class="entry-rail-backdrop" aria-hidden="true">
        <div class="entry-rail-lines"></div>
      </div>

      <div class="entry-layout">
        <aside class="entry-left-column">
          ${x()}

          <div class="entry-profile-box" data-entry-act="profile" role="button" tabindex="0" title="Clique para editar Nome e Foto de Perfil">
            <button type="button" class="entry-profile-q" data-entry-act="profile" title="Foto de Perfil / Login">${S}</button>
            <div class="entry-profile-info">
              <div class="entry-profile-name"><span data-profile-display-name>${L}</span> <small class="entry-profile-edit-tag">PERFIL</small></div>
              <div class="entry-profile-meta">Hand: <span data-profile-hand>${Tf(A.handDraw)}</span></div>
              <div class="entry-profile-meta">Hora: <span data-entry-clock>${y()}</span> \xB7 Bat: <span data-entry-battery>${I.text}</span></div>
            </div>
            <div class="entry-profile-ver">${Ry}</div>
          </div>
        </aside>

        <main class="entry-right-stage">
          ${O}
          ${r==="home"?`
            <button type="button" class="entry-corner-back" data-entry-act="start" title="Iniciar">
              ${OA}
            </button>
          `:""}
        </main>
      </div>
    `,s.querySelectorAll('[data-entry-act="start"]').forEach(H=>{H.onclick=()=>{i?g():n==null||n()}});let U=s.querySelector("[data-entry-cancel-countdown]");U&&(U.onclick=()=>{h(),r="home",b()}),s.querySelectorAll('[data-entry-act="settings"], [data-entry-act="gear"]').forEach(H=>{H.onclick=()=>{h(),r=r==="settings"?"home":"settings",b()}}),s.querySelectorAll('[data-entry-act="store"]').forEach(H=>{H.onclick=oe=>{oe.stopPropagation(),h(),r=r==="store"?"home":"store",b()}}),s.querySelectorAll('[data-entry-act="hand-style"]').forEach(H=>{H.onclick=()=>{m(),b()}}),s.querySelectorAll('[data-entry-act="collaborators"]').forEach(H=>{H.onclick=()=>{h(),r=r==="collaborators"?"home":"collaborators",b()}}),s.querySelectorAll('[data-entry-act="about"]').forEach(H=>{H.onclick=()=>{h(),r=r==="about"?"home":"about",b()}}),s.querySelectorAll('[data-entry-act="profile"]').forEach(H=>{H.onclick=oe=>{oe.stopPropagation(),h(),r=r==="profile"?"home":"profile",b()}}),s.querySelectorAll('[data-entry-act="back"]').forEach(H=>{H.onclick=()=>{h(),r="home",b()}});let V=s.querySelector("[data-entry-install-gorilla]");V&&(V.onclick=()=>{if(A.gorillaInstalled=1,Ke(A),Te("gorilla-installed",!0),window.__gorillaFastTest){c=null,b();return}c=45,b(),setTimeout(()=>{c=90,r==="store"&&b()},110),setTimeout(()=>{c=null,r==="store"&&b()},230)});let q=s.querySelector("[data-entry-play-gorilla]");q&&(q.onclick=()=>{A.gorillaInstalled=1,Ke(A),Te("gorilla-installed",!0),typeof e=="function"?e():n==null||n()});let W=s.querySelector("[data-profile-name-input]");W&&(W.oninput=()=>{A.profileName=W.value.trim(),Ke(A);let H=s.querySelector("[data-profile-display-name]");H&&(H.textContent=A.profileName||"NextVR (Login)")});let J=s.querySelector("[data-profile-save]");J&&(J.onclick=()=>{W&&(A.profileName=W.value.trim()),Ke(A),Te("profile-updated",{name:A.profileName,avatar:A.profileAvatar}),r="home",b()}),s.querySelectorAll("[data-profile-preset]").forEach(H=>{H.onclick=()=>{W&&(A.profileName=W.value.trim()),A.profileAvatar=H.dataset.profilePreset,Ke(A),Te("profile-updated",{name:A.profileName,avatar:A.profileAvatar}),b()}});let Q=s.querySelector("[data-profile-upload]"),ie=s.querySelector("[data-profile-avatar-preview]"),G=s.querySelector("[data-profile-file]"),j=()=>{var H;W&&(A.profileName=W.value.trim(),Ke(A)),typeof((H=window.NativeXR)==null?void 0:H.pickProfilePhoto)=="function"?window.NativeXR.pickProfilePhoto():G&&G.click()};Q&&(Q.onclick=j),ie&&(ie.onclick=j),G&&(G.onchange=()=>{var de;let H=(de=G.files)==null?void 0:de[0];if(!H)return;let oe=new FileReader;oe.onload=()=>{let be=new Image;be.onload=()=>{let qe=document.createElement("canvas");qe.width=160,qe.height=160;let X=qe.getContext("2d"),Kt=Math.min(be.width,be.height),Pe=(be.width-Kt)/2,ze=(be.height-Kt)/2;X.drawImage(be,Pe,ze,Kt,Kt,0,0,160,160),W&&(A.profileName=W.value.trim()),A.profileAvatar=qe.toDataURL("image/jpeg",.86),Ke(A),Te("profile-updated",{name:A.profileName,avatar:A.profileAvatar}),b()},be.src=String(oe.result)},oe.readAsDataURL(H)}),s.querySelectorAll("[data-entry-hand-draw]").forEach(H=>{H.onclick=()=>{var oe,de;A.handsOn=1,A.handDraw=H.dataset.entryHandDraw==="1"?1:0,Ke(A),(de=(oe=window.NativeXR)==null?void 0:oe.handVisuals)==null||de.call(oe,!!A.handDraw),Te("handDraw",!!A.handDraw),b()}}),s.querySelectorAll("[data-entry-finger-touch]").forEach(H=>{H.onclick=()=>{var oe,de;A.fingerTouch=A.fingerTouch===0?1:0,Ke(A),(de=(oe=window.NativeXR)==null?void 0:oe.setFingerTouch)==null||de.call(oe,!!A.fingerTouch),Te("fingerTouch",!!A.fingerTouch),b()}}),s.querySelectorAll("[data-entry-env]").forEach(H=>{H.onclick=()=>{let oe=H.dataset.entryEnv;A.entryEnvChosen=1,oe==="passthrough"?(A.env="passthrough",Ke(A),gi(!0)):Vi(oe),b()}}),s.querySelectorAll("[data-entry-quality]").forEach(H=>{H.onclick=()=>{var oe,de;A.quality=H.dataset.entryQuality==="med"?"medium":H.dataset.entryQuality,Ke(A),Te("quality",A.quality),(de=(oe=window.NativeXR)==null?void 0:oe.setQuality)==null||de.call(oe,A.quality),b()}}),s.querySelectorAll("[data-entry-dock-snap]").forEach(H=>{H.onclick=()=>{A.dockSnapSlot=A.dockSnapSlot===0?1:0,Ke(A),Te("dockSnapSlot",!!A.dockSnapSlot),b()}}),s.querySelectorAll("[data-entry-wide-cam]").forEach(H=>{H.onclick=()=>{var oe,de;A.wideCamera=H.dataset.entryWideCam==="1"?1:0,Ke(A),(de=(oe=window.NativeXR)==null?void 0:oe.wideCamera)==null||de.call(oe,!!A.wideCamera),Te("wideCamera",!!A.wideCamera),b()}}),s.querySelectorAll("[data-entry-dof]").forEach(H=>{H.onclick=()=>{var de,be;let oe=H.dataset.entryDof==="6dof";A.sixdof=oe?1:0,Ke(A),oe||Wt.reset(),(be=(de=window.NativeXR)==null?void 0:de.setSixDofEnabled)==null||be.call(de,oe),Te("sixdof",oe),b()}}),s.querySelectorAll("[data-entry-spatial]").forEach(H=>{H.onclick=()=>{A.spatialLauncher=H.dataset.entrySpatial==="1"?1:0,A.spatialLauncher&&(A.env="passthrough",gi(!0)),Ke(A),Te("spatialLauncher",!!A.spatialLauncher),b()}}),s.querySelectorAll("[data-entry-lang]").forEach(H=>{H.onclick=()=>{Cr(H.dataset.entryLang),b()}}),s.querySelectorAll("[data-entry-fps]").forEach(H=>{H.onclick=()=>{A.showFps=A.showFps?0:1,Ke(A),Te("fps-toggle",A.showFps),b()}});let te=s.querySelector("[data-entry-volume]");te&&(te.oninput=()=>{var de,be;let H=Number(te.value);A.mediaVolume=H,Ke(A),me&&((be=(de=window.NativeXR)==null?void 0:de.setMediaVolumePercent)==null||be.call(de,H));let oe=s.querySelector("[data-vol-val]");oe&&(oe.textContent=`${H}%`)});let ne=s.querySelector("[data-entry-brightness]");ne&&(ne.oninput=()=>{var de,be;let H=Number(ne.value);A.brightness=H,Ke(A),me&&((be=(de=window.NativeXR)==null?void 0:de.setBrightnessPercent)==null||be.call(de,H));let oe=s.querySelector("[data-bri-val]");oe&&(oe.textContent=`${H}%`)})};return b(),s.resetToHome=()=>{h(),r="home",b()},Ve("handDraw",()=>{let I=Tf(A.handDraw),O=s.querySelector("[data-hand-style-label]"),L=s.querySelector("[data-profile-hand]"),S=s.querySelector('[data-entry-act="hand-style"]');O&&(O.textContent=I),L&&(L.textContent=I),S&&(S.dataset.handDraw=A.handDraw?"1":"0",S.classList.toggle("entry-card--hand-drawn",!!A.handDraw),S.classList.toggle("entry-card--hand-invisible",!A.handDraw))}),Ve("device-status",()=>{let I=s.querySelector("[data-entry-clock]");I&&(I.textContent=y());let O=p(),L=s.querySelector("[data-entry-battery]"),S=s.querySelector("[data-entry-battery-top]"),U=s.querySelector("[data-entry-battery-fill]");L&&(L.textContent=O.text),S&&(S.textContent=O.text),U&&(U.style.width=`${O.percent}%`)}),window.nextvrProfilePhoto=I=>{I&&(A.profileAvatar=String(I),Ke(A),Te("profile-updated",{name:A.profileName,avatar:A.profileAvatar}),b())},s}function Cf(n,e){if(e===Ig)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ro||e===Rc){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Ro)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Mu=class extends ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Of(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new jf(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=$s.extractUrlBase(e);a=$s.resolveURL(c,this.path)}else a=$s.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ao(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Uy){try{a[lt.KHR_BINARY_GLTF]=new Zf(e)}catch(d){s&&s(d);return}r=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ip(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case lt.KHR_MATERIALS_UNLIT:a[d]=new Df;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Kf(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[d]=new Jf;break;case lt.KHR_MESH_QUANTIZATION:a[d]=new Qf;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function HA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Nf=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],rn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new La(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ac(u),c.distance=d;break;case"spot":c=new Sc(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,rr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},Df=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(e,t,i){let s=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}},kf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Of=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(o,o)}return Promise.all(r)}},Uf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Vt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Bf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(o[0],o[1],o[2],rn),Promise.all(r)}},Hf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Vf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(o[0],o[1],o[2],rn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Vt)),Promise.all(r)}},Gf=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Wf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},qf=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Xf=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$f=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Yf=class{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}},jf=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==_i.TRIANGLES&&c.mode!==_i.TRIANGLE_STRIP&&c.mode!==_i.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(let g of d){let y=new Ae,p=new D,m=new ot,x=new D(1,1,1),v=new gc(g.geometry,g.material,h);for(let w=0;w<h;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&x.fromBufferAttribute(l.SCALE,w),v.setMatrixAt(w,y.compose(p,m,x));for(let w in l)if(w==="_COLOR_0"){let T=l[w];v.instanceColor=new Er(T.array,T.itemSize,T.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);kt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Uy="glTF",cl=12,Ny={JSON:1313821514,BIN:5130562},Zf=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,cl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-cl,r=new DataView(e,cl),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Ny.JSON){let c=new Uint8Array(e,cl+a,o);this.content=i.decode(c)}else if(l===Ny.BIN){let c=cl+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Kf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=tp[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=tp[u]||u.toLowerCase();if(a[u]!==void 0){let h=i.accessors[e.attributes[u]],f=Ya[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let y=f.attributes[g],p=l[g];p!==void 0&&(y.normalized=p)}d(f)},o,c,rn,h)})})}},Jf=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qf=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Su=class extends Ws{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,d=(i-t)/u,h=d*d,f=h*d,g=e*c,y=g-c,p=-2*f+3*h,m=f-h,x=1-p,v=m-h+d;for(let w=0;w!==o;w++){let T=a[y+w+o],R=a[y+w+l]*u,C=a[g+w+o],B=a[g+w]*u;r[w]=x*T+v*R+p*C+m*B}return r}},VA=new ot,ep=class extends Su{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return VA.fromArray(r).normalize().toArray(r),r}},_i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ya={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dy={9728:sn,9729:Qt,9984:Ql,9985:uh,9986:lo,9987:Hs},ky={33071:ei,33648:po,10497:wr},Lf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GA={CUBICSPLINE:void 0,LINEAR:Mr,STEP:_a},Pf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ta({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),n.DefaultMaterial}function Hr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function rr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qA(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(i){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;a.push(h)}if(s){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;o.push(h)}if(r){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function XA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $A(n){let e,t=n.extensions&&n.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+If(t.attributes):e=n.indices+":"+If(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+If(n.targets[i]);return e}function If(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function np(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var jA=new Ae,ip=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Ra(this.options.manager):this.textureLoader=new Ec(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ao(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Hr(r,o,s),rr(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load($s.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Lf[s.type],o=Ya[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new It(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Lf[s.type],c=Ya[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,p;if(f&&f!==d){let m=Math.floor(h/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(x);v||(y=new c(o,m*f,s.count*f/u),v=new xo(y,f/u),t.cache.add(x,v)),p=new bo(v,l,h%f/u,g)}else o===null?y=new c(s.count*l):y=new c(o,h,s.count*l),p=new It(y,l,g);if(s.sparse!==void 0){let m=Lf.SCALAR,x=Ya[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,T=new x(a[1],v,s.sparse.count*m),R=new c(a[2],w,s.sparse.count*l);o!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized));for(let C=0,B=T.length;C<B;C++){let _=T[C];if(p.setX(_,R[C*l]),l>=2&&p.setY(_,R[C*l+1]),l>=3&&p.setZ(_,R[C*l+2]),l>=4&&p.setW(_,R[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return u.magFilter=Dy[h.magFilter]||Qt,u.minFilter=Dy[h.minFilter]||Hs,u.wrapS=ky[h.wrapS]||wr,u.wrapT=ky[h.wrapT]||wr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){let p=new vn(y);p.needsUpdate=!0,h(p)}),t.load($s.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||YA(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Mo,Wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new wo,Wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ta}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){let d=s[lt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],rn),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Vt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=On);let u=r.alphaMode||Pf.OPAQUE;if(u===Pf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Pf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==en&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==en&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==en){let d=r.emissiveFactor;o.emissive=new Ne().setRGB(d[0],d[1],d[2],rn)}return r.emissiveTexture!==void 0&&a!==en&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),rr(d,r),t.associations.set(d,{materials:e}),r.extensions&&Hr(s,d,r),d})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Oy(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=$A(c),d=s[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Oy(new qn,c,t),s[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?WA(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){let y=u[f],p=a[f],m,x=c[f];if(p.mode===_i.TRIANGLES||p.mode===_i.TRIANGLE_STRIP||p.mode===_i.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new pc(y,x):new St(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===_i.TRIANGLE_STRIP?m.geometry=Cf(m.geometry,Rc):p.mode===_i.TRIANGLE_FAN&&(m.geometry=Cf(m.geometry,Ro));else if(p.mode===_i.LINES)m=new yc(y,x);else if(p.mode===_i.LINE_STRIP)m=new Ea(y,x);else if(p.mode===_i.LINE_LOOP)m=new vc(y,x);else if(p.mode===_i.POINTS)m=new xc(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&XA(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),rr(m,r),p.extensions&&Hr(s,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Hr(s,d[0],r),d[0];let h=new An;r.extensions&&Hr(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt(Co.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Sa(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),rr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let h=new Ae;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new mc(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){let f=s.channels[d],g=s.samplers[f.sampler],y=f.target,p=y.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let h=d[0],f=d[1],g=d[2],y=d[3],p=d[4],m=[];for(let x=0,v=h.length;x<v;x++){let w=h[x],T=f[x],R=g[x],C=y[x],B=p[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let _=i._createAnimationTracks(w,T,R,C,B);if(_)for(let b=0;b<_.length;b++)m.push(_[b])}return new wc(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,jA)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new _o:c.length>1?u=new An:c.length===1?u=c[0]:u=new kt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),rr(u,r),r.extensions&&Hr(i,u,r),r.matrix!==void 0){let d=new Ae;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new An;i.name&&(r.name=s.createUniqueName(i.name)),rr(r,i),i.extensions&&Hr(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[h,f]of s.associations)(h instanceof Wn||h instanceof vn)&&d.set(h,f);return u.traverse(h=>{let f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];sr[r.path]===sr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(sr[r.path]){case sr.weights:c=hs;break;case sr.rotation:c=Bi;break;case sr.position:case sr.scale:c=fs;break;default:switch(i.itemSize){case 1:c=hs;break;case 2:case 3:default:c=fs;break}break}let u=s.interpolation!==void 0?GA[s.interpolation]:Mr,d=this._getArrayFromAccessor(i);for(let h=0,f=l.length;h<f;h++){let g=new c(l[h]+"."+sr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=np(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Bi?ep:Su;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ZA(n,e,t){let i=e.attributes,s=new fi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let u=np(Ya[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){let y=np(Ya[h.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new ti;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Oy(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=tp[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return mt.workingColorSpace!==rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),rr(n,e),ZA(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?qA(n,e.targets,t):n})}var Ki=Object.freeze({model:"Google Cardboard 2015",k1:.22,k2:.24,ipd:.064,fov:80}),Wr=[0,2,7],ap=.55,Au=.12,Fy=10.5,KA=1.28,ja=1,Ru=!1,pl=!1,pt=null,oi=null,Rs=null,wi=null,Ii=null,yn=null,cn=null,ml=null,gl=null,Zi=null,By=1,Eu=!1,ul=null,Tu=0,Cu=0,Yy=0,op=[],Ut=()=>new D,Hn=Ut(),dp=new D(Wr[0],.9,Wr[2]),Lu=[],lr=[null,null],dl=[null,null],yl=[0,0],hl=[Ut(),Ut()],JA=[Ut(),Ut()],Pi=[null,null],qr=[!1,!1],sp=[Ut(),Ut()],ar=null,zy=[0,0],QA=0,dt={cs:1,T:null,n:0,mn:[0,0,0],d:[1,1,1],st:null,id:null,seen:null,stamp:0},Tt=[0,0,0],Be={x:0,y:0,z:0,d:0,nx:0,ny:1,nz:0,fx:0,fy:1,fz:0};function eE(n){let e=n.length/9|0;dt.T=n,dt.n=e;let t=[1e9,1e9,1e9],i=[-1e9,-1e9,-1e9];for(let c=0;c<n.length;c+=3)for(let u=0;u<3;u++){let d=n[c+u];d<t[u]&&(t[u]=d),d>i[u]&&(i[u]=d)}dt.mn=t,dt.d=[0,1,2].map(c=>Math.max(1,Math.ceil((i[c]-t[c])/dt.cs)+1));let s=dt.d[0]*dt.d[1]*dt.d[2],r=new Int32Array(s+1),a=dt.cs,o=c=>{let u=[1e9,1e9,1e9,-1e9,-1e9,-1e9];for(let d=0;d<3;d++)for(let h=0;h<3;h++){let f=n[c*9+d*3+h];f<u[h]&&(u[h]=f),f>u[h+3]&&(u[h+3]=f)}return[0,1,2].map(d=>[Math.floor((u[d]-t[d])/a),Math.floor((u[d+3]-t[d])/a)])},l=null;for(let c=0;c<2;c++){if(c===1){for(let u=0;u<s;u++)r[u+1]+=r[u];dt.st=r.slice(),dt.id=new Int32Array(r[s]),l=r.slice()}for(let u=0;u<e;u++){let d=o(u);for(let h=d[2][0];h<=d[2][1];h++)for(let f=d[1][0];f<=d[1][1];f++)for(let g=d[0][0];g<=d[0][1];g++){let y=(h*dt.d[1]+f)*dt.d[0]+g;c===0?r[y+1]++:dt.id[l[y]++]=u}}}dt.seen=new Int32Array(e)}function tE(n,e,t,i,s,r,a,o,l,c,u,d){let h=a-i,f=o-s,g=l-r,y=c-i,p=u-s,m=d-r,x=n-i,v=e-s,w=t-r,T=h*x+f*v+g*w,R=y*x+p*v+m*w;if(T<=0&&R<=0){Tt[0]=i,Tt[1]=s,Tt[2]=r;return}let C=n-a,B=e-o,_=t-l,b=h*C+f*B+g*_,N=y*C+p*B+m*_;if(b>=0&&N<=b){Tt[0]=a,Tt[1]=o,Tt[2]=l;return}let I=T*N-b*R;if(I<=0&&T>=0&&b<=0){let G=T/(T-b);Tt[0]=i+G*h,Tt[1]=s+G*f,Tt[2]=r+G*g;return}let O=n-c,L=e-u,S=t-d,U=h*O+f*L+g*S,V=y*O+p*L+m*S;if(V>=0&&U<=V){Tt[0]=c,Tt[1]=u,Tt[2]=d;return}let q=U*R-T*V;if(q<=0&&R>=0&&V<=0){let G=R/(R-V);Tt[0]=i+G*y,Tt[1]=s+G*p,Tt[2]=r+G*m;return}let W=b*V-U*N;if(W<=0&&N-b>=0&&U-V>=0){let G=(N-b)/(N-b+(U-V));Tt[0]=a+G*(c-a),Tt[1]=o+G*(u-o),Tt[2]=l+G*(d-l);return}let J=1/(W+q+I),Q=q*J,ie=I*J;Tt[0]=i+h*Q+y*ie,Tt[1]=s+f*Q+p*ie,Tt[2]=r+g*Q+m*ie}function hp(n,e,t,i){if(!dt.T)return!1;let s=dt.T,r=dt.cs,a=dt.mn,o=dt.d,l=i*i,c=!1,u=++dt.stamp,d=[0,1,2].map(g=>Math.max(0,Math.floor(([n,e,t][g]-i-a[g])/r))),h=[0,1,2].map(g=>Math.min(o[g]-1,Math.floor(([n,e,t][g]+i-a[g])/r)));for(let g=d[2];g<=h[2];g++)for(let y=d[1];y<=h[1];y++)for(let p=d[0];p<=h[0];p++){let m=(g*o[1]+y)*o[0]+p;for(let x=dt.st[m],v=dt.st[m+1];x<v;x++){let w=dt.id[x];if(dt.seen[w]===u)continue;dt.seen[w]=u;let T=w*9;tE(n,e,t,s[T],s[T+1],s[T+2],s[T+3],s[T+4],s[T+5],s[T+6],s[T+7],s[T+8]);let R=n-Tt[0],C=e-Tt[1],B=t-Tt[2],_=R*R+C*C+B*B;if(_<l){l=_,c=!0,Be.x=Tt[0],Be.y=Tt[1],Be.z=Tt[2];let b=s[T+3]-s[T],N=s[T+4]-s[T+1],I=s[T+5]-s[T+2],O=s[T+6]-s[T],L=s[T+7]-s[T+1],S=s[T+8]-s[T+2];Be.fx=N*S-I*L,Be.fy=I*O-b*S,Be.fz=b*L-N*O;let U=Math.hypot(Be.fx,Be.fy,Be.fz)||1;Be.fx/=U,Be.fy/=U,Be.fz/=U}}}if(!c)return!1;let f=Math.sqrt(l);return Be.d=f,f>1e-5?(Be.nx=(n-Be.x)/f,Be.ny=(e-Be.y)/f,Be.nz=(t-Be.z)/f):(Be.nx=Be.fx,Be.ny=Be.fy,Be.nz=Be.fz),!0}function Hy(n,e,t,i,s){if(!dt.T)return null;let r=dt.T,a=dt.cs,o=dt.mn,l=dt.d,c=Math.floor((n-o[0])/a),u=Math.floor((t-o[2])/a);if(c<0||u<0||c>=l[0]||u>=l[2])return null;let d=e,h=e+i*s,f=Math.floor((d-o[1])/a),g=Math.floor((h-o[1])/a),y=null;for(;i<0?f>=Math.max(g,0):f<=Math.min(g,l[1]-1);f+=i){if(f<0||f>=l[1])continue;let p=(u*l[1]+f)*l[0]+c;for(let m=dt.st[p],x=dt.st[p+1];m<x;m++){let v=dt.id[m]*9,w=r[v]-n,T=r[v+2]-t,R=r[v+3]-n,C=r[v+5]-t,B=r[v+6]-n,_=r[v+8]-t,b=(C-_)*(w-B)+(B-R)*(T-_);if(Math.abs(b)<1e-9)continue;let N=((C-_)*(0-B)+(B-R)*(0-_))/b,I=((_-T)*(0-B)+(w-B)*(0-_))/b,O=1-N-I;if(N<0||I<0||O<0)continue;let L=N*r[v+1]+I*r[v+4]+O*r[v+7];if(!((L-e)*i<=0||Math.abs(L-e)>s)&&(!y||Math.abs(L-e)<Math.abs(y.y-e))){let S=r[v+3]-r[v],U=r[v+4]-r[v+1],V=r[v+5]-r[v+2],q=r[v+6]-r[v],W=r[v+7]-r[v+1],J=r[v+8]-r[v+2],Q=V*q-S*J,ie=Math.hypot(U*J-V*W,Q,S*W-U*q)||1;y={y:L,ny:Q/ie}}}}return y}function nE(n,e,t,i){let s=(r,a)=>{let o=Hy(r,e+1.5,a,-1,8);if(!o)return null;let l=Math.abs(o.ny)>.6?o:null;if(!l)return null;let c=Hy(r,l.y+.05,a,1,3);if(c&&Math.abs(c.y-l.y)<2.2)return null;let u=l.y+i+.05;return hp(r,u,a,i-.02)?null:[r,u,a]};for(let r=0;r<=8;r++)for(let a=0;a<(r?16:1);a++){let o=a/16*6.2832,l=n+Math.cos(o)*r*.5,c=t+Math.sin(o)*r*.5,u=s(l,c);if(u)return u}return null}var iE=(n,e)=>{let t=n.attributes[e];if(t&&(t.isInterleavedBufferAttribute||!(t.array instanceof Float32Array))){let i=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)i[s*t.itemSize+r]=t.getComponent(s,r);n.setAttribute(e,new It(i,t.itemSize))}};function sE(n){let e=0,t=0;for(let u of n)e+=u.attributes.position.count,t+=u.index?u.index.count:u.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),a=new Uint32Array(t),o=0,l=0;for(let u of n){let d=u.attributes.position.count;if(i.set(u.attributes.position.array,o*3),s.set(u.attributes.normal.array,o*3),r.set(u.attributes.uv.array,o*2),u.index){let h=u.index.array;for(let f=0;f<h.length;f++)a[l++]=h[f]+o}else for(let h=0;h<d;h++)a[l++]=o+h;o+=d}let c=new qn;return c.setAttribute("position",new It(i,3)),c.setAttribute("normal",new It(s,3)),c.setAttribute("uv",new It(r,2)),c.setIndex(new It(a,1)),c}function lp(n){return n?(n.generateMipmaps=!1,n.minFilter=Qt,n.magFilter=Qt,n.anisotropy=1,n):null}function rE(n){var o;n.updateMatrixWorld(!0);let e=[];n.traverse(l=>{l.isMesh&&l.geometry.attributes.position&&e.push(l)});let t=0;e.forEach(l=>{let c=l.geometry;t+=Math.floor((c.index?c.index.count:c.attributes.position.count)/3)});let i=new Float32Array(t*9),s=0,r=new Map,a=new Map;for(let l of e){let c=Array.isArray(l.material)?l.material[0]:l.material,u=l.geometry.clone();u.applyMatrix4(l.matrixWorld);let d=u.attributes.position,h=u.index,f=Math.floor((h?h.count:d.count)/3)*3;for(let p=0;p<f;p++){let m=h?h.getX(p):p;i[s++]=d.getX(m),i[s++]=d.getY(m),i[s++]=d.getZ(m)}u.attributes.normal||u.computeVertexNormals(),u.attributes.uv||u.setAttribute("uv",new It(new Float32Array(d.count*2),2));for(let p of Object.keys(u.attributes))p!=="position"&&p!=="normal"&&p!=="uv"&&u.deleteAttribute(p);["position","normal","uv"].forEach(p=>iE(u,p));let g=`${c.map?((o=c.map.source)==null?void 0:o.uuid)||c.map.uuid:"nomap"}|${c.color?c.color.getHexString():"fff"}|${c.transparent?1:0}|${c.alphaTest||0}|${c.side||0}`,y=a.get(g);y||(y=new So({map:lp(c.map),color:c.color?c.color.clone():16777215,transparent:c.transparent,opacity:c.opacity,alphaTest:c.alphaTest,side:c.side,emissive:c.emissive?c.emissive.clone():0,emissiveMap:lp(c.emissiveMap)}),a.set(g,y)),r.has(g)||r.set(g,{m:y,l:[]}),r.get(g).l.push(u),l.geometry.dispose()}for(let l of r.values()){let c=l.l,u=null;try{let h=sE(c);h.computeBoundingSphere(),u=new St(h,l.m)}catch{}(u?[u]:c.map(h=>new St(h,l.m))).forEach(h=>{h.matrixAutoUpdate=!1,h.frustumCulled=!0,Ii.add(h)}),u&&c.forEach(h=>h.dispose())}return i.subarray(0,s)}function aE(n){Lu.length=0,n.updateMatrixWorld(!0);let e=[];if(n.traverse(S=>{S.isSkinnedMesh&&e.push(S)}),!e.length)return;let t=e.reduce((S,U)=>U.geometry.attributes.position.count>S.geometry.attributes.position.count?U:S);e.forEach(S=>{S!==t&&(S.visible=!1)});let i=t.skeleton.bones,s=S=>S.name.toLowerCase().replace(/[^a-z]/g,""),r=S=>i.find(U=>S.test(s(U))),a={ur:r(/^upperarmr$/),lr:r(/^lowerarmr$/),hr:r(/^wristr$/),ul:r(/^upperarml$/),ll:r(/^lowerarml$/),hl:r(/^wristl$/),body:r(/^main$/),head:r(/^head$/)},o={};["r","l"].forEach(S=>{o[S]={pinky:r(new RegExp("^pinkyf?"+S+"$")),index:r(new RegExp("^pointerf?"+S+"$")),thumb:r(new RegExp("^thumb"+S+"$"))}});let l=new Set([a.ur,a.lr,a.hr,a.ul,a.ll,a.hl]);for(let S in o)for(let U in o[S])l.add(o[S][U]);let c=i.map(S=>l.has(S)),u=t.geometry,d=u.attributes.skinIndex,h=u.attributes.skinWeight,f=u.attributes.position.count,g=u.index,y=new Uint8Array(f);for(let S=0;S<f;S++){let U=0;for(let V=0;V<4;V++)c[d.getComponent(S,V)]&&(U+=h.getComponent(S,V));y[S]=U>.45?1:0}let p=[],m=g?g.count:f;for(let S=0;S<m;S+=3){let U=g?g.getX(S):S,V=g?g.getX(S+1):S+1,q=g?g.getX(S+2):S+2;y[U]&&y[V]&&y[q]&&p.push(U,V,q)}p.length>90&&(u.clearGroups(),u.setIndex(p));let x=Array.isArray(t.material)?t.material[0]:t.material;t.material=new So({map:lp(x.map),color:x.color?x.color.clone():16777215,emissive:2236962}),t.frustumCulled=!1;let v=S=>S.getWorldPosition(Ut()),w=v(a.ur),T=v(a.ul),R=w.clone().sub(T).normalize(),C=v(a.head).sub(v(a.body)).normalize();C.addScaledVector(R,-C.dot(R)).normalize();let B=new D().crossVectors(R,C),_=new ot().setFromRotationMatrix(new Ae().makeBasis(R,C,B)).invert(),b=w.distanceTo(v(a.lr))+v(a.lr).distanceTo(v(a.hr)),N=ja/b,I=w.clone().add(T).multiplyScalar(.5),O={};["r","l"].forEach(S=>{let U={};for(let J in o[S]){let Q=o[S][J];U[J]=Q?[{b:Q,bind:Q.quaternion.clone(),pos:Q.getWorldPosition(Ut()),wq:Q.getWorldQuaternion(new ot),Al:Ut(),cur:0}]:[]}let V=S==="r"?a.hr:a.hl,q=V.getWorldPosition(Ut()),W=q.clone().sub(I).dot(R)>0?1:-1;O[S]={hb:V,hbBind:V.quaternion.clone(),hpos:q,hwq:V.getWorldQuaternion(new ot),ch:U,nRest:R.clone().multiplyScalar(-W),qs:null}});function L(S,U){let V=S.nRest.clone().multiplyScalar(U),q=[S.ch.index[0],S.ch.pinky[0]].filter(Boolean).map(G=>G.pos),J=(q.length?q.reduce((G,j)=>G.add(j),Ut()).multiplyScalar(1/q.length):S.hpos.clone().addScaledVector(C,-.1)).sub(S.hpos).normalize(),Q=V.clone().addScaledVector(J,-V.dot(J)).normalize(),ie=S.hwq.clone().invert();S.fl=J.clone().applyQuaternion(ie),S.nl=Q.clone().applyQuaternion(ie),S.QlInv=new ot().setFromRotationMatrix(new Ae().makeBasis(S.fl,Q.clone().applyQuaternion(ie),new D().crossVectors(S.fl,S.nl))).invert();for(let G in S.ch)S.ch[G].forEach(j=>{j.Al.crossVectors(J,Q).normalize().applyQuaternion(j.wq.clone().invert())})}L(O.r,By),L(O.l,By),Zi&&Zi.parent&&Zi.parent.remove(Zi),Zi=new An,Zi.quaternion.copy(_),Zi.scale.setScalar(N),Zi.add(n),Zi.position.set(0,-.32,.1).sub(I.clone().applyQuaternion(_).multiplyScalar(N)),cn.add(Zi),cn.updateMatrixWorld(!0),[[a.ur,a.lr,a.hr,1],[a.ul,a.ll,a.hl,-1]].forEach(([S,U,V,q])=>{let W=cn.worldToLocal(v(S));Lu.push({s:S,e:U,h:V,side:q,bs:S.quaternion.clone(),be:U.quaternion.clone(),sp:W,reach:ja*.97,axis:V.position.clone().normalize(),info:O[q>0?"r":"l"]})})}function Vy(n,e,t,i){n.quaternion.copy(e),n.updateWorldMatrix(!0,!0);let s=n.getWorldPosition(Ut()),r=t.getWorldPosition(Ut()).sub(s).normalize(),a=i.clone().sub(s).normalize(),o=n.getWorldQuaternion(new ot),l=new ot().setFromUnitVectors(r,a),c=n.parent.getWorldQuaternion(new ot).invert();n.quaternion.copy(c.multiply(l).multiply(o)),n.updateWorldMatrix(!1,!0)}function oE(n,e){if(!n||!n.hb)return;let t=n.hb;if(t.quaternion.copy(n.hbBind),e){t.updateWorldMatrix(!0,!1);let s=t.getWorldQuaternion(new ot).clone().invert(),r=cn.getWorldQuaternion(new ot),a=e.f.clone().applyQuaternion(r).applyQuaternion(s).normalize(),o=e.n.clone().applyQuaternion(r).applyQuaternion(s);if(o.addScaledVector(a,-o.dot(a)),o.lengthSq()>1e-4){o.normalize(),n.nl&&o.dot(n.nl)<-.15&&o.negate();let l=new ot().setFromRotationMatrix(new Ae().makeBasis(a,o,new D().crossVectors(a,o))).multiply(n.QlInv);l.slerp(new ot,.35),n.qs?n.qs.slerp(l,.22):n.qs=l.clone(),t.quaternion.multiply(n.qs)}for(let l in n.ch){let c=Math.max(0,Math.min(.85,e.c[l]??0));n.ch[l].forEach(u=>{u.cur=u.cur*.72+c*.28,u.b.quaternion.copy(u.bind).multiply(new ot().setFromAxisAngle(u.Al,u.cur*.95))})}}else for(let i in n.ch)n.ch[i].forEach(s=>{s.cur*=.85,s.b.quaternion.copy(s.bind).multiply(new ot().setFromAxisAngle(s.Al,s.cur*1.15))});t.updateWorldMatrix(!1,!0)}function Gy(n,e,t){n.s.quaternion.copy(n.bs),n.e.quaternion.copy(n.be),n.s.updateWorldMatrix(!0,!0);let i=n.s.getWorldPosition(Ut()),s=n.e.getWorldPosition(Ut()),r=n.h.getWorldPosition(Ut()),a=i.distanceTo(s),o=s.distanceTo(r),l=e.clone().sub(i),c=Math.min(Math.max(l.length(),Math.abs(a-o)+.01),(a+o)*.995);l.normalize();let u=Math.max(-1,Math.min(1,(a*a+c*c-o*o)/(2*a*c))),d=cn.getWorldQuaternion(new ot),h=new D(n.side*.45,-1,.35).normalize().applyQuaternion(d),f=h.clone().addScaledVector(l,-h.dot(l));f.lengthSq()<1e-4&&f.set(0,-1,0),f.normalize();let g=i.clone().addScaledVector(l,a*u).addScaledVector(f,a*Math.sqrt(Math.max(0,1-u*u)));if(Vy(n.s,n.bs,n.e,g),Vy(n.e,n.be,n.h,e),s=n.e.getWorldPosition(Ut()),r=n.h.getWorldPosition(Ut()),e.clone().sub(r).lengthSq()>1e-5){let p=n.e.parent.getWorldQuaternion(new ot).invert(),m=n.e.getWorldQuaternion(new ot),x=new ot().setFromUnitVectors(r.sub(s).normalize(),e.clone().sub(s).normalize());n.e.quaternion.copy(p.multiply(x).multiply(m)),n.e.updateWorldMatrix(!1,!0)}oE(n.info,t)}var Vr=(n,e)=>new D(n[e].x-.5,.5-n[e].y,-(n[e].z||0));function Wy(n,e){let t=Vr(n,0),i=Vr(n,5),s=Vr(n,9),r=Vr(n,17),a=s.clone().sub(t).normalize(),o=i.clone().sub(t),l=r.clone().sub(t),c=e?new D().crossVectors(l,o):new D().crossVectors(o,l);c.addScaledVector(a,-c.dot(a)).normalize();let u=t.distanceTo(s)||.1,d=(f,g)=>Math.max(0,Math.min(1,1.55-Vr(n,f).distanceTo(t)/(Vr(n,g).distanceTo(t)||u)*.72)),h=Math.max(0,Math.min(1,1.4-Vr(n,4).distanceTo(r)/(i.distanceTo(r)||u)*.75));return{f:a,n:c,c:{index:d(8,5),pinky:d(20,17),thumb:h}}}var jy="nextvr.gorilla.coins",Vn=(()=>{try{let n=localStorage.getItem(jy);if(n!==null&&n!==""){let e=Number(n);if(Number.isFinite(e)&&e>=0)return Math.floor(e)}}catch{}return 100})(),Pn=null,or=null,cp=null,Za=null,up=-1,rp=0;function lE(n=1){let e=Math.max(0,Math.floor(Vn+n));if(e===Vn)return Vn;Vn=e;try{localStorage.setItem(jy,String(Vn))}catch{}return Zy(),pt&&(pt.dataset.gorillaRightArmCoins=String(Vn)),typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Vn),Vn}function Zy(){if(!cp||!or||up===Vn)return;up=Vn;let n=cp,e=or.width,t=or.height;n.clearRect(0,0,e,t),n.fillStyle="#0b1222",n.beginPath(),n.roundRect?n.roundRect(4,4,e-8,t-8,22):n.rect(4,4,e-8,t-8),n.fill(),n.lineWidth=5,n.strokeStyle="#facc15",n.stroke();let i=50,s=t/2,r=28,a=n.createRadialGradient(i-8,s-8,4,i,s,r);a.addColorStop(0,"#fef08a"),a.addColorStop(.55,"#facc15"),a.addColorStop(1,"#ca8a04"),n.fillStyle=a,n.beginPath(),n.arc(i,s,r,0,Math.PI*2),n.fill(),n.lineWidth=3,n.strokeStyle="#fef9c3",n.stroke(),n.fillStyle="#713f12",n.font="900 26px Inter, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("$",i,s+1),n.textAlign="left",n.fillStyle="#fde047",n.font="800 16px Inter, system-ui, sans-serif",n.fillText("MOEDAS",92,34),n.fillStyle="#ffffff",n.font="900 36px Inter, system-ui, sans-serif",n.fillText(String(Vn),92,74),Za&&(Za.needsUpdate=!0)}function cE(){if(Pn)return Pn;or=document.createElement("canvas"),or.width=256,or.height=112,cp=or.getContext("2d"),Za=new bc(or),Za.minFilter=Qt,Za.magFilter=Qt,up=-1,Zy(),Pn=new An,Pn.name="gorilla-right-arm-coin-counter";let n=new en({color:1976635}),e=new St(new Gs(.088,.044,.072),n);e.position.set(0,0,-.02),Pn.add(e);let t=new en({color:15381256}),i=new St(new Gs(.148,.068,.012),t);i.position.set(0,0,-.004),Pn.add(i);let s=new en({map:Za,transparent:!0,depthTest:!0,side:On}),r=new St(new En(.14,.062),s);return r.position.set(0,0,.004),Pn.add(r),typeof window<"u"&&(window.__gorillaRightArmCoinCounter={coins:Vn,attachedTo:"right-arm",side:1,visible:!0}),Pn}function Ky(){if(!Pn||!cn)return;let n=Lu[0],e=Jy(),t=new D(0,1,0).applyQuaternion(cn.getWorldQuaternion(new ot));if(n&&n.e&&n.h){let i=n.e.getWorldPosition(Ut()),s=n.h.getWorldPosition(Ut()),r=i.clone().lerp(s,.72),a=e.clone().sub(r);a.lengthSq()>1e-5&&(a.normalize(),r.addScaledVector(a,.065)),Pn.position.copy(r),Pn.up.copy(t),Pn.lookAt(e)}else{let i=cn.localToWorld(new D(.24,-.22,-.44));Pn.position.copy(i),Pn.up.copy(t),Pn.lookAt(e)}typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Vn,window.__gorillaRightArmCoinCounter.position=Pn.position.toArray())}function uE(n,e){if(!e||e.length<21||(n==null?void 0:n.physicalSide)==="right")return!0;if((n==null?void 0:n.physicalSide)==="left")return!1;if(e[9].x>=.54)return!0;if(e[9].x<=.46)return!1;if(e[9].y<e[0].y&&Math.abs(e[5].x-e[17].x)>.022)return e[5].x<e[17].x;let t=String((n==null?void 0:n.id)||(n==null?void 0:n.handedness)||"").toLowerCase();return typeof(n==null?void 0:n.left)=="boolean"?n.left===!0:t.includes("left")||t==="l"?!0:t.includes("right")||t==="r"?!1:e[9].x>=.5}function dE(n){dl[0]=null,dl[1]=null;let e=[];for(let t=0;t<yi.length;t++){let i=yi[t];if(!i||!i.points||i.points.length<63)continue;let s=i.points,r=new Array(21);for(let a=0;a<21;a++)r[a]={x:s[a*3],y:s[a*3+1],z:s[a*3+2]||0};e.push({th:i,lm:r})}if(e.length>=2){e.sort((t,i)=>t.lm[9].x-i.lm[9].x);for(let t=0;t<2;t++){let{lm:i}=e[t],s=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);lr[t]={x:i[9].x,y:i[9].y,s,ori:Wy(i,t===1),t:n},dl[t]=i}}else if(e.length===1){let{th:t,lm:i}=e[0],r=uE(t,i)?1:0,a=1-r,o=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);lr[r]={x:i[9].x,y:i[9].y,s:o,ori:Wy(i,r===1),t:n},dl[r]=i,lr[a]=null,dl[a]=null,qr[a]=!1,Pi[a]=null}if(ar&&n-ar.t<450){let t=ar.idx;lr[t]={x:ar.x,y:ar.y,s:ar.s,ori:null,t:n}}}var Jy=()=>cn.getWorldPosition(Ut());function Pu(){yn&&(yn.position.copy(dp),Hn.set(0,0,0),qr[0]=!1,qr[1]=!1,Pi[0]=null,Pi[1]=null,yl[0]=0,yl[1]=0,yn.updateMatrixWorld(!0))}var fl=()=>new Promise(n=>setTimeout(n,16));async function qy(n){let e=await fetch(n);if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.arrayBuffer(),i=new Uint8Array(t);if(i.length>=4&&i[0]===103&&i[1]===108&&i[2]===84&&i[3]===70)return t;let s=new DecompressionStream("gzip"),r=s.writable.getWriter();return r.write(i),r.close(),await new Response(s.readable).arrayBuffer()}function Xy(n,e){return new Promise((t,i)=>n.parse(e,"",t,i))}function Gr(n,e){oi&&(oi.querySelectorAll("[data-gorilla-splash-fill]").forEach(t=>{t.style.width=`${n}%`}),e&&oi.querySelectorAll("[data-gorilla-splash-step]").forEach(t=>{t.textContent=e}))}function hE(){if(Ii)return;Ii=new Aa,Ii.background=new Ne(8898815),Ii.add(new Mc(14677247,4877115,.95));let n=new La(16773846,.85);n.position.set(30,60,20),Ii.add(n),yn=new An,Ii.add(yn),cn=new Gt(Ki.fov,1200/2/800,.05,380),cn.position.set(0,0,0),yn.add(cn);let e=Ki.ipd*.5;ml=new Gt(Ki.fov,1200/2/800,.05,380),ml.position.set(-e,0,0),gl=new Gt(Ki.fov,1200/2/800,.05,380),gl.position.set(e,0,0),cn.add(ml,gl);let t=cE();t&&!t.parent&&Ii.add(t),Ky();try{wi=new Ar({canvas:Rs,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),wi.setPixelRatio(1),wi.setSize(768,512,!1),wi.setScissorTest(!0)}catch{wi=null}}async function fE(){if(!Eu){if(ul)return ul;if(hE(),typeof window<"u"&&window.__gorillaFastTest){Eu=!0;return}return ul=(async()=>{var n;try{Gr(18,"Descompactando mapa da floresta 3D..."),await fl();let e=new Mu;e.textureLoader=new Ra((n=e.options)==null?void 0:n.manager);let[t,i]=await Promise.all([qy("./gorilla-map.task"),qy("./gorilla-rig.task")]);Gr(45,"Carregando texturas e geometria..."),await fl();let[s,r]=await Promise.all([Xy(e,t),Xy(e,i)]);Gr(68,"Otimizando malhas 3D (Lambert merge)..."),await fl();let a=rE(s.scene);Gr(84,"Construindo grade f\xEDsica de colis\xE3o..."),await fl(),eE(a);let o=nE(Wr[0],Wr[1],Wr[2],ap)||[Wr[0],.9,Wr[2]];dp.set(o[0],o[1],o[2]),Gr(94,"Ativando bra\xE7os Gorilla 3D..."),await fl(),aE(r.scene),Pu(),Eu=!0,Gr(100,"Pronto! Entrando no Gorilla Tag...")}catch(e){console.warn("Gorilla Tag load fallback:",e),Eu=!0}finally{ul=null}})(),ul}}function pE(){if(pt)return;let n=document.getElementById("hud")||document.body;pt=document.createElement("div"),pt.id="gorilla-overlay",pt.dataset.testid="gorilla-overlay",pt.dataset.cardboardLenses="2015",pt.dataset.gorillaStage="idle",pt.dataset.gorillaRightArmCoins=String(Vn),pt.dataset.lensModel=Ki.model,pt.dataset.lensK1=String(Ki.k1),pt.dataset.lensK2=String(Ki.k2),pt.style.cssText=["position:fixed","left:0","top:0","width:1200px","height:800px","z-index:9997","display:none","background:#050811","overflow:hidden","touch-action:none"].join(";"),Rs=document.createElement("canvas"),Rs.id="gorilla-canvas",Rs.width=768,Rs.height=512,Rs.style.cssText="position:absolute;left:0;top:0;width:1200px;height:800px;display:block;",pt.appendChild(Rs);let e=document.createElement("div");e.className="gorilla-cardboard-divider",e.style.cssText=["position:absolute","left:599px","top:0","width:2px","height:800px","background:rgba(255,255,255,.22)","pointer-events:none","z-index:4"].join(";"),pt.appendChild(e);let t=(r,a)=>{let o=document.createElement("div");return o.style.cssText=`position:absolute;left:${r+140}px;top:12px;width:320px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:6;pointer-events:auto;font-family:Inter,system-ui,sans-serif`,o.innerHTML=`
      <button type="button" data-gorilla-act="spawn" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Spawn</button>
      <button type="button" data-gorilla-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-gorilla-act="exit" ${a?'data-gorilla-exit="1"':""} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(153,27,27,.82);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `,o};pt.appendChild(t(0,!0)),pt.appendChild(t(600,!1)),oi=document.createElement("div"),oi.id="gorilla-splash",oi.dataset.testid="gorilla-splash",oi.style.cssText=["position:absolute","left:0","top:0","width:1200px","height:800px","z-index:10","display:none","flex-direction:row","align-items:stretch","justify-content:stretch","background:radial-gradient(circle at 50% 38%, #1e293b 0%, #090d16 70%, #030712 100%)","color:#f8fafc","font-family:Inter,system-ui,sans-serif","text-align:center","user-select:none"].join(";");let i=r=>`
    <div style="width:600px;height:800px;display:flex;align-items:center;justify-content:center;${r?"border-right:1px solid rgba(255,255,255,.15)":""}">
      <div style="padding:26px 32px;border-radius:24px;background:rgba(15,23,42,.90);border:1px solid rgba(56,189,248,.38);box-shadow:0 24px 64px rgba(0,0,0,.72);display:flex;flex-direction:column;align-items:center;gap:12px;max-width:460px">
        <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:88px;height:88px;border-radius:20px;object-fit:cover;box-shadow:0 12px 32px rgba(249,115,22,.45);border:2px solid rgba(255,255,255,.22)">
        <div class="gorilla-splash-title" ${r?'data-gorilla-entering="1"':""} style="font-size:23px;font-weight:800;letter-spacing:.02em;color:#f8fafc">Entrando no Gorilla Tag</div>
        <div class="gorilla-splash-sub" style="font-size:11.5px;font-weight:600;color:#94a3b8;letter-spacing:.08em;text-transform:uppercase">Lentes ${Ki.model} \xB7 Hand Tracking</div>
        <div data-gorilla-splash-step style="font-size:11.5px;font-weight:600;color:#38bdf8;margin-top:2px">Inicializando floresta 3D...</div>
        <div style="width:220px;height:7px;border-radius:999px;background:rgba(148,163,184,.2);overflow:hidden;margin-top:4px">
          <div data-gorilla-splash-fill style="width:15%;height:100%;border-radius:999px;background:linear-gradient(90deg,#f97316,#38bdf8);transition:width .2s ease"></div>
        </div>
      </div>
    </div>
  `;oi.innerHTML=i(!0)+i(!1),pt.appendChild(oi),pt.addEventListener("click",r=>{let a=r.target.closest("[data-gorilla-act]");if(!a)return;let o=a.dataset.gorillaAct;o==="exit"?ev():o==="spawn"?Pu():o==="recenter"&&(Yy=new ni().setFromQuaternion(_e.quaternion,"YXZ").y)});let s=r=>{let a=pt.getBoundingClientRect();if(!a.width||!a.height)return;let o=Math.max(0,Math.min(1,(r.clientX-a.left)/a.width)),l=Math.max(0,Math.min(1,(r.clientY-a.top)/a.height)),c=o>=.5?(o-.5)*2:o*2;ar={idx:c>=.5?1:0,x:c,y:l,s:r.buttons?.12:.18,t:performance.now()}};pt.addEventListener("pointerdown",s),pt.addEventListener("pointermove",r=>{r.buttons&&s(r)}),pt.addEventListener("pointerup",()=>{ar=null}),n.appendChild(pt)}function $y(){let n=Jy();for(let e=0;e<3&&hp(n.x,n.y,n.z,ap);e++){let t=ap-Be.d;yn.position.x+=Be.nx*t,yn.position.y+=Be.ny*t,yn.position.z+=Be.nz*t,n.x+=Be.nx*t,n.y+=Be.ny*t,n.z+=Be.nz*t;let i=Hn.x*Be.nx+Hn.y*Be.ny+Hn.z*Be.nz;i<0&&(Hn.x-=Be.nx*i,Hn.y-=Be.ny*i,Hn.z-=Be.nz*i,Be.ny>.5&&(Hn.x*=.88,Hn.z*=.88))}n.y<dp.y-18&&Pu()}function Qy(n){if(!Ru)return;Tu=requestAnimationFrame(Qy);let e=Math.min((n-(Cu||n))/1e3,.04)||.016;if(Cu=n,!Ii||!yn||!cn)return;let t=new ni().setFromQuaternion(_e.quaternion,"YXZ");cn.quaternion.setFromEuler(new ni(t.x,t.y-Yy,t.z,"YXZ")),dE(n);let i=Wt.consumeStepDelta();i.lengthSq()>1e-6&&(yn.position.x+=i.x,yn.position.z+=i.z,yn.position.y+=i.y*.25),Hn.y-=9.8*e,Hn.multiplyScalar(1-.14*e),yn.position.addScaledVector(Hn,e),yn.updateMatrixWorld(!0),$y();for(let s=0;s<2;s++){lr[s]&&n-lr[s].t>220&&(lr[s]=null);let r=lr[s],a=Lu[s?0:1];if(!r){if(qr[s]=!1,Pi[s]=null,yl[s]=0,a){let g=new D(s?.24:-.24,-.26,-.46);Gy(a,cn.localToWorld(g),null)}continue}yl[s]++;let o=a?a.sp:Ut(),l=Ut();if(l.set((r.x-.5)*1.65,(.5-r.y)*1.8-.34,-Math.min(.95,Math.max(.25,.09/Math.max(r.s,.035)))),Pi[s]){let g=l.clone().sub(Pi[s]);g.length()>.22&&l.copy(Pi[s]).addScaledVector(g.normalize(),.22),l.lerp(Pi[s],.42)}let c=l.clone().sub(o);c.length()>ja*.97&&l.copy(o).addScaledVector(c.setLength(ja*.97),1),JA[s].copy(l);let u=cn.localToWorld(l.clone());if(yl[s]>2&&hp(u.x,u.y,u.z,Au)){let g=new D(Be.x+Be.nx*Au,Be.y+Be.ny*Au,Be.z+Be.nz*Au);if(!qr[s])qr[s]=!0,sp[s].copy(g);else{let y=sp[s].clone().sub(u),p=y.length();if(p>.001){p>.24&&y.multiplyScalar(.24/p),yn.position.add(y),rp+=y.length(),rp>=.45&&(rp=0,lE(1));let m=y.clone().multiplyScalar(KA/Math.max(e,.01));Hn.lerp(m,.5),Hn.length()>Fy&&Hn.setLength(Fy),yn.updateMatrixWorld(!0),$y()}}hl[s].copy(sp[s])}else qr[s]=!1,hl[s].copy(u);let h=cn.worldToLocal(hl[s].clone()),f=h.clone().sub(o);f.length()>ja*.97&&(h.copy(o).addScaledVector(f.setLength(ja*.97),1),hl[s].copy(cn.localToWorld(h))),Pi[s]||(Pi[s]=Ut()),Pi[s].copy(h),a&&Gy(a,hl[s],r.ori)}if(Ky(),wi&&ml&&gl){yn.updateMatrixWorld(!0);let s=Rs.width,r=Rs.height,a=s>>1;wi.setViewport(0,0,a,r),wi.setScissor(0,0,a,r),wi.render(Ii,ml),wi.setViewport(a,0,a,r),wi.setScissor(a,0,a,r),wi.render(Ii,gl)}}function Ka(){var t,i,s,r,a,o;if(pE(),pl||Ru)return;pl=!0,window.__gorillaStereoOverlay=!0,window.__gorillaExit=ev,window.__gorillaOnHands=null,pt&&(pt.dataset.gorillaRightArmCoins=String(Vn)),A.handsOn=!0,ms().catch(()=>{});try{(i=(t=window.NativeXR)==null?void 0:t.handVisuals)==null||i.call(t,!1)}catch{}op=ge.map(l=>({win:l,hidden:!!l.hidden}));for(let l of[...ge])typeof l.setHidden=="function"?l.setHidden(!0):l.shell&&(l.shell.style.display="none");tr(!0),gn(!1),xn(!0),(r=(s=ue).invalidate)==null||r.call(s),(o=(a=ue).render)==null||o.call(a,We,_e),pt.dataset.gorillaStage="entering",pt.style.display="block",oi.style.display="flex",Gr(15,"Iniciando Gorilla Tag...");let n=typeof window<"u"&&!!window.__gorillaFastTest,e=new Promise(l=>setTimeout(l,n?240:1200));Promise.all([fE(),e]).then(()=>{pl&&(pl=!1,Ru=!0,pt.dataset.gorillaStage="playing",oi.style.display="none",Pu(),Cu=performance.now(),Qy(Cu))})}function ev(){var n,e,t,i,s,r;pl=!1,Ru=!1,window.__gorillaStereoOverlay=!1,window.__gorillaOnHands=null,zy[0]=0,zy[1]=0,QA=0,Tu&&(cancelAnimationFrame(Tu),Tu=0),oi&&(oi.style.display="none"),pt&&(pt.dataset.gorillaStage="idle",pt.style.display="none");try{(e=(n=window.NativeXR)==null?void 0:n.handVisuals)==null||e.call(n,!!A.handDraw)}catch{}for(let{win:a,hidden:o}of op)ge.includes(a)&&(typeof a.setHidden=="function"?a.setHidden(o):a.shell&&(a.shell.style.display=""));op=[],A.spatialLauncher||(xn(!1),gn(!0)),(i=(t=ue).invalidate)==null||i.call(t),(r=(s=ue).render)==null||r.call(s,We,_e)}var se=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var mE=n=>{if(me)return bn("browser-extra",k("browser"),n);try{window.open(n,"_blank","noopener")}catch{ht("Bloqueado pelo navegador")}},gE=[{name:"Google",url:"https://www.google.com/",bg:"#ffffff",color:"#4285F4",badge:"G"},{name:"YouTube",url:"https://www.youtube.com/",bg:"#ff0033",color:"#ffffff",badge:"\u25B6"},{name:"Roblox",url:"https://www.roblox.com/",bg:"#1e293b",color:"#f8fafc",badge:"\u25C8"},{name:"Discord",url:"https://discord.com/app",bg:"#5865F2",color:"#ffffff",badge:"D"},{name:"Instagram",url:"https://www.instagram.com/",bg:"linear-gradient(135deg,#feda75,#d62976,#4f5bd5)",color:"#ffffff",badge:"\u25CE"},{name:"Facebook",url:"https://www.facebook.com/",bg:"#1877F2",color:"#ffffff",badge:"f"},{name:"Reddit",url:"https://www.reddit.com/",bg:"#FF4500",color:"#ffffff",badge:"r/"},{name:"TikTok",url:"https://www.tiktok.com/",bg:"#09090b",color:"#25F4EE",badge:"\u266A"}],yE=[{title:"YouTube \xB7 V\xEDdeos 360\xB0 VR",domain:"youtube.com",url:"https://www.youtube.com/",bg:"linear-gradient(135deg,#7f1d1d,#ef4444)",badge:"\u25B6 YouTube"},{title:"Roblox \xB7 Mundos e Jogos",domain:"roblox.com",url:"https://www.roblox.com/",bg:"linear-gradient(135deg,#0f172a,#334155)",badge:"\u25C8 Roblox"},{title:"Discord \xB7 Comunidade VR",domain:"discord.com",url:"https://discord.com/app",bg:"linear-gradient(135deg,#312e81,#6366f1)",badge:"Discord"},{title:"DuckDuckGo \xB7 Busca Web",domain:"duckduckgo.com",url:"https://duckduckgo.com/?q=NextVR",bg:"linear-gradient(135deg,#7c2d12,#ea580c)",badge:"DuckDuckGo"}],vE=[{name:"Spotify",url:"https://open.spotify.com/",bg:"#121316",logoBg:"#1ED760",logoColor:"#000000",logoText:"Spotify",pill:!0},{name:"Music",url:"https://music.youtube.com/",bg:"#121316",logoBg:"#FF0033",logoColor:"#ffffff",logoText:"\u25C9 Music",pill:!0},{name:"Crunchyroll",url:"https://www.crunchyroll.com/",bg:"#121316",logoBg:"#F47521",logoColor:"#ffffff",logoText:"crunchyroll",pill:!1},{name:"HBO Max",url:"https://www.max.com/",bg:"#121316",logoBg:"#002BE7",logoColor:"#ffffff",logoText:"HBO max",pill:!1},{name:"Hulu",url:"https://www.hulu.com/",bg:"#121316",logoBg:"#1CE783",logoColor:"#050709",logoText:"hulu",pill:!1},{name:"Tubi",url:"https://tubitv.com/",bg:"#121316",logoBg:"#FA382F",logoColor:"#ffffff",logoText:"tubi",pill:!1},{name:"Paramount+",url:"https://www.paramountplus.com/",bg:"#121316",logoBg:"#0064FF",logoColor:"#ffffff",logoText:"Paramount+",pill:!1},{name:"Peacock",url:"https://www.peacocktv.com/",bg:"#121316",logoBg:"#000000",logoColor:"#ffffff",logoText:"peacock",pill:!1},{name:"Twitch",url:"https://www.twitch.tv/",bg:"#121316",logoBg:"#9146FF",logoColor:"#ffffff",logoText:"twitch",pill:!1},{name:"ESPN",url:"https://www.espn.com/",bg:"#121316",logoBg:"#CC0000",logoColor:"#ffffff",logoText:"ESPN",pill:!1}],xE=[{title:"Acima das Nuvens 360\xB0",sub:"Experi\xEAncia WebXR Panor\xE2mica",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0284c7,#1e1b4b)"},{title:"Explora\xE7\xE3o Espacial VR",sub:"Tour Orbital Interativo 3D",url:"https://eyes.nasa.gov/",bg:"linear-gradient(135deg,#311042,#090d16)"},{title:"Jogos WebXR Imersivos",sub:"Cat\xE1logo VR no Navegador",url:"https://constructarcade.com/",bg:"linear-gradient(135deg,#065f46,#0f172a)"}];function bE(){return`
    <div class="qb-home-scroll">
      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Populares</span></div>
        <div class="qb-pop-row">
          ${gE.map(n=>`
            <button type="button" class="qb-pop-item" data-qb-url="${Le(n.url)}" title="${Le(n.name)}">
              <span class="qb-pop-icon" style="background:${n.bg};color:${n.color}">${Le(n.badge)}</span>
              <span class="qb-pop-lbl">${Le(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Continuar navegando</span><span class="qb-sec-more">Ver mais</span></div>
        <div class="qb-cont-grid">
          ${yE.map(n=>`
            <button type="button" class="qb-cont-card" data-qb-url="${Le(n.url)}" title="${Le(n.title)}">
              <div class="qb-cont-thumb" style="background:${n.bg}"><span>${Le(n.badge)}</span></div>
              <div class="qb-cont-meta">
                <div class="qb-cont-ttl">${Le(n.title)}</div>
                <div class="qb-cont-dom">${Le(n.domain)}</div>
              </div>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Entretenimento</span></div>
        <div class="qb-ent-grid">
          ${vE.map(n=>`
            <button type="button" class="qb-ent-tile" data-qb-url="${Le(n.url)}" title="${Le(n.name)}">
              <div class="qb-ent-card" style="background:${n.bg}">
                <span class="qb-ent-logo" style="background:${n.logoBg};color:${n.logoColor}">${Le(n.logoText)}</span>
              </div>
              <span class="qb-ent-lbl">${Le(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Experi\xEAncias imersivas</span><span class="qb-sec-more">Explorar</span></div>
        <div class="qb-imm-grid">
          ${xE.map(n=>`
            <button type="button" class="qb-imm-card" data-qb-url="${Le(n.url)}" style="background:${n.bg}">
              <span class="qb-imm-badge">WEBXR</span>
              <span class="qb-imm-ttl">${Le(n.title)}</span>
              <span class="qb-imm-sub">${Le(n.sub)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `}function Sp(n,e,t="https://duckduckgo.com/",i={}){var L,S,U,V,q,W,J,Q,ie,G;let s=(i==null?void 0:i.mode)==="incognito-tab"||i!=null&&i.incognito?"incognito-tab":"new-tab",r=s==="incognito-tab",a=r&&t==="https://duckduckgo.com/"?"https://duckduckgo.com/?kae=d&kp=-1":t,o=r?"Navegador \xB7 Guia An\xF4nima":(i==null?void 0:i.mode)==="new-tab"?"Navegador \xB7 Nova Guia":e||"Navegador",l=ge.find(j=>j.id==="browser");if(l){l.el.dataset.browserMode=s,l.el.dataset.incognito=r?"1":"0",l.shell&&(l.shell.dataset.browserMode=s,l.shell.dataset.incognito=r?"1":"0");let j=l.el.querySelector(".win-title");j&&(j.textContent=o);let te=l.el.querySelector("[data-browser-incognito]");te&&(te.dataset.browserIncognito=r?"1":"0",te.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",te.style.background=r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)",te.style.borderColor=r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)");let ne=l.el.querySelector("[data-native-browser], iframe"),H=l.el.querySelector(".qb-home-overlay"),oe=t==="https://duckduckgo.com/";H&&(H.hidden=!oe);let de=l.el.querySelector(".qb-urlfld");return de&&(de.value=a),ne&&(ne.dataset.homeOverlay=oe?"1":"0",me?(ne.dataset.url=a,(S=(L=window.NativeXR)==null?void 0:L.browserCmd)==null||S.call(L,"browser","go",a)):ne.src=a),mn(l),(V=(U=ue).invalidate)==null||V.call(U),(W=(q=ue).render)==null||W.call(q,We,_e),l}let c=se("div");c.style.cssText=`display:flex;flex-direction:column;height:100%;background:${r?"#120e1e":"#171a22"};color:#e9edf4`;let u=se("div");u.style.cssText=`display:flex;align-items:center;gap:4px;padding:3px 6px;background:${r?"#0b0814":"#0e1117"};border-bottom:1px solid rgba(255,255,255,.08)`;let d=se("button","qb-icn");d.innerHTML=ee("back"),d.title="Voltar";let h=se("button","qb-icn");h.innerHTML=ee("enter"),h.style.transform="rotate(180deg)",h.title="Avan\xE7ar";let f=se("button","qb-icn");f.innerHTML=ee("refresh"),f.title="Recarregar";let g=se("span","qb-mode-badge");g.dataset.browserIncognito=r?"1":"0",g.dataset.qbAct="home",g.title="In\xEDcio do Navegador",g.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",g.style.cssText=`cursor:pointer;font-size:10px;font-weight:800;letter-spacing:.04em;padding:3px 8px;border-radius:999px;white-space:nowrap;color:#f8fafc;background:${r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)"};border:1px solid ${r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)"}`;let y=se("input","fld qb-urlfld");y.type="text",y.placeholder=r?"Pesquisa privada an\xF4nima ou URL":"Pesquisar ou inserir URL",y.value=a;let p=se("button","qb-icn");p.innerHTML=ee("star"),p.title="Favorito",u.append(d,h,f,g,y,p);let m=se("div");m.style.cssText="flex:1;min-height:0;position:relative;background:#181a20";let x=t==="https://duckduckgo.com/",v=se("div","qb-home-overlay",bE());v.hidden=!x;let w=se(me?"div":"iframe");me?(w.dataset.nativeBrowser="browser",w.style.cssText="width:100%;height:100%;background:#181a20;position:relative;overflow:hidden",w.dataset.url=a,w.dataset.homeOverlay=x?"1":"0",w.appendChild(v),m.appendChild(w)):(w.style.cssText="width:100%;height:100%;border:0;background:#fff",w.referrerPolicy="no-referrer",w.sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation",w.src=a,w.dataset.homeOverlay=x?"1":"0",m.append(w,v));let T=se("div","qb-dock"),R=document.createElement("button");R.className="dock-av",R.title="Perfil",R.setAttribute("aria-label","Perfil"),R.innerHTML=_E,T.appendChild(R);let C=document.createElement("button");C.className="dock-status",C.title="Status",C.innerHTML=`<span class="dock-time">--:--</span><span class="dock-wifi">${ee("wifi")}</span><span class="dock-bat">${wE}</span>`,T.appendChild(C),c.append(u,m,T);function B(){let j=Yi(),te=T.querySelector(".dock-time");if(te&&(te.textContent=j.time==="--:--"?new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):j.time),me&&j.batteryLevel!=null){let ne=T.querySelector(".dock-bat .b-fill");ne&&(ne.setAttribute("width",String(Math.max(2,13*j.batteryLevel))),ne.setAttribute("fill",j.charging?"#8de6c8":j.batteryLevel<.2?"#ff6b6b":"currentColor"))}}B();let _=setInterval(B,2e4);!me&&navigator.getBattery&&navigator.getBattery().then(j=>{function te(){let ne=T.querySelector(".dock-bat .b-fill");ne&&(ne.setAttribute("width",String(Math.max(2,13*j.level))),ne.setAttribute("fill",j.charging?"#8de6c8":j.level<.2?"#ff6b6b":"currentColor"))}j.addEventListener("levelchange",te),j.addEventListener("chargingchange",te),te()}).catch(()=>{});function b(){let j=T.querySelector(".dock-wifi");j&&(j.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",b),addEventListener("offline",b),b();function N(j){var ne,H,oe,de;let te=(j||"").trim();te&&(/^https?:\/\//i.test(te)||(te=/\.\w{2,}($|\/)/.test(te)?"https://"+te:"https://duckduckgo.com/?q="+encodeURIComponent(te)),y.value=te,v.hidden=!0,w.dataset.homeOverlay="0",me?(w.dataset.url=te,(H=(ne=window.NativeXR)==null?void 0:ne.browserCmd)==null||H.call(ne,"browser","go",te)):w.src=te,(de=(oe=ue).invalidate)==null||de.call(oe))}function I(j,te){var ne,H;me&&((H=(ne=window.NativeXR)==null?void 0:ne.browserCmd)==null||H.call(ne,"browser",j,te||""))}v.addEventListener("click",j=>{let te=j.target.closest("[data-qb-url]");te&&(j.stopPropagation(),N(te.dataset.qbUrl))}),g.onclick=()=>{var j,te;v.hidden=!v.hidden,w.dataset.homeOverlay=v.hidden?"0":"1",(te=(j=ue).invalidate)==null||te.call(j)},y.addEventListener("keydown",j=>{j.key==="Enter"&&(N(y.value),y.blur())}),y.addEventListener("focus",()=>si(!0,y)),d.onclick=()=>I("back"),h.onclick=()=>I("fwd"),f.onclick=()=>I("reload");let O=nn({id:"browser",title:o,node:c});return O!=null&&O.el&&(O.el.dataset.browserMode=s,O.el.dataset.incognito=r?"1":"0"),O!=null&&O.shell&&(O.shell.dataset.browserMode=s,O.shell.dataset.incognito=r?"1":"0"),O._cleanupQB=()=>{clearInterval(_),removeEventListener("online",b),removeEventListener("offline",b)},O.obj.position.copy(O.target),O.apply(),We.updateMatrixWorld(!0),(Q=(J=ue).invalidate)==null||Q.call(J),(G=(ie=ue).render)==null||G.call(ie,We,_e),O}function ov(n="new-tab"){let e=n==="incognito-tab",t=Sp("browser",e?"Navegador \xB7 Guia An\xF4nima":"Navegador \xB7 Nova Guia",e?"https://duckduckgo.com/?kae=d&kp=-1":"https://duckduckgo.com/",{mode:e?"incognito-tab":"new-tab",incognito:e});return ht(e?"Guia An\xF4nima aberta":"Nova Guia aberta"),t}typeof window<"u"&&(window.nextvrOpenBrowserOption=ov);var _E='<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',wE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';function bn(n,e,t,i){if(n==="browser"||n==="youtube"||n==="netflix"||n==="prime"||n==="tiktok"||n==="twitch"||n==="discord")return Sp(n,e,t);let s=se("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=se("div","row browser-bar"),a=se("input","fld");a.value=t,a.placeholder=k("search");let o=se("button","go",ee("enter"));o.setAttribute("aria-label",k("open")),o.title=k("open");let l=se("button","go",ee("external"));l.setAttribute("aria-label",k("open")),l.title=k("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(a,o,l);let c=se("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let u=se("div");u.style.cssText="flex:1;min-height:0;position:relative";let d=se(me?"div":"iframe");me&&(d.dataset.nativeBrowser=n,d.style.cssText="width:100%;height:100%;background:#fff"),d.setAttribute("referrerpolicy","no-referrer"),d.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),u.appendChild(d),s.append(r,c,u);let h=g=>{let y=(g||"").trim();if(y){if(/^https?:\/\//i.test(y)||(y=/\.\w{2,}($|\/)/.test(y)?"https://"+y:"https://duckduckgo.com/?q="+encodeURIComponent(y)),a.value=y,me){d.dataset.url=y,c.style.display="none";return}d.src=y,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};o.onclick=()=>h(a.value),a.addEventListener("keydown",g=>{g.key==="Enter"&&h(a.value)}),a.addEventListener("focus",()=>si(!0,a)),l.onclick=()=>mE(a.value),h(t);let f=nn({id:n,title:e,node:s});return f.shell.classList.add("web-page-window"),f}var Le=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Iu=[];function Ap(){let n=se("div","pad"),e=se("div");e.innerHTML=`<h2>${k("gallery")}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;let t=se("div");t.style.marginTop="22px",t.innerHTML=`<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${k("env")}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;let i=se("div","grid3"),s=()=>{i.innerHTML="";for(let d of Th()){let h=se("button","env"+(d.thumb?" env-pano":""));h.style.background=d.thumb?`url('${d.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",h.innerHTML=`<span>${d.name}</span>`,h.setAttribute("aria-pressed",A.env===d.id?"true":"false"),h.onclick=()=>{Vi(d.id),[...i.children].forEach(f=>f.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true"),ht("Ambiente: "+d.name)},i.appendChild(h)}};s(),Ve("env",s),t.appendChild(i);let r=se("div");r.style.cssText="margin-top:26px;display:flex;align-items:center;gap:10px",r.innerHTML=`<h3 style="font-size:18px;margin:0;font-weight:700">${k("gallery")}</h3>`;let a=se("button","go",k("pickPhotos")),o=se("input");o.type="file",o.accept="image/*",o.multiple=!0,o.style.display="none",r.appendChild(a);let l=se("div","grid4"),c=se("div");c.style.cssText="margin-top:14px";let u=()=>{if(l.innerHTML="",!Iu.length){l.innerHTML=`<p class="sub" style="grid-column:1/-1">${k("noPhotos")}</p>`;return}Iu.forEach(d=>{let h=se("button","thumb");h.innerHTML=`<img src="${d}" alt="">`,h.onclick=()=>{c.innerHTML=`<img src="${d}" style="width:100%;border-radius:16px">`},l.appendChild(h)})};return a.onclick=()=>o.click(),o.onchange=()=>{for(let d of o.files)Iu.push(URL.createObjectURL(d));u(),ht(Iu.length+" fotos")},u(),n.append(e,t,r,o,l,c),nn({id:"gallery",title:k("gallery"),node:n})}function ME(){let n=se("div","pad");n.innerHTML=`<h2>${k("env")}</h2><p class="sub">Troque sem fechar nada.</p>`;let e=se("div","grid3");for(let t of Th()){let i=se("button","env"+(t.thumb?" env-pano":""));i.style.background=t.thumb?`url('${t.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",i.innerHTML=`<span>${t.name}</span>`,i.setAttribute("aria-pressed",A.env===t.id),i.onclick=()=>{Vi(t.id),[...e.children].forEach(s=>s.setAttribute("aria-pressed","false")),i.setAttribute("aria-pressed","true")},e.appendChild(i)}return n.appendChild(e),nn({id:"env",title:k("env"),node:n})}function SE(n,e,t){let i=se("div","opt");return i.append(se("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function un(n,e,t,i){let s=se("div","yt-row"),r=se("span","yt-ic");r.innerHTML=n;let a=se("div","yt-txt");if(a.innerHTML=`<div class="yt-title">${e}</div>${t?`<div class="yt-sub">${t}</div>`:""}`,s.append(r,a),i){let o=se("div","yt-ctl");o.appendChild(i),s.appendChild(o)}else{let o=se("span","yt-ch");o.innerHTML="",s.appendChild(o)}return s}function vl(n,e){let t=se("button","yt-sw");t.type="button",t.setAttribute("role","switch");let i=()=>{t.dataset.on=A[n]?"1":"0",t.setAttribute("aria-checked",A[n]?"true":"false")};return i(),t.onclick=()=>{A[n]=A[n]?0:1,Ke(),i(),e&&e(A[n])},t}function Ja(n){let e=se("div","yt-sec");return e.textContent=n,e}function Xr(n,e,t,i){let s=se("input","yt-range");return s.type="range",s.min=e,s.max=t,s.step=i,s.value=A[n],s.oninput=()=>{A[n]=+s.value,Ke()},s}function lv(n){n.innerHTML="";let e=gy(),t=n,i=se("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${k(ol()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=se("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!ol()){let o=se("button","go",k("xrInstall"));o.onclick=()=>{xf()},s.append(o)}let r=se("button","go",k("xrSelfTest"));r.onclick=()=>bf(),s.append(r);let a=se("div","seg");for(let[o,l,c]of[["controllers",k("xrModeControllers"),k("xrModeControllersSub")],["hands",k("xrModeHands"),k("xrModeHandsSub")]]){let u=se("button",null,l);u.title=c,u.setAttribute("aria-pressed",String(xy()===o)),u.onclick=()=>{My(o),[...a.children].forEach(d=>d.setAttribute("aria-pressed","false")),u.setAttribute("aria-pressed","true")},a.appendChild(u)}t.append(SE(k("xrHandMode"),k("xrHandModeSub"),a),s),t.append(se("p","note",k("xrHandModeNote"))),!ol()&&!e.runtimeBundled&&t.append(se("p","note",k("xrBundlingNote")))}function Hu(){var B,_;let n=se("div","quick-center"),e=se("section","quick-panel"),t=se("aside","quick-side"),i=se("div","quick-status"),s=()=>{var N,I;try{let O=(I=(N=window.NativeXR)==null?void 0:N.battery)==null?void 0:I.call(N);if(O){let L=JSON.parse(O);if(L&&typeof L.level=="number")return L}}catch{}let b=Yi();return b&&typeof b.batteryLevel=="number"?{level:b.batteryLevel,charging:!!b.charging}:null},r=s(),a=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});i.innerHTML=`<div><strong>Controles r\xE1pidos</strong><span>${a}</span></div><div class="quick-battery">${ee("battery")}<b data-cc-battery>${r?Math.round(r.level*100):"\u2014"}%</b></div>`,Ve("device-status",()=>{let b=i.querySelector("[data-cc-battery]");if(!b)return;let N=s();b.textContent=`${N?Math.round(N.level*100):"\u2014"}%`});let l=se("button","quick-gear",ee("settings"));l.type="button",l.title="Todas as configura\xE7\xF5es",l.setAttribute("aria-label","Todas as configura\xE7\xF5es"),l.onclick=()=>Bu(),i.appendChild(l);let c=se("div","quick-tiles"),u=(b,N,I,O,L=!1)=>{let S=se("button",`quick-tile${L?" is-disabled":""}`);return S.type="button",S.innerHTML=`<span class="quick-tile-icon">${ee(b)}</span><span><b>${N}</b><small>${I}</small></span>`,S.disabled=L,O&&(S.onclick=O),c.appendChild(S),S};u("wifi","Wi-Fi","Abrir conex\xF5es",()=>{var b;return(b=window.NativeXR)!=null&&b.systemPanel?window.NativeXR.systemPanel("internet"):ht("Conex\xF5es dispon\xEDveis no Android")}),u("bluetooth","Bluetooth","Dispositivos",()=>{var b;return(b=window.NativeXR)!=null&&b.systemPanel?window.NativeXR.systemPanel("bluetooth"):ht("Bluetooth dispon\xEDvel no Android")}),u("android","Apps Android","Abrir janela Shizuku",()=>zu()),u("lock","Limite","Movimento protegido",null,!0),e.append(i,c);let d=se("div","quick-section");d.innerHTML='<div class="quick-section-title"><b>Controles r\xE1pidos</b><span>Toque para ativar ou ajustar</span></div>';let h=se("div","quick-controls"),f=A.env==="night"?"passthrough":A.env,g=!1,y=null,p=null,m=b=>{var N;g=!!b,(N=window.NativeXR)!=null&&N.audioEnabled&&window.NativeXR.audioEnabled(!g);for(let I of[y,p])I&&(I.classList.toggle("is-active",g),I.setAttribute("aria-pressed",String(g)));y&&(y.querySelector("small").textContent=g?"\xC1udio silenciado":"Som ativado")},x=(b,N,I,O,L=!1)=>{let S=se("button",`quick-control${L?" is-active":""}`);return S.type="button",S.setAttribute("aria-pressed",String(L)),S.innerHTML=`<span>${ee(b)}</span><b>${N}</b><small>${I}</small>`,S.onclick=()=>{let U=O(S);S.classList.toggle("is-active",!!U),S.setAttribute("aria-pressed",String(!!U))},h.appendChild(S),S};x("camera","Vis\xE3o do ambiente",A.env==="passthrough"?"C\xE2mera ativa":"C\xE2mera desligada",b=>{let N=A.env!=="passthrough";return gi(N),b.querySelector("small").textContent=N?"C\xE2mera ativa":"C\xE2mera desligada",N},A.env==="passthrough"),y=x("volumeoff","N\xE3o perturbe","Silenciar \xE1udio do app",()=>(m(!g),g)),x("crosshair","Recentralizar","Ajustar a vis\xE3o",()=>(Gi(),ht("Vis\xE3o recentralizada"),!1)),x("moon","Modo noturno",A.env==="night"?"Ativado":"Desativado",b=>{let N=A.env!=="night";return N?(f=A.env,Vi("night")):Vi(f==="night"?"passthrough":f),b.querySelector("small").textContent=N?"Ativado":"Desativado",N},A.env==="night"),x("settings","Mais configura\xE7\xF5es","Imagem, janelas e idioma",()=>(Bu(),!1)),x("android","Apps do Android","Abrir launcher Shizuku",()=>(zu(),!1)),x("appGrid","Spatial App",A.spatialLauncher?"Ativado (Sem Dock)":"Desativado (Dock normal)",b=>{let N=!A.spatialLauncher;return Cp(N),b.querySelector("small").textContent=N?"Ativado (Sem Dock)":"Desativado (Dock normal)",N},!!A.spatialLauncher),x("vision","C\xE2mera Grande Ocular",A.wideCamera?"Ativada":"Normal",b=>{var N,I;return A.wideCamera=A.wideCamera?0:1,Ke(A),(I=(N=window.NativeXR)==null?void 0:N.wideCamera)==null||I.call(N,!!A.wideCamera),b.querySelector("small").textContent=A.wideCamera?"Ativada":"Normal",!!A.wideCamera},!!A.wideCamera),x("move",k("dockSnapSlot"),A.dockSnapSlot!==0?k("on"):k("off"),b=>(A.dockSnapSlot=A.dockSnapSlot===0?1:0,Ke(A),b.querySelector("small").textContent=A.dockSnapSlot!==0?k("on"):k("off"),A.dockSnapSlot!==0),A.dockSnapSlot!==0),x("crosshair",k("fingerTouch"),A.fingerTouch!==0?k("on"):k("off"),b=>{var N,I;return A.fingerTouch=A.fingerTouch===0?1:0,Ke(A),(I=(N=window.NativeXR)==null?void 0:N.setFingerTouch)==null||I.call(N,A.fingerTouch!==0),Te("fingerTouch",A.fingerTouch!==0),b.querySelector("small").textContent=A.fingerTouch!==0?k("on"):k("off"),A.fingerTouch!==0},A.fingerTouch!==0),x("move","Modo 3DoF / 6DoF",A.sixdof!==0?"6DoF Ativado":"3DoF Ativado",b=>{var N,I;return A.sixdof=A.sixdof===0?1:0,Ke(A),A.sixdof||Wt.reset(),(I=(N=window.NativeXR)==null?void 0:N.setSixDofEnabled)==null||I.call(N,A.sixdof!==0),Te("sixdof",A.sixdof!==0),b.querySelector("small").textContent=A.sixdof!==0?"6DoF Ativado":"3DoF Ativado",A.sixdof!==0},A.sixdof!==0),d.appendChild(h),e.append(d);let v=se("div","quick-side-title","Ajustes"),w=se("span","quick-side-icon",ee("volume")),T=se("input","quick-vertical");T.type="range",T.min="0",T.max="100",T.value=(B=window.NativeXR)!=null&&B.volume?window.NativeXR.volume():65,T.setAttribute("aria-label","Volume"),T.title=`Volume ${T.value}%`,T.oninput=()=>{var b,N;(N=(b=window.NativeXR)==null?void 0:b.setVolume)==null||N.call(b,+T.value),T.title=`Volume ${T.value}%`},p=se("button","quick-side-button",ee("volumeoff")),p.type="button",p.title="Silenciar \xE1udio",p.setAttribute("aria-label","Silenciar \xE1udio"),p.setAttribute("aria-pressed","false"),p.onclick=()=>m(!g);let R=se("span","quick-side-icon",ee("sun")),C=se("input","quick-vertical");return C.type="range",C.min="10",C.max="100",C.value=(_=window.NativeXR)!=null&&_.brightness?window.NativeXR.brightness():70,C.setAttribute("aria-label","Brilho"),C.title=`Brilho ${C.value}%`,C.oninput=()=>{var b,N;(N=(b=window.NativeXR)==null?void 0:b.setBrightness)==null||N.call(b,+C.value),C.title=`Brilho ${C.value}%`},t.append(v,w,T,p,R,C),n.append(e,t),nn({id:"control-center",title:"Configura\xE7\xF5es",node:n,w:980,h:640})}function Bu(){let n=se("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;";let e=se("div");e.style.cssText="display:flex;align-items:center;gap:6px;padding:8px 8px 4px;";let t=se("button","yt-back");t.innerHTML=ee("back"),t.title="Voltar",t.setAttribute("aria-label","Voltar"),t.onclick=()=>{let m=ge.find(x=>x.id==="settings");m&&Ot(m)};let i=se("div","yt-head-title");i.textContent=k("settings"),e.append(t,i);let s=se("div");s.style.cssText="flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;";let r=null,a=()=>{r=nn({id:"language-pick",title:k("langTitle"),w:320,h:420,node:mv(A.lang||"pt",m=>{Cr(m),ht(k("langChanged")),Ot(r);let x=ge.find(v=>v.id==="settings");x&&Ot(x),Bu()},!0)})};s.append(Ja(k("general")));let o=se("button","yt-link");o.append(un(ee("globe"),k("language"),Vc(A.lang||"pt").label)),o.onclick=a,s.append(o),s.append(un(ee("gauge"),"Contador de FPS","Mostrar taxa de quadros",vl("showFps")));let l=se("div");l.style.cssText="display:inline-flex;gap:6px;align-items:center;";let c=se("button","entry-seg-btn"+(A.sixdof===0?" on":""),"3DoF");c.dataset.settingsDof="3dof";let u=se("button","entry-seg-btn"+(A.sixdof!==0?" on":""),"6DoF");u.dataset.settingsDof="6dof";let d=()=>{c.classList.toggle("on",A.sixdof===0),u.classList.toggle("on",A.sixdof!==0)};c.onclick=()=>{var m,x;A.sixdof=0,Ke(A),Wt.reset(),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!1),Te("sixdof",!1),d()},u.onclick=()=>{var m,x;A.sixdof=1,Ke(A),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!0),Te("sixdof",!0),d()},l.append(c,u),s.append(un(ee("move"),"Modo 3DoF / 6DoF","Alternar entre 3DoF (rota\xE7\xE3o) e 6DoF (andar no espa\xE7o)",l));let h=se("button","yt-link");h.append(un(ee("image"),"Ambiente","Trocar passthrough / panorama")),h.onclick=()=>{let m=ge.find(x=>x.id==="settings");m&&Ot(m),Ap()},s.append(h),s.append(Ja(k("hands"))),s.append(un(ee("user"),"Rastreamento","MediaPipe nativo \xB7 c\xE2mera traseira")),s.append(un(ee("edit3"),"Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",vl("handDraw"))),s.append(un(ee("crosshair"),k("fingerTouch"),k("fingerTouchDesc"),vl("fingerTouch",m=>{var x,v;(v=(x=window.NativeXR)==null?void 0:x.setFingerTouch)==null||v.call(x,!!m),Te("fingerTouch",!!m)}))),s.append(un(ee("zap"),"Sensibilidade","Pin\xE7a com histerese est\xE1vel")),s.append(Ja(k("windows"))),s.append(un(ee("maximize"),"Tamanho","Escala das janelas",Xr("winScale",.6,1.6,.05))),s.append(un(ee("distance"),"Dist\xE2ncia","Dist\xE2ncia do arco",Xr("winDist",me?.6:1.5,me?1.8:3.4,.05))),s.append(un(ee("curve"),k("curve"),"Abertura do arco",Xr("winCurve",0,1,.05))),s.append(un(ee("curve"),k("win360"),k("win360k"),Xr("win360K",.2,1.15,.05))),s.append(un(ee("curve"),k("win360All"),"Novas janelas curvadas",vl("win360"))),s.append(un(ee("move"),"Inclina\xE7\xE3o","Ajuste vertical das janelas",Xr("winTilt",0,1.5,.05))),s.append(Ja(k("dock"))),s.append(un(ee("appGrid"),"Tamanho da dock",null,Xr("dockSize",.7,1.5,.05))),s.append(un(ee("distance"),"Dist\xE2ncia da dock",null,Xr("dockDist",.7,1.5,.05))),s.append(un(ee("move"),k("dockSnapSlot"),k("dockSnapDesc"),vl("dockSnapSlot"))),s.append(Ja(k("perf")));let f=se("div","yt-seg");for(let[m,x]of[["low",k("qualityLow")],["medium",k("qualityMedium")],["high",k("qualityHigh")],["auto",k("qualityAuto")]]){let v=se("button","yt-seg-btn");v.textContent=x,v.setAttribute("aria-pressed",A.quality===m),v.onclick=()=>{A.quality=m,Ke(),Te("quality"),[...f.children].forEach(w=>w.setAttribute("aria-pressed","false")),v.setAttribute("aria-pressed","true")},f.appendChild(v)}s.append(un(ee("settings"),k("quality"),"1080p \xB7 890p \xB7 390p \xB7 Auto",f)),s.append(Ja(k("xrTitle")));let g=se("button","yt-link");g.append(un(ee("controller"),k("xrTitle"),k("xrSub"))),g.setAttribute("aria-expanded","false");let y=se("div","card");y.dataset.xrPage="",y.style.margin="0 16px 14px",y.hidden=!0,g.onclick=()=>{y.hidden=!y.hidden,g.setAttribute("aria-expanded",String(!y.hidden)),y.hidden||lv(y)},s.append(g,y);let p=se("div","yt-foot");return p.textContent="NextVR \xB7 shell XR para Android \xB7 v1.0",s.append(p),n.append(e,s),nn({id:"settings",title:k("settings"),node:n})}function AE(){let n=ge.find(h=>h.id==="quick-settings");if(n)return mn(n),vp(Yi()),n;let e=se("div","quick-settings");e.innerHTML=`<section class="qs-panel">
    <header class="qs-top">
      <div class="qs-system">
        <span class="qs-battery" data-q-battery>${ee("battery")}<span>--%</span></span>
        <span data-q-time>--:--</span><span class="qs-date" data-q-date></span>
      </div>
      <span class="qs-top-spacer"></span>
      <button class="qs-top-action" data-q-settings aria-label="Configura\xE7\xF5es NextVR">${ee("settings")}<span>Configura\xE7\xF5es</span></button>
      <button class="qs-repin" data-act="pin" aria-label="Voltar ao arco">${ee("crosshair")}</button>
      <button class="qs-close" data-q-close aria-label="Fechar">${ee("x")}</button>
    </header>
    <div class="qs-ranges">
      <label class="qs-range" title="Volume de m\xEDdia"><input data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume"><span>${ee("volume")}</span></label>
      <label class="qs-range" title="Brilho da tela"><input data-q-range="brightness" type="range" min="0" max="100" value="50" aria-label="Brilho"><span>${ee("sun")}</span></label>
    </div>
    <div class="qs-cards">
      <div class="qs-card"><div class="qs-card-line">${ee("wifi")}<span class="qs-card-title">Wi-Fi</span></div><span class="qs-card-sub" data-q-network>Verificando conex\xE3o</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("bluetooth")}<span class="qs-card-title">Bluetooth</span></div><span class="qs-card-sub">Gerenciado pelo Android</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("link")}<span class="qs-card-title">Link</span></div><span class="qs-card-sub">N\xE3o conectado</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("boundary")}<span class="qs-card-title">Limite</span></div><span class="qs-card-sub">Desativado</span></div>
    </div>
    <div class="qs-tools">
      <button class="qs-tool" data-q-env>${ee("scene")}<span>Vis\xE3o do ambiente</span></button>
      <button class="qs-tool" disabled title="O NextVR n\xE3o usa microfone">${ee("mic")}<span>Microfone</span></button>
      <button class="qs-tool" data-q-recenter>${ee("move")}<span>Redefinir visualiza\xE7\xE3o</span></button>
      <button class="qs-tool" data-q-night aria-pressed="false">${ee("sun")}<span>Modo noturno</span></button>
      <button class="qs-tool" data-q-dnd aria-pressed="false">${ee("moon")}<span>N\xE3o perturbe</span></button>
      <button class="qs-tool" disabled title="Espelhamento do sistema n\xE3o dispon\xEDvel nesta tela">${ee("cast")}<span>Espelhar</span></button>
      <button class="qs-tool" disabled>${ee("bug")}<span>Relatar problema</span></button>
      <button class="qs-tool" disabled>${ee("lock")}<span>Modo viagem</span></button>
      <button class="qs-tool" disabled>${ee("device")}<span>Remote Desktop</span></button>
    </div>
  </section>
  <aside class="qs-side" aria-label="Controles r\xE1pidos">
    <div class="qs-volume"><span class="qs-more"><i></i><i></i><i></i></span>
      <div class="qs-volume-slider-wrap"><input class="qs-v-range" data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume de m\xEDdia"></div>
      ${ee("volume")}
    </div>
    <button class="qs-side-button" data-q-mute aria-pressed="false" aria-label="Silenciar m\xEDdia">${ee("volumeoff")}</button>
    <button class="qs-side-button" data-q-night aria-pressed="false" aria-label="Modo noturno">${ee("moon")}</button>
  </aside>`;let t=e,i={night:!1,dnd:!1,muted:!1,lastVolume:50};try{i={...i,...JSON.parse(localStorage.getItem("nextvr.quick-settings.v1")||"{}")}}catch{}let s=[...t.querySelectorAll("[data-q-range]")],r=(h,f)=>{var g,y;try{let p=Number((y=(g=window.NativeXR)==null?void 0:g[h])==null?void 0:y.call(g));return Number.isFinite(p)?Math.max(0,Math.min(100,p)):f}catch{return f}},a=me?r("mediaVolumePercent",50):50,o=me?r("brightnessPercent",50):50;a>0&&(i.lastVolume=a);function l(h,f){let g=Math.max(0,Math.min(100,Number(f)||0));for(let y of s.filter(p=>p.dataset.qRange===h))y.value=String(g),y.style.setProperty("--fill",`${g}%`);h==="volume"&&(a=g,g>0?(i.lastVolume=g,i.muted=!1):i.muted=!0)}function c(){try{localStorage.setItem("nextvr.quick-settings.v1",JSON.stringify(i))}catch{}}function u(){t.classList.toggle("night",!!i.night),t.querySelectorAll("[data-q-night]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.night))),t.querySelectorAll("[data-q-dnd]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.dnd))),t.querySelectorAll("[data-q-mute]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.muted)))}l("volume",a),l("brightness",o),u();for(let h of s)h.addEventListener("input",()=>l(h.dataset.qRange,h.value)),h.addEventListener("change",()=>{var f,g,y,p;me&&(h.dataset.qRange==="volume"&&((g=(f=window.NativeXR).setMediaVolumePercent)==null||g.call(f,a)),h.dataset.qRange==="brightness"&&((p=(y=window.NativeXR).setBrightnessPercent)==null||p.call(y,Number(h.value))),u(),c())});t.addEventListener("click",h=>{var g,y;let f=p=>h.target.closest(p);if(f("[data-q-close]")){Ot(ge.find(p=>p.id==="quick-settings"));return}if(f("[data-q-settings]")){Bu();return}if(f("[data-q-env]")){ME();return}if(f("[data-q-recenter]")){Gi();return}if(f("[data-q-night]")){i.night=!i.night,u(),c();return}if(f("[data-q-dnd]")){i.dnd=!i.dnd,u(),c();return}f("[data-q-mute]")&&(i.muted=!i.muted,i.muted?(a>0&&(i.lastVolume=a),l("volume",0)):l("volume",i.lastVolume||50),me&&((y=(g=window.NativeXR).setMediaVolumePercent)==null||y.call(g,a)),u(),c())});let d=nn({id:"quick-settings",title:"Configura\xE7\xF5es",node:e,w:1040,h:660,chrome:!1,resizable:!1});return vp(Yi()),d}function vp(n=Yi()){var a;let e=(a=ge.find(o=>o.id==="quick-settings"))==null?void 0:a.el.querySelector(".quick-settings");if(!e)return;let t=e.querySelector("[data-q-battery] span");t&&(t.textContent=n.batteryLevel==null?"--%":`${Math.round(n.batteryLevel*100)}%`);let i=e.querySelector("[data-q-time]");i&&(i.textContent=n.time||"--:--");let s=e.querySelector("[data-q-date]");s&&(s.textContent=n.date||"");let r=e.querySelector("[data-q-network]");r&&(r.textContent=n.online?"Conectado \xE0 internet":"Sem conex\xE3o")}Ve("device-status",vp);var cv="nextvr.lib.recent.v1",EE=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},bl=EE(cv),TE=()=>{try{localStorage.setItem(cv,JSON.stringify(bl))}catch{}},uv=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">N</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X",label:"X",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],xp={id:"gorilla-tag",name:"Gorilla Tag",label:"Gorilla Tag",bg:"#0b141a",html:'<img class="lx-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',kind:"app"},Qi=n=>{let e=ge.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null},dv={youtube:()=>bn("youtube","YouTube","https://m.youtube.com/"),browser:()=>bn("browser",k("browser"),"https://duckduckgo.com/"),store:()=>Ep(),gallery:()=>Ap(),settings:()=>Hu(),discord:()=>bn("discord","Discord","https://discord.com/app"),netflix:()=>bn("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>bn("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>bn("twitch","Twitch","https://www.twitch.tv/"),prime:()=>bn("prime","prime video","https://www.primevideo.com/"),whatsapp:()=>bn("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>bn("instagram","Instagram","https://www.instagram.com/"),x:()=>bn("x","X","https://x.com/"),facebook:()=>bn("facebook","Facebook","https://www.facebook.com/"),telegram:()=>bn("telegram","Telegram","https://web.telegram.org/"),spotify:()=>bn("spotify","Spotify","https://open.spotify.com/"),"gorilla-tag":()=>Ka()},fp="apps",xl=null,RE=[["apps","Apps"],["horizon","Horizon+"]];function CE(){let n=se("div","st"),t=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${RE.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${fp===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${ee("user")}</button><button class="st-x" data-x aria-label="Fechar">${ee("x")}</button></div>`;if(fp==="horizon")t+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else{let i=!!A.gorillaInstalled,s=xl!==null?`<div style="display:flex;align-items:center;gap:10px"><span style="font-size:12px;font-weight:700;color:#fb923c">Baixando... ${xl}%</span></div>`:i?`<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
             <span data-gorilla-installed="1" style="font-size:11px;font-weight:800;color:#4ade80;padding:4px 10px;border-radius:999px;background:rgba(34,197,94,.16);border:1px solid rgba(74,222,128,.35)">\u2713 Na Biblioteca de Apps</span>
             <button class="st-btn" data-launch-gorilla style="background:linear-gradient(135deg,#f97316,#ea580c);color:#fff">ABRIR GORILLA TAG</button>
           </div>`:'<button class="st-btn" data-install-gorilla style="background:linear-gradient(135deg,#f97316,#ea580c);color:#fff">BAIXAR</button>';t+=`
      <div class="st-gorilla-card" data-store-gorilla style="margin:6px 0 14px;padding:14px 16px;border-radius:16px;background:linear-gradient(145deg,rgba(255,138,43,.16),rgba(15,23,42,.88));border:1px solid rgba(255,138,43,.38);display:flex;align-items:center;justify-content:space-between;gap:14px">
        <div style="display:flex;align-items:center;gap:14px;min-width:0">
          <img class="st-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:62px;height:62px;border-radius:14px;object-fit:cover;flex-shrink:0;box-shadow:0 6px 18px rgba(249,115,22,.36);border:1px solid rgba(255,255,255,.18)">
          <div style="min-width:0">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:15px;color:#f8fafc">Gorilla Tag</strong>
              <span style="font-size:10px;font-weight:800;padding:2px 8px;border-radius:999px;background:rgba(56,189,248,.16);color:#7dd3fc;border:1px solid rgba(56,189,248,.32)">Lentes ${Ki.model}</span>
            </div>
            <div style="font-size:11.5px;color:#cbd5e1;margin-top:3px">Mapa da floresta 3D + bra\xE7os de Gorila com Hand Tracking nas lentes do NextVR.</div>
          </div>
        </div>
        <div style="flex-shrink:0">${s}</div>
      </div>
      <p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.
      Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`}return n.innerHTML=t,n.addEventListener("click",i=>{let s=a=>i.target.closest(a),r;if(r=s("[data-tab]")){fp=r.dataset.tab,Cs();return}if(s("[data-x]")){let a=ge.find(o=>o.id==="store");a&&Ot(a);return}if(s("[data-ava]")){ht("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-openlib]")){Tp();return}if(s("[data-install-gorilla]")){A.gorillaInstalled=1,Ke(),Qa("gorilla-tag",!0),jn(),xl=35,Cs(),setTimeout(()=>{xl=80,Cs()},120),setTimeout(()=>{xl=null,Cs(),jn(),ht("Gorilla Tag baixado! Adicionado \xE0 Biblioteca de Apps.")},260);return}if(s("[data-launch-gorilla]")){Qa("gorilla-tag"),Ka();return}}),n}function Cs(){var t,i,s;let n=Qi("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(CE()),n.querySelector(".st").scrollTop=e,(s=(i=ue).invalidate)==null||s.call(i)}function Ep(){var i,s,r,a;let n=ge.find(o=>o.id==="store");if(n)return Cs(),mn(n),(s=(i=ue).render)==null||s.call(i,We,_e),n;let e=se("div");e.style.cssText="height:100%";let t=nn({id:"store",title:"Store",node:e});return Cs(),(a=(r=ue).render)==null||a.call(r,We,_e),t}var Uu="recent",Di="all",bp="",pp=["all","apps","games","recent"],LE=n=>({all:k("libAll"),apps:k("apps"),games:k("libGames"),recent:k("recents")})[n]||k("libAll");function Qa(n,e){bl=[n,...bl.filter(t=>t!==n)].slice(0,40),TE(),e||jn()}function PE(){var s;!yy().length&&((s=window.NativeXR)!=null&&s.xrLibrary)&&_y();let e=[..._f(),...uv.map(r=>({...r,kind:"app"})),...A.gorillaInstalled?[xp]:[]];Di==="games"&&(e=e.filter(r=>r.kind==="xr")),Di==="games"&&A.gorillaInstalled&&(e=[...e,xp]),Di==="apps"&&(e=e.filter(r=>r.kind==="app")),Di==="recent"&&(e=e.filter(r=>bl.includes(r.id)));let t=bp.trim().toLowerCase();if(t&&(e=e.filter(r=>(r.name+" "+(r.label||"")).toLowerCase().includes(t))),Uu==="az")return[...e].sort((r,a)=>r.name.localeCompare(a.name,"pt-BR"));let i=r=>{let a=bl.indexOf(r.id);return a<0?1e6:a};return[...e].sort((r,a)=>i(r)-i(a))}function IE(n){let e=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${ee(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug?`${e}<span class="nm fb">${n.label||n.name}</span>`:t,s=n.id==="gorilla-tag"?' style="width:100%;height:100%;display:block"':"";return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand"${s}>${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function NE(){var l;let n=PE(),e=se("div","lib"),t=LE(Di),i=ge.find(c=>c.id==="library"),s=Di==="games"?k("libGamesEmpty"):Di==="recent"?k("libRecentEmpty"):k("appNoResults"),r=(c,u,d)=>`<button class="lib-rail-btn" data-lib-nav="${c}"
    aria-label="${Le(u)}" title="${Le(u)}" aria-pressed="${Di===c}">${ee(d)}</button>`;e.innerHTML=`<aside class="lib-rail" aria-label="${Le(k("apps"))}">
      ${r("all",k("libAll"),"appGrid")}
      ${r("games",k("libGames"),"controller")}
      ${r("recent",k("recents"),"timer")}
      <span class="lib-rail-spacer"></span>
      ${r("apps",k("apps"),"phone")}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${Le(k("apps"))}</h2>
        <div class="lib-searchbox">${ee("search")}
          <input class="lib-search open" data-q aria-label="${Le(k("searchApps"))}"
            placeholder="${Le(k("searchApps"))}" value="${Le(bp)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${Le(k("recents"))}">
          <span>${Uu==="az"?"A\u2013Z":Le(k("recents"))}</span>${ee("chevronDown")}
        </button>
        <button class="lib-pill" data-filter aria-label="${Le(k("libFilter"))}">
          <span>${Le(k("libFilter"))} \xB7 ${Le(t)} <i>(${n.length})</i></span>${ee("chevronDown")}
        </button>
        <button class="lib-curve" data-lib-curve aria-label="${Le(k("win360"))}"
          title="${Le(k("win360"))}" aria-pressed="${!!(i!=null&&i.curve)}">360\xB0</button>
        <button class="lib-close" data-lib-close aria-label="${Le(k("close"))}" title="${Le(k("close"))}">${ee("x")}</button>
        <button class="lib-repin" data-act="pin" aria-label="${Le(k("repin"))}" title="${Le(k("repin"))}">${ee("crosshair")}</button>
      </div>
      <div class="lib-scroll">
        <div class="lib-grid">
          ${n.map(c=>c.kind==="xr"?Sy(c):c.kind==="android"?ff(c.app):IE(c)).join("")}
          ${n.length?"":`<div class="lib-empty">${Le(s)}</div>`}
        </div>
      </div>
    </section>`;let a=Ay();a&&((l=e.querySelector(".lib-scroll"))==null||l.prepend(a));let o=e.querySelector('[data-q]:not([data-q="android"])');return o&&(o.addEventListener("input",()=>{var u;bp=o.value,jn(!0);let c=(u=Qi("library"))==null?void 0:u.querySelector("[data-q]");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),o.addEventListener("focus",()=>si(!0,o))),e.addEventListener("click",c=>{let u=h=>c.target.closest(h),d;if(u("[data-lib-close]")){Ot(ge.find(h=>h.id==="library"));return}if(d=u("[data-lib-nav]")){Di=d.dataset.libNav,jn();return}if(u("[data-lib-curve]")){let h=ge.find(f=>f.id==="library");h&&(h.setCurve(h.curve>0?0:A.win360K),jn());return}if(u("[data-sort]")){Uu=Uu==="az"?"recent":"az",jn();return}if(u("[data-filter]")){Di=pp[(pp.indexOf(Di)+1)%pp.length],jn();return}if(d=u("[data-android]")){let h=d.dataset.android;pu(h),gu(h);return}if(d=u("[data-xr]")){let h=d.dataset.xr;vy()?wy():yf(h);return}if(d=u("[data-app]")){let h=[...uv,xp].find(g=>g.id===d.dataset.app);if(!h)return;Qa(h.id);let f=dv[h.id];f?f():ht(h.name+": sem endere\xE7o cadastrado");return}}),e}function jn(n){var i,s,r;let e=Qi("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(NE()),e.querySelector(".lib-scroll").scrollTop=t,(r=(s=ue).invalidate)==null||r.call(s)}var Nu="Todos",mp="",DE=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function kE(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function _p(n){var u;hf(!1);let e=((u=n.querySelector(".android-app-scroll"))==null?void 0:u.scrollTop)||0;n.innerHTML="",n.classList.add("android-launcher");let t=se("div","android-launcher-head");t.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${ee("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${ee("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${ee("refresh")}</button></div>`,t.querySelector(".android-search input").value=mp;let i=dy(),s=se("div","android-categories"),r=DE.map(d=>`<button class="android-category" data-category="${d}" aria-pressed="${Nu===d}">${d}</button>`).join("");s.innerHTML=r;let a=se("div","android-results");a.innerHTML='<b>APPS INSTALADOS</b><span class="android-results-count"></span>';let o=se("div","android-app-scroll"),l=se("div","android-app-grid"),c=()=>{let d=mp.trim().toLocaleLowerCase("pt-BR"),h=fy().filter(g=>{let y=Nu==="Todos"||kE(g)===Nu,p=!d||`${g.label||""} ${g.pkg||""}`.toLocaleLowerCase("pt-BR").includes(d);return y&&p}),f=a.querySelector(".android-results-count");f&&(f.textContent=`${h.length} ${h.length===1?"app":"apps"}`),l.innerHTML=h.length?h.map(g=>ff(g)).join(""):`<div class="android-empty">${k("noAndroidApps")}</div>`};c(),o.appendChild(l),n.append(t),i&&n.appendChild(i),n.append(s,a,o),o.scrollTop=e,n.oninput=d=>{d.target.matches(".android-search input")&&(mp=d.target.value,c())},n.onclick=d=>{let h=d.target.closest("[data-category]");if(h){Nu=h.dataset.category,s.querySelectorAll("[data-category]").forEach(g=>g.setAttribute("aria-pressed",String(g===h))),c();return}if(d.target.closest(".android-refresh")){hf(!0),c();return}let f=d.target.closest("[data-android]");f&&(pu(f.dataset.android),gu(f.dataset.android))}}function zu(){let n=Qi("shizuku");if(n)return _p(n),mn(ge.find(t=>t.id==="shizuku"));let e=se("div","android-launcher");return _p(e),nn({id:"shizuku",title:"Apps do Android",node:e})}function Tp(){var i,s,r,a;let n=ge.find(o=>o.id==="library");if(n)return jn(),mn(n),(s=(i=ue).render)==null||s.call(i,We,_e),n;let e=se("div");e.style.cssText="height:100%";let t=nn({id:"library",title:k("apps"),node:e,w:1040,h:660,chrome:!1,resizable:!1});return jn(),(a=(r=ue).render)==null||a.call(r,We,_e),t}var OE=[{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#818cf8,#6366f1)",icon:"compass"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",icon:"settings"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#1db954,#0b3b1e)",slug:"spotify"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#a855f7,#581c87)",slug:"twitch"},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#ffffff,#e2e8f0)",slug:"youtube",lightBg:!0},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#18181b,#09090b)",slug:"tiktok"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b82f6,#1d4ed8)",slug:"facebook"},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",slug:"telegram"},{id:"x",name:"X",bg:"linear-gradient(145deg,#18181b,#050507)",slug:"x"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#6366f1,#4338ca)",slug:"discord"},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#22c55e,#15803d)",slug:"whatsapp"},{id:"shizuku",name:"My apps",bg:"linear-gradient(145deg,#f97316,#ea580c)",icon:"appGrid"}],UE=[{id:"gorilla-tag",name:"Gorilla Tag",bg:"#0d1b12",imgUrl:"./icons/gorilla-tag-logo.jpg",isGame:!0},{id:"roblox-vr",name:"Roblox VR",bg:"linear-gradient(145deg,#1e293b,#0f172a)",icon:"controller",isGame:!0,url:"https://www.roblox.com/"},{id:"webxr-games",name:"WebXR Games",bg:"linear-gradient(145deg,#7c3aed,#4c1d95)",icon:"controller",isGame:!0,url:"https://constructarcade.com/"},{id:"beat-vr",name:"Beat Saber Web",bg:"linear-gradient(145deg,#ef4444,#2563eb)",icon:"controller",isGame:!0,url:"https://moonrider.xyz/"},{id:"hyper-vr",name:"Hyper Dash VR",bg:"linear-gradient(145deg,#10b981,#047857)",icon:"controller",isGame:!0,url:"https://immersiveweb.dev/"},{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#e50914,#7f1d1d)",slug:"netflix"},{id:"prime",name:"Prime Video",bg:"linear-gradient(145deg,#00a8e1,#0369a1)",slug:"prime"}],Ni="all",Fu="recent",wp="",gp=!1,tv='<svg class="ui-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',FE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M5 19h14"/></svg>',BE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="4 5 20 5 14 12 14 19 10 17 10 12 4 5"/></svg>',zE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M4 12h7M4 17h4M17 7v11m0 0-3-3m3 3 3-3"/></svg>',HE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 14.5c0-3 2-5.5 4.2-5.5 1.8 0 3.3 1.8 4.8 4.2 1.5 2.4 2.6 3.3 4 3.3 1.4 0 2.5-1.2 2.5-3 0-2.5-1.6-4.5-3.6-4.5-1.5 0-2.7 1.1-4.2 3.4-1.5 2.3-2.9 4.1-4.8 4.1-1.7 0-2.9-.8-2.9-2z"/></svg>',VE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1.5"/><rect x="10" y="5" width="5" height="14" rx="1.5"/><rect x="17" y="5" width="4" height="14" rx="1.2"/></svg>';function GE(){var r;let n=OE.map(a=>({kind:"builtin",...a})),e=UE.map(a=>({kind:"builtin",...a})),t=(((r=_f)==null?void 0:r())||[]).map(a=>({kind:"xr",pkg:a.packageName,name:a.label||a.packageName,iconUrl:a.icon||"",isGame:!0})),i;Ni==="worlds"||Ni==="downloads"?i=[...e.filter(a=>a.isGame),...t,...n]:Ni==="apps"?i=[...n,...e.filter(a=>!a.isGame)]:i=[...n,...e,...t];let s=wp.trim().toLowerCase();return s&&(i=i.filter(a=>a.name.toLowerCase().includes(s))),Fu==="az"&&(i=[...i].sort((a,o)=>a.name.localeCompare(o.name,"pt-BR"))),i}function WE(n){if(n.kind==="xr"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Le(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-glyph">${ee("controller")}</span><span class="spatial-app-init">${Le(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-xr="${Le(n.pkg)}" data-spatial-game="1" title="${Le(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--game">${i}</span>
      <span class="spatial-app-label">${Le(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}if(n.kind==="android"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Le(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-init">${Le(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-android="${Le(n.pkg)}" title="${Le(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--android">${i}</span>
      <span class="spatial-app-label">${Le(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}let e=n.imgUrl?`<img class="spatial-app-img" src="${Le(n.imgUrl)}" alt="" draggable="false">`:n.slug?`<img class="spatial-app-svg" src="./icons/${n.slug}.svg" alt="" draggable="false" onerror="this.remove()">`:n.icon?`<span class="spatial-app-glyph">${ee(n.icon)}</span>`:n.html||`<span class="spatial-app-init">${Le(n.name.slice(0,2))}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-builtin="${Le(n.id)}" ${n.isGame?'data-spatial-game="1"':""} ${n.url?`data-spatial-url="${Le(n.url)}"`:""} title="${Le(n.name)}">
    <span class="spatial-app-circle ${n.lightBg?"spatial-app-circle--light":""}" style="background:${n.bg}">${e}</span>
    <span class="spatial-app-label">${Le(n.name)}</span>
    <i class="spatial-app-tick" aria-hidden="true"></i>
  </button>`}function qE(){let n=GE(),e=Yi(),t=Math.round(Math.max(0,Math.min(1,e.batteryLevel??.9))*100),i=e.time&&e.time!=="--:--"?e.time:"9:48",s=A.profileAvatar?`<img src="${Le(A.profileAvatar)}" alt="" class="spatial-hz-avatar-img" draggable="false" />`:ee("user"),r=se("div","spatial-launcher-root");r.innerHTML=`
    <header class="spatial-hz-header">
      <h2 class="spatial-hz-title">Library</h2>
      <label class="spatial-hz-search">
        ${ee("search")}
        <input type="text" class="spatial-hz-search-input" data-spatial-search placeholder="Search" value="${Le(wp)}" aria-label="Search Library" />
      </label>
    </header>

    <div class="spatial-launcher-stage">
      <aside class="spatial-hz-rail" aria-label="Library navigation">
        <button type="button" class="spatial-hz-nav-item ${Ni==="all"?"on":""}" data-spatial-nav="all">
          ${tv}<span>All</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Ni==="apps"?"on":""}" data-spatial-nav="apps">
          ${ee("appGrid")}<span>Apps</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Ni==="worlds"?"on":""}" data-spatial-nav="worlds">
          ${ee("location")}<span>Worlds</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Ni==="horizon"?"on":""}" data-spatial-nav="horizon">
          ${ee("refresh")}<span>Horizon+</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Ni==="downloads"?"on":""}" data-spatial-nav="downloads">
          ${FE}<span>Downloads</span>
        </button>
        <div class="spatial-hz-rail-divider" aria-hidden="true"></div>
        <button type="button" class="spatial-hz-nav-item spatial-hz-nav-item--store" data-spatial-act="store">
          <span class="spatial-hz-store-badge">${ee("store")}</span><span>Store</span>
        </button>
      </aside>

      <div class="spatial-honeycomb-wrap">
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--left" data-spatial-scroll="left" aria-label="Rolar para a esquerda" title="Rolar para a esquerda">\u2039</button>
        <div class="spatial-honeycomb" data-spatial-scroll-track role="list">
          ${n.map(WE).join("")}
        </div>
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--right" data-spatial-scroll="right" aria-label="Rolar para a direita" title="Rolar para a direita">\u203A</button>
      </div>

      <aside class="spatial-hz-filters" aria-label="Filters and sorting">
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="filter" title="Filter: Installed">
          ${BE}<span>Filter: Insta...</span>${ee("chevronDown")}
        </button>
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="sort" title="Sort">
          ${zE}<span>Sort: ${Fu==="az"?"A\u2013Z":"Recen..."}</span>${ee("chevronDown")}
        </button>
      </aside>
    </div>

    <footer class="spatial-hz-bottom" aria-label="Horizon bar">
      <div class="spatial-hz-bot-left">
        <button type="button" class="spatial-hz-game-pill" data-spatial-act="store" title="Store">${ee("controller")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="env" title="C\xE2mera Traseira (Ambiente Real)">${ee("camera")}</button>
      </div>

      <div class="spatial-hz-bot-center">
        <div class="spatial-hz-bot-main">
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="recenter" title="Recentralizar">${HE}</button>
          <button type="button" class="spatial-hz-home-circle" data-spatial-nav="all" title="Library">${tv}</button>
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="close" title="Alternar para Dock">${VE}</button>
        </div>
        <div class="spatial-hz-bot-status">
          ${ee("wifi")}
          <span data-spatial-clock>${Le(i)}</span>
          <span class="spatial-hz-bat-pill"><i style="width:${t}%"></i></span>
          <span data-spatial-bat>${t}%</span>
        </div>
      </div>

      <div class="spatial-hz-bot-right">
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="library" title="Biblioteca Completa">${ee("notification")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="settings" title="Configura\xE7\xF5es">${ee("sliders")}</button>
        <button type="button" class="spatial-hz-avatar-btn" data-spatial-act="settings" title="Perfil">${s}</button>
      </div>
    </footer>

    <div class="browser-tab-popup spatial-browser-popup" data-browser-tab-menu="spatial" hidden>
      <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
      <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
    </div>
  `;let a=r.querySelector("[data-spatial-search]");a&&a.addEventListener("input",()=>{wp=a.value,$r()});let o=r.querySelector('[data-spatial-builtin="browser"]'),l=r.querySelector('[data-browser-tab-menu="spatial"]'),c=null;if(o&&l){o.addEventListener("pointerdown",()=>{clearTimeout(c),c=setTimeout(()=>{var h,f,g,y,p,m;o.dataset.holdConsumed="1",l.hidden=!1,(f=(h=window.NativeXR)==null?void 0:h.click)==null||f.call(h),(y=(g=ue).invalidate)==null||y.call(g),(m=(p=ue).render)==null||m.call(p,We,_e)},2e3)});let d=()=>{clearTimeout(c),c=null};o.addEventListener("pointerup",d),o.addEventListener("pointercancel",d),o.addEventListener("pointerleave",d)}let u=r.querySelector("[data-spatial-scroll-track]");if(u){let d=0,h=0,f=!1;u.addEventListener("pointerdown",g=>{d=g.clientX,h=u.scrollLeft,f=!1}),u.addEventListener("pointermove",g=>{var p,m;if(g.buttons!==1)return;let y=g.clientX-d;Math.abs(y)>6&&(f=!0,u.scrollLeft=h-y,(m=(p=ue).invalidate)==null||m.call(p))}),u.addEventListener("wheel",g=>{var y,p;Math.abs(g.deltaY)>Math.abs(g.deltaX)&&(u.scrollLeft+=g.deltaY,g.preventDefault()),(p=(y=ue).invalidate)==null||p.call(y)},{passive:!1}),u.addEventListener("scroll",()=>{var g,y;return(y=(g=ue).invalidate)==null?void 0:y.call(g)},{passive:!0}),u._wasDragging=()=>f}return r.addEventListener("click",d=>{var v,w,T,R,C;let h=d.target.closest("[data-spatial-scroll]");if(h&&u){d.stopPropagation();let B=h.dataset.spatialScroll==="left"?-1:1;u.scrollLeft=Math.max(0,u.scrollLeft+B*240),(w=(v=ue).invalidate)==null||w.call(v),(R=(T=ue).render)==null||R.call(T,We,_e);return}let f=d.target.closest("[data-browser-opt]");if(f){d.stopPropagation();let B=f.dataset.browserOpt||"new-tab";l&&(l.hidden=!0),ov(B);return}let g=d.target.closest("[data-spatial-xr]");if(g){let B=g.dataset.spatialXr;B&&yf(B);return}let y=d.target.closest("[data-spatial-builtin]");if(y){if(y.dataset.holdConsumed==="1"){y.dataset.holdConsumed="0";return}l&&!l.hidden&&(l.hidden=!0);let B=y.dataset.spatialBuiltin;if(B==="shizuku"){zu();return}if(B==="gorilla-tag"){Ka();return}if(y.dataset.spatialUrl){Sp("browser",y.title||"Navegador",y.dataset.spatialUrl);return}let _=dv[B];_&&_();return}let p=d.target.closest("[data-spatial-android]");if(p){let B=p.dataset.spatialAndroid;pu(B),gu(B);return}let m=d.target.closest("[data-spatial-nav]");if(m){Ni=m.dataset.spatialNav||"all",$r();return}let x=(C=d.target.closest("[data-spatial-act]"))==null?void 0:C.dataset.spatialAct;x==="settings"?Hu():x==="store"?Ep():x==="library"?Tp():x==="recenter"?Gi():x==="sort"?(Fu=Fu==="az"?"recent":"az",$r()):x==="filter"?(Ni=Ni==="downloads"?"all":"downloads",$r()):x==="env"?(A.env="passthrough",Ke(A),gi(!0)):x==="close"&&Cp(!1)}),r}function $r(){var a,o,l,c,u,d;let n=Qi("spatial-launcher");if(!n)return;let e=n.querySelector(".spatial-honeycomb"),t=(e==null?void 0:e.scrollTop)||0,i=(e==null?void 0:e.scrollLeft)||0,s=((o=(a=n.querySelector(".finger-hover"))==null?void 0:a.dataset)==null?void 0:o.spatialBuiltin)||null;n.innerHTML="",n.appendChild(qE());let r=n.querySelector(".spatial-honeycomb");r&&(r.scrollTop=t,r.scrollLeft=i),s&&((c=(l=n.querySelector(`[data-spatial-builtin="${s}"]`))==null?void 0:l.classList)==null||c.add("finger-hover")),(d=(u=ue).invalidate)==null||d.call(u)}function Mp(){var e,t,i,s;if(gp)return;let n=ge.find(r=>r.id==="spatial-launcher");if(!(!A.spatialLauncher||!n)){gp=!0;try{let r=ge.filter(o=>o.id!=="spatial-launcher"&&!o.onboarding&&!o.hidden);if(r.length>1){let o=r[r.length-1];for(let l of r)l!==o&&Ot(l)}let a=r.length>0;n.hidden!==a&&(n.setHidden(a),(t=(e=ue).invalidate)==null||t.call(e),(s=(i=ue).render)==null||s.call(i,We,_e))}finally{gp=!1}}}Ve("wins",Mp);function Rp(){var i,s,r,a,o,l,c,u;A.env="passthrough",gi(!0);let n=ge.find(d=>d.id==="spatial-launcher");if(n)return $r(),Mp(),(s=(i=ue).invalidate)==null||s.call(i),(a=(r=ue).render)==null||a.call(r,We,_e),n;let e=se("div","spatial-launcher-host"),t=nn({id:"spatial-launcher",title:"Spatial App",node:e,w:1040,h:660,onboarding:!0,chrome:!1,resizable:!1});return t.handle.hidden=!0,t.resizeHandle.hidden=!0,$r(),Mp(),(l=(o=ue).invalidate)==null||l.call(o),(u=(c=ue).render)==null||u.call(c,We,_e),t}function Cp(n){var e,t,i,s;if(A.spatialLauncher=n?1:0,A.spatialLauncher&&(A.env="passthrough",gi(!0)),Ke(A),A.spatialLauncher){for(let r of[...ge])r.id!=="spatial-launcher"&&!r.onboarding&&Ot(r);xn(!0),gn(!1),Rp()}else{let r=ge.find(a=>a.id==="spatial-launcher");r&&Ot(r),xn(!1),!Yr&&!Ji&&!Ls&&gn(!0),(t=(e=ue).invalidate)==null||t.call(e),(s=(i=ue).render)==null||s.call(i,We,_e)}}Ve("spatialLauncher",n=>Cp(n));Ve("device-status",n=>{let e=Qi("spatial-launcher");if(!e)return;let t=e.querySelector("[data-spatial-clock]");t&&(n!=null&&n.time)&&n.time!=="--:--"&&(t.textContent=n.time);let i=e.querySelector("[data-spatial-bat]"),s=e.querySelector(".spatial-hz-bat-pill i");if(typeof(n==null?void 0:n.batteryLevel)=="number"){let r=Math.round(Math.max(0,Math.min(1,n.batteryLevel))*100);i&&(i.textContent=`${r}%`),s&&(s.style.width=`${r}%`)}});var cr=Object.freeze({compass:ee("compass"),store:ee("store"),people:ee("people"),camera:ee("camera"),gear:ee("settings"),play:ee("play"),shizuku:ee("shizuku"),vision:ee("vision")});function XE(){gi(A.env!=="passthrough")}function hv(){let n=du("virtual-environment");if(!n)return;let e=A.env!=="passthrough";n.setAttribute("aria-pressed",String(e)),n.title=`${k("envVirtual")} \xB7 ${e?k("on"):k("off")}`}function Vu(){X0([{kind:"avatar",id:"profile",label:k("profile"),run:KE},{kind:"status",id:"status",label:k("settings"),run:AE},{kind:"tool",id:"virtual-environment",label:k("envVirtual"),svg:cr.vision,run:XE},{kind:"spacer"},{id:"browser",win:"browser",label:k("browser"),svg:cr.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>bn("browser",k("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:k("store"),svg:cr.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:Ep},{id:"discord",win:"discord",label:"Discord",svg:cr.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>bn("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:k("gallery"),svg:cr.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:Ap},{id:"settings",win:"control-center",label:k("settings"),svg:cr.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:Hu},{id:"youtube",win:"youtube",label:"YouTube",svg:cr.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>bn("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:k("shizuku"),svg:cr.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:zu},{id:"library",win:"library",launcher:!0,label:k("apps"),run:Tp}]),hv()}Ve("env",hv);Ve("lang",Vu);function $E(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=hy(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=se("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}py();Ty();by();Ve("appsState",()=>{$E(),fv()});Ve("xr",()=>{fv();let n=Qi("settings");n!=null&&n.querySelector("[data-xr-page]")&&lv(n.querySelector("[data-xr-page]"))});var yp=0;function fv(){yp||(yp=setTimeout(()=>{yp=0,Qi("library")&&jn(),Qi("spatial-launcher")&&$r();let n=Qi("shizuku");n&&_p(n)},500))}var YE=document.getElementById("boot"),PR=document.getElementById("bootGo"),Ls=null;YE.hidden=!0;function pv(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function mv(n,e,t=!1){let i=se("div",t?"langwin slim":"langwin"),s=a=>Vc(a).label;return(()=>{let a=t?"":`<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
         <p class="lq-tag">Aponte e pin\xE7a<br>para escolher.</p>
       </div>`;i.innerHTML=`${t?`<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${s(n)}</span></div>`:""}
      <div class="lq-main">
        ${a}
        <div class="lang-options" role="list">${Oo.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${k("langSoon")}</i>`}</button>`).join("")}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${t?"Escolha o idioma.":"Aponte com a m\xE3o e fa\xE7a uma pin\xE7a."}</span>
        <button class="lq-go">${k("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>e(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function jE(){var e,t;let n=nn({id:"language",title:"Next VR",w:390,h:500,onboarding:!0,node:mv(A.lang||pv(),ZE)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}Ve("handframe",n=>{let e=Ls==null?void 0:Ls.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function ZE(n){if(!Ls)return;Cr(n),Ls&&(Ot(Ls),Ls=null),gn(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=Lr(),t=A.handsOn?ms():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Gi(),280)}var Yr=null,Ji=null,Gu=new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1");function gv(){var e;if(A.gorillaInstalled=1,Ke(A),Qa("gorilla-tag",!0),jn(),Cs(),Gu&&me&&typeof((e=window.NativeXR)==null?void 0:e.startVrSession)=="function"){A.autoLaunchGorilla=1,Ke(A),_l();return}_l(),Ka()}Ve("gorilla-installed",()=>{A.gorillaInstalled=1,Ke(A),Qa("gorilla-tag",!0),jn(),Cs()});function yv(){Ji&&Ji.remove();let n=document.createElement("div");return n.id="entry-fullscreen",n.appendChild(Rf({fullscreen:!0,onStart:_l,onLaunchGorilla:gv,getStatus:Yi})),document.body.appendChild(n),Ji=n,n}function vv(){return nn({id:"entry-menu",title:"NextVR",w:840,h:525,chrome:!1,resizable:!1,onboarding:!0,node:Rf({fullscreen:!1,onStart:_l,onLaunchGorilla:gv,getStatus:Yi})})}async function _l(n=!1){var r,a,o,l,c,u,d,h,f,g,y,p,m;let e=n===!0;A.lang||Cr(pv()||"pt");let t=!e&&Gu&&me&&typeof((r=window.NativeXR)==null?void 0:r.startVrSession)=="function";if(Ji&&!t&&(Ji.remove(),Ji=null),Yr?(Ot(Yr),Yr=null):Ot("entry-menu"),A.spatialLauncher?(xn(!0),gn(!1),Rp()):(Ot("spatial-launcher"),xn(!1),gn(!0)),document.getElementById("stat").hidden=!1,me||(document.getElementById("perm").hidden=!1),(o=(a=window.NativeXR)==null?void 0:a.handVisuals)==null||o.call(a,!!A.handDraw),(c=(l=window.NativeXR)==null?void 0:l.wideCamera)==null||c.call(l,!!A.wideCamera),e||(d=(u=window.NativeXR)==null?void 0:u.startVrSession)==null||d.call(u,JSON.stringify(A)),(f=(h=ue).invalidate)==null||f.call(h),(y=(g=ue).render)==null||y.call(g,We,_e),t){(m=(p=Ji==null?void 0:Ji.querySelector(".entry-menu-root"))==null?void 0:p.resetToHome)==null||m.call(p);return}let i=Lr(),s=A.handsOn?ms():Promise.resolve(!1);await Promise.allSettled([i,s]),me||setTimeout(()=>Gi(),280)}function KE(){var n;return me&&((n=window.NativeXR)!=null&&n.openEntryMenu)?(window.NativeXR.openEntryMenu(),null):(gn(!1),document.getElementById("stat").hidden=!0,Gu||!me?yv():(Yr=vv(),Yr))}var nv=!1;window.nextvrEnterWorkspace=n=>{var e,t,i,s,r,a,o,l,c,u;if(n)try{let d=typeof n=="string"?JSON.parse(n):n;d.handDraw!==void 0&&(A.handDraw=d.handDraw?1:0),d.showFps!==void 0&&(A.showFps=d.showFps?1:0),d.mediaVolume!==void 0&&(A.mediaVolume=d.mediaVolume),d.brightness!==void 0&&(A.brightness=d.brightness),d.quality!==void 0&&(A.quality=d.quality,Te("quality")),d.wideCamera!==void 0&&(A.wideCamera=d.wideCamera?1:0),d.spatialLauncher!==void 0&&(A.spatialLauncher=d.spatialLauncher?1:0),d.dockSnapSlot!==void 0&&(A.dockSnapSlot=d.dockSnapSlot?1:0),d.fingerTouch!==void 0&&(A.fingerTouch=d.fingerTouch?1:0),d.sixdof!==void 0&&(A.sixdof=d.sixdof?1:0,A.sixdof||Wt.reset(),(t=(e=window.NativeXR)==null?void 0:e.setSixDofEnabled)==null||t.call(e,A.sixdof!==0)),d.gorillaInstalled!==void 0&&(A.gorillaInstalled=d.gorillaInstalled?1:0,A.gorillaInstalled&&(Qa("gorilla-tag",!0),jn(),Cs())),d.profileName!==void 0&&(A.profileName=d.profileName),d.profileAvatar!==void 0&&(A.profileAvatar=d.profileAvatar),d.lang&&Cr(d.lang),!A.spatialLauncher&&d.entryEnvChosen&&d.env&&d.env!=="passthrough"?Vi(d.env):(A.env="passthrough",gi(!0));let h=!!d.autoLaunchGorilla;A.autoLaunchGorilla&&(A.autoLaunchGorilla=0),Ke(A),Vu(),(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!!A.handDraw),(a=(r=window.NativeXR)==null?void 0:r.wideCamera)==null||a.call(r,!!A.wideCamera),(l=(o=window.NativeXR)==null?void 0:o.setFingerTouch)==null||l.call(o,A.fingerTouch!==0),h&&setTimeout(()=>Ka(),120)}catch{}else me&&(gi(!0),(u=(c=window.NativeXR)==null?void 0:c.setFingerTouch)==null||u.call(c,A.fingerTouch!==0));_l(!0),nv||(nv=!0,setTimeout(()=>Gi(),220))};Ve("profile-updated",()=>Vu());document.getElementById("btnGyro").onclick=()=>Lr();document.getElementById("btnHand").onclick=()=>l0()?Ph():ms();Ve("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});Ve("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Vu();var iv=new URLSearchParams(location.search).get("onboarding")||(location.hash.includes("onboarding=language")?"language":location.hash.includes("onboarding=skip")?"skip":""),Du,sv,ku,rv,Ou,av;Gu?(gn(!1),document.getElementById("stat").hidden=!0,(sv=(Du=window.NativeXR)==null?void 0:Du.handVisuals)==null||sv.call(Du,!!A.handDraw),yv()):iv==="language"?(gn(!1),document.getElementById("stat").hidden=!0,Ls=jE()):iv==="skip"?(A.spatialLauncher?(xn(!0),gn(!1),Rp()):(xn(!1),gn(!0)),me&&((rv=(ku=window.NativeXR)==null?void 0:ku.wideCamera)==null||rv.call(ku,!!A.wideCamera),Lr(),A.handsOn&&ms()),document.getElementById("perm").hidden=!1,setTimeout(()=>Gi(),280)):(gn(!1),document.getElementById("stat").hidden=!0,me&&((av=(Ou=window.NativeXR)==null?void 0:Ou.handVisuals)==null||av.call(Ou,!!A.handDraw),Lr(),A.handsOn&&ms()),Yr=vv());me&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=ue).invalidate)==null||e.call(n),Lr(),A.handsOn&&ms()},window.nextvrSuspend=()=>{Ph()},Ve("hands",()=>{document.getElementById("perm").hidden=!0}));Ve("game:settings",()=>Hu());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

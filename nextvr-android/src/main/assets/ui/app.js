(()=>{var Uv=0,Jf=1,Fv=2;var Bg=1,Bv=2,hs=3,zi=0,Xn=1,Fn=2;var Gs=0,Ma=1,Qf=2,em=3,tm=4,zv=5,_r=100,Hv=101,Vv=102,nm=103,im=104,Gv=200,Wv=201,qv=202,Xv=203,Fu=204,Bu=205,$v=206,Yv=207,jv=208,Zv=209,Kv=210,Jv=211,Qv=212,ex=213,tx=214,nx=0,ix=1,sx=2,ic=3,rx=4,ax=5,ox=6,lx=7,bh=0,cx=1,dx=2,Ws=0,ux=1,hx=2,px=3,fx=4,mx=5,gx=6,sm="attached",yx="detached",zg=300,Ta=301,Ra=302,zu=303,Hu=304,Dc=306,Er=1e3,si=1001,_o=1002,cn=1003,sc=1004;var go=1005;var an=1006,_h=1007;var Xs=1008;var qs=1009,vx=1010,xx=1011,wh=1012,Hg=1013,Hs=1014,ps=1015,wo=1016,Vg=1017,Gg=1018,Sr=1020,bx=1021,fi=1023,_x=1024,wx=1025,Mr=1026,Ca=1027,Sx=1028,Wg=1029,Mx=1030,qg=1031,Xg=1033,ru=33776,au=33777,ou=33778,lu=33779,rm=35840,am=35841,om=35842,lm=35843,$g=36196,cm=37492,dm=37496,um=37808,hm=37809,pm=37810,fm=37811,mm=37812,gm=37813,ym=37814,vm=37815,xm=37816,bm=37817,_m=37818,wm=37819,Sm=37820,Mm=37821,cu=36492,Am=36494,Em=36495,Ax=36283,Tm=36284,Rm=36285,Cm=36286;var La=2300,Tr=2301,du=2302,Lm=2400,Pm=2401,Im=2402,Ex=2500;var Yg=0,kc=1,Do=2,jg=3e3,Ar=3001,Tx=3200,Rx=3201,Sh=0,Cx=1,mi="",Vt="srgb",dn="srgb-linear",Mh="display-p3",Oc="display-p3-linear",rc="linear",kt="srgb",ac="rec709",oc="p3";var sa=7680;var Nm=519,Lx=512,Px=513,Ix=514,Zg=515,Nx=516,Dx=517,kx=518,Ox=519,Vu=35044;var Dm="300 es",Gu=1035,fs=2e3,lc=2001,$s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],km=1234567,yo=Math.PI/180,Pa=180/Math.PI;function Pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function Ah(n,e){return(n%e+e)%e}function Ux(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Fx(n,e,t){return n!==e?(t-n)/(e-n):0}function vo(n,e,t){return(1-t)*n+t*e}function Bx(n,e,t,i){return vo(n,e,1-Math.exp(-t*i))}function zx(n,e=1){return e-Math.abs(Ah(n,e*2)-e)}function Hx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wx(n,e){return n+Math.random()*(e-n)}function qx(n){return n*(.5-Math.random())}function Xx(n){n!==void 0&&(km=n);let e=km+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $x(n){return n*yo}function Yx(n){return n*Pa}function Wu(n){return(n&n-1)===0&&n!==0}function jx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zx(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),d=a((e+i)/2),u=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*d,l*u,l*h,o*c);break;case"YZY":n.set(l*h,o*d,l*u,o*c);break;case"ZXZ":n.set(l*u,l*h,o*d,o*c);break;case"XZX":n.set(o*d,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*d,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ko={DEG2RAD:yo,RAD2DEG:Pa,generateUUID:Pi,clamp:En,euclideanModulo:Ah,mapLinear:Ux,inverseLerp:Fx,lerp:vo,damp:Bx,pingpong:zx,smoothstep:Hx,smootherstep:Vx,randInt:Gx,randFloat:Wx,randFloatSpread:qx,seededRandom:Xx,degToRad:$x,radToDeg:Yx,isPowerOfTwo:Wu,ceilPowerOfTwo:jx,floorPowerOfTwo:cc,setQuaternionFromProperEuler:Zx,normalize:_t,denormalize:Bi},je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],x=s[1],v=s[4],w=s[7],A=s[2],T=s[5],R=s[8];return r[0]=a*y+o*x+l*A,r[3]=a*p+o*v+l*T,r[6]=a*m+o*w+l*R,r[1]=c*y+d*x+u*A,r[4]=c*p+d*v+u*T,r[7]=c*m+d*w+u*R,r[2]=h*y+f*x+g*A,r[5]=h*p+f*v+g*T,r[8]=h*m+f*w+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,g=t*u+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-d*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uu.makeScale(e,t)),this}rotate(e){return this.premultiply(uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uu=new rt;function Kg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kx(){let n=So("canvas");return n.style.display="block",n}var Om={};function xo(n){n in Om||(Om[n]=!0,console.warn(n))}var Um=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fm=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cl={[dn]:{transfer:rc,primaries:ac,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:kt,primaries:ac,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oc]:{transfer:rc,primaries:oc,toReference:n=>n.applyMatrix3(Fm),fromReference:n=>n.applyMatrix3(Um)},[Mh]:{transfer:kt,primaries:oc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fm),fromReference:n=>n.applyMatrix3(Um).convertLinearToSRGB()}},Jx=new Set([dn,Oc]),mt={enabled:!0,_workingColorSpace:dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Cl[e].toReference,s=Cl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Cl[n].primaries},getTransfer:function(n){return n===mi?rc:Cl[n].transfer}};function Aa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ra,dc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ra===void 0&&(ra=So("canvas")),ra.width=e.width,ra.height=e.height;let i=ra.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ra}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=So("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Aa(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Aa(t[i]/255)*255):t[i]=Aa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qx=0,uc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pu(s[a].image)):r.push(pu(s[a]))}else r=pu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function pu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eb=0,wn=class n extends $s{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=si,s=si,r=an,a=Xs,o=fi,l=qs,c=n.DEFAULT_ANISOTROPY,d=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Pi(),this.name="",this.source=new uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ar?Vt:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?Ar:jg}set encoding(e){xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ar?Vt:mi}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=zg;wn.DEFAULT_ANISOTROPY=1;var Mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,w=(f+1)/2,A=(m+1)/2,T=(d+h)/4,R=(u+y)/4,F=(g+p)/4;return v>w&&v>A?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=R/i):w>A?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=T/s,r=F/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=F/r),this.set(i,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-y)/x,this.z=(h-d)/x,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qu=class extends $s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ar?Vt:mi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ms=class extends qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},hc=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xu=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==h||c!==f||d!==g){let p=1-o,m=l*h+c*f+d*g+u*y,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let A=Math.sqrt(v),T=Math.atan2(A,m*x);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A}let w=o*x;if(l=l*p+h*w,c=c*p+f*w,d=d*p+g*w,u=u*p+y*w,p===1-o){let A=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=A,c*=A,d*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-o*f,e[t+2]=c*g+d*f+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fu=new D,Bm=new nt,gi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Pl.subVectors(this.max,lo),aa.subVectors(e.a,lo),oa.subVectors(e.b,lo),la.subVectors(e.c,lo),Os.subVectors(oa,aa),Us.subVectors(la,oa),gr.subVectors(aa,la);let t=[0,-Os.z,Os.y,0,-Us.z,Us.y,0,-gr.z,gr.y,Os.z,0,-Os.x,Us.z,0,-Us.x,gr.z,0,-gr.x,-Os.y,Os.x,0,-Us.y,Us.x,0,-gr.y,gr.x,0];return!mu(t,aa,oa,la,Pl)||(t=[1,0,0,0,1,0,0,0,1],!mu(t,aa,oa,la,Pl))?!1:(Il.crossVectors(Os,Us),t=[Il.x,Il.y,Il.z],mu(t,aa,oa,la,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(as),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},as=[new D,new D,new D,new D,new D,new D,new D,new D],Ri=new D,Ll=new gi,aa=new D,oa=new D,la=new D,Os=new D,Us=new D,gr=new D,lo=new D,Pl=new D,Il=new D,yr=new D;function mu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){yr.fromArray(n,r);let o=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),d=i.dot(yr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var tb=new gi,co=new D,gu=new D,ri=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);let t=co.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(co,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(gu)),this.expandByPoint(co.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},os=new D,yu=new D,Nl=new D,Fs=new D,vu=new D,Dl=new D,xu=new D,Rr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=os.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,t),os.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yu.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(yu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Nl),o=Fs.dot(this.direction),l=-Fs.dot(Nl),c=Fs.lengthSq(),d=Math.abs(1-a*a),u,h,f,g;if(d>0)if(u=a*l-o,h=a*o-l,g=r*d,u>=0)if(h>=-g)if(h<=g){let y=1/d;u*=y,h*=y,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yu).addScaledVector(Nl,h),f}intersectSphere(e,t){os.subVectors(e.center,this.origin);let i=os.dot(this.direction),s=os.dot(os)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,t,i,s,r){vu.subVectors(t,e),Dl.subVectors(i,e),xu.crossVectors(vu,Dl);let a=this.direction.dot(xu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fs.subVectors(this.origin,e);let l=o*this.direction.dot(Dl.crossVectors(Fs,Dl));if(l<0)return null;let c=o*this.direction.dot(vu.cross(Fs));if(c<0||l+c>a)return null;let d=-o*Fs.dot(xu);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class n{constructor(e,t,i,s,r,a,o,l,c,d,u,h,f,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,u,h,f,g,y,p)}set(e,t,i,s,r,a,o,l,c,d,u,h,f,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ca.setFromMatrixColumn(e,0).length(),r=1/ca.setFromMatrixColumn(e,1).length(),a=1/ca.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*d,f=a*u,g=o*d,y=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,g=c*d,y=c*u;t[0]=h+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,g=c*d,y=c*u;t[0]=h-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,f=a*u,g=o*d,y=o*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+y,t[1]=l*u,t[5]=y*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=y-h*u,t[8]=g*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-y*u}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+y,t[5]=a*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nb,e,ib)}lookAt(e,t,i){let s=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Bs.crossVectors(i,ti),Bs.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Bs.crossVectors(i,ti)),Bs.normalize(),kl.crossVectors(ti,Bs),s[0]=Bs.x,s[4]=kl.x,s[8]=ti.x,s[1]=Bs.y,s[5]=kl.y,s[9]=ti.y,s[2]=Bs.z,s[6]=kl.z,s[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],x=i[3],v=i[7],w=i[11],A=i[15],T=s[0],R=s[4],F=s[8],_=s[12],b=s[1],N=s[5],I=s[9],U=s[13],L=s[2],E=s[6],k=s[10],V=s[14],z=s[3],W=s[7],K=s[11],Q=s[15];return r[0]=a*T+o*b+l*L+c*z,r[4]=a*R+o*N+l*E+c*W,r[8]=a*F+o*I+l*k+c*K,r[12]=a*_+o*U+l*V+c*Q,r[1]=d*T+u*b+h*L+f*z,r[5]=d*R+u*N+h*E+f*W,r[9]=d*F+u*I+h*k+f*K,r[13]=d*_+u*U+h*V+f*Q,r[2]=g*T+y*b+p*L+m*z,r[6]=g*R+y*N+p*E+m*W,r[10]=g*F+y*I+p*k+m*K,r[14]=g*_+y*U+p*V+m*Q,r[3]=x*T+v*b+w*L+A*z,r[7]=x*R+v*N+w*E+A*W,r[11]=x*F+v*I+w*k+A*K,r[15]=x*_+v*U+w*V+A*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*o*h+i*c*h+s*o*f-i*l*f)+y*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*d-r*l*d)+p*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*d-i*c*d)+m*(-s*o*d-t*l*u+t*o*h+s*a*u-i*a*h+i*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],x=u*p*c-y*h*c+y*l*f-o*p*f-u*l*m+o*h*m,v=g*h*c-d*p*c-g*l*f+a*p*f+d*l*m-a*h*m,w=d*y*c-g*u*c+g*o*f-a*y*f-d*o*m+a*u*m,A=g*u*l-d*y*l-g*o*h+a*y*h+d*o*p-a*u*p,T=t*x+i*v+s*w+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=x*R,e[1]=(y*h*r-u*p*r-y*s*f+i*p*f+u*s*m-i*h*m)*R,e[2]=(o*p*r-y*l*r+y*s*c-i*p*c-o*s*m+i*l*m)*R,e[3]=(u*l*r-o*h*r-u*s*c+i*h*c+o*s*f-i*l*f)*R,e[4]=v*R,e[5]=(d*p*r-g*h*r+g*s*f-t*p*f-d*s*m+t*h*m)*R,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*m-t*l*m)*R,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*f+t*l*f)*R,e[8]=w*R,e[9]=(g*u*r-d*y*r-g*i*f+t*y*f+d*i*m-t*u*m)*R,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*m+t*o*m)*R,e[11]=(d*o*r-a*u*r-d*i*c+t*u*c+a*i*f-t*o*f)*R,e[12]=A*R,e[13]=(d*y*s-g*u*s+g*i*h-t*y*h-d*i*p+t*u*p)*R,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*p-t*o*p)*R,e[15]=(a*u*s-d*o*s+d*i*l-t*u*l-a*i*h+t*o*h)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,g=r*u,y=a*d,p=a*u,m=o*u,x=l*c,v=l*d,w=l*u,A=i.x,T=i.y,R=i.z;return s[0]=(1-(y+m))*A,s[1]=(f+w)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(f-w)*T,s[5]=(1-(h+m))*T,s[6]=(p+x)*T,s[7]=0,s[8]=(g+v)*R,s[9]=(p-x)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ca.set(s[0],s[1],s[2]).length(),a=ca.set(s[4],s[5],s[6]).length(),o=ca.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ci.copy(this);let c=1/r,d=1/a,u=1/o;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=d,Ci.elements[5]*=d,Ci.elements[6]*=d,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,t.setFromRotationMatrix(Ci),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=fs){let l=this.elements,c=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),h=(i+s)/(i-s),f,g;if(o===fs)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===lc)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=fs){let l=this.elements,c=1/(t-e),d=1/(i-s),u=1/(a-r),h=(t+e)*c,f=(i+s)*d,g,y;if(o===fs)g=(a+r)*u,y=-2*u;else if(o===lc)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ca=new D,Ci=new Ee,nb=new D(0,0,0),ib=new D(1,1,1),Bs=new D,kl=new D,ti=new D,zm=new Ee,Hm=new nt,ai=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sb=0,Vm=new D,da=new nt,ls=new Ee,Ol=new D,uo=new D,rb=new D,ab=new nt,Gm=new D(1,0,0),Wm=new D(0,1,0),qm=new D(0,0,1),ob={type:"added"},lb={type:"removed"},Ot=class n extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new ai,i=new nt,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new rt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(qm,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ol.copy(e):Ol.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(uo,Ol,this.up):ls.lookAt(Ol,uo,this.up),this.quaternion.setFromRotationMatrix(ls),s&&(ls.extractRotation(s.matrixWorld),da.setFromRotationMatrix(ls),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ob)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lb)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(ls),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new D(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=new D,cs=new D,bu=new D,ds=new D,ua=new D,ha=new D,Xm=new D,_u=new D,wu=new D,Su=new D,Ul=!1,_a=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Li.subVectors(e,t),s.cross(Li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Li.subVectors(s,t),cs.subVectors(i,t),bu.subVectors(e,t);let a=Li.dot(Li),o=Li.dot(cs),l=Li.dot(bu),c=cs.dot(cs),d=cs.dot(bu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getUV(e,t,i,s,r,a,o,l){return Ul===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ul=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ds.x),l.addScaledVector(a,ds.y),l.addScaledVector(o,ds.z),l)}static isFrontFacing(e,t,i,s){return Li.subVectors(i,t),cs.subVectors(e,t),Li.cross(cs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),Li.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Ul===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ul=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ua.subVectors(s,i),ha.subVectors(r,i),_u.subVectors(e,i);let l=ua.dot(_u),c=ha.dot(_u);if(l<=0&&c<=0)return t.copy(i);wu.subVectors(e,s);let d=ua.dot(wu),u=ha.dot(wu);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(ua,a);Su.subVectors(e,r);let f=ua.dot(Su),g=ha.dot(Su);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ha,o);let p=d*g-f*u;if(p<=0&&u-d>=0&&f-g>=0)return Xm.subVectors(r,s),o=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(Xm,o);let m=1/(p+y+h);return a=y*m,o=h*m,t.copy(i).addScaledVector(ua,a).addScaledVector(ha,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Mu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=Ah(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Mu(a,r,e+1/3),this.g=Mu(a,r,e),this.b=Mu(a,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=Jg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=hu(e.r),this.g=hu(e.g),this.b=hu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return mt.fromWorkingColorSpace(An.copy(this),e),Math.round(En(An.r*255,0,255))*65536+Math.round(En(An.g*255,0,255))*256+Math.round(En(An.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(An.copy(this),t);let i=An.r,s=An.g,r=An.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Vt){mt.fromWorkingColorSpace(An.copy(this),e);let t=An.r,i=An.g,s=An.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zs),this.setHSL(zs.h+e,zs.s+t,zs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zs),e.getHSL(Fl);let i=vo(zs.h,Fl.h,t),s=vo(zs.s,Fl.s,t),r=vo(zs.l,Fl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Pe;Pe.NAMES=Jg;var cb=0,$n=class extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Ma,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Bu,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ma&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fu&&(i.blendSrc=this.blendSrc),this.blendDst!==Bu&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ic&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var rn=new D,Bl=new je,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ps,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vu&&(e.usage=this.usage),e}};var pc=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var fc=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Bn=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}};var db=0,pi=new Ee,Au=new Ot,pa=new D,ni=new gi,ho=new gi,yn=new D,zn=class n extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?fc:pc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pa).negate(),this.translate(pa.x,pa.y,pa.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ho.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(ni.min,ho.min),ni.expandByPoint(yn),yn.addVectors(ni.max,ho.max),ni.expandByPoint(yn)):(ni.expandByPoint(ho.min),ni.expandByPoint(ho.max))}ni.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)yn.fromBufferAttribute(o,c),l&&(pa.fromBufferAttribute(e,c),yn.add(pa)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<o;b++)c[b]=new D,d[b]=new D;let u=new D,h=new D,f=new D,g=new je,y=new je,p=new je,m=new D,x=new D;function v(b,N,I){u.fromArray(s,b*3),h.fromArray(s,N*3),f.fromArray(s,I*3),g.fromArray(a,b*2),y.fromArray(a,N*2),p.fromArray(a,I*2),h.sub(u),f.sub(u),y.sub(g),p.sub(g);let U=1/(y.x*p.y-p.x*y.y);isFinite(U)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(f,-y.y).multiplyScalar(U),x.copy(f).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(U),c[b].add(m),c[N].add(m),c[I].add(m),d[b].add(x),d[N].add(x),d[I].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,N=w.length;b<N;++b){let I=w[b],U=I.start,L=I.count;for(let E=U,k=U+L;E<k;E+=3)v(i[E+0],i[E+1],i[E+2])}let A=new D,T=new D,R=new D,F=new D;function _(b){R.fromArray(r,b*3),F.copy(R);let N=c[b];A.copy(N),A.sub(R.multiplyScalar(R.dot(N))).normalize(),T.crossVectors(F,N);let U=T.dot(d[b])<0?-1:1;l[b*4]=A.x,l[b*4+1]=A.y,l[b*4+2]=A.z,l[b*4+3]=U}for(let b=0,N=w.length;b<N;++b){let I=w[b],U=I.start,L=I.count;for(let E=U,k=U+L;E<k;E+=3)_(i[E+0]),_(i[E+1]),_(i[E+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*d;for(let m=0;m<d;m++)h[g++]=c[f++]}return new It(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$m=new Ee,vr=new Rr,zl=new ri,Ym=new D,fa=new D,ma=new D,ga=new D,Eu=new D,Hl=new D,Vl=new je,Gl=new je,Wl=new je,jm=new D,Zm=new D,Km=new D,ql=new D,Xl=new D,wt=class extends Ot{constructor(e=new zn,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(Eu.fromBufferAttribute(u,e),a?Hl.addScaledVector(Eu,d):Hl.addScaledVector(Eu.sub(t),d))}t.add(Hl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),vr.copy(e.ray).recast(e.near),!(zl.containsPoint(vr.origin)===!1&&(vr.intersectSphere(zl,Ym)===null||vr.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&($m.copy(r).invert(),vr.copy(e.ray).applyMatrix4($m),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let w=x,A=v;w<A;w+=3){let T=o.getX(w),R=o.getX(w+1),F=o.getX(w+2);s=$l(this,m,e,i,c,d,u,T,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let x=o.getX(p),v=o.getX(p+1),w=o.getX(p+2);s=$l(this,a,e,i,c,d,u,x,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=x,A=v;w<A;w+=3){let T=w,R=w+1,F=w+2;s=$l(this,m,e,i,c,d,u,T,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let x=p,v=p+1,w=p+2;s=$l(this,a,e,i,c,d,u,x,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ub(n,e,t,i,s,r,a,o){let l;if(e.side===Xn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===zi,o),l===null)return null;Xl.copy(o),Xl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Xl);return c<t.near||c>t.far?null:{distance:c,point:Xl.clone(),object:n}}function $l(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,fa),n.getVertexPosition(l,ma),n.getVertexPosition(c,ga);let d=ub(n,e,t,i,fa,ma,ga,ql);if(d){s&&(Vl.fromBufferAttribute(s,o),Gl.fromBufferAttribute(s,l),Wl.fromBufferAttribute(s,c),d.uv=_a.getInterpolation(ql,fa,ma,ga,Vl,Gl,Wl,new je)),r&&(Vl.fromBufferAttribute(r,o),Gl.fromBufferAttribute(r,l),Wl.fromBufferAttribute(r,c),d.uv1=_a.getInterpolation(ql,fa,ma,ga,Vl,Gl,Wl,new je),d.uv2=d.uv1),a&&(jm.fromBufferAttribute(a,o),Zm.fromBufferAttribute(a,l),Km.fromBufferAttribute(a,c),d.normal=_a.getInterpolation(ql,fa,ma,ga,jm,Zm,Km,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};_a.getNormal(fa,ma,ga,u.normal),d.face=u}return d}var Ys=class n extends zn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(d,3)),this.setAttribute("uv",new Bn(u,2));function g(y,p,m,x,v,w,A,T,R,F,_){let b=w/R,N=A/F,I=w/2,U=A/2,L=T/2,E=R+1,k=F+1,V=0,z=0,W=new D;for(let K=0;K<k;K++){let Q=K*N-U;for(let ie=0;ie<E;ie++){let q=ie*b-I;W[y]=q*x,W[p]=Q*v,W[m]=L,c.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[m]=T>0?1:-1,d.push(W.x,W.y,W.z),u.push(ie/R),u.push(1-K/F),V+=1}}for(let K=0;K<F;K++)for(let Q=0;Q<R;Q++){let ie=h+Q+E*K,q=h+Q+E*(K+1),j=h+(Q+1)+E*(K+1),ne=h+(Q+1)+E*K;l.push(ie,q,ne),l.push(q,j,ne),z+=6}o.addGroup(f,z,_),f+=z,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ia(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Un(n){let e={};for(let t=0;t<n.length;t++){let i=Ia(n[t]);for(let s in i)e[s]=i[s]}return e}function hb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qg(n){return n.getRenderTarget()===null?n.outputColorSpace:mt.workingColorSpace}var pb={clone:Ia,merge:Un},fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gs=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=hb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},mc=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=fs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends mc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ya=-90,va=1,$u=class extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(ya,va,e,t);s.layers=this.layers,this.add(s);let r=new Gt(ya,va,e,t);r.layers=this.layers,this.add(r);let a=new Gt(ya,va,e,t);a.layers=this.layers,this.add(a);let o=new Gt(ya,va,e,t);o.layers=this.layers,this.add(o);let l=new Gt(ya,va,e,t);l.layers=this.layers,this.add(l);let c=new Gt(ya,va,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===fs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},gc=class extends wn{constructor(e,t,i,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ta,super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yu=class extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ar?Vt:mi),this.texture=new gc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ys(5,5,5),r=new gs({name:"CubemapFromEquirect",uniforms:Ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:Gs});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===Xs&&(t.minFilter=an),new $u(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Tu=new D,gb=new D,yb=new rt,ii=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Tu.subVectors(i,t).cross(gb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Tu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||yb.getNormalMatrix(e),s=this.coplanarPoint(Tu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xr=new ri,Yl=new D,Ao=class{constructor(e=new ii,t=new ii,i=new ii,s=new ii,r=new ii,a=new ii){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fs){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],f=s[8],g=s[9],y=s[10],p=s[11],m=s[12],x=s[13],v=s[14],w=s[15];if(i[0].setComponents(l-r,h-c,p-f,w-m).normalize(),i[1].setComponents(l+r,h+c,p+f,w+m).normalize(),i[2].setComponents(l+a,h+d,p+g,w+x).normalize(),i[3].setComponents(l-a,h-d,p-g,w-x).normalize(),i[4].setComponents(l-o,h-u,p-y,w-v).normalize(),t===fs)i[5].setComponents(l+o,h+u,p+y,w+v).normalize();else if(t===lc)i[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Yl.x=s.normal.x>0?e.max.x:e.min.x,Yl.y=s.normal.y>0?e.max.y:e.min.y,Yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function e0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function vb(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,d){let u=c.array,h=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,u,h),c.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,d,u){let h=d.array,f=d._updateRange,g=d.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,h),g.length!==0){for(let y=0,p=g.length;y<p;y++){let m=g[y];t?n.bufferSubData(u,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(u,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}d.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):n.bufferSubData(u,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,d),u.version=c.version}}return{get:a,remove:o,update:l}}var Rn=class n extends zn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],g=[],y=[],p=[];for(let m=0;m<d;m++){let x=m*h-a;for(let v=0;v<c;v++){let w=v*u-r;g.push(w,-x,0),y.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let v=x+c*m,w=x+c*(m+1),A=x+1+c*(m+1),T=x+1+c*m;f.push(v,w,T),f.push(w,A,T)}this.setIndex(f),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(y,3)),this.setAttribute("uv",new Bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bb=`#ifdef USE_ALPHAHASH
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
#endif`,_b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ab=`#ifdef USE_AOMAP
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
#endif`,Eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tb=`#ifdef USE_BATCHING
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
#endif`,Rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ib=`#ifdef USE_IRIDESCENCE
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
#endif`,Nb=`#ifdef USE_BUMPMAP
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vb=`#define PI 3.141592653589793
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
} // validated`,Gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wb=`vec3 transformedNormal = objectNormal;
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
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`
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
}`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a_=`#ifdef USE_GRADIENTMAP
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
}`,o_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,l_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
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
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
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
#endif`,v_=`struct PhysicalMaterial {
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
}`,x_=`
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
#endif`,b_=`#if defined( RE_IndirectDiffuse )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C_=`#if defined( USE_POINTS_UV )
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
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N_=`#ifdef USE_MORPHNORMALS
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
#endif`,D_=`#ifdef USE_MORPHTARGETS
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
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H_=`#ifdef USE_NORMALMAP
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
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iw=`float getShadowMask() {
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
}`,sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
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
#endif`,aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ow=`#ifdef USE_SKINNING
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
#endif`,lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hw=`#ifdef USE_TRANSMISSION
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
#endif`,pw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xw=`uniform sampler2D t2D;
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
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_w=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`#include <common>
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
}`,Aw=`#if DEPTH_PACKING == 3200
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
}`,Ew=`#define DISTANCE
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
}`,Tw=`#define DISTANCE
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
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`uniform float scale;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Iw=`#include <common>
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
}`,Nw=`uniform vec3 diffuse;
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
}`,Dw=`#define LAMBERT
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
}`,kw=`#define LAMBERT
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
}`,Ow=`#define MATCAP
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
}`,Uw=`#define MATCAP
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
}`,Fw=`#define NORMAL
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
}`,Bw=`#define NORMAL
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
}`,zw=`#define PHONG
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
}`,Hw=`#define PHONG
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
}`,Vw=`#define STANDARD
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
}`,Gw=`#define STANDARD
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
}`,Ww=`#define TOON
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
}`,qw=`#define TOON
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
}`,Xw=`uniform float size;
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
}`,$w=`uniform vec3 diffuse;
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
}`,Yw=`#include <common>
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
}`,jw=`uniform vec3 color;
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
}`,Zw=`uniform float rotation;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:xb,alphahash_pars_fragment:bb,alphamap_fragment:_b,alphamap_pars_fragment:wb,alphatest_fragment:Sb,alphatest_pars_fragment:Mb,aomap_fragment:Ab,aomap_pars_fragment:Eb,batching_pars_vertex:Tb,batching_vertex:Rb,begin_vertex:Cb,beginnormal_vertex:Lb,bsdfs:Pb,iridescence_fragment:Ib,bumpmap_pars_fragment:Nb,clipping_planes_fragment:Db,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Ob,clipping_planes_vertex:Ub,color_fragment:Fb,color_pars_fragment:Bb,color_pars_vertex:zb,color_vertex:Hb,common:Vb,cube_uv_reflection_fragment:Gb,defaultnormal_vertex:Wb,displacementmap_pars_vertex:qb,displacementmap_vertex:Xb,emissivemap_fragment:$b,emissivemap_pars_fragment:Yb,colorspace_fragment:jb,colorspace_pars_fragment:Zb,envmap_fragment:Kb,envmap_common_pars_fragment:Jb,envmap_pars_fragment:Qb,envmap_pars_vertex:e_,envmap_physical_pars_fragment:h_,envmap_vertex:t_,fog_vertex:n_,fog_pars_vertex:i_,fog_fragment:s_,fog_pars_fragment:r_,gradientmap_pars_fragment:a_,lightmap_fragment:o_,lightmap_pars_fragment:l_,lights_lambert_fragment:c_,lights_lambert_pars_fragment:d_,lights_pars_begin:u_,lights_toon_fragment:p_,lights_toon_pars_fragment:f_,lights_phong_fragment:m_,lights_phong_pars_fragment:g_,lights_physical_fragment:y_,lights_physical_pars_fragment:v_,lights_fragment_begin:x_,lights_fragment_maps:b_,lights_fragment_end:__,logdepthbuf_fragment:w_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:A_,map_fragment:E_,map_pars_fragment:T_,map_particle_fragment:R_,map_particle_pars_fragment:C_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:P_,morphcolor_vertex:I_,morphnormal_vertex:N_,morphtarget_pars_vertex:D_,morphtarget_vertex:k_,normal_fragment_begin:O_,normal_fragment_maps:U_,normal_pars_fragment:F_,normal_pars_vertex:B_,normal_vertex:z_,normalmap_pars_fragment:H_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:q_,opaque_fragment:X_,packing:$_,premultiplied_alpha_fragment:Y_,project_vertex:j_,dithering_fragment:Z_,dithering_pars_fragment:K_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:ew,shadowmap_pars_vertex:tw,shadowmap_vertex:nw,shadowmask_pars_fragment:iw,skinbase_vertex:sw,skinning_pars_vertex:rw,skinning_vertex:aw,skinnormal_vertex:ow,specularmap_fragment:lw,specularmap_pars_fragment:cw,tonemapping_fragment:dw,tonemapping_pars_fragment:uw,transmission_fragment:hw,transmission_pars_fragment:pw,uv_pars_fragment:fw,uv_pars_vertex:mw,uv_vertex:gw,worldpos_vertex:yw,background_vert:vw,background_frag:xw,backgroundCube_vert:bw,backgroundCube_frag:_w,cube_vert:ww,cube_frag:Sw,depth_vert:Mw,depth_frag:Aw,distanceRGBA_vert:Ew,distanceRGBA_frag:Tw,equirect_vert:Rw,equirect_frag:Cw,linedashed_vert:Lw,linedashed_frag:Pw,meshbasic_vert:Iw,meshbasic_frag:Nw,meshlambert_vert:Dw,meshlambert_frag:kw,meshmatcap_vert:Ow,meshmatcap_frag:Uw,meshnormal_vert:Fw,meshnormal_frag:Bw,meshphong_vert:zw,meshphong_frag:Hw,meshphysical_vert:Vw,meshphysical_frag:Gw,meshtoon_vert:Ww,meshtoon_frag:qw,points_vert:Xw,points_frag:$w,shadow_vert:Yw,shadow_frag:jw,sprite_vert:Zw,sprite_frag:Kw},pe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Fi={basic:{uniforms:Un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Un([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Un([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Un([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Un([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Un([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Un([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Un([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Un([pe.lights,pe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Fi.physical={uniforms:Un([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var jl={r:0,b:0,g:0};function Jw(n,e,t,i,s,r,a){let o=new Pe(0),l=r===!0?0:1,c,d,u=null,h=0,f=null;function g(p,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),x=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Dc)?(d===void 0&&(d=new wt(new Ys(1,1,1),new gs({name:"BackgroundCubeMaterial",uniforms:Ia(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=mt.getTransfer(v.colorSpace)!==kt,(u!==v||h!==v.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new wt(new Rn(2,2),new gs({name:"BackgroundMaterial",uniforms:Ia(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=mt.getTransfer(v.colorSpace)!==kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,m){p.getRGB(jl,Qg(n)),i.buffers.color.setClear(jl.r,jl.g,jl.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:g}}function Qw(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,d=!1;function u(L,E,k,V,z){let W=!1;if(a){let K=y(V,k,E);c!==K&&(c=K,f(c.object)),W=m(L,V,k,z),W&&x(L,V,k,z)}else{let K=E.wireframe===!0;(c.geometry!==V.id||c.program!==k.id||c.wireframe!==K)&&(c.geometry=V.id,c.program=k.id,c.wireframe=K,W=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,F(L,E,k,V),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,E,k){let V=k.wireframe===!0,z=o[L.id];z===void 0&&(z={},o[L.id]=z);let W=z[E.id];W===void 0&&(W={},z[E.id]=W);let K=W[V];return K===void 0&&(K=p(h()),W[V]=K),K}function p(L){let E=[],k=[],V=[];for(let z=0;z<s;z++)E[z]=0,k[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:V,object:L,attributes:{},index:null}}function m(L,E,k,V){let z=c.attributes,W=E.attributes,K=0,Q=k.getAttributes();for(let ie in Q)if(Q[ie].location>=0){let j=z[ie],ne=W[ie];if(ne===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),j===void 0||j.attribute!==ne||ne&&j.data!==ne.data)return!0;K++}return c.attributesNum!==K||c.index!==V}function x(L,E,k,V){let z={},W=E.attributes,K=0,Q=k.getAttributes();for(let ie in Q)if(Q[ie].location>=0){let j=W[ie];j===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let ne={};ne.attribute=j,j&&j.data&&(ne.data=j.data),z[ie]=ne,K++}c.attributes=z,c.attributesNum=K,c.index=V}function v(){let L=c.newAttributes;for(let E=0,k=L.length;E<k;E++)L[E]=0}function w(L){A(L,0)}function A(L,E){let k=c.newAttributes,V=c.enabledAttributes,z=c.attributeDivisors;k[L]=1,V[L]===0&&(n.enableVertexAttribArray(L),V[L]=1),z[L]!==E&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,E),z[L]=E)}function T(){let L=c.newAttributes,E=c.enabledAttributes;for(let k=0,V=E.length;k<V;k++)E[k]!==L[k]&&(n.disableVertexAttribArray(k),E[k]=0)}function R(L,E,k,V,z,W,K){K===!0?n.vertexAttribIPointer(L,E,k,z,W):n.vertexAttribPointer(L,E,k,V,z,W)}function F(L,E,k,V){if(i.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let z=V.attributes,W=k.getAttributes(),K=E.defaultAttributeValues;for(let Q in W){let ie=W[Q];if(ie.location>=0){let q=z[Q];if(q===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let j=q.normalized,ne=q.itemSize,ee=t.get(q);if(ee===void 0)continue;let H=ee.buffer,le=ee.type,ue=ee.bytesPerElement,_e=i.isWebGL2===!0&&(le===n.INT||le===n.UNSIGNED_INT||q.gpuType===Hg);if(q.isInterleavedBufferAttribute){let $e=q.data,X=$e.stride,sn=q.offset;if($e.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ie.locationSize;Ne++)A(ie.location+Ne,$e.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let Ne=0;Ne<ie.locationSize;Ne++)w(ie.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Ne=0;Ne<ie.locationSize;Ne++)R(ie.location+Ne,ne/ie.locationSize,le,j,X*ue,(sn+ne/ie.locationSize*Ne)*ue,_e)}else{if(q.isInstancedBufferAttribute){for(let $e=0;$e<ie.locationSize;$e++)A(ie.location+$e,q.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let $e=0;$e<ie.locationSize;$e++)w(ie.location+$e);n.bindBuffer(n.ARRAY_BUFFER,H);for(let $e=0;$e<ie.locationSize;$e++)R(ie.location+$e,ne/ie.locationSize,le,j,ne*ue,ne/ie.locationSize*$e*ue,_e)}}else if(K!==void 0){let j=K[Q];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ie.location,j);break;case 3:n.vertexAttrib3fv(ie.location,j);break;case 4:n.vertexAttrib4fv(ie.location,j);break;default:n.vertexAttrib1fv(ie.location,j)}}}}T()}function _(){I();for(let L in o){let E=o[L];for(let k in E){let V=E[k];for(let z in V)g(V[z].object),delete V[z];delete E[k]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;let E=o[L.id];for(let k in E){let V=E[k];for(let z in V)g(V[z].object),delete V[z];delete E[k]}delete o[L.id]}function N(L){for(let E in o){let k=o[E];if(k[L.id]===void 0)continue;let V=k[L.id];for(let z in V)g(V[z].object),delete V[z];delete k[L.id]}}function I(){U(),d=!0,c!==l&&(c=l,f(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:I,resetDefaultState:U,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:w,disableUnusedAttributes:T}}function eS(n,e,t,i){let s=i.isWebGL2,r;function a(d){r=d}function o(d,u){n.drawArrays(r,d,u),t.update(u,r,1)}function l(d,u,h){if(h===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,d,u,h),t.update(u,r,h)}function c(d,u,h){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h;g++)this.render(d[g],u[g]);else{f.multiDrawArraysWEBGL(r,d,0,u,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function tS(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,w=a||e.has("OES_texture_float"),A=v&&w,T=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:A,maxSamples:T}}function nS(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ii,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||i!==0||s;return s=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{let x=r?0:i,v=x*4,w=m.clippingState||null;l.value=w,w=d(g,h,v,f);for(let A=0;A!==v;++A)w[A]=t[A];m.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,w=f;v!==y;++v,w+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function iS(n){let e=new WeakMap;function t(a,o){return o===zu?a.mapping=Ta:o===Hu&&(a.mapping=Ra),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===zu||o===Hu)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Yu(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Na=class extends mc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wa=4,Jm=[.125,.215,.35,.446,.526,.582],wr=20,Ru=new Na,Qm=new Pe,Cu=null,Lu=0,Pu=0,br=(1+Math.sqrt(5))/2,xa=1/br,eg=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,br,xa),new D(0,br,-xa),new D(xa,0,br),new D(-xa,0,br),new D(br,xa,0),new D(-br,xa,0)],yc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Cu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Lu,Pu),e.scissorTest=!1,Zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ta||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:wo,format:fi,colorSpace:dn,depthBuffer:!1},s=tg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sS(r)),this._blurMaterial=rS(r,e,t)}return s}_compileMaterial(e){let t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ru)}_sceneToCubeUV(e,t,i,s){let o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Qm),d.toneMapping=Ws,d.autoClear=!1;let f=new on({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new wt(new Ys,f),y=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,y=!0):(f.color.copy(Qm),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;Zl(s,x*v,m>2?v:0,v,v),d.setRenderTarget(s),y&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ta||e.mapping===Ra;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Zl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ru)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=eg[(s-1)%eg.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new wt(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wr-1),y=r/g,p=isFinite(r)?1+Math.floor(d*y):wr;p>wr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wr}`);let m=[],x=0;for(let R=0;R<wr;++R){let F=R/y,_=Math.exp(-F*F/2);m.push(_),R===0?x+=_:R<p&&(x+=2*_)}for(let R=0;R<m.length;R++)m[R]=m[R]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let w=this._sizeLods[s],A=3*w*(s>v-wa?s-v+wa:0),T=4*(this._cubeSize-w);Zl(t,A,T,3*w,2*w),l.setRenderTarget(t),l.render(u,Ru)}};function sS(n){let e=[],t=[],i=[],s=n,r=n-wa+1+Jm.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-wa?l=Jm[a-n+wa-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,y=3,p=2,m=1,x=new Float32Array(y*g*f),v=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,F=T>2?0:-1,_=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];x.set(_,y*g*T),v.set(h,p*g*T);let b=[T,T,T,T,T,T];w.set(b,m*g*T)}let A=new zn;A.setAttribute("position",new It(x,y)),A.setAttribute("uv",new It(v,p)),A.setAttribute("faceIndex",new It(w,m)),e.push(A),s>wa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tg(n,e,t){let i=new ms(n,e,t);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function rS(n,e,t){let i=new Float32Array(wr),s=new D(0,1,0);return new gs({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function ng(){return new gs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function ig(){return new gs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function aS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===zu||l===Hu,d=l===Ta||l===Ra;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new yc(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||d&&u&&s(u)){t===null&&(t=new yc(n));let h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function oS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lS(n,e,t,i){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)e.remove(y[p])}h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let p=0,m=y.length;p<m;p++)e.update(y[p],n.ARRAY_BUFFER)}}function c(u){let h=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let v=0,w=x.length;v<w;v+=3){let A=x[v+0],T=x[v+1],R=x[v+2];h.push(A,T,T,R,R,A)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,w=x.length/3-1;v<w;v+=3){let A=v+0,T=v+1,R=v+2;h.push(A,T,T,R,R,A)}}else return;let p=new(Kg(h)?fc:pc)(h,1);p.version=y;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function cS(n,e,t,i){let s=i.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function d(f,g){n.drawElements(r,g,o,f*l),t.update(g,r,1)}function u(f,g,y){if(y===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,o,f*l,y),t.update(g,r,y)}function h(f,g,y){if(y===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<y;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,o,f,0,y);let m=0;for(let x=0;x<y;x++)m+=g[x];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=h}function dS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function uS(n,e){return n[0]-e[0]}function hS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function pS(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new Mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=f!==void 0?f.length:0,y=r.get(d);if(y===void 0||y.count!==g){let L=function(){I.dispose(),r.delete(d),d.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let x=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],R=d.morphAttributes.color||[],F=0;x===!0&&(F=1),v===!0&&(F=2),w===!0&&(F=3);let _=d.attributes.position.count*F,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let N=new Float32Array(_*b*4*g),I=new hc(N,_,b,g);I.type=ps,I.needsUpdate=!0;let U=F*4;for(let E=0;E<g;E++){let k=A[E],V=T[E],z=R[E],W=_*b*4*E;for(let K=0;K<k.count;K++){let Q=K*U;x===!0&&(a.fromBufferAttribute(k,K),N[W+Q+0]=a.x,N[W+Q+1]=a.y,N[W+Q+2]=a.z,N[W+Q+3]=0),v===!0&&(a.fromBufferAttribute(V,K),N[W+Q+4]=a.x,N[W+Q+5]=a.y,N[W+Q+6]=a.z,N[W+Q+7]=0),w===!0&&(a.fromBufferAttribute(z,K),N[W+Q+8]=a.x,N[W+Q+9]=a.y,N[W+Q+10]=a.z,N[W+Q+11]=z.itemSize===4?a.w:1)}}y={count:g,texture:I,size:new je(_,b)},r.set(d,y),d.addEventListener("dispose",L)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];let m=d.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",h),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let f=h===void 0?0:h.length,g=i[d.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[d.id]=g}for(let v=0;v<f;v++){let w=g[v];w[0]=v,w[1]=h[v]}g.sort(hS);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(uS);let y=d.morphAttributes.position,p=d.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let w=o[v],A=w[0],T=w[1];A!==Number.MAX_SAFE_INTEGER&&T?(y&&d.getAttribute("morphTarget"+v)!==y[A]&&d.setAttribute("morphTarget"+v,y[A]),p&&d.getAttribute("morphNormal"+v)!==p[A]&&d.setAttribute("morphNormal"+v,p[A]),s[v]=T,m+=T):(y&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),p&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),s[v]=0)}let x=d.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function fS(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var vc=class extends wn{constructor(e,t,i,s,r,a,o,l,c,d){if(d=d!==void 0?d:Mr,d!==Mr&&d!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Mr&&(i=Hs),i===void 0&&d===Ca&&(i=Sr),super(null,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},t0=new wn,n0=new vc(1,1);n0.compareFunction=Zg;var i0=new hc,s0=new Xu,r0=new gc,sg=[],rg=[],ag=new Float32Array(16),og=new Float32Array(9),lg=new Float32Array(4);function za(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=sg[s];if(r===void 0&&(r=new Float32Array(s),sg[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uc(n,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function yS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function vS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function xS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;lg.set(i),n.uniformMatrix2fv(this.addr,!1,lg),hn(t,i)}}function bS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;og.set(i),n.uniformMatrix3fv(this.addr,!1,og),hn(t,i)}}function _S(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;ag.set(i),n.uniformMatrix4fv(this.addr,!1,ag),hn(t,i)}}function wS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function MS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function AS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function ES(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function RS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function CS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function LS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?n0:t0;t.setTexture2D(e||r,s)}function PS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||s0,s)}function IS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||r0,s)}function NS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||i0,s)}function DS(n){switch(n){case 5126:return mS;case 35664:return gS;case 35665:return yS;case 35666:return vS;case 35674:return xS;case 35675:return bS;case 35676:return _S;case 5124:case 35670:return wS;case 35667:case 35671:return SS;case 35668:case 35672:return MS;case 35669:case 35673:return AS;case 5125:return ES;case 36294:return TS;case 36295:return RS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return NS}}function kS(n,e){n.uniform1fv(this.addr,e)}function OS(n,e){let t=za(e,this.size,2);n.uniform2fv(this.addr,t)}function US(n,e){let t=za(e,this.size,3);n.uniform3fv(this.addr,t)}function FS(n,e){let t=za(e,this.size,4);n.uniform4fv(this.addr,t)}function BS(n,e){let t=za(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zS(n,e){let t=za(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HS(n,e){let t=za(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VS(n,e){n.uniform1iv(this.addr,e)}function GS(n,e){n.uniform2iv(this.addr,e)}function WS(n,e){n.uniform3iv(this.addr,e)}function qS(n,e){n.uniform4iv(this.addr,e)}function XS(n,e){n.uniform1uiv(this.addr,e)}function $S(n,e){n.uniform2uiv(this.addr,e)}function YS(n,e){n.uniform3uiv(this.addr,e)}function jS(n,e){n.uniform4uiv(this.addr,e)}function ZS(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||t0,r[a])}function KS(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||s0,r[a])}function JS(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||r0,r[a])}function QS(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||i0,r[a])}function eM(n){switch(n){case 5126:return kS;case 35664:return OS;case 35665:return US;case 35666:return FS;case 35674:return BS;case 35675:return zS;case 35676:return HS;case 5124:case 35670:return VS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return qS;case 5125:return XS;case 36294:return $S;case 36295:return YS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return JS;case 36289:case 36303:case 36311:case 36292:return QS}}var ju=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=DS(t.type)}},Zu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eM(t.type)}},Ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Iu=/(\w+)(\])?(\[|\.)?/g;function cg(n,e){n.seq.push(e),n.map[e.id]=e}function tM(n,e,t){let i=n.name,s=i.length;for(Iu.lastIndex=0;;){let r=Iu.exec(i),a=Iu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cg(t,c===void 0?new ju(o,n,e):new Zu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ku(o),cg(t,u)),t=u}}}var Ea=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);tM(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function dg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var nM=37297,iM=0;function sM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function rM(n){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n),i;switch(e===t?i="":e===oc&&t===ac?i="LinearDisplayP3ToLinearSRGB":e===ac&&t===oc&&(i="LinearSRGBToLinearDisplayP3"),n){case dn:case Oc:return[i,"LinearTransferOETF"];case Vt:case Mh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ug(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sM(n.getShaderSource(e),a)}else return s}function aM(n,e){let t=rM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function oM(n,e){let t;switch(e){case ux:t="Linear";break;case hx:t="Reinhard";break;case px:t="OptimizedCineon";break;case fx:t="ACESFilmic";break;case gx:t="AgX";break;case mx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}function cM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sa).join(`
`)}function dM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sa(n){return n!==""}function hg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(n){return n.replace(hM,fM)}var pM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fM(n,e){let t=Ke[e];if(t===void 0){let i=pM.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ju(t)}var mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(n){return n.replace(mM,gM)}function gM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function vM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ta:case Ra:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ra:e="ENVMAP_MODE_REFRACTION";break}return e}function bM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case cx:e="ENVMAP_BLENDING_MIX";break;case dx:e="ENVMAP_BLENDING_ADD";break}return e}function _M(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wM(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=yM(t),c=vM(t),d=xM(t),u=bM(t),h=_M(t),f=t.isWebGL2?"":lM(t),g=cM(t),y=dM(r),p=s.createProgram(),m,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Sa).join(`
`),m.length>0&&(m+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Sa).join(`
`),x.length>0&&(x+=`
`)):(m=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),x=[f,mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ws?"#define TONE_MAPPING":"",t.toneMapping!==Ws?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ws?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,aM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=Ju(a),a=hg(a,t),a=pg(a,t),o=Ju(o),o=hg(o,t),o=pg(o,t),a=fg(a),o=fg(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=v+m+a,A=v+x+o,T=dg(s,s.VERTEX_SHADER,w),R=dg(s,s.FRAGMENT_SHADER,A);s.attachShader(p,T),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function F(I){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(T).trim(),E=s.getShaderInfoLog(R).trim(),k=!0,V=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,T,R);else{let z=ug(s,T,"vertex"),W=ug(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+z+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||E==="")&&(V=!1);V&&(I.diagnostics={runnable:k,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:E,prefix:x}})}s.deleteShader(T),s.deleteShader(R),_=new Ea(s,p),b=uM(s,p)}let _;this.getUniforms=function(){return _===void 0&&F(this),_};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,nM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=R,this}var SM=0,Qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new eh(e),t.set(e,i)),i}},eh=class{constructor(e){this.id=SM++,this.code=e,this.usedTimes=0}};function MM(n,e,t,i,s,r,a){let o=new Mo,l=new Qu,c=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function p(_,b,N,I,U){let L=I.fog,E=U.geometry,k=_.isMeshStandardMaterial?I.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||k),z=V&&V.mapping===Dc?V.image.height:null,W=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let K=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Q=K!==void 0?K.length:0,ie=0;E.morphAttributes.position!==void 0&&(ie=1),E.morphAttributes.normal!==void 0&&(ie=2),E.morphAttributes.color!==void 0&&(ie=3);let q,j,ne,ee;if(W){let Dn=Fi[W];q=Dn.vertexShader,j=Dn.fragmentShader}else q=_.vertexShader,j=_.fragmentShader,l.update(_),ne=l.getVertexShaderID(_),ee=l.getFragmentShaderID(_);let H=n.getRenderTarget(),le=U.isInstancedMesh===!0,ue=U.isBatchedMesh===!0,_e=!!_.map,$e=!!_.matcap,X=!!V,sn=!!_.aoMap,Ne=!!_.lightMap,He=!!_.bumpMap,Te=!!_.normalMap,zt=!!_.displacementMap,Qe=!!_.emissiveMap,P=!!_.metalnessMap,M=!!_.roughnessMap,Y=_.anisotropy>0,ce=_.clearcoat>0,oe=_.iridescence>0,de=_.sheen>0,Ce=_.transmission>0,be=Y&&!!_.anisotropyMap,Me=ce&&!!_.clearcoatMap,Ue=ce&&!!_.clearcoatNormalMap,et=ce&&!!_.clearcoatRoughnessMap,ae=oe&&!!_.iridescenceMap,bt=oe&&!!_.iridescenceThicknessMap,ot=de&&!!_.sheenColorMap,We=de&&!!_.sheenRoughnessMap,De=!!_.specularMap,Ae=!!_.specularColorMap,Ze=!!_.specularIntensityMap,xt=Ce&&!!_.transmissionMap,$t=Ce&&!!_.thicknessMap,it=!!_.gradientMap,he=!!_.alphaMap,B=_.alphaTest>0,ve=!!_.alphaHash,xe=!!_.extensions,Fe=!!E.attributes.uv1,ke=!!E.attributes.uv2,Rt=!!E.attributes.uv3,Ct=Ws;return _.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ct=n.toneMapping),{isWebGL2:d,shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:j,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ue,instancing:le,instancingColor:le&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:dn,map:_e,matcap:$e,envMap:X,envMapMode:X&&V.mapping,envMapCubeUVHeight:z,aoMap:sn,lightMap:Ne,bumpMap:He,normalMap:Te,displacementMap:h&&zt,emissiveMap:Qe,normalMapObjectSpace:Te&&_.normalMapType===Cx,normalMapTangentSpace:Te&&_.normalMapType===Sh,metalnessMap:P,roughnessMap:M,anisotropy:Y,anisotropyMap:be,clearcoat:ce,clearcoatMap:Me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:et,iridescence:oe,iridescenceMap:ae,iridescenceThicknessMap:bt,sheen:de,sheenColorMap:ot,sheenRoughnessMap:We,specularMap:De,specularColorMap:Ae,specularIntensityMap:Ze,transmission:Ce,transmissionMap:xt,thicknessMap:$t,gradientMap:it,opaque:_.transparent===!1&&_.blending===Ma,alphaMap:he,alphaTest:B,alphaHash:ve,combine:_.combine,mapUv:_e&&y(_.map.channel),aoMapUv:sn&&y(_.aoMap.channel),lightMapUv:Ne&&y(_.lightMap.channel),bumpMapUv:He&&y(_.bumpMap.channel),normalMapUv:Te&&y(_.normalMap.channel),displacementMapUv:zt&&y(_.displacementMap.channel),emissiveMapUv:Qe&&y(_.emissiveMap.channel),metalnessMapUv:P&&y(_.metalnessMap.channel),roughnessMapUv:M&&y(_.roughnessMap.channel),anisotropyMapUv:be&&y(_.anisotropyMap.channel),clearcoatMapUv:Me&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:We&&y(_.sheenRoughnessMap.channel),specularMapUv:De&&y(_.specularMap.channel),specularColorMapUv:Ae&&y(_.specularColorMap.channel),specularIntensityMapUv:Ze&&y(_.specularIntensityMap.channel),transmissionMapUv:xt&&y(_.transmissionMap.channel),thicknessMapUv:$t&&y(_.thicknessMap.channel),alphaMapUv:he&&y(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Te||Y),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:ke,vertexUv3s:Rt,pointsUvs:U.isPoints===!0&&!!E.attributes.uv&&(_e||he),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,useLegacyLights:n._useLegacyLights,decodeVideoTexture:_e&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===kt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fn,flipSided:_.side===Xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:xe&&_.extensions.derivatives===!0,extensionFragDepth:xe&&_.extensions.fragDepth===!0,extensionDrawBuffers:xe&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(x(b,_),v(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function w(_){let b=g[_.type],N;if(b){let I=Fi[b];N=pb.clone(I.uniforms)}else N=_.uniforms;return N}function A(_,b){let N;for(let I=0,U=c.length;I<U;I++){let L=c[I];if(L.cacheKey===b){N=L,++N.usedTimes;break}}return N===void 0&&(N=new wM(n,b,_,r),c.push(N)),N}function T(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),_.destroy()}}function R(_){l.remove(_)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:F}}function AM(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function EM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,h,f,g,y,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=p),e++,m}function o(u,h,f,g,y,p){let m=a(u,h,f,g,y,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,h,f,g,y,p){let m=a(u,h,f,g,y,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,h){t.length>1&&t.sort(u||EM),i.length>1&&i.sort(h||gg),s.length>1&&s.sort(h||gg)}function d(){for(let u=e,h=n.length;u<h;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function TM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new yg,n.set(i,[a])):s>=r.length?(a=new yg,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function RM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Pe};break;case"SpotLight":t={position:new D,direction:new D,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function CM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var LM=0;function PM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IM(n,e){let t=new RM,i=CM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new D);let r=new D,a=new Ee,o=new Ee;function l(d,u){let h=0,f=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let y=0,p=0,m=0,x=0,v=0,w=0,A=0,T=0,R=0,F=0,_=0;d.sort(PM);let b=u===!0?Math.PI:1;for(let I=0,U=d.length;I<U;I++){let L=d[I],E=L.color,k=L.intensity,V=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=E.r*k*b,f+=E.g*k*b,g+=E.b*k*b;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],k);_++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let K=L.shadow,Q=i.get(L);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=z,s.directionalShadowMatrix[y]=L.shadow.matrix,w++}s.directional[y]=W,y++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(E).multiplyScalar(k*b),W.distance=V,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[m]=W;let K=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&F++),s.spotLightMatrix[m]=K.matrix,L.castShadow){let Q=i.get(L);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,s.spotShadow[m]=Q,s.spotShadowMap[m]=z,T++}m++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(E).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=W,x++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),W.distance=L.distance,W.decay=L.decay,L.castShadow){let K=L.shadow,Q=i.get(L);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=z,s.pointShadowMatrix[p]=L.shadow.matrix,A++}s.point[p]=W,p++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(k*b),W.groundColor.copy(L.groundColor).multiplyScalar(k*b),s.hemi[v]=W,v++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==y||N.pointLength!==p||N.spotLength!==m||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==w||N.numPointShadows!==A||N.numSpotShadows!==T||N.numSpotMaps!==R||N.numLightProbes!==_)&&(s.directional.length=y,s.spot.length=m,s.rectArea.length=x,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=T+R-F,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=_,N.directionalLength=y,N.pointLength=p,N.spotLength=m,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=w,N.numPointShadows=A,N.numSpotShadows=T,N.numSpotMaps=R,N.numLightProbes=_,s.version=LM++)}function c(d,u){let h=0,f=0,g=0,y=0,p=0,m=u.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){let w=d[x];if(w.isDirectionalLight){let A=s.directional[h];A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(w.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),g++}else if(w.isRectAreaLight){let A=s.rectArea[y];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(w.isPointLight){let A=s.point[f];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let A=s.hemi[p];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function vg(n,e){let t=new IM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function NM(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new vg(n,e),t.set(r,[l])):a>=o.length?(l=new vg(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var th=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nh=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
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
}`;function OM(n,e,t){let i=new Ao,s=new je,r=new je,a=new Mt,o=new th({depthPacking:Rx}),l=new nh,c={},d=t.maxTextureSize,u={[zi]:Xn,[Xn]:zi,[Fn]:Fn},h=new gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:DM,fragmentShader:kM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new zn;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let m=this.type;this.render=function(T,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let _=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Gs),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=m!==hs&&this.type===hs,L=m===hs&&this.type!==hs;for(let E=0,k=T.length;E<k;E++){let V=T[E],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let W=z.getFrameExtents();if(s.multiply(W),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/W.x),s.x=r.x*W.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/W.y),s.y=r.y*W.y,z.mapSize.y=r.y)),z.map===null||U===!0||L===!0){let Q=this.type!==hs?{minFilter:cn,magFilter:cn}:{};z.map!==null&&z.map.dispose(),z.map=new ms(s.x,s.y,Q),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let K=z.getViewportCount();for(let Q=0;Q<K;Q++){let ie=z.getViewport(Q);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),I.viewport(a),z.updateMatrices(V,Q),i=z.getFrustum(),w(R,F,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===hs&&x(z,F),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(_,b,N)};function x(T,R){let F=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ms(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,F,h,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,F,f,y,null)}function v(T,R,F,_){let b=null,N=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)b=N;else if(b=F.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let I=b.uuid,U=R.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let E=L[U];E===void 0&&(E=b.clone(),L[U]=E,R.addEventListener("dispose",A)),b=E}if(b.visible=R.visible,b.wireframe=R.wireframe,_===hs?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let I=n.properties.get(b);I.light=F}return b}function w(T,R,F,_,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===hs)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let U=e.update(T),L=T.material;if(Array.isArray(L)){let E=U.groups;for(let k=0,V=E.length;k<V;k++){let z=E[k],W=L[z.materialIndex];if(W&&W.visible){let K=v(T,W,_,b);T.onBeforeShadow(n,T,R,F,U,K,z),n.renderBufferDirect(F,null,U,K,T,z),T.onAfterShadow(n,T,R,F,U,K,z)}}}else if(L.visible){let E=v(T,L,_,b);T.onBeforeShadow(n,T,R,F,U,E,null),n.renderBufferDirect(F,null,U,E,T,null),T.onAfterShadow(n,T,R,F,U,E,null)}}let I=T.children;for(let U=0,L=I.length;U<L;U++)w(I[U],R,F,_,b)}function A(T){T.target.removeEventListener("dispose",A);for(let F in c){let _=c[F],b=T.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function UM(n,e,t){let i=t.isWebGL2;function s(){let B=!1,ve=new Mt,xe=null,Fe=new Mt(0,0,0,0);return{setMask:function(ke){xe!==ke&&!B&&(n.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){B=ke},setClear:function(ke,Rt,Ct,mn,Dn){Dn===!0&&(ke*=mn,Rt*=mn,Ct*=mn),ve.set(ke,Rt,Ct,mn),Fe.equals(ve)===!1&&(n.clearColor(ke,Rt,Ct,mn),Fe.copy(ve))},reset:function(){B=!1,xe=null,Fe.set(-1,0,0,0)}}}function r(){let B=!1,ve=null,xe=null,Fe=null;return{setTest:function(ke){ke?ue(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ke){ve!==ke&&!B&&(n.depthMask(ke),ve=ke)},setFunc:function(ke){if(xe!==ke){switch(ke){case nx:n.depthFunc(n.NEVER);break;case ix:n.depthFunc(n.ALWAYS);break;case sx:n.depthFunc(n.LESS);break;case ic:n.depthFunc(n.LEQUAL);break;case rx:n.depthFunc(n.EQUAL);break;case ax:n.depthFunc(n.GEQUAL);break;case ox:n.depthFunc(n.GREATER);break;case lx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ke}},setLocked:function(ke){B=ke},setClear:function(ke){Fe!==ke&&(n.clearDepth(ke),Fe=ke)},reset:function(){B=!1,ve=null,xe=null,Fe=null}}}function a(){let B=!1,ve=null,xe=null,Fe=null,ke=null,Rt=null,Ct=null,mn=null,Dn=null;return{setTest:function(Lt){B||(Lt?ue(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Lt){ve!==Lt&&!B&&(n.stencilMask(Lt),ve=Lt)},setFunc:function(Lt,kn,Ui){(xe!==Lt||Fe!==kn||ke!==Ui)&&(n.stencilFunc(Lt,kn,Ui),xe=Lt,Fe=kn,ke=Ui)},setOp:function(Lt,kn,Ui){(Rt!==Lt||Ct!==kn||mn!==Ui)&&(n.stencilOp(Lt,kn,Ui),Rt=Lt,Ct=kn,mn=Ui)},setLocked:function(Lt){B=Lt},setClear:function(Lt){Dn!==Lt&&(n.clearStencil(Lt),Dn=Lt)},reset:function(){B=!1,ve=null,xe=null,Fe=null,ke=null,Rt=null,Ct=null,mn=null,Dn=null}}}let o=new s,l=new r,c=new a,d=new WeakMap,u=new WeakMap,h={},f={},g=new WeakMap,y=[],p=null,m=!1,x=null,v=null,w=null,A=null,T=null,R=null,F=null,_=new Pe(0,0,0),b=0,N=!1,I=null,U=null,L=null,E=null,k=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=W>=2);let Q=null,ie={},q=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),ne=new Mt().fromArray(q),ee=new Mt().fromArray(j);function H(B,ve,xe,Fe){let ke=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(B,Rt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<xe;Ct++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(ve+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Rt}let le={};le[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(n.DEPTH_TEST),l.setFunc(ic),Qe(!1),P(Jf),ue(n.CULL_FACE),Te(Gs);function ue(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function _e(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function $e(B,ve){return f[B]!==ve?(n.bindFramebuffer(B,ve),f[B]=ve,i&&(B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function X(B,ve){let xe=y,Fe=!1;if(B)if(xe=g.get(ve),xe===void 0&&(xe=[],g.set(ve,xe)),B.isWebGLMultipleRenderTargets){let ke=B.texture;if(xe.length!==ke.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Ct=ke.length;Rt<Ct;Rt++)xe[Rt]=n.COLOR_ATTACHMENT0+Rt;xe.length=ke.length,Fe=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,Fe=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,Fe=!0);Fe&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function sn(B){return p!==B?(n.useProgram(B),p=B,!0):!1}let Ne={[_r]:n.FUNC_ADD,[Hv]:n.FUNC_SUBTRACT,[Vv]:n.FUNC_REVERSE_SUBTRACT};if(i)Ne[nm]=n.MIN,Ne[im]=n.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Ne[nm]=B.MIN_EXT,Ne[im]=B.MAX_EXT)}let He={[Gv]:n.ZERO,[Wv]:n.ONE,[qv]:n.SRC_COLOR,[Fu]:n.SRC_ALPHA,[Kv]:n.SRC_ALPHA_SATURATE,[jv]:n.DST_COLOR,[$v]:n.DST_ALPHA,[Xv]:n.ONE_MINUS_SRC_COLOR,[Bu]:n.ONE_MINUS_SRC_ALPHA,[Zv]:n.ONE_MINUS_DST_COLOR,[Yv]:n.ONE_MINUS_DST_ALPHA,[Jv]:n.CONSTANT_COLOR,[Qv]:n.ONE_MINUS_CONSTANT_COLOR,[ex]:n.CONSTANT_ALPHA,[tx]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(B,ve,xe,Fe,ke,Rt,Ct,mn,Dn,Lt){if(B===Gs){m===!0&&(_e(n.BLEND),m=!1);return}if(m===!1&&(ue(n.BLEND),m=!0),B!==zv){if(B!==x||Lt!==N){if((v!==_r||T!==_r)&&(n.blendEquation(n.FUNC_ADD),v=_r,T=_r),Lt)switch(B){case Ma:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qf:n.blendFunc(n.ONE,n.ONE);break;case em:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ma:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case em:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,A=null,R=null,F=null,_.set(0,0,0),b=0,x=B,N=Lt}return}ke=ke||ve,Rt=Rt||xe,Ct=Ct||Fe,(ve!==v||ke!==T)&&(n.blendEquationSeparate(Ne[ve],Ne[ke]),v=ve,T=ke),(xe!==w||Fe!==A||Rt!==R||Ct!==F)&&(n.blendFuncSeparate(He[xe],He[Fe],He[Rt],He[Ct]),w=xe,A=Fe,R=Rt,F=Ct),(mn.equals(_)===!1||Dn!==b)&&(n.blendColor(mn.r,mn.g,mn.b,Dn),_.copy(mn),b=Dn),x=B,N=!1}function zt(B,ve){B.side===Fn?_e(n.CULL_FACE):ue(n.CULL_FACE);let xe=B.side===Xn;ve&&(xe=!xe),Qe(xe),B.blending===Ma&&B.transparent===!1?Te(Gs):Te(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);let Fe=B.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Y(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(B){I!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),I=B)}function P(B){B!==Uv?(ue(n.CULL_FACE),B!==U&&(B===Jf?n.cullFace(n.BACK):B===Fv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),U=B}function M(B){B!==L&&(z&&n.lineWidth(B),L=B)}function Y(B,ve,xe){B?(ue(n.POLYGON_OFFSET_FILL),(E!==ve||k!==xe)&&(n.polygonOffset(ve,xe),E=ve,k=xe)):_e(n.POLYGON_OFFSET_FILL)}function ce(B){B?ue(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function oe(B){B===void 0&&(B=n.TEXTURE0+V-1),Q!==B&&(n.activeTexture(B),Q=B)}function de(B,ve,xe){xe===void 0&&(Q===null?xe=n.TEXTURE0+V-1:xe=Q);let Fe=ie[xe];Fe===void 0&&(Fe={type:void 0,texture:void 0},ie[xe]=Fe),(Fe.type!==B||Fe.texture!==ve)&&(Q!==xe&&(n.activeTexture(xe),Q=xe),n.bindTexture(B,ve||le[B]),Fe.type=B,Fe.texture=ve)}function Ce(){let B=ie[Q];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function be(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(B){ne.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ne.copy(B))}function xt(B){ee.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ee.copy(B))}function $t(B,ve){let xe=u.get(ve);xe===void 0&&(xe=new WeakMap,u.set(ve,xe));let Fe=xe.get(B);Fe===void 0&&(Fe=n.getUniformBlockIndex(ve,B.name),xe.set(B,Fe))}function it(B,ve){let Fe=u.get(ve).get(B);d.get(ve)!==Fe&&(n.uniformBlockBinding(ve,Fe,B.__bindingPointIndex),d.set(ve,Fe))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,ie={},f={},g=new WeakMap,y=[],p=null,m=!1,x=null,v=null,w=null,A=null,T=null,R=null,F=null,_=new Pe(0,0,0),b=0,N=!1,I=null,U=null,L=null,E=null,k=null,ne.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ue,disable:_e,bindFramebuffer:$e,drawBuffers:X,useProgram:sn,setBlending:Te,setMaterial:zt,setFlipSided:Qe,setCullFace:P,setLineWidth:M,setPolygonOffset:Y,setScissorTest:ce,activeTexture:oe,bindTexture:de,unbindTexture:Ce,compressedTexImage2D:be,compressedTexImage3D:Me,texImage2D:De,texImage3D:Ae,updateUBOMapping:$t,uniformBlockBinding:it,texStorage2D:ot,texStorage3D:We,texSubImage2D:Ue,texSubImage3D:et,compressedTexSubImage2D:ae,compressedTexSubImage3D:bt,scissor:Ze,viewport:xt,reset:he}}function FM(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return f?new OffscreenCanvas(P,M):So("canvas")}function y(P,M,Y,ce){let oe=1;if((P.width>ce||P.height>ce)&&(oe=ce/Math.max(P.width,P.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let de=M?cc:Math.floor,Ce=de(oe*P.width),be=de(oe*P.height);u===void 0&&(u=g(Ce,be));let Me=Y?g(Ce,be):u;return Me.width=Ce,Me.height=be,Me.getContext("2d").drawImage(P,0,0,Ce,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ce+"x"+be+")."),Me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return Wu(P.width)&&Wu(P.height)}function m(P){return o?!1:P.wrapS!==si||P.wrapT!==si||P.minFilter!==cn&&P.minFilter!==an}function x(P,M){return P.generateMipmaps&&M&&P.minFilter!==cn&&P.minFilter!==an}function v(P){n.generateMipmap(P)}function w(P,M,Y,ce,oe=!1){if(o===!1)return M;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=M;if(M===n.RED&&(Y===n.FLOAT&&(de=n.R32F),Y===n.HALF_FLOAT&&(de=n.R16F),Y===n.UNSIGNED_BYTE&&(de=n.R8)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.R8UI),Y===n.UNSIGNED_SHORT&&(de=n.R16UI),Y===n.UNSIGNED_INT&&(de=n.R32UI),Y===n.BYTE&&(de=n.R8I),Y===n.SHORT&&(de=n.R16I),Y===n.INT&&(de=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(de=n.RG32F),Y===n.HALF_FLOAT&&(de=n.RG16F),Y===n.UNSIGNED_BYTE&&(de=n.RG8)),M===n.RGBA){let Ce=oe?rc:mt.getTransfer(ce);Y===n.FLOAT&&(de=n.RGBA32F),Y===n.HALF_FLOAT&&(de=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(de=Ce===kt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(P,M,Y){return x(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function T(P){return P===cn||P===sc||P===go?n.NEAREST:n.LINEAR}function R(P){let M=P.target;M.removeEventListener("dispose",R),_(M),M.isVideoTexture&&d.delete(M)}function F(P){let M=P.target;M.removeEventListener("dispose",F),N(M)}function _(P){let M=i.get(P);if(M.__webglInit===void 0)return;let Y=P.source,ce=h.get(Y);if(ce){let oe=ce[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(P),Object.keys(ce).length===0&&h.delete(Y)}i.remove(P)}function b(P){let M=i.get(P);n.deleteTexture(M.__webglTexture);let Y=P.source,ce=h.get(Y);delete ce[M.__cacheKey],a.memory.textures--}function N(P){let M=P.texture,Y=i.get(P),ce=i.get(M);if(ce.__webglTexture!==void 0&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(Y.__webglFramebuffer[oe]))for(let de=0;de<Y.__webglFramebuffer[oe].length;de++)n.deleteFramebuffer(Y.__webglFramebuffer[oe][de]);else n.deleteFramebuffer(Y.__webglFramebuffer[oe]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[oe])}else{if(Array.isArray(Y.__webglFramebuffer))for(let oe=0;oe<Y.__webglFramebuffer.length;oe++)n.deleteFramebuffer(Y.__webglFramebuffer[oe]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let oe=0;oe<Y.__webglColorRenderbuffer.length;oe++)Y.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[oe]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let oe=0,de=M.length;oe<de;oe++){let Ce=i.get(M[oe]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),a.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(P)}let I=0;function U(){I=0}function L(){let P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function E(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function k(P,M){let Y=i.get(P);if(P.isVideoTexture&&zt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){let ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Y,P,M);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function V(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function z(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function W(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ee(Y,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let K={[Er]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},Q={[cn]:n.NEAREST,[sc]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[_h]:n.LINEAR_MIPMAP_NEAREST,[Xs]:n.LINEAR_MIPMAP_LINEAR},ie={[Lx]:n.NEVER,[Ox]:n.ALWAYS,[Px]:n.LESS,[Zg]:n.LEQUAL,[Ix]:n.EQUAL,[kx]:n.GEQUAL,[Nx]:n.GREATER,[Dx]:n.NOTEQUAL};function q(P,M,Y){if(Y?(n.texParameteri(P,n.TEXTURE_WRAP_S,K[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,K[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,K[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Q[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Q[M.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==si||M.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,T(M.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==cn&&M.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ce=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===cn||M.minFilter!==go&&M.minFilter!==Xs||M.type===ps&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===wo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(P,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function j(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));let ce=M.source,oe=h.get(ce);oe===void 0&&(oe={},h.set(ce,oe));let de=E(M);if(de!==P.__cacheKey){oe[de]===void 0&&(oe[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),oe[de].usedTimes++;let Ce=oe[P.__cacheKey];Ce!==void 0&&(oe[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(M)),P.__cacheKey=de,P.__webglTexture=oe[de].texture}return Y}function ne(P,M,Y){let ce=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=n.TEXTURE_3D);let oe=j(P,M),de=M.source;t.bindTexture(ce,P.__webglTexture,n.TEXTURE0+Y);let Ce=i.get(de);if(de.version!==Ce.__version||oe===!0){t.activeTexture(n.TEXTURE0+Y);let be=mt.getPrimaries(mt.workingColorSpace),Me=M.colorSpace===mi?null:mt.getPrimaries(M.colorSpace),Ue=M.colorSpace===mi||be===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let et=m(M)&&p(M.image)===!1,ae=y(M.image,et,!1,s.maxTextureSize);ae=Qe(M,ae);let bt=p(ae)||o,ot=r.convert(M.format,M.colorSpace),We=r.convert(M.type),De=w(M.internalFormat,ot,We,M.colorSpace,M.isVideoTexture);q(ce,M,bt);let Ae,Ze=M.mipmaps,xt=o&&M.isVideoTexture!==!0&&De!==$g,$t=Ce.__version===void 0||oe===!0,it=A(M,ae,bt);if(M.isDepthTexture)De=n.DEPTH_COMPONENT,o?M.type===ps?De=n.DEPTH_COMPONENT32F:M.type===Hs?De=n.DEPTH_COMPONENT24:M.type===Sr?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:M.type===ps&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Mr&&De===n.DEPTH_COMPONENT&&M.type!==wh&&M.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Hs,We=r.convert(M.type)),M.format===Ca&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,M.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Sr,We=r.convert(M.type))),$t&&(xt?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,ot,We,null));else if(M.isDataTexture)if(Ze.length>0&&bt){xt&&$t&&t.texStorage2D(n.TEXTURE_2D,it,De,Ze[0].width,Ze[0].height);for(let he=0,B=Ze.length;he<B;he++)Ae=Ze[he],xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,ot,We,Ae.data):t.texImage2D(n.TEXTURE_2D,he,De,Ae.width,Ae.height,0,ot,We,Ae.data);M.generateMipmaps=!1}else xt?($t&&t.texStorage2D(n.TEXTURE_2D,it,De,ae.width,ae.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ot,We,ae.data)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,ot,We,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){xt&&$t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,De,Ze[0].width,Ze[0].height,ae.depth);for(let he=0,B=Ze.length;he<B;he++)Ae=Ze[he],M.format!==fi?ot!==null?xt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ae.width,Ae.height,ae.depth,ot,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,De,Ae.width,Ae.height,ae.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ae.width,Ae.height,ae.depth,ot,We,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,De,Ae.width,Ae.height,ae.depth,0,ot,We,Ae.data)}else{xt&&$t&&t.texStorage2D(n.TEXTURE_2D,it,De,Ze[0].width,Ze[0].height);for(let he=0,B=Ze.length;he<B;he++)Ae=Ze[he],M.format!==fi?ot!==null?xt?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,ot,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,he,De,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,ot,We,Ae.data):t.texImage2D(n.TEXTURE_2D,he,De,Ae.width,Ae.height,0,ot,We,Ae.data)}else if(M.isDataArrayTexture)xt?($t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,De,ae.width,ae.height,ae.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ot,We,ae.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,ot,We,ae.data);else if(M.isData3DTexture)xt?($t&&t.texStorage3D(n.TEXTURE_3D,it,De,ae.width,ae.height,ae.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ot,We,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,ot,We,ae.data);else if(M.isFramebufferTexture){if($t)if(xt)t.texStorage2D(n.TEXTURE_2D,it,De,ae.width,ae.height);else{let he=ae.width,B=ae.height;for(let ve=0;ve<it;ve++)t.texImage2D(n.TEXTURE_2D,ve,De,he,B,0,ot,We,null),he>>=1,B>>=1}}else if(Ze.length>0&&bt){xt&&$t&&t.texStorage2D(n.TEXTURE_2D,it,De,Ze[0].width,Ze[0].height);for(let he=0,B=Ze.length;he<B;he++)Ae=Ze[he],xt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,ot,We,Ae):t.texImage2D(n.TEXTURE_2D,he,De,ot,We,Ae);M.generateMipmaps=!1}else xt?($t&&t.texStorage2D(n.TEXTURE_2D,it,De,ae.width,ae.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,We,ae)):t.texImage2D(n.TEXTURE_2D,0,De,ot,We,ae);x(M,bt)&&v(ce),Ce.__version=de.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ee(P,M,Y){if(M.image.length!==6)return;let ce=j(P,M),oe=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);let de=i.get(oe);if(oe.version!==de.__version||ce===!0){t.activeTexture(n.TEXTURE0+Y);let Ce=mt.getPrimaries(mt.workingColorSpace),be=M.colorSpace===mi?null:mt.getPrimaries(M.colorSpace),Me=M.colorSpace===mi||Ce===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let he=0;he<6;he++)!Ue&&!et?ae[he]=y(M.image[he],!1,!0,s.maxCubemapSize):ae[he]=et?M.image[he].image:M.image[he],ae[he]=Qe(M,ae[he]);let bt=ae[0],ot=p(bt)||o,We=r.convert(M.format,M.colorSpace),De=r.convert(M.type),Ae=w(M.internalFormat,We,De,M.colorSpace),Ze=o&&M.isVideoTexture!==!0,xt=de.__version===void 0||ce===!0,$t=A(M,bt,ot);q(n.TEXTURE_CUBE_MAP,M,ot);let it;if(Ue){Ze&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$t,Ae,bt.width,bt.height);for(let he=0;he<6;he++){it=ae[he].mipmaps;for(let B=0;B<it.length;B++){let ve=it[B];M.format!==fi?We!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,B,0,0,ve.width,ve.height,We,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,B,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,B,0,0,ve.width,ve.height,We,De,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,B,Ae,ve.width,ve.height,0,We,De,ve.data)}}}else{it=M.mipmaps,Ze&&xt&&(it.length>0&&$t++,t.texStorage2D(n.TEXTURE_CUBE_MAP,$t,Ae,ae[0].width,ae[0].height));for(let he=0;he<6;he++)if(et){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ae[he].width,ae[he].height,We,De,ae[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ae,ae[he].width,ae[he].height,0,We,De,ae[he].data);for(let B=0;B<it.length;B++){let xe=it[B].image[he].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,B+1,0,0,xe.width,xe.height,We,De,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,B+1,Ae,xe.width,xe.height,0,We,De,xe.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,De,ae[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ae,We,De,ae[he]);for(let B=0;B<it.length;B++){let ve=it[B];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,B+1,0,0,We,De,ve.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,B+1,Ae,We,De,ve.image[he])}}}x(M,ot)&&v(n.TEXTURE_CUBE_MAP),de.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function H(P,M,Y,ce,oe,de){let Ce=r.convert(Y.format,Y.colorSpace),be=r.convert(Y.type),Me=w(Y.internalFormat,Ce,be,Y.colorSpace);if(!i.get(M).__hasExternalTextures){let et=Math.max(1,M.width>>de),ae=Math.max(1,M.height>>de);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,de,Me,et,ae,M.depth,0,Ce,be,null):t.texImage2D(oe,de,Me,et,ae,0,Ce,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Te(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,oe,i.get(Y).__webglTexture,0,He(M)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,oe,i.get(Y).__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(P,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer&&!M.stencilBuffer){let ce=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||Te(M)){let oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ps?ce=n.DEPTH_COMPONENT32F:oe.type===Hs&&(ce=n.DEPTH_COMPONENT24));let de=He(M);Te(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,ce,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ce,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(M.depthBuffer&&M.stencilBuffer){let ce=He(M);Y&&Te(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,M.width,M.height):Te(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{let ce=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ce.length;oe++){let de=ce[oe],Ce=r.convert(de.format,de.colorSpace),be=r.convert(de.type),Me=w(de.internalFormat,Ce,be,de.colorSpace),Ue=He(M);Y&&Te(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Me,M.width,M.height):Te(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,Me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);let ce=i.get(M.depthTexture).__webglTexture,oe=He(M);if(M.depthTexture.format===Mr)Te(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(M.depthTexture.format===Ca)Te(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function _e(P){let M=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,P)}else if(Y){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]=n.createRenderbuffer(),le(M.__webglDepthbuffer[ce],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),le(M.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(P,M,Y){let ce=i.get(P);M!==void 0&&H(ce.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&_e(P)}function X(P){let M=P.texture,Y=i.get(P),ce=i.get(M);P.addEventListener("dispose",F),P.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=M.version,a.memory.textures++);let oe=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Ce=p(P)||o;if(oe){Y.__webglFramebuffer=[];for(let be=0;be<6;be++)if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[be]=[];for(let Me=0;Me<M.mipmaps.length;Me++)Y.__webglFramebuffer[be][Me]=n.createFramebuffer()}else Y.__webglFramebuffer[be]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let be=0;be<M.mipmaps.length;be++)Y.__webglFramebuffer[be]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(de)if(s.drawBuffers){let be=P.texture;for(let Me=0,Ue=be.length;Me<Ue;Me++){let et=i.get(be[Me]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Te(P)===!1){let be=de?M:[M];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Me=0;Me<be.length;Me++){let Ue=be[Me];Y.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Me]);let et=r.convert(Ue.format,Ue.colorSpace),ae=r.convert(Ue.type),bt=w(Ue.internalFormat,et,ae,Ue.colorSpace,P.isXRRenderTarget===!0),ot=He(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,bt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),le(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),q(n.TEXTURE_CUBE_MAP,M,Ce);for(let be=0;be<6;be++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)H(Y.__webglFramebuffer[be][Me],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Me);else H(Y.__webglFramebuffer[be],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(M,Ce)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){let be=P.texture;for(let Me=0,Ue=be.length;Me<Ue;Me++){let et=be[Me],ae=i.get(et);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),q(n.TEXTURE_2D,et,Ce),H(Y.__webglFramebuffer,P,et,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),x(et,Ce)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?be=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,ce.__webglTexture),q(be,M,Ce),o&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)H(Y.__webglFramebuffer[Me],P,M,n.COLOR_ATTACHMENT0,be,Me);else H(Y.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,be,0);x(M,Ce)&&v(be),t.unbindTexture()}P.depthBuffer&&_e(P)}function sn(P){let M=p(P)||o,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ce=0,oe=Y.length;ce<oe;ce++){let de=Y[ce];if(x(de,M)){let Ce=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(de).__webglTexture;t.bindTexture(Ce,be),v(Ce),t.unbindTexture()}}}function Ne(P){if(o&&P.samples>0&&Te(P)===!1){let M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,ce=P.height,oe=n.COLOR_BUFFER_BIT,de=[],Ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(P),Me=P.isWebGLMultipleRenderTargets===!0;if(Me)for(let Ue=0;Ue<M.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){de.push(n.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&de.push(Ce);let et=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(et===!1&&(P.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ue]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Me){let ae=i.get(M[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,Y,ce,0,0,Y,ce,oe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ue=0;Ue<M.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ue]);let et=i.get(M[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function He(P){return Math.min(s.maxSamples,P.samples)}function Te(P){let M=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function zt(P){let M=a.render.frame;d.get(P)!==M&&(d.set(P,M),P.update())}function Qe(P,M){let Y=P.colorSpace,ce=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Gu||Y!==dn&&Y!==mi&&(mt.getTransfer(Y)===kt?o===!1?e.has("EXT_sRGB")===!0&&ce===fi?(P.format=Gu,P.minFilter=an,P.generateMipmaps=!1):M=dc.sRGBToLinear(M):(ce!==fi||oe!==qs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=$e,this.setupRenderTarget=X,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Te}function BM(n,e,t){let i=t.isWebGL2;function s(r,a=mi){let o,l=mt.getTransfer(a);if(r===qs)return n.UNSIGNED_BYTE;if(r===Vg)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Gg)return n.UNSIGNED_SHORT_5_5_5_1;if(r===vx)return n.BYTE;if(r===xx)return n.SHORT;if(r===wh)return n.UNSIGNED_SHORT;if(r===Hg)return n.INT;if(r===Hs)return n.UNSIGNED_INT;if(r===ps)return n.FLOAT;if(r===wo)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bx)return n.ALPHA;if(r===fi)return n.RGBA;if(r===_x)return n.LUMINANCE;if(r===wx)return n.LUMINANCE_ALPHA;if(r===Mr)return n.DEPTH_COMPONENT;if(r===Ca)return n.DEPTH_STENCIL;if(r===Gu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Sx)return n.RED;if(r===Wg)return n.RED_INTEGER;if(r===Mx)return n.RG;if(r===qg)return n.RG_INTEGER;if(r===Xg)return n.RGBA_INTEGER;if(r===ru||r===au||r===ou||r===lu)if(l===kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ru)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ru)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===au)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ou)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rm||r===am||r===om||r===lm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===am)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===om)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$g)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===cm||r===dm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===cm)return l===kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===dm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===um||r===hm||r===pm||r===fm||r===mm||r===gm||r===ym||r===vm||r===xm||r===bm||r===_m||r===wm||r===Sm||r===Mm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===um)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ym)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_m)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mm)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cu||r===Am||r===Em)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===cu)return l===kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Am)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Em)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ax||r===Tm||r===Rm||r===Cm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===cu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Tm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ih=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Tn=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},zM={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sh=class extends $s{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null,y=t.getContextAttributes(),p=null,m=null,x=[],v=[],w=new je,A=null,T=new Gt;T.layers.enable(1),T.viewport=new Mt;let R=new Gt;R.layers.enable(2),R.viewport=new Mt;let F=[T,R],_=new ih;_.layers.enable(1),_.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=x[q];return j===void 0&&(j=new bo,x[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=x[q];return j===void 0&&(j=new bo,x[q]=j),j.getGripSpace()},this.getHand=function(q){let j=x[q];return j===void 0&&(j=new bo,x[q]=j),j.getHandSpace()};function I(q){let j=v.indexOf(q.inputSource);if(j===-1)return;let ne=x[j];ne!==void 0&&(ne.update(q.inputSource,q.frame,c||a),ne.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",L);for(let q=0;q<x.length;q++){let j=v[q];j!==null&&(v[q]=null,x[q].disconnect(j))}b=null,N=null,e.setRenderTarget(p),f=null,h=null,u=null,s=null,m=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new ms(f.framebufferWidth,f.framebufferHeight,{format:fi,type:qs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,ne=null,ee=null;y.depth&&(ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?Ca:Mr,ne=y.stencil?Sr:Hs);let H={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(H),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new ms(h.textureWidth,h.textureHeight,{format:fi,type:qs,depthTexture:new vc(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let le=e.properties.get(m);le.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let j=0;j<q.removed.length;j++){let ne=q.removed[j],ee=v.indexOf(ne);ee>=0&&(v[ee]=null,x[ee].disconnect(ne))}for(let j=0;j<q.added.length;j++){let ne=q.added[j],ee=v.indexOf(ne);if(ee===-1){for(let le=0;le<x.length;le++)if(le>=v.length){v.push(ne),ee=le;break}else if(v[le]===null){v[le]=ne,ee=le;break}if(ee===-1)break}let H=x[ee];H&&H.connect(ne)}}let E=new D,k=new D;function V(q,j,ne){E.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);let ee=E.distanceTo(k),H=j.projectionMatrix.elements,le=ne.projectionMatrix.elements,ue=H[14]/(H[10]-1),_e=H[14]/(H[10]+1),$e=(H[9]+1)/H[5],X=(H[9]-1)/H[5],sn=(H[8]-1)/H[0],Ne=(le[8]+1)/le[0],He=ue*sn,Te=ue*Ne,zt=ee/(-sn+Ne),Qe=zt*-sn;j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qe),q.translateZ(zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let P=ue+zt,M=_e+zt,Y=He-Qe,ce=Te+(ee-Qe),oe=$e*_e/M*P,de=X*_e/M*P;q.projectionMatrix.makePerspective(Y,ce,oe,de,P,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function z(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;_.near=R.near=T.near=q.near,_.far=R.far=T.far=q.far,(b!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,N=_.far);let j=q.parent,ne=_.cameras;z(_,j);for(let ee=0;ee<ne.length;ee++)z(ne[ee],j);ne.length===2?V(_,T,R):_.projectionMatrix.copy(T.projectionMatrix),W(q,_,j)};function W(q,j,ne){ne===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ne.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Pa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let K=null;function Q(q,j){if(d=j.getViewerPose(c||a),g=j,d!==null){let ne=d.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ee=!1;ne.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let H=0;H<ne.length;H++){let le=ne[H],ue=null;if(f!==null)ue=f.getViewport(le);else{let $e=u.getViewSubImage(h,le);ue=$e.viewport,H===0&&(e.setRenderTargetTextures(m,$e.colorTexture,h.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(m))}let _e=F[H];_e===void 0&&(_e=new Gt,_e.layers.enable(H),_e.viewport=new Mt,F[H]=_e),_e.matrix.fromArray(le.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(le.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(ue.x,ue.y,ue.width,ue.height),H===0&&(_.matrix.copy(_e.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ee===!0&&_.cameras.push(_e)}}for(let ne=0;ne<x.length;ne++){let ee=v[ne],H=x[ne];ee!==null&&H!==void 0&&H.update(ee,j,c||a)}K&&K(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let ie=new e0;ie.setAnimationLoop(Q),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}};function HM(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Qg(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),d(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VM(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){let w=v.program;i.uniformBlockBinding(x,w)}function c(x,v){let w=s[x.id];w===void 0&&(g(x),w=d(x),s[x.id]=w,x.addEventListener("dispose",p));let A=v.program;i.updateUBOMapping(x,A);let T=e.render.frame;r[x.id]!==T&&(h(x),r[x.id]=T)}function d(x){let v=u();x.__bindingPointIndex=v;let w=n.createBuffer(),A=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let v=s[x.id],w=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,R=w.length;T<R;T++){let F=Array.isArray(w[T])?w[T]:[w[T]];for(let _=0,b=F.length;_<b;_++){let N=F[_];if(f(N,T,_,A)===!0){let I=N.__offset,U=Array.isArray(N.value)?N.value:[N.value],L=0;for(let E=0;E<U.length;E++){let k=U[E],V=y(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,I+L,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,v,w,A){let T=x.value,R=v+"_"+w;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{let F=A[R];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return A[R]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(x){let v=x.uniforms,w=0,A=16;for(let R=0,F=v.length;R<F;R++){let _=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,N=_.length;b<N;b++){let I=_[b],U=Array.isArray(I.value)?I.value:[I.value];for(let L=0,E=U.length;L<E;L++){let k=U[L],V=y(k),z=w%A;z!==0&&A-z<V.boundary&&(w+=A-z),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=V.storage}}}let T=w%A;return T>0&&(w+=A-T),x.__size=w,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){let v=x.target;v.removeEventListener("dispose",p);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Cr=class{constructor(e={}){let{canvas:t=Kx(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Ws,this.toneMappingExposure=1;let v=this,w=!1,A=0,T=0,R=null,F=-1,_=null,b=new Mt,N=new Mt,I=null,U=new Pe(0),L=0,E=t.width,k=t.height,V=1,z=null,W=null,K=new Mt(0,0,E,k),Q=new Mt(0,0,E,k),ie=!1,q=new Ao,j=!1,ne=!1,ee=null,H=new Ee,le=new je,ue=new D,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return R===null?V:1}let X=i;function sn(C,G){for(let Z=0;Z<C.length;Z++){let J=C[Z],$=t.getContext(J,G);if($!==null)return $}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ve,!1),X===null){let G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),X=sn(G,C),X===null)throw sn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ne,He,Te,zt,Qe,P,M,Y,ce,oe,de,Ce,be,Me,Ue,et,ae,bt,ot,We,De,Ae,Ze,xt;function $t(){Ne=new oS(X),He=new tS(X,Ne,e),Ne.init(He),Ae=new BM(X,Ne,He),Te=new UM(X,Ne,He),zt=new dS(X),Qe=new AM,P=new FM(X,Ne,Te,Qe,He,Ae,zt),M=new iS(v),Y=new aS(v),ce=new vb(X,He),Ze=new Qw(X,Ne,ce,He),oe=new lS(X,ce,zt,Ze),de=new fS(X,oe,ce,zt),ot=new pS(X,He,P),et=new nS(Qe),Ce=new MM(v,M,Y,Ne,He,Ze,et),be=new HM(v,Qe),Me=new TM,Ue=new NM(Ne,He),bt=new Jw(v,M,Y,Te,de,h,l),ae=new OM(v,de,He),xt=new VM(X,zt,He,Te),We=new eS(X,Ne,zt,He),De=new cS(X,Ne,zt,He),zt.programs=Ce.programs,v.capabilities=He,v.extensions=Ne,v.properties=Qe,v.renderLists=Me,v.shadowMap=ae,v.state=Te,v.info=zt}$t();let it=new sh(v,X);this.xr=it,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=Ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(E,k,!1))},this.getSize=function(C){return C.set(E,k)},this.setSize=function(C,G,Z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=C,k=G,t.width=Math.floor(C*V),t.height=Math.floor(G*V),Z===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(E*V,k*V).floor()},this.setDrawingBufferSize=function(C,G,Z){E=C,k=G,V=Z,t.width=Math.floor(C*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,G,Z,J){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,G,Z,J),Te.viewport(b.copy(K).multiplyScalar(V).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,G,Z,J){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,G,Z,J),Te.scissor(N.copy(Q).multiplyScalar(V).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){Te.setScissorTest(ie=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(C=!0,G=!0,Z=!0){let J=0;if(C){let $=!1;if(R!==null){let we=R.texture.format;$=we===Xg||we===qg||we===Wg}if($){let we=R.texture.type,Le=we===qs||we===Hs||we===wh||we===Sr||we===Vg||we===Gg,Oe=bt.getClearColor(),Be=bt.getClearAlpha(),tt=Oe.r,qe=Oe.g,Ye=Oe.b;Le?(f[0]=tt,f[1]=qe,f[2]=Ye,f[3]=Be,X.clearBufferuiv(X.COLOR,0,f)):(g[0]=tt,g[1]=qe,g[2]=Ye,g[3]=Be,X.clearBufferiv(X.COLOR,0,g))}else J|=X.COLOR_BUFFER_BIT}G&&(J|=X.DEPTH_BUFFER_BIT),Z&&(J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Me.dispose(),Ue.dispose(),Qe.dispose(),M.dispose(),Y.dispose(),de.dispose(),Ze.dispose(),xt.dispose(),Ce.dispose(),it.dispose(),it.removeEventListener("sessionstart",Dn),it.removeEventListener("sessionend",Lt),ee&&(ee.dispose(),ee=null),kn.stop()};function he(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let C=zt.autoReset,G=ae.enabled,Z=ae.autoUpdate,J=ae.needsUpdate,$=ae.type;$t(),zt.autoReset=C,ae.enabled=G,ae.autoUpdate=Z,ae.needsUpdate=J,ae.type=$}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){let G=C.target;G.removeEventListener("dispose",xe),Fe(G)}function Fe(C){ke(C),Qe.remove(C)}function ke(C){let G=Qe.get(C).programs;G!==void 0&&(G.forEach(function(Z){Ce.releaseProgram(Z)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Z,J,$,we){G===null&&(G=_e);let Le=$.isMesh&&$.matrixWorld.determinant()<0,Oe=Nv(C,G,Z,J,$);Te.setMaterial(J,Le);let Be=Z.index,tt=1;if(J.wireframe===!0){if(Be=oe.getWireframeAttribute(Z),Be===void 0)return;tt=2}let qe=Z.drawRange,Ye=Z.attributes.position,Zt=qe.start*tt,ei=(qe.start+qe.count)*tt;we!==null&&(Zt=Math.max(Zt,we.start*tt),ei=Math.min(ei,(we.start+we.count)*tt)),Be!==null?(Zt=Math.max(Zt,0),ei=Math.min(ei,Be.count)):Ye!=null&&(Zt=Math.max(Zt,0),ei=Math.min(ei,Ye.count));let gn=ei-Zt;if(gn<0||gn===1/0)return;Ze.setup($,J,Oe,Z,Be);let rs,Ht=We;if(Be!==null&&(rs=ce.get(Be),Ht=De,Ht.setIndex(rs)),$.isMesh)J.wireframe===!0?(Te.setLineWidth(J.wireframeLinewidth*$e()),Ht.setMode(X.LINES)):Ht.setMode(X.TRIANGLES);else if($.isLine){let st=J.linewidth;st===void 0&&(st=1),Te.setLineWidth(st*$e()),$.isLineSegments?Ht.setMode(X.LINES):$.isLineLoop?Ht.setMode(X.LINE_LOOP):Ht.setMode(X.LINE_STRIP)}else $.isPoints?Ht.setMode(X.POINTS):$.isSprite&&Ht.setMode(X.TRIANGLES);if($.isBatchedMesh)Ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ht.renderInstances(Zt,gn,$.count);else if(Z.isInstancedBufferGeometry){let st=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,tu=Math.min(Z.instanceCount,st);Ht.renderInstances(Zt,gn,tu)}else Ht.render(Zt,gn)};function Rt(C,G,Z){C.transparent===!0&&C.side===Fn&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Rl(C,G,Z),C.side=zi,C.needsUpdate=!0,Rl(C,G,Z),C.side=Fn):Rl(C,G,Z)}this.compile=function(C,G,Z=null){Z===null&&(Z=C),p=Ue.get(Z),p.init(),x.push(p),Z.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==Z&&C.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);let J=new Set;return C.traverse(function($){let we=$.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){let Oe=we[Le];Rt(Oe,Z,$),J.add(Oe)}else Rt(we,Z,$),J.add(we)}),x.pop(),p=null,J},this.compileAsync=function(C,G,Z=null){let J=this.compile(C,G,Z);return new Promise($=>{function we(){if(J.forEach(function(Le){Qe.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){$(C);return}setTimeout(we,10)}Ne.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ct=null;function mn(C){Ct&&Ct(C)}function Dn(){kn.stop()}function Lt(){kn.start()}let kn=new e0;kn.setAnimationLoop(mn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){Ct=C,it.setAnimationLoop(C),C===null?kn.stop():kn.start()},it.addEventListener("sessionstart",Dn),it.addEventListener("sessionend",Lt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(G),G=it.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,G,R),p=Ue.get(C,x.length),p.init(),x.push(p),H.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),q.setFromProjectionMatrix(H),ne=this.localClippingEnabled,j=et.init(this.clippingPlanes,ne),y=Me.get(C,m.length),y.init(),m.push(y),Ui(C,G,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(z,W),this.info.render.frame++,j===!0&&et.beginShadows();let Z=p.state.shadowsArray;if(ae.render(Z,C,G),j===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(y,C),p.setupLights(v._useLegacyLights),G.isArrayCamera){let J=G.cameras;for(let $=0,we=J.length;$<we;$++){let Le=J[$];Xf(y,C,Le,Le.viewport)}}else Xf(y,C,G);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,G),Ze.resetDefaultState(),F=-1,_=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Ui(C,G,Z,J){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){J&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(H);let Le=de.update(C),Oe=C.material;Oe.visible&&y.push(C,Le,Oe,Z,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){let Le=de.update(C),Oe=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ue.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ue.copy(Le.boundingSphere.center)),ue.applyMatrix4(C.matrixWorld).applyMatrix4(H)),Array.isArray(Oe)){let Be=Le.groups;for(let tt=0,qe=Be.length;tt<qe;tt++){let Ye=Be[tt],Zt=Oe[Ye.materialIndex];Zt&&Zt.visible&&y.push(C,Le,Zt,Z,ue.z,Ye)}}else Oe.visible&&y.push(C,Le,Oe,Z,ue.z,null)}}let we=C.children;for(let Le=0,Oe=we.length;Le<Oe;Le++)Ui(we[Le],G,Z,J)}function Xf(C,G,Z,J){let $=C.opaque,we=C.transmissive,Le=C.transparent;p.setupLightsView(Z),j===!0&&et.setGlobalState(v.clippingPlanes,Z),we.length>0&&Iv($,we,G,Z),J&&Te.viewport(b.copy(J)),$.length>0&&Tl($,G,Z),we.length>0&&Tl(we,G,Z),Le.length>0&&Tl(Le,G,Z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Iv(C,G,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let we=He.isWebGL2;ee===null&&(ee=new ms(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?wo:qs,minFilter:Xs,samples:we?4:0})),v.getDrawingBufferSize(le),we?ee.setSize(le.x,le.y):ee.setSize(cc(le.x),cc(le.y));let Le=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(U),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Oe=v.toneMapping;v.toneMapping=Ws,Tl(C,Z,J),P.updateMultisampleRenderTarget(ee),P.updateRenderTargetMipmap(ee);let Be=!1;for(let tt=0,qe=G.length;tt<qe;tt++){let Ye=G[tt],Zt=Ye.object,ei=Ye.geometry,gn=Ye.material,rs=Ye.group;if(gn.side===Fn&&Zt.layers.test(J.layers)){let Ht=gn.side;gn.side=Xn,gn.needsUpdate=!0,$f(Zt,Z,J,ei,gn,rs),gn.side=Ht,gn.needsUpdate=!0,Be=!0}}Be===!0&&(P.updateMultisampleRenderTarget(ee),P.updateRenderTargetMipmap(ee)),v.setRenderTarget(Le),v.setClearColor(U,L),v.toneMapping=Oe}function Tl(C,G,Z){let J=G.isScene===!0?G.overrideMaterial:null;for(let $=0,we=C.length;$<we;$++){let Le=C[$],Oe=Le.object,Be=Le.geometry,tt=J===null?Le.material:J,qe=Le.group;Oe.layers.test(Z.layers)&&$f(Oe,G,Z,Be,tt,qe)}}function $f(C,G,Z,J,$,we){C.onBeforeRender(v,G,Z,J,$,we),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(v,G,Z,J,C,we),$.transparent===!0&&$.side===Fn&&$.forceSinglePass===!1?($.side=Xn,$.needsUpdate=!0,v.renderBufferDirect(Z,G,J,$,C,we),$.side=zi,$.needsUpdate=!0,v.renderBufferDirect(Z,G,J,$,C,we),$.side=Fn):v.renderBufferDirect(Z,G,J,$,C,we),C.onAfterRender(v,G,Z,J,$,we)}function Rl(C,G,Z){G.isScene!==!0&&(G=_e);let J=Qe.get(C),$=p.state.lights,we=p.state.shadowsArray,Le=$.state.version,Oe=Ce.getParameters(C,$.state,we,G,Z),Be=Ce.getProgramCacheKey(Oe),tt=J.programs;J.environment=C.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(C.isMeshStandardMaterial?Y:M).get(C.envMap||J.environment),tt===void 0&&(C.addEventListener("dispose",xe),tt=new Map,J.programs=tt);let qe=tt.get(Be);if(qe!==void 0){if(J.currentProgram===qe&&J.lightsStateVersion===Le)return jf(C,Oe),qe}else Oe.uniforms=Ce.getUniforms(C),C.onBuild(Z,Oe,v),C.onBeforeCompile(Oe,v),qe=Ce.acquireProgram(Oe,Be),tt.set(Be,qe),J.uniforms=Oe.uniforms;let Ye=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=et.uniform),jf(C,Oe),J.needsLights=kv(C),J.lightsStateVersion=Le,J.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=qe,J.uniformsList=null,qe}function Yf(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=Ea.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function jf(C,G){let Z=Qe.get(C);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Nv(C,G,Z,J,$){G.isScene!==!0&&(G=_e),P.resetTextureUnits();let we=G.fog,Le=J.isMeshStandardMaterial?G.environment:null,Oe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:dn,Be=(J.isMeshStandardMaterial?Y:M).get(J.envMap||Le),tt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ye=!!Z.morphAttributes.position,Zt=!!Z.morphAttributes.normal,ei=!!Z.morphAttributes.color,gn=Ws;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gn=v.toneMapping);let rs=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ht=rs!==void 0?rs.length:0,st=Qe.get(J),tu=p.state.lights;if(j===!0&&(ne===!0||C!==_)){let hi=C===_&&J.id===F;et.setState(J,C,hi)}let Yt=!1;J.version===st.__version?(st.needsLights&&st.lightsStateVersion!==tu.state.version||st.outputColorSpace!==Oe||$.isBatchedMesh&&st.batching===!1||!$.isBatchedMesh&&st.batching===!0||$.isInstancedMesh&&st.instancing===!1||!$.isInstancedMesh&&st.instancing===!0||$.isSkinnedMesh&&st.skinning===!1||!$.isSkinnedMesh&&st.skinning===!0||$.isInstancedMesh&&st.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&st.instancingColor===!1&&$.instanceColor!==null||st.envMap!==Be||J.fog===!0&&st.fog!==we||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==et.numPlanes||st.numIntersection!==et.numIntersection)||st.vertexAlphas!==tt||st.vertexTangents!==qe||st.morphTargets!==Ye||st.morphNormals!==Zt||st.morphColors!==ei||st.toneMapping!==gn||He.isWebGL2===!0&&st.morphTargetsCount!==Ht)&&(Yt=!0):(Yt=!0,st.__version=J.version);let fr=st.currentProgram;Yt===!0&&(fr=Rl(J,G,$));let Zf=!1,oo=!1,nu=!1,Sn=fr.getUniforms(),mr=st.uniforms;if(Te.useProgram(fr.program)&&(Zf=!0,oo=!0,nu=!0),J.id!==F&&(F=J.id,oo=!0),Zf||_!==C){Sn.setValue(X,"projectionMatrix",C.projectionMatrix),Sn.setValue(X,"viewMatrix",C.matrixWorldInverse);let hi=Sn.map.cameraPosition;hi!==void 0&&hi.setValue(X,ue.setFromMatrixPosition(C.matrixWorld)),He.logarithmicDepthBuffer&&Sn.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Sn.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,oo=!0,nu=!0)}if($.isSkinnedMesh){Sn.setOptional(X,$,"bindMatrix"),Sn.setOptional(X,$,"bindMatrixInverse");let hi=$.skeleton;hi&&(He.floatVertexTextures?(hi.boneTexture===null&&hi.computeBoneTexture(),Sn.setValue(X,"boneTexture",hi.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Sn.setOptional(X,$,"batchingTexture"),Sn.setValue(X,"batchingTexture",$._matricesTexture,P));let iu=Z.morphAttributes;if((iu.position!==void 0||iu.normal!==void 0||iu.color!==void 0&&He.isWebGL2===!0)&&ot.update($,Z,fr),(oo||st.receiveShadow!==$.receiveShadow)&&(st.receiveShadow=$.receiveShadow,Sn.setValue(X,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(mr.envMap.value=Be,mr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),oo&&(Sn.setValue(X,"toneMappingExposure",v.toneMappingExposure),st.needsLights&&Dv(mr,nu),we&&J.fog===!0&&be.refreshFogUniforms(mr,we),be.refreshMaterialUniforms(mr,J,V,k,ee),Ea.upload(X,Yf(st),mr,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ea.upload(X,Yf(st),mr,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Sn.setValue(X,"center",$.center),Sn.setValue(X,"modelViewMatrix",$.modelViewMatrix),Sn.setValue(X,"normalMatrix",$.normalMatrix),Sn.setValue(X,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let hi=J.uniformsGroups;for(let su=0,Ov=hi.length;su<Ov;su++)if(He.isWebGL2){let Kf=hi[su];xt.update(Kf,fr),xt.bind(Kf,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function Dv(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function kv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,G,Z){Qe.get(C.texture).__webglTexture=G,Qe.get(C.depthTexture).__webglTexture=Z;let J=Qe.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){let Z=Qe.get(C);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Z=0){R=C,A=G,T=Z;let J=!0,$=null,we=!1,Le=!1;if(C){let Be=Qe.get(C);Be.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(X.FRAMEBUFFER,null),J=!1):Be.__webglFramebuffer===void 0?P.setupRenderTarget(C):Be.__hasExternalTextures&&P.rebindTextures(C,Qe.get(C.texture).__webglTexture,Qe.get(C.depthTexture).__webglTexture);let tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);let qe=Qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?$=qe[G][Z]:$=qe[G],we=!0):He.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?$=Qe.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[Z]:$=qe,b.copy(C.viewport),N.copy(C.scissor),I=C.scissorTest}else b.copy(K).multiplyScalar(V).floor(),N.copy(Q).multiplyScalar(V).floor(),I=ie;if(Te.bindFramebuffer(X.FRAMEBUFFER,$)&&He.drawBuffers&&J&&Te.drawBuffers(C,$),Te.viewport(b),Te.scissor(N),Te.setScissorTest(I),we){let Be=Qe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,Z)}else if(Le){let Be=Qe.get(C.texture),tt=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,Z||0,tt)}F=-1},this.readRenderTargetPixels=function(C,G,Z,J,$,we,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Te.bindFramebuffer(X.FRAMEBUFFER,Oe);try{let Be=C.texture,tt=Be.format,qe=Be.type;if(tt!==fi&&Ae.convert(tt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ye=qe===wo&&(Ne.has("EXT_color_buffer_half_float")||He.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(qe!==qs&&Ae.convert(qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===ps&&(He.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-J&&Z>=0&&Z<=C.height-$&&X.readPixels(G,Z,J,$,Ae.convert(tt),Ae.convert(qe),we)}finally{let Be=R!==null?Qe.get(R).__webglFramebuffer:null;Te.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(C,G,Z=0){let J=Math.pow(2,-Z),$=Math.floor(G.image.width*J),we=Math.floor(G.image.height*J);P.setTexture2D(G,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,C.x,C.y,$,we),Te.unbindTexture()},this.copyTextureToTexture=function(C,G,Z,J=0){let $=G.image.width,we=G.image.height,Le=Ae.convert(Z.format),Oe=Ae.convert(Z.type);P.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,J,C.x,C.y,$,we,Le,Oe,G.image.data):G.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,J,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,Le,G.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,J,C.x,C.y,Le,Oe,G.image),J===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Z,J,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=C.max.x-C.min.x+1,Le=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,Be=Ae.convert(J.format),tt=Ae.convert(J.type),qe;if(J.isData3DTexture)P.setTexture3D(J,0),qe=X.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)P.setTexture2DArray(J,0),qe=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);let Ye=X.getParameter(X.UNPACK_ROW_LENGTH),Zt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ei=X.getParameter(X.UNPACK_SKIP_PIXELS),gn=X.getParameter(X.UNPACK_SKIP_ROWS),rs=X.getParameter(X.UNPACK_SKIP_IMAGES),Ht=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ht.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ht.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,C.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,C.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(qe,$,G.x,G.y,G.z,we,Le,Oe,Be,tt,Ht.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(qe,$,G.x,G.y,G.z,we,Le,Oe,Be,Ht.data)):X.texSubImage3D(qe,$,G.x,G.y,G.z,we,Le,Oe,Be,tt,Ht),X.pixelStorei(X.UNPACK_ROW_LENGTH,Ye),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Zt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ei),X.pixelStorei(X.UNPACK_SKIP_ROWS,gn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,rs),$===0&&J.generateMipmaps&&X.generateMipmap(qe),Te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,Te.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Mh?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===Oc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?Ar:jg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ar?Vt:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},rh=class extends Cr{};rh.prototype.isWebGL1Renderer=!0;var xc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Da=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},On=new D,To=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var xg=new D,bg=new Mt,_g=new Mt,GM=new D,wg=new Ee,Kl=new D,Nu=new ri,Sg=new Ee,Du=new Rr,bc=class extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sm,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Kl),this.boundingBox.expandByPoint(Kl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Kl),this.boundingSphere.expandByPoint(Kl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nu.copy(this.boundingSphere),Nu.applyMatrix4(s),e.ray.intersectsSphere(Nu)!==!1&&(Sg.copy(s).invert(),Du.copy(e.ray).applyMatrix4(Sg),!(this.boundingBox!==null&&Du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;bg.fromBufferAttribute(s.attributes.skinIndex,e),_g.fromBufferAttribute(s.attributes.skinWeight,e),xg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=_g.getComponent(r);if(a!==0){let o=bg.getComponent(r);wg.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(GM.copy(xg).applyMatrix4(wg),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ro=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},ah=class extends wn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=cn,d=cn,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mg=new Ee,WM=new Ee,_c=class n{constructor(e=[],t=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ee;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:WM;Mg.multiplyMatrices(o,t[r]),Mg.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ah(t,e,e,fi,ps);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ro),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Lr=class extends It{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ba=new Ee,Ag=new Ee,Jl=[],Eg=new gi,qM=new Ee,po=new wt,fo=new ri,wc=class extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ba),Eg.copy(e.boundingBox).applyMatrix4(ba),this.boundingBox.union(Eg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ba),fo.copy(e.boundingSphere).applyMatrix4(ba),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(i),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ba),Ag.multiplyMatrices(i,ba),po.matrixWorld=Ag,po.raycast(e,Jl);for(let a=0,o=Jl.length;a<o;a++){let l=Jl[a];l.instanceId=r,l.object=this,t.push(l)}Jl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Co=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tg=new D,Rg=new D,Cg=new Ee,ku=new Rr,Ql=new ri,ka=class extends Ot{constructor(e=new zn,t=new Co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Tg.fromBufferAttribute(t,s-1),Rg.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Tg.distanceTo(Rg);e.setAttribute("lineDistance",new Bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(s),Ql.radius+=r,e.ray.intersectsSphere(Ql)===!1)return;Cg.copy(s).invert(),ku.copy(e.ray).applyMatrix4(Cg);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,d=new D,u=new D,h=new D,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=m,w=x-1;v<w;v+=f){let A=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(p,A),d.fromBufferAttribute(p,T),ku.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let v=m,w=x-1;v<w;v+=f){if(c.fromBufferAttribute(p,v),d.fromBufferAttribute(p,v+1),ku.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Lg=new D,Pg=new D,Sc=class extends ka{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Lg.fromBufferAttribute(t,s),Pg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lg.distanceTo(Pg);e.setAttribute("lineDistance",new Bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Mc=class extends ka{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Lo=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ig=new Ee,oh=new Rr,ec=new ri,tc=new D,Ac=class extends Ot{constructor(e=new zn,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;Ig.copy(s).invert(),oh.copy(e.ray).applyMatrix4(Ig);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,y=f;g<y;g++){let p=c.getX(g);tc.fromBufferAttribute(u,p),Ng(tc,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=h,y=f;g<y;g++)tc.fromBufferAttribute(u,g),Ng(tc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ng(n,e,t,i,s,r,a){let o=oh.distanceSqToPoint(n);if(o<t){let l=new D;oh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Ec=class extends wn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tc=class n extends zn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],h=[],f=[],g=0,y=[],p=i/2,m=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Bn(u,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(f,2));function x(){let w=new D,A=new D,T=0,R=(t-e)/i;for(let F=0;F<=r;F++){let _=[],b=F/r,N=b*(t-e)+e;for(let I=0;I<=s;I++){let U=I/s,L=U*l+o,E=Math.sin(L),k=Math.cos(L);A.x=N*E,A.y=-b*i+p,A.z=N*k,u.push(A.x,A.y,A.z),w.set(E,R,k).normalize(),h.push(w.x,w.y,w.z),f.push(U,1-b),_.push(g++)}y.push(_)}for(let F=0;F<s;F++)for(let _=0;_<r;_++){let b=y[_][F],N=y[_+1][F],I=y[_+1][F+1],U=y[_][F+1];d.push(b,N,U),d.push(N,I,U),T+=6}c.addGroup(m,T,0),m+=T}function v(w){let A=g,T=new je,R=new D,F=0,_=w===!0?e:t,b=w===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*b,0),h.push(0,b,0),f.push(.5,.5),g++;let N=g;for(let I=0;I<=s;I++){let L=I/s*l+o,E=Math.cos(L),k=Math.sin(L);R.x=_*k,R.y=p*b,R.z=_*E,u.push(R.x,R.y,R.z),h.push(0,b,0),T.x=E*.5+.5,T.y=k*.5*b+.5,f.push(T.x,T.y),g++}for(let I=0;I<s;I++){let U=A+I,L=N+I;w===!0?d.push(L,L+1,U):d.push(L+1,L,U),F+=3}c.addGroup(m,F,w===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oa=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yi=class extends Oa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ua=class extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function nc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function XM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $M(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Dg(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function a0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var js=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lh=class extends js{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lm,endingEnd:Lm}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pm:r=e,o=2*t-i;break;case Im:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pm:a=e,l=2*i-t;break;case Im:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-h*p+2*h*y-h*g,x=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,v=(-1-f)*p+(1.5+f)*y+.5*g,w=f*p-f*y;for(let A=0;A!==o;++A)r[A]=m*a[d+A]+x*a[c+A]+v*a[l+A]+w*a[u+A];return r}},ch=class extends js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(i-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}},dh=class extends js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nc(t,this.TimeBufferType),this.values=nc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nc(e.times,Array),values:nc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case du:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&XM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===du,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,h=u-i,f=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[h+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=Tr;var Zs=class extends vi{};Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=La;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends vi{};Rc.prototype.ValueTypeName="color";var ys=class extends vi{};ys.prototype.ValueTypeName="number";var uh=class extends js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)nt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hi=class extends vi{InterpolantFactoryMethodLinear(e){return new uh(this.times,this.values,this.getValueSize(),e)}};Hi.prototype.ValueTypeName="quaternion";Hi.prototype.DefaultInterpolation=Tr;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ks=class extends vi{};Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=La;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends vi{};vs.prototype.ValueTypeName="vector";var Cc=class{constructor(e,t=-1,i,s=Ex){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Pi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(jM(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(vi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let d=$M(l);l=Dg(l,1,d),c=Dg(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ys(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],d=c.name.match(r);if(d&&d.length>1){let u=d[1],h=s[u];h||(s[u]=h=[]),h.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,h,f,g,y){if(f.length!==0){let p=[],m=[];a0(f,p,m,g),p.length!==0&&y.push(new u(h,p,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)f[h[g].morphTargets[y]]=-1;for(let y in f){let p=[],m=[];for(let x=0;x!==h[g].morphTargets.length;++x){let v=h[g];p.push(v.time),m.push(v.morphTarget===y?1:0)}s.push(new ys(".morphTargetInfluence["+y+"]",p,m))}l=f.length*a}else{let f=".bones["+t[u].name+"]";i(vs,f+".position",h,"pos",s),i(Hi,f+".quaternion",h,"rot",s),i(vs,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function YM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return Rc;case"quaternion":return Hi;case"bool":case"boolean":return Zs;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function jM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=YM(n.type);if(n.times===void 0){let t=[],i=[];a0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Vs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},hh=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}},ZM=new hh,xs=class{constructor(e){this.manager=e!==void 0?e:ZM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xs.DEFAULT_MATERIAL_NAME="__DEFAULT";var us={},ph=class extends Error{constructor(e,t){super(e),this.response=t}},Po=class extends xs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(us[e]!==void 0){us[e].push({onLoad:t,onProgress:i,onError:s});return}us[e]=[],us[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=us[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0,y=0,p=new ReadableStream({start(m){x();function x(){u.read().then(({done:v,value:w})=>{if(v)m.close();else{y+=w.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let T=0,R=d.length;T<R;T++){let F=d[T];F.onProgress&&F.onProgress(A)}m.enqueue(w),x()}})}}});return new Response(p)}else throw new ph(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Vs.add(e,c);let d=us[e];delete us[e];for(let u=0,h=d.length;u<h;u++){let f=d[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let d=us[e];if(d===void 0)throw this.manager.itemError(e),c;delete us[e];for(let u=0,h=d.length;u<h;u++){let f=d[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var fh=class extends xs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=So("img");function l(){d(),Vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Fa=class extends xs{constructor(e){super(e)}load(e,t,i,s){let r=new wn,a=new fh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ba=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Lc=class extends Ba{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ou=new Ee,kg=new D,Og=new D,Io=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kg.setFromMatrixPosition(e.matrixWorld),t.position.copy(kg),Og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Og),t.updateMatrixWorld(),Ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mh=class extends Io{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Pc=class extends Ba{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ug=new Ee,mo=new D,Uu=new D,gh=class extends Io{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(mo),Uu.copy(i.position),Uu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uu),i.updateMatrixWorld(),s.makeTranslation(-mo.x,-mo.y,-mo.z),Ug.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ug)}},Ic=class extends Ba{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yh=class extends Io{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Js=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nc=class extends xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Vs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Vs.add(e,l),r.manager.itemStart(e)}};var Th="\\[\\]\\.:\\/",KM=new RegExp("["+Th+"]","g"),Rh="[^"+Th+"]",JM="[^"+Th.replace("\\.","")+"]",QM=/((?:WC+[\/:])*)/.source.replace("WC",Rh),e1=/(WCOD+)?/.source.replace("WCOD",JM),t1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),n1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),i1=new RegExp("^"+QM+e1+t1+n1+"$"),s1=["material","materials","bones","map"],vh=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(KM,"")}static parseTrackName(e){let t=i1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);s1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=vh;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hT=new Float32Array(1);var No=class{constructor(e,t,i=0,s=1/0){this.ray=new Rr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return xh(e,this,i,t),i.sort(Fg),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xh(e[s],this,i,t);return i.sort(Fg),i}};function Fg(n,e){return n.distance-e.distance}function xh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)xh(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Yn=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function o0(n){if(n.comfortVersion===Yn.version)return n;let e={...n,comfortVersion:Yn.version,winDist:Yn.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=Yn.windowScale),e}function r1(n,e){return n>0&&e>0?n/e:16/9}function Uo(n,e,t){let i=r1(n,e),s=t>0?t:i,r,a;s>=i?(r=n,a=n/s):(a=e,r=e*s);let o=Math.round((n-r)/2),l=Math.round((e-a)/2),c=Math.round(r),d=Math.round(a);return{x:o,y:l,w:c,h:d,u0:o/n,v0:l/e,uw:c/n,vh:d/e}}function Ch(n,e,t,i,s){let r=Uo(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var Vi=4096,Cn={width:1200,height:800},Qs=160;function a1(n,e=Vi){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let a=Math.ceil(t)+Qs*2,o=Math.ceil(i)+Qs*2,l=s==="window"?r%3*1360:s==="slot"?1360:0,c=s==="dock"?800:s==="keyboard"?3160:s==="slot"?0:1200+Math.floor(r/3)*980,d=s==="dock"?400:s==="keyboard"?936:980;if(r>5||a>(s==="window"||s==="slot"?1360:e)||o>d||l+a>e||c+o>e)throw new Error("Workspace texture is full; close a window first.");return[l,c,a,o]})}var Fc=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var u,h,f;if(window.__gorillaStereoOverlay){let g=2*Math.tan(ko.degToRad(36)),p=[{overlay:!0,matrix:new Ee().makeTranslation(0,0,-1).multiply(new Ee().makeScale(g*1.78,g*1.48,1)).toArray(),rect:[0,0,Cn.width/2,Cn.height],uvR:[Cn.width/2/Vi,1-Cn.height/Vi,Cn.width/2/Vi,Cn.height/Vi]}],m=JSON.stringify(p),x="[]";(m!==this.sent||x!==this.sentSpecs)&&(this.sent=m,this.sentSpecs=x,(h=(u=window.NativeXR)==null?void 0:u.frame)==null||h.call(u,m,x));return}e.updateMatrixWorld(!0);let t=[];e.traverse(g=>{g.isCSS3DObject&&g.visible&&t.push(g)});for(let g of t)g.element.parentNode!==this.domElement&&this.domElement.append(g.element),g.element.style.transform!=="none"&&(g.element.style.transform="none");for(let g of this.slots.keys())t.some(y=>y.id===g)||this.slots.delete(g);let i=t.map(g=>{let y=g.element.classList.contains("dock")?"dock":g.element.classList.contains("kb")?"keyboard":g.element.classList.contains("win-drop-slot")?"slot":"window";if(y==="window"&&!this.slots.has(g.id)){let x=new Set(this.slots.values()),v=0;for(;x.has(v);)v++;this.slots.set(g.id,v)}let p=y==="window"||y==="slot"?1040:Vi-Qs*2,m=(y==="dock"?400:y==="keyboard"?936:980)-Qs*2;return{width:Math.min(g.element.offsetWidth,p),height:Math.min(g.element.offsetHeight,m),kind:y,slot:this.slots.get(g.id)||0}}),s;try{s=a1(i)}catch(g){this.lastError!==g.message&&(this.lastError=g.message,(f=window.nextvrMessage)==null||f.call(window,g.message));return}let r=[],a=[];t.forEach((g,y)=>{let p=g.element,[m,x,v,w]=s[y],A=`${m+Qs}px`,T=`${x+Qs}px`;p.style.left!==A&&(p.style.left=A),p.style.top!==T&&(p.style.top=T);let R=g.matrixWorld.clone().multiply(new Ee().makeScale(v,w,1)),F=+(p.dataset.curve||0);r.push({id:p.dataset.windowId||(i[y].kind==="dock"?"dock":i[y].kind),matrix:R.toArray(),rect:s[y],curve:F,glass:[Qs/v,Qs/w,i[y].width/v,i[y].height/w]});let _=p.getBoundingClientRect();for(let b of p.querySelectorAll("[data-native-app]")){let N=b.getBoundingClientRect();if(!N.width||!N.height)continue;let I=+(b.dataset.aspect||0),U=Uo(N.width,N.height,I),L=g.matrixWorld.clone().multiply(new Ee().makeTranslation(N.left-_.left+U.x+U.w/2-i[y].width/2,i[y].height/2-(N.top-_.top+U.y+U.h/2),.5)).multiply(new Ee().makeScale(U.w,U.h,1));r.push({browser:"app:"+b.dataset.nativeApp,matrix:L.toArray(),rect:[0,0,Math.round(N.width),Math.round(N.height)],curve:+(p.dataset.curve||0),uv:[U.u0,U.v0,U.uw,U.vh]});let E=[U.u0,U.v0,U.uw,U.vh].map(k=>k.toFixed(5)).join(",");b.dataset.uv!==E&&(b.dataset.uv=E,this.last=0)}for(let b of p.querySelectorAll("[data-native-xr]")){let N=b.getBoundingClientRect();if(!N.width||!N.height)continue;let I="xr:"+b.dataset.nativeXr,U=+(b.dataset.aspect||0),L=Uo(N.width,N.height,U),E=g.matrixWorld.clone().multiply(new Ee().makeTranslation(N.left-_.left+L.x+L.w/2-i[y].width/2,i[y].height/2-(N.top-_.top+L.y+L.h/2),.5)).multiply(new Ee().makeScale(L.w,L.h,1));r.push({browser:I,matrix:E.toArray(),rect:[0,0,Math.round(N.width),Math.round(N.height)],curve:+(p.dataset.curve||0),uv:[L.u0,L.v0,L.uw/2,L.vh],uvR:[L.u0+L.uw/2,L.v0,L.uw/2,L.vh]})}for(let b of p.querySelectorAll("[data-native-browser]")){let N=b.getBoundingClientRect();if(!N.width||!N.height)continue;let I=b.dataset.nativeBrowser,U=b.dataset.url;if(!U)continue;let L=Math.round(N.width),E=Math.round(N.height),k={left:N.left,top:N.top,right:N.right,bottom:N.bottom};for(let K=b.parentElement;K&&K!==p;K=K.parentElement){let Q=getComputedStyle(K);if(/(auto|scroll|hidden)/.test(Q.overflow+Q.overflowY)){let ie=K.getBoundingClientRect();k.left=Math.max(k.left,ie.left),k.top=Math.max(k.top,ie.top),k.right=Math.min(k.right,ie.right),k.bottom=Math.min(k.bottom,ie.bottom)}}a.push({id:I,url:U,width:L,height:E});let V=k.right-k.left,z=k.bottom-k.top;if(V<=0||z<=0)continue;let W=g.matrixWorld.clone().multiply(new Ee().makeTranslation(k.left-_.left+V/2-i[y].width/2,i[y].height/2-(k.top-_.top+z/2),.5)).multiply(new Ee().makeScale(V,z,1));r.push({browser:I,matrix:W.toArray(),rect:[0,0,L,E],curve:+(p.dataset.curve||0),homeOverlay:b.dataset.homeOverlay==="1",uv:[(k.left-N.left)/L,(N.bottom-k.bottom)/E,V/L,z/E]})}});let o=2*Math.tan(ko.degToRad(36)),l=new Ee().makeTranslation(0,0,-1).multiply(new Ee().makeScale(o*1.5,o,1));if(window.__gorillaStereoOverlay){let g=new Ee().makeTranslation(0,0,-1).multiply(new Ee().makeScale(o*1.78,o*1.48,1));r.push({overlay:!0,matrix:g.toArray(),rect:[0,0,Cn.width/2,Cn.height],uvR:[Cn.width/2/Vi,1-Cn.height/Vi,Cn.width/2/Vi,Cn.height/Vi]})}else r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,Cn.width,Cn.height]});let c=performance.now(),d=document.documentElement.dataset.qualityTier||document.documentElement.dataset.quality;if(c-this.last>=({low:32,medium:24,auto:24,high:16}[d]||24)){this.last=c;let g=JSON.stringify(r),y=JSON.stringify(a);(g!==this.sent||y!==this.sentSpecs)&&(this.sent=g,this.sentSpecs=y,window.NativeXR.frame(g,y))}}invalidate(){this.sent=this.sentSpecs=null,this.last=0}};var Ha=new D,yT=new D,o1=new D,Bo=()=>null,Bc=()=>!0,c0=()=>null,Fo=null,Va=[],l0=0;function d0(n){let e=typeof performance<"u"?performance.now():Date.now(),t=n==null?void 0:n.hands;if(!Array.isArray(t)||t.length===0){e-l0>400&&(Va.length=0);return}Va.length=0;for(let i of t){let s=(i==null?void 0:i.points)||(i==null?void 0:i.lm);if(!s)continue;let r=1,a=1,o=0,l=0;if(typeof s.length=="number"&&typeof s[0]=="number")for(let c=0;c+1<s.length;c+=3){let d=s[c],u=s[c+1];d<r&&(r=d),u<a&&(a=u),d>o&&(o=d),u>l&&(l=u)}else if(Array.isArray(s))for(let c of s)c&&(c.x<r&&(r=c.x),c.y<a&&(a=c.y),c.x>o&&(o=c.x),c.y>l&&(l=c.y));o>=r&&l>=a&&Va.push({x0:Math.max(0,r-.14),y0:Math.max(0,a-.14),x1:Math.min(1,o+.14),y1:Math.min(1,l+.14)})}Va.length>0&&(l0=e)}var zc={energy:0,lastA:null,onMotion(n){let e=(n==null?void 0:n.accelerationIncludingGravity)||(n==null?void 0:n.acceleration);if(!(!e||e.x===null)){if(this.lastA){let t=Math.hypot(e.x-this.lastA.x,e.y-this.lastA.y,e.z-this.lastA.z);t>.14?this.energy=Math.min(4,this.energy*.88+t):this.energy*=.9}this.lastA={x:e.x,y:e.y,z:e.z}}},moving(){return!this.lastA||this.energy>.2}},Wt={W:96,H:72,cv:null,ctx:null,prev:null,pos:new D,out:new D,prevOut:new D,stepDelta:new D,lastT:0,lastSc:0,_lastSentX:0,_lastSentZ:0,depth:1.45,init(){this.cv||typeof document>"u"||(this.cv=document.createElement("canvas"),this.cv.width=this.W,this.cv.height=this.H,this.ctx=this.cv.getContext("2d",{willReadFrequently:!0}))},reset(){var e,t,i;this.pos.set(0,0,0),this.out.set(0,0,0),this.prevOut.set(0,0,0),this.stepDelta.set(0,0,0),this.prev=null,this.lastSc=0,this._lastSentX=0,this._lastSentZ=0;let n=Bo();n&&(n.position.x=0,n.position.z=0),typeof Fo=="function"?Fo(0,0,0):typeof window<"u"&&((t=(e=window.NativeXR)==null?void 0:e.resetSixDof)==null||t.call(e)),typeof window<"u"&&((i=window.__updateBackfaceStates)==null||i.call(window))},processGray(n,e){let t=this.W,i=this.H;if(!n||n.length<t*i)return null;if(!this.prev)return this.prev=new Float32Array(n),null;let s=this.prev,r=1e18,a=0,o=0;for(let p=-7;p<=7;p++)for(let m=-7;m<=7;m++){let x=0;for(let v=22;v<50&&x<r;v+=2){let w=v*t,A=(v+p)*t;for(let T=30;T<66;T+=2)x+=Math.abs(n[A+T+m]-s[w+T])}x<r&&(r=x,a=m,o=p)}let l=[],c=new Float32Array(25);for(let p=10;p<=i-18;p+=10)for(let m=10;m<=t-18;m+=11){let x=(m+4)/t,v=(p+4)/i,w=!1;for(let U of Va)if(x>U.x0&&x<U.x1&&v>U.y0&&v<U.y1){w=!0;break}if(w)continue;let A=0;for(let U=p;U<p+8;U++){let L=U*t;for(let E=m;E<m+7;E++)A+=Math.abs(s[L+E+1]-s[L+E])}if(A<200)continue;let T=1e18,R=0,F=0,_=0;for(let U=-2;U<=2;U++)for(let L=-2;L<=2;L++){let E=m+a+L,k=p+o+U;if(E<0||k<0||E+8>t||k+8>i){c[_++]=1e18;continue}let V=0;for(let z=0;z<8;z++){let W=(p+z)*t+m,K=(k+z)*t+E;for(let Q=0;Q<8;Q++)V+=Math.abs(n[K+Q]-s[W+Q])}c[_++]=V,V<T&&(T=V,R=L,F=U)}let b=(U,L)=>c[(L+2)*5+(U+2)],N=0,I=0;if(Math.abs(R)<2){let U=b(R-1,F),L=b(R+1,F),E=U-2*T+L;E>0&&U<1e17&&L<1e17&&(N=.5*(U-L)/E)}if(Math.abs(F)<2){let U=b(R,F-1),L=b(R,F+1),E=U-2*T+L;E>0&&U<1e17&&L<1e17&&(I=.5*(U-L)/E)}l.push({x:m+4-t*.5,y:p+4-i*.5,dx:a+R+N,dy:o+F+I})}if(this.prev.set(n),l.length<10)return null;let d=p=>{let m=0,x=0,v=0,w=0;for(let F of p)m+=F.dx,x+=F.dy,v+=F.x,w+=F.y;let A=p.length;m/=A,x/=A,v/=A,w/=A;let T=0,R=0;for(let F of p){let _=F.x-v,b=F.y-w;T+=(F.dx-m)*_+(F.dy-x)*b,R+=_*_+b*b}return{sc:R>0?T/R:0,mx:m,my:x,px:v,py:w}},u=d(l),h=l.map(p=>Math.hypot(p.dx-u.mx-u.sc*(p.x-u.px),p.dy-u.my-u.sc*(p.y-u.py))),f=[...h].sort((p,m)=>p-m),g=f[f.length>>1]||.5;if(g>.85)return null;let y=l.filter((p,m)=>h[m]<=Math.max(.35,g*2));return y.length<8?null:(u=d(y),this.applyFlowScale(u.sc,a,o,e,u.mx-a),{sc:u.sc,gx:a,gy:o})},applyFlowScale(n,e=0,t=0,i,s=0){if(!Bc())return;let r=Bo();if(!r)return;if(!Number.isFinite(n)||Math.abs(n)<.0028||Math.abs(n)>.22){this.lastSc=0;return}let a=this.lastSc;if(this.lastSc=n,a===0||Math.sign(a)!==Math.sign(n))return;let o=(n+a)*.5;if(Math.hypot(e,t)>6&&(o*=.3),!(i!==void 0?!!i:zc.moving())){this.lastSc=0;return}let c=Math.max(-.075,Math.min(.075,o*this.depth));Ha.set(0,0,-1).applyQuaternion(r.quaternion),Ha.y=0,Ha.lengthSq()>1e-6?Ha.normalize():Ha.set(0,0,-1),this.pos.addScaledVector(Ha,c),this.pos.y=0;let d=Math.hypot(this.pos.x,this.pos.z);if(d>3){let u=3/d;this.pos.x*=u,this.pos.z*=u}this.pos.y=0},update(n,e=.016){var o,l,c;if(!Bc()){(this.pos.lengthSq()>0||this.out.lengthSq()>0)&&this.reset();return}let t=Math.max(.38,1-Math.exp(-Math.max(.005,e)*24));this.out.lerp(this.pos,t),this.out.y=0,this.stepDelta.subVectors(this.out,this.prevOut),this.stepDelta.y=0,this.prevOut.copy(this.out);let i=Bo();i&&(i.position.x=this.out.x,i.position.z=this.out.z),Math.hypot(this.out.x-this._lastSentX,this.out.z-this._lastSentZ)>1e-4&&(this._lastSentX=this.out.x,this._lastSentZ=this.out.z,typeof Fo=="function"?Fo(this.out.x,0,this.out.z):typeof window<"u"&&((l=(o=window.NativeXR)==null?void 0:o.sixDofOffset)==null||l.call(o,this.out.x,0,this.out.z)),typeof window<"u"&&((c=window.__updateBackfaceStates)==null||c.call(window)));let s=c0();if(!s||s.readyState<2||n-this.lastT<45||(this.lastT=n,this.init(),!this.ctx))return;let r=this.W,a=this.H;try{this.ctx.drawImage(s,0,0,r,a);let d=this.ctx.getImageData(0,0,r,a).data,u=new Float32Array(r*a);for(let h=0,f=0;h<u.length;h++,f+=4)u[h]=d[f]*.3+d[f+1]*.59+d[f+2]*.11;this.processGray(u)}catch{}},consumeStepDelta(n=o1){return n.copy(this.stepDelta),n.y=0,this.stepDelta.set(0,0,0),n}};function Hc({camera:n,settings:e,getCamera:t,isEnabled:i,getVideo:s,onNativeOffset:r}={}){typeof t=="function"?Bo=t:n&&(Bo=()=>n),typeof i=="function"?Bc=i:e&&typeof e=="object"&&(Bc=()=>e.sixdof!==0),typeof s=="function"&&(c0=s),typeof r=="function"&&(Fo=r)}typeof window<"u"&&(window.addEventListener("devicemotion",n=>zc.onMotion(n),{passive:!0}),window.SixDof=Wt,window.Walk=zc,window.nextvrSixDof=(n,e=0,t=0)=>{if(n&&typeof n=="object"){if(n.gray&&n.gray.length>=Wt.W*Wt.H)return Wt.processGray(n.gray,n.moving);let s=Number(n.sc??0),r=Number(n.gx??0),a=Number(n.gy??0);return Wt.applyFlowScale(s,r,a,n.moving),{sc:s,gx:r,gy:a}}let i=Number(n??0);return Wt.applyFlowScale(i,Number(e||0),Number(e?t:0)),{sc:i,gx:Number(e||0),gy:Number(t||0)}});var u0=new D,l1=new nt,h0=new D,Ir=class extends Ot{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Gi=new Ee,c1=new Ee,Vc=class{constructor(e={}){let t=this,i,s,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let d=document.createElement("div");d.style.transformStyle="preserve-3d",c.appendChild(d),this.getSize=function(){return{width:i,height:s}},this.render=function(y,p){let m=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(s/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let x,v;p.isOrthographicCamera&&(x=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);let w=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,A=p.isOrthographicCamera?`scale( ${w} )scale(`+m+")translate("+u(x)+"px,"+u(v)+"px)"+h(p.matrixWorldInverse):`scale( ${w} )translateZ(`+m+"px)"+h(p.matrixWorldInverse),R=(p.isPerspectiveCamera?"perspective("+m+"px) ":"")+A+"translate("+r+"px,"+a+"px)";o.camera.style!==R&&(d.style.transform=R,o.camera.style=R),g(y,y,p,A)},this.setSize=function(y,p){i=y,s=p,r=i/2,a=s/2,l.style.width=y+"px",l.style.height=p+"px",c.style.width=y+"px",c.style.height=p+"px",d.style.width=y+"px",d.style.height=p+"px"};function u(y){return Math.abs(y)<1e-10?0:y}function h(y){let p=y.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function f(y){let p=y.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function g(y,p,m,x){if(y.isCSS3DObject){let v=y.visible===!0&&y.layers.test(m.layers)===!0;if(y.element.style.display=v===!0?"":"none",v===!0){y.onBeforeRender(t,p,m);let w;y.isCSS3DSprite?(Gi.copy(m.matrixWorldInverse),Gi.transpose(),y.rotation2D!==0&&Gi.multiply(c1.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(u0,l1,h0),Gi.setPosition(u0),Gi.scale(h0),Gi.elements[3]=0,Gi.elements[7]=0,Gi.elements[11]=0,Gi.elements[15]=1,w=f(Gi)):w=f(y.matrixWorld);let A=y.element,T=o.objects.get(y);if(T===void 0||T.style!==w){A.style.transform=w;let R={style:w};o.objects.set(y,R)}A.parentNode!==d&&d.appendChild(A),y.onAfterRender(t,p,m)}}for(let v=0,w=y.children.length;v<w;v++)g(y.children[v],p,m,x)}}};var fe=!!window.NativeXR,Ft=fe?Cn:{width:innerWidth,height:innerHeight},f0={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"sunset",panorama:"sunset",quality:"auto",showFps:0,wideCamera:0,spatialLauncher:0,dockSnapSlot:1,fingerTouch:1,pinchOnApp:1,gunGesture:1,sixdof:1,lateLatch:0,gorillaInstalled:0,profileName:"",profileAvatar:""},zo={};try{zo=JSON.parse(localStorage.getItem("nextvr.v1")||"{}")||{}}catch{}var Xe={...f0,...zo};Xe.sunsetDefaultVersion||(!Xe.envChosen&&Xe.env==="passthrough"&&(!zo.panorama||zo.panorama==="lagoon")&&(Xe.env="sunset"),(!zo.panorama||Xe.env==="sunset"&&!Xe.envChosen)&&(Xe.panorama=Xe.env==="passthrough"?"sunset":Xe.env),Xe.sunsetDefaultVersion=1);if(fe){Xe=o0(Xe),Xe.handsOn=!0,Xe.handDrawSeen||(Xe.handDraw=f0.handDraw,Xe.handDrawSeen=1);try{localStorage.setItem("nextvr.v1",JSON.stringify(Xe))}catch{}}var S=Xe,Ve=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Xe))}catch{}},ln={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",libAll:"Todos",libFilter:"Filtro",libGames:"Jogos",libGamesEmpty:"Os jogos de headset aparecem aqui quando o PhoneXR os encontra.",libRecentEmpty:"Os apps abertos recentemente aparecem aqui.",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"P\xF4r do sol \xB7 palmeiras",envDusk:"Crep\xFAsculo",envCinema:"Cinema",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",envDark:"Panorama 360\xB0 \xB7 Dark",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.exit":"Sair do jogo","game.menu":"Menu do jogo","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",libAll:"All",libFilter:"Filter",libGames:"Games",libGamesEmpty:"Headset games appear here when PhoneXR finds them.",libRecentEmpty:"Recently opened apps will appear here.",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"Sunset \xB7 palms",envDusk:"Dusk",envCinema:"Cinema",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",envDark:"360\xB0 panorama \xB7 Dark",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.exit":"Exit game","game.menu":"Game menu","game.continue":"Continue","game.settings":"Settings","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",libAll:"Todo",libFilter:"Filtro",libGames:"Juegos",libGamesEmpty:"Los juegos de realidad virtual aparecer\xE1n aqu\xED cuando PhoneXR los encuentre.",libRecentEmpty:"Las aplicaciones abiertas recientemente aparecer\xE1n aqu\xED.",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Atardecer \xB7 palmeras",envDusk:"Crep\xFAsculo",envCinema:"Cine",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.exit":"Salir del juego","game.menu":"Men\xFA del juego","game.continue":"Continuar","game.settings":"Ajustes","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}};Object.assign(ln.pt,{dockSnapSlot:"Espa\xE7o pr\xE9-definido na Dock",dockSnapDesc:"Mostrar janela preta transparente ao mover janelas na Dock normal",dockSnapHint:"Solte aqui para encaixar no espa\xE7o pr\xE9-definido",fingerTouch:"Toque com indicador (sem pin\xE7a)",fingerTouchDesc:"Abrir apps na Dock ou Spatial levando o indicador \xE0 frente",qualityHigh:"Alta (1080p)",qualityMedium:"M\xE9dia (890p)",qualityLow:"Baixa (390p)",qualityAuto:"Autom\xE1tica"});Object.assign(ln.en,{dockSnapSlot:"Pre-defined Dock Slot",dockSnapDesc:"Show semi-transparent black slot when moving windows in normal Dock",dockSnapHint:"Drop here to snap into pre-defined slot",fingerTouch:"Index Finger Touch (No Pinch)",fingerTouchDesc:"Open apps in Dock or Spatial by pushing your index finger forward",qualityHigh:"High (1080p)",qualityMedium:"Medium (890p)",qualityLow:"Low (390p)",qualityAuto:"Auto"});Object.assign(ln.es,{dockSnapSlot:"Espacio predefinido en Dock",dockSnapDesc:"Mostrar ventana negra semitransparente al mover ventanas en el Dock normal",dockSnapHint:"Suelta aqu\xED para encajar en el espacio predefinido",fingerTouch:"Toque con \xEDndice (sin pinza)",fingerTouchDesc:"Abrir apps en el Dock o Spatial llevando el dedo \xEDndice hacia adelante",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Baja (390p)",qualityAuto:"Autom\xE1tica"});ln.ja={...ln.en,desktop:"\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",browser:"\u30D6\u30E9\u30A6\u30B6",youtube:"YouTube",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC",settings:"\u8A2D\u5B9A",menu:"\u30E1\u30CB\u30E5\u30FC",store:"\u30B9\u30C8\u30A2",env:"\u74B0\u5883",keyboard:"\u30AD\u30FC\u30DC\u30FC\u30C9",center:"\u6B63\u9762\u306B\u30EA\u30BB\u30C3\u30C8",search:"\u30A6\u30A7\u30D6\u3092\u691C\u7D22",searchYt:"\u52D5\u753B\u3092\u691C\u7D22",open:"\u958B\u304F",close:"\u9589\u3058\u308B",general:"\u4E00\u822C",hands:"\u30CF\u30F3\u30C9\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0",windows:"\u30A6\u30A3\u30F3\u30C9\u30A6",dock:"\u30C9\u30C3\u30AF",perf:"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",language:"\u8A00\u8A9E",on:"\u30AA\u30F3",off:"\u30AA\u30D5",sens:"\u611F\u5EA6",scale:"\u30B9\u30B1\u30FC\u30EB",dist:"\u8DDD\u96E2",curve:"\u30AB\u30FC\u30D6",size:"\u30B5\u30A4\u30BA",quality:"\u753B\u8CEA",apps:"\u30A2\u30D7\u30EA",recents:"\u6700\u8FD1",battery:"\u30D0\u30C3\u30C6\u30EA\u30FC",net:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",time:"\u6642\u523B",libAll:"\u3059\u3079\u3066",libFilter:"\u30D5\u30A3\u30EB\u30BF\u30FC",libGames:"\u30B2\u30FC\u30E0",centered:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",langChanged:"\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u3057\u305F",langTitle:"\u8A00\u8A9E",langContinue:"\u6B21\u3078",langPick:"\u8A00\u8A9E\u3092\u9078\u629E",notif:"\u901A\u77E5",noNotif:"\u65B0\u3057\u3044\u901A\u77E5\u306F\u3042\u308A\u307E\u305B\u3093",profile:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",dockSnapSlot:"\u30C9\u30C3\u30AF\u5B9A\u7FA9\u6E08\u307F\u30B9\u30ED\u30C3\u30C8",dockSnapDesc:"\u30A6\u30A3\u30F3\u30C9\u30A6\u79FB\u52D5\u6642\u306B\u534A\u900F\u660E\u306E\u9ED2\u67A0\u3092\u8868\u793A",dockSnapHint:"\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u914D\u7F6E",qualityHigh:"\u9AD8 (1080p)",qualityMedium:"\u4E2D (890p)",qualityLow:"\u4F4E (390p)",qualityAuto:"\u81EA\u52D5"};ln.fr={...ln.en,desktop:"Espace de travail",browser:"Navigateur",youtube:"YouTube",gallery:"Galerie",settings:"Param\xE8tres",menu:"Menu",store:"Boutique",env:"Environnements",keyboard:"Clavier",center:"Recentrer",search:"Rechercher sur le web",searchYt:"Rechercher des vid\xE9os",open:"Ouvrir",close:"Fermer",general:"G\xE9n\xE9ral",hands:"Suivi des mains",windows:"Fen\xEAtres",dock:"Dock",perf:"Performance",language:"Langue",on:"Activ\xE9",off:"D\xE9sactiv\xE9",sens:"Sensibilit\xE9",scale:"\xC9chelle",dist:"Distance",curve:"Courbure",size:"Taille",quality:"Qualit\xE9",apps:"Applications",recents:"R\xE9cents",battery:"Batterie",net:"R\xE9seau",time:"Heure",libAll:"Tout",libFilter:"Filtre",libGames:"Jeux",centered:"Espace recentr\xE9",langChanged:"Langue modifi\xE9e",langTitle:"Langue",langContinue:"Continuer",langPick:"Choisissez votre langue",notif:"Notifications",noNotif:"Aucune notification",profile:"Profil",dockSnapSlot:"Emplacement pr\xE9d\xE9fini du Dock",dockSnapDesc:"Afficher un cadre noir semi-transparent lors du d\xE9placement",dockSnapHint:"Rel\xE2chez ici pour placer la fen\xEAtre",qualityHigh:"Haute (1080p)",qualityMedium:"Moyenne (890p)",qualityLow:"Basse (390p)",qualityAuto:"Auto"};ln.de={...ln.en,desktop:"Arbeitsbereich",browser:"Browser",youtube:"YouTube",gallery:"Galerie",settings:"Einstellungen",menu:"Men\xFC",store:"Store",env:"Umgebungen",keyboard:"Tastatur",center:"Zentrieren",search:"Im Web suchen",searchYt:"Videos suchen",open:"\xD6ffnen",close:"Schlie\xDFen",general:"Allgemein",hands:"Hand-Tracking",windows:"Fenster",dock:"Dock",perf:"Leistung",language:"Sprache",on:"Ein",off:"Aus",sens:"Empfindlichkeit",scale:"Skalierung",dist:"Abstand",curve:"Kr\xFCmmung",size:"Gr\xF6\xDFe",quality:"Qualit\xE4t",apps:"Apps",recents:"Zuletzt",battery:"Akku",net:"Netzwerk",time:"Zeit",libAll:"Alle",libFilter:"Filter",libGames:"Spiele",centered:"Ansicht zentriert",langChanged:"Sprache ge\xE4ndert",langTitle:"Sprache",langContinue:"Weiter",langPick:"Sprache ausw\xE4hlen",notif:"Mitteilungen",noNotif:"Keine neuen Mitteilungen",profile:"Profil",dockSnapSlot:"Vordefinierter Dock-Platz",dockSnapDesc:"Halbtransparentes schwarzes Zielfenster beim Bewegen anzeigen",dockSnapHint:"Hier ablegen zum Einrasten",qualityHigh:"Hoch (1080p)",qualityMedium:"Mittel (890p)",qualityLow:"Niedrig (390p)",qualityAuto:"Automatisch"};ln.ko={...ln.en,desktop:"\uC791\uC5C5 \uACF5\uAC04",browser:"\uBE0C\uB77C\uC6B0\uC800",youtube:"YouTube",gallery:"\uAC24\uB7EC\uB9AC",settings:"\uC124\uC815",menu:"\uBA54\uB274",store:"\uC2A4\uD1A0\uC5B4",env:"\uD658\uACBD",keyboard:"\uD0A4\uBCF4\uB4DC",center:"\uC911\uC559 \uC815\uB82C",search:"\uC6F9 \uAC80\uC0C9",searchYt:"\uB3D9\uC601\uC0C1 \uAC80\uC0C9",open:"\uC5F4\uAE30",close:"\uB2EB\uAE30",general:"\uC77C\uBC18",hands:"\uD578\uB4DC \uD2B8\uB798\uD0B9",windows:"\uCC3D",dock:"\uB3C5",perf:"\uC131\uB2A5",language:"\uC5B8\uC5B4",on:"\uCF1C\uC9D0",off:"\uAEBC\uC9D0",sens:"\uAC10\uB3C4",scale:"\uD06C\uAE30 \uBE44\uC728",dist:"\uAC70\uB9AC",curve:"\uACE1\uB960",size:"\uD06C\uAE30",quality:"\uD654\uC9C8",apps:"\uC571",recents:"\uCD5C\uADFC \uD56D\uBAA9",battery:"\uBC30\uD130\uB9AC",net:"\uB124\uD2B8\uC6CC\uD06C",time:"\uC2DC\uAC04",libAll:"\uC804\uCCB4",libFilter:"\uD544\uD130",libGames:"\uAC8C\uC784",centered:"\uD654\uBA74\uC774 \uC911\uC559\uC5D0 \uB9DE\uCDB0\uC84C\uC2B5\uB2C8\uB2E4",langChanged:"\uC5B8\uC5B4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4",langTitle:"\uC5B8\uC5B4",langContinue:"\uACC4\uC18D",langPick:"\uC5B8\uC5B4 \uC120\uD0DD",notif:"\uC54C\uB9BC",noNotif:"\uC0C8 \uC54C\uB9BC \uC5C6\uC74C",profile:"\uD504\uB85C\uD544",dockSnapSlot:"\uB3C5 \uC0AC\uC804 \uC815\uC758 \uC2AC\uB86F",dockSnapDesc:"\uCC3D \uC774\uB3D9 \uC2DC \uBC18\uD22C\uBA85 \uAC80\uC740 \uC2AC\uB86F \uD45C\uC2DC",dockSnapHint:"\uC5EC\uAE30\uC5D0 \uB193\uC544 \uC2AC\uB86F\uC5D0 \uBC30\uCE58",qualityHigh:"\uB192\uC74C (1080p)",qualityMedium:"\uC911\uAC04 (890p)",qualityLow:"\uB0AE\uC74C (390p)",qualityAuto:"\uC790\uB3D9"};ln.it={...ln.en,desktop:"Spazio di lavoro",browser:"Browser",youtube:"YouTube",gallery:"Galleria",settings:"Impostazioni",menu:"Menu",store:"Store",env:"Ambienti",keyboard:"Tastiera",center:"Ricentra",search:"Cerca sul web",searchYt:"Cerca video",open:"Apri",close:"Chiudi",general:"Generale",hands:"Tracciamento mani",windows:"Finestre",dock:"Dock",perf:"Prestazioni",language:"Lingua",on:"Attivo",off:"Disattivo",sens:"Sensibilit\xE0",scale:"Scala",dist:"Distanza",curve:"Curvatura",size:"Dimensione",quality:"Qualit\xE0",apps:"App",recents:"Recenti",battery:"Batteria",net:"Rete",time:"Ora",libAll:"Tutti",libFilter:"Filtro",libGames:"Giochi",centered:"Ambiente centrato",langChanged:"Lingua modificata",langTitle:"Lingua",langContinue:"Continua",langPick:"Scegli la lingua",notif:"Notifiche",noNotif:"Nessuna notifica",profile:"Profilo",dockSnapSlot:"Slot predefinito Dock",dockSnapDesc:"Mostra finestra nera semitrasparente quando sposti le finestre",dockSnapHint:"Rilascia qui per agganciare",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Bassa (390p)",qualityAuto:"Automatica"};ln.nl={...ln.en,desktop:"Werkruimte",browser:"Browser",youtube:"YouTube",gallery:"Galerij",settings:"Instellingen",menu:"Menu",store:"Winkel",env:"Omgevingen",keyboard:"Toetsenbord",center:"Centreren",search:"Zoeken op het web",searchYt:"Video\u2019s zoeken",open:"Openen",close:"Sluiten",general:"Algemeen",hands:"Handtracking",windows:"Vensters",dock:"Dock",perf:"Prestaties",language:"Taal",on:"Aan",off:"Uit",sens:"Gevoeligheid",scale:"Schaal",dist:"Afstand",curve:"Kromming",size:"Grootte",quality:"Kwaliteit",apps:"Apps",recents:"Recent",battery:"Batterij",net:"Netwerk",time:"Tijd",libAll:"Alles",libFilter:"Filter",libGames:"Games",centered:"Omgeving gecentreerd",langChanged:"Taal gewijzigd",langTitle:"Taal",langContinue:"Doorgaan",langPick:"Kies je taal",notif:"Meldingen",noNotif:"Geen nieuwe meldingen",profile:"Profiel",dockSnapSlot:"Vooraf ingesteld Dock-vak",dockSnapDesc:"Toon halftransparant zwart vak tijdens verplaatsen van vensters",dockSnapHint:"Laat hier los om te plaatsen",qualityHigh:"Hoog (1080p)",qualityMedium:"Gemiddeld (890p)",qualityLow:"Laag (390p)",qualityAuto:"Automatisch"};ln.ru={...ln.en,desktop:"\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",browser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440",youtube:"YouTube",gallery:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",menu:"\u041C\u0435\u043D\u044E",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",env:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",keyboard:"\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",center:"\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0441\u0435\u0442\u0438",searchYt:"\u041F\u043E\u0438\u0441\u043A \u0432\u0438\u0434\u0435\u043E",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",general:"\u041E\u0431\u0449\u0438\u0435",hands:"\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0440\u0443\u043A",windows:"\u041E\u043A\u043D\u0430",dock:"\u0414\u043E\u043A",perf:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",language:"\u042F\u0437\u044B\u043A",on:"\u0412\u043A\u043B.",off:"\u0412\u044B\u043A\u043B.",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",scale:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431",dist:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",curve:"\u0418\u0437\u0433\u0438\u0431",size:"\u0420\u0430\u0437\u043C\u0435\u0440",quality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",apps:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",recents:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",battery:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F",net:"\u0421\u0435\u0442\u044C",time:"\u0412\u0440\u0435\u043C\u044F",libAll:"\u0412\u0441\u0435",libFilter:"\u0424\u0438\u043B\u044C\u0442\u0440",libGames:"\u0418\u0433\u0440\u044B",centered:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",langChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0451\u043D",langTitle:"\u042F\u0437\u044B\u043A",langContinue:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",langPick:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A",notif:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",noNotif:"\u041D\u0435\u0442 \u043D\u043E\u0432\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",profile:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",dockSnapSlot:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0442 \u0434\u043E\u043A\u0430",dockSnapDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u0447\u0451\u0440\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043E\u043A\u043E\u043D",dockSnapHint:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F",fingerTouch:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C (\u0431\u0435\u0437 \u0449\u0438\u043F\u043A\u0430)",fingerTouchDesc:"\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442; \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0443\u043A\u0438 \u0432\u043F\u0435\u0440\u0451\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 (\u0431\u0435\u0437 \u043B\u0443\u0447\u0430 \u0438 \u043A\u0440\u0443\u0436\u043A\u0430)",qualityHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qualityMedium:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qualityLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",qualityAuto:"\u0410\u0432\u0442\u043E"};var Ho=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E",table:"ja"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",table:"ru"},{id:"de",label:"Deutsch",table:"de"},{id:"ko",label:"\uD55C\uAD6D\uC5B4",table:"ko"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano",table:"it"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands",table:"nl"},{id:"pt-PT",label:"Portugu\xEAs (Portugal)",table:"pt"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),d1="pt",jc=n=>Ho.find(e=>e.id===n)||Ho.find(e=>e.id===d1);var Oh=()=>jc(Xe.lang).table||"pt",O=n=>(ln[Oh()]||ln.pt)[n]||ln.pt[n]||n,Dr=n=>Ho.some(e=>e.id===n&&e.table)?(Xe.lang=n,Ve(),Se("lang"),!0):!1,qc={},Ge=(n,e)=>((qc[n]||(qc[n]=[])).push(e),e),Se=(n,e)=>(qc[n]||[]).forEach(t=>t(e));function ht(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(ht._t),ht._t=setTimeout(()=>e.classList.remove("on"),2400)}var Ie=new Da,ye=new Gt(72,1,.05,120);ye.rotation.order="YXZ";var St=new Tn;Ie.add(St);var qt=1.55;ye.position.set(0,qt,0);Hc({settings:Xe,camera:ye,contentRoot:St});var Wa=fe?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new Cr({antialias:!0,alpha:!0});fe||(Wa.setClearColor(0,0),document.getElementById("gl").appendChild(Wa.domElement));var re=fe?new Fc:new Vc;document.getElementById("css3d").appendChild(re.domElement);if(fe){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}var Nh=Object.freeze({high:{id:"high",height:1080,label:"1080p",dpr:2},medium:{id:"medium",height:890,label:"890p",dpr:1.55},low:{id:"low",height:390,label:"390p",dpr:1}}),Xc="medium",Uh=()=>Xe.quality==="auto"?Xc:Nh[Xe.quality]?Xe.quality:"medium",m0=()=>Nh[Uh()]||Nh.medium;function g0(){let n=Uh();return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.55)}function y0(){var t,i;let n=Uh(),e=m0();document.documentElement.dataset.quality=Xe.quality,document.documentElement.dataset.qualityTier=n,document.documentElement.dataset.qualityRes=e.label,(i=(t=window.NativeXR)==null?void 0:t.setQuality)==null||i.call(t,n)}function Zc(){y0(),fe||(Ft.width=innerWidth,Ft.height=innerHeight);let n=Ft.width,e=Ft.height;ye.aspect=n/e,ye.updateProjectionMatrix(),Wa.setPixelRatio(g0()),Wa.setSize(n,e),re.setSize(n,e),Se("resize")}addEventListener("resize",Zc);addEventListener("orientationchange",()=>setTimeout(Zc,120));Zc();Ge("quality",Zc);var u1=Object.freeze(["passthrough","sunset","dusk","cinema","lagoon","virtual","palm","night","space","tropical","lakeside","dark"]),Fh=()=>[{id:"sunset",name:O("envSunset"),thumb:"./env/sunset.jpg"},{id:"passthrough",name:O("envPass"),thumb:null},{id:"dark",name:O("envDark"),thumb:"./env/dark.jpg"},{id:"dusk",name:O("envDusk"),thumb:"./env/dusk.jpg"},{id:"palm",name:O("envPalm"),thumb:"./env/palm.jpg"},{id:"lagoon",name:O("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:O("envVirtual"),thumb:"./env/virtual.jpg"},{id:"night",name:O("envNight"),thumb:"./env/night.jpg"},{id:"space",name:O("envSpace"),thumb:"./env/space.jpg"},{id:"cinema",name:O("envCinema"),thumb:"./env/cinema.jpg"},{id:"tropical",name:O("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:O("envLakeside"),thumb:"./env/lakeside.jpg"}];function Wi(n){var e,t,i;Xe.env=u1.includes(n)?n:"passthrough",Xe.envChosen=1,Xe.env!=="passthrough"&&(Xe.panorama=Xe.env),Ve(),Se("env",Xe.env),typeof window<"u"&&((e=window.nextvrTriggerCircleLoading)==null||e.call(window,"env",Xe.env)),(i=(t=window.NativeXR)==null?void 0:t.env)==null||i.call(t,Xe.env)}var xi=n=>Wi(n?"passthrough":Xe.panorama),Hn={ok:!1,has:!1,q:new nt,tmp:new nt,e:new ai},h1=new nt,p1=new nt(-Math.SQRT1_2,0,0,Math.SQRT1_2),f1=new D(0,0,1),$c=Math.PI/180;function m1(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*$c}function g1(n){n.alpha!=null&&(Hn.has=!0,Hn.e.set(n.beta*$c,n.alpha*$c,-n.gamma*$c,"YXZ"),Hn.tmp.setFromEuler(Hn.e),Hn.tmp.multiply(p1),Hn.tmp.multiply(h1.setFromAxisAngle(f1,-m1())),Hn.q.copy(Hn.tmp))}async function kr(){if(fe)return Hn.ok=Hn.has=!0,Se("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(ht("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",g1,!0),Hn.ok=!0,setTimeout(()=>{Hn.has||ht("Sem girosc\xF3pio: arraste para olhar")},1200),Se("gyro",!0),!0)}catch{return ht("Girosc\xF3pio indispon\xEDvel"),!1}}var y1=()=>Hn.ok&&Hn.has,Nr=null,Ga=0,Dh=0;addEventListener("pointerdown",n=>{fe||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Nr={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Nr&&(Ga-=(n.clientX-Nr.x)*.0032,Dh=Math.max(-1.2,Math.min(1.2,Dh-(n.clientY-Nr.y)*.0032)),Nr={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Nr=null);addEventListener("pointercancel",()=>Nr=null);function qi(){Wt.reset();let n=new ai().setFromQuaternion(ye.quaternion,"YXZ");St.rotation.y=n.y,St.position.set(0,0,0),ye.position.set(0,qt,0),Se("recenter"),ht(O("centered"))}var v0=[],Vo=n=>v0.push(n),p0=performance.now(),Gc=0,Lh=0,Ph=0,Wc=0,Ih=0,Yc=0,jn=null,x0=()=>{let n=performance.now();Ph>0&&(Wc+=(n-Ph)/1e3,Ih++,Wc>=1&&(Yc=Math.round(Ih/Wc),Wc=0,Ih=0)),Ph=n};function kh(n){let e=Math.min((n-p0)/1e3,.05);if(p0=n,fe||(y1()?(ye.quaternion.slerp(Hn.q,1-Math.exp(-e*12)),Ga&&(ye.rotateY(Ga),Ga=0)):(ye.quaternion.setFromEuler(new ai(Dh,ye.rotation.y+Ga,0,"YXZ")),Ga=0)),Wt.update(n,e),ye.position.set(Wt.out.x,qt+Wt.out.y,Wt.out.z),window.__gorillaStereoOverlay){re.render(Ie,ye),requestAnimationFrame(kh);return}for(let t of v0)t(e,n);if(Wa.render(Ie,ye),re.render(Ie,ye),Gc+=e,Lh++,Gc>=1){let t=Math.round(Lh/Gc);if(Xe.quality==="auto"){let s=fe&&Xe.handsOn&&Yc>=15?Math.min(t,Yc*2):t,r=s>=52?"high":s>=34?"medium":"low";r!==Xc&&(Xc=r,y0(),Wa.setPixelRatio(g0()),Se("quality-tier",Xc))}let i=document.getElementById("fps");i.textContent=Xe.showFps?t+" fps \xB7 "+m0().label+(fe&&Xe.handsOn?" \xB7 tracking "+Yc+" fps":"")+(fe&&Xe.handsOn?b1():""):"",Gc=0,Lh=0}requestAnimationFrame(kh)}var v1=typeof location<"u"&&(new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1")),x1=typeof location<"u"&&location.hash.includes("onboarding=skip");v1||(requestAnimationFrame(kh),x1&&!Xe.entryEnvChosen?xi(!0):Wi(Xe.env));if(fe){let n=new Ee,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),ye.quaternion.setFromRotationMatrix(n),ye.position.set(Wt.out.x,qt+Wt.out.y,Wt.out.z),ye.updateMatrixWorld(!0),e&&(St.rotation.y=new ai().setFromQuaternion(ye.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=ht,window.nextvrDiag=t=>{jn=t}}function b1(){if(!jn)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n(jn.camera);t!==null&&e.push("cam "+t);let i=n(jn.infer);return i!==null&&e.push("infer "+i+"ms"),jn.delegate&&e.push(String(jn.delegate).split(" ")[0]),typeof jn.narrow=="number"&&typeof jn.wide=="number"&&jn.narrow+jn.wide>0&&e.push("slots "+(jn.narrow>=jn.wide?1:2)),n(jn.stale)>0&&e.push("stale "+Math.round(jn.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var Kc=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},Jc=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var bi=[],ge={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},er=new Kc,qa=new Jc,Hh=Math.tan(36*Math.PI/180),w0=Hh*1.5,ed=!1,td=-1/0,Wo=2*w0,qo=2*Hh,Bh=null,S0=500;Hc({getHands:()=>({list:bi,lastAt:td})});var Vh=()=>ed;async function Xi(){return fe?(ed=!0,window.NativeXR.hands(!0),Se("hands",!0),!0):(ht("Hand tracking requires the Android camera pipeline."),!1)}function M0(n){for(let e of n)Se(`pinch${e}`,ge)}function Xo(){let n=er.cancel();qa.reset(),ge.down=ge.active=!1,ge.phase=er.phase,ge.hand=null,ge.mode="idle",S1(),M0(n)}function $o(){Xo()}function Gh(){Xo(),bi.length=0,ed=!1,td=-1/0,Se("phonehands",{hands:[],consumed:new Set,scaleX:Wo,scaleY:qo}),fe&&window.NativeXR.hands(!1),Se("hands",!1)}function Yo(n){let e=Wo*2*w0,t=qo*2*Hh;return{x:.5+n[0]/e,y:.5-n[1]/t}}var _1=250,b0=1.6,_0=.06,Zn={x:0,y:0},Go=0,Qc=0;function nd(n=performance.now()){if(!ge.active)return{x:ge.x,y:ge.y};let e=n-Go;if(!(e>0)||e>_1)return{x:ge.x,y:ge.y};let t=e/1e3,i=s=>Math.max(-_0,Math.min(_0,s));return{x:Math.min(1,Math.max(0,ge.x+i(Zn.x*t))),y:Math.min(1,Math.max(0,ge.y+i(Zn.y*t)))}}function w1(n,e,t=0){let i=t>0&&Qc>0?(t-Qc)/1e9:Go>0?(e-Go)/1e3:-1;if(ge.active&&i>.004&&i<.3){let s=r=>Math.max(-b0,Math.min(b0,r));Zn.x+=(s((n.x-ge.x)/i)-Zn.x)*.35,Zn.y+=(s((n.y-ge.y)/i)-Zn.y)*.35,Math.hypot(Zn.x,Zn.y)<.12&&(Zn.x=Zn.y=0)}else i>=0&&i<=.004||(Zn.x=Zn.y=0);Go=e,Qc=t>0?t:0}function S1(){Zn.x=Zn.y=0,Go=0,Qc=0}fe&&(window.nextvrHands=(n,e=1,t=1)=>{var d;if(!ed)return;x0();let i=performance.now();if(Wo=e,qo=t,td=i,S0=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),bi.splice(0,bi.length,...n.hands||[]),Se("handframe",{...n,hands:bi}),window.__gorillaStereoOverlay){(d=window.__gorillaOnHands)==null||d.call(window,i);return}let r={hands:bi,consumed:new Set,scaleX:Wo,scaleY:qo};if(d0(r),Se("phonehands",r),r.blockFar){Xo();return}let a=bi.filter(u=>!r.consumed.has(u.id)),o=er.down&&a.find(u=>u.id===er.handId)||a.find(u=>u.pinching)||[...a].sort((u,h)=>h.palmWidth-u.palmWidth)[0];if(!o){Xo();return}let l=Yo(o.aim);w1(l,i,Number(n.timestampNs)||0),ge.x=l.x,ge.y=l.y,ge.active=!0,ge.hand=o;let c=o.predicted?[]:er.update(o.id,o.pinching);c.includes("down")?qa.begin(o.id,l.x*Ft.width,l.y*Ft.height,i):c.includes("up")?qa.end():c.includes("cancel")&&qa.reset(),er.down&&!o.predicted&&qa.sample(o.id,l.x*Ft.width,l.y*Ft.height,i),ge.mode=qa.mode,ge.down=er.down,ge.phase=er.phase,M0(c),ge.down&&Se("pinchsample",ge)});var zh=document.getElementById("overlay");zh.getContext("2d").clearRect(0,0,zh.width,zh.height);Vo(()=>{var n,e;!window.__gorillaStereoOverlay&&fe&&Bh!==!!S.handDraw&&(Bh=!!S.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,Bh)),bi.length&&performance.now()-td>S0&&(bi.length=0,Xo(),Se("phonehands",{hands:[],consumed:new Set,scaleX:Wo,scaleY:qo}))});var M1=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),A1=Object.freeze({gauge:'<path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 3-4"/><circle cx="12" cy="14" r="1"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',edit3:'<path d="M12 20h9M4 17.5l-.5 3.5 3.5-.5L19 8.5 15.5 5z"/><path d="m14 6.5 3.5 3.5"/>',zap:'<path d="M13 2 4 13h7l-1 9 10-12h-7z"/>',maximize:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',distance:'<path d="M6 12h12M9 9l-3 3 3 3M15 9l3 3-3 3"/>',curve:'<path d="M3 17c3-8 15-8 18 0"/><path d="M4 20h2M18 20h2"/>',appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',vision:'<path d="M4.2 8.6C4.7 6.5 6.4 5 8.6 5h6.8c2.2 0 3.9 1.5 4.4 3.6l.8 4.2c.3 1.8-1.1 3.5-3 3.5h-1.5c-.6 0-1.2-.2-1.7-.7l-1.3-1.1h-2.2l-1.3 1.1c-.5.5-1.1.7-1.7.7H6.4c-1.9 0-3.3-1.7-3-3.5z"/><path d="M3.6 9 1.8 8.2M20.4 9l1.8-.8M12 6.4v4.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="M20 12H5"/><path d="m12 19-7-7 7-7"/>',star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.3 12 2"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),E1=Object.freeze({...A1,...M1});function te(n,e="ui-icon"){let t=E1[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var jt=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),jo=(n,e,t)=>Math.max(e,Math.min(t,n)),Vn=n=>Number.isFinite(n)?n:0;function Wh(n,e=0,t=1.55,i=null){let s=Vn(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,a=Vn(n==null?void 0:n.z),o=Number.isFinite(i)?i:Math.hypot(s,a);o<1e-5&&(o=jt.minDistance,s=0,a=-o);let l=jo(Math.atan2(-s,-a),-jt.maxYaw,jt.maxYaw);o=jo(o,jt.minDistance,jt.maxDistance);let c=Math.max(0,Vn(e)),d=t+jt.lowerEdgeFromEye+c,u=t+jt.upperEdgeFromEye-c;return r=d<=u?jo(r,d,u):t,{x:-Math.sin(l)*o,y:r,z:-Math.cos(l)*o}}function A0(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((Vn(e.x)-Vn(n.x))*t,(Vn(e.y)-Vn(n.y))*i)}function qh(n,e,t,i){return A0(n,e,t,i)>=jt.dragActivationPx}function E0(n,e,t,i){return A0(n,e,t,i)>=jt.resizeActivationPx}function Xh(n,e){let t=Vn(n==null?void 0:n.x),i=Vn(n==null?void 0:n.y),s=Vn(n==null?void 0:n.z),r=Vn(e==null?void 0:e.x)-t,a=Vn(e==null?void 0:e.y)-i,o=Vn(e==null?void 0:e.z)-s,l=Math.hypot(r,a,o);if(!Number.isFinite(l)||l<=jt.motionDeadZone)return{x:t,y:i,z:s};let d=Math.min(l,jt.maxMotionStep)/l;return{x:t+r*d,y:i+a*d,z:s+o*d}}var T1=Object.freeze({maxAngle:1.15});function Zo(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(T1.maxAngle,e))}function id(n,e){let t=Zo(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function sd(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function tr(n,e=jt.maxResize){let t=jo(Vn(e),jt.minResize,jt.maxResize);return jo(Number.isFinite(n)?n:1,jt.minResize,t)}function T0(n,e,t=1.55){let i=Math.max(1e-5,Vn(e)),s=Math.min(n-(t+jt.lowerEdgeFromEye),t+jt.upperEdgeFromEye-n);return tr(s/i)}function R0(n,e,t,i){return!(e>1)||!Number.isFinite(t)?tr(n,i):tr(n*t/e,i)}function C0(n,e){let t=tr(n),s=tr(e)-t;return Math.abs(s)<.004?t:tr(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function L0(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let a=0;a<i;a++)r.push({angle:a===0?0:a%2?e:-e,row:0});for(let a=0;a<s;a++)r.push({angle:s===1?0:a===0?-e/2:e/2,row:1});return r}var P0=1.22;function $h(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function I0({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=$h(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function N0(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var Ko=n=>Number.isFinite(n)?n:0,D0=(n,e,t)=>Math.max(e,Math.min(t,n));function Xa(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=Ko(n==null?void 0:n.x),a=Ko(n==null?void 0:n.y),o=Ko(n==null?void 0:n.z),l=a-s,c=Math.hypot(r,o),d=Math.hypot(r,l,o)||1e-6,u=Math.max(0,Ko(e)),h=Math.max(0,Ko(t));return{x:r,y:a,z:o,yaw:Math.atan2(-r,-o),pitch:c>1e-6?Math.atan2(l,c):l>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(u,c||1e-6),halfPitch:Math.atan2(h,d)}}function k0(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return Xa(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function Yh(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return Xa({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function R1(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,a=n.pitch-n.halfPitch,o=n.pitch+n.halfPitch,l=e.pitch-e.halfPitch,c=e.pitch+e.halfPitch,d=Math.min(i,r)-Math.max(t,s),u=Math.min(o,c)-Math.max(a,l);return d>0&&u>0?-Math.sqrt(d*u):Math.hypot(Math.max(-d,0),Math.max(-u,0))}function rd(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,a=Number.isFinite(t.gap)?t.gap:.03,o=n.box||Xa(n,n.hw||.5,n.hh||.35),l=0,c=0;for(let h of e){let f=R1(o,h);if(f<0){let g=f*f;l+=26e3*g+1e3,g>c&&(c=g)}else if(f<a){let g=a-f;l+=900*g*g}}let d=Math.hypot(o.x,o.z)||1e-6;l+=26*Math.abs(o.yaw),Math.abs(o.yaw)>r&&(l+=26*(Math.abs(o.yaw)-r)*40),d>s&&(l+=34*(d-s));let u=Number.isFinite(t.lift)?t.lift:o.y;return l+=Math.abs(o.y-u)*12,{score:l,overlap:c,yaw:o.yaw,radius:d}}function C1({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:a=3,ringStep:o=.16,rows:l=2,topRowStep:c=1.22}={}){let d=[],u=Number.isFinite(e)?e:n,h=[0];for(let f=1;f<=6;f++){let g=f*t;if(g>r+1e-9)break;h.push(g,-g)}for(let f=0;f<l;f++){let g=f===0?u:u+s*2*(c-1)+s;for(let y=0;y<a;y++){let p=i+y*o;for(let m of h){let x=D0(m,-r,r);d.push({x:Math.sin(x)*p,y:g,z:-Math.cos(x)*p,angle:x,row:f,radius:p})}}}return d}function O0({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,lift:l=null,rings:c=3,ringStep:d=.16,rows:u=2,gap:h=.03,topRowStep:f=1.22,improvement:g=1e-6}={}){let y={eye:t,desiredDistance:s,maxYaw:o,gap:h,lift:l??t},p=C1({eye:t,lift:l??t,step:i,distance:s,halfHeight:a,outerLimit:o,rings:c,ringStep:d,rows:u,topRowStep:f}),m=null;for(let x of p){let v=Xa(x,r,a),{score:w,overlap:A}=rd({...x,box:v},n,y),T={x:x.x,y:x.y,z:x.z,angle:x.angle,row:x.row,radius:x.radius,score:w,overlap:A,box:v};(!m||T.score<m.score-g)&&(m=T)}if(e){let x=Xa(e,r,a),{score:v,overlap:w}=rd({...e,box:x},n,y),A={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:v,overlap:w,box:x,desired:!0};(!m||A.score<=m.score+g)&&(m=A)}return m}function U0({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,gap:l=.03,maxShift:c=3}={}){let d={eye:t,desiredDistance:s,maxYaw:o,gap:l,lift:n.y},u=(p,m,x)=>Xa({x:p,y:m,z:x},r,a),h=rd({...n,box:u(n.x,n.y,n.z)},e,d);if(h.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:h.score,moved:!1,overlap:0};let f={x:n.x,y:n.y,z:n.z,score:h.score,overlap:h.overlap},g=Math.hypot(n.x,n.z)||s,y=Math.atan2(-n.x,-n.z);for(let p=1;p<=c;p++)for(let m of[1,-1]){let x=D0(y+m*p*i,-o,o),v=-Math.sin(x)*g,w=-Math.cos(x)*g,{score:A,overlap:T}=rd({x:v,y:n.y,z:w,box:u(v,n.y,w)},e,d);A<f.score&&(f={x:v,y:n.y,z:w,score:A,overlap:T})}return{...f,moved:f.x!==n.x||f.z!==n.z}}var ad={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3};function od(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}var $a=class{constructor({armMs:e=ad.armMs,graceMs:t=ad.graceMs,holdMs:i=ad.holdMs,progressHoldMs:s=ad.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,a=s&&r;if(this.open){if(a)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let o=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:o,active:!1}}if(a){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let o=i-this.startedAt;return o>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,o/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var vt=.00105,me=[],Ja=null,Gn={y:qt-.6,z:-1.7,h:.12};function K0(n=null){let e=[];for(let t of me)t===n||t.hidden||t.onboarding||e.push(k0(t));if(Si&&pt.offsetWidth>0){let t=Yh(wi);t&&e.push(t)}if(at&&In&&!ll&&at.element.offsetWidth>0){let t=Yh(In);t&&e.push(t)}return e}var sp=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:a=!1,chrome:o=!0,resizable:l=!0}){this.onboarding=a,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new D,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=Zo(a?0:S.win360?S.win360K:0),this.curveRadius=id(s,this.curve);let c=document.createElement("div");c.className="win-shell",c.dataset.windowId=e,c.dataset.resizeScale="1",c.style.width=s+"px";let d=document.createElement("div");d.className="win",d.style.width=s+"px",d.style.height=r+"px",d.innerHTML=`<div class="win-bar">
        <button class="win-new-tab-btn" data-win-new-tab type="button" title="Criar nova guia"><span class="win-new-tab-plus">+</span><span>Criar nova guia</span></button>
        <div class="win-grip" style="display:none"></div><div class="win-title" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden"></div>
        <div class="win-top-right-acts">
          <button class="win-btn" data-act="pin" aria-label="${O("repin")}" title="${O("repin")}">${te("crosshair")}</button>
          <button class="win-btn wide fold-btn" data-act="curve" aria-label="360\xB0" title="Dobra / 360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
          <button class="win-btn close" data-act="close" aria-label="${O("close")}" title="${O("close")}">${te("x")}</button>
        </div>
      </div><div class="win-body"></div>`,d.querySelector(".win-title").textContent=t,d.querySelector(".win-body").appendChild(i),d.addEventListener("pointerdown",()=>Kt(this),!0),d.querySelector(".win-bar").addEventListener("click",f=>{var p;if(f.target.closest("[data-win-new-tab]")){(p=window.nextvrOpenBrowserOption)==null||p.call(window,"new-tab");return}let y=f.target.closest("[data-act]");y&&(y.dataset.act==="close"?Nt(this):y.dataset.act==="curve"?this.setCurve(this.curve>0?0:Zo(S.win360K)):F0(this))}),d.addEventListener("click",f=>{var y;let g=f.target.closest('[data-act="pin"]');g&&!((y=d.querySelector(".win-bar"))!=null&&y.contains(g))&&F0(this)});let u=document.createElement("div");u.className="win-handle",u.title=O("moveWindow"),u.setAttribute("aria-label",O("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.hidden=!l,h.title=O("resize"),h.setAttribute("aria-label",O("resize")),h.innerHTML=te("move"),c.append(d,u,h),this.el=d,this.shell=c,this.handle=u,this.resizeHandle=h,c.dataset.curve=String(this.curve),(a||!o)&&(d.querySelector(".win-bar").hidden=!0),this.obj=new Ir(c),this.obj.scale.setScalar(vt*(this.onboarding?Yn.welcomeScale:S.winScale)),St.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=jh(s*vt,r*vt,this,this.hitSegments),this.bendHit(),this.grab=jh(260*vt,90*vt,this),this.grab.userData.isHandle=!0,this.resizeHit=jh(80*vt,80*vt,this),this.resizeHit.userData.isResize=!0,!fe){let f=g=>({x:g.clientX/Ft.width,y:g.clientY/Ft.height});u.addEventListener("pointerdown",g=>{g.stopPropagation();let y=f(g);fp(this,y.x,y.y,"desktop"),u.setPointerCapture(g.pointerId)}),u.addEventListener("pointermove",g=>{if(dt.win===this){let y=f(g);mp(y.x,y.y)}}),u.addEventListener("pointerup",Ms),u.addEventListener("pointercancel",Ms),h.addEventListener("pointerdown",g=>{g.stopPropagation();let y=f(g);ny(this,y.x,y.y),h.setPointerCapture(g.pointerId)}),h.addEventListener("pointermove",g=>{if(Bt.win===this){let y=f(g);iy(y.x,y.y)}}),h.addEventListener("pointerup",sr),h.addEventListener("pointercancel",sr)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new Rn(this.w*vt,this.h*vt,i,1),this.hitSegments=i,this.curveRadius=id(this.w,this.curve),this.bendHit(),this.apply(),Ni(),Se("wins",me)}setCurve(e){this.curve=Zo(e),this.curveRadius=id(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new Rn(this.w*vt,this.h*vt,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return sd(e,this.curveRadius)*vt}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,sd(e.getX(t)/vt,this.curveRadius)*vt);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*S.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(qt-e.position.y,i)*S.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?Yn.welcomeScale:S.winScale)*this.resizeScale;e.scale.setScalar(vt*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let a=(this.h/2+34)*vt*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-a),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation);let o=28;this.resizeHit.translateX((this.w/2+o)*vt*r),this.resizeHit.translateY(-(this.h/2+o)*vt*r),this.resizeHit.translateZ(this.bulge(this.w/2)+.003),this.resizeHit.scale.setScalar(r),e.updateMatrixWorld(!0),this.hit.updateMatrixWorld(!0),this.grab.updateMatrixWorld(!0),this.resizeHit.updateMatrixWorld(!0)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&dt.win===this&&Ms(),t&&Bt.win===this&&sr(),(s=(i=re).invalidate)==null||s.call(i))}};function jh(n,e,t,i=1){let s=new wt(new Rn(n,e,i,1),new on({visible:!1}));return s.userData.win=t,St.add(s),s}function Ni(){let n=me.some(o=>!o.onboarding&&!o.hidden);for(let o of me)o.onboarding&&(o.id==="spatial-launcher"?(n?(o.resizeScale=.88,o.target.set(0,qt-.22,-.84)):(o.resizeScale=1.24,o.target.set(0,qt-.01,-.84)),o.apply()):o.target.set(0,qt,-Yn.welcomeDistance));let e=me.filter(o=>o.pinned&&!o.onboarding&&!o.hidden),t=e.length;if(!t)return;let i=fe?S.winDist:-Gn.z+.5+(S.winDist-2.2),s=Math.max(...e.map(o=>o.w*o.resizeScale))*vt*S.winScale,r=fe?I0({width:s,dist:i,gap:.5,outerLimit:jt.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));if(L0(t,r).forEach(({angle:o,row:l},c)=>{let d=e[c],u=d.h*vt*S.winScale*d.resizeScale,h=Gn.y+Gn.h/2+.14+u/2,f=Math.sin(o)*i,g=-Math.cos(o)*i,y=l===0?h:Math.min(h+u*2*(P0-1)+u,qt+jt.upperEdgeFromEye-u);d.target.set(f,y,g)}),!fe)return;let a=Math.min(r,$h(s,i)*.6);for(let o of e){let l=o.w*vt*S.winScale*o.resizeScale/2,c=o.h*vt*S.winScale*o.resizeScale/2,d=U0({desired:{x:o.target.x,y:o.target.y,z:o.target.z},occupied:K0(o),eye:qt,step:a,distance:i,halfWidth:l,halfHeight:c,outerLimit:jt.maxYaw-.06,maxShift:4});o.target.set(d.x,d.y,d.z)}}Ge("recenter",Ni);Ge("resize",Ni);function Jt(n){var s,r,a;let e=me.find(o=>o.id===n.id);if(e)return Kt(e),e;let t=me.filter(o=>!o.onboarding&&!o.hidden);if(t.length>=5){let o=N0(t);o&&(ht(`${O("arcFull")}: ${o.title}`),Nt(o))}let i=new sp(n);if(me.push(i),Ni(),Kt(i),i.obj.position.copy(i.target),n.free&&P1(i,n.at),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),Ie.updateMatrixWorld(!0),!i.onboarding&&i.id!=="spatial-launcher"){i.shell.classList.add("win-circle-reveal");let o=i.shell.querySelector(".win-circle-loader");o||(o=document.createElement("div"),o.className="win-circle-loader",o.setAttribute("aria-hidden","true"),o.innerHTML='<svg viewBox="0 0 64 64" class="win-circle-svg"><circle cx="32" cy="32" r="24" class="win-circle-track"/><circle cx="32" cy="32" r="24" class="win-circle-prog"/></svg>',i.shell.appendChild(o)),o.classList.remove("done"),setTimeout(()=>{var l,c,d,u,h,f,g;(c=(l=o==null?void 0:o.classList)==null?void 0:l.add)==null||c.call(l,"done"),(h=(u=(d=i.shell)==null?void 0:d.classList)==null?void 0:u.remove)==null||h.call(u,"win-circle-reveal"),(g=(f=re).invalidate)==null||g.call(f)},520),typeof window<"u"&&((s=window.nextvrTriggerCircleLoading)==null||s.call(window,"app",i.title||i.id))}return(a=(r=re).invalidate)==null||a.call(r),Se("wins",me),i}function P1(n,e=null){n.pinned=!1;let t=n.w*vt*S.winScale*n.resizeScale/2,i=n.h*vt*S.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Gn.y+Gn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-S.winDist)||S.winDist,a=O0({occupied:K0(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-S.winDist},eye:qt,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:jt.maxYaw-.06,lift:s,rings:3,rows:1});a&&n.target.set(a.x,a.y,a.z)}function Nt(n){var s,r,a;if(typeof n=="string"&&(n=me.find(o=>o.id===n)),!n)return;let e=me.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);gt&&(gt.nativeId?gt.nativeId===i:n.el.contains(gt))&&li(!1),sl&&n.el.contains(sl)&&(sl=null),dt.win===n&&Ms(),Bt.win===n&&sr(),me.splice(e,1),(s=n._cleanupQB)==null||s.call(n),St.remove(n.obj),St.remove(n.hit),St.remove(n.grab),St.remove(n.resizeHit),n.shell.remove(),Ja===n&&(Ja=me[me.length-1]||null),Ni(),(a=(r=re).invalidate)==null||a.call(r),Se("wins",me)}function Kt(n){Ja!==n&&(Ja=n,n.lastFocus=performance.now(),me.forEach(e=>e.el.classList.toggle("focus",e===Ja)))}function F0(n){var e,t,i,s;n.pinned=!0,n.shell.classList.remove("free"),Ni(),n.obj.position.copy(n.target),n.apply(),(t=(e=re).invalidate)==null||t.call(e),(s=(i=re).render)==null||s.call(i,Ie,ye)}var al=()=>Ja,ci=new No,ud=new je,dt={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},Bt={win:null,start:null,active:!1,startScale:1,startDistance:1},xn={source:null,start:null,active:!1,plane:null,anchor:null},oi=document.createElement("div");oi.className="win-drop-slot";oi.dataset.windowId="drop-slot";oi.hidden=!0;oi.innerHTML='<div class="win-drop-slot-inner"><span class="win-drop-slot-badge"></span></div>';var nr=new Ir(oi);nr.visible=!1;St.add(nr);var hd=null,pd=!1;function I1(n){let e=fe?S.winDist:-Gn.z+.5+(S.winDist-2.2),t=n.h*vt*S.winScale*n.resizeScale,i=Gn.y+Gn.h/2+.14+t/2,s=rr||0,r=.56;return[0,-r,r].map(a=>{let o=s+a;return new D(Math.sin(o)*e,i,-Math.cos(o)*e)})}function J0(n){var g;if(!n||S.spatialLauncher||S.dockSnapSlot===0){Q0();return}let e=I1(n),t=me.filter(y=>y!==n&&!y.onboarding&&!y.hidden),i=e.filter(y=>!t.some(p=>p.obj.position.distanceTo(y)<.22)),s=i.length?i:e,r=s[0],a=n.obj.position.distanceTo(s[0]);for(let y=1;y<s.length;y++){let p=n.obj.position.distanceTo(s[y]);p<a&&(r=s[y],a=p)}hd=r;let o=(g=dt.anchor)!=null&&g.center?St.worldToLocal(dt.anchor.center.clone()):n.obj.position;pd=n.obj.position.distanceTo(o)>.04&&a<=.16,oi.style.width=n.w+"px",oi.style.height=n.h+"px";let c=oi.querySelector(".win-drop-slot-badge");c&&(c.textContent=O("dockSnapHint")),oi.classList.toggle("is-ready",pd),oi.hidden=!1,nr.position.copy(r);let d=Math.atan2(-r.x,-r.z)*S.winCurve,u=Math.hypot(r.x,r.z)||.001,h=Math.atan2(qt-r.y,u)*S.winTilt*-1;nr.rotation.set(h,d,0,"YXZ");let f=S.winScale*n.resizeScale;nr.scale.setScalar(vt*f),nr.visible=!0}function Q0(){var n,e;hd=null,pd=!1,(nr.visible||!oi.hidden)&&(nr.visible=!1,oi.hidden=!0,oi.classList.remove("is-ready"),(e=(n=re).invalidate)==null||e.call(n))}function Xr(n,e,t=ci){return ye.updateMatrixWorld(!0),St.updateMatrixWorld(!0),ud.set(n*2-1,1-e*2),t.setFromCamera(ud,ye),t}function N1(n){return n.h*vt*S.winScale*n.resizeScale/2}function D1(n,e,t=null){let i=Wh(e,N1(n),qt,t);return new D(i.x,i.y,i.z)}function fp(n,e,t,i="handle",s=null){if(n.onboarding||Bt.win)return!1;dt.win&&Ms(),Kt(n),Xr(e,t);let r=n.obj.getWorldPosition(new D),a=new ii().setFromNormalAndCoplanarPoint(ci.ray.direction.clone(),r),o=ci.ray.intersectPlane(a,new D);if(!o)return!1;let l=St.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(dt,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:a,anchor:{hit:o.clone(),center:r.clone(),radius:c,applied:new D}}),!0}function k1(){let n=dt.win;!n||dt.active||(dt.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Ni(),J0(n))}function mp(n,e){let t=dt.win;if(!t)return!1;Xr(n,e);let i=ci.ray.intersectPlane(dt.plane,new D);if(!i)return!1;if(!dt.active){if(!qh(dt.start,{x:n,y:e},Ft.width,Ft.height))return!1;k1()}let s=dt.anchor,r=i.clone().sub(s.hit);s.applied.copy(Xh(s.applied,r));let a=s.center.clone().add(s.applied),o=D1(t,St.worldToLocal(a),s.radius);return t.target.copy(o),t.obj.position.copy(t.target),J0(t),!0}function Ms(){let n=dt.win;n&&(pd&&hd&&(n.target.copy(hd),n.obj.position.copy(n.target),n.apply()),n.shell.classList.remove("moving")),Q0(),Object.assign(dt,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function ey(n,e,t="pinch"){if(!Si||dt.win||Bt.win)return!1;xn.start&&Ts(),Xr(n,e);let i=Ln.getWorldPosition(new D),s=new ii().setFromNormalAndCoplanarPoint(ci.ray.direction.clone(),i),r=ci.ray.intersectPlane(s,new D);return r?(Object.assign(xn,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new D}}),pt.classList.add("grab-armed"),At.setAttribute("aria-pressed","true"),!0):!1}function O1(){!xn.start||xn.active||(xn.active=!0,pt.classList.remove("grab-armed"),pt.classList.add("moving"))}function gp(n,e){if(!xn.start)return!1;Xr(n,e);let t=ci.ray.intersectPlane(xn.plane,new D);if(!t)return!1;if(!xn.active){if(!qh(xn.start,{x:n,y:e},Ft.width,Ft.height))return!1;O1()}let i=xn.anchor,s=t.clone().sub(i.hit);i.applied.copy(Xh(i.applied,s));let r=i.center.clone().add(i.applied),a=St.worldToLocal(r),o=Wh(a,Gn.h/2,qt),l=Math.max(qt-.55,Math.min(qt-.08,o.y));return Hr=new D(o.x,l,o.z),rr=Math.atan2(-o.x,-o.z),to(),!0}function Ts(){pt==null||pt.classList.remove("grab-armed","moving"),At==null||At.setAttribute("aria-pressed","false"),Object.assign(xn,{source:null,start:null,active:!1,plane:null,anchor:null})}function ty(n,e,t){ye.updateMatrixWorld(!0),St.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new D).project(ye),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*Ft.width,(t-r)*Ft.height)}function ny(n,e,t){return n.onboarding||dt.win?!1:(Bt.win&&sr(),Kt(n),Object.assign(Bt,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,ty(n,e,t))}),!0)}function iy(n,e){let t=Bt.win;if(!t)return!1;if(!Bt.active){if(!E0(Bt.start,{x:n,y:e},Ft.width,Ft.height))return!1;Bt.active=!0,t.shell.classList.add("resizing")}let i=t.h*vt*S.winScale/2,s=Math.max(Bt.startScale,T0(t.obj.position.y,i,qt)),r=R0(Bt.startScale,Bt.startDistance,ty(t,n,e),s);return t.resizeScale=tr(C0(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function sr(){Bt.win&&Bt.win.shell.classList.remove("resizing"),Object.assign(Bt,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function As(n,e){Xr(n,e);let t=[];for(let o of me)o.hidden||(o.onboarding||t.push(o.resizeHit,o.grab),t.push(o.hit));let i=ci.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),a=i.object.geometry.parameters;return{win:s,u:r.x/a.width+.5,v:.5-r.y/a.height,distance:i.distance}}var sy=As;window.windowHitAt=As;var ct=null,pn=null,U1=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function F1(n,e,t,i,s){var l,c;let r=s?U1(s):null;e===0&&(n.target=r,n.activation=r);let a=n.target||r;if(!a)return;let o=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";a.dispatchEvent(new PointerEvent(o,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function Qo(n,e,t=n.x,i=n.y,s=null){var r,a;if(n.id==="shell"&&((r=n.win)!=null&&r.onboarding))F1(n,e,t,i,s);else if(window.NativeXR.handTouch(n.id,e,t,i),e===1&&s){let o=(a=s.closest)==null?void 0:a.call(s,"[data-qb-url],[data-qb-act]");o&&o.click()}}function yp(n,e,t){let i=n.getBoundingClientRect(),s=i.left+e*(i.width||n.offsetWidth),r=i.top+t*(i.height||n.offsetHeight),a=document.elementFromPoint(s,r);if(a&&n.contains(a))return a;let o=null,l=c=>{for(let d of c.children){let u=d.getBoundingClientRect();u.width>0&&u.height>0&&s>=u.left&&s<=u.right&&r>=u.top&&r<=u.bottom&&(o=d),l(d)}};return l(n),o||n}function Gr(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),a=document.elementFromPoint(r.left+i,r.top+s)||vp(t,i,s);if(e===0&&!(a!=null&&a.closest("[data-native-browser],[data-native-app]"))){let g=Y1(a);g?li(!0,g):li(!1)}if(a==null?void 0:a.closest("[data-native-xr]")){ct=null;return}let l=a==null?void 0:a.closest("[data-native-app]");if(l){let g=l.getBoundingClientRect(),y=Ch(l.offsetWidth,l.offsetHeight,+(l.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!y&&!ct)return;let p="app:"+l.dataset.nativeApp;if(ct&&ct.id!==p&&(Qo(ct,3),ct=null),e===0){if(!y)return;ct={id:p,win:n.win,x:y.u,y:y.v}}ct&&ct.id===p&&(y||e!==2)&&(y&&(ct.x=y.u,ct.y=y.v),Qo(ct,e,ct.x,ct.y)),(e===1||e===3)&&(ct=null);return}let c=a==null?void 0:a.closest("[data-native-browser]"),d=c==null?void 0:c.getBoundingClientRect(),u=c?c.dataset.nativeBrowser:"shell",h=r.left+i-((d==null?void 0:d.left)||0),f=r.top+s-((d==null?void 0:d.top)||0);ct&&ct.id!==u&&(Qo(ct,3),ct=null,e!==0)||(e===0&&(ct={id:u,win:n.win,x:h,y:f}),ct&&ct.id===u&&(ct.x=h,ct.y=f,Qo(ct,e,h,f,a)),(e===1||e===3)&&(ct=null))}function ry(){ct&&Qo(ct,3),ct=null,pn=null,Ms(),sr(),Ts()}Ge("pinchcancel",ry);function ir(n,e){if(fe){Gr(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=vp(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function vp(n,e,t){let i=null,s=r=>{for(let a of r.children){let o=B1(a,n);e>=o.l&&e<=o.r&&t>=o.t&&t<=o.b&&(i=a,s(a))}};return s(n),i||n}function B1(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}var tl=null,fd=!1;function xp(){tl&&(clearTimeout(tl),tl=null)}Ge("pinchdown",()=>{var s,r;xp(),fd=!1;let n=As(ge.x,ge.y),e=xd(ge.x,ge.y),t=q1(ge.x,ge.y),i=qr(ge.x,ge.y);if(n!=null&&n.resize){ny(n.win,ge.x,ge.y);return}if(n!=null&&n.handle){fp(n.win,ge.x,ge.y,"handle",(s=ge.hand)==null?void 0:s.id);return}if(t&&(!n||t.distance<=(n.distance??1/0)+.12)&&(!e||t.distance<e.distance)){ey(ge.x,ge.y,"pinch");return}if(i&&(!n||i.distance<=(n.distance??1/0)+.15)&&(!e||i.distance<e.distance)){il("down");return}if(e&&(!n||e.distance<n.distance)){bd(e.button);return}if(n){Kt(n.win);let a=yp(n.win.el,n.u,n.v);((r=a==null?void 0:a.closest)==null?void 0:r.call(a,'[data-spatial-builtin="browser"], [data-app="browser"]'))&&(tl=setTimeout(()=>{tl=null,fd=!0,pn=null,ol("spatial")},2e3)),pn={win:n.win,hit:n};return}il("down")});Ge("pinchsample",()=>{ji&&py(performance.now()),pn&&ge.mode==="drag"&&(ir(pn.hit,"down"),pn=null)});Ge("pinchup",()=>{if(xp(),fd){fd=!1,pn=null;return}if(ji){Rs();return}if(_i>=0||Br||Ka){il("up");return}if(pn&&ge.mode==="drag"&&(ir(pn.hit,"down"),pn=null),pn){let t=As(ge.x,ge.y),i=t&&!t.handle&&!t.resize&&t.win===pn.win?t:pn.hit;pn=null,ir(i,"down"),ir(i,"up");return}if(ct){let t=As(ge.x,ge.y);t&&t.win===ct.win&&!t.handle&&!t.resize?Gr(t,1):ry();return}if(Bt.win){sr();return}if(dt.win){Ms();return}if(xn.start){gp(ge.x,ge.y),Ts();return}let n=qr(ge.x,ge.y),e=As(ge.x,ge.y);if(n&&(!e||n.distance<=(e.distance??1/0)+.15)){il("up");return}if(e&&!e.handle&&!e.resize){ir(e,"up");return}il("up")});var pt=document.createElement("div");pt.className="dock";var Mi=document.createElement("div");Mi.className="browser-tab-popup dock-browser-popup";Mi.dataset.browserTabMenu="dock";Mi.hidden=!0;Mi.innerHTML=`
  <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
  <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
`;Mi.addEventListener("click",n=>{var i;let e=n.target.closest("[data-browser-opt]");if(!e)return;n.stopPropagation();let t=e.dataset.browserOpt||"new-tab";Wr(),(i=window.nextvrOpenBrowserOption)==null||i.call(window,t)});var At=document.createElement("button");At.type="button";At.className="dock-grab";At.title=O("moveDock");At.setAttribute("aria-label",O("moveDock"));At.setAttribute("aria-pressed","false");var Ln=new Ir(pt);St.add(Ln);var wi=new wt(new Rn(1,1),new on({visible:!1})),Ii=new wt(new Rn(1,1),new on({visible:!1})),$i=new wt(new Rn(.26,.14),new on({visible:!1,side:Fn}));St.add(wi,Ii,$i);function Wr(){var e,t,i,s;Mi.hidden=!0;let n=document.querySelector('[data-browser-tab-menu="spatial"]');n&&(n.hidden=!0),(t=(e=re).invalidate)==null||t.call(e),(s=(i=re).render)==null||s.call(i,Ie,ye)}function ol(n="dock"){var e,t,i,s,r,a;if(n==="spatial"){let o=document.querySelector('[data-browser-tab-menu="spatial"]');o&&(o.hidden=!1)}else{let o=vd("browser");o&&(Mi.style.left=`${o.offsetLeft+o.offsetWidth/2}px`),Mi.hidden=!1,to()}(t=(e=window.NativeXR)==null?void 0:e.click)==null||t.call(e),(s=(i=re).invalidate)==null||s.call(i),(a=(r=re).render)==null||a.call(r,Ie,ye)}typeof window<"u"&&(window.nextvrShowBrowserTabMenu=ol,window.nextvrHideBrowserTabMenus=Wr);if(!fe){let n=e=>({x:e.clientX/Ft.width,y:e.clientY/Ft.height});At.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);ey(t.x,t.y,"desktop")&&At.setPointerCapture(e.pointerId)}),At.addEventListener("pointermove",e=>{if(xn.source==="desktop"){let t=n(e);gp(t.x,t.y)}}),At.addEventListener("pointerup",e=>{xn.source==="desktop"&&(Ts(),At.hasPointerCapture(e.pointerId)&&At.releasePointerCapture(e.pointerId))}),At.addEventListener("pointercancel",Ts)}var Si=!0,Za=!1;function Xt(n){var e,t;Si=!!n,Ln.visible=Si,Si||(_i=-1,Ts()),(t=(e=re).invalidate)==null||t.call(e)}var ay=()=>Si;function Qt(n){var t,i;let e=!!n;return Za===e||(Za=e,pt.style.setProperty("display",e?"none":"","important"),wi.visible=Ii.visible=!e,Xt(!e),(i=(t=re).invalidate)==null||i.call(t)),Za}var yd=()=>Za,z1=[],Pn=[],vd=n=>Pn.find(e=>e.dataset.id===n)||null,rp=[],H1=te("wifi"),V1='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',G1='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function oy(n){z1=n,Pn=[],rp.length=0,pt.innerHTML="";for(let e of n){if(e.kind==="sep"){pt.appendChild(W1());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",pt.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=S.profileAvatar?`<img src="${S.profileAvatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`:G1,S.profileName&&(t.title=S.profileName);else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${H1}</span><span class="dk-bat">${V1}<span class="dk-bat-percent"></span></span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),rp.push({b:t,win:e.win})}if(e.id==="browser"){let i=null;t.addEventListener("pointerdown",()=>{clearTimeout(i),i=setTimeout(()=>{t.dataset.holdConsumed="1",ol("dock")},2e3)});let s=()=>{clearTimeout(i),i=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s)}t.addEventListener("click",()=>{if(t.dataset.holdConsumed==="1"){t.dataset.holdConsumed="0";return}Wr(),e.run()}),pt.appendChild(t),Pn.push(t)}pt.appendChild(Mi),At.title=O("moveDock"),At.setAttribute("aria-label",O("moveDock")),pt.appendChild(At),bp(),_p(),eo(),ly(),to()}function W1(){let n=document.createElement("span");return n.className="dock-sep",n}function ly(){for(let{b:n,win:e}of rp){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",me.some(i=>i.id===e))}}Ge("wins",ly);var Yi={time:"--:--",date:"",batteryLevel:null,charging:!1,online:navigator.onLine},Ki=()=>({...Yi});function md(){Se("device-status",Ki())}function bp(){let n=pt.querySelector(".dk-time"),e=new Date;Yi.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Yi.date=e.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n&&(n.textContent=Yi.time),md()}bp();setInterval(bp,1e3);function _p(){let n=pt.querySelector(".dk-wifi");Yi.online=navigator.onLine,n&&(n.style.opacity=Yi.online?"1":".35"),md()}addEventListener("online",_p);addEventListener("offline",_p);var Qa=null;function eo(){let n=pt.querySelector(".dk-bat");if(!Qa){n&&(n.style.display="none"),Yi.batteryLevel=null,Yi.charging=!1,md();return}let e=Math.max(0,Math.min(1,Number(Qa.level)||0)),t=!!Qa.charging;if(Yi.batteryLevel=e,Yi.charging=t,n){n.style.display="";let i=n.querySelector(".dk-bat-percent"),s=n.querySelector(".fill");s&&(s.setAttribute("width",String(Math.max(1.6,13*e))),s.setAttribute("fill",t?"#8de6c8":e<.2?"#ff6b6b":"currentColor")),i&&(i.textContent=`${Math.round(e*100)}%`),n.title=`${Math.round(e*100)}%${t?" \xB7 carregando":""}`}md()}window.nextvrBattery=n=>{try{let e=typeof n=="string"?JSON.parse(n):n;e&&typeof e.level=="number"&&(Qa=e,eo())}catch{}};!fe&&navigator.getBattery&&navigator.getBattery().then(n=>{Qa=n,n.addEventListener("levelchange",eo),n.addEventListener("chargingchange",eo),eo()}).catch(()=>{});var _i=-1,Br=null,Zh={x:-1,y:-1},nl=null,Ka=!1;function ap(){nl&&(clearTimeout(nl),nl=null)}Ge("pinchcancel",()=>{_i=-1,Br=null,Ka=!1,ap(),xp()});function il(n){var s,r,a;let e=qr(ge.x,ge.y);if(n==="down"){if(ap(),Ka=!1,Zh={x:ge.x,y:ge.y},e!=null&&e.popupOpt){_i=-1,Br=e.popupOpt;return}Br=null,_i=e?e.i:-1,_i>=0&&((r=(s=Pn[_i])==null?void 0:s.dataset)==null?void 0:r.id)==="browser"&&(nl=setTimeout(()=>{nl=null,Ka=!0,ol("dock")},2e3));return}if(ap(),Ka){Ka=!1,_i=-1,Br=null;return}let t=_i,i=Br;if(_i=-1,Br=null,n==="up"){let o=(e==null?void 0:e.popupOpt)||i;if(o){Wr(),(a=window.nextvrOpenBrowserOption)==null||a.call(window,o);return}let l=e&&e.i===t?e.i:-1;if(l<0&&t>=0&&Math.hypot(ge.x-Zh.x,ge.y-Zh.y)<.085&&(l=t),l<0)return;let c=Pn[l];c&&(c.style.transform="scale(.88)",setTimeout(()=>c.style.transform="",150),c.click())}}function q1(n,e){return!Si||!op?null:(Xr(n,e),Ii.updateMatrixWorld(!0),ci.intersectObject(Ii,!1)[0]||null)}function qr(n,e){if(!Si)return null;if(Xr(n,e),!Mi.hidden){$i.updateMatrixWorld(!0);let o=ci.intersectObject($i,!1)[0];if(o){let c=$i.worldToLocal(o.point.clone()).y>=0?"new-tab":"incognito-tab",d=Mi.querySelector(`[data-browser-opt="${c}"]`);return{i:-1,popupOpt:c,el:d,distance:o.distance}}}wi.updateMatrixWorld(!0);let t=ci.intersectObject(wi,!1)[0];if(!t)return null;let i=wi.worldToLocal(t.point.clone()),s=wi.geometry.parameters,r=(i.x/s.width+.5)*pt.offsetWidth,a=(.5-i.y/s.height)*pt.offsetHeight;for(let o=0;o<Pn.length;o++){let l=Pn[o];if(r>=l.offsetLeft-4&&r<=l.offsetLeft+l.offsetWidth+4&&a>=l.offsetTop-4&&a<=l.offsetTop+l.offsetHeight+4)return{i:o,distance:t.distance,button:l}}return null}var B0="",op="",rr=0,Hr=null;Ge("recenter",()=>{rr=0,ws.ready=!1,Hr=null,Ts();for(let n of me)!n.onboarding&&!n.hidden&&(n.pinned=!0,n.shell.classList.remove("free"));to(),Ni();for(let n of me)n.hidden||n.apply()});Ge("summon-dock",()=>{var e;ye.updateMatrixWorld(!0),St.updateMatrixWorld(!0);let n=ye.getWorldDirection(new D).transformDirection(St.matrixWorld.clone().invert());rr=Math.atan2(-n.x,-n.z),ws.ready=!1,Hr=null,Ts(),to(),(e=window.NativeXR)==null||e.click()});function to(){let n=Ft.width>Ft.height,e=(fe?Yn.dockDistance:n?1.42:1.75)*S.dockDist,t=fe?-Yn.dockDrop:n?-.5:-.6,i=vt*(fe?Yn.dockScale:n?.74:.88)*S.dockSize;Hr?Ln.position.copy(Hr):Ln.position.set(-Math.sin(rr)*e,qt+t,-Math.cos(rr)*e),Ln.rotation.set(.26,rr,0,"YXZ"),Ln.scale.setScalar(i);let s=pt.offsetWidth*i,r=pt.offsetHeight*i,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==B0&&(B0=a,wi.geometry.dispose(),wi.geometry=new Rn(s,r),Gn.h=r,Hr||Ni());let o=At.offsetWidth*i,l=At.offsetHeight*i,c=o.toFixed(3)+"x"+l.toFixed(3);o>0&&c!==op&&(op=c,Ii.geometry.dispose(),Ii.geometry=new Rn(o,l)),wi.position.copy(Ln.position),wi.rotation.copy(Ln.rotation),$i.position.copy(Ln.position),$i.rotation.copy(Ln.rotation);let d=vd("browser"),u=d&&pt.offsetWidth>0?(d.offsetLeft+d.offsetWidth*.5-pt.offsetWidth*.5)*i:0;$i.translateX(u),$i.translateY((pt.offsetHeight*.5+52)*i),$i.translateZ(.005),Ii.position.copy(Ln.position),Ii.rotation.copy(Ln.rotation),Ii.translateY((pt.offsetHeight/2-At.offsetTop-At.offsetHeight/2)*i),Ii.translateZ(.004),!Hr&&(Gn.y!==Ln.position.y||Gn.z!==-e)&&(Gn.y=Ln.position.y,Gn.z=-e,Ni())}var X1=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],z0={q:"1",w:"2",e:"3",r:"4",t:"5",y:"6",u:"7",i:"8",o:"9",p:"0",a:"@",s:"#",d:"$",f:"%",g:"&",h:"*",j:"-",k:"+",l:"(",\u00E7:")",z:"!",x:'"',c:"'",v:":",b:";",n:"/",m:"?"},H0=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],$1=0,at=null,In=null,gt=null,ja=null,Zi=!1,Vr=!1,ll=!1,Es=window.__nextvrTyping,Y1=n=>(Es==null?void 0:Es.editable(n))||null,sl=null,lp=1,cy=2,gd=3,j1=fe;function ar(n){var t,i;if(ll=!!n,!at)return!1;let e=!!n;return at.visible=!e,at.element.style.setProperty("display",e?"none":"","important"),In&&(In.visible=!e),e&&Rs(),(i=(t=re).invalidate)==null||i.call(t),!0}var dy=()=>!!at&&at.visible!==!1,uy=()=>ll;function Z1(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&me.find(s=>s.shell===t)||null}function li(n,e){var s,r,a,o,l,c,d,u,h,f,g,y;if(!n){fe&&console.log("kb close; was serving",(gt==null?void 0:gt.nativeId)||(gt==null?void 0:gt.tagName)||"nothing"),Rs(),at&&(St.remove(at),St.remove(In),at.element.remove(),at=null),gt=null,ja=null,Zi=Vr=!1,ws.ready=!1,(r=(s=re).invalidate)==null||r.call(s),(o=(a=re).render)==null||o.call(a,Ie,ye);return}let t=e||sl;if(gt=t&&!t.nativeId?(Es==null?void 0:Es.focus(t))||null:t||null,gt&&!gt.nativeId&&(sl=gt),ja=Z1(gt),fe&&console.log("kb open for",(gt==null?void 0:gt.nativeId)||(gt==null?void 0:gt.tagName)||"nothing","in window",(ja==null?void 0:ja.id)??"none"),at){cp(),Ie.updateMatrixWorld(!0),(c=(l=re).invalidate)==null||c.call(l),(u=(d=re).render)==null||u.call(d,Ie,ye);return}let i=document.createElement("div");i.className="kb";for(let p of X1){let m=document.createElement("div");m.className="kb-row";for(let x of p){let v=typeof x=="string"?x:x.k,w=document.createElement("button");w.className="key"+(typeof x=="string"?"":" "+x.cls),typeof x=="string"?(w.textContent=v,z0[v]&&(w.dataset.sub=z0[v])):x.icon?(w.innerHTML=te(x.icon),w.setAttribute("aria-label",x.label),w.title=x.label):w.textContent=x.lbl||v,w.dataset.k=v,m.appendChild(w)}i.appendChild(m)}i.addEventListener("click",p=>{let m=p.target.closest("[data-k]");m&&(bd(m),Rs())}),at=new Ir(i),at.scale.setScalar(vt*(fe?Yn.keyboardScale:.9)),St.add(at),In=new wt(new Rn(1,1),new on({visible:!1})),St.add(In),cp(),Ie.updateMatrixWorld(!0),(f=(h=re).invalidate)==null||f.call(h),(y=(g=re).render)==null||y.call(g,Ie,ye)}function K1(){Zi?Vr?(Zi=!1,Vr=!1):Vr=!0:(Zi=!0,Vr=!1),hy()}function wp(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@");if(t===gd){e&&e.classList.remove("hot"),s&&Kh(n,n,!!i,gd);return}if(t===lp){if(fe&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){li(!1);return}if(n==="\u21E7"){K1();return}if(n==="@lang")return;if(n==="@mic"){ht(O("micOff"));return}if(n==="@emoji"){Kh(n,H0[$1++%H0.length],!1,lp);return}}Kh(n,n,n==="\u232B"||n==="\u23CE"?!1:void 0,t)}function Kh(n,e,t,i){if(!gt)return!1;let s=t===void 0?Zi:t;return gt.nativeId?window.NativeXR.key(gt.nativeId,e,!!s,i||0):Es==null||Es.key(n,!!s,i||0),j1&&i!==cy&&console.log("kb key ->",gt.nativeId||gt.tagName+"."+(gt.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==gd&&s&&Zi&&!Vr&&(Zi=!1,hy()),!0}function hy(){if(at){for(let n of at.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=Zi?Vr?"lock":"once":"";for(let n of at.element.querySelectorAll("[data-k]")){let e=n.dataset.k;e.length===1&&/[a-zç]/i.test(e)&&(n.textContent=Zi?e.toUpperCase():e.toLowerCase())}}}var V0="",J1=.35,ws={yaw:0,ready:!1},Q1=n=>Math.atan2(Math.sin(n),Math.cos(n));function eA(){let n=ja;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return rr}function cp(n=0){if(!at)return;let e=eA();ws.ready?ws.yaw+=Q1(e-ws.yaw)*(1-Math.exp(-n*7)):(ws.yaw=e,ws.ready=!0);let t=ws.yaw,i=fe?Yn.keyboardDistance:-Gn.z-.35;at.position.set(-Math.sin(t)*i,qt-(fe?Yn.keyboardDrop:.68),-Math.cos(t)*i),at.rotation.set(-Math.PI/2+J1,t,0,"YXZ");let s=at.element.offsetWidth*at.scale.x,r=at.element.offsetHeight*at.scale.x,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==V0&&(V0=a,In.geometry.dispose(),In.geometry=new Rn(s,r)),In.position.copy(at.position),In.rotation.copy(at.rotation)}var tA=700,nA=90,iA=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),ji=null,rl=0;function xd(n,e){var o,l;if(!at||ll)return null;ud.set(n*2-1,-(e*2-1)),ci.setFromCamera(ud,ye);let t=ci.intersectObject(In,!1)[0];if(!t)return null;let i=In.worldToLocal(t.point.clone()),s=In.geometry.parameters,r=(i.x/s.width+.5)*at.element.offsetWidth,a=(.5-i.y/s.height)*at.element.offsetHeight;return{distance:t.distance,button:((l=(o=vp(at.element,r,a))==null?void 0:o.closest)==null?void 0:l.call(o,"[data-k]"))||null}}function bd(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return Rs(),e?(ji={key:e,button:n,shift:Zi},wp(e,n,lp),iA(e)&&(rl=performance.now()+tA),!0):!1}function Rs(){let n=ji;ji=null,rl=0,n&&wp(n.key,n.button,gd,n.shift)}Ge("pinchcancel",Rs);function py(n){var i,s;if(!ji)return!1;let e=xd(ge.x,ge.y);if(!e)return Rs(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==ji.key?(Rs(),bd(e.button)):(rl&&n>=rl&&(wp(ji.key,ji.button,cy),rl=n+nA),!0)}var G0="";Vo((n,e)=>{let t=`${S.winScale}:${S.winDist}`;if(G0!==t&&(G0=t,Ni()),to(),cp(n),ji&&py(e),pn&&ge.mode==="drag"&&(ir(pn.hit,"down"),pn=null),ct&&ge.active&&ge.down){let i=As(ge.x,ge.y);i&&i.win===ct.win&&!i.handle&&!i.resize&&Gr(i,2)}if((Bt.win||dt.win&&dt.source!=="fist")&&ge.active&&ge.down){let i=nd(e);Bt.win&&iy(i.x,i.y),dt.win&&dt.source!=="fist"&&mp(i.x,i.y)}if(xn.start&&ge.active&&ge.down){let i=nd(e);gp(i.x,i.y)}for(let i of me)i.hidden||i.apply();fy()});function Jh(n){let e=n.matrixWorld.elements,t=ye.position.x-e[12],i=ye.position.z-e[14];return t*e[8]+i*e[10]<0}function fy(){var e,t,i,s;Ie.updateMatrixWorld(!0);let n=!1;if(Si&&pt){let r=Jh(Ln)?"1":"0";pt.dataset.backface!==r&&(pt.dataset.backface=r,At&&(At.dataset.backface=r),n=!0)}if(at&&at.visible!==!1&&at.element){let r=Jh(at)?"1":"0";at.element.dataset.backface!==r&&(at.element.dataset.backface=r,n=!0)}for(let r of me){if(r.hidden||!r.shell)continue;let a=Jh(r.obj)?"1":"0";r.shell.dataset.backface!==a&&(r.shell.dataset.backface=a,n=!0)}n&&((t=(e=re).invalidate)==null||t.call(e),(s=(i=re).render)==null||s.call(i,Ie,ye))}typeof window<"u"&&(window.__updateBackfaceStates=fy);var my='button, .d-btn, .spatial-app-tile, .lib-tile, .st-card, .st-tab, .quick-control, .entry-card, .entry-seg-btn, .entry-btn, .entry-store-card, .entry-profile-box, .yt-link, [role="button"]',Or=null;function Ss(n){var t;let e=((t=n==null?void 0:n.closest)==null?void 0:t.call(n,my))||null;return e===Or?e:(Or&&Or.classList.remove("nextvr-choosing"),Or=e,Or&&Or.classList.add("nextvr-choosing"),Or)}function zr(n){var i;let e=((i=n==null?void 0:n.closest)==null?void 0:i.call(n,my))||(n instanceof HTMLElement?n:null);if(!e)return null;Ss(e),e.classList.remove("nextvr-clicking"),e.classList.add("nextvr-clicking");let t=e.querySelector(":scope > .nextvr-click-ripple");return t||(t=document.createElement("span"),t.className="nextvr-click-ripple",t.setAttribute("aria-hidden","true"),e.appendChild(t)),t.classList.remove("is-active"),t.classList.add("is-active"),setTimeout(()=>{e.classList.remove("nextvr-clicking"),t==null||t.remove()},340),e}typeof window<"u"&&(window.__nextvrChooseAnim=Ss,window.__nextvrClickAnim=zr,document.addEventListener("pointerover",n=>{n.target instanceof Element&&Ss(n.target)},{passive:!0,capture:!0}),document.addEventListener("click",n=>{n.target instanceof Element&&zr(n.target)},{passive:!0,capture:!0}));if(fe){let n=function(){try{Qa=JSON.parse(window.NativeXR.battery()),eo()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?li(!0,{nativeId:e}):(gt==null?void 0:gt.nativeId)!==e&&li(!1)},window.nextvrAppFocus=e=>li(!0,{nativeId:e}),n(),setInterval(n,1e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var yt=null,ld=new Map,cd=new $a({holdMs:2e3,graceMs:260}),el=new Set,Sp={hands:[],consumed:new Set,scaleX:1,scaleY:1},Jo=null,Qh=0,W0=350,sA=240;function dp(n,e){ye.updateMatrixWorld(!0),St.updateMatrixWorld(!0);let t=new No;return t.setFromCamera(new je(n*2-1,1-e*2),ye),t}function ep(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function up(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new D),s=n.curve>0?sd(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function rA(n,e){let t=n.obj.getWorldPosition(new D),i=new D(0,0,1).transformDirection(n.obj.matrixWorld),s=new ii().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new D);let r=n.obj.matrixWorld.clone().invert(),a=e.origin.clone().applyMatrix4(r),o=e.origin.clone().add(e.direction).applyMatrix4(r).sub(a).normalize(),l=n.curveRadius,c=o.x*o.x+o.z*o.z;if(c<1e-9)return e.intersectPlane(s,new D);let d=2*(a.x*o.x+(a.z-l)*o.z),u=a.x*a.x+(a.z-l)*(a.z-l)-l*l,h=d*d-4*c*u;if(h<0)return e.intersectPlane(s,new D);let f=Math.sqrt(h);for(let g of[(-d-f)/(2*c),(-d+f)/(2*c)]){if(!(g>0))continue;let y=a.clone().addScaledVector(o,g);if(!(Math.abs(y.x)>l+1e-6||y.z>l))return y.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new D)}function q0(n){let e=null;for(let t of me){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new D),s=rA(t,n.ray);if(!s)continue;let{local:r,scale:a}=up(t,s);if(Math.abs(r.x)*a.x>t.w*a.x/2+.08||Math.abs(r.y)*a.y>t.h*a.y/2+.08)continue;let o=n.ray.origin.distanceTo(s);(!e||o<e.distance)&&(e={win:t,point:s,distance:o})}return e}var _s=new Map,bs=0,Ya=null;function Fr(n){var e,t,i,s;Ya!==n&&(Ya&&((t=(e=Ya.classList)==null?void 0:e.remove)==null||t.call(e,"finger-hover")),Ya=n||null,Ya&&((s=(i=Ya.classList)==null?void 0:i.add)==null||s.call(i,"finger-hover")))}function aA(n){if(!n||n.pinching||n.fist||n.predicted)return!1;let e=n.points;if(!e||e.length<63)return!1;let t=e[0],i=e[1],s=e[18],r=e[19],a=e[24],o=e[25],l=Math.hypot(a-t,o-i),c=Math.hypot(s-t,r-i);return l>.045&&l>c*1.05}function dd(n,e){var r,a,o,l,c,d,u,h,f,g,y,p,m,x,v,w;if(!Number.isFinite(n)||!Number.isFinite(e))return null;let t=xd(n,e),i=As(n,e),s=qr(n,e);if(!s&&Si){for(let A of[-.02,.02,-.038,.038])if(s=qr(n,e+A),s)break}if(t&&(!i||t.distance<i.distance)&&t.button)return Ss(t.button),{kind:"kb",x:n,y:e,el:t.button,key:"kb:"+(((r=t.button.dataset)==null?void 0:r.k)||t.button.textContent||"")};if(s&&(!i||s.distance<=(i.distance??1/0)+.15)){if(s.popupOpt&&s.el)return Ss(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(Pn[s.i]){let A=Pn[s.i];return Ss(A),{kind:"dock",x:n,y:e,el:A,key:"dock:"+(((a=A.dataset)==null?void 0:a.id)||s.i)}}}if(i&&!i.handle&&!i.resize){let A=yp(i.win.el,i.u,i.v),T=((o=A==null?void 0:A.closest)==null?void 0:o.call(A,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url],[data-browser-opt],[data-id],[data-act],[data-lang]'))||null,R=((l=A==null?void 0:A.closest)==null?void 0:l.call(A,"[data-native-browser],[data-native-app],[data-native-xr]"))||null;if(T){Ss(T);let F=((c=T.dataset)==null?void 0:c.browserOpt)||((d=T.dataset)==null?void 0:d.spatialBuiltin)||((u=T.dataset)==null?void 0:u.spatialAndroid)||((h=T.dataset)==null?void 0:h.spatialXr)||((f=T.dataset)==null?void 0:f.spatialScroll)||((g=T.dataset)==null?void 0:g.qbUrl)||((y=T.dataset)==null?void 0:y.id)||((p=T.dataset)==null?void 0:p.act)||((m=T.dataset)==null?void 0:m.lang)||T.getAttribute("aria-label")||T.title||((v=(x=T.textContent)==null?void 0:x.trim())==null?void 0:v.slice(0,24))||"btn";return{kind:"win",x:n,y:e,el:T,hit:i,key:`win:${i.win.id}:${F}`}}if(R){let F=Math.round(i.u*16),_=Math.round(i.v*12);return{kind:"win-surf",x:n,y:e,el:R,hit:i,key:`surf:${i.win.id}:${F}:${_}`}}}if(s!=null&&s.popupOpt&&s.el)return Ss(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(s&&Pn[s.i]){let A=Pn[s.i];return Ss(A),{kind:"dock",x:n,y:e,el:A,key:"dock:"+(((w=A.dataset)==null?void 0:w.id)||s.i)}}return null}function X0(n,e){let t=n.points,i=Number(e==null?void 0:e.scaleX)||1,s=Number(e==null?void 0:e.scaleY)||1,r=[[0,0],[0,.015],[0,-.015],[.015,0],[-.015,0]];if(t&&t.length>=26&&Number.isFinite(t[24])&&Number.isFinite(t[25])){let a=(t[24]-.5)*i+.5,o=(t[25]-.5)*s+.5;for(let[u,h]of r){let f=dd(a+u,o+h);if(f)return f}if(Number.isFinite(t[12])&&Number.isFinite(t[13])){let u=((t[12]+t[24])*.5-.5)*i+.5,h=((t[13]+t[25])*.5-.5)*s+.5;for(let[f,g]of r){let y=dd(u+f,h+g);if(y)return y}}let l=(t[21]-.5)*i+.5,c=(t[22]-.5)*s+.5,d=dd(l,c);if(d)return d}if(Array.isArray(n.aim)&&n.aim.length>=2){let a=Yo(n.aim);for(let[o,l]of r){let c=dd(a.x+o,a.y+l);if(c)return c}}return null}function Ur(n,e,t=null){var a,o,l,c,d,u,h,f,g,y,p,m,x,v,w,A,T,R,F,_,b,N,I,U,L,E,k,V,z,W,K,Q,ie,q,j,ne;if((a=t==null?void 0:t.dataset)!=null&&a.browserOpt)return Wr(),(o=window.nextvrOpenBrowserOption)==null||o.call(window,t.dataset.browserOpt),(c=(l=re).invalidate)==null||c.call(l),(u=(d=re).render)==null||u.call(d,Ie,ye),!0;if(t&&Pn.includes(t))return t.classList.add("finger-pressed"),t.style.transform="scale(.88)",setTimeout(()=>{t.style.transform="",t.classList.remove("finger-pressed")},160),zr(t),t.click(),(f=(h=re).invalidate)==null||f.call(h),(y=(g=re).render)==null||y.call(g,Ie,ye),!0;let i=xd(n,e),s=As(n,e),r=qr(n,e);if(i&&(!s||i.distance<s.distance))return bd(i.button),setTimeout(()=>Rs(),55),!0;if(r&&(!s||r.distance<=(s.distance??1/0)+.15)){if(r.popupOpt)return Wr(),(p=window.nextvrOpenBrowserOption)==null||p.call(window,r.popupOpt),!0;if(Pn[r.i]){let ee=Pn[r.i];return ee.classList.add("finger-pressed"),ee.style.transform="scale(.88)",setTimeout(()=>{ee.style.transform="",ee.classList.remove("finger-pressed")},160),zr(ee),ee.click(),(x=(m=re).invalidate)==null||x.call(m),(w=(v=re).render)==null||w.call(v,Ie,ye),!0}}if(s&&!s.handle&&!s.resize){Kt(s.win);let ee=t&&s.win.el.contains(t)?t:yp(s.win.el,s.u,s.v),H=((A=ee==null?void 0:ee.closest)==null?void 0:A.call(ee,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url]'))||ee;H!=null&&H.classList&&(H.classList.add("finger-pressed"),setTimeout(()=>{var _e,$e;return($e=(_e=H.classList)==null?void 0:_e.remove)==null?void 0:$e.call(_e,"finger-pressed")},180),zr(H));let le=!1,ue=()=>{le=!0};return(T=H==null?void 0:H.addEventListener)==null||T.call(H,"click",ue,{once:!0}),ir(s,"down"),ir(s,"up"),(R=H==null?void 0:H.removeEventListener)==null||R.call(H,"click",ue),!le&&H&&(!((F=H.closest)!=null&&F.call(H,"[data-native-browser],[data-native-app],[data-native-xr]"))||(_=H.matches)!=null&&_.call(H,"[data-qb-url],[data-qb-act]"))&&((b=H.click)==null||b.call(H)),(I=(N=re).invalidate)==null||I.call(N),(L=(U=re).render)==null||L.call(U,Ie,ye),!0}if(r!=null&&r.popupOpt)return Wr(),(E=window.nextvrOpenBrowserOption)==null||E.call(window,r.popupOpt),!0;if(r&&Pn[r.i]){let ee=Pn[r.i];return ee.classList.add("finger-pressed"),ee.style.transform="scale(.88)",setTimeout(()=>{ee.style.transform="",ee.classList.remove("finger-pressed")},160),zr(ee),ee.click(),(V=(k=re).invalidate)==null||V.call(k),(W=(z=re).render)==null||W.call(z,Ie,ye),!0}return t&&typeof t.click=="function"&&document.body.contains(t)?((Q=(K=t.classList)==null?void 0:K.add)==null||Q.call(K,"finger-pressed"),setTimeout(()=>{var ee,H;return(H=(ee=t.classList)==null?void 0:ee.remove)==null?void 0:H.call(ee,"finger-pressed")},160),zr(t),t.click(),(q=(ie=re).invalidate)==null||q.call(ie),(ne=(j=re).render)==null||ne.call(j,Ie,ye),!0):!1}function oA(n){return!n||n.length<63?0:Math.hypot(n[15]-n[0],n[16]-n[1])+Math.hypot(n[51]-n[0],n[52]-n[1])+Math.hypot(n[51]-n[15],n[52]-n[16])+Math.hypot(n[27]-n[0],n[28]-n[1])}var tp=new Map;function lA(n,e,t){var b,N,I,U,L,E,k,V;if(S.fingerTouch===0)return _s.delete(n==null?void 0:n.id),tp.delete(n==null?void 0:n.id),Fr(null),!1;let i=n==null?void 0:n.points,s=_s.get(n==null?void 0:n.id),r=tp.get(n==null?void 0:n.id)||!1;tp.set(n==null?void 0:n.id,!!(n!=null&&n.pinching));let a=!!(i&&i.length>=26&&Math.hypot(i[24]-i[18],i[25]-i[19])>.008);if(S.pinchOnApp!==0&&(n!=null&&n.pinching)&&!r&&!(n!=null&&n.fist)&&!(n!=null&&n.predicted)&&a){let z=s!=null&&s.targetEl&&t-s.lastSeenAt<=400?{x:s.tapX,y:s.tapY,el:s.targetEl}:X0(n,e);if(z&&t-((s==null?void 0:s.lastTapAt)??-1e3)>=280){let W=Ur(z.x,z.y,z.el);if(_s.delete(n==null?void 0:n.id),Fr(null),W)return bs=t+220,!0}}if(!aA(n)){if(s&&!s.latched&&!(n!=null&&n.pinching)&&!(n!=null&&n.fist)&&!(n!=null&&n.predicted)&&i&&i.length>=26&&t-s.enterAt>=40&&t-s.lastSeenAt<=220&&t-s.lastTapAt>=360&&Math.hypot(i[0]-(s.wristX??i[0]),i[1]-(s.wristY??i[1]))<=.045){let z=Ur(s.tapX,s.tapY,s.targetEl);if(_s.delete(n==null?void 0:n.id),Fr(null),z)return bs=t+220,!0}return _s.delete(n==null?void 0:n.id),Fr(null),!1}let o=i&&i.length>=26?i[24]:.5,l=i&&i.length>=26?i[25]:.5,d=(i&&i.length>=17?i[16]:l)-l,u=i&&i.length>=26?Math.hypot(i[24]-i[0],i[25]-i[1]):.1,h=i&&i.length>=20?Math.hypot(i[18]-i[0],i[19]-i[1]):.08,f=u/Math.max(1e-4,h),g=n.head&&n.head.length===63?n.head[25]:0,y=n.head&&n.head.length===63?Math.hypot(n.head[24],n.head[25],n.head[26]):0,p=n.head&&n.head.length===63?n.head[29]-n.head[26]:0,m=Number(n.palmWidth)||0,x=oA(n.points),v=s,w=X0(n,e),A=z=>{if(!z)return!1;let W=y>0&&z.baseDist>0?y-z.baseDist:0,K=y>0&&z.baseDist>0?W/z.baseDist:0,Q=m>.012&&z.basePalm>.012?(z.basePalm-m)/z.basePalm:0,ie=x>.02&&z.baseSpan>.02?(z.baseSpan-x)/z.baseSpan:0,q=p-z.baseTipRelZ;return W>=.016||K>=.036||Q>=.042||ie>=.042||q>=.014&&(W>=.006||Q>=.018||ie>=.018)},T=z=>{if(!z)return!1;let W=z.restTipY-l>=.0075,K=d-z.restFingerLift>=.0075,Q=g-z.restHeadY>=.0075,ie=z.maxIndexRatio>1.08&&z.maxIndexRatio-f>=.09;return Math.abs(o-z.lastTipX)>Math.abs(l-z.lastTipY)*1.45&&Math.abs(o-z.lastTipX)>.012&&!A(z)&&!ie?!1:W||K||Q||ie||A(z)};if(!w)return v&&v.pendingBrowserTap&&!v.holdMenuOpened&&t-v.lastTapAt>=360&&(v.pendingBrowserTap=!1,Ur(v.tapX,v.tapY,v.targetEl))||v&&t-v.lastSeenAt<=180&&t-v.enterAt>=40&&!v.latched&&T(v)&&t-v.lastTapAt>=360&&Ur(v.tapX,v.tapY,v.targetEl)?(v.latched=!0,v.lastTapAt=t,bs=t+220,!0):((!v||t-v.lastSeenAt>180)&&(_s.delete(n.id),Fr(null)),!1);Fr(w.el);let R=v&&t-v.enterAt>=40&&w.key===v.targetKey&&T(v);if(!v||w.key!==v.targetKey&&!R)return v&&!v.latched&&t-v.enterAt>=45&&t-v.lastSeenAt<=120&&v.lastTipY-l>=.01&&Math.abs(o-v.lastTipX)<=.018&&t-v.lastTapAt>=360&&Ur(v.tapX,v.tapY,v.targetEl)?(v.latched=!0,v.lastTapAt=t,bs=t+220,!0):(v={targetKey:w.key,targetEl:w.el,tapX:w.x,tapY:w.y,wristX:i[0],wristY:i[1],maxIndexRatio:f,restTipY:l,restFingerLift:d,restHeadY:g,lastTipX:o,lastTipY:l,baseDist:y,basePalm:m,baseSpan:x,baseTipRelZ:p,enterAt:t,lastSeenAt:t,latched:!1,holdMenuOpened:!1,pendingBrowserTap:!1,lastTapAt:(v==null?void 0:v.lastTapAt)??-1e3},_s.set(n.id,v),!1);w.key===v.targetKey&&(v.tapX=w.x,v.tapY=w.y,v.targetEl=w.el,v.wristX=i[0],v.wristY=i[1],v.lastSeenAt=t);let F=((N=(b=v.targetEl)==null?void 0:b.dataset)==null?void 0:N.id)==="browser"||((U=(I=v.targetEl)==null?void 0:I.dataset)==null?void 0:U.spatialBuiltin)==="browser"||((E=(L=v.targetEl)==null?void 0:L.dataset)==null?void 0:E.app)==="browser";if(F&&!v.holdMenuOpened&&t-v.enterAt>=2e3)return v.holdMenuOpened=!0,v.pendingBrowserTap=!1,v.latched=!0,v.lastTapAt=t,ol(((V=(k=v.targetEl)==null?void 0:k.dataset)==null?void 0:V.id)==="browser"?"dock":"spatial"),bs=t+220,!0;if(t-v.enterAt<40)return v.restTipY=Math.max(v.restTipY,l),v.restFingerLift=Math.min(v.restFingerLift,d),v.restHeadY=Math.min(v.restHeadY,g),v.maxIndexRatio=Math.max(v.maxIndexRatio||f,f),v.lastTipX=o,v.lastTipY=l,y>0&&(v.baseDist=v.baseDist>0?v.baseDist*.5+y*.5:y),m>0&&(v.basePalm=v.basePalm>0?v.basePalm*.5+m*.5:m),x>0&&(v.baseSpan=v.baseSpan>0?v.baseSpan*.5+x*.5:x),v.baseTipRelZ=v.baseTipRelZ*.5+p*.5,!1;let _=T(v);if(v.lastTipX=o,v.lastTipY=l,!v.latched&&_&&t-v.lastTapAt>=360){if(F&&A(v)&&!(v.restTipY-l>=.0075||d-v.restFingerLift>=.0075))return v.pendingBrowserTap=!0,v.latched=!0,!1;if(Ur(v.tapX,v.tapY,v.targetEl))return v.latched=!0,v.lastTapAt=t,bs=t+220,!0}else if(v.latched){let z=y>0&&v.baseDist>0?y-v.baseDist:0,W=m>.012&&v.basePalm>.012?(v.basePalm-m)/v.basePalm:0,K=x>.02&&v.baseSpan>.02?cA(v,x):0;if(z<=.008&&W<=.022&&K<=.022&&Math.abs(v.restTipY-l)<=.006){if(v.pendingBrowserTap&&!v.holdMenuOpened&&t-v.lastTapAt>=360)return v.pendingBrowserTap=!1,v.latched=!1,v.lastTapAt=t,bs=t+220,Ur(v.tapX,v.tapY,v.targetEl),!0;v.latched=!1,v.restTipY=l,v.restFingerLift=d,v.restHeadY=g,v.maxIndexRatio=f,v.baseDist=y,v.basePalm=m,v.baseSpan=x,v.baseTipRelZ=p}}else v.restTipY=Math.max(v.restTipY,l),v.restFingerLift=Math.min(v.restFingerLift,d),v.restHeadY=Math.min(v.restHeadY,g),v.maxIndexRatio=Math.max(v.maxIndexRatio||f,f),y>0&&(v.baseDist=v.baseDist>0?Math.min(v.baseDist,v.baseDist*.92+y*.08):y),m>.012&&(v.basePalm=v.basePalm>0?Math.max(v.basePalm,v.basePalm*.92+m*.08):m),x>.02&&(v.baseSpan=v.baseSpan>0?Math.max(v.baseSpan,v.baseSpan*.92+x*.08):x);return!1}function cA(n,e){return(n.baseSpan-e)/n.baseSpan}var hp=new Map,$0=-2e3,Kn=null,np=null;function dA(){if(Kn&&document.body.contains(Kn))return Kn;let n=document.getElementById("hud")||document.body;return Kn=document.createElement("div"),Kn.id="gun-gesture-indicator",Kn.className="gun-logo-bubble",Kn.dataset.gunBubble="1",Kn.hidden=!0,Kn.innerHTML='<img src="./gun-logo.jpg" alt="Gun Gesture Logo" class="gun-logo-img">',n.appendChild(Kn),Kn}function pp(n=.5,e=.5,t=!1){var a,o,l,c;let i=dA(),s=Math.max(.1,Math.min(.9,Number.isFinite(n)?n:.5)),r=Math.max(.1,Math.min(.9,Number.isFinite(e)?e:.5));fe?(i.style.left=`${Math.round(s*1200)}px`,i.style.top=`${Math.round(r*800)}px`):(i.style.left=`${(s*100).toFixed(1)}%`,i.style.top=`${(r*100).toFixed(1)}%`),i.hidden=!1,i.classList.toggle("gun-triggered",!!t),(o=(a=re).invalidate)==null||o.call(a),(c=(l=re).render)==null||c.call(l,Ie,ye),np&&clearTimeout(np),np=setTimeout(()=>{var d,u,h,f;Kn&&(Kn.hidden=!0,Kn.classList.remove("gun-triggered"),(u=(d=re).invalidate)==null||u.call(d),(f=(h=re).render)==null||f.call(h,Ie,ye))},t?850:600)}window.nextvrShowGunLogoBubble=pp;var vn=null,ip=null;function uA(n="env",e=""){var s,r;let t=document.getElementById("hud")||document.body;(!vn||!document.body.contains(vn))&&(vn=document.createElement("div"),vn.id="vr-circle-loader",vn.className="vr-circle-loader",vn.dataset.circleLoader="1",vn.hidden=!0,vn.innerHTML=`
      <div class="vr-circle-ring-wrap">
        <svg viewBox="0 0 84 84" class="vr-circle-ring-svg">
          <circle cx="42" cy="42" r="34" class="vr-circle-track"/>
          <circle cx="42" cy="42" r="34" class="vr-circle-progress"/>
        </svg>
        <div class="vr-circle-label"></div>
      </div>
    `,t.appendChild(vn)),vn.dataset.kind=n;let i=vn.querySelector(".vr-circle-label");i&&(i.textContent=n==="env"?`Carregando ambiente${e?" \xB7 "+e:""}\u2026`:`Abrindo ${e||"app"}\u2026`),vn.hidden=!1,vn.classList.remove("active"),vn.offsetWidth,vn.classList.add("active"),(r=(s=re).invalidate)==null||r.call(s),ip&&clearTimeout(ip),ip=setTimeout(()=>{var a,o;vn&&(vn.hidden=!0,vn.classList.remove("active"),(o=(a=re).invalidate)==null||o.call(a))},620)}window.nextvrTriggerCircleLoading=uA;function hA(n,e){var i,s,r,a,o,l,c,d,u;if(S.gunGesture===0||!((i=n==null?void 0:n.hands)!=null&&i.length))return!1;let t=document.getElementById("gorilla-overlay");if(t&&t.style.display&&t.style.display!=="none"||me.some(h=>h.id==="entry-menu"||h.id==="language")||document.querySelector(".entry-menu-root")||dt.win||Bt.win||xn.start)return!1;for(let h of n.hands){if(!h||h.predicted)continue;let f=h.points;if(!f||f.length<63)continue;let g=(k,V)=>Math.hypot(f[k*3]-f[V*3],f[k*3+1]-f[V*3+1]),y=Math.hypot(f[27]-f[0],f[28]-f[1]);if(y<.032||g(14,16)<.008||g(18,20)<.008||g(5,6)<.008)continue;let p=g(0,12)<g(0,10)*1.15||g(9,12)<y*.85,m=g(0,16)<g(0,14)*1.16||g(13,16)<y*.85,x=g(0,20)<g(0,18)*1.18||g(17,20)<y*.85,v=m&&x||p&&(m||x),w=g(0,4)>g(0,2)*1.01||f[7]-f[13]>.012||g(4,9)>y*.34,A=g(0,8)/Math.max(1e-4,g(0,6)),T=g(5,8),R=Number(n==null?void 0:n.scaleX)||1,F=Number(n==null?void 0:n.scaleY)||1,_=((f[12]+f[15])*.5-.5)*R+.5,b=(Math.min(f[13],f[16])-.045-.5)*F+.5,N=h.id||(h.left?"left":"right"),I=hp.get(N);I||(I={armedUntil:0,maxIndexRatio:0,maxIndexSpan:0,latched:!1},hp.set(N,I));let U=A>=1.07||T>Math.max(g(13,16),g(17,20))*1.25;if(v&&w&&U&&!h.pinching&&!h.fist){I.armedUntil=e+2200,I.maxIndexRatio=Math.max(I.maxIndexRatio,A),I.maxIndexSpan=Math.max(I.maxIndexSpan,T),I.latched=!1,pp(_,b,!1);continue}let E=v&&w&&(A<=1.05||I.maxIndexRatio>=1.08&&I.maxIndexRatio-A>=.06||I.maxIndexSpan>.02&&T<=I.maxIndexSpan*.84||h.fist);if(!I.latched&&e<=I.armedUntil&&E&&e-$0>=500){if(I.latched=!0,I.armedUntil=0,I.maxIndexRatio=0,I.maxIndexSpan=0,$0=e,pp(_,b,!0),(r=(s=n.consumed)==null?void 0:s.add)==null||r.call(s,h.id),S.spatialLauncher){let k=me.find(V=>V.id==="spatial-launcher");k&&k.setHidden(!k.hidden)}else{let k=!(Za||!Si);Qt(k),Xt(!k),At&&(At.hidden=k)}return(o=(a=window.NativeXR)==null?void 0:a.click)==null||o.call(a),(c=(l=re).invalidate)==null||c.call(l),(u=(d=re).render)==null||u.call(d,Ie,ye),!0}}return!1}function Y0(n=!1,e=Sp){let t=yt;t!=null&&t.down&&(Gr({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(el.add(t.id),e.consumed.add(t.id))),yt=null}Ge("phonehands",n=>{var l,c;Sp=n;let e=new Set(n.hands.map(d=>d.id));n.hands.length||Fr(null);for(let d of ld.keys())e.has(d)||ld.delete(d);for(let d of _s.keys())e.has(d)||_s.delete(d);for(let d of el){let u=n.hands.find(h=>h.id===d);!u||!u.pinching?el.delete(d):n.consumed.add(d)}if(dt.win&&dt.source==="fist"){let d=n.hands.find(u=>u.id===dt.hand);if(!d||!d.fist||!me.includes(dt.win)||(l=dt.win)!=null&&l.hidden)Ms();else{n.consumed.add(d.id);let u=ep(d,n,!0);mp(u.x,u.y)}}let t=performance.now();if(!document.documentElement.classList.contains("xr-on")&&!me.some(d=>d.id==="entry-menu"&&!d.hidden))if(dt.win||Bt.win||xn.start||pt.classList.contains("grab-armed")||yt)cd.reset();else{let d=(n.hands||[]).filter(f=>f.pinching&&!f.predicted),u=od(d),h=cd.update(t,{left:u,right:u});if(h.opened){cd.reset(),$o(),pn=null,ct=null,_i=-1,Ms(),sr(),Ts();for(let f of d)el.add(f.id),n.consumed.add(f.id);qi()}else u&&h.progress>.15&&($o(),pn=null,ct=null,_i=-1)}else cd.reset();if(!(dt.win&&dt.source==="fist")){let d=n.hands.find(u=>!u.fist);if(d){let u=ep(d,n),h=q0(dp(u.x,u.y));if(h){let{local:f,scale:g}=up(h.win,h.point),y=h.win;(Math.abs(f.x)*g.x>y.w*g.x/2-.06||Math.abs(f.y)*g.y>y.h*g.y/2-.06)&&(Jo=h.win,Qh=t)}}}for(let d of me)(d!==Jo||t-Qh>W0)&&d.shell.classList.remove("phone-grab-hover");Jo&&t-Qh<=W0?Jo.shell.classList.add("phone-grab-hover"):Jo=null;for(let d of n.hands){let u=ld.get(d.id)||!1;ld.set(d.id,d.fist);let h=hp.get(d.id||(d.left?"left":"right"));if(!(h&&t<=h.armedUntil)&&!dt.win&&!Bt.win&&d.fist&&!u){let f=ep(d,n,!0),g=q0(dp(f.x,f.y));g&&(((c=ge.hand)==null?void 0:c.id)===d.id&&$o(),fp(g.win,f.x,f.y,"fist",d.id)&&n.consumed.add(d.id))}}let i=null;for(let d of n.hands){if(n.consumed.has(d.id)||!d.head||d.head.length!==63)continue;if(Array.isArray(d.aim)&&d.aim.length>=2){let h=Yo(d.aim);if(qr(h.x,h.y))continue}let u=new D().fromArray(d.head,24);if(!(u.length()>.7)){u.applyMatrix4(ye.matrixWorld);for(let h of me){if(h.hidden||h.id==="spatial-launcher")continue;let f=up(h,u),g=(yt==null?void 0:yt.win)===h&&yt.id===d.id,y=g?.08:.02,p=g?.26:.11;f.d>p||f.d<-.12||Math.abs(f.local.x)*f.scale.x>h.w*f.scale.x/2+y||Math.abs(f.local.y)*f.scale.y>h.h*f.scale.y/2+y||(!i||g||!i.current&&Math.abs(f.d)<Math.abs(i.d))&&(i={...f,id:d.id,win:h,point:u,current:g})}}}let s=()=>{if(!(dt.win||Bt.win||xn.start||pt.classList.contains("grab-armed"))&&!hA(n,t))for(let d of n.hands)n.consumed.has(d.id)||lA(d,n,t)};if(!i&&yt&&e.has(yt.id)&&me.includes(yt.win)&&!yt.win.hidden&&t-yt.lastSeen<=sA&&(i={...yt,current:!0,held:!0}),!i){Y0(!e.has(yt==null?void 0:yt.id),n),s();return}i.current?(yt.d+=(i.d-yt.d)*.45,yt.u+=(i.u-yt.u)*.45,yt.v+=(i.v-yt.v)*.45,i.held||(yt.lastSeen=t)):(Y0(!1,n),yt={...i,down:!1,previousD:i.d,lastSeen:t});let r=yt,a=r.u>=0&&r.u<=1&&r.v>=0&&r.v<=1,o={win:r.win,u:Math.max(0,Math.min(1,r.u)),v:Math.max(0,Math.min(1,r.v))};!r.down&&a&&r.d<=.012&&r.previousD>.012?(ge.down&&$o(),Kt(r.win),Gr(o,0),r.down=!0):r.down&&(r.d>=.035||!a)?(Gr(o,1),r.down=!1,n.hands.some(d=>d.id===r.id&&d.pinching)&&(el.add(r.id),n.consumed.add(r.id))):r.down&&Gr(o,2),r.previousD=r.d,r.down?(n.blockFar=!0,n.consumed.add(r.id)):s()});var j0=0,Z0="";Vo((n,e)=>{var a,o,l,c;if(!fe||e-j0<16)return;j0=e;let t=Sp,i=[],s=S.fingerTouch!==0;for(let d of t.hands){if((yt==null?void 0:yt.id)===d.id&&yt.down){let y=yt,p=new D((y.u-.5)*y.win.w,(.5-y.v)*y.win.h,0).applyMatrix4(y.win.obj.matrixWorld);i.push({id:d.id,end:ye.worldToLocal(p).toArray(),direct:!0,down:y.down,...s?{noBeam:!0}:{}});continue}if(t.consumed.has(d.id)||t.blockFar){i.push({id:d.id,hidden:!0});continue}let u=((a=ge.hand)==null?void 0:a.id)===d.id?nd(e):Yo(d.aim);if(s&&d.points&&d.points.length>=26&&Number.isFinite(d.points[24])&&Number.isFinite(d.points[25])){let y=Number(t.scaleX)||1,p=Number(t.scaleY)||1;u={x:(d.points[24]-.5)*y+.5,y:(d.points[25]-.5)*p+.5}}let h=dp(u.x,u.y),f=me.filter(y=>!y.hidden).flatMap(y=>[y.resizeHit,y.grab,y.hit]);Si&&(Mi.hidden||f.push($i),f.push(Ii,wi)),In&&at&&!ll&&f.push(In);let g=h.intersectObjects(f,!1)[0];i.push({id:d.id,...g?{end:g.point.toArray()}:{},down:((o=ge.hand)==null?void 0:o.id)===d.id&&ge.down||e<bs,...s?{noBeam:!0}:{}})}let r=JSON.stringify(i);r!==Z0&&(Z0=r,(c=(l=window.NativeXR).handTargets)==null||c.call(l,r))});var gy={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function yy(n){return gy[n]||gy.landscape}function vy(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return yy(n==null?void 0:n.shape)}function pA(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function cl(n){let e=pA(vy(n));return{w:e.w+2,h:e.h+116}}var fA=400,My=3;function Ap(n,e){if(e!=null&&e.shape)return e.shape;let t=en.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var Et={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:My,sdk:0,recents:[],library:0,launch:null},en={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},di=new Map,Mp=new Set,xy=0,by="";var Ep=n=>Et.sessions.find(e=>e.pkg===n)||null,mA=()=>Et.sessions.filter(n=>n.alive),gA=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function Cs(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{ht(O("appCommandFailed"))}}function yA(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Et.sessions=Array.isArray(e.sessions)?e.sessions:[],Et.shizuku=e.shizuku||Et.shizuku,Et.input=e.input||Et.input,Et.capacity=e.capacity||My,Et.recents=Array.isArray(e.recents)?e.recents:[],Et.sdk=e.sdk||Et.sdk,Et.launch=e.launch||null,Et.diagnostics=e.diagnostics||Et.diagnostics,e.icons!=null&&e.icons!==en.icons&&(en.icons=e.icons,en.loaded=!1),vA(),Se("appsState"))}function vA(){var e,t,i,s;let n=new Set;for(let r of Et.sessions)if(r.state!=="stopped"){if(r.state==="suspended"){_y(r.pkg,!0);continue}n.add(r.pkg),di.has(r.pkg)?Ay(r):xA(r)}for(let r of[...di.keys()])n.has(r)||_y(r,!0);(t=(e=re).invalidate)==null||t.call(e),(s=(i=re).render)==null||s.call(i,Ie,ye),wd(!0)}function xA(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?O("appMirrorBadge"):O("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(h,f,g)=>{let y=document.createElement("button");return y.className="app-key",y.title=f,y.setAttribute("aria-label",f),y.innerHTML=te(g),y.onclick=()=>Cs({cmd:"key",pkg:n.pkg,key:h}),y},a=document.createElement("button");a.className="app-key",a.title=O("appKeyboard"),a.dataset.act="keys",a.innerHTML=te("keyboard"),a.onclick=()=>MA(n.pkg);let o=document.createElement("button");o.className="app-key",o.dataset.act="rotate",o.title=O("appRotate"),o.setAttribute("aria-label",O("appRotate")),o.innerHTML=te("rotate"),o.onclick=()=>wA(n.pkg),t.append(i,s,r("back",O("appBack"),"back"),r("home",O("appHome"),"top"),r("recents",O("appRecents"),"appGrid"),a,o);let l=document.createElement("div");l.className="app-surface",l.dataset.nativeApp=n.pkg,l.dataset.aspect=String(n.display&&n.display.aspect||16/9),l.dataset.shape=Ap(n.pkg,n);let c=document.createElement("div");c.className="app-state",e.append(t,l),l.append(c);let d=cl(n),u=Jt({id:gA(n.pkg),title:n.title,node:e,w:d.w,h:d.h});di.set(n.pkg,{win:u,surface:l,status:c,badge:i,session:n}),Ay(n)}function Ay(n){var r,a;let e=di.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?O("appMirrorBadge"):O("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:O("appStarting"),creating:O("appStarting"),launching:O("appStarting"),running:"",failed:n.error?_A(n):O("appFailed")};n.mode==="display"&&((r=Et.shizuku)!=null&&r.binding||!((a=Et.shizuku)!=null&&a.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=O("appWaitingService"),i.creating=O("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=O("appMirrorStarting"),i.creating=O("appMirrorStarting"),i.launching=O("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&bA.has(n.error))){let o=document.createElement("button");o.className="app-state-btn",o.textContent=O("appOpenOnPhone"),o.onclick=()=>Cs({cmd:"phone",pkg:n.pkg}),e.status.appendChild(o)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var bA=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function _A(n){let e={shizuku_unavailable:O("appNeedShizuku"),shizuku_denied:O("appShizukuDenied"),shizuku_blocked:O("appShizukuBlocked"),display_refused:O("appDisplayRefused"),display_failed:O("appDisplayFailed"),no_launcher_activity:O("appNoLauncher"),consent_denied:O("appConsentDenied"),mirror_stopped:O("appMirrorStopped"),mirror_failed:O("appMirrorFailed"),mirror_refused:O("appMirrorFailed"),projection_failed:O("appMirrorFailed"),display_empty:O("appDisplayEmpty"),app_not_running:O("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?O("appSurfaceFailed"):e[t]||`${O("appFailed")}: ${t}`}function _y(n,e){let t=di.get(n);t&&(di.delete(n),e&&Mp.add(n),Nt(t.win),Mp.delete(n))}Ge("wins",()=>{for(let n of[...di.keys()]){let e=di.get(n);Mp.has(n)||me.includes(e.win)||(di.delete(n),Cs({cmd:"close",pkg:n}))}Se("appsState")});function _d(n){n&&Cs({cmd:"open",pkg:n,shape:Ap(n,Ep(n))})}function wA(n){var a;let e=di.get(n),t=Ep(n),s=((e==null?void 0:e.surface.dataset.shape)||Ap(n,t))==="portrait"?"landscape":"portrait",r=cl({shape:s,display:(t==null?void 0:t.display)||((a=e==null?void 0:e.session)==null?void 0:a.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),Cs({cmd:"shape",pkg:n,shape:s}),wd(!0)}function wy(){Cs({cmd:"shizuku"})}function SA(){en.loaded=!1,Cs({cmd:"refresh"})}function MA(n){li(!0,{nativeId:"app:"+n})}function Tp(n){var e,t;if(en.loaded&&!n)return en;en.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,en.query,en.showSystem),s=JSON.parse(i||'{"apps":[]}');en.apps=Array.isArray(s.apps)?s.apps:[],en.shown=s.shown||en.apps.length,en.total=s.total||en.apps.length,en.icons=s.icons||en.icons}catch{en.apps=[]}return Se("appsState"),en}function wd(n){let e=[];for(let[i,s]of di)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===by||(by=t,Cs({cmd:"sync",windows:e}))}function AA(){xy||(xy=setInterval(()=>{di.size&&wd(!1)},fA))}Ge("wins",()=>wd(!0));var Sy={install:()=>O("shizukuInstall"),start:()=>O("shizukuStart"),update:()=>O("shizukuUpdate"),ask:()=>O("shizukuAsk"),denied:()=>O("shizukuDenied"),rebind:()=>O("shizukuRebind"),ready:()=>O("shizukuReady"),unknown:()=>O("shizukuUnknown")},EA=new Set(["hosted","permission","capture"]);function TA(){let n=Et.shizuku||{};return EA.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function Ey(){var d;let n=Et.shizuku||{},e=TA(),t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>O("routeHosted"),permission:()=>O("routePermission"),capture:()=>O("routeCapture")};s.textContent=(r[e]||r.capture)();let a=document.createElement("small");if(a.textContent=(Sy[n.state]||Sy.unknown)(),s.appendChild(a),e==="capture"&&!((d=Et.input)!=null&&d.accessibility)){let u=document.createElement("small");u.textContent=O("appCaptureInput"),s.appendChild(u)}else if(n.detail){let u=document.createElement("small");u.textContent=n.detail,s.appendChild(u)}t.append(i,s);let o=document.createElement("button");o.className="az-btn",n.ask?(o.textContent=O("shizukuGrant"),o.onclick=()=>wy()):(o.textContent=O("shizukuRecheck"),o.onclick=()=>{SA(),wy()}),t.appendChild(o);let l=document.createElement("button");l.className="az-btn ghost",l.textContent=O("appSelfTest"),l.onclick=async()=>{var u;l.disabled=!0;try{await Cs({cmd:"selftest"});let h=(u=Et.diagnostics)==null?void 0:u.selfTest;h&&ht(h.ok?O("appSelfTestOk"):O("appSelfTestFailed"))}catch{ht(O("appCommandFailed"))}finally{l.disabled=!1}},t.appendChild(l);let c=document.createElement("button");return c.className="az-btn ghost",c.textContent=O("appDiagnostics"),c.onclick=()=>{let u=t.querySelector(".az-caps");if(u){u.remove();return}let h=document.createElement("pre");h.className="az-caps",h.textContent=RA(),h.onclick=()=>CA(h.textContent),t.appendChild(h)},t.appendChild(c),t}function RA(){var i;let n=Et.shizuku||{},e=Et.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||Et.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...Et.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=Et.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||Et.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function CA(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&ht(O("appDiagnosticsCopied"));return}catch{}}var Ji=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Rp(n){let e=Ep(n.pkg),t=`<span class="nm">${Ji((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${Ji(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${Ji(e.state==="suspended"?O("appMinimized"):O("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${Ji(O("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${Ji(n.pkg)}" data-session="${e?Ji(e.state):""}" data-pkg="${Ji(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${Ji(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${Ji(O("androidApps"))}">${te("device")}</span>`+r+s+`</span><span class="lib-label">${Ji(n.label||n.pkg)}</span></button>`}function Sd(n){let e=di.get(n);e&&Kt(e.win)}function Ty(){return mA().length}function Ry(){return en.apps}function Cy(){fe&&(window.nextvrApps=yA,AA(),Ge("lang",()=>{en.loaded=!1,Se("appsState")}))}var Ed="nextvr-xr-game",dl="nextvr-xr-menu",Dt={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},or=[],LA=null,Pp=!1,Py=()=>Dt,Iy=()=>or,Ny=()=>Dt.hosting,ul=()=>Dt.runtime==="ready",Dy=()=>Dt.handMode,PA=()=>{var n;return((n=Dt.game)==null?void 0:n.package)||null};function Is(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function Ly(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(Dt,e),Ad=null,Dt.hosting&&((t=Dt.game)!=null&&t.package)?DA(Dt.game):kA(),Se("xr",{...Dt,games:or}))}function IA(n){let e;try{e=JSON.parse(n)}catch{e=null}or=Array.isArray(e==null?void 0:e.games)?e.games:[],LA=(e==null?void 0:e.problem)||null,Pp=!0,Se("xr",{...Dt,games:or})}function ky(){var n,e;if(!(!fe||window.nextvrXr)){window.nextvrXr=Ly,window.nextvrXrLibrary=IA;try{Ly(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}Cp(),Ge("lang",()=>{Cp(),Se("xr",{...Dt,games:or})})}}function Cp(){Is({cmd:"library"})}function Oy(){Pp=!1,Is({cmd:"refresh"}),Cp()}function Ip(n){!n||Dt.hosting||Is({cmd:"open",package:n})}function Np(){Dt.hosting&&Is({cmd:"close"})}function NA(){Dt.hosting&&Is({cmd:"minimize"})}function Uy(){Dt.hosting&&Is({cmd:"restore"})}function Dp(){Is({cmd:"runtime"})}function Fy(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}Dt.handMode=e,Se("xr",{...Dt,games:or})}function kp(){Is({cmd:"selftest"})}function Op(){return or.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function By(n){let e=n.game,t=`<span class="nm">${Ls(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=PA()===e.package?`<span class="lib-open">${Ls(O("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${Ls(e.describe||O("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${Ls(e.package)}" aria-label="${Ls(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${Ls(O("xrTitle"))}">${te("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${Ls(e.label||e.package)}</span></button>`}var Ls=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function zy(){if(ul()||!Pp||!or.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=Dt.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=Dt.runtimeBundled?O("xrMissing"):O("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=Dt.summary||Dt.problem||O("xrSummaryMissing"),t.appendChild(i),n.append(e,t),Dt.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=O("xrInstall"),r.onclick=()=>{Dp(),ht(O("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=O("xrSelfTest"),s.onclick=()=>kp(),n.appendChild(s),n}var Ps=!1,Lp=null;function DA(n){var d;if(Ps)return;Lp={windows:me.map(u=>({win:u,hidden:u.hidden})),dockHidden:yd(),keyboard:dy(),focus:((d=al())==null?void 0:d.id)||null};for(let u of me)u.setHidden(!0);ar(!0),Qt(!0),document.documentElement.classList.add("game-on","xr-on"),Ps=!0,Up.reset(),Md(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=O("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=Dt.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let a=document.createElement("span");a.className="app-bar-spacer";let o=document.createElement("button");o.className="app-key",o.title=O("appMinimize"),o.setAttribute("aria-label",O("appMinimize")),o.innerHTML=te("chevronDown"),o.onclick=()=>NA();let l=document.createElement("button");l.className="app-key",l.title=O("close"),l.setAttribute("aria-label",O("close")),l.innerHTML=te("x"),l.onclick=()=>Np(),t.append(i,a,o,l),e.append(t,s);let c=cl({shape:"landscape",display:{w:r.w,h:r.h}});Jt({id:Ed,title:n.label||n.package,node:e,w:c.w,h:c.h})}function kA(){if(!Ps)return;Ps=!1,Ad=null;for(let e of[...me])(e.id===Ed||e.id===dl)&&Nt(e);document.documentElement.classList.remove("game-on","xr-on");let n=Lp;if(Lp=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...me])!e.has(i)&&!i.onboarding&&Nt(i);Qt(n.dockHidden);for(let{win:i,hidden:s}of n.windows)me.includes(i)&&i.setHidden(s);n.keyboard&&ar(!1);let t=me.find(i=>i.id===n.focus);t&&Kt(t)}Up.reset(),Md(0)}Ge("wins",()=>{!Ps||!window.nextvrXr||me.some(n=>n.id===Ed)||Np()});var Up=new $a,OA=()=>Ps&&me.some(n=>n.id===dl);function UA(){if(!Ps||me.some(i=>i.id===dl)||!Dt.game)return;let n=Dt.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${Ls(n.label||n.package)}</div>
    <p class="gm-sub">${Ls(O("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${O("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${te("settings")}<span>${O("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${O("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&(FA(),s.dataset.act==="exit"?Np():s.dataset.act==="settings"&&Se("game:settings"))});let t=Jt({id:dl,title:O("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:qt,z:-.55}});t==null||t.setCurve(0)}function FA(){let n=me.find(e=>e.id===dl);n&&Nt(n)}function Md(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var Ad=null;function BA(){let n=Ps?sy(ge.x,ge.y):null,e=!!n&&n.win.id!==Ed&&!n.win.onboarding;e!==Ad&&(Ad=e,Is({cmd:"hands-ui",blocked:e}))}Ge("phonehands",n=>{if(!Ps)return;BA();let e=(n.hands||[]).filter(s=>s.pinching),t=od(e),i=Up.update(performance.now(),{left:t,right:t});Md(i.progress),i.opened&&UA(),i.closed&&!OA()&&Md(0)});var hl=null,Wn=null,Rd="",Td=0,lr=new Set,zA='button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';function HA(){var i;let n=document.getElementById("entry-fullscreen");if(n&&!n.hidden)return n;let e=al();if(e&&!e.hidden)return e.el;let t=document.querySelector(".dock");return t&&t.offsetWidth&&getComputedStyle(t).display!=="none"?t:((i=me.find(s=>!s.hidden&&!s.onboarding))==null?void 0:i.el)||null}function Hy(){let n=HA();return n?[...n.querySelectorAll(zA)].filter(e=>{if(e.closest("[hidden],.win-shell[hidden]"))return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&getComputedStyle(e).visibility!=="hidden"}):[]}function Ns(n){Wn&&Wn!==n&&Wn.classList.remove("joycon-selected"),Wn=n||null,Wn&&(Wn.classList.add("joycon-selected"),Wn.focus({preventScroll:!0}))}function Fp(n){let e=Hy();if(!e.length){Ns(null);return}if(e.indexOf(Wn)<0){Ns(e[0]);return}let i=Wn.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2,a=n==="left"?[-1,0]:n==="right"?[1,0]:n==="up"?[0,-1]:[0,1],o=null,l=1/0;for(let c of e){if(c===Wn)continue;let d=c.getBoundingClientRect(),u=d.left+d.width/2-s,h=d.top+d.height/2-r,f=u*a[0]+h*a[1];if(f<=2)continue;let g=Math.abs(u*a[1]-h*a[0]),y=f+g*1.8;y<l&&(o=c,l=y)}o||(o=n==="left"||n==="up"?e.at(-1):e[0]),Ns(o)}function VA(){let n=Hy();n.length&&((!Wn||!n.includes(Wn))&&Ns(n[0]),Wn==null||Wn.click())}function GA(){var s;let n=document.querySelector('#entry-fullscreen [data-entry-act="back"]');if(n){n.click(),Ns(null);return}let e=al(),t=(s=e==null?void 0:e.el)==null?void 0:s.querySelector('[data-entry-act="back"]');if(t){t.click(),Ns(null);return}if(e&&!e.onboarding){Nt(e),Ns(null);return}let i=document.activeElement;i&&i!==document.body&&i.blur()}function WA(){if(hl){let n=hl;hl=null;for(let{win:e,hidden:t}of n.windows)me.includes(e)&&e.setHidden(t);Qt(n.dockHidden),Xt(n.dockVisible),ar(n.keyboardHidden),Ns(null);return}hl={windows:me.filter(n=>!n.onboarding).map(n=>({win:n,hidden:n.hidden})),dockHidden:yd(),dockVisible:ay(),keyboardHidden:uy()};for(let{win:n}of hl.windows)n.setHidden(!0);ar(!0),Qt(!0),Ns(null)}function qA(n,e){if(n==="home"){!lr.has(n)&&e===0&&WA(),lr.add(n);return}if(n==="left"||n==="right"||n==="up"||n==="down"){(!lr.has(n)||e>0)&&Fp(n),lr.add(n);return}lr.has(n)||(lr.add(n),n==="accept"?VA():n==="back"&&GA())}function XA(n,e,t=0){e?qA(n,t):lr.delete(n)}function $A(n,e){return Math.abs(n)<.58&&Math.abs(e)<.58?"":Math.abs(n)>Math.abs(e)?n<0?"left":"right":e<0?"up":"down"}function YA(n,e){let t=$A(n,e);if(!t){Rd="",Td=0;return}let i=performance.now();t!==Rd?(Rd=t,Fp(t),Td=i+320):i>=Td&&(Fp(t),Td=i+170)}function Vy(){!fe||window.__nextvrJoyconInstalled||(window.__nextvrJoyconInstalled=!0,window.__nextvrJoyconKey=XA,window.__nextvrJoyconAxes=YA,window.addEventListener("blur",()=>{lr.clear(),Rd=""}),window.addEventListener("gamepadconnected",n=>{var t;let e=((t=n.gamepad)==null?void 0:t.id)||"Bluetooth gamepad";ht(/joy.?con/i.test(e)?"Joy-Con conectado":`Controle conectado: ${e}`)}))}var Gy="v2.0.0";var Bp="ENTRE EM OUTRO MUNDO";var Wy=Object.freeze(["NeyVR","Faylan","colaboradores do nextVR","JocaVR"]),qy=Object.freeze({NeyVR:"o Dono absoluto mais aurudo do planeta.",Faylan:"o desenvolvedor mais sabido de todo o universo muita aura","colaboradores do nextVR":"",JocaVR:"o portador de jogos mais importante do planeta aurudo 67"}),zp="NextVR \u2014 realidade aumentada",Cd=Object.freeze(["O NextVR \xE9 um projeto de realidade virtual criado para transformar a maneira como voc\xEA interage com o mundo digital usando apenas um celular e um VR Box.","Nosso objetivo \xE9 aproximar a experi\xEAncia de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.","Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualiza\xE7\xE3o representa um novo passo rumo a uma experi\xEAncia mais completa, interativa e acess\xEDvel.","NextVR \u2014 Mais que um app, uma nova forma de ver."]),jA=[zp,...Cd].join(`

`);var ZA=`
<svg viewBox="0 0 28 24" fill="none" class="entry-back-svg" aria-hidden="true">
  <path d="M11 5L4 12L11 19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19C21.8 12 24 14.2 24 17V19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,KA=`
<svg viewBox="0 0 36 36" fill="none" class="entry-reticle-svg" aria-hidden="true">
  <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M18 3V8M18 28V33M3 18H8M28 18H33" stroke="currentColor" stroke-width="2"/>
</svg>`,Xy=`
<svg viewBox="0 0 24 24" fill="currentColor" class="entry-user-svg" aria-hidden="true">
  <circle cx="12" cy="8.2" r="4.2"/>
  <path d="M4 20.5c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8z"/>
</svg>`,$y=`
<svg viewBox="0 0 24 24" fill="none" class="entry-store-svg" aria-hidden="true">
  <path d="M6 8h12l-1.2 12H7.2L6 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,JA=`
<svg viewBox="0 0 24 24" class="entry-verified-svg" aria-hidden="true">
  <circle cx="12" cy="12" r="10.5" fill="#fe2c55" stroke="#ff6384" stroke-width="1"/>
  <path d="M7.6 12.4l3 3 5.8-6.2" fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,QA=[{id:"beat-vr",name:"Beat Saber",cat:"Modo VR Imediato \xB7 4.9 \u2605",bg:"#070814",img:"./beat-saber-logo.jpg"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"A\xE7\xE3o \xB7 Arena VR \xB7 4.8 \u2605",bg:"#0a1426",img:"./hyper-dash-logo.jpg"},{id:"roblox-vr",name:"Roblox",cat:"Ambiente Preto \xB7 4.8 \u2605",bg:"#090d16",img:"./roblox-logo.jpg"},{id:"tiktok",name:"TikTok",cat:"V\xEDdeos Curtos \xB7 4.9 \u2605",bg:"#000000",img:"./tiktok-logo.jpg"},{id:"youtube",name:"YouTube VR",cat:"V\xEDdeo \xB7 360\xB0 \xB7 4.8 \u2605",bg:"#dc2626",img:"./icons/youtube.svg"},{id:"discord",name:"Discord",cat:"Social \xB7 Voz \xB7 4.7 \u2605",bg:"#4f46e5",img:"./icons/discord.svg"},{id:"netflix",name:"Netflix",cat:"Cinema \xB7 TV \xB7 4.8 \u2605",bg:"#991b1b"},{id:"spotify",name:"Spotify",cat:"M\xFAsica \xB7 \xC1udio \xB7 4.8 \u2605",bg:"#059669",img:"./icons/spotify.svg"}],eE=[{id:"chrome",label:"Chrome N",url:"./icons/nextvr-chrome-n.png"},{id:"purple",label:"Neon N",url:"./icons/nextvr-n.png"},{id:"cyber",label:"Cyber Blue",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><circle cx="40" cy="29" r="13" fill="#fff"/><path d="M16 68c0-13 11-21 24-21s24 8 24 21z" fill="#fff"/></svg>')},{id:"emerald",label:"Emerald VR",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><rect x="14" y="26" width="52" height="26" rx="10" fill="#fff"/><circle cx="30" cy="39" r="6" fill="#0f172a"/><circle cx="50" cy="39" r="6" fill="#0f172a"/></svg>')}];function Ai(n){return String(n||"").replace(/[&<>"']/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":e===">"?"&gt;":e==='"'?"&quot;":"&#39;")}var Hp={pt:{start:"Iniciar",startVr:"Iniciar VR",settings:"Configura\xE7\xF5es",basicSettings:"Configura\xE7\xF5es b\xE1sicas",handStyle:"Hand tracking style",handDrawn:"M\xE3o desenhada",handInvisible:"Invis\xEDvel",collaborators:"Colaboradores",about:"Sobre",back:"Voltar",store:"Store",storeTitle:"Store NextVR \u2014 Jogos & Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Ativado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"qualidade",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"M\xE9dia (890p)",qLow:"Baixa (390p)",ocularCell:"c\xE2mera grande ocular (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRILHO",handCell:"Hand tracking",fingerTouchOn:"Toque (Sem Pin\xE7a): ON",fingerTouchOff:"Toque (Sem Pin\xE7a): OFF",envTitle:"Ambiente",envAr:"C\xE2mera (AR)",envSunset:"P\xF4r do Sol",envNight:"Noite"},en:{start:"Start",startVr:"Start VR",settings:"Settings",basicSettings:"Basic Settings",handStyle:"Hand tracking style",handDrawn:"Drawn hand",handInvisible:"Invisible",collaborators:"Collaborators",about:"About",back:"Back",store:"Store",storeTitle:"NextVR Store \u2014 Games & Apps",langCell:"LANGUAGE",spatialCell:"SPATIAL APP",on:"Enabled",dock:"Dock",dockSnapOn:"Dock Slot: ON",dockSnapOff:"Dock Slot: OFF",qualityCell:"quality",qAuto:"Auto",qHigh:"High (1080p)",qMed:"Medium (890p)",qLow:"Low (390p)",ocularCell:"ultra-wide camera (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRIGHTNESS",handCell:"Hand tracking",fingerTouchOn:"Finger Touch: ON",fingerTouchOff:"Finger Touch: OFF",envTitle:"Environment",envAr:"Camera (AR)",envSunset:"Sunset",envNight:"Night"},es:{start:"Iniciar",startVr:"Iniciar VR",settings:"Ajustes",basicSettings:"Ajustes b\xE1sicos",handStyle:"Hand tracking style",handDrawn:"Mano dibujada",handInvisible:"Invisible",collaborators:"Colaboradores",about:"Acerca de",back:"Volver",store:"Tienda",storeTitle:"Tienda NextVR \u2014 Juegos y Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Activado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"calidad",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"Media (890p)",qLow:"Baja (390p)",ocularCell:"c\xE1mara gran angular (0.5x)",volumeCell:"VOLUMEN",brightnessCell:"BRILLO",handCell:"Hand tracking",fingerTouchOn:"Toque \xCDndice: ON",fingerTouchOff:"Toque \xCDndice: OFF",envTitle:"Entorno",envAr:"C\xE1mara (AR)",envSunset:"Atardecer",envNight:"Noche"},ja:{start:"\u958B\u59CB",startVr:"VR\u3092\u958B\u59CB",settings:"\u8A2D\u5B9A",basicSettings:"\u57FA\u672C\u8A2D\u5B9A",handStyle:"Hand tracking style",handDrawn:"\u624B\u3092\u8868\u793A",handInvisible:"\u975E\u8868\u793A",collaborators:"\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u30FC",about:"\u6982\u8981",back:"\u623B\u308B",store:"\u30B9\u30C8\u30A2",storeTitle:"NextVR \u30B9\u30C8\u30A2 \u2014 \u30B2\u30FC\u30E0\uFF06\u30A2\u30D7\u30EA",langCell:"\u8A00\u8A9E",spatialCell:"SPATIAL APP",on:"\u30AA\u30F3",dock:"\u30C9\u30C3\u30AF",dockSnapOn:"\u30B9\u30ED\u30C3\u30C8: ON",dockSnapOff:"\u30B9\u30ED\u30C3\u30C8: OFF",qualityCell:"\u753B\u8CEA",qAuto:"\u81EA\u52D5",qHigh:"\u9AD8 (1080p)",qMed:"\u4E2D (890p)",qLow:"\u4F4E (390p)",ocularCell:"\u8D85\u5E83\u89D2\u30AB\u30E1\u30E9 (0.5x)",volumeCell:"\u97F3\u91CF",brightnessCell:"\u660E\u308B\u3055",handCell:"Hand tracking",fingerTouchOn:"\u6307\u30BF\u30C3\u30C1: ON",fingerTouchOff:"\u6307\u30BF\u30C3\u30C1: OFF",envTitle:"\u74B0\u5883",envAr:"\u30AB\u30E1\u30E9 (AR)",envSunset:"\u5915\u66AE\u308C",envNight:"\u591C"},ru:{start:"\u041D\u0430\u0447\u0430\u0442\u044C",startVr:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C VR",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",basicSettings:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",handStyle:"Hand tracking style",handDrawn:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0443\u043A\u0430",handInvisible:"\u041D\u0435\u0432\u0438\u0434\u0438\u043C\u0430\u044F",collaborators:"\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",about:"\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",back:"\u041D\u0430\u0437\u0430\u0434",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",storeTitle:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D NextVR \u2014 \u0418\u0433\u0440\u044B \u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",langCell:"\u042F\u0417\u042B\u041A",spatialCell:"SPATIAL APP",on:"\u0412\u043A\u043B.",dock:"\u0414\u043E\u043A",dockSnapOn:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: ON",dockSnapOff:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: OFF",qualityCell:"\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",qAuto:"\u0410\u0432\u0442\u043E",qHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qMed:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",ocularCell:"\u0448\u0438\u0440\u043E\u043A\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430 (0.5x)",volumeCell:"\u0413\u0420\u041E\u041C\u041A\u041E\u0421\u0422\u042C",brightnessCell:"\u042F\u0420\u041A\u041E\u0421\u0422\u042C",handCell:"Hand tracking",fingerTouchOn:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: ON",fingerTouchOff:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: OFF",envTitle:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",envAr:"\u041A\u0430\u043C\u0435\u0440\u0430 (AR)",envSunset:"\u0417\u0430\u043A\u0430\u0442",envNight:"\u041D\u043E\u0447\u044C"},de:{start:"Starten",startVr:"VR starten",settings:"Einstellungen",basicSettings:"Grundeinstellungen",handStyle:"Hand tracking style",handDrawn:"Gezeichnete Hand",handInvisible:"Unsichtbar",collaborators:"Mitwirkende",about:"\xDCber",back:"Zur\xFCck",store:"Store",storeTitle:"NextVR Store \u2014 Spiele & Apps",langCell:"SPRACHE",spatialCell:"SPATIAL APP",on:"Aktiviert",dock:"Dock",dockSnapOn:"Dock-Slot: ON",dockSnapOff:"Dock-Slot: OFF",qualityCell:"Qualit\xE4t",qAuto:"Auto",qHigh:"Hoch (1080p)",qMed:"Mittel (890p)",qLow:"Niedrig (390p)",ocularCell:"Ultraweitwinkel (0.5x)",volumeCell:"LAUTST\xC4RKE",brightnessCell:"HELLIGKEIT",handCell:"Hand tracking",fingerTouchOn:"Finger-Touch: ON",fingerTouchOff:"Finger-Touch: OFF",envTitle:"Umgebung",envAr:"Kamera (AR)",envSunset:"Sonnenuntergang",envNight:"Nacht"}},Je=n=>(Hp[Oh()]||Hp.pt)[n]||Hp.pt[n]||n;function Vp(n){return Je(n?"handDrawn":"handInvisible")}function Gp({onStart:n,onLaunchGorilla:e,getStatus:t,fullscreen:i=!1}={}){let s=document.createElement("div");s.className=i?"entry-menu-root entry-menu-root--fullscreen":"entry-menu-root",s.dataset.entryMenu="2.0.0",i&&(s.dataset.entryFullscreen="1");let r="home",a=6,o=0,l=null,c=null,d=["Carregando c\xE2mera AR...","Carregando Dock...","Otimizando Hand tracking...","Calibrando lentes 3D...","Carregando aplicativos espaciais...","Iniciando NextVR..."],u=I=>I<17?d[0]:I<35?d[1]:I<55?d[2]:I<75?d[3]:I<92?d[4]:d[5],h=()=>{l&&(clearInterval(l),l=null)},f=()=>{let I=s.querySelector("[data-entry-countdown]"),U=s.querySelector("[data-entry-load-pct]"),L=s.querySelector("[data-entry-load-bar]"),E=s.querySelector("[data-entry-load-status]"),k=s.querySelector("[data-entry-countdown-sub]");I&&(I.textContent=String(a)),U&&(U.textContent=`${o}%`),L&&(L.style.width=`${o}%`),E&&(E.textContent=u(o)),k&&(k.textContent=`COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...`)},g=()=>{h(),a=6,o=0,r="loading",b();let I=6e3,U=performance.now();l=setInterval(()=>{let L=Math.max(0,performance.now()-U);if(o=Math.min(100,Math.round(L/I*100)),a=Math.max(1,Math.ceil((I-L)/1e3)),L>=I){o=100,f(),h(),n==null||n();return}f()},60)},y=()=>{let I=t==null?void 0:t();if(I!=null&&I.clockText)return I.clockText;if(I!=null&&I.time&&I.time!=="--:--")return I.time;let U=new Date;return`${String(U.getHours()).padStart(2,"0")}:${String(U.getMinutes()).padStart(2,"0")}`},p=()=>{var U,L;try{let E=(L=(U=window.NativeXR)==null?void 0:U.battery)==null?void 0:L.call(U);if(E&&E!=="null"){let k=typeof E=="string"?JSON.parse(E):E;if(k&&typeof k.level=="number"){let V=Math.round(Math.max(0,Math.min(1,k.level))*100);return{percent:V,charging:!!k.charging,text:`${V}%${k.charging?" \u26A1":""}`}}}}catch{}let I=t==null?void 0:t();if(I&&typeof I.batteryLevel=="number"){let E=Math.round(Math.max(0,Math.min(1,I.batteryLevel))*100);return{percent:E,charging:!!I.charging,text:`${E}%${I.charging?" \u26A1":""}`}}return{percent:100,charging:!1,text:"100%"}},m=()=>{var I,U;S.handsOn=1,S.handDraw=S.handDraw?0:1,Ve(S),(U=(I=window.NativeXR)==null?void 0:I.handVisuals)==null||U.call(I,!!S.handDraw),Se("handDraw",!!S.handDraw)},x=()=>{let I=Vp(S.handDraw);return`
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

        <button type="button" class="entry-card ${S.handDraw?"entry-card--hand-drawn":"entry-card--hand-invisible"}" data-entry-act="hand-style" data-hand-draw="${S.handDraw?"1":"0"}">
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
              ${$y}<span>${Je("store")}</span>
            </button>
          </div>
        </div>
      </div>`,w=()=>{let I=!!S.gorillaInstalled,L=c!==null?`<button type="button" class="entry-btn entry-btn--primary" disabled>Baixando... ${c}%</button>`:I?`<span class="entry-store-badge-ok" data-entry-gorilla-installed>\u2713 Na Biblioteca</span>
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
            ${QA.map(E=>{let k=E.img?`<img src="${E.img}" alt="${Ai(E.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block">`:E.name.slice(0,2).toUpperCase();return`
              <div class="entry-store-card" data-entry-store-app="${E.id}">
                <div class="entry-store-card-dot" style="background:${E.bg};overflow:hidden;padding:0">${k}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${Ai(E.name)}</div>
                  <div class="entry-store-card-cat">${Ai(E.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Gr\xE1tis</span>
              </div>`}).join("")}
          </div>
        </div>
      </div>`},A=()=>{let I=[{id:"passthrough",label:Je("envAr")},{id:"sunset",label:Je("envSunset")},{id:"night",label:Je("envNight")},{id:"dark",label:"Dark Panor\xE2mico"}],U=[{id:"auto",label:Je("qAuto")},{id:"high",label:Je("qHigh")},{id:"medium",label:Je("qMed")},{id:"low",label:Je("qLow")}],L=S.entryEnvChosen&&S.env&&S.env!=="passthrough"?S.env:"passthrough",E=S.quality==="med"?"medium":S.quality||"auto",k=!!S.wideCamera,V=!!S.spatialLauncher,z=S.dockSnapSlot!==0,W=S.lang||"pt",K=Number.isFinite(S.mediaVolume)?S.mediaVolume:70,Q=Number.isFinite(S.brightness)?S.brightness:75;return`
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
              <button type="button" class="entry-seg-btn ${z?"on":""}" data-entry-dock-snap="${z?"1":"0"}" title="Espa\xE7o pr\xE9-definido ao mover janelas na Dock normal">${Je(z?"dockSnapOn":"dockSnapOff")}</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--qualidade">
            <div class="entry-bento-title">${Je("qualityCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              ${U.map(ie=>`<button type="button" class="entry-seg-btn ${E===ie.id?"on":""}" data-entry-quality="${ie.id}">${ie.label}</button>`).join("")}
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--ocular">
            <div class="entry-bento-title">${Je("ocularCell")} \xB7 3DoF / 6DoF</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${k?"on":""}" data-entry-wide-cam="1">0.5x</button>
              <button type="button" class="entry-seg-btn ${k?"":"on"}" data-entry-wide-cam="0">1.0x</button>
              <button type="button" class="entry-seg-btn ${S.sixdof===0?"on":""}" data-entry-dof="3dof" title="Modo 3DoF (rota\xE7\xE3o de cabe\xE7a)">3DoF</button>
              <button type="button" class="entry-seg-btn ${S.sixdof!==0?"on":""}" data-entry-dof="6dof" title="Modo 6DoF Falso (andar no espa\xE7o)">6DoF</button>
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
              <button type="button" class="entry-seg-btn ${S.handDraw?"on":""}" data-entry-hand-draw="1">${Je("handDrawn")}</button>
              <button type="button" class="entry-seg-btn ${S.handDraw?"":"on"}" data-entry-hand-draw="0">${Je("handInvisible")}</button>
              <button type="button" class="entry-seg-btn ${S.fingerTouch!==0?"on":""}" data-entry-finger-touch="${S.fingerTouch!==0?"1":"0"}" title="Toque com o indicador indo \xE0 frente sem precisar pin\xE7ar">${S.fingerTouch!==0?Je("fingerTouchOn"):Je("fingerTouchOff")}</button>
              <button type="button" class="entry-seg-btn ${S.pinchOnApp!==0?"on":""}" data-entry-pinch-app="${S.pinchOnApp!==0?"1":"0"}" title="Fazer a pin\xE7a encima de um app abre o app na hora, sem precisar do raio">Pin\xE7a no App (Sem Raio): ${S.pinchOnApp!==0?"ON":"OFF"}</button>
              <button type="button" class="entry-seg-btn ${S.gunGesture!==0?"on":""}" data-entry-gun-gesture="${S.gunGesture!==0?"1":"0"}" title="Fazer pose de arminha e fechar o indicador para ocultar/mostrar a Dock" style="display:inline-flex;align-items:center;justify-content:center;gap:6px"><img src="./gun-logo.jpg" alt="" style="width:15px;height:15px;border-radius:50%;object-fit:cover"><span>Arminha (Dock): ${S.gunGesture!==0?"ON":"OFF"}</span></button>
              <button type="button" class="entry-seg-btn ${S.showFps?"on":""}" data-entry-fps="1">FPS: ${S.showFps?"ON":"OFF"}</button>
              <div class="entry-hand-env-title">${Je("envTitle")}</div>
              ${I.map(ie=>`<button type="button" class="entry-seg-btn ${L===ie.id?"on":""}" data-entry-env="${ie.id}">${ie.label}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>`},T=()=>`
    <div class="entry-subpanel" data-entry-panel="collaborators">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title">${Je("collaborators")}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Je("back")}</button>
        </div>
      </div>
      <div class="entry-collab-list" role="list">
        ${Wy.map(I=>{let U=qy[I]||"",L=I==="colaboradores do nextVR";return`
          <div class="entry-collab-item ${L?"entry-collab-item--blue":""}" role="listitem" data-collaborator-name="${I}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name ${L?"entry-collab-name--blue":""}" ${L?'data-collab-blue="1"':""}>${I}</span>
              <span class="entry-collab-verified" data-collab-verified="${I}" title="Verificado">${JA}</span>
              ${U?`<span class="entry-collab-bio" data-collab-bio="${I}">${Ai(U)}</span>`:""}
            </span>
          </div>`}).join("")}
      </div>
    </div>`,R=()=>`
    <div class="entry-subpanel entry-subpanel--about" data-entry-panel="about">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title" data-about-title>${zp}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
        </div>
      </div>
      <div class="entry-about-body" data-about-body>
        ${Cd.map((I,U)=>`
          <p class="entry-about-p ${U===Cd.length-1?"entry-about-p--closing":""}">${I}</p>
        `).join("")}
      </div>
    </div>`,F=()=>{let I=S.profileName||"",U=S.profileAvatar||"";return`
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
              ${U?`<img src="${Ai(U)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`:Xy}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK</span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${Ai(I)}" />
            </label>
            <div class="entry-login-presets-wrap">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR</span>
              <div class="entry-login-presets">
                ${eE.map(E=>`
                  <button type="button" class="entry-login-preset ${U===E.url?"on":""}" data-profile-preset="${Ai(E.url)}" title="${Ai(E.label)}">
                    <img src="${Ai(E.url)}" alt="${Ai(E.label)}" />
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>`},_=I=>{let U=u(o);return`
      <div class="entry-hud-screen" data-entry-panel="loading" role="status" aria-live="polite">
        <div class="entry-subtitle">${Bp}</div>

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
      </div>`},b=()=>{let I=p();if(r==="loading"){s.innerHTML=_(I);let H=s.querySelector("[data-entry-cancel-countdown]");H&&(H.onclick=()=>{h(),r="home",b()});return}let U=r==="settings"?A():r==="collaborators"?T():r==="about"?R():r==="profile"?F():r==="store"?w():v(),L=S.profileName?Ai(S.profileName):"NextVR (Login)",E=S.profileAvatar?`<img src="${Ai(S.profileAvatar)}" alt="" class="entry-profile-q-img" />`:Xy;s.innerHTML=`
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">MAIN MENU</h1>
        <div class="entry-subtitle">${Bp}</div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${r==="store"?"on":""}" data-entry-act="store" title="Abrir Store NextVR">
            ${$y}
            <span>${Je("store")}</span>
          </button>
          <div class="entry-top-battery" data-entry-battery-pill title="Bateria sincronizada com o celular">
            <span class="entry-top-bat-bar"><i data-entry-battery-fill style="width:${I.percent}%"></i></span>
            <b data-entry-battery-top>${I.text}</b>
          </div>
        </div>
        <button type="button" class="entry-top-reticle" data-entry-act="gear" title="Configura\xE7\xF5es">${KA}</button>
      </header>

      <div class="entry-rail-backdrop" aria-hidden="true">
        <div class="entry-rail-lines"></div>
      </div>

      <div class="entry-layout">
        <aside class="entry-left-column">
          ${x()}

          <div class="entry-profile-box" data-entry-act="profile" role="button" tabindex="0" title="Clique para editar Nome e Foto de Perfil">
            <button type="button" class="entry-profile-q" data-entry-act="profile" title="Foto de Perfil / Login">${E}</button>
            <div class="entry-profile-info">
              <div class="entry-profile-name"><span data-profile-display-name>${L}</span> <small class="entry-profile-edit-tag">PERFIL</small></div>
              <div class="entry-profile-meta">Hand: <span data-profile-hand>${Vp(S.handDraw)}</span></div>
              <div class="entry-profile-meta">Hora: <span data-entry-clock>${y()}</span> \xB7 Bat: <span data-entry-battery>${I.text}</span></div>
            </div>
            <div class="entry-profile-ver">${Gy}</div>
          </div>
        </aside>

        <main class="entry-right-stage">
          ${U}
          ${r==="home"?`
            <button type="button" class="entry-corner-back" data-entry-act="start" title="Iniciar">
              ${ZA}
            </button>
          `:""}
        </main>
      </div>
    `,s.querySelectorAll('[data-entry-act="start"]').forEach(H=>{H.onclick=()=>{i?g():n==null||n()}});let k=s.querySelector("[data-entry-cancel-countdown]");k&&(k.onclick=()=>{h(),r="home",b()}),s.querySelectorAll('[data-entry-act="settings"], [data-entry-act="gear"]').forEach(H=>{H.onclick=()=>{h(),r=r==="settings"?"home":"settings",b()}}),s.querySelectorAll('[data-entry-act="store"]').forEach(H=>{H.onclick=le=>{le.stopPropagation(),h(),r=r==="store"?"home":"store",b()}}),s.querySelectorAll('[data-entry-act="hand-style"]').forEach(H=>{H.onclick=()=>{m(),b()}}),s.querySelectorAll('[data-entry-act="collaborators"]').forEach(H=>{H.onclick=()=>{h(),r=r==="collaborators"?"home":"collaborators",b()}}),s.querySelectorAll('[data-entry-act="about"]').forEach(H=>{H.onclick=()=>{h(),r=r==="about"?"home":"about",b()}}),s.querySelectorAll('[data-entry-act="profile"]').forEach(H=>{H.onclick=le=>{le.stopPropagation(),h(),r=r==="profile"?"home":"profile",b()}}),s.querySelectorAll('[data-entry-act="back"]').forEach(H=>{H.onclick=()=>{h(),r="home",b()}});let V=s.querySelector("[data-entry-install-gorilla]");V&&(V.onclick=()=>{if(S.gorillaInstalled=1,Ve(S),Se("gorilla-installed",!0),window.__gorillaFastTest){c=null,b();return}c=45,b(),setTimeout(()=>{c=90,r==="store"&&b()},110),setTimeout(()=>{c=null,r==="store"&&b()},230)});let z=s.querySelector("[data-entry-play-gorilla]");z&&(z.onclick=()=>{S.gorillaInstalled=1,Ve(S),Se("gorilla-installed",!0),typeof e=="function"?e():n==null||n()});let W=s.querySelector("[data-profile-name-input]");W&&(W.oninput=()=>{S.profileName=W.value.trim(),Ve(S);let H=s.querySelector("[data-profile-display-name]");H&&(H.textContent=S.profileName||"NextVR (Login)")});let K=s.querySelector("[data-profile-save]");K&&(K.onclick=()=>{W&&(S.profileName=W.value.trim()),Ve(S),Se("profile-updated",{name:S.profileName,avatar:S.profileAvatar}),r="home",b()}),s.querySelectorAll("[data-profile-preset]").forEach(H=>{H.onclick=()=>{W&&(S.profileName=W.value.trim()),S.profileAvatar=H.dataset.profilePreset,Ve(S),Se("profile-updated",{name:S.profileName,avatar:S.profileAvatar}),b()}});let Q=s.querySelector("[data-profile-upload]"),ie=s.querySelector("[data-profile-avatar-preview]"),q=s.querySelector("[data-profile-file]"),j=()=>{var H;W&&(S.profileName=W.value.trim(),Ve(S)),typeof((H=window.NativeXR)==null?void 0:H.pickProfilePhoto)=="function"?window.NativeXR.pickProfilePhoto():q&&q.click()};Q&&(Q.onclick=j),ie&&(ie.onclick=j),q&&(q.onchange=()=>{var ue;let H=(ue=q.files)==null?void 0:ue[0];if(!H)return;let le=new FileReader;le.onload=()=>{let _e=new Image;_e.onload=()=>{let $e=document.createElement("canvas");$e.width=160,$e.height=160;let X=$e.getContext("2d"),sn=Math.min(_e.width,_e.height),Ne=(_e.width-sn)/2,He=(_e.height-sn)/2;X.drawImage(_e,Ne,He,sn,sn,0,0,160,160),W&&(S.profileName=W.value.trim()),S.profileAvatar=$e.toDataURL("image/jpeg",.86),Ve(S),Se("profile-updated",{name:S.profileName,avatar:S.profileAvatar}),b()},_e.src=String(le.result)},le.readAsDataURL(H)}),s.querySelectorAll("[data-entry-hand-draw]").forEach(H=>{H.onclick=()=>{var le,ue;S.handsOn=1,S.handDraw=H.dataset.entryHandDraw==="1"?1:0,Ve(S),(ue=(le=window.NativeXR)==null?void 0:le.handVisuals)==null||ue.call(le,!!S.handDraw),Se("handDraw",!!S.handDraw),b()}}),s.querySelectorAll("[data-entry-finger-touch]").forEach(H=>{H.onclick=()=>{var le,ue;S.fingerTouch=S.fingerTouch===0?1:0,Ve(S),(ue=(le=window.NativeXR)==null?void 0:le.setFingerTouch)==null||ue.call(le,!!S.fingerTouch),Se("fingerTouch",!!S.fingerTouch),b()}}),s.querySelectorAll("[data-entry-pinch-app]").forEach(H=>{H.onclick=()=>{S.pinchOnApp=S.pinchOnApp===0?1:0,Ve(S),Se("pinchOnApp",!!S.pinchOnApp),b()}}),s.querySelectorAll("[data-entry-gun-gesture]").forEach(H=>{H.onclick=()=>{S.gunGesture=S.gunGesture===0?1:0,Ve(S),Se("gunGesture",!!S.gunGesture),b()}}),s.querySelectorAll("[data-entry-env]").forEach(H=>{H.onclick=()=>{let le=H.dataset.entryEnv;S.entryEnvChosen=1,le==="passthrough"?(S.env="passthrough",Ve(S),xi(!0)):Wi(le),b()}}),s.querySelectorAll("[data-entry-quality]").forEach(H=>{H.onclick=()=>{var le,ue;S.quality=H.dataset.entryQuality==="med"?"medium":H.dataset.entryQuality,Ve(S),Se("quality",S.quality),(ue=(le=window.NativeXR)==null?void 0:le.setQuality)==null||ue.call(le,S.quality),b()}}),s.querySelectorAll("[data-entry-dock-snap]").forEach(H=>{H.onclick=()=>{S.dockSnapSlot=S.dockSnapSlot===0?1:0,Ve(S),Se("dockSnapSlot",!!S.dockSnapSlot),b()}}),s.querySelectorAll("[data-entry-wide-cam]").forEach(H=>{H.onclick=()=>{var le,ue;S.wideCamera=H.dataset.entryWideCam==="1"?1:0,Ve(S),(ue=(le=window.NativeXR)==null?void 0:le.wideCamera)==null||ue.call(le,!!S.wideCamera),Se("wideCamera",!!S.wideCamera),b()}}),s.querySelectorAll("[data-entry-dof]").forEach(H=>{H.onclick=()=>{var ue,_e;let le=H.dataset.entryDof==="6dof";S.sixdof=le?1:0,Ve(S),le||Wt.reset(),(_e=(ue=window.NativeXR)==null?void 0:ue.setSixDofEnabled)==null||_e.call(ue,le),Se("sixdof",le),b()}}),s.querySelectorAll("[data-entry-spatial]").forEach(H=>{H.onclick=()=>{S.spatialLauncher=H.dataset.entrySpatial==="1"?1:0,S.spatialLauncher&&(S.env="passthrough",xi(!0)),Ve(S),Se("spatialLauncher",!!S.spatialLauncher),b()}}),s.querySelectorAll("[data-entry-lang]").forEach(H=>{H.onclick=()=>{Dr(H.dataset.entryLang),b()}}),s.querySelectorAll("[data-entry-fps]").forEach(H=>{H.onclick=()=>{S.showFps=S.showFps?0:1,Ve(S),Se("fps-toggle",S.showFps),b()}});let ne=s.querySelector("[data-entry-volume]");ne&&(ne.oninput=()=>{var ue,_e;let H=Number(ne.value);S.mediaVolume=H,Ve(S),fe&&((_e=(ue=window.NativeXR)==null?void 0:ue.setMediaVolumePercent)==null||_e.call(ue,H));let le=s.querySelector("[data-vol-val]");le&&(le.textContent=`${H}%`)});let ee=s.querySelector("[data-entry-brightness]");ee&&(ee.oninput=()=>{var ue,_e;let H=Number(ee.value);S.brightness=H,Ve(S),fe&&((_e=(ue=window.NativeXR)==null?void 0:ue.setBrightnessPercent)==null||_e.call(ue,H));let le=s.querySelector("[data-bri-val]");le&&(le.textContent=`${H}%`)})};return b(),s.resetToHome=()=>{h(),r="home",b()},Ge("handDraw",()=>{let I=Vp(S.handDraw),U=s.querySelector("[data-hand-style-label]"),L=s.querySelector("[data-profile-hand]"),E=s.querySelector('[data-entry-act="hand-style"]');U&&(U.textContent=I),L&&(L.textContent=I),E&&(E.dataset.handDraw=S.handDraw?"1":"0",E.classList.toggle("entry-card--hand-drawn",!!S.handDraw),E.classList.toggle("entry-card--hand-invisible",!S.handDraw))}),Ge("device-status",()=>{let I=s.querySelector("[data-entry-clock]");I&&(I.textContent=y());let U=p(),L=s.querySelector("[data-entry-battery]"),E=s.querySelector("[data-entry-battery-top]"),k=s.querySelector("[data-entry-battery-fill]");L&&(L.textContent=U.text),E&&(E.textContent=U.text),k&&(k.style.width=`${U.percent}%`)}),window.nextvrProfilePhoto=I=>{I&&(S.profileAvatar=String(I),Ve(S),Se("profile-updated",{name:S.profileName,avatar:S.profileAvatar}),b())},s}function Wp(n,e){if(e===Yg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Do||e===kc){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Do)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Ld=class extends xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kp(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new Qp(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new Zp(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new Jp(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Yp(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new uf(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Js.extractUrlBase(e);a=Js.resolveURL(c,this.path)}else a=Js.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Po(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jy){try{a[lt.KHR_BINARY_GLTF]=new hf(e)}catch(u){s&&s(u);return}r=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new xf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){let u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){let u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:a[u]=new jp;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[u]=new pf(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[u]=new ff;break;case lt.KHR_MESH_QUANTIZATION:a[u]=new mf;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function tE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yp=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,d=new Pe(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],dn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Pr(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ic(d),c.distance=u;break;case"spot":c=new Pc(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,dr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},jp=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,i){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],dn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}},Zp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Kp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(o,o)}return Promise.all(r)}},Jp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Qp=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],dn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Vt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],dn),Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},sf=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],dn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Vt)),Promise.all(r)}},rf=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},af=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},lf=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},cf=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},df=class{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(f),d,u,h,s.mode,s.filter),f})})}else return null}},uf=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Ei.TRIANGLES&&c.mode!==Ei.TRIANGLE_STRIP&&c.mode!==Ei.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,f=[];for(let g of u){let y=new Ee,p=new D,m=new nt,x=new D(1,1,1),v=new wc(g.geometry,g.material,h);for(let w=0;w<h;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&x.fromBufferAttribute(l.SCALE,w),v.setMatrixAt(w,y.compose(p,m,x));for(let w in l)if(w==="_COLOR_0"){let A=l[w];v.instanceColor=new Lr(A.array,A.itemSize,A.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);Ot.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}},Jy="glTF",pl=12,Yy={JSON:1313821514,BIN:5130562},hf=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,pl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-pl,r=new DataView(e,pl),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Yy.JSON){let c=new Uint8Array(e,pl+a,o);this.content=i.decode(c)}else if(l===Yy.BIN){let c=pl+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},pf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let d in a){let u=yf[d]||d.toLowerCase();o[u]=a[d]}for(let d in e.attributes){let u=yf[d]||d.toLowerCase();if(a[d]!==void 0){let h=i.accessors[e.attributes[d]],f=no[h.componentType];c[u]=f.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(f){for(let g in f.attributes){let y=f.attributes[g],p=l[g];p!==void 0&&(y.normalized=p)}u(f)},o,c,dn,h)})})}},ff=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},mf=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Pd=class extends js{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=s-t,u=(i-t)/d,h=u*u,f=h*u,g=e*c,y=g-c,p=-2*f+3*h,m=f-h,x=1-p,v=m-h+u;for(let w=0;w!==o;w++){let A=a[y+w+o],T=a[y+w+l]*d,R=a[g+w+o],F=a[g+w]*d;r[w]=x*A+v*T+p*R+m*F}return r}},nE=new nt,gf=class extends Pd{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return nE.fromArray(r).normalize().toArray(r),r}},Ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jy={9728:cn,9729:an,9984:sc,9985:_h,9986:go,9987:Xs},Zy={33071:si,33648:_o,10497:Er},qp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iE={CUBICSPLINE:void 0,LINEAR:Tr,STEP:La},Xp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Oa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),n.DefaultMaterial}function $r(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function dr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){let u=e[c];if(i){let h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(h)}if(s){let h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(h)}if(r){let h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let d=c[0],u=c[1],h=c[2];return i&&(n.morphAttributes.position=d),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function aE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oE(n){let e,t=n.extensions&&n.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$p(t.attributes):e=n.indices+":"+$p(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+$p(n.targets[i]);return e}function $p(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function vf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var cE=new Ee,xf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Fa(this.options.manager):this.textureLoader=new Nc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Po(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return $r(r,o,s),dr(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,d]of a.children.entries())r(d,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(Js.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=qp[s.type],o=no[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new It(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=qp[s.type],c=no[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,p;if(f&&f!==u){let m=Math.floor(h/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(x);v||(y=new c(o,m*f,s.count*f/d),v=new Eo(y,f/d),t.cache.add(x,v)),p=new To(v,l,h%f/d,g)}else o===null?y=new c(s.count*l):y=new c(o,h,s.count*l),p=new It(y,l,g);if(s.sparse!==void 0){let m=qp.SCALAR,x=no[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,A=new x(a[1],v,s.sparse.count*m),T=new c(a[2],w,s.sparse.count*l);o!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized));for(let R=0,F=A.length;R<F;R++){let _=A[R];if(p.setX(_,T[R*l]),l>=2&&p.setY(_,T[R*l+1]),l>=3&&p.setZ(_,T[R*l+2]),l>=4&&p.setW(_,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return d.magFilter=jy[h.magFilter]||an,d.minFilter=jy[h.minFilter]||Xs,d.wrapS=Zy[h.wrapS]||Er,d.wrapT=Zy[h.wrapT]||Er,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let h=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let d=Promise.resolve(l).then(function(u){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){let p=new wn(y);p.needsUpdate=!0,h(p)}),t.load(Js.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||lE(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Lo,$n.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Co,$n.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Oa}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){let u=s[lt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],dn),o.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Fn);let d=r.alphaMode||Xp.OPAQUE;if(d===Xp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Xp.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==on){let u=r.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],dn)}return r.emissiveTexture!==void 0&&a!==on&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),dr(u,r),t.associations.set(u,{materials:e}),r.extensions&&$r(s,u,r),u})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ky(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],d=oE(c),u=s[d];if(u)a.push(u.promise);else{let h;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Ky(new zn,c,t),s[d]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let d=a[l].material===void 0?sE(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let f=0,g=d.length;f<g;f++){let y=d[f],p=a[f],m,x=c[f];if(p.mode===Ei.TRIANGLES||p.mode===Ei.TRIANGLE_STRIP||p.mode===Ei.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new bc(y,x):new wt(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Ei.TRIANGLE_STRIP?m.geometry=Wp(m.geometry,kc):p.mode===Ei.TRIANGLE_FAN&&(m.geometry=Wp(m.geometry,Do));else if(p.mode===Ei.LINES)m=new Sc(y,x);else if(p.mode===Ei.LINE_STRIP)m=new ka(y,x);else if(p.mode===Ei.LINE_LOOP)m=new Mc(y,x);else if(p.mode===Ei.POINTS)m=new Ac(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&aE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),dr(m,r),p.extensions&&$r(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&$r(s,u[0],r),u[0];let h=new Tn;r.extensions&&$r(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt(ko.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Na(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),dr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,d=a.length;c<d;c++){let u=a[c];if(u){o.push(u);let h=new Ee;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _c(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){let f=s.channels[u],g=s.samplers[f.sampler],y=f.target,p=y.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),d.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){let h=u[0],f=u[1],g=u[2],y=u[3],p=u[4],m=[];for(let x=0,v=h.length;x<v;x++){let w=h[x],A=f[x],T=g[x],R=y[x],F=p[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let _=i._createAnimationTracks(w,A,T,R,F);if(_)for(let b=0;b<_.length;b++)m.push(_[b])}return new Cc(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,d=o.length;c<d;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(h,cE)});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new Ro:c.length>1?d=new Tn:c.length===1?d=c[0]:d=new Ot,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(r.name&&(d.userData.name=r.name,d.name=a),dr(d,r),r.extensions&&$r(i,d,r),r.matrix!==void 0){let u=new Ee;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Tn;i.name&&(r.name=s.createUniqueName(i.name)),dr(r,i),i.extensions&&$r(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,u=l.length;d<u;d++)r.add(l[d]);let c=d=>{let u=new Map;for(let[h,f]of s.associations)(h instanceof $n||h instanceof wn)&&u.set(h,f);return d.traverse(h=>{let f=s.associations.get(h);f!=null&&u.set(h,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];cr[r.path]===cr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(cr[r.path]){case cr.weights:c=ys;break;case cr.rotation:c=Hi;break;case cr.position:case cr.scale:c=vs;break;default:switch(i.itemSize){case 1:c=ys;break;case 2:case 3:default:c=vs;break}break}let d=s.interpolation!==void 0?iE[s.interpolation]:Tr,u=this._getArrayFromAccessor(i);for(let h=0,f=l.length;h<f;h++){let g=new c(l[h]+"."+cr[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=vf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Hi?gf:Pd;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function dE(n,e,t){let i=e.attributes,s=new gi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let d=vf(no[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,d=r.length;c<d;c++){let u=r[c];if(u.POSITION!==void 0){let h=t.json.accessors[u.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){let y=vf(no[h.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new ri;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Ky(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=yf[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return mt.workingColorSpace!==dn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),dr(n,e),dE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rE(n,e.targets,t):n})}var ts=Object.freeze({model:"Google Cardboard 2015",k1:.22,k2:.24,ipd:.064,fov:80}),Kr=[0,2,7],wf=.55,Id=.14,Qy=11.4,uE=1.42,io=1.04,kd=!1,yl=!1,ft=null,ui=null,Ds=null,Ti=null,Jn=null,bn=null,tn=null,vl=null,xl=null,Qi=null,ev=1,Nd=!1,fl=null,Dd=0,Od=0,cv=0,Sf=[],bl=[],Ut=()=>new D,fn=Ut(),Rf=new D(Kr[0],.9,Kr[2]),Ud=[],es=[null,null],ml=[null,null],_l=[0,0],Yr=[Ut(),Ut()],hE=[Ut(),Ut()],Di=[null,null],Jr=[!1,!1],bf=[Ut(),Ut()],ur=null,tv=[0,0],pE=0,ut={cs:1,T:null,n:0,mn:[0,0,0],d:[1,1,1],st:null,id:null,seen:null,stamp:0},Tt=[0,0,0],ze={x:0,y:0,z:0,d:0,nx:0,ny:1,nz:0,fx:0,fy:1,fz:0};function fE(n){let e=n.length/9|0;ut.T=n,ut.n=e;let t=[1e9,1e9,1e9],i=[-1e9,-1e9,-1e9];for(let c=0;c<n.length;c+=3)for(let d=0;d<3;d++){let u=n[c+d];u<t[d]&&(t[d]=u),u>i[d]&&(i[d]=u)}ut.mn=t,ut.d=[0,1,2].map(c=>Math.max(1,Math.ceil((i[c]-t[c])/ut.cs)+1));let s=ut.d[0]*ut.d[1]*ut.d[2],r=new Int32Array(s+1),a=ut.cs,o=c=>{let d=[1e9,1e9,1e9,-1e9,-1e9,-1e9];for(let u=0;u<3;u++)for(let h=0;h<3;h++){let f=n[c*9+u*3+h];f<d[h]&&(d[h]=f),f>d[h+3]&&(d[h+3]=f)}return[0,1,2].map(u=>[Math.floor((d[u]-t[u])/a),Math.floor((d[u+3]-t[u])/a)])},l=null;for(let c=0;c<2;c++){if(c===1){for(let d=0;d<s;d++)r[d+1]+=r[d];ut.st=r.slice(),ut.id=new Int32Array(r[s]),l=r.slice()}for(let d=0;d<e;d++){let u=o(d);for(let h=u[2][0];h<=u[2][1];h++)for(let f=u[1][0];f<=u[1][1];f++)for(let g=u[0][0];g<=u[0][1];g++){let y=(h*ut.d[1]+f)*ut.d[0]+g;c===0?r[y+1]++:ut.id[l[y]++]=d}}}ut.seen=new Int32Array(e)}function mE(n,e,t,i,s,r,a,o,l,c,d,u){let h=a-i,f=o-s,g=l-r,y=c-i,p=d-s,m=u-r,x=n-i,v=e-s,w=t-r,A=h*x+f*v+g*w,T=y*x+p*v+m*w;if(A<=0&&T<=0){Tt[0]=i,Tt[1]=s,Tt[2]=r;return}let R=n-a,F=e-o,_=t-l,b=h*R+f*F+g*_,N=y*R+p*F+m*_;if(b>=0&&N<=b){Tt[0]=a,Tt[1]=o,Tt[2]=l;return}let I=A*N-b*T;if(I<=0&&A>=0&&b<=0){let q=A/(A-b);Tt[0]=i+q*h,Tt[1]=s+q*f,Tt[2]=r+q*g;return}let U=n-c,L=e-d,E=t-u,k=h*U+f*L+g*E,V=y*U+p*L+m*E;if(V>=0&&k<=V){Tt[0]=c,Tt[1]=d,Tt[2]=u;return}let z=k*T-A*V;if(z<=0&&T>=0&&V<=0){let q=T/(T-V);Tt[0]=i+q*y,Tt[1]=s+q*p,Tt[2]=r+q*m;return}let W=b*V-k*N;if(W<=0&&N-b>=0&&k-V>=0){let q=(N-b)/(N-b+(k-V));Tt[0]=a+q*(c-a),Tt[1]=o+q*(d-o),Tt[2]=l+q*(u-l);return}let K=1/(W+z+I),Q=z*K,ie=I*K;Tt[0]=i+h*Q+y*ie,Tt[1]=s+f*Q+p*ie,Tt[2]=r+g*Q+m*ie}function Cf(n,e,t,i){if(!ut.T)return!1;let s=ut.T,r=ut.cs,a=ut.mn,o=ut.d,l=i*i,c=!1,d=++ut.stamp,u=[0,1,2].map(g=>Math.max(0,Math.floor(([n,e,t][g]-i-a[g])/r))),h=[0,1,2].map(g=>Math.min(o[g]-1,Math.floor(([n,e,t][g]+i-a[g])/r)));for(let g=u[2];g<=h[2];g++)for(let y=u[1];y<=h[1];y++)for(let p=u[0];p<=h[0];p++){let m=(g*o[1]+y)*o[0]+p;for(let x=ut.st[m],v=ut.st[m+1];x<v;x++){let w=ut.id[x];if(ut.seen[w]===d)continue;ut.seen[w]=d;let A=w*9;mE(n,e,t,s[A],s[A+1],s[A+2],s[A+3],s[A+4],s[A+5],s[A+6],s[A+7],s[A+8]);let T=n-Tt[0],R=e-Tt[1],F=t-Tt[2],_=T*T+R*R+F*F;if(_<l){l=_,c=!0,ze.x=Tt[0],ze.y=Tt[1],ze.z=Tt[2];let b=s[A+3]-s[A],N=s[A+4]-s[A+1],I=s[A+5]-s[A+2],U=s[A+6]-s[A],L=s[A+7]-s[A+1],E=s[A+8]-s[A+2];ze.fx=N*E-I*L,ze.fy=I*U-b*E,ze.fz=b*L-N*U;let k=Math.hypot(ze.fx,ze.fy,ze.fz)||1;ze.fx/=k,ze.fy/=k,ze.fz/=k}}}if(!c)return!1;let f=Math.sqrt(l);return ze.d=f,f>1e-5?(ze.nx=(n-ze.x)/f,ze.ny=(e-ze.y)/f,ze.nz=(t-ze.z)/f):(ze.nx=ze.fx,ze.ny=ze.fy,ze.nz=ze.fz),!0}function nv(n,e,t,i,s){if(!ut.T)return null;let r=ut.T,a=ut.cs,o=ut.mn,l=ut.d,c=Math.floor((n-o[0])/a),d=Math.floor((t-o[2])/a);if(c<0||d<0||c>=l[0]||d>=l[2])return null;let u=e,h=e+i*s,f=Math.floor((u-o[1])/a),g=Math.floor((h-o[1])/a),y=null;for(;i<0?f>=Math.max(g,0):f<=Math.min(g,l[1]-1);f+=i){if(f<0||f>=l[1])continue;let p=(d*l[1]+f)*l[0]+c;for(let m=ut.st[p],x=ut.st[p+1];m<x;m++){let v=ut.id[m]*9,w=r[v]-n,A=r[v+2]-t,T=r[v+3]-n,R=r[v+5]-t,F=r[v+6]-n,_=r[v+8]-t,b=(R-_)*(w-F)+(F-T)*(A-_);if(Math.abs(b)<1e-9)continue;let N=((R-_)*(0-F)+(F-T)*(0-_))/b,I=((_-A)*(0-F)+(w-F)*(0-_))/b,U=1-N-I;if(N<0||I<0||U<0)continue;let L=N*r[v+1]+I*r[v+4]+U*r[v+7];if(!((L-e)*i<=0||Math.abs(L-e)>s)&&(!y||Math.abs(L-e)<Math.abs(y.y-e))){let E=r[v+3]-r[v],k=r[v+4]-r[v+1],V=r[v+5]-r[v+2],z=r[v+6]-r[v],W=r[v+7]-r[v+1],K=r[v+8]-r[v+2],Q=V*z-E*K,ie=Math.hypot(k*K-V*W,Q,E*W-k*z)||1;y={y:L,ny:Q/ie}}}}return y}function gE(n,e,t,i){let s=(r,a)=>{let o=nv(r,e+1.5,a,-1,8);if(!o)return null;let l=Math.abs(o.ny)>.6?o:null;if(!l)return null;let c=nv(r,l.y+.05,a,1,3);if(c&&Math.abs(c.y-l.y)<2.2)return null;let d=l.y+i+.05;return Cf(r,d,a,i-.02)?null:[r,d,a]};for(let r=0;r<=8;r++)for(let a=0;a<(r?16:1);a++){let o=a/16*6.2832,l=n+Math.cos(o)*r*.5,c=t+Math.sin(o)*r*.5,d=s(l,c);if(d)return d}return null}var yE=(n,e)=>{let t=n.attributes[e];if(t&&(t.isInterleavedBufferAttribute||!(t.array instanceof Float32Array))){let i=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)i[s*t.itemSize+r]=t.getComponent(s,r);n.setAttribute(e,new It(i,t.itemSize))}};function vE(n){let e=0,t=0;for(let d of n)e+=d.attributes.position.count,t+=d.index?d.index.count:d.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),a=new Uint32Array(t),o=0,l=0;for(let d of n){let u=d.attributes.position.count;if(i.set(d.attributes.position.array,o*3),s.set(d.attributes.normal.array,o*3),r.set(d.attributes.uv.array,o*2),d.index){let h=d.index.array;for(let f=0;f<h.length;f++)a[l++]=h[f]+o}else for(let h=0;h<u;h++)a[l++]=o+h;o+=u}let c=new zn;return c.setAttribute("position",new It(i,3)),c.setAttribute("normal",new It(s,3)),c.setAttribute("uv",new It(r,2)),c.setIndex(new It(a,1)),c}function Mf(n){return n?(n.generateMipmaps=!1,n.minFilter=an,n.magFilter=an,n.anisotropy=1,n):null}function xE(n){var o;n.updateMatrixWorld(!0);let e=[];n.traverse(l=>{l.isMesh&&l.geometry.attributes.position&&e.push(l)});let t=0;e.forEach(l=>{let c=l.geometry;t+=Math.floor((c.index?c.index.count:c.attributes.position.count)/3)});let i=new Float32Array(t*9),s=0,r=new Map,a=new Map;for(let l of e){let c=Array.isArray(l.material)?l.material[0]:l.material,d=l.geometry.clone();d.applyMatrix4(l.matrixWorld);let u=d.attributes.position,h=d.index,f=Math.floor((h?h.count:u.count)/3)*3;for(let p=0;p<f;p++){let m=h?h.getX(p):p;i[s++]=u.getX(m),i[s++]=u.getY(m),i[s++]=u.getZ(m)}d.attributes.normal||d.computeVertexNormals(),d.attributes.uv||d.setAttribute("uv",new It(new Float32Array(u.count*2),2));for(let p of Object.keys(d.attributes))p!=="position"&&p!=="normal"&&p!=="uv"&&d.deleteAttribute(p);["position","normal","uv"].forEach(p=>yE(d,p));let g=`${c.map?((o=c.map.source)==null?void 0:o.uuid)||c.map.uuid:"nomap"}|${c.color?c.color.getHexString():"fff"}|${c.transparent?1:0}|${c.alphaTest||0}|${c.side||0}`,y=a.get(g);y||(y=new Ua({map:Mf(c.map),color:c.color?c.color.clone():16777215,transparent:c.transparent,opacity:c.opacity,alphaTest:c.alphaTest,side:c.side,emissive:c.emissive?c.emissive.clone():0,emissiveMap:Mf(c.emissiveMap)}),a.set(g,y)),r.has(g)||r.set(g,{m:y,l:[]}),r.get(g).l.push(d),l.geometry.dispose()}for(let l of r.values()){let c=l.l,d=null;try{let h=vE(c);h.computeBoundingSphere(),d=new wt(h,l.m)}catch{}(d?[d]:c.map(h=>new wt(h,l.m))).forEach(h=>{h.matrixAutoUpdate=!1,h.frustumCulled=!0,Jn.add(h)}),d&&c.forEach(h=>h.dispose())}return i.subarray(0,s)}function bE(n){Ud.length=0,n.updateMatrixWorld(!0);let e=[];if(n.traverse(E=>{E.isSkinnedMesh&&e.push(E)}),!e.length)return;let t=e.reduce((E,k)=>k.geometry.attributes.position.count>E.geometry.attributes.position.count?k:E);e.forEach(E=>{E!==t&&(E.visible=!1)});let i=t.skeleton.bones,s=E=>E.name.toLowerCase().replace(/[^a-z]/g,""),r=E=>i.find(k=>E.test(s(k))),a={ur:r(/^upperarmr$/),lr:r(/^lowerarmr$/),hr:r(/^wristr$/),ul:r(/^upperarml$/),ll:r(/^lowerarml$/),hl:r(/^wristl$/),body:r(/^main$/),head:r(/^head$/)},o={};["r","l"].forEach(E=>{o[E]={pinky:r(new RegExp("^pinkyf?"+E+"$")),index:r(new RegExp("^pointerf?"+E+"$")),thumb:r(new RegExp("^thumb"+E+"$"))}});let l=new Set([a.ur,a.lr,a.hr,a.ul,a.ll,a.hl]);for(let E in o)for(let k in o[E])l.add(o[E][k]);let c=i.map(E=>l.has(E)),d=t.geometry,u=d.attributes.skinIndex,h=d.attributes.skinWeight,f=d.attributes.position.count,g=d.index,y=new Uint8Array(f);for(let E=0;E<f;E++){let k=0;for(let V=0;V<4;V++)c[u.getComponent(E,V)]&&(k+=h.getComponent(E,V));y[E]=k>.45?1:0}let p=[],m=g?g.count:f;for(let E=0;E<m;E+=3){let k=g?g.getX(E):E,V=g?g.getX(E+1):E+1,z=g?g.getX(E+2):E+2;y[k]&&y[V]&&y[z]&&p.push(k,V,z)}p.length>90&&(d.clearGroups(),d.setIndex(p));let x=Array.isArray(t.material)?t.material[0]:t.material;t.material=new Ua({map:Mf(x.map),color:x.color?x.color.clone():16777215,emissive:2236962}),t.frustumCulled=!1;let v=E=>E.getWorldPosition(Ut()),w=v(a.ur),A=v(a.ul),T=w.clone().sub(A).normalize(),R=v(a.head).sub(v(a.body)).normalize();R.addScaledVector(T,-R.dot(T)).normalize();let F=new D().crossVectors(T,R),_=new nt().setFromRotationMatrix(new Ee().makeBasis(T,R,F)).invert(),b=w.distanceTo(v(a.lr))+v(a.lr).distanceTo(v(a.hr)),N=io/b,I=w.clone().add(A).multiplyScalar(.5),U={};["r","l"].forEach(E=>{let k={};for(let K in o[E]){let Q=o[E][K];k[K]=Q?[{b:Q,bind:Q.quaternion.clone(),pos:Q.getWorldPosition(Ut()),wq:Q.getWorldQuaternion(new nt),Al:Ut(),cur:0}]:[]}let V=E==="r"?a.hr:a.hl,z=V.getWorldPosition(Ut()),W=z.clone().sub(I).dot(T)>0?1:-1;U[E]={hb:V,hbBind:V.quaternion.clone(),hpos:z,hwq:V.getWorldQuaternion(new nt),ch:k,nRest:T.clone().multiplyScalar(-W),qs:null}});function L(E,k){let V=E.nRest.clone().multiplyScalar(k),z=[E.ch.index[0],E.ch.pinky[0]].filter(Boolean).map(q=>q.pos),K=(z.length?z.reduce((q,j)=>q.add(j),Ut()).multiplyScalar(1/z.length):E.hpos.clone().addScaledVector(R,-.1)).sub(E.hpos).normalize(),Q=V.clone().addScaledVector(K,-V.dot(K)).normalize(),ie=E.hwq.clone().invert();E.fl=K.clone().applyQuaternion(ie),E.nl=Q.clone().applyQuaternion(ie),E.QlInv=new nt().setFromRotationMatrix(new Ee().makeBasis(E.fl,Q.clone().applyQuaternion(ie),new D().crossVectors(E.fl,E.nl))).invert();for(let q in E.ch)E.ch[q].forEach(j=>{j.Al.crossVectors(K,Q).normalize().applyQuaternion(j.wq.clone().invert())})}L(U.r,ev),L(U.l,ev),Qi&&Qi.parent&&Qi.parent.remove(Qi),Qi=new Tn,Qi.quaternion.copy(_),Qi.scale.setScalar(N),Qi.add(n),Qi.position.set(0,-.32,.1).sub(I.clone().applyQuaternion(_).multiplyScalar(N)),tn.add(Qi),tn.updateMatrixWorld(!0),[[a.ur,a.lr,a.hr,1],[a.ul,a.ll,a.hl,-1]].forEach(([E,k,V,z])=>{let W=tn.worldToLocal(v(E));Ud.push({s:E,e:k,h:V,side:z,bs:E.quaternion.clone(),be:k.quaternion.clone(),sp:W,reach:io*.97,axis:V.position.clone().normalize(),info:U[z>0?"r":"l"]})})}function iv(n,e,t,i){n.quaternion.copy(e),n.updateWorldMatrix(!0,!0);let s=n.getWorldPosition(Ut()),r=t.getWorldPosition(Ut()).sub(s).normalize(),a=i.clone().sub(s).normalize(),o=n.getWorldQuaternion(new nt),l=new nt().setFromUnitVectors(r,a),c=n.parent.getWorldQuaternion(new nt).invert();n.quaternion.copy(c.multiply(l).multiply(o)),n.updateWorldMatrix(!1,!0)}function _E(n,e){if(!n||!n.hb)return;let t=n.hb;if(t.quaternion.copy(n.hbBind),e){t.updateWorldMatrix(!0,!1);let s=t.getWorldQuaternion(new nt).clone().invert(),r=tn.getWorldQuaternion(new nt),a=e.f.clone().applyQuaternion(r).applyQuaternion(s).normalize(),o=e.n.clone().applyQuaternion(r).applyQuaternion(s);if(o.addScaledVector(a,-o.dot(a)),o.lengthSq()>1e-4){o.normalize(),n.nl&&o.dot(n.nl)<-.15&&o.negate();let l=new nt().setFromRotationMatrix(new Ee().makeBasis(a,o,new D().crossVectors(a,o))).multiply(n.QlInv);l.slerp(new nt,.35),n.qs?n.qs.slerp(l,.22):n.qs=l.clone(),t.quaternion.multiply(n.qs)}for(let l in n.ch){let c=Math.max(0,Math.min(.85,e.c[l]??0));n.ch[l].forEach(d=>{d.cur=d.cur*.72+c*.28,d.b.quaternion.copy(d.bind).multiply(new nt().setFromAxisAngle(d.Al,d.cur*.95))})}}else for(let i in n.ch)n.ch[i].forEach(s=>{s.cur*=.85,s.b.quaternion.copy(s.bind).multiply(new nt().setFromAxisAngle(s.Al,s.cur*1.15))});t.updateWorldMatrix(!1,!0)}function sv(n,e,t){n.s.quaternion.copy(n.bs),n.e.quaternion.copy(n.be),n.s.updateWorldMatrix(!0,!0);let i=n.s.getWorldPosition(Ut()),s=n.e.getWorldPosition(Ut()),r=n.h.getWorldPosition(Ut()),a=i.distanceTo(s),o=s.distanceTo(r),l=e.clone().sub(i),c=Math.min(Math.max(l.length(),Math.abs(a-o)+.01),(a+o)*.995);l.normalize();let d=Math.max(-1,Math.min(1,(a*a+c*c-o*o)/(2*a*c))),u=tn.getWorldQuaternion(new nt),h=new D(n.side*.45,-1,.35).normalize().applyQuaternion(u),f=h.clone().addScaledVector(l,-h.dot(l));f.lengthSq()<1e-4&&f.set(0,-1,0),f.normalize();let g=i.clone().addScaledVector(l,a*d).addScaledVector(f,a*Math.sqrt(Math.max(0,1-d*d)));if(iv(n.s,n.bs,n.e,g),iv(n.e,n.be,n.h,e),s=n.e.getWorldPosition(Ut()),r=n.h.getWorldPosition(Ut()),e.clone().sub(r).lengthSq()>1e-5){let p=n.e.parent.getWorldQuaternion(new nt).invert(),m=n.e.getWorldQuaternion(new nt),x=new nt().setFromUnitVectors(r.sub(s).normalize(),e.clone().sub(s).normalize());n.e.quaternion.copy(p.multiply(x).multiply(m)),n.e.updateWorldMatrix(!1,!0)}_E(n.info,t)}var jr=(n,e)=>new D(n[e].x-.5,.5-n[e].y,-(n[e].z||0));function rv(n,e){let t=jr(n,0),i=jr(n,5),s=jr(n,9),r=jr(n,17),a=s.clone().sub(t).normalize(),o=i.clone().sub(t),l=r.clone().sub(t),c=e?new D().crossVectors(l,o):new D().crossVectors(o,l);c.addScaledVector(a,-c.dot(a)).normalize();let d=t.distanceTo(s)||.1,u=(f,g)=>Math.max(0,Math.min(1,1.55-jr(n,f).distanceTo(t)/(jr(n,g).distanceTo(t)||d)*.72)),h=Math.max(0,Math.min(1,1.4-jr(n,4).distanceTo(r)/(i.distanceTo(r)||d)*.75));return{f:a,n:c,c:{index:u(8,5),pinky:u(20,17),thumb:h}}}var dv="nextvr.gorilla.coins",qn=(()=>{try{let n=localStorage.getItem(dv);if(n!==null&&n!==""){let e=Number(n);if(Number.isFinite(e)&&e>=0)return Math.floor(e)}}catch{}return 100})(),Nn=null,hr=null,Af=null,so=null,Ef=-1,_f=0;function Tf(n=1){let e=Math.max(0,Math.floor(qn+n));if(e===qn)return qn;qn=e;try{localStorage.setItem(dv,String(qn))}catch{}return uv(),ft&&(ft.dataset.gorillaRightArmCoins=String(qn)),typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=qn),qn}function uv(){if(!Af||!hr||Ef===qn)return;Ef=qn;let n=Af,e=hr.width,t=hr.height;n.clearRect(0,0,e,t),n.fillStyle="#0b1222",n.beginPath(),n.roundRect?n.roundRect(4,4,e-8,t-8,22):n.rect(4,4,e-8,t-8),n.fill(),n.lineWidth=5,n.strokeStyle="#facc15",n.stroke();let i=50,s=t/2,r=28,a=n.createRadialGradient(i-8,s-8,4,i,s,r);a.addColorStop(0,"#fef08a"),a.addColorStop(.55,"#facc15"),a.addColorStop(1,"#ca8a04"),n.fillStyle=a,n.beginPath(),n.arc(i,s,r,0,Math.PI*2),n.fill(),n.lineWidth=3,n.strokeStyle="#fef9c3",n.stroke(),n.fillStyle="#713f12",n.font="900 26px Inter, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("$",i,s+1),n.textAlign="left",n.fillStyle="#fde047",n.font="800 16px Inter, system-ui, sans-serif",n.fillText("MOEDAS",92,34),n.fillStyle="#ffffff",n.font="900 36px Inter, system-ui, sans-serif",n.fillText(String(qn),92,74),so&&(so.needsUpdate=!0)}function wE(){if(Nn)return Nn;hr=document.createElement("canvas"),hr.width=256,hr.height=112,Af=hr.getContext("2d"),so=new Ec(hr),so.minFilter=an,so.magFilter=an,Ef=-1,uv(),Nn=new Tn,Nn.name="gorilla-right-arm-coin-counter";let n=new on({color:1976635}),e=new wt(new Ys(.088,.044,.072),n);e.position.set(0,0,-.02),Nn.add(e);let t=new on({color:15381256}),i=new wt(new Ys(.148,.068,.012),t);i.position.set(0,0,-.004),Nn.add(i);let s=new on({map:so,transparent:!0,depthTest:!0,side:Fn}),r=new wt(new Rn(.14,.062),s);return r.position.set(0,0,.004),Nn.add(r),typeof window<"u"&&(window.__gorillaRightArmCoinCounter={coins:qn,attachedTo:"right-arm",side:1,visible:!0}),Nn}function hv(){if(!Nn||!tn)return;let n=Ud[0],e=Lf(),t=new D(0,1,0).applyQuaternion(tn.getWorldQuaternion(new nt));if(n&&n.e&&n.h){let i=n.e.getWorldPosition(Ut()),s=n.h.getWorldPosition(Ut()),r=i.clone().lerp(s,.72),a=e.clone().sub(r);a.lengthSq()>1e-5&&(a.normalize(),r.addScaledVector(a,.065)),Nn.position.copy(r),Nn.up.copy(t),Nn.lookAt(e)}else{let i=tn.localToWorld(new D(.24,-.22,-.44));Nn.position.copy(i),Nn.up.copy(t),Nn.lookAt(e)}typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=qn,window.__gorillaRightArmCoinCounter.position=Nn.position.toArray())}function SE(n,e){if(!e||e.length<21||(n==null?void 0:n.physicalSide)==="right")return!0;if((n==null?void 0:n.physicalSide)==="left")return!1;if(e[9].x>=.54)return!0;if(e[9].x<=.46)return!1;if(e[9].y<e[0].y&&Math.abs(e[5].x-e[17].x)>.022)return e[5].x<e[17].x;let t=String((n==null?void 0:n.id)||(n==null?void 0:n.handedness)||"").toLowerCase();return typeof(n==null?void 0:n.left)=="boolean"?n.left===!0:t.includes("left")||t==="l"?!0:t.includes("right")||t==="r"?!1:e[9].x>=.5}function ME(n){ml[0]=null,ml[1]=null;let e=[];for(let t=0;t<bi.length;t++){let i=bi[t];if(!i||!i.points||i.points.length<63)continue;let s=i.points,r=new Array(21);for(let a=0;a<21;a++)r[a]={x:s[a*3],y:s[a*3+1],z:s[a*3+2]||0};e.push({th:i,lm:r})}if(e.length>=2){e.sort((t,i)=>t.lm[9].x-i.lm[9].x);for(let t=0;t<2;t++){let{lm:i}=e[t],s=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);es[t]={x:i[9].x,y:i[9].y,s,ori:rv(i,t===1),t:n},ml[t]=i}}else if(e.length===1){let{th:t,lm:i}=e[0],r=SE(t,i)?1:0,a=1-r,o=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);es[r]={x:i[9].x,y:i[9].y,s:o,ori:rv(i,r===1),t:n},ml[r]=i,es[a]=null,ml[a]=null,Jr[a]=!1,Di[a]=null}if(ur&&n-ur.t<450){let t=ur.idx;es[t]={x:ur.x,y:ur.y,s:ur.s,ori:null,t:n}}}var Lf=()=>tn.getWorldPosition(Ut());function Fd(){bn&&(bn.position.copy(Rf),fn.set(0,0,0),Jr[0]=!1,Jr[1]=!1,Di[0]=null,Di[1]=null,_l[0]=0,_l[1]=0,bn.updateMatrixWorld(!0))}var gl=()=>new Promise(n=>setTimeout(n,16));async function av(n){let e=await fetch(n);if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.arrayBuffer(),i=new Uint8Array(t);if(i.length>=4&&i[0]===103&&i[1]===108&&i[2]===84&&i[3]===70)return t;let s=new DecompressionStream("gzip"),r=s.writable.getWriter();return r.write(i),r.close(),await new Response(s.readable).arrayBuffer()}function ov(n,e){return new Promise((t,i)=>n.parse(e,"",t,i))}function Zr(n,e){ui&&(ui.querySelectorAll("[data-gorilla-splash-fill]").forEach(t=>{t.style.width=`${n}%`}),e&&ui.querySelectorAll("[data-gorilla-splash-step]").forEach(t=>{t.textContent=e}))}function AE(){if(Jn)return;Jn=new Da,Jn.background=new Pe(8898815),Jn.fog=new xc(8898815,.0042),Jn.add(new Lc(14677247,4877115,.98));let n=new Pr(16773846,.92);n.position.set(30,60,20),Jn.add(n);let e=new Pr(10875900,.32);e.position.set(-28,34,-22),Jn.add(e),bn=new Tn,Jn.add(bn),tn=new Gt(ts.fov,1200/2/800,.05,380),tn.position.set(0,0,0),bn.add(tn);let t=ts.ipd*.5;vl=new Gt(ts.fov,1200/2/800,.05,380),vl.position.set(-t,0,0),xl=new Gt(ts.fov,1200/2/800,.05,380),xl.position.set(t,0,0),tn.add(vl,xl);let i=wE();i&&!i.parent&&Jn.add(i),hv(),bl.length=0;let s=new Tc(.24,.24,.055,18);s.rotateX(Math.PI*.5);let r=new Ua({color:16498468,emissive:9584654}),a=[[0,1.35,4.8],[-2.2,1.45,3.6],[2.2,1.45,3.6],[-3.8,1.85,.8],[3.8,1.85,.8],[0,2.2,-2.5],[-1.8,1.6,8.8],[1.8,1.6,8.8]];for(let o=0;o<a.length;o++){let[l,c,d]=a[o],u=new wt(s,r);u.position.set(l,c,d),u.userData={baseY:c,phase:o*.85,cooldownUntil:0},Jn.add(u),bl.push(u)}try{Ti=new Cr({canvas:Ds,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),Ti.setPixelRatio(1),Ti.setSize(896,560,!1),Ti.setScissorTest(!0)}catch{Ti=null}}async function EE(){if(!Nd){if(fl)return fl;if(AE(),typeof window<"u"&&window.__gorillaFastTest){Nd=!0;return}return fl=(async()=>{var n;try{Zr(18,"Descompactando mapa da floresta 3D..."),await gl();let e=new Ld;e.textureLoader=new Fa((n=e.options)==null?void 0:n.manager);let[t,i]=await Promise.all([av("./gorilla-map.task"),av("./gorilla-rig.task")]);Zr(45,"Carregando texturas e geometria..."),await gl();let[s,r]=await Promise.all([ov(e,t),ov(e,i)]);Zr(68,"Otimizando malhas 3D (Lambert merge)..."),await gl();let a=xE(s.scene);Zr(84,"Construindo grade f\xEDsica de colis\xE3o..."),await gl(),fE(a);let o=gE(Kr[0],Kr[1],Kr[2],wf)||[Kr[0],.9,Kr[2]];Rf.set(o[0],o[1],o[2]),Zr(94,"Ativando bra\xE7os Gorilla 3D..."),await gl(),bE(r.scene),Fd(),Nd=!0,Zr(100,"Pronto! Entrando no Gorilla Tag...")}catch(e){console.warn("Gorilla Tag load fallback:",e),Nd=!0}finally{fl=null}})(),fl}}function TE(){if(ft)return;let n=document.getElementById("hud")||document.body;ft=document.createElement("div"),ft.id="gorilla-overlay",ft.dataset.testid="gorilla-overlay",ft.dataset.cardboardLenses="2015",ft.dataset.gorillaStage="idle",ft.dataset.gorillaRightArmCoins=String(qn),ft.dataset.lensModel=ts.model,ft.dataset.lensK1=String(ts.k1),ft.dataset.lensK2=String(ts.k2),ft.style.cssText=["position:fixed","left:0","top:0","width:1200px","height:800px","z-index:9997","display:none","background:#050811","overflow:hidden","touch-action:none"].join(";"),Ds=document.createElement("canvas"),Ds.id="gorilla-canvas",Ds.width=896,Ds.height=560,Ds.style.cssText="position:absolute;left:0;top:0;width:1200px;height:800px;display:block;",ft.appendChild(Ds);let e=document.createElement("div");e.className="gorilla-cardboard-divider",e.style.cssText=["position:absolute","left:599px","top:0","width:2px","height:800px","background:rgba(255,255,255,.22)","pointer-events:none","z-index:4"].join(";"),ft.appendChild(e);let t=(r,a)=>{let o=document.createElement("div");return o.style.cssText=`position:absolute;left:${r+120}px;top:12px;width:360px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:6;pointer-events:auto;font-family:Inter,system-ui,sans-serif`,o.innerHTML=`
      <button type="button" data-gorilla-act="jump" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(251,191,36,.45);background:rgba(120,53,15,.82);color:#fde68a;font:700 10px Inter,sans-serif;cursor:pointer">Salto</button>
      <button type="button" data-gorilla-act="spawn" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Spawn</button>
      <button type="button" data-gorilla-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-gorilla-act="exit" ${a?'data-gorilla-exit="1"':""} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(153,27,27,.82);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `,o};ft.appendChild(t(0,!0)),ft.appendChild(t(600,!1)),ui=document.createElement("div"),ui.id="gorilla-splash",ui.dataset.testid="gorilla-splash",ui.style.cssText=["position:absolute","left:0","top:0","width:1200px","height:800px","z-index:10","display:none","flex-direction:row","align-items:stretch","justify-content:stretch","background:radial-gradient(circle at 50% 38%, #1e293b 0%, #090d16 70%, #030712 100%)","color:#f8fafc","font-family:Inter,system-ui,sans-serif","text-align:center","user-select:none"].join(";");let i=r=>`
    <div style="width:600px;height:800px;display:flex;align-items:center;justify-content:center;${r?"border-right:1px solid rgba(255,255,255,.15)":""}">
      <div style="padding:26px 32px;border-radius:24px;background:rgba(15,23,42,.90);border:1px solid rgba(56,189,248,.38);box-shadow:0 24px 64px rgba(0,0,0,.72);display:flex;flex-direction:column;align-items:center;gap:12px;max-width:460px">
        <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:88px;height:88px;border-radius:20px;object-fit:cover;box-shadow:0 12px 32px rgba(249,115,22,.45);border:2px solid rgba(255,255,255,.22)">
        <div class="gorilla-splash-title" ${r?'data-gorilla-entering="1"':""} style="font-size:23px;font-weight:800;letter-spacing:.02em;color:#f8fafc">Entrando no Gorilla Tag</div>
        <div class="gorilla-splash-sub" style="font-size:11.5px;font-weight:600;color:#94a3b8;letter-spacing:.08em;text-transform:uppercase">Lentes ${ts.model} \xB7 Hand Tracking</div>
        <div data-gorilla-splash-step style="font-size:11.5px;font-weight:600;color:#38bdf8;margin-top:2px">Inicializando floresta 3D...</div>
        <div style="width:220px;height:7px;border-radius:999px;background:rgba(148,163,184,.2);overflow:hidden;margin-top:4px">
          <div data-gorilla-splash-fill style="width:15%;height:100%;border-radius:999px;background:linear-gradient(90deg,#f97316,#38bdf8);transition:width .2s ease"></div>
        </div>
      </div>
    </div>
  `;ui.innerHTML=i(!0)+i(!1),ft.appendChild(ui),ft.addEventListener("click",r=>{let a=r.target.closest("[data-gorilla-act]");if(!a)return;let o=a.dataset.gorillaAct;if(o==="exit")fv();else if(o==="spawn")Fd();else if(o==="jump"){let l=new D(0,0,-1).applyQuaternion(tn?tn.getWorldQuaternion(new nt):new nt);l.y=0,l.lengthSq()>1e-4&&l.normalize(),fn.x+=l.x*4.2,fn.z+=l.z*4.2,fn.y=Math.max(fn.y,4.8),Tf(1)}else o==="recenter"&&(cv=new ai().setFromQuaternion(ye.quaternion,"YXZ").y)});let s=r=>{let a=ft.getBoundingClientRect();if(!a.width||!a.height)return;let o=Math.max(0,Math.min(1,(r.clientX-a.left)/a.width)),l=Math.max(0,Math.min(1,(r.clientY-a.top)/a.height)),c=o>=.5?(o-.5)*2:o*2;ur={idx:c>=.5?1:0,x:c,y:l,s:r.buttons?.12:.18,t:performance.now()}};ft.addEventListener("pointerdown",s),ft.addEventListener("pointermove",r=>{r.buttons&&s(r)}),ft.addEventListener("pointerup",()=>{ur=null}),n.appendChild(ft)}function lv(){let n=Lf();for(let e=0;e<3&&Cf(n.x,n.y,n.z,wf);e++){let t=wf-ze.d;bn.position.x+=ze.nx*t,bn.position.y+=ze.ny*t,bn.position.z+=ze.nz*t,n.x+=ze.nx*t,n.y+=ze.ny*t,n.z+=ze.nz*t;let i=fn.x*ze.nx+fn.y*ze.ny+fn.z*ze.nz;i<0&&(fn.x-=ze.nx*i,fn.y-=ze.ny*i,fn.z-=ze.nz*i,ze.ny>.5&&(fn.x*=.88,fn.z*=.88))}n.y<Rf.y-18&&Fd()}function pv(n){if(!kd)return;Dd=requestAnimationFrame(pv);let e=Math.min((n-(Od||n))/1e3,.04)||.016;if(Od=n,!Jn||!bn||!tn)return;let t=new ai().setFromQuaternion(ye.quaternion,"YXZ");tn.quaternion.setFromEuler(new ai(t.x,t.y-cv,t.z,"YXZ")),ME(n);let i=Wt.consumeStepDelta();i.lengthSq()>1e-6&&(bn.position.x+=i.x,bn.position.z+=i.z,bn.position.y+=i.y*.25),fn.y-=9.8*e,fn.multiplyScalar(1-.14*e),bn.position.addScaledVector(fn,e),bn.updateMatrixWorld(!0),lv();for(let s=0;s<2;s++){es[s]&&n-es[s].t>220&&(es[s]=null);let r=es[s],a=Ud[s?0:1];if(!r){if(Jr[s]=!1,Di[s]=null,_l[s]=0,a){let g=new D(s?.24:-.24,-.26,-.46);sv(a,tn.localToWorld(g),null)}continue}_l[s]++;let o=a?a.sp:Ut(),l=Ut();if(l.set((r.x-.5)*1.65,(.5-r.y)*1.8-.34,-Math.min(.95,Math.max(.25,.09/Math.max(r.s,.035)))),Di[s]){let g=l.clone().sub(Di[s]);g.length()>.32&&l.copy(Di[s]).addScaledVector(g.normalize(),.32),l.lerp(Di[s],.24)}let c=l.clone().sub(o);c.length()>io*.97&&l.copy(o).addScaledVector(c.setLength(io*.97),1),hE[s].copy(l);let d=tn.localToWorld(l.clone());if(_l[s]>=1&&Cf(d.x,d.y,d.z,Id)){let g=new D(ze.x+ze.nx*Id,ze.y+ze.ny*Id,ze.z+ze.nz*Id);if(!Jr[s])Jr[s]=!0,bf[s].copy(g);else{let y=bf[s].clone().sub(d),p=y.length();if(p>.001){p>.28&&y.multiplyScalar(.28/p),bn.position.add(y),_f+=y.length(),_f>=.38&&(_f=0,Tf(1));let m=y.clone().multiplyScalar(uE/Math.max(e,.01));fn.lerp(m,.56),fn.length()>Qy&&fn.setLength(Qy),bn.updateMatrixWorld(!0),lv()}}Yr[s].copy(bf[s])}else Jr[s]=!1,Yr[s].copy(d);let h=tn.worldToLocal(Yr[s].clone()),f=h.clone().sub(o);f.length()>io*.97&&(h.copy(o).addScaledVector(f.setLength(io*.97),1),Yr[s].copy(tn.localToWorld(h))),Di[s]||(Di[s]=Ut()),Di[s].copy(h),a&&sv(a,Yr[s],r.ori)}if(bl.length){let s=Lf();for(let r=0;r<bl.length;r++){let a=bl[r],o=a.userData;if(n<o.cooldownUntil){a.visible=!1;continue}a.visible=!0,a.rotation.y+=e*2.4,a.position.y=o.baseY+Math.sin(n*.003+o.phase)*.08;let l=a.position.distanceTo(s),c=es[0]?a.position.distanceTo(Yr[0]):99,d=es[1]?a.position.distanceTo(Yr[1]):99;(l<.85||c<.45||d<.45)&&(o.cooldownUntil=n+4500,a.visible=!1,Tf(5))}}if(hv(),Ti&&vl&&xl){bn.updateMatrixWorld(!0);let s=Ds.width,r=Ds.height,a=s>>1;Ti.setViewport(0,0,a,r),Ti.setScissor(0,0,a,r),Ti.render(Jn,vl),Ti.setViewport(a,0,a,r),Ti.setScissor(a,0,a,r),Ti.render(Jn,xl)}}function ro(){var t,i,s,r,a,o;if(TE(),yl||kd)return;yl=!0,window.__gorillaStereoOverlay=!0,window.__gorillaExit=fv,window.__gorillaOnHands=null,ft&&(ft.dataset.gorillaRightArmCoins=String(qn)),S.handsOn=!0,Xi().catch(()=>{});try{(i=(t=window.NativeXR)==null?void 0:t.handVisuals)==null||i.call(t,!1)}catch{}Sf=me.map(l=>({win:l,hidden:!!l.hidden}));for(let l of[...me])typeof l.setHidden=="function"?l.setHidden(!0):l.shell&&(l.shell.style.display="none");ar(!0),Xt(!1),Qt(!0),(r=(s=re).invalidate)==null||r.call(s),(o=(a=re).render)==null||o.call(a,Ie,ye),ft.dataset.gorillaStage="entering",ft.style.display="block",ui.style.display="flex",Zr(15,"Iniciando Gorilla Tag...");let n=typeof window<"u"&&!!window.__gorillaFastTest,e=new Promise(l=>setTimeout(l,n?240:1200));Promise.all([EE(),e]).then(()=>{yl&&(yl=!1,kd=!0,ft.dataset.gorillaStage="playing",ui.style.display="none",Fd(),Od=performance.now(),pv(Od))})}function fv(){var n,e,t,i,s,r;yl=!1,kd=!1,window.__gorillaStereoOverlay=!1,window.__gorillaOnHands=null,tv[0]=0,tv[1]=0,pE=0,Dd&&(cancelAnimationFrame(Dd),Dd=0),ui&&(ui.style.display="none"),ft&&(ft.dataset.gorillaStage="idle",ft.style.display="none");try{(e=(n=window.NativeXR)==null?void 0:n.handVisuals)==null||e.call(n,!!S.handDraw)}catch{}for(let{win:a,hidden:o}of Sf)me.includes(a)&&(typeof a.setHidden=="function"?a.setHidden(o):a.shell&&(a.shell.style.display=""));Sf=[],S.spatialLauncher||(Qt(!1),Xt(!0)),(i=(t=re).invalidate)==null||i.call(t),(r=(s=re).render)==null||r.call(s,Ie,ye)}var se=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var RE=n=>{if(fe)return _n("browser-extra",O("browser"),n);try{window.open(n,"_blank","noopener")}catch{ht("Bloqueado pelo navegador")}},CE=[{name:"Google",url:"https://www.google.com/",bg:"#ffffff",color:"#4285F4",badge:"G"},{name:"YouTube",url:"https://www.youtube.com/",bg:"#ff0033",color:"#ffffff",badge:"\u25B6"},{name:"Roblox",url:"https://www.roblox.com/",bg:"#090d16",color:"#f8fafc",badge:"\u25C8",img:"./roblox-logo.jpg"},{name:"Discord",url:"https://discord.com/app",bg:"#5865F2",color:"#ffffff",badge:"D"},{name:"Instagram",url:"https://www.instagram.com/",bg:"linear-gradient(135deg,#feda75,#d62976,#4f5bd5)",color:"#ffffff",badge:"\u25CE"},{name:"Facebook",url:"https://www.facebook.com/",bg:"#1877F2",color:"#ffffff",badge:"f"},{name:"Beat Saber",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"#070814",color:"#ffffff",badge:"\u2694",img:"./beat-saber-logo.jpg"},{name:"TikTok",url:"https://www.tiktok.com/",bg:"#000000",color:"#25F4EE",badge:"\u266A",img:"./tiktok-logo.jpg"}],LE=[{title:"YouTube \xB7 V\xEDdeos 360\xB0 VR",domain:"youtube.com",url:"https://www.youtube.com/",bg:"linear-gradient(135deg,#7f1d1d,#ef4444)",badge:"\u25B6 YouTube"},{title:"Roblox \xB7 Mundos e Jogos",domain:"roblox.com",url:"https://www.roblox.com/",bg:"linear-gradient(135deg,#0f172a,#334155)",badge:"\u25C8 Roblox",img:"./roblox-logo.jpg"},{title:"Beat Saber \xB7 VR Imediato",domain:"moonrider.xyz",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"linear-gradient(135deg,#1e1b4b,#dc2626)",badge:"\u2694 Beat Saber",img:"./beat-saber-logo.jpg"},{title:"Hyper Dash \xB7 Arena VR",domain:"immersiveweb.dev",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0c4a6e,#0284c7)",badge:"\u26A1 Hyper Dash",img:"./hyper-dash-logo.jpg"}],PE=[{name:"Spotify",url:"https://open.spotify.com/",bg:"#121316",logoBg:"#1ED760",logoColor:"#000000",logoText:"Spotify",pill:!0},{name:"Music",url:"https://music.youtube.com/",bg:"#121316",logoBg:"#FF0033",logoColor:"#ffffff",logoText:"\u25C9 Music",pill:!0},{name:"Crunchyroll",url:"https://www.crunchyroll.com/",bg:"#121316",logoBg:"#F47521",logoColor:"#ffffff",logoText:"crunchyroll",pill:!1},{name:"HBO Max",url:"https://www.max.com/",bg:"#121316",logoBg:"#002BE7",logoColor:"#ffffff",logoText:"HBO max",pill:!1},{name:"Hulu",url:"https://www.hulu.com/",bg:"#121316",logoBg:"#1CE783",logoColor:"#050709",logoText:"hulu",pill:!1},{name:"Tubi",url:"https://tubitv.com/",bg:"#121316",logoBg:"#FA382F",logoColor:"#ffffff",logoText:"tubi",pill:!1},{name:"Paramount+",url:"https://www.paramountplus.com/",bg:"#121316",logoBg:"#0064FF",logoColor:"#ffffff",logoText:"Paramount+",pill:!1},{name:"Peacock",url:"https://www.peacocktv.com/",bg:"#121316",logoBg:"#000000",logoColor:"#ffffff",logoText:"peacock",pill:!1},{name:"Twitch",url:"https://www.twitch.tv/",bg:"#121316",logoBg:"#9146FF",logoColor:"#ffffff",logoText:"twitch",pill:!1},{name:"ESPN",url:"https://www.espn.com/",bg:"#121316",logoBg:"#CC0000",logoColor:"#ffffff",logoText:"ESPN",pill:!1}],IE=[{title:"Acima das Nuvens 360\xB0",sub:"Experi\xEAncia WebXR Panor\xE2mica",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0284c7,#1e1b4b)"},{title:"Explora\xE7\xE3o Espacial VR",sub:"Tour Orbital Interativo 3D",url:"https://eyes.nasa.gov/",bg:"linear-gradient(135deg,#311042,#090d16)"},{title:"Jogos WebXR Imersivos",sub:"Cat\xE1logo VR no Navegador",url:"https://constructarcade.com/",bg:"linear-gradient(135deg,#065f46,#0f172a)"}];function NE(){return`
    <div class="qb-home-scroll">
      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Populares</span></div>
        <div class="qb-pop-row">
          ${CE.map(n=>`
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
          ${LE.map(n=>`
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
          ${PE.map(n=>`
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
          ${IE.map(n=>`
            <button type="button" class="qb-imm-card" data-qb-url="${Re(n.url)}" style="background:${n.bg}">
              <span class="qb-imm-badge">WEBXR</span>
              <span class="qb-imm-ttl">${Re(n.title)}</span>
              <span class="qb-imm-sub">${Re(n.sub)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `}function Zd(n,e,t="https://duckduckgo.com/",i={}){var L,E,k,V,z,W,K,Q,ie,q;let s=(i==null?void 0:i.mode)==="incognito-tab"||i!=null&&i.incognito?"incognito-tab":"new-tab",r=s==="incognito-tab",a=r&&t==="https://duckduckgo.com/"?"https://duckduckgo.com/?kae=d&kp=-1":t,o=r?"Navegador \xB7 Guia An\xF4nima":(i==null?void 0:i.mode)==="new-tab"?"Navegador \xB7 Nova Guia":e||"Navegador",l=me.find(j=>j.id==="browser");if(l){l.el.dataset.browserMode=s,l.el.dataset.incognito=r?"1":"0",l.shell&&(l.shell.dataset.browserMode=s,l.shell.dataset.incognito=r?"1":"0");let j=l.el.querySelector(".win-title");j&&(j.textContent=o);let ne=l.el.querySelector("[data-browser-incognito]");ne&&(ne.dataset.browserIncognito=r?"1":"0",ne.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",ne.style.background=r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)",ne.style.borderColor=r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)");let ee=l.el.querySelector("[data-native-browser], iframe"),H=l.el.querySelector(".qb-home-overlay"),le=t==="https://duckduckgo.com/";H&&(H.hidden=!le);let ue=l.el.querySelector(".qb-urlfld");return ue&&(ue.value=a),ee&&(ee.dataset.homeOverlay=le?"1":"0",fe?(ee.dataset.url=a,(E=(L=window.NativeXR)==null?void 0:L.browserCmd)==null||E.call(L,"browser","go",a)):ee.src=a),Kt(l),(V=(k=re).invalidate)==null||V.call(k),(W=(z=re).render)==null||W.call(z,Ie,ye),l}let c=se("div");c.style.cssText=`display:flex;flex-direction:column;height:100%;background:${r?"#120e1e":"#171a22"};color:#e9edf4`;let d=se("div");d.style.cssText=`display:flex;align-items:center;gap:4px;padding:3px 6px;background:${r?"#0b0814":"#0e1117"};border-bottom:1px solid rgba(255,255,255,.08)`;let u=se("button","qb-icn");u.innerHTML=te("back"),u.title="Voltar";let h=se("button","qb-icn");h.innerHTML=te("enter"),h.style.transform="rotate(180deg)",h.title="Avan\xE7ar";let f=se("button","qb-icn");f.innerHTML=te("refresh"),f.title="Recarregar";let g=se("span","qb-mode-badge");g.dataset.browserIncognito=r?"1":"0",g.dataset.qbAct="home",g.title="In\xEDcio do Navegador",g.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",g.style.cssText=`cursor:pointer;font-size:10px;font-weight:800;letter-spacing:.04em;padding:3px 8px;border-radius:999px;white-space:nowrap;color:#f8fafc;background:${r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)"};border:1px solid ${r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)"}`;let y=se("input","fld qb-urlfld");y.type="text",y.placeholder=r?"Pesquisa privada an\xF4nima ou URL":"Pesquisar ou inserir URL",y.value=a;let p=se("button","qb-icn");p.innerHTML=te("star"),p.title="Favorito",d.append(u,h,f,g,y,p);let m=se("div");m.style.cssText="flex:1;min-height:0;position:relative;background:#181a20";let x=t==="https://duckduckgo.com/",v=se("div","qb-home-overlay",NE());v.hidden=!x;let w=se(fe?"div":"iframe");fe?(w.dataset.nativeBrowser="browser",w.style.cssText="width:100%;height:100%;background:#181a20;position:relative;overflow:hidden",w.dataset.url=a,w.dataset.homeOverlay=x?"1":"0",w.appendChild(v),m.appendChild(w)):(w.style.cssText="width:100%;height:100%;border:0;background:#fff",w.referrerPolicy="no-referrer",w.sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation",w.src=a,w.dataset.homeOverlay=x?"1":"0",m.append(w,v));let A=se("div","qb-dock"),T=document.createElement("button");T.className="dock-av",T.title="Perfil",T.setAttribute("aria-label","Perfil"),T.innerHTML=DE,A.appendChild(T);let R=document.createElement("button");R.className="dock-status",R.title="Status",R.innerHTML=`<span class="dock-time">--:--</span><span class="dock-wifi">${te("wifi")}</span><span class="dock-bat">${kE}</span>`,A.appendChild(R),c.append(d,m,A);function F(){let j=Ki(),ne=A.querySelector(".dock-time");if(ne&&(ne.textContent=j.time==="--:--"?new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):j.time),fe&&j.batteryLevel!=null){let ee=A.querySelector(".dock-bat .b-fill");ee&&(ee.setAttribute("width",String(Math.max(2,13*j.batteryLevel))),ee.setAttribute("fill",j.charging?"#8de6c8":j.batteryLevel<.2?"#ff6b6b":"currentColor"))}}F();let _=setInterval(F,2e4);!fe&&navigator.getBattery&&navigator.getBattery().then(j=>{function ne(){let ee=A.querySelector(".dock-bat .b-fill");ee&&(ee.setAttribute("width",String(Math.max(2,13*j.level))),ee.setAttribute("fill",j.charging?"#8de6c8":j.level<.2?"#ff6b6b":"currentColor"))}j.addEventListener("levelchange",ne),j.addEventListener("chargingchange",ne),ne()}).catch(()=>{});function b(){let j=A.querySelector(".dock-wifi");j&&(j.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",b),addEventListener("offline",b),b();function N(j){var ee,H,le,ue;let ne=(j||"").trim();ne&&(/^https?:\/\//i.test(ne)||(ne=/\.\w{2,}($|\/)/.test(ne)?"https://"+ne:"https://duckduckgo.com/?q="+encodeURIComponent(ne)),y.value=ne,v.hidden=!0,w.dataset.homeOverlay="0",fe?(w.dataset.url=ne,(H=(ee=window.NativeXR)==null?void 0:ee.browserCmd)==null||H.call(ee,"browser","go",ne)):w.src=ne,(ue=(le=re).invalidate)==null||ue.call(le))}function I(j,ne){var ee,H;fe&&((H=(ee=window.NativeXR)==null?void 0:ee.browserCmd)==null||H.call(ee,"browser",j,ne||""))}v.addEventListener("click",j=>{let ne=j.target.closest("[data-qb-url]");if(!ne)return;j.stopPropagation();let ee=ne.dataset.qbUrl||"";if(ee.includes("roblox.com")){Al();return}if(ee.includes("moonrider.xyz")){Jd();return}N(ee)}),g.onclick=()=>{var j,ne;v.hidden=!v.hidden,w.dataset.homeOverlay=v.hidden?"0":"1",(ne=(j=re).invalidate)==null||ne.call(j)},y.addEventListener("keydown",j=>{j.key==="Enter"&&(N(y.value),y.blur())}),y.addEventListener("focus",()=>li(!0,y)),u.onclick=()=>I("back"),h.onclick=()=>I("fwd"),f.onclick=()=>I("reload");let U=Jt({id:"browser",title:o,node:c});return U!=null&&U.el&&(U.el.dataset.browserMode=s,U.el.dataset.incognito=r?"1":"0"),U!=null&&U.shell&&(U.shell.dataset.browserMode=s,U.shell.dataset.incognito=r?"1":"0"),U._cleanupQB=()=>{clearInterval(_),removeEventListener("online",b),removeEventListener("offline",b)},U.obj.position.copy(U.target),U.apply(),Ie.updateMatrixWorld(!0),(Q=(K=re).invalidate)==null||Q.call(K),(q=(ie=re).render)==null||q.call(ie,Ie,ye),U}function _v(n="new-tab"){let e=n==="incognito-tab",t=Zd("browser",e?"Navegador \xB7 Guia An\xF4nima":"Navegador \xB7 Nova Guia",e?"https://duckduckgo.com/?kae=d&kp=-1":"https://duckduckgo.com/",{mode:e?"incognito-tab":"new-tab",incognito:e});return ht(e?"Guia An\xF4nima aberta":"Nova Guia aberta"),t}typeof window<"u"&&(window.nextvrOpenBrowserOption=_v);var DE='<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',kE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';function _n(n,e,t,i){var g,y,p,m;if(n==="browser"||n==="youtube"||n==="netflix"||n==="prime"||n==="tiktok"||n==="twitch"||n==="discord"||n==="roblox")return Zd(n,e,t);let s=se("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=se("div","row browser-bar"),a=se("input","fld");a.value=t,a.placeholder=O("search");let o=se("button","go",te("enter"));o.setAttribute("aria-label",O("open")),o.title=O("open");let l=se("button","go",te("external"));l.setAttribute("aria-label",O("open")),l.title=O("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(a,o,l);let c=se("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let d=se("div");d.style.cssText="flex:1;min-height:0;position:relative";let u=se(fe?"div":"iframe");fe&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),d.appendChild(u),s.append(r,c,d);let h=x=>{let v=(x||"").trim();if(v){if(/^https?:\/\//i.test(v)||(v=/\.\w{2,}($|\/)/.test(v)?"https://"+v:"https://duckduckgo.com/?q="+encodeURIComponent(v)),a.value=v,fe){u.dataset.url=v,c.style.display="none";return}u.src=v,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};o.onclick=()=>h(a.value),a.addEventListener("keydown",x=>{x.key==="Enter"&&h(a.value)}),a.addEventListener("focus",()=>li(!0,a)),l.onclick=()=>RE(a.value),h(t);let f=Jt({id:n,title:e,node:s});return f.shell.classList.add("web-page-window"),f.obj.position.copy(f.target),f.apply(),Ie.updateMatrixWorld(!0),(y=(g=re).invalidate)==null||y.call(g),(m=(p=re).render)==null||m.call(p,Ie,ye),f}var Re=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Bd=[];function zf(){let n=se("div","pad"),e=se("div");e.innerHTML=`<h2>${O("gallery")}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;let t=se("div");t.style.marginTop="22px",t.innerHTML=`<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${O("env")}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;let i=se("div","grid3"),s=()=>{i.innerHTML="";for(let u of Fh()){let h=se("button","env"+(u.thumb?" env-pano":""));h.style.background=u.thumb?`url('${u.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",h.innerHTML=`<span>${u.name}</span>`,h.setAttribute("aria-pressed",S.env===u.id?"true":"false"),h.onclick=()=>{Wi(u.id),[...i.children].forEach(f=>f.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true"),ht("Ambiente: "+u.name)},i.appendChild(h)}};s(),Ge("env",s),t.appendChild(i);let r=se("div");r.style.cssText="margin-top:26px;display:flex;align-items:center;gap:10px",r.innerHTML=`<h3 style="font-size:18px;margin:0;font-weight:700">${O("gallery")}</h3>`;let a=se("button","go",O("pickPhotos")),o=se("input");o.type="file",o.accept="image/*",o.multiple=!0,o.style.display="none",r.appendChild(a);let l=se("div","grid4"),c=se("div");c.style.cssText="margin-top:14px";let d=()=>{if(l.innerHTML="",!Bd.length){l.innerHTML=`<p class="sub" style="grid-column:1/-1">${O("noPhotos")}</p>`;return}Bd.forEach(u=>{let h=se("button","thumb");h.innerHTML=`<img src="${u}" alt="">`,h.onclick=()=>{c.innerHTML=`<img src="${u}" style="width:100%;border-radius:16px">`},l.appendChild(h)})};return a.onclick=()=>o.click(),o.onchange=()=>{for(let u of o.files)Bd.push(URL.createObjectURL(u));d(),ht(Bd.length+" fotos")},d(),n.append(e,t,r,o,l,c),Jt({id:"gallery",title:O("gallery"),node:n})}function OE(){let n=se("div","pad");n.innerHTML=`<h2>${O("env")}</h2><p class="sub">Troque sem fechar nada.</p>`;let e=se("div","grid3");for(let t of Fh()){let i=se("button","env"+(t.thumb?" env-pano":""));i.style.background=t.thumb?`url('${t.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",i.innerHTML=`<span>${t.name}</span>`,i.setAttribute("aria-pressed",S.env===t.id),i.onclick=()=>{Wi(t.id),[...e.children].forEach(s=>s.setAttribute("aria-pressed","false")),i.setAttribute("aria-pressed","true")},e.appendChild(i)}return n.appendChild(e),Jt({id:"env",title:O("env"),node:n})}function UE(n,e,t){let i=se("div","opt");return i.append(se("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function nn(n,e,t,i){let s=se("div","yt-row"),r=se("span","yt-ic");r.innerHTML=n;let a=se("div","yt-txt");if(a.innerHTML=`<div class="yt-title">${e}</div>${t?`<div class="yt-sub">${t}</div>`:""}`,s.append(r,a),i){let o=se("div","yt-ctl");o.appendChild(i),s.appendChild(o)}else{let o=se("span","yt-ch");o.innerHTML="",s.appendChild(o)}return s}function Qr(n,e){let t=se("button","yt-sw");t.type="button",t.setAttribute("role","switch");let i=()=>{t.dataset.on=S[n]?"1":"0",t.setAttribute("aria-checked",S[n]?"true":"false")};return i(),t.onclick=()=>{S[n]=S[n]?0:1,Ve(),i(),e&&e(S[n])},t}function ao(n){let e=se("div","yt-sec");return e.textContent=n,e}function ea(n,e,t,i){let s=se("input","yt-range");return s.type="range",s.min=e,s.max=t,s.step=i,s.value=S[n],s.oninput=()=>{S[n]=+s.value,Ve()},s}function wv(n){n.innerHTML="";let e=Py(),t=n,i=se("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${O(ul()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=se("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!ul()){let o=se("button","go",O("xrInstall"));o.onclick=()=>{Dp()},s.append(o)}let r=se("button","go",O("xrSelfTest"));r.onclick=()=>kp(),s.append(r);let a=se("div","seg");for(let[o,l,c]of[["controllers",O("xrModeControllers"),O("xrModeControllersSub")],["hands",O("xrModeHands"),O("xrModeHandsSub")]]){let d=se("button",null,l);d.title=c,d.setAttribute("aria-pressed",String(Dy()===o)),d.onclick=()=>{Fy(o),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),d.setAttribute("aria-pressed","true")},a.appendChild(d)}t.append(UE(O("xrHandMode"),O("xrHandModeSub"),a),s),t.append(se("p","note",O("xrHandModeNote"))),!ul()&&!e.runtimeBundled&&t.append(se("p","note",O("xrBundlingNote")))}function Kd(){var F,_;let n=se("div","quick-center"),e=se("section","quick-panel"),t=se("aside","quick-side"),i=se("div","quick-status"),s=()=>{var N,I;try{let U=(I=(N=window.NativeXR)==null?void 0:N.battery)==null?void 0:I.call(N);if(U){let L=JSON.parse(U);if(L&&typeof L.level=="number")return L}}catch{}let b=Ki();return b&&typeof b.batteryLevel=="number"?{level:b.batteryLevel,charging:!!b.charging}:null},r=s(),a=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});i.innerHTML=`<div><strong>Controles r\xE1pidos</strong><span>${a}</span></div><div class="quick-battery">${te("battery")}<b data-cc-battery>${r?Math.round(r.level*100):"\u2014"}%</b></div>`,Ge("device-status",()=>{let b=i.querySelector("[data-cc-battery]");if(!b)return;let N=s();b.textContent=`${N?Math.round(N.level*100):"\u2014"}%`});let l=se("button","quick-gear",te("settings"));l.type="button",l.title="Todas as configura\xE7\xF5es",l.setAttribute("aria-label","Todas as configura\xE7\xF5es"),l.onclick=()=>$d(),i.appendChild(l);let c=se("div","quick-tiles"),d=(b,N,I,U,L=!1)=>{let E=se("button",`quick-tile${L?" is-disabled":""}`);return E.type="button",E.innerHTML=`<span class="quick-tile-icon">${te(b)}</span><span><b>${N}</b><small>${I}</small></span>`,E.disabled=L,U&&(E.onclick=U),c.appendChild(E),E};d("wifi","Wi-Fi","Abrir conex\xF5es",()=>{var b;return(b=window.NativeXR)!=null&&b.systemPanel?window.NativeXR.systemPanel("internet"):ht("Conex\xF5es dispon\xEDveis no Android")}),d("bluetooth","Bluetooth","Dispositivos",()=>{var b;return(b=window.NativeXR)!=null&&b.systemPanel?window.NativeXR.systemPanel("bluetooth"):ht("Bluetooth dispon\xEDvel no Android")}),d("android","Apps Android","Abrir janela Shizuku",()=>Yd()),d("lock","Limite","Movimento protegido",null,!0),e.append(i,c);let u=se("div","quick-section");u.innerHTML='<div class="quick-section-title"><b>Controles r\xE1pidos</b><span>Toque para ativar ou ajustar</span></div>';let h=se("div","quick-controls"),f=S.env==="night"?"passthrough":S.env,g=!1,y=null,p=null,m=b=>{var N;g=!!b,(N=window.NativeXR)!=null&&N.audioEnabled&&window.NativeXR.audioEnabled(!g);for(let I of[y,p])I&&(I.classList.toggle("is-active",g),I.setAttribute("aria-pressed",String(g)));y&&(y.querySelector("small").textContent=g?"\xC1udio silenciado":"Som ativado")},x=(b,N,I,U,L=!1)=>{let E=se("button",`quick-control${L?" is-active":""}`);return E.type="button",E.setAttribute("aria-pressed",String(L)),E.innerHTML=`<span>${te(b)}</span><b>${N}</b><small>${I}</small>`,E.onclick=()=>{let k=U(E);E.classList.toggle("is-active",!!k),E.setAttribute("aria-pressed",String(!!k))},h.appendChild(E),E};x("camera","Vis\xE3o do ambiente",S.env==="passthrough"?"C\xE2mera ativa":"C\xE2mera desligada",b=>{let N=S.env!=="passthrough";return xi(N),b.querySelector("small").textContent=N?"C\xE2mera ativa":"C\xE2mera desligada",N},S.env==="passthrough"),y=x("volumeoff","N\xE3o perturbe","Silenciar \xE1udio do app",()=>(m(!g),g)),x("crosshair","Recentralizar","Ajustar a vis\xE3o",()=>(qi(),ht("Vis\xE3o recentralizada"),!1)),x("moon","Modo noturno",S.env==="night"?"Ativado":"Desativado",b=>{let N=S.env!=="night";return N?(f=S.env,Wi("night")):Wi(f==="night"?"passthrough":f),b.querySelector("small").textContent=N?"Ativado":"Desativado",N},S.env==="night"),x("settings","Mais configura\xE7\xF5es","Imagem, janelas e idioma",()=>($d(),!1)),x("android","Apps do Android","Abrir launcher Shizuku",()=>(Yd(),!1)),x("appGrid","Spatial App",S.spatialLauncher?"Ativado (Sem Dock)":"Desativado (Dock normal)",b=>{let N=!S.spatialLauncher;return qf(N),b.querySelector("small").textContent=N?"Ativado (Sem Dock)":"Desativado (Dock normal)",N},!!S.spatialLauncher),x("vision","C\xE2mera Grande Ocular",S.wideCamera?"Ativada":"Normal",b=>{var N,I;return S.wideCamera=S.wideCamera?0:1,Ve(S),(I=(N=window.NativeXR)==null?void 0:N.wideCamera)==null||I.call(N,!!S.wideCamera),b.querySelector("small").textContent=S.wideCamera?"Ativada":"Normal",!!S.wideCamera},!!S.wideCamera),x("move",O("dockSnapSlot"),S.dockSnapSlot!==0?O("on"):O("off"),b=>(S.dockSnapSlot=S.dockSnapSlot===0?1:0,Ve(S),b.querySelector("small").textContent=S.dockSnapSlot!==0?O("on"):O("off"),S.dockSnapSlot!==0),S.dockSnapSlot!==0),x("crosshair",O("fingerTouch"),S.fingerTouch!==0?O("on"):O("off"),b=>{var N,I;return S.fingerTouch=S.fingerTouch===0?1:0,Ve(S),(I=(N=window.NativeXR)==null?void 0:N.setFingerTouch)==null||I.call(N,S.fingerTouch!==0),Se("fingerTouch",S.fingerTouch!==0),b.querySelector("small").textContent=S.fingerTouch!==0?O("on"):O("off"),S.fingerTouch!==0},S.fingerTouch!==0),x("crosshair","Pin\xE7a no App (Sem Raio)",S.pinchOnApp!==0?"Ativado":"Desativado",b=>(S.pinchOnApp=S.pinchOnApp===0?1:0,Ve(S),Se("pinchOnApp",S.pinchOnApp!==0),b.querySelector("small").textContent=S.pinchOnApp!==0?"Ativado":"Desativado",S.pinchOnApp!==0),S.pinchOnApp!==0),x("crosshair","Gesto de Arminha (Dock)",S.gunGesture!==0?"Ativado":"Desativado",b=>(S.gunGesture=S.gunGesture===0?1:0,Ve(S),Se("gunGesture",S.gunGesture!==0),b.querySelector("small").textContent=S.gunGesture!==0?"Ativado":"Desativado",S.gunGesture!==0),S.gunGesture!==0),x("move","Modo 3DoF / 6DoF",S.sixdof!==0?"6DoF Ativado":"3DoF Ativado",b=>{var N,I;return S.sixdof=S.sixdof===0?1:0,Ve(S),S.sixdof||Wt.reset(),(I=(N=window.NativeXR)==null?void 0:N.setSixDofEnabled)==null||I.call(N,S.sixdof!==0),Se("sixdof",S.sixdof!==0),b.querySelector("small").textContent=S.sixdof!==0?"6DoF Ativado":"3DoF Ativado",S.sixdof!==0},S.sixdof!==0),u.appendChild(h),e.append(u);let v=se("div","quick-side-title","Ajustes"),w=se("span","quick-side-icon",te("volume")),A=se("input","quick-vertical");A.type="range",A.min="0",A.max="100",A.value=(F=window.NativeXR)!=null&&F.volume?window.NativeXR.volume():65,A.setAttribute("aria-label","Volume"),A.title=`Volume ${A.value}%`,A.oninput=()=>{var b,N;(N=(b=window.NativeXR)==null?void 0:b.setVolume)==null||N.call(b,+A.value),A.title=`Volume ${A.value}%`},p=se("button","quick-side-button",te("volumeoff")),p.type="button",p.title="Silenciar \xE1udio",p.setAttribute("aria-label","Silenciar \xE1udio"),p.setAttribute("aria-pressed","false"),p.onclick=()=>m(!g);let T=se("span","quick-side-icon",te("sun")),R=se("input","quick-vertical");return R.type="range",R.min="10",R.max="100",R.value=(_=window.NativeXR)!=null&&_.brightness?window.NativeXR.brightness():70,R.setAttribute("aria-label","Brilho"),R.title=`Brilho ${R.value}%`,R.oninput=()=>{var b,N;(N=(b=window.NativeXR)==null?void 0:b.setBrightness)==null||N.call(b,+R.value),R.title=`Brilho ${R.value}%`},t.append(v,w,A,p,T,R),n.append(e,t),Jt({id:"control-center",title:"Configura\xE7\xF5es",node:n,w:980,h:640})}function $d(){let n=se("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;";let e=se("div");e.style.cssText="display:flex;align-items:center;gap:6px;padding:8px 8px 4px;";let t=se("button","yt-back");t.innerHTML=te("back"),t.title="Voltar",t.setAttribute("aria-label","Voltar"),t.onclick=()=>{let m=me.find(x=>x.id==="settings");m&&Nt(m)};let i=se("div","yt-head-title");i.textContent=O("settings"),e.append(t,i);let s=se("div");s.style.cssText="flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;";let r=null,a=()=>{r=Jt({id:"language-pick",title:O("langTitle"),w:320,h:420,node:Rv(S.lang||"pt",m=>{Dr(m),ht(O("langChanged")),Nt(r);let x=me.find(v=>v.id==="settings");x&&Nt(x),$d()},!0)})};s.append(ao(O("general")));let o=se("button","yt-link");o.append(nn(te("globe"),O("language"),jc(S.lang||"pt").label)),o.onclick=a,s.append(o),s.append(nn(te("gauge"),"Contador de FPS","Mostrar taxa de quadros",Qr("showFps")));let l=se("div");l.style.cssText="display:inline-flex;gap:6px;align-items:center;";let c=se("button","entry-seg-btn"+(S.sixdof===0?" on":""),"3DoF");c.dataset.settingsDof="3dof";let d=se("button","entry-seg-btn"+(S.sixdof!==0?" on":""),"6DoF");d.dataset.settingsDof="6dof";let u=()=>{c.classList.toggle("on",S.sixdof===0),d.classList.toggle("on",S.sixdof!==0)};c.onclick=()=>{var m,x;S.sixdof=0,Ve(S),Wt.reset(),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!1),Se("sixdof",!1),u()},d.onclick=()=>{var m,x;S.sixdof=1,Ve(S),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!0),Se("sixdof",!0),u()},l.append(c,d),s.append(nn(te("move"),"Modo 3DoF / 6DoF","Alternar entre 3DoF (rota\xE7\xE3o) e 6DoF (andar no espa\xE7o)",l));let h=se("button","yt-link");h.append(nn(te("image"),"Ambiente","Trocar passthrough / panorama")),h.onclick=()=>{let m=me.find(x=>x.id==="settings");m&&Nt(m),zf()},s.append(h),s.append(ao(O("hands"))),s.append(nn(te("user"),"Rastreamento","MediaPipe nativo \xB7 c\xE2mera traseira")),s.append(nn(te("edit3"),"Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",Qr("handDraw"))),s.append(nn(te("crosshair"),O("fingerTouch"),O("fingerTouchDesc"),Qr("fingerTouch",m=>{var x,v;(v=(x=window.NativeXR)==null?void 0:x.setFingerTouch)==null||v.call(x,!!m),Se("fingerTouch",!!m)}))),s.append(nn(te("crosshair"),"Pin\xE7a no App (Sem Raio)","Fazer a pin\xE7a encima de um app abre o app na hora, sem precisar do raio",Qr("pinchOnApp",m=>Se("pinchOnApp",!!m)))),s.append(nn('<img src="./gun-logo.jpg" alt="Arminha" style="width:22px;height:22px;border-radius:50%;object-fit:cover;display:block;border:1px solid rgba(56,189,248,.65)">',"Gesto de Arminha (Ocultar Dock)","Polegar erguido + fechar o indicador oculta/exibe a Dock com bolinha neon",Qr("gunGesture",m=>Se("gunGesture",!!m)))),s.append(nn(te("zap"),"Sensibilidade","Pin\xE7a com histerese est\xE1vel")),s.append(ao(O("windows"))),s.append(nn(te("maximize"),"Tamanho","Escala das janelas",ea("winScale",.6,1.6,.05))),s.append(nn(te("distance"),"Dist\xE2ncia","Dist\xE2ncia do arco",ea("winDist",fe?.6:1.5,fe?1.8:3.4,.05))),s.append(nn(te("curve"),O("curve"),"Abertura do arco",ea("winCurve",0,1,.05))),s.append(nn(te("curve"),O("win360"),O("win360k"),ea("win360K",.2,1.15,.05))),s.append(nn(te("curve"),O("win360All"),"Novas janelas curvadas",Qr("win360"))),s.append(nn(te("move"),"Inclina\xE7\xE3o","Ajuste vertical das janelas",ea("winTilt",0,1.5,.05))),s.append(ao(O("dock"))),s.append(nn(te("appGrid"),"Tamanho da dock",null,ea("dockSize",.7,1.5,.05))),s.append(nn(te("distance"),"Dist\xE2ncia da dock",null,ea("dockDist",.7,1.5,.05))),s.append(nn(te("move"),O("dockSnapSlot"),O("dockSnapDesc"),Qr("dockSnapSlot"))),s.append(ao(O("perf")));let f=se("div","yt-seg");for(let[m,x]of[["low",O("qualityLow")],["medium",O("qualityMedium")],["high",O("qualityHigh")],["auto",O("qualityAuto")]]){let v=se("button","yt-seg-btn");v.textContent=x,v.setAttribute("aria-pressed",S.quality===m),v.onclick=()=>{S.quality=m,Ve(),Se("quality"),[...f.children].forEach(w=>w.setAttribute("aria-pressed","false")),v.setAttribute("aria-pressed","true")},f.appendChild(v)}s.append(nn(te("settings"),O("quality"),"1080p \xB7 890p \xB7 390p \xB7 Auto",f)),s.append(ao(O("xrTitle")));let g=se("button","yt-link");g.append(nn(te("controller"),O("xrTitle"),O("xrSub"))),g.setAttribute("aria-expanded","false");let y=se("div","card");y.dataset.xrPage="",y.style.margin="0 16px 14px",y.hidden=!0,g.onclick=()=>{y.hidden=!y.hidden,g.setAttribute("aria-expanded",String(!y.hidden)),y.hidden||wv(y)},s.append(g,y);let p=se("div","yt-foot");return p.textContent="NextVR \xB7 shell XR para Android \xB7 v1.0",s.append(p),n.append(e,s),Jt({id:"settings",title:O("settings"),node:n})}function FE(){let n=me.find(h=>h.id==="quick-settings");if(n)return Kt(n),kf(Ki()),n;let e=se("div","quick-settings");e.innerHTML=`<section class="qs-panel">
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
  </aside>`;let t=e,i={night:!1,dnd:!1,muted:!1,lastVolume:50};try{i={...i,...JSON.parse(localStorage.getItem("nextvr.quick-settings.v1")||"{}")}}catch{}let s=[...t.querySelectorAll("[data-q-range]")],r=(h,f)=>{var g,y;try{let p=Number((y=(g=window.NativeXR)==null?void 0:g[h])==null?void 0:y.call(g));return Number.isFinite(p)?Math.max(0,Math.min(100,p)):f}catch{return f}},a=fe?r("mediaVolumePercent",50):50,o=fe?r("brightnessPercent",50):50;a>0&&(i.lastVolume=a);function l(h,f){let g=Math.max(0,Math.min(100,Number(f)||0));for(let y of s.filter(p=>p.dataset.qRange===h))y.value=String(g),y.style.setProperty("--fill",`${g}%`);h==="volume"&&(a=g,g>0?(i.lastVolume=g,i.muted=!1):i.muted=!0)}function c(){try{localStorage.setItem("nextvr.quick-settings.v1",JSON.stringify(i))}catch{}}function d(){t.classList.toggle("night",!!i.night),t.querySelectorAll("[data-q-night]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.night))),t.querySelectorAll("[data-q-dnd]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.dnd))),t.querySelectorAll("[data-q-mute]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.muted)))}l("volume",a),l("brightness",o),d();for(let h of s)h.addEventListener("input",()=>l(h.dataset.qRange,h.value)),h.addEventListener("change",()=>{var f,g,y,p;fe&&(h.dataset.qRange==="volume"&&((g=(f=window.NativeXR).setMediaVolumePercent)==null||g.call(f,a)),h.dataset.qRange==="brightness"&&((p=(y=window.NativeXR).setBrightnessPercent)==null||p.call(y,Number(h.value))),d(),c())});t.addEventListener("click",h=>{var g,y;let f=p=>h.target.closest(p);if(f("[data-q-close]")){Nt(me.find(p=>p.id==="quick-settings"));return}if(f("[data-q-settings]")){$d();return}if(f("[data-q-env]")){OE();return}if(f("[data-q-recenter]")){qi();return}if(f("[data-q-night]")){i.night=!i.night,d(),c();return}if(f("[data-q-dnd]")){i.dnd=!i.dnd,d(),c();return}f("[data-q-mute]")&&(i.muted=!i.muted,i.muted?(a>0&&(i.lastVolume=a),l("volume",0)):l("volume",i.lastVolume||50),fe&&((y=(g=window.NativeXR).setMediaVolumePercent)==null||y.call(g,a)),d(),c())});let u=Jt({id:"quick-settings",title:"Configura\xE7\xF5es",node:e,w:1040,h:660,chrome:!1,resizable:!1});return kf(Ki()),u}function kf(n=Ki()){var a;let e=(a=me.find(o=>o.id==="quick-settings"))==null?void 0:a.el.querySelector(".quick-settings");if(!e)return;let t=e.querySelector("[data-q-battery] span");t&&(t.textContent=n.batteryLevel==null?"--%":`${Math.round(n.batteryLevel*100)}%`);let i=e.querySelector("[data-q-time]");i&&(i.textContent=n.time||"--:--");let s=e.querySelector("[data-q-date]");s&&(s.textContent=n.date||"");let r=e.querySelector("[data-q-network]");r&&(r.textContent=n.online?"Conectado \xE0 internet":"Sem conex\xE3o")}Ge("device-status",kf);var Sv="nextvr.lib.recent.v1",BE=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},Ml=BE(Sv),zE=()=>{try{localStorage.setItem(Sv,JSON.stringify(Ml))}catch{}},Mv=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">N</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X",label:"X",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],Of={id:"gorilla-tag",name:"Gorilla Tag",label:"Gorilla Tag",bg:"#0b141a",html:'<img class="lx-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',kind:"app"},ss=n=>{let e=me.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null};function Al(){var e,t,i,s,r,a,o,l;document.documentElement.dataset.robloxBlackEnv="1",(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,"black"),S.handDraw=1,(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!0),fe&&!Vh()&&Xi();for(let c of me)c.id!=="roblox"&&c.setHidden(!0);Xt(!1),Qt(!0);let n=_n("roblox","Roblox","https://www.roblox.com/");return n&&(n.setHidden(!1),n.obj.position.copy(n.target),n.apply(),Ie.updateMatrixWorld(!0),Kt(n)),(a=(r=re).invalidate)==null||a.call(r),(l=(o=re).render)==null||l.call(o,Ie,ye),n}Ge("wins",()=>{var n,e,t,i,s,r;if(document.documentElement.dataset.robloxBlackEnv==="1"&&!me.some(a=>a.id==="roblox")){delete document.documentElement.dataset.robloxBlackEnv,(e=(n=window.NativeXR)==null?void 0:n.env)==null||e.call(n,S.env||"passthrough");for(let a of me)a.id!=="spatial-launcher"&&a.setHidden(!1);S.spatialLauncher?jd():(Qt(!1),Xt(!0)),(i=(t=re).invalidate)==null||i.call(t),(r=(s=re).render)==null||r.call(s,Ie,ye)}});function Jd(){var l,c,d,u,h,f,g,y,p,m;let n=me.find(x=>x.id==="beat-saber");if(n)return n.setHidden(!1),Kt(n),(c=(l=re).invalidate)==null||c.call(l),(u=(d=re).render)==null||u.call(d,Ie,ye),n;S.spatialLauncher||(Xt(!1),Qt(!0));let e=se("div","beat-saber-vr-stage");e.dataset.beatSaberVr="1",e.style.cssText="position:relative;width:100%;height:100%;background:radial-gradient(circle at 50% 38%,#141838 0%,#060814 68%,#020308 100%);overflow:hidden;display:flex;flex-direction:column;color:#f8fafc",e.innerHTML=`
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
  `;let t=e.querySelector("[data-bs-canvas]"),i=(h=t==null?void 0:t.getContext)==null?void 0:h.call(t,"2d"),s=0,r=performance.now(),a=x=>{if(!i||!document.body.contains(e))return;let v=(x-r)*.001,w=t.width,A=t.height;i.fillStyle="#050712",i.fillRect(0,0,w,A),i.strokeStyle="rgba(56,189,248,0.28)",i.lineWidth=2;for(let N=-3;N<=3;N++)i.beginPath(),i.moveTo(w*.5+N*26,A*.28),i.lineTo(w*.5+N*155,A),i.stroke();let T=v*1.4%1,R=26+T*68,F=w*.5-50-T*120,_=A*.3+T*(A*.52);i.fillStyle="#ff1744",i.strokeStyle="#ff8a80",i.lineWidth=3,i.fillRect(F-R*.5,_-R*.5,R,R),i.strokeRect(F-R*.5,_-R*.5,R,R);let b=w*.5+50+T*120;i.fillStyle="#00e5ff",i.strokeStyle="#84ffff",i.fillRect(b-R*.5,_-R*.5,R,R),i.strokeRect(b-R*.5,_-R*.5,R,R),s=requestAnimationFrame(a)};s=requestAnimationFrame(a);let o=Jt({id:"beat-saber",title:"Beat Saber VR",node:e,w:1020,h:640});return o!=null&&o.shell&&(o.shell.dataset.beatSaberVr="1"),o!=null&&o.el&&(o.el.dataset.beatSaberVr="1"),(f=e.querySelector("[data-bs-exit]"))==null||f.addEventListener("click",()=>{cancelAnimationFrame(s),Nt(o),S.spatialLauncher||(Qt(!1),Xt(!0))}),Kt(o),(y=(g=re).invalidate)==null||y.call(g),(m=(p=re).render)==null||m.call(p,Ie,ye),o}typeof window<"u"&&(window.nextvrOpenRobloxVr=Al,window.nextvrOpenBeatSaberVr=Jd);var Hf={youtube:()=>_n("youtube","YouTube","https://m.youtube.com/"),browser:()=>_n("browser",O("browser"),"https://duckduckgo.com/"),store:()=>Vf(),gallery:()=>zf(),settings:()=>Kd(),discord:()=>_n("discord","Discord","https://discord.com/app"),netflix:()=>_n("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>_n("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>_n("twitch","Twitch","https://www.twitch.tv/"),prime:()=>_n("prime","prime video","https://www.primevideo.com/"),whatsapp:()=>_n("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>_n("instagram","Instagram","https://www.instagram.com/"),x:()=>_n("x","X","https://x.com/"),facebook:()=>_n("facebook","Facebook","https://www.facebook.com/"),telegram:()=>_n("telegram","Telegram","https://web.telegram.org/"),spotify:()=>_n("spotify","Spotify","https://open.spotify.com/"),"gorilla-tag":()=>ro(),"beat-vr":()=>Jd(),"roblox-vr":()=>Al(),roblox:()=>Al(),"hyper-vr":()=>Zd("browser","Hyper Dash VR","https://immersiveweb.dev/")},wl="apps",zd="home",Sl=null,HE=[["apps","Apps"],["horizon","Horizon+"]],VE=[{id:"gorilla-tag",name:"Gorilla Tag",cat:"games",rating:"4.9",reviews:"28 mil",tag:"VR \xB7 Hand Tracking",badge:"DESTAQUE",img:"./icons/gorilla-tag-logo.jpg",bg:"linear-gradient(135deg,#431407,#ea580c)"},{id:"beat-vr",name:"Beat Saber",cat:"games",rating:"4.9",reviews:"45 mil",tag:"Modo VR Imediato",badge:"VR",img:"./beat-saber-logo.jpg",bg:"linear-gradient(135deg,#450a0a,#0284c7)"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"games",rating:"4.8",reviews:"9,4 mil",tag:"A\xE7\xE3o \xB7 Arena VR",badge:"VR",img:"./hyper-dash-logo.jpg",bg:"linear-gradient(135deg,#082f49,#0284c7)"},{id:"roblox-vr",name:"Roblox",cat:"games",rating:"4.8",reviews:"64 mil",tag:"Ambiente Preto \xB7 Hand Tracking",badge:"NOVO",img:"./roblox-logo.jpg",bg:"linear-gradient(135deg,#090d16,#1e293b)"},{id:"tiktok",name:"TikTok",cat:"apps",rating:"4.9",reviews:"52 mil",tag:"V\xEDdeos \xB7 Social",badge:"APP",img:"./tiktok-logo.jpg",bg:"linear-gradient(135deg,#09090b,#18181b)"},{id:"youtube",name:"YouTube VR",cat:"apps",rating:"4.8",reviews:"31 mil",tag:"V\xEDdeo 360\xB0 \xB7 4K",badge:"APP",img:"./icons/youtube.svg",bg:"linear-gradient(135deg,#450a0a,#dc2626)",isSvg:!0},{id:"discord",name:"Discord",cat:"apps",rating:"4.7",reviews:"19 mil",tag:"Comunidade \xB7 Voz",badge:"APP",img:"./icons/discord.svg",bg:"linear-gradient(135deg,#312e81,#4f46e5)",isSvg:!0},{id:"netflix",name:"Netflix",cat:"apps",rating:"4.8",reviews:"22 mil",tag:"Cinema VR",badge:"APP",img:"",bg:"linear-gradient(135deg,#450a0a,#991b1b)",textLogo:"N"}];function GE(){let n=se("div","st st-quest-store"),e=HE.map(([s,r])=>`<button class="st-tab" data-tab="${s}" aria-selected="${wl===s}" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden">${r}</button>`).join(""),t=[["home","P\xE1gina inicial"],["games","Jogos"],["apps","Apps"],["wishlist","Lista de desejos"]].map(([s,r])=>`<button type="button" class="st-quest-pill ${zd===s&&wl!=="horizon"?"on":""}" data-qtab="${s}">${r}</button>`).join(""),i=`
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
    </div>`;if(wl==="horizon")i+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else{let s=!!S.gorillaInstalled,r=Sl!==null?`<span class="st-quest-card-btn" style="background:rgba(251,146,60,.24);color:#fdba74">Baixando... ${Sl}%</span>`:s?`<div style="display:flex;gap:6px;align-items:center">
             <span data-gorilla-installed="1" style="font-size:10px;font-weight:800;color:#4ade80;padding:3px 8px;border-radius:999px;background:rgba(34,197,94,.16);border:1px solid rgba(74,222,128,.35)">\u2713 Instalado</span>
             <button class="st-btn st-quest-card-btn" data-launch-gorilla style="background:#2563eb;color:#fff">ABRIR</button>
           </div>`:'<button class="st-btn st-quest-card-btn" data-install-gorilla style="background:#2563eb;color:#fff">BAIXAR</button>',o=VE.filter(l=>zd==="games"?l.cat==="games":zd==="apps"?l.cat==="apps":!0).map(l=>{let c=l.id==="gorilla-tag",d=l.textLogo?`<span style="font-size:38px;font-weight:900;color:#ef4444;letter-spacing:-.04em">${l.textLogo}</span>`:l.isSvg?`<img src="${l.img}" alt="${l.name}" style="width:48px;height:48px;object-fit:contain">`:`<img class="${c?"st-gorilla-logo":""}" src="${l.img}" alt="${l.name}" style="width:100%;height:100%;object-fit:cover;display:block">`,u=c?r:`<button type="button" class="st-btn st-quest-card-btn" data-store-launch="${l.id}" style="background:rgba(255,255,255,.12);color:#f8fafc">Abrir</button>`;return`
        <article class="st-quest-card ${c?"st-gorilla-card":""}" ${c?"data-store-gorilla":""} data-store-card="${l.id}">
          <div class="st-quest-card-art" style="background:${l.bg}" ${c?"":`data-store-launch="${l.id}"`}>
            ${d}
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
              ${u}
            </div>
          </div>
        </article>`}).join("");i+=`
      <div class="st-quest-hero">
        <div class="st-quest-hero-copy">
          <span class="st-quest-hero-kicker">META QUEST \xB7 NEXTVR STORE</span>
          <h2 class="st-quest-hero-title">JOGOS E APPS EM DESTAQUE</h2>
          <p class="st-quest-hero-sub">Gorilla Tag (${ts.model}), Beat Saber em modo VR imediato, Hyper Dash VR, Roblox com ambiente escuro e TikTok.</p>
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
      <p class="st-note" style="font-size:11px;opacity:.75;margin:8px 0 0">Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>`}return n.innerHTML=i,n.addEventListener("click",s=>{let r=o=>s.target.closest(o),a;if(a=r("[data-tab]")){wl=a.dataset.tab,is();return}if(a=r("[data-qtab]")){wl="apps",zd=a.dataset.qtab,is();return}if(r("[data-x]")){let o=me.find(l=>l.id==="store");o&&Nt(o);return}if(r("[data-ava]")){ht("Perfil NextVR");return}if(r("[data-openlib]")){Gf();return}if(r("[data-install-gorilla]")){S.gorillaInstalled=1,Ve(),na("gorilla-tag",!0),Qn(),Sl=35,is(),setTimeout(()=>{Sl=80,is()},120),setTimeout(()=>{Sl=null,is(),Qn(),ht("Gorilla Tag baixado! Adicionado \xE0 Biblioteca de Apps.")},260);return}if(r("[data-launch-gorilla]")){na("gorilla-tag"),ro();return}if(a=r("[data-store-launch]")){let o=a.dataset.storeLaunch;na(o,!0);let l=Hf[o];l&&l();return}}),n}function is(){var t,i,s;let n=ss("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(GE()),n.querySelector(".st").scrollTop=e,(s=(i=re).invalidate)==null||s.call(i)}function Vf(){var i,s,r,a;let n=me.find(o=>o.id==="store");if(n)return is(),Kt(n),(s=(i=re).render)==null||s.call(i,Ie,ye),n;let e=se("div");e.style.cssText="height:100%";let t=Jt({id:"store",title:"Store",node:e});return is(),(a=(r=re).render)==null||a.call(r,Ie,ye),t}var qd="recent",Oi="all",Uf="",Pf=["all","apps","games","recent"],WE=n=>({all:O("libAll"),apps:O("apps"),games:O("libGames"),recent:O("recents")})[n]||O("libAll");function na(n,e){Ml=[n,...Ml.filter(t=>t!==n)].slice(0,40),zE(),e||Qn()}function qE(){var s;!Iy().length&&((s=window.NativeXR)!=null&&s.xrLibrary)&&Oy();let e=[...Op(),...Mv.map(r=>({...r,kind:"app"})),...S.gorillaInstalled?[Of]:[]];Oi==="games"&&(e=e.filter(r=>r.kind==="xr")),Oi==="games"&&S.gorillaInstalled&&(e=[...e,Of]),Oi==="apps"&&(e=e.filter(r=>r.kind==="app")),Oi==="recent"&&(e=e.filter(r=>Ml.includes(r.id)));let t=Uf.trim().toLowerCase();if(t&&(e=e.filter(r=>(r.name+" "+(r.label||"")).toLowerCase().includes(t))),qd==="az")return[...e].sort((r,a)=>r.name.localeCompare(a.name,"pt-BR"));let i=r=>{let a=Ml.indexOf(r.id);return a<0?1e6:a};return[...e].sort((r,a)=>i(r)-i(a))}function XE(n){let e=n.imgUrl?`<img class="logo" src="${n.imgUrl}" alt="" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">`:n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${te(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug&&!n.imgUrl?`${e}<span class="nm fb">${n.label||n.name}</span>`:t,s=n.id==="gorilla-tag"||n.imgUrl?' style="width:100%;height:100%;display:block"':"";return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand"${s}>${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function $E(){var l;let n=qE(),e=se("div","lib"),t=WE(Oi),i=me.find(c=>c.id==="library"),s=Oi==="games"?O("libGamesEmpty"):Oi==="recent"?O("libRecentEmpty"):O("appNoResults"),r=(c,d,u)=>`<button class="lib-rail-btn" data-lib-nav="${c}"
    aria-label="${Re(d)}" title="${Re(d)}" aria-pressed="${Oi===c}">${te(u)}</button>`;e.innerHTML=`<aside class="lib-rail" aria-label="${Re(O("apps"))}">
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
            placeholder="${Re(O("searchApps"))}" value="${Re(Uf)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${Re(O("recents"))}">
          <span>${qd==="az"?"A\u2013Z":Re(O("recents"))}</span>${te("chevronDown")}
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
          ${n.map(c=>c.kind==="xr"?By(c):c.kind==="android"?Rp(c.app):XE(c)).join("")}
          ${n.length?"":`<div class="lib-empty">${Re(s)}</div>`}
        </div>
      </div>
    </section>`;let a=zy();a&&((l=e.querySelector(".lib-scroll"))==null||l.prepend(a));let o=e.querySelector('[data-q]:not([data-q="android"])');return o&&(o.addEventListener("input",()=>{var d;Uf=o.value,Qn(!0);let c=(d=ss("library"))==null?void 0:d.querySelector("[data-q]");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),o.addEventListener("focus",()=>li(!0,o))),e.addEventListener("click",c=>{let d=h=>c.target.closest(h),u;if(d("[data-lib-close]")){Nt(me.find(h=>h.id==="library"));return}if(u=d("[data-lib-nav]")){Oi=u.dataset.libNav,Qn();return}if(d("[data-lib-curve]")){let h=me.find(f=>f.id==="library");h&&(h.setCurve(h.curve>0?0:S.win360K),Qn());return}if(d("[data-sort]")){qd=qd==="az"?"recent":"az",Qn();return}if(d("[data-filter]")){Oi=Pf[(Pf.indexOf(Oi)+1)%Pf.length],Qn();return}if(u=d("[data-android]")){let h=u.dataset.android;_d(h),Sd(h);return}if(u=d("[data-xr]")){let h=u.dataset.xr;Ny()?Uy():Ip(h);return}if(u=d("[data-app]")){let h=[...Mv,Of].find(g=>g.id===u.dataset.app);if(!h)return;na(h.id);let f=Hf[h.id];f?f():ht(h.name+": sem endere\xE7o cadastrado");return}}),e}function Qn(n){var i,s,r;let e=ss("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild($E()),e.querySelector(".lib-scroll").scrollTop=t,(r=(s=re).invalidate)==null||r.call(s)}var Hd="Todos",If="",YE=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function jE(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function Ff(n){var d;Tp(!1);let e=((d=n.querySelector(".android-app-scroll"))==null?void 0:d.scrollTop)||0;n.innerHTML="",n.classList.add("android-launcher");let t=se("div","android-launcher-head");t.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${te("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${te("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${te("refresh")}</button></div>`,t.querySelector(".android-search input").value=If;let i=Ey(),s=se("div","android-categories"),r=YE.map(u=>`<button class="android-category" data-category="${u}" aria-pressed="${Hd===u}">${u}</button>`).join("");s.innerHTML=r;let a=se("div","android-results");a.innerHTML='<b>APPS INSTALADOS</b><span class="android-results-count"></span>';let o=se("div","android-app-scroll"),l=se("div","android-app-grid"),c=()=>{let u=If.trim().toLocaleLowerCase("pt-BR"),h=Ry().filter(g=>{let y=Hd==="Todos"||jE(g)===Hd,p=!u||`${g.label||""} ${g.pkg||""}`.toLocaleLowerCase("pt-BR").includes(u);return y&&p}),f=a.querySelector(".android-results-count");f&&(f.textContent=`${h.length} ${h.length===1?"app":"apps"}`),l.innerHTML=h.length?h.map(g=>Rp(g)).join(""):`<div class="android-empty">${O("noAndroidApps")}</div>`};c(),o.appendChild(l),n.append(t),i&&n.appendChild(i),n.append(s,a,o),o.scrollTop=e,n.oninput=u=>{u.target.matches(".android-search input")&&(If=u.target.value,c())},n.onclick=u=>{let h=u.target.closest("[data-category]");if(h){Hd=h.dataset.category,s.querySelectorAll("[data-category]").forEach(g=>g.setAttribute("aria-pressed",String(g===h))),c();return}if(u.target.closest(".android-refresh")){Tp(!0),c();return}let f=u.target.closest("[data-android]");f&&(_d(f.dataset.android),Sd(f.dataset.android))}}function Yd(){let n=ss("shizuku");if(n)return Ff(n),Kt(me.find(t=>t.id==="shizuku"));let e=se("div","android-launcher");return Ff(e),Jt({id:"shizuku",title:"Apps do Android",node:e})}function Gf(){var i,s,r,a;let n=me.find(o=>o.id==="library");if(n)return Qn(),Kt(n),(s=(i=re).render)==null||s.call(i,Ie,ye),n;let e=se("div");e.style.cssText="height:100%";let t=Jt({id:"library",title:O("apps"),node:e,w:1040,h:660,chrome:!1,resizable:!1});return Qn(),(a=(r=re).render)==null||a.call(r,Ie,ye),t}var ZE=[{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#818cf8,#6366f1)",icon:"compass"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",icon:"settings"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#1db954,#0b3b1e)",slug:"spotify"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#a855f7,#581c87)",slug:"twitch"},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#ffffff,#e2e8f0)",slug:"youtube",lightBg:!0},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b82f6,#1d4ed8)",slug:"facebook"},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",slug:"telegram"},{id:"x",name:"X",bg:"linear-gradient(145deg,#18181b,#050507)",slug:"x"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#6366f1,#4338ca)",slug:"discord"},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#22c55e,#15803d)",slug:"whatsapp"},{id:"shizuku",name:"My apps",bg:"linear-gradient(145deg,#f97316,#ea580c)",icon:"appGrid"}],KE=[{id:"gorilla-tag",name:"Gorilla Tag",bg:"#0d1b12",imgUrl:"./icons/gorilla-tag-logo.jpg",isGame:!0},{id:"roblox-vr",name:"Roblox VR",bg:"#090d16",imgUrl:"./roblox-logo.jpg",icon:"controller",isGame:!0,url:"https://www.roblox.com/"},{id:"beat-vr",name:"Beat Saber Web",bg:"#070814",imgUrl:"./beat-saber-logo.jpg",icon:"controller",isGame:!0,url:"https://moonrider.xyz/?mode=ride&vr=1"},{id:"hyper-vr",name:"Hyper Dash VR",bg:"#0a1426",imgUrl:"./hyper-dash-logo.jpg",icon:"controller",isGame:!0,url:"https://immersiveweb.dev/"},{id:"webxr-games",name:"WebXR Games",bg:"linear-gradient(145deg,#7c3aed,#4c1d95)",icon:"controller",isGame:!0,url:"https://constructarcade.com/"},{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#e50914,#7f1d1d)",slug:"netflix"},{id:"prime",name:"Prime Video",bg:"linear-gradient(145deg,#00a8e1,#0369a1)",slug:"prime"}],ki="all",Xd="recent",Bf="",Nf=!1,mv='<svg class="ui-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',JE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M5 19h14"/></svg>',QE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="4 5 20 5 14 12 14 19 10 17 10 12 4 5"/></svg>',eT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M4 12h7M4 17h4M17 7v11m0 0-3-3m3 3 3-3"/></svg>',tT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 14.5c0-3 2-5.5 4.2-5.5 1.8 0 3.3 1.8 4.8 4.2 1.5 2.4 2.6 3.3 4 3.3 1.4 0 2.5-1.2 2.5-3 0-2.5-1.6-4.5-3.6-4.5-1.5 0-2.7 1.1-4.2 3.4-1.5 2.3-2.9 4.1-4.8 4.1-1.7 0-2.9-.8-2.9-2z"/></svg>',nT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1.5"/><rect x="10" y="5" width="5" height="14" rx="1.5"/><rect x="17" y="5" width="4" height="14" rx="1.2"/></svg>';function iT(){var r;let n=ZE.map(a=>({kind:"builtin",...a})),e=KE.map(a=>({kind:"builtin",...a})),t=(((r=Op)==null?void 0:r())||[]).map(a=>({kind:"xr",pkg:a.packageName,name:a.label||a.packageName,iconUrl:a.icon||"",isGame:!0})),i;ki==="worlds"||ki==="downloads"?i=[...e.filter(a=>a.isGame),...t,...n]:ki==="apps"?i=[...n,...e.filter(a=>!a.isGame)]:i=[...n,...e,...t];let s=Bf.trim().toLowerCase();return s&&(i=i.filter(a=>a.name.toLowerCase().includes(s))),Xd==="az"&&(i=[...i].sort((a,o)=>a.name.localeCompare(o.name,"pt-BR"))),i}function sT(n){if(n.kind==="xr"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Re(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-glyph">${te("controller")}</span><span class="spatial-app-init">${Re(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-xr="${Re(n.pkg)}" data-spatial-game="1" title="${Re(n.name)}">
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
  </button>`}function rT(){let n=iT(),e=Ki(),t=Math.round(Math.max(0,Math.min(1,e.batteryLevel??.9))*100),i=e.time&&e.time!=="--:--"?e.time:"9:48",s=S.profileAvatar?`<img src="${Re(S.profileAvatar)}" alt="" class="spatial-hz-avatar-img" draggable="false" />`:te("user"),r=se("div","spatial-launcher-root");r.innerHTML=`
    <header class="spatial-hz-header">
      <h2 class="spatial-hz-title">Library</h2>
      <label class="spatial-hz-search">
        ${te("search")}
        <input type="text" class="spatial-hz-search-input" data-spatial-search placeholder="Search" value="${Re(Bf)}" aria-label="Search Library" />
      </label>
    </header>

    <div class="spatial-launcher-stage">
      <aside class="spatial-hz-rail" aria-label="Library navigation">
        <button type="button" class="spatial-hz-nav-item ${ki==="all"?"on":""}" data-spatial-nav="all">
          ${mv}<span>All</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${ki==="apps"?"on":""}" data-spatial-nav="apps">
          ${te("appGrid")}<span>Apps</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${ki==="worlds"?"on":""}" data-spatial-nav="worlds">
          ${te("location")}<span>Worlds</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${ki==="horizon"?"on":""}" data-spatial-nav="horizon">
          ${te("refresh")}<span>Horizon+</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${ki==="downloads"?"on":""}" data-spatial-nav="downloads">
          ${JE}<span>Downloads</span>
        </button>
        <div class="spatial-hz-rail-divider" aria-hidden="true"></div>
        <button type="button" class="spatial-hz-nav-item spatial-hz-nav-item--store" data-spatial-act="store">
          <span class="spatial-hz-store-badge">${te("store")}</span><span>Store</span>
        </button>
      </aside>

      <div class="spatial-honeycomb-wrap">
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--left" data-spatial-scroll="left" aria-label="Rolar para a esquerda" title="Rolar para a esquerda">\u2039</button>
        <div class="spatial-honeycomb" data-spatial-scroll-track role="list">
          ${n.map(sT).join("")}
        </div>
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--right" data-spatial-scroll="right" aria-label="Rolar para a direita" title="Rolar para a direita">\u203A</button>
      </div>

      <aside class="spatial-hz-filters" aria-label="Filters and sorting">
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="filter" title="Filter: Installed">
          ${QE}<span>Filter: Insta...</span>${te("chevronDown")}
        </button>
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="sort" title="Sort">
          ${eT}<span>Sort: ${Xd==="az"?"A\u2013Z":"Recen..."}</span>${te("chevronDown")}
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
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="recenter" title="Recentralizar">${tT}</button>
          <button type="button" class="spatial-hz-home-circle" data-spatial-nav="all" title="Library">${mv}</button>
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="close" title="Alternar para Dock">${nT}</button>
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
  `;let a=r.querySelector("[data-spatial-search]");a&&a.addEventListener("input",()=>{Bf=a.value,ta()});let o=r.querySelector('[data-spatial-builtin="browser"]'),l=r.querySelector('[data-browser-tab-menu="spatial"]'),c=null;if(o&&l){o.addEventListener("pointerdown",()=>{clearTimeout(c),c=setTimeout(()=>{var h,f,g,y,p,m;o.dataset.holdConsumed="1",l.hidden=!1,(f=(h=window.NativeXR)==null?void 0:h.click)==null||f.call(h),(y=(g=re).invalidate)==null||y.call(g),(m=(p=re).render)==null||m.call(p,Ie,ye)},2e3)});let u=()=>{clearTimeout(c),c=null};o.addEventListener("pointerup",u),o.addEventListener("pointercancel",u),o.addEventListener("pointerleave",u)}let d=r.querySelector("[data-spatial-scroll-track]");if(d){let u=0,h=0,f=!1;d.addEventListener("pointerdown",g=>{u=g.clientX,h=d.scrollLeft,f=!1}),d.addEventListener("pointermove",g=>{var p,m;if(g.buttons!==1)return;let y=g.clientX-u;Math.abs(y)>6&&(f=!0,d.scrollLeft=h-y,(m=(p=re).invalidate)==null||m.call(p))}),d.addEventListener("wheel",g=>{var y,p;Math.abs(g.deltaY)>Math.abs(g.deltaX)&&(d.scrollLeft+=g.deltaY,g.preventDefault()),(p=(y=re).invalidate)==null||p.call(y)},{passive:!1}),d.addEventListener("scroll",()=>{var g,y;return(y=(g=re).invalidate)==null?void 0:y.call(g)},{passive:!0}),d._wasDragging=()=>f}return r.addEventListener("click",u=>{var v,w,A,T,R;let h=u.target.closest("[data-spatial-scroll]");if(h&&d){u.stopPropagation();let F=h.dataset.spatialScroll==="left"?-1:1;d.scrollLeft=Math.max(0,d.scrollLeft+F*240),(w=(v=re).invalidate)==null||w.call(v),(T=(A=re).render)==null||T.call(A,Ie,ye);return}let f=u.target.closest("[data-browser-opt]");if(f){u.stopPropagation();let F=f.dataset.browserOpt||"new-tab";l&&(l.hidden=!0),_v(F);return}let g=u.target.closest("[data-spatial-xr]");if(g){let F=g.dataset.spatialXr;F&&Ip(F);return}let y=u.target.closest("[data-spatial-builtin]");if(y){if(y.dataset.holdConsumed==="1"){y.dataset.holdConsumed="0";return}l&&!l.hidden&&(l.hidden=!0);let F=y.dataset.spatialBuiltin;if(F==="shizuku"){Yd();return}if(F==="gorilla-tag"){ro();return}if(F==="beat-vr"){Jd();return}if(F==="roblox-vr"||F==="roblox"){Al();return}if(y.dataset.spatialUrl){Zd("browser",y.title||"Navegador",y.dataset.spatialUrl);return}let _=Hf[F];_&&_();return}let p=u.target.closest("[data-spatial-android]");if(p){let F=p.dataset.spatialAndroid;_d(F),Sd(F);return}let m=u.target.closest("[data-spatial-nav]");if(m){ki=m.dataset.spatialNav||"all",ta();return}let x=(R=u.target.closest("[data-spatial-act]"))==null?void 0:R.dataset.spatialAct;x==="settings"?Kd():x==="store"?Vf():x==="library"?Gf():x==="recenter"?qi():x==="sort"?(Xd=Xd==="az"?"recent":"az",ta()):x==="filter"?(ki=ki==="downloads"?"all":"downloads",ta()):x==="env"?(S.env="passthrough",Ve(S),xi(!0)):x==="close"&&qf(!1)}),r}function ta(){var a,o,l,c,d,u;let n=ss("spatial-launcher");if(!n)return;let e=n.querySelector(".spatial-honeycomb"),t=(e==null?void 0:e.scrollTop)||0,i=(e==null?void 0:e.scrollLeft)||0,s=((o=(a=n.querySelector(".finger-hover"))==null?void 0:a.dataset)==null?void 0:o.spatialBuiltin)||null;n.innerHTML="",n.appendChild(rT());let r=n.querySelector(".spatial-honeycomb");r&&(r.scrollTop=t,r.scrollLeft=i),s&&((c=(l=n.querySelector(`[data-spatial-builtin="${s}"]`))==null?void 0:l.classList)==null||c.add("finger-hover")),(u=(d=re).invalidate)==null||u.call(d)}function jd(){var e,t,i,s;if(Nf)return;let n=me.find(r=>r.id==="spatial-launcher");if(!(!S.spatialLauncher||!n)){Nf=!0;try{let r=me.filter(o=>o.id!=="spatial-launcher"&&!o.onboarding&&!o.hidden);if(r.length>1){let o=r[r.length-1];for(let l of r)l!==o&&Nt(l)}let a=r.length>0;n.hidden!==a&&(n.setHidden(a),(t=(e=re).invalidate)==null||t.call(e),(s=(i=re).render)==null||s.call(i,Ie,ye))}finally{Nf=!1}}}Ge("wins",jd);function Wf(){var i,s,r,a,o,l,c,d;S.env="passthrough",xi(!0);let n=me.find(u=>u.id==="spatial-launcher");if(n)return ta(),jd(),(s=(i=re).invalidate)==null||s.call(i),(a=(r=re).render)==null||a.call(r,Ie,ye),n;let e=se("div","spatial-launcher-host"),t=Jt({id:"spatial-launcher",title:"Spatial App",node:e,w:1040,h:660,onboarding:!0,chrome:!1,resizable:!1});return t.handle.hidden=!0,t.resizeHandle.hidden=!0,ta(),jd(),(l=(o=re).invalidate)==null||l.call(o),(d=(c=re).render)==null||d.call(c,Ie,ye),t}function qf(n){var e,t,i,s;if(S.spatialLauncher=n?1:0,S.spatialLauncher&&(S.env="passthrough",xi(!0)),Ve(S),S.spatialLauncher){for(let r of[...me])r.id!=="spatial-launcher"&&!r.onboarding&&Nt(r);Qt(!0),Xt(!1),Wf()}else{let r=me.find(a=>a.id==="spatial-launcher");r&&Nt(r),Qt(!1),!ia&&!ns&&!ks&&Xt(!0),(t=(e=re).invalidate)==null||t.call(e),(s=(i=re).render)==null||s.call(i,Ie,ye)}}Ge("spatialLauncher",n=>qf(n));Ge("device-status",n=>{let e=ss("spatial-launcher");if(!e)return;let t=e.querySelector("[data-spatial-clock]");t&&(n!=null&&n.time)&&n.time!=="--:--"&&(t.textContent=n.time);let i=e.querySelector("[data-spatial-bat]"),s=e.querySelector(".spatial-hz-bat-pill i");if(typeof(n==null?void 0:n.batteryLevel)=="number"){let r=Math.round(Math.max(0,Math.min(1,n.batteryLevel))*100);i&&(i.textContent=`${r}%`),s&&(s.style.width=`${r}%`)}});var pr=Object.freeze({compass:te("compass"),store:te("store"),people:te("people"),camera:te("camera"),gear:te("settings"),play:te("play"),shizuku:te("shizuku"),vision:te("vision")});function aT(){xi(S.env!=="passthrough")}function Av(){let n=vd("virtual-environment");if(!n)return;let e=S.env!=="passthrough";n.setAttribute("aria-pressed",String(e)),n.title=`${O("envVirtual")} \xB7 ${e?O("on"):O("off")}`}function Qd(){oy([{kind:"avatar",id:"profile",label:O("profile"),run:uT},{kind:"status",id:"status",label:O("settings"),run:FE},{kind:"tool",id:"virtual-environment",label:O("envVirtual"),svg:pr.vision,run:aT},{kind:"spacer"},{id:"browser",win:"browser",label:O("browser"),svg:pr.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>_n("browser",O("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:O("store"),svg:pr.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:Vf},{id:"discord",win:"discord",label:"Discord",svg:pr.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>_n("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:O("gallery"),svg:pr.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:zf},{id:"settings",win:"control-center",label:O("settings"),svg:pr.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:Kd},{id:"youtube",win:"youtube",label:"YouTube",svg:pr.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>_n("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:O("shizuku"),svg:pr.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:Yd},{id:"library",win:"library",launcher:!0,label:O("apps"),run:Gf}]),Av()}Ge("env",Av);Ge("lang",Qd);function oT(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=Ty(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=se("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}Cy();Vy();ky();Ge("appsState",()=>{oT(),Ev()});Ge("xr",()=>{Ev();let n=ss("settings");n!=null&&n.querySelector("[data-xr-page]")&&wv(n.querySelector("[data-xr-page]"))});var Df=0;function Ev(){Df||(Df=setTimeout(()=>{Df=0,ss("library")&&Qn(),ss("spatial-launcher")&&ta();let n=ss("shizuku");n&&Ff(n)},500))}var lT=document.getElementById("boot"),XR=document.getElementById("bootGo"),ks=null;lT.hidden=!0;function Tv(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function Rv(n,e,t=!1){let i=se("div",t?"langwin slim":"langwin"),s=a=>jc(a).label;return(()=>{let a=t?"":`<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
         <p class="lq-tag">Aponte e pin\xE7a<br>para escolher.</p>
       </div>`;i.innerHTML=`${t?`<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${s(n)}</span></div>`:""}
      <div class="lq-main">
        ${a}
        <div class="lang-options" role="list">${Ho.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${O("langSoon")}</i>`}</button>`).join("")}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${t?"Escolha o idioma.":"Aponte com a m\xE3o e fa\xE7a uma pin\xE7a."}</span>
        <button class="lq-go">${O("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>e(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function cT(){var e,t;let n=Jt({id:"language",title:"Next VR",w:390,h:500,onboarding:!0,node:Rv(S.lang||Tv(),dT)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}Ge("handframe",n=>{let e=ks==null?void 0:ks.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function dT(n){if(!ks)return;Dr(n),ks&&(Nt(ks),ks=null),Xt(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=kr(),t=S.handsOn?Xi():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>qi(),280)}var ia=null,ns=null,eu=new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1");function Cv(){var e;if(S.gorillaInstalled=1,Ve(S),na("gorilla-tag",!0),Qn(),is(),eu&&fe&&typeof((e=window.NativeXR)==null?void 0:e.startVrSession)=="function"){S.autoLaunchGorilla=1,Ve(S),El();return}El(),ro()}Ge("gorilla-installed",()=>{S.gorillaInstalled=1,Ve(S),na("gorilla-tag",!0),Qn(),is()});function Lv(){ns&&ns.remove();let n=document.createElement("div");return n.id="entry-fullscreen",n.appendChild(Gp({fullscreen:!0,onStart:El,onLaunchGorilla:Cv,getStatus:Ki})),document.body.appendChild(n),ns=n,n}function Pv(){return Jt({id:"entry-menu",title:"NextVR",w:840,h:525,chrome:!1,resizable:!1,onboarding:!0,node:Gp({fullscreen:!1,onStart:El,onLaunchGorilla:Cv,getStatus:Ki})})}async function El(n=!1){var r,a,o,l,c,d,u,h,f,g,y,p,m;let e=n===!0;S.lang||Dr(Tv()||"pt");let t=!e&&eu&&fe&&typeof((r=window.NativeXR)==null?void 0:r.startVrSession)=="function";if(ns&&!t&&(ns.remove(),ns=null),ia?(Nt(ia),ia=null):Nt("entry-menu"),S.spatialLauncher?(Qt(!0),Xt(!1),Wf()):(Nt("spatial-launcher"),Qt(!1),Xt(!0)),document.getElementById("stat").hidden=!1,fe||(document.getElementById("perm").hidden=!1),(o=(a=window.NativeXR)==null?void 0:a.handVisuals)==null||o.call(a,!!S.handDraw),(c=(l=window.NativeXR)==null?void 0:l.wideCamera)==null||c.call(l,!!S.wideCamera),e||(u=(d=window.NativeXR)==null?void 0:d.startVrSession)==null||u.call(d,JSON.stringify(S)),(f=(h=re).invalidate)==null||f.call(h),(y=(g=re).render)==null||y.call(g,Ie,ye),t){(m=(p=ns==null?void 0:ns.querySelector(".entry-menu-root"))==null?void 0:p.resetToHome)==null||m.call(p);return}let i=kr(),s=S.handsOn?Xi():Promise.resolve(!1);await Promise.allSettled([i,s]),fe||setTimeout(()=>qi(),280)}function uT(){var n;return fe&&((n=window.NativeXR)!=null&&n.openEntryMenu)?(window.NativeXR.openEntryMenu(),null):(Xt(!1),document.getElementById("stat").hidden=!0,eu||!fe?Lv():(ia=Pv(),ia))}var gv=!1;window.nextvrEnterWorkspace=n=>{var e,t,i,s,r,a,o,l,c,d;if(n)try{let u=typeof n=="string"?JSON.parse(n):n;u.handDraw!==void 0&&(S.handDraw=u.handDraw?1:0),u.showFps!==void 0&&(S.showFps=u.showFps?1:0),u.mediaVolume!==void 0&&(S.mediaVolume=u.mediaVolume),u.brightness!==void 0&&(S.brightness=u.brightness),u.quality!==void 0&&(S.quality=u.quality,Se("quality")),u.wideCamera!==void 0&&(S.wideCamera=u.wideCamera?1:0),u.spatialLauncher!==void 0&&(S.spatialLauncher=u.spatialLauncher?1:0),u.dockSnapSlot!==void 0&&(S.dockSnapSlot=u.dockSnapSlot?1:0),u.fingerTouch!==void 0&&(S.fingerTouch=u.fingerTouch?1:0),u.sixdof!==void 0&&(S.sixdof=u.sixdof?1:0,S.sixdof||Wt.reset(),(t=(e=window.NativeXR)==null?void 0:e.setSixDofEnabled)==null||t.call(e,S.sixdof!==0)),u.gorillaInstalled!==void 0&&(S.gorillaInstalled=u.gorillaInstalled?1:0,S.gorillaInstalled&&(na("gorilla-tag",!0),Qn(),is())),u.profileName!==void 0&&(S.profileName=u.profileName),u.profileAvatar!==void 0&&(S.profileAvatar=u.profileAvatar),u.lang&&Dr(u.lang),!S.spatialLauncher&&u.entryEnvChosen&&u.env&&u.env!=="passthrough"?Wi(u.env):(S.env="passthrough",xi(!0));let h=!!u.autoLaunchGorilla;S.autoLaunchGorilla&&(S.autoLaunchGorilla=0),Ve(S),Qd(),(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!!S.handDraw),(a=(r=window.NativeXR)==null?void 0:r.wideCamera)==null||a.call(r,!!S.wideCamera),(l=(o=window.NativeXR)==null?void 0:o.setFingerTouch)==null||l.call(o,S.fingerTouch!==0),h&&setTimeout(()=>ro(),120)}catch{}else fe&&(xi(!0),(d=(c=window.NativeXR)==null?void 0:c.setFingerTouch)==null||d.call(c,S.fingerTouch!==0));El(!0),gv||(gv=!0,setTimeout(()=>qi(),220))};Ge("profile-updated",()=>Qd());document.getElementById("btnGyro").onclick=()=>kr();document.getElementById("btnHand").onclick=()=>Vh()?Gh():Xi();Ge("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});Ge("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Qd();var yv=new URLSearchParams(location.search).get("onboarding")||(location.hash.includes("onboarding=language")?"language":location.hash.includes("onboarding=skip")?"skip":""),Vd,vv,Gd,xv,Wd,bv;eu?(Xt(!1),document.getElementById("stat").hidden=!0,(vv=(Vd=window.NativeXR)==null?void 0:Vd.handVisuals)==null||vv.call(Vd,!!S.handDraw),Lv()):yv==="language"?(Xt(!1),document.getElementById("stat").hidden=!0,ks=cT()):yv==="skip"?(S.spatialLauncher?(Qt(!0),Xt(!1),Wf()):(Qt(!1),Xt(!0)),fe&&((xv=(Gd=window.NativeXR)==null?void 0:Gd.wideCamera)==null||xv.call(Gd,!!S.wideCamera),kr(),S.handsOn&&Xi()),document.getElementById("perm").hidden=!1,setTimeout(()=>qi(),280)):(Xt(!1),document.getElementById("stat").hidden=!0,fe&&((bv=(Wd=window.NativeXR)==null?void 0:Wd.handVisuals)==null||bv.call(Wd,!!S.handDraw),kr(),S.handsOn&&Xi()),ia=Pv());fe&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=re).invalidate)==null||e.call(n),kr(),S.handsOn&&Xi()},window.nextvrSuspend=()=>{Gh()},Ge("hands",()=>{document.getElementById("perm").hidden=!0}));Ge("game:settings",()=>Kd());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

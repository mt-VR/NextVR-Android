(()=>{var $d=0,Tc=1,Zd=2;var Zh=1,Jd=2,$n=3,bi=0,en=1,Zn=2;var xi=0,Rs=1,Ac=2,Rc=3,Cc=4,Kd=5,Bi=100,jd=101,Qd=102,Pc=103,Lc=104,tf=200,ef=201,nf=202,sf=203,qo=204,Yo=205,rf=206,af=207,of=208,lf=209,cf=210,hf=211,uf=212,df=213,ff=214,pf=0,mf=1,gf=2,ca=3,_f=4,xf=5,vf=6,yf=7,Jh=0,bf=1,Mf=2,vi=0,Sf=1,wf=2,Ef=3,Tf=4,Af=5,Rf=6;var Kh=300,Ls=301,Is=302,$o=303,Zo=304,Pa=306,Jo=1e3,Tn=1001,Ko=1002,Ye=1003,Ic=1004;var _o=1005;var mn=1006,Cf=1007;var cr=1008;var yi=1009,Pf=1010,Lf=1011,Al=1012,jh=1013,mi=1014,gi=1015,hr=1016,Qh=1017,tu=1018,ki=1020,If=1021,An=1023,Df=1024,Nf=1025,Hi=1026,Ds=1027,Uf=1028,eu=1029,Of=1030,nu=1031,iu=1033,xo=33776,vo=33777,yo=33778,bo=33779,Dc=35840,Nc=35841,Uc=35842,Oc=35843,su=36196,Fc=37492,Bc=37496,zc=37808,kc=37809,Hc=37810,Vc=37811,Gc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,$c=37817,Zc=37818,Jc=37819,Kc=37820,jc=37821,Mo=36492,Qc=36494,th=36495,Ff=36283,eh=36284,nh=36285,ih=36286;var ha=2300,ua=2301,So=2302,sh=2400,rh=2401,ah=2402;var ru=3e3,Vi=3001,Bf=3200,zf=3201,kf=0,Hf=1,gn="",Ie="srgb",jn="srgb-linear",Rl="display-p3",La="display-p3-linear",da="linear",le="srgb",fa="rec709",pa="p3";var ls=7680;var oh=519,Vf=512,Gf=513,Wf=514,au=515,Xf=516,qf=517,Yf=518,$f=519,lh=35044;var ch="300 es",jo=1035,Jn=2e3,ma=2001,Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,rr=Math.PI/180,ur=180/Math.PI;function Fs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function $e(n,t,e){return Math.max(t,Math.min(e,n))}function Cl(n,t){return(n%t+t)%t}function Zf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Jf(n,t,e){return n!==t?(e-n)/(t-n):0}function ar(n,t,e){return(1-e)*n+e*t}function Kf(n,t,e,i){return ar(n,t,1-Math.exp(-e*i))}function jf(n,t=1){return t-Math.abs(Cl(n,t*2)-t)}function Qf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function tp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ep(n,t){return n+Math.floor(Math.random()*(t-n+1))}function np(n,t){return n+Math.random()*(t-n)}function ip(n){return n*(.5-Math.random())}function sp(n){n!==void 0&&(hh=n);let t=hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rp(n){return n*rr}function ap(n){return n*ur}function Qo(n){return(n&n-1)===0&&n!==0}function op(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ga(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),m=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ou={DEG2RAD:rr,RAD2DEG:ur,generateUUID:Fs,clamp:$e,euclideanModulo:Cl,mapLinear:Zf,inverseLerp:Jf,lerp:ar,damp:Kf,pingpong:jf,smoothstep:Qf,smootherstep:tp,randInt:ep,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:ap,isPowerOfTwo:Qo,ceilPowerOfTwo:op,floorPowerOfTwo:ga,setQuaternionFromProperEuler:lp,normalize:Xe,denormalize:ws},Yt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],_=i[8],g=s[0],d=s[3],p=s[6],S=s[1],v=s[4],R=s[7],E=s[2],T=s[5],A=s[8];return r[0]=o*g+a*S+l*E,r[3]=o*d+a*v+l*T,r[6]=o*p+a*R+l*A,r[1]=c*g+h*S+u*E,r[4]=c*d+h*v+u*T,r[7]=c*p+h*R+u*A,r[2]=f*g+m*S+_*E,r[5]=f*d+m*v+_*T,r[8]=f*p+m*R+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=e*u+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(s*c-h*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=m*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wo=new Vt;function lu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cp(){let n=_a("canvas");return n.style.display="block",n}var uh={};function or(n){n in uh||(uh[n]=!0,console.warn(n))}var dh=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fh=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[jn]:{transfer:da,primaries:fa,toReference:n=>n,fromReference:n=>n},[Ie]:{transfer:le,primaries:fa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[La]:{transfer:da,primaries:pa,toReference:n=>n.applyMatrix3(fh),fromReference:n=>n.applyMatrix3(dh)},[Rl]:{transfer:le,primaries:pa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(fh),fromReference:n=>n.applyMatrix3(dh).convertLinearToSRGB()}},hp=new Set([jn,La]),ee={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=kr[t].toReference,s=kr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return kr[n].primaries},getTransfer:function(n){return n===gn?da:kr[n].transfer}};function Cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var cs,xa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=_a("canvas")),cs.width=t.width,cs.height=t.height;let i=cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_a("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Cs(e[i]/255)*255):e[i]=Cs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},up=0,va=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Fs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(To(s[o].image)):r.push(To(s[o]))}else r=To(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function To(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dp=0,Rn=class n extends Mi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Tn,s=Tn,r=mn,o=cr,a=An,l=yi,c=n.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Fs(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vi?Ie:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jo:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jo:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?Vi:ru}set encoding(t){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Vi?Ie:gn}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Kh;Rn.DEFAULT_ANISOTROPY=1;var De=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],g=l[2],d=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,R=(m+1)/2,E=(p+1)/2,T=(h+f)/4,A=(u+g)/4,G=(_+d)/4;return v>R&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=A/i):R>E?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=T/s,r=G/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=G/r),this.set(i,s,r,e),this}let S=Math.sqrt((d-_)*(d-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(d-_)/S,this.y=(u-g)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Mi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vi?Ie:gn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends tl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ya=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var el=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ke=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==m||h!==_){let d=1-a,p=l*f+c*m+h*_+u*g,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),T=Math.atan2(E,p*S);d=Math.sin(d*T)/E,a=Math.sin(a*T)/E}let R=a*S;if(l=l*d+f*R,c=c*d+m*R,h=h*d+_*R,u=u*d+g*R,d===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*m-c*f,t[e+1]=l*_+h*f+c*u-a*m,t[e+2]=c*_+h*m+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new L,ph=new Ke,Gi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Vr.subVectors(this.max,er),hs.subVectors(t.a,er),us.subVectors(t.b,er),ds.subVectors(t.c,er),hi.subVectors(us,hs),ui.subVectors(ds,us),Di.subVectors(hs,ds);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Di.z,Di.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Di.z,0,-Di.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Di.y,Di.x,0];return!Ro(e,hs,us,ds,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,hs,us,ds,Vr))?!1:(Gr.crossVectors(hi,ui),e=[Gr.x,Gr.y,Gr.z],Ro(e,hs,us,ds,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,Hr=new Gi,hs=new L,us=new L,ds=new L,hi=new L,ui=new L,Di=new L,er=new L,Vr=new L,Gr=new L,Ni=new L;function Ro(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=i.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fp=new Gi,nr=new L,Co=new L,dr=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):fp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Co)),this.expandByPoint(nr.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new L,Po=new L,Wr=new L,di=new L,Lo=new L,Xr=new L,Io=new L,ba=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Po.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Po);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=di.dot(this.direction),l=-di.dot(Wr),c=di.lengthSq(),h=Math.abs(1-o*o),u,f,m,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Po).addScaledVector(Wr,f),m}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,i,s,r){Lo.subVectors(e,t),Xr.subVectors(i,t),Io.crossVectors(Lo,Xr);let o=this.direction.dot(Io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);let l=a*this.direction.dot(Xr.crossVectors(di,Xr));if(l<0)return null;let c=a*this.direction.dot(Lo.cross(di));if(c<0||l+c>o)return null;let h=-a*di.dot(Io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,m,_,g,d){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,m,_,g,d)}set(t,e,i,s,r,o,a,l,c,h,u,f,m,_,g,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=_,p[11]=g,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pp,t,mp)}lookAt(t,e,i){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),fi.crossVectors(i,on),fi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),fi.crossVectors(i,on)),fi.normalize(),qr.crossVectors(on,fi),s[0]=fi.x,s[4]=qr.x,s[8]=on.x,s[1]=fi.y,s[5]=qr.y,s[9]=on.y,s[2]=fi.z,s[6]=qr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],_=i[2],g=i[6],d=i[10],p=i[14],S=i[3],v=i[7],R=i[11],E=i[15],T=s[0],A=s[4],G=s[8],b=s[12],w=s[1],O=s[5],q=s[9],tt=s[13],P=s[2],D=s[6],H=s[10],X=s[14],W=s[3],V=s[7],J=s[11],Q=s[15];return r[0]=o*T+a*w+l*P+c*W,r[4]=o*A+a*O+l*D+c*V,r[8]=o*G+a*q+l*H+c*J,r[12]=o*b+a*tt+l*X+c*Q,r[1]=h*T+u*w+f*P+m*W,r[5]=h*A+u*O+f*D+m*V,r[9]=h*G+u*q+f*H+m*J,r[13]=h*b+u*tt+f*X+m*Q,r[2]=_*T+g*w+d*P+p*W,r[6]=_*A+g*O+d*D+p*V,r[10]=_*G+g*q+d*H+p*J,r[14]=_*b+g*tt+d*X+p*Q,r[3]=S*T+v*w+R*P+E*W,r[7]=S*A+v*O+R*D+E*V,r[11]=S*G+v*q+R*H+E*J,r[15]=S*b+v*tt+R*X+E*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],_=t[3],g=t[7],d=t[11],p=t[15];return _*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*m-i*l*m)+g*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+d*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],_=t[12],g=t[13],d=t[14],p=t[15],S=u*d*c-g*f*c+g*l*m-a*d*m-u*l*p+a*f*p,v=_*f*c-h*d*c-_*l*m+o*d*m+h*l*p-o*f*p,R=h*g*c-_*u*c+_*a*m-o*g*m-h*a*p+o*u*p,E=_*u*l-h*g*l-_*a*f+o*g*f+h*a*d-o*u*d,T=e*S+i*v+s*R+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=S*A,t[1]=(g*f*r-u*d*r-g*s*m+i*d*m+u*s*p-i*f*p)*A,t[2]=(a*d*r-g*l*r+g*s*c-i*d*c-a*s*p+i*l*p)*A,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*m-i*l*m)*A,t[4]=v*A,t[5]=(h*d*r-_*f*r+_*s*m-e*d*m-h*s*p+e*f*p)*A,t[6]=(_*l*r-o*d*r-_*s*c+e*d*c+o*s*p-e*l*p)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*A,t[8]=R*A,t[9]=(_*u*r-h*g*r-_*i*m+e*g*m+h*i*p-e*u*p)*A,t[10]=(o*g*r-_*a*r+_*i*c-e*g*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*A,t[12]=E*A,t[13]=(h*g*s-_*u*s+_*i*f-e*g*f-h*i*d+e*u*d)*A,t[14]=(_*a*s-o*g*s-_*i*l+e*g*l+o*i*d-e*a*d)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,_=r*u,g=o*h,d=o*u,p=a*u,S=l*c,v=l*h,R=l*u,E=i.x,T=i.y,A=i.z;return s[0]=(1-(g+p))*E,s[1]=(m+R)*E,s[2]=(_-v)*E,s[3]=0,s[4]=(m-R)*T,s[5]=(1-(f+p))*T,s[6]=(d+S)*T,s[7]=0,s[8]=(_+v)*A,s[9]=(d-S)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=fs.set(s[0],s[1],s[2]).length(),o=fs.set(s[4],s[5],s[6]).length(),a=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);let c=1/r,h=1/o,u=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,_;if(a===Jn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ma)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Jn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,m=(i+s)*h,_,g;if(a===Jn)_=(o+r)*u,g=-2*u;else if(a===ma)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},fs=new L,wn=new ie,pp=new L(0,0,0),mp=new L(1,1,1),fi=new L,qr=new L,on=new L,mh=new ie,gh=new Ke,ti=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gh.setFromEuler(this),this.setFromQuaternion(gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gp=0,_h=new L,ps=new Ke,Xn=new ie,Yr=new L,ir=new L,_p=new L,xp=new Ke,xh=new L(1,0,0),vh=new L(0,1,0),yh=new L(0,0,1),vp={type:"added"},yp={type:"removed"},hn=class n extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new ti,i=new Ke,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Vt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return _h.copy(t).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yr.copy(t):Yr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(ir,Yr,this.up):Xn.lookAt(Yr,ir,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Xn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};hn.DEFAULT_UP=new L(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new L,qn=new L,Do=new L,Yn=new L,ms=new L,gs=new L,bh=new L,No=new L,Uo=new L,Oo=new L,$r=!1,Es=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){En.subVectors(s,e),qn.subVectors(i,e),Do.subVectors(t,e);let o=En.dot(En),a=En.dot(qn),l=En.dot(Do),c=qn.dot(qn),h=qn.dot(Do),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(t,e,i,s,r,o,a,l){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static isFrontFacing(t,e,i,s){return En.subVectors(i,e),qn.subVectors(t,e),En.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ms.subVectors(s,i),gs.subVectors(r,i),No.subVectors(t,i);let l=ms.dot(No),c=gs.dot(No);if(l<=0&&c<=0)return e.copy(i);Uo.subVectors(t,s);let h=ms.dot(Uo),u=gs.dot(Uo);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ms,o);Oo.subVectors(t,r);let m=ms.dot(Oo),_=gs.dot(Oo);if(_>=0&&m<=_)return e.copy(r);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(gs,a);let d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return bh.subVectors(r,s),a=(u-h)/(u-h+(m-_)),e.copy(s).addScaledVector(bh,a);let p=1/(d+g+f);return o=g*p,a=f*p,e.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Fo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var $t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=Cl(t,1),e=$e(e,0,1),i=$e(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Fo(o,r,t+1/3),this.g=Fo(o,r,t),this.b=Fo(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=cu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ee.fromWorkingColorSpace(Fe.copy(this),t),Math.round($e(Fe.r*255,0,255))*65536+Math.round($e(Fe.g*255,0,255))*256+Math.round($e(Fe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Fe.copy(this),e);let i=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ie){ee.fromWorkingColorSpace(Fe.copy(this),t);let e=Fe.r,i=Fe.g,s=Fe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Zr);let i=ar(pi.h,Zr.h,e),s=ar(pi.s,Zr.s,e),r=ar(pi.l,Zr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new $t;$t.NAMES=cu;var bp=0,Ns=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=Rs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qo&&(i.blendSrc=this.blendSrc),this.blendDst!==Yo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ei=class extends Ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new L,Jr=new Yt,_n=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ws(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lh&&(t.usage=this.usage),t}};var Ma=class extends _n{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Sa=class extends _n{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Kn=class extends _n{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Mp=0,pn=new ie,Bo=new hn,_s=new L,ln=new Gi,sr=new Gi,Ce=new L,Wi=class n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lu(t)?Sa:Ma)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,i){return pn.makeTranslation(t,e,i),this.applyMatrix4(pn),this}scale(t,e,i){return pn.makeScale(t,e,i),this.applyMatrix4(pn),this}lookAt(t){return Bo.lookAt(t),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(ln.min,sr.min),ln.expandByPoint(Ce),Ce.addVectors(ln.max,sr.max),ln.expandByPoint(Ce)):(ln.expandByPoint(sr.min),ln.expandByPoint(sr.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(t,c),Ce.add(_s)),s=Math.max(s,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new L,h[w]=new L;let u=new L,f=new L,m=new L,_=new Yt,g=new Yt,d=new Yt,p=new L,S=new L;function v(w,O,q){u.fromArray(s,w*3),f.fromArray(s,O*3),m.fromArray(s,q*3),_.fromArray(o,w*2),g.fromArray(o,O*2),d.fromArray(o,q*2),f.sub(u),m.sub(u),g.sub(_),d.sub(_);let tt=1/(g.x*d.y-d.x*g.y);isFinite(tt)&&(p.copy(f).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(tt),S.copy(m).multiplyScalar(g.x).addScaledVector(f,-d.x).multiplyScalar(tt),c[w].add(p),c[O].add(p),c[q].add(p),h[w].add(S),h[O].add(S),h[q].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let w=0,O=R.length;w<O;++w){let q=R[w],tt=q.start,P=q.count;for(let D=tt,H=tt+P;D<H;D+=3)v(i[D+0],i[D+1],i[D+2])}let E=new L,T=new L,A=new L,G=new L;function b(w){A.fromArray(r,w*3),G.copy(A);let O=c[w];E.copy(O),E.sub(A.multiplyScalar(A.dot(O))).normalize(),T.crossVectors(G,O);let tt=T.dot(h[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=tt}for(let w=0,O=R.length;w<O;++w){let q=R[w],tt=q.start,P=q.count;for(let D=tt,H=tt+P;D<H;D+=3)b(i[D+0]),b(i[D+1]),b(i[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),g=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[m++]}return new _n(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mh=new ie,Ui=new ba,Kr=new dr,Sh=new L,xs=new L,vs=new L,ys=new L,zo=new L,jr=new L,Qr=new Yt,ta=new Yt,ea=new Yt,wh=new L,Eh=new L,Th=new L,na=new L,ia=new L,Je=class extends hn{constructor(t=new Wi,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(zo.fromBufferAttribute(u,t),o?jr.addScaledVector(zo,h):jr.addScaledVector(zo.sub(e),h))}e.add(jr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(Kr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Kr,Sh)===null||Ui.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(Mh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Mh),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let d=f[_],p=o[d.materialIndex],S=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let R=S,E=v;R<E;R+=3){let T=a.getX(R),A=a.getX(R+1),G=a.getX(R+2);s=sa(this,p,t,i,c,h,u,T,A,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let d=_,p=g;d<p;d+=3){let S=a.getX(d),v=a.getX(d+1),R=a.getX(d+2);s=sa(this,o,t,i,c,h,u,S,v,R),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let d=f[_],p=o[d.materialIndex],S=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let R=S,E=v;R<E;R+=3){let T=R,A=R+1,G=R+2;s=sa(this,p,t,i,c,h,u,T,A,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=_,p=g;d<p;d+=3){let S=d,v=d+1,R=d+2;s=sa(this,o,t,i,c,h,u,S,v,R),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Sp(n,t,e,i,s,r,o,a){let l;if(t.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===bi,a),l===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ia);return c<e.near||c>e.far?null:{distance:c,point:ia.clone(),object:n}}function sa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,xs),n.getVertexPosition(l,vs),n.getVertexPosition(c,ys);let h=Sp(n,t,e,i,xs,vs,ys,na);if(h){s&&(Qr.fromBufferAttribute(s,a),ta.fromBufferAttribute(s,l),ea.fromBufferAttribute(s,c),h.uv=Es.getInterpolation(na,xs,vs,ys,Qr,ta,ea,new Yt)),r&&(Qr.fromBufferAttribute(r,a),ta.fromBufferAttribute(r,l),ea.fromBufferAttribute(r,c),h.uv1=Es.getInterpolation(na,xs,vs,ys,Qr,ta,ea,new Yt),h.uv2=h.uv1),o&&(wh.fromBufferAttribute(o,a),Eh.fromBufferAttribute(o,l),Th.fromBufferAttribute(o,c),h.normal=Es.getInterpolation(na,xs,vs,ys,wh,Eh,Th,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Es.getNormal(xs,vs,ys,u.normal),h.face=u}return h}var pr=class n extends Wi{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,m=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(h,3)),this.setAttribute("uv",new Kn(u,2));function _(g,d,p,S,v,R,E,T,A,G,b){let w=R/A,O=E/G,q=R/2,tt=E/2,P=T/2,D=A+1,H=G+1,X=0,W=0,V=new L;for(let J=0;J<H;J++){let Q=J*O-tt;for(let ht=0;ht<D;ht++){let k=ht*w-q;V[g]=k*S,V[d]=Q*v,V[p]=P,c.push(V.x,V.y,V.z),V[g]=0,V[d]=0,V[p]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(ht/A),u.push(1-J/G),X+=1}}for(let J=0;J<G;J++)for(let Q=0;Q<A;Q++){let ht=f+Q+D*J,k=f+Q+D*(J+1),Y=f+(Q+1)+D*(J+1),lt=f+(Q+1)+D*J;l.push(ht,k,lt),l.push(k,Y,lt),W+=6}a.addGroup(m,W,b),m+=W,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Us(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function qe(n){let t={};for(let e=0;e<n.length;e++){let i=Us(n[e]);for(let s in i)t[s]=i[s]}return t}function wp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hu(n){return n.getRenderTarget()===null?n.outputColorSpace:ee.workingColorSpace}var Ep={clone:Us,merge:qe},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends Ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},wa=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ze=class extends wa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bs=-90,Ms=1,nl=class extends hn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(bs,Ms,t,e);s.layers=this.layers,this.add(s);let r=new Ze(bs,Ms,t,e);r.layers=this.layers,this.add(r);let o=new Ze(bs,Ms,t,e);o.layers=this.layers,this.add(o);let a=new Ze(bs,Ms,t,e);a.layers=this.layers,this.add(a);let l=new Ze(bs,Ms,t,e);l.layers=this.layers,this.add(l);let c=new Ze(bs,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ea=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},il=class extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Vi?Ie:gn),this.texture=new Ea(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pr(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:xi});r.uniforms.tEquirect.value=e;let o=new Je(s,r),a=e.minFilter;return e.minFilter===cr&&(e.minFilter=mn),new nl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},ko=new L,Rp=new L,Cp=new Vt,cn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ko.subVectors(i,e).cross(Rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ko),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Cp.getNormalMatrix(t),s=this.coplanarPoint(ko).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new dr,ra=new L,Ta=class{constructor(t=new cn,e=new cn,i=new cn,s=new cn,r=new cn,o=new cn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Jn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],_=s[9],g=s[10],d=s[11],p=s[12],S=s[13],v=s[14],R=s[15];if(i[0].setComponents(l-r,f-c,d-m,R-p).normalize(),i[1].setComponents(l+r,f+c,d+m,R+p).normalize(),i[2].setComponents(l+o,f+h,d+_,R+S).normalize(),i[3].setComponents(l-o,f-h,d-_,R-S).normalize(),i[4].setComponents(l-a,f-u,d-g,R-v).normalize(),e===Jn)i[5].setComponents(l+a,f+u,d+g,R+v).normalize();else if(e===ma)i[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Pp(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,_=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&_.length===0&&n.bufferSubData(u,0,f),_.length!==0){for(let g=0,d=_.length;g<d;g++){let p=_[g];e?n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var xn=class n extends Wi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,m=[],_=[],g=[],d=[];for(let p=0;p<h;p++){let S=p*f-o;for(let v=0;v<c;v++){let R=v*u-r;_.push(R,-S,0),g.push(0,0,1),d.push(v/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let v=S+c*p,R=S+c*(p+1),E=S+1+c*(p+1),T=S+1+c*p;m.push(v,R,T),m.push(R,E,T)}this.setIndex(m),this.setAttribute("position",new Kn(_,3)),this.setAttribute("normal",new Kn(g,3)),this.setAttribute("uv",new Kn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tm=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`
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
}`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
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
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,Pm=`struct PhysicalMaterial {
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
}`,Lm=`
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
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
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,zg=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,Kg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,Qg=`#define PHONG
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
}`,t0=`#define STANDARD
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
}`,e0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Lp,alphahash_pars_fragment:Ip,alphamap_fragment:Dp,alphamap_pars_fragment:Np,alphatest_fragment:Up,alphatest_pars_fragment:Op,aomap_fragment:Fp,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:kp,begin_vertex:Hp,beginnormal_vertex:Vp,bsdfs:Gp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Zp,color_fragment:Jp,color_pars_fragment:Kp,color_pars_vertex:jp,color_vertex:Qp,common:tm,cube_uv_reflection_fragment:em,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:rm,emissivemap_pars_fragment:am,colorspace_fragment:om,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:dm,envmap_physical_pars_fragment:wm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:_m,gradientmap_pars_fragment:xm,lightmap_fragment:vm,lightmap_pars_fragment:ym,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Mm,lights_pars_begin:Sm,lights_toon_fragment:Em,lights_toon_pars_fragment:Tm,lights_phong_fragment:Am,lights_phong_pars_fragment:Rm,lights_physical_fragment:Cm,lights_physical_pars_fragment:Pm,lights_fragment_begin:Lm,lights_fragment_maps:Im,lights_fragment_end:Dm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Fm,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:km,map_particle_pars_fragment:Hm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Gm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:$m,normal_fragment_maps:Zm,normal_pars_fragment:Jm,normal_pars_vertex:Km,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:ag,project_vertex:og,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:xg,skinnormal_vertex:vg,specularmap_fragment:yg,specularmap_pars_fragment:bg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Sg,transmission_fragment:wg,transmission_pars_fragment:Eg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Pg,background_frag:Lg,backgroundCube_vert:Ig,backgroundCube_frag:Dg,cube_vert:Ng,cube_frag:Ug,depth_vert:Og,depth_frag:Fg,distanceRGBA_vert:Bg,distanceRGBA_frag:zg,equirect_vert:kg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:$g,meshmatcap_frag:Zg,meshnormal_vert:Jg,meshnormal_frag:Kg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:t0,meshphysical_frag:e0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},nt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Dn={basic:{uniforms:qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:qe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:qe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:qe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:qe([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:qe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:qe([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:qe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:qe([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:qe([nt.common,nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:qe([nt.lights,nt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Dn.physical={uniforms:qe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var aa={r:0,b:0,g:0};function h0(n,t,e,i,s,r,o){let a=new $t(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(d,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),S=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Pa)?(h===void 0&&(h=new Je(new pr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Us(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ee.getTransfer(v.colorSpace)!==le,(u!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Je(new xn(2,2),new ni({name:"BackgroundMaterial",uniforms:Us(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,p){d.getRGB(aa,hu(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(a,l)},render:_}}function u0(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null),c=l,h=!1;function u(P,D,H,X,W){let V=!1;if(o){let J=g(X,H,D);c!==J&&(c=J,m(c.object)),V=p(P,X,H,W),V&&S(P,X,H,W)}else{let J=D.wireframe===!0;(c.geometry!==X.id||c.program!==H.id||c.wireframe!==J)&&(c.geometry=X.id,c.program=H.id,c.wireframe=J,V=!0)}W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,G(P,D,H,X),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,D,H){let X=H.wireframe===!0,W=a[P.id];W===void 0&&(W={},a[P.id]=W);let V=W[D.id];V===void 0&&(V={},W[D.id]=V);let J=V[X];return J===void 0&&(J=d(f()),V[X]=J),J}function d(P){let D=[],H=[],X=[];for(let W=0;W<s;W++)D[W]=0,H[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,D,H,X){let W=c.attributes,V=D.attributes,J=0,Q=H.getAttributes();for(let ht in Q)if(Q[ht].location>=0){let Y=W[ht],lt=V[ht];if(lt===void 0&&(ht==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),ht==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),Y===void 0||Y.attribute!==lt||lt&&Y.data!==lt.data)return!0;J++}return c.attributesNum!==J||c.index!==X}function S(P,D,H,X){let W={},V=D.attributes,J=0,Q=H.getAttributes();for(let ht in Q)if(Q[ht].location>=0){let Y=V[ht];Y===void 0&&(ht==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ht==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let lt={};lt.attribute=Y,Y&&Y.data&&(lt.data=Y.data),W[ht]=lt,J++}c.attributes=W,c.attributesNum=J,c.index=X}function v(){let P=c.newAttributes;for(let D=0,H=P.length;D<H;D++)P[D]=0}function R(P){E(P,0)}function E(P,D){let H=c.newAttributes,X=c.enabledAttributes,W=c.attributeDivisors;H[P]=1,X[P]===0&&(n.enableVertexAttribArray(P),X[P]=1),W[P]!==D&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),W[P]=D)}function T(){let P=c.newAttributes,D=c.enabledAttributes;for(let H=0,X=D.length;H<X;H++)D[H]!==P[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function A(P,D,H,X,W,V,J){J===!0?n.vertexAttribIPointer(P,D,H,W,V):n.vertexAttribPointer(P,D,H,X,W,V)}function G(P,D,H,X){if(i.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let W=X.attributes,V=H.getAttributes(),J=D.defaultAttributeValues;for(let Q in V){let ht=V[Q];if(ht.location>=0){let k=W[Q];if(k===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let Y=k.normalized,lt=k.itemSize,xt=e.get(k);if(xt===void 0)continue;let _t=xt.buffer,Lt=xt.type,Dt=xt.bytesPerElement,wt=i.isWebGL2===!0&&(Lt===n.INT||Lt===n.UNSIGNED_INT||k.gpuType===jh);if(k.isInterleavedBufferAttribute){let Wt=k.data,N=Wt.stride,Ve=k.offset;if(Wt.isInstancedInterleavedBuffer){for(let yt=0;yt<ht.locationSize;yt++)E(ht.location+yt,Wt.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let yt=0;yt<ht.locationSize;yt++)R(ht.location+yt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let yt=0;yt<ht.locationSize;yt++)A(ht.location+yt,lt/ht.locationSize,Lt,Y,N*Dt,(Ve+lt/ht.locationSize*yt)*Dt,wt)}else{if(k.isInstancedBufferAttribute){for(let Wt=0;Wt<ht.locationSize;Wt++)E(ht.location+Wt,k.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Wt=0;Wt<ht.locationSize;Wt++)R(ht.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Wt=0;Wt<ht.locationSize;Wt++)A(ht.location+Wt,lt/ht.locationSize,Lt,Y,lt*Dt,lt/ht.locationSize*Wt*Dt,wt)}}else if(J!==void 0){let Y=J[Q];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(ht.location,Y);break;case 3:n.vertexAttrib3fv(ht.location,Y);break;case 4:n.vertexAttrib4fv(ht.location,Y);break;default:n.vertexAttrib1fv(ht.location,Y)}}}}T()}function b(){q();for(let P in a){let D=a[P];for(let H in D){let X=D[H];for(let W in X)_(X[W].object),delete X[W];delete D[H]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;let D=a[P.id];for(let H in D){let X=D[H];for(let W in X)_(X[W].object),delete X[W];delete D[H]}delete a[P.id]}function O(P){for(let D in a){let H=a[D];if(H[P.id]===void 0)continue;let X=H[P.id];for(let W in X)_(X[W].object),delete X[W];delete H[P.id]}}function q(){tt(),h=!0,c!==l&&(c=l,m(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:tt,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:R,disableUnusedAttributes:T}}function d0(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function f0(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,R=o||t.has("OES_texture_float"),E=v&&R,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:R,floatVertexTextures:E,maxSamples:T}}function p0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new cn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let _=u.clippingPlanes,g=u.clipIntersection,d=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{let S=r?0:i,v=S*4,R=p.clippingState||null;l.value=R,R=h(_,f,v,m);for(let E=0;E!==v;++E)R[E]=e[E];p.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,_){let g=u!==null?u.length:0,d=null;if(g!==0){if(d=l.value,_!==!0||d===null){let p=m+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<p)&&(d=new Float32Array(p));for(let v=0,R=m;v!==g;++v,R+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(d,R),d[R+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}function m0(n){let t=new WeakMap;function e(o,a){return a===$o?o.mapping=Ls:a===Zo&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===$o||a===Zo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new il(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var sl=class extends wa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ts=4,Ah=[.125,.215,.35,.446,.526,.582],zi=20,Ho=new sl,Rh=new $t,Vo=null,Go=0,Wo=0,Fi=(1+Math.sqrt(5))/2,Ss=1/Fi,Ch=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Fi,Ss),new L(0,Fi,-Ss),new L(Ss,0,Fi),new L(-Ss,0,Fi),new L(Fi,Ss,0),new L(-Fi,Ss,0)],Aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Go,Wo),t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:hr,format:An,colorSpace:jn,depthBuffer:!1},s=Ph(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(r)),this._blurMaterial=_0(r,t,e)}return s}_compileMaterial(t){let e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,i,s){let a=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Rh),h.toneMapping=vi,h.autoClear=!1;let m=new ei({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new Je(new pr,m),g=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,g=!0):(m.color.copy(Rh),g=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;oa(s,S*v,p>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ls||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;oa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ho)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ch[(s-1)%Ch.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Je(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zi-1),g=r/_,d=isFinite(r)?1+Math.floor(h*g):zi;d>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zi}`);let p=[],S=0;for(let A=0;A<zi;++A){let G=A/g,b=Math.exp(-G*G/2);p.push(b),A===0?S+=b:A<d&&(S+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;let R=this._sizeLods[s],E=3*R*(s>v-Ts?s-v+Ts:0),T=4*(this._cubeSize-R);oa(e,E,T,3*R,2*R),l.setRenderTarget(e),l.render(u,Ho)}};function g0(n){let t=[],e=[],i=[],s=n,r=n-Ts+1+Ah.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ts?l=Ah[o-n+Ts-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,d=2,p=1,S=new Float32Array(g*_*m),v=new Float32Array(d*_*m),R=new Float32Array(p*_*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,G=T>2?0:-1,b=[A,G,0,A+2/3,G,0,A+2/3,G+1,0,A,G,0,A+2/3,G+1,0,A,G+1,0];S.set(b,g*_*T),v.set(f,d*_*T);let w=[T,T,T,T,T,T];R.set(w,p*_*T)}let E=new Wi;E.setAttribute("position",new _n(S,g)),E.setAttribute("uv",new _n(v,d)),E.setAttribute("faceIndex",new _n(R,p)),t.push(E),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ph(n,t,e){let i=new Qn(n,t,e);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function _0(n,t,e){let i=new Float32Array(zi),s=new L(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Lh(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ih(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function x0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===$o||l===Zo,h=l===Ls||l===Is;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Aa(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Aa(n));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function v0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function y0(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let d=0,p=g.length;d<p;d++)t.remove(g[d])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let _ in f)t.update(f[_],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let _ in m){let g=m[_];for(let d=0,p=g.length;d<p;d++)t.update(g[d],n.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,_=u.attributes.position,g=0;if(m!==null){let S=m.array;g=m.version;for(let v=0,R=S.length;v<R;v+=3){let E=S[v+0],T=S[v+1],A=S[v+2];f.push(E,T,T,A,A,E)}}else if(_!==void 0){let S=_.array;g=_.version;for(let v=0,R=S.length/3-1;v<R;v+=3){let E=v+0,T=v+1,A=v+2;f.push(E,T,T,A,A,E)}}else return;let d=new(lu(f)?Sa:Ma)(f,1);d.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,d)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function b0(n,t,e,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){n.drawElements(r,_,a,m*l),e.update(_,r,1)}function u(m,_,g){if(g===0)return;let d,p;if(s)d=n,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,_,a,m*l,g),e.update(_,r,g)}function f(m,_,g){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<g;p++)this.render(m[p]/l,_[p]);else{d.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let p=0;for(let S=0;S<g;S++)p+=_[S];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function M0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function S0(n,t){return n[0]-t[0]}function w0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function E0(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new De,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==_){let P=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],G=0;S===!0&&(G=1),v===!0&&(G=2),R===!0&&(G=3);let b=h.attributes.position.count*G,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let O=new Float32Array(b*w*4*_),q=new ya(O,b,w,_);q.type=gi,q.needsUpdate=!0;let tt=G*4;for(let D=0;D<_;D++){let H=E[D],X=T[D],W=A[D],V=b*w*4*D;for(let J=0;J<H.count;J++){let Q=J*tt;S===!0&&(o.fromBufferAttribute(H,J),O[V+Q+0]=o.x,O[V+Q+1]=o.y,O[V+Q+2]=o.z,O[V+Q+3]=0),v===!0&&(o.fromBufferAttribute(X,J),O[V+Q+4]=o.x,O[V+Q+5]=o.y,O[V+Q+6]=o.z,O[V+Q+7]=0),R===!0&&(o.fromBufferAttribute(W,J),O[V+Q+8]=o.x,O[V+Q+9]=o.y,O[V+Q+10]=o.z,O[V+Q+11]=W.itemSize===4?o.w:1)}}g={count:_,texture:q,size:new Yt(b,w)},r.set(h,g),h.addEventListener("dispose",P)}let d=0;for(let S=0;S<f.length;S++)d+=f[S];let p=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let m=f===void 0?0:f.length,_=i[h.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];i[h.id]=_}for(let v=0;v<m;v++){let R=_[v];R[0]=v,R[1]=f[v]}_.sort(w0);for(let v=0;v<8;v++)v<m&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(S0);let g=h.morphAttributes.position,d=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let R=a[v],E=R[0],T=R[1];E!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+v)!==g[E]&&h.setAttribute("morphTarget"+v,g[E]),d&&h.getAttribute("morphNormal"+v)!==d[E]&&h.setAttribute("morphNormal"+v,d[E]),s[v]=T,p+=T):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function T0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ra=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Hi,h!==Hi&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Hi&&(i=mi),i===void 0&&h===Ds&&(i=ki),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},du=new Rn,fu=new Ra(1,1);fu.compareFunction=au;var pu=new ya,mu=new el,gu=new Ea,Dh=[],Nh=[],Uh=new Float32Array(16),Oh=new Float32Array(9),Fh=new Float32Array(4);function Bs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ia(n,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function A0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function R0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function C0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function P0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function L0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Fh.set(i),n.uniformMatrix2fv(this.addr,!1,Fh),Te(e,i)}}function I0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Oh.set(i),n.uniformMatrix3fv(this.addr,!1,Oh),Te(e,i)}}function D0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),Te(e,i)}}function N0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function U0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function O0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function F0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function B0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function z0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function k0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function H0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function V0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?fu:du;e.setTexture2D(t||r,s)}function G0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||mu,s)}function W0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||gu,s)}function X0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||pu,s)}function q0(n){switch(n){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return L0;case 35675:return I0;case 35676:return D0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return O0;case 35669:case 35673:return F0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(n,t){n.uniform1fv(this.addr,t)}function $0(n,t){let e=Bs(t,this.size,2);n.uniform2fv(this.addr,e)}function Z0(n,t){let e=Bs(t,this.size,3);n.uniform3fv(this.addr,e)}function J0(n,t){let e=Bs(t,this.size,4);n.uniform4fv(this.addr,e)}function K0(n,t){let e=Bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function j0(n,t){let e=Bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Q0(n,t){let e=Bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function t_(n,t){n.uniform1iv(this.addr,t)}function e_(n,t){n.uniform2iv(this.addr,t)}function n_(n,t){n.uniform3iv(this.addr,t)}function i_(n,t){n.uniform4iv(this.addr,t)}function s_(n,t){n.uniform1uiv(this.addr,t)}function r_(n,t){n.uniform2uiv(this.addr,t)}function a_(n,t){n.uniform3uiv(this.addr,t)}function o_(n,t){n.uniform4uiv(this.addr,t)}function l_(n,t,e){let i=this.cache,s=t.length,r=Ia(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||du,r[o])}function c_(n,t,e){let i=this.cache,s=t.length,r=Ia(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||mu,r[o])}function h_(n,t,e){let i=this.cache,s=t.length,r=Ia(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gu,r[o])}function u_(n,t,e){let i=this.cache,s=t.length,r=Ia(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||pu,r[o])}function d_(n){switch(n){case 5126:return Y0;case 35664:return $0;case 35665:return Z0;case 35666:return J0;case 35674:return K0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var rl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}},al=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d_(e.type)}},ol=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Xo=/(\w+)(\])?(\[|\.)?/g;function Bh(n,t){n.seq.push(t),n.map[t.id]=t}function f_(n,t,e){let i=n.name,s=i.length;for(Xo.lastIndex=0;;){let r=Xo.exec(i),o=Xo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bh(e,c===void 0?new rl(a,n,t):new al(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new ol(a),Bh(e,u)),e=u}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);f_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function zh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var p_=37297,m_=0;function g_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function __(n){let t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(n),i;switch(t===e?i="":t===pa&&e===fa?i="LinearDisplayP3ToLinearSRGB":t===fa&&e===pa&&(i="LinearSRGBToLinearDisplayP3"),n){case jn:case La:return[i,"LinearTransferOETF"];case Ie:case Rl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function kh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+g_(n.getShaderSource(t),o)}else return s}function x_(n,t){let e=__(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function v_(n,t){let e;switch(t){case Sf:e="Linear";break;case wf:e="Reinhard";break;case Ef:e="OptimizedCineon";break;case Tf:e="ACESFilmic";break;case Rf:e="AgX";break;case Af:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function y_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function b_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function M_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function S_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function As(n){return n!==""}function Hh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(n){return n.replace(w_,T_)}var E_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function T_(n,t){let e=Ut[t];if(e===void 0){let i=E_.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ll(e)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(n){return n.replace(A_,R_)}function R_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function C_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function P_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function I_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case bf:t="ENVMAP_BLENDING_MIX";break;case Mf:t="ENVMAP_BLENDING_ADD";break}return t}function D_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function N_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=C_(e),c=P_(e),h=L_(e),u=I_(e),f=D_(e),m=e.isWebGL2?"":y_(e),_=b_(e),g=M_(r),d=s.createProgram(),p,S,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),S.length>0&&(S+=`
`)):(p=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),S=[m,Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Ut.tonemapping_pars_fragment:"",e.toneMapping!==vi?v_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,x_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=ll(o),o=Hh(o,e),o=Vh(o,e),a=ll(a),a=Hh(a,e),a=Vh(a,e),o=Gh(o),a=Gh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let R=v+p+o,E=v+S+a,T=zh(s,s.VERTEX_SHADER,R),A=zh(s,s.FRAGMENT_SHADER,E);s.attachShader(d,T),s.attachShader(d,A),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function G(q){if(n.debug.checkShaderErrors){let tt=s.getProgramInfoLog(d).trim(),P=s.getShaderInfoLog(T).trim(),D=s.getShaderInfoLog(A).trim(),H=!0,X=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,T,A);else{let W=kh(s,T,"vertex"),V=kh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+W+`
`+V)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(P===""||D==="")&&(X=!1);X&&(q.diagnostics={runnable:H,programLog:tt,vertexShader:{log:P,prefix:p},fragmentShader:{log:D,prefix:S}})}s.deleteShader(T),s.deleteShader(A),b=new Ps(s,d),w=S_(s,d)}let b;this.getUniforms=function(){return b===void 0&&G(this),b};let w;this.getAttributes=function(){return w===void 0&&G(this),w};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(d,p_)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m_++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=T,this.fragmentShader=A,this}var U_=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new hl(t),e.set(t,i)),i}},hl=class{constructor(t){this.id=U_++,this.code=t,this.usedTimes=0}};function O_(n,t,e,i,s,r,o){let a=new fr,l=new cl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function d(b,w,O,q,tt){let P=q.fog,D=tt.geometry,H=b.isMeshStandardMaterial?q.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),W=X&&X.mapping===Pa?X.image.height:null,V=_[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=J!==void 0?J.length:0,ht=0;D.morphAttributes.position!==void 0&&(ht=1),D.morphAttributes.normal!==void 0&&(ht=2),D.morphAttributes.color!==void 0&&(ht=3);let k,Y,lt,xt;if(V){let Ge=Dn[V];k=Ge.vertexShader,Y=Ge.fragmentShader}else k=b.vertexShader,Y=b.fragmentShader,l.update(b),lt=l.getVertexShaderID(b),xt=l.getFragmentShaderID(b);let _t=n.getRenderTarget(),Lt=tt.isInstancedMesh===!0,Dt=tt.isBatchedMesh===!0,wt=!!b.map,Wt=!!b.matcap,N=!!X,Ve=!!b.aoMap,yt=!!b.lightMap,Ct=!!b.bumpMap,ft=!!b.normalMap,fe=!!b.displacementMap,Ft=!!b.emissiveMap,M=!!b.metalnessMap,x=!!b.roughnessMap,F=b.anisotropy>0,K=b.clearcoat>0,Z=b.iridescence>0,j=b.sheen>0,mt=b.transmission>0,at=F&&!!b.anisotropyMap,ut=K&&!!b.clearcoatMap,St=K&&!!b.clearcoatNormalMap,Bt=K&&!!b.clearcoatRoughnessMap,$=Z&&!!b.iridescenceMap,te=Z&&!!b.iridescenceThicknessMap,Gt=j&&!!b.sheenColorMap,Rt=j&&!!b.sheenRoughnessMap,vt=!!b.specularMap,dt=!!b.specularColorMap,Nt=!!b.specularIntensityMap,Kt=mt&&!!b.transmissionMap,ge=mt&&!!b.thicknessMap,kt=!!b.gradientMap,et=!!b.alphaMap,C=b.alphaTest>0,st=!!b.alphaHash,rt=!!b.extensions,Et=!!D.attributes.uv1,bt=!!D.attributes.uv2,re=!!D.attributes.uv3,ae=vi;return b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ae=n.toneMapping),{isWebGL2:h,shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:Y,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Dt,instancing:Lt,instancingColor:Lt&&tt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:jn,map:wt,matcap:Wt,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:W,aoMap:Ve,lightMap:yt,bumpMap:Ct,normalMap:ft,displacementMap:f&&fe,emissiveMap:Ft,normalMapObjectSpace:ft&&b.normalMapType===Hf,normalMapTangentSpace:ft&&b.normalMapType===kf,metalnessMap:M,roughnessMap:x,anisotropy:F,anisotropyMap:at,clearcoat:K,clearcoatMap:ut,clearcoatNormalMap:St,clearcoatRoughnessMap:Bt,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:te,sheen:j,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:vt,specularColorMap:dt,specularIntensityMap:Nt,transmission:mt,transmissionMap:Kt,thicknessMap:ge,gradientMap:kt,opaque:b.transparent===!1&&b.blending===Rs,alphaMap:et,alphaTest:C,alphaHash:st,combine:b.combine,mapUv:wt&&g(b.map.channel),aoMapUv:Ve&&g(b.aoMap.channel),lightMapUv:yt&&g(b.lightMap.channel),bumpMapUv:Ct&&g(b.bumpMap.channel),normalMapUv:ft&&g(b.normalMap.channel),displacementMapUv:fe&&g(b.displacementMap.channel),emissiveMapUv:Ft&&g(b.emissiveMap.channel),metalnessMapUv:M&&g(b.metalnessMap.channel),roughnessMapUv:x&&g(b.roughnessMap.channel),anisotropyMapUv:at&&g(b.anisotropyMap.channel),clearcoatMapUv:ut&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:St&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(b.sheenRoughnessMap.channel),specularMapUv:vt&&g(b.specularMap.channel),specularColorMapUv:dt&&g(b.specularColorMap.channel),specularIntensityMapUv:Nt&&g(b.specularIntensityMap.channel),transmissionMapUv:Kt&&g(b.transmissionMap.channel),thicknessMapUv:ge&&g(b.thicknessMap.channel),alphaMapUv:et&&g(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ft||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:bt,vertexUv3s:re,pointsUvs:tt.isPoints===!0&&!!D.attributes.uv&&(wt||et),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,useLegacyLights:n._useLegacyLights,decodeVideoTexture:wt&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===le,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Zn,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:rt&&b.extensions.derivatives===!0,extensionFragDepth:rt&&b.extensions.fragDepth===!0,extensionDrawBuffers:rt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)w.push(O),w.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(S(w,b),v(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function S(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function v(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function R(b){let w=_[b.type],O;if(w){let q=Dn[w];O=Ep.clone(q.uniforms)}else O=b.uniforms;return O}function E(b,w){let O;for(let q=0,tt=c.length;q<tt;q++){let P=c[q];if(P.cacheKey===w){O=P,++O.usedTimes;break}}return O===void 0&&(O=new N_(n,w,b,r),c.push(O)),O}function T(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function G(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:G}}function F_(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function B_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Xh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,m,_,g,d){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:d},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=d),t++,p}function a(u,f,m,_,g,d){let p=o(u,f,m,_,g,d);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(u,f,m,_,g,d){let p=o(u,f,m,_,g,d);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||B_),i.length>1&&i.sort(f||Xh),s.length>1&&s.sort(f||Xh)}function h(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function z_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new qh,n.set(i,[o])):s>=r.length?(o=new qh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function k_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new $t};break;case"SpotLight":e={position:new L,direction:new L,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function H_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var V_=0;function G_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function W_(n,t){let e=new k_,i=H_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new ie,a=new ie;function l(h,u){let f=0,m=0,_=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let g=0,d=0,p=0,S=0,v=0,R=0,E=0,T=0,A=0,G=0,b=0;h.sort(G_);let w=u===!0?Math.PI:1;for(let q=0,tt=h.length;q<tt;q++){let P=h[q],D=P.color,H=P.intensity,X=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=D.r*H*w,m+=D.g*H*w,_+=D.b*H*w;else if(P.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(P.sh.coefficients[V],H);b++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){let J=P.shadow,Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[g]=Q,s.directionalShadowMap[g]=W,s.directionalShadowMatrix[g]=P.shadow.matrix,R++}s.directional[g]=V,g++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(D).multiplyScalar(H*w),V.distance=X,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,s.spot[p]=V;let J=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&G++),s.spotLightMatrix[p]=J.matrix,P.castShadow){let Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[p]=Q,s.spotShadowMap[p]=W,T++}p++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(D).multiplyScalar(H),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),s.rectArea[S]=V,S++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*w),V.distance=P.distance,V.decay=P.decay,P.castShadow){let J=P.shadow,Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[d]=Q,s.pointShadowMap[d]=W,s.pointShadowMatrix[d]=P.shadow.matrix,E++}s.point[d]=V,d++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(H*w),V.groundColor.copy(P.groundColor).multiplyScalar(H*w),s.hemi[v]=V,v++}}S>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;let O=s.hash;(O.directionalLength!==g||O.pointLength!==d||O.spotLength!==p||O.rectAreaLength!==S||O.hemiLength!==v||O.numDirectionalShadows!==R||O.numPointShadows!==E||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==b)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=S,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=T+A-G,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=b,O.directionalLength=g,O.pointLength=d,O.spotLength=p,O.rectAreaLength=S,O.hemiLength=v,O.numDirectionalShadows=R,O.numPointShadows=E,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=b,s.version=V_++)}function c(h,u){let f=0,m=0,_=0,g=0,d=0,p=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){let R=h[S];if(R.isDirectionalLight){let E=s.directional[f];E.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(R.isSpotLight){let E=s.spot[_];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),_++}else if(R.isRectAreaLight){let E=s.rectArea[g];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(R.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){let E=s.point[m];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),m++}else if(R.isHemisphereLight){let E=s.hemi[d];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(p),d++}}}return{setup:l,setupView:c,state:s}}function Yh(n,t){let e=new W_(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function X_(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Yh(n,t),e.set(r,[l])):o>=a.length?(l=new Yh(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var ul=class extends Ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dl=class extends Ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function $_(n,t,e){let i=new Ta,s=new Yt,r=new Yt,o=new De,a=new ul({depthPacking:zf}),l=new dl,c={},h=e.maxTextureSize,u={[bi]:en,[en]:bi,[Zn]:Zn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Wi;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Je(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(T,A,G){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),w=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),q=n.state;q.setBlending(xi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let tt=p!==$n&&this.type===$n,P=p===$n&&this.type!==$n;for(let D=0,H=T.length;D<H;D++){let X=T[D],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let V=W.getFrameExtents();if(s.multiply(V),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,W.mapSize.y=r.y)),W.map===null||tt===!0||P===!0){let Q=this.type!==$n?{minFilter:Ye,magFilter:Ye}:{};W.map!==null&&W.map.dispose(),W.map=new Qn(s.x,s.y,Q),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let J=W.getViewportCount();for(let Q=0;Q<J;Q++){let ht=W.getViewport(Q);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),q.viewport(o),W.updateMatrices(X,Q),i=W.getFrustum(),R(A,G,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===$n&&S(W,G),W.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(b,w,O)};function S(T,A){let G=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,G,f,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,G,m,g,null)}function v(T,A,G,b){let w=null,O=G.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)w=O;else if(w=G.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let q=w.uuid,tt=A.uuid,P=c[q];P===void 0&&(P={},c[q]=P);let D=P[tt];D===void 0&&(D=w.clone(),P[tt]=D,A.addEventListener("dispose",E)),w=D}if(w.visible=A.visible,w.wireframe=A.wireframe,b===$n?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let q=n.properties.get(w);q.light=G}return w}function R(T,A,G,b,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===$n)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld);let tt=t.update(T),P=T.material;if(Array.isArray(P)){let D=tt.groups;for(let H=0,X=D.length;H<X;H++){let W=D[H],V=P[W.materialIndex];if(V&&V.visible){let J=v(T,V,b,w);T.onBeforeShadow(n,T,A,G,tt,J,W),n.renderBufferDirect(G,null,tt,J,T,W),T.onAfterShadow(n,T,A,G,tt,J,W)}}}else if(P.visible){let D=v(T,P,b,w);T.onBeforeShadow(n,T,A,G,tt,D,null),n.renderBufferDirect(G,null,tt,D,T,null),T.onAfterShadow(n,T,A,G,tt,D,null)}}let q=T.children;for(let tt=0,P=q.length;tt<P;tt++)R(q[tt],A,G,b,w)}function E(T){T.target.removeEventListener("dispose",E);for(let G in c){let b=c[G],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function Z_(n,t,e){let i=e.isWebGL2;function s(){let C=!1,st=new De,rt=null,Et=new De(0,0,0,0);return{setMask:function(bt){rt!==bt&&!C&&(n.colorMask(bt,bt,bt,bt),rt=bt)},setLocked:function(bt){C=bt},setClear:function(bt,re,ae,Ae,Ge){Ge===!0&&(bt*=Ae,re*=Ae,ae*=Ae),st.set(bt,re,ae,Ae),Et.equals(st)===!1&&(n.clearColor(bt,re,ae,Ae),Et.copy(st))},reset:function(){C=!1,rt=null,Et.set(-1,0,0,0)}}}function r(){let C=!1,st=null,rt=null,Et=null;return{setTest:function(bt){bt?Dt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(bt){st!==bt&&!C&&(n.depthMask(bt),st=bt)},setFunc:function(bt){if(rt!==bt){switch(bt){case pf:n.depthFunc(n.NEVER);break;case mf:n.depthFunc(n.ALWAYS);break;case gf:n.depthFunc(n.LESS);break;case ca:n.depthFunc(n.LEQUAL);break;case _f:n.depthFunc(n.EQUAL);break;case xf:n.depthFunc(n.GEQUAL);break;case vf:n.depthFunc(n.GREATER);break;case yf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=bt}},setLocked:function(bt){C=bt},setClear:function(bt){Et!==bt&&(n.clearDepth(bt),Et=bt)},reset:function(){C=!1,st=null,rt=null,Et=null}}}function o(){let C=!1,st=null,rt=null,Et=null,bt=null,re=null,ae=null,Ae=null,Ge=null;return{setTest:function(oe){C||(oe?Dt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(oe){st!==oe&&!C&&(n.stencilMask(oe),st=oe)},setFunc:function(oe,We,In){(rt!==oe||Et!==We||bt!==In)&&(n.stencilFunc(oe,We,In),rt=oe,Et=We,bt=In)},setOp:function(oe,We,In){(re!==oe||ae!==We||Ae!==In)&&(n.stencilOp(oe,We,In),re=oe,ae=We,Ae=In)},setLocked:function(oe){C=oe},setClear:function(oe){Ge!==oe&&(n.clearStencil(oe),Ge=oe)},reset:function(){C=!1,st=null,rt=null,Et=null,bt=null,re=null,ae=null,Ae=null,Ge=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},m={},_=new WeakMap,g=[],d=null,p=!1,S=null,v=null,R=null,E=null,T=null,A=null,G=null,b=new $t(0,0,0),w=0,O=!1,q=null,tt=null,P=null,D=null,H=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,V=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=V>=2);let Q=null,ht={},k=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),lt=new De().fromArray(k),xt=new De().fromArray(Y);function _t(C,st,rt,Et){let bt=new Uint8Array(4),re=n.createTexture();n.bindTexture(C,re),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<rt;ae++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(st,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(st+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return re}let Lt={};Lt[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),Lt[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Lt[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Lt[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Dt(n.DEPTH_TEST),l.setFunc(ca),Ft(!1),M(Tc),Dt(n.CULL_FACE),ft(xi);function Dt(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function wt(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function Wt(C,st){return m[C]!==st?(n.bindFramebuffer(C,st),m[C]=st,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=st),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=st)),!0):!1}function N(C,st){let rt=g,Et=!1;if(C)if(rt=_.get(st),rt===void 0&&(rt=[],_.set(st,rt)),C.isWebGLMultipleRenderTargets){let bt=C.texture;if(rt.length!==bt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let re=0,ae=bt.length;re<ae;re++)rt[re]=n.COLOR_ATTACHMENT0+re;rt.length=bt.length,Et=!0}}else rt[0]!==n.COLOR_ATTACHMENT0&&(rt[0]=n.COLOR_ATTACHMENT0,Et=!0);else rt[0]!==n.BACK&&(rt[0]=n.BACK,Et=!0);Et&&(e.isWebGL2?n.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Ve(C){return d!==C?(n.useProgram(C),d=C,!0):!1}let yt={[Bi]:n.FUNC_ADD,[jd]:n.FUNC_SUBTRACT,[Qd]:n.FUNC_REVERSE_SUBTRACT};if(i)yt[Pc]=n.MIN,yt[Lc]=n.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(yt[Pc]=C.MIN_EXT,yt[Lc]=C.MAX_EXT)}let Ct={[tf]:n.ZERO,[ef]:n.ONE,[nf]:n.SRC_COLOR,[qo]:n.SRC_ALPHA,[cf]:n.SRC_ALPHA_SATURATE,[of]:n.DST_COLOR,[rf]:n.DST_ALPHA,[sf]:n.ONE_MINUS_SRC_COLOR,[Yo]:n.ONE_MINUS_SRC_ALPHA,[lf]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[hf]:n.CONSTANT_COLOR,[uf]:n.ONE_MINUS_CONSTANT_COLOR,[df]:n.CONSTANT_ALPHA,[ff]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(C,st,rt,Et,bt,re,ae,Ae,Ge,oe){if(C===xi){p===!0&&(wt(n.BLEND),p=!1);return}if(p===!1&&(Dt(n.BLEND),p=!0),C!==Kd){if(C!==S||oe!==O){if((v!==Bi||T!==Bi)&&(n.blendEquation(n.FUNC_ADD),v=Bi,T=Bi),oe)switch(C){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,E=null,A=null,G=null,b.set(0,0,0),w=0,S=C,O=oe}return}bt=bt||st,re=re||rt,ae=ae||Et,(st!==v||bt!==T)&&(n.blendEquationSeparate(yt[st],yt[bt]),v=st,T=bt),(rt!==R||Et!==E||re!==A||ae!==G)&&(n.blendFuncSeparate(Ct[rt],Ct[Et],Ct[re],Ct[ae]),R=rt,E=Et,A=re,G=ae),(Ae.equals(b)===!1||Ge!==w)&&(n.blendColor(Ae.r,Ae.g,Ae.b,Ge),b.copy(Ae),w=Ge),S=C,O=!1}function fe(C,st){C.side===Zn?wt(n.CULL_FACE):Dt(n.CULL_FACE);let rt=C.side===en;st&&(rt=!rt),Ft(rt),C.blending===Rs&&C.transparent===!1?ft(xi):ft(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let Et=C.stencilWrite;c.setTest(Et),Et&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Dt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){q!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),q=C)}function M(C){C!==$d?(Dt(n.CULL_FACE),C!==tt&&(C===Tc?n.cullFace(n.BACK):C===Zd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),tt=C}function x(C){C!==P&&(W&&n.lineWidth(C),P=C)}function F(C,st,rt){C?(Dt(n.POLYGON_OFFSET_FILL),(D!==st||H!==rt)&&(n.polygonOffset(st,rt),D=st,H=rt)):wt(n.POLYGON_OFFSET_FILL)}function K(C){C?Dt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function Z(C){C===void 0&&(C=n.TEXTURE0+X-1),Q!==C&&(n.activeTexture(C),Q=C)}function j(C,st,rt){rt===void 0&&(Q===null?rt=n.TEXTURE0+X-1:rt=Q);let Et=ht[rt];Et===void 0&&(Et={type:void 0,texture:void 0},ht[rt]=Et),(Et.type!==C||Et.texture!==st)&&(Q!==rt&&(n.activeTexture(rt),Q=rt),n.bindTexture(C,st||Lt[C]),Et.type=C,Et.texture=st)}function mt(){let C=ht[Q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function at(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Rt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(C){lt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),lt.copy(C))}function Kt(C){xt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),xt.copy(C))}function ge(C,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let Et=rt.get(C);Et===void 0&&(Et=n.getUniformBlockIndex(st,C.name),rt.set(C,Et))}function kt(C,st){let Et=u.get(st).get(C);h.get(st)!==Et&&(n.uniformBlockBinding(st,Et,C.__bindingPointIndex),h.set(st,Et))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Q=null,ht={},m={},_=new WeakMap,g=[],d=null,p=!1,S=null,v=null,R=null,E=null,T=null,A=null,G=null,b=new $t(0,0,0),w=0,O=!1,q=null,tt=null,P=null,D=null,H=null,lt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Dt,disable:wt,bindFramebuffer:Wt,drawBuffers:N,useProgram:Ve,setBlending:ft,setMaterial:fe,setFlipSided:Ft,setCullFace:M,setLineWidth:x,setPolygonOffset:F,setScissorTest:K,activeTexture:Z,bindTexture:j,unbindTexture:mt,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:vt,texImage3D:dt,updateUBOMapping:ge,uniformBlockBinding:kt,texStorage2D:Gt,texStorage3D:Rt,texSubImage2D:St,texSubImage3D:Bt,compressedTexSubImage2D:$,compressedTexSubImage3D:te,scissor:Nt,viewport:Kt,reset:et}}function J_(n,t,e,i,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,x){return m?new OffscreenCanvas(M,x):_a("canvas")}function g(M,x,F,K){let Z=1;if((M.width>K||M.height>K)&&(Z=K/Math.max(M.width,M.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let j=x?ga:Math.floor,mt=j(Z*M.width),at=j(Z*M.height);u===void 0&&(u=_(mt,at));let ut=F?_(mt,at):u;return ut.width=mt,ut.height=at,ut.getContext("2d").drawImage(M,0,0,mt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+mt+"x"+at+")."),ut}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function d(M){return Qo(M.width)&&Qo(M.height)}function p(M){return a?!1:M.wrapS!==Tn||M.wrapT!==Tn||M.minFilter!==Ye&&M.minFilter!==mn}function S(M,x){return M.generateMipmaps&&x&&M.minFilter!==Ye&&M.minFilter!==mn}function v(M){n.generateMipmap(M)}function R(M,x,F,K,Z=!1){if(a===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let j=x;if(x===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),x===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RGBA){let mt=Z?da:ee.getTransfer(K);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=mt===le?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(M,x,F){return S(M,F)===!0||M.isFramebufferTexture&&M.minFilter!==Ye&&M.minFilter!==mn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function T(M){return M===Ye||M===Ic||M===_o?n.NEAREST:n.LINEAR}function A(M){let x=M.target;x.removeEventListener("dispose",A),b(x),x.isVideoTexture&&h.delete(x)}function G(M){let x=M.target;x.removeEventListener("dispose",G),O(x)}function b(M){let x=i.get(M);if(x.__webglInit===void 0)return;let F=M.source,K=f.get(F);if(K){let Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(M),Object.keys(K).length===0&&f.delete(F)}i.remove(M)}function w(M){let x=i.get(M);n.deleteTexture(x.__webglTexture);let F=M.source,K=f.get(F);delete K[x.__cacheKey],o.memory.textures--}function O(M){let x=M.texture,F=i.get(M),K=i.get(x);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let j=0;j<F.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(F.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)n.deleteFramebuffer(F.__webglFramebuffer[Z]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Z=0,j=x.length;Z<j;Z++){let mt=i.get(x[Z]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(M)}let q=0;function tt(){q=0}function P(){let M=q;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),q+=1,M}function D(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function H(M,x){let F=i.get(M);if(M.isVideoTexture&&fe(M),M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){let K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,M,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function X(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){lt(F,M,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function W(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){lt(F,M,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function V(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){xt(F,M,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let J={[Jo]:n.REPEAT,[Tn]:n.CLAMP_TO_EDGE,[Ko]:n.MIRRORED_REPEAT},Q={[Ye]:n.NEAREST,[Ic]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[Cf]:n.LINEAR_MIPMAP_NEAREST,[cr]:n.LINEAR_MIPMAP_LINEAR},ht={[Vf]:n.NEVER,[$f]:n.ALWAYS,[Gf]:n.LESS,[au]:n.LEQUAL,[Wf]:n.EQUAL,[Yf]:n.GEQUAL,[Xf]:n.GREATER,[qf]:n.NOTEQUAL};function k(M,x,F){if(F?(n.texParameteri(M,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,J[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Q[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Q[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Tn||x.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,T(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==Ye&&x.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ye||x.minFilter!==_o&&x.minFilter!==cr||x.type===gi&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===hr&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Y(M,x){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",A));let K=x.source,Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));let j=D(x);if(j!==M.__cacheKey){Z[j]===void 0&&(Z[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[j].usedTimes++;let mt=Z[M.__cacheKey];mt!==void 0&&(Z[M.__cacheKey].usedTimes--,mt.usedTimes===0&&w(x)),M.__cacheKey=j,M.__webglTexture=Z[j].texture}return F}function lt(M,x,F){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);let Z=Y(M,x),j=x.source;e.bindTexture(K,M.__webglTexture,n.TEXTURE0+F);let mt=i.get(j);if(j.version!==mt.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);let at=ee.getPrimaries(ee.workingColorSpace),ut=x.colorSpace===gn?null:ee.getPrimaries(x.colorSpace),St=x.colorSpace===gn||at===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Bt=p(x)&&d(x.image)===!1,$=g(x.image,Bt,!1,s.maxTextureSize);$=Ft(x,$);let te=d($)||a,Gt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),vt=R(x.internalFormat,Gt,Rt,x.colorSpace,x.isVideoTexture);k(K,x,te);let dt,Nt=x.mipmaps,Kt=a&&x.isVideoTexture!==!0&&vt!==su,ge=mt.__version===void 0||Z===!0,kt=E(x,$,te);if(x.isDepthTexture)vt=n.DEPTH_COMPONENT,a?x.type===gi?vt=n.DEPTH_COMPONENT32F:x.type===mi?vt=n.DEPTH_COMPONENT24:x.type===ki?vt=n.DEPTH24_STENCIL8:vt=n.DEPTH_COMPONENT16:x.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Hi&&vt===n.DEPTH_COMPONENT&&x.type!==Al&&x.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=mi,Rt=r.convert(x.type)),x.format===Ds&&vt===n.DEPTH_COMPONENT&&(vt=n.DEPTH_STENCIL,x.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ki,Rt=r.convert(x.type))),ge&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,vt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,vt,$.width,$.height,0,Gt,Rt,null));else if(x.isDataTexture)if(Nt.length>0&&te){Kt&&ge&&e.texStorage2D(n.TEXTURE_2D,kt,vt,Nt[0].width,Nt[0].height);for(let et=0,C=Nt.length;et<C;et++)dt=Nt[et],Kt?e.texSubImage2D(n.TEXTURE_2D,et,0,0,dt.width,dt.height,Gt,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,et,vt,dt.width,dt.height,0,Gt,Rt,dt.data);x.generateMipmaps=!1}else Kt?(ge&&e.texStorage2D(n.TEXTURE_2D,kt,vt,$.width,$.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,Gt,Rt,$.data)):e.texImage2D(n.TEXTURE_2D,0,vt,$.width,$.height,0,Gt,Rt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,vt,Nt[0].width,Nt[0].height,$.depth);for(let et=0,C=Nt.length;et<C;et++)dt=Nt[et],x.format!==An?Gt!==null?Kt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,$.depth,Gt,dt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,vt,dt.width,dt.height,$.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,$.depth,Gt,Rt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,vt,dt.width,dt.height,$.depth,0,Gt,Rt,dt.data)}else{Kt&&ge&&e.texStorage2D(n.TEXTURE_2D,kt,vt,Nt[0].width,Nt[0].height);for(let et=0,C=Nt.length;et<C;et++)dt=Nt[et],x.format!==An?Gt!==null?Kt?e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,dt.width,dt.height,Gt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,vt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(n.TEXTURE_2D,et,0,0,dt.width,dt.height,Gt,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,et,vt,dt.width,dt.height,0,Gt,Rt,dt.data)}else if(x.isDataArrayTexture)Kt?(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,vt,$.width,$.height,$.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Gt,Rt,$.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,$.width,$.height,$.depth,0,Gt,Rt,$.data);else if(x.isData3DTexture)Kt?(ge&&e.texStorage3D(n.TEXTURE_3D,kt,vt,$.width,$.height,$.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Gt,Rt,$.data)):e.texImage3D(n.TEXTURE_3D,0,vt,$.width,$.height,$.depth,0,Gt,Rt,$.data);else if(x.isFramebufferTexture){if(ge)if(Kt)e.texStorage2D(n.TEXTURE_2D,kt,vt,$.width,$.height);else{let et=$.width,C=$.height;for(let st=0;st<kt;st++)e.texImage2D(n.TEXTURE_2D,st,vt,et,C,0,Gt,Rt,null),et>>=1,C>>=1}}else if(Nt.length>0&&te){Kt&&ge&&e.texStorage2D(n.TEXTURE_2D,kt,vt,Nt[0].width,Nt[0].height);for(let et=0,C=Nt.length;et<C;et++)dt=Nt[et],Kt?e.texSubImage2D(n.TEXTURE_2D,et,0,0,Gt,Rt,dt):e.texImage2D(n.TEXTURE_2D,et,vt,Gt,Rt,dt);x.generateMipmaps=!1}else Kt?(ge&&e.texStorage2D(n.TEXTURE_2D,kt,vt,$.width,$.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Gt,Rt,$)):e.texImage2D(n.TEXTURE_2D,0,vt,Gt,Rt,$);S(x,te)&&v(K),mt.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function xt(M,x,F){if(x.image.length!==6)return;let K=Y(M,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);let j=i.get(Z);if(Z.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+F);let mt=ee.getPrimaries(ee.workingColorSpace),at=x.colorSpace===gn?null:ee.getPrimaries(x.colorSpace),ut=x.colorSpace===gn||mt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let St=x.isCompressedTexture||x.image[0].isCompressedTexture,Bt=x.image[0]&&x.image[0].isDataTexture,$=[];for(let et=0;et<6;et++)!St&&!Bt?$[et]=g(x.image[et],!1,!0,s.maxCubemapSize):$[et]=Bt?x.image[et].image:x.image[et],$[et]=Ft(x,$[et]);let te=$[0],Gt=d(te)||a,Rt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),dt=R(x.internalFormat,Rt,vt,x.colorSpace),Nt=a&&x.isVideoTexture!==!0,Kt=j.__version===void 0||K===!0,ge=E(x,te,Gt);k(n.TEXTURE_CUBE_MAP,x,Gt);let kt;if(St){Nt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ge,dt,te.width,te.height);for(let et=0;et<6;et++){kt=$[et].mipmaps;for(let C=0;C<kt.length;C++){let st=kt[C];x.format!==An?Rt!==null?Nt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C,0,0,st.width,st.height,Rt,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C,dt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C,0,0,st.width,st.height,Rt,vt,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C,dt,st.width,st.height,0,Rt,vt,st.data)}}}else{kt=x.mipmaps,Nt&&Kt&&(kt.length>0&&ge++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ge,dt,$[0].width,$[0].height));for(let et=0;et<6;et++)if(Bt){Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,$[et].width,$[et].height,Rt,vt,$[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,dt,$[et].width,$[et].height,0,Rt,vt,$[et].data);for(let C=0;C<kt.length;C++){let rt=kt[C].image[et].image;Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C+1,0,0,rt.width,rt.height,Rt,vt,rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C+1,dt,rt.width,rt.height,0,Rt,vt,rt.data)}}else{Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Rt,vt,$[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,dt,Rt,vt,$[et]);for(let C=0;C<kt.length;C++){let st=kt[C];Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C+1,0,0,Rt,vt,st.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C+1,dt,Rt,vt,st.image[et])}}}S(x,Gt)&&v(n.TEXTURE_CUBE_MAP),j.__version=Z.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _t(M,x,F,K,Z,j){let mt=r.convert(F.format,F.colorSpace),at=r.convert(F.type),ut=R(F.internalFormat,mt,at,F.colorSpace);if(!i.get(x).__hasExternalTextures){let Bt=Math.max(1,x.width>>j),$=Math.max(1,x.height>>j);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,ut,Bt,$,x.depth,0,mt,at,null):e.texImage2D(Z,j,ut,Bt,$,0,mt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),ft(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,i.get(F).__webglTexture,0,Ct(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,i.get(F).__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(M,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||ft(x)){let Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===gi?K=n.DEPTH_COMPONENT32F:Z.type===mi&&(K=n.DEPTH_COMPONENT24));let j=Ct(x);ft(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,K,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,K,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let K=Ct(x);F&&ft(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,x.width,x.height):ft(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let K=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<K.length;Z++){let j=K[Z],mt=r.convert(j.format,j.colorSpace),at=r.convert(j.type),ut=R(j.internalFormat,mt,at,j.colorSpace),St=Ct(x);F&&ft(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,ut,x.width,x.height):ft(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let K=i.get(x.depthTexture).__webglTexture,Z=Ct(x);if(x.depthTexture.format===Hi)ft(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(x.depthTexture.format===Ds)ft(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(M){let x=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Dt(x.__webglFramebuffer,M)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]=n.createRenderbuffer(),Lt(x.__webglDepthbuffer[K],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Lt(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(M,x,F){let K=i.get(M);x!==void 0&&_t(K.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&wt(M)}function N(M){let x=M.texture,F=i.get(M),K=i.get(x);M.addEventListener("dispose",G),M.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++);let Z=M.isWebGLCubeRenderTarget===!0,j=M.isWebGLMultipleRenderTargets===!0,mt=d(M)||a;if(Z){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[at][ut]=n.createFramebuffer()}else F.__webglFramebuffer[at]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)F.__webglFramebuffer[at]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(j)if(s.drawBuffers){let at=M.texture;for(let ut=0,St=at.length;ut<St;ut++){let Bt=i.get(at[ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&ft(M)===!1){let at=j?x:[x];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){let St=at[ut];F.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);let Bt=r.convert(St.format,St.colorSpace),$=r.convert(St.type),te=R(St.internalFormat,Bt,$,St.colorSpace,M.isXRRenderTarget===!0),Gt=Ct(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,te,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(F.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),k(n.TEXTURE_CUBE_MAP,x,mt);for(let at=0;at<6;at++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[at][ut],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else _t(F.__webglFramebuffer[at],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);S(x,mt)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){let at=M.texture;for(let ut=0,St=at.length;ut<St;ut++){let Bt=at[ut],$=i.get(Bt);e.bindTexture(n.TEXTURE_2D,$.__webglTexture),k(n.TEXTURE_2D,Bt,mt),_t(F.__webglFramebuffer,M,Bt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),S(Bt,mt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?at=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,K.__webglTexture),k(at,x,mt),a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[ut],M,x,n.COLOR_ATTACHMENT0,at,ut);else _t(F.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,at,0);S(x,mt)&&v(at),e.unbindTexture()}M.depthBuffer&&wt(M)}function Ve(M){let x=d(M)||a,F=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0,Z=F.length;K<Z;K++){let j=F[K];if(S(j,x)){let mt=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,at=i.get(j).__webglTexture;e.bindTexture(mt,at),v(mt),e.unbindTexture()}}}function yt(M){if(a&&M.samples>0&&ft(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],F=M.width,K=M.height,Z=n.COLOR_BUFFER_BIT,j=[],mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(M),ut=M.isWebGLMultipleRenderTargets===!0;if(ut)for(let St=0;St<x.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let St=0;St<x.length;St++){j.push(n.COLOR_ATTACHMENT0+St),M.depthBuffer&&j.push(mt);let Bt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Bt===!1&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ut&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[St]),Bt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[mt])),ut){let $=i.get(x[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,Z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let St=0;St<x.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,at.__webglColorRenderbuffer[St]);let Bt=i.get(x[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Ct(M){return Math.min(s.maxSamples,M.samples)}function ft(M){let x=i.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function fe(M){let x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function Ft(M,x){let F=M.colorSpace,K=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===jo||F!==jn&&F!==gn&&(ee.getTransfer(F)===le?a===!1?t.has("EXT_sRGB")===!0&&K===An?(M.format=jo,M.minFilter=mn,M.generateMipmaps=!1):x=xa.sRGBToLinear(x):(K!==An||Z!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=P,this.resetTextureUnits=tt,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ft}function K_(n,t,e){let i=e.isWebGL2;function s(r,o=gn){let a,l=ee.getTransfer(o);if(r===yi)return n.UNSIGNED_BYTE;if(r===Qh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===tu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Pf)return n.BYTE;if(r===Lf)return n.SHORT;if(r===Al)return n.UNSIGNED_SHORT;if(r===jh)return n.INT;if(r===mi)return n.UNSIGNED_INT;if(r===gi)return n.FLOAT;if(r===hr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===If)return n.ALPHA;if(r===An)return n.RGBA;if(r===Df)return n.LUMINANCE;if(r===Nf)return n.LUMINANCE_ALPHA;if(r===Hi)return n.DEPTH_COMPONENT;if(r===Ds)return n.DEPTH_STENCIL;if(r===jo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Uf)return n.RED;if(r===eu)return n.RED_INTEGER;if(r===Of)return n.RG;if(r===nu)return n.RG_INTEGER;if(r===iu)return n.RGBA_INTEGER;if(r===xo||r===vo||r===yo||r===bo)if(l===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===xo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===xo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dc||r===Nc||r===Uc||r===Oc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===su)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fc||r===Bc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Fc)return l===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Bc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zc||r===kc||r===Hc||r===Vc||r===Gc||r===Wc||r===Xc||r===qc||r===Yc||r===$c||r===Zc||r===Jc||r===Kc||r===jc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$c)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mo||r===Qc||r===th)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Mo)return l===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===th)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ff||r===eh||r===nh||r===ih)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Mo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===eh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ih)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ki?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var fl=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},_i=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},j_={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let d=e.getJointPose(g,i),p=this._getHandJoint(c,g);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},pl=class extends Mi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null,g=e.getContextAttributes(),d=null,p=null,S=[],v=[],R=new Yt,E=null,T=new Ze;T.layers.enable(1),T.viewport=new De;let A=new Ze;A.layers.enable(2),A.viewport=new De;let G=[T,A],b=new fl;b.layers.enable(1),b.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=S[k];return Y===void 0&&(Y=new lr,S[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=S[k];return Y===void 0&&(Y=new lr,S[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=S[k];return Y===void 0&&(Y=new lr,S[k]=Y),Y.getHandSpace()};function q(k){let Y=v.indexOf(k.inputSource);if(Y===-1)return;let lt=S[Y];lt!==void 0&&(lt.update(k.inputSource,k.frame,c||o),lt.dispatchEvent({type:k.type,data:k.inputSource}))}function tt(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",P);for(let k=0;k<S.length;k++){let Y=v[k];Y!==null&&(v[k]=null,S[k].disconnect(Y))}w=null,O=null,t.setRenderTarget(d),m=null,f=null,u=null,s=null,p=null,ht.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Y={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Qn(m.framebufferWidth,m.framebufferHeight,{format:An,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,lt=null,xt=null;g.depth&&(xt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=g.stencil?Ds:Hi,lt=g.stencil?ki:mi);let _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(_t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Qn(f.textureWidth,f.textureHeight,{format:An,type:yi,depthTexture:new Ra(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let Lt=t.properties.get(p);Lt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(k){for(let Y=0;Y<k.removed.length;Y++){let lt=k.removed[Y],xt=v.indexOf(lt);xt>=0&&(v[xt]=null,S[xt].disconnect(lt))}for(let Y=0;Y<k.added.length;Y++){let lt=k.added[Y],xt=v.indexOf(lt);if(xt===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=v.length){v.push(lt),xt=Lt;break}else if(v[Lt]===null){v[Lt]=lt,xt=Lt;break}if(xt===-1)break}let _t=S[xt];_t&&_t.connect(lt)}}let D=new L,H=new L;function X(k,Y,lt){D.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(lt.matrixWorld);let xt=D.distanceTo(H),_t=Y.projectionMatrix.elements,Lt=lt.projectionMatrix.elements,Dt=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),Wt=(_t[9]+1)/_t[5],N=(_t[9]-1)/_t[5],Ve=(_t[8]-1)/_t[0],yt=(Lt[8]+1)/Lt[0],Ct=Dt*Ve,ft=Dt*yt,fe=xt/(-Ve+yt),Ft=fe*-Ve;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ft),k.translateZ(fe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let M=Dt+fe,x=wt+fe,F=Ct-Ft,K=ft+(xt-Ft),Z=Wt*wt/x*M,j=N*wt/x*M;k.projectionMatrix.makePerspective(F,K,Z,j,M,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;b.near=A.near=T.near=k.near,b.far=A.far=T.far=k.far,(w!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,O=b.far);let Y=k.parent,lt=b.cameras;W(b,Y);for(let xt=0;xt<lt.length;xt++)W(lt[xt],Y);lt.length===2?X(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),V(k,b,Y)};function V(k,Y,lt){lt===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(lt.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ur*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let J=null;function Q(k,Y){if(h=Y.getViewerPose(c||o),_=Y,h!==null){let lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let xt=!1;lt.length!==b.cameras.length&&(b.cameras.length=0,xt=!0);for(let _t=0;_t<lt.length;_t++){let Lt=lt[_t],Dt=null;if(m!==null)Dt=m.getViewport(Lt);else{let Wt=u.getViewSubImage(f,Lt);Dt=Wt.viewport,_t===0&&(t.setRenderTargetTextures(p,Wt.colorTexture,f.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(p))}let wt=G[_t];wt===void 0&&(wt=new Ze,wt.layers.enable(_t),wt.viewport=new De,G[_t]=wt),wt.matrix.fromArray(Lt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Lt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),_t===0&&(b.matrix.copy(wt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xt===!0&&b.cameras.push(wt)}}for(let lt=0;lt<S.length;lt++){let xt=v[lt],_t=S[lt];xt!==null&&_t!==void 0&&_t.update(xt,Y,c||o)}J&&J(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}let ht=new uu;ht.setAnimationLoop(Q),this.setAnimationLoop=function(k){J=k},this.dispose=function(){}}};function Q_(n,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,hu(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,S,v,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,R)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),g(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,S,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===en&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===en&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S=t.get(p).envMap;if(S&&(d.envMap.value=S,d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,S,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*S,d.scale.value=v*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,S){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){let S=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tx(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let R=v.program;i.uniformBlockBinding(S,R)}function c(S,v){let R=s[S.id];R===void 0&&(_(S),R=h(S),s[S.id]=R,S.addEventListener("dispose",d));let E=v.program;i.updateUBOMapping(S,E);let T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let v=u();S.__bindingPointIndex=v;let R=n.createBuffer(),E=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,R),R}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let v=s[S.id],R=S.uniforms,E=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=R.length;T<A;T++){let G=Array.isArray(R[T])?R[T]:[R[T]];for(let b=0,w=G.length;b<w;b++){let O=G[b];if(m(O,T,b,E)===!0){let q=O.__offset,tt=Array.isArray(O.value)?O.value:[O.value],P=0;for(let D=0;D<tt.length;D++){let H=tt[D],X=g(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,q+P,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,v,R,E){let T=S.value,A=v+"_"+R;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{let G=E[A];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return E[A]=T,!0}else if(G.equals(T)===!1)return G.copy(T),!0}return!1}function _(S){let v=S.uniforms,R=0,E=16;for(let A=0,G=v.length;A<G;A++){let b=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,O=b.length;w<O;w++){let q=b[w],tt=Array.isArray(q.value)?q.value:[q.value];for(let P=0,D=tt.length;P<D;P++){let H=tt[P],X=g(H),W=R%E;W!==0&&E-W<X.boundary&&(R+=E-W),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=R,R+=X.storage}}}let T=R%E;return T>0&&(R+=E-T),S.__size=R,S.__cache={},this}function g(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function d(S){let v=S.target;v.removeEventListener("dispose",d);let R=o.indexOf(v.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var mr=class{constructor(t={}){let{canvas:e=cp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,d=null,p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;let v=this,R=!1,E=0,T=0,A=null,G=-1,b=null,w=new De,O=new De,q=null,tt=new $t(0),P=0,D=e.width,H=e.height,X=1,W=null,V=null,J=new De(0,0,D,H),Q=new De(0,0,D,H),ht=!1,k=new Ta,Y=!1,lt=!1,xt=null,_t=new ie,Lt=new Yt,Dt=new L,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return A===null?X:1}let N=i;function Ve(y,I){for(let B=0;B<y.length;B++){let z=y[B],U=e.getContext(z,I);if(U!==null)return U}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",st,!1),N===null){let I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),N=Ve(I,y),N===null)throw Ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let yt,Ct,ft,fe,Ft,M,x,F,K,Z,j,mt,at,ut,St,Bt,$,te,Gt,Rt,vt,dt,Nt,Kt;function ge(){yt=new v0(N),Ct=new f0(N,yt,t),yt.init(Ct),dt=new K_(N,yt,Ct),ft=new Z_(N,yt,Ct),fe=new M0(N),Ft=new F_,M=new J_(N,yt,ft,Ft,Ct,dt,fe),x=new m0(v),F=new x0(v),K=new Pp(N,Ct),Nt=new u0(N,yt,K,Ct),Z=new y0(N,K,fe,Nt),j=new T0(N,Z,K,fe),Gt=new E0(N,Ct,M),Bt=new p0(Ft),mt=new O_(v,x,F,yt,Ct,Nt,Bt),at=new Q_(v,Ft),ut=new z_,St=new X_(yt,Ct),te=new h0(v,x,F,ft,j,f,l),$=new $_(v,j,Ct),Kt=new tx(N,fe,Ct,ft),Rt=new d0(N,yt,fe,Ct),vt=new b0(N,yt,fe,Ct),fe.programs=mt.programs,v.capabilities=Ct,v.extensions=yt,v.properties=Ft,v.renderLists=ut,v.shadowMap=$,v.state=ft,v.info=fe}ge();let kt=new pl(v,N);this.xr=kt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(D,H,!1))},this.getSize=function(y){return y.set(D,H)},this.setSize=function(y,I,B=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=y,H=I,e.width=Math.floor(y*X),e.height=Math.floor(I*X),B===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(D*X,H*X).floor()},this.setDrawingBufferSize=function(y,I,B){D=y,H=I,X=B,e.width=Math.floor(y*B),e.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(J)},this.setViewport=function(y,I,B,z){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,I,B,z),ft.viewport(w.copy(J).multiplyScalar(X).floor())},this.getScissor=function(y){return y.copy(Q)},this.setScissor=function(y,I,B,z){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,I,B,z),ft.scissor(O.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(y){ft.setScissorTest(ht=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){V=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(y=!0,I=!0,B=!0){let z=0;if(y){let U=!1;if(A!==null){let ct=A.texture.format;U=ct===iu||ct===nu||ct===eu}if(U){let ct=A.texture.type,gt=ct===yi||ct===mi||ct===Al||ct===ki||ct===Qh||ct===tu,Mt=te.getClearColor(),Tt=te.getClearAlpha(),zt=Mt.r,Pt=Mt.g,It=Mt.b;gt?(m[0]=zt,m[1]=Pt,m[2]=It,m[3]=Tt,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=zt,_[1]=Pt,_[2]=It,_[3]=Tt,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ut.dispose(),St.dispose(),Ft.dispose(),x.dispose(),F.dispose(),j.dispose(),Nt.dispose(),Kt.dispose(),mt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Ge),kt.removeEventListener("sessionend",oe),xt&&(xt.dispose(),xt=null),We.stop()};function et(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=fe.autoReset,I=$.enabled,B=$.autoUpdate,z=$.needsUpdate,U=$.type;ge(),fe.autoReset=y,$.enabled=I,$.autoUpdate=B,$.needsUpdate=z,$.type=U}function st(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function rt(y){let I=y.target;I.removeEventListener("dispose",rt),Et(I)}function Et(y){bt(y),Ft.remove(y)}function bt(y){let I=Ft.get(y).programs;I!==void 0&&(I.forEach(function(B){mt.releaseProgram(B)}),y.isShaderMaterial&&mt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,z,U,ct){I===null&&(I=wt);let gt=U.isMesh&&U.matrixWorld.determinant()<0,Mt=Wd(y,I,B,z,U);ft.setMaterial(z,gt);let Tt=B.index,zt=1;if(z.wireframe===!0){if(Tt=Z.getWireframeAttribute(B),Tt===void 0)return;zt=2}let Pt=B.drawRange,It=B.attributes.position,be=Pt.start*zt,an=(Pt.start+Pt.count)*zt;ct!==null&&(be=Math.max(be,ct.start*zt),an=Math.min(an,(ct.start+ct.count)*zt)),Tt!==null?(be=Math.max(be,0),an=Math.min(an,Tt.count)):It!=null&&(be=Math.max(be,0),an=Math.min(an,It.count));let Re=an-be;if(Re<0||Re===1/0)return;Nt.setup(U,z,Mt,B,Tt);let Vn,pe=Rt;if(Tt!==null&&(Vn=K.get(Tt),pe=vt,pe.setIndex(Vn)),U.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*Wt()),pe.setMode(N.LINES)):pe.setMode(N.TRIANGLES);else if(U.isLine){let Ht=z.linewidth;Ht===void 0&&(Ht=1),ft.setLineWidth(Ht*Wt()),U.isLineSegments?pe.setMode(N.LINES):U.isLineLoop?pe.setMode(N.LINE_LOOP):pe.setMode(N.LINE_STRIP)}else U.isPoints?pe.setMode(N.POINTS):U.isSprite&&pe.setMode(N.TRIANGLES);if(U.isBatchedMesh)pe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)pe.renderInstances(be,Re,U.count);else if(B.isInstancedBufferGeometry){let Ht=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,fo=Math.min(B.instanceCount,Ht);pe.renderInstances(be,Re,fo)}else pe.render(be,Re)};function re(y,I,B){y.transparent===!0&&y.side===Zn&&y.forceSinglePass===!1?(y.side=en,y.needsUpdate=!0,zr(y,I,B),y.side=bi,y.needsUpdate=!0,zr(y,I,B),y.side=Zn):zr(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),d=St.get(B),d.init(),S.push(d),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(v._useLegacyLights);let z=new Set;return y.traverse(function(U){let ct=U.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){let Mt=ct[gt];re(Mt,B,U),z.add(Mt)}else re(ct,B,U),z.add(ct)}),S.pop(),d=null,z},this.compileAsync=function(y,I,B=null){let z=this.compile(y,I,B);return new Promise(U=>{function ct(){if(z.forEach(function(gt){Ft.get(gt).currentProgram.isReady()&&z.delete(gt)}),z.size===0){U(y);return}setTimeout(ct,10)}yt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ae=null;function Ae(y){ae&&ae(y)}function Ge(){We.stop()}function oe(){We.start()}let We=new uu;We.setAnimationLoop(Ae),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(y){ae=y,kt.setAnimationLoop(y),y===null?We.stop():We.start()},kt.addEventListener("sessionstart",Ge),kt.addEventListener("sessionend",oe),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(I),I=kt.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,I,A),d=St.get(y,S.length),d.init(),S.push(d),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,Y=Bt.init(this.clippingPlanes,lt),g=ut.get(y,p.length),g.init(),p.push(g),In(y,I,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,V),this.info.render.frame++,Y===!0&&Bt.beginShadows();let B=d.state.shadowsArray;if($.render(B,y,I),Y===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(g,y),d.setupLights(v._useLegacyLights),I.isArrayCamera){let z=I.cameras;for(let U=0,ct=z.length;U<ct;U++){let gt=z[U];yc(g,y,gt,gt.viewport)}}else yc(g,y,I);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(v,y,I),Nt.resetDefaultState(),G=-1,b=null,S.pop(),S.length>0?d=S[S.length-1]:d=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function In(y,I,B,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||k.intersectsSprite(y)){z&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_t);let gt=j.update(y),Mt=y.material;Mt.visible&&g.push(y,gt,Mt,B,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||k.intersectsObject(y))){let gt=j.update(y),Mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(_t)),Array.isArray(Mt)){let Tt=gt.groups;for(let zt=0,Pt=Tt.length;zt<Pt;zt++){let It=Tt[zt],be=Mt[It.materialIndex];be&&be.visible&&g.push(y,gt,be,B,Dt.z,It)}}else Mt.visible&&g.push(y,gt,Mt,B,Dt.z,null)}}let ct=y.children;for(let gt=0,Mt=ct.length;gt<Mt;gt++)In(ct[gt],I,B,z)}function yc(y,I,B,z){let U=y.opaque,ct=y.transmissive,gt=y.transparent;d.setupLightsView(B),Y===!0&&Bt.setGlobalState(v.clippingPlanes,B),ct.length>0&&Gd(U,ct,I,B),z&&ft.viewport(w.copy(z)),U.length>0&&Br(U,I,B),ct.length>0&&Br(ct,I,B),gt.length>0&&Br(gt,I,B),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Gd(y,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let ct=Ct.isWebGL2;xt===null&&(xt=new Qn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?hr:yi,minFilter:cr,samples:ct?4:0})),v.getDrawingBufferSize(Lt),ct?xt.setSize(Lt.x,Lt.y):xt.setSize(ga(Lt.x),ga(Lt.y));let gt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(tt),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Mt=v.toneMapping;v.toneMapping=vi,Br(y,B,z),M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt);let Tt=!1;for(let zt=0,Pt=I.length;zt<Pt;zt++){let It=I[zt],be=It.object,an=It.geometry,Re=It.material,Vn=It.group;if(Re.side===Zn&&be.layers.test(z.layers)){let pe=Re.side;Re.side=en,Re.needsUpdate=!0,bc(be,B,z,an,Re,Vn),Re.side=pe,Re.needsUpdate=!0,Tt=!0}}Tt===!0&&(M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt)),v.setRenderTarget(gt),v.setClearColor(tt,P),v.toneMapping=Mt}function Br(y,I,B){let z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ct=y.length;U<ct;U++){let gt=y[U],Mt=gt.object,Tt=gt.geometry,zt=z===null?gt.material:z,Pt=gt.group;Mt.layers.test(B.layers)&&bc(Mt,I,B,Tt,zt,Pt)}}function bc(y,I,B,z,U,ct){y.onBeforeRender(v,I,B,z,U,ct),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,I,B,z,y,ct),U.transparent===!0&&U.side===Zn&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,v.renderBufferDirect(B,I,z,U,y,ct),U.side=bi,U.needsUpdate=!0,v.renderBufferDirect(B,I,z,U,y,ct),U.side=Zn):v.renderBufferDirect(B,I,z,U,y,ct),y.onAfterRender(v,I,B,z,U,ct)}function zr(y,I,B){I.isScene!==!0&&(I=wt);let z=Ft.get(y),U=d.state.lights,ct=d.state.shadowsArray,gt=U.state.version,Mt=mt.getParameters(y,U.state,ct,I,B),Tt=mt.getProgramCacheKey(Mt),zt=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||z.environment),zt===void 0&&(y.addEventListener("dispose",rt),zt=new Map,z.programs=zt);let Pt=zt.get(Tt);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===gt)return Sc(y,Mt),Pt}else Mt.uniforms=mt.getUniforms(y),y.onBuild(B,Mt,v),y.onBeforeCompile(Mt,v),Pt=mt.acquireProgram(Mt,Tt),zt.set(Tt,Pt),z.uniforms=Mt.uniforms;let It=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(It.clippingPlanes=Bt.uniform),Sc(y,Mt),z.needsLights=qd(y),z.lightsStateVersion=gt,z.needsLights&&(It.ambientLightColor.value=U.state.ambient,It.lightProbe.value=U.state.probe,It.directionalLights.value=U.state.directional,It.directionalLightShadows.value=U.state.directionalShadow,It.spotLights.value=U.state.spot,It.spotLightShadows.value=U.state.spotShadow,It.rectAreaLights.value=U.state.rectArea,It.ltc_1.value=U.state.rectAreaLTC1,It.ltc_2.value=U.state.rectAreaLTC2,It.pointLights.value=U.state.point,It.pointLightShadows.value=U.state.pointShadow,It.hemisphereLights.value=U.state.hemi,It.directionalShadowMap.value=U.state.directionalShadowMap,It.directionalShadowMatrix.value=U.state.directionalShadowMatrix,It.spotShadowMap.value=U.state.spotShadowMap,It.spotLightMatrix.value=U.state.spotLightMatrix,It.spotLightMap.value=U.state.spotLightMap,It.pointShadowMap.value=U.state.pointShadowMap,It.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function Mc(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Ps.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Sc(y,I){let B=Ft.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Wd(y,I,B,z,U){I.isScene!==!0&&(I=wt),M.resetTextureUnits();let ct=I.fog,gt=z.isMeshStandardMaterial?I.environment:null,Mt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:jn,Tt=(z.isMeshStandardMaterial?F:x).get(z.envMap||gt),zt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!B.morphAttributes.position,be=!!B.morphAttributes.normal,an=!!B.morphAttributes.color,Re=vi;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=v.toneMapping);let Vn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,pe=Vn!==void 0?Vn.length:0,Ht=Ft.get(z),fo=d.state.lights;if(Y===!0&&(lt===!0||y!==b)){let fn=y===b&&z.id===G;Bt.setState(z,y,fn)}let _e=!1;z.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==fo.state.version||Ht.outputColorSpace!==Mt||U.isBatchedMesh&&Ht.batching===!1||!U.isBatchedMesh&&Ht.batching===!0||U.isInstancedMesh&&Ht.instancing===!1||!U.isInstancedMesh&&Ht.instancing===!0||U.isSkinnedMesh&&Ht.skinning===!1||!U.isSkinnedMesh&&Ht.skinning===!0||U.isInstancedMesh&&Ht.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ht.instancingColor===!1&&U.instanceColor!==null||Ht.envMap!==Tt||z.fog===!0&&Ht.fog!==ct||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Bt.numPlanes||Ht.numIntersection!==Bt.numIntersection)||Ht.vertexAlphas!==zt||Ht.vertexTangents!==Pt||Ht.morphTargets!==It||Ht.morphNormals!==be||Ht.morphColors!==an||Ht.toneMapping!==Re||Ct.isWebGL2===!0&&Ht.morphTargetsCount!==pe)&&(_e=!0):(_e=!0,Ht.__version=z.version);let Li=Ht.currentProgram;_e===!0&&(Li=zr(z,I,U));let wc=!1,tr=!1,po=!1,Ue=Li.getUniforms(),Ii=Ht.uniforms;if(ft.useProgram(Li.program)&&(wc=!0,tr=!0,po=!0),z.id!==G&&(G=z.id,tr=!0),wc||b!==y){Ue.setValue(N,"projectionMatrix",y.projectionMatrix),Ue.setValue(N,"viewMatrix",y.matrixWorldInverse);let fn=Ue.map.cameraPosition;fn!==void 0&&fn.setValue(N,Dt.setFromMatrixPosition(y.matrixWorld)),Ct.logarithmicDepthBuffer&&Ue.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ue.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,tr=!0,po=!0)}if(U.isSkinnedMesh){Ue.setOptional(N,U,"bindMatrix"),Ue.setOptional(N,U,"bindMatrixInverse");let fn=U.skeleton;fn&&(Ct.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Ue.setValue(N,"boneTexture",fn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(Ue.setOptional(N,U,"batchingTexture"),Ue.setValue(N,"batchingTexture",U._matricesTexture,M));let mo=B.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0&&Ct.isWebGL2===!0)&&Gt.update(U,B,Li),(tr||Ht.receiveShadow!==U.receiveShadow)&&(Ht.receiveShadow=U.receiveShadow,Ue.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ii.envMap.value=Tt,Ii.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),tr&&(Ue.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Xd(Ii,po),ct&&z.fog===!0&&at.refreshFogUniforms(Ii,ct),at.refreshMaterialUniforms(Ii,z,X,H,xt),Ps.upload(N,Mc(Ht),Ii,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ps.upload(N,Mc(Ht),Ii,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ue.setValue(N,"center",U.center),Ue.setValue(N,"modelViewMatrix",U.modelViewMatrix),Ue.setValue(N,"normalMatrix",U.normalMatrix),Ue.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let fn=z.uniformsGroups;for(let go=0,Yd=fn.length;go<Yd;go++)if(Ct.isWebGL2){let Ec=fn[go];Kt.update(Ec,Li),Kt.bind(Ec,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function Xd(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function qd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,I,B){Ft.get(y.texture).__webglTexture=I,Ft.get(y.depthTexture).__webglTexture=B;let z=Ft.get(y);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){let B=Ft.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){A=y,E=I,T=B;let z=!0,U=null,ct=!1,gt=!1;if(y){let Tt=Ft.get(y);Tt.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Tt.__webglFramebuffer===void 0?M.setupRenderTarget(y):Tt.__hasExternalTextures&&M.rebindTextures(y,Ft.get(y.texture).__webglTexture,Ft.get(y.depthTexture).__webglTexture);let zt=y.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);let Pt=Ft.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[I])?U=Pt[I][B]:U=Pt[I],ct=!0):Ct.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?U=Ft.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[B]:U=Pt,w.copy(y.viewport),O.copy(y.scissor),q=y.scissorTest}else w.copy(J).multiplyScalar(X).floor(),O.copy(Q).multiplyScalar(X).floor(),q=ht;if(ft.bindFramebuffer(N.FRAMEBUFFER,U)&&Ct.drawBuffers&&z&&ft.drawBuffers(y,U),ft.viewport(w),ft.scissor(O),ft.setScissorTest(q),ct){let Tt=Ft.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Tt.__webglTexture,B)}else if(gt){let Tt=Ft.get(y.texture),zt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,B||0,zt)}G=-1},this.readRenderTargetPixels=function(y,I,B,z,U,ct,gt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){ft.bindFramebuffer(N.FRAMEBUFFER,Mt);try{let Tt=y.texture,zt=Tt.format,Pt=Tt.type;if(zt!==An&&dt.convert(zt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let It=Pt===hr&&(yt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Pt!==yi&&dt.convert(Pt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===gi&&(Ct.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U&&N.readPixels(I,B,z,U,dt.convert(zt),dt.convert(Pt),ct)}finally{let Tt=A!==null?Ft.get(A).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(y,I,B=0){let z=Math.pow(2,-B),U=Math.floor(I.image.width*z),ct=Math.floor(I.image.height*z);M.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,y.x,y.y,U,ct),ft.unbindTexture()},this.copyTextureToTexture=function(y,I,B,z=0){let U=I.image.width,ct=I.image.height,gt=dt.convert(B.format),Mt=dt.convert(B.type);M.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,y.x,y.y,U,ct,gt,Mt,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,gt,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,y.x,y.y,gt,Mt,I.image),z===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B,z,U=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ct=y.max.x-y.min.x+1,gt=y.max.y-y.min.y+1,Mt=y.max.z-y.min.z+1,Tt=dt.convert(z.format),zt=dt.convert(z.type),Pt;if(z.isData3DTexture)M.setTexture3D(z,0),Pt=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)M.setTexture2DArray(z,0),Pt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let It=N.getParameter(N.UNPACK_ROW_LENGTH),be=N.getParameter(N.UNPACK_IMAGE_HEIGHT),an=N.getParameter(N.UNPACK_SKIP_PIXELS),Re=N.getParameter(N.UNPACK_SKIP_ROWS),Vn=N.getParameter(N.UNPACK_SKIP_IMAGES),pe=B.isCompressedTexture?B.mipmaps[U]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,pe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Pt,U,I.x,I.y,I.z,ct,gt,Mt,Tt,zt,pe.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pt,U,I.x,I.y,I.z,ct,gt,Mt,Tt,pe.data)):N.texSubImage3D(Pt,U,I.x,I.y,I.z,ct,gt,Mt,Tt,zt,pe),N.pixelStorei(N.UNPACK_ROW_LENGTH,It),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be),N.pixelStorei(N.UNPACK_SKIP_PIXELS,an),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Vn),U===0&&z.generateMipmaps&&N.generateMipmap(Pt),ft.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),ft.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,ft.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Rl?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===La?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?Vi:ru}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Vi?Ie:jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ml=class extends mr{};ml.prototype.isWebGL1Renderer=!0;var Ca=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};function la(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ex(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Os=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gl=class extends Os{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:r=t,a=2*e-i;break;case ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:o=t,l=2*i-e;break;case ah:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-e)/(s-e),g=_*_,d=g*_,p=-f*d+2*f*g-f*_,S=(1+f)*d+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-m)*d+(1.5+m)*g+.5*_,R=m*d-m*g;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+S*o[c+E]+v*o[l+E]+R*o[u+E];return r}},_l=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},xl=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=la(e,this.TimeBufferType),this.values=la(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:la(t.times,Array),values:la(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ha:e=this.InterpolantFactoryMethodDiscrete;break;case ua:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ex(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===So,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,m=u+i;for(let _=0;_!==i;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[m+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let m=0;m!==i;++m)e[f+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ua;var Xi=class extends Cn{};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ha;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Cn{};vl.prototype.ValueTypeName="color";var yl=class extends Cn{};yl.prototype.ValueTypeName="number";var bl=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ke.slerpFlat(r,0,o,c-a,o,c,l);return r}},gr=class extends Cn{InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};gr.prototype.ValueTypeName="quaternion";gr.prototype.DefaultInterpolation=ua;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Cn{};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ha;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Cn{};Ml.prototype.ValueTypeName="vector";var Sl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},nx=new Sl,wl=class{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ll="\\[\\]\\.:\\/",ix=new RegExp("["+Ll+"]","g"),Il="[^"+Ll+"]",sx="[^"+Ll.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",Il),ax=/(WCOD+)?/.source.replace("WCOD",sx),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),cx=new RegExp("^"+rx+ax+ox+lx+"$"),hx=["material","materials","bones","map"],El=class{constructor(t,e,i){let s=i||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},de=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);hx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=El;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dv=new Float32Array(1);var _r=class{constructor(t,e,i=0,s=1/0){this.ray=new ba(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Tl(t,this,i,e),i.sort($h),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Tl(t[s],this,i,e);return i.sort($h),i}};function $h(n,t){return n.distance-t.distance}function Tl(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Tl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var nn=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function _u(n){if(n.comfortVersion===nn.version)return n;let t={...n,comfortVersion:nn.version,winDist:nn.windowDistance,dockDist:1};return t.dockSize=1,(n.winScale==null||n.winScale===1)&&(t.winScale=nn.windowScale),t}var ux=4096,Da={width:1200,height:800},zs=160;function dx(n,t=ux){return n.map(({width:e,height:i,kind:s="window",slot:r=0})=>{let o=Math.ceil(e)+zs*2,a=Math.ceil(i)+zs*2,l=s==="window"?r%3*1360:0,c=s==="dock"?800:s==="keyboard"?3160:1200+Math.floor(r/3)*980,h=s==="dock"?400:s==="keyboard"?936:980;if(r>5||o>(s==="window"?1360:t)||a>h||l+o>t||c+a>t)throw new Error("Workspace texture is full; close a window first.");return[l,c,o,a]})}var Na=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(t){var h;t.updateMatrixWorld(!0);let e=[];t.traverse(u=>{u.isCSS3DObject&&u.visible&&e.push(u)});for(let u of e)u.element.parentNode!==this.domElement&&this.domElement.append(u.element),u.element.style.transform="none";for(let u of this.slots.keys())e.some(f=>f.id===u)||this.slots.delete(u);let i=e.map(u=>{let f=u.element.classList.contains("dock")?"dock":u.element.classList.contains("kb")?"keyboard":"window";if(f==="window"&&!this.slots.has(u.id)){let m=new Set(this.slots.values()),_=0;for(;m.has(_);)_++;this.slots.set(u.id,_)}return{width:u.element.offsetWidth,height:u.element.offsetHeight,kind:f,slot:this.slots.get(u.id)||0}}),s;try{s=dx(i)}catch(u){this.lastError!==u.message&&(this.lastError=u.message,(h=window.nextvrMessage)==null||h.call(window,u.message));return}let r=[],o=[];e.forEach((u,f)=>{let m=u.element,[_,g,d,p]=s[f];m.style.left=`${_+zs}px`,m.style.top=`${g+zs}px`;let S=u.matrixWorld.clone().multiply(new ie().makeScale(d,p,1)),v=+(m.dataset.curve||0);r.push({id:m.dataset.windowId||(i[f].kind==="dock"?"dock":i[f].kind),matrix:S.toArray(),rect:s[f],curve:v,glass:[zs/d,zs/p,i[f].width/d,i[f].height/p]});let R=m.getBoundingClientRect();for(let E of m.querySelectorAll("[data-native-browser]")){let T=E.getBoundingClientRect();if(!T.width||!T.height)continue;let A=E.dataset.nativeBrowser,G=E.dataset.url;if(!G)continue;let b=Math.round(T.width),w=Math.round(T.height),O={left:T.left,top:T.top,right:T.right,bottom:T.bottom};for(let D=E.parentElement;D&&D!==m;D=D.parentElement){let H=getComputedStyle(D);if(/(auto|scroll|hidden)/.test(H.overflow+H.overflowY)){let X=D.getBoundingClientRect();O.left=Math.max(O.left,X.left),O.top=Math.max(O.top,X.top),O.right=Math.min(O.right,X.right),O.bottom=Math.min(O.bottom,X.bottom)}}o.push({id:A,url:G,width:b,height:w});let q=O.right-O.left,tt=O.bottom-O.top;if(q<=0||tt<=0)continue;let P=u.matrixWorld.clone().multiply(new ie().makeTranslation(O.left-R.left+q/2-i[f].width/2,i[f].height/2-(O.top-R.top+tt/2),.5)).multiply(new ie().makeScale(q,tt,1));r.push({browser:A,matrix:P.toArray(),rect:[0,0,b,w],curve:+(m.dataset.curve||0),uv:[(O.left-T.left)/b,(T.bottom-O.bottom)/w,q/b,tt/w]})}});let a=2*Math.tan(ou.degToRad(36)),l=new ie().makeTranslation(0,0,-1).multiply(new ie().makeScale(a*1.5,a,1));r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,Da.width,Da.height]});let c=performance.now();if(c-this.last>=({low:66,auto:30,high:16}[document.documentElement.dataset.quality]||30)){this.last=c;let u=JSON.stringify(r),f=JSON.stringify(o);(u!==this.sent||f!==this.sentSpecs)&&(this.sent=u,this.sentSpecs=f,window.NativeXR.frame(u,f))}}invalidate(){this.sent=this.sentSpecs=null}};var xu=new L,fx=new Ke,vu=new L,ks=class extends hn{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var Nn=new ie,px=new ie,Ua=class{constructor(t={}){let e=this,i,s,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:i,height:s}},this.render=function(g,d){let p=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(i/d.view.width)}px, ${-d.view.offsetY*(s/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let S,v;d.isOrthographicCamera&&(S=-(d.right+d.left)/2,v=(d.top+d.bottom)/2);let R=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,E=d.isOrthographicCamera?`scale( ${R} )scale(`+p+")translate("+u(S)+"px,"+u(v)+"px)"+f(d.matrixWorldInverse):`scale( ${R} )translateZ(`+p+"px)"+f(d.matrixWorldInverse),A=(d.isPerspectiveCamera?"perspective("+p+"px) ":"")+E+"translate("+r+"px,"+o+"px)";a.camera.style!==A&&(h.style.transform=A,a.camera.style=A),_(g,g,d,E)},this.setSize=function(g,d){i=g,s=d,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=d+"px",c.style.width=g+"px",c.style.height=d+"px",h.style.width=g+"px",h.style.height=d+"px"};function u(g){return Math.abs(g)<1e-10?0:g}function f(g){let d=g.elements;return"matrix3d("+u(d[0])+","+u(-d[1])+","+u(d[2])+","+u(d[3])+","+u(d[4])+","+u(-d[5])+","+u(d[6])+","+u(d[7])+","+u(d[8])+","+u(-d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(-d[13])+","+u(d[14])+","+u(d[15])+")"}function m(g){let d=g.elements;return"translate(-50%,-50%)"+("matrix3d("+u(d[0])+","+u(d[1])+","+u(d[2])+","+u(d[3])+","+u(-d[4])+","+u(-d[5])+","+u(-d[6])+","+u(-d[7])+","+u(d[8])+","+u(d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(d[13])+","+u(d[14])+","+u(d[15])+")")}function _(g,d,p,S){if(g.isCSS3DObject){let v=g.visible===!0&&g.layers.test(p.layers)===!0;if(g.element.style.display=v===!0?"":"none",v===!0){g.onBeforeRender(e,d,p);let R;g.isCSS3DSprite?(Nn.copy(p.matrixWorldInverse),Nn.transpose(),g.rotation2D!==0&&Nn.multiply(px.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(xu,fx,vu),Nn.setPosition(xu),Nn.scale(vu),Nn.elements[3]=0,Nn.elements[7]=0,Nn.elements[11]=0,Nn.elements[15]=1,R=m(Nn)):R=m(g.matrixWorld);let E=g.element,T=a.objects.get(g);if(T===void 0||T.style!==R){E.style.transform=R;let A={style:R};a.objects.set(g,A)}E.parentNode!==h&&h.appendChild(E),g.onAfterRender(e,d,p)}}for(let v=0,R=g.children.length;v<R;v++)_(g.children[v],d,p,S)}}};var At=!!window.NativeXR,jt=At?Da:{width:innerWidth,height:innerHeight},Mu={lang:null,handsOn:!0,handDraw:0,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"passthrough",quality:"auto",showFps:0},Pe={...Mu};try{Pe={...Mu,...JSON.parse(localStorage.getItem("nextvr.v1")||"{}")}}catch{}if(At){Pe=_u(Pe),Pe.handsOn=!0;try{localStorage.setItem("nextvr.v1",JSON.stringify(Pe))}catch{}}var Ot=Pe,Vs=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Pe))}catch{}},yu={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 p\xF4r do sol",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envSunset:"360\xB0 panorama \xB7 sunset",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 atardecer",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock"}},xr=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E"},{id:"fr",label:"Fran\xE7ais"},{id:"de",label:"Deutsch"},{id:"ko",label:"\uD55C\uAD6D\uC5B4"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),mx="pt",za=n=>xr.find(t=>t.id===n)||xr.find(t=>t.id===mx);var gx=()=>za(Pe.lang).table||"pt",it=n=>(yu[gx()]||yu.pt)[n]||n,Fl=n=>xr.some(t=>t.id===n&&t.table)?(Pe.lang=n,Vs(),xe("lang"),!0):!1,Fa={},ve=(n,t)=>((Fa[n]||(Fa[n]=[])).push(t),t),xe=(n,t)=>(Fa[n]||[]).forEach(e=>e(t));function ce(n){let t=document.getElementById("toast");t.textContent=n,t.classList.add("on"),clearTimeout(ce._t),ce._t=setTimeout(()=>t.classList.remove("on"),2400)}var Ul=new Ca,Zt=new Ze(72,1,.05,120);Zt.rotation.order="YXZ";var he=new _i;Ul.add(he);var un=1.55;Zt.position.set(0,un,0);var vr=At?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new mr({antialias:!0,alpha:!0});At||(vr.setClearColor(0,0),document.getElementById("gl").appendChild(vr.domElement));var yr=At?new Na:new Ua;document.getElementById("css3d").appendChild(yr.domElement);if(At){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let t of["overlay","hud","toast","boot"])n.append(document.getElementById(t))}function _x(){let n=Pe.quality;return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.6)}function ka(){document.documentElement.dataset.quality=Pe.quality,At||(jt.width=innerWidth,jt.height=innerHeight);let n=jt.width,t=jt.height;Zt.aspect=n/t,Zt.updateProjectionMatrix(),vr.setPixelRatio(_x()),vr.setSize(n,t),yr.setSize(n,t),xe("resize")}addEventListener("resize",ka);addEventListener("orientationchange",()=>setTimeout(ka,120));ka();ve("quality",ka);var xx=Object.freeze(["passthrough","sunset","night","space"]),Su=()=>[{id:"passthrough",name:it("envPass"),thumb:null},{id:"sunset",name:it("envSunset"),thumb:"./env/sunset.jpg"},{id:"night",name:it("envNight"),thumb:"./env/night.jpg"},{id:"space",name:it("envSpace"),thumb:"./env/space.jpg"}];function Bl(n){var t,e;Pe.env=xx.includes(n)?n:"passthrough",Vs(),xe("env",Pe.env),(e=(t=window.NativeXR)==null?void 0:t.env)==null||e.call(t,Pe.env)}var je={ok:!1,has:!1,q:new Ke,tmp:new Ke,e:new ti},vx=new Ke,yx=new Ke(-Math.SQRT1_2,0,0,Math.SQRT1_2),bx=new L(0,0,1),Ba=Math.PI/180;function Mx(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*Ba}function Sx(n){n.alpha!=null&&(je.has=!0,je.e.set(n.beta*Ba,n.alpha*Ba,-n.gamma*Ba,"YXZ"),je.tmp.setFromEuler(je.e),je.tmp.multiply(yx),je.tmp.multiply(vx.setFromAxisAngle(bx,-Mx())),je.q.copy(je.tmp))}async function br(){if(At)return je.ok=je.has=!0,xe("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(ce("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",Sx,!0),je.ok=!0,setTimeout(()=>{je.has||ce("Sem girosc\xF3pio: arraste para olhar")},1200),xe("gyro",!0),!0)}catch{return ce("Girosc\xF3pio indispon\xEDvel"),!1}}var wx=()=>je.ok&&je.has,Yi=null,Hs=0,Ol=0;addEventListener("pointerdown",n=>{At||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Yi={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Yi&&(Hs-=(n.clientX-Yi.x)*.0032,Ol=Math.max(-1.2,Math.min(1.2,Ol-(n.clientY-Yi.y)*.0032)),Yi={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Yi=null);addEventListener("pointercancel",()=>Yi=null);function Mr(){let n=new ti().setFromQuaternion(Zt.quaternion,"YXZ");he.rotation.y=n.y,he.position.set(0,0,0),xe("recenter"),ce(it("centered"))}var wu=[],Gs=n=>wu.push(n),bu=performance.now(),Oa=0,Nl=0;var Ex=0,sn=null;function Eu(n){let t=Math.min((n-bu)/1e3,.05);bu=n,At||(wx()?(Zt.quaternion.slerp(je.q,1-Math.exp(-t*12)),Hs&&(Zt.rotateY(Hs),Hs=0)):(Zt.quaternion.setFromEuler(new ti(Ol,Zt.rotation.y+Hs,0,"YXZ")),Hs=0)),Zt.position.set(0,un,0);for(let e of wu)e(t,n);if(vr.render(Ul,Zt),yr.render(Ul,Zt),Oa+=t,Nl++,Oa>=1){let e=document.getElementById("fps");e.textContent=Pe.showFps?Math.round(Nl/Oa)+" fps"+(At&&Pe.handsOn?" \xB7 tracking "+Ex+" fps":"")+(At&&Pe.handsOn?Tx():""):"",Oa=0,Nl=0}requestAnimationFrame(Eu)}requestAnimationFrame(Eu);Bl(Pe.env);if(At){let n=new ie,t=!0;window.nextvrPose=e=>{n.fromArray(e).invert(),Zt.quaternion.setFromRotationMatrix(n),Zt.position.set(0,un,0),Zt.updateMatrixWorld(!0),t&&(he.rotation.y=new ti().setFromQuaternion(Zt.quaternion,"YXZ").y,t=!1)},window.nextvrMessage=ce,window.nextvrDiag=e=>{sn=e}}function Tx(){if(!sn)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,t=[],e=n(sn.camera);e!==null&&t.push("cam "+e);let i=n(sn.infer);return i!==null&&t.push("infer "+i+"ms"),sn.delegate&&t.push(String(sn.delegate).split(" ")[0]),typeof sn.narrow=="number"&&typeof sn.wide=="number"&&sn.narrow+sn.wide>0&&t.push("slots "+(sn.narrow>=sn.wide?1:2)),n(sn.stale)>0&&t.push("stale "+Math.round(sn.stale)),t.length?" \xB7 "+t.join(" \xB7 "):""}var Ha=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(t,e){if(t==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==t&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=t,e?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let t=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,t}},Va=class{constructor({decideMs:t=150,dragOnPx:e=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=t,this.dragOnPx=e,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(t,e,i,s){return this.mode="undecided",this.handId=t,this.anchorX=e,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(t,e,i,s){if(this.mode==="idle"||t!==this.handId)return this.mode;let r=Math.hypot(e-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var ze=document.createElement("video");ze.id="novamr-camera";ze.autoplay=!0;ze.playsInline=!0;ze.muted=!0;ze.setAttribute("aria-hidden","true");var dn=document.createElement("canvas");dn.id="novamr-canvas";var Be=dn.getContext("2d"),ii=document.createElement("div");ii.className="novamr-cursor";var $i=document.createElement("div");$i.className="novamr-cursor";var si=document.createElementNS("http://www.w3.org/2000/svg","svg");si.setAttribute("viewBox","0 0 80 80");si.style.cssText="position:absolute;width:80px;height:80px;z-index:4;pointer-events:none;transform:translate(-50%,-50%);opacity:0;transition:opacity .15s";var Ji=document.createElementNS("http://www.w3.org/2000/svg","circle");Ji.setAttribute("cx","40");Ji.setAttribute("cy","40");Ji.setAttribute("r","34");Ji.setAttribute("fill","none");Ji.setAttribute("stroke","rgba(255,255,255,.25)");Ji.setAttribute("stroke-width","4");var vn=document.createElementNS("http://www.w3.org/2000/svg","circle");vn.setAttribute("cx","40");vn.setAttribute("cy","40");vn.setAttribute("r","34");vn.setAttribute("fill","none");vn.setAttribute("stroke","#27e8ff");vn.setAttribute("stroke-width","4");vn.setAttribute("stroke-linecap","round");var kl=2*Math.PI*34;vn.setAttribute("stroke-dasharray",kl);vn.setAttribute("stroke-dashoffset",kl);vn.setAttribute("transform","rotate(-90 40 40)");si.appendChild(Ji);si.appendChild(vn);var Tu=ii;function Sr(n,t,e){if(e<=0){si.style.opacity="0";return}si.style.left=n+"px",si.style.top=t+"px",si.style.opacity="1",vn.setAttribute("stroke-dashoffset",String(kl*(1-e)))}var Au=!1,Du=0,Xa=!1,Si=null,Zi=!1,Ru=!1,Cu=0,Pu=null;function Hl(n){let t=performance.now();n&&(Ru=!0,Cu=t);let e=Ru&&t-Cu<3e3;e!==Pu&&(Pu=e,xe("hands",e))}function Ax(){if(Au)return;Au=!0;let n=document.getElementById("head-overlay")||document.body;[ze,dn,ii,$i,si].forEach(t=>n.appendChild(t)),ze.style.cssText="position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none",dn.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;z-index:2;pointer-events:none;background:transparent",ii.style.cssText=$i.style.cssText="position:absolute;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle,#27e8ff 0%,#00bfff 45%,rgba(0,191,255,0) 70%);box-shadow:0 0 18px #00dfff,0 0 36px #00bfff;transform:translate(-50%,-50%) scale(0);z-index:3;pointer-events:none;transition:transform .1s ease-out",Lu(),window.addEventListener("resize",Lu)}function Lu(){let n=jt.width,t=jt.height;dn.width=n,dn.height=t}function Vl(n,t){return Math.hypot(n.x-t.x,n.y-t.y)}function Ga(n,t){let e=t.x-n.x,i=t.y-n.y,s=Math.hypot(e,i)||1;return{x:-i/s,y:e/s}}function Rx(n){let t=[],e=[];for(let i=0;i<n.length;i++){let s;if(i===0)s=Ga(n[0],n[1]);else if(i===n.length-1)s=Ga(n[i-1],n[i]);else{let o=Ga(n[i-1],n[i]),a=Ga(n[i],n[i+1]);s={x:(o.x+a.x)/2,y:(o.y+a.y)/2};let l=Math.hypot(s.x,s.y)||1;s.x/=l,s.y/=l}let r=i===n.length-1?5:Math.max(7,Vl(n[i],n[Math.min(i+1,n.length-1)])*.32);t.push({x:n[i].x+s.x*r,y:n[i].y+s.y*r}),e.push({x:n[i].x-s.x*r,y:n[i].y-s.y*r})}return{left:t,right:e}}function qa(n,t){if(!t||!Number.isFinite(t.x)||!Number.isFinite(t.y))return;let e=n[n.length-1];(!e||Math.hypot(e.x-t.x,e.y-t.y)>1.5)&&n.push(t)}function Wa(n,t,e=!1){(e?[...t].reverse():t).forEach(i=>qa(n,i))}function Cx(n){let t=n.map(a=>({x:a.x*dn.width,y:a.y*dn.height})),e=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]],i=e.map(a=>Rx(a.map(l=>t[l]))),s=a=>a.reduce((l,c)=>l+c.x,0)/a.length,r=i.map((a,l)=>{let c=e[l].map(h=>t[h]);return s(a.left)<s(a.right)?{left:a.left,right:a.right}:{left:a.right,right:a.left}}),o=[];qa(o,t[0]),Wa(o,r[0].left),Wa(o,r[0].right,!0);for(let a=1;a<r.length;a++){let l=r[a];qa(o,l.left[0]),Wa(o,l.left),Wa(o,l.right,!0)}if(qa(o,t[0]),Be.save(),Be.beginPath(),o.length){Be.moveTo(o[0].x,o[0].y);for(let l=1;l<o.length;l++){let c=o[l-1],h=o[l];Be.quadraticCurveTo(c.x,c.y,(c.x+h.x)/2,(c.y+h.y)/2)}let a=o[o.length-1];Be.lineTo(a.x,a.y),Be.closePath()}return Be.strokeStyle="#27e8ff",Be.lineWidth=Math.max(2.2,Math.min(3.2,dn.width/260)),Be.lineJoin="round",Be.lineCap="round",Be.shadowColor="#00dfff",Be.shadowBlur=5,Be.stroke(),Be.restore(),t}function Px(n,t){let e=n[4],i=n[8],s=Vl(e,i);if(s<45){let r=(e.x+i.x)/2,o=(e.y+i.y)/2,a=Math.max(.15,Math.min(1,(45-s)/45));t.style.left=r+"px",t.style.top=o+"px",t.style.transform="translate(-50%,-50%) scale("+a+")",t.classList.add("active")}else t.style.transform="translate(-50%,-50%) scale(0)",t.classList.remove("active")}async function Iu(){return Si||(typeof window.Hands>"u"&&await new Promise((n,t)=>{let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",e.onload=()=>{let i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js",i.onload=n,i.onerror=t,document.head.appendChild(i)},e.onerror=t,document.head.appendChild(e)}),Si=new window.Hands({locateFile:n=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${n}`}),Si.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.65,minTrackingConfidence:.65}),Si.onResults(Lx),Si)}function Lx(n){var s;Be.clearRect(0,0,dn.width,dn.height),ii.classList.remove("active"),$i.classList.remove("active");let t=performance.now(),e={hands:[],consumed:new Set,scaleX:1,scaleY:1},i=!!(n.multiHandLandmarks&&n.multiHandLandmarks.length);if(Hl(i),i)for(let r=0;r<n.multiHandLandmarks.length;r++){let o=n.multiHandLandmarks[r],a=(s=n.multiHandedness)==null?void 0:s[r],c=((a==null?void 0:a.label)||(r===0?"Right":"Left"))==="Right",h=c?"left":"right",u=Cx(o),f=r===0?ii:$i;Px(u,f),f===ii?Tu=ii:Tu=$i;let m=o[8],_=[(m.x-.5)*2,(.5-m.y)*2];e.hands.push({id:h,left:c,aim:_,base:[(o[0].x-.5)*2,(.5-o[0].y)*2],pinching:Vl(u[4],u[8])<45,fist:!1,palm:[o[9].x,o[9].y],grab:[o[9].x,o[9].y],menuEligible:!1,menuPoint:[o[8].x,o[8].y],palmWidth:.12,palmToFace:!1,predicted:!1,confidence:1})}xe("phonehands",e)}async function zl(){if(ze.readyState>=2&&!Xa&&Si&&Zi){Xa=!0;try{await Si.send({image:ze})}catch(n){console.error("novamr hands",n)}Xa=!1}else Zi&&Hl(!1);Du=requestAnimationFrame(zl)}async function Ix(){Ax();try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30,max:30}},audio:!1});return ze.srcObject=n,await ze.play(),await Iu(),Zi=!0,zl(),!0}catch(n){console.error("NovaMR getUserMedia falhou:",n);try{let t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});return ze.srcObject=t,await ze.play(),await Iu(),Zi=!0,zl(),!0}catch(t){return console.error("NovaMR fallback falhou:",t),!1}}}function Dx(){Zi=!1,cancelAnimationFrame(Du),Xa=!1,ze.srcObject&&(ze.srcObject.getTracks().forEach(n=>n.stop()),ze.srcObject=null),Be.clearRect(0,0,dn.width,dn.height),ii.classList.remove("active"),$i.classList.remove("active"),Sr(0,0,0),Hl(!1),xe("phonehands",{hands:[],consumed:new Set,scaleX:1,scaleY:1})}async function Nu(){var t;return Zi?!0:(At&&((t=window.NativeXR)!=null&&t.hands)&&window.NativeXR.hands(!1),await Ix())}function Uu(){Dx()}var Ou=()=>Zi;(function(){let t=`
    html.native #novamr-canvas{position:absolute;left:0;top:0;width:1200px;height:800px;background:transparent}
    html.native .novamr-cursor{position:absolute}
    html.native #novamr-camera{display:none!important}`,e=document.createElement("style");e.textContent=t,document.head.appendChild(e)})();var Ki=[],ot={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},Pn=new Ha,Ws=new Va,ku=Math.tan(36*Math.PI/180),Nx=ku*1.5,wr=!1,ql=-1/0,Hu=1,Vu=1,Fu=null,Ux=500,Gu=()=>wr&&Ou();async function Er(){return At?await Nu()?(wr=!0,!0):(wr=!1,xe("hands",!1),ce("N\xE3o foi poss\xEDvel abrir a c\xE2mera para o tracking das m\xE3os."),!1):(ce("Hand tracking requer o app Android."),!1)}function Wu(n){for(let t of n)xe(`pinch${t}`,ot)}function $a(){let n=Pn.cancel();Ws.reset(),ot.down=ot.active=!1,ot.phase=Pn.phase,ot.hand=null,ot.mode="idle",Bx(),Wu(n)}function Za(){$a()}function Yl(){$a(),Ki.length=0,wr=!1,ql=-1/0,Uu(),xe("phonehands",{hands:[],consumed:new Set,scaleX:Hu,scaleY:Vu}),xe("hands",!1)}function $l(n){return{x:.5+n[0]/(2*Nx),y:.5-n[1]/(2*ku)}}var Ox=250,Bu=1.6,zu=.06,rn={x:0,y:0},qs=0;function Ja(n=performance.now()){if(!ot.active)return{x:ot.x,y:ot.y};let t=n-qs;if(!(t>0)||t>Ox)return{x:ot.x,y:ot.y};let e=t/1e3,i=s=>Math.max(-zu,Math.min(zu,s));return{x:Math.min(1,Math.max(0,ot.x+i(rn.x*e))),y:Math.min(1,Math.max(0,ot.y+i(rn.y*e)))}}function Fx(n,t){if(ot.active&&t-qs>4&&t-qs<300){let e=(t-qs)/1e3,i=s=>Math.max(-Bu,Math.min(Bu,s));rn.x+=(i((n.x-ot.x)/e)-rn.x)*.35,rn.y+=(i((n.y-ot.y)/e)-rn.y)*.35,Math.hypot(rn.x,rn.y)<.12&&(rn.x=rn.y=0)}else rn.x=rn.y=0;qs=t}function Bx(){rn.x=rn.y=0,qs=0}ve("phonehands",n=>{if(!wr)return;let t=performance.now();ql=t,Ki.splice(0,Ki.length,...n.hands||[]),xe("handframe",{hands:Ki,timestampNs:t*1e6});let e=n.consumed||new Set,i=Ki.filter(a=>!e.has(a.id)),s=Pn.down&&i.find(a=>a.id===Pn.handId)||i.find(a=>a.pinching)||[...i].sort((a,l)=>(l.palmWidth||.1)-(a.palmWidth||.1))[0];if(!s){$a();return}let r=$l(s.aim);Fx(r,t),ot.x=r.x,ot.y=r.y,ot.active=!0,ot.hand=s;let o=Pn.update(s.id,!!s.pinching);o.includes("down")?Ws.begin(s.id,r.x*jt.width,r.y*jt.height,t):o.includes("up")?Ws.end():o.includes("cancel")&&Ws.reset(),Pn.down&&Ws.sample(s.id,r.x*jt.width,r.y*jt.height,t),ot.mode=Ws.mode,ot.down=Pn.down,ot.phase=Pn.phase,Wu(o)});var zx=3e3,Ya=0,Wl=null,Xs=0;function Xl(){Ya=0,Wl=null,Xs=0,Sr(0,0,0)}Gs(()=>{if(!At)return;let n=performance.now();if(!(ot.mode!=="idle"||ot.phase!=="hovering")&&Pn.down&&ot.active&&ot.hand){if((Wl!==Pn.handId||Ya===0)&&(Wl=Pn.handId,Ya=n,Xs=0),Xs=Math.min(1,(n-Ya)/zx),Sr(ot.x*jt.width,ot.y*jt.height,Xs),Xs>=1){Sr(0,0,0),Xl(),Mr();return}}else Xs>0&&Xl()});var Gl=document.getElementById("overlay");Gl.getContext("2d").clearRect(0,0,Gl.width,Gl.height);Gs(()=>{!At&&Fu!==!!Ot.handDraw&&(Fu=!!Ot.handDraw),Ki.length&&performance.now()-ql>Ux&&(Ki.length=0,$a(),Xl(),xe("phonehands",{hands:[],consumed:new Set,scaleX:Hu,scaleY:Vu}))});At&&(window.nextvrHands=()=>{});var kx=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),Hx=Object.freeze({appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="m15 18-6-6 6-6"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>'}),Vx=Object.freeze({...Hx,...kx});function Xt(n,t="ui-icon"){let e=Vx[n];if(!e)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${e}</svg>`}var Se=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),Tr=(n,t,e)=>Math.max(t,Math.min(e,n)),Qe=n=>Number.isFinite(n)?n:0;function Zl(n,t=0,e=1.55,i=null){let s=Qe(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:e,o=Qe(n==null?void 0:n.z),a=Number.isFinite(i)?i:Math.hypot(s,o);a<1e-5&&(a=Se.minDistance,s=0,o=-a);let l=Tr(Math.atan2(-s,-o),-Se.maxYaw,Se.maxYaw);a=Tr(a,Se.minDistance,Se.maxDistance);let c=Math.max(0,Qe(t)),h=e+Se.lowerEdgeFromEye+c,u=e+Se.upperEdgeFromEye-c;return r=h<=u?Tr(r,h,u):e,{x:-Math.sin(l)*a,y:r,z:-Math.cos(l)*a}}function Xu(n,t,e=1200,i=800){return!n||!t?0:Math.hypot((Qe(t.x)-Qe(n.x))*e,(Qe(t.y)-Qe(n.y))*i)}function Jl(n,t,e,i){return Xu(n,t,e,i)>=Se.dragActivationPx}function qu(n,t,e,i){return Xu(n,t,e,i)>=Se.resizeActivationPx}function Kl(n,t){let e=Qe(n==null?void 0:n.x),i=Qe(n==null?void 0:n.y),s=Qe(n==null?void 0:n.z),r=Qe(t==null?void 0:t.x)-e,o=Qe(t==null?void 0:t.y)-i,a=Qe(t==null?void 0:t.z)-s,l=Math.hypot(r,o,a);if(!Number.isFinite(l)||l<=Se.motionDeadZone)return{x:e,y:i,z:s};let h=Math.min(l,Se.maxMotionStep)/l;return{x:e+r*h,y:i+o*h,z:s+a*h}}var Gx=Object.freeze({maxAngle:1.15});function Ar(n){let t=Number.isFinite(n)?n:0;return Math.max(0,Math.min(Gx.maxAngle,t))}function jl(n,t){let e=Ar(t);return e<1e-4?1/0:Math.max(0,n)/2/Math.sin(e)}function Ka(n,t){if(!Number.isFinite(t)||t<=0)return 0;let e=t*t-n*n;return e<=0?t:t-Math.sqrt(e)}function wi(n,t=Se.maxResize){let e=Tr(Qe(t),Se.minResize,Se.maxResize);return Tr(Number.isFinite(n)?n:1,Se.minResize,e)}function Yu(n,t,e=1.55){let i=Math.max(1e-5,Qe(t)),s=Math.min(n-(e+Se.lowerEdgeFromEye),e+Se.upperEdgeFromEye-n);return wi(s/i)}function $u(n,t,e,i){return!(t>1)||!Number.isFinite(e)?wi(n,i):wi(n*e/t,i)}function Zu(n,t){let e=wi(n),s=wi(t)-e;return Math.abs(s)<.004?e:wi(e+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function Ju(n,t){let e=Math.max(0,Math.min(5,n|0)),i=Math.min(3,e),s=e-i,r=[];for(let o=0;o<i;o++)r.push({angle:o===0?0:o%2?t:-t,row:0});for(let o=0;o<s;o++)r.push({angle:s===1?0:o===0?-t/2:t/2,row:1});return r}var Ku=1.22;function Wx(n,t){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,t)))}function ju({width:n,dist:t,gap:e=.5,outerLimit:i=1.3}){let s=Wx(n,t);return Math.min(s*(1+Math.max(0,e)),Math.max(0,i))}function Qu(n){let t=null;for(let e of n)(!t||(e.lastFocus||0)<(t.lastFocus||0))&&(t=e);return t}var ye=.00105,se=[],Pr=null,Un={y:un-.6,z:-1.7,h:.12},sc=class{constructor({id:t,title:e,node:i,w:s=1040,h:r=660,onboarding:o=!1}){this.onboarding=o,this.id=t,this.title=e,this.w=s,this.h=r,this.pinned=!0,this.target=new L,this.resizeScale=1,this.slot=0,this.curve=Ar(o?0:Ot.win360?Ot.win360K:0),this.curveRadius=jl(s,this.curve);let a=document.createElement("div");a.className="win-shell",a.dataset.windowId=t,a.dataset.resizeScale="1",a.style.width=s+"px";let l=document.createElement("div");l.className="win",l.style.width=s+"px",l.style.height=r+"px",l.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${it("repin")}" title="${it("repin")}">${Xt("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${it("close")}" title="${it("close")}">${Xt("x")}</button>
      </div><div class="win-body"></div>`,l.querySelector(".win-title").textContent=e,l.querySelector(".win-body").appendChild(i),l.addEventListener("pointerdown",()=>On(this),!0),l.querySelector(".win-bar").addEventListener("click",u=>{let f=u.target.closest("[data-act]");f&&(f.dataset.act==="close"?Ks(this):f.dataset.act==="curve"?this.setCurve(this.curve>0?0:Ar(Ot.win360K)):qx(this))});let c=document.createElement("div");c.className="win-handle",c.title=it("moveWindow"),c.setAttribute("aria-label",it("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.title=it("resize"),h.setAttribute("aria-label",it("resize")),h.innerHTML=Xt("move"),a.append(l,c,h),this.el=l,this.shell=a,this.handle=c,this.resizeHandle=h,a.dataset.curve=String(this.curve),o&&(l.querySelector(".win-bar").hidden=!0),this.obj=new ks(a),this.obj.scale.setScalar(ye*(this.onboarding?nn.welcomeScale:Ot.winScale)),he.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=Ql(s*ye,r*ye,this,this.hitSegments),this.bendHit(),this.grab=Ql(260*ye,90*ye,this),this.grab.userData.isHandle=!0,this.resizeHit=Ql(112*ye,112*ye,this),this.resizeHit.userData.isResize=!0,!At){let u=f=>({x:f.clientX/jt.width,y:f.clientY/jt.height});c.addEventListener("pointerdown",f=>{f.stopPropagation();let m=u(f);hc(this,m.x,m.y,"desktop"),c.setPointerCapture(f.pointerId)}),c.addEventListener("pointermove",f=>{if(Qt.win===this){let m=u(f);uc(m.x,m.y)}}),c.addEventListener("pointerup",ns),c.addEventListener("pointercancel",ns),h.addEventListener("pointerdown",f=>{f.stopPropagation();let m=u(f);dd(this,m.x,m.y),h.setPointerCapture(f.pointerId)}),h.addEventListener("pointermove",f=>{if(we.win===this){let m=u(f);fd(m.x,m.y)}}),h.addEventListener("pointerup",Zs),h.addEventListener("pointercancel",Zs)}}setCurve(t){this.curve=Ar(t),this.curveRadius=jl(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let e=this.el.querySelector('[data-act="curve"]');e&&e.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new xn(this.w*ye,this.h*ye,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(t){return Ka(t,this.curveRadius)*ye}bendHit(){let t=this.hit.geometry.attributes.position;if(this.curve<=0)for(let e=0;e<t.count;e++)t.setZ(e,0);else for(let e=0;e<t.count;e++)t.setZ(e,Ka(t.getX(e)/ye,this.curveRadius)*ye);t.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let t=this.obj;t.position.copy(this.target);let e=Math.atan2(-t.position.x,-t.position.z)*Ot.winCurve,i=Math.hypot(t.position.x,t.position.z)||.001,s=Math.atan2(un-t.position.y,i)*Ot.winTilt*-1;t.rotation.set(s,e,0,"YXZ");let r=(this.onboarding?nn.welcomeScale:Ot.winScale)*this.resizeScale;t.scale.setScalar(ye*r),this.hit.position.copy(t.position),this.hit.rotation.copy(t.rotation),this.hit.scale.setScalar(r);let o=(this.h/2+34)*ye*r;this.grab.position.copy(t.position),this.grab.rotation.copy(t.rotation),this.grab.translateY(-o),this.grab.scale.setScalar(r),this.resizeHit.position.copy(t.position),this.resizeHit.rotation.copy(t.rotation),this.resizeHit.translateX((this.w/2-48)*ye*r),this.resizeHit.translateY(-(this.h/2-48)*ye*r),this.resizeHit.translateZ(this.bulge(this.w/2-48)+.003),this.resizeHit.scale.setScalar(r)}};function Ql(n,t,e,i=1){let s=new Je(new xn(n,t,i,1),new ei({visible:!1}));return s.userData.win=e,he.add(s),s}function li(){for(let r of se)r.onboarding&&r.target.set(0,un,-nn.welcomeDistance);let n=se.filter(r=>r.pinned&&!r.onboarding),t=n.length;if(!t)return;let e=At?Ot.winDist:-Un.z+.5+(Ot.winDist-2.2),i=Math.max(...n.map(r=>r.w*r.resizeScale))*ye*Ot.winScale,s=At?ju({width:i,dist:e,gap:.5,outerLimit:Se.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));Ju(t,s).forEach(({angle:r,row:o},a)=>{let l=n[a],c=l.h*ye*Ot.winScale*l.resizeScale,h=Un.y+Un.h/2+.14+c/2,u=Math.sin(r)*e,f=-Math.cos(r)*e,m=o===0?h:Math.min(h+c*2*(Ku-1)+c,un+Se.upperEdgeFromEye-c);l.target.set(u,m,f)})}ve("recenter",li);ve("resize",li);function ci(n){let t=se.find(s=>s.id===n.id);if(t)return On(t),t;let e=se.filter(s=>!s.onboarding);if(e.length>=5){let s=Qu(e);s&&(ce(`${it("arcFull")}: ${s.title}`),Ks(s))}let i=new sc(n);return se.push(i),li(),On(i),i.obj.position.copy(i.target),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),xe("wins",se),i}function Ks(n){if(!n)return;let t=se.indexOf(n);t<0||(Qt.win===n&&ns(),we.win===n&&Zs(),se.splice(t,1),he.remove(n.obj),he.remove(n.hit),he.remove(n.grab),he.remove(n.resizeHit),n.shell.remove(),Pr===n&&(Pr=se[se.length-1]||null),li(),xe("wins",se))}function On(n){Pr!==n&&(Pr=n,n.lastFocus=performance.now(),se.forEach(t=>t.el.classList.toggle("focus",t===Pr)))}function qx(n){n.pinned=!0,n.shell.classList.remove("free"),li()}var Mn=new _r,to=new Yt,Qt={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},we={win:null,start:null,active:!1,startScale:1,startDistance:1},tn={source:null,start:null,active:!1,plane:null,anchor:null};function is(n,t,e=Mn){return Zt.updateMatrixWorld(!0),he.updateMatrixWorld(!0),to.set(n*2-1,1-t*2),e.setFromCamera(to,Zt),e}function Yx(n){return n.h*ye*Ot.winScale*n.resizeScale/2}function $x(n,t,e=null){let i=Zl(t,Yx(n),un,e);return new L(i.x,i.y,i.z)}function hc(n,t,e,i="handle",s=null){if(n.onboarding||we.win)return!1;Qt.win&&ns(),On(n),is(t,e);let r=n.obj.getWorldPosition(new L),o=new cn().setFromNormalAndCoplanarPoint(Mn.ray.direction.clone(),r),a=Mn.ray.intersectPlane(o,new L);if(!a)return!1;let l=he.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(Qt,{win:n,source:i,hand:s,start:{x:t,y:e},active:!1,plane:o,anchor:{hit:a.clone(),center:r.clone(),radius:c,applied:new L}}),!0}function Zx(){let n=Qt.win;!n||Qt.active||(Qt.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),li())}function uc(n,t){let e=Qt.win;if(!e)return!1;is(n,t);let i=Mn.ray.intersectPlane(Qt.plane,new L);if(!i)return!1;if(!Qt.active){if(!Jl(Qt.start,{x:n,y:t},jt.width,jt.height))return!1;Zx()}let s=Qt.anchor,r=i.clone().sub(s.hit);s.applied.copy(Kl(s.applied,r));let o=s.center.clone().add(s.applied),a=$x(e,he.worldToLocal(o),s.radius);return e.target.copy(a),e.obj.position.copy(e.target),!0}function ns(){Qt.win&&Qt.win.shell.classList.remove("moving"),Object.assign(Qt,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function hd(n,t,e="pinch"){if(!Ei||Qt.win||we.win)return!1;tn.start&&Ti(),is(n,t);let i=Ne.getWorldPosition(new L),s=new cn().setFromNormalAndCoplanarPoint(Mn.ray.direction.clone(),i),r=Mn.ray.intersectPlane(s,new L);return r?(Object.assign(tn,{source:e,start:{x:n,y:t},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new L}}),ne.classList.add("grab-armed"),me.setAttribute("aria-pressed","true"),!0):!1}function Jx(){!tn.start||tn.active||(tn.active=!0,ne.classList.remove("grab-armed"),ne.classList.add("moving"))}function dc(n,t){if(!tn.start)return!1;is(n,t);let e=Mn.ray.intersectPlane(tn.plane,new L);if(!e)return!1;if(!tn.active){if(!Jl(tn.start,{x:n,y:t},jt.width,jt.height))return!1;Jx()}let i=tn.anchor,s=e.clone().sub(i.hit);i.applied.copy(Kl(i.applied,s));let r=i.center.clone().add(i.applied),o=he.worldToLocal(r),a=Zl(o,Un.h/2,un);return ji=new L(a.x,a.y,a.z),es=Math.atan2(-a.x,-a.z),Ur(),!0}function Ti(){ne==null||ne.classList.remove("grab-armed","moving"),me==null||me.setAttribute("aria-pressed","false"),Object.assign(tn,{source:null,start:null,active:!1,plane:null,anchor:null})}function ud(n,t,e){Zt.updateMatrixWorld(!0),he.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new L).project(Zt),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((t-s)*jt.width,(e-r)*jt.height)}function dd(n,t,e){return n.onboarding||Qt.win?!1:(we.win&&Zs(),On(n),Object.assign(we,{win:n,start:{x:t,y:e},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,ud(n,t,e))}),!0)}function fd(n,t){let e=we.win;if(!e)return!1;if(!we.active){if(!qu(we.start,{x:n,y:t},jt.width,jt.height))return!1;we.active=!0,e.shell.classList.add("resizing")}let i=e.h*ye*Ot.winScale/2,s=Math.max(we.startScale,Yu(e.obj.position.y,i,un)),r=$u(we.startScale,we.startDistance,ud(e,n,t),s);return e.resizeScale=wi(Zu(e.resizeScale,r),s),e.shell.dataset.resizeScale=e.resizeScale.toFixed(3),!0}function Zs(){we.win&&we.win.shell.classList.remove("resizing"),Object.assign(we,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function Lr(n,t){is(n,t);let e=[];for(let a of se)a.onboarding||e.push(a.resizeHit,a.grab),e.push(a.hit);let i=Mn.intersectObjects(e,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),o=i.object.geometry.parameters;return{win:s,u:r.x/o.width+.5,v:.5-r.y/o.height,distance:i.distance}}var Le=null,yn=null,Kx=n=>{var t;return((t=n==null?void 0:n.closest)==null?void 0:t.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function jx(n,t,e,i,s){var l,c;let r=s?Kx(s):null;t===0&&(n.target=r,n.activation=r);let o=n.target||r;if(!o)return;let a=t===0?"pointerdown":t===1?"pointerup":t===2?"pointermove":"pointercancel";o.dispatchEvent(new PointerEvent(a,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:t===0||t===2?1:0,clientX:e,clientY:i})),t===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function rc(n,t,e=n.x,i=n.y,s=null){var r;n.id==="shell"&&((r=n.win)!=null&&r.onboarding)?jx(n,t,e,i,s):window.NativeXR.handTouch(n.id,t,e,i)}function ts(n,t){let e=n.win.el,i=n.u*e.offsetWidth,s=n.v*e.offsetHeight,r=e.getBoundingClientRect(),o=document.elementFromPoint(r.left+i,r.top+s),a=o==null?void 0:o.closest("[data-native-browser]"),l=a==null?void 0:a.getBoundingClientRect(),c=a?a.dataset.nativeBrowser:"shell",h=r.left+i-((l==null?void 0:l.left)||0),u=r.top+s-((l==null?void 0:l.top)||0);Le&&Le.id!==c&&(rc(Le,3),Le=null,t!==0)||(t===0&&(Le={id:c,win:n.win,x:h,y:u}),Le&&Le.id===c&&(Le.x=h,Le.y=u,rc(Le,t,h,u,o)),(t===1||t===3)&&(Le=null))}function pd(){Le&&rc(Le,3),Le=null,yn=null,ns(),Zs(),Ti()}ve("pinchcancel",pd);function Cr(n,t){if(At){ts(n,t==="down"?0:1);return}let e=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=md(n.win.el,e,i);s&&(t==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function md(n,t,e){let i=null,s=r=>{for(let o of r.children){let a=Qx(o,n);t>=a.l&&t<=a.r&&e>=a.t&&e<=a.b&&(i=o,s(o))}};return s(n),i||n}function Qx(n,t){let e=0,i=0,s=n;for(;s&&s!==t;)e+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:e,t:i,r:e+n.offsetWidth,b:i+n.offsetHeight}}ve("pinchdown",()=>{var e;let n=Lr(ot.x,ot.y),t=rv(ot.x,ot.y);if(t&&(!n||t.distance<n.distance)){hd(ot.x,ot.y,"pinch");return}if(n!=null&&n.resize){dd(n.win,ot.x,ot.y);return}if(n!=null&&n.handle){hc(n.win,ot.x,ot.y,"handle",(e=ot.hand)==null?void 0:e.id);return}if(n){On(n.win),yn={win:n.win,hit:n};return}Sd("down")||vd("down")});ve("pinchup",()=>{if(yn&&ot.mode==="drag"&&(Cr(yn.hit,"down"),yn=null),yn){let t=Lr(ot.x,ot.y),e=t&&!t.handle&&!t.resize&&t.win===yn.win?t:yn.hit;yn=null,Cr(e,"down"),Cr(e,"up");return}if(Le){let t=Lr(ot.x,ot.y);t&&t.win===Le.win&&!t.handle&&!t.resize?ts(t,1):pd();return}if(we.win){Zs();return}if(Qt.win){ns();return}if(tn.start){dc(ot.x,ot.y),Ti();return}let n=Lr(ot.x,ot.y);if(n&&!n.handle&&!n.resize){Cr(n,"up");return}Sd("up")||vd("up")});var ne=document.createElement("div");ne.className="dock";var me=document.createElement("button");me.type="button";me.className="dock-grab";me.title=it("moveDock");me.setAttribute("aria-label",it("moveDock"));me.setAttribute("aria-pressed","false");var Ne=new ks(ne);he.add(Ne);var ai=new Je(new xn(1,1),new ei({visible:!1})),ri=new Je(new xn(1,1),new ei({visible:!1}));he.add(ai,ri);if(!At){let n=t=>({x:t.clientX/jt.width,y:t.clientY/jt.height});me.addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation();let e=n(t);hd(e.x,e.y,"desktop")&&me.setPointerCapture(t.pointerId)}),me.addEventListener("pointermove",t=>{if(tn.source==="desktop"){let e=n(t);dc(e.x,e.y)}}),me.addEventListener("pointerup",t=>{tn.source==="desktop"&&(Ti(),me.hasPointerCapture(t.pointerId)&&me.releasePointerCapture(t.pointerId))}),me.addEventListener("pointercancel",Ti)}var Ei=!0;function eo(n){Ei=!!n,Ne.visible=Ei,Ei||(Dr=-1,Ti())}var tv=[],Js=[],ac=[],ev=Xt("wifi"),nv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',iv='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function gd(n){tv=n,Js=[],ac.length=0,ne.innerHTML="";for(let t of n){if(t.kind==="sep"){ne.appendChild(sv());continue}let e=document.createElement("button");if(e.dataset.id=t.id,e.title=t.label||"",e.setAttribute("aria-label",t.label||t.id),t.kind==="avatar")e.className="dock-av",e.innerHTML=iv;else if(t.kind==="status")e.className="dock-status",e.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${ev}</span><span class="dk-bat">${nv}</span>`;else if(t.kind==="tool")e.className="dock-tool",e.innerHTML=t.svg;else if(e.className="dock-app"+(t.launcher?" dock-launcher":""),t.bg&&(e.style.background=t.bg),e.innerHTML=t.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":t.svg||(t.icon?`<img src="${t.icon}" alt="">`:`<span>${t.glyph||"\u2022"}</span>`),t.win){let i=document.createElement("i");i.className="dock-dot",e.appendChild(i),ac.push({b:e,win:t.win})}e.addEventListener("click",()=>t.run()),ne.appendChild(e),Js.push(e)}me.title=it("moveDock"),me.setAttribute("aria-label",it("moveDock")),ne.appendChild(me),xd(),fc(),Ir(),_d(),Ur()}function sv(){let n=document.createElement("span");return n.className="dock-sep",n}function _d(){for(let{b:n,win:t}of ac){let e=n.querySelector(".dock-dot");e&&e.classList.toggle("on",se.some(i=>i.id===t))}}ve("wins",_d);function xd(){let n=ne.querySelector(".dk-time");n&&(n.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}setInterval(xd,2e4);function fc(){let n=ne.querySelector(".dk-wifi");n&&(n.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",fc);addEventListener("offline",fc);var Ys=null;function Ir(){let n=ne.querySelector(".dk-bat");if(!n)return;if(!Ys){n.style.display="none";return}n.style.display="";let t=n.querySelector(".fill");t.setAttribute("width",String(Math.max(1.6,13*Ys.level))),t.setAttribute("fill",Ys.charging?"#8de6c8":Ys.level<.2?"#ff6b6b":"currentColor")}navigator.getBattery&&navigator.getBattery().then(n=>{Ys=n,n.addEventListener("levelchange",Ir),n.addEventListener("chargingchange",Ir),Ir()}).catch(()=>{});var Dr=-1;ve("pinchcancel",()=>{Dr=-1});function vd(n){let t=av(ot.x,ot.y);if(n==="down"){Dr=t?t.i:-1;return}let e=Dr;if(Dr=-1,!(!t||t.i!==e)&&n==="up"){let i=Js[t.i];i&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click())}}function rv(n,t){return!Ei||!oc?null:(is(n,t),Mn.intersectObject(ri,!1)[0]||null)}function av(n,t){if(!Ei)return null;is(n,t);let e=Mn.intersectObject(ai,!1)[0];if(!e)return null;let i=ai.worldToLocal(e.point.clone()),s=ai.geometry.parameters,r=(i.x/s.width+.5)*ne.offsetWidth,o=(.5-i.y/s.height)*ne.offsetHeight;for(let a=0;a<Js.length;a++){let l=Js[a];if(r>=l.offsetLeft&&r<=l.offsetLeft+l.offsetWidth&&o>=l.offsetTop&&o<=l.offsetTop+l.offsetHeight)return{i:a}}return null}var td="",oc="",es=0,Nr=0,ji=null;ve("recenter",()=>{es=Nr=0,ji=null,Ti(),Ur()});ve("summon-dock",()=>{var t;Zt.updateMatrixWorld(!0),he.updateMatrixWorld(!0);let n=Zt.getWorldDirection(new L).transformDirection(he.matrixWorld.clone().invert());es=Math.atan2(-n.x,-n.z),ji=null,Ti(),Ur(),(t=window.NativeXR)==null||t.click()});function Ur(){let n=jt.width>jt.height,t=(At?nn.dockDistance:n?1.42:1.75)*Ot.dockDist,e=At?-nn.dockDrop:n?-.5:-.6,i=ye*(At?nn.dockScale:n?.74:.88)*Ot.dockSize;ji?Ne.position.copy(ji):Ne.position.set(-Math.sin(es)*t,un+e,-Math.cos(es)*t),Ne.rotation.set(.26,es,0,"YXZ"),Ne.scale.setScalar(i);let s=ne.offsetWidth*i,r=ne.offsetHeight*i,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==td&&(td=o,ai.geometry.dispose(),ai.geometry=new xn(s,r),Un.h=r,ji||li());let a=me.offsetWidth*i,l=me.offsetHeight*i,c=a.toFixed(3)+"x"+l.toFixed(3);a>0&&c!==oc&&(oc=c,ri.geometry.dispose(),ri.geometry=new xn(a,l)),ai.position.copy(Ne.position),ai.rotation.copy(Ne.rotation),ri.position.copy(Ne.position),ri.rotation.copy(Ne.rotation),ri.translateY((ne.offsetHeight/2-me.offsetTop-me.offsetHeight/2)*i),ri.translateZ(.004),!ji&&(Un.y!==Ne.position.y||Un.z!==-t)&&(Un.y=Ne.position.y,Un.z=-t,li())}var ov=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],ed=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],lv=0,ue=null,bn=null,Ln=null,oi=!1,Qi=!1;function js(n,t){if(!n){ue&&(he.remove(ue),he.remove(bn),ue.element.remove(),ue=null),Ln=null,oi=Qi=!1;return}if(Ln=t,ue)return;let e=document.createElement("div");e.className="kb";for(let i of ov){let s=document.createElement("div");s.className="kb-row";for(let r of i){let o=typeof r=="string"?r:r.k,a=document.createElement("button");a.className="key"+(typeof r=="string"?"":" "+r.cls),typeof r=="string"?a.textContent=o:r.icon?(a.innerHTML=Xt(r.icon),a.setAttribute("aria-label",r.label),a.title=r.label):a.textContent=r.lbl||o,a.dataset.k=o,s.appendChild(a)}e.appendChild(s)}e.addEventListener("click",i=>{let s=i.target.closest("[data-k]");s&&yd(s.dataset.k,s)}),ue=new ks(e),Nr=es,ue.scale.setScalar(ye*(At?nn.keyboardScale:.9)),he.add(ue),bn=new Je(new xn(1,1),new ei({visible:!1})),he.add(bn),Md()}function yd(n,t){if(At&&window.NativeXR.click(),t&&(t.classList.add("hot"),setTimeout(()=>t.classList.remove("hot"),110)),n==="@close")return js(!1);if(n==="\u21E7"){oi?Qi?(oi=!1,Qi=!1):Qi=!0:(oi=!0,Qi=!1),bd();return}if(n!=="@lang"){if(n==="@mic"){ce(it("micOff"));return}if(n==="@emoji"){nd(ed[lv++%ed.length]);return}nd(n)}}function nd(n){if(!Ln)return;let t=n==="\u232B"||n==="\u23CE",e=oi?n.toUpperCase():n;if(Ln.nativeId)window.NativeXR.key(Ln.nativeId,e);else if(n==="\u232B")Ln.value=Ln.value.slice(0,-1);else if(n==="\u23CE"){Ln.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0}));return}else Ln.value+=e;Ln.nativeId||Ln.dispatchEvent(new Event("input",{bubbles:!0})),!t&&oi&&!Qi&&(oi=!1,bd())}function bd(){if(ue){for(let n of ue.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=oi?Qi?"lock":"once":"";for(let n of ue.element.querySelectorAll("[data-k]")){let t=n.dataset.k;t.length===1&&/[a-zç]/i.test(t)&&(n.textContent=oi?t.toUpperCase():t.toLowerCase())}}}var id="",cv=.35;function Md(){if(!ue)return;let n=At?nn.keyboardDistance:-Un.z-.35;ue.position.set(-Math.sin(Nr)*n,un-(At?nn.keyboardDrop:.68),-Math.cos(Nr)*n),ue.rotation.set(-Math.PI/2+cv,Nr,0,"YXZ");let t=ue.element.offsetWidth*ue.scale.x,e=ue.element.offsetHeight*ue.scale.x,i=t.toFixed(3)+"x"+e.toFixed(3);t>0&&i!==id&&(id=i,bn.geometry.dispose(),bn.geometry=new xn(t,e)),bn.position.copy(ue.position),bn.rotation.copy(ue.rotation)}var Qa=null;ve("pinchcancel",()=>{Qa=null});function Sd(n){if(!ue)return!1;to.set(ot.x*2-1,-(ot.y*2-1)),Mn.setFromCamera(to,Zt);let t=Mn.intersectObject(bn,!1)[0];if(!t)return!1;let e=bn.worldToLocal(t.point.clone()),i=bn.geometry.parameters,s=(e.x/i.width+.5)*ue.element.offsetWidth,r=(.5-e.y/i.height)*ue.element.offsetHeight,o=md(ue.element,s,r);return n==="down"?(Qa=o,!0):(o&&o===Qa&&o.dataset&&o.dataset.k&&yd(o.dataset.k,o),Qa=null,!0)}var sd="";Gs((n,t)=>{let e=`${Ot.winScale}:${Ot.winDist}`;if(sd!==e&&(sd=e,li()),Ur(),Md(),yn&&ot.mode==="drag"&&(Cr(yn.hit,"down"),yn=null),Le&&ot.active&&ot.down){let i=Lr(ot.x,ot.y);i&&i.win===Le.win&&!i.handle&&!i.resize&&ts(i,2)}if((we.win||Qt.win&&Qt.source!=="fist")&&ot.active&&ot.down){let i=Ja(t);we.win&&fd(i.x,i.y),Qt.win&&Qt.source!=="fist"&&uc(i.x,i.y)}if(tn.start&&ot.active&&ot.down){let i=Ja(t);dc(i.x,i.y)}for(let i of se)i.apply()});if(At){let n=function(){try{Ys=JSON.parse(window.NativeXR.battery()),Ir()}catch{}};window.nextvrBrowserFocus=t=>js(!0,{nativeId:t}),n(),setInterval(n,3e4),document.addEventListener("click",t=>{t.target.closest("button")&&window.NativeXR.click()},!0)}var qt=null,Jt=null,ja=new Map,$s=new Set,no={hands:[],consumed:new Set,scaleX:1,scaleY:1},Rr=null,tc=0,rd=350,ad=240;function lc(n,t){Zt.updateMatrixWorld(!0),he.updateMatrixWorld(!0);let e=new _r;return e.setFromCamera(new Yt(n*2-1,1-t*2),Zt),e}function ec(n,t,e=!1){let i=e&&n.grab||n.palm;return{x:(i[0]-.5)*t.scaleX+.5,y:(i[1]-.5)*t.scaleY+.5}}function cc(n,t){let e=n.obj.worldToLocal(t.clone()),i=n.obj.getWorldScale(new L),s=n.curve>0?Ka(e.x,n.curveRadius):0;return{local:e,scale:i,u:e.x/n.w+.5,v:.5-e.y/n.h,d:(e.z-s)*i.z}}function hv(n){let t=Ne.worldToLocal(n.clone()),e=Ne.getWorldScale(new L);return{local:t,scale:e,u:t.x/ne.offsetWidth+.5,v:.5-t.y/ne.offsetHeight,d:t.z*e.z}}function uv(n,t){let e=n.obj.getWorldPosition(new L),i=new L(0,0,1).transformDirection(n.obj.matrixWorld),s=new cn().setFromNormalAndCoplanarPoint(i,e);if(!(n.curve>0))return t.intersectPlane(s,new L);let r=n.obj.matrixWorld.clone().invert(),o=t.origin.clone().applyMatrix4(r),a=t.origin.clone().add(t.direction).applyMatrix4(r).sub(o).normalize(),l=n.curveRadius,c=a.x*a.x+a.z*a.z;if(c<1e-9)return t.intersectPlane(s,new L);let h=2*(o.x*a.x+(o.z-l)*a.z),u=o.x*o.x+(o.z-l)*(o.z-l)-l*l,f=h*h-4*c*u;if(f<0)return t.intersectPlane(s,new L);let m=Math.sqrt(f);for(let _ of[(-h-m)/(2*c),(-h+m)/(2*c)]){if(!(_>0))continue;let g=o.clone().addScaledVector(a,_);if(!(Math.abs(g.x)>l+1e-6||g.z>l))return g.applyMatrix4(n.obj.matrixWorld)}return t.intersectPlane(s,new L)}function od(n){let t=null;for(let e of se){if(e.onboarding)continue;let i=e.obj.getWorldPosition(new L),s=uv(e,n.ray);if(!s)continue;let{local:r,scale:o}=cc(e,s);if(Math.abs(r.x)*o.x>e.w*o.x/2+.08||Math.abs(r.y)*o.y>e.h*o.y/2+.08)continue;let a=n.ray.origin.distanceTo(s);(!t||a<t.distance)&&(t={win:e,point:s,distance:a})}return t}function nc(n=!1,t=no){let e=qt;e!=null&&e.down&&(ts({win:e.win,u:e.u,v:e.v},n?3:1),!n&&t.hands.some(i=>i.id===e.id&&i.pinching)&&($s.add(e.id),t.consumed.add(e.id))),qt=null}function ic(n=!1,t=no){let e=Jt;if(e!=null&&e.down){let i=e.btn;i&&i.classList.remove("near-press"),i&&!n&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click()),!n&&t.hands.some(s=>s.id===e.id&&s.pinching)&&($s.add(e.id),t.consumed.add(e.id))}Jt=null}ve("phonehands",n=>{var o;no=n;let t=new Set(n.hands.map(a=>a.id));for(let a of ja.keys())t.has(a)||ja.delete(a);for(let a of $s){let l=n.hands.find(c=>c.id===a);!l||!l.pinching?$s.delete(a):n.consumed.add(a)}if(Qt.win&&Qt.source==="fist"){let a=n.hands.find(l=>l.id===Qt.hand);if(!a||!a.fist||!se.includes(Qt.win))ns();else{n.consumed.add(a.id);let l=ec(a,n,!0);uc(l.x,l.y)}}let e=performance.now();if(!(Qt.win&&Qt.source==="fist")){let a=n.hands.find(l=>!l.fist);if(a){let l=ec(a,n),c=od(lc(l.x,l.y));if(c){let{local:h,scale:u}=cc(c.win,c.point),f=c.win;(Math.abs(h.x)*u.x>f.w*u.x/2-.06||Math.abs(h.y)*u.y>f.h*u.y/2-.06)&&(Rr=c.win,tc=e)}}}for(let a of se)(a!==Rr||e-tc>rd)&&a.shell.classList.remove("phone-grab-hover");Rr&&e-tc<=rd?Rr.shell.classList.add("phone-grab-hover"):Rr=null;for(let a of n.hands){let l=ja.get(a.id)||!1;if(ja.set(a.id,a.fist),!Qt.win&&!we.win&&a.fist&&!l){let c=ec(a,n,!0),h=od(lc(c.x,c.y));h&&(((o=ot.hand)==null?void 0:o.id)===a.id&&Za(),hc(h.win,c.x,c.y,"fist",a.id)&&n.consumed.add(a.id))}}let i=null,s=null;for(let a of n.hands){if(n.consumed.has(a.id)||!a.head||a.head.length!==63)continue;let l=new L().fromArray(a.head,24);if(!(l.length()>.7)){l.applyMatrix4(Zt.matrixWorld);for(let c of se){let h=cc(c,l),u=(qt==null?void 0:qt.win)===c&&qt.id===a.id,f=u?.08:.02,m=u?.26:.11;h.d>m||h.d<-.12||Math.abs(h.local.x)*h.scale.x>c.w*h.scale.x/2+f||Math.abs(h.local.y)*h.scale.y>c.h*h.scale.y/2+f||(!i||u||!i.current&&Math.abs(h.d)<Math.abs(i.d))&&(i={...h,id:a.id,win:c,point:l,current:u})}if(Ei&&Ne.visible){let c=hv(l),h=(Jt==null?void 0:Jt.id)===a.id,u=ne.offsetWidth*c.scale.x,f=ne.offsetHeight*c.scale.y,m=h?.08:.02,_=h?.26:.11;if(c.d<=_&&c.d>=-.12&&Math.abs(c.local.x)*c.scale.x<u/2+m&&Math.abs(c.local.y)*c.scale.y<f/2+m){let g=c.u*ne.offsetWidth,d=c.v*ne.offsetHeight,p=null;for(let S of Js)if(g>=S.offsetLeft&&g<=S.offsetLeft+S.offsetWidth&&d>=S.offsetTop&&d<=S.offsetTop+S.offsetHeight){p=S;break}(!s||h||!s.current&&Math.abs(c.d)<Math.abs(s.d))&&(s={...c,id:a.id,btn:p,point:l,current:h})}}}}if(!!s&&(!i||Math.abs(s.d)<Math.abs(i.d)-.01||s.current)){if(nc(!t.has(qt==null?void 0:qt.id),n),!s&&Jt&&t.has(Jt.id)&&e-Jt.lastSeen<=ad&&(s={...Jt,current:!0,held:!0}),s?s.current?(Jt.d+=(s.d-Jt.d)*.45,Jt.u+=(s.u-Jt.u)*.45,Jt.v+=(s.v-Jt.v)*.45,Jt.btn=s.btn,s.held||(Jt.lastSeen=e)):(ic(!1,n),Jt={...s,down:!1,previousD:s.d,lastSeen:e}):ic(!t.has(Jt==null?void 0:Jt.id),n),Jt){let a=Jt,l=!!a.btn;if(!a.down&&l&&a.d<=.012&&a.previousD>.012)ot.down&&Za(),a.down=!0,a.btn&&a.btn.classList.add("near-press");else if(a.down&&(a.d>=.035||!l)){a.btn&&a.btn.classList.remove("near-press");let c=a.btn;a.down=!1,c&&(c.style.transform="scale(.88)",setTimeout(()=>c.style.transform="",150),c.click()),n.hands.some(h=>h.id===a.id&&h.pinching)&&($s.add(a.id),n.consumed.add(a.id))}a.previousD=a.d,a.down&&(n.blockFar=!0,n.consumed.add(a.id))}}else if(ic(!t.has(Jt==null?void 0:Jt.id),n),!i&&qt&&t.has(qt.id)&&se.includes(qt.win)&&e-qt.lastSeen<=ad&&(i={...qt,current:!0,held:!0}),i?i.current?(qt.d+=(i.d-qt.d)*.45,qt.u+=(i.u-qt.u)*.45,qt.v+=(i.v-qt.v)*.45,i.held||(qt.lastSeen=e)):(nc(!1,n),qt={...i,down:!1,previousD:i.d,lastSeen:e}):nc(!t.has(qt==null?void 0:qt.id),n),qt){let a=qt,l=a.u>=0&&a.u<=1&&a.v>=0&&a.v<=1,c={win:a.win,u:Math.max(0,Math.min(1,a.u)),v:Math.max(0,Math.min(1,a.v))};!a.down&&l&&a.d<=.012&&a.previousD>.012?(ot.down&&Za(),On(a.win),ts(c,0),a.down=!0):a.down&&(a.d>=.035||!l)?(ts(c,1),a.down=!1,n.hands.some(h=>h.id===a.id&&h.pinching)&&($s.add(a.id),n.consumed.add(a.id))):a.down&&ts(c,2),a.previousD=a.d,a.down&&(n.blockFar=!0,n.consumed.add(a.id))}});var ld=0,cd="";Gs((n,t)=>{var r,o,a,l;if(!At||t-ld<16)return;ld=t;let e=no,i=[];for(let c of e.hands){if((Jt==null?void 0:Jt.id)===c.id){let _=Jt,g=_.btn,d=0,p=0;g&&(d=g.offsetLeft+g.offsetWidth/2-ne.offsetWidth/2,p=ne.offsetHeight/2-(g.offsetTop+g.offsetHeight/2));let S=new L(d,p,0).applyMatrix4(Ne.matrixWorld);i.push({id:c.id,end:Zt.worldToLocal(S).toArray(),direct:!0,down:_.down});continue}if((qt==null?void 0:qt.id)===c.id&&qt.down){let _=qt,g=new L((_.u-.5)*_.win.w,(.5-_.v)*_.win.h,0).applyMatrix4(_.win.obj.matrixWorld);i.push({id:c.id,end:Zt.worldToLocal(g).toArray(),direct:!0,down:_.down});continue}if(e.consumed.has(c.id)||e.blockFar){i.push({id:c.id,hidden:!0});continue}let h=((r=ot.hand)==null?void 0:r.id)===c.id?Ja(t):$l(c.aim),u=lc(h.x,h.y),f=se.flatMap(_=>[_.resizeHit,_.grab,_.hit]);Ei&&f.push(ri,ai),bn&&ue&&f.push(bn);let m=u.intersectObjects(f,!1)[0];i.push({id:c.id,...m?{end:Zt.worldToLocal(m.point.clone()).toArray()}:{},down:((o=ot.hand)==null?void 0:o.id)===c.id&&ot.down})}let s=JSON.stringify(i);s!==cd&&(cd=s,(l=(a=window.NativeXR).handTargets)==null||l.call(a,s))});var pt=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},io=(n,t="")=>`<span class="icon-label">${Xt(n)}${t?`<span>${t}</span>`:""}</span>`,xc=n=>{if(At)return He("browser-extra",it("browser"),n);try{window.open(n,"_blank","noopener")}catch{ce("Bloqueado pelo navegador")}};function He(n,t,e,i){let s=pt("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=pt("div","row");r.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let o=pt("input","fld");o.value=e,o.placeholder=it("search");let a=pt("button","go",Xt("enter"));a.setAttribute("aria-label",it("open")),a.title=it("open");let l=pt("button","go",Xt("external"));l.setAttribute("aria-label",it("open")),l.title=it("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(o,a,l);let c=pt("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let h=pt("div");h.style.cssText="flex:1;min-height:0;position:relative";let u=pt(At?"div":"iframe");At&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),h.appendChild(u),s.append(r,c,h);let f=m=>{let _=(m||"").trim();if(_){if(/^https?:\/\//i.test(_)||(_=/\.\w{2,}($|\/)/.test(_)?"https://"+_:"https://duckduckgo.com/?q="+encodeURIComponent(_)),o.value=_,At){u.dataset.url=_,c.style.display="none";return}u.src=_,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};return a.onclick=()=>f(o.value),o.addEventListener("keydown",m=>{m.key==="Enter"&&f(o.value)}),o.addEventListener("focus",()=>js(!0,o)),l.onclick=()=>xc(o.value),f(e),ci({id:n,title:t,node:s})}var Td=["https://pipedapi.kavin.rocks","https://pipedapi.leptons.xyz","https://pipedapi.nosebs.ru","https://pipedapi.adminforge.de","https://api.piped.private.coffee","https://pipedapi.reallyaweso.me"],Ad=["https://inv.nadeko.net/api/v1","https://inv.tux.pizza/api/v1"],Fn=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function oo(n,t=11e3){let e=new AbortController,i=setTimeout(()=>e.abort(),t);try{let s=await fetch(n,{signal:e.signal});if(!s.ok)throw new Error("http");return await s.json()}finally{clearTimeout(i)}}function Rd(n,t){if(t)return"AO VIVO";if(n==null||n<0)return"";n=Math.round(n);let e=Math.floor(n/3600),i=Math.floor(n%3600/60),s=n%60,r=o=>String(o).padStart(2,"0");return e?`${e}:${r(i)}:${r(s)}`:`${i}:${r(s)}`}function Cd(n){return n=Number(n),!n||n<0?"":n>=1e6?(n/1e6).toFixed(1).replace(".",",")+" mi":n>=1e3?Math.round(n/1e3)+" mil":String(n)}function dv(n){let t=String(n||"").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)||String(n||"").match(/^([\w-]{11})$/);return t?t[1]:null}function Pd(n){let t=String(n.url||"").match(/[?&]v=([\w-]{11})/);return!t||!n.title?null:{id:t[1],title:n.title,thumb:n.thumbnail||`https://i.ytimg.com/vi/${t[1]}/hqdefault.jpg`,chan:n.uploaderName||"",dur:Rd(n.duration,n.isLive),live:!!n.isLive,views:Cd(n.views)}}function Ld(n){if(!n.videoId||!n.title)return null;let t=(n.videoThumbnails||[]).find(e=>e.quality==="medium")||(n.videoThumbnails||[])[0]||{};return{id:n.videoId,title:n.title,thumb:t.url,chan:n.author||"",dur:Rd(n.lengthSeconds,n.liveNow),live:!!n.liveNow,views:Cd(n.viewCount)}}async function Id(n){for(let t of Td)try{let i=((await oo(`${t}/search?q=${encodeURIComponent(n)}&filter=videos`)).items||[]).map(Pd).filter(Boolean);if(i.length)return i}catch{}for(let t of Ad)try{let e=await oo(`${t}/search?q=${encodeURIComponent(n)}&type=video`),i=(Array.isArray(e)?e:[]).map(Ld).filter(Boolean);if(i.length)return i}catch{}throw new Error("offline")}async function fv(){for(let n of Td)try{let t=await oo(`${n}/trending?region=BR`),e=(Array.isArray(t)?t:[]).map(Pd).filter(Boolean);if(e.length)return e}catch{}for(let n of Ad)try{let t=await oo(`${n}/popular?region=BR`),e=(Array.isArray(t)?t:[]).map(Ld).filter(Boolean);if(e.length)return e}catch{}return Id("em alta brasil")}var zn=null,ss=null;function pc(){try{zn&&zn.unMute&&(zn.unMute(),zn.setVolume&&zn.setVolume(100))}catch{}}function pv(){return ss||(ss=new Promise((n,t)=>{if(window.YT&&window.YT.Player)return n(window.YT);let e=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{e&&e(),ss=null,n(window.YT)};let i=document.createElement("script");i.src="https://www.youtube.com/iframe_api",i.onerror=()=>{ss=null,t(new Error("api"))},document.head.appendChild(i),setTimeout(()=>{window.YT&&window.YT.Player||(ss=null,t(new Error("timeout")))},9e3)}),ss)}function mc(){try{zn&&zn.destroy&&zn.destroy()}catch{}zn=null}function Dd(){let n=pt("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f12";let t=pt("div","row");t.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let e=pt("button","go",Xt("back"));e.setAttribute("aria-label","Voltar"),e.title="Voltar",e.style.display="none";let i=pt("input","fld");i.placeholder="Pesquisar no YouTube ou colar link";let s=pt("button","go",Xt("search"));s.setAttribute("aria-label",it("searchYt")),s.title=it("searchYt");let r=pt("button","go",Xt("external"));r.setAttribute("aria-label","Abrir fora"),r.title="Abrir fora",r.style.background="rgba(255,255,255,.12)",r.style.color="#fff",t.append(e,i,s,r);let o=pt("div","yt-chips"),a=pt("div","yt-scroll");n.append(t,o,a);let l=["M\xFAsica","Jogos","VR 360","Not\xEDcias","Ao vivo","Filmes"];o.innerHTML=l.map(E=>`<button class="yt-chip" data-q="${E}">${E}</button>`).join(""),o.addEventListener("click",E=>{let T=E.target.closest("[data-q]");T&&(i.value=T.dataset.q,p(T.dataset.q))});let c=[],h="",u=null,f=0,m=()=>{a.innerHTML=`<div class="yt-grid">${'<span class="yt-card"><span class="yt-thumb yt-skel"></span><span class="yt-meta"><span class="yt-skel-l"></span><span class="yt-skel-l short"></span></span></span>'.repeat(6)}</div>`},_=E=>`<button class="yt-card" data-v="${E.id}"><span class="yt-thumb">${E.thumb?`<img loading="lazy" src="${E.thumb}" alt="">`:""}`+(E.dur?`<span class="yt-dur${E.live?" live":""}">${Fn(E.dur)}</span>`:"")+`</span><span class="yt-meta"><span class="yt-t">${Fn(E.title)}</span><span class="yt-c">${Fn(E.chan)}${E.views?" \xB7 "+Fn(E.views):""}</span></span></button>`;function g(E,T){mc(),u=null,c=T,e.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-sec">${Fn(E)}</div><div class="yt-grid">${T.map(_).join("")}</div>`}function d(E){e.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-err"><div style="display:grid;place-items:center;font-size:46px">${Xt("wifi")}</div><div class="yt-err-t">Sem conex\xE3o com a busca</div><div class="yt-err-s">Verifique a internet e tente de novo. D\xE1 para colar um link direto tamb\xE9m.</div><button class="yt-btn" data-retry>${io("refresh","TENTAR DE NOVO")}</button></div>`,a.querySelector("[data-retry]").onclick=()=>E?p(E):S()}async function p(E){if(E=(E||"").trim(),!E)return;let T=dv(E);if(T)return v({id:T,title:"V\xEDdeo do YouTube",chan:"",dur:"",views:""});let A=++f;m();try{let G=await Id(E);if(A!==f)return;h=`Resultados para \u201C${E}\u201D`,g(h,G)}catch{A===f&&d(E)}}async function S(){let E=++f;m();try{let T=await fv();if(E!==f)return;h="Em alta no Brasil",g(h,T)}catch{E===f&&d(null)}}function v(E){u=E,c.length||(c=[E]),e.style.display="",o.style.display="none",a.innerHTML=`<div class="yt-player">
        <div class="yt-holder yt-frame"></div>
        <div class="yt-info">
          <div class="yt-ptitle">${Fn(E.title)}</div>
          ${E.chan?`<div class="yt-pchan">${Fn(E.chan)}${E.views?" \xB7 "+Fn(E.views):""}</div>`:""}
          <div class="yt-prow">
            <button class="yt-btn" data-back>${io("back","VOLTAR")}</button>
            <button class="yt-btn" data-snd>${io("volume","ATIVAR SOM")}</button>
            <button class="yt-btn" data-out>${io("external","ABRIR")}</button>
          </div>
          <p class="yt-pchan" style="margin-top:10px">Use o controle de som com a m\xE3o e ajuste o volume pelas teclas do Android.</p>
        </div></div>`;let T=a.querySelector(".yt-holder");if(a.querySelector("[data-back]").onclick=()=>{mc(),g(h||"Em alta no Brasil",c)},a.querySelector("[data-out]").onclick=()=>xc("https://www.youtube.com/watch?v="+E.id),a.querySelector("[data-snd]").onclick=pc,At){let G=pt("div");G.dataset.nativeBrowser="youtube-player",G.dataset.url="https://www.youtube.com/embed/"+E.id+"?autoplay=1&playsinline=1",G.style.cssText="width:100%;height:100%",T.append(G),a.querySelector("[data-snd]").onclick=()=>{window.NativeXR.click(),ce("Use Android media volume to adjust sound.")};return}pv().then(G=>{if(u===E)try{zn=new G.Player(T,{videoId:E.id,playerVars:{autoplay:1,playsinline:1,rel:0,mute:0,modestbranding:1,enablejsapi:1},events:{onReady:b=>{try{b.target.unMute(),b.target.setVolume(100),b.target.playVideo()}catch{}setTimeout(pc,350)},onError:A}})}catch{A()}}).catch(A);function A(){u!==E||T.dataset.fb||(T.dataset.fb="1",T.innerHTML=`<iframe class="yt-frame" title="${Fn(E.title)}" src="https://www.youtube-nocookie.com/embed/${E.id}?autoplay=1&mute=0&playsinline=1&rel=0&enablejsapi=1" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`)}setTimeout(pc,600)}a.addEventListener("click",E=>{let T=E.target.closest("[data-v]");if(!T)return;let A=c.find(G=>G.id===T.dataset.v);A&&v(A)}),e.onclick=()=>g(h||"Em alta no Brasil",c),s.onclick=()=>p(i.value),r.onclick=()=>xc(u?"https://www.youtube.com/watch?v="+u.id:"https://m.youtube.com/results?search_query="+encodeURIComponent(i.value||"")),i.addEventListener("focus",()=>js(!0,i)),i.addEventListener("keydown",E=>{E.key==="Enter"&&p(i.value)}),S();let R=ci({id:"youtube",title:"YouTube",node:n});return ve("wins",()=>{se.some(E=>E.id==="youtube")||mc()}),R}var so=[];function Nd(){let n=pt("div","pad"),t=pt("div");t.innerHTML=`<h2>${it("gallery")}</h2><p class="sub">${it("photosHelp")}</p>`;let e=pt("button","go",it("pickPhotos")),i=pt("input");i.type="file",i.accept="image/*",i.multiple=!0,i.style.display="none";let s=pt("div","grid4");s.style.marginTop="20px";let r=pt("div");r.style.cssText="margin-top:18px";let o=()=>{if(s.innerHTML="",!so.length){s.innerHTML=`<p class="sub" style="grid-column:1/-1">${it("noPhotos")}</p>`;return}so.forEach((a,l)=>{let c=pt("button","thumb");c.innerHTML=`<img src="${a}" alt="">`,c.onclick=()=>{r.innerHTML=`<img src="${a}" style="width:100%;border-radius:16px">`},s.appendChild(c)})};return e.onclick=()=>i.click(),i.onchange=()=>{for(let a of i.files)so.push(URL.createObjectURL(a));o(),ce(so.length+" fotos")},o(),n.append(t,e,i,s,r),n.append(pt("p","note","Na web, o Android pede as fotos pelo seletor do sistema \u2014 \xE9 a forma correta e n\xE3o precisa de permiss\xE3o extra. No app Android use READ_MEDIA_IMAGES e liste direto no MediaStore.")),ci({id:"gallery",title:it("gallery"),node:n})}function ke(n,t,e){let i=pt("div","opt");return i.append(pt("div","opt-l",`<div class="opt-t">${n}</div>${t?`<div class="opt-d">${t}</div>`:""}`),e),i}function gc(n,t){let e=pt("button","sw");return e.dataset.on=Ot[n]?"1":"0",e.onclick=()=>{Ot[n]=Ot[n]?0:1,e.dataset.on=Ot[n]?"1":"0",Vs(),t&&t(Ot[n])},e}function rs(n,t,e,i,s){let r=pt("input");return r.type="range",r.min=t,r.max=e,r.step=i,r.value=Ot[n],r.oninput=()=>{Ot[n]=+r.value,Vs(),s&&s(Ot[n])},r}function ro(){let n=pt("div");n.style.cssText="display:flex;flex-direction:column;height:100%";let t=pt("div","tabs");t.style.padding="18px 24px 0";let e=pt("div","pad");e.style.paddingTop="6px",n.append(t,e);let i=[[it("general"),()=>{e.innerHTML=`<h2>${it("general")}</h2><p class="sub">Next VR \xB7 shell XR para Android</p>`;let o=pt("div","card"),a=pt("button","seg-btn",za(Ot.lang||"pt").label);a.onclick=()=>{let l=ci({id:"language-pick",title:it("langTitle"),w:880,h:660,node:Vd(Ot.lang||"pt",c=>{Fl(c),ce(it("langChanged")),r(),Ks(l)},!0)})},o.append(ke(it("language"),"Mesma tela do primeiro uso",a)),o.append(ke("FPS","Mostrar contador",gc("showFps"))),e.append(o),e.append(pt("p","note","Shizuku: abrir apps Android instalados s\xF3 existe no app nativo. Nesta vers\xE3o web o navegador n\xE3o tem como iniciar outro app."))}],[it("hands"),()=>{e.innerHTML=`<h2>${it("hands")}</h2><p class="sub">C\xE2mera traseira, MediaPipe.</p>`;let o=pt("div","card");o.append(ke(it("on"),"\xDAnica entrada da interface VR",pt("span","note","Sempre ativo"))),o.append(ke(it("sens"),"MediaPipe nativo \xB7 c\xE2mera traseira",pt("span","note","2 m\xE3os \xB7 21 landmarks"))),o.append(ke("Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",gc("handDraw"))),o.append(ke("Pinch","Entrada nativa est\xE1vel com histerese",pt("span","note","0.30 / 0.48"))),o.append(ke("Detector","MediaPipe Tasks Vision, 2 m\xE3os por frame",pt("span","note","NextVR"))),e.append(o)}],[it("windows"),()=>{e.innerHTML=`<h2>${it("windows")}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;let o=pt("div","card");o.append(ke(it("curve"),"1 = encara o centro; menor = mais aberta",rs("winCurve",0,1,.05))),o.append(ke("Inclina\xE7\xE3o","Ajuste vertical ao subir/descer",rs("winTilt",0,1.5,.05))),o.append(ke(it("scale"),"Tamanho das janelas",rs("winScale",.6,1.6,.05))),o.append(ke(it("dist"),"Dist\xE2ncia do arco",rs("winDist",At?.6:1.5,At?1.8:3.4,.05))),o.append(ke(it("win360"),it("win360k"),rs("win360K",.2,1.15,.05))),o.append(ke(it("win360All"),"O bot\xE3o 360\xB0 na barra da janela troca por janela",gc("win360"))),e.append(o)}],[it("dock"),()=>{e.innerHTML=`<h2>${it("dock")}</h2><p class="sub">No modo paisagem a dock chega mais perto.</p>`;let o=pt("div","card");o.append(ke(it("size"),null,rs("dockSize",.7,1.5,.05))),o.append(ke(it("dist"),null,rs("dockDist",.7,1.5,.05))),e.append(o)}],[it("env"),()=>{e.innerHTML="",e.append(pt("h2",null,it("env"))),e.append(pt("p","sub","Passthrough da c\xE2mera ou um panorama 360\xB0 em volta de voc\xEA."));let o=pt("div","grid3");for(let a of Su()){let l=pt("button","env"+(a.thumb?" env-pano":""));l.style.background=a.thumb?`url('${a.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",l.innerHTML=`<span>${a.name}</span>`,l.setAttribute("aria-pressed",Ot.env===a.id),l.onclick=()=>{Bl(a.id),[...o.children].forEach(c=>c.setAttribute("aria-pressed","false")),l.setAttribute("aria-pressed","true")},o.appendChild(l)}e.append(o)}],[it("perf"),()=>{e.innerHTML=`<h2>${it("perf")}</h2><p class="sub">Celular esquentando? Baixe a qualidade.</p>`;let o=pt("div","card"),a=pt("div","seg");for(let[l,c]of[["low","Baixa"],["auto","Autom\xE1tica"],["high","Alta"]]){let h=pt("button",null,c);h.setAttribute("aria-pressed",Ot.quality===l),h.onclick=()=>{Ot.quality=l,Vs(),xe("quality"),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true")},a.appendChild(h)}o.append(ke(it("quality"),"Resolu\xE7\xE3o de renderiza\xE7\xE3o",a)),e.append(o),e.append(pt("p","note","O hand tracking roda na pr\xF3pria cad\xEAncia (single-flight, sem fila), separado do render. Ative o contador de FPS para ver as duas taxas: render e tracking."))}]],s=0;function r(){t.innerHTML="",i.forEach(([o],a)=>{let l=pt("button",null,o);l.setAttribute("aria-selected",a===s),l.onclick=()=>{s=a,r()},t.appendChild(l)}),i[s][1]()}return r(),ci({id:"settings",title:it("settings"),node:n})}var Ud="nextvr.store.installed.v1",Od="nextvr.store.favs.v1",Fd="nextvr.lib.recent.v1",vc=n=>{try{let t=JSON.parse(localStorage.getItem(n));return Array.isArray(t)?t:[]}catch{return[]}},Hn=vc(Ud),as=vc(Od),os=vc(Fd),co=()=>{try{localStorage.setItem(Ud,JSON.stringify(Hn)),localStorage.setItem(Od,JSON.stringify(as)),localStorage.setItem(Fd,JSON.stringify(os))}catch{}},Ri={},Fr=[{id:"vrfs",name:"VRFS",label:"VRFS",cat:"Games \xB7 Sports \xB7 Futebol",img:"https://i.ytimg.com/vi/FxkDg2NGzqw/hqdefault.jpg",bg:"linear-gradient(160deg,#1d7a4b,#0c3a2b)",badge:'<span style="background:#e11d2e;border-radius:10px;padding:10px 24px;font-size:32px;font-weight:900;box-shadow:0 4px 18px #0009">VRFS</span>',mark:'<span style="font-size:34px;font-weight:900;font-style:italic;letter-spacing:-1px;text-shadow:0 2px 8px #0008">VRFS</span>'},{id:"minecraft",name:"Minecraft VR",label:"MINECRAFT",cat:"Games \xB7 Sandbox \xB7 Aventura",img:"https://minecraft.wiki/images/thumb/MC_key_art.png/800px-MC_key_art.png",bg:"linear-gradient(180deg,#6cb04a 0 30%,#7a5230 30%)",badge:"",mark:'<span style="font-size:23px;font-weight:900;letter-spacing:1px;text-shadow:0 2px 0 #222">MINECRAFT</span>'},{id:"roblox",name:"Roblox VR",label:"ROBLOX",cat:"Games \xB7 Social \xB7 Multiplayer",img:"",phones:!0,bg:"linear-gradient(145deg,#23232c,#101014)",badge:"",mark:'<span style="display:flex;align-items:center;gap:8px"><span style="width:34px;height:34px;background:#fff;border-radius:8px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:13px;height:13px;background:#c81e2b;border-radius:3px"></span></span><span style="font-size:24px;font-weight:900">ROBLOX</span></span>'},{id:"brawl",name:"Brawl Stars VR",label:"BRAWL STARS",cat:"Games \xB7 A\xE7\xE3o \xB7 Multiplayer",img:"https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/790/hero_bg_brawlstars.a385872a.webp",bg:"linear-gradient(115deg,#ffd02e 0 50%,#1280ff 50%)",badge:"",mark:'<span style="font-size:21px;font-weight:900;color:#111;text-shadow:0 1px 0 #fff">BRAWL<br>STARS \u2605</span>'}],ho=n=>Fr.find(t=>t.id===n),Bd=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">NETFLIX</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"pluto",name:"pluto tv",bg:"linear-gradient(145deg,#34343a,#111115)",html:'<span class="lx-pluto">pluto<i>tv</i></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X Twitter",label:"Twitter",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],mv=["netflix","youtube","vrfs","tiktok","minecraft","roblox","brawl","discord","twitch","prime","pluto","whatsapp","instagram","x","facebook","telegram","spotify","browser","store","gallery","settings"],uo=n=>{let t=se.find(e=>e.id===n);return t?t.el.querySelector(".win-body"):null},gv={youtube:()=>Dd(),browser:()=>He("browser",it("browser"),"https://duckduckgo.com/"),store:()=>zd(),gallery:()=>Nd(),settings:()=>ro(),discord:()=>He("discord","Discord","https://discord.com/app"),netflix:()=>He("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>He("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>He("twitch","Twitch","https://www.twitch.tv/"),prime:()=>He("prime","prime video","https://www.primevideo.com/"),pluto:()=>He("pluto","pluto tv","https://pluto.tv/"),whatsapp:()=>He("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>He("instagram","Instagram","https://www.instagram.com/"),x:()=>He("x","X Twitter","https://x.com/"),facebook:()=>He("facebook","Facebook","https://www.facebook.com/"),telegram:()=>He("telegram","Telegram","https://web.telegram.org/"),spotify:()=>He("spotify","Spotify","https://open.spotify.com/")},Ai="home",_v=[["home","Home"],["games","Games"],["apps","Apps"],["horizon","Horizon+"],["wish","Wish"]];function xv(){let n=()=>'<div style="width:96px;height:172px;background:#14141b;border-radius:10px;border:1px solid #383845;padding:9px;display:flex;flex-direction:column;gap:6px"><div style="height:9px;background:#33333f;border-radius:4px"></div><div style="height:9px;background:#33333f;border-radius:4px;width:70%"></div><div style="margin-top:auto;height:46px;background:linear-gradient(145deg,#c81e2b,#6f0f18);border-radius:7px"></div></div>';return`<div style="display:flex;gap:10px">${n()}${n()}${n()}</div>`}function vv(n){let t=n.img?`<img class="cov" src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",e=n.phones?xv():n.badge||"";return`<div class="st-cover" style="background:${n.bg}">${t}<div class="art">${e}</div>`+(Hn.includes(n.id)?'<span class="st-inst">INSTALADO</span>':"")+`<span class="st-vr">VR</span><span class="st-clabel">${n.label}</span></div>`}function yv(n){let t=n.img?`<img src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",e=n.id==="roblox"?'<span style="width:30px;height:30px;background:#fff;border-radius:7px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:12px;height:12px;background:#c81e2b;border-radius:3px"></span></span>':n.id==="vrfs"?"":`<span style="font-weight:900;font-size:13px;text-align:center;line-height:1.1">${n.label}</span>`;return`<span class="st-thumb" style="background:${n.bg}">${t}${e}</span>`}function wd(n){let t=Hn.includes(n.id),e=Ri[n.id],i=e!==void 0,s=as.includes(n.id),r=t?`<button class="st-btn" data-open="${n.id}">ABRIR</button><button class="st-btn" data-rm="${n.id}">REMOVER</button>`:`<button class="st-btn" data-dl="${n.id}" ${i?"disabled":""}>${i?"BAIXANDO "+Math.round(e)+"%":"ADICIONAR \xC0 BIBLIOTECA"}</button>`;return`<article class="st-card" data-card="${n.id}">${vv(n)}
    <div class="st-name">${n.name}</div><div class="st-meta">${n.cat}</div>
    <div class="st-sub">${t?"Na biblioteca de apps":"Toque para ver e baixar"}</div>
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${s?" on":""}" data-fav="${n.id}" aria-label="Favorito">${Xt("heart")}</button></div>
    <div class="st-row">${r}</div></article>`}function bv(){let n=pt("div","st"),e=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${_v.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${Ai===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${Xt("user")}</button><button class="st-x" data-x aria-label="Fechar">${Xt("x")}</button></div>`;if(Ai==="apps")e+=`<p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;else if(Ai==="horizon")e+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else if(Ai==="wish"){let i=Fr.filter(s=>as.includes(s.id));e+=i.length?`<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${i.map(wd).join("")}</div>`:'<p class="st-note">Selecione o \xEDcone de favorito de um jogo para salv\xE1-lo aqui.</p>'}else{let i=Fr.map((o,a)=>`<button class="st-ri" data-rank="${o.id}">${yv(o)}
      <span><span class="st-rk">${a+1}. ${o.name}</span><div class="st-cat">${o.cat}</div>
      <div class="st-st">${Hn.includes(o.id)?"Na biblioteca de apps":"Toque para ver e baixar"}</div></span></button>`).join(""),s=Fr.map(wd).join("");e+=`<div class="st-rank">${i}</div><div class="st-sec"><h3>${Ai==="games"?"Todos os jogos":"Jogos para voc\xEA"}</h3>`+(Ai==="home"?"<button data-all>Ver todos</button>":"")+`</div><div class="st-cards">${s}</div>`}return n.innerHTML=e,n.addEventListener("click",i=>{var o;let s=a=>i.target.closest(a),r;if(r=s("[data-tab]")){Ai=r.dataset.tab,Pi();return}if(s("[data-x]")){let a=se.find(l=>l.id==="store");a&&Ks(a);return}if(s("[data-ava]")){ce("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-all]")){Ai="games",Pi();return}if(s("[data-openlib]")){kd();return}if(r=s("[data-rank]")){(o=n.querySelector(`[data-card="${r.dataset.rank}"]`))==null||o.scrollIntoView({behavior:"smooth",block:"center"});return}if(r=s("[data-fav]")){let a=r.dataset.fav;as=as.includes(a)?as.filter(l=>l!==a):[...as,a],co(),Pi();return}if(r=s("[data-dl]")){Sv(r.dataset.dl);return}if(r=s("[data-rm]")){wv(r.dataset.rm);return}if(r=s("[data-open]")){let a=ho(r.dataset.open);ce(`Abrindo ${a.name}\u2026 (demonstra\xE7\xE3o)`),lo(a.id);return}}),n}function Pi(){var e;let n=uo("store");if(!n)return;let t=((e=n.querySelector(".st"))==null?void 0:e.scrollTop)||0;n.innerHTML="",n.appendChild(bv()),n.querySelector(".st").scrollTop=t}function Mv(n){let t=uo("store");t&&t.querySelectorAll(`[data-dl="${n}"]`).forEach(e=>{e.textContent="BAIXANDO "+Math.round(Ri[n]||0)+"%"})}function zd(){let n=se.find(i=>i.id==="store");if(n)return Pi(),On(n),n;let t=pt("div");t.style.cssText="height:100%";let e=ci({id:"store",title:"Store",node:t});return Pi(),e}function Sv(n){if(Ri[n]!==void 0||Hn.includes(n))return;Ri[n]=0,Pi();let t=ho(n);ce("Baixando "+t.name+"\u2026");let e=setInterval(()=>{if(Ri[n]=Math.min(100,Ri[n]+6+Math.random()*11),Ri[n]<100){Mv(n);return}clearInterval(e),delete Ri[n],Hn.includes(n)||Hn.push(n),lo(n,!0),co(),Pi(),kn(),ce(t.name+" foi para a biblioteca de apps com sucesso")},170)}function wv(n){Hn=Hn.filter(t=>t!==n),os=os.filter(t=>t!==n),co(),Pi(),kn(),ce(ho(n).name+" removido da biblioteca")}var ao="recent",Bn="all",Or="",_c=["all","games","apps","recent"],Ed={all:"Todas",games:"Jogos",apps:"Apps",recent:"Recentes"};function lo(n,t){os=[n,...os.filter(e=>e!==n)].slice(0,40),co(),t||kn()}function Ev(){let n=Fr.filter(o=>Hn.includes(o.id)).map(o=>({...o,kind:"game"})),t=Bd.map(o=>({...o,kind:"app"})),e=[...n,...t],i=o=>{let a=mv.indexOf(o);return a<0?99:a};e.sort((o,a)=>i(o.id)-i(a.id)),Bn==="games"&&(e=e.filter(o=>o.kind==="game")),Bn==="apps"&&(e=e.filter(o=>o.kind==="app")),Bn==="recent"&&(e=e.filter(o=>os.includes(o.id)));let s=Or.trim().toLowerCase();if(s&&(e=e.filter(o=>(o.name+" "+(o.label||"")).toLowerCase().includes(s))),ao==="az")return[...e].sort((o,a)=>o.name.localeCompare(a.name,"pt-BR"));let r=o=>{let a=os.indexOf(o);return a<0?1e6:a};return[...e].sort((o,a)=>r(o.id)-r(a.id))}function Tv(n){let t=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${Xt(n.icon)}</span>`:"",e=n.html?n.html:t||`<span class="nm">${n.label||n.name}</span>`,i=n.slug?`${t}<span class="nm fb">${n.label||n.name}</span>`:e;return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand">${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function Av(n){let t=n.img?`<img class="lib-game-cover" src="${n.img}" alt="" loading="lazy" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"";return`<button class="lib-tile game" data-game="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}">${t}<span class="lib-art">${n.mark}</span><span class="lib-vr">VR</span></span><span class="lib-label">${n.name}</span></button>`}function Rv(){let n=Ev(),t=pt("div","lib"),e=Ed[Bn]||Ed.all,i=(r,o,a)=>`<button class="lib-nav" data-nav="${r}" title="${o}" aria-label="${o}" aria-pressed="${Bn===r}">${Xt(a)}</button>`;t.innerHTML=`<nav class="lib-rail" aria-label="Navega\xE7\xE3o da biblioteca">
      ${i("all","Todas as aplica\xE7\xF5es","appGrid")}
      ${i("apps","Aplicativos","device")}
      ${i("games","Jogos","controller")}
      ${i("recent","Recentes","timer")}
      <span class="lib-rail-spacer"></span>
      <button class="lib-nav lib-nav-store" data-app="store" title="Store" aria-label="Abrir Store">${Xt("store")}</button>
    </nav>
    <section class="lib-main">
      <div class="lib-head"><h2 class="lib-title">Apps</h2>
        <button class="lib-sbtn" data-s aria-label="Buscar">${Xt("search")}</button>
        <input class="lib-search" data-q placeholder="Buscar" value="${Fn(Or)}">
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort>${ao==="az"?"A\u2013Z":"Recentes"} ${Xt("chevronDown")}</button>
        <button class="lib-pill" data-filter>${e} \xB7 ${n.length} ${Xt("chevronDown")}</button>
      </div>
      <div class="lib-scroll"><div class="lib-grid">${n.map(r=>r.kind==="game"?Av(r):Tv(r)).join("")}</div>
      ${n.length?"":`<div class="lib-empty">${Bn==="games"?"Nenhum jogo baixado ainda. Baixe um na Store.":Bn==="recent"?"Os apps usados recentemente v\xE3o aparecer aqui.":"Nenhum app encontrado."}</div>`}
      </div>
    </section>`;let s=t.querySelector("[data-q]");return Or&&s.classList.add("open"),s.addEventListener("input",()=>{var o;Or=s.value,kn(!0);let r=(o=uo("library"))==null?void 0:o.querySelector("[data-q]");r&&(r.focus(),r.setSelectionRange(r.value.length,r.value.length))}),s.addEventListener("focus",()=>js(!0,s)),t.addEventListener("click",r=>{let o=l=>r.target.closest(l),a;if(o("[data-s]")){let l=t.querySelector("[data-q]");l.classList.toggle("open"),l.classList.contains("open")?l.focus():(Or="",l.value="",kn());return}if(a=o("[data-nav]")){Bn=a.dataset.nav,kn();return}if(o("[data-sort]")){ao=ao==="az"?"recent":"az",kn();return}if(o("[data-filter]")){Bn=_c[(_c.indexOf(Bn)+1)%_c.length],kn();return}if(a=o("[data-game]")){let l=ho(a.dataset.game);lo(l.id),ce(`Abrindo ${l.name}\u2026 (demonstra\xE7\xE3o)`);return}if(a=o("[data-app]")){let l=Bd.find(h=>h.id===a.dataset.app);if(!l)return;lo(l.id);let c=gv[l.id];c?c():ce(l.name+": sem endere\xE7o cadastrado");return}}),t}function kn(n){var i;let t=uo("library");if(!t)return;let e=((i=t.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;t.innerHTML="",t.appendChild(Rv()),t.querySelector(".lib-scroll").scrollTop=e}function kd(){let n=se.find(i=>i.id==="library");if(n)return kn(),On(n),n;let t=pt("div");t.style.cssText="height:100%";let e=ci({id:"library",title:it("apps"),node:t});return kn(),e}var Qs=Object.freeze({bell:Xt("notification"),kb:Xt("keyboard"),center:Xt("crosshair"),compass:Xt("compass"),store:Xt("store"),people:Xt("people"),camera:Xt("camera"),gear:Xt("settings"),play:Xt("play")});function Hd(){gd([{kind:"avatar",id:"profile",label:it("profile"),run:ro},{kind:"status",id:"status",label:it("settings"),run:ro},{id:"browser",win:"browser",label:it("browser"),svg:Qs.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>He("browser",it("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:it("store"),svg:Qs.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:zd},{id:"discord",win:"discord",label:"Discord",svg:Qs.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>He("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:it("gallery"),svg:Qs.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:Nd},{id:"settings",win:"settings",label:it("settings"),svg:Qs.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:ro},{id:"youtube",win:"youtube",label:"YouTube",svg:Qs.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:Dd},{id:"library",win:"library",launcher:!0,label:it("apps"),run:kd}])}ve("lang",Hd);var Cv=document.getElementById("boot"),_y=document.getElementById("bootGo"),Ci=null;Cv.hidden=!0;function Pv(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function Vd(n,t,e=!1){let i=pt("div",e?"langwin slim":"langwin"),s=o=>za(o).label;return(()=>{i.innerHTML=`<div class="lq-head"><span class="lq-pick">${s(n)}</span><span class="lq-title">${it("langTitle")}</span></div>
      <div class="lq-main">
        <div class="lang-options" role="list">${xr.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${it("langSoon")}</i>`}</button>`).join("")}</div>
        <div class="lq-art"><img src="./hand-controller.png" alt=""></div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">Aponte com a m\xE3o e fa\xE7a uma pin\xE7a para escolher.</span>
        <button class="lq-go">${it("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>t(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>t(n)})(),i}function Lv(){var t,e;let n=ci({id:"language",title:"Next VR",w:880,h:660,onboarding:!0,node:Vd(Ot.lang||Pv(),Iv)});return(t=n.el.querySelector('[data-act="close"]'))==null||t.remove(),(e=n.el.querySelector('[data-act="pin"]'))==null||e.remove(),n}ve("handframe",n=>{let t=Ci==null?void 0:Ci.el.querySelector(".lang-tracking"),e=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";t&&t.textContent!==e&&(t.textContent=e)});async function Iv(n){if(!Ci)return;Fl(n),Ci&&(Ks(Ci),Ci=null),eo(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let t=br(),e=Ot.handsOn?Er():Promise.resolve(!1);await Promise.allSettled([t,e]),setTimeout(()=>Mr(),280)}document.getElementById("btnGyro").onclick=()=>br();document.getElementById("btnHand").onclick=()=>Gu()?Yl():Er();ve("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});ve("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Hd();Ot.lang?(eo(!0),At&&(br(),Ot.handsOn&&Er()),document.getElementById("perm").hidden=!1,setTimeout(()=>Mr(),280)):(eo(!1),document.getElementById("stat").hidden=!0,Ci=Lv());At&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,t;(t=(n=yr).invalidate)==null||t.call(n),br(),Ot.handsOn&&Er()},window.nextvrSuspend=()=>{Yl()},ve("hands",()=>{document.getElementById("perm").hidden=!0}));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

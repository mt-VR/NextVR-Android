(()=>{var zd=0,Mc=1,kd=2;var Xh=1,Hd=2,Yn=3,vi=0,tn=1,$n=2;var gi=0,ws=1,Sc=2,wc=3,Ec=4,Vd=5,Oi=100,Gd=101,Wd=102,Tc=103,Ac=104,Xd=200,qd=201,Yd=202,$d=203,Wo=204,Xo=205,Zd=206,Jd=207,Kd=208,jd=209,Qd=210,tf=211,ef=212,nf=213,sf=214,rf=0,af=1,of=2,aa=3,lf=4,cf=5,hf=6,uf=7,qh=0,df=1,ff=2,_i=0,pf=1,mf=2,gf=3,_f=4,xf=5,vf=6;var Yh=300,As=301,Rs=302,qo=303,Yo=304,Aa=306,$o=1e3,wn=1001,Zo=1002,qe=1003,Rc=1004;var mo=1005;var fn=1006,yf=1007;var or=1008;var xi=1009,bf=1010,Mf=1011,El=1012,$h=1013,fi=1014,pi=1015,lr=1016,Zh=1017,Jh=1018,Bi=1020,Sf=1021,En=1023,wf=1024,Ef=1025,zi=1026,Cs=1027,Tf=1028,Kh=1029,Af=1030,jh=1031,Qh=1033,go=33776,_o=33777,xo=33778,vo=33779,Cc=35840,Pc=35841,Lc=35842,Ic=35843,tu=36196,Dc=37492,Nc=37496,Uc=37808,Oc=37809,Fc=37810,Bc=37811,zc=37812,kc=37813,Hc=37814,Vc=37815,Gc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,$c=37821,yo=36492,Zc=36494,Jc=36495,Rf=36283,Kc=36284,jc=36285,Qc=36286;var oa=2300,la=2301,bo=2302,th=2400,eh=2401,nh=2402;var eu=3e3,ki=3001,Cf=3200,Pf=3201,Lf=0,If=1,pn="",De="srgb",Kn="srgb-linear",Tl="display-p3",Ra="display-p3-linear",ca="linear",ce="srgb",ha="rec709",ua="p3";var ss=7680;var ih=519,Df=512,Nf=513,Uf=514,nu=515,Of=516,Ff=517,Bf=518,zf=519,sh=35044;var rh="300 es",Jo=1035,Zn=2e3,da=2001,yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=1234567,ir=Math.PI/180,cr=180/Math.PI;function Ds(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function Ye(n,t,e){return Math.max(t,Math.min(e,n))}function Al(n,t){return(n%t+t)%t}function kf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Hf(n,t,e){return n!==t?(e-n)/(t-n):0}function sr(n,t,e){return(1-e)*n+e*t}function Vf(n,t,e,i){return sr(n,t,1-Math.exp(-e*i))}function Gf(n,t=1){return t-Math.abs(Al(n,t*2)-t)}function Wf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Xf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function qf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Yf(n,t){return n+Math.random()*(t-n)}function $f(n){return n*(.5-Math.random())}function Zf(n){n!==void 0&&(ah=n);let t=ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jf(n){return n*ir}function Kf(n){return n*cr}function Ko(n){return(n&n-1)===0&&n!==0}function jf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qf(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ys(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function We(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var iu={DEG2RAD:ir,RAD2DEG:cr,generateUUID:Ds,clamp:Ye,euclideanModulo:Al,mapLinear:kf,inverseLerp:Hf,lerp:sr,damp:Vf,pingpong:Gf,smoothstep:Wf,smootherstep:Xf,randInt:qf,randFloat:Yf,randFloatSpread:$f,seededRandom:Zf,degToRad:Jf,radToDeg:Kf,isPowerOfTwo:Ko,ceilPowerOfTwo:jf,floorPowerOfTwo:fa,setQuaternionFromProperEuler:Qf,normalize:We,denormalize:ys},$t=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=s[0],f=s[3],p=s[6],w=s[1],v=s[4],R=s[7],E=s[2],T=s[5],A=s[8];return r[0]=o*_+a*w+l*E,r[3]=o*f+a*v+l*T,r[6]=o*p+a*R+l*A,r[1]=c*_+h*w+u*E,r[4]=c*f+h*v+u*T,r[7]=c*p+h*R+u*A,r[2]=d*_+m*w+g*E,r[5]=d*f+m*v+g*T,r[8]=d*p+m*R+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mo=new Ht;function su(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tp(){let n=pa("canvas");return n.style.display="block",n}var oh={};function rr(n){n in oh||(oh[n]=!0,console.warn(n))}var lh=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[Kn]:{transfer:ca,primaries:ha,toReference:n=>n,fromReference:n=>n},[De]:{transfer:ce,primaries:ha,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ra]:{transfer:ca,primaries:ua,toReference:n=>n.applyMatrix3(ch),fromReference:n=>n.applyMatrix3(lh)},[Tl]:{transfer:ce,primaries:ua,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ch),fromReference:n=>n.applyMatrix3(lh).convertLinearToSRGB()}},ep=new Set([Kn,Ra]),ie={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ep.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Fr[t].toReference,s=Fr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Fr[n].primaries},getTransfer:function(n){return n===pn?ca:Fr[n].transfer}};function Es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function So(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rs,ma=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=pa("canvas")),rs.width=t.width,rs.height=t.height;let i=rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Es(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Es(e[i]/255)*255):e[i]=Es(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},np=0,ga=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ds(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wo(s[o].image)):r.push(wo(s[o]))}else r=wo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ma.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ip=0,Tn=class n extends yi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=wn,s=wn,r=fn,o=or,a=En,l=xi,c=n.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Ds(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ki?De:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $o:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $o:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?ki:eu}set encoding(t){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ki?De:pn}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Yh;Tn.DEFAULT_ANISOTROPY=1;var Ne=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,R=(m+1)/2,E=(p+1)/2,T=(h+d)/4,A=(u+_)/4,G=(g+f)/4;return v>R&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=A/i):R>E?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=T/s,r=G/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=G/r),this.set(i,s,r,e),this}let w=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends yi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ki?De:pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends jo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},_a=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qo=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Je=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let f=1-a,p=l*d+c*m+h*g+u*_,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),T=Math.atan2(E,p*w);f=Math.sin(f*T)/E,a=Math.sin(a*T)/E}let R=a*w;if(l=l*f+d*R,c=c*f+m*R,h=h*f+g*R,u=u*f+_*R,f===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-a*m,t[e+2]=c*g+h*m+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eo=new L,hh=new Je,Hi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),zr.subVectors(this.max,Qs),as.subVectors(t.a,Qs),os.subVectors(t.b,Qs),ls.subVectors(t.c,Qs),li.subVectors(os,as),ci.subVectors(ls,os),Li.subVectors(as,ls);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Li.z,Li.y,li.z,0,-li.x,ci.z,0,-ci.x,Li.z,0,-Li.x,-li.y,li.x,0,-ci.y,ci.x,0,-Li.y,Li.x,0];return!To(e,as,os,ls,zr)||(e=[1,0,0,0,1,0,0,0,1],!To(e,as,os,ls,zr))?!1:(kr.crossVectors(li,ci),e=[kr.x,kr.y,kr.z],To(e,as,os,ls,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,Br=new Hi,as=new L,os=new L,ls=new L,li=new L,ci=new L,Li=new L,Qs=new L,zr=new L,kr=new L,Ii=new L;function To(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sp=new Hi,tr=new L,Ao=new L,hr=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):sp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(tr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Ao)),this.expandByPoint(tr.copy(t.center).sub(Ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new L,Ro=new L,Hr=new L,hi=new L,Co=new L,Vr=new L,Po=new L,xa=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ro.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Ro);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=hi.dot(this.direction),l=-hi.dot(Hr),c=hi.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ro).addScaledVector(Hr,d),m}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,s,r){Co.subVectors(e,t),Vr.subVectors(i,t),Po.crossVectors(Co,Vr);let o=this.direction.dot(Po),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);let l=a*this.direction.dot(Vr.crossVectors(hi,Vr));if(l<0)return null;let c=a*this.direction.dot(Co.cross(hi));if(c<0||l+c>o)return null;let h=-a*hi.dot(Po);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,f)}set(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rp,t,ap)}lookAt(t,e,i){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ui.crossVectors(i,an),ui.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ui.crossVectors(i,an)),ui.normalize(),Gr.crossVectors(an,ui),s[0]=ui.x,s[4]=Gr.x,s[8]=an.x,s[1]=ui.y,s[5]=Gr.y,s[9]=an.y,s[2]=ui.z,s[6]=Gr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],f=i[10],p=i[14],w=i[3],v=i[7],R=i[11],E=i[15],T=s[0],A=s[4],G=s[8],b=s[12],S=s[1],O=s[5],q=s[9],tt=s[13],P=s[2],D=s[6],H=s[10],X=s[14],W=s[3],V=s[7],J=s[11],Q=s[15];return r[0]=o*T+a*S+l*P+c*W,r[4]=o*A+a*O+l*D+c*V,r[8]=o*G+a*q+l*H+c*J,r[12]=o*b+a*tt+l*X+c*Q,r[1]=h*T+u*S+d*P+m*W,r[5]=h*A+u*O+d*D+m*V,r[9]=h*G+u*q+d*H+m*J,r[13]=h*b+u*tt+d*X+m*Q,r[2]=g*T+_*S+f*P+p*W,r[6]=g*A+_*O+f*D+p*V,r[10]=g*G+_*q+f*H+p*J,r[14]=g*b+_*tt+f*X+p*Q,r[3]=w*T+v*S+R*P+E*W,r[7]=w*A+v*O+R*D+E*V,r[11]=w*G+v*q+R*H+E*J,r[15]=w*b+v*tt+R*X+E*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*m-i*l*m)+_*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+f*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],w=u*f*c-_*d*c+_*l*m-a*f*m-u*l*p+a*d*p,v=g*d*c-h*f*c-g*l*m+o*f*m+h*l*p-o*d*p,R=h*_*c-g*u*c+g*a*m-o*_*m-h*a*p+o*u*p,E=g*u*l-h*_*l-g*a*d+o*_*d+h*a*f-o*u*f,T=e*w+i*v+s*R+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=w*A,t[1]=(_*d*r-u*f*r-_*s*m+i*f*m+u*s*p-i*d*p)*A,t[2]=(a*f*r-_*l*r+_*s*c-i*f*c-a*s*p+i*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*m-i*l*m)*A,t[4]=v*A,t[5]=(h*f*r-g*d*r+g*s*m-e*f*m-h*s*p+e*d*p)*A,t[6]=(g*l*r-o*f*r-g*s*c+e*f*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*m+e*l*m)*A,t[8]=R*A,t[9]=(g*u*r-h*_*r-g*i*m+e*_*m+h*i*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*A,t[12]=E*A,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*f+e*u*f)*A,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*f-e*a*f)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,_=o*h,f=o*u,p=a*u,w=l*c,v=l*h,R=l*u,E=i.x,T=i.y,A=i.z;return s[0]=(1-(_+p))*E,s[1]=(m+R)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(m-R)*T,s[5]=(1-(d+p))*T,s[6]=(f+w)*T,s[7]=0,s[8]=(g+v)*A,s[9]=(f-w)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/o,u=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Zn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),m,g;if(a===Zn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===da)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Zn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,m=(i+s)*h,g,_;if(a===Zn)g=(o+r)*u,_=-2*u;else if(a===da)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},cs=new L,Mn=new se,rp=new L(0,0,0),ap=new L(1,1,1),ui=new L,Gr=new L,an=new L,uh=new se,dh=new Je,Qn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},op=0,fh=new L,hs=new Je,Wn=new se,Wr=new L,er=new L,lp=new L,cp=new Je,ph=new L(1,0,0),mh=new L(0,1,0),gh=new L(0,0,1),hp={type:"added"},up={type:"removed"},cn=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new Qn,i=new Je,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wr.copy(t):Wr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(er,Wr,this.up):Wn.lookAt(Wr,er,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Wn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(up)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};cn.DEFAULT_UP=new L(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new L,Xn=new L,Lo=new L,qn=new L,us=new L,ds=new L,_h=new L,Io=new L,Do=new L,No=new L,Xr=!1,bs=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Sn.subVectors(s,e),Xn.subVectors(i,e),Lo.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(Xn),l=Sn.dot(Lo),c=Xn.dot(Xn),h=Xn.dot(Lo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(t,e,i,s,r,o,a,l){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(t,e,i,s){return Sn.subVectors(i,e),Xn.subVectors(t,e),Sn.cross(Xn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Sn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,i),ds.subVectors(r,i),Io.subVectors(t,i);let l=us.dot(Io),c=ds.dot(Io);if(l<=0&&c<=0)return e.copy(i);Do.subVectors(t,s);let h=us.dot(Do),u=ds.dot(Do);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(us,o);No.subVectors(t,r);let m=us.dot(No),g=ds.dot(No);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ds,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return _h.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(_h,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(us,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Uo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=Al(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Uo(o,r,t+1/3),this.g=Uo(o,r,t),this.b=Uo(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let i=ru[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ie.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ye(Be.r*255,0,255))*65536+Math.round(Ye(Be.g*255,0,255))*256+Math.round(Ye(Be.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Be.copy(this),e);let i=Be.r,s=Be.g,r=Be.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=De){ie.fromWorkingColorSpace(Be.copy(this),t);let e=Be.r,i=Be.g,s=Be.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(qr);let i=sr(di.h,qr.h,e),s=sr(di.s,qr.s,e),r=sr(di.l,qr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Jt;Jt.NAMES=ru;var dp=0,Ps=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=ws,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ti=class extends Ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new L,Yr=new $t,mn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ys(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sh&&(t.usage=this.usage),t}};var va=class extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ya=class extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Jn=class extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}};var fp=0,dn=new se,Oo=new cn,fs=new L,on=new Hi,nr=new Hi,Pe=new L,Vi=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?ya:va)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(on.min,nr.min),on.expandByPoint(Pe),Pe.addVectors(on.max,nr.max),on.expandByPoint(Pe)):(on.expandByPoint(nr.min),on.expandByPoint(nr.max))}on.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(t,c),Pe.add(fs)),s=Math.max(s,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new L,h[S]=new L;let u=new L,d=new L,m=new L,g=new $t,_=new $t,f=new $t,p=new L,w=new L;function v(S,O,q){u.fromArray(s,S*3),d.fromArray(s,O*3),m.fromArray(s,q*3),g.fromArray(o,S*2),_.fromArray(o,O*2),f.fromArray(o,q*2),d.sub(u),m.sub(u),_.sub(g),f.sub(g);let tt=1/(_.x*f.y-f.x*_.y);isFinite(tt)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(tt),w.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(tt),c[S].add(p),c[O].add(p),c[q].add(p),h[S].add(w),h[O].add(w),h[q].add(w))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let S=0,O=R.length;S<O;++S){let q=R[S],tt=q.start,P=q.count;for(let D=tt,H=tt+P;D<H;D+=3)v(i[D+0],i[D+1],i[D+2])}let E=new L,T=new L,A=new L,G=new L;function b(S){A.fromArray(r,S*3),G.copy(A);let O=c[S];E.copy(O),E.sub(A.multiplyScalar(A.dot(O))).normalize(),T.crossVectors(G,O);let tt=T.dot(h[S])<0?-1:1;l[S*4]=E.x,l[S*4+1]=E.y,l[S*4+2]=E.z,l[S*4+3]=tt}for(let S=0,O=R.length;S<O;++S){let q=R[S],tt=q.start,P=q.count;for(let D=tt,H=tt+P;D<H;D+=3)b(i[D+0]),b(i[D+1]),b(i[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[m++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xh=new se,Di=new xa,$r=new hr,vh=new L,ps=new L,ms=new L,gs=new L,Fo=new L,Zr=new L,Jr=new $t,Kr=new $t,jr=new $t,yh=new L,bh=new L,Mh=new L,Qr=new L,ta=new L,Ze=class extends cn{constructor(t=new Vi,e=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Fo.fromBufferAttribute(u,t),o?Zr.addScaledVector(Fo,h):Zr.addScaledVector(Fo.sub(e),h))}e.add(Zr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!($r.containsPoint(Di.origin)===!1&&(Di.intersectSphere($r,vh)===null||Di.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(xh.copy(r).invert(),Di.copy(t.ray).applyMatrix4(xh),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],w=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let R=w,E=v;R<E;R+=3){let T=a.getX(R),A=a.getX(R+1),G=a.getX(R+2);s=ea(this,p,t,i,c,h,u,T,A,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let w=a.getX(f),v=a.getX(f+1),R=a.getX(f+2);s=ea(this,o,t,i,c,h,u,w,v,R),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],w=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let R=w,E=v;R<E;R+=3){let T=R,A=R+1,G=R+2;s=ea(this,p,t,i,c,h,u,T,A,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let w=f,v=f+1,R=f+2;s=ea(this,o,t,i,c,h,u,w,v,R),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function pp(n,t,e,i,s,r,o,a){let l;if(t.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===vi,a),l===null)return null;ta.copy(a),ta.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:n}}function ea(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ps),n.getVertexPosition(l,ms),n.getVertexPosition(c,gs);let h=pp(n,t,e,i,ps,ms,gs,Qr);if(h){s&&(Jr.fromBufferAttribute(s,a),Kr.fromBufferAttribute(s,l),jr.fromBufferAttribute(s,c),h.uv=bs.getInterpolation(Qr,ps,ms,gs,Jr,Kr,jr,new $t)),r&&(Jr.fromBufferAttribute(r,a),Kr.fromBufferAttribute(r,l),jr.fromBufferAttribute(r,c),h.uv1=bs.getInterpolation(Qr,ps,ms,gs,Jr,Kr,jr,new $t),h.uv2=h.uv1),o&&(yh.fromBufferAttribute(o,a),bh.fromBufferAttribute(o,l),Mh.fromBufferAttribute(o,c),h.normal=bs.getInterpolation(Qr,ps,ms,gs,yh,bh,Mh,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};bs.getNormal(ps,ms,gs,u.normal),h.face=u}return h}var dr=class n extends Vi{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Jn(c,3)),this.setAttribute("normal",new Jn(h,3)),this.setAttribute("uv",new Jn(u,2));function g(_,f,p,w,v,R,E,T,A,G,b){let S=R/A,O=E/G,q=R/2,tt=E/2,P=T/2,D=A+1,H=G+1,X=0,W=0,V=new L;for(let J=0;J<H;J++){let Q=J*O-tt;for(let ht=0;ht<D;ht++){let k=ht*S-q;V[_]=k*w,V[f]=Q*v,V[p]=P,c.push(V.x,V.y,V.z),V[_]=0,V[f]=0,V[p]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(ht/A),u.push(1-J/G),X+=1}}for(let J=0;J<G;J++)for(let Q=0;Q<A;Q++){let ht=d+Q+D*J,k=d+Q+D*(J+1),Y=d+(Q+1)+D*(J+1),lt=d+(Q+1)+D*J;l.push(ht,k,lt),l.push(k,Y,lt),W+=6}a.addGroup(m,W,b),m+=W,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ls(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Xe(n){let t={};for(let e=0;e<n.length;e++){let i=Ls(n[e]);for(let s in i)t[s]=i[s]}return t}function mp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function au(n){return n.getRenderTarget()===null?n.outputColorSpace:ie.workingColorSpace}var gp={clone:Ls,merge:Xe},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends Ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ba=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$e=class extends ba{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_s=-90,xs=1,tl=class extends cn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(_s,xs,t,e);s.layers=this.layers,this.add(s);let r=new $e(_s,xs,t,e);r.layers=this.layers,this.add(r);let o=new $e(_s,xs,t,e);o.layers=this.layers,this.add(o);let a=new $e(_s,xs,t,e);a.layers=this.layers,this.add(a);let l=new $e(_s,xs,t,e);l.layers=this.layers,this.add(l);let c=new $e(_s,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ma=class extends Tn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},el=class extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ki?De:pn),this.texture=new Ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dr(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:gi});r.uniforms.tEquirect.value=e;let o=new Ze(s,r),a=e.minFilter;return e.minFilter===or&&(e.minFilter=fn),new tl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Bo=new L,vp=new L,yp=new Ht,ln=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Bo.subVectors(i,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Bo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||yp.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new hr,na=new L,Sa=class{constructor(t=new ln,e=new ln,i=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],_=s[10],f=s[11],p=s[12],w=s[13],v=s[14],R=s[15];if(i[0].setComponents(l-r,d-c,f-m,R-p).normalize(),i[1].setComponents(l+r,d+c,f+m,R+p).normalize(),i[2].setComponents(l+o,d+h,f+g,R+w).normalize(),i[3].setComponents(l-o,d-h,f-g,R-w).normalize(),i[4].setComponents(l-a,d-u,f-_,R-v).normalize(),e===Zn)i[5].setComponents(l+a,d+u,f+_,R+v).normalize();else if(e===da)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ou(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function bp(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){let p=g[_];e?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var gn=class n extends Vi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let w=p*d-o;for(let v=0;v<c;v++){let R=v*u-r;g.push(R,-w,0),_.push(0,0,1),f.push(v/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let v=w+c*p,R=w+c*(p+1),E=w+1+c*(p+1),T=w+1+c*p;m.push(v,R,T),m.push(R,E,T)}this.setIndex(m),this.setAttribute("position",new Jn(g,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`
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
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
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
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,bm=`struct PhysicalMaterial {
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
}`,Mm=`
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Im=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Og=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Bg=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,kg=`#define MATCAP
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define NORMAL
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define STANDARD
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
}`,Yg=`#define TOON
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
}`,$g=`#define TOON
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
}`,Zg=`uniform float size;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,jg=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,t0=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Mp,alphahash_pars_fragment:Sp,alphamap_fragment:wp,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Ip,beginnormal_vertex:Dp,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:Op,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:kp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:$p,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Kp,colorspace_fragment:jp,colorspace_pars_fragment:Qp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:mm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_fragment:hm,lightmap_pars_fragment:um,lights_lambert_fragment:dm,lights_lambert_pars_fragment:fm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:_m,lights_phong_fragment:xm,lights_phong_pars_fragment:vm,lights_physical_fragment:ym,lights_physical_pars_fragment:bm,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:wm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Im,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Nm,morphcolor_vertex:Um,morphnormal_vertex:Om,morphtarget_pars_vertex:Fm,morphtarget_vertex:Bm,normal_fragment_begin:zm,normal_fragment_maps:km,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:$m,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:Km,project_vertex:jm,dithering_fragment:Qm,dithering_pars_fragment:tg,roughnessmap_fragment:eg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:ag,skinbase_vertex:og,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:ug,specularmap_pars_fragment:dg,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:xg,uv_vertex:vg,worldpos_vertex:yg,background_vert:bg,background_frag:Mg,backgroundCube_vert:Sg,backgroundCube_frag:wg,cube_vert:Eg,cube_frag:Tg,depth_vert:Ag,depth_frag:Rg,distanceRGBA_vert:Cg,distanceRGBA_frag:Pg,equirect_vert:Lg,equirect_frag:Ig,linedashed_vert:Dg,linedashed_frag:Ng,meshbasic_vert:Ug,meshbasic_frag:Og,meshlambert_vert:Fg,meshlambert_frag:Bg,meshmatcap_vert:zg,meshmatcap_frag:kg,meshnormal_vert:Hg,meshnormal_frag:Vg,meshphong_vert:Gg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:qg,meshtoon_vert:Yg,meshtoon_frag:$g,points_vert:Zg,points_frag:Jg,shadow_vert:Kg,shadow_frag:jg,sprite_vert:Qg,sprite_frag:t0},nt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Ln={basic:{uniforms:Xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Xe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Xe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Xe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Xe([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Xe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Xe([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Xe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Xe([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Xe([nt.common,nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Xe([nt.lights,nt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ln.physical={uniforms:Xe([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var ia={r:0,b:0,g:0};function e0(n,t,e,i,s,r,o){let a=new Jt(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(f,p){let w=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Aa)?(h===void 0&&(h=new Ze(new dr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ls(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ie.getTransfer(v.colorSpace)!==ce,(u!==v||d!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ze(new gn(2,2),new ei({name:"BackgroundMaterial",uniforms:Ls(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(ia,au(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(a,l)},render:g}}function n0(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null),c=l,h=!1;function u(P,D,H,X,W){let V=!1;if(o){let J=_(X,H,D);c!==J&&(c=J,m(c.object)),V=p(P,X,H,W),V&&w(P,X,H,W)}else{let J=D.wireframe===!0;(c.geometry!==X.id||c.program!==H.id||c.wireframe!==J)&&(c.geometry=X.id,c.program=H.id,c.wireframe=J,V=!0)}W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,G(P,D,H,X),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,D,H){let X=H.wireframe===!0,W=a[P.id];W===void 0&&(W={},a[P.id]=W);let V=W[D.id];V===void 0&&(V={},W[D.id]=V);let J=V[X];return J===void 0&&(J=f(d()),V[X]=J),J}function f(P){let D=[],H=[],X=[];for(let W=0;W<s;W++)D[W]=0,H[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,D,H,X){let W=c.attributes,V=D.attributes,J=0,Q=H.getAttributes();for(let ht in Q)if(Q[ht].location>=0){let Y=W[ht],lt=V[ht];if(lt===void 0&&(ht==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),ht==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),Y===void 0||Y.attribute!==lt||lt&&Y.data!==lt.data)return!0;J++}return c.attributesNum!==J||c.index!==X}function w(P,D,H,X){let W={},V=D.attributes,J=0,Q=H.getAttributes();for(let ht in Q)if(Q[ht].location>=0){let Y=V[ht];Y===void 0&&(ht==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ht==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let lt={};lt.attribute=Y,Y&&Y.data&&(lt.data=Y.data),W[ht]=lt,J++}c.attributes=W,c.attributesNum=J,c.index=X}function v(){let P=c.newAttributes;for(let D=0,H=P.length;D<H;D++)P[D]=0}function R(P){E(P,0)}function E(P,D){let H=c.newAttributes,X=c.enabledAttributes,W=c.attributeDivisors;H[P]=1,X[P]===0&&(n.enableVertexAttribArray(P),X[P]=1),W[P]!==D&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),W[P]=D)}function T(){let P=c.newAttributes,D=c.enabledAttributes;for(let H=0,X=D.length;H<X;H++)D[H]!==P[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function A(P,D,H,X,W,V,J){J===!0?n.vertexAttribIPointer(P,D,H,W,V):n.vertexAttribPointer(P,D,H,X,W,V)}function G(P,D,H,X){if(i.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let W=X.attributes,V=H.getAttributes(),J=D.defaultAttributeValues;for(let Q in V){let ht=V[Q];if(ht.location>=0){let k=W[Q];if(k===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let Y=k.normalized,lt=k.itemSize,xt=e.get(k);if(xt===void 0)continue;let _t=xt.buffer,Lt=xt.type,Dt=xt.bytesPerElement,wt=i.isWebGL2===!0&&(Lt===n.INT||Lt===n.UNSIGNED_INT||k.gpuType===$h);if(k.isInterleavedBufferAttribute){let Wt=k.data,N=Wt.stride,He=k.offset;if(Wt.isInstancedInterleavedBuffer){for(let yt=0;yt<ht.locationSize;yt++)E(ht.location+yt,Wt.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let yt=0;yt<ht.locationSize;yt++)R(ht.location+yt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let yt=0;yt<ht.locationSize;yt++)A(ht.location+yt,lt/ht.locationSize,Lt,Y,N*Dt,(He+lt/ht.locationSize*yt)*Dt,wt)}else{if(k.isInstancedBufferAttribute){for(let Wt=0;Wt<ht.locationSize;Wt++)E(ht.location+Wt,k.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Wt=0;Wt<ht.locationSize;Wt++)R(ht.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Wt=0;Wt<ht.locationSize;Wt++)A(ht.location+Wt,lt/ht.locationSize,Lt,Y,lt*Dt,lt/ht.locationSize*Wt*Dt,wt)}}else if(J!==void 0){let Y=J[Q];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(ht.location,Y);break;case 3:n.vertexAttrib3fv(ht.location,Y);break;case 4:n.vertexAttrib4fv(ht.location,Y);break;default:n.vertexAttrib1fv(ht.location,Y)}}}}T()}function b(){q();for(let P in a){let D=a[P];for(let H in D){let X=D[H];for(let W in X)g(X[W].object),delete X[W];delete D[H]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let D=a[P.id];for(let H in D){let X=D[H];for(let W in X)g(X[W].object),delete X[W];delete D[H]}delete a[P.id]}function O(P){for(let D in a){let H=a[D];if(H[P.id]===void 0)continue;let X=H[P.id];for(let W in X)g(X[W].object),delete X[W];delete H[P.id]}}function q(){tt(),h=!0,c!==l&&(c=l,m(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:tt,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:R,disableUnusedAttributes:T}}function i0(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function s0(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,R=o||t.has("OES_texture_float"),E=v&&R,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:R,floatVertexTextures:E,maxSamples:T}}function r0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ln,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let w=r?0:i,v=w*4,R=p.clippingState||null;l.value=R,R=h(g,d,v,m);for(let E=0;E!==v;++E)R[E]=e[E];p.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=l.value,g!==!0||f===null){let p=m+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,R=m;v!==_;++v,R+=4)o.copy(u[v]).applyMatrix4(w,a),o.normal.toArray(f,R),f[R+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function a0(n){let t=new WeakMap;function e(o,a){return a===qo?o.mapping=As:a===Yo&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===qo||a===Yo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new el(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var nl=class extends ba{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,Sh=[.125,.215,.35,.446,.526,.582],Fi=20,zo=new nl,wh=new Jt,ko=null,Ho=0,Vo=0,Ui=(1+Math.sqrt(5))/2,vs=1/Ui,Eh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ui,vs),new L(0,Ui,-vs),new L(vs,0,Ui),new L(-vs,0,Ui),new L(Ui,vs,0),new L(-Ui,vs,0)],wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ko=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ko,Ho,Vo),t.scissorTest=!1,sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ko=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:lr,format:En,colorSpace:Kn,depthBuffer:!1},s=Th(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o0(r)),this._blurMaterial=l0(r,t,e)}return s}_compileMaterial(t){let e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,i,s){let a=new $e(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wh),h.toneMapping=_i,h.autoClear=!1;let m=new ti({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Ze(new dr,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(wh),_=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;sa(s,w*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===As||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;sa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,zo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Eh[(s-1)%Eh.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ze(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):Fi;f>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Fi}`);let p=[],w=0;for(let A=0;A<Fi;++A){let G=A/_,b=Math.exp(-G*G/2);p.push(b),A===0?w+=b:A<f&&(w+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let R=this._sizeLods[s],E=3*R*(s>v-Ms?s-v+Ms:0),T=4*(this._cubeSize-R);sa(e,E,T,3*R,2*R),l.setRenderTarget(e),l.render(u,zo)}};function o0(n){let t=[],e=[],i=[],s=n,r=n-Ms+1+Sh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ms?l=Sh[o-n+Ms-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,w=new Float32Array(_*g*m),v=new Float32Array(f*g*m),R=new Float32Array(p*g*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,G=T>2?0:-1,b=[A,G,0,A+2/3,G,0,A+2/3,G+1,0,A,G,0,A+2/3,G+1,0,A,G+1,0];w.set(b,_*g*T),v.set(d,f*g*T);let S=[T,T,T,T,T,T];R.set(S,p*g*T)}let E=new Vi;E.setAttribute("position",new mn(w,_)),E.setAttribute("uv",new mn(v,f)),E.setAttribute("faceIndex",new mn(R,p)),t.push(E),s>Ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Th(n,t,e){let i=new jn(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function l0(n,t,e){let i=new Float32Array(Fi),s=new L(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ah(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Rh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function c0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===qo||l===Yo,h=l===As||l===Rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new wa(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new wa(n));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function h0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function u0(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],n.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let v=0,R=w.length;v<R;v+=3){let E=w[v+0],T=w[v+1],A=w[v+2];d.push(E,T,T,A,A,E)}}else if(g!==void 0){let w=g.array;_=g.version;for(let v=0,R=w.length/3-1;v<R;v+=3){let E=v+0,T=v+1,A=v+2;d.push(E,T,T,A,A,E)}}else return;let f=new(su(d)?ya:va)(d,1);f.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,f)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function d0(n,t,e,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let f,p;if(s)f=n,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*l,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let p=0;for(let w=0;w<_;w++)p+=g[w];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function f0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function p0(n,t){return n[0]-t[0]}function m0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function g0(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new Ne,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let w=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],G=0;w===!0&&(G=1),v===!0&&(G=2),R===!0&&(G=3);let b=h.attributes.position.count*G,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let O=new Float32Array(b*S*4*g),q=new _a(O,b,S,g);q.type=pi,q.needsUpdate=!0;let tt=G*4;for(let D=0;D<g;D++){let H=E[D],X=T[D],W=A[D],V=b*S*4*D;for(let J=0;J<H.count;J++){let Q=J*tt;w===!0&&(o.fromBufferAttribute(H,J),O[V+Q+0]=o.x,O[V+Q+1]=o.y,O[V+Q+2]=o.z,O[V+Q+3]=0),v===!0&&(o.fromBufferAttribute(X,J),O[V+Q+4]=o.x,O[V+Q+5]=o.y,O[V+Q+6]=o.z,O[V+Q+7]=0),R===!0&&(o.fromBufferAttribute(W,J),O[V+Q+8]=o.x,O[V+Q+9]=o.y,O[V+Q+10]=o.z,O[V+Q+11]=W.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new $t(b,S)},r.set(h,_),h.addEventListener("dispose",P)}let f=0;for(let w=0;w<d.length;w++)f+=d[w];let p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let m=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){let R=g[v];R[0]=v,R[1]=d[v]}g.sort(m0);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(p0);let _=h.morphAttributes.position,f=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let R=a[v],E=R[0],T=R[1];E!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+v)!==_[E]&&h.setAttribute("morphTarget"+v,_[E]),f&&h.getAttribute("morphNormal"+v)!==f[E]&&h.setAttribute("morphNormal"+v,f[E]),s[v]=T,p+=T):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let w=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function _0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ea=class extends Tn{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:zi,h!==zi&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zi&&(i=fi),i===void 0&&h===Cs&&(i=Bi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lu=new Tn,cu=new Ea(1,1);cu.compareFunction=nu;var hu=new _a,uu=new Qo,du=new Ma,Ch=[],Ph=[],Lh=new Float32Array(16),Ih=new Float32Array(9),Dh=new Float32Array(4);function Ns(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ca(n,t){let e=Ph[t];e===void 0&&(e=new Int32Array(t),Ph[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function x0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function v0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function y0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function b0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function M0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),Te(e,i)}}function S0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Ih.set(i),n.uniformMatrix3fv(this.addr,!1,Ih),Te(e,i)}}function w0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Lh.set(i),n.uniformMatrix4fv(this.addr,!1,Lh),Te(e,i)}}function E0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function T0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function A0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function R0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function C0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function P0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function L0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function D0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?cu:lu;e.setTexture2D(t||r,s)}function N0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||uu,s)}function U0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||du,s)}function O0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hu,s)}function F0(n){switch(n){case 5126:return x0;case 35664:return v0;case 35665:return y0;case 35666:return b0;case 35674:return M0;case 35675:return S0;case 35676:return w0;case 5124:case 35670:return E0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return O0}}function B0(n,t){n.uniform1fv(this.addr,t)}function z0(n,t){let e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function k0(n,t){let e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function H0(n,t){let e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function V0(n,t){let e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function G0(n,t){let e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function W0(n,t){let e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function X0(n,t){n.uniform1iv(this.addr,t)}function q0(n,t){n.uniform2iv(this.addr,t)}function Y0(n,t){n.uniform3iv(this.addr,t)}function $0(n,t){n.uniform4iv(this.addr,t)}function Z0(n,t){n.uniform1uiv(this.addr,t)}function J0(n,t){n.uniform2uiv(this.addr,t)}function K0(n,t){n.uniform3uiv(this.addr,t)}function j0(n,t){n.uniform4uiv(this.addr,t)}function Q0(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lu,r[o])}function t_(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uu,r[o])}function e_(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||du,r[o])}function n_(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hu,r[o])}function i_(n){switch(n){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return $0;case 5125:return Z0;case 36294:return J0;case 36295:return K0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}var il=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=F0(e.type)}},sl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i_(e.type)}},rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Go=/(\w+)(\])?(\[|\.)?/g;function Nh(n,t){n.seq.push(t),n.map[t.id]=t}function s_(n,t,e){let i=n.name,s=i.length;for(Go.lastIndex=0;;){let r=Go.exec(i),o=Go.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nh(e,c===void 0?new il(a,n,t):new sl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new rl(a),Nh(e,u)),e=u}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);s_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Uh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var r_=37297,a_=0;function o_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function l_(n){let t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(n),i;switch(t===e?i="":t===ua&&e===ha?i="LinearDisplayP3ToLinearSRGB":t===ha&&e===ua&&(i="LinearSRGBToLinearDisplayP3"),n){case Kn:case Ra:return[i,"LinearTransferOETF"];case De:case Tl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Oh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+o_(n.getShaderSource(t),o)}else return s}function c_(n,t){let e=l_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function h_(n,t){let e;switch(t){case pf:e="Linear";break;case mf:e="Reinhard";break;case gf:e="OptimizedCineon";break;case _f:e="ACESFilmic";break;case vf:e="AgX";break;case xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function u_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function d_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)}function f_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function p_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ss(n){return n!==""}function Fh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(n){return n.replace(m_,__)}var g_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function __(n,t){let e=Ut[t];if(e===void 0){let i=g_.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return al(e)}var x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(x_,v_)}function v_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function y_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function b_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function S_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qh:t="ENVMAP_BLENDING_MULTIPLY";break;case df:t="ENVMAP_BLENDING_MIX";break;case ff:t="ENVMAP_BLENDING_ADD";break}return t}function w_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function E_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=y_(e),c=b_(e),h=M_(e),u=S_(e),d=w_(e),m=e.isWebGL2?"":u_(e),g=d_(e),_=f_(r),f=s.createProgram(),p,w,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ss).join(`
`),p.length>0&&(p+=`
`),w=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ss).join(`
`),w.length>0&&(w+=`
`)):(p=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),w=[m,kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Ut.tonemapping_pars_fragment:"",e.toneMapping!==_i?h_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,c_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=al(o),o=Fh(o,e),o=Bh(o,e),a=al(a),a=Fh(a,e),a=Bh(a,e),o=zh(o),a=zh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let R=v+p+o,E=v+w+a,T=Uh(s,s.VERTEX_SHADER,R),A=Uh(s,s.FRAGMENT_SHADER,E);s.attachShader(f,T),s.attachShader(f,A),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function G(q){if(n.debug.checkShaderErrors){let tt=s.getProgramInfoLog(f).trim(),P=s.getShaderInfoLog(T).trim(),D=s.getShaderInfoLog(A).trim(),H=!0,X=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,T,A);else{let W=Oh(s,T,"vertex"),V=Oh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+W+`
`+V)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(P===""||D==="")&&(X=!1);X&&(q.diagnostics={runnable:H,programLog:tt,vertexShader:{log:P,prefix:p},fragmentShader:{log:D,prefix:w}})}s.deleteShader(T),s.deleteShader(A),b=new Ts(s,f),S=p_(s,f)}let b;this.getUniforms=function(){return b===void 0&&G(this),b};let S;this.getAttributes=function(){return S===void 0&&G(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(f,r_)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a_++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=A,this}var T_=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ll(t),e.set(t,i)),i}},ll=class{constructor(t){this.id=T_++,this.code=t,this.usedTimes=0}};function A_(n,t,e,i,s,r,o){let a=new ur,l=new ol,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function f(b,S,O,q,tt){let P=q.fog,D=tt.geometry,H=b.isMeshStandardMaterial?q.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),W=X&&X.mapping===Aa?X.image.height:null,V=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=J!==void 0?J.length:0,ht=0;D.morphAttributes.position!==void 0&&(ht=1),D.morphAttributes.normal!==void 0&&(ht=2),D.morphAttributes.color!==void 0&&(ht=3);let k,Y,lt,xt;if(V){let Ve=Ln[V];k=Ve.vertexShader,Y=Ve.fragmentShader}else k=b.vertexShader,Y=b.fragmentShader,l.update(b),lt=l.getVertexShaderID(b),xt=l.getFragmentShaderID(b);let _t=n.getRenderTarget(),Lt=tt.isInstancedMesh===!0,Dt=tt.isBatchedMesh===!0,wt=!!b.map,Wt=!!b.matcap,N=!!X,He=!!b.aoMap,yt=!!b.lightMap,Ct=!!b.bumpMap,ft=!!b.normalMap,pe=!!b.displacementMap,Ot=!!b.emissiveMap,M=!!b.metalnessMap,x=!!b.roughnessMap,F=b.anisotropy>0,K=b.clearcoat>0,Z=b.iridescence>0,j=b.sheen>0,mt=b.transmission>0,ot=F&&!!b.anisotropyMap,ut=K&&!!b.clearcoatMap,St=K&&!!b.clearcoatNormalMap,Ft=K&&!!b.clearcoatRoughnessMap,$=Z&&!!b.iridescenceMap,ne=Z&&!!b.iridescenceThicknessMap,Vt=j&&!!b.sheenColorMap,Rt=j&&!!b.sheenRoughnessMap,vt=!!b.specularMap,dt=!!b.specularColorMap,Nt=!!b.specularIntensityMap,Qt=mt&&!!b.transmissionMap,_e=mt&&!!b.thicknessMap,zt=!!b.gradientMap,et=!!b.alphaMap,C=b.alphaTest>0,st=!!b.alphaHash,rt=!!b.extensions,Et=!!D.attributes.uv1,bt=!!D.attributes.uv2,ae=!!D.attributes.uv3,oe=_i;return b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(oe=n.toneMapping),{isWebGL2:h,shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:Y,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Dt,instancing:Lt,instancingColor:Lt&&tt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Kn,map:wt,matcap:Wt,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:W,aoMap:He,lightMap:yt,bumpMap:Ct,normalMap:ft,displacementMap:d&&pe,emissiveMap:Ot,normalMapObjectSpace:ft&&b.normalMapType===If,normalMapTangentSpace:ft&&b.normalMapType===Lf,metalnessMap:M,roughnessMap:x,anisotropy:F,anisotropyMap:ot,clearcoat:K,clearcoatMap:ut,clearcoatNormalMap:St,clearcoatRoughnessMap:Ft,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:ne,sheen:j,sheenColorMap:Vt,sheenRoughnessMap:Rt,specularMap:vt,specularColorMap:dt,specularIntensityMap:Nt,transmission:mt,transmissionMap:Qt,thicknessMap:_e,gradientMap:zt,opaque:b.transparent===!1&&b.blending===ws,alphaMap:et,alphaTest:C,alphaHash:st,combine:b.combine,mapUv:wt&&_(b.map.channel),aoMapUv:He&&_(b.aoMap.channel),lightMapUv:yt&&_(b.lightMap.channel),bumpMapUv:Ct&&_(b.bumpMap.channel),normalMapUv:ft&&_(b.normalMap.channel),displacementMapUv:pe&&_(b.displacementMap.channel),emissiveMapUv:Ot&&_(b.emissiveMap.channel),metalnessMapUv:M&&_(b.metalnessMap.channel),roughnessMapUv:x&&_(b.roughnessMap.channel),anisotropyMapUv:ot&&_(b.anisotropyMap.channel),clearcoatMapUv:ut&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:St&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(b.sheenRoughnessMap.channel),specularMapUv:vt&&_(b.specularMap.channel),specularColorMapUv:dt&&_(b.specularColorMap.channel),specularIntensityMapUv:Nt&&_(b.specularIntensityMap.channel),transmissionMapUv:Qt&&_(b.transmissionMap.channel),thicknessMapUv:_e&&_(b.thicknessMap.channel),alphaMapUv:et&&_(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ft||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:bt,vertexUv3s:ae,pointsUvs:tt.isPoints===!0&&!!D.attributes.uv&&(wt||et),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ht,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:wt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$n,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:rt&&b.extensions.derivatives===!0,extensionFragDepth:rt&&b.extensions.fragDepth===!0,extensionDrawBuffers:rt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)S.push(O),S.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(w(S,b),v(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function R(b){let S=g[b.type],O;if(S){let q=Ln[S];O=gp.clone(q.uniforms)}else O=b.uniforms;return O}function E(b,S){let O;for(let q=0,tt=c.length;q<tt;q++){let P=c[q];if(P.cacheKey===S){O=P,++O.usedTimes;break}}return O===void 0&&(O=new E_(n,S,b,r),c.push(O)),O}function T(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function G(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:G}}function R_(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function C_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Hh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Vh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,m,g,_,f){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||C_),i.length>1&&i.sort(d||Hh),s.length>1&&s.sort(d||Hh)}function h(){for(let u=t,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function P_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Vh,n.set(i,[o])):s>=r.length?(o=new Vh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function L_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Jt};break;case"SpotLight":e={position:new L,direction:new L,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function I_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var D_=0;function N_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function U_(n,t){let e=new L_,i=I_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new se,a=new se;function l(h,u){let d=0,m=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,f=0,p=0,w=0,v=0,R=0,E=0,T=0,A=0,G=0,b=0;h.sort(N_);let S=u===!0?Math.PI:1;for(let q=0,tt=h.length;q<tt;q++){let P=h[q],D=P.color,H=P.intensity,X=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*H*S,m+=D.g*H*S,g+=D.b*H*S;else if(P.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(P.sh.coefficients[V],H);b++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let J=P.shadow,Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[_]=Q,s.directionalShadowMap[_]=W,s.directionalShadowMatrix[_]=P.shadow.matrix,R++}s.directional[_]=V,_++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(D).multiplyScalar(H*S),V.distance=X,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,s.spot[p]=V;let J=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&G++),s.spotLightMatrix[p]=J.matrix,P.castShadow){let Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[p]=Q,s.spotShadowMap[p]=W,T++}p++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(D).multiplyScalar(H),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),s.rectArea[w]=V,w++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*S),V.distance=P.distance,V.decay=P.decay,P.castShadow){let J=P.shadow,Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[f]=Q,s.pointShadowMap[f]=W,s.pointShadowMatrix[f]=P.shadow.matrix,E++}s.point[f]=V,f++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(H*S),V.groundColor.copy(P.groundColor).multiplyScalar(H*S),s.hemi[v]=V,v++}}w>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==_||O.pointLength!==f||O.spotLength!==p||O.rectAreaLength!==w||O.hemiLength!==v||O.numDirectionalShadows!==R||O.numPointShadows!==E||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=w,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=T+A-G,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=b,O.directionalLength=_,O.pointLength=f,O.spotLength=p,O.rectAreaLength=w,O.hemiLength=v,O.numDirectionalShadows=R,O.numPointShadows=E,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=b,s.version=D_++)}function c(h,u){let d=0,m=0,g=0,_=0,f=0,p=u.matrixWorldInverse;for(let w=0,v=h.length;w<v;w++){let R=h[w];if(R.isDirectionalLight){let E=s.directional[d];E.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(R.isSpotLight){let E=s.spot[g];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(R.isRectAreaLight){let E=s.rectArea[_];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(R.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){let E=s.point[m];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),m++}else if(R.isHemisphereLight){let E=s.hemi[f];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:s}}function Gh(n,t){let e=new U_(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function O_(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Gh(n,t),e.set(r,[l])):o>=a.length?(l=new Gh(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var cl=class extends Ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends Ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
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
}`;function z_(n,t,e){let i=new Sa,s=new $t,r=new $t,o=new Ne,a=new cl({depthPacking:Pf}),l=new hl,c={},h=e.maxTextureSize,u={[vi]:tn,[tn]:vi,[$n]:$n},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:F_,fragmentShader:B_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Vi;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ze(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let p=this.type;this.render=function(T,A,G){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),S=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),q=n.state;q.setBlending(gi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let tt=p!==Yn&&this.type===Yn,P=p===Yn&&this.type!==Yn;for(let D=0,H=T.length;D<H;D++){let X=T[D],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let V=W.getFrameExtents();if(s.multiply(V),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,W.mapSize.y=r.y)),W.map===null||tt===!0||P===!0){let Q=this.type!==Yn?{minFilter:qe,magFilter:qe}:{};W.map!==null&&W.map.dispose(),W.map=new jn(s.x,s.y,Q),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let J=W.getViewportCount();for(let Q=0;Q<J;Q++){let ht=W.getViewport(Q);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),q.viewport(o),W.updateMatrices(X,Q),i=W.getFrustum(),R(A,G,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Yn&&w(W,G),W.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(b,S,O)};function w(T,A){let G=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,G,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,G,m,_,null)}function v(T,A,G,b){let S=null,O=G.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)S=O;else if(S=G.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let q=S.uuid,tt=A.uuid,P=c[q];P===void 0&&(P={},c[q]=P);let D=P[tt];D===void 0&&(D=S.clone(),P[tt]=D,A.addEventListener("dispose",E)),S=D}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Yn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,G.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let q=n.properties.get(S);q.light=G}return S}function R(T,A,G,b,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Yn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld);let tt=t.update(T),P=T.material;if(Array.isArray(P)){let D=tt.groups;for(let H=0,X=D.length;H<X;H++){let W=D[H],V=P[W.materialIndex];if(V&&V.visible){let J=v(T,V,b,S);T.onBeforeShadow(n,T,A,G,tt,J,W),n.renderBufferDirect(G,null,tt,J,T,W),T.onAfterShadow(n,T,A,G,tt,J,W)}}}else if(P.visible){let D=v(T,P,b,S);T.onBeforeShadow(n,T,A,G,tt,D,null),n.renderBufferDirect(G,null,tt,D,T,null),T.onAfterShadow(n,T,A,G,tt,D,null)}}let q=T.children;for(let tt=0,P=q.length;tt<P;tt++)R(q[tt],A,G,b,S)}function E(T){T.target.removeEventListener("dispose",E);for(let G in c){let b=c[G],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function k_(n,t,e){let i=e.isWebGL2;function s(){let C=!1,st=new Ne,rt=null,Et=new Ne(0,0,0,0);return{setMask:function(bt){rt!==bt&&!C&&(n.colorMask(bt,bt,bt,bt),rt=bt)},setLocked:function(bt){C=bt},setClear:function(bt,ae,oe,Re,Ve){Ve===!0&&(bt*=Re,ae*=Re,oe*=Re),st.set(bt,ae,oe,Re),Et.equals(st)===!1&&(n.clearColor(bt,ae,oe,Re),Et.copy(st))},reset:function(){C=!1,rt=null,Et.set(-1,0,0,0)}}}function r(){let C=!1,st=null,rt=null,Et=null;return{setTest:function(bt){bt?Dt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(bt){st!==bt&&!C&&(n.depthMask(bt),st=bt)},setFunc:function(bt){if(rt!==bt){switch(bt){case rf:n.depthFunc(n.NEVER);break;case af:n.depthFunc(n.ALWAYS);break;case of:n.depthFunc(n.LESS);break;case aa:n.depthFunc(n.LEQUAL);break;case lf:n.depthFunc(n.EQUAL);break;case cf:n.depthFunc(n.GEQUAL);break;case hf:n.depthFunc(n.GREATER);break;case uf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=bt}},setLocked:function(bt){C=bt},setClear:function(bt){Et!==bt&&(n.clearDepth(bt),Et=bt)},reset:function(){C=!1,st=null,rt=null,Et=null}}}function o(){let C=!1,st=null,rt=null,Et=null,bt=null,ae=null,oe=null,Re=null,Ve=null;return{setTest:function(le){C||(le?Dt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(le){st!==le&&!C&&(n.stencilMask(le),st=le)},setFunc:function(le,Ge,Pn){(rt!==le||Et!==Ge||bt!==Pn)&&(n.stencilFunc(le,Ge,Pn),rt=le,Et=Ge,bt=Pn)},setOp:function(le,Ge,Pn){(ae!==le||oe!==Ge||Re!==Pn)&&(n.stencilOp(le,Ge,Pn),ae=le,oe=Ge,Re=Pn)},setLocked:function(le){C=le},setClear:function(le){Ve!==le&&(n.clearStencil(le),Ve=le)},reset:function(){C=!1,st=null,rt=null,Et=null,bt=null,ae=null,oe=null,Re=null,Ve=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,_=[],f=null,p=!1,w=null,v=null,R=null,E=null,T=null,A=null,G=null,b=new Jt(0,0,0),S=0,O=!1,q=null,tt=null,P=null,D=null,H=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,V=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=V>=2);let Q=null,ht={},k=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),lt=new Ne().fromArray(k),xt=new Ne().fromArray(Y);function _t(C,st,rt,Et){let bt=new Uint8Array(4),ae=n.createTexture();n.bindTexture(C,ae),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<rt;oe++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(st,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(st+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return ae}let Lt={};Lt[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),Lt[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Lt[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Lt[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Dt(n.DEPTH_TEST),l.setFunc(aa),Ot(!1),M(Mc),Dt(n.CULL_FACE),ft(gi);function Dt(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function wt(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Wt(C,st){return m[C]!==st?(n.bindFramebuffer(C,st),m[C]=st,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=st),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=st)),!0):!1}function N(C,st){let rt=_,Et=!1;if(C)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),C.isWebGLMultipleRenderTargets){let bt=C.texture;if(rt.length!==bt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,oe=bt.length;ae<oe;ae++)rt[ae]=n.COLOR_ATTACHMENT0+ae;rt.length=bt.length,Et=!0}}else rt[0]!==n.COLOR_ATTACHMENT0&&(rt[0]=n.COLOR_ATTACHMENT0,Et=!0);else rt[0]!==n.BACK&&(rt[0]=n.BACK,Et=!0);Et&&(e.isWebGL2?n.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function He(C){return f!==C?(n.useProgram(C),f=C,!0):!1}let yt={[Oi]:n.FUNC_ADD,[Gd]:n.FUNC_SUBTRACT,[Wd]:n.FUNC_REVERSE_SUBTRACT};if(i)yt[Tc]=n.MIN,yt[Ac]=n.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(yt[Tc]=C.MIN_EXT,yt[Ac]=C.MAX_EXT)}let Ct={[Xd]:n.ZERO,[qd]:n.ONE,[Yd]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[Qd]:n.SRC_ALPHA_SATURATE,[Kd]:n.DST_COLOR,[Zd]:n.DST_ALPHA,[$d]:n.ONE_MINUS_SRC_COLOR,[Xo]:n.ONE_MINUS_SRC_ALPHA,[jd]:n.ONE_MINUS_DST_COLOR,[Jd]:n.ONE_MINUS_DST_ALPHA,[tf]:n.CONSTANT_COLOR,[ef]:n.ONE_MINUS_CONSTANT_COLOR,[nf]:n.CONSTANT_ALPHA,[sf]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(C,st,rt,Et,bt,ae,oe,Re,Ve,le){if(C===gi){p===!0&&(wt(n.BLEND),p=!1);return}if(p===!1&&(Dt(n.BLEND),p=!0),C!==Vd){if(C!==w||le!==O){if((v!==Oi||T!==Oi)&&(n.blendEquation(n.FUNC_ADD),v=Oi,T=Oi),le)switch(C){case ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.ONE,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,E=null,A=null,G=null,b.set(0,0,0),S=0,w=C,O=le}return}bt=bt||st,ae=ae||rt,oe=oe||Et,(st!==v||bt!==T)&&(n.blendEquationSeparate(yt[st],yt[bt]),v=st,T=bt),(rt!==R||Et!==E||ae!==A||oe!==G)&&(n.blendFuncSeparate(Ct[rt],Ct[Et],Ct[ae],Ct[oe]),R=rt,E=Et,A=ae,G=oe),(Re.equals(b)===!1||Ve!==S)&&(n.blendColor(Re.r,Re.g,Re.b,Ve),b.copy(Re),S=Ve),w=C,O=!1}function pe(C,st){C.side===$n?wt(n.CULL_FACE):Dt(n.CULL_FACE);let rt=C.side===tn;st&&(rt=!rt),Ot(rt),C.blending===ws&&C.transparent===!1?ft(gi):ft(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let Et=C.stencilWrite;c.setTest(Et),Et&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Dt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(C){q!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),q=C)}function M(C){C!==zd?(Dt(n.CULL_FACE),C!==tt&&(C===Mc?n.cullFace(n.BACK):C===kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),tt=C}function x(C){C!==P&&(W&&n.lineWidth(C),P=C)}function F(C,st,rt){C?(Dt(n.POLYGON_OFFSET_FILL),(D!==st||H!==rt)&&(n.polygonOffset(st,rt),D=st,H=rt)):wt(n.POLYGON_OFFSET_FILL)}function K(C){C?Dt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function Z(C){C===void 0&&(C=n.TEXTURE0+X-1),Q!==C&&(n.activeTexture(C),Q=C)}function j(C,st,rt){rt===void 0&&(Q===null?rt=n.TEXTURE0+X-1:rt=Q);let Et=ht[rt];Et===void 0&&(Et={type:void 0,texture:void 0},ht[rt]=Et),(Et.type!==C||Et.texture!==st)&&(Q!==rt&&(n.activeTexture(rt),Q=rt),n.bindTexture(C,st||Lt[C]),Et.type=C,Et.texture=st)}function mt(){let C=ht[Q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ot(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ft(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Rt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(C){lt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),lt.copy(C))}function Qt(C){xt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),xt.copy(C))}function _e(C,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let Et=rt.get(C);Et===void 0&&(Et=n.getUniformBlockIndex(st,C.name),rt.set(C,Et))}function zt(C,st){let Et=u.get(st).get(C);h.get(st)!==Et&&(n.uniformBlockBinding(st,Et,C.__bindingPointIndex),h.set(st,Et))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Q=null,ht={},m={},g=new WeakMap,_=[],f=null,p=!1,w=null,v=null,R=null,E=null,T=null,A=null,G=null,b=new Jt(0,0,0),S=0,O=!1,q=null,tt=null,P=null,D=null,H=null,lt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Dt,disable:wt,bindFramebuffer:Wt,drawBuffers:N,useProgram:He,setBlending:ft,setMaterial:pe,setFlipSided:Ot,setCullFace:M,setLineWidth:x,setPolygonOffset:F,setScissorTest:K,activeTexture:Z,bindTexture:j,unbindTexture:mt,compressedTexImage2D:ot,compressedTexImage3D:ut,texImage2D:vt,texImage3D:dt,updateUBOMapping:_e,uniformBlockBinding:zt,texStorage2D:Vt,texStorage3D:Rt,texSubImage2D:St,texSubImage3D:Ft,compressedTexSubImage2D:$,compressedTexSubImage3D:ne,scissor:Nt,viewport:Qt,reset:et}}function H_(n,t,e,i,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return m?new OffscreenCanvas(M,x):pa("canvas")}function _(M,x,F,K){let Z=1;if((M.width>K||M.height>K)&&(Z=K/Math.max(M.width,M.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let j=x?fa:Math.floor,mt=j(Z*M.width),ot=j(Z*M.height);u===void 0&&(u=g(mt,ot));let ut=F?g(mt,ot):u;return ut.width=mt,ut.height=ot,ut.getContext("2d").drawImage(M,0,0,mt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+mt+"x"+ot+")."),ut}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return Ko(M.width)&&Ko(M.height)}function p(M){return a?!1:M.wrapS!==wn||M.wrapT!==wn||M.minFilter!==qe&&M.minFilter!==fn}function w(M,x){return M.generateMipmaps&&x&&M.minFilter!==qe&&M.minFilter!==fn}function v(M){n.generateMipmap(M)}function R(M,x,F,K,Z=!1){if(a===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let j=x;if(x===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),x===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RGBA){let mt=Z?ca:ie.getTransfer(K);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=mt===ce?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(M,x,F){return w(M,F)===!0||M.isFramebufferTexture&&M.minFilter!==qe&&M.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function T(M){return M===qe||M===Rc||M===mo?n.NEAREST:n.LINEAR}function A(M){let x=M.target;x.removeEventListener("dispose",A),b(x),x.isVideoTexture&&h.delete(x)}function G(M){let x=M.target;x.removeEventListener("dispose",G),O(x)}function b(M){let x=i.get(M);if(x.__webglInit===void 0)return;let F=M.source,K=d.get(F);if(K){let Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(M),Object.keys(K).length===0&&d.delete(F)}i.remove(M)}function S(M){let x=i.get(M);n.deleteTexture(x.__webglTexture);let F=M.source,K=d.get(F);delete K[x.__cacheKey],o.memory.textures--}function O(M){let x=M.texture,F=i.get(M),K=i.get(x);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let j=0;j<F.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(F.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)n.deleteFramebuffer(F.__webglFramebuffer[Z]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Z=0,j=x.length;Z<j;Z++){let mt=i.get(x[Z]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(M)}let q=0;function tt(){q=0}function P(){let M=q;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),q+=1,M}function D(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function H(M,x){let F=i.get(M);if(M.isVideoTexture&&pe(M),M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){let K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,M,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function X(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){lt(F,M,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function W(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){lt(F,M,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function V(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){xt(F,M,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let J={[$o]:n.REPEAT,[wn]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},Q={[qe]:n.NEAREST,[Rc]:n.NEAREST_MIPMAP_NEAREST,[mo]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[yf]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},ht={[Df]:n.NEVER,[zf]:n.ALWAYS,[Nf]:n.LESS,[nu]:n.LEQUAL,[Uf]:n.EQUAL,[Bf]:n.GEQUAL,[Of]:n.GREATER,[Ff]:n.NOTEQUAL};function k(M,x,F){if(F?(n.texParameteri(M,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,J[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Q[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Q[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==wn||x.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,T(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==qe&&x.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===qe||x.minFilter!==mo&&x.minFilter!==or||x.type===pi&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===lr&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Y(M,x){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",A));let K=x.source,Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));let j=D(x);if(j!==M.__cacheKey){Z[j]===void 0&&(Z[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[j].usedTimes++;let mt=Z[M.__cacheKey];mt!==void 0&&(Z[M.__cacheKey].usedTimes--,mt.usedTimes===0&&S(x)),M.__cacheKey=j,M.__webglTexture=Z[j].texture}return F}function lt(M,x,F){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);let Z=Y(M,x),j=x.source;e.bindTexture(K,M.__webglTexture,n.TEXTURE0+F);let mt=i.get(j);if(j.version!==mt.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);let ot=ie.getPrimaries(ie.workingColorSpace),ut=x.colorSpace===pn?null:ie.getPrimaries(x.colorSpace),St=x.colorSpace===pn||ot===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Ft=p(x)&&f(x.image)===!1,$=_(x.image,Ft,!1,s.maxTextureSize);$=Ot(x,$);let ne=f($)||a,Vt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),vt=R(x.internalFormat,Vt,Rt,x.colorSpace,x.isVideoTexture);k(K,x,ne);let dt,Nt=x.mipmaps,Qt=a&&x.isVideoTexture!==!0&&vt!==tu,_e=mt.__version===void 0||Z===!0,zt=E(x,$,ne);if(x.isDepthTexture)vt=n.DEPTH_COMPONENT,a?x.type===pi?vt=n.DEPTH_COMPONENT32F:x.type===fi?vt=n.DEPTH_COMPONENT24:x.type===Bi?vt=n.DEPTH24_STENCIL8:vt=n.DEPTH_COMPONENT16:x.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===zi&&vt===n.DEPTH_COMPONENT&&x.type!==El&&x.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=fi,Rt=r.convert(x.type)),x.format===Cs&&vt===n.DEPTH_COMPONENT&&(vt=n.DEPTH_STENCIL,x.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Bi,Rt=r.convert(x.type))),_e&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,vt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,vt,$.width,$.height,0,Vt,Rt,null));else if(x.isDataTexture)if(Nt.length>0&&ne){Qt&&_e&&e.texStorage2D(n.TEXTURE_2D,zt,vt,Nt[0].width,Nt[0].height);for(let et=0,C=Nt.length;et<C;et++)dt=Nt[et],Qt?e.texSubImage2D(n.TEXTURE_2D,et,0,0,dt.width,dt.height,Vt,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,et,vt,dt.width,dt.height,0,Vt,Rt,dt.data);x.generateMipmaps=!1}else Qt?(_e&&e.texStorage2D(n.TEXTURE_2D,zt,vt,$.width,$.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,Vt,Rt,$.data)):e.texImage2D(n.TEXTURE_2D,0,vt,$.width,$.height,0,Vt,Rt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Qt&&_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,vt,Nt[0].width,Nt[0].height,$.depth);for(let et=0,C=Nt.length;et<C;et++)dt=Nt[et],x.format!==En?Vt!==null?Qt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,$.depth,Vt,dt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,vt,dt.width,dt.height,$.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,$.depth,Vt,Rt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,vt,dt.width,dt.height,$.depth,0,Vt,Rt,dt.data)}else{Qt&&_e&&e.texStorage2D(n.TEXTURE_2D,zt,vt,Nt[0].width,Nt[0].height);for(let et=0,C=Nt.length;et<C;et++)dt=Nt[et],x.format!==En?Vt!==null?Qt?e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,dt.width,dt.height,Vt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,vt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(n.TEXTURE_2D,et,0,0,dt.width,dt.height,Vt,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,et,vt,dt.width,dt.height,0,Vt,Rt,dt.data)}else if(x.isDataArrayTexture)Qt?(_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,vt,$.width,$.height,$.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Vt,Rt,$.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,$.width,$.height,$.depth,0,Vt,Rt,$.data);else if(x.isData3DTexture)Qt?(_e&&e.texStorage3D(n.TEXTURE_3D,zt,vt,$.width,$.height,$.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Vt,Rt,$.data)):e.texImage3D(n.TEXTURE_3D,0,vt,$.width,$.height,$.depth,0,Vt,Rt,$.data);else if(x.isFramebufferTexture){if(_e)if(Qt)e.texStorage2D(n.TEXTURE_2D,zt,vt,$.width,$.height);else{let et=$.width,C=$.height;for(let st=0;st<zt;st++)e.texImage2D(n.TEXTURE_2D,st,vt,et,C,0,Vt,Rt,null),et>>=1,C>>=1}}else if(Nt.length>0&&ne){Qt&&_e&&e.texStorage2D(n.TEXTURE_2D,zt,vt,Nt[0].width,Nt[0].height);for(let et=0,C=Nt.length;et<C;et++)dt=Nt[et],Qt?e.texSubImage2D(n.TEXTURE_2D,et,0,0,Vt,Rt,dt):e.texImage2D(n.TEXTURE_2D,et,vt,Vt,Rt,dt);x.generateMipmaps=!1}else Qt?(_e&&e.texStorage2D(n.TEXTURE_2D,zt,vt,$.width,$.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Vt,Rt,$)):e.texImage2D(n.TEXTURE_2D,0,vt,Vt,Rt,$);w(x,ne)&&v(K),mt.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function xt(M,x,F){if(x.image.length!==6)return;let K=Y(M,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);let j=i.get(Z);if(Z.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+F);let mt=ie.getPrimaries(ie.workingColorSpace),ot=x.colorSpace===pn?null:ie.getPrimaries(x.colorSpace),ut=x.colorSpace===pn||mt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let St=x.isCompressedTexture||x.image[0].isCompressedTexture,Ft=x.image[0]&&x.image[0].isDataTexture,$=[];for(let et=0;et<6;et++)!St&&!Ft?$[et]=_(x.image[et],!1,!0,s.maxCubemapSize):$[et]=Ft?x.image[et].image:x.image[et],$[et]=Ot(x,$[et]);let ne=$[0],Vt=f(ne)||a,Rt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),dt=R(x.internalFormat,Rt,vt,x.colorSpace),Nt=a&&x.isVideoTexture!==!0,Qt=j.__version===void 0||K===!0,_e=E(x,ne,Vt);k(n.TEXTURE_CUBE_MAP,x,Vt);let zt;if(St){Nt&&Qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_e,dt,ne.width,ne.height);for(let et=0;et<6;et++){zt=$[et].mipmaps;for(let C=0;C<zt.length;C++){let st=zt[C];x.format!==En?Rt!==null?Nt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C,0,0,st.width,st.height,Rt,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C,dt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C,0,0,st.width,st.height,Rt,vt,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C,dt,st.width,st.height,0,Rt,vt,st.data)}}}else{zt=x.mipmaps,Nt&&Qt&&(zt.length>0&&_e++,e.texStorage2D(n.TEXTURE_CUBE_MAP,_e,dt,$[0].width,$[0].height));for(let et=0;et<6;et++)if(Ft){Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,$[et].width,$[et].height,Rt,vt,$[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,dt,$[et].width,$[et].height,0,Rt,vt,$[et].data);for(let C=0;C<zt.length;C++){let rt=zt[C].image[et].image;Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C+1,0,0,rt.width,rt.height,Rt,vt,rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C+1,dt,rt.width,rt.height,0,Rt,vt,rt.data)}}else{Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Rt,vt,$[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,dt,Rt,vt,$[et]);for(let C=0;C<zt.length;C++){let st=zt[C];Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C+1,0,0,Rt,vt,st.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,C+1,dt,Rt,vt,st.image[et])}}}w(x,Vt)&&v(n.TEXTURE_CUBE_MAP),j.__version=Z.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _t(M,x,F,K,Z,j){let mt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ut=R(F.internalFormat,mt,ot,F.colorSpace);if(!i.get(x).__hasExternalTextures){let Ft=Math.max(1,x.width>>j),$=Math.max(1,x.height>>j);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,ut,Ft,$,x.depth,0,mt,ot,null):e.texImage2D(Z,j,ut,Ft,$,0,mt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),ft(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,i.get(F).__webglTexture,0,Ct(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,i.get(F).__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(M,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||ft(x)){let Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===pi?K=n.DEPTH_COMPONENT32F:Z.type===fi&&(K=n.DEPTH_COMPONENT24));let j=Ct(x);ft(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,K,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,K,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let K=Ct(x);F&&ft(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,x.width,x.height):ft(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let K=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<K.length;Z++){let j=K[Z],mt=r.convert(j.format,j.colorSpace),ot=r.convert(j.type),ut=R(j.internalFormat,mt,ot,j.colorSpace),St=Ct(x);F&&ft(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,ut,x.width,x.height):ft(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let K=i.get(x.depthTexture).__webglTexture,Z=Ct(x);if(x.depthTexture.format===zi)ft(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(x.depthTexture.format===Cs)ft(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(M){let x=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Dt(x.__webglFramebuffer,M)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]=n.createRenderbuffer(),Lt(x.__webglDepthbuffer[K],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Lt(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(M,x,F){let K=i.get(M);x!==void 0&&_t(K.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&wt(M)}function N(M){let x=M.texture,F=i.get(M),K=i.get(x);M.addEventListener("dispose",G),M.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++);let Z=M.isWebGLCubeRenderTarget===!0,j=M.isWebGLMultipleRenderTargets===!0,mt=f(M)||a;if(Z){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[ot][ut]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(j)if(s.drawBuffers){let ot=M.texture;for(let ut=0,St=ot.length;ut<St;ut++){let Ft=i.get(ot[ut]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&ft(M)===!1){let ot=j?x:[x];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<ot.length;ut++){let St=ot[ut];F.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);let Ft=r.convert(St.format,St.colorSpace),$=r.convert(St.type),ne=R(St.internalFormat,Ft,$,St.colorSpace,M.isXRRenderTarget===!0),Vt=Ct(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,ne,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(F.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),k(n.TEXTURE_CUBE_MAP,x,mt);for(let ot=0;ot<6;ot++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[ot][ut],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else _t(F.__webglFramebuffer[ot],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);w(x,mt)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){let ot=M.texture;for(let ut=0,St=ot.length;ut<St;ut++){let Ft=ot[ut],$=i.get(Ft);e.bindTexture(n.TEXTURE_2D,$.__webglTexture),k(n.TEXTURE_2D,Ft,mt),_t(F.__webglFramebuffer,M,Ft,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),w(Ft,mt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ot=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,K.__webglTexture),k(ot,x,mt),a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[ut],M,x,n.COLOR_ATTACHMENT0,ot,ut);else _t(F.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,ot,0);w(x,mt)&&v(ot),e.unbindTexture()}M.depthBuffer&&wt(M)}function He(M){let x=f(M)||a,F=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0,Z=F.length;K<Z;K++){let j=F[K];if(w(j,x)){let mt=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ot=i.get(j).__webglTexture;e.bindTexture(mt,ot),v(mt),e.unbindTexture()}}}function yt(M){if(a&&M.samples>0&&ft(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],F=M.width,K=M.height,Z=n.COLOR_BUFFER_BIT,j=[],mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(M),ut=M.isWebGLMultipleRenderTargets===!0;if(ut)for(let St=0;St<x.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let St=0;St<x.length;St++){j.push(n.COLOR_ATTACHMENT0+St),M.depthBuffer&&j.push(mt);let Ft=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Ft===!1&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ut&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[St]),Ft===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[mt])),ut){let $=i.get(x[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,Z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let St=0;St<x.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,ot.__webglColorRenderbuffer[St]);let Ft=i.get(x[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Ct(M){return Math.min(s.maxSamples,M.samples)}function ft(M){let x=i.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pe(M){let x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function Ot(M,x){let F=M.colorSpace,K=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Jo||F!==Kn&&F!==pn&&(ie.getTransfer(F)===ce?a===!1?t.has("EXT_sRGB")===!0&&K===En?(M.format=Jo,M.minFilter=fn,M.generateMipmaps=!1):x=ma.sRGBToLinear(x):(K!==En||Z!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=P,this.resetTextureUnits=tt,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ft}function V_(n,t,e){let i=e.isWebGL2;function s(r,o=pn){let a,l=ie.getTransfer(o);if(r===xi)return n.UNSIGNED_BYTE;if(r===Zh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Jh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===bf)return n.BYTE;if(r===Mf)return n.SHORT;if(r===El)return n.UNSIGNED_SHORT;if(r===$h)return n.INT;if(r===fi)return n.UNSIGNED_INT;if(r===pi)return n.FLOAT;if(r===lr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Sf)return n.ALPHA;if(r===En)return n.RGBA;if(r===wf)return n.LUMINANCE;if(r===Ef)return n.LUMINANCE_ALPHA;if(r===zi)return n.DEPTH_COMPONENT;if(r===Cs)return n.DEPTH_STENCIL;if(r===Jo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Tf)return n.RED;if(r===Kh)return n.RED_INTEGER;if(r===Af)return n.RG;if(r===jh)return n.RG_INTEGER;if(r===Qh)return n.RGBA_INTEGER;if(r===go||r===_o||r===xo||r===vo)if(l===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_o)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cc||r===Pc||r===Lc||r===Ic)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ic)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Dc||r===Nc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Dc)return l===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Nc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uc||r===Oc||r===Fc||r===Bc||r===zc||r===kc||r===Hc||r===Vc||r===Gc||r===Wc||r===Xc||r===qc||r===Yc||r===$c)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Uc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$c)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yo||r===Zc||r===Jc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===yo)return l===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rf||r===Kc||r===jc||r===Qc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===yo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Kc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ul=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},mi=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},G_={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,i),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},dl=class extends yi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,_=e.getContextAttributes(),f=null,p=null,w=[],v=[],R=new $t,E=null,T=new $e;T.layers.enable(1),T.viewport=new Ne;let A=new $e;A.layers.enable(2),A.viewport=new Ne;let G=[T,A],b=new ul;b.layers.enable(1),b.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=w[k];return Y===void 0&&(Y=new ar,w[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=w[k];return Y===void 0&&(Y=new ar,w[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=w[k];return Y===void 0&&(Y=new ar,w[k]=Y),Y.getHandSpace()};function q(k){let Y=v.indexOf(k.inputSource);if(Y===-1)return;let lt=w[Y];lt!==void 0&&(lt.update(k.inputSource,k.frame,c||o),lt.dispatchEvent({type:k.type,data:k.inputSource}))}function tt(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",P);for(let k=0;k<w.length;k++){let Y=v[k];Y!==null&&(v[k]=null,w[k].disconnect(Y))}S=null,O=null,t.setRenderTarget(f),m=null,d=null,u=null,s=null,p=null,ht.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Y={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new jn(m.framebufferWidth,m.framebufferHeight,{format:En,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,lt=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=_.stencil?Cs:zi,lt=_.stencil?Bi:fi);let _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new jn(d.textureWidth,d.textureHeight,{format:En,type:xi,depthTexture:new Ea(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Lt=t.properties.get(p);Lt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(k){for(let Y=0;Y<k.removed.length;Y++){let lt=k.removed[Y],xt=v.indexOf(lt);xt>=0&&(v[xt]=null,w[xt].disconnect(lt))}for(let Y=0;Y<k.added.length;Y++){let lt=k.added[Y],xt=v.indexOf(lt);if(xt===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=v.length){v.push(lt),xt=Lt;break}else if(v[Lt]===null){v[Lt]=lt,xt=Lt;break}if(xt===-1)break}let _t=w[xt];_t&&_t.connect(lt)}}let D=new L,H=new L;function X(k,Y,lt){D.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(lt.matrixWorld);let xt=D.distanceTo(H),_t=Y.projectionMatrix.elements,Lt=lt.projectionMatrix.elements,Dt=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),Wt=(_t[9]+1)/_t[5],N=(_t[9]-1)/_t[5],He=(_t[8]-1)/_t[0],yt=(Lt[8]+1)/Lt[0],Ct=Dt*He,ft=Dt*yt,pe=xt/(-He+yt),Ot=pe*-He;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ot),k.translateZ(pe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let M=Dt+pe,x=wt+pe,F=Ct-Ot,K=ft+(xt-Ot),Z=Wt*wt/x*M,j=N*wt/x*M;k.projectionMatrix.makePerspective(F,K,Z,j,M,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;b.near=A.near=T.near=k.near,b.far=A.far=T.far=k.far,(S!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,O=b.far);let Y=k.parent,lt=b.cameras;W(b,Y);for(let xt=0;xt<lt.length;xt++)W(lt[xt],Y);lt.length===2?X(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),V(k,b,Y)};function V(k,Y,lt){lt===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(lt.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=cr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let J=null;function Q(k,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){let lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let xt=!1;lt.length!==b.cameras.length&&(b.cameras.length=0,xt=!0);for(let _t=0;_t<lt.length;_t++){let Lt=lt[_t],Dt=null;if(m!==null)Dt=m.getViewport(Lt);else{let Wt=u.getViewSubImage(d,Lt);Dt=Wt.viewport,_t===0&&(t.setRenderTargetTextures(p,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(p))}let wt=G[_t];wt===void 0&&(wt=new $e,wt.layers.enable(_t),wt.viewport=new Ne,G[_t]=wt),wt.matrix.fromArray(Lt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Lt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),_t===0&&(b.matrix.copy(wt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xt===!0&&b.cameras.push(wt)}}for(let lt=0;lt<w.length;lt++){let xt=v[lt],_t=w[lt];xt!==null&&_t!==void 0&&_t.update(xt,Y,c||o)}J&&J(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let ht=new ou;ht.setAnimationLoop(Q),this.setAnimationLoop=function(k){J=k},this.dispose=function(){}}};function W_(n,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,au(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,w,v,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,R)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,w,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===tn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===tn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let w=t.get(p).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,w,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=v*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let w=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function X_(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,v){let R=v.program;i.uniformBlockBinding(w,R)}function c(w,v){let R=s[w.id];R===void 0&&(g(w),R=h(w),s[w.id]=R,w.addEventListener("dispose",f));let E=v.program;i.updateUBOMapping(w,E);let T=t.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function h(w){let v=u();w.__bindingPointIndex=v;let R=n.createBuffer(),E=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,R),R}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let v=s[w.id],R=w.uniforms,E=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=R.length;T<A;T++){let G=Array.isArray(R[T])?R[T]:[R[T]];for(let b=0,S=G.length;b<S;b++){let O=G[b];if(m(O,T,b,E)===!0){let q=O.__offset,tt=Array.isArray(O.value)?O.value:[O.value],P=0;for(let D=0;D<tt.length;D++){let H=tt[D],X=_(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,q+P,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,v,R,E){let T=w.value,A=v+"_"+R;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{let G=E[A];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return E[A]=T,!0}else if(G.equals(T)===!1)return G.copy(T),!0}return!1}function g(w){let v=w.uniforms,R=0,E=16;for(let A=0,G=v.length;A<G;A++){let b=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,O=b.length;S<O;S++){let q=b[S],tt=Array.isArray(q.value)?q.value:[q.value];for(let P=0,D=tt.length;P<D;P++){let H=tt[P],X=_(H),W=R%E;W!==0&&E-W<X.boundary&&(R+=E-W),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=R,R+=X.storage}}}let T=R%E;return T>0&&(R+=E-T),w.__size=R,w.__cache={},this}function _(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function f(w){let v=w.target;v.removeEventListener("dispose",f);let R=o.indexOf(v.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var fr=class{constructor(t={}){let{canvas:e=tp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;let v=this,R=!1,E=0,T=0,A=null,G=-1,b=null,S=new Ne,O=new Ne,q=null,tt=new Jt(0),P=0,D=e.width,H=e.height,X=1,W=null,V=null,J=new Ne(0,0,D,H),Q=new Ne(0,0,D,H),ht=!1,k=new Sa,Y=!1,lt=!1,xt=null,_t=new se,Lt=new $t,Dt=new L,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return A===null?X:1}let N=i;function He(y,I){for(let B=0;B<y.length;B++){let z=y[B],U=e.getContext(z,I);if(U!==null)return U}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",st,!1),N===null){let I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),N=He(I,y),N===null)throw He(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let yt,Ct,ft,pe,Ot,M,x,F,K,Z,j,mt,ot,ut,St,Ft,$,ne,Vt,Rt,vt,dt,Nt,Qt;function _e(){yt=new h0(N),Ct=new s0(N,yt,t),yt.init(Ct),dt=new V_(N,yt,Ct),ft=new k_(N,yt,Ct),pe=new f0(N),Ot=new R_,M=new H_(N,yt,ft,Ot,Ct,dt,pe),x=new a0(v),F=new c0(v),K=new bp(N,Ct),Nt=new n0(N,yt,K,Ct),Z=new u0(N,K,pe,Nt),j=new _0(N,Z,K,pe),Vt=new g0(N,Ct,M),Ft=new r0(Ot),mt=new A_(v,x,F,yt,Ct,Nt,Ft),ot=new W_(v,Ot),ut=new P_,St=new O_(yt,Ct),ne=new e0(v,x,F,ft,j,d,l),$=new z_(v,j,Ct),Qt=new X_(N,pe,Ct,ft),Rt=new i0(N,yt,pe,Ct),vt=new d0(N,yt,pe,Ct),pe.programs=mt.programs,v.capabilities=Ct,v.extensions=yt,v.properties=Ot,v.renderLists=ut,v.shadowMap=$,v.state=ft,v.info=pe}_e();let zt=new dl(v,N);this.xr=zt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(D,H,!1))},this.getSize=function(y){return y.set(D,H)},this.setSize=function(y,I,B=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=y,H=I,e.width=Math.floor(y*X),e.height=Math.floor(I*X),B===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(D*X,H*X).floor()},this.setDrawingBufferSize=function(y,I,B){D=y,H=I,X=B,e.width=Math.floor(y*B),e.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(J)},this.setViewport=function(y,I,B,z){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,I,B,z),ft.viewport(S.copy(J).multiplyScalar(X).floor())},this.getScissor=function(y){return y.copy(Q)},this.setScissor=function(y,I,B,z){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,I,B,z),ft.scissor(O.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(y){ft.setScissorTest(ht=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){V=y},this.getClearColor=function(y){return y.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(y=!0,I=!0,B=!0){let z=0;if(y){let U=!1;if(A!==null){let ct=A.texture.format;U=ct===Qh||ct===jh||ct===Kh}if(U){let ct=A.texture.type,gt=ct===xi||ct===fi||ct===El||ct===Bi||ct===Zh||ct===Jh,Mt=ne.getClearColor(),Tt=ne.getClearAlpha(),Bt=Mt.r,Pt=Mt.g,It=Mt.b;gt?(m[0]=Bt,m[1]=Pt,m[2]=It,m[3]=Tt,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Bt,g[1]=Pt,g[2]=It,g[3]=Tt,N.clearBufferiv(N.COLOR,0,g))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ut.dispose(),St.dispose(),Ot.dispose(),x.dispose(),F.dispose(),j.dispose(),Nt.dispose(),Qt.dispose(),mt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Ve),zt.removeEventListener("sessionend",le),xt&&(xt.dispose(),xt=null),Ge.stop()};function et(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=pe.autoReset,I=$.enabled,B=$.autoUpdate,z=$.needsUpdate,U=$.type;_e(),pe.autoReset=y,$.enabled=I,$.autoUpdate=B,$.needsUpdate=z,$.type=U}function st(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function rt(y){let I=y.target;I.removeEventListener("dispose",rt),Et(I)}function Et(y){bt(y),Ot.remove(y)}function bt(y){let I=Ot.get(y).programs;I!==void 0&&(I.forEach(function(B){mt.releaseProgram(B)}),y.isShaderMaterial&&mt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,z,U,ct){I===null&&(I=wt);let gt=U.isMesh&&U.matrixWorld.determinant()<0,Mt=Ud(y,I,B,z,U);ft.setMaterial(z,gt);let Tt=B.index,Bt=1;if(z.wireframe===!0){if(Tt=Z.getWireframeAttribute(B),Tt===void 0)return;Bt=2}let Pt=B.drawRange,It=B.attributes.position,be=Pt.start*Bt,rn=(Pt.start+Pt.count)*Bt;ct!==null&&(be=Math.max(be,ct.start*Bt),rn=Math.min(rn,(ct.start+ct.count)*Bt)),Tt!==null?(be=Math.max(be,0),rn=Math.min(rn,Tt.count)):It!=null&&(be=Math.max(be,0),rn=Math.min(rn,It.count));let Ce=rn-be;if(Ce<0||Ce===1/0)return;Nt.setup(U,z,Mt,B,Tt);let Hn,me=Rt;if(Tt!==null&&(Hn=K.get(Tt),me=vt,me.setIndex(Hn)),U.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*Wt()),me.setMode(N.LINES)):me.setMode(N.TRIANGLES);else if(U.isLine){let kt=z.linewidth;kt===void 0&&(kt=1),ft.setLineWidth(kt*Wt()),U.isLineSegments?me.setMode(N.LINES):U.isLineLoop?me.setMode(N.LINE_LOOP):me.setMode(N.LINE_STRIP)}else U.isPoints?me.setMode(N.POINTS):U.isSprite&&me.setMode(N.TRIANGLES);if(U.isBatchedMesh)me.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)me.renderInstances(be,Ce,U.count);else if(B.isInstancedBufferGeometry){let kt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ho=Math.min(B.instanceCount,kt);me.renderInstances(be,Ce,ho)}else me.render(be,Ce)};function ae(y,I,B){y.transparent===!0&&y.side===$n&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,Or(y,I,B),y.side=vi,y.needsUpdate=!0,Or(y,I,B),y.side=$n):Or(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),f=St.get(B),f.init(),w.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(v._useLegacyLights);let z=new Set;return y.traverse(function(U){let ct=U.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){let Mt=ct[gt];ae(Mt,B,U),z.add(Mt)}else ae(ct,B,U),z.add(ct)}),w.pop(),f=null,z},this.compileAsync=function(y,I,B=null){let z=this.compile(y,I,B);return new Promise(U=>{function ct(){if(z.forEach(function(gt){Ot.get(gt).currentProgram.isReady()&&z.delete(gt)}),z.size===0){U(y);return}setTimeout(ct,10)}yt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let oe=null;function Re(y){oe&&oe(y)}function Ve(){Ge.stop()}function le(){Ge.start()}let Ge=new ou;Ge.setAnimationLoop(Re),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(y){oe=y,zt.setAnimationLoop(y),y===null?Ge.stop():Ge.start()},zt.addEventListener("sessionstart",Ve),zt.addEventListener("sessionend",le),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(I),I=zt.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,I,A),f=St.get(y,w.length),f.init(),w.push(f),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,Y=Ft.init(this.clippingPlanes,lt),_=ut.get(y,p.length),_.init(),p.push(_),Pn(y,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,V),this.info.render.frame++,Y===!0&&Ft.beginShadows();let B=f.state.shadowsArray;if($.render(B,y,I),Y===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(_,y),f.setupLights(v._useLegacyLights),I.isArrayCamera){let z=I.cameras;for(let U=0,ct=z.length;U<ct;U++){let gt=z[U];gc(_,y,gt,gt.viewport)}}else gc(_,y,I);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(v,y,I),Nt.resetDefaultState(),G=-1,b=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Pn(y,I,B,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||k.intersectsSprite(y)){z&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_t);let gt=j.update(y),Mt=y.material;Mt.visible&&_.push(y,gt,Mt,B,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||k.intersectsObject(y))){let gt=j.update(y),Mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(_t)),Array.isArray(Mt)){let Tt=gt.groups;for(let Bt=0,Pt=Tt.length;Bt<Pt;Bt++){let It=Tt[Bt],be=Mt[It.materialIndex];be&&be.visible&&_.push(y,gt,be,B,Dt.z,It)}}else Mt.visible&&_.push(y,gt,Mt,B,Dt.z,null)}}let ct=y.children;for(let gt=0,Mt=ct.length;gt<Mt;gt++)Pn(ct[gt],I,B,z)}function gc(y,I,B,z){let U=y.opaque,ct=y.transmissive,gt=y.transparent;f.setupLightsView(B),Y===!0&&Ft.setGlobalState(v.clippingPlanes,B),ct.length>0&&Nd(U,ct,I,B),z&&ft.viewport(S.copy(z)),U.length>0&&Ur(U,I,B),ct.length>0&&Ur(ct,I,B),gt.length>0&&Ur(gt,I,B),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Nd(y,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let ct=Ct.isWebGL2;xt===null&&(xt=new jn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?lr:xi,minFilter:or,samples:ct?4:0})),v.getDrawingBufferSize(Lt),ct?xt.setSize(Lt.x,Lt.y):xt.setSize(fa(Lt.x),fa(Lt.y));let gt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(tt),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Mt=v.toneMapping;v.toneMapping=_i,Ur(y,B,z),M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt);let Tt=!1;for(let Bt=0,Pt=I.length;Bt<Pt;Bt++){let It=I[Bt],be=It.object,rn=It.geometry,Ce=It.material,Hn=It.group;if(Ce.side===$n&&be.layers.test(z.layers)){let me=Ce.side;Ce.side=tn,Ce.needsUpdate=!0,_c(be,B,z,rn,Ce,Hn),Ce.side=me,Ce.needsUpdate=!0,Tt=!0}}Tt===!0&&(M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt)),v.setRenderTarget(gt),v.setClearColor(tt,P),v.toneMapping=Mt}function Ur(y,I,B){let z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ct=y.length;U<ct;U++){let gt=y[U],Mt=gt.object,Tt=gt.geometry,Bt=z===null?gt.material:z,Pt=gt.group;Mt.layers.test(B.layers)&&_c(Mt,I,B,Tt,Bt,Pt)}}function _c(y,I,B,z,U,ct){y.onBeforeRender(v,I,B,z,U,ct),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,I,B,z,y,ct),U.transparent===!0&&U.side===$n&&U.forceSinglePass===!1?(U.side=tn,U.needsUpdate=!0,v.renderBufferDirect(B,I,z,U,y,ct),U.side=vi,U.needsUpdate=!0,v.renderBufferDirect(B,I,z,U,y,ct),U.side=$n):v.renderBufferDirect(B,I,z,U,y,ct),y.onAfterRender(v,I,B,z,U,ct)}function Or(y,I,B){I.isScene!==!0&&(I=wt);let z=Ot.get(y),U=f.state.lights,ct=f.state.shadowsArray,gt=U.state.version,Mt=mt.getParameters(y,U.state,ct,I,B),Tt=mt.getProgramCacheKey(Mt),Bt=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||z.environment),Bt===void 0&&(y.addEventListener("dispose",rt),Bt=new Map,z.programs=Bt);let Pt=Bt.get(Tt);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===gt)return vc(y,Mt),Pt}else Mt.uniforms=mt.getUniforms(y),y.onBuild(B,Mt,v),y.onBeforeCompile(Mt,v),Pt=mt.acquireProgram(Mt,Tt),Bt.set(Tt,Pt),z.uniforms=Mt.uniforms;let It=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(It.clippingPlanes=Ft.uniform),vc(y,Mt),z.needsLights=Fd(y),z.lightsStateVersion=gt,z.needsLights&&(It.ambientLightColor.value=U.state.ambient,It.lightProbe.value=U.state.probe,It.directionalLights.value=U.state.directional,It.directionalLightShadows.value=U.state.directionalShadow,It.spotLights.value=U.state.spot,It.spotLightShadows.value=U.state.spotShadow,It.rectAreaLights.value=U.state.rectArea,It.ltc_1.value=U.state.rectAreaLTC1,It.ltc_2.value=U.state.rectAreaLTC2,It.pointLights.value=U.state.point,It.pointLightShadows.value=U.state.pointShadow,It.hemisphereLights.value=U.state.hemi,It.directionalShadowMap.value=U.state.directionalShadowMap,It.directionalShadowMatrix.value=U.state.directionalShadowMatrix,It.spotShadowMap.value=U.state.spotShadowMap,It.spotLightMatrix.value=U.state.spotLightMatrix,It.spotLightMap.value=U.state.spotLightMap,It.pointShadowMap.value=U.state.pointShadowMap,It.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function xc(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Ts.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function vc(y,I){let B=Ot.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Ud(y,I,B,z,U){I.isScene!==!0&&(I=wt),M.resetTextureUnits();let ct=I.fog,gt=z.isMeshStandardMaterial?I.environment:null,Mt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Kn,Tt=(z.isMeshStandardMaterial?F:x).get(z.envMap||gt),Bt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!B.morphAttributes.position,be=!!B.morphAttributes.normal,rn=!!B.morphAttributes.color,Ce=_i;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ce=v.toneMapping);let Hn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,me=Hn!==void 0?Hn.length:0,kt=Ot.get(z),ho=f.state.lights;if(Y===!0&&(lt===!0||y!==b)){let un=y===b&&z.id===G;Ft.setState(z,y,un)}let xe=!1;z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==ho.state.version||kt.outputColorSpace!==Mt||U.isBatchedMesh&&kt.batching===!1||!U.isBatchedMesh&&kt.batching===!0||U.isInstancedMesh&&kt.instancing===!1||!U.isInstancedMesh&&kt.instancing===!0||U.isSkinnedMesh&&kt.skinning===!1||!U.isSkinnedMesh&&kt.skinning===!0||U.isInstancedMesh&&kt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&kt.instancingColor===!1&&U.instanceColor!==null||kt.envMap!==Tt||z.fog===!0&&kt.fog!==ct||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ft.numPlanes||kt.numIntersection!==Ft.numIntersection)||kt.vertexAlphas!==Bt||kt.vertexTangents!==Pt||kt.morphTargets!==It||kt.morphNormals!==be||kt.morphColors!==rn||kt.toneMapping!==Ce||Ct.isWebGL2===!0&&kt.morphTargetsCount!==me)&&(xe=!0):(xe=!0,kt.__version=z.version);let Ci=kt.currentProgram;xe===!0&&(Ci=Or(z,I,U));let yc=!1,js=!1,uo=!1,Oe=Ci.getUniforms(),Pi=kt.uniforms;if(ft.useProgram(Ci.program)&&(yc=!0,js=!0,uo=!0),z.id!==G&&(G=z.id,js=!0),yc||b!==y){Oe.setValue(N,"projectionMatrix",y.projectionMatrix),Oe.setValue(N,"viewMatrix",y.matrixWorldInverse);let un=Oe.map.cameraPosition;un!==void 0&&un.setValue(N,Dt.setFromMatrixPosition(y.matrixWorld)),Ct.logarithmicDepthBuffer&&Oe.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Oe.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,js=!0,uo=!0)}if(U.isSkinnedMesh){Oe.setOptional(N,U,"bindMatrix"),Oe.setOptional(N,U,"bindMatrixInverse");let un=U.skeleton;un&&(Ct.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Oe.setValue(N,"boneTexture",un.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(Oe.setOptional(N,U,"batchingTexture"),Oe.setValue(N,"batchingTexture",U._matricesTexture,M));let fo=B.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&Ct.isWebGL2===!0)&&Vt.update(U,B,Ci),(js||kt.receiveShadow!==U.receiveShadow)&&(kt.receiveShadow=U.receiveShadow,Oe.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Pi.envMap.value=Tt,Pi.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),js&&(Oe.setValue(N,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Od(Pi,uo),ct&&z.fog===!0&&ot.refreshFogUniforms(Pi,ct),ot.refreshMaterialUniforms(Pi,z,X,H,xt),Ts.upload(N,xc(kt),Pi,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ts.upload(N,xc(kt),Pi,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Oe.setValue(N,"center",U.center),Oe.setValue(N,"modelViewMatrix",U.modelViewMatrix),Oe.setValue(N,"normalMatrix",U.normalMatrix),Oe.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let un=z.uniformsGroups;for(let po=0,Bd=un.length;po<Bd;po++)if(Ct.isWebGL2){let bc=un[po];Qt.update(bc,Ci),Qt.bind(bc,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Od(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Fd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,I,B){Ot.get(y.texture).__webglTexture=I,Ot.get(y.depthTexture).__webglTexture=B;let z=Ot.get(y);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){let B=Ot.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){A=y,E=I,T=B;let z=!0,U=null,ct=!1,gt=!1;if(y){let Tt=Ot.get(y);Tt.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Tt.__webglFramebuffer===void 0?M.setupRenderTarget(y):Tt.__hasExternalTextures&&M.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);let Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);let Pt=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[I])?U=Pt[I][B]:U=Pt[I],ct=!0):Ct.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?U=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[B]:U=Pt,S.copy(y.viewport),O.copy(y.scissor),q=y.scissorTest}else S.copy(J).multiplyScalar(X).floor(),O.copy(Q).multiplyScalar(X).floor(),q=ht;if(ft.bindFramebuffer(N.FRAMEBUFFER,U)&&Ct.drawBuffers&&z&&ft.drawBuffers(y,U),ft.viewport(S),ft.scissor(O),ft.setScissorTest(q),ct){let Tt=Ot.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Tt.__webglTexture,B)}else if(gt){let Tt=Ot.get(y.texture),Bt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,B||0,Bt)}G=-1},this.readRenderTargetPixels=function(y,I,B,z,U,ct,gt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){ft.bindFramebuffer(N.FRAMEBUFFER,Mt);try{let Tt=y.texture,Bt=Tt.format,Pt=Tt.type;if(Bt!==En&&dt.convert(Bt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let It=Pt===lr&&(yt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Pt!==xi&&dt.convert(Pt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===pi&&(Ct.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U&&N.readPixels(I,B,z,U,dt.convert(Bt),dt.convert(Pt),ct)}finally{let Tt=A!==null?Ot.get(A).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(y,I,B=0){let z=Math.pow(2,-B),U=Math.floor(I.image.width*z),ct=Math.floor(I.image.height*z);M.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,y.x,y.y,U,ct),ft.unbindTexture()},this.copyTextureToTexture=function(y,I,B,z=0){let U=I.image.width,ct=I.image.height,gt=dt.convert(B.format),Mt=dt.convert(B.type);M.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,y.x,y.y,U,ct,gt,Mt,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,gt,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,y.x,y.y,gt,Mt,I.image),z===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B,z,U=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ct=y.max.x-y.min.x+1,gt=y.max.y-y.min.y+1,Mt=y.max.z-y.min.z+1,Tt=dt.convert(z.format),Bt=dt.convert(z.type),Pt;if(z.isData3DTexture)M.setTexture3D(z,0),Pt=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)M.setTexture2DArray(z,0),Pt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let It=N.getParameter(N.UNPACK_ROW_LENGTH),be=N.getParameter(N.UNPACK_IMAGE_HEIGHT),rn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ce=N.getParameter(N.UNPACK_SKIP_ROWS),Hn=N.getParameter(N.UNPACK_SKIP_IMAGES),me=B.isCompressedTexture?B.mipmaps[U]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,me.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Pt,U,I.x,I.y,I.z,ct,gt,Mt,Tt,Bt,me.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pt,U,I.x,I.y,I.z,ct,gt,Mt,Tt,me.data)):N.texSubImage3D(Pt,U,I.x,I.y,I.z,ct,gt,Mt,Tt,Bt,me),N.pixelStorei(N.UNPACK_ROW_LENGTH,It),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be),N.pixelStorei(N.UNPACK_SKIP_PIXELS,rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Hn),U===0&&z.generateMipmaps&&N.generateMipmap(Pt),ft.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),ft.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,ft.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Tl?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?ki:eu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ki?De:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},fl=class extends fr{};fl.prototype.isWebGL1Renderer=!0;var Ta=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};function ra(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function q_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Is=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends Is{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=t,a=2*e-i;break;case nh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eh:o=t,l=2*i-e;break;case nh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,w=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-m)*f+(1.5+m)*_+.5*g,R=m*f-m*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+w*o[c+E]+v*o[l+E]+R*o[u+E];return r}},ml=class extends Is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},gl=class extends Is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case oa:e=this.InterpolantFactoryMethodDiscrete;break;case la:e=this.InterpolantFactoryMethodLinear;break;case bo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&q_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===bo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=la;var Gi=class extends An{};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=oa;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends An{};_l.prototype.ValueTypeName="color";var xl=class extends An{};xl.prototype.ValueTypeName="number";var vl=class extends Is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Je.slerpFlat(r,0,o,c-a,o,c,l);return r}},pr=class extends An{InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.DefaultInterpolation=la;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends An{};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=oa;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends An{};yl.prototype.ValueTypeName="vector";var bl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Y_=new bl,Ml=class{constructor(t){this.manager=t!==void 0?t:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cl="\\[\\]\\.:\\/",$_=new RegExp("["+Cl+"]","g"),Pl="[^"+Cl+"]",Z_="[^"+Cl.replace("\\.","")+"]",J_=/((?:WC+[\/:])*)/.source.replace("WC",Pl),K_=/(WCOD+)?/.source.replace("WCOD",Z_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),tx=new RegExp("^"+J_+K_+j_+Q_+"$"),ex=["material","materials","bones","map"],Sl=class{constructor(t,e,i){let s=i||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},fe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($_,"")}static parseTrackName(t){let e=tx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Sl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);var mr=class{constructor(t,e,i=0,s=1/0){this.ray=new xa(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return wl(t,this,i,e),i.sort(Wh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)wl(t[s],this,i,e);return i.sort(Wh),i}};function Wh(n,t){return n.distance-t.distance}function wl(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)wl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var en=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function fu(n){if(n.comfortVersion===en.version)return n;let t={...n,comfortVersion:en.version,winDist:en.windowDistance,dockDist:1};return t.dockSize=1,(n.winScale==null||n.winScale===1)&&(t.winScale=en.windowScale),t}var nx=4096,Pa={width:1200,height:800},Us=160;function ix(n,t=nx){return n.map(({width:e,height:i,kind:s="window",slot:r=0})=>{let o=Math.ceil(e)+Us*2,a=Math.ceil(i)+Us*2,l=s==="window"?r%3*1360:0,c=s==="dock"?800:s==="keyboard"?3160:1200+Math.floor(r/3)*980,h=s==="dock"?400:s==="keyboard"?936:980;if(r>5||o>(s==="window"?1360:t)||a>h||l+o>t||c+a>t)throw new Error("Workspace texture is full; close a window first.");return[l,c,o,a]})}var La=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(t){var h;t.updateMatrixWorld(!0);let e=[];t.traverse(u=>{u.isCSS3DObject&&u.visible&&e.push(u)});for(let u of e)u.element.parentNode!==this.domElement&&this.domElement.append(u.element),u.element.style.transform="none";for(let u of this.slots.keys())e.some(d=>d.id===u)||this.slots.delete(u);let i=e.map(u=>{let d=u.element.classList.contains("dock")?"dock":u.element.classList.contains("kb")?"keyboard":"window";if(d==="window"&&!this.slots.has(u.id)){let m=new Set(this.slots.values()),g=0;for(;m.has(g);)g++;this.slots.set(u.id,g)}return{width:u.element.offsetWidth,height:u.element.offsetHeight,kind:d,slot:this.slots.get(u.id)||0}}),s;try{s=ix(i)}catch(u){this.lastError!==u.message&&(this.lastError=u.message,(h=window.nextvrMessage)==null||h.call(window,u.message));return}let r=[],o=[];e.forEach((u,d)=>{let m=u.element,[g,_,f,p]=s[d];m.style.left=`${g+Us}px`,m.style.top=`${_+Us}px`;let w=u.matrixWorld.clone().multiply(new se().makeScale(f,p,1)),v=+(m.dataset.curve||0);r.push({id:m.dataset.windowId||(i[d].kind==="dock"?"dock":i[d].kind),matrix:w.toArray(),rect:s[d],curve:v,glass:[Us/f,Us/p,i[d].width/f,i[d].height/p]});let R=m.getBoundingClientRect();for(let E of m.querySelectorAll("[data-native-browser]")){let T=E.getBoundingClientRect();if(!T.width||!T.height)continue;let A=E.dataset.nativeBrowser,G=E.dataset.url;if(!G)continue;let b=Math.round(T.width),S=Math.round(T.height),O={left:T.left,top:T.top,right:T.right,bottom:T.bottom};for(let D=E.parentElement;D&&D!==m;D=D.parentElement){let H=getComputedStyle(D);if(/(auto|scroll|hidden)/.test(H.overflow+H.overflowY)){let X=D.getBoundingClientRect();O.left=Math.max(O.left,X.left),O.top=Math.max(O.top,X.top),O.right=Math.min(O.right,X.right),O.bottom=Math.min(O.bottom,X.bottom)}}o.push({id:A,url:G,width:b,height:S});let q=O.right-O.left,tt=O.bottom-O.top;if(q<=0||tt<=0)continue;let P=u.matrixWorld.clone().multiply(new se().makeTranslation(O.left-R.left+q/2-i[d].width/2,i[d].height/2-(O.top-R.top+tt/2),.5)).multiply(new se().makeScale(q,tt,1));r.push({browser:A,matrix:P.toArray(),rect:[0,0,b,S],curve:+(m.dataset.curve||0),uv:[(O.left-T.left)/b,(T.bottom-O.bottom)/S,q/b,tt/S]})}});let a=2*Math.tan(iu.degToRad(36)),l=new se().makeTranslation(0,0,-1).multiply(new se().makeScale(a*1.5,a,1));r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,Pa.width,Pa.height]});let c=performance.now();if(c-this.last>=({low:66,auto:30,high:16}[document.documentElement.dataset.quality]||30)){this.last=c;let u=JSON.stringify(r),d=JSON.stringify(o);(u!==this.sent||d!==this.sentSpecs)&&(this.sent=u,this.sentSpecs=d,window.NativeXR.frame(u,d))}}invalidate(){this.sent=this.sentSpecs=null}};var pu=new L,sx=new Je,mu=new L,Os=class extends cn{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var In=new se,rx=new se,Ia=class{constructor(t={}){let e=this,i,s,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:i,height:s}},this.render=function(_,f){let p=f.projectionMatrix.elements[5]*o;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let w,v;f.isOrthographicCamera&&(w=-(f.right+f.left)/2,v=(f.top+f.bottom)/2);let R=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,E=f.isOrthographicCamera?`scale( ${R} )scale(`+p+")translate("+u(w)+"px,"+u(v)+"px)"+d(f.matrixWorldInverse):`scale( ${R} )translateZ(`+p+"px)"+d(f.matrixWorldInverse),A=(f.isPerspectiveCamera?"perspective("+p+"px) ":"")+E+"translate("+r+"px,"+o+"px)";a.camera.style!==A&&(h.style.transform=A,a.camera.style=A),g(_,_,f,E)},this.setSize=function(_,f){i=_,s=f,r=i/2,o=s/2,l.style.width=_+"px",l.style.height=f+"px",c.style.width=_+"px",c.style.height=f+"px",h.style.width=_+"px",h.style.height=f+"px"};function u(_){return Math.abs(_)<1e-10?0:_}function d(_){let f=_.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function m(_){let f=_.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(_,f,p,w){if(_.isCSS3DObject){let v=_.visible===!0&&_.layers.test(p.layers)===!0;if(_.element.style.display=v===!0?"":"none",v===!0){_.onBeforeRender(e,f,p);let R;_.isCSS3DSprite?(In.copy(p.matrixWorldInverse),In.transpose(),_.rotation2D!==0&&In.multiply(rx.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(pu,sx,mu),In.setPosition(pu),In.scale(mu),In.elements[3]=0,In.elements[7]=0,In.elements[11]=0,In.elements[15]=1,R=m(In)):R=m(_.matrixWorld);let E=_.element,T=a.objects.get(_);if(T===void 0||T.style!==R){E.style.transform=R;let A={style:R};a.objects.set(_,A)}E.parentNode!==h&&h.appendChild(E),_.onAfterRender(e,f,p)}}for(let v=0,R=_.children.length;v<R;v++)g(_.children[v],f,p,w)}}};var At=!!window.NativeXR,Zt=At?Pa:{width:innerWidth,height:innerHeight},xu={lang:null,handsOn:!0,handDraw:0,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"passthrough",quality:"auto",showFps:0},Le={...xu};try{Le={...xu,...JSON.parse(localStorage.getItem("nextvr.v1")||"{}")}}catch{}if(At){Le=fu(Le),Le.handsOn=!0;try{localStorage.setItem("nextvr.v1",JSON.stringify(Le))}catch{}}var Gt=Le,Bs=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Le))}catch{}},gu={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 p\xF4r do sol",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envSunset:"360\xB0 panorama \xB7 sunset",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 atardecer",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock"}},gr=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E"},{id:"fr",label:"Fran\xE7ais"},{id:"de",label:"Deutsch"},{id:"ko",label:"\uD55C\uAD6D\uC5B4"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),ax="pt",Fa=n=>gr.find(t=>t.id===n)||gr.find(t=>t.id===ax);var ox=()=>Fa(Le.lang).table||"pt",it=n=>(gu[ox()]||gu.pt)[n]||n,Fl=n=>gr.some(t=>t.id===n&&t.table)?(Le.lang=n,Bs(),Ae("lang"),!0):!1,Ua={},ve=(n,t)=>((Ua[n]||(Ua[n]=[])).push(t),t),Ae=(n,t)=>(Ua[n]||[]).forEach(e=>e(t));function he(n){let t=document.getElementById("toast");t.textContent=n,t.classList.add("on"),clearTimeout(he._t),he._t=setTimeout(()=>t.classList.remove("on"),2400)}var Ul=new Ta,Kt=new $e(72,1,.05,120);Kt.rotation.order="YXZ";var ue=new mi;Ul.add(ue);var hn=1.55;Kt.position.set(0,hn,0);var _r=At?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new fr({antialias:!0,alpha:!0});At||(_r.setClearColor(0,0),document.getElementById("gl").appendChild(_r.domElement));var xr=At?new La:new Ia;document.getElementById("css3d").appendChild(xr.domElement);if(At){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let t of["overlay","hud","toast","boot"])n.append(document.getElementById(t))}function lx(){let n=Le.quality;return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.6)}function Ba(){document.documentElement.dataset.quality=Le.quality,At||(Zt.width=innerWidth,Zt.height=innerHeight);let n=Zt.width,t=Zt.height;Kt.aspect=n/t,Kt.updateProjectionMatrix(),_r.setPixelRatio(lx()),_r.setSize(n,t),xr.setSize(n,t),Ae("resize")}addEventListener("resize",Ba);addEventListener("orientationchange",()=>setTimeout(Ba,120));Ba();ve("quality",Ba);var cx=Object.freeze(["passthrough","sunset","night","space"]),vu=()=>[{id:"passthrough",name:it("envPass"),thumb:null},{id:"sunset",name:it("envSunset"),thumb:"./env/sunset.jpg"},{id:"night",name:it("envNight"),thumb:"./env/night.jpg"},{id:"space",name:it("envSpace"),thumb:"./env/space.jpg"}];function Bl(n){var t,e;Le.env=cx.includes(n)?n:"passthrough",Bs(),Ae("env",Le.env),(e=(t=window.NativeXR)==null?void 0:t.env)==null||e.call(t,Le.env)}var Ke={ok:!1,has:!1,q:new Je,tmp:new Je,e:new Qn},hx=new Je,ux=new Je(-Math.SQRT1_2,0,0,Math.SQRT1_2),dx=new L(0,0,1),Oa=Math.PI/180;function fx(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*Oa}function px(n){n.alpha!=null&&(Ke.has=!0,Ke.e.set(n.beta*Oa,n.alpha*Oa,-n.gamma*Oa,"YXZ"),Ke.tmp.setFromEuler(Ke.e),Ke.tmp.multiply(ux),Ke.tmp.multiply(hx.setFromAxisAngle(dx,-fx())),Ke.q.copy(Ke.tmp))}async function vr(){if(At)return Ke.ok=Ke.has=!0,Ae("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(he("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",px,!0),Ke.ok=!0,setTimeout(()=>{Ke.has||he("Sem girosc\xF3pio: arraste para olhar")},1200),Ae("gyro",!0),!0)}catch{return he("Girosc\xF3pio indispon\xEDvel"),!1}}var mx=()=>Ke.ok&&Ke.has,Xi=null,Fs=0,Ol=0;addEventListener("pointerdown",n=>{At||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Xi={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Xi&&(Fs-=(n.clientX-Xi.x)*.0032,Ol=Math.max(-1.2,Math.min(1.2,Ol-(n.clientY-Xi.y)*.0032)),Xi={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Xi=null);addEventListener("pointercancel",()=>Xi=null);function yr(){let n=new Qn().setFromQuaternion(Kt.quaternion,"YXZ");ue.rotation.y=n.y,ue.position.set(0,0,0),Ae("recenter"),he(it("centered"))}var yu=[],zs=n=>yu.push(n),_u=performance.now(),Da=0,Il=0,Dl=0,Na=0,Nl=0,bu=0,nn=null,Mu=()=>{let n=performance.now();Dl>0&&(Na+=(n-Dl)/1e3,Nl++,Na>=1&&(bu=Math.round(Nl/Na),Na=0,Nl=0)),Dl=n};function Su(n){let t=Math.min((n-_u)/1e3,.05);_u=n,At||(mx()?(Kt.quaternion.slerp(Ke.q,1-Math.exp(-t*12)),Fs&&(Kt.rotateY(Fs),Fs=0)):(Kt.quaternion.setFromEuler(new Qn(Ol,Kt.rotation.y+Fs,0,"YXZ")),Fs=0)),Kt.position.set(0,hn,0);for(let e of yu)e(t,n);if(_r.render(Ul,Kt),xr.render(Ul,Kt),Da+=t,Il++,Da>=1){let e=document.getElementById("fps");e.textContent=Le.showFps?Math.round(Il/Da)+" fps"+(At&&Le.handsOn?" \xB7 tracking "+bu+" fps":"")+(At&&Le.handsOn?gx():""):"",Da=0,Il=0}requestAnimationFrame(Su)}requestAnimationFrame(Su);Bl(Le.env);if(At){let n=new se,t=!0;window.nextvrPose=e=>{n.fromArray(e).invert(),Kt.quaternion.setFromRotationMatrix(n),Kt.position.set(0,hn,0),Kt.updateMatrixWorld(!0),t&&(ue.rotation.y=new Qn().setFromQuaternion(Kt.quaternion,"YXZ").y,t=!1)},window.nextvrMessage=he,window.nextvrDiag=e=>{nn=e}}function gx(){if(!nn)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,t=[],e=n(nn.camera);e!==null&&t.push("cam "+e);let i=n(nn.infer);return i!==null&&t.push("infer "+i+"ms"),nn.delegate&&t.push(String(nn.delegate).split(" ")[0]),typeof nn.narrow=="number"&&typeof nn.wide=="number"&&nn.narrow+nn.wide>0&&t.push("slots "+(nn.narrow>=nn.wide?1:2)),n(nn.stale)>0&&t.push("stale "+Math.round(nn.stale)),t.length?" \xB7 "+t.join(" \xB7 "):""}var za=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(t,e){if(t==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==t&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=t,e?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let t=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,t}},ka=class{constructor({decideMs:t=150,dragOnPx:e=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=t,this.dragOnPx=e,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(t,e,i,s){return this.mode="undecided",this.handId=t,this.anchorX=e,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(t,e,i,s){if(this.mode==="idle"||t!==this.handId)return this.mode;let r=Math.hypot(e-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var Dn=document.createElement("canvas");Dn.id="novamr-canvas";var Xt=Dn.getContext("2d"),ks=document.createElement("div");ks.className="novamr-cursor";var Hs=document.createElement("div");Hs.className="novamr-cursor";var ni=document.createElementNS("http://www.w3.org/2000/svg","svg");ni.setAttribute("viewBox","0 0 80 80");ni.style.cssText="position:absolute;width:80px;height:80px;z-index:4;pointer-events:none;transform:translate(-50%,-50%);opacity:0;transition:opacity .15s";var qi=document.createElementNS("http://www.w3.org/2000/svg","circle");qi.setAttribute("cx","40");qi.setAttribute("cy","40");qi.setAttribute("r","34");qi.setAttribute("fill","none");qi.setAttribute("stroke","rgba(255,255,255,.25)");qi.setAttribute("stroke-width","4");var _n=document.createElementNS("http://www.w3.org/2000/svg","circle");_n.setAttribute("cx","40");_n.setAttribute("cy","40");_n.setAttribute("r","34");_n.setAttribute("fill","none");_n.setAttribute("stroke","#27e8ff");_n.setAttribute("stroke-width","4");_n.setAttribute("stroke-linecap","round");var kl=2*Math.PI*34;_n.setAttribute("stroke-dasharray",kl);_n.setAttribute("stroke-dashoffset",kl);_n.setAttribute("transform","rotate(-90 40 40)");ni.appendChild(qi);ni.appendChild(_n);var zl=!1;function _x(){if(zl)return;zl=!0;let n=document.getElementById("head-overlay")||document.body;[Dn,ks,Hs,ni].forEach(t=>n.appendChild(t)),Dn.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;z-index:2;pointer-events:none;background:transparent",ks.style.cssText=Hs.style.cssText="position:absolute;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle,#27e8ff 0%,#00bfff 45%,rgba(0,191,255,0) 70%);box-shadow:0 0 18px #00dfff,0 0 36px #00bfff;transform:translate(-50%,-50%) scale(0);z-index:3;pointer-events:none;transition:transform .1s ease-out",wu(),window.addEventListener("resize",wu)}function wu(){Dn.width=Zt.width,Dn.height=Zt.height}function xx(n,t){return Math.hypot(n.x-t.x,n.y-t.y)}function Ha(n,t){let e=t.x-n.x,i=t.y-n.y,s=Math.hypot(e,i)||1;return{x:-i/s,y:e/s}}function vx(n){let t=[],e=[];for(let i=0;i<n.length;i++){let s;if(i===0)s=Ha(n[0],n[1]);else if(i===n.length-1)s=Ha(n[i-1],n[i]);else{let o=Ha(n[i-1],n[i]),a=Ha(n[i],n[i+1]);s={x:(o.x+a.x)/2,y:(o.y+a.y)/2};let l=Math.hypot(s.x,s.y)||1;s.x/=l,s.y/=l}let r=i===n.length-1?5:Math.max(7,xx(n[i],n[Math.min(i+1,n.length-1)])*.32);t.push({x:n[i].x+s.x*r,y:n[i].y+s.y*r}),e.push({x:n[i].x-s.x*r,y:n[i].y-s.y*r})}return{left:t,right:e}}function yx(n){let{left:t,right:e}=vx(n);Xt.beginPath(),Xt.moveTo(e[0].x,e[0].y);for(let i=1;i<e.length;i++)Xt.lineTo(e[i].x,e[i].y);for(let i=t.length-1;i>=0;i--)Xt.lineTo(t[i].x,t[i].y);Xt.closePath(),Xt.fillStyle="rgba(39,232,255,.18)",Xt.fill(),Xt.shadowColor="#00dfff",Xt.shadowBlur=18,Xt.strokeStyle="#27e8ff",Xt.lineWidth=2.5,Xt.lineJoin="round",Xt.lineCap="round",Xt.beginPath(),Xt.moveTo(e[0].x,e[0].y);for(let i=1;i<e.length;i++)Xt.lineTo(e[i].x,e[i].y);for(let i=t.length-1;i>=0;i--)Xt.lineTo(t[i].x,t[i].y);Xt.closePath(),Xt.stroke(),Xt.shadowBlur=0}function bx(n){let t=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];Xt.shadowColor="#00dfff",Xt.shadowBlur=14,Xt.strokeStyle="#27e8ff",Xt.lineWidth=2.2,Xt.lineJoin="round",Xt.lineCap="round",Xt.beginPath(),Xt.moveTo(n[0].x,n[0].y);for(let e of[1,2,5,9,13,17,0])Xt.lineTo(n[e].x,n[e].y);Xt.stroke(),Xt.shadowBlur=0;for(let e of t)yx(e.map(i=>n[i]))}function Mx(n,t,e,i,s){let r=new Array(21);for(let o=0;o<21;o++){let a=n[o*3],l=n[o*3+1];r[o]={x:(.5-(a-.5)*i)*t,y:(.5-(l-.5)*s)*e}}return r}ve("handframe",({hands:n})=>{if(!zl)return;let t=Dn.width,e=Dn.height;if(Xt.clearRect(0,0,t,e),ks.classList.remove("active"),Hs.classList.remove("active"),!(!n||!n.length))for(let i=0;i<Math.min(n.length,2);i++){let s=n[i];if(!s||!s._pts)continue;let r=s._pts,o=i===0?ks:Hs;bx(r);let a=r[4],l=r[8],c=Math.hypot(a.x-l.x,a.y-l.y);if(c<45){let h=(a.x+l.x)/2,u=(a.y+l.y)/2,d=Math.max(.15,Math.min(1,(45-c)/45));o.style.left=h+"px",o.style.top=u+"px",o.style.transform="translate(-50%,-50%) scale("+d+")",o.classList.add("active")}else o.style.transform="translate(-50%,-50%) scale(0)",o.classList.remove("active")}});function Vs(n,t,e){if(e<=0){ni.style.opacity="0";return}ni.style.left=n+"px",ni.style.top=t+"px",ni.style.opacity="1",_n.setAttribute("stroke-dashoffset",String(kl*(1-e)))}var br=!1;async function Eu(){var n;if(br)return!0;if(_x(),br=!0,At&&((n=window.NativeXR)!=null&&n.hands))try{window.NativeXR.hands(!0)}catch{}return!0}function Tu(){var n;if(br&&(br=!1,Vs(0,0,0),Xt.clearRect(0,0,Dn.width,Dn.height),ks.classList.remove("active"),Hs.classList.remove("active"),At&&((n=window.NativeXR)!=null&&n.hands)))try{window.NativeXR.hands(!1)}catch{}}var Au=()=>br;function Ru(n,t,e,i,s){return!n||!n.points||n.points.length<63?null:Mx(n.points,t,e,i,s)}(function(){let t=`
    html.native #novamr-canvas{position:absolute;left:0;top:0;width:1200px;height:800px;background:transparent}
    html.native .novamr-cursor{position:absolute}`,e=document.createElement("style");e.textContent=t,document.head.appendChild(e)})();var Yi=[],at={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},Rn=new za,Gs=new ka,Iu=Math.tan(36*Math.PI/180),Sx=Iu*1.5,Xa=!1,Vl=-1/0,Ga=1,Wa=1,wx=500,Du=()=>Xa&&Au();async function Mr(){if(!At)return he("Hand tracking requer o app Android."),!1;let n=await Eu();return Xa=n,n?(Ae("hands",!0),!0):(Ae("hands",!1),he("N\xE3o foi poss\xEDvel iniciar o hand tracking."),!1)}function Nu(n){for(let t of n)Ae(`pinch${t}`,at)}function qa(){let n=Rn.cancel();Gs.reset(),at.down=at.active=!1,at.phase=Rn.phase,at.hand=null,at.mode="idle",Ax(),Vs(0,0,0),Nu(n)}function Ya(){qa()}function Gl(){qa(),Yi.length=0,Xa=!1,Vl=-1/0,Tu(),Ae("phonehands",{hands:[],consumed:new Set,scaleX:Ga,scaleY:Wa}),Ae("hands",!1)}function Wl(n){return{x:.5+n[0]/(2*Sx),y:.5-n[1]/(2*Iu)}}var Ex=250,Cu=1.6,Pu=.06,sn={x:0,y:0},Xs=0;function $a(n=performance.now()){if(!at.active)return{x:at.x,y:at.y};let t=n-Xs;if(!(t>0)||t>Ex)return{x:at.x,y:at.y};let e=t/1e3,i=s=>Math.max(-Pu,Math.min(Pu,s));return{x:Math.min(1,Math.max(0,at.x+i(sn.x*e))),y:Math.min(1,Math.max(0,at.y+i(sn.y*e)))}}function Tx(n,t){if(at.active&&t-Xs>4&&t-Xs<300){let e=(t-Xs)/1e3,i=s=>Math.max(-Cu,Math.min(Cu,s));sn.x+=(i((n.x-at.x)/e)-sn.x)*.35,sn.y+=(i((n.y-at.y)/e)-sn.y)*.35,Math.hypot(sn.x,sn.y)<.12&&(sn.x=sn.y=0)}else sn.x=sn.y=0;Xs=t}function Ax(){sn.x=sn.y=0,Xs=0}function Rx(n,t,e){var h;if(!Xa)return;Ga=t||1,Wa=e||1;let i=performance.now();Vl=i,Yi.length=0;let s=(n==null?void 0:n.hands)||[];for(let u of s)u._pts=Ru(u,Zt.width,Zt.height,Ga,Wa),Yi.push(u);Ae("handframe",{hands:Yi,timestampNs:i*1e6}),(h=Mu)==null||h(n);let r=new Set,o=Yi.filter(u=>!r.has(u.id)),a=Rn.down&&o.find(u=>u.id===Rn.handId)||o.find(u=>u.pinching)||[...o].sort((u,d)=>(d.palmWidth||.1)-(u.palmWidth||.1))[0];if(!a){qa();return}let l=Wl(a.aim);Tx(l,i),at.x=l.x,at.y=l.y,at.active=!0,at.hand=a;let c=Rn.update(a.id,!!a.pinching);c.includes("down")?Gs.begin(a.id,l.x*Zt.width,l.y*Zt.height,i):c.includes("up")?Gs.end():c.includes("cancel")&&Gs.reset(),Rn.down&&Gs.sample(a.id,l.x*Zt.width,l.y*Zt.height,i),at.mode=Gs.mode,at.down=Rn.down,at.phase=Rn.phase,Nu(c)}At&&(window.nextvrHands=Rx);var Cx=3e3,Va=0,Hl=null,Ws=0;function Lu(){Va=0,Hl=null,Ws=0,Vs(0,0,0)}zs(()=>{if(!At)return;let n=performance.now();if(!(at.mode!=="idle"||at.phase!=="hovering")&&Rn.down&&at.active&&at.hand){if((Hl!==Rn.handId||Va===0)&&(Hl=Rn.handId,Va=n,Ws=0),Ws=Math.min(1,(n-Va)/Cx),Vs(at.x*Zt.width,at.y*Zt.height,Ws),Ws>=1){Vs(0,0,0),Lu(),yr();return}}else Ws>0&&Lu()});zs(()=>{Yi.length&&performance.now()-Vl>wx&&(Yi.length=0,qa(),Ae("phonehands",{hands:[],consumed:new Set,scaleX:Ga,scaleY:Wa}))});var Px=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),Lx=Object.freeze({appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="m15 18-6-6 6-6"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>'}),Ix=Object.freeze({...Lx,...Px});function qt(n,t="ui-icon"){let e=Ix[n];if(!e)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${e}</svg>`}var Se=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),Sr=(n,t,e)=>Math.max(t,Math.min(e,n)),je=n=>Number.isFinite(n)?n:0;function Xl(n,t=0,e=1.55,i=null){let s=je(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:e,o=je(n==null?void 0:n.z),a=Number.isFinite(i)?i:Math.hypot(s,o);a<1e-5&&(a=Se.minDistance,s=0,o=-a);let l=Sr(Math.atan2(-s,-o),-Se.maxYaw,Se.maxYaw);a=Sr(a,Se.minDistance,Se.maxDistance);let c=Math.max(0,je(t)),h=e+Se.lowerEdgeFromEye+c,u=e+Se.upperEdgeFromEye-c;return r=h<=u?Sr(r,h,u):e,{x:-Math.sin(l)*a,y:r,z:-Math.cos(l)*a}}function Uu(n,t,e=1200,i=800){return!n||!t?0:Math.hypot((je(t.x)-je(n.x))*e,(je(t.y)-je(n.y))*i)}function ql(n,t,e,i){return Uu(n,t,e,i)>=Se.dragActivationPx}function Ou(n,t,e,i){return Uu(n,t,e,i)>=Se.resizeActivationPx}function Yl(n,t){let e=je(n==null?void 0:n.x),i=je(n==null?void 0:n.y),s=je(n==null?void 0:n.z),r=je(t==null?void 0:t.x)-e,o=je(t==null?void 0:t.y)-i,a=je(t==null?void 0:t.z)-s,l=Math.hypot(r,o,a);if(!Number.isFinite(l)||l<=Se.motionDeadZone)return{x:e,y:i,z:s};let h=Math.min(l,Se.maxMotionStep)/l;return{x:e+r*h,y:i+o*h,z:s+a*h}}var Dx=Object.freeze({maxAngle:1.15});function wr(n){let t=Number.isFinite(n)?n:0;return Math.max(0,Math.min(Dx.maxAngle,t))}function $l(n,t){let e=wr(t);return e<1e-4?1/0:Math.max(0,n)/2/Math.sin(e)}function Za(n,t){if(!Number.isFinite(t)||t<=0)return 0;let e=t*t-n*n;return e<=0?t:t-Math.sqrt(e)}function bi(n,t=Se.maxResize){let e=Sr(je(t),Se.minResize,Se.maxResize);return Sr(Number.isFinite(n)?n:1,Se.minResize,e)}function Fu(n,t,e=1.55){let i=Math.max(1e-5,je(t)),s=Math.min(n-(e+Se.lowerEdgeFromEye),e+Se.upperEdgeFromEye-n);return bi(s/i)}function Bu(n,t,e,i){return!(t>1)||!Number.isFinite(e)?bi(n,i):bi(n*e/t,i)}function zu(n,t){let e=bi(n),s=bi(t)-e;return Math.abs(s)<.004?e:bi(e+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function ku(n,t){let e=Math.max(0,Math.min(5,n|0)),i=Math.min(3,e),s=e-i,r=[];for(let o=0;o<i;o++)r.push({angle:o===0?0:o%2?t:-t,row:0});for(let o=0;o<s;o++)r.push({angle:s===1?0:o===0?-t/2:t/2,row:1});return r}var Hu=1.22;function Nx(n,t){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,t)))}function Vu({width:n,dist:t,gap:e=.5,outerLimit:i=1.3}){let s=Nx(n,t);return Math.min(s*(1+Math.max(0,e)),Math.max(0,i))}function Gu(n){let t=null;for(let e of n)(!t||(e.lastFocus||0)<(t.lastFocus||0))&&(t=e);return t}var ye=.00105,re=[],Ar=null,Nn={y:hn-.6,z:-1.7,h:.12},tc=class{constructor({id:t,title:e,node:i,w:s=1040,h:r=660,onboarding:o=!1}){this.onboarding=o,this.id=t,this.title=e,this.w=s,this.h=r,this.pinned=!0,this.target=new L,this.resizeScale=1,this.slot=0,this.curve=wr(o?0:Gt.win360?Gt.win360K:0),this.curveRadius=$l(s,this.curve);let a=document.createElement("div");a.className="win-shell",a.dataset.windowId=t,a.dataset.resizeScale="1",a.style.width=s+"px";let l=document.createElement("div");l.className="win",l.style.width=s+"px",l.style.height=r+"px",l.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${it("repin")}" title="${it("repin")}">${qt("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${it("close")}" title="${it("close")}">${qt("x")}</button>
      </div><div class="win-body"></div>`,l.querySelector(".win-title").textContent=e,l.querySelector(".win-body").appendChild(i),l.addEventListener("pointerdown",()=>Un(this),!0),l.querySelector(".win-bar").addEventListener("click",u=>{let d=u.target.closest("[data-act]");d&&(d.dataset.act==="close"?Zs(this):d.dataset.act==="curve"?this.setCurve(this.curve>0?0:wr(Gt.win360K)):Ox(this))});let c=document.createElement("div");c.className="win-handle",c.title=it("moveWindow"),c.setAttribute("aria-label",it("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.title=it("resize"),h.setAttribute("aria-label",it("resize")),h.innerHTML=qt("move"),a.append(l,c,h),this.el=l,this.shell=a,this.handle=c,this.resizeHandle=h,a.dataset.curve=String(this.curve),o&&(l.querySelector(".win-bar").hidden=!0),this.obj=new Os(a),this.obj.scale.setScalar(ye*(this.onboarding?en.welcomeScale:Gt.winScale)),ue.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=Zl(s*ye,r*ye,this,this.hitSegments),this.bendHit(),this.grab=Zl(260*ye,90*ye,this),this.grab.userData.isHandle=!0,this.resizeHit=Zl(112*ye,112*ye,this),this.resizeHit.userData.isResize=!0,!At){let u=d=>({x:d.clientX/Zt.width,y:d.clientY/Zt.height});c.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);ac(this,m.x,m.y,"desktop"),c.setPointerCapture(d.pointerId)}),c.addEventListener("pointermove",d=>{if(te.win===this){let m=u(d);oc(m.x,m.y)}}),c.addEventListener("pointerup",ji),c.addEventListener("pointercancel",ji),h.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);nd(this,m.x,m.y),h.setPointerCapture(d.pointerId)}),h.addEventListener("pointermove",d=>{if(we.win===this){let m=u(d);id(m.x,m.y)}}),h.addEventListener("pointerup",$s),h.addEventListener("pointercancel",$s)}}setCurve(t){this.curve=wr(t),this.curveRadius=$l(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let e=this.el.querySelector('[data-act="curve"]');e&&e.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new gn(this.w*ye,this.h*ye,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(t){return Za(t,this.curveRadius)*ye}bendHit(){let t=this.hit.geometry.attributes.position;if(this.curve<=0)for(let e=0;e<t.count;e++)t.setZ(e,0);else for(let e=0;e<t.count;e++)t.setZ(e,Za(t.getX(e)/ye,this.curveRadius)*ye);t.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let t=this.obj;t.position.copy(this.target);let e=Math.atan2(-t.position.x,-t.position.z)*Gt.winCurve,i=Math.hypot(t.position.x,t.position.z)||.001,s=Math.atan2(hn-t.position.y,i)*Gt.winTilt*-1;t.rotation.set(s,e,0,"YXZ");let r=(this.onboarding?en.welcomeScale:Gt.winScale)*this.resizeScale;t.scale.setScalar(ye*r),this.hit.position.copy(t.position),this.hit.rotation.copy(t.rotation),this.hit.scale.setScalar(r);let o=(this.h/2+34)*ye*r;this.grab.position.copy(t.position),this.grab.rotation.copy(t.rotation),this.grab.translateY(-o),this.grab.scale.setScalar(r),this.resizeHit.position.copy(t.position),this.resizeHit.rotation.copy(t.rotation),this.resizeHit.translateX((this.w/2-48)*ye*r),this.resizeHit.translateY(-(this.h/2-48)*ye*r),this.resizeHit.translateZ(this.bulge(this.w/2-48)+.003),this.resizeHit.scale.setScalar(r)}};function Zl(n,t,e,i=1){let s=new Ze(new gn(n,t,i,1),new ti({visible:!1}));return s.userData.win=e,ue.add(s),s}function ai(){for(let r of re)r.onboarding&&r.target.set(0,hn,-en.welcomeDistance);let n=re.filter(r=>r.pinned&&!r.onboarding),t=n.length;if(!t)return;let e=At?Gt.winDist:-Nn.z+.5+(Gt.winDist-2.2),i=Math.max(...n.map(r=>r.w*r.resizeScale))*ye*Gt.winScale,s=At?Vu({width:i,dist:e,gap:.5,outerLimit:Se.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));ku(t,s).forEach(({angle:r,row:o},a)=>{let l=n[a],c=l.h*ye*Gt.winScale*l.resizeScale,h=Nn.y+Nn.h/2+.14+c/2,u=Math.sin(r)*e,d=-Math.cos(r)*e,m=o===0?h:Math.min(h+c*2*(Hu-1)+c,hn+Se.upperEdgeFromEye-c);l.target.set(u,m,d)})}ve("recenter",ai);ve("resize",ai);function oi(n){let t=re.find(s=>s.id===n.id);if(t)return Un(t),t;let e=re.filter(s=>!s.onboarding);if(e.length>=5){let s=Gu(e);s&&(he(`${it("arcFull")}: ${s.title}`),Zs(s))}let i=new tc(n);return re.push(i),ai(),Un(i),i.obj.position.copy(i.target),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),Ae("wins",re),i}function Zs(n){if(!n)return;let t=re.indexOf(n);t<0||(te.win===n&&ji(),we.win===n&&$s(),re.splice(t,1),ue.remove(n.obj),ue.remove(n.hit),ue.remove(n.grab),ue.remove(n.resizeHit),n.shell.remove(),Ar===n&&(Ar=re[re.length-1]||null),ai(),Ae("wins",re))}function Un(n){Ar!==n&&(Ar=n,n.lastFocus=performance.now(),re.forEach(t=>t.el.classList.toggle("focus",t===Ar)))}function Ox(n){n.pinned=!0,n.shell.classList.remove("free"),ai()}var yn=new mr,ja=new $t,te={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},we={win:null,start:null,active:!1,startScale:1,startDistance:1},Qe={source:null,start:null,active:!1,plane:null,anchor:null};function Qi(n,t,e=yn){return Kt.updateMatrixWorld(!0),ue.updateMatrixWorld(!0),ja.set(n*2-1,1-t*2),e.setFromCamera(ja,Kt),e}function Fx(n){return n.h*ye*Gt.winScale*n.resizeScale/2}function Bx(n,t,e=null){let i=Xl(t,Fx(n),hn,e);return new L(i.x,i.y,i.z)}function ac(n,t,e,i="handle",s=null){if(n.onboarding||we.win)return!1;te.win&&ji(),Un(n),Qi(t,e);let r=n.obj.getWorldPosition(new L),o=new ln().setFromNormalAndCoplanarPoint(yn.ray.direction.clone(),r),a=yn.ray.intersectPlane(o,new L);if(!a)return!1;let l=ue.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(te,{win:n,source:i,hand:s,start:{x:t,y:e},active:!1,plane:o,anchor:{hit:a.clone(),center:r.clone(),radius:c,applied:new L}}),!0}function zx(){let n=te.win;!n||te.active||(te.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),ai())}function oc(n,t){let e=te.win;if(!e)return!1;Qi(n,t);let i=yn.ray.intersectPlane(te.plane,new L);if(!i)return!1;if(!te.active){if(!ql(te.start,{x:n,y:t},Zt.width,Zt.height))return!1;zx()}let s=te.anchor,r=i.clone().sub(s.hit);s.applied.copy(Yl(s.applied,r));let o=s.center.clone().add(s.applied),a=Bx(e,ue.worldToLocal(o),s.radius);return e.target.copy(a),e.obj.position.copy(e.target),!0}function ji(){te.win&&te.win.shell.classList.remove("moving"),Object.assign(te,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function td(n,t,e="pinch"){if(!Mi||te.win||we.win)return!1;Qe.start&&wi(),Qi(n,t);let i=Ue.getWorldPosition(new L),s=new ln().setFromNormalAndCoplanarPoint(yn.ray.direction.clone(),i),r=yn.ray.intersectPlane(s,new L);return r?(Object.assign(Qe,{source:e,start:{x:n,y:t},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new L}}),ee.classList.add("grab-armed"),ge.setAttribute("aria-pressed","true"),!0):!1}function kx(){!Qe.start||Qe.active||(Qe.active=!0,ee.classList.remove("grab-armed"),ee.classList.add("moving"))}function lc(n,t){if(!Qe.start)return!1;Qi(n,t);let e=yn.ray.intersectPlane(Qe.plane,new L);if(!e)return!1;if(!Qe.active){if(!ql(Qe.start,{x:n,y:t},Zt.width,Zt.height))return!1;kx()}let i=Qe.anchor,s=e.clone().sub(i.hit);i.applied.copy(Yl(i.applied,s));let r=i.center.clone().add(i.applied),o=ue.worldToLocal(r),a=Xl(o,Nn.h/2,hn);return $i=new L(a.x,a.y,a.z),Ki=Math.atan2(-a.x,-a.z),Ir(),!0}function wi(){ee==null||ee.classList.remove("grab-armed","moving"),ge==null||ge.setAttribute("aria-pressed","false"),Object.assign(Qe,{source:null,start:null,active:!1,plane:null,anchor:null})}function ed(n,t,e){Kt.updateMatrixWorld(!0),ue.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new L).project(Kt),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((t-s)*Zt.width,(e-r)*Zt.height)}function nd(n,t,e){return n.onboarding||te.win?!1:(we.win&&$s(),Un(n),Object.assign(we,{win:n,start:{x:t,y:e},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,ed(n,t,e))}),!0)}function id(n,t){let e=we.win;if(!e)return!1;if(!we.active){if(!Ou(we.start,{x:n,y:t},Zt.width,Zt.height))return!1;we.active=!0,e.shell.classList.add("resizing")}let i=e.h*ye*Gt.winScale/2,s=Math.max(we.startScale,Fu(e.obj.position.y,i,hn)),r=Bu(we.startScale,we.startDistance,ed(e,n,t),s);return e.resizeScale=bi(zu(e.resizeScale,r),s),e.shell.dataset.resizeScale=e.resizeScale.toFixed(3),!0}function $s(){we.win&&we.win.shell.classList.remove("resizing"),Object.assign(we,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function Rr(n,t){Qi(n,t);let e=[];for(let a of re)a.onboarding||e.push(a.resizeHit,a.grab),e.push(a.hit);let i=yn.intersectObjects(e,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),o=i.object.geometry.parameters;return{win:s,u:r.x/o.width+.5,v:.5-r.y/o.height,distance:i.distance}}var Ie=null,xn=null,Hx=n=>{var t;return((t=n==null?void 0:n.closest)==null?void 0:t.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function Vx(n,t,e,i,s){var l,c;let r=s?Hx(s):null;t===0&&(n.target=r,n.activation=r);let o=n.target||r;if(!o)return;let a=t===0?"pointerdown":t===1?"pointerup":t===2?"pointermove":"pointercancel";o.dispatchEvent(new PointerEvent(a,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:t===0||t===2?1:0,clientX:e,clientY:i})),t===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function ec(n,t,e=n.x,i=n.y,s=null){var r;n.id==="shell"&&((r=n.win)!=null&&r.onboarding)?Vx(n,t,e,i,s):window.NativeXR.handTouch(n.id,t,e,i)}function Ji(n,t){let e=n.win.el,i=n.u*e.offsetWidth,s=n.v*e.offsetHeight,r=e.getBoundingClientRect(),o=document.elementFromPoint(r.left+i,r.top+s),a=o==null?void 0:o.closest("[data-native-browser]"),l=a==null?void 0:a.getBoundingClientRect(),c=a?a.dataset.nativeBrowser:"shell",h=r.left+i-((l==null?void 0:l.left)||0),u=r.top+s-((l==null?void 0:l.top)||0);Ie&&Ie.id!==c&&(ec(Ie,3),Ie=null,t!==0)||(t===0&&(Ie={id:c,win:n.win,x:h,y:u}),Ie&&Ie.id===c&&(Ie.x=h,Ie.y=u,ec(Ie,t,h,u,o)),(t===1||t===3)&&(Ie=null))}function sd(){Ie&&ec(Ie,3),Ie=null,xn=null,ji(),$s(),wi()}ve("pinchcancel",sd);function Tr(n,t){if(At){Ji(n,t==="down"?0:1);return}let e=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=rd(n.win.el,e,i);s&&(t==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function rd(n,t,e){let i=null,s=r=>{for(let o of r.children){let a=Gx(o,n);t>=a.l&&t<=a.r&&e>=a.t&&e<=a.b&&(i=o,s(o))}};return s(n),i||n}function Gx(n,t){let e=0,i=0,s=n;for(;s&&s!==t;)e+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:e,t:i,r:e+n.offsetWidth,b:i+n.offsetHeight}}ve("pinchdown",()=>{var e;let n=Rr(at.x,at.y),t=Zx(at.x,at.y);if(t&&(!n||t.distance<n.distance)){td(at.x,at.y,"pinch");return}if(n!=null&&n.resize){nd(n.win,at.x,at.y);return}if(n!=null&&n.handle){ac(n.win,at.x,at.y,"handle",(e=at.hand)==null?void 0:e.id);return}if(n){Un(n.win),xn={win:n.win,hit:n};return}pd("down")||cd("down")});ve("pinchup",()=>{if(xn&&at.mode==="drag"&&(Tr(xn.hit,"down"),xn=null),xn){let t=Rr(at.x,at.y),e=t&&!t.handle&&!t.resize&&t.win===xn.win?t:xn.hit;xn=null,Tr(e,"down"),Tr(e,"up");return}if(Ie){let t=Rr(at.x,at.y);t&&t.win===Ie.win&&!t.handle&&!t.resize?Ji(t,1):sd();return}if(we.win){$s();return}if(te.win){ji();return}if(Qe.start){lc(at.x,at.y),wi();return}let n=Rr(at.x,at.y);if(n&&!n.handle&&!n.resize){Tr(n,"up");return}pd("up")||cd("up")});var ee=document.createElement("div");ee.className="dock";var ge=document.createElement("button");ge.type="button";ge.className="dock-grab";ge.title=it("moveDock");ge.setAttribute("aria-label",it("moveDock"));ge.setAttribute("aria-pressed","false");var Ue=new Os(ee);ue.add(Ue);var si=new Ze(new gn(1,1),new ti({visible:!1})),ii=new Ze(new gn(1,1),new ti({visible:!1}));ue.add(si,ii);if(!At){let n=t=>({x:t.clientX/Zt.width,y:t.clientY/Zt.height});ge.addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation();let e=n(t);td(e.x,e.y,"desktop")&&ge.setPointerCapture(t.pointerId)}),ge.addEventListener("pointermove",t=>{if(Qe.source==="desktop"){let e=n(t);lc(e.x,e.y)}}),ge.addEventListener("pointerup",t=>{Qe.source==="desktop"&&(wi(),ge.hasPointerCapture(t.pointerId)&&ge.releasePointerCapture(t.pointerId))}),ge.addEventListener("pointercancel",wi)}var Mi=!0;function Qa(n){Mi=!!n,Ue.visible=Mi,Mi||(Pr=-1,wi())}var Wx=[],Si=[],nc=[],Xx=qt("wifi"),qx='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',Yx='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function ad(n){Wx=n,Si=[],nc.length=0,ee.innerHTML="";for(let t of n){if(t.kind==="sep"){ee.appendChild($x());continue}if(t.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",ee.appendChild(i);continue}let e=document.createElement("button");if(e.dataset.id=t.id,e.title=t.label||"",e.setAttribute("aria-label",t.label||t.id),t.kind==="avatar")e.className="dock-av",e.innerHTML=Yx;else if(t.kind==="status")e.className="dock-status",e.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${Xx}</span><span class="dk-bat">${qx}</span>`;else if(t.kind==="tool")e.className="dock-tool",e.innerHTML=t.svg;else if(e.className="dock-app"+(t.launcher?" dock-launcher":""),t.bg&&(e.style.background=t.bg),e.innerHTML=t.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":t.svg||(t.icon?`<img src="${t.icon}" alt="">`:`<span>${t.glyph||"\u2022"}</span>`),t.win){let i=document.createElement("i");i.className="dock-dot",e.appendChild(i),nc.push({b:e,win:t.win})}e.addEventListener("click",()=>t.run()),ee.appendChild(e),Si.push(e)}ge.title=it("moveDock"),ge.setAttribute("aria-label",it("moveDock")),ee.appendChild(ge),ld(),cc(),Cr(),od(),Ir()}function $x(){let n=document.createElement("span");return n.className="dock-sep",n}function od(){for(let{b:n,win:t}of nc){let e=n.querySelector(".dock-dot");e&&e.classList.toggle("on",re.some(i=>i.id===t))}}ve("wins",od);function ld(){let n=ee.querySelector(".dk-time");n&&(n.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}setInterval(ld,2e4);function cc(){let n=ee.querySelector(".dk-wifi");n&&(n.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",cc);addEventListener("offline",cc);var qs=null;function Cr(){let n=ee.querySelector(".dk-bat");if(!n)return;if(!qs){n.style.display="none";return}n.style.display="";let t=n.querySelector(".fill");t.setAttribute("width",String(Math.max(1.6,13*qs.level))),t.setAttribute("fill",qs.charging?"#8de6c8":qs.level<.2?"#ff6b6b":"currentColor")}navigator.getBattery&&navigator.getBattery().then(n=>{qs=n,n.addEventListener("levelchange",Cr),n.addEventListener("chargingchange",Cr),Cr()}).catch(()=>{});var Pr=-1;ve("pinchcancel",()=>{Pr=-1});function cd(n){let t=hd(at.x,at.y);if(n==="down"){Pr=t?t.i:-1;return}let e=Pr;if(Pr=-1,!(!t||t.i!==e)&&n==="up"){let i=Si[t.i];i&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click())}}function Zx(n,t){return!Mi||!ic?null:(Qi(n,t),yn.intersectObject(ii,!1)[0]||null)}function hd(n,t){if(!Mi)return null;Qi(n,t);let e=yn.intersectObject(si,!1)[0];if(!e)return null;let i=si.worldToLocal(e.point.clone()),s=si.geometry.parameters,r=(i.x/s.width+.5)*ee.offsetWidth,o=(.5-i.y/s.height)*ee.offsetHeight;for(let a=0;a<Si.length;a++){let l=Si[a];if(r>=l.offsetLeft&&r<=l.offsetLeft+l.offsetWidth&&o>=l.offsetTop&&o<=l.offsetTop+l.offsetHeight)return{i:a}}return null}var Wu="",ic="",Ki=0,Lr=0,$i=null;ve("recenter",()=>{Ki=Lr=0,$i=null,wi(),Ir()});ve("summon-dock",()=>{var t;Kt.updateMatrixWorld(!0),ue.updateMatrixWorld(!0);let n=Kt.getWorldDirection(new L).transformDirection(ue.matrixWorld.clone().invert());Ki=Math.atan2(-n.x,-n.z),$i=null,wi(),Ir(),(t=window.NativeXR)==null||t.click()});function Ir(){let n=Zt.width>Zt.height,t=(At?en.dockDistance:n?1.42:1.75)*Gt.dockDist,e=At?-en.dockDrop:n?-.5:-.6,i=ye*(At?en.dockScale:n?.74:.88)*Gt.dockSize;$i?Ue.position.copy($i):Ue.position.set(-Math.sin(Ki)*t,hn+e,-Math.cos(Ki)*t),Ue.rotation.set(.26,Ki,0,"YXZ"),Ue.scale.setScalar(i);let s=ee.offsetWidth*i,r=ee.offsetHeight*i,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==Wu&&(Wu=o,si.geometry.dispose(),si.geometry=new gn(s,r),Nn.h=r,$i||ai());let a=ge.offsetWidth*i,l=ge.offsetHeight*i,c=a.toFixed(3)+"x"+l.toFixed(3);a>0&&c!==ic&&(ic=c,ii.geometry.dispose(),ii.geometry=new gn(a,l)),si.position.copy(Ue.position),si.rotation.copy(Ue.rotation),ii.position.copy(Ue.position),ii.rotation.copy(Ue.rotation),ii.translateY((ee.offsetHeight/2-ge.offsetTop-ge.offsetHeight/2)*i),ii.translateZ(.004),!$i&&(Nn.y!==Ue.position.y||Nn.z!==-t)&&(Nn.y=Ue.position.y,Nn.z=-t,ai())}var Jx=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],Xu=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],Kx=0,de=null,vn=null,Cn=null,ri=!1,Zi=!1;function Js(n,t){if(!n){de&&(ue.remove(de),ue.remove(vn),de.element.remove(),de=null),Cn=null,ri=Zi=!1;return}if(Cn=t,de)return;let e=document.createElement("div");e.className="kb";for(let i of Jx){let s=document.createElement("div");s.className="kb-row";for(let r of i){let o=typeof r=="string"?r:r.k,a=document.createElement("button");a.className="key"+(typeof r=="string"?"":" "+r.cls),typeof r=="string"?a.textContent=o:r.icon?(a.innerHTML=qt(r.icon),a.setAttribute("aria-label",r.label),a.title=r.label):a.textContent=r.lbl||o,a.dataset.k=o,s.appendChild(a)}e.appendChild(s)}e.addEventListener("click",i=>{let s=i.target.closest("[data-k]");s&&ud(s.dataset.k,s)}),de=new Os(e),Lr=Ki,de.scale.setScalar(ye*(At?en.keyboardScale:.9)),ue.add(de),vn=new Ze(new gn(1,1),new ti({visible:!1})),ue.add(vn),fd()}function ud(n,t){if(At&&window.NativeXR.click(),t&&(t.classList.add("hot"),setTimeout(()=>t.classList.remove("hot"),110)),n==="@close")return Js(!1);if(n==="\u21E7"){ri?Zi?(ri=!1,Zi=!1):Zi=!0:(ri=!0,Zi=!1),dd();return}if(n!=="@lang"){if(n==="@mic"){he(it("micOff"));return}if(n==="@emoji"){qu(Xu[Kx++%Xu.length]);return}qu(n)}}function qu(n){if(!Cn)return;let t=n==="\u232B"||n==="\u23CE",e=ri?n.toUpperCase():n;if(Cn.nativeId)window.NativeXR.key(Cn.nativeId,e);else if(n==="\u232B")Cn.value=Cn.value.slice(0,-1);else if(n==="\u23CE"){Cn.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0}));return}else Cn.value+=e;Cn.nativeId||Cn.dispatchEvent(new Event("input",{bubbles:!0})),!t&&ri&&!Zi&&(ri=!1,dd())}function dd(){if(de){for(let n of de.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=ri?Zi?"lock":"once":"";for(let n of de.element.querySelectorAll("[data-k]")){let t=n.dataset.k;t.length===1&&/[a-zç]/i.test(t)&&(n.textContent=ri?t.toUpperCase():t.toLowerCase())}}}var Yu="",jx=.35;function fd(){if(!de)return;let n=At?en.keyboardDistance:-Nn.z-.35;de.position.set(-Math.sin(Lr)*n,hn-(At?en.keyboardDrop:.68),-Math.cos(Lr)*n),de.rotation.set(-Math.PI/2+jx,Lr,0,"YXZ");let t=de.element.offsetWidth*de.scale.x,e=de.element.offsetHeight*de.scale.x,i=t.toFixed(3)+"x"+e.toFixed(3);t>0&&i!==Yu&&(Yu=i,vn.geometry.dispose(),vn.geometry=new gn(t,e)),vn.position.copy(de.position),vn.rotation.copy(de.rotation)}var Ka=null;ve("pinchcancel",()=>{Ka=null});function pd(n){if(!de)return!1;ja.set(at.x*2-1,-(at.y*2-1)),yn.setFromCamera(ja,Kt);let t=yn.intersectObject(vn,!1)[0];if(!t)return!1;let e=vn.worldToLocal(t.point.clone()),i=vn.geometry.parameters,s=(e.x/i.width+.5)*de.element.offsetWidth,r=(.5-e.y/i.height)*de.element.offsetHeight,o=rd(de.element,s,r);return n==="down"?(Ka=o,!0):(o&&o===Ka&&o.dataset&&o.dataset.k&&ud(o.dataset.k,o),Ka=null,!0)}var $u="";zs((n,t)=>{let e=`${Gt.winScale}:${Gt.winDist}`;if($u!==e&&($u=e,ai()),Ir(),fd(),xn&&at.mode==="drag"&&(Tr(xn.hit,"down"),xn=null),Ie&&at.active&&at.down){let i=Rr(at.x,at.y);i&&i.win===Ie.win&&!i.handle&&!i.resize&&Ji(i,2)}if((we.win||te.win&&te.source!=="fist")&&at.active&&at.down){let i=$a(t);we.win&&id(i.x,i.y),te.win&&te.source!=="fist"&&oc(i.x,i.y)}if(Qe.start&&at.active&&at.down){let i=$a(t);lc(i.x,i.y)}for(let i of re)i.apply()});if(At){let n=function(){try{qs=JSON.parse(window.NativeXR.battery()),Cr()}catch{}};window.nextvrBrowserFocus=t=>Js(!0,{nativeId:t}),n(),setInterval(n,3e4),document.addEventListener("click",t=>{t.target.closest("button")&&window.NativeXR.click()},!0)}var Yt=null,jt=null,Ja=new Map,Ys=new Set,to={hands:[],consumed:new Set,scaleX:1,scaleY:1},Er=null,Jl=0,Zu=350,Ju=240;function sc(n,t){Kt.updateMatrixWorld(!0),ue.updateMatrixWorld(!0);let e=new mr;return e.setFromCamera(new $t(n*2-1,1-t*2),Kt),e}function Kl(n,t,e=!1){let i=e&&n.grab||n.palm;return{x:(i[0]-.5)*t.scaleX+.5,y:(i[1]-.5)*t.scaleY+.5}}function rc(n,t){let e=n.obj.worldToLocal(t.clone()),i=n.obj.getWorldScale(new L),s=n.curve>0?Za(e.x,n.curveRadius):0;return{local:e,scale:i,u:e.x/n.w+.5,v:.5-e.y/n.h,d:(e.z-s)*i.z}}function Qx(n){let t=Ue.worldToLocal(n.clone()),e=Ue.getWorldScale(new L);return{local:t,scale:e,u:t.x/ee.offsetWidth+.5,v:.5-t.y/ee.offsetHeight,d:t.z*e.z}}function tv(n,t){let e=n.obj.getWorldPosition(new L),i=new L(0,0,1).transformDirection(n.obj.matrixWorld),s=new ln().setFromNormalAndCoplanarPoint(i,e);if(!(n.curve>0))return t.intersectPlane(s,new L);let r=n.obj.matrixWorld.clone().invert(),o=t.origin.clone().applyMatrix4(r),a=t.origin.clone().add(t.direction).applyMatrix4(r).sub(o).normalize(),l=n.curveRadius,c=a.x*a.x+a.z*a.z;if(c<1e-9)return t.intersectPlane(s,new L);let h=2*(o.x*a.x+(o.z-l)*a.z),u=o.x*o.x+(o.z-l)*(o.z-l)-l*l,d=h*h-4*c*u;if(d<0)return t.intersectPlane(s,new L);let m=Math.sqrt(d);for(let g of[(-h-m)/(2*c),(-h+m)/(2*c)]){if(!(g>0))continue;let _=o.clone().addScaledVector(a,g);if(!(Math.abs(_.x)>l+1e-6||_.z>l))return _.applyMatrix4(n.obj.matrixWorld)}return t.intersectPlane(s,new L)}function Ku(n){let t=null;for(let e of re){if(e.onboarding)continue;let i=e.obj.getWorldPosition(new L),s=tv(e,n.ray);if(!s)continue;let{local:r,scale:o}=rc(e,s);if(Math.abs(r.x)*o.x>e.w*o.x/2+.08||Math.abs(r.y)*o.y>e.h*o.y/2+.08)continue;let a=n.ray.origin.distanceTo(s);(!t||a<t.distance)&&(t={win:e,point:s,distance:a})}return t}function jl(n=!1,t=to){let e=Yt;e!=null&&e.down&&(Ji({win:e.win,u:e.u,v:e.v},n?3:1),!n&&t.hands.some(i=>i.id===e.id&&i.pinching)&&(Ys.add(e.id),t.consumed.add(e.id))),Yt=null}function Ql(n=!1,t=to){let e=jt;if(e!=null&&e.down){let i=e.btn;i&&i.classList.remove("near-press"),i&&!n&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click()),!n&&t.hands.some(s=>s.id===e.id&&s.pinching)&&(Ys.add(e.id),t.consumed.add(e.id))}jt=null}ve("phonehands",n=>{var a;to=n;let t=new Set(n.hands.map(l=>l.id));for(let l of Ja.keys())t.has(l)||Ja.delete(l);for(let l of Ys){let c=n.hands.find(h=>h.id===l);!c||!c.pinching?Ys.delete(l):n.consumed.add(l)}if(te.win&&te.source==="fist"){let l=n.hands.find(c=>c.id===te.hand);if(!l||!l.fist||!re.includes(te.win))ji();else{n.consumed.add(l.id);let c=Kl(l,n,!0);oc(c.x,c.y)}}let e=performance.now();if(!(te.win&&te.source==="fist")){let l=n.hands.find(c=>!c.fist);if(l){let c=Kl(l,n),h=Ku(sc(c.x,c.y));if(h){let{local:u,scale:d}=rc(h.win,h.point),m=h.win;(Math.abs(u.x)*d.x>m.w*d.x/2-.06||Math.abs(u.y)*d.y>m.h*d.y/2-.06)&&(Er=h.win,Jl=e)}}}for(let l of re)(l!==Er||e-Jl>Zu)&&l.shell.classList.remove("phone-grab-hover");Er&&e-Jl<=Zu?Er.shell.classList.add("phone-grab-hover"):Er=null;let i=hd(at.x,at.y);for(let l=0;l<Si.length;l++)Si[l].classList.toggle("dock-hover",!!(i&&i.i===l)&&!at.down);for(let l of n.hands){let c=Ja.get(l.id)||!1;if(Ja.set(l.id,l.fist),!te.win&&!we.win&&l.fist&&!c){let h=Kl(l,n,!0),u=Ku(sc(h.x,h.y));u&&(((a=at.hand)==null?void 0:a.id)===l.id&&Ya(),ac(u.win,h.x,h.y,"fist",l.id)&&n.consumed.add(l.id))}}let s=null,r=null;for(let l of n.hands){if(n.consumed.has(l.id)||!l.head||l.head.length!==63)continue;let c=new L().fromArray(l.head,24);if(!(c.length()>.7)){c.applyMatrix4(Kt.matrixWorld);for(let h of re){let u=rc(h,c),d=(Yt==null?void 0:Yt.win)===h&&Yt.id===l.id,m=d?.08:.02,g=d?.26:.11;u.d>g||u.d<-.12||Math.abs(u.local.x)*u.scale.x>h.w*u.scale.x/2+m||Math.abs(u.local.y)*u.scale.y>h.h*u.scale.y/2+m||(!s||d||!s.current&&Math.abs(u.d)<Math.abs(s.d))&&(s={...u,id:l.id,win:h,point:c,current:d})}if(Mi&&Ue.visible){let h=Qx(c),u=(jt==null?void 0:jt.id)===l.id,d=ee.offsetWidth*h.scale.x,m=ee.offsetHeight*h.scale.y,g=u?.08:.02,_=u?.26:.11;if(h.d<=_&&h.d>=-.12&&Math.abs(h.local.x)*h.scale.x<d/2+g&&Math.abs(h.local.y)*h.scale.y<m/2+g){let f=h.u*ee.offsetWidth,p=h.v*ee.offsetHeight,w=null;for(let v of Si)if(f>=v.offsetLeft&&f<=v.offsetLeft+v.offsetWidth&&p>=v.offsetTop&&p<=v.offsetTop+v.offsetHeight){w=v;break}(!r||u||!r.current&&Math.abs(h.d)<Math.abs(r.d))&&(r={...h,id:l.id,btn:w,point:c,current:u})}}}}if(!!r&&(!s||Math.abs(r.d)<Math.abs(s.d)-.01||r.current)){if(jl(!t.has(Yt==null?void 0:Yt.id),n),!r&&jt&&t.has(jt.id)&&e-jt.lastSeen<=Ju&&(r={...jt,current:!0,held:!0}),r?r.current?(jt.d+=(r.d-jt.d)*.45,jt.u+=(r.u-jt.u)*.45,jt.v+=(r.v-jt.v)*.45,jt.btn=r.btn,r.held||(jt.lastSeen=e)):(Ql(!1,n),jt={...r,down:!1,previousD:r.d,lastSeen:e}):Ql(!t.has(jt==null?void 0:jt.id),n),jt){let l=jt,c=!!l.btn;if(!l.down&&c&&l.d<=.012&&l.previousD>.012)at.down&&Ya(),l.down=!0,l.btn&&l.btn.classList.add("near-press");else if(l.down&&(l.d>=.035||!c)){l.btn&&l.btn.classList.remove("near-press");let h=l.btn;l.down=!1,h&&(h.style.transform="scale(.88)",setTimeout(()=>h.style.transform="",150),h.click()),n.hands.some(u=>u.id===l.id&&u.pinching)&&(Ys.add(l.id),n.consumed.add(l.id))}l.previousD=l.d,l.down&&(n.blockFar=!0,n.consumed.add(l.id))}}else if(Ql(!t.has(jt==null?void 0:jt.id),n),!s&&Yt&&t.has(Yt.id)&&re.includes(Yt.win)&&e-Yt.lastSeen<=Ju&&(s={...Yt,current:!0,held:!0}),s?s.current?(Yt.d+=(s.d-Yt.d)*.45,Yt.u+=(s.u-Yt.u)*.45,Yt.v+=(s.v-Yt.v)*.45,s.held||(Yt.lastSeen=e)):(jl(!1,n),Yt={...s,down:!1,previousD:s.d,lastSeen:e}):jl(!t.has(Yt==null?void 0:Yt.id),n),Yt){let l=Yt,c=l.u>=0&&l.u<=1&&l.v>=0&&l.v<=1,h={win:l.win,u:Math.max(0,Math.min(1,l.u)),v:Math.max(0,Math.min(1,l.v))};!l.down&&c&&l.d<=.012&&l.previousD>.012?(at.down&&Ya(),Un(l.win),Ji(h,0),l.down=!0):l.down&&(l.d>=.035||!c)?(Ji(h,1),l.down=!1,n.hands.some(u=>u.id===l.id&&u.pinching)&&(Ys.add(l.id),n.consumed.add(l.id))):l.down&&Ji(h,2),l.previousD=l.d,l.down&&(n.blockFar=!0,n.consumed.add(l.id))}});var ju=0,Qu="";zs((n,t)=>{var r,o,a,l;if(!At||t-ju<16)return;ju=t;let e=to,i=[];for(let c of e.hands){if((jt==null?void 0:jt.id)===c.id){let g=jt,_=g.btn,f=0,p=0;_&&(f=_.offsetLeft+_.offsetWidth/2-ee.offsetWidth/2,p=ee.offsetHeight/2-(_.offsetTop+_.offsetHeight/2));let w=new L(f,p,0).applyMatrix4(Ue.matrixWorld);i.push({id:c.id,end:Kt.worldToLocal(w).toArray(),direct:!0,down:g.down});continue}if((Yt==null?void 0:Yt.id)===c.id&&Yt.down){let g=Yt,_=new L((g.u-.5)*g.win.w,(.5-g.v)*g.win.h,0).applyMatrix4(g.win.obj.matrixWorld);i.push({id:c.id,end:Kt.worldToLocal(_).toArray(),direct:!0,down:g.down});continue}if(e.consumed.has(c.id)||e.blockFar){i.push({id:c.id,hidden:!0});continue}let h=((r=at.hand)==null?void 0:r.id)===c.id?$a(t):Wl(c.aim),u=sc(h.x,h.y),d=re.flatMap(g=>[g.resizeHit,g.grab,g.hit]);Mi&&d.push(ii,si),vn&&de&&d.push(vn);let m=u.intersectObjects(d,!1)[0];i.push({id:c.id,...m?{end:Kt.worldToLocal(m.point.clone()).toArray()}:{},down:((o=at.hand)==null?void 0:o.id)===c.id&&at.down})}let s=JSON.stringify(i);s!==Qu&&(Qu=s,(l=(a=window.NativeXR).handTargets)==null||l.call(a,s))});var pt=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},eo=(n,t="")=>`<span class="icon-label">${qt(n)}${t?`<span>${t}</span>`:""}</span>`,pc=n=>{if(At)return ke("browser-extra",it("browser"),n);try{window.open(n,"_blank","noopener")}catch{he("Bloqueado pelo navegador")}};function ke(n,t,e,i){let s=pt("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=pt("div","row");r.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let o=pt("input","fld");o.value=e,o.placeholder=it("search");let a=pt("button","go",qt("enter"));a.setAttribute("aria-label",it("open")),a.title=it("open");let l=pt("button","go",qt("external"));l.setAttribute("aria-label",it("open")),l.title=it("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(o,a,l);let c=pt("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let h=pt("div");h.style.cssText="flex:1;min-height:0;position:relative";let u=pt(At?"div":"iframe");At&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),h.appendChild(u),s.append(r,c,h);let d=m=>{let g=(m||"").trim();if(g){if(/^https?:\/\//i.test(g)||(g=/\.\w{2,}($|\/)/.test(g)?"https://"+g:"https://duckduckgo.com/?q="+encodeURIComponent(g)),o.value=g,At){u.dataset.url=g,c.style.display="none";return}u.src=g,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};return a.onclick=()=>d(o.value),o.addEventListener("keydown",m=>{m.key==="Enter"&&d(o.value)}),o.addEventListener("focus",()=>Js(!0,o)),l.onclick=()=>pc(o.value),d(e),oi({id:n,title:t,node:s})}var _d=["https://pipedapi.kavin.rocks","https://pipedapi.leptons.xyz","https://pipedapi.nosebs.ru","https://pipedapi.adminforge.de","https://api.piped.private.coffee","https://pipedapi.reallyaweso.me"],xd=["https://inv.nadeko.net/api/v1","https://inv.tux.pizza/api/v1"],On=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function ro(n,t=11e3){let e=new AbortController,i=setTimeout(()=>e.abort(),t);try{let s=await fetch(n,{signal:e.signal});if(!s.ok)throw new Error("http");return await s.json()}finally{clearTimeout(i)}}function vd(n,t){if(t)return"AO VIVO";if(n==null||n<0)return"";n=Math.round(n);let e=Math.floor(n/3600),i=Math.floor(n%3600/60),s=n%60,r=o=>String(o).padStart(2,"0");return e?`${e}:${r(i)}:${r(s)}`:`${i}:${r(s)}`}function yd(n){return n=Number(n),!n||n<0?"":n>=1e6?(n/1e6).toFixed(1).replace(".",",")+" mi":n>=1e3?Math.round(n/1e3)+" mil":String(n)}function ev(n){let t=String(n||"").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)||String(n||"").match(/^([\w-]{11})$/);return t?t[1]:null}function bd(n){let t=String(n.url||"").match(/[?&]v=([\w-]{11})/);return!t||!n.title?null:{id:t[1],title:n.title,thumb:n.thumbnail||`https://i.ytimg.com/vi/${t[1]}/hqdefault.jpg`,chan:n.uploaderName||"",dur:vd(n.duration,n.isLive),live:!!n.isLive,views:yd(n.views)}}function Md(n){if(!n.videoId||!n.title)return null;let t=(n.videoThumbnails||[]).find(e=>e.quality==="medium")||(n.videoThumbnails||[])[0]||{};return{id:n.videoId,title:n.title,thumb:t.url,chan:n.author||"",dur:vd(n.lengthSeconds,n.liveNow),live:!!n.liveNow,views:yd(n.viewCount)}}async function Sd(n){for(let t of _d)try{let i=((await ro(`${t}/search?q=${encodeURIComponent(n)}&filter=videos`)).items||[]).map(bd).filter(Boolean);if(i.length)return i}catch{}for(let t of xd)try{let e=await ro(`${t}/search?q=${encodeURIComponent(n)}&type=video`),i=(Array.isArray(e)?e:[]).map(Md).filter(Boolean);if(i.length)return i}catch{}throw new Error("offline")}async function nv(){for(let n of _d)try{let t=await ro(`${n}/trending?region=BR`),e=(Array.isArray(t)?t:[]).map(bd).filter(Boolean);if(e.length)return e}catch{}for(let n of xd)try{let t=await ro(`${n}/popular?region=BR`),e=(Array.isArray(t)?t:[]).map(Md).filter(Boolean);if(e.length)return e}catch{}return Sd("em alta brasil")}var Bn=null,ts=null;function hc(){try{Bn&&Bn.unMute&&(Bn.unMute(),Bn.setVolume&&Bn.setVolume(100))}catch{}}function iv(){return ts||(ts=new Promise((n,t)=>{if(window.YT&&window.YT.Player)return n(window.YT);let e=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{e&&e(),ts=null,n(window.YT)};let i=document.createElement("script");i.src="https://www.youtube.com/iframe_api",i.onerror=()=>{ts=null,t(new Error("api"))},document.head.appendChild(i),setTimeout(()=>{window.YT&&window.YT.Player||(ts=null,t(new Error("timeout")))},9e3)}),ts)}function uc(){try{Bn&&Bn.destroy&&Bn.destroy()}catch{}Bn=null}function wd(){let n=pt("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f12";let t=pt("div","row");t.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let e=pt("button","go",qt("back"));e.setAttribute("aria-label","Voltar"),e.title="Voltar",e.style.display="none";let i=pt("input","fld");i.placeholder="Pesquisar no YouTube ou colar link";let s=pt("button","go",qt("search"));s.setAttribute("aria-label",it("searchYt")),s.title=it("searchYt");let r=pt("button","go",qt("external"));r.setAttribute("aria-label","Abrir fora"),r.title="Abrir fora",r.style.background="rgba(255,255,255,.12)",r.style.color="#fff",t.append(e,i,s,r);let o=pt("div","yt-chips"),a=pt("div","yt-scroll");n.append(t,o,a);let l=["M\xFAsica","Jogos","VR 360","Not\xEDcias","Ao vivo","Filmes"];o.innerHTML=l.map(E=>`<button class="yt-chip" data-q="${E}">${E}</button>`).join(""),o.addEventListener("click",E=>{let T=E.target.closest("[data-q]");T&&(i.value=T.dataset.q,p(T.dataset.q))});let c=[],h="",u=null,d=0,m=()=>{a.innerHTML=`<div class="yt-grid">${'<span class="yt-card"><span class="yt-thumb yt-skel"></span><span class="yt-meta"><span class="yt-skel-l"></span><span class="yt-skel-l short"></span></span></span>'.repeat(6)}</div>`},g=E=>`<button class="yt-card" data-v="${E.id}"><span class="yt-thumb">${E.thumb?`<img loading="lazy" src="${E.thumb}" alt="">`:""}`+(E.dur?`<span class="yt-dur${E.live?" live":""}">${On(E.dur)}</span>`:"")+`</span><span class="yt-meta"><span class="yt-t">${On(E.title)}</span><span class="yt-c">${On(E.chan)}${E.views?" \xB7 "+On(E.views):""}</span></span></button>`;function _(E,T){uc(),u=null,c=T,e.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-sec">${On(E)}</div><div class="yt-grid">${T.map(g).join("")}</div>`}function f(E){e.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-err"><div style="display:grid;place-items:center;font-size:46px">${qt("wifi")}</div><div class="yt-err-t">Sem conex\xE3o com a busca</div><div class="yt-err-s">Verifique a internet e tente de novo. D\xE1 para colar um link direto tamb\xE9m.</div><button class="yt-btn" data-retry>${eo("refresh","TENTAR DE NOVO")}</button></div>`,a.querySelector("[data-retry]").onclick=()=>E?p(E):w()}async function p(E){if(E=(E||"").trim(),!E)return;let T=ev(E);if(T)return v({id:T,title:"V\xEDdeo do YouTube",chan:"",dur:"",views:""});let A=++d;m();try{let G=await Sd(E);if(A!==d)return;h=`Resultados para \u201C${E}\u201D`,_(h,G)}catch{A===d&&f(E)}}async function w(){let E=++d;m();try{let T=await nv();if(E!==d)return;h="Em alta no Brasil",_(h,T)}catch{E===d&&f(null)}}function v(E){u=E,c.length||(c=[E]),e.style.display="",o.style.display="none",a.innerHTML=`<div class="yt-player">
        <div class="yt-holder yt-frame"></div>
        <div class="yt-info">
          <div class="yt-ptitle">${On(E.title)}</div>
          ${E.chan?`<div class="yt-pchan">${On(E.chan)}${E.views?" \xB7 "+On(E.views):""}</div>`:""}
          <div class="yt-prow">
            <button class="yt-btn" data-back>${eo("back","VOLTAR")}</button>
            <button class="yt-btn" data-snd>${eo("volume","ATIVAR SOM")}</button>
            <button class="yt-btn" data-out>${eo("external","ABRIR")}</button>
          </div>
          <p class="yt-pchan" style="margin-top:10px">Use o controle de som com a m\xE3o e ajuste o volume pelas teclas do Android.</p>
        </div></div>`;let T=a.querySelector(".yt-holder");if(a.querySelector("[data-back]").onclick=()=>{uc(),_(h||"Em alta no Brasil",c)},a.querySelector("[data-out]").onclick=()=>pc("https://www.youtube.com/watch?v="+E.id),a.querySelector("[data-snd]").onclick=hc,At){let G=pt("div");G.dataset.nativeBrowser="youtube-player",G.dataset.url="https://www.youtube.com/embed/"+E.id+"?autoplay=1&playsinline=1",G.style.cssText="width:100%;height:100%",T.append(G),a.querySelector("[data-snd]").onclick=()=>{window.NativeXR.click(),he("Use Android media volume to adjust sound.")};return}iv().then(G=>{if(u===E)try{Bn=new G.Player(T,{videoId:E.id,playerVars:{autoplay:1,playsinline:1,rel:0,mute:0,modestbranding:1,enablejsapi:1},events:{onReady:b=>{try{b.target.unMute(),b.target.setVolume(100),b.target.playVideo()}catch{}setTimeout(hc,350)},onError:A}})}catch{A()}}).catch(A);function A(){u!==E||T.dataset.fb||(T.dataset.fb="1",T.innerHTML=`<iframe class="yt-frame" title="${On(E.title)}" src="https://www.youtube-nocookie.com/embed/${E.id}?autoplay=1&mute=0&playsinline=1&rel=0&enablejsapi=1" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`)}setTimeout(hc,600)}a.addEventListener("click",E=>{let T=E.target.closest("[data-v]");if(!T)return;let A=c.find(G=>G.id===T.dataset.v);A&&v(A)}),e.onclick=()=>_(h||"Em alta no Brasil",c),s.onclick=()=>p(i.value),r.onclick=()=>pc(u?"https://www.youtube.com/watch?v="+u.id:"https://m.youtube.com/results?search_query="+encodeURIComponent(i.value||"")),i.addEventListener("focus",()=>Js(!0,i)),i.addEventListener("keydown",E=>{E.key==="Enter"&&p(i.value)}),w();let R=oi({id:"youtube",title:"YouTube",node:n});return ve("wins",()=>{re.some(E=>E.id==="youtube")||uc()}),R}var no=[];function Ed(){let n=pt("div","pad"),t=pt("div");t.innerHTML=`<h2>${it("gallery")}</h2><p class="sub">${it("photosHelp")}</p>`;let e=pt("button","go",it("pickPhotos")),i=pt("input");i.type="file",i.accept="image/*",i.multiple=!0,i.style.display="none";let s=pt("div","grid4");s.style.marginTop="20px";let r=pt("div");r.style.cssText="margin-top:18px";let o=()=>{if(s.innerHTML="",!no.length){s.innerHTML=`<p class="sub" style="grid-column:1/-1">${it("noPhotos")}</p>`;return}no.forEach((a,l)=>{let c=pt("button","thumb");c.innerHTML=`<img src="${a}" alt="">`,c.onclick=()=>{r.innerHTML=`<img src="${a}" style="width:100%;border-radius:16px">`},s.appendChild(c)})};return e.onclick=()=>i.click(),i.onchange=()=>{for(let a of i.files)no.push(URL.createObjectURL(a));o(),he(no.length+" fotos")},o(),n.append(t,e,i,s,r),n.append(pt("p","note","Na web, o Android pede as fotos pelo seletor do sistema \u2014 \xE9 a forma correta e n\xE3o precisa de permiss\xE3o extra. No app Android use READ_MEDIA_IMAGES e liste direto no MediaStore.")),oi({id:"gallery",title:it("gallery"),node:n})}function ze(n,t,e){let i=pt("div","opt");return i.append(pt("div","opt-l",`<div class="opt-t">${n}</div>${t?`<div class="opt-d">${t}</div>`:""}`),e),i}function dc(n,t){let e=pt("button","sw");return e.dataset.on=Gt[n]?"1":"0",e.onclick=()=>{Gt[n]=Gt[n]?0:1,e.dataset.on=Gt[n]?"1":"0",Bs(),t&&t(Gt[n])},e}function es(n,t,e,i,s){let r=pt("input");return r.type="range",r.min=t,r.max=e,r.step=i,r.value=Gt[n],r.oninput=()=>{Gt[n]=+r.value,Bs(),s&&s(Gt[n])},r}function io(){let n=pt("div");n.style.cssText="display:flex;flex-direction:column;height:100%";let t=pt("div","tabs");t.style.padding="18px 24px 0";let e=pt("div","pad");e.style.paddingTop="6px",n.append(t,e);let i=[[it("general"),()=>{e.innerHTML=`<h2>${it("general")}</h2><p class="sub">Next VR \xB7 shell XR para Android</p>`;let o=pt("div","card"),a=pt("button","seg-btn",Fa(Gt.lang||"pt").label);a.onclick=()=>{let l=oi({id:"language-pick",title:it("langTitle"),w:880,h:660,node:Dd(Gt.lang||"pt",c=>{Fl(c),he(it("langChanged")),r(),Zs(l)},!0)})},o.append(ze(it("language"),"Mesma tela do primeiro uso",a)),o.append(ze("FPS","Mostrar contador",dc("showFps"))),e.append(o),e.append(pt("p","note","Shizuku: abrir apps Android instalados s\xF3 existe no app nativo. Nesta vers\xE3o web o navegador n\xE3o tem como iniciar outro app."))}],[it("hands"),()=>{e.innerHTML=`<h2>${it("hands")}</h2><p class="sub">C\xE2mera traseira, MediaPipe.</p>`;let o=pt("div","card");o.append(ze(it("on"),"\xDAnica entrada da interface VR",pt("span","note","Sempre ativo"))),o.append(ze(it("sens"),"MediaPipe nativo \xB7 c\xE2mera traseira",pt("span","note","2 m\xE3os \xB7 21 landmarks"))),o.append(ze("Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",dc("handDraw"))),o.append(ze("Pinch","Entrada nativa est\xE1vel com histerese",pt("span","note","0.30 / 0.48"))),o.append(ze("Detector","MediaPipe Tasks Vision, 2 m\xE3os por frame",pt("span","note","NextVR"))),e.append(o)}],[it("windows"),()=>{e.innerHTML=`<h2>${it("windows")}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;let o=pt("div","card");o.append(ze(it("curve"),"1 = encara o centro; menor = mais aberta",es("winCurve",0,1,.05))),o.append(ze("Inclina\xE7\xE3o","Ajuste vertical ao subir/descer",es("winTilt",0,1.5,.05))),o.append(ze(it("scale"),"Tamanho das janelas",es("winScale",.6,1.6,.05))),o.append(ze(it("dist"),"Dist\xE2ncia do arco",es("winDist",At?.6:1.5,At?1.8:3.4,.05))),o.append(ze(it("win360"),it("win360k"),es("win360K",.2,1.15,.05))),o.append(ze(it("win360All"),"O bot\xE3o 360\xB0 na barra da janela troca por janela",dc("win360"))),e.append(o)}],[it("dock"),()=>{e.innerHTML=`<h2>${it("dock")}</h2><p class="sub">No modo paisagem a dock chega mais perto.</p>`;let o=pt("div","card");o.append(ze(it("size"),null,es("dockSize",.7,1.5,.05))),o.append(ze(it("dist"),null,es("dockDist",.7,1.5,.05))),e.append(o)}],[it("env"),()=>{e.innerHTML="",e.append(pt("h2",null,it("env"))),e.append(pt("p","sub","Passthrough da c\xE2mera ou um panorama 360\xB0 em volta de voc\xEA."));let o=pt("div","grid3");for(let a of vu()){let l=pt("button","env"+(a.thumb?" env-pano":""));l.style.background=a.thumb?`url('${a.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",l.innerHTML=`<span>${a.name}</span>`,l.setAttribute("aria-pressed",Gt.env===a.id),l.onclick=()=>{Bl(a.id),[...o.children].forEach(c=>c.setAttribute("aria-pressed","false")),l.setAttribute("aria-pressed","true")},o.appendChild(l)}e.append(o)}],[it("perf"),()=>{e.innerHTML=`<h2>${it("perf")}</h2><p class="sub">Celular esquentando? Baixe a qualidade.</p>`;let o=pt("div","card"),a=pt("div","seg");for(let[l,c]of[["low","Baixa"],["auto","Autom\xE1tica"],["high","Alta"]]){let h=pt("button",null,c);h.setAttribute("aria-pressed",Gt.quality===l),h.onclick=()=>{Gt.quality=l,Bs(),Ae("quality"),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true")},a.appendChild(h)}o.append(ze(it("quality"),"Resolu\xE7\xE3o de renderiza\xE7\xE3o",a)),e.append(o),e.append(pt("p","note","O hand tracking roda na pr\xF3pria cad\xEAncia (single-flight, sem fila), separado do render. Ative o contador de FPS para ver as duas taxas: render e tracking."))}]],s=0;function r(){t.innerHTML="",i.forEach(([o],a)=>{let l=pt("button",null,o);l.setAttribute("aria-selected",a===s),l.onclick=()=>{s=a,r()},t.appendChild(l)}),i[s][1]()}return r(),oi({id:"settings",title:it("settings"),node:n})}var Td="nextvr.store.installed.v1",Ad="nextvr.store.favs.v1",Rd="nextvr.lib.recent.v1",mc=n=>{try{let t=JSON.parse(localStorage.getItem(n));return Array.isArray(t)?t:[]}catch{return[]}},kn=mc(Td),ns=mc(Ad),is=mc(Rd),oo=()=>{try{localStorage.setItem(Td,JSON.stringify(kn)),localStorage.setItem(Ad,JSON.stringify(ns)),localStorage.setItem(Rd,JSON.stringify(is))}catch{}},Ti={},Nr=[{id:"vrfs",name:"VRFS",label:"VRFS",cat:"Games \xB7 Sports \xB7 Futebol",img:"https://i.ytimg.com/vi/FxkDg2NGzqw/hqdefault.jpg",bg:"linear-gradient(160deg,#1d7a4b,#0c3a2b)",badge:'<span style="background:#e11d2e;border-radius:10px;padding:10px 24px;font-size:32px;font-weight:900;box-shadow:0 4px 18px #0009">VRFS</span>',mark:'<span style="font-size:34px;font-weight:900;font-style:italic;letter-spacing:-1px;text-shadow:0 2px 8px #0008">VRFS</span>'},{id:"minecraft",name:"Minecraft VR",label:"MINECRAFT",cat:"Games \xB7 Sandbox \xB7 Aventura",img:"https://minecraft.wiki/images/thumb/MC_key_art.png/800px-MC_key_art.png",bg:"linear-gradient(180deg,#6cb04a 0 30%,#7a5230 30%)",badge:"",mark:'<span style="font-size:23px;font-weight:900;letter-spacing:1px;text-shadow:0 2px 0 #222">MINECRAFT</span>'},{id:"roblox",name:"Roblox VR",label:"ROBLOX",cat:"Games \xB7 Social \xB7 Multiplayer",img:"",phones:!0,bg:"linear-gradient(145deg,#23232c,#101014)",badge:"",mark:'<span style="display:flex;align-items:center;gap:8px"><span style="width:34px;height:34px;background:#fff;border-radius:8px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:13px;height:13px;background:#c81e2b;border-radius:3px"></span></span><span style="font-size:24px;font-weight:900">ROBLOX</span></span>'},{id:"brawl",name:"Brawl Stars VR",label:"BRAWL STARS",cat:"Games \xB7 A\xE7\xE3o \xB7 Multiplayer",img:"https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/790/hero_bg_brawlstars.a385872a.webp",bg:"linear-gradient(115deg,#ffd02e 0 50%,#1280ff 50%)",badge:"",mark:'<span style="font-size:21px;font-weight:900;color:#111;text-shadow:0 1px 0 #fff">BRAWL<br>STARS \u2605</span>'}],lo=n=>Nr.find(t=>t.id===n),Cd=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">NETFLIX</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"pluto",name:"pluto tv",bg:"linear-gradient(145deg,#34343a,#111115)",html:'<span class="lx-pluto">pluto<i>tv</i></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X Twitter",label:"Twitter",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],sv=["netflix","youtube","vrfs","tiktok","minecraft","roblox","brawl","discord","twitch","prime","pluto","whatsapp","instagram","x","facebook","telegram","spotify","browser","store","gallery","settings"],co=n=>{let t=re.find(e=>e.id===n);return t?t.el.querySelector(".win-body"):null},rv={youtube:()=>wd(),browser:()=>ke("browser",it("browser"),"https://duckduckgo.com/"),store:()=>Pd(),gallery:()=>Ed(),settings:()=>io(),discord:()=>ke("discord","Discord","https://discord.com/app"),netflix:()=>ke("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>ke("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>ke("twitch","Twitch","https://www.twitch.tv/"),prime:()=>ke("prime","prime video","https://www.primevideo.com/"),pluto:()=>ke("pluto","pluto tv","https://pluto.tv/"),whatsapp:()=>ke("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>ke("instagram","Instagram","https://www.instagram.com/"),x:()=>ke("x","X Twitter","https://x.com/"),facebook:()=>ke("facebook","Facebook","https://www.facebook.com/"),telegram:()=>ke("telegram","Telegram","https://web.telegram.org/"),spotify:()=>ke("spotify","Spotify","https://open.spotify.com/")},Ei="home",av=[["home","Home"],["games","Games"],["apps","Apps"],["horizon","Horizon+"],["wish","Wish"]];function ov(){let n=()=>'<div style="width:96px;height:172px;background:#14141b;border-radius:10px;border:1px solid #383845;padding:9px;display:flex;flex-direction:column;gap:6px"><div style="height:9px;background:#33333f;border-radius:4px"></div><div style="height:9px;background:#33333f;border-radius:4px;width:70%"></div><div style="margin-top:auto;height:46px;background:linear-gradient(145deg,#c81e2b,#6f0f18);border-radius:7px"></div></div>';return`<div style="display:flex;gap:10px">${n()}${n()}${n()}</div>`}function lv(n){let t=n.img?`<img class="cov" src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",e=n.phones?ov():n.badge||"";return`<div class="st-cover" style="background:${n.bg}">${t}<div class="art">${e}</div>`+(kn.includes(n.id)?'<span class="st-inst">INSTALADO</span>':"")+`<span class="st-vr">VR</span><span class="st-clabel">${n.label}</span></div>`}function cv(n){let t=n.img?`<img src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",e=n.id==="roblox"?'<span style="width:30px;height:30px;background:#fff;border-radius:7px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:12px;height:12px;background:#c81e2b;border-radius:3px"></span></span>':n.id==="vrfs"?"":`<span style="font-weight:900;font-size:13px;text-align:center;line-height:1.1">${n.label}</span>`;return`<span class="st-thumb" style="background:${n.bg}">${t}${e}</span>`}function md(n){let t=kn.includes(n.id),e=Ti[n.id],i=e!==void 0,s=ns.includes(n.id),r=t?`<button class="st-btn" data-open="${n.id}">ABRIR</button><button class="st-btn" data-rm="${n.id}">REMOVER</button>`:`<button class="st-btn" data-dl="${n.id}" ${i?"disabled":""}>${i?"BAIXANDO "+Math.round(e)+"%":"ADICIONAR \xC0 BIBLIOTECA"}</button>`;return`<article class="st-card" data-card="${n.id}">${lv(n)}
    <div class="st-name">${n.name}</div><div class="st-meta">${n.cat}</div>
    <div class="st-sub">${t?"Na biblioteca de apps":"Toque para ver e baixar"}</div>
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${s?" on":""}" data-fav="${n.id}" aria-label="Favorito">${qt("heart")}</button></div>
    <div class="st-row">${r}</div></article>`}function hv(){let n=pt("div","st"),e=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${av.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${Ei===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${qt("user")}</button><button class="st-x" data-x aria-label="Fechar">${qt("x")}</button></div>`;if(Ei==="apps")e+=`<p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;else if(Ei==="horizon")e+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else if(Ei==="wish"){let i=Nr.filter(s=>ns.includes(s.id));e+=i.length?`<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${i.map(md).join("")}</div>`:'<p class="st-note">Selecione o \xEDcone de favorito de um jogo para salv\xE1-lo aqui.</p>'}else{let i=Nr.map((o,a)=>`<button class="st-ri" data-rank="${o.id}">${cv(o)}
      <span><span class="st-rk">${a+1}. ${o.name}</span><div class="st-cat">${o.cat}</div>
      <div class="st-st">${kn.includes(o.id)?"Na biblioteca de apps":"Toque para ver e baixar"}</div></span></button>`).join(""),s=Nr.map(md).join("");e+=`<div class="st-rank">${i}</div><div class="st-sec"><h3>${Ei==="games"?"Todos os jogos":"Jogos para voc\xEA"}</h3>`+(Ei==="home"?"<button data-all>Ver todos</button>":"")+`</div><div class="st-cards">${s}</div>`}return n.innerHTML=e,n.addEventListener("click",i=>{var o;let s=a=>i.target.closest(a),r;if(r=s("[data-tab]")){Ei=r.dataset.tab,Ri();return}if(s("[data-x]")){let a=re.find(l=>l.id==="store");a&&Zs(a);return}if(s("[data-ava]")){he("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-all]")){Ei="games",Ri();return}if(s("[data-openlib]")){Ld();return}if(r=s("[data-rank]")){(o=n.querySelector(`[data-card="${r.dataset.rank}"]`))==null||o.scrollIntoView({behavior:"smooth",block:"center"});return}if(r=s("[data-fav]")){let a=r.dataset.fav;ns=ns.includes(a)?ns.filter(l=>l!==a):[...ns,a],oo(),Ri();return}if(r=s("[data-dl]")){dv(r.dataset.dl);return}if(r=s("[data-rm]")){fv(r.dataset.rm);return}if(r=s("[data-open]")){let a=lo(r.dataset.open);he(`Abrindo ${a.name}\u2026 (demonstra\xE7\xE3o)`),ao(a.id);return}}),n}function Ri(){var e;let n=co("store");if(!n)return;let t=((e=n.querySelector(".st"))==null?void 0:e.scrollTop)||0;n.innerHTML="",n.appendChild(hv()),n.querySelector(".st").scrollTop=t}function uv(n){let t=co("store");t&&t.querySelectorAll(`[data-dl="${n}"]`).forEach(e=>{e.textContent="BAIXANDO "+Math.round(Ti[n]||0)+"%"})}function Pd(){let n=re.find(i=>i.id==="store");if(n)return Ri(),Un(n),n;let t=pt("div");t.style.cssText="height:100%";let e=oi({id:"store",title:"Store",node:t});return Ri(),e}function dv(n){if(Ti[n]!==void 0||kn.includes(n))return;Ti[n]=0,Ri();let t=lo(n);he("Baixando "+t.name+"\u2026");let e=setInterval(()=>{if(Ti[n]=Math.min(100,Ti[n]+6+Math.random()*11),Ti[n]<100){uv(n);return}clearInterval(e),delete Ti[n],kn.includes(n)||kn.push(n),ao(n,!0),oo(),Ri(),zn(),he(t.name+" foi para a biblioteca de apps com sucesso")},170)}function fv(n){kn=kn.filter(t=>t!==n),is=is.filter(t=>t!==n),oo(),Ri(),zn(),he(lo(n).name+" removido da biblioteca")}var so="recent",Fn="all",Dr="",fc=["all","games","apps","recent"],gd={all:"Todas",games:"Jogos",apps:"Apps",recent:"Recentes"};function ao(n,t){is=[n,...is.filter(e=>e!==n)].slice(0,40),oo(),t||zn()}function pv(){let n=Nr.filter(o=>kn.includes(o.id)).map(o=>({...o,kind:"game"})),t=Cd.map(o=>({...o,kind:"app"})),e=[...n,...t],i=o=>{let a=sv.indexOf(o);return a<0?99:a};e.sort((o,a)=>i(o.id)-i(a.id)),Fn==="games"&&(e=e.filter(o=>o.kind==="game")),Fn==="apps"&&(e=e.filter(o=>o.kind==="app")),Fn==="recent"&&(e=e.filter(o=>is.includes(o.id)));let s=Dr.trim().toLowerCase();if(s&&(e=e.filter(o=>(o.name+" "+(o.label||"")).toLowerCase().includes(s))),so==="az")return[...e].sort((o,a)=>o.name.localeCompare(a.name,"pt-BR"));let r=o=>{let a=is.indexOf(o);return a<0?1e6:a};return[...e].sort((o,a)=>r(o.id)-r(a.id))}function mv(n){let t=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${qt(n.icon)}</span>`:"",e=n.html?n.html:t||`<span class="nm">${n.label||n.name}</span>`,i=n.slug?`${t}<span class="nm fb">${n.label||n.name}</span>`:e;return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand">${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function gv(n){let t=n.img?`<img class="lib-game-cover" src="${n.img}" alt="" loading="lazy" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"";return`<button class="lib-tile game" data-game="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}">${t}<span class="lib-art">${n.mark}</span><span class="lib-vr">VR</span></span><span class="lib-label">${n.name}</span></button>`}function _v(){let n=pv(),t=pt("div","lib"),e=gd[Fn]||gd.all,i=(r,o,a)=>`<button class="lib-nav" data-nav="${r}" title="${o}" aria-label="${o}" aria-pressed="${Fn===r}">${qt(a)}</button>`;t.innerHTML=`<nav class="lib-rail" aria-label="Navega\xE7\xE3o da biblioteca">
      ${i("all","Todas as aplica\xE7\xF5es","appGrid")}
      ${i("apps","Aplicativos","device")}
      ${i("games","Jogos","controller")}
      ${i("recent","Recentes","timer")}
      <span class="lib-rail-spacer"></span>
      <button class="lib-nav lib-nav-store" data-app="store" title="Store" aria-label="Abrir Store">${qt("store")}</button>
    </nav>
    <section class="lib-main">
      <div class="lib-head"><h2 class="lib-title">Apps</h2>
        <button class="lib-sbtn" data-s aria-label="Buscar">${qt("search")}</button>
        <input class="lib-search" data-q placeholder="Buscar" value="${On(Dr)}">
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort>${so==="az"?"A\u2013Z":"Recentes"} ${qt("chevronDown")}</button>
        <button class="lib-pill" data-filter>${e} \xB7 ${n.length} ${qt("chevronDown")}</button>
      </div>
      <div class="lib-scroll"><div class="lib-grid">${n.map(r=>r.kind==="game"?gv(r):mv(r)).join("")}</div>
      ${n.length?"":`<div class="lib-empty">${Fn==="games"?"Nenhum jogo baixado ainda. Baixe um na Store.":Fn==="recent"?"Os apps usados recentemente v\xE3o aparecer aqui.":"Nenhum app encontrado."}</div>`}
      </div>
    </section>`;let s=t.querySelector("[data-q]");return Dr&&s.classList.add("open"),s.addEventListener("input",()=>{var o;Dr=s.value,zn(!0);let r=(o=co("library"))==null?void 0:o.querySelector("[data-q]");r&&(r.focus(),r.setSelectionRange(r.value.length,r.value.length))}),s.addEventListener("focus",()=>Js(!0,s)),t.addEventListener("click",r=>{let o=l=>r.target.closest(l),a;if(o("[data-s]")){let l=t.querySelector("[data-q]");l.classList.toggle("open"),l.classList.contains("open")?l.focus():(Dr="",l.value="",zn());return}if(a=o("[data-nav]")){Fn=a.dataset.nav,zn();return}if(o("[data-sort]")){so=so==="az"?"recent":"az",zn();return}if(o("[data-filter]")){Fn=fc[(fc.indexOf(Fn)+1)%fc.length],zn();return}if(a=o("[data-game]")){let l=lo(a.dataset.game);ao(l.id),he(`Abrindo ${l.name}\u2026 (demonstra\xE7\xE3o)`);return}if(a=o("[data-app]")){let l=Cd.find(h=>h.id===a.dataset.app);if(!l)return;ao(l.id);let c=rv[l.id];c?c():he(l.name+": sem endere\xE7o cadastrado");return}}),t}function zn(n){var i;let t=co("library");if(!t)return;let e=((i=t.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;t.innerHTML="",t.appendChild(_v()),t.querySelector(".lib-scroll").scrollTop=e}function Ld(){let n=re.find(i=>i.id==="library");if(n)return zn(),Un(n),n;let t=pt("div");t.style.cssText="height:100%";let e=oi({id:"library",title:it("apps"),node:t});return zn(),e}var Ks=Object.freeze({bell:qt("notification"),kb:qt("keyboard"),center:qt("crosshair"),compass:qt("compass"),store:qt("store"),people:qt("people"),camera:qt("camera"),gear:qt("settings"),play:qt("play")});function Id(){ad([{kind:"avatar",id:"profile",label:it("profile"),run:io},{kind:"status",id:"status",label:it("settings"),run:io},{kind:"spacer"},{id:"browser",win:"browser",label:it("browser"),svg:Ks.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>ke("browser",it("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:it("store"),svg:Ks.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:Pd},{id:"discord",win:"discord",label:"Discord",svg:Ks.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>ke("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:it("gallery"),svg:Ks.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:Ed},{id:"settings",win:"settings",label:it("settings"),svg:Ks.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:io},{id:"youtube",win:"youtube",label:"YouTube",svg:Ks.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:wd},{id:"library",win:"library",launcher:!0,label:it("apps"),run:Ld}])}ve("lang",Id);var xv=document.getElementById("boot"),ay=document.getElementById("bootGo"),Ai=null;xv.hidden=!0;function vv(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function Dd(n,t,e=!1){let i=pt("div",e?"langwin slim":"langwin"),s=o=>Fa(o).label;return(()=>{i.innerHTML=`<div class="lq-head"><span class="lq-pick">${s(n)}</span><span class="lq-title">${it("langTitle")}</span></div>
      <div class="lq-main">
        <div class="lang-options" role="list">${gr.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${it("langSoon")}</i>`}</button>`).join("")}</div>
        <div class="lq-art"><img src="./hand-controller.png" alt=""></div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">Aponte com a m\xE3o e fa\xE7a uma pin\xE7a para escolher.</span>
        <button class="lq-go">${it("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>t(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>t(n)})(),i}function yv(){var t,e;let n=oi({id:"language",title:"Next VR",w:880,h:660,onboarding:!0,node:Dd(Gt.lang||vv(),bv)});return(t=n.el.querySelector('[data-act="close"]'))==null||t.remove(),(e=n.el.querySelector('[data-act="pin"]'))==null||e.remove(),n}ve("handframe",n=>{let t=Ai==null?void 0:Ai.el.querySelector(".lang-tracking"),e=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";t&&t.textContent!==e&&(t.textContent=e)});async function bv(n){if(!Ai)return;Fl(n),Ai&&(Zs(Ai),Ai=null),Qa(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let t=vr(),e=Gt.handsOn?Mr():Promise.resolve(!1);await Promise.allSettled([t,e]),setTimeout(()=>yr(),280)}document.getElementById("btnGyro").onclick=()=>vr();document.getElementById("btnHand").onclick=()=>Du()?Gl():Mr();ve("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});ve("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Id();Gt.lang?(Qa(!0),At&&(vr(),Gt.handsOn&&Mr()),document.getElementById("perm").hidden=!1,setTimeout(()=>yr(),280)):(Qa(!1),document.getElementById("stat").hidden=!0,Ai=yv());At&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,t;(t=(n=xr).invalidate)==null||t.call(n),vr(),Gt.handsOn&&Mr()},window.nextvrSuspend=()=>{Gl()},ve("hands",()=>{document.getElementById("perm").hidden=!0}));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

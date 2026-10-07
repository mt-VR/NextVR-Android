(()=>{var Zh=0,cl=1,Jh=2;var Ic=1,Kh=2,Pn=3,ni=0,ze=1,Ln=2;var Qn=0,ts=1,hl=2,ul=3,dl=4,jh=5,_i=100,Qh=101,tu=102,fl=103,pl=104,eu=200,nu=201,iu=202,su=203,Za=204,Ja=205,ru=206,au=207,ou=208,lu=209,cu=210,hu=211,uu=212,du=213,fu=214,pu=0,mu=1,gu=2,yr=3,_u=4,xu=5,vu=6,yu=7,Dc=0,Mu=1,bu=2,ti=0,Su=1,wu=2,Eu=3,Tu=4,Au=5,Ru=6;var Uc=300,is=301,ss=302,Ka=303,ja=304,Hr=306,Qa=1e3,nn=1001,to=1002,Ie=1003,ml=1004;var ya=1005;var $e=1006,Cu=1007;var Cs=1008;var ei=1009,Pu=1010,Lu=1011,Lo=1012,Nc=1013,Jn=1014,Kn=1015,Ps=1016,Oc=1017,Fc=1018,vi=1020,Iu=1021,sn=1023,Du=1024,Uu=1025,yi=1026,rs=1027,Nu=1028,Bc=1029,Ou=1030,zc=1031,kc=1033,Ma=33776,ba=33777,Sa=33778,wa=33779,gl=35840,_l=35841,xl=35842,vl=35843,Hc=36196,yl=37492,Ml=37496,bl=37808,Sl=37809,wl=37810,El=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Il=37818,Dl=37819,Ul=37820,Nl=37821,Ea=36492,Ol=36494,Fl=36495,Fu=36283,Bl=36284,zl=36285,kl=36286;var Mr=2300,br=2301,Ta=2302,Hl=2400,Vl=2401,Gl=2402;var Vc=3e3,Mi=3001,Bu=3200,zu=3201,ku=0,Hu=1,Ze="",be="srgb",Un="srgb-linear",Io="display-p3",Vr="display-p3-linear",Sr="linear",ie="srgb",wr="rec709",Er="p3";var Ui=7680;var Wl=519,Vu=512,Gu=513,Wu=514,Gc=515,Xu=516,qu=517,Yu=518,$u=519,Xl=35044;var ql="300 es",eo=1035,In=2e3,Tr=2001,ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=1234567,Es=Math.PI/180,Ls=180/Math.PI;function cs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function Do(n,t){return(n%t+t)%t}function Zu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ju(n,t,e){return n!==t?(e-n)/(t-n):0}function Ts(n,t,e){return(1-e)*n+e*t}function Ku(n,t,e,i){return Ts(n,t,1-Math.exp(-e*i))}function ju(n,t=1){return t-Math.abs(Do(n,t*2)-t)}function Qu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function td(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ed(n,t){return n+Math.floor(Math.random()*(t-n+1))}function nd(n,t){return n+Math.random()*(t-n)}function id(n){return n*(.5-Math.random())}function sd(n){n!==void 0&&(Yl=n);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(n){return n*Es}function ad(n){return n*Ls}function no(n){return(n&n-1)===0&&n!==0}function od(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ar(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ld(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),p=o((t-i)/2),m=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*p,a*c);break;case"YZY":n.set(l*p,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*p,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Wc={DEG2RAD:Es,RAD2DEG:Ls,generateUUID:cs,clamp:De,euclideanModulo:Do,mapLinear:Zu,inverseLerp:Ju,lerp:Ts,damp:Ku,pingpong:ju,smoothstep:Qu,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:ad,isPowerOfTwo:no,ceilPowerOfTwo:od,floorPowerOfTwo:Ar,setQuaternionFromProperEuler:ld,normalize:Pe,denormalize:Ji},Wt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],_=i[8],g=s[0],d=s[3],f=s[6],w=s[1],v=s[4],R=s[7],E=s[2],T=s[5],A=s[8];return r[0]=o*g+a*w+l*E,r[3]=o*d+a*v+l*T,r[6]=o*f+a*R+l*A,r[1]=c*g+h*w+u*E,r[4]=c*d+h*v+u*T,r[7]=c*f+h*R+u*A,r[2]=p*g+m*w+_*E,r[5]=p*d+m*v+_*T,r[8]=p*f+m*R+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,p=a*l-h*r,m=c*r-o*l,_=e*u+i*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(s*c-h*i)*g,t[2]=(a*i-s*o)*g,t[3]=p*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=m*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Aa=new kt;function Xc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cd(){let n=Rr("canvas");return n.style.display="block",n}var $l={};function As(n){n in $l||($l[n]=!0,console.warn(n))}var Zl=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jl=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[Un]:{transfer:Sr,primaries:wr,toReference:n=>n,fromReference:n=>n},[be]:{transfer:ie,primaries:wr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vr]:{transfer:Sr,primaries:Er,toReference:n=>n.applyMatrix3(Jl),fromReference:n=>n.applyMatrix3(Zl)},[Io]:{transfer:ie,primaries:Er,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Jl),fromReference:n=>n.applyMatrix3(Zl).convertLinearToSRGB()}},hd=new Set([Un,Vr]),Zt={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Ks[t].toReference,s=Ks[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ks[n].primaries},getTransfer:function(n){return n===Ze?Sr:Ks[n].transfer}};function es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ra(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ni,Cr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=Rr("canvas")),Ni.width=t.width,Ni.height=t.height;let i=Ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(es(e[i]/255)*255):e[i]=es(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ud=0,Pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=cs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dd=0,rn=class n extends ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=nn,s=nn,r=$e,o=Cs,a=sn,l=ei,c=n.DEFAULT_ANISOTROPY,h=Ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=cs(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(As("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Mi?be:Ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return As("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?Mi:Vc}set encoding(t){As("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Mi?be:Ze}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Uc;rn.DEFAULT_ANISOTROPY=1;var Se=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],_=l[9],g=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,R=(m+1)/2,E=(f+1)/2,T=(h+p)/4,A=(u+g)/4,V=(_+d)/4;return v>R&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=A/i):R>E?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=T/s,r=V/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=V/r),this.set(i,s,r,e),this}let w=Math.sqrt((d-_)*(d-_)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(d-_)/w,this.y=(u-g)/w,this.z=(p-h)/w,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends ii{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(As("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mi?be:Ze),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Pr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends io{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Lr=class extends rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var so=class extends rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ne=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],p=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==p||c!==m||h!==_){let d=1-a,f=l*p+c*m+h*_+u*g,w=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let E=Math.sqrt(v),T=Math.atan2(E,f*w);d=Math.sin(d*T)/E,a=Math.sin(a*T)/E}let R=a*w;if(l=l*d+p*R,c=c*d+m*R,h=h*d+_*R,u=u*d+g*R,d===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],p=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*m-c*p,t[e+1]=l*_+h*p+c*u-a*m,t[e+2]=c*_+h*m+a*p-l*u,t[e+3]=h*_-a*u-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),p=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"YXZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"ZXY":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"ZYX":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"YZX":this._x=p*h*u+c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u-p*m*_;break;case"XZY":this._x=p*h*u-c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=i+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new I,Kl=new Ne,bi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),Qs.subVectors(this.max,Ms),Oi.subVectors(t.a,Ms),Fi.subVectors(t.b,Ms),Bi.subVectors(t.c,Ms),Xn.subVectors(Fi,Oi),qn.subVectors(Bi,Fi),di.subVectors(Oi,Bi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-di.z,di.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!La(e,Oi,Fi,Bi,Qs)||(e=[1,0,0,0,1,0,0,0,1],!La(e,Oi,Fi,Bi,Qs))?!1:(tr.crossVectors(Xn,qn),e=[tr.x,tr.y,tr.z],La(e,Oi,Fi,Bi,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},En=[new I,new I,new I,new I,new I,new I,new I,new I],je=new I,js=new bi,Oi=new I,Fi=new I,Bi=new I,Xn=new I,qn=new I,di=new I,Ms=new I,Qs=new I,tr=new I,fi=new I;function La(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fi.fromArray(n,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=i.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fd=new bi,bs=new I,Ia=new I,Is=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):fd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Ia)),this.expandByPoint(bs.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tn=new I,Da=new I,er=new I,Yn=new I,Ua=new I,nr=new I,Na=new I,Ir=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Da.copy(t).add(e).multiplyScalar(.5),er.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Da);let r=t.distanceTo(e)*.5,o=-this.direction.dot(er),a=Yn.dot(this.direction),l=-Yn.dot(er),c=Yn.lengthSq(),h=Math.abs(1-o*o),u,p,m,_;if(h>0)if(u=o*l-a,p=o*a-l,_=r*h,u>=0)if(p>=-_)if(p<=_){let g=1/h;u*=g,p*=g,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Da).addScaledVector(er,p),m}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,i,s,r){Ua.subVectors(e,t),nr.subVectors(i,t),Na.crossVectors(Ua,nr);let o=this.direction.dot(Na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);let l=a*this.direction.dot(nr.crossVectors(Yn,nr));if(l<0)return null;let c=a*this.direction.dot(Ua.cross(Yn));if(c<0||l+c>o)return null;let h=-a*Yn.dot(Na);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,p,m,_,g,d){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,p,m,_,g,d)}set(t,e,i,s,r,o,a,l,c,h,u,p,m,_,g,d){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=_,f[11]=g,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=p-g*c,e[9]=-a*l,e[2]=g-p*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,m=l*u,_=c*h,g=c*u;e[0]=p+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,m=l*u,_=c*h,g=c*u;e[0]=p-g*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-m,e[8]=p*c+g,e[1]=l*u,e[5]=g*c+p,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-p*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+_,e[10]=p-g*u}else if(t.order==="XZY"){let p=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+g,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=g*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,i){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),$n.crossVectors(i,He),$n.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),$n.crossVectors(i,He)),$n.normalize(),ir.crossVectors(He,$n),s[0]=$n.x,s[4]=ir.x,s[8]=He.x,s[1]=$n.y,s[5]=ir.y,s[9]=He.y,s[2]=$n.z,s[6]=ir.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],_=i[2],g=i[6],d=i[10],f=i[14],w=i[3],v=i[7],R=i[11],E=i[15],T=s[0],A=s[4],V=s[8],M=s[12],S=s[1],z=s[5],X=s[9],nt=s[13],P=s[2],F=s[6],H=s[10],q=s[14],W=s[3],G=s[7],J=s[11],Q=s[15];return r[0]=o*T+a*S+l*P+c*W,r[4]=o*A+a*z+l*F+c*G,r[8]=o*V+a*X+l*H+c*J,r[12]=o*M+a*nt+l*q+c*Q,r[1]=h*T+u*S+p*P+m*W,r[5]=h*A+u*z+p*F+m*G,r[9]=h*V+u*X+p*H+m*J,r[13]=h*M+u*nt+p*q+m*Q,r[2]=_*T+g*S+d*P+f*W,r[6]=_*A+g*z+d*F+f*G,r[10]=_*V+g*X+d*H+f*J,r[14]=_*M+g*nt+d*q+f*Q,r[3]=w*T+v*S+R*P+E*W,r[7]=w*A+v*z+R*F+E*G,r[11]=w*V+v*X+R*H+E*J,r[15]=w*M+v*nt+R*q+E*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],m=t[14],_=t[3],g=t[7],d=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*a*p+i*c*p+s*a*m-i*l*m)+g*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+d*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+f*(-s*a*h-e*l*u+e*a*p+s*o*u-i*o*p+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],m=t[11],_=t[12],g=t[13],d=t[14],f=t[15],w=u*d*c-g*p*c+g*l*m-a*d*m-u*l*f+a*p*f,v=_*p*c-h*d*c-_*l*m+o*d*m+h*l*f-o*p*f,R=h*g*c-_*u*c+_*a*m-o*g*m-h*a*f+o*u*f,E=_*u*l-h*g*l-_*a*p+o*g*p+h*a*d-o*u*d,T=e*w+i*v+s*R+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=w*A,t[1]=(g*p*r-u*d*r-g*s*m+i*d*m+u*s*f-i*p*f)*A,t[2]=(a*d*r-g*l*r+g*s*c-i*d*c-a*s*f+i*l*f)*A,t[3]=(u*l*r-a*p*r-u*s*c+i*p*c+a*s*m-i*l*m)*A,t[4]=v*A,t[5]=(h*d*r-_*p*r+_*s*m-e*d*m-h*s*f+e*p*f)*A,t[6]=(_*l*r-o*d*r-_*s*c+e*d*c+o*s*f-e*l*f)*A,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*m+e*l*m)*A,t[8]=R*A,t[9]=(_*u*r-h*g*r-_*i*m+e*g*m+h*i*f-e*u*f)*A,t[10]=(o*g*r-_*a*r+_*i*c-e*g*c-o*i*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*A,t[12]=E*A,t[13]=(h*g*s-_*u*s+_*i*p-e*g*p-h*i*d+e*u*d)*A,t[14]=(_*a*s-o*g*s-_*i*l+e*g*l+o*i*d-e*a*d)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*p+e*a*p)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,p=r*c,m=r*h,_=r*u,g=o*h,d=o*u,f=a*u,w=l*c,v=l*h,R=l*u,E=i.x,T=i.y,A=i.z;return s[0]=(1-(g+f))*E,s[1]=(m+R)*E,s[2]=(_-v)*E,s[3]=0,s[4]=(m-R)*T,s[5]=(1-(p+f))*T,s[6]=(d+w)*T,s[7]=0,s[8]=(_+v)*A,s[9]=(d-w)*A,s[10]=(1-(p+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);let c=1/r,h=1/o,u=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=In){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),m,_;if(a===In)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Tr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=In){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),p=(e+t)*c,m=(i+s)*h,_,g;if(a===In)_=(o+r)*u,g=-2*u;else if(a===Tr)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},zi=new I,Qe=new Jt,pd=new I(0,0,0),md=new I(1,1,1),$n=new I,ir=new I,He=new I,jl=new Jt,Ql=new Ne,On=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gd=0,tc=new I,ki=new Ne,An=new Jt,sr=new I,Ss=new I,_d=new I,xd=new Ne,ec=new I(1,0,0),nc=new I(0,1,0),ic=new I(0,0,1),vd={type:"added"},yd={type:"removed"},Ge=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new On,i=new Ne,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new kt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sr.copy(t):sr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ss,sr,this.up):An.lookAt(sr,Ss,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(An),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new I(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new I,Rn=new I,Oa=new I,Cn=new I,Hi=new I,Vi=new I,sc=new I,Fa=new I,Ba=new I,za=new I,rr=!1,Ki=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),tn.subVectors(t,e),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){tn.subVectors(s,e),Rn.subVectors(i,e),Oa.subVectors(t,e);let o=tn.dot(tn),a=tn.dot(Rn),l=tn.dot(Oa),c=Rn.dot(Rn),h=Rn.dot(Oa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-a*h)*p,_=(o*h-a*l)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(t,e,i,s,r,o,a,l){return rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rr=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static isFrontFacing(t,e,i,s){return tn.subVectors(i,e),Rn.subVectors(t,e),tn.cross(Rn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),tn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Hi.subVectors(s,i),Vi.subVectors(r,i),Fa.subVectors(t,i);let l=Hi.dot(Fa),c=Vi.dot(Fa);if(l<=0&&c<=0)return e.copy(i);Ba.subVectors(t,s);let h=Hi.dot(Ba),u=Vi.dot(Ba);if(h>=0&&u<=h)return e.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Hi,o);za.subVectors(t,r);let m=Hi.dot(za),_=Vi.dot(za);if(_>=0&&m<=_)return e.copy(r);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Vi,a);let d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return sc.subVectors(r,s),a=(u-h)/(u-h+(m-_)),e.copy(s).addScaledVector(sc,a);let f=1/(d+g+p);return o=g*f,a=p*f,e.copy(i).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function ka(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=Do(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ka(o,r,t+1/3),this.g=ka(o,r,t),this.b=ka(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let i=qc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Zt.fromWorkingColorSpace(Te.copy(this),t),Math.round(De(Te.r*255,0,255))*65536+Math.round(De(Te.g*255,0,255))*256+Math.round(De(Te.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Te.copy(this),e);let i=Te.r,s=Te.g,r=Te.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=be){Zt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,i=Te.g,s=Te.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(ar);let i=Ts(Zn.h,ar.h,e),s=Ts(Zn.s,ar.s,e),r=Ts(Zn.l,ar.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Xt;Xt.NAMES=qc;var Md=0,as=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=ts,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ja&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},si=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new I,or=new Wt,Je=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}};var Dr=class extends Je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ur=class extends Je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Dn=class extends Je{constructor(t,e,i){super(new Float32Array(t),e,i)}};var bd=0,Ye=new Jt,Ha=new Ge,Gi=new I,Ve=new bi,ws=new bi,Me=new I,Si=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xc(t)?Ur:Dr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,i){return Ye.makeTranslation(t,e,i),this.applyMatrix4(Ye),this}scale(t,e,i){return Ye.makeScale(t,e,i),this.applyMatrix4(Ye),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ve.min,ws.min),Ve.expandByPoint(Me),Me.addVectors(Ve.max,ws.max),Ve.expandByPoint(Me)):(Ve.expandByPoint(ws.min),Ve.expandByPoint(ws.max))}Ve.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),Me.add(Gi)),s=Math.max(s,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new I,h[S]=new I;let u=new I,p=new I,m=new I,_=new Wt,g=new Wt,d=new Wt,f=new I,w=new I;function v(S,z,X){u.fromArray(s,S*3),p.fromArray(s,z*3),m.fromArray(s,X*3),_.fromArray(o,S*2),g.fromArray(o,z*2),d.fromArray(o,X*2),p.sub(u),m.sub(u),g.sub(_),d.sub(_);let nt=1/(g.x*d.y-d.x*g.y);isFinite(nt)&&(f.copy(p).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(nt),w.copy(m).multiplyScalar(g.x).addScaledVector(p,-d.x).multiplyScalar(nt),c[S].add(f),c[z].add(f),c[X].add(f),h[S].add(w),h[z].add(w),h[X].add(w))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let S=0,z=R.length;S<z;++S){let X=R[S],nt=X.start,P=X.count;for(let F=nt,H=nt+P;F<H;F+=3)v(i[F+0],i[F+1],i[F+2])}let E=new I,T=new I,A=new I,V=new I;function M(S){A.fromArray(r,S*3),V.copy(A);let z=c[S];E.copy(z),E.sub(A.multiplyScalar(A.dot(z))).normalize(),T.crossVectors(V,z);let nt=T.dot(h[S])<0?-1:1;l[S*4]=E.x,l[S*4+1]=E.y,l[S*4+2]=E.z,l[S*4+3]=nt}for(let S=0,z=R.length;S<z;++S){let X=R[S],nt=X.start,P=X.count;for(let F=nt,H=nt+P;F<H;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let p=0,m=t.count;p<m;p+=3){let _=t.getX(p+0),g=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),m=0,_=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let f=0;f<h;f++)p[_++]=c[m++]}return new Je(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=t(p,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rc=new Jt,pi=new Ir,lr=new Is,ac=new I,Wi=new I,Xi=new I,qi=new I,Va=new I,cr=new I,hr=new Wt,ur=new Wt,dr=new Wt,oc=new I,lc=new I,cc=new I,fr=new I,pr=new I,Be=class extends Ge{constructor(t=new Si,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Va.fromBufferAttribute(u,t),o?cr.addScaledVector(Va,h):cr.addScaledVector(Va.sub(e),h))}e.add(cr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(lr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(lr,ac)===null||pi.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(rc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){let d=p[_],f=o[d.materialIndex],w=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let R=w,E=v;R<E;R+=3){let T=a.getX(R),A=a.getX(R+1),V=a.getX(R+2);s=mr(this,f,t,i,c,h,u,T,A,V),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let d=_,f=g;d<f;d+=3){let w=a.getX(d),v=a.getX(d+1),R=a.getX(d+2);s=mr(this,o,t,i,c,h,u,w,v,R),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){let d=p[_],f=o[d.materialIndex],w=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let R=w,E=v;R<E;R+=3){let T=R,A=R+1,V=R+2;s=mr(this,f,t,i,c,h,u,T,A,V),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=_,f=g;d<f;d+=3){let w=d,v=d+1,R=d+2;s=mr(this,o,t,i,c,h,u,w,v,R),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Sd(n,t,e,i,s,r,o,a){let l;if(t.side===ze?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ni,a),l===null)return null;pr.copy(a),pr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(pr);return c<e.near||c>e.far?null:{distance:c,point:pr.clone(),object:n}}function mr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Wi),n.getVertexPosition(l,Xi),n.getVertexPosition(c,qi);let h=Sd(n,t,e,i,Wi,Xi,qi,fr);if(h){s&&(hr.fromBufferAttribute(s,a),ur.fromBufferAttribute(s,l),dr.fromBufferAttribute(s,c),h.uv=Ki.getInterpolation(fr,Wi,Xi,qi,hr,ur,dr,new Wt)),r&&(hr.fromBufferAttribute(r,a),ur.fromBufferAttribute(r,l),dr.fromBufferAttribute(r,c),h.uv1=Ki.getInterpolation(fr,Wi,Xi,qi,hr,ur,dr,new Wt),h.uv2=h.uv1),o&&(oc.fromBufferAttribute(o,a),lc.fromBufferAttribute(o,l),cc.fromBufferAttribute(o,c),h.normal=Ki.getInterpolation(fr,Wi,Xi,qi,oc,lc,cc,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Ki.getNormal(Wi,Xi,qi,u.normal),h.face=u}return h}var Us=class n extends Si{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,m=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(u,2));function _(g,d,f,w,v,R,E,T,A,V,M){let S=R/A,z=E/V,X=R/2,nt=E/2,P=T/2,F=A+1,H=V+1,q=0,W=0,G=new I;for(let J=0;J<H;J++){let Q=J*z-nt;for(let lt=0;lt<F;lt++){let k=lt*S-X;G[g]=k*w,G[d]=Q*v,G[f]=P,c.push(G.x,G.y,G.z),G[g]=0,G[d]=0,G[f]=T>0?1:-1,h.push(G.x,G.y,G.z),u.push(lt/A),u.push(1-J/V),q+=1}}for(let J=0;J<V;J++)for(let Q=0;Q<A;Q++){let lt=p+Q+F*J,k=p+Q+F*(J+1),Y=p+(Q+1)+F*(J+1),at=p+(Q+1)+F*J;l.push(lt,k,at),l.push(k,Y,at),W+=6}a.addGroup(m,W,M),m+=W,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function os(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Le(n){let t={};for(let e=0;e<n.length;e++){let i=os(n[e]);for(let s in i)t[s]=i[s]}return t}function wd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yc(n){return n.getRenderTarget()===null?n.outputColorSpace:Zt.workingColorSpace}var Ed={clone:os,merge:Le},Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Nr=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ue=class extends Nr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Es*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,$i=1,ro=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Yi,$i,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Yi,$i,t,e);r.layers=this.layers,this.add(r);let o=new Ue(Yi,$i,t,e);o.layers=this.layers,this.add(o);let a=new Ue(Yi,$i,t,e);a.layers=this.layers,this.add(a);let l=new Ue(Yi,$i,t,e);l.layers=this.layers,this.add(l);let c=new Ue(Yi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Or=class extends rn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ao=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(As("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Mi?be:Ze),this.texture=new Or(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ze,blending:Qn});r.uniforms.tEquirect.value=e;let o=new Be(s,r),a=e.minFilter;return e.minFilter===Cs&&(e.minFilter=$e),new ro(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ga=new I,Rd=new I,Cd=new kt,en=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ga.subVectors(i,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ga),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Cd.getNormalMatrix(t),s=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new Is,gr=new I,Fr=class{constructor(t=new en,e=new en,i=new en,s=new en,r=new en,o=new en){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=In){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],_=s[9],g=s[10],d=s[11],f=s[12],w=s[13],v=s[14],R=s[15];if(i[0].setComponents(l-r,p-c,d-m,R-f).normalize(),i[1].setComponents(l+r,p+c,d+m,R+f).normalize(),i[2].setComponents(l+o,p+h,d+_,R+w).normalize(),i[3].setComponents(l-o,p-h,d-_,R-w).normalize(),i[4].setComponents(l-a,p-u,d-g,R-v).normalize(),e===In)i[5].setComponents(l+a,p+u,d+g,R+v).normalize();else if(e===Tr)i[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(gr.x=s.normal.x>0?t.max.x:t.min.x,gr.y=s.normal.y>0?t.max.y:t.min.y,gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $c(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Pd(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,p=c.usage,m=u.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,u,p),c.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let p=h.array,m=h._updateRange,_=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&_.length===0&&n.bufferSubData(u,0,p),_.length!==0){for(let g=0,d=_.length;g<d;g++){let f=_[g];e?n.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):n.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Bn=class n extends Si{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,p=e/l,m=[],_=[],g=[],d=[];for(let f=0;f<h;f++){let w=f*p-o;for(let v=0;v<c;v++){let R=v*u-r;_.push(R,-w,0),g.push(0,0,1),d.push(v/a),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let v=w+c*f,R=w+c*(f+1),E=w+1+c*(f+1),T=w+1+c*f;m.push(v,R,T),m.push(R,E,T)}this.setIndex(m),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
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
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
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
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Xd=`#ifdef USE_BUMPMAP
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
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
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nf=`vec3 transformedNormal = objectNormal;
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
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`
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
}`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
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
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
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
#endif`,Lf=`struct PhysicalMaterial {
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
}`,If=`
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
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
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,zp=`#define DISTANCE
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
}`,kp=`#define DISTANCE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,tm=`#define PHONG
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
}`,em=`#define STANDARD
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
}`,nm=`#define STANDARD
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
}`,im=`#define TOON
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
}`,sm=`#define TOON
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
}`,rm=`uniform float size;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,cm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ld,alphahash_pars_fragment:Id,alphamap_fragment:Dd,alphamap_pars_fragment:Ud,alphatest_fragment:Nd,alphatest_pars_fragment:Od,aomap_fragment:Fd,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Hd,beginnormal_vertex:Vd,bsdfs:Gd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:Kd,color_pars_vertex:jd,color_vertex:Qd,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Ef,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:xf,gradientmap_pars_fragment:vf,lightmap_fragment:yf,lightmap_pars_fragment:Mf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Sf,lights_pars_begin:wf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:Lf,lights_fragment_begin:If,lights_fragment_maps:Df,lights_fragment_end:Uf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Bf,map_fragment:zf,map_pars_fragment:kf,map_particle_fragment:Hf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:$f,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:Kf,normal_pars_vertex:jf,normal_vertex:Qf,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:xp,skinning_vertex:vp,skinnormal_vertex:yp,specularmap_fragment:Mp,specularmap_pars_fragment:bp,tonemapping_fragment:Sp,tonemapping_pars_fragment:wp,transmission_fragment:Ep,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Ip,backgroundCube_vert:Dp,backgroundCube_frag:Up,cube_vert:Np,cube_frag:Op,depth_vert:Fp,depth_frag:Bp,distanceRGBA_vert:zp,distanceRGBA_frag:kp,equirect_vert:Hp,equirect_frag:Vp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:$p,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:Kp,meshnormal_frag:jp,meshphong_vert:Qp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},et={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},fn={basic:{uniforms:Le([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Le([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Le([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Le([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Le([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Le([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Le([et.points,et.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Le([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Le([et.common,et.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Le([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Le([et.sprite,et.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Le([et.common,et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Le([et.lights,et.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};fn.physical={uniforms:Le([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var _r={r:0,b:0,g:0};function um(n,t,e,i,s,r,o){let a=new Xt(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function _(d,f){let w=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Hr)?(h===void 0&&(h=new Be(new Us(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:os(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ie,(u!==v||p!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,m=n.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Be(new Bn(2,2),new Fn({name:"BackgroundMaterial",uniforms:os(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,f){d.getRGB(_r,Yc(n)),i.buffers.color.setClear(_r.r,_r.g,_r.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(d,f=1){a.set(d),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(a,l)},render:_}}function dm(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null),c=l,h=!1;function u(P,F,H,q,W){let G=!1;if(o){let J=g(q,H,F);c!==J&&(c=J,m(c.object)),G=f(P,q,H,W),G&&w(P,q,H,W)}else{let J=F.wireframe===!0;(c.geometry!==q.id||c.program!==H.id||c.wireframe!==J)&&(c.geometry=q.id,c.program=H.id,c.wireframe=J,G=!0)}W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,V(P,F,H,q),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,F,H){let q=H.wireframe===!0,W=a[P.id];W===void 0&&(W={},a[P.id]=W);let G=W[F.id];G===void 0&&(G={},W[F.id]=G);let J=G[q];return J===void 0&&(J=d(p()),G[q]=J),J}function d(P){let F=[],H=[],q=[];for(let W=0;W<s;W++)F[W]=0,H[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:q,object:P,attributes:{},index:null}}function f(P,F,H,q){let W=c.attributes,G=F.attributes,J=0,Q=H.getAttributes();for(let lt in Q)if(Q[lt].location>=0){let Y=W[lt],at=G[lt];if(at===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),Y===void 0||Y.attribute!==at||at&&Y.data!==at.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function w(P,F,H,q){let W={},G=F.attributes,J=0,Q=H.getAttributes();for(let lt in Q)if(Q[lt].location>=0){let Y=G[lt];Y===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let at={};at.attribute=Y,Y&&Y.data&&(at.data=Y.data),W[lt]=at,J++}c.attributes=W,c.attributesNum=J,c.index=q}function v(){let P=c.newAttributes;for(let F=0,H=P.length;F<H;F++)P[F]=0}function R(P){E(P,0)}function E(P,F){let H=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;H[P]=1,q[P]===0&&(n.enableVertexAttribArray(P),q[P]=1),W[P]!==F&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),W[P]=F)}function T(){let P=c.newAttributes,F=c.enabledAttributes;for(let H=0,q=F.length;H<q;H++)F[H]!==P[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function A(P,F,H,q,W,G,J){J===!0?n.vertexAttribIPointer(P,F,H,W,G):n.vertexAttribPointer(P,F,H,q,W,G)}function V(P,F,H,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let W=q.attributes,G=H.getAttributes(),J=F.defaultAttributeValues;for(let Q in G){let lt=G[Q];if(lt.location>=0){let k=W[Q];if(k===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let Y=k.normalized,at=k.itemSize,_t=e.get(k);if(_t===void 0)continue;let gt=_t.buffer,Pt=_t.type,It=_t.bytesPerElement,wt=i.isWebGL2===!0&&(Pt===n.INT||Pt===n.UNSIGNED_INT||k.gpuType===Nc);if(k.isInterleavedBufferAttribute){let Gt=k.data,D=Gt.stride,Ae=k.offset;if(Gt.isInstancedInterleavedBuffer){for(let vt=0;vt<lt.locationSize;vt++)E(lt.location+vt,Gt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Gt.meshPerAttribute*Gt.count)}else for(let vt=0;vt<lt.locationSize;vt++)R(lt.location+vt);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let vt=0;vt<lt.locationSize;vt++)A(lt.location+vt,at/lt.locationSize,Pt,Y,D*It,(Ae+at/lt.locationSize*vt)*It,wt)}else{if(k.isInstancedBufferAttribute){for(let Gt=0;Gt<lt.locationSize;Gt++)E(lt.location+Gt,k.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Gt=0;Gt<lt.locationSize;Gt++)R(lt.location+Gt);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Gt=0;Gt<lt.locationSize;Gt++)A(lt.location+Gt,at/lt.locationSize,Pt,Y,at*It,at/lt.locationSize*Gt*It,wt)}}else if(J!==void 0){let Y=J[Q];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(lt.location,Y);break;case 3:n.vertexAttrib3fv(lt.location,Y);break;case 4:n.vertexAttrib4fv(lt.location,Y);break;default:n.vertexAttrib1fv(lt.location,Y)}}}}T()}function M(){X();for(let P in a){let F=a[P];for(let H in F){let q=F[H];for(let W in q)_(q[W].object),delete q[W];delete F[H]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let F=a[P.id];for(let H in F){let q=F[H];for(let W in q)_(q[W].object),delete q[W];delete F[H]}delete a[P.id]}function z(P){for(let F in a){let H=a[F];if(H[P.id]===void 0)continue;let q=H[P.id];for(let W in q)_(q[W].object),delete q[W];delete H[P.id]}}function X(){nt(),h=!0,c!==l&&(c=l,m(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:nt,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:R,disableUnusedAttributes:T}}function fm(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,p){if(p===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,u,p),e.update(u,r,p)}function c(h,u,p){if(p===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<p;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let _=0;for(let g=0;g<p;g++)_+=u[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function pm(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,R=o||t.has("OES_texture_float"),E=v&&R,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:R,floatVertexTextures:E,maxSamples:T}}function mm(n){let t=this,e=null,i=0,s=!1,r=!1,o=new en,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||i!==0||s;return s=p,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){let _=u.clippingPlanes,g=u.clipIntersection,d=u.clipShadows,f=n.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{let w=r?0:i,v=w*4,R=f.clippingState||null;l.value=R,R=h(_,p,v,m);for(let E=0;E!==v;++E)R[E]=e[E];f.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,p,m,_){let g=u!==null?u.length:0,d=null;if(g!==0){if(d=l.value,_!==!0||d===null){let f=m+g*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,R=m;v!==g;++v,R+=4)o.copy(u[v]).applyMatrix4(w,a),o.normal.toArray(d,R),d[R+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}function gm(n){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=is:a===ja&&(o.mapping=ss),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ka||a===ja)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ao(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var oo=class extends Nr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ji=4,hc=[.125,.215,.35,.446,.526,.582],xi=20,Wa=new oo,uc=new Xt,Xa=null,qa=0,Ya=0,gi=(1+Math.sqrt(5))/2,Zi=1/gi,dc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,gi,Zi),new I(0,gi,-Zi),new I(Zi,0,gi),new I(-Zi,0,gi),new I(gi,Zi,0),new I(-gi,Zi,0)],Br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,Ya),t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Ps,format:sn,colorSpace:Un,depthBuffer:!1},s=fc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(r)),this._blurMaterial=xm(r,t,e)}return s}_compileMaterial(t){let e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,i,s){let a=new Ue(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(uc),h.toneMapping=ti,h.autoClear=!1;let m=new si({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new Be(new Us,m),g=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,g=!0):(m.color.copy(uc),g=!0);for(let f=0;f<6;f++){let w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;xr(s,w*v,f>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;xr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Wa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=dc[(s-1)%dc.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Be(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*xi-1),g=r/_,d=isFinite(r)?1+Math.floor(h*g):xi;d>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xi}`);let f=[],w=0;for(let A=0;A<xi;++A){let V=A/g,M=Math.exp(-V*V/2);f.push(M),A===0?w+=M:A<d&&(w+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-i;let R=this._sizeLods[s],E=3*R*(s>v-ji?s-v+ji:0),T=4*(this._cubeSize-R);xr(e,E,T,3*R,2*R),l.setRenderTarget(e),l.render(u,Wa)}};function _m(n){let t=[],e=[],i=[],s=n,r=n-ji+1+hc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ji?l=hc[o-n+ji-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,d=2,f=1,w=new Float32Array(g*_*m),v=new Float32Array(d*_*m),R=new Float32Array(f*_*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,V=T>2?0:-1,M=[A,V,0,A+2/3,V,0,A+2/3,V+1,0,A,V,0,A+2/3,V+1,0,A,V+1,0];w.set(M,g*_*T),v.set(p,d*_*T);let S=[T,T,T,T,T,T];R.set(S,f*_*T)}let E=new Si;E.setAttribute("position",new Je(w,g)),E.setAttribute("uv",new Je(v,d)),E.setAttribute("faceIndex",new Je(R,f)),t.push(E),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fc(n,t,e){let i=new Nn(n,t,e);return i.texture.mapping=Hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function xm(n,t,e){let i=new Float32Array(xi),s=new I(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function pc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function mc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Uo(){return`

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
	`}function vm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ka||l===ja,h=l===is||l===ss;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Br(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Br(n));let p=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ym(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Mm(n,t,e,i){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);for(let _ in p.morphAttributes){let g=p.morphAttributes[_];for(let d=0,f=g.length;d<f;d++)t.remove(g[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let _ in p)t.update(p[_],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let _ in m){let g=m[_];for(let d=0,f=g.length;d<f;d++)t.update(g[d],n.ARRAY_BUFFER)}}function c(u){let p=[],m=u.index,_=u.attributes.position,g=0;if(m!==null){let w=m.array;g=m.version;for(let v=0,R=w.length;v<R;v+=3){let E=w[v+0],T=w[v+1],A=w[v+2];p.push(E,T,T,A,A,E)}}else if(_!==void 0){let w=_.array;g=_.version;for(let v=0,R=w.length/3-1;v<R;v+=3){let E=v+0,T=v+1,A=v+2;p.push(E,T,T,A,A,E)}}else return;let d=new(Xc(p)?Ur:Dr)(p,1);d.version=g;let f=r.get(u);f&&t.remove(f),r.set(u,d)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function bm(n,t,e,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){n.drawElements(r,_,a,m*l),e.update(_,r,1)}function u(m,_,g){if(g===0)return;let d,f;if(s)d=n,f="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,_,a,m*l,g),e.update(_,r,g)}function p(m,_,g){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<g;f++)this.render(m[f]/l,_[f]);else{d.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let f=0;for(let w=0;w<g;w++)f+=_[w];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function Sm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function wm(n,t){return n[0]-t[0]}function Em(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Tm(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new Se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let p=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==_){let P=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();let w=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],V=0;w===!0&&(V=1),v===!0&&(V=2),R===!0&&(V=3);let M=h.attributes.position.count*V,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let z=new Float32Array(M*S*4*_),X=new Lr(z,M,S,_);X.type=Kn,X.needsUpdate=!0;let nt=V*4;for(let F=0;F<_;F++){let H=E[F],q=T[F],W=A[F],G=M*S*4*F;for(let J=0;J<H.count;J++){let Q=J*nt;w===!0&&(o.fromBufferAttribute(H,J),z[G+Q+0]=o.x,z[G+Q+1]=o.y,z[G+Q+2]=o.z,z[G+Q+3]=0),v===!0&&(o.fromBufferAttribute(q,J),z[G+Q+4]=o.x,z[G+Q+5]=o.y,z[G+Q+6]=o.z,z[G+Q+7]=0),R===!0&&(o.fromBufferAttribute(W,J),z[G+Q+8]=o.x,z[G+Q+9]=o.y,z[G+Q+10]=o.z,z[G+Q+11]=W.itemSize===4?o.w:1)}}g={count:_,texture:X,size:new Wt(M,S)},r.set(h,g),h.addEventListener("dispose",P)}let d=0;for(let w=0;w<p.length;w++)d+=p[w];let f=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",p),u.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let m=p===void 0?0:p.length,_=i[h.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];i[h.id]=_}for(let v=0;v<m;v++){let R=_[v];R[0]=v,R[1]=p[v]}_.sort(Em);for(let v=0;v<8;v++)v<m&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(wm);let g=h.morphAttributes.position,d=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let R=a[v],E=R[0],T=R[1];E!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+v)!==g[E]&&h.setAttribute("morphTarget"+v,g[E]),d&&h.getAttribute("morphNormal"+v)!==d[E]&&h.setAttribute("morphNormal"+v,d[E]),s[v]=T,f+=T):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let w=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Am(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var zr=class extends rn{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:yi,h!==yi&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yi&&(i=Jn),i===void 0&&h===rs&&(i=vi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zc=new rn,Jc=new zr(1,1);Jc.compareFunction=Gc;var Kc=new Lr,jc=new so,Qc=new Or,gc=[],_c=[],xc=new Float32Array(16),vc=new Float32Array(9),yc=new Float32Array(4);function hs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=gc[s];if(r===void 0&&(r=new Float32Array(s),gc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Gr(n,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Rm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2fv(this.addr,t),_e(e,t)}}function Pm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;n.uniform3fv(this.addr,t),_e(e,t)}}function Lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4fv(this.addr,t),_e(e,t)}}function Im(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;yc.set(i),n.uniformMatrix2fv(this.addr,!1,yc),_e(e,i)}}function Dm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;vc.set(i),n.uniformMatrix3fv(this.addr,!1,vc),_e(e,i)}}function Um(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;xc.set(i),n.uniformMatrix4fv(this.addr,!1,xc),_e(e,i)}}function Nm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2iv(this.addr,t),_e(e,t)}}function Fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3iv(this.addr,t),_e(e,t)}}function Bm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4iv(this.addr,t),_e(e,t)}}function zm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function km(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2uiv(this.addr,t),_e(e,t)}}function Hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3uiv(this.addr,t),_e(e,t)}}function Vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4uiv(this.addr,t),_e(e,t)}}function Gm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Jc:Zc;e.setTexture2D(t||r,s)}function Wm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jc,s)}function Xm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qc,s)}function qm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kc,s)}function Ym(n){switch(n){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Lm;case 35674:return Im;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Om;case 35668:case 35672:return Fm;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return km;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function $m(n,t){n.uniform1fv(this.addr,t)}function Zm(n,t){let e=hs(t,this.size,2);n.uniform2fv(this.addr,e)}function Jm(n,t){let e=hs(t,this.size,3);n.uniform3fv(this.addr,e)}function Km(n,t){let e=hs(t,this.size,4);n.uniform4fv(this.addr,e)}function jm(n,t){let e=hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qm(n,t){let e=hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tg(n,t){let e=hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function eg(n,t){n.uniform1iv(this.addr,t)}function ng(n,t){n.uniform2iv(this.addr,t)}function ig(n,t){n.uniform3iv(this.addr,t)}function sg(n,t){n.uniform4iv(this.addr,t)}function rg(n,t){n.uniform1uiv(this.addr,t)}function ag(n,t){n.uniform2uiv(this.addr,t)}function og(n,t){n.uniform3uiv(this.addr,t)}function lg(n,t){n.uniform4uiv(this.addr,t)}function cg(n,t,e){let i=this.cache,s=t.length,r=Gr(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zc,r[o])}function hg(n,t,e){let i=this.cache,s=t.length,r=Gr(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jc,r[o])}function ug(n,t,e){let i=this.cache,s=t.length,r=Gr(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qc,r[o])}function dg(n,t,e){let i=this.cache,s=t.length,r=Gr(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kc,r[o])}function fg(n){switch(n){case 5126:return $m;case 35664:return Zm;case 35665:return Jm;case 35666:return Km;case 35674:return jm;case 35675:return Qm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}var lo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}},co=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fg(e.type)}},ho=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},$a=/(\w+)(\])?(\[|\.)?/g;function Mc(n,t){n.seq.push(t),n.map[t.id]=t}function pg(n,t,e){let i=n.name,s=i.length;for($a.lastIndex=0;;){let r=$a.exec(i),o=$a.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mc(e,c===void 0?new lo(a,n,t):new co(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new ho(a),Mc(e,u)),e=u}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pg(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function bc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mg=37297,gg=0;function _g(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function xg(n){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(n),i;switch(t===e?i="":t===Er&&e===wr?i="LinearDisplayP3ToLinearSRGB":t===wr&&e===Er&&(i="LinearSRGBToLinearDisplayP3"),n){case Un:case Vr:return[i,"LinearTransferOETF"];case be:case Io:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Sc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_g(n.getShaderSource(t),o)}else return s}function vg(n,t){let e=xg(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function yg(n,t){let e;switch(t){case Su:e="Linear";break;case wu:e="Reinhard";break;case Eu:e="OptimizedCineon";break;case Tu:e="ACESFilmic";break;case Ru:e="AgX";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Mg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qi).join(`
`)}function Sg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function wg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Qi(n){return n!==""}function wc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(n){return n.replace(Eg,Ag)}var Tg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ag(n,t){let e=Ut[t];if(e===void 0){let i=Tg.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return uo(e)}var Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(n){return n.replace(Rg,Cg)}function Cg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ac(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ic?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ig(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mu:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function Ug(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ng(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Pg(e),c=Lg(e),h=Ig(e),u=Dg(e),p=Ug(e),m=e.isWebGL2?"":Mg(e),_=bg(e),g=Sg(r),d=s.createProgram(),f,w,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),f.length>0&&(f+=`
`),w=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),w.length>0&&(w+=`
`)):(f=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),w=[m,Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Ut.tonemapping_pars_fragment:"",e.toneMapping!==ti?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),o=uo(o),o=wc(o,e),o=Ec(o,e),a=uo(a),a=wc(a,e),a=Ec(a,e),o=Tc(o),a=Tc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let R=v+f+o,E=v+w+a,T=bc(s,s.VERTEX_SHADER,R),A=bc(s,s.FRAGMENT_SHADER,E);s.attachShader(d,T),s.attachShader(d,A),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function V(X){if(n.debug.checkShaderErrors){let nt=s.getProgramInfoLog(d).trim(),P=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(A).trim(),H=!0,q=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,T,A);else{let W=Sc(s,T,"vertex"),G=Sc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+W+`
`+G)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(P===""||F==="")&&(q=!1);q&&(X.diagnostics={runnable:H,programLog:nt,vertexShader:{log:P,prefix:f},fragmentShader:{log:F,prefix:w}})}s.deleteShader(T),s.deleteShader(A),M=new ns(s,d),S=wg(s,d)}let M;this.getUniforms=function(){return M===void 0&&V(this),M};let S;this.getAttributes=function(){return S===void 0&&V(this),S};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(d,mg)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=T,this.fragmentShader=A,this}var Og=0,fo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new po(t),e.set(t,i)),i}},po=class{constructor(t){this.id=Og++,this.code=t,this.usedTimes=0}};function Fg(n,t,e,i,s,r,o){let a=new Ds,l=new fo,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function d(M,S,z,X,nt){let P=X.fog,F=nt.geometry,H=M.isMeshStandardMaterial?X.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),W=q&&q.mapping===Hr?q.image.height:null,G=_[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Q=J!==void 0?J.length:0,lt=0;F.morphAttributes.position!==void 0&&(lt=1),F.morphAttributes.normal!==void 0&&(lt=2),F.morphAttributes.color!==void 0&&(lt=3);let k,Y,at,_t;if(G){let Re=fn[G];k=Re.vertexShader,Y=Re.fragmentShader}else k=M.vertexShader,Y=M.fragmentShader,l.update(M),at=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);let gt=n.getRenderTarget(),Pt=nt.isInstancedMesh===!0,It=nt.isBatchedMesh===!0,wt=!!M.map,Gt=!!M.matcap,D=!!q,Ae=!!M.aoMap,vt=!!M.lightMap,Rt=!!M.bumpMap,dt=!!M.normalMap,le=!!M.displacementMap,Nt=!!M.emissiveMap,b=!!M.metalnessMap,x=!!M.roughnessMap,N=M.anisotropy>0,K=M.clearcoat>0,Z=M.iridescence>0,j=M.sheen>0,ft=M.transmission>0,rt=N&&!!M.anisotropyMap,ct=K&&!!M.clearcoatMap,St=K&&!!M.clearcoatNormalMap,Ot=K&&!!M.clearcoatRoughnessMap,$=Z&&!!M.iridescenceMap,$t=Z&&!!M.iridescenceThicknessMap,Ht=j&&!!M.sheenColorMap,At=j&&!!M.sheenRoughnessMap,xt=!!M.specularMap,ht=!!M.specularColorMap,Dt=!!M.specularIntensityMap,Yt=ft&&!!M.transmissionMap,he=ft&&!!M.thicknessMap,Bt=!!M.gradientMap,tt=!!M.alphaMap,C=M.alphaTest>0,it=!!M.alphaHash,st=!!M.extensions,Et=!!F.attributes.uv1,yt=!!F.attributes.uv2,jt=!!F.attributes.uv3,Qt=ti;return M.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Qt=n.toneMapping),{isWebGL2:h,shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:Y,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:It,instancing:Pt,instancingColor:Pt&&nt.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Un,map:wt,matcap:Gt,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:W,aoMap:Ae,lightMap:vt,bumpMap:Rt,normalMap:dt,displacementMap:p&&le,emissiveMap:Nt,normalMapObjectSpace:dt&&M.normalMapType===Hu,normalMapTangentSpace:dt&&M.normalMapType===ku,metalnessMap:b,roughnessMap:x,anisotropy:N,anisotropyMap:rt,clearcoat:K,clearcoatMap:ct,clearcoatNormalMap:St,clearcoatRoughnessMap:Ot,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:$t,sheen:j,sheenColorMap:Ht,sheenRoughnessMap:At,specularMap:xt,specularColorMap:ht,specularIntensityMap:Dt,transmission:ft,transmissionMap:Yt,thicknessMap:he,gradientMap:Bt,opaque:M.transparent===!1&&M.blending===ts,alphaMap:tt,alphaTest:C,alphaHash:it,combine:M.combine,mapUv:wt&&g(M.map.channel),aoMapUv:Ae&&g(M.aoMap.channel),lightMapUv:vt&&g(M.lightMap.channel),bumpMapUv:Rt&&g(M.bumpMap.channel),normalMapUv:dt&&g(M.normalMap.channel),displacementMapUv:le&&g(M.displacementMap.channel),emissiveMapUv:Nt&&g(M.emissiveMap.channel),metalnessMapUv:b&&g(M.metalnessMap.channel),roughnessMapUv:x&&g(M.roughnessMap.channel),anisotropyMapUv:rt&&g(M.anisotropyMap.channel),clearcoatMapUv:ct&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:St&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(M.sheenRoughnessMap.channel),specularMapUv:xt&&g(M.specularMap.channel),specularColorMapUv:ht&&g(M.specularColorMap.channel),specularIntensityMapUv:Dt&&g(M.specularIntensityMap.channel),transmissionMapUv:Yt&&g(M.transmissionMap.channel),thicknessMapUv:he&&g(M.thicknessMap.channel),alphaMapUv:tt&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(dt||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:yt,vertexUv3s:jt,pointsUvs:nt.isPoints===!0&&!!F.attributes.uv&&(wt||tt),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ln,flipSided:M.side===ze,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:st&&M.extensions.derivatives===!0,extensionFragDepth:st&&M.extensions.fragDepth===!0,extensionDrawBuffers:st&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:st&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let z in M.defines)S.push(z),S.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(w(S,M),v(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function w(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function R(M){let S=_[M.type],z;if(S){let X=fn[S];z=Ed.clone(X.uniforms)}else z=M.uniforms;return z}function E(M,S){let z;for(let X=0,nt=c.length;X<nt;X++){let P=c[X];if(P.cacheKey===S){z=P,++z.usedTimes;break}}return z===void 0&&(z=new Ng(n,S,M,r),c.push(z)),z}function T(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function V(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:V}}function Bg(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function zg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Rc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,p,m,_,g,d){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:d},n[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=d),t++,f}function a(u,p,m,_,g,d){let f=o(u,p,m,_,g,d);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,p,m,_,g,d){let f=o(u,p,m,_,g,d);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||zg),i.length>1&&i.sort(p||Rc),s.length>1&&s.sort(p||Rc)}function h(){for(let u=t,p=n.length;u<p;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function kg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Cc,n.set(i,[o])):s>=r.length?(o=new Cc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Hg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Xt};break;case"SpotLight":e={position:new I,direction:new I,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Vg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Gg=0;function Wg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xg(n,t){let e=new Hg,i=Vg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new Jt,a=new Jt;function l(h,u){let p=0,m=0,_=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let g=0,d=0,f=0,w=0,v=0,R=0,E=0,T=0,A=0,V=0,M=0;h.sort(Wg);let S=u===!0?Math.PI:1;for(let X=0,nt=h.length;X<nt;X++){let P=h[X],F=P.color,H=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=F.r*H*S,m+=F.g*H*S,_+=F.b*H*S;else if(P.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(P.sh.coefficients[G],H);M++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let J=P.shadow,Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[g]=Q,s.directionalShadowMap[g]=W,s.directionalShadowMatrix[g]=P.shadow.matrix,R++}s.directional[g]=G,g++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(H*S),G.distance=q,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,s.spot[f]=G;let J=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&V++),s.spotLightMatrix[f]=J.matrix,P.castShadow){let Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[f]=Q,s.spotShadowMap[f]=W,T++}f++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(F).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),s.rectArea[w]=G,w++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*S),G.distance=P.distance,G.decay=P.decay,P.castShadow){let J=P.shadow,Q=i.get(P);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[d]=Q,s.pointShadowMap[d]=W,s.pointShadowMatrix[d]=P.shadow.matrix,E++}s.point[d]=G,d++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(H*S),G.groundColor.copy(P.groundColor).multiplyScalar(H*S),s.hemi[v]=G,v++}}w>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=et.LTC_FLOAT_1,s.rectAreaLTC2=et.LTC_FLOAT_2):(s.rectAreaLTC1=et.LTC_HALF_1,s.rectAreaLTC2=et.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=et.LTC_FLOAT_1,s.rectAreaLTC2=et.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=et.LTC_HALF_1,s.rectAreaLTC2=et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=_;let z=s.hash;(z.directionalLength!==g||z.pointLength!==d||z.spotLength!==f||z.rectAreaLength!==w||z.hemiLength!==v||z.numDirectionalShadows!==R||z.numPointShadows!==E||z.numSpotShadows!==T||z.numSpotMaps!==A||z.numLightProbes!==M)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=w,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=T+A-V,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=M,z.directionalLength=g,z.pointLength=d,z.spotLength=f,z.rectAreaLength=w,z.hemiLength=v,z.numDirectionalShadows=R,z.numPointShadows=E,z.numSpotShadows=T,z.numSpotMaps=A,z.numLightProbes=M,s.version=Gg++)}function c(h,u){let p=0,m=0,_=0,g=0,d=0,f=u.matrixWorldInverse;for(let w=0,v=h.length;w<v;w++){let R=h[w];if(R.isDirectionalLight){let E=s.directional[p];E.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),p++}else if(R.isSpotLight){let E=s.spot[_];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),_++}else if(R.isRectAreaLight){let E=s.rectArea[g];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(R.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){let E=s.point[m];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(f),m++}else if(R.isHemisphereLight){let E=s.hemi[d];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(f),d++}}}return{setup:l,setupView:c,state:s}}function Pc(n,t){let e=new Xg(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qg(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Pc(n,t),e.set(r,[l])):o>=a.length?(l=new Pc(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var mo=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},go=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function Zg(n,t,e){let i=new Fr,s=new Wt,r=new Wt,o=new Se,a=new mo({depthPacking:zu}),l=new go,c={},h=e.maxTextureSize,u={[ni]:ze,[ze]:ni,[Ln]:Ln},p=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Yg,fragmentShader:$g}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let _=new Si;_.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Be(_,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let f=this.type;this.render=function(T,A,V){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Qn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let nt=f!==Pn&&this.type===Pn,P=f===Pn&&this.type!==Pn;for(let F=0,H=T.length;F<H;F++){let q=T[F],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let G=W.getFrameExtents();if(s.multiply(G),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,W.mapSize.y=r.y)),W.map===null||nt===!0||P===!0){let Q=this.type!==Pn?{minFilter:Ie,magFilter:Ie}:{};W.map!==null&&W.map.dispose(),W.map=new Nn(s.x,s.y,Q),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let J=W.getViewportCount();for(let Q=0;Q<J;Q++){let lt=W.getViewport(Q);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),X.viewport(o),W.updateMatrices(q,Q),i=W.getFrustum(),R(A,V,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Pn&&w(W,V),W.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(M,S,z)};function w(T,A){let V=t.update(g);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Nn(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,V,p,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,V,m,g,null)}function v(T,A,V,M){let S=null,z=V.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)S=z;else if(S=V.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let X=S.uuid,nt=A.uuid,P=c[X];P===void 0&&(P={},c[X]=P);let F=P[nt];F===void 0&&(F=S.clone(),P[nt]=F,A.addEventListener("dispose",E)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Pn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let X=n.properties.get(S);X.light=V}return S}function R(T,A,V,M,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Pn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld);let nt=t.update(T),P=T.material;if(Array.isArray(P)){let F=nt.groups;for(let H=0,q=F.length;H<q;H++){let W=F[H],G=P[W.materialIndex];if(G&&G.visible){let J=v(T,G,M,S);T.onBeforeShadow(n,T,A,V,nt,J,W),n.renderBufferDirect(V,null,nt,J,T,W),T.onAfterShadow(n,T,A,V,nt,J,W)}}}else if(P.visible){let F=v(T,P,M,S);T.onBeforeShadow(n,T,A,V,nt,F,null),n.renderBufferDirect(V,null,nt,F,T,null),T.onAfterShadow(n,T,A,V,nt,F,null)}}let X=T.children;for(let nt=0,P=X.length;nt<P;nt++)R(X[nt],A,V,M,S)}function E(T){T.target.removeEventListener("dispose",E);for(let V in c){let M=c[V],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Jg(n,t,e){let i=e.isWebGL2;function s(){let C=!1,it=new Se,st=null,Et=new Se(0,0,0,0);return{setMask:function(yt){st!==yt&&!C&&(n.colorMask(yt,yt,yt,yt),st=yt)},setLocked:function(yt){C=yt},setClear:function(yt,jt,Qt,ve,Re){Re===!0&&(yt*=ve,jt*=ve,Qt*=ve),it.set(yt,jt,Qt,ve),Et.equals(it)===!1&&(n.clearColor(yt,jt,Qt,ve),Et.copy(it))},reset:function(){C=!1,st=null,Et.set(-1,0,0,0)}}}function r(){let C=!1,it=null,st=null,Et=null;return{setTest:function(yt){yt?It(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(yt){it!==yt&&!C&&(n.depthMask(yt),it=yt)},setFunc:function(yt){if(st!==yt){switch(yt){case pu:n.depthFunc(n.NEVER);break;case mu:n.depthFunc(n.ALWAYS);break;case gu:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case _u:n.depthFunc(n.EQUAL);break;case xu:n.depthFunc(n.GEQUAL);break;case vu:n.depthFunc(n.GREATER);break;case yu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}st=yt}},setLocked:function(yt){C=yt},setClear:function(yt){Et!==yt&&(n.clearDepth(yt),Et=yt)},reset:function(){C=!1,it=null,st=null,Et=null}}}function o(){let C=!1,it=null,st=null,Et=null,yt=null,jt=null,Qt=null,ve=null,Re=null;return{setTest:function(te){C||(te?It(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(te){it!==te&&!C&&(n.stencilMask(te),it=te)},setFunc:function(te,Ce,dn){(st!==te||Et!==Ce||yt!==dn)&&(n.stencilFunc(te,Ce,dn),st=te,Et=Ce,yt=dn)},setOp:function(te,Ce,dn){(jt!==te||Qt!==Ce||ve!==dn)&&(n.stencilOp(te,Ce,dn),jt=te,Qt=Ce,ve=dn)},setLocked:function(te){C=te},setClear:function(te){Re!==te&&(n.clearStencil(te),Re=te)},reset:function(){C=!1,it=null,st=null,Et=null,yt=null,jt=null,Qt=null,ve=null,Re=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,p={},m={},_=new WeakMap,g=[],d=null,f=!1,w=null,v=null,R=null,E=null,T=null,A=null,V=null,M=new Xt(0,0,0),S=0,z=!1,X=null,nt=null,P=null,F=null,H=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,G=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=G>=2);let Q=null,lt={},k=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),at=new Se().fromArray(k),_t=new Se().fromArray(Y);function gt(C,it,st,Et){let yt=new Uint8Array(4),jt=n.createTexture();n.bindTexture(C,jt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qt=0;Qt<st;Qt++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(it,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(it+Qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return jt}let Pt={};Pt[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),Pt[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pt[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pt[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),It(n.DEPTH_TEST),l.setFunc(yr),Nt(!1),b(cl),It(n.CULL_FACE),dt(Qn);function It(C){p[C]!==!0&&(n.enable(C),p[C]=!0)}function wt(C){p[C]!==!1&&(n.disable(C),p[C]=!1)}function Gt(C,it){return m[C]!==it?(n.bindFramebuffer(C,it),m[C]=it,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=it),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=it)),!0):!1}function D(C,it){let st=g,Et=!1;if(C)if(st=_.get(it),st===void 0&&(st=[],_.set(it,st)),C.isWebGLMultipleRenderTargets){let yt=C.texture;if(st.length!==yt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let jt=0,Qt=yt.length;jt<Qt;jt++)st[jt]=n.COLOR_ATTACHMENT0+jt;st.length=yt.length,Et=!0}}else st[0]!==n.COLOR_ATTACHMENT0&&(st[0]=n.COLOR_ATTACHMENT0,Et=!0);else st[0]!==n.BACK&&(st[0]=n.BACK,Et=!0);Et&&(e.isWebGL2?n.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function Ae(C){return d!==C?(n.useProgram(C),d=C,!0):!1}let vt={[_i]:n.FUNC_ADD,[Qh]:n.FUNC_SUBTRACT,[tu]:n.FUNC_REVERSE_SUBTRACT};if(i)vt[fl]=n.MIN,vt[pl]=n.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(vt[fl]=C.MIN_EXT,vt[pl]=C.MAX_EXT)}let Rt={[eu]:n.ZERO,[nu]:n.ONE,[iu]:n.SRC_COLOR,[Za]:n.SRC_ALPHA,[cu]:n.SRC_ALPHA_SATURATE,[ou]:n.DST_COLOR,[ru]:n.DST_ALPHA,[su]:n.ONE_MINUS_SRC_COLOR,[Ja]:n.ONE_MINUS_SRC_ALPHA,[lu]:n.ONE_MINUS_DST_COLOR,[au]:n.ONE_MINUS_DST_ALPHA,[hu]:n.CONSTANT_COLOR,[uu]:n.ONE_MINUS_CONSTANT_COLOR,[du]:n.CONSTANT_ALPHA,[fu]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(C,it,st,Et,yt,jt,Qt,ve,Re,te){if(C===Qn){f===!0&&(wt(n.BLEND),f=!1);return}if(f===!1&&(It(n.BLEND),f=!0),C!==jh){if(C!==w||te!==z){if((v!==_i||T!==_i)&&(n.blendEquation(n.FUNC_ADD),v=_i,T=_i),te)switch(C){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hl:n.blendFunc(n.ONE,n.ONE);break;case ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,E=null,A=null,V=null,M.set(0,0,0),S=0,w=C,z=te}return}yt=yt||it,jt=jt||st,Qt=Qt||Et,(it!==v||yt!==T)&&(n.blendEquationSeparate(vt[it],vt[yt]),v=it,T=yt),(st!==R||Et!==E||jt!==A||Qt!==V)&&(n.blendFuncSeparate(Rt[st],Rt[Et],Rt[jt],Rt[Qt]),R=st,E=Et,A=jt,V=Qt),(ve.equals(M)===!1||Re!==S)&&(n.blendColor(ve.r,ve.g,ve.b,Re),M.copy(ve),S=Re),w=C,z=!1}function le(C,it){C.side===Ln?wt(n.CULL_FACE):It(n.CULL_FACE);let st=C.side===ze;it&&(st=!st),Nt(st),C.blending===ts&&C.transparent===!1?dt(Qn):dt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let Et=C.stencilWrite;c.setTest(Et),Et&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),N(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?It(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(C){X!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),X=C)}function b(C){C!==Zh?(It(n.CULL_FACE),C!==nt&&(C===cl?n.cullFace(n.BACK):C===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),nt=C}function x(C){C!==P&&(W&&n.lineWidth(C),P=C)}function N(C,it,st){C?(It(n.POLYGON_OFFSET_FILL),(F!==it||H!==st)&&(n.polygonOffset(it,st),F=it,H=st)):wt(n.POLYGON_OFFSET_FILL)}function K(C){C?It(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function Z(C){C===void 0&&(C=n.TEXTURE0+q-1),Q!==C&&(n.activeTexture(C),Q=C)}function j(C,it,st){st===void 0&&(Q===null?st=n.TEXTURE0+q-1:st=Q);let Et=lt[st];Et===void 0&&(Et={type:void 0,texture:void 0},lt[st]=Et),(Et.type!==C||Et.texture!==it)&&(Q!==st&&(n.activeTexture(st),Q=st),n.bindTexture(C,it||Pt[C]),Et.type=C,Et.texture=it)}function ft(){let C=lt[Q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function rt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(C){at.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),at.copy(C))}function Yt(C){_t.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),_t.copy(C))}function he(C,it){let st=u.get(it);st===void 0&&(st=new WeakMap,u.set(it,st));let Et=st.get(C);Et===void 0&&(Et=n.getUniformBlockIndex(it,C.name),st.set(C,Et))}function Bt(C,it){let Et=u.get(it).get(C);h.get(it)!==Et&&(n.uniformBlockBinding(it,Et,C.__bindingPointIndex),h.set(it,Et))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},Q=null,lt={},m={},_=new WeakMap,g=[],d=null,f=!1,w=null,v=null,R=null,E=null,T=null,A=null,V=null,M=new Xt(0,0,0),S=0,z=!1,X=null,nt=null,P=null,F=null,H=null,at.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:It,disable:wt,bindFramebuffer:Gt,drawBuffers:D,useProgram:Ae,setBlending:dt,setMaterial:le,setFlipSided:Nt,setCullFace:b,setLineWidth:x,setPolygonOffset:N,setScissorTest:K,activeTexture:Z,bindTexture:j,unbindTexture:ft,compressedTexImage2D:rt,compressedTexImage3D:ct,texImage2D:xt,texImage3D:ht,updateUBOMapping:he,uniformBlockBinding:Bt,texStorage2D:Ht,texStorage3D:At,texSubImage2D:St,texSubImage3D:Ot,compressedTexSubImage2D:$,compressedTexSubImage3D:$t,scissor:Dt,viewport:Yt,reset:tt}}function Kg(n,t,e,i,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return m?new OffscreenCanvas(b,x):Rr("canvas")}function g(b,x,N,K){let Z=1;if((b.width>K||b.height>K)&&(Z=K/Math.max(b.width,b.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let j=x?Ar:Math.floor,ft=j(Z*b.width),rt=j(Z*b.height);u===void 0&&(u=_(ft,rt));let ct=N?_(ft,rt):u;return ct.width=ft,ct.height=rt,ct.getContext("2d").drawImage(b,0,0,ft,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ft+"x"+rt+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function d(b){return no(b.width)&&no(b.height)}function f(b){return a?!1:b.wrapS!==nn||b.wrapT!==nn||b.minFilter!==Ie&&b.minFilter!==$e}function w(b,x){return b.generateMipmaps&&x&&b.minFilter!==Ie&&b.minFilter!==$e}function v(b){n.generateMipmap(b)}function R(b,x,N,K,Z=!1){if(a===!1)return x;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=x;if(x===n.RED&&(N===n.FLOAT&&(j=n.R32F),N===n.HALF_FLOAT&&(j=n.R16F),N===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.R8UI),N===n.UNSIGNED_SHORT&&(j=n.R16UI),N===n.UNSIGNED_INT&&(j=n.R32UI),N===n.BYTE&&(j=n.R8I),N===n.SHORT&&(j=n.R16I),N===n.INT&&(j=n.R32I)),x===n.RG&&(N===n.FLOAT&&(j=n.RG32F),N===n.HALF_FLOAT&&(j=n.RG16F),N===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RGBA){let ft=Z?Sr:Zt.getTransfer(K);N===n.FLOAT&&(j=n.RGBA32F),N===n.HALF_FLOAT&&(j=n.RGBA16F),N===n.UNSIGNED_BYTE&&(j=ft===ie?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(b,x,N){return w(b,N)===!0||b.isFramebufferTexture&&b.minFilter!==Ie&&b.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function T(b){return b===Ie||b===ml||b===ya?n.NEAREST:n.LINEAR}function A(b){let x=b.target;x.removeEventListener("dispose",A),M(x),x.isVideoTexture&&h.delete(x)}function V(b){let x=b.target;x.removeEventListener("dispose",V),z(x)}function M(b){let x=i.get(b);if(x.__webglInit===void 0)return;let N=b.source,K=p.get(N);if(K){let Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(b),Object.keys(K).length===0&&p.delete(N)}i.remove(b)}function S(b){let x=i.get(b);n.deleteTexture(x.__webglTexture);let N=b.source,K=p.get(N);delete K[x.__cacheKey],o.memory.textures--}function z(b){let x=b.texture,N=i.get(b),K=i.get(x);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(N.__webglFramebuffer[Z]))for(let j=0;j<N.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(N.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(N.__webglFramebuffer[Z]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[Z])}else{if(Array.isArray(N.__webglFramebuffer))for(let Z=0;Z<N.__webglFramebuffer.length;Z++)n.deleteFramebuffer(N.__webglFramebuffer[Z]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,j=x.length;Z<j;Z++){let ft=i.get(x[Z]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),o.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(b)}let X=0;function nt(){X=0}function P(){let b=X;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),X+=1,b}function F(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function H(b,x){let N=i.get(b);if(b.isVideoTexture&&le(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){let K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(N,b,x);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function q(b,x){let N=i.get(b);if(b.version>0&&N.__version!==b.version){at(N,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function W(b,x){let N=i.get(b);if(b.version>0&&N.__version!==b.version){at(N,b,x);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function G(b,x){let N=i.get(b);if(b.version>0&&N.__version!==b.version){_t(N,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}let J={[Qa]:n.REPEAT,[nn]:n.CLAMP_TO_EDGE,[to]:n.MIRRORED_REPEAT},Q={[Ie]:n.NEAREST,[ml]:n.NEAREST_MIPMAP_NEAREST,[ya]:n.NEAREST_MIPMAP_LINEAR,[$e]:n.LINEAR,[Cu]:n.LINEAR_MIPMAP_NEAREST,[Cs]:n.LINEAR_MIPMAP_LINEAR},lt={[Vu]:n.NEVER,[$u]:n.ALWAYS,[Gu]:n.LESS,[Gc]:n.LEQUAL,[Wu]:n.EQUAL,[Yu]:n.GEQUAL,[Xu]:n.GREATER,[qu]:n.NOTEQUAL};function k(b,x,N){if(N?(n.texParameteri(b,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,J[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Q[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Q[x.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==nn||x.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(x.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==Ie&&x.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ie||x.minFilter!==ya&&x.minFilter!==Cs||x.type===Kn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ps&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Y(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));let K=x.source,Z=p.get(K);Z===void 0&&(Z={},p.set(K,Z));let j=F(x);if(j!==b.__cacheKey){Z[j]===void 0&&(Z[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Z[j].usedTimes++;let ft=Z[b.__cacheKey];ft!==void 0&&(Z[b.__cacheKey].usedTimes--,ft.usedTimes===0&&S(x)),b.__cacheKey=j,b.__webglTexture=Z[j].texture}return N}function at(b,x,N){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);let Z=Y(b,x),j=x.source;e.bindTexture(K,b.__webglTexture,n.TEXTURE0+N);let ft=i.get(j);if(j.version!==ft.__version||Z===!0){e.activeTexture(n.TEXTURE0+N);let rt=Zt.getPrimaries(Zt.workingColorSpace),ct=x.colorSpace===Ze?null:Zt.getPrimaries(x.colorSpace),St=x.colorSpace===Ze||rt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Ot=f(x)&&d(x.image)===!1,$=g(x.image,Ot,!1,s.maxTextureSize);$=Nt(x,$);let $t=d($)||a,Ht=r.convert(x.format,x.colorSpace),At=r.convert(x.type),xt=R(x.internalFormat,Ht,At,x.colorSpace,x.isVideoTexture);k(K,x,$t);let ht,Dt=x.mipmaps,Yt=a&&x.isVideoTexture!==!0&&xt!==Hc,he=ft.__version===void 0||Z===!0,Bt=E(x,$,$t);if(x.isDepthTexture)xt=n.DEPTH_COMPONENT,a?x.type===Kn?xt=n.DEPTH_COMPONENT32F:x.type===Jn?xt=n.DEPTH_COMPONENT24:x.type===vi?xt=n.DEPTH24_STENCIL8:xt=n.DEPTH_COMPONENT16:x.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===yi&&xt===n.DEPTH_COMPONENT&&x.type!==Lo&&x.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Jn,At=r.convert(x.type)),x.format===rs&&xt===n.DEPTH_COMPONENT&&(xt=n.DEPTH_STENCIL,x.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=vi,At=r.convert(x.type))),he&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,xt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,xt,$.width,$.height,0,Ht,At,null));else if(x.isDataTexture)if(Dt.length>0&&$t){Yt&&he&&e.texStorage2D(n.TEXTURE_2D,Bt,xt,Dt[0].width,Dt[0].height);for(let tt=0,C=Dt.length;tt<C;tt++)ht=Dt[tt],Yt?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,Ht,At,ht.data):e.texImage2D(n.TEXTURE_2D,tt,xt,ht.width,ht.height,0,Ht,At,ht.data);x.generateMipmaps=!1}else Yt?(he&&e.texStorage2D(n.TEXTURE_2D,Bt,xt,$.width,$.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,Ht,At,$.data)):e.texImage2D(n.TEXTURE_2D,0,xt,$.width,$.height,0,Ht,At,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Yt&&he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,xt,Dt[0].width,Dt[0].height,$.depth);for(let tt=0,C=Dt.length;tt<C;tt++)ht=Dt[tt],x.format!==sn?Ht!==null?Yt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,$.depth,Ht,ht.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,xt,ht.width,ht.height,$.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,$.depth,Ht,At,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,xt,ht.width,ht.height,$.depth,0,Ht,At,ht.data)}else{Yt&&he&&e.texStorage2D(n.TEXTURE_2D,Bt,xt,Dt[0].width,Dt[0].height);for(let tt=0,C=Dt.length;tt<C;tt++)ht=Dt[tt],x.format!==sn?Ht!==null?Yt?e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,Ht,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,xt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,Ht,At,ht.data):e.texImage2D(n.TEXTURE_2D,tt,xt,ht.width,ht.height,0,Ht,At,ht.data)}else if(x.isDataArrayTexture)Yt?(he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,xt,$.width,$.height,$.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ht,At,$.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,$.width,$.height,$.depth,0,Ht,At,$.data);else if(x.isData3DTexture)Yt?(he&&e.texStorage3D(n.TEXTURE_3D,Bt,xt,$.width,$.height,$.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ht,At,$.data)):e.texImage3D(n.TEXTURE_3D,0,xt,$.width,$.height,$.depth,0,Ht,At,$.data);else if(x.isFramebufferTexture){if(he)if(Yt)e.texStorage2D(n.TEXTURE_2D,Bt,xt,$.width,$.height);else{let tt=$.width,C=$.height;for(let it=0;it<Bt;it++)e.texImage2D(n.TEXTURE_2D,it,xt,tt,C,0,Ht,At,null),tt>>=1,C>>=1}}else if(Dt.length>0&&$t){Yt&&he&&e.texStorage2D(n.TEXTURE_2D,Bt,xt,Dt[0].width,Dt[0].height);for(let tt=0,C=Dt.length;tt<C;tt++)ht=Dt[tt],Yt?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Ht,At,ht):e.texImage2D(n.TEXTURE_2D,tt,xt,Ht,At,ht);x.generateMipmaps=!1}else Yt?(he&&e.texStorage2D(n.TEXTURE_2D,Bt,xt,$.width,$.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ht,At,$)):e.texImage2D(n.TEXTURE_2D,0,xt,Ht,At,$);w(x,$t)&&v(K),ft.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function _t(b,x,N){if(x.image.length!==6)return;let K=Y(b,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);let j=i.get(Z);if(Z.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+N);let ft=Zt.getPrimaries(Zt.workingColorSpace),rt=x.colorSpace===Ze?null:Zt.getPrimaries(x.colorSpace),ct=x.colorSpace===Ze||ft===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let St=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,$=[];for(let tt=0;tt<6;tt++)!St&&!Ot?$[tt]=g(x.image[tt],!1,!0,s.maxCubemapSize):$[tt]=Ot?x.image[tt].image:x.image[tt],$[tt]=Nt(x,$[tt]);let $t=$[0],Ht=d($t)||a,At=r.convert(x.format,x.colorSpace),xt=r.convert(x.type),ht=R(x.internalFormat,At,xt,x.colorSpace),Dt=a&&x.isVideoTexture!==!0,Yt=j.__version===void 0||K===!0,he=E(x,$t,Ht);k(n.TEXTURE_CUBE_MAP,x,Ht);let Bt;if(St){Dt&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,he,ht,$t.width,$t.height);for(let tt=0;tt<6;tt++){Bt=$[tt].mipmaps;for(let C=0;C<Bt.length;C++){let it=Bt[C];x.format!==sn?At!==null?Dt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C,0,0,it.width,it.height,At,it.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C,ht,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C,0,0,it.width,it.height,At,xt,it.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C,ht,it.width,it.height,0,At,xt,it.data)}}}else{Bt=x.mipmaps,Dt&&Yt&&(Bt.length>0&&he++,e.texStorage2D(n.TEXTURE_CUBE_MAP,he,ht,$[0].width,$[0].height));for(let tt=0;tt<6;tt++)if(Ot){Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,$[tt].width,$[tt].height,At,xt,$[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ht,$[tt].width,$[tt].height,0,At,xt,$[tt].data);for(let C=0;C<Bt.length;C++){let st=Bt[C].image[tt].image;Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C+1,0,0,st.width,st.height,At,xt,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C+1,ht,st.width,st.height,0,At,xt,st.data)}}else{Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,At,xt,$[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ht,At,xt,$[tt]);for(let C=0;C<Bt.length;C++){let it=Bt[C];Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C+1,0,0,At,xt,it.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C+1,ht,At,xt,it.image[tt])}}}w(x,Ht)&&v(n.TEXTURE_CUBE_MAP),j.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function gt(b,x,N,K,Z,j){let ft=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ct=R(N.internalFormat,ft,rt,N.colorSpace);if(!i.get(x).__hasExternalTextures){let Ot=Math.max(1,x.width>>j),$=Math.max(1,x.height>>j);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,ct,Ot,$,x.depth,0,ft,rt,null):e.texImage2D(Z,j,ct,Ot,$,0,ft,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),dt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,i.get(N).__webglTexture,0,Rt(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,i.get(N).__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(b,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||dt(x)){let Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Kn?K=n.DEPTH_COMPONENT32F:Z.type===Jn&&(K=n.DEPTH_COMPONENT24));let j=Rt(x);dt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,K,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,K,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){let K=Rt(x);N&&dt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,x.width,x.height):dt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{let K=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<K.length;Z++){let j=K[Z],ft=r.convert(j.format,j.colorSpace),rt=r.convert(j.type),ct=R(j.internalFormat,ft,rt,j.colorSpace),St=Rt(x);N&&dt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,ct,x.width,x.height):dt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,ct,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ct,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let K=i.get(x.depthTexture).__webglTexture,Z=Rt(x);if(x.depthTexture.format===yi)dt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(x.depthTexture.format===rs)dt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(b){let x=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");It(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]=n.createRenderbuffer(),Pt(x.__webglDepthbuffer[K],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Pt(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(b,x,N){let K=i.get(b);x!==void 0&&gt(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&wt(b)}function D(b){let x=b.texture,N=i.get(b),K=i.get(x);b.addEventListener("dispose",V),b.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++);let Z=b.isWebGLCubeRenderTarget===!0,j=b.isWebGLMultipleRenderTargets===!0,ft=d(b)||a;if(Z){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ct=0;ct<x.mipmaps.length;ct++)N.__webglFramebuffer[rt][ct]=n.createFramebuffer()}else N.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(j)if(s.drawBuffers){let rt=b.texture;for(let ct=0,St=rt.length;ct<St;ct++){let Ot=i.get(rt[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&dt(b)===!1){let rt=j?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ct=0;ct<rt.length;ct++){let St=rt[ct];N.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ct]);let Ot=r.convert(St.format,St.colorSpace),$=r.convert(St.type),$t=R(St.internalFormat,Ot,$,St.colorSpace,b.isXRRenderTarget===!0),Ht=Rt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,$t,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,N.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),k(n.TEXTURE_CUBE_MAP,x,ft);for(let rt=0;rt<6;rt++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ct=0;ct<x.mipmaps.length;ct++)gt(N.__webglFramebuffer[rt][ct],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else gt(N.__webglFramebuffer[rt],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);w(x,ft)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){let rt=b.texture;for(let ct=0,St=rt.length;ct<St;ct++){let Ot=rt[ct],$=i.get(Ot);e.bindTexture(n.TEXTURE_2D,$.__webglTexture),k(n.TEXTURE_2D,Ot,ft),gt(N.__webglFramebuffer,b,Ot,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),w(Ot,ft)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?rt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,K.__webglTexture),k(rt,x,ft),a&&x.mipmaps&&x.mipmaps.length>0)for(let ct=0;ct<x.mipmaps.length;ct++)gt(N.__webglFramebuffer[ct],b,x,n.COLOR_ATTACHMENT0,rt,ct);else gt(N.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,rt,0);w(x,ft)&&v(rt),e.unbindTexture()}b.depthBuffer&&wt(b)}function Ae(b){let x=d(b)||a,N=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let K=0,Z=N.length;K<Z;K++){let j=N[K];if(w(j,x)){let ft=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,rt=i.get(j).__webglTexture;e.bindTexture(ft,rt),v(ft),e.unbindTexture()}}}function vt(b){if(a&&b.samples>0&&dt(b)===!1){let x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],N=b.width,K=b.height,Z=n.COLOR_BUFFER_BIT,j=[],ft=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=i.get(b),ct=b.isWebGLMultipleRenderTargets===!0;if(ct)for(let St=0;St<x.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let St=0;St<x.length;St++){j.push(n.COLOR_ATTACHMENT0+St),b.depthBuffer&&j.push(ft);let Ot=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(Ot===!1&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ct&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,rt.__webglColorRenderbuffer[St]),Ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ft]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ft])),ct){let $=i.get(x[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,N,K,0,0,N,K,Z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let St=0;St<x.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,rt.__webglColorRenderbuffer[St]);let Ot=i.get(x[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function Rt(b){return Math.min(s.maxSamples,b.samples)}function dt(b){let x=i.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(b){let x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Nt(b,x){let N=b.colorSpace,K=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===eo||N!==Un&&N!==Ze&&(Zt.getTransfer(N)===ie?a===!1?t.has("EXT_sRGB")===!0&&K===sn?(b.format=eo,b.minFilter=$e,b.generateMipmaps=!1):x=Cr.sRGBToLinear(x):(K!==sn||Z!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=P,this.resetTextureUnits=nt,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=Gt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=dt}function jg(n,t,e){let i=e.isWebGL2;function s(r,o=Ze){let a,l=Zt.getTransfer(o);if(r===ei)return n.UNSIGNED_BYTE;if(r===Oc)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Fc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Pu)return n.BYTE;if(r===Lu)return n.SHORT;if(r===Lo)return n.UNSIGNED_SHORT;if(r===Nc)return n.INT;if(r===Jn)return n.UNSIGNED_INT;if(r===Kn)return n.FLOAT;if(r===Ps)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Iu)return n.ALPHA;if(r===sn)return n.RGBA;if(r===Du)return n.LUMINANCE;if(r===Uu)return n.LUMINANCE_ALPHA;if(r===yi)return n.DEPTH_COMPONENT;if(r===rs)return n.DEPTH_STENCIL;if(r===eo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nu)return n.RED;if(r===Bc)return n.RED_INTEGER;if(r===Ou)return n.RG;if(r===zc)return n.RG_INTEGER;if(r===kc)return n.RGBA_INTEGER;if(r===Ma||r===ba||r===Sa||r===wa)if(l===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gl||r===_l||r===xl||r===vl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===gl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_l)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yl||r===Ml)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yl)return l===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ml)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bl||r===Sl||r===wl||r===El||r===Tl||r===Al||r===Rl||r===Cl||r===Pl||r===Ll||r===Il||r===Dl||r===Ul||r===Nl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===bl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===El)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Al)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ll)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Il)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ul)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nl)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ea||r===Ol||r===Fl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ea)return l===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ol)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fu||r===Bl||r===zl||r===kl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ea)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Bl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var _o=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jn=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qg={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let d=e.getJointPose(g,i),f=this._getHandJoint(c,g);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new jn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},xo=class extends ii{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,_=null,g=e.getContextAttributes(),d=null,f=null,w=[],v=[],R=new Wt,E=null,T=new Ue;T.layers.enable(1),T.viewport=new Se;let A=new Ue;A.layers.enable(2),A.viewport=new Se;let V=[T,A],M=new _o;M.layers.enable(1),M.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=w[k];return Y===void 0&&(Y=new Rs,w[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=w[k];return Y===void 0&&(Y=new Rs,w[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=w[k];return Y===void 0&&(Y=new Rs,w[k]=Y),Y.getHandSpace()};function X(k){let Y=v.indexOf(k.inputSource);if(Y===-1)return;let at=w[Y];at!==void 0&&(at.update(k.inputSource,k.frame,c||o),at.dispatchEvent({type:k.type,data:k.inputSource}))}function nt(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",P);for(let k=0;k<w.length;k++){let Y=v[k];Y!==null&&(v[k]=null,w[k].disconnect(Y))}S=null,z=null,t.setRenderTarget(d),m=null,p=null,u=null,s=null,f=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Y={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Nn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,at=null,_t=null;g.depth&&(_t=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=g.stencil?rs:yi,at=g.stencil?vi:Jn);let gt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(gt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),f=new Nn(p.textureWidth,p.textureHeight,{format:sn,type:ei,depthTexture:new zr(p.textureWidth,p.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let Pt=t.properties.get(f);Pt.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(k){for(let Y=0;Y<k.removed.length;Y++){let at=k.removed[Y],_t=v.indexOf(at);_t>=0&&(v[_t]=null,w[_t].disconnect(at))}for(let Y=0;Y<k.added.length;Y++){let at=k.added[Y],_t=v.indexOf(at);if(_t===-1){for(let Pt=0;Pt<w.length;Pt++)if(Pt>=v.length){v.push(at),_t=Pt;break}else if(v[Pt]===null){v[Pt]=at,_t=Pt;break}if(_t===-1)break}let gt=w[_t];gt&&gt.connect(at)}}let F=new I,H=new I;function q(k,Y,at){F.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(at.matrixWorld);let _t=F.distanceTo(H),gt=Y.projectionMatrix.elements,Pt=at.projectionMatrix.elements,It=gt[14]/(gt[10]-1),wt=gt[14]/(gt[10]+1),Gt=(gt[9]+1)/gt[5],D=(gt[9]-1)/gt[5],Ae=(gt[8]-1)/gt[0],vt=(Pt[8]+1)/Pt[0],Rt=It*Ae,dt=It*vt,le=_t/(-Ae+vt),Nt=le*-Ae;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Nt),k.translateZ(le),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let b=It+le,x=wt+le,N=Rt-Nt,K=dt+(_t-Nt),Z=Gt*wt/x*b,j=D*wt/x*b;k.projectionMatrix.makePerspective(N,K,Z,j,b,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;M.near=A.near=T.near=k.near,M.far=A.far=T.far=k.far,(S!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,z=M.far);let Y=k.parent,at=M.cameras;W(M,Y);for(let _t=0;_t<at.length;_t++)W(at[_t],Y);at.length===2?q(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),G(k,M,Y)};function G(k,Y,at){at===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(at.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ls*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let J=null;function Q(k,Y){if(h=Y.getViewerPose(c||o),_=Y,h!==null){let at=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let _t=!1;at.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let gt=0;gt<at.length;gt++){let Pt=at[gt],It=null;if(m!==null)It=m.getViewport(Pt);else{let Gt=u.getViewSubImage(p,Pt);It=Gt.viewport,gt===0&&(t.setRenderTargetTextures(f,Gt.colorTexture,p.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(f))}let wt=V[gt];wt===void 0&&(wt=new Ue,wt.layers.enable(gt),wt.viewport=new Se,V[gt]=wt),wt.matrix.fromArray(Pt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Pt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(M.matrix.copy(wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(wt)}}for(let at=0;at<w.length;at++){let _t=v[at],gt=w[at];_t!==null&&gt!==void 0&&gt.update(_t,Y,c||o)}J&&J(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}let lt=new $c;lt.setAnimationLoop(Q),this.setAnimationLoop=function(k){J=k},this.dispose=function(){}}};function t_(n,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,Yc(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,w,v,R){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,R)):f.isMeshMatcapMaterial?(r(d,f),_(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),g(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?l(d,f,w,v):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===ze&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===ze&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let w=t.get(f).envMap;if(w&&(d.envMap.value=w,d.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,w,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*w,d.scale.value=v*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),t.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,w){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function g(d,f){let w=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function e_(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,v){let R=v.program;i.uniformBlockBinding(w,R)}function c(w,v){let R=s[w.id];R===void 0&&(_(w),R=h(w),s[w.id]=R,w.addEventListener("dispose",d));let E=v.program;i.updateUBOMapping(w,E);let T=t.render.frame;r[w.id]!==T&&(p(w),r[w.id]=T)}function h(w){let v=u();w.__bindingPointIndex=v;let R=n.createBuffer(),E=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,R),R}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let v=s[w.id],R=w.uniforms,E=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=R.length;T<A;T++){let V=Array.isArray(R[T])?R[T]:[R[T]];for(let M=0,S=V.length;M<S;M++){let z=V[M];if(m(z,T,M,E)===!0){let X=z.__offset,nt=Array.isArray(z.value)?z.value:[z.value],P=0;for(let F=0;F<nt.length;F++){let H=nt[F],q=g(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,X+P,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,v,R,E){let T=w.value,A=v+"_"+R;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{let V=E[A];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return E[A]=T,!0}else if(V.equals(T)===!1)return V.copy(T),!0}return!1}function _(w){let v=w.uniforms,R=0,E=16;for(let A=0,V=v.length;A<V;A++){let M=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,z=M.length;S<z;S++){let X=M[S],nt=Array.isArray(X.value)?X.value:[X.value];for(let P=0,F=nt.length;P<F;P++){let H=nt[P],q=g(H),W=R%E;W!==0&&E-W<q.boundary&&(R+=E-W),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=R,R+=q.storage}}}let T=R%E;return T>0&&(R+=E-T),w.__size=R,w.__cache={},this}function g(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function d(w){let v=w.target;v.removeEventListener("dispose",d);let R=o.indexOf(v.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ns=class{constructor(t={}){let{canvas:e=cd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,d=null,f=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;let v=this,R=!1,E=0,T=0,A=null,V=-1,M=null,S=new Se,z=new Se,X=null,nt=new Xt(0),P=0,F=e.width,H=e.height,q=1,W=null,G=null,J=new Se(0,0,F,H),Q=new Se(0,0,F,H),lt=!1,k=new Fr,Y=!1,at=!1,_t=null,gt=new Jt,Pt=new Wt,It=new I,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Gt(){return A===null?q:1}let D=i;function Ae(y,L){for(let O=0;O<y.length;O++){let B=y[O],U=e.getContext(B,L);if(U!==null)return U}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",it,!1),D===null){let L=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&L.shift(),D=Ae(L,y),D===null)throw Ae(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let vt,Rt,dt,le,Nt,b,x,N,K,Z,j,ft,rt,ct,St,Ot,$,$t,Ht,At,xt,ht,Dt,Yt;function he(){vt=new ym(D),Rt=new pm(D,vt,t),vt.init(Rt),ht=new jg(D,vt,Rt),dt=new Jg(D,vt,Rt),le=new Sm(D),Nt=new Bg,b=new Kg(D,vt,dt,Nt,Rt,ht,le),x=new gm(v),N=new vm(v),K=new Pd(D,Rt),Dt=new dm(D,vt,K,Rt),Z=new Mm(D,K,le,Dt),j=new Am(D,Z,K,le),Ht=new Tm(D,Rt,b),Ot=new mm(Nt),ft=new Fg(v,x,N,vt,Rt,Dt,Ot),rt=new t_(v,Nt),ct=new kg,St=new qg(vt,Rt),$t=new um(v,x,N,dt,j,p,l),$=new Zg(v,j,Rt),Yt=new e_(D,le,Rt,dt),At=new fm(D,vt,le,Rt),xt=new bm(D,vt,le,Rt),le.programs=ft.programs,v.capabilities=Rt,v.extensions=vt,v.properties=Nt,v.renderLists=ct,v.shadowMap=$,v.state=dt,v.info=le}he();let Bt=new xo(v,D);this.xr=Bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(F,H,!1))},this.getSize=function(y){return y.set(F,H)},this.setSize=function(y,L,O=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=y,H=L,e.width=Math.floor(y*q),e.height=Math.floor(L*q),O===!0&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(F*q,H*q).floor()},this.setDrawingBufferSize=function(y,L,O){F=y,H=L,q=O,e.width=Math.floor(y*O),e.height=Math.floor(L*O),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(J)},this.setViewport=function(y,L,O,B){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,L,O,B),dt.viewport(S.copy(J).multiplyScalar(q).floor())},this.getScissor=function(y){return y.copy(Q)},this.setScissor=function(y,L,O,B){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,L,O,B),dt.scissor(z.copy(Q).multiplyScalar(q).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(y){dt.setScissorTest(lt=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){G=y},this.getClearColor=function(y){return y.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(y=!0,L=!0,O=!0){let B=0;if(y){let U=!1;if(A!==null){let ot=A.texture.format;U=ot===kc||ot===zc||ot===Bc}if(U){let ot=A.texture.type,pt=ot===ei||ot===Jn||ot===Lo||ot===vi||ot===Oc||ot===Fc,Mt=$t.getClearColor(),Tt=$t.getClearAlpha(),Ft=Mt.r,Ct=Mt.g,Lt=Mt.b;pt?(m[0]=Ft,m[1]=Ct,m[2]=Lt,m[3]=Tt,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ft,_[1]=Ct,_[2]=Lt,_[3]=Tt,D.clearBufferiv(D.COLOR,0,_))}else B|=D.COLOR_BUFFER_BIT}L&&(B|=D.DEPTH_BUFFER_BIT),O&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ct.dispose(),St.dispose(),Nt.dispose(),x.dispose(),N.dispose(),j.dispose(),Dt.dispose(),Yt.dispose(),ft.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Re),Bt.removeEventListener("sessionend",te),_t&&(_t.dispose(),_t=null),Ce.stop()};function tt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=le.autoReset,L=$.enabled,O=$.autoUpdate,B=$.needsUpdate,U=$.type;he(),le.autoReset=y,$.enabled=L,$.autoUpdate=O,$.needsUpdate=B,$.type=U}function it(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function st(y){let L=y.target;L.removeEventListener("dispose",st),Et(L)}function Et(y){yt(y),Nt.remove(y)}function yt(y){let L=Nt.get(y).programs;L!==void 0&&(L.forEach(function(O){ft.releaseProgram(O)}),y.isShaderMaterial&&ft.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,O,B,U,ot){L===null&&(L=wt);let pt=U.isMesh&&U.matrixWorld.determinant()<0,Mt=Xh(y,L,O,B,U);dt.setMaterial(B,pt);let Tt=O.index,Ft=1;if(B.wireframe===!0){if(Tt=Z.getWireframeAttribute(O),Tt===void 0)return;Ft=2}let Ct=O.drawRange,Lt=O.attributes.position,de=Ct.start*Ft,ke=(Ct.start+Ct.count)*Ft;ot!==null&&(de=Math.max(de,ot.start*Ft),ke=Math.min(ke,(ot.start+ot.count)*Ft)),Tt!==null?(de=Math.max(de,0),ke=Math.min(ke,Tt.count)):Lt!=null&&(de=Math.max(de,0),ke=Math.min(ke,Lt.count));let ye=ke-de;if(ye<0||ye===1/0)return;Dt.setup(U,B,Mt,O,Tt);let wn,ce=At;if(Tt!==null&&(wn=K.get(Tt),ce=xt,ce.setIndex(wn)),U.isMesh)B.wireframe===!0?(dt.setLineWidth(B.wireframeLinewidth*Gt()),ce.setMode(D.LINES)):ce.setMode(D.TRIANGLES);else if(U.isLine){let zt=B.linewidth;zt===void 0&&(zt=1),dt.setLineWidth(zt*Gt()),U.isLineSegments?ce.setMode(D.LINES):U.isLineLoop?ce.setMode(D.LINE_LOOP):ce.setMode(D.LINE_STRIP)}else U.isPoints?ce.setMode(D.POINTS):U.isSprite&&ce.setMode(D.TRIANGLES);if(U.isBatchedMesh)ce.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)ce.renderInstances(de,ye,U.count);else if(O.isInstancedBufferGeometry){let zt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ga=Math.min(O.instanceCount,zt);ce.renderInstances(de,ye,ga)}else ce.render(de,ye)};function jt(y,L,O){y.transparent===!0&&y.side===Ln&&y.forceSinglePass===!1?(y.side=ze,y.needsUpdate=!0,Js(y,L,O),y.side=ni,y.needsUpdate=!0,Js(y,L,O),y.side=Ln):Js(y,L,O)}this.compile=function(y,L,O=null){O===null&&(O=y),d=St.get(O),d.init(),w.push(d),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),y!==O&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(v._useLegacyLights);let B=new Set;return y.traverse(function(U){let ot=U.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){let Mt=ot[pt];jt(Mt,O,U),B.add(Mt)}else jt(ot,O,U),B.add(ot)}),w.pop(),d=null,B},this.compileAsync=function(y,L,O=null){let B=this.compile(y,L,O);return new Promise(U=>{function ot(){if(B.forEach(function(pt){Nt.get(pt).currentProgram.isReady()&&B.delete(pt)}),B.size===0){U(y);return}setTimeout(ot,10)}vt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Qt=null;function ve(y){Qt&&Qt(y)}function Re(){Ce.stop()}function te(){Ce.start()}let Ce=new $c;Ce.setAnimationLoop(ve),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(y){Qt=y,Bt.setAnimationLoop(y),y===null?Ce.stop():Ce.start()},Bt.addEventListener("sessionstart",Re),Bt.addEventListener("sessionend",te),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(L),L=Bt.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,L,A),d=St.get(y,w.length),d.init(),w.push(d),gt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),k.setFromProjectionMatrix(gt),at=this.localClippingEnabled,Y=Ot.init(this.clippingPlanes,at),g=ct.get(y,f.length),g.init(),f.push(g),dn(y,L,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,G),this.info.render.frame++,Y===!0&&Ot.beginShadows();let O=d.state.shadowsArray;if($.render(O,y,L),Y===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(g,y),d.setupLights(v._useLegacyLights),L.isArrayCamera){let B=L.cameras;for(let U=0,ot=B.length;U<ot;U++){let pt=B[U];il(g,y,pt,pt.viewport)}}else il(g,y,L);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(v,y,L),Dt.resetDefaultState(),V=-1,M=null,w.pop(),w.length>0?d=w[w.length-1]:d=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function dn(y,L,O,B){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||k.intersectsSprite(y)){B&&It.setFromMatrixPosition(y.matrixWorld).applyMatrix4(gt);let pt=j.update(y),Mt=y.material;Mt.visible&&g.push(y,pt,Mt,O,It.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||k.intersectsObject(y))){let pt=j.update(y),Mt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),It.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),It.copy(pt.boundingSphere.center)),It.applyMatrix4(y.matrixWorld).applyMatrix4(gt)),Array.isArray(Mt)){let Tt=pt.groups;for(let Ft=0,Ct=Tt.length;Ft<Ct;Ft++){let Lt=Tt[Ft],de=Mt[Lt.materialIndex];de&&de.visible&&g.push(y,pt,de,O,It.z,Lt)}}else Mt.visible&&g.push(y,pt,Mt,O,It.z,null)}}let ot=y.children;for(let pt=0,Mt=ot.length;pt<Mt;pt++)dn(ot[pt],L,O,B)}function il(y,L,O,B){let U=y.opaque,ot=y.transmissive,pt=y.transparent;d.setupLightsView(O),Y===!0&&Ot.setGlobalState(v.clippingPlanes,O),ot.length>0&&Wh(U,ot,L,O),B&&dt.viewport(S.copy(B)),U.length>0&&Zs(U,L,O),ot.length>0&&Zs(ot,L,O),pt.length>0&&Zs(pt,L,O),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Wh(y,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ot=Rt.isWebGL2;_t===null&&(_t=new Nn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?Ps:ei,minFilter:Cs,samples:ot?4:0})),v.getDrawingBufferSize(Pt),ot?_t.setSize(Pt.x,Pt.y):_t.setSize(Ar(Pt.x),Ar(Pt.y));let pt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(nt),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Mt=v.toneMapping;v.toneMapping=ti,Zs(y,O,B),b.updateMultisampleRenderTarget(_t),b.updateRenderTargetMipmap(_t);let Tt=!1;for(let Ft=0,Ct=L.length;Ft<Ct;Ft++){let Lt=L[Ft],de=Lt.object,ke=Lt.geometry,ye=Lt.material,wn=Lt.group;if(ye.side===Ln&&de.layers.test(B.layers)){let ce=ye.side;ye.side=ze,ye.needsUpdate=!0,sl(de,O,B,ke,ye,wn),ye.side=ce,ye.needsUpdate=!0,Tt=!0}}Tt===!0&&(b.updateMultisampleRenderTarget(_t),b.updateRenderTargetMipmap(_t)),v.setRenderTarget(pt),v.setClearColor(nt,P),v.toneMapping=Mt}function Zs(y,L,O){let B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ot=y.length;U<ot;U++){let pt=y[U],Mt=pt.object,Tt=pt.geometry,Ft=B===null?pt.material:B,Ct=pt.group;Mt.layers.test(O.layers)&&sl(Mt,L,O,Tt,Ft,Ct)}}function sl(y,L,O,B,U,ot){y.onBeforeRender(v,L,O,B,U,ot),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,L,O,B,y,ot),U.transparent===!0&&U.side===Ln&&U.forceSinglePass===!1?(U.side=ze,U.needsUpdate=!0,v.renderBufferDirect(O,L,B,U,y,ot),U.side=ni,U.needsUpdate=!0,v.renderBufferDirect(O,L,B,U,y,ot),U.side=Ln):v.renderBufferDirect(O,L,B,U,y,ot),y.onAfterRender(v,L,O,B,U,ot)}function Js(y,L,O){L.isScene!==!0&&(L=wt);let B=Nt.get(y),U=d.state.lights,ot=d.state.shadowsArray,pt=U.state.version,Mt=ft.getParameters(y,U.state,ot,L,O),Tt=ft.getProgramCacheKey(Mt),Ft=B.programs;B.environment=y.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(y.isMeshStandardMaterial?N:x).get(y.envMap||B.environment),Ft===void 0&&(y.addEventListener("dispose",st),Ft=new Map,B.programs=Ft);let Ct=Ft.get(Tt);if(Ct!==void 0){if(B.currentProgram===Ct&&B.lightsStateVersion===pt)return al(y,Mt),Ct}else Mt.uniforms=ft.getUniforms(y),y.onBuild(O,Mt,v),y.onBeforeCompile(Mt,v),Ct=ft.acquireProgram(Mt,Tt),Ft.set(Tt,Ct),B.uniforms=Mt.uniforms;let Lt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=Ot.uniform),al(y,Mt),B.needsLights=Yh(y),B.lightsStateVersion=pt,B.needsLights&&(Lt.ambientLightColor.value=U.state.ambient,Lt.lightProbe.value=U.state.probe,Lt.directionalLights.value=U.state.directional,Lt.directionalLightShadows.value=U.state.directionalShadow,Lt.spotLights.value=U.state.spot,Lt.spotLightShadows.value=U.state.spotShadow,Lt.rectAreaLights.value=U.state.rectArea,Lt.ltc_1.value=U.state.rectAreaLTC1,Lt.ltc_2.value=U.state.rectAreaLTC2,Lt.pointLights.value=U.state.point,Lt.pointLightShadows.value=U.state.pointShadow,Lt.hemisphereLights.value=U.state.hemi,Lt.directionalShadowMap.value=U.state.directionalShadowMap,Lt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Lt.spotShadowMap.value=U.state.spotShadowMap,Lt.spotLightMatrix.value=U.state.spotLightMatrix,Lt.spotLightMap.value=U.state.spotLightMap,Lt.pointShadowMap.value=U.state.pointShadowMap,Lt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ct,B.uniformsList=null,Ct}function rl(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=ns.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function al(y,L){let O=Nt.get(y);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Xh(y,L,O,B,U){L.isScene!==!0&&(L=wt),b.resetTextureUnits();let ot=L.fog,pt=B.isMeshStandardMaterial?L.environment:null,Mt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Un,Tt=(B.isMeshStandardMaterial?N:x).get(B.envMap||pt),Ft=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Lt=!!O.morphAttributes.position,de=!!O.morphAttributes.normal,ke=!!O.morphAttributes.color,ye=ti;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ye=v.toneMapping);let wn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=wn!==void 0?wn.length:0,zt=Nt.get(B),ga=d.state.lights;if(Y===!0&&(at===!0||y!==M)){let qe=y===M&&B.id===V;Ot.setState(B,y,qe)}let ue=!1;B.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ga.state.version||zt.outputColorSpace!==Mt||U.isBatchedMesh&&zt.batching===!1||!U.isBatchedMesh&&zt.batching===!0||U.isInstancedMesh&&zt.instancing===!1||!U.isInstancedMesh&&zt.instancing===!0||U.isSkinnedMesh&&zt.skinning===!1||!U.isSkinnedMesh&&zt.skinning===!0||U.isInstancedMesh&&zt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&zt.instancingColor===!1&&U.instanceColor!==null||zt.envMap!==Tt||B.fog===!0&&zt.fog!==ot||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Ot.numPlanes||zt.numIntersection!==Ot.numIntersection)||zt.vertexAlphas!==Ft||zt.vertexTangents!==Ct||zt.morphTargets!==Lt||zt.morphNormals!==de||zt.morphColors!==ke||zt.toneMapping!==ye||Rt.isWebGL2===!0&&zt.morphTargetsCount!==ce)&&(ue=!0):(ue=!0,zt.__version=B.version);let hi=zt.currentProgram;ue===!0&&(hi=Js(B,L,U));let ol=!1,ys=!1,_a=!1,we=hi.getUniforms(),ui=zt.uniforms;if(dt.useProgram(hi.program)&&(ol=!0,ys=!0,_a=!0),B.id!==V&&(V=B.id,ys=!0),ol||M!==y){we.setValue(D,"projectionMatrix",y.projectionMatrix),we.setValue(D,"viewMatrix",y.matrixWorldInverse);let qe=we.map.cameraPosition;qe!==void 0&&qe.setValue(D,It.setFromMatrixPosition(y.matrixWorld)),Rt.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&we.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,ys=!0,_a=!0)}if(U.isSkinnedMesh){we.setOptional(D,U,"bindMatrix"),we.setOptional(D,U,"bindMatrixInverse");let qe=U.skeleton;qe&&(Rt.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),we.setValue(D,"boneTexture",qe.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(we.setOptional(D,U,"batchingTexture"),we.setValue(D,"batchingTexture",U._matricesTexture,b));let xa=O.morphAttributes;if((xa.position!==void 0||xa.normal!==void 0||xa.color!==void 0&&Rt.isWebGL2===!0)&&Ht.update(U,O,hi),(ys||zt.receiveShadow!==U.receiveShadow)&&(zt.receiveShadow=U.receiveShadow,we.setValue(D,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ui.envMap.value=Tt,ui.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),ys&&(we.setValue(D,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&qh(ui,_a),ot&&B.fog===!0&&rt.refreshFogUniforms(ui,ot),rt.refreshMaterialUniforms(ui,B,q,H,_t),ns.upload(D,rl(zt),ui,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ns.upload(D,rl(zt),ui,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&we.setValue(D,"center",U.center),we.setValue(D,"modelViewMatrix",U.modelViewMatrix),we.setValue(D,"normalMatrix",U.normalMatrix),we.setValue(D,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let qe=B.uniformsGroups;for(let va=0,$h=qe.length;va<$h;va++)if(Rt.isWebGL2){let ll=qe[va];Yt.update(ll,hi),Yt.bind(ll,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function qh(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Yh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,L,O){Nt.get(y.texture).__webglTexture=L,Nt.get(y.depthTexture).__webglTexture=O;let B=Nt.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,L){let O=Nt.get(y);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,O=0){A=y,E=L,T=O;let B=!0,U=null,ot=!1,pt=!1;if(y){let Tt=Nt.get(y);Tt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):Tt.__webglFramebuffer===void 0?b.setupRenderTarget(y):Tt.__hasExternalTextures&&b.rebindTextures(y,Nt.get(y.texture).__webglTexture,Nt.get(y.depthTexture).__webglTexture);let Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);let Ct=Nt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?U=Ct[L][O]:U=Ct[L],ot=!0):Rt.isWebGL2&&y.samples>0&&b.useMultisampledRTT(y)===!1?U=Nt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[O]:U=Ct,S.copy(y.viewport),z.copy(y.scissor),X=y.scissorTest}else S.copy(J).multiplyScalar(q).floor(),z.copy(Q).multiplyScalar(q).floor(),X=lt;if(dt.bindFramebuffer(D.FRAMEBUFFER,U)&&Rt.drawBuffers&&B&&dt.drawBuffers(y,U),dt.viewport(S),dt.scissor(z),dt.setScissorTest(X),ot){let Tt=Nt.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,Tt.__webglTexture,O)}else if(pt){let Tt=Nt.get(y.texture),Ft=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,O||0,Ft)}V=-1},this.readRenderTargetPixels=function(y,L,O,B,U,ot,pt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Nt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){dt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{let Tt=y.texture,Ft=Tt.format,Ct=Tt.type;if(Ft!==sn&&ht.convert(Ft)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Lt=Ct===Ps&&(vt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Ct!==ei&&ht.convert(Ct)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ct===Kn&&(Rt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-B&&O>=0&&O<=y.height-U&&D.readPixels(L,O,B,U,ht.convert(Ft),ht.convert(Ct),ot)}finally{let Tt=A!==null?Nt.get(A).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(y,L,O=0){let B=Math.pow(2,-O),U=Math.floor(L.image.width*B),ot=Math.floor(L.image.height*B);b.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,y.x,y.y,U,ot),dt.unbindTexture()},this.copyTextureToTexture=function(y,L,O,B=0){let U=L.image.width,ot=L.image.height,pt=ht.convert(O.format),Mt=ht.convert(O.type);b.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,y.x,y.y,U,ot,pt,Mt,L.image.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,y.x,y.y,L.mipmaps[0].width,L.mipmaps[0].height,pt,L.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,B,y.x,y.y,pt,Mt,L.image),B===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(y,L,O,B,U=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ot=y.max.x-y.min.x+1,pt=y.max.y-y.min.y+1,Mt=y.max.z-y.min.z+1,Tt=ht.convert(B.format),Ft=ht.convert(B.type),Ct;if(B.isData3DTexture)b.setTexture3D(B,0),Ct=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)b.setTexture2DArray(B,0),Ct=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Lt=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ke=D.getParameter(D.UNPACK_SKIP_PIXELS),ye=D.getParameter(D.UNPACK_SKIP_ROWS),wn=D.getParameter(D.UNPACK_SKIP_IMAGES),ce=O.isCompressedTexture?O.mipmaps[U]:O.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,y.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,y.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,y.min.z),O.isDataTexture||O.isData3DTexture?D.texSubImage3D(Ct,U,L.x,L.y,L.z,ot,pt,Mt,Tt,Ft,ce.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ct,U,L.x,L.y,L.z,ot,pt,Mt,Tt,ce.data)):D.texSubImage3D(Ct,U,L.x,L.y,L.z,ot,pt,Mt,Tt,Ft,ce),D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wn),U===0&&B.generateMipmaps&&D.generateMipmap(Ct),dt.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),dt.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,dt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Io?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?Mi:Vc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Mi?be:Un}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},vo=class extends Ns{};vo.prototype.isWebGL1Renderer=!0;var kr=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};function vr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function n_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ls=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yo=class extends ls{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vl:r=t,a=2*e-i;break;case Gl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:o=t,l=2*i-e;break;case Gl:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,_=(i-e)/(s-e),g=_*_,d=g*_,f=-p*d+2*p*g-p*_,w=(1+p)*d+(-1.5-2*p)*g+(-.5+p)*_+1,v=(-1-m)*d+(1.5+m)*g+.5*_,R=m*d-m*g;for(let E=0;E!==a;++E)r[E]=f*o[h+E]+w*o[c+E]+v*o[l+E]+R*o[u+E];return r}},Mo=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},bo=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vr(e,this.TimeBufferType),this.values=vr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:vr(t.times,Array),values:vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case br:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&n_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,p=u-i,m=u+i;for(let _=0;_!==i;++_){let g=e[u+_];if(g!==e[p+_]||g!==e[m+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,p=o*i;for(let m=0;m!==i;++m)e[p+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=br;var wi=class extends an{};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Mr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends an{};So.prototype.ValueTypeName="color";var wo=class extends an{};wo.prototype.ValueTypeName="number";var Eo=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ne.slerpFlat(r,0,o,c-a,o,c,l);return r}},Os=class extends an{InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.DefaultInterpolation=br;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends an{};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Mr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends an{};To.prototype.ValueTypeName="vector";var Ao=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},i_=new Ao,Ro=class{constructor(t){this.manager=t!==void 0?t:i_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var No="\\[\\]\\.:\\/",s_=new RegExp("["+No+"]","g"),Oo="[^"+No+"]",r_="[^"+No.replace("\\.","")+"]",a_=/((?:WC+[\/:])*)/.source.replace("WC",Oo),o_=/(WCOD+)?/.source.replace("WCOD",r_),l_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oo),c_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oo),h_=new RegExp("^"+a_+o_+l_+c_+"$"),u_=["material","materials","bones","map"],Co=class{constructor(t,e,i){let s=i||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},re=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(s_,"")}static parseTrackName(t){let e=h_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);u_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=Co;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s0=new Float32Array(1);var Fs=class{constructor(t,e,i=0,s=1/0){this.ray=new Ir(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Po(t,this,i,e),i.sort(Lc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Po(t[s],this,i,e);return i.sort(Lc),i}};function Lc(n,t){return n.distance-t.distance}function Po(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Po(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var d_=4096,Wr={width:1200,height:800},us=160;function f_(n,t=d_){return n.map(({width:e,height:i,kind:s="window",slot:r=0})=>{let o=Math.ceil(e)+us*2,a=Math.ceil(i)+us*2,l=s==="window"?r%3*1360:0,c=s==="dock"?800:s==="keyboard"?3160:1200+Math.floor(r/3)*980,h=s==="dock"?400:s==="keyboard"?936:980;if(r>5||o>(s==="window"?1360:t)||a>h||l+o>t||c+a>t)throw new Error("Workspace texture is full; close a window first.");return[l,c,o,a]})}var Xr=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.lastError="",this.slots=new Map}setSize(){}render(t){var h;t.updateMatrixWorld(!0);let e=[];t.traverse(u=>{u.isCSS3DObject&&u.visible&&e.push(u)});for(let u of e)u.element.parentNode!==this.domElement&&this.domElement.append(u.element),u.element.style.transform="none";for(let u of this.slots.keys())e.some(p=>p.id===u)||this.slots.delete(u);let i=e.map(u=>{let p=u.element.classList.contains("dock")?"dock":u.element.classList.contains("kb")?"keyboard":"window";if(p==="window"&&!this.slots.has(u.id)){let m=new Set(this.slots.values()),_=0;for(;m.has(_);)_++;this.slots.set(u.id,_)}return{width:u.element.offsetWidth,height:u.element.offsetHeight,kind:p,slot:this.slots.get(u.id)||0}}),s;try{s=f_(i)}catch(u){this.lastError!==u.message&&(this.lastError=u.message,(h=window.nextvrMessage)==null||h.call(window,u.message));return}let r=[],o=[];e.forEach((u,p)=>{let m=u.element,[_,g,d,f]=s[p];m.style.left=`${_+us}px`,m.style.top=`${g+us}px`;let w=u.matrixWorld.clone().multiply(new Jt().makeScale(d,f,1));r.push({matrix:w.toArray(),rect:s[p],glass:[us/d,us/f,i[p].width/d,i[p].height/f]});let v=m.getBoundingClientRect();for(let R of m.querySelectorAll("[data-native-browser]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T=R.dataset.nativeBrowser,A=R.dataset.url;if(!A)continue;let V=Math.round(E.width),M=Math.round(E.height),S={left:E.left,top:E.top,right:E.right,bottom:E.bottom};for(let P=R.parentElement;P&&P!==m;P=P.parentElement){let F=getComputedStyle(P);if(/(auto|scroll|hidden)/.test(F.overflow+F.overflowY)){let H=P.getBoundingClientRect();S.left=Math.max(S.left,H.left),S.top=Math.max(S.top,H.top),S.right=Math.min(S.right,H.right),S.bottom=Math.min(S.bottom,H.bottom)}}o.push({id:T,url:A,width:V,height:M});let z=S.right-S.left,X=S.bottom-S.top;if(z<=0||X<=0)continue;let nt=u.matrixWorld.clone().multiply(new Jt().makeTranslation(S.left-v.left+z/2-i[p].width/2,i[p].height/2-(S.top-v.top+X/2),.5)).multiply(new Jt().makeScale(z,X,1));r.push({browser:T,matrix:nt.toArray(),rect:[0,0,V,M],uv:[(S.left-E.left)/V,(E.bottom-S.bottom)/M,z/V,X/M]})}});let a=2*Math.tan(Wc.degToRad(36)),l=new Jt().makeTranslation(0,0,-1).multiply(new Jt().makeScale(a*1.5,a,1));r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,Wr.width,Wr.height]});let c=performance.now();c-this.last>=({low:66,auto:30,high:16}[document.documentElement.dataset.quality]||30)&&(this.last=c,window.NativeXR.frame(JSON.stringify(r),JSON.stringify(o)))}};var th=new I,p_=new Ne,eh=new I,ds=class extends Ge{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var pn=new Jt,m_=new Jt,qr=class{constructor(t={}){let e=this,i,s,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:i,height:s}},this.render=function(g,d){let f=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(i/d.view.width)}px, ${-d.view.offsetY*(s/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let w,v;d.isOrthographicCamera&&(w=-(d.right+d.left)/2,v=(d.top+d.bottom)/2);let R=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,E=d.isOrthographicCamera?`scale( ${R} )scale(`+f+")translate("+u(w)+"px,"+u(v)+"px)"+p(d.matrixWorldInverse):`scale( ${R} )translateZ(`+f+"px)"+p(d.matrixWorldInverse),A=(d.isPerspectiveCamera?"perspective("+f+"px) ":"")+E+"translate("+r+"px,"+o+"px)";a.camera.style!==A&&(h.style.transform=A,a.camera.style=A),_(g,g,d,E)},this.setSize=function(g,d){i=g,s=d,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=d+"px",c.style.width=g+"px",c.style.height=d+"px",h.style.width=g+"px",h.style.height=d+"px"};function u(g){return Math.abs(g)<1e-10?0:g}function p(g){let d=g.elements;return"matrix3d("+u(d[0])+","+u(-d[1])+","+u(d[2])+","+u(d[3])+","+u(d[4])+","+u(-d[5])+","+u(d[6])+","+u(d[7])+","+u(d[8])+","+u(-d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(-d[13])+","+u(d[14])+","+u(d[15])+")"}function m(g){let d=g.elements;return"translate(-50%,-50%)"+("matrix3d("+u(d[0])+","+u(d[1])+","+u(d[2])+","+u(d[3])+","+u(-d[4])+","+u(-d[5])+","+u(-d[6])+","+u(-d[7])+","+u(d[8])+","+u(d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(d[13])+","+u(d[14])+","+u(d[15])+")")}function _(g,d,f,w){if(g.isCSS3DObject){let v=g.visible===!0&&g.layers.test(f.layers)===!0;if(g.element.style.display=v===!0?"":"none",v===!0){g.onBeforeRender(e,d,f);let R;g.isCSS3DSprite?(pn.copy(f.matrixWorldInverse),pn.transpose(),g.rotation2D!==0&&pn.multiply(m_.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(th,p_,eh),pn.setPosition(th),pn.scale(eh),pn.elements[3]=0,pn.elements[7]=0,pn.elements[11]=0,pn.elements[15]=1,R=m(pn)):R=m(g.matrixWorld);let E=g.element,T=a.objects.get(g);if(T===void 0||T.style!==R){E.style.transform=R;let A={style:R};a.objects.set(g,A)}E.parentNode!==h&&h.appendChild(E),g.onAfterRender(e,d,f)}}for(let v=0,R=g.children.length;v<R;v++)_(g.children[v],d,f,w)}}};var qt=!!window.NativeXR,on=qt?Wr:{width:innerWidth,height:innerHeight},sh={lang:null,handsOn:!0,handSens:1,handDraw:1,pinchHold:2,winCurve:1,winScale:1,winDist:2.2,winTilt:1,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"studio",quality:"auto",showFps:0},ln={...sh};try{ln={...sh,...JSON.parse(localStorage.getItem("nextvr.v1")||"{}")}}catch{}var Vt=ln,ps=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(ln))}catch{}},nh={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",notif:"Notifications",noNotif:"No new notifications",profile:"Profile"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil"}},bt=n=>(nh[ln.lang]||nh.pt)[n]||n,Ho=n=>{ln.lang=n,ps(),oe("lang")},$r={},xe=(n,t)=>(($r[n]||($r[n]=[])).push(t),t),oe=(n,t)=>($r[n]||[]).forEach(e=>e(t));function ae(n){let t=document.getElementById("toast");t.textContent=n,t.classList.add("on"),clearTimeout(ae._t),ae._t=setTimeout(()=>t.classList.remove("on"),2400)}var zo=new kr,ee=new Ue(72,1,.05,120);ee.rotation.order="YXZ";var me=new jn;zo.add(me);var mn=1.55;ee.position.set(0,mn,0);var Bs=qt?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new Ns({antialias:!0,alpha:!0});qt||(Bs.setClearColor(0,0),document.getElementById("gl").appendChild(Bs.domElement));var Vo=qt?new Xr:new qr;document.getElementById("css3d").appendChild(Vo.domElement);if(qt){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let t of["overlay","hud","toast","boot"])n.append(document.getElementById(t))}function g_(){let n=ln.quality;return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.6)}function Jr(){document.documentElement.dataset.quality=ln.quality,qt||(on.width=innerWidth,on.height=innerHeight);let n=on.width,t=on.height;ee.aspect=n/t,ee.updateProjectionMatrix(),Bs.setPixelRatio(g_()),Bs.setSize(n,t),Vo.setSize(n,t),oe("resize")}addEventListener("resize",Jr);addEventListener("orientationchange",()=>setTimeout(Jr,120));Jr();xe("quality",Jr);var rh=()=>[{id:"passthrough",name:"Camera passthrough",top:2437700,bot:1119517}];function Go(){ln.env="passthrough",ps(),oe("env",ln.env)}var Oe={ok:!1,has:!1,q:new Ne,tmp:new Ne,e:new On},__=new Ne,x_=new Ne(-Math.SQRT1_2,0,0,Math.SQRT1_2),v_=new I(0,0,1),Zr=Math.PI/180;function y_(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*Zr}function M_(n){n.alpha!=null&&(Oe.has=!0,Oe.e.set(n.beta*Zr,n.alpha*Zr,-n.gamma*Zr,"YXZ"),Oe.tmp.setFromEuler(Oe.e),Oe.tmp.multiply(x_),Oe.tmp.multiply(__.setFromAxisAngle(v_,-y_())),Oe.q.copy(Oe.tmp))}async function zs(){if(qt)return Oe.ok=Oe.has=!0,oe("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(ae("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",M_,!0),Oe.ok=!0,setTimeout(()=>{Oe.has||ae("Sem girosc\xF3pio: arraste para olhar")},1200),oe("gyro",!0),!0)}catch{return ae("Girosc\xF3pio indispon\xEDvel"),!1}}var b_=()=>Oe.ok&&Oe.has,Ti=null,fs=0,ko=0;addEventListener("pointerdown",n=>{qt||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Ti={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Ti&&(fs-=(n.clientX-Ti.x)*.0032,ko=Math.max(-1.2,Math.min(1.2,ko-(n.clientY-Ti.y)*.0032)),Ti={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Ti=null);addEventListener("pointercancel",()=>Ti=null);function ks(){let n=new On().setFromQuaternion(ee.quaternion,"YXZ");me.rotation.y=n.y,me.position.set(0,0,0),oe("recenter"),ae(bt("centered"))}var ah=[],Hs=n=>ah.push(n),ih=performance.now(),Yr=0,Bo=0;function oh(n){let t=Math.min((n-ih)/1e3,.05);ih=n,qt||(b_()?(ee.quaternion.slerp(Oe.q,1-Math.exp(-t*18)),fs&&(ee.rotateY(fs),fs=0)):(ee.quaternion.setFromEuler(new On(ko,ee.rotation.y+fs,0,"YXZ")),fs=0)),ee.position.set(0,mn,0);for(let e of ah)e(t,n);if(Bs.render(zo,ee),Vo.render(zo,ee),Yr+=t,Bo++,Yr>=1){let e=document.getElementById("fps");e.textContent=ln.showFps?Math.round(Bo/Yr)+" fps":"",Yr=0,Bo=0}requestAnimationFrame(oh)}requestAnimationFrame(oh);Go(ln.env);if(qt){let n=new Jt,t=!0;window.nextvrPose=e=>{n.fromArray(e).invert(),ee.quaternion.setFromRotationMatrix(n),ee.position.set(0,mn,0),ee.updateMatrixWorld(!0),t&&(me.rotation.y=new On().setFromQuaternion(ee.quaternion,"YXZ").y,t=!1)},window.nextvrMessage=ae}var Ai=[],mt={x:.5,y:.5,active:!1,down:!1,hand:null},lh=Math.tan(36*Math.PI/180),S_=lh*1.5,Qr=!1,qo=-1/0,Kr=1,jr=1,Wo=null,ch=()=>Qr;async function gs(){return qt?(Qr=!0,window.NativeXR.hands(!0),oe("hands",!0),!0):(ae("PhoneXR hands require the Android camera pipeline."),!1)}function ms(){mt.down&&oe("pinchcancel",mt),mt.down=mt.active=!1,mt.hand=null}function ta(){ms(),Ai.length=0,Qr=!1,qo=-1/0,oe("phonehands",{hands:[],consumed:new Set,scaleX:Kr,scaleY:jr}),qt&&window.NativeXR.hands(!1),oe("hands",!1)}function Yo(n){return{x:.5+n[0]/(2*S_),y:.5-n[1]/(2*lh)}}qt&&(window.nextvrHands=(n,t=1,e=1)=>{if(!Qr)return;Kr=t,jr=e,qo=performance.now(),Ai.splice(0,Ai.length,...n.hands||[]);let i={hands:Ai,consumed:new Set,scaleX:Kr,scaleY:jr};if(oe("phonehands",i),i.blockFar){ms();return}let s=Ai.filter(l=>!i.consumed.has(l.id)),r=mt.down&&s.find(l=>{var c;return l.id===((c=mt.hand)==null?void 0:c.id)})||s.find(l=>l.pinching)||[...s].sort((l,c)=>c.palmWidth-l.palmWidth)[0];if(!r){ms();return}mt.hand&&mt.hand.id!==r.id&&ms();let o=mt.down,a=Yo(r.aim);mt.x=a.x,mt.y=a.y,mt.active=!0,mt.hand=r,mt.down=r.pinching,mt.down&&!o?oe("pinchdown",mt):!mt.down&&o&&oe("pinchup",mt)});var Xo=document.getElementById("overlay");Xo.getContext("2d").clearRect(0,0,Xo.width,Xo.height);Hs(()=>{var n,t;qt&&Wo!==!!Vt.handDraw&&(Wo=!!Vt.handDraw,(t=(n=window.NativeXR).handVisuals)==null||t.call(n,Wo)),Ai.length&&performance.now()-qo>500&&(Ai.length=0,ms(),oe("phonehands",{hands:[],consumed:new Set,scaleX:Kr,scaleY:jr}))});qt&&(window.nextvrTrigger=n=>{mt.hand&&ms(),mt.x=mt.y=.5,mt.hand=null,mt.active=!0,mt.down=n,oe(n?"pinchdown":"pinchup",mt),n||(mt.active=!1)});var cn=.00105,Kt=[],Ws=null,hn={y:mn-.6,z:-1.7,h:.12},$o=class{constructor({id:t,title:e,node:i,w:s=1040,h:r=660}){this.id=t,this.title=e,this.w=s,this.h=r,this.pinned=!0,this.target=new I,this.slot=0;let o=document.createElement("div");o.className="win-shell",o.style.width=s+"px";let a=document.createElement("div");a.className="win",a.style.width=s+"px",a.style.height=r+"px",a.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn" data-act="pin">\u21F1</button>
        <button class="win-btn close" data-act="close">\u2715</button>
      </div><div class="win-body"></div>`,a.querySelector(".win-title").textContent=e,a.querySelector(".win-body").appendChild(i),a.addEventListener("pointerdown",()=>yn(this),!0),a.querySelector(".win-bar").addEventListener("click",c=>{let h=c.target.closest("[data-act]");h&&(h.dataset.act==="close"?Ci(this):w_(this))});let l=document.createElement("div");l.className="win-handle",l.title="Arraste para soltar a janela",o.append(a,l),this.el=a,this.shell=o,this.handle=l,this.obj=new ds(o),this.obj.scale.setScalar(cn*Vt.winScale),me.add(this.obj),this.hit=hh(s*cn,r*cn,this),this.grab=hh(260*cn,90*cn,this),this.grab.userData.isHandle=!0,l.addEventListener("pointerdown",c=>{c.stopPropagation(),gh(this,c.clientX/on.width,c.clientY/on.height),l.setPointerCapture(c.pointerId)}),l.addEventListener("pointermove",c=>{xn.win===this&&Ko(c.clientX/on.width,c.clientY/on.height)}),l.addEventListener("pointerup",sa),l.addEventListener("pointercancel",sa)}apply(t){let e=this.obj,i=1-Math.exp(-t*(this.pinned?9:13));e.position.lerp(this.target,i);let s=Math.atan2(-e.position.x,-e.position.z)*Vt.winCurve,r=Math.hypot(e.position.x,e.position.z)||.001,o=Math.atan2(mn-e.position.y,r)*Vt.winTilt*-1;e.rotation.set(o,s,0,"YXZ"),e.scale.setScalar(cn*Vt.winScale),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(Vt.winScale);let a=(this.h/2+34)*cn*Vt.winScale;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-a),this.grab.scale.setScalar(Vt.winScale)}};function hh(n,t,e){let i=new Be(new Bn(n,t),new si({visible:!1}));return i.userData.win=e,me.add(i),i}function vn(){let n=Kt.filter(r=>r.pinned),t=n.length;if(!t)return;let e=Math.min(t,4),i=Math.min(.78,Math.max(.52,.5+t*.05)),s=-hn.z+.5+(Vt.winDist-2.2);n.forEach((r,o)=>{let a=Math.floor(o/e),l=o%e,c=Math.min(e,t-a*e),h=c===1?0:-((c-1)*i)/2+l*i,u=r.w*cn*Vt.winScale,p=r.h*cn*Vt.winScale,m=s+a*.55,_=hn.y+hn.h/2+.14+p/2+a*(p+.16);r.target.set(Math.sin(h)*m,_,-Math.cos(h)*m)})}xe("recenter",vn);xe("resize",vn);function Hn(n){let t=Kt.find(i=>i.id===n.id);if(t)return yn(t),t;if(qt&&Kt.length>=6)return ae("Close a window before opening another (6 window limit)."),null;let e=new $o(n);return e.obj.position.set(0,hn.y,hn.z),Kt.push(e),vn(),yn(e),oe("wins",Kt),e}function Ci(n){if(!n)return;let t=Kt.indexOf(n);t<0||(Kt.splice(t,1),me.remove(n.obj),me.remove(n.hit),me.remove(n.grab),n.shell.remove(),Ws===n&&(Ws=Kt[Kt.length-1]||null),vn(),oe("wins",Kt))}function yn(n){Ws!==n&&(Ws=n,Kt.forEach(t=>t.el.classList.toggle("focus",t===Ws)))}function w_(n){n.pinned=!0,n.shell.classList.remove("free"),vn()}var kn=new Fs,ri=new Wt,xn={win:null,dist:2};function gh(n,t,e){xn.win=n,yn(n),xn.dist=n.obj.position.length()||2,n.pinned=!1,n.shell.classList.add("free","moving"),vn(),Ko(t,e)}function Ko(n,t){let e=xn.win;if(!e)return;ri.set(n*2-1,-(t*2-1)),kn.setFromCamera(ri,ee);let i=kn.ray.origin.clone().addScaledVector(kn.ray.direction,xn.dist);me.worldToLocal(i),i.y=Math.max(mn-1.1,Math.min(mn+1.3,i.y)),e.target.copy(i),e.obj.position.copy(i)}function sa(){xn.win&&xn.win.shell.classList.remove("moving"),xn.win=null}function ra(n,t){ri.set(n*2-1,-(t*2-1)),kn.setFromCamera(ri,ee);let e=[];for(let a of Kt)e.push(a.grab,a.hit);let i=kn.intersectObjects(e,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isHandle)return{win:s,handle:!0};let r=i.object.worldToLocal(i.point.clone()),o=i.object.geometry.parameters;return{win:s,u:r.x/o.width+.5,v:.5-r.y/o.height}}var fe=null;function Ri(n,t){let e=n.win.el,i=n.u*e.offsetWidth,s=n.v*e.offsetHeight,r=e.getBoundingClientRect(),o=document.elementFromPoint(r.left+i,r.top+s),a=o==null?void 0:o.closest("[data-native-browser]"),l=a==null?void 0:a.getBoundingClientRect(),c=a?a.dataset.nativeBrowser:"shell",h=r.left+i-((l==null?void 0:l.left)||0),u=r.top+s-((l==null?void 0:l.top)||0);fe&&fe.id!==c&&(window.NativeXR.touch(fe.id,3,fe.x,fe.y),fe=null,t!==0)||(t===0&&(fe={id:c,win:n.win,x:h,y:u}),fe&&fe.id===c&&(fe.x=h,fe.y=u,window.NativeXR.touch(c,t,h,u)),(t===1||t===3)&&(fe=null))}function _h(){fe&&window.NativeXR.touch(fe.id,3,fe.x,fe.y),fe=null,sa()}xe("pinchcancel",_h);function xh(n,t){if(qt){Ri(n,t==="down"?0:1);return}let e=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=vh(n.win.el,e,i);s&&(t==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function vh(n,t,e){let i=null,s=r=>{for(let o of r.children){let a=E_(o,n);t>=a.l&&t<=a.r&&e>=a.t&&e<=a.b&&(i=o,s(o))}};return s(n),i||n}function E_(n,t){let e=0,i=0,s=n;for(;s&&s!==t;)e+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:e,t:i,r:e+n.offsetWidth,b:i+n.offsetHeight}}xe("pinchdown",()=>{let n=ra(mt.x,mt.y);if(n&&n.handle){gh(n.win,mt.x,mt.y);return}if(n){yn(n.win),xh(n,"down");return}Ah("down")||wh("down")});xe("pinchup",()=>{if(fe){let t=ra(mt.x,mt.y);t&&t.win===fe.win&&!t.handle?Ri(t,1):_h();return}if(xn.win){sa();return}let n=ra(mt.x,mt.y);if(n&&!n.handle){xh(n,"up");return}Ah("up")||wh("up")});var un=document.createElement("div");un.className="dock";var gn=new ds(un);me.add(gn);var zn=new Be(new Bn(1,1),new si({visible:!1}));me.add(zn);var T_=[],qs=[],Zo=[],A_='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.8 9.2a13.2 13.2 0 0 1 18.4 0M6 12.6a8.6 8.6 0 0 1 12 0M9.2 16a4 4 0 0 1 5.6 0"/><circle cx="12" cy="19.2" r="1.1" fill="currentColor" stroke="none"/></svg>',R_='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',C_='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function yh(n){T_=n,qs=[],Zo.length=0,un.innerHTML="";for(let t of n){if(t.kind==="sep"){un.appendChild(P_());continue}let e=document.createElement("button");if(e.dataset.id=t.id,e.title=t.label||"",e.setAttribute("aria-label",t.label||t.id),t.kind==="avatar")e.className="dock-av",e.innerHTML=C_;else if(t.kind==="status")e.className="dock-status",e.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${A_}</span><span class="dk-bat">${R_}</span>`;else if(t.kind==="tool")e.className="dock-tool",e.innerHTML=t.svg;else if(e.className="dock-app"+(t.launcher?" dock-launcher":""),t.bg&&(e.style.background=t.bg),e.innerHTML=t.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":t.svg||(t.icon?`<img src="${t.icon}" alt="">`:`<span>${t.glyph||"\u2022"}</span>`),t.win){let i=document.createElement("i");i.className="dock-dot",e.appendChild(i),Zo.push({b:e,win:t.win})}e.addEventListener("click",()=>t.run()),un.appendChild(e),qs.push(e)}bh(),jo(),Xs(),Mh()}function P_(){let n=document.createElement("span");return n.className="dock-sep",n}function Mh(){for(let{b:n,win:t}of Zo){let e=n.querySelector(".dock-dot");e&&e.classList.toggle("on",Kt.some(i=>i.id===t))}}xe("wins",Mh);function bh(){let n=un.querySelector(".dk-time");n&&(n.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}setInterval(bh,2e4);function jo(){let n=un.querySelector(".dk-wifi");n&&(n.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",jo);addEventListener("offline",jo);var _s=null;function Xs(){let n=un.querySelector(".dk-bat");if(!n)return;if(!_s){n.style.display="none";return}n.style.display="";let t=n.querySelector(".fill");t.setAttribute("width",String(Math.max(1.6,13*_s.level))),t.setAttribute("fill",_s.charging?"#8de6c8":_s.level<.2?"#ff6b6b":"currentColor")}navigator.getBattery&&navigator.getBattery().then(n=>{_s=n,n.addEventListener("levelchange",Xs),n.addEventListener("chargingchange",Xs),Xs()}).catch(()=>{});var Sh=()=>!!se,na=-1;xe("pinchcancel",()=>{na=-1});function wh(n){let t=L_(mt.x,mt.y);if(n==="down"){na=t?t.i:-1;return}let e=na;if(na=-1,!(!t||t.i!==e)&&n==="up"){let i=qs[t.i];i&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click())}}function L_(n,t){ri.set(n*2-1,-(t*2-1)),kn.setFromCamera(ri,ee);let e=kn.intersectObject(zn,!1)[0];if(!e)return null;let s=(zn.worldToLocal(e.point.clone()).x/zn.geometry.parameters.width+.5)*un.offsetWidth;for(let r=0;r<qs.length;r++){let o=qs[r];if(s>=o.offsetLeft&&s<=o.offsetLeft+o.offsetWidth)return{i:r}}return null}var uh="";function I_(){let n=on.width>on.height,t=(n?1.42:1.75)*Vt.dockDist,e=n?-.5:-.6,i=cn*(n?.74:.88)*Vt.dockSize;gn.position.set(0,mn+e,-t),gn.rotation.set(.26,0,0),gn.scale.setScalar(i);let s=un.offsetWidth*i,r=un.offsetHeight*i,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==uh&&(uh=o,zn.geometry.dispose(),zn.geometry=new Bn(s,r),hn.h=r,vn()),zn.position.copy(gn.position),zn.rotation.copy(gn.rotation),(hn.y!==gn.position.y||hn.z!==gn.position.z)&&(hn.y=gn.position.y,hn.z=gn.position.z,vn())}var D_=[["q","w","e","r","t","y","u","i","o","p",{k:"\u232B",cls:"wide"}],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter"}],[{k:"\u21E7",cls:"wide"},"z","x","c","v","b","n","m",",",".",{k:"\u21E7",cls:"wide"}],[{k:"\u{1F310}",cls:"util"},{k:"\u2699",cls:"util"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"\u2328",cls:"util"}]],se=null,Ke=null,_n=null,Gs=!1;function Pi(n,t){if(!n){se&&(me.remove(se),me.remove(Ke),se.element.remove(),se=null),_n=null;return}if(_n=t,se)return;let e=document.createElement("div");e.className="kb";for(let i of D_){let s=document.createElement("div");s.className="kb-row";for(let r of i){let o=typeof r=="string"?r:r.k,a=document.createElement("button");a.className="key"+(typeof r=="string"?"":" "+r.cls),a.textContent=typeof r=="string"?o:r.lbl||o,a.dataset.k=o,s.appendChild(a)}e.appendChild(s)}e.addEventListener("click",i=>{let s=i.target.closest("[data-k]");s&&Eh(s.dataset.k,s)}),se=new ds(e),se.scale.setScalar(cn*.9),me.add(se),Ke=new Be(new Bn(1,1),new si({visible:!1})),me.add(Ke),Th()}function Eh(n,t){if(qt&&window.NativeXR.click(),t&&(t.classList.add("hot"),setTimeout(()=>t.classList.remove("hot"),110)),n==="\u2328")return Pi(!1);if(n==="\u21E7"){Gs=!Gs,U_();return}if(!(n==="\u{1F310}"||n==="\u2699")&&_n){if(_n.nativeId){window.NativeXR.key(_n.nativeId,Gs?n.toUpperCase():n);return}if(n==="\u232B")_n.value=_n.value.slice(0,-1);else if(n==="\u23CE"){_n.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0}));return}else _n.value+=Gs?n.toUpperCase():n;_n.dispatchEvent(new Event("input",{bubbles:!0}))}}function U_(){if(se)for(let n of se.element.querySelectorAll("[data-k]")){let t=n.dataset.k;t.length===1&&/[a-zç]/i.test(t)&&(n.textContent=Gs?t.toUpperCase():t.toLowerCase())}}var dh="";function Th(){if(!se)return;se.position.set(0,mn-.58,hn.z+.35),se.rotation.set(.5,0,0);let n=se.element.offsetWidth*se.scale.x,t=se.element.offsetHeight*se.scale.x,e=n.toFixed(3)+"x"+t.toFixed(3);n>0&&e!==dh&&(dh=e,Ke.geometry.dispose(),Ke.geometry=new Bn(n,t)),Ke.position.copy(se.position),Ke.rotation.copy(se.rotation)}var ia=null;xe("pinchcancel",()=>{ia=null});function Ah(n){if(!se)return!1;ri.set(mt.x*2-1,-(mt.y*2-1)),kn.setFromCamera(ri,ee);let t=kn.intersectObject(Ke,!1)[0];if(!t)return!1;let e=Ke.worldToLocal(t.point.clone()),i=Ke.geometry.parameters,s=(e.x/i.width+.5)*se.element.offsetWidth,r=(.5-e.y/i.height)*se.element.offsetHeight,o=vh(se.element,s,r);return n==="down"?(ia=o,!0):(o&&o===ia&&o.dataset&&o.dataset.k&&Eh(o.dataset.k,o),ia=null,!0)}var fh="";Hs(n=>{let t=`${Vt.winScale}:${Vt.winDist}`;if(fh!==t&&(fh=t,vn()),I_(),Th(),fe&&mt.active&&mt.down){let e=ra(mt.x,mt.y);e&&e.win===fe.win&&!e.handle&&Ri(e,2)}xn.win&&mt.active&&mt.down&&Ko(mt.x,mt.y);for(let e of Kt)e.apply(n)});if(qt){let n=function(){try{_s=JSON.parse(window.NativeXR.battery()),Xs()}catch{}};window.nextvrBrowserFocus=t=>Pi(!0,{nativeId:t}),n(),setInterval(n,3e4),document.addEventListener("click",t=>{t.target.closest("button")&&window.NativeXR.click()},!0)}var We=null,ne=null,ea=new Map,Vs=new Map,Rh={hands:[],consumed:new Set,scaleX:1,scaleY:1};function Jo(n,t){ee.updateMatrixWorld(!0),me.updateMatrixWorld(!0);let e=new Fs;return e.setFromCamera(new Wt(n*2-1,1-t*2),ee),e}function ph(n,t){return{x:(n.palm[0]-.5)*t.scaleX+.5,y:(n.palm[1]-.5)*t.scaleY+.5}}function Ch(n,t){let e=n.obj.worldToLocal(t.clone()),i=n.obj.getWorldScale(new I);return{local:e,scale:i,u:e.x/n.w+.5,v:.5-e.y/n.h,d:e.z*i.z}}function N_(n){let t=null;for(let e of Kt){let i=e.obj.getWorldPosition(new I),s=new I(0,0,1).transformDirection(e.obj.matrixWorld),r=n.ray.intersectPlane(new en().setFromNormalAndCoplanarPoint(s,i),new I);if(!r)continue;let{local:o,scale:a}=Ch(e,r);if(Math.abs(o.x)*a.x>e.w*a.x/2+.08||Math.abs(o.y)*a.y>e.h*a.y/2+.08)continue;let l=n.ray.origin.distanceTo(r);(!t||l<t.distance)&&(t={win:e,point:r,distance:l})}return t}function mh(n=!1){ne!=null&&ne.down&&Ri({win:ne.win,u:ne.u,v:ne.v},n?3:1),ne=null}xe("phonehands",n=>{var o;Rh=n;let t=new Set(n.hands.map(a=>a.id));for(let a of ea.keys())t.has(a)||ea.delete(a);for(let a of Vs.keys())t.has(a)||Vs.delete(a);if(We){let a=n.hands.find(l=>l.id===We.id);if(!a||!a.fist||!Kt.includes(We.win))We.win.shell.classList.remove("moving"),We=null;else{n.consumed.add(a.id);let l=ph(a,n),h=Jo(l.x,l.y).ray.at(We.distance,new I);me.worldToLocal(h),We.win.target.copy(We.start).add(h.sub(We.origin)),We.win.obj.position.copy(We.win.target)}}for(let a of n.hands){let l=ea.get(a.id)||!1;if(ea.set(a.id,a.fist),!We&&a.fist&&!l){let c=ph(a,n),h=Jo(c.x,c.y),u=N_(h);if(u){((o=mt.hand)==null?void 0:o.id)===a.id&&(oe("pinchcancel"),mt.down=!1,mt.hand=null);let p=u.win;yn(p),p.pinned=!1,p.shell.classList.add("free","moving"),vn(),We={id:a.id,win:p,distance:u.distance,start:p.obj.position.clone(),origin:me.worldToLocal(u.point.clone())},n.consumed.add(a.id)}}a.palmFacesEyes&&!a.fist&&!n.consumed.has(a.id)?(n.consumed.add(a.id),a.pinching&&!Vs.get(a.id)&&oe(a.left?"phone-library":"phone-menu"),Vs.set(a.id,a.pinching)):Vs.set(a.id,!1)}let e=null;for(let a of n.hands){if(n.consumed.has(a.id)||!a.head||a.head.length!==63)continue;let l=new I().fromArray(a.head,24);if(!(l.length()>.7)){l.applyMatrix4(ee.matrixWorld);for(let c of Kt){let h=Ch(c,l),u=(ne==null?void 0:ne.win)===c&&ne.id===a.id,p=u?.07:.03;h.d>(u?.2:.15)||h.d<-.12||Math.abs(h.local.x)*h.scale.x>c.w*h.scale.x/2+p||Math.abs(h.local.y)*h.scale.y>c.h*h.scale.y/2+p||(!e||u||!e.current&&Math.abs(h.d)<Math.abs(e.d))&&(e={...h,id:a.id,win:c,point:l,current:u})}}}if(!e){mh(!t.has(ne==null?void 0:ne.id));return}n.blockFar=!0,n.consumed.add(e.id),e.current?(ne.d+=(e.d-ne.d)*.45,ne.u+=(e.u-ne.u)*.45,ne.v+=(e.v-ne.v)*.45):(mh(),oe("pinchcancel"),mt.down=!1,mt.hand=null,ne={...e,down:!1,previousD:1});let i=ne,s=i.u>=0&&i.u<=1&&i.v>=0&&i.v<=1,r={win:i.win,u:Math.max(0,Math.min(1,i.u)),v:Math.max(0,Math.min(1,i.v))};!i.down&&s&&i.d<=.012&&i.previousD>.012?(yn(i.win),Ri(r,0),i.down=!0):i.down&&(i.d>=.035||!s)?(Ri(r,1),i.down=!1):i.down&&Ri(r,2),i.previousD=i.d});Hs(()=>{var e,i,s;if(!qt)return;let n=Rh,t=[];for(let r of n.hands){if((ne==null?void 0:ne.id)===r.id){let h=ne,u=new I((h.u-.5)*h.win.w,(.5-h.v)*h.win.h,0).applyMatrix4(h.win.obj.matrixWorld);t.push({id:r.id,end:ee.worldToLocal(u).toArray(),direct:!0,down:h.down});continue}if(n.consumed.has(r.id)||n.blockFar){t.push({id:r.id,hidden:!0});continue}let o=Yo(r.aim),a=Jo(o.x,o.y),l=Kt.flatMap(h=>[h.hit,h.grab]);l.push(zn),Ke&&se&&l.push(Ke);let c=a.intersectObjects(l,!1)[0];t.push({id:r.id,...c?{end:ee.worldToLocal(c.point.clone()).toArray()}:{},down:((e=mt.hand)==null?void 0:e.id)===r.id&&mt.down})}(s=(i=window.NativeXR).handTargets)==null||s.call(i,JSON.stringify(t))});var ut=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},el=n=>{if(qt)return Fe("browser-extra",bt("browser"),n);try{window.open(n,"_blank","noopener")}catch{ae("Bloqueado pelo navegador")}};function Fe(n,t,e,i){let s=ut("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=ut("div","row");r.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let o=ut("input","fld");o.value=e,o.placeholder=bt("search");let a=ut("button","go","\u21B5"),l=ut("button","go","\u2197");l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(o,a,l);let c=ut("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let h=ut("div");h.style.cssText="flex:1;min-height:0;position:relative";let u=ut(qt?"div":"iframe");qt&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),h.appendChild(u),s.append(r,c,h);let p=m=>{let _=(m||"").trim();if(_){if(/^https?:\/\//i.test(_)||(_=/\.\w{2,}($|\/)/.test(_)?"https://"+_:"https://duckduckgo.com/?q="+encodeURIComponent(_)),o.value=_,qt){u.dataset.url=_,c.style.display="none";return}u.src=_,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use \u2197 para abrir fora.`}};return a.onclick=()=>p(o.value),o.addEventListener("keydown",m=>{m.key==="Enter"&&p(o.value)}),o.addEventListener("focus",()=>Pi(!0,o)),l.onclick=()=>el(o.value),p(e),Hn({id:n,title:t,node:s})}var Lh=["https://pipedapi.kavin.rocks","https://pipedapi.leptons.xyz","https://pipedapi.nosebs.ru","https://pipedapi.adminforge.de","https://api.piped.private.coffee","https://pipedapi.reallyaweso.me"],Ih=["https://inv.nadeko.net/api/v1","https://inv.tux.pizza/api/v1"],Vn=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function ha(n,t=11e3){let e=new AbortController,i=setTimeout(()=>e.abort(),t);try{let s=await fetch(n,{signal:e.signal});if(!s.ok)throw new Error("http");return await s.json()}finally{clearTimeout(i)}}function Dh(n,t){if(t)return"AO VIVO";if(n==null||n<0)return"";n=Math.round(n);let e=Math.floor(n/3600),i=Math.floor(n%3600/60),s=n%60,r=o=>String(o).padStart(2,"0");return e?`${e}:${r(i)}:${r(s)}`:`${i}:${r(s)}`}function Uh(n){return n=Number(n),!n||n<0?"":n>=1e6?(n/1e6).toFixed(1).replace(".",",")+" mi":n>=1e3?Math.round(n/1e3)+" mil":String(n)}function O_(n){let t=String(n||"").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)||String(n||"").match(/^([\w-]{11})$/);return t?t[1]:null}function Nh(n){let t=String(n.url||"").match(/[?&]v=([\w-]{11})/);return!t||!n.title?null:{id:t[1],title:n.title,thumb:n.thumbnail||`https://i.ytimg.com/vi/${t[1]}/hqdefault.jpg`,chan:n.uploaderName||"",dur:Dh(n.duration,n.isLive),live:!!n.isLive,views:Uh(n.views)}}function Oh(n){if(!n.videoId||!n.title)return null;let t=(n.videoThumbnails||[]).find(e=>e.quality==="medium")||(n.videoThumbnails||[])[0]||{};return{id:n.videoId,title:n.title,thumb:t.url,chan:n.author||"",dur:Dh(n.lengthSeconds,n.liveNow),live:!!n.liveNow,views:Uh(n.viewCount)}}async function Fh(n){for(let t of Lh)try{let i=((await ha(`${t}/search?q=${encodeURIComponent(n)}&filter=videos`)).items||[]).map(Nh).filter(Boolean);if(i.length)return i}catch{}for(let t of Ih)try{let e=await ha(`${t}/search?q=${encodeURIComponent(n)}&type=video`),i=(Array.isArray(e)?e:[]).map(Oh).filter(Boolean);if(i.length)return i}catch{}throw new Error("offline")}async function F_(){for(let n of Lh)try{let t=await ha(`${n}/trending?region=BR`),e=(Array.isArray(t)?t:[]).map(Nh).filter(Boolean);if(e.length)return e}catch{}for(let n of Ih)try{let t=await ha(`${n}/popular?region=BR`),e=(Array.isArray(t)?t:[]).map(Oh).filter(Boolean);if(e.length)return e}catch{}return Fh("em alta brasil")}var Mn=null,Li=null;function oa(){try{Mn&&Mn.unMute&&(Mn.unMute(),Mn.setVolume&&Mn.setVolume(100))}catch{}}["pointerdown","touchstart","keydown"].forEach(n=>addEventListener(n,()=>setTimeout(oa,0),{capture:!0}));function B_(){return Li||(Li=new Promise((n,t)=>{if(window.YT&&window.YT.Player)return n(window.YT);let e=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{e&&e(),Li=null,n(window.YT)};let i=document.createElement("script");i.src="https://www.youtube.com/iframe_api",i.onerror=()=>{Li=null,t(new Error("api"))},document.head.appendChild(i),setTimeout(()=>{window.YT&&window.YT.Player||(Li=null,t(new Error("timeout")))},9e3)}),Li)}function Qo(){try{Mn&&Mn.destroy&&Mn.destroy()}catch{}Mn=null}function Bh(){let n=ut("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f12";let t=ut("div","row");t.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let e=ut("button","go","\u2190");e.style.display="none";let i=ut("input","fld");i.placeholder="Pesquisar no YouTube ou colar link";let s=ut("button","go","\u{1F50E}"),r=ut("button","go","\u2197");r.style.background="rgba(255,255,255,.12)",r.style.color="#fff",t.append(e,i,s,r);let o=ut("div","yt-chips"),a=ut("div","yt-scroll");n.append(t,o,a);let l=["M\xFAsica","Jogos","VR 360","Not\xEDcias","Ao vivo","Filmes"];o.innerHTML=l.map(E=>`<button class="yt-chip" data-q="${E}">${E}</button>`).join(""),o.addEventListener("click",E=>{let T=E.target.closest("[data-q]");T&&(i.value=T.dataset.q,f(T.dataset.q))});let c=[],h="",u=null,p=0,m=()=>{a.innerHTML=`<div class="yt-grid">${'<span class="yt-card"><span class="yt-thumb yt-skel"></span><span class="yt-meta"><span class="yt-skel-l"></span><span class="yt-skel-l short"></span></span></span>'.repeat(6)}</div>`},_=E=>`<button class="yt-card" data-v="${E.id}"><span class="yt-thumb">${E.thumb?`<img loading="lazy" src="${E.thumb}" alt="">`:""}`+(E.dur?`<span class="yt-dur${E.live?" live":""}">${Vn(E.dur)}</span>`:"")+`</span><span class="yt-meta"><span class="yt-t">${Vn(E.title)}</span><span class="yt-c">${Vn(E.chan)}${E.views?" \xB7 "+Vn(E.views):""}</span></span></button>`;function g(E,T){Qo(),u=null,c=T,e.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-sec">${Vn(E)}</div><div class="yt-grid">${T.map(_).join("")}</div>`}function d(E){e.style.display="none",o.style.display="",a.innerHTML='<div class="yt-err"><div style="font-size:46px">\u{1F4E1}</div><div class="yt-err-t">Sem conex\xE3o com a busca</div><div class="yt-err-s">Verifique a internet e tente de novo. D\xE1 para colar um link direto tamb\xE9m.</div><button class="yt-btn" data-retry>\u21BB TENTAR DE NOVO</button></div>',a.querySelector("[data-retry]").onclick=()=>E?f(E):w()}async function f(E){if(E=(E||"").trim(),!E)return;let T=O_(E);if(T)return v({id:T,title:"V\xEDdeo do YouTube",chan:"",dur:"",views:""});let A=++p;m();try{let V=await Fh(E);if(A!==p)return;h=`Resultados para \u201C${E}\u201D`,g(h,V)}catch{A===p&&d(E)}}async function w(){let E=++p;m();try{let T=await F_();if(E!==p)return;h="Em alta no Brasil",g(h,T)}catch{E===p&&d(null)}}function v(E){u=E,c.length||(c=[E]),e.style.display="",o.style.display="none",a.innerHTML=`<div class="yt-player">
        <div class="yt-holder yt-frame"></div>
        <div class="yt-info">
          <div class="yt-ptitle">${Vn(E.title)}</div>
          ${E.chan?`<div class="yt-pchan">${Vn(E.chan)}${E.views?" \xB7 "+Vn(E.views):""}</div>`:""}
          <div class="yt-prow">
            <button class="yt-btn" data-back>\u2190 VOLTAR</button>
            <button class="yt-btn" data-snd>\u{1F50A} ATIVAR SOM</button>
            <button class="yt-btn" data-out>ABRIR \u2197</button>
          </div>
          <p class="yt-pchan" style="margin-top:10px">Sem som? D\xEA um toque na tela do celular uma vez \u2014
          o navegador s\xF3 libera \xE1udio depois de um toque real.</p>
        </div></div>`;let T=a.querySelector(".yt-holder");if(a.querySelector("[data-back]").onclick=()=>{Qo(),g(h||"Em alta no Brasil",c)},a.querySelector("[data-out]").onclick=()=>el("https://www.youtube.com/watch?v="+E.id),a.querySelector("[data-snd]").onclick=oa,qt){let V=ut("div");V.dataset.nativeBrowser="youtube-player",V.dataset.url="https://www.youtube.com/embed/"+E.id+"?autoplay=1&playsinline=1",V.style.cssText="width:100%;height:100%",T.append(V),a.querySelector("[data-snd]").onclick=()=>{window.NativeXR.click(),ae("Use Android media volume to adjust sound.")};return}B_().then(V=>{if(u===E)try{Mn=new V.Player(T,{videoId:E.id,playerVars:{autoplay:1,playsinline:1,rel:0,mute:0,modestbranding:1,enablejsapi:1},events:{onReady:M=>{try{M.target.unMute(),M.target.setVolume(100),M.target.playVideo()}catch{}setTimeout(oa,350)},onError:A}})}catch{A()}}).catch(A);function A(){u!==E||T.dataset.fb||(T.dataset.fb="1",T.innerHTML=`<iframe class="yt-frame" title="${Vn(E.title)}" src="https://www.youtube-nocookie.com/embed/${E.id}?autoplay=1&mute=0&playsinline=1&rel=0&enablejsapi=1" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`)}setTimeout(oa,600)}a.addEventListener("click",E=>{let T=E.target.closest("[data-v]");if(!T)return;let A=c.find(V=>V.id===T.dataset.v);A&&v(A)}),e.onclick=()=>g(h||"Em alta no Brasil",c),s.onclick=()=>f(i.value),r.onclick=()=>el(u?"https://www.youtube.com/watch?v="+u.id:"https://m.youtube.com/results?search_query="+encodeURIComponent(i.value||"")),i.addEventListener("focus",()=>Pi(!0,i)),i.addEventListener("keydown",E=>{E.key==="Enter"&&f(i.value)}),w();let R=Hn({id:"youtube",title:"YouTube",node:n});return xe("wins",()=>{Kt.some(E=>E.id==="youtube")||Qo()}),R}var aa=[];function z_(){let n=ut("div","pad"),t=ut("div");t.innerHTML=`<h2>${bt("gallery")}</h2><p class="sub">${bt("photosHelp")}</p>`;let e=ut("button","go",bt("pickPhotos")),i=ut("input");i.type="file",i.accept="image/*",i.multiple=!0,i.style.display="none";let s=ut("div","grid4");s.style.marginTop="20px";let r=ut("div");r.style.cssText="margin-top:18px";let o=()=>{if(s.innerHTML="",!aa.length){s.innerHTML=`<p class="sub" style="grid-column:1/-1">${bt("noPhotos")}</p>`;return}aa.forEach((a,l)=>{let c=ut("button","thumb");c.innerHTML=`<img src="${a}" alt="">`,c.onclick=()=>{r.innerHTML=`<img src="${a}" style="width:100%;border-radius:16px">`},s.appendChild(c)})};return e.onclick=()=>i.click(),i.onchange=()=>{for(let a of i.files)aa.push(URL.createObjectURL(a));o(),ae(aa.length+" fotos")},o(),n.append(t,e,i,s,r),n.append(ut("p","note","Na web, o Android pede as fotos pelo seletor do sistema \u2014 \xE9 a forma correta e n\xE3o precisa de permiss\xE3o extra. No app Android use READ_MEDIA_IMAGES e liste direto no MediaStore.")),Hn({id:"gallery",title:bt("gallery"),node:n})}function Xe(n,t,e){let i=ut("div","opt");return i.append(ut("div","opt-l",`<div class="opt-t">${n}</div>${t?`<div class="opt-d">${t}</div>`:""}`),e),i}function tl(n,t){let e=ut("button","sw");return e.dataset.on=Vt[n]?"1":"0",e.onclick=()=>{Vt[n]=Vt[n]?0:1,e.dataset.on=Vt[n]?"1":"0",ps(),t&&t(Vt[n])},e}function xs(n,t,e,i,s){let r=ut("input");return r.type="range",r.min=t,r.max=e,r.step=i,r.value=Vt[n],r.oninput=()=>{Vt[n]=+r.value,ps(),s&&s(Vt[n])},r}function la(){let n=ut("div");n.style.cssText="display:flex;flex-direction:column;height:100%";let t=ut("div","tabs");t.style.padding="18px 24px 0";let e=ut("div","pad");e.style.paddingTop="6px",n.append(t,e);let i=[[bt("general"),()=>{e.innerHTML=`<h2>${bt("general")}</h2><p class="sub">Next VR \xB7 shell XR para Android</p>`;let o=ut("div","card"),a=ut("div","seg");for(let[l,c]of[["pt","\u{1F1E7}\u{1F1F7} Portugu\xEAs"],["en","\u{1F1FA}\u{1F1F8} English"],["es","\u{1F1EA}\u{1F1F8} Espa\xF1ol"]]){let h=ut("button",null,c);h.setAttribute("aria-pressed",Vt.lang===l),h.onclick=()=>{Ho(l),ae(bt("langChanged")),r()},a.appendChild(h)}o.append(Xe(bt("language"),"Muda a interface na hora",a)),o.append(Xe("FPS","Mostrar contador",tl("showFps"))),e.append(o),e.append(ut("p","note","Shizuku: abrir apps Android instalados s\xF3 existe no app nativo. Nesta vers\xE3o web o navegador n\xE3o tem como iniciar outro app."))}],[bt("hands"),()=>{e.innerHTML=`<h2>${bt("hands")}</h2><p class="sub">C\xE2mera traseira, MediaPipe.</p>`;let o=ut("div","card");o.append(Xe(bt("on"),"Rastrear as m\xE3os",tl("handsOn",a=>a?gs():ta()))),o.append(Xe(bt("sens"),"PhoneXR: native landmark and pointer filters",ut("span","note","OrangeHanding / One Euro"))),o.append(Xe("Desenhar m\xE3os","PhoneXR silhouettes over windows",tl("handDraw"))),o.append(Xe("Pinch","PhoneXR: fist guard + palm-width hysteresis",ut("span","note","0.32 / 0.50"))),e.append(o)}],[bt("windows"),()=>{e.innerHTML=`<h2>${bt("windows")}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;let o=ut("div","card");o.append(Xe(bt("curve"),"1 = encara o centro; menor = mais aberta",xs("winCurve",0,1,.05))),o.append(Xe("Inclina\xE7\xE3o","Ajuste vertical ao subir/descer",xs("winTilt",0,1.5,.05))),o.append(Xe(bt("scale"),"Tamanho das janelas",xs("winScale",.6,1.6,.05))),o.append(Xe(bt("dist"),"Dist\xE2ncia do arco",xs("winDist",1.5,3.4,.1))),e.append(o)}],[bt("dock"),()=>{e.innerHTML=`<h2>${bt("dock")}</h2><p class="sub">No modo paisagem a dock chega mais perto.</p>`;let o=ut("div","card");o.append(Xe(bt("size"),null,xs("dockSize",.7,1.5,.05))),o.append(Xe(bt("dist"),null,xs("dockDist",.7,1.5,.05))),e.append(o)}],[bt("env"),()=>{e.innerHTML="",e.append(ut("h2",null,bt("env")));let o=ut("div","grid3");for(let a of rh()){let l=ut("button","env");l.style.background=`linear-gradient(160deg,#${a.top.toString(16).padStart(6,"0")},#${a.bot.toString(16).padStart(6,"0")})`,l.innerHTML=`<span>${a.name}</span>`,l.setAttribute("aria-pressed",Vt.env===a.id),l.onclick=()=>{Go(a.id),[...o.children].forEach(c=>c.setAttribute("aria-pressed","false")),l.setAttribute("aria-pressed","true")},o.appendChild(l)}e.append(o)}],[bt("perf"),()=>{e.innerHTML=`<h2>${bt("perf")}</h2><p class="sub">Celular esquentando? Baixe a qualidade.</p>`;let o=ut("div","card"),a=ut("div","seg");for(let[l,c]of[["low","Baixa"],["auto","Autom\xE1tica"],["high","Alta"]]){let h=ut("button",null,c);h.setAttribute("aria-pressed",Vt.quality===l),h.onclick=()=>{Vt.quality=l,ps(),oe("quality"),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true")},a.appendChild(h)}o.append(Xe(bt("quality"),"Resolu\xE7\xE3o de renderiza\xE7\xE3o",a)),e.append(o),e.append(ut("p","note","O hand tracking roda a ~22 Hz, separado do render, para n\xE3o derrubar o fps."))}]],s=0;function r(){t.innerHTML="",i.forEach(([o],a)=>{let l=ut("button",null,o);l.setAttribute("aria-selected",a===s),l.onclick=()=>{s=a,r()},t.appendChild(l)}),i[s][1]()}return r(),Hn({id:"settings",title:bt("settings"),node:n})}var zh="nextvr.store.installed.v1",kh="nextvr.store.favs.v1",Hh="nextvr.lib.recent.v1",nl=n=>{try{let t=JSON.parse(localStorage.getItem(n));return Array.isArray(t)?t:[]}catch{return[]}},Sn=nl(zh),Ii=nl(kh),Di=nl(Hh),da=()=>{try{localStorage.setItem(zh,JSON.stringify(Sn)),localStorage.setItem(kh,JSON.stringify(Ii)),localStorage.setItem(Hh,JSON.stringify(Di))}catch{}},oi={},$s=[{id:"vrfs",name:"VRFS",label:"VRFS",cat:"Games \xB7 Sports \xB7 Futebol",img:"https://i.ytimg.com/vi/FxkDg2NGzqw/hqdefault.jpg",bg:"linear-gradient(160deg,#1d7a4b,#0c3a2b)",badge:'<span style="background:#e11d2e;border-radius:10px;padding:10px 24px;font-size:32px;font-weight:900;box-shadow:0 4px 18px #0009">VRFS</span>',mark:'<span style="font-size:34px;font-weight:900;font-style:italic;letter-spacing:-1px;text-shadow:0 2px 8px #0008">VRFS</span>'},{id:"minecraft",name:"Minecraft VR",label:"MINECRAFT",cat:"Games \xB7 Sandbox \xB7 Aventura",img:"https://minecraft.wiki/images/thumb/MC_key_art.png/800px-MC_key_art.png",bg:"linear-gradient(180deg,#6cb04a 0 30%,#7a5230 30%)",badge:"",mark:'<span style="font-size:23px;font-weight:900;letter-spacing:1px;text-shadow:0 2px 0 #222">MINECRAFT</span>'},{id:"roblox",name:"Roblox VR",label:"ROBLOX",cat:"Games \xB7 Social \xB7 Multiplayer",img:"",phones:!0,bg:"linear-gradient(145deg,#23232c,#101014)",badge:"",mark:'<span style="display:flex;align-items:center;gap:8px"><span style="width:34px;height:34px;background:#fff;border-radius:8px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:13px;height:13px;background:#c81e2b;border-radius:3px"></span></span><span style="font-size:24px;font-weight:900">ROBLOX</span></span>'},{id:"brawl",name:"Brawl Stars VR",label:"BRAWL STARS",cat:"Games \xB7 A\xE7\xE3o \xB7 Multiplayer",img:"https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/790/hero_bg_brawlstars.a385872a.webp",bg:"linear-gradient(115deg,#ffd02e 0 50%,#1280ff 50%)",badge:"",mark:'<span style="font-size:21px;font-weight:900;color:#111;text-shadow:0 1px 0 #fff">BRAWL<br>STARS \u2605</span>'}],fa=n=>$s.find(t=>t.id===n),Vh=[{id:"netflix",name:"Netflix",bg:"#0b0b0d",html:'<span class="lx-netflix">NETFLIX</span>'},{id:"youtube",name:"YouTube",bg:"#1e1e22",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"#0b0b0d",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"#5865F2",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"#9146FF",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"#0f2347",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"pluto",name:"pluto tv",bg:"#0b0b0d",html:'<span class="lx-pluto">pluto<i>tv</i></span>'},{id:"whatsapp",name:"WhatsApp",bg:"#25D366",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X Twitter",label:"Twitter",bg:"#000000",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"#1877F2",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"#229ED9",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"#101012",slug:"spotify",color:"1DB954"}],k_=["netflix","youtube","vrfs","tiktok","minecraft","roblox","brawl","discord","twitch","prime","pluto","whatsapp","instagram","x","facebook","telegram","spotify"],pa=n=>{let t=Kt.find(e=>e.id===n);return t?t.el.querySelector(".win-body"):null},H_={youtube:()=>Bh(),discord:()=>Fe("discord","Discord","https://discord.com/app"),netflix:()=>Fe("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>Fe("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>Fe("twitch","Twitch","https://www.twitch.tv/"),prime:()=>Fe("prime","prime video","https://www.primevideo.com/"),pluto:()=>Fe("pluto","pluto tv","https://pluto.tv/"),whatsapp:()=>Fe("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>Fe("instagram","Instagram","https://www.instagram.com/"),x:()=>Fe("x","X Twitter","https://x.com/"),facebook:()=>Fe("facebook","Facebook","https://www.facebook.com/"),telegram:()=>Fe("telegram","Telegram","https://web.telegram.org/"),spotify:()=>Fe("spotify","Spotify","https://open.spotify.com/")},ai="home",V_=[["home","Home"],["games","Games"],["apps","Apps"],["horizon","Horizon+"],["wish","Wish"]];function G_(){let n=()=>'<div style="width:96px;height:172px;background:#14141b;border-radius:10px;border:1px solid #383845;padding:9px;display:flex;flex-direction:column;gap:6px"><div style="height:9px;background:#33333f;border-radius:4px"></div><div style="height:9px;background:#33333f;border-radius:4px;width:70%"></div><div style="margin-top:auto;height:46px;background:linear-gradient(145deg,#c81e2b,#6f0f18);border-radius:7px"></div></div>';return`<div style="display:flex;gap:10px">${n()}${n()}${n()}</div>`}function W_(n){let t=n.img?`<img class="cov" src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",e=n.phones?G_():n.badge||"";return`<div class="st-cover" style="background:${n.bg}">${t}<div class="art">${e}</div>`+(Sn.includes(n.id)?'<span class="st-inst">INSTALADO</span>':"")+`<span class="st-vr">VR</span><span class="st-clabel">${n.label}</span></div>`}function X_(n){let t=n.img?`<img src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",e=n.id==="roblox"?'<span style="width:30px;height:30px;background:#fff;border-radius:7px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:12px;height:12px;background:#c81e2b;border-radius:3px"></span></span>':n.id==="vrfs"?"":`<span style="font-weight:900;font-size:13px;text-align:center;line-height:1.1">${n.label}</span>`;return`<span class="st-thumb" style="background:${n.bg}">${t}${e}</span>`}function Ph(n){let t=Sn.includes(n.id),e=oi[n.id],i=e!==void 0,s=Ii.includes(n.id),r=t?`<button class="st-btn" data-open="${n.id}">ABRIR</button><button class="st-btn" data-rm="${n.id}">REMOVER</button>`:`<button class="st-btn" data-dl="${n.id}" ${i?"disabled":""}>${i?"BAIXANDO "+Math.round(e)+"%":"ADICIONAR \xC0 BIBLIOTECA"}</button>`;return`<article class="st-card" data-card="${n.id}">${W_(n)}
    <div class="st-name">${n.name}</div><div class="st-meta">${n.cat}</div>
    <div class="st-sub">${t?"Na biblioteca de apps":"Toque para ver e baixar"}</div>
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${s?" on":""}" data-fav="${n.id}" aria-label="Favorito">\u2661</button></div>
    <div class="st-row">${r}</div></article>`}function q_(){let n=ut("div","st"),e=`<div class="st-top"><span class="st-logo">\u221E</span><div class="st-tabs">${V_.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${ai===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava>\u{1F642}</button><button class="st-x" data-x>\u2715</button></div>`;if(ai==="apps")e+=`<p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;else if(ai==="horizon")e+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else if(ai==="wish"){let i=$s.filter(s=>Ii.includes(s.id));e+=i.length?`<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${i.map(Ph).join("")}</div>`:'<p class="st-note">Toque no \u2661 de um jogo para salvar aqui.</p>'}else{let i=$s.map((o,a)=>`<button class="st-ri" data-rank="${o.id}">${X_(o)}
      <span><span class="st-rk">${a+1}. ${o.name}</span><div class="st-cat">${o.cat}</div>
      <div class="st-st">${Sn.includes(o.id)?"Na biblioteca de apps":"Toque para ver e baixar"}</div></span></button>`).join(""),s=$s.map(Ph).join("");e+=`<div class="st-rank">${i}</div><div class="st-sec"><h3>${ai==="games"?"Todos os jogos":"Jogos para voc\xEA"}</h3>`+(ai==="home"?"<button data-all>Ver todos</button>":"")+`</div><div class="st-cards">${s}</div>`}return n.innerHTML=e,n.addEventListener("click",i=>{var o;let s=a=>i.target.closest(a),r;if(r=s("[data-tab]")){ai=r.dataset.tab,ci();return}if(s("[data-x]")){let a=Kt.find(l=>l.id==="store");a&&Ci(a);return}if(s("[data-ava]")){ae("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-all]")){ai="games",ci();return}if(s("[data-openlib]")){ma();return}if(r=s("[data-rank]")){(o=n.querySelector(`[data-card="${r.dataset.rank}"]`))==null||o.scrollIntoView({behavior:"smooth",block:"center"});return}if(r=s("[data-fav]")){let a=r.dataset.fav;Ii=Ii.includes(a)?Ii.filter(l=>l!==a):[...Ii,a],da(),ci();return}if(r=s("[data-dl]")){Z_(r.dataset.dl);return}if(r=s("[data-rm]")){J_(r.dataset.rm);return}if(r=s("[data-open]")){let a=fa(r.dataset.open);ae(`Abrindo ${a.name}\u2026 (demonstra\xE7\xE3o)`),ua(a.id);return}}),n}function ci(){var e;let n=pa("store");if(!n)return;let t=((e=n.querySelector(".st"))==null?void 0:e.scrollTop)||0;n.innerHTML="",n.appendChild(q_()),n.querySelector(".st").scrollTop=t}function Y_(n){let t=pa("store");t&&t.querySelectorAll(`[data-dl="${n}"]`).forEach(e=>{e.textContent="BAIXANDO "+Math.round(oi[n]||0)+"%"})}function $_(){let n=Kt.find(i=>i.id==="store");if(n)return ci(),yn(n),n;let t=ut("div");t.style.cssText="height:100%";let e=Hn({id:"store",title:"Store",node:t});return ci(),e}function Z_(n){if(oi[n]!==void 0||Sn.includes(n))return;oi[n]=0,ci();let t=fa(n);ae("Baixando "+t.name+"\u2026");let e=setInterval(()=>{if(oi[n]=Math.min(100,oi[n]+6+Math.random()*11),oi[n]<100){Y_(n);return}clearInterval(e),delete oi[n],Sn.includes(n)||Sn.push(n),ua(n,!0),da(),ci(),bn(),ae(t.name+" foi para a biblioteca de apps \u2713")},170)}function J_(n){Sn=Sn.filter(t=>t!==n),Di=Di.filter(t=>t!==n),da(),ci(),bn(),ae(fa(n).name+" removido da biblioteca")}var vs="recent",li="all",Ys="";function ua(n,t){Di=[n,...Di.filter(e=>e!==n)].slice(0,40),da(),t||bn()}function K_(){let n=$s.filter(o=>Sn.includes(o.id)).map(o=>({...o,kind:"game"})),t=Vh.map(o=>({...o,kind:"app"})),e=[...n,...t],i=o=>{let a=k_.indexOf(o);return a<0?99:a};e.sort((o,a)=>i(o.id)-i(a.id)),li==="games"&&(e=e.filter(o=>o.kind==="game")),li==="apps"&&(e=e.filter(o=>o.kind==="app"));let s=Ys.trim().toLowerCase();if(s&&(e=e.filter(o=>(o.name+" "+(o.label||"")).toLowerCase().includes(s))),vs==="az")return[...e].sort((o,a)=>o.name.localeCompare(a.name,"pt-BR"));if(!Di.length)return e;let r=o=>{let a=Di.indexOf(o);return a<0?1e6:a};return[...e].sort((o,a)=>r(o.id)-r(a.id))}function j_(n){let t=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:"",e=n.html?n.html:`<span class="nm${n.iconOnly?" fb":""}">${n.label||n.name}</span>`;return`<button class="lib-tile" data-app="${n.id}" style="background:${n.bg}">${t}${e}</button>`}function Q_(n){return`<button class="lib-tile game" data-game="${n.id}" style="background:${n.bg}"><span class="lib-art">${n.mark}</span><span class="lib-vr">VR</span><span class="lib-gname">${n.name}</span></button>`}function t0(){let n=K_(),t=ut("div","lib"),e=li==="games"?"Jogos":li==="apps"?"Apps":"Todas";t.innerHTML=`<div class="lib-head"><h2 class="lib-title">Apps</h2>
      <button class="lib-sbtn" data-s>\u{1F50D}\uFE0E</button>
      <input class="lib-search" data-q placeholder="Buscar" value="${Ys.replace(/"/g,"&quot;")}">
      <span style="flex:1"></span>
      <button class="lib-pill" data-sort>${vs==="az"?"A\u2013Z":"Recentes"} \u25BE</button>
      <button class="lib-pill" data-filter>${e} (${n.length}) \u25BE</button></div>
    <div class="lib-scroll"><div class="lib-grid">${n.map(s=>s.kind==="game"?Q_(s):j_(s)).join("")}</div>
    ${n.length?"":`<div class="lib-empty">${li==="games"?"Nenhum jogo baixado ainda. Baixe um na loja.":"Nenhum app encontrado."}</div>`}
    <p class="lib-note">Tocar abre o app dentro de uma janela do NextVR. Sites que bloqueiam
    incorpora\xE7\xE3o mostram o aviso e o bot\xE3o \u2197 para abrir fora. Os 4 jogos VR s\xE3o demonstra\xE7\xE3o:
    eles abrem no APK Android.</p></div>
    <div class="lib-bottom"><button data-x aria-label="Fechar">\u2715</button>
      <button data-top aria-label="Topo">\u2013</button><span>Apps</span>
      <button data-az aria-label="Ordenar">\u2022\u2022\u2022</button></div>`;let i=t.querySelector("[data-q]");return(Ys||t.querySelector("[data-q]").value)&&i.classList.add("open"),i.addEventListener("input",()=>{var r;Ys=i.value,bn(!0);let s=(r=pa("library"))==null?void 0:r.querySelector("[data-q]");s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}),i.addEventListener("focus",()=>Pi(!0,i)),t.addEventListener("click",s=>{let r=a=>s.target.closest(a),o;if(r("[data-s]")){let a=t.querySelector("[data-q]");a.classList.toggle("open"),a.classList.contains("open")?a.focus():(Ys="",a.value="",bn());return}if(r("[data-sort]")){vs=vs==="az"?"recent":"az",bn();return}if(r("[data-filter]")){li=li==="all"?"games":li==="games"?"apps":"all",bn();return}if(r("[data-x]")){let a=Kt.find(l=>l.id==="library");a&&Ci(a);return}if(r("[data-top]")){t.querySelector(".lib-scroll").scrollTo({top:0,behavior:"smooth"});return}if(r("[data-az]")){vs=vs==="az"?"recent":"az",bn();return}if(o=r("[data-game]")){let a=fa(o.dataset.game);ua(a.id),ae(`Abrindo ${a.name}\u2026 (demonstra\xE7\xE3o)`);return}if(o=r("[data-app]")){let a=Vh.find(c=>c.id===o.dataset.app);if(!a)return;ua(a.id);let l=H_[a.id];l?l():ae(a.name+": sem endere\xE7o cadastrado");return}}),t}function bn(n){var i;let t=pa("library");if(!t)return;let e=((i=t.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;t.innerHTML="",t.appendChild(t0()),t.querySelector(".lib-scroll").scrollTop=e}function ma(){let n=Kt.find(i=>i.id==="library");if(n)return bn(),yn(n),n;let t=ut("div");t.style.cssText="height:100%";let e=Hn({id:"library",title:bt("apps"),node:t});return bn(),e}var Gn=(n,t)=>`<svg viewBox="0 0 24 24" fill="${t||"none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`,Wn={bell:Gn('<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>'),kb:Gn('<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>'),center:Gn('<circle cx="12" cy="12" r="3.3"/><path d="M12 3v3.6M12 17.4V21M3 12h3.6M17.4 12H21"/>'),compass:Gn('<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>'),store:Gn('<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>'),people:Gn('<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>'),camera:Gn('<path d="M4 8.2h3.1L8.6 6h6.8l1.5 2.2H20V19H4z"/><circle cx="12" cy="13.4" r="3.4"/>'),gear:Gn('<circle cx="12" cy="12" r="2.6"/><circle cx="12" cy="12" r="7.4" stroke-width="2.7" stroke-dasharray="2.5 3.1"/><circle cx="12" cy="12" r="5.4"/>'),play:Gn('<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>')};function Gh(){yh([{kind:"avatar",id:"profile",label:bt("profile"),run:la},{kind:"status",id:"status",label:bt("settings"),run:la},{kind:"tool",id:"bell",label:bt("notif"),svg:Wn.bell,run:()=>ae(bt("noNotif"))},{kind:"tool",id:"kb",label:bt("keyboard"),svg:Wn.kb,run:()=>Pi(!Sh(),null)},{kind:"tool",id:"center",label:bt("center"),svg:Wn.center,run:()=>ks()},{kind:"sep"},{id:"browser",win:"browser",label:bt("browser"),svg:Wn.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>Fe("browser",bt("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:bt("store"),svg:Wn.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:$_},{id:"discord",win:"discord",label:"Discord",svg:Wn.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>Fe("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:bt("gallery"),svg:Wn.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:z_},{kind:"sep"},{id:"settings",win:"settings",label:bt("settings"),svg:Wn.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:la},{id:"youtube",win:"youtube",label:"YouTube",svg:Wn.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:Bh},{id:"library",win:"library",launcher:!0,label:bt("apps"),run:ma}])}xe("lang",Gh);var e0=document.getElementById("boot"),T0=document.getElementById("bootGo"),ca=null;e0.hidden=!0;function n0(){var e;let n=ut("div","langwin");n.innerHTML=`<h1>Escolha seu idioma</h1>
    <p>Choose your language \xB7 Elige tu idioma</p>
    <div class="lang-options" role="list">
      <button class="lang-option" data-lang="pt"><b>\u{1F1E7}\u{1F1F7}</b><span>Portugu\xEAs</span></button>
      <button class="lang-option" data-lang="en"><b>\u{1F1FA}\u{1F1F8}</b><span>English</span></button>
      <button class="lang-option" data-lang="es"><b>\u{1F1EA}\u{1F1F8}</b><span>Espa\xF1ol</span></button>
    </div>
    <div class="lang-status">A janela desaparece depois da escolha.</div>`,n.querySelectorAll("[data-lang]").forEach(i=>i.onclick=()=>i0(i.dataset.lang));let t=Hn({id:"language",title:"Next VR",node:n,w:760,h:520});return(e=t.el.querySelector('[data-act="close"]'))==null||e.remove(),t}async function i0(n){Ho(n),ca&&(Ci(ca),ca=null),document.getElementById("perm").hidden=!1;let t=zs(),e=Vt.handsOn?gs():Promise.resolve(!1);await Promise.allSettled([t,e]),setTimeout(()=>ks(),280)}document.getElementById("btnGyro").onclick=()=>zs();document.getElementById("btnHand").onclick=()=>ch()?ta():gs();xe("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});xe("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Gh();Vt.lang?(qt&&(zs(),Vt.handsOn&&gs()),document.getElementById("perm").hidden=!1,setTimeout(()=>ks(),280)):ca=n0();qt&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{zs(),Vt.handsOn&&gs()},window.nextvrSuspend=()=>ta(),xe("hands",()=>{document.getElementById("perm").hidden=!0}));xe("phone-library",()=>{let n=Kt.find(t=>t.id==="library");n?Ci(n):ma()});xe("phone-menu",()=>{let n=Kt.find(e=>e.id==="hand-menu");if(n){Ci(n);return}let t=ut("div","pad");t.append(ut("h2",null,"NextVR"));for(let[e,i]of[[bt("center"),ks],[bt("apps"),ma],[bt("settings"),la]]){let s=ut("button","go",e);s.style.margin="12px",s.onclick=i,t.append(s)}Hn({id:"hand-menu",title:"NextVR",node:t,w:760,h:420})});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

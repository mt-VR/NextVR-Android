(()=>{var Cd=0,dl=1,Pd=2;var Uh=1,Ld=2,Gn=3,pi=0,Qe=1,Wn=2;var ui=0,ys=1,fl=2,pl=3,ml=4,Id=5,Ii=100,Dd=101,Nd=102,gl=103,_l=104,Ud=200,Od=201,Fd=202,Bd=203,Io=204,Do=205,zd=206,kd=207,Hd=208,Vd=209,Gd=210,Wd=211,Xd=212,qd=213,Yd=214,$d=0,Zd=1,Jd=2,Jr=3,Kd=4,jd=5,Qd=6,tf=7,Oh=0,ef=1,nf=2,di=0,sf=1,rf=2,af=3,of=4,cf=5,lf=6;var Fh=300,Ss=301,ws=302,No=303,Uo=304,_a=306,Oo=1e3,wn=1001,Fo=1002,We=1003,xl=1004;var no=1005;var fn=1006,hf=1007;var Zs=1008;var fi=1009,uf=1010,df=1011,fc=1012,Bh=1013,ci=1014,li=1015,Js=1016,zh=1017,kh=1018,Ni=1020,ff=1021,En=1023,pf=1024,mf=1025,Ui=1026,Es=1027,gf=1028,Hh=1029,_f=1030,Vh=1031,Gh=1033,io=33776,so=33777,ro=33778,ao=33779,vl=35840,yl=35841,bl=35842,Ml=35843,Wh=36196,Sl=37492,wl=37496,El=37808,Al=37809,Tl=37810,Rl=37811,Cl=37812,Pl=37813,Ll=37814,Il=37815,Dl=37816,Nl=37817,Ul=37818,Ol=37819,Fl=37820,Bl=37821,oo=36492,zl=36494,kl=36495,xf=36283,Hl=36284,Vl=36285,Gl=36286;var Kr=2300,jr=2301,co=2302,Wl=2400,Xl=2401,ql=2402;var Xh=3e3,Oi=3001,vf=3200,yf=3201,bf=0,Mf=1,pn="",Ie="srgb",Yn="srgb-linear",pc="display-p3",xa="display-p3-linear",Qr="linear",oe="srgb",ta="rec709",ea="p3";var ts=7680;var Yl=519,Sf=512,wf=513,Ef=514,qh=515,Af=516,Tf=517,Rf=518,Cf=519,$l=35044;var Zl="300 es",Bo=1035,Xn=2e3,na=2001,mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=1234567,Xs=Math.PI/180,Ks=180/Math.PI;function Cs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Xe(n,t,e){return Math.max(t,Math.min(e,n))}function mc(n,t){return(n%t+t)%t}function Pf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Lf(n,t,e){return n!==t?(e-n)/(t-n):0}function qs(n,t,e){return(1-e)*n+e*t}function If(n,t,e,i){return qs(n,t,1-Math.exp(-e*i))}function Df(n,t=1){return t-Math.abs(mc(n,t*2)-t)}function Nf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Uf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Of(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ff(n,t){return n+Math.random()*(t-n)}function Bf(n){return n*(.5-Math.random())}function zf(n){n!==void 0&&(Jl=n);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kf(n){return n*Xs}function Hf(n){return n*Ks}function zo(n){return(n&n-1)===0&&n!==0}function Vf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ia(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gf(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Yh={DEG2RAD:Xs,RAD2DEG:Ks,generateUUID:Cs,clamp:Xe,euclideanModulo:mc,mapLinear:Pf,inverseLerp:Lf,lerp:qs,damp:If,pingpong:Df,smoothstep:Nf,smootherstep:Uf,randInt:Of,randFloat:Ff,randFloatSpread:Bf,seededRandom:zf,degToRad:kf,radToDeg:Hf,isPowerOfTwo:zo,ceilPowerOfTwo:Vf,floorPowerOfTwo:ia,setQuaternionFromProperEuler:Gf,normalize:Ve,denormalize:gs},Yt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=s[0],f=s[3],p=s[6],w=s[1],v=s[4],R=s[7],A=s[2],T=s[5],E=s[8];return r[0]=o*_+a*w+c*A,r[3]=o*f+a*v+c*T,r[6]=o*p+a*R+c*E,r[1]=l*_+h*w+u*A,r[4]=l*f+h*v+u*T,r[7]=l*p+h*R+u*E,r[2]=d*_+m*w+g*A,r[5]=d*f+m*v+g*T,r[8]=d*p+m*R+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=e*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lo=new Vt;function $h(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wf(){let n=sa("canvas");return n.style.display="block",n}var Kl={};function Ys(n){n in Kl||(Kl[n]=!0,console.warn(n))}var jl=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ql=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[Yn]:{transfer:Qr,primaries:ta,toReference:n=>n,fromReference:n=>n},[Ie]:{transfer:oe,primaries:ta,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xa]:{transfer:Qr,primaries:ea,toReference:n=>n.applyMatrix3(Ql),fromReference:n=>n.applyMatrix3(jl)},[pc]:{transfer:oe,primaries:ea,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ql),fromReference:n=>n.applyMatrix3(jl).convertLinearToSRGB()}},Xf=new Set([Yn,xa]),ee={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Xf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Tr[t].toReference,s=Tr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Tr[n].primaries},getTransfer:function(n){return n===pn?Qr:Tr[n].transfer}};function bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var es,ra=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=sa("canvas")),es.width=t.width,es.height=t.height;let i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bs(e[i]/255)*255):e[i]=bs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qf=0,aa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Cs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uo(s[o].image)):r.push(uo(s[o]))}else r=uo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ra.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yf=0,An=class n extends mi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=wn,s=wn,r=fn,o=Zs,a=En,c=fi,l=n.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Cs(),this.name="",this.source=new aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Oi?Ie:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?Oi:Xh}set encoding(t){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Oi?Ie:pn}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Fh;An.DEFAULT_ANISOTROPY=1;var De=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,R=(m+1)/2,A=(p+1)/2,T=(h+d)/4,E=(u+_)/4,G=(g+f)/4;return v>R&&v>A?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=E/i):R>A?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=T/s,r=G/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=G/r),this.set(i,s,r,e),this}let w=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ko=class extends mi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Oi?Ie:pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends ko{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},oa=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ho=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),T=Math.atan2(A,p*w);f=Math.sin(f*T)/A,a=Math.sin(a*T)/A}let R=a*w;if(c=c*f+d*R,l=l*f+m*R,h=h*f+g*R,u=u*f+_*R,f===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fo=new L,th=new $e,Fi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Cr.subVectors(this.max,Hs),ns.subVectors(t.a,Hs),is.subVectors(t.b,Hs),ss.subVectors(t.c,Hs),ii.subVectors(is,ns),si.subVectors(ss,is),Ti.subVectors(ns,ss);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ti.z,Ti.y,ii.z,0,-ii.x,si.z,0,-si.x,Ti.z,0,-Ti.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ti.y,Ti.x,0];return!po(e,ns,is,ss,Cr)||(e=[1,0,0,0,1,0,0,0,1],!po(e,ns,is,ss,Cr))?!1:(Pr.crossVectors(ii,si),e=[Pr.x,Pr.y,Pr.z],po(e,ns,is,ss,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,Rr=new Fi,ns=new L,is=new L,ss=new L,ii=new L,si=new L,Ti=new L,Hs=new L,Cr=new L,Pr=new L,Ri=new L;function po(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ri.fromArray(n,r);let a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=t.dot(Ri),l=e.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $f=new Fi,Vs=new L,mo=new L,js=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):$f.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(mo)),this.expandByPoint(Vs.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new L,go=new L,Lr=new L,ri=new L,_o=new L,Ir=new L,xo=new L,ca=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){go.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(go);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Lr),a=ri.dot(this.direction),c=-ri.dot(Lr),l=ri.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(go).addScaledVector(Lr,d),m}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,i,s,r){_o.subVectors(e,t),Ir.subVectors(i,t),xo.crossVectors(_o,Ir);let o=this.direction.dot(xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);let c=a*this.direction.dot(Ir.crossVectors(ri,Ir));if(c<0)return null;let l=a*this.direction.dot(_o.cross(ri));if(l<0||c+l>o)return null;let h=-a*ri.dot(xo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,d,m,g,_,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,i,s,r,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zf,t,Jf)}lookAt(t,e,i){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ai.crossVectors(i,rn),ai.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ai.crossVectors(i,rn)),ai.normalize(),Dr.crossVectors(rn,ai),s[0]=ai.x,s[4]=Dr.x,s[8]=rn.x,s[1]=ai.y,s[5]=Dr.y,s[9]=rn.y,s[2]=ai.z,s[6]=Dr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],f=i[10],p=i[14],w=i[3],v=i[7],R=i[11],A=i[15],T=s[0],E=s[4],G=s[8],b=s[12],S=s[1],z=s[5],V=s[9],et=s[13],P=s[2],O=s[6],H=s[10],Y=s[14],W=s[3],X=s[7],K=s[11],tt=s[15];return r[0]=o*T+a*S+c*P+l*W,r[4]=o*E+a*z+c*O+l*X,r[8]=o*G+a*V+c*H+l*K,r[12]=o*b+a*et+c*Y+l*tt,r[1]=h*T+u*S+d*P+m*W,r[5]=h*E+u*z+d*O+m*X,r[9]=h*G+u*V+d*H+m*K,r[13]=h*b+u*et+d*Y+m*tt,r[2]=g*T+_*S+f*P+p*W,r[6]=g*E+_*z+f*O+p*X,r[10]=g*G+_*V+f*H+p*K,r[14]=g*b+_*et+f*Y+p*tt,r[3]=w*T+v*S+R*P+A*W,r[7]=w*E+v*z+R*O+A*X,r[11]=w*G+v*V+R*H+A*K,r[15]=w*b+v*et+R*Y+A*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*m-i*c*m)+_*(+e*c*m-e*l*d+r*o*d-s*o*m+s*l*h-r*c*h)+f*(+e*l*u-e*a*m-r*o*u+i*o*m+r*a*h-i*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],w=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,v=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,R=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,T=e*w+i*v+s*R+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=w*E,t[1]=(_*d*r-u*f*r-_*s*m+i*f*m+u*s*p-i*d*p)*E,t[2]=(a*f*r-_*c*r+_*s*l-i*f*l-a*s*p+i*c*p)*E,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*m-i*c*m)*E,t[4]=v*E,t[5]=(h*f*r-g*d*r+g*s*m-e*f*m-h*s*p+e*d*p)*E,t[6]=(g*c*r-o*f*r-g*s*l+e*f*l+o*s*p-e*c*p)*E,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*m+e*c*m)*E,t[8]=R*E,t[9]=(g*u*r-h*_*r-g*i*m+e*_*m+h*i*p-e*u*p)*E,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*m-e*a*m)*E,t[12]=A*E,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*f+e*u*f)*E,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*f-e*a*f)*E,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*d+e*a*d)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,m=r*h,g=r*u,_=o*h,f=o*u,p=a*u,w=c*l,v=c*h,R=c*u,A=i.x,T=i.y,E=i.z;return s[0]=(1-(_+p))*A,s[1]=(m+R)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(m-R)*T,s[5]=(1-(d+p))*T,s[6]=(f+w)*T,s[7]=0,s[8]=(g+v)*E,s[9]=(f-w)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let l=1/r,h=1/o,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Xn){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),m,g;if(a===Xn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===na)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Xn){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*l,m=(i+s)*h,g,_;if(a===Xn)g=(o+r)*u,_=-2*u;else if(a===na)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},rs=new L,Mn=new Jt,Zf=new L(0,0,0),Jf=new L(1,1,1),ai=new L,Dr=new L,rn=new L,eh=new Jt,nh=new $e,Zn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kf=0,ih=new L,as=new $e,kn=new Jt,Nr=new L,Gs=new L,jf=new L,Qf=new $e,sh=new L(1,0,0),rh=new L(0,1,0),ah=new L(0,0,1),tp={type:"added"},ep={type:"removed"},cn=class n extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new Zn,i=new $e,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Vt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Nr.copy(t):Nr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Gs,Nr,this.up):kn.lookAt(Nr,Gs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(kn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ep)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};cn.DEFAULT_UP=new L(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new L,Hn=new L,vo=new L,Vn=new L,os=new L,cs=new L,oh=new L,yo=new L,bo=new L,Mo=new L,Ur=!1,_s=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Sn.subVectors(s,e),Hn.subVectors(i,e),vo.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(Hn),c=Sn.dot(vo),l=Hn.dot(Hn),h=Hn.dot(vo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(t,e,i,s,r,o,a,c){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),this.getInterpolation(t,e,i,s,r,o,a,c)}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static isFrontFacing(t,e,i,s){return Sn.subVectors(i,e),Hn.subVectors(t,e),Sn.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;os.subVectors(s,i),cs.subVectors(r,i),yo.subVectors(t,i);let c=os.dot(yo),l=cs.dot(yo);if(c<=0&&l<=0)return e.copy(i);bo.subVectors(t,s);let h=os.dot(bo),u=cs.dot(bo);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(os,o);Mo.subVectors(t,r);let m=os.dot(Mo),g=cs.dot(Mo);if(g>=0&&m<=g)return e.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(cs,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return oh.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(oh,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(os,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function So(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var $t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=mc(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=So(o,r,t+1/3),this.g=So(o,r,t),this.b=So(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=Zh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ee.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Xe(Fe.r*255,0,255))*65536+Math.round(Xe(Fe.g*255,0,255))*256+Math.round(Xe(Fe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Fe.copy(this),e);let i=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ie){ee.fromWorkingColorSpace(Fe.copy(this),t);let e=Fe.r,i=Fe.g,s=Fe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Or);let i=qs(oi.h,Or.h,e),s=qs(oi.s,Or.s,e),r=qs(oi.l,Or.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new $t;$t.NAMES=Zh;var np=0,As=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=ys,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Do,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Io&&(i.blendSrc=this.blendSrc),this.blendDst!==Do&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Jn=class extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new L,Fr=new Yt,mn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),t}};var la=class extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ha=class extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var qn=class extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}};var ip=0,dn=new Jt,wo=new cn,ls=new L,an=new Fi,Ws=new Fi,Re=new L,Bi=class n extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?ha:la)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(an.min,Ws.min),an.expandByPoint(Re),Re.addVectors(an.max,Ws.max),an.expandByPoint(Re)):(an.expandByPoint(Ws.min),an.expandByPoint(Ws.max))}an.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Re.fromBufferAttribute(a,l),c&&(ls.fromBufferAttribute(t,l),Re.add(ls)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new L,h[S]=new L;let u=new L,d=new L,m=new L,g=new Yt,_=new Yt,f=new Yt,p=new L,w=new L;function v(S,z,V){u.fromArray(s,S*3),d.fromArray(s,z*3),m.fromArray(s,V*3),g.fromArray(o,S*2),_.fromArray(o,z*2),f.fromArray(o,V*2),d.sub(u),m.sub(u),_.sub(g),f.sub(g);let et=1/(_.x*f.y-f.x*_.y);isFinite(et)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(et),w.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(et),l[S].add(p),l[z].add(p),l[V].add(p),h[S].add(w),h[z].add(w),h[V].add(w))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let S=0,z=R.length;S<z;++S){let V=R[S],et=V.start,P=V.count;for(let O=et,H=et+P;O<H;O+=3)v(i[O+0],i[O+1],i[O+2])}let A=new L,T=new L,E=new L,G=new L;function b(S){E.fromArray(r,S*3),G.copy(E);let z=l[S];A.copy(z),A.sub(E.multiplyScalar(E.dot(z))).normalize(),T.crossVectors(G,z);let et=T.dot(h[S])<0?-1:1;c[S*4]=A.x,c[S*4+1]=A.y,c[S*4+2]=A.z,c[S*4+3]=et}for(let S=0,z=R.length;S<z;++S){let V=R[S],et=V.start,P=V.count;for(let O=et,H=et+P;O<H;O+=3)b(i[O+0]),b(i[O+1]),b(i[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,f),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,i);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ch=new Jt,Ci=new ca,Br=new js,lh=new L,hs=new L,us=new L,ds=new L,Eo=new L,zr=new L,kr=new Yt,Hr=new Yt,Vr=new Yt,hh=new L,uh=new L,dh=new L,Gr=new L,Wr=new L,Ye=class extends cn{constructor(t=new Bi,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Eo.fromBufferAttribute(u,t),o?zr.addScaledVector(Eo,h):zr.addScaledVector(Eo.sub(e),h))}e.add(zr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Br.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Br,lh)===null||Ci.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(ch.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(ch),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],w=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let R=w,A=v;R<A;R+=3){let T=a.getX(R),E=a.getX(R+1),G=a.getX(R+2);s=Xr(this,p,t,i,l,h,u,T,E,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let w=a.getX(f),v=a.getX(f+1),R=a.getX(f+2);s=Xr(this,o,t,i,l,h,u,w,v,R),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],w=Math.max(f.start,m.start),v=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let R=w,A=v;R<A;R+=3){let T=R,E=R+1,G=R+2;s=Xr(this,p,t,i,l,h,u,T,E,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let w=f,v=f+1,R=f+2;s=Xr(this,o,t,i,l,h,u,w,v,R),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function sp(n,t,e,i,s,r,o,a){let c;if(t.side===Qe?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===pi,a),c===null)return null;Wr.copy(a),Wr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Wr);return l<e.near||l>e.far?null:{distance:l,point:Wr.clone(),object:n}}function Xr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,hs),n.getVertexPosition(c,us),n.getVertexPosition(l,ds);let h=sp(n,t,e,i,hs,us,ds,Gr);if(h){s&&(kr.fromBufferAttribute(s,a),Hr.fromBufferAttribute(s,c),Vr.fromBufferAttribute(s,l),h.uv=_s.getInterpolation(Gr,hs,us,ds,kr,Hr,Vr,new Yt)),r&&(kr.fromBufferAttribute(r,a),Hr.fromBufferAttribute(r,c),Vr.fromBufferAttribute(r,l),h.uv1=_s.getInterpolation(Gr,hs,us,ds,kr,Hr,Vr,new Yt),h.uv2=h.uv1),o&&(hh.fromBufferAttribute(o,a),uh.fromBufferAttribute(o,c),dh.fromBufferAttribute(o,l),h.normal=_s.getInterpolation(Gr,hs,us,ds,hh,uh,dh,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};_s.getNormal(hs,us,ds,u.normal),h.face=u}return h}var tr=class n extends Bi{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new qn(l,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(u,2));function g(_,f,p,w,v,R,A,T,E,G,b){let S=R/E,z=A/G,V=R/2,et=A/2,P=T/2,O=E+1,H=G+1,Y=0,W=0,X=new L;for(let K=0;K<H;K++){let tt=K*z-et;for(let lt=0;lt<O;lt++){let k=lt*S-V;X[_]=k*w,X[f]=tt*v,X[p]=P,l.push(X.x,X.y,X.z),X[_]=0,X[f]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(lt/E),u.push(1-K/G),Y+=1}}for(let K=0;K<G;K++)for(let tt=0;tt<E;tt++){let lt=d+tt+O*K,k=d+tt+O*(K+1),$=d+(tt+1)+O*(K+1),ot=d+(tt+1)+O*K;c.push(lt,k,ot),c.push(k,$,ot),W+=6}a.addGroup(m,W,b),m+=W,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){let t={};for(let e=0;e<n.length;e++){let i=Ts(n[e]);for(let s in i)t[s]=i[s]}return t}function rp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jh(n){return n.getRenderTarget()===null?n.outputColorSpace:ee.workingColorSpace}var ap={clone:Ts,merge:Ge},op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ua=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qe=class extends ua{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,Vo=class extends cn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new qe(fs,ps,t,e);r.layers=this.layers,this.add(r);let o=new qe(fs,ps,t,e);o.layers=this.layers,this.add(o);let a=new qe(fs,ps,t,e);a.layers=this.layers,this.add(a);let c=new qe(fs,ps,t,e);c.layers=this.layers,this.add(c);let l=new qe(fs,ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},da=class extends An{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Go=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Oi?Ie:pn),this.texture=new da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tr(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:ui});r.uniforms.tEquirect.value=e;let o=new Ye(s,r),a=e.minFilter;return e.minFilter===Zs&&(e.minFilter=fn),new Vo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ao=new L,lp=new L,hp=new Vt,on=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ao.subVectors(i,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ao),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||hp.getNormalMatrix(t),s=this.coplanarPoint(Ao).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new js,qr=new L,fa=class{constructor(t=new on,e=new on,i=new on,s=new on,r=new on,o=new on){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],_=s[10],f=s[11],p=s[12],w=s[13],v=s[14],R=s[15];if(i[0].setComponents(c-r,d-l,f-m,R-p).normalize(),i[1].setComponents(c+r,d+l,f+m,R+p).normalize(),i[2].setComponents(c+o,d+h,f+g,R+w).normalize(),i[3].setComponents(c-o,d-h,f-g,R-w).normalize(),i[4].setComponents(c-a,d-u,f-_,R-v).normalize(),e===Xn)i[5].setComponents(c+a,d+u,f+_,R+v).normalize();else if(e===na)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function up(n,t){let e=t.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){let p=g[_];e?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var gn=class n extends Bi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let w=p*d-o;for(let v=0;v<l;v++){let R=v*u-r;g.push(R,-w,0),_.push(0,0,1),f.push(v/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let v=w+l*p,R=w+l*(p+1),A=w+1+l*(p+1),T=w+1+l*p;m.push(v,R,T),m.push(R,A,T)}this.setIndex(m),this.setAttribute("position",new qn(g,3)),this.setAttribute("normal",new qn(_,3)),this.setAttribute("uv",new qn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
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
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xp=`#ifdef USE_AOMAP
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
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ep=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Up=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`
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
}`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,um=`struct PhysicalMaterial {
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
}`,dm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mm=`#if defined( USE_POINTS_UV )
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
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
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
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
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
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,vg=`#define DISTANCE
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
}`,yg=`#define DISTANCE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Tg=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Dg=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,Og=`#define STANDARD
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
}`,Fg=`#define TOON
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
}`,Bg=`#define TOON
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
}`,zg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:dp,alphahash_pars_fragment:fp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:_p,aomap_fragment:xp,aomap_pars_fragment:vp,batching_pars_vertex:yp,batching_vertex:bp,begin_vertex:Mp,beginnormal_vertex:Sp,bsdfs:wp,iridescence_fragment:Ep,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Pp,color_fragment:Lp,color_pars_fragment:Ip,color_pars_vertex:Dp,color_vertex:Np,common:Up,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Bp,displacementmap_vertex:zp,emissivemap_fragment:kp,emissivemap_pars_fragment:Hp,colorspace_fragment:Vp,colorspace_pars_fragment:Gp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:qp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:rm,envmap_vertex:$p,fog_vertex:Zp,fog_pars_vertex:Jp,fog_fragment:Kp,fog_pars_fragment:jp,gradientmap_pars_fragment:Qp,lightmap_fragment:tm,lightmap_pars_fragment:em,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:am,lights_toon_pars_fragment:om,lights_phong_fragment:cm,lights_phong_pars_fragment:lm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:xm,map_fragment:vm,map_pars_fragment:ym,map_particle_fragment:bm,map_particle_pars_fragment:Mm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:wm,morphcolor_vertex:Em,morphnormal_vertex:Am,morphtarget_pars_vertex:Tm,morphtarget_vertex:Rm,normal_fragment_begin:Cm,normal_fragment_maps:Pm,normal_pars_fragment:Lm,normal_pars_vertex:Im,normal_vertex:Dm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Bm,opaque_fragment:zm,packing:km,premultiplied_alpha_fragment:Hm,project_vertex:Vm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:$m,shadowmap_vertex:Zm,shadowmask_pars_fragment:Jm,skinbase_vertex:Km,skinning_pars_vertex:jm,skinning_vertex:Qm,skinnormal_vertex:tg,specularmap_fragment:eg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:sg,transmission_fragment:rg,transmission_pars_fragment:ag,uv_pars_fragment:og,uv_pars_vertex:cg,uv_vertex:lg,worldpos_vertex:hg,background_vert:ug,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:xg,distanceRGBA_vert:vg,distanceRGBA_frag:yg,equirect_vert:bg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:wg,meshbasic_vert:Eg,meshbasic_frag:Ag,meshlambert_vert:Tg,meshlambert_frag:Rg,meshmatcap_vert:Cg,meshmatcap_frag:Pg,meshnormal_vert:Lg,meshnormal_frag:Ig,meshphong_vert:Dg,meshphong_frag:Ng,meshphysical_vert:Ug,meshphysical_frag:Og,meshtoon_vert:Fg,meshtoon_frag:Bg,points_vert:zg,points_frag:kg,shadow_vert:Hg,shadow_frag:Vg,sprite_vert:Gg,sprite_frag:Wg},it={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Ln={basic:{uniforms:Ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ge([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ge([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ge([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ge([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ge([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ge([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ge([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ge([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ge([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ge([it.lights,it.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ln.physical={uniforms:Ge([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Yr={r:0,b:0,g:0};function Xg(n,t,e,i,s,r,o){let a=new $t(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(f,p){let w=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_a)?(h===void 0&&(h=new Ye(new tr(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ts(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ee.getTransfer(v.colorSpace)!==oe,(u!==v||d!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new gn(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ts(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function _(f,p){f.getRGB(Yr,Jh(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,_(a,c)},render:g}}function qg(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=f(null),l=c,h=!1;function u(P,O,H,Y,W){let X=!1;if(o){let K=_(Y,H,O);l!==K&&(l=K,m(l.object)),X=p(P,Y,H,W),X&&w(P,Y,H,W)}else{let K=O.wireframe===!0;(l.geometry!==Y.id||l.program!==H.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=H.id,l.wireframe=K,X=!0)}W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,G(P,O,H,Y),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,O,H){let Y=H.wireframe===!0,W=a[P.id];W===void 0&&(W={},a[P.id]=W);let X=W[O.id];X===void 0&&(X={},W[O.id]=X);let K=X[Y];return K===void 0&&(K=f(d()),X[Y]=K),K}function f(P){let O=[],H=[],Y=[];for(let W=0;W<s;W++)O[W]=0,H[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,O,H,Y){let W=l.attributes,X=O.attributes,K=0,tt=H.getAttributes();for(let lt in tt)if(tt[lt].location>=0){let $=W[lt],ot=X[lt];if(ot===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),$===void 0||$.attribute!==ot||ot&&$.data!==ot.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function w(P,O,H,Y){let W={},X=O.attributes,K=0,tt=H.getAttributes();for(let lt in tt)if(tt[lt].location>=0){let $=X[lt];$===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&($=P.instanceColor));let ot={};ot.attribute=$,$&&$.data&&(ot.data=$.data),W[lt]=ot,K++}l.attributes=W,l.attributesNum=K,l.index=Y}function v(){let P=l.newAttributes;for(let O=0,H=P.length;O<H;O++)P[O]=0}function R(P){A(P,0)}function A(P,O){let H=l.newAttributes,Y=l.enabledAttributes,W=l.attributeDivisors;H[P]=1,Y[P]===0&&(n.enableVertexAttribArray(P),Y[P]=1),W[P]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),W[P]=O)}function T(){let P=l.newAttributes,O=l.enabledAttributes;for(let H=0,Y=O.length;H<Y;H++)O[H]!==P[H]&&(n.disableVertexAttribArray(H),O[H]=0)}function E(P,O,H,Y,W,X,K){K===!0?n.vertexAttribIPointer(P,O,H,W,X):n.vertexAttribPointer(P,O,H,Y,W,X)}function G(P,O,H,Y){if(i.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let W=Y.attributes,X=H.getAttributes(),K=O.defaultAttributeValues;for(let tt in X){let lt=X[tt];if(lt.location>=0){let k=W[tt];if(k===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let $=k.normalized,ot=k.itemSize,xt=e.get(k);if(xt===void 0)continue;let _t=xt.buffer,Lt=xt.type,Dt=xt.bytesPerElement,Et=i.isWebGL2===!0&&(Lt===n.INT||Lt===n.UNSIGNED_INT||k.gpuType===Bh);if(k.isInterleavedBufferAttribute){let Wt=k.data,D=Wt.stride,ze=k.offset;if(Wt.isInstancedInterleavedBuffer){for(let yt=0;yt<lt.locationSize;yt++)A(lt.location+yt,Wt.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let yt=0;yt<lt.locationSize;yt++)R(lt.location+yt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let yt=0;yt<lt.locationSize;yt++)E(lt.location+yt,ot/lt.locationSize,Lt,$,D*Dt,(ze+ot/lt.locationSize*yt)*Dt,Et)}else{if(k.isInstancedBufferAttribute){for(let Wt=0;Wt<lt.locationSize;Wt++)A(lt.location+Wt,k.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Wt=0;Wt<lt.locationSize;Wt++)R(lt.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Wt=0;Wt<lt.locationSize;Wt++)E(lt.location+Wt,ot/lt.locationSize,Lt,$,ot*Dt,ot/lt.locationSize*Wt*Dt,Et)}}else if(K!==void 0){let $=K[tt];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(lt.location,$);break;case 3:n.vertexAttrib3fv(lt.location,$);break;case 4:n.vertexAttrib4fv(lt.location,$);break;default:n.vertexAttrib1fv(lt.location,$)}}}}T()}function b(){V();for(let P in a){let O=a[P];for(let H in O){let Y=O[H];for(let W in Y)g(Y[W].object),delete Y[W];delete O[H]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let O=a[P.id];for(let H in O){let Y=O[H];for(let W in Y)g(Y[W].object),delete Y[W];delete O[H]}delete a[P.id]}function z(P){for(let O in a){let H=a[O];if(H[P.id]===void 0)continue;let Y=H[P.id];for(let W in Y)g(Y[W].object),delete Y[W];delete H[P.id]}}function V(){et(),h=!0,l!==c&&(l=c,m(l.object))}function et(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:et,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:R,disableUnusedAttributes:T}}function Yg(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function $g(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,R=o||t.has("OES_texture_float"),A=v&&R,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:R,floatVertexTextures:A,maxSamples:T}}function Zg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new on,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{let w=r?0:i,v=w*4,R=p.clippingState||null;c.value=R,R=h(g,d,v,m);for(let A=0;A!==v;++A)R[A]=e[A];p.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,R=m;v!==_;++v,R+=4)o.copy(u[v]).applyMatrix4(w,a),o.normal.toArray(f,R),f[R+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Jg(n){let t=new WeakMap;function e(o,a){return a===No?o.mapping=Ss:a===Uo&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===No||a===Uo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Go(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Wo=class extends ua{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xs=4,fh=[.125,.215,.35,.446,.526,.582],Di=20,To=new Wo,ph=new $t,Ro=null,Co=0,Po=0,Li=(1+Math.sqrt(5))/2,ms=1/Li,mh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Li,ms),new L(0,Li,-ms),new L(ms,0,Li),new L(-ms,0,Li),new L(Li,ms,0),new L(-Li,ms,0)],pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro,Co,Po),t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Js,format:En,colorSpace:Yn,depthBuffer:!1},s=gh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=jg(r,t,e)}return s}_compileMaterial(t){let e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,i,s){let a=new qe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ph),h.toneMapping=di,h.autoClear=!1;let m=new Jn({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new Ye(new tr,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(ph),_=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;$r(s,w*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ss||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;$r(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,To)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mh[(s-1)%mh.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ye(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Di-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):Di;f>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Di}`);let p=[],w=0;for(let E=0;E<Di;++E){let G=E/_,b=Math.exp(-G*G/2);p.push(b),E===0?w+=b:E<f&&(w+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let R=this._sizeLods[s],A=3*R*(s>v-xs?s-v+xs:0),T=4*(this._cubeSize-R);$r(e,A,T,3*R,2*R),c.setRenderTarget(e),c.render(u,To)}};function Kg(n){let t=[],e=[],i=[],s=n,r=n-xs+1+fh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-xs?c=fh[o-n+xs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,w=new Float32Array(_*g*m),v=new Float32Array(f*g*m),R=new Float32Array(p*g*m);for(let T=0;T<m;T++){let E=T%3*2/3-1,G=T>2?0:-1,b=[E,G,0,E+2/3,G,0,E+2/3,G+1,0,E,G,0,E+2/3,G+1,0,E,G+1,0];w.set(b,_*g*T),v.set(d,f*g*T);let S=[T,T,T,T,T,T];R.set(S,p*g*T)}let A=new Bi;A.setAttribute("position",new mn(w,_)),A.setAttribute("uv",new mn(v,f)),A.setAttribute("faceIndex",new mn(R,p)),t.push(A),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function gh(n,t,e){let i=new $n(n,t,e);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jg(n,t,e){let i=new Float32Array(Di),s=new L(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function _h(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function xh(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function Qg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===No||c===Uo,h=c===Ss||c===ws;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new pa(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new pa(n));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function t0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function e0(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],n.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let v=0,R=w.length;v<R;v+=3){let A=w[v+0],T=w[v+1],E=w[v+2];d.push(A,T,T,E,E,A)}}else if(g!==void 0){let w=g.array;_=g.version;for(let v=0,R=w.length/3-1;v<R;v+=3){let A=v+0,T=v+1,E=v+2;d.push(A,T,T,E,E,A)}}else return;let f=new($h(d)?ha:la)(d,1);f.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,f)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function n0(n,t,e,i){let s=i.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*c),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let f,p;if(s)f=n,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*c,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let p=0;for(let w=0;w<_;w++)p+=g[w];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function i0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function s0(n,t){return n[0]-t[0]}function r0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function a0(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new De,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let w=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],G=0;w===!0&&(G=1),v===!0&&(G=2),R===!0&&(G=3);let b=h.attributes.position.count*G,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let z=new Float32Array(b*S*4*g),V=new oa(z,b,S,g);V.type=li,V.needsUpdate=!0;let et=G*4;for(let O=0;O<g;O++){let H=A[O],Y=T[O],W=E[O],X=b*S*4*O;for(let K=0;K<H.count;K++){let tt=K*et;w===!0&&(o.fromBufferAttribute(H,K),z[X+tt+0]=o.x,z[X+tt+1]=o.y,z[X+tt+2]=o.z,z[X+tt+3]=0),v===!0&&(o.fromBufferAttribute(Y,K),z[X+tt+4]=o.x,z[X+tt+5]=o.y,z[X+tt+6]=o.z,z[X+tt+7]=0),R===!0&&(o.fromBufferAttribute(W,K),z[X+tt+8]=o.x,z[X+tt+9]=o.y,z[X+tt+10]=o.z,z[X+tt+11]=W.itemSize===4?o.w:1)}}_={count:g,texture:V,size:new Yt(b,S)},r.set(h,_),h.addEventListener("dispose",P)}let f=0;for(let w=0;w<d.length;w++)f+=d[w];let p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let m=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){let R=g[v];R[0]=v,R[1]=d[v]}g.sort(r0);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(s0);let _=h.morphAttributes.position,f=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let R=a[v],A=R[0],T=R[1];A!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+v)!==_[A]&&h.setAttribute("morphTarget"+v,_[A]),f&&h.getAttribute("morphNormal"+v)!==f[A]&&h.setAttribute("morphNormal"+v,f[A]),s[v]=T,p+=T):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let w=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function o0(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ma=class extends An{constructor(t,e,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ui,h!==Ui&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ui&&(i=ci),i===void 0&&h===Es&&(i=Ni),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jh=new An,Qh=new ma(1,1);Qh.compareFunction=qh;var tu=new oa,eu=new Ho,nu=new da,vh=[],yh=[],bh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function Ps(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function va(n,t){let e=yh[t];e===void 0&&(e=new Int32Array(t),yh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function c0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function l0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function h0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function u0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function d0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),we(e,i)}}function f0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),we(e,i)}}function p0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;bh.set(i),n.uniformMatrix4fv(this.addr,!1,bh),we(e,i)}}function m0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function g0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function _0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function x0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function v0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function y0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function b0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function M0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function S0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Qh:jh;e.setTexture2D(t||r,s)}function w0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||eu,s)}function E0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nu,s)}function A0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tu,s)}function T0(n){switch(n){case 5126:return c0;case 35664:return l0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return y0;case 36295:return b0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return A0}}function R0(n,t){n.uniform1fv(this.addr,t)}function C0(n,t){let e=Ps(t,this.size,2);n.uniform2fv(this.addr,e)}function P0(n,t){let e=Ps(t,this.size,3);n.uniform3fv(this.addr,e)}function L0(n,t){let e=Ps(t,this.size,4);n.uniform4fv(this.addr,e)}function I0(n,t){let e=Ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function D0(n,t){let e=Ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function N0(n,t){let e=Ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function U0(n,t){n.uniform1iv(this.addr,t)}function O0(n,t){n.uniform2iv(this.addr,t)}function F0(n,t){n.uniform3iv(this.addr,t)}function B0(n,t){n.uniform4iv(this.addr,t)}function z0(n,t){n.uniform1uiv(this.addr,t)}function k0(n,t){n.uniform2uiv(this.addr,t)}function H0(n,t){n.uniform3uiv(this.addr,t)}function V0(n,t){n.uniform4uiv(this.addr,t)}function G0(n,t,e){let i=this.cache,s=t.length,r=va(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jh,r[o])}function W0(n,t,e){let i=this.cache,s=t.length,r=va(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||eu,r[o])}function X0(n,t,e){let i=this.cache,s=t.length,r=va(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nu,r[o])}function q0(n,t,e){let i=this.cache,s=t.length,r=va(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tu,r[o])}function Y0(n){switch(n){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return O0;case 35668:case 35672:return F0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}var Xo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}},qo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y0(e.type)}},Yo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function wh(n,t){n.seq.push(t),n.map[t.id]=t}function $0(n,t,e){let i=n.name,s=i.length;for(Lo.lastIndex=0;;){let r=Lo.exec(i),o=Lo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){wh(e,l===void 0?new Xo(a,n,t):new qo(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Yo(a),wh(e,u)),e=u}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$0(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Eh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Z0=37297,J0=0;function K0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function j0(n){let t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(n),i;switch(t===e?i="":t===ea&&e===ta?i="LinearDisplayP3ToLinearSRGB":t===ta&&e===ea&&(i="LinearSRGBToLinearDisplayP3"),n){case Yn:case xa:return[i,"LinearTransferOETF"];case Ie:case pc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ah(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+K0(n.getShaderSource(t),o)}else return s}function Q0(n,t){let e=j0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function t_(n,t){let e;switch(t){case sf:e="Linear";break;case rf:e="Reinhard";break;case af:e="OptimizedCineon";break;case of:e="ACESFilmic";break;case lf:e="AgX";break;case cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function e_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function n_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function i_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function s_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vs(n){return n!==""}function Th(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(n){return n.replace(r_,o_)}var a_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o_(n,t){let e=Ut[t];if(e===void 0){let i=a_.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(c_,l_)}function l_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function u_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ss:case ws:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function f_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oh:t="ENVMAP_BLENDING_MULTIPLY";break;case ef:t="ENVMAP_BLENDING_MIX";break;case nf:t="ENVMAP_BLENDING_ADD";break}return t}function p_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function m_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=h_(e),l=u_(e),h=d_(e),u=f_(e),d=p_(e),m=e.isWebGL2?"":e_(e),g=n_(e),_=i_(r),f=s.createProgram(),p,w,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),p.length>0&&(p+=`
`),w=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),w.length>0&&(w+=`
`)):(p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),w=[m,Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Ut.tonemapping_pars_fragment:"",e.toneMapping!==di?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=$o(o),o=Th(o,e),o=Rh(o,e),a=$o(a),a=Th(a,e),a=Rh(a,e),o=Ch(o),a=Ch(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let R=v+p+o,A=v+w+a,T=Eh(s,s.VERTEX_SHADER,R),E=Eh(s,s.FRAGMENT_SHADER,A);s.attachShader(f,T),s.attachShader(f,E),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function G(V){if(n.debug.checkShaderErrors){let et=s.getProgramInfoLog(f).trim(),P=s.getShaderInfoLog(T).trim(),O=s.getShaderInfoLog(E).trim(),H=!0,Y=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,T,E);else{let W=Ah(s,T,"vertex"),X=Ah(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+et+`
`+W+`
`+X)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(P===""||O==="")&&(Y=!1);Y&&(V.diagnostics={runnable:H,programLog:et,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:w}})}s.deleteShader(T),s.deleteShader(E),b=new Ms(s,f),S=s_(s,f)}let b;this.getUniforms=function(){return b===void 0&&G(this),b};let S;this.getAttributes=function(){return S===void 0&&G(this),S};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(f,Z0)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=E,this}var g_=0,Zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Jo(t),e.set(t,i)),i}},Jo=class{constructor(t){this.id=g_++,this.code=t,this.usedTimes=0}};function __(n,t,e,i,s,r,o){let a=new Qs,c=new Zo,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function f(b,S,z,V,et){let P=V.fog,O=et.geometry,H=b.isMeshStandardMaterial?V.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),W=Y&&Y.mapping===_a?Y.image.height:null,X=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=K!==void 0?K.length:0,lt=0;O.morphAttributes.position!==void 0&&(lt=1),O.morphAttributes.normal!==void 0&&(lt=2),O.morphAttributes.color!==void 0&&(lt=3);let k,$,ot,xt;if(X){let ke=Ln[X];k=ke.vertexShader,$=ke.fragmentShader}else k=b.vertexShader,$=b.fragmentShader,c.update(b),ot=c.getVertexShaderID(b),xt=c.getFragmentShaderID(b);let _t=n.getRenderTarget(),Lt=et.isInstancedMesh===!0,Dt=et.isBatchedMesh===!0,Et=!!b.map,Wt=!!b.matcap,D=!!Y,ze=!!b.aoMap,yt=!!b.lightMap,Ct=!!b.bumpMap,pt=!!b.normalMap,ue=!!b.displacementMap,Ft=!!b.emissiveMap,M=!!b.metalnessMap,x=!!b.roughnessMap,U=b.anisotropy>0,j=b.clearcoat>0,J=b.iridescence>0,Q=b.sheen>0,mt=b.transmission>0,at=U&&!!b.anisotropyMap,ut=j&&!!b.clearcoatMap,wt=j&&!!b.clearcoatNormalMap,Bt=j&&!!b.clearcoatRoughnessMap,Z=J&&!!b.iridescenceMap,te=J&&!!b.iridescenceThicknessMap,Gt=Q&&!!b.sheenColorMap,Rt=Q&&!!b.sheenRoughnessMap,vt=!!b.specularMap,dt=!!b.specularColorMap,Nt=!!b.specularIntensityMap,Zt=mt&&!!b.transmissionMap,pe=mt&&!!b.thicknessMap,kt=!!b.gradientMap,nt=!!b.alphaMap,C=b.alphaTest>0,st=!!b.alphaHash,rt=!!b.extensions,At=!!O.attributes.uv1,bt=!!O.attributes.uv2,se=!!O.attributes.uv3,re=di;return b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(re=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:$,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Dt,instancing:Lt,instancingColor:Lt&&et.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Yn,map:Et,matcap:Wt,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:W,aoMap:ze,lightMap:yt,bumpMap:Ct,normalMap:pt,displacementMap:d&&ue,emissiveMap:Ft,normalMapObjectSpace:pt&&b.normalMapType===Mf,normalMapTangentSpace:pt&&b.normalMapType===bf,metalnessMap:M,roughnessMap:x,anisotropy:U,anisotropyMap:at,clearcoat:j,clearcoatMap:ut,clearcoatNormalMap:wt,clearcoatRoughnessMap:Bt,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:Q,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:vt,specularColorMap:dt,specularIntensityMap:Nt,transmission:mt,transmissionMap:Zt,thicknessMap:pe,gradientMap:kt,opaque:b.transparent===!1&&b.blending===ys,alphaMap:nt,alphaTest:C,alphaHash:st,combine:b.combine,mapUv:Et&&_(b.map.channel),aoMapUv:ze&&_(b.aoMap.channel),lightMapUv:yt&&_(b.lightMap.channel),bumpMapUv:Ct&&_(b.bumpMap.channel),normalMapUv:pt&&_(b.normalMap.channel),displacementMapUv:ue&&_(b.displacementMap.channel),emissiveMapUv:Ft&&_(b.emissiveMap.channel),metalnessMapUv:M&&_(b.metalnessMap.channel),roughnessMapUv:x&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:ut&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(b.sheenRoughnessMap.channel),specularMapUv:vt&&_(b.specularMap.channel),specularColorMapUv:dt&&_(b.specularColorMap.channel),specularIntensityMapUv:Nt&&_(b.specularIntensityMap.channel),transmissionMapUv:Zt&&_(b.transmissionMap.channel),thicknessMapUv:pe&&_(b.thicknessMap.channel),alphaMapUv:nt&&_(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pt||U),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:bt,vertexUv3s:se,pointsUvs:et.isPoints===!0&&!!O.attributes.uv&&(Et||nt),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:et.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Et&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wn,flipSided:b.side===Qe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:rt&&b.extensions.derivatives===!0,extensionFragDepth:rt&&b.extensions.fragDepth===!0,extensionDrawBuffers:rt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let z in b.defines)S.push(z),S.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(w(S,b),v(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function R(b){let S=g[b.type],z;if(S){let V=Ln[S];z=ap.clone(V.uniforms)}else z=b.uniforms;return z}function A(b,S){let z;for(let V=0,et=l.length;V<et;V++){let P=l[V];if(P.cacheKey===S){z=P,++z.usedTimes;break}}return z===void 0&&(z=new m_(n,S,b,r),l.push(z)),z}function T(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),b.destroy()}}function E(b){c.remove(b)}function G(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:G}}function x_(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function v_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Lh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ih(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,m,g,_,f){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||v_),i.length>1&&i.sort(d||Lh),s.length>1&&s.sort(d||Lh)}function h(){for(let u=t,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function y_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ih,n.set(i,[o])):s>=r.length?(o=new Ih,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function b_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new $t};break;case"SpotLight":e={position:new L,direction:new L,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function M_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var S_=0;function w_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function E_(n,t){let e=new b_,i=M_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new Jt,a=new Jt;function c(h,u){let d=0,m=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let _=0,f=0,p=0,w=0,v=0,R=0,A=0,T=0,E=0,G=0,b=0;h.sort(w_);let S=u===!0?Math.PI:1;for(let V=0,et=h.length;V<et;V++){let P=h[V],O=P.color,H=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*H*S,m+=O.g*H*S,g+=O.b*H*S;else if(P.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(P.sh.coefficients[X],H);b++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let K=P.shadow,tt=i.get(P);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,s.directionalShadow[_]=tt,s.directionalShadowMap[_]=W,s.directionalShadowMatrix[_]=P.shadow.matrix,R++}s.directional[_]=X,_++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(H*S),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,s.spot[p]=X;let K=P.shadow;if(P.map&&(s.spotLightMap[E]=P.map,E++,K.updateMatrices(P),P.castShadow&&G++),s.spotLightMatrix[p]=K.matrix,P.castShadow){let tt=i.get(P);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,s.spotShadow[p]=tt,s.spotShadowMap[p]=W,T++}p++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(O).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),s.rectArea[w]=X,w++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*S),X.distance=P.distance,X.decay=P.decay,P.castShadow){let K=P.shadow,tt=i.get(P);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,s.pointShadow[f]=tt,s.pointShadowMap[f]=W,s.pointShadowMatrix[f]=P.shadow.matrix,A++}s.point[f]=X,f++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(H*S),X.groundColor.copy(P.groundColor).multiplyScalar(H*S),s.hemi[v]=X,v++}}w>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let z=s.hash;(z.directionalLength!==_||z.pointLength!==f||z.spotLength!==p||z.rectAreaLength!==w||z.hemiLength!==v||z.numDirectionalShadows!==R||z.numPointShadows!==A||z.numSpotShadows!==T||z.numSpotMaps!==E||z.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=w,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=T+E-G,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=b,z.directionalLength=_,z.pointLength=f,z.spotLength=p,z.rectAreaLength=w,z.hemiLength=v,z.numDirectionalShadows=R,z.numPointShadows=A,z.numSpotShadows=T,z.numSpotMaps=E,z.numLightProbes=b,s.version=S_++)}function l(h,u){let d=0,m=0,g=0,_=0,f=0,p=u.matrixWorldInverse;for(let w=0,v=h.length;w<v;w++){let R=h[w];if(R.isDirectionalLight){let A=s.directional[d];A.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(R.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(R.isRectAreaLight){let A=s.rectArea[_];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(R.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){let A=s.point[m];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(p),m++}else if(R.isHemisphereLight){let A=s.hemi[f];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:s}}function Dh(n,t){let e=new E_(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function A_(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Dh(n,t),e.set(r,[c])):o>=a.length?(c=new Dh(n,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ko=class extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`;function C_(n,t,e){let i=new fa,s=new Yt,r=new Yt,o=new De,a=new Ko({depthPacking:yf}),c=new jo,l={},h=e.maxTextureSize,u={[pi]:Qe,[Qe]:pi,[Wn]:Wn},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:T_,fragmentShader:R_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Bi;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ye(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(T,E,G){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),S=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ui),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let et=p!==Gn&&this.type===Gn,P=p===Gn&&this.type!==Gn;for(let O=0,H=T.length;O<H;O++){let Y=T[O],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let X=W.getFrameExtents();if(s.multiply(X),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||et===!0||P===!0){let tt=this.type!==Gn?{minFilter:We,magFilter:We}:{};W.map!==null&&W.map.dispose(),W.map=new $n(s.x,s.y,tt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let K=W.getViewportCount();for(let tt=0;tt<K;tt++){let lt=W.getViewport(tt);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),V.viewport(o),W.updateMatrices(Y,tt),i=W.getFrustum(),R(E,G,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Gn&&w(W,G),W.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(b,S,z)};function w(T,E){let G=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,G,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,G,m,_,null)}function v(T,E,G,b){let S=null,z=G.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)S=z;else if(S=G.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let V=S.uuid,et=E.uuid,P=l[V];P===void 0&&(P={},l[V]=P);let O=P[et];O===void 0&&(O=S.clone(),P[et]=O,E.addEventListener("dispose",A)),S=O}if(S.visible=E.visible,S.wireframe=E.wireframe,b===Gn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,G.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=n.properties.get(S);V.light=G}return S}function R(T,E,G,b,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Gn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld);let et=t.update(T),P=T.material;if(Array.isArray(P)){let O=et.groups;for(let H=0,Y=O.length;H<Y;H++){let W=O[H],X=P[W.materialIndex];if(X&&X.visible){let K=v(T,X,b,S);T.onBeforeShadow(n,T,E,G,et,K,W),n.renderBufferDirect(G,null,et,K,T,W),T.onAfterShadow(n,T,E,G,et,K,W)}}}else if(P.visible){let O=v(T,P,b,S);T.onBeforeShadow(n,T,E,G,et,O,null),n.renderBufferDirect(G,null,et,O,T,null),T.onAfterShadow(n,T,E,G,et,O,null)}}let V=T.children;for(let et=0,P=V.length;et<P;et++)R(V[et],E,G,b,S)}function A(T){T.target.removeEventListener("dispose",A);for(let G in l){let b=l[G],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function P_(n,t,e){let i=e.isWebGL2;function s(){let C=!1,st=new De,rt=null,At=new De(0,0,0,0);return{setMask:function(bt){rt!==bt&&!C&&(n.colorMask(bt,bt,bt,bt),rt=bt)},setLocked:function(bt){C=bt},setClear:function(bt,se,re,Ae,ke){ke===!0&&(bt*=Ae,se*=Ae,re*=Ae),st.set(bt,se,re,Ae),At.equals(st)===!1&&(n.clearColor(bt,se,re,Ae),At.copy(st))},reset:function(){C=!1,rt=null,At.set(-1,0,0,0)}}}function r(){let C=!1,st=null,rt=null,At=null;return{setTest:function(bt){bt?Dt(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(bt){st!==bt&&!C&&(n.depthMask(bt),st=bt)},setFunc:function(bt){if(rt!==bt){switch(bt){case $d:n.depthFunc(n.NEVER);break;case Zd:n.depthFunc(n.ALWAYS);break;case Jd:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case Kd:n.depthFunc(n.EQUAL);break;case jd:n.depthFunc(n.GEQUAL);break;case Qd:n.depthFunc(n.GREATER);break;case tf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=bt}},setLocked:function(bt){C=bt},setClear:function(bt){At!==bt&&(n.clearDepth(bt),At=bt)},reset:function(){C=!1,st=null,rt=null,At=null}}}function o(){let C=!1,st=null,rt=null,At=null,bt=null,se=null,re=null,Ae=null,ke=null;return{setTest:function(ae){C||(ae?Dt(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(ae){st!==ae&&!C&&(n.stencilMask(ae),st=ae)},setFunc:function(ae,He,Pn){(rt!==ae||At!==He||bt!==Pn)&&(n.stencilFunc(ae,He,Pn),rt=ae,At=He,bt=Pn)},setOp:function(ae,He,Pn){(se!==ae||re!==He||Ae!==Pn)&&(n.stencilOp(ae,He,Pn),se=ae,re=He,Ae=Pn)},setLocked:function(ae){C=ae},setClear:function(ae){ke!==ae&&(n.clearStencil(ae),ke=ae)},reset:function(){C=!1,st=null,rt=null,At=null,bt=null,se=null,re=null,Ae=null,ke=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,_=[],f=null,p=!1,w=null,v=null,R=null,A=null,T=null,E=null,G=null,b=new $t(0,0,0),S=0,z=!1,V=null,et=null,P=null,O=null,H=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=X>=2);let tt=null,lt={},k=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),ot=new De().fromArray(k),xt=new De().fromArray($);function _t(C,st,rt,At){let bt=new Uint8Array(4),se=n.createTexture();n.bindTexture(C,se),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<rt;re++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(st,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(st+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return se}let Lt={};Lt[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),Lt[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Lt[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Lt[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Dt(n.DEPTH_TEST),c.setFunc(Jr),Ft(!1),M(dl),Dt(n.CULL_FACE),pt(ui);function Dt(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function Et(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Wt(C,st){return m[C]!==st?(n.bindFramebuffer(C,st),m[C]=st,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=st),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=st)),!0):!1}function D(C,st){let rt=_,At=!1;if(C)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),C.isWebGLMultipleRenderTargets){let bt=C.texture;if(rt.length!==bt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let se=0,re=bt.length;se<re;se++)rt[se]=n.COLOR_ATTACHMENT0+se;rt.length=bt.length,At=!0}}else rt[0]!==n.COLOR_ATTACHMENT0&&(rt[0]=n.COLOR_ATTACHMENT0,At=!0);else rt[0]!==n.BACK&&(rt[0]=n.BACK,At=!0);At&&(e.isWebGL2?n.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function ze(C){return f!==C?(n.useProgram(C),f=C,!0):!1}let yt={[Ii]:n.FUNC_ADD,[Dd]:n.FUNC_SUBTRACT,[Nd]:n.FUNC_REVERSE_SUBTRACT};if(i)yt[gl]=n.MIN,yt[_l]=n.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(yt[gl]=C.MIN_EXT,yt[_l]=C.MAX_EXT)}let Ct={[Ud]:n.ZERO,[Od]:n.ONE,[Fd]:n.SRC_COLOR,[Io]:n.SRC_ALPHA,[Gd]:n.SRC_ALPHA_SATURATE,[Hd]:n.DST_COLOR,[zd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[Do]:n.ONE_MINUS_SRC_ALPHA,[Vd]:n.ONE_MINUS_DST_COLOR,[kd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(C,st,rt,At,bt,se,re,Ae,ke,ae){if(C===ui){p===!0&&(Et(n.BLEND),p=!1);return}if(p===!1&&(Dt(n.BLEND),p=!0),C!==Id){if(C!==w||ae!==z){if((v!==Ii||T!==Ii)&&(n.blendEquation(n.FUNC_ADD),v=Ii,T=Ii),ae)switch(C){case ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.ONE,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,A=null,E=null,G=null,b.set(0,0,0),S=0,w=C,z=ae}return}bt=bt||st,se=se||rt,re=re||At,(st!==v||bt!==T)&&(n.blendEquationSeparate(yt[st],yt[bt]),v=st,T=bt),(rt!==R||At!==A||se!==E||re!==G)&&(n.blendFuncSeparate(Ct[rt],Ct[At],Ct[se],Ct[re]),R=rt,A=At,E=se,G=re),(Ae.equals(b)===!1||ke!==S)&&(n.blendColor(Ae.r,Ae.g,Ae.b,ke),b.copy(Ae),S=ke),w=C,z=!1}function ue(C,st){C.side===Wn?Et(n.CULL_FACE):Dt(n.CULL_FACE);let rt=C.side===Qe;st&&(rt=!rt),Ft(rt),C.blending===ys&&C.transparent===!1?pt(ui):pt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let At=C.stencilWrite;l.setTest(At),At&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),U(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Dt(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){V!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),V=C)}function M(C){C!==Cd?(Dt(n.CULL_FACE),C!==et&&(C===dl?n.cullFace(n.BACK):C===Pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),et=C}function x(C){C!==P&&(W&&n.lineWidth(C),P=C)}function U(C,st,rt){C?(Dt(n.POLYGON_OFFSET_FILL),(O!==st||H!==rt)&&(n.polygonOffset(st,rt),O=st,H=rt)):Et(n.POLYGON_OFFSET_FILL)}function j(C){C?Dt(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function J(C){C===void 0&&(C=n.TEXTURE0+Y-1),tt!==C&&(n.activeTexture(C),tt=C)}function Q(C,st,rt){rt===void 0&&(tt===null?rt=n.TEXTURE0+Y-1:rt=tt);let At=lt[rt];At===void 0&&(At={type:void 0,texture:void 0},lt[rt]=At),(At.type!==C||At.texture!==st)&&(tt!==rt&&(n.activeTexture(rt),tt=rt),n.bindTexture(C,st||Lt[C]),At.type=C,At.texture=st)}function mt(){let C=lt[tt];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function at(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Rt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(C){ot.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),ot.copy(C))}function Zt(C){xt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),xt.copy(C))}function pe(C,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let At=rt.get(C);At===void 0&&(At=n.getUniformBlockIndex(st,C.name),rt.set(C,At))}function kt(C,st){let At=u.get(st).get(C);h.get(st)!==At&&(n.uniformBlockBinding(st,At,C.__bindingPointIndex),h.set(st,At))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},tt=null,lt={},m={},g=new WeakMap,_=[],f=null,p=!1,w=null,v=null,R=null,A=null,T=null,E=null,G=null,b=new $t(0,0,0),S=0,z=!1,V=null,et=null,P=null,O=null,H=null,ot.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Dt,disable:Et,bindFramebuffer:Wt,drawBuffers:D,useProgram:ze,setBlending:pt,setMaterial:ue,setFlipSided:Ft,setCullFace:M,setLineWidth:x,setPolygonOffset:U,setScissorTest:j,activeTexture:J,bindTexture:Q,unbindTexture:mt,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:vt,texImage3D:dt,updateUBOMapping:pe,uniformBlockBinding:kt,texStorage2D:Gt,texStorage3D:Rt,texSubImage2D:wt,texSubImage3D:Bt,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:Nt,viewport:Zt,reset:nt}}function L_(n,t,e,i,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return m?new OffscreenCanvas(M,x):sa("canvas")}function _(M,x,U,j){let J=1;if((M.width>j||M.height>j)&&(J=j/Math.max(M.width,M.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let Q=x?ia:Math.floor,mt=Q(J*M.width),at=Q(J*M.height);u===void 0&&(u=g(mt,at));let ut=U?g(mt,at):u;return ut.width=mt,ut.height=at,ut.getContext("2d").drawImage(M,0,0,mt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+mt+"x"+at+")."),ut}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return zo(M.width)&&zo(M.height)}function p(M){return a?!1:M.wrapS!==wn||M.wrapT!==wn||M.minFilter!==We&&M.minFilter!==fn}function w(M,x){return M.generateMipmaps&&x&&M.minFilter!==We&&M.minFilter!==fn}function v(M){n.generateMipmap(M)}function R(M,x,U,j,J=!1){if(a===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Q=x;if(x===n.RED&&(U===n.FLOAT&&(Q=n.R32F),U===n.HALF_FLOAT&&(Q=n.R16F),U===n.UNSIGNED_BYTE&&(Q=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.R8UI),U===n.UNSIGNED_SHORT&&(Q=n.R16UI),U===n.UNSIGNED_INT&&(Q=n.R32UI),U===n.BYTE&&(Q=n.R8I),U===n.SHORT&&(Q=n.R16I),U===n.INT&&(Q=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Q=n.RG32F),U===n.HALF_FLOAT&&(Q=n.RG16F),U===n.UNSIGNED_BYTE&&(Q=n.RG8)),x===n.RGBA){let mt=J?Qr:ee.getTransfer(j);U===n.FLOAT&&(Q=n.RGBA32F),U===n.HALF_FLOAT&&(Q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Q=mt===oe?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function A(M,x,U){return w(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==We&&M.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function T(M){return M===We||M===xl||M===no?n.NEAREST:n.LINEAR}function E(M){let x=M.target;x.removeEventListener("dispose",E),b(x),x.isVideoTexture&&h.delete(x)}function G(M){let x=M.target;x.removeEventListener("dispose",G),z(x)}function b(M){let x=i.get(M);if(x.__webglInit===void 0)return;let U=M.source,j=d.get(U);if(j){let J=j[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(M),Object.keys(j).length===0&&d.delete(U)}i.remove(M)}function S(M){let x=i.get(M);n.deleteTexture(x.__webglTexture);let U=M.source,j=d.get(U);delete j[x.__cacheKey],o.memory.textures--}function z(M){let x=M.texture,U=i.get(M),j=i.get(x);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let Q=0;Q<U.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(U.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)n.deleteFramebuffer(U.__webglFramebuffer[J]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,Q=x.length;J<Q;J++){let mt=i.get(x[J]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(x[J])}i.remove(x),i.remove(M)}let V=0;function et(){V=0}function P(){let M=V;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),V+=1,M}function O(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function H(M,x){let U=i.get(M);if(M.isVideoTexture&&ue(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){let j=M.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(U,M,x);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function Y(M,x){let U=i.get(M);if(M.version>0&&U.__version!==M.version){ot(U,M,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function W(M,x){let U=i.get(M);if(M.version>0&&U.__version!==M.version){ot(U,M,x);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function X(M,x){let U=i.get(M);if(M.version>0&&U.__version!==M.version){xt(U,M,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}let K={[Oo]:n.REPEAT,[wn]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},tt={[We]:n.NEAREST,[xl]:n.NEAREST_MIPMAP_NEAREST,[no]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[hf]:n.LINEAR_MIPMAP_NEAREST,[Zs]:n.LINEAR_MIPMAP_LINEAR},lt={[Sf]:n.NEVER,[Cf]:n.ALWAYS,[wf]:n.LESS,[qh]:n.LEQUAL,[Ef]:n.EQUAL,[Rf]:n.GEQUAL,[Af]:n.GREATER,[Tf]:n.NOTEQUAL};function k(M,x,U){if(U?(n.texParameteri(M,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,K[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,tt[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,tt[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==wn||x.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,T(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==We&&x.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let j=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===We||x.minFilter!==no&&x.minFilter!==Zs||x.type===li&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Js&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function $(M,x){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",E));let j=x.source,J=d.get(j);J===void 0&&(J={},d.set(j,J));let Q=O(x);if(Q!==M.__cacheKey){J[Q]===void 0&&(J[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[Q].usedTimes++;let mt=J[M.__cacheKey];mt!==void 0&&(J[M.__cacheKey].usedTimes--,mt.usedTimes===0&&S(x)),M.__cacheKey=Q,M.__webglTexture=J[Q].texture}return U}function ot(M,x,U){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);let J=$(M,x),Q=x.source;e.bindTexture(j,M.__webglTexture,n.TEXTURE0+U);let mt=i.get(Q);if(Q.version!==mt.__version||J===!0){e.activeTexture(n.TEXTURE0+U);let at=ee.getPrimaries(ee.workingColorSpace),ut=x.colorSpace===pn?null:ee.getPrimaries(x.colorSpace),wt=x.colorSpace===pn||at===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Bt=p(x)&&f(x.image)===!1,Z=_(x.image,Bt,!1,s.maxTextureSize);Z=Ft(x,Z);let te=f(Z)||a,Gt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),vt=R(x.internalFormat,Gt,Rt,x.colorSpace,x.isVideoTexture);k(j,x,te);let dt,Nt=x.mipmaps,Zt=a&&x.isVideoTexture!==!0&&vt!==Wh,pe=mt.__version===void 0||J===!0,kt=A(x,Z,te);if(x.isDepthTexture)vt=n.DEPTH_COMPONENT,a?x.type===li?vt=n.DEPTH_COMPONENT32F:x.type===ci?vt=n.DEPTH_COMPONENT24:x.type===Ni?vt=n.DEPTH24_STENCIL8:vt=n.DEPTH_COMPONENT16:x.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ui&&vt===n.DEPTH_COMPONENT&&x.type!==fc&&x.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ci,Rt=r.convert(x.type)),x.format===Es&&vt===n.DEPTH_COMPONENT&&(vt=n.DEPTH_STENCIL,x.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ni,Rt=r.convert(x.type))),pe&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,vt,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,vt,Z.width,Z.height,0,Gt,Rt,null));else if(x.isDataTexture)if(Nt.length>0&&te){Zt&&pe&&e.texStorage2D(n.TEXTURE_2D,kt,vt,Nt[0].width,Nt[0].height);for(let nt=0,C=Nt.length;nt<C;nt++)dt=Nt[nt],Zt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,dt.width,dt.height,Gt,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,nt,vt,dt.width,dt.height,0,Gt,Rt,dt.data);x.generateMipmaps=!1}else Zt?(pe&&e.texStorage2D(n.TEXTURE_2D,kt,vt,Z.width,Z.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Gt,Rt,Z.data)):e.texImage2D(n.TEXTURE_2D,0,vt,Z.width,Z.height,0,Gt,Rt,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Zt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,vt,Nt[0].width,Nt[0].height,Z.depth);for(let nt=0,C=Nt.length;nt<C;nt++)dt=Nt[nt],x.format!==En?Gt!==null?Zt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,Z.depth,Gt,dt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,vt,dt.width,dt.height,Z.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,Z.depth,Gt,Rt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,vt,dt.width,dt.height,Z.depth,0,Gt,Rt,dt.data)}else{Zt&&pe&&e.texStorage2D(n.TEXTURE_2D,kt,vt,Nt[0].width,Nt[0].height);for(let nt=0,C=Nt.length;nt<C;nt++)dt=Nt[nt],x.format!==En?Gt!==null?Zt?e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,dt.width,dt.height,Gt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,vt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,dt.width,dt.height,Gt,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,nt,vt,dt.width,dt.height,0,Gt,Rt,dt.data)}else if(x.isDataArrayTexture)Zt?(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,vt,Z.width,Z.height,Z.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Gt,Rt,Z.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,Z.width,Z.height,Z.depth,0,Gt,Rt,Z.data);else if(x.isData3DTexture)Zt?(pe&&e.texStorage3D(n.TEXTURE_3D,kt,vt,Z.width,Z.height,Z.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Gt,Rt,Z.data)):e.texImage3D(n.TEXTURE_3D,0,vt,Z.width,Z.height,Z.depth,0,Gt,Rt,Z.data);else if(x.isFramebufferTexture){if(pe)if(Zt)e.texStorage2D(n.TEXTURE_2D,kt,vt,Z.width,Z.height);else{let nt=Z.width,C=Z.height;for(let st=0;st<kt;st++)e.texImage2D(n.TEXTURE_2D,st,vt,nt,C,0,Gt,Rt,null),nt>>=1,C>>=1}}else if(Nt.length>0&&te){Zt&&pe&&e.texStorage2D(n.TEXTURE_2D,kt,vt,Nt[0].width,Nt[0].height);for(let nt=0,C=Nt.length;nt<C;nt++)dt=Nt[nt],Zt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Gt,Rt,dt):e.texImage2D(n.TEXTURE_2D,nt,vt,Gt,Rt,dt);x.generateMipmaps=!1}else Zt?(pe&&e.texStorage2D(n.TEXTURE_2D,kt,vt,Z.width,Z.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Gt,Rt,Z)):e.texImage2D(n.TEXTURE_2D,0,vt,Gt,Rt,Z);w(x,te)&&v(j),mt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function xt(M,x,U){if(x.image.length!==6)return;let j=$(M,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+U);let Q=i.get(J);if(J.version!==Q.__version||j===!0){e.activeTexture(n.TEXTURE0+U);let mt=ee.getPrimaries(ee.workingColorSpace),at=x.colorSpace===pn?null:ee.getPrimaries(x.colorSpace),ut=x.colorSpace===pn||mt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let wt=x.isCompressedTexture||x.image[0].isCompressedTexture,Bt=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let nt=0;nt<6;nt++)!wt&&!Bt?Z[nt]=_(x.image[nt],!1,!0,s.maxCubemapSize):Z[nt]=Bt?x.image[nt].image:x.image[nt],Z[nt]=Ft(x,Z[nt]);let te=Z[0],Gt=f(te)||a,Rt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),dt=R(x.internalFormat,Rt,vt,x.colorSpace),Nt=a&&x.isVideoTexture!==!0,Zt=Q.__version===void 0||j===!0,pe=A(x,te,Gt);k(n.TEXTURE_CUBE_MAP,x,Gt);let kt;if(wt){Nt&&Zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pe,dt,te.width,te.height);for(let nt=0;nt<6;nt++){kt=Z[nt].mipmaps;for(let C=0;C<kt.length;C++){let st=kt[C];x.format!==En?Rt!==null?Nt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,Rt,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,dt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,Rt,vt,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,dt,st.width,st.height,0,Rt,vt,st.data)}}}else{kt=x.mipmaps,Nt&&Zt&&(kt.length>0&&pe++,e.texStorage2D(n.TEXTURE_CUBE_MAP,pe,dt,Z[0].width,Z[0].height));for(let nt=0;nt<6;nt++)if(Bt){Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Z[nt].width,Z[nt].height,Rt,vt,Z[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,Z[nt].width,Z[nt].height,0,Rt,vt,Z[nt].data);for(let C=0;C<kt.length;C++){let rt=kt[C].image[nt].image;Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,rt.width,rt.height,Rt,vt,rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,dt,rt.width,rt.height,0,Rt,vt,rt.data)}}else{Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt,vt,Z[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,Rt,vt,Z[nt]);for(let C=0;C<kt.length;C++){let st=kt[C];Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,Rt,vt,st.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,dt,Rt,vt,st.image[nt])}}}w(x,Gt)&&v(n.TEXTURE_CUBE_MAP),Q.__version=J.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _t(M,x,U,j,J,Q){let mt=r.convert(U.format,U.colorSpace),at=r.convert(U.type),ut=R(U.internalFormat,mt,at,U.colorSpace);if(!i.get(x).__hasExternalTextures){let Bt=Math.max(1,x.width>>Q),Z=Math.max(1,x.height>>Q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,Q,ut,Bt,Z,x.depth,0,mt,at,null):e.texImage2D(J,Q,ut,Bt,Z,0,mt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),pt(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,i.get(U).__webglTexture,0,Ct(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,i.get(U).__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(M,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let j=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||pt(x)){let J=x.depthTexture;J&&J.isDepthTexture&&(J.type===li?j=n.DEPTH_COMPONENT32F:J.type===ci&&(j=n.DEPTH_COMPONENT24));let Q=Ct(x);pt(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,j,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,j,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let j=Ct(x);U&&pt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,x.width,x.height):pt(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let j=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<j.length;J++){let Q=j[J],mt=r.convert(Q.format,Q.colorSpace),at=r.convert(Q.type),ut=R(Q.internalFormat,mt,at,Q.colorSpace),wt=Ct(x);U&&pt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,ut,x.width,x.height):pt(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let j=i.get(x.depthTexture).__webglTexture,J=Ct(x);if(x.depthTexture.format===Ui)pt(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===Es)pt(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Et(M){let x=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Dt(x.__webglFramebuffer,M)}else if(U){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]=n.createRenderbuffer(),Lt(x.__webglDepthbuffer[j],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Lt(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(M,x,U){let j=i.get(M);x!==void 0&&_t(j.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Et(M)}function D(M){let x=M.texture,U=i.get(M),j=i.get(x);M.addEventListener("dispose",G),M.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,o.memory.textures++);let J=M.isWebGLCubeRenderTarget===!0,Q=M.isWebGLMultipleRenderTargets===!0,mt=f(M)||a;if(J){U.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[at]=[];for(let ut=0;ut<x.mipmaps.length;ut++)U.__webglFramebuffer[at][ut]=n.createFramebuffer()}else U.__webglFramebuffer[at]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)U.__webglFramebuffer[at]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Q)if(s.drawBuffers){let at=M.texture;for(let ut=0,wt=at.length;ut<wt;ut++){let Bt=i.get(at[ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&pt(M)===!1){let at=Q?x:[x];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){let wt=at[ut];U.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ut]);let Bt=r.convert(wt.format,wt.colorSpace),Z=r.convert(wt.type),te=R(wt.internalFormat,Bt,Z,wt.colorSpace,M.isXRRenderTarget===!0),Gt=Ct(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,te,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,U.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),k(n.TEXTURE_CUBE_MAP,x,mt);for(let at=0;at<6;at++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(U.__webglFramebuffer[at][ut],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else _t(U.__webglFramebuffer[at],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);w(x,mt)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let at=M.texture;for(let ut=0,wt=at.length;ut<wt;ut++){let Bt=at[ut],Z=i.get(Bt);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture),k(n.TEXTURE_2D,Bt,mt),_t(U.__webglFramebuffer,M,Bt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),w(Bt,mt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?at=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,j.__webglTexture),k(at,x,mt),a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(U.__webglFramebuffer[ut],M,x,n.COLOR_ATTACHMENT0,at,ut);else _t(U.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,at,0);w(x,mt)&&v(at),e.unbindTexture()}M.depthBuffer&&Et(M)}function ze(M){let x=f(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0,J=U.length;j<J;j++){let Q=U[j];if(w(Q,x)){let mt=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,at=i.get(Q).__webglTexture;e.bindTexture(mt,at),v(mt),e.unbindTexture()}}}function yt(M){if(a&&M.samples>0&&pt(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,j=M.height,J=n.COLOR_BUFFER_BIT,Q=[],mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(M),ut=M.isWebGLMultipleRenderTargets===!0;if(ut)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){Q.push(n.COLOR_ATTACHMENT0+wt),M.depthBuffer&&Q.push(mt);let Bt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Bt===!1&&(M.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ut&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[wt]),Bt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[mt])),ut){let Z=i.get(x[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,U,j,0,0,U,j,J,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,at.__webglColorRenderbuffer[wt]);let Bt=i.get(x[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Ct(M){return Math.min(s.maxSamples,M.samples)}function pt(M){let x=i.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ue(M){let x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function Ft(M,x){let U=M.colorSpace,j=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Bo||U!==Yn&&U!==pn&&(ee.getTransfer(U)===oe?a===!1?t.has("EXT_sRGB")===!0&&j===En?(M.format=Bo,M.minFilter=fn,M.generateMipmaps=!1):x=ra.sRGBToLinear(x):(j!==En||J!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=P,this.resetTextureUnits=et,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Wt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=pt}function I_(n,t,e){let i=e.isWebGL2;function s(r,o=pn){let a,c=ee.getTransfer(o);if(r===fi)return n.UNSIGNED_BYTE;if(r===zh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===kh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===uf)return n.BYTE;if(r===df)return n.SHORT;if(r===fc)return n.UNSIGNED_SHORT;if(r===Bh)return n.INT;if(r===ci)return n.UNSIGNED_INT;if(r===li)return n.FLOAT;if(r===Js)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ff)return n.ALPHA;if(r===En)return n.RGBA;if(r===pf)return n.LUMINANCE;if(r===mf)return n.LUMINANCE_ALPHA;if(r===Ui)return n.DEPTH_COMPONENT;if(r===Es)return n.DEPTH_STENCIL;if(r===Bo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===gf)return n.RED;if(r===Hh)return n.RED_INTEGER;if(r===_f)return n.RG;if(r===Vh)return n.RG_INTEGER;if(r===Gh)return n.RGBA_INTEGER;if(r===io||r===so||r===ro||r===ao)if(c===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===io)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===io)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===so)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ro)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ao)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vl||r===yl||r===bl||r===Ml)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===vl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ml)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Sl||r===wl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Sl)return c===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===wl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===El||r===Al||r===Tl||r===Rl||r===Cl||r===Pl||r===Ll||r===Il||r===Dl||r===Nl||r===Ul||r===Ol||r===Fl||r===Bl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===El)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Al)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Tl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ll)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Il)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ul)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ol)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bl)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===oo||r===zl||r===kl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===oo)return c===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xf||r===Hl||r===Vl||r===Gl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===oo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Hl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Qo=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},hi=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},D_={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,i),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},tc=class extends mi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=e.getContextAttributes(),f=null,p=null,w=[],v=[],R=new Yt,A=null,T=new qe;T.layers.enable(1),T.viewport=new De;let E=new qe;E.layers.enable(2),E.viewport=new De;let G=[T,E],b=new Qo;b.layers.enable(1),b.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=w[k];return $===void 0&&($=new $s,w[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=w[k];return $===void 0&&($=new $s,w[k]=$),$.getGripSpace()},this.getHand=function(k){let $=w[k];return $===void 0&&($=new $s,w[k]=$),$.getHandSpace()};function V(k){let $=v.indexOf(k.inputSource);if($===-1)return;let ot=w[$];ot!==void 0&&(ot.update(k.inputSource,k.frame,l||o),ot.dispatchEvent({type:k.type,data:k.inputSource}))}function et(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",P);for(let k=0;k<w.length;k++){let $=v[k];$!==null&&(v[k]=null,w[k].disconnect($))}S=null,z=null,t.setRenderTarget(f),m=null,d=null,u=null,s=null,p=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",et),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new $n(m.framebufferWidth,m.framebufferHeight,{format:En,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,ot=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?Es:Ui,ot=_.stencil?Ni:ci);let _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new $n(d.textureWidth,d.textureHeight,{format:En,type:fi,depthTexture:new ma(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Lt=t.properties.get(p);Lt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(k){for(let $=0;$<k.removed.length;$++){let ot=k.removed[$],xt=v.indexOf(ot);xt>=0&&(v[xt]=null,w[xt].disconnect(ot))}for(let $=0;$<k.added.length;$++){let ot=k.added[$],xt=v.indexOf(ot);if(xt===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=v.length){v.push(ot),xt=Lt;break}else if(v[Lt]===null){v[Lt]=ot,xt=Lt;break}if(xt===-1)break}let _t=w[xt];_t&&_t.connect(ot)}}let O=new L,H=new L;function Y(k,$,ot){O.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(ot.matrixWorld);let xt=O.distanceTo(H),_t=$.projectionMatrix.elements,Lt=ot.projectionMatrix.elements,Dt=_t[14]/(_t[10]-1),Et=_t[14]/(_t[10]+1),Wt=(_t[9]+1)/_t[5],D=(_t[9]-1)/_t[5],ze=(_t[8]-1)/_t[0],yt=(Lt[8]+1)/Lt[0],Ct=Dt*ze,pt=Dt*yt,ue=xt/(-ze+yt),Ft=ue*-ze;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ft),k.translateZ(ue),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let M=Dt+ue,x=Et+ue,U=Ct-Ft,j=pt+(xt-Ft),J=Wt*Et/x*M,Q=D*Et/x*M;k.projectionMatrix.makePerspective(U,j,J,Q,M,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;b.near=E.near=T.near=k.near,b.far=E.far=T.far=k.far,(S!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,z=b.far);let $=k.parent,ot=b.cameras;W(b,$);for(let xt=0;xt<ot.length;xt++)W(ot[xt],$);ot.length===2?Y(b,T,E):b.projectionMatrix.copy(T.projectionMatrix),X(k,b,$)};function X(k,$,ot){ot===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(ot.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ks*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let K=null;function tt(k,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let ot=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let xt=!1;ot.length!==b.cameras.length&&(b.cameras.length=0,xt=!0);for(let _t=0;_t<ot.length;_t++){let Lt=ot[_t],Dt=null;if(m!==null)Dt=m.getViewport(Lt);else{let Wt=u.getViewSubImage(d,Lt);Dt=Wt.viewport,_t===0&&(t.setRenderTargetTextures(p,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(p))}let Et=G[_t];Et===void 0&&(Et=new qe,Et.layers.enable(_t),Et.viewport=new De,G[_t]=Et),Et.matrix.fromArray(Lt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Lt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),_t===0&&(b.matrix.copy(Et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xt===!0&&b.cameras.push(Et)}}for(let ot=0;ot<w.length;ot++){let xt=v[ot],_t=w[ot];xt!==null&&_t!==void 0&&_t.update(xt,$,l||o)}K&&K(k,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let lt=new Kh;lt.setAnimationLoop(tt),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}};function N_(n,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,Jh(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,w,v,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,R)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,w,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Qe&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Qe&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let w=t.get(p).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,w,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=v*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let w=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function U_(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,v){let R=v.program;i.uniformBlockBinding(w,R)}function l(w,v){let R=s[w.id];R===void 0&&(g(w),R=h(w),s[w.id]=R,w.addEventListener("dispose",f));let A=v.program;i.updateUBOMapping(w,A);let T=t.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function h(w){let v=u();w.__bindingPointIndex=v;let R=n.createBuffer(),A=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,R),R}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let v=s[w.id],R=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,E=R.length;T<E;T++){let G=Array.isArray(R[T])?R[T]:[R[T]];for(let b=0,S=G.length;b<S;b++){let z=G[b];if(m(z,T,b,A)===!0){let V=z.__offset,et=Array.isArray(z.value)?z.value:[z.value],P=0;for(let O=0;O<et.length;O++){let H=et[O],Y=_(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,V+P,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,v,R,A){let T=w.value,E=v+"_"+R;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{let G=A[E];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return A[E]=T,!0}else if(G.equals(T)===!1)return G.copy(T),!0}return!1}function g(w){let v=w.uniforms,R=0,A=16;for(let E=0,G=v.length;E<G;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,z=b.length;S<z;S++){let V=b[S],et=Array.isArray(V.value)?V.value:[V.value];for(let P=0,O=et.length;P<O;P++){let H=et[P],Y=_(H),W=R%A;W!==0&&A-W<Y.boundary&&(R+=A-W),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=Y.storage}}}let T=R%A;return T>0&&(R+=A-T),w.__size=R,w.__cache={},this}function _(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function f(w){let v=w.target;v.removeEventListener("dispose",f);let R=o.indexOf(v.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var er=class{constructor(t={}){let{canvas:e=Wf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;let v=this,R=!1,A=0,T=0,E=null,G=-1,b=null,S=new De,z=new De,V=null,et=new $t(0),P=0,O=e.width,H=e.height,Y=1,W=null,X=null,K=new De(0,0,O,H),tt=new De(0,0,O,H),lt=!1,k=new fa,$=!1,ot=!1,xt=null,_t=new Jt,Lt=new Yt,Dt=new L,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return E===null?Y:1}let D=i;function ze(y,I){for(let F=0;F<y.length;F++){let B=y[F],N=e.getContext(B,I);if(N!==null)return N}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",st,!1),D===null){let I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),D=ze(I,y),D===null)throw ze(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let yt,Ct,pt,ue,Ft,M,x,U,j,J,Q,mt,at,ut,wt,Bt,Z,te,Gt,Rt,vt,dt,Nt,Zt;function pe(){yt=new t0(D),Ct=new $g(D,yt,t),yt.init(Ct),dt=new I_(D,yt,Ct),pt=new P_(D,yt,Ct),ue=new i0(D),Ft=new x_,M=new L_(D,yt,pt,Ft,Ct,dt,ue),x=new Jg(v),U=new Qg(v),j=new up(D,Ct),Nt=new qg(D,yt,j,Ct),J=new e0(D,j,ue,Nt),Q=new o0(D,J,j,ue),Gt=new a0(D,Ct,M),Bt=new Zg(Ft),mt=new __(v,x,U,yt,Ct,Nt,Bt),at=new N_(v,Ft),ut=new y_,wt=new A_(yt,Ct),te=new Xg(v,x,U,pt,Q,d,c),Z=new C_(v,Q,Ct),Zt=new U_(D,ue,Ct,pt),Rt=new Yg(D,yt,ue,Ct),vt=new n0(D,yt,ue,Ct),ue.programs=mt.programs,v.capabilities=Ct,v.extensions=yt,v.properties=Ft,v.renderLists=ut,v.shadowMap=Z,v.state=pt,v.info=ue}pe();let kt=new tc(v,D);this.xr=kt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(O,H,!1))},this.getSize=function(y){return y.set(O,H)},this.setSize=function(y,I,F=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=y,H=I,e.width=Math.floor(y*Y),e.height=Math.floor(I*Y),F===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(O*Y,H*Y).floor()},this.setDrawingBufferSize=function(y,I,F){O=y,H=I,Y=F,e.width=Math.floor(y*F),e.height=Math.floor(I*F),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,I,F,B){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,I,F,B),pt.viewport(S.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(y){return y.copy(tt)},this.setScissor=function(y,I,F,B){y.isVector4?tt.set(y.x,y.y,y.z,y.w):tt.set(y,I,F,B),pt.scissor(z.copy(tt).multiplyScalar(Y).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(y){pt.setScissorTest(lt=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){X=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(y=!0,I=!0,F=!0){let B=0;if(y){let N=!1;if(E!==null){let ct=E.texture.format;N=ct===Gh||ct===Vh||ct===Hh}if(N){let ct=E.texture.type,gt=ct===fi||ct===ci||ct===fc||ct===Ni||ct===zh||ct===kh,Mt=te.getClearColor(),Tt=te.getClearAlpha(),zt=Mt.r,Pt=Mt.g,It=Mt.b;gt?(m[0]=zt,m[1]=Pt,m[2]=It,m[3]=Tt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=zt,g[1]=Pt,g[2]=It,g[3]=Tt,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT),F&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ut.dispose(),wt.dispose(),Ft.dispose(),x.dispose(),U.dispose(),Q.dispose(),Nt.dispose(),Zt.dispose(),mt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",ke),kt.removeEventListener("sessionend",ae),xt&&(xt.dispose(),xt=null),He.stop()};function nt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=ue.autoReset,I=Z.enabled,F=Z.autoUpdate,B=Z.needsUpdate,N=Z.type;pe(),ue.autoReset=y,Z.enabled=I,Z.autoUpdate=F,Z.needsUpdate=B,Z.type=N}function st(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function rt(y){let I=y.target;I.removeEventListener("dispose",rt),At(I)}function At(y){bt(y),Ft.remove(y)}function bt(y){let I=Ft.get(y).programs;I!==void 0&&(I.forEach(function(F){mt.releaseProgram(F)}),y.isShaderMaterial&&mt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,F,B,N,ct){I===null&&(I=Et);let gt=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Ed(y,I,F,B,N);pt.setMaterial(B,gt);let Tt=F.index,zt=1;if(B.wireframe===!0){if(Tt=J.getWireframeAttribute(F),Tt===void 0)return;zt=2}let Pt=F.drawRange,It=F.attributes.position,_e=Pt.start*zt,sn=(Pt.start+Pt.count)*zt;ct!==null&&(_e=Math.max(_e,ct.start*zt),sn=Math.min(sn,(ct.start+ct.count)*zt)),Tt!==null?(_e=Math.max(_e,0),sn=Math.min(sn,Tt.count)):It!=null&&(_e=Math.max(_e,0),sn=Math.min(sn,It.count));let Te=sn-_e;if(Te<0||Te===1/0)return;Nt.setup(N,B,Mt,F,Tt);let Fn,de=Rt;if(Tt!==null&&(Fn=j.get(Tt),de=vt,de.setIndex(Fn)),N.isMesh)B.wireframe===!0?(pt.setLineWidth(B.wireframeLinewidth*Wt()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(N.isLine){let Ht=B.linewidth;Ht===void 0&&(Ht=1),pt.setLineWidth(Ht*Wt()),N.isLineSegments?de.setMode(D.LINES):N.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else N.isPoints?de.setMode(D.POINTS):N.isSprite&&de.setMode(D.TRIANGLES);if(N.isBatchedMesh)de.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)de.renderInstances(_e,Te,N.count);else if(F.isInstancedBufferGeometry){let Ht=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ja=Math.min(F.instanceCount,Ht);de.renderInstances(_e,Te,ja)}else de.render(_e,Te)};function se(y,I,F){y.transparent===!0&&y.side===Wn&&y.forceSinglePass===!1?(y.side=Qe,y.needsUpdate=!0,Ar(y,I,F),y.side=pi,y.needsUpdate=!0,Ar(y,I,F),y.side=Wn):Ar(y,I,F)}this.compile=function(y,I,F=null){F===null&&(F=y),f=wt.get(F),f.init(),w.push(f),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==F&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(v._useLegacyLights);let B=new Set;return y.traverse(function(N){let ct=N.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){let Mt=ct[gt];se(Mt,F,N),B.add(Mt)}else se(ct,F,N),B.add(ct)}),w.pop(),f=null,B},this.compileAsync=function(y,I,F=null){let B=this.compile(y,I,F);return new Promise(N=>{function ct(){if(B.forEach(function(gt){Ft.get(gt).currentProgram.isReady()&&B.delete(gt)}),B.size===0){N(y);return}setTimeout(ct,10)}yt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let re=null;function Ae(y){re&&re(y)}function ke(){He.stop()}function ae(){He.start()}let He=new Kh;He.setAnimationLoop(Ae),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(y){re=y,kt.setAnimationLoop(y),y===null?He.stop():He.start()},kt.addEventListener("sessionstart",ke),kt.addEventListener("sessionend",ae),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(I),I=kt.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,I,E),f=wt.get(y,w.length),f.init(),w.push(f),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k.setFromProjectionMatrix(_t),ot=this.localClippingEnabled,$=Bt.init(this.clippingPlanes,ot),_=ut.get(y,p.length),_.init(),p.push(_),Pn(y,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,$===!0&&Bt.beginShadows();let F=f.state.shadowsArray;if(Z.render(F,y,I),$===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(_,y),f.setupLights(v._useLegacyLights),I.isArrayCamera){let B=I.cameras;for(let N=0,ct=B.length;N<ct;N++){let gt=B[N];al(_,y,gt,gt.viewport)}}else al(_,y,I);E!==null&&(M.updateMultisampleRenderTarget(E),M.updateRenderTargetMipmap(E)),y.isScene===!0&&y.onAfterRender(v,y,I),Nt.resetDefaultState(),G=-1,b=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Pn(y,I,F,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||k.intersectsSprite(y)){B&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_t);let gt=Q.update(y),Mt=y.material;Mt.visible&&_.push(y,gt,Mt,F,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||k.intersectsObject(y))){let gt=Q.update(y),Mt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(_t)),Array.isArray(Mt)){let Tt=gt.groups;for(let zt=0,Pt=Tt.length;zt<Pt;zt++){let It=Tt[zt],_e=Mt[It.materialIndex];_e&&_e.visible&&_.push(y,gt,_e,F,Dt.z,It)}}else Mt.visible&&_.push(y,gt,Mt,F,Dt.z,null)}}let ct=y.children;for(let gt=0,Mt=ct.length;gt<Mt;gt++)Pn(ct[gt],I,F,B)}function al(y,I,F,B){let N=y.opaque,ct=y.transmissive,gt=y.transparent;f.setupLightsView(F),$===!0&&Bt.setGlobalState(v.clippingPlanes,F),ct.length>0&&wd(N,ct,I,F),B&&pt.viewport(S.copy(B)),N.length>0&&Er(N,I,F),ct.length>0&&Er(ct,I,F),gt.length>0&&Er(gt,I,F),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function wd(y,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let ct=Ct.isWebGL2;xt===null&&(xt=new $n(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Js:fi,minFilter:Zs,samples:ct?4:0})),v.getDrawingBufferSize(Lt),ct?xt.setSize(Lt.x,Lt.y):xt.setSize(ia(Lt.x),ia(Lt.y));let gt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(et),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Mt=v.toneMapping;v.toneMapping=di,Er(y,F,B),M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt);let Tt=!1;for(let zt=0,Pt=I.length;zt<Pt;zt++){let It=I[zt],_e=It.object,sn=It.geometry,Te=It.material,Fn=It.group;if(Te.side===Wn&&_e.layers.test(B.layers)){let de=Te.side;Te.side=Qe,Te.needsUpdate=!0,ol(_e,F,B,sn,Te,Fn),Te.side=de,Te.needsUpdate=!0,Tt=!0}}Tt===!0&&(M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt)),v.setRenderTarget(gt),v.setClearColor(et,P),v.toneMapping=Mt}function Er(y,I,F){let B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ct=y.length;N<ct;N++){let gt=y[N],Mt=gt.object,Tt=gt.geometry,zt=B===null?gt.material:B,Pt=gt.group;Mt.layers.test(F.layers)&&ol(Mt,I,F,Tt,zt,Pt)}}function ol(y,I,F,B,N,ct){y.onBeforeRender(v,I,F,B,N,ct),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(v,I,F,B,y,ct),N.transparent===!0&&N.side===Wn&&N.forceSinglePass===!1?(N.side=Qe,N.needsUpdate=!0,v.renderBufferDirect(F,I,B,N,y,ct),N.side=pi,N.needsUpdate=!0,v.renderBufferDirect(F,I,B,N,y,ct),N.side=Wn):v.renderBufferDirect(F,I,B,N,y,ct),y.onAfterRender(v,I,F,B,N,ct)}function Ar(y,I,F){I.isScene!==!0&&(I=Et);let B=Ft.get(y),N=f.state.lights,ct=f.state.shadowsArray,gt=N.state.version,Mt=mt.getParameters(y,N.state,ct,I,F),Tt=mt.getProgramCacheKey(Mt),zt=B.programs;B.environment=y.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(y.isMeshStandardMaterial?U:x).get(y.envMap||B.environment),zt===void 0&&(y.addEventListener("dispose",rt),zt=new Map,B.programs=zt);let Pt=zt.get(Tt);if(Pt!==void 0){if(B.currentProgram===Pt&&B.lightsStateVersion===gt)return ll(y,Mt),Pt}else Mt.uniforms=mt.getUniforms(y),y.onBuild(F,Mt,v),y.onBeforeCompile(Mt,v),Pt=mt.acquireProgram(Mt,Tt),zt.set(Tt,Pt),B.uniforms=Mt.uniforms;let It=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(It.clippingPlanes=Bt.uniform),ll(y,Mt),B.needsLights=Td(y),B.lightsStateVersion=gt,B.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Pt,B.uniformsList=null,Pt}function cl(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Ms.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function ll(y,I){let F=Ft.get(y);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Ed(y,I,F,B,N){I.isScene!==!0&&(I=Et),M.resetTextureUnits();let ct=I.fog,gt=B.isMeshStandardMaterial?I.environment:null,Mt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Yn,Tt=(B.isMeshStandardMaterial?U:x).get(B.envMap||gt),zt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),It=!!F.morphAttributes.position,_e=!!F.morphAttributes.normal,sn=!!F.morphAttributes.color,Te=di;B.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Te=v.toneMapping);let Fn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,de=Fn!==void 0?Fn.length:0,Ht=Ft.get(B),ja=f.state.lights;if($===!0&&(ot===!0||y!==b)){let un=y===b&&B.id===G;Bt.setState(B,y,un)}let me=!1;B.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ja.state.version||Ht.outputColorSpace!==Mt||N.isBatchedMesh&&Ht.batching===!1||!N.isBatchedMesh&&Ht.batching===!0||N.isInstancedMesh&&Ht.instancing===!1||!N.isInstancedMesh&&Ht.instancing===!0||N.isSkinnedMesh&&Ht.skinning===!1||!N.isSkinnedMesh&&Ht.skinning===!0||N.isInstancedMesh&&Ht.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ht.instancingColor===!1&&N.instanceColor!==null||Ht.envMap!==Tt||B.fog===!0&&Ht.fog!==ct||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Bt.numPlanes||Ht.numIntersection!==Bt.numIntersection)||Ht.vertexAlphas!==zt||Ht.vertexTangents!==Pt||Ht.morphTargets!==It||Ht.morphNormals!==_e||Ht.morphColors!==sn||Ht.toneMapping!==Te||Ct.isWebGL2===!0&&Ht.morphTargetsCount!==de)&&(me=!0):(me=!0,Ht.__version=B.version);let Ei=Ht.currentProgram;me===!0&&(Ei=Ar(B,I,N));let hl=!1,ks=!1,Qa=!1,Ue=Ei.getUniforms(),Ai=Ht.uniforms;if(pt.useProgram(Ei.program)&&(hl=!0,ks=!0,Qa=!0),B.id!==G&&(G=B.id,ks=!0),hl||b!==y){Ue.setValue(D,"projectionMatrix",y.projectionMatrix),Ue.setValue(D,"viewMatrix",y.matrixWorldInverse);let un=Ue.map.cameraPosition;un!==void 0&&un.setValue(D,Dt.setFromMatrixPosition(y.matrixWorld)),Ct.logarithmicDepthBuffer&&Ue.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ue.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,ks=!0,Qa=!0)}if(N.isSkinnedMesh){Ue.setOptional(D,N,"bindMatrix"),Ue.setOptional(D,N,"bindMatrixInverse");let un=N.skeleton;un&&(Ct.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Ue.setValue(D,"boneTexture",un.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Ue.setOptional(D,N,"batchingTexture"),Ue.setValue(D,"batchingTexture",N._matricesTexture,M));let to=F.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&Ct.isWebGL2===!0)&&Gt.update(N,F,Ei),(ks||Ht.receiveShadow!==N.receiveShadow)&&(Ht.receiveShadow=N.receiveShadow,Ue.setValue(D,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ai.envMap.value=Tt,Ai.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),ks&&(Ue.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Ad(Ai,Qa),ct&&B.fog===!0&&at.refreshFogUniforms(Ai,ct),at.refreshMaterialUniforms(Ai,B,Y,H,xt),Ms.upload(D,cl(Ht),Ai,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ms.upload(D,cl(Ht),Ai,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ue.setValue(D,"center",N.center),Ue.setValue(D,"modelViewMatrix",N.modelViewMatrix),Ue.setValue(D,"normalMatrix",N.normalMatrix),Ue.setValue(D,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let un=B.uniformsGroups;for(let eo=0,Rd=un.length;eo<Rd;eo++)if(Ct.isWebGL2){let ul=un[eo];Zt.update(ul,Ei),Zt.bind(ul,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function Ad(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Td(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(y,I,F){Ft.get(y.texture).__webglTexture=I,Ft.get(y.depthTexture).__webglTexture=F;let B=Ft.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){let F=Ft.get(y);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,F=0){E=y,A=I,T=F;let B=!0,N=null,ct=!1,gt=!1;if(y){let Tt=Ft.get(y);Tt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):Tt.__webglFramebuffer===void 0?M.setupRenderTarget(y):Tt.__hasExternalTextures&&M.rebindTextures(y,Ft.get(y.texture).__webglTexture,Ft.get(y.depthTexture).__webglTexture);let zt=y.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);let Pt=Ft.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[I])?N=Pt[I][F]:N=Pt[I],ct=!0):Ct.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?N=Ft.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[F]:N=Pt,S.copy(y.viewport),z.copy(y.scissor),V=y.scissorTest}else S.copy(K).multiplyScalar(Y).floor(),z.copy(tt).multiplyScalar(Y).floor(),V=lt;if(pt.bindFramebuffer(D.FRAMEBUFFER,N)&&Ct.drawBuffers&&B&&pt.drawBuffers(y,N),pt.viewport(S),pt.scissor(z),pt.setScissorTest(V),ct){let Tt=Ft.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Tt.__webglTexture,F)}else if(gt){let Tt=Ft.get(y.texture),zt=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,F||0,zt)}G=-1},this.readRenderTargetPixels=function(y,I,F,B,N,ct,gt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){pt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{let Tt=y.texture,zt=Tt.format,Pt=Tt.type;if(zt!==En&&dt.convert(zt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let It=Pt===Js&&(yt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Pt!==fi&&dt.convert(Pt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===li&&(Ct.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&F>=0&&F<=y.height-N&&D.readPixels(I,F,B,N,dt.convert(zt),dt.convert(Pt),ct)}finally{let Tt=E!==null?Ft.get(E).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(y,I,F=0){let B=Math.pow(2,-F),N=Math.floor(I.image.width*B),ct=Math.floor(I.image.height*B);M.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,y.x,y.y,N,ct),pt.unbindTexture()},this.copyTextureToTexture=function(y,I,F,B=0){let N=I.image.width,ct=I.image.height,gt=dt.convert(F.format),Mt=dt.convert(F.type);M.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,y.x,y.y,N,ct,gt,Mt,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,gt,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,B,y.x,y.y,gt,Mt,I.image),B===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(y,I,F,B,N=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ct=y.max.x-y.min.x+1,gt=y.max.y-y.min.y+1,Mt=y.max.z-y.min.z+1,Tt=dt.convert(B.format),zt=dt.convert(B.type),Pt;if(B.isData3DTexture)M.setTexture3D(B,0),Pt=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)M.setTexture2DArray(B,0),Pt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let It=D.getParameter(D.UNPACK_ROW_LENGTH),_e=D.getParameter(D.UNPACK_IMAGE_HEIGHT),sn=D.getParameter(D.UNPACK_SKIP_PIXELS),Te=D.getParameter(D.UNPACK_SKIP_ROWS),Fn=D.getParameter(D.UNPACK_SKIP_IMAGES),de=F.isCompressedTexture?F.mipmaps[N]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,y.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,y.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,y.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(Pt,N,I.x,I.y,I.z,ct,gt,Mt,Tt,zt,de.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Pt,N,I.x,I.y,I.z,ct,gt,Mt,Tt,de.data)):D.texSubImage3D(Pt,N,I.x,I.y,I.z,ct,gt,Mt,Tt,zt,de),D.pixelStorei(D.UNPACK_ROW_LENGTH,It),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),D.pixelStorei(D.UNPACK_SKIP_PIXELS,sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fn),N===0&&B.generateMipmaps&&D.generateMipmap(Pt),pt.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),pt.unbindTexture()},this.resetState=function(){A=0,T=0,E=null,pt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===pc?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?Oi:Xh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Oi?Ie:Yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ec=class extends er{};ec.prototype.isWebGL1Renderer=!0;var ga=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};function Zr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function O_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Rs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends Rs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xl:r=t,a=2*e-i;break;case ql:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Xl:o=t,c=2*i-e;break;case ql:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,w=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-m)*f+(1.5+m)*_+.5*g,R=m*f-m*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+w*o[l+A]+v*o[c+A]+R*o[u+A];return r}},ic=class extends Rs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},sc=class extends Rs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zr(e,this.TimeBufferType),this.values=Zr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Zr(t.times,Array),values:Zr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case jr:e=this.InterpolantFactoryMethodLinear;break;case co:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&O_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===co,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=jr;var zi=class extends Tn{};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Kr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Tn{};rc.prototype.ValueTypeName="color";var ac=class extends Tn{};ac.prototype.ValueTypeName="number";var oc=class extends Rs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)$e.slerpFlat(r,0,o,l-a,o,l,c);return r}},nr=class extends Tn{InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}};nr.prototype.ValueTypeName="quaternion";nr.prototype.DefaultInterpolation=jr;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Tn{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Kr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends Tn{};cc.prototype.ValueTypeName="vector";var lc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},F_=new lc,hc=class{constructor(t){this.manager=t!==void 0?t:F_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var _c="\\[\\]\\.:\\/",B_=new RegExp("["+_c+"]","g"),xc="[^"+_c+"]",z_="[^"+_c.replace("\\.","")+"]",k_=/((?:WC+[\/:])*)/.source.replace("WC",xc),H_=/(WCOD+)?/.source.replace("WCOD",z_),V_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),G_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),W_=new RegExp("^"+k_+H_+V_+G_+"$"),X_=["material","materials","bones","map"],uc=class{constructor(t,e,i){let s=i||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(B_,"")}static parseTrackName(t){let e=W_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);X_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=uc;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lv=new Float32Array(1);var ir=class{constructor(t,e,i=0,s=1/0){this.ray=new ca(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return dc(t,this,i,e),i.sort(Nh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)dc(t[s],this,i,e);return i.sort(Nh),i}};function Nh(n,t){return n.distance-t.distance}function dc(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)dc(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var tn=Object.freeze({version:7,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.9,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function iu(n){if(n.comfortVersion===tn.version)return n;let t={...n,comfortVersion:tn.version,winDist:tn.windowDistance,dockDist:1};return(n.winScale==null||n.winScale===1)&&(t.winScale=tn.windowScale),t}var q_=4096,ya={width:1200,height:800},Ls=160;function Y_(n,t=q_){return n.map(({width:e,height:i,kind:s="window",slot:r=0})=>{let o=Math.ceil(e)+Ls*2,a=Math.ceil(i)+Ls*2,c=s==="window"?r%3*1360:0,l=s==="dock"?800:s==="keyboard"?3160:1200+Math.floor(r/3)*980,h=s==="dock"?400:s==="keyboard"?936:980;if(r>5||o>(s==="window"?1360:t)||a>h||c+o>t||l+a>t)throw new Error("Workspace texture is full; close a window first.");return[c,l,o,a]})}var ba=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.sentAndroidSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(t){var u;t.updateMatrixWorld(!0);let e=[];t.traverse(d=>{d.isCSS3DObject&&d.visible&&e.push(d)});for(let d of e)d.element.parentNode!==this.domElement&&this.domElement.append(d.element),d.element.style.transform="none";for(let d of this.slots.keys())e.some(m=>m.id===d)||this.slots.delete(d);let i=e.map(d=>{let m=d.element.classList.contains("dock")?"dock":d.element.classList.contains("kb")?"keyboard":"window";if(m==="window"&&!this.slots.has(d.id)){let g=new Set(this.slots.values()),_=0;for(;g.has(_);)_++;this.slots.set(d.id,_)}return{width:d.element.offsetWidth,height:d.element.offsetHeight,kind:m,slot:this.slots.get(d.id)||0}}),s;try{s=Y_(i)}catch(d){this.lastError!==d.message&&(this.lastError=d.message,(u=window.nextvrMessage)==null||u.call(window,d.message));return}let r=[],o=[],a=[];e.forEach((d,m)=>{let g=d.element,[_,f,p,w]=s[m];g.style.left=`${_+Ls}px`,g.style.top=`${f+Ls}px`;let v=d.matrixWorld.clone().multiply(new Jt().makeScale(p,w,1)),R=+(g.dataset.curve||0);r.push({id:g.dataset.windowId||(i[m].kind==="dock"?"dock":i[m].kind),matrix:v.toArray(),rect:s[m],curve:R,glass:[Ls/p,Ls/w,i[m].width/p,i[m].height/w]});let A=g.getBoundingClientRect();for(let T of g.querySelectorAll("[data-native-browser]")){let E=T.getBoundingClientRect();if(!E.width||!E.height)continue;let G=T.dataset.nativeBrowser,b=T.dataset.url;if(!b)continue;let S=Math.round(E.width),z=Math.round(E.height),V={left:E.left,top:E.top,right:E.right,bottom:E.bottom};for(let H=T.parentElement;H&&H!==g;H=H.parentElement){let Y=getComputedStyle(H);if(/(auto|scroll|hidden)/.test(Y.overflow+Y.overflowY)){let W=H.getBoundingClientRect();V.left=Math.max(V.left,W.left),V.top=Math.max(V.top,W.top),V.right=Math.min(V.right,W.right),V.bottom=Math.min(V.bottom,W.bottom)}}o.push({id:G,url:b,width:S,height:z});let et=V.right-V.left,P=V.bottom-V.top;if(et<=0||P<=0)continue;let O=d.matrixWorld.clone().multiply(new Jt().makeTranslation(V.left-A.left+et/2-i[m].width/2,i[m].height/2-(V.top-A.top+P/2),.5)).multiply(new Jt().makeScale(et,P,1));r.push({browser:G,matrix:O.toArray(),rect:[0,0,S,z],curve:+(g.dataset.curve||0),uv:[(V.left-E.left)/S,(E.bottom-V.bottom)/z,et/S,P/z]})}for(let T of g.querySelectorAll("[data-native-app]")){let E=T.getBoundingClientRect();if(!E.width||!E.height)continue;let G=T.dataset.nativeApp,b=T.dataset.nativeId;if(!G||!b)continue;let S=T.dataset.orientation==="portrait",z=S?1080:1920,V=S?1920:1080,et=Math.max(1,Math.round(E.width)),P=Math.max(1,Math.round(E.height));a.push({id:b,packageName:G,width:z,height:V,viewWidth:et,viewHeight:P});let O=d.matrixWorld.clone().multiply(new Jt().makeTranslation(E.left-A.left+E.width/2-i[m].width/2,i[m].height/2-(E.top-A.top+E.height/2),.5)).multiply(new Jt().makeScale(E.width,E.height,1));r.push({browser:b,matrix:O.toArray(),rect:[0,0,z,V],curve:+(g.dataset.curve||0),uv:[0,0,1,1]})}});let c=2*Math.tan(Yh.degToRad(36)),l=new Jt().makeTranslation(0,0,-1).multiply(new Jt().makeScale(c*1.5,c,1));r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,ya.width,ya.height]});let h=performance.now();if(h-this.last>=({low:66,auto:30,high:16}[document.documentElement.dataset.quality]||30)){this.last=h;let d=JSON.stringify(r),m=JSON.stringify(o),g=JSON.stringify(a);(d!==this.sent||m!==this.sentSpecs||g!==this.sentAndroidSpecs)&&(this.sent=d,this.sentSpecs=m,this.sentAndroidSpecs=g,window.NativeXR.frame(d,m,g))}}invalidate(){this.sent=this.sentSpecs=this.sentAndroidSpecs=null}};var su=new L,$_=new $e,ru=new L,Is=class extends cn{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var In=new Jt,Z_=new Jt,Ma=class{constructor(t={}){let e=this,i,s,r,o,a={camera:{style:""},objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;let l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);let h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:i,height:s}},this.render=function(_,f){let p=f.projectionMatrix.elements[5]*o;f.view&&f.view.enabled?(l.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,l.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):l.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let w,v;f.isOrthographicCamera&&(w=-(f.right+f.left)/2,v=(f.top+f.bottom)/2);let R=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,A=f.isOrthographicCamera?`scale( ${R} )scale(`+p+")translate("+u(w)+"px,"+u(v)+"px)"+d(f.matrixWorldInverse):`scale( ${R} )translateZ(`+p+"px)"+d(f.matrixWorldInverse),E=(f.isPerspectiveCamera?"perspective("+p+"px) ":"")+A+"translate("+r+"px,"+o+"px)";a.camera.style!==E&&(h.style.transform=E,a.camera.style=E),g(_,_,f,A)},this.setSize=function(_,f){i=_,s=f,r=i/2,o=s/2,c.style.width=_+"px",c.style.height=f+"px",l.style.width=_+"px",l.style.height=f+"px",h.style.width=_+"px",h.style.height=f+"px"};function u(_){return Math.abs(_)<1e-10?0:_}function d(_){let f=_.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function m(_){let f=_.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(_,f,p,w){if(_.isCSS3DObject){let v=_.visible===!0&&_.layers.test(p.layers)===!0;if(_.element.style.display=v===!0?"":"none",v===!0){_.onBeforeRender(e,f,p);let R;_.isCSS3DSprite?(In.copy(p.matrixWorldInverse),In.transpose(),_.rotation2D!==0&&In.multiply(Z_.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(su,$_,ru),In.setPosition(su),In.scale(ru),In.elements[3]=0,In.elements[7]=0,In.elements[11]=0,In.elements[15]=1,R=m(In)):R=m(_.matrixWorld);let A=_.element,T=a.objects.get(_);if(T===void 0||T.style!==R){A.style.transform=R;let E={style:R};a.objects.set(_,E)}A.parentNode!==h&&h.appendChild(A),_.onAfterRender(e,f,p)}}for(let v=0,R=_.children.length;v<R;v++)g(_.children[v],f,p,w)}}};var St=!!window.NativeXR,he=St?ya:{width:innerWidth,height:innerHeight},cu={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"passthrough",quality:"auto",showFps:0},Ce={...cu};try{Ce={...cu,...JSON.parse(localStorage.getItem("nextvr.v1")||"{}")}}catch{}if(St){Ce=iu(Ce),Ce.handsOn=!0;try{localStorage.setItem("nextvr.v1",JSON.stringify(Ce))}catch{}}var Ot=Ce,Ns=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Ce))}catch{}},au={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",androidApps:"Android",androidBack:"Voltar",shizuku:"Shizuku",shizukuReady:"Conectado (ADB/root)",shizukuNeedsPermission:"Permiss\xE3o necess\xE1ria",shizukuNotRunning:"N\xE3o iniciado",shizukuUnsupported:"Atualize o Shizuku",shizukuConnect:"Conectar / permitir",shizukuHelp:"No Android 11+, inicie o Shizuku por Wireless debugging; Android 8\u201310 precisam de ADB por computador ou root. Autorize NextVR uma vez; a tela do telefone n\xE3o \xE9 capturada.",androidNoApps:"Nenhum aplicativo com \xEDcone de inicializa\xE7\xE3o foi encontrado.",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 p\xF4r do sol",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",androidApps:"Android",androidBack:"Back",shizuku:"Shizuku",shizukuReady:"Connected (ADB/root)",shizukuNeedsPermission:"Permission needed",shizukuNotRunning:"Not running",shizukuUnsupported:"Update Shizuku",shizukuConnect:"Connect / grant access",shizukuHelp:"On Android 11+, start Shizuku with Wireless debugging; Android 8\u201310 need PC ADB or root. Grant NextVR access once; the phone screen is not captured.",androidNoApps:"No launchable Android apps were found.",recents:"Recent",battery:"Battery",net:"Network",time:"Time",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envSunset:"360\xB0 panorama \xB7 sunset",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",androidApps:"Android",androidBack:"Atr\xE1s",shizuku:"Shizuku",shizukuReady:"Conectado (ADB/root)",shizukuNeedsPermission:"Se necesita permiso",shizukuNotRunning:"No est\xE1 iniciado",shizukuUnsupported:"Actualiza Shizuku",shizukuConnect:"Conectar / permitir",shizukuHelp:"En Android 11+, inicia Shizuku mediante Wireless debugging; Android 8\u201310 requieren ADB desde un PC o root. Autoriza NextVR una vez; no se captura la pantalla del tel\xE9fono.",androidNoApps:"No se encontraron aplicaciones Android iniciables.",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 atardecer",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock"}},sr=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E"},{id:"fr",label:"Fran\xE7ais"},{id:"de",label:"Deutsch"},{id:"ko",label:"\uD55C\uAD6D\uC5B4"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),J_="pt",Ta=n=>sr.find(t=>t.id===n)||sr.find(t=>t.id===J_);var K_=()=>Ta(Ce.lang).table||"pt",q=n=>(au[K_()]||au.pt)[n]||n,Ec=n=>sr.some(t=>t.id===n&&t.table)?(Ce.lang=n,Ns(),Ee("lang"),!0):!1,Ea={},ve=(n,t)=>((Ea[n]||(Ea[n]=[])).push(t),t),Ee=(n,t)=>(Ea[n]||[]).forEach(e=>e(t));function Xt(n){let t=document.getElementById("toast");t.textContent=n,t.classList.add("on"),clearTimeout(Xt._t),Xt._t=setTimeout(()=>t.classList.remove("on"),2400)}var Sc=new ga,Kt=new qe(72,1,.05,120);Kt.rotation.order="YXZ";var ce=new hi;Sc.add(ce);var ln=1.55;Kt.position.set(0,ln,0);var rr=St?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new er({antialias:!0,alpha:!0});St||(rr.setClearColor(0,0),document.getElementById("gl").appendChild(rr.domElement));var ar=St?new ba:new Ma;document.getElementById("css3d").appendChild(ar.domElement);if(St){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let t of["overlay","hud","toast","boot"])n.append(document.getElementById(t))}function j_(){let n=Ce.quality;return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.6)}function Ra(){document.documentElement.dataset.quality=Ce.quality,St||(he.width=innerWidth,he.height=innerHeight);let n=he.width,t=he.height;Kt.aspect=n/t,Kt.updateProjectionMatrix(),rr.setPixelRatio(j_()),rr.setSize(n,t),ar.setSize(n,t),Ee("resize")}addEventListener("resize",Ra);addEventListener("orientationchange",()=>setTimeout(Ra,120));Ra();ve("quality",Ra);var Q_=Object.freeze(["passthrough","sunset","night","space"]),lu=()=>[{id:"passthrough",name:q("envPass"),thumb:null},{id:"sunset",name:q("envSunset"),thumb:"./env/sunset.jpg"},{id:"night",name:q("envNight"),thumb:"./env/night.jpg"},{id:"space",name:q("envSpace"),thumb:"./env/space.jpg"}];function Ac(n){var t,e;Ce.env=Q_.includes(n)?n:"passthrough",Ns(),Ee("env",Ce.env),(e=(t=window.NativeXR)==null?void 0:t.env)==null||e.call(t,Ce.env)}var Ze={ok:!1,has:!1,q:new $e,tmp:new $e,e:new Zn},tx=new $e,ex=new $e(-Math.SQRT1_2,0,0,Math.SQRT1_2),nx=new L(0,0,1),Aa=Math.PI/180;function ix(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*Aa}function sx(n){n.alpha!=null&&(Ze.has=!0,Ze.e.set(n.beta*Aa,n.alpha*Aa,-n.gamma*Aa,"YXZ"),Ze.tmp.setFromEuler(Ze.e),Ze.tmp.multiply(ex),Ze.tmp.multiply(tx.setFromAxisAngle(nx,-ix())),Ze.q.copy(Ze.tmp))}async function or(){if(St)return Ze.ok=Ze.has=!0,Ee("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(Xt("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",sx,!0),Ze.ok=!0,setTimeout(()=>{Ze.has||Xt("Sem girosc\xF3pio: arraste para olhar")},1200),Ee("gyro",!0),!0)}catch{return Xt("Girosc\xF3pio indispon\xEDvel"),!1}}var rx=()=>Ze.ok&&Ze.has,Hi=null,Ds=0,wc=0;addEventListener("pointerdown",n=>{St||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Hi={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Hi&&(Ds-=(n.clientX-Hi.x)*.0032,wc=Math.max(-1.2,Math.min(1.2,wc-(n.clientY-Hi.y)*.0032)),Hi={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Hi=null);addEventListener("pointercancel",()=>Hi=null);function Ca(){let n=new Zn().setFromQuaternion(Kt.quaternion,"YXZ");ce.rotation.y=n.y,ce.position.set(0,0,0),Ee("recenter"),Xt(q("centered"))}var hu=[],cr=n=>hu.push(n),ou=performance.now(),Sa=0,yc=0,bc=0,wa=0,Mc=0,uu=0,en=null,du=()=>{let n=performance.now();bc>0&&(wa+=(n-bc)/1e3,Mc++,wa>=1&&(uu=Math.round(Mc/wa),wa=0,Mc=0)),bc=n};function fu(n){let t=Math.min((n-ou)/1e3,.05);ou=n,St||(rx()?(Kt.quaternion.slerp(Ze.q,1-Math.exp(-t*12)),Ds&&(Kt.rotateY(Ds),Ds=0)):(Kt.quaternion.setFromEuler(new Zn(wc,Kt.rotation.y+Ds,0,"YXZ")),Ds=0)),Kt.position.set(0,ln,0);for(let e of hu)e(t,n);if(rr.render(Sc,Kt),ar.render(Sc,Kt),Sa+=t,yc++,Sa>=1){let e=document.getElementById("fps");e.textContent=Ce.showFps?Math.round(yc/Sa)+" fps"+(St&&Ce.handsOn?" \xB7 tracking "+uu+" fps":"")+(St&&Ce.handsOn?ax():""):"",Sa=0,yc=0}requestAnimationFrame(fu)}requestAnimationFrame(fu);Ac(Ce.env);if(St){let n=new Jt,t=!0;window.nextvrPose=e=>{n.fromArray(e).invert(),Kt.quaternion.setFromRotationMatrix(n),Kt.position.set(0,ln,0),Kt.updateMatrixWorld(!0),t&&(ce.rotation.y=new Zn().setFromQuaternion(Kt.quaternion,"YXZ").y,t=!1)},window.nextvrMessage=Xt,window.nextvrDiag=e=>{en=e}}function ax(){if(!en)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,t=[],e=n(en.camera);e!==null&&t.push("cam "+e);let i=n(en.infer);return i!==null&&t.push("infer "+i+"ms"),en.delegate&&t.push(String(en.delegate).split(" ")[0]),typeof en.narrow=="number"&&typeof en.wide=="number"&&en.narrow+en.wide>0&&t.push("slots "+(en.narrow>=en.wide?1:2)),n(en.stale)>0&&t.push("stale "+Math.round(en.stale)),t.length?" \xB7 "+t.join(" \xB7 "):""}var Pa=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(t,e){if(t==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==t&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=t,e?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let t=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,t}},La=class{constructor({decideMs:t=150,dragOnPx:e=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=t,this.dragOnPx=e,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(t,e,i,s){return this.mode="undecided",this.handId=t,this.anchorX=e,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(t,e,i,s){if(this.mode==="idle"||t!==this.handId)return this.mode;let r=Math.hypot(e-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var _i=[],ht={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},gi=new Pa,Us=new La,gu=Math.tan(36*Math.PI/180),ox=gu*1.5,Ua=!1,Cc=-1/0,Da=1,Na=1,Tc=null,_u=500,xu=()=>Ua;async function ur(){return St?(Ua=!0,window.NativeXR.hands(!0),Ee("hands",!0),!0):(Xt("Hand tracking requires the Android camera pipeline."),!1)}function vu(n){for(let t of n)Ee(`pinch${t}`,ht)}function hr(){let n=gi.cancel();Us.reset(),ht.down=ht.active=!1,ht.phase=gi.phase,ht.hand=null,ht.mode="idle",hx(),vu(n)}function Pc(){hr()}function Lc(){hr(),_i.length=0,Ua=!1,Cc=-1/0,Ee("phonehands",{hands:[],consumed:new Set,scaleX:Da,scaleY:Na}),St&&window.NativeXR.hands(!1),Ee("hands",!1)}function Ic(n){return{x:.5+n[0]/(2*ox),y:.5-n[1]/(2*gu)}}var cx=250,pu=1.6,mu=.06,nn={x:0,y:0},lr=0,Ia=0;function Oa(n=performance.now()){if(!ht.active)return{x:ht.x,y:ht.y};let t=n-lr;if(!(t>0)||t>cx)return{x:ht.x,y:ht.y};let e=t/1e3,i=s=>Math.max(-mu,Math.min(mu,s));return{x:Math.min(1,Math.max(0,ht.x+i(nn.x*e))),y:Math.min(1,Math.max(0,ht.y+i(nn.y*e)))}}function lx(n,t,e=0){let i=e>0&&Ia>0?(e-Ia)/1e9:lr>0?(t-lr)/1e3:-1;if(ht.active&&i>.004&&i<.3){let s=r=>Math.max(-pu,Math.min(pu,r));nn.x+=(s((n.x-ht.x)/i)-nn.x)*.35,nn.y+=(s((n.y-ht.y)/i)-nn.y)*.35,Math.hypot(nn.x,nn.y)<.12&&(nn.x=nn.y=0)}else i>=0&&i<=.004||(nn.x=nn.y=0);lr=t,Ia=e>0?e:0}function hx(){nn.x=nn.y=0,lr=0,Ia=0}St&&(window.nextvrHands=(n,t=1,e=1)=>{if(!Ua)return;du();let i=performance.now();Da=t,Na=e,Cc=i,_u=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),_i.splice(0,_i.length,...n.hands||[]),Ee("handframe",{...n,hands:_i});let r={hands:_i,consumed:new Set,scaleX:Da,scaleY:Na};if(Ee("phonehands",r),r.blockFar){hr();return}let o=_i.filter(h=>!r.consumed.has(h.id)),a=gi.down&&o.find(h=>h.id===gi.handId)||o.find(h=>h.pinching)||[...o].sort((h,u)=>u.palmWidth-h.palmWidth)[0];if(!a){hr();return}let c=Ic(a.aim);lx(c,i,Number(n.timestampNs)||0),ht.x=c.x,ht.y=c.y,ht.active=!0,ht.hand=a;let l=a.predicted?[]:gi.update(a.id,a.pinching);l.includes("down")?Us.begin(a.id,c.x*he.width,c.y*he.height,i):l.includes("up")?Us.end():l.includes("cancel")&&Us.reset(),gi.down&&!a.predicted&&Us.sample(a.id,c.x*he.width,c.y*he.height,i),ht.mode=Us.mode,ht.down=gi.down,ht.phase=gi.phase,vu(l)});var Rc=document.getElementById("overlay");Rc.getContext("2d").clearRect(0,0,Rc.width,Rc.height);cr(()=>{var n,t;St&&Tc!==!!Ot.handDraw&&(Tc=!!Ot.handDraw,(t=(n=window.NativeXR).handVisuals)==null||t.call(n,Tc)),_i.length&&performance.now()-Cc>_u&&(_i.length=0,hr(),Ee("phonehands",{hands:[],consumed:new Set,scaleX:Da,scaleY:Na}))});var ux=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),dx=Object.freeze({appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="m15 18-6-6 6-6"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>'}),fx=Object.freeze({...dx,...ux});function qt(n,t="ui-icon"){let e=fx[n];if(!e)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${e}</svg>`}var ye=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),dr=(n,t,e)=>Math.max(t,Math.min(e,n)),Je=n=>Number.isFinite(n)?n:0;function Dc(n,t=0,e=1.55,i=null){let s=Je(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:e,o=Je(n==null?void 0:n.z),a=Number.isFinite(i)?i:Math.hypot(s,o);a<1e-5&&(a=ye.minDistance,s=0,o=-a);let c=dr(Math.atan2(-s,-o),-ye.maxYaw,ye.maxYaw);a=dr(a,ye.minDistance,ye.maxDistance);let l=Math.max(0,Je(t)),h=e+ye.lowerEdgeFromEye+l,u=e+ye.upperEdgeFromEye-l;return r=h<=u?dr(r,h,u):e,{x:-Math.sin(c)*a,y:r,z:-Math.cos(c)*a}}function yu(n,t,e=1200,i=800){return!n||!t?0:Math.hypot((Je(t.x)-Je(n.x))*e,(Je(t.y)-Je(n.y))*i)}function Nc(n,t,e,i){return yu(n,t,e,i)>=ye.dragActivationPx}function bu(n,t,e,i){return yu(n,t,e,i)>=ye.resizeActivationPx}function Uc(n,t){let e=Je(n==null?void 0:n.x),i=Je(n==null?void 0:n.y),s=Je(n==null?void 0:n.z),r=Je(t==null?void 0:t.x)-e,o=Je(t==null?void 0:t.y)-i,a=Je(t==null?void 0:t.z)-s,c=Math.hypot(r,o,a);if(!Number.isFinite(c)||c<=ye.motionDeadZone)return{x:e,y:i,z:s};let h=Math.min(c,ye.maxMotionStep)/c;return{x:e+r*h,y:i+o*h,z:s+a*h}}var px=Object.freeze({maxAngle:1.15});function fr(n){let t=Number.isFinite(n)?n:0;return Math.max(0,Math.min(px.maxAngle,t))}function Oc(n,t){let e=fr(t);return e<1e-4?1/0:Math.max(0,n)/2/Math.sin(e)}function Fa(n,t){if(!Number.isFinite(t)||t<=0)return 0;let e=t*t-n*n;return e<=0?t:t-Math.sqrt(e)}function xi(n,t=ye.maxResize){let e=dr(Je(t),ye.minResize,ye.maxResize);return dr(Number.isFinite(n)?n:1,ye.minResize,e)}function Mu(n,t,e=1.55){let i=Math.max(1e-5,Je(t)),s=Math.min(n-(e+ye.lowerEdgeFromEye),e+ye.upperEdgeFromEye-n);return xi(s/i)}function Su(n,t,e,i){return!(t>1)||!Number.isFinite(e)?xi(n,i):xi(n*e/t,i)}function wu(n,t){let e=xi(n),s=xi(t)-e;return Math.abs(s)<.004?e:xi(e+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function Eu(n,t){let e=Math.max(0,Math.min(5,n|0)),i=Math.min(3,e),s=e-i,r=[];for(let o=0;o<i;o++)r.push({angle:o===0?0:o%2?t:-t,row:0});for(let o=0;o<s;o++)r.push({angle:s===1?0:o===0?-t/2:t/2,row:1});return r}var Au=1.22;function mx(n,t){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,t)))}function Tu({width:n,dist:t,gap:e=.5,outerLimit:i=1.3}){let s=mx(n,t);return Math.min(s*(1+Math.max(0,e)),Math.max(0,i))}function Ru(n){let t=null;for(let e of n)(!t||(e.lastFocus||0)<(t.lastFocus||0))&&(t=e);return t}var ge=.00105,Qt=[],Wi=null,Fs=n=>{var t;return(t=n==null?void 0:n.id)!=null&&t.startsWith("android:")?`android_${n.id.slice(8)}`:null},Dn={y:ln-.6,z:-1.7,h:.12},kc=class{constructor({id:t,title:e,node:i,w:s=1040,h:r=660,onboarding:o=!1}){this.onboarding=o,this.id=t,this.title=e,this.w=s,this.h=r,this.pinned=!0,this.target=new L,this.resizeScale=1,this.slot=0,this.curve=fr(o?0:Ot.win360?Ot.win360K:0),this.curveRadius=Oc(s,this.curve);let a=document.createElement("div");a.className="win-shell",a.dataset.windowId=t,a.dataset.resizeScale="1",a.style.width=s+"px";let c=document.createElement("div");c.className="win",c.style.width=s+"px",c.style.height=r+"px",c.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        ${Fs(this)?`<button class="win-btn" data-act="android-back" aria-label="${q("androidBack")}" title="${q("androidBack")}">${qt("back")}</button>`:""}
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${q("repin")}" title="${q("repin")}">${qt("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${q("close")}" title="${q("close")}">${qt("x")}</button>
      </div><div class="win-body"></div>`,c.querySelector(".win-title").textContent=e,c.querySelector(".win-body").appendChild(i),c.addEventListener("pointerdown",()=>Rn(this),!0),c.querySelector(".win-bar").addEventListener("click",u=>{var m;let d=u.target.closest("[data-act]");if(d)if(d.dataset.act==="close")zs(this);else if(d.dataset.act==="curve")this.setCurve(this.curve>0?0:fr(Ot.win360K));else if(d.dataset.act==="android-back"){let g=Fs(this);g&&((m=window.NativeXR)==null||m.key(g,"BACK"))}else _x(this)});let l=document.createElement("div");l.className="win-handle",l.title=q("moveWindow"),l.setAttribute("aria-label",q("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.title=q("resize"),h.setAttribute("aria-label",q("resize")),h.innerHTML=qt("move"),a.append(c,l,h),this.el=c,this.shell=a,this.handle=l,this.resizeHandle=h,a.dataset.curve=String(this.curve),o&&(c.querySelector(".win-bar").hidden=!0),this.obj=new Is(a),this.obj.scale.setScalar(ge*(this.onboarding?tn.welcomeScale:Ot.winScale)),ce.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=Fc(s*ge,r*ge,this,this.hitSegments),this.bendHit(),this.grab=Fc(260*ge,90*ge,this),this.grab.userData.isHandle=!0,this.resizeHit=Fc(112*ge,112*ge,this),this.resizeHit.userData.isResize=!0,!St){let u=d=>({x:d.clientX/he.width,y:d.clientY/he.height});l.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);qc(this,m.x,m.y,"desktop"),l.setPointerCapture(d.pointerId)}),l.addEventListener("pointermove",d=>{if(jt.win===this){let m=u(d);Yc(m.x,m.y)}}),l.addEventListener("pointerup",$i),l.addEventListener("pointercancel",$i),h.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);Hu(this,m.x,m.y),h.setPointerCapture(d.pointerId)}),h.addEventListener("pointermove",d=>{if(be.win===this){let m=u(d);Vu(m.x,m.y)}}),h.addEventListener("pointerup",Bs),h.addEventListener("pointercancel",Bs)}}setCurve(t){this.curve=fr(t),this.curveRadius=Oc(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let e=this.el.querySelector('[data-act="curve"]');e&&e.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new gn(this.w*ge,this.h*ge,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(t){return Fa(t,this.curveRadius)*ge}bendHit(){let t=this.hit.geometry.attributes.position;if(this.curve<=0)for(let e=0;e<t.count;e++)t.setZ(e,0);else for(let e=0;e<t.count;e++)t.setZ(e,Fa(t.getX(e)/ge,this.curveRadius)*ge);t.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let t=this.obj;t.position.copy(this.target);let e=Math.atan2(-t.position.x,-t.position.z)*Ot.winCurve,i=Math.hypot(t.position.x,t.position.z)||.001,s=Math.atan2(ln-t.position.y,i)*Ot.winTilt*-1;t.rotation.set(s,e,0,"YXZ");let r=(this.onboarding?tn.welcomeScale:Ot.winScale)*this.resizeScale;t.scale.setScalar(ge*r),this.hit.position.copy(t.position),this.hit.rotation.copy(t.rotation),this.hit.scale.setScalar(r);let o=(this.h/2+34)*ge*r;this.grab.position.copy(t.position),this.grab.rotation.copy(t.rotation),this.grab.translateY(-o),this.grab.scale.setScalar(r),this.resizeHit.position.copy(t.position),this.resizeHit.rotation.copy(t.rotation),this.resizeHit.translateX((this.w/2-48)*ge*r),this.resizeHit.translateY(-(this.h/2-48)*ge*r),this.resizeHit.translateZ(this.bulge(this.w/2-48)+.003),this.resizeHit.scale.setScalar(r)}};function Fc(n,t,e,i=1){let s=new Ye(new gn(n,t,i,1),new Jn({visible:!1}));return s.userData.win=e,ce.add(s),s}function ei(){for(let r of Qt)r.onboarding&&r.target.set(0,ln,-tn.welcomeDistance);let n=Qt.filter(r=>r.pinned&&!r.onboarding),t=n.length;if(!t)return;let e=St?Ot.winDist:-Dn.z+.5+(Ot.winDist-2.2),i=Math.max(...n.map(r=>r.w*r.resizeScale))*ge*Ot.winScale,s=St?Tu({width:i,dist:e,gap:.5,outerLimit:ye.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));Eu(t,s).forEach(({angle:r,row:o},a)=>{let c=n[a],l=c.h*ge*Ot.winScale*c.resizeScale,h=Dn.y+Dn.h/2+.14+l/2,u=Math.sin(r)*e,d=-Math.cos(r)*e,m=o===0?h:Math.min(h+l*2*(Au-1)+l,ln+ye.upperEdgeFromEye-l);c.target.set(u,m,d)})}ve("recenter",ei);ve("resize",ei);function Nn(n){let t=Qt.find(s=>s.id===n.id);if(t)return Rn(t),t;let e=Qt.filter(s=>!s.onboarding);if(e.length>=5){let s=Ru(e);s&&(Xt(`${q("arcFull")}: ${s.title}`),zs(s))}let i=new kc(n);return Qt.push(i),ei(),Rn(i),i.obj.position.copy(i.target),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),Ee("wins",Qt),i}function zs(n){if(!n)return;let t=Qt.indexOf(n);if(t<0)return;jt.win===n&&$i(),be.win===n&&Bs(),Qt.splice(t,1),ce.remove(n.obj),ce.remove(n.hit),ce.remove(n.grab),ce.remove(n.resizeHit),n.shell.remove(),Wi===n&&(Wi=Qt[Qt.length-1]||null);let e=Fs(n);if(e&&(Ne==null?void 0:Ne.nativeId)===e){let i=Fs(Wi);Ne=i?{nativeId:i}:null,!Ne&&ie&&yi(!1)}ei(),Ee("wins",Qt)}function Rn(n){if(Wi===n)return;Wi=n;let t=Fs(n);t&&(Ne={nativeId:t}),n.lastFocus=performance.now(),Qt.forEach(e=>e.el.classList.toggle("focus",e===Wi))}function _x(n){n.pinned=!0,n.shell.classList.remove("free"),ei()}var vn=new ir,Ha=new Yt,jt={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},be={win:null,start:null,active:!1,startScale:1,startDistance:1},Ke={source:null,start:null,active:!1,plane:null,anchor:null};function Zi(n,t,e=vn){return Kt.updateMatrixWorld(!0),ce.updateMatrixWorld(!0),Ha.set(n*2-1,1-t*2),e.setFromCamera(Ha,Kt),e}function xx(n){return n.h*ge*Ot.winScale*n.resizeScale/2}function vx(n,t,e=null){let i=Dc(t,xx(n),ln,e);return new L(i.x,i.y,i.z)}function qc(n,t,e,i="handle",s=null){if(n.onboarding||be.win)return!1;jt.win&&$i(),Rn(n),Zi(t,e);let r=n.obj.getWorldPosition(new L),o=new on().setFromNormalAndCoplanarPoint(vn.ray.direction.clone(),r),a=vn.ray.intersectPlane(o,new L);if(!a)return!1;let c=ce.worldToLocal(r.clone()),l=Math.hypot(c.x,c.z);return Object.assign(jt,{win:n,source:i,hand:s,start:{x:t,y:e},active:!1,plane:o,anchor:{hit:a.clone(),center:r.clone(),radius:l,applied:new L}}),!0}function yx(){let n=jt.win;!n||jt.active||(jt.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),ei())}function Yc(n,t){let e=jt.win;if(!e)return!1;Zi(n,t);let i=vn.ray.intersectPlane(jt.plane,new L);if(!i)return!1;if(!jt.active){if(!Nc(jt.start,{x:n,y:t},he.width,he.height))return!1;yx()}let s=jt.anchor,r=i.clone().sub(s.hit);s.applied.copy(Uc(s.applied,r));let o=s.center.clone().add(s.applied),a=vx(e,ce.worldToLocal(o),s.radius);return e.target.copy(a),e.obj.position.copy(e.target),!0}function $i(){jt.win&&jt.win.shell.classList.remove("moving"),Object.assign(jt,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function zu(n,t,e="pinch"){if(!qi||jt.win||be.win)return!1;Ke.start&&vi(),Zi(n,t);let i=hn.getWorldPosition(new L),s=new on().setFromNormalAndCoplanarPoint(vn.ray.direction.clone(),i),r=vn.ray.intersectPlane(s,new L);return r?(Object.assign(Ke,{source:e,start:{x:n,y:t},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new L}}),Me.classList.add("grab-armed"),fe.setAttribute("aria-pressed","true"),!0):!1}function bx(){!Ke.start||Ke.active||(Ke.active=!0,Me.classList.remove("grab-armed"),Me.classList.add("moving"))}function $c(n,t){if(!Ke.start)return!1;Zi(n,t);let e=vn.ray.intersectPlane(Ke.plane,new L);if(!e)return!1;if(!Ke.active){if(!Nc(Ke.start,{x:n,y:t},he.width,he.height))return!1;bx()}let i=Ke.anchor,s=e.clone().sub(i.hit);i.applied.copy(Uc(i.applied,s));let r=i.center.clone().add(i.applied),o=ce.worldToLocal(r),a=Dc(o,Dn.h/2,ln);return Vi=new L(a.x,a.y,a.z),Yi=Math.atan2(-a.x,-a.z),br(),!0}function vi(){Me==null||Me.classList.remove("grab-armed","moving"),fe==null||fe.setAttribute("aria-pressed","false"),Object.assign(Ke,{source:null,start:null,active:!1,plane:null,anchor:null})}function ku(n,t,e){Kt.updateMatrixWorld(!0),ce.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new L).project(Kt),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((t-s)*he.width,(e-r)*he.height)}function Hu(n,t,e){return n.onboarding||jt.win?!1:(be.win&&Bs(),Rn(n),Object.assign(be,{win:n,start:{x:t,y:e},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,ku(n,t,e))}),!0)}function Vu(n,t){let e=be.win;if(!e)return!1;if(!be.active){if(!bu(be.start,{x:n,y:t},he.width,he.height))return!1;be.active=!0,e.shell.classList.add("resizing")}let i=e.h*ge*Ot.winScale/2,s=Math.max(be.startScale,Mu(e.obj.position.y,i,ln)),r=Su(be.startScale,be.startDistance,ku(e,n,t),s);return e.resizeScale=xi(wu(e.resizeScale,r),s),e.shell.dataset.resizeScale=e.resizeScale.toFixed(3),!0}function Bs(){be.win&&be.win.shell.classList.remove("resizing"),Object.assign(be,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function gr(n,t){Zi(n,t);let e=[];for(let a of Qt)a.onboarding||e.push(a.resizeHit,a.grab),e.push(a.hit);let i=vn.intersectObjects(e,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),o=i.object.geometry.parameters;return{win:s,u:r.x/o.width+.5,v:.5-r.y/o.height,distance:i.distance}}var Pe=null,_n=null,Mx=n=>{var t;return((t=n==null?void 0:n.closest)==null?void 0:t.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function Sx(n,t,e,i,s){var c,l;let r=s?Mx(s):null;t===0&&(n.target=r,n.activation=r);let o=n.target||r;if(!o)return;let a=t===0?"pointerdown":t===1?"pointerup":t===2?"pointermove":"pointercancel";o.dispatchEvent(new PointerEvent(a,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:t===0||t===2?1:0,clientX:e,clientY:i})),t===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(l=(c=n.activation).matches)!=null&&l.call(c,"input,textarea")&&n.activation.focus())}function Hc(n,t,e=n.x,i=n.y,s=null){var r;n.id==="shell"&&((r=n.win)!=null&&r.onboarding)?Sx(n,t,e,i,s):window.NativeXR.handTouch(n.id,t,e,i)}function Xi(n,t){let e=n.win.el,i=n.u*e.offsetWidth,s=n.v*e.offsetHeight,r=e.getBoundingClientRect(),o=document.elementFromPoint(r.left+i,r.top+s),a=o==null?void 0:o.closest("[data-native-app]"),c=o==null?void 0:o.closest("[data-native-browser]"),l=a||c,h=l==null?void 0:l.getBoundingClientRect(),u=a?a.dataset.nativeId:c?c.dataset.nativeBrowser:"shell",d=r.left+i-((h==null?void 0:h.left)||0),m=r.top+s-((h==null?void 0:h.top)||0);Pe&&Pe.id!==u&&(Hc(Pe,3),Pe=null,t!==0)||(t===0&&(Pe={id:u,win:n.win,x:d,y:m}),Pe&&Pe.id===u&&(Pe.x=d,Pe.y=m,Hc(Pe,t,d,m,o)),(t===1||t===3)&&(Pe=null))}function Gu(){Pe&&Hc(Pe,3),Pe=null,_n=null,$i(),Bs(),vi()}ve("pinchcancel",Gu);function mr(n,t){if(St){Xi(n,t==="down"?0:1);return}let e=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=Wu(n.win.el,e,i);s&&(t==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function Wu(n,t,e){let i=null,s=r=>{for(let o of r.children){let a=wx(o,n);t>=a.l&&t<=a.r&&e>=a.t&&e<=a.b&&(i=o,s(o))}};return s(n),i||n}function wx(n,t){let e=0,i=0,s=n;for(;s&&s!==t;)e+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:e,t:i,r:e+n.offsetWidth,b:i+n.offsetHeight}}ve("pinchdown",()=>{var e;let n=gr(ht.x,ht.y),t=Px(ht.x,ht.y);if(t&&(!n||t.distance<n.distance)){zu(ht.x,ht.y,"pinch");return}if(n!=null&&n.resize){Hu(n.win,ht.x,ht.y);return}if(n!=null&&n.handle){qc(n.win,ht.x,ht.y,"handle",(e=ht.hand)==null?void 0:e.id);return}if(n){Rn(n.win),_n={win:n.win,hit:n};return}Qu("down")||Zu("down")});ve("pinchup",()=>{if(_n&&ht.mode==="drag"&&(mr(_n.hit,"down"),_n=null),_n){let t=gr(ht.x,ht.y),e=t&&!t.handle&&!t.resize&&t.win===_n.win?t:_n.hit;_n=null,mr(e,"down"),mr(e,"up");return}if(Pe){let t=gr(ht.x,ht.y);t&&t.win===Pe.win&&!t.handle&&!t.resize?Xi(t,1):Gu();return}if(be.win){Bs();return}if(jt.win){$i();return}if(Ke.start){$c(ht.x,ht.y),vi();return}let n=gr(ht.x,ht.y);if(n&&!n.handle&&!n.resize){mr(n,"up");return}Qu("up")||Zu("up")});var Me=document.createElement("div");Me.className="dock";var fe=document.createElement("button");fe.type="button";fe.className="dock-grab";fe.title=q("moveDock");fe.setAttribute("aria-label",q("moveDock"));fe.setAttribute("aria-pressed","false");var hn=new Is(Me);ce.add(hn);var Qn=new Ye(new gn(1,1),new Jn({visible:!1})),jn=new Ye(new gn(1,1),new Jn({visible:!1}));ce.add(Qn,jn);if(!St){let n=t=>({x:t.clientX/he.width,y:t.clientY/he.height});fe.addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation();let e=n(t);zu(e.x,e.y,"desktop")&&fe.setPointerCapture(t.pointerId)}),fe.addEventListener("pointermove",t=>{if(Ke.source==="desktop"){let e=n(t);$c(e.x,e.y)}}),fe.addEventListener("pointerup",t=>{Ke.source==="desktop"&&(vi(),fe.hasPointerCapture(t.pointerId)&&fe.releasePointerCapture(t.pointerId))}),fe.addEventListener("pointercancel",vi)}var qi=!0;function Va(n){qi=!!n,hn.visible=qi,qi||(xr=-1,vi())}var Ex=[],yr=[],Vc=[],Ax=qt("wifi"),Tx='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',Rx='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function Xu(n){Ex=n,yr=[],Vc.length=0,Me.innerHTML="";for(let t of n){if(t.kind==="sep"){Me.appendChild(Cx());continue}let e=document.createElement("button");if(e.dataset.id=t.id,e.title=t.label||"",e.setAttribute("aria-label",t.label||t.id),t.kind==="avatar")e.className="dock-av",e.innerHTML=Rx;else if(t.kind==="status")e.className="dock-status",e.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${Ax}</span><span class="dk-bat">${Tx}</span>`;else if(t.kind==="tool")e.className="dock-tool",e.innerHTML=t.svg;else if(e.className="dock-app"+(t.launcher?" dock-launcher":""),t.bg&&(e.style.background=t.bg),e.innerHTML=t.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":t.svg||(t.icon?`<img src="${t.icon}" alt="">`:`<span>${t.glyph||"\u2022"}</span>`),t.win){let i=document.createElement("i");i.className="dock-dot",e.appendChild(i),Vc.push({b:e,win:t.win})}e.addEventListener("click",()=>t.run()),Me.appendChild(e),yr.push(e)}fe.title=q("moveDock"),fe.setAttribute("aria-label",q("moveDock")),Me.appendChild(fe),Yu(),Zc(),_r(),qu(),br()}function Cx(){let n=document.createElement("span");return n.className="dock-sep",n}function qu(){for(let{b:n,win:t}of Vc){let e=n.querySelector(".dock-dot");e&&e.classList.toggle("on",Qt.some(i=>i.id===t))}}ve("wins",qu);function Yu(){let n=Me.querySelector(".dk-time");n&&(n.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}setInterval(Yu,2e4);function Zc(){let n=Me.querySelector(".dk-wifi");n&&(n.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",Zc);addEventListener("offline",Zc);var Os=null;function _r(){let n=Me.querySelector(".dk-bat");if(!n)return;if(!Os){n.style.display="none";return}n.style.display="";let t=n.querySelector(".fill");t.setAttribute("width",String(Math.max(1.6,13*Os.level))),t.setAttribute("fill",Os.charging?"#8de6c8":Os.level<.2?"#ff6b6b":"currentColor")}navigator.getBattery&&navigator.getBattery().then(n=>{Os=n,n.addEventListener("levelchange",_r),n.addEventListener("chargingchange",_r),_r()}).catch(()=>{});var $u=()=>!!ie,xr=-1;ve("pinchcancel",()=>{xr=-1});function Zu(n){let t=Lx(ht.x,ht.y);if(n==="down"){xr=t?t.i:-1;return}let e=xr;if(xr=-1,!(!t||t.i!==e)&&n==="up"){let i=yr[t.i];i&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click())}}function Px(n,t){return!qi||!Gc?null:(Zi(n,t),vn.intersectObject(jn,!1)[0]||null)}function Lx(n,t){if(!qi)return null;Zi(n,t);let e=vn.intersectObject(Qn,!1)[0];if(!e)return null;let i=Qn.worldToLocal(e.point.clone()),s=Qn.geometry.parameters,r=(i.x/s.width+.5)*Me.offsetWidth,o=(.5-i.y/s.height)*Me.offsetHeight;for(let a=0;a<yr.length;a++){let c=yr[a];if(r>=c.offsetLeft&&r<=c.offsetLeft+c.offsetWidth&&o>=c.offsetTop&&o<=c.offsetTop+c.offsetHeight)return{i:a}}return null}var Cu="",Gc="",Yi=0,vr=0,Vi=null;ve("recenter",()=>{Yi=vr=0,Vi=null,vi(),br()});ve("summon-dock",()=>{var t;Kt.updateMatrixWorld(!0),ce.updateMatrixWorld(!0);let n=Kt.getWorldDirection(new L).transformDirection(ce.matrixWorld.clone().invert());Yi=Math.atan2(-n.x,-n.z),Vi=null,vi(),br(),(t=window.NativeXR)==null||t.click()});function br(){let n=he.width>he.height,t=(St?tn.dockDistance:n?1.42:1.75)*Ot.dockDist,e=St?-tn.dockDrop:n?-.5:-.6,i=ge*(St?tn.dockScale:n?.74:.88)*Ot.dockSize;Vi?hn.position.copy(Vi):hn.position.set(-Math.sin(Yi)*t,ln+e,-Math.cos(Yi)*t),hn.rotation.set(.26,Yi,0,"YXZ"),hn.scale.setScalar(i);let s=Me.offsetWidth*i,r=Me.offsetHeight*i,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==Cu&&(Cu=o,Qn.geometry.dispose(),Qn.geometry=new gn(s,r),Dn.h=r,Vi||ei());let a=fe.offsetWidth*i,c=fe.offsetHeight*i,l=a.toFixed(3)+"x"+c.toFixed(3);a>0&&l!==Gc&&(Gc=l,jn.geometry.dispose(),jn.geometry=new gn(a,c)),Qn.position.copy(hn.position),Qn.rotation.copy(hn.rotation),jn.position.copy(hn.position),jn.rotation.copy(hn.rotation),jn.translateY((Me.offsetHeight/2-fe.offsetTop-fe.offsetHeight/2)*i),jn.translateZ(.004),!Vi&&(Dn.y!==hn.position.y||Dn.z!==-t)&&(Dn.y=hn.position.y,Dn.z=-t,ei())}var Ix=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],Pu=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],Dx=0,ie=null,xn=null,Ne=null,ti=!1,Gi=!1;function yi(n,t){if(!n){ie&&(ce.remove(ie),ce.remove(xn),ie.element.remove(),ie=null),Ne=null,ti=Gi=!1;return}let e=Fs(Wi);if(Ne=t||(e?{nativeId:e}:null),ie)return;let i=document.createElement("div");i.className="kb";for(let s of Ix){let r=document.createElement("div");r.className="kb-row";for(let o of s){let a=typeof o=="string"?o:o.k,c=document.createElement("button");c.className="key"+(typeof o=="string"?"":" "+o.cls),typeof o=="string"?c.textContent=a:o.icon?(c.innerHTML=qt(o.icon),c.setAttribute("aria-label",o.label),c.title=o.label):c.textContent=o.lbl||a,c.dataset.k=a,r.appendChild(c)}i.appendChild(r)}i.addEventListener("click",s=>{let r=s.target.closest("[data-k]");r&&Ju(r.dataset.k,r)}),ie=new Is(i),vr=Yi,ie.scale.setScalar(ge*(St?tn.keyboardScale:.9)),ce.add(ie),xn=new Ye(new gn(1,1),new Jn({visible:!1})),ce.add(xn),ju()}function Ju(n,t){if(St&&window.NativeXR.click(),t&&(t.classList.add("hot"),setTimeout(()=>t.classList.remove("hot"),110)),n==="@close")return yi(!1);if(n==="\u21E7"){ti?Gi?(ti=!1,Gi=!1):Gi=!0:(ti=!0,Gi=!1),Ku();return}if(n!=="@lang"){if(n==="@mic"){Xt(q("micOff"));return}if(n==="@emoji"){Lu(Pu[Dx++%Pu.length]);return}Lu(n)}}function Lu(n){if(!Ne)return;let t=n==="\u232B"||n==="\u23CE",e=ti?n.toUpperCase():n;if(Ne.nativeId)window.NativeXR.key(Ne.nativeId,e);else if(n==="\u232B")Ne.value=Ne.value.slice(0,-1);else if(n==="\u23CE"){Ne.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0}));return}else Ne.value+=e;Ne.nativeId||Ne.dispatchEvent(new Event("input",{bubbles:!0})),!t&&ti&&!Gi&&(ti=!1,Ku())}function Ku(){if(ie){for(let n of ie.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=ti?Gi?"lock":"once":"";for(let n of ie.element.querySelectorAll("[data-k]")){let t=n.dataset.k;t.length===1&&/[a-zç]/i.test(t)&&(n.textContent=ti?t.toUpperCase():t.toLowerCase())}}}var Iu="",Nx=.35;function ju(){if(!ie)return;let n=St?tn.keyboardDistance:-Dn.z-.35;ie.position.set(-Math.sin(vr)*n,ln-(St?tn.keyboardDrop:.68),-Math.cos(vr)*n),ie.rotation.set(-Math.PI/2+Nx,vr,0,"YXZ");let t=ie.element.offsetWidth*ie.scale.x,e=ie.element.offsetHeight*ie.scale.x,i=t.toFixed(3)+"x"+e.toFixed(3);t>0&&i!==Iu&&(Iu=i,xn.geometry.dispose(),xn.geometry=new gn(t,e)),xn.position.copy(ie.position),xn.rotation.copy(ie.rotation)}var za=null;ve("pinchcancel",()=>{za=null});function Qu(n){if(!ie)return!1;Ha.set(ht.x*2-1,-(ht.y*2-1)),vn.setFromCamera(Ha,Kt);let t=vn.intersectObject(xn,!1)[0];if(!t)return!1;let e=xn.worldToLocal(t.point.clone()),i=xn.geometry.parameters,s=(e.x/i.width+.5)*ie.element.offsetWidth,r=(.5-e.y/i.height)*ie.element.offsetHeight,o=Wu(ie.element,s,r);return n==="down"?(za=o,!0):(o&&o===za&&o.dataset&&o.dataset.k&&Ju(o.dataset.k,o),za=null,!0)}var Du="";cr((n,t)=>{let e=`${Ot.winScale}:${Ot.winDist}`;if(Du!==e&&(Du=e,ei()),br(),ju(),_n&&ht.mode==="drag"&&(mr(_n.hit,"down"),_n=null),Pe&&ht.active&&ht.down){let i=gr(ht.x,ht.y);i&&i.win===Pe.win&&!i.handle&&!i.resize&&Xi(i,2)}if((be.win||jt.win&&jt.source!=="fist")&&ht.active&&ht.down){let i=Oa(t);be.win&&Vu(i.x,i.y),jt.win&&jt.source!=="fist"&&Yc(i.x,i.y)}if(Ke.start&&ht.active&&ht.down){let i=Oa(t);$c(i.x,i.y)}for(let i of Qt)i.apply()});if(St){let n=function(){try{Os=JSON.parse(window.NativeXR.battery()),_r()}catch{}};window.nextvrBrowserFocus=t=>yi(!0,{nativeId:t}),n(),setInterval(n,3e4),document.addEventListener("click",t=>{t.target.closest("button")&&window.NativeXR.click()},!0)}var ne=null,Ba=new Map,ka=new Set,Jc={hands:[],consumed:new Set,scaleX:1,scaleY:1},pr=null,Bc=0,Nu=350,Ux=240;function Wc(n,t){Kt.updateMatrixWorld(!0),ce.updateMatrixWorld(!0);let e=new ir;return e.setFromCamera(new Yt(n*2-1,1-t*2),Kt),e}function zc(n,t,e=!1){let i=e&&n.grab||n.palm;return{x:(i[0]-.5)*t.scaleX+.5,y:(i[1]-.5)*t.scaleY+.5}}function Xc(n,t){let e=n.obj.worldToLocal(t.clone()),i=n.obj.getWorldScale(new L),s=n.curve>0?Fa(e.x,n.curveRadius):0;return{local:e,scale:i,u:e.x/n.w+.5,v:.5-e.y/n.h,d:(e.z-s)*i.z}}function Ox(n,t){let e=n.obj.getWorldPosition(new L),i=new L(0,0,1).transformDirection(n.obj.matrixWorld),s=new on().setFromNormalAndCoplanarPoint(i,e);if(!(n.curve>0))return t.intersectPlane(s,new L);let r=n.obj.matrixWorld.clone().invert(),o=t.origin.clone().applyMatrix4(r),a=t.origin.clone().add(t.direction).applyMatrix4(r).sub(o).normalize(),c=n.curveRadius,l=a.x*a.x+a.z*a.z;if(l<1e-9)return t.intersectPlane(s,new L);let h=2*(o.x*a.x+(o.z-c)*a.z),u=o.x*o.x+(o.z-c)*(o.z-c)-c*c,d=h*h-4*l*u;if(d<0)return t.intersectPlane(s,new L);let m=Math.sqrt(d);for(let g of[(-h-m)/(2*l),(-h+m)/(2*l)]){if(!(g>0))continue;let _=o.clone().addScaledVector(a,g);if(!(Math.abs(_.x)>c+1e-6||_.z>c))return _.applyMatrix4(n.obj.matrixWorld)}return t.intersectPlane(s,new L)}function Uu(n){let t=null;for(let e of Qt){if(e.onboarding)continue;let i=e.obj.getWorldPosition(new L),s=Ox(e,n.ray);if(!s)continue;let{local:r,scale:o}=Xc(e,s);if(Math.abs(r.x)*o.x>e.w*o.x/2+.08||Math.abs(r.y)*o.y>e.h*o.y/2+.08)continue;let a=n.ray.origin.distanceTo(s);(!t||a<t.distance)&&(t={win:e,point:s,distance:a})}return t}function Ou(n=!1,t=Jc){let e=ne;e!=null&&e.down&&(Xi({win:e.win,u:e.u,v:e.v},n?3:1),!n&&t.hands.some(i=>i.id===e.id&&i.pinching)&&(ka.add(e.id),t.consumed.add(e.id))),ne=null}ve("phonehands",n=>{var a;Jc=n;let t=new Set(n.hands.map(c=>c.id));for(let c of Ba.keys())t.has(c)||Ba.delete(c);for(let c of ka){let l=n.hands.find(h=>h.id===c);!l||!l.pinching?ka.delete(c):n.consumed.add(c)}if(jt.win&&jt.source==="fist"){let c=n.hands.find(l=>l.id===jt.hand);if(!c||!c.fist||!Qt.includes(jt.win))$i();else{n.consumed.add(c.id);let l=zc(c,n,!0);Yc(l.x,l.y)}}let e=performance.now();if(!(jt.win&&jt.source==="fist")){let c=n.hands.find(l=>!l.fist);if(c){let l=zc(c,n),h=Uu(Wc(l.x,l.y));if(h){let{local:u,scale:d}=Xc(h.win,h.point),m=h.win;(Math.abs(u.x)*d.x>m.w*d.x/2-.06||Math.abs(u.y)*d.y>m.h*d.y/2-.06)&&(pr=h.win,Bc=e)}}}for(let c of Qt)(c!==pr||e-Bc>Nu)&&c.shell.classList.remove("phone-grab-hover");pr&&e-Bc<=Nu?pr.shell.classList.add("phone-grab-hover"):pr=null;for(let c of n.hands){let l=Ba.get(c.id)||!1;if(Ba.set(c.id,c.fist),!jt.win&&!be.win&&c.fist&&!l){let h=zc(c,n,!0),u=Uu(Wc(h.x,h.y));u&&(((a=ht.hand)==null?void 0:a.id)===c.id&&Pc(),qc(u.win,h.x,h.y,"fist",c.id)&&n.consumed.add(c.id))}}let i=null;for(let c of n.hands){if(n.consumed.has(c.id)||!c.head||c.head.length!==63)continue;let l=new L().fromArray(c.head,24);if(!(l.length()>.7)){l.applyMatrix4(Kt.matrixWorld);for(let h of Qt){let u=Xc(h,l),d=(ne==null?void 0:ne.win)===h&&ne.id===c.id,m=d?.08:.02,g=d?.26:.11;u.d>g||u.d<-.12||Math.abs(u.local.x)*u.scale.x>h.w*u.scale.x/2+m||Math.abs(u.local.y)*u.scale.y>h.h*u.scale.y/2+m||(!i||d||!i.current&&Math.abs(u.d)<Math.abs(i.d))&&(i={...u,id:c.id,win:h,point:l,current:d})}}}if(!i&&ne&&t.has(ne.id)&&Qt.includes(ne.win)&&e-ne.lastSeen<=Ux&&(i={...ne,current:!0,held:!0}),!i){Ou(!t.has(ne==null?void 0:ne.id),n);return}i.current?(ne.d+=(i.d-ne.d)*.45,ne.u+=(i.u-ne.u)*.45,ne.v+=(i.v-ne.v)*.45,i.held||(ne.lastSeen=e)):(Ou(!1,n),ne={...i,down:!1,previousD:i.d,lastSeen:e});let s=ne,r=s.u>=0&&s.u<=1&&s.v>=0&&s.v<=1,o={win:s.win,u:Math.max(0,Math.min(1,s.u)),v:Math.max(0,Math.min(1,s.v))};!s.down&&r&&s.d<=.012&&s.previousD>.012?(ht.down&&Pc(),Rn(s.win),Xi(o,0),s.down=!0):s.down&&(s.d>=.035||!r)?(Xi(o,1),s.down=!1,n.hands.some(c=>c.id===s.id&&c.pinching)&&(ka.add(s.id),n.consumed.add(s.id))):s.down&&Xi(o,2),s.previousD=s.d,s.down&&(n.blockFar=!0,n.consumed.add(s.id))});var Fu=0,Bu="";cr((n,t)=>{var r,o,a,c;if(!St||t-Fu<16)return;Fu=t;let e=Jc,i=[];for(let l of e.hands){if((ne==null?void 0:ne.id)===l.id&&ne.down){let g=ne,_=new L((g.u-.5)*g.win.w,(.5-g.v)*g.win.h,0).applyMatrix4(g.win.obj.matrixWorld);i.push({id:l.id,end:Kt.worldToLocal(_).toArray(),direct:!0,down:g.down});continue}if(e.consumed.has(l.id)||e.blockFar){i.push({id:l.id,hidden:!0});continue}let h=((r=ht.hand)==null?void 0:r.id)===l.id?Oa(t):Ic(l.aim),u=Wc(h.x,h.y),d=Qt.flatMap(g=>[g.resizeHit,g.grab,g.hit]);qi&&d.push(jn,Qn),xn&&ie&&d.push(xn);let m=u.intersectObjects(d,!1)[0];i.push({id:l.id,...m?{end:Kt.worldToLocal(m.point.clone()).toArray()}:{},down:((o=ht.hand)==null?void 0:o.id)===l.id&&ht.down})}let s=JSON.stringify(i);s!==Bu&&(Bu=s,(c=(a=window.NativeXR).handTargets)==null||c.call(a,s))});var Fx=/^[A-Za-z0-9_]+(?:\.[A-Za-z0-9_]+)+$/,Bx=Object.freeze({netflix:["com.netflix.mediaclient"],youtube:["com.google.android.youtube"],tiktok:["com.zhiliaoapp.musically","com.ss.android.ugc.trill"],discord:["com.discord"],twitch:["tv.twitch.android.app"],prime:["com.amazon.avod.thirdpartyclient"],pluto:["tv.pluto.android"],whatsapp:["com.whatsapp"],instagram:["com.instagram.android"],x:["com.twitter.android","com.x.android"],facebook:["com.facebook.katana"],telegram:["org.telegram.messenger"],spotify:["com.spotify.music"]}),Ga=n=>`android_${n}`;function td(n){let t;try{t=typeof n=="string"?JSON.parse(n):n}catch{return[]}if(!Array.isArray(t))return[];let e=new Map;for(let i of t){if(!i||typeof i.packageName!="string"||i.packageName.length>255||!Fx.test(i.packageName))continue;let s=String(i.label||i.name||i.packageName).trim()||i.packageName;e.has(i.packageName)||e.set(i.packageName,{packageName:i.packageName,name:String(i.name||s).trim()||s,label:s,portrait:!!i.portrait})}return[...e.values()].sort((i,s)=>i.label.localeCompare(s.label))}function ed(n,t){let e=new Map(t.map(o=>[o.packageName,o])),i=new Set,s=n.map(o=>{let a=(Bx[o.id]||[]).map(c=>e.get(c)).find(Boolean);return a?(i.add(a.packageName),{...o,id:Ga(a.packageName),kind:"android",packageName:a.packageName,name:o.name,label:o.label||o.name,portrait:a.portrait,sourceId:o.id}):{...o,kind:"app"}}),r=t.filter(o=>!i.has(o.packageName)).map(o=>({...o,id:Ga(o.packageName),kind:"android",bg:"linear-gradient(145deg,#4775be,#263a62)"}));return[...s,...r]}var ft=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Wa=(n,t="")=>`<span class="icon-label">${qt(n)}${t?`<span>${t}</span>`:""}</span>`,el=n=>{if(St)return Be("browser-extra",q("browser"),n);try{window.open(n,"_blank","noopener")}catch{Xt("Bloqueado pelo navegador")}};function Be(n,t,e,i){let s=ft("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=ft("div","row");r.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let o=ft("input","fld");o.value=e,o.placeholder=q("search");let a=ft("button","go",qt("enter"));a.setAttribute("aria-label",q("open")),a.title=q("open");let c=ft("button","go",qt("external"));c.setAttribute("aria-label",q("open")),c.title=q("open"),c.style.background="rgba(255,255,255,.12)",c.style.color="#fff",r.append(o,a,c);let l=ft("div","warn",i||"");l.style.cssText+="margin:12px 14px 0;display:none";let h=ft("div");h.style.cssText="flex:1;min-height:0;position:relative";let u=ft(St?"div":"iframe");St&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),h.appendChild(u),s.append(r,l,h);let d=m=>{let g=(m||"").trim();if(g){if(/^https?:\/\//i.test(g)||(g=/\.\w{2,}($|\/)/.test(g)?"https://"+g:"https://duckduckgo.com/?q="+encodeURIComponent(g)),o.value=g,St){u.dataset.url=g,l.style.display="none";return}u.src=g,l.style.display="block",l.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};return a.onclick=()=>d(o.value),o.addEventListener("keydown",m=>{m.key==="Enter"&&d(o.value)}),o.addEventListener("focus",()=>yi(!0,o)),c.onclick=()=>el(o.value),d(e),Nn({id:n,title:t,node:s})}var rd=["https://pipedapi.kavin.rocks","https://pipedapi.leptons.xyz","https://pipedapi.nosebs.ru","https://pipedapi.adminforge.de","https://api.piped.private.coffee","https://pipedapi.reallyaweso.me"],ad=["https://inv.nadeko.net/api/v1","https://inv.tux.pizza/api/v1"],je=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function $a(n,t=11e3){let e=new AbortController,i=setTimeout(()=>e.abort(),t);try{let s=await fetch(n,{signal:e.signal});if(!s.ok)throw new Error("http");return await s.json()}finally{clearTimeout(i)}}function od(n,t){if(t)return"AO VIVO";if(n==null||n<0)return"";n=Math.round(n);let e=Math.floor(n/3600),i=Math.floor(n%3600/60),s=n%60,r=o=>String(o).padStart(2,"0");return e?`${e}:${r(i)}:${r(s)}`:`${i}:${r(s)}`}function cd(n){return n=Number(n),!n||n<0?"":n>=1e6?(n/1e6).toFixed(1).replace(".",",")+" mi":n>=1e3?Math.round(n/1e3)+" mil":String(n)}function zx(n){let t=String(n||"").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)||String(n||"").match(/^([\w-]{11})$/);return t?t[1]:null}function ld(n){let t=String(n.url||"").match(/[?&]v=([\w-]{11})/);return!t||!n.title?null:{id:t[1],title:n.title,thumb:n.thumbnail||`https://i.ytimg.com/vi/${t[1]}/hqdefault.jpg`,chan:n.uploaderName||"",dur:od(n.duration,n.isLive),live:!!n.isLive,views:cd(n.views)}}function hd(n){if(!n.videoId||!n.title)return null;let t=(n.videoThumbnails||[]).find(e=>e.quality==="medium")||(n.videoThumbnails||[])[0]||{};return{id:n.videoId,title:n.title,thumb:t.url,chan:n.author||"",dur:od(n.lengthSeconds,n.liveNow),live:!!n.liveNow,views:cd(n.viewCount)}}async function ud(n){for(let t of rd)try{let i=((await $a(`${t}/search?q=${encodeURIComponent(n)}&filter=videos`)).items||[]).map(ld).filter(Boolean);if(i.length)return i}catch{}for(let t of ad)try{let e=await $a(`${t}/search?q=${encodeURIComponent(n)}&type=video`),i=(Array.isArray(e)?e:[]).map(hd).filter(Boolean);if(i.length)return i}catch{}throw new Error("offline")}async function kx(){for(let n of rd)try{let t=await $a(`${n}/trending?region=BR`),e=(Array.isArray(t)?t:[]).map(ld).filter(Boolean);if(e.length)return e}catch{}for(let n of ad)try{let t=await $a(`${n}/popular?region=BR`),e=(Array.isArray(t)?t:[]).map(hd).filter(Boolean);if(e.length)return e}catch{}return ud("em alta brasil")}var Un=null,Ji=null;function Kc(){try{Un&&Un.unMute&&(Un.unMute(),Un.setVolume&&Un.setVolume(100))}catch{}}function Hx(){return Ji||(Ji=new Promise((n,t)=>{if(window.YT&&window.YT.Player)return n(window.YT);let e=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{e&&e(),Ji=null,n(window.YT)};let i=document.createElement("script");i.src="https://www.youtube.com/iframe_api",i.onerror=()=>{Ji=null,t(new Error("api"))},document.head.appendChild(i),setTimeout(()=>{window.YT&&window.YT.Player||(Ji=null,t(new Error("timeout")))},9e3)}),Ji)}function jc(){try{Un&&Un.destroy&&Un.destroy()}catch{}Un=null}function dd(){let n=ft("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f12";let t=ft("div","row");t.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let e=ft("button","go",qt("back"));e.setAttribute("aria-label","Voltar"),e.title="Voltar",e.style.display="none";let i=ft("input","fld");i.placeholder="Pesquisar no YouTube ou colar link";let s=ft("button","go",qt("search"));s.setAttribute("aria-label",q("searchYt")),s.title=q("searchYt");let r=ft("button","go",qt("external"));r.setAttribute("aria-label","Abrir fora"),r.title="Abrir fora",r.style.background="rgba(255,255,255,.12)",r.style.color="#fff",t.append(e,i,s,r);let o=ft("div","yt-chips"),a=ft("div","yt-scroll");n.append(t,o,a);let c=["M\xFAsica","Jogos","VR 360","Not\xEDcias","Ao vivo","Filmes"];o.innerHTML=c.map(A=>`<button class="yt-chip" data-q="${A}">${A}</button>`).join(""),o.addEventListener("click",A=>{let T=A.target.closest("[data-q]");T&&(i.value=T.dataset.q,p(T.dataset.q))});let l=[],h="",u=null,d=0,m=()=>{a.innerHTML=`<div class="yt-grid">${'<span class="yt-card"><span class="yt-thumb yt-skel"></span><span class="yt-meta"><span class="yt-skel-l"></span><span class="yt-skel-l short"></span></span></span>'.repeat(6)}</div>`},g=A=>`<button class="yt-card" data-v="${A.id}"><span class="yt-thumb">${A.thumb?`<img loading="lazy" src="${A.thumb}" alt="">`:""}`+(A.dur?`<span class="yt-dur${A.live?" live":""}">${je(A.dur)}</span>`:"")+`</span><span class="yt-meta"><span class="yt-t">${je(A.title)}</span><span class="yt-c">${je(A.chan)}${A.views?" \xB7 "+je(A.views):""}</span></span></button>`;function _(A,T){jc(),u=null,l=T,e.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-sec">${je(A)}</div><div class="yt-grid">${T.map(g).join("")}</div>`}function f(A){e.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-err"><div style="display:grid;place-items:center;font-size:46px">${qt("wifi")}</div><div class="yt-err-t">Sem conex\xE3o com a busca</div><div class="yt-err-s">Verifique a internet e tente de novo. D\xE1 para colar um link direto tamb\xE9m.</div><button class="yt-btn" data-retry>${Wa("refresh","TENTAR DE NOVO")}</button></div>`,a.querySelector("[data-retry]").onclick=()=>A?p(A):w()}async function p(A){if(A=(A||"").trim(),!A)return;let T=zx(A);if(T)return v({id:T,title:"V\xEDdeo do YouTube",chan:"",dur:"",views:""});let E=++d;m();try{let G=await ud(A);if(E!==d)return;h=`Resultados para \u201C${A}\u201D`,_(h,G)}catch{E===d&&f(A)}}async function w(){let A=++d;m();try{let T=await kx();if(A!==d)return;h="Em alta no Brasil",_(h,T)}catch{A===d&&f(null)}}function v(A){u=A,l.length||(l=[A]),e.style.display="",o.style.display="none",a.innerHTML=`<div class="yt-player">
        <div class="yt-holder yt-frame"></div>
        <div class="yt-info">
          <div class="yt-ptitle">${je(A.title)}</div>
          ${A.chan?`<div class="yt-pchan">${je(A.chan)}${A.views?" \xB7 "+je(A.views):""}</div>`:""}
          <div class="yt-prow">
            <button class="yt-btn" data-back>${Wa("back","VOLTAR")}</button>
            <button class="yt-btn" data-snd>${Wa("volume","ATIVAR SOM")}</button>
            <button class="yt-btn" data-out>${Wa("external","ABRIR")}</button>
          </div>
          <p class="yt-pchan" style="margin-top:10px">Use o controle de som com a m\xE3o e ajuste o volume pelas teclas do Android.</p>
        </div></div>`;let T=a.querySelector(".yt-holder");if(a.querySelector("[data-back]").onclick=()=>{jc(),_(h||"Em alta no Brasil",l)},a.querySelector("[data-out]").onclick=()=>el("https://www.youtube.com/watch?v="+A.id),a.querySelector("[data-snd]").onclick=Kc,St){let G=ft("div");G.dataset.nativeBrowser="youtube-player",G.dataset.url="https://www.youtube.com/embed/"+A.id+"?autoplay=1&playsinline=1",G.style.cssText="width:100%;height:100%",T.append(G),a.querySelector("[data-snd]").onclick=()=>{window.NativeXR.click(),Xt("Use Android media volume to adjust sound.")};return}Hx().then(G=>{if(u===A)try{Un=new G.Player(T,{videoId:A.id,playerVars:{autoplay:1,playsinline:1,rel:0,mute:0,modestbranding:1,enablejsapi:1},events:{onReady:b=>{try{b.target.unMute(),b.target.setVolume(100),b.target.playVideo()}catch{}setTimeout(Kc,350)},onError:E}})}catch{E()}}).catch(E);function E(){u!==A||T.dataset.fb||(T.dataset.fb="1",T.innerHTML=`<iframe class="yt-frame" title="${je(A.title)}" src="https://www.youtube-nocookie.com/embed/${A.id}?autoplay=1&mute=0&playsinline=1&rel=0&enablejsapi=1" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`)}setTimeout(Kc,600)}a.addEventListener("click",A=>{let T=A.target.closest("[data-v]");if(!T)return;let E=l.find(G=>G.id===T.dataset.v);E&&v(E)}),e.onclick=()=>_(h||"Em alta no Brasil",l),s.onclick=()=>p(i.value),r.onclick=()=>el(u?"https://www.youtube.com/watch?v="+u.id:"https://m.youtube.com/results?search_query="+encodeURIComponent(i.value||"")),i.addEventListener("focus",()=>yi(!0,i)),i.addEventListener("keydown",A=>{A.key==="Enter"&&p(i.value)}),w();let R=Nn({id:"youtube",title:"YouTube",node:n});return ve("wins",()=>{Qt.some(A=>A.id==="youtube")||jc()}),R}var Xa=[];function fd(){let n=ft("div","pad"),t=ft("div");t.innerHTML=`<h2>${q("gallery")}</h2><p class="sub">${q("photosHelp")}</p>`;let e=ft("button","go",q("pickPhotos")),i=ft("input");i.type="file",i.accept="image/*",i.multiple=!0,i.style.display="none";let s=ft("div","grid4");s.style.marginTop="20px";let r=ft("div");r.style.cssText="margin-top:18px";let o=()=>{if(s.innerHTML="",!Xa.length){s.innerHTML=`<p class="sub" style="grid-column:1/-1">${q("noPhotos")}</p>`;return}Xa.forEach((a,c)=>{let l=ft("button","thumb");l.innerHTML=`<img src="${a}" alt="">`,l.onclick=()=>{r.innerHTML=`<img src="${a}" style="width:100%;border-radius:16px">`},s.appendChild(l)})};return e.onclick=()=>i.click(),i.onchange=()=>{for(let a of i.files)Xa.push(URL.createObjectURL(a));o(),Xt(Xa.length+" fotos")},o(),n.append(t,e,i,s,r),n.append(ft("p","note","Na web, o Android pede as fotos pelo seletor do sistema \u2014 \xE9 a forma correta e n\xE3o precisa de permiss\xE3o extra. No app Android use READ_MEDIA_IMAGES e liste direto no MediaStore.")),Nn({id:"gallery",title:q("gallery"),node:n})}function Le(n,t,e){let i=ft("div","opt");return i.append(ft("div","opt-l",`<div class="opt-t">${n}</div>${t?`<div class="opt-d">${t}</div>`:""}`),e),i}function Qc(n,t){let e=ft("button","sw");return e.dataset.on=Ot[n]?"1":"0",e.onclick=()=>{Ot[n]=Ot[n]?0:1,e.dataset.on=Ot[n]?"1":"0",Ns(),t&&t(Ot[n])},e}function Ki(n,t,e,i,s){let r=ft("input");return r.type="range",r.min=t,r.max=e,r.step=i,r.value=Ot[n],r.oninput=()=>{Ot[n]=+r.value,Ns(),s&&s(Ot[n])},r}function il(){var n;if(!St||!((n=window.NativeXR)!=null&&n.shizukuStatus))return{state:St?"not_running":"web"};try{let t=JSON.parse(window.NativeXR.shizukuStatus());return t&&typeof t=="object"?t:{state:"not_running"}}catch{return{state:"not_running"}}}function Vx(n){return(n==null?void 0:n.state)==="ready"?n.backend&&n.backend!=="unknown"?`${q("shizukuReady")} \xB7 ${n.backend.toUpperCase()}`:q("shizukuReady"):(n==null?void 0:n.state)==="needs_permission"?q("shizukuNeedsPermission"):(n==null?void 0:n.state)==="unsupported"?q("shizukuUnsupported"):(n==null?void 0:n.state)==="web"?"Android app required":q("shizukuNotRunning")}function nl(n=il()){document.querySelectorAll("[data-shizuku-status]").forEach(t=>{t.textContent=Vx(n),t.dataset.state=(n==null?void 0:n.state)||"not_running"}),document.querySelectorAll("[data-shizuku-connect]").forEach(t=>{t.textContent=(n==null?void 0:n.state)==="ready"?q("shizukuReady"):(n==null?void 0:n.state)==="unsupported"?q("shizukuUnsupported"):q("shizukuConnect"),t.disabled=(n==null?void 0:n.state)==="ready"||(n==null?void 0:n.state)==="web"})}function pd(){var t,e;if(!St){Xt("Open NextVR on Android to use installed apps.");return}let n=il();n.state==="needs_permission"?(e=(t=window.NativeXR).requestShizukuPermission)==null||e.call(t):n.state==="ready"?Xt(q("shizukuReady")):n.state==="unsupported"?Xt(q("shizukuUnsupported")):Xt(q("shizukuHelp"))}function qa(){let n=ft("div");n.style.cssText="display:flex;flex-direction:column;height:100%";let t=ft("div","tabs");t.style.padding="18px 24px 0";let e=ft("div","pad");e.style.paddingTop="6px",n.append(t,e);let i=[[q("general"),()=>{e.innerHTML=`<h2>${q("general")}</h2><p class="sub">Next VR \xB7 shell XR para Android</p>`;let o=ft("div","card"),a=ft("button","seg-btn",Ta(Ot.lang||"pt").label);a.onclick=()=>{let h=Nn({id:"language-pick",title:q("langTitle"),w:880,h:660,node:Sd(Ot.lang||"pt",u=>{Ec(u),Xt(q("langChanged")),r(),zs(h)},!0)})},o.append(Le(q("language"),"Mesma tela do primeiro uso",a)),o.append(Le("FPS","Mostrar contador",Qc("showFps")));let c=ft("span","note");c.dataset.shizukuStatus="";let l=ft("button","seg-btn",q("shizukuConnect"));l.dataset.shizukuConnect="",l.onclick=pd,o.append(Le(q("shizuku"),q("androidApps"),c)),o.append(Le(q("androidApps"),q("shizukuHelp"),l)),e.append(o),nl()}],[q("hands"),()=>{e.innerHTML=`<h2>${q("hands")}</h2><p class="sub">C\xE2mera traseira, MediaPipe.</p>`;let o=ft("div","card");o.append(Le(q("on"),"\xDAnica entrada da interface VR",ft("span","note","Sempre ativo"))),o.append(Le(q("sens"),"MediaPipe nativo \xB7 c\xE2mera traseira",ft("span","note","2 m\xE3os \xB7 21 landmarks"))),o.append(Le("Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",Qc("handDraw"))),o.append(Le("Pinch","Entrada nativa est\xE1vel com histerese",ft("span","note","0.30 / 0.48"))),o.append(Le("Detector","MediaPipe Tasks Vision, 2 m\xE3os por frame",ft("span","note","NextVR"))),e.append(o)}],[q("windows"),()=>{e.innerHTML=`<h2>${q("windows")}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;let o=ft("div","card");o.append(Le(q("curve"),"1 = encara o centro; menor = mais aberta",Ki("winCurve",0,1,.05))),o.append(Le("Inclina\xE7\xE3o","Ajuste vertical ao subir/descer",Ki("winTilt",0,1.5,.05))),o.append(Le(q("scale"),"Tamanho das janelas",Ki("winScale",.6,1.6,.05))),o.append(Le(q("dist"),"Dist\xE2ncia do arco",Ki("winDist",St?.6:1.5,St?1.8:3.4,.05))),o.append(Le(q("win360"),q("win360k"),Ki("win360K",.2,1.15,.05))),o.append(Le(q("win360All"),"O bot\xE3o 360\xB0 na barra da janela troca por janela",Qc("win360"))),e.append(o)}],[q("dock"),()=>{e.innerHTML=`<h2>${q("dock")}</h2><p class="sub">No modo paisagem a dock chega mais perto.</p>`;let o=ft("div","card");o.append(Le(q("size"),null,Ki("dockSize",.7,1.5,.05))),o.append(Le(q("dist"),null,Ki("dockDist",.7,1.5,.05))),e.append(o)}],[q("env"),()=>{e.innerHTML="",e.append(ft("h2",null,q("env"))),e.append(ft("p","sub","Passthrough da c\xE2mera ou um panorama 360\xB0 em volta de voc\xEA."));let o=ft("div","grid3");for(let a of lu()){let c=ft("button","env"+(a.thumb?" env-pano":""));c.style.background=a.thumb?`url('${a.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",c.innerHTML=`<span>${a.name}</span>`,c.setAttribute("aria-pressed",Ot.env===a.id),c.onclick=()=>{Ac(a.id),[...o.children].forEach(l=>l.setAttribute("aria-pressed","false")),c.setAttribute("aria-pressed","true")},o.appendChild(c)}e.append(o)}],[q("perf"),()=>{e.innerHTML=`<h2>${q("perf")}</h2><p class="sub">Celular esquentando? Baixe a qualidade.</p>`;let o=ft("div","card"),a=ft("div","seg");for(let[c,l]of[["low","Baixa"],["auto","Autom\xE1tica"],["high","Alta"]]){let h=ft("button",null,l);h.setAttribute("aria-pressed",Ot.quality===c),h.onclick=()=>{Ot.quality=c,Ns(),Ee("quality"),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true")},a.appendChild(h)}o.append(Le(q("quality"),"Resolu\xE7\xE3o de renderiza\xE7\xE3o",a)),e.append(o),e.append(ft("p","note","O hand tracking roda na pr\xF3pria cad\xEAncia (single-flight, sem fila), separado do render. Ative o contador de FPS para ver as duas taxas: render e tracking."))}]],s=0;function r(){t.innerHTML="",i.forEach(([o],a)=>{let c=ft("button",null,o);c.setAttribute("aria-selected",a===s),c.onclick=()=>{s=a,r()},t.appendChild(c)}),i[s][1]()}return r(),Nn({id:"settings",title:q("settings"),node:n})}var md="nextvr.store.installed.v1",gd="nextvr.store.favs.v1",_d="nextvr.lib.recent.v1",sl=n=>{try{let t=JSON.parse(localStorage.getItem(n));return Array.isArray(t)?t:[]}catch{return[]}},On=sl(md),ji=sl(gd),Qi=sl(_d),Za=()=>{try{localStorage.setItem(md,JSON.stringify(On)),localStorage.setItem(gd,JSON.stringify(ji)),localStorage.setItem(_d,JSON.stringify(Qi))}catch{}},Mi={},Sr=[{id:"vrfs",name:"VRFS",label:"VRFS",cat:"Games \xB7 Sports \xB7 Futebol",img:"https://i.ytimg.com/vi/FxkDg2NGzqw/hqdefault.jpg",bg:"linear-gradient(160deg,#1d7a4b,#0c3a2b)",badge:'<span style="background:#e11d2e;border-radius:10px;padding:10px 24px;font-size:32px;font-weight:900;box-shadow:0 4px 18px #0009">VRFS</span>',mark:'<span style="font-size:34px;font-weight:900;font-style:italic;letter-spacing:-1px;text-shadow:0 2px 8px #0008">VRFS</span>'},{id:"minecraft",name:"Minecraft VR",label:"MINECRAFT",cat:"Games \xB7 Sandbox \xB7 Aventura",img:"https://minecraft.wiki/images/thumb/MC_key_art.png/800px-MC_key_art.png",bg:"linear-gradient(180deg,#6cb04a 0 30%,#7a5230 30%)",badge:"",mark:'<span style="font-size:23px;font-weight:900;letter-spacing:1px;text-shadow:0 2px 0 #222">MINECRAFT</span>'},{id:"roblox",name:"Roblox VR",label:"ROBLOX",cat:"Games \xB7 Social \xB7 Multiplayer",img:"",phones:!0,bg:"linear-gradient(145deg,#23232c,#101014)",badge:"",mark:'<span style="display:flex;align-items:center;gap:8px"><span style="width:34px;height:34px;background:#fff;border-radius:8px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:13px;height:13px;background:#c81e2b;border-radius:3px"></span></span><span style="font-size:24px;font-weight:900">ROBLOX</span></span>'},{id:"brawl",name:"Brawl Stars VR",label:"BRAWL STARS",cat:"Games \xB7 A\xE7\xE3o \xB7 Multiplayer",img:"https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/790/hero_bg_brawlstars.a385872a.webp",bg:"linear-gradient(115deg,#ffd02e 0 50%,#1280ff 50%)",badge:"",mark:'<span style="font-size:21px;font-weight:900;color:#111;text-shadow:0 1px 0 #fff">BRAWL<br>STARS \u2605</span>'}],Ja=n=>Sr.find(t=>t.id===n),xd=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">NETFLIX</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"pluto",name:"pluto tv",bg:"linear-gradient(145deg,#34343a,#111115)",html:'<span class="lx-pluto">pluto<i>tv</i></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X Twitter",label:"Twitter",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],Gx=["netflix","youtube","vrfs","tiktok","minecraft","roblox","brawl","discord","twitch","prime","pluto","whatsapp","instagram","x","facebook","telegram","spotify","browser","store","gallery","settings"],sd,rl=St&&typeof((sd=window.NativeXR)==null?void 0:sd.androidApps)=="function";function Wx(){if(!rl)return[];try{return td(window.NativeXR.androidApps())}catch{return[]}}function vd(){return ed(xd,Wx())}var Ka=n=>{let t=Qt.find(e=>e.id===n);return t?t.el.querySelector(".win-body"):null},Xx={youtube:()=>dd(),browser:()=>Be("browser",q("browser"),"https://duckduckgo.com/"),store:()=>yd(),gallery:()=>fd(),settings:()=>qa(),discord:()=>Be("discord","Discord","https://discord.com/app"),netflix:()=>Be("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>Be("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>Be("twitch","Twitch","https://www.twitch.tv/"),prime:()=>Be("prime","prime video","https://www.primevideo.com/"),pluto:()=>Be("pluto","pluto tv","https://pluto.tv/"),whatsapp:()=>Be("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>Be("instagram","Instagram","https://www.instagram.com/"),x:()=>Be("x","X Twitter","https://x.com/"),facebook:()=>Be("facebook","Facebook","https://www.facebook.com/"),telegram:()=>Be("telegram","Telegram","https://web.telegram.org/"),spotify:()=>Be("spotify","Spotify","https://open.spotify.com/")},bi="home",qx=[["home","Home"],["games","Games"],["apps","Apps"],["horizon","Horizon+"],["wish","Wish"]];function Yx(){let n=()=>'<div style="width:96px;height:172px;background:#14141b;border-radius:10px;border:1px solid #383845;padding:9px;display:flex;flex-direction:column;gap:6px"><div style="height:9px;background:#33333f;border-radius:4px"></div><div style="height:9px;background:#33333f;border-radius:4px;width:70%"></div><div style="margin-top:auto;height:46px;background:linear-gradient(145deg,#c81e2b,#6f0f18);border-radius:7px"></div></div>';return`<div style="display:flex;gap:10px">${n()}${n()}${n()}</div>`}function $x(n){let t=n.img?`<img class="cov" src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",e=n.phones?Yx():n.badge||"";return`<div class="st-cover" style="background:${n.bg}">${t}<div class="art">${e}</div>`+(On.includes(n.id)?'<span class="st-inst">INSTALADO</span>':"")+`<span class="st-vr">VR</span><span class="st-clabel">${n.label}</span></div>`}function Zx(n){let t=n.img?`<img src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",e=n.id==="roblox"?'<span style="width:30px;height:30px;background:#fff;border-radius:7px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:12px;height:12px;background:#c81e2b;border-radius:3px"></span></span>':n.id==="vrfs"?"":`<span style="font-weight:900;font-size:13px;text-align:center;line-height:1.1">${n.label}</span>`;return`<span class="st-thumb" style="background:${n.bg}">${t}${e}</span>`}function nd(n){let t=On.includes(n.id),e=Mi[n.id],i=e!==void 0,s=ji.includes(n.id),r=t?`<button class="st-btn" data-open="${n.id}">ABRIR</button><button class="st-btn" data-rm="${n.id}">REMOVER</button>`:`<button class="st-btn" data-dl="${n.id}" ${i?"disabled":""}>${i?"BAIXANDO "+Math.round(e)+"%":"ADICIONAR \xC0 BIBLIOTECA"}</button>`;return`<article class="st-card" data-card="${n.id}">${$x(n)}
    <div class="st-name">${n.name}</div><div class="st-meta">${n.cat}</div>
    <div class="st-sub">${t?"Na biblioteca de apps":"Toque para ver e baixar"}</div>
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${s?" on":""}" data-fav="${n.id}" aria-label="Favorito">${qt("heart")}</button></div>
    <div class="st-row">${r}</div></article>`}function Jx(){let n=ft("div","st"),e=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${qx.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${bi===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${qt("user")}</button><button class="st-x" data-x aria-label="Fechar">${qt("x")}</button></div>`;if(bi==="apps")e+=`<p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;else if(bi==="horizon")e+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else if(bi==="wish"){let i=Sr.filter(s=>ji.includes(s.id));e+=i.length?`<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${i.map(nd).join("")}</div>`:'<p class="st-note">Selecione o \xEDcone de favorito de um jogo para salv\xE1-lo aqui.</p>'}else{let i=Sr.map((o,a)=>`<button class="st-ri" data-rank="${o.id}">${Zx(o)}
      <span><span class="st-rk">${a+1}. ${o.name}</span><div class="st-cat">${o.cat}</div>
      <div class="st-st">${On.includes(o.id)?"Na biblioteca de apps":"Toque para ver e baixar"}</div></span></button>`).join(""),s=Sr.map(nd).join("");e+=`<div class="st-rank">${i}</div><div class="st-sec"><h3>${bi==="games"?"Todos os jogos":"Jogos para voc\xEA"}</h3>`+(bi==="home"?"<button data-all>Ver todos</button>":"")+`</div><div class="st-cards">${s}</div>`}return n.innerHTML=e,n.addEventListener("click",i=>{var o;let s=a=>i.target.closest(a),r;if(r=s("[data-tab]")){bi=r.dataset.tab,wi();return}if(s("[data-x]")){let a=Qt.find(c=>c.id==="store");a&&zs(a);return}if(s("[data-ava]")){Xt("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-all]")){bi="games",wi();return}if(s("[data-openlib]")){bd();return}if(r=s("[data-rank]")){(o=n.querySelector(`[data-card="${r.dataset.rank}"]`))==null||o.scrollIntoView({behavior:"smooth",block:"center"});return}if(r=s("[data-fav]")){let a=r.dataset.fav;ji=ji.includes(a)?ji.filter(c=>c!==a):[...ji,a],Za(),wi();return}if(r=s("[data-dl]")){jx(r.dataset.dl);return}if(r=s("[data-rm]")){Qx(r.dataset.rm);return}if(r=s("[data-open]")){let a=Ja(r.dataset.open);Xt(`Abrindo ${a.name}\u2026 (demonstra\xE7\xE3o)`),wr(a.id);return}}),n}function wi(){var e;let n=Ka("store");if(!n)return;let t=((e=n.querySelector(".st"))==null?void 0:e.scrollTop)||0;n.innerHTML="",n.appendChild(Jx()),n.querySelector(".st").scrollTop=t}function Kx(n){let t=Ka("store");t&&t.querySelectorAll(`[data-dl="${n}"]`).forEach(e=>{e.textContent="BAIXANDO "+Math.round(Mi[n]||0)+"%"})}function yd(){let n=Qt.find(i=>i.id==="store");if(n)return wi(),Rn(n),n;let t=ft("div");t.style.cssText="height:100%";let e=Nn({id:"store",title:"Store",node:t});return wi(),e}function jx(n){if(Mi[n]!==void 0||On.includes(n))return;Mi[n]=0,wi();let t=Ja(n);Xt("Baixando "+t.name+"\u2026");let e=setInterval(()=>{if(Mi[n]=Math.min(100,Mi[n]+6+Math.random()*11),Mi[n]<100){Kx(n);return}clearInterval(e),delete Mi[n],On.includes(n)||On.push(n),wr(n,!0),Za(),wi(),Cn(),Xt(t.name+" foi para a biblioteca de apps com sucesso")},170)}function Qx(n){On=On.filter(t=>t!==n),Qi=Qi.filter(t=>t!==n),Za(),wi(),Cn(),Xt(Ja(n).name+" removido da biblioteca")}var Ya="recent",yn="all",Mr="",tl=rl?["all","games","apps","android","recent"]:["all","games","apps","recent"],id={all:"Todas",games:"Jogos",apps:"Apps",android:q("androidApps"),recent:q("recents")};function wr(n,t){Qi=[n,...Qi.filter(e=>e!==n)].slice(0,40),Za(),t||Cn()}function tv(){let n=Sr.filter(o=>On.includes(o.id)).map(o=>({...o,kind:"game"})),t=vd(),e=[...n,...t],i=o=>{let a=Gx.indexOf(o.sourceId||o.id);return a<0?99:a};e.sort((o,a)=>i(o)-i(a)||o.name.localeCompare(a.name,"pt-BR")),yn==="games"&&(e=e.filter(o=>o.kind==="game")),yn==="apps"&&(e=e.filter(o=>o.kind==="app"||o.kind==="android")),yn==="android"&&(e=e.filter(o=>o.kind==="android")),yn==="recent"&&(e=e.filter(o=>Qi.includes(o.id)));let s=Mr.trim().toLowerCase();if(s&&(e=e.filter(o=>(o.name+" "+(o.label||"")+" "+(o.packageName||"")).toLowerCase().includes(s))),Ya==="az")return[...e].sort((o,a)=>o.name.localeCompare(a.name,"pt-BR"));let r=o=>{let a=Qi.indexOf(o);return a<0?1e6:a};return[...e].sort((o,a)=>r(o.id)-r(a.id))}function ev(n){if(!St||!(n!=null&&n.packageName))return;let t=il();if(t.state!=="ready"){t.state==="needs_permission"?(Xt(q("shizukuNeedsPermission")),pd()):t.state==="unsupported"?Xt(q("shizukuUnsupported")):Xt(q("shizukuNotRunning"));return}let e=`android:${n.packageName}`,i=Qt.find(d=>d.id===e);if(i)return Rn(i),i;let s=ft("div","android-app-host");s.style.cssText="position:relative;width:100%;height:100%;overflow:hidden;background:#05070b";let r=ft("div","android-app-surface");r.dataset.nativeApp=n.packageName,r.dataset.nativeId=Ga(n.packageName),r.dataset.orientation=n.portrait?"portrait":"landscape",r.setAttribute("role","img"),r.setAttribute("aria-label",n.name);let o=!!n.portrait,a=o?9/16:16/9,c=1036,l=594,h=c,u=h/a;return u>l&&(u=l,h=u*a),r.style.cssText=`position:absolute;left:50%;top:50%;width:${Math.floor(h)}px;height:${Math.floor(u)}px;transform:translate(-50%,-50%);overflow:hidden;background:#000;`,s.appendChild(r),Nn({id:e,title:n.name,node:s})}function nv(n){let t=je(n.label||n.name),e=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${qt(n.icon)}</span>`:"",i=n.html?n.html:e||(n.kind==="android"?`<span class="android-app-initial">${je((n.name||"?").trim().slice(0,1).toUpperCase())}</span>`:`<span class="nm">${t}</span>`),s=n.slug?`${e}<span class="nm fb">${t}</span>`:i,r=n.kind==="android"?`data-android-app="${je(n.packageName)}"`:`data-app="${je(n.id)}"`;return`<button class="lib-tile${n.kind==="android"?" android-app":""}" ${r} aria-label="Abrir ${t}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand">${s}</span></span><span class="lib-label">${t}</span></button>`}function iv(n){let t=n.img?`<img class="lib-game-cover" src="${n.img}" alt="" loading="lazy" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"";return`<button class="lib-tile game" data-game="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}">${t}<span class="lib-art">${n.mark}</span><span class="lib-vr">VR</span></span><span class="lib-label">${n.name}</span></button>`}function sv(){let n=tv(),t=ft("div","lib"),e=id[yn]||id.all,i=(r,o,a)=>`<button class="lib-nav" data-nav="${r}" title="${o}" aria-label="${o}" aria-pressed="${yn===r}">${qt(a)}</button>`;t.innerHTML=`<nav class="lib-rail" aria-label="Navega\xE7\xE3o da biblioteca">
      ${i("all","Todas as aplica\xE7\xF5es","appGrid")}
      ${i("apps",q("apps"),"device")}
      ${rl?i("android",q("androidApps"),"device"):""}
      ${i("games","Jogos","controller")}
      ${i("recent",q("recents"),"timer")}
      <span class="lib-rail-spacer"></span>
      <button class="lib-nav lib-nav-store" data-app="store" title="Store" aria-label="Abrir Store">${qt("store")}</button>
    </nav>
    <section class="lib-main">
      <div class="lib-head"><h2 class="lib-title">${je(e)}</h2>
        <button class="lib-sbtn" data-s aria-label="Buscar">${qt("search")}</button>
        <input class="lib-search" data-q placeholder="Buscar" value="${je(Mr)}">
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort>${Ya==="az"?"A\u2013Z":"Recentes"} ${qt("chevronDown")}</button>
        <button class="lib-pill" data-filter>${e} \xB7 ${n.length} ${qt("chevronDown")}</button>
      </div>
      <div class="lib-scroll"><div class="lib-grid">${n.map(r=>r.kind==="game"?iv(r):nv(r)).join("")}</div>
      ${n.length?"":`<div class="lib-empty">${yn==="android"?q("androidNoApps"):yn==="games"?"Nenhum jogo baixado ainda. Baixe um na Store.":yn==="recent"?"Os apps usados recentemente v\xE3o aparecer aqui.":"Nenhum app encontrado."}</div>`}
      </div>
    </section>`;let s=t.querySelector("[data-q]");return Mr&&s.classList.add("open"),s.addEventListener("input",()=>{var o;Mr=s.value,Cn(!0);let r=(o=Ka("library"))==null?void 0:o.querySelector("[data-q]");r&&(r.focus(),r.setSelectionRange(r.value.length,r.value.length))}),s.addEventListener("focus",()=>yi(!0,s)),t.addEventListener("click",r=>{let o=c=>r.target.closest(c),a;if(o("[data-s]")){let c=t.querySelector("[data-q]");c.classList.toggle("open"),c.classList.contains("open")?c.focus():(Mr="",c.value="",Cn());return}if(a=o("[data-nav]")){yn=a.dataset.nav,Cn();return}if(o("[data-sort]")){Ya=Ya==="az"?"recent":"az",Cn();return}if(o("[data-filter]")){yn=tl[(tl.indexOf(yn)+1)%tl.length],Cn();return}if(a=o("[data-game]")){let c=Ja(a.dataset.game);wr(c.id),Xt(`Abrindo ${c.name}\u2026 (demonstra\xE7\xE3o)`);return}if(a=o("[data-android-app]")){let c=vd().find(l=>l.kind==="android"&&l.packageName===a.dataset.androidApp);if(!c){Xt(q("androidNoApps"));return}wr(c.id),ev(c);return}if(a=o("[data-app]")){let c=xd.find(h=>h.id===a.dataset.app);if(!c)return;wr(c.id);let l=Xx[c.id];l?l():Xt(c.name+": sem endere\xE7o cadastrado");return}}),t}function Cn(n){var i;let t=Ka("library");if(!t)return;let e=((i=t.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;t.innerHTML="",t.appendChild(sv()),t.querySelector(".lib-scroll").scrollTop=e}function bd(){let n=Qt.find(i=>i.id==="library");if(n)return Cn(),Rn(n),n;let t=ft("div");t.style.cssText="height:100%";let e=Nn({id:"library",title:q("apps"),node:t});return Cn(),e}var ni=Object.freeze({bell:qt("notification"),kb:qt("keyboard"),center:qt("crosshair"),compass:qt("compass"),store:qt("store"),people:qt("people"),camera:qt("camera"),gear:qt("settings"),play:qt("play")});function Md(){Xu([{kind:"avatar",id:"profile",label:q("profile"),run:qa},{kind:"status",id:"status",label:q("settings"),run:qa},{kind:"tool",id:"bell",label:q("notif"),svg:ni.bell,run:()=>Xt(q("noNotif"))},{kind:"tool",id:"kb",label:q("keyboard"),svg:ni.kb,run:()=>yi(!$u(),null)},{kind:"tool",id:"center",label:q("center"),svg:ni.center,run:()=>Ca()},{kind:"sep"},{id:"browser",win:"browser",label:q("browser"),svg:ni.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>Be("browser",q("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:q("store"),svg:ni.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:yd},{id:"discord",win:"discord",label:"Discord",svg:ni.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>Be("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:q("gallery"),svg:ni.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:fd},{kind:"sep"},{id:"settings",win:"settings",label:q("settings"),svg:ni.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:qa},{id:"youtube",win:"youtube",label:"YouTube",svg:ni.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:dd},{id:"library",win:"library",launcher:!0,label:q("apps"),run:bd}])}ve("lang",Md);var rv=document.getElementById("boot"),Wv=document.getElementById("bootGo"),Si=null;rv.hidden=!0;function av(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function Sd(n,t,e=!1){let i=ft("div",e?"langwin slim":"langwin"),s=o=>Ta(o).label;return(()=>{i.innerHTML=`<div class="lq-head"><span class="lq-pick">${s(n)}</span><span class="lq-title">${q("langTitle")}</span></div>
      <div class="lq-main">
        <div class="lang-options" role="list">${sr.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${q("langSoon")}</i>`}</button>`).join("")}</div>
        <div class="lq-art"><img src="./hand-controller.png" alt=""></div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">Aponte com a m\xE3o e fa\xE7a uma pin\xE7a para escolher.</span>
        <button class="lq-go">${q("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>t(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>t(n)})(),i}function ov(){var t,e;let n=Nn({id:"language",title:"Next VR",w:880,h:660,onboarding:!0,node:Sd(Ot.lang||av(),cv)});return(t=n.el.querySelector('[data-act="close"]'))==null||t.remove(),(e=n.el.querySelector('[data-act="pin"]'))==null||e.remove(),n}ve("handframe",n=>{let t=Si==null?void 0:Si.el.querySelector(".lang-tracking"),e=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";t&&t.textContent!==e&&(t.textContent=e)});async function cv(n){if(!Si)return;Ec(n),Si&&(zs(Si),Si=null),Va(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let t=or(),e=Ot.handsOn?ur():Promise.resolve(!1);await Promise.allSettled([t,e]),setTimeout(()=>Ca(),280)}document.getElementById("btnGyro").onclick=()=>or();document.getElementById("btnHand").onclick=()=>xu()?Lc():ur();ve("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});ve("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Md();Ot.lang?(Va(!0),St&&(or(),Ot.handsOn&&ur()),document.getElementById("perm").hidden=!1,setTimeout(()=>Ca(),280)):(Va(!1),document.getElementById("stat").hidden=!0,Si=ov());St&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,t;(t=(n=ar).invalidate)==null||t.call(n),or(),Ot.handsOn&&ur(),nl(),Qt.some(e=>e.id==="library")&&Cn()},window.nextvrSuspend=()=>{Lc()},window.nextvrShizukuStatus=n=>nl(n),ve("hands",()=>{document.getElementById("perm").hidden=!0}));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

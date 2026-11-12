import {THREE as T} from './engine.js';
// Texturas reais de material (cor/relevo/roughness), pequenas e determinísticas.
export function detailTexture(kind,size=128){
 const c=document.createElement('canvas');c.width=c.height=size;const ctx=c.getContext('2d'),im=ctx.createImageData(size,size);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4,n=((Math.imul(x+11,73)^Math.imul(y+7,151))&255)/255;let v=128;
  if(kind==='cloth')v=120+22*Math.sin(x*Math.PI/2)*Math.sin(y*Math.PI/2)+n*12;
  if(kind==='paper')v=223+n*24+4*Math.sin(x*.8+y*.4);
  if(kind==='wood')v=100+30*Math.sin(x*.15+Math.sin(y*.03)*3)+18*Math.sin(x*.6)+n*12;
  if(kind==='skin')v=148+n*18+3*Math.sin(x*.3)*Math.cos(y*.2);
  if(kind==='leather')v=130+n*24+9*Math.cos(x*.7)*Math.sin(y*.8);
  im.data[i]=im.data[i+1]=im.data[i+2]=v;im.data[i+3]=255;
 }ctx.putImageData(im,0,0);const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;return t;
}
// DOF por profundidade real, não borrão uniforme. Um passe de nove amostras,
// somente Alta/Ultra; desligado em Baixa/Média para proteger o celular.
export function cinematicFocus(renderer){
 const target=new T.WebGLRenderTarget(1,1,{depthTexture:new T.DepthTexture(1,1),minFilter:T.LinearFilter,magFilter:T.LinearFilter}),scene=new T.Scene(),camera=new T.OrthographicCamera(-1,1,1,-1,0,1);
 const material=new T.ShaderMaterial({uniforms:{image:{value:target.texture},depth:{value:target.depthTexture},pixel:{value:new T.Vector2(1,1)},near:{value:.03},far:{value:60},focus:{value:2}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:`uniform sampler2D image,depth;uniform vec2 pixel;uniform float near,far,focus;varying vec2 vUv;
 float distanceAt(vec2 uv){float z=texture2D(depth,uv).x;return near*far/(far-z*(far-near));}
 void main(){float d=distanceAt(vUv);float radius=clamp(abs(d-focus)/max(d,.1)*3.0,0.,2.4);vec4 color=texture2D(image,vUv)*4.;float sum=4.;for(int x=-1;x<=1;x++)for(int y=-1;y<=1;y++){if(x==0&&y==0)continue;vec2 uv=vUv+vec2(float(x),float(y))*pixel*radius;float weight=abs(distanceAt(uv)-d)<.35?1.:.15;color+=texture2D(image,uv)*weight;sum+=weight;}gl_FragColor=color/sum;
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`,depthTest:false,depthWrite:false});const geometry=new T.PlaneGeometry(2,2);scene.add(new T.Mesh(geometry,material));
 return{resize(w,h){target.setSize(w,h);material.uniforms.pixel.value.set(1/w,1/h);},render(world,view,focus){material.uniforms.near.value=view.near;material.uniforms.far.value=view.far;material.uniforms.focus.value=focus;const autoReset=renderer.info.autoReset;renderer.info.autoReset=false;renderer.info.reset();renderer.setRenderTarget(target);renderer.render(world,view);renderer.setRenderTarget(null);renderer.render(scene,camera);renderer.info.autoReset=autoReset;},dispose(){target.dispose();geometry.dispose();material.dispose();}};
}

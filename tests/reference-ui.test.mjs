import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import bundledChromium from '@sparticuz/chromium';
import * as THREE from 'three';

test('reference HTML boots, retains dock layout, spatial windows, native browsers and head-independent placement', {timeout:90000}, async () => {
  const base = new URL('../nextvr-android/src/main/assets/ui/', import.meta.url);
  const server=createServer(async(req,res)=>{
    try {
      const path=(req.url==='/'?'index.html':req.url.slice(1)).split('?')[0];
      if(path.includes('..')) throw Error();
      res.setHeader('Content-Type',path.endsWith('.js')?'application/javascript':path.endsWith('.css')?'text/css':path.endsWith('.html')?'text/html':'application/octet-stream');
      res.end(await readFile(new URL(path,base)));
    } catch { res.writeHead(404); res.end(); }
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  let browser;
  try {
    browser=await chromium.launch({executablePath:await bundledChromium.executablePath(),args:bundledChromium.args,headless:true});
    const page=await browser.newPage({viewport:{width:4096,height:4096},deviceScaleFactor:1});
    const errors=[]; page.on('pageerror',e=>errors.push(e.message));
    // Validate native GLSL grammar/linking with ANGLE. Only the platform-specific OES sampler is
    // replaced for WebGL; this does not pretend to validate an Android external-texture driver.
    const nativeSource=await readFile(new URL('../nextvr-android/src/main/java/com/nextvr/cardboard/SpatialRenderer.java',import.meta.url),'utf8');
    const pairs=[...nativeSource.matchAll(/(?:program|cameraProgram) = link\(\s*("(?:\\.|[^"\\])*"),\s*("(?:\\.|[^"\\])*")\);/g)]
      .map(m=>[JSON.parse(m[1]),JSON.parse(m[2]).replace(/#extension GL_OES_EGL_image_external : require\n/,'').replaceAll('samplerExternalOES','sampler2D')]);
    assert.equal(pairs.length,2);
    const handSource=await readFile(new URL('../nextvr-android/src/main/java/com/nextvr/cardboard/PhoneXrHandRenderer.kt',import.meta.url),'utf8');
    const handShader=handSource.match(/colorProgram=SpatialRenderer.link\(\s*("(?:\\.|[^"\\])*"),\s*("(?:\\.|[^"\\])*")\)/);
    assert.ok(handShader,'PhoneXR native hand shader is included in validation');
    pairs.push([JSON.parse(handShader[1]),JSON.parse(handShader[2])]);
    const shaderResult=await page.evaluate(pairs=>{
      const canvas=document.createElement('canvas');canvas.width=canvas.height=2;
      const gl=canvas.getContext('webgl');
      if(!gl) return {errors:['No WebGL context for shader validation'],pixels:[]};
      const errors=[],programs=[];
      for(const [vertex,fragment] of pairs) {
        const program=gl.createProgram();
        for(const [kind,source] of [[gl.VERTEX_SHADER,vertex],[gl.FRAGMENT_SHADER,fragment]]) {
          const shader=gl.createShader(kind);gl.shaderSource(shader,source);gl.compileShader(shader);
          if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) errors.push(gl.getShaderInfoLog(shader));
          gl.attachShader(program,shader);gl.deleteShader(shader);
        }
        gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))errors.push(gl.getProgramInfoLog(program));programs.push(program);
      }
      // A labelled upright bitmap uploaded with no platform texture transform. Actual camera
      // GLSL must keep R/G at the top, B/W at the bottom, and never mirror left/right.
      const program=programs[1];gl.useProgram(program);gl.viewport(0,0,2,2);
      const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
      gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
      const a=gl.getAttribLocation(program,'aPosition');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
      gl.uniform4f(gl.getUniformLocation(program,'uProjection'),1,1,0,0);
      gl.uniform2f(gl.getUniformLocation(program,'uSpan'),2,2);
      const tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
      gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,2,2,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([255,0,0,255,0,255,0,255,0,0,255,255,255,255,255,255]));
      gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
      const pixels=new Uint8Array(16);gl.readPixels(0,0,2,2,gl.RGBA,gl.UNSIGNED_BYTE,pixels);
      const result={errors,pixels:Array.from(pixels)};
      gl.getExtension('WEBGL_lose_context')?.loseContext();return result;
    },pairs);
    assert.deepEqual(shaderResult.errors,[],'Camera, spatial-compositor and native hand GLSL compile and link');
    assert.deepEqual(shaderResult.pixels,[0,0,255,255,255,255,255,255,255,0,0,255,0,255,0,255],'Camera shader preserves upright bitmap corners (readPixels is bottom-up)');
    await page.addInitScript(()=>{
      window.__frames=[]; window.__touches=[]; window.__frameSeq=0;
      window.NativeXR={
        frame(scene,browsers){window.__frameSeq++;window.__last={panels:JSON.parse(scene),browsers:JSON.parse(browsers)};window.__frames.push(window.__last);if(window.__frames.length>10)window.__frames.shift();},
        battery(){return '{"level":0.72,"charging":false}';}, hands(){}, click(){}, key(){},
        handTargets(json){window.__handTargets=JSON.parse(json);}, handVisuals(){},
        touch(id,action,x,y){ window.__touches.push({id,action,x,y}); }
      };
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/`);
    await page.waitForFunction(()=>window.__last?.panels.length>=3);
    assert.deepEqual(errors,[]);
    await page.evaluate(p=>window.nextvrPose(p),new THREE.Matrix4().toArray());
    const ids=await page.locator('.dock button').evaluateAll(nodes=>nodes.map(n=>n.dataset.id));
    assert.deepEqual(ids,['profile','status','bell','kb','center','browser','store','discord','gallery','settings','youtube','library']);
    assert.equal(await page.locator('.win-title').innerText(),'Next VR');
    // Real gaze selection, with no hands and no mouse/DOM click: setup must not be blocked by tracking.
    await page.evaluate(()=>{window.nextvrResume();window.nextvrHands({hands:[]});});
    const language=await page.evaluate(()=>{
      const shell=document.querySelector('.win-shell'),button=shell.querySelector('[data-lang="en"]');
      const r=shell.getBoundingClientRect(),b=button.getBoundingClientRect();
      const panel=window.__last.panels.filter(p=>!p.overlay)[1];
      return {matrix:panel.matrix,rect:panel.rect,glass:panel.glass,width:r.width,height:r.height,
        x:b.left+b.width/2-r.left-r.width/2,y:r.height/2-(b.top+b.height/2-r.top),buttonHeight:b.height};
    });
    const languageMatrix=new THREE.Matrix4().fromArray(language.matrix);
    const centre=new THREE.Vector3().setFromMatrixPosition(languageMatrix);
    assert.ok(Math.abs(centre.y-1.55)<.001 && Math.abs(centre.z+.60)<.001,'Language window is close and at eye level');
    const widthMetres=languageMatrix.elements[0]*language.glass[2];
    assert.ok(2*Math.atan(widthMetres/2/.60)*180/Math.PI>65,'Setup has a readable angular size');
    assert.ok(language.buttonHeight>=180,'Large language hit targets');
    const languageTarget=new THREE.Vector3(language.x/language.rect[2],language.y/language.rect[3],0).applyMatrix4(languageMatrix);
    const languageView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),languageTarget,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>window.nextvrPose(p),languageView.toArray());
    await page.waitForFunction(()=>document.querySelector('.lang-option.gaze-hover')?.dataset.lang==='en');
    await page.waitForFunction(()=>!document.querySelector('.lang-option'));
    assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('nextvr.v1')).lang),'en');
    await page.evaluate(p=>window.nextvrPose(p),new THREE.Matrix4().toArray());
    await page.locator('.dock [data-id="library"]').click();
    await page.waitForFunction(()=>!!document.querySelector('.lib-grid'));
    assert.equal(await page.locator('.lib-tile').count(),13);
    await page.locator('.dock [data-id="store"]').click();
    await page.waitForFunction(()=>document.querySelectorAll('.st-card').length===4);
    await page.locator('.dock [data-id="browser"]').click();
    await page.waitForFunction(()=>window.__last?.browsers.some(b=>b.id==='browser'));
    assert.equal(await page.locator('iframe').count(),0,'Native browser does not create a privileged iframe');
    assert.equal(await page.locator('.win-shell').count(),3);
    const browserSpec=await page.evaluate(()=>window.__last.browsers.find(b=>b.id==='browser'));
    assert.equal(browserSpec.url,'https://duckduckgo.com/');
    assert.ok(browserSpec.width>900 && browserSpec.height>400);
    await page.locator('.dock [data-id="kb"]').click();
    await page.waitForFunction(()=>document.querySelectorAll('.key').length>30);
    // Count actual compositor updates, not wall time: CI's software renderer can be slow.
    const settle=async()=>{
      await page.evaluate(()=>window.__settle=null);
      await page.waitForFunction(()=>{
        const prev=window.__settle,seq=window.__frameSeq;
        if(prev?.seq===seq)return false;
        const values=window.__last.panels.filter(p=>!p.overlay).flatMap(p=>p.matrix);
        const stable=prev?.values.length===values.length && values.every((v,i)=>Math.abs(v-prev.values[i])<.00015);
        const count=stable?prev.count+1:0;window.__settle={seq,values,count};return count>=3;
      },null,{timeout:25000});
    };
    await settle();
    const before=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay).map(p=>p.matrix));
    const pose=new THREE.Matrix4().makeRotationY(.5).toArray();
    await page.evaluate(p=>window.nextvrPose(p),pose);
    await page.waitForTimeout(300);
    const after=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay).map(p=>p.matrix));
    assert.equal(before.length,after.length);
    for(let i=0;i<before.length;i++) for(let k=0;k<16;k++) assert.ok(Math.abs(before[i][k]-after[i][k])<.001,'Head movement must not move world-anchored surfaces');
    const dock=after[0];
    assert.ok(Math.abs(dock[13]-1.23)<.001 && Math.abs(dock[14]+.65)<.001,'Close landscape dock position');
    // A button press aimed at the window centre must be routed as a native browser MotionEvent.
    const browserPanel=await page.evaluate(()=>window.__last.panels.find(p=>p.browser==='browser'));
    const target=new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(browserPanel.matrix));
    const view=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),target,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>{window.nextvrPose(p);window.nextvrTrigger(true);window.nextvrTrigger(false);},view.toArray());
    const touches=await page.evaluate(()=>window.__touches);
    assert.ok(touches.some(t=>t.id==='browser' && t.action===0),'Gaze/button down reaches browser texture');
    assert.ok(touches.some(t=>t.id==='browser' && t.action===1),'Gaze/button up reaches browser texture');
    // Native PhoneXR decisions drive spatial interaction; no JS landmark/gesture heuristic.
    const hand = gap => {
      const points=Array.from({length:21},()=>({x:.5,y:.5}));
      points[0]={x:.5,y:.75}; points[9]={x:.5,y:.5};
      points[4]={x:.5-gap/2,y:.5}; points[8]={x:.5+gap/2,y:.5};
      return {hands:[{id:'right',left:false,points:points.flatMap(p=>[p.x,p.y,0]),head:null,base:[0,-.2],aim:[0,0],palm:[.5,.5],palmWidth:.2,pinching:gap<.1,fist:false,palmFacesEyes:false}]};
    };
    await page.evaluate(()=>{window.__touches=[];window.nextvrResume();});
    const feed = async value => page.evaluate(h=>{clearInterval(window.__feed);window.__feed=setInterval(()=>window.nextvrHands(structuredClone(h)),100);},value);
    await feed(hand(.04));
    await page.waitForFunction(()=>window.__touches.some(t=>t.id==='browser'&&t.action===0),null,{timeout:12000});
    await page.waitForFunction(()=>window.__handTargets?.some(t=>t.id==='right'&&t.down&&t.end?.length===3));
    // A slow native detector supplies its completion-based validity; 500 ms is not a lost hand.
    await page.evaluate(h=>{clearInterval(window.__feed);window.__touches=[];window.nextvrHands({...h,validForMs:1400,inferenceMs:600});},hand(.04));
    await page.waitForTimeout(650);
    assert.equal(await page.evaluate(()=>window.__touches.some(t=>t.action===3)),false,'Slow inference must not flicker/cancel between valid results');
    // Lost tracking must CANCEL rather than releasing/clicking a link accidentally.
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrHands({hands:[]});});
    await page.waitForFunction(()=>window.__touches.some(t=>t.action===3),null,{timeout:12000});
    const loss=await page.evaluate(()=>window.__touches);
    assert.ok(!loss.some(t=>t.action===1),'Tracking loss does not click');
    await page.evaluate(()=>window.__touches=[]);
    await feed(hand(.04));
    await page.waitForFunction(()=>window.__touches.some(t=>t.action===0),null,{timeout:12000});
    await feed(hand(.4));
    await page.waitForFunction(()=>window.__touches.some(t=>t.action===1),null,{timeout:12000});
    await page.evaluate(()=>clearInterval(window.__feed));
    await page.evaluate(()=>window.nextvrSuspend());
    await page.locator('.win-shell').filter({has:page.locator('.win-title', {hasText:'Browser'})}).locator('[data-act="close"]').click();
    await page.waitForFunction(()=>!window.__last.browsers.some(b=>b.id==='browser'));
    assert.equal(await page.locator('.win-shell').count(),2);
    await settle();
    const libraryMatrix=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay&&!p.browser)[1].matrix);
    const handle=new THREE.Vector3(0,-364/980,0).applyMatrix4(new THREE.Matrix4().fromArray(libraryMatrix));
    const handleView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),handle,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>{window.nextvrPose(p);window.nextvrTrigger(true);},handleView.toArray());
    await page.waitForFunction(()=>!!document.querySelector('.win-shell.moving'));
    const shifted=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),handle.clone().add(new THREE.Vector3(.3,.2,0)),new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>window.nextvrPose(p),shifted.toArray()); await page.waitForTimeout(150);
    await page.evaluate(()=>window.nextvrTrigger(false));
    assert.equal(await page.locator('.win-shell.free').count(),1,'White handle detaches the window from the dock arc');
    assert.equal(await page.locator('.win-shell.moving').count(),0);
    await page.locator('.win-shell.free [data-act="pin"]').click();
    assert.equal(await page.locator('.win-shell.free').count(),0,'Repin restores the dock/window relationship');
    await settle();
    // PhoneXR's fist grabs the whole window, not the old pinch handle. It must not click the page.
    const lib=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay&&!p.browser)[1].matrix);
    const libCentre=new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(lib));
    const fistView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),libCentre,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>{window.nextvrResume();window.nextvrPose(p);window.__touches=[];},fistView.toArray());
    const fist=hand(.4);fist.hands[0].fist=true;
    await feed(fist);
    await page.waitForFunction(()=>!!document.querySelector('.win-shell.moving'));
    assert.equal(await page.evaluate(()=>window.__touches.filter(t=>t.action===0).length),0,'Fist is not a pinch');
    await page.waitForFunction(()=>window.__handTargets?.some(t=>t.id==='right'&&t.hidden));
    fist.hands[0].palm=[.62,.45];
    await feed(fist);
    await page.waitForFunction(original=>{
      const current=window.__last.panels.filter(p=>!p.overlay&&!p.browser)[1].matrix;
      return Math.abs(current[12]-original[12])>.03;
    },lib);
    await feed(hand(.4));
    await page.waitForFunction(()=>!document.querySelector('.win-shell.moving'));
    assert.equal(await page.locator('.win-shell.free').count(),1,'Opening the fist releases the detached window');
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrSuspend();});

    await settle();
    const anchored=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay).slice(1).map(p=>p.matrix));
    const summonView=new THREE.Matrix4().makeRotationY(-.7);
    await page.evaluate(p=>{window.nextvrResume();window.nextvrPose(p);window.__touches=[];},summonView.toArray());
    const menu=hand(.4);menu.hands[0].menuEligible=true;menu.hands[0].menuPoint=[.5,.5];
    await feed(menu);
    await page.waitForFunction(()=>!!document.querySelector('.hand-menu-logo:not([hidden])'));
    await page.waitForTimeout(250);
    menu.hands[0].pinching=true;await feed(menu);
    await page.waitForFunction(()=>Math.abs(window.__last.panels[0].matrix[12])>.3);
    const summoned=await page.evaluate(()=>window.__last.panels[0].matrix);
    assert.ok(summoned[12]<-.3,'Dock appears in the new gaze direction');
    assert.ok(Math.abs(Math.hypot(summoned[12],summoned[14])-.65)<.002);
    const kept=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay).slice(1).map(p=>p.matrix));
    for(let i=0;i<kept.length;i++)for(let k=0;k<16;k++)assert.ok(Math.abs(kept[i][k]-anchored[i][k])<.001,'Summoning dock must not recenter windows/keyboard');
    assert.equal(await page.evaluate(()=>window.__touches.some(t=>t.action===0)),false,'Palm menu pinch does not click through');
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrHands({hands:[]});window.nextvrSuspend();});
    assert.equal(await page.locator('.hand-menu-logo:not([hidden])').count(),0);
    assert.deepEqual(errors,[]);
  } finally { if(browser)await browser.close();await new Promise(resolve=>server.close(resolve)); }
});

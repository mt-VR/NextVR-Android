import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import bundledChromium from '@sparticuz/chromium';
import * as THREE from 'three';

test('reference HTML boots, retains dock layout, spatial windows, native browsers and head-independent placement', {timeout:90000}, async (t) => {
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
    try {
      browser=await chromium.launch({executablePath:await bundledChromium.executablePath(),args:bundledChromium.args,headless:true});
    } catch(launchErr) {
      t.skip('Chromium unavailable: '+launchErr.message?.slice(0,80));
      return;
    }
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
        handTouch(id,action,x,y){
          window.__touches.push({id,action,x,y});
          if(id!=='shell')return;
          const target=document.elementFromPoint(x,y);
          if(action===0){window.__shellArmed=target;target?.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));}
          else if(action===2)target?.dispatchEvent(new PointerEvent('pointermove',{bubbles:true}));
          else if(action===1){target?.dispatchEvent(new PointerEvent('pointerup',{bubbles:true}));if(target&&target===window.__shellArmed)target.click();window.__shellArmed=null;}
          else if(action===3){window.__shellArmed?.dispatchEvent(new PointerEvent('pointercancel',{bubbles:true}));window.__shellArmed=null;}
        }
      };
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/`);
    // Meta-style onboarding: only the language picker window (+ HUD overlay) is composited.
    await page.waitForFunction(()=>window.__last?.panels.length>=2);
    assert.deepEqual(errors,[]);
    await page.evaluate(p=>window.nextvrPose(p),new THREE.Matrix4().toArray());
    const hand = (gap,extra={}) => {
      const points=Array.from({length:21},()=>({x:.5,y:.5}));
      points[0]={x:.5,y:.75}; points[9]={x:.5,y:.5};
      points[4]={x:.5-gap/2,y:.5}; points[8]={x:.5+gap/2,y:.5};
      return {hands:[{id:'right',left:false,points:points.flatMap(p=>[p.x,p.y,0]),head:null,
        base:[0,-.2],aim:[0,0],palm:[.5,.5],grab:[.5,.5],palmWidth:.2,pinching:gap<.1,
        fist:false,palmFacesEyes:false,...extra}]};
    };
    const feed = async value => page.evaluate(h=>{clearInterval(window.__feed);window.__feed=setInterval(()=>window.nextvrHands(structuredClone(h)),100);},value);
    // Like Meta's first-run flow: the dock is neither composited nor in the DOM yet, so the
    // language picker is the only surface the hand can reach.
    assert.ok(await page.evaluate(()=>!window.__last.panels.some(p=>p.id==='dock')),'dock is hidden during language onboarding');
    assert.equal(await page.locator('.dock').count(),0,'Meta-style onboarding shows only the language picker');
    assert.ok(await page.evaluate(()=>document.getElementById('stat').hidden),'status chrome is hidden until a language exists');
    assert.equal(await page.locator('.win-title').innerText(),'Next VR');
    // Pose/gaze alone and the removed viewer callback cannot select setup; PhoneXR pinch can.
    await page.evaluate(()=>{window.nextvrResume();window.nextvrHands({hands:[]});});
    const language=await page.evaluate(()=>{
      const shell=document.querySelector('.win-shell'),button=shell.querySelector('[data-lang="en"]');
      const r=shell.getBoundingClientRect(),b=button.getBoundingClientRect();
      const panel=window.__last.panels.filter(p=>!p.overlay)[0];   // dock hidden: the picker is first
      return {matrix:panel.matrix,rect:panel.rect,glass:panel.glass,width:r.width,height:r.height,
        x:b.left+b.width/2-r.left-r.width/2,y:r.height/2-(b.top+b.height/2-r.top),buttonHeight:b.height};
    });
    const languageMatrix=new THREE.Matrix4().fromArray(language.matrix);
    const centre=new THREE.Vector3().setFromMatrixPosition(languageMatrix);
    assert.ok(Math.abs(centre.y-1.55)<.001 && Math.abs(centre.z+.42)<.001,'Language window is close and at eye level');
    const widthMetres=languageMatrix.elements[0]*language.glass[2];
    assert.ok(2*Math.atan(widthMetres/2/.42)*180/Math.PI>65,'Setup has a readable angular size');
    assert.ok(language.buttonHeight>=180,'Large language hit targets');
    const languageTarget=new THREE.Vector3(language.x/language.rect[2],language.y/language.rect[3],0).applyMatrix4(languageMatrix);
    const languageView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),languageTarget,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>window.nextvrPose(p),languageView.toArray());
    await page.waitForTimeout(1400);
    assert.equal(await page.locator('.lang-option').count(),3,'looking at setup never selects it');
    assert.equal(await page.evaluate(()=>typeof window.nextvrTrigger),'undefined','viewer/touchscreen trigger callback is absent');
    await feed(hand(.04));await page.waitForTimeout(250);await feed(hand(.4));
    await page.waitForFunction(()=>!document.querySelector('.lang-option'));
    await page.evaluate(()=>clearInterval(window.__feed));
    assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('nextvr.v1')).lang),'en');
    // Choosing the language closes the picker and brings the whole shell back, Meta-style:
    // the dock returns with every previous function, in the selected language.
    await page.waitForFunction(()=>window.__last?.panels.some(p=>p.id==='dock'));
    const ids=await page.locator('.dock button[data-id]').evaluateAll(nodes=>nodes.map(n=>n.dataset.id));
    assert.deepEqual(ids,['profile','status','bell','kb','center','browser','store','discord','gallery','settings','youtube','library']);
    assert.equal(await page.getByRole('button',{name:'Move the dock'}).count(),1,'the short Quest-style dock handle is available');
    assert.equal(await page.locator('.win-shell').count(),0,'the language window closed with the pick');
    assert.ok(await page.evaluate(()=>!document.getElementById('stat').hidden),'the whole shell is back after the pick');
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
    // Keyboard lies flat like a desk (Meta Quest style): the panel's local +Y (top edge) must
    // point away from the user (-Z). Matrix is column-major: column 1 (elements 4..7) is the
    // local Y basis, so its Z component is elements[6]; lying flat gives sin(pitch) < 0.
    const kbPanel=await page.evaluate(()=>window.__last.panels.find(p=>p.rect[1]===3160));
    assert.ok(kbPanel,'Keyboard panel is composited into the atlas');
    assert.ok(kbPanel.matrix[6]<0,'Keyboard lies flat (Meta Quest style), top edge away from the user');
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
    assert.ok(Math.abs(dock[13]-1.33)<.001 && Math.abs(dock[14]+.55)<.001,'Dock sits a little farther from the user');
    // Only a PhoneXR pinch aimed at the window centre reaches the native browser surface.
    const browserPanel=await page.evaluate(()=>window.__last.panels.find(p=>p.browser==='browser'));
    const target=new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(browserPanel.matrix));
    const view=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),target,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>{window.nextvrPose(p);window.__touches=[];},view.toArray());
    await page.waitForTimeout(250);
    assert.deepEqual(await page.evaluate(()=>window.__touches),[],'head pose alone produces no input');
    await feed(hand(.04));
    await page.waitForFunction(()=>window.__touches.some(t=>t.id==='browser'&&t.action===0),null,{timeout:12000});
    await feed(hand(.4));
    await page.waitForFunction(()=>window.__touches.some(t=>t.id==='browser'&&t.action===1),null,{timeout:12000});
    const touches=await page.evaluate(()=>window.__touches);
    assert.ok(touches.some(t=>t.id==='browser' && t.action===0),'hand pinch down reaches browser texture');
    assert.ok(touches.some(t=>t.id==='browser' && t.action===1),'hand pinch up reaches browser texture');
    // Native PhoneXR decisions drive spatial interaction; no JS landmark/gesture heuristic.
    await page.evaluate(()=>{window.__touches=[];window.nextvrResume();});
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
    const libraryPanel=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='library'));
    const libraryMatrix=libraryPanel.matrix;
    const handle=new THREE.Vector3(0,-364/libraryPanel.rect[3],0).applyMatrix4(new THREE.Matrix4().fromArray(libraryMatrix));
    const handleView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),handle,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>{window.nextvrResume();window.nextvrPose(p);},handleView.toArray());
    await feed(hand(.04));await page.waitForTimeout(300);
    assert.equal(await page.locator('.win-shell.moving').count(),0,'a stationary pinch is selection, not drag');
    assert.equal(await page.locator('.win-shell.free').count(),0,'a stationary pinch keeps the window pinned');
    await feed(hand(.04,{aim:[.12,.08]}));
    await page.waitForFunction(()=>!!document.querySelector('.win-shell.moving'));
    await feed(hand(.4,{aim:[.12,.08]}));
    await page.waitForFunction(()=>!document.querySelector('.win-shell.moving'));
    assert.equal(await page.locator('.win-shell.free').count(),1,'White handle detaches the window only after deliberate hand movement');
    assert.equal(await page.locator('.win-shell.moving').count(),0);
    await page.locator('.win-shell.free [data-act="pin"]').click();
    assert.equal(await page.locator('.win-shell.free').count(),0,'Repin restores the dock/window relationship');
    await settle();
    // PhoneXR's fist grabs the whole window, not the old pinch handle. It must not click the page.
    const lib=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='library').matrix);
    const libCentre=new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(lib));
    const fistView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),libCentre,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>{window.nextvrResume();window.nextvrPose(p);window.__touches=[];},fistView.toArray());
    const fist=hand(.4,{fist:true});
    await feed(fist);await page.waitForTimeout(300);
    assert.equal(await page.locator('.win-shell.moving').count(),0,'closing a fist without moving does not drag');
    assert.equal(await page.evaluate(()=>window.__touches.filter(t=>t.action===0).length),0,'Fist is not a pinch');
    await page.waitForFunction(()=>window.__handTargets?.some(t=>t.id==='right'&&t.hidden));
    fist.hands[0].palm=fist.hands[0].grab=[.62,.45];
    await feed(fist);
    await page.waitForFunction(original=>{
      const current=window.__last.panels.find(p=>p.id==='library').matrix;
      return Math.abs(current[12]-original[12])>.03;
    },lib);
    fist.hands[0].palm=fist.hands[0].grab=[.62,.99];
    await feed(fist);await page.waitForTimeout(500);
    await feed(hand(.4));
    await page.waitForFunction(()=>!document.querySelector('.win-shell.moving'));
    assert.equal(await page.locator('.win-shell.free').count(),1,'Opening the fist releases the detached window');
    const bounded=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='library').matrix);
    assert.ok(bounded[13]>=1.10,'window bottom is kept above the lower usable boundary');
    const boundedRadius=Math.hypot(bounded[12],bounded[14]);
    assert.ok(boundedRadius>=.37&&boundedRadius<=1.61,'window remains inside radial limits');

    // Every existing window has a distinct hand resize target. It preserves aspect/content and centre.
    await page.locator('.win-shell.free [data-act="pin"]').click();await settle();
    const resizePanel=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='library'));
    const resizePoint=new THREE.Vector3((1040/2-48)/resizePanel.rect[2],-(660/2-48)/resizePanel.rect[3],0)
      .applyMatrix4(new THREE.Matrix4().fromArray(resizePanel.matrix));
    const resizeView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),resizePoint,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>window.nextvrPose(p),resizeView.toArray());
    await feed(hand(.04));await page.waitForTimeout(250);
    assert.equal(await page.locator('.win-shell.resizing').count(),0,'pinch without motion does not resize');
    await feed(hand(.04,{aim:[.18,-.12]}));
    await page.waitForFunction(()=>Number(document.querySelector('[data-window-id="library"]').dataset.resizeScale)>1.02);
    assert.equal(await page.locator('.win-shell.resizing').count(),1);
    await feed(hand(.4,{aim:[.18,-.12]}));
    await page.waitForFunction(()=>!document.querySelector('.win-shell.resizing'));
    const resized=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='library').matrix);
    for(const i of [12,13,14])assert.ok(Math.abs(resized[i]-resizePanel.matrix[i])<.006,'resize keeps window centre stable');
    assert.ok(Math.hypot(resized[0],resized[1],resized[2])>Math.hypot(resizePanel.matrix[0],resizePanel.matrix[1],resizePanel.matrix[2])*1.02);
    assert.equal(await page.locator('[data-window-id="library"] .win-body').evaluate(e=>[e.parentElement.offsetWidth,e.parentElement.offsetHeight].join('x')),'1040x660','content keeps its reference aspect without clipping');
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrSuspend();});

    await settle();
    // Palm-pinch dock summon has been removed: dock no longer appears via palm+pinch.
    // Verify that a hand with menuEligible and pinching does NOT summon the dock and does not
    // produce a hand-menu-logo, and that windows remain unmoved.
    const anchored=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay).slice(1).map(p=>p.matrix));
    const dockBefore=await page.evaluate(()=>window.__last.panels[0].matrix.slice());
    const summonView=new THREE.Matrix4().makeRotationY(-.7);
    await page.evaluate(p=>{window.nextvrResume();window.nextvrPose(p);window.__touches=[];},summonView.toArray());
    const menu=hand(.4);menu.hands[0].menuEligible=true;menu.hands[0].menuPoint=[.5,.5];
    await feed(menu);
    await page.waitForTimeout(500);
    assert.equal(await page.locator('.hand-menu-logo:not([hidden])').count(),0,'Palm menu logo must not appear after pinch dock removal');
    menu.hands[0].pinching=true;await feed(menu);
    await page.waitForTimeout(500);
    const summoned=await page.evaluate(()=>window.__last.panels[0].matrix);
    assert.ok(Math.abs(summoned[12]-dockBefore[12])<.05 && Math.abs(summoned[14]-dockBefore[14])<.05,'Dock must not summon via palm pinch after removal');
    const kept=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay).slice(1).map(p=>p.matrix));
    for(let i=0;i<kept.length;i++)for(let k=0;k<16;k++)assert.ok(Math.abs(kept[i][k]-anchored[i][k])<.001,'Dock summon removal must not recenter windows/keyboard');
    // The dock's lower white grab bar is a real PhoneXR pinch target. A deliberate ray drag
    // moves only the dock, preserves the drag offset, and recenter restores its closer default.
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrHands({hands:[]});window.nextvrSuspend();});
    await page.locator('.dock [data-id="kb"]').click();
    await page.waitForFunction(()=>!window.__last.panels.some(p=>p.rect[1]===3160));
    await page.evaluate(p=>window.nextvrPose(p),new THREE.Matrix4().toArray());
    await settle();
    const grab=await page.evaluate(()=>{
      const panel=window.__last.panels.find(p=>p.id==='dock'),root=document.querySelector('.dock'),bar=root.querySelector('.dock-grab');
      return {matrix:panel.matrix,rect:panel.rect,rootWidth:root.offsetWidth,
        top:bar.offsetTop,height:bar.offsetHeight};
    });
    const grabLocal=new THREE.Vector3((160+grab.rootWidth/2)/grab.rect[2]-.5,
      .5-(160+grab.top+grab.height/2)/grab.rect[3],0);
    const grabWorld=grabLocal.applyMatrix4(new THREE.Matrix4().fromArray(grab.matrix));
    const direction=grabWorld.sub(new THREE.Vector3(0,1.55,0));
    const tanX=Math.tan(36*Math.PI/180)*1.5;
    const grabAim=[direction.x/-direction.z,direction.y/-direction.z];
    const windowsBeforeMove=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay&&p.id!=='dock').map(p=>p.matrix));
    await page.evaluate(()=>window.nextvrResume());
    await feed(hand(.04,{aim:grabAim}));
    await page.waitForFunction(()=>document.querySelector('.dock.grab-armed'));
    await page.waitForTimeout(180);
    assert.equal(await page.locator('.dock.moving').count(),0,'a stationary pinch only arms the dock handle');
    const movedAim=[grabAim[0]+.09*2*tanX,grabAim[1]];
    await feed(hand(.04,{aim:movedAim}));
    await page.waitForFunction(()=>document.querySelector('.dock.moving'),null,{timeout:12000});
    await page.waitForFunction(x=>Math.abs(window.__last.panels.find(p=>p.id==='dock').matrix[12]-x)>.025,
      grab.matrix[12],{timeout:12000});
    const moved=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='dock').matrix);
    assert.ok(Math.abs(moved[12]-grab.matrix[12])>.025,'Pinching and moving the bar repositions the dock');
    const windowsAfterMove=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay&&p.id!=='dock').map(p=>p.matrix));
    assert.equal(windowsAfterMove.length,windowsBeforeMove.length);
    for(let i=0;i<windowsAfterMove.length;i++)for(let k=0;k<16;k++)assert.ok(Math.abs(windowsAfterMove[i][k]-windowsBeforeMove[i][k])<.001,'Moving the dock leaves app windows anchored');
    await feed(hand(.4,{aim:movedAim}));
    await page.waitForFunction(()=>!document.querySelector('.dock.moving'));
    const released=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='dock').matrix);
    assert.ok(Math.abs(released[12]-moved[12])<.01,'Dock remains at the released position');
    assert.equal(await page.locator('.dock-grab[aria-pressed="true"]').count(),0,'Grab state clears on release');
    await page.locator('.dock [data-id="center"]').click();
    await settle();
    const recentered=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='dock').matrix);
    assert.ok(Math.abs(recentered[12])<.001 && Math.abs(recentered[14]+.55)<.001,'Recenter restores the dock default');
    // Dock summon via palm pinch was removed; the pinch remains a normal hand-ray gesture.
    await page.evaluate(()=>{window.__touches=[];});
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrHands({hands:[]});window.nextvrSuspend();});
    assert.equal(await page.locator('.hand-menu-logo:not([hidden])').count(),0);
    assert.deepEqual(errors,[]);
  } finally { if(browser)await browser.close();await new Promise(resolve=>server.close(resolve)); }
});

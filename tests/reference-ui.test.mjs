import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import bundledChromium from '@sparticuz/chromium';
import * as THREE from 'three';

// CI runs this on a software renderer: the whole flow (boot, windows, hand input, keyboard, Android
// app windows) needs real seconds per step, so the budget is generous on purpose — a hang still fails.
test('reference HTML boots, retains dock layout, spatial windows, native browsers and head-independent placement', {timeout:180000}, async (t) => {
  const base = new URL('../nextvr-android/src/main/assets/ui/', import.meta.url);
  const server=createServer(async(req,res)=>{
    try {
      const path=(req.url==='/'?'index.html':req.url.slice(1)).split('?')[0];
      if(path.includes('..')) throw Error();
      // The shell's asset host serves the Android app icons from /apps/<file> (WebSurface); the test
      // server answers the same way with a real PNG, so a tile that loses its icon is a real failure.
      if(path.startsWith('apps/')) { res.setHeader('Content-Type','image/png'); res.end(await readFile(new URL('icons/nextvr-n.png',base))); return; }
      res.setHeader('Content-Type',path.endsWith('.js')?'application/javascript':path.endsWith('.css')?'text/css':path.endsWith('.html')?'text/html':path.endsWith('.png')?'image/png':'application/octet-stream');
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
    const nativeSource=await readFile(new URL('../nextvr-android/src/main/java/com/nextvr/app/SpatialRenderer.java',import.meta.url),'utf8');
    const pairs=[...nativeSource.matchAll(/(?:program|cameraProgram) = link\(\s*("(?:\\.|[^"\\])*"),\s*("(?:\\.|[^"\\])*")\);/g)]
      .map(m=>[JSON.parse(m[1]),JSON.parse(m[2]).replace(/#extension GL_OES_EGL_image_external : require\n/,'').replaceAll('samplerExternalOES','sampler2D')]);
    assert.equal(pairs.length,2);
    const handSource=await readFile(new URL('../nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt',import.meta.url),'utf8');
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
      window.__frames=[]; window.__touches=[]; window.__frameSeq=0; window.__environmentCalls=[];
      // Model an upgrade from the old default so this flow verifies the one-time migration to palm.
      try { localStorage.setItem('nextvr.v1',JSON.stringify({env:'passthrough',panorama:'lagoon'})); } catch {}
      window.NativeXR={
        frame(scene,browsers){window.__frameSeq++;window.__last={panels:JSON.parse(scene),browsers:JSON.parse(browsers)};window.__frames.push(window.__last);if(window.__frames.length>10)window.__frames.shift();},
        env(id){window.__environmentCalls.push(id);},
        battery(){return '{"level":0.72,"charging":false}';}, hands(){}, click(){}, key(){},
        // The installed-app list and the command channel are the native bridges; the stub answers
        // like the Java side does (same JSON shape, icon URLs served from /apps/).
        appsLibrary(query,showSystem){
          window.__appQueries=[...(window.__appQueries||[]),{query,showSystem}];
          return JSON.stringify({apps:[
            // Notes adapts to any shape (orient:''): it starts landscape, and the user's rotation is
            // remembered. Settings declares landscape, like most system pages.
            {pkg:'org.example.notes',label:'Notas',system:false,component:'org.example.notes/.Main',
             icon:'/apps/org.example.notes.png',recent:false,state:null,mode:null,input:null,
             shape:'landscape',orient:'',fixed:false,box:{w:1040,h:585}},
            {pkg:'com.android.settings',label:'Configurações',system:true,component:'com.android.settings/.Settings',
             icon:null,recent:false,state:null,mode:null,input:null,
             shape:'portrait',orient:'portrait',fixed:false,box:{w:585,h:1040}}],
            total:2,shown:2,hosting:0,capacity:3,query,showSystem,singleAppCapture:false});
        },
        appsCommand(json){window.__appCommands=[...(window.__appCommands||[]),JSON.parse(json)];},
        handTargets(json){window.__handTargets=JSON.parse(json);},
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
    assert.ok(await page.evaluate(()=>window.__environmentCalls.includes('palm')),
      'the upgraded default enters the palm panorama instead of camera passthrough');
    const migratedEnvironment=await page.evaluate(()=>JSON.parse(localStorage.getItem('nextvr.v1')));
    assert.equal(migratedEnvironment.env,'palm');
    assert.equal(migratedEnvironment.panorama,'palm');
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
    // O piso é ditado pelo teto de 660 px do slot de textura no atlas nativo, que é o que permite os
    // doze idiomas aparecerem de uma vez, como no print (~40 px = ~4 cm a 0,42 m ≈ 5,3 graus).
    assert.ok(language.buttonHeight>=38,'Language rows stay large enough for a hand pinch');
    assert.equal(await page.locator('.lang-option').count(),12,'the picker lists every language from the reference');
    // No print todos os idiomas aparecem de uma vez; a lista não pode depender de rolagem (o toque
    // por pinca não rola). Este número é o mais fácil de quebrar sem querer ao mexer no CSS.
    const list=await page.evaluate(()=>{const l=document.querySelector('.lang-options');return {scroll:l.scrollHeight,client:l.clientHeight,rows:l.children.length};});
    assert.ok(list.scroll<=list.client+1,`all twelve languages are visible at once: ${JSON.stringify(list)}`);
    const languageTarget=new THREE.Vector3(language.x/language.rect[2],language.y/language.rect[3],0).applyMatrix4(languageMatrix);
    const languageView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),languageTarget,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>window.nextvrPose(p),languageView.toArray());
    await page.waitForTimeout(1400);
    assert.equal(await page.locator('.lang-option[aria-pressed="true"]').count(),1,'looking at setup never selects it');
    assert.equal(await page.evaluate(()=>typeof window.nextvrTrigger),'undefined','viewer/touchscreen trigger callback is absent');
    await feed(hand(.02));
    await page.waitForFunction(()=>window.__handTargets?.some(t=>t.id==='right'&&t.down),null,{timeout:5000});
    assert.ok(await page.evaluate(()=>window.__handTargets.some(t=>t.id==='right'&&t.down)),
      'a live PhoneXR pinch reaches the native hand renderer as an active pointer target');
    await feed(hand(.4));
    await page.waitForFunction(()=>!document.querySelector('.lang-option'));
    await page.evaluate(()=>clearInterval(window.__feed));
    const languageState=await page.evaluate(()=>JSON.parse(localStorage.getItem('nextvr.v1')));
    assert.equal(languageState.lang,'en');
    assert.equal(languageState.env,'palm','the palm panorama survives onboarding and remains the default');
    assert.equal(languageState.panorama,'palm');
    // Choosing the language closes the picker and brings the whole shell back, Meta-style:
    // the dock returns with phone status, the virtual-environment shortcut and app tiles.
    await page.waitForFunction(()=>window.__last?.panels.some(p=>p.id==='dock'));
    const ids=await page.locator('.dock button[data-id]').evaluateAll(nodes=>nodes.map(n=>n.dataset.id));
    assert.deepEqual(ids,['profile','status','virtual-environment','browser','store','discord','gallery','settings','youtube','shizuku','library'],
      'the compact dock keeps phone status and the Vision-style virtual-environment shortcut');
    assert.equal(await page.locator('.dock .dock-spacer').count(),1,
      'a small gap separates status and the app tiles');
    assert.equal(await page.locator('.dock .dock-tool').count(),1,
      'only the virtual-environment shortcut is added; notifications stay out of the dock');
    const environmentShortcut=page.locator('.dock [data-id="virtual-environment"]');
    assert.equal(await environmentShortcut.getAttribute('aria-pressed'),'true','palm is already active at startup');
    assert.equal(await environmentShortcut.locator('svg').count(),1,'the environment shortcut uses a single vector silhouette');
    assert.equal(await environmentShortcut.innerText(),'','the dock icon has no text or extra glyphs');
    await environmentShortcut.click();
    assert.equal(await environmentShortcut.getAttribute('aria-pressed'),'false','the headset shortcut can return to passthrough');
    assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('nextvr.v1')).env),'passthrough');
    await environmentShortcut.click();
    assert.equal(await environmentShortcut.getAttribute('aria-pressed'),'true','the same shortcut re-enters the saved palm environment');
    assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('nextvr.v1')).env),'palm');
    const dockSkin=await page.locator('.dock').evaluate(e=>{const s=getComputedStyle(e);return {background:s.backgroundImage,radius:s.borderRadius,blur:s.backdropFilter};});
    assert.match(dockSkin.background,/54, 64, 81/,'the dock is dark blue-gray glass');
    assert.match(dockSkin.background,/29, 37, 52/,'the dock keeps a blue-gray shadow tone');
    assert.equal(dockSkin.radius,'16px','the dock is a compact rounded rectangle, not a capsule');
    assert.match(dockSkin.blur,/blur\(20px\)/,'the dock keeps a subtle frosted-glass treatment');
    assert.equal(await page.locator('.dock-grab').evaluate(e=>getComputedStyle(e,'::after').opacity),'0.94',
      'the white movement handle stays visible below the dock');
    assert.equal(await page.getByRole('button',{name:'Move the dock'}).count(),1,'the short Quest-style dock handle is available');
    assert.equal(await page.locator('.win-shell').count(),0,'the language window closed with the pick');
    assert.ok(await page.evaluate(()=>!document.getElementById('stat').hidden),'the whole shell is back after the pick');
    await page.evaluate(p=>window.nextvrPose(p),new THREE.Matrix4().toArray());
    await page.locator('.dock [data-id="library"]').click();
    await page.waitForFunction(()=>!!document.querySelector('.lib-grid'));
    assert.equal(await page.locator('.lib-tile').count(),19,
      'the reference library shows colorful app tiles alongside installed Android apps');
    assert.equal(await page.locator('.lib-title').innerText(),'Apps');
    assert.equal(await page.locator('.lib-search').getAttribute('placeholder'),'Search apps','search stays visible in the top bar');
    assert.equal(await page.locator('.lib-rail').count(),1,'the dark floating library has a compact navigation rail');
    assert.equal(await page.locator('.lib-rail-btn').count(),4,'the rail filters apps, games and recent items');
    assert.equal(await page.locator('.lib-shortcut').count(),0,'the old oversized shortcut cards are removed');
    assert.equal(await page.locator('.lib-tv').count(),0,'YouTube appears as a normal colorful app tile');
    assert.equal(await page.locator('.lib-foot').count(),0,'close and window controls live in the header');
    assert.equal(await page.locator('.lib-close').count(),1,'the library keeps an accessible close button');
    const firstApps=await page.locator('.lib-grid .lib-tile[data-app]').evaluateAll(nodes=>nodes.map(n=>n.dataset.app).slice(0,10));
    assert.deepEqual(firstApps,['netflix','youtube','tiktok','discord','twitch','prime','pluto','whatsapp','instagram','x'],
      'the first two rows match the app order in the supplied screenshot');
    // Wait for the atlas DOM rectangle before measuring the five image columns.
    await page.waitForFunction(()=>{const g=document.querySelector('.lib-grid');return g&&g.getBoundingClientRect().width>0;},null,{timeout:5000});
    assert.equal(await page.locator('.lib-grid').evaluate(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length),5,'Library cover art uses the screenshot five-column grid');
    await page.locator('[data-filter]').click();
    assert.equal(await page.locator('.lib-tile').count(),19,'Apps filter shows every installed and built-in app as a tile');
    await page.locator('[data-filter]').click();
    assert.equal(await page.locator('.lib-tile').count(),0,
      'Games filter is the PhoneXR library itself; this mock answers no runtime, so nothing is here');
    await page.locator('[data-filter]').click();
    assert.equal(await page.locator('.lib-tile').count(),0,'Recent filter starts empty until an app is launched');
    await page.locator('[data-filter]').click();
    assert.equal(await page.locator('.lib-tile').count(),19,'All restores the screenshot layout and installed-app grid');
    await page.locator('.dock [data-id="status"]').click();
    await page.waitForFunction(()=>!!document.querySelector('.quick-settings'));
    assert.equal(await page.locator('.qs-system [data-q-battery]').innerText(),'72%','quick settings use the native battery bridge value');
    assert.match(await page.locator('[data-q-time]').innerText(),/^\d{1,2}:\d{2}$/,'quick settings show the device clock');
    assert.match(await page.locator('[data-q-date]').innerText(),/[0-9]/,'quick settings show the device date');
    assert.equal(await page.locator('.qs-tools').locator('button').count(),9,'quick settings follow the reference action grid');
    assert.equal(await page.locator('.qs-side').count(),1,'the volume and blue quick buttons match the side rail in the screenshot');
    const quickPanel=await page.locator('.qs-panel').evaluate(e=>getComputedStyle(e).backgroundColor);
    assert.equal(quickPanel,'rgb(16, 46, 51)','the system panel uses the reference dark teal');
    await page.locator('.quick-settings [data-q-settings]').click();
    await page.waitForFunction(()=>!!document.querySelector('.win-shell[data-window-id="settings"] .tabs'));
    await page.locator('.win-shell[data-window-id="settings"] [data-act="close"]').click();
    await page.locator('.quick-settings [data-q-close]').click();
    await page.waitForFunction(()=>!document.querySelector('.quick-settings'));
    await page.locator('.dock [data-id="store"]').click();
    // The store is the honest shell now: Apps and Horizon+ (the demo-game tabs are gone). Wait for
    // the window itself to be composited into the atlas, not just for the markup to exist — the
    // next steps click again and must not race a frame.
    await page.waitForFunction(()=>document.querySelectorAll('.st-tab').length===2);
    await page.waitForFunction(()=>window.__last?.panels.some(p=>p.id==='store'));
    await page.locator('.dock [data-id="browser"]').click();
    await page.waitForFunction(()=>window.__last?.browsers.some(b=>b.id==='browser'));
    assert.equal(await page.locator('iframe').count(),0,'Native browser does not create a privileged iframe');
    assert.equal(await page.locator('.win-shell').count(),3);
    const browserSpec=await page.evaluate(()=>window.__last.browsers.find(b=>b.id==='browser'));
    assert.equal(browserSpec.url,'https://duckduckgo.com/');
    assert.ok(browserSpec.width>900 && browserSpec.height>400);
    // The keyboard has no dock tile any more: it opens the way it opens for a user, when a text
    // field takes the focus — here a field in the hosted page, which is the native side telling the
    // shell (nextvrBrowserFocus), the same call the WebView makes on a real site.
    await page.evaluate(()=>window.nextvrBrowserFocus('browser',true));
    await page.waitForFunction(()=>document.querySelectorAll('.key').length>30);
    // The panel only reaches the bridge on the next frame send (30 Hz throttle), so wait for the
    // compositor to actually carry the keyboard instead of racing the throttle.
    await page.waitForFunction(()=>window.__last?.panels.some(p=>p.rect[1]===3160));
    // Keyboard lies flat like a desk (Meta Quest style): the panel's local +Y (top edge) must
    // point away from the user (-Z). Matrix is column-major: column 1 (elements 4..7) is the
    // local Y basis, so its Z component is elements[6]; lying flat gives sin(pitch) < 0.
    const kbPanel=await page.evaluate(()=>window.__last.panels.find(p=>p.rect[1]===3160));
    assert.ok(kbPanel,'Keyboard panel is composited into the atlas');
    assert.ok(kbPanel.matrix[6]<0,'Keyboard lies flat (Meta Quest style), top edge away from the user');
    // The way out is the keyboard's own close key, and focusing the field again brings it back:
    // with no dock tile, these two are the whole open/close contract.
    await page.locator('.kb [data-k="@close"]').click();
    await page.waitForFunction(()=>!window.__last.panels.some(p=>p.rect[1]===3160),null,{timeout:12000});
    await page.evaluate(()=>window.nextvrBrowserFocus('browser',true));
    await page.waitForFunction(()=>window.__last.panels.some(p=>p.rect[1]===3160),null,{timeout:12000});
    // Count actual compositor updates, not wall time: CI's software renderer can be slow.
    const settle=async()=>{
      await page.evaluate(()=>window.__settle=null);
      await page.waitForFunction(()=>{
        const prev=window.__settle,seq=window.__frameSeq;
        // Sem animação de janela a cena fica bit a bit igual e a ponte PARA de enviar: nenhum envio
        // novo também é a cena assentada (o atlas só cruza quando algo muda). Exigir dois envios
        // parados seguidos cobriria o caso de um envio ainda em voo logo após o reset.
        if(prev?.seq===seq){const count=prev.count+1;window.__settle={...prev,count};return count>=2;}
        const values=window.__last.panels.filter(p=>!p.overlay).flatMap(p=>p.matrix);
        const stable=prev?.values.length===values.length && values.every((v,i)=>Math.abs(v-prev.values[i])<.00015);
        const count=stable?prev.count+1:0;window.__settle={seq,values,count};return count>=3;
      },null,{timeout:25000});
    };
    await settle();
    const dockWindowGap=await page.evaluate(()=>{
      const dock=window.__last.panels.find(p=>p.id==='dock');
      const win=window.__last.panels.find(p=>p.id==='library');
      const dockTop=dock.matrix[13]+Math.abs(dock.matrix[5]*dock.glass[3])/2;
      const windowBottom=win.matrix[13]-Math.abs(win.matrix[5]*win.glass[3])/2;
      return windowBottom-dockTop;
    });
    assert.ok(dockWindowGap>.08,'Pinned app windows float clearly above the dock with a visible gap');
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
    // Click-vs-drag arbitration: a still pinched hold is a click candidate and must send NO page
    // input while the decision window is open (immediate DOWN+MOVE was what scrubbed pages).
    await feed(hand(.04));
    await page.waitForTimeout(500);
    assert.deepEqual(await page.evaluate(()=>window.__touches),[],'a still pinched hold sends no page input before release');
    await feed(hand(.4));
    await page.waitForFunction(()=>window.__touches.some(t=>t.id==='browser'&&t.action===0),null,{timeout:12000});
    await page.waitForFunction(()=>window.__touches.some(t=>t.id==='browser'&&t.action===1),null,{timeout:12000});
    const touches=await page.evaluate(()=>window.__touches);
    assert.ok(touches.some(t=>t.id==='browser' && t.action===0),'hand pinch tap reaches the browser texture (down)');
    assert.ok(touches.some(t=>t.id==='browser' && t.action===1),'hand pinch tap reaches the browser texture (up)');
    assert.equal(touches.filter(t=>t.action===2).length,0,'a click never streams moves (that is what made clicks drag)');
    // Native PhoneXR decisions drive spatial interaction; no JS landmark/gesture heuristic.
    await page.evaluate(()=>{window.__touches=[];window.nextvrResume();});
    await feed(hand(.04));
    await page.waitForFunction(()=>window.__handTargets?.some(t=>t.id==='right'&&t.down&&t.end?.length===3));
    // A slow native detector supplies its completion-based validity; 500 ms is not a lost hand.
    await page.evaluate(h=>{clearInterval(window.__feed);window.__touches=[];window.nextvrHands({...h,validForMs:1400,inferenceMs:600});},hand(.04));
    await page.waitForTimeout(650);
    assert.equal(await page.evaluate(()=>window.__touches.some(t=>t.action===3)),false,'Slow inference must not flicker/cancel between valid results');
    // Losing an undecided hold sends nothing at all: no phantom click on the way out.
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrHands({hands:[]});});
    await page.waitForTimeout(250);
    assert.deepEqual(await page.evaluate(()=>window.__touches),[],'losing an undecided hold must not click');
    // A deliberate sweep commits the press as a drag; losing tracking mid-press CANCELs it
    // rather than releasing/clicking a link accidentally.
    await feed(hand(.04));await page.waitForTimeout(200);
    await feed(hand(.04,{aim:[.05,0]}));await page.waitForTimeout(200);
    await feed(hand(.04,{aim:[.08,0]}));await page.waitForTimeout(250);
    assert.ok(await page.evaluate(()=>window.__touches.some(t=>t.id==='browser'&&t.action===0)),'a deliberate sweep commits the content press');
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrHands({hands:[]});});
    await page.waitForFunction(()=>window.__touches.some(t=>t.action===3),null,{timeout:12000});
    const loss=await page.evaluate(()=>window.__touches);
    assert.ok(!loss.some(t=>t.action===1),'Tracking loss does not click');
    // Recovery: the ray works again, still as a clean tap (down+up at release).
    await page.evaluate(()=>window.__touches=[]);
    await feed(hand(.04));await page.waitForTimeout(400);
    await feed(hand(.4));
    await page.waitForFunction(()=>window.__touches.some(t=>t.action===0),null,{timeout:12000});
    await page.waitForFunction(()=>window.__touches.some(t=>t.action===1),null,{timeout:12000});
    await page.evaluate(()=>clearInterval(window.__feed));
    await page.evaluate(()=>window.nextvrSuspend());
    await page.locator('.win-shell').filter({has:page.locator('.win-title', {hasText:'Browser'})}).locator('[data-act="close"]').click();
    await page.waitForFunction(()=>!window.__last.browsers.some(b=>b.id==='browser'));
    assert.equal(await page.locator('.win-shell').count(),2);
    // The keyboard was serving that page: closing the window it belonged to closes it too, instead
    // of leaving an orphan keyboard typing into a surface that no longer exists.
    await page.waitForFunction(()=>!window.__last.panels.some(p=>p.rect[1]===3160),null,{timeout:12000});
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
    // The detached white grab bar under the dock is a real MediaPipe pinch target. A deliberate ray drag
    // moves only the dock, preserves the drag offset, and recenter restores its closer default.
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrHands({hands:[]});window.nextvrSuspend();});
    assert.equal(await page.locator('.kb').count(),0,'no keyboard is left over before the dock is dragged');
    await page.evaluate(p=>window.nextvrPose(p),new THREE.Matrix4().toArray());
    const grab=await page.evaluate(()=>{
      const panel=window.__last.panels.find(p=>p.id==='dock'),root=document.querySelector('.dock'),bar=root.querySelector('.dock-grab');
      return {matrix:panel.matrix,rect:panel.rect,rootWidth:root.offsetWidth,rootHeight:root.offsetHeight,
        top:bar.offsetTop,height:bar.offsetHeight};
    });
    assert.ok(grab.top>=grab.rootHeight+10,'The grab pill floats below the dock instead of touching its body');
    const grabLocal=new THREE.Vector3((160+grab.rootWidth/2)/grab.rect[2]-.5,
      .5-(160+grab.top+grab.height/2)/grab.rect[3],0);
    const grabWorld=grabLocal.applyMatrix4(new THREE.Matrix4().fromArray(grab.matrix));
    const direction=grabWorld.sub(new THREE.Vector3(0,1.55,0));
    const tanX=Math.tan(36*Math.PI/180)*1.5;
    const grabAim=[direction.x/-direction.z,direction.y/-direction.z];
    const windowsBeforeMove=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay&&p.id!=='dock').map(p=>p.matrix));
    await page.evaluate(()=>window.nextvrResume());
    await feed(hand(.04,{aim:grabAim}));
    await page.waitForFunction(()=>document.querySelector('.dock.grab-armed'),null,{timeout:12000});
    await page.waitForTimeout(180);
    assert.equal(await page.locator('.dock.moving').count(),0,'a stationary pinch only arms the dock handle');
    const movedAim=[grabAim[0]+.09*2*tanX,grabAim[1]];
    await feed(hand(.04,{aim:movedAim}));
    await page.waitForFunction(()=>document.querySelector('.dock.moving'),null,{timeout:12000});
    await page.waitForFunction(x=>Math.abs(window.__last.panels.find(p=>p.id==='dock').matrix[12]-x)>.025,
      grab.matrix[12],{timeout:12000});
    await page.waitForTimeout(300); // Let the display-rate cursor prediction settle before sampling.
    const moved=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='dock').matrix);
    assert.ok(Math.abs(moved[12]-grab.matrix[12])>.025,'Pinching and moving the bar repositions the dock');
    const windowsAfterMove=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay&&p.id!=='dock').map(p=>p.matrix));
    assert.equal(windowsAfterMove.length,windowsBeforeMove.length);
    for(let i=0;i<windowsAfterMove.length;i++)for(let k=0;k<16;k++)assert.ok(Math.abs(windowsAfterMove[i][k]-windowsBeforeMove[i][k])<.001,'Moving the dock leaves app windows anchored');
    await feed(hand(.4,{aim:movedAim}));
    await page.waitForFunction(()=>!document.querySelector('.dock.moving'),null,{timeout:12000});
    // The release sample is real; it may correct the last display-predicted frame by a few
    // millimetres. Wait for compositor stability, then make sure the moved dock stays there.
    await settle();
    const released=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='dock').matrix);
    assert.ok(Math.abs(released[12]-grab.matrix[12])>.025,'Dock keeps its moved position when released');
    await page.waitForTimeout(180);
    const resting=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='dock').matrix);
    assert.ok(Math.abs(resting[12]-released[12])<.001,'Dock remains at the released position');
    assert.equal(await page.locator('.dock-grab[aria-pressed="true"]').count(),0,'Grab state clears on release');
    // The dock has no recenter tile any more (the view is centred once, at boot and after the
    // language pick): a dock the user moved stays where it was put, and nothing recentres it behind
    // the user's back.
    await page.waitForTimeout(400);
    const settled=await page.evaluate(()=>window.__last.panels.find(p=>p.id==='dock').matrix);
    assert.ok(Math.abs(settled[12]-released[12])<.001,'Nothing recentres the dock after the drag');
    /* ================================ Android apps in floating windows ============================
       The dock's Android page lists the device's own apps and each open app becomes a window whose
       body is the app's real display. Everything the user does there must reach the app: the shell
       DOM never receives a synthetic event for an app window.
       ============================================================================================= */
    await page.evaluate(()=>window.nextvrResume());
    /* ================================ the installed apps in the Applications menu ==================
       There is no Android page and no mirror button: the apps installed on the phone are tiles of
       the Applications menu the shell already had, in the same grid, drawn with the icon the
       PackageManager returned. The window they open is either the app hosted on its own display or
       a capture of the phone screen with the app on it, and its badge always says which one it is.
       ============================================================================================= */
    await page.locator('.dock [data-id="library"]').click();
    await page.waitForFunction(()=>!!document.querySelector('.lib-grid'));
    assert.equal(await page.locator('.lib-rail').count(),1,
      'Android apps remain in the shared app grid rather than getting a separate rail page');
    assert.equal(await page.locator('.lib-rail [data-lib-nav="android"]').count(),0,
      'the navigation rail has no separate Android-app page');
    assert.equal(await page.locator('.lib-tile.android').count(),2,'both apps from the bridge are tiles of the menu');
    assert.ok(await page.locator('.lib-grid .lib-tile').count()>2,
      'and they sit in the same grid as the web apps, not in a page of their own');
    assert.equal(await page.locator('.lib-tile.android[data-pkg="com.android.settings"] .lib-sys').count(),1,
      'a system app is marked as one');
    await page.waitForFunction(()=>{
      const img=document.querySelector('.lib-tile.android[data-pkg="org.example.notes"] img.lib-app-icon');
      return !!img&&img.complete&&img.naturalWidth>0;},null,{timeout:5000});
    const tileIcon=await page.evaluate(()=>{
      const img=document.querySelector('.lib-tile.android[data-pkg="org.example.notes"] img.lib-app-icon');
      return img?{src:img.getAttribute('src'),loaded:img.complete&&img.naturalWidth>0}:null;});
    assert.equal(tileIcon?.src,'/apps/org.example.notes.png','the tile uses the icon URL the native side served');
    assert.equal(tileIcon?.loaded,true,'the served icon is a real image the tile keeps');
    assert.equal(await page.locator('.lib-tile.android[data-pkg="com.android.settings"] img').count(),0,
      'an app whose icon could not be read is not left with a broken image');
    assert.equal(await page.locator('.lib-tile.android[data-pkg="com.android.settings"] .lib-cover.noicon .nm').count(),1,
      'it falls back to its initials instead');
    // The row that explains the mechanism exists only while the shell service is not ready: the phone
    // without Shizuku still opens apps, through the capture path.
    assert.equal(await page.locator('.lib-scroll > .lib-note').count(),1,
      'without the shell service the menu says how an app will be opened');
    assert.ok(await page.locator('.lib-note .az-dot').count()>=1,'the Shizuku state is shown there');
    assert.equal(await page.evaluate(()=>!!document.querySelector('.az-caps')),false,
      'the self-test block stays closed until it is asked for');
    assert.equal(await page.locator('.lib-tile.android .az-mirror, .lib-tile.android [data-act="mirror"]').count(),0,
      'no tile carries a mirror button any more');
    await page.locator('.lib-note .az-btn').first().click();
    let commands=await page.evaluate(()=>window.__appCommands||[]);
    assert.ok(commands.some(c=>c.cmd==='refresh'),'checking Shizuku again refreshes the app list over the bridge');
    await page.locator('.lib-tile.android[data-pkg="org.example.notes"]').click();
    commands=await page.evaluate(()=>window.__appCommands||[]);
    const openCommand=commands.filter(c=>c.cmd==='open').pop();
    assert.equal(openCommand?.pkg,'org.example.notes','tapping a tile opens that app');
    // The shape travels; a *size* must not, because the app is hosted on this phone's own screen (the
    // native side creates the display from its own screen size and density). Sending a window size as
    // the app's screen size is the bug that had most apps opening with their bottom cut off.
    assert.equal(openCommand.shape,'landscape','the shell tells the native side which shape the window is');
    assert.equal(openCommand.w,undefined,'no window size travels as the app\'s screen size');
    assert.equal(openCommand.h,undefined,'no window size travels as the app\'s screen size');
    assert.equal(openCommand.focus,undefined,'and nothing else: no mechanism and no focus package travel with it');

    // The native side answers with a running session; the shell draws the window from it.
    const appState=extra=>JSON.stringify({
      sessions:[{pkg:'org.example.notes',title:'Notas',mode:'display',state:'running',input:'shizuku',alive:true,
        shape:'landscape',
        // The canvas is this phone's screen (a 1080x2400 phone), turned for the window's shape: that is
        // the dp box the app lays out in, and the window takes its proportions.
        displayId:7,display:{w:2400,h:1080,dpi:420,dpW:914,dpH:411,rotation:0,rotated:false,aspect:2400/1080},
        error:null,stopReason:null,frames:42,...extra}],
      shizuku:{state:'ready',detail:'uid=2000 v13 bound',ready:true,ask:false,needsApp:false,
        caps:null,route:'hosted',bound:true,binding:false},
      input:{shizuku:true,accessibility:false,singleAppCapture:false},
      capacity:3,library:2,launch:'am start --display',sdk:34,recents:['org.example.notes'],
      diagnostics:{route:'hosted',launchBackend:'am start --display',launchError:null,
        displayReport:null,displayState:'{"ok":true,"w":2400,"h":1080,"logicalW":2400,"logicalH":1080,"rotation":0}',
        serviceReason:'the shell user service is bound',bindError:null,
        captureService:'not running',sdk:34}});
    const appSession=(state,extra={})=>appState({state,...extra});
    const windowsBefore=await page.locator('.win-shell').count();
    await page.evaluate(json=>window.nextvrApps(json),appSession('running'));
    await page.waitForFunction(()=>!!document.querySelector('.app-surface[data-native-app="org.example.notes"]'));
    assert.equal(await page.locator('.win-shell').count(),windowsBefore+1,'a running session owns one window');
    assert.equal(await page.locator('.win-shell .win-title',{hasText:'Notas'}).count(),1,'the window carries the app name');
    const appWindow=page.locator('.win-shell').filter({has:page.locator('.app-surface[data-native-app="org.example.notes"]')});
    assert.equal(await appWindow.count(),1);
    assert.equal(await appWindow.locator('.app-state:not([hidden])').count(),0,'a running app shows no state overlay');
    // The window keeps the NextVR chrome *and* carries the app's own bar with its keys.
    assert.equal(await page.locator('.win-shell .app-window > .app-bar').count(),1,
      'the app window has its bar inside the window body');
    const appKeys=await appWindow.locator('.app-bar .app-key').evaluateAll(ee=>ee.map(e=>e.dataset.act||e.getAttribute('aria-label')));
    assert.equal(appKeys.length,5,
      `the app bar offers back, home, recents, the keyboard and rotate: ${appKeys}`);
    assert.equal((await appWindow.locator('.app-bar .app-key[data-act="rotate"]').count()),1,
      'the app window can be rotated');
    // The window takes the shape the app asks for (AppWindowShape): the app surface measures exactly
    // the pixels the display is created with, so the first frame is neither letterboxed nor scaled.
    const shaped=await appWindow.evaluate(e=>({win:{w:e.querySelector('.win').offsetWidth,h:e.querySelector('.win').offsetHeight},
      surface:{w:e.querySelector('.app-surface').offsetWidth,h:e.querySelector('.app-surface').offsetHeight,
        shape:e.querySelector('.app-surface').dataset.shape}}));
    // Two pixel counts, on purpose: the *window element* is the canvas' shape scaled down to the
    // largest box the shell's 4096x4096 atlas can pack (a taller window overflows its cell and the
    // whole atlas stops updating), while the *canvas* is the phone's screen — 2400x1080 here.
    assert.deepEqual(shaped.surface,{w:1038,h:467,shape:'landscape'},
      `the app surface has the canvas' shape and the window carries it: ${JSON.stringify(shaped)}`);
    assert.equal(shaped.win.w,1038+2);
    assert.equal(shaped.win.h,467+62+52+2,
      `the two bars and the window border are the only chrome: ${shaped.win.h}`);
    assert.ok(Math.abs(shaped.surface.w/shaped.surface.h-2400/1080)<.01,
      'the window body has the canvas\' proportions, so the whole picture is shown');
    const appBoxes=await page.evaluate(()=>window.__appCommands||[]);
    const synced=appBoxes.filter(c=>c.cmd==='sync').pop();
    assert.deepEqual(synced?.windows,[{pkg:'org.example.notes',visible:true}],
      `the sync carries visibility only, never a window size as the app's screen: ${JSON.stringify(synced)}`);
    const badge=await appWindow.locator('.app-badge').innerText();
    assert.match(badge,/android app/i,'a hosted app is labelled as a hosted app');
    assert.doesNotMatch(badge,/mirror/i,'a hosted app is never presented as a screen mirror');
    // With the shell service ready the explanatory row is gone: nothing is left in the menu that
    // belongs only to the Android integration except the tiles themselves.
    await page.waitForFunction(()=>!document.querySelector('.lib-note'));
    // The library and the dock repaint their badges when the session list changes.
    await page.waitForFunction(()=>{
      const open=document.querySelector('.lib-tile.android[data-pkg="org.example.notes"] .lib-open');
      const badge=document.querySelector('.dock [data-id="library"] .dock-badge');
      return !!open&&badge?.textContent?.trim()==='1';
    },null,{timeout:12000});
    assert.equal(await page.locator('.lib-tile.android[data-pkg="org.example.notes"] .lib-open').count(),1,
      'the menu marks the app that is open in a window');
    assert.equal(await page.locator('.dock [data-id="library"] .dock-badge').innerText(),'1',
      'the dock counts the open app windows');
    assert.equal(await page.locator('.dock [data-id="android"]').count(),0,'and there is no Android dock tile');
    // The same session in capture mode is a mirror, and the window says so.
    await page.evaluate(json=>window.nextvrApps(json),JSON.stringify({
      sessions:[{pkg:'org.example.notes',title:'Notas',mode:'mirror',state:'running',input:'accessibility',alive:true,
        displayId:-2,display:{w:1080,h:2340,dpi:320,rotation:0,aspect:1080/2340},error:null,stopReason:null,frames:12}],
      shizuku:{state:'install',detail:'install',ready:false,ask:false,needsApp:true,caps:null,
        route:'capture',bound:false,binding:false,reason:'Shizuku is not running'},
      input:{shizuku:false,accessibility:true,singleAppCapture:false},
      capacity:3,library:2,launch:null,sdk:34,recents:[],
      diagnostics:{route:'capture',launchBackend:null,launchError:null,displayReport:null,
        serviceReason:'Shizuku is not running',bindError:null,captureService:'not running',sdk:34}}));
    await page.waitForFunction(()=>document.querySelector('.app-surface[data-native-app="org.example.notes"]')
      && /mirror/i.test(document.querySelector('.app-surface[data-native-app="org.example.notes"]')
        .closest('.app-window').querySelector('.app-badge').textContent));
    assert.match(await appWindow.locator('.app-badge').innerText(),/mirror/i,
      'a capture of the phone screen is labelled as the mirror it is');
    // Back to the hosted session: the rest of this test works on the hosted picture.
    await page.evaluate(json=>window.nextvrApps(json),appSession('running'));
    await page.waitForFunction(()=>/android app/i.test(document.querySelector('.app-badge').textContent));

    // The compositor samples the same rectangle the touch is normalized against.
    await page.waitForFunction(()=>window.__last?.panels.some(p=>p.browser==='app:org.example.notes'));
    const appPanel=await page.evaluate(()=>window.__last.panels.find(p=>p.browser==='app:org.example.notes'));
    const surfaceBox=await appWindow.locator('.app-surface').evaluate(e=>({w:e.offsetWidth,h:e.offsetHeight,uv:e.dataset.uv,aspect:e.dataset.aspect}));
    assert.ok(Math.abs(appPanel.rect[2]/appPanel.rect[3]-surfaceBox.w/surfaceBox.h)<.01,
      'the panel is the window body, in the same proportions');
    const uv=appPanel.uv.map(Number);
    const published=surfaceBox.uv.split(',').map(Number);
    for(let i=0;i<4;i++) assert.ok(Math.abs(uv[i]-published[i])<.01,'the shader crop is what the window published');
    assert.ok(uv[2]>0&&uv[2]<=1&&uv[3]>0&&uv[3]<=1,'the crop stays inside the texture');
    assert.ok(Math.abs(uv[0]-((1-uv[2])/2))<.002,'the picture is centred, so the crop and the touch agree');
    assert.ok(uv[2]>.99&&uv[3]>.99,
      `the display is created in the shape the window shows it in, so the app fills its window: ${uv}`);

    // Aim the hand at the app's picture and pinch: the app window takes the touch, the shell DOM
    // does not (no synthetic DOM event for a hosted app).
    const appCentre=new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(appPanel.matrix));
    const appView=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),appCentre,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>{window.nextvrResume();window.nextvrPose(p);window.__touches=[];},appView.toArray());
    // A still pinched hold is a click candidate: nothing may reach the app before the release, and
    // the release commits the tap as DOWN+UP (the same arbitration the browser texture gets).
    await feed(hand(.04));
    await page.evaluate(()=>new Promise(r=>setTimeout(r,350)));
    assert.deepEqual(await page.evaluate(()=>window.__touches.filter(t=>t.id.startsWith('app:'))),[],
      'a still pinched hold streams nothing into the app');
    await feed(hand(.4));
    await page.waitForFunction(()=>window.__touches.some(t=>t.id==='app:org.example.notes'&&t.action===0),null,{timeout:12000});
    await page.waitForFunction(()=>window.__touches.some(t=>t.id==='app:org.example.notes'&&t.action===1),null,{timeout:12000});
    await page.evaluate(()=>clearInterval(window.__feed));
    const appTouches=await page.evaluate(()=>window.__touches.filter(t=>t.id==='app:org.example.notes'));
    assert.ok(appTouches.length>=2,'the app window receives its own touch stream');
    for(const touch of appTouches) assert.ok(touch.x>=0&&touch.x<=1&&touch.y>=0&&touch.y<=1,
      'the app is addressed in normalized display coordinates, not window pixels');

    // Rotating the app window: the shape becomes the other one, the app surface and the window change
    // together, the choice is sent to the native side (which remembers it per app) and — after the
    // native side resizes the display, which is what the synced box asks it to do — the picture fills
    // the new window again. Nothing here rotates the *picture*: Android lays the app out for the new
    // canvas and the platform's own compatibility scaling handles an app that cannot follow.
    await appWindow.locator('.app-bar .app-key[data-act="rotate"]').click();
    await page.waitForFunction(()=>document.querySelector('.app-surface[data-native-app="org.example.notes"]')
      .offsetWidth===Math.round(544*1080/2400));
    const rotated=await appWindow.evaluate(e=>({win:{w:e.querySelector('.win').offsetWidth,h:e.querySelector('.win').offsetHeight},
      surface:{w:e.querySelector('.app-surface').offsetWidth,h:e.querySelector('.app-surface').offsetHeight,
        shape:e.querySelector('.app-surface').dataset.shape}}));
    assert.deepEqual(rotated.surface,{w:Math.round(544*1080/2400),h:544,shape:'portrait'},
      `the window and the app surface rotated together: ${JSON.stringify(rotated)}`);
    assert.equal(rotated.win.w,Math.round(544*1080/2400)+2);
    assert.equal(rotated.win.h,544+62+52+2);
    commands=await page.evaluate(()=>window.__appCommands||[]);
    const shapeCommand=commands.filter(c=>c.cmd==='shape').pop();
    assert.deepEqual({pkg:shapeCommand?.pkg,shape:shapeCommand?.shape},
      {pkg:'org.example.notes',shape:'portrait'},'the rotation is remembered per app');
    // What the native side does with that: sync the new box, resize the display, report it back.
    await page.evaluate(json=>window.nextvrApps(json),appSession('running',{shape:'portrait',
      display:{w:1080,h:2400,dpi:420,dpW:411,dpH:914,rotation:0,rotated:false,aspect:1080/2400}}));
    // The crop is [u0, v0, uw, vh]: the origin is 0 by construction, so what has to settle is the two
    // fractions — they are 1 only once the window's aspect and the display's aspect agree again.
    await page.waitForFunction(()=>{const uv=document.querySelector('.app-surface[data-native-app="org.example.notes"]')?.dataset.uv;
      return uv && uv.split(',').slice(2).every(n=>Number(n)>.99);});
    const rotatedCrop=await page.evaluate(()=>document.querySelector('.app-surface[data-native-app="org.example.notes"]').dataset.uv);
    assert.ok(rotatedCrop.split(',').slice(2).every(n=>Number(n)>.99),
      `a portrait display fills a portrait window, with no letterbox: ${rotatedCrop}`);
    // Back to landscape, so the rest of the test works on the shape it started with.
    await appWindow.locator('.app-bar .app-key[data-act="rotate"]').click();
    await page.evaluate(json=>window.nextvrApps(json),appSession('running'));
    await page.waitForFunction(()=>document.querySelector('.app-surface[data-native-app="org.example.notes"]').offsetWidth===1038);

    // Minimizing detaches the surface: the window leaves the arc, the session and its task stay.
    await page.evaluate(json=>window.nextvrApps(json),appSession('suspended'));
    await page.waitForFunction(()=>!document.querySelector('.app-surface[data-native-app="org.example.notes"]'));
    commands=await page.evaluate(()=>window.__appCommands||[]);
    assert.equal(commands.filter(c=>c.cmd==='close'&&c.pkg==='org.example.notes').length,0,
      'a minimized window is not closed on the native side');
    assert.equal(await page.locator('.win-shell').count(),windowsBefore,'the arc goes back to what it was');

    // Closing the window from its own bar is what tells the native side to release the display.
    await page.evaluate(json=>window.nextvrApps(json),appSession('running'));
    await page.waitForFunction(()=>!!document.querySelector('.app-surface[data-native-app="org.example.notes"]'));
    await appWindow.locator('[data-act="close"]').click();
    await page.waitForFunction(()=>!document.querySelector('.app-surface[data-native-app="org.example.notes"]'));
    commands=await page.evaluate(()=>window.__appCommands||[]);
    const closeCommand=commands.filter(c=>c.cmd==='close').pop();
    assert.equal(closeCommand?.pkg,'org.example.notes','closing the window releases the app display');

    // A failed session explains itself instead of freezing on the last frame. The reason names what
    // went wrong, and the window offers the one path that still works for that app.
    await page.evaluate(json=>window.nextvrApps(json),appSession('failed',{error:'display_empty'}));
    await page.waitForFunction(()=>!!document.querySelector('.app-surface[data-native-app="org.example.notes"]'));
    const failure=await page.locator('.app-state:not([hidden])').innerText();
    assert.match(failure,/n[ãa]o abriu|did not open|not drawing/i,`the failure names what happened: ${failure}`);
    const phoneButtons=await page.locator('.app-state:not([hidden]) .app-state-btn').count();
    assert.equal(phoneButtons,1,'the window offers opening the app on the phone, which needs no permission');
    await page.locator('.app-state:not([hidden]) .app-state-btn').click();
    commands=await page.evaluate(()=>window.__appCommands||[]);
    assert.equal(commands.filter(c=>c.cmd==='phone').pop()?.pkg,'org.example.notes',
      'and the button asks the native side for exactly that');
    await page.evaluate(json=>window.nextvrApps(json),appSession('stopped'));
    await page.waitForFunction(()=>!document.querySelector('.app-surface[data-native-app="org.example.notes"]'));
    await settle();

    // Dock summon via palm pinch was removed; the pinch remains a normal hand-ray gesture.
    await page.evaluate(()=>{window.__touches=[];});
    await page.evaluate(()=>{clearInterval(window.__feed);window.nextvrHands({hands:[]});window.nextvrSuspend();});
    assert.equal(await page.locator('.hand-menu-logo:not([hidden])').count(),0);
    assert.deepEqual(errors,[]);
  } finally { if(browser)await browser.close();await new Promise(resolve=>server.close(resolve)); }
});

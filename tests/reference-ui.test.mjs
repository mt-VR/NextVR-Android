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
    await page.addInitScript(()=>{
      window.__frames=[]; window.__touches=[];
      window.NativeXR={
        frame(scene,browsers){window.__last={panels:JSON.parse(scene),browsers:JSON.parse(browsers)};window.__frames.push(window.__last);if(window.__frames.length>10)window.__frames.shift();},
        battery(){return '{"level":0.72,"charging":false}';}, hands(){}, click(){}, key(){},
        touch(id,action,x,y){ window.__touches.push({id,action,x,y}); }
      };
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/`);
    await page.waitForFunction(()=>window.__last?.panels.length>=3);
    assert.deepEqual(errors,[]);
    const ids=await page.locator('.dock button').evaluateAll(nodes=>nodes.map(n=>n.dataset.id));
    assert.deepEqual(ids,['profile','status','bell','kb','center','browser','store','discord','gallery','settings','youtube','library']);
    assert.equal(await page.locator('.win-title').innerText(),'Next VR');
    await page.locator('.lang-option[data-lang="en"]').click();
    await page.waitForFunction(()=>!document.querySelector('.lang-option'));
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
    // Let the original bounded exponential open animation settle before comparing world transforms.
    await page.waitForTimeout(1200);
    const before=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay).map(p=>p.matrix));
    const pose=new THREE.Matrix4().makeRotationY(.5).toArray();
    await page.evaluate(p=>window.nextvrPose(p),pose);
    await page.waitForTimeout(300);
    const after=await page.evaluate(()=>window.__last.panels.filter(p=>!p.overlay).map(p=>p.matrix));
    assert.equal(before.length,after.length);
    for(let i=0;i<before.length;i++) for(let k=0;k<16;k++) assert.ok(Math.abs(before[i][k]-after[i][k])<.001,'Head movement must not move world-anchored surfaces');
    const dock=after[0];
    assert.ok(Math.abs(dock[13]-1.05)<.001 && Math.abs(dock[14]+1.42)<.001,'Prototype landscape dock position');
    // A button press aimed at the window centre must be routed as a native browser MotionEvent.
    const browserPanel=await page.evaluate(()=>window.__last.panels.find(p=>p.browser==='browser'));
    const target=new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(browserPanel.matrix));
    const view=new THREE.Matrix4().lookAt(new THREE.Vector3(0,1.55,0),target,new THREE.Vector3(0,1,0)).invert();
    await page.evaluate(p=>{window.nextvrPose(p);window.nextvrTrigger(true);window.nextvrTrigger(false);},view.toArray());
    const touches=await page.evaluate(()=>window.__touches);
    assert.ok(touches.some(t=>t.id==='browser' && t.action===0),'Gaze/button down reaches browser texture');
    assert.ok(touches.some(t=>t.id==='browser' && t.action===1),'Gaze/button up reaches browser texture');
    await page.locator('.win-shell').filter({has:page.locator('.win-title', {hasText:'Browser'})}).locator('[data-act="close"]').click();
    await page.waitForFunction(()=>!window.__last.browsers.some(b=>b.id==='browser'));
    assert.equal(await page.locator('.win-shell').count(),2);
    assert.deepEqual(errors,[]);
  } finally { if(browser)await browser.close();await new Promise(resolve=>server.close(resolve)); }
});

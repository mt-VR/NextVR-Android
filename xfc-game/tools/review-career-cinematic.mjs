import {launchChromium} from '../../tests/support/chromium.mjs';
import {startXfcServer} from '../serve.mjs';
import {mkdirSync} from 'node:fs';
import {join} from 'node:path';
const output=process.argv[2]||'/tmp/xfc-career-cinematic';mkdirSync(output,{recursive:true});
const {server,url}=await startXfcServer({port:0}),browser=await launchChromium(),page=await browser.newPage({viewport:{width:1280,height:720}}),errors=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&/WebGL|THREE|shader/.test(m.text()))errors.push(m.text());});
try{await page.goto(url);await page.evaluate(async()=>{const {createCareerCinematic}=await import('/src/match3d/career-cinematic.js');document.body.innerHTML='<canvas style="width:1280px;height:720px"></canvas>';document.body.style.margin='0';window.film=await createCareerCinematic(document.querySelector('canvas'),{id:'test',type:'transfer',clubId:'santos',season:2,player:{name:'Lucas Silva',number:10,appearance:{hairStyle:'lab-mid-fade',hairColor:'#24180f',skinTone:'#bd8868'}}});});
for(const [name,time]of [['arrival',5],['entrance',9],['representatives',11.5],['contract',14.5],['signature',19],['stand',23.5],['shirt',26],['photo',30],['club',33]]){console.log(name,await page.evaluate(t=>{for(let i=0;i<3;i++)window.film.setTime(t+i/60);const f=window.film;return{drawCalls:f.renderer.info.render.calls,triangles:f.renderer.info.render.triangles,hands:['leftHand','rightHand'].map(k=>f.hero.bones[k].getWorldPosition(f.pen.position.clone()).toArray())};},time));await page.screenshot({path:join(output,name+'.png')});}console.log('ERRORS',errors);await page.evaluate(()=>window.film.dispose());}finally{await browser.close();server.close();}

import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { TextDecoder } from 'node:util';

const roots=['web','tests','docs','nextvr-android/src/main','README.md','package.json','build.gradle','settings.gradle','gradle.properties'];
const binary=new Set(['.png','.jpg','.jpeg','.webp','.woff2','.wav','.task','.tflite','.zip','.so','.jar','.aar']);
const ignored=new Set(['build','node_modules','.gradle','.cxx']);
async function files(path,out=[]){
  const entries=await readdir(path,{withFileTypes:true}).catch(()=>null);
  if(!entries){out.push(path);return out;}
  for(const entry of entries){
    if(ignored.has(entry.name))continue;
    const child=join(path,entry.name);
    if(entry.isDirectory())await files(child,out);else out.push(child);
  }
  return out;
}

test('all UI/configuration sources are strict UTF-8 and contain no common mojibake',async()=>{
  const paths=[];for(const root of roots)await files(root,paths);
  const decoder=new TextDecoder('utf-8',{fatal:true});
  const broken=/Ã[\u0080-\u00bf]|Â[\u0080-\u00bf]|â(?:€|€™|€œ|€\u009d|€¦|€“|€”|„)/u;
  for(const path of paths){
    if(binary.has(extname(path).toLowerCase()))continue;
    const text=decoder.decode(await readFile(path));
    assert.doesNotMatch(text,broken,`mojibake in ${path}`);
  }
});

test('HTML, Android resources and WebView responses declare UTF-8 at every boundary',async()=>{
  const [html,surface,pt,en,gradle]=await Promise.all([
    readFile('web/index.html','utf8'),readFile('nextvr-android/src/main/java/com/nextvr/app/WebSurface.java','utf8'),
    readFile('nextvr-android/src/main/res/values-pt/strings.xml','utf8'),
    readFile('nextvr-android/src/main/res/values/strings.xml','utf8'),readFile('nextvr-android/build.gradle','utf8'),
  ]);
  assert.match(html,/<meta charset="UTF-8">/);
  assert.ok((surface.match(/new WebResourceResponse\([^\n]+"UTF-8"/g)||[]).length>=2);
  assert.match(pt,/encoding="utf-8"/);assert.match(en,/encoding="utf-8"/);
  assert.match(gradle,/options\.encoding = 'UTF-8'/);
  assert.match(await readFile('web/src/apps.js','utf8'),/faça uma pinça/);
});

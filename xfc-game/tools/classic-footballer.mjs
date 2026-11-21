// Perfil low poly clássico. Entrada: saída de rig-footballer.py (fonte CC0 fixada).
// Mantém rig, UVs, roupas, botas/meias e clipes; não extrai arquivos de PES.
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {dedup,prune,weld,simplify} from '@gltf-transform/functions';
import {MeshoptSimplifier} from 'meshoptimizer';
import {execFileSync} from 'node:child_process';
import {mkdtempSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const [input,output]=process.argv.slice(2);if(!input||!output)throw Error('node tools/classic-footballer.mjs rigged.glb footballer.glb');
await MeshoptSimplifier.ready;const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),doc=await io.read(input);
// Cabelo volumétrico é montado em classic-player.js. A malha short01 conserva
// o nó/skinning como âncora; raízes antigas e dentes invisíveis são dispensados.
for(const node of doc.getRoot().listNodes())if(/Hairline|teeth_base/.test(node.getName()))node.dispose();
for(const material of doc.getRoot().listMaterials()){material.setNormalTexture(null);material.setMetallicRoughnessTexture(null);if(/short01/.test(material.getName()))material.setBaseColorTexture(null);}
// Descarta apenas pele interna coberta pelos meiões; evita z-fighting quando
// ambas as superfícies são simplificadas. Meião curto usa o shader de pigmento.
for(const mesh of doc.getRoot().listMeshes())for(const prim of mesh.listPrimitives()){
 if(prim.getMaterial()?.getName()!=='Micah | anatomical body.body')continue;
 const p=prim.getAttribute('POSITION'),idx=prim.getIndices(),kept=[];
 for(let i=0;i<idx.getCount();i+=3){const tri=[idx.getScalar(i),idx.getScalar(i+1),idx.getScalar(i+2)];
  if(tri.every(v=>p.getElement(v,[])[1]<.515))continue;kept.push(...tri);
 }
 prim.setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(kept)).setBuffer(idx.getBuffer()));
}
await doc.transform(prune({keepAttributes:true}),dedup(),weld(),simplify({simplifier:MeshoptSimplifier,ratio:.10,error:.006}),prune({keepAttributes:true}));
const tmp=mkdtempSync(join(tmpdir(),'xfc-classic-'));
try{for(const [i,t] of doc.getRoot().listTextures().entries()){
 const type=t.getMimeType()==='image/png'?'png':'webp',file=join(tmp,i+'.'+type);writeFileSync(file,t.getImage());
 execFileSync('convert',[file,'-resize','256x256>','-strip',file]);t.setImage(new Uint8Array(readFileSync(file)));
}}finally{rmSync(tmp,{recursive:true,force:true});}
await io.write(output,doc);
let triangles=0;for(const m of doc.getRoot().listMeshes())for(const p of m.listPrimitives())triangles+=p.getIndices().getCount()/3;
console.log(JSON.stringify({triangles,bytes:readFileSync(output).length,textures:doc.getRoot().listTextures().map(t=>({name:t.getName(),size:t.getSize()}))},null,2));

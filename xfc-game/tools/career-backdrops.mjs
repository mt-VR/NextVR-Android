// Extensão das bordas das artes aprovadas; não redimensiona rostos/controles.
// ImageMagick é necessário só para regenerar estes derivados offline.
import {execFileSync} from 'node:child_process';
import {mkdtempSync,rmSync,mkdirSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const root=new URL('../assets/ui/season/',import.meta.url).pathname;
const temp=mkdtempSync(join(tmpdir(),'xfc-career-edges-'));mkdirSync(join(root,'backdrops'),{recursive:true});
try{for(const name of ['entry','agenda','hub','customise']){
 const source=join(root,name+'.png'),left=join(temp,'left.png'),right=join(temp,'right.png');
 execFileSync('convert',[source,'-crop','1x941+0+0','+repage','-resize','1672x941!',left]);
 execFileSync('convert',[source,'-gravity','East','-crop','1x941+0+0','+repage','-resize','1672x941!',right]);
 execFileSync('convert',[left,source,right,'+append','-quality','85',join(root,'backdrops',name+'.jpg')]);
}}finally{rmSync(temp,{recursive:true,force:true});}

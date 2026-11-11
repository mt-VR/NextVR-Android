// Preferências locais: só IDs do catálogo, nunca URLs arbitrárias do save.
import {ASSET_LIBRARY} from './asset-library-catalog.js';
import {LIBRARY_KITS} from './asset-library-kits.js';
export {ASSET_LIBRARY,LIBRARY_KITS};
const byId=new Map(ASSET_LIBRARY.map(a=>[a.id,a]));
let profile={};
export function bindAssetProfile(value){profile=value||{};}
export function libraryAsset(id){return byId.get(Number(id))||null;}
export function assetChoice(kind,key){return profile.assetOverrides?.[kind]?.[key];}
export function portraitFor(player){
  const id=player?.baseId||player?.rosterId||player?.id;
  const chosen=libraryAsset(assetChoice('faces',id));
  return chosen?.category==='faces'?chosen.file:player?.photo;
}
// Só marcas com correspondência reconhecível, não nomes inferidos de rostos.
export const LIBRARY_CRESTS={
  'fc-barcelona':395,'real-madrid':211,'aston-villa':5,brentford:27,
  'river-plate':421,'bayern-munich':510,botafogo:719,fluminense:718,
  cruzeiro:717,'vasco-da-gama':716,chelsea:26
};
export function crestFor(teamId,fallback){
  const choice=assetChoice('crests',teamId);
  if(choice==='original')return fallback;
  const asset=libraryAsset(choice??LIBRARY_CRESTS[teamId]);
  return asset?.category==='marks'?asset.file:fallback;
}
export function libraryKitFor(teamId){return LIBRARY_KITS.find(k=>k.id===Number(assetChoice('kits',teamId)))||null;}
export function libraryProfileIcon(){const a=libraryAsset(assetChoice('icons','profile')??1953);return a?.category==='icons'?a.file:null;}
export function setAssetChoice(targetProfile,kind,key,id){
  if(!['faces','crests','kits','icons'].includes(kind)||!key||['__proto__','constructor','prototype'].includes(key))return false;
  if(id!==null&&id!=='original'){
    const a=libraryAsset(id);
    if(kind==='kits'?!LIBRARY_KITS.some(k=>k.id===Number(id)):a?.category!==({crests:'marks',faces:'faces',icons:'icons'})[kind])return false;
  }
  const choices=targetProfile.assetOverrides||={};const group=choices[kind]||={};
  if(id===null)delete group[key];else group[key]=id;
  bindAssetProfile(targetProfile);return true;
}

#!/usr/bin/env python3
"""Bind an EXISTING CC0 footballer mesh. Does not generate body or clothing.
Input: pinned Innerscene/Micah optimized GLB (see CREDITS.md).
Usage: python3 tools/rig-footballer.py source.glb output.glb
Requires Python 3 and ImageMagick convert (neutral fabric textures only).
"""
import hashlib, json, math, struct, subprocess, sys, tempfile
from pathlib import Path

raw = Path(sys.argv[1]).read_bytes()
assert hashlib.sha256(raw).hexdigest() == '59ee4cbe96e07698c139d6ef9aa6e3965bac553cb9f826c7238bef953d958662', 'unexpected source'
n = struct.unpack_from('<I', raw, 12)[0]
g = json.loads(raw[20:20+n])
buf = bytearray(raw[28+n:])

def append_data(data):
    while len(buf) % 4: buf.append(0)
    idx = len(g['bufferViews'])
    g['bufferViews'].append({'buffer': 0, 'byteOffset': len(buf), 'byteLength': len(data)})
    buf.extend(data)
    return idx

def accessor(rows, kind='VEC4', component=5126):
    flat = [v for row in rows for v in row]
    fmt = 'f' if component == 5126 else 'H'
    view = append_data(struct.pack('<' + fmt * len(flat), *flat))
    a = {'bufferView': view, 'componentType': component, 'count': len(rows), 'type': kind}
    if kind in ('VEC3', 'SCALAR'):
        a['min'] = [min(r[i] for r in rows) for i in range(len(rows[0]))]
        a['max'] = [max(r[i] for r in rows) for i in range(len(rows[0]))]
    idx = len(g['accessors']); g['accessors'].append(a); return idx

def read_access(idx):
    a = g['accessors'][idx]; v = g['bufferViews'][a['bufferView']]
    assert a['componentType'] == 5126
    width = {'VEC3': 3, 'VEC2': 2, 'VEC4': 4}[a['type']]
    offset = v.get('byteOffset', 0) + a.get('byteOffset', 0)
    stride = v.get('byteStride', width * 4)
    return [struct.unpack_from('<'+'f'*width, buf, offset+i*stride) for i in range(a['count'])]

# Anatomical landmarks fitted to the downloaded standing pose, metres, +Z front.
landmarks = []
def bone(name, parent, xyz): landmarks.append((name, parent, xyz))
bone('Hips', None, (0,1.00,0))
bone('Spine','Hips',(0,1.13,0))
bone('Spine1','Spine',(0,1.27,0))
bone('Spine2','Spine1',(0,1.41,0))
bone('Neck','Spine2',(0,1.55,0))
bone('Head','Neck',(0,1.65,0))
for side, sign in [('Left',1),('Right',-1)]:
    bone(side+'Shoulder','Spine2',(sign*.12,1.47,0))
    bone(side+'Arm',side+'Shoulder',(sign*.235,1.435,0))
    bone(side+'ForeArm',side+'Arm',(sign*.32,1.245,.005))
    bone(side+'Hand',side+'ForeArm',(sign*.29,1.015,.045))
    bone(side+'UpLeg','Hips',(sign*.105,.99,0))
    bone(side+'Leg',side+'UpLeg',(sign*.14,.55,0))
    bone(side+'Foot',side+'Leg',(sign*.155,.13,.005))
    bone(side+'ToeBase',side+'Foot',(sign*.155,.05,.18))
lookup = {name:i for i,(name,_,_) in enumerate(landmarks)}
xyz = {name:p for name,_,p in landmarks}
node_start = len(g['nodes'])
for name,parent,p in landmarks:
    base = xyz[parent] if parent else (0,0,0)
    g['nodes'].append({'name':'mixamorig'+name, 'translation':[p[i]-base[i] for i in range(3)], 'children':[]})
    if parent: g['nodes'][node_start+lookup[parent]]['children'].append(node_start+lookup[name])
inverses = []
for _,_,p in landmarks:
    inverses.append([1,0,0,0, 0,1,0,0, 0,0,1,0, -p[0],-p[1],-p[2],1])
g['skins'] = [{'name':'Micah-XFC', 'joints':list(range(node_start,len(g['nodes']))),
               'skeleton':node_start, 'inverseBindMatrices':accessor(inverses,'MAT4')}]

def smooth(lo, hi, x):
    t = max(0,min(1,(x-lo)/(hi-lo))); return t*t*(3-2*t)

def blend(a,b,t): return {a:1-t,b:t}

def weights(p, name, is_hand=False):
    x,y,z = p; side = 'Left' if x >= 0 else 'Right'; ax=abs(x)
    if any(v in name for v in ('eyebrow','eyelash','Hairline','low-poly','short01','teeth')): return {'Head':1}
    if name == 'shoes06': return {side+'Foot':1}
    if is_hand: return {side+'Hand':1}
    if y < 1.035:
        if y < .24: return blend(side+'Foot',side+'Leg',smooth(.13,.24,y))
        if y < .65: return blend(side+'Leg',side+'UpLeg',smooth(.47,.63,y))
        return blend(side+'UpLeg','Hips',smooth(.88,1.035,y))
    # Shoulder/armpit boundary follows the existing shirt sleeve, not a cylinder.
    arm_weight = (1.0 if ax > .21 else 0.0) if y < 1.32 else smooth(.185,.26,ax) * (1-smooth(1.45,1.52,y))
    if y < 1.08: arm = {side+'Hand':1}
    elif y < 1.32: arm = blend(side+'Hand',side+'ForeArm',smooth(1.02,1.12,y)) if y < 1.16 else blend(side+'ForeArm',side+'Arm',smooth(1.19,1.31,y))
    else: arm = {side+'Arm':1}
    if y > 1.60: torso={'Head':1}
    elif y > 1.48: torso=blend('Neck','Head',smooth(1.56,1.64,y)) if y > 1.56 else blend('Spine2','Neck',smooth(1.48,1.56,y))
    elif y > 1.30: torso=blend('Spine1','Spine2',smooth(1.30,1.42,y))
    elif y > 1.13: torso=blend('Spine','Spine1',smooth(1.13,1.29,y))
    else: torso=blend('Hips','Spine',smooth(1.02,1.16,y))
    out={k:v*(1-arm_weight) for k,v in torso.items()}
    for k,v in arm.items():out[k]=out.get(k,0)+v*arm_weight
    return out

# Strip scene-only accessories. Keep the original anatomical/clothing geometry.
keep = []
for i in range(node_start):
    node=g['nodes'][i];name=node.get('name','')
    if i in [9,10,12]: continue # decorative ball, fixed number and boot-stud instances
    keep.append(i)
    scale=node.pop('scale',[1,1,1]);trans=node.pop('translation',[0,0,0])
    assert 'rotation' not in node
    for prim in g['meshes'][node['mesh']]['primitives']:
        attr=prim['attributes']
        positions=[[v[k]*scale[k]+trans[k] for k in range(3)] for v in read_access(attr['POSITION'])]
        attr['POSITION']=accessor(positions,'VEC3')
        # Separate hands from shorts/thighs by actual mesh connectivity below
        # the wrists. A coordinate threshold alone tears the fingertips or kit.
        hand_vertices=set()
        if name == 'Micah | anatomical body':
            a=g['accessors'][prim['indices']];v=g['bufferViews'][a['bufferView']]
            off=v.get('byteOffset',0)+a.get('byteOffset',0)
            fmt={5123:'H',5125:'I'}[a['componentType']]
            indices=struct.unpack_from('<'+fmt*a['count'],buf,off)
            parents=list(range(len(positions)))
            def find(i):
                while parents[i]!=i:
                    parents[i]=parents[parents[i]];i=parents[i]
                return i
            for k in range(0,len(indices),3):
                tri=indices[k:k+3]
                for aa,bb in [(tri[0],tri[1]),(tri[1],tri[2]),(tri[2],tri[0])]:
                    if positions[aa][1]<1.08 and positions[bb][1]<1.08: parents[find(aa)]=find(bb)
            groups={}
            for k,p in enumerate(positions):
                if p[1]<1.08:groups.setdefault(find(k),[]).append(k)
            for group in groups.values():
                mx=sum(positions[k][0] for k in group)/len(group)
                my=sum(positions[k][1] for k in group)/len(group)
                if abs(mx)>.22 and my>.79:hand_vertices.update(group)
        joints=[]; ws=[]
        for vertex,p in enumerate(positions):
            items=sorted(weights(p,name,vertex in hand_vertices).items(),key=lambda kv:-kv[1])[:4]
            total=sum(v for _,v in items)
            joints.append([lookup[k] for k,v in items]+[0]*(4-len(items)))
            ws.append([v/total for k,v in items]+[0]*(4-len(items)))
        attr['JOINTS_0']=accessor(joints,component=5123)
        attr['WEIGHTS_0']=accessor(ws)
    node['skin']=0
# Ensure no unused static props remain reachable.
g['scenes']=[{'name':'Footballer', 'nodes':keep+[node_start], 'extras':{'frontAxis':'+Z','rig':'xfc-micah-v1'}}];g['scene']=0

# Neutralise only the two fabric base-colour textures, preserving their weave.
# Skin, hair, eyes, socks, boots and all normal maps are untouched.
with tempfile.TemporaryDirectory() as tmp:
    for material in g['materials']:
        if material.get('name') not in ('Micah | top','Micah | bottom'): continue
        ti=material['pbrMetallicRoughness']['baseColorTexture']['index']
        tex=g['textures'][ti];image=g['images'][tex['extensions']['EXT_texture_webp']['source']]
        view=g['bufferViews'][image['bufferView']];off=view.get('byteOffset',0)
        inp=Path(tmp)/'fabric.webp';out=Path(tmp)/'fabric.png'
        inp.write_bytes(buf[off:off+view['byteLength']])
        subprocess.run(['convert',str(inp),'-colorspace','Gray','-evaluate','multiply','0.3','-evaluate','add','85%',str(out)],check=True)
        image['bufferView']=append_data(out.read_bytes());image['mimeType']='image/png'
        tex['source']=tex['extensions'].pop('EXT_texture_webp')['source']
        if not tex['extensions']: del tex['extensions']

# Native tracks authored for THIS bind pose; no Mixamo retarget or raw downloads.
g['animations']=[]
for clip,duration,amp in [('idle',3.0,0),('walk',1.0,.38),('run',.66,.72)]:
    frames=41;times=accessor([[duration*i/(frames-1)] for i in range(frames)],'SCALAR')
    tracks={name:[] for name,_,_ in landmarks}
    for f in range(frames):
        phase=2*math.pi*f/(frames-1);a={name:[0,0,0] for name in tracks}
        a['Spine'][0]=.035 if amp else .012*math.sin(phase)
        for side,offset in [('Left',0),('Right',math.pi)]:
            swing=math.sin(phase+offset)
            a[side+'UpLeg'][0]=-amp*swing
            a[side+'Leg'][0]=(.15+max(0,-swing)*1.0)*(amp/.72) if amp else .02
            a[side+'Foot'][0]=-.18*max(0,-swing)*(amp/.72) if amp else 0
            a[side+'Arm'][0]=amp*.68*swing
            a[side+'ForeArm'][0]=-.85*(amp/.72) if amp else -.07
        a['Spine2'][1]=.08*math.sin(phase)*(amp/.72)
        for name,(x,y,z) in a.items():
            # XYZ quaternion; z is zero in these loops.
            sx,cx=math.sin(x/2),math.cos(x/2);sy,cy=math.sin(y/2),math.cos(y/2)
            tracks[name].append([sx*cy,cx*sy,sx*sy,cx*cy])
    anim={'name':clip,'samplers':[],'channels':[]}
    for name,values in tracks.items():
        sampler=len(anim['samplers']);anim['samplers'].append({'input':times,'output':accessor(values),'interpolation':'LINEAR'})
        anim['channels'].append({'sampler':sampler,'target':{'node':node_start+lookup[name],'path':'rotation'}})
    g['animations'].append(anim)
g['asset']['extras']={'source':'Innerscene / MakeHuman CC0: Micah soccer player standing', 'license':'CC0-1.0','sourceSha256':hashlib.sha256(raw).hexdigest(),'adaptation':'XFC skeletal binding and locomotion tracks; original mesh and clothing'}
g['buffers']=[{'byteLength':len(buf)}]
js=json.dumps(g,separators=(',',':')).encode();js+=b' '*((-len(js))%4);buf+=b'\0'*((-len(buf))%4)
output=struct.pack('<III',0x46546c67,2,28+len(js)+len(buf))+struct.pack('<II',len(js),0x4e4f534a)+js+struct.pack('<II',len(buf),0x004e4942)+buf
Path(sys.argv[2]).write_bytes(output)
print(len(output),'bytes',hashlib.sha256(output).hexdigest())

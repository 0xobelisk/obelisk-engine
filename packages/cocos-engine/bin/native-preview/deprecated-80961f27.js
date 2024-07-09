System.register(['./find-7a03d1cc.js', './index-ce98320e.js', './device-90bc7390.js', './builtin-res-mgr.jsb-c9e8e53a.js'], (function (exports) {
    'use strict';
    var warnID, Vec2, Vec3, Vec4, Mat3, Mat4, Color, Quat, MathType, legacyCC, Enum, Sphere, assert, removeProperty, replaceProperty, Type, API, Material, Model, Layers, Camera, SpotLight, SubModel;
    return {
        setters: [function () {}, function (module) {
            warnID = module.d;
            Vec2 = module.V;
            Vec3 = module.n;
            Vec4 = module.p;
            Mat3 = module.M;
            Mat4 = module.s;
            Color = module.C;
            Quat = module.Q;
            MathType = module.co;
            legacyCC = module.l;
            Enum = module.aa;
            Sphere = module.bF;
            assert = module.b;
            removeProperty = module.ah;
            replaceProperty = module.ag;
        }, function (module) {
            Type = module.T;
            API = module.A;
        }, function (module) {
            Material = module.ap;
            Model = module.a;
            Layers = module.V;
            Camera = module.i;
            SpotLight = module.p;
            SubModel = module.S;
        }],
        execute: (function () {

            exports({
                g: getDeviceShaderVersion,
                k: getDefaultFromType,
                l: getStringFromType,
                o: overrideMacros
            });

            let RenderQueue; exports('R', RenderQueue);
            (function (RenderQueue) {
              RenderQueue[RenderQueue["OPAQUE"] = 0] = "OPAQUE";
              RenderQueue[RenderQueue["TRANSPARENT"] = 1] = "TRANSPARENT";
              RenderQueue[RenderQueue["OVERLAY"] = 2] = "OVERLAY";
            })(RenderQueue || (exports('R', RenderQueue = {})));
            let PassStage; exports('a', PassStage);
            (function (PassStage) {
              PassStage[PassStage["DEFAULT"] = 1] = "DEFAULT";
              PassStage[PassStage["FORWARD"] = 2] = "FORWARD";
              PassStage[PassStage["SHADOWCAST"] = 4] = "SHADOWCAST";
            })(PassStage || (exports('a', PassStage = {})));

            const typeMask = 0xfc000000;
            const bindingMask = 0x03f00000;
            const countMask = 0x000ff000;
            const offsetMask = 0x00000fff;
            const genHandle = exports('b', (binding, type, count, offset = 0) => type << 26 & typeMask | binding << 20 & bindingMask | count << 12 & countMask | offset & offsetMask);
            const getTypeFromHandle = exports('c', handle => (handle & typeMask) >>> 26);
            const getBindingFromHandle = exports('d', handle => (handle & bindingMask) >>> 20);
            const getCountFromHandle = exports('e', handle => (handle & countMask) >>> 12);
            const getOffsetFromHandle = exports('f', handle => handle & offsetMask);
            const customizeType = exports('h', (handle, type) => handle & ~typeMask | type << 26 & typeMask);
            const type2reader = exports('t', {
              [Type.UNKNOWN]: (a, v, idx = 0) => warnID(12010, idx),
              [Type.INT]: (a, v, idx = 0) => a[idx],
              [Type.INT2]: (a, v, idx = 0) => Vec2.fromArray(v, a, idx),
              [Type.INT3]: (a, v, idx = 0) => Vec3.fromArray(v, a, idx),
              [Type.INT4]: (a, v, idx = 0) => Vec4.fromArray(v, a, idx),
              [Type.FLOAT]: (a, v, idx = 0) => a[idx],
              [Type.FLOAT2]: (a, v, idx = 0) => Vec2.fromArray(v, a, idx),
              [Type.FLOAT3]: (a, v, idx = 0) => Vec3.fromArray(v, a, idx),
              [Type.FLOAT4]: (a, v, idx = 0) => Vec4.fromArray(v, a, idx),
              [Type.MAT3]: (a, v, idx = 0) => Mat3.fromArray(v, a, idx),
              [Type.MAT4]: (a, v, idx = 0) => Mat4.fromArray(v, a, idx)
            });
            const type2writer = exports('i', {
              [Type.UNKNOWN]: (a, v, idx = 0) => warnID(12010, idx),
              [Type.INT]: (a, v, idx = 0) => a[idx] = v,
              [Type.INT2]: (a, v, idx = 0) => Vec2.toArray(a, v, idx),
              [Type.INT3]: (a, v, idx = 0) => Vec3.toArray(a, v, idx),
              [Type.INT4]: (a, v, idx = 0) => Vec4.toArray(a, v, idx),
              [Type.FLOAT]: (a, v, idx = 0) => a[idx] = v,
              [Type.FLOAT2]: (a, v, idx = 0) => Vec2.toArray(a, v, idx),
              [Type.FLOAT3]: (a, v, idx = 0) => Vec3.toArray(a, v, idx),
              [Type.FLOAT4]: (a, v, idx = 0) => Vec4.toArray(a, v, idx),
              [Type.MAT3]: (a, v, idx = 0) => Mat3.toArray(a, v, idx),
              [Type.MAT4]: (a, v, idx = 0) => Mat4.toArray(a, v, idx)
            });
            const type2validator = exports('j', {
              [Type.INT]: v => typeof v === 'number',
              [Type.FLOAT]: v => typeof v === 'number',
              [Type.INT2]: v => !!(v instanceof Vec2),
              [Type.FLOAT2]: v => !!(v instanceof Vec2),
              [Type.INT3]: v => !!(v instanceof Vec3),
              [Type.FLOAT3]: v => !!(v instanceof Vec3),
              [Type.INT4]: v => !!(v instanceof Vec4),
              [Type.FLOAT4]: v => !!(v instanceof Vec4 || v instanceof Color || v instanceof Quat),
              [Type.MAT3]: v => !!(v instanceof Mat3),
              [Type.MAT4]: v => !!(v instanceof Mat4)
            });
            const defaultValues = [Object.freeze([0]), Object.freeze([0, 0]), Object.freeze([0, 0, 0, 0]), Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])];
            function getDefaultFromType(type) {
              switch (type) {
                case Type.BOOL:
                case Type.INT:
                case Type.UINT:
                case Type.FLOAT:
                  return defaultValues[0];
                case Type.BOOL2:
                case Type.INT2:
                case Type.UINT2:
                case Type.FLOAT2:
                  return defaultValues[1];
                case Type.BOOL4:
                case Type.INT4:
                case Type.UINT4:
                case Type.FLOAT4:
                  return defaultValues[2];
                case Type.MAT4:
                  return defaultValues[3];
                case Type.SAMPLER2D:
                  return 'default-texture';
                case Type.SAMPLER_CUBE:
                  return 'default-cube-texture';
                case Type.SAMPLER2D_ARRAY:
                  return 'default-array-texture';
                case Type.SAMPLER3D:
                  return 'default-3d-texture';
              }
              return defaultValues[0];
            }
            function getStringFromType(type) {
              switch (type) {
                case Type.SAMPLER2D:
                  return '-texture';
                case Type.SAMPLER_CUBE:
                  return '-cube-texture';
                case Type.SAMPLER2D_ARRAY:
                  return '-array-texture';
                case Type.SAMPLER3D:
                  return '-3d-texture';
                default:
                  return '-unknown';
              }
            }
            function overrideMacros(target, source) {
              const entries = Object.entries(source);
              let isDifferent = false;
              for (let i = 0; i < entries.length; i++) {
                if (target[entries[i][0]] !== entries[i][1]) {
                  target[entries[i][0]] = entries[i][1];
                  isDifferent = true;
                }
              }
              return isDifferent;
            }

            let BatchingSchemes; exports('B', BatchingSchemes);
            (function (BatchingSchemes) {
              BatchingSchemes[BatchingSchemes["NONE"] = 0] = "NONE";
              BatchingSchemes[BatchingSchemes["INSTANCING"] = 1] = "INSTANCING";
            })(BatchingSchemes || (exports('B', BatchingSchemes = {})));
            const Pass = exports('P', jsb.Pass);
            const proto = Pass.prototype;
            proto.getUniform = function getUniform(handle, out) {
              const val = this._getUniform(handle);
              if (typeof val === 'object') {
                if (val.type) {
                  switch (val.type) {
                    case MathType.VEC2:
                      Vec2.copy(out, val);
                      break;
                    case MathType.VEC3:
                      Vec3.copy(out, val);
                      break;
                    case MathType.VEC4:
                      Vec4.copy(out, val);
                      break;
                    case MathType.COLOR:
                      out.x = val.x;
                      out.y = val.y;
                      out.z = val.z;
                      out.w = val.w;
                      break;
                    case MathType.MAT3:
                      Mat3.copy(out, val);
                      break;
                    case MathType.MAT4:
                      Mat4.copy(out, val);
                      break;
                    case MathType.QUATERNION:
                      Quat.copy(out, val);
                      break;
                    default:
                      console.error(`getUniform, unknown object type: ${val.type}`);
                      break;
                  }
                } else {
                  console.error(`getUniform, unknown object: ${val}`);
                }
              } else if (typeof val === 'number') {
                out = val;
              } else {
                console.error(`getUniform, not supported: ${val}`);
              }
              return out;
            };

            function getDeviceShaderVersion(device) {
              switch (device.gfxAPI) {
                case API.GLES2:
                case API.WEBGL:
                  return 'glsl1';
                case API.GLES3:
                case API.WEBGL2:
                  return 'glsl3';
                default:
                  return 'glsl4';
              }
            }
            const programLib = exports('p', jsb.ProgramLib.getInstance());
            legacyCC.programLib = programLib;

            const NativeBufferPool = jsb.NativeBufferPool;
            jsb.NativeObjectPool;
            jsb.NativeBufferAllocator;

            const contains = (a, t) => {
              for (let i = 0; i < a.length; ++i) {
                if (a[i] === t) return true;
              }
              return false;
            };
            var BufferDataType;
            (function (BufferDataType) {
              BufferDataType[BufferDataType["UINT32"] = 0] = "UINT32";
              BufferDataType[BufferDataType["FLOAT32"] = 1] = "FLOAT32";
              BufferDataType[BufferDataType["NEVER"] = 2] = "NEVER";
            })(BufferDataType || (BufferDataType = {}));
            class BufferPool {
              constructor(poolType, dataType, dataMembers, enumType, entryBits = 8) {
                this._dataType = void 0;
                this._dataMembers = void 0;
                this._elementCount = void 0;
                this._entryBits = void 0;
                this._stride = void 0;
                this._entriesPerChunk = void 0;
                this._entryMask = void 0;
                this._chunkMask = void 0;
                this._poolFlag = void 0;
                this._arrayBuffers = [];
                this._freeLists = [];
                this._uint32BufferViews = [];
                this._float32BufferViews = [];
                this._hasUint32 = false;
                this._hasFloat32 = false;
                this._nativePool = void 0;
                this._elementCount = enumType.COUNT;
                this._entryBits = entryBits;
                this._dataType = dataType;
                this._dataMembers = dataMembers;
                const bytesPerElement = 4;
                this._stride = bytesPerElement * this._elementCount;
                this._entriesPerChunk = 1 << entryBits;
                this._entryMask = this._entriesPerChunk - 1;
                this._poolFlag = 1 << 30;
                this._chunkMask = ~(this._entryMask | this._poolFlag);
                this._nativePool = new NativeBufferPool(poolType, entryBits, this._stride);
                let type = BufferDataType.NEVER;
                let hasFloat32 = false;
                let hasUint32 = false;
                for (const e in dataType) {
                  hasFloat32 = this._hasFloat32;
                  hasUint32 = this._hasUint32;
                  if (hasUint32 && hasFloat32) {
                    break;
                  }
                  type = dataType[e];
                  if (!hasFloat32 && type === BufferDataType.FLOAT32) {
                    this._hasFloat32 = true;
                  } else if (!hasUint32 && type === BufferDataType.UINT32) {
                    this._hasUint32 = true;
                  }
                }
              }
              alloc() {
                let i = 0;
                for (; i < this._freeLists.length; i++) {
                  const list = this._freeLists[i];
                  if (list.length) {
                    const j = list[list.length - 1];
                    list.length--;
                    return (i << this._entryBits) + j + this._poolFlag;
                  }
                }
                const buffer = this._nativePool.allocateNewChunk();
                const float32BufferViews = [];
                const uint32BufferViews = [];
                const freeList = [];
                const hasFloat32 = this._hasFloat32;
                const hasUint32 = this._hasUint32;
                for (let j = 0; j < this._entriesPerChunk; j++) {
                  if (hasFloat32) {
                    float32BufferViews.push(new Float32Array(buffer, this._stride * j, this._elementCount));
                  }
                  if (hasUint32) {
                    uint32BufferViews.push(new Uint32Array(buffer, this._stride * j, this._elementCount));
                  }
                  if (j) {
                    freeList.push(j);
                  }
                }
                if (hasUint32) {
                  this._uint32BufferViews.push(uint32BufferViews);
                }
                if (hasFloat32) {
                  this._float32BufferViews.push(float32BufferViews);
                }
                this._freeLists.push(freeList);
                this._arrayBuffers.push(buffer);
                const handle = (i << this._entryBits) + this._poolFlag;
                return handle;
              }
              getBuffer(handle) {
                const chunk = (this._chunkMask & handle) >> this._entryBits;
                const entry = this._entryMask & handle;
                const bufferViews = this._hasFloat32 ? this._float32BufferViews : this._uint32BufferViews;
                if ((!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || contains(this._freeLists[chunk], entry))) {
                  console.warn('invalid buffer pool handle');
                  return [];
                }
                return bufferViews[chunk][entry];
              }
              getTypedArray(handle, element) {
                const chunk = (this._chunkMask & handle) >> this._entryBits;
                const entry = this._entryMask & handle;
                const bufferViews = this._dataType[element] === BufferDataType.UINT32 ? this._uint32BufferViews : this._float32BufferViews;
                if ((!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || contains(this._freeLists[chunk], entry))) {
                  console.warn('invalid buffer pool handle');
                  return [];
                }
                const index = element;
                const view = bufferViews[chunk][entry];
                const count = this._dataMembers[element];
                return view.subarray(index, index + count);
              }
              free(handle) {
                const chunk = (this._chunkMask & handle) >> this._entryBits;
                const entry = this._entryMask & handle;
                if ((!handle || chunk < 0 || chunk >= this._freeLists.length || entry < 0 || entry >= this._entriesPerChunk || contains(this._freeLists[chunk], entry))) {
                  console.warn('invalid buffer pool handle');
                  return;
                }
                const bufferViews = this._hasUint32 ? this._uint32BufferViews : this._float32BufferViews;
                bufferViews[chunk][entry].fill(0);
                this._freeLists[chunk].push(entry);
              }
            }
            let PoolType; exports('m', PoolType);
            (function (PoolType) {
              PoolType[PoolType["NODE"] = 0] = "NODE";
              PoolType[PoolType["PASS"] = 1] = "PASS";
              PoolType[PoolType["AABB"] = 2] = "AABB";
              PoolType[PoolType["RENDER2D"] = 3] = "RENDER2D";
            })(PoolType || (exports('m', PoolType = {})));
            const NULL_HANDLE = exports('N', 0);
            let Render2dView; exports('n', Render2dView);
            (function (Render2dView) {
              Render2dView[Render2dView["POSITION"] = 0] = "POSITION";
              Render2dView[Render2dView["UV"] = 3] = "UV";
              Render2dView[Render2dView["COLOR"] = 5] = "COLOR";
              Render2dView[Render2dView["COUNT"] = 9] = "COUNT";
            })(Render2dView || (exports('n', Render2dView = {})));
            const Render2dViewDataType = {
              [Render2dView.POSITION]: BufferDataType.FLOAT32,
              [Render2dView.UV]: BufferDataType.FLOAT32,
              [Render2dView.COLOR]: BufferDataType.UINT32,
              [Render2dView.COUNT]: BufferDataType.NEVER
            };
            const Render2dViewDataMembers = {
              [Render2dView.POSITION]: Render2dView.UV - Render2dView.POSITION,
              [Render2dView.UV]: Render2dView.COLOR - Render2dView.UV,
              [Render2dView.COLOR]: Render2dView.COUNT - Render2dView.COLOR,
              [Render2dView.COUNT]: 1
            };
            const Render2dPool = exports('q', new BufferPool(PoolType.RENDER2D, Render2dViewDataType, Render2dViewDataMembers, Render2dView));
            let NodeView; exports('r', NodeView);
            (function (NodeView) {
              NodeView[NodeView["DIRTY_FLAG"] = 0] = "DIRTY_FLAG";
              NodeView[NodeView["LAYER"] = 1] = "LAYER";
              NodeView[NodeView["WORLD_SCALE"] = 2] = "WORLD_SCALE";
              NodeView[NodeView["WORLD_POSITION"] = 5] = "WORLD_POSITION";
              NodeView[NodeView["WORLD_ROTATION"] = 8] = "WORLD_ROTATION";
              NodeView[NodeView["WORLD_MATRIX"] = 12] = "WORLD_MATRIX";
              NodeView[NodeView["LOCAL_SCALE"] = 28] = "LOCAL_SCALE";
              NodeView[NodeView["LOCAL_POSITION"] = 31] = "LOCAL_POSITION";
              NodeView[NodeView["LOCAL_ROTATION"] = 34] = "LOCAL_ROTATION";
              NodeView[NodeView["COUNT"] = 38] = "COUNT";
            })(NodeView || (exports('r', NodeView = {})));
            const NodeViewDataType = {
              [NodeView.DIRTY_FLAG]: BufferDataType.UINT32,
              [NodeView.LAYER]: BufferDataType.UINT32,
              [NodeView.WORLD_SCALE]: BufferDataType.FLOAT32,
              [NodeView.WORLD_POSITION]: BufferDataType.FLOAT32,
              [NodeView.WORLD_ROTATION]: BufferDataType.FLOAT32,
              [NodeView.WORLD_MATRIX]: BufferDataType.FLOAT32,
              [NodeView.LOCAL_SCALE]: BufferDataType.FLOAT32,
              [NodeView.LOCAL_POSITION]: BufferDataType.FLOAT32,
              [NodeView.LOCAL_ROTATION]: BufferDataType.FLOAT32,
              [NodeView.COUNT]: BufferDataType.NEVER
            };
            const NodeViewDataMembers = {
              [NodeView.DIRTY_FLAG]: NodeView.LAYER - NodeView.DIRTY_FLAG,
              [NodeView.LAYER]: NodeView.WORLD_SCALE - NodeView.LAYER,
              [NodeView.WORLD_SCALE]: NodeView.WORLD_POSITION - NodeView.WORLD_SCALE,
              [NodeView.WORLD_POSITION]: NodeView.WORLD_ROTATION - NodeView.WORLD_POSITION,
              [NodeView.WORLD_ROTATION]: NodeView.WORLD_MATRIX - NodeView.WORLD_ROTATION,
              [NodeView.WORLD_MATRIX]: NodeView.LOCAL_SCALE - NodeView.WORLD_MATRIX,
              [NodeView.LOCAL_SCALE]: NodeView.LOCAL_POSITION - NodeView.LOCAL_SCALE,
              [NodeView.LOCAL_POSITION]: NodeView.LOCAL_ROTATION - NodeView.LOCAL_POSITION,
              [NodeView.LOCAL_ROTATION]: NodeView.COUNT - NodeView.LOCAL_ROTATION,
              [NodeView.COUNT]: 1
            };
            const NodePool = exports('s', new BufferPool(PoolType.NODE, NodeViewDataType, NodeViewDataMembers, NodeView));
            let PassView; exports('u', PassView);
            (function (PassView) {
              PassView[PassView["PRIORITY"] = 0] = "PRIORITY";
              PassView[PassView["STAGE"] = 1] = "STAGE";
              PassView[PassView["PHASE"] = 2] = "PHASE";
              PassView[PassView["PRIMITIVE"] = 3] = "PRIMITIVE";
              PassView[PassView["BATCHING_SCHEME"] = 4] = "BATCHING_SCHEME";
              PassView[PassView["DYNAMIC_STATE"] = 5] = "DYNAMIC_STATE";
              PassView[PassView["HASH"] = 6] = "HASH";
              PassView[PassView["COUNT"] = 7] = "COUNT";
            })(PassView || (exports('u', PassView = {})));
            const PassViewDataType = {
              [PassView.PRIORITY]: BufferDataType.UINT32,
              [PassView.STAGE]: BufferDataType.UINT32,
              [PassView.PHASE]: BufferDataType.UINT32,
              [PassView.PRIMITIVE]: BufferDataType.UINT32,
              [PassView.BATCHING_SCHEME]: BufferDataType.UINT32,
              [PassView.DYNAMIC_STATE]: BufferDataType.UINT32,
              [PassView.HASH]: BufferDataType.UINT32,
              [PassView.COUNT]: BufferDataType.NEVER
            };
            const PassViewDataMembers = {
              [PassView.PRIORITY]: PassView.STAGE - PassView.PRIORITY,
              [PassView.STAGE]: PassView.PHASE - PassView.STAGE,
              [PassView.PHASE]: PassView.PRIMITIVE - PassView.PHASE,
              [PassView.PRIMITIVE]: PassView.BATCHING_SCHEME - PassView.PRIMITIVE,
              [PassView.BATCHING_SCHEME]: PassView.DYNAMIC_STATE - PassView.BATCHING_SCHEME,
              [PassView.DYNAMIC_STATE]: PassView.HASH - PassView.DYNAMIC_STATE,
              [PassView.HASH]: PassView.COUNT - PassView.HASH,
              [PassView.COUNT]: 1
            };
            const PassPool = exports('v', new BufferPool(PoolType.PASS, PassViewDataType, PassViewDataMembers, PassView));
            let AABBView; exports('A', AABBView);
            (function (AABBView) {
              AABBView[AABBView["CENTER"] = 0] = "CENTER";
              AABBView[AABBView["HALFEXTENTS"] = 3] = "HALFEXTENTS";
              AABBView[AABBView["COUNT"] = 6] = "COUNT";
            })(AABBView || (exports('A', AABBView = {})));
            const AABBViewDataType = {
              [AABBView.CENTER]: BufferDataType.FLOAT32,
              [AABBView.HALFEXTENTS]: BufferDataType.FLOAT32,
              [AABBView.COUNT]: BufferDataType.NEVER
            };
            const AABBViewDataMembers = {
              [AABBView.CENTER]: AABBView.HALFEXTENTS - AABBView.CENTER,
              [AABBView.HALFEXTENTS]: AABBView.COUNT - AABBView.HALFEXTENTS,
              [AABBView.COUNT]: 1
            };
            const AABBPool = exports('w', new BufferPool(PoolType.AABB, AABBViewDataType, AABBViewDataMembers, AABBView));

            const renderSceneProto = jsb.RenderScene.prototype;
            Object.defineProperty(renderSceneProto, 'mainLight', {
              enumerable: true,
              configurable: true,
              get() {
                return this.getMainLight();
              }
            });
            const RenderScene = exports('x', jsb.RenderScene);

            Enum({
              Low_256x256: 256,
              Medium_512x512: 512,
              High_1024x1024: 1024,
              Ultra_2048x2048: 2048
            });
            const ShadowType = exports('S', Enum({
              Planar: 0,
              ShadowMap: 1
            }));
            Enum({
              HARD: 0,
              SOFT: 1,
              SOFT_2X: 2,
              SOFT_4X: 3
            });
            const CSMLevel = exports('y', Enum({
              LEVEL_1: 1,
              LEVEL_2: 2,
              LEVEL_3: 3,
              LEVEL_4: 4
            }));
            Enum({
              NONE: 1,
              RemoveDuplicates: 2,
              DisableRotationFix: 3
            });
            const SHADOW_TYPE_NONE = ShadowType.ShadowMap + 1;
            class Shadows {
              constructor() {
                this.fixedSphere = new Sphere(0.0, 0.0, 0.0, 0.01);
                this.maxReceived = 4;
                this._matLight = new Mat4();
                this._material = null;
                this._instancingMaterial = null;
                this._enabled = false;
                this._type = SHADOW_TYPE_NONE;
                this._distance = 0;
                this._planeBias = 1.0;
                this._normal = new Vec3(0, 1, 0);
                this._shadowColor = new Color(0, 0, 0, 76);
                this._size = new Vec2(1024, 1024);
                this._shadowMapDirty = false;
              }
              get enabled() {
                return this._enabled;
              }
              set enabled(val) {
                this._enabled = val;
                this.activate();
              }
              get type() {
                return this._type;
              }
              set type(val) {
                this._type = this.enabled ? val : SHADOW_TYPE_NONE;
                this.activate();
              }
              get normal() {
                return this._normal;
              }
              set normal(val) {
                Vec3.copy(this._normal, val);
              }
              get distance() {
                return this._distance;
              }
              set distance(val) {
                this._distance = val;
              }
              get planeBias() {
                return this._planeBias;
              }
              set planeBias(val) {
                this._planeBias = val;
              }
              get shadowColor() {
                return this._shadowColor;
              }
              set shadowColor(color) {
                this._shadowColor = color;
              }
              get size() {
                return this._size;
              }
              set size(val) {
                this._size.set(val);
              }
              get shadowMapDirty() {
                return this._shadowMapDirty;
              }
              set shadowMapDirty(val) {
                this._shadowMapDirty = val;
              }
              get matLight() {
                return this._matLight;
              }
              get material() {
                return this._material;
              }
              get instancingMaterial() {
                return this._instancingMaterial;
              }
              getPlanarShader(patches) {
                if (!this._material) {
                  this._material = new Material();
                  this._material.initialize({
                    effectName: 'pipeline/planar-shadow'
                  });
                }
                const passes = this._material.passes;
                {
                  assert(passes.length > 0, 'passes should not be empty!');
                }
                return passes.length > 0 ? passes[0].getShaderVariant(patches) : null;
              }
              initialize(shadowsInfo) {
                this._enabled = shadowsInfo.enabled;
                this._type = this.enabled ? shadowsInfo.type : SHADOW_TYPE_NONE;
                this.normal = shadowsInfo.planeDirection;
                this.distance = shadowsInfo.planeHeight;
                this.planeBias = shadowsInfo.planeBias;
                this.shadowColor = shadowsInfo.shadowColor;
                this.maxReceived = shadowsInfo.maxReceived;
                if (shadowsInfo.shadowMapSize !== this._size.x) {
                  this.size.set(shadowsInfo.shadowMapSize, shadowsInfo.shadowMapSize);
                  this._shadowMapDirty = true;
                }
              }
              activate() {
                if (this._enabled) {
                  if (this.type === ShadowType.Planar) {
                    this._updatePlanarInfo();
                  } else {
                    const root = legacyCC.director.root;
                    const pipeline = root.pipeline;
                    pipeline.macros.CC_SHADOW_TYPE = 2;
                    root.onGlobalPipelineStateChanged();
                  }
                } else {
                  const root = legacyCC.director.root;
                  const pipeline = root.pipeline;
                  pipeline.macros.CC_SHADOW_TYPE = 0;
                  root.onGlobalPipelineStateChanged();
                }
              }
              _updatePlanarInfo() {
                if (!this._material) {
                  this._material = new Material();
                  this._material.initialize({
                    effectName: 'pipeline/planar-shadow'
                  });
                }
                const root = legacyCC.director.root;
                const pipeline = root.pipeline;
                pipeline.macros.CC_SHADOW_TYPE = 1;
                root.onGlobalPipelineStateChanged();
              }
              destroy() {
                if (this._material) {
                  this._material.destroy();
                }
                if (this._instancingMaterial) {
                  this._instancingMaterial.destroy();
                }
                this.fixedSphere.destroy();
              }
            }
            Shadows.MAX_FAR = 2000.0;
            Shadows.COEFFICIENT_OF_EXPANSION = 2.0 * Math.sqrt(3.0);
            legacyCC.Shadows = Shadows;

            removeProperty(RenderScene.prototype, 'RenderScene.prototype', [{
              name: 'raycastUI2DNode'
            }, {
              name: 'raycastUINode'
            }]);
            removeProperty(RenderScene.prototype, 'RenderScene.prototype', [{
              name: 'raycastAll',
              suggest: 'using intersect.rayModel in geometry'
            }, {
              name: 'raycastAllModels',
              suggest: 'using intersect.rayModel in geometry'
            }, {
              name: 'raycastSingleModel',
              suggest: 'using intersect.rayModel in geometry'
            }, {
              name: 'raycastAllCanvas',
              suggest: 'using intersect.rayAABB in geometry'
            }, {
              name: 'rayResultCanvas'
            }, {
              name: 'rayResultModels'
            }, {
              name: 'rayResultAll'
            }, {
              name: 'rayResultSingleModel'
            }]);
            removeProperty(Model.prototype, 'Model.prototype', [{
              name: 'isInstancingEnabled'
            }, {
              name: 'instancedAttributes'
            }]);
            const CameraVisFlags = exports('C', {});
            removeProperty(CameraVisFlags, 'CameraVisFlags', [{
              name: 'GENERAL'
            }]);
            replaceProperty(CameraVisFlags, 'CameraVisFlags', [{
              name: 'PROFILER',
              newName: 'PROFILER',
              target: Layers.BitMask,
              targetName: 'PROFILER'
            }, {
              name: 'GIZMOS',
              newName: 'GIZMOS',
              target: Layers.BitMask,
              targetName: 'GIZMOS'
            }, {
              name: 'EDITOR',
              newName: 'EDITOR',
              target: Layers.BitMask,
              targetName: 'EDITOR'
            }, {
              name: 'UI',
              newName: 'UI',
              target: Layers.BitMask,
              targetName: 'UI_3D'
            }, {
              name: 'UI2D',
              newName: 'UI2D',
              target: Layers.BitMask,
              targetName: 'UI_2D'
            }]);
            legacyCC.CameraVisFlags = CameraVisFlags;
            const VisibilityFlags = exports('V', {});
            removeProperty(VisibilityFlags, 'VisibilityFlags', [{
              name: 'GENERAL'
            }]);
            replaceProperty(VisibilityFlags, 'VisibilityFlags', [{
              name: 'ALWALS',
              newName: 'ALWALS',
              target: Layers.Enum,
              targetName: 'ALWALS'
            }, {
              name: 'PROFILER',
              newName: 'PROFILER',
              target: Layers.Enum,
              targetName: 'PROFILER'
            }, {
              name: 'GIZMOS',
              newName: 'GIZMOS',
              target: Layers.Enum,
              targetName: 'GIZMOS'
            }, {
              name: 'EDITOR',
              newName: 'EDITOR',
              target: Layers.Enum,
              targetName: 'EDITOR'
            }, {
              name: 'UI',
              newName: 'UI',
              target: Layers.Enum,
              targetName: 'UI_3D'
            }, {
              name: 'UI2D',
              newName: 'UI2D',
              target: Layers.Enum,
              targetName: 'UI_2D'
            }]);
            legacyCC.VisibilityFlags = VisibilityFlags;
            replaceProperty(Pass.prototype, 'Pass.prototype', [{
              name: 'getBindingTypeFromHandle',
              newName: 'getDescriptorTypeFromHandle'
            }]);
            removeProperty(Camera.prototype, 'Camera.prototype', [{
              name: 'getSplitFrustum'
            }, {
              name: 'setMatView'
            }, {
              name: 'setMatViewInv'
            }, {
              name: 'setMatProjInv'
            }, {
              name: 'setMatViewProjInv'
            }, {
              name: 'setMatProj'
            }, {
              name: 'setMatViewProj'
            }, {
              name: 'getMatViewInv'
            }]);
            removeProperty(Shadows.prototype, 'Shadows.prototype', [{
              name: 'aspect'
            }, {
              name: 'selfShadow'
            }, {
              name: 'linear'
            }, {
              name: 'packing'
            }, {
              name: 'autoAdapt'
            }, {
              name: 'fixedArea'
            }, {
              name: 'pcf'
            }, {
              name: 'bias'
            }, {
              name: 'normalBias'
            }, {
              name: 'near'
            }, {
              name: 'far'
            }, {
              name: 'shadowDistance'
            }, {
              name: 'invisibleOcclusionRange'
            }, {
              name: 'orthoSize'
            }, {
              name: 'saturation'
            }]);
            removeProperty(SpotLight.prototype, 'SpotLight.prototype', [{
              name: 'aspect'
            }]);
            replaceProperty(SubModel.prototype, 'SubModel.prototype', [{
              name: 'subMeshData',
              newName: 'subMesh'
            }]);
            removeProperty(SubModel.prototype, 'SubModel.prototype', [{
              name: 'getSubModel',
              suggest: 'Use `subModels[i]` instead'
            }, {
              name: 'subModelNum',
              suggest: 'Use `subModels.length` instead'
            }]);

        })
    };
}));

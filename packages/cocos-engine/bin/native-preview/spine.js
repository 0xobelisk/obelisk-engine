System.register(['./index-ce98320e.js', './node-event-18d96a1b.js', './rendering-sub-mesh.jsb-25043997.js', './builtin-res-mgr.jsb-c9e8e53a.js', './scene-asset.jsb-0d4c6201.js', './find-7a03d1cc.js', './sprite-renderer-9a6a919d.js', './impl-9c038f77.js', './deprecated-f8df8d32.js', './director-dc238483.js', './index-e789d6e6.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './deprecated-cd3500e0.js', './deprecated-fcfb90f6.js', './device-90bc7390.js', './decorators-b63b63a2.js', './touch-af62e326.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './murmurhash2_gc-2108d723.js', './camera-component-b329f870.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './model-renderer-f8d2f66d.js', './sprite-5c924512.js', './cached-array-9b18d763.js'], (function (exports) {
    'use strict';
    var warn, ccclass, type, applyDecoratedInitializer, legacyCC, CCString, error, Enum, serializable, System, Mat4, ccenum, setClassAlias, override, logID, Color, setPropertyEnumType, CCObject, Vec3, Asset, _applyDecoratedDescriptor, NodeEventType, Texture2D, Node, Material, builtinResMgr, getAttributeStride, vfmtPosUvColor4B, vfmtPosUvTwoColor4B, UIRenderer, RenderEntity, RenderEntityType, StaticVBAccessor, RenderData, director, MaterialInstance, Graphics, RecyclePool, BlendOp, BlendFactor;
    return {
        setters: [function (module) {
            warn = module.w;
            ccclass = module.by;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            legacyCC = module.l;
            CCString = module.aw;
            error = module.e;
            Enum = module.aa;
            serializable = module.bf;
            System = module.a$;
            Mat4 = module.s;
            ccenum = module.ab;
            setClassAlias = module.cj;
            override = module.bd;
            logID = module.c;
            Color = module.C;
            setPropertyEnumType = module.bh;
            CCObject = module.as;
            Vec3 = module.n;
        }, function (module) {
            Asset = module.A;
            _applyDecoratedDescriptor = module.H;
            NodeEventType = module.N;
        }, function () {}, function (module) {
            Texture2D = module.am;
            Node = module.Q;
            Material = module.ap;
            builtinResMgr = module.at;
        }, function () {}, function () {}, function (module) {
            getAttributeStride = module.j;
            vfmtPosUvColor4B = module.w;
            vfmtPosUvTwoColor4B = module.x;
            UIRenderer = module.b;
            RenderEntity = module.q;
            RenderEntityType = module.r;
            StaticVBAccessor = module.k;
            RenderData = module.e;
        }, function () {}, function () {}, function (module) {
            director = module.n;
        }, function () {}, function () {}, function (module) {
            MaterialInstance = module.M;
        }, function (module) {
            Graphics = module.G;
        }, function (module) {
            RecyclePool = module.R;
        }, function (module) {
            BlendOp = module.o;
            BlendFactor = module.n;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var spine$1;
            (function (spine) {
              (function (MixBlend) {
                MixBlend[MixBlend["setup"] = 0] = "setup";
                MixBlend[MixBlend["first"] = 1] = "first";
                MixBlend[MixBlend["replace"] = 2] = "replace";
                MixBlend[MixBlend["add"] = 3] = "add";
              })(spine.MixBlend || (spine.MixBlend = {}));
              (function (MixDirection) {
                MixDirection[MixDirection["mixIn"] = 0] = "mixIn";
                MixDirection[MixDirection["mixOut"] = 1] = "mixOut";
              })(spine.MixDirection || (spine.MixDirection = {}));
              (function (TimelineType) {
                TimelineType[TimelineType["rotate"] = 0] = "rotate";
                TimelineType[TimelineType["translate"] = 1] = "translate";
                TimelineType[TimelineType["scale"] = 2] = "scale";
                TimelineType[TimelineType["shear"] = 3] = "shear";
                TimelineType[TimelineType["attachment"] = 4] = "attachment";
                TimelineType[TimelineType["color"] = 5] = "color";
                TimelineType[TimelineType["deform"] = 6] = "deform";
                TimelineType[TimelineType["event"] = 7] = "event";
                TimelineType[TimelineType["drawOrder"] = 8] = "drawOrder";
                TimelineType[TimelineType["ikConstraint"] = 9] = "ikConstraint";
                TimelineType[TimelineType["transformConstraint"] = 10] = "transformConstraint";
                TimelineType[TimelineType["pathConstraintPosition"] = 11] = "pathConstraintPosition";
                TimelineType[TimelineType["pathConstraintSpacing"] = 12] = "pathConstraintSpacing";
                TimelineType[TimelineType["pathConstraintMix"] = 13] = "pathConstraintMix";
                TimelineType[TimelineType["twoColor"] = 14] = "twoColor";
              })(spine.TimelineType || (spine.TimelineType = {}));
              (function (EventType) {
                EventType[EventType["start"] = 0] = "start";
                EventType[EventType["interrupt"] = 1] = "interrupt";
                EventType[EventType["end"] = 2] = "end";
                EventType[EventType["dispose"] = 3] = "dispose";
                EventType[EventType["complete"] = 4] = "complete";
                EventType[EventType["event"] = 5] = "event";
              })(spine.EventType || (spine.EventType = {}));
              (function (BlendMode) {
                BlendMode[BlendMode["Normal"] = 0] = "Normal";
                BlendMode[BlendMode["Additive"] = 1] = "Additive";
                BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
                BlendMode[BlendMode["Screen"] = 3] = "Screen";
              })(spine.BlendMode || (spine.BlendMode = {}));
              (function (TransformMode) {
                TransformMode[TransformMode["Normal"] = 0] = "Normal";
                TransformMode[TransformMode["OnlyTranslation"] = 1] = "OnlyTranslation";
                TransformMode[TransformMode["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
                TransformMode[TransformMode["NoScale"] = 3] = "NoScale";
                TransformMode[TransformMode["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
              })(spine.TransformMode || (spine.TransformMode = {}));
              (function (PositionMode) {
                PositionMode[PositionMode["Fixed"] = 0] = "Fixed";
                PositionMode[PositionMode["Percent"] = 1] = "Percent";
              })(spine.PositionMode || (spine.PositionMode = {}));
              (function (SpacingMode) {
                SpacingMode[SpacingMode["Length"] = 0] = "Length";
                SpacingMode[SpacingMode["Fixed"] = 1] = "Fixed";
                SpacingMode[SpacingMode["Percent"] = 2] = "Percent";
              })(spine.SpacingMode || (spine.SpacingMode = {}));
              (function (RotateMode) {
                RotateMode[RotateMode["Tangent"] = 0] = "Tangent";
                RotateMode[RotateMode["Chain"] = 1] = "Chain";
                RotateMode[RotateMode["ChainScale"] = 2] = "ChainScale";
              })(spine.RotateMode || (spine.RotateMode = {}));
              (function (TextureFilter) {
                TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
                TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
                TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
                TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
                TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
                TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
                TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear";
              })(spine.TextureFilter || (spine.TextureFilter = {}));
              (function (TextureWrap) {
                TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
                TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
                TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat";
              })(spine.TextureWrap || (spine.TextureWrap = {}));
              (function (AttachmentType) {
                AttachmentType[AttachmentType["Region"] = 0] = "Region";
                AttachmentType[AttachmentType["BoundingBox"] = 1] = "BoundingBox";
                AttachmentType[AttachmentType["Mesh"] = 2] = "Mesh";
                AttachmentType[AttachmentType["LinkedMesh"] = 3] = "LinkedMesh";
                AttachmentType[AttachmentType["Path"] = 4] = "Path";
                AttachmentType[AttachmentType["Point"] = 5] = "Point";
                AttachmentType[AttachmentType["Clipping"] = 6] = "Clipping";
              })(spine.AttachmentType || (spine.AttachmentType = {}));
            })(spine$1 || (spine$1 = {}));
            var spineLib = spine$1;

            let _listener_ID = 0;
            let _track_ID = 0;
            class TrackEntryListeners {
              constructor() {
                this.start = void 0;
                this.interrupt = void 0;
                this.end = void 0;
                this.dispose = void 0;
                this.complete = void 0;
                this.event = void 0;
              }
              static getListeners(entry, instance) {
                if (!entry.listener) {
                  entry.listener = new TrackEntryListeners();
                  const id = ++_track_ID;
                  instance.setTrackEntryListener(id, entry);
                  TrackEntryListeners._trackSet.set(id, entry);
                }
                return entry.listener;
              }
              static emitListener(id, entry, event) {
                const listener = TrackEntryListeners._listenerSet.get(id);
                if (!listener) return;
                const listener2 = listener;
                if (listener2) {
                  listener2(entry, event);
                }
              }
              static emitTrackEntryListener(id, entry, event, eventType) {
                const curTrack = this._trackSet.get(id);
                if (!curTrack) return;
                switch (eventType) {
                  case spineLib.EventType.start:
                    if (curTrack.listener.start) {
                      curTrack.listener.start(entry);
                    }
                    break;
                  case spineLib.EventType.interrupt:
                    if (curTrack.listener.interrupt) {
                      curTrack.listener.interrupt(entry);
                    }
                    break;
                  case spineLib.EventType.end:
                    if (curTrack.listener.end) {
                      curTrack.listener.end(entry);
                    }
                    break;
                  case spineLib.EventType.dispose:
                    if (curTrack.listener.dispose) {
                      curTrack.listener.dispose(entry);
                    }
                    this._trackSet.delete(id);
                    curTrack.listener = null;
                    break;
                  case spineLib.EventType.complete:
                    if (curTrack.listener.complete) {
                      curTrack.listener.complete(entry);
                    }
                    break;
                  case spineLib.EventType.event:
                    if (curTrack.listener.event) {
                      curTrack.listener.event(entry, event);
                    }
                    break;
                  default:
                    warn('TrackEntry doesn\'t handled', eventType);
                    break;
                }
              }
              static addListener(listener) {
                const id = ++_listener_ID;
                TrackEntryListeners._listenerSet.set(id, listener);
                return id;
              }
            }
            TrackEntryListeners._listenerSet = new Map();
            TrackEntryListeners._trackSet = new Map();
            globalThis.TrackEntryListeners = TrackEntryListeners;

            var _class5$1;
            const MaxCacheTime = 30;
            const FrameTime = 1 / 60;
            const _useTint$1 = true;
            getAttributeStride(vfmtPosUvColor4B);
            const _byteStrideTwoColor$1 = getAttributeStride(vfmtPosUvTwoColor4B);
            class FrameBoneInfo {
              constructor() {
                this.a = 0;
                this.b = 0;
                this.c = 0;
                this.d = 0;
                this.worldX = 0;
                this.worldY = 0;
              }
            }
            class SpineModel {
              constructor() {
                this.vCount = 0;
                this.iCount = 0;
                this.vData = null;
                this.iData = null;
                this.meshes = [];
              }
            }
            class SpineDrawItem {
              constructor() {
                this.iCount = 0;
                this.blendMode = 0;
                this.textureID = 0;
              }
            }
            class AnimationCache {
              constructor(data) {
                this._instance = null;
                this._state = null;
                this._skeletonData = null;
                this._skeleton = null;
                this._privateMode = false;
                this._curIndex = -1;
                this._isCompleted = false;
                this._maxFrameIdex = 0;
                this._frameIdx = -1;
                this._inited = false;
                this._invalid = true;
                this._enableCacheAttachedInfo = false;
                this._skeletonInfo = null;
                this._animationName = null;
                this.isCompleted = false;
                this.totalTime = 0;
                this.frames = [];
                this._privateMode = false;
                this._inited = false;
                this._invalid = true;
                this._instance = new spineLib.SkeletonInstance();
                this._instance.isCache = true;
                this._skeletonData = data;
                this._skeleton = this._instance.initSkeleton(data);
                this._instance.setUseTint(_useTint$1);
              }
              init(skeletonInfo, animationName) {
                this._inited = true;
                this._animationName = animationName;
                this._skeletonInfo = skeletonInfo;
              }
              get skeleton() {
                return this._skeleton;
              }
              setSkin(skinName) {
                if (this._skeleton) this._skeleton.setSkinByName(skinName);
                this._instance.setSkin(skinName);
              }
              setAnimation(animationName) {
                const animations = this._skeletonData.animations;
                let animation = null;
                animations.forEach(element => {
                  if (element.name === animationName) {
                    animation = element;
                  }
                });
                if (!animation) {
                  warn(`find no animation named ${animationName} !!!`);
                  return;
                }
                this._maxFrameIdex = Math.floor(animation.duration / FrameTime);
                if (this._maxFrameIdex <= 0) this._maxFrameIdex = 1;
                this._instance.setAnimation(0, animationName, false);
              }
              updateToFrame(frameIdx) {
                if (!this._inited) return;
                this.begin();
                if (!this.needToUpdate(frameIdx)) return;
                do {
                  this._frameIdx++;
                  this.totalTime += FrameTime;
                  this._instance.updateAnimation(FrameTime);
                  const model = this._instance.updateRenderData();
                  this.updateRenderData(this._frameIdx, model);
                  if (this._frameIdx >= this._maxFrameIdex) {
                    this.isCompleted = true;
                  }
                } while (this.needToUpdate(frameIdx));
              }
              getFrame(frameIdx) {
                const index = frameIdx % this._maxFrameIdex;
                return this.frames[index];
              }
              invalidAnimationFrames() {
                this._curIndex = -1;
                this._isCompleted = false;
                this.frames.length = 0;
              }
              updateRenderData(index, model) {
                const vc = model.vCount;
                const ic = model.iCount;
                const floatStride = (_byteStrideTwoColor$1 ) / Float32Array.BYTES_PER_ELEMENT;
                const vUint8Buf = new Uint8Array(Float32Array.BYTES_PER_ELEMENT * floatStride * vc);
                const iUint16Buf = new Uint16Array(ic);
                const HEAPU8 = spineLib.wasmUtil.wasm.HEAPU8;
                const vPtr = model.vPtr;
                const vLength = vc * Float32Array.BYTES_PER_ELEMENT * floatStride;
                vUint8Buf.set(HEAPU8.subarray(vPtr, vPtr + vLength));
                const iPtr = model.iPtr;
                const iLength = Uint16Array.BYTES_PER_ELEMENT * ic;
                const iUint8Buf = new Uint8Array(iUint16Buf.buffer);
                iUint8Buf.set(HEAPU8.subarray(iPtr, iPtr + iLength));
                const modelData = new SpineModel();
                modelData.vCount = vc;
                modelData.iCount = ic;
                modelData.vData = vUint8Buf;
                modelData.iData = iUint16Buf;
                const data = model.getData();
                const count = data.size();
                for (let i = 0; i < count; i += 6) {
                  const meshData = new SpineDrawItem();
                  meshData.iCount = data.get(i + 3);
                  meshData.blendMode = data.get(i + 4);
                  meshData.textureID = data.get(i + 5);
                  modelData.meshes.push(meshData);
                }
                const bones = this._skeleton.bones;
                const boneInfosArray = [];
                bones.forEach(bone => {
                  const boneInfo = new FrameBoneInfo();
                  boneInfo.a = bone.a;
                  boneInfo.b = bone.b;
                  boneInfo.c = bone.c;
                  boneInfo.d = bone.d;
                  boneInfo.worldX = bone.worldX;
                  boneInfo.worldY = bone.worldY;
                  boneInfosArray.push(boneInfo);
                });
                this.frames[index] = {
                  model: modelData,
                  boneInfos: boneInfosArray
                };
              }
              begin() {
                if (!this._invalid) return;
                const skeletonInfo = this._skeletonInfo;
                const preAnimationCache = skeletonInfo === null || skeletonInfo === void 0 ? void 0 : skeletonInfo.curAnimationCache;
                if (preAnimationCache && preAnimationCache !== this) {
                  if (this._privateMode) {
                    preAnimationCache.invalidAllFrame();
                  } else {
                    preAnimationCache.updateToFrame(0);
                  }
                }
                const listener = skeletonInfo === null || skeletonInfo === void 0 ? void 0 : skeletonInfo.listener;
                this._instance.setAnimation(0, this._animationName, false);
                this.bind(listener);
                skeletonInfo.curAnimationCache = this;
                this._frameIdx = -1;
                this.isCompleted = false;
                this.totalTime = 0;
                this._invalid = false;
              }
              end() {
                if (!this.needToUpdate()) {
                  this._skeletonInfo.curAnimationCache = null;
                  this.frames.length = this._frameIdx + 1;
                  this.isCompleted = true;
                  this.unbind(this._skeletonInfo.listener);
                }
              }
              bind(listener) {
                const completeHandle = entry => {
                  if (entry && entry.animation.name === this._animationName) {
                    this.isCompleted = true;
                  }
                };
                listener.complete = completeHandle;
              }
              unbind(listener) {
                listener.complete = null;
              }
              needToUpdate(toFrameIdx) {
                return !this.isCompleted && this.totalTime < MaxCacheTime && (toFrameIdx === undefined || this._frameIdx < toFrameIdx);
              }
              isInited() {
                return this._inited;
              }
              isInvalid() {
                return this._invalid;
              }
              invalidAllFrame() {
                this.isCompleted = false;
                this._invalid = true;
              }
              enableCacheAttachedInfo() {
                if (!this._enableCacheAttachedInfo) {
                  this._enableCacheAttachedInfo = true;
                  this.invalidAllFrame();
                }
              }
              clear() {
                this._inited = false;
                this.invalidAllFrame();
              }
              destroy() {
                if (this._instance) {
                  this._instance.destroy();
                  this._instance = null;
                }
              }
            }
            class SkeletonCache {
              constructor() {
                this._privateMode = void 0;
                this._skeletonCache = void 0;
                this._animationPool = void 0;
                this._sharedCacheMap = new Map();
                this._privateMode = false;
                this._animationPool = {};
                this._skeletonCache = {};
              }
              enablePrivateMode() {
                this._privateMode = true;
              }
              clear() {
                this._animationPool = {};
                this._skeletonCache = {};
              }
              invalidAnimationCache(uuid) {
                const skeletonInfo = this._skeletonCache[uuid];
                const skeleton = skeletonInfo && skeletonInfo.skeleton;
                if (!skeleton) return;
                const animationsCache = skeletonInfo.animationsCache;
                for (const aniKey in animationsCache) {
                  const animationCache = animationsCache[aniKey];
                  animationCache.invalidAllFrame();
                }
              }
              destroySkeleton(assetUuid) {
                if (!this._privateMode) {
                  let refCount = this._sharedCacheMap.get(assetUuid);
                  if (refCount) {
                    refCount -= 1;
                    if (refCount > 0) {
                      this._sharedCacheMap.set(assetUuid, refCount);
                      return;
                    }
                    this._sharedCacheMap.delete(assetUuid);
                  }
                }
                const sharedOperate = (aniKey, animationCache) => {
                  this._animationPool[`${assetUuid}#${aniKey}`] = animationCache;
                  animationCache.clear();
                };
                const privateOperate = (aniKey, animationCache) => {
                  animationCache.destroy();
                };
                const operate = this._privateMode ? privateOperate : sharedOperate;
                const skeletonInfo = this._skeletonCache[assetUuid];
                if (!skeletonInfo) return;
                const animationsCache = skeletonInfo.animationsCache;
                for (const aniKey in animationsCache) {
                  const animationCache = animationsCache[aniKey];
                  if (!animationCache) continue;
                  operate(aniKey, animationCache);
                }
                if (skeletonInfo.skeleton) {
                  spineLib.wasmUtil.destroySpineSkeleton(skeletonInfo.skeleton);
                }
                delete this._skeletonCache[assetUuid];
              }
              createSkeletonInfo(skeletonAsset) {
                const uuid = skeletonAsset.uuid;
                const runtimeData = skeletonAsset.getRuntimeData();
                if (!this._privateMode) {
                  let refCount = this._sharedCacheMap.get(uuid);
                  if (!refCount) {
                    refCount = 1;
                  } else {
                    refCount += 1;
                  }
                  this._sharedCacheMap.set(uuid, refCount);
                }
                if (this._skeletonCache[uuid]) {
                  return this._skeletonCache[uuid];
                }
                const skeleton = new spineLib.Skeleton(runtimeData);
                const clipper = null;
                const state = null;
                const listener = new TrackEntryListeners();
                const skeletonInfo = this._skeletonCache[uuid] = {
                  skeleton,
                  clipper,
                  state,
                  listener,
                  animationsCache: {},
                  curAnimationCache: null,
                  assetUUID: uuid
                };
                return skeletonInfo;
              }
              getSkeletonInfo(skeletonAsset) {
                const uuid = skeletonAsset.uuid;
                return this._skeletonCache[uuid];
              }
              getAnimationCache(uuid, animationName) {
                const skeletonInfo = this._skeletonCache[uuid];
                if (!skeletonInfo) return null;
                const animationsCache = skeletonInfo.animationsCache;
                return animationsCache[animationName];
              }
              initAnimationCache(uuid, data, animationName) {
                const spData = data.getRuntimeData();
                if (!spData) return null;
                const skeletonInfo = this._skeletonCache[uuid];
                const skeleton = skeletonInfo && skeletonInfo.skeleton;
                if (!skeleton) return null;
                const animationsCache = skeletonInfo.animationsCache;
                let animationCache = animationsCache[animationName];
                if (!animationCache) {
                  const poolKey = `${uuid}#${animationName}`;
                  animationCache = this._animationPool[poolKey];
                  if (animationCache) {
                    delete this._animationPool[poolKey];
                  } else {
                    animationCache = new AnimationCache(spData);
                    animationCache._privateMode = this._privateMode;
                  }
                  animationCache.init(skeletonInfo, animationName);
                  animationsCache[animationName] = animationCache;
                }
                animationCache.init(skeletonInfo, animationName);
                animationCache.setAnimation(animationName);
                return animationCache;
              }
              destroyCachedAnimations(uuid) {
                if (uuid) {
                  const animationPool = this._animationPool;
                  for (const key in animationPool) {
                    if (key.includes(uuid)) {
                      animationPool[key].destroy();
                      delete animationPool[key];
                    }
                  }
                } else {
                  const animationPool = this._animationPool;
                  for (const key in animationPool) {
                    animationPool[key].destroy();
                    delete animationPool[key];
                  }
                }
              }
            }
            _class5$1 = SkeletonCache;
            SkeletonCache.FrameTime = FrameTime;
            SkeletonCache.sharedCache = new _class5$1();

            var _dec$1, _dec2$1, _dec3$1, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4$1, _initializer5$1;
            let SkeletonData = (_dec$1 = ccclass('sp.SkeletonData'), _dec2$1 = type([Texture2D]), _dec3$1 = type([CCString]), _dec$1(_class$1 = (_class2$1 = class SkeletonData extends Asset {
              get skeletonJsonStr() {
                if (this._skeletonJson) {
                  return JSON.stringify(this._skeletonJson);
                }
                return '';
              }
              get skeletonJson() {
                return this._skeletonJson;
              }
              set skeletonJson(value) {
                this.reset();
                if (typeof value === 'string') {
                  this._skeletonJson = JSON.parse(value);
                } else {
                  this._skeletonJson = value;
                }
                if (!this._uuid && value.skeleton) {
                  this._uuid = value.skeleton.hash;
                }
              }
              get atlasText() {
                return this._atlasText;
              }
              set atlasText(value) {
                this._atlasText = value;
                this.reset();
              }
              get _nativeAsset() {
                return this._buffer;
              }
              set _nativeAsset(bin) {
                this._buffer = bin;
                this.reset();
              }
              constructor() {
                super();
                this._skeletonJson = _initializer$1 && _initializer$1();
                this.textures = _initializer2$1 && _initializer2$1();
                this.textureNames = _initializer3$1 && _initializer3$1();
                this.scale = _initializer4$1 && _initializer4$1();
                this._atlasText = _initializer5$1 && _initializer5$1();
                this._buffer = void 0;
                this._skeletonCache = null;
                this._skinsEnum = null;
                this._animsEnum = null;
                this.reset();
              }
              createNode(callback) {
                const node = new Node(this.name);
                const skeleton = node.addComponent('cc.Skeleton');
                skeleton.skeletonData = this;
                return callback(null, node);
              }
              reset() {
                this._skeletonCache = null;
              }
              resetEnums() {
              }
              getRuntimeData(quiet) {
                if (this._skeletonCache) {
                  return this._skeletonCache;
                }
                if (!(this.textures && this.textures.length > 0) && this.textureNames && this.textureNames.length > 0) {
                  if (!quiet) {
                    error(`${this.name} no textures found!`);
                  }
                  return null;
                }
                const spData = spineLib.wasmUtil.querySpineSkeletonDataByUUID(this._uuid);
                if (spData) {
                  this._skeletonCache = spData;
                } else if (this.skeletonJsonStr) {
                  this._skeletonCache = spineLib.wasmUtil.createSpineSkeletonDataWithJson(this.skeletonJsonStr, this._atlasText);
                  spineLib.wasmUtil.registerSpineSkeletonDataWithUUID(this._skeletonCache, this._uuid);
                } else {
                  const rawData = new Uint8Array(this._nativeAsset);
                  const byteSize = rawData.length;
                  const ptr = spineLib.wasmUtil.queryStoreMemory(byteSize);
                  const wasmMem = spineLib.wasmUtil.wasm.HEAPU8.subarray(ptr, ptr + byteSize);
                  wasmMem.set(rawData);
                  this._skeletonCache = spineLib.wasmUtil.createSpineSkeletonDataWithBinary(byteSize, this._atlasText);
                  spineLib.wasmUtil.registerSpineSkeletonDataWithUUID(this._skeletonCache, this._uuid);
                }
                return this._skeletonCache;
              }
              getSkinsEnum() {
                if (this._skinsEnum) {
                  return this._skinsEnum;
                }
                const sd = this.getRuntimeData(true);
                if (sd) {
                  const skins = sd.skins;
                  const enumDef = {};
                  for (let i = 0; i < skins.length; i++) {
                    const name = skins[i].name;
                    enumDef[name] = i;
                  }
                  return this._skinsEnum = Enum(enumDef);
                }
                return null;
              }
              getAnimsEnum() {
                if (this._animsEnum && Object.keys(this._animsEnum).length > 1) {
                  return this._animsEnum;
                }
                const sd = this.getRuntimeData(true);
                if (sd) {
                  const enumDef = {
                    '<None>': 0
                  };
                  const anims = sd.animations;
                  for (let i = 0; i < anims.length; i++) {
                    const name = anims[i].name;
                    enumDef[name] = i + 1;
                  }
                  return this._animsEnum = Enum(enumDef);
                }
                return null;
              }
              destroy() {
                SkeletonCache.sharedCache.destroyCachedAnimations(this._uuid);
                if (this._skeletonCache) {
                  spineLib.wasmUtil.registerSpineSkeletonDataWithUUID(this._skeletonCache, this._uuid);
                }
                return super.destroy();
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_skeletonJson", [serializable], function () {
              return null;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "textures", [serializable, _dec2$1], function () {
              return [];
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "textureNames", [serializable, _dec3$1], function () {
              return [];
            }), _initializer4$1 = applyDecoratedInitializer(_class2$1.prototype, "scale", [serializable], function () {
              return 1;
            }), _initializer5$1 = applyDecoratedInitializer(_class2$1.prototype, "_atlasText", [serializable], function () {
              return '';
            })), _class2$1)) || _class$1);
            legacyCC.internal.SpineSkeletonData = SkeletonData;

            class SkeletonSystem extends System {
              constructor() {
                super();
                this._skeletons = new Set();
              }
              static getInstance() {
                if (!SkeletonSystem._instance) {
                  SkeletonSystem._instance = new SkeletonSystem();
                  director.registerSystem(SkeletonSystem.ID, SkeletonSystem._instance, System.Priority.HIGH);
                }
                return SkeletonSystem._instance;
              }
              add(skeleton) {
                if (!skeleton) return;
                if (!this._skeletons.has(skeleton)) {
                  this._skeletons.add(skeleton);
                }
              }
              remove(skeleton) {
                if (!skeleton) return;
                if (this._skeletons.has(skeleton)) {
                  this._skeletons.delete(skeleton);
                }
              }
              postUpdate(dt) {
                if (!this._skeletons) {
                  return;
                }
                this._skeletons.forEach(skeleton => {
                  skeleton.updateAnimation(dt);
                });
              }
              prepareRenderData() {
                if (!this._skeletons) {
                  return;
                }
                this._skeletons.forEach(skeleton => {
                  skeleton.markForUpdateRenderData();
                });
              }
            }
            SkeletonSystem.ID = 'SKELETON';
            SkeletonSystem._instance = void 0;
            legacyCC.internal.SpineSkeletonSystem = SkeletonSystem;

            const tempMat4 = new Mat4();
            class AttachUtil {
              constructor() {
                this._isInitialized = false;
                this._skeletonBones = null;
                this._socketNodes = null;
                this._keysToDelete = [];
                this._isInitialized = false;
              }
              init(skeletonComp) {
                var _skeletonComp$socketN;
                this._isInitialized = false;
                if (!skeletonComp || ((_skeletonComp$socketN = skeletonComp.socketNodes) === null || _skeletonComp$socketN === void 0 ? void 0 : _skeletonComp$socketN.size) === 0) return;
                this._skeletonBones = skeletonComp._skeleton.bones;
                if (!this._skeletonBones || this._skeletonBones.length < 1) return;
                this._socketNodes = skeletonComp.socketNodes;
                if (!this._socketNodes || this._socketNodes.size <= 0) return;
                this._isInitialized = true;
                this._syncAttachedNode();
              }
              updateSkeletonBones(bones) {
                this._skeletonBones = bones;
              }
              reset() {
                this._isInitialized = false;
                this._skeletonBones = null;
                this._socketNodes = null;
                this._keysToDelete.length = 0;
              }
              _syncAttachedNode() {
                if (!this._isInitialized) return;
                const socketNodes = this._socketNodes;
                for (const [boneIdx, boneNode] of socketNodes) {
                  if (!boneNode || !boneNode.isValid) {
                    this._keysToDelete.push(boneIdx);
                    continue;
                  }
                  const bone = this._skeletonBones[boneIdx];
                  if (bone) this.matrixHandle(boneNode, bone);
                }
                if (this._keysToDelete.length <= 0) return;
                for (const boneIdx of this._keysToDelete) {
                  socketNodes.delete(boneIdx);
                }
                this._keysToDelete.length = 0;
              }
              matrixHandle(node, bone) {
                const tm = tempMat4;
                tm.m00 = bone.a;
                tm.m01 = bone.c;
                tm.m04 = bone.b;
                tm.m05 = bone.d;
                tm.m12 = bone.worldX;
                tm.m13 = bone.worldY;
                node.matrix = tempMat4;
              }
            }

            var _dec, _dec2, _class, _class2, _initializer, _initializer2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _class6;
            const CUSTOM_SLOT_TEXTURE_BEGIN = 10000;
            let _slotTextureID = CUSTOM_SLOT_TEXTURE_BEGIN;
            const timeScale = 1.0;
            let AnimationCacheMode;
            (function (AnimationCacheMode) {
              AnimationCacheMode[AnimationCacheMode["UNSET"] = -1] = "UNSET";
              AnimationCacheMode[AnimationCacheMode["REALTIME"] = 0] = "REALTIME";
              AnimationCacheMode[AnimationCacheMode["SHARED_CACHE"] = 1] = "SHARED_CACHE";
              AnimationCacheMode[AnimationCacheMode["PRIVATE_CACHE"] = 2] = "PRIVATE_CACHE";
            })(AnimationCacheMode || (AnimationCacheMode = {}));
            ccenum(AnimationCacheMode);
            let DefaultSkinsEnum;
            (function (DefaultSkinsEnum) {
              DefaultSkinsEnum[DefaultSkinsEnum["default"] = 0] = "default";
            })(DefaultSkinsEnum || (DefaultSkinsEnum = {}));
            ccenum(DefaultSkinsEnum);
            let DefaultAnimsEnum;
            (function (DefaultAnimsEnum) {
              DefaultAnimsEnum[DefaultAnimsEnum["<None>"] = 0] = "<None>";
            })(DefaultAnimsEnum || (DefaultAnimsEnum = {}));
            ccenum(DefaultAnimsEnum);
            let SpineMaterialType;
            (function (SpineMaterialType) {
              SpineMaterialType[SpineMaterialType["COLORED_TEXTURED"] = 0] = "COLORED_TEXTURED";
              SpineMaterialType[SpineMaterialType["TWO_COLORED"] = 1] = "TWO_COLORED";
            })(SpineMaterialType || (SpineMaterialType = {}));
            let SpineSocket = (_dec = ccclass('sp.Skeleton.SpineSocket'), _dec2 = type(Node), _dec(_class = (_class2 = class SpineSocket {
              constructor(path = '', target = null) {
                this.path = _initializer && _initializer();
                this.target = _initializer2 && _initializer2();
                this.path = path;
                this.target = target;
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
              return '';
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "target", [_dec2, serializable], function () {
              return null;
            })), _class2)) || _class);
            setClassAlias(SpineSocket, 'sp.Skeleton.SpineSocket');
            let Skeleton = (_dec3 = ccclass('sp.Skeleton'), _dec4 = type(SkeletonData), _dec5 = type(DefaultSkinsEnum), _dec6 = type(DefaultAnimsEnum), _dec7 = type(AnimationCacheMode), _dec8 = type([SpineSocket]), _dec9 = type(Material), _dec3(_class4 = (_class5 = (_class6 = class Skeleton extends UIRenderer {
              constructor() {
                super();
                this._skeletonData = _initializer3 && _initializer3();
                this.defaultSkin = _initializer4 && _initializer4();
                this.defaultAnimation = _initializer5 && _initializer5();
                this._premultipliedAlpha = _initializer6 && _initializer6();
                this._timeScale = _initializer7 && _initializer7();
                this._preCacheMode = _initializer8 && _initializer8();
                this._cacheMode = _initializer9 && _initializer9();
                this._sockets = _initializer10 && _initializer10();
                this._useTint = _initializer11 && _initializer11();
                this._debugMesh = _initializer12 && _initializer12();
                this._debugBones = _initializer13 && _initializer13();
                this._debugSlots = _initializer14 && _initializer14();
                this._enableBatch = _initializer15 && _initializer15();
                this._runtimeData = null;
                this._skeleton = null;
                this._instance = null;
                this._state = null;
                this._textures = [];
                this._skeletonInfo = null;
                this._animationName = '';
                this._skinName = '';
                this._drawList = new RecyclePool(() => ({
                  material: null,
                  texture: null,
                  indexOffset: 0,
                  indexCount: 0
                }), 1);
                this._materialCache = {};
                this.paused = false;
                this._enumSkins = Enum({});
                this._enumAnimations = Enum({});
                this.attachUtil = void 0;
                this._socketNodes = new Map();
                this._cachedSockets = new Map();
                this._startEntry = void 0;
                this._endEntry = void 0;
                this._paused = false;
                this._accTime = 0;
                this._playCount = 0;
                this._skeletonCache = null;
                this._animCache = null;
                this._animationQueue = [];
                this._headAniInfo = null;
                this._isAniComplete = true;
                this._playTimes = 0;
                this._curFrame = null;
                this._needUpdateSkeltonData = true;
                this._listener = null;
                this._debugRenderer = null;
                this._startSlotIndex = void 0;
                this._endSlotIndex = void 0;
                this._slotTextures = null;
                this._vLength = 0;
                this._vBuffer = null;
                this._iLength = 0;
                this._iBuffer = null;
                this._model = void 0;
                this._tempColor = {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: 0
                };
                this.loop = _initializer16 && _initializer16();
                this._useVertexOpacity = true;
                this._startEntry = {
                  animation: {
                    name: ''
                  },
                  trackIndex: 0
                };
                this._endEntry = {
                  animation: {
                    name: ''
                  },
                  trackIndex: 0
                };
                this._startSlotIndex = -1;
                this._endSlotIndex = -1;
                this.attachUtil = new AttachUtil();
              }
              get drawList() {
                return this._drawList;
              }
              get skeletonData() {
                return this._skeletonData;
              }
              set skeletonData(value) {
                if (value) value.resetEnums();
                if (this._skeletonData !== value) {
                  this.destroyRenderData();
                  this._skeletonData = value;
                  this.defaultSkin = '';
                  this.defaultAnimation = '';
                  this._animationName = '';
                  this._skinName = '';
                  this._updateSkeletonData();
                  this._updateUITransform();
                }
              }
              get _defaultSkinIndex() {
                if (this.skeletonData) {
                  const skinsEnum = this.skeletonData.getSkinsEnum();
                  if (skinsEnum) {
                    if (this.defaultSkin === '') {
                      if (skinsEnum.hasOwnProperty(0)) {
                        this._defaultSkinIndex = 0;
                        return 0;
                      }
                    } else {
                      const skinIndex = skinsEnum[this.defaultSkin];
                      if (skinIndex !== undefined) {
                        return skinIndex;
                      }
                    }
                  }
                }
                return 0;
              }
              set _defaultSkinIndex(value) {
                let skinsEnum;
                if (this.skeletonData) {
                  skinsEnum = this.skeletonData.getSkinsEnum();
                }
                if (!skinsEnum) {
                  error(`${this.name} skin enums are invalid`);
                  return;
                }
                const skinName = skinsEnum[value];
                if (skinName !== undefined) {
                  this.defaultSkin = String(skinName);
                  this.setSkin(this.defaultSkin);
                  this._refreshInspector();
                  this.markForUpdateRenderData();
                } else {
                  error(`${this.name} skin enums are invalid`);
                }
              }
              get _animationIndex() {
                const animationName = this.animation;
                if (this.skeletonData) {
                  if (animationName) {
                    const animsEnum = this.skeletonData.getAnimsEnum();
                    if (animsEnum) {
                      const animIndex = animsEnum[animationName];
                      if (animIndex !== undefined) {
                        return animIndex;
                      }
                    }
                  } else {
                    this._refreshInspector();
                  }
                }
                return 0;
              }
              set _animationIndex(value) {
                let animsEnum;
                if (this.skeletonData) {
                  animsEnum = this.skeletonData.getAnimsEnum();
                }
                if (!animsEnum) {
                  error(`${this.name} animation enums are invalid`);
                  return;
                }
                const animName = String(animsEnum[value]);
                if (animName !== undefined) {
                  this.animation = animName;
                  {
                    this.animation = animName;
                  }
                } else {
                  error(`${this.name} animation enums are invalid`);
                }
              }
              get defaultCacheMode() {
                return this._cacheMode;
              }
              set defaultCacheMode(mode) {
                this._cacheMode = mode;
                this.setAnimationCacheMode(this._cacheMode);
              }
              get premultipliedAlpha() {
                return this._premultipliedAlpha;
              }
              set premultipliedAlpha(v) {
                if (v !== this._premultipliedAlpha) {
                  this._premultipliedAlpha = v;
                  this._instance.setPremultipliedAlpha(v);
                  this.markForUpdateRenderData();
                }
              }
              get timeScale() {
                return this._timeScale;
              }
              set timeScale(value) {
                if (value !== this._timeScale) {
                  this._timeScale = value;
                  if (this._instance) {
                    this._instance.dtRate = this._timeScale * timeScale;
                  }
                }
              }
              get useTint() {
                return this._useTint;
              }
              set useTint(value) {
                if (value !== this._useTint) {
                  this._useTint = value;
                  this._updateUseTint();
                }
              }
              get enableBatch() {
                return this._enableBatch;
              }
              set enableBatch(value) {
                if (value !== this._enableBatch) {
                  this._enableBatch = value;
                  this._updateBatch();
                }
              }
              get sockets() {
                return this._sockets;
              }
              set sockets(val) {
                this._sockets = val;
                this._updateSocketBindings();
                this.attachUtil.init(this);
              }
              get debugSlots() {
                return this._debugSlots;
              }
              set debugSlots(v) {
                if (v !== this._debugSlots) {
                  this._debugSlots = v;
                  this._updateDebugDraw();
                  this.markForUpdateRenderData();
                }
              }
              get debugBones() {
                return this._debugBones;
              }
              set debugBones(v) {
                if (v !== this._debugBones) {
                  this._debugBones = v;
                  this._updateDebugDraw();
                  this.markForUpdateRenderData();
                }
              }
              get debugMesh() {
                return this._debugMesh;
              }
              set debugMesh(value) {
                if (value !== this._debugMesh) {
                  this._debugMesh = value;
                  this._updateDebugDraw();
                  this.markForUpdateRenderData();
                }
              }
              get socketNodes() {
                return this._socketNodes;
              }
              get animation() {
                return this._animationName;
              }
              set animation(value) {
                if (value) {
                  this.setAnimation(0, value, this.loop);
                } else {
                  this.clearAnimation(0);
                }
              }
              get customMaterial() {
                return this._customMaterial;
              }
              set customMaterial(val) {
                this._customMaterial = val;
                this.updateMaterial();
                this.markForUpdateRenderData();
              }
              __preload() {
                super.__preload();
                this._updateSkeletonData();
                this._updateDebugDraw();
              }
              onRestore() {
                this.updateMaterial();
                this.markForUpdateRenderData();
              }
              getState() {
                return this._state;
              }
              onEnable() {
                super.onEnable();
                if (this._instance) {
                  this._instance.enable = true;
                }
                this._flushAssembler();
                SkeletonSystem.getInstance().add(this);
              }
              onDisable() {
                super.onDisable();
                if (this._instance) {
                  this._instance.enable = false;
                }
                SkeletonSystem.getInstance().remove(this);
              }
              onDestroy() {
                var _this$_slotTextures;
                this._drawList.destroy();
                this.destroyRenderData();
                this._cleanMaterialCache();
                this._vBuffer = null;
                this._iBuffer = null;
                this.attachUtil.reset();
                (_this$_slotTextures = this._slotTextures) === null || _this$_slotTextures === void 0 ? void 0 : _this$_slotTextures.clear();
                this._slotTextures = null;
                this._cachedSockets.clear();
                this._socketNodes.clear();
                this._animCache = null;
                SkeletonSystem.getInstance().remove(this);
                this._destroySkeletonInfo(this._skeletonCache);
                this._skeletonCache = null;
                super.onDestroy();
              }
              clearAnimation(trackIndex) {
                if (!this.isAnimationCached()) {
                  this.clearTrack(trackIndex || 0);
                  this.setToSetupPose();
                }
              }
              clearAnimations() {
                if (!this.isAnimationCached()) {
                  this.clearTracks();
                  this.setToSetupPose();
                }
              }
              _updateSkeletonData() {
                const skeletonData = this._skeletonData;
                if (!skeletonData) {
                  this._runtimeData = null;
                  this._state = null;
                  this._skeleton = null;
                  this._textures = [];
                  this._refreshInspector();
                  return;
                }
                if (this._instance) {
                  this._instance.dtRate = this._timeScale * timeScale;
                }
                this._needUpdateSkeltonData = false;
                this._runtimeData = skeletonData.getRuntimeData();
                if (!this._runtimeData) return;
                this.setSkeletonData(this._runtimeData);
                this._textures = skeletonData.textures;
                this._refreshInspector();
                if (this.defaultAnimation) this.animation = this.defaultAnimation.toString();
                if (this.defaultSkin && this.defaultSkin !== '') this.setSkin(this.defaultSkin);
                this._updateUseTint();
                this._indexBoneSockets();
                this._updateSocketBindings();
                this.attachUtil.init(this);
                this._preCacheMode = this._cacheMode;
              }
              setSkeletonData(skeletonData) {
                {
                  const preSkeletonCache = this._skeletonCache;
                  if (this._cacheMode === AnimationCacheMode.SHARED_CACHE) {
                    this._skeletonCache = SkeletonCache.sharedCache;
                  } else if (this._cacheMode === AnimationCacheMode.PRIVATE_CACHE) {
                    this._skeletonCache = new SkeletonCache();
                    this._skeletonCache.enablePrivateMode();
                  } else {
                    this._skeletonCache = null;
                  }
                  if (preSkeletonCache !== this._skeletonCache) {
                    this._destroySkeletonInfo(preSkeletonCache);
                  }
                }
                if (this.isAnimationCached()) {
                  if (this.debugBones || this.debugSlots) {
                    warn('Debug bones or slots is invalid in cached mode');
                  }
                  const skeletonInfo = this._skeletonCache.getSkeletonInfo(this._skeletonData);
                  if (this._skeletonInfo !== skeletonInfo) {
                    this._destroySkeletonInfo(this._skeletonCache);
                    this._skeletonInfo = this._skeletonCache.createSkeletonInfo(this._skeletonData);
                    this._skeleton = this._skeletonInfo.skeleton;
                  }
                } else {
                  this._skeleton = this._instance.initSkeleton(skeletonData);
                  this._state = this._instance.getAnimationState();
                  this._instance.setPremultipliedAlpha(this._premultipliedAlpha);
                }
                this._flushAssembler();
              }
              setSlotsRange(startSlotIndex, endSlotIndex) {
                if (this.isAnimationCached()) {
                  warn('Slots visible range can not be modified in cached mode.');
                } else {
                  this._startSlotIndex = startSlotIndex;
                  this._endSlotIndex = endSlotIndex;
                }
              }
              getAttachment(slotName, attachmentName) {
                if (this._skeleton) {
                  return this._skeleton.getAttachmentByName(slotName, attachmentName);
                }
                return null;
              }
              setAttachment(slotName, attachmentName) {
                if (this._skeleton) {
                  this._skeleton.setAttachment(slotName, attachmentName);
                }
                this.invalidAnimationCache();
              }
              getTextureAtlas(regionAttachment) {
                return regionAttachment.region;
              }
              setAnimation(trackIndex, name, loop) {
                if (!(typeof name === 'string')) {
                  logID(7511);
                  return null;
                }
                const animation = this._skeleton.data.findAnimation(name);
                if (!animation) {
                  logID(7509, name);
                  return null;
                }
                let trackEntry = null;
                if (loop === undefined) loop = true;
                this._playTimes = loop ? 0 : 1;
                if (this.isAnimationCached()) {
                  if (trackIndex !== 0) {
                    warn('Track index can not greater than 0 in cached mode.');
                  }
                  if (!this._skeletonCache) return null;
                  let cache = this._skeletonCache.getAnimationCache(this._skeletonData.uuid, name);
                  if (!cache) {
                    var _cache;
                    cache = this._skeletonCache.initAnimationCache(this.skeletonData.uuid, this._skeletonData, name);
                    (_cache = cache) === null || _cache === void 0 ? void 0 : _cache.setSkin(this._skinName);
                  }
                  if (cache) {
                    this._animationName = name;
                    this._isAniComplete = false;
                    this._accTime = 0;
                    this._playCount = 0;
                    this._animCache = cache;
                    if (this._socketNodes.size > 0) {
                      this._animCache.enableCacheAttachedInfo();
                    }
                    this._animCache.updateToFrame(0);
                    this._curFrame = this._animCache.frames[0];
                  }
                } else {
                  this._animationName = name;
                  trackEntry = this._instance.setAnimation(trackIndex, name, loop);
                }
                this.markForUpdateRenderData();
                return trackEntry;
              }
              addAnimation(trackIndex, name, loop, delay) {
                delay = delay || 0;
                if (this.isAnimationCached()) {
                  if (trackIndex !== 0) {
                    warn('Track index can not greater than 0 in cached mode.');
                  }
                  this._animationQueue.push({
                    animationName: name,
                    loop,
                    delay
                  });
                  return null;
                } else if (this._skeleton) {
                  var _this$_state;
                  const animation = this._skeleton.data.findAnimation(name);
                  if (!animation) {
                    logID(7510, name);
                    return null;
                  }
                  return (_this$_state = this._state) === null || _this$_state === void 0 ? void 0 : _this$_state.addAnimationWith(trackIndex, animation, loop, delay);
                }
                return null;
              }
              findAnimation(name) {
                if (this._skeleton) {
                  return this._skeleton.data.findAnimation(name);
                }
                return null;
              }
              getCurrent(trackIndex) {
                if (this.isAnimationCached()) {
                  warn('\'getCurrent\' interface can not be invoked in cached mode.');
                } else if (this._state) {
                  return this._state.getCurrent(trackIndex);
                }
                return null;
              }
              setSkin(name) {
                if (this._skeleton) this._skeleton.setSkinByName(name);
                this._instance.setSkin(name);
                if (this.isAnimationCached()) {
                  if (this._animCache) {
                    this._animCache.setSkin(name);
                  }
                }
                this._skinName = name;
                this.invalidAnimationCache();
              }
              updateAnimation(dt) {
                this.markForUpdateRenderData();
                if (this.paused) return;
                if (this.isAnimationCached()) {
                  dt *= this._timeScale * timeScale;
                  if (this._isAniComplete) {
                    var _this$_headAniInfo;
                    if (this._animationQueue.length === 0 && !this._headAniInfo) {
                      const frameCache = this._animCache;
                      if (frameCache && frameCache.isInvalid()) {
                        frameCache.updateToFrame(0);
                        const frames = frameCache.frames;
                        this._curFrame = frames[frames.length - 1];
                      }
                      return;
                    }
                    if (!this._headAniInfo) {
                      this._headAniInfo = this._animationQueue.shift();
                    }
                    this._accTime += dt;
                    if (this._accTime > ((_this$_headAniInfo = this._headAniInfo) === null || _this$_headAniInfo === void 0 ? void 0 : _this$_headAniInfo.delay)) {
                      const aniInfo = this._headAniInfo;
                      this._headAniInfo = null;
                      this.setAnimation(0, aniInfo === null || aniInfo === void 0 ? void 0 : aniInfo.animationName, aniInfo === null || aniInfo === void 0 ? void 0 : aniInfo.loop);
                    }
                    return;
                  }
                  this._updateCache(dt);
                } else {
                  this._instance.updateAnimation(dt);
                }
              }
              _updateCache(dt) {
                const frameCache = this._animCache;
                if (!frameCache.isInited()) {
                  return;
                }
                const frames = frameCache.frames;
                const frameTime = SkeletonCache.FrameTime;
                if (this._accTime === 0 && this._playCount === 0) {
                  this._startEntry.animation.name = this._animationName;
                  if (this._listener && this._listener.start) {
                    this._listener.start(this._startEntry);
                  }
                }
                this._accTime += dt;
                let frameIdx = Math.floor(this._accTime / frameTime);
                if (!frameCache.isCompleted) {
                  frameCache.updateToFrame(frameIdx);
                }
                this._curFrame = frames[frameIdx];
                if (this._curFrame !== undefined) {
                  this.attachUtil.updateSkeletonBones(this._curFrame.boneInfos);
                }
                if (frameCache.isCompleted && frameIdx >= frames.length) {
                  this._playCount++;
                  if (this._playTimes > 0 && this._playCount >= this._playTimes) {
                    this._curFrame = frames[frames.length - 1];
                    this._accTime = 0;
                    this._playCount = 0;
                    this._isAniComplete = true;
                    this._emitCacheCompleteEvent();
                    return;
                  }
                  this._accTime = 0;
                  frameIdx = 0;
                  this._curFrame = frames[frameIdx];
                  this._emitCacheCompleteEvent();
                }
              }
              _emitCacheCompleteEvent() {
                if (!this._listener) return;
                this._endEntry.animation.name = this._animationName;
                if (this._listener.complete) this._listener.complete(this._endEntry);
                if (this._listener.end) this._listener.end(this._endEntry);
              }
              updateRenderData() {
                if (this.isAnimationCached()) {
                  if (!this._curFrame) return null;
                  const model = this._curFrame.model;
                  return model;
                } else {
                  const model = this._instance.updateRenderData();
                  return model;
                }
              }
              _flushAssembler() {
                const assembler = Skeleton.Assembler.getAssembler(this);
                if (this._assembler !== assembler) {
                  this._assembler = assembler;
                }
                if (this._skeleton && this._assembler) {
                  this._renderData = this._assembler.createData(this);
                  this.markForUpdateRenderData();
                  this._updateColor();
                }
              }
              _render(batcher) {
                let indicesCount = 0;
                if (this.renderData && this._drawList.length > 0) {
                  const rd = this.renderData;
                  const chunk = rd.chunk;
                  const accessor = chunk.vertexAccessor;
                  const meshBuffer = rd.getMeshBuffer();
                  const origin = meshBuffer.indexOffset;
                  for (let i = 0; i < this._drawList.length; i++) {
                    const dc = this._drawList.data[i];
                    if (dc.texture) {
                      batcher.commitMiddleware(this, meshBuffer, origin + dc.indexOffset, dc.indexCount, dc.texture, dc.material, this._enableBatch);
                    }
                    indicesCount += dc.indexCount;
                  }
                  const subIndices = rd.indices.subarray(0, indicesCount);
                  accessor.appendIndices(chunk.bufferId, subIndices);
                  accessor.getMeshBuffer(chunk.bufferId).setDirty();
                }
              }
              requestDrawData(material, textureID, indexOffset, indexCount) {
                const draw = this._drawList.add();
                draw.material = material;
                if (textureID < CUSTOM_SLOT_TEXTURE_BEGIN) {
                  draw.texture = this._textures[textureID];
                } else {
                  var _this$_slotTextures2;
                  const texture = (_this$_slotTextures2 = this._slotTextures) === null || _this$_slotTextures2 === void 0 ? void 0 : _this$_slotTextures2.get(textureID);
                  if (texture) draw.texture = texture;
                }
                draw.indexOffset = indexOffset;
                draw.indexCount = indexCount;
                return draw;
              }
              _updateBuiltinMaterial() {
                const material = builtinResMgr.get('default-spine-material');
                return material;
              }
              updateMaterial() {
                let mat;
                if (this._customMaterial) mat = this._customMaterial;else mat = this._updateBuiltinMaterial();
                this.setSharedMaterial(mat, 0);
                this._cleanMaterialCache();
              }
              getMaterialTemplate() {
                if (this.customMaterial !== null) return this.customMaterial;
                if (this.material) return this.material;
                this.updateMaterial();
                return this.material;
              }
              _cleanMaterialCache() {
                for (const val in this._materialCache) {
                  this._materialCache[val].destroy();
                }
                this._materialCache = {};
              }
              getMaterialForBlendAndTint(src, dst, type) {
                const key = `${type}/${src}/${dst}`;
                let inst = this._materialCache[key];
                if (inst) {
                  return inst;
                }
                const material = this.getMaterialTemplate();
                const matInfo = {
                  parent: material,
                  subModelIdx: 0,
                  owner: this
                };
                inst = new MaterialInstance(matInfo);
                this._materialCache[key] = inst;
                inst.overridePipelineStates({
                  blendState: {
                    blendColor: Color.WHITE,
                    targets: [{
                      blendEq: BlendOp.ADD,
                      blendAlphaEq: BlendOp.ADD,
                      blendSrc: src,
                      blendDst: dst,
                      blendSrcAlpha: src,
                      blendDstAlpha: dst
                    }]
                  }
                });
                let useTwoColor = false;
                if (type === SpineMaterialType.TWO_COLORED) {
                  useTwoColor = true;
                }
                const useLocal = !this._enableBatch;
                inst.recompileShaders({
                  TWO_COLORED: useTwoColor,
                  USE_LOCAL: useLocal
                });
                return inst;
              }
              _updateAnimEnum() {
                let animEnum;
                if (this.skeletonData) {
                  animEnum = this.skeletonData.getAnimsEnum();
                } else {
                  animEnum = DefaultAnimsEnum;
                }
                this._enumAnimations = Enum({});
                Object.assign(this._enumAnimations, animEnum);
                Enum.update(this._enumAnimations);
                setPropertyEnumType(this, '_animationIndex', this._enumAnimations);
              }
              _updateSkinEnum() {
                let skinEnum;
                if (this.skeletonData) {
                  skinEnum = this.skeletonData.getSkinsEnum();
                } else {
                  skinEnum = DefaultSkinsEnum;
                }
                this._enumSkins = Enum({});
                Object.assign(this._enumSkins, skinEnum);
                Enum.update(this._enumSkins);
                setPropertyEnumType(this, '_defaultSkinIndex', this._enumSkins);
              }
              _refreshInspector() {
              }
              destroyRenderData() {
                this._drawList.reset();
                super.destroyRenderData();
              }
              createRenderEntity() {
                const renderEntity = new RenderEntity(RenderEntityType.DYNAMIC);
                renderEntity.setUseLocal(true);
                return renderEntity;
              }
              markForUpdateRenderData(enable = true) {
                super.markForUpdateRenderData(enable);
                if (this._debugRenderer) {
                  this._debugRenderer.markForUpdateRenderData(enable);
                }
              }
              syncAttachedNode() {
                this.attachUtil._syncAttachedNode();
              }
              isAnimationCached() {
                return this._cacheMode !== AnimationCacheMode.REALTIME;
              }
              setAnimationCacheMode(cacheMode) {
                if (this._preCacheMode !== cacheMode) {
                  this._cacheMode = cacheMode;
                  this._preCacheMode = cacheMode;
                  if (this._instance) {
                    this._instance.isCache = this.isAnimationCached();
                  }
                  this._updateSkeletonData();
                  this.markForUpdateRenderData();
                }
              }
              setToSetupPose() {
                if (this._skeleton) {
                  this._skeleton.setToSetupPose();
                }
              }
              setBonesToSetupPose() {
                if (this._skeleton) {
                  this._skeleton.setBonesToSetupPose();
                }
              }
              setSlotsToSetupPose() {
                if (this._skeleton) {
                  this._skeleton.setSlotsToSetupPose();
                }
              }
              invalidAnimationCache() {
                if (!this.isAnimationCached()) return;
                if (this._skeletonCache) {
                  this._skeletonCache.invalidAnimationCache(this._skeletonData.uuid);
                }
              }
              findBone(boneName) {
                if (this._skeleton) {
                  return this._skeleton.findBone(boneName);
                }
                return null;
              }
              findSlot(slotName) {
                if (this._skeleton) {
                  return this._skeleton.findSlot(slotName);
                }
                return null;
              }
              setMix(fromAnimation, toAnimation, duration) {
                if (this.isAnimationCached()) {
                  warn('cached mode not support setMix!!!');
                  return;
                }
                if (this._state) {
                  this._instance.setMix(fromAnimation, toAnimation, duration);
                }
              }
              clearTracks() {
                if (this.isAnimationCached()) {
                  warn('\'clearTracks\' interface can not be invoked in cached mode.');
                } else if (this._state) {
                  this._state.clearTracks();
                  this.setToSetupPose();
                }
              }
              clearTrack(trackIndex) {
                if (this.isAnimationCached()) {
                  warn('\'clearTrack\' interface can not be invoked in cached mode.');
                } else if (this._state) {
                  this._state.clearTrack(trackIndex);
                }
              }
              updateWorldTransform() {
                if (!this.isAnimationCached()) return;
                if (this._skeleton) {
                  this._skeleton.updateWorldTransform();
                }
              }
              _verifySockets(sockets) {
                for (let i = 0, l = sockets.length; i < l; i++) {
                  const target = sockets[i].target;
                  if (target) {
                    if (!target.parent || target.parent !== this.node) {
                      error(`Target node ${target.name} is expected to be a direct child of ${this.node.name}`);
                      continue;
                    }
                  }
                }
                const uniqueSocketNode = new Map();
                sockets.forEach(x => {
                  if (x.target) {
                    if (uniqueSocketNode.get(x.target)) {
                      error(`Target node ${x.target.name} has existed.`);
                    } else {
                      uniqueSocketNode.set(x.target, true);
                    }
                  }
                });
              }
              _updateSocketBindings() {
                if (!this._skeleton) return;
                this._socketNodes.clear();
                for (let i = 0, l = this._sockets.length; i < l; i++) {
                  const socket = this._sockets[i];
                  if (socket.path && socket.target) {
                    const boneIdx = this._cachedSockets.get(socket.path);
                    if (!boneIdx) {
                      error(`Skeleton data does not contain path ${socket.path}`);
                      continue;
                    }
                    this._socketNodes.set(boneIdx, socket.target);
                  }
                }
              }
              _indexBoneSockets() {
                if (!this._skeleton) {
                  return;
                }
                this._cachedSockets.clear();
                const bones = this._skeleton.bones;
                const getBoneName = bone => {
                  if (bone.parent == null) return bone.data.name || '<Unamed>';
                  return `${getBoneName(bones[bone.parent.data.index])}/${bone.data.name}`;
                };
                for (let i = 0, l = bones.length; i < l; i++) {
                  const bd = bones[i].data;
                  const boneName = getBoneName(bones[i]);
                  this._cachedSockets.set(boneName, bd.index);
                }
              }
              querySockets() {
                if (!this._skeleton) {
                  return [];
                }
                if (this._cachedSockets.size === 0) {
                  this._indexBoneSockets();
                }
                if (this._cachedSockets.size > 0) {
                  return Array.from(this._cachedSockets.keys()).sort();
                }
                return [];
              }
              _updateUseTint() {
                this._cleanMaterialCache();
                this.destroyRenderData();
                if (this._assembler && this._skeleton) {
                  this._renderData = this._assembler.createData(this);
                  this.markForUpdateRenderData();
                }
              }
              _updateBatch() {
                this._cleanMaterialCache();
                this.markForUpdateRenderData();
              }
              _updateDebugDraw() {
                if (this.debugBones || this.debugSlots || this.debugMesh) {
                  if (!this._debugRenderer) {
                    const debugDrawNode = new Node('DEBUG_DRAW_NODE');
                    debugDrawNode.layer = this.node.layer;
                    debugDrawNode.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
                    const debugDraw = debugDrawNode.addComponent(Graphics);
                    debugDraw.lineWidth = 5;
                    debugDraw.strokeColor = new Color(255, 0, 0, 255);
                    this._debugRenderer = debugDraw;
                    debugDrawNode.parent = this.node;
                    this.node.on(NodeEventType.LAYER_CHANGED, this._applyLayer, this);
                  }
                  if (this.isAnimationCached()) {
                    warn('Debug bones or slots is invalid in cached mode');
                  }
                } else if (this._debugRenderer) {
                  this.node.off(NodeEventType.LAYER_CHANGED, this._applyLayer, this);
                  this._debugRenderer.node.destroy();
                  this._debugRenderer = null;
                  if (!this.isAnimationCached()) {
                    if (this._instance) {
                      this._instance.setDebugMode(false);
                    }
                  }
                }
              }
              _updateUITransform() {
                const uiTrans = this.node._uiProps.uiTransformComp;
                const skeletonData = this._runtimeData;
                if (!skeletonData) {
                  uiTrans.setContentSize(100, 100);
                  uiTrans.anchorX = 0.5;
                  uiTrans.anchorX = 0.5;
                  return;
                }
                const width = skeletonData.width;
                const height = skeletonData.height;
                if (width && height) {
                  uiTrans.setContentSize(width, height);
                  if (width !== 0) uiTrans.anchorX = Math.abs(skeletonData.x) / width;
                  if (height !== 0) uiTrans.anchorY = Math.abs(skeletonData.y) / height;
                }
              }
              _updateColor() {
                const a = this.node._uiProps.opacity;
                if (this._tempColor.r === this._color.r && this._tempColor.g === this.color.g && this._tempColor.b === this.color.b && this._tempColor.a === a) {
                  return;
                }
                this.node._uiProps.colorDirty = true;
                this._tempColor.r = this._color.r;
                this._tempColor.g = this._color.g;
                this._tempColor.b = this._color.b;
                this._tempColor.a = a;
                const r = this._color.r / 255.0;
                const g = this._color.g / 255.0;
                const b = this._color.b / 255.0;
                this._instance.setColor(r, g, b, a);
              }
              setVertexEffectDelegate(effectDelegate) {
                if (!this._instance) {
                  return;
                }
                if (!effectDelegate) {
                  this._instance.clearEffect();
                  return;
                }
                const effectType = effectDelegate === null || effectDelegate === void 0 ? void 0 : effectDelegate.getEffectType();
                if (effectType === 'jitter') {
                  const jitterEffect = effectDelegate === null || effectDelegate === void 0 ? void 0 : effectDelegate.getJitterVertexEffect();
                  this._instance.setJitterEffect(jitterEffect);
                } else if (effectType === 'swirl') {
                  const swirlEffect = effectDelegate === null || effectDelegate === void 0 ? void 0 : effectDelegate.getJitterVertexEffect();
                  this._instance.setSwirlEffect(swirlEffect);
                }
              }
              _ensureListener() {
                if (!this._listener) {
                  this._listener = new TrackEntryListeners();
                }
              }
              setStartListener(listener) {
                this._ensureListener();
                const listenerID = TrackEntryListeners.addListener(listener);
                this._instance.setListener(listenerID, spineLib.EventType.start);
                this._listener.start = listener;
              }
              setInterruptListener(listener) {
                this._ensureListener();
                const listenerID = TrackEntryListeners.addListener(listener);
                this._instance.setListener(listenerID, spineLib.EventType.interrupt);
                this._listener.interrupt = listener;
              }
              setEndListener(listener) {
                this._ensureListener();
                const listenerID = TrackEntryListeners.addListener(listener);
                this._instance.setListener(listenerID, spineLib.EventType.end);
                this._listener.end = listener;
              }
              setDisposeListener(listener) {
                this._ensureListener();
                const listenerID = TrackEntryListeners.addListener(listener);
                this._instance.setListener(listenerID, spineLib.EventType.dispose);
                this._listener.dispose = listener;
              }
              setCompleteListener(listener) {
                this._ensureListener();
                const listenerID = TrackEntryListeners.addListener(listener);
                this._instance.setListener(listenerID, spineLib.EventType.complete);
                this._listener.complete = listener;
              }
              setEventListener(listener) {
                this._ensureListener();
                const listenerID = TrackEntryListeners.addListener(listener);
                this._instance.setListener(listenerID, spineLib.EventType.event);
                this._listener.event = listener;
              }
              setTrackStartListener(entry, listener) {
                TrackEntryListeners.getListeners(entry, this._instance).start = listener;
              }
              setTrackInterruptListener(entry, listener) {
                TrackEntryListeners.getListeners(entry, this._instance).interrupt = listener;
              }
              setTrackEndListener(entry, listener) {
                TrackEntryListeners.getListeners(entry, this._instance).end = listener;
              }
              setTrackDisposeListener(entry, listener) {
                TrackEntryListeners.getListeners(entry, this._instance).dispose = listener;
              }
              setTrackCompleteListener(entry, listener) {
                const onComplete = trackEntry => {
                  const loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd);
                  TrackEntryListeners.addListener(listener);
                  listener(trackEntry, loopCount);
                };
                TrackEntryListeners.getListeners(entry, this._instance).complete = onComplete;
              }
              setTrackEventListener(entry, listener) {
                TrackEntryListeners.getListeners(entry, this._instance).event = listener;
              }
              getDebugShapes() {
                return this._instance.getDebugShapes();
              }
              setSlotTexture(slotName, tex2d, createNew) {
                if (this.isAnimationCached()) {
                  error(`Cached mode can't change texture of slot`);
                  return;
                }
                const slot = this.findSlot(slotName);
                if (!slot) {
                  error(`No slot named:${slotName}`);
                  return;
                }
                const width = tex2d.width;
                const height = tex2d.height;
                const createNewAttachment = createNew || false;
                this._instance.resizeSlotRegion(slotName, width, height, createNewAttachment);
                if (!this._slotTextures) this._slotTextures = new Map();
                let textureID = 0;
                this._slotTextures.forEach((value, key) => {
                  if (value === tex2d) textureID = key;
                });
                if (textureID === 0) {
                  textureID = ++_slotTextureID;
                  this._slotTextures.set(textureID, tex2d);
                }
                this._instance.setSlotTexture(slotName, textureID);
              }
              _destroySkeletonInfo(skeletonCache) {
                if (skeletonCache && this._skeletonInfo) {
                  skeletonCache.destroySkeleton(this._skeletonInfo.assetUUID);
                  this._skeletonInfo = null;
                }
              }
              _applyLayer() {
                if (this._debugRenderer) {
                  this._debugRenderer.node.layer = this.node.layer;
                }
              }
            }, _class6.SpineSocket = SpineSocket, _class6.AnimationCacheMode = AnimationCacheMode, _class6), (_initializer3 = applyDecoratedInitializer(_class5.prototype, "_skeletonData", [serializable], function () {
              return null;
            }), _initializer4 = applyDecoratedInitializer(_class5.prototype, "defaultSkin", [serializable], function () {
              return '';
            }), _initializer5 = applyDecoratedInitializer(_class5.prototype, "defaultAnimation", [serializable], function () {
              return '';
            }), _initializer6 = applyDecoratedInitializer(_class5.prototype, "_premultipliedAlpha", [serializable], function () {
              return true;
            }), _initializer7 = applyDecoratedInitializer(_class5.prototype, "_timeScale", [serializable], function () {
              return 1;
            }), _initializer8 = applyDecoratedInitializer(_class5.prototype, "_preCacheMode", [serializable], function () {
              return AnimationCacheMode.UNSET;
            }), _initializer9 = applyDecoratedInitializer(_class5.prototype, "_cacheMode", [serializable], function () {
              return AnimationCacheMode.REALTIME;
            }), _initializer10 = applyDecoratedInitializer(_class5.prototype, "_sockets", [serializable], function () {
              return [];
            }), _initializer11 = applyDecoratedInitializer(_class5.prototype, "_useTint", [serializable], function () {
              return false;
            }), _initializer12 = applyDecoratedInitializer(_class5.prototype, "_debugMesh", [serializable], function () {
              return false;
            }), _initializer13 = applyDecoratedInitializer(_class5.prototype, "_debugBones", [serializable], function () {
              return false;
            }), _initializer14 = applyDecoratedInitializer(_class5.prototype, "_debugSlots", [serializable], function () {
              return false;
            }), _initializer15 = applyDecoratedInitializer(_class5.prototype, "_enableBatch", [serializable], function () {
              return false;
            }), _applyDecoratedDescriptor(_class5.prototype, "skeletonData", [_dec4], Object.getOwnPropertyDescriptor(_class5.prototype, "skeletonData"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_defaultSkinIndex", [_dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "_defaultSkinIndex"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_animationIndex", [_dec6], Object.getOwnPropertyDescriptor(_class5.prototype, "_animationIndex"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "defaultCacheMode", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "defaultCacheMode"), _class5.prototype), _initializer16 = applyDecoratedInitializer(_class5.prototype, "loop", [serializable], function () {
              return true;
            }), _applyDecoratedDescriptor(_class5.prototype, "sockets", [_dec8], Object.getOwnPropertyDescriptor(_class5.prototype, "sockets"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "customMaterial", [override, _dec9], Object.getOwnPropertyDescriptor(_class5.prototype, "customMaterial"), _class5.prototype)), _class5)) || _class4);
            legacyCC.internal.SpineSkeleton = Skeleton;

            const _slotColor = new Color(0, 0, 255, 255);
            const _boneColor = new Color(255, 0, 0, 255);
            const _originColor = new Color(0, 255, 0, 255);
            const _meshColor = new Color(255, 255, 0, 255);
            let _nodeR;
            let _nodeG;
            let _nodeB;
            let _nodeA;
            let _accessor = null;
            let _tintAccessor = null;
            let _premultipliedAlpha = false;
            let _useTint = false;
            const _byteStrideOneColor = getAttributeStride(vfmtPosUvColor4B);
            const _byteStrideTwoColor = getAttributeStride(vfmtPosUvTwoColor4B);
            const DEBUG_TYPE_REGION = 0;
            const DEBUG_TYPE_MESH = 1;
            const tempVecPos = new Vec3(0, 0, 0);
            function _getSlotMaterial(blendMode, comp) {
              let src;
              let dst;
              switch (blendMode) {
                case 1:
                  src = _premultipliedAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
                  dst = BlendFactor.ONE;
                  break;
                case 2:
                  src = BlendFactor.DST_COLOR;
                  dst = BlendFactor.ONE_MINUS_SRC_ALPHA;
                  break;
                case 3:
                  src = BlendFactor.ONE;
                  dst = BlendFactor.ONE_MINUS_SRC_COLOR;
                  break;
                case 0:
                default:
                  src = _premultipliedAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
                  dst = BlendFactor.ONE_MINUS_SRC_ALPHA;
                  break;
              }
              return comp.getMaterialForBlendAndTint(src, dst, _useTint ? SpineMaterialType.TWO_COLORED : SpineMaterialType.COLORED_TEXTURED);
            }
            const simple = {
              vCount: 32767,
              ensureAccessor(useTint) {
                let accessor = useTint ? _tintAccessor : _accessor;
                if (!accessor) {
                  const device = director.root.device;
                  const batcher = director.root.batcher2D;
                  const attributes = useTint ? vfmtPosUvTwoColor4B : vfmtPosUvColor4B;
                  if (useTint) {
                    accessor = _tintAccessor = new StaticVBAccessor(device, attributes, this.vCount);
                    batcher.registerBufferAccessor(Number.parseInt('SPINETINT', 36), _tintAccessor);
                  } else {
                    accessor = _accessor = new StaticVBAccessor(device, attributes, this.vCount);
                    batcher.registerBufferAccessor(Number.parseInt('SPINE', 36), _accessor);
                  }
                }
                return accessor;
              },
              createData(comp) {
                let rd = comp.renderData;
                if (!rd) {
                  const useTint = comp.useTint || comp.isAnimationCached();
                  const accessor = this.ensureAccessor(useTint);
                  rd = RenderData.add(useTint ? vfmtPosUvTwoColor4B : vfmtPosUvColor4B, accessor);
                }
                return rd;
              },
              updateRenderData(comp, batcher) {
                const skeleton = comp._skeleton;
                if (skeleton) {
                  updateComponentRenderData(comp);
                }
              }
            };
            function updateComponentRenderData(comp, batcher) {
              comp.drawList.reset();
              if (comp.color.a === 0) return;
              comp._updateColor();
              _premultipliedAlpha = comp.premultipliedAlpha;
              _useTint = comp.useTint || comp.isAnimationCached();
              if (comp.isAnimationCached()) {
                cacheTraverse(comp);
              } else {
                realTimeTraverse(comp);
              }
              const rd = comp.renderData;
              const accessor = _useTint ? _tintAccessor : _accessor;
              comp.syncAttachedNode();
              if (rd.vertexCount > 0 || rd.indexCount > 0) accessor.getMeshBuffer(rd.chunk.bufferId).setDirty();
            }
            function realTimeTraverse(comp) {
              var _comp$_vBuffer, _comp$_iBuffer;
              const floatStride = (comp.useTint ? _byteStrideTwoColor : _byteStrideOneColor) / Float32Array.BYTES_PER_ELEMENT;
              const model = comp.updateRenderData();
              const vc = model.vCount;
              const ic = model.iCount;
              if (vc < 1 || ic < 1) return;
              const rd = comp.renderData;
              if (rd.vertexCount !== vc || rd.indexCount !== ic) {
                rd.resize(vc, ic);
                rd.indices = new Uint16Array(ic);
                comp._vLength = vc * Float32Array.BYTES_PER_ELEMENT * floatStride;
                comp._vBuffer = new Uint8Array(rd.chunk.vb.buffer, rd.chunk.vb.byteOffset, Float32Array.BYTES_PER_ELEMENT * rd.chunk.vb.length);
                comp._iLength = Uint16Array.BYTES_PER_ELEMENT * ic;
                comp._iBuffer = new Uint8Array(rd.indices.buffer);
              }
              const vbuf = rd.chunk.vb;
              const vPtr = model.vPtr;
              const iPtr = model.iPtr;
              const ibuf = rd.indices;
              const HEAPU8 = spineLib.wasmUtil.wasm.HEAPU8;
              (_comp$_vBuffer = comp._vBuffer) === null || _comp$_vBuffer === void 0 ? void 0 : _comp$_vBuffer.set(HEAPU8.subarray(vPtr, vPtr + comp._vLength), 0);
              (_comp$_iBuffer = comp._iBuffer) === null || _comp$_iBuffer === void 0 ? void 0 : _comp$_iBuffer.set(HEAPU8.subarray(iPtr, iPtr + comp._iLength), 0);
              const chunkOffset = rd.chunk.vertexOffset;
              for (let i = 0; i < ic; i++) ibuf[i] += chunkOffset;
              const data = model.getData();
              const count = data.size();
              let indexOffset = 0;
              let indexCount = 0;
              for (let i = 0; i < count; i += 6) {
                indexCount = data.get(i + 3);
                const material = _getSlotMaterial(data.get(i + 4), comp);
                const textureID = data.get(i + 5);
                comp.requestDrawData(material, textureID, indexOffset, indexCount);
                indexOffset += indexCount;
              }
              if (comp.enableBatch) {
                const worldMat = comp.node.worldMatrix;
                let index = 0;
                for (let i = 0; i < vc; i++) {
                  index = i * floatStride;
                  tempVecPos.x = vbuf[index];
                  tempVecPos.y = vbuf[index + 1];
                  tempVecPos.transformMat4(worldMat);
                  vbuf[index] = tempVecPos.x;
                  vbuf[index + 1] = tempVecPos.y;
                  vbuf[index + 2] = 0;
                }
              }
              const graphics = comp._debugRenderer;
              const locSkeleton = comp._skeleton;
              if (graphics && (comp.debugBones || comp.debugSlots || comp.debugMesh)) {
                graphics.clear();
                const debugShapes = comp.getDebugShapes();
                const shapeCount = debugShapes.size();
                for (let i = 0; i < shapeCount; i++) {
                  const shape = debugShapes.get(i);
                  if (shape.type === DEBUG_TYPE_REGION && comp.debugSlots) {
                    graphics.strokeColor = _slotColor;
                    const vertexFloatOffset = shape.vOffset * floatStride;
                    const vertexFloatCount = shape.vCount * floatStride;
                    graphics.moveTo(vbuf[vertexFloatOffset], vbuf[vertexFloatOffset + 1]);
                    for (let ii = vertexFloatOffset + floatStride, nn = vertexFloatOffset + vertexFloatCount; ii < nn; ii += floatStride) {
                      graphics.lineTo(vbuf[ii], vbuf[ii + 1]);
                    }
                    graphics.close();
                    graphics.stroke();
                  } else if (shape.type === DEBUG_TYPE_MESH && comp.debugMesh) {
                    graphics.strokeColor = _meshColor;
                    const iCount = shape.iCount;
                    const iOffset = shape.iOffset;
                    for (let ii = iOffset, nn = iOffset + iCount; ii < nn; ii += 3) {
                      const v1 = ibuf[ii] * floatStride;
                      const v2 = ibuf[ii + 1] * floatStride;
                      const v3 = ibuf[ii + 2] * floatStride;
                      graphics.moveTo(vbuf[v1], vbuf[v1 + 1]);
                      graphics.lineTo(vbuf[v2], vbuf[v2 + 1]);
                      graphics.lineTo(vbuf[v3], vbuf[v3 + 1]);
                      graphics.close();
                      graphics.stroke();
                    }
                  }
                }
                if (comp.debugBones) {
                  graphics.strokeColor = _boneColor;
                  graphics.fillColor = _slotColor;
                  for (let i = 0, n = locSkeleton.bones.length; i < n; i++) {
                    const bone = locSkeleton.bones[i];
                    const x = bone.data.length * bone.a + bone.worldX;
                    const y = bone.data.length * bone.c + bone.worldY;
                    graphics.moveTo(bone.worldX, bone.worldY);
                    graphics.lineTo(x, y);
                    graphics.stroke();
                    graphics.circle(bone.worldX, bone.worldY, Math.PI * 1.5);
                    graphics.fill();
                    if (i === 0) {
                      graphics.fillColor = _originColor;
                    }
                  }
                }
              }
            }
            function cacheTraverse(comp) {
              const model = comp.updateRenderData();
              if (!model) return;
              const vc = model.vCount;
              const ic = model.iCount;
              if (vc < 1 || ic < 1) return;
              const rd = comp.renderData;
              if (rd.vertexCount !== vc || rd.indexCount !== ic) {
                rd.resize(vc, ic);
                rd.indices = new Uint16Array(ic);
              }
              const vbuf = rd.chunk.vb;
              const vUint8Buf = new Uint8Array(vbuf.buffer, vbuf.byteOffset, Float32Array.BYTES_PER_ELEMENT * vbuf.length);
              vUint8Buf.set(model.vData);
              const nodeColor = comp.color;
              if (nodeColor._val !== 0xffffffff || _premultipliedAlpha) {
                _nodeR = nodeColor.r / 255;
                _nodeG = nodeColor.g / 255;
                _nodeB = nodeColor.b / 255;
                _nodeA = nodeColor.a / 255;
                for (let i = 0; i < vc; i++) {
                  const index = i * _byteStrideTwoColor + 5 * Float32Array.BYTES_PER_ELEMENT;
                  const R = vUint8Buf[index];
                  const G = vUint8Buf[index + 1];
                  const B = vUint8Buf[index + 2];
                  const A = vUint8Buf[index + 3];
                  const fA = A * _nodeA;
                  const multiplier = _premultipliedAlpha ? fA / 255 : 1;
                  vUint8Buf[index] = Math.floor(multiplier * R * _nodeR);
                  vUint8Buf[index + 1] = Math.floor(multiplier * G * _nodeG);
                  vUint8Buf[index + 2] = Math.floor(multiplier * B * _nodeB);
                  vUint8Buf[index + 3] = Math.floor(fA);
                  vUint8Buf[index + 4] = Math.floor(vUint8Buf[index + 4] * _nodeR);
                  vUint8Buf[index + 5] = Math.floor(vUint8Buf[index + 5] * _nodeG);
                  vUint8Buf[index + 6] = Math.floor(vUint8Buf[index + 6] * _nodeB);
                  vUint8Buf[index + 7] = _premultipliedAlpha ? 255 : 0;
                }
              }
              const iUint16Buf = rd.indices;
              iUint16Buf.set(model.iData);
              const chunkOffset = rd.chunk.vertexOffset;
              for (let i = 0; i < ic; i++) {
                iUint16Buf[i] += chunkOffset;
              }
              const meshes = model.meshes;
              const count = meshes.length;
              let indexOffset = 0;
              let indexCount = 0;
              for (let i = 0; i < count; i++) {
                const mesh = meshes[i];
                const material = _getSlotMaterial(mesh.blendMode, comp);
                const textureID = mesh.textureID;
                indexCount = mesh.iCount;
                comp.requestDrawData(material, textureID, indexOffset, indexCount);
                indexOffset += indexCount;
              }
              const floatStride = _byteStrideTwoColor / Float32Array.BYTES_PER_ELEMENT;
              if (comp.enableBatch) {
                const worldMat = comp.node.worldMatrix;
                let index = 0;
                for (let i = 0; i < vc; i++) {
                  index = i * floatStride;
                  tempVecPos.x = vbuf[index];
                  tempVecPos.y = vbuf[index + 1];
                  tempVecPos.z = 0;
                  tempVecPos.transformMat4(worldMat);
                  vbuf[index] = tempVecPos.x;
                  vbuf[index + 1] = tempVecPos.y;
                  vbuf[index + 2] = tempVecPos.z;
                }
              }
            }
            legacyCC.internal.SpineAssembler = simple;

            const simpleSpineAssembler = {
              getAssembler() {
                return simple;
              }
            };
            Skeleton.Assembler = simpleSpineAssembler;

            const spine = globalThis.spine;
            spine.EventType = spineLib.EventType;
            const VertexEffectDelegate = spine.VertexEffectDelegate;
            let ATTACHMENT_TYPE;
            (function (ATTACHMENT_TYPE) {
              ATTACHMENT_TYPE[ATTACHMENT_TYPE["REGION"] = 0] = "REGION";
              ATTACHMENT_TYPE[ATTACHMENT_TYPE["BOUNDING_BOX"] = 1] = "BOUNDING_BOX";
              ATTACHMENT_TYPE[ATTACHMENT_TYPE["MESH"] = 2] = "MESH";
              ATTACHMENT_TYPE[ATTACHMENT_TYPE["SKINNED_MESH"] = 3] = "SKINNED_MESH";
            })(ATTACHMENT_TYPE || (ATTACHMENT_TYPE = {}));
            ccenum(ATTACHMENT_TYPE);
            let AnimationEventType;
            (function (AnimationEventType) {
              AnimationEventType[AnimationEventType["START"] = 0] = "START";
              AnimationEventType[AnimationEventType["INTERRUPT"] = 1] = "INTERRUPT";
              AnimationEventType[AnimationEventType["END"] = 2] = "END";
              AnimationEventType[AnimationEventType["DISPOSE"] = 3] = "DISPOSE";
              AnimationEventType[AnimationEventType["COMPLETE"] = 4] = "COMPLETE";
              AnimationEventType[AnimationEventType["EVENT"] = 5] = "EVENT";
            })(AnimationEventType || (AnimationEventType = {}));
            ccenum(AnimationEventType);
            legacyCC.internal.SpineAnimationEventType = AnimationEventType;

            var index = /*#__PURE__*/Object.freeze({
                __proto__: null,
                timeScale: timeScale,
                get AnimationCacheMode () { return AnimationCacheMode; },
                get DefaultSkinsEnum () { return DefaultSkinsEnum; },
                get DefaultAnimsEnum () { return DefaultAnimsEnum; },
                get SpineMaterialType () { return SpineMaterialType; },
                SpineSocket: SpineSocket,
                Skeleton: Skeleton,
                SkeletonData: SkeletonData,
                simpleSpineAssembler: simpleSpineAssembler,
                spine: spine,
                VertexEffectDelegate: VertexEffectDelegate,
                get ATTACHMENT_TYPE () { return ATTACHMENT_TYPE; },
                get AnimationEventType () { return AnimationEventType; }
            });
            exports('sp', index);

        })
    };
}));

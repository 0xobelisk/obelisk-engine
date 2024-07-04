System.register("q-bundled:///fs/cocos/spine/skeleton-cache.js", ["./track-entry-listeners.js", "../2d/renderer/vertex-format.js", "./lib/instantiated.js", "./lib/spine-core.js", "../core/platform/debug.js"], function (_export, _context) {
  "use strict";

  var TrackEntryListeners, vfmtPosUvColor4B, vfmtPosUvTwoColor4B, getAttributeStride, SPINE_WASM, spine, warn, _class5, MaxCacheTime, FrameTime, spineTag, _useTint, _byteStrideOneColor, _byteStrideTwoColor, FrameBoneInfo, SpineModel, SpineDrawItem, AnimationCache, SkeletonCache;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                             in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                                                                                                                                                                                                             use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                                                                                                                                                                                                             of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                                                                                                                                                                                                             subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                             all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                            */
  return {
    setters: [function (_trackEntryListenersJs) {
      TrackEntryListeners = _trackEntryListenersJs.TrackEntryListeners;
    }, function (_dRendererVertexFormatJs) {
      vfmtPosUvColor4B = _dRendererVertexFormatJs.vfmtPosUvColor4B;
      vfmtPosUvTwoColor4B = _dRendererVertexFormatJs.vfmtPosUvTwoColor4B;
      getAttributeStride = _dRendererVertexFormatJs.getAttributeStride;
    }, function (_libInstantiatedJs) {
      SPINE_WASM = _libInstantiatedJs.SPINE_WASM;
    }, function (_libSpineCoreJs) {
      spine = _libSpineCoreJs.default;
    }, function (_corePlatformDebugJs) {
      warn = _corePlatformDebugJs.warn;
    }],
    execute: function () {
      MaxCacheTime = 30;
      FrameTime = 1 / 60;
      spineTag = SPINE_WASM;
      _useTint = true;
      _byteStrideOneColor = getAttributeStride(vfmtPosUvColor4B);
      _byteStrideTwoColor = getAttributeStride(vfmtPosUvTwoColor4B);
      _export("FrameBoneInfo", FrameBoneInfo = function FrameBoneInfo() {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.worldX = 0;
        this.worldY = 0;
      });
      SpineModel = function SpineModel() {
        this.vCount = 0;
        this.iCount = 0;
        this.vData = null;
        this.iData = null;
        this.meshes = [];
      };
      SpineDrawItem = function SpineDrawItem() {
        this.iCount = 0;
        this.blendMode = 0;
        this.textureID = 0;
      };
      _export("AnimationCache", AnimationCache = /*#__PURE__*/function () {
        function AnimationCache(data) {
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
          this._instance = new spine.SkeletonInstance();
          this._instance.isCache = true;
          this._skeletonData = data;
          this._skeleton = this._instance.initSkeleton(data);
          this._instance.setUseTint(_useTint);
        }
        var _proto = AnimationCache.prototype;
        _proto.init = function init(skeletonInfo, animationName) {
          this._inited = true;
          this._animationName = animationName;
          this._skeletonInfo = skeletonInfo;
        };
        _proto.setSkin = function setSkin(skinName) {
          if (this._skeleton) this._skeleton.setSkinByName(skinName);
          this._instance.setSkin(skinName);
        };
        _proto.setAnimation = function setAnimation(animationName) {
          var animations = this._skeletonData.animations;
          var animation = null;
          animations.forEach(function (element) {
            if (element.name === animationName) {
              animation = element;
            }
          });
          if (!animation) {
            warn("find no animation named " + animationName + " !!!");
            return;
          }
          this._maxFrameIdex = Math.floor(animation.duration / FrameTime);
          if (this._maxFrameIdex <= 0) this._maxFrameIdex = 1;
          this._instance.setAnimation(0, animationName, false);
        };
        _proto.updateToFrame = function updateToFrame(frameIdx) {
          if (!this._inited) return;
          this.begin();
          if (!this.needToUpdate(frameIdx)) return;
          do {
            // Solid update frame rate 1/60.
            this._frameIdx++;
            this.totalTime += FrameTime;
            this._instance.updateAnimation(FrameTime);
            var model = this._instance.updateRenderData();
            this.updateRenderData(this._frameIdx, model);
            if (this._frameIdx >= this._maxFrameIdex) {
              this.isCompleted = true;
            }
          } while (this.needToUpdate(frameIdx));
        };
        _proto.getFrame = function getFrame(frameIdx) {
          var index = frameIdx % this._maxFrameIdex;
          return this.frames[index];
        };
        _proto.invalidAnimationFrames = function invalidAnimationFrames() {
          this._curIndex = -1;
          this._isCompleted = false;
          this.frames.length = 0;
        };
        _proto.updateRenderData = function updateRenderData(index, model) {
          var vc = model.vCount;
          var ic = model.iCount;
          var floatStride = (_useTint ? _byteStrideTwoColor : _byteStrideOneColor) / Float32Array.BYTES_PER_ELEMENT;
          var vUint8Buf = new Uint8Array(Float32Array.BYTES_PER_ELEMENT * floatStride * vc);
          var iUint16Buf = new Uint16Array(ic);
          var HEAPU8 = spine.wasmUtil.wasm.HEAPU8;
          var vPtr = model.vPtr;
          var vLength = vc * Float32Array.BYTES_PER_ELEMENT * floatStride;
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          vUint8Buf.set(HEAPU8.subarray(vPtr, vPtr + vLength));
          var iPtr = model.iPtr;
          var iLength = Uint16Array.BYTES_PER_ELEMENT * ic;
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          var iUint8Buf = new Uint8Array(iUint16Buf.buffer);
          iUint8Buf.set(HEAPU8.subarray(iPtr, iPtr + iLength));
          var modelData = new SpineModel();
          modelData.vCount = vc;
          modelData.iCount = ic;
          modelData.vData = vUint8Buf;
          modelData.iData = iUint16Buf;
          var data = model.getData();
          var count = data.size();
          for (var i = 0; i < count; i += 6) {
            var meshData = new SpineDrawItem();
            meshData.iCount = data.get(i + 3);
            meshData.blendMode = data.get(i + 4);
            meshData.textureID = data.get(i + 5);
            modelData.meshes.push(meshData);
          }
          var bones = this._skeleton.bones;
          var boneInfosArray = [];
          bones.forEach(function (bone) {
            var boneInfo = new FrameBoneInfo();
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
        };
        _proto.begin = function begin() {
          if (!this._invalid) return;
          var skeletonInfo = this._skeletonInfo;
          var preAnimationCache = skeletonInfo === null || skeletonInfo === void 0 ? void 0 : skeletonInfo.curAnimationCache;
          if (preAnimationCache && preAnimationCache !== this) {
            if (this._privateMode) {
              // Private cache mode just invalid pre animation frame.
              preAnimationCache.invalidAllFrame();
            } else {
              // If pre animation not finished, play it to the end.
              preAnimationCache.updateToFrame(0);
            }
          }
          var listener = skeletonInfo === null || skeletonInfo === void 0 ? void 0 : skeletonInfo.listener;
          this._instance.setAnimation(0, this._animationName, false);
          this.bind(listener);

          // record cur animation cache
          skeletonInfo.curAnimationCache = this;
          this._frameIdx = -1;
          this.isCompleted = false;
          this.totalTime = 0;
          this._invalid = false;
        };
        _proto.end = function end() {
          if (!this.needToUpdate()) {
            // clear cur animation cache
            this._skeletonInfo.curAnimationCache = null;
            this.frames.length = this._frameIdx + 1;
            this.isCompleted = true;
            this.unbind(this._skeletonInfo.listener);
          }
        };
        _proto.bind = function bind(listener) {
          var _this = this;
          var completeHandle = function completeHandle(entry) {
            if (entry && entry.animation.name === _this._animationName) {
              _this.isCompleted = true;
            }
          };
          listener.complete = completeHandle;
        };
        _proto.unbind = function unbind(listener) {
          listener.complete = null;
        };
        _proto.needToUpdate = function needToUpdate(toFrameIdx) {
          return !this.isCompleted && this.totalTime < MaxCacheTime && (toFrameIdx === undefined || this._frameIdx < toFrameIdx);
        };
        _proto.isInited = function isInited() {
          return this._inited;
        };
        _proto.isInvalid = function isInvalid() {
          return this._invalid;
        };
        _proto.invalidAllFrame = function invalidAllFrame() {
          this.isCompleted = false;
          this._invalid = true;
        };
        _proto.enableCacheAttachedInfo = function enableCacheAttachedInfo() {
          if (!this._enableCacheAttachedInfo) {
            this._enableCacheAttachedInfo = true;
            this.invalidAllFrame();
          }
        }

        // Clear texture quote.
        ;
        _proto.clear = function clear() {
          this._inited = false;
          this.invalidAllFrame();
        };
        _proto.destroy = function destroy() {
          if (this._instance) {
            this._instance.destroy();
            this._instance = null;
          }
        };
        _createClass(AnimationCache, [{
          key: "skeleton",
          get: function get() {
            return this._skeleton;
          }
        }]);
        return AnimationCache;
      }());
      SkeletonCache = /*#__PURE__*/function () {
        function SkeletonCache() {
          this._privateMode = void 0;
          this._skeletonCache = void 0;
          //for shared mode only
          this._animationPool = void 0;
          //for shared mode only, key is asset uuid and value is ref count.
          this._sharedCacheMap = new Map();
          this._privateMode = false;
          this._animationPool = {};
          this._skeletonCache = {};
        }
        var _proto2 = SkeletonCache.prototype;
        _proto2.enablePrivateMode = function enablePrivateMode() {
          this._privateMode = true;
        };
        _proto2.clear = function clear() {
          this._animationPool = {};
          this._skeletonCache = {};
        };
        _proto2.invalidAnimationCache = function invalidAnimationCache(uuid) {
          var skeletonInfo = this._skeletonCache[uuid];
          var skeleton = skeletonInfo && skeletonInfo.skeleton;
          if (!skeleton) return;
          var animationsCache = skeletonInfo.animationsCache;
          for (var aniKey in animationsCache) {
            var animationCache = animationsCache[aniKey];
            animationCache.invalidAllFrame();
          }
        };
        _proto2.destroySkeleton = function destroySkeleton(assetUuid) {
          var _this2 = this;
          if (!this._privateMode) {
            var refCount = this._sharedCacheMap.get(assetUuid);
            if (refCount) {
              refCount -= 1;
              if (refCount > 0) {
                this._sharedCacheMap.set(assetUuid, refCount);
                return;
              }
              this._sharedCacheMap["delete"](assetUuid);
            }
          }
          var sharedOperate = function sharedOperate(aniKey, animationCache) {
            _this2._animationPool[assetUuid + "#" + aniKey] = animationCache;
            animationCache.clear();
          };
          var privateOperate = function privateOperate(aniKey, animationCache) {
            animationCache.destroy();
          };
          var operate = this._privateMode ? privateOperate : sharedOperate;
          var skeletonInfo = this._skeletonCache[assetUuid];
          if (!skeletonInfo) return;
          var animationsCache = skeletonInfo.animationsCache;
          for (var aniKey in animationsCache) {
            // Clear cache texture, and put cache into pool.
            // No need to create TypedArray next time.
            var animationCache = animationsCache[aniKey];
            if (!animationCache) continue;
            operate(aniKey, animationCache);
          }
          if (skeletonInfo.skeleton) {
            spine.wasmUtil.destroySpineSkeleton(skeletonInfo.skeleton);
          }
          delete this._skeletonCache[assetUuid];
        };
        _proto2.createSkeletonInfo = function createSkeletonInfo(skeletonAsset) {
          var uuid = skeletonAsset.uuid;
          var runtimeData = skeletonAsset.getRuntimeData();
          if (!this._privateMode) {
            var refCount = this._sharedCacheMap.get(uuid);
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
          var skeleton = new spine.Skeleton(runtimeData);
          var clipper = null;
          var state = null;
          var listener = new TrackEntryListeners();
          var skeletonInfo = this._skeletonCache[uuid] = {
            skeleton: skeleton,
            clipper: clipper,
            state: state,
            listener: listener,
            // Cache all kinds of animation frame.
            // When skeleton is dispose, clear all animation cache.
            animationsCache: {},
            curAnimationCache: null,
            assetUUID: uuid
          };
          return skeletonInfo;
        };
        _proto2.getSkeletonInfo = function getSkeletonInfo(skeletonAsset) {
          var uuid = skeletonAsset.uuid;
          return this._skeletonCache[uuid];
        };
        _proto2.getAnimationCache = function getAnimationCache(uuid, animationName) {
          var skeletonInfo = this._skeletonCache[uuid];
          if (!skeletonInfo) return null;
          var animationsCache = skeletonInfo.animationsCache;
          return animationsCache[animationName];
        };
        _proto2.initAnimationCache = function initAnimationCache(uuid, data, animationName) {
          var spData = data.getRuntimeData();
          if (!spData) return null;
          var skeletonInfo = this._skeletonCache[uuid];
          var skeleton = skeletonInfo && skeletonInfo.skeleton;
          if (!skeleton) return null;
          var animationsCache = skeletonInfo.animationsCache;
          var animationCache = animationsCache[animationName];
          if (!animationCache) {
            // If cache exist in pool, then just use it.
            var poolKey = uuid + "#" + animationName;
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
        };
        _proto2.destroyCachedAnimations = function destroyCachedAnimations(uuid) {
          if (uuid) {
            var animationPool = this._animationPool;
            for (var _key in animationPool) {
              if (_key.includes(uuid)) {
                animationPool[_key].destroy();
                delete animationPool[_key];
              }
            }
          } else {
            var _animationPool = this._animationPool;
            for (var _key2 in _animationPool) {
              _animationPool[_key2].destroy();
              delete _animationPool[_key2];
            }
          }
        };
        return SkeletonCache;
      }();
      _class5 = SkeletonCache;
      SkeletonCache.FrameTime = FrameTime;
      SkeletonCache.sharedCache = new _class5();
      _export("default", SkeletonCache);
    }
  };
});
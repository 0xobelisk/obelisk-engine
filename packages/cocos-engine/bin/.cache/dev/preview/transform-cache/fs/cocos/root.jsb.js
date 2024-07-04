System.register("q-bundled:///fs/cocos/root.jsb.js", ["./core/global-exports.js", "./gfx/index.js", "./core/index.js", "./rendering/index.js"], function (_export, _context) {
  "use strict";

  var legacyCC, deviceManager, settings, Settings, warnID, Pool, macro, log, ForwardPipeline, Root, LightType, rootProto, DummyPipelineEvent, oldOnGlobalPipelineStateChanged, oldFrameMove, oldSetPipeline;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_gfxIndexJs) {
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_coreIndexJs) {
      settings = _coreIndexJs.settings;
      Settings = _coreIndexJs.Settings;
      warnID = _coreIndexJs.warnID;
      Pool = _coreIndexJs.Pool;
      macro = _coreIndexJs.macro;
      log = _coreIndexJs.log;
    }, function (_renderingIndexJs) {
      ForwardPipeline = _renderingIndexJs.ForwardPipeline;
    }],
    execute: function () {
      _export("Root", Root = jsb.Root);
      (function (LightType) {
        LightType[LightType["DIRECTIONAL"] = 0] = "DIRECTIONAL";
        LightType[LightType["SPHERE"] = 1] = "SPHERE";
        LightType[LightType["SPOT"] = 2] = "SPOT";
        LightType[LightType["POINT"] = 3] = "POINT";
        LightType[LightType["RANGED_DIRECTIONAL"] = 4] = "RANGED_DIRECTIONAL";
        LightType[LightType["UNKNOWN"] = 5] = "UNKNOWN";
      })(LightType || (LightType = {}));
      /**
       * @zh
       * Root描述信息
       */
      rootProto = Root.prototype;
      rootProto._createBatcher2D = function () {
        if (!this._batcher && legacyCC.internal.Batcher2D) {
          this._batcher = new legacyCC.internal.Batcher2D(this);
          if (!this._batcher.initialize()) {
            this._batcher = null;
            this.destroy();
            return;
          }
          this._batcher._nativeObj = this.getBatcher2D();
        }
      };
      Object.defineProperty(rootProto, 'batcher2D', {
        configurable: true,
        enumerable: true,
        get: function get() {
          return this._batcher;
        }
      });
      Object.defineProperty(rootProto, 'dataPoolManager', {
        configurable: true,
        enumerable: true,
        get: function get() {
          return this._dataPoolMgr;
        }
      });
      Object.defineProperty(rootProto, 'pipelineEvent', {
        configurable: true,
        enumerable: true,
        get: function get() {
          return this._pipelineEvent;
        }
      });
      DummyPipelineEvent = /*#__PURE__*/function () {
        function DummyPipelineEvent() {}
        var _proto = DummyPipelineEvent.prototype;
        _proto.on = function on(type, callback, target, once) {};
        _proto.once = function once(type, callback, target) {};
        _proto.off = function off(type, callback, target) {};
        _proto.emit = function emit(type, arg0, arg1, arg2, arg3, arg4) {};
        _proto.targetOff = function targetOff(typeOrTarget) {};
        _proto.removeAll = function removeAll(typeOrTarget) {};
        _proto.hasEventListener = function hasEventListener(type, callback, target) {
          return false;
        };
        return DummyPipelineEvent;
      }();
      rootProto._ctor = function (device) {
        this._device = device;
        this._dataPoolMgr = legacyCC.internal.DataPoolManager && new legacyCC.internal.DataPoolManager(device);
        this._modelPools = new Map();
        this._lightPools = new Map();
        this._batcher = null;
        this._pipelineEvent = new DummyPipelineEvent();
        this._registerListeners();
      };
      rootProto.initialize = function (info) {
        var _this$_dataPoolMgr;
        // TODO:
        this._initialize(deviceManager.swapchain);
        var customJointTextureLayouts = settings.querySettings(Settings.Category.ANIMATION, 'customJointTextureLayouts') || [];
        (_this$_dataPoolMgr = this._dataPoolMgr) === null || _this$_dataPoolMgr === void 0 ? void 0 : _this$_dataPoolMgr.jointTexturePool.registerCustomTextureLayouts(customJointTextureLayouts);
      };
      rootProto.createModel = function (ModelCtor) {
        var p = this._modelPools.get(ModelCtor);
        if (!p) {
          this._modelPools.set(ModelCtor, new Pool(function () {
            return new ModelCtor();
          }, 10, function (obj) {
            return obj.destroy();
          }));
          p = this._modelPools.get(ModelCtor);
        }
        var model = p.alloc();
        model.initialize();
        return model;
      };
      rootProto.destroyModel = function (m) {
        var p = this._modelPools.get(m.constructor);
        if (p) {
          p.free(m);
          if (m.scene) {
            m.scene.removeModel(m);
          }
        } else {
          warnID(1300, m.constructor.name);
        }
        m.destroy();
      };
      rootProto.createLight = function (LightCtor) {
        var l = this._lightPools.get(LightCtor);
        if (!l) {
          this._lightPools.set(LightCtor, new Pool(function () {
            return new LightCtor();
          }, 4, function (obj) {
            return obj.destroy();
          }));
          l = this._lightPools.get(LightCtor);
        }
        var light = l.alloc();
        light.initialize();
        return light;
      };
      rootProto.destroyLight = function (l) {
        if (l.scene) {
          switch (l.type) {
            case LightType.DIRECTIONAL:
              l.scene.removeDirectionalLight(l);
              break;
            case LightType.SPHERE:
              l.scene.removeSphereLight(l);
              break;
            case LightType.SPOT:
              l.scene.removeSpotLight(l);
              break;
            case LightType.POINT:
              l.scene.removePointLight(l);
              break;
            case LightType.RANGED_DIRECTIONAL:
              l.scene.removeRangedDirLight(l);
              break;
            default:
              break;
          }
        }
        l.destroy();
      };
      rootProto.recycleLight = function (l) {
        var p = this._lightPools.get(l.constructor);
        if (p) {
          p.free(l);
          if (l.scene) {
            switch (l.type) {
              case LightType.DIRECTIONAL:
                l.scene.removeDirectionalLight(l);
                break;
              case LightType.SPHERE:
                l.scene.removeSphereLight(l);
                break;
              case LightType.SPOT:
                l.scene.removeSpotLight(l);
                break;
              case LightType.POINT:
                l.scene.removePointLight(l);
                break;
              case LightType.RANGED_DIRECTIONAL:
                l.scene.removeRangedDirLight(l);
                break;
              default:
                break;
            }
          }
        }
      };
      rootProto._onDirectorBeforeCommit = function () {
        legacyCC.director.emit(legacyCC.Director.EVENT_BEFORE_COMMIT);
      };
      rootProto._onDirectorBeforeRender = function () {
        legacyCC.director.emit(legacyCC.Director.EVENT_BEFORE_RENDER);
      };
      rootProto._onDirectorAfterRender = function () {
        legacyCC.director.emit(legacyCC.Director.EVENT_AFTER_RENDER);
      };
      rootProto._onDirectorPipelineChanged = function () {
        var scene = legacyCC.director.getScene();
        if (scene) {
          scene._activate();
        }
      };
      oldOnGlobalPipelineStateChanged = rootProto.onGlobalPipelineStateChanged;
      rootProto.onGlobalPipelineStateChanged = function () {
        oldOnGlobalPipelineStateChanged.call(this);
        var builder = legacyCC.rendering.getCustomPipeline(macro.CUSTOM_PIPELINE_NAME);
        if (builder) {
          if (typeof builder.onGlobalPipelineStateChanged === 'function') {
            builder.onGlobalPipelineStateChanged();
          }
        }
      };
      oldFrameMove = rootProto.frameMove;
      rootProto.frameMove = function (deltaTime) {
        oldFrameMove.call(this, deltaTime, legacyCC.director.getTotalFrames());
      };
      oldSetPipeline = rootProto.setRenderPipeline;
      rootProto.setRenderPipeline = function (pipeline) {
        var ppl;
        if (macro.CUSTOM_PIPELINE_NAME !== '' && legacyCC.rendering && this.usesCustomPipeline) {
          legacyCC.rendering.createCustomPipeline();
          ppl = oldSetPipeline.call(this, null);
          log('Using custom pipeline');
        } else {
          if (!pipeline) {
            // pipeline should not be created in C++, ._ctor need to be triggered
            pipeline = new ForwardPipeline();
            pipeline.init();
          }
          ppl = oldSetPipeline.call(this, pipeline);
        }
        this._createBatcher2D();
        return ppl;
      };
      rootProto.addBatch = function (batch) {
        console.error('The Draw Batch class is implemented differently in the native platform and does not support this interface.');
      };
      rootProto.removeBatch = function (batch) {
        console.error('The Draw Batch class is implemented differently in the native platform and does not support this interface.');
      };
      rootProto.removeBatches = function () {
        console.error('The Draw Batch class is implemented differently in the native platform and does not support this interface.');
      };
    }
  };
});
System.register("q-bundled:///fs/cocos/particle/renderer/particle-system-renderer-base.js", ["../../gfx/index.js", "../models/particle-batch-model.js", "../enum.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var deviceManager, Feature, ParticleBatchModel, RenderMode, cclegacy, ParticleSystemRendererBase;
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
    setters: [function (_gfxIndexJs) {
      deviceManager = _gfxIndexJs.deviceManager;
      Feature = _gfxIndexJs.Feature;
    }, function (_modelsParticleBatchModelJs) {
      ParticleBatchModel = _modelsParticleBatchModelJs.default;
    }, function (_enumJs) {
      RenderMode = _enumJs.RenderMode;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      _export("ParticleSystemRendererBase", ParticleSystemRendererBase = /*#__PURE__*/function () {
        function ParticleSystemRendererBase(info) {
          this._particleSystem = null;
          this._model = null;
          this._renderInfo = null;
          this._vertAttrs = [];
          this._useInstance = void 0;
          this._renderInfo = info;
          if (!deviceManager.gfxDevice.hasFeature(Feature.INSTANCED_ARRAYS)) {
            this._useInstance = false;
          } else {
            this._useInstance = true;
          }
        }
        var _proto = ParticleSystemRendererBase.prototype;
        _proto.getUseInstance = function getUseInstance() {
          return this._useInstance;
        };
        _proto.getInfo = function getInfo() {
          return this._renderInfo;
        };
        _proto.onInit = function onInit(ps) {
          this._particleSystem = ps;
        };
        _proto.onEnable = function onEnable() {
          if (!this._particleSystem) {
            return;
          }
          this.attachToScene();
          var model = this._model;
          if (model) {
            model.node = model.transform = this._particleSystem.node;
          }
        };
        _proto.onDisable = function onDisable() {
          this.detachFromScene();
        };
        _proto.onDestroy = function onDestroy() {
          if (this._model) {
            cclegacy.director.root.destroyModel(this._model);
            this._model = null;
          }
        };
        _proto.attachToScene = function attachToScene() {
          if (this._model) {
            var _this$_particleSystem;
            if (this._model.scene) {
              this.detachFromScene();
            }
            (_this$_particleSystem = this._particleSystem) === null || _this$_particleSystem === void 0 ? void 0 : _this$_particleSystem._getRenderScene().addModel(this._model);
          }
        };
        _proto.detachFromScene = function detachFromScene() {
          if (this._model && this._model.scene) {
            this._model.scene.removeModel(this._model);
          }
        };
        _proto.setVertexAttributes = function setVertexAttributes() {
          if (this._model) {
            this.updateVertexAttrib();
            this._model.setVertexAttributes(this._renderInfo.renderMode === RenderMode.Mesh ? this._renderInfo.mesh : null, this._vertAttrs);
          }
        };
        _proto.clear = function clear() {
          if (this._model) this._model.enabled = false;
        };
        _proto.getModel = function getModel() {
          return this._model;
        };
        _proto._initModel = function _initModel() {
          if (!this._model && this._particleSystem) {
            this._model = cclegacy.director.root.createModel(ParticleBatchModel);
            this._model.setCapacity(this._particleSystem.capacity);
            this._model.visFlags = this._particleSystem.visibility;
          }
        };
        _proto.updateTrailMaterial = function updateTrailMaterial() {};
        _proto.getDefaultTrailMaterial = function getDefaultTrailMaterial() {
          return null;
        };
        _createClass(ParticleSystemRendererBase, [{
          key: "model",
          get:
          /**
           * @engineInternal
           */
          function get() {
            return this._model;
          }
        }]);
        return ParticleSystemRendererBase;
      }());
    }
  };
});
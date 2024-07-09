System.register("q-bundled:///fs/cocos/rendering/post-process/passes/base-pass.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../asset/assets/index.js", "../../custom/define.js", "../utils/pass-context.js", "../../../gfx/index.js", "../../define.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, Material, getCameraUniqueID, passContext, Address, Filter, Format, SamplerInfo, supportsRGBA16HalfFloatTexture, cclegacy, macro, _BasePassID, _pointSampler, _samplerPointInfo, BasePass;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function getRTFormatBeforeToneMapping(ppl) {
    var useFloatOutput = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
    return ppl.pipelineSceneData.isHDR && useFloatOutput && supportsRGBA16HalfFloatTexture(ppl.device) ? Format.RGBA16F : Format.RGBA8;
  }
  function forceEnableFloatOutput(ppl) {
    var enabled = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
    if (ppl.pipelineSceneData.isHDR && !enabled) {
      var supportFloatOutput = supportsRGBA16HalfFloatTexture(ppl.device);
      ppl.setMacroBool('CC_USE_FLOAT_OUTPUT', supportFloatOutput);
      macro.ENABLE_FLOAT_OUTPUT = supportFloatOutput;
      enabled = supportFloatOutput;
    }
    return enabled;
  }
  function disablePostProcessForDebugView() {
    var debugView = cclegacy.director.root.debugView;
    return debugView.singleMode > 0;
  }
  function getShadowMapSampler() {
    if (!_pointSampler) {
      var director = cclegacy.director;
      var pipeline = director.root.pipeline;
      var device = pipeline.device;
      _pointSampler = device.getSampler(_samplerPointInfo);
    }
    return _pointSampler || undefined;
  }
  _export({
    getRTFormatBeforeToneMapping: getRTFormatBeforeToneMapping,
    forceEnableFloatOutput: forceEnableFloatOutput,
    disablePostProcessForDebugView: disablePostProcessForDebugView,
    getShadowMapSampler: getShadowMapSampler
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_gfxIndexJs) {
      Address = _gfxIndexJs.Address;
      Filter = _gfxIndexJs.Filter;
      Format = _gfxIndexJs.Format;
      SamplerInfo = _gfxIndexJs.SamplerInfo;
    }, function (_defineJs) {
      supportsRGBA16HalfFloatTexture = _defineJs.supportsRGBA16HalfFloatTexture;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      macro = _coreIndexJs.macro;
    }],
    execute: function () {
      _BasePassID = 0;
      _pointSampler = null;
      _samplerPointInfo = new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP);
      _export("BasePass", BasePass = /*#__PURE__*/function () {
        function BasePass() {
          this.name = void 0;
          this.effectName = 'pipeline/post-process/blit-screen';
          this._id = 0;
          this.context = passContext;
          this.getCameraUniqueID = getCameraUniqueID;
          // private _materialMap: Map<Camera, Material> = new Map()
          this._material = void 0;
          this.enable = true;
          this.outputNames = [];
          this.lastPass = void 0;
          this.enableInAllEditorCamera = false;
          this._id = _BasePassID++;
        }
        var _proto = BasePass.prototype;
        _proto.slotName = function slotName(camera, index) {
          if (index === void 0) {
            index = 0;
          }
          var name = this.outputNames[index] + this.name;
          return name + "_" + this._id + "_" + getCameraUniqueID(camera);
        };
        _proto.checkEnable = function checkEnable(camera) {
          return this.enable;
        };
        _proto.renderProfiler = function renderProfiler(camera) {
          if (passContext.isFinalCamera && !EDITOR) {
            passContext.pass.showStatistics = true;
          }
        };
        _createClass(BasePass, [{
          key: "material",
          get: function get() {
            var effectReloaded = false;
            // if (EDITOR && this._material) {
            //     const effect = builtinResMgr.get(this.effectName);
            //     effectReloaded = effect && this._material.effectAsset !== effect;
            // }

            if (!this._material || effectReloaded) {
              var mat = new Material();
              mat._uuid = this.name + "-" + this.effectName + "-material";
              mat.initialize({
                effectName: this.effectName
              });
              this._material = mat;
            }
            var material;
            // if (EDITOR) {
            //     if (passUtils.camera) {
            //         material = this._materialMap.get(passUtils.camera);
            //         if (!material || material.parent !== this._material) {
            //             material = new MaterialInstance({
            //                 parent: this._material,
            //             });
            //             this._materialMap.set(passUtils.camera, material);
            //         }
            //     }
            // }

            return material || this._material;
          }
        }]);
        return BasePass;
      }());
    }
  };
});
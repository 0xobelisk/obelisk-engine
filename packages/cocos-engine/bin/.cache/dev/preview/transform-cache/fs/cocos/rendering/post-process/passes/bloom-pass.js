System.register("q-bundled:///fs/cocos/rendering/post-process/passes/bloom-pass.js", ["../../../core/index.js", "../../../gfx/index.js", "../../custom/define.js", "../utils/pass-context.js", "./setting-pass.js", "../components/index.js", "./base-pass.js"], function (_export, _context) {
  "use strict";

  var Vec4, Format, getCameraUniqueID, passContext, getSetting, SettingPass, Bloom, disablePostProcessForDebugView, MAX_BLOOM_FILTER_PASS_NUM, BLOOM_DOWNSAMPLEPASS_INDEX, BLOOM_UPSAMPLEPASS_INDEX, BLOOM_COMBINEPASS_INDEX, BloomPass;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreIndexJs) {
      Vec4 = _coreIndexJs.Vec4;
    }, function (_gfxIndexJs) {
      Format = _gfxIndexJs.Format;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_settingPassJs) {
      getSetting = _settingPassJs.getSetting;
      SettingPass = _settingPassJs.SettingPass;
    }, function (_componentsIndexJs) {
      Bloom = _componentsIndexJs.Bloom;
    }, function (_basePassJs) {
      disablePostProcessForDebugView = _basePassJs.disablePostProcessForDebugView;
    }],
    execute: function () {
      MAX_BLOOM_FILTER_PASS_NUM = 6;
      BLOOM_DOWNSAMPLEPASS_INDEX = 1;
      BLOOM_UPSAMPLEPASS_INDEX = BLOOM_DOWNSAMPLEPASS_INDEX + MAX_BLOOM_FILTER_PASS_NUM;
      BLOOM_COMBINEPASS_INDEX = BLOOM_UPSAMPLEPASS_INDEX + MAX_BLOOM_FILTER_PASS_NUM;
      _export("BloomPass", BloomPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(BloomPass, _SettingPass);
        function BloomPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'BloomPass';
          _this.effectName = 'pipeline/post-process/bloom';
          _this.outputNames = ['BloomColor'];
          _this._hdrInputName = '';
          return _this;
        }
        var _proto = BloomPass.prototype;
        _proto.checkEnable = function checkEnable(camera) {
          var enable = _SettingPass.prototype.checkEnable.call(this, camera);
          if (disablePostProcessForDebugView()) {
            enable = false;
          }
          return enable;
        };
        _proto.render = function render(camera, ppl) {
          var cameraID = getCameraUniqueID(camera);
          var cameraName = "Camera" + cameraID;
          var passViewport = passContext.passViewport;
          passContext.clearBlack();
          passContext.material = this.material;
          var setting = this.setting;
          var input = this.lastPass.slotName(camera, 0);
          var output = "BLOOM_PREFILTER_COLOR" + cameraID;
          // prefilter pass
          var shadingScale = 1 / 2;
          var enableAlphaMask = setting.enableAlphaMask;
          var useHDRIntensity = setting.useHdrIlluminance;
          passContext.material.setProperty('texSize', new Vec4(useHDRIntensity, 0, setting.threshold, enableAlphaMask), 0);
          passContext.updatePassViewPort(shadingScale).addRenderPass('bloom-prefilter', "bloom-prefilter" + cameraID).setPassInput(input, 'outputResultMap').setPassInput(this._hdrInputName, 'hdrInputMap').addRasterView(output, Format.RGBA8).blitScreen(0).version();

          // down sampler pass
          for (var i = 0; i < setting.iterations; ++i) {
            var texSize = new Vec4(passViewport.width, passViewport.height, 0, 0);
            var bloomPassDownSampleRTName = "dsBloomPassDownSampleColor" + cameraName + i;
            var downSamplerInput = i === 0 ? output : "dsBloomPassDownSampleColor" + cameraName + (i - 1);
            passContext.material.setProperty('texSize', texSize, BLOOM_DOWNSAMPLEPASS_INDEX + i);
            shadingScale /= 2;
            passContext.updatePassViewPort(shadingScale).addRenderPass("bloom-upsample" + i, "bloom-upsample" + i + cameraID).setPassInput(downSamplerInput, 'bloomTexture').addRasterView(bloomPassDownSampleRTName, Format.RGBA8).blitScreen(BLOOM_DOWNSAMPLEPASS_INDEX + i).version();
          }

          // up sampler pass
          for (var _i = 0; _i < setting.iterations; ++_i) {
            var _texSize = new Vec4(passViewport.width, passViewport.height, 0, 0);
            var bloomPassUpSampleRTName = "dsBloomPassUpSampleColor" + cameraName + (setting.iterations - 1 - _i);
            var upSamplerInput = _i === 0 ? "dsBloomPassDownSampleColor" + cameraName + (setting.iterations - 1) : "dsBloomPassUpSampleColor" + cameraName + (setting.iterations - _i);
            passContext.material.setProperty('texSize', _texSize, BLOOM_UPSAMPLEPASS_INDEX + _i);
            shadingScale *= 2;
            passContext.updatePassViewPort(shadingScale).addRenderPass("bloom-downsample" + _i, "bloom-downsample" + _i + cameraID).setPassInput(upSamplerInput, 'bloomTexture').addRasterView(bloomPassUpSampleRTName, Format.RGBA8).blitScreen(BLOOM_UPSAMPLEPASS_INDEX + _i).version();
          }

          // combine Pass
          passContext.material.setProperty('texSize', new Vec4(0, 0, 0, setting.intensity), BLOOM_COMBINEPASS_INDEX);
          passContext.updatePassViewPort().addRenderPass("bloom-combine", "bloom-combine" + cameraID).setPassInput(input, 'outputResultMap').setPassInput("dsBloomPassUpSampleColor" + cameraName + 0, 'bloomTexture').addRasterView(this.slotName(camera, 0), Format.RGBA8).blitScreen(BLOOM_COMBINEPASS_INDEX).version();
        };
        _createClass(BloomPass, [{
          key: "setting",
          get: function get() {
            return getSetting(Bloom);
          }
        }, {
          key: "hdrInputName",
          set: function set(name) {
            this._hdrInputName = name;
          }
        }]);
        return BloomPass;
      }(SettingPass));
    }
  };
});
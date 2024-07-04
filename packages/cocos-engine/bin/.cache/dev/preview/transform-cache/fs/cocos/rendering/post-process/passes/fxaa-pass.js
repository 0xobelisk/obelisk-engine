System.register("q-bundled:///fs/cocos/rendering/post-process/passes/fxaa-pass.js", ["../../../core/index.js", "../../../gfx/index.js", "../../custom/define.js", "../utils/pass-context.js", "./setting-pass.js", "../components/fxaa.js"], function (_export, _context) {
  "use strict";

  var Vec4, Format, getCameraUniqueID, passContext, getSetting, SettingPass, FXAA, FxaaPass;
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
    }, function (_componentsFxaaJs) {
      FXAA = _componentsFxaaJs.FXAA;
    }],
    execute: function () {
      _export("FxaaPass", FxaaPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(FxaaPass, _SettingPass);
        function FxaaPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'FxaaPass';
          _this.effectName = 'pipeline/post-process/fxaa-hq';
          _this.outputNames = ['FxaaColor'];
          return _this;
        }
        var _proto = FxaaPass.prototype;
        _proto.render = function render(camera, ppl) {
          var cameraID = getCameraUniqueID(camera);
          passContext.clearBlack();
          passContext.material = this.material;
          var setting = this.setting;
          var input = this.lastPass.slotName(camera, 0);
          var output = this.slotName(camera);
          passContext.updatePassViewPort();
          var width = passContext.passViewport.width;
          var height = passContext.passViewport.height;
          passContext.material.setProperty('texSize', new Vec4(width, height, 1.0 / width, 1.0 / height), 0);
          passContext.addRenderPass('fxaa', "fxaa" + cameraID).setPassInput(input, 'sceneColorMap').addRasterView(output, Format.RGBA8).blitScreen(0).version();
        };
        _createClass(FxaaPass, [{
          key: "setting",
          get: function get() {
            return getSetting(FXAA);
          }
        }]);
        return FxaaPass;
      }(SettingPass));
    }
  };
});
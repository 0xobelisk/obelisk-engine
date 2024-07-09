System.register("q-bundled:///fs/cocos/rendering/post-process/passes/color-grading-pass.js", ["../../../core/index.js", "../../../gfx/index.js", "../../custom/define.js", "../utils/pass-context.js", "./setting-pass.js", "../components/index.js", "./base-pass.js"], function (_export, _context) {
  "use strict";

  var Vec2, Vec4, ClearFlagBit, Format, getCameraUniqueID, passContext, getSetting, SettingPass, ColorGrading, disablePostProcessForDebugView, ColorGradingPass;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      Vec4 = _coreIndexJs.Vec4;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Format = _gfxIndexJs.Format;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_settingPassJs) {
      getSetting = _settingPassJs.getSetting;
      SettingPass = _settingPassJs.SettingPass;
    }, function (_componentsIndexJs) {
      ColorGrading = _componentsIndexJs.ColorGrading;
    }, function (_basePassJs) {
      disablePostProcessForDebugView = _basePassJs.disablePostProcessForDebugView;
    }],
    execute: function () {
      _export("ColorGradingPass", ColorGradingPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(ColorGradingPass, _SettingPass);
        function ColorGradingPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'ColorGradingPass';
          _this.effectName = 'pipeline/post-process/color-grading';
          _this.outputNames = ['ColorGrading'];
          return _this;
        }
        var _proto = ColorGradingPass.prototype;
        _proto.checkEnable = function checkEnable(camera) {
          var enable = _SettingPass.prototype.checkEnable.call(this, camera);
          if (disablePostProcessForDebugView()) {
            enable = false;
          }
          return enable;
        };
        _proto.render = function render(camera, ppl) {
          var cameraID = getCameraUniqueID(camera);
          passContext.clearFlag = ClearFlagBit.COLOR;
          Vec4.set(passContext.clearColor, 0, 0, 0, 1);
          passContext.material = this.material;
          var setting = this.setting;
          this.material.setProperty('colorGradingMap', setting.colorGradingMap);
          this.material.setProperty('contribute', setting.contribute);
          var textureSize = setting.colorGradingMap ? new Vec2(setting.colorGradingMap.width, setting.colorGradingMap.height) : new Vec2(1.0, 1.0);
          this.material.setProperty('lutTextureSize', textureSize);
          var input = this.lastPass.slotName(camera, 0);
          var slot = this.slotName(camera, 0);
          var isSquareMap = setting.colorGradingMap && setting.colorGradingMap.width === setting.colorGradingMap.height;
          var passName = isSquareMap ? 'color-grading-8x8' : 'color-grading-nx1';
          var passIndx = isSquareMap ? 1 : 0;
          passContext.updatePassViewPort().addRenderPass(passName, "color-grading" + cameraID).setPassInput(input, 'sceneColorMap').addRasterView(slot, Format.RGBA8).blitScreen(passIndx).version();
        };
        _createClass(ColorGradingPass, [{
          key: "setting",
          get: function get() {
            return getSetting(ColorGrading);
          }
        }]);
        return ColorGradingPass;
      }(SettingPass));
    }
  };
});
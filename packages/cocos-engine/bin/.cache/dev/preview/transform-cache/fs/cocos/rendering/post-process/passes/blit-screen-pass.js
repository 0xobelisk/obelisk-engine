System.register("q-bundled:///fs/cocos/rendering/post-process/passes/blit-screen-pass.js", ["../../../gfx/index.js", "../../custom/define.js", "../utils/pass-context.js", "./setting-pass.js", "../components/blit-screen.js"], function (_export, _context) {
  "use strict";

  var Format, getCameraUniqueID, passContext, getSetting, SettingPass, BlitScreen, outputNames, BlitScreenPass;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_gfxIndexJs) {
      Format = _gfxIndexJs.Format;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_settingPassJs) {
      getSetting = _settingPassJs.getSetting;
      SettingPass = _settingPassJs.SettingPass;
    }, function (_componentsBlitScreenJs) {
      BlitScreen = _componentsBlitScreenJs.BlitScreen;
    }],
    execute: function () {
      outputNames = ['BlitScreenColor0', 'BlitScreenColor1'];
      _export("BlitScreenPass", BlitScreenPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(BlitScreenPass, _SettingPass);
        function BlitScreenPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'BlitScreenPass';
          _this.effectName = 'pipeline/post-process/blit-screen';
          _this.outputName = outputNames[0];
          return _this;
        }
        var _proto = BlitScreenPass.prototype;
        _proto.slotName = function slotName(camera, index) {
          if (index === void 0) {
            index = 0;
          }
          return this.outputName;
        };
        _proto.checkEnable = function checkEnable(camera) {
          var enable = _SettingPass.prototype.checkEnable.call(this, camera);
          var setting = this.setting;
          return enable && setting.activeMaterials.length > 0;
        };
        _proto.render = function render(camera, ppl) {
          var cameraID = getCameraUniqueID(camera);
          passContext.clearBlack();
          var input0 = this.lastPass.slotName(camera, 0);
          var slotIdx = 0;
          var materials = this.setting.activeMaterials;
          for (var i = 0; i < materials.length; i++) {
            var material = materials[i];
            passContext.material = material;
            var slotName = "" + outputNames[slotIdx] + cameraID;
            slotIdx = ++slotIdx % 2;
            passContext.updatePassViewPort().addRenderPass('post-process', "" + this.name + cameraID + slotIdx).setPassInput(input0, 'inputTexture').addRasterView(slotName, Format.RGBA8).blitScreen(0).version();
            input0 = slotName;
          }
          this.outputName = input0;
        };
        _createClass(BlitScreenPass, [{
          key: "setting",
          get: function get() {
            return getSetting(BlitScreen);
          }
        }]);
        return BlitScreenPass;
      }(SettingPass));
    }
  };
});
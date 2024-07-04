System.register("q-bundled:///fs/cocos/rendering/post-process/passes/fsr-pass.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../gfx/index.js", "../../../render-scene/scene/index.js", "../../custom/define.js", "../utils/pass-context.js", "../components/fsr.js", "./setting-pass.js"], function (_export, _context) {
  "use strict";

  var EDITOR, clamp, Vec4, Format, CameraUsage, getCameraUniqueID, passContext, FSR, getSetting, SettingPass, tempVec4, FSRPass;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      clamp = _coreIndexJs.clamp;
      Vec4 = _coreIndexJs.Vec4;
    }, function (_gfxIndexJs) {
      Format = _gfxIndexJs.Format;
    }, function (_renderSceneSceneIndexJs) {
      CameraUsage = _renderSceneSceneIndexJs.CameraUsage;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_componentsFsrJs) {
      FSR = _componentsFsrJs.FSR;
    }, function (_settingPassJs) {
      getSetting = _settingPassJs.getSetting;
      SettingPass = _settingPassJs.SettingPass;
    }],
    execute: function () {
      tempVec4 = new Vec4();
      _export("FSRPass", FSRPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(FSRPass, _SettingPass);
        function FSRPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'FSRPass';
          _this.effectName = 'pipeline/post-process/fsr';
          _this.outputNames = ['FSRColor'];
          return _this;
        }
        var _proto = FSRPass.prototype;
        _proto.checkEnable = function checkEnable(camera) {
          var enable = _SettingPass.prototype.checkEnable.call(this, camera);
          if (EDITOR && camera.cameraUsage === CameraUsage.PREVIEW) {
            enable = false;
          }
          return enable;
        };
        _proto.render = function render(camera, ppl) {
          var cameraID = getCameraUniqueID(camera);
          passContext.material = this.material;
          passContext.clearBlack();
          passContext.updatePassViewPort(1 / passContext.shadingScale, 0);
          var inputWidth = Math.floor(passContext.passViewport.width * passContext.shadingScale);
          var inputHeight = Math.floor(passContext.passViewport.height * passContext.shadingScale);
          var outWidth = Math.floor(passContext.passViewport.width);
          var outHeight = Math.floor(passContext.passViewport.height);
          var setting = this.setting;
          this.material.setProperty('fsrParams', tempVec4.set(clamp(1.0 - setting.sharpness, 0.02, 0.98), 0, 0, 0));
          this.material.setProperty('texSize', tempVec4.set(inputWidth, inputHeight, outWidth, outHeight));
          var input0 = this.lastPass.slotName(camera, 0);
          var easu = "FSR_EASU" + cameraID;
          passContext.addRenderPass('post-process', "CameraFSR_EASU_Pass" + cameraID).setPassInput(input0, 'outputResultMap').addRasterView(easu, Format.RGBA8).blitScreen(0).version();
          var slot0 = this.slotName(camera, 0);
          passContext.addRenderPass('post-process', "CameraFSR_RCAS_Pass" + cameraID).setPassInput(easu, 'outputResultMap').addRasterView(slot0, Format.RGBA8).blitScreen(1).version();
        };
        _createClass(FSRPass, [{
          key: "setting",
          get: function get() {
            return getSetting(FSR);
          }
        }]);
        return FSRPass;
      }(SettingPass));
    }
  };
});
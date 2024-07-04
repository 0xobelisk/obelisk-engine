System.register("q-bundled:///fs/cocos/rendering/post-process/passes/fxaa-pass.js", ["../../../core/index.js", "../../../gfx/index.js", "../../custom/define.js", "../utils/pass-context.js", "./setting-pass.js", "../components/fxaa.js"], function (_export, _context) {
  "use strict";

  var Vec4, Format, getCameraUniqueID, passContext, getSetting, SettingPass, FXAA, FxaaPass;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export("FxaaPass", void 0);
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
      _export("FxaaPass", FxaaPass = class FxaaPass extends SettingPass {
        constructor(...args) {
          super(...args);
          this.name = 'FxaaPass';
          this.effectName = 'pipeline/post-process/fxaa-hq';
          this.outputNames = ['FxaaColor'];
        }
        get setting() {
          return getSetting(FXAA);
        }
        render(camera, ppl) {
          const cameraID = getCameraUniqueID(camera);
          passContext.clearBlack();
          passContext.material = this.material;
          const setting = this.setting;
          const input = this.lastPass.slotName(camera, 0);
          const output = this.slotName(camera);
          passContext.updatePassViewPort();
          const width = passContext.passViewport.width;
          const height = passContext.passViewport.height;
          passContext.material.setProperty('texSize', new Vec4(width, height, 1.0 / width, 1.0 / height), 0);
          passContext.addRenderPass('fxaa', `fxaa${cameraID}`).setPassInput(input, 'sceneColorMap').addRasterView(output, Format.RGBA8).blitScreen(0).version();
        }
      });
    }
  };
});
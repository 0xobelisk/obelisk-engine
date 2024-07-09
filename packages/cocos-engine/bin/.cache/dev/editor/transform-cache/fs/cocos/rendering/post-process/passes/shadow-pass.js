System.register("q-bundled:///fs/cocos/rendering/post-process/passes/shadow-pass.js", ["../../custom/define.js", "../utils/pass-context.js", "./base-pass.js"], function (_export, _context) {
  "use strict";

  var buildShadowPasses, getCameraUniqueID, passContext, BasePass, ShadowPass;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export("ShadowPass", void 0);
  return {
    setters: [function (_customDefineJs) {
      buildShadowPasses = _customDefineJs.buildShadowPasses;
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_basePassJs) {
      BasePass = _basePassJs.BasePass;
    }],
    execute: function () {
      _export("ShadowPass", ShadowPass = class ShadowPass extends BasePass {
        constructor(...args) {
          super(...args);
          this.name = 'ShadowPass';
          this.mainLightShadows = [];
          this.spotLightShadows = [];
        }
        render(camera, ppl) {
          passContext.shadowPass = this;
          const cameraID = getCameraUniqueID(camera);
          const cameraName = `Camera${cameraID}`;
          const shadowInfo = buildShadowPasses(cameraName, camera, ppl);
          this.mainLightShadows = shadowInfo.mainLightShadowNames;
          this.spotLightShadows = shadowInfo.spotLightShadowNames;
        }
      });
    }
  };
});
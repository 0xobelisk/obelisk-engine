System.register("q-bundled:///fs/cocos/render-scene/scene/reflection-probe.jsb.js", ["../../gfx/index.js", "./camera.js"], function (_export, _context) {
  "use strict";

  var ClearFlagBit, SKYBOX_FLAG, ProbeClearFlag, ProbeType, ReflectionProbe, reflectionProbeProto;
  _export({
    ProbeClearFlag: void 0,
    ProbeType: void 0
  });
  return {
    setters: [function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
    }, function (_cameraJs) {
      SKYBOX_FLAG = _cameraJs.SKYBOX_FLAG;
    }],
    execute: function () {
      (function (ProbeClearFlag) {
        ProbeClearFlag[ProbeClearFlag["SKYBOX"] = SKYBOX_FLAG | ClearFlagBit.DEPTH_STENCIL] = "SKYBOX";
        ProbeClearFlag[ProbeClearFlag["SOLID_COLOR"] = ClearFlagBit.ALL] = "SOLID_COLOR";
      })(ProbeClearFlag || _export("ProbeClearFlag", ProbeClearFlag = {}));
      (function (ProbeType) {
        ProbeType[ProbeType["CUBE"] = 0] = "CUBE";
        ProbeType[ProbeType["PLANAR"] = 1] = "PLANAR";
      })(ProbeType || _export("ProbeType", ProbeType = {}));
      _export("ReflectionProbe", ReflectionProbe = jsb.ReflectionProbe);
      reflectionProbeProto = jsb.ReflectionProbe.prototype;
      reflectionProbeProto._ctor = function (id) {
        this._probeId = id;
      };
    }
  };
});
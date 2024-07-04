System.register("q-bundled:///fs/cocos/3d/reflection-probe/reflection-probe-enum.js", [], function (_export, _context) {
  "use strict";

  var ReflectionProbeType;
  _export("ReflectionProbeType", void 0);
  return {
    setters: [],
    execute: function () {
      (function (ReflectionProbeType) {
        ReflectionProbeType[ReflectionProbeType["NONE"] = 0] = "NONE";
        ReflectionProbeType[ReflectionProbeType["BAKED_CUBEMAP"] = 1] = "BAKED_CUBEMAP";
        ReflectionProbeType[ReflectionProbeType["PLANAR_REFLECTION"] = 2] = "PLANAR_REFLECTION";
        ReflectionProbeType[ReflectionProbeType["BLEND_PROBES"] = 3] = "BLEND_PROBES";
        ReflectionProbeType[ReflectionProbeType["BLEND_PROBES_AND_SKYBOX"] = 4] = "BLEND_PROBES_AND_SKYBOX";
      })(ReflectionProbeType || _export("ReflectionProbeType", ReflectionProbeType = {}));
    }
  };
});
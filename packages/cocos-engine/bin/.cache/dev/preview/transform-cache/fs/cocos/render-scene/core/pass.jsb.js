System.register("q-bundled:///fs/cocos/render-scene/core/pass.jsb.js", ["../../core/index.js", "../../core/math/math-native-ext.js"], function (_export, _context) {
  "use strict";

  var Mat3, Mat4, Quat, Vec2, Vec3, Vec4, MathType, BatchingSchemes, Pass, proto;
  _export("BatchingSchemes", void 0);
  return {
    setters: [function (_coreIndexJs) {
      Mat3 = _coreIndexJs.Mat3;
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
    }, function (_coreMathMathNativeExtJs) {
      MathType = _coreMathMathNativeExtJs.MathType;
    }],
    execute: function () {
      (function (BatchingSchemes) {
        BatchingSchemes[BatchingSchemes["NONE"] = 0] = "NONE";
        BatchingSchemes[BatchingSchemes["INSTANCING"] = 1] = "INSTANCING";
      })(BatchingSchemes || _export("BatchingSchemes", BatchingSchemes = {}));
      _export("Pass", Pass = jsb.Pass);
      proto = Pass.prototype;
      proto.getUniform = function getUniform(handle, out) {
        var val = this._getUniform(handle);
        if (typeof val === 'object') {
          if (val.type) {
            switch (val.type) {
              case MathType.VEC2:
                Vec2.copy(out, val);
                break;
              case MathType.VEC3:
                Vec3.copy(out, val);
                break;
              case MathType.VEC4:
                Vec4.copy(out, val);
                break;
              case MathType.COLOR:
                out.x = val.x;
                out.y = val.y;
                out.z = val.z;
                out.w = val.w;
                break;
              case MathType.MAT3:
                Mat3.copy(out, val);
                break;
              case MathType.MAT4:
                Mat4.copy(out, val);
                break;
              case MathType.QUATERNION:
                Quat.copy(out, val);
                break;
              default:
                console.error("getUniform, unknown object type: " + val.type);
                break;
            }
          } else {
            console.error("getUniform, unknown object: " + val);
          }
        } else if (typeof val === 'number') {
          out = val;
        } else {
          console.error("getUniform, not supported: " + val);
        }
        return out;
      };
    }
  };
});
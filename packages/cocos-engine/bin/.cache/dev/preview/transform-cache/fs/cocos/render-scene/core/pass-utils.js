System.register("q-bundled:///fs/cocos/render-scene/core/pass-utils.js", ["../../gfx/index.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var Type, Color, Mat3, Mat4, Vec2, Vec3, Vec4, Quat, warnID, _type2reader, _type2writer, _type2validator, typeMask, bindingMask, countMask, offsetMask, genHandle, getTypeFromHandle, getBindingFromHandle, getCountFromHandle, getOffsetFromHandle, customizeType, type2reader, type2writer, type2validator, defaultValues;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                             in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                                                                                                                                                                                                             use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                                                                                                                                                                                                             of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                                                                                                                                                                                                             subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                             all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                            */
  /**
   * @en Gets the default values for the given type of uniform
   * @zh 根据指定的 Uniform 类型来获取默认值
   * @param type The type of the uniform
   */
  function getDefaultFromType(type) {
    switch (type) {
      case Type.BOOL:
      case Type.INT:
      case Type.UINT:
      case Type.FLOAT:
        return defaultValues[0];
      case Type.BOOL2:
      case Type.INT2:
      case Type.UINT2:
      case Type.FLOAT2:
        return defaultValues[1];
      case Type.BOOL4:
      case Type.INT4:
      case Type.UINT4:
      case Type.FLOAT4:
        return defaultValues[2];
      case Type.MAT4:
        return defaultValues[3];
      case Type.SAMPLER2D:
        return 'default-texture';
      case Type.SAMPLER_CUBE:
        return 'default-cube-texture';
      case Type.SAMPLER2D_ARRAY:
        return 'default-array-texture';
      case Type.SAMPLER3D:
        return 'default-3d-texture';
      default:
    }
    return defaultValues[0];
  }
  function getStringFromType(type) {
    switch (type) {
      case Type.SAMPLER2D:
        return '-texture';
      case Type.SAMPLER_CUBE:
        return '-cube-texture';
      case Type.SAMPLER2D_ARRAY:
        return '-array-texture';
      case Type.SAMPLER3D:
        return '-3d-texture';
      default:
        return '-unknown';
    }
  }

  /**
   * @en Combination of preprocess macros
   * @zh 预处理宏组合
   */

  /**
   * @en Override the preprocess macros
   * @zh 覆写预处理宏
   * @param target Target preprocess macros to be overridden
   * @param source Preprocess macros used for override
   */
  function overrideMacros(target, source) {
    var entries = Object.entries(source);
    var isDifferent = false;
    for (var i = 0; i < entries.length; i++) {
      if (target[entries[i][0]] !== entries[i][1]) {
        target[entries[i][0]] = entries[i][1];
        isDifferent = true;
      }
    }
    return isDifferent;
  }
  _export({
    getDefaultFromType: getDefaultFromType,
    getStringFromType: getStringFromType,
    overrideMacros: overrideMacros
  });
  return {
    setters: [function (_gfxIndexJs) {
      Type = _gfxIndexJs.Type;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Mat3 = _coreIndexJs.Mat3;
      Mat4 = _coreIndexJs.Mat4;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      Quat = _coreIndexJs.Quat;
      warnID = _coreIndexJs.warnID;
    }],
    execute: function () {
      typeMask = 0xfc000000; //  6 bits => 64 types
      bindingMask = 0x03f00000; //  6 bits => 64 bindings
      countMask = 0x000ff000; //  8 bits => 256 vectors
      offsetMask = 0x00000fff; // 12 bits => 1024 vectors
      _export("genHandle", genHandle = function genHandle(binding, type, count, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return type << 26 & typeMask | binding << 20 & bindingMask | count << 12 & countMask | offset & offsetMask;
      });
      _export("getTypeFromHandle", getTypeFromHandle = function getTypeFromHandle(handle) {
        return (handle & typeMask) >>> 26;
      });
      _export("getBindingFromHandle", getBindingFromHandle = function getBindingFromHandle(handle) {
        return (handle & bindingMask) >>> 20;
      });
      _export("getCountFromHandle", getCountFromHandle = function getCountFromHandle(handle) {
        return (handle & countMask) >>> 12;
      });
      _export("getOffsetFromHandle", getOffsetFromHandle = function getOffsetFromHandle(handle) {
        return handle & offsetMask;
      });
      _export("customizeType", customizeType = function customizeType(handle, type) {
        return handle & ~typeMask | type << 26 & typeMask;
      });
      /**
       * @en Vector type uniforms
       * @zh 向量类型 uniform
       */
      _export("type2reader", type2reader = (_type2reader = {}, _type2reader[Type.UNKNOWN] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return warnID(12010, idx);
      }, _type2reader[Type.INT] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return a[idx];
      }, _type2reader[Type.INT2] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec2.fromArray(v, a, idx);
      }, _type2reader[Type.INT3] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec3.fromArray(v, a, idx);
      }, _type2reader[Type.INT4] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec4.fromArray(v, a, idx);
      }, _type2reader[Type.FLOAT] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return a[idx];
      }, _type2reader[Type.FLOAT2] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec2.fromArray(v, a, idx);
      }, _type2reader[Type.FLOAT3] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec3.fromArray(v, a, idx);
      }, _type2reader[Type.FLOAT4] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec4.fromArray(v, a, idx);
      }, _type2reader[Type.MAT3] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Mat3.fromArray(v, a, idx);
      }, _type2reader[Type.MAT4] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Mat4.fromArray(v, a, idx);
      }, _type2reader));
      _export("type2writer", type2writer = (_type2writer = {}, _type2writer[Type.UNKNOWN] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return warnID(12010, idx);
      }, _type2writer[Type.INT] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return a[idx] = v;
      }, _type2writer[Type.INT2] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec2.toArray(a, v, idx);
      }, _type2writer[Type.INT3] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec3.toArray(a, v, idx);
      }, _type2writer[Type.INT4] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec4.toArray(a, v, idx);
      }, _type2writer[Type.FLOAT] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return a[idx] = v;
      }, _type2writer[Type.FLOAT2] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec2.toArray(a, v, idx);
      }, _type2writer[Type.FLOAT3] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec3.toArray(a, v, idx);
      }, _type2writer[Type.FLOAT4] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Vec4.toArray(a, v, idx);
      }, _type2writer[Type.MAT3] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Mat3.toArray(a, v, idx);
      }, _type2writer[Type.MAT4] = function (a, v, idx) {
        if (idx === void 0) {
          idx = 0;
        }
        return Mat4.toArray(a, v, idx);
      }, _type2writer));
      _export("type2validator", type2validator = (_type2validator = {}, _type2validator[Type.INT] = function (v) {
        return typeof v === 'number';
      }, _type2validator[Type.FLOAT] = function (v) {
        return typeof v === 'number';
      }, _type2validator[Type.INT2] = function (v) {
        return !!(v instanceof Vec2);
      }, _type2validator[Type.FLOAT2] = function (v) {
        return !!(v instanceof Vec2);
      }, _type2validator[Type.INT3] = function (v) {
        return !!(v instanceof Vec3);
      }, _type2validator[Type.FLOAT3] = function (v) {
        return !!(v instanceof Vec3);
      }, _type2validator[Type.INT4] = function (v) {
        return !!(v instanceof Vec4);
      }, _type2validator[Type.FLOAT4] = function (v) {
        return !!(v instanceof Vec4 || v instanceof Color || v instanceof Quat);
      }, _type2validator[Type.MAT3] = function (v) {
        return !!(v instanceof Mat3);
      }, _type2validator[Type.MAT4] = function (v) {
        return !!(v instanceof Mat4);
      }, _type2validator));
      defaultValues = [Object.freeze([0]), Object.freeze([0, 0]), Object.freeze([0, 0, 0, 0]), Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])];
    }
  };
});
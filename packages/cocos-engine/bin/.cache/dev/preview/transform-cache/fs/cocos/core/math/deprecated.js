System.register("q-bundled:///fs/cocos/core/math/deprecated.js", ["../utils/x-deprecated.js", "./color.js", "./mat3.js", "./mat4.js", "./quat.js", "./vec2.js", "./vec3.js", "./vec4.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var replaceProperty, Color, Mat3, Mat4, Quat, Vec2, Vec3, Vec4, legacyCC;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  return {
    setters: [function (_utilsXDeprecatedJs) {
      replaceProperty = _utilsXDeprecatedJs.replaceProperty;
    }, function (_colorJs) {
      Color = _colorJs.Color;
    }, function (_mat3Js) {
      Mat3 = _mat3Js.Mat3;
    }, function (_mat4Js) {
      Mat4 = _mat4Js.Mat4;
    }, function (_quatJs) {
      Quat = _quatJs.Quat;
    }, function (_vec2Js) {
      Vec2 = _vec2Js.Vec2;
    }, function (_vec3Js) {
      Vec3 = _vec3Js.Vec3;
    }, function (_vec4Js) {
      Vec4 = _vec4Js.Vec4;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      replaceProperty(Vec2, 'Vec2', [{
        name: 'sub',
        newName: 'subtract',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'div',
        newName: 'divide',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'dist',
        newName: 'distance',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'sqrDist',
        newName: 'squaredDistance',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'mag',
        newName: 'len',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'sqrMag',
        newName: 'lengthSqr',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec2,
        targetName: 'Vec2'
      }]);
      replaceProperty(Vec2.prototype, 'Vec2', [{
        name: 'mag',
        newName: 'length',
        target: Vec2.prototype,
        targetName: 'Vec2'
      }, {
        name: 'magSqr',
        newName: 'lengthSqr',
        target: Vec2.prototype,
        targetName: 'Vec2'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec2.prototype,
        targetName: 'Vec2'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec2.prototype,
        targetName: 'Vec2'
      }]);
      replaceProperty(Vec3, 'Vec3', [{
        name: 'sub',
        newName: 'subtract',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'div',
        newName: 'divide',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'dist',
        newName: 'distance',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'sqrDist',
        newName: 'squaredDistance',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'mag',
        newName: 'len',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'sqrMag',
        newName: 'lengthSqr',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec3,
        targetName: 'Vec3'
      }]);
      replaceProperty(Vec3.prototype, 'Vec3', [{
        name: 'mag',
        newName: 'length',
        target: Vec3.prototype,
        targetName: 'Vec3'
      }, {
        name: 'magSqr',
        newName: 'lengthSqr',
        target: Vec3.prototype,
        targetName: 'Vec3'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec3.prototype,
        targetName: 'Vec3'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec3.prototype,
        targetName: 'Vec3'
      }]);
      replaceProperty(Vec4, 'Vec4', [{
        name: 'sub',
        newName: 'subtract',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'div',
        newName: 'divide',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'dist',
        newName: 'distance',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'sqrDist',
        newName: 'squaredDistance',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'mag',
        newName: 'len',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'sqrMag',
        newName: 'lengthSqr',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec4,
        targetName: 'Vec4'
      }]);
      replaceProperty(Vec4.prototype, 'Vec4', [{
        name: 'mag',
        newName: 'length',
        target: Vec4.prototype,
        targetName: 'Vec4'
      }, {
        name: 'magSqr',
        newName: 'lengthSqr',
        target: Vec4.prototype,
        targetName: 'Vec4'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec4.prototype,
        targetName: 'Vec4'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec4.prototype,
        targetName: 'Vec4'
      }]);
      replaceProperty(Quat, 'Quat', [{
        name: 'mag',
        newName: 'len',
        target: Quat,
        targetName: 'Quat'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Quat,
        targetName: 'Quat'
      }, {
        name: 'sqrMag',
        newName: 'lengthSqr',
        target: Quat,
        targetName: 'Quat'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Quat,
        targetName: 'Quat'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Quat,
        targetName: 'Quat'
      }]);
      replaceProperty(Quat.prototype, 'Quat', [{
        name: 'scale',
        newName: 'multiplyScalar',
        target: Quat.prototype,
        targetName: 'Quat'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Quat.prototype,
        targetName: 'Quat'
      }]);
      replaceProperty(Color, 'Color', [{
        name: 'sub',
        newName: 'subtract',
        target: Color,
        targetName: 'Color'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Color,
        targetName: 'Color'
      }, {
        name: 'div',
        newName: 'divide',
        target: Color,
        targetName: 'Color'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Color,
        targetName: 'Color'
      }, {
        name: 'fromHex',
        newName: 'fromHEX',
        customFunction: function customFunction() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var arg1 = args[1].toString(16);
          return legacyCC.Color.fromHEX(args[0], arg1);
        }
      }]);
      replaceProperty(Mat3, 'Mat3', [{
        name: 'sub',
        newName: 'subtract',
        target: Mat3,
        targetName: 'Mat3'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Mat3,
        targetName: 'Mat3'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Mat3,
        targetName: 'Mat3'
      }, {
        name: 'transfrom',
        newName: 'transform',
        target: Mat3,
        targetName: 'Mat3'
      }]);
      replaceProperty(Mat3.prototype, 'Mat3', [{
        name: 'sub',
        newName: 'subtract',
        target: Mat3.prototype,
        targetName: 'Mat3'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Mat3.prototype,
        targetName: 'Mat3'
      }, {
        name: 'mulScalar',
        newName: 'multiplyScalar',
        target: Mat3.prototype,
        targetName: 'Mat3'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Mat3.prototype,
        targetName: 'Mat3'
      }]);
      replaceProperty(Mat4, 'Mat4', [{
        name: 'sub',
        newName: 'subtract',
        target: Mat4,
        targetName: 'Mat4'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Mat4,
        targetName: 'Mat4'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Mat4,
        targetName: 'Mat4'
      }]);
      replaceProperty(Mat4.prototype, 'Mat4', [{
        name: 'sub',
        newName: 'subtract',
        target: Mat4.prototype,
        targetName: 'Mat4'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Mat4.prototype,
        targetName: 'Mat4'
      }, {
        name: 'mulScalar',
        newName: 'multiplyScalar',
        target: Mat4.prototype,
        targetName: 'Mat4'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Mat4.prototype,
        targetName: 'Mat4'
      }]);
    }
  };
});
System.register("q-bundled:///fs/cocos/core/curves/bezier.js", ["../global-exports.js"], function (_export, _context) {
  "use strict";

  var legacyCC, cos, acos, max, pi, tau, sqrt;
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
  function bezier(C1, C2, C3, C4, t) {
    var t1 = 1 - t;
    return t1 * (t1 * (C1 + (C2 * 3 - C1) * t) + C3 * 3 * t * t) + C4 * t * t * t;
  }
  function crt(v) {
    if (v < 0) {
      return -Math.pow(-v, 1 / 3);
    } else {
      return Math.pow(v, 1 / 3);
    }
  }

  // Modified from http://jsbin.com/yibipofeqi/1/edit, optimized for animations.
  // The origin Cardano's algorithm is based on http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
  function cardano(curve, x) {
    // align curve with the intersecting line:
    // var line = {p1: {x: x, y: 0}, p2: {x: x, y: 1}};
    // var aligned = align(curve, line);
    /// / and rewrite from [a(1-t)^3 + 3bt(1-t)^2 + 3c(1-t)t^2 + dt^3] form
    //    pa = aligned[0].y,
    //    pb = aligned[1].y,
    //    pc = aligned[2].y,
    //    pd = aligned[3].y;
    /// /// curve = [{x:0, y:1}, {x: curve[0], y: 1-curve[1]}, {x: curve[2], y: 1-curve[3]}, {x:1, y:0}];
    var pa = x - 0;
    var pb = x - curve[0];
    var pc = x - curve[2];
    var pd = x - 1;

    // to [t^3 + at^2 + bt + c] form:
    var pa3 = pa * 3;
    var pb3 = pb * 3;
    var pc3 = pc * 3;
    var d = -pa + pb3 - pc3 + pd;
    var rd = 1 / d;
    var r3 = 1 / 3;
    var a = (pa3 - 6 * pb + pc3) * rd;
    var a3 = a * r3;
    var b = (-pa3 + pb3) * rd;
    var c = pa * rd;
    // then, determine p and q:
    var p = (3 * b - a * a) * r3;
    var p3 = p * r3;
    var q = (2 * a * a * a - 9 * a * b + 27 * c) / 27;
    var q2 = q / 2;
    // and determine the discriminant:
    var discriminant = q2 * q2 + p3 * p3 * p3;
    // and some reserved variables
    var u1;
    var v1;
    var x1;
    var x2;
    var x3;

    // If the discriminant is negative, use polar coordinates
    // to get around square roots of negative numbers
    if (discriminant < 0) {
      var mp3 = -p * r3;
      var mp33 = mp3 * mp3 * mp3;
      var r = sqrt(mp33);
      // compute cosphi corrected for IEEE float rounding:
      var t = -q / (2 * r);
      var cosphi = t < -1 ? -1 : t > 1 ? 1 : t;
      var phi = acos(cosphi);
      var crtr = crt(r);
      var t1 = 2 * crtr;
      x1 = t1 * cos(phi * r3) - a3;
      x2 = t1 * cos((phi + tau) * r3) - a3;
      x3 = t1 * cos((phi + 2 * tau) * r3) - a3;

      // choose best percentage
      if (x1 >= 0 && x1 <= 1) {
        if (x2 >= 0 && x2 <= 1) {
          if (x3 >= 0 && x3 <= 1) {
            return max(x1, x2, x3);
          } else {
            return max(x1, x2);
          }
        } else if (x3 >= 0 && x3 <= 1) {
          return max(x1, x3);
        } else {
          return x1;
        }
      } else if (x2 >= 0 && x2 <= 1) {
        if (x3 >= 0 && x3 <= 1) {
          return max(x2, x3);
        } else {
          return x2;
        }
      } else {
        return x3;
      }
    } else if (discriminant === 0) {
      u1 = q2 < 0 ? crt(-q2) : -crt(q2);
      x1 = 2 * u1 - a3;
      x2 = -u1 - a3;

      // choose best percentage
      if (x1 >= 0 && x1 <= 1) {
        if (x2 >= 0 && x2 <= 1) {
          return max(x1, x2);
        } else {
          return x1;
        }
      } else {
        return x2;
      }
    }
    // one real root, and two imaginary roots
    else {
      var sd = sqrt(discriminant);
      u1 = crt(-q2 + sd);
      v1 = crt(q2 + sd);
      x1 = u1 - v1 - a3;
      return x1;
    }
  }
  function bezierByTime(controlPoints, x) {
    var percent = cardano(controlPoints, x); // t
    var p1y = controlPoints[1]; // b
    var p2y = controlPoints[3]; // c
    // return bezier(0, p1y, p2y, 1, percent);
    return ((1 - percent) * (p1y + (p2y - p1y) * percent) * 3 + percent * percent) * percent;
  }
  _export({
    bezier: bezier,
    bezierByTime: bezierByTime
  });
  return {
    setters: [function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      legacyCC.bezier = bezier;

      // var sin = Math.sin;
      cos = Math.cos;
      acos = Math.acos;
      max = Math.max; // var atan2 = Math.atan2;
      pi = Math.PI;
      tau = 2 * pi;
      sqrt = Math.sqrt;
      legacyCC.bezierByTime = bezierByTime;
    }
  };
});
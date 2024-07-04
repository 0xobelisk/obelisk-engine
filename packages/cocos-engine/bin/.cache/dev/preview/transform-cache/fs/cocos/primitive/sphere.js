System.register("q-bundled:///fs/cocos/primitive/sphere.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec3;
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
  function sphere(radius, opts) {
    if (radius === void 0) {
      radius = 0.5;
    }
    if (opts === void 0) {
      opts = {};
    }
    var segments = opts.segments !== undefined ? opts.segments : 32;

    // lat === latitude
    // lon === longitude

    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    var minPos = new Vec3(-radius, -radius, -radius);
    var maxPos = new Vec3(radius, radius, radius);
    var boundingRadius = radius;
    for (var lat = 0; lat <= segments; ++lat) {
      var theta = lat * Math.PI / segments;
      var sinTheta = Math.sin(theta);
      var cosTheta = -Math.cos(theta);
      for (var lon = 0; lon <= segments; ++lon) {
        var phi = lon * 2 * Math.PI / segments - Math.PI / 2.0;
        var sinPhi = Math.sin(phi);
        var cosPhi = Math.cos(phi);
        var x = sinPhi * sinTheta;
        var y = cosTheta;
        var z = cosPhi * sinTheta;
        var u = lon / segments;
        var v = lat / segments;
        positions.push(x * radius, y * radius, z * radius);
        normals.push(x, y, z);
        uvs.push(u, v);
        if (lat < segments && lon < segments) {
          var seg1 = segments + 1;
          var a = seg1 * lat + lon;
          var b = seg1 * (lat + 1) + lon;
          var c = seg1 * (lat + 1) + lon + 1;
          var d = seg1 * lat + lon + 1;
          indices.push(a, d, b);
          indices.push(d, c, b);
        }
      }
    }
    return {
      positions: positions,
      indices: indices,
      normals: normals,
      uvs: uvs,
      minPos: minPos,
      maxPos: maxPos,
      boundingRadius: boundingRadius
    };
  }
  _export("default", sphere);
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }],
    execute: function () {}
  };
});
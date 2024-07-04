System.register("q-bundled:///fs/cocos/primitive/circle.js", ["../gfx/index.js", "./define.js"], function (_export, _context) {
  "use strict";

  var PrimitiveMode, applyDefaultGeometryOptions;
  /*
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

  /**
   * @en
   * The definition of the parameter for building a circle.
   * @zh
   * 圆形参数选项。
   */

  /**
   * @zh
   * 应用默认圆参数。
   * @param options 圆参数。
   */
  function applyDefaultCircleOptions(options) {
    options = applyDefaultGeometryOptions(options);
    options.segments = 64;
    return options;
  }

  /**
   * @en
   * Generate a circle with radius 1, centered at origin,
   * but may be repositioned through the `center` option.
   * @zh
   * 生成一个圆，其半径是单位1，中心点在原点。
   * @param options @zh 参数选项。 @en The optional creation parameters of the circle
   */
  function circle(options) {
    var normalizedOptions = applyDefaultCircleOptions(options);
    var segments = normalizedOptions.segments;
    var positions = new Array(3 * (segments + 1));
    positions[0] = 0;
    positions[1] = 0;
    positions[2] = 0;
    var indices = new Array(1 + segments * 2);
    indices[0] = 0;
    var step = Math.PI * 2 / segments;
    for (var iSegment = 0; iSegment < segments; ++iSegment) {
      var angle = step * iSegment;
      var x = Math.cos(angle);
      var y = Math.sin(angle);
      var p = (iSegment + 1) * 3;
      positions[p + 0] = x;
      positions[p + 1] = y;
      positions[p + 2] = 0;
      var i = iSegment * 2;
      indices[1 + i] = iSegment + 1;
      indices[1 + (i + 1)] = iSegment + 2;
    }
    if (segments > 0) {
      indices[indices.length - 1] = 1;
    }
    var result = {
      positions: positions,
      indices: indices,
      minPos: {
        x: 1,
        y: 1,
        z: 0
      },
      maxPos: {
        x: -1,
        y: -1,
        z: 0
      },
      boundingRadius: 1,
      primitiveMode: PrimitiveMode.TRIANGLE_FAN
    };
    return result;
  }
  _export("default", circle);
  return {
    setters: [function (_gfxIndexJs) {
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }, function (_defineJs) {
      applyDefaultGeometryOptions = _defineJs.applyDefaultGeometryOptions;
    }],
    execute: function () {}
  };
});
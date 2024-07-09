System.register("q-bundled:///fs/cocos/3d/misc/read-mesh.js", ["../../gfx/index.js", "./buffer.js"], function (_export, _context) {
  "use strict";

  var AttributeName, Format, FormatInfos, readBuffer, _keyMap;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
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
  function readMesh(mesh, iPrimitive) {
    if (iPrimitive === void 0) {
      iPrimitive = 0;
    }
    var out = {
      positions: []
    };
    var dataView = new DataView(mesh.data.buffer, mesh.data.byteOffset, mesh.data.byteLength);
    var struct = mesh.struct;
    var primitive = struct.primitives[iPrimitive];
    for (var _iterator = _createForOfIteratorHelperLoose(primitive.vertexBundelIndices), _step; !(_step = _iterator()).done;) {
      var idx = _step.value;
      var bundle = struct.vertexBundles[idx];
      var offset = bundle.view.offset;
      var _bundle$view = bundle.view,
        length = _bundle$view.length,
        stride = _bundle$view.stride;
      for (var _iterator2 = _createForOfIteratorHelperLoose(bundle.attributes), _step2; !(_step2 = _iterator2()).done;) {
        var attr = _step2.value;
        var name = _keyMap[attr.name];
        if (name) {
          out[name] = (out[name] || []).concat(readBuffer(dataView, attr.format, offset, length, stride));
        }
        offset += FormatInfos[attr.format].size;
      }
    }
    var view = primitive.indexView;
    out.indices = readBuffer(dataView, Format["R" + view.stride * 8 + "UI"], view.offset, view.length);
    return out;
  }
  _export("readMesh", readMesh);
  return {
    setters: [function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
    }, function (_bufferJs) {
      readBuffer = _bufferJs.readBuffer;
    }],
    execute: function () {
      (function (_keyMap) {
        _keyMap[_keyMap["positions"] = AttributeName.ATTR_POSITION] = "positions";
        _keyMap[_keyMap["normals"] = AttributeName.ATTR_NORMAL] = "normals";
        _keyMap[_keyMap["uvs"] = AttributeName.ATTR_TEX_COORD] = "uvs";
        _keyMap[_keyMap["colors"] = AttributeName.ATTR_COLOR] = "colors";
      })(_keyMap || (_keyMap = {}));
    }
  };
});
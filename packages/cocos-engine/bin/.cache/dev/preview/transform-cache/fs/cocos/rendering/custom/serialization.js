System.register("q-bundled:///fs/cocos/rendering/custom/serialization.js", ["../../gfx/index.js"], function (_export, _context) {
  "use strict";

  var DescriptorSetLayoutBinding, Uniform;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
                                                                                                                                                                                       Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                      
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
  function saveColor(ar, v) {
    ar.writeNumber(v.x);
    ar.writeNumber(v.y);
    ar.writeNumber(v.z);
    ar.writeNumber(v.w);
  }
  function loadColor(ar, v) {
    v.x = ar.readNumber();
    v.y = ar.readNumber();
    v.z = ar.readNumber();
    v.w = ar.readNumber();
  }
  function saveUniform(ar, v) {
    ar.writeString(v.name);
    ar.writeNumber(v.type);
    ar.writeNumber(v.count);
  }
  function loadUniform(ar, v) {
    v.name = ar.readString();
    v.type = ar.readNumber();
    v.count = ar.readNumber();
  }
  function saveUniformBlock(ar, v) {
    ar.writeNumber(v.set);
    ar.writeNumber(v.binding);
    ar.writeString(v.name);
    ar.writeNumber(v.members.length);
    for (var _iterator = _createForOfIteratorHelperLoose(v.members), _step; !(_step = _iterator()).done;) {
      var v1 = _step.value;
      saveUniform(ar, v1);
    }
    ar.writeNumber(v.count);
  }
  function loadUniformBlock(ar, v) {
    v.set = ar.readNumber();
    v.binding = ar.readNumber();
    v.name = ar.readString();
    var sz = 0;
    sz = ar.readNumber();
    v.members.length = sz;
    for (var i = 0; i !== sz; ++i) {
      var v1 = new Uniform();
      loadUniform(ar, v1);
      v.members[i] = v1;
    }
    v.count = ar.readNumber();
  }
  function saveDescriptorSetLayoutBinding(ar, v) {
    ar.writeNumber(v.binding);
    ar.writeNumber(v.descriptorType);
    ar.writeNumber(v.count);
    ar.writeNumber(v.stageFlags);
    // skip immutableSamplers;
  }

  function loadDescriptorSetLayoutBinding(ar, v) {
    v.binding = ar.readNumber();
    v.descriptorType = ar.readNumber();
    v.count = ar.readNumber();
    v.stageFlags = ar.readNumber();
    // skip immutableSamplers;
  }

  function saveDescriptorSetLayoutInfo(ar, v) {
    ar.writeNumber(v.bindings.length);
    for (var _iterator2 = _createForOfIteratorHelperLoose(v.bindings), _step2; !(_step2 = _iterator2()).done;) {
      var v1 = _step2.value;
      saveDescriptorSetLayoutBinding(ar, v1);
    }
  }
  function loadDescriptorSetLayoutInfo(ar, v) {
    var sz = ar.readNumber();
    v.bindings.length = sz;
    for (var i = 0; i !== sz; ++i) {
      var v1 = new DescriptorSetLayoutBinding();
      loadDescriptorSetLayoutBinding(ar, v1);
      v.bindings[i] = v1;
    }
  }
  _export({
    saveColor: saveColor,
    loadColor: loadColor,
    saveUniform: saveUniform,
    loadUniform: loadUniform,
    saveUniformBlock: saveUniformBlock,
    loadUniformBlock: loadUniformBlock,
    saveDescriptorSetLayoutBinding: saveDescriptorSetLayoutBinding,
    loadDescriptorSetLayoutBinding: loadDescriptorSetLayoutBinding,
    saveDescriptorSetLayoutInfo: saveDescriptorSetLayoutInfo,
    loadDescriptorSetLayoutInfo: loadDescriptorSetLayoutInfo
  });
  return {
    setters: [function (_gfxIndexJs) {
      DescriptorSetLayoutBinding = _gfxIndexJs.DescriptorSetLayoutBinding;
      Uniform = _gfxIndexJs.Uniform;
    }],
    execute: function () {}
  };
});
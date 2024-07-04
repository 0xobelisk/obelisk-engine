System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-descriptor-set.js", ["../base/descriptor-set.js", "../base/define.js"], function (_export, _context) {
  "use strict";

  var DescriptorSet, DESCRIPTOR_SAMPLER_TYPE, DESCRIPTOR_BUFFER_TYPE, WebGLDescriptorSet;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    setters: [function (_baseDescriptorSetJs) {
      DescriptorSet = _baseDescriptorSetJs.DescriptorSet;
    }, function (_baseDefineJs) {
      DESCRIPTOR_SAMPLER_TYPE = _baseDefineJs.DESCRIPTOR_SAMPLER_TYPE;
      DESCRIPTOR_BUFFER_TYPE = _baseDefineJs.DESCRIPTOR_BUFFER_TYPE;
    }],
    execute: function () {
      _export("WebGLDescriptorSet", WebGLDescriptorSet = /*#__PURE__*/function (_DescriptorSet) {
        _inheritsLoose(WebGLDescriptorSet, _DescriptorSet);
        function WebGLDescriptorSet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _DescriptorSet.call.apply(_DescriptorSet, [this].concat(args)) || this;
          _this._gpuDescriptorSet = null;
          return _this;
        }
        var _proto = WebGLDescriptorSet.prototype;
        _proto.initialize = function initialize(info) {
          this._layout = info.layout;
          var _gpuDescriptorSetLayo = info.layout.gpuDescriptorSetLayout,
            bindings = _gpuDescriptorSetLayo.bindings,
            descriptorIndices = _gpuDescriptorSetLayo.descriptorIndices,
            descriptorCount = _gpuDescriptorSetLayo.descriptorCount;
          this._buffers = Array(descriptorCount).fill(null);
          this._textures = Array(descriptorCount).fill(null);
          this._samplers = Array(descriptorCount).fill(null);
          var gpuDescriptors = [];
          this._gpuDescriptorSet = {
            gpuDescriptors: gpuDescriptors,
            descriptorIndices: descriptorIndices
          };
          for (var i = 0; i < bindings.length; ++i) {
            var binding = bindings[i];
            for (var j = 0; j < binding.count; j++) {
              gpuDescriptors.push({
                type: binding.descriptorType,
                gpuBuffer: null,
                gpuTexture: null,
                gpuSampler: null
              });
            }
          }
        };
        _proto.destroy = function destroy() {
          this._layout = null;
          this._gpuDescriptorSet = null;
        };
        _proto.update = function update() {
          if (this._isDirty && this._gpuDescriptorSet) {
            var descriptors = this._gpuDescriptorSet.gpuDescriptors;
            for (var i = 0; i < descriptors.length; ++i) {
              if (descriptors[i].type & DESCRIPTOR_BUFFER_TYPE) {
                var buffer = this._buffers[i];
                if (buffer) {
                  descriptors[i].gpuBuffer = buffer.gpuBuffer || buffer.gpuBufferView;
                }
              } else if (descriptors[i].type & DESCRIPTOR_SAMPLER_TYPE) {
                if (this._textures[i]) {
                  descriptors[i].gpuTexture = this._textures[i].gpuTexture;
                }
                if (this._samplers[i]) {
                  descriptors[i].gpuSampler = this._samplers[i].gpuSampler;
                }
              }
            }
            this._isDirty = false;
          }
        };
        _createClass(WebGLDescriptorSet, [{
          key: "gpuDescriptorSet",
          get: function get() {
            return this._gpuDescriptorSet;
          }
        }]);
        return WebGLDescriptorSet;
      }(DescriptorSet));
    }
  };
});
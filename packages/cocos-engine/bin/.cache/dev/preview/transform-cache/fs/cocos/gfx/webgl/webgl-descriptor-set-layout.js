System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-descriptor-set-layout.js", ["../base/define.js", "../base/descriptor-set-layout.js"], function (_export, _context) {
  "use strict";

  var DESCRIPTOR_DYNAMIC_TYPE, DescriptorSetLayout, WebGLDescriptorSetLayout;
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
    setters: [function (_baseDefineJs) {
      DESCRIPTOR_DYNAMIC_TYPE = _baseDefineJs.DESCRIPTOR_DYNAMIC_TYPE;
    }, function (_baseDescriptorSetLayoutJs) {
      DescriptorSetLayout = _baseDescriptorSetLayoutJs.DescriptorSetLayout;
    }],
    execute: function () {
      _export("WebGLDescriptorSetLayout", WebGLDescriptorSetLayout = /*#__PURE__*/function (_DescriptorSetLayout) {
        _inheritsLoose(WebGLDescriptorSetLayout, _DescriptorSetLayout);
        function WebGLDescriptorSetLayout() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _DescriptorSetLayout.call.apply(_DescriptorSetLayout, [this].concat(args)) || this;
          _this._gpuDescriptorSetLayout = null;
          return _this;
        }
        var _proto = WebGLDescriptorSetLayout.prototype;
        _proto.initialize = function initialize(info) {
          Array.prototype.push.apply(this._bindings, info.bindings);
          var descriptorCount = 0;
          var maxBinding = -1;
          var flattenedIndices = [];
          for (var i = 0; i < this._bindings.length; i++) {
            var binding = this._bindings[i];
            flattenedIndices.push(descriptorCount);
            descriptorCount += binding.count;
            if (binding.binding > maxBinding) maxBinding = binding.binding;
          }
          this._bindingIndices = Array(maxBinding + 1).fill(-1);
          var descriptorIndices = this._descriptorIndices = Array(maxBinding + 1).fill(-1);
          for (var _i = 0; _i < this._bindings.length; _i++) {
            var _binding = this._bindings[_i];
            this._bindingIndices[_binding.binding] = _i;
            descriptorIndices[_binding.binding] = flattenedIndices[_i];
          }
          var dynamicBindings = [];
          for (var _i2 = 0; _i2 < this._bindings.length; _i2++) {
            var _binding2 = this._bindings[_i2];
            if (_binding2.descriptorType & DESCRIPTOR_DYNAMIC_TYPE) {
              for (var j = 0; j < _binding2.count; j++) {
                dynamicBindings.push(_binding2.binding);
              }
            }
          }
          this._gpuDescriptorSetLayout = {
            bindings: this._bindings,
            dynamicBindings: dynamicBindings,
            descriptorIndices: descriptorIndices,
            descriptorCount: descriptorCount
          };
        };
        _proto.destroy = function destroy() {
          this._bindings.length = 0;
        };
        _createClass(WebGLDescriptorSetLayout, [{
          key: "gpuDescriptorSetLayout",
          get: function get() {
            return this._gpuDescriptorSetLayout;
          }
        }]);
        return WebGLDescriptorSetLayout;
      }(DescriptorSetLayout));
    }
  };
});
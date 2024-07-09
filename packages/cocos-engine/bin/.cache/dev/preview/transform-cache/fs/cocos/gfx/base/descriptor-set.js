System.register("q-bundled:///fs/cocos/gfx/base/descriptor-set.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var GFXObject, ObjectType, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, DescriptorSet;
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
    setters: [function (_defineJs) {
      GFXObject = _defineJs.GFXObject;
      ObjectType = _defineJs.ObjectType;
      DESCRIPTOR_BUFFER_TYPE = _defineJs.DESCRIPTOR_BUFFER_TYPE;
      DESCRIPTOR_SAMPLER_TYPE = _defineJs.DESCRIPTOR_SAMPLER_TYPE;
    }],
    execute: function () {
      /**
       * @en GFX descriptor sets.
       * @zh GFX 描述符集组。
       */
      _export("DescriptorSet", DescriptorSet = /*#__PURE__*/function (_GFXObject) {
        _inheritsLoose(DescriptorSet, _GFXObject);
        function DescriptorSet() {
          var _this;
          _this = _GFXObject.call(this, ObjectType.DESCRIPTOR_SET) || this;
          _this._layout = null;
          _this._buffers = [];
          _this._textures = [];
          _this._samplers = [];
          _this._isDirty = false;
          return _this;
        }
        var _proto = DescriptorSet.prototype;
        /**
         * @en Bind buffer to the specified descriptor.
         * @zh 在指定的描述符位置上绑定缓冲。
         * @param binding The target binding.
         * @param buffer The buffer to be bound.
         */
        _proto.bindBuffer = function bindBuffer(binding, buffer, index) {
          if (index === void 0) {
            index = 0;
          }
          var bindingIndex = this._layout.bindingIndices[binding];
          var info = this._layout.bindings[bindingIndex];
          if (!info) {
            return;
          }
          if (info.descriptorType & DESCRIPTOR_BUFFER_TYPE) {
            var descriptorIndex = this._layout.descriptorIndices[binding];
            if (this._buffers[descriptorIndex + index] !== buffer) {
              this._buffers[descriptorIndex + index] = buffer;
              this._isDirty = true;
            }
          }
        }

        /**
         * @en Bind sampler to the specified descriptor.
         * @zh 在指定的描述符位置上绑定采样器。
         * @param binding The target binding.
         * @param sampler The sampler to be bound.
         */;
        _proto.bindSampler = function bindSampler(binding, sampler, index) {
          if (index === void 0) {
            index = 0;
          }
          var bindingIndex = this._layout.bindingIndices[binding];
          var info = this._layout.bindings[bindingIndex];
          if (!info) {
            return;
          }
          if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
            var descriptorIndex = this._layout.descriptorIndices[binding];
            if (this._samplers[descriptorIndex + index] !== sampler) {
              this._samplers[descriptorIndex + index] = sampler;
              this._isDirty = true;
            }
          }
        }

        /**
         * @en Bind texture to the specified descriptor.
         * @zh 在指定的描述符位置上绑定纹理。
         * @param binding The target binding.
         * @param texture The texture to be bound.
         */;
        _proto.bindTexture = function bindTexture(binding, texture, index, flags) {
          if (index === void 0) {
            index = 0;
          }
          var bindingIndex = this._layout.bindingIndices[binding];
          var info = this._layout.bindings[bindingIndex];
          if (!info) {
            return;
          }
          if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
            var descriptorIndex = this._layout.descriptorIndices[binding];
            if (this._textures[descriptorIndex + index] !== texture) {
              this._textures[descriptorIndex + index] = texture;
              this._isDirty = true;
            }
          }
        }

        /**
         * @en Get buffer from the specified binding location.
         * @zh 获取当前指定绑定位置上的缓冲。
         * @param binding The target binding.
         */;
        _proto.getBuffer = function getBuffer(binding, index) {
          if (index === void 0) {
            index = 0;
          }
          var descriptorIndex = this._layout.descriptorIndices[binding];
          return this._buffers[descriptorIndex + index];
        }

        /**
         * @en Get sampler from the specified binding location.
         * @zh 获取当前指定绑定位置上的采样器。
         * @param binding The target binding.
         */;
        _proto.getSampler = function getSampler(binding, index) {
          if (index === void 0) {
            index = 0;
          }
          var descriptorIndex = this._layout.descriptorIndices[binding];
          return this._samplers[descriptorIndex + index];
        }

        /**
         * @en Get texture from the specified binding location.
         * @zh 获取当前指定绑定位置上的贴图。
         * @param binding The target binding.
         */;
        _proto.getTexture = function getTexture(binding, index) {
          if (index === void 0) {
            index = 0;
          }
          var descriptorIndex = this._layout.descriptorIndices[binding];
          return this._textures[descriptorIndex + index];
        };
        _createClass(DescriptorSet, [{
          key: "layout",
          get: function get() {
            return this._layout;
          }
        }]);
        return DescriptorSet;
      }(GFXObject));
    }
  };
});
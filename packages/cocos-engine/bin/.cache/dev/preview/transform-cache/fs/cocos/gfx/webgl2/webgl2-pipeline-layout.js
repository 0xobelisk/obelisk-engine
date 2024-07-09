System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-pipeline-layout.js", ["../base/pipeline-layout.js"], function (_export, _context) {
  "use strict";

  var PipelineLayout, WebGL2PipelineLayout;
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
    setters: [function (_basePipelineLayoutJs) {
      PipelineLayout = _basePipelineLayoutJs.PipelineLayout;
    }],
    execute: function () {
      _export("WebGL2PipelineLayout", WebGL2PipelineLayout = /*#__PURE__*/function (_PipelineLayout) {
        _inheritsLoose(WebGL2PipelineLayout, _PipelineLayout);
        function WebGL2PipelineLayout() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PipelineLayout.call.apply(_PipelineLayout, [this].concat(args)) || this;
          _this._gpuPipelineLayout = null;
          return _this;
        }
        var _proto = WebGL2PipelineLayout.prototype;
        _proto.initialize = function initialize(info) {
          Array.prototype.push.apply(this._setLayouts, info.setLayouts);
          var dynamicOffsetIndices = [];
          var gpuSetLayouts = [];
          var dynamicOffsetCount = 0;
          var dynamicOffsetOffsets = [];
          for (var i = 0; i < this._setLayouts.length; i++) {
            var setLayout = this._setLayouts[i];
            var dynamicBindings = setLayout.gpuDescriptorSetLayout.dynamicBindings;
            var indices = Array(setLayout.bindingIndices.length).fill(-1);
            for (var j = 0; j < dynamicBindings.length; j++) {
              var binding = dynamicBindings[j];
              if (indices[binding] < 0) indices[binding] = dynamicOffsetCount + j;
            }
            gpuSetLayouts.push(setLayout.gpuDescriptorSetLayout);
            dynamicOffsetIndices.push(indices);
            dynamicOffsetOffsets.push(dynamicOffsetCount);
            dynamicOffsetCount += dynamicBindings.length;
          }
          this._gpuPipelineLayout = {
            gpuSetLayouts: gpuSetLayouts,
            dynamicOffsetIndices: dynamicOffsetIndices,
            dynamicOffsetCount: dynamicOffsetCount,
            dynamicOffsetOffsets: dynamicOffsetOffsets
          };
        };
        _proto.destroy = function destroy() {
          this._setLayouts.length = 0;
        };
        _createClass(WebGL2PipelineLayout, [{
          key: "gpuPipelineLayout",
          get: function get() {
            return this._gpuPipelineLayout;
          }
        }]);
        return WebGL2PipelineLayout;
      }(PipelineLayout));
    }
  };
});
System.register("q-bundled:///fs/cocos/gfx/empty/empty-pipeline-state.js", ["../base/pipeline-state.js"], function (_export, _context) {
  "use strict";

  var PipelineState, EmptyPipelineState;
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
    setters: [function (_basePipelineStateJs) {
      PipelineState = _basePipelineStateJs.PipelineState;
    }],
    execute: function () {
      _export("EmptyPipelineState", EmptyPipelineState = /*#__PURE__*/function (_PipelineState) {
        _inheritsLoose(EmptyPipelineState, _PipelineState);
        function EmptyPipelineState() {
          return _PipelineState.apply(this, arguments) || this;
        }
        var _proto = EmptyPipelineState.prototype;
        _proto.initialize = function initialize(info) {
          this._primitive = info.primitive;
          this._shader = info.shader;
          this._pipelineLayout = info.pipelineLayout;
          var bs = this._bs;
          if (info.blendState) {
            var bsInfo = info.blendState;
            var targets = bsInfo.targets;
            if (targets) {
              targets.forEach(function (t, i) {
                bs.setTarget(i, t);
              });
            }
            if (bsInfo.isA2C !== undefined) {
              bs.isA2C = bsInfo.isA2C;
            }
            if (bsInfo.isIndepend !== undefined) {
              bs.isIndepend = bsInfo.isIndepend;
            }
            if (bsInfo.blendColor !== undefined) {
              bs.blendColor = bsInfo.blendColor;
            }
          }
          Object.assign(this._rs, info.rasterizerState);
          Object.assign(this._dss, info.depthStencilState);
          this._is = info.inputState;
          this._renderPass = info.renderPass;
          this._dynamicStates = info.dynamicStates;
        };
        _proto.destroy = function destroy() {};
        return EmptyPipelineState;
      }(PipelineState));
    }
  };
});
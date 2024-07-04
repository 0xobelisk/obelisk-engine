System.register("q-bundled:///fs/cocos/gfx/base/pipeline-state.js", ["./define.js", "./pipeline-sub-state.js"], function (_export, _context) {
  "use strict";

  var DynamicStateFlagBit, GFXObject, ObjectType, PrimitiveMode, InputState, PipelineBindPoint, BlendState, BlendTarget, RasterizerState, DepthStencilState, PipelineStateInfo, PipelineState;
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
      DynamicStateFlagBit = _defineJs.DynamicStateFlagBit;
      GFXObject = _defineJs.GFXObject;
      ObjectType = _defineJs.ObjectType;
      PrimitiveMode = _defineJs.PrimitiveMode;
      InputState = _defineJs.InputState;
      PipelineBindPoint = _defineJs.PipelineBindPoint;
    }, function (_pipelineSubStateJs) {
      BlendState = _pipelineSubStateJs.BlendState;
      BlendTarget = _pipelineSubStateJs.BlendTarget;
      RasterizerState = _pipelineSubStateJs.RasterizerState;
      DepthStencilState = _pipelineSubStateJs.DepthStencilState;
    }],
    execute: function () {
      _export("BlendState", BlendState);
      _export("BlendTarget", BlendTarget);
      _export("RasterizerState", RasterizerState);
      _export("DepthStencilState", DepthStencilState);
      _export("PipelineStateInfo", PipelineStateInfo =
      // to make sure all usages must be an instance of this exact class, not assembled from plain object

      function PipelineStateInfo(shader, pipelineLayout, renderPass, inputState, rasterizerState, depthStencilState, blendState, primitive, dynamicStates, bindPoint) {
        if (shader === void 0) {
          shader = null;
        }
        if (pipelineLayout === void 0) {
          pipelineLayout = null;
        }
        if (renderPass === void 0) {
          renderPass = null;
        }
        if (inputState === void 0) {
          inputState = new InputState();
        }
        if (rasterizerState === void 0) {
          rasterizerState = new RasterizerState();
        }
        if (depthStencilState === void 0) {
          depthStencilState = new DepthStencilState();
        }
        if (blendState === void 0) {
          blendState = new BlendState();
        }
        if (primitive === void 0) {
          primitive = PrimitiveMode.TRIANGLE_LIST;
        }
        if (dynamicStates === void 0) {
          dynamicStates = DynamicStateFlagBit.NONE;
        }
        if (bindPoint === void 0) {
          bindPoint = PipelineBindPoint.GRAPHICS;
        }
        this.shader = shader;
        this.pipelineLayout = pipelineLayout;
        this.renderPass = renderPass;
        this.inputState = inputState;
        this.rasterizerState = rasterizerState;
        this.depthStencilState = depthStencilState;
        this.blendState = blendState;
        this.primitive = primitive;
        this.dynamicStates = dynamicStates;
        this.bindPoint = bindPoint;
      });
      /**
       * @en GFX pipeline state.
       * @zh GFX 管线状态。
       */
      _export("PipelineState", PipelineState = /*#__PURE__*/function (_GFXObject) {
        _inheritsLoose(PipelineState, _GFXObject);
        function PipelineState() {
          var _this;
          _this = _GFXObject.call(this, ObjectType.PIPELINE_STATE) || this;
          _this._shader = null;
          _this._pipelineLayout = null;
          _this._primitive = PrimitiveMode.TRIANGLE_LIST;
          _this._is = null;
          _this._rs = new RasterizerState();
          _this._dss = new DepthStencilState();
          _this._bs = new BlendState();
          _this._dynamicStates = DynamicStateFlagBit.NONE;
          _this._renderPass = null;
          return _this;
        }
        _createClass(PipelineState, [{
          key: "shader",
          get:
          /**
           * @en Get current shader.
           * @zh GFX 着色器。
           */
          function get() {
            return this._shader;
          }

          /**
           * @en Get current pipeline layout.
           * @zh GFX 管线布局。
           */
        }, {
          key: "pipelineLayout",
          get: function get() {
            return this._pipelineLayout;
          }

          /**
           * @en Get current primitve mode.
           * @zh GFX 图元模式。
           */
        }, {
          key: "primitive",
          get: function get() {
            return this._primitive;
          }

          /**
           * @en Get current rasterizer state.
           * @zh GFX 光栅化状态。
           */
        }, {
          key: "rasterizerState",
          get: function get() {
            return this._rs;
          }

          /**
           * @en Get current depth stencil state.
           * @zh GFX 深度模板状态。
           */
        }, {
          key: "depthStencilState",
          get: function get() {
            return this._dss;
          }

          /**
           * @en Get current blend state.
           * @zh GFX 混合状态。
           */
        }, {
          key: "blendState",
          get: function get() {
            return this._bs;
          }

          /**
           * @en Get current input state.
           * @zh GFX 输入状态。
           */
        }, {
          key: "inputState",
          get: function get() {
            return this._is;
          }

          /**
           * @en Get current dynamic states.
           * @zh GFX 动态状态数组。
           */
        }, {
          key: "dynamicStates",
          get: function get() {
            return this._dynamicStates;
          }

          /**
           * @en Get current render pass.
           * @zh GFX 渲染过程。
           */
        }, {
          key: "renderPass",
          get: function get() {
            return this._renderPass;
          }
        }]);
        return PipelineState;
      }(GFXObject));
    }
  };
});
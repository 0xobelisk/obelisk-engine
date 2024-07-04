System.register("q-bundled:///fs/cocos/gfx/base/pipeline-sub-state.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var BlendFactor, BlendOp, ColorMask, ComparisonFunc, CullMode, PolygonMode, ShadeModel, StencilOp, Color, RasterizerState, DepthStencilState, BlendTarget, BlendState;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated engine source code (the "Software"), a limited,
                                                                                                                                                                                                                                                                                                                                                                                             worldwide, royalty-free, non-assignable, revocable and non-exclusive license
                                                                                                                                                                                                                                                                                                                                                                                             to use Cocos Creator solely to develop games on your target platforms. You shall
                                                                                                                                                                                                                                                                                                                                                                                             not use Cocos Creator software for developing other software or tools that's
                                                                                                                                                                                                                                                                                                                                                                                             used for developing games. You are not granted to publish, distribute,
                                                                                                                                                                                                                                                                                                                                                                                             sublicense, and/or sell copies of Cocos Creator.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The software or tools in this License Agreement are licensed, not sold.
                                                                                                                                                                                                                                                                                                                                                                                             Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.
                                                                                                                                                                                                                                                                                                                                                                                            
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
      BlendFactor = _defineJs.BlendFactor;
      BlendOp = _defineJs.BlendOp;
      ColorMask = _defineJs.ColorMask;
      ComparisonFunc = _defineJs.ComparisonFunc;
      CullMode = _defineJs.CullMode;
      PolygonMode = _defineJs.PolygonMode;
      ShadeModel = _defineJs.ShadeModel;
      StencilOp = _defineJs.StencilOp;
      Color = _defineJs.Color;
    }],
    execute: function () {
      /**
       * @en GFX rasterizer state.
       * @zh GFX 光栅化状态。
       */
      _export("RasterizerState", RasterizerState = /*#__PURE__*/function () {
        function RasterizerState(isDiscard, polygonMode, shadeModel, cullMode, isFrontFaceCCW, depthBiasEnabled, depthBias, depthBiasClamp, depthBiasSlop, isDepthClip, isMultisample, lineWidth) {
          if (isDiscard === void 0) {
            isDiscard = false;
          }
          if (polygonMode === void 0) {
            polygonMode = PolygonMode.FILL;
          }
          if (shadeModel === void 0) {
            shadeModel = ShadeModel.GOURAND;
          }
          if (cullMode === void 0) {
            cullMode = CullMode.BACK;
          }
          if (isFrontFaceCCW === void 0) {
            isFrontFaceCCW = true;
          }
          if (depthBiasEnabled === void 0) {
            depthBiasEnabled = false;
          }
          if (depthBias === void 0) {
            depthBias = 0;
          }
          if (depthBiasClamp === void 0) {
            depthBiasClamp = 0.0;
          }
          if (depthBiasSlop === void 0) {
            depthBiasSlop = 0.0;
          }
          if (isDepthClip === void 0) {
            isDepthClip = true;
          }
          if (isMultisample === void 0) {
            isMultisample = false;
          }
          if (lineWidth === void 0) {
            lineWidth = 1.0;
          }
          this.isDiscard = isDiscard;
          this.polygonMode = polygonMode;
          this.shadeModel = shadeModel;
          this.cullMode = cullMode;
          this.isFrontFaceCCW = isFrontFaceCCW;
          this.depthBiasEnabled = depthBiasEnabled;
          this.depthBias = depthBias;
          this.depthBiasClamp = depthBiasClamp;
          this.depthBiasSlop = depthBiasSlop;
          this.isDepthClip = isDepthClip;
          this.isMultisample = isMultisample;
          this.lineWidth = lineWidth;
        }
        var _proto = RasterizerState.prototype;
        _proto.reset = function reset() {
          this.isDiscard = false;
          this.polygonMode = PolygonMode.FILL;
          this.shadeModel = ShadeModel.GOURAND;
          this.cullMode = CullMode.BACK;
          this.isFrontFaceCCW = true;
          this.depthBiasEnabled = false;
          this.depthBias = 0;
          this.depthBiasClamp = 0.0;
          this.depthBiasSlop = 0.0;
          this.isDepthClip = true;
          this.isMultisample = false;
          this.lineWidth = 1.0;
        };
        _proto.assign = function assign(rs) {
          Object.assign(this, rs);
        };
        _proto.destroy = function destroy() {};
        _createClass(RasterizerState, [{
          key: "native",
          get:
          // to make sure all usages must be an instance of this exact class, not assembled from plain object

          function get() {
            return this;
          }
        }]);
        return RasterizerState;
      }());
      /**
       * @en GFX depth stencil state.
       * @zh GFX 深度模板状态。
       */
      _export("DepthStencilState", DepthStencilState = /*#__PURE__*/function () {
        function DepthStencilState(depthTest, depthWrite, depthFunc, stencilTestFront, stencilFuncFront, stencilReadMaskFront, stencilWriteMaskFront, stencilFailOpFront, stencilZFailOpFront, stencilPassOpFront, stencilRefFront, stencilTestBack, stencilFuncBack, stencilReadMaskBack, stencilWriteMaskBack, stencilFailOpBack, stencilZFailOpBack, stencilPassOpBack, stencilRefBack) {
          if (depthTest === void 0) {
            depthTest = true;
          }
          if (depthWrite === void 0) {
            depthWrite = true;
          }
          if (depthFunc === void 0) {
            depthFunc = ComparisonFunc.LESS;
          }
          if (stencilTestFront === void 0) {
            stencilTestFront = false;
          }
          if (stencilFuncFront === void 0) {
            stencilFuncFront = ComparisonFunc.ALWAYS;
          }
          if (stencilReadMaskFront === void 0) {
            stencilReadMaskFront = 0xffff;
          }
          if (stencilWriteMaskFront === void 0) {
            stencilWriteMaskFront = 0xffff;
          }
          if (stencilFailOpFront === void 0) {
            stencilFailOpFront = StencilOp.KEEP;
          }
          if (stencilZFailOpFront === void 0) {
            stencilZFailOpFront = StencilOp.KEEP;
          }
          if (stencilPassOpFront === void 0) {
            stencilPassOpFront = StencilOp.KEEP;
          }
          if (stencilRefFront === void 0) {
            stencilRefFront = 1;
          }
          if (stencilTestBack === void 0) {
            stencilTestBack = false;
          }
          if (stencilFuncBack === void 0) {
            stencilFuncBack = ComparisonFunc.ALWAYS;
          }
          if (stencilReadMaskBack === void 0) {
            stencilReadMaskBack = 0xffff;
          }
          if (stencilWriteMaskBack === void 0) {
            stencilWriteMaskBack = 0xffff;
          }
          if (stencilFailOpBack === void 0) {
            stencilFailOpBack = StencilOp.KEEP;
          }
          if (stencilZFailOpBack === void 0) {
            stencilZFailOpBack = StencilOp.KEEP;
          }
          if (stencilPassOpBack === void 0) {
            stencilPassOpBack = StencilOp.KEEP;
          }
          if (stencilRefBack === void 0) {
            stencilRefBack = 1;
          }
          this.depthTest = depthTest;
          this.depthWrite = depthWrite;
          this.depthFunc = depthFunc;
          this.stencilTestFront = stencilTestFront;
          this.stencilFuncFront = stencilFuncFront;
          this.stencilReadMaskFront = stencilReadMaskFront;
          this.stencilWriteMaskFront = stencilWriteMaskFront;
          this.stencilFailOpFront = stencilFailOpFront;
          this.stencilZFailOpFront = stencilZFailOpFront;
          this.stencilPassOpFront = stencilPassOpFront;
          this.stencilRefFront = stencilRefFront;
          this.stencilTestBack = stencilTestBack;
          this.stencilFuncBack = stencilFuncBack;
          this.stencilReadMaskBack = stencilReadMaskBack;
          this.stencilWriteMaskBack = stencilWriteMaskBack;
          this.stencilFailOpBack = stencilFailOpBack;
          this.stencilZFailOpBack = stencilZFailOpBack;
          this.stencilPassOpBack = stencilPassOpBack;
          this.stencilRefBack = stencilRefBack;
        }
        var _proto2 = DepthStencilState.prototype;
        _proto2.reset = function reset() {
          this.depthTest = true;
          this.depthWrite = true;
          this.depthFunc = ComparisonFunc.LESS;
          this.stencilTestFront = false;
          this.stencilFuncFront = ComparisonFunc.ALWAYS;
          this.stencilReadMaskFront = 0xffff;
          this.stencilWriteMaskFront = 0xffff;
          this.stencilFailOpFront = StencilOp.KEEP;
          this.stencilZFailOpFront = StencilOp.KEEP;
          this.stencilPassOpFront = StencilOp.KEEP;
          this.stencilRefFront = 1;
          this.stencilTestBack = false;
          this.stencilFuncBack = ComparisonFunc.ALWAYS;
          this.stencilReadMaskBack = 0xffff;
          this.stencilWriteMaskBack = 0xffff;
          this.stencilFailOpBack = StencilOp.KEEP;
          this.stencilZFailOpBack = StencilOp.KEEP;
          this.stencilPassOpBack = StencilOp.KEEP;
          this.stencilRefBack = 1;
        };
        _proto2.assign = function assign(dss) {
          Object.assign(this, dss);
        };
        _proto2.destroy = function destroy() {};
        _createClass(DepthStencilState, [{
          key: "native",
          get:
          // to make sure all usages must be an instance of this exact class, not assembled from plain object

          function get() {
            return this;
          }
        }]);
        return DepthStencilState;
      }());
      /**
       * @en GFX blend target.
       * @zh GFX 混合目标。
       */
      _export("BlendTarget", BlendTarget = /*#__PURE__*/function () {
        // to make sure all usages must be an instance of this exact class, not assembled from plain object

        function BlendTarget(blend, blendSrc, blendDst, blendEq, blendSrcAlpha, blendDstAlpha, blendAlphaEq, blendColorMask) {
          if (blend === void 0) {
            blend = false;
          }
          if (blendSrc === void 0) {
            blendSrc = BlendFactor.ONE;
          }
          if (blendDst === void 0) {
            blendDst = BlendFactor.ZERO;
          }
          if (blendEq === void 0) {
            blendEq = BlendOp.ADD;
          }
          if (blendSrcAlpha === void 0) {
            blendSrcAlpha = BlendFactor.ONE;
          }
          if (blendDstAlpha === void 0) {
            blendDstAlpha = BlendFactor.ZERO;
          }
          if (blendAlphaEq === void 0) {
            blendAlphaEq = BlendOp.ADD;
          }
          if (blendColorMask === void 0) {
            blendColorMask = ColorMask.ALL;
          }
          this.blend = blend;
          this.blendSrc = blendSrc;
          this.blendDst = blendDst;
          this.blendEq = blendEq;
          this.blendSrcAlpha = blendSrcAlpha;
          this.blendDstAlpha = blendDstAlpha;
          this.blendAlphaEq = blendAlphaEq;
          this.blendColorMask = blendColorMask;
        }
        var _proto3 = BlendTarget.prototype;
        _proto3.reset = function reset() {
          this.blend = false;
          this.blendSrc = BlendFactor.ONE;
          this.blendDst = BlendFactor.ZERO;
          this.blendEq = BlendOp.ADD;
          this.blendSrcAlpha = BlendFactor.ONE;
          this.blendDstAlpha = BlendFactor.ZERO;
          this.blendAlphaEq = BlendOp.ADD;
          this.blendColorMask = ColorMask.ALL;
        };
        _proto3.assign = function assign(target) {
          Object.assign(this, target);
        };
        _proto3.destroy = function destroy() {};
        return BlendTarget;
      }());
      /**
       * @en GFX blend state.
       * @zh GFX 混合状态。
       */
      _export("BlendState", BlendState = /*#__PURE__*/function () {
        function BlendState(isA2C, isIndepend, blendColor, targets) {
          if (isA2C === void 0) {
            isA2C = false;
          }
          if (isIndepend === void 0) {
            isIndepend = false;
          }
          if (blendColor === void 0) {
            blendColor = new Color();
          }
          if (targets === void 0) {
            targets = [new BlendTarget()];
          }
          this.isA2C = isA2C;
          this.isIndepend = isIndepend;
          this.blendColor = blendColor;
          this.targets = targets;
        }

        /**
         * @en Should use this function to set target, or it will not work
         * on native platforms, as native can not support this feature,
         * such as `blendState[i] = target;`.
         *
         * @param index The index to set target.
         * @param target The target to be set.
         */
        var _proto4 = BlendState.prototype;
        _proto4.setTarget = function setTarget(index, target) {
          var tg = this.targets[index];
          if (!tg) {
            tg = this.targets[index] = new BlendTarget();
          }
          Object.assign(tg, target);
        };
        _proto4.reset = function reset() {
          this.isA2C = false;
          this.isIndepend = false;
          this.blendColor.x = 0;
          this.blendColor.y = 0;
          this.blendColor.z = 0;
          this.blendColor.w = 0;
          this.targets.length = 1;
          this.targets[0].reset();
        };
        _proto4.destroy = function destroy() {};
        _createClass(BlendState, [{
          key: "native",
          get:
          // to make sure all usages must be an instance of this exact class, not assembled from plain object

          function get() {
            return this;
          }
        }]);
        return BlendState;
      }());
    }
  };
});
System.register("q-bundled:///fs/cocos/gfx/base/pipeline-sub-state.jsb.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var BlendFactor, BlendOp, ColorMask, ComparisonFunc, CullMode, PolygonMode, ShadeModel, StencilOp, Color, RasterizerState, DepthStencilState, BlendTarget, BlendState;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  function watchArrayElementsField(self, list, eleField, cachedFieldName, callback) {
    var _loop = function _loop(i) {
      var ele = list[i];
      var originField = ele[eleField][cachedFieldName] || ele[eleField];
      // replace with Proxy
      ele[eleField] = new Proxy(originField, {
        get: function get(originTarget, key) {
          if (key === cachedFieldName) {
            return originTarget;
          }
          return Reflect.get(originTarget, key);
        },
        set: function set(originTarget, prop, value) {
          Reflect.set(originTarget, prop, value);
          callback(self, i, originTarget, prop, value);
          return true;
        }
      });
    };
    for (var i = 0, l = list.length; i < l; i++) {
      _loop(i);
    }
  }
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
          this._nativeObj = void 0;
          this._isDiscard = false;
          this._polygonMode = PolygonMode.FILL;
          this._shadeModel = ShadeModel.GOURAND;
          this._cullMode = CullMode.BACK;
          this._isFrontFaceCCW = true;
          this._depthBiasEnabled = false;
          this._depthBias = 0;
          this._depthBiasClamp = 0.0;
          this._depthBiasSlop = 0.0;
          this._isDepthClip = true;
          this._isMultisample = false;
          this._lineWidth = 1.0;
          this._nativeObj = new gfx.RasterizerState();
          this.assignProperties(isDiscard, polygonMode, shadeModel, cullMode, isFrontFaceCCW, depthBiasEnabled, depthBias, depthBiasClamp, depthBiasSlop, isDepthClip, isMultisample, lineWidth);
        }
        var _proto = RasterizerState.prototype;
        _proto.reset = function reset() {
          this.assignProperties(false, PolygonMode.FILL, ShadeModel.GOURAND, CullMode.BACK, true, false, 0, 0.0, 0.0, true, false, 1.0);
        };
        _proto.assign = function assign(rs) {
          if (!rs) return;
          this.assignProperties(rs.isDiscard, rs.polygonMode, rs.shadeModel, rs.cullMode, rs.isFrontFaceCCW, rs.depthBiasEnabled, rs.depthBias, rs.depthBiasClamp, rs.depthBiasSlop, rs.isDepthClip, rs.isMultisample, rs.lineWidth);
        };
        _proto.destroy = function destroy() {
          this._nativeObj = null;
        };
        _proto.assignProperties = function assignProperties(isDiscard, polygonMode, shadeModel, cullMode, isFrontFaceCCW, depthBiasEnabled, depthBias, depthBiasClamp, depthBiasSlop, isDepthClip, isMultisample, lineWidth) {
          if (isDiscard !== undefined) this.isDiscard = isDiscard;
          if (polygonMode !== undefined) this.polygonMode = polygonMode;
          if (shadeModel !== undefined) this.shadeModel = shadeModel;
          if (cullMode !== undefined) this.cullMode = cullMode;
          if (isFrontFaceCCW !== undefined) this.isFrontFaceCCW = isFrontFaceCCW;
          if (depthBiasEnabled !== undefined) this.depthBiasEnabled = depthBiasEnabled;
          if (depthBias !== undefined) this.depthBias = depthBias;
          if (depthBiasClamp !== undefined) this.depthBiasClamp = depthBiasClamp;
          if (depthBiasSlop !== undefined) this.depthBiasSlop = depthBiasSlop;
          if (isDepthClip !== undefined) this.isDepthClip = isDepthClip;
          if (isMultisample !== undefined) this.isMultisample = isMultisample;
          if (lineWidth !== undefined) this.lineWidth = lineWidth;
        };
        _createClass(RasterizerState, [{
          key: "native",
          get: function get() {
            return this._nativeObj;
          }
        }, {
          key: "isDiscard",
          get: function get() {
            return this._isDiscard;
          },
          set: function set(val) {
            this._isDiscard = val;
            this._nativeObj.isDiscard = val;
          }
        }, {
          key: "polygonMode",
          get: function get() {
            return this._polygonMode;
          },
          set: function set(val) {
            this._polygonMode = val;
            this._nativeObj.polygonMode = val;
          }
        }, {
          key: "shadeModel",
          get: function get() {
            return this._shadeModel;
          },
          set: function set(val) {
            this._shadeModel = val;
            this._nativeObj.shadeModel = val;
          }
        }, {
          key: "cullMode",
          get: function get() {
            return this._cullMode;
          },
          set: function set(val) {
            this._cullMode = val;
            this._nativeObj.cullMode = val;
          }
        }, {
          key: "isFrontFaceCCW",
          get: function get() {
            return this._isFrontFaceCCW;
          },
          set: function set(val) {
            this._isFrontFaceCCW = val;
            this._nativeObj.isFrontFaceCCW = val;
          }
        }, {
          key: "depthBiasEnabled",
          get: function get() {
            return this._depthBiasEnabled;
          },
          set: function set(val) {
            this._depthBiasEnabled = val;
            this._nativeObj.depthBiasEnabled = val;
          }
        }, {
          key: "depthBias",
          get: function get() {
            return this._depthBias;
          },
          set: function set(val) {
            this._depthBias = val;
            this._nativeObj.depthBias = val;
          }
        }, {
          key: "depthBiasClamp",
          get: function get() {
            return this._depthBiasClamp;
          },
          set: function set(val) {
            this._depthBiasClamp = val;
            this._nativeObj.depthBiasClamp = val;
          }
        }, {
          key: "depthBiasSlop",
          get: function get() {
            return this._depthBiasSlop;
          },
          set: function set(val) {
            this._depthBiasSlop = val;
            this._nativeObj.depthBiasSlop = val;
          }
        }, {
          key: "isDepthClip",
          get: function get() {
            return this._isDepthClip;
          },
          set: function set(val) {
            this._isDepthClip = val;
            this._nativeObj.isDepthClip = val;
          }
        }, {
          key: "isMultisample",
          get: function get() {
            return this._isMultisample;
          },
          set: function set(val) {
            this._isMultisample = val;
            this._nativeObj.isMultisample = val;
          }
        }, {
          key: "lineWidth",
          get: function get() {
            return this._lineWidth;
          },
          set: function set(val) {
            this._lineWidth = val;
            this._nativeObj.lineWidth = val;
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
          this._nativeObj = void 0;
          this._depthTest = true;
          this._depthWrite = true;
          this._depthFunc = ComparisonFunc.LESS;
          this._stencilTestFront = false;
          this._stencilFuncFront = ComparisonFunc.ALWAYS;
          this._stencilReadMaskFront = 0xffff;
          this._stencilWriteMaskFront = 0xffff;
          this._stencilFailOpFront = StencilOp.KEEP;
          this._stencilZFailOpFront = StencilOp.KEEP;
          this._stencilPassOpFront = StencilOp.KEEP;
          this._stencilRefFront = 1;
          this._stencilTestBack = false;
          this._stencilFuncBack = ComparisonFunc.ALWAYS;
          this._stencilReadMaskBack = 0xffff;
          this._stencilWriteMaskBack = 0xffff;
          this._stencilFailOpBack = StencilOp.KEEP;
          this._stencilZFailOpBack = StencilOp.KEEP;
          this._stencilPassOpBack = StencilOp.KEEP;
          this._stencilRefBack = 1;
          this._nativeObj = new gfx.DepthStencilState();
          this.assignProperties(depthTest, depthWrite, depthFunc, stencilTestFront, stencilFuncFront, stencilReadMaskFront, stencilWriteMaskFront, stencilFailOpFront, stencilZFailOpFront, stencilPassOpFront, stencilRefFront, stencilTestBack, stencilFuncBack, stencilReadMaskBack, stencilWriteMaskBack, stencilFailOpBack, stencilZFailOpBack, stencilPassOpBack, stencilRefBack);
        }
        var _proto2 = DepthStencilState.prototype;
        _proto2.reset = function reset() {
          this.assignProperties(true, true, ComparisonFunc.LESS, false, ComparisonFunc.ALWAYS, 0xffff, 0xffff, StencilOp.KEEP, StencilOp.KEEP, StencilOp.KEEP, 1, false, ComparisonFunc.ALWAYS, 0xffff, 0xffff, StencilOp.KEEP, StencilOp.KEEP, StencilOp.KEEP, 1);
        };
        _proto2.assign = function assign(dss) {
          if (!dss) return;
          this.assignProperties(dss.depthTest, dss.depthWrite, dss.depthFunc, dss.stencilTestFront, dss.stencilFuncFront, dss.stencilReadMaskFront, dss.stencilWriteMaskFront, dss.stencilFailOpFront, dss.stencilZFailOpFront, dss.stencilPassOpFront, dss.stencilRefFront, dss.stencilTestBack, dss.stencilFuncBack, dss.stencilReadMaskBack, dss.stencilWriteMaskBack, dss.stencilFailOpBack, dss.stencilZFailOpBack, dss.stencilPassOpBack, dss.stencilRefBack);
        };
        _proto2.destroy = function destroy() {
          this._nativeObj = null;
        };
        _proto2.assignProperties = function assignProperties(depthTest, depthWrite, depthFunc, stencilTestFront, stencilFuncFront, stencilReadMaskFront, stencilWriteMaskFront, stencilFailOpFront, stencilZFailOpFront, stencilPassOpFront, stencilRefFront, stencilTestBack, stencilFuncBack, stencilReadMaskBack, stencilWriteMaskBack, stencilFailOpBack, stencilZFailOpBack, stencilPassOpBack, stencilRefBack) {
          if (depthTest !== undefined) this.depthTest = depthTest;
          if (depthWrite !== undefined) this.depthWrite = depthWrite;
          if (depthFunc !== undefined) this.depthFunc = depthFunc;
          if (stencilTestFront !== undefined) this.stencilTestFront = stencilTestFront;
          if (stencilFuncFront !== undefined) this.stencilFuncFront = stencilFuncFront;
          if (stencilReadMaskFront !== undefined) this.stencilReadMaskFront = stencilReadMaskFront;
          if (stencilWriteMaskFront !== undefined) this.stencilWriteMaskFront = stencilWriteMaskFront;
          if (stencilFailOpFront !== undefined) this.stencilFailOpFront = stencilFailOpFront;
          if (stencilZFailOpFront !== undefined) this.stencilZFailOpFront = stencilZFailOpFront;
          if (stencilPassOpFront !== undefined) this.stencilPassOpFront = stencilPassOpFront;
          if (stencilRefFront !== undefined) this.stencilRefFront = stencilRefFront;
          if (stencilTestBack !== undefined) this.stencilTestBack = stencilTestBack;
          if (stencilFuncBack !== undefined) this.stencilFuncBack = stencilFuncBack;
          if (stencilReadMaskBack !== undefined) this.stencilReadMaskBack = stencilReadMaskBack;
          if (stencilWriteMaskBack !== undefined) this.stencilWriteMaskBack = stencilWriteMaskBack;
          if (stencilFailOpBack !== undefined) this.stencilFailOpBack = stencilFailOpBack;
          if (stencilZFailOpBack !== undefined) this.stencilZFailOpBack = stencilZFailOpBack;
          if (stencilPassOpBack !== undefined) this.stencilPassOpBack = stencilPassOpBack;
          if (stencilRefBack !== undefined) this.stencilRefBack = stencilRefBack;
        };
        _createClass(DepthStencilState, [{
          key: "native",
          get: function get() {
            return this._nativeObj;
          }
        }, {
          key: "depthTest",
          get: function get() {
            return this._depthTest;
          },
          set: function set(val) {
            this._depthTest = val;
            this._nativeObj.depthTest = val;
          }
        }, {
          key: "depthWrite",
          get: function get() {
            return this._depthWrite;
          },
          set: function set(val) {
            this._depthWrite = val;
            this._nativeObj.depthWrite = val;
          }
        }, {
          key: "depthFunc",
          get: function get() {
            return this._depthFunc;
          },
          set: function set(val) {
            this._depthFunc = val;
            this._nativeObj.depthFunc = val;
          }
        }, {
          key: "stencilTestFront",
          get: function get() {
            return this._stencilTestFront;
          },
          set: function set(val) {
            this._stencilTestFront = val;
            this._nativeObj.stencilTestFront = val;
          }
        }, {
          key: "stencilFuncFront",
          get: function get() {
            return this._stencilFuncFront;
          },
          set: function set(val) {
            this._stencilFuncFront = val;
            this._nativeObj.stencilFuncFront = val;
          }
        }, {
          key: "stencilReadMaskFront",
          get: function get() {
            return this._stencilReadMaskFront;
          },
          set: function set(val) {
            this._stencilReadMaskFront = val;
            this._nativeObj.stencilReadMaskFront = val;
          }
        }, {
          key: "stencilWriteMaskFront",
          get: function get() {
            return this._stencilWriteMaskFront;
          },
          set: function set(val) {
            this._stencilWriteMaskFront = val;
            this._nativeObj.stencilWriteMaskFront = val;
          }
        }, {
          key: "stencilFailOpFront",
          get: function get() {
            return this._stencilFailOpFront;
          },
          set: function set(val) {
            this._stencilFailOpFront = val;
            this._nativeObj.stencilFailOpFront = val;
          }
        }, {
          key: "stencilZFailOpFront",
          get: function get() {
            return this._stencilZFailOpFront;
          },
          set: function set(val) {
            this._stencilZFailOpFront = val;
            this._nativeObj.stencilZFailOpFront = val;
          }
        }, {
          key: "stencilPassOpFront",
          get: function get() {
            return this._stencilPassOpFront;
          },
          set: function set(val) {
            this._stencilPassOpFront = val;
            this._nativeObj.stencilPassOpFront = val;
          }
        }, {
          key: "stencilRefFront",
          get: function get() {
            return this._stencilRefFront;
          },
          set: function set(val) {
            this._stencilRefFront = val;
            this._nativeObj.stencilRefFront = val;
          }
        }, {
          key: "stencilTestBack",
          get: function get() {
            return this._stencilTestBack;
          },
          set: function set(val) {
            this._stencilTestBack = val;
            this._nativeObj.stencilTestBack = val;
          }
        }, {
          key: "stencilFuncBack",
          get: function get() {
            return this._stencilFuncBack;
          },
          set: function set(val) {
            this._stencilFuncBack = val;
            this._nativeObj.stencilFuncBack = val;
          }
        }, {
          key: "stencilReadMaskBack",
          get: function get() {
            return this._stencilReadMaskBack;
          },
          set: function set(val) {
            this._stencilReadMaskBack = val;
            this._nativeObj.stencilReadMaskBack = val;
          }
        }, {
          key: "stencilWriteMaskBack",
          get: function get() {
            return this._stencilWriteMaskBack;
          },
          set: function set(val) {
            this._stencilWriteMaskBack = val;
            this._nativeObj.stencilWriteMaskBack = val;
          }
        }, {
          key: "stencilFailOpBack",
          get: function get() {
            return this._stencilFailOpBack;
          },
          set: function set(val) {
            this._stencilFailOpBack = val;
            this._nativeObj.stencilFailOpBack = val;
          }
        }, {
          key: "stencilZFailOpBack",
          get: function get() {
            return this._stencilZFailOpBack;
          },
          set: function set(val) {
            this._stencilZFailOpBack = val;
            this._nativeObj.stencilZFailOpBack = val;
          }
        }, {
          key: "stencilPassOpBack",
          get: function get() {
            return this._stencilPassOpBack;
          },
          set: function set(val) {
            this._stencilPassOpBack = val;
            this._nativeObj.stencilPassOpBack = val;
          }
        }, {
          key: "stencilRefBack",
          get: function get() {
            return this._stencilRefBack;
          },
          set: function set(val) {
            this._stencilRefBack = val;
            this._nativeObj.stencilRefBack = val;
          }
        }]);
        return DepthStencilState;
      }());
      /**
       * @en GFX blend target.
       * @zh GFX 混合目标。
       */
      _export("BlendTarget", BlendTarget = /*#__PURE__*/function () {
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
          this._nativeObj = void 0;
          this._blend = false;
          this._blendSrc = BlendFactor.ONE;
          this._blendDst = BlendFactor.ZERO;
          this._blendEq = BlendOp.ADD;
          this._blendSrcAlpha = BlendFactor.ONE;
          this._blendDstAlpha = BlendFactor.ZERO;
          this._blendAlphaEq = BlendOp.ADD;
          this._blendColorMask = ColorMask.ALL;
          this._nativeObj = new gfx.BlendTarget();
          this.assignProperties(blend, blendSrc, blendDst, blendEq, blendSrcAlpha, blendDstAlpha, blendAlphaEq, blendColorMask);
        }
        var _proto3 = BlendTarget.prototype;
        _proto3.reset = function reset() {
          this.assignProperties(false, BlendFactor.ONE, BlendFactor.ZERO, BlendOp.ADD, BlendFactor.ONE, BlendFactor.ZERO, BlendOp.ADD, ColorMask.ALL);
        };
        _proto3.destroy = function destroy() {
          this._nativeObj = null;
        };
        _proto3.assign = function assign(target) {
          if (!target) return;
          this.assignProperties(target.blend, target.blendSrc, target.blendDst, target.blendEq, target.blendSrcAlpha, target.blendDstAlpha, target.blendAlphaEq, target.blendColorMask);
        };
        _proto3.assignProperties = function assignProperties(blend, blendSrc, blendDst, blendEq, blendSrcAlpha, blendDstAlpha, blendAlphaEq, blendColorMask) {
          if (blend !== undefined) this.blend = blend;
          if (blendSrc !== undefined) this.blendSrc = blendSrc;
          if (blendDst !== undefined) this.blendDst = blendDst;
          if (blendEq !== undefined) this.blendEq = blendEq;
          if (blendSrcAlpha !== undefined) this.blendSrcAlpha = blendSrcAlpha;
          if (blendDstAlpha !== undefined) this.blendDstAlpha = blendDstAlpha;
          if (blendAlphaEq !== undefined) this.blendAlphaEq = blendAlphaEq;
          if (blendColorMask !== undefined) this.blendColorMask = blendColorMask;
        };
        _createClass(BlendTarget, [{
          key: "native",
          get: function get() {
            return this._nativeObj;
          }
        }, {
          key: "blend",
          get: function get() {
            return this._blend;
          },
          set: function set(val) {
            this._blend = val;
            this._nativeObj.blend = val;
          }
        }, {
          key: "blendSrc",
          get: function get() {
            return this._blendSrc;
          },
          set: function set(val) {
            this._blendSrc = val;
            this._nativeObj.blendSrc = val;
          }
        }, {
          key: "blendDst",
          get: function get() {
            return this._blendDst;
          },
          set: function set(val) {
            this._blendDst = val;
            this._nativeObj.blendDst = val;
          }
        }, {
          key: "blendEq",
          get: function get() {
            return this._blendEq;
          },
          set: function set(val) {
            this._blendEq = val;
            this._nativeObj.blendEq = val;
          }
        }, {
          key: "blendSrcAlpha",
          get: function get() {
            return this._blendSrcAlpha;
          },
          set: function set(val) {
            this._blendSrcAlpha = val;
            this._nativeObj.blendSrcAlpha = val;
          }
        }, {
          key: "blendDstAlpha",
          get: function get() {
            return this._blendDstAlpha;
          },
          set: function set(val) {
            this._blendDstAlpha = val;
            this._nativeObj.blendDstAlpha = val;
          }
        }, {
          key: "blendAlphaEq",
          get: function get() {
            return this._blendAlphaEq;
          },
          set: function set(val) {
            this._blendAlphaEq = val;
            this._nativeObj.blendAlphaEq = val;
          }
        }, {
          key: "blendColorMask",
          get: function get() {
            return this._blendColorMask;
          },
          set: function set(val) {
            this._blendColorMask = val;
            this._nativeObj.blendColorMask = val;
          }
        }]);
        return BlendTarget;
      }());
      _export("BlendState", BlendState = /*#__PURE__*/function () {
        var _proto4 = BlendState.prototype;
        _proto4._setTargets = function _setTargets(targets) {
          this.targets = targets;
          var CACHED_FIELD_NAME = "$__nativeObj";
          this._syncTargetsToNativeObj(CACHED_FIELD_NAME);

          // watch target[i]._nativeObj fields update
          watchArrayElementsField(this, this.targets, "_nativeObj", CACHED_FIELD_NAME, function (self, _idx, _originTarget, _prop, _value) {
            self._syncTargetsToNativeObj(CACHED_FIELD_NAME);
          });
        };
        _proto4._syncTargetsToNativeObj = function _syncTargetsToNativeObj(cachedFieldName) {
          var nativeTars = this.targets.map(function (target) {
            return target["native"][cachedFieldName] || target["native"];
          });
          this._nativeObj.targets = nativeTars;
        };
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
          // NOTE: not initialize in constructor
          this.targets = void 0;
          // NOTE: not initialize in constructor
          this._blendColor = void 0;
          this._nativeObj = void 0;
          this._isA2C = false;
          this._isIndepend = false;
          this._nativeObj = new gfx.BlendState();
          this._setTargets(targets);
          this.blendColor = blendColor;
          this.isA2C = isA2C;
          this.isIndepend = isIndepend;
        }
        /**
         * @en Should use this function to set target, or it will not work
         * on native platforms, as native can not support this feature,
         * such as `blendState[i] = target;`.
         *
         * @param index The index to set target.
         * @param target The target to be set.
         */
        _proto4.setTarget = function setTarget(index, target) {
          var tg = this.targets[index];
          if (!tg) {
            tg = this.targets[index] = new BlendTarget();
          }
          tg.assign(target);
          // TODO: define setTarget function
          this._setTargets(this.targets);
        };
        _proto4.reset = function reset() {
          this.isA2C = false;
          this.isIndepend = false;
          this.blendColor = new Color(0, 0, 0, 0);
          var targets = this.targets;
          for (var i = 1, len = targets.length; i < len; ++i) {
            targets[i].destroy();
          }
          targets.length = 1;
          targets[0].reset();
          this._setTargets(targets);
        };
        _proto4.destroy = function destroy() {
          for (var i = 0, len = this.targets.length; i < len; ++i) {
            this.targets[i].destroy();
          }
          // NOTE: Type 'null' is not assignable to type 'BlendTarget[]'.
          this.targets = null;
          this._nativeObj = null;
        };
        _createClass(BlendState, [{
          key: "native",
          get: function get() {
            return this._nativeObj;
          }
        }, {
          key: "isA2C",
          get: function get() {
            return this._isA2C;
          },
          set: function set(val) {
            this._isA2C = val;
            this._nativeObj.isA2C = val;
          }
        }, {
          key: "isIndepend",
          get: function get() {
            return this._isIndepend;
          },
          set: function set(val) {
            this._isIndepend = val;
            this._nativeObj.isIndepend = val;
          }
        }, {
          key: "blendColor",
          get: function get() {
            return this._blendColor;
          },
          set: function set(color) {
            this._blendColor = color;
            this._nativeObj.blendColor = color;
          }
        }]);
        return BlendState;
      }());
    }
  };
});
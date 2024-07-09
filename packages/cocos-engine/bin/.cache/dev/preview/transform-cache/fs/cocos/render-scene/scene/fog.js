System.register("q-bundled:///fs/cocos/render-scene/scene/fog.js", ["../../core/index.js", "../../rendering/pipeline-funcs.js"], function (_export, _context) {
  "use strict";

  var Enum, Color, Vec4, cclegacy, SRGBToLinear, _v4, FogType, FOG_TYPE_NONE, Fog;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    setters: [function (_coreIndexJs) {
      Enum = _coreIndexJs.Enum;
      Color = _coreIndexJs.Color;
      Vec4 = _coreIndexJs.Vec4;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderingPipelineFuncsJs) {
      SRGBToLinear = _renderingPipelineFuncsJs.SRGBToLinear;
    }],
    execute: function () {
      _v4 = new Vec4();
      /**
       * @zh
       * 全局雾类型。
       * @en
       * The global fog type
       * @static
       * @enum FogInfo.FogType
       */
      _export("FogType", FogType = Enum({
        /**
         * @zh
         * 线性雾。
         * @en
         * Linear fog
         * @readonly
         */
        LINEAR: 0,
        /**
         * @zh
         * 指数雾。
         * @en
         * Exponential fog
         * @readonly
         */
        EXP: 1,
        /**
         * @zh
         * 指数平方雾。
         * @en
         * Exponential square fog
         * @readonly
         */
        EXP_SQUARED: 2,
        /**
         * @zh
         * 层叠雾。
         * @en
         * Layered fog
         * @readonly
         */
        LAYERED: 3
      }));
      _export("FOG_TYPE_NONE", FOG_TYPE_NONE = FogType.LAYERED + 1);
      /**
       * @en The fog representation in the render scene.
       * @zh 渲染场景中的全局雾效配置
       */
      _export("Fog", Fog = /*#__PURE__*/function () {
        function Fog() {
          this._fogColor = new Color('#C8C8C8');
          this._colorArray = new Vec4(0.2, 0.2, 0.2, 1.0);
          this._enabled = false;
          this._accurate = false;
          this._type = 0;
          this._fogDensity = 0.3;
          this._fogStart = 0.5;
          this._fogEnd = 300;
          this._fogAtten = 5;
          this._fogTop = 1.5;
          this._fogRange = 1.2;
          this._activated = false;
        }
        var _proto = Fog.prototype;
        _proto.initialize = function initialize(fogInfo) {
          this._activated = false;
          this.fogColor = fogInfo.fogColor;
          this._enabled = fogInfo.enabled;
          this._type = this.enabled ? fogInfo.type : FOG_TYPE_NONE;
          this._accurate = fogInfo.accurate;
          this.fogDensity = fogInfo.fogDensity;
          this.fogStart = fogInfo.fogStart;
          this.fogEnd = fogInfo.fogEnd;
          this.fogAtten = fogInfo.fogAtten;
          this.fogTop = fogInfo.fogTop;
          this.fogRange = fogInfo.fogRange;
        };
        _proto.activate = function activate() {
          this._updatePipeline();
          this._activated = true;
        };
        _proto._updatePipeline = function _updatePipeline() {
          var root = cclegacy.director.root;
          var value = this.enabled ? this.type : FOG_TYPE_NONE;
          var accurateValue = this.accurate ? 1 : 0;
          var pipeline = root.pipeline;
          if (pipeline.macros.CC_USE_FOG === value && pipeline.macros.CC_USE_ACCURATE_FOG === accurateValue) {
            return;
          }
          pipeline.macros.CC_USE_FOG = value;
          pipeline.macros.CC_USE_ACCURATE_FOG = accurateValue;
          if (this._activated) {
            root.onGlobalPipelineStateChanged();
          }
        };
        _createClass(Fog, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          }

          /**
           * @zh 是否启用精确雾效(像素雾)计算
           * @en Enable accurate fog (pixel fog)
           */,
          set:
          /**
           * @zh 是否启用全局雾效
           * @en Enable global fog
           */
          function set(val) {
            this._enabled = val;
            if (!val) {
              this._type = FOG_TYPE_NONE;
              this._updatePipeline();
            } else {
              this.activate();
            }
          }
        }, {
          key: "accurate",
          get: function get() {
            return this._accurate;
          }

          /**
           * @zh 全局雾颜色
           * @en Global fog color
           */,
          set: function set(val) {
            this._accurate = val;
            this._updatePipeline();
          }
        }, {
          key: "fogColor",
          get: function get() {
            return this._fogColor;
          }

          /**
           * @zh 当前雾化类型。
           * @en The current global fog type.
           * @returns {FogType}
           * Returns the current global fog type
           * - -1:Disable global Fog
           * - 0:Linear fog
           * - 1:Exponential fog
           * - 2:Exponential square fog
           * - 3:Layered fog
           */,
          set: function set(val) {
            this._fogColor.set(val);
            _v4.set(val.x, val.y, val.z, val.w);
            SRGBToLinear(this._colorArray, _v4);
          }
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(val) {
            this._type = this.enabled ? val : FOG_TYPE_NONE;
            if (this.enabled) this._updatePipeline();
          }

          /**
           * @zh 全局雾浓度
           * @en Global fog density
           */
        }, {
          key: "fogDensity",
          get: function get() {
            return this._fogDensity;
          },
          set: function set(val) {
            this._fogDensity = val;
          }
          /**
           * @zh 雾效起始位置，只适用于线性雾
           * @en Global fog start position, only for linear fog
           */
        }, {
          key: "fogStart",
          get: function get() {
            return this._fogStart;
          },
          set: function set(val) {
            this._fogStart = val;
          }

          /**
           * @zh 雾效结束位置，只适用于线性雾
           * @en Global fog end position, only for linear fog
           */
        }, {
          key: "fogEnd",
          get: function get() {
            return this._fogEnd;
          },
          set: function set(val) {
            this._fogEnd = val;
          }

          /**
           * @zh 雾效衰减
           * @en Global fog attenuation
           */
        }, {
          key: "fogAtten",
          get: function get() {
            return this._fogAtten;
          },
          set: function set(val) {
            this._fogAtten = val;
          }

          /**
           * @zh 雾效顶部范围，只适用于层级雾
           * @en Global fog top range, only for layered fog
           */
        }, {
          key: "fogTop",
          get: function get() {
            return this._fogTop;
          },
          set: function set(val) {
            this._fogTop = val;
          }

          /**
           * @zh 雾效范围，只适用于层级雾
           * @en Global fog range, only for layered fog
           */
        }, {
          key: "fogRange",
          get: function get() {
            return this._fogRange;
          },
          set: function set(val) {
            this._fogRange = val;
          }
        }, {
          key: "colorArray",
          get: function get() {
            return this._colorArray;
          }
        }]);
        return Fog;
      }());
      cclegacy.Fog = Fog;
    }
  };
});
System.register("q-bundled:///fs/cocos/render-scene/scene/ambient.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec4, cclegacy, Ambient;
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
      Vec4 = _coreIndexJs.Vec4;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en Ambient lighting representation in the render scene.
       * The initial data is setup in [[SceneGlobals.ambient]].
       * @zh 渲染场景中的环境光照设置。
       * 初始值是由 [[SceneGlobals.ambient]] 设置的。
       */
      _export("Ambient", Ambient = /*#__PURE__*/function () {
        function Ambient() {
          this._groundAlbedoHDR = new Vec4(0.2, 0.2, 0.2, 1.0);
          this._skyColorHDR = new Vec4(0.2, 0.5, 0.8, 1.0);
          this._skyIllumHDR = 0;
          this._groundAlbedoLDR = new Vec4(0.2, 0.2, 0.2, 1.0);
          this._skyColorLDR = new Vec4(0.2, 0.5, 0.8, 1.0);
          this._skyIllumLDR = 0;
          this._mipmapCount = 1;
          this._enabled = false;
        }
        var _proto = Ambient.prototype;
        _proto.initialize = function initialize(ambientInfo) {
          // Init HDR/LDR from serialized data on load
          this._skyColorHDR = ambientInfo.skyColorHDR;
          this._groundAlbedoHDR.set(ambientInfo.groundAlbedoHDR);
          this._skyIllumHDR = ambientInfo.skyIllumHDR;
          this._skyColorLDR = ambientInfo.skyColorLDR;
          this._groundAlbedoLDR.set(ambientInfo.groundAlbedoLDR);
          this._skyIllumLDR = ambientInfo.skyIllumLDR;
        };
        _createClass(Ambient, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          }
          /**
           * @en Sky color
           * @zh 天空颜色
           */,
          set:
          /**
           * @en Enable ambient
           * @zh 是否开启环境光
           */
          function set(val) {
            this._enabled = val;
          }
        }, {
          key: "skyColor",
          get: function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._skyColorHDR;
            } else {
              return this._skyColorLDR;
            }
          },
          set: function set(color) {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this._skyColorHDR.set(color);
            } else {
              this._skyColorLDR.set(color);
            }
          }

          /**
           * @en Sky illuminance
           * @zh 天空亮度
           */
        }, {
          key: "skyIllum",
          get: function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._skyIllumHDR;
            } else {
              return this._skyIllumLDR;
            }
          },
          set: function set(illum) {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this._skyIllumHDR = illum;
            } else {
              this._skyIllumLDR = illum;
            }
          }
          /**
           * @en Ground color
           * @zh 地面颜色
           */
        }, {
          key: "groundAlbedo",
          get: function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._groundAlbedoHDR;
            } else {
              return this._groundAlbedoLDR;
            }
          },
          set: function set(color) {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this._groundAlbedoHDR.set(color);
            } else {
              this._groundAlbedoLDR.set(color);
            }
          }
        }]);
        return Ambient;
      }());
      /**
       * @en Default sun illuminance
       * @zh 默认太阳亮度
       */
      Ambient.SUN_ILLUM = 65000.0;
      /**
       * @en Default sky illuminance
       * @zh 默认天空亮度
       */
      Ambient.SKY_ILLUM = 20000.0;
      cclegacy.Ambient = Ambient;
    }
  };
});
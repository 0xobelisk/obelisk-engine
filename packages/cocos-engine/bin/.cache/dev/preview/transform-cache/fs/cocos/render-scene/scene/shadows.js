System.register("q-bundled:///fs/cocos/render-scene/scene/shadows.js", ["../../../../virtual/internal%253Aconstants.js", "../../asset/assets/material.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var DEBUG, Material, Color, Mat4, Vec3, Vec2, Enum, assert, geometry, cclegacy, ShadowSize, ShadowType, PCFType, CSMLevel, CSMOptimizationMode, SHADOW_TYPE_NONE, Shadows;
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
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Mat4 = _coreIndexJs.Mat4;
      Vec3 = _coreIndexJs.Vec3;
      Vec2 = _coreIndexJs.Vec2;
      Enum = _coreIndexJs.Enum;
      assert = _coreIndexJs.assert;
      geometry = _coreIndexJs.geometry;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @zh 阴影贴图分辨率。
       * @en The shadow map size.
       * @static
       * @enum Shadows.ShadowSize
       */
      _export("ShadowSize", ShadowSize = Enum({
        /**
         * @zh 分辨率 256 * 256。
         * @en shadow resolution 256 * 256.
         * @readonly
         */
        Low_256x256: 256,
        /**
         * @zh 分辨率 512 * 512。
         * @en shadow resolution 512 * 512.
         * @readonly
         */
        Medium_512x512: 512,
        /**
         * @zh 分辨率 1024 * 1024。
         * @en shadow resolution 1024 * 1024.
         * @readonly
         */
        High_1024x1024: 1024,
        /**
         * @zh 分辨率 2048 * 2048。
         * @en shadow resolution 2048 * 2048.
         * @readonly
         */
        Ultra_2048x2048: 2048
      }));
      /**
       * @zh 阴影类型。
       * @en The shadow type
       * @enum Shadows.ShadowType
       */
      _export("ShadowType", ShadowType = Enum({
        /**
         * @zh 平面阴影。
         * @en Planar shadow
         * @property Planar
         * @readonly
         */
        Planar: 0,
        /**
         * @zh 阴影贴图。
         * @en Shadow type
         * @property ShadowMap
         * @readonly
         */
        ShadowMap: 1
      }));
      /**
       * @zh pcf阴影等级。
       * @en The pcf type
       * @static
       * @enum Shadows.PCFType
       */
      _export("PCFType", PCFType = Enum({
        /**
         * @zh x1 次采样
         * @en x1 times
         * @readonly
         */
        HARD: 0,
        /**
         * @zh x4 次采样
         * @en x4 times
         * @readonly
         */
        SOFT: 1,
        /**
         * @zh x9 次采样
         * @en x9 times
         * @readonly
         */
        SOFT_2X: 2,
        /**
         * @zh x16 次采样
         * @en x16 times
         * @readonly
         */
        SOFT_4X: 3
      }));
      /**
       * @zh 级联阴影贴图层级。
       * @en The CSM shadow level
       * @enum Shadows.CSMLevel
       */
      _export("CSMLevel", CSMLevel = Enum({
        /**
         * @zh 1 个层级
         * @en level 1
         * @readonly
         */
        LEVEL_1: 1,
        /**
         * @zh 2 个层级
         * @en level 2
         * @readonly
         */
        LEVEL_2: 2,
        /**
         * @zh 3 个层级
         * @en level 3
         * @readonly
         */
        LEVEL_3: 3,
        /**
         * @zh 4 个层级
         * @en level 4
         * @readonly
         */
        LEVEL_4: 4
      }));
      /**
       * @zh 级联阴影性能优化模式。
       * @en The CSM performance optimization mode
       * @enum Shadows.CSMOptimizationMode
       */
      _export("CSMOptimizationMode", CSMOptimizationMode = Enum({
        /**
         * @zh 没有性能优化
         * @en has no performance optimization
         * @readonly
         */
        NONE: 1,
        /**
         * @zh 剔除层与层之间重复物体
         * @en Eliminate duplicate objects between layers
         * @readonly
         */
        RemoveDuplicates: 2,
        /**
          * @zh 取消稳抖
          * @en Disable rotation fix
          * @readonly
          */
        DisableRotationFix: 3
      }));
      SHADOW_TYPE_NONE = ShadowType.ShadowMap + 1;
      /**
       * @en The global shadow's configuration of the render scene
       * @zh 渲染场景的全局阴影配置
       */
      _export("Shadows", Shadows = /*#__PURE__*/function () {
        function Shadows() {
          /**
           * @en The bounding sphere of the shadow map.
           * @zh 用于计算固定区域阴影 Shadow map 的场景包围球.
           */
          this.fixedSphere = new geometry.Sphere(0.0, 0.0, 0.0, 0.01);
          /**
           * @en get or set shadow max received.
           * @zh 阴影接收的最大灯光数量。
           */
          this.maxReceived = 4;
          // local set
          this._matLight = new Mat4();
          this._material = null;
          this._instancingMaterial = null;
          // public properties of shadow
          this._enabled = false;
          this._type = SHADOW_TYPE_NONE;
          this._distance = 0;
          this._planeBias = 1.0;
          this._normal = new Vec3(0, 1, 0);
          this._shadowColor = new Color(0, 0, 0, 76);
          this._size = new Vec2(1024, 1024);
          this._shadowMapDirty = false;
        }
        var _proto = Shadows.prototype;
        /**
         * @en Get the shader for the planar shadow with macro patches
         * @zh 通过指定宏获取平面阴影的 Shader 对象
         * @param patches The macro patches for the shader
         * @returns The shader for the planar shadow
         */
        _proto.getPlanarShader = function getPlanarShader(patches) {
          if (!this._material) {
            this._material = new Material();
            this._material.initialize({
              effectName: 'pipeline/planar-shadow'
            });
          }
          var passes = this._material.passes;
          if (DEBUG) {
            assert(passes.length > 0, 'passes should not be empty!');
          }
          return passes.length > 0 ? passes[0].getShaderVariant(patches) : null;
        };
        _proto.initialize = function initialize(shadowsInfo) {
          this._enabled = shadowsInfo.enabled;
          this._type = this.enabled ? shadowsInfo.type : SHADOW_TYPE_NONE;
          this.normal = shadowsInfo.planeDirection;
          this.distance = shadowsInfo.planeHeight;
          this.planeBias = shadowsInfo.planeBias;
          this.shadowColor = shadowsInfo.shadowColor;
          this.maxReceived = shadowsInfo.maxReceived;
          if (shadowsInfo.shadowMapSize !== this._size.x) {
            this.size.set(shadowsInfo.shadowMapSize, shadowsInfo.shadowMapSize);
            this._shadowMapDirty = true;
          }
        };
        _proto.activate = function activate() {
          if (this._enabled) {
            if (this.type === ShadowType.Planar) {
              this._updatePlanarInfo();
            } else {
              var root = cclegacy.director.root;
              var pipeline = root.pipeline;
              pipeline.macros.CC_SHADOW_TYPE = 2;
              root.onGlobalPipelineStateChanged();
            }
          } else {
            var _root = cclegacy.director.root;
            var _pipeline = _root.pipeline;
            _pipeline.macros.CC_SHADOW_TYPE = 0;
            _root.onGlobalPipelineStateChanged();
          }
        };
        _proto._updatePlanarInfo = function _updatePlanarInfo() {
          if (!this._material) {
            this._material = new Material();
            this._material.initialize({
              effectName: 'pipeline/planar-shadow'
            });
          }
          var root = cclegacy.director.root;
          var pipeline = root.pipeline;
          pipeline.macros.CC_SHADOW_TYPE = 1;
          root.onGlobalPipelineStateChanged();
        };
        _proto.destroy = function destroy() {
          if (this._material) {
            this._material.destroy();
          }
          if (this._instancingMaterial) {
            this._instancingMaterial.destroy();
          }
          this.fixedSphere.destroy();
        };
        _createClass(Shadows, [{
          key: "enabled",
          get:
          /**
           * @en Whether activate planar shadow.
           * @zh 是否启用平面阴影？
           */
          function get() {
            return this._enabled;
          },
          set: function set(val) {
            this._enabled = val;
            this.activate();
          }

          /**
           * @en Shadow type.
           * @zh 阴影类型。
           */
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(val) {
            this._type = this.enabled ? val : SHADOW_TYPE_NONE;
            this.activate();
          }

          /**
           * @en The normal of the plane which receives shadow.
           * @zh 阴影接收平面的法线。
           */
        }, {
          key: "normal",
          get: function get() {
            return this._normal;
          },
          set: function set(val) {
            Vec3.copy(this._normal, val);
          }

          /**
           * @en The distance from coordinate origin to the receiving plane.
           * @zh 阴影接收平面与原点的距离。
           */
        }, {
          key: "distance",
          get: function get() {
            return this._distance;
          },
          set: function set(val) {
            this._distance = val;
          }

          /**
           * @en Positional offset values in planar shading calculations.
           * @zh 平面阴影计算中的位置偏移值。
           */
        }, {
          key: "planeBias",
          get: function get() {
            return this._planeBias;
          },
          set: function set(val) {
            this._planeBias = val;
          }

          /**
           * @en Shadow color.
           * @zh 阴影颜色。
           */
        }, {
          key: "shadowColor",
          get: function get() {
            return this._shadowColor;
          },
          set: function set(color) {
            this._shadowColor = color;
          }

          /**
           * @en get or set shadow camera orthoSize.
           * @zh 获取或者设置阴影纹理大小。
           */
        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(val) {
            this._size.set(val);
          }

          /**
           * @en shadow Map size has been modified.
           * @zh 阴影贴图大小是否被修改。
           */
        }, {
          key: "shadowMapDirty",
          get: function get() {
            return this._shadowMapDirty;
          },
          set: function set(val) {
            this._shadowMapDirty = val;
          }

          /**
           * @en The transform matrix of the light source
           * @zh 光源的变换矩阵
           */
        }, {
          key: "matLight",
          get: function get() {
            return this._matLight;
          }
        }, {
          key: "material",
          get: function get() {
            return this._material;
          }
        }, {
          key: "instancingMaterial",
          get: function get() {
            return this._instancingMaterial;
          }
        }]);
        return Shadows;
      }());
      /**
       * @en MAX_FAR. This is shadow camera max far.
       * @zh 阴影相机的最远视距。
       */
      Shadows.MAX_FAR = 2000.0;
      /**
       * @en EXPANSION_RATIO. This is shadow boundingBox Coefficient of expansion.
       * @zh 阴影包围盒扩大系数。
       */
      Shadows.COEFFICIENT_OF_EXPANSION = 2.0 * Math.sqrt(3.0);
      cclegacy.Shadows = Shadows;
    }
  };
});
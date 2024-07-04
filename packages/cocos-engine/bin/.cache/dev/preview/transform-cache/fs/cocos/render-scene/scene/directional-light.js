System.register("q-bundled:///fs/cocos/render-scene/scene/directional-light.js", ["../../core/index.js", "./ambient.js", "./light.js", "./shadows.js"], function (_export, _context) {
  "use strict";

  var Vec3, cclegacy, Ambient, Light, LightType, CSMLevel, CSMOptimizationMode, PCFType, Shadows, _forward, _v3, DirectionalLight;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_ambientJs) {
      Ambient = _ambientJs.Ambient;
    }, function (_lightJs) {
      Light = _lightJs.Light;
      LightType = _lightJs.LightType;
    }, function (_shadowsJs) {
      CSMLevel = _shadowsJs.CSMLevel;
      CSMOptimizationMode = _shadowsJs.CSMOptimizationMode;
      PCFType = _shadowsJs.PCFType;
      Shadows = _shadowsJs.Shadows;
    }],
    execute: function () {
      _forward = new Vec3(0, 0, -1);
      _v3 = new Vec3();
      /**
       * @en The directional light representation in the render scene, it acts as the main light source in a scene.
       * As main light, only one directional light can be created in a scene, it can generate realtime shadows with configuration.
       * @zh 渲染场景中的方向光抽象，这是场景中的主光源。作为主光源，每个场景只能有一个方向光，它也包含阴影配置，用来生成实时阴影。
       */
      _export("DirectionalLight", DirectionalLight = /*#__PURE__*/function (_Light) {
        _inheritsLoose(DirectionalLight, _Light);
        function DirectionalLight() {
          var _this;
          _this = _Light.call(this) || this;
          _this._dir = new Vec3(1.0, -1.0, -1.0);
          _this._illuminanceHDR = Ambient.SUN_ILLUM;
          _this._illuminanceLDR = 1.0;
          // Public properties of shadow
          _this._shadowEnabled = false;
          // Shadow map properties
          _this._shadowPcf = PCFType.HARD;
          _this._shadowBias = 0.00001;
          _this._shadowNormalBias = 0.0;
          _this._shadowSaturation = 1.0;
          _this._shadowDistance = 50;
          _this._shadowInvisibleOcclusionRange = 200;
          _this._csmLevel = CSMLevel.LEVEL_4;
          _this._csmNeedUpdate = false;
          _this._csmLayerLambda = 0.75;
          _this._csmOptimizationMode = CSMOptimizationMode.DisableRotationFix;
          _this._csmLayersTransition = false;
          _this._csmTransitionRange = 0.05;
          // fixed area properties
          _this._shadowFixedArea = false;
          _this._shadowNear = 0.1;
          _this._shadowFar = 10.0;
          _this._shadowOrthoSize = 5;
          _this._type = LightType.DIRECTIONAL;
          return _this;
        }
        var _proto = DirectionalLight.prototype;
        _proto.initialize = function initialize() {
          _Light.prototype.initialize.call(this);
          this.illuminance = Ambient.SUN_ILLUM;
          this.direction = new Vec3(1.0, -1.0, -1.0);
        }

        /**
         * @en Update the direction
         * @zh 更新方向
         */;
        _proto.update = function update() {
          if (this._node && this._node.hasChangedFlags) {
            this.direction = Vec3.transformQuat(_v3, _forward, this._node.worldRotation);
          }
        }

        /**
         * @engineInternal
         */;
        _proto.activate = function activate() {
          var root = cclegacy.director.root;
          var pipeline = root.pipeline;
          if (this._shadowEnabled) {
            if (this._shadowFixedArea || !pipeline.pipelineSceneData.csmSupported) {
              pipeline.macros.CC_DIR_LIGHT_SHADOW_TYPE = 1;
            } else if (this.csmLevel > 1 && pipeline.pipelineSceneData.csmSupported) {
              pipeline.macros.CC_DIR_LIGHT_SHADOW_TYPE = 2;
              pipeline.macros.CC_CASCADED_LAYERS_TRANSITION = this._csmLayersTransition;
            } else {
              pipeline.macros.CC_DIR_LIGHT_SHADOW_TYPE = 1;
            }
            pipeline.macros.CC_DIR_SHADOW_PCF_TYPE = this._shadowPcf;
          } else {
            pipeline.macros.CC_DIR_LIGHT_SHADOW_TYPE = 0;
          }
          root.onGlobalPipelineStateChanged();
        };
        _createClass(DirectionalLight, [{
          key: "direction",
          get: function get() {
            return this._dir;
          }

          /**
           * @en The illuminance of the light in Lux(lx)
           * @zh 光源的辐照度，单位是 Lux(lx)
           */,
          set:
          /**
           * @en The direction vector of the light
           * @zh 光源的方向
           */
          function set(dir) {
            Vec3.normalize(this._dir, dir);
          }
        }, {
          key: "illuminance",
          get: function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._illuminanceHDR;
            } else {
              return this._illuminanceLDR;
            }
          },
          set: function set(value) {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this.illuminanceHDR = value;
            } else {
              this.illuminanceLDR = value;
            }
          }

          /**
           * @en The illuminance of the light in HDR mode
           * @zh HDR 模式下光源的辐照度
           */
        }, {
          key: "illuminanceHDR",
          get: function get() {
            return this._illuminanceHDR;
          },
          set: function set(value) {
            this._illuminanceHDR = value;
          }

          /**
           * @en The illuminance of the light in LDR mode
           * @zh LDR 模式下光源的辐照度
           */
        }, {
          key: "illuminanceLDR",
          get: function get() {
            return this._illuminanceLDR;
          },
          set: function set(value) {
            this._illuminanceLDR = value;
          }

          /**
           * @en Whether activate shadow
           * @zh 是否启用阴影？
           */
        }, {
          key: "shadowEnabled",
          get: function get() {
            return this._shadowEnabled;
          },
          set: function set(val) {
            this._shadowEnabled = val;
            this.activate();
          }

          /**
           * @en get or set shadow pcf.
           * @zh 获取或者设置阴影pcf等级。
           */
        }, {
          key: "shadowPcf",
          get: function get() {
            return this._shadowPcf;
          },
          set: function set(val) {
            this._shadowPcf = val;
            this.activate();
          }

          /**
           * @en get or set shadow map sampler offset
           * @zh 获取或者设置阴影纹理偏移值
           */
        }, {
          key: "shadowBias",
          get: function get() {
            return this._shadowBias;
          },
          set: function set(val) {
            this._shadowBias = val;
          }

          /**
           * @en get or set normal bias.
           * @zh 设置或者获取法线偏移。
           */
        }, {
          key: "shadowNormalBias",
          get: function get() {
            return this._shadowNormalBias;
          },
          set: function set(val) {
            this._shadowNormalBias = val;
          }

          /**
           * @en Shadow color saturation
           * @zh 阴影颜色饱和度
           */
        }, {
          key: "shadowSaturation",
          get: function get() {
            return this._shadowSaturation;
          },
          set: function set(val) {
            this._shadowSaturation = val;
          }

          /**
           * @en get or set shadow camera far
           * @zh 获取或者设置潜在阴影产生的范围
           */
        }, {
          key: "shadowDistance",
          get: function get() {
            return this._shadowDistance;
          },
          set: function set(val) {
            this._shadowDistance = Math.min(val, Shadows.MAX_FAR);
          }

          /**
           * @en get or set shadow camera far
           * @zh 获取或者设置潜在阴影产生的范围
           */
        }, {
          key: "shadowInvisibleOcclusionRange",
          get: function get() {
            return this._shadowInvisibleOcclusionRange;
          },
          set: function set(val) {
            this._shadowInvisibleOcclusionRange = Math.min(val, Shadows.MAX_FAR);
          }

          /**
           * @en get or set shadow CSM level
           * @zh 获取或者设置级联阴影层数
           */
        }, {
          key: "csmLevel",
          get: function get() {
            return this._csmLevel;
          },
          set: function set(val) {
            this._csmLevel = val;
            this.activate();
          }

          /**
           * @en is CSM need update
           * @zh 获取或者设置级联阴影是否需要更新
           */
        }, {
          key: "csmNeedUpdate",
          get: function get() {
            return this._csmNeedUpdate;
          },
          set: function set(val) {
            this._csmNeedUpdate = val;
          }

          /**
           * @en get or set shadow CSM level ratio
           * @zh 获取或者设置级联阴影层数系数
           */
        }, {
          key: "csmLayerLambda",
          get: function get() {
            return this._csmLayerLambda;
          },
          set: function set(val) {
            this._csmLayerLambda = val;
          }

          /**
           * @en get or set shadow CSM performance optimization mode
           * @zh 获取或者设置级联阴影性能优化模式
           */
        }, {
          key: "csmOptimizationMode",
          get: function get() {
            return this._csmOptimizationMode;
          },
          set: function set(val) {
            this._csmOptimizationMode = val;
          }

          /**
           * @en get or set fixed area shadow
           * @zh 是否是固定区域阴影
           */
        }, {
          key: "shadowFixedArea",
          get: function get() {
            return this._shadowFixedArea;
          },
          set: function set(val) {
            this._shadowFixedArea = val;
            this.activate();
          }

          /**
           * @en The near clip plane of the shadow camera
           * @zh 获取或者设置阴影相机近裁剪面
           */
        }, {
          key: "shadowNear",
          get: function get() {
            return this._shadowNear;
          },
          set: function set(val) {
            this._shadowNear = val;
          }

          /**
           * @en The far clip plane of the shadow camera
           * @zh 获取或者设置阴影相机远裁剪面
           */
        }, {
          key: "shadowFar",
          get: function get() {
            return this._shadowFar;
          },
          set: function set(val) {
            this._shadowFar = Math.min(val, Shadows.MAX_FAR);
          }

          /**
           * @en get or set shadow camera orthoSize
           * @zh 获取或者设置阴影相机正交大小
           */
        }, {
          key: "shadowOrthoSize",
          get: function get() {
            return this._shadowOrthoSize;
          },
          set: function set(val) {
            this._shadowOrthoSize = val;
          }

          /**
           * @en Enabled csm layers transition
           * @zh 是否启用级联阴影层级过渡？
           */
        }, {
          key: "csmLayersTransition",
          get: function get() {
            return this._csmLayersTransition;
          },
          set: function set(val) {
            this._csmLayersTransition = val;
            this.activate();
          }

          /**
           * @en get or set csm layers transition range
           * @zh 获取或者设置级联阴影层级过渡范围？
           */
        }, {
          key: "csmTransitionRange",
          get: function get() {
            return this._csmTransitionRange;
          },
          set: function set(val) {
            this._csmTransitionRange = val;
          }
        }]);
        return DirectionalLight;
      }(Light));
    }
  };
});
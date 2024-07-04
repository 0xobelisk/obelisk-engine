System.register("q-bundled:///fs/cocos/3d/lights/light-component.js", ["../../core/data/decorators/index.js", "../../scene-graph/component.js", "../../core/index.js", "../../render-scene/index.js", "../../rendering/define.js", "../../scene-graph/layers.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, range, slide, type, displayOrder, serializable, editable, Component, Color, Vec3, Enum, cclegacy, scene, CAMERA_DEFAULT_MASK, Layers, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class4, _class5, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _class6, _color_tmp, PhotometricTerm, StaticLightSettings, Light;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      range = _coreDataDecoratorsIndexJs.range;
      slide = _coreDataDecoratorsIndexJs.slide;
      type = _coreDataDecoratorsIndexJs.type;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Vec3 = _coreIndexJs.Vec3;
      Enum = _coreIndexJs.Enum;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_renderingDefineJs) {
      CAMERA_DEFAULT_MASK = _renderingDefineJs.CAMERA_DEFAULT_MASK;
    }, function (_sceneGraphLayersJs) {
      Layers = _sceneGraphLayersJs.Layers;
    }],
    execute: function () {
      _color_tmp = new Vec3();
      /**
       * @en The physical term used for light.
       * @zh 光源所使用的物理计量单位。
       */
      _export("PhotometricTerm", PhotometricTerm = Enum({
        LUMINOUS_FLUX: 0,
        LUMINANCE: 1
      }));
      /**
       * @en Static light settings.
       * @zh 静态灯光设置
       */
      StaticLightSettings = (_dec = ccclass('cc.StaticLightSettings'), _dec(_class = (_class2 = class StaticLightSettings {
        constructor() {
          this._baked = _initializer && _initializer();
          this._editorOnly = _initializer2 && _initializer2();
          this._castShadow = _initializer3 && _initializer3();
        }
        /**
         * @en Whether the light is editor only.
         * @zh 是否只在编辑器里生效。
         */
        get editorOnly() {
          return this._editorOnly;
        }
        set editorOnly(val) {
          this._editorOnly = val;
        }

        /**
         * @en Whether the light is baked
         * @zh 光源是否被烘焙
         */
        get baked() {
          return this._baked;
        }
        set baked(val) {
          this._baked = val;
        }

        /**
         * @en Whether the light will cast shadow during baking process.
         * @zh 光源在烘焙时是否投射阴影。
         */
        get castShadow() {
          return this._castShadow;
        }
        set castShadow(val) {
          this._castShadow = val;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_baked", [serializable], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_editorOnly", [serializable], function () {
        return false;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_castShadow", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "editorOnly", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "editorOnly"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "castShadow", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "castShadow"), _class2.prototype)), _class2)) || _class);
      /**
       * @en The base class of all light components, contains basic light settings for both real time light and baked light.
       * @zh 光源组件基类，包含实时光源和烘焙光源的基本配置信息。
       */
      _export("Light", Light = (_dec2 = ccclass('cc.Light'), _dec3 = tooltip('i18n:lights.color'), _dec4 = tooltip('i18n:lights.use_color_temperature'), _dec5 = range([1000, 15000, 100]), _dec6 = tooltip('i18n:lights.color_temperature'), _dec7 = type(StaticLightSettings), _dec8 = displayOrder(50), _dec9 = tooltip('i18n:lights.visibility'), _dec10 = displayOrder(255), _dec11 = type(Layers.BitMask), _dec2(_class4 = (_class5 = (_class6 = class Light extends Component {
        /**
         * @en The color of the light.
         * @zh 光源颜色。
         */
        get color() {
          return this._color;
        }
        set color(val) {
          this._color = val;
          if (this._light) {
            _color_tmp.x = val.r / 255.0;
            _color_tmp.y = val.g / 255.0;
            _color_tmp.z = val.b / 255.0;
            this._light.color = _color_tmp;
          }
        }

        /**
         * @en
         * Whether to enable light color temperature.
         * @zh
         * 是否启用光源色温。
         */
        get useColorTemperature() {
          return this._useColorTemperature;
        }
        set useColorTemperature(enable) {
          this._useColorTemperature = enable;
          if (this._light) {
            this._light.useColorTemperature = enable;
          }
        }

        /**
         * @en
         * The light color temperature.
         * @zh
         * 光源色温。
         */
        get colorTemperature() {
          return this._colorTemperature;
        }
        set colorTemperature(val) {
          this._colorTemperature = val;
          if (this._light) {
            this._light.colorTemperature = val;
          }
        }

        /**
         * @en
         * static light settings.
         * @zh
         * 静态灯光设置。
         */
        get staticSettings() {
          return this._staticSettings;
        }
        set staticSettings(val) {
          this._staticSettings = val;
        }

        /**
         * @en The light type.
         * @zh 光源类型。
         */
        get type() {
          return this._type;
        }

        /**
         * @en Whether the light is baked
         * @zh 光源是否被烘焙
         */
        get baked() {
          return this.staticSettings.baked;
        }
        set baked(val) {
          this.staticSettings.baked = val;
          if (this._light !== null) {
            this._light.baked = val;
          }
        }

        /**
         * @en Visibility mask of the light, declaring a set of node layers that will be visible to this light.
         * @zh 光照的可见性掩码，声明在当前光照中可见的节点层级集合。
         */
        set visibility(vis) {
          this._visibility = vis;
          if (this._light) {
            this._light.visibility = vis;
          }
          this._onUpdateReceiveDirLight();
        }
        get visibility() {
          return this._visibility;
        }
        constructor() {
          super();
          this._color = _initializer4 && _initializer4();
          this._useColorTemperature = _initializer5 && _initializer5();
          this._colorTemperature = _initializer6 && _initializer6();
          this._staticSettings = _initializer7 && _initializer7();
          this._visibility = _initializer8 && _initializer8();
          this._type = scene.LightType.UNKNOWN;
          this._lightType = void 0;
          this._light = null;
          this._lightType = scene.Light;
        }
        onLoad() {
          this._createLight();
        }
        onEnable() {
          this._attachToScene();
        }
        onDisable() {
          this._detachFromScene();
        }
        onDestroy() {
          this._destroyLight();
        }
        _createLight() {
          if (!this._light) {
            this._light = cclegacy.director.root.createLight(this._lightType);
          }
          this.color = this._color;
          this.useColorTemperature = this._useColorTemperature;
          this.colorTemperature = this._colorTemperature;
          this._light.node = this.node;
          this._light.baked = this.baked;
          this._light.visibility = this.visibility;
        }
        _destroyLight() {
          if (this._light) {
            cclegacy.director.root.recycleLight(this._light);
            this._light = null;
          }
        }
        _attachToScene() {
          this._detachFromScene();
          if (this._light && !this._light.scene && this.node.scene) {
            const renderScene = this._getRenderScene();
            switch (this._type) {
              case scene.LightType.DIRECTIONAL:
                renderScene.addDirectionalLight(this._light);
                renderScene.setMainLight(this._light);
                break;
              case scene.LightType.SPHERE:
                renderScene.addSphereLight(this._light);
                break;
              case scene.LightType.SPOT:
                renderScene.addSpotLight(this._light);
                break;
              case scene.LightType.POINT:
                renderScene.addPointLight(this._light);
                break;
              case scene.LightType.RANGED_DIRECTIONAL:
                renderScene.addRangedDirLight(this._light);
                break;
              default:
                break;
            }
          }
        }
        _detachFromScene() {
          if (this._light && this._light.scene) {
            const renderScene = this._light.scene;
            switch (this._type) {
              case scene.LightType.DIRECTIONAL:
                renderScene.removeDirectionalLight(this._light);
                renderScene.unsetMainLight(this._light);
                break;
              case scene.LightType.SPHERE:
                renderScene.removeSphereLight(this._light);
                break;
              case scene.LightType.SPOT:
                renderScene.removeSpotLight(this._light);
                break;
              case scene.LightType.POINT:
                renderScene.removePointLight(this._light);
                break;
              case scene.LightType.RANGED_DIRECTIONAL:
                renderScene.removeRangedDirLight(this._light);
                break;
              default:
                break;
            }
          }
        }
        _onUpdateReceiveDirLight() {}
      }, _class6.Type = scene.LightType, _class6.PhotometricTerm = PhotometricTerm, _class6), (_initializer4 = _applyDecoratedInitializer(_class5.prototype, "_color", [serializable], function () {
        return Color.WHITE.clone();
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "_useColorTemperature", [serializable], function () {
        return false;
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "_colorTemperature", [serializable], function () {
        return 6550;
      }), _initializer7 = _applyDecoratedInitializer(_class5.prototype, "_staticSettings", [serializable], function () {
        return new StaticLightSettings();
      }), _initializer8 = _applyDecoratedInitializer(_class5.prototype, "_visibility", [serializable], function () {
        return CAMERA_DEFAULT_MASK;
      }), _applyDecoratedDescriptor(_class5.prototype, "color", [_dec3], Object.getOwnPropertyDescriptor(_class5.prototype, "color"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "useColorTemperature", [_dec4], Object.getOwnPropertyDescriptor(_class5.prototype, "useColorTemperature"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "colorTemperature", [slide, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class5.prototype, "colorTemperature"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "staticSettings", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class5.prototype, "staticSettings"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "visibility", [_dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class5.prototype, "visibility"), _class5.prototype)), _class5)) || _class4));
    }
  };
});
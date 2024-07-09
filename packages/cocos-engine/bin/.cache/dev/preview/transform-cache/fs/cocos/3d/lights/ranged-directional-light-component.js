System.register("q-bundled:///fs/cocos/3d/lights/ranged-directional-light-component.js", ["./light-component.js", "../../core/data/class-decorator.js", "../../render-scene/scene/index.js", "../../render-scene/index.js", "../../core/index.js", "../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Light, ccclass, help, property, menu, executeInEditMode, formerlySerializedAs, serializable, tooltip, editable, type, Camera, LightType, scene, CCInteger, cclegacy, range, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, RangedDirectionalLight;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_lightComponentJs) {
      Light = _lightComponentJs.Light;
    }, function (_coreDataClassDecoratorJs) {
      ccclass = _coreDataClassDecoratorJs.ccclass;
      help = _coreDataClassDecoratorJs.help;
      property = _coreDataClassDecoratorJs.property;
      menu = _coreDataClassDecoratorJs.menu;
      executeInEditMode = _coreDataClassDecoratorJs.executeInEditMode;
      formerlySerializedAs = _coreDataClassDecoratorJs.formerlySerializedAs;
      serializable = _coreDataClassDecoratorJs.serializable;
      tooltip = _coreDataClassDecoratorJs.tooltip;
      editable = _coreDataClassDecoratorJs.editable;
      type = _coreDataClassDecoratorJs.type;
    }, function (_renderSceneSceneIndexJs) {
      Camera = _renderSceneSceneIndexJs.Camera;
      LightType = _renderSceneSceneIndexJs.LightType;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_coreIndexJs) {
      CCInteger = _coreIndexJs.CCInteger;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_coreDataDecoratorsIndexJs) {
      range = _coreDataDecoratorsIndexJs.range;
    }],
    execute: function () {
      /**
       * @en The ranged directional light component, Multiple ranged directional light sources are allowed in a scene.
       * @zh 范围平行光光源组件，一个场景允许存在多个范围平行光光源。
       */
      _export("RangedDirectionalLight", RangedDirectionalLight = (_dec = ccclass('cc.RangedDirectionalLight'), _dec2 = help('i18n:cc.RangedDirectionalLight'), _dec3 = menu('Light/RangedDirectionalLight'), _dec4 = formerlySerializedAs('_illuminance'), _dec5 = tooltip('i18n:lights.illuminance'), _dec6 = range([0, Number.POSITIVE_INFINITY, 10]), _dec7 = type(CCInteger), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Light) {
        _inheritsLoose(RangedDirectionalLight, _Light);
        function RangedDirectionalLight() {
          var _this;
          _this = _Light.call(this) || this;
          _this._illuminanceHDR = _initializer && _initializer();
          _this._illuminanceLDR = _initializer2 && _initializer2();
          _this._lightType = scene.RangedDirectionalLight;
          return _this;
        }
        var _proto = RangedDirectionalLight.prototype;
        _proto._createLight = function _createLight() {
          _Light.prototype._createLight.call(this);
          this._type = LightType.RANGED_DIRECTIONAL;
          if (this._light) {
            this._light.illuminanceHDR = this._illuminanceHDR;
            this._light.illuminanceLDR = this._illuminanceLDR;
          }
        };
        _createClass(RangedDirectionalLight, [{
          key: "illuminance",
          get:
          /**
           * @en The light source intensity.
           * @zh 光源强度。
           */
          function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._illuminanceHDR;
            } else {
              return this._illuminanceLDR;
            }
          },
          set: function set(val) {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this._illuminanceHDR = val;
              this._light && (this._light.illuminanceHDR = this._illuminanceHDR);
            } else {
              this._illuminanceLDR = val;
              this._light && (this._light.illuminanceLDR = this._illuminanceLDR);
            }
          }
        }]);
        return RangedDirectionalLight;
      }(Light), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_illuminanceHDR", [property, _dec4], function () {
        return 65000;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_illuminanceLDR", [serializable], function () {
        return 65000 * Camera.standardExposureValue;
      }), _applyDecoratedDescriptor(_class2.prototype, "illuminance", [_dec5, editable, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "illuminance"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});
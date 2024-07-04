System.register("q-bundled:///fs/cocos/particle/billboard.js", ["../core/data/decorators/index.js", "../asset/asset-manager/index.js", "../3d/misc/index.js", "../asset/assets/index.js", "../scene-graph/component.js", "../gfx/index.js", "../core/index.js", "../render-scene/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, type, serializable, builtinResMgr, createMesh, Material, Texture2D, Component, Attribute, AttributeName, Format, PrimitiveMode, Color, toDegree, toRadian, Vec4, cclegacy, scene, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, Billboard;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_dMiscIndexJs) {
      createMesh = _dMiscIndexJs.createMesh;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
      Texture2D = _assetAssetsIndexJs.Texture2D;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_gfxIndexJs) {
      Attribute = _gfxIndexJs.Attribute;
      AttributeName = _gfxIndexJs.AttributeName;
      Format = _gfxIndexJs.Format;
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      toDegree = _coreIndexJs.toDegree;
      toRadian = _coreIndexJs.toRadian;
      Vec4 = _coreIndexJs.Vec4;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }],
    execute: function () {
      _export("Billboard", Billboard = (_dec = ccclass('cc.Billboard'), _dec2 = help('i18n:cc.Billboard'), _dec3 = menu('Effects/Billboard'), _dec4 = type(Texture2D), _dec5 = type(Texture2D), _dec6 = tooltip('i18n:billboard.texture'), _dec7 = tooltip('i18n:billboard.height'), _dec8 = tooltip('i18n:billboard.width'), _dec9 = tooltip('i18n:billboard.rotation'), _dec10 = tooltip('i18n:billboard.technique'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Billboard, _Component);
        var _proto = Billboard.prototype;
        _proto.updateTexture = function updateTexture() {
          if (this._material) {
            this._material.setProperty('mainTexture', this._texture);
          }
        };
        _proto.updateHeight = function updateHeight() {
          if (this._material) {
            this._uniform.y = this._height;
            this._material.setProperty('cc_size_rotation', this._uniform);
          }
        };
        _proto.updateWidth = function updateWidth() {
          if (this._material) {
            this._uniform.x = this._width;
            this._material.setProperty('cc_size_rotation', this._uniform);
          }
        };
        _proto.updateRotation = function updateRotation() {
          if (this._material) {
            this._uniform.z = this._rotation;
            this._material.setProperty('cc_size_rotation', this._uniform);
          }
        };
        _proto.updateTechnique = function updateTechnique() {
          if (this._model && this._mesh && this._material && this._material.technique !== this._techIndex) {
            // destroy model
            this.detachFromScene();
            this._model.destroy();
            this._model = null;
            this._material.destroy();
            this._material = null;
            this._mesh.destroy();
            this._mesh = null;
            // recreate model
            this.createModel();
            // set properties
            this.updateWidth();
            this.updateHeight();
            this.updateRotation();
            this.updateTexture();
            // enable/disable model
            if (this.enabled) {
              this.attachToScene();
              this._model.enabled = true;
            } else {
              this._model.enabled = false;
            }
          }
        };
        function Billboard() {
          var _this;
          _this = _Component.call(this) || this;
          _this._texture = _initializer && _initializer();
          _this._height = _initializer2 && _initializer2();
          _this._width = _initializer3 && _initializer3();
          _this._rotation = _initializer4 && _initializer4();
          _this._techIndex = _initializer5 && _initializer5();
          _this._model = null;
          _this._mesh = null;
          _this._material = null;
          _this._uniform = new Vec4(1, 1, 0, 0);
          return _this;
        }
        _proto.onLoad = function onLoad() {
          this.createModel();
        };
        _proto.onEnable = function onEnable() {
          this.attachToScene();
          this._model.enabled = true;
          this.updateWidth();
          this.updateHeight();
          this.updateRotation();
          this.updateTexture();
          this.updateTechnique();
        };
        _proto.onDisable = function onDisable() {
          this.detachFromScene();
        };
        _proto.attachToScene = function attachToScene() {
          if (this._model && this.node && this.node.scene) {
            if (this._model.scene) {
              this.detachFromScene();
            }
            this._getRenderScene().addModel(this._model);
          }
        };
        _proto.detachFromScene = function detachFromScene() {
          if (this._model && this._model.scene) {
            this._model.scene.removeModel(this._model);
          }
        };
        _proto.createModel = function createModel() {
          this._mesh = createMesh({
            primitiveMode: PrimitiveMode.TRIANGLE_LIST,
            positions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            uvs: [0, 0, 1, 0, 0, 1, 1, 1],
            colors: [Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a, Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a, Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a, Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a],
            attributes: [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8UI, true)],
            indices: [0, 1, 2, 1, 2, 3]
          }, undefined, {
            calculateBounds: false
          });
          var model = this._model = cclegacy.director.root.createModel(scene.Model, this.node);
          model.node = model.transform = this.node;
          if (this._material == null) {
            this._material = new Material();
            this._material.copy(builtinResMgr.get('default-billboard-material'), {
              technique: this._techIndex
            });
          }
          model.initSubModel(0, this._mesh.renderingSubMeshes[0], this._material);
        };
        _createClass(Billboard, [{
          key: "texture",
          get:
          /**
           * @zh Billboard纹理。
           */
          function get() {
            return this._texture;
          },
          set: function set(val) {
            this._texture = val;
            this.updateTexture();
          }
        }, {
          key: "height",
          get:
          /**
           * @zh 高度。
           */
          function get() {
            return this._height;
          },
          set: function set(val) {
            this._height = val;
            this.updateHeight();
          }
        }, {
          key: "width",
          get:
          /**
           * @zh 宽度。
           */
          function get() {
            return this._width;
          },
          set: function set(val) {
            this._width = val;
            this.updateWidth();
          }
        }, {
          key: "rotation",
          get:
          /**
           * @zh billboard绕中心点旋转的角度
           */
          function get() {
            return Math.round(toDegree(this._rotation) * 100) / 100;
          },
          set: function set(val) {
            this._rotation = toRadian(val);
            this.updateRotation();
          }
        }, {
          key: "technique",
          get: function get() {
            return this._techIndex;
          },
          set: function set(val) {
            var _this$_material, _this$_material$effec;
            // clamp technique index
            val = Math.floor(val);
            var techs = (_this$_material = this._material) === null || _this$_material === void 0 ? void 0 : (_this$_material$effec = _this$_material.effectAsset) === null || _this$_material$effec === void 0 ? void 0 : _this$_material$effec.techniques;
            if (techs && val >= techs.length) {
              val = techs.length - 1;
            }
            if (val < 0) {
              val = 0;
            }
            // set technique index
            this._techIndex = val;
            // recreate model
            this.updateTechnique();
          }
        }]);
        return Billboard;
      }(Component), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_texture", [_dec4], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "texture", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "texture"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_height", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "height", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "height"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_width", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "width", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "width"), _class2.prototype), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_rotation", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "rotation"), _class2.prototype), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_techIndex", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "technique", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "technique"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});
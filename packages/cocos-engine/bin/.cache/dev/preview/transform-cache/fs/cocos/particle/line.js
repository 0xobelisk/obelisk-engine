System.register("q-bundled:///fs/cocos/particle/line.js", ["../core/data/decorators/index.js", "../asset/assets/index.js", "../core/index.js", "./models/line-model.js", "../asset/asset-manager/index.js", "./animator/curve-range.js", "./animator/gradient-range.js", "../misc/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, displayOrder, type, serializable, range, visible, override, displayName, Material, Texture2D, Vec3, cclegacy, Vec4, Vec2, LineModel, builtinResMgr, CurveRange, GradientRange, ModelRenderer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, CC_USE_WORLD_SPACE, CC_USE_WORLD_SCALE, define, Line;
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
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      range = _coreDataDecoratorsIndexJs.range;
      visible = _coreDataDecoratorsIndexJs.visible;
      override = _coreDataDecoratorsIndexJs.override;
      displayName = _coreDataDecoratorsIndexJs.displayName;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
      Texture2D = _assetAssetsIndexJs.Texture2D;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
      Vec4 = _coreIndexJs.Vec4;
      Vec2 = _coreIndexJs.Vec2;
    }, function (_modelsLineModelJs) {
      LineModel = _modelsLineModelJs.LineModel;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_animatorCurveRangeJs) {
      CurveRange = _animatorCurveRangeJs.default;
    }, function (_animatorGradientRangeJs) {
      GradientRange = _animatorGradientRangeJs.default;
    }, function (_miscIndexJs) {
      ModelRenderer = _miscIndexJs.ModelRenderer;
    }],
    execute: function () {
      CC_USE_WORLD_SPACE = 'CC_USE_WORLD_SPACE';
      CC_USE_WORLD_SCALE = 'CC_USE_WORLD_SCALE';
      define = {
        CC_USE_WORLD_SPACE: false,
        CC_USE_WORLD_SCALE: true
      };
      _export("Line", Line = (_dec = ccclass('cc.Line'), _dec2 = help('i18n:cc.Line'), _dec3 = menu('Effects/Line'), _dec4 = type(Texture2D), _dec5 = type(Texture2D), _dec6 = displayOrder(0), _dec7 = tooltip('i18n:line.texture'), _dec8 = type(Material), _dec9 = displayOrder(1), _dec10 = tooltip('i18n:line.material'), _dec11 = displayName('Material'), _dec12 = visible(false), _dec13 = displayOrder(1), _dec14 = tooltip('i18n:line.worldSpace'), _dec15 = type([Vec3]), _dec16 = type([Vec3]), _dec17 = displayOrder(2), _dec18 = tooltip('i18n:line.positions'), _dec19 = type(CurveRange), _dec20 = range([0, 1]), _dec21 = displayOrder(3), _dec22 = tooltip('i18n:line.width'), _dec23 = type(GradientRange), _dec24 = displayOrder(6), _dec25 = tooltip('i18n:line.color'), _dec26 = type(Vec2), _dec27 = displayOrder(4), _dec28 = tooltip('i18n:line.tile'), _dec29 = type(Vec2), _dec30 = displayOrder(5), _dec31 = tooltip('i18n:line.offset'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_ModelRenderer) {
        _inheritsLoose(Line, _ModelRenderer);
        function Line() {
          var _this;
          _this = _ModelRenderer.call(this) || this;
          _this._texture = _initializer && _initializer();
          _this._material = _initializer2 && _initializer2();
          _this._worldSpace = _initializer3 && _initializer3();
          _this._positions = _initializer4 && _initializer4();
          _this._width = _initializer5 && _initializer5();
          _this._color = _initializer6 && _initializer6();
          _this._tile = _initializer7 && _initializer7();
          _this._tile_offset = new Vec4();
          _this._offset = _initializer8 && _initializer8();
          return _this;
        }
        var _proto = Line.prototype;
        _proto.onLoad = function onLoad() {
          var model = cclegacy.director.root.createModel(LineModel);
          if (this._models.length === 0) {
            this._models.push(model);
          } else {
            this._models[0] = model;
          }
          model.node = model.transform = this.node;
          if (this._material) {
            this.lineMaterial = this._material;
            this._material = null;
          }
          if (this.lineMaterial === null) {
            var mat = builtinResMgr.get('default-trail-material');
            this.material = mat;
          }
          var matIns = this.getMaterialInstance(0);
          if (matIns) {
            define[CC_USE_WORLD_SPACE] = this.worldSpace;
            matIns.recompileShaders(define);
            model.updateMaterial(matIns);
          }
          model.setCapacity(100);
        };
        _proto.onEnable = function onEnable() {
          _ModelRenderer.prototype.onEnable.call(this);
          if (this._models.length === 0 || !this._models[0]) {
            return;
          }
          this._attachToScene();
          this.texture = this._texture;
          this.tile = this._tile;
          this.offset = this._offset;
          var lineModel = this._models[0];
          lineModel.addLineVertexData(this._positions, this.width, this.color);
        };
        _proto.onDisable = function onDisable() {
          if (this._models.length > 0 && this._models[0]) {
            this._detachFromScene();
          }
        };
        _proto._attachToScene = function _attachToScene() {
          _ModelRenderer.prototype._attachToScene.call(this);
          if (this._models.length > 0 && this._models[0] && this.node && this.node.scene) {
            var lineModel = this._models[0];
            if (lineModel.scene) {
              this._detachFromScene();
            }
            this._getRenderScene().addModel(lineModel);
          }
        }

        /**
         * @engineInternal
         */;
        _proto._detachFromScene = function _detachFromScene() {
          _ModelRenderer.prototype._detachFromScene.call(this);
          if (this._models.length > 0 && this._models[0]) {
            var lineModel = this._models[0];
            if (lineModel.scene) {
              lineModel.scene.removeModel(lineModel);
            }
          }
        };
        _proto._onMaterialModified = function _onMaterialModified(index, material) {
          _ModelRenderer.prototype._onMaterialModified.call(this, index, material);
          var matIns = this.getMaterialInstance(0);
          if (matIns) {
            define[CC_USE_WORLD_SPACE] = this.worldSpace;
            matIns.recompileShaders(define);
            if (this._models[0]) {
              var lineModel = this._models[0];
              lineModel.updateMaterial(matIns);
            }
          }
        };
        _createClass(Line, [{
          key: "texture",
          get:
          /**
           * @zh 显示的纹理。
           * @en Texture used.
           */
          function get() {
            return this._texture;
          },
          set: function set(val) {
            this._texture = val;
            if (this.material) {
              this.material.setProperty('mainTexture', val);
            }
          }
        }, {
          key: "lineMaterial",
          get: function get() {
            return this.getSharedMaterial(0);
          },
          set: function set(val) {
            this.setSharedMaterial(val, 0);
          }
        }, {
          key: "sharedMaterials",
          get: function get() {
            return _ModelRenderer.prototype.sharedMaterials;
          },
          set: function set(val) {
            this.sharedMaterials = val;
          }
        }, {
          key: "worldSpace",
          get:
          /**
           * @zh positions是否为世界空间坐标。
           * @en Whether positions are world space coordinates.
           */
          function get() {
            return this._worldSpace;
          },
          set: function set(val) {
            this._worldSpace = val;
            var matIns = this.getMaterialInstance(0);
            if (matIns) {
              define[CC_USE_WORLD_SPACE] = this.worldSpace;
              matIns.recompileShaders(define);
              if (this._models[0]) {
                this._models[0].setSubModelMaterial(0, matIns);
              }
            }
          }
        }, {
          key: "positions",
          get:
          /**
           * @en Inflection point positions of each polyline.
           * @zh 每段折线的拐点坐标。
           */
          function get() {
            return this._positions;
          },
          set: function set(val) {
            this._positions = val;
            if (this._models[0]) {
              var lineModel = this._models[0];
              lineModel.addLineVertexData(this._positions, this.width, this.color);
            }
          }

          /**
           * @zh 线段的宽度。
           * @en Width of this line.
           */
        }, {
          key: "width",
          get: function get() {
            return this._width;
          },
          set: function set(val) {
            this._width = val;
            if (this._models[0]) {
              var lineModel = this._models[0];
              lineModel.addLineVertexData(this._positions, this._width, this._color);
            }
          }
        }, {
          key: "color",
          get:
          /**
           * @zh 线段颜色。
           * @en Color of this line.
           */
          function get() {
            return this._color;
          },
          set: function set(val) {
            this._color = val;
            if (this._models[0]) {
              var lineModel = this._models[0];
              lineModel.addLineVertexData(this._positions, this._width, this._color);
            }
          }
        }, {
          key: "tile",
          get:
          /**
           * @zh 图块数。
           * @en Texture tile count.
           */
          function get() {
            return this._tile;
          },
          set: function set(val) {
            this._tile.set(val);
            if (this.material) {
              this._tile_offset.x = this._tile.x;
              this._tile_offset.y = this._tile.y;
              this.material.setProperty('mainTiling_Offset', this._tile_offset);
            }
          }
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set: function set(val) {
            this._offset.set(val);
            if (this.material) {
              this._tile_offset.z = this._offset.x;
              this._tile_offset.w = this._offset.y;
              this.material.setProperty('mainTiling_Offset', this._tile_offset);
            }
          }
        }]);
        return Line;
      }(ModelRenderer), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_texture", [_dec4], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "texture", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "texture"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_material", [serializable], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "lineMaterial", [_dec8, _dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "lineMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [override, _dec12, serializable], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_worldSpace", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "worldSpace", [_dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "worldSpace"), _class2.prototype), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_positions", [_dec15], function () {
        return [];
      }), _applyDecoratedDescriptor(_class2.prototype, "positions", [_dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "positions"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "width", [_dec19, _dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "width"), _class2.prototype), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_width", [serializable], function () {
        return new CurveRange();
      }), _applyDecoratedDescriptor(_class2.prototype, "color", [_dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_color", [serializable], function () {
        return new GradientRange();
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_tile", [serializable], function () {
        return new Vec2(1, 1);
      }), _applyDecoratedDescriptor(_class2.prototype, "tile", [_dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "tile"), _class2.prototype), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_offset", [serializable], function () {
        return new Vec2(0, 0);
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec29, _dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});
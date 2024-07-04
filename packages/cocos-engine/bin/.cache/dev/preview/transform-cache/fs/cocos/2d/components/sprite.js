System.register("q-bundled:///fs/cocos/2d/components/sprite.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../assets/sprite-atlas.js", "../assets/sprite-frame.js", "../../core/index.js", "../framework/ui-renderer.js", "../../asset/assets/asset-enum.js", "../../asset/assets/texture-base.js", "../../asset/assets/index.js", "../../scene-graph/node-event.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, tooltip, displayOrder, type, range, editable, serializable, visible, BUILD, EDITOR, SpriteAtlas, SpriteFrame, Vec2, cclegacy, ccenum, clamp, UIRenderer, InstanceMaterialType, PixelFormat, TextureBase, Material, RenderTexture, NodeEventType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _class3, SpriteType, FillType, SizeMode, EventType, Sprite;
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  _export("SpriteType", void 0);
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      range = _coreDataDecoratorsIndexJs.range;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_virtualInternal253AconstantsJs) {
      BUILD = _virtualInternal253AconstantsJs.BUILD;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_assetsSpriteAtlasJs) {
      SpriteAtlas = _assetsSpriteAtlasJs.SpriteAtlas;
    }, function (_assetsSpriteFrameJs) {
      SpriteFrame = _assetsSpriteFrameJs.SpriteFrame;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      cclegacy = _coreIndexJs.cclegacy;
      ccenum = _coreIndexJs.ccenum;
      clamp = _coreIndexJs.clamp;
    }, function (_frameworkUiRendererJs) {
      UIRenderer = _frameworkUiRendererJs.UIRenderer;
      InstanceMaterialType = _frameworkUiRendererJs.InstanceMaterialType;
    }, function (_assetAssetsAssetEnumJs) {
      PixelFormat = _assetAssetsAssetEnumJs.PixelFormat;
    }, function (_assetAssetsTextureBaseJs) {
      TextureBase = _assetAssetsTextureBaseJs.TextureBase;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
      RenderTexture = _assetAssetsIndexJs.RenderTexture;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }],
    execute: function () {
      (function (SpriteType) {
        SpriteType[SpriteType["SIMPLE"] = 0] = "SIMPLE";
        SpriteType[SpriteType["SLICED"] = 1] = "SLICED";
        SpriteType[SpriteType["TILED"] = 2] = "TILED";
        SpriteType[SpriteType["FILLED"] = 3] = "FILLED";
      })(SpriteType || _export("SpriteType", SpriteType = {}));
      ccenum(SpriteType);

      /**
       * @en
       * Enum for fill type.
       *
       * @zh
       * 填充类型。
       */
      (function (FillType) {
        FillType[FillType["HORIZONTAL"] = 0] = "HORIZONTAL";
        FillType[FillType["VERTICAL"] = 1] = "VERTICAL";
        FillType[FillType["RADIAL"] = 2] = "RADIAL";
      })(FillType || (FillType = {}));
      ccenum(FillType);

      /**
       * @en
       * Sprite Size can track trimmed size, raw size or none.
       *
       * @zh
       * 精灵尺寸调整模式。
       */
      (function (SizeMode) {
        SizeMode[SizeMode["CUSTOM"] = 0] = "CUSTOM";
        SizeMode[SizeMode["TRIMMED"] = 1] = "TRIMMED";
        SizeMode[SizeMode["RAW"] = 2] = "RAW";
      })(SizeMode || (SizeMode = {}));
      ccenum(SizeMode);
      (function (EventType) {
        EventType["SPRITE_FRAME_CHANGED"] = "spriteframe-changed";
      })(EventType || (EventType = {}));
      /**
       * @en
       * Renders a sprite in the scene.
       *
       * @zh
       * 渲染精灵组件。
       */
      _export("Sprite", Sprite = (_dec = ccclass('cc.Sprite'), _dec2 = help('i18n:cc.Sprite'), _dec3 = executionOrder(110), _dec4 = menu('2D/Sprite'), _dec5 = type(SpriteAtlas), _dec6 = displayOrder(4), _dec7 = tooltip('i18n:sprite.atlas'), _dec8 = type(SpriteFrame), _dec9 = displayOrder(5), _dec10 = tooltip('i18n:sprite.sprite_frame'), _dec11 = type(SpriteType), _dec12 = displayOrder(6), _dec13 = tooltip('i18n:sprite.type'), _dec14 = type(FillType), _dec15 = displayOrder(6), _dec16 = tooltip('i18n:sprite.fill_type'), _dec17 = displayOrder(6), _dec18 = tooltip('i18n:sprite.fill_center'), _dec19 = range([0, 1, 0.1]), _dec20 = displayOrder(6), _dec21 = tooltip('i18n:sprite.fill_start'), _dec22 = range([-1, 1, 0.1]), _dec23 = displayOrder(6), _dec24 = tooltip('i18n:sprite.fill_range'), _dec25 = visible(function () {
        return this._type === SpriteType.SIMPLE;
      }), _dec26 = displayOrder(8), _dec27 = tooltip('i18n:sprite.trim'), _dec28 = displayOrder(5), _dec29 = tooltip('i18n:sprite.gray_scale'), _dec30 = type(SizeMode), _dec31 = displayOrder(5), _dec32 = tooltip('i18n:sprite.size_mode'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_class3 = /*#__PURE__*/function (_UIRenderer) {
        _inheritsLoose(Sprite, _UIRenderer);
        function Sprite() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIRenderer.call.apply(_UIRenderer, [this].concat(args)) || this;
          _this._spriteFrame = _initializer && _initializer();
          _this._type = _initializer2 && _initializer2();
          _this._fillType = _initializer3 && _initializer3();
          _this._sizeMode = _initializer4 && _initializer4();
          _this._fillCenter = _initializer5 && _initializer5();
          _this._fillStart = _initializer6 && _initializer6();
          _this._fillRange = _initializer7 && _initializer7();
          _this._isTrimmedMode = _initializer8 && _initializer8();
          _this._useGrayscale = _initializer9 && _initializer9();
          _this._atlas = _initializer10 && _initializer10();
          return _this;
        }
        var _proto = Sprite.prototype;
        _proto.__preload = function __preload() {
          this.changeMaterialForDefine();
          _UIRenderer.prototype.__preload.call(this);
          if (EDITOR) {
            this._resized();
            this.node.on(NodeEventType.SIZE_CHANGED, this._resized, this);
          }
        };
        _proto.onEnable = function onEnable() {
          _UIRenderer.prototype.onEnable.call(this);

          // Force update uv, material define, active material, etc
          this._activateMaterial();
          var spriteFrame = this._spriteFrame;
          if (spriteFrame) {
            this._updateUVs();
            if (this._type === SpriteType.SLICED) {
              spriteFrame.on(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          _UIRenderer.prototype.onDisable.call(this);
          if (this._spriteFrame && this._type === SpriteType.SLICED) {
            this._spriteFrame.off(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (EDITOR) {
            this.node.off(NodeEventType.SIZE_CHANGED, this._resized, this);
          }
          _UIRenderer.prototype.onDestroy.call(this);
        }

        /**
         * @en
         * Quickly switch to other sprite frame in the sprite atlas.
         * If there is no atlas, the switch fails.
         *
         * @zh
         * 选取使用精灵图集中的其他精灵。
         * @param name @en Name of the spriteFrame to switch. @zh 要切换的 spriteFrame 名字。
         */;
        _proto.changeSpriteFrameFromAtlas = function changeSpriteFrameFromAtlas(name) {
          if (!this._atlas) {
            console.warn('SpriteAtlas is null.');
            return;
          }
          var sprite = this._atlas.getSpriteFrame(name);
          this.spriteFrame = sprite;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.changeMaterialForDefine = function changeMaterialForDefine() {
          var texture;
          var lastInstanceMaterialType = this._instanceMaterialType;
          if (this._spriteFrame) {
            texture = this._spriteFrame.texture;
          }
          var value = false;
          if (texture instanceof TextureBase) {
            var format = texture.getPixelFormat();
            value = format === PixelFormat.RGBA_ETC1 || format === PixelFormat.RGB_A_PVRTC_4BPPV1 || format === PixelFormat.RGB_A_PVRTC_2BPPV1;
          }
          if (value && this.grayscale) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY;
          } else if (value) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED;
          } else if (this.grayscale) {
            this._instanceMaterialType = InstanceMaterialType.GRAYSCALE;
          } else {
            this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
          }
          if (lastInstanceMaterialType !== this._instanceMaterialType) {
            this.updateMaterial();
          }
        };
        _proto._updateBuiltinMaterial = function _updateBuiltinMaterial() {
          var mat = _UIRenderer.prototype._updateBuiltinMaterial.call(this);
          if (this.spriteFrame && this.spriteFrame.texture instanceof RenderTexture) {
            var defines = _extends({
              SAMPLE_FROM_RT: true
            }, mat.passes[0].defines);
            var renderMat = new Material();
            renderMat.initialize({
              effectAsset: mat.effectAsset,
              defines: defines
            });
            mat = renderMat;
          }
          return mat;
        };
        _proto._render = function _render(render) {
          render.commitComp(this, this.renderData, this._spriteFrame, this._assembler, null);
        };
        _proto._canRender = function _canRender() {
          if (!_UIRenderer.prototype._canRender.call(this)) {
            return false;
          }
          var spriteFrame = this._spriteFrame;
          if (!spriteFrame || !spriteFrame.texture) {
            return false;
          }
          return true;
        };
        _proto._flushAssembler = function _flushAssembler() {
          var assembler = Sprite.Assembler.getAssembler(this);
          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
          }
          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.getRenderMaterial(0);
              this.markForUpdateRenderData();
              if (this.spriteFrame) {
                this._assembler.updateUVs(this);
              }
              this._updateColor();
            }
          }

          // Only Sliced type need update uv when sprite frame insets changed
          if (this._spriteFrame) {
            if (this._type === SpriteType.SLICED) {
              this._spriteFrame.on(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
            } else {
              this._spriteFrame.off(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
            }
          }
        };
        _proto._applySpriteSize = function _applySpriteSize() {
          if (this._spriteFrame) {
            if (BUILD || !this._spriteFrame.isDefault) {
              if (SizeMode.RAW === this._sizeMode) {
                var size = this._spriteFrame.originalSize;
                this.node._uiProps.uiTransformComp.setContentSize(size);
              } else if (SizeMode.TRIMMED === this._sizeMode) {
                var rect = this._spriteFrame.rect;
                this.node._uiProps.uiTransformComp.setContentSize(rect.width, rect.height);
              }
            }
          }
        };
        _proto._resized = function _resized() {
          if (!EDITOR) {
            return;
          }
          if (this._spriteFrame) {
            var actualSize = this.node._uiProps.uiTransformComp.contentSize;
            var expectedW = actualSize.width;
            var expectedH = actualSize.height;
            if (this._sizeMode === SizeMode.RAW) {
              var size = this._spriteFrame.originalSize;
              expectedW = size.width;
              expectedH = size.height;
            } else if (this._sizeMode === SizeMode.TRIMMED) {
              var rect = this._spriteFrame.rect;
              expectedW = rect.width;
              expectedH = rect.height;
            }
            if (expectedW !== actualSize.width || expectedH !== actualSize.height) {
              this._sizeMode = SizeMode.CUSTOM;
            }
          }
        };
        _proto._activateMaterial = function _activateMaterial() {
          var spriteFrame = this._spriteFrame;
          var material = this.getRenderMaterial(0);
          if (spriteFrame) {
            if (material) {
              this.markForUpdateRenderData();
            }
          }
          if (this.renderData) {
            this.renderData.material = material;
          }
        };
        _proto._updateUVs = function _updateUVs() {
          if (this._assembler) {
            this._assembler.updateUVs(this);
          }
        };
        _proto._applySpriteFrame = function _applySpriteFrame(oldFrame) {
          var spriteFrame = this._spriteFrame;
          if (oldFrame && this._type === SpriteType.SLICED) {
            oldFrame.off(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
          }
          var textureChanged = false;
          if (spriteFrame) {
            if (!oldFrame || oldFrame.texture !== spriteFrame.texture) {
              textureChanged = true;
            }
            if (textureChanged) {
              if (this.renderData) this.renderData.textureDirty = true;
              this.changeMaterialForDefine();
            }
            this._applySpriteSize();
            if (this._type === SpriteType.SLICED) {
              spriteFrame.on(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
            }
          }
        };
        _createClass(Sprite, [{
          key: "spriteAtlas",
          get:
          /**
           * @en
           * The sprite atlas where the sprite is.
           *
           * @zh
           * 精灵的图集。
           */
          function get() {
            return this._atlas;
          },
          set: function set(value) {
            if (this._atlas === value) {
              return;
            }
            this._atlas = value;
          }

          /**
           * @en
           * The sprite frame of the sprite.
           *
           * @zh
           * 精灵的精灵帧。
           */
        }, {
          key: "spriteFrame",
          get: function get() {
            return this._spriteFrame;
          },
          set: function set(value) {
            if (this._spriteFrame === value) {
              return;
            }
            var lastSprite = this._spriteFrame;
            this._spriteFrame = value;
            this.markForUpdateRenderData();
            this._applySpriteFrame(lastSprite);
            if (EDITOR) {
              this.node.emit(EventType.SPRITE_FRAME_CHANGED, this);
            }
          }

          /**
           * @en
           * The sprite render type.
           *
           * @zh
           * 精灵渲染类型。
           *
           * @example
           * ```ts
           * import { Sprite } from 'cc';
           * sprite.type = Sprite.Type.SIMPLE;
           * ```
           */
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            if (this._type !== value) {
              this._type = value;
              this._flushAssembler();
            }
          }

          /**
           * @en
           * The fill type, This will only have any effect if the "type" is set to “Sprite.Type.FILLED”.
           *
           * @zh
           * 精灵填充类型，仅渲染类型设置为 Sprite.Type.FILLED 时有效。
           *
           * @example
           * ```ts
           * import { Sprite } from 'cc';
           * sprite.fillType = Sprite.FillType.HORIZONTAL;
           * ```
           */
        }, {
          key: "fillType",
          get: function get() {
            return this._fillType;
          },
          set: function set(value) {
            if (this._fillType !== value) {
              if (value === FillType.RADIAL || this._fillType === FillType.RADIAL) {
                this.destroyRenderData();
              } else if (this.renderData) {
                this.markForUpdateRenderData(true);
              }
            }
            this._fillType = value;
            this._flushAssembler();
          }

          /**
           * @en
           * The fill Center, This will only have any effect if the "type" is set to “Sprite.Type.FILLED”.
           *
           * @zh
           * 填充中心点，仅渲染类型设置为 Sprite.Type.FILLED 时有效。
           *
           * @example
           * ```ts
           * import { Vec2 } from 'cc';
           * sprite.fillCenter = new Vec2(0, 0);
           * ```
           */
        }, {
          key: "fillCenter",
          get: function get() {
            return this._fillCenter;
          },
          set: function set(value) {
            this._fillCenter.x = value.x;
            this._fillCenter.y = value.y;
            if (this._type === SpriteType.FILLED && this.renderData) {
              this.markForUpdateRenderData();
            }
          }

          /**
           * @en
           * The fill Start, This will only have any effect if the "type" is set to “Sprite.Type.FILLED”.
           *
           * @zh
           * 填充起始点，仅渲染类型设置为 Sprite.Type.FILLED 时有效。
           *
           * @example
           * ```ts
           * // -1 To 1 between the numbers
           * sprite.fillStart = 0.5;
           * ```
           */
        }, {
          key: "fillStart",
          get: function get() {
            return this._fillStart;
          },
          set: function set(value) {
            this._fillStart = clamp(value, 0, 1);
            if (this._type === SpriteType.FILLED && this.renderData) {
              this.markForUpdateRenderData();
              this._updateUVs();
            }
          }

          /**
           * @en
           * The fill Range, This will only have any effect if the "type" is set to “Sprite.Type.FILLED”.
           *
           * @zh
           * 填充范围，仅渲染类型设置为 Sprite.Type.FILLED 时有效。
           *
           * @example
           * ```ts
           * // -1 To 1 between the numbers
           * sprite.fillRange = 1;
           * ```
           */
        }, {
          key: "fillRange",
          get: function get() {
            return this._fillRange;
          },
          set: function set(value) {
            // positive: counterclockwise, negative: clockwise
            this._fillRange = clamp(value, -1, 1);
            if (this._type === SpriteType.FILLED && this.renderData) {
              this.markForUpdateRenderData();
              this._updateUVs();
            }
          }
          /**
           * @en
           * specify the frame is trimmed or not.
           *
           * @zh
           * 是否使用裁剪模式。
           *
           * @example
           * ```ts
           * sprite.trim = true;
           * ```
           */
        }, {
          key: "trim",
          get: function get() {
            return this._isTrimmedMode;
          },
          set: function set(value) {
            if (this._isTrimmedMode === value) {
              return;
            }
            this._isTrimmedMode = value;
            if (this._type === SpriteType.SIMPLE /* || this._type === SpriteType.MESH */ && this.renderData) {
              this.markForUpdateRenderData(true);
            }
          }

          /**
           * @en Grayscale mode.
           * @zh 是否以灰度模式渲染。
           */
        }, {
          key: "grayscale",
          get: function get() {
            return this._useGrayscale;
          },
          set: function set(value) {
            if (this._useGrayscale === value) {
              return;
            }
            this._useGrayscale = value;
            this.changeMaterialForDefine();
            this.updateMaterial();
          }

          /**
           * @en
           * Specify the size tracing mode.
           *
           * @zh
           * 精灵尺寸调整模式。
           *
           * @example
           * ```ts
           * import { Sprite } from 'cc';
           * sprite.sizeMode = Sprite.SizeMode.CUSTOM;
           * ```
           */
        }, {
          key: "sizeMode",
          get: function get() {
            return this._sizeMode;
          },
          set: function set(value) {
            if (this._sizeMode === value) {
              return;
            }
            this._sizeMode = value;
            if (value !== SizeMode.CUSTOM) {
              this._applySpriteSize();
            }
          }

          /**
           * @en Enum for fill type.
           * @zh 填充类型。
           */
        }]);
        return Sprite;
      }(UIRenderer), _class3.FillType = FillType, _class3.Type = SpriteType, _class3.SizeMode = SizeMode, _class3.EventType = EventType, _class3), (_applyDecoratedDescriptor(_class2.prototype, "spriteAtlas", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteAtlas"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "type", [_dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fillType", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "fillType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fillCenter", [_dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "fillCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fillStart", [_dec19, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "fillStart"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fillRange", [_dec22, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "fillRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "trim", [_dec25, _dec26, _dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "trim"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "grayscale", [editable, _dec28, _dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "grayscale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sizeMode", [_dec30, _dec31, _dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "sizeMode"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_spriteFrame", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_type", [serializable], function () {
        return SpriteType.SIMPLE;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_fillType", [serializable], function () {
        return FillType.HORIZONTAL;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_sizeMode", [serializable], function () {
        return SizeMode.TRIMMED;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_fillCenter", [serializable], function () {
        return new Vec2(0, 0);
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_fillStart", [serializable], function () {
        return 0;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_fillRange", [serializable], function () {
        return 0;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_isTrimmedMode", [serializable], function () {
        return true;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_useGrayscale", [serializable], function () {
        return false;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_atlas", [serializable], function () {
        return null;
      })), _class2)) || _class) || _class) || _class) || _class));
      cclegacy.Sprite = Sprite;
    }
  };
});
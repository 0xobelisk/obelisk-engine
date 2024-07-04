System.register("q-bundled:///fs/cocos/2d/components/label.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "pal/minigame", "../assets/index.js", "../../asset/assets/index.js", "../../core/index.js", "../assembler/label/font-utils.js", "../framework/ui-renderer.js", "../../asset/assets/texture-base.js", "../../asset/assets/asset-enum.js", "../../gfx/index.js", "../assembler/label/text-style.js", "../assembler/label/text-layout.js", "../assembler/label/text-output-data.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, displayOrder, visible, multiline, type, serializable, editable, BYTEDANCE, EDITOR, JSB, minigame, BitmapFont, Font, SpriteFrame, ImageAsset, Texture2D, ccenum, cclegacy, Color, Vec2, CanvasPool, InstanceMaterialType, UIRenderer, TextureBase, PixelFormat, BlendFactor, TextStyle, TextLayout, TextOutputLayoutData, TextOutputRenderData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _initializer24, _class3, tempColor, HorizontalTextAlignment, VerticalTextAlignment, Overflow, CacheMode, Label;
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
  _export({
    HorizontalTextAlignment: void 0,
    VerticalTextAlignment: void 0,
    Overflow: void 0,
    CacheMode: void 0
  });
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      visible = _coreDataDecoratorsIndexJs.visible;
      multiline = _coreDataDecoratorsIndexJs.multiline;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_virtualInternal253AconstantsJs) {
      BYTEDANCE = _virtualInternal253AconstantsJs.BYTEDANCE;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_assetsIndexJs) {
      BitmapFont = _assetsIndexJs.BitmapFont;
      Font = _assetsIndexJs.Font;
      SpriteFrame = _assetsIndexJs.SpriteFrame;
    }, function (_assetAssetsIndexJs) {
      ImageAsset = _assetAssetsIndexJs.ImageAsset;
      Texture2D = _assetAssetsIndexJs.Texture2D;
    }, function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
      cclegacy = _coreIndexJs.cclegacy;
      Color = _coreIndexJs.Color;
      Vec2 = _coreIndexJs.Vec2;
    }, function (_assemblerLabelFontUtilsJs) {
      CanvasPool = _assemblerLabelFontUtilsJs.CanvasPool;
    }, function (_frameworkUiRendererJs) {
      InstanceMaterialType = _frameworkUiRendererJs.InstanceMaterialType;
      UIRenderer = _frameworkUiRendererJs.UIRenderer;
    }, function (_assetAssetsTextureBaseJs) {
      TextureBase = _assetAssetsTextureBaseJs.TextureBase;
    }, function (_assetAssetsAssetEnumJs) {
      PixelFormat = _assetAssetsAssetEnumJs.PixelFormat;
    }, function (_gfxIndexJs) {
      BlendFactor = _gfxIndexJs.BlendFactor;
    }, function (_assemblerLabelTextStyleJs) {
      TextStyle = _assemblerLabelTextStyleJs.TextStyle;
    }, function (_assemblerLabelTextLayoutJs) {
      TextLayout = _assemblerLabelTextLayoutJs.TextLayout;
    }, function (_assemblerLabelTextOutputDataJs) {
      TextOutputLayoutData = _assemblerLabelTextOutputDataJs.TextOutputLayoutData;
      TextOutputRenderData = _assemblerLabelTextOutputDataJs.TextOutputRenderData;
    }],
    execute: function () {
      tempColor = Color.WHITE.clone();
      /**
       * @en Enum for horizontal text alignment.
       *
       * @zh 文本横向对齐类型。
       */
      (function (HorizontalTextAlignment) {
        HorizontalTextAlignment[HorizontalTextAlignment["LEFT"] = 0] = "LEFT";
        HorizontalTextAlignment[HorizontalTextAlignment["CENTER"] = 1] = "CENTER";
        HorizontalTextAlignment[HorizontalTextAlignment["RIGHT"] = 2] = "RIGHT";
      })(HorizontalTextAlignment || _export("HorizontalTextAlignment", HorizontalTextAlignment = {}));
      ccenum(HorizontalTextAlignment);

      /**
       * @en Enum for vertical text alignment.
       *
       * @zh 文本垂直对齐类型。
       */
      (function (VerticalTextAlignment) {
        VerticalTextAlignment[VerticalTextAlignment["TOP"] = 0] = "TOP";
        VerticalTextAlignment[VerticalTextAlignment["CENTER"] = 1] = "CENTER";
        VerticalTextAlignment[VerticalTextAlignment["BOTTOM"] = 2] = "BOTTOM";
      })(VerticalTextAlignment || _export("VerticalTextAlignment", VerticalTextAlignment = {}));
      ccenum(VerticalTextAlignment);

      /**
       * @en Enum for Overflow.
       *
       * @zh 文本溢出行为类型。
       */
      (function (Overflow) {
        Overflow[Overflow["NONE"] = 0] = "NONE";
        Overflow[Overflow["CLAMP"] = 1] = "CLAMP";
        Overflow[Overflow["SHRINK"] = 2] = "SHRINK";
        Overflow[Overflow["RESIZE_HEIGHT"] = 3] = "RESIZE_HEIGHT";
      })(Overflow || _export("Overflow", Overflow = {}));
      ccenum(Overflow);

      /**
       * @en Enum for cache mode.
       *
       * @zh 文本图集缓存类型。
       */
      (function (CacheMode) {
        CacheMode[CacheMode["NONE"] = 0] = "NONE";
        CacheMode[CacheMode["BITMAP"] = 1] = "BITMAP";
        CacheMode[CacheMode["CHAR"] = 2] = "CHAR";
      })(CacheMode || _export("CacheMode", CacheMode = {}));
      ccenum(CacheMode);

      /**
       * @en
       * The Label Component.
       *
       * @zh
       * 文字标签组件。
       */
      _export("Label", Label = (_dec = ccclass('cc.Label'), _dec2 = help('i18n:cc.Label'), _dec3 = executionOrder(110), _dec4 = menu('2D/Label'), _dec5 = displayOrder(4), _dec6 = type(HorizontalTextAlignment), _dec7 = displayOrder(5), _dec8 = type(VerticalTextAlignment), _dec9 = displayOrder(6), _dec10 = displayOrder(7), _dec11 = displayOrder(8), _dec12 = visible(function () {
        return !this._isSystemFontUsed && this._font instanceof BitmapFont;
      }), _dec13 = displayOrder(9), _dec14 = type(Overflow), _dec15 = displayOrder(10), _dec16 = displayOrder(11), _dec17 = displayOrder(12), _dec18 = displayOrder(13), _dec19 = visible(function () {
        return this._isSystemFontUsed;
      }), _dec20 = type(Font), _dec21 = displayOrder(13), _dec22 = visible(function () {
        return !this._isSystemFontUsed;
      }), _dec23 = type(CacheMode), _dec24 = displayOrder(14), _dec25 = displayOrder(15), _dec26 = displayOrder(16), _dec27 = displayOrder(17), _dec28 = visible(function () {
        return this._isUnderline;
      }), _dec29 = displayOrder(18), _dec30 = visible(function () {
        return !(this._font instanceof BitmapFont);
      }), _dec31 = displayOrder(19), _dec32 = visible(function () {
        return this._enableOutline && !(this._font instanceof BitmapFont);
      }), _dec33 = displayOrder(20), _dec34 = visible(function () {
        return this._enableOutline && !(this._font instanceof BitmapFont);
      }), _dec35 = displayOrder(21), _dec36 = visible(function () {
        return !(this._font instanceof BitmapFont) && this.cacheMode !== CacheMode.CHAR;
      }), _dec37 = displayOrder(22), _dec38 = visible(function () {
        return this._enableShadow && !(this._font instanceof BitmapFont) && this.cacheMode !== CacheMode.CHAR;
      }), _dec39 = displayOrder(23), _dec40 = visible(function () {
        return this._enableShadow && !(this._font instanceof BitmapFont) && this.cacheMode !== CacheMode.CHAR;
      }), _dec41 = displayOrder(24), _dec42 = visible(function () {
        return this._enableShadow && !(this._font instanceof BitmapFont) && this.cacheMode !== CacheMode.CHAR;
      }), _dec43 = displayOrder(25), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_class3 = /*#__PURE__*/function (_UIRenderer) {
        _inheritsLoose(Label, _UIRenderer);
        function Label() {
          var _this;
          _this = _UIRenderer.call(this) || this;
          _this._string = _initializer && _initializer();
          _this._horizontalAlign = _initializer2 && _initializer2();
          _this._verticalAlign = _initializer3 && _initializer3();
          _this._actualFontSize = _initializer4 && _initializer4();
          _this._fontSize = _initializer5 && _initializer5();
          _this._fontFamily = _initializer6 && _initializer6();
          _this._lineHeight = _initializer7 && _initializer7();
          _this._overflow = _initializer8 && _initializer8();
          _this._enableWrapText = _initializer9 && _initializer9();
          _this._font = _initializer10 && _initializer10();
          _this._isSystemFontUsed = _initializer11 && _initializer11();
          _this._spacingX = _initializer12 && _initializer12();
          _this._isItalic = _initializer13 && _initializer13();
          _this._isBold = _initializer14 && _initializer14();
          _this._isUnderline = _initializer15 && _initializer15();
          _this._underlineHeight = _initializer16 && _initializer16();
          _this._cacheMode = _initializer17 && _initializer17();
          _this._enableOutline = _initializer18 && _initializer18();
          _this._outlineColor = _initializer19 && _initializer19();
          _this._outlineWidth = _initializer20 && _initializer20();
          _this._enableShadow = _initializer21 && _initializer21();
          _this._shadowColor = _initializer22 && _initializer22();
          _this._shadowOffset = _initializer23 && _initializer23();
          _this._shadowBlur = _initializer24 && _initializer24();
          // don't need serialize
          // 这个保存了旧项目的 file 数据
          _this._N$file = null;
          _this._texture = null;
          _this._ttfSpriteFrame = null;
          _this._userDefinedFont = null;
          _this._assemblerData = null;
          _this._fontAtlas = null;
          _this._letterTexture = null;
          _this._contentWidth = 0;
          _this._textStyle = null;
          _this._textLayout = null;
          _this._textRenderData = null;
          _this._textLayoutData = null;
          if (EDITOR) {
            _this._userDefinedFont = null;
          }
          _this._ttfSpriteFrame = null;
          _this._textStyle = new TextStyle();
          _this._textLayout = new TextLayout();
          _this._textLayoutData = new TextOutputLayoutData();
          _this._textRenderData = new TextOutputRenderData();
          return _this;
        }
        var _proto = Label.prototype;
        _proto.onEnable = function onEnable() {
          _UIRenderer.prototype.onEnable.call(this);

          // TODO: Hack for barbarians
          if (!this._font && !this._isSystemFontUsed) {
            this.useSystemFont = true;
          }
          // Reapply default font family if necessary
          if (this._isSystemFontUsed && !this._fontFamily) {
            this.fontFamily = 'Arial';
          }
          this._applyFontTexture();
        };
        _proto.destroyTtfSpriteFrame = function destroyTtfSpriteFrame() {
          if (!this._ttfSpriteFrame) {
            return;
          }
          this._ttfSpriteFrame._resetDynamicAtlasFrame();
          var tex = this._ttfSpriteFrame.texture;
          this._ttfSpriteFrame.destroy();
          if (tex) {
            var tex2d = tex;
            if (tex2d.image) {
              tex2d.image.destroy();
            }
            tex.destroy();
          }
          this._ttfSpriteFrame = null;
        }

        // Override
        ;
        _proto._onPreDestroy = function _onPreDestroy() {
          _UIRenderer.prototype._onPreDestroy.call(this);
          if (!this._isOnLoadCalled) {
            // If _objFlags does not contain IsOnLoadCalled, it is possible to destroy the ttfSpriteFrame.
            this.destroyTtfSpriteFrame();
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._assembler && this._assembler.resetAssemblerData) {
            this._assembler.resetAssemblerData(this._assemblerData);
          }
          this._assemblerData = null;
          this.destroyTtfSpriteFrame();
          // Don't set null for properties which are init in constructor.
          // this._textStyle = null;
          // this._textLayout = null;
          // this._textRenderData = null;
          // this._textLayoutData = null;

          // texture cannot be destroyed in here, lettertexture image source is public.
          this._letterTexture = null;
          _UIRenderer.prototype.onDestroy.call(this);
        }

        /**
         * @en update render data.
         * @zh 更新渲染相关数据。
         * @param force @en Whether to force an immediate update. @zh 是否立马强制更新渲染数据。
         */;
        _proto.updateRenderData = function updateRenderData(force) {
          if (force === void 0) {
            force = false;
          }
          if (force) {
            this._flushAssembler();
            // Hack: Fixed the bug that richText wants to get the label length by _measureText,
            // _assembler.updateRenderData will update the content size immediately.
            if (this.renderData) this.renderData.vertDirty = true;
            this._applyFontTexture();
          }
          if (this._assembler) {
            this._assembler.updateRenderData(this);
          }
        };
        _proto._render = function _render(render) {
          render.commitComp(this, this.renderData, this._texture, this._assembler, null);
        }

        // Cannot use the base class methods directly because BMFont and CHAR cannot be updated in assambler with just color.
        ;
        _proto._updateColor = function _updateColor() {
          _UIRenderer.prototype._updateColor.call(this);
          this.markForUpdateRenderData();
        }

        /**
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.setEntityColor = function setEntityColor(color) {
          if (JSB) {
            if (this._font instanceof BitmapFont) {
              this._renderEntity.color = color;
            } else {
              tempColor.set(255, 255, 255, color.a);
              this._renderEntity.color = tempColor;
            }
          }
        };
        _proto._canRender = function _canRender() {
          if (!_UIRenderer.prototype._canRender.call(this) || !this._string) {
            return false;
          }
          var font = this._font;
          if (font && font instanceof BitmapFont) {
            var spriteFrame = font.spriteFrame;
            // cannot be activated if texture not loaded yet
            if (!spriteFrame || !spriteFrame.texture) {
              return false;
            }
          }
          return true;
        };
        _proto._flushAssembler = function _flushAssembler() {
          var assembler = Label.Assembler.getAssembler(this);
          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
            this.textStyle.reset();
            this.textLayout.reset();
            this.textLayoutData.reset();
            this.textRenderData.reset();
          }
          if (!this.renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this.renderData.material = this.material;
              this._updateColor();
            }
          }
        };
        _proto._applyFontTexture = function _applyFontTexture() {
          this.markForUpdateRenderData();
          var font = this._font;
          if (font instanceof BitmapFont) {
            var spriteFrame = font.spriteFrame;
            if (spriteFrame && spriteFrame.texture) {
              this._texture = spriteFrame;
              if (this.renderData) {
                this.renderData.textureDirty = true;
              }
              this.changeMaterialForDefine();
              if (this._assembler) {
                this._assembler.updateRenderData(this);
              }
            }
          } else {
            if (this.cacheMode === CacheMode.CHAR) {
              this._letterTexture = this._assembler.getAssemblerData();
              this._texture = this._letterTexture;
            } else if (!this._ttfSpriteFrame) {
              this._ttfSpriteFrame = new SpriteFrame();
              this._assemblerData = this._assembler.getAssemblerData();
              var image = new ImageAsset(this._assemblerData.canvas);
              var texture = new Texture2D();
              texture.image = image;
              this._ttfSpriteFrame.texture = texture;
            }
            if (this.cacheMode !== CacheMode.CHAR) {
              // this._frame._refreshTexture(this._texture);
              this._texture = this._ttfSpriteFrame;
            }
            this.changeMaterialForDefine();
          }
        };
        _proto.changeMaterialForDefine = function changeMaterialForDefine() {
          if (!this._texture) {
            return;
          }
          var value = false;
          if (this.cacheMode !== CacheMode.CHAR) {
            var spriteFrame = this._texture;
            var texture = spriteFrame.texture;
            if (texture instanceof TextureBase) {
              var format = texture.getPixelFormat();
              value = format === PixelFormat.RGBA_ETC1 || format === PixelFormat.RGB_A_PVRTC_4BPPV1 || format === PixelFormat.RGB_A_PVRTC_2BPPV1;
            }
          }
          if (value) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED;
          } else {
            this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
          }
          this.updateMaterial();
        }

        /**
         * @engineInternal
         */;
        _proto._updateBlendFunc = function _updateBlendFunc() {
          // override for BYTEDANCE
          if (BYTEDANCE) {
            // need to fix ttf font black border at the sdk verion lower than 2.0.0
            var sysInfo = minigame.getSystemInfoSync();
            if (Number.parseInt(sysInfo.SDKVersion[0]) < 2) {
              if (this._srcBlendFactor === BlendFactor.SRC_ALPHA && !minigame.isDevTool && !(this._font instanceof BitmapFont) && !this._customMaterial) {
                // Premultiplied alpha on runtime when sdk verion is lower than 2.0.0
                this._srcBlendFactor = BlendFactor.ONE;
              }
            }
          }
          _UIRenderer.prototype._updateBlendFunc.call(this);
        };
        _createClass(Label, [{
          key: "string",
          get:
          /**
           * @en
           * Content string of label.
           *
           * @zh
           * 标签显示的文本内容。
           */
          function get() {
            return this._string;
          },
          set: function set(value) {
            if (value === null || value === undefined) {
              value = '';
            } else {
              value = value.toString();
            }
            if (this._string === value) {
              return;
            }
            this._string = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Horizontal Alignment of label.
           *
           * @zh
           * 文本内容的水平对齐方式。
           */
        }, {
          key: "horizontalAlign",
          get: function get() {
            return this._horizontalAlign;
          },
          set: function set(value) {
            if (this._horizontalAlign === value) {
              return;
            }
            this._horizontalAlign = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Vertical Alignment of label.
           *
           * @zh
           * 文本内容的垂直对齐方式。
           */
        }, {
          key: "verticalAlign",
          get: function get() {
            return this._verticalAlign;
          },
          set: function set(value) {
            if (this._verticalAlign === value) {
              return;
            }
            this._verticalAlign = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * The actual rendering font size in shrink mode.
           *
           * @zh
           * SHRINK 模式下面文本实际渲染的字体大小。
           */
        }, {
          key: "actualFontSize",
          get: function get() {
            return this._actualFontSize;
          },
          set: function set(value) {
            this._actualFontSize = value;
          }

          /**
           * @en
           * Font size of label.
           *
           * @zh
           * 文本字体大小。
           */
        }, {
          key: "fontSize",
          get: function get() {
            return this._fontSize;
          },
          set: function set(value) {
            if (this._fontSize === value) {
              return;
            }
            this._fontSize = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Line Height of label.
           *
           * @zh
           * 文本行高。
           */
        }, {
          key: "lineHeight",
          get: function get() {
            return this._lineHeight;
          },
          set: function set(value) {
            if (this._lineHeight === value) {
              return;
            }
            this._lineHeight = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * The spacing between text characters, only available in BMFont.
           *
           * @zh
           * 文本字符之间的间距。仅在使用 BMFont 位图字体时生效。
           */
        }, {
          key: "spacingX",
          get: function get() {
            return this._spacingX;
          },
          set: function set(value) {
            if (this._spacingX === value) {
              return;
            }
            this._spacingX = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Overflow of label.
           *
           * @zh
           * 文字显示超出范围时的处理方式。
           */
        }, {
          key: "overflow",
          get: function get() {
            return this._overflow;
          },
          set: function set(value) {
            if (this._overflow === value) {
              return;
            }
            this._overflow = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Whether auto wrap label when string width is large than label width.
           *
           * @zh
           * 是否自动换行。
           */
        }, {
          key: "enableWrapText",
          get: function get() {
            return this._enableWrapText;
          },
          set: function set(value) {
            if (this._enableWrapText === value) {
              return;
            }
            this._enableWrapText = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Whether use system font name or not.
           *
           * @zh
           * 是否使用系统字体。
           */
        }, {
          key: "useSystemFont",
          get: function get() {
            return this._isSystemFontUsed;
          },
          set: function set(value) {
            if (this._isSystemFontUsed === value) {
              return;
            }
            this.destroyRenderData();
            if (EDITOR) {
              if (!value && this._isSystemFontUsed && this._userDefinedFont) {
                this.font = this._userDefinedFont;
                this.spacingX = this._spacingX;
                return;
              }
            }
            this._isSystemFontUsed = !!value;
            if (value) {
              this.font = null;
            }
            this._flushAssembler();
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Font family of label, only take effect when useSystemFont property is true.
           *
           * @zh
           * 文本字体名称, 只在 useSystemFont 属性为 true 的时候生效。
           */
        }, {
          key: "fontFamily",
          get: function get() {
            return this._fontFamily;
          },
          set: function set(value) {
            if (this._fontFamily === value) {
              return;
            }
            this._fontFamily = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * The font of label.
           *
           * @zh
           * 文本字体。
           */
        }, {
          key: "font",
          get: function get() {
            // return this._N$file;
            return this._font;
          },
          set: function set(value) {
            if (this._font === value) {
              return;
            }

            // if delete the font, we should change isSystemFontUsed to true
            this._isSystemFontUsed = !value;
            if (EDITOR) {
              this._userDefinedFont = value;
            }

            // this._N$file = value;
            this._font = value;
            // if (value && this._isSystemFontUsed)
            //     this._isSystemFontUsed = false;

            this.destroyRenderData();
            this._fontAtlas = null;
            this.updateRenderData(true);
          }

          /**
           * @en
           * The cache mode of label. This mode only supports system fonts.
           *
           * @zh
           * 文本缓存模式, 该模式只支持系统字体。
           */
        }, {
          key: "cacheMode",
          get: function get() {
            return this._cacheMode;
          },
          set: function set(value) {
            if (this._cacheMode === value) {
              return;
            }
            if (this._cacheMode === CacheMode.BITMAP && !(this._font instanceof BitmapFont) && this._ttfSpriteFrame) {
              this._ttfSpriteFrame._resetDynamicAtlasFrame();
            }
            if (this._cacheMode === CacheMode.CHAR) {
              this._ttfSpriteFrame = null;
            }
            this._cacheMode = value;
            this.updateRenderData(true);
          }

          /**
           * @en
           * Whether the font is bold.
           *
           * @zh
           * 字体是否加粗。
           */
        }, {
          key: "isBold",
          get: function get() {
            return this._isBold;
          },
          set: function set(value) {
            if (this._isBold === value) {
              return;
            }
            this._isBold = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Whether the font is italic.
           *
           * @zh
           * 字体是否倾斜。
           */
        }, {
          key: "isItalic",
          get: function get() {
            return this._isItalic;
          },
          set: function set(value) {
            if (this._isItalic === value) {
              return;
            }
            this._isItalic = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Whether the font is underline.
           *
           * @zh
           * 字体是否加下划线。
           */
        }, {
          key: "isUnderline",
          get: function get() {
            return this._isUnderline;
          },
          set: function set(value) {
            if (this._isUnderline === value) {
              return;
            }
            this._isUnderline = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en The height of underline.
           * @zh 下划线高度。
           */
        }, {
          key: "underlineHeight",
          get: function get() {
            return this._underlineHeight;
          },
          set: function set(value) {
            if (this._underlineHeight === value) return;
            this._underlineHeight = value;
            this.markForUpdateRenderData();
          }

          /**
           ** @en
           ** Outline effect used to change the display, only for system fonts or TTF fonts.
           **
           ** @zh
           ** 描边效果组件,用于字体描边,只能用于系统字体或 ttf 字体。
           **/
        }, {
          key: "enableOutline",
          get: function get() {
            return this._enableOutline;
          },
          set: function set(value) {
            if (this._enableOutline === value) return;
            this._enableOutline = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Outline color.
           *
           * @zh
           * 改变描边的颜色。
           */
        }, {
          key: "outlineColor",
          get: function get() {
            return this._outlineColor;
          },
          set: function set(value) {
            if (this._outlineColor === value) return;
            this._outlineColor.set(value);
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Change the outline width.
           *
           * @zh
           * 改变描边的宽度。
           */
        }, {
          key: "outlineWidth",
          get: function get() {
            return this._outlineWidth;
          },
          set: function set(value) {
            if (this._outlineWidth === value) return;
            this._outlineWidth = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en Shadow effect for Label component, only for system fonts or TTF fonts. Disabled when cache mode is char.
           * @zh 用于给 Label 组件添加阴影效果，只能用于系统字体或 ttf 字体。在缓存模式为 char 时不可用。
           */
        }, {
          key: "enableShadow",
          get: function get() {
            return this._enableShadow;
          },
          set: function set(value) {
            if (this._enableShadow === value) return;
            this._enableShadow = value;
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Shadow color.
           *
           * @zh
           * 阴影的颜色。
           */
        }, {
          key: "shadowColor",
          get: function get() {
            return this._shadowColor;
          },
          set: function set(value) {
            if (this._shadowColor === value) return;
            this._shadowColor.set(value);
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * Offset between font and shadow.
           *
           * @zh
           * 字体与阴影的偏移。
           */
        }, {
          key: "shadowOffset",
          get: function get() {
            return this._shadowOffset;
          },
          set: function set(value) {
            if (this._shadowOffset === value) return;
            this._shadowOffset.set(value);
            this.markForUpdateRenderData();
          }

          /**
           * @en
           * A non-negative float specifying the level of shadow blur.
           *
           * @zh
           * 阴影的模糊程度。
           */
        }, {
          key: "shadowBlur",
          get: function get() {
            return this._shadowBlur;
          },
          set: function set(value) {
            if (this._shadowBlur === value) return;
            this._shadowBlur = value;
            this.markForUpdateRenderData();
          }

          /**
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "spriteFrame",
          get: function get() {
            return this._texture;
          }

          /**
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "ttfSpriteFrame",
          get: function get() {
            return this._ttfSpriteFrame;
          }

          /**
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "assemblerData",
          get: function get() {
            return this._assemblerData;
          }

          /**
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "fontAtlas",
          get: function get() {
            return this._fontAtlas;
          },
          set: function set(value) {
            this._fontAtlas = value;
          }

          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "_bmFontOriginalSize",
          get: function get() {
            if (this._font instanceof BitmapFont) {
              return this._font.fontSize;
            } else {
              return -1;
            }
          }

          /**
           * @engineInternal
           */
        }, {
          key: "textStyle",
          get: function get() {
            return this._textStyle;
          }
          /**
           * @engineInternal
           */
        }, {
          key: "textLayout",
          get: function get() {
            return this._textLayout;
          }
          /**
           * @engineInternal
           */
        }, {
          key: "textRenderData",
          get: function get() {
            return this._textRenderData;
          }
          /**
           * @engineInternal
           */
        }, {
          key: "textLayoutData",
          get: function get() {
            return this._textLayoutData;
          }
        }, {
          key: "contentWidth",
          get:
          /**
           * @engineInternal
           */
          function get() {
            return this._contentWidth;
          }

          /**
           * @engineInternal
           */,
          set: function set(val) {
            this._contentWidth = val;
          }
        }]);
        return Label;
      }(UIRenderer), _class3.HorizontalAlign = HorizontalTextAlignment, _class3.VerticalAlign = VerticalTextAlignment, _class3.Overflow = Overflow, _class3.CacheMode = CacheMode, _class3._canvasPool = CanvasPool.getInstance(), _class3), (_applyDecoratedDescriptor(_class2.prototype, "string", [_dec5, multiline], Object.getOwnPropertyDescriptor(_class2.prototype, "string"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "horizontalAlign", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "horizontalAlign"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "verticalAlign", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "verticalAlign"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fontSize", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "fontSize"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lineHeight", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "lineHeight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spacingX", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "spacingX"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "overflow", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "overflow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableWrapText", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "enableWrapText"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "useSystemFont", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "useSystemFont"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fontFamily", [_dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "fontFamily"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "font", [_dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "font"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cacheMode", [_dec23, _dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "cacheMode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isBold", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "isBold"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isItalic", [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "isItalic"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isUnderline", [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "isUnderline"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "underlineHeight", [_dec28, editable, _dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "underlineHeight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableOutline", [editable, _dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "enableOutline"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "outlineColor", [editable, _dec32, _dec33], Object.getOwnPropertyDescriptor(_class2.prototype, "outlineColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "outlineWidth", [editable, _dec34, _dec35], Object.getOwnPropertyDescriptor(_class2.prototype, "outlineWidth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableShadow", [editable, _dec36, _dec37], Object.getOwnPropertyDescriptor(_class2.prototype, "enableShadow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowColor", [editable, _dec38, _dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowOffset", [editable, _dec40, _dec41], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowOffset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadowBlur", [editable, _dec42, _dec43], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowBlur"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_string", [serializable], function () {
        return 'label';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_horizontalAlign", [serializable], function () {
        return HorizontalTextAlignment.CENTER;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_verticalAlign", [serializable], function () {
        return VerticalTextAlignment.CENTER;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_actualFontSize", [serializable], function () {
        return 0;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_fontSize", [serializable], function () {
        return 40;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_fontFamily", [serializable], function () {
        return 'Arial';
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_lineHeight", [serializable], function () {
        return 40;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_overflow", [serializable], function () {
        return Overflow.NONE;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_enableWrapText", [serializable], function () {
        return true;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_font", [serializable], function () {
        return null;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_isSystemFontUsed", [serializable], function () {
        return true;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "_spacingX", [serializable], function () {
        return 0;
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "_isItalic", [serializable], function () {
        return false;
      }), _initializer14 = _applyDecoratedInitializer(_class2.prototype, "_isBold", [serializable], function () {
        return false;
      }), _initializer15 = _applyDecoratedInitializer(_class2.prototype, "_isUnderline", [serializable], function () {
        return false;
      }), _initializer16 = _applyDecoratedInitializer(_class2.prototype, "_underlineHeight", [serializable], function () {
        return 2;
      }), _initializer17 = _applyDecoratedInitializer(_class2.prototype, "_cacheMode", [serializable], function () {
        return CacheMode.NONE;
      }), _initializer18 = _applyDecoratedInitializer(_class2.prototype, "_enableOutline", [serializable], function () {
        return false;
      }), _initializer19 = _applyDecoratedInitializer(_class2.prototype, "_outlineColor", [serializable], function () {
        return new Color(0, 0, 0, 255);
      }), _initializer20 = _applyDecoratedInitializer(_class2.prototype, "_outlineWidth", [serializable], function () {
        return 2;
      }), _initializer21 = _applyDecoratedInitializer(_class2.prototype, "_enableShadow", [serializable], function () {
        return false;
      }), _initializer22 = _applyDecoratedInitializer(_class2.prototype, "_shadowColor", [serializable], function () {
        return new Color(0, 0, 0, 255);
      }), _initializer23 = _applyDecoratedInitializer(_class2.prototype, "_shadowOffset", [serializable], function () {
        return new Vec2(2, 2);
      }), _initializer24 = _applyDecoratedInitializer(_class2.prototype, "_shadowBlur", [serializable], function () {
        return 2;
      })), _class2)) || _class) || _class) || _class) || _class));
      cclegacy.Label = Label;
    }
  };
});
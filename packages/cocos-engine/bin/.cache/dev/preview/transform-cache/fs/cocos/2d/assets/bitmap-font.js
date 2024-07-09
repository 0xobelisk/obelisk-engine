System.register("q-bundled:///fs/cocos/2d/assets/bitmap-font.js", ["../../core/data/decorators/index.js", "./font.js", "./sprite-frame.js", "../../core/index.js", "../utils/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, type, serializable, editable, Font, SpriteFrame, cclegacy, js, warn, getSymbolCodeAt, _dec, _dec2, _class2, _class3, _initializer, _initializer2, _initializer3, _initializer4, FontLetterDefinition, FontAtlas, BitmapFont;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_fontJs) {
      Font = _fontJs.Font;
    }, function (_spriteFrameJs) {
      SpriteFrame = _spriteFrameJs.SpriteFrame;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      js = _coreIndexJs.js;
      warn = _coreIndexJs.warn;
    }, function (_utilsIndexJs) {
      getSymbolCodeAt = _utilsIndexJs.getSymbolCodeAt;
    }],
    execute: function () {
      _export("FontLetterDefinition", FontLetterDefinition = function FontLetterDefinition() {
        this.u = 0;
        this.v = 0;
        this.w = 0;
        this.h = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.textureID = 0;
        this.valid = false;
        this.xAdvance = 0;
      });
      _export("FontAtlas", FontAtlas = /*#__PURE__*/function () {
        function FontAtlas(texture) {
          this.letterDefinitions = {};
          this.texture = texture;
        }
        var _proto = FontAtlas.prototype;
        _proto.addLetterDefinitions = function addLetterDefinitions(letter, letterDefinition) {
          this.letterDefinitions[letter] = letterDefinition;
        };
        _proto.cloneLetterDefinition = function cloneLetterDefinition() {
          var copyLetterDefinitions = {};
          for (var _i = 0, _Object$keys = Object.keys(this.letterDefinitions); _i < _Object$keys.length; _i++) {
            var _key = _Object$keys[_i];
            var value = new FontLetterDefinition();
            js.mixin(value, this.letterDefinitions[_key]);
            copyLetterDefinitions[_key] = value;
          }
          return copyLetterDefinitions;
        };
        _proto.getTexture = function getTexture() {
          return this.texture;
        };
        _proto.getLetter = function getLetter(key) {
          return this.letterDefinitions[key];
        };
        _proto.getLetterDefinitionForChar = function getLetterDefinitionForChar(_char, labelInfo) {
          var key = getSymbolCodeAt(_char, 0);
          var hasKey = this.letterDefinitions.hasOwnProperty(key);
          var letter;
          if (hasKey) {
            letter = this.letterDefinitions[key];
          } else {
            letter = null;
          }
          return letter;
        };
        _proto.clear = function clear() {
          this.letterDefinitions = {};
        };
        return FontAtlas;
      }());
      /**
       * @en Class for BitmapFont handling.
       * @zh 位图字体资源类。
       */
      _export("BitmapFont", BitmapFont = (_dec = ccclass('cc.BitmapFont'), _dec2 = type(SpriteFrame), _dec(_class2 = (_class3 = /*#__PURE__*/function (_Font) {
        _inheritsLoose(BitmapFont, _Font);
        function BitmapFont() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this = _Font.call.apply(_Font, [this].concat(args)) || this;
          /**
           * @deprecated since v3.7.0, Useless Code.
           */
          _this.fntDataStr = _initializer && _initializer();
          /**
           * @en [[SpriteFrame]] of the bitmap font.
           * @zh 位图字体所使用的精灵。
           */
          _this.spriteFrame = _initializer2 && _initializer2();
          /**
           * @en The font size.
           * @zh 文字尺寸。
           */
          _this.fontSize = _initializer3 && _initializer3();
          /**
           * @en Font configuration.
           * @zh 字体配置。
           */
          _this.fntConfig = _initializer4 && _initializer4();
          return _this;
        }
        var _proto2 = BitmapFont.prototype;
        /**
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        _proto2.onLoaded = function onLoaded() {
          var spriteFrame = this.spriteFrame;
          if (!this.fontDefDictionary && spriteFrame) {
            this.fontDefDictionary = new FontAtlas(spriteFrame.texture);
          }
          var fntConfig = this.fntConfig;
          if (!fntConfig) {
            warn('The fnt config is not exists!');
            return;
          }
          var fontDict = fntConfig.fontDefDictionary;
          for (var fontDef in fontDict) {
            var letter = new FontLetterDefinition();
            var rect = fontDict[fontDef].rect;
            letter.offsetX = fontDict[fontDef].xOffset;
            letter.offsetY = fontDict[fontDef].yOffset;
            letter.w = rect.width;
            letter.h = rect.height;
            letter.u = rect.x;
            letter.v = rect.y;
            // FIXME: only one texture supported for now
            letter.textureID = 0;
            letter.valid = true;
            letter.xAdvance = fontDict[fontDef].xAdvance;
            this.fontDefDictionary.addLetterDefinitions(fontDef, letter);
          }
        };
        return BitmapFont;
      }(Font), (_initializer = _applyDecoratedInitializer(_class3.prototype, "fntDataStr", [serializable, editable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class3.prototype, "spriteFrame", [_dec2], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class3.prototype, "fontSize", [serializable, editable], function () {
        return -1;
      }), _initializer4 = _applyDecoratedInitializer(_class3.prototype, "fntConfig", [serializable, editable], function () {
        return null;
      })), _class3)) || _class2));
      cclegacy.BitmapFont = BitmapFont;
    }
  };
});
System.register("q-bundled:///fs/cocos/2d/assets/bitmap-font.js", ["../../core/data/decorators/index.js", "./font.js", "./sprite-frame.js", "../../core/index.js", "../utils/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, type, serializable, editable, Font, SpriteFrame, cclegacy, js, warn, getSymbolCodeAt, FontLetterDefinition, FontAtlas, _dec, _dec2, _class2, _class3, _initializer, _initializer2, _initializer3, _initializer4, BitmapFont;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export({
    FontLetterDefinition: void 0,
    FontAtlas: void 0
  });
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
      _export("FontLetterDefinition", FontLetterDefinition = class FontLetterDefinition {
        constructor() {
          this.u = 0;
          this.v = 0;
          this.w = 0;
          this.h = 0;
          this.offsetX = 0;
          this.offsetY = 0;
          this.textureID = 0;
          this.valid = false;
          this.xAdvance = 0;
        }
      });
      _export("FontAtlas", FontAtlas = class FontAtlas {
        constructor(texture) {
          this.letterDefinitions = {};
          this.texture = texture;
        }
        addLetterDefinitions(letter, letterDefinition) {
          this.letterDefinitions[letter] = letterDefinition;
        }
        cloneLetterDefinition() {
          const copyLetterDefinitions = {};
          for (const key of Object.keys(this.letterDefinitions)) {
            const value = new FontLetterDefinition();
            js.mixin(value, this.letterDefinitions[key]);
            copyLetterDefinitions[key] = value;
          }
          return copyLetterDefinitions;
        }
        getTexture() {
          return this.texture;
        }
        getLetter(key) {
          return this.letterDefinitions[key];
        }
        getLetterDefinitionForChar(char, labelInfo) {
          const key = getSymbolCodeAt(char, 0);
          const hasKey = this.letterDefinitions.hasOwnProperty(key);
          let letter;
          if (hasKey) {
            letter = this.letterDefinitions[key];
          } else {
            letter = null;
          }
          return letter;
        }
        clear() {
          this.letterDefinitions = {};
        }
      });
      /**
       * @en Class for BitmapFont handling.
       * @zh 位图字体资源类。
       */
      _export("BitmapFont", BitmapFont = (_dec = ccclass('cc.BitmapFont'), _dec2 = type(SpriteFrame), _dec(_class2 = (_class3 = class BitmapFont extends Font {
        constructor(...args) {
          super(...args);
          /**
           * @deprecated since v3.7.0, Useless Code.
           */
          this.fntDataStr = _initializer && _initializer();
          /**
           * @en [[SpriteFrame]] of the bitmap font.
           * @zh 位图字体所使用的精灵。
           */
          this.spriteFrame = _initializer2 && _initializer2();
          /**
           * @en The font size.
           * @zh 文字尺寸。
           */
          this.fontSize = _initializer3 && _initializer3();
          /**
           * @en Font configuration.
           * @zh 字体配置。
           */
          this.fntConfig = _initializer4 && _initializer4();
        }
        /**
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */

        onLoaded() {
          const spriteFrame = this.spriteFrame;
          if (!this.fontDefDictionary && spriteFrame) {
            this.fontDefDictionary = new FontAtlas(spriteFrame.texture);
          }
          const fntConfig = this.fntConfig;
          if (!fntConfig) {
            warn('The fnt config is not exists!');
            return;
          }
          const fontDict = fntConfig.fontDefDictionary;
          for (const fontDef in fontDict) {
            const letter = new FontLetterDefinition();
            const rect = fontDict[fontDef].rect;
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
        }
      }, (_initializer = _applyDecoratedInitializer(_class3.prototype, "fntDataStr", [serializable, editable], function () {
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
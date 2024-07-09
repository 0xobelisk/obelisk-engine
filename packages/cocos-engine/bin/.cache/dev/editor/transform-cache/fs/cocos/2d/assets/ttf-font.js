System.register("q-bundled:///fs/cocos/2d/assets/ttf-font.js", ["../../core/data/decorators/index.js", "../../core/index.js", "./font.js"], function (_export, _context) {
  "use strict";

  var ccclass, string, override, serializable, path, cclegacy, Font, _dec, _class, _class2, _initializer, TTFFont;
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
      string = _coreDataDecoratorsIndexJs.string;
      override = _coreDataDecoratorsIndexJs.override;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      path = _coreIndexJs.path;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_fontJs) {
      Font = _fontJs.Font;
    }],
    execute: function () {
      /**
       * @en Class for TTFFont asset.
       * @zh TTF 字体资源类。
       */
      _export("TTFFont", TTFFont = (_dec = ccclass('cc.TTFFont'), _dec(_class = (_class2 = class TTFFont extends Font {
        constructor(...args) {
          super(...args);
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._fontFamily = _initializer && _initializer();
        }
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        get _nativeAsset() {
          return this._fontFamily;
        }
        set _nativeAsset(value) {
          this._fontFamily = value || 'Arial';
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        get _nativeDep() {
          return {
            uuid: this._uuid,
            __nativeName__: this._native,
            ext: path.extname(this._native),
            __isNative__: true
          };
        }

        /**
         * @en default init.
         * @zh 默认初始化。
         * @param uuid @en Asset uuid. @zh 资源 uuid。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        initDefault(uuid) {
          this._fontFamily = 'Arial';
          super.initDefault(uuid);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_fontFamily", [serializable], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "_nativeAsset", [override, string], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeAsset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_nativeDep", [override], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeDep"), _class2.prototype)), _class2)) || _class));
      cclegacy.TTFFont = TTFFont;
    }
  };
});
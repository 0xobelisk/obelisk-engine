System.register("q-bundled:///fs/cocos/2d/assets/ttf-font.js", ["../../core/data/decorators/index.js", "../../core/index.js", "./font.js"], function (_export, _context) {
  "use strict";

  var ccclass, string, override, serializable, path, cclegacy, Font, _dec, _class, _class2, _initializer, TTFFont;
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
      _export("TTFFont", TTFFont = (_dec = ccclass('cc.TTFFont'), _dec(_class = (_class2 = /*#__PURE__*/function (_Font) {
        _inheritsLoose(TTFFont, _Font);
        function TTFFont() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Font.call.apply(_Font, [this].concat(args)) || this;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._fontFamily = _initializer && _initializer();
          return _this;
        }
        var _proto = TTFFont.prototype;
        /**
         * @en default init.
         * @zh 默认初始化。
         * @param uuid @en Asset uuid. @zh 资源 uuid。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        _proto.initDefault = function initDefault(uuid) {
          this._fontFamily = 'Arial';
          _Font.prototype.initDefault.call(this, uuid);
        };
        _createClass(TTFFont, [{
          key: "_nativeAsset",
          get:
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._fontFamily;
          },
          set: function set(value) {
            this._fontFamily = value || 'Arial';
          }

          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "_nativeDep",
          get: function get() {
            return {
              uuid: this._uuid,
              __nativeName__: this._native,
              ext: path.extname(this._native),
              __isNative__: true
            };
          }
        }]);
        return TTFFont;
      }(Font), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_fontFamily", [serializable], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "_nativeAsset", [override, string], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeAsset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_nativeDep", [override], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeDep"), _class2.prototype)), _class2)) || _class));
      cclegacy.TTFFont = TTFFont;
    }
  };
});
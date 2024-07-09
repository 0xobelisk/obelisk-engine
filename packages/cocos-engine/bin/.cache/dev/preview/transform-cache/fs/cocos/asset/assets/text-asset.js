System.register("q-bundled:///fs/cocos/asset/assets/text-asset.js", ["../../core/data/decorators/index.js", "./asset.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, Asset, cclegacy, _dec, _class, _class2, _initializer, TextAsset;
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
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_assetJs) {
      Asset = _assetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en The asset for text file.
       * @zh 文本资源。
       */
      _export("TextAsset", TextAsset = (_dec = ccclass('cc.TextAsset'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(TextAsset, _Asset);
        function TextAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          /**
           * @en The text content.
           * @zh 此资源包含的文本。
           */
          _this.text = _initializer && _initializer();
          return _this;
        }
        var _proto = TextAsset.prototype;
        _proto.toString = function toString() {
          return this.text;
        };
        return TextAsset;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "text", [serializable, editable], function () {
        return '';
      })), _class2)) || _class));
      cclegacy.TextAsset = TextAsset;
    }
  };
});
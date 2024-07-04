System.register("q-bundled:///fs/cocos/asset/assets/json-asset.js", ["../../core/data/decorators/index.js", "./asset.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, Asset, cclegacy, _dec, _class, _class2, _initializer, JsonAsset;
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
       * @en Json asset, it will automatically parse the json to a JS object.
       * @zh Json 资源。
       * Json 资源加载后将直接解析为对象。如果你希望获得 JSON 的原始文本，你需要使用文本资源（使用文件名后缀“.txt”）。
       */
      _export("default", JsonAsset = (_dec = ccclass('cc.JsonAsset'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(JsonAsset, _Asset);
        function JsonAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          /**
           * @en The parsed JS object
           * @zh 解析后的对象。
           */
          _this.json = _initializer && _initializer();
          return _this;
        }
        return JsonAsset;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "json", [serializable, editable], function () {
        return null;
      })), _class2)) || _class));
      cclegacy.JsonAsset = JsonAsset;
    }
  };
});
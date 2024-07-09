System.register("q-bundled:///fs/cocos/particle-2d/particle-asset.js", ["../asset/assets/asset.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var Asset, cclegacy, _decorator, _dec, _class, _class2, _initializer, ccclass, serializable, editable, ParticleAsset;
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
    setters: [function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      _decorator = _coreIndexJs._decorator;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      editable = _decorator.editable;
      /**
       * @en Class for 2D particle asset handling.
       * @zh 2D 粒子资产
       * @class ParticleAsset
       * @extends Asset
       */
      _export("ParticleAsset", ParticleAsset = (_dec = ccclass('cc.ParticleAsset'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(ParticleAsset, _Asset);
        function ParticleAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          _this.spriteFrame = _initializer && _initializer();
          return _this;
        }
        return ParticleAsset;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "spriteFrame", [serializable, editable], function () {
        return null;
      })), _class2)) || _class));
      cclegacy.ParticleAsset = ParticleAsset;
    }
  };
});
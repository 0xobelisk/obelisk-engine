System.register("q-bundled:///fs/cocos/asset/assets/scene-asset.js", ["../../core/data/decorators/index.js", "../../scene-graph/scene.js", "./asset.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, Scene, Asset, cclegacy, _dec, _class, _class2, _initializer, SceneAsset;
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
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_sceneGraphSceneJs) {
      Scene = _sceneGraphSceneJs.Scene;
    }, function (_assetJs) {
      Asset = _assetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en Class for scene loading.
       * @zh 场景资源类。
       *
       */
      _export("SceneAsset", SceneAsset = (_dec = ccclass('cc.SceneAsset'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(SceneAsset, _Asset);
        function SceneAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          /**
           * @en The scene node
           * @zh 场景节点。
           */
          _this.scene = _initializer && _initializer();
          return _this;
        }
        var _proto = SceneAsset.prototype;
        _proto.initDefault = function initDefault(uuid) {
          _Asset.prototype.initDefault.call(this, uuid);
          this.scene = new Scene('New Scene');
        };
        _proto.validate = function validate() {
          return !!this.scene;
        };
        return SceneAsset;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "scene", [editable, serializable], function () {
        return null;
      })), _class2)) || _class));
      cclegacy.SceneAsset = SceneAsset;
    }
  };
});
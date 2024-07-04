System.register("q-bundled:///fs/cocos/rendering/post-process/components/taa-mask.js", ["../../../asset/assets/index.js", "../../../core/index.js", "../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "../../../game/index.js", "../../../misc/index.js", "../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var RenderTexture, warn, property, ccclass, menu, game, Camera, Component, _dec, _dec2, _dec3, _class, _class2, _initializer, TAAMask;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_assetAssetsIndexJs) {
      RenderTexture = _assetAssetsIndexJs.RenderTexture;
    }, function (_coreIndexJs) {
      warn = _coreIndexJs.warn;
    }, function (_coreDataClassDecoratorJs) {
      property = _coreDataClassDecoratorJs.property;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      menu = _coreDataDecoratorsIndexJs.menu;
    }, function (_gameIndexJs) {
      game = _gameIndexJs.game;
    }, function (_miscIndexJs) {
      Camera = _miscIndexJs.Camera;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }],
    execute: function () {
      _export("TAAMask", TAAMask = (_dec = ccclass('TAAMask'), _dec2 = menu('PostProcess/TAAMask'), _dec3 = property(Camera), _dec(_class = _dec2(_class = (_class2 = class TAAMask extends Component {
        constructor(...args) {
          super(...args);
          this.maskCamera = _initializer && _initializer();
          this._mask = void 0;
        }
        get mask() {
          if (!this.maskCamera || !this.maskCamera.enabledInHierarchy) {
            return undefined;
          }
          if (!this.enabledInHierarchy) {
            return undefined;
          }
          return this._mask;
        }
        start() {
          if (!this.maskCamera) {
            warn('Can not find a Camera for TAAMask');
            return;
          }
          const tex = new RenderTexture();
          tex.reset({
            width: game.canvas.width,
            height: game.canvas.height
          });
          this._mask = tex;
          this.maskCamera.targetTexture = tex;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "maskCamera", [_dec3], null)), _class2)) || _class) || _class));
    }
  };
});
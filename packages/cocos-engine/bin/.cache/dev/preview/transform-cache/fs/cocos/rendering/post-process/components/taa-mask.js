System.register("q-bundled:///fs/cocos/rendering/post-process/components/taa-mask.js", ["../../../asset/assets/index.js", "../../../core/index.js", "../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "../../../game/index.js", "../../../misc/index.js", "../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var RenderTexture, warn, property, ccclass, menu, game, Camera, Component, _dec, _dec2, _dec3, _class, _class2, _initializer, TAAMask;
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
      _export("TAAMask", TAAMask = (_dec = ccclass('TAAMask'), _dec2 = menu('PostProcess/TAAMask'), _dec3 = property(Camera), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TAAMask, _Component);
        function TAAMask() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.maskCamera = _initializer && _initializer();
          _this._mask = void 0;
          return _this;
        }
        var _proto = TAAMask.prototype;
        _proto.start = function start() {
          if (!this.maskCamera) {
            warn('Can not find a Camera for TAAMask');
            return;
          }
          var tex = new RenderTexture();
          tex.reset({
            width: game.canvas.width,
            height: game.canvas.height
          });
          this._mask = tex;
          this.maskCamera.targetTexture = tex;
        };
        _createClass(TAAMask, [{
          key: "mask",
          get: function get() {
            if (!this.maskCamera || !this.maskCamera.enabledInHierarchy) {
              return undefined;
            }
            if (!this.enabledInHierarchy) {
              return undefined;
            }
            return this._mask;
          }
        }]);
        return TAAMask;
      }(Component), (_initializer = _applyDecoratedInitializer(_class2.prototype, "maskCamera", [_dec3], null)), _class2)) || _class) || _class));
    }
  };
});
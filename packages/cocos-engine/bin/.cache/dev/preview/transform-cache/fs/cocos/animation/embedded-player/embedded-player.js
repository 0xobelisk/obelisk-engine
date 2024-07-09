System.register("q-bundled:///fs/cocos/animation/embedded-player/embedded-player.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, EditorExtendable, CLASS_NAME_PREFIX_ANIM, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, EmbeddedPlayer, EmbeddedPlayable, EmbeddedPlayableState;
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
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      EditorExtendable = _coreIndexJs.EditorExtendable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      _export("EmbeddedPlayer", EmbeddedPlayer = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "EmbeddedPlayer"), _dec(_class = (_class2 = /*#__PURE__*/function (_EditorExtendable) {
        _inheritsLoose(EmbeddedPlayer, _EditorExtendable);
        function EmbeddedPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EditorExtendable.call.apply(_EditorExtendable, [this].concat(args)) || this;
          /**
           * @en
           * Begin time, in seconds.
           * @zh
           * 开始时间，以秒为单位。
           */
          _this.begin = _initializer && _initializer();
          /**
            * @en
            * End time, in seconds.
            * @zh
            * 结束时间，以秒为单位。
            */
          _this.end = _initializer2 && _initializer2();
          /**
            * @en
            * Whether the speed of this embedded player should be reconciled with the host animation clip.
            * @zh
            * 子区域的播放速度是否应和宿主动画剪辑保持一致。
            */
          _this.reconciledSpeed = _initializer3 && _initializer3();
          /**
           * @en
           * Player of the embedded player.
           * @zh
           * 子区域的播放器。
           */
          _this.playable = _initializer4 && _initializer4();
          return _this;
        }
        return EmbeddedPlayer;
      }(EditorExtendable), (_initializer = _applyDecoratedInitializer(_class2.prototype, "begin", [serializable], function () {
        return 0.0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "end", [serializable], function () {
        return 0.0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "reconciledSpeed", [serializable], function () {
        return false;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "playable", [serializable], function () {
        return null;
      })), _class2)) || _class));
      _export("EmbeddedPlayable", EmbeddedPlayable = function EmbeddedPlayable() {});
      _export("EmbeddedPlayableState", EmbeddedPlayableState = /*#__PURE__*/function () {
        function EmbeddedPlayableState(randomAccess) {
          this._randomAccess = randomAccess;
        }

        /**
         * @zh
         * 是否可以随意调整此播放器到任何时间。
         * @en
         * Indicates if this player can be adjusted to any time.
         */
        var _proto = EmbeddedPlayableState.prototype;
        _proto.setTime = function setTime(_time) {};
        _createClass(EmbeddedPlayableState, [{
          key: "randomAccess",
          get: function get() {
            return this._randomAccess;
          }

          /**
           * @zh
           * 销毁此播放器。
           * @zh
           * Destroys this player state.
           */
        }]);
        return EmbeddedPlayableState;
      }());
    }
  };
});
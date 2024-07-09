System.register("q-bundled:///fs/cocos/animation/embedded-player/embedded-animation-clip-player.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../animation-state.js", "../define.js", "./embedded-player.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, errorID, AnimationState, CLASS_NAME_PREFIX_ANIM, EmbeddedPlayableState, EmbeddedPlayable, _dec, _class, _class2, _initializer, _initializer2, EmbeddedAnimationClipPlayable, EmbeddedAnimationClipPlayableState;
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
      errorID = _coreIndexJs.errorID;
    }, function (_animationStateJs) {
      AnimationState = _animationStateJs.AnimationState;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_embeddedPlayerJs) {
      EmbeddedPlayableState = _embeddedPlayerJs.EmbeddedPlayableState;
      EmbeddedPlayable = _embeddedPlayerJs.EmbeddedPlayable;
    }],
    execute: function () {
      /**
       * @en
       * The embedded animation clip playable. The playable play animation clip on a embedded player.
       * @zh
       * 动画剪辑子区域播放器。此播放器在子区域上播放动画剪辑。
       */
      _export("EmbeddedAnimationClipPlayable", EmbeddedAnimationClipPlayable = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "EmbeddedAnimationClipPlayable"), _dec(_class = (_class2 = /*#__PURE__*/function (_EmbeddedPlayable) {
        _inheritsLoose(EmbeddedAnimationClipPlayable, _EmbeddedPlayable);
        function EmbeddedAnimationClipPlayable() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EmbeddedPlayable.call.apply(_EmbeddedPlayable, [this].concat(args)) || this;
          /**
           * @en
           * Path to the node onto which the animation clip would be played, relative from animation context root.
           * @zh
           * 要播放动画剪辑的节点的路径，相对于动画上下文的根节点。
           */
          _this.path = _initializer && _initializer();
          /**
           * @en
           * The animation clip to play.
           * @zh
           * 要播放的动画剪辑。
           */
          _this.clip = _initializer2 && _initializer2();
          return _this;
        }
        var _proto = EmbeddedAnimationClipPlayable.prototype;
        _proto.instantiate = function instantiate(root) {
          var clip = this.clip,
            path = this.path;
          if (!clip) {
            return null;
          }
          var clipRoot = root.getChildByPath(path);
          if (!clipRoot) {
            errorID(3938, path, root.getPathInHierarchy(), clip.name);
            return null;
          }
          var state = new AnimationState(clip);
          state.initialize(clipRoot);
          return new EmbeddedAnimationClipPlayableState(state);
        };
        return EmbeddedAnimationClipPlayable;
      }(EmbeddedPlayable), (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "clip", [serializable], function () {
        return null;
      })), _class2)) || _class));
      EmbeddedAnimationClipPlayableState = /*#__PURE__*/function (_EmbeddedPlayableStat) {
        _inheritsLoose(EmbeddedAnimationClipPlayableState, _EmbeddedPlayableStat);
        function EmbeddedAnimationClipPlayableState(animationState) {
          var _this2;
          _this2 = _EmbeddedPlayableStat.call(this, true) || this;
          _this2._animationState = void 0;
          _this2._animationState = animationState;
          return _this2;
        }
        var _proto2 = EmbeddedAnimationClipPlayableState.prototype;
        _proto2.destroy = function destroy() {
          this._animationState.destroy();
        }

        /**
         * Plays the animation state at specified time.
         */;
        _proto2.play = function play() {
          this._animationState.play();
        }

        /**
         * Pause the animation state.
         */;
        _proto2.pause = function pause() {
          this._animationState.pause();
        }

        /**
         * Stops the animation state.
         */;
        _proto2.stop = function stop() {
          this._animationState.stop();
        }

        /**
         * Sets the speed of the animation state.
         */;
        _proto2.setSpeed = function setSpeed(speed) {
          this._animationState.speed = speed;
        };
        _proto2.setTime = function setTime(time) {
          this._animationState.time = time;
        };
        return EmbeddedAnimationClipPlayableState;
      }(EmbeddedPlayableState);
    }
  };
});
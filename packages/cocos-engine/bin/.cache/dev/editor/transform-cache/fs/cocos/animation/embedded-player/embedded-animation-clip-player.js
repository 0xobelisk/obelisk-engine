System.register("q-bundled:///fs/cocos/animation/embedded-player/embedded-animation-clip-player.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../animation-state.js", "../define.js", "./embedded-player.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, errorID, AnimationState, CLASS_NAME_PREFIX_ANIM, EmbeddedPlayableState, EmbeddedPlayable, EmbeddedAnimationClipPlayableState, _dec, _class, _class2, _initializer, _initializer2, EmbeddedAnimationClipPlayable;
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
      _export("EmbeddedAnimationClipPlayable", EmbeddedAnimationClipPlayable = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}EmbeddedAnimationClipPlayable`), _dec(_class = (_class2 = class EmbeddedAnimationClipPlayable extends EmbeddedPlayable {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * Path to the node onto which the animation clip would be played, relative from animation context root.
           * @zh
           * 要播放动画剪辑的节点的路径，相对于动画上下文的根节点。
           */
          this.path = _initializer && _initializer();
          /**
           * @en
           * The animation clip to play.
           * @zh
           * 要播放的动画剪辑。
           */
          this.clip = _initializer2 && _initializer2();
        }
        instantiate(root) {
          const {
            clip,
            path
          } = this;
          if (!clip) {
            return null;
          }
          const clipRoot = root.getChildByPath(path);
          if (!clipRoot) {
            errorID(3938, path, root.getPathInHierarchy(), clip.name);
            return null;
          }
          const state = new AnimationState(clip);
          state.initialize(clipRoot);
          return new EmbeddedAnimationClipPlayableState(state);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "clip", [serializable], function () {
        return null;
      })), _class2)) || _class));
      EmbeddedAnimationClipPlayableState = class EmbeddedAnimationClipPlayableState extends EmbeddedPlayableState {
        constructor(animationState) {
          super(true);
          this._animationState = void 0;
          this._animationState = animationState;
        }
        destroy() {
          this._animationState.destroy();
        }

        /**
         * Plays the animation state at specified time.
         */
        play() {
          this._animationState.play();
        }

        /**
         * Pause the animation state.
         */
        pause() {
          this._animationState.pause();
        }

        /**
         * Stops the animation state.
         */
        stop() {
          this._animationState.stop();
        }

        /**
         * Sets the speed of the animation state.
         */
        setSpeed(speed) {
          this._animationState.speed = speed;
        }
        setTime(time) {
          this._animationState.time = time;
        }
      };
    }
  };
});
System.register("q-bundled:///fs/cocos/animation/embedded-player/embedded-player.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, EditorExtendable, CLASS_NAME_PREFIX_ANIM, EmbeddedPlayable, EmbeddedPlayableState, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, EmbeddedPlayer;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export({
    EmbeddedPlayable: void 0,
    EmbeddedPlayableState: void 0
  });
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
      _export("EmbeddedPlayer", EmbeddedPlayer = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}EmbeddedPlayer`), _dec(_class = (_class2 = class EmbeddedPlayer extends EditorExtendable {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * Begin time, in seconds.
           * @zh
           * 开始时间，以秒为单位。
           */
          this.begin = _initializer && _initializer();
          /**
            * @en
            * End time, in seconds.
            * @zh
            * 结束时间，以秒为单位。
            */
          this.end = _initializer2 && _initializer2();
          /**
            * @en
            * Whether the speed of this embedded player should be reconciled with the host animation clip.
            * @zh
            * 子区域的播放速度是否应和宿主动画剪辑保持一致。
            */
          this.reconciledSpeed = _initializer3 && _initializer3();
          /**
           * @en
           * Player of the embedded player.
           * @zh
           * 子区域的播放器。
           */
          this.playable = _initializer4 && _initializer4();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "begin", [serializable], function () {
        return 0.0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "end", [serializable], function () {
        return 0.0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "reconciledSpeed", [serializable], function () {
        return false;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "playable", [serializable], function () {
        return null;
      })), _class2)) || _class));
      _export("EmbeddedPlayable", EmbeddedPlayable = class EmbeddedPlayable {});
      _export("EmbeddedPlayableState", EmbeddedPlayableState = class EmbeddedPlayableState {
        constructor(randomAccess) {
          this._randomAccess = randomAccess;
        }

        /**
         * @zh
         * 是否可以随意调整此播放器到任何时间。
         * @en
         * Indicates if this player can be adjusted to any time.
         */
        get randomAccess() {
          return this._randomAccess;
        }

        /**
         * @zh
         * 销毁此播放器。
         * @zh
         * Destroys this player state.
         */

        /**
         * @zh
         * 该方法在此播放器开始播放时触发。
         * @en
         * This method is called when this player gets to play.
         */

        /**
         * @zh
         * 该方法在此播放器暂停播放时触发。
         * @en
         * This method is called when this player pauses.
         */

        /**
         * @zh
         * 该方法在此播放器结束播放时触发，或在宿主动画剪辑本身停止播放时触发。
         * @en
         * This method is called when this player ends its playback, and is called when the host animation clip is stopped.
         */

        /**
         * @zh
         * 如果 [[`EmbeddedPlayer.reconciledSpeed`]] 为 `true`，则在宿主的播放速度改变时触发。
         * @en
         * If [[`EmbeddedPlayer.reconciledSpeed`]] is `true`, is called when the host changes its speed.
         * @param speed The speed.
         */

        setTime(_time) {}
      });
    }
  };
});
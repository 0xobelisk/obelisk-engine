System.register("q-bundled:///fs/cocos/animation/tracks/size-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js", "./utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, RealCurve, Size, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, Channel, Track, maskIfEmpty, SizeTrackEval, _dec, _class, _class2, _initializer, CHANNEL_NAMES, SizeTrack;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("SizeTrackEval", void 0);
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      RealCurve = _coreIndexJs.RealCurve;
      Size = _coreIndexJs.Size;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_trackJs) {
      Channel = _trackJs.Channel;
      Track = _trackJs.Track;
    }, function (_utilsJs) {
      maskIfEmpty = _utilsJs.maskIfEmpty;
    }],
    execute: function () {
      CHANNEL_NAMES = ['Width', 'Height'];
      /**
       * @en
       * A size track animates a size attribute of target.
       * @zh
       * 尺寸轨道描述目标上某个尺寸属性的动画。
       */
      _export("SizeTrack", SizeTrack = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}SizeTrack`), _dec(_class = (_class2 = class SizeTrack extends Track {
        constructor() {
          super();
          this._channels = _initializer && _initializer();
          this._channels = new Array(2);
          for (let i = 0; i < this._channels.length; ++i) {
            const channel = new Channel(new RealCurve());
            channel.name = CHANNEL_NAMES[i];
            this._channels[i] = channel;
          }
        }

        /**
         * @en The width channel and the height channel of the track.
         * @zh 返回此轨道的宽度通道和高度通道。
         * @returns An readonly array in which
         * the first element is the width channel and the second element is the height channel.
         */
        channels() {
          return this._channels;
        }

        /**
         * @internal
         */
        [createEvalSymbol]() {
          return new SizeTrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve));
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_channels", [serializable], null)), _class2)) || _class));
      _export("SizeTrackEval", SizeTrackEval = class SizeTrackEval {
        constructor(_width, _height) {
          this._result = new Size();
          this._width = _width;
          this._height = _height;
        }
        get requiresDefault() {
          return !this._width || !this._height;
        }
        evaluate(time, defaultValue) {
          if (defaultValue) {
            this._result.x = defaultValue.x;
            this._result.y = defaultValue.y;
          }
          if (this._width) {
            this._result.width = this._width.evaluate(time);
          }
          if (this._height) {
            this._result.height = this._height.evaluate(time);
          }
          return this._result;
        }
      });
    }
  };
});
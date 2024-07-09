System.register("q-bundled:///fs/cocos/animation/tracks/color-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js", "./utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, RealCurve, Color, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, Channel, Track, maskIfEmpty, ColorTrackEval, _dec, _class, _class2, _initializer, CHANNEL_NAMES, ColorTrack;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("ColorTrackEval", void 0);
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      RealCurve = _coreIndexJs.RealCurve;
      Color = _coreIndexJs.Color;
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
      CHANNEL_NAMES = ['Red', 'Green', 'Blue', 'Alpha'];
      /**
       * @en
       * A color track animates a color attribute of target.
       * @zh
       * 颜色轨道描述目标上某个颜色属性的动画。
       */
      _export("ColorTrack", ColorTrack = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}ColorTrack`), _dec(_class = (_class2 = class ColorTrack extends Track {
        constructor() {
          super();
          this._channels = _initializer && _initializer();
          this._channels = new Array(4);
          for (let i = 0; i < this._channels.length; ++i) {
            const channel = new Channel(new RealCurve());
            channel.name = CHANNEL_NAMES[i];
            this._channels[i] = channel;
          }
        }

        /**
         * @en The four channel of the track.
         * @zh 返回此轨道的四条通道。
         * @returns An readonly four length array in which
         * the element at n denotes the channel of n-th(in order of RGBA) color component(in form of integer within 0-255).
         */
        channels() {
          return this._channels;
        }

        /**
         * @internal
         */
        [createEvalSymbol]() {
          return new ColorTrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve), maskIfEmpty(this._channels[2].curve), maskIfEmpty(this._channels[3].curve));
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_channels", [serializable], null)), _class2)) || _class));
      _export("ColorTrackEval", ColorTrackEval = class ColorTrackEval {
        constructor(_x, _y, _z, _w) {
          this._result = new Color();
          this._x = _x;
          this._y = _y;
          this._z = _z;
          this._w = _w;
        }
        get requiresDefault() {
          return !this._x || !this._y || !this._z || !this._w;
        }
        evaluate(time, defaultValue) {
          if (defaultValue) {
            Color.copy(this._result, defaultValue);
          }
          if (this._x) {
            this._result.r = this._x.evaluate(time);
          }
          if (this._y) {
            this._result.g = this._y.evaluate(time);
          }
          if (this._z) {
            this._result.b = this._z.evaluate(time);
          }
          if (this._w) {
            this._result.a = this._w.evaluate(time);
          }
          return this._result;
        }
      });
    }
  };
});
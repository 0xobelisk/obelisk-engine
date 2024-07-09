System.register("q-bundled:///fs/cocos/animation/tracks/array-track.js", ["../../core/index.js", "../define.js", "./track.js"], function (_export, _context) {
  "use strict";

  var _decorator, RealCurve, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, Channel, Track, RealArrayTrackEval, _dec, _class, _class2, _initializer, ccclass, serializable, RealArrayTrack;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("RealArrayTrackEval", void 0);
  return {
    setters: [function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
      RealCurve = _coreIndexJs.RealCurve;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_trackJs) {
      Channel = _trackJs.Channel;
      Track = _trackJs.Track;
    }],
    execute: function () {
      ({
        ccclass,
        serializable
      } = _decorator);
      /**
       * @en
       * A real array track animates a real array attribute of target(such as morph weights of mesh renderer).
       * Every element in the array is corresponding to a real channel.
       * @zh
       * 实数数组轨道描述目标上某个实数数组属性（例如网格渲染器的形变权重）的动画。
       * 数组中的每个元素都对应一条实数通道。
       */
      _export("RealArrayTrack", RealArrayTrack = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}RealArrayTrack`), _dec(_class = (_class2 = class RealArrayTrack extends Track {
        constructor(...args) {
          super(...args);
          this._channels = _initializer && _initializer();
        }
        /**
         * @en The number of elements in the array which this track produces.
         * If you increased the count, there will be new empty real channels appended.
         * Otherwise if you decreased the count, the last specified number channels would be removed.
         * @zh 此轨道产生的数组元素的数量。
         * 当你增加数量时，会增加新的空实数通道；当你减少数量时，最后几个指定数量的通道会被移除。
         */
        get elementCount() {
          return this._channels.length;
        }
        set elementCount(value) {
          const {
            _channels: channels
          } = this;
          const nChannels = channels.length;
          if (value < nChannels) {
            this._channels.splice(value);
          } else if (value > nChannels) {
            this._channels.push(...Array.from({
              length: value - nChannels
            }, () => new Channel(new RealCurve())));
          }
        }

        /**
         * @en The channels of the track.
         * @zh 返回此轨道的所有通道的数组。
         */
        channels() {
          return this._channels;
        }

        /**
         * @internal
         */
        [createEvalSymbol]() {
          return new RealArrayTrackEval(this._channels.map(({
            curve
          }) => curve));
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_channels", [serializable], function () {
        return [];
      })), _class2)) || _class));
      _export("RealArrayTrackEval", RealArrayTrackEval = class RealArrayTrackEval {
        constructor(_curves) {
          this._curves = _curves;
          this._result = new Array(_curves.length).fill(0.0);
        }
        get requiresDefault() {
          return false;
        }
        evaluate(time) {
          const {
            _result: result
          } = this;
          const nElements = result.length;
          for (let iElement = 0; iElement < nElements; ++iElement) {
            result[iElement] = this._curves[iElement].evaluate(time);
          }
          return this._result;
        }
      });
    }
  };
});
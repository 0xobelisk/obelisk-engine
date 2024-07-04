System.register("q-bundled:///fs/cocos/particle/burst.js", ["../core/data/decorators/index.js", "../core/math/index.js", "./animator/curve-range.js"], function (_export, _context) {
  "use strict";

  var ccclass, type, serializable, editable, range, repeat, CurveRange, _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, Burst;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
      range = _coreDataDecoratorsIndexJs.range;
    }, function (_coreMathIndexJs) {
      repeat = _coreMathIndexJs.repeat;
    }, function (_animatorCurveRangeJs) {
      CurveRange = _animatorCurveRangeJs.default;
    }],
    execute: function () {
      /**
       * @en
       * A burst is a particle emission event, where a number of particles are all emitted at the same time
       * @zh
       * Burst 是粒子的一种发射事件，触发时很多粒子将会同时喷出
       */
      _export("default", Burst = (_dec = ccclass('cc.Burst'), _dec2 = type(CurveRange), _dec3 = range([0, Number.POSITIVE_INFINITY, 1]), _dec(_class = (_class2 = class Burst {
        /**
         *  @en The time from particle system start until this burst triggered.
         *  @zh 粒子系统开始运行到触发此次 Brust 的时间。
         */
        get time() {
          return this._time;
        }
        set time(val) {
          this._time = val;
          this._curTime = val;
        }
        /**
         * @en Burst trigger count.
         * @zh Burst 的触发次数。
         */
        get repeatCount() {
          return this._repeatCount;
        }
        set repeatCount(val) {
          this._repeatCount = val;
          this._remainingCount = val;
        }

        /**
         * @en Trigger interval count.
         * @zh 每次触发的间隔时间。
         */

        constructor() {
          this._time = _initializer && _initializer();
          this._repeatCount = _initializer2 && _initializer2();
          this.repeatInterval = _initializer3 && _initializer3();
          /**
           * @en Burst particle count.
           * @zh 发射的粒子的数量。
           */
          this.count = _initializer4 && _initializer4();
          this._remainingCount = void 0;
          this._curTime = void 0;
          this._remainingCount = 0;
          this._curTime = 0.0;
        }

        /**
         * @en Update burst trigger
         * @zh 更新触发事件
         * @param psys @en Particle system to burst. @zh 要触发的粒子系统。
         * @param dt @en Update interval time. @zh 粒子系统更新的间隔时间。
         * @internal
         */
        update(psys, dt) {
          if (this._remainingCount === 0) {
            this._remainingCount = this._repeatCount;
            this._curTime = this._time;
          }
          if (this._remainingCount > 0) {
            let preFrameTime = repeat(psys._time - psys.startDelay.evaluate(0, 1), psys.duration) - dt;
            preFrameTime = preFrameTime > 0.0 ? preFrameTime : 0.0;
            const curFrameTime = repeat(psys.time - psys.startDelay.evaluate(0, 1), psys.duration);
            if (this._curTime >= preFrameTime && this._curTime < curFrameTime) {
              psys.emit(this.count.evaluate(this._curTime / psys.duration, 1), dt - (curFrameTime - this._curTime));
              this._curTime += this.repeatInterval;
              --this._remainingCount;
            }
          }
        }

        /**
         * @en Reset remaining burst count and burst time to zero.
         * @zh 重置触发时间和留存的触发次数为零。
         */
        reset() {
          this._remainingCount = 0;
          this._curTime = 0.0;
        }

        /**
         * @en Get the max particle count this burst trigger.
         * @zh 获取最大的触发粒子数量。
         * @param psys @en Particle system to burst. @zh 要触发的粒子系统。
         * @returns @en burst max particle count. @zh 一次最多触发的粒子个数。
         */
        getMaxCount(psys) {
          return this.count.getMax() * Math.min(Math.ceil(psys.duration / this.repeatInterval), this.repeatCount);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_time", [serializable], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class2.prototype, "time", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "time"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_repeatCount", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "repeatCount", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "repeatCount"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "repeatInterval", [serializable, editable], function () {
        return 1;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "count", [_dec2, serializable, _dec3], function () {
        return new CurveRange();
      })), _class2)) || _class));
    }
  };
});
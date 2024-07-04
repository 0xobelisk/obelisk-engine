System.register("q-bundled:///fs/cocos/profiler/perf-counter.js", ["../core/data/decorators/index.js", "./counter.js"], function (_export, _context) {
  "use strict";

  var ccclass, Counter, _dec, _class, PerfCounter;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_counterJs) {
      Counter = _counterJs.Counter;
    }],
    execute: function () {
      _export("PerfCounter", PerfCounter = (_dec = ccclass('cc.PerfCounter'), _dec(_class = class PerfCounter extends Counter {
        constructor(id, opts, now) {
          super(id, opts, now);
          this._time = now;
        }
        start(now = 0) {
          this._time = now;

          // DISABLE: long time running will cause performance drop down
          // window.performance.mark(this._idstart);
        }

        end(now = 0) {
          this._value = now - this._time;

          // DISABLE: long time running will cause performance drop down
          // window.performance.mark(this._idend);
          // window.performance.measure(this._id, this._idstart, this._idend);

          this._average(this._value);
        }
        tick() {
          this.end();
          this.start();
        }
        frame(now) {
          const t = now;
          const e = t - this._time;
          this._total++;
          const avg = this._opts.average || 1000;
          if (e > avg) {
            this._value = this._total * 1000 / e;
            this._total = 0;
            this._time = t;
            this._average(this._value);
          }
        }
      }) || _class));
    }
  };
});
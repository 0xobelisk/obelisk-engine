System.register("q-bundled:///fs/cocos/profiler/perf-counter.js", ["../core/data/decorators/index.js", "./counter.js"], function (_export, _context) {
  "use strict";

  var ccclass, Counter, _dec, _class, PerfCounter;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_counterJs) {
      Counter = _counterJs.Counter;
    }],
    execute: function () {
      _export("PerfCounter", PerfCounter = (_dec = ccclass('cc.PerfCounter'), _dec(_class = /*#__PURE__*/function (_Counter) {
        _inheritsLoose(PerfCounter, _Counter);
        function PerfCounter(id, opts, now) {
          var _this;
          _this = _Counter.call(this, id, opts, now) || this;
          _this._time = now;
          return _this;
        }
        var _proto = PerfCounter.prototype;
        _proto.start = function start(now) {
          if (now === void 0) {
            now = 0;
          }
          this._time = now;

          // DISABLE: long time running will cause performance drop down
          // window.performance.mark(this._idstart);
        };
        _proto.end = function end(now) {
          if (now === void 0) {
            now = 0;
          }
          this._value = now - this._time;

          // DISABLE: long time running will cause performance drop down
          // window.performance.mark(this._idend);
          // window.performance.measure(this._id, this._idstart, this._idend);

          this._average(this._value);
        };
        _proto.tick = function tick() {
          this.end();
          this.start();
        };
        _proto.frame = function frame(now) {
          var t = now;
          var e = t - this._time;
          this._total++;
          var avg = this._opts.average || 1000;
          if (e > avg) {
            this._value = this._total * 1000 / e;
            this._total = 0;
            this._time = t;
            this._average(this._value);
          }
        };
        return PerfCounter;
      }(Counter)) || _class));
    }
  };
});
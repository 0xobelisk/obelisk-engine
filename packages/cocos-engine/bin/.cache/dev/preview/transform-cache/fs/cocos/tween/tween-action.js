System.register("q-bundled:///fs/cocos/tween/tween-action.js", ["../core/index.js", "./actions/action-interval.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var warnID, warn, easing, ActionInterval, VERSION, TweenAction;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            https://www.cocos.com/
                                                                                                                                                                                                           
                                                                                                                                                                                                            Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                            of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                            in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                            use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                            of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                            subject to the following conditions:
                                                                                                                                                                                                           
                                                                                                                                                                                                            The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                            all copies or substantial portions of the Software.
                                                                                                                                                                                                           
                                                                                                                                                                                                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                            THE SOFTWARE.
                                                                                                                                                                                                           */
  /** adapter */
  function TweenEasingAdapter(easingName) {
    var initialChar = easingName.charAt(0);
    if (/[A-Z]/.test(initialChar)) {
      easingName = easingName.replace(initialChar, initialChar.toLowerCase());
      var arr = easingName.split('-');
      if (arr.length === 2) {
        var str0 = arr[0];
        if (str0 === 'linear') {
          easingName = 'linear';
        } else {
          var str1 = arr[1];
          switch (str0) {
            case 'quadratic':
              easingName = "quad" + str1;
              break;
            case 'quartic':
              easingName = "quart" + str1;
              break;
            case 'quintic':
              easingName = "quint" + str1;
              break;
            case 'sinusoidal':
              easingName = "sine" + str1;
              break;
            case 'exponential':
              easingName = "expo" + str1;
              break;
            case 'circular':
              easingName = "circ" + str1;
              break;
            default:
              easingName = str0 + str1;
              break;
          }
        }
      }
    }
    return easingName;
  }

  /** checker */
  function TweenOptionChecker(opts) {
    var header = ' [Tween:] ';
    var message = " option is not support in v + " + VERSION;
    var _opts = opts;
    if (_opts.delay) {
      warn(header + "delay" + message);
    }
    if (_opts.repeat) {
      warn(header + "repeat" + message);
    }
    if (_opts.repeatDelay) {
      warn(header + "repeatDelay" + message);
    }
    if (_opts.interpolation) {
      warn(header + "interpolation" + message);
    }
    if (_opts.onStop) {
      warn(header + "onStop" + message);
    }
  }
  return {
    setters: [function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
      warn = _coreIndexJs.warn;
      easing = _coreIndexJs.easing;
    }, function (_actionsActionIntervalJs) {
      ActionInterval = _actionsActionIntervalJs.ActionInterval;
    }, function (_coreGlobalExportsJs) {
      VERSION = _coreGlobalExportsJs.VERSION;
    }],
    execute: function () {
      _export("TweenAction", TweenAction = /*#__PURE__*/function (_ActionInterval) {
        _inheritsLoose(TweenAction, _ActionInterval);
        function TweenAction(duration, props, opts) {
          var _this;
          _this = _ActionInterval.call(this) || this;
          _this._opts = void 0;
          _this._props = void 0;
          _this._originProps = void 0;
          if (opts == null) {
            opts = Object.create(null);
          } else {
            /** checker */
            TweenOptionChecker(opts);

            /** adapter */
            if (opts.easing && typeof opts.easing === 'string') {
              opts.easing = TweenEasingAdapter(opts.easing);
            }

            // global easing or progress used for this action
            if (!opts.progress) {
              opts.progress = _this.progress;
            }
            if (opts.easing && typeof opts.easing === 'string') {
              var easingName = opts.easing;
              opts.easing = easing[easingName];
              if (!opts.easing) {
                warnID(1031, easingName);
              }
            }
          }
          _this._opts = opts;
          _this._props = Object.create(null);
          for (var name in props) {
            // filtering if
            // - it was not own property
            // - types was function / string
            // - it was undefined / null
            // eslint-disable-next-line no-prototype-builtins
            if (!props.hasOwnProperty(name)) continue;
            var value = props[name];
            if (typeof value === 'function') {
              value = value();
            }
            if (value == null || typeof value === 'string') continue;
            // property may have custom easing or progress function
            var customEasing = void 0;
            var progress = void 0;
            if (value.value !== undefined && (value.easing || value.progress)) {
              if (typeof value.easing === 'string') {
                customEasing = easing[value.easing];
                if (!customEasing) warnID(1031, value.easing);
              } else {
                customEasing = value.easing;
              }
              progress = value.progress;
              value = value.value;
            }
            var prop = Object.create(null);
            prop.value = value;
            prop.easing = customEasing;
            prop.progress = progress;
            _this._props[name] = prop;
          }
          _this._originProps = props;
          _this.initWithDuration(duration);
          return _this;
        }
        var _proto = TweenAction.prototype;
        _proto.clone = function clone() {
          var action = new TweenAction(this._duration, this._originProps, this._opts);
          this._cloneDecoration(action);
          return action;
        };
        _proto.startWithTarget = function startWithTarget(target) {
          ActionInterval.prototype.startWithTarget.call(this, target);
          var relative = !!this._opts.relative;
          var props = this._props;
          for (var property in props) {
            var _t = target[property];
            if (_t === undefined) {
              continue;
            }
            var prop = props[property];
            var value = prop.value;
            if (typeof _t === 'number') {
              prop.start = _t;
              prop.current = _t;
              // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              prop.end = relative ? _t + value : value;
            } else if (typeof _t === 'object') {
              if (prop.start == null) {
                prop.start = {};
                prop.current = {};
                prop.end = {};
              }
              for (var k in value) {
                // filtering if it not a number
                // eslint-disable-next-line no-restricted-globals
                if (isNaN(_t[k])) continue;
                prop.start[k] = _t[k];
                prop.current[k] = _t[k];
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                prop.end[k] = relative ? _t[k] + value[k] : value[k];
              }
            }
          }
          if (this._opts.onStart) {
            this._opts.onStart(this.target);
          }
        };
        _proto.update = function update(t) {
          var target = this.target;
          if (!target) return;
          var props = this._props;
          var opts = this._opts;
          var easingTime = t;
          if (opts.easing) easingTime = opts.easing(t);
          var progress = opts.progress;
          for (var name in props) {
            var prop = props[name];
            var time = prop.easing ? prop.easing(t) : easingTime;
            var interpolation = prop.progress ? prop.progress : progress;
            var start = prop.start;
            var end = prop.end;
            if (typeof start === 'number') {
              prop.current = interpolation(start, end, prop.current, time);
            } else if (typeof start === 'object') {
              // const value = prop.value;
              for (var k in start) {
                // if (value[k].easing) {
                //     time = value[k].easing(t);
                // }
                // if (value[k].progress) {
                //     interpolation = value[k].easing(t);
                // }
                prop.current[k] = interpolation(start[k], end[k], prop.current[k], time);
              }
            }
            target[name] = prop.current;
          }
          if (opts.onUpdate) {
            opts.onUpdate(this.target, t);
          }
          if (t === 1 && opts.onComplete) {
            opts.onComplete(this.target);
          }
        };
        _proto.progress = function progress(start, end, current, t) {
          return current = start + (end - start) * t;
        };
        return TweenAction;
      }(ActionInterval));
    }
  };
});